#!/usr/bin/env bash
# 닻별 모임 관리 시스템 배포 스크립트
# - index.html 의 app.js / style.css 캐시 버전(?v=X.Y)을 자동으로 +0.1
# - backups/ 에 백업 후 git add/commit/push
#
# 사용법:
#   ./deploy.sh                 # 기본 커밋 메시지로 배포
#   ./deploy.sh "커밋 메시지"     # 커밋 메시지 지정

set -euo pipefail
cd "$(dirname "$0")"

TS=$(date +%Y%m%d_%H%M%S)
MSG="${1:-Deploy: bump cache version}"

mkdir -p backups
cp index.html "backups/index.html.${TS}.bak"

# ?v=X.Y 의 Y(소수부)를 +1 해서 새 버전 문자열 출력
bump() {  # $1=파일명
  local file="$1"
  local cur
  cur=$(grep -oE "${file}\?v=[0-9]+\.[0-9]+" index.html | head -1 | sed -E "s/.*\?v=//")
  if [ -z "$cur" ]; then
    echo "  - ${file}: 버전 표기 없음, 건너뜀"
    return
  fi
  local major="${cur%%.*}"
  local minor="${cur##*.}"
  local new="${major}.$((minor + 1))"
  # macOS/BSD sed 호환 (-i '')
  sed -i '' -E "s|${file}\?v=${cur}|${file}?v=${new}|g" index.html
  echo "  - ${file}: v${cur} -> v${new}"
}

echo "🔼 캐시 버전 올리는 중..."
bump "app.js"
bump "style.css"

cp index.html "backups/index.html.${TS}.after.bak"

echo "📦 커밋 & 푸시..."
git add -A
git commit -m "${MSG}

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
git push origin main

echo "✅ 배포 완료. GitHub Pages 반영까지 1~2분."
echo "   https://yj-83.github.io/datbyeol-meeting-app/"
