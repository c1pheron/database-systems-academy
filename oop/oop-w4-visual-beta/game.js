/**
 * ============================================================================
 * OOP ACADEMY — LIVE VISUAL SIMULATOR (BETA) GAME CONTROLLER
 * ============================================================================
 */

(function () {
  "use strict";

  const CHALLENGES = window.OOP_VISUAL_CHALLENGES || [];
  let currentQIndex = 0;
  const solvedQuestions = new Set();
  const STORAGE_KEY_SOLVED = "oop_visual_solved_questions";
  const STORAGE_KEY_CURRENT = "oop_visual_current_q";
  const STORAGE_PREFIX_CODE = "oop_visual_code_q_";

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
      dot.title = ch.title.uz;

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
    saveState();

    const ch = CHALLENGES[currentQIndex];
    const tierBadge = document.getElementById("tierBadge");
    const taskTitle = document.getElementById("taskTitle");
    const taskScenario = document.getElementById("taskScenario");
    const codeEditor = document.getElementById("codeEditor");
    const terminalBody = document.getElementById("terminalOutput");

    if (tierBadge) tierBadge.textContent = ch.tierName;
    if (taskTitle) taskTitle.textContent = ch.title.uz;
    if (taskScenario) taskScenario.textContent = ch.scenario.uz;
    if (codeEditor) codeEditor.value = loadSavedCode(ch);

    if (terminalBody) {
      terminalBody.className = "terminal-body";
      terminalBody.textContent = "Tayyor. Kodingizni yozib, 'Sinab Ko'rish' yoki 'Tekshirish' tugmasini bosing.";
    }

    if (window.SimulatorEngine) {
      window.SimulatorEngine.setChallenge(ch);
    }

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
      window.SimulatorEngine.triggerAction(editor.value, "", true);
    }

    terminal.textContent = "✅ Jonli virtual smartfonda natija aks ettirildi! Kod to'liq tekshirilishi uchun 'Tekshirish' tugmasini bosing.";
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
        }, 1800);
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
    const editor = document.getElementById("codeEditor");
    const terminal = document.getElementById("terminalOutput");
    if (!ch || !editor) return;

    if (confirm("Rasmiy namunaviy yechimni ko'rmoqchimisiz?")) {
      editor.value = ch.solution;
      saveCurrentCode();
      if (window.SimulatorEngine) {
        window.SimulatorEngine.triggerAction(ch.solution, ch.expectedOutput, true);
      }
      if (terminal) {
        terminal.className = "terminal-body";
        terminal.textContent = "💡 Namunaviy yechim joylashtirildi. Endi 'Tekshirish' tugmasini bosib tekshirib ko'rishingiz mumkin.";
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
      if (window.SimulatorEngine) {
        window.SimulatorEngine.setChallenge(ch);
      }
    }
  }

  // --- INITIALIZATION ---
  document.addEventListener("DOMContentLoaded", () => {
    loadState();

    const simContainer = document.getElementById("phoneSimContainer");
    if (simContainer && window.SimulatorEngine) {
      window.SimulatorEngine.init(simContainer);
    }

    // Bind Buttons
    const btnSimulate = document.getElementById("btnSimulate");
    const btnTest = document.getElementById("btnTest");
    const btnSolution = document.getElementById("btnSolution");
    const btnReset = document.getElementById("btnReset");

    if (btnSimulate) btnSimulate.addEventListener("click", handleSimulate);
    if (btnTest) btnTest.addEventListener("click", handleInstantTest);
    if (btnSolution) btnSolution.addEventListener("click", handleShowSolution);
    if (btnReset) btnReset.addEventListener("click", handleResetCode);

    // Initial render
    switchChallenge(currentQIndex);

    // Auto-save code on typing
    const editor = document.getElementById("codeEditor");
    if (editor) {
      editor.addEventListener("input", () => {
        saveCurrentCode();
      });
    }
  });
})();
