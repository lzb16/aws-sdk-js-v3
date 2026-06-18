# 制作 / 维护编译镜像（aws-sdk-builder）

本文讲**镜像怎么造出来的、为什么这么造、什么时候要重造**。日常「怎么用镜像出包」看 [README.md](./README.md)。

镜像目标：把 S3 / IAM 的「codegen + 编译 + 打包」整套环境（Node / Java / gradle / smithy / maven / 预编译依赖）固化进一个镜像，**运行期完全离线**，彻底摆脱对特定服务器和外网 maven 库的依赖。

---

## 一、构建命令

在**仓库根目录**执行（构建期需联网，走宿主代理；首次约 10–20 分钟）：

```bash
docker build \
  --build-arg http_proxy="$http_proxy" \
  --build-arg https_proxy="$https_proxy" \
  -f docker/sdk-builder/Dockerfile \
  -t aws-sdk-builder .
```

- 代理从宿主环境变量 `$http_proxy/$https_proxy` 传入（本环境为 `http://10.2.57.108:7890`）。**Docker daemon 本身没配代理**，所以代理只能这样在构建期注入容器内。
- 运行期不需要代理（已离线）。

构建产物：一个约 2.25GB 的镜像 `aws-sdk-builder:latest`。

---

## 二、为什么是现在这套结构（关键设计决策）

1. **base 用本机 `ubuntu:22.04`，不用 `node:16`**
   本环境 Docker daemon 拉 Docker Hub 直接 EOF（daemon 无代理）。改用本机已有的 `ubuntu:22.04`，再自己装 JDK11（apt）+ Node16（nodejs.org 二进制）+ yarn 1.22。

2. **依赖走 npm 预编译包，不编 65 个 `packages/`**
   Dockerfile **故意不 COPY `packages/`**。这样 `yarn install` 在 workspace 里找不到 `@aws-sdk/*` 本地包，会从 registry 拉**预编译版（含 dist）**，hoist 到根 `node_modules` 固化成 seed。client 的 tsconfig 没有指向 src 的 paths，编译只认 `node_modules` 里的预编译实体——所以挂载本地 `packages/*` 源码也会被自然忽略。

3. **运行期用法 = 挂载本地仓库**
   `run.sh` 把仓库 `-v $PWD:/app` 挂进去，`node_modules` 用持久卷 `aws_sdk_builder_nm`（首次从镜像内 `/opt/seed` 同步）。产物 `dist/` 和 `.tgz` 直接落宿主 `clients/client-*/`。改 `aws-models` 或 codegen 的 Java 都在容器内重新 codegen，**不用重建镜像**。
   - **隔离宿主 node_modules**：命名卷盖在 `/app/node_modules` 上 → 宿主的**根** `node_modules` 被遮蔽，编译只认 seed。但 `-v $PWD:/app` 会把 client 目录下的**嵌套** `node_modules`（宿主跑过 `yarn install` 才有）一起挂进来，且不被根卷遮蔽；Node 逐层向上解析会先命中它（可能带回异版本 `@types`：实测更高版本 `@types/babel__traverse` 会让 TS 4.1.5 报 TS1005，`@types/jest` 会触发全局类型冲突）。故 `run.sh` 额外给 `clients/client-{s3,iam}/node_modules` 各盖一个 **`--tmpfs`** 遮蔽成空目录，解析回落到根。
     - **为何是 tmpfs 而非匿名卷 `-v`**：匿名卷会用**镜像里该路径的内容**做 copy-up；而旧 `.dockerignore`（未收口前）曾把宿主的 client 嵌套 `node_modules` 泄漏进镜像（残留高版本 `@types`），匿名卷会把这份残留**反暴露**给编译 → 反而触发 TS1005。`tmpfs` 永远是空的，且随 `--rm` 自动消失，是正解。（`.dockerignore` 收口后新镜像不再泄漏，但 `tmpfs` 仍是更稳妥的写法。）

4. **gradle 离线**
   预热阶段（构建期）联网把全部 gradle / smithy / maven 依赖拉齐固化进镜像；之后 `offline.gradle`（注入到 `$GRADLE_USER_HOME/init.d/`）把 `startParameter.offline=true`，codegen 不再联网。临时要联网用 `GRADLE_ONLINE=1`。

