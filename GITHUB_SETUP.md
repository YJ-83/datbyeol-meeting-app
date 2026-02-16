# GitHub에 업로드하고 공유하기 - 단계별 가이드

## 🎯 목표
이 앱을 GitHub에 업로드하고 누구나 접속할 수 있는 웹사이트로 만들기

---

## 📋 방법 선택

### 방법 A: 웹사이트에서 직접 (추천) ⭐
컴퓨터 초보자도 쉽게 따라할 수 있습니다.

### 방법 B: Git 명령어 사용 (고급)
개발자이거나 Git에 익숙한 경우

---

## 🌐 방법 A: 웹사이트에서 직접 (가장 쉬움)

### 1️⃣ GitHub 계정 만들기
1. https://github.com 접속
2. 오른쪽 상단 `Sign up` 클릭
3. 이메일, 비밀번호, 사용자명 입력
4. 이메일 인증 완료

### 2️⃣ 새 저장소(Repository) 만들기
1. GitHub 로그인 후 오른쪽 상단 `+` 버튼 클릭
2. `New repository` 선택
3. 다음 정보 입력:
   ```
   Repository name: datbyeol-meeting-app
   Description: 닻별 모임 관리 시스템 - 회원 및 회비 관리 웹앱
   Public 선택 (중요!)
   README 체크 해제
   ```
4. `Create repository` 클릭

### 3️⃣ 파일 업로드
1. 화면에 "Quick setup" 페이지가 나타남
2. `uploading an existing file` 링크 클릭
3. 다음 파일들을 **드래그 앤 드롭**:
   - `/Users/yjkang/dev/meeting_app/index.html`
   - `/Users/yjkang/dev/meeting_app/style.css`
   - `/Users/yjkang/dev/meeting_app/app.js`
   - `/Users/yjkang/dev/meeting_app/README.md`
   - `/Users/yjkang/dev/meeting_app/LICENSE`
   - `/Users/yjkang/dev/meeting_app/.gitignore` (선택)

4. 아래 커밋 메시지 입력:
   ```
   Initial commit: 닻별 모임 관리 시스템 v2.0
   ```
5. `Commit changes` (녹색 버튼) 클릭

### 4️⃣ GitHub Pages 활성화하기
1. 저장소 상단 메뉴에서 `Settings` (⚙️) 클릭
2. 왼쪽 메뉴에서 `Pages` 클릭
3. **Source** 섹션 설정:
   - Branch: `main` 선택
   - Folder: `/ (root)` 선택
4. `Save` 클릭
5. 페이지 새로고침 (F5)
6. 상단에 다음 메시지 확인:
   ```
   ✅ Your site is published at https://사용자명.github.io/datbyeol-meeting-app/
   ```

### 5️⃣ 접속 확인
1. 위 URL 클릭 (1~2분 후 활성화)
2. 앱이 정상 작동하는지 확인
3. URL을 친구들에게 공유!

---

## 💻 방법 B: Git 명령어 사용 (고급 사용자)

### 사전 준비
- Git 설치 확인: `git --version`
- GitHub 계정 필요

### 1️⃣ GitHub에서 저장소 생성
위의 "방법 A"의 2단계와 동일

### 2️⃣ 터미널에서 명령어 실행
```bash
# 프로젝트 폴더로 이동
cd /Users/yjkang/dev/meeting_app

# 현재 Git 상태 확인 (이미 초기화됨)
git status

# GitHub 저장소 연결 (사용자명을 본인 것으로 변경!)
git remote add origin https://github.com/사용자명/datbyeol-meeting-app.git

# 원격 저장소 확인
git remote -v

# main 브랜치로 푸시
git push -u origin main
```

### 3️⃣ GitHub Pages 활성화
위의 "방법 A"의 4단계와 동일

---

## 🎉 성공!

앱이 다음 URL에서 접속 가능합니다:
```
https://사용자명.github.io/datbyeol-meeting-app/
```

### 공유하기
1. 이 URL을 복사
2. 카카오톡, 문자, 이메일로 전송
3. 누구나 브라우저에서 바로 사용 가능!

---

