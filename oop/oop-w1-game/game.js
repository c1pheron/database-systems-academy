// ============================================================================
// OOP ACADEMY — WEEK 1 GAME LOGIC (150 PROGRESSIVE CHALLENGES)
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W1_PROGRESS";
  const CODE_STORAGE_PREFIX = "WIUT_OOP_W1_CODE_";
  const LAST_Q_KEY = "WIUT_OOP_W1_LAST_Q";
  const PLAYGROUND_STORAGE_KEY = "WIUT_OOP_W1_PLAYGROUND";
  let currentLang = (window.OOP_I18N ? window.OOP_I18N.getLang() : (localStorage.getItem("OOP_LANG") || "uz"));

  window.onOopLanguageChange = function (lang) {
    currentLang = lang;
    renderHUD();
    renderChallenge();
    if (window.JavaEditorEnhancer) {
      window.JavaEditorEnhancer.init("codeEditor", CHALLENGES[currentQIndex]);
    }
  };
  let currentQIndex = 0;
  let currentSector = "1-10";
  let solvedQuestions = new Set();

  // Load 150 challenges from dedicated dataset
  const CHALLENGES = (window.OOP_CHALLENGES_W1 && window.OOP_CHALLENGES_W1.length > 0)
    ? window.OOP_CHALLENGES_W1
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
      elPoints.textContent = solvedQuestions.size * 50 + (isEn ? " Pts" : " Ball");
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
    if (elBadge) elBadge.textContent = isEn ? ("Module 1 • Challenge " + ch.id) : ("1-Modul • " + ch.id + "-Topshiriq");
    if (elTitle) elTitle.textContent = (ch.title && ch.title[currentLang]) ? ch.title[currentLang] : (ch.title?.uz || "");
    if (elScenario) elScenario.textContent = (ch.scenario && ch.scenario[currentLang]) ? ch.scenario[currentLang] : (ch.scenario?.uz || "");

    // Render Sample Input Data (Boshlang'ich Qiymatlar)
    const elSampleDataBox = document.getElementById("sampleDataBox");
    const elSampleDataList = document.getElementById("sampleDataList");
    const elSampleDataTitle = document.getElementById("sampleDataTitle");
    if (elSampleDataTitle) {
      elSampleDataTitle.textContent = isEn ? "📥 Sample Input Values (Test Data):" : "📥 Namunaviy Qiymatlar (Test Ma'lumotlari):";
    }

    if (ch.sampleData && ch.sampleData.length > 0) {
      if (elSampleDataList) {
        elSampleDataList.innerHTML = ch.sampleData.map(d => `<li><code>${d}</code></li>`).join("");
      }
      if (elSampleDataBox) elSampleDataBox.style.display = "block";
    } else {
      if (elSampleDataBox) elSampleDataBox.style.display = "none";
    }

    // Render Method Specifications & Concrete Examples (Metodlar Tavsifi va Namunaviy Ishlatilishi)
    const elMethodBox = document.getElementById("methodSpecsBox");
    const elMethodList = document.getElementById("methodSpecsList");
    const elMethodTitle = document.getElementById("methodSpecsTitle");

    if (elMethodTitle) {
      elMethodTitle.textContent = isEn
        ? "🛠 Required Method Specifications & Examples:"
        : "🛠 Talab qilingan Metodlar va Namunaviy Ishlatilishi:";
    }

    const methodDetails = (ch.requirements && ch.requirements.methodDetails) || ch.methodDetails;
    if (methodDetails && methodDetails.length > 0) {
      if (elMethodList) {
        elMethodList.innerHTML = methodDetails.map(m => `
          <div class="method-spec-card">
            <div class="method-sig-header">
              <span class="method-sig-badge"><code>${m.signature}</code></span>
            </div>
            <div class="method-spec-row">
              <span class="spec-key">${isEn ? "📥 Accepts (Params):" : "📥 Qabul qiladi (Parametr):"}</span>
              <span class="spec-val">${isEn ? (m.paramsEn || m.params) : m.params}</span>
            </div>
            <div class="method-spec-row">
              <span class="spec-key">${isEn ? "📤 Returns (Output):" : "📤 Qaytaradi (Natija):"}</span>
              <span class="spec-val"><code>${isEn ? (m.returnsEn || m.returns) : m.returns}</code></span>
            </div>
            <div class="method-spec-row">
              <span class="spec-key">${isEn ? "⚙️ Logic / Condition:" : "⚙️ Mantiq / Shart:"}</span>
              <span class="spec-val">${isEn ? (m.logicEn || m.logic) : m.logic}</span>
            </div>
            <div class="spec-example">
              <strong>${isEn ? "💡 Code Example:" : "💡 Namunaviy Chaqiruv:"}</strong> <code>${m.example}</code>
            </div>
          </div>
        `).join("");
      }
      if (elMethodBox) elMethodBox.style.display = "block";
    } else {
      if (elMethodBox) elMethodBox.style.display = "none";
    }

    // Render Expected Output Card (Kutilayotgan Konsol Natijasi)
    const elExpCard = document.getElementById("expectedOutputCard");
    const elExpContent = document.getElementById("expectedOutputContent");
    const elExpTitle = document.getElementById("expectedOutputTitle");
    if (elExpTitle) {
      elExpTitle.textContent = isEn ? "💻 Expected Console Output (Terminal):" : "💻 Kutilayotgan Konsol Natijasi (Terminal Output):";
    }

    if (ch.expectedOutput) {
      if (elExpContent) elExpContent.textContent = ch.expectedOutput;
      if (elExpCard) elExpCard.style.display = "block";
    } else {
      if (elExpCard) elExpCard.style.display = "none";
    }

    // Render Rich Solution View via SolutionRenderer
    if (window.SolutionRenderer) {
      window.SolutionRenderer.render(ch, "solutionContentCard", currentLang);
    }
    if (elSolutionCard) elSolutionCard.style.display = "none";
    if (elToggleHint) elToggleHint.textContent = isEn ? "[View ▾]" : "[Ko'rish ▾]";

    // Update requirements list
    const reqList = document.getElementById("taskReqList");
    if (reqList) {
      let reqHtml = "";
      if (ch.requirements.classes) {
        reqHtml += isEn
          ? "<li><strong>Classes:</strong> Declare class <code>" + ch.requirements.classes.join(", ") + "</code>.</li>"
          : "<li><strong>Klasslar:</strong> <code>" + ch.requirements.classes.join(", ") + "</code> sinfi e'lon qilinishi shart.</li>";
      }
      if (ch.requirements.fields) {
        const fieldStr = ch.requirements.fields.map(f => "<code>" + f.type + " " + f.name + "</code>").join(", ");
        reqHtml += isEn
          ? "<li><strong>Fields:</strong> Define <code>" + fieldStr + "</code> with appropriate types and assign values in main.</li>"
          : "<li><strong>Maydonlar:</strong> " + fieldStr + " maydonlari to'g'ri turda e'lon qilinishi va qiymat berilishi shart.</li>";
      }
      if (ch.requirements.privateFields) {
        reqHtml += isEn
          ? "<li><strong>Encapsulation:</strong> Fields <code>" + ch.requirements.privateFields.join(", ") + "</code> must be <code>private</code>.</li>"
          : "<li><strong>Inkapsulyatsiya:</strong> <code>" + ch.requirements.privateFields.join(", ") + "</code> maydonlari <code>private</code> bo'lsin.</li>";
      }
      if (methodDetails && methodDetails.length > 0) {
        methodDetails.forEach(m => {
          reqHtml += isEn
            ? "<li><strong>Method:</strong> <code>" + m.signature + "</code> — " + (m.returnsEn || m.returns) + ". Example: <code>" + m.example + "</code></li>"
            : "<li><strong>Metod:</strong> <code>" + m.signature + "</code> — " + m.returns + ". Misol: <code>" + m.example + "</code></li>";
        });
      } else if (ch.requirements.methods && ch.requirements.methods.length > 0) {
        reqHtml += isEn
          ? "<li><strong>Methods:</strong> Implement and call <code>" + ch.requirements.methods.join("(), ") + "()</code>.</li>"
          : "<li><strong>Metodlar:</strong> <code>" + ch.requirements.methods.join("(), ") + "()</code> metodi yaratilsin va chaqirilsin.</li>";
      }
      if (ch.requirements.constructors) {
        reqHtml += isEn
          ? "<li><strong>Constructor:</strong> Create constructor for <code>" + ch.requirements.constructors.join(", ") + "</code>.</li>"
          : "<li><strong>Konstruktor:</strong> <code>" + ch.requirements.constructors.join(", ") + "</code> klassi uchun konstruktor tuzilsin.</li>";
      }
      if (ch.requirements.keywords) {
        reqHtml += isEn
          ? "<li><strong>Keywords:</strong> Must use keyword(s) <code>" + ch.requirements.keywords.join(", ") + "</code>.</li>"
          : "<li><strong>Kalit so'zlar:</strong> <code>" + ch.requirements.keywords.join(", ") + "</code> qo'llanilishi kerak.</li>";
      }
      const domainCls = (ch.requirements.classes || []).filter(c => c !== "Main");
      if (domainCls.length > 0 && ch.solution && ch.solution.includes("new ")) {
        reqHtml += isEn
          ? "<li><strong>Object Creation:</strong> Instantiate <code>new " + domainCls[0] + "()</code> inside <code>main</code>.</li>"
          : "<li><strong>Obyekt yaratish:</strong> <code>main</code> metodida <code>new " + domainCls[0] + "()</code> orqali obyekt yaratilib, maydonlariga qiymat yuklansin.</li>";
      }
      if (ch.solution && ch.solution.includes("System.out.print")) {
        reqHtml += isEn
          ? "<li><strong>Console Output:</strong> Complete all calculations and print results using <code>System.out.println()</code>.</li>"
          : "<li><strong>Natijani chiqarish:</strong> Shartdagi amallarni to'liq yakunlab, natijalarni <code>System.out.println()</code> orqali konsolga chop eting.</li>";
      }
      reqHtml += isEn
        ? "<li>Ensure complete implementation with zero syntax errors and Clean Code conventions.</li>"
        : "<li>Masalani oxirigacha to'liq yeching, sintaksis xatolarisiz va Clean Code qoidalariga mos yozing.</li>";
      reqList.innerHTML = reqHtml;
    }

    // Set code editor (with persistent draft restoration)
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
      window.JavaEditorEnhancer.updateHighlighting();
      window.JavaEditorEnhancer.syncScroll();
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
    if (idx < 0 || idx >= CHALLENGES.length) return;
    saveCurrentCode();
    currentQIndex = idx;
    try {
      localStorage.setItem(LAST_Q_KEY, String(idx));
    } catch (e) {}

    // Auto-update sector filter to match current question (1-10, 11-20, 21-30, 31-40, 41-50)
    const ch = CHALLENGES[idx];
    const targetSector = (ch.id <= 10) ? "1-10" : (ch.id <= 20) ? "11-20" : (ch.id <= 30) ? "21-30" : (ch.id <= 40) ? "31-40" : "41-50";
    if (currentSector !== targetSector) {
      currentSector = targetSector;
      document.querySelectorAll(".sector-tab-pill").forEach(p => {
        if (p.getAttribute("data-range") === targetSector) p.classList.add("active");
        else p.classList.remove("active");
      });
    }

    renderHUD();
    renderChallenge();
  }

  // =========================================================================
  // APP MODES: MASALA REJIMI (CHALLENGE) VS ODDIY REJIM (PLAYGROUND SANDBOX)
  // =========================================================================
  let currentAppMode = "challenge"; // "challenge" | "playground"
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
    saveCurrentCode();

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
        saveCurrentCode();
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
              <span>🗺️</span> <span>1-Modul: Topshiriqlar Xaritasi (${CHALLENGES.length})</span>
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
  async function handleInstantTest() {
    const ch = CHALLENGES[currentQIndex];
    const codeArea = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!ch || !codeArea || !consoleOut) return;

    const isEn = currentLang === "en";
    consoleOut.className = "console-output";
    consoleOut.textContent = isEn
      ? "⏳ Verifying full code requirements and executing on OpenJDK 21 JVM..."
      : "⏳ Barcha topshiriq detallari tekshirilmoqda va OpenJDK 21 JVM da ishga tushirilmoqda...";

    // 1. Static OOP and syntax verification (passes full challenge object)
    const validation = window.JavaRunner.validateOOPRules(codeArea.value, ch.requirements, ch);

    // 2. Real OpenJDK 21 execution
    const runResult = await window.JavaRunner.runOnOpenJDK21(codeArea.value);

    // 3. Strict verification of execution output
    const hasOutput = runResult.success && runResult.output && runResult.output.trim().length > 0;
    if (runResult.success && !hasOutput) {
      validation.passed = false;
      validation.semanticIssues.push({
        line: null,
        title: isEn ? "Program Produced No Console Output" : "Konsolga hech qanday natija chop etilmadi",
        message: isEn
          ? "The program completed with no printed output. The task requires results to be displayed using System.out.println()!"
          : "Dastur muvaffaqiyatli kompilyatsiya qilindi, lekin konsolga hech narsa chop etilmadi. Masala oxiriga yetishi uchun hisoblangan natijalar 'System.out.println(...)' orqali ekranga chiqarilishi shart!",
        fix: isEn ? "Add System.out.println(...); to display results." : "Natijani chiqarish uchun 'System.out.println(...);' qo'shing."
      });
    }

    let report = "";

    // A. Always show actual program output (STDOUT) if program ran
    if (runResult.success) {
      report += "==================================================\n";
      report += isEn ? "☕ YOUR CONSOLE OUTPUT (OPENJDK 21 STDOUT)\n" : "☕ SIZNING KONSOL CHIQQAN NATIJANGIZ (OPENJDK 21 STDOUT)\n";
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

    // B. Check both OOP rules AND OpenJDK 21 compilation AND non-empty output
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
          "✔️ OpenJDK 21 Java Compiler: 0 Errors Detected\n" +
          "✔️ Valid Execution Output Verified on Console\n" +
          "⭐ +50 Points Added to Rating Score!\n"
        : "✔️ Barcha OOP shartlari va nozik detallari to'liq bajarildi\n" +
          "✔️ OpenJDK 21 Java Kompilyatori: 0 ta xatolik aniqlandi\n" +
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

      // If OpenJDK 21 failed to compile/run
      if (!runResult.success) {
        report += "==================================================\n";
        report += isEn ? "❌ OPENJDK 21 COMPILER / RUNTIME ERROR\n" : "❌ OPENJDK 21 KOMPILYATSIYA / BAJARILISH XATOLIGI\n";
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

      // If OOP requirements or syntax linting failed or task incomplete
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
    consoleOut.textContent = isEn ? "⏳ Compiling and executing on OpenJDK 21 JVM..." : "⏳ OpenJDK 21 JVM da kompilyatsiya va ijro etilmoqda...";

    const res = await window.JavaRunner.runOnOpenJDK21(codeArea.value);

    // In Challenge Mode, also run strict verification so student cannot pass with incomplete code
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
          (isEn ? "☕ OPENJDK 21 EXECUTION OUTPUT (STDOUT)\n" : "☕ OPENJDK 21 DASTUR CHIQISHI (STDOUT)\n") +
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
      } else if (res.success) {
        consoleOut.className = "console-output error";
        let report = "==================================================\n";
        report += isEn ? "☕ YOUR CONSOLE OUTPUT (STDOUT)\n" : "☕ SIZNING KONSOL CHIQQAN NATIJANGIZ (STDOUT)\n";
        report += "==================================================\n\n";
        report += (res.output ? res.output + "\n\n" : (isEn ? "(No printed output. Use System.out.println() to print results.)\n\n" : "(Konsolga hech narsa chop etilmadi. System.out.println() orqali natija chiqaring.)\n\n"));

        if (ch && ch.expectedOutput) {
          report += "--------------------------------------------------\n";
          report += isEn ? "📋 EXPECTED REFERENCE OUTPUT (SAMPLE):\n" : "📋 KUTILGAN NAMUNAVIY NATIJA:\n";
          report += "--------------------------------------------------\n\n";
          report += ch.expectedOutput + "\n\n";
        }

        report += "==================================================\n";
        report += isEn ? "⚠️ CHALLENGE NOT YET COMPLETED TO FULL DEPTH\n" : "⚠️ MASALA HALI OXIRIGACHA YETMAGAN (PROFESSOR ADA TEKSHIRUVI)\n";
        report += "==================================================\n\n";

        if (!hasOutput) {
          report += isEn
            ? "📍 [Console Output]: Program produced no output. Print results using System.out.println()!\n\n"
            : "📍 [Konsol chiqishi]: Dastur ekranga hech narsa chop etmadi. Masala yechimi natijasini 'System.out.println()' orqali chiqaring!\n\n";
        }

        if (validation.syntaxErrors && validation.syntaxErrors.length > 0) {
          validation.syntaxErrors.forEach(err => {
            const lineStr = isEn ? `[Line ${err.line}]` : `[${err.line}-Qator]`;
            report += "📍 " + lineStr + ": " + err.message + "\n";
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

        report += isEn
          ? "💡 Complete the remaining steps above to finish the challenge!"
          : "💡 Masalani to'liq yakunlash uchun yuqorida qolib ketgan qismlarni yozing va qayta tekshiring!";

        consoleOut.textContent = report;
        return;
      }
    }

    // In Playground mode or if compilation failed
    if (res.success) {
      consoleOut.className = "console-output success";
      consoleOut.textContent = "==================================================\n" +
        (isEn ? "☕ OPENJDK 21 EXECUTION OUTPUT (STDOUT)\n" : "☕ OPENJDK 21 DASTUR CHIQISHI (STDOUT)\n") +
        "==================================================\n\n" +
        (res.output || (isEn ? "(Program completed with no output. Use System.out.println() to print results.)" : "(Dastur muvaffaqiyatli yakunlandi, lekin konsolga hech narsa chop etilmadi. System.out.println orqali natija chiqaring.)")) +
        (isEn ? "\n\n✅ Code successfully compiled and executed!" : "\n\n✅ Kod muvaffaqiyatli kompilyatsiya qilindi va bajarildi!");
    } else {
      consoleOut.className = "console-output error";
      let report = "==================================================\n";
      report += isEn ? "❌ COMPILER / RUNTIME ERROR (OPENJDK 21)\n" : "❌ KOMPILYATOR / JVM XATOLIGI (OPENJDK 21)\n";
      report += "==================================================\n\n";

      if (res.diagnostics && res.diagnostics.length > 0) {
        report += isEn ? "📍 PINPOINTED LINES:\n" : "📍 ANIQLANGAN QATORLAR:\n";
        res.diagnostics.forEach(d => {
          const lineStr = d.line ? (isEn ? `[Line ${d.line}]` : `[${d.line}-Qator]`) : (isEn ? "[General]" : "[Umumiy]");
          const msg = isEn ? (d.original || d.uzbek) : d.uzbek;
          report += "• " + lineStr + ": " + msg + "\n  💡 " + (isEn ? "Tip: " : "Tavsiya: ") + d.tip + "\n\n";
        });
        report += isEn ? "--- Full Compiler / JVM Message ---\n" : "--- To'liq Kompilyator / JVM Xabari ---\n";
      }

      report += res.errors || (isEn ? "Unknown execution error" : "Noma'lum ijro xatoligi");
      consoleOut.textContent = report;
    }
  }

  // 5. Setup Event Listeners
  document.addEventListener("DOMContentLoaded", () => {
    loadSolved();

    // Restore last question index if saved
    try {
      const savedIdx = parseInt(localStorage.getItem(LAST_Q_KEY), 10);
      if (!isNaN(savedIdx) && savedIdx >= 0 && savedIdx < CHALLENGES.length) {
        currentQIndex = savedIdx;
        const ch = CHALLENGES[currentQIndex];
        if (ch) {
          currentSector = (ch.id <= 10) ? "1-10" : (ch.id <= 20) ? "11-20" : (ch.id <= 30) ? "21-30" : (ch.id <= 40) ? "31-40" : "41-50";
        }
      }
    } catch (e) {}

    initSectorTabs();
    initModeSwitcher();

    // Ensure active sector tab matches currentSector
    document.querySelectorAll(".sector-tab-pill").forEach(p => {
      if (p.getAttribute("data-range") === currentSector) p.classList.add("active");
      else p.classList.remove("active");
    });

    renderHUD();
    renderChallenge();

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
        saveCurrentCode();
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

    if (btnTest) btnTest.addEventListener("click", handleInstantTest);
    if (btnRun) btnRun.addEventListener("click", handleCloudRun);
    if (btnReset) btnReset.addEventListener("click", () => {
      const ch = CHALLENGES[currentQIndex];
      const codeArea = document.getElementById("codeEditor");
      if (ch && codeArea) {
        codeArea.value = ch.starterCode || "";
        codeArea.scrollTop = 0;
        codeArea.scrollLeft = 0;
        try {
          localStorage.removeItem(CODE_STORAGE_PREFIX + ch.id);
        } catch (e) {}
        updateUML();
        if (window.JavaEditorEnhancer) {
          window.JavaEditorEnhancer.updateHighlighting();
          window.JavaEditorEnhancer.syncScroll();
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

    // Real-time UML updates on keystroke & auto-save
    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.addEventListener("input", () => {
        updateUML();
        saveCurrentCode();
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
        }
      });
    }

    // Initialize Draggable Split Resizers (Horizontal Pane & Vertical Console)
    initSplitResizers();
  });

  // =========================================================================
  // DRAGGABLE SPLIT RESIZERS (HORIZONTAL PANE & VERTICAL CONSOLE)
  // =========================================================================
  function initSplitResizers() {
    const workspace = document.getElementById("ideWorkspace");
    const paneLeft = document.querySelector(".pane-left");
    const paneRight = document.querySelector(".pane-right");
    const paneResizerH = document.getElementById("paneResizerH");

    const consoleResizerV = document.getElementById("consoleResizerV");
    const consoleSection = document.querySelector(".console-section");

    if (!workspace || !paneLeft || !paneRight) return;

    // --- 1. Restore Saved Dimensions from localStorage ---
    const STORAGE_LEFT_W = "OOP_LEFT_PANE_WIDTH";
    const STORAGE_CONS_H = "OOP_CONSOLE_HEIGHT";

    try {
      const savedLeftW = localStorage.getItem(STORAGE_LEFT_W);
      if (savedLeftW && window.innerWidth > 768) {
        const w = parseInt(savedLeftW, 10);
        if (!isNaN(w) && w >= 260 && w <= window.innerWidth - 320) {
          paneLeft.style.setProperty("width", w + "px", "important");
          document.documentElement.style.setProperty("--left-pane-width", w + "px");
          workspace.style.setProperty("--left-pane-width", w + "px");
        }
      }

      const savedConsH = localStorage.getItem(STORAGE_CONS_H);
      if (savedConsH && consoleSection) {
        const h = parseInt(savedConsH, 10);
        if (!isNaN(h) && h >= 44 && h <= 900) {
          const paneRightH = paneRight ? paneRight.getBoundingClientRect().height : window.innerHeight;
          const maxStartH = Math.max(140, Math.round(paneRightH * 0.45) || 160);
          const effectiveH = Math.min(Math.max(44, h), maxStartH);
          consoleSection.style.setProperty("height", effectiveH + "px", "important");
          consoleSection.style.setProperty("flex", "0 0 " + effectiveH + "px", "important");
          document.documentElement.style.setProperty("--console-height", effectiveH + "px");
          paneRight.style.setProperty("--console-height", effectiveH + "px");
        }
      }
    } catch (e) {}

    // --- 2. Horizontal Resizer (Pane Left <-> Pane Right) ---
    if (paneResizerH) {
      let isDraggingH = false;
      let startX = 0;
      let startWidth = 0;

      const onPointerDownH = (e) => {
        if (window.innerWidth <= 768) return; // Disabled on mobile segmented tab view
        isDraggingH = true;
        startX = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
        startWidth = paneLeft.getBoundingClientRect().width;

        document.body.classList.add("is-resizing-h");
        paneResizerH.classList.add("is-resizing");

        window.addEventListener("mousemove", onPointerMoveH);
        window.addEventListener("mouseup", onPointerUpH);
        window.addEventListener("touchmove", onPointerMoveH, { passive: false });
        window.addEventListener("touchend", onPointerUpH);
        window.addEventListener("touchcancel", onPointerUpH);
      };

      const onPointerMoveH = (e) => {
        if (!isDraggingH) return;
        if (e.cancelable) e.preventDefault();

        const curX = (e.touches && e.touches[0]) ? e.touches[0].clientX : e.clientX;
        const deltaX = curX - startX;
        let newWidth = startWidth + deltaX;

        const workspaceWidth = workspace.getBoundingClientRect().width;
        const minW = 260;
        const maxW = Math.max(minW, workspaceWidth - 320);

        if (newWidth < minW) newWidth = minW;
        if (newWidth > maxW) newWidth = maxW;

        paneLeft.style.setProperty("width", newWidth + "px", "important");
        document.documentElement.style.setProperty("--left-pane-width", newWidth + "px");
        workspace.style.setProperty("--left-pane-width", newWidth + "px");

        if (window.UMLRenderer && typeof window.UMLRenderer.fitToView === "function") {
          window.UMLRenderer.fitToView("umlContainer");
        }
        if (window.JavaEditorEnhancer && typeof window.JavaEditorEnhancer.syncScroll === "function") {
          window.JavaEditorEnhancer.syncScroll();
        }
      };

      const onPointerUpH = () => {
        if (!isDraggingH) return;
        isDraggingH = false;
        document.body.classList.remove("is-resizing-h");
        paneResizerH.classList.remove("is-resizing");

        window.removeEventListener("mousemove", onPointerMoveH);
        window.removeEventListener("mouseup", onPointerUpH);
        window.removeEventListener("touchmove", onPointerMoveH);
        window.removeEventListener("touchend", onPointerUpH);
        window.removeEventListener("touchcancel", onPointerUpH);

        try {
          const finalW = Math.round(paneLeft.getBoundingClientRect().width);
          localStorage.setItem(STORAGE_LEFT_W, String(finalW));
        } catch (e) {}

        if (window.JavaEditorEnhancer && typeof window.JavaEditorEnhancer.updateHighlighting === "function") {
          window.JavaEditorEnhancer.updateHighlighting();
        }
      };

      paneResizerH.addEventListener("mousedown", onPointerDownH);
      paneResizerH.addEventListener("touchstart", onPointerDownH, { passive: true });
    }

    // --- 3. Vertical Resizer (Code Editor <-> Java Console) ---
    if (consoleResizerV && consoleSection) {
      let isDraggingV = false;
      let startY = 0;
      let startHeight = 0;

      const onPointerDownV = (e) => {
        if (e.cancelable) e.preventDefault();
        isDraggingV = true;

        startY = (e.touches && e.touches[0]) ? e.touches[0].clientY : e.clientY;
        startHeight = consoleSection.getBoundingClientRect().height;

        document.body.classList.add("is-resizing-v");
        consoleResizerV.classList.add("is-resizing");

        window.addEventListener("mousemove", onPointerMoveV);
        window.addEventListener("mouseup", onPointerUpV);
        window.addEventListener("touchmove", onPointerMoveV, { passive: false });
        window.addEventListener("touchend", onPointerUpV);
        window.addEventListener("touchcancel", onPointerUpV);
      };

      const onPointerMoveV = (e) => {
        if (!isDraggingV) return;
        if (e.cancelable) e.preventDefault();

        const curY = (e.touches && e.touches[0]) ? e.touches[0].clientY : e.clientY;
        if (curY === undefined || curY === null) return;

        const deltaY = curY - startY;
        let newHeight = Math.round(startHeight - deltaY);

        const workspaceH = workspace ? workspace.getBoundingClientRect().height : window.innerHeight;
        const minH = 40;
        const maxH = Math.max(minH + 60, Math.round(workspaceH - 140));

        if (newHeight < minH) newHeight = minH;
        if (newHeight > maxH) newHeight = maxH;

        consoleSection.style.setProperty("height", newHeight + "px", "important");
        consoleSection.style.setProperty("flex", "0 0 " + newHeight + "px", "important");
        document.documentElement.style.setProperty("--console-height", newHeight + "px");
        paneRight.style.setProperty("--console-height", newHeight + "px");

        if (window.JavaEditorEnhancer && typeof window.JavaEditorEnhancer.syncScroll === "function") {
          window.JavaEditorEnhancer.syncScroll();
        }
      };

      const onPointerUpV = () => {
        if (!isDraggingV) return;
        isDraggingV = false;
        document.body.classList.remove("is-resizing-v");
        consoleResizerV.classList.remove("is-resizing");

        window.removeEventListener("mousemove", onPointerMoveV);
        window.removeEventListener("mouseup", onPointerUpV);
        window.removeEventListener("touchmove", onPointerMoveV);
        window.removeEventListener("touchend", onPointerUpV);
        window.removeEventListener("touchcancel", onPointerUpV);

        try {
          const finalH = Math.round(consoleSection.getBoundingClientRect().height);
          localStorage.setItem(STORAGE_CONS_H, String(finalH));
        } catch (e) {}

        if (window.JavaEditorEnhancer && typeof window.JavaEditorEnhancer.updateHighlighting === "function") {
          window.JavaEditorEnhancer.updateHighlighting();
        }
      };

      consoleResizerV.addEventListener("mousedown", onPointerDownV);
      consoleResizerV.addEventListener("touchstart", onPointerDownV, { passive: false });
    }

    // --- 4. Window Resize Observer ---
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        paneLeft.style.removeProperty("width");
        paneLeft.style.removeProperty("min-width");
      } else {
        const curW = paneLeft.getBoundingClientRect().width;
        const maxW = Math.max(260, workspace.getBoundingClientRect().width - 320);
        if (curW > maxW) {
          paneLeft.style.setProperty("width", maxW + "px", "important");
          document.documentElement.style.setProperty("--left-pane-width", maxW + "px");
          workspace.style.setProperty("--left-pane-width", maxW + "px");
        }
      }
    });
  }

})();
