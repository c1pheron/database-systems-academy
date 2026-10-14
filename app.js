// ============================================================================
// DATABASE SYSTEMS INTERACTIVE ACADEMY — MASTER HUB APPLICATION LOGIC
// Telegram Mini App SDK Integration, Unified Progress Sync & Career Engine
// ============================================================================

(function () {
  "use strict";

  // Career Titles by Challenge Threshold
  const CAREER_LADDER = [
    { threshold: 0,   title: "Junior Data Modeler",       rank: "Novice" },
    { threshold: 50,  title: "Conceptual ER Designer",     rank: "Apprentice" },
    { threshold: 150, title: "Relational Schema Analyst",  rank: "Specialist" },
    { threshold: 300, title: "EER & Hierarchy Engineer",   rank: "Engineer" },
    { threshold: 450, title: "Normalization Strategist",   rank: "Senior" },
    { threshold: 600, title: "SQL Query Master",           rank: "Lead" },
    { threshold: 750, title: "Transaction & ACID Lead",    rank: "Expert" },
    { threshold: 850, title: "Principal Database Architect", rank: "Master" }
  ];

  const MODULE_STORAGE_KEYS = {
    1: "DS_W1_PROGRESS",
    2: "DS_W2_PROGRESS",
    3: "DS_W3_PROGRESS",
    4: "DS_W4_PROGRESS",
    5: "DS_W5_PROGRESS",
    6: "DS_W6_PROGRESS"
  };

  // State
  const state = {
    userName: "Database Explorer",
    userHandle: "@explorer",
    totalSolved: 0,
    totalChallenges: 900,
    totalXp: 0,
    moduleProgress: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  // 1. Initialize Telegram Mini App SDK
  function initTelegram() {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.ready();
        tg.expand();

        // Enable closing confirmation if supported
        if (tg.enableClosingConfirmation) tg.enableClosingConfirmation();

        // Set theme colors
        if (tg.setHeaderColor) tg.setHeaderColor("#080f1d");
        if (tg.setBackgroundColor) tg.setBackgroundColor("#050914");

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
    let grandTotalXp = 0;

    for (let w = 1; w <= 6; w++) {
      const key = MODULE_STORAGE_KEYS[w];
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          const solvedCount = Array.isArray(parsed.solvedIds) ? parsed.solvedIds.length : (parsed.solvedCount || 0);
          state.moduleProgress[w] = solvedCount;
          grandTotalSolved += solvedCount;
          grandTotalXp += (parsed.xp || solvedCount * 25);
        } else {
          state.moduleProgress[w] = 0;
        }
      } catch (e) {
        state.moduleProgress[w] = 0;
      }
    }

    state.totalSolved = grandTotalSolved;
    state.totalXp = grandTotalXp;
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

  // 4. Update UI Elements
  function renderUI() {
    // Player Info
    const elName = document.getElementById("hudUserName");
    const elRank = document.getElementById("hudUserRank");
    const elSolved = document.getElementById("hudSolvedTotal");
    const elXp = document.getElementById("hudXpTotal");
    const elProgressFill = document.getElementById("overallProgressBar");
    const elProgressPercent = document.getElementById("overallProgressPercent");

    const currentRank = computeCareerRank(state.totalSolved);

    if (elName) elName.textContent = state.userName;
    if (elRank) elRank.textContent = currentRank.title;
    if (elSolved) elSolved.textContent = `${state.totalSolved} / ${state.totalChallenges}`;
    if (elXp) elXp.textContent = `${state.totalXp.toLocaleString()} XP`;

    const percentage = Math.round((state.totalSolved / state.totalChallenges) * 100);
    if (elProgressFill) elProgressFill.style.width = `${percentage}%`;
    if (elProgressPercent) elProgressPercent.textContent = `${percentage}% Complete`;

    // Per-Module Card Progress
    for (let w = 1; w <= 6; w++) {
      const solved = state.moduleProgress[w] || 0;
      const textEl = document.getElementById(`modProgressTextW${w}`);
      const btnEl = document.getElementById(`btnLaunchW${w}`);

      if (textEl) {
        textEl.textContent = `${solved} / 150 Solved (${Math.round((solved / 150) * 100)}%)`;
      }
      if (btnEl) {
        if (solved >= 150) {
          btnEl.innerHTML = `Completed ✓`;
          btnEl.style.borderColor = "var(--accent-emerald)";
          btnEl.style.background = "rgba(16, 185, 129, 0.2)";
        } else if (solved > 0) {
          btnEl.innerHTML = `Continue (${solved}/150) →`;
        }
      }
    }
  }

  // Initialization on DOM Load
  document.addEventListener("DOMContentLoaded", () => {
    initTelegram();
    loadUnifiedProgress();
    renderUI();
  });

})();
