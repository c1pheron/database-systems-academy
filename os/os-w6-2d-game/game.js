// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 GAME CONTROLLER
// Interactive Bash Terminal, Virtual Memory, Demand Paging, Docker Containers,
// 150 Question Pipeline, Web Audio Synthesizer, 10 Sectors & Career Engine,
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

  // --- Assemble All 150 Questions for Week 6 ---
  const allQuestions = [
    ...(window.QUESTIONS_W6_PART1 || []),
    ...(window.QUESTIONS_W6_PART2 || []),
    ...(window.QUESTIONS_W6_PART3 || [])
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
        }
        if (typeof data.activeSector === "number") {
          state.activeSector = data.activeSector;
        }
      }
    } catch (e) {}
  }

  function saveProgress() {
    try {
      const data = {
        solvedIds: Array.from(state.solvedIds),
        bonusCapital: state.bonusCapital,
        currentQuestionId: state.currentQuestionId,
        activeSector: state.activeSector
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  // --- Career Ranks Engine ---
  function getCurrentCareer() {
    const ranks = (window.VIRTUAL_LINUX_W6 && window.VIRTUAL_LINUX_W6.CAREER_RANKS) || [];
    const solved = state.solvedIds.size;
    let current = ranks[0] || { title: "Junior Container Trainee", salary: "$2,400/oy", color: "cyan" };
    for (const r of ranks) {
      if (solved >= r.threshold) {
        current = r;
      }
    }
    return current;
  }

  // --- DOM Elements Cache ---
  const el = {};

  function initElements() {
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
    el.btnPrevQ = document.getElementById("btnPrevQ");
    el.btnNextQ = document.getElementById("btnNextQ");
    el.floorQuestionStrip = document.getElementById("floorQuestionStrip");

    el.sectorSubTitle = document.getElementById("sectorSubTitle");
    el.qNumberBadge = document.getElementById("qNumberBadge");
    el.qDifficultyBadge = document.getElementById("qDifficultyBadge");
    el.qSourceBadge = document.getElementById("qSourceBadge");
    el.qTitle = document.getElementById("qTitle");
    el.qStory = document.getElementById("qStory");
    el.qTask = document.getElementById("qTask");
    el.btnToggleHint = document.getElementById("btnToggleHint");
    el.qHintBox = document.getElementById("qHintBox");

    el.tokenToolbar = document.getElementById("tokenToolbar");
    el.termScreen = document.getElementById("termScreen");
    el.termInput = document.getElementById("termInput");
    el.btnExecCmd = document.getElementById("btnExecCmd");

    el.schemaTabs = document.querySelectorAll(".schema-tab");
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

    el.mapModal = document.getElementById("mapModal");
    el.mapModalBody = document.getElementById("mapModalBody");
    el.eventModal = document.getElementById("eventModal");
    el.eventModalBody = document.getElementById("eventModalBody");
    el.certModal = document.getElementById("certModal");
    el.certModalBody = document.getElementById("certModalBody");
    el.toastContainer = document.getElementById("toastContainer");

    el.tickerSpeaker = document.getElementById("tickerSpeaker");
    el.tickerMessage = document.getElementById("tickerMessage");
    el.btnQuickEvent = document.getElementById("btnQuickEvent");
  }

  // --- UI Notifications (Toasts) ---
  function showToast(msg, type = "success") {
    if (!el.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? "✅" : (type === "event" ? "⚡" : "ℹ️");
    toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(msg)}</span>`;
    el.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }

  // --- Render Top HUD ---
  function renderHUD() {
    const career = getCurrentCareer();
    const solved = state.solvedIds.size;
    const total = 150;
    const pct = Math.round((solved / total) * 100);

    if (el.hudRankTitle) {
      el.hudRankTitle.textContent = career.title;
      el.hudRankTitle.className = `stat-val ${career.color}`;
    }
    if (el.hudSalary) el.hudSalary.textContent = career.salary;
    if (el.hudCapital) el.hudCapital.textContent = `$${state.bonusCapital.toLocaleString()}`;
    if (el.hudSolved) el.hudSolved.textContent = `${solved} / ${total}`;
    if (el.hudProgressFill) el.hudProgressFill.style.width = `${pct}%`;

    renderSectorBar();
  }

  // --- Render 10-Sector Navigation Bar ---
  function renderSectorBar() {
    if (!el.sectorNavList || !window.VIRTUAL_LINUX_W6) return;
    const sectors = window.VIRTUAL_LINUX_W6.SECTORS;
    el.sectorNavList.innerHTML = "";

    sectors.forEach(sec => {
      const pill = document.createElement("div");
      const isSecActive = (sec.id === state.activeSector);
      const secQuestions = allQuestions.filter(q => q.sectorId === sec.id);
      const solvedInSec = secQuestions.filter(q => state.solvedIds.has(q.id)).length;
      const isCompleted = (solvedInSec === secQuestions.length && secQuestions.length > 0);

      pill.className = `sector-pill ${isSecActive ? "active" : ""} ${isCompleted ? "completed" : ""}`;
      pill.innerHTML = `
        <span>${sec.icon}</span>
        <span>Sektor ${sec.id} (${sec.range})</span>
        <span class="sec-count">${solvedInSec}/${secQuestions.length}</span>
      `;

      pill.addEventListener("click", () => {
        SoundFX.playKey();
        state.activeSector = sec.id;
        const firstInSec = secQuestions[0];
        if (firstInSec) {
          state.currentQuestionId = firstInSec.id;
        }
        renderHUD();
        renderQuestionDossier();
        saveProgress();
      });

      el.sectorNavList.appendChild(pill);
    });
  }

  // --- Render Question Dots (15 per sector) ---
  function renderQuestionDots() {
    if (!el.floorQuestionStrip) return;
    el.floorQuestionStrip.innerHTML = "";
    const questionsInSector = allQuestions.filter(q => q.sectorId === state.activeSector);

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

  // --- Dynamic Smart Token Generator for Week 6 ---
  function renderSmartTokens(q) {
    if (!el.tokenToolbar) return;
    el.tokenToolbar.innerHTML = "";

    const tokens = [];

    // 1. Primary canonical token
    if (q.canonical) {
      tokens.push({ text: String(q.canonical), cls: "token-btn emerald" });
    }

    // 2. Sector-specific quick tools
    if (q.sectorId === 1) {
      ["Non-preemptive", "Starvation", "Preemptive", "Context switch overhead", "Ageing", "Internal fragmentation", "Compaction", "Swapping"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn" });
      });
    } else if (q.sectorId === 2) {
      ["16", "15", "20", "18", "1048576", "131072", "3", "13", "41", "111"].forEach(t => {
        if (t !== String(q.canonical)) tokens.push({ text: t, cls: "token-btn amber" });
      });
    } else if (q.sectorId === 3) {
      ["Page fault", "8.2 μs", "41", "2.5 x 10^-6", "Dirty bit", "Copy-on-write", "Writeback"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn violet" });
      });
    } else if (q.sectorId === 4) {
      ["FIFO", "15", "Belady's Anomaly", "OPT", "9", "LRU", "12", "Reference bit", "(0,0)"].forEach(t => {
        if (t !== String(q.canonical)) tokens.push({ text: t, cls: "token-btn" });
      });
    } else if (q.sectorId === 5) {
      ["Thrashing", "Temporal locality", "Spatial locality", "Delta", "PFF", "32 KiB", "Slab allocator", "Memory compression"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn" });
      });
    } else if (q.sectorId === 6) {
      ["curl -fsSL https://get.docker.com -o get-docker.sh", "sudo systemctl enable --now docker", "sudo usermod -aG docker \"$USER\"", "docker run hello-world", "docker version"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn" });
      });
    } else if (q.sectorId === 7) {
      ["FROM", "WORKDIR", "COPY", "RUN", "ENV", "EXPOSE", "ENTRYPOINT", "CMD", "docker build -t sample-app:1.0 .", "docker image ls"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn" });
      });
    } else if (q.sectorId === 8) {
      ["docker run -d --name app1 -p 127.0.0.1:5000:5000 -e APP_ENV=dev sample-app:1.0 Alex", "curl http://localhost:5000", "docker ps", "docker logs app1", "docker run -d --name app2 -p 127.0.0.1:5001:5000 -e APP_ENV=testing sample-app:1.0 Zahid", "curl http://localhost:5001"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn" });
      });
    } else if (q.sectorId === 9) {
      ["docker exec -it app1 sh", "docker top app1", "docker inspect app1", "docker stats --no-stream app1", "docker container ls -as", "docker stop app1 app2", "docker rm app1 app2"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn" });
      });
    } else if (q.sectorId === 10) {
      ["docker volume create pgdata", "docker run -d --name mypg -e POSTGRES_PASSWORD=LabOnly_12345 -v pgdata:/var/lib/postgresql/data postgres:15", "docker exec -it mypg psql -U postgres", "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\"", "docker compose up -d --build", "docker compose down"].forEach(t => {
        if (t !== q.canonical) tokens.push({ text: t, cls: "token-btn" });
      });
    }

    tokens.push({ text: "clear", cls: "token-btn" });

    // Deduplicate and limit to 8
    const seen = new Set();
    const finalTokens = [];
    tokens.forEach(t => {
      if (!seen.has(t.text)) {
        seen.add(t.text);
        finalTokens.push(t);
      }
    });

    finalTokens.slice(0, 8).forEach(t => {
      const btn = document.createElement("button");
      btn.className = t.cls || "token-btn";
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

  // --- Render Question Dossier with Command Anatomy (Master Feature) ---
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
    renderSmartTokens(q);

    const sec = window.VIRTUAL_LINUX_W6.SECTORS.find(s => s.id === q.sectorId);
    if (el.sectorSubTitle && sec) {
      el.sectorSubTitle.textContent = `${sec.name} (Sektor ${sec.id} • 15 ta bosqich)`;
    }
    if (el.floorHeaderTitle && sec) {
      el.floorHeaderTitle.textContent = `Sektor ${sec.id}: ${sec.name}`;
    }

    if (el.qNumberBadge) el.qNumberBadge.textContent = `Vazifa #${q.id} / 150`;
    if (el.qDifficultyBadge) el.qDifficultyBadge.textContent = q.difficulty;
    if (el.qSourceBadge) el.qSourceBadge.textContent = q.source;

    if (el.qTitle) el.qTitle.textContent = q.title;
    if (el.qStory) el.qStory.textContent = q.story;
    if (el.qTask) el.qTask.innerHTML = `<code>${escapeHtml(q.task)}</code>`;

    // Render Command & Flag Anatomy Card (Master Accordion)
    const cmdCardCode = document.getElementById("cmdCardCode");
    const cmdCardBody = document.getElementById("cmdCardBody");
    const btnToggleCmdCard = document.getElementById("btnToggleCmdCard");
    const cmdCardToggleHint = document.getElementById("cmdCardToggleHint");

    if (cmdCardBody && window.COMMAND_ANATOMY_W6) {
      const anatomy = q.flagAnatomy || q.anatomy;
      if (cmdCardCode) cmdCardCode.textContent = (anatomy && anatomy.syntaxExample) || String(q.canonical) || "";
      cmdCardBody.innerHTML = window.COMMAND_ANATOMY_W6.formatCommandCard(anatomy);
      cmdCardBody.style.display = "none";
      if (btnToggleCmdCard) btnToggleCmdCard.classList.remove("open");
      if (cmdCardToggleHint) cmdCardToggleHint.textContent = "Batafsil ko'rish";
    }

    if (el.qHintBox) {
      el.qHintBox.textContent = (q.flagAnatomy && q.flagAnatomy.whenToUse) || "Darslikdagi ko'rsatilgan standart buyruq yoki formulani kiriting.";
      el.qHintBox.classList.remove("show");
    }
    if (el.btnToggleHint) {
      el.btnToggleHint.textContent = "💡 Maslahatni Ko'rish";
    }

    if (state.arena) {
      state.arena.triggerPlayerAlert(`Vazifa #${q.id}: ${q.title}`);
    }
  }

  window.toggleCmdInfoCard = function() {
    SoundFX.playKey();
    const body = document.getElementById("cmdCardBody");
    const btn = document.getElementById("btnToggleCmdCard");
    const hint = document.getElementById("cmdCardToggleHint");
    if (!body) return;

    if (body.style.display === "none" || !body.style.display) {
      body.style.display = "flex";
      if (btn) btn.classList.add("open");
      if (hint) hint.textContent = "Yashirish";
    } else {
      body.style.display = "none";
      if (btn) btn.classList.remove("open");
      if (hint) hint.textContent = "Batafsil ko'rish";
    }
  };

  function prevQuestion() {
    SoundFX.playKey();
    if (state.currentQuestionId > 1) {
      state.currentQuestionId--;
      const q = allQuestions.find(item => item.id === state.currentQuestionId);
      if (q && q.sectorId !== state.activeSector) {
        state.activeSector = q.sectorId;
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
      if (q && q.sectorId !== state.activeSector) {
        state.activeSector = q.sectorId;
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
      const allFlags = (window.COMMAND_ANATOMY_W6 && window.COMMAND_ANATOMY_W6.MASTER_FLAG_DICTIONARY) || [];
      const query = (state.flagSearchQuery || "").toLowerCase();
      const filtered = allFlags.filter(item => {
        return item.cmd.toLowerCase().includes(query) ||
               item.flag.toLowerCase().includes(query) ||
               item.name.toLowerCase().includes(query) ||
               item.purpose.toLowerCase().includes(query);
      });

      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-amber-bright); font-weight:700; font-size:13px;">
          🏷️ Docker & Virtual Memory Qo'shimchalari Qomusi (Flag Anatomy Dictionary • Jami: ${allFlags.length})
        </div>
        <div class="flag-search-box">
          <input
            type="text"
            class="flag-search-input"
            id="flagDictSearch"
            placeholder="Bayroq yoki buyruqni qidiring... (masalan: docker build, -t, -d, -p, -v, --no-stream, compose up, down)"
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
              <span class="flag-name">${escapeHtml(f.name)}</span>
            </div>
            <div style="font-size:11.5px; color:#38bdf8; font-family:'JetBrains Mono', monospace; margin:2px 0;">
              Sintaksis: <code>${escapeHtml(f.syntax)}</code>
            </div>
            <div class="flag-purpose"><b>Vazifasi:</b> ${escapeHtml(f.purpose)}</div>
            <div class="flag-risk-box"><b>⚠️ Bu bayroqsiz nima bo'ladi:</b> ${escapeHtml(f.withoutRisk)}</div>
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

    } else if (tab === "containers") {
      // Live Docker Containers & Images
      const containers = state.liveShell.state.dockerContainers;
      const images = state.liveShell.state.dockerImages;

      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:700;">
          🐳 Docker Konteynerlari Holati (docker container ls -a)
        </div>
        <table class="sys-table" style="margin-bottom: 14px;">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nomi</th>
              <th>Image</th>
              <th>Holat</th>
              <th>Portlar</th>
            </tr>
          </thead>
          <tbody>
      `;
      containers.forEach(c => {
        html += `
          <tr>
            <td><code>${c.id}</code></td>
            <td style="color:#fff; font-weight:700;">${c.name}</td>
            <td style="color:#38bdf8;">${c.image}</td>
            <td><span class="${c.status.startsWith('Up') ? 'status-run' : 'status-stop'}">${c.status}</span></td>
            <td><code>${c.ports}</code></td>
          </tr>
        `;
      });
      html += `</tbody></table>`;

      html += `
        <div style="margin-bottom: 8px; color: var(--accent-emerald-bright); font-weight:700;">
          📦 Docker Obrazlari (docker images)
        </div>
        <table class="sys-table">
          <thead>
            <tr>
              <th>Repository</th>
              <th>Tag</th>
              <th>Image ID</th>
              <th>Hajmi</th>
            </tr>
          </thead>
          <tbody>
      `;
      images.forEach(img => {
        html += `
          <tr>
            <td style="color:#fff; font-weight:700;">${img.repository}</td>
            <td><code>${img.tag}</code></td>
            <td><code>${img.id}</code></td>
            <td style="color:#a78bfa;">${img.size}</td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "paging") {
      // Virtual Memory & Paging Calculations
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-violet-bright); font-weight:700;">
          🧠 Virtual Xotira & Paging Hisoblari (Seminar & Lecture Qoidalari)
        </div>
        <table class="sys-table" style="margin-bottom: 12px;">
          <tbody>
            <tr><td><b>64 sahifa (1024 so'z), 32 freym:</b></td><td><code>Logical: 16 bit (6+10), Physical: 15 bit (5+10)</code></td></tr>
            <tr><td><b>256 sahifa (4 KB), 64 freym:</b></td><td><code>Logical: 20 bit (8+12), Physical: 18 bit (6+12)</code></td></tr>
            <tr><td><b>32-bit Logical, 4 KB Sahifa:</b></td><td><code>Conventional Page Table: 2^20 = 1,048,576 yozuv</code></td></tr>
            <tr><td><b>512 MB RAM, 4 KB Freym:</b></td><td><code>Inverted Page Table: 2^17 = 131,072 yozuv</code></td></tr>
            <tr><td><b>Manzil 3,085 (1 KB Sahifa):</b></td><td><code style="color:#34d399;">Page 3, Offset 13 (3 * 1024 + 13)</code></td></tr>
            <tr><td><b>Manzil 42,095 (1 KB Sahifa):</b></td><td><code style="color:#38bdf8;">Page 41, Offset 111 (41 * 1024 + 111)</code></td></tr>
            <tr><td><b>EAT (p = 0.001, ma = 200ns, fault = 8ms):</b></td><td><code style="color:#fbbf24;">8,200 ns = 8.2 μs (41 barobar sekinlashuv!)</code></td></tr>
          </tbody>
        </table>
        <div class="code-view">
Demand Paging Qoidalari:
• Zero-fill-on-demand: Yangi anonim xotira nollar bilan tozalab beriladi.
• Copy-on-Write (COW): fork() da sahifalar bo'lishiladi; yozilgandagina xususiy nusxa olinadi.
• Clean sahifalar diskka yozilmasdan o'chiriladi; Dirty sahifalar writeback talab etadi.
        </div>
      `;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "replacement") {
      // Page Replacement Algorithms Comparison
      const mem = state.liveShell.state.virtualMemoryMetrics;
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-amber-bright); font-weight:700;">
          🔄 Sahifa Almashtirish Algoritmlari (3 ta Freym, Reference String)
        </div>
        <div class="code-view" style="margin-bottom: 10px;">
Reference String: ${mem.referenceString}
        </div>
        <table class="sys-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th>Algoritm</th>
              <th>G'oyasi</th>
              <th>Page Faults</th>
              <th>Belady Anomaliyasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="color:#fff; font-weight:700;">FIFO</td>
              <td>Eng birinchi kelgan sahifani almashtiradi</td>
              <td style="color:#f87171; font-weight:700;">${mem.fifoFaults} ta</td>
              <td style="color:#f87171;">Mavjud (Uchraydi)</td>
            </tr>
            <tr>
              <td style="color:#fff; font-weight:700;">Optimal (OPT)</td>
              <td>Kelajakda eng uzoq ishlatilmaydiganni tanlaydi</td>
              <td style="color:#34d399; font-weight:700;">${mem.optFaults} ta (Minimal)</td>
              <td style="color:#34d399;">Yo'q (Stack algoritmi)</td>
            </tr>
            <tr>
              <td style="color:#fff; font-weight:700;">LRU</td>
              <td>O'tmishda eng uzoq ishlatilmaganni tanlaydi</td>
              <td style="color:#38bdf8; font-weight:700;">${mem.lruFaults} ta</td>
              <td style="color:#34d399;">Yo'q (Stack algoritmi)</td>
            </tr>
            <tr>
              <td style="color:#fff; font-weight:700;">Clock (Second-Chance)</td>
              <td>Reference bit (0/1) aylanma strelka tekshiruvi</td>
              <td style="color:#a78bfa; font-weight:700;">≈ LRU darajasida</td>
              <td style="color:#34d399;">Yo'q</td>
            </tr>
          </tbody>
        </table>
        <div class="code-view">
Thrashing & Working-Set Modeli:
• Thrashing: Jarayon kod bajarishdan ko'ra swap bilan band bo'lib CPU tushib ketishi.
• Agar jami talab D = Σ WSS_i > m bo'lsa, OS bitta jarayonni to'xtatishi (suspend) shart.
        </div>
      `;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "compose") {
      // Volumes & Docker Compose Orchestration
      const volumes = state.liveShell.state.dockerVolumes;
      const services = state.liveShell.state.composeServices;
      const students = state.liveShell.state.postgresDb.students;

      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-emerald-bright); font-weight:700;">
          💾 Doimiy Saqlash Hajmlari (docker volume ls)
        </div>
        <table class="sys-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th>Hajm Nomi</th>
              <th>Drayver</th>
              <th>Xost Yo'li</th>
              <th>Hajmi</th>
            </tr>
          </thead>
          <tbody>
      `;
      volumes.forEach(v => {
        html += `
          <tr>
            <td style="color:#fff; font-weight:700;">${v.name}</td>
            <td><code>${v.driver}</code></td>
            <td><code>${v.mountpoint}</code></td>
            <td style="color:#34d399;">${v.size}</td>
          </tr>
        `;
      });
      html += `</tbody></table>`;

      html += `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:700;">
          📦 Docker Compose Servislari (docker compose ps)
        </div>
        <table class="sys-table" style="margin-bottom: 12px;">
          <thead>
            <tr>
              <th>Servis</th>
              <th>Konteyner</th>
              <th>Holat</th>
              <th>Portlar</th>
            </tr>
          </thead>
          <tbody>
      `;
      services.forEach(s => {
        html += `
          <tr>
            <td style="color:#fff; font-weight:700;">${s.service}</td>
            <td><code>${s.container}</code></td>
            <td><span class="status-run">${s.status}</span></td>
            <td><code>${s.ports}</code></td>
          </tr>
        `;
      });
      html += `</tbody></table>`;

      html += `
        <div style="margin-bottom: 8px; color: var(--accent-amber-bright); font-weight:700;">
          🐘 PostgreSQL Persistensiya Natijasi (SELECT * FROM students)
        </div>
        <div class="code-view">
 id | name  
----+-------
${students.map(st => `  ${st.id} | ${st.name}`).join("\n")}
(1 row)
*pgdata hajmi konteyner o'chirilganda ham omon qoladi!
        </div>
      `;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "result") {
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:700;">
          🎯 Oxirgi Buyruq Natijasi & Terminal Logi
        </div>
        <div class="code-view">${escapeHtml(state.lastOutput || "Hali buyruq bajarilmadi.")}</div>
      `;
      el.schemaTableDisplay.innerHTML = html;
    }
  }

  window.switchInspectorTab = function(tabName) {
    state.activeFsTab = tabName;
    renderInspectorView();
  };

  function appendTerminalLine(rawHtml) {
    if (!el.termScreen) return;
    const line = document.createElement("div");
    line.className = "term-line";
    line.innerHTML = rawHtml;
    el.termScreen.appendChild(line);
    el.termScreen.scrollTop = el.termScreen.scrollHeight;
  }

  // --- Terminal Command Handler ---
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
        <span class="term-user">student</span><span class="term-host">@wiut-srv06</span>:<span class="term-path">~/week6-docker</span><span class="term-symbol">$</span>
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
      const grader = window.VIRTUAL_LINUX_W6.BASH_GRADER;
      const isCorrect = grader.evaluate(currentQ, raw, res);

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

          checkMilestones(state.solvedIds.size);
        } else {
          SoundFX.playSuccess();
          showToast(`To'g'ri javob takrorlandi!`, "success");
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
      "docker build -t sample-app:1.0 .",
      "docker run -d --name app1 -p 127.0.0.1:5000:5000 -e APP_ENV=dev sample-app:1.0 Alex",
      "docker run -d --name app2 -p 127.0.0.1:5001:5000 -e APP_ENV=testing sample-app:1.0 Zahid",
      "docker run -d --name mypg -e POSTGRES_PASSWORD=LabOnly_12345 -v pgdata:/var/lib/postgresql/data postgres:15",
      "docker exec -it mypg psql -U postgres",
      "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\"",
      "docker compose config", "docker compose up -d --build", "docker compose ps", "docker compose down",
      "docker stats --no-stream app1", "docker top app1", "docker inspect app1", "docker container ls -as",
      "docker stop app1 app2", "docker rm app1 app2", "docker volume create pgdata", "docker volume ls",
      "curl http://localhost:5000", "curl http://localhost:5001", "curl http://localhost:5002",
      "Non-preemptive", "Starvation", "Preemptive", "Context switch overhead", "Ageing",
      "Internal fragmentation", "External fragmentation", "Compaction", "Swapping", "clear"
    ];

    const match = tokens.find(t => t.startsWith(currentVal) && t !== currentVal);
    if (match) {
      el.termInput.value = match;
      SoundFX.playKey();
    }
  }

  function checkMilestones(count) {
    if (count === 150) {
      triggerCertModal();
    } else if (count % 30 === 0) {
      const events = window.VIRTUAL_LINUX_W6.EMERGENCY_EVENTS;
      const idx = Math.floor(count / 30) - 1;
      if (events[idx]) {
        triggerIncidentModal(events[idx]);
      }
    }
  }

  function triggerIncidentModal(eventData) {
    if (!el.eventModal || !el.eventModalBody) return;
    SoundFX.playTone(550, "sine", 0.3, 0.2);

    let html = `
      <div style="font-size:16px; font-weight:800; color:#fbbf24; margin-bottom:8px;">
        ${escapeHtml(eventData.title)}
      </div>
      <div style="background:rgba(0,0,0,0.3); border-left:3px solid #f59e0b; padding:10px; margin-bottom:12px; color:#cbd5e1;">
        <b>Xabar beruvchi (${escapeHtml(eventData.speaker)}):</b><br/>
        ${escapeHtml(eventData.desc)}
      </div>
      <div style="background:rgba(16,185,129,0.12); border:1px solid rgba(16,185,129,0.3); border-radius:6px; padding:10px; color:#34d399; font-size:12.5px;">
        <b>🎯 Yechim & Tavsiya:</b><br/>
        ${escapeHtml(eventData.solution)}
      </div>
      <div style="margin-top:16px; text-align:right;">
        <button class="btn btn-event" onclick="document.getElementById('eventModal').classList.remove('show');">Tushundim, davom etamiz ↵</button>
      </div>
    `;
    el.eventModalBody.innerHTML = html;
    el.eventModal.classList.add("show");
  }

  function triggerCertModal() {
    if (!el.certModal || !el.certModalBody) return;
    SoundFX.playPromotion();

    let html = `
      <div style="text-align:center; padding:16px 0;">
        <div style="font-size:48px; margin-bottom:8px;">🏆</div>
        <h2 style="color:#fbbf24; font-size:20px; font-weight:800;">TABRIKLAYMIZ! SIZ BARCHA 150 TA TOPSHIRIQNI YAKUNLADINGIZ!</h2>
        <p style="color:#cbd5e1; margin:10px 0;">
          Siz WIUT Operating Systems (5COSC041C) Week 6 — Virtual Memory, Demand Paging, Dockerfile va Compose bo'yicha to'liq amaliy sertifikatga ega bo'ldingiz!
        </p>
        <div style="background:#060d1a; border:1px solid #8b5cf6; border-radius:8px; padding:14px; margin:14px auto; max-width:440px;">
          <div style="color:var(--text-muted); font-size:11px;">BERILGAN MAQOM:</div>
          <div style="color:#a78bfa; font-size:16px; font-weight:800;">Principal Cloud & Kernel Architect</div>
          <div style="color:#34d399; font-size:14px; font-weight:700; margin-top:4px;">Kafolatlangan Oylik: $20,000/oy</div>
        </div>
        <button class="btn" style="margin-top:10px;" onclick="document.getElementById('certModal').classList.remove('show');">Yopish</button>
      </div>
    `;
    el.certModalBody.innerHTML = html;
    el.certModal.classList.add("show");
  }

  function renderMapModal() {
    if (!el.mapModalBody) return;
    const sectors = window.VIRTUAL_LINUX_W6.SECTORS;
    let html = `<div style="display:flex; flex-direction:column; gap:14px;">`;

    sectors.forEach(sec => {
      const secQs = allQuestions.filter(q => q.sectorId === sec.id);
      const solvedCount = secQs.filter(q => state.solvedIds.has(q.id)).length;

      html += `
        <div style="background:#081120; border:1px solid rgba(0,145,230,0.25); border-radius:6px; padding:10px 12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <div style="font-weight:700; color:#fff; font-size:12.5px;">
              ${sec.icon} Sektor ${sec.id}: ${sec.name}
            </div>
            <div style="font-size:11px; font-weight:700; color:#38bdf8;">
              ${solvedCount} / ${secQs.length} bajarildi
            </div>
          </div>
          <div style="display:flex; gap:4px; flex-wrap:wrap;">
      `;

      secQs.forEach(q => {
        const isSolved = state.solvedIds.has(q.id);
        const isActive = (state.currentQuestionId === q.id);
        html += `
          <div
            class="q-dot ${isActive ? 'active' : ''} ${isSolved ? 'solved' : ''}"
            style="width:24px; height:24px; font-size:10px;"
            title="#${q.id}: ${q.title}"
            onclick="window.jumpToQuestion(${q.id})"
          >
            ${isSolved ? '✓' : q.id}
          </div>
        `;
      });

      html += `</div></div>`;
    });

    html += `</div>`;
    el.mapModalBody.innerHTML = html;
    el.mapModal.classList.add("show");
  }

  window.jumpToQuestion = function(id) {
    state.currentQuestionId = id;
    const q = allQuestions.find(item => item.id === id);
    if (q) state.activeSector = q.sectorId;
    if (el.mapModal) el.mapModal.classList.remove("show");
    renderHUD();
    renderQuestionDossier();
    saveProgress();
  };

  
  // ============================================================================
  // KALI LINUX TERMINAL ENGINE & WORKBENCH HELPERS (2 MODES & FULLSCREEN)
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
      if (el.btnFsToggleMode) el.btnFsToggleMode.textContent = "💻 Rejim: Erkin CLI";
      printKaliInfo("┌──[ 💻 ERKIN SANDBOX REJIMI FAOL ]──────────────────────────────────\n│ Istalgan Linux buyrug'ini erkin sinab ko'rishingiz mumkin\n│ Savollarga qaytish uchun 'quest' deb yozing yoki [🎯 Topshiriqlar] tugmasini bosing.\n└──────────────────────────────────────────────────────────────────");
    } else {
      if (el.btnModeQuest) el.btnModeQuest.classList.add("active");
      if (el.btnModeSandbox) el.btnModeSandbox.classList.remove("active");
      if (el.btnFsToggleMode) el.btnFsToggleMode.textContent = "🎯 Rejim: Topshiriqlar";
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
<span style="color:#f8fafc">Welcome to Kali in UserLAnd! (Week 6: Virtual Memory, Demand Paging, Volumes & Docker Compose)</span>\n`;
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
        if (q && window.VIRTUAL_LINUX_W6) {
          const expShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();
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

    if (tokens.length <= 1) {
      const match = ["docker build -t ","docker run -d ","docker ps","docker exec -it ","docker stats --no-stream","docker volume create ","docker compose up -d","docker compose ps","curl http://localhost:5000","echo $?"].find(k => k.startsWith(val.trim()));
      if (match) {
        el.kaliHiddenInput.value = match + " ";
        if (el.kaliTypedText) el.kaliTypedText.textContent = el.kaliHiddenInput.value;
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
      if (q && window.VIRTUAL_LINUX_W6) {
        const expShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();
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

    const expectedCmd = currentQ.canonical || currentQ.expectedBash || currentQ.expectedSql || "";
    const grade = (function() {
      const g = window.VIRTUAL_LINUX_W6.BASH_GRADER.evaluate(currentQ, rawCmd, res);
      return { match: !!g, message: g ? "Topshiriq to'g'ri bajarildi!" : "Kutilgan natija yoki buyruq mos kelmadi." };
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
      updateHUD();
      renderSectorBar();
      renderQuestionStrip();

      if (el.ktFsProgress) el.ktFsProgress.textContent = `${state.solvedIds.size} / 150`;

      const succDiv = document.createElement("div");
      succDiv.className = "kali-grade-success";
      succDiv.innerHTML = `✓ TO'G'RI! ${escapeHtml(grade.message)}<br><span style="color:#a7f3d0; font-size:12px;">+$100 Bonus hisobingizga qo'shildi! Keyingi topshiriq uchun <b>'next'</b> deb yozing yoki [Keyingi ▶] tugmasini bosing.</span>`;
      el.kaliStream.appendChild(succDiv);

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


  function bindEvents() {
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

    if (el.btnExecCmd) el.btnExecCmd.addEventListener("click", handleCommandSubmit);

    if (el.termInput) {
      el.termInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleCommandSubmit();
        } else if (e.key === "Tab") {
          e.preventDefault();
          handleTabCompletion();
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
        }
      });
    }

    if (el.schemaTabs) {
      el.schemaTabs.forEach(tabBtn => {
        tabBtn.addEventListener("click", () => {
          SoundFX.playKey();
          state.activeFsTab = tabBtn.getAttribute("data-tab");
          renderInspectorView();
        });
      });
    }

    if (el.btnOpenMap) {
      el.btnOpenMap.addEventListener("click", () => {
        SoundFX.playKey();
        renderMapModal();
      });
    }

    if (el.btnTriggerEvent) {
      el.btnTriggerEvent.addEventListener("click", () => {
        SoundFX.playKey();
        const events = window.VIRTUAL_LINUX_W6.EMERGENCY_EVENTS;
        const ev = events[state.activeIncidentIndex % events.length];
        state.activeIncidentIndex++;
        triggerIncidentModal(ev);
      });
    }

    if (el.btnQuickEvent) {
      el.btnQuickEvent.addEventListener("click", () => {
        SoundFX.playKey();
        const quotes = [
          "Belady anomaliyasi faqat FIFO kabi nostack algoritmlarda uchraydi; LRU va OPT undan xolidir!",
          "Demand pagingda EAT = (1 - p)*200ns + p*8,000,000ns. p = 0.001 da kechikish 41 barobar oshadi!",
          "Docker konteynerini fon rejimida ishga tushirish uchun '-d' bayrog'i berilishi shart!",
          "PostgreSQL ma'lumotlari yo'qolmasligi uchun doimo '-v pgdata:/var/lib/postgresql/data' bog'lang!",
          "Multi-stage build yordamida Maven/Java dasturining yakuniy hajmini 80% ga qisqartirish mumkin!"
        ];
        const pick = quotes[Math.floor(Math.random() * quotes.length)];
        if (el.tickerMessage) el.tickerMessage.textContent = pick;
        if (state.arena) state.arena.triggerTuringQuote(pick);
      });
    }

    if (el.btnResetProgress) {
      el.btnResetProgress.addEventListener("click", () => {
        if (confirm("Rostdan ham barcha natijalarni tozalab, o'yinni boshidan boshlamoqchimisiz?")) {
          localStorage.removeItem(STORAGE_KEY);
          state.solvedIds.clear();
          state.bonusCapital = 0;
          state.currentQuestionId = 1;
          state.activeSector = 1;
          renderHUD();
          renderQuestionDossier();
          renderInspectorView();
          showToast("Natijalar muvaffaqiyatli tozalandi!", "event");
        }
      });
    }

    if (el.btnToggleSound) {
      el.btnToggleSound.addEventListener("click", () => {
        SoundFX.muted = !SoundFX.muted;
        el.btnToggleSound.textContent = SoundFX.muted ? "🔇" : "🔊";
      });
    }

    // Modal close listeners
    document.querySelectorAll(".modal-close").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("show"));
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        e.target.classList.remove("show");
      }
    });
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // --- Game Initialization ---
  function initGame() {
    initElements();
    loadProgress();

    state.liveShell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();
    state.arena = new window.CyberVirtualMemoryArena2D("gameCanvas");

    bindEvents();
    initKaliTerminal();
    renderHUD();
    renderQuestionDossier();
    renderInspectorView();

    appendTerminalLine(`
      <div style="color:var(--accent-cyan-bright); font-weight:700; margin-bottom:4px;">
        🐧 WIUT OS Week 6 — Virtual Memory, Demand Paging & Docker Containers Emulator faollashtirildi.
      </div>
      <div style="color:var(--text-muted); margin-bottom:6px;">
        Boshlash uchun yuqoridagi topshiriqni o'qing yoki tezkor tokenlarni bosing. Maslahat: <code>💬 Maslahat</code> tugmasi.
      </div>
    `);
  }

  window.addEventListener("DOMContentLoaded", initGame);

})();
