// 초기 회원 데이터 (서부닻별 회원명부)
const initialMembersData = [
    {"name": "김연숙", "nickname": "고성할매", "ssn": "590218-2908113", "phone": "010-5484-2731", "joinDate": "2026-02-16"},
    {"name": "김점애", "nickname": "김점애", "ssn": "660203-2917331", "phone": "010-3830-4824", "joinDate": "2026-02-16"},
    {"name": "박봉순", "nickname": "나무옷방", "ssn": "570706-2845615", "phone": "010-2420-5707", "joinDate": "2026-02-16"},
    {"name": "박미옥", "nickname": "나풀나풀", "ssn": "650922-2921221", "phone": "010-7178-6494", "joinDate": "2026-02-16"},
    {"name": "강미경", "nickname": "너만의주식", "ssn": "670104-2830421", "phone": "010-7387-7972", "joinDate": "2026-02-16"},
    {"name": "이경희", "nickname": "누리마루", "ssn": "620720-2906311", "phone": "010-3244-7045", "joinDate": "2026-02-16"},
    {"name": "김연숙", "nickname": "두솔", "ssn": "630905-2920611", "phone": "010-9190-8471", "joinDate": "2026-02-16"},
    {"name": "백진승", "nickname": "마로니에", "ssn": "", "phone": "010-9847-3567", "joinDate": "2026-02-16"},
    {"name": "이경숙", "nickname": "명품보이스", "ssn": "591102-2671119", "phone": "010-7441-9430", "joinDate": "2026-02-16"},
    {"name": "이맹련", "nickname": "벌리목련", "ssn": "590227-2845615", "phone": "010-4453-9700", "joinDate": "2026-02-16"},
    {"name": "이둘임", "nickname": "별새로미", "ssn": "680210-2915426", "phone": "010-4200-5682", "joinDate": "2026-02-16"},
    {"name": "김둘오", "nickname": "별이짱", "ssn": "720807-2846419", "phone": "010-5572-8474", "joinDate": "2026-02-16"},
    {"name": "강미경", "nickname": "병아리", "ssn": "650928-2923729", "phone": "010-2408-7720", "joinDate": "2026-02-16"},
    {"name": "서미권", "nickname": "산청산토끼", "ssn": "600604-2323128", "phone": "010-4020-8672", "joinDate": "2026-02-16"},
    {"name": "박성현", "nickname": "삼천포문어", "ssn": "", "phone": "010-8802-4554", "joinDate": "2026-02-16"},
    {"name": "서귀숙", "nickname": "서귀숙", "ssn": "580205-2836028", "phone": "010-5527-4608", "joinDate": "2026-02-16"},
    {"name": "서명자", "nickname": "서하별", "ssn": "611125-2830411", "phone": "010-8488-3125", "joinDate": "2026-02-16"},
    {"name": "이종순", "nickname": "엔젤리", "ssn": "630730-2910916", "phone": "010-6319-8717", "joinDate": "2026-02-16"},
    {"name": "이순녀", "nickname": "유희망", "ssn": "", "phone": "010-8077-0273", "joinDate": "2026-02-16"},
    {"name": "이미자", "nickname": "이미자", "ssn": "541009-2845911", "phone": "010-2860-6487", "joinDate": "2026-02-16"},
    {"name": "이영숙", "nickname": "이영숙", "ssn": "610412-2030112", "phone": "010-2567-5706", "joinDate": "2026-02-16"},
    {"name": "이태숙", "nickname": "이태숙", "ssn": "520513-2923628", "phone": "010-9330-6584", "joinDate": "2026-02-16"},
    {"name": "배윤자", "nickname": "자윤별", "ssn": "490915-2845613", "phone": "010-5042-9953", "joinDate": "2026-02-16"},
    {"name": "강정숙", "nickname": "진정님", "ssn": "601130-2890217", "phone": "010-8512-4530", "joinDate": "2026-02-16"},
    {"name": "박위자", "nickname": "천사베리", "ssn": "580301-2933426", "phone": "010-3584-6286", "joinDate": "2026-02-16"},
    {"name": "이유경", "nickname": "천왕봉연꽃", "ssn": "610305-2121231", "phone": "010-8518-2819", "joinDate": "2026-02-16"},
    {"name": "배숙자", "nickname": "하동누나", "ssn": "530822-2921516", "phone": "010-5324-8115", "joinDate": "2026-02-16"},
    {"name": "김윤영", "nickname": "하모야놀자", "ssn": "660228-2890737", "phone": "010-9323-4352", "joinDate": "2026-02-16"},
    {"name": "김효진", "nickname": "효진은비", "ssn": "670109-2914216", "phone": "010-5026-3093", "joinDate": "2026-02-16"},
    {"name": "강명희", "nickname": "강명희", "ssn": "680925-2471615", "phone": "010-5756-4803", "joinDate": "2026-02-16"},
    {"name": "강옥분", "nickname": "강옥분", "ssn": "698521-2928129", "phone": "010-3080-5525", "joinDate": "2026-02-16"},
    {"name": "강학순", "nickname": "강학순", "ssn": "", "phone": "010-4166-9021", "joinDate": "2026-02-16"},
    {"name": "최송원", "nickname": "개구리뒷다리", "ssn": "690413-2914412", "phone": "010-4511-2392", "joinDate": "2026-02-16"},
    {"name": "김갑순", "nickname": "김가수", "ssn": "630310-2548515", "phone": "010-2828-0090", "joinDate": "2026-02-16"},
    {"name": "정정순", "nickname": "달빛정", "ssn": "", "phone": "010-2226-8646", "joinDate": "2026-02-16"},
    {"name": "정명선", "nickname": "둘리네", "ssn": "650503-2890718", "phone": "010-9822-0336", "joinDate": "2026-02-16"},
    {"name": "하한숙", "nickname": "리본맨호박", "ssn": "640913-2829229", "phone": "010-3550-3314", "joinDate": "2026-02-16"},
    {"name": "정선희", "nickname": "바다소리", "ssn": "650820-2925141", "phone": "010-7322-4118", "joinDate": "2026-02-16"},
    {"name": "이영희", "nickname": "별밤맘", "ssn": "", "phone": "010-4011-4780", "joinDate": "2026-02-16"},
    {"name": "안현순", "nickname": "삼천포안개", "ssn": "", "phone": "010-6655-5413", "joinDate": "2026-02-16"},
    {"name": "최문석", "nickname": "샘골길", "ssn": "", "phone": "010-3598-7517", "joinDate": "2026-02-16"},
    {"name": "최남순", "nickname": "아숙가", "ssn": "571222-2914715", "phone": "010-4577-1353", "joinDate": "2026-02-16"},
    {"name": "최순점", "nickname": "이쁜별", "ssn": "610905-2890216", "phone": "010-3593-8637", "joinDate": "2026-02-16"},
    {"name": "김성회", "nickname": "잔소리마녀", "ssn": "", "phone": "010-2923-4784", "joinDate": "2026-02-16"},
    {"name": "장명순", "nickname": "장명순", "ssn": "560703-2921314", "phone": "010-3847-4719", "joinDate": "2026-02-16"},
    {"name": "김선경", "nickname": "제윤아", "ssn": "", "phone": "010-9038-0395", "joinDate": "2026-02-16"},
    {"name": "조외숙", "nickname": "조외숙", "ssn": "581027-2117813", "phone": "010-4679-5455", "joinDate": "2026-02-16"},
    {"name": "박옥자", "nickname": "죽전마미", "ssn": "641121-2914510", "phone": "010-4872-2831", "joinDate": "2026-02-16"},
    {"name": "임경숙", "nickname": "준서할미", "ssn": "610303-2925147", "phone": "010-3845-2311", "joinDate": "2026-02-16"},
    {"name": "전현미", "nickname": "진주구슬", "ssn": "830633-2830321", "phone": "010-4125-0622", "joinDate": "2026-02-16"},
    {"name": "최문일", "nickname": "초이투", "ssn": "731028-2890211", "phone": "010-6852-5488", "joinDate": "2026-02-16"},
    {"name": "박정희", "nickname": "초코케익", "ssn": "740204-2860118", "phone": "010-3156-8166", "joinDate": "2026-02-16"},
    {"name": "박춘애", "nickname": "친절한개복지", "ssn": "", "phone": "010-6753-8600", "joinDate": "2026-02-16"},
    {"name": "주덕임", "nickname": "큰산별", "ssn": "720305-2890315", "phone": "010-3846-5125", "joinDate": "2026-02-16"},
    {"name": "최민정", "nickname": "파이브쪙", "ssn": "700701-2910816", "phone": "010-6260-5430", "joinDate": "2026-02-16"},
    {"name": "유희숙", "nickname": "폴짝폴짝", "ssn": "670306-2830511", "phone": "010-8316-6850", "joinDate": "2026-02-16"},
    {"name": "정영희", "nickname": "혜수영맘", "ssn": "651227-2093222", "phone": "010-2659-9855", "joinDate": "2026-02-16"},
    {"name": "최필영", "nickname": "훈이어머님", "ssn": "", "phone": "010-8815-2849", "joinDate": "2026-02-16"},
    {"name": "김둘순", "nickname": "동금동은정", "ssn": "", "phone": "010-7257-7357", "joinDate": "2026-02-16"},
    {"name": "정순임", "nickname": "유니맘", "ssn": "381210-2923619", "phone": "010-4666-5721", "joinDate": "2026-02-16"},
    {"name": "전현남", "nickname": "", "ssn": "450330-2100611", "phone": "010-3578-8359", "joinDate": "2026-02-16"},
    {"name": "오옥희", "nickname": "", "ssn": "", "phone": "010-5198-7276", "joinDate": "2026-02-16"},
    {"name": "임정원", "nickname": "정원별", "ssn": "", "phone": "010-7744-7685", "joinDate": "2026-02-16"},
    {"name": "정권자", "nickname": "", "ssn": "521216-2923517", "phone": "010-4636-8186", "joinDate": "2026-02-16"},
    {"name": "김진심", "nickname": "기백", "ssn": "", "phone": "010-2983-2314", "joinDate": "2026-02-16"},
    {"name": "박숙희", "nickname": "", "ssn": "570910-2923610", "phone": "010-9919-1238", "joinDate": "2026-02-16"},
    {"name": "김수옥", "nickname": "jin xiuyu", "ssn": "450702-6240015", "phone": "010-2758-5488", "joinDate": "2026-02-16"},
    {"name": "백정화", "nickname": "백정화", "ssn": "750823-2890210", "phone": "010-4574-1343", "joinDate": "2026-02-16"},
    {"name": "이숙남", "nickname": "", "ssn": "570511-2802413", "phone": "", "joinDate": "2026-02-16"},
    {"name": "정종섭", "nickname": "불량감자", "ssn": "650420-1890221", "phone": "010-8742-5488", "joinDate": "2026-02-16"},
    {"name": "문유복", "nickname": "문유복", "ssn": "", "phone": "010-9853-4051", "joinDate": "2026-02-16"},
    {"name": "안문기", "nickname": "", "ssn": "641216-1923517", "phone": "010-3589-0217", "joinDate": "2026-02-16"},
    {"name": "권혜경", "nickname": "한희원", "ssn": "", "phone": "010-6745-9701", "joinDate": "2026-02-16"},
    {"name": "정은주", "nickname": "", "ssn": "711219-2120019", "phone": "010-7220-2337", "joinDate": "2026-02-16"},
    {"name": "김위순", "nickname": "숙이랑", "ssn": "", "phone": "", "joinDate": "2026-02-16"},
    {"name": "이남이", "nickname": "", "ssn": "500522-2240717", "phone": "010-8521-3591", "joinDate": "2026-02-16"},
    {"name": "강정순", "nickname": "낭만진달래", "ssn": "", "phone": "010-5030-6414", "joinDate": "2026-02-16"},
    {"name": "정영순", "nickname": "", "ssn": "600723-2919414", "phone": "010-9298-4753", "joinDate": "2026-02-16"},
    {"name": "김윤봉", "nickname": "새치미", "ssn": "", "phone": "010-3921-7279", "joinDate": "2026-02-16"},
    {"name": "김두심", "nickname": "", "ssn": "600416-2919414", "phone": "010-3564-2989", "joinDate": "2026-02-16"},
    {"name": "권영화", "nickname": "권영화", "ssn": "", "phone": "010-9137-9701", "joinDate": "2026-02-16"},
    {"name": "이현영", "nickname": "", "ssn": "690106-2829137", "phone": "010-3224-0669", "joinDate": "2026-02-16"},
    {"name": "하성미", "nickname": "", "ssn": "050116-4831011", "phone": "010-8726-3093", "joinDate": "2026-02-16"},
    {"name": "이희순", "nickname": "한결", "ssn": "", "phone": "010-5558-8350", "joinDate": "2026-02-16"},
    {"name": "김영숙", "nickname": "메리야스", "ssn": "", "phone": "010-4003-5207", "joinDate": "2026-02-16"},
    {"name": "하유정", "nickname": "으뜸", "ssn": "591229-2916816", "phone": "010-6643-3077", "joinDate": "2026-02-16"},
    {"name": "정숙", "nickname": "준우맘", "ssn": "", "phone": "010-2486-9778", "joinDate": "2026-02-16"},
    {"name": "황영란", "nickname": "가온누리", "ssn": "760211-2914218", "phone": "010-4722-4596", "joinDate": "2026-02-16"},
    {"name": "이두남", "nickname": "단풍잎", "ssn": "", "phone": "010-5756-1015", "joinDate": "2026-02-16"},
    {"name": "황정숙", "nickname": "월암", "ssn": "", "phone": "010-3869-6113", "joinDate": "2026-02-16"},
    {"name": "김옥연", "nickname": "옥여니", "ssn": "", "phone": "010-6567-5089", "joinDate": "2026-02-16"},
    {"name": "하위자", "nickname": "하위자", "ssn": "", "phone": "010-3556-5689", "joinDate": "2026-02-16"},
    {"name": "", "nickname": "나팔꽃맘", "ssn": "", "phone": "010-9190-5670", "joinDate": "2026-02-16"},
    {"name": "", "nickname": "루치아", "ssn": "", "phone": "010-3834-1528", "joinDate": "2026-02-16"},
    {"name": "", "nickname": "둥지연", "ssn": "", "phone": "010-3860-0388", "joinDate": "2026-02-16"},
    {"name": "박영희", "nickname": "박영희", "ssn": "", "phone": "010-5137-3588", "joinDate": "2026-02-16"},
    {"name": "", "nickname": "고성뽀기", "ssn": "", "phone": "010-4611-1811", "joinDate": "2026-02-16"},
    {"name": "문주연", "nickname": "문주연", "ssn": "", "phone": "010-6455-1121", "joinDate": "2026-02-16"},
    {"name": "경숙", "nickname": "웅똘", "ssn": "", "phone": "010-2369-5960", "joinDate": "2026-02-16"},
    {"name": "강명지", "nickname": "소피", "ssn": "", "phone": "010-8772-4706", "joinDate": "2026-02-16"},
    {"name": "하춘희", "nickname": "비토리하", "ssn": "", "phone": "010-3800-5309", "joinDate": "2026-02-16"},
    {"name": "김현숙", "nickname": "김현숙", "ssn": "", "phone": "010-2800-5484", "joinDate": "2026-02-16"},
    {"name": "강영옥", "nickname": "사천꽃잎", "ssn": "", "phone": "010-4177-4759", "joinDate": "2026-02-16"},
    {"name": "김둘선", "nickname": "장꽁", "ssn": "", "phone": "010-8536-1501", "joinDate": "2026-02-16"},
    {"name": "", "nickname": "예순분", "ssn": "", "phone": "010-3724-4393", "joinDate": "2026-02-16"},
    {"name": "하명심", "nickname": "영주랑", "ssn": "", "phone": "010-2886-9930", "joinDate": "2026-02-16"},
    {"name": "", "nickname": "백아녜스", "ssn": "", "phone": "010-3744-7045", "joinDate": "2026-02-16"},
    {"name": "강점좌", "nickname": "산청꽃분이", "ssn": "530606-2923414", "phone": "010-9323-5262", "joinDate": "2026-02-16"},
    {"name": "정현선", "nickname": "진주정", "ssn": "", "phone": "010-8277-0034", "joinDate": "2026-02-16"},
    {"name": "박금자", "nickname": "", "ssn": "591112-2829226", "phone": "010-4330-1603", "joinDate": "2026-02-16"}
];

