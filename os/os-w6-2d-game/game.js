// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 1 GAME CONTROLLER
// Interactive Bash Terminal, Virtual Linux File System, 150 Question Pipeline,
// Sound Effects Synthesizer, Modals, 10 Sectors & Career Progression.
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
      } catch (e) {
        // Audio might be blocked by browser policy
      }
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

  // --- Assemble All 150 Questions ---
  const allQuestions = [
    ...(window.QUESTIONS_1_50 || []),
    ...(window.QUESTIONS_51_100 || []),
    ...(window.QUESTIONS_101_150 || [])
  ];

  // --- Game State ---
  const STORAGE_KEY = "WIUT_OS_W6_PROGRESS";
  const state = {
    solvedIds: new Set(),
    currentQuestionId: 1,
    activeSector: 1,
    bonusCapital: 0,
    commandHistory: [],
    historyIndex: -1,
    activeFsTab: "home",
    lastOutput: "",
    liveShell: null,
    arena: null,
    layoutMode: "split",
    lastExitCode: 0,
    terminalMode: "quest"
  };

  // Load progress from localStorage
  function loadProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (Array.isArray(data.solvedIds)) {
          state.solvedIds = new Set(data.solvedIds);
        }
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

    // Layout Mode Buttons
    el.btnModeSplit = document.getElementById("btnModeSplit");
    el.btnModeCli = document.getElementById("btnModeCli");
    el.btnModeFull = document.getElementById("btnModeFull");
    el.termBtnSplit = document.getElementById("termBtnSplit");
    el.termBtnCli = document.getElementById("termBtnCli");
    el.termBtnFull = document.getElementById("termBtnFull");

    // Terminal Container & Fullscreen Bar
    el.terminalWindow = document.getElementById("terminalWindow");
    el.terminalFullscreenBar = document.getElementById("terminalFullscreenBar");
    el.fsQuestionTitle = document.getElementById("fsQuestionTitle");
    el.btnFsBatafsil = document.getElementById("btnFsBatafsil");
    el.btnFsHint = document.getElementById("btnFsHint");
    el.btnFsPreview = document.getElementById("btnFsPreview");
    el.btnExitFullscreen = document.getElementById("btnExitFullscreen");

    // Mac-style Window Dots
    el.dotClear = document.getElementById("dotClear");
    el.dotExpand = document.getElementById("dotExpand");
    el.dotFullscreen = document.getElementById("dotFullscreen");

    // Command Anatomy Card (Batafsil)
    el.cmdInfoCard = document.getElementById("cmdInfoCard");
    el.cmdCardCode = document.getElementById("cmdCardCode");
    el.cmdCardBody = document.getElementById("cmdCardBody");
    el.btnToggleCmdCard = document.getElementById("btnToggleCmdCard");
    el.cmdCardToggleHint = document.getElementById("cmdCardToggleHint");
    el.cmdCardToggleArrow = document.getElementById("cmdCardToggleArrow");

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

    // --- Authentic Kali Linux Terminal Workbench (Integrated in Left Col & Fullscreen) ---
    el.terminalWorkbenchCard = document.getElementById("terminalWorkbenchCard");
    el.tabTerminalMode = document.getElementById("tabTerminalMode");
    el.tabFsMode = document.getElementById("tabFsMode");
    el.paneKaliTerminal = document.getElementById("paneKaliTerminal");
    el.paneFsExplorer = document.getElementById("paneFsExplorer");

    el.btnModeQuest = document.getElementById("btnModeQuest");
    el.btnModeSandbox = document.getElementById("btnModeSandbox");
    el.btnFsToggleMode = document.getElementById("btnFsToggleMode");

    el.btnCardBatafsil = document.getElementById("btnCardBatafsil");
    el.btnCardHint = document.getElementById("btnCardHint");
    el.btnToggleFullscreen = document.getElementById("btnToggleFullscreen");

    el.kaliFullscreenBar = document.getElementById("kaliFullscreenBar");
    el.ktFsTaskBadge = document.getElementById("ktFsTaskBadge");
    el.ktFsProgress = document.getElementById("ktFsProgress");
    el.btnFsTask = document.getElementById("btnFsTask");
    el.btnFsBatafsil = document.getElementById("btnFsBatafsil");
    el.btnFsHint = document.getElementById("btnFsHint");
    el.btnFsPreview = document.getElementById("btnFsPreview");
    el.btnFsMap = document.getElementById("btnFsMap");
    el.btnExitFullscreen = document.getElementById("btnExitFullscreen");
    el.btnFloatingExitFs = document.getElementById("btnFloatingExitFs");
    el.btnOpenBatafsil = document.getElementById("btnOpenBatafsil");
    el.terminalActiveModeBadge = document.getElementById("terminalActiveModeBadge");
    el.btnOpenDictionary = document.getElementById("btnOpenDictionary");
    el.terminalTaskBar = document.getElementById("terminalTaskBar");
    el.terminalTaskText = document.getElementById("terminalTaskText");
    el.btnTtBatafsil = document.getElementById("btnTtBatafsil");
    el.btnTtHint = document.getElementById("btnTtHint");
    el.btnTtExpected = document.getElementById("btnTtExpected");

    el.kaliScreen = document.getElementById("kaliScreen");
    el.kaliStream = document.getElementById("kaliStream");
    el.kaliActivePrompt = document.getElementById("kaliActivePrompt");
    el.kaliPromptPath = document.getElementById("kaliPromptPath");
    el.kaliTypedText = document.getElementById("kaliTypedText");
    el.kaliCursor = document.getElementById("kaliCursor");
    el.kaliHiddenInput = document.getElementById("kaliHiddenInput");
    el.kaliTouchBar = document.getElementById("kaliTouchBar");
    el.btnTouchPrev = document.getElementById("btnTouchPrev");
    el.btnTouchNext = document.getElementById("btnTouchNext");

    // Engine switch & WASM
    el.btnEngineShell = document.getElementById("btnEngineShell");
    el.btnEngineWasm = document.getElementById("btnEngineWasm");
    el.wasmTerminalContainer = document.getElementById("wasmTerminalContainer");
    el.wasmLoader = document.getElementById("wasmLoader");
    el.wasmLoaderText = document.getElementById("wasmLoaderText");
    el.wasmXtermBox = document.getElementById("wasmXtermBox");

    // In-terminal interactive editor (nano / vim)
    el.terminalEditorOverlay = document.getElementById("terminalEditorOverlay");
    el.editorTitle = document.getElementById("editorTitle");
    el.editorTextarea = document.getElementById("editorTextarea");
    el.btnEditorSave = document.getElementById("btnEditorSave");
    el.btnEditorExit = document.getElementById("btnEditorExit");
    el.editorStatus = document.getElementById("editorStatus");

    // Modals
    el.modalKtTask = document.getElementById("modalKtTask");
    el.btnCloseKtTask = document.getElementById("btnCloseKtTask");
    el.ktModalTaskHeading = document.getElementById("ktModalTaskHeading");
    el.ktModalDiffBadge = document.getElementById("ktModalDiffBadge");
    el.ktModalSourceBadge = document.getElementById("ktModalSourceBadge");
    el.ktModalStory = document.getElementById("ktModalStory");
    el.ktModalTaskText = document.getElementById("ktModalTaskText");
    el.ktModalTags = document.getElementById("ktModalTags");
    el.btnKtModalDone = document.getElementById("btnKtModalDone");
    el.btnKtModalHint = document.getElementById("btnKtModalHint");
    el.btnKtModalSol = document.getElementById("btnKtModalSol");

    el.modalKtBatafsil = document.getElementById("modalKtBatafsil");
    el.btnCloseKtBatafsil = document.getElementById("btnCloseKtBatafsil");
    el.btnOkKtBatafsil = document.getElementById("btnOkKtBatafsil");
    el.ktBatafsilCode = document.getElementById("ktBatafsilCode");
    el.ktBatafsilContent = document.getElementById("ktBatafsilContent");
  }

  function formatInlineMarkdown(str) {
    if (!str) return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, '<code style="background:rgba(6,182,212,0.15); color:#22d3ee; padding:1px 5px; border-radius:3px; font-family:\'JetBrains Mono\', monospace; font-size:12px;">$1</code>');
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

  // --- Rank & Career Management ---
  function getCurrentRank(solvedCount) {
    const ranks = window.VIRTUAL_LINUX_W6.careerRanks;
    let rank = ranks[0];
    for (const r of ranks) {
      if (solvedCount >= r.minSolved) {
        rank = r;
      }
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

    // Check next rank promotion notice
    const nextRank = window.VIRTUAL_LINUX_W6.careerRanks.find(r => r.minSolved > solved);
    if (nextRank && el.tickerMessage) {
      el.tickerMessage.textContent = `Navbatdagi unvon (${nextRank.title}) uchun yana ${nextRank.minSolved - solved} ta topshiriq zarur.`;
    }
  }

  // --- Sectors Navigation ---
  function renderSectorBar() {
    if (!el.sectorNavList) return;
    el.sectorNavList.innerHTML = "";

    const sectors = window.VIRTUAL_LINUX_W6.sectors;
    sectors.forEach(sec => {
      const sId = sec.id || sec.sector;
      const sIcon = sec.icon || "🐧";
      const pill = document.createElement("button");
      pill.className = `sector-pill ${sId === state.activeSector ? "active" : ""}`;

      // Calculate solved in this sector
      const startId = (sId - 1) * 15 + 1;
      const endId = sId * 15;
      let secSolved = 0;
      for (let i = startId; i <= endId; i++) {
        if (state.solvedIds.has(i)) secSolved++;
      }

      // Clean short sector title for the pill to prevent text collisions or wrapping
      let cleanTitle = `${sId}-Qavat`;
      if (sec.name && sec.name.includes(":")) {
        cleanTitle = sec.name.split(":")[0].trim();
      }
      pill.title = `${sec.name || ""} — ${sec.subtitle || ""}`;
      pill.innerHTML = `
        <span>${sIcon}</span>
        <span><b>S${sId}</b> • ${cleanTitle}</span>
        <span class="pill-count">${secSolved}/15</span>
      `;

      pill.addEventListener("click", () => {
        selectSector(sId);
      });

      el.sectorNavList.appendChild(pill);
    });
  }

  function selectSector(sectorNum) {
    state.activeSector = sectorNum;
    renderSectorBar();

    const sec = window.VIRTUAL_LINUX_W6.sectors.find(s => (s.id || s.sector) === sectorNum);
    if (sec && el.floorHeaderTitle) {
      el.floorHeaderTitle.textContent = `Sektor ${sectorNum}: ${sec.name}`;
    }
    if (sec && el.sectorSubTitle) {
      el.sectorSubTitle.textContent = `${sec.name} — ${sec.subtitle || ""}`;
    }

    if (state.arena) {
      state.arena.setSector(sectorNum);
    }

    // Switch question to first unsolved question in this sector, or the first question
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

    // Fill Dossier
    if (el.qNumberBadge) el.qNumberBadge.textContent = `Vazifa #${q.id} / 150`;
    if (el.qDifficultyBadge) el.qDifficultyBadge.textContent = q.difficulty || "Standart";
    if (el.qSourceBadge) el.qSourceBadge.textContent = q.source || "WIUT OS";
    if (el.qTitle) el.qTitle.textContent = `${q.id}. ${q.title}`;
    if (el.qStory) el.qStory.textContent = q.story || "";
    
    // Academic Case Study Dossier (Database Systems Standard)
    const elNarrative = document.getElementById("caseNarrativeBox");
    const elTasks = document.getElementById("caseTasksBox");
    if (elNarrative) {
      const storyText = q.caseStudy && q.caseStudy.paragraphs ? q.caseStudy.paragraphs.join("\n\n") : (q.story || "");
      const paras = storyText.split("\n\n").filter(p => p.trim());
      elNarrative.innerHTML = paras.map(p => '<p>' + formatInlineMarkdown(p) + '</p>').join("");
    }
    if (elTasks) {
      const taskText = q.instruction || (q.caseStudy && q.caseStudy.tasks ? q.caseStudy.tasks[0] : (q.taskUz ? q.taskUz : "Topshiriqni terminalda bajaring."));
      elTasks.innerHTML = '<div class="case-instruction-pill"><span style="font-size:16px;">🎯</span><div><strong>Texnik Topshiriq:</strong> ' + formatInlineMarkdown(taskText) + '</div></div>';
    }
    if (el.qTask) el.qTask.innerHTML = q.taskUz || "";

    if (el.terminalTaskText && state.terminalMode !== "sandbox") {
      const cleanTask = q.taskUz ? q.taskUz.replace(/<[^>]*>/g, "") : q.title;
      el.terminalTaskText.textContent = `📌 #${q.id}: ${cleanTask}`;
    }

    // Tags
    if (el.qTagsList) {
      el.qTagsList.innerHTML = "";
      if (Array.isArray(q.tags)) {
        q.tags.forEach(tag => {
          const tSpan = document.createElement("span");
          tSpan.className = "token-btn";
          tSpan.textContent = `#${tag}`;
          tSpan.style.cursor = "pointer";
          tSpan.title = `Terminalga '${tag}' deb qo'shish`;
          tSpan.addEventListener("click", () => {
            insertKaliToken(tag);
          });
          el.qTagsList.appendChild(tSpan);
        });
      }
    }

    // Render Command & Flag Anatomy Card (Master User Feature)
    if (el.cmdCardBody && window.COMMAND_ANATOMY) {
      const anatomy = window.COMMAND_ANATOMY.analyze(q.expectedSql || q.expectedBash, q);
      if (el.cmdCardCode) el.cmdCardCode.textContent = anatomy.fullCommand || (q.expectedSql || q.expectedBash);
      el.cmdCardBody.innerHTML = window.COMMAND_ANATOMY.renderCardHtml(anatomy);
      el.cmdCardBody.style.display = "none";
      if (el.btnToggleCmdCard) el.btnToggleCmdCard.classList.remove("open");
      if (el.cmdCardToggleHint) el.cmdCardToggleHint.textContent = "Batafsil ko'rish";
    }

    // Fullscreen Title Update
    if (el.fsQuestionTitle) {
      el.fsQuestionTitle.textContent = `Vazifa #${q.id}: ${q.title}`;
    }

    // Update Kali Terminal HUD & Fullscreen Bar & Modals
    const cmdWord = (q.expectedSql || q.expectedBash || "").split(" ")[0] || "bash";
    if (el.ktCurrentTaskNum) {
      el.ktCurrentTaskNum.textContent = `#${q.id}: ${cmdWord}`;
    }
    if (el.ktFsTaskBadge) {
      el.ktFsTaskBadge.textContent = `#${q.id}: ${cmdWord}`;
    }
    if (el.ktProgressBadge) {
      el.ktProgressBadge.textContent = `${state.solvedIds.size} / 150`;
    }
    if (el.ktFsProgress) {
      el.ktFsProgress.textContent = `${state.solvedIds.size} / 150`;
    }
    if (el.ktModalTaskHeading) el.ktModalTaskHeading.textContent = `Vazifa #${q.id}: ${q.title}`;
    if (el.ktModalDiffBadge) el.ktModalDiffBadge.textContent = q.difficulty || "Standart";
    if (el.ktModalSourceBadge) el.ktModalSourceBadge.textContent = q.source || "WIUT OS";
    if (el.ktModalStory) el.ktModalStory.textContent = q.story || "";
    if (el.ktModalTaskText) el.ktModalTaskText.innerHTML = q.taskUz || "";
    if (el.ktModalTags) {
      el.ktModalTags.innerHTML = "";
      if (Array.isArray(q.tags)) {
        q.tags.forEach(tag => {
          const tSpan = document.createElement("span");
          tSpan.className = "token-btn";
          tSpan.textContent = `#${tag}`;
          el.ktModalTags.appendChild(tSpan);
        });
      }
    }
    if (el.ktBatafsilContent && window.COMMAND_ANATOMY) {
      const anatomy = window.COMMAND_ANATOMY.analyze(q.expectedSql || q.expectedBash, q);
      if (el.ktBatafsilCode) el.ktBatafsilCode.textContent = anatomy.fullCommand || (q.expectedSql || q.expectedBash);
      el.ktBatafsilContent.innerHTML = window.COMMAND_ANATOMY.renderCardHtml(anatomy);
    }

    // Reset feedback and hint
    if (el.hintBox) {
      el.hintBox.style.display = "none";
      el.hintBox.innerHTML = "";
    }
    if (el.feedbackBox) {
      el.feedbackBox.style.display = "none";
      el.feedbackBox.className = "feedback-box";
      el.feedbackBox.innerHTML = "";
    }

    // Focus Terminal Input
    if (el.bashInput) {
      el.bashInput.value = "";
    }
    if (el.kaliHiddenInput) {
      el.kaliHiddenInput.value = "";
      if (el.kaliTypedText) el.kaliTypedText.textContent = "";
      if (state.layoutMode === "kali") {
        setTimeout(() => el.kaliHiddenInput.focus(), 60);
      }
    }

    updateTerminalPrompt();
  }

  function updateTerminalPrompt() {
    const isRoot = state.liveShell && state.liveShell.isRoot;
    const cwd = state.liveShell ? state.liveShell.cwd : "/home/student";
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);

    if (el.kaliPromptPath) el.kaliPromptPath.textContent = promptPath;
    if (el.kaliPromptUser) {
      el.kaliPromptUser.textContent = isRoot ? "root" : "userland";
      if (isRoot) el.kaliPromptUser.classList.add("is-root");
      else el.kaliPromptUser.classList.remove("is-root");
    }
    if (el.kaliPromptArrow) {
      el.kaliPromptArrow.textContent = isRoot ? "└─# " : "└─$ ";
      if (isRoot) el.kaliPromptArrow.classList.add("is-root");
      else el.kaliPromptArrow.classList.remove("is-root");
    }
  }

  function appendKaliPromptHistory(cmd) {
    if (!el.kaliStream) return;
    const isRoot = state.liveShell && state.liveShell.isRoot;
    const cwd = state.liveShell ? state.liveShell.cwd : "/home/student";
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    const user = isRoot ? "root" : "userland";
    const userClass = isRoot ? "k-red" : "k-blue";
    const arrow = isRoot ? "└─# " : "└─$ ";
    const arrowClass = isRoot ? "k-red" : "k-green";

    const div = document.createElement("div");
    div.className = "kali-history-entry";
    div.innerHTML = `
      <div class="kali-cmd-line1"><span class="k-green">┌──(</span><span class="${userClass}">${user}</span><span class="k-white">💀</span><span class="k-blue">localhost</span><span class="k-green">)-[</span><span class="k-white">${promptPath}</span><span class="k-green">]</span></div>
      <div class="kali-cmd-line2"><span class="${arrowClass}">${arrow}</span><span class="k-cmd">${escapeHtml(cmd)}</span></div>
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

    // Check in-terminal meta commands
    const lower = rawCmd.toLowerCase();

    if (lower === "task" || lower === "vazifa") {
      appendKaliPromptHistory(rawCmd);
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q) {
        const card = document.createElement("div");
        card.className = "kali-meta-card";
        card.innerHTML = `
<b>┌──[ TOP SHIRIQ #${q.id} / 150 ]─────────────────────────────────────────</b><br>
│ <b>Mavzu:</b> ${escapeHtml(q.title)}<br>
│ <b>Qavat:</b> ${escapeHtml(q.difficulty || "Standart")} • ${escapeHtml(q.source || "WIUT OS")}<br>
│ <b>Tavsif:</b> ${q.taskUz || ""}<br>
│ <b>Maslahat:</b> 'hint' deb yozing yoki yuqoridagi [💡 Maslahat] tugmasini bosing.<br>
<b>└────────────────────────────────────────────────────────────────────────┘</b>
`;
        el.kaliStream.appendChild(card);
      }
      if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
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
      if (q) {
        printKaliInfo(`[💡 MASLAHAT]: ${q.hint || "Topshiriq matniga qarang."}`);
      }
      return;
    }

    if (lower === "preview" || lower === "natija") {
      appendKaliPromptHistory(rawCmd);
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q) {
        const expShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();
        const res = expShell.execute(q.expectedSql || q.expectedBash || "");
        printKaliInfo(`[👁 KUTILAYOTGAN NATIJA]:\n${res.stdout || "(Fayl tizimida o'zgarish sodir bo'ladi)"}`);
      }
      return;
    }

    if (lower === "next" || lower === "keyingi") {
      appendKaliPromptHistory(rawCmd);
      if (state.currentQuestionId < allQuestions.length) {
        loadQuestion(state.currentQuestionId + 1);
        const qNext = allQuestions.find(item => item.id === state.currentQuestionId);
        printKaliInfo(`[➔] Keyingi vazifa yuklandi: #${state.currentQuestionId} (${qNext ? qNext.title : ""})`);
      } else {
        printKaliInfo("[!] Siz oxirgi (150-chi) vazifadasiz!");
      }
      return;
    }

    if (lower === "prev" || lower === "oldingi") {
      appendKaliPromptHistory(rawCmd);
      if (state.currentQuestionId > 1) {
        loadQuestion(state.currentQuestionId - 1);
        const qPrev = allQuestions.find(item => item.id === state.currentQuestionId);
        printKaliInfo(`[➔] Oldingi vazifaga qaytildi: #${state.currentQuestionId} (${qPrev ? qPrev.title : ""})`);
      } else {
        printKaliInfo("[!] Siz 1-vazifadasiz.");
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

    if (lower === "exit" || lower === "split" || lower === "quit" || lower === "2d") {
      appendKaliPromptHistory(rawCmd);
      toggleTerminalFullscreen(false);
      return;
    }

    if (lower === "fs" || lower === "files") {
      appendKaliPromptHistory(rawCmd);
      setWorkbenchTab("fs");
      return;
    }

    if (lower === "term" || lower === "cli") {
      appendKaliPromptHistory(rawCmd);
      setWorkbenchTab("terminal");
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

    if (lower === "help") {
      appendKaliPromptHistory(rawCmd);
      printKaliInfo(`WIUT Kali Linux Terminal Buyruqlari:
  task / vazifa    - Joriy topshiriq va talablarni chiqarish
  batafsil         - Buyruq va bayroqlar to'liq tahlili (modal)
  hint / maslahat  - Yordamchi maslahatni olish
  preview / natija - Kutilayotgan buyruq va natijani ko'rish
  next / keyingi   - Keyingi savolga o'tish
  prev / oldingi   - Oldingi savolga qaytish
  clear            - Terminalni tozalash
  map / xarita     - 150 savol xaritasini ochish
  fullscreen       - Terminalni to'liq ekranga yoyish (F11)
  exit / split     - Standart 2 ustunli ko'rinishga qaytish
  fs / files       - Fayl tizimi va Inodelar jadvalini ko'rish
  term             - Terminal (CLI) rejimiga qaytish
  sandbox / erkin  - Erkin CLI sandbox rejimiga o'tish
  quest / masala   - Topshiriqlar rejimiga qaytish
  Istalgan Linux buyrug'ini yozing: pwd, ls -la, mkdir, touch, cat, ...`);
      return;
    }

    // Append executed prompt line to history
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

    // Execute in live shell
    const res = state.liveShell.execute(rawCmd);
    state.lastExitCode = (res && typeof res.code === "number") ? res.code : 0;

    if (res && res.editorAction) {
      openTerminalEditor(res.editorAction);
      return;
    }

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

    // In Sandbox Mode, user is free to test any command without question grading!
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

    // Grade against current question
    const currentQ = allQuestions.find(q => q.id === state.currentQuestionId);
    if (!currentQ) return;

    const expectedCmd = currentQ.expectedSql || currentQ.expectedBash || "";
    const grade = window.VIRTUAL_LINUX_W6.BASH_GRADER.evaluate(rawCmd, expectedCmd, currentQ);

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

      if (el.ktProgressBadge) {
        el.ktProgressBadge.textContent = `${state.solvedIds.size} / 150`;
      }

      if (state.arena) {
        state.arena.addSuccessBurst();
        state.arena.player.speech = "Barakalla! Buyruq to'liq va xatosiz bajarildi!";
        state.arena.player.speechTimer = 180;
      }

      const succDiv = document.createElement("div");
      succDiv.className = "kali-grade-success";
      succDiv.innerHTML = `✓ TO'G'RI! ${escapeHtml(grade.message)}<br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi! Keyingi topshiriqqa o'tish uchun <b>'next'</b> deb yozing yoki yuqoridagi [Keyingi ▶] tugmasini bosing.</span>`;
      el.kaliStream.appendChild(succDiv);

      showFeedback(true, `<b>✓ ${grade.message}</b><br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi. Keyingi topshiriqqa o'tishingiz mumkin!</span>`);

      checkOfficeEventTrigger(currentQ.id);
    } else {
      SoundFX.playError();
      const errDiv = document.createElement("div");
      errDiv.className = "kali-grade-error";
      errDiv.innerHTML = `✕ DIQQAT: ${escapeHtml(grade.message)}<br><span style="color:#fca5a5; font-size:11.5px;">Tizim xatolikni qaytardi yoki kutilgan natija boshqacha. Maslahat ko'rish uchun <b>'hint'</b> yoki <b>'batafsil'</b> deb yozing.</span>`;
      el.kaliStream.appendChild(errDiv);

      showFeedback(false, `<b>✕ Diqqat:</b> ${grade.message}<br><span style="color:#fca5a5; font-size:11.5px;">Tizim xatolikni qaytardi yoki kutilgan natija boshqacha. "💡 Maslahat" yoki "👁 Kutilayotgan Natija" tugmasidan foydalaning.</span>`);
    }

    if (el.kaliScreen) {
      el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
    }
  }

  // --- Bind Event Listeners ---
  function bindEvents() {
    // Layout Mode Switchers (Top HUD & Terminal Header)
    if (el.btnModeSplit) el.btnModeSplit.addEventListener("click", () => toggleTerminalFullscreen(false));
    if (el.btnModeCli) el.btnModeCli.addEventListener("click", () => toggleTerminalFullscreen(true));
    if (el.btnModeFull) el.btnModeFull.addEventListener("click", () => toggleTerminalFullscreen(true));

    if (el.termBtnSplit) el.termBtnSplit.addEventListener("click", () => toggleTerminalFullscreen(false));
    if (el.termBtnCli) el.termBtnCli.addEventListener("click", () => toggleTerminalFullscreen(true));
    if (el.termBtnFull) el.termBtnFull.addEventListener("click", () => toggleTerminalFullscreen(true));

    // Mac-style Window Dots
    if (el.dotClear) el.dotClear.addEventListener("click", () => {
      if (el.kaliStream) el.kaliStream.innerHTML = "";
      window.triggerBashKey("clear");
    });
    if (el.dotExpand) el.dotExpand.addEventListener("click", () => toggleTerminalFullscreen());
    if (el.dotFullscreen) el.dotFullscreen.addEventListener("click", () => toggleTerminalFullscreen());

    // Fullscreen Bar Buttons
    if (el.btnExitFullscreen) el.btnExitFullscreen.addEventListener("click", () => toggleTerminalFullscreen(false));
    if (el.btnFsBatafsil) el.btnFsBatafsil.addEventListener("click", () => {
      if (el.modalKtBatafsil) el.modalKtBatafsil.classList.add("active");
    });
    if (el.btnFsHint) el.btnFsHint.addEventListener("click", () => {
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q) printKaliInfo(`[💡 MASLAHAT]: ${q.hint || "Topshiriq talablarini diqqat bilan o'rganing."}`);
    });
    if (el.btnFsPreview) el.btnFsPreview.addEventListener("click", () => {
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q) {
        const expShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();
        const res = expShell.execute(q.expectedSql || q.expectedBash || "");
        printKaliInfo(`[👁 KUTILAYOTGAN NATIJA]:\n${res.stdout || "(Fayl tizimida o'zgarish sodir bo'ladi)"}`);
      }
    });

    // Global Keyboard Shortcuts (Escape to exit fullscreen, F11 to toggle, Ctrl+L to clear)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && state.terminalFullscreen) {
        e.preventDefault();
        toggleTerminalFullscreen(false);
      } else if (e.key === "F11") {
        e.preventDefault();
        toggleTerminalFullscreen();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        if (el.kaliStream) el.kaliStream.innerHTML = "";
        window.triggerBashKey("clear");
      }
    });

    // Top HUD
    if (el.btnTriggerEvent) {
      el.btnTriggerEvent.addEventListener("click", () => openEventModal());
    }
    if (el.btnQuickEvent) {
      el.btnQuickEvent.addEventListener("click", () => openEventModal());
    }
    if (el.btnOpenMap) {
      el.btnOpenMap.addEventListener("click", () => openMapModal());
    }
    if (el.btnResetProgress) {
      el.btnResetProgress.addEventListener("click", () => {
        if (confirm("Haqiqatan ham barcha 150 topshiriq natijalarini noldan boshlamoqchimisiz?")) {
          localStorage.removeItem(STORAGE_KEY);
          state.solvedIds.clear();
          state.bonusCapital = 0;
          state.currentQuestionId = 1;
          state.activeSector = 1;
          state.liveShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();
          saveProgress();
          updateHUD();
          renderSectorBar();
          loadQuestion(1);
          renderFsExplorer();
        }
      });
    }

    // Prev / Next Question
    if (el.btnPrevQ) {
      el.btnPrevQ.addEventListener("click", () => {
        if (state.currentQuestionId > 1) {
          loadQuestion(state.currentQuestionId - 1);
        }
      });
    }
    if (el.btnNextQ) {
      el.btnNextQ.addEventListener("click", () => {
        if (state.currentQuestionId < allQuestions.length) {
          loadQuestion(state.currentQuestionId + 1);
        }
      });
    }

    // Schema Tabs
    el.schemaTabs.forEach(tabBtn => {
      tabBtn.addEventListener("click", () => {
        el.schemaTabs.forEach(b => b.classList.remove("active"));
        tabBtn.classList.add("active");
        state.activeFsTab = tabBtn.dataset.tab;
        renderFsExplorer();
      });
    });

    // Terminal Input
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
          handleTabAutocompletion();
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "c") {
          e.preventDefault();
          window.triggerBashKey("CtrlC");
        }
      });
    }

    // Clear Terminal
    if (el.btnClearTerminal) {
      el.btnClearTerminal.addEventListener("click", () => {
        if (el.terminalOutput) el.terminalOutput.innerHTML = "";
      });
    }

    // Run Button
    if (el.btnRunBash) {
      el.btnRunBash.addEventListener("click", () => handleCommandSubmit());
    }

    // Hint Button
    if (el.btnShowHint) {
      el.btnShowHint.addEventListener("click", () => {
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (!q || !el.hintBox) return;
        SoundFX.playKey();
        el.hintBox.innerHTML = `<b>💡 Maslahat:</b> ${q.hint || "Topshiriq matniga va manba darsligiga e'tibor qarating."}`;
        el.hintBox.style.display = "block";
      });
    }

    // Preview Expected
    if (el.btnPreviewExpected) {
      el.btnPreviewExpected.addEventListener("click", () => {
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (!q) return;
        SoundFX.playKey();
        const expShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();
        const res = expShell.execute(q.expectedSql || q.expectedBash || "");
        showFeedback(true, `<b>👁 Kutilayotgan Natija (Chiqish):</b><br><pre style="background:#040711; padding:6px; border-radius:4px; color:#34d399; margin-top:4px;">${res.stdout || "(Fayl tizimida o'zgarish sodir bo'ladi)"}</pre>`);
      });
    }

    // Reveal Solution
    if (el.btnRevealAnswer) {
      el.btnRevealAnswer.addEventListener("click", () => openSolutionModal());
    }

    // Modal Close buttons
    if (el.btnCloseMap) {
      el.btnCloseMap.addEventListener("click", () => el.modalMap.classList.remove("active"));
    }
    if (el.btnCloseEvent) {
      el.btnCloseEvent.addEventListener("click", () => el.modalEvent.classList.remove("active"));
    }
    if (el.btnCloseSolution) {
      el.btnCloseSolution.addEventListener("click", () => el.modalSolution.classList.remove("active"));
    }

    // Close modals on overlay click
    [el.modalMap, el.modalEvent, el.modalSolution].forEach(modal => {
      if (!modal) return;
      modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("active");
      });
    });

    // Map Search
    if (el.mapSearch) {
      el.mapSearch.addEventListener("input", (e) => {
        renderMapQuestions("all", e.target.value);
      });
    }

    // Map Filter Pills
    el.mapFilterPills.forEach(pill => {
      pill.addEventListener("click", () => {
        el.mapFilterPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        const filter = pill.dataset.filter || "all";
        renderMapQuestions(filter, el.mapSearch ? el.mapSearch.value : "");
      });
    });

    // Keyboard Shortcuts (Ctrl+Enter to Run)
    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleCommandSubmit();
      }
    });
  }

  // --- Initialization ---
  function init() {
    cacheElements();
    loadProgress();

    // Telegram WebApp Integration & Fullscreen Expand
    if (window.Telegram && window.Telegram.WebApp) {
      try {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
      } catch (e) {}
    }

    // Initialize Virtual Linux Shell
    state.liveShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();

    // Initialize 2D Canvas Engine
    state.arena = new window.CyberNocArena2D("gameCanvas");
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
    renderFsExplorer();
    toggleTerminalFullscreen(false);

    // Initial terminal welcome message
    appendTerminalOutput("Linux debian-server 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.76-1", "normal");
    appendTerminalOutput("WIUT OS Lab v1.0.0 (Bash 5.2.15). Tizimga xush kelibsiz!", "success");
    appendTerminalOutput("Terminalga buyruq yozing va Enter tugmasini bosing.\n", "normal");
  }

  // Run on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
