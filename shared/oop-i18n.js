// ============================================================================
// OOP ACADEMY — UNIFIED TRILINGUAL I18N ENGINE (UZ / RU / EN)
// Seamlessly translates OOP Hub, 6 Weekly Game Simulators, and Dictionary
// Author: 00023271 • Level 5 • WIUT • 00023271@wiut.uz
// Professor Ada • WIUT Object-Oriented Programming (5COSC018C)
// ============================================================================

(function () {
  "use strict";

  const root = typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this);

  const STRINGS = {
    uz: {
      // Hub (index.html)
      portal_back: "← SeventyOne+ Portali",
      hub_brand_sub: "Clean Code, SOLID, Creational, Structural & Behavioural Dizayn Patternlar",
      user_name: "Java Developer",
      user_rank: "🌱 Java Junior Coder",
      stat_solved: "Bajarildi:",
      stat_points: "Reyting Bali:",
      stat_points_unit: " Ball",
      btn_dict: "📖 Lug'at & Qidiruv",
      hub_hero_title: "Java Core, GoF Design Patterns & Clean Code Arxitekturasi",
      hub_hero_desc: "Xush kelibsiz! Ushbu platforma Westminster 5COSC018C (OOP) moduli bo'yicha to'liq amaliy tayyorgarlik uchun yaratilgan: Haqiqiy OpenJDK 21 kompilyatori, jonli UML klass diagrammasi, inkapsulyatsiya, polimorfizm, 23 ta GoF dizayn patternlari hamda Assessment 2 (50%) Console Order tizimini qurish bo'yicha 6 ta modul va 900 ta amaliy vazifa!",
      hub_progress_title: "OOP Modulining Umumiy O'zlashtirilishi",
      hub_completed: "Bajarildi",
      hub_track_title: "🗺️ O'quv Yo'nalishi & 6 ta Korporativ Modul",
      hub_track_sub: "6 Modul • 900 ta Keys • Haqiqiy OpenJDK 21",

      hub_w1_title: "Java Core, Xotira Modeli & Sinflar",
      hub_w1_desc: "Sinf (Class) va Obyekt (Object), Heap va Stack xotirasining real ishlashi, `new` kalit so'zi, Default & Parameterized konstruktorlar hamda `this` murojaati.",
      hub_w1_btn: "1-Modulga Kirish →",

      hub_w2_title: "Inkapsulyatsiya & Ma'lumotlarni Himoyalash",
      hub_w2_desc: "Access Modifiers (private, protected, public, package-private), Getters & Setters bilan validatsiya, ma'lumotlar yaxlitligi va Immutability (O'zgarmas sinflar).",
      hub_w2_btn: "2-Modulga Kirish →",

      hub_w3_title: "Merosxo'rlik & Kompozitsiya (Inheritance)",
      hub_w3_desc: "Klass iyerarxiyasi (`extends`), `super()` konstruktor va metod chaqiruvlari, metodlarni qayta aniqlash (@Override), 'Is-A' va 'Has-A' tamoyillari.",
      hub_w3_btn: "3-Modulga Kirish →",

      hub_w4_title: "Polimorfizm & Abstrakt Sinflar",
      hub_w4_desc: "Dinamik metod chaqiruvi (Runtime Polymorphism), `abstract class` va abstrakt metodlar, turli xil obyektlarni bitta umumiy ro'yxatda boshqarish (`List<Product>`).",
      hub_w4_btn: "4-Modulga Kirish →",

      hub_w5_title: "Interfeyslar & Bo'sh Bog'lanish (Loose Coupling)",
      hub_w5_desc: "Interfeyslar shartnomasi (`interface`), ko'p karrali realizatsiya (`implements`), Dependency Inversion (DIP) va moslashuvchan arxitektura.",
      hub_w5_btn: "5-Modulga Kirish →",

      hub_w6_title: "GoF Dizayn Patternlari & CW2 Buyurtma Tizimi",
      hub_w6_desc: "23 ta GoF Patternlar (Singleton, Factory, Builder, Decorator, Adapter, Strategy, Observer) va Westminster Assessment 2 (50%) Console Order tizimini qurish.",
      hub_w6_btn: "6-Modulga Kirish →",

      // Weekly Game Simulator UI
      back_hub: "← OOP Hubga Qaytish",
      rating_score: "Reyting Bali:",
      sector_all: "Barchasi (150)",
      sector_1: "1-Bosqich (1-30)",
      sector_2: "2-Bosqich (31-60)",
      sector_3: "3-Bosqich (61-90)",
      sector_4: "4-Bosqich (91-120)",
      sector_5: "5-Bosqich (121-150)",
      btn_map: "🗺️ Xarita (150)",
      tab_mobile_problem: "📝 Topshiriq & UML",
      tab_mobile_editor: "💻 Java Kod & Terminal",
      tab_problem: "📝 Masala Sharti",
      tab_uml: "📊 Jonli UML Diagrammasi",
      task_req_title: "Vazifa Talablari:",
      btn_solution: "💡 Batafsil Yechim",
      solution_hint_open: "[Ko'rish ▾]",
      solution_hint_close: "[Yopish ▴]",
      btn_reset: "Asliga qaytarish",
      btn_verify: "Kodni Tekshirish",
      btn_run_cloud: "Ishga tushirish (OpenJDK 21)",
      btn_next: "Keyingi →",
      console_tab: "💻 Java Konsoli (Terminal)",
      console_env: "OpenJDK 21 Environment",
      console_ready: "Java konsoli tayyor. '▶ Kodni Tekshirish' yoki '☕ Ishga tushirish (OpenJDK 21)' tugmasini bosing.",
      editor_placeholder: "// Java kodingizni bu yerga yozing...",
      req_default_1: "Klass to'g'ri nomlangan va maydonlar e'lon qilingan bo'lishi kerak.",
      req_default_2: "Sintaksis xatolarisiz va clean code qoidalariga mos yozing."
    },

    ru: {
      // Hub (index.html)
      portal_back: "← Портал SeventyOne+",
      hub_brand_sub: "Clean Code, SOLID, Creational, Structural и Behavioural Паттерны Проектирования",
      user_name: "Java Разработчик",
      user_rank: "🌱 Java Junior Coder",
      stat_solved: "Решено:",
      stat_points: "Рейтинг:",
      stat_points_unit: " Баллов",
      btn_dict: "📖 Словарь и Поиск",
      hub_hero_title: "Java Core, Паттерны GoF и Архитектура Clean Code",
      hub_hero_desc: "Добро пожаловать! Практическая подготовка по Westminster 5COSC018C (OOP): компилятор OpenJDK 21, живые UML диаграммы классов, инкапсуляция, полиморфизм, 23 паттерна GoF и Assessment 2 (50%) Console Order App на 6 модулях и 900 задачах!",
      hub_progress_title: "Общий Прогресс Модуля OOP",
      hub_completed: "Завершено",
      hub_track_title: "🗺️ Учебный Трек и 6 Корпоративных Модулей",
      hub_track_sub: "6 Модулей • 900 Задач • OpenJDK 21",

      hub_w1_title: "Java Core, Модель Памяти и Классы",
      hub_w1_desc: "Классы и Объекты, механика памяти Heap vs Stack, оператор `new`, конструкторы по умолчанию и с параметрами, ключевое слово `this`.",
      hub_w1_btn: "Войти в Модуль 1 →",

      hub_w2_title: "Инкапсуляция и Защита Данных",
      hub_w2_desc: "Модификаторы доступа (private, protected, public, package-private), валидация в геттерах и сеттерах, целостность данных и неизменяемые классы.",
      hub_w2_btn: "Войти в Модуль 2 →",

      hub_w3_title: "Наследование и Композиция",
      hub_w3_desc: "Иерархия классов (`extends`), вызовы `super()`, переопределение методов (@Override), и соотношение 'Is-A' против 'Has-A'.",
      hub_w3_btn: "Войти в Модуль 3 →",

      hub_w4_title: "Полиморфизм и Абстрактные Классы",
      hub_w4_desc: "Динамическая диспетчеризация (Runtime Polymorphism), контракты `abstract class`, управление разнородными объектами (`List<Product>`).",
      hub_w4_btn: "Войти в Модуль 4 →",

      hub_w5_title: "Интерфейсы и Слабая Связанность (Loose Coupling)",
      hub_w5_desc: "Контракты (`interface`), множественная реализация (`implements`), инверсия зависимостей (DIP) и гибкая модульная архитектура.",
      hub_w5_btn: "Войти в Модуль 5 →",

      hub_w6_title: "Паттерны Проектирования GoF и Консольное Приложение CW2",
      hub_w6_desc: "23 паттерна GoF (Singleton, Factory, Builder, Decorator, Adapter, Strategy, Observer) и курсовая работа Westminster Assessment 2 (50%).",
      hub_w6_btn: "Войти в Модуль 6 →",

      // Weekly Game Simulator UI
      back_hub: "← Назад в OOP Hub",
      rating_score: "Рейтинг:",
      sector_all: "Все (150)",
      sector_1: "1-й Этап (1-30)",
      sector_2: "2-й Этап (31-60)",
      sector_3: "3-й Этап (61-90)",
      sector_4: "4-й Этап (91-120)",
      sector_5: "5-й Этап (121-150)",
      btn_map: "🗺️ Карта (150)",
      tab_mobile_problem: "📝 Задание & UML",
      tab_mobile_editor: "💻 Java Код & Терминал",
      tab_problem: "📝 Условие Задачи",
      tab_uml: "📊 Живая UML Диаграмма",
      task_req_title: "Требования Задачи:",
      btn_solution: "💡 Подробное Решение",
      solution_hint_open: "[Открыть ▾]",
      solution_hint_close: "[Закрыть ▴]",
      btn_reset: "Сбросить Код",
      btn_verify: "Проверить Код",
      btn_run_cloud: "Запустить (OpenJDK 21)",
      btn_next: "Следующее →",
      console_tab: "💻 Консоль Java (Терминал)",
      console_env: "Окружение OpenJDK 21",
      console_ready: "Консоль Java готова. Нажмите '▶ Проверить Код' или '☕ Запустить (OpenJDK 21)'.",
      editor_placeholder: "// Напишите ваш Java код здесь...",
      req_default_1: "Класс должен быть правильно объявлен с нужными полями.",
      req_default_2: "Пишите чистый код без ошибок компиляции."
    },

    en: {
      // Hub (index.html)
      portal_back: "← SeventyOne+ Portal",
      hub_brand_sub: "Clean Code, SOLID, Creational, Structural & Behavioural Design Patterns",
      user_name: "Java Developer",
      user_rank: "🌱 Java Junior Coder",
      stat_solved: "Solved:",
      stat_points: "Rating Score:",
      stat_points_unit: " Pts",
      btn_dict: "📖 Dictionary & Search",
      hub_hero_title: "Java Core, GoF Design Patterns & Clean Code Architecture",
      hub_hero_desc: "Welcome! Designed for Westminster 5COSC018C (OOP) practical mastery: authentic OpenJDK 21 compiler, live UML class diagrams, encapsulation, polymorphism, 23 GoF design patterns, and Assessment 2 (50%) Console Order App across 6 modules and 900 progressive challenges!",
      hub_progress_title: "OOP Curriculum Overall Mastery",
      hub_completed: "Completed",
      hub_track_title: "🗺️ Curriculum Path & 6 Enterprise Modules",
      hub_track_sub: "6 Modules • 900 Cases • Authentic OpenJDK 21",

      hub_w1_title: "Java Core, Memory Model & Classes",
      hub_w1_desc: "Classes & Objects, Heap vs Stack runtime mechanics, `new` keyword, Default & Parameterized constructors, and `this` variable disambiguation.",
      hub_w1_btn: "Enter Module 1 →",

      hub_w2_title: "Encapsulation & Data Protection",
      hub_w2_desc: "Access Modifiers (private, protected, public, package-private), Getters & Setters validation, data integrity, and Immutable classes.",
      hub_w2_btn: "Enter Module 2 →",

      hub_w3_title: "Inheritance & Composition",
      hub_w3_desc: "Class hierarchies (`extends`), `super()` constructor & method chaining, method overriding (@Override), and 'Is-A' vs 'Has-A' relationships.",
      hub_w3_btn: "Enter Module 3 →",

      hub_w4_title: "Polymorphism & Abstract Classes",
      hub_w4_desc: "Dynamic method dispatch (Runtime Polymorphism), `abstract class` contracts, and managing heterogeneous object collections (`List<Product>`).",
      hub_w4_btn: "Enter Module 4 →",

      hub_w5_title: "Interfaces & Loose Coupling",
      hub_w5_desc: "Pure contracts (`interface`), multiple implementation (`implements`), Dependency Inversion (DIP), and flexible architectural decoupling.",
      hub_w5_btn: "Enter Module 5 →",

      hub_w6_title: "GoF Design Patterns & CW2 Console App",
      hub_w6_desc: "23 GoF Patterns (Singleton, Factory, Builder, Decorator, Adapter, Strategy, Observer) and Westminster Assessment 2 (50%) Console Order Application.",
      hub_w6_btn: "Enter Module 6 →",

      // Weekly Game Simulator UI
      back_hub: "← Back to OOP Hub",
      rating_score: "Rating Score:",
      sector_all: "All (150)",
      sector_1: "Stage 1 (1-30)",
      sector_2: "Stage 2 (31-60)",
      sector_3: "Stage 3 (61-90)",
      sector_4: "Stage 4 (91-120)",
      sector_5: "Stage 5 (121-150)",
      btn_map: "🗺️ Map (150)",
      tab_mobile_problem: "📝 Task & UML",
      tab_mobile_editor: "💻 Java Code & Terminal",
      tab_problem: "📝 Problem Statement",
      tab_uml: "📊 Live UML Diagram",
      task_req_title: "Task Requirements:",
      btn_solution: "💡 Detailed Solution",
      solution_hint_open: "[View ▾]",
      solution_hint_close: "[Close ▴]",
      btn_reset: "Reset Code",
      btn_verify: "Verify Code",
      btn_run_cloud: "Run (OpenJDK 21)",
      btn_next: "Next →",
      console_tab: "💻 Java Console (Terminal)",
      console_env: "OpenJDK 21 Environment",
      console_ready: "Java console ready. Click '▶ Verify Code' or '☕ Run (OpenJDK 21)'.",
      editor_placeholder: "// Write your Java code here...",
      req_default_1: "Class must be correctly declared with proper fields.",
      req_default_2: "Ensure clean code syntax without compilation errors."
    }
  };

  const OopI18n = {
    getLang: function () {
      if (root.OOP_CURRENT_LANG) return root.OOP_CURRENT_LANG;
      try {
        const saved = localStorage.getItem("OOP_LANG") || localStorage.getItem("DS_ACADEMY_LANG");
        if (saved === "en" || saved === "uz" || saved === "ru") return saved;
      } catch (e) {}
      return "uz";
    },

    setLang: function (lang) {
      if (lang !== "uz" && lang !== "en" && lang !== "ru") return;
      root.OOP_CURRENT_LANG = lang;
      try {
        localStorage.setItem("OOP_LANG", lang);
        localStorage.setItem("DS_ACADEMY_LANG", lang);
      } catch (e) {}

      if (document.documentElement) {
        document.documentElement.lang = lang;
      }

      this.updateSwitcherUI();
      this.applyDOM();

      // Notify Dictionary
      if (root.setOopDictionaryLang) {
        root.setOopDictionaryLang(lang);
      }

      // Notify App/Game listener
      if (root.onOopLanguageChange) {
        root.onOopLanguageChange(lang);
      }
      if (root.onLanguageChange) {
        root.onLanguageChange(lang);
      }
    },

    t: function (key, fallback = "") {
      const lang = this.getLang();
      const bundle = STRINGS[lang] || STRINGS.uz;
      if (bundle && bundle[key] !== undefined) return bundle[key];
      return STRINGS.uz[key] !== undefined ? STRINGS.uz[key] : fallback;
    },

    updateSwitcherUI: function () {
      if (typeof document === "undefined") return;
      const lang = this.getLang();
      const btnUz = document.getElementById("btnLangUz");
      const btnRu = document.getElementById("btnLangRu");
      const btnEn = document.getElementById("btnLangEn");

      const buttons = [
        { el: btnUz, lang: "uz" },
        { el: btnRu, lang: "ru" },
        { el: btnEn, lang: "en" }
      ];

      buttons.forEach(b => {
        if (b.el) {
          if (lang === b.lang) {
            b.el.classList.add("active");
            b.el.style.background = "#7c3aed";
            b.el.style.color = "#fff";
          } else {
            b.el.classList.remove("active");
            b.el.style.background = "transparent";
            b.el.style.color = "#cbd5e1";
          }
        }
      });
    },

    applyDOM: function () {
      if (typeof document === "undefined") return;
      const lang = this.getLang();

      // 1. data-oop-i18n elements
      document.querySelectorAll("[data-oop-i18n]").forEach(el => {
        const key = el.getAttribute("data-oop-i18n");
        const val = this.t(key);
        if (val) el.textContent = val;
      });

      // 2. Hub-specific Elements
      const btnBackHub = document.querySelector(".btn-back-hub");
      if (btnBackHub) btnBackHub.textContent = this.t("portal_back");

      const brandSub = document.querySelector(".brand-sub");
      if (brandSub && brandSub.textContent.includes("Clean Code")) {
        brandSub.textContent = this.t("hub_brand_sub");
      }

      const statSolvedLabel = document.querySelector(".stat-chip .label");
      if (statSolvedLabel && (statSolvedLabel.textContent.includes("Bajarildi") || statSolvedLabel.textContent.includes("Solved") || statSolvedLabel.textContent.includes("Решено"))) {
        statSolvedLabel.textContent = this.t("stat_solved");
      }

      // 3. Weekly Game UI Elements
      const btnBack = document.querySelector(".btn-back, #btnNavBack");
      if (btnBack) {
        const textFull = btnBack.querySelector(".btn-back-text-full");
        if (textFull) textFull.textContent = this.t("back_hub").replace("← ", "");
      }

      const btnReset = document.getElementById("btnResetCode");
      if (btnReset) btnReset.textContent = "↺ " + this.t("btn_reset");

      const btnVerify = document.getElementById("btnVerifyCode");
      if (btnVerify) btnVerify.textContent = "▶ " + this.t("btn_verify");

      const btnRun = document.getElementById("btnRunCloud");
      if (btnRun) btnRun.textContent = "☕ " + this.t("btn_run_cloud");

      const btnNext = document.getElementById("btnNextChallenge");
      if (btnNext) btnNext.textContent = this.t("btn_next");

      const tabProblem = document.getElementById("tabProblem");
      if (tabProblem) tabProblem.textContent = this.t("tab_problem");

      const tabUml = document.getElementById("tabUml");
      if (tabUml) tabUml.textContent = this.t("tab_uml");

      const taskReqTitle = document.getElementById("taskReqTitle");
      if (taskReqTitle) taskReqTitle.textContent = this.t("task_req_title");

      const btnSolText = document.getElementById("btnSolutionText");
      if (btnSolText) btnSolText.textContent = this.t("btn_solution");

      const codeEditor = document.getElementById("codeEditor");
      if (codeEditor && !codeEditor.value) {
        codeEditor.setAttribute("placeholder", this.t("editor_placeholder"));
      }

      // Sector pills
      const sectorMap = {
        "1-30": "sector_1",
        "31-60": "sector_2",
        "61-90": "sector_3",
        "91-120": "sector_4",
        "121-150": "sector_5",
        "all": "sector_all"
      };
      document.querySelectorAll(".sector-tab-pill").forEach(pill => {
        const range = pill.getAttribute("data-range");
        if (sectorMap[range]) {
          pill.textContent = this.t(sectorMap[range]);
        }
      });

      const btnMap = document.getElementById("btnOpenMapOverview");
      if (btnMap) btnMap.textContent = this.t("btn_map");
    },

    bindEvents: function () {
      if (typeof document === "undefined") return;
      const btnUz = document.getElementById("btnLangUz");
      const btnRu = document.getElementById("btnLangRu");
      const btnEn = document.getElementById("btnLangEn");

      if (btnUz) {
        btnUz.onclick = () => this.setLang("uz");
      }
      if (btnRu) {
        btnRu.onclick = () => this.setLang("ru");
      }
      if (btnEn) {
        btnEn.onclick = () => this.setLang("en");
      }
    },

    init: function () {
      this.bindEvents();
      this.updateSwitcherUI();
      this.applyDOM();
    }
  };

  root.OOP_I18N = OopI18n;

  // Auto-init on DOM ready
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => OopI18n.init());
    } else {
      OopI18n.init();
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = OopI18n;
  }
})();
