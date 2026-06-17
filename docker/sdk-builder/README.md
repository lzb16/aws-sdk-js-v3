# S3 / IAM 编译镜像（aws-sdk-builder）使用说明

把 S3、IAM 两个 client 的「改接口定义 → 生成代码 → 编译出包」流程打包进一个 Docker 镜像，
**不再依赖特定服务器环境，codegen 也不再联网拉 maven 库**（gradle 走离线）。

- 依赖（`@aws-sdk/*`）：从 npm 拉**预编译包**，**不编那 65 个 packages**。
- 用法：把本地项目挂进容器，产物 `dist/` 和 `.tgz` **直接落到本地** `clients/client-*/`。
- 改 `aws-models` 接口定义、改 codegen 的 Java（`AddS3Config.java` 等）：都**在容器里重新生成即可，无需重建镜像**。

> 想了解镜像**怎么造的 / 为什么这么造 / 什么时候要重造**，看 [BUILD.md](./BUILD.md)。

---

## 一、一次性构建镜像

在**仓库根目录**执行（构建期需联网走宿主代理，约 10–20 分钟）：

```bash
docker build \
  --build-arg http_proxy="$http_proxy" \
  --build-arg https_proxy="$https_proxy" \
  -f docker/sdk-builder/Dockerfile \
  -t aws-sdk-builder .
```

首次给脚本加执行权限：

```bash
chmod +x docker/sdk-builder/run.sh
```

> 构建细节、分层、踩过的坑见 [BUILD.md](./BUILD.md)。运行期完全离线，不需要代理。

---

## 二、日常出包

本地改好 `codegen/sdk-codegen/aws-models/s3.2006-03-01.json`（或 iam）后：

```bash
./docker/sdk-builder/run.sh s3        # 只出 S3
./docker/sdk-builder/run.sh iam       # 只出 IAM
./docker/sdk-builder/run.sh all       # 两个都出（默认）
./docker/sdk-builder/run.sh s3 --bump # 出 S3，并把 version 末段 +1
```

完成后产物在本地（每个 client 目录只保留**最新**一个 `.tgz`，打包前会清掉旧的）：

```
clients/client-s3/dist/{cjs,es,types}                 # 编译产物
clients/client-s3/aws-sdk-client-s3-<version>.tgz     # 可发布的 npm 包（含 dist）
```

> 版本号：重新生成代码**不会**冲掉你在 `clients/client-s3/package.json` 里手动维护的
> `version`（如 `3.11.0-cli-92`）。要 +1 可手动改，或加 `--bump` 让脚本自动 +1。

---

## 三、发布到 verdaccio（在宿主机执行，不进容器）

发布只需 `npm` + 网络 + 认证，宿主都有，**不需要这个镜像**。用 `publish.sh` 发布上一步打好的 `.tgz`：

```bash
# 先在宿主登录一次目标 registry（脚本不存密码，认证用宿主 ~/.npmrc）
npm login --registry http://<你的verdaccio>

# 发布（必须传版本号，须与该 client 目录里那个 .tgz 内部版本一致）
./docker/sdk-builder/publish.sh s3  3.11.0-cli-92 --registry http://<你的verdaccio>
./docker/sdk-builder/publish.sh iam 3.11.0-cli-43 --registry http://<你的verdaccio>
```

脚本会逐项把关（任一不过直接拒发）：

1. **包内容**：`.tgz` 必须含 `dist/`、无 `ts3.4/ts3.4` 套娃、无 `tsbuildinfo`；
2. **版本对得上**：命令行传的版本必须 == 该 client 目录里 `.tgz` 内部 `package.json` 的版本（挡住“忘了重新出包、误发陈旧包”）；
3. **registry**：必须显式（或经环境变量 `SDK_PUBLISH_REGISTRY`），并拒绝误发到公网 npmjs；
4. **已登录**：`npm whoami` 检查，未登录提示你先 `npm login`；
5. **是否已发**：`npm view` 查 registry 上是否已有该版本。
6. 发布后再 `npm view` **回验**确实到位。

确认与重发：

- **新版本** → 打印摘要后问 `[y/N]`（默认 N）；CI 里加 `--yes` 跳过。
- **版本已存在**（覆盖，破坏性）→ 交互式会醒目警告并要你敲 `y` 确认，确认后**先 `npm unpublish` 再 publish**；无终端的 CI 下覆盖必须显式加 `--force`（`--yes` 顶不了覆盖）。
- `--dry-run`：只跑全部检查并打印将执行的动作，不真正发布。

> 版本号一旦传错（与磁盘上的 `.tgz` 不符）会直接中止——它既是“我确实要发这个版本”的明确表态，也是对陈旧包的一道防线。

### ⚠️ 必须发布那个 `.tgz` 文件，不要在 client 目录里裸 `npm publish`

`npm publish <tarball>` 是**原样上传已打好的包**，不重新打包、也不触发构建脚本——dist 完整、内容可控。
而**裸** `npm publish`（不带 tarball 参数）会现场重新打包，在本仓库环境里有两个坑：