5. **支持以非 root（任意 UID:任意 GID）运行**
   镜像可在 `docker run --user <任意UID>:<任意GID>` 下跑（`run.sh` 默认 `--user $(id -u):$(id -g)`），**不要求在 root 组里**。这要求运行期会写的目录对任何身份可写、smithy-ts 的解析不依赖运行用户 HOME。四处落地：
   - **smithy-ts 发布到固定路径 `/opt/m2/repository`**（而非 `~/.m2`）。运行期 gradle 经 `aliyun-mirror.gradle` 里新增的 `maven { url 'file:///opt/m2/repository' }` 解析它——与 HOME 无关，非 root（HOME 可能是 `/` 或进不去的 `/root`）也能离线取到。
   - **gradle 缓存以 world-writable 诞生**：两个写 `/opt/gradle-home/caches` 的 gradle 步骤前置 `umask 0000`（目录 777 / 文件 666）。纯靠 umask 实现，**不引入递归 `chmod` 故零额外镜像层膨胀**（caches 约 189MB，递归 chmod 会整层复制）。
   - **顶层目录 + HOME 设成 world-writable**：`chmod 1777 /opt/gradle-home`（运行期任意用户在其下新建 `daemon/.tmp` 等）；`ENV HOME=/opt/home` 且 `chmod 1777 /opt/home`，放在所有联网构建步骤**之后**，避免构建期把 root 私有缓存写进去。
   - **删掉构建期残留的 gradle daemon 目录**：gradle 对 `daemon/<ver>/registry.bin` 强制设权 644 root、**无视 umask** → 运行期非属主写不了 → `IOException Permission denied`（即便 `-Dorg.gradle.daemon=false`，codegen 的 jvmargs 仍会 fork single-use daemon 照写该目录，故禁用 daemon 不解决）。`rm -rf /opt/gradle-home/daemon` 后运行期以运行用户身份重建即可。
   - 详见 README 第九节。宿主用户是 root 时 `$(id -u):$(id -g)` == `0:0`，无回归。

---

## 三、镜像分层（Dockerfile 在做什么）

| 层 | 内容 | 要点 |
|----|------|------|
| 1 | apt 装 `ca-certificates curl xz-utils unzip git openjdk-11-jdk-headless` | 加 `Acquire::Retries 15`，应对代理对大文件偶发 502 |
| 2 | 下 Node 16 二进制 + 装 yarn 1.22 | curl `--retry 15 --retry-all-errors -C -` 断点续传 |
| 3a | 只 COPY 依赖清单（根 package.json/yarn.lock + 两个 client 的 package.json） | 不含 `packages/`，让 install 层可缓存 |
| 4 | 改 yarn.lock + patch package.json + `yarn install` + 做 seed | 见下「install 层的修正」 |
| 3b | COPY 其余源码（scripts/ codegen/ 两个 client） | 放 install 之后，改源码不触发重装 |
| 4.5 | curl 预下载 gradle 6.8.3 发行版到 wrapper 的 hash 目录 | 代理对 100MB 大文件易 502，wrapper 自身下载无断点续传会失败 |
| — | COPY `aliyun-mirror.gradle` 到 init.d | 见下「maven 403」；含 `file:///opt/m2` 仓库 |
| 5a | clone + 编译 `smithy-typescript-codegen:0.3.0` 发布到 `/opt/m2`（`-Dmaven.repo.local`） | 见下「smithy 0.3.0」；`umask 0002` 让缓存组可写 |
| 5b | 预热：联网跑一次 S3 + IAM 的 `generate-clients` | 固化全部 smithy/maven 依赖、验证 codegen 可跑；`umask 0002` 同上 |
| 6 | COPY `offline.gradle` 到 init.d | 必须在预热**之后**，否则预热也被强制离线拉不到东西 |
| 7 | 非 root 支持：`chmod 1777 /opt/gradle-home`、`rm -rf .../daemon`、建 `/opt/home` 并 `ENV HOME` | 见第二节决策 5；任意 UID:任意 GID 可运行 |
| 8 | COPY `build-clients.sh` 为入口 + chmod | 在 Dockerfile **末尾**，只改它重建很快（见第六节） |

