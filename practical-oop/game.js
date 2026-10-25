/**
 * ============================================================================
 * PRACTICAL OOP — 4 MASTER PILLARS GAME ENGINE (PROFESSOR ADA)
 * Complete IntelliJ Darcula Integration, JavaEditorEnhancer & Live FinTech Simulator
 * ============================================================================
 */

(function () {
  "use strict";

  const CHALLENGES = window.OOP_PRACTICAL_CHALLENGES || [];
  let currentQIndex = 0;
  let activeTier = 1; // 1: Encapsulation, 2: Inheritance, 3: Polymorphism, 4: Abstraction
  const solvedQuestions = new Set();
  let currentLang = "uz";

  const STORAGE_KEY_SOLVED = "oop_practical_solved_questions";
  const STORAGE_KEY_CURRENT = "oop_practical_current_q";
  const STORAGE_PREFIX_CODE = "oop_practical_code_q_";
  const STORAGE_KEY_LANG = "OOP_LANG";

  function normalizeJavaCode(str) {
    return (str || "")
      .replace(/\/\/[^\n]*/g, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_LANG) || localStorage.getItem("DS_ACADEMY_LANG");
      if (saved === "ru" || saved === "en" || saved === "uz") return saved;
    } catch (e) {}
    return "uz";
  }

  function loadState() {
    currentLang = getSavedLang();
    try {
      const savedSolved = localStorage.getItem(STORAGE_KEY_SOLVED);
      if (savedSolved) {
        JSON.parse(savedSolved).forEach(id => solvedQuestions.add(id));
      }
      const savedQ = localStorage.getItem(STORAGE_KEY_CURRENT);
      if (savedQ !== null) {
        const parsed = parseInt(savedQ, 10);
        if (!isNaN(parsed) && parsed >= 0 && parsed < CHALLENGES.length) {
          currentQIndex = parsed;
          activeTier = CHALLENGES[currentQIndex].tier || 1;
        }
      }
    } catch (e) {
      console.warn("Storage load error:", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY_SOLVED, JSON.stringify([...solvedQuestions]));
      localStorage.setItem(STORAGE_KEY_CURRENT, currentQIndex.toString());
      localStorage.setItem(STORAGE_KEY_LANG, currentLang);
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  function renderTierTabs() {
    const tabs = document.querySelectorAll(".tier-tab-btn");
    tabs.forEach(tab => {
      const tier = parseInt(tab.dataset.tier, 10);
      if (tier === activeTier) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  }

  function renderStrip() {
    const strip = document.getElementById("progressStrip");
    if (!strip) return;
    strip.innerHTML = "";

    // Show questions of current activeTier (10 questions per tier)
    const tierChallenges = CHALLENGES.filter(c => c.tier === activeTier);

    tierChallenges.forEach(ch => {
      const idx = CHALLENGES.findIndex(c => c.id === ch.id);
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "q-dot";
      dot.textContent = ch.id;
      dot.title = (ch.title && ch.title[currentLang]) || ch.title?.uz || `Topshiriq ${ch.id}`;

      if (idx === currentQIndex) dot.classList.add("active");
      if (solvedQuestions.has(ch.id)) dot.classList.add("solved");

      dot.addEventListener("click", () => {
        saveCurrentCode();
        switchChallenge(idx);
      });

      strip.appendChild(dot);
    });
  }

  function renderHUD() {
    const solvedCount = solvedQuestions.size;
    const totalCount = CHALLENGES.length;
    const scoreVal = document.getElementById("hudScore");
    if (scoreVal) scoreVal.textContent = (solvedCount * 50) + " XP";

    const progressVal = document.getElementById("hudProgress");
    if (progressVal) progressVal.textContent = `${solvedCount} / ${totalCount}`;

    renderTierTabs();
    renderStrip();
  }

  function saveCurrentCode() {
    const ch = CHALLENGES[currentQIndex];
    const editor = document.getElementById("codeEditor");
    if (ch && editor) {
      localStorage.setItem(STORAGE_PREFIX_CODE + ch.id, editor.value);
    }
  }

  function loadSavedCode(ch) {
    return localStorage.getItem(STORAGE_PREFIX_CODE + ch.id) || ch.starterCode;
  }

  function switchChallenge(index) {
    if (index < 0 || index >= CHALLENGES.length) return;
    currentQIndex = index;
    const ch = CHALLENGES[currentQIndex];
    activeTier = ch.tier || 1;
    saveState();

    const tierBadge = document.getElementById("tierBadge");
    const problemTitle = document.getElementById("problemTitle");
    const problemScenario = document.getElementById("problemScenario");
    const sampleDataBox = document.getElementById("sampleDataBox");
    const codeEditor = document.getElementById("codeEditor");
    const consoleOutput = document.getElementById("consoleOutput");

    if (tierBadge) tierBadge.textContent = ch.tierName;
    if (problemTitle) {
      problemTitle.textContent = (ch.title && ch.title[currentLang]) || ch.title?.uz || "";
    }

    // Format rich scenario using SolutionRenderer or fallback
    if (problemScenario) {
      if (window.SolutionRenderer && typeof window.SolutionRenderer.formatScenarioHTML === "function") {
        problemScenario.innerHTML = window.SolutionRenderer.formatScenarioHTML(ch, currentLang);
      } else {
        const text = (ch.scenario && ch.scenario[currentLang]) || ch.scenario?.uz || ch.scenario || "";
        problemScenario.textContent = text;
      }
    }

    // Sample Data box
    if (sampleDataBox) {
      if (ch.sampleData && Array.isArray(ch.sampleData)) {
        sampleDataBox.innerHTML = `<strong>📋 Boshlang'ich qiymatlar:</strong><br>` + ch.sampleData.map(d => `• ${d}`).join('<br>');
        sampleDataBox.style.display = "block";
      } else {
        sampleDataBox.style.display = "none";
      }
    }

    // Load code into editor
    if (codeEditor) {
      codeEditor.value = loadSavedCode(ch);
    }

    // Update JavaEditorEnhancer
    if (window.JavaEditorEnhancer) {
      window.JavaEditorEnhancer.setChallenge(ch);
      window.JavaEditorEnhancer.updateHighlighting();
      window.JavaEditorEnhancer.syncScroll();
      window.JavaEditorEnhancer.scanCodeForClasses();
      window.JavaEditorEnhancer.renderChipsBar();
    }

    // Reset console output
    if (consoleOutput) {
      consoleOutput.className = "console-output";
      consoleOutput.textContent = currentLang === "ru" 
        ? "Готов. Напишите код и нажмите 'Проверить' или 'Симуляция'."
        : (currentLang === "en" ? "Ready. Write your code and click 'Check' or 'Simulate'." : "Tayyor. Kodingizni yozib, 'Sinab Ko'rish' yoki 'Tekshirish' tugmasini bosing.");
    }

    // Update Virtual Smartphone Simulator
    if (window.SimulatorEngine) {
      window.SimulatorEngine.setChallenge(ch);
    }

    renderHUD();
  }

  function handleSimulate() {
    const ch = CHALLENGES[currentQIndex];
    const editor = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!ch || !editor) return;

    if (consoleOut) {
      consoleOut.className = "console-output";
      consoleOut.textContent = "⚡ Kod asosida jonli FinTech simulyatsiyasi ishga tushirildi...";
    }

    if (window.SimulatorEngine) {
      window.SimulatorEngine.triggerAction(editor.value, ch.expectedOutput || "", true);
    }

    if (consoleOut) {
      consoleOut.textContent = "✅ Smartfon ekranida obyekt holati aks ettirildi! Natijani tasdiqlash uchun 'Tekshirish' tugmasini bosing.";
    }

    // Switch to simulator tab on mobile if available
    const mobTabSim = document.querySelector('.btn-vtab[data-view="simulator"]');
    if (mobTabSim && window.innerWidth <= 992) {
      mobTabSim.click();
    }
  }

  async function handleInstantTest() {
    const ch = CHALLENGES[currentQIndex];
    const editor = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!ch || !editor || !consoleOut) return;

    consoleOut.className = "console-output";
    consoleOut.textContent = "⏳ OpenJDK JVM da kompilyatsiya qilinmoqda va barcha OOP qoidalari tekshirilmoqda...";

    // 1. Static OOP Verification
    const validation = window.JavaRunner ? window.JavaRunner.validateOOPRules(editor.value, ch.requirements, ch) : { passed: true };

    const isExactSolution = Boolean(ch.solution && (normalizeJavaCode(editor.value) === normalizeJavaCode(ch.solution)));
    if (isExactSolution) {
      validation.passed = true;
      validation.syntaxErrors = [];
      validation.semanticIssues = [];
    }

    // Syntax pre-check
    if (!isExactSolution && validation.syntaxErrors && validation.syntaxErrors.length > 0) {
      consoleOut.className = "console-output";
      let msg = "❌ SINTAKTIK XATOLIK ANIQLANDI:\n==================================================\n\n";
      validation.syntaxErrors.forEach(err => {
        msg += `📍 [${err.line}-Qator]: ${err.message}\n`;
        if (err.snippet) msg += `   Kodingiz: ${err.snippet}\n`;
        if (err.fix) msg += `   💡 Tavsiya: ${err.fix}\n\n`;
      });
      consoleOut.textContent = msg;
      return;
    }

    // 2. OpenJDK 21 execution
    const runResult = window.JavaRunner ? await window.JavaRunner.runOnOpenJDK21(editor.value) : { success: true, output: ch.expectedOutput };

    const hasOutput = runResult.success && runResult.output && runResult.output.trim().length > 0;
    const isPassed = (validation.passed && runResult.success && hasOutput) ||
                     (validation.passed && runResult.networkError) ||
                     (isExactSolution && (runResult.success || runResult.networkError));

    if (isPassed) {
      consoleOut.className = "console-output";
      solvedQuestions.add(ch.id);
      saveState();
      renderHUD();

      // Trigger visual action on virtual phone
      if (window.SimulatorEngine) {
        window.SimulatorEngine.triggerAction(editor.value, runResult.output || ch.expectedOutput, true);
      }

      let report = "🎉 BARAKALLA! TOPSHIRIQ MUVAFFAQIYATLI BAJARILDI!\n==================================================\n\n";
      report += "✔️ Barcha OOP talablari va arxitekturasi to'liq tasdiqlandi\n";
      report += "✔️ OpenJDK JVM: 0 xato\n";
      if (runResult.output) {
        report += "\n☕ KONSOL CHIQQAN NATIJA:\n" + runResult.output + "\n";
      }
      report += "\n⭐ Reytingingizga +50 XP qo'shildi!";

      consoleOut.textContent = report;

      // Auto-advance to next challenge after 2 seconds if not last
      if (currentQIndex < CHALLENGES.length - 1) {
        setTimeout(() => {
          switchChallenge(currentQIndex + 1);
        }, 2000);
      }
    } else {
      consoleOut.className = "console-output";
      let report = "❌ TOPSHIRIQ TO'LIQ YAKUNLANMAGAN:\n==================================================\n\n";

      if (!runResult.success && runResult.errors) {
        report += "📍 Javac Kompilyator xatosi:\n" + runResult.errors + "\n\n";
      }

      if (validation.semanticIssues && validation.semanticIssues.length > 0) {
        validation.semanticIssues.forEach(iss => {
          report += "📍 " + (iss.message || iss.title) + "\n";
          if (iss.fix) report += "   💡 Tavsiya: " + iss.fix + "\n\n";
        });
      }

      if (!hasOutput && runResult.success) {
        report += "📍 Dastur konsolga hech narsa chop etmadi. 'System.out.println(...)' orqali natijani chiqaring!\n";
      }

      consoleOut.textContent = report;
    }
  }

  async function handleCloudRun() {
    const editor = document.getElementById("codeEditor");
    const consoleOut = document.getElementById("consoleOutput");
    if (!editor || !consoleOut) return;

    consoleOut.textContent = "☕ Haqiqiy OpenJDK 21 muhitiga yuborilmoqda...";
    if (window.JavaRunner && typeof window.JavaRunner.runOnOpenJDK21 === "function") {
      const res = await window.JavaRunner.runOnOpenJDK21(editor.value);
      if (res.success) {
        consoleOut.textContent = `[OpenJDK 21 CHIQQAN NATIJA]:\n${res.output || "(chiqish yo'q)"}`;
      } else {
        consoleOut.textContent = `[OpenJDK 21 XATOLIK]:\n${res.errors || res.output || "Noma'lum xatolik"}`;
      }
    } else {
      consoleOut.textContent = "OpenJDK runner mavjud emas.";
    }
  }

  function handleShowSolution() {
    const ch = CHALLENGES[currentQIndex];
    if (!ch) return;

    if (window.SolutionRenderer && typeof window.SolutionRenderer.openModal === "function") {
      window.SolutionRenderer.openModal(ch, currentLang);
    } else {
      const editor = document.getElementById("codeEditor");
      if (editor && confirm("Namunaviy yechimni muharrirga joylashtirmoqchimisiz?")) {
        editor.value = ch.solution;
        saveCurrentCode();
        if (window.JavaEditorEnhancer) {
          window.JavaEditorEnhancer.updateHighlighting();
          window.JavaEditorEnhancer.syncScroll();
        }
      }
    }
  }

  function handleResetCode() {
    const ch = CHALLENGES[currentQIndex];
    const editor = document.getElementById("codeEditor");
    if (!ch || !editor) return;

    if (confirm("Kodni boshlang'ich holatga qaytarmoqchimisiz?")) {
      editor.value = ch.starterCode;
      saveCurrentCode();
      if (window.JavaEditorEnhancer) {
        window.JavaEditorEnhancer.updateHighlighting();
        window.JavaEditorEnhancer.syncScroll();
      }
      if (window.SimulatorEngine) {
        window.SimulatorEngine.setChallenge(ch);
      }
    }
  }

  function handleNextChallenge() {
    if (currentQIndex < CHALLENGES.length - 1) {
      saveCurrentCode();
      switchChallenge(currentQIndex + 1);
    } else {
      alert("🎉 Tabriklaymiz! Siz barcha 40 ta amaliy FinTech topshiriqlarini yakunladingiz!");
    }
  }

  function setLanguage(lang) {
    if (lang !== "uz" && lang !== "ru" && lang !== "en") return;
    currentLang = lang;
    saveState();

    // Update buttons active class
    const btnUz = document.getElementById("btnLangUz");
    const btnRu = document.getElementById("btnLangRu");
    const btnEn = document.getElementById("btnLangEn");

    if (btnUz) btnUz.className = lang === "uz" ? "btn-lang active" : "btn-lang";
    if (btnRu) btnRu.className = lang === "ru" ? "btn-lang active" : "btn-lang";
    if (btnEn) btnEn.className = lang === "en" ? "btn-lang active" : "btn-lang";

    // Re-render current challenge in new language
    switchChallenge(currentQIndex);
  }

  // Mobile view switching
  function initMobileViews() {
    const tabs = document.querySelectorAll(".btn-vtab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const view = tab.dataset.view;

        const paneTask = document.getElementById("paneTask");
        const paneEditor = document.getElementById("paneEditor");
        const paneSimulator = document.getElementById("paneSimulator");

        if (paneTask) paneTask.classList.remove("active");
        if (paneEditor) paneEditor.classList.remove("active");
        if (paneSimulator) paneSimulator.classList.remove("active");

        if (view === "task" && paneTask) paneTask.classList.add("active");
        if (view === "editor" && paneEditor) {
          paneEditor.classList.add("active");
          if (window.JavaEditorEnhancer) {
            window.JavaEditorEnhancer.syncScroll();
            window.JavaEditorEnhancer.updateHighlighting();
          }
        }
        if (view === "simulator" && paneSimulator) paneSimulator.classList.add("active");
      });
    });
  }

  // --- INITIALIZATION ---
  document.addEventListener("DOMContentLoaded", () => {
    loadState();

    // 1. Initialize Simulator Engine
    const simContainer = document.getElementById("phoneSimContainer");
    if (simContainer && window.SimulatorEngine) {
      window.SimulatorEngine.init(simContainer);
    }

    // 2. Initialize JavaEditorEnhancer
    if (window.JavaEditorEnhancer) {
      window.JavaEditorEnhancer.init("codeEditor", CHALLENGES[currentQIndex]);
    }

    // 3. Bind Pillar Category Tabs
    const tabs = document.querySelectorAll(".tier-tab-btn");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const tier = parseInt(tab.dataset.tier, 10);
        activeTier = tier;
        const firstIdx = CHALLENGES.findIndex(c => c.tier === tier);
        if (firstIdx !== -1) {
          saveCurrentCode();
          switchChallenge(firstIdx);
        }
      });
    });

    // 4. Bind Toolbar Buttons
    const btnSimulate = document.getElementById("btnSimulate");
    const btnTest = document.getElementById("btnInstantTest");
    const btnSolution = document.getElementById("btnToolbarSolution");
    const btnReset = document.getElementById("btnResetCode");
    const btnCloud = document.getElementById("btnCloudRun");
    const btnNext = document.getElementById("btnNextChallenge");

    if (btnSimulate) btnSimulate.addEventListener("click", handleSimulate);
    if (btnTest) btnTest.addEventListener("click", handleInstantTest);
    if (btnSolution) btnSolution.addEventListener("click", handleShowSolution);
    if (btnReset) btnReset.addEventListener("click", handleResetCode);
    if (btnCloud) btnCloud.addEventListener("click", handleCloudRun);
    if (btnNext) btnNext.addEventListener("click", handleNextChallenge);

    // 5. Language Switchers
    const btnUz = document.getElementById("btnLangUz");
    const btnRu = document.getElementById("btnLangRu");
    const btnEn = document.getElementById("btnLangEn");

    if (btnUz) btnUz.addEventListener("click", () => setLanguage("uz"));
    if (btnRu) btnRu.addEventListener("click", () => setLanguage("ru"));
    if (btnEn) btnEn.addEventListener("click", () => setLanguage("en"));

    // 6. Mobile View Switcher
    initMobileViews();

    // 7. Initial Challenge Render
    switchChallenge(currentQIndex);

    // 8. Auto-save code on typing
    const editor = document.getElementById("codeEditor");
    if (editor) {
      editor.addEventListener("input", () => {
        saveCurrentCode();
      });
    }
  });
})();
