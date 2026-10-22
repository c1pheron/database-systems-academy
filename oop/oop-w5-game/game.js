// ============================================================================
// OOP ACADEMY — WEEK 5 GAME LOGIC (150 PROGRESSIVE CHALLENGES)
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W5_PROGRESS";
  const CODE_STORAGE_PREFIX = "WIUT_OOP_W5_CODE_";
  let currentLang = (window.OOP_I18N ? window.OOP_I18N.getLang() : (localStorage.getItem("OOP_LANG") || "uz"));

  window.onOopLanguageChange = function (lang) {
    if (window.LeaderboardEngine) window.LeaderboardEngine.setLanguage(lang);
    currentLang = lang;
    renderHUD();
    renderChallenge();
    window.addEventListener("beforeunload", saveCurrentCode);
    if (window.LeaderboardEngine) {
      window.LeaderboardEngine.init(5);
      window.LeaderboardEngine.setLanguage(currentLang);
    }
    if (window.JavaEditorEnhancer) {
      window.JavaEditorEnhancer.init("codeEditor", CHALLENGES[currentQIndex]);
    }
  };
  let currentQIndex = 0;
  let currentSector = "1-30";
  let solvedQuestions = new Set();

  // Load 150 challenges from dedicated dataset
  const CHALLENGES = (window.OOP_CHALLENGES_W5 && window.OOP_CHALLENGES_W5.length > 0)
    ? window.OOP_CHALLENGES_W5
    : [
        {
          id: 1,
          title: { uz: "1. Boshlang'ich Topshiriq", en: "1. Initial Challenge" },
          scenario: { uz: "Topshiriq yuklanmoqda...", en: "Loading challenge..." },
          requirements: { classes: ["Main"] },
          starterCode: "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Salom!\");\n    }\n}",
          solution: "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Salom!\");\n    }\n}",
          detailedSolution: { theory: "Boshlang'ich dars", cleanCode: "class Main {}", breakdown: ["Klass tuzildi"] }
        }
      ];

  // 1. Storage Helpers
  function loadSolved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          solvedQuestions = new Set(parsed);
        } else if (parsed && Array.isArray(parsed.solvedList)) {
          solvedQuestions = new Set(parsed.solvedList);
        }
      }
    } catch (e) {
      console.warn("Could not load solved list:", e);
    }
  }

  function saveSolved() {
    if (window.LeaderboardEngine) {
      window.LeaderboardEngine.recordSolved(5, (typeof CHALLENGES !== 'undefined' && CHALLENGES[currentQIndex]) ? CHALLENGES[currentQIndex].id : 0, solvedQuestions.size, solvedQuestions.size * 50);
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        solvedCount: solvedQuestions.size,
        solvedList: Array.from(solvedQuestions)
      }));
    } catch (e) {
      console.warn("Could not save solved list:", e);
    }
  }

  // 2. UI Render
  function renderHUD() {
    const qStrip = document.getElementById("qStrip");
    if (!qStrip) return;
    qStrip.innerHTML = "";

    CHALLENGES.forEach((ch, idx) => {
      // Sector filtering
      if (currentSector !== "all") {
        const parts = currentSector.split("-").map(Number);
        if (ch.id < parts[0] || ch.id > parts[1]) return;
      }

      const dot = document.createElement("div");
      dot.className = "q-dot" + (idx === currentQIndex ? " active" : "") + (solvedQuestions.has(ch.id) ? " solved" : "");
      dot.textContent = "";
      const qTitle = (ch.title && ch.title[currentLang]) ? ch.title[currentLang] : (ch.title?.uz || "");
      dot.title = ch.id + ". " + ((ch.title && ch.title[currentLang]) ? ch.title[currentLang] : (ch.title?.uz || ""));
      dot.addEventListener("click", () => switchChallenge(idx));
      qStrip.appendChild(dot);

      if (idx === currentQIndex) {
        setTimeout(() => {
          dot.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }, 50);
      }
    });

    // Rating score
    const elPoints = document.getElementById("hudRatingPoints");
    if (elPoints) {
      const isEn = currentLang === "en";
      const isRu = currentLang === "ru";
      elPoints.textContent = solvedQuestions.size * 50 + (isRu ? " Очков" : (isEn ? " Pts" : " Ball"));
    }
  }

  function renderChallenge() {
    const ch = CHALLENGES[currentQIndex];
    if (!ch) return;

    // Header badge & title
    const elBadge = document.getElementById("problemBadge");
    const elTitle = document.getElementById("problemTitle");
    const elScenario = document.getElementById("problemScenario");
    const elSolutionCard = document.getElementById("solutionContentCard");
    const elToggleHint = document.getElementById("solutionToggleHint");

    const isEn = currentLang === "en";
    const isRu = currentLang === "ru";
    if (elBadge) elBadge.textContent = isRu ? ("Модуль 5 • Задание " + ch.id) : (isEn ? ("Module 5 • Challenge " + ch.id) : ("5-Modul • " + ch.id + "-Topshiriq"));
    if (elTitle) elTitle.textContent = (ch.title && ch.title[currentLang]) ? ch.title[currentLang] : (isRu ? (ch.title?.ru || ch.title?.en || ch.title?.uz) : (isEn ? (ch.title?.en || ch.title?.uz) : (ch.title?.uz || "")));
    if (elScenario) {
      if (typeof window.formatChallengeScenarioHTML === "function") {
        elScenario.innerHTML = window.formatChallengeScenarioHTML(ch, currentLang);
      } else {
        elScenario.textContent = (ch.scenario && ch.scenario[currentLang]) ? ch.scenario[currentLang] : (ch.scenario?.uz || "");
      }
    }

    // Render Rich Solution View via SolutionRenderer
    if (window.SolutionRenderer) {
      window.SolutionRenderer.render(ch, "solutionContentCard", currentLang);
    }
    if (elSolutionCard) elSolutionCard.style.display = "none";
    if (elToggleHint) elToggleHint.textContent = isRu ? "[Смотреть ▾]" : (isEn ? "[View ▾]" : "[Ko'rish ▾]");

    // Update requirements list
    const reqList = document.getElementById("taskReqList");
    if (reqList) {
      let reqHtml = "";
      if (ch.requirements.classes) {
        reqHtml += isRu
          ? "<li><strong>Классы:</strong> Объявите класс <code>" + ch.requirements.classes.join(", ") + "</code>.</li>"
          : (isEn ? "<li><strong>Classes:</strong> Declare class <code>" + ch.requirements.classes.join(", ") + "</code>.</li>"
                  : "<li><strong>Klasslar:</strong> <code>" + ch.requirements.classes.join(", ") + "</code> sinfi e'lon qilinishi shart.</li>");
      }
      if (ch.requirements.fields) {
        const fieldStr = ch.requirements.fields.map(f => "<code>" + f.type + " " + f.name + "</code>").join(", ");
        reqHtml += isRu
          ? "<li><strong>Поля:</strong> Объявите поля " + fieldStr + " с соответствующими типами.</li>"
          : (isEn ? "<li><strong>Fields:</strong> Define <code>" + fieldStr + "</code> with appropriate types.</li>"
                  : "<li><strong>Maydonlar:</strong> " + fieldStr + " maydonlari to'g'ri turda yozilsin.</li>");
      }
      if (ch.requirements.privateFields) {
        reqHtml += isRu
          ? "<li><strong>Инкапсуляция:</strong> Поля <code>" + ch.requirements.privateFields.join(", ") + "</code> должны быть объявлены как <code>private</code>.</li>"
          : (isEn ? "<li><strong>Encapsulation:</strong> Fields <code>" + ch.requirements.privateFields.join(", ") + "</code> must be <code>private</code>.</li>"
                  : "<li><strong>Inkapsulyatsiya:</strong> <code>" + ch.requirements.privateFields.join(", ") + "</code> maydonlari <code>private</code> bo'lsin.</li>");
      }
      if (ch.requirements.methods && ch.requirements.methods.length > 0) {
        reqHtml += isRu
          ? "<li><strong>Методы:</strong> Реализуйте метод(ы) <code>" + ch.requirements.methods.join("(), ") + "()</code>.</li>"
          : (isEn ? "<li><strong>Methods:</strong> Implement <code>" + ch.requirements.methods.join("(), ") + "()</code> method(s).</li>"
                  : "<li><strong>Metodlar:</strong> <code>" + ch.requirements.methods.join("(), ") + "()</code> metodi yaratilsin.</li>");
      }
      if (ch.requirements.constructors) {
        reqHtml += isRu
          ? "<li><strong>Конструктор:</strong> Создайте конструктор для <code>" + ch.requirements.constructors.join(", ") + "</code>.</li>"
          : (isEn ? "<li><strong>Constructor:</strong> Create constructor for <code>" + ch.requirements.constructors.join(", ") + "</code>.</li>"
                  : "<li><strong>Konstruktor:</strong> <code>" + ch.requirements.constructors.join(", ") + "</code> klassi uchun konstruktor tuzilsin.</li>");
      }
      if (ch.requirements.keywords) {
        reqHtml += isRu
          ? "<li><strong>Ключевые слова:</strong> Необходимо использовать ключевое слово <code>" + ch.requirements.keywords.join(", ") + "</code>.</li>"
          : (isEn ? "<li><strong>Keywords:</strong> Must use keyword(s) <code>" + ch.requirements.keywords.join(", ") + "</code>.</li>"
                  : "<li><strong>Kalit so'zlar:</strong> <code>" + ch.requirements.keywords.join(", ") + "</code> qo'llanilishi kerak.</li>");
      }
      reqHtml += isRu
        ? "<li>Решите задачу без ошибок компиляции, следуя стандартам Clean Code.</li>"
        : (isEn ? "<li>Ensure zero syntax errors and follow Clean Code conventions.</li>"
                : "<li>Sintaksis xatolarisiz va Clean Code qoidalariga mos yozing.</li>");
      reqList.innerHTML = reqHtml;
    }

    // Set code editor
    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      let saved = null;
      try {
        saved = localStorage.getItem(CODE_STORAGE_PREFIX + ch.id);
      } catch (e) {}
      if (saved !== null && saved !== undefined && saved.trim().length > 0) {
        codeArea.value = saved;
      } else {
        codeArea.value = ch.starterCode || "";
      }
      codeArea.scrollTop = 0;
      codeArea.scrollLeft = 0;
    }

    // Clear console output
    const consoleOut = document.getElementById("consoleOutput");
    if (consoleOut) {
      consoleOut.className = "console-output";
      consoleOut.textContent = "";
    }

    // Render UML preview
    updateUML();
    if (window.JavaEditorEnhancer) {
      window.JavaEditorEnhancer.setChallenge(ch);
    }
  }

  function updateUML() {
    const codeArea = document.getElementById("codeEditor");
    if (!codeArea || !window.UMLRenderer) return;
    const classes = window.UMLRenderer.parseJavaToUML(codeArea.value);
    window.UMLRenderer.renderSVG(classes, "umlContainer");
  }

  
  function saveCurrentCode() {
    const codeArea = document.getElementById("codeEditor");
    if (!codeArea) return;
    if (currentAppMode === "challenge") {
      const ch = CHALLENGES[currentQIndex];
      if (ch) {
        try {
          localStorage.setItem(CODE_STORAGE_PREFIX + ch.id, codeArea.value);
        } catch (e) {}
      }
    } else if (currentAppMode === "playground") {
      try {
        localStorage.setItem(PLAYGROUND_STORAGE_KEY, codeArea.value);
      } catch (e) {}
    }
  }

  function switchChallenge(idx) {
    saveCurrentCode();
    saveCurrentCode();
    if (idx < 0 || idx >= CHALLENGES.length) return;
    currentQIndex = idx;

        // Auto-update sector filter to match current question
    const ch = CHALLENGES[idx];
    const targetSector = (ch.id <= 30) ? "1-30" : (ch.id <= 60) ? "31-60" : (ch.id <= 90) ? "61-90" : (ch.id <= 120) ? "91-120" : "121-150";
    if (currentSector !== targetSector) {
      currentSector = targetSector;
      document.querySelectorAll(".sector-tab-pill").forEach(p => {
        if (p.getAttribute("data-range") === targetSector) p.classList.add("active");
        else p.classList.remove("active");
      });
    }

    renderHUD();
    renderChallenge();
    if (window.LeaderboardEngine) {
      window.LeaderboardEngine.init(5);
      window.LeaderboardEngine.setLanguage(currentLang);
    }
  }

  // 3. 150-Question Map Overview Modal
    // =========================================================================
  // APP MODES: MASALA REJIMI (CHALLENGE) VS ODDIY REJIM (PLAYGROUND SANDBOX)
  // =========================================================================
  let currentAppMode = "challenge"; // "challenge" | "playground"
  const PLAYGROUND_STORAGE_KEY = "WIUT_OOP_W5_PLAYGROUND";
  const DEFAULT_PLAYGROUND_CODE = `// ============================================================================
// ERKIN JAVA SANDBOX (ODDIY REJIM) — OPENJDK 21
// ============================================================================
class Main {
    public static void main(String[] args) {
        System.out.println("Salom, Java Sandbox!");
        
        // Istalgan kod yozib, 'Ishga tushirish (OpenJDK 21)' tugmasini bosing!
    }
}`;

  function switchAppMode(newMode) {
    if (currentAppMode === newMode) return;
    const codeArea = document.getElementById("codeEditor");

    if (currentAppMode === "playground" && codeArea) {
      localStorage.setItem(PLAYGROUND_STORAGE_KEY, codeArea.value);
    }

    currentAppMode = newMode;

    const btnChal = document.getElementById("btnModeChallenge");
    const btnPlay = document.getElementById("btnModePlayground");
    const secTabs = document.getElementById("sectorTabsBar");
    const qStrip = document.getElementById("qStrip");
    const paneTabs = document.querySelector(".pane-tabs");
    const contentProb = document.getElementById("contentProblem");
    const contentUML = document.getElementById("contentUML");
    const contentPlay = document.getElementById("contentPlayground");
    const btnSol = document.getElementById("btnToolbarSolution");
    const btnNext = document.getElementById("btnNextChallenge");

    if (newMode === "playground") {
      if (btnChal) btnChal.classList.remove("active");
      if (btnPlay) btnPlay.classList.add("active");
      if (secTabs) secTabs.style.display = "none";
      if (qStrip) qStrip.style.display = "none";
      if (paneTabs) paneTabs.style.display = "none";
      if (contentProb) contentProb.style.display = "none";
      if (contentUML) contentUML.style.display = "none";
      if (contentPlay) contentPlay.style.display = "block";
      if (btnSol) btnSol.style.display = "none";
      if (btnNext) btnNext.style.display = "none";

      const savedCode = localStorage.getItem(PLAYGROUND_STORAGE_KEY);
      if (codeArea) {
        codeArea.value = (savedCode !== null) ? savedCode : DEFAULT_PLAYGROUND_CODE;
        codeArea.dispatchEvent(new Event("input", { bubbles: true }));
      }
    } else {
      if (btnPlay) btnPlay.classList.remove("active");
      if (btnChal) btnChal.classList.add("active");
      if (secTabs) secTabs.style.display = "flex";
      if (qStrip) qStrip.style.display = "flex";
      if (paneTabs) paneTabs.style.display = "flex";
      if (contentPlay) contentPlay.style.display = "none";
      if (contentProb) contentProb.style.display = "block";
      if (btnSol) btnSol.style.display = "inline-flex";
      if (btnNext) btnNext.style.display = "inline-flex";

      renderHUD();
    renderChallenge();
    if (window.LeaderboardEngine) {
      window.LeaderboardEngine.init(5);
      window.LeaderboardEngine.setLanguage(currentLang);
    }
    }
  }

  function initModeSwitcher() {
    const btnChal = document.getElementById("btnModeChallenge");
    const btnPlay = document.getElementById("btnModePlayground");
    if (btnChal) btnChal.addEventListener("click", () => switchAppMode("challenge"));
    if (btnPlay) btnPlay.addEventListener("click", () => switchAppMode("playground"));

    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.addEventListener("input", () => {
        if (currentAppMode === "playground") {
          localStorage.setItem(PLAYGROUND_STORAGE_KEY, codeArea.value);
        }
      });
    }
  }

  function initSectorTabs() {
    document.querySelectorAll(".sector-tab-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".sector-tab-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentSector = pill.getAttribute("data-range") || "all";
        renderHUD();
      });
    });

    const btnMap = document.getElementById("btnOpenMapOverview");
    if (btnMap) {
      btnMap.addEventListener("click", openMapOverview);
    }
  }

  function openMapOverview() {
    let modal = document.getElementById("oopMapOverviewModal");
    if (!modal) {
      modal = document.createElement("div");
      modal.id = "oopMapOverviewModal";
      modal.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); backdrop-filter:blur(8px); z-index:99999; display:flex; align-items:center; justify-content:center; padding:16px;";
      modal.innerHTML = `
        <div style="background:#120f26; border:1px solid #7c3aed; border-radius:14px; max-width:840px; width:100%; max-height:86vh; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 20px 50px rgba(0,0,0,0.8);">
          <div style="padding:14px 20px; border-bottom:1px solid #221c45; display:flex; align-items:center; justify-content:space-between; background:#181432;">
            <div style="font-weight:700; color:#fff; font-size:15px; display:flex; align-items:center; gap:8px;">
              <span>🗺️</span> <span>5-Modul: 150 ta Topshiriqlar Xaritasi</span>
            </div>
            <button id="btnCloseMapModal" style="background:transparent; border:none; color:#c084fc; font-size:22px; cursor:pointer;">&times;</button>
          </div>
          <div style="padding:10px 18px; border-bottom:1px solid #221c45;">
            <input type="text" id="mapSearchInput" placeholder="Topshiriq nomi yoki raqami bo'yicha qidiring..." style="width:100%; padding:8px 14px; background:#0b0917; border:1px solid #362d66; border-radius:8px; color:#fff; font-size:13px; outline:none;">
          </div>
          <div id="mapItemsList" style="padding:14px 18px; overflow-y:auto; flex:1; display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:8px;"></div>
        </div>
      `;
      document.body.appendChild(modal);

      modal.querySelector("#btnCloseMapModal").addEventListener("click", () => {
        modal.style.display = "none";
      });
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
      });

      modal.querySelector("#mapSearchInput").addEventListener("input", (e) => {
        renderMapItems(e.target.value);
      });
    }

    renderMapItems("");
    modal.style.display = "flex";
  }

  function renderMapItems(filter) {
    const list = document.getElementById("mapItemsList");
    if (!list) return;
    list.innerHTML = "";

    const query = (filter || "").toLowerCase().trim();
    CHALLENGES.forEach((ch, idx) => {
      const title = ch.title[currentLang];
      if (query && !title.toLowerCase().includes(query) && !String(ch.id).includes(query)) return;

      const isSolved = solvedQuestions.has(ch.id);
      const isCur = idx === currentQIndex;

      const item = document.createElement("div");
      item.style.cssText = `padding:10px 12px; background:${isCur ? '#7c3aed' : (isSolved ? '#12261f' : '#181430')}; border:1px solid ${isCur ? '#c084fc' : (isSolved ? '#34d399' : '#2b2352')}; border-radius:8px; cursor:pointer; transition:all 0.15s; font-size:12px;`;
      item.innerHTML = `
        <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:4px;">
          <span style="font-weight:700; color:${isCur ? '#fff' : (isSolved ? '#34d399' : '#c084fc')}; font-family:'JetBrains Mono', monospace;">#${ch.id}</span>
          <span style="font-size:10px; color:#94a3b8;">${ch.sector || ""}</span>
        </div>
        <div style="color:${isCur ? '#fff' : '#f8fafc'}; font-weight:600; line-height:1.3; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${title}</div>
      `;

      item.addEventListener("click", () => {
        switchChallenge(idx);
        document.getElementById("oopMapOverviewModal").style.display = "none";
      });

      list.appendChild(item);
    });
  }

  // 4. Code Execution & Testing with Line-by-Line Diagnostics
    // 4. Code Execution & Testing with Real OpenJDK Engine & Line-by-Line Diagnostics
  async function handleInstantTest() {
    const ch = CHALLENGES[currentQIndex];
    const codeArea = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!ch || !codeArea || !consoleOut) return;

    const isEn = currentLang === "en";
    consoleOut.className = "console-output";
    consoleOut.textContent = isEn
      ? "⏳ Verifying code requirements and compiling on OpenJDK JVM..."
      : "⏳ Barcha topshiriq detallari tekshirilmoqda va OpenJDK JVM da ishga tushirilmoqda...";

    // 1. Static OOP and syntax verification
    const validation = window.JavaRunner.validateOOPRules(codeArea.value, ch.requirements, ch);

    // Fast pre-check: If obvious syntax errors exist, give instant 0ms feedback!
    if (validation.syntaxErrors && validation.syntaxErrors.length > 0) {
      consoleOut.className = "console-output error";
      let report = "==================================================\n";
      report += isEn ? "❌ SYNTAX ERRORS DETECTED (PROFESSOR ADA)\n" : "❌ SINTAKTIK XATOLIKLAR ANIQLANDI (PROFESSOR ADA)\n";
      report += "==================================================\n\n";
      validation.syntaxErrors.forEach(err => {
        const lineStr = isEn ? `[Line ${err.line}]` : `[${err.line}-Qator]`;
        report += "📍 " + lineStr + ": " + err.message + "\n";
        if (err.snippet) report += (isEn ? "   Your code: " : "   Kodingiz: ") + err.snippet + "\n";
        if (err.fix) report += (isEn ? "   💡 Tip: " : "   💡 Tavsiya: ") + err.fix + "\n\n";
      });
      report += isEn
        ? "💡 Fix the syntax errors above and test again!"
        : "💡 Yuqoridagi sintaktik xatolarni tuzatib, qayta tekshiring!";
      consoleOut.textContent = report;
      updateUML();
      return;
    }

    // 2. Real OpenJDK execution (Dual-Engine: Fast Judge0 JDK 17 + Wandbox OpenJDK 21)
    const runResult = await window.JavaRunner.runOnOpenJDK21(codeArea.value);

    // 3. Strict verification of execution output
    const hasOutput = runResult.success && runResult.output && runResult.output.trim().length > 0;
    if (runResult.success && !hasOutput) {
      validation.passed = false;
      validation.semanticIssues = validation.semanticIssues || [];
      validation.semanticIssues.push({
        line: null,
        title: isEn ? "Program Produced No Console Output" : "Konsolga hech qanday natija chop etilmadi",
        message: isEn
          ? "The program compiled successfully, but produced no printed output. Use System.out.println() to print results!"
          : "Dastur muvaffaqiyatli kompilyatsiya qilindi, lekin konsolga hech narsa chop etilmadi. Masala oxiriga yetishi uchun hisoblangan natijalar 'System.out.println(...)' orqali ekranga chiqarilishi shart!",
        fix: isEn ? "Add System.out.println(...); to display results." : "Natijani chiqarish uchun 'System.out.println(...);' qo'shing."
      });
    }

    let report = "";

    // A. Always show actual program output (STDOUT) if program ran
    if (runResult.success) {
      report += "==================================================\n";
      report += isEn ? "☕ YOUR CONSOLE OUTPUT (OPENJDK STDOUT)\n" : "☕ SIZNING KONSOL CHIQQAN NATIJANGIZ (OPENJDK STDOUT)\n";
      report += "==================================================\n\n";
      if (runResult.output) {
        report += runResult.output + "\n\n";
      } else {
        report += (isEn
          ? "(Program finished with no printed output. Use System.out.println() to print results.)\n\n"
          : "(Dastur yakunlandi, lekin konsolga hech narsa chop etilmadi. Natijani ko'rish uchun System.out.println() dan foydalaning.)\n\n");
      }

      if (ch.expectedOutput) {
        report += "--------------------------------------------------\n";
        report += isEn ? "📋 EXPECTED REFERENCE OUTPUT (SAMPLE):\n" : "📋 KUTILGAN NAMUNAVIY NATIJA:\n";
        report += "--------------------------------------------------\n\n";
        report += ch.expectedOutput + "\n\n";
      }
    }

    // B. Check both OOP rules AND OpenJDK compilation AND non-empty output
    if (validation.passed && runResult.success && hasOutput) {
      consoleOut.className = "console-output success";
      solvedQuestions.add(ch.id);
      saveSolved();
      renderHUD();

      report += "==================================================\n";
      report += isEn ? "🎉 VERIFICATION SUCCESSFUL (PROFESSOR ADA)\n" : "🎉 TEKSHIRUV: BARCHA TALABLAR TO'LIQ BAJARILDI!\n";
      report += "==================================================\n\n";
      report += isEn
        ? "✔️ All OOP Conditions & Deep Requirements Fully Satisfied\n" +
          "✔️ OpenJDK Java Compiler: 0 Errors Detected\n" +
          "✔️ Valid Execution Output Verified on Console\n" +
          "⭐ +50 Points Added to Rating Score!\n"
        : "✔️ Barcha OOP shartlari va nozik detallari to'liq bajarildi\n" +
          "✔️ OpenJDK Java Kompilyatori: 0 ta xatolik aniqlandi\n" +
          "✔️ Konsolga talab qilingan natija to'liq chop etildi\n" +
          "⭐ Reytingga +50 Ball qo'shildi!\n";

      if (validation.passedItems && validation.passedItems.length > 0) {
        report += isEn ? "\n✔️ Verified Components:\n" : "\n✔️ Tasdiqlangan qismlar:\n";
        validation.passedItems.forEach(item => {
          report += "   • " + item.name + " (" + item.detail + ")\n";
        });
      }
    } else {
      consoleOut.className = "console-output error";

      // If OpenJDK failed to compile/run
      if (!runResult.success) {
        report += "==================================================\n";
        report += isEn ? "❌ OPENJDK COMPILER / RUNTIME ERROR\n" : "❌ OPENJDK KOMPILYATSIYA / BAJARILISH XATOLIGI\n";
        report += "==================================================\n\n";

        if (runResult.diagnostics && runResult.diagnostics.length > 0) {
          report += isEn ? "📍 PINPOINTED ISSUES:\n" : "📍 ANIQLANGAN QATORLAR:\n";
          runResult.diagnostics.forEach(d => {
            const lineStr = d.line ? (isEn ? `[Line ${d.line}]` : `[${d.line}-Qator]`) : (isEn ? "[General]" : "[Umumiy]");
            const msg = isEn ? (d.original || d.uzbek) : d.uzbek;
            report += "• " + lineStr + ": " + msg + "\n  💡 " + (isEn ? "Tip: " : "Tavsiya: ") + d.tip + "\n\n";
          });
        }

        if (runResult.errors) {
          report += isEn ? "--- Full Javac / JVM Error Output ---\n" : "--- To'liq Javac / JVM Xatolik Xabari ---\n";
          report += runResult.errors + "\n\n";
        }
      }

      // If OOP requirements or semantic verification failed
      if (!validation.passed) {
        report += "==================================================\n";
        report += isEn ? "❌ CHALLENGE NOT FULLY COMPLETED (PROFESSOR ADA)\n" : "❌ MASALA TO'LIQ YAKUNLANMAGAN (PROFESSOR ADA TEKSHIRUVI)\n";
        report += "==================================================\n\n";

        if (validation.syntaxErrors && validation.syntaxErrors.length > 0) {
          validation.syntaxErrors.forEach(err => {
            const lineStr = isEn ? `[Line ${err.line}]` : `[${err.line}-Qator]`;
            report += "📍 " + lineStr + ": " + err.message + "\n";
            if (err.snippet) report += (isEn ? "   Your code: " : "   Kodingiz: ") + err.snippet + "\n";
            if (err.fix) report += (isEn ? "   💡 Tip: " : "   💡 Tavsiya: ") + err.fix + "\n\n";
          });
        }

        if (validation.semanticIssues && validation.semanticIssues.length > 0) {
          validation.semanticIssues.forEach(iss => {
            const linePrefix = iss.line ? (isEn ? "[Line " + iss.line + "]: " : "[" + iss.line + "-Qator]: ") : "";
            report += "📍 " + linePrefix + (iss.message || iss.title) + "\n";
            if (iss.fix) report += (isEn ? "   💡 Tip: " : "   💡 Tavsiya: ") + iss.fix + "\n\n";
          });
        }
      }

      report += isEn
        ? "💡 Professor Ada Advice: Solve all required steps to completion and test again!"
        : "💡 Professor Ada Maslahati: Masalani oxirigacha to'liq yakunlang (ob'yekt yaratish, qiymat berish, hisoblash va natijani ekranga chiqarish) hamda qayta tekshiring!";
    }

    consoleOut.textContent = report;
    updateUML();
  }

  async function handleCloudRun() {
    const codeArea = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!codeArea || !consoleOut) return;

    const isEn = currentLang === "en";
    consoleOut.className = "console-output";
    consoleOut.textContent = isEn ? "⏳ Compiling and executing on OpenJDK JVM..." : "⏳ OpenJDK JVM da kompilyatsiya va ijro etilmoqda...";

    const res = await window.JavaRunner.runOnOpenJDK21(codeArea.value);

    if (currentAppMode === "challenge") {
      const ch = CHALLENGES[currentQIndex];
      const validation = window.JavaRunner.validateOOPRules(codeArea.value, ch ? ch.requirements : {}, ch);
      const hasOutput = res.success && res.output && res.output.trim().length > 0;

      if (res.success && validation.passed && hasOutput) {
        consoleOut.className = "console-output success";
        solvedQuestions.add(ch.id);
        saveSolved();
        renderHUD();

        let successOut = "==================================================\n" +
          (isEn ? "☕ OPENJDK EXECUTION OUTPUT (STDOUT)\n" : "☕ OPENJDK DASTUR CHIQISHI (STDOUT)\n") +
          "==================================================\n\n" +
          res.output + "\n\n";

        if (ch && ch.expectedOutput) {
          successOut += "--------------------------------------------------\n" +
            (isEn ? "📋 EXPECTED REFERENCE OUTPUT (SAMPLE):\n" : "📋 KUTILGAN NAMUNAVIY NATIJA:\n") +
            "--------------------------------------------------\n\n" +
            ch.expectedOutput + "\n\n";
        }

        successOut += "==================================================\n" +
          (isEn ? "🎉 EXCELLENT! ALL REQUIREMENTS MET SUCCESSFULLY!\n" : "🎉 A'LO! BARCHA TALABLAR TO'LIQ BAJARILDI!\n") +
          (isEn ? "⭐ +50 Points Added to Rating Score!" : "⭐ Reytingga +50 Ball qo'shildi!");

        consoleOut.textContent = successOut;
        return;
      }
    }

    if (res.success) {
      consoleOut.className = "console-output success";
      consoleOut.textContent = "==================================================\n" +
        (isEn ? "☕ OPENJDK EXECUTION OUTPUT (STDOUT)\n" : "☕ OPENJDK DASTUR CHIQISHI (STDOUT)\n") +
        "==================================================\n\n" +
        (res.output || (isEn ? "(Program completed with no output. Use System.out.println() to print results.)" : "(Dastur muvaffaqiyatli yakunlandi, lekin konsolga hech narsa chop etilmadi. System.out.println orqali natija chiqaring.)")) +
        (isEn ? "\n\n✅ Code successfully compiled and executed!" : "\n\n✅ Kod muvaffaqiyatli kompilyatsiya qilindi va bajarildi!");
    } else {
      consoleOut.className = "console-output error";
      let report = "==================================================\n";
      report += isEn ? "❌ COMPILER / RUNTIME ERROR (OPENJDK)\n" : "❌ KOMPILYATOR / JVM XATOLIGI (OPENJDK)\n";
      report += "==================================================\n\n";

      if (res.diagnostics && res.diagnostics.length > 0) {
        report += isEn ? "📍 PINPOINTED LINES:\n" : "📍 ANIQLANGAN QATORLAR:\n";
        res.diagnostics.forEach(d => {
          const lineStr = d.line ? (isEn ? `[Line ${d.line}]` : `[${d.line}-Qator]`) : (isEn ? "[General]" : "[Umumiy]");
          const msg = isEn ? (d.original || d.uzbek) : d.uzbek;
          report += "• " + lineStr + ": " + msg + "\n  💡 " + (isEn ? "Tip: " : "Tavsiya: ") + d.tip + "\n\n";
        });
      }

      report += res.errors || (isEn ? "Unknown error" : "Noma'lum xatolik");
      consoleOut.textContent = report;
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    loadSolved();
    initSectorTabs();
    initModeSwitcher();
    renderHUD();
    renderChallenge();
    if (window.LeaderboardEngine) {
      window.LeaderboardEngine.init(5);
      window.LeaderboardEngine.setLanguage(currentLang);
    }

    // Mobile Segmented Switcher Handlers
    const btnMobProb = document.getElementById("btnTabMobileProblem");
    const btnMobEdit = document.getElementById("btnTabMobileEditor");
    const workspace = document.getElementById("ideWorkspace") || document.querySelector(".ide-workspace");

    if (btnMobProb && btnMobEdit && workspace) {
      btnMobProb.addEventListener("click", () => {
        btnMobProb.classList.add("active");
        btnMobEdit.classList.remove("active");
        workspace.classList.add("mobile-show-problem");
        workspace.classList.remove("mobile-show-editor");
      });

      btnMobEdit.addEventListener("click", () => {
        btnMobEdit.classList.add("active");
        btnMobProb.classList.remove("active");
        workspace.classList.add("mobile-show-editor");
        workspace.classList.remove("mobile-show-problem");
      });
    }

    // Mobile Java Quick-Access Keys Handlers
    document.querySelectorAll(".quick-key-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const insertText = btn.getAttribute("data-insert");
        const codeArea = document.getElementById("codeEditor");
        if (!insertText || !codeArea) return;

        const start = codeArea.selectionStart;
        const end = codeArea.selectionEnd;
        const val = codeArea.value;

        codeArea.value = val.substring(0, start) + insertText + val.substring(end);

        let cursorOffset = insertText.length;
        if (insertText === "{}" || insertText === "()" || insertText === "\"\"" || insertText === "[]") {
          cursorOffset = 1;
        } else if (insertText === "System.out.println();") {
          cursorOffset = 19;
        }

        codeArea.selectionStart = codeArea.selectionEnd = start + cursorOffset;
        codeArea.focus();
        updateUML();
      });
    });

    // Tab buttons in left pane
    const tabProblem = document.getElementById("tabProblem");
    const tabUML = document.getElementById("tabUML");
    const contentProblem = document.getElementById("contentProblem");
    const contentUML = document.getElementById("contentUML");

    if (tabProblem && tabUML) {
      tabProblem.addEventListener("click", () => {
        tabProblem.classList.add("active");
        tabUML.classList.remove("active");
        if (contentProblem) contentProblem.style.display = "block";
        if (contentUML) contentUML.style.display = "none";
      });

      tabUML.addEventListener("click", () => {
        tabUML.classList.add("active");
        tabProblem.classList.remove("active");
        if (contentProblem) contentProblem.style.display = "none";
        if (contentUML) contentUML.style.display = "block";
        updateUML();
        setTimeout(() => {
          if (window.UMLRenderer && window.UMLRenderer.fitToView) {
            window.UMLRenderer.fitToView("umlContainer");
          }
        }, 60);
      });
    }

    // Action buttons
    const btnTest = document.getElementById("btnInstantTest");
    const btnRun = document.getElementById("btnCloudRun");
    const btnReset = document.getElementById("btnResetCode");
    const btnNext = document.getElementById("btnNextChallenge");
    const btnToggleSol = document.getElementById("btnToggleSolution");
    const elToggleHint = document.getElementById("solutionToggleHint");

    const edArea = document.getElementById("codeEditor");
    if (edArea) edArea.addEventListener("input", saveCurrentCode);
    if (btnTest) btnTest.addEventListener("click", handleInstantTest);
    if (btnRun) btnRun.addEventListener("click", handleCloudRun);
    if (btnReset) btnReset.addEventListener("click", () => {
      const ch = CHALLENGES[currentQIndex];
      const codeArea = document.getElementById("codeEditor");
      if (ch && codeArea) {
        codeArea.value = ch.starterCode || "";
        try {
          localStorage.removeItem(CODE_STORAGE_PREFIX + ch.id);
        } catch (e) {}
        updateUML();
        if (window.JavaEditorEnhancer) {
          window.JavaEditorEnhancer.updateHighlighting();
        }
      }
    });

    if (btnNext) btnNext.addEventListener("click", () => {
      if (currentQIndex < CHALLENGES.length - 1) {
        switchChallenge(currentQIndex + 1);
      }
    });

    const btnToolbarSol = document.getElementById("btnToolbarSolution");
    if (btnToolbarSol) {
      btnToolbarSol.addEventListener("click", () => {
        const ch = CHALLENGES[currentQIndex];
        if (!ch) return;

        // 1. Instant Solution Modal Popup (works on any tab/view!)
        if (window.SolutionRenderer && typeof window.SolutionRenderer.openModal === "function") {
          window.SolutionRenderer.openModal(ch, currentLang);
        }

        // 2. Switch to Problem tab & expand inline solution card
        const tabProblem = document.getElementById("tabProblem");
        if (tabProblem) tabProblem.click();

        const card = document.getElementById("solutionContentCard");
        if (card) {
          card.style.display = "block";
          if (elToggleHint) {
            elToggleHint.textContent = (currentLang === "en") ? "[Close ▴]" : "[Yopish ▴]";
          }
        }
      });
    }

    if (btnToggleSol) btnToggleSol.addEventListener("click", () => {
      const card = document.getElementById("solutionContentCard");
      if (card) {
        const isHidden = card.style.display === "none";
        card.style.display = isHidden ? "block" : "none";
        if (elToggleHint) {
          const isEn = currentLang === "en";
        elToggleHint.textContent = isHidden ? (isEn ? "[Close ▴]" : "[Yopish ▴]") : (isEn ? "[View ▾]" : "[Ko'rish ▾]");
        }
      }
    });

    // Real-time UML updates on keystroke
    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.addEventListener("input", () => {
        updateUML();
      });

      // Note: Advanced Indentation, Tab, Enter & Autocomplete handled by JavaEditorEnhancer
    }

    // Language switch buttons
    const btnUz = document.getElementById("btnLangUz");
    const btnEn = document.getElementById("btnLangEn");
    if (btnUz && btnEn) {
      btnUz.addEventListener("click", () => {
        if (window.OOP_I18N) {
          window.OOP_I18N.setLang("uz");
        } else {
          currentLang = "uz";
          btnUz.classList.add("active");
          btnEn.classList.remove("active");
          renderHUD();
    renderChallenge();
    if (window.LeaderboardEngine) {
      window.LeaderboardEngine.init(5);
      window.LeaderboardEngine.setLanguage(currentLang);
    }
        }
      });
      btnEn.addEventListener("click", () => {
        if (window.OOP_I18N) {
          window.OOP_I18N.setLang("en");
        } else {
          currentLang = "en";
          btnEn.classList.add("active");
          btnUz.classList.remove("active");
          renderHUD();
    renderChallenge();
    if (window.LeaderboardEngine) {
      window.LeaderboardEngine.init(5);
      window.LeaderboardEngine.setLanguage(currentLang);
    }
        }
      });
    }
  });

})();