// 데이터 저장소
let members = JSON.parse(localStorage.getItem('datbyeol_members')) || [];
let meetings = JSON.parse(localStorage.getItem('datbyeol_meetings')) || [];
let currentMeetingId = localStorage.getItem('datbyeol_currentMeeting') || null;
let currentEditId = null;
let currentEditType = null;

// 초기 데이터 로드
function loadInitialData() {
    // localStorage가 비어있으면 초기 데이터 로드
    if (members.length === 0 && !localStorage.getItem('datbyeol_members')) {
        members = initialMembersData;
        localStorage.setItem('datbyeol_members', JSON.stringify(members));
        console.log('초기 회원 데이터가 로드되었습니다. 총 ' + members.length + '명');
    }
}

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    loadInitialData();
    initializeTabs();
    renderMembers();
    loadMeetings();
    renderDues();
    updateStats();
    initializeModals();
    initializeEventListeners();
    setDefaultDate();
});

// 탭 초기화
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.dataset.tab;

            // 모든 탭 비활성화
            document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

            // 선택된 탭 활성화
            button.classList.add('active');
            document.getElementById(`${tabName}-tab`).classList.add('active');

            // 통계 탭이면 업데이트
            if (tabName === 'stats') {
                updateStats();
            }
        });
    });
}

