#!/usr/bin/env bash
#
# 把 build-clients 打好的 client tarball 发布到 verdaccio（在宿主机执行，不进容器）。
# 发布只需 npm + 网络 + 认证，宿主都有，无需镜像工具链。
#
# 用法:
#   docker/sdk-builder/publish.sh <s3|iam> <version> --registry <url> [选项]
#
# 例:
#   docker/sdk-builder/publish.sh s3 3.11.0-cli-92 --registry http://10.2.57.x:4873
#
# 参数:
#   <s3|iam>           要发布的 client
#   <version>          期望发布的版本号；必须与 clients/client-<svc>/ 里那个 .tgz 内部
#                      package.json 的 version 完全一致（不一致即中止，防止误发陈旧包 /
#                      忘了重新出包）。传版本号本身就是“我确实要发这个版本”的明确表态。
#
# 选项:
#   --registry <url>   目标 registry（必填；亦可用环境变量 SDK_PUBLISH_REGISTRY）
#   --yes              跳过“发布新版本”的 [y/N] 确认（只对 registry 上不存在的新版本生效）
#   --force            允许覆盖已存在的版本（先 npm unpublish 再 publish）。无终端的 CI
#                      环境下，覆盖必须用它；交互式下改用提示里的 y 确认即可，无需 --force。
#   --dry-run          跑完所有检查并打印将执行的动作，但不真正发布
#
# 退出码: 0 成功 / 2 用法错 / 1 各种拒发或失败
#
set -euo pipefail

err()  { printf '\033[31m✗ %s\033[0m\n' "$*" >&2; }
ok()   { printf '\033[32m✓ %s\033[0m\n' "$*"; }
warn() { printf '\033[33m⚠ %s\033[0m\n' "$*"; }
die()  { err "$*"; exit 1; }

usage() {
  echo "用法: publish.sh <s3|iam> <version> --registry <url> [--yes] [--force] [--dry-run]" >&2
  exit 2
}

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"

command -v npm  >/dev/null || die "未找到 npm（发布在宿主机执行，需要 npm）"
command -v node >/dev/null || die "未找到 node"
command -v tar  >/dev/null || die "未找到 tar"

# ---------- 解析参数 ----------
SVC=""; VERSION=""; REGISTRY="${SDK_PUBLISH_REGISTRY:-}"
ASSUME_YES=0; FORCE=0; DRY=0
while [ $# -gt 0 ]; do
  case "$1" in
    --registry)   REGISTRY="${2:-}"; shift 2 ;;
    --registry=*) REGISTRY="${1#*=}"; shift ;;
    --yes|-y)     ASSUME_YES=1; shift ;;
    --force)      FORCE=1; shift ;;
    --dry-run)    DRY=1; shift ;;
    -h|--help)    usage ;;
    -*)           err "未知选项: $1"; usage ;;
    *)
      if   [ -z "$SVC" ];     then SVC="$1"
      elif [ -z "$VERSION" ]; then VERSION="$1"
      else err "多余参数: $1"; usage; fi
      shift ;;
  esac
done

case "$SVC" in s3|iam) ;; *) err "第一个参数必须是 s3 或 iam"; usage ;; esac
[ -n "$VERSION" ]  || { err "缺少 <version> 参数"; usage; }
[ -n "$REGISTRY" ] || die "必须指定 --registry <url>（或设置环境变量 SDK_PUBLISH_REGISTRY）"

# ---------- registry 防呆：必须显式 http(s)，且拦截误发到公网 npm ----------
case "$REGISTRY" in
  http://*|https://*) ;;
  *) die "registry 必须以 http:// 或 https:// 开头: $REGISTRY" ;;
esac
case "$REGISTRY" in
  *registry.npmjs.org*|*registry.yarnpkg.com*|*.npmjs.com*|*.npmjs.org*)
    die "拒绝向公网 npm 发布私有 fork（$REGISTRY）。请指定你们的 verdaccio 地址。" ;;
esac