1. **漏 dist**：仓库根 `.gitignore` 忽略 `dist`，npm8 在 git 工作树内会按 git 忽略规则把 `dist` 剔除 → 发上去的包 `main` 指向 `dist/cjs/index.js` 却没有 dist，**装下来不可用**。
2. **ts3.4 套娃**：会触发 client 的 `prepublishOnly: yarn build` → `postbuild: downlevel-dts`（不先清 `dist/types/ts3.4`）→ `ts3.4/ts3.4/…` 递归膨胀。

> 记一条：**命令里必须出现那个 `.tgz`**（在哪个目录跑都行）。发布前可自检：
> `tar tzf clients/client-s3/aws-sdk-client-s3-*.tgz | grep -c dist/`（应 >0）。

---

## 四、改 codegen 的 Java（无需重建镜像）

没有 Bucket 的接口要在
`codegen/smithy-aws-typescript-codegen/src/main/java/software/amazon/smithy/aws/typescript/codegen/AddS3Config.java`
的 `NON_BUCKET_ENDPOINT_OPERATIONS` 里加接口名。

改完**直接** `./docker/sdk-builder/run.sh s3` —— 容器内 gradle 会自动重新编译该 Java 子项目再生成代码，**不用重建镜像**。

---

## 五、离线说明

- **镜像构建期**需联网（拉依赖 + 预热 gradle/maven 缓存）。
- **构建后运行期完全离线**：codegen 的 gradle 被强制离线（`offline.gradle`），依赖都固化在镜像里。
- 验证离线（全断网跑通即合格）：

  ```bash
  docker run --rm --network=none \
    --user "$(id -u):$(id -g)" \
    -v "$PWD:/app" -v "aws_sdk_builder_nm:/app/node_modules" \
    --tmpfs /app/clients/client-s3/node_modules --tmpfs /app/clients/client-iam/node_modules \
    -w /app aws-sdk-builder all
  ```

  > 后两个 `--tmpfs` 把 client 嵌套 `node_modules` 遮蔽成空目录，避免宿主（或镜像残留）的嵌套依赖干扰编译（见第八节 FAQ）。
  > `--user "$(id -u):$(id -g)"` 让容器以你（非 root 也行、任意 uid:gid）的身份跑，产物属主正确（见第九节）。`run.sh` 已自动带上。

- 仅当改了 codegen 的 `build.gradle`、引入了缓存里没有的新依赖时，才需临时联网：

  ```bash
  GRADLE_ONLINE=1 ./docker/sdk-builder/run.sh s3
  ```

---

## 六、偶尔要让某个 packages 的本地小改生效

本镜像默认用 npm 上的预编译 `@aws-sdk/*`，**不反映**你对 `packages/*` 源码的本地修改。
若偶尔要打补丁让某个 package 改动生效，在容器里单独编译它并覆盖进 `node_modules`：

```bash
docker run --rm -v "$PWD:/app" -v "aws_sdk_builder_nm:/app/node_modules" \
  -w /app --entrypoint bash aws-sdk-builder -c '
    cd packages/<包名> && yarn install --ignore-scripts && yarn build \
    && cp -a dist /app/node_modules/@aws-sdk/<包名>/'
```

之后再 `run.sh` 编译 client 即可引用到补丁后的版本。

---

## 七、文件说明

| 文件 | 作用 |
|------|------|
| `Dockerfile` | 镜像定义：Node16 + JDK11 + 预装依赖(seed) + 预热 gradle 缓存 |
| `BUILD.md` | **制作/维护镜像文档**：设计、构建命令、分层、踩坑、何时重建 |
| `build-clients.sh` | 容器入口：codegen + 编译 + git 树外 `npm pack` |
| `run.sh` | 封装 `docker run`，挂载本地项目 + 持久 `node_modules` 卷 |
| `publish.sh` | **宿主机发布脚本**：校验 + 登录检查 + 发布 `.tgz` 到 verdaccio（见第三节） |
| `aliyun-mirror.gradle` | 构建期注入 maven 阿里云镜像（解代理 403） |
| `offline.gradle` | 注入 gradle 离线开关，根治 codegen 联网拉 maven |
| `../../.dockerignore` | 裁剪构建上下文（位于仓库根） |

---

## 八、常见问题

- **首次 `run.sh` 较慢**：会把镜像内置依赖同步到持久卷 `aws_sdk_builder_nm_<uid>`，之后复用、很快。
- **想清空依赖卷重来**：`docker volume rm aws_sdk_builder_nm_$(id -u)`（默认卷按你的 uid 区分）。
- **多用户同机**：各人自动用各自的卷、各自代码目录，并发安全（见第九节「多用户共用」）。
- **改了依赖版本 / 想重置环境**：重新 `docker build`（必要时 `--no-cache`）。
- **打出的包 `npm install` 后报找不到模块**：八成是裸 `npm publish` 漏了 dist，见第三节，改用 `publish.sh`（它会先自检 `.tgz` 含 dist，漏了直接拒发）。
- **宿主机也装过 `node_modules`，会不会干扰容器编译**：不会。根 `node_modules` 被持久卷 `aws_sdk_builder_nm` 遮蔽；client 目录下的**嵌套** `node_modules`（宿主跑 `yarn install` 时会生成）也被 `run.sh` 用 `--tmpfs` 遮蔽成空目录——容器编译始终只认镜像 seed 的预编译依赖，与宿主无关。直接用 `docker run` 时记得照搬这两个 `--tmpfs /app/clients/client-*/node_modules`（用 `--tmpfs` 而非匿名卷 `-v`：匿名卷会把镜像里残留的同名目录 copy-up 暴露出来，tmpfs 才是真空）。
- **CI 里用**：`run.sh` 在无 TTY 时自动省略 `-t`；也可直接用 `docker run`（见第五节命令）。

