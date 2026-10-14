// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 GAME CONTROLLER
// Interactive Bash Terminal, Process Table, Background Jobs, Strict Mode Scripts,
// 150 Question Pipeline, Audio Synthesizer, Modals, 10 Sectors & Career Engine.
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
    playJobLaunch() {
      this.playTone(440, "sine", 0.12, 0.1);
      setTimeout(() => this.playTone(660, "sine", 0.18, 0.12), 120);
    },
    playSignalKill() {
      this.playTone(320, "sawtooth", 0.15, 0.15);
      setTimeout(() => this.playTone(220, "sawtooth", 0.2, 0.18), 120);
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

  // --- Assemble All 150 Questions for Week 3 ---
  const allQuestions = [
    ...(window.QUESTIONS_1_50_W3 || []),
    ...(window.QUESTIONS_51_100_W3 || []),
    ...(window.QUESTIONS_101_150_W3 || [])
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
    terminalMode: "quest",
    terminalFullscreen: false,
    layoutMode: "split",
    activeFsTab: "processes",
    lastOutput: "",
    liveShell: null,
    arena: null,
    activeIncidentIndex: 0
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
        if (typeof data.bonusCapital === "number") {
          state.bonusCapital = data.bonusCapital;
        }
        if (typeof data.currentQuestionId === "number") {
          state.currentQuestionId = data.currentQuestionId;
          const q = allQuestions.find(item => item.id === state.currentQuestionId);
          if (q) state.activeSector = q.sector;
        }
      }
    } catch (e) {
      console.warn("Could not load progress", e);
    }
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

  // Determine current career level and salary
  function getCurrentCareer() {
    const solved = state.solvedIds.size;
    const ranks = window.VIRTUAL_LINUX_W3.careerRanks;
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

  // Toast Notification
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

  // Update HUD
  function renderHUD() {
    const career = getCurrentCareer();
    if (el.hudRankTitle) el.hudRankTitle.textContent = career.title;
    if (el.hudSalary) el.hudSalary.textContent = career.salary;
    if (el.hudCapital) el.hudCapital.textContent = `$${state.bonusCapital.toLocaleString()}`;

    const totalSolved = state.solvedIds.size;
    if (el.hudSolved) el.hudSolved.textContent = `${totalSolved} / 150`;
    const percent = Math.min(100, Math.round((totalSolved / 150) * 100));
    if (el.hudProgressFill) el.hudProgressFill.style.width = `${percent}%`;

    // Render Sector Pills
    renderSectorBar();
  }

  // Render 10-Sector Bar
  function renderSectorBar() {
    if (!el.sectorNavList) return;
    const sectors = window.VIRTUAL_LINUX_W3.sectors;
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

  // Select Sector
  function selectSector(sectorId) {
    state.activeSector = sectorId;
    const sectorData = window.VIRTUAL_LINUX_W3.sectors.find(s => s.id === sectorId);
    if (el.floorHeaderTitle && sectorData) {
      el.floorHeaderTitle.textContent = `Sektor ${sectorData.id}: ${sectorData.name} — ${sectorData.theme}`;
    }

    // Set current question to first unsolved question in sector or first question of sector
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

  // Render 15 Question Dots for current sector
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

  // Render Question Dossier
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

    const sec = window.VIRTUAL_LINUX_W3.sectors.find(s => s.id === q.sector);
    if (el.sectorSubTitle && sec) {
      el.sectorSubTitle.textContent = `${sec.name} (Sektor ${sec.id} • 15 ta bosqich)`;
    }

    if (el.qNumberBadge) el.qNumberBadge.textContent = `Vazifa #${q.id} / 150`;
    if (el.qDifficultyBadge) el.qDifficultyBadge.textContent = q.difficulty;
    if (el.qSourceBadge) el.qSourceBadge.textContent = q.source;

    if (el.qTitle) el.qTitle.textContent = q.title;
    if (el.qStory) el.qStory.textContent = q.story;
    if (el.qTask) el.qTask.innerHTML = q.taskUz;

    // Render Command & Flag Anatomy Card (Master User Feature)
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

    // Reset Hint
    if (el.qHintBox) {
      el.qHintBox.textContent = q.hint || "Terminalda darslikdagi ko'rsatilgan buyruqni bering.";
      el.qHintBox.classList.remove("show");
    }
    if (el.btnToggleHint) {
      el.btnToggleHint.textContent = "💡 Maslahatni Ko'rish";
    }

    // Update 2D Canvas player dialogue prompt
    if (state.arena) {
      state.arena.triggerPlayerAlert(`Vazifa #${q.id}: ${q.title}`);
    }
  }

  // Navigate Questions
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

    // Update active tab buttons
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

    if (tab === "processes") {
      // Process Table
      const procs = state.liveShell.processes;
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:600;">
          🖥️ Faol Protsesslar Jadvali (Linux Process Table • Total: ${procs.length})
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
        let statClass = "status-run";
        if (p.stat.startsWith("T")) statClass = "status-stop";
        if (p.stat.startsWith("Z")) statClass = "status-zombie";

        html += `
          <tr>
            <td>${p.user}</td>
            <td style="font-weight:700; color:#38bdf8;">${p.pid}</td>
            <td style="color:#a78bfa;">${p.ppid}</td>
            <td>${p.cpu}%</td>
            <td>${p.mem}%</td>
            <td><span class="${statClass}">${p.stat}</span></td>
            <td><code>${p.cmd}</code></td>
          </tr>
        `;
      });
      html += `</tbody></table>`;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "jobs") {
      // Active Jobs Table
      const jobs = state.liveShell.jobs;
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-amber-bright); font-weight:600;">
          ⏳ Fon Rejimidagi Ishlar (Job Control • & • Total: ${jobs.length})
        </div>
      `;
      if (jobs.length === 0) {
        html += `<div style="color:var(--text-muted); padding:10px;">Hozircha hech qanday fon ishi mavjud emas. Masalan: <code>sleep 300 &</code></div>`;
      } else {
        html += `
          <table class="sys-table">
            <thead>
              <tr>
                <th>Job ID</th>
                <th>PID</th>
                <th>Status</th>
                <th>Command</th>
                <th>Boshqaruv</th>
              </tr>
            </thead>
            <tbody>
        `;
        jobs.forEach((j, idx) => {
          const isCurrent = idx === jobs.length - 1 ? "+" : "-";
          html += `
            <tr>
              <td style="font-weight:700; color:var(--accent-amber-bright);">[${j.id}]${isCurrent}</td>
              <td style="color:#38bdf8;">${j.pid}</td>
              <td><span class="status-run">${j.state}</span></td>
              <td><code>${j.name} &</code></td>
              <td>
                <button class="token-btn" onclick="window.injectTerminalCmd('fg %${j.id}')">fg %${j.id}</button>
                <button class="token-btn amber" onclick="window.injectTerminalCmd('kill %${j.id}')">kill %${j.id}</button>
              </td>
            </tr>
          `;
        });
        html += `</tbody></table>`;
      }
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "scripts") {
      // Script Files Explorer
      const labDir = state.liveShell.getNode("/home/student/os_lab_process_bash");
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-emerald-bright); font-weight:600;">
          📜 Bash Skriptlar & Fayllar (~/os_lab_process_bash)
        </div>
        <table class="sys-table">
          <thead>
            <tr>
              <th>Ruxsatlar</th>
              <th>Egasi</th>
              <th>Hajmi</th>
              <th>Fayl Nomi</th>
              <th>Amal</th>
            </tr>
          </thead>
          <tbody>
      `;
      if (labDir && labDir.children) {
        Object.keys(labDir.children).sort().forEach(name => {
          const node = labDir.children[name];
          const isScript = name.endsWith(".sh");
          html += `
            <tr>
              <td><code>${node.permissions}</code></td>
              <td>${node.owner}:${node.group}</td>
              <td>${node.size}B</td>
              <td style="font-weight:${isScript ? "700" : "400"}; color:${isScript ? "#34d399" : "#cbd5e1"};">${name}</td>
              <td>
                ${isScript ? `<button class="token-btn emerald" onclick="window.viewScriptContent('${name}')">Ko'rish (cat)</button>` : ""}
              </td>
            </tr>
          `;
        });
      }
      html += `</tbody></table>`;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "report") {
      // System Diagnostics & Process Report Preview
      const reportRes = state.liveShell.execute("./process_report.sh");
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-violet-bright); font-weight:600;">
          📋 Tizim Diagnostikasi & Protsesslar Hisoboti (process_report.sh natijasi)
        </div>
        <div class="code-view">${escapeHtml(reportRes.stdout || "Hisobot hali shakllanmagan.")}</div>
      `;
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "terminal") {
      // Bash Command History Log
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:600;">
          🖥️ Bash Buyruqlar Tarixi (Command Log • Total: ${state.commandHistory.length})
        </div>
      `;
      if (state.commandHistory.length === 0) {
        html += `<div style="color:var(--text-muted); padding:10px;">Hali hech qanday buyruq kiritilmadi.</div>`;
      } else {
        html += `<ol style="padding-left: 20px; line-height: 1.8;">`;
        state.commandHistory.forEach((c, i) => {
          html += `<li><code>${escapeHtml(c)}</code></li>`;
        });
        html += `</ol>`;
      }
      el.schemaTableDisplay.innerHTML = html;

    } else if (tab === "result") {
      // Last Command Output & Verdict
      let html = `
        <div style="margin-bottom: 8px; color: var(--accent-cyan-bright); font-weight:600;">
          🎯 Oxirgi Buyruq Natijasi & Kod
        </div>
        <div class="code-view">${escapeHtml(state.lastOutput || "Hech qanday buyruq bajarilmadi.")}</div>
      `;
      el.schemaTableDisplay.innerHTML = html;
    }
  }

  // Global helper for injecting terminal command from table buttons
  window.injectTerminalCmd = function(cmd) {
    if (el.termInput) {
      el.termInput.value = cmd;
      el.termInput.focus();
    }
  };

  // Global helper to view script source in terminal/inspector
  window.viewScriptContent = function(name) {
    const file = state.liveShell.getNode(`/home/student/os_lab_process_bash/${name}`);
    if (file && file.content) {
      state.activeFsTab = "result";
      state.lastOutput = `--- ${name} ---\n` + file.content;
      renderInspectorView();
    }
  };

  // --- Terminal Execution Engine ---
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

    // Clear input
    el.termInput.value = "";

    // Save to history
    state.commandHistory.push(raw);
    state.historyIndex = state.commandHistory.length;

    // Echo command line
    const promptLine = `
      <span class="term-prompt-line">
        <span class="term-user">student</span><span class="term-host">@debian-server</span>:<span class="term-path">~/os_lab_process_bash</span><span class="term-symbol">$</span>
        <span style="color:#fff; font-weight:600;"> ${escapeHtml(raw)}</span>
      </span>
    `;
    appendTerminalLine(promptLine);

    // Built-in 'clear'
    if (raw === "clear") {
      if (el.termScreen) el.termScreen.innerHTML = "";
      return;
    }

    // Execute in VirtualLinuxShell
    const res = state.liveShell.execute(raw);
    state.lastOutput = res.stdout + (res.stderr ? "\n" + res.stderr : "");

    // Audio cue for jobs / kill
    if (raw.endsWith("&")) {
      SoundFX.playJobLaunch();
    } else if (raw.startsWith("kill") || raw.startsWith("pkill") || raw.startsWith("killall")) {
      SoundFX.playSignalKill();
    }

    // Print stdout
    if (res.stdout) {
      appendTerminalLine(`<div class="term-stdout">${escapeHtml(res.stdout)}</div>`);
    }

    // Print stderr
    if (res.stderr) {
      appendTerminalLine(`<div class="term-stderr">${escapeHtml(res.stderr)}</div>`);
    }

    // Evaluate against current question
    const currentQ = allQuestions.find(item => item.id === state.currentQuestionId);
    if (currentQ) {
      const grade = window.VIRTUAL_LINUX_W3.BASH_GRADER.evaluate(currentQ, raw, res);
      const isCorrect = grade && (grade.match === true || grade === true);

      if (isCorrect) {
        const wasAlreadySolved = state.solvedIds.has(currentQ.id);
        state.solvedIds.add(currentQ.id);

        if (!wasAlreadySolved) {
          state.bonusCapital += 200;
          SoundFX.playSuccess();
          showToast(`Ajoyib! Vazifa #${currentQ.id} muvaffaqiyatli bajarildi! (+$200)`, "success");

          // Check for promotion milestone
          const oldRank = getCurrentCareer();
          saveProgress();
          const newRank = getCurrentCareer();
          if (oldRank.title !== newRank.title) {
            SoundFX.playPromotion();
            showToast(`TABRIKLAYMIZ! Yangi lavozim: ${newRank.title} (${newRank.salary})!`, "event");
          }

          // Check if office incident should trigger
          checkMilestoneIncident(state.solvedIds.size);
        } else {
          SoundFX.playSuccess();
          showToast(`To'g'ri buyruq takrorlandi!`, "success");
        }

        // Print success message
        appendTerminalLine(`
          <div class="term-success-msg">
            ✨ TO'G'RI! [Vazifa #${currentQ.id}] topshirig'i muvaffaqiyatli yakunlandi! Keyingi bosqichga o'tishingiz mumkin.
          </div>
        `);

        // Automatically prompt next question if available
        if (state.currentQuestionId < 150 && !wasAlreadySolved) {
          setTimeout(() => {
            nextQuestion();
          }, 800);
        }

      } else {
        // If question not met, play error tone if command had non-zero exit or was wrong
        if (res.code !== 0) {
          SoundFX.playError();
        }
      }
    }

    // Update HUD & Inspector
    renderHUD();
    renderInspectorView();
    saveProgress();
  }

  // Tab Completion
  function handleTabCompletion() {
    if (!el.termInput) return;
    const currentVal = el.termInput.value;
    const tokens = [
      "ps aux", "ps aux --sort=-%mem", "ps -u student", "ps -ef", "top", "pstree -p", "pgrep -a bash", "pgrep bash",
      "sleep 300 &", "jobs -l", "jobs", "fg %1", "bg %1", "kill %1", "pkill -f sleep", "killall sleep",
      "chmod +x", "./hello.sh", "./variables.sh", "./greet.sh Alice", "./age.sh", "./classify.sh", "./filecheck.sh",
      "./service_menu.sh", "./loops.sh", "./read_ips.sh", "./arrays.sh", "./process_report.sh",
      "set -euo pipefail", "echo $?", "echo $#", 'echo "$@"', 'echo "${1:-}"', "date +%Y", "declare -A", "clear", "ls -l", "cat"
    ];

    const match = tokens.find(t => t.startsWith(currentVal) && t !== currentVal);
    if (match) {
      el.termInput.value = match;
      SoundFX.playKey();
    }
  }

  // --- Office Incident Scenarios ---
  function checkMilestoneIncident(solvedCount) {
    const events = window.VIRTUAL_LINUX_W3.officeEvents;
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

    // Attach choice handlers
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

  // --- Question Map Modal ---
  function renderQuestionMapModal() {
    if (!el.mapModalBody) return;
    const sectors = window.VIRTUAL_LINUX_W3.sectors;
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

    // Attach click events to dots in map
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

  // --- Certificate Modal ---
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
        <div class="cert-sub">Linux Protsesslar, Signallar & Qat'iy Bash Skriptlar Bo'yicha Mutaxassislik Sertifikati</div>
        <div style="font-size:13px; color:var(--text-muted);">Ushbu sertifikat tasdiqlaydi:</div>
        <div class="cert-name">Ravshanbek</div>
        <div style="font-size:13.5px; color:#cbd5e1; max-width:600px; margin:0 auto;">
          Barcha 150 ta qat'iy rejimli Bash laboratoriya topshiriqlarini to'liq bajardi,
          fon rejimidagi jarayonlar boshqaruvi, signallar va ierarxik daraxt auditini mukammal o'zlashtirdi.
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

  // Modal Helpers
  function openModal(modalEl) {
    if (modalEl) modalEl.classList.add("open");
  }

  function closeModal(modalEl) {
    if (modalEl) modalEl.classList.remove("open");
  }

  // HTML Escape Helper
  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // --- Initialize Everything on Window Load ---
  
  // ============================================================================
  // AUTHENTIC KALI LINUX TERMINAL ENGINE (1:1 with UserLAnd, 2 Modes & Fullscreen)
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
<span style="color:#f8fafc">Welcome to Kali in UserLAnd! (Week 3: Processes, Signals, Jobs & Bash Automations)</span>\n`;
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
        if (q && window.VIRTUAL_LINUX_W3) {
          const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
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
    const tokens = ["ps aux","top","jobs -l","kill -9","kill -15","pkill","killall","bg","fg","&","nice -n 10","renice -n 5","./hello.sh","./process_report.sh","echo $?"];
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
      if (q && window.VIRTUAL_LINUX_W3) {
        const expShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();
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
      const g = window.VIRTUAL_LINUX_W3.BASH_GRADER.evaluate(currentQ, rawCmd, res);
      return { match: !!(g && (g.match === true || g === true)), message: (g && g.message) || (g ? "Topshiriq to'g'ri bajarildi!" : "Kutilgan natija yoki sintaksis mos kelmadi.") };
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

    // Instantiate Virtual Linux Shell
    state.liveShell = new window.VIRTUAL_LINUX_W3.VirtualLinuxShell();

    // Instantiate 2D Canvas Arena
    state.arena = new window.CyberProcessNocArena2D("gameCanvas");
    state.arena.setTabCallback((tabName) => {
      state.activeFsTab = tabName;
      renderInspectorView();
    });

    loadProgress();
    initKaliTerminal();
    toggleTerminalFullscreen(false);

    // Bind Token Toolbar Buttons
    const tokens = [
      { text: "ps aux", cls: "token-btn" },
      { text: "ps aux --sort=-%mem", cls: "token-btn" },
      { text: "top", cls: "token-btn" },
      { text: "pstree -p", cls: "token-btn" },
      { text: "pgrep -a bash", cls: "token-btn" },
      { text: "sleep 300 &", cls: "token-btn amber" },
      { text: "jobs -l", cls: "token-btn amber" },
      { text: "fg %1", cls: "token-btn amber" },
      { text: "bg %1", cls: "token-btn amber" },
      { text: "kill %1", cls: "token-btn ruby" },
      { text: "pkill -f sleep", cls: "token-btn ruby" },
      { text: "chmod +x", cls: "token-btn emerald" },
      { text: "./hello.sh", cls: "token-btn emerald" },
      { text: "./greet.sh Alice", cls: "token-btn emerald" },
      { text: "./process_report.sh", cls: "token-btn violet" },
      { text: "set -euo pipefail", cls: "token-btn violet" },
      { text: "echo $?", cls: "token-btn" },
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

    // Bind Terminal Input Events
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

    // Bind Inspector Tab Buttons
    if (el.schemaTabs) {
      el.schemaTabs.forEach(btn => {
        btn.addEventListener("click", () => {
          SoundFX.playKey();
          state.activeFsTab = btn.getAttribute("data-tab");
          renderInspectorView();
        });
      });
    }

    // Prev / Next Question Buttons
    if (el.btnPrevQ) el.btnPrevQ.addEventListener("click", prevQuestion);
    if (el.btnNextQ) el.btnNextQ.addEventListener("click", nextQuestion);

    // Hint Toggle Button
    if (el.btnToggleHint) {
      el.btnToggleHint.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.qHintBox) {
          el.qHintBox.classList.toggle("show");
          el.btnToggleHint.textContent = el.qHintBox.classList.contains("show") ? "🙈 Maslahatni Yashirish" : "💡 Maslahatni Ko'rish";
        }
      });
    }

    // Office Event Trigger Button
    if (el.btnTriggerEvent) {
      el.btnTriggerEvent.addEventListener("click", () => {
        const events = window.VIRTUAL_LINUX_W3.officeEvents;
        const ev = events[state.activeIncidentIndex % events.length];
        state.activeIncidentIndex++;
        triggerIncidentModal(ev);
      });
    }

    // Quick Turing NPC Chat
    if (el.btnQuickEvent) {
      el.btnQuickEvent.addEventListener("click", () => {
        if (state.arena) {
          state.arena.turing.speech = state.arena.getRandomTuringQuote();
          state.arena.turing.speechTimer = 220;
          SoundFX.playTone(600, "sine", 0.15, 0.1);
        }
      });
    }

    // Map Button
    if (el.btnOpenMap) {
      el.btnOpenMap.addEventListener("click", () => {
        SoundFX.playKey();
        renderQuestionMapModal();
        openModal(el.mapModal);
      });
    }

    // Toggle Sound Button
    if (el.btnToggleSound) {
      el.btnToggleSound.addEventListener("click", () => {
        SoundFX.muted = !SoundFX.muted;
        el.btnToggleSound.textContent = SoundFX.muted ? "🔇" : "🔊";
      });
    }

    // Reset Progress Button
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

    // Modal Close Buttons
    document.querySelectorAll(".modal-close").forEach(closeBtn => {
      closeBtn.addEventListener("click", () => {
        const parentModal = closeBtn.closest(".modal-overlay");
        closeModal(parentModal);
      });
    });

    // Close on overlay click
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closeModal(overlay);
        }
      });
    });

    // Initial Renders
    renderHUD();
    renderQuestionDossier();
    renderInspectorView();

    // Welcome terminal message
    appendTerminalLine(`
      <div style="color:var(--accent-cyan-bright); margin-bottom:4px; font-weight:700;">
        🐧 Linux Process & Bash Shell Environment Initialized. (Debian GNU/Linux 12)
      </div>
      <div style="color:var(--text-muted); margin-bottom:6px;">
        Type commands below or click token buttons above. Total 150 challenges await!
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

  // Start on DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGame);
  } else {
    initGame();
  }
})();