# ---------- 定位 tarball（每个 client 目录应只有一个，由 build-clients 保证）----------
CLIENT_DIR="$REPO_ROOT/clients/client-$SVC"
shopt -s nullglob
TGZS=("$CLIENT_DIR"/*.tgz)
shopt -u nullglob
case "${#TGZS[@]}" in
  0) die "未找到 $CLIENT_DIR/*.tgz —— 请先 ./docker/sdk-builder/run.sh $SVC 出包" ;;
  1) TGZ="${TGZS[0]}" ;;
  *) die "$CLIENT_DIR 下有多个 .tgz（应只有一个），请清理后重试" ;;
esac

# ---------- 读 tarball 内真实 name@version，并核对传入的版本 ----------
PKG_JSON="$(tar -xzOf "$TGZ" package/package.json)" || die "无法读取 $TGZ 内的 package.json"
NAME="$(node -p    'JSON.parse(require("fs").readFileSync(0,"utf8")).name'    <<<"$PKG_JSON")"
TGZ_VER="$(node -p 'JSON.parse(require("fs").readFileSync(0,"utf8")).version' <<<"$PKG_JSON")"
[ -n "$NAME" ] && [ "$NAME" != "undefined" ] || die "tarball 内 package.json 缺少 name"
if [ "$TGZ_VER" != "$VERSION" ]; then
  die "版本不一致：你要发 '$VERSION'，但 $TGZ 内是 '$TGZ_VER'。
     多半忘了重新出包；请先 ./docker/sdk-builder/run.sh $SVC（必要时加 --bump）"
fi

# ---------- 包内容自检：含 dist、无 ts3.4 套娃、无 tsbuildinfo ----------
LIST="$(tar -tzf "$TGZ")"
DIST_CNT="$(printf '%s\n' "$LIST" | grep -c '^package/dist/' || true)"
NEST_CNT="$(printf '%s\n' "$LIST" | grep -c 'ts3\.4/ts3\.4'  || true)"
TBI_CNT="$(printf '%s\n'  "$LIST" | grep -c 'tsbuildinfo'    || true)"
[ "$DIST_CNT" -gt 0 ] || die "tarball 不含 dist/（package.json main 指向 dist，装下来不可用）—— 打包方式不对？"
[ "$NEST_CNT" -eq 0 ] || die "tarball 出现 ts3.4/ts3.4 递归套娃（$NEST_CNT 处）—— 包已损坏，请重新出包"
[ "$TBI_CNT"  -eq 0 ] || warn "tarball 含 tsbuildinfo（$TBI_CNT 个），非致命但本不该出现"

# ---------- registry 探活 + 登录检查（脚本不碰密码）----------
echo ">> 探测 registry: $REGISTRY"
npm ping --registry "$REGISTRY" >/dev/null 2>&1 \
  || warn "npm ping 失败（该 registry 可能不支持 ping）；继续用 whoami 验证连通与登录"
WHO="$(npm whoami --registry "$REGISTRY" 2>/dev/null || true)"
[ -n "$WHO" ] || die "未登录该 registry（或不可达）。请先在宿主执行：npm login --registry $REGISTRY"
ok "已登录: $WHO"

# ---------- 查 registry 上该版本是否已存在 ----------
EXISTING="$(npm view "$NAME@$VERSION" version --registry "$REGISTRY" 2>/dev/null | tr -d '[:space:]' || true)"

# ---------- 摘要 ----------
echo ""
echo "  包名     : $NAME"
echo "  版本     : $VERSION"
echo "  registry : $REGISTRY"
echo "  tarball  : $TGZ"
echo "  dist 文件: $DIST_CNT"
echo "  发布者   : $WHO"
echo "  registry 已存在该版本: $([ -n "$EXISTING" ] && echo 是 || echo 否)"
echo ""

confirm() { local ans; read -r -p "$1" ans; [ "$ans" = y ] || [ "$ans" = Y ]; }

do_publish()   { echo ">> npm publish"; npm publish "$TGZ" --registry "$REGISTRY"; }
do_overwrite() {
  echo ">> npm unpublish $NAME@$VERSION（覆盖前先删旧版本；--force 为 npm 自身参数）"
  npm unpublish "$NAME@$VERSION" --registry "$REGISTRY" --force
  do_publish
}

if [ -n "$EXISTING" ]; then
  # ===== 版本已存在：覆盖路径（破坏性）=====
  if [ "$DRY" -eq 1 ]; then
    warn "[dry-run] 版本已存在，将执行：先 unpublish 再覆盖发布 $NAME@$VERSION"
    exit 0
  fi
  if [ "$FORCE" -eq 1 ]; then
    warn "版本已存在，已给 --force，执行覆盖发布"
    do_overwrite
  elif [ -t 0 ]; then
    warn "$NAME@$VERSION 在 $REGISTRY 上已存在"
    warn "继续将先 unpublish 该版本、再覆盖发布（破坏性操作）"
    if confirm "确认覆盖? 输入 y 继续，其它任意键取消 [y/N]: "; then
      do_overwrite
    else
      echo "已取消。"; exit 1
    fi
  else
    die "版本已存在且无终端可确认；CI 下如确需覆盖，请加 --force 重跑"
  fi
else
  # ===== 新版本：非破坏性 =====
  if [ "$DRY" -eq 1 ]; then
    ok "[dry-run] 将发布新版本 $NAME@$VERSION 到 $REGISTRY"
    exit 0
  fi
  if [ "$ASSUME_YES" -eq 1 ]; then
    do_publish
  elif [ -t 0 ]; then
    if confirm "确认发布 $NAME@$VERSION 到 $REGISTRY ? [y/N]: "; then
      do_publish
    else
      echo "已取消。"; exit 1
    fi
  else
    die "无终端可确认；CI 下请加 --yes 跳过确认"
  fi
fi

# ---------- 发布后回验 ----------
PUBLISHED="$(npm view "$NAME@$VERSION" version --registry "$REGISTRY" 2>/dev/null | tr -d '[:space:]' || true)"
if [ "$PUBLISHED" = "$VERSION" ]; then
  ok "已发布并回验通过: $NAME@$VERSION → $REGISTRY"
else
  die "发布命令已执行，但回验未在 registry 上查到 $NAME@$VERSION（实际: '${PUBLISHED:-空}'）"
fi
