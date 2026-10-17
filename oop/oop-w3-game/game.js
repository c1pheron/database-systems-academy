// ============================================================================
// OOP ACADEMY — WEEK 3 GAME LOGIC (150 PROGRESSIVE CHALLENGES)
// Professor Ada's Interactive Java IDE Simulator • WIUT 5COSC018C
// ============================================================================

(function () {
  "use strict";

  const STORAGE_KEY = "WIUT_OOP_W3_PROGRESS";
  let currentLang = "uz";
  let currentQIndex = 0;
  let currentSector = "all";
  let solvedQuestions = new Set();

  // Load 150 challenges from dedicated dataset
  const CHALLENGES = (window.OOP_CHALLENGES_W3 && window.OOP_CHALLENGES_W3.length > 0)
    ? window.OOP_CHALLENGES_W3
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
      dot.textContent = ch.id;
      dot.title = ch.title[currentLang];
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
      elPoints.textContent = solvedQuestions.size * 50 + " Ball";
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

    if (elBadge) elBadge.textContent = "3-Modul • " + ch.id + "-Topshiriq";
    if (elTitle) elTitle.textContent = ch.title[currentLang];
    if (elScenario) elScenario.textContent = ch.scenario[currentLang];

    // Render Rich Solution View via SolutionRenderer
    if (window.SolutionRenderer) {
      window.SolutionRenderer.render(ch, "solutionContentCard", currentLang);
    }
    if (elSolutionCard) elSolutionCard.style.display = "none";
    if (elToggleHint) elToggleHint.textContent = "[Ko'rish ▾]";

    // Update requirements list
    const reqList = document.getElementById("taskReqList");
    if (reqList) {
      let reqHtml = "";
      if (ch.requirements.classes) {
        reqHtml += "<li><strong>Klasslar:</strong> <code>" + ch.requirements.classes.join(", ") + "</code> sinfi e'lon qilinishi shart.</li>";
      }
      if (ch.requirements.fields) {
        const fieldStr = ch.requirements.fields.map(f => "<code>" + f.type + " " + f.name + "</code>").join(", ");
        reqHtml += "<li><strong>Maydonlar:</strong> " + fieldStr + " maydonlari to'g'ri turda yozilsin.</li>";
      }
      if (ch.requirements.privateFields) {
        reqHtml += "<li><strong>Inkapsulyatsiya:</strong> <code>" + ch.requirements.privateFields.join(", ") + "</code> maydonlari <code>private</code> bo'lsin.</li>";
      }
      if (ch.requirements.methods && ch.requirements.methods.length > 0) {
        reqHtml += "<li><strong>Metodlar:</strong> <code>" + ch.requirements.methods.join("(), ") + "()</code> metodi yaratilsin.</li>";
      }
      if (ch.requirements.constructors) {
        reqHtml += "<li><strong>Konstruktor:</strong> <code>" + ch.requirements.constructors.join(", ") + "</code> klassi uchun konstruktor tuzilsin.</li>";
      }
      if (ch.requirements.keywords) {
        reqHtml += "<li><strong>Kalit so'zlar:</strong> <code>" + ch.requirements.keywords.join(", ") + "</code> qo'llanilishi kerak.</li>";
      }
      reqHtml += "<li>Sintaksis xatolarisiz va Clean Code qoidalariga mos yozing.</li>";
      reqList.innerHTML = reqHtml;
    }

    // Set code editor
    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.value = ch.starterCode;
    }

    // Clear console output
    const consoleOut = document.getElementById("consoleOutput");
    if (consoleOut) {
      consoleOut.className = "console-output";
      consoleOut.textContent = "Java konsoli tayyor. '▶ Kodni Tekshirish' yoki '☕ Ishga tushirish (OpenJDK 21)' tugmasini bosing.";
    }

    // Render UML preview
    updateUML();
  }

  function updateUML() {
    const codeArea = document.getElementById("codeEditor");
    if (!codeArea || !window.UMLRenderer) return;
    const classes = window.UMLRenderer.parseJavaToUML(codeArea.value);
    window.UMLRenderer.renderSVG(classes, "umlContainer");
  }

  function switchChallenge(idx) {
    if (idx < 0 || idx >= CHALLENGES.length) return;
    currentQIndex = idx;

    // Auto-update sector filter if current question is outside active sector
    const ch = CHALLENGES[idx];
    if (currentSector !== "all") {
      const parts = currentSector.split("-").map(Number);
      if (ch.id < parts[0] || ch.id > parts[1]) {
        currentSector = "all";
        document.querySelectorAll(".sector-tab-pill").forEach(p => {
          if (p.getAttribute("data-range") === "all") p.classList.add("active");
          else p.classList.remove("active");
        });
      }
    }

    renderHUD();
    renderChallenge();
  }

  // 3. 150-Question Map Overview Modal
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
              <span>🗺️</span> <span>3-Modul: 150 ta Topshiriqlar Xaritasi</span>
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

    consoleOut.className = "console-output";
    consoleOut.textContent = "🔍 Mahalliy OOP qoidalari va sintaksis tekshirilmoqda...";

    const validation = window.JavaRunner.validateOOPRules(codeArea.value, ch.requirements);

    let report = "==================================================\n";
    report += "🔎 MAHALLIY TEKSHIRUV NATIJASI (PROFESSOR ADA)\n";
    report += "==================================================\n\n";

    if (validation.passed) {
      consoleOut.className = "console-output success";
      solvedQuestions.add(ch.id);
      saveSolved();
      renderHUD();

      report += "🎉 TABRIKLAYMIZ! BARCHA TALABLAR TO'G'RI BAJARILDI!\n\n";
      report += "✔️ OOP Shartlari To'liq Qanoatlantirildi\n";
      report += "✔️ Sintaktik xatolar aniqlanmadi\n";
      report += "⭐ Reytingga +50 Ball qo'shildi!\n\n";
      report += "💡 Maslahat: '☕ Ishga tushirish (OpenJDK 21)' tugmasini bosib, real JVM natijasini ko'rishingiz mumkin.";
    } else {
      consoleOut.className = "console-output error";
      report += "❌ KODDA XATOLIKLAR ANIQLANDI:\n";

      if (validation.syntaxErrors && validation.syntaxErrors.length > 0) {
        validation.syntaxErrors.forEach(err => {
          report += "\n📍 [" + err.line + "-Qator]: " + err.message + "\n";
          if (err.snippet) report += "   Kodingiz: " + err.snippet + "\n";
          if (err.fix) report += "   💡 Tavsiya: " + err.fix + "\n";
        });
      }

      if (validation.semanticIssues && validation.semanticIssues.length > 0) {
        validation.semanticIssues.forEach(iss => {
          const linePrefix = iss.line ? "[" + iss.line + "-Qator]: " : "";
          report += "\n📍 " + linePrefix + iss.message + "\n";
          if (iss.fix) report += "   💡 Tavsiya: " + iss.fix + "\n";
        });
      }

      if (validation.passedItems && validation.passedItems.length > 0) {
        report += "\n--------------------------------------------------\n";
        report += "✔️ TO'G'RI BAJARILGAN QISMLAR:\n";
        validation.passedItems.forEach(item => {
          report += "   • " + item.name + " (" + item.detail + ")\n";
        });
      }

      report += "\n💡 Professor Ada Maslahati: Yuqorida ko'rsatilgan qatorlardagi xatoliklarni tuzatib, qayta tekshiring!";
    }

    consoleOut.textContent = report;
    updateUML();
  }

  async function handleCloudRun() {
    const codeArea = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!codeArea || !consoleOut) return;

    consoleOut.className = "console-output";
    consoleOut.textContent = "🚀 Real OpenJDK 21 kompilyatoriga yuborilmoqda (Wandbox Cloud)...";

    const res = await window.JavaRunner.runOnOpenJDK21(codeArea.value);

    if (res.success) {
      consoleOut.className = "console-output success";
      consoleOut.textContent = "==================================================\n✅ OPENJDK 21 CHIQISHI (STDOUT)\n==================================================\n\n" + (res.output || "(Chiqish yo'q, dastur muvaffaqiyatli yakunlandi)") + "\n\n✅ Kod muvaffaqiyatli kompilyatsiya qilindi va bajarildi!";
    } else {
      consoleOut.className = "console-output error";
      let report = "==================================================\n";
      report += "❌ KOMPILYATOR XATOLIGI (JAVAC OPENJDK 21)\n";
      report += "==================================================\n\n";

      if (res.diagnostics && res.diagnostics.length > 0) {
        report += "📍 ANIQLANGAN QATORLAR:\n";
        res.diagnostics.forEach(d => {
          report += "• [" + d.line + "-Qator]: " + d.uzbek + "\n  💡 Tavsiya: " + d.tip + "\n\n";
        });
        report += "--- To'liq Javac Kompilyator Xabari ---\n";
      }

      report += res.errors || "Noma'lum xatolik";
      consoleOut.textContent = report;
    }
  }

  // 5. Setup Event Listeners
  document.addEventListener("DOMContentLoaded", () => {
    loadSolved();
    initSectorTabs();
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
        codeArea.value = ch.starterCode;
        updateUML();
      }
    });

    if (btnNext) btnNext.addEventListener("click", () => {
      if (currentQIndex < CHALLENGES.length - 1) {
        switchChallenge(currentQIndex + 1);
      }
    });

    if (btnToggleSol) btnToggleSol.addEventListener("click", () => {
      const card = document.getElementById("solutionContentCard");
      if (card) {
        const isHidden = card.style.display === "none";
        card.style.display = isHidden ? "block" : "none";
        if (elToggleHint) {
          elToggleHint.textContent = isHidden ? "[Yopish ▴]" : "[Ko'rish ▾]";
        }
      }
    });

    // Real-time UML updates on keystroke
    const codeArea = document.getElementById("codeEditor");
    if (codeArea) {
      codeArea.addEventListener("input", () => {
        updateUML();
      });

      // Enable Tab indentation inside textarea
      codeArea.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          e.preventDefault();
          const start = codeArea.selectionStart;
          const end = codeArea.selectionEnd;
          codeArea.value = codeArea.value.substring(0, start) + "    " + codeArea.value.substring(end);
          codeArea.selectionStart = codeArea.selectionEnd = start + 4;
        }
      });
    }

    // Language switch buttons
    const btnUz = document.getElementById("btnLangUz");
    const btnEn = document.getElementById("btnLangEn");
    if (btnUz && btnEn) {
      btnUz.addEventListener("click", () => {
        currentLang = "uz";
        btnUz.classList.add("active");
        btnEn.classList.remove("active");
        renderChallenge();
      });
      btnEn.addEventListener("click", () => {
        currentLang = "en";
        btnEn.classList.add("active");
        btnUz.classList.remove("active");
        renderChallenge();
      });
    }
  });

})();
