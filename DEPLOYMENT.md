# GitHub Pages 배포 가이드

이 가이드는 닻별 모임 관리 시스템을 GitHub Pages를 통해 무료로 호스팅하는 방법을 설명합니다.

## 사전 준비

1. **GitHub 계정** 필요
   - 없으면 [GitHub](https://github.com)에서 무료로 가입

2. **Git 설치** (선택사항)
   - 명령줄 사용 시 필요
   - [Git 다운로드](https://git-scm.com/)

## 방법 1: GitHub 웹사이트에서 직접 배포 (가장 쉬움)

### 1단계: 저장소 생성
1. [GitHub](https://github.com)에 로그인
2. 오른쪽 상단 `+` 버튼 → `New repository` 클릭
3. 정보 입력:
   - **Repository name**: `datbyeol-meeting-app` (또는 원하는 이름)
   - **Description**: "닻별 모임 관리 시스템"
   - **Public** 선택 (무료 호스팅은 Public 필요)
   - **Add a README file** 체크 해제
4. `Create repository` 클릭

### 2단계: 파일 업로드
1. 생성된 저장소 페이지에서 `uploading an existing file` 클릭
2. 다음 파일들을 드래그 앤 드롭:
   - `index.html`
   - `style.css`
   - `app.js`
   - `README.md`
   - `LICENSE`
   - `.gitignore` (선택사항)
3. 하단에 커밋 메시지 입력: "Initial commit"
4. `Commit changes` 클릭

### 3단계: GitHub Pages 활성화
1. 저장소 상단 메뉴에서 `Settings` 클릭
2. 왼쪽 메뉴에서 `Pages` 클릭
3. **Source** 섹션:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. `Save` 클릭
5. 잠시 기다리면 상단에 URL 표시:
   ```
   Your site is live at https://사용자명.github.io/datbyeol-meeting-app/
   ```

### 4단계: 접속 확인
- 위 URL을 브라우저에서 열어 확인
- 보통 1~2분 정도 소요

## 방법 2: Git 명령줄 사용 (고급 사용자)

### 1단계: GitHub에서 저장소 생성
- 위의 "방법 1"의 1단계와 동일

### 2단계: 로컬에서 Git 설정 및 푸시
```bash
# 프로젝트 폴더로 이동
cd /Users/yjkang/dev/meeting_app

# Git 초기화 (이미 완료됨)
git init

# 파일 추가
git add index.html style.css app.js README.md LICENSE .gitignore

# 커밋
git commit -m "Initial commit: 닻별 모임 관리 시스템 v2.0

- 회원 관리 기능
- 모임별 회비 관리
- 엑셀 내보내기
- 통계 기능"

# GitHub 저장소 연결 (사용자명을 본인의 GitHub 사용자명으로 변경)
git remote add origin https://github.com/사용자명/datbyeol-meeting-app.git

# main 브랜치로 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

### 3단계: GitHub Pages 활성화
- 위의 "방법 1"의 3단계와 동일

## 배포 후 업데이트 방법

### 웹사이트에서 업데이트
1. GitHub 저장소 페이지 접속
2. 수정할 파일 클릭 (예: `app.js`)
3. 연필 아이콘(Edit) 클릭
4. 내용 수정
5. 하단에 커밋 메시지 입력
6. `Commit changes` 클릭
7. 1~2분 후 자동으로 사이트 업데이트

### Git 명령줄에서 업데이트
```bash
# 파일 수정 후
git add .
git commit -m "수정 내용 설명"
git push
```

## 커스텀 도메인 연결 (선택사항)

본인 소유의 도메인(예: `datbyeol.com`)을 연결하려면:

1. GitHub Settings → Pages 이동
2. **Custom domain** 섹션에 도메인 입력
3. DNS 설정:
   - A 레코드 또는 CNAME 레코드 추가
   - [자세한 가이드](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 주의사항

### 보안
- **주민번호 등 민감정보**는 사용자의 브라우저에만 저장됩니다
- GitHub에는 **소스 코드만** 업로드되며, 사용자 데이터는 업로드되지 않습니다
- 각 사용자는 자신의 브라우저에서 독립적으로 데이터를 관리합니다

### 데이터 백업
- 브라우저를 초기화하면 데이터가 삭제됩니다
- **정기적으로 JSON 백업** 파일을 다운로드하세요
- 중요한 데이터는 엑셀로도 백업하세요

### 비용
- GitHub Pages는 **완전 무료**입니다
- Public 저장소 필수 (Private는 유료)
- 월 100GB 대역폭, 1GB 저장 용량 제한 (일반 사용에는 충분)

## 문제 해결

### 사이트가 열리지 않을 때
1. GitHub Pages가 활성화되었는지 확인
2. 1~2분 기다렸다가 다시 시도
3. 브라우저 캐시 삭제 후 재시도

### 업데이트가 반영되지 않을 때
1. GitHub Actions 탭에서 배포 상태 확인
2. 브라우저에서 강제 새로고침 (Ctrl+F5 또는 Cmd+Shift+R)
3. Settings → Pages에서 다시 저장

### 엑셀 내보내기가 작동하지 않을 때
- 인터넷 연결 확인 (SheetJS CDN 필요)
- 브라우저 콘솔(F12)에서 오류 확인

## 추가 자료

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Git 사용 가이드](https://git-scm.com/book/ko/v2)
- [GitHub 사용법 튜토리얼](https://docs.github.com/en/get-started)

## 도움이 필요하신가요?

- [GitHub Issues](https://github.com/사용자명/datbyeol-meeting-app/issues)에서 질문해주세요
- README.md 파일의 문의 섹션을 참고하세요

---

배포에 성공하셨다면, README.md의 URL을 본인의 GitHub Pages URL로 업데이트해주세요!
