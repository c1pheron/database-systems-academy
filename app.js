// ============================================================================
// DATABASE SYSTEMS ACADEMY — MASTER HUB APPLICATION LOGIC
// Telegram Mini App SDK, 6 ta Modul Natijalarini Sinxronlash va Karyera Tizimi
// ============================================================================

(function () {
  "use strict";

  // Korporativ Karyera Pog'onalari
  const CAREER_LADDER = [
    { threshold: 0,   title: "Kichik Modeler (Junior Modeler)" },
    { threshold: 50,  title: "Konseptual EER Me'mori" },
    { threshold: 150, title: "Relyatsion Sxema Muhandisi" },
    { threshold: 300, title: "Normalizatsiya & Algebra Mutaxassisi" },
    { threshold: 450, title: "Katta SQL So'rovlar Me'mori" },
    { threshold: 600, title: "Tranzaksiyalar & ACID Yetakchisi" },
    { threshold: 750, title: "NoSQL & Taqsimlangan Klaster Eksperti" },
    { threshold: 850, title: "Bosh Arxitektor & Hamkor (Penthouse)" }
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
    userName: "Ma'lumotlar Me'mori",
    userHandle: "@explorer",
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

        // Luxury Walnut Header & Background colors
        if (tg.setHeaderColor) tg.setHeaderColor("#1b1713");
        if (tg.setBackgroundColor) tg.setBackgroundColor("#151210");

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
          grandTotalCapital += (parsed.score || parsed.capital || solvedCount * 100);
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

  // 4. Update UI Elements
  function renderUI() {
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
    if (elXp) elXp.textContent = `$${state.totalCapital.toLocaleString()}`;

    const percentage = Math.round((state.totalSolved / state.totalChallenges) * 100);
    if (elProgressFill) elProgressFill.style.width = `${percentage}%`;
    if (elProgressPercent) elProgressPercent.textContent = `${percentage}% Bajarildi`;

    // Per-Module Card Progress
    for (let w = 1; w <= 6; w++) {
      const solved = state.moduleProgress[w] || 0;
      const valEl = document.getElementById(`w${w}ProgressVal`);
      if (valEl) {
        valEl.textContent = `${solved} / 150 (${Math.round((solved / 150) * 100)}%)`;
        if (solved >= 150) {
          valEl.style.color = "#84b89c";
          valEl.textContent = "Bajarildi ✓ (150/150)";
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
