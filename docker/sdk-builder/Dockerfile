#
# S3 / IAM 代码生成 + 编译环境镜像
# 用法见 docker/sdk-builder/README.md
#
# 说明：
#  - 基于本地已有的 ubuntu:22.04，规避 Docker Hub 拉取(此环境 daemon 未配代理，拉 hub 会 EOF)
#  - 构建期通过 --build-arg http_proxy/https_proxy 让容器内联网走代理；运行期完全离线
#  - 故意不 COPY packages/：yarn 在 workspace 找不到 @aws-sdk/* 本地包，会从 npm 拉
#    预编译版(含 dist) → client 编译直接引用，无需编那 65 个包
#  - 预热阶段把全部 gradle/smithy/maven 依赖固化进镜像，之后 codegen 走 gradle 离线
#
FROM ubuntu:22.04

# 构建期代理(从宿主 --build-arg 传入)；运行期离线不需要
ARG http_proxy
ARG https_proxy
ARG no_proxy

ENV DEBIAN_FRONTEND=noninteractive \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    HUSKY_SKIP_INSTALL=1 \
    HUSKY=0 \
    JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64 \
    GRADLE_USER_HOME=/opt/gradle-home \
    PATH=/usr/local/node/bin:/usr/local/bin:/usr/bin:/bin

