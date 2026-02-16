// 데이터 저장소
let members = JSON.parse(localStorage.getItem('datbyeol_members')) || [];
let meetings = JSON.parse(localStorage.getItem('datbyeol_meetings')) || [];
let currentMeetingId = localStorage.getItem('datbyeol_currentMeeting') || null;
let currentEditId = null;
let currentEditType = null;

// 초기화
document.addEventListener('DOMContentLoaded', () => {
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

    // 모달 닫기 버튼
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            memberModal.classList.remove('active');
            dueModal.classList.remove('active');
            meetingModal.classList.remove('active');
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

    // 모임 폼 제출
    document.getElementById('meeting-form').addEventListener('submit', handleMeetingSubmit);

    // 회원 폼 제출
    document.getElementById('member-form').addEventListener('submit', handleMemberSubmit);

    // 회비 폼 제출
    document.getElementById('due-form').addEventListener('submit', handleDueSubmit);

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
}

// 기본 날짜 설정 (오늘)
function setDefaultDate() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('member-join-date').value = today;
    document.getElementById('due-date').value = today;
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
        tbody.innerHTML = '<tr><td colspan="7" style="text-align:center; padding:40px; color:#999;">등록된 회원이 없습니다.</td></tr>';
        document.getElementById('total-members').textContent = '0';
        return;
    }

    members.forEach((member, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
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
            <td>${due.memberName}</td>
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

// 회원 선택 드롭다운 업데이트
function updateMemberSelect() {
    const select = document.getElementById('due-member');
    select.innerHTML = '<option value="">선택하세요</option>';

    members.forEach(member => {
        const option = document.createElement('option');
        option.value = member.name;
        option.textContent = member.name;
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
        memberName: document.getElementById('due-member').value,
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

    // 엑셀용 데이터 준비
    const excelData = members.map((member, index) => ({
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
    const fileName = `닻별_회원명부_${new Date().toISOString().split('T')[0]}.xlsx`;
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