---

## 九、以非 root 用户运行（任意 UID:任意 GID）

镜像支持以**任意非 root 身份**运行——任意 UID、任意 GID，**不要求在 root 组里**。`run.sh`
默认就这么做：它给 `docker run` 注入 `--user "$(id -u):$(id -g)"` —— **UID/GID 都取你（宿主当前用户）**。

- **产物属主正确**：`dist/`、`.tgz` 写回 bind 挂载的 `/app`（你的仓库）时属主就是你本人 `你:你的组`，
  不会再像「容器内 root」那样把你工作树里的文件变成 `root` 所有。
- **无 group 限制**：镜像里运行期需要写的目录（`/opt/gradle-home` 写 gradle 锁/journal/daemon、
  `/opt/home` 放 yarn/npm 缓存）都做成了 **world-writable**；`/opt/m2`（smithy-ts）world-readable。
  所以**无需在 root 组（GID 0）里**，任意 UID:任意 GID 都能跑。

**宿主用户本就是 root** 时，`$(id -u):$(id -g)` == `0:0`，与旧行为完全一致，**无回归**。

需要别的身份（如 CI 固定）可用环境变量覆盖（支持任意 `uid:gid`）：

```bash
AWS_SDK_BUILDER_USER=1000:1000 ./docker/sdk-builder/run.sh s3
```

> 实现要点：可写目录靠构建期 `umask 0000` 以 world-writable 诞生（零镜像膨胀），不是事后递归 `chmod`；
> smithy-ts 放在与 HOME 无关的 `/opt/m2` 并由 `aliyun-mirror.gradle` 的 `file://` 仓库解析；
> 构建期残留的 gradle daemon 目录被删（其 `registry.bin` 被 gradle 强制 644 root、无视 umask），
> 运行期由运行用户自行重建。

### 多用户共用一台机器 / 一个镜像

**可以，且并发安全**——前提是每人用各自的 node_modules 卷（`run.sh` 已默认这么做）：

- **代码目录**：各人 `-v $PWD:/app` 挂自己的仓库，用各自 `uid:gid` 写，互不影响。
- **运行期可写状态**（gradle 锁/daemon/缓存、HOME、`/tmp`）：都在镜像层、不是卷，`--rm` 每个容器一份独立可写层，**并发也不串**。
- **node_modules 卷**：`run.sh` 默认把卷名按 **UID** 区分（`aws_sdk_builder_nm_<uid>`），所以每个用户一个卷，并发跑互不干扰。已实测 uid 1000 / 1001 各自代码目录、**同时编译**双双成功、产物归属各自正确。

> ⚠️ **别让多人显式共用同一个 node_modules 卷**：该卷首次为空时由首个运行者按其 uid 填充，
> 之后别人 uid 不同就**写不进/可能并发竞争**（实测共用空卷并发会让后到者 `cp: Permission denied`）。
> 默认按 uid 区分就是为了避开这点。真要共用，先让一个人**单独**跑一次把卷填好，之后其他人只读不写即可。

> 代价：每个用户一个 ~650MB 的卷。想回收某用户的卷：`docker volume rm aws_sdk_builder_nm_<uid>`。

### 迁移注意（仅限「宿主用户是非 root」且之前用 root 跑过）

如果你以前用**容器内 root**（旧 `run.sh` 不带 `--user`）跑过，工作树里 `clients/`、`codegen/`
下可能残留 `root` 属主的生成文件；切到非 root 运行后，容器进程（你的 UID）会因无权覆盖它们而报错。
一次性收归己有即可：

```bash
sudo chown -R "$(id -u):$(id -g)" clients codegen
```

> 持久卷 `aws_sdk_builder_nm_<uid>` 是**只读消费**且 world-readable；全新卷由 `build-clients`
> 首次从镜像内置 `/opt/seed` 按运行用户落地，无需手动处理。

### 迁移注意（仅限「宿主用户是非 root」且之前用 root 跑过）

如果你以前用**容器内 root**（旧 `run.sh` 不带 `--user`）跑过，工作树里 `clients/`、`codegen/`
下可能残留 `root` 属主的生成文件；切到非 root 运行后，容器进程（你的 UID）会因无权覆盖它们而报错。
一次性收归己有即可：

```bash
sudo chown -R "$(id -u):$(id -g)" clients codegen
```

> 持久卷 `aws_sdk_builder_nm` 是**只读消费**且 world-readable，非 root 直接能读，无需处理；
> 全新卷会从镜像内置依赖（同样 world-readable）初始化，也没问题。
