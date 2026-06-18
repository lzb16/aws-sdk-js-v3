#!/usr/bin/env bash
# 封装 docker run：把本地项目挂进容器，node_modules 用持久 volume。
#
# 用法:
#   ./docker/sdk-builder/run.sh [s3|iam|all] [--bump]
#
# 例:
#   ./docker/sdk-builder/run.sh s3            # 重新生成并编译 S3，产物落本地 clients/client-s3/
#   ./docker/sdk-builder/run.sh all --bump    # S3+IAM，并把 version 末段 +1
#
# 可用环境变量:
#   AWS_SDK_BUILDER_IMAGE   镜像名 (默认 aws-sdk-builder)
#   AWS_SDK_BUILDER_VOLUME  node_modules 持久卷名 (默认 aws_sdk_builder_nm_<uid>，按用户区分)
#   AWS_SDK_BUILDER_USER    容器运行身份 (默认 $(id -u):0，见下方说明)
#   AWS_SDK_BUILDER_SECCOMP seccomp 设置 (默认 unconfined；置空=用 docker 默认 profile，见下方说明)
#   GRADLE_ONLINE=1         临时允许 gradle 联网(改了 codegen 依赖时用)
set -euo pipefail

IMAGE="${AWS_SDK_BUILDER_IMAGE:-aws-sdk-builder}"
# node_modules 持久卷：默认按【宿主用户 UID】区分 → 多用户共用一台机器/一个镜像时，
# 各人各自一个卷，互不干扰(卷内容由首次运行者按其 uid 落地，键到 uid 才不会出现
# "A 先把共享卷填成 A 所有、B 写不进"的并发竞争)。同一用户重复跑复用同一卷、很快。
# 想让多人显式共用一个卷，自行设 AWS_SDK_BUILDER_VOLUME=同名(但别并发首次跑同一空卷)。
VOLUME="${AWS_SDK_BUILDER_VOLUME:-aws_sdk_builder_nm_$(id -u)}"

# 以非 root「任意 UID:任意 GID」运行：
#  - UID/GID 都取宿主当前用户 $(id -u):$(id -g) → 产物写回 bind 挂载的 /app(宿主仓库)时
#    属主就是你本人(uid:gid)，不会再像容器内 root 那样把宿主工作树文件变成 root 所有。
#  - 镜像里运行期需要写的目录(/opt/gradle-home、/opt/home 等)都做成了 world-writable，
#    所以无需在 root 组(GID 0)里，任意 UID:任意 GID 都能写。
#  宿主用户本就是 root 时这等于 0:0，与旧行为一致、无回归。
#  需要别的身份(如 CI 指定)可用 AWS_SDK_BUILDER_USER 覆盖，如 AWS_SDK_BUILDER_USER=1000:1000。
USER_SPEC="${AWS_SDK_BUILDER_USER:-$(id -u):$(id -g)}"

# 定位仓库根：本脚本位于 <repo>/docker/sdk-builder/
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# 给 stdout 接了终端时加 -t，让日志更友好；管道/CI 下自动省略
TTY_FLAG=""
if [ -t 1 ]; then TTY_FLAG="-t"; fi

# 关闭 seccomp 过滤（默认 unconfined）。原因：
#  本镜像基于 ubuntu:22.04 → 容器内 glibc 2.35，其 pthread_create 优先发 clone3() 系统调用。
#  在【老内核 + 老 libseccomp 的主机】上（如 CentOS 7 / kernel 3.10 + libseccomp 2.3.1，
#  或仍用系统 libseccomp 的旧 docker），docker 的 seccomp 配置对 clone3/部分 clone 标志位
#  会返回 EPERM 而非 ENOSYS，glibc 不回落到老 clone() → 线程创建失败 →
#  node 一启动就在 NodePlatform 构造里 `uv_thread_create` 断言崩溃（core dumped），
#  表现为 `yarn ... generate-clients` 一跑就 Aborted。关掉 seccomp 让 clone3 直达内核
#  （老内核无此调用→ENOSYS），glibc 即回落 clone()，构建就能跑。
#  这是一次性、跑可信代码的本地构建容器，关 seccomp 无安全顾虑；现代 docker 上加不加都行。
#  若主机策略不允许 unconfined，可设 AWS_SDK_BUILDER_SECCOMP=/path/to/profile.json 指定
#  一个把 clone3 返回 ENOSYS 的自定义 profile；或设为空（AWS_SDK_BUILDER_SECCOMP=）用 docker 默认。
SECCOMP_OPT=""
SECCOMP_VALUE="${AWS_SDK_BUILDER_SECCOMP-unconfined}"
if [ -n "$SECCOMP_VALUE" ]; then SECCOMP_OPT="--security-opt seccomp=$SECCOMP_VALUE"; fi

# 注意挂载叠加顺序：
#  - 根 node_modules 用命名卷盖在 /app/node_modules 上 → 宿主自己的根 node_modules 被遮蔽，
#    编译始终用镜像 seed 的预编译依赖，不受宿主影响。
#  - 但 client 目录下的【嵌套】node_modules（宿主若跑过 yarn install 会生成）是随
#    -v $REPO_ROOT:/app 一起挂进来的、不被上面的命名卷遮蔽；Node 解析模块逐层向上找时
#    会先命中它，可能引入异版本 @types（如更高版本 @types/babel__traverse 让老 tsc 报
#    TS1005、或带回 @types/jest 触发全局类型冲突），干扰编译。故给两个 client 的 node_modules
#    各盖一个【tmpfs】遮蔽成空目录，让解析回落到根 /app/node_modules。
#  - 必须用 --tmpfs 而非匿名卷 -v：匿名卷会用【镜像里该路径的内容】做 copy-up，而镜像里可能
#    残留构建期泄漏进去的 nested node_modules（含不兼容的高版本 @types），反被暴露出来；
#    tmpfs 永远是空的，才是真正的遮蔽，且随容器退出自动消失。
exec docker run --rm $TTY_FLAG \
  --user "$USER_SPEC" \
  $SECCOMP_OPT \
  -e "GRADLE_ONLINE=${GRADLE_ONLINE:-0}" \
  -v "$REPO_ROOT:/app" \
  -v "$VOLUME:/app/node_modules" \
  --tmpfs /app/clients/client-s3/node_modules \
  --tmpfs /app/clients/client-iam/node_modules \
  -w /app \
  "$IMAGE" "$@"
