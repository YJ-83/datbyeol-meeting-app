# 🔥 Firebase 설정 가이드 (v3.0 — 로그인 + 실시간 동기화)

닻별 모임 관리 시스템이 **여러 사용자 간 데이터를 공유**하려면 Firebase 콘솔에서 아래 설정이 필요합니다.

> 현재 연결된 프로젝트: **`my-datbyeol`**
> 콘솔 주소: https://console.firebase.google.com/project/my-datbyeol

---

## ✅ 체크리스트

- [ ] 1. Authentication → 이메일/비밀번호 로그인 활성화
- [ ] 2. Firestore 보안 규칙 업데이트 (로그인 사용자만 읽기/쓰기)
- [ ] 3. 첫 관리자 계정 생성 (또는 앱에서 회원가입)
- [ ] 4. 테스트: 두 개의 다른 브라우저(또는 시크릿 창)에서 동시 접속 → 한쪽에서 입력 → 다른 쪽에 즉시 반영되는지 확인

---

## 1️⃣ 이메일/비밀번호 로그인 활성화

1. https://console.firebase.google.com/project/my-datbyeol/authentication 접속
2. **"시작하기"** 클릭 (이미 활성화된 경우 생략)
3. **Sign-in method** 탭 → **이메일/비밀번호** 클릭
4. **사용 설정** 토글 켜기 → **저장**

> ⚠️ 이 단계를 안 하면 로그인 화면에서 `operation-not-allowed` 오류가 납니다.

---

## 2️⃣ Firestore 보안 규칙 설정

1. https://console.firebase.google.com/project/my-datbyeol/firestore/rules 접속
2. 아래 규칙으로 **교체 후 게시**:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // datbyeol/state 문서: 로그인한 사용자만 읽고 쓸 수 있음
    match /datbyeol/{docId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 보안 단계 설명

| 규칙 | 의미 | 권장 |
|---|---|---|
| `if true` | 누구나 접근 (❌ 주민번호 데이터엔 절대 쓰지 말 것) | 금지 |
| `if request.auth != null` | 로그인한 사용자만 | ✅ **기본 권장** |
| `if request.auth.token.email in [...]` | 허가된 이메일만 | 🔒 더 엄격 |

---

## 3️⃣ 첫 관리자 계정 생성

### 방법 A: 앱에서 직접 회원가입 (가장 쉬움)
1. 앱 화면에서 **회원가입** 탭 선택
2. 이메일/비밀번호 입력 → 가입
3. 자동으로 로그인 + 앱 진입

### 방법 B: Firebase 콘솔에서 직접 추가
1. https://console.firebase.google.com/project/my-datbyeol/authentication/users
2. **사용자 추가** → 이메일/비밀번호 입력

---

## 4️⃣ 동작 원리

### 데이터 흐름
```
[사용자 A 브라우저]          [Firestore]          [사용자 B 브라우저]
                                │
  회원 추가 ──saveToCloud()──▶ │
                                │
                                │ ──onSnapshot──▶ 자동 반영 (UI 갱신)
```

### 저장 위치
- **Firestore 경로**: `datbyeol/state`
- **로컬 캐시**: 각 브라우저의 localStorage (오프라인 대비용 캐시)
- 원격이 항상 **진실의 원천(source of truth)** — 로그인 시 원격 데이터로 로컬 덮어씀

### 실시간 동기화
- `onSnapshot` 리스너가 원격 변경을 즉시 감지
- 다른 사용자가 입력 → 1~2초 내 내 화면에 반영됨
- 우상단 동기화 표시등:
  - 🟢 초록: 동기화 완료
  - 🟡 노랑: 동기화 중
  - 🔴 빨강: 동기화 오류 (보안 규칙 확인 필요)

---

## 5️⃣ 테스트 방법

1. Chrome에서 앱 열기 → 로그인 → 회원 추가
2. Chrome 시크릿 창(또는 다른 브라우저)에서 같은 URL 열기 → **같은 계정으로** 로그인
3. 첫 번째 창에서 새 회원 추가 → 두 번째 창에 2초 내 자동 반영되면 ✅ 성공

### 실패 시 체크
| 증상 | 원인 | 해결 |
|---|---|---|
| 로그인 시 `operation-not-allowed` | 이메일/비밀번호 미활성화 | ① 단계 확인 |
| 동기화 표시등이 🔴 빨강 | 보안 규칙이 차단 | ② 단계 확인 |
| 다른 창에서 안 보임 | 실시간 리스너 실패 | 브라우저 콘솔(F12) 로그 확인 |
| 로그인 후에도 빈 화면 | 로그인은 됐지만 읽기 권한 없음 | Firestore 규칙 재확인 |

---

## 6️⃣ 보안 주의사항

이 앱의 데이터에는 **주민번호(민감정보)** 가 포함됩니다.

- ❌ 보안 규칙을 `if true`로 두면 **안 됨** (누구나 조회 가능)
- ✅ `if request.auth != null` 이상으로 반드시 설정
- 🔒 가능하면 허가된 이메일 화이트리스트 사용 권장
- 💡 주민번호 뒷자리는 UI에서 마스킹 처리됨 (`******`)
- 💾 엑셀 내보내기 시 주민번호 전체 포함 — 파일 관리 주의

### 화이트리스트 예시 (더 엄격한 규칙)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /datbyeol/{docId} {
      allow read, write: if request.auth != null
        && request.auth.token.email in [
          'admin@example.com',
          'manager@example.com'
        ];
    }
  }
}
```

---

## 7️⃣ 문제 해결

### 기존 localStorage 데이터를 Firestore로 올리기
1. 현재 작동 중인 브라우저에서 로그인
2. 자동으로 로컬 데이터 → Firestore 업로드됨 (원격이 비어있을 때만)
3. 만약 원격에 이미 다른 데이터가 있다면 원격이 우선 — 필요 시 JSON 내보내기/가져오기로 병합

### 앱이 느려지는 경우
- 실시간 리스너가 1.5초 디바운스로 쓰기 제한됨
- 무료 티어 한도: 읽기 50K/일, 쓰기 20K/일 — 소규모 모임엔 충분

### Firebase 무료 티어 모니터링
https://console.firebase.google.com/project/my-datbyeol/usage

---

Made with ❤️ for 닻별 모임