## 📱 사용자들에게 안내할 내용

```
📢 닻별 모임 관리 앱 안내

앱 주소: https://사용자명.github.io/datbyeol-meeting-app/

✅ 설치 불필요 - 브라우저에서 바로 실행
✅ 모바일/PC 모두 사용 가능
✅ 데이터는 본인 기기에만 저장 (개인정보 안전)

주의사항:
⚠️ 브라우저 데이터 삭제 시 정보 손실 가능
⚠️ 정기적으로 JSON 백업 파일 다운로드 권장
```

---

## 🔄 앱 업데이트 방법

### 웹사이트에서 수정 (쉬움)
1. GitHub 저장소 페이지 접속
2. 수정할 파일 클릭 (예: `app.js`)
3. 연필 아이콘 ✏️ (Edit this file) 클릭
4. 코드 수정
5. 하단에 커밋 메시지 입력
6. `Commit changes` 클릭
7. 1~2분 후 자동 반영

### Git 명령어로 수정 (고급)
```bash
# 파일 수정 후
git add .
git commit -m "기능 개선: 설명"
git push
```

---

## ❓ 자주 묻는 질문

### Q1. 돈이 드나요?
**A:** 완전 무료입니다! GitHub Pages는 Public 저장소에 대해 무료 호스팅을 제공합니다.

### Q2. 사용자 데이터는 어디에 저장되나요?
**A:** 각 사용자의 브라우저에만 저장됩니다. GitHub에는 소스 코드만 저장되고, 사용자가 입력한 회원/회비 데이터는 GitHub에 업로드되지 않습니다.

### Q3. 여러 사람이 동시에 사용할 수 있나요?
**A:** 네! 각 사용자는 독립적으로 자신의 데이터를 관리합니다. 서로의 데이터는 공유되지 않습니다.

### Q4. 데이터가 삭제될 수 있나요?
**A:** 브라우저 캐시/쿠키를 삭제하면 데이터가 삭제됩니다. 정기적으로 "통계" 탭에서 JSON 백업 파일을 다운로드하세요.

### Q5. 모바일에서도 되나요?
**A:** 네! 스마트폰 브라우저(크롬, 사파리 등)에서 접속하면 자동으로 모바일 화면에 최적화됩니다.

### Q6. 주민번호가 안전한가요?
**A:**
- 화면에는 뒷자리 마스킹 처리 (`123456-*******`)
- 데이터는 사용자 브라우저에만 저장
- GitHub에는 업로드되지 않음
- 엑셀 파일에는 전체 주민번호가 포함되므로 주의!

---

## 🆘 문제 해결

### 사이트가 안 열려요
1. URL 확인: `https://사용자명.github.io/datbyeol-meeting-app/`
2. 1~2분 기다리기 (첫 배포 시)
3. Settings → Pages에서 활성화 확인
4. 브라우저 캐시 삭제 후 재시도

### 엑셀 내보내기가 안 돼요
1. 인터넷 연결 확인 (CDN 라이브러리 필요)
2. 브라우저에서 F12 → Console 탭 확인
3. 팝업 차단 확인

### 수정 사항이 반영 안 돼요
1. GitHub Actions 탭에서 배포 상태 확인
2. 브라우저 강제 새로고침 (Ctrl+F5 / Cmd+Shift+R)
3. 시크릿 모드에서 테스트

---

## 📚 추가 자료

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [Git 튜토리얼 (한글)](https://git-scm.com/book/ko/v2)
- [DEPLOYMENT.md](DEPLOYMENT.md) - 상세 배포 가이드

---

## ✅ 체크리스트

배포 전:
- [ ] GitHub 계정 생성
- [ ] 저장소(Repository) 생성
- [ ] 파일 업로드 완료
- [ ] GitHub Pages 활성화
- [ ] URL 접속 확인

배포 후:
- [ ] README.md에서 USERNAME을 본인 것으로 수정
- [ ] 친구들에게 URL 공유
- [ ] 데이터 백업 방법 안내
- [ ] 사용 설명서 공유

---

🎊 축하합니다! 이제 앱이 전 세계에 공개되었습니다!
