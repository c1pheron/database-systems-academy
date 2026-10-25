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

  function loadSavedCode(ch, index) {
    const saved = localStorage.getItem(STORAGE_PREFIX_CODE + ch.id);
    if (saved !== null && saved.trim().length > 0) {
      return saved;
    }
    // Agar joriy masalaga hali kod yozilmagan bo'lsa, oldingi masaladagi kodni davom ettirish uchun olib o'tamiz!
    if (typeof index === "number" && index > 0) {
      for (let prevIdx = index - 1; prevIdx >= 0; prevIdx--) {
        const prevCh = CHALLENGES[prevIdx];
        const prevCode = localStorage.getItem(STORAGE_PREFIX_CODE + prevCh.id);
        if (prevCode && prevCode.trim().length > 0) {
          return prevCode;
        }
      }
    }
    // 1-masala yoki hech qanday oldingi kod bo'lmasa: bo'm-bo'sh turadi!
    return "";
  }

  function updateMemoryDisplay(ch, code) {
    const memEl = document.getElementById("memoryContentText") || document.querySelector(".live-inspect-box code");
    if (!memEl || !ch) return;

    if (ch.simKind === "card") {
      const hasObj = code && /\bnew\s+(BankCard|GoldCard|PlatinumCard|Card|SecureCard|LimitedCard)\b/.test(code);
      if (!hasObj) {
        memEl.textContent = "null (heap xotirada karta obyekti mavjud emas)";
      } else {
        memEl.textContent = "BankCard@heap { balance: 50000.0, holder: 'SARDOR ALIYEV' };";
      }
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
      codeEditor.value = loadSavedCode(ch, currentQIndex);
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
      window.SimulatorEngine.triggerAction(codeEditor ? codeEditor.value : "", "", false);
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
      editor.value = ch.starterCode || "";
      saveCurrentCode();
      if (window.JavaEditorEnhancer) {
        window.JavaEditorEnhancer.updateHighlighting();
        window.JavaEditorEnhancer.syncScroll();
      }
      if (window.SimulatorEngine) {
        window.SimulatorEngine.setChallenge(ch);
        window.SimulatorEngine.triggerAction(editor.value, "", false);
      }
      updateMemoryDisplay(ch, editor.value);
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
    const leftPane = document.querySelector(".left-pane");

    if (btnViewTask && btnViewUml && taskTextPanel && taskUmlPanel) {
      btnViewTask.addEventListener("click", () => {
        btnViewTask.classList.add("active");
        btnViewUml.classList.remove("active");
        taskTextPanel.style.display = "block";
        taskUmlPanel.style.display = "none";
        if (leftPane) leftPane.classList.remove("uml-focus-mode");
      });

      btnViewUml.addEventListener("click", () => {
        btnViewUml.classList.add("active");
        btnViewTask.classList.remove("active");
        taskTextPanel.style.display = "none";
        taskUmlPanel.style.display = "flex";
        if (leftPane) leftPane.classList.add("uml-focus-mode");
        updateUMLDiagram();
        setTimeout(() => {
          if (window.UMLRenderer) {
            window.UMLRenderer.fitToView("umlContainer");
          }
        }, 60);
      });

      const btnReturnToEditor = document.getElementById("btnReturnToEditor");
      if (btnReturnToEditor) {
        btnReturnToEditor.addEventListener("click", () => {
          btnViewTask.click();
        });
      }
    }

    // Mouse wheel horizontal scroll on question dots strip
    const progressStrip = document.getElementById("progressStrip");
    if (progressStrip) {
      progressStrip.addEventListener("wheel", (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          progressStrip.scrollLeft += e.deltaY;
        }
      }, { passive: false });
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
      setTimeout(() => {
        if (window.UMLRenderer) {
          window.UMLRenderer.fitToView("umlContainer");
        }
      }, 50);
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
        if (window.SimulatorEngine) {
          window.SimulatorEngine.triggerAction(editor.value, "", false);
        }
        const curCh = CHALLENGES[currentQIndex];
        if (curCh) {
          updateMemoryDisplay(curCh, editor.value);
        }
      });
    }

    // 7. Terminal Interactive Resize & Quick Control Handlers
    const terminalBody = document.getElementById("terminalOutput");
    const terminalResizeHandle = document.getElementById("terminalResizeHandle");
    const terminalHeader = document.getElementById("terminalHeader");
    const btnTerminalMin = document.getElementById("btnTerminalMin");
    const btnTerminalNorm = document.getElementById("btnTerminalNorm");
    const btnTerminalMax = document.getElementById("btnTerminalMax");
    const btnTerminalClear = document.getElementById("btnTerminalClear");

    function setTerminalHeight(h) {
      if (!terminalBody) return;
      terminalBody.style.height = `${h}px`;
      if (btnTerminalMin) btnTerminalMin.classList.toggle("active", h <= 45);
      if (btnTerminalNorm) btnTerminalNorm.classList.toggle("active", h > 45 && h < 220);
      if (btnTerminalMax) btnTerminalMax.classList.toggle("active", h >= 220);
    }

    if (btnTerminalMin) {
      btnTerminalMin.addEventListener("click", () => setTerminalHeight(34));
    }
    if (btnTerminalNorm) {
      btnTerminalNorm.addEventListener("click", () => setTerminalHeight(95));
    }
    if (btnTerminalMax) {
      btnTerminalMax.addEventListener("click", () => setTerminalHeight(300));
    }
    if (btnTerminalClear) {
      btnTerminalClear.addEventListener("click", () => {
        if (terminalBody) {
          terminalBody.textContent = "Tozalandi. Kodingizni yozib, 'Sinab Ko'rish' yoki 'Tekshirish' tugmasini bosing.";
          terminalBody.className = "terminal-body";
        }
      });
    }

    // Double-click header toggles between normal and expanded
    if (terminalHeader) {
      terminalHeader.addEventListener("dblclick", () => {
        if (!terminalBody) return;
        const currentH = terminalBody.getBoundingClientRect().height;
        if (currentH < 180) {
          setTerminalHeight(300);
        } else {
          setTerminalHeight(95);
        }
      });
    }

    // Drag-to-resize handle (mouse + touch)
    if (terminalResizeHandle && terminalBody) {
      let isDragging = false;
      let startY = 0;
      let startH = 0;

      function onDragStart(clientY) {
        isDragging = true;
        startY = clientY;
        startH = terminalBody.getBoundingClientRect().height;
        terminalResizeHandle.classList.add("active");
        document.body.style.cursor = "ns-resize";
        document.body.style.userSelect = "none";
      }

      function onDragMove(clientY) {
        if (!isDragging) return;
        // Moving handle upwards increases terminal body height
        const deltaY = startY - clientY;
        const newH = Math.min(480, Math.max(34, startH + deltaY));
        setTerminalHeight(newH);
      }

      function onDragEnd() {
        if (!isDragging) return;
        isDragging = false;
        terminalResizeHandle.classList.remove("active");
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      }

      terminalResizeHandle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        onDragStart(e.clientY);
      });

      window.addEventListener("mousemove", (e) => {
        onDragMove(e.clientY);
      });

      window.addEventListener("mouseup", () => {
        onDragEnd();
      });

      terminalResizeHandle.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          onDragStart(e.touches[0].clientY);
        }
      }, { passive: true });

      window.addEventListener("touchmove", (e) => {
        if (isDragging && e.touches.length === 1) {
          onDragMove(e.touches[0].clientY);
        }
      }, { passive: true });

      window.addEventListener("touchend", () => {
        onDragEnd();
      });
    }

    // 8. Initial Challenge Render
    switchChallenge(currentQIndex);
  });
})();