// 모달 초기화
function initializeModals() {
    const memberModal = document.getElementById('member-modal');
    const dueModal = document.getElementById('due-modal');
    const meetingModal = document.getElementById('meeting-modal');
    const bulkDueModal = document.getElementById('bulk-due-modal');

    // 모달 닫기 버튼
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            memberModal.classList.remove('active');
            dueModal.classList.remove('active');
            meetingModal.classList.remove('active');
            bulkDueModal.classList.remove('active');
            resetForms();
        });
    });

    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (e) => {
        if (e.target === memberModal) {
            memberModal.classList.remove('active');
            resetForms();
        }
        if (e.target === dueModal) {
            dueModal.classList.remove('active');
            resetForms();
        }
        if (e.target === meetingModal) {
            meetingModal.classList.remove('active');
            resetForms();
        }
        if (e.target === bulkDueModal) {
            bulkDueModal.classList.remove('active');
            resetForms();
        }
    });
}

// 이벤트 리스너 초기화
function initializeEventListeners() {
    // 회원 추가 버튼
    document.getElementById('add-member-btn').addEventListener('click', () => {
        currentEditId = null;
        currentEditType = 'add';
        document.getElementById('member-modal-title').textContent = '회원 추가';
        document.getElementById('member-modal').classList.add('active');
    });

    // 엑셀 내보내기 버튼
    document.getElementById('export-excel-btn').addEventListener('click', exportMembersToExcel);

    // 모임 추가 버튼
    document.getElementById('add-meeting-btn').addEventListener('click', () => {
        document.getElementById('meeting-modal').classList.add('active');
    });

    // 모임 선택 변경
    document.getElementById('meeting-select').addEventListener('change', (e) => {
        currentMeetingId = e.target.value;
        localStorage.setItem('datbyeol_currentMeeting', currentMeetingId);
        renderDues();
        updateDeleteMeetingButton();
    });

    // 모임 삭제 버튼
    document.getElementById('delete-meeting-btn').addEventListener('click', deleteMeeting);

    // 회비 추가 버튼
    document.getElementById('add-due-btn').addEventListener('click', () => {
        if (!currentMeetingId) {
            alert('먼저 모임을 선택하거나 새로 만들어주세요.');
            return;
        }
        currentEditId = null;
        currentEditType = 'add';
        document.getElementById('due-modal-title').textContent = '회비 추가';
        updateMemberSelect();
        document.getElementById('due-modal').classList.add('active');
    });

    // 개별 입력 버튼
    document.getElementById('bulk-add-due-btn').addEventListener('click', () => {
        if (!currentMeetingId) {
            alert('먼저 모임을 선택하거나 새로 만들어주세요.');
            return;
        }
        renderBulkMembersForm();
        document.getElementById('bulk-due-modal').classList.add('active');
    });

    // 모임 폼 제출
    document.getElementById('meeting-form').addEventListener('submit', handleMeetingSubmit);

    // 회원 폼 제출
    document.getElementById('member-form').addEventListener('submit', handleMemberSubmit);

    // 회비 폼 제출
    document.getElementById('due-form').addEventListener('submit', handleDueSubmit);

    // 개별 입력 폼 제출
    document.getElementById('bulk-due-form').addEventListener('submit', handleBulkDueSubmit);

    // 주민번호 자동 하이픈
    document.getElementById('member-ssn').addEventListener('input', formatSSN);

    // 핸드폰번호 자동 하이픈
    document.getElementById('member-phone').addEventListener('input', formatPhone);

    // 데이터 내보내기/가져오기
    document.getElementById('export-btn').addEventListener('click', exportData);
    document.getElementById('import-btn').addEventListener('click', () => {
        document.getElementById('import-file').click();
    });
    document.getElementById('import-file').addEventListener('change', importData);

    // 전체 선택 체크박스
    document.getElementById('select-all-members').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.member-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });
}