# --- 层1: 系统工具 + JDK 11 (apt 走 http_proxy 环境变量) ---
#  代理对大文件偶发 502/超时，加重试与超时放宽，提高成功率
RUN printf 'Acquire::Retries "15";\nAcquire::http::Timeout "90";\nAcquire::https::Timeout "90";\n' > /etc/apt/apt.conf.d/80retries \
 && apt-get update \
 && apt-get install -y --no-install-recommends \
      ca-certificates curl xz-utils unzip git openjdk-11-jdk-headless \
 && rm -rf /var/lib/apt/lists/*

# --- 层2: Node 16 (nodejs.org binary, 走 https_proxy) + yarn 1.22 ---
RUN curl -fSL --retry 15 --retry-delay 5 --retry-all-errors -C - \
      https://nodejs.org/dist/v16.20.2/node-v16.20.2-linux-x64.tar.xz -o /tmp/node.tar.xz \
 && mkdir -p /usr/local/node \
 && tar -xJf /tmp/node.tar.xz -C /usr/local/node --strip-components=1 \
 && rm /tmp/node.tar.xz \
 && npm install -g yarn@1.22.22 \
 && node --version && yarn --version

WORKDIR /app

# --- 层3a: 先只 COPY 依赖清单，install 层可被缓存复用 ---
COPY package.json yarn.lock .yarnrc lerna.json ./
COPY tsconfig.cjs.json tsconfig.es.json tsconfig.json prettier.config.js ./
COPY clients/client-s3/package.json ./clients/client-s3/
COPY clients/client-iam/package.json ./clients/client-iam/

# --- 层4: 安装依赖 + 做 seed ---
#  不用 --frozen-lockfile：yarn.lock 是完整 workspace 的，@aws-sdk/* 在其中是
#  workspace 引用；这里缺 packages/，需让 yarn 重新从 registry 解析其预编译版。
#  脱离完整 monorepo 后的两处修正：
#  1) yarn.lock 里 5 处 resolved 指向你们的 verdaccio(localhost:4873)，改回公网 npmjs
#     (verdaccio 本就透传 npmjs，integrity 一致)；scoped 包还原 %2f -> /
#  2) @aws-crypto/* 用 ^3.x 宽松引用 @aws-sdk/{types,util-utf8-browser,util-locate-window}，
#     脱离 workspace 后会解析到要求 node>=20 的最新版，用 resolutions 锁回 3.10.0
#  3) client-s3/tsconfig.json 的 compilerOptions.types=["mocha","node"]（因为仓库里有手写的
#     clients/client-s3/S3.spec.ts 用 mocha），tsc 要求 @types/mocha 实在存在，否则报 TS2688。
#     它只被 client-s3 引用，完整 monorepo 里 yarn 会把它嵌套到 clients/client-s3/node_modules
#     （不提升到根），而我们只把根 node_modules 做成 seed、运行期挂载又遮蔽了镜像里那份嵌套副本。
#     故显式加进根 devDependencies 逼 yarn 提升到根 → 进 seed、运行期随卷可用。
#  4) 但 @types/mocha 与 @types/jest 都声明了全局 describe/it/beforeEach 等，类型互不兼容；
#     client-iam/tsconfig.json 没有 types 数组 → tsc 默认引入根下所有 @types，jest+mocha 同时
#     在场就报 TS2403（重复全局声明冲突）。jest 在 S3/IAM 的编译里根本用不到（client 用 mocha，
#     IAM 还没有任何 spec 文件），故从 seed 删掉 @types/jest，只留 mocha → 冲突消除、两端都能编。
RUN sed -i -e 's#http://localhost:4873/@aws-sdk%2f#https://registry.yarnpkg.com/@aws-sdk/#g' \
           -e 's#http://localhost:4873/#https://registry.yarnpkg.com/#g' yarn.lock \
 && node -e "const fs=require('fs');const j=JSON.parse(fs.readFileSync('package.json'));j.resolutions=Object.assign({},j.resolutions,{'@aws-sdk/types':'3.10.0','@aws-sdk/util-utf8-browser':'3.10.0','@aws-sdk/util-locate-window':'3.10.0'});j.devDependencies=Object.assign({},j.devDependencies,{'@types/mocha':'^8.0.4'});fs.writeFileSync('package.json',JSON.stringify(j,null,2))" \
 && yarn install --ignore-scripts --network-timeout 600000 \
 && rm -rf node_modules/@types/jest \
 && mkdir -p /opt/seed \
 && cp -a node_modules /opt/seed/node_modules

# --- 层3b: COPY 其余源码(放 install 之后，改源码不触发重装依赖) ---
COPY scripts/ ./scripts/
COPY codegen/ ./codegen/
COPY clients/client-s3/ ./clients/client-s3/
COPY clients/client-iam/ ./clients/client-iam/

# --- 层4.5: 预下载 gradle distribution ---
#  代理对 100MB 大文件易 502，gradle wrapper 自身下载无断点续传会失败；
#  这里用 curl 断点续传(-C -)+重试拼出完整 zip，并放到 wrapper 按 distributionUrl
#  算出的 hash 目录(MD5→base36，与 Gradle PathAssembler 一致)，wrapper 直接复用、不联网。
RUN GURL="https://services.gradle.org/distributions/gradle-6.8.3-bin.zip"; \
    HASH=$(node -e "const c=require('crypto');console.log(BigInt('0x'+c.createHash('md5').update(Buffer.from(process.argv[1])).digest('hex')).toString(36))" "$GURL"); \
    DEST="/opt/gradle-home/wrapper/dists/gradle-6.8.3-bin/$HASH"; \
    echo "gradle dist -> $DEST"; \
    mkdir -p "$DEST"; \
    curl -fSL --retry 30 --retry-delay 5 --retry-all-errors -C - "$GURL" -o "$DEST/gradle-6.8.3-bin.zip"; \
    cd "$DEST" && unzip -q -o gradle-6.8.3-bin.zip && touch gradle-6.8.3-bin.zip.ok && test -x gradle-6.8.3/bin/gradle

# --- 注入 maven 镜像(阿里云)：代理对 repo.maven.apache.org 返回 403，阿里云镜像 artifact 齐全 ---
RUN mkdir -p /opt/gradle-home/init.d
COPY docker/sdk-builder/aliyun-mirror.gradle /opt/gradle-home/init.d/aliyun-mirror.gradle

# --- 编译 jcenter 版 smithy-typescript-codegen:0.3.0 装入 mavenLocal ---
#  该 artifact(旧坐标 software.amazon.smithy:smithy-typescript-codegen:0.3.0)是 jcenter 时代产物，
#  公网(central/jcenter/各镜像)已彻底消失；central 同名新坐标 API 不兼容你们的 codegen。
#  解法：从开源仓库 smithy-lang/smithy-typescript 在 deserializeErrorDocumentBody(2021-04-27 引入)
#  之前、对应 aws-sdk v3.11.0(2021-04-19) 的 commit 编译，publishToMavenLocal；
#  坐标 group=software.amazon.smithy name=smithy-typescript-codegen version=0.3.0 与依赖声明完全一致。
ARG SMITHY_TS_COMMIT=caa953ac52f042f1e4c6b27bcd814ccb71127f09
RUN PROXY="${https_proxy:-$http_proxy}"; \
    PHOST=$(echo "$PROXY" | sed -E 's#^https?://##; s#/.*$##; s#:[0-9]+$##'); \
    PPORT=$(echo "$PROXY" | sed -E 's#.*:([0-9]+).*#\1#'); \
    export GRADLE_OPTS="-Dhttp.proxyHost=$PHOST -Dhttp.proxyPort=$PPORT -Dhttps.proxyHost=$PHOST -Dhttps.proxyPort=$PPORT -Dhttps.protocols=TLSv1.2 -Djdk.tls.client.protocols=TLSv1.2"; \
    git -c http.proxy="$PROXY" -c https.proxy="$PROXY" clone --filter=blob:none https://github.com/smithy-lang/smithy-typescript /opt/smithy-typescript \
 && cd /opt/smithy-typescript \
 && git -c http.proxy="$PROXY" -c https.proxy="$PROXY" checkout "$SMITHY_TS_COMMIT" \
 && ./gradlew --no-daemon -x test :smithy-typescript-codegen:publishToMavenLocal \
 && ls -la /root/.m2/repository/software/amazon/smithy/smithy-typescript-codegen/0.3.0/

# --- 层5: 预热 gradle —— 联网(走代理)下载 smithy/maven 依赖，验证 codegen(此时尚未开启离线) ---
RUN PROXY="${https_proxy:-$http_proxy}"; \
    if [ -n "$PROXY" ]; then \
      PHOST=$(echo "$PROXY" | sed -E 's#^https?://##; s#/.*$##; s#:[0-9]+$##'); \
      PPORT=$(echo "$PROXY" | sed -E 's#.*:([0-9]+).*#\1#'); \
      export GRADLE_OPTS="-Dhttp.proxyHost=$PHOST -Dhttp.proxyPort=$PPORT -Dhttps.proxyHost=$PHOST -Dhttps.proxyPort=$PPORT -Dhttps.protocols=TLSv1.2 -Djdk.tls.client.protocols=TLSv1.2"; \
      echo "gradle proxy -> $PHOST:$PPORT"; \
    fi; \
    mkdir -p codegen/protocol-test-codegen/build/smithyprojections/protocol-test-codegen; \
    yarn generate-clients -g codegen/sdk-codegen/aws-models/s3.2006-03-01.json \
 && yarn generate-clients -g codegen/sdk-codegen/aws-models/iam.2010-05-08.json

# --- 清理 yarn install 在 client 目录留下的嵌套 node_modules ---
#  workspace 安装会把未提升的依赖(含与老 TS 不兼容的高版本 @types/babel__traverse 等)嵌套进
#  clients/client-*/node_modules。编译只用根 seed(运行期 run.sh 还会再 tmpfs 遮蔽宿主同名目录)，
#  这些镜像内嵌套纯属死重量、且是 IAM tsc TS1005 的根源(IAM tsconfig 无 types 数组会吃所有 @types)，删掉。
RUN rm -rf clients/client-s3/node_modules clients/client-iam/node_modules

# --- 层6: 注入 gradle 离线 init(必须在预热之后) ---
RUN mkdir -p /opt/gradle-home/init.d
COPY docker/sdk-builder/offline.gradle /opt/gradle-home/init.d/offline.gradle

# --- 入口 ---
COPY docker/sdk-builder/build-clients.sh /usr/local/bin/build-clients
RUN chmod +x /usr/local/bin/build-clients
ENTRYPOINT ["build-clients"]
CMD ["all"]
