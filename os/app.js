// ============================================================================
// OPERATING SYSTEMS ACADEMY — MASTER HUB APPLICATION LOGIC
// Telegram Mini App SDK, 6 ta Modul Natijalarini Sinxronlash va Karyera Tizimi
// ============================================================================

(function () {
  "use strict";

  // Linux SysAdmin Karyera Pog'onalari
  const CAREER_LADDER = [
    { threshold: 0,   title: "Intern Linux SysAdmin (Boshlovchi)", avatar: "🌱" },
    { threshold: 100, title: "Linux Junior Operator (Debian 12)", avatar: "🐧" },
    { threshold: 250, title: "Shell Scripting & PAM Muhandisi", avatar: "⚡" },
    { threshold: 450, title: "Kernel & Process Debugger (IPC / fork)", avatar: "🔬" },
    { threshold: 650, title: "DevOps & Container Specialist (Docker)", avatar: "🐳" },
    { threshold: 850, title: "Bosh Tizim Arxitektori (Chief Systems CTO)", avatar: "👑" }
  ];

  const MODULE_STORAGE_KEYS = {
    1: "WIUT_OS_W1_PROGRESS",
    2: "WIUT_OS_W2_PROGRESS",
    3: "WIUT_OS_W3_PROGRESS",
    4: "WIUT_OS_W4_PROGRESS",
    5: "WIUT_OS_W5_PROGRESS",
    6: "WIUT_OS_W6_PROGRESS"
  };

  // State
  const state = {
    userName: "Linux Administrator",
    userHandle: "@sysadmin",
    totalSolved: 0,
    totalChallenges: 900,
    totalCapital: 0,
    moduleProgress: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  // 1. Initialize Telegram Mini App SDK
  function initTelegram() {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.ready();
        tg.expand();

        if (tg.enableClosingConfirmation) tg.enableClosingConfirmation();

        // Carbon Titanium Header & Background colors
        if (tg.setHeaderColor) tg.setHeaderColor("#1f2335");
        if (tg.setBackgroundColor) tg.setBackgroundColor("#1a1b26");

        // Grab user profile
        const user = tg.initDataUnsafe && tg.initDataUnsafe.user;
        if (user) {
          state.userName = user.first_name + (user.last_name ? " " + user.last_name : "");
          state.userHandle = user.username ? "@" + user.username : `ID: ${user.id}`;
        }
      } catch (err) {
        console.warn("Telegram WebApp initialization error:", err);
      }
    }
  }

  // 2. Load Local Storage Progress
  function loadUnifiedProgress() {
    let grandTotalSolved = 0;
    let grandTotalCapital = 0;

    for (let w = 1; w <= 6; w++) {
      const key = MODULE_STORAGE_KEYS[w];
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          const solvedCount = Array.isArray(parsed.solvedIds) ? parsed.solvedIds.length : (parsed.solvedCount || 0);
          state.moduleProgress[w] = solvedCount;
          grandTotalSolved += solvedCount;
          grandTotalCapital += (parsed.bonusCapital || parsed.score || parsed.capital || solvedCount * 100);
        } else {
          state.moduleProgress[w] = 0;
        }
      } catch (e) {
        state.moduleProgress[w] = 0;
      }
    }

    state.totalSolved = grandTotalSolved;
    state.totalCapital = grandTotalCapital;
  }

  // 3. Compute Career Rank
  function computeCareerRank(solvedCount) {
    let current = CAREER_LADDER[0];
    for (const step of CAREER_LADDER) {
      if (solvedCount >= step.threshold) {
        current = step;
      }
    }
    return current;
  }

  // 4. Update HUD and Module Cards
  function updateUI() {
    // User profile
    const nameEl = document.getElementById("hudUserName");
    const rankEl = document.getElementById("hudUserRank");
    const solvedTotalEl = document.getElementById("hudSolvedTotal");
    const xpTotalEl = document.getElementById("hudXpTotal");

    const currentRank = computeCareerRank(state.totalSolved);

    if (nameEl) nameEl.textContent = state.userName;
    if (rankEl) rankEl.textContent = `${currentRank.avatar} ${currentRank.title}`;
    if (solvedTotalEl) solvedTotalEl.textContent = `${state.totalSolved} / ${state.totalChallenges}`;
    if (xpTotalEl) xpTotalEl.textContent = `${state.totalCapital.toLocaleString()} Ball`;

    // Overall Progress Bar
    const pct = Math.min(100, Math.round((state.totalSolved / state.totalChallenges) * 100));
    const progressBar = document.getElementById("overallProgressBar");
    const progressPercent = document.getElementById("overallProgressPercent");

    if (progressBar) progressBar.style.width = `${pct}%`;
    if (progressPercent) progressPercent.textContent = `${pct}% Bajarildi`;

    // Individual week cards
    for (let w = 1; w <= 6; w++) {
      const wEl = document.getElementById(`w${w}ProgressVal`);
      if (wEl) {
        const count = state.moduleProgress[w] || 0;
        wEl.textContent = `${count} / 150`;
        if (count >= 150) {
          wEl.style.color = "var(--accent-emerald-bright)";
        }
      }
    }
  }

  // Run on startup
  function init() {
    initTelegram();
    loadUnifiedProgress();
    updateUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