---

## 四、构建期攻克的环境难题（改 Dockerfile 前必读）

> 这些都是这套网络环境（受限代理 + 内网 verdaccio + jcenter 已死）特有的坑，已在 Dockerfile / `aliyun-mirror.gradle` 里解决。动相关部分前先理解，别误删。

1. **代理对 maven central 全域名返回 403**（repo.maven.apache.org / repo1.maven.org）
   → `aliyun-mirror.gradle`（init.d）把 central / jcenter / plugin-portal 的仓库 URL 改写为阿里云镜像；并用 `gradle.beforeProject` 钩子给子项目脚本级 `buildscript{}` 注入阿里云（否则 `sdk-codegen` 的 buildscript classpath 拿不到 smithy-cli）。

2. **`smithy-typescript-codegen:0.3.0` 公网彻底消失**
   这是 jcenter 旧坐标 `software.amazon.smithy:smithy-typescript-codegen:0.3.0`，central / jcenter 存档 / 各镜像都没有；central 上同名新坐标 `software.amazon.smithy.typescript:...` 是后期快照、API 不兼容（多了 `deserializeErrorDocumentBody`）。
   → 镜像里从开源仓库 `smithy-lang/smithy-typescript` 的 commit `caa953ac`（2021-04-16，对应 aws-sdk v3.11.0、在 `deserializeErrorDocumentBody` 引入之前）编译 `:smithy-typescript-codegen:publishToMavenLocal`，坐标 group/name/version 正好匹配依赖声明。发布目标用 `-Dmaven.repo.local=/opt/m2/repository` 钉到与 HOME 无关的固定路径（不再是 `~/.m2`，便于非 root 运行——见第二节决策 5）；`aliyun-mirror.gradle` 把 `maven { url 'file:///opt/m2/repository' }` 排在仓库首位优先命中。

3. **yarn.lock 有 5 处指向内网 verdaccio（`localhost:4873`）**
   → 构建期 `sed` 改回公网 `registry.yarnpkg.com`（verdaccio 本就透传 npmjs，integrity 一致）。

4. **`@types/mocha` 缺失 → tsc TS2688**
   `client-s3/tsconfig.json` 的 `types:["mocha","node"]`（因仓库有手写 `S3.spec.ts` 用 mocha），但 `@types/mocha` 只被 client-s3 引用、yarn 会嵌套到 client 下不提升根，seed 只取根 → 缺失。
   → install 层 patch 根 `package.json` 的 devDependencies 加 `@types/mocha`，逼 yarn 提升到根、进 seed。

5. **`@types/jest` 与 `@types/mocha` 全局类型冲突 → tsc TS2403**
   `client-iam/tsconfig.json` 没有 `types` 数组 → tsc 默认引入根下所有 `@types`，jest 与 mocha 都声明全局 `describe/it/beforeEach` 就冲突。
   → install 层 `rm -rf node_modules/@types/jest`（jest 在 S3/IAM 编译里用不到：client 用 mocha、IAM 无 spec），只留 mocha。

6. **`@aws-crypto/*` 宽松引用解析到要 node20 的新版**
   → resolutions 把 `@aws-sdk/{types,util-utf8-browser,util-locate-window}` 锁回 3.10.0。

7. **`npm pack` 在 git 树内漏 dist**（影响打包，不是构建期，但与镜像逻辑相关）
   npm8 的 npm-packlist 在 git 工作树内遵循 git 忽略规则，而仓库根 `.gitignore` 忽略 `dist` → 直接在 client 目录打包会丢掉编译产物。
   → `build-clients.sh` 改为「复制 client 到 git 树外的临时目录再 `npm pack`」（按 client 的 `.npmignore`：含 dist、排除 coverage/docs/e2e/tsbuildinfo）。详见 README「发布」一节。

---

## 五、什么时候要重建镜像