// 기본 날짜 설정 (오늘)
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('member-join-date').value = today;
    document.getElementById('due-date').value = today;
    const bulkDueDate = document.getElementById('bulk-due-date');
    if (bulkDueDate) bulkDueDate.value = today;
}

// 주민번호 포맷 (000000-0000000)
function formatSSN(e) {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 6) {
        value = value.slice(0, 6) + '-' + value.slice(6, 13);
    }
    e.target.value = value;
}

// 핸드폰번호 포맷 (010-0000-0000)
function formatPhone(e) {
    let value = e.target.value.replace(/[^0-9]/g, '');
    if (value.length > 3 && value.length <= 7) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 7) {
        value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
    }
    e.target.value = value;
}

// 회원 렌더링
function renderMembers() {
    const tbody = document.getElementById('members-tbody');
    tbody.innerHTML = '';

    if (members.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8" style="text-align:center; padding:40px; color:#999;">등록된 회원이 없습니다.</td></tr>';
        document.getElementById('total-members').textContent = '0';
        return;
    }

    members.forEach((member, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="member-checkbox" data-index="${index}"></td>
            <td>${index + 1}</td>
            <td>${member.name}</td>
            <td>${member.nickname || '-'}</td>
            <td>${maskSSN(member.ssn)}</td>
            <td>${member.phone}</td>
            <td>${member.joinDate}</td>
            <td>
                <button class="btn btn-edit" onclick="editMember(${index})">수정</button>
                <button class="btn btn-danger" onclick="deleteMember(${index})">삭제</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('total-members').textContent = members.length;
}

// 주민번호 마스킹 (앞 6자리만 표시)
function maskSSN(ssn) {
    if (ssn.length === 14) {
        return ssn.slice(0, 6) + '-' + '*******';
    }
    return ssn;
}

// 회원 추가/수정 처리
function handleMemberSubmit(e) {
    e.preventDefault();

    const memberData = {
        name: document.getElementById('member-name').value,
        nickname: document.getElementById('member-nickname').value,
        ssn: document.getElementById('member-ssn').value,
        phone: document.getElementById('member-phone').value,
        joinDate: document.getElementById('member-join-date').value
    };

    if (currentEditType === 'add') {
        members.push(memberData);
    } else if (currentEditType === 'edit' && currentEditId !== null) {
        members[currentEditId] = memberData;
    }

    saveData();
    renderMembers();
    updateStats();
    document.getElementById('member-modal').classList.remove('active');
    resetForms();
}

// 회원 수정
function editMember(index) {
    currentEditId = index;
    currentEditType = 'edit';
    const member = members[index];

    document.getElementById('member-modal-title').textContent = '회원 수정';
    document.getElementById('member-name').value = member.name;
    document.getElementById('member-nickname').value = member.nickname || '';
    document.getElementById('member-ssn').value = member.ssn;
    document.getElementById('member-phone').value = member.phone;
    document.getElementById('member-join-date').value = member.joinDate;

    document.getElementById('member-modal').classList.add('active');
}

// 회원 삭제
function deleteMember(index) {
    if (confirm(`${members[index].name} 회원을 삭제하시겠습니까?`)) {
        members.splice(index, 1);
        saveData();
        renderMembers();
        updateStats();
    }
}

// 모임 목록 로드
function loadMeetings() {
    const select = document.getElementById('meeting-select');
    select.innerHTML = '<option value="">모임을 선택하세요</option>';

    meetings.forEach(meeting => {
        const option = document.createElement('option');
        option.value = meeting.id;
        option.textContent = `${meeting.name} (${meeting.date || '날짜 미정'})`;
        select.appendChild(option);
    });

    // 이전 선택 복원
    if (currentMeetingId) {
        select.value = currentMeetingId;
    }
    updateDeleteMeetingButton();
}

// 모임 삭제 버튼 표시/숨김
function updateDeleteMeetingButton() {
    const deleteBtn = document.getElementById('delete-meeting-btn');
    if (currentMeetingId) {
        deleteBtn.style.display = 'inline-block';
    } else {
        deleteBtn.style.display = 'none';
    }
}

// 모임 추가 처리
function handleMeetingSubmit(e) {
    e.preventDefault();

    const meetingData = {
        id: Date.now().toString(),
        name: document.getElementById('meeting-name').value,
        date: document.getElementById('meeting-date').value,
        dues: []
    };

    meetings.push(meetingData);
    currentMeetingId = meetingData.id;
    localStorage.setItem('datbyeol_currentMeeting', currentMeetingId);

    saveData();
    loadMeetings();
    renderDues();
    document.getElementById('meeting-modal').classList.remove('active');
    resetForms();
}

// 모임 삭제
function deleteMeeting() {
    const meeting = meetings.find(m => m.id === currentMeetingId);
    if (!meeting) return;

    if (confirm(`"${meeting.name}" 모임을 삭제하시겠습니까?\n(모든 회비 내역이 함께 삭제됩니다)`)) {
        meetings = meetings.filter(m => m.id !== currentMeetingId);
        currentMeetingId = null;
        localStorage.removeItem('datbyeol_currentMeeting');
        saveData();
        loadMeetings();
        renderDues();
    }
}

// 회비 렌더링
function renderDues() {
    const tbody = document.getElementById('dues-tbody');
    tbody.innerHTML = '';

    if (!currentMeetingId) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:40px; color:#999;">모임을 선택하거나 새로 만들어주세요.</td></tr>';
        document.getElementById('total-dues').textContent = '0';
        document.getElementById('total-amount').textContent = '0';
        return;
    }

    const currentMeeting = meetings.find(m => m.id === currentMeetingId);
    if (!currentMeeting || !currentMeeting.dues || currentMeeting.dues.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:40px; color:#999;">등록된 회비 내역이 없습니다.</td></tr>';
        document.getElementById('total-dues').textContent = '0';
        document.getElementById('total-amount').textContent = '0';
        return;
    }

    let totalAmount = 0;

    currentMeeting.dues.forEach((due, index) => {
        totalAmount += parseInt(due.amount);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${due.memberNickname || due.memberName}</td>
            <td>${due.date}</td>
            <td>${formatCurrency(due.amount)}</td>
            <td>${due.method}</td>
            <td>${due.note || '-'}</td>
            <td>
                <button class="btn btn-edit" onclick="editDue(${index})">수정</button>
                <button class="btn btn-danger" onclick="deleteDue(${index})">삭제</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('total-dues').textContent = currentMeeting.dues.length;
    document.getElementById('total-amount').textContent = formatCurrency(totalAmount);
}

// 금액 포맷 (천 단위 콤마)
function formatCurrency(amount) {
    return parseInt(amount).toLocaleString('ko-KR') + '원';
}

// 회원 선택 드롭다운 업데이트 (닉네임으로 표시)
function updateMemberSelect() {
    const select = document.getElementById('due-member');
    select.innerHTML = '<option value="">선택하세요</option>';

    members.forEach(member => {
        const option = document.createElement('option');
        const displayName = member.nickname || member.name || '이름없음';
        option.value = displayName;
        option.textContent = displayName;
        select.appendChild(option);
    });
}

// 회비 추가/수정 처리
function handleDueSubmit(e) {
    e.preventDefault();

    if (!currentMeetingId) {
        alert('모임을 먼저 선택해주세요.');
        return;
    }

    const dueData = {
        memberNickname: document.getElementById('due-member').value,
        memberName: document.getElementById('due-member').value, // 호환성 유지
        date: document.getElementById('due-date').value,
        amount: document.getElementById('due-amount').value,
        method: document.getElementById('due-method').value,
        note: document.getElementById('due-note').value
    };

    const meeting = meetings.find(m => m.id === currentMeetingId);
    if (!meeting) return;

    if (!meeting.dues) {
        meeting.dues = [];
    }

    if (currentEditType === 'add') {
        meeting.dues.push(dueData);
    } else if (currentEditType === 'edit' && currentEditId !== null) {
        meeting.dues[currentEditId] = dueData;
    }

    saveData();
    renderDues();
    updateStats();
    document.getElementById('due-modal').classList.remove('active');
    resetForms();
}

// 회비 수정
function editDue(index) {
    if (!currentMeetingId) return;

    currentEditId = index;
    currentEditType = 'edit';

    const meeting = meetings.find(m => m.id === currentMeetingId);
    if (!meeting || !meeting.dues) return;

    const due = meeting.dues[index];

    document.getElementById('due-modal-title').textContent = '회비 수정';
    updateMemberSelect();
    document.getElementById('due-member').value = due.memberName;
    document.getElementById('due-date').value = due.date;
    document.getElementById('due-amount').value = due.amount;
    document.getElementById('due-method').value = due.method;
    document.getElementById('due-note').value = due.note;

    document.getElementById('due-modal').classList.add('active');
}

// 회비 삭제
function deleteDue(index) {
    if (!currentMeetingId) return;

    const meeting = meetings.find(m => m.id === currentMeetingId);
    if (!meeting || !meeting.dues) return;

    if (confirm('이 회비 내역을 삭제하시겠습니까?')) {
        meeting.dues.splice(index, 1);
        saveData();
        renderDues();
        updateStats();
    }
}

// 통계 업데이트
function updateStats() {
    // 총 회원 수
    document.getElementById('stat-members').textContent = members.length + '명';

    // 모든 모임의 회비 합산
    let allDues = [];
    meetings.forEach(meeting => {
        if (meeting.dues) {
            allDues = allDues.concat(meeting.dues);
        }
    });

    // 총 회비 납부액
    const totalAmount = allDues.reduce((sum, due) => sum + parseInt(due.amount), 0);
    document.getElementById('stat-total-amount').textContent = formatCurrency(totalAmount);

    // 평균 회비
    const avgAmount = allDues.length > 0 ? Math.round(totalAmount / allDues.length) : 0;
    document.getElementById('stat-avg-amount').textContent = formatCurrency(avgAmount);

    // 최근 납부일
    if (allDues.length > 0) {
        const recentDate = allDues.reduce((latest, due) => {
            return new Date(due.date) > new Date(latest) ? due.date : latest;
        }, allDues[0].date);
        document.getElementById('stat-recent-date').textContent = recentDate;
    } else {
        document.getElementById('stat-recent-date').textContent = '-';
    }
}

// 폼 초기화
function resetForms() {
    document.getElementById('member-form').reset();
    document.getElementById('due-form').reset();
    const meetingForm = document.getElementById('meeting-form');
    if (meetingForm) meetingForm.reset();
    currentEditId = null;
    currentEditType = null;
    setDefaultDate();
}

// 데이터 저장 (로컬 스토리지)
function saveData() {
    localStorage.setItem('datbyeol_members', JSON.stringify(members));
    localStorage.setItem('datbyeol_meetings', JSON.stringify(meetings));
}

// 회원명부 엑셀 내보내기
function exportMembersToExcel() {
    if (members.length === 0) {
        alert('내보낼 회원 데이터가 없습니다.');
        return;
    }

    // 선택된 회원 확인
    const selectedCheckboxes = document.querySelectorAll('.member-checkbox:checked');
    let membersToExport = [];

    if (selectedCheckboxes.length > 0) {
        // 선택된 회원만 내보내기
        selectedCheckboxes.forEach(checkbox => {
            const index = parseInt(checkbox.dataset.index);
            membersToExport.push(members[index]);
        });
    } else {
        // 선택된 회원이 없으면 전체 내보내기
        if (confirm('선택된 회원이 없습니다.\n전체 회원을 내보내시겠습니까?')) {
            membersToExport = members;
        } else {
            return;
        }
    }

    // 엑셀용 데이터 준비
    const excelData = membersToExport.map((member, index) => ({
        '번호': index + 1,
        '성명': member.name,
        '닉네임': member.nickname || '-',
        '주민번호': member.ssn,
        '핸드폰번호': member.phone,
        '가입일': member.joinDate
    }));

    // 워크시트 생성
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // 열 너비 설정
    worksheet['!cols'] = [
        { wch: 8 },  // 번호
        { wch: 15 }, // 성명
        { wch: 15 }, // 닉네임
        { wch: 18 }, // 주민번호
        { wch: 18 }, // 핸드폰번호
        { wch: 15 }  // 가입일
    ];

    // 워크북 생성
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '회원명부');

    // 파일 다운로드
    const count = membersToExport.length === members.length ? '전체' : `선택${membersToExport.length}명`;
    const fileName = `닻별_회원명부_${count}_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
}

// 데이터 내보내기 (JSON)
function exportData() {
    const data = {
        members: members,
        meetings: meetings,
        exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(dataBlob);
    link.download = `닻별_모임데이터_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
}

// 데이터 가져오기 (JSON)
function importData(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);

            if (confirm('기존 데이터를 덮어쓰시겠습니까? (취소하면 기존 데이터에 추가됩니다)')) {
                members = data.members || [];
                meetings = data.meetings || [];
            } else {
                members = [...members, ...(data.members || [])];
                meetings = [...meetings, ...(data.meetings || [])];
            }

            saveData();
            renderMembers();
            loadMeetings();
            renderDues();
            updateStats();
            alert('데이터를 성공적으로 가져왔습니다!');
        } catch (error) {
            alert('파일을 읽는 중 오류가 발생했습니다.');
            console.error(error);
        }
    };
    reader.readAsText(file);
}

