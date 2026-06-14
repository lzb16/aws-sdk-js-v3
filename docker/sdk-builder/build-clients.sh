#!/usr/bin/env bash
#
# 镜像入口：对 S3 / IAM 做 代码生成(codegen) + 编译 + 打包。
#
# 用法:  build-clients [s3|iam|all] [--bump]
#   s3 | iam | all   要处理的客户端(默认 all)
#   --bump           把 client package.json 的 version 末段数字 +1(默认不改)
#
# 通常通过 docker/sdk-builder/run.sh 调用(已挂好本地项目与 node_modules 卷)。
# 产物 dist/ 与 .tgz 直接落在 /app/clients/client-<svc>/(即宿主本地目录)。
#
set -euo pipefail

APP=/app
SEED=/opt/seed/node_modules

# ---------- 参数解析 ----------
SERVICES=()
BUMP=0
for arg in "$@"; do
  case "$arg" in
    s3)     SERVICES+=("s3") ;;
    iam)    SERVICES+=("iam") ;;
    all)    SERVICES+=("s3" "iam") ;;
    --bump) BUMP=1 ;;
    *) echo "未知参数: $arg  (可用: s3 | iam | all | --bump)" >&2; exit 2 ;;
  esac
done
[ ${#SERVICES[@]} -eq 0 ] && SERVICES=("s3" "iam")

model_for() {
  case "$1" in
    s3)  echo "s3.2006-03-01.json" ;;
    iam) echo "iam.2010-05-08.json" ;;
  esac
}

cd "$APP"

# ---------- 1) 确保 node_modules 就绪 ----------
# 持久卷首次为空 → 从镜像内置的预装依赖同步(离线，无需联网 install)。
if [ ! -e "$APP/node_modules/@aws-sdk/config-resolver/package.json" ]; then
  echo ">> 首次初始化 node_modules（从镜像内置依赖同步，离线）…"
  mkdir -p "$APP/node_modules"
  cp -a "$SEED/." "$APP/node_modules/"
fi

# ---------- 2) 逐个客户端：codegen + 编译 + 打包 ----------
for svc in "${SERVICES[@]}"; do
  model="$(model_for "$svc")"
  client="clients/client-$svc"
  echo ""
  echo "==================== $svc ===================="

  # 2a) 代码生成（gradle 离线；若改过 codegen 的 Java 会在此自动重编 Java 子项目）
  #     预建 protocol-test 空输出目录：generate-clients 收尾会 copyToClients 它，
  #     而 generateProtocolTests() 已被注释、目录不存在会导致 ENOENT。
  mkdir -p codegen/protocol-test-codegen/build/smithyprojections/protocol-test-codegen
  echo ">> codegen: $model"
  yarn --silent generate-clients -g "codegen/sdk-codegen/aws-models/$model"

  # 2b) 可选：version 末段 +1（呼应文档“每次出包 +1”）
  if [ "$BUMP" -eq 1 ]; then
    node -e '
      const fs = require("fs");
      const p = process.argv[1] + "/package.json";
      const j = JSON.parse(fs.readFileSync(p));
      j.version = j.version.replace(/(\d+)(?!.*\d)/, (m) => String(+m + 1));
      fs.writeFileSync(p, JSON.stringify(j, null, 2) + "\n");
      console.log(">> bump version -> " + j.version);
    ' "$client"
  fi

  # 2c) 清旧产物并编译（依赖是预编译版，直接 tsc 出 dist）
  echo ">> build: $client"
  ( cd "$client" && yarn --silent run remove-dist >/dev/null 2>&1 || true; yarn --silent build )

  # 2d) 打包 tgz
  #     注意：/app 是 git 工作树，仓库根 .gitignore 忽略 dist；npm8 的 npm-packlist 在 git 树内
  #     会遵循 git 忽略规则，把编译产物 dist 从包里剔除（package.json main 指向 dist → 装出来不可用）。
  #     故复制到 git 树外的临时目录再 npm pack：此时按 client 的 .npmignore 规则（含 dist、
  #     排除 coverage/docs/e2e/*.tsbuildinfo）。npm pack 不触发 prepublishOnly，不会重编、
  #     不会在已有 ts3.4 上再套一层（downlevel-dts 的递归坑）。
  #     发布时请用：npm publish <这个.tgz> —— 原样上传 tarball、同样不触发重编。
  ver="$(node -p "require('./$client/package.json').version")"
  echo ">> npm pack ($ver)"
  rm -f "$APP/$client"/*.tgz
  PACKDIR="$(mktemp -d)"
  cp -a "$APP/$client/." "$PACKDIR/"
  rm -rf "$PACKDIR/node_modules" "$PACKDIR"/*.tgz
  ( cd "$PACKDIR" && npm pack --silent >/dev/null )
  mv "$PACKDIR"/*.tgz "$APP/$client/"
  rm -rf "$PACKDIR"

  echo ">> 完成: client-$svc @ $ver"
  echo "   dist : $APP/$client/dist/{cjs,es,types}"
  for f in "$APP/$client"/*.tgz; do [ -e "$f" ] && echo "   tgz  : $f"; done
done

echo ""
echo "全部完成 ✅"
