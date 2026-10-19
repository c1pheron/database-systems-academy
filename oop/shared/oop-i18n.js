// ============================================================================
// OOP ACADEMY — UNIFIED BILINGUAL I18N ENGINE (UZ / EN)
// Seamlessly translates OOP Hub, 6 Weekly Game Simulators, and Dictionary
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
        if (saved === "en" || saved === "uz") return saved;
      } catch (e) {}
      return "uz";
    },

    setLang: function (lang) {
      if (lang !== "uz" && lang !== "en") return;
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
    },

    t: function (key, fallback = "") {
      const lang = this.getLang();
      const bundle = STRINGS[lang] || STRINGS.uz;
      if (bundle[key] !== undefined) return bundle[key];
      return STRINGS.uz[key] !== undefined ? STRINGS.uz[key] : fallback;
    },

    updateSwitcherUI: function () {
      if (typeof document === "undefined") return;
      const lang = this.getLang();
      const btnUz = document.getElementById("btnLangUz");
      const btnEn = document.getElementById("btnLangEn");

      if (btnUz && btnEn) {
        if (lang === "en") {
          btnEn.classList.add("active");
          btnUz.classList.remove("active");
          btnEn.style.background = "#7c3aed";
          btnEn.style.color = "#fff";
          btnUz.style.background = "transparent";
          btnUz.style.color = "#cbd5e1";
        } else {
          btnUz.classList.add("active");
          btnEn.classList.remove("active");
          btnUz.style.background = "#7c3aed";
          btnUz.style.color = "#fff";
          btnEn.style.background = "transparent";
          btnEn.style.color = "#cbd5e1";
        }
      }
    },

    applyDOM: function () {
      if (typeof document === "undefined") return;
      const lang = this.getLang();
      const isEn = lang === "en";

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
      if (statSolvedLabel && (statSolvedLabel.textContent.includes("Bajarildi") || statSolvedLabel.textContent.includes("Solved"))) {
        statSolvedLabel.textContent = this.t("stat_solved");
      }

      // 3. Weekly Game UI Elements
      const btnBack = document.querySelector(".btn-back, #btnNavBack");
      if (btnBack) {
        const fullSpan = btnBack.querySelector(".btn-back-text-full");
        if (fullSpan) fullSpan.textContent = isEn ? "Back to OOP Hub" : "OOP Hubga Qaytish";
      }

      const btnDict = document.getElementById("btnOpenDictionary");
      if (btnDict) {
        const dictText = btnDict.querySelector("span:last-child");
        if (dictText) dictText.textContent = isEn ? "Dictionary & Search" : "Lug'at & Qidiruv";
      }

      const tabProblem = document.getElementById("tabProblem");
      if (tabProblem) {
        const s = tabProblem.querySelector("span:last-child");
        if (s) s.textContent = isEn ? "Problem Statement" : "Masala Sharti";
      }

      const tabUML = document.getElementById("tabUML");
      if (tabUML) {
        const s = tabUML.querySelector("span:last-child");
        if (s) s.textContent = isEn ? "Live UML Diagram" : "Jonli UML Diagrammasi";
      }

      const tabMobProb = document.getElementById("btnTabMobileProblem");
      if (tabMobProb) {
        const s = tabMobProb.querySelector("span:last-child");
        if (s) s.textContent = isEn ? "Task & UML" : "Topshiriq & UML";
      }

      const tabMobEdit = document.getElementById("btnTabMobileEditor");
      if (tabMobEdit) {
        const s = tabMobEdit.querySelector("span:last-child");
        if (s) s.textContent = isEn ? "Java Code & Terminal" : "Java Kod & Terminal";
      }

      const reqH4 = document.querySelector(".task-requirements h4");
      if (reqH4) reqH4.textContent = this.t("task_req_title");

      const btnReset = document.getElementById("btnResetCode");
      if (btnReset) {
        const spanFull = btnReset.querySelector(".btn-text-full");
        if (spanFull) spanFull.textContent = isEn ? "Reset Code" : "Asliga qaytarish";
        const spanShort = btnReset.querySelector(".btn-text-short");
        if (spanShort) spanShort.textContent = isEn ? "Reset" : "Asliga";
      }

      const btnVerify = document.getElementById("btnInstantTest");
      if (btnVerify) {
        const spanFull = btnVerify.querySelector(".btn-text-full");
        if (spanFull) spanFull.textContent = isEn ? "Verify Code" : "Kodni Tekshirish";
        const spanShort = btnVerify.querySelector(".btn-text-short");
        if (spanShort) spanShort.textContent = isEn ? "Verify" : "Tekshirish";
      }

      const btnCloud = document.getElementById("btnCloudRun");
      if (btnCloud) {
        const spanFull = btnCloud.querySelector(".btn-text-full");
        if (spanFull) spanFull.textContent = isEn ? "Run (OpenJDK 21)" : "Ishga tushirish (OpenJDK 21)";
        const spanShort = btnCloud.querySelector(".btn-text-short");
        if (spanShort) spanShort.textContent = isEn ? "OpenJDK 21" : "OpenJDK 21";
      }

      const btnNext = document.getElementById("btnNextChallenge");
      if (btnNext) {
        const spanFull = btnNext.querySelector(".btn-text-full");
        if (spanFull) spanFull.textContent = isEn ? "Next →" : "Keyingi →";
        const spanShort = btnNext.querySelector(".btn-text-short");
        if (spanShort) spanShort.textContent = isEn ? "Next →" : "Keyingi →";
      }

      const btnMap = document.getElementById("btnOpenMapOverview");
      if (btnMap) btnMap.textContent = this.t("btn_map");

      // Sector Tabs
      const pills = document.querySelectorAll(".sector-tab-pill");
      pills.forEach(p => {
        const range = p.dataset.range;
        if (range === "all") p.textContent = this.t("sector_all");
        else if (range === "1-30") p.textContent = this.t("sector_1");
        else if (range === "31-60") p.textContent = this.t("sector_2");
        else if (range === "61-90") p.textContent = this.t("sector_3");
        else if (range === "91-120") p.textContent = this.t("sector_4");
        else if (range === "121-150") p.textContent = this.t("sector_5");
      });

      const consoleTab = document.querySelector(".c-tab");
      if (consoleTab) consoleTab.textContent = this.t("console_tab");

      const editorArea = document.getElementById("codeEditor");
      if (editorArea) editorArea.setAttribute("placeholder", this.t("editor_placeholder"));

      const btnToggleSol = document.getElementById("btnToggleSolution");
      if (btnToggleSol) {
        const s = btnToggleSol.querySelector("span:first-child");
        if (s) s.textContent = isEn ? "💡 Detailed Solution" : "💡 Batafsil Yechim";
      }

      const hint = document.getElementById("solutionToggleHint");
      if (hint) {
        const card = document.getElementById("solutionContentCard");
        const isOpen = card && card.style.display !== "none";
        hint.textContent = isOpen ? (isEn ? "[Close ▴]" : "[Yopish ▴]") : (isEn ? "[View ▾]" : "[Ko'rish ▾]");
      }

      const statPillLabel = document.querySelector(".stat-pill span:first-child");
      if (statPillLabel) {
        statPillLabel.textContent = isEn ? "Rating Score:" : "Reyting Bali:";
      }

      const brandTitle = document.querySelector(".brand-title");
      if (brandTitle) {
        const badge = brandTitle.querySelector(".brand-badge");
        const badgeHtml = badge ? badge.outerHTML : "";
        const m = brandTitle.textContent.match(/(\d+)[ -]Modul/i) || brandTitle.textContent.match(/Module\s*(\d+)/i);
        if (m) {
          const modNum = m[1];
          const titlesUz = {
            "1": "1-Modul: Java Core & Xotira",
            "2": "2-Modul: Inkapsulyatsiya & Himoya",
            "3": "3-Modul: Merosxo'rlik & Kompozitsiya",
            "4": "4-Modul: Polimorfizm & Abstraksiya",
            "5": "5-Modul: Interfeyslar & Bo'sh Bog'lanish",
            "6": "6-Modul: GoF Patternlar & CW2"
          };
          const titlesEn = {
            "1": "Module 1: Java Core & Memory",
            "2": "Module 2: Encapsulation & Protection",
            "3": "Module 3: Inheritance & Composition",
            "4": "Module 4: Polymorphism & Abstraction",
            "5": "Module 5: Interfaces & Loose Coupling",
            "6": "Module 6: GoF Patterns & CW2"
          };
          const newTitle = isEn ? (titlesEn[modNum] || `Module ${modNum}`) : (titlesUz[modNum] || `${modNum}-Modul`);
          brandTitle.innerHTML = `${newTitle} ${badgeHtml}`;
        }
      }
    },

    init: function () {
      const lang = this.getLang();
      root.OOP_CURRENT_LANG = lang;
      this.updateSwitcherUI();
      this.applyDOM();

      // Bind buttons if found
      const btnUz = document.getElementById("btnLangUz");
      const btnEn = document.getElementById("btnLangEn");
      if (btnUz) {
        btnUz.addEventListener("click", () => this.setLang("uz"));
      }
      if (btnEn) {
        btnEn.addEventListener("click", () => this.setLang("en"));
      }
    }
  };

  root.OOP_I18N = OopI18n;

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => OopI18n.init());
    } else {
      OopI18n.init();
    }
  }
})();
