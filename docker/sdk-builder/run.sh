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
#   AWS_SDK_BUILDER_VOLUME  node_modules 持久卷名 (默认 aws_sdk_builder_nm)
#   GRADLE_ONLINE=1         临时允许 gradle 联网(改了 codegen 依赖时用)
set -euo pipefail

IMAGE="${AWS_SDK_BUILDER_IMAGE:-aws-sdk-builder}"
VOLUME="${AWS_SDK_BUILDER_VOLUME:-aws_sdk_builder_nm}"

# 定位仓库根：本脚本位于 <repo>/docker/sdk-builder/
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

# 给 stdout 接了终端时加 -t，让日志更友好；管道/CI 下自动省略
TTY_FLAG=""
if [ -t 1 ]; then TTY_FLAG="-t"; fi

exec docker run --rm $TTY_FLAG \
  -e "GRADLE_ONLINE=${GRADLE_ONLINE:-0}" \
  -v "$REPO_ROOT:/app" \
  -v "$VOLUME:/app/node_modules" \
  -w /app \
  "$IMAGE" "$@"
