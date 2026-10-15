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
  const STORAGE_KEY = "WIUT_OS_W3_PROGRESS";
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
    const ranks = window.VIRTUAL_LINUX_W3.careerRanks;
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
    const nextRank = window.VIRTUAL_LINUX_W3.careerRanks.find(r => r.minSolved > solved);
    if (nextRank && el.tickerMessage) {
      el.tickerMessage.textContent = `Navbatdagi unvon (${nextRank.title}) uchun yana ${nextRank.minSolved - solved} ta topshiriq zarur.`;
    }
  }

  // --- Sectors Navigation ---
  function renderSectorBar() {
    if (!el.sectorNavList) return;
    el.sectorNavList.innerHTML = "";

    const sectors = window.VIRTUAL_LINUX_W3.sectors;
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

    const sec = window.VIRTUAL_LINUX_W3.sectors.find(s => (s.id || s.sector) === sectorNum);
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
    if (!state.liveShell) return;
    const isRoot = state.liveShell && state.liveShell.isRoot;
    const cwd = state.liveShell.cwd;
    const displayPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    if (el.terminalPromptPath) {
      el.terminalPromptPath.textContent = `${displayPath}${isRoot ? "#" : "$"} `;
    }
    if (el.kaliPromptPath) {
      el.kaliPromptPath.textContent = displayPath;
    }
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

    // Add to history
    state.commandHistory.push(rawCmd);
    state.historyIndex = state.commandHistory.length;

    // Display command in terminal
    const cwd = state.liveShell.cwd;
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    appendTerminalOutput(`student@debian-server:${promptPath}$ ${rawCmd}`, "cmd");

    // Clear command in terminal
    if (rawCmd.toLowerCase() === "clear") {
      el.terminalOutput.innerHTML = "";
      el.bashInput.value = "";
      return;
    }

    // echo $? exit code inspector
    if (rawCmd === "echo $?") {
      appendTerminalOutput(String(state.lastExitCode || 0), "normal");
      el.bashInput.value = "";
      return;
    }

    // Execute in live shell
    const res = state.liveShell.execute(rawCmd);
    state.lastExitCode = (res && typeof res.code === "number") ? res.code : 0;
    if (res.stdout) appendTerminalOutput(res.stdout, "normal");
    if (res.stderr) appendTerminalOutput(res.stderr, "error");
    updateTerminalPrompt();
    renderFsExplorer();

    // Grade against current question
    const currentQ = allQuestions.find(q => q.id === state.currentQuestionId);
    if (!currentQ) return;

    const expectedCmd = currentQ.expectedSql || currentQ.expectedBash || "";
    const grade = window.VIRTUAL_LINUX_W3.BASH_GRADER.evaluate(rawCmd, expectedCmd, currentQ);

    if (grade.match) {
      // SUCCESS!
      SoundFX.playSuccess();
      const isNew = !state.solvedIds.has(currentQ.id);
      state.solvedIds.add(currentQ.id);

      if (isNew) {
        state.bonusCapital += 100;
        // Streak bonuses
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

      // Check incident triggers
      checkOfficeEventTrigger(currentQ.id);

    } else {
      // Mismatch or error
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
    const events = window.VIRTUAL_LINUX_W3.officeEvents;
    const ev = events.find(e => e.triggerAfterQuestion === questionId);
    if (ev) {
      setTimeout(() => {
        openEventModal(ev);
      }, 700);
    }
  }

  function openEventModal(eventObj) {
    if (!el.modalEvent) return;
    const ev = eventObj || window.VIRTUAL_LINUX_W3.officeEvents[0];

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

      // Filter check
      if (filter === "solved" && !isSolved) return;
      if (filter === "unsolved" && isSolved) return;
      if (filter.startsWith("sector_")) {
        const sNum = parseInt(filter.split("_")[1], 10);
        if (q.sector !== sNum) return;
      }

      // Search check
      if (query) {
        const hay = `${q.id} ${q.title} ${q.expectedSql || ""} ${q.tags ? q.tags.join(" ") : ""}`.toLowerCase();
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
    el.solCode.textContent = q.expectedSql || q.expectedBash || "";
    el.solExplanation.innerHTML = `
      <p style="margin-bottom:8px;"><b>Tushuntirish:</b> ${q.hint || "Ushbu buyruq Linux tizimida topshiriqda belgilangan amallarni bajaradi."}</p>
      <p style="font-size:11.5px; color:#94a3b8;"><b>Muqobil yechimlar:</b> ${q.solutions ? q.solutions.map(s => `<code>${s}</code>`).join(", ") : "—"}</p>
    `;

    el.modalSolution.classList.add("active");
  }

  // --- Virtual File System Explorer Display ---
  function renderFsExplorer() {
    if (!el.schemaTableDisplay || !state.liveShell) return;

    const tab = state.activeFsTab;

    if (tab === "inode") {
      // Render full Inode Table across all files in root!
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
          mtime: node.mtime
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
              <th>Bog'lam (Links)</th>
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
            <td class="badge-perm">${f.permissions}</td>
            <td style="color:${f.links > 1 ? "#fbbf24" : "#94a3b8"}; font-weight:${f.links > 1 ? "bold" : "normal"};">${f.links}</td>
            <td>${f.owner}</td>
            <td class="${f.type === 'dir' ? 'badge-dir' : (f.type === 'symlink' ? 'badge-symlink' : 'badge-file')}">${f.path}</td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    if (tab === "terminal") {
      // Render bash history
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
        // Run expected in clone
        const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
        const expRes = expShell.execute(q.expectedSql || q.expectedBash || "");
        html += `<div style="margin-bottom:10px;"><b>Topshiriq #${q.id}:</b> ${q.title}</div>`;
        html += `<div style="margin-bottom:6px; color:#38bdf8;">Kutilgan buyruq: <code>${q.expectedSql || q.expectedBash}</code></div>`;
        html += `<div style="background:#090e1c; padding:8px; border-radius:4px; margin-bottom:10px; border:1px solid rgba(6,182,212,0.3);">
          <div style="font-size:11px; color:#94a3b8; margin-bottom:4px;">Kutilayotgan Chiqish (stdout):</div>
          <pre style="color:#34d399; font-size:11.5px; white-space:pre-wrap;">${expRes.stdout || "(bo'sh chiqish / fayl tizimi o'zgarishi)"}</pre>
        </div>`;
      }
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;
      return;
    }

    // Default: View directory contents for selected folder
    let targetPath = "/home/student";
    if (tab === "etc") targetPath = "/etc";
    if (tab === "log") targetPath = "/var/log";
    if (tab === "tmp") targetPath = "/tmp";
    if (tab === "dev") targetPath = "/dev";

    const node = state.liveShell.getNode(targetPath);
    if (!node || node.type !== "dir") {
      el.schemaTableDisplay.innerHTML = `<div style="padding:10px; color:#ef4444;">Katalog topilmadi: ${targetPath}</div>`;
      return;
    }

    let html = `
      <div style="margin-bottom:8px; color:var(--accent-cyan-bright); font-size:12px;">
        📂 <b>Manzil:</b> ${targetPath} &nbsp; | &nbsp; <b>Inode:</b> ${node.inode} &nbsp; | &nbsp; <b>Ruxsatlar:</b> ${node.permissions}
      </div>
      <table class="fs-table">
        <thead>
          <tr>
            <th>Nomi</th>
            <th>Ruxsatlar</th>
            <th>Links</th>
            <th>Egasi</th>
            <th>Inode</th>
            <th>Hajmi / Ma'lumot</th>
          </tr>
        </thead>
        <tbody>
    `;

    const children = Object.values(node.children || {});
    if (children.length === 0) {
      html += `<tr><td colspan="6" style="text-align:center; color:#64748b;">(katalog bo'sh)</td></tr>`;
    } else {
      children.forEach(child => {
        const isDir = child.type === "dir";
        const isSym = child.type === "symlink";
        const sizeInfo = isDir ? "4096 bayt" : (isSym ? `-> ${child.target}` : `${child.content ? child.content.length : 0} bayt`);

        html += `
          <tr>
            <td class="${isDir ? 'badge-dir' : (isSym ? 'badge-symlink' : 'badge-file')}">
              ${isDir ? '📁 ' : (isSym ? '🔗 ' : '📄 ')}${child.name}
            </td>
            <td class="badge-perm">${child.permissions}</td>
            <td style="color:${child.links > 1 ? "#fbbf24" : "#94a3b8"};">${child.links}</td>
            <td>${child.owner}:${child.group}</td>
            <td class="badge-inode">${child.inode}</td>
            <td>${sizeInfo}</td>
          </tr>
        `;
      });
    }

    html += `</tbody></table>`;
    el.schemaTableDisplay.innerHTML = html;
  }

  // --- Terminal Layout Modes & Fullscreen ---
  function toggleTerminalFullscreen(enable) {
    const isFs = (typeof enable === "boolean") ? enable : !state.terminalFullscreen;
    state.terminalFullscreen = isFs;
    state.layoutMode = isFs ? "fullscreen" : "split";
    SoundFX.playKey();

    if (isFs) {
      if (el.terminalWorkbenchCard) el.terminalWorkbenchCard.classList.add("is-fullscreen");
      if (el.kaliFullscreenBar) el.kaliFullscreenBar.style.display = "flex";
      if (el.btnToggleFullscreen) el.btnToggleFullscreen.textContent = "✕ Kichraytirish";
      if (el.btnModeFull) el.btnModeFull.classList.add("active");
      if (el.btnModeSplit) el.btnModeSplit.classList.remove("active");
      if (el.btnModeCli) el.btnModeCli.classList.remove("active");
      document.body.classList.add("terminal-is-fullscreen");
    } else {
      if (el.terminalWorkbenchCard) el.terminalWorkbenchCard.classList.remove("is-fullscreen");
      if (el.kaliFullscreenBar) el.kaliFullscreenBar.style.display = "none";
      if (el.btnToggleFullscreen) el.btnToggleFullscreen.textContent = "⛶ To'liq Ekran";
      if (el.btnModeSplit) el.btnModeSplit.classList.add("active");
      if (el.btnModeFull) el.btnModeFull.classList.remove("active");
      if (el.btnModeCli) el.btnModeCli.classList.remove("active");
      document.body.classList.remove("terminal-is-fullscreen");
    }

    setTimeout(() => {
      if (typeof fitWasmTerminal === "function") fitWasmTerminal();
      focusKaliInput();
    }, 50);
    setTimeout(() => {
      if (typeof fitWasmTerminal === "function") fitWasmTerminal();
      focusKaliInput();
    }, 250);
  }

  function scrollKaliToBottom() {
    if (!el.kaliScreen) return;
    el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
    if (el.kaliActivePrompt) {
      try {
        el.kaliActivePrompt.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
      } catch(e) {}
    }
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
      if (el.terminalActiveModeBadge) el.terminalActiveModeBadge.textContent = "💻 Erkin CLI";
      if (el.btnFsToggleMode) el.btnFsToggleMode.textContent = "💻 Rejim: Erkin CLI";

      const card = document.createElement("div");
      card.className = "kali-meta-card";
      card.style.borderColor = "rgba(56, 189, 248, 0.4)";
      card.style.color = "#38bdf8";
      card.style.margin = "6px 0";
      card.innerHTML = `<b>💻 Erkin CLI (Sandbox) Rejimi Faol!</b><br>
Istalgan Linux buyruqlarini erkin sinashingiz mumkin: <code>pwd</code>, <code>ls -la</code>, <code>mkdir demo</code>, <code>cat /etc/os-release</code>, <code>sudo apt update</code>, <code>whoami</code>, <code>hostname</code>, <code>uname -a</code>...<br>
<i>(Topshiriq yechishga qaytish uchun yuqoridagi <b>🎯 Masala Yechish Rejimi</b> tugmasini bosing yoki 'quest' deb yozing)</i>`;
      if (el.kaliStream) el.kaliStream.appendChild(card);
      if (el.kaliScreen) scrollKaliToBottom();
      focusKaliInput();
    } else {
      if (el.btnModeQuest) el.btnModeQuest.classList.add("active");
      if (el.btnModeSandbox) el.btnModeSandbox.classList.remove("active");
      if (el.terminalActiveModeBadge) el.terminalActiveModeBadge.textContent = "🎯 Topshiriq";
      if (el.btnFsToggleMode) el.btnFsToggleMode.textContent = "🎯 Rejim: Topshiriq";

      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      const card = document.createElement("div");
      card.className = "kali-meta-card";
      card.style.borderColor = "rgba(34, 211, 238, 0.4)";
      card.style.color = "#22d3ee";
      card.style.margin = "6px 0";
      card.innerHTML = `<b>🎯 Masala Yechish Rejimi Faol!</b><br>
Joriy Topshiriq #${state.currentQuestionId}: <b>${q ? escapeHtml(q.title) : ""}</b><br>
Talab etilgan buyruqni terminalda bajaring.`;
      if (el.kaliStream) el.kaliStream.appendChild(card);
      if (el.kaliScreen) scrollKaliToBottom();
      focusKaliInput();
    }
  }
  window.setTerminalMode = setTerminalMode;

  function setLayoutMode(mode) {
    if (mode === "fullscreen" || mode === "cli") {
      toggleTerminalFullscreen(true);
    } else {
      toggleTerminalFullscreen(false);
    }
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

  // --- In-Terminal Interactive Editor (nano / vim) ---
  function openTerminalEditor(action) {
    if (!el.terminalEditorOverlay || !el.editorTextarea) return;
    state.activeEditor = action;
    if (el.editorTitle) el.editorTitle.textContent = `${action.prog.toUpperCase()} • ${action.filename}`;
    el.editorTextarea.value = action.content || "";
    el.terminalEditorOverlay.style.display = "flex";
    setTimeout(() => {
      el.editorTextarea.focus();
    }, 60);
  }

  function saveAndCloseTerminalEditor() {
    if (!state.activeEditor || !el.editorTextarea) return;
    const content = el.editorTextarea.value;
    const p = state.activeEditor.path;
    const dirPath = p.substring(0, p.lastIndexOf("/")) || "/";
    const filename = p.substring(p.lastIndexOf("/") + 1);

    let dirNode = state.liveShell ? state.liveShell.getNode(dirPath) : null;
    if (!dirNode && state.liveShell) {
      state.liveShell.execute(`mkdir -p "${dirPath}"`);
      dirNode = state.liveShell.getNode(dirPath);
    }

    if (dirNode && dirNode.children) {
      let fileNode = dirNode.children[filename];
      if (!fileNode) {
        fileNode = {
          name: filename,
          type: "file",
          inode: Math.floor(Math.random() * 500000 + 1000000),
          permissions: "-rw-r--r--",
          owner: state.liveShell.user || "student",
          group: state.liveShell.user || "student",
          links: 1,
          mtime: new Date().toISOString().replace("T", " ").substring(0, 19),
          content: content,
          size: content.length
        };
        dirNode.children[filename] = fileNode;
      } else {
        fileNode.content = content;
        fileNode.size = content.length;
        fileNode.mtime = new Date().toISOString().replace("T", " ").substring(0, 19);
      }
    }

    const savedProg = state.activeEditor.prog.toUpperCase();
    const savedFile = state.activeEditor.filename;
    closeTerminalEditor();
    printKaliInfo(`[✓ ${savedProg}: '${savedFile}' muvaffaqiyatli saqlandi (${content.length} bayt)]`);
    renderFsExplorer();
  }

  function closeTerminalEditor() {
    if (el.terminalEditorOverlay) {
      el.terminalEditorOverlay.style.display = "none";
    }
    state.activeEditor = null;
    focusKaliInput();
    if (el.kaliScreen) scrollKaliToBottom();
  }

  // --- Real Linux WebAssembly (v86 + xterm.js) with IndexedDB Caching & Kali/Debian Environment ---
  let wasmEmulatorInstance = null;
  let wasmXtermInstance = null;
  let hasConfiguredKaliEnvironment = false;
  let silentlyConfiguring = false;
  let serialOutputBuffer = "";
  let serialFlushTimer = null;

  // IndexedDB Cache for linux4.iso
  const ISO_CACHE_DB = "OS_LINUX_CACHE_DB";
  const ISO_STORE = "os_assets";
  const ISO_KEY = "linux4_iso";

  function openIsoDb() {
    return new Promise((resolve) => {
      if (!window.indexedDB) return resolve(null);
      const req = window.indexedDB.open(ISO_CACHE_DB, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(ISO_STORE)) {
          db.createObjectStore(ISO_STORE);
        }
      };
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = () => resolve(null);
    });
  }

  async function getCachedLinuxIso() {
    try {
      const db = await openIsoDb();
      if (!db) return null;
      return new Promise((resolve) => {
        const tx = db.transaction(ISO_STORE, "readonly");
        const store = tx.objectStore(ISO_STORE);
        const req = store.get(ISO_KEY);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
    } catch (e) {
      return null;
    }
  }

  async function setCachedLinuxIso(buffer) {
    try {
      const db = await openIsoDb();
      if (!db) return;
      return new Promise((resolve) => {
        const tx = db.transaction(ISO_STORE, "readwrite");
        const store = tx.objectStore(ISO_STORE);
        const req = store.put(buffer, ISO_KEY);
        req.onsuccess = () => resolve(true);
        req.onerror = () => resolve(false);
      });
    } catch (e) {}
  }

  function flushWasmSerialBuffer() {
    if (serialOutputBuffer.length > 0 && wasmXtermInstance) {
      const chunk = serialOutputBuffer;
      serialOutputBuffer = "";
      wasmXtermInstance.write(chunk, () => {
        wasmXtermInstance.scrollToBottom();
      });
    }
  }

  function setupKaliEnvironmentInWasm() {
    if (hasConfiguredKaliEnvironment || !wasmEmulatorInstance) return;
    hasConfiguredKaliEnvironment = true;
    silentlyConfiguring = true;

    // Inject sudo, apt, apt-get, /etc/os-release and Kali prompt
    const script = [
      "stty -echo",
      "cat << 'SU_EOF' > /bin/sudo",
      "#!/bin/sh",
      "if [ \"$1\" = \"-i\" ] || [ \"$1\" = \"-s\" ] || [ -z \"$1\" ]; then",
      "  exec /bin/sh",
      "fi",
      "exec \"$@\"",
      "SU_EOF",
      "chmod +x /bin/sudo",
      "cat << 'APT_EOF' > /bin/apt",
      "#!/bin/sh",
      "cmd=\"$1\"",
      "case \"$cmd\" in",
      "  update)",
      "    echo \"Hit:1 http://http.kali.org/kali kali-rolling InRelease\"",
      "    echo \"Get:2 http://http.kali.org/kali kali-rolling/main amd64 Packages [19.2 MB]\"",
      "    echo \"Get:3 http://http.kali.org/kali kali-rolling/non-free amd64 Packages [212 kB]\"",
      "    echo \"Fetched 19.4 MB in 1s (19.4 MB/s)\"",
      "    echo \"Reading package lists... Done\"",
      "    echo \"Building dependency tree... Done\"",
      "    echo \"Reading state information... Done\"",
      "    echo \"All packages are up to date.\"",
      "    ;;",
      "  upgrade)",
      "    echo \"Reading package lists... Done\"",
      "    echo \"Building dependency tree... Done\"",
      "    echo \"0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.\"",
      "    ;;",
      "  install)",
      "    shift",
      "    if [ -z \"$1\" ]; then echo \"apt install: paket nomi ko'rsatilmadi\"; exit 1; fi",
      "    echo \"Reading package lists... Done\"",
      "    echo \"Building dependency tree... Done\"",
      "    for pkg in \"$@\"; do",
      "      case \"$pkg\" in -y|--yes|-q) continue ;; esac",
      "      echo \"The following NEW packages will be installed: $pkg\"",
      "      echo \"Unpacking $pkg (latest) ...\"",
      "      echo \"Setting up $pkg (latest) ...\"",
      "      if ! command -v \"$pkg\" >/dev/null 2>&1; then",
      "        echo '#!/bin/sh' > \"/bin/$pkg\"",
      "        echo 'echo \"['$pkg'] muvaffaqiyatli ishga tushdi (Kali Linux).\"' >> \"/bin/$pkg\"",
      "        chmod +x \"/bin/$pkg\"",
      "      fi",
      "    done",
      "    echo \"Processing triggers for man-db ... Done\"",
      "    ;;",
      "  search)",
      "    echo \"Sorting... Done\"",
      "    echo \"Full Text Search... Done\"",
      "    echo \"$2/kali-rolling 2.4.1 amd64\"",
      "    ;;",
      "  *)",
      "    echo \"apt: $cmd bajarildi.\"",
      "    ;;",
      "esac",
      "APT_EOF",
      "chmod +x /bin/apt",
      "ln -sf /bin/apt /bin/apt-get",
      "echo 'PRETTY_NAME=\"Kali GNU/Linux Rolling\"' > /etc/os-release",
      "echo 'NAME=\"Kali GNU/Linux\"' >> /etc/os-release",
      "echo 'VERSION=\"2026.1\"' >> /etc/os-release",
      "echo 'ID=kali' >> /etc/os-release",
      "echo 'ID_LIKE=debian' >> /etc/os-release",
      "export PS1='root@kali:\\w# '",
      "stty echo",
      "clear",
      ""
    ].join("\n");

    wasmEmulatorInstance.serial0_send(script);

    setTimeout(() => {
      silentlyConfiguring = false;
      if (wasmXtermInstance) {
        wasmXtermInstance.writeln("\r\n\x1b[1;32m✓ Kali GNU/Linux (x86_64) muhiti tayyor! sudo, apt va barcha buyruqlar faol.\x1b[0m\r\n");
        wasmXtermInstance.focus();
        wasmXtermInstance.scrollToBottom();
      }
    }, 1200);
  }

  function fitWasmTerminal() {
    if (!wasmXtermInstance) return;
    const box = document.getElementById("wasmXtermBox");
    if (!box) return;
    const isMobile = window.innerWidth <= 600;
    const charWidth = isMobile ? 7.2 : 8.4;
    const charHeight = isMobile ? 15 : 18;
    const w = Math.max(260, box.clientWidth - 10);
    const h = Math.max(180, box.clientHeight - 10);
    const cols = Math.max(34, Math.floor(w / charWidth));
    const rows = Math.max(10, Math.floor(h / charHeight));
    try {
      wasmXtermInstance.resize(cols, rows);
      wasmXtermInstance.scrollToBottom();
    } catch (e) {}
  }
  window.fitWasmTerminal = fitWasmTerminal;
  window.addEventListener("resize", fitWasmTerminal);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => {
      fitWasmTerminal();
      if (wasmXtermInstance) {
        setTimeout(() => wasmXtermInstance.scrollToBottom(), 60);
      }
    });
  }

  let wasmCmdBuffer = "";
  let wasmHistory = [];
  let wasmHistIdx = -1;

  function printWasmPrompt() {
    if (!wasmXtermInstance) return;
    const cwd = state.liveShell ? state.liveShell.cwd : "/home/student";
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    wasmXtermInstance.write(`\x1b[1;32m┌──(\x1b[1;34muserland\x1b[1;37m💀\x1b[1;34mlocalhost\x1b[1;32m)-[\x1b[1;37m${promptPath}\x1b[1;32m]\r\n└─$ \x1b[0m`);
  }

  function gradeAndOutputWasm(rawCmd, res) {
    const currentQ = allQuestions.find(q => q.id === state.currentQuestionId);
    if (currentQ && !state.solvedIds.has(currentQ.id)) {
      let grade = null;
      if (window.VIRTUAL_LINUX_W3 && window.VIRTUAL_LINUX_W3.BASH_GRADER) {
        const expectedCmd = currentQ.expectedSql || currentQ.expectedBash || "";
        const evalRes = window.VIRTUAL_LINUX_W3.BASH_GRADER.evaluate(rawCmd, expectedCmd, currentQ);
        grade = { isCorrect: evalRes.match, message: evalRes.message };
      } else if (window.BASH_GRADER) {
        grade = window.BASH_GRADER.grade(currentQ, rawCmd, res);
      } else if (window.VIRTUAL_LINUX_W2 && window.VIRTUAL_LINUX_W2.BASH_GRADER) {
        const ok = window.VIRTUAL_LINUX_W2.BASH_GRADER.evaluate(currentQ, rawCmd, res);
        grade = { isCorrect: ok, message: ok ? "Topshiriq muvaffaqiyatli bajarildi!" : "Xatolik" };
      } else if (window.VIRTUAL_LINUX_W3 && window.VIRTUAL_LINUX_W3.BASH_GRADER) {
        const ok = window.VIRTUAL_LINUX_W3.BASH_GRADER.evaluate(currentQ, rawCmd, res);
        grade = { isCorrect: ok, message: ok ? "Topshiriq muvaffaqiyatli bajarildi!" : "Xatolik" };
      } else if (window.VIRTUAL_LINUX_W4 && window.VIRTUAL_LINUX_W4.BASH_GRADER) {
        const ok = window.VIRTUAL_LINUX_W4.BASH_GRADER.evaluate(currentQ, rawCmd, res);
        grade = { isCorrect: ok, message: ok ? "Topshiriq muvaffaqiyatli bajarildi!" : "Xatolik" };
      } else if (window.VIRTUAL_LINUX_W5 && window.VIRTUAL_LINUX_W5.BASH_GRADER) {
        const ok = window.VIRTUAL_LINUX_W5.BASH_GRADER.evaluate(currentQ, rawCmd, res);
        grade = { isCorrect: ok, message: ok ? "Topshiriq muvaffaqiyatli bajarildi!" : "Xatolik" };
      } else if (window.VIRTUAL_LINUX_W6 && window.VIRTUAL_LINUX_W6.BASH_GRADER) {
        const ok = window.VIRTUAL_LINUX_W6.BASH_GRADER.evaluate(currentQ, rawCmd, res);
        grade = { isCorrect: ok, message: ok ? "Topshiriq muvaffaqiyatli bajarildi!" : "Xatolik" };
      }

      if (grade && grade.isCorrect) {
        state.solvedIds.add(currentQ.id);
        state.score += 100;
        saveProgress();
        updateHUD();
        SoundFX.playSuccess();
        wasmXtermInstance.write(`\x1b[1;32m✓ TO'G'RI! ${grade.message || "Topshiriq muvaffaqiyatli bajarildi!"}\x1b[0m\r\n`);
        wasmXtermInstance.write(`\x1b[1;36m+$100 Bonus hisobingizga qo'shildi! Keyingi topshiriqqa o'tish uchun [Keyingi ▶] ni bosing.\x1b[0m\r\n`);
        renderFsExplorer();
      }
    }
    printWasmPrompt();
    wasmXtermInstance.scrollToBottom();
  }

  function executeWasmKaliCommand(rawCmd) {
    if (!wasmXtermInstance) return;
    const clean = rawCmd.trim();
    if (!clean) {
      printWasmPrompt();
      return;
    }

    const lower = clean.toLowerCase();

    // Sudo su / su
    if (lower === "sudo su" || lower === "su" || lower === "sudo -i" || lower === "sudo bash") {
      state.isRoot = true;
      wasmXtermInstance.write("root@kali:~# \r\n");
      printWasmPrompt();
      return;
    }

    // Exit from root
    if (lower === "exit" && state.isRoot) {
      state.isRoot = false;
      wasmXtermInstance.write("exit\r\n");
      printWasmPrompt();
      return;
    }

    // Vim / vi / nano
    if (lower.startsWith("vim") || lower.startsWith("vi ") || lower.startsWith("nano") || lower === "vi") {
      const parts = clean.split(/\s+/);
      const editor = parts[0] || "vim";
      const filename = parts.slice(1).join(" ") || "script.sh";
      if (state.liveShell) {
        state.liveShell.execute('touch ' + filename);
      }
      const editorBanner = [
        "\x1b[1;34m~\x1b[0m",
        "\x1b[1;34m~\x1b[0m   \x1b[1;37m[" + editor.toUpperCase() + " — Kali GNU/Linux Text Editor]\x1b[0m",
        "\x1b[1;34m~\x1b[0m   Fayl ochildi: \x1b[1;32m" + filename + "\x1b[0m",
        "\x1b[1;34m~\x1b[0m   ────────────────────────────────────────────────────────────",
        "\x1b[1;34m~\x1b[0m   # Kali Linux matn muharriri",
        "\x1b[1;34m~\x1b[0m   # Tahrirlash: :i | Saqlash va chiqish: :wq | Chiqish: :q",
        "\x1b[1;34m~\x1b[0m   ────────────────────────────────────────────────────────────",
        "\x1b[1;34m~\x1b[0m",
        "\x1b[1;32m\"" + filename + "\" [Yangi fayl yaratildi va saqlandi: :wq]\x1b[0m"
      ].join("\r\n");
      wasmXtermInstance.write(editorBanner + "\r\n");
      gradeAndOutputWasm(rawCmd, { stdout: editorBanner, stderr: "", code: 0 });
      return;
    }

    // 1. Clear
    if (lower === "clear") {
      wasmXtermInstance.write("\x1b[2J\x1b[H");
      printWasmPrompt();
      return;
    }

    // 2. Hostname
    if (lower === "hostname" || lower === "sudo hostname") {
      wasmXtermInstance.write("kali\r\n");
      gradeAndOutputWasm(rawCmd, { stdout: "kali", stderr: "", code: 0 });
      return;
    }

    // 3. Whoami
    if (lower === "whoami" || lower === "sudo whoami") {
      const who = lower.startsWith("sudo") ? "root" : "userland";
      wasmXtermInstance.write(`${who}\r\n`);
      gradeAndOutputWasm(rawCmd, { stdout: who, stderr: "", code: 0 });
      return;
    }

    // 4. Sudo apt update / apt update
    if (lower === "sudo apt update" || lower === "apt update" || lower === "sudo apt-get update" || lower === "apt-get update") {
      const out = [
        "Hit:1 http://http.kali.org/kali kali-rolling InRelease",
        "Get:2 http://http.kali.org/kali kali-rolling/main amd64 Packages [19.2 MB]",
        "Get:3 http://http.kali.org/kali kali-rolling/non-free amd64 Packages [212 kB]",
        "Fetched 19.4 MB in 1s (19.4 MB/s)",
        "Reading package lists... Done",
        "Building dependency tree... Done",
        "Reading state information... Done",
        "All packages are up to date."
      ].join("\r\n");
      wasmXtermInstance.write(out + "\r\n");
      gradeAndOutputWasm(rawCmd, { stdout: out, stderr: "", code: 0 });
      return;
    }

    // 5. Apt install
    if (lower.startsWith("apt install") || lower.startsWith("sudo apt install") || lower.startsWith("apt-get install") || lower.startsWith("sudo apt-get install")) {
      const pkg = clean.split(" ").filter(w => !["sudo", "apt", "apt-get", "install", "-y"].includes(w)).pop() || "tools";
      const out = [
        "Reading package lists... Done",
        "Building dependency tree... Done",
        `The following NEW packages will be installed: ${pkg}`,
        `Setting up ${pkg} (latest) ...`,
        "Processing triggers for man-db ... Done"
      ].join("\r\n");
      wasmXtermInstance.write(out + "\r\n");
      gradeAndOutputWasm(rawCmd, { stdout: out, stderr: "", code: 0 });
      return;
    }

    // 6. Uname
    if (lower === "uname" || lower === "uname -a" || lower === "sudo uname -a" || lower === "uname -r") {
      const out = "Linux kali 6.1.0-kali-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.76-1 (2024-02-01) x86_64 GNU/Linux";
      wasmXtermInstance.write(out + "\r\n");
      gradeAndOutputWasm(rawCmd, { stdout: out, stderr: "", code: 0 });
      return;
    }

    // 7. Execute in liveShell
    if (!state.liveShell) {
      wasmXtermInstance.write("\x1b[1;31mError: Shell yuklanmagan\x1b[0m\r\n");
      printWasmPrompt();
      return;
    }

    const res = state.liveShell.execute(clean);
    if (res.stdout && res.stdout !== "__CLEAR__") {
      const lines = res.stdout.replace(/\r\n/g, "\n").split("\n");
      lines.forEach(l => wasmXtermInstance.write(l + "\r\n"));
    }
    if (res.stdout === "__CLEAR__") {
      wasmXtermInstance.write("\x1b[2J\x1b[H");
    }
    if (res.stderr) {
      const lines = res.stderr.replace(/\r\n/g, "\n").split("\n");
      lines.forEach(l => wasmXtermInstance.write(`\x1b[1;31m${l}\x1b[0m\r\n`));
    }

    gradeAndOutputWasm(clean, res);
  }

  function initWasmRealLinux() {
    const box = document.getElementById("wasmXtermBox");
    const loader = document.getElementById("wasmLoader");
    if (loader) loader.style.display = "none";
    if (!box) return;

    if (!wasmXtermInstance && typeof Terminal !== "undefined") {
      const isMobile = window.innerWidth <= 600;
      wasmXtermInstance = new Terminal({
        cols: isMobile ? 42 : 80,
        rows: isMobile ? 18 : 24,
        fontSize: isMobile ? 11.5 : 13,
        lineHeight: 1.25,
        theme: {
          background: "#050811",
          foreground: "#f8fafc",
          cursor: "#22d3ee",
          selectionBackground: "rgba(34, 211, 238, 0.3)",
          black: "#0f172a",
          red: "#ef4444",
          green: "#10b981",
          yellow: "#f59e0b",
          blue: "#38bdf8",
          magenta: "#ec4899",
          cyan: "#06b6d4",
          white: "#f8fafc"
        },
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        cursorBlink: true,
        scrollOnUserInput: true,
        scrollback: 2000
      });

      box.innerHTML = "";
      wasmXtermInstance.open(box);
      fitWasmTerminal();

      box.addEventListener("click", () => {
        if (wasmXtermInstance) wasmXtermInstance.focus();
      });
      box.addEventListener("touchstart", () => {
        if (wasmXtermInstance) wasmXtermInstance.focus();
      }, { passive: true });

      // Print Authentic Kali UserLAnd Banner (Image 2)
      const banner = [
        "/data/user/0/tech.ula/files/support/dbclient: Caution, skipping hostkey check for localhost",
        "",
        "The programs included with the Kali GNU/Linux system are free software;",
        "the exact distribution terms for each program are described in the",
        "individual files in /usr/share/doc/*/copyright.",
        "",
        "Kali GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent",
        "permitted by applicable law.",
        "\x1b[1;31m┌──(Message from Kali developers)\x1b[0m",
        "\x1b[1;31m│\x1b[0m",
        "\x1b[1;31m│\x1b[0m This is a minimal installation of Kali Linux, you likely",
        "\x1b[1;31m│\x1b[0m want to install supplementary tools. Learn how:",
        "\x1b[1;31m│\x1b[0m ⇒ https://www.kali.org/docs/troubleshooting/common-minimum-setup/",
        "\x1b[1;31m│\x1b[0m",
        "\x1b[1;31m└──(Run: \"touch ~/.hushlogin\" to hide this message)\x1b[0m",
        "\x1b[1;37mWelcome to Kali in UserLAnd!\x1b[0m",
        ""
      ].join("\r\n");
      wasmXtermInstance.write(banner + "\r\n");
      printWasmPrompt();

      wasmXtermInstance.onData(data => {
        // Enter
        if (data === "\r") {
          wasmXtermInstance.write("\r\n");
          const cmd = wasmCmdBuffer.trim();
          wasmCmdBuffer = "";
          if (cmd) {
            wasmHistory.push(cmd);
            wasmHistIdx = wasmHistory.length;
            executeWasmKaliCommand(cmd);
          } else {
            printWasmPrompt();
          }
          wasmXtermInstance.scrollToBottom();
          return;
        }

        // Backspace
        if (data === "\x7f" || data === "\b") {
          if (wasmCmdBuffer.length > 0) {
            wasmCmdBuffer = wasmCmdBuffer.slice(0, -1);
            wasmXtermInstance.write("\b \b");
          }
          return;
        }

        // Ctrl+C
        if (data === "\x03") {
          wasmCmdBuffer = "";
          wasmXtermInstance.write("^C\r\n");
          printWasmPrompt();
          wasmXtermInstance.scrollToBottom();
          return;
        }

        // Ctrl+L
        if (data === "\x0c") {
          wasmXtermInstance.write("\x1b[2J\x1b[H");
          printWasmPrompt();
          if (wasmCmdBuffer) wasmXtermInstance.write(wasmCmdBuffer);
          return;
        }

        // Up Arrow
        if (data === "\x1b[A") {
          if (wasmHistory.length > 0 && wasmHistIdx > 0) {
            wasmHistIdx--;
            while (wasmCmdBuffer.length > 0) {
              wasmXtermInstance.write("\b \b");
              wasmCmdBuffer = wasmCmdBuffer.slice(0, -1);
            }
            wasmCmdBuffer = wasmHistory[wasmHistIdx];
            wasmXtermInstance.write(wasmCmdBuffer);
          }
          return;
        }

        // Down Arrow
        if (data === "\x1b[B") {
          if (wasmHistIdx < wasmHistory.length - 1) {
            wasmHistIdx++;
            while (wasmCmdBuffer.length > 0) {
              wasmXtermInstance.write("\b \b");
              wasmCmdBuffer = wasmCmdBuffer.slice(0, -1);
            }
            wasmCmdBuffer = wasmHistory[wasmHistIdx];
            wasmXtermInstance.write(wasmCmdBuffer);
          } else if (wasmHistIdx === wasmHistory.length - 1) {
            wasmHistIdx = wasmHistory.length;
            while (wasmCmdBuffer.length > 0) {
              wasmXtermInstance.write("\b \b");
              wasmCmdBuffer = wasmCmdBuffer.slice(0, -1);
            }
          }
          return;
        }

        // Normal typing
        if (data.length === 1 && data.charCodeAt(0) >= 32) {
          wasmCmdBuffer += data;
          wasmXtermInstance.write(data);
        }
      });
    }

    if (wasmXtermInstance) {
      setTimeout(() => {
        wasmXtermInstance.focus();
        fitWasmTerminal();
        wasmXtermInstance.scrollToBottom();
      }, 50);
    }
  }

  function setTerminalEngine(engine) {
    state.activeEngine = engine;
    SoundFX.playKey();
    if (engine === "wasm") {
      if (el.btnEngineWasm) el.btnEngineWasm.classList.add("active");
      if (el.btnEngineShell) el.btnEngineShell.classList.remove("active");
      if (el.kaliStream) {
        el.kaliStream.innerHTML = getKaliBannerHtml() + 
          `<div style="color:#22c55e; margin: 4px 0 8px 0; font-size:12.5px; font-weight:600;">[*] 👾 Real Kali Linux (Debian 12 Bookworm) interaktiv sessiyasi faol. Buyruq kiriting:</div>`;
      }
    } else {
      if (el.btnEngineShell) el.btnEngineShell.classList.add("active");
      if (el.btnEngineWasm) el.btnEngineWasm.classList.remove("active");
      if (el.kaliStream) {
        el.kaliStream.innerHTML = `<div style="color:#38bdf8; margin: 4px 0 8px 0; font-size:12.5px; font-weight:600;">[*] ⚡ Tezkor Kali Shell faol. Topshiriq buyrug'ini kiriting yoki 'help' deb yozing:</div>`;
      }
    }
    updateTerminalPrompt();
    focusKaliInput();
  }
  window.setTerminalEngine = setTerminalEngine;

  // Toggle Command & Flag Anatomy Card (Batafsil)
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

  // High-Fidelity Linux Tab Autocompletion
  function handleTabAutocompletion() {
    if (!el.bashInput) return;
    SoundFX.playKey();
    const val = el.bashInput.value;
    const trimmedStart = val.trimStart();
    const tokens = trimmedStart.split(/\s+/);

    const knownCommands = [
      "pwd", "whoami", "hostname", "cd", "ls", "mkdir", "rmdir",
      "touch", "cat", "head", "tail", "wc", "cp", "mv", "rm",
      "ln", "stat", "file", "find", "clear", "echo"
    ];

    // Case 1: First word completion (Command name)
    if (tokens.length <= 1 && !val.endsWith(" ")) {
      const prefix = tokens[0] || "";
      const matches = knownCommands.filter(c => c.startsWith(prefix));
      if (matches.length === 1) {
        el.bashInput.value = matches[0] + " ";
      } else if (matches.length > 1) {
        appendTerminalOutput(matches.join("   "), "normal");
      }
      return;
    }

    // Case 2: Argument completion (Path / Directory / File)
    const lastToken = tokens[tokens.length - 1] || "";
    let searchDir = state.liveShell ? state.liveShell.cwd : "/home/student";
    let filePrefix = lastToken;

    if (lastToken.includes("/")) {
      const lastSlashIdx = lastToken.lastIndexOf("/");
      const dirPart = lastToken.slice(0, lastSlashIdx + 1);
      filePrefix = lastToken.slice(lastSlashIdx + 1);
      searchDir = state.liveShell.resolvePath(dirPart);
    }

    const node = state.liveShell.getNode(searchDir);
    if (node && node.type === "dir" && node.children) {
      const candidates = Object.keys(node.children);
      const matches = candidates.filter(name => name.startsWith(filePrefix));
      if (matches.length === 1) {
        const matchName = matches[0];
        const isDir = node.children[matchName].type === "dir";
        const completedToken = lastToken.includes("/")
          ? lastToken.slice(0, lastToken.lastIndexOf("/") + 1) + matchName + (isDir ? "/" : " ")
          : matchName + (isDir ? "/" : " ");

        tokens[tokens.length - 1] = completedToken;
        el.bashInput.value = tokens.join(" ");
      } else if (matches.length > 1) {
        appendTerminalOutput(matches.join("   "), "normal");
      }
    }
  }

  // Quick Action Keys (Tab, Ctrl+C, clear)
  window.triggerBashKey = function (action) {
    if (!el.bashInput) return;
    if (action === "Tab") {
      handleTabAutocompletion();
    } else if (action === "CtrlC") {
      SoundFX.playKey();
      const val = el.bashInput.value;
      const cwd = state.liveShell.cwd;
      const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
      appendTerminalOutput(`student@debian-server:${promptPath}$ ${val}^C`, "normal");
      el.bashInput.value = "";
      el.bashInput.focus();
    } else if (action === "clear") {
      SoundFX.playKey();
      if (el.terminalOutput) el.terminalOutput.innerHTML = "";
      el.bashInput.value = "";
      el.bashInput.focus();
    }
  };

  // Insert token into Bash Input & Kali Terminal Input
  window.insertBashToken = function (token) {
    SoundFX.playKey();
    if (el.bashInput) {
      const cur = el.bashInput.value;
      if (!cur) {
        el.bashInput.value = token;
      } else if (cur.endsWith(" ") || cur.endsWith("|") || cur.endsWith(">") || cur.endsWith("/")) {
        el.bashInput.value = cur + token;
      } else {
        el.bashInput.value = cur + " " + token;
      }
    }
    insertKaliToken(token);
  };

  // ============================================================================
  // AUTHENTIC KALI LINUX TERMINAL ENGINE (1:1 with UserLAnd on Mobile & PC)
  // ============================================================================

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
<span style="color:#f8fafc">Welcome to Kali in UserLAnd!</span>\n`;
  }

  function initKaliTerminal() {
    if (!el.kaliStream) return;
    el.kaliStream.innerHTML = getKaliBannerHtml();
    updateTerminalPrompt();

    // Clicking or tapping anywhere in the black terminal screen focuses the inline input without scrolling jumps
    if (el.kaliScreen && el.kaliHiddenInput) {
      el.kaliScreen.addEventListener("click", (e) => {
        if (!state.activeEditor && e.target !== el.kaliHiddenInput) {
          focusKaliInput();
        }
      });
      el.kaliScreen.addEventListener("touchstart", (e) => {
        if (!state.activeEditor && e.target !== el.kaliHiddenInput) {
          focusKaliInput();
        }
      }, { passive: true });
    }

    // Input handling on inline input directly in prompt
    if (el.kaliHiddenInput) {
      el.kaliHiddenInput.addEventListener("input", () => {
        if (el.kaliScreen) {
          scrollKaliToBottom();
        }
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
          }
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (state.historyIndex < state.commandHistory.length - 1) {
            state.historyIndex++;
            el.kaliHiddenInput.value = state.commandHistory[state.historyIndex] || "";
          } else {
            state.historyIndex = state.commandHistory.length;
            el.kaliHiddenInput.value = "";
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

    // Mobile Touch Bar Event Handling
    if (el.kaliTouchBar) {
      el.kaliTouchBar.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
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
            if (el.kaliHiddenInput) el.kaliHiddenInput.value = "";
            focusKaliInput();
          }
        });
      });
    }

        // Clear Kali Screen
    const btnClearKali = document.getElementById("btnClearKaliScreen");
    if (btnClearKali) {
      btnClearKali.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.kaliStream) el.kaliStream.innerHTML = "";
        focusKaliInput();
      });
    }

    // Toggle Kali Fullscreen
    const btnToggleKali = document.getElementById("btnToggleKaliFs");
    const btnFloatExit = document.getElementById("btnFloatingExitFs");

    function setFullscreenMode(enable) {
      SoundFX.playKey();
      const termCard = document.getElementById("terminalCard");
      if (!termCard) return;
      
      const isFs = (typeof enable === "boolean") ? enable : !termCard.classList.contains("is-fullscreen");
      if (isFs) {
        termCard.classList.add("is-fullscreen");
        document.body.classList.add("terminal-is-fullscreen");
        if (btnToggleKali) {
          btnToggleKali.textContent = "✕ Chiqish";
          btnToggleKali.style.background = "#ef4444";
          btnToggleKali.style.color = "#ffffff";
        }
      } else {
        termCard.classList.remove("is-fullscreen");
        document.body.classList.remove("terminal-is-fullscreen");
        if (btnToggleKali) {
          btnToggleKali.textContent = "⛶ To'liq Ekran";
          btnToggleKali.style.background = "";
          btnToggleKali.style.color = "";
        }
      }
      setTimeout(scrollKaliToBottom, 100);
      focusKaliInput();
    }

    if (btnToggleKali) {
      btnToggleKali.addEventListener("click", () => setFullscreenMode());
    }
    if (btnFloatExit) {
      btnFloatExit.addEventListener("click", () => setFullscreenMode(false));
    }

    // Escape key exits fullscreen
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const termCard = document.getElementById("terminalCard");
        if (termCard && termCard.classList.contains("is-fullscreen")) {
          setFullscreenMode(false);
        }
      }
    });

    // --- 2 Modes Switcher (Topshiriqlar vs Erkin Sandbox CLI) ---
    if (el.btnModeQuest) {
      el.btnModeQuest.addEventListener("click", () => setTerminalMode("quest"));
    }
    if (el.btnModeSandbox) {
      el.btnModeSandbox.addEventListener("click", () => setTerminalMode("sandbox"));
    }
    if (el.btnFsToggleMode) {
      el.btnFsToggleMode.addEventListener("click", () => {
        setTerminalMode(state.terminalMode === "quest" ? "sandbox" : "quest");
      });
    }

    // --- Terminal Workbench Card Tabs ---
    if (el.tabTerminalMode) {
      el.tabTerminalMode.addEventListener("click", () => setWorkbenchTab("terminal"));
    }
    if (el.tabFsMode) {
      el.tabFsMode.addEventListener("click", () => setWorkbenchTab("fs"));
    }

    // --- Terminal Workbench Card Actions ---
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
        if (q) {
          printKaliInfo(`[💡 MASLAHAT]: ${q.hint || "Topshiriq talablarini diqqat bilan o'rganing."}`);
        }
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
      el.btnToggleFullscreen.addEventListener("click", () => {
        toggleTerminalFullscreen();
      });
    }

    // Engine switcher (Tezkor Shell vs Real Linux WASM)
    if (el.btnEngineShell) {
      el.btnEngineShell.addEventListener("click", () => setTerminalEngine("shell"));
    }
    if (el.btnEngineWasm) {
      el.btnEngineWasm.addEventListener("click", () => setTerminalEngine("wasm"));
    }

    // Interactive Terminal Editor (nano / vim)
    if (el.btnEditorSave) {
      el.btnEditorSave.addEventListener("click", () => saveAndCloseTerminalEditor());
    }
    if (el.btnEditorExit) {
      el.btnEditorExit.addEventListener("click", () => closeTerminalEditor());
    }
    if (el.editorTextarea) {
      el.editorTextarea.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
          e.preventDefault();
          saveAndCloseTerminalEditor();
        } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "x") {
          e.preventDefault();
          closeTerminalEditor();
        }
      });
    }

    // --- Fullscreen Floating Bar Buttons ---
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
        if (q) {
          printKaliInfo(`[💡 MASLAHAT]: ${q.hint || "Topshiriq talablarini diqqat bilan o'rganing."}`);
        }
      });
    }
    if (el.btnFsPreview) {
      el.btnFsPreview.addEventListener("click", () => {
        SoundFX.playKey();
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q) {
          const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
          const res = expShell.execute(q.expectedSql || q.expectedBash || "");
          printKaliInfo(`[👁 KUTILAYOTGAN NATIJA]:\n${res.stdout || "(Fayl tizimida o'zgarish sodir bo'ladi)"}`);
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
      el.btnExitFullscreen.addEventListener("click", () => {
        toggleTerminalFullscreen(false);
      });
    }
    if (el.btnFloatingExitFs) {
      el.btnFloatingExitFs.addEventListener("click", () => {
        toggleTerminalFullscreen(false);
      });
    }
    if (el.btnOpenBatafsil && el.modalKtBatafsil) {
      el.btnOpenBatafsil.addEventListener("click", () => {
        SoundFX.playKey();
        el.modalKtBatafsil.classList.add("active");
      });
    }
    if (el.btnTtBatafsil && el.modalKtBatafsil) {
      el.btnTtBatafsil.addEventListener("click", () => {
        SoundFX.playKey();
        el.modalKtBatafsil.classList.add("active");
      });
    }
    if (el.btnTtHint) {
      el.btnTtHint.addEventListener("click", () => {
        SoundFX.playKey();
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q) printKaliInfo(`[💡 MASLAHAT]: ${q.hint || "Topshiriq talablarini diqqat bilan o'rganing."}`);
      });
    }
    if (el.btnTtExpected) {
      el.btnTtExpected.addEventListener("click", () => {
        SoundFX.playKey();
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q) {
          const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
          const res = expShell.execute(q.expectedSql || q.expectedBash || "");
          printKaliInfo(`[👁 KUTILGAN NATIJA]:\n${res.stdout || "(Fayl tizimida o'zgarish sodir bo'ladi)"}`);
        }
      });
    }

    // --- Mobile Touch Bar Nav Buttons ---
    if (el.btnTouchPrev) {
      el.btnTouchPrev.addEventListener("click", () => {
        SoundFX.playKey();
        if (state.currentQuestionId > 1) {
          loadQuestion(state.currentQuestionId - 1);
          printKaliInfo(`[➔] Oldingi vazifaga qaytildi: #${state.currentQuestionId}`);
        }
      });
    }
    if (el.btnTouchNext) {
      el.btnTouchNext.addEventListener("click", () => {
        SoundFX.playKey();
        if (state.currentQuestionId < allQuestions.length) {
          loadQuestion(state.currentQuestionId + 1);
          printKaliInfo(`[➔] Keyingi vazifaga o'tildi: #${state.currentQuestionId}`);
        }
      });
    }

    // --- Modal Task & Batafsil Close Handlers ---
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
        if (q) alert(`💡 Maslahat:\n${q.hint || "Topshiriq matniga qarang"}`);
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

  function toggleKaliView(mode) {
    if (mode === "kali" || mode === "fullscreen") {
      toggleTerminalFullscreen(true);
    } else {
      toggleTerminalFullscreen(false);
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
    focusKaliInput();
    if (el.kaliScreen) scrollKaliToBottom();
  }

  function handleKaliCtrlC() {
    if (!el.kaliStream) return;
    const cwd = state.liveShell ? state.liveShell.cwd : "/home/student";
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);
    const val = el.kaliHiddenInput ? el.kaliHiddenInput.value : "";
    appendKaliPromptHistory(val + "^C");
    if (el.kaliHiddenInput) el.kaliHiddenInput.value = "";
    if (el.kaliTypedText) el.kaliTypedText.textContent = "";
    if (el.kaliHiddenInput) el.kaliHiddenInput.focus();
  }

  function handleKaliTabCompletion() {
    if (!el.kaliHiddenInput) return;
    SoundFX.playKey();
    const val = el.kaliHiddenInput.value;
    const trimmedStart = val.trimStart();
    const tokens = trimmedStart.split(/\s+/);

    if (tokens.length <= 1) {
      const prefix = tokens[0] || "";
      const bashCommands = [
        "pwd", "whoami", "hostname", "cd", "ls", "mkdir", "rmdir",
        "touch", "cat", "head", "tail", "wc", "cp", "mv", "rm",
        "ln", "stat", "file", "find", "uname", "free", "df", "ps", "echo", "clear"
      ];
      const matches = bashCommands.filter(c => c.startsWith(prefix));
      if (matches.length === 1) {
        el.kaliHiddenInput.value = matches[0] + " ";
        if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
      } else if (matches.length > 1) {
        printKaliInfo(matches.join("   "));
      }
      return;
    }

    const lastToken = tokens[tokens.length - 1];
    const cwdNode = state.liveShell ? state.liveShell.getNode(state.liveShell.cwd) : null;
    if (!cwdNode || !cwdNode.children) return;

    const availableNames = Object.keys(cwdNode.children);
    const matches = availableNames.filter(n => n.startsWith(lastToken));

    if (matches.length === 1) {
      tokens[tokens.length - 1] = matches[0];
      el.kaliHiddenInput.value = tokens.join(" ");
      if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
    } else if (matches.length > 1) {
      printKaliInfo(matches.join("   "));
    }
  }

  function appendKaliPromptHistory(cmd) {
    if (!el.kaliStream) return;
    const cwd = state.liveShell ? state.liveShell.cwd : "/home/student";
    const promptPath = cwd === "/home/student" ? "~" : (cwd.startsWith("/home/student/") ? "~" + cwd.slice(13) : cwd);

    const div = document.createElement("div");
    div.className = "kali-history-entry";
    div.innerHTML = `
      <div class="kali-cmd-line1"><span class="k-green">┌──(</span><span class="k-blue">userland</span><span class="k-white">㉿</span><span class="k-blue">kali</span><span class="k-green">)-[</span><span class="k-white">${promptPath}</span><span class="k-green">]</span></div>
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
    if (el.kaliScreen) scrollKaliToBottom();
  }

  function handleKaliCommandSubmit() {
    if (!el.kaliHiddenInput) return;
    const rawCmd = el.kaliHiddenInput.value.trim();
    el.kaliHiddenInput.value = "";
    if (el.kaliTypedText) el.kaliTypedText.textContent = "";

    if (!rawCmd) {
      appendKaliPromptHistory("");
      if (el.kaliScreen) scrollKaliToBottom();
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
      if (el.kaliScreen) scrollKaliToBottom();
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
        const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
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
      if (el.kaliScreen) scrollKaliToBottom();
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
      if (el.kaliScreen) scrollKaliToBottom();
      return;
    }

    // Grade against current question
    const currentQ = allQuestions.find(q => q.id === state.currentQuestionId);
    if (!currentQ) return;

    const expectedCmd = currentQ.expectedSql || currentQ.expectedBash || "";
    const grade = window.VIRTUAL_LINUX_W3.BASH_GRADER.evaluate(rawCmd, expectedCmd, currentQ);

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
      scrollKaliToBottom();
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
        const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
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
          state.liveShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
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
        const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
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
    state.liveShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();

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
