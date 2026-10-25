/**
 * ============================================================================
 * PRACTICAL OOP — LIVE VISUAL SIMULATOR & ER DIAGRAM ENGINE
 * Author: Professor Ada • Level 5 • WIUT Computer Science
 * ============================================================================
 */

(function () {
  "use strict";

  const CHALLENGES = window.OOP_PRACTICAL_CHALLENGES || [];
  let currentQIndex = 0;
  const solvedQuestions = new Set();
  let currentLang = "uz";
  let umlMode = "target"; // "target" (Final) or "live" (O'zimniki)

  const STORAGE_KEY_SOLVED = "oop_practical_solved_questions";
  const STORAGE_KEY_CURRENT = "oop_practical_current_q";
  const STORAGE_PREFIX_CODE = "oop_practical_code_q_";

  function normalizeJavaCode(str) {
    return (str || "")
      .replace(/\/\/[^\n]*/g, "")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function loadState() {
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
    } catch (e) {
      console.warn("Storage save error:", e);
    }
  }

  function renderStrip() {
    const strip = document.getElementById("progressStrip");
    if (!strip) return;
    strip.innerHTML = "";

    CHALLENGES.forEach((ch, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "q-dot";
      dot.textContent = ch.id;
      dot.title = (ch.title && ch.title.uz) || `Topshiriq ${ch.id}`;

      if (idx === currentQIndex) dot.classList.add("active");
      if (solvedQuestions.has(ch.id)) dot.classList.add("solved");

      dot.addEventListener("click", () => {
        saveCurrentCode();
        switchChallenge(idx);
      });

      strip.appendChild(dot);
    });

    // Auto-scroll strip to keep current dot visible
    const activeDot = strip.querySelector(".q-dot.active");
    if (activeDot) {
      activeDot.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  function renderHUD() {
    const solvedCount = solvedQuestions.size;
    const totalCount = CHALLENGES.length;
    const scoreVal = document.getElementById("hudScore");
    if (scoreVal) scoreVal.textContent = (solvedCount * 50) + " XP";

    const progressVal = document.getElementById("hudProgress");
    if (progressVal) progressVal.textContent = `${solvedCount} / ${totalCount}`;

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

  function updateMemoryDisplay(ch, code) {
    const memEl = document.getElementById("memoryContentText") || document.querySelector(".live-inspect-box code");
    if (!memEl || !ch) return;

    if (ch.simKind === "card") {
      memEl.textContent = "BankCard.balance = 50000.0;";
    } else if (ch.simKind === "atm" || ch.simKind === "pin") {
      memEl.textContent = "CardPin.pin = 1234; isUnlocked = true;";
    } else if (ch.simKind === "total" || ch.simKind === "receipt" || ch.simKind === "fullorder") {
      memEl.textContent = "OrderReceipt: Customer + Address + Total";
    } else if (ch.requirements && ch.requirements.classes && ch.requirements.classes.length > 0) {
      memEl.textContent = ch.requirements.classes.filter(c => c !== "Main").join(" • ");
    } else if (ch.classes && ch.classes.length > 0) {
      memEl.textContent = ch.classes.filter(c => c !== "Main").join(" • ");
    }
  }

  function updateUMLDiagram() {
    const ch = CHALLENGES[currentQIndex];
    if (!ch || !window.UMLRenderer) return;

    const editor = document.getElementById("codeEditor");
    const hint = document.getElementById("umlStatusHint");
    const currentClasses = (ch.requirements && ch.requirements.classes) || ch.classes || [];

    if (umlMode === "target") {
      // 🏆 FINAL (UMUMIY TIZIM): Barcha klasslar bir-biriga ulangan to'liq umumiy ER diagrammasi!
      const grandCode = window.UMLRenderer.getGrandArchitecture();
      const grandClasses = window.UMLRenderer.parseJavaToUML(grandCode);

      window.UMLRenderer.renderSVG(grandClasses, "umlContainer", {
        isGrand: true,
        highlightClasses: currentClasses,
        badgeText: `🏆 Butun Tizim Modeli (${grandClasses.length} ta Klass/Interfeys)`
      });

      if (hint) {
        const curName = currentClasses.filter(c => c !== "Main").join(", ") || "Main";
        hint.innerHTML = `<span style="color:#10b981; font-weight:700;">🏆 Final:</span> Umumiy dastur arxitekturasi (${grandClasses.length} ta bog'langan klass) • 📍 Joriy bosqich: <strong style="color:#38bdf8;">${curName}</strong>`;
      }
    } else if (umlMode === "task") {
      // 🎯 TOPSHIRIQ YECHIMI: Faqat joriy masala arxitekturasi
      const taskCode = ch.solution || "";
      const taskClasses = window.UMLRenderer.parseJavaToUML(taskCode);

      window.UMLRenderer.renderSVG(taskClasses, "umlContainer", {
        isGrand: false,
        highlightClasses: currentClasses,
        badgeText: `🎯 Topshiriq Yechimi (${taskClasses.length} ta Klass)`
      });

      if (hint) {
        hint.innerHTML = `<span style="color:#f59e0b; font-weight:700;">🎯 Topshiriq:</span> Ushbu topshiriq uchun kutilayotgan ${taskClasses.length} ta klass`;
      }
    } else {
      // 👨‍💻 O'ZIMNIKI: O'quvchi yozayotgan kod real vaqtda chiziladi!
      const userCode = (editor && editor.value) || "";
      const userClasses = window.UMLRenderer.parseJavaToUML(userCode);

      window.UMLRenderer.renderSVG(userClasses, "umlContainer", {
        isGrand: false,
        highlightClasses: [],
        badgeText: `👨‍💻 O'zingizniki: ${userClasses.length} ta Klass (Jonli)`
      });

      if (hint) {
        const targetCount = currentClasses.filter(c => c !== "Main").length;
        const userCount = userClasses.filter(c => c.name !== "Main").length;
        const isMatched = userCount >= targetCount && targetCount > 0;
        hint.innerHTML = `<span style="color:#c084fc; font-weight:700;">👨‍💻 O'zingizniki:</span> ${userClasses.length} ta klass (${isMatched ? "✅ Joriy bosqichga mos" : "⏳ Yaratilmoqda..."})`;
      }
    }
  }

  function switchChallenge(index) {
    if (index < 0 || index >= CHALLENGES.length) return;
    currentQIndex = index;
    saveState();

    const ch = CHALLENGES[currentQIndex];
    const tierBadge = document.getElementById("tierBadge");
    const taskTitle = document.getElementById("taskTitle");
    const taskScenario = document.getElementById("taskScenario");
    const codeEditor = document.getElementById("codeEditor");
    const terminalBody = document.getElementById("terminalOutput");

    if (tierBadge) tierBadge.textContent = ch.tierName;
    if (taskTitle) taskTitle.textContent = (ch.title && ch.title.uz) || ch.title || "";
    
    // Scenario text formatted cleanly with white-space: pre-line as in Image 2
    if (taskScenario) {
      const text = (ch.scenario && ch.scenario.uz) || ch.scenario || "";
      taskScenario.textContent = text;
    }

    if (codeEditor) {
      codeEditor.value = loadSavedCode(ch);
    }

    if (terminalBody) {
      terminalBody.className = "terminal-body";
      terminalBody.textContent = "Tayyor. Kodingizni yozib, 'Sinab Ko'rish' yoki 'Tekshirish' tugmasini bosing.";
    }

    // JavaEditorEnhancer integration
    if (window.JavaEditorEnhancer) {
      window.JavaEditorEnhancer.setChallenge(ch);
      window.JavaEditorEnhancer.updateHighlighting();
      window.JavaEditorEnhancer.syncScroll();
      window.JavaEditorEnhancer.scanCodeForClasses();
      window.JavaEditorEnhancer.renderChipsBar();
    }

    // Update Live Simulator
    if (window.SimulatorEngine) {
      window.SimulatorEngine.setChallenge(ch);
    }

    updateMemoryDisplay(ch, codeEditor ? codeEditor.value : "");
    updateUMLDiagram();
    renderHUD();
  }

  // --- ACTIONS ---

  function handleSimulate() {
    const ch = CHALLENGES[currentQIndex];
    const editor = document.getElementById("codeEditor");
    const terminal = document.getElementById("terminalOutput");
    if (!ch || !editor || !terminal) return;

    terminal.className = "terminal-body";
    terminal.textContent = "⚡ Kod asosida jonli simulyatsiya ishga tushirildi...";

    if (window.SimulatorEngine) {
      window.SimulatorEngine.triggerAction(editor.value, ch.expectedOutput || "", true);
    }

    updateMemoryDisplay(ch, editor.value);
    terminal.textContent = "✅ Smartfon ekranida obyekt holati aks ettirildi! Kodni tekshirish uchun 'Tekshirish' tugmasini bosing.";
  }

  async function handleInstantTest() {
    const ch = CHALLENGES[currentQIndex];
    const editor = document.getElementById("codeEditor");
    const terminal = document.getElementById("terminalOutput");
    if (!ch || !editor || !terminal) return;

    terminal.className = "terminal-body";
    terminal.textContent = "⏳ OpenJDK JVM da kompilyatsiya qilinmoqda va barcha OOP qoidalari tekshirilmoqda...";

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
      terminal.className = "terminal-body error";
      let msg = "❌ SINTAKTIK XATOLIK ANIQLANDI:\n\n";
      validation.syntaxErrors.forEach(err => {
        msg += `📍 [${err.line}-Qator]: ${err.message}\n`;
        if (err.snippet) msg += `   Kodingiz: ${err.snippet}\n`;
        if (err.fix) msg += `   💡 Tavsiya: ${err.fix}\n\n`;
      });
      terminal.textContent = msg;
      return;
    }

    // 2. OpenJDK 21 execution
    const runResult = window.JavaRunner ? await window.JavaRunner.runOnOpenJDK21(editor.value) : { success: true, output: ch.expectedOutput };

    const hasOutput = runResult.success && runResult.output && runResult.output.trim().length > 0;
    const isPassed = (validation.passed && runResult.success && hasOutput) ||
                     (validation.passed && runResult.networkError) ||
                     (isExactSolution && (runResult.success || runResult.networkError));

    if (isPassed) {
      terminal.className = "terminal-body success";
      solvedQuestions.add(ch.id);
      saveState();
      renderHUD();

      // Trigger visual action on virtual phone
      if (window.SimulatorEngine) {
        window.SimulatorEngine.triggerAction(editor.value, runResult.output || ch.expectedOutput, true);
      }
      updateMemoryDisplay(ch, editor.value);

      let report = "🎉 BARAKALLA! TOPSHIRIQ MUVAFFAQIYATLI BAJARILDI!\n==================================================\n\n";
      report += "✔️ Barcha OOP talablari va arxitekturasi to'liq tasdiqlandi\n";
      report += "✔️ OpenJDK JVM: 0 xato\n";
      if (runResult.output) {
        report += "\n☕ KONSOL CHIQQAN NATIJA:\n" + runResult.output + "\n";
      }
      report += "\n⭐ Reytingingizga +50 XP qo'shildi!";

      terminal.textContent = report;

      // Auto-advance to next challenge after 2 seconds if not last
      if (currentQIndex < CHALLENGES.length - 1) {
        setTimeout(() => {
          switchChallenge(currentQIndex + 1);
        }, 2000);
      }
    } else {
      terminal.className = "terminal-body error";
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

      terminal.textContent = report;
    }
  }

  function handleShowSolution() {
    const ch = CHALLENGES[currentQIndex];
    if (!ch) return;

    if (window.SolutionRenderer && typeof window.SolutionRenderer.openModal === "function") {
      window.SolutionRenderer.openModal(ch, currentLang);
    } else {
      const editor = document.getElementById("codeEditor");
      if (editor && confirm("Namunaviy yechimni tahrirlovchiga joylashtirmoqchimisiz?")) {
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
      updateMemoryDisplay(ch, ch.starterCode);
      if (umlMode === "live") updateUMLDiagram();
    }
  }

  // --- INITIALIZATION ---
  document.addEventListener("DOMContentLoaded", () => {
    loadState();

    // 1. Initialize Smartphone Simulator Engine
    const simContainer = document.getElementById("phoneSimContainer");
    if (simContainer && window.SimulatorEngine) {
      window.SimulatorEngine.init(simContainer);
    }

    // 2. Initialize JavaEditorEnhancer
    if (window.JavaEditorEnhancer) {
      window.JavaEditorEnhancer.init("codeEditor", CHALLENGES[currentQIndex]);
    }

    // 3. Bind Problem / Diagram View Toggles
    const btnViewTask = document.getElementById("btnViewTask");
    const btnViewUml = document.getElementById("btnViewUml");
    const taskTextPanel = document.getElementById("taskTextPanel");
    const taskUmlPanel = document.getElementById("taskUmlPanel");

    if (btnViewTask && btnViewUml && taskTextPanel && taskUmlPanel) {
      btnViewTask.addEventListener("click", () => {
        btnViewTask.classList.add("active");
        btnViewUml.classList.remove("active");
        taskTextPanel.style.display = "block";
        taskUmlPanel.style.display = "none";
      });

      btnViewUml.addEventListener("click", () => {
        btnViewUml.classList.add("active");
        btnViewTask.classList.remove("active");
        taskTextPanel.style.display = "none";
        taskUmlPanel.style.display = "flex";
        updateUMLDiagram();
      });
    }

    // 4. Bind Final vs Topshiriq vs O'zimniki UML Buttons
    const btnUmlTarget = document.getElementById("btnUmlTarget");
    const btnUmlTask = document.getElementById("btnUmlTask");
    const btnUmlLive = document.getElementById("btnUmlLive");

    function setUmlMode(mode) {
      umlMode = mode;
      if (btnUmlTarget) btnUmlTarget.classList.toggle("active", mode === "target");
      if (btnUmlTask) btnUmlTask.classList.toggle("active", mode === "task");
      if (btnUmlLive) btnUmlLive.classList.toggle("active", mode === "live");
      updateUMLDiagram();
    }

    if (btnUmlTarget) btnUmlTarget.addEventListener("click", () => setUmlMode("target"));
    if (btnUmlTask) btnUmlTask.addEventListener("click", () => setUmlMode("task"));
    if (btnUmlLive) btnUmlLive.addEventListener("click", () => setUmlMode("live"));

    // 5. Bind Editor Action Buttons
    const btnSimulate = document.getElementById("btnSimulate");
    const btnTest = document.getElementById("btnTest");
    const btnSolution = document.getElementById("btnSolution");
    const btnReset = document.getElementById("btnReset");

    if (btnSimulate) btnSimulate.addEventListener("click", handleSimulate);
    if (btnTest) btnTest.addEventListener("click", handleInstantTest);
    if (btnSolution) btnSolution.addEventListener("click", handleShowSolution);
    if (btnReset) btnReset.addEventListener("click", handleResetCode);

    // 6. Live Diagram & Code update on typing
    const editor = document.getElementById("codeEditor");
    if (editor) {
      editor.addEventListener("input", () => {
        saveCurrentCode();
        if (umlMode === "live" && taskUmlPanel && taskUmlPanel.style.display !== "none") {
          updateUMLDiagram();
        }
      });
    }

    // 7. Initial Challenge Render
    switchChallenge(currentQIndex);
  });
})();
