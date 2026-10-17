// ============================================================================
// OBJECT-ORIENTED PROGRAMMING ACADEMY — MASTER HUB APPLICATION LOGIC
// Telegram Mini App SDK, 6 ta Modul Natijalarini Sinxronlash va Karyera Tizimi
// ============================================================================

(function () {
  "use strict";

  // Java OOP Karyera Pog'onalari (Bilingual)
  const CAREER_LADDER = [
    { threshold: 0,   titleUz: "Java Junior Coder (Boshlovchi)", titleEn: "Java Junior Coder", avatar: "🌱" },
    { threshold: 100, titleUz: "Clean Code & Encapsulation Pro", titleEn: "Clean Code & Encapsulation Pro", avatar: "🛡️" },
    { threshold: 250, titleUz: "Inheritance & Polymorphism Engineer", titleEn: "Inheritance & Polymorphism Engineer", avatar: "⚡" },
    { threshold: 450, titleUz: "Interface & Loose Coupling Specialist", titleEn: "Interface & Decoupling Specialist", avatar: "🔬" },
    { threshold: 650, titleUz: "GoF Design Pattern Architect", titleEn: "GoF Design Pattern Architect", avatar: "☕" },
    { threshold: 850, titleUz: "Bosh Tizim Arxitektori (Chief Java Architect)", titleEn: "Chief Enterprise Java Architect", avatar: "👑" }
  ];

  const MODULE_STORAGE_KEYS = {
    1: "WIUT_OOP_W1_PROGRESS",
    2: "WIUT_OOP_W2_PROGRESS",
    3: "WIUT_OOP_W3_PROGRESS",
    4: "WIUT_OOP_W4_PROGRESS",
    5: "WIUT_OOP_W5_PROGRESS",
    6: "WIUT_OOP_W6_PROGRESS"
  };

  // State
  const state = {
    userName: "Java Developer",
    userHandle: "@java_dev",
    totalSolved: 0,
    totalChallenges: 900,
    totalPoints: 0,
    moduleProgress: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 }
  };

  function getLang() {
    if (window.OOP_I18N) return window.OOP_I18N.getLang();
    try {
      const saved = localStorage.getItem("OOP_LANG") || localStorage.getItem("DS_ACADEMY_LANG");
      if (saved === "en" || saved === "uz") return saved;
    } catch (e) {}
    return "uz";
  }

  // 1. Initialize Telegram Mini App SDK
  function initTelegram() {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      try {
        tg.ready();
        tg.expand();

        if (tg.enableClosingConfirmation) tg.enableClosingConfirmation();

        // Royal Amethyst Header & Deep Space Background colors
        if (tg.setHeaderColor) tg.setHeaderColor("#120f24");
        if (tg.setBackgroundColor) tg.setBackgroundColor("#0a0914");

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

  // 2. Load Progress from LocalStorage
  function loadProgress() {
    let grandSolved = 0;

    for (let w = 1; w <= 6; w++) {
      const key = MODULE_STORAGE_KEYS[w];
      try {
        const raw = localStorage.getItem(key);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed.solvedCount === "number") {
            state.moduleProgress[w] = parsed.solvedCount;
            grandSolved += parsed.solvedCount;
          } else if (Array.isArray(parsed)) {
            state.moduleProgress[w] = parsed.length;
            grandSolved += parsed.length;
          }
        }
      } catch (e) {
        console.warn(`Could not read progress for OOP Week ${w}:`, e);
      }
    }

    state.totalSolved = grandSolved;
    state.totalPoints = grandSolved * 50; // Har bir topshiriq uchun 50 Ball
  }

  // 3. Render HUD and Badges
  function renderUI() {
    const isEn = getLang() === "en";

    // User name & rank
    const elName = document.getElementById("hudUserName");
    const elRank = document.getElementById("hudUserRank");
    if (elName) elName.textContent = state.userName;

    // Determine Career
    let currentCareer = CAREER_LADDER[0];
    for (let i = CAREER_LADDER.length - 1; i >= 0; i--) {
      if (state.totalSolved >= CAREER_LADDER[i].threshold) {
        currentCareer = CAREER_LADDER[i];
        break;
      }
    }
    const rankTitle = isEn ? currentCareer.titleEn : currentCareer.titleUz;
    if (elRank) elRank.textContent = `${currentCareer.avatar} ${rankTitle}`;

    // Total Solved & Score
    const elSolved = document.getElementById("hudSolvedTotal");
    const elPoints = document.getElementById("hudPointsTotal");
    if (elSolved) elSolved.textContent = `${state.totalSolved} / ${state.totalChallenges}`;
    if (elPoints) elPoints.textContent = `${state.totalPoints.toLocaleString()} ${isEn ? "Pts" : "Ball"}`;

    // Overall Progress bar
    const percent = Math.min(100, Math.round((state.totalSolved / state.totalChallenges) * 100));
    const elBar = document.getElementById("overallProgressBar");
    const elPercent = document.getElementById("overallProgressPercent");
    if (elBar) elBar.style.width = `${percent}%`;
    if (elPercent) elPercent.textContent = `${percent}% ${isEn ? "Completed" : "Bajarildi"}`;

    // Week Module Stat values
    for (let w = 1; w <= 6; w++) {
      const elVal = document.getElementById(`w${w}ProgressVal`);
      if (elVal) {
        elVal.textContent = `${state.moduleProgress[w]} / 150`;
      }
    }
  }

  // Listen to Language Change
  window.onOopLanguageChange = function () {
    renderUI();
  };

  // Lifecycle
  document.addEventListener("DOMContentLoaded", () => {
    initTelegram();
    loadProgress();
    renderUI();

    window.addEventListener("storage", () => {
      loadProgress();
      renderUI();
    });
  });
})();
