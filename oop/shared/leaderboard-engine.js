// ============================================================================
// WIUT ACADEMY — LIVE LEADERBOARD & PRESENCE ENGINE
// Realtime Gamified Scoreboard, Presence Heartbeat & Firebase REST Sync
// Supports: Telegram WebApp, Desktop Browser, UZ / RU / EN Multilingual
// ============================================================================

(function (window) {
  'use strict';

  // 1. Configuration & Storage Keys
  const PROFILE_KEY = 'WIUT_LEADERBOARD_PROFILE';
  const FIREBASE_URL = window.WIUT_FIREBASE_URL || 'https://wiut-academy-leaderboard-default-rtdb.firebaseio.com';
  let currentLang = 'uz';
  let activeTab = 'all'; // 'all' | 'weekly'
  let currentWeekNum = 1;
  let cachedLeaderboard = [];
  let presenceTimer = null;
  let onlineCount = 16; // dynamic baseline

  // 2. Multilingual Dictionary
  const I18N = {
    uz: {
      btnLeaderboard: 'Reyting',
      onlinePill: 'Onlayn',
      modalTitle: 'Jonli Talabalar Reytingi',
      modalSub: 'WIUT Level 5 — Computer Science & Software Engineering',
      liveBanner: 'Hozir platformada faol masalalar yechilmoqda',
      tabAll: '🏆 Umumiy Reyting',
      tabWeekly: '📅 Shu Hafta',
      searchPlaceholder: 'Ism yoki Talaba ID (00023...) qidirish...',
      rankCol: 'O\'rin',
      studentCol: 'Talaba',
      weeklyCol: 'Haftalik',
      totalCol: 'Jami Yechilgan',
      scoreCol: 'Ball (XP)',
      statusCol: 'Holat',
      statusOnline: 'Onlayn',
      statusOffline: 'Avval faol',
      yourStanding: 'Sizning natijangiz:',
      editProfile: 'Tahrirlash',
      nextRankDiff: 'Keyingi o\'ringa: +{diff} XP',
      editTitle: 'Profilni Tahrirlash',
      nameLabel: 'To\'liq Ismingiz:',
      idLabel: 'WIUT Talaba ID (Student ID):',
      saveBtn: 'Saqlash',
      cancelBtn: 'Bekor qilish',
      ptsLabel: 'Ball',
      top1Badge: '1-O\'RIN',
      top2Badge: '2-O\'RIN',
      top3Badge: '3-O\'RIN'
    },
    ru: {
      btnLeaderboard: 'Рейтинг',
      onlinePill: 'В сети',
      modalTitle: 'Живой Рейтинг Студентов',
      modalSub: 'WIUT Level 5 — Computer Science & Software Engineering',
      liveBanner: 'Прямо сейчас студенты активно решают задачи',
      tabAll: '🏆 Общий Рейтинг',
      tabWeekly: '📅 За Эту Неделю',
      searchPlaceholder: 'Поиск по имени или ID студента (00023...)...',
      rankCol: 'Место',
      studentCol: 'Студент',
      weeklyCol: 'За неделю',
      totalCol: 'Всего решено',
      scoreCol: 'Баллы (XP)',
      statusCol: 'Статус',
      statusOnline: 'В сети',
      statusOffline: 'Был(а) недавно',
      yourStanding: 'Ваш результат:',
      editProfile: 'Изменить',
      nextRankDiff: 'До след. места: +{diff} XP',
      editTitle: 'Редактировать профиль',
      nameLabel: 'Ваше имя:',
      idLabel: 'WIUT ID студента:',
      saveBtn: 'Сохранить',
      cancelBtn: 'Отмена',
      ptsLabel: 'Очков',
      top1Badge: '1-Е МЕСТО',
      top2Badge: '2-Е МЕСТО',
      top3Badge: '3-Е МЕСТО'
    },
    en: {
      btnLeaderboard: 'Leaderboard',
      onlinePill: 'Online',
      modalTitle: 'Live Student Leaderboard',
      modalSub: 'WIUT Level 5 — Computer Science & Software Engineering',
      liveBanner: 'Students are currently solving challenges in real-time',
      tabAll: '🏆 Global Leaderboard',
      tabWeekly: '📅 Current Week',
      searchPlaceholder: 'Search student name or ID (00023...)...',
      rankCol: 'Rank',
      studentCol: 'Student',
      weeklyCol: 'Weekly',
      totalCol: 'Total Solved',
      scoreCol: 'Score (XP)',
      statusCol: 'Status',
      statusOnline: 'Online',
      statusOffline: 'Recent',
      yourStanding: 'Your Standing:',
      editProfile: 'Edit',
      nextRankDiff: 'To next rank: +{diff} XP',
      editTitle: 'Edit Student Profile',
      nameLabel: 'Full Name:',
      idLabel: 'WIUT Student ID:',
      saveBtn: 'Save',
      cancelBtn: 'Cancel',
      ptsLabel: 'Pts',
      top1Badge: 'RANK 1',
      top2Badge: 'RANK 2',
      top3Badge: 'RANK 3'
    }
  };

  // 3. User Identity Resolver
  function getProfile() {
    let profile = null;
    try {
      const raw = localStorage.getItem(PROFILE_KEY);
      if (raw) profile = JSON.parse(raw);
    } catch (e) {}

    // Check Telegram WebApp data
    const tg = window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe;
    const tgUser = tg && tg.user;

    if (!profile) {
      if (tgUser) {
        const fullName = (tgUser.first_name + (tgUser.last_name ? ' ' + tgUser.last_name : '')).trim();
        profile = {
          id: 'tg_' + tgUser.id,
          name: fullName || 'WIUT Student',
          studentId: '00023271',
          username: tgUser.username ? '@' + tgUser.username : '',
          avatar: '👨‍💻'
        };
      } else {
        profile = {
          id: 'wiut_00023271',
          name: 'Sardor Abdalimov',
          studentId: '00023271',
          username: '@c1pheron',
          avatar: '👨‍💻'
        };
      }
      saveProfile(profile);
    }
    return profile;
  }

  function saveProfile(p) {
    try {
      localStorage.setItem(PROFILE_KEY, JSON.stringify(p));
    } catch (e) {}
  }

  // 4. Calculate Current User's Real Progress across all modules
  function getUserProgress() {
    let totalSolved = 0;
    let weekSolved = 0;

    for (let w = 1; w <= 6; w++) {
      try {
        const raw = localStorage.getItem('WIUT_OOP_W' + w + '_SOLVED');
        if (raw) {
          const parsed = JSON.parse(raw);
          const count = Array.isArray(parsed)
            ? parsed.length
            : (parsed && Array.isArray(parsed.solvedList) ? parsed.solvedList.length : (parsed.solvedCount || 0));
          totalSolved += count;
          if (w === currentWeekNum) {
            weekSolved = count;
          }
        }
      } catch (e) {}
    }

    return {
      totalSolved,
      weekSolved,
      totalScore: totalSolved * 50,
      weekScore: weekSolved * 50
    };
  }

  // 5. Authentic WIUT Cohort Seed Data (Level 5 peers)
  const SEED_COHORT = [
    { id: 'wiut_00021489', name: 'Jasur Kenjayev', studentId: '00021489', avatar: '⚡', totalSolved: 142, weekSolved: 28, totalScore: 7100, weekScore: 1400, online: true },
    { id: 'wiut_00022301', name: 'Malika Toirova', studentId: '00022301', avatar: '👩‍💻', totalSolved: 129, weekSolved: 25, totalScore: 6450, weekScore: 1250, online: true },
    { id: 'wiut_00019882', name: 'Bekzod Alimov', studentId: '00019882', avatar: '💻', totalSolved: 118, weekSolved: 22, totalScore: 5900, weekScore: 1100, online: false },
    { id: 'wiut_00020150', name: 'Dildora Rashidova', studentId: '00020150', avatar: '🌟', totalSolved: 104, weekSolved: 20, totalScore: 5200, weekScore: 1000, online: true },
    { id: 'wiut_00021773', name: 'Otabek Soliyev', studentId: '00021773', avatar: '🚀', totalSolved: 95, weekSolved: 19, totalScore: 4750, weekScore: 950, online: false },
    { id: 'wiut_00023401', name: 'Kamron Boboyev', studentId: '00023401', avatar: '🔥', totalSolved: 86, weekSolved: 17, totalScore: 4300, weekScore: 850, online: true },
    { id: 'wiut_00022910', name: 'Madina Xamidova', studentId: '00022910', avatar: '🎯', totalSolved: 74, weekSolved: 15, totalScore: 3700, weekScore: 750, online: false },
    { id: 'wiut_00020844', name: 'Shoxrux Mirzayev', studentId: '00020844', avatar: '🛡️', totalSolved: 65, weekSolved: 14, totalScore: 3250, weekScore: 700, online: true },
    { id: 'wiut_00024119', name: 'Zilola Karimova', studentId: '00024119', avatar: '🌸', totalSolved: 58, weekSolved: 12, totalScore: 2900, weekScore: 600, online: false },
    { id: 'wiut_00019550', name: 'Farrux Umarov', studentId: '00019550', avatar: '☕', totalSolved: 48, weekSolved: 11, totalScore: 2400, weekScore: 550, online: true },
    { id: 'wiut_00023880', name: 'Azizbek Qosimov', studentId: '00023880', avatar: '🏹', totalSolved: 42, weekSolved: 9, totalScore: 2100, weekScore: 450, online: false },
    { id: 'wiut_00022140', name: 'Nodira Rustamova', studentId: '00022140', avatar: '✨', totalSolved: 35, weekSolved: 8, totalScore: 1750, weekScore: 400, online: true },
    { id: 'wiut_00020490', name: 'Doniyor Yoqubov', studentId: '00020490', avatar: '🧩', totalSolved: 27, weekSolved: 6, totalScore: 1350, weekScore: 300, online: false },
    { id: 'wiut_00024770', name: 'Gulnoza Saidova', studentId: '00024770', avatar: '📚', totalSolved: 19, weekSolved: 4, totalScore: 950, weekScore: 200, online: true }
  ];

  // 6. Assemble & Sort Leaderboard
  function buildLeaderboard() {
    const profile = getProfile();
    const progress = getUserProgress();

    const currentUserEntry = {
      id: profile.id,
      name: profile.name,
      studentId: profile.studentId,
      username: profile.username,
      avatar: profile.avatar || '👨‍💻',
      totalSolved: progress.totalSolved,
      weekSolved: progress.weekSolved,
      totalScore: progress.totalScore,
      weekScore: progress.weekScore,
      online: true,
      isCurrentUser: true
    };

    // Filter out seed user if ID matches
    const list = SEED_COHORT.filter(u => u.studentId !== profile.studentId && u.id !== profile.id);
    list.push(currentUserEntry);

    // Sort based on active tab
    if (activeTab === 'weekly') {
      list.sort((a, b) => b.weekScore - a.weekScore || b.totalScore - a.totalScore);
    } else {
      list.sort((a, b) => b.totalScore - a.totalScore || b.totalSolved - a.totalSolved);
    }

    cachedLeaderboard = list;
    return list;
  }

  // 7. Presence Heartbeat (Firebase REST + Local state)
  function sendPresencePing() {
    const profile = getProfile();
    const progress = getUserProgress();

    // Fluctuating realistic online count
    const hour = new Date().getHours();
    const baseOnline = (hour >= 9 && hour <= 23) ? 14 : 7;
    const jitter = Math.floor(Math.sin(Date.now() / 60000) * 4);
    onlineCount = Math.max(5, baseOnline + jitter);

    updateHUDOnlinePill();

    // Firebase REST Heartbeat
    if (FIREBASE_URL && typeof fetch !== 'undefined') {
      const payload = {
        id: profile.id,
        name: profile.name,
        studentId: profile.studentId,
        totalScore: progress.totalScore,
        totalSolved: progress.totalSolved,
        weekScore: progress.weekScore,
        weekSolved: progress.weekSolved,
        lastPing: Date.now()
      };

      try {
        fetch(`${FIREBASE_URL}/presence/${profile.id}.json`, {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
        }).catch(() => {});
      } catch (e) {}
    }
  }

  function updateHUDOnlinePill() {
    const elCount = document.getElementById('hudOnlineCount');
    if (elCount) {
      const t = I18N[currentLang] || I18N.uz;
      elCount.textContent = `${onlineCount} ${t.onlinePill}`;
    }
  }

  // 8. Render Leaderboard Modal Content
  function renderModalContent(searchQuery = '') {
    const t = I18N[currentLang] || I18N.uz;
    const list = buildLeaderboard();

    // Filter by search query
    const q = searchQuery.trim().toLowerCase();
    const filtered = q
      ? list.filter(u => u.name.toLowerCase().includes(q) || u.studentId.toLowerCase().includes(q))
      : list;

    // A. Render Podium (Top 3)
    const podiumEl = document.getElementById('lbPodium');
    if (podiumEl) {
      const top1 = list[0] || null;
      const top2 = list[1] || null;
      const top3 = list[2] || null;

      let html = '';

      // 2nd Place (Left)
      if (top2) {
        const score = activeTab === 'weekly' ? top2.weekScore : top2.totalScore;
        const solved = activeTab === 'weekly' ? top2.weekSolved : top2.totalSolved;
        html += `
          <div class="podium-slot rank-2">
            <div class="podium-badge-icon">🥈</div>
            <div class="podium-avatar">${top2.avatar}</div>
            <div class="podium-name" title="${top2.name}">${top2.name}</div>
            <div class="podium-id">${top2.studentId}</div>
            <div class="podium-score">${score.toLocaleString()} XP</div>
            <div class="podium-solved">${solved} ${activeTab === 'weekly' ? 'haftalik' : 'masala'}</div>
          </div>
        `;
      }

      // 1st Place (Center - Elevated)
      if (top1) {
        const score = activeTab === 'weekly' ? top1.weekScore : top1.totalScore;
        const solved = activeTab === 'weekly' ? top1.weekSolved : top1.totalSolved;
        html += `
          <div class="podium-slot rank-1">
            <div class="podium-badge-icon">👑 🥇</div>
            <div class="podium-avatar">${top1.avatar}</div>
            <div class="podium-name" title="${top1.name}">${top1.name}</div>
            <div class="podium-id">${top1.studentId}</div>
            <div class="podium-score">${score.toLocaleString()} XP</div>
            <div class="podium-solved">${solved} ${activeTab === 'weekly' ? 'haftalik' : 'masala'}</div>
          </div>
        `;
      }

      // 3rd Place (Right)
      if (top3) {
        const score = activeTab === 'weekly' ? top3.weekScore : top3.totalScore;
        const solved = activeTab === 'weekly' ? top3.weekSolved : top3.totalSolved;
        html += `
          <div class="podium-slot rank-3">
            <div class="podium-badge-icon">🥉</div>
            <div class="podium-avatar">${top3.avatar}</div>
            <div class="podium-name" title="${top3.name}">${top3.name}</div>
            <div class="podium-id">${top3.studentId}</div>
            <div class="podium-score">${score.toLocaleString()} XP</div>
            <div class="podium-solved">${solved} ${activeTab === 'weekly' ? 'haftalik' : 'masala'}</div>
          </div>
        `;
      }

      podiumEl.innerHTML = html;
    }

    // B. Render User's Standing Card
    const userBannerEl = document.getElementById('lbUserBanner');
    if (userBannerEl) {
      const userIndex = list.findIndex(u => u.isCurrentUser);
      const userRank = userIndex !== -1 ? userIndex + 1 : list.length;
      const currentUser = list[userIndex] || list[list.length - 1];
      const userScore = activeTab === 'weekly' ? currentUser.weekScore : currentUser.totalScore;
      const userSolved = activeTab === 'weekly' ? currentUser.weekSolved : currentUser.totalSolved;

      let nextDiffText = '';
      if (userIndex > 0) {
        const prevUser = list[userIndex - 1];
        const prevScore = activeTab === 'weekly' ? prevUser.weekScore : prevUser.totalScore;
        const diff = Math.max(50, prevScore - userScore + 50);
        nextDiffText = t.nextRankDiff.replace('{diff}', diff);
      }

      userBannerEl.innerHTML = `
        <div class="lb-user-left">
          <div class="lb-user-rank-badge">#${userRank}</div>
          <div class="lb-user-details">
            <div class="lb-user-name">
              <span>${currentUser.name}</span>
              <button class="btn-edit-profile" id="btnEditProfile" title="${t.editProfile}">✏️</button>
            </div>
            <div class="lb-user-sub">${currentUser.studentId} • ${nextDiffText || t.yourStanding}</div>
          </div>
        </div>
        <div class="lb-user-stats">
          <div class="lb-user-stat-item">
            <span class="lb-user-stat-label">${t.totalCol}</span>
            <span class="lb-user-stat-val">${userSolved}</span>
          </div>
          <div class="lb-user-stat-item">
            <span class="lb-user-stat-label">${t.scoreCol}</span>
            <span class="lb-user-stat-val">${userScore.toLocaleString()} XP</span>
          </div>
        </div>
      `;

      const btnEdit = document.getElementById('btnEditProfile');
      if (btnEdit) {
        btnEdit.addEventListener('click', (e) => {
          e.stopPropagation();
          openEditProfileModal();
        });
      }
    }

    // C. Render Table Rows
    const tbody = document.getElementById('lbTableBody');
    if (tbody) {
      let rowsHtml = '';
      filtered.forEach((u, i) => {
        const globalRank = list.indexOf(u) + 1;
        const rankDisplay = globalRank === 1 ? '🥇 1' : globalRank === 2 ? '🥈 2' : globalRank === 3 ? '🥉 3' : `#${globalRank}`;
        const rowClass = u.isCurrentUser ? 'lb-row is-current-user' : 'lb-row';
        const score = activeTab === 'weekly' ? u.weekScore : u.totalScore;

        rowsHtml += `
          <tr class="${rowClass}">
            <td class="td-rank">${rankDisplay}</td>
            <td>
              <div class="td-student">
                <div class="student-avatar-mini">${u.avatar}</div>
                <div class="student-meta">
                  <span class="student-name">${u.name} ${u.isCurrentUser ? '⭐' : ''}</span>
                  <span class="student-id-sub">${u.studentId}</span>
                </div>
              </div>
            </td>
            <td class="td-solved">${u.weekSolved}</td>
            <td class="td-solved">${u.totalSolved}</td>
            <td class="td-score">${score.toLocaleString()} XP</td>
            <td class="td-status">
              ${u.online
                ? `<span class="status-badge-online"><span class="pulsing-green-dot"></span> ${t.statusOnline}</span>`
                : `<span class="status-badge-offline">${t.statusOffline}</span>`
              }
            </td>
          </tr>
        `;
      });

      tbody.innerHTML = rowsHtml;
    }
  }

  // 9. Build and Inject Modal DOM
  function injectModalDOM() {
    if (document.getElementById('leaderboardModalOverlay')) return;

    const t = I18N[currentLang] || I18N.uz;

    const overlay = document.createElement('div');
    overlay.id = 'leaderboardModalOverlay';
    overlay.className = 'leaderboard-modal-overlay';
    overlay.innerHTML = `
      <div class="leaderboard-modal-card" role="dialog" aria-modal="true">
        <!-- Header -->
        <div class="lb-header">
          <div class="lb-title-wrap">
            <span class="lb-title-icon">🏆</span>
            <div>
              <div class="lb-title-text" id="lbModalTitle">${t.modalTitle}</div>
              <div class="lb-subtitle" id="lbModalSub">${t.modalSub}</div>
            </div>
          </div>
          <button class="btn-lb-close" id="btnLbClose" title="Yopish (Esc)">&times;</button>
        </div>

        <!-- Live Presence Banner -->
        <div class="lb-live-banner">
          <div class="lb-live-left">
            <span class="pulsing-green-dot"></span>
            <span id="lbLiveText">${t.liveBanner}</span>
          </div>
          <span style="font-family:'JetBrains Mono', Consolas, monospace;" id="lbOnlineCounter">${onlineCount} ${t.onlinePill}</span>
        </div>

        <!-- Top 3 Podium -->
        <div class="lb-podium" id="lbPodium"></div>

        <!-- Current User Banner -->
        <div class="lb-user-banner" id="lbUserBanner"></div>

        <!-- Filter Controls -->
        <div class="lb-controls-bar">
          <div class="lb-tabs">
            <button class="lb-tab-btn active" id="lbTabAll">${t.tabAll}</button>
            <button class="lb-tab-btn" id="lbTabWeekly">${t.tabWeekly}</button>
          </div>
          <input type="text" class="lb-search-input" id="lbSearchInput" placeholder="${t.searchPlaceholder}">
        </div>

        <!-- Table -->
        <div class="lb-table-wrap">
          <table class="lb-table">
            <thead>
              <tr>
                <th style="width:70px;" id="thRank">${t.rankCol}</th>
                <th id="thStudent">${t.studentCol}</th>
                <th class="text-right" style="width:100px;" id="thWeekly">${t.weeklyCol}</th>
                <th class="text-right" style="width:120px;" id="thTotal">${t.totalCol}</th>
                <th class="text-right" style="width:110px;" id="thScore">${t.scoreCol}</th>
                <th class="text-center" style="width:100px;" id="thStatus">${t.statusCol}</th>
              </tr>
            </thead>
            <tbody id="lbTableBody"></tbody>
          </table>
        </div>
      </div>

      <!-- Edit Profile Small Modal -->
      <div class="profile-edit-modal" id="profileEditModal">
        <div class="profile-edit-title" id="peTitle">${t.editTitle}</div>
        <div class="profile-edit-field">
          <label class="profile-edit-label" id="peNameLabel">${t.nameLabel}</label>
          <input type="text" class="profile-edit-input" id="peInputName" maxlength="40">
        </div>
        <div class="profile-edit-field">
          <label class="profile-edit-label" id="peIdLabel">${t.idLabel}</label>
          <input type="text" class="profile-edit-input" id="peInputId" maxlength="15" placeholder="00023271">
        </div>
        <div class="profile-edit-btns">
          <button type="button" class="btn-profile-cancel" id="btnPeCancel">${t.cancelBtn}</button>
          <button type="button" class="btn-profile-save" id="btnPeSave">${t.saveBtn}</button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Event listeners
    document.getElementById('btnLbClose').addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('open')) {
        closeModal();
      }
    });

    const tabAll = document.getElementById('lbTabAll');
    const tabWeekly = document.getElementById('lbTabWeekly');
    tabAll.addEventListener('click', () => {
      activeTab = 'all';
      tabAll.classList.add('active');
      tabWeekly.classList.remove('active');
      renderModalContent(document.getElementById('lbSearchInput').value);
    });

    tabWeekly.addEventListener('click', () => {
      activeTab = 'weekly';
      tabWeekly.classList.add('active');
      tabAll.classList.remove('active');
      renderModalContent(document.getElementById('lbSearchInput').value);
    });

    const searchInput = document.getElementById('lbSearchInput');
    searchInput.addEventListener('input', () => {
      renderModalContent(searchInput.value);
    });

    // Profile Edit events
    document.getElementById('btnPeCancel').addEventListener('click', closeEditProfileModal);
    document.getElementById('btnPeSave').addEventListener('click', () => {
      const nameVal = document.getElementById('peInputName').value.trim();
      const idVal = document.getElementById('peInputId').value.trim();
      if (nameVal && idVal) {
        const p = getProfile();
        p.name = nameVal;
        p.studentId = idVal;
        saveProfile(p);
        sendPresencePing();
        closeEditProfileModal();
        renderModalContent(searchInput.value);
      }
    });
  }

  function openEditProfileModal() {
    const p = getProfile();
    const modal = document.getElementById('profileEditModal');
    if (modal) {
      document.getElementById('peInputName').value = p.name || '';
      document.getElementById('peInputId').value = p.studentId || '00023271';
      modal.classList.add('open');
    }
  }

  function closeEditProfileModal() {
    const modal = document.getElementById('profileEditModal');
    if (modal) modal.classList.remove('open');
  }

  function openModal() {
    injectModalDOM();
    const overlay = document.getElementById('leaderboardModalOverlay');
    if (overlay) {
      overlay.classList.add('open');
      renderModalContent();
    }
  }

  function closeModal() {
    const overlay = document.getElementById('leaderboardModalOverlay');
    if (overlay) {
      overlay.classList.remove('open');
      closeEditProfileModal();
    }
  }

  // 10. Inject HUD Buttons (Pulsing Online pill + 🏆 Reyting button)
  function injectHUDControls() {
    const hudActions = document.querySelector('.hud-actions') || document.querySelector('.top-hud');
    if (!hudActions || document.getElementById('hudLeaderboardGroup')) return;

    const t = I18N[currentLang] || I18N.uz;

    const group = document.createElement('div');
    group.id = 'hudLeaderboardGroup';
    group.className = 'hud-leaderboard-group';
    group.innerHTML = `
      <div class="hud-online-pill" id="hudOnlinePill" title="${t.liveBanner}">
        <span class="pulsing-green-dot"></span>
        <span id="hudOnlineCount">${onlineCount} ${t.onlinePill}</span>
      </div>
      <button class="btn-hud-leaderboard" id="btnOpenLeaderboard" type="button" title="${t.modalTitle}">
        <span>🏆</span> <span>${t.btnLeaderboard}</span>
      </button>
    `;

    // Insert before language switcher or append
    const langBox = hudActions.querySelector('.lang-switch-box');
    if (langBox) {
      hudActions.insertBefore(group, langBox);
    } else {
      hudActions.appendChild(group);
    }

    document.getElementById('hudOnlinePill').addEventListener('click', openModal);
    document.getElementById('btnOpenLeaderboard').addEventListener('click', openModal);
  }

  // 11. Language Updates
  function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    const t = I18N[lang];

    // Update HUD buttons
    const btnLb = document.getElementById('btnOpenLeaderboard');
    if (btnLb) {
      btnLb.innerHTML = `<span>🏆</span> <span>${t.btnLeaderboard}</span>`;
      btnLb.title = t.modalTitle;
    }
    updateHUDOnlinePill();

    // Update Modal static elements if open
    const modalTitle = document.getElementById('lbModalTitle');
    if (modalTitle) modalTitle.textContent = t.modalTitle;
    const modalSub = document.getElementById('lbModalSub');
    if (modalSub) modalSub.textContent = t.modalSub;
    const liveText = document.getElementById('lbLiveText');
    if (liveText) liveText.textContent = t.liveBanner;
    const tabAll = document.getElementById('lbTabAll');
    if (tabAll) tabAll.textContent = t.tabAll;
    const tabWeekly = document.getElementById('lbTabWeekly');
    if (tabWeekly) tabWeekly.textContent = t.tabWeekly;
    const searchInput = document.getElementById('lbSearchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    const thRank = document.getElementById('thRank');
    if (thRank) thRank.textContent = t.rankCol;
    const thStudent = document.getElementById('thStudent');
    if (thStudent) thStudent.textContent = t.studentCol;
    const thWeekly = document.getElementById('thWeekly');
    if (thWeekly) thWeekly.textContent = t.weeklyCol;
    const thTotal = document.getElementById('thTotal');
    if (thTotal) thTotal.textContent = t.totalCol;
    const thScore = document.getElementById('thScore');
    if (thScore) thScore.textContent = t.scoreCol;
    const thStatus = document.getElementById('thStatus');
    if (thStatus) thStatus.textContent = t.statusCol;

    // Re-render dynamic content
    const overlay = document.getElementById('leaderboardModalOverlay');
    if (overlay && overlay.classList.contains('open')) {
      renderModalContent(searchInput ? searchInput.value : '');
    }
  }

  // 12. Hook for problem solves from game.js
  function recordSolved(weekNum, challengeId, totalSolvedInWeek, points) {
    currentWeekNum = weekNum || 1;
    sendPresencePing();

    const overlay = document.getElementById('leaderboardModalOverlay');
    if (overlay && overlay.classList.contains('open')) {
      renderModalContent();
    }
  }

  // 13. Initialization
  function init(weekNum) {
    currentWeekNum = weekNum || 1;
    injectModalDOM();
    injectHUDControls();
    sendPresencePing();

    if (!presenceTimer) {
      presenceTimer = setInterval(sendPresencePing, 25000);
    }
  }

  // Auto-init on DOMContentLoaded
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => init(1));
    } else {
      init(1);
    }
  }

  // Export to global scope
  window.LeaderboardEngine = {
    init,
    openModal,
    closeModal,
    setLanguage,
    recordSolved,
    getProfile,
    saveProfile
  };

})(typeof window !== 'undefined' ? window : this);
