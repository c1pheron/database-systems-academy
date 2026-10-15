// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 GAME CONTROLLER
// Interactive Bash Terminal, Process Tree, Resilient Pipelines, Cron & Systemd,
// 150 Question Pipeline, Audio Synthesizer, Modals, 10 Sectors & Career Engine.
// AND Master Flag Anatomy Inspector (Qo'shimchalar & Bayroqlar Tahlili).
// ============================================================================

(function () {
  "use strict";

  // --- Sound Effects Synthesizer (Web Audio API) ---
  const SoundFX = {
    ctx: null,
    muted: false,
    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
    },
    playTone(freq, type = "sine", duration = 0.15, gain = 0.15) {
      if (this.muted) return;
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
      this.playTone(850, "sine", 0.04, 0.04);
    },
    playSuccess() {
      if (this.muted) return;
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
      if (this.muted) return;
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
        g.gain.setValueAtTime(0.22, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    },
    playPromotion() {
      if (this.muted) return;
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

  // --- Assemble All 150 Questions for Week 4 ---
  const allQuestions = [
    ...(window.QUESTIONS_1_50_W4 || []),
    ...(window.QUESTIONS_51_100_W4 || []),
    ...(window.QUESTIONS_101_150_W4 || [])
  ];

  // --- Game State ---
  const STORAGE_KEY = "WIUT_OS_W4_PROGRESS";
  const state = {
    solvedIds: new Set(),
    currentQuestionId: 1,
    activeSector: 1,
    bonusCapital: 0,
    commandHistory: [],
    historyIndex: -1,
    terminalMode: "quest",
    terminalFullscreen: false,
    layoutMode: "split",
    activeFsTab: "flags", // default to Flag Dictionary tab as requested!
    flagSearchQuery: "",
    lastOutput: "",
    liveShell: null,
    arena: null,
    activeIncidentIndex: 0
  };

  function loadProgress() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (Array.isArray(data.solvedIds)) {
          state.solvedIds = new Set(data.solvedIds);
        }
        if (typeof data.bonusCapital === "number") {
          state.bonusCapital = data.bonusCapital;
        }
        if (typeof data.currentQuestionId === "number") {
          state.currentQuestionId = data.currentQuestionId;
          const q = allQuestions.find(item => item.id === state.currentQuestionId);
          if (q) state.activeSector = q.sector;
        }
      }
    } catch (e) {}
  }

  function saveProgress() {
    try {
      const data = {
        solvedIds: Array.from(state.solvedIds),
        bonusCapital: state.bonusCapital,
        currentQuestionId: state.currentQuestionId
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function getCurrentCareer() {
    const solved = state.solvedIds.size;
    const ranks = window.VIRTUAL_LINUX_W4.careerRanks;
    let current = ranks[0];
    for (const r of ranks) {
      if (solved >= r.minSolved) {
        current = r;
      }
    }
    return current;
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
    el.btnOpenMap = document.getElementById("btnOpenMap");
    el.btnResetProgress = document.getElementById("btnResetProgress");
    el.btnToggleSound = document.getElementById("btnToggleSound");

    el.sectorNavList = document.getElementById("sectorNavList");
    el.floorHeaderTitle = document.getElementById("floorHeaderTitle");
    el.tickerSpeaker = document.getElementById("tickerSpeaker");
    el.tickerMessage = document.getElementById("tickerMessage");
    el.btnQuickEvent = document.getElementById("btnQuickEvent");

    // Kali Linux Workbench Elements
    el.terminalWorkbenchCard = document.getElementById("terminalWorkbenchCard");
    el.btnModeQuest = document.getElementById("btnModeQuest");
    el.btnModeSandbox = document.getElementById("btnModeSandbox");
    el.tabTerminalMode = document.getElementById("tabTerminalMode");
    el.tabFsMode = document.getElementById("tabFsMode");
    el.paneKaliTerminal = document.getElementById("paneKaliTerminal");
    el.paneFsExplorer = document.getElementById("paneFsExplorer");
    el.btnCardBatafsil = document.getElementById("btnCardBatafsil");
    el.btnCardHint = document.getElementById("btnCardHint");
    el.btnOpenDictionary = document.getElementById("btnOpenDictionary");
    el.btnClearTerminal = document.getElementById("btnClearTerminal");
    el.btnOpenBatafsil = document.getElementById("btnOpenBatafsil");
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
    el.wasmTerminalContainer = document.getElementById("wasmTerminalContainer");
    el.wasmLoader = document.getElementById("wasmLoader");
    el.wasmLoaderText = document.getElementById("wasmLoaderText");
    el.wasmXtermBox = document.getElementById("wasmXtermBox");
    el.btnEngineShell = document.getElementById("btnEngineShell");
    el.btnEngineWasm = document.getElementById("btnEngineWasm");
    el.btnFloatingExitFs = document.getElementById("btnFloatingExitFs");
    el.btnOpenBatafsil = document.getElementById("btnOpenBatafsil");
    el.terminalActiveModeBadge = document.getElementById("terminalActiveModeBadge");
    el.terminalTaskBar = document.getElementById("terminalTaskBar");
    el.terminalTaskText = document.getElementById("terminalTaskText");
    el.btnTtBatafsil = document.getElementById("btnTtBatafsil");
    el.btnTtHint = document.getElementById("btnTtHint");
    el.btnTtExpected = document.getElementById("btnTtExpected");
    el.terminalEditorOverlay = document.getElementById("terminalEditorOverlay");
    el.editorTitle = document.getElementById("editorTitle");
    el.editorTextarea = document.getElementById("editorTextarea");
    el.btnEditorSave = document.getElementById("btnEditorSave");
    el.btnEditorExit = document.getElementById("btnEditorExit");
  
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

    el.schemaTableDisplay = document.getElementById("schemaTableDisplay");
    el.schemaTabs = document.querySelectorAll(".schema-tab");

    el.sectorSubTitle = document.getElementById("sectorSubTitle");
    el.btnPrevQ = document.getElementById("btnPrevQ");
    el.btnNextQ = document.getElementById("btnNextQ");
    el.floorQuestionStrip = document.getElementById("floorQuestionStrip");

    el.qNumberBadge = document.getElementById("qNumberBadge");
    el.qDifficultyBadge = document.getElementById("qDifficultyBadge");
    el.qSourceBadge = document.getElementById("qSourceBadge");
    el.qTitle = document.getElementById("qTitle");
    el.qStory = document.getElementById("qStory");
    el.qTask = document.getElementById("qTask");
    el.qFlagAnatomyBox = document.getElementById("qFlagAnatomyBox");
    el.btnToggleHint = document.getElementById("btnToggleHint");
    el.qHintBox = document.getElementById("qHintBox");

    el.termScreen = document.getElementById("termScreen");
    el.termInput = document.getElementById("termInput");
    el.btnExecCmd = document.getElementById("btnExecCmd");
    el.tokenToolbar = document.getElementById("tokenToolbar");

    // Modals
    el.mapModal = document.getElementById("mapModal");
    el.mapModalBody = document.getElementById("mapModalBody");
    el.eventModal = document.getElementById("eventModal");
    el.eventModalBody = document.getElementById("eventModalBody");
    el.certModal = document.getElementById("certModal");
    el.certModalBody = document.getElementById("certModalBody");
    el.toastContainer = document.getElementById("toastContainer");
  }

  function showToast(msg, type = "success") {
    if (!el.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    let icon = "✅";
    if (type === "error") icon = "⚠️";
    if (type === "event") icon = "🔔";
    toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
    el.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(40px)";
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  function renderHUD() {
    const career = getCurrentCareer();
    if (el.hudRankTitle) el.hudRankTitle.textContent = career.title;
    if (el.hudSalary) el.hudSalary.textContent = career.salary;
    if (el.hudCapital) el.hudCapital.textContent = `$${state.bonusCapital.toLocaleString()}`;

    const totalSolved = state.solvedIds.size;
    if (el.hudSolved) el.hudSolved.textContent = `${totalSolved} / 150`;
    const percent = Math.min(100, Math.round((totalSolved / 150) * 100));
    if (el.hudProgressFill) el.hudProgressFill.style.width = `${percent}%`;

    renderSectorBar();
  }

  function renderSectorBar() {
    if (!el.sectorNavList) return;
    const sectors = window.VIRTUAL_LINUX_W4.sectors;
    el.sectorNavList.innerHTML = "";

    sectors.forEach(sec => {
      const qInSec = allQuestions.filter(q => q.sector === sec.id);
      const solvedInSec = qInSec.filter(q => state.solvedIds.has(q.id)).length;
      const isCompleted = (solvedInSec === qInSec.length && qInSec.length > 0);
      const isActive = (state.activeSector === sec.id);

      const pill = document.createElement("div");
      pill.className = `sector-pill ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`;
      pill.innerHTML = `
        <span>${sec.icon} ${sec.name}</span>
        <span class="sec-count">${solvedInSec}/15</span>
      `;
      pill.addEventListener("click", () => {
        SoundFX.playKey();
        selectSector(sec.id);
      });
      el.sectorNavList.appendChild(pill);
    });
  }

  function selectSector(sectorId) {
    state.activeSector = sectorId;
    const sectorData = window.VIRTUAL_LINUX_W4.sectors.find(s => s.id === sectorId);
    if (el.floorHeaderTitle && sectorData) {
      el.floorHeaderTitle.textContent = `Sektor ${sectorData.id}: ${sectorData.name} — ${sectorData.theme}`;
    }

    const questionsInSector = allQuestions.filter(q => q.sector === sectorId);
    const firstUnsolved = questionsInSector.find(q => !state.solvedIds.has(q.id));
    if (firstUnsolved) {
      state.currentQuestionId = firstUnsolved.id;
    } else if (questionsInSector.length > 0) {
      state.currentQuestionId = questionsInSector[0].id;
    }

    renderHUD();
    renderQuestionDossier();
    saveProgress();
  }

  function renderQuestionDots() {
    if (!el.floorQuestionStrip) return;
    el.floorQuestionStrip.innerHTML = "";
    const questionsInSector = allQuestions.filter(q => q.sector === state.activeSector);

    questionsInSector.forEach(q => {
      const dot = document.createElement("div");
      const isSolved = state.solvedIds.has(q.id);
      const isActive = (state.currentQuestionId === q.id);

      dot.className = `q-dot ${isActive ? "active" : ""} ${isSolved ? "solved" : ""}`;
      dot.textContent = isSolved ? "✓" : (q.id % 15 === 0 ? 15 : q.id % 15);
      dot.title = `#${q.id}: ${q.title}`;

      dot.addEventListener("click", () => {
        SoundFX.playKey();
        state.currentQuestionId = q.id;
        renderQuestionDossier();
        saveProgress();
      });

      el.floorQuestionStrip.appendChild(dot);
    });
  }

  // --- Render Question Dossier with Flag Anatomy (Master Feature) ---
  function loadQuestion(id) {
    state.currentQuestionId = id;
    const q = allQuestions.find(item => item.id === id);
    if (q) state.activeSector = q.sector || Math.ceil(id / 15);
    renderQuestionDossier();
    if (typeof renderHUD === "function") renderHUD();
    if (typeof updateHUD === "function") updateHUD();
  }

  function renderQuestionDossier() {
    const q = allQuestions.find(item => item.id === state.currentQuestionId);
    if (!q) return;

    renderQuestionDots();

    // Update Kali Terminal HUD & Fullscreen Bar
    if (el.kaliHiddenInput) {
      el.kaliHiddenInput.value = "";
      if (el.kaliTypedText) el.kaliTypedText.textContent = "";
      focusKaliInput();
    }
    const expText = q.canonical || q.expectedBash || q.expectedSql || "";
    const cmdWord = expText.split(" ")[0] || "bash";
    if (el.ktFsTaskBadge) el.ktFsTaskBadge.textContent = "#" + q.id + ": " + cmdWord;
    if (el.ktFsProgress) el.ktFsProgress.textContent = state.solvedIds.size + " / 150";
    if (el.ktModalTaskHeading) el.ktModalTaskHeading.textContent = "Vazifa #" + q.id + ": " + q.title;
    if (el.ktModalDiffBadge) el.ktModalDiffBadge.textContent = q.difficulty || "Standart";
    if (el.ktModalSourceBadge) el.ktModalSourceBadge.textContent = q.source || "WIUT OS";
    if (el.ktModalStory) el.ktModalStory.textContent = q.story || "";
    if (el.ktModalTaskText) el.ktModalTaskText.innerHTML = q.taskUz || q.task || "";
    if (el.ktBatafsilCode) el.ktBatafsilCode.textContent = expText;
    if (el.ktBatafsilContent && window.COMMAND_ANATOMY) {
      const anatomy = window.COMMAND_ANATOMY.analyze(expText, q);
      el.ktBatafsilContent.innerHTML = window.COMMAND_ANATOMY.renderCardHtml(anatomy);
    }
    if (el.terminalTaskText && state.terminalMode !== "sandbox") {
      const cleanTask = (q.taskUz || q.task || q.title || "").replace(/<[^>]*>/g, "");
      el.terminalTaskText.textContent = `📌 #${q.id}: ${cleanTask}`;
    }

    const sec = window.VIRTUAL_LINUX_W4.sectors.find(s => s.id === q.sector);
    if (el.sectorSubTitle && sec) {
      el.sectorSubTitle.textContent = `${sec.name} (Sektor ${sec.id} • 15 ta bosqich)`;
    }

    if (el.qNumberBadge) el.qNumberBadge.textContent = `Vazifa #${q.id} / 150`;
    if (el.qDifficultyBadge) el.qDifficultyBadge.textContent = q.difficulty;
    if (el.qSourceBadge) el.qSourceBadge.textContent = q.source;

    if (el.qTitle) el.qTitle.textContent = q.title;
    if (el.qStory) el.qStory.textContent = q.story;
    if (el.qTask) el.qTask.innerHTML = q.taskUz;

    // Render Command & Flag Anatomy Card (Master User Feature - Accordion)
    const cmdCardCode = document.getElementById("cmdCardCode");
    const cmdCardBody = document.getElementById("cmdCardBody");
    const btnToggleCmdCard = document.getElementById("btnToggleCmdCard");
    const cmdCardToggleHint = document.getElementById("cmdCardToggleHint");
    if (cmdCardBody && window.COMMAND_ANATOMY) {
      const targetCmd = q.expectedBash || (q.solutions && q.solutions[0]) || "";
      const anatomy = window.COMMAND_ANATOMY.analyze(targetCmd, q);
      if (cmdCardCode) cmdCardCode.textContent = anatomy.fullCommand || targetCmd;
      cmdCardBody.innerHTML = window.COMMAND_ANATOMY.renderCardHtml(anatomy);
      cmdCardBody.style.display = "none";
      if (btnToggleCmdCard) btnToggleCmdCard.classList.remove("open");
      if (cmdCardToggleHint) cmdCardToggleHint.textContent = "Batafsil ko'rish";
    }

    if (el.qHintBox) {
      el.qHintBox.textContent = q.hint || "Darslikdagi ko'rsatilgan buyruqni bering.";
      el.qHintBox.classList.remove("show");
    }
    if (el.btnToggleHint) {
      el.btnToggleHint.textContent = "💡 Maslahatni Ko'rish";
    }

    if (state.arena) {
      state.arena.triggerPlayerAlert(`Vazifa #${q.id}: ${q.title}`);
    }
  }

  function prevQuestion() {
    SoundFX.playKey();
    if (state.currentQuestionId > 1) {
      state.currentQuestionId--;
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q && q.sector !== state.activeSector) {
        state.activeSector = q.sector;
      }
      renderHUD();
      renderQuestionDossier();
      saveProgress();
    }
  }

  function nextQuestion() {
    SoundFX.playKey();
    if (state.currentQuestionId < 150) {
      state.currentQuestionId++;
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q && q.sector !== state.activeSector) {
        state.activeSector = q.sector;
      }
      renderHUD();
      renderQuestionDossier();
      saveProgress();
    }
  }

  // --- Inspector Table / View Rendering ---
  function renderInspectorView() {
    if (!el.schemaTableDisplay || !state.liveShell) return;

    if (el.schemaTabs) {
      el.schemaTabs.forEach(tabBtn => {
        if (tabBtn.getAttribute("data-tab") === state.activeFsTab) {
          tabBtn.classList.add("active");
        } else {
          tabBtn.classList.remove("active");
        }
      });
    }

    const tab = state.activeFsTab;

    // 1. MASTER FLAG DICTIONARY TAB (Search & Breakdown)
    if (tab === "flags") {
      const allFlags = window.VIRTUAL_LINUX_W4.LINUX_FLAG_DICTIONARY || [];
      const query = (state.flagSearchQuery || "").toLowerCase();
      const filtered = allFlags.filter(item => {
        return item.cmd.toLowerCase().includes(query) ||
               item.flag.toLowerCase().includes(query) ||
               item.nameUz.toLowerCase().includes(query) ||
               item.purposeUz.toLowerCase().includes(query);
      });

      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-amber-bright); font-weight:700; font-size:13px;">
          🏷️ Linux Qo'shimchalari & Bayroqlar Qomusi (Flag Anatomy Dictionary • Jami: ${allFlags.length})
        </div>
        <div class="flag-search-box">
          <input
            type="text"
            class="flag-search-input"
            id="flagDictSearch"
            placeholder="Bayroq yoki buyruqni qidiring... (masalan: usermod, -L, -m, -s, curl, find, -type, systemctl)"
            value="${escapeHtml(state.flagSearchQuery)}"
          />
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
      `;

      filtered.forEach(f => {
        html += `
          <div class="flag-breakdown-item">
            <div class="flag-tag-row">
              <span class="flag-pill" style="color:#fbbf24; border-color:#f59e0b;">${escapeHtml(f.cmd)}</span>
              <span class="flag-pill">${escapeHtml(f.flag)}</span>
              <span class="flag-name">${escapeHtml(f.nameUz)}</span>
              <span style="font-size:11px; color:var(--text-muted);">(${escapeHtml(f.nameEn)})</span>
            </div>
            <div style="font-size:11.5px; color:#38bdf8; font-family:'JetBrains Mono', monospace; margin:2px 0;">
              Sintaksis: <code>${escapeHtml(f.syntax)}</code>
            </div>
            <div class="flag-purpose"><b>Vazifasi:</b> ${escapeHtml(f.purposeUz)}</div>
            <div class="flag-risk-box">${escapeHtml(f.withoutFlagRisk)}</div>
          </div>
        `;
      });

      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;

      // Bind search input
      const searchInp = document.getElementById("flagDictSearch");
      if (searchInp) {
        searchInp.addEventListener("input", (e) => {
          state.flagSearchQuery = e.target.value;
          renderInspectorView();
        });
      }

    } else if (tab === "tree") {
      // Process Tree & Fork Table
      const procs = state.liveShell.processes;
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:600;">
          🌳 Protsesslar Daraxti & Klonlangan Tarmoqlar (pstree -p / ps aux)
        </div>
        <table class="sys-table">
          <thead>
            <tr>
              <th>USER</th>
              <th>PID</th>
              <th>PPID</th>
              <th>%CPU</th>
              <th>%MEM</th>
              <th>STAT</th>
              <th>COMMAND</th>
            </tr>
          </thead>
          <tbody>
      `;
      procs.forEach(p => {
        html += `
          <tr>
            <td>${p.user}</td>
            <td style="font-weight:700; color:#38bdf8;">${p.pid}</td>
            <td style="color:#a78bfa;">${p.ppid}</td>
            <td>${p.cpu}%</td>
            <td>${p.mem}%</td>
            <td><span class="status-run">${p.stat}</span></td>
            <td><code>${p.cmd}</code></td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "scripts") {
      // Scripts Explorer
      const labDir = state.liveShell.getNode("/home/student/os_seminar4");
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-emerald-bright); font-weight:600;">
          📜 Laboratoriya Skriptlari (~/os_seminar4)
        </div>
        <table class="sys-table">
          <thead>
            <tr>
              <th>Ruxsatlar</th>
              <th>Egasi</th>
              <th>Hajmi</th>
              <th>Fayl Nomi</th>
              <th>Ko'rish</th>
            </tr>
          </thead>
          <tbody>
      `;
      if (labDir && labDir.children) {
        Object.keys(labDir.children).sort().forEach(name => {
          const node = labDir.children[name];
          const isExec = name.endsWith(".sh") || name.endsWith(".out") || name.endsWith(".c") || name.endsWith(".py");
          html += `
            <tr>
              <td><code>${node.permissions}</code></td>
              <td>${node.owner}:${node.group}</td>
              <td>${node.size}B</td>
              <td style="font-weight:${isExec ? "700" : "400"}; color:${isExec ? "#34d399" : "#cbd5e1"};">${name}</td>
              <td>
                <button class="token-btn emerald" onclick="window.viewScriptContent('${name}')">cat ${name}</button>
              </td>
            </tr>
          `;
        });
      }
      html += `</tbody></table>`;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "timers") {
      // Timers & Cron Schedule
      const timers = state.liveShell.systemdTimers;
      const cronLines = state.liveShell.cronLines;
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-violet-bright); font-weight:600;">
          ⏱️ Rejalashtirilgan Vazifalar: Systemd Timers & Crontab
        </div>
        <div style="font-weight:700; color:#38bdf8; margin:6px 0;">1. Systemd User Timers (systemctl --user list-timers):</div>
        <table class="sys-table" style="margin-bottom:12px;">
          <thead>
            <tr>
              <th>Timer Unit</th>
              <th>Holat</th>
              <th>Davriylik</th>
              <th>Boshqaruv</th>
            </tr>
          </thead>
          <tbody>
      `;
      Object.keys(timers).forEach(tm => {
        const item = timers[tm];
        html += `
          <tr>
            <td style="color:#fff; font-weight:700;">${tm}</td>
            <td><span class="${item.active ? "status-run" : "status-stop"}">${item.active ? "FAOL (Active)" : "TO'XTAGAN (Stopped)"}</span></td>
            <td><code>OnCalendar=*-*-* *:*:00 (Har daqiqada)</code></td>
            <td>
              <button class="token-btn ${item.active ? "amber" : "emerald"}" onclick="window.toggleTimerState('${tm}')">
                ${item.active ? "To'xtatish (stop)" : "Ishga tushirish (start)"}
              </button>
            </td>
          </tr>
        `;
      });
      html += `</tbody></table>`;

      html += `<div style="font-weight:700; color:#fbbf24; margin:6px 0;">2. Crontab Jadvali (crontab -l):</div>`;
      if (cronLines.length === 0) {
        html += `<div style="color:var(--text-muted); padding:6px;">Hozircha cron vazifasi yo'q. Masalan: <code>crontab -e</code></div>`;
      } else {
        html += `<div class="code-view">${cronLines.map(l => escapeHtml(l)).join("\n")}</div>`;
      }

      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "terminal") {
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:600;">
          🖥️ Bash Buyruqlar Tarixi (Command Log • Total: ${state.commandHistory.length})
        </div>
      `;
      if (state.commandHistory.length === 0) {
        html += `<div style="color:var(--text-muted); padding:10px;">Hali hech qanday buyruq kiritilmadi.</div>`;
      } else {
        html += `<ol style="padding-left: 20px; line-height: 1.8;">`;
        state.commandHistory.forEach((c) => {
          html += `<li><code>${escapeHtml(c)}</code></li>`;
        });
        html += `</ol>`;
      }
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "result") {
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:600;">
          🎯 Oxirgi Buyruq Natijasi & Kod
        </div>
        <div class="code-view">${escapeHtml(state.lastOutput || "Hech qanday buyruq bajarilmadi.")}</div>
      `;
      el.schemaTableDisplay.innerHTML = html;
    }
  }

  window.viewScriptContent = function(name) {
    const file = state.liveShell.getNode(`/home/student/os_seminar4/${name}`);
    if (file && file.content) {
      state.activeFsTab = "result";
      state.lastOutput = `--- ${name} ---\n` + file.content;
      renderInspectorView();
    }
  };

  window.toggleTimerState = function(tm) {
    const item = state.liveShell.systemdTimers[tm];
    if (item) {
      item.active = !item.active;
      SoundFX.playKey();
      renderInspectorView();
    }
  };

  function appendTerminalLine(rawHtml) {
    if (!el.termScreen) return;
    const line = document.createElement("div");
    line.className = "term-line";
    line.innerHTML = rawHtml;
    el.termScreen.appendChild(line);
    el.termScreen.scrollTop = el.termScreen.scrollHeight;
  }

  function handleCommandSubmit() {
    if (!el.termInput) return;
    const raw = el.termInput.value.trim();
    if (!raw) return;

    SoundFX.playKey();
    el.termInput.value = "";

    state.commandHistory.push(raw);
    state.historyIndex = state.commandHistory.length;

    const promptLine = `
      <span class="term-prompt-line">
        <span class="term-user">student</span><span class="term-host">@debian-server</span>:<span class="term-path">~/os_seminar4</span><span class="term-symbol">$</span>
        <span style="color:#fff; font-weight:600;"> ${escapeHtml(raw)}</span>
      </span>
    `;
    appendTerminalLine(promptLine);

    if (raw === "clear") {
      if (el.termScreen) el.termScreen.innerHTML = "";
      return;
    }

    const res = state.liveShell.execute(raw);
    state.lastOutput = res.stdout + (res.stderr ? "\n" + res.stderr : "");

    if (res.stdout) {
      appendTerminalLine(`<div class="term-stdout">${escapeHtml(res.stdout)}</div>`);
    }

    if (res.stderr) {
      appendTerminalLine(`<div class="term-stderr">${escapeHtml(res.stderr)}</div>`);
    }

    // Evaluate against current question
    const currentQ = allQuestions.find(item => item.id === state.currentQuestionId);
    if (currentQ) {
      const grade = window.VIRTUAL_LINUX_W4.BASH_GRADER.evaluate(currentQ, raw, res);
      const isCorrect = grade && (grade.match === true || grade === true);

      if (isCorrect) {
        const wasAlreadySolved = state.solvedIds.has(currentQ.id);
        state.solvedIds.add(currentQ.id);

        if (!wasAlreadySolved) {
          state.bonusCapital += 200;
          SoundFX.playSuccess();
          showToast(`Ajoyib! Vazifa #${currentQ.id} muvaffaqiyatli bajarildi! (+$200)`, "success");

          const oldRank = getCurrentCareer();
          saveProgress();
          const newRank = getCurrentCareer();
          if (oldRank.title !== newRank.title) {
            SoundFX.playPromotion();
            showToast(`TABRIKLAYMIZ! Yangi lavozim: ${newRank.title} (${newRank.salary})!`, "event");
          }

          checkMilestoneIncident(state.solvedIds.size);
        } else {
          SoundFX.playSuccess();
          showToast(`To'g'ri buyruq takrorlandi!`, "success");
        }

        appendTerminalLine(`
          <div class="term-success-msg">
            ✨ TO'G'RI! [Vazifa #${currentQ.id}] muvaffaqiyatli yakunlandi!
          </div>
        `);

        if (state.currentQuestionId < 150 && !wasAlreadySolved) {
          setTimeout(() => {
            nextQuestion();
          }, 800);
        }
      } else {
        if (res.code !== 0) {
          SoundFX.playError();
        }
      }
    }

    renderHUD();
    renderInspectorView();
    saveProgress();
  }

  function handleTabCompletion() {
    if (!el.termInput) return;
    const currentVal = el.termInput.value;
    const tokens = [
      "gcc -Wall -Wextra fork.c -o fork.out", "./fork.out",
      "gcc -Wall -Wextra forks.c -o forks.out", "./forks.out",
      "python3 fork.py", "./fork.py", "ulimit -u", "ulimit -a", "ulimit -u 50",
      "find logs -type f", "find logs -type f -name '*.log'",
      "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls",
      "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -delete",
      "./cleanup.sh", "bash cleanup.sh",
      "./download.sh urls.txt", "curl -fLsS --max-time 30 -o",
      "./rotate.sh logs backup", "gzip --", "find logs -maxdepth 1 -print0",
      "df -P /", "df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'",
      "./disk_check.sh", "./disk_check.sh 1", "./service_check.sh cron.service",
      "systemctl is-active --quiet cron.service", "systemctl show cron.service --property=LoadState --value",
      "crontab -e", "crontab -l", "crontab -r",
      "systemctl --user daemon-reload", "systemctl --user start os-seminar-tick.timer",
      "systemctl --user stop os-seminar-tick.timer", "systemctl --user list-timers --all",
      "journalctl --user -u os-seminar-tick.service -n 10 --no-pager",
      "echo $?", "pwd", "ls -l", "clear"
    ];

    const match = tokens.find(t => t.startsWith(currentVal) && t !== currentVal);
    if (match) {
      el.termInput.value = match;
      SoundFX.playKey();
    }
  }

  function checkMilestoneIncident(solvedCount) {
    const events = window.VIRTUAL_LINUX_W4.officeEvents;
    const match = events.find(e => e.triggerAfterQuestion === solvedCount);
    if (match) {
      triggerIncidentModal(match);
    }
  }

  function triggerIncidentModal(eventData) {
    if (!el.eventModal || !el.eventModalBody) return;
    SoundFX.playTone(550, "sine", 0.3, 0.2);

    let html = `
      <div class="event-narrative">
        <div style="font-size:16px; font-weight:700; color:var(--accent-amber-bright); margin-bottom:6px;">
          ${eventData.avatar} ${eventData.title}
        </div>
        <div style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">
          Spiker: ${eventData.speaker} (${eventData.role})
        </div>
        <div>${eventData.narrative}</div>
      </div>
      <div class="choice-list">
    `;

    eventData.choices.forEach((c, idx) => {
      html += `
        <button class="choice-btn" data-correct="${c.correct}" data-bonus="${c.bonus}" data-outcome="${escapeHtml(c.outcome)}">
          <b>${idx + 1}.</b> ${escapeHtml(c.text)}
        </button>
      `;
    });

    html += `</div>`;
    el.eventModalBody.innerHTML = html;

    el.eventModalBody.querySelectorAll(".choice-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const isCorr = btn.getAttribute("data-correct") === "true";
        const bonus = parseInt(btn.getAttribute("data-bonus"), 10) || 0;
        const outcome = btn.getAttribute("data-outcome");

        if (isCorr) {
          SoundFX.playSuccess();
          state.bonusCapital += bonus;
          showToast(outcome, "success");
        } else {
          SoundFX.playError();
          showToast(outcome, "error");
        }
        renderHUD();
        saveProgress();
        closeModal(el.eventModal);
      });
    });

    openModal(el.eventModal);
  }

  function renderQuestionMapModal() {
    if (!el.mapModalBody) return;
    const sectors = window.VIRTUAL_LINUX_W4.sectors;
    let html = `<div class="map-sectors-grid">`;

    sectors.forEach(sec => {
      const qInSec = allQuestions.filter(q => q.sector === sec.id);
      const solvedInSec = qInSec.filter(q => state.solvedIds.has(q.id)).length;

      html += `
        <div class="map-sector-block">
          <div class="map-sector-head">
            <span>${sec.icon} Sektor ${sec.id}: ${sec.name}</span>
            <span>${solvedInSec} / 15 bajarildi</span>
          </div>
          <div class="map-dots-row">
      `;

      qInSec.forEach(q => {
        const isSolved = state.solvedIds.has(q.id);
        const isActive = (state.currentQuestionId === q.id);
        html += `
          <button class="map-q-btn ${isSolved ? "solved" : ""} ${isActive ? "active" : ""}" data-qid="${q.id}" title="#${q.id}: ${q.title}">
            ${isSolved ? "✓" : q.id}
          </button>
        `;
      });

      html += `</div></div>`;
    });

    html += `</div>`;
    el.mapModalBody.innerHTML = html;

    el.mapModalBody.querySelectorAll(".map-q-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const qid = parseInt(btn.getAttribute("data-qid"), 10);
        const targetQ = allQuestions.find(q => q.id === qid);
        if (targetQ) {
          SoundFX.playKey();
          state.currentQuestionId = qid;
          state.activeSector = targetQ.sector;
          renderHUD();
          renderQuestionDossier();
          saveProgress();
          closeModal(el.mapModal);
        }
      });
    });
  }

  function checkAndRenderCertificate() {
    if (state.solvedIds.size < 150) {
      showToast(`Diplom olish uchun barcha 150 ta vazifani bajaring! Hozir: ${state.solvedIds.size}/150`, "error");
      return;
    }

    if (!el.certModal || !el.certModalBody) return;
    const career = getCurrentCareer();
    const nowStr = new Date().toLocaleDateString("uz-UZ", { year: "numeric", month: "long", day: "numeric" });

    el.certModalBody.innerHTML = `
      <div class="certificate-frame">
        <div class="cert-header">🎓 WIUT OPERATING SYSTEMS (5COSC041C)</div>
        <div class="cert-sub">Linux fork() Klonlash, Avtomatlashtirish & Rejalashtirilgan Ijro Sertifikati</div>
        <div style="font-size:13px; color:var(--text-muted);">Ushbu diplom tasdiqlaydi:</div>
        <div class="cert-name">Ravshanbek</div>
        <div style="font-size:13.5px; color:#cbd5e1; max-width:600px; margin:0 auto;">
          Barcha 150 ta vazifani to'liq bajardi, fork() tizim chaqirig'i, buyruqlar bayroqlari anatomiyasi,
          resurslar monitoringi va Systemd / Cron rejalashtirish texnologiyalarini 100% o'zlashtirdi.
        </div>
        <div class="cert-rank">🏆 Daraja: ${career.title} (${career.salary})</div>
        <div class="cert-meta">
          <div>Topshirildi: 150 / 150 (100%)</div>
          <div>Bonus Jamg'armasi: $${state.bonusCapital.toLocaleString()}</div>
          <div>Sana: ${nowStr}</div>
        </div>
        <div style="margin-top:20px; display:flex; justify-content:center; gap:10px;">
          <button class="btn btn-exec" onclick="window.print()">🖨️ Chop Etish / Saqlash</button>
        </div>
      </div>
    `;

    SoundFX.playPromotion();
    openModal(el.certModal);
  }

  function openModal(modalEl) {
    if (modalEl) modalEl.classList.add("open");
  }

  function closeModal(modalEl) {
    if (modalEl) modalEl.classList.remove("open");
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

  
  // ============================================================================
  // AUTHENTIC KALI LINUX TERMINAL ENGINE (1:1 with UserLAnd, 2 Modes & Fullscreen)
  // ============================================================================

  
  // --- Interactive Terminal Text Editor (nano / vim / vi) ---
  function openTerminalEditor(prog, filename, initialContent = "") {
    state.activeEditor = { prog, filename };
    if (el.editorTitle) {
      el.editorTitle.textContent = `${prog.toUpperCase()} • ${filename}`;
    }
    if (el.editorTextarea) {
      el.editorTextarea.value = initialContent;
    }
    if (el.terminalEditorOverlay) {
      el.terminalEditorOverlay.style.display = "flex";
    }
    setTimeout(() => {
      if (el.editorTextarea) el.editorTextarea.focus();
    }, 60);
  }

  function saveAndCloseTerminalEditor() {
    if (!state.activeEditor || !state.liveShell) return;
    const content = el.editorTextarea ? el.editorTextarea.value : "";
    const filename = state.activeEditor.filename;
    const cwd = state.liveShell.cwd || "/home/student";
    const fullPath = filename.startsWith("/") ? filename : (cwd === "/" ? "/" + filename : cwd + "/" + filename);
    const parts = fullPath.split("/").filter(Boolean);
    const fname = parts.pop();
    const dirPath = "/" + parts.join("/");

    let dirNode = state.liveShell.getNode(dirPath);
    if (!dirNode) {
      state.liveShell.execute(`mkdir -p "${dirPath}"`);
      dirNode = state.liveShell.getNode(dirPath);
    }

    if (dirNode && dirNode.children) {
      let fileNode = dirNode.children[fname];
      if (!fileNode) {
        fileNode = {
          name: fname,
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
        dirNode.children[fname] = fileNode;
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
    if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
  }

  // --- Real Linux WebAssembly (v86 + xterm.js) ---
  let wasmEmulatorInstance = null;
  let wasmXtermInstance = null;

  function fitWasmTerminal() {
    if (!wasmXtermInstance) return;
    const box = document.getElementById("wasmXtermBox");
    if (!box) return;
    const rect = box.getBoundingClientRect();
    const isMobile = window.innerWidth <= 600;
    const charWidth = isMobile ? 7.0 : 8.2;
    const charHeight = isMobile ? 14.5 : 17.5;
    const w = Math.max(240, (rect.width > 0 ? rect.width : box.clientWidth) - 8);
    const h = Math.max(160, (rect.height > 0 ? rect.height : box.clientHeight) - 8);
    const cols = Math.max(30, Math.floor(w / charWidth));
    const rows = Math.max(10, Math.floor(h / charHeight));
    try {
      wasmXtermInstance.resize(cols, rows);
      wasmXtermInstance.scrollToBottom();
    } catch (e) {}
  }
  window.fitWasmTerminal = fitWasmTerminal;
  window.addEventListener("resize", fitWasmTerminal);

  async function initWasmRealLinux() {
    if (wasmEmulatorInstance) {
      if (wasmXtermInstance) wasmXtermInstance.focus();
      return;
    }

    const box = el.wasmXtermBox || document.getElementById("wasmXtermBox");
    const loader = el.wasmLoader || document.getElementById("wasmLoader");
    const loaderText = el.wasmLoaderText || document.getElementById("wasmLoaderText");
    if (!box) return;

    if (loader) loader.style.display = "flex";

    const V86Constructor = window.V86 || window.V86Starter;
    if (typeof Terminal === "undefined" || !V86Constructor) {
      if (loaderText) {
        loaderText.innerHTML = `
          <div style="font-weight:700; color:#fbbf24; margin-bottom:6px;">⚠️ WebAssembly kutubxonasi kutilmoqda</div>
          <div style="font-size:12px; color:#cbd5e1; margin-bottom:12px; max-width:320px; line-height:1.5;">
            Internet tezligi past bo'lsa yoki kutishni istamasangiz, <b>0 soniyada</b> ochiluvchi va ichida <b>haqiqiy vim/nano</b> bor Tezkor Shelldan foydalaning:
          </div>
          <button type="button" class="btn btn-primary" onclick="window.setTerminalEngine('shell')" style="padding:7px 16px; font-weight:700;">
            ⚡ Tezkor Shellga O'tish
          </button>
        `;
      }
      return;
    }

    try {
      const isMobile = window.innerWidth <= 600;
      if (!wasmXtermInstance) {
        wasmXtermInstance = new Terminal({
          cols: isMobile ? 42 : 80,
          rows: isMobile ? 18 : 24,
          fontSize: isMobile ? 11.5 : 13,
          lineHeight: 1.2,
          theme: {
            background: "#000000",
            foreground: "#f8fafc",
            cursor: "#22d3ee",
            selectionBackground: "rgba(56, 189, 248, 0.3)"
          },
          fontFamily: "'JetBrains Mono', monospace",
          cursorBlink: true,
          scrollOnUserInput: true,
          scrollback: 2000
        });
        wasmXtermInstance.open(box);
        fitWasmTerminal();
      }

      if (loaderText) {
        loaderText.innerHTML = `
          <div class="wasm-spinner"></div>
          <div style="font-weight:700; color:#38bdf8; margin-top:8px;">🐧 Haqiqiy Linux Tizimi Yuklanmoqda...</div>
          <div id="wasmProgressStatus" style="font-family:'JetBrains Mono', monospace; font-size:13.5px; color:#34d399; margin: 8px 0 6px; font-weight:700;">0.00 MB / 7.35 MB (0%)</div>
          <div style="width:260px; height:8px; background:#0f172a; border-radius:4px; overflow:hidden; border:1px solid #334155; margin: 0 auto 14px auto;">
            <div id="wasmProgressBarFill" style="width:0%; height:100%; background:linear-gradient(90deg, #06b6d4, #10b981); transition:width 0.2s ease;"></div>
          </div>
          <div style="font-size:11px; color:#94a3b8; margin-bottom:10px;">Bir marta yuklanadi va brauzeringizda keshlanadi.</div>
          <button type="button" class="btn btn-primary" onclick="window.setTerminalEngine('shell')" style="padding:6px 14px; font-size:11.5px; font-weight:700;">
            ⚡ Tezkor Shellga O'tish (Kutmasdan Ishlash)
          </button>
        `;
      }

      const isoUrl = "../os-w1-2d-game/data/linux4.iso";
      const isoResponse = await fetch(isoUrl);
      if (!isoResponse.ok) {
        throw new Error(`ISO fayl topilmadi: ${isoResponse.statusText}`);
      }

      const reader = isoResponse.body.getReader();
      const contentLength = +isoResponse.headers.get("Content-Length") || 7712768;
      let receivedLength = 0;
      let chunks = [];

      const statusEl = document.getElementById("wasmProgressStatus");
      const barEl = document.getElementById("wasmProgressBarFill");

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        receivedLength += value.length;
        const percent = Math.min(100, Math.round((receivedLength / contentLength) * 100));
        const mbReceived = (receivedLength / (1024 * 1024)).toFixed(2);
        const mbTotal = (contentLength / (1024 * 1024)).toFixed(2);

        if (statusEl) statusEl.textContent = `${mbReceived} MB / ${mbTotal} MB (${percent}%)`;
        if (barEl) barEl.style.width = `${percent}%`;
      }

      if (statusEl) statusEl.textContent = "✓ 100% Yuklandi! Linux x86 Kernel ishga tushmoqda...";

      let isoBytes = new Uint8Array(receivedLength);
      let pos = 0;
      for (let chunk of chunks) {
        isoBytes.set(chunk, pos);
        pos += chunk.length;
      }

      wasmXtermInstance.writeln("\x1b[1;36m🐧 Linux Kernel x86 ishga tushmoqda... (SeaBIOS & Kernel 4.x)\x1b[0m\r\n");

      wasmEmulatorInstance = new V86Constructor({
        wasm_path: "https://cdn.jsdelivr.net/npm/v86@latest/build/v86.wasm",
        memory_size: 64 * 1024 * 1024,
        vga_memory_size: 2 * 1024 * 1024,
        screen_container: null,
        bios: {
          url: "../os-w1-2d-game/data/seabios.bin"
        },
        vga_bios: {
          url: "../os-w1-2d-game/data/vgabios.bin"
        },
        cdrom: {
          buffer: isoBytes.buffer
        },
        autostart: true
      });

      wasmEmulatorInstance.add_listener("serial0-output-byte", function(byte) {
        if (typeof byte === "number") {
          const char = String.fromCharCode(byte);
          wasmXtermInstance.write(char);
        } else {
          wasmXtermInstance.write(byte);
        }
        wasmXtermInstance.scrollToBottom();
      });

      wasmXtermInstance.onData(function(data) {
        if (wasmEmulatorInstance) {
          wasmEmulatorInstance.serial0_send(data);
        }
        wasmXtermInstance.scrollToBottom();
      });

      fitWasmTerminal();

      wasmEmulatorInstance.add_listener("ready", function() {
        if (loader) loader.style.display = "none";
        wasmXtermInstance.writeln("\r\n\x1b[1;32m✓ Haqiqiy x86 Linux tizimi faol! Tizimga xush kelibsiz.\x1b[0m\r\n");
        wasmXtermInstance.focus();
      });

      setTimeout(() => {
        if (loader) loader.style.display = "none";
      }, 4500);

    } catch (err) {
      console.error("WASM boot error:", err);
      if (loaderText) {
        loaderText.innerHTML = `
          <div style="font-weight:700; color:#ef4444; margin-bottom:6px;">⚠️ Yuklashda xatolik: ${err.message}</div>
          <button type="button" class="btn btn-primary" onclick="window.setTerminalEngine('shell')" style="margin-top:8px;">
            ⚡ Tezkor Shellga O'tish
          </button>
        `;
      }
    }
  }

  function setTerminalEngine(engine) {
    state.activeEngine = engine;
    SoundFX.playKey();
    if (engine === "wasm") {
      if (el.btnEngineWasm) el.btnEngineWasm.classList.add("active");
      if (el.btnEngineShell) el.btnEngineShell.classList.remove("active");
      if (el.wasmTerminalContainer) el.wasmTerminalContainer.style.display = "block";
      if (el.kaliScreen) el.kaliScreen.style.display = "none";
      initWasmRealLinux();
    } else {
      if (el.btnEngineShell) el.btnEngineShell.classList.add("active");
      if (el.btnEngineWasm) el.btnEngineWasm.classList.remove("active");
      if (el.wasmTerminalContainer) el.wasmTerminalContainer.style.display = "none";
      if (el.kaliScreen) el.kaliScreen.style.display = "block";
      focusKaliInput();
    }
  }
  window.setTerminalEngine = setTerminalEngine;

  function toggleTerminalFullscreen(enable) {
    const isFs = (typeof enable === "boolean") ? enable : !state.terminalFullscreen;
    state.terminalFullscreen = isFs;
    state.layoutMode = isFs ? "fullscreen" : "split";
    SoundFX.playKey();

    if (isFs) {
      if (el.terminalWorkbenchCard) el.terminalWorkbenchCard.classList.add("is-fullscreen");
      if (el.kaliFullscreenBar) el.kaliFullscreenBar.style.display = "flex";
      if (el.btnOpenDictionary) {
      el.btnOpenDictionary.addEventListener("click", () => {
        if (window.openOsDictionary) window.openOsDictionary();
      });
    }
    if (el.btnClearTerminal) {
      el.btnClearTerminal.addEventListener("click", () => {
        if (state.engine === "wasm" && wasmEmulatorInstance) {
          wasmEmulatorInstance.serial0_send("clear\n");
          if (wasmXtermInstance) { wasmXtermInstance.focus(); wasmXtermInstance.scrollToBottom(); }
        } else {
          if (el.kaliStream) el.kaliStream.innerHTML = "";
          if (el.terminalOutput) el.terminalOutput.innerHTML = "";
          if (el.termScreen) el.termScreen.innerHTML = "";
        }
      });
    }
    if (el.btnOpenBatafsil && el.modalKtBatafsil) {
      el.btnOpenBatafsil.addEventListener("click", () => {
        SoundFX.playKey();
        el.modalKtBatafsil.classList.add("active");
      });
    }
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
      if (el.terminalTaskText) el.terminalTaskText.textContent = "💻 Erkin Sandbox: Istalgan buyruqni sinang (gcc, ./a.out, fork, kill, pipe...)";
      printKaliInfo("┌──[ 💻 ERKIN SANDBOX REJIMI FAOL ]──────────────────────────────────\n│ Istalgan Linux buyrug'ini erkin sinab ko'rishingiz mumkin\n│ Savollarga qaytish uchun 'quest' deb yozing yoki [🎯 Topshiriqlar] tugmasini bosing.\n└──────────────────────────────────────────────────────────────────");
    } else {
      if (el.btnModeQuest) el.btnModeQuest.classList.add("active");
      if (el.btnModeSandbox) el.btnModeSandbox.classList.remove("active");
      if (el.terminalActiveModeBadge) el.terminalActiveModeBadge.textContent = "🎯 Masalalar";
      if (el.btnFsToggleMode) el.btnFsToggleMode.textContent = "🎯 Rejim: Topshiriqlar";
      const currentQ = allQuestions.find(item => item.id === state.currentQuestionId);
      if (el.terminalTaskText && currentQ) {
        const cleanTask = (currentQ.taskUz || currentQ.task || currentQ.title || "").replace(/<[^>]*>/g, "");
        el.terminalTaskText.textContent = `📌 #${currentQ.id}: ${cleanTask}`;
      }
      printKaliInfo("[🎯 TOPSHIRIQLAR REJIMI]: Joriy vazifa #" + state.currentQuestionId + " tekshiriladi.");
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
      if (typeof renderInspectorView === "function") renderInspectorView();
      if (typeof renderFsExplorer === "function") renderFsExplorer();
    }
  }

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
<span style="color:#f8fafc">Welcome to Kali in UserLAnd! (Week 4: fork(), Process Hierarchy, Cron & SysAdmin Scripts)</span>\n`;
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
          
          if (state.activeEngine === "wasm" && wasmEmulatorInstance) {
            if (token) {
              wasmEmulatorInstance.serial0_send(token);
            } else if (key === "Tab") {
              wasmEmulatorInstance.serial0_send("\t");
            } else if (key === "CtrlC") {
              wasmEmulatorInstance.serial0_send("\x03");
            } else if (key === "clear") {
              wasmEmulatorInstance.serial0_send("clear\n");
            }
            if (wasmXtermInstance) {
              wasmXtermInstance.focus();
              wasmXtermInstance.scrollToBottom();
            }
            return;
          }
  
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
        if (el.btnToggleHint) el.btnToggleHint.click();
      });
    }
    if (el.btnClearTerminal) {
      el.btnClearTerminal.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.kaliStream) el.kaliStream.innerHTML = "";
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
        if (q && window.VIRTUAL_LINUX_W4) {
          const expShell = new window.VIRTUAL_LINUX_W4.VirtualLinuxShell();
          const expCmd = q.canonical || q.expectedBash || q.expectedSql || "";
          const res = expShell.execute(expCmd);
          printKaliInfo("[👁 KUTILAYOTGAN NATIJA]:\n" + (res.stdout || "(Tizim holati o'zgaradi)"));
        }
      });
    }
    if (el.btnFsMap) {
      el.btnFsMap.addEventListener("click", () => {
        SoundFX.playKey();
        if (typeof openMapModal === "function") openMapModal();
        if (typeof renderQuestionMapModal === "function") renderQuestionMapModal();
      });
    }
    if (el.btnExitFullscreen) {
      el.btnExitFullscreen.addEventListener("click", () => toggleTerminalFullscreen(false));
    }
    if (el.btnFloatingExitFs) {
      el.btnFloatingExitFs.addEventListener("click", () => toggleTerminalFullscreen(false));
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
        if (q) printKaliInfo("[💡 MASLAHAT]: " + (q.hint || "Topshiriq talablarini diqqat bilan o'rganing."));
      });
    }
    if (el.btnTtExpected) {
      el.btnTtExpected.addEventListener("click", () => {
        SoundFX.playKey();
        const q = allQuestions.find(item => item.id === state.currentQuestionId);
        if (q && window.VIRTUAL_LINUX_W4) {
          const expShell = new window.VIRTUAL_LINUX_W4.VirtualLinuxShell();
          const expCmd = q.canonical || q.expectedBash || q.expectedSql || "";
          const res = expShell.execute(expCmd);
          printKaliInfo("[👁 KUTILGAN NATIJA]:\n" + (res.stdout || "(Tizim holati yoki jarayonlar o'zgaradi)"));
        }
      });
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
        if (typeof openSolutionModal === "function") openSolutionModal();
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
    const cwd = state.liveShell ? (state.liveShell.cwd || "/home/student") : "/home/student";
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
    const tokens = ["gcc fork.c -o fork.out","./fork.out","python3 fork.py","pstree -p","ps aux | grep fork","./download.sh","./rotate.sh","./disk_check.sh","crontab -l","systemctl list-timers","df -P","echo $?"];
    const match = tokens.find(k => k.startsWith(val.trim()));
    if (match) {
      el.kaliHiddenInput.value = match + " ";
      if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
    }
  }

  function appendKaliPromptHistory(cmd) {
    if (!el.kaliStream) return;
    const cwd = state.liveShell ? (state.liveShell.cwd || "/home/student") : "/home/student";
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
        printKaliInfo(`[#${q.id} / 150] ${q.title}\n${q.taskUz || q.task || ""}`);
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
      if (q && window.VIRTUAL_LINUX_W4) {
        const expShell = new window.VIRTUAL_LINUX_W4.VirtualLinuxShell();
        const expCmd = q.canonical || q.expectedBash || q.expectedSql || "";
        const res = expShell.execute(expCmd);
        printKaliInfo("[👁 KUTILAYOTGAN NATIJA]:\n" + (res.stdout || "(Tizim holati o'zgaradi)"));
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
      if (typeof openMapModal === "function") openMapModal();
      if (typeof renderQuestionMapModal === "function") renderQuestionMapModal();
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
    if (typeof renderInspectorView === "function") renderInspectorView();
    if (typeof renderFsExplorer === "function") renderFsExplorer();

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

    const expectedCmd = currentQ.canonical || currentQ.expectedBash || currentQ.expectedSql || "";
    const grade = (function() {
      const g = window.VIRTUAL_LINUX_W4.BASH_GRADER.evaluate(rawCmd, expectedCmd, currentQ);
      return { match: !!(g && g.match), message: (g && g.message) || (g ? "Topshiriq to'g'ri bajarildi!" : "Kutilgan natija mos kelmadi.") };
    })();

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
      if (typeof renderHUD === "function") renderHUD();
      if (typeof updateHUD === "function") updateHUD();
      if (typeof renderSectorBar === "function") renderSectorBar();
      if (typeof renderQuestionStrip === "function") renderQuestionStrip();
      if (typeof renderQuestionDots === "function") renderQuestionDots();

      if (el.ktFsProgress) el.ktFsProgress.textContent = `${state.solvedIds.size} / 150`;

      const succDiv = document.createElement("div");
      succDiv.className = "kali-grade-success";
      succDiv.innerHTML = `✓ TO'G'RI! ${escapeHtml(grade.message)}<br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi! Keyingi topshiriq uchun <b>'next'</b> deb yozing yoki [Keyingi ▶] tugmasini bosing.</span>`;
      el.kaliStream.appendChild(succDiv);

      if (typeof showToast === "function") {
        showToast(`Vazifa #${currentQ.id} to'g'ri bajarildi! (+$100)`, "success");
      }
      if (typeof showFeedback === "function") {
        showFeedback(true, `<b>✓ ${grade.message}</b><br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi!</span>`);
      }
    } else {
      SoundFX.playError();
      const errDiv = document.createElement("div");
      errDiv.className = "kali-grade-error";
      errDiv.innerHTML = `✕ DIQQAT: ${escapeHtml(grade.message)}<br><span style="color:#fca5a5; font-size:11.5px;">Kutilgan natija boshqacha. Maslahat olish uchun <b>'hint'</b> yoki <b>'batafsil'</b> deb yozing.</span>`;
      el.kaliStream.appendChild(errDiv);

      if (typeof showFeedback === "function") {
        showFeedback(false, `<b>✕ Diqqat:</b> ${grade.message}`);
      }
    }

    if (el.kaliScreen) el.kaliScreen.scrollTop = el.kaliScreen.scrollHeight;
  }


  function initGame() {
    cacheElements();

    state.liveShell = new window.VIRTUAL_LINUX_W4.VirtualLinuxShell();
    state.arena = new window.CyberAutomationNocArena2D("gameCanvas");
    state.arena.setTabCallback((tabName) => {
      state.activeFsTab = tabName;
      renderInspectorView();
    });

    loadProgress();
    initKaliTerminal();
    toggleTerminalFullscreen(false);

    // Token toolbar
    const tokens = [
      { text: "gcc -Wall -Wextra fork.c -o fork.out", cls: "token-btn" },
      { text: "./fork.out", cls: "token-btn emerald" },
      { text: "python3 fork.py", cls: "token-btn emerald" },
      { text: "ulimit -u", cls: "token-btn amber" },
      { text: "find logs -type f -name '*.log' -mmin +10080 -ls", cls: "token-btn" },
      { text: "./cleanup.sh", cls: "token-btn ruby" },
      { text: "./download.sh urls.txt", cls: "token-btn violet" },
      { text: "curl -fLsS --max-time 30 -o", cls: "token-btn" },
      { text: "./rotate.sh logs backup", cls: "token-btn violet" },
      { text: "df -P /", cls: "token-btn" },
      { text: "./disk_check.sh", cls: "token-btn amber" },
      { text: "./service_check.sh cron.service", cls: "token-btn" },
      { text: "crontab -l", cls: "token-btn" },
      { text: "crontab -e", cls: "token-btn amber" },
      { text: "systemctl --user daemon-reload", cls: "token-btn violet" },
      { text: "systemctl --user start os-seminar-tick.timer", cls: "token-btn emerald" },
      { text: "systemctl --user list-timers --all", cls: "token-btn" },
      { text: "clear", cls: "token-btn" }
    ];

    if (el.tokenToolbar) {
      el.tokenToolbar.innerHTML = "";
      tokens.forEach(t => {
        const btn = document.createElement("button");
        btn.className = t.cls;
        btn.textContent = t.text;
        btn.addEventListener("click", () => {
          SoundFX.playKey();
          if (el.termInput) {
            el.termInput.value = t.text;
            el.termInput.focus();
          }
        });
        el.tokenToolbar.appendChild(btn);
      });
    }

    if (el.termInput) {
      el.termInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleCommandSubmit();
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          if (state.commandHistory.length > 0 && state.historyIndex > 0) {
            state.historyIndex--;
            el.termInput.value = state.commandHistory[state.historyIndex] || "";
          }
        } else if (e.key === "ArrowDown") {
          e.preventDefault();
          if (state.historyIndex < state.commandHistory.length - 1) {
            state.historyIndex++;
            el.termInput.value = state.commandHistory[state.historyIndex] || "";
          } else {
            state.historyIndex = state.commandHistory.length;
            el.termInput.value = "";
          }
        } else if (e.key === "Tab") {
          e.preventDefault();
          handleTabCompletion();
        }
      });
    }

    if (el.btnExecCmd) {
      el.btnExecCmd.addEventListener("click", () => {
        handleCommandSubmit();
      });
    }

    if (el.schemaTabs) {
      el.schemaTabs.forEach(btn => {
        btn.addEventListener("click", () => {
          SoundFX.playKey();
          state.activeFsTab = btn.getAttribute("data-tab");
          renderInspectorView();
        });
      });
    }

    if (el.btnPrevQ) el.btnPrevQ.addEventListener("click", prevQuestion);
    if (el.btnNextQ) el.btnNextQ.addEventListener("click", nextQuestion);

    if (el.btnToggleHint) {
      el.btnToggleHint.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.qHintBox) {
          el.qHintBox.classList.toggle("show");
          el.btnToggleHint.textContent = el.qHintBox.classList.contains("show") ? "🙈 Maslahatni Yashirish" : "💡 Maslahatni Ko'rish";
        }
      });
    }

    if (el.btnTriggerEvent) {
      el.btnTriggerEvent.addEventListener("click", () => {
        const events = window.VIRTUAL_LINUX_W4.officeEvents;
        const ev = events[state.activeIncidentIndex % events.length];
        state.activeIncidentIndex++;
        triggerIncidentModal(ev);
      });
    }

    if (el.btnQuickEvent) {
      el.btnQuickEvent.addEventListener("click", () => {
        if (state.arena) {
          state.arena.turing.speech = state.arena.getRandomTuringQuote();
          state.arena.turing.speechTimer = 220;
          SoundFX.playTone(600, "sine", 0.15, 0.1);
        }
      });
    }

    if (el.btnOpenMap) {
      el.btnOpenMap.addEventListener("click", () => {
        SoundFX.playKey();
        renderQuestionMapModal();
        openModal(el.mapModal);
      });
    }

    if (el.btnToggleSound) {
      el.btnToggleSound.addEventListener("click", () => {
        SoundFX.muted = !SoundFX.muted;
        el.btnToggleSound.textContent = SoundFX.muted ? "🔇" : "🔊";
      });
    }

    if (el.btnResetProgress) {
      el.btnResetProgress.addEventListener("click", () => {
        if (confirm("Haqiqatan ham barcha natijalarni noldan boshlamoqchimisiz?")) {
          state.solvedIds.clear();
          state.bonusCapital = 0;
          state.currentQuestionId = 1;
          state.activeSector = 1;
          saveProgress();
          renderHUD();
          renderQuestionDossier();
          renderInspectorView();
          showToast("Natijalar muvaffaqiyatli tiklandi!", "event");
        }
      });
    }

    document.querySelectorAll(".modal-close").forEach(closeBtn => {
      closeBtn.addEventListener("click", () => {
        const parentModal = closeBtn.closest(".modal-overlay");
        closeModal(parentModal);
      });
    });

    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closeModal(overlay);
        }
      });
    });

    renderHUD();
    renderQuestionDossier();
    renderInspectorView();

    appendTerminalLine(`
      <div style="color:var(--accent-cyan-bright); margin-bottom:4px; font-weight:700;">
        🐧 Linux Process Cloning, Automation & Scheduling Workbench Initialized.
      </div>
      <div style="color:var(--text-muted); margin-bottom:6px;">
        Har bir buyruqning bayroqlari tahlili va nima uchun kerakligi yuqoridagi 'Bayroqlar Qomusi'da mavjud!
      </div>
    `);
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
    document.addEventListener("DOMContentLoaded", initGame);
  } else {
    initGame();
  }
})();
