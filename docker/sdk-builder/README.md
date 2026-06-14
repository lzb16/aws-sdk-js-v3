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
    -v "$PWD:/app" -v "aws_sdk_builder_nm:/app/node_modules" \
    --tmpfs /app/clients/client-s3/node_modules --tmpfs /app/clients/client-iam/node_modules \
    -w /app aws-sdk-builder all
  ```

  > 后两个 `--tmpfs` 把 client 嵌套 `node_modules` 遮蔽成空目录，避免宿主（或镜像残留）的嵌套依赖干扰编译（见第八节 FAQ）。

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

- **首次 `run.sh` 较慢**：会把镜像内置依赖同步到持久卷 `aws_sdk_builder_nm`，之后复用、很快。
- **想清空依赖卷重来**：`docker volume rm aws_sdk_builder_nm`。
- **改了依赖版本 / 想重置环境**：重新 `docker build`（必要时 `--no-cache`）。
- **打出的包 `npm install` 后报找不到模块**：八成是裸 `npm publish` 漏了 dist，见第三节，改用 `publish.sh`（它会先自检 `.tgz` 含 dist，漏了直接拒发）。
- **宿主机也装过 `node_modules`，会不会干扰容器编译**：不会。根 `node_modules` 被持久卷 `aws_sdk_builder_nm` 遮蔽；client 目录下的**嵌套** `node_modules`（宿主跑 `yarn install` 时会生成）也被 `run.sh` 用 `--tmpfs` 遮蔽成空目录——容器编译始终只认镜像 seed 的预编译依赖，与宿主无关。直接用 `docker run` 时记得照搬这两个 `--tmpfs /app/clients/client-*/node_modules`（用 `--tmpfs` 而非匿名卷 `-v`：匿名卷会把镜像里残留的同名目录 copy-up 暴露出来，tmpfs 才是真空）。
- **CI 里用**：`run.sh` 在无 TTY 时自动省略 `-t`；也可直接用 `docker run`（见第五节命令）。