**不用重建**（在容器内重跑 `run.sh` 即可）：
- 改 `codegen/.../aws-models/*.json` 接口定义
- 改 codegen 的 Java（`AddS3Config.java` 等）—— gradle 每次 codegen 会自动重编 Java 子项目，离线命中预热缓存

**需要重建**：
- 改了 `Dockerfile`、`build-clients.sh`、`aliyun-mirror.gradle`、`offline.gradle`
- 改了根 `package.json` / `yarn.lock` 依赖
- codegen 引入了预热缓存里没有的新 maven 依赖（此时构建期联网拉新依赖）

---

## 六、重建的缓存行为

- 只改 `build-clients.sh`：它的 COPY 在 Dockerfile 末尾，前面的 install / smithy / 预热层全部命中缓存，**只跑最后两层（COPY + chmod），几秒钟**。
- 改 install 层（层 4，如加依赖）：会**连锁失效**后面的 gradle 预下载、smithy 编译、预热——这几步要重新联网，约几分钟。
- 想彻底重置：`docker build --no-cache ...`。
- 注意：本机多次构建后，中间层缓存可能被挤掉，导致「本该秒级」的重建又重跑了 smithy/预热——属正常，结果不受影响。

---

## 七、构建后自检

```bash
# 1) smithy 0.3.0 已发布到固定 maven 仓库 /opt/m2
docker run --rm --entrypoint sh aws-sdk-builder -c \
  'ls /opt/m2/repository/software/amazon/smithy/smithy-typescript-codegen/0.3.0/'

# 2) seed 里 @types：应有 mocha/node、无 jest
docker run --rm --entrypoint sh aws-sdk-builder -c \
  'for t in mocha node jest; do [ -d /opt/seed/node_modules/@types/$t ] && echo "has $t" || echo "NO  $t"; done'

# 3) 端到端 + 离线闭环（全断网跑通即合格；--user 模拟非 root、且 GID 不在 root 组）
docker volume rm aws_sdk_builder_nm 2>/dev/null
docker run --rm --network=none -e GRADLE_ONLINE=0 \
  --user 1000:1000 \
  -v "$PWD:/app" -v aws_sdk_builder_nm:/app/node_modules \
  --tmpfs /app/clients/client-s3/node_modules --tmpfs /app/clients/client-iam/node_modules \
  -w /app aws-sdk-builder all

# 4) 产物 tarball 含 dist、ts3.4 单层、无 tsbuildinfo
TGZ=$(ls clients/client-s3/aws-sdk-client-s3-*.tgz)
tar tzf "$TGZ" | grep -c 'package/dist/'          # 应 >0（约 1148）
tar tzf "$TGZ" | grep -c 'tsbuildinfo'            # 应 0
```

> 第 3 步用 `--user 1000:1000`（任意 uid:gid、不在 root 组）时，`/app` 须对 UID 1000 可写（在「宿主用户非 root」的真实场景里你本就拥有该目录）；若在 root 宿主上临时这么测，记得先把待写目录 `chown` 给 1000，或直接用 `--user 0:0`。

---

## 八、关键文件

| 文件 | 作用 |
|------|------|
| `Dockerfile` | 镜像定义（分层见第三节） |
| `aliyun-mirror.gradle` | 构建期注入：maven 仓库改写为阿里云 + 子项目 buildscript 注入（解 403）+ `file:///opt/m2` 仓库（运行期解析 smithy-ts，与 HOME 无关） |
| `offline.gradle` | 运行期注入：gradle 强制离线开关 |
| `build-clients.sh` | 容器入口：codegen + 编译 + git 树外 `npm pack` |
| `run.sh` | 封装 `docker run`：挂载本地项目 + 持久 node_modules 卷 |
| `publish.sh` | 宿主机发布脚本（不进容器）：校验包/版本/registry/登录后发布 `.tgz` |
| `../../.dockerignore` | 裁剪构建上下文（位于仓库根，排除 node_modules/dist/.git 及其他 245 个 client） |

构建工具链版本：Node `16.20.2`、yarn `1.22.22`、JDK `11`、gradle `6.8.3`、smithy-typescript-codegen 源码 commit `caa953ac52f042f1e4c6b27bcd814ccb71127f09`。