// 개별 입력 폼 렌더링
function renderBulkMembersForm() {
    const container = document.getElementById('bulk-members-container');
    container.innerHTML = '';

    members.forEach((member, index) => {
        const displayName = member.nickname || member.name || '이름없음';
        const memberDiv = document.createElement('div');
        memberDiv.style.cssText = 'display: flex; align-items: center; gap: 10px; padding: 8px; border-bottom: 1px solid #eee;';

        memberDiv.innerHTML = `
            <input type="checkbox" class="bulk-member-check" data-index="${index}" style="width: 18px; height: 18px;">
            <span style="flex: 1; font-weight: 500;">${displayName}</span>
            <input type="number" class="bulk-member-amount" data-index="${index}"
                   min="0" step="1000" placeholder="금액"
                   style="width: 120px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
            <input type="text" class="bulk-member-note" data-index="${index}"
                   placeholder="비고 (선택)"
                   style="width: 150px; padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
        `;

        container.appendChild(memberDiv);
    });
}

// 개별 입력 제출 처리
function handleBulkDueSubmit(e) {
    e.preventDefault();

    if (!currentMeetingId) {
        alert('모임을 먼저 선택해주세요.');
        return;
    }

    const date = document.getElementById('bulk-due-date').value;
    const method = document.getElementById('bulk-due-method').value;

    const checkboxes = document.querySelectorAll('.bulk-member-check:checked');

    if (checkboxes.length === 0) {
        alert('최소 1명 이상의 회원을 선택해주세요.');
        return;
    }

    const meeting = meetings.find(m => m.id === currentMeetingId);
    if (!meeting) return;

    if (!meeting.dues) {
        meeting.dues = [];
    }

    let addedCount = 0;

    checkboxes.forEach(checkbox => {
        const index = parseInt(checkbox.dataset.index);
        const member = members[index];
        const amountInput = document.querySelector(`.bulk-member-amount[data-index="${index}"]`);
        const noteInput = document.querySelector(`.bulk-member-note[data-index="${index}"]`);

        const amount = amountInput.value;

        if (!amount || parseInt(amount) <= 0) {
            return; // 금액이 없으면 건너뛰기
        }

        const displayName = member.nickname || member.name || '이름없음';

        const dueData = {
            memberNickname: displayName,
            memberName: displayName,
            date: date,
            amount: amount,
            method: method,
            note: noteInput.value || ''
        };

        meeting.dues.push(dueData);
        addedCount++;
    });

    if (addedCount === 0) {
        alert('금액이 입력된 회원이 없습니다.');
        return;
    }

    saveData();
    renderDues();
    updateStats();
    document.getElementById('bulk-due-modal').classList.remove('active');
    document.getElementById('bulk-due-form').reset();

    alert(`${addedCount}명의 회비가 등록되었습니다.`);
}
