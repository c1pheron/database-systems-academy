// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 GAME CONTROLLER
// Interactive Bash Terminal, PAM Accounts & Sticky Bit Virtual Linux FS,
// 150 Question Pipeline, Audio Synthesizer, Modals, 10 Sectors & Career Engine.
// ============================================================================

(function () {
  "use strict";

  // --- Sound Effects Synthesizer (Web Audio API) ---
  const SoundFX = {
    ctx: null,
    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    },
    playTone(freq, type = "sine", duration = 0.15, gain = 0.15) {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === "suspended") this.ctx.resume();
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        g.gain.setValueAtTime(gain, this.ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    },
    playKey() {
      this.playTone(850, "sine", 0.04, 0.05);
    },
    playSuccess() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === "suspended") this.ctx.resume();
        const now = this.ctx.currentTime;
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          osc.type = "triangle";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          g.gain.setValueAtTime(0.2, now + idx * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
          osc.connect(g);
          g.connect(this.ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.25);
        });
      } catch (e) {}
    },
    playError() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === "suspended") this.ctx.resume();
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(110, now + 0.25);
        g.gain.setValueAtTime(0.25, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    },
    playPromotion() {
      try {
        this.init();
        if (!this.ctx) return;
        if (this.ctx.state === "suspended") this.ctx.resume();
        const now = this.ctx.currentTime;
        [440, 554.37, 659.25, 880, 1108.73, 1318.51].forEach((freq, idx) => {
          const osc = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.1);
          g.gain.setValueAtTime(0.22, now + idx * 0.1);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
          osc.connect(g);
          g.connect(this.ctx.destination);
          osc.start(now + idx * 0.1);
          osc.stop(now + idx * 0.1 + 0.35);
        });
      } catch (e) {}
    }
  };

  // --- Assemble All 150 Questions for Week 2 ---
  const allQuestions = [
    ...(window.QUESTIONS_1_50_W2 || []),
    ...(window.QUESTIONS_51_100_W2 || []),
    ...(window.QUESTIONS_101_150_W2 || [])
  ];

  // --- Game State ---
  const STORAGE_KEY = "WIUT_OS_W2_PROGRESS";
  const state = {
    solvedIds: new Set(),
    currentQuestionId: 1,
    activeSector: 1,
    bonusCapital: 0,
    commandHistory: [],
    historyIndex: -1,
    activeFsTab: "passwd",
    terminalMode: "quest",
    terminalFullscreen: false,
    layoutMode: "split",
    lastOutput: "",
    liveShell: null,
    arena: null
  };

  function loadProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (Array.isArray(data.solvedIds)) state.solvedIds = new Set(data.solvedIds);
        if (data.currentQuestionId) state.currentQuestionId = data.currentQuestionId;
        if (data.activeSector) state.activeSector = data.activeSector;
        if (typeof data.bonusCapital === "number") state.bonusCapital = data.bonusCapital;
        if (Array.isArray(data.commandHistory)) state.commandHistory = data.commandHistory;
      }
    } catch (e) {
      console.warn("Could not load progress:", e);
    }
  }

  function saveProgress() {
    try {
      const data = {
        solvedIds: Array.from(state.solvedIds),
        currentQuestionId: state.currentQuestionId,
        activeSector: state.activeSector,
        bonusCapital: state.bonusCapital,
        commandHistory: state.commandHistory.slice(-50)
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn("Could not save progress:", e);
    }
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- DOM Elements ---
  const el = {};
  function cacheElements() {
    el.hudRankTitle = document.getElementById("hudRankTitle");
    el.hudSalary = document.getElementById("hudSalary");
    el.hudCapital = document.getElementById("hudCapital");
    el.hudSolved = document.getElementById("hudSolved");
    el.hudProgressFill = document.getElementById("hudProgressFill");
    el.btnTriggerEvent = document.getElementById("btnTriggerEvent");
    el.eventBadgeCount = document.getElementById("eventBadgeCount");
    el.btnOpenMap = document.getElementById("btnOpenMap");
    el.btnResetProgress = document.getElementById("btnResetProgress");

    el.sectorNavList = document.getElementById("sectorNavList");
    el.floorHeaderTitle = document.getElementById("floorHeaderTitle");
    el.tickerSpeaker = document.getElementById("tickerSpeaker");
    el.tickerMessage = document.getElementById("tickerMessage");
    el.btnQuickEvent = document.getElementById("btnQuickEvent");

    el.schemaTableDisplay = document.getElementById("schemaTableDisplay");
    el.schemaTabs = document.querySelectorAll(".schema-tab");

    el.sectorSubTitle = document.getElementById("sectorSubTitle");
    el.floorQuestionStrip = document.getElementById("floorQuestionStrip");
    el.btnPrevQ = document.getElementById("btnPrevQ");
    el.btnNextQ = document.getElementById("btnNextQ");

    el.qNumberBadge = document.getElementById("qNumberBadge");
    el.qDifficultyBadge = document.getElementById("qDifficultyBadge");
    el.qSourceBadge = document.getElementById("qSourceBadge");
    el.qTitle = document.getElementById("qTitle");
    el.qStory = document.getElementById("qStory");
    el.qTask = document.getElementById("qTask");
    el.qTagsList = document.getElementById("qTagsList");

    el.terminalPromptUser = document.getElementById("terminalPromptUser");
    el.terminalPromptPath = document.getElementById("terminalPromptPath");
    el.bashInput = document.getElementById("bashInput");
    el.terminalOutput = document.getElementById("terminalOutput");
    el.btnClearTerminal = document.getElementById("btnClearTerminal");

    el.btnRunBash = document.getElementById("btnRunBash");
    el.btnShowHint = document.getElementById("btnShowHint");
    el.btnPreviewExpected = document.getElementById("btnPreviewExpected");
    el.btnRevealAnswer = document.getElementById("btnRevealAnswer");

    el.hintBox = document.getElementById("hintBox");
    el.feedbackBox = document.getElementById("feedbackBox");

    // Kali Terminal & Fullscreen Elements
    el.terminalWorkbenchCard = document.getElementById("terminalWorkbenchCard");
    el.btnModeQuest = document.getElementById("btnModeQuest");
    el.btnModeSandbox = document.getElementById("btnModeSandbox");
    el.tabTerminalMode = document.getElementById("tabTerminalMode");
    el.tabFsMode = document.getElementById("tabFsMode");
    el.paneKaliTerminal = document.getElementById("paneKaliTerminal");
    el.paneFsExplorer = document.getElementById("paneFsExplorer");
    el.btnCardBatafsil = document.getElementById("btnCardBatafsil");
    el.btnCardHint = document.getElementById("btnCardHint");
    el.btnToggleFullscreen = document.getElementById("btnToggleFullscreen");

    el.kaliFullscreenBar = document.getElementById("kaliFullscreenBar");
    el.ktFsTaskBadge = document.getElementById("ktFsTaskBadge");
    el.ktFsProgress = document.getElementById("ktFsProgress");
    el.btnFsToggleMode = document.getElementById("btnFsToggleMode");
    el.btnFsTask = document.getElementById("btnFsTask");
    el.btnFsBatafsil = document.getElementById("btnFsBatafsil");
    el.btnFsHint = document.getElementById("btnFsHint");
    el.btnFsPreview = document.getElementById("btnFsPreview");
    el.btnFsMap = document.getElementById("btnFsMap");
    el.btnExitFullscreen = document.getElementById("btnExitFullscreen");

    el.kaliScreen = document.getElementById("kaliScreen");
    el.kaliStream = document.getElementById("kaliStream");
    el.kaliPromptPath = document.getElementById("kaliPromptPath");
    el.kaliTypedText = document.getElementById("kaliTypedText");
    el.kaliCursor = document.getElementById("kaliCursor");
    el.kaliHiddenInput = document.getElementById("kaliHiddenInput");
    el.kaliTouchBar = document.getElementById("kaliTouchBar");
    el.btnTouchPrev = document.getElementById("btnTouchPrev");
    el.btnTouchNext = document.getElementById("btnTouchNext");

    el.modalKtTask = document.getElementById("modalKtTask");
    el.ktModalTaskHeading = document.getElementById("ktModalTaskHeading");
    el.ktModalDiffBadge = document.getElementById("ktModalDiffBadge");
    el.ktModalSourceBadge = document.getElementById("ktModalSourceBadge");
    el.ktModalStory = document.getElementById("ktModalStory");
    el.ktModalTaskText = document.getElementById("ktModalTaskText");
    el.ktModalTags = document.getElementById("ktModalTags");
    el.btnCloseKtTask = document.getElementById("btnCloseKtTask");
    el.btnKtModalDone = document.getElementById("btnKtModalDone");
    el.btnKtModalHint = document.getElementById("btnKtModalHint");
    el.btnKtModalSol = document.getElementById("btnKtModalSol");

    el.modalKtBatafsil = document.getElementById("modalKtBatafsil");
    el.btnCloseKtBatafsil = document.getElementById("btnCloseKtBatafsil");
    el.btnOkKtBatafsil = document.getElementById("btnOkKtBatafsil");
    el.ktBatafsilContent = document.getElementById("ktBatafsilContent");
    el.ktBatafsilCode = document.getElementById("ktBatafsilCode");

    // Modals
    el.modalMap = document.getElementById("modalMap");
    el.mapSearch = document.getElementById("mapSearch");
    el.mapFilterPills = document.querySelectorAll(".map-filter-pill");
    el.mapQuestionsGrid = document.getElementById("mapQuestionsGrid");
    el.btnCloseMap = document.getElementById("btnCloseMap");

    el.modalEvent = document.getElementById("modalEvent");
    el.eventSpeaker = document.getElementById("eventSpeaker");
    el.eventRole = document.getElementById("eventRole");
    el.eventAvatar = document.getElementById("eventAvatar");
    el.eventTitle = document.getElementById("eventTitle");
    el.eventNarrative = document.getElementById("eventNarrative");
    el.eventChoicesContainer = document.getElementById("eventChoicesContainer");
    el.eventFeedback = document.getElementById("eventFeedback");
    el.btnCloseEvent = document.getElementById("btnCloseEvent");

    el.modalSolution = document.getElementById("modalSolution");
    el.solQuestionTitle = document.getElementById("solQuestionTitle");
    el.solCode = document.getElementById("solCode");
    el.solExplanation = document.getElementById("solExplanation");
    el.btnCloseSolution = document.getElementById("btnCloseSolution");
  }

  // --- Rank & Career Management ---
  function getCurrentRank(solvedCount) {
    const ranks = window.VIRTUAL_LINUX_W2.careerRanks;
    let rank = ranks[0];
    for (const r of ranks) {
      if (solvedCount >= r.minSolved) rank = r;
    }
    return rank;
  }

  function updateHUD() {
    const solved = state.solvedIds.size;
    const total = allQuestions.length;
    const rank = getCurrentRank(solved);

    if (el.hudRankTitle) el.hudRankTitle.textContent = `${rank.badge} ${rank.title}`;
    if (el.hudSalary) el.hudSalary.textContent = rank.salary;
    if (el.hudCapital) el.hudCapital.textContent = `$${state.bonusCapital.toLocaleString()}`;
    if (el.hudSolved) el.hudSolved.textContent = `${solved} / ${total}`;

    const pct = Math.round((solved / total) * 100);
    if (el.hudProgressFill) el.hudProgressFill.style.width = `${pct}%`;

    const nextRank = window.VIRTUAL_LINUX_W2.careerRanks.find(r => r.minSolved > solved);
    if (nextRank && el.tickerMessage) {
      el.tickerMessage.textContent = `Navbatdagi unvon (${nextRank.title}) uchun yana ${nextRank.minSolved - solved} ta topshiriq zarur.`;
    }
  }

  // --- Sectors Navigation ---
  function renderSectorBar() {
    if (!el.sectorNavList) return;
    el.sectorNavList.innerHTML = "";

    const sectors = window.VIRTUAL_LINUX_W2.sectors;
    sectors.forEach(sec => {
      const pill = document.createElement("button");
      pill.className = `sector-pill ${sec.sector === state.activeSector ? "active" : ""}`;

      const startId = (sec.sector - 1) * 15 + 1;
      const endId = sec.sector * 15;
      let secSolved = 0;
      for (let i = startId; i <= endId; i++) {
        if (state.solvedIds.has(i)) secSolved++;
      }

      pill.innerHTML = `
        <span>${sec.icon}</span>
        <span><b>S${sec.sector}:</b> ${sec.name}</span>
        <span class="pill-count">${secSolved}/15</span>
      `;

      pill.addEventListener("click", () => {
        selectSector(sec.sector);
      });

      el.sectorNavList.appendChild(pill);
    });
  }

  function selectSector(sectorNum) {
    state.activeSector = sectorNum;
    renderSectorBar();

    const sec = window.VIRTUAL_LINUX_W2.sectors.find(s => s.sector === sectorNum);
    if (sec && el.floorHeaderTitle) {
      el.floorHeaderTitle.textContent = `Sektor ${sec.sector}: ${sec.name} (${sec.badge})`;
    }
    if (sec && el.sectorSubTitle) {
      el.sectorSubTitle.textContent = `${sec.name} — Buyruqlar: ${sec.focus}`;
    }

    if (state.arena) {
      state.arena.setSector(sectorNum);
    }

    const startId = (sectorNum - 1) * 15 + 1;
    const endId = sectorNum * 15;
    let targetId = startId;
    for (let i = startId; i <= endId; i++) {
      if (!state.solvedIds.has(i)) {
        targetId = i;
        break;
      }
    }
    loadQuestion(targetId);
  }

  // --- Question Dots Strip ---
  function renderQuestionStrip() {
    if (!el.floorQuestionStrip) return;
    el.floorQuestionStrip.innerHTML = "";

    const startId = (state.activeSector - 1) * 15 + 1;
    const endId = state.activeSector * 15;

    for (let id = startId; id <= endId; id++) {
      const dot = document.createElement("div");
      const isSolved = state.solvedIds.has(id);
      const isActive = id === state.currentQuestionId;

      dot.className = `q-dot ${isSolved ? "solved" : ""} ${isActive ? "active" : ""}`;
      dot.textContent = id;
      dot.title = `Vazifa #${id}: ${isSolved ? "Bajarilgan" : "Kutilmoqda"}`;

      dot.addEventListener("click", () => {
        loadQuestion(id);
      });

      el.floorQuestionStrip.appendChild(dot);
    }
  }

  // --- Load Question ---
  function loadQuestion(id) {
    const q = allQuestions.find(item => item.id === id);
    if (!q) return;

    state.currentQuestionId = id;
    const secNum = Math.ceil(id / 15);
    if (secNum !== state.activeSector) {
      state.activeSector = secNum;
      renderSectorBar();
      if (state.arena) state.arena.setSector(secNum);
    }

    renderQuestionStrip();
    saveProgress();

    if (el.qNumberBadge) el.qNumberBadge.textContent = `Vazifa #${q.id} / 150`;
    if (el.qDifficultyBadge) el.qDifficultyBadge.textContent = q.difficulty || "Standart";
    if (el.qSourceBadge) el.qSourceBadge.textContent = q.source || "WIUT OS";
    if (el.qTitle) el.qTitle.textContent = `${q.id}. ${q.title}`;
    if (el.qStory) el.qStory.textContent = q.story || "";
    if (el.qTask) el.qTask.innerHTML = q.taskUz || "";

    if (el.qTagsList) {
      el.qTagsList.innerHTML = "";
      if (Array.isArray(q.tags)) {
        q.tags.forEach(tag => {
          const tSpan = document.createElement("span");
          tSpan.className = "token-btn";
          tSpan.textContent = `#${tag}`;
          el.qTagsList.appendChild(tSpan);
        });
      }
    }

    // Render Command & Flag Anatomy Card (Master User Feature)
    const cmdCardCode = document.getElementById("cmdCardCode");
    const cmdCardBody = document.getElementById("cmdCardBody");
    const btnToggleCmdCard = document.getElementById("btnToggleCmdCard");
    const cmdCardToggleHint = document.getElementById("cmdCardToggleHint");
    if (cmdCardBody && window.COMMAND_ANATOMY) {
      const anatomy = window.COMMAND_ANATOMY.analyze(q.expectedBash, q);
      if (cmdCardCode) cmdCardCode.textContent = anatomy.fullCommand || q.expectedBash;
      cmdCardBody.innerHTML = window.COMMAND_ANATOMY.renderCardHtml(anatomy);
      cmdCardBody.style.display = "none";
      if (btnToggleCmdCard) btnToggleCmdCard.classList.remove("open");
      if (cmdCardToggleHint) cmdCardToggleHint.textContent = "Batafsil ko'rish";
    }

    if (el.hintBox) {
      el.hintBox.style.display = "none";
      el.hintBox.innerHTML = "";
    }
    if (el.feedbackBox) {
      el.feedbackBox.style.display = "none";
      el.feedbackBox.className = "feedback-box";
      el.feedbackBox.innerHTML = "";
    }

    if (el.bashInput) {
      el.bashInput.value = "";
      el.bashInput.focus();
    }

    updateTerminalPrompt();

    // Focus Kali Input (anti-scroll-jump)
    if (el.kaliHiddenInput) {
      el.kaliHiddenInput.value = "";
      if (el.kaliTypedText) el.kaliTypedText.textContent = "";
      focusKaliInput();
    }

    // Update Kali Terminal HUD & Fullscreen Bar & Modals
    const cmdWord = (q.expectedBash || "").split(" ")[0] || "cat";
    if (el.ktFsTaskBadge) el.ktFsTaskBadge.textContent = "#" + q.id + ": " + cmdWord;
    if (el.ktFsProgress) el.ktFsProgress.textContent = state.solvedIds.size + " / 150";
    if (el.ktModalTaskHeading) el.ktModalTaskHeading.textContent = "Vazifa #" + q.id + ": " + q.title;
    if (el.ktModalDiffBadge) el.ktModalDiffBadge.textContent = q.difficulty || "Standart";
    if (el.ktModalSourceBadge) el.ktModalSourceBadge.textContent = q.source || "WIUT OS";
    if (el.ktModalStory) el.ktModalStory.textContent = q.story || "";
    if (el.ktModalTaskText) el.ktModalTaskText.innerHTML = q.taskUz || "";
    if (el.ktBatafsilCode) el.ktBatafsilCode.textContent = q.expectedBash || "";
    if (el.ktBatafsilContent && window.COMMAND_ANATOMY) {
      const anatomy = window.COMMAND_ANATOMY.analyze(q.expectedBash, q);
      el.ktBatafsilContent.innerHTML = window.COMMAND_ANATOMY.renderCardHtml(anatomy);
    }
  }

  function updateTerminalPrompt() {
    if (!state.liveShell) return;
    const cwd = state.liveShell.cwd;
    const displayPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    if (el.terminalPromptPath) {
      el.terminalPromptPath.textContent = `${displayPath}$ `;
    }
    if (el.kaliPromptPath) {
      el.kaliPromptPath.textContent = displayPath;
    }
  }

  // --- Terminal Execution ---
  function appendTerminalOutput(line, type = "normal") {
    if (!el.terminalOutput) return;
    const div = document.createElement("div");
    if (type === "cmd") {
      div.style.color = "#38bdf8";
      div.textContent = line;
    } else if (type === "error") {
      div.style.color = "#ef4444";
      div.textContent = line;
    } else if (type === "success") {
      div.style.color = "#34d399";
      div.textContent = line;
    } else {
      div.style.color = "#cbd5e1";
      div.textContent = line;
    }
    el.terminalOutput.appendChild(div);
    el.terminalOutput.scrollTop = el.terminalOutput.scrollHeight;
  }

  function handleCommandSubmit() {
    if (!el.bashInput) return;
    const rawCmd = el.bashInput.value.trim();
    if (!rawCmd) return;

    SoundFX.playKey();

    state.commandHistory.push(rawCmd);
    state.historyIndex = state.commandHistory.length;

    const cwd = state.liveShell.cwd;
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    appendTerminalOutput(`student@debian-server:${promptPath}$ ${rawCmd}`, "cmd");

    if (rawCmd.toLowerCase() === "clear") {
      el.terminalOutput.innerHTML = "";
      el.bashInput.value = "";
      return;
    }

    const res = state.liveShell.execute(rawCmd);
    if (res.stdout) appendTerminalOutput(res.stdout, "normal");
    if (res.stderr) appendTerminalOutput(res.stderr, "error");
    updateTerminalPrompt();
    renderFsExplorer();

    const currentQ = allQuestions.find(q => q.id === state.currentQuestionId);
    if (!currentQ) return;

    const expectedCmd = currentQ.expectedBash || currentQ.expectedSql || "";
    const grade = window.VIRTUAL_LINUX_W2.BASH_GRADER.evaluate(rawCmd, expectedCmd, currentQ);

    if (grade.match) {
      SoundFX.playSuccess();
      const isNew = !state.solvedIds.has(currentQ.id);
      state.solvedIds.add(currentQ.id);

      if (isNew) {
        state.bonusCapital += 100;
        if (state.solvedIds.size % 10 === 0) {
          state.bonusCapital += 500;
          SoundFX.playPromotion();
        }
      }

      saveProgress();
      updateHUD();
      renderSectorBar();
      renderQuestionStrip();

      if (state.arena) {
        state.arena.addSuccessBurst();
        state.arena.player.speech = "Barakalla! Buyruq to'liq va xatosiz bajarildi!";
        state.arena.player.speechTimer = 180;
      }

      showFeedback(true, `<b>✓ ${grade.message}</b><br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi. Keyingi topshiriqqa o'tishingiz mumkin!</span>`);

      checkOfficeEventTrigger(currentQ.id);

    } else {
      SoundFX.playError();
      showFeedback(false, `<b>✕ Diqqat:</b> ${grade.message}<br><span style="color:#fca5a5; font-size:11.5px;">Tizim xatolikni qaytardi yoki kutilgan natija boshqacha. "💡 Maslahat" yoki "👁 Kutilayotgan Natija" tugmasidan foydalaning.</span>`);
    }

    el.bashInput.value = "";
  }

  function showFeedback(isSuccess, html) {
    if (!el.feedbackBox) return;
    el.feedbackBox.className = `feedback-box ${isSuccess ? "success" : "error"}`;
    el.feedbackBox.innerHTML = html;
    el.feedbackBox.style.display = "block";
  }

  // --- Office Incident Event Modal ---
  function checkOfficeEventTrigger(questionId) {
    const events = window.VIRTUAL_LINUX_W2.officeEvents;
    const ev = events.find(e => e.triggerAfterQuestion === questionId);
    if (ev) {
      setTimeout(() => {
        openEventModal(ev);
      }, 700);
    }
  }

  function openEventModal(eventObj) {
    if (!el.modalEvent) return;
    const ev = eventObj || window.VIRTUAL_LINUX_W2.officeEvents[0];

    el.eventAvatar.textContent = ev.avatar || "🐧";
    el.eventSpeaker.textContent = ev.speaker;
    el.eventRole.textContent = ev.role;
    el.eventTitle.textContent = ev.title;
    el.eventNarrative.textContent = ev.narrative;
    el.eventFeedback.style.display = "none";
    el.eventChoicesContainer.innerHTML = "";

    ev.choices.forEach(ch => {
      const btn = document.createElement("button");
      btn.className = "event-choice-btn";
      btn.innerHTML = `<b>➤</b> ${ch.text}`;

      btn.addEventListener("click", () => {
        if (ch.correct) {
          SoundFX.playSuccess();
          state.bonusCapital += (ch.bonus || 0);
          saveProgress();
          updateHUD();
          el.eventFeedback.className = "feedback-box success";
          el.eventFeedback.innerHTML = `<b>To'g'ri qaror!</b> ${ch.outcome}`;
        } else {
          SoundFX.playError();
          el.eventFeedback.className = "feedback-box error";
          el.eventFeedback.innerHTML = `<b>Xato qaror:</b> ${ch.outcome}`;
        }
        el.eventFeedback.style.display = "block";
      });

      el.eventChoicesContainer.appendChild(btn);
    });

    el.modalEvent.classList.add("active");
  }

  // --- 150 Question Map Modal ---
  function openMapModal() {
    if (!el.modalMap) return;
    renderMapQuestions();
    el.modalMap.classList.add("active");
  }

  function renderMapQuestions(filter = "all", searchQuery = "") {
    if (!el.mapQuestionsGrid) return;
    el.mapQuestionsGrid.innerHTML = "";

    const query = (searchQuery || "").toLowerCase();

    allQuestions.forEach(q => {
      const isSolved = state.solvedIds.has(q.id);
      const isCurrent = q.id === state.currentQuestionId;

      if (filter === "solved" && !isSolved) return;
      if (filter === "unsolved" && isSolved) return;
      if (filter.startsWith("sector_")) {
        const sNum = parseInt(filter.split("_")[1], 10);
        if (q.sector !== sNum) return;
      }

      if (query) {
        const hay = `${q.id} ${q.title} ${q.expectedBash || ""} ${q.tags ? q.tags.join(" ") : ""}`.toLowerCase();
        if (!hay.includes(query)) return;
      }

      const card = document.createElement("div");
      card.className = `map-item ${isSolved ? "solved" : ""} ${isCurrent ? "current" : ""}`;
      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-weight:700; color:var(--accent-cyan-bright);">#${q.id}</span>
          <span style="font-size:11px; color:${isSolved ? "var(--accent-emerald-bright)" : "var(--text-muted)"};">
            ${isSolved ? "✓ Bajarilgan" : "Kutilmoqda"}
          </span>
        </div>
        <div style="font-size:12.5px; font-weight:600; color:#fff;">${q.title}</div>
        <div style="font-size:11px; color:var(--text-muted);">${q.source || ""}</div>
      `;

      card.addEventListener("click", () => {
        el.modalMap.classList.remove("active");
        loadQuestion(q.id);
      });

      el.mapQuestionsGrid.appendChild(card);
    });
  }

  // --- Solution Reveal Modal ---
  function openSolutionModal() {
    const q = allQuestions.find(item => item.id === state.currentQuestionId);
    if (!q || !el.modalSolution) return;

    el.solQuestionTitle.textContent = `#${q.id}. ${q.title}`;
    el.solCode.textContent = q.expectedBash || q.expectedSql || "";
    el.solExplanation.innerHTML = `
      <p style="margin-bottom:8px;"><b>Tushuntirish:</b> ${q.hint || "Ushbu buyruq Linux tizimida topshiriqda belgilangan amallarni bajaradi."}</p>
      <p style="font-size:11.5px; color:#94a3b8;"><b>Muqobil yechimlar:</b> ${q.solutions ? q.solutions.map(s => `<code>${s}</code>`).join(", ") : "—"}</p>
    `;

    el.modalSolution.classList.add("active");
  }

  // --- Virtual File System Explorer Display (Week 2 Specialized Tabs) ---
  function renderFsExplorer() {
    if (!el.schemaTableDisplay || !state.liveShell) return;

    const tab = state.activeFsTab;

    if (tab === "passwd") {
      const passwdNode = state.liveShell.getNode("/etc/passwd");
      const groupNode = state.liveShell.getNode("/etc/group");
      let html = `<div style="padding:6px 10px;">`;
      html += `<div style="color:var(--accent-violet-bright); font-weight:700; margin-bottom:8px;">👥 /etc/passwd (TIZIM FOYDALANUVCHILARI RO'YXATI):</div>`;
      html += `<pre style="background:#050811; border:1px solid rgba(139,92,246,0.3); border-radius:6px; padding:8px 12px; color:#34d399; font-size:11.5px; white-space:pre-wrap; margin-bottom:12px;">${passwdNode ? passwdNode.content : "Topilmadi"}</pre>`;
      html += `<div style="color:var(--accent-cyan-bright); font-weight:700; margin-bottom:6px;">🏷️ /etc/group (GURUHLAR VA A'ZOLIK):</div>`;
      html += `<pre style="background:#050811; border:1px solid rgba(6,182,212,0.3); border-radius:6px; padding:8px 12px; color:#38bdf8; font-size:11.5px; white-space:pre-wrap;">${groupNode ? groupNode.content : "Topilmadi"}</pre>`;
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    if (tab === "project") {
      const projNode = state.liveShell.getNode("/srv/project");
      let html = `<div style="padding:6px 10px;">`;
      html += `<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
        <span style="color:#f43f5e; font-weight:700;">🔒 /srv/project (STICKY BIT BILAN HIMOYALANGAN PAPKA)</span>
        <span class="badge-sticky">STICKY BIT: ${projNode && projNode.sticky ? "FAOLLASHTIRILGAN (+t)" : "O'CHIRILGAN"}</span>
      </div>`;
      html += `<div style="font-size:11.5px; color:#94a3b8; margin-bottom:8px;">Ruxsat: <b>${projNode ? projNode.permissions : ""}</b> &nbsp;|&nbsp; Egasi: <b>${projNode ? projNode.owner : ""}:${projNode ? projNode.group : ""}</b></div>`;

      if (projNode && projNode.children) {
        html += `<table class="fs-table"><thead><tr><th>Fayl Nomi</th><th>Ruxsat</th><th>Egasi</th><th>Guruh</th><th>Hajm</th></tr></thead><tbody>`;
        Object.values(projNode.children).forEach(ch => {
          html += `<tr><td class="badge-file">📄 ${ch.name}</td><td class="badge-perm">${ch.permissions}</td><td>${ch.owner}</td><td>${ch.group}</td><td>${ch.size}B</td></tr>`;
        });
        html += `</tbody></table>`;
      }
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    if (tab === "apache") {
      const apacheNode = state.liveShell.getNode("/var/log/apache_logs.txt");
      let html = `<div style="padding:6px 10px;">`;
      html += `<div style="color:var(--accent-cyan-bright); font-weight:700; margin-bottom:8px;">🌐 /var/log/apache_logs.txt (SEMINAR 2 APACHE LOGLARI):</div>`;
      html += `<pre style="background:#050811; border:1px solid rgba(6,182,212,0.3); border-radius:6px; padding:8px 12px; color:#cbd5e1; font-size:11px; white-space:pre-wrap; line-height:1.6;">${apacheNode ? apacheNode.content : "Log topilmadi"}</pre>`;
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    if (tab === "skel") {
      const skelNode = state.liveShell.getNode("/etc/skel");
      let html = `<div style="padding:6px 10px;">`;
      html += `<div style="color:var(--accent-amber-bright); font-weight:700; margin-bottom:8px;">📁 /etc/skel (YANGI FOYDALANUVCHILAR SHABLONI):</div>`;
      if (skelNode && skelNode.children) {
        html += `<table class="fs-table"><thead><tr><th>Fayl Nomi</th><th>Ruxsat</th><th>Egasi</th><th>Hajm</th></tr></thead><tbody>`;
        Object.values(skelNode.children).forEach(ch => {
          html += `<tr><td class="badge-file">📄 ${ch.name}</td><td class="badge-perm">${ch.permissions}</td><td>${ch.owner}:${ch.group}</td><td>${ch.size}B</td></tr>`;
        });
        html += `</tbody></table>`;
      }
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    if (tab === "inode") {
      const files = [];
      function traverse(node, path) {
        if (!node) return;
        const fullPath = path + (path === "/" ? "" : "/") + (node.name || "");
        files.push({
          inode: node.inode,
          path: fullPath || "/",
          type: node.type,
          permissions: node.permissions,
          links: node.links,
          owner: `${node.owner}:${node.group}`,
          sticky: node.sticky
        });
        if (node.type === "dir" && node.children) {
          Object.values(node.children).forEach(child => traverse(child, fullPath || "/"));
        }
      }
      traverse(state.liveShell.root, "");

      let html = `
        <table class="fs-table">
          <thead>
            <tr>
              <th>Inode</th>
              <th>Tur</th>
              <th>Ruxsatlar</th>
              <th>Links</th>
              <th>Egasi</th>
              <th>Yo'l (Path)</th>
            </tr>
          </thead>
          <tbody>
      `;

      files.forEach(f => {
        html += `
          <tr>
            <td class="badge-inode"><b>${f.inode}</b></td>
            <td>${f.type}</td>
            <td class="badge-perm">${f.permissions} ${f.sticky ? '<span class="badge-sticky">+t</span>' : ''}</td>
            <td style="color:${f.links > 1 ? "#fbbf24" : "#94a3b8"};">${f.links}</td>
            <td>${f.owner}</td>
            <td class="${f.type === 'dir' ? 'badge-dir' : 'badge-file'}">${f.path}</td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    if (tab === "terminal") {
      let html = `<div style="padding:4px 8px;">`;
      html += `<div style="color:var(--accent-cyan-bright); font-weight:700; margin-bottom:8px;">🖥️ BASH TARIXI (HISTORY):</div>`;
      if (state.commandHistory.length === 0) {
        html += `<div style="color:var(--text-muted);">Hali hech qanday buyruq bajarilmadi.</div>`;
      } else {
        state.commandHistory.forEach((cmd, idx) => {
          html += `<div style="padding:3px 0; border-bottom:1px solid rgba(255,255,255,0.04);"><span style="color:#64748b;">${idx + 1}</span> <code style="color:#38bdf8;">${cmd}</code></div>`;
        });
      }
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    if (tab === "result") {
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      let html = `<div style="padding:6px 10px;">`;
      html += `<div style="color:var(--accent-cyan-bright); font-weight:700; margin-bottom:8px;">📊 KUTILAYOTGAN VA HOZIRGI NATIJA TAHLILI:</div>`;
      if (q) {
        const expShell = new window.VIRTUAL_LINUX_W2.VirtualLinuxShell();
        const expRes = expShell.execute(q.expectedBash || q.expectedSql || "");
        html += `<div style="margin-bottom:10px;"><b>Topshiriq #${q.id}:</b> ${q.title}</div>`;
        html += `<div style="margin-bottom:6px; color:#38bdf8;">Kutilgan buyruq: <code>${q.expectedBash || q.expectedSql}</code></div>`;
        html += `<div style="background:#090e1c; padding:8px; border-radius:4px; margin-bottom:10px; border:1px solid rgba(6,182,212,0.3);">
          <div style="font-size:11px; color:#94a3b8; margin-bottom:4px;">Kutilayotgan Chiqish (stdout):</div>
          <pre style="color:#34d399; font-size:11.5px; white-space:pre-wrap;">${expRes.stdout || "(bo'sh chiqish / tizim holati o'zgarishi)"}</pre>
        </div>`;
      }
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    // Default: Home folder /home/student
    const node = state.liveShell.getNode("/home/student");
    let html = `
      <div style="margin-bottom:8px; color:var(--accent-cyan-bright); font-size:12px;">
        📂 <b>Manzil:</b> /home/student &nbsp; | &nbsp; <b>Inode:</b> ${node ? node.inode : 2}
      </div>
      <table class="fs-table">
        <thead>
          <tr>
            <th>Nomi</th>
            <th>Ruxsatlar</th>
            <th>Links</th>
            <th>Egasi</th>
            <th>Inode</th>
            <th>Hajmi</th>
          </tr>
        </thead>
        <tbody>
    `;

    const children = Object.values((node && node.children) || {});
    children.forEach(child => {
      const isDir = child.type === "dir";
      html += `
        <tr>
          <td class="${isDir ? 'badge-dir' : 'badge-file'}">${isDir ? '📁 ' : '📄 '}${child.name}</td>
          <td class="badge-perm">${child.permissions}</td>
          <td>${child.links}</td>
          <td>${child.owner}:${child.group}</td>
          <td class="badge-inode">${child.inode}</td>
          <td>${child.size} bayt</td>
        </tr>
      `;
    });
    html += `</tbody></table>`;
    el.schemaTableDisplay.innerHTML = html;
  }

  window.insertBashToken = function (token) {
    if (!el.bashInput) return;
    SoundFX.playKey();
    const cur = el.bashInput.value;
    if (!cur) {
      el.bashInput.value = token;
    } else if (cur.endsWith(" ") || cur.endsWith("|") || cur.endsWith(">")) {
      el.bashInput.value = cur + token;
    } else {
      el.bashInput.value = cur + " " + token;
    }
    el.bashInput.focus();
  };

  
  // ============================================================================
  // KALI LINUX TERMINAL ENGINE & WORKBENCH HELPERS (2 MODES & FULLSCREEN)
  // ============================================================================

  function toggleTerminalFullscreen(enable) {
    const isFs = (typeof enable === "boolean") ? enable : !state.terminalFullscreen;
    state.terminalFullscreen = isFs;
    state.layoutMode = isFs ? "fullscreen" : "split";
    SoundFX.playKey();

    if (isFs) {
      if (el.terminalWorkbenchCard) el.terminalWorkbenchCard.classList.add("is-fullscreen");
      if (el.kaliFullscreenBar) el.kaliFullscreenBar.style.display = "flex";
      if (el.btnToggleFullscreen) el.btnToggleFullscreen.textContent = "✕ Kichraytirish";
    } else {
      if (el.terminalWorkbenchCard) el.terminalWorkbenchCard.classList.remove("is-fullscreen");
      if (el.kaliFullscreenBar) el.kaliFullscreenBar.style.display = "none";
      if (el.btnToggleFullscreen) el.btnToggleFullscreen.textContent = "⛶ To'liq Ekran";
    }

    focusKaliInput();
  }

  function focusKaliInput() {
    if (!el.kaliHiddenInput) return;
    try {
      el.kaliHiddenInput.focus({ preventScroll: true });
    } catch (e) {
      el.kaliHiddenInput.focus();
    }
  }

  function setTerminalMode(mode) {
    state.terminalMode = mode;
    SoundFX.playKey();
    if (mode === "sandbox") {
      if (el.btnModeQuest) el.btnModeQuest.classList.remove("active");
      if (el.btnModeSandbox) el.btnModeSandbox.classList.add("active");
      if (el.btnFsToggleMode) el.btnFsToggleMode.textContent = "💻 Rejim: Erkin CLI";
      printKaliInfo("┌──[ 💻 ERKIN SANDBOX REJIMI FAOL ]──────────────────────────────────\n│ Istalgan Linux buyrug'ini erkin sinab ko'rishingiz mumkin (cat, useradd, chmod, ...)\n│ Savollarga qaytish uchun 'quest' deb yozing yoki [🎯 Topshiriqlar] tugmasini bosing.\n└──────────────────────────────────────────────────────────────────");
    } else {
      if (el.btnModeQuest) el.btnModeQuest.classList.add("active");
      if (el.btnModeSandbox) el.btnModeSandbox.classList.remove("active");
      if (el.btnFsToggleMode) el.btnFsToggleMode.textContent = "🎯 Rejim: Topshiriqlar";
      printKaliInfo(`[🎯 TOPSHIRIQLAR REJIMI]: Joriy vazifa #${state.currentQuestionId} tekshiriladi.`);
    }
    focusKaliInput();
  }

  function setWorkbenchTab(tab) {
    SoundFX.playKey();
    if (tab === "terminal") {
      if (el.tabTerminalMode) el.tabTerminalMode.classList.add("active");
      if (el.tabFsMode) el.tabFsMode.classList.remove("active");
      if (el.paneKaliTerminal) el.paneKaliTerminal.style.display = "flex";
      if (el.paneFsExplorer) el.paneFsExplorer.style.display = "none";
      focusKaliInput();
    } else {
      if (el.tabFsMode) el.tabFsMode.classList.add("active");
      if (el.tabTerminalMode) el.tabTerminalMode.classList.remove("active");
      if (el.paneKaliTerminal) el.paneKaliTerminal.style.display = "none";
      if (el.paneFsExplorer) el.paneFsExplorer.style.display = "block";
      renderFsExplorer();
    }
  }

  window.toggleCmdInfoCard = function () {
    const cardBody = document.getElementById("cmdCardBody");
    const toggleBtn = document.getElementById("btnToggleCmdCard");
    const hint = document.getElementById("cmdCardToggleHint");
    if (!cardBody) return;

    SoundFX.playKey();
    if (cardBody.style.display === "none" || !cardBody.style.display) {
      cardBody.style.display = "flex";
      if (toggleBtn) toggleBtn.classList.add("open");
      if (hint) hint.textContent = "Yopish";
    } else {
      cardBody.style.display = "none";
      if (toggleBtn) toggleBtn.classList.remove("open");
      if (hint) hint.textContent = "Batafsil ko'rish";
    }
  };

  function getKaliBannerHtml() {
    return `/data/user/0/tech.ula/files/support/dbclient: Caution, skipping hostkey check for localhost

The programs included with the Kali GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Kali GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
<span style="color:#ef4444">┌──(Message from Kali developers)</span>
<span style="color:#64748b">│</span>
<span style="color:#e2e8f0">│ This is a minimal installation of Kali Linux, you likely</span>
<span style="color:#e2e8f0">│ want to install supplementary tools. Learn how:</span>
<span style="color:#38bdf8">│ ⇒ https://www.kali.org/docs/troubleshooting/common-minimum-setup/</span>
<span style="color:#64748b">│</span>
<span style="color:#64748b">└──(Run: "touch ~/.hushlogin" to hide this message)</span>
<span style="color:#f8fafc">Welcome to Kali in UserLAnd! (Week 2: DevOps & Permissions)</span>\n`;
  }

  function initKaliTerminal() {
    if (!el.kaliStream) return;
    el.kaliStream.innerHTML = getKaliBannerHtml();
    updateTerminalPrompt();

    if (el.kaliScreen && el.kaliHiddenInput) {
      el.kaliScreen.addEventListener("click", () => focusKaliInput());
      el.kaliScreen.addEventListener("touchstart", () => focusKaliInput(), { passive: true });
    }

    if (el.kaliHiddenInput) {
      el.kaliHiddenInput.addEventListener("input", () => {
        if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
        if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
      });

      el.kaliHiddenInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleKaliCommandSubmit();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (state.historyIndex > 0) {
            state.historyIndex--;
            el.kaliHiddenInput.value = state.commandHistory[state.historyIndex] || "";
            if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
          }
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (state.historyIndex < state.commandHistory.length - 1) {
            state.historyIndex++;
            el.kaliHiddenInput.value = state.commandHistory[state.historyIndex] || "";
            if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
          } else {
            state.historyIndex = state.commandHistory.length;
            el.kaliHiddenInput.value = "";
            if (el.kaliTypedText) el.kaliTypedText.textContent = "";
          }
        } else if (e.key === "Tab") {
          e.preventDefault();
          handleKaliTabCompletion();
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
          e.preventDefault();
          handleKaliCtrlC();
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
          e.preventDefault();
          if (el.kaliStream) el.kaliStream.innerHTML = "";
        }
      });
    }

    // Touch bar clicks
    if (el.kaliTouchBar) {
      el.kaliTouchBar.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          SoundFX.playKey();
          const token = btn.getAttribute("data-token");
          const key = btn.getAttribute("data-key");
          if (token) {
            insertKaliToken(token);
          } else if (key === "Tab") {
            handleKaliTabCompletion();
          } else if (key === "CtrlC") {
            handleKaliCtrlC();
          } else if (key === "clear") {
            if (el.kaliStream) el.kaliStream.innerHTML = "";
            if (el.kaliHiddenInput) {
              el.kaliHiddenInput.value = "";
              if (el.kaliTypedText) el.kaliTypedText.textContent = "";
              focusKaliInput();
            }
          }
        });
      });
    }

    // Mode switches
    if (el.btnModeQuest) el.btnModeQuest.addEventListener("click", () => setTerminalMode("quest"));
    if (el.btnModeSandbox) el.btnModeSandbox.addEventListener("click", () => setTerminalMode("sandbox"));
    if (el.btnFsToggleMode) el.btnFsToggleMode.addEventListener("click", () => setTerminalMode(state.terminalMode === "quest" ? "sandbox" : "quest"));

    // Tabs
    if (el.tabTerminalMode) el.tabTerminalMode.addEventListener("click", () => setWorkbenchTab("terminal"));
    if (el.tabFsMode) el.tabFsMode.addEventListener("click", () => setWorkbenchTab("fs"));

    // Card actions
    if (el.btnCardBatafsil && el.modalKtBatafsil) {
      el.btnCardBatafsil.addEventListener("click", () => {
        SoundFX.playKey();
        el.modalKtBatafsil.classList.add("active");
      });
    }
    if (el.btnCardHint) {
      el.btnCardHint.addEventListener("click", () => {
        SoundFX.playKey();
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q) printKaliInfo("[💡 MASLAHAT]: " + (q.hint || "Topshiriq talablarini diqqat bilan o'rganing."));
        if (el.btnShowHint) el.btnShowHint.click();
      });
    }
    if (el.btnClearTerminal) {
      el.btnClearTerminal.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.kaliStream) el.kaliStream.innerHTML = "";
        if (el.terminalOutput) el.terminalOutput.innerHTML = "";
        if (el.kaliHiddenInput) {
          el.kaliHiddenInput.value = "";
          if (el.kaliTypedText) el.kaliTypedText.textContent = "";
          focusKaliInput();
        }
      });
    }
    if (el.btnToggleFullscreen) {
      el.btnToggleFullscreen.addEventListener("click", () => toggleTerminalFullscreen());
    }

    // Fullscreen bar buttons
    if (el.btnFsTask && el.modalKtTask) {
      el.btnFsTask.addEventListener("click", () => {
        SoundFX.playKey();
        el.modalKtTask.classList.add("active");
      });
    }
    if (el.btnFsBatafsil && el.modalKtBatafsil) {
      el.btnFsBatafsil.addEventListener("click", () => {
        SoundFX.playKey();
        el.modalKtBatafsil.classList.add("active");
      });
    }
    if (el.btnFsHint) {
      el.btnFsHint.addEventListener("click", () => {
        SoundFX.playKey();
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q) printKaliInfo("[💡 MASLAHAT]: " + (q.hint || "Topshiriq talablarini diqqat bilan o'rganing."));
      });
    }
    if (el.btnFsPreview) {
      el.btnFsPreview.addEventListener("click", () => {
        SoundFX.playKey();
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q) {
          const expShell = new window.VIRTUAL_LINUX_W2.VirtualLinuxShell();
          const res = expShell.execute(q.expectedBash || q.expectedSql || "");
          printKaliInfo("[👁 KUTILAYOTGAN NATIJA]:\n" + (res.stdout || "(Tizim ruxsatlari yoki foydalanuvchilar o'zgaradi)"));
        }
      });
    }
    if (el.btnFsMap) {
      el.btnFsMap.addEventListener("click", () => {
        SoundFX.playKey();
        openMapModal();
      });
    }
    if (el.btnExitFullscreen) {
      el.btnExitFullscreen.addEventListener("click", () => toggleTerminalFullscreen(false));
    }

    // Touch Nav
    if (el.btnTouchPrev) {
      el.btnTouchPrev.addEventListener("click", () => {
        SoundFX.playKey();
        if (state.currentQuestionId > 1) {
          loadQuestion(state.currentQuestionId - 1);
          printKaliInfo("[➔] Oldingi vazifaga qaytildi: #" + state.currentQuestionId);
        }
      });
    }
    if (el.btnTouchNext) {
      el.btnTouchNext.addEventListener("click", () => {
        SoundFX.playKey();
        if (state.currentQuestionId < allQuestions.length) {
          loadQuestion(state.currentQuestionId + 1);
          printKaliInfo("[➔] Keyingi vazifaga o'tildi: #" + state.currentQuestionId);
        }
      });
    }

    // Modals
    if (el.btnCloseKtTask && el.modalKtTask) {
      el.btnCloseKtTask.addEventListener("click", () => {
        el.modalKtTask.classList.remove("active");
        focusKaliInput();
      });
    }
    if (el.btnKtModalDone && el.modalKtTask) {
      el.btnKtModalDone.addEventListener("click", () => {
        el.modalKtTask.classList.remove("active");
        focusKaliInput();
      });
    }
    if (el.btnKtModalHint) {
      el.btnKtModalHint.addEventListener("click", () => {
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q) alert("💡 Maslahat:\n" + (q.hint || "Topshiriq matniga qarang"));
      });
    }
    if (el.btnKtModalSol) {
      el.btnKtModalSol.addEventListener("click", () => {
        if (el.modalKtTask) el.modalKtTask.classList.remove("active");
        openSolutionModal();
      });
    }
    if (el.btnCloseKtBatafsil && el.modalKtBatafsil) {
      el.btnCloseKtBatafsil.addEventListener("click", () => {
        el.modalKtBatafsil.classList.remove("active");
        focusKaliInput();
      });
    }
    if (el.btnOkKtBatafsil && el.modalKtBatafsil) {
      el.btnOkKtBatafsil.addEventListener("click", () => {
        el.modalKtBatafsil.classList.remove("active");
        focusKaliInput();
      });
    }
  }

  function insertKaliToken(token) {
    if (!el.kaliHiddenInput) return;
    const cur = el.kaliHiddenInput.value;
    if (!cur) {
      el.kaliHiddenInput.value = token;
    } else if (cur.endsWith(" ") || cur.endsWith("|") || cur.endsWith(">") || cur.endsWith("/")) {
      el.kaliHiddenInput.value = cur + token;
    } else {
      el.kaliHiddenInput.value = cur + " " + token;
    }
    if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
    focusKaliInput();
    if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
  }

  function handleKaliCtrlC() {
    if (!el.kaliStream) return;
    const cwd = state.liveShell ? state.liveShell.cwd : "/home/student";
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    const val = el.kaliHiddenInput ? el.kaliHiddenInput.value : "";
    appendKaliPromptHistory(val + "^C");
    if (el.kaliHiddenInput) el.kaliHiddenInput.value = "";
    if (el.kaliTypedText) el.kaliTypedText.textContent = "";
    focusKaliInput();
  }

  function handleKaliTabCompletion() {
    if (!el.kaliHiddenInput) return;
    SoundFX.playKey();
    const val = el.kaliHiddenInput.value;
    const trimmed = val.trimStart();
    const tokens = trimmed.split(/\s+/);

    const known = ["useradd -m", "usermod -aG sudo", "usermod -s /bin/bash", "passwd", "chmod 755", "chmod 700", "chmod 1775", "umask 022", "umask 002", "cat /etc/passwd", "grep", "cut", "sort", "uniq", "sed", "awk", "df -h", "du -sh", "tar"];
    if (tokens.length <= 1) {
      const match = known.find(k => k.startsWith(val.trim()));
      if (match) {
        el.kaliHiddenInput.value = match + " ";
        if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
        return;
      }
    }
  }

  function appendKaliPromptHistory(cmd) {
    if (!el.kaliStream) return;
    const cwd = state.liveShell ? state.liveShell.cwd : "/home/student";
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);

    const div = document.createElement("div");
    div.className = "kali-history-entry";
    div.innerHTML = `
      <div class="kali-cmd-line1"><span class="k-green">┌──(</span><span class="k-blue">userland</span><span class="k-white">㉿</span><span class="k-blue">localhost</span><span class="k-green">)-[</span><span class="k-white">${promptPath}</span><span class="k-green">]</span></div>
      <div class="kali-cmd-line2"><span class="k-green">└─$ </span><span class="k-cmd">${escapeHtml(cmd)}</span></div>
    `;
    el.kaliStream.appendChild(div);
  }

  function printKaliInfo(msg) {
    if (!el.kaliStream) return;
    const div = document.createElement("div");
    div.className = "kali-meta-card";
    div.textContent = msg;
    el.kaliStream.appendChild(div);
    if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
  }

  function handleKaliCommandSubmit() {
    if (!el.kaliHiddenInput) return;
    const rawCmd = el.kaliHiddenInput.value.trim();
    el.kaliHiddenInput.value = "";
    if (el.kaliTypedText) el.kaliTypedText.textContent = "";

    if (!rawCmd) {
      appendKaliPromptHistory("");
      if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
      return;
    }

    SoundFX.playKey();
    state.commandHistory.push(rawCmd);
    state.historyIndex = state.commandHistory.length;

    const lower = rawCmd.toLowerCase();
    if (lower === "task" || lower === "vazifa") {
      appendKaliPromptHistory(rawCmd);
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q) {
        printKaliInfo(`[#${q.id} / 150] ${q.title}\n${q.taskUz || ""}`);
      }
      return;
    }
    if (lower === "batafsil") {
      appendKaliPromptHistory(rawCmd);
      if (el.modalKtBatafsil) el.modalKtBatafsil.classList.add("active");
      return;
    }
    if (lower === "hint" || lower === "maslahat") {
      appendKaliPromptHistory(rawCmd);
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q) printKaliInfo("[💡 MASLAHAT]: " + (q.hint || "Topshiriq matniga qarang."));
      return;
    }
    if (lower === "preview" || lower === "natija") {
      appendKaliPromptHistory(rawCmd);
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q) {
        const expShell = new window.VIRTUAL_LINUX_W2.VirtualLinuxShell();
        const res = expShell.execute(q.expectedBash || q.expectedSql || "");
        printKaliInfo("[👁 KUTILAYOTGAN NATIJA]:\n" + (res.stdout || "(Tizim ruxsatlari yoki foydalanuvchilar o'zgaradi)"));
      }
      return;
    }
    if (lower === "next" || lower === "keyingi") {
      appendKaliPromptHistory(rawCmd);
      if (state.currentQuestionId < allQuestions.length) {
        loadQuestion(state.currentQuestionId + 1);
        printKaliInfo("[➔] Keyingi vazifa: #" + state.currentQuestionId);
      }
      return;
    }
    if (lower === "prev" || lower === "oldingi") {
      appendKaliPromptHistory(rawCmd);
      if (state.currentQuestionId > 1) {
        loadQuestion(state.currentQuestionId - 1);
        printKaliInfo("[➔] Oldingi vazifa: #" + state.currentQuestionId);
      }
      return;
    }
    if (lower === "clear") {
      if (el.kaliStream) el.kaliStream.innerHTML = "";
      return;
    }
    if (lower === "fullscreen" || lower === "full" || lower === "f11") {
      appendKaliPromptHistory(rawCmd);
      toggleTerminalFullscreen(true);
      return;
    }
    if (lower === "exit" || lower === "split" || lower === "quit") {
      appendKaliPromptHistory(rawCmd);
      toggleTerminalFullscreen(false);
      return;
    }
    if (lower === "sandbox" || lower === "erkin") {
      appendKaliPromptHistory(rawCmd);
      setTerminalMode("sandbox");
      return;
    }
    if (lower === "quest" || lower === "masala" || lower === "topshiriq") {
      appendKaliPromptHistory(rawCmd);
      setTerminalMode("quest");
      return;
    }
    if (lower === "map" || lower === "xarita") {
      appendKaliPromptHistory(rawCmd);
      openMapModal();
      return;
    }

    appendKaliPromptHistory(rawCmd);

    // echo $? exit code inspector
    if (rawCmd === "echo $?") {
      const outDiv = document.createElement("div");
      outDiv.className = "kali-cmd-stdout";
      outDiv.textContent = String(state.lastExitCode || 0);
      el.kaliStream.appendChild(outDiv);
      if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
      return;
    }

    const res = state.liveShell.execute(rawCmd);
    state.lastExitCode = (res && typeof res.code === "number") ? res.code : 0;

    if (res.stdout) {
      const outDiv = document.createElement("div");
      outDiv.className = "kali-cmd-stdout";
      outDiv.textContent = res.stdout;
      el.kaliStream.appendChild(outDiv);
    }
    if (res.stderr) {
      const errDiv = document.createElement("div");
      errDiv.className = "kali-cmd-stderr";
      errDiv.textContent = res.stderr;
      el.kaliStream.appendChild(errDiv);
    }

    updateTerminalPrompt();
    renderFsExplorer();

    // 2. Erkin Sandbox CLI Mode Bypass
    if (state.terminalMode === "sandbox") {
      const succMsg = document.createElement("div");
      succMsg.className = "kali-meta-card";
      succMsg.style.borderColor = "rgba(56, 189, 248, 0.4)";
      succMsg.style.color = "#38bdf8";
      succMsg.textContent = `[💻 Sandbox: Buyruq bajarildi • Exit code: ${state.lastExitCode}]`;
      el.kaliStream.appendChild(succMsg);
      if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
      return;
    }

    // 1. Topshiriqlar Quest Mode Grading
    const currentQ = allQuestions.find(q => q.id === state.currentQuestionId);
    if (!currentQ) return;

    const expectedCmd = currentQ.expectedBash || currentQ.expectedSql || "";
    const grade = window.VIRTUAL_LINUX_W2.BASH_GRADER.evaluate(rawCmd, expectedCmd, currentQ);

    if (grade.match) {
      SoundFX.playSuccess();
      const isNew = !state.solvedIds.has(currentQ.id);
      state.solvedIds.add(currentQ.id);

      if (isNew) {
        state.bonusCapital += 100;
        if (state.solvedIds.size % 10 === 0) {
          state.bonusCapital += 500;
          SoundFX.playPromotion();
        }
      }

      saveProgress();
      updateHUD();
      renderSectorBar();
      renderQuestionStrip();

      if (el.ktFsProgress) el.ktFsProgress.textContent = `${state.solvedIds.size} / 150`;

      const succDiv = document.createElement("div");
      succDiv.className = "kali-grade-success";
      succDiv.innerHTML = `✓ TO'G'RI! ${escapeHtml(grade.message)}<br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi! Keyingi topshiriq uchun <b>'next'</b> deb yozing yoki [Keyingi ▶] tugmasini bosing.</span>`;
      el.kaliStream.appendChild(succDiv);

      showFeedback(true, `<b>✓ ${grade.message}</b><br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi!</span>`);
    } else {
      SoundFX.playError();
      const errDiv = document.createElement("div");
      errDiv.className = "kali-grade-error";
      errDiv.innerHTML = `✕ DIQQAT: ${escapeHtml(grade.message)}<br><span style="color:#fca5a5; font-size:11.5px;">Kutilgan natija boshqacha. Maslahat olish uchun <b>'hint'</b> yoki <b>'batafsil'</b> deb yozing.</span>`;
      el.kaliStream.appendChild(errDiv);

      showFeedback(false, `<b>✕ Diqqat:</b> ${grade.message}`);
    }

    if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
  }


  function bindEvents() {
    if (el.btnTriggerEvent) el.btnTriggerEvent.addEventListener("click", () => openEventModal());
    if (el.btnQuickEvent) el.btnQuickEvent.addEventListener("click", () => openEventModal());
    if (el.btnOpenMap) el.btnOpenMap.addEventListener("click", () => openMapModal());
    if (el.btnResetProgress) {
      el.btnResetProgress.addEventListener("click", () => {
        if (confirm("Haqiqatan ham barcha 150 topshiriq natijalarini noldan boshlamoqchimisiz?")) {
          localStorage.removeItem(STORAGE_KEY);
          state.solvedIds.clear();
          state.bonusCapital = 0;
          state.currentQuestionId = 1;
          state.activeSector = 1;
          state.liveShell = new window.VIRTUAL_LINUX_W2.VirtualLinuxShell();
          saveProgress();
          updateHUD();
          renderSectorBar();
          loadQuestion(1);
          renderFsExplorer();
        }
      });
    }

    if (el.btnPrevQ) {
      el.btnPrevQ.addEventListener("click", () => {
        if (state.currentQuestionId > 1) loadQuestion(state.currentQuestionId - 1);
      });
    }
    if (el.btnNextQ) {
      el.btnNextQ.addEventListener("click", () => {
        if (state.currentQuestionId < allQuestions.length) loadQuestion(state.currentQuestionId + 1);
      });
    }

    el.schemaTabs.forEach(tabBtn => {
      tabBtn.addEventListener("click", () => {
        el.schemaTabs.forEach(b => b.classList.remove("active"));
        tabBtn.classList.add("active");
        state.activeFsTab = tabBtn.dataset.tab;
        renderFsExplorer();
      });
    });

    if (el.bashInput) {
      el.bashInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleCommandSubmit();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (state.historyIndex > 0) {
            state.historyIndex--;
            el.bashInput.value = state.commandHistory[state.historyIndex] || "";
          }
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (state.historyIndex < state.commandHistory.length - 1) {
            state.historyIndex++;
            el.bashInput.value = state.commandHistory[state.historyIndex] || "";
          } else {
            state.historyIndex = state.commandHistory.length;
            el.bashInput.value = "";
          }
        } else if (e.key === "Tab") {
          e.preventDefault();
          const val = el.bashInput.value;
          const known = ["useradd -m", "usermod -aG", "passwd", "chmod 755", "chmod 700", "chmod 1775", "umask 022", "grep", "cut", "sort", "uniq", "sed", "awk", "df -h", "du -sh", "tar"];
          const match = known.find(k => k.startsWith(val.trim()));
          if (match) el.bashInput.value = match + " ";
        }
      });
    }

    if (el.btnClearTerminal) {
      el.btnClearTerminal.addEventListener("click", () => {
        if (el.terminalOutput) el.terminalOutput.innerHTML = "";
      });
    }

    if (el.btnRunBash) el.btnRunBash.addEventListener("click", () => handleCommandSubmit());

    if (el.btnShowHint) {
      el.btnShowHint.addEventListener("click", () => {
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (!q || !el.hintBox) return;
        SoundFX.playKey();
        el.hintBox.innerHTML = `<b>💡 Maslahat:</b> ${q.hint || "Topshiriq matniga va manba darsligiga e'tibor qarating."}`;
        el.hintBox.style.display = "block";
      });
    }

    if (el.btnPreviewExpected) {
      el.btnPreviewExpected.addEventListener("click", () => {
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (!q) return;
        SoundFX.playKey();
        const expShell = new window.VIRTUAL_LINUX_W2.VirtualLinuxShell();
        const res = expShell.execute(q.expectedBash || q.expectedSql || "");
        showFeedback(true, `<b>👁 Kutilayotgan Chiqish (stdout):</b><br><pre style="background:#040711; padding:6px; border-radius:4px; color:#34d399; margin-top:4px;">${res.stdout || "(Tizim ruxsatlari yoki foydalanuvchilar o'zgaradi)"}</pre>`);
      });
    }

    if (el.btnRevealAnswer) el.btnRevealAnswer.addEventListener("click", () => openSolutionModal());

    if (el.btnCloseMap) el.btnCloseMap.addEventListener("click", () => el.modalMap.classList.remove("active"));
    if (el.btnCloseEvent) el.btnCloseEvent.addEventListener("click", () => el.modalEvent.classList.remove("active"));
    if (el.btnCloseSolution) el.btnCloseSolution.addEventListener("click", () => el.modalSolution.classList.remove("active"));

    [el.modalMap, el.modalEvent, el.modalSolution].forEach(modal => {
      if (!modal) return;
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });
    });

    if (el.mapSearch) {
      el.mapSearch.addEventListener("input", (e) => {
        renderMapQuestions("all", e.target.value);
      });
    }

    el.mapFilterPills.forEach(pill => {
      pill.addEventListener("click", () => {
        el.mapFilterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const filter = pill.dataset.filter || "all";
        renderMapQuestions(filter, el.mapSearch ? el.mapSearch.value : "");
      });
    });

    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleCommandSubmit();
      }
    });
  }

  function init() {
    cacheElements();
    loadProgress();

    state.liveShell = new window.VIRTUAL_LINUX_W2.VirtualLinuxShell();
    state.arena = new window.CyberDevOpsArena2D("gameCanvas");

    state.arena.onSelectTab = (tab) => {
      state.activeFsTab = tab;
      el.schemaTabs.forEach(b => {
        if (b.dataset.tab === tab) b.classList.add("active");
        else b.classList.remove("active");
      });
      renderFsExplorer();
    };
    state.arena.onOpenMap = () => openMapModal();
    state.arena.onTriggerEvent = () => openEventModal();

    bindEvents();
    initKaliTerminal();
    renderSectorBar();
    updateHUD();
    loadQuestion(state.currentQuestionId);
    toggleTerminalFullscreen(false);
    renderFsExplorer();

    appendTerminalOutput("Linux debian-server 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.76-1", "normal");
    appendTerminalOutput("WIUT OS Lab Week 2: User Accounts, Sticky Bit, Streams & RegEx Engine (Bash 5.2.15).", "success");
    appendTerminalOutput("Terminalga buyruq yozing va Enter tugmasini bosing.\n", "normal");
  }

  window.toggleCmdInfoCard = function() {
    const body = document.getElementById("cmdCardBody");
    const btn = document.getElementById("btnToggleCmdCard");
    const hint = document.getElementById("cmdCardToggleHint");
    if (!body) return;
    const isHidden = body.style.display === "none" || body.style.display === "";
    if (isHidden) {
      body.style.display = "flex";
      if (btn) btn.classList.add("open");
      if (hint) hint.textContent = "Yashirish";
      SoundFX.playKey();
    } else {
      body.style.display = "none";
      if (btn) btn.classList.remove("open");
      if (hint) hint.textContent = "Batafsil ko'rish";
      SoundFX.playKey();
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
