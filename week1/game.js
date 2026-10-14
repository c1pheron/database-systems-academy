// ============================================================================
// DATABASE SYSTEMS ACADEMY — WEEK 1 CONTROLLER (game.js)
// Conceptual ER Modeling, 150 Question Engine, Web Audio, Master Anatomy Card
// ============================================================================

(function () {
  "use strict";

  // Web Audio Synthesizer
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
    playKey() { this.playTone(850, "sine", 0.04, 0.04); },
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
      this.playTone(180, "sawtooth", 0.22, 0.2);
    }
  };

  // Questions Pool (150 Total)
  const allQuestions = [
    ...(window.QUESTIONS_W1_PART1 || []),
    ...(window.QUESTIONS_W1_PART2 || []),
    ...(window.QUESTIONS_W1_PART3 || [])
  ];

  const STORAGE_KEY = "DS_W1_PROGRESS";

  // Game State
  const state = {
    currentQuestionId: 1,
    activeSector: 1,
    solvedIds: new Set(),
    capital: 0,
    commandHistory: [],
    historyIndex: -1,
    activeTab: "concepts",
    conceptSearchQuery: "",
    atelier: null,
    activeIncidentIndex: 0
  };

  // DOM Elements Cache
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
    el.gameCanvas = document.getElementById("gameCanvas");
    el.tickerSpeaker = document.getElementById("tickerSpeaker");
    el.tickerMessage = document.getElementById("tickerMessage");
    el.btnQuickAdvice = document.getElementById("btnQuickAdvice");

    el.schemaTabs = document.querySelectorAll(".schema-tab");
    el.schemaTableDisplay = document.getElementById("schemaTableDisplay");

    el.floorHeaderTitle = document.getElementById("floorHeaderTitle");
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

    el.cmdInfoCard = document.getElementById("cmdInfoCard");
    el.btnToggleCmdCard = document.getElementById("btnToggleCmdCard");
    el.cmdCardCode = document.getElementById("cmdCardCode");
    el.cmdCardToggleHint = document.getElementById("cmdCardToggleHint");
    el.cmdCardToggleArrow = document.getElementById("cmdCardToggleArrow");
    el.cmdCardBody = document.getElementById("cmdCardBody");

    el.btnToggleHint = document.getElementById("btnToggleHint");
    el.qHintBox = document.getElementById("qHintBox");

    el.tokenToolbar = document.getElementById("tokenToolbar");
    el.termScreen = document.getElementById("termScreen");
    el.termInput = document.getElementById("termInput");
    el.btnExecCmd = document.getElementById("btnExecCmd");

    el.mapModal = document.getElementById("mapModal");
    el.mapModalBody = document.getElementById("mapModalBody");
    el.eventModal = document.getElementById("eventModal");
    el.eventModalBody = document.getElementById("eventModalBody");
    el.certModal = document.getElementById("certModal");
    el.certModalBody = document.getElementById("certModalBody");
    el.toastContainer = document.getElementById("toastContainer");

    // Initialize 2D Canvas Atelier
    if (window.Atelier2DEngine && el.gameCanvas) {
      state.atelier = new window.Atelier2DEngine("gameCanvas");
    }

    bindEventListeners();
  }

  // Load / Save Progress
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw);
        if (Array.isArray(data.solvedIds)) state.solvedIds = new Set(data.solvedIds);
        if (data.currentQuestionId) state.currentQuestionId = data.currentQuestionId;
        if (data.capital) state.capital = data.capital;
      }
    } catch (e) {}

    const q = allQuestions.find(item => item.id === state.currentQuestionId);
    if (q) state.activeSector = q.sectorId;
  }

  function saveProgress() {
    try {
      const data = {
        solvedIds: Array.from(state.solvedIds),
        currentQuestionId: state.currentQuestionId,
        capital: state.capital,
        solvedCount: state.solvedIds.size,
        xp: state.capital
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  // HUD Render
  function renderHUD() {
    const solvedCount = state.solvedIds.size;
    const ranks = window.ER_CATALOG_W1 ? window.ER_CATALOG_W1.CAREER_RANKS : [];
    let currentRank = ranks[0] || { title: "Junior Data Modeler", salary: "$2,500/mo", color: "cyan" };

    for (const r of ranks) {
      if (solvedCount >= r.threshold) currentRank = r;
    }

    if (el.hudRankTitle) el.hudRankTitle.textContent = currentRank.title;
    if (el.hudSalary) el.hudSalary.textContent = currentRank.salary;
    if (el.hudCapital) el.hudCapital.textContent = `$${state.capital.toLocaleString()}`;
    if (el.hudSolved) el.hudSolved.textContent = `${solvedCount} / 150`;

    if (el.hudProgressFill) {
      const pct = Math.round((solvedCount / 150) * 100);
      el.hudProgressFill.style.width = `${pct}%`;
    }

    renderSectorNav();
  }

  // Render Sector Bar
  function renderSectorNav() {
    if (!el.sectorNavList || !window.ER_CATALOG_W1) return;
    el.sectorNavList.innerHTML = "";

    const sectors = window.ER_CATALOG_W1.SECTORS || [];
    sectors.forEach(sec => {
      const pill = document.createElement("div");
      const isSecActive = (sec.id === state.activeSector);
      const secQs = allQuestions.filter(q => q.sectorId === sec.id);
      const solvedInSec = secQs.filter(q => state.solvedIds.has(q.id)).length;
      const isCompleted = (solvedInSec === secQs.length && secQs.length > 0);

      pill.className = `sector-pill ${isSecActive ? "active" : ""} ${isCompleted ? "completed" : ""}`;
      pill.innerHTML = `
        <span>${sec.icon}</span>
        <span>Sector ${sec.id} (${sec.range})</span>
        <span class="sec-count">${solvedInSec}/${secQs.length}</span>
      `;

      pill.addEventListener("click", () => {
        SoundFX.playKey();
        state.activeSector = sec.id;
        const first = secQs[0];
        if (first) state.currentQuestionId = first.id;
        renderHUD();
        renderQuestionDossier();
        saveProgress();
      });

      el.sectorNavList.appendChild(pill);
    });
  }

  // Render Question Dots
  function renderQuestionDots() {
    if (!el.floorQuestionStrip) return;
    el.floorQuestionStrip.innerHTML = "";
    const secQs = allQuestions.filter(q => q.sectorId === state.activeSector);

    secQs.forEach(q => {
      const dot = document.createElement("div");
      const isSolved = state.solvedIds.has(q.id);
      const isActive = (state.currentQuestionId === q.id);

      dot.className = `q-dot ${isActive ? "active" : ""} ${isSolved ? "solved" : ""}`;
      dot.textContent = q.id;
      dot.title = `Challenge #${q.id}: ${q.title}`;

      dot.addEventListener("click", () => {
        SoundFX.playKey();
        state.currentQuestionId = q.id;
        renderHUD();
        renderQuestionDossier();
        saveProgress();
      });

      el.floorQuestionStrip.appendChild(dot);
    });
  }

  // Smart Tokens Toolbar Generator
  function renderSmartTokens(q) {
    if (!el.tokenToolbar) return;
    el.tokenToolbar.innerHTML = "";

    const candidates = new Set();
    if (q.canonical) candidates.add(String(q.canonical));
    if (Array.isArray(q.accepted)) {
      q.accepted.forEach(item => {
        if (String(item).length < 35) candidates.add(String(item));
      });
    }

    // Contextual ER distractors
    const extraTokens = [
      "1..1", "0..1", "1..*", "0..*", "1..8",
      "Weak entity", "Strong entity", "Partial key",
      "Composition", "Aggregation", "Fan trap", "Chasm trap",
      "Associative entity", "Ternary relationship", "{PK}", "{PPK}",
      "ON DELETE CASCADE", "Simple attribute", "Composite attribute"
    ];

    extraTokens.forEach(t => {
      if (candidates.size < 8) candidates.add(t);
    });

    Array.from(candidates).slice(0, 8).forEach(token => {
      const span = document.createElement("span");
      span.className = "term-token";
      span.textContent = token;
      span.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.termInput) {
          el.termInput.value = token;
          el.termInput.focus();
        }
      });
      el.tokenToolbar.appendChild(span);
    });
  }

  // Render Question Dossier & Accordion Card
  function renderQuestionDossier() {
    const q = allQuestions.find(item => item.id === state.currentQuestionId);
    if (!q) return;

    renderQuestionDots();
    renderSmartTokens(q);

    const sectors = window.ER_CATALOG_W1 ? window.ER_CATALOG_W1.SECTORS : [];
    const sec = sectors.find(s => s.id === q.sectorId) || { name: `Sector ${q.sectorId}` };

    if (el.floorHeaderTitle) el.floorHeaderTitle.textContent = `Sector ${q.sectorId}: ${sec.name}`;
    if (el.sectorSubTitle) el.sectorSubTitle.textContent = `${sec.name} (Step #${q.id} of 150)`;

    if (el.qNumberBadge) el.qNumberBadge.textContent = `Challenge #${q.id} / 150`;
    if (el.qDifficultyBadge) el.qDifficultyBadge.textContent = q.difficulty;
    if (el.qSourceBadge) el.qSourceBadge.textContent = q.source;

    if (el.qTitle) el.qTitle.textContent = q.title;
    if (el.qStory) el.qStory.textContent = q.story;
    if (el.qTask) el.qTask.innerHTML = `<code>${escapeHtml(q.task)}</code>`;

    // 5-Point Concept Anatomy Card
    const cmdCardCode = document.getElementById("cmdCardCode");
    const cmdCardBody = document.getElementById("cmdCardBody");
    const cmdCardToggleHint = document.getElementById("cmdCardToggleHint");

    if (cmdCardBody && window.ER_CATALOG_W1) {
      const anatomy = q.flagAnatomy || {};
      if (cmdCardCode) cmdCardCode.textContent = anatomy.syntaxExample || String(q.canonical) || "";
      cmdCardBody.innerHTML = window.ER_CATALOG_W1.formatConceptCard(anatomy);
      cmdCardBody.style.display = "none";
      if (cmdCardToggleHint) cmdCardToggleHint.textContent = "View Details";
    }

    if (el.qHintBox) {
      el.qHintBox.textContent = (q.flagAnatomy && q.flagAnatomy.whenToUse) || "Refer to UML multiplicity rules from Seminar 1.";
      el.qHintBox.classList.remove("show");
    }
    if (el.btnToggleHint) el.btnToggleHint.textContent = "💡 View Design Hint";

    if (state.atelier) {
      state.atelier.triggerAlert(`Challenge #${q.id}: ${q.title}`);
    }
  }

  // Interactive Accordion Toggle
  window.toggleCmdInfoCard = function () {
    const body = document.getElementById("cmdCardBody");
    const btn = document.getElementById("btnToggleCmdCard");
    const hint = document.getElementById("cmdCardToggleHint");
    if (!body) return;

    if (body.style.display === "none" || !body.style.display) {
      body.style.display = "flex";
      if (btn) btn.classList.add("open");
      if (hint) hint.textContent = "Hide";
    } else {
      body.style.display = "none";
      if (btn) btn.classList.remove("open");
      if (hint) hint.textContent = "View Details";
    }
  };

  // Inspector View Rendering
  function renderInspectorView() {
    if (!el.schemaTableDisplay) return;

    if (el.schemaTabs) {
      el.schemaTabs.forEach(tabBtn => {
        if (tabBtn.getAttribute("data-tab") === state.activeTab) {
          tabBtn.classList.add("active");
        } else {
          tabBtn.classList.remove("active");
        }
      });
    }

    const tab = state.activeTab;

    if (tab === "concepts") {
      const allConcepts = (window.ER_CATALOG_W1 && window.ER_CATALOG_W1.MASTER_CONCEPT_DICTIONARY) || [];
      const query = (state.conceptSearchQuery || "").toLowerCase();
      const filtered = allConcepts.filter(item => {
        return item.concept.toLowerCase().includes(query) ||
               item.category.toLowerCase().includes(query) ||
               item.purpose.toLowerCase().includes(query);
      });

      let html = `
        <div style="margin-bottom:8px; color:var(--accent-cyan); font-weight:700; font-size:13px;">
          📖 Master ER & UML Concepts Dictionary (${allConcepts.length} Definitions)
        </div>
        <div style="margin-bottom:10px;">
          <input
            type="text"
            id="conceptSearchInput"
            style="width:100%; background:#050d1a; border:1px solid var(--border-cyan); border-radius:4px; padding:6px 10px; color:#fff; font-size:12px; font-family:'JetBrains Mono', monospace;"
            placeholder="Search concepts... (e.g., weak entity, 1..*, composition, fan trap)"
            value="${escapeHtml(state.conceptSearchQuery)}"
          />
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
      `;

      filtered.forEach(c => {
        html += `
          <div style="background:#081324; border:1px solid rgba(0,229,255,0.2); border-radius:6px; padding:10px;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span style="font-weight:700; color:#fff; font-size:13px;">${escapeHtml(c.concept)}</span>
              <span style="font-size:10px; background:rgba(0,229,255,0.15); color:var(--accent-cyan); padding:2px 6px; border-radius:4px;">${escapeHtml(c.category)}</span>
            </div>
            <div style="font-size:11px; color:var(--accent-amber); font-family:'JetBrains Mono', monospace; margin-bottom:4px;">
              Syntax / Symbol: <code>${escapeHtml(c.syntax)}</code>
            </div>
            <div style="font-size:12px; color:var(--text-secondary); margin-bottom:4px;">
              <b>Definition:</b> ${escapeHtml(c.purpose)}
            </div>
            <div style="font-size:11.5px; color:#f87171; background:rgba(239,68,68,0.1); border-left:2px solid #ef4444; padding:4px 8px; border-radius:2px;">
              <b>⚠️ Omission Risk:</b> ${escapeHtml(c.omissionRisk)}
            </div>
          </div>
        `;
      });
      html += `</div>`;
      el.schemaTableDisplay.innerHTML = html;

      const searchInp = document.getElementById("conceptSearchInput");
      if (searchInp) {
        searchInp.addEventListener("input", (e) => {
          state.conceptSearchQuery = e.target.value;
          renderInspectorView();
        });
      }

    } else if (tab === "multiplicities") {
      el.schemaTableDisplay.innerHTML = `
        <div style="margin-bottom:8px; color:var(--accent-emerald); font-weight:700;">
          📐 UML Multiplicity Standards & Semantics (min..max)
        </div>
        <table style="width:100%; border-collapse:collapse; font-size:12px; font-family:'JetBrains Mono', monospace;">
          <thead>
            <tr style="border-bottom:1px solid var(--border-cyan); text-align:left; color:var(--accent-cyan);">
              <th style="padding:6px;">Multiplicity</th>
              <th style="padding:6px;">Meaning</th>
              <th style="padding:6px;">Participation</th>
              <th style="padding:6px;">Relational Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
              <td style="color:#00e5ff; font-weight:700; padding:6px;">1..1</td>
              <td>Exactly one</td>
              <td>Mandatory</td>
              <td>NOT NULL foreign key</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
              <td style="color:#10b981; font-weight:700; padding:6px;">0..1</td>
              <td>At most one (Optional)</td>
              <td>Optional</td>
              <td>Nullable foreign key</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
              <td style="color:#f59e0b; font-weight:700; padding:6px;">1..*</td>
              <td>At least one (Many)</td>
              <td>Mandatory</td>
              <td>Foreign key on many side</td>
            </tr>
            <tr style="border-bottom:1px solid rgba(255,255,255,0.06);">
              <td style="color:#8b5cf6; font-weight:700; padding:6px;">0..*</td>
              <td>Zero, one or many</td>
              <td>Optional</td>
              <td>Nullable FK or M:N junction</td>
            </tr>
            <tr>
              <td style="color:#ec4899; font-weight:700; padding:6px;">1..8</td>
              <td>Explicit bounded range</td>
              <td>Mandatory Range</td>
              <td>Trigger / CHECK constraint</td>
            </tr>
          </tbody>
        </table>
      `;

    } else if (tab === "traps") {
      el.schemaTableDisplay.innerHTML = `
        <div style="margin-bottom:8px; color:var(--accent-ruby); font-weight:700;">
          ⚠️ Connection Traps: Fan Trap vs Chasm Trap
        </div>
        <div style="display:flex; flex-direction:column; gap:12px; font-size:12px;">
          <div style="background:#0f182c; border:1px solid var(--accent-amber); border-radius:6px; padding:10px;">
            <div style="color:var(--accent-amber); font-weight:700; margin-bottom:4px;">1. The Fan Trap (Misarranged Pathway)</div>
            <p style="color:var(--text-secondary); margin-bottom:6px;">Occurs when two 1:N relationships fan out from the same entity when the actual association connects the two "many" ends.</p>
            <div style="background:#070d18; padding:6px; font-family:'JetBrains Mono', monospace; color:#38bdf8; border-radius:4px; margin-bottom:6px;">
              Flawed: Staff (1..*) <- Division (1..1) -> Branch (1..*)<br>
              Repaired: Staff (1..*) - WorksAt -> Branch (1..1) - BelongsTo -> Division (1..1)
            </div>
            <span style="color:#10b981; font-weight:600;">Fix: Restructure relationships into a clean linear chain.</span>
          </div>

          <div style="background:#0f182c; border:1px solid var(--accent-ruby); border-radius:6px; padding:10px;">
            <div style="color:var(--accent-ruby); font-weight:700; margin-bottom:4px;">2. The Chasm Trap (Missing Pathway via Optionality)</div>
            <p style="color:var(--text-secondary); margin-bottom:6px;">Occurs when a relationship path exists between entities, but optional participation (0..1) along the path breaks navigation for unassigned instances.</p>
            <div style="background:#070d18; padding:6px; font-family:'JetBrains Mono', monospace; color:#38bdf8; border-radius:4px; margin-bottom:6px;">
              Flawed: Branch (1..1) -> Staff (0..1) -> Property (0..*) [PG4 has no staff!]<br>
              Repaired: Branch (1..1) - Offers -> Property (0..*) [Direct Link Added]
            </div>
            <span style="color:#10b981; font-weight:600;">Fix: Add the missing direct relationship between the endpoints.</span>
          </div>
        </div>
      `;

    } else if (tab === "weak_entities") {
      el.schemaTableDisplay.innerHTML = `
        <div style="margin-bottom:8px; color:var(--accent-violet); font-weight:700;">
          🔗 Weak Entities & Identifying Composition (UML)
        </div>
        <div style="font-size:12px; line-height:1.6; color:var(--text-secondary);">
          <p><b>Definition:</b> A weak entity cannot be uniquely identified by its own attributes alone and possesses an existence dependency on an owner entity.</p>
          <ul style="margin:8px 0 8px 18px;">
            <li><b>Partial Key {PPK}:</b> The discriminator attribute (e.g., <code>roomNo {PPK}</code>).</li>
            <li><b>Identifying Composition:</b> Drawn with a solid filled diamond (◆) on the owner entity.</li>
            <li><b>Multiplicity at Owner End:</b> Always <b>1..1</b>.</li>
            <li><b>Relational Primary Key:</b> Formed by combining owner's primary key + weak entity's partial key: <code>{hotelID, roomNo}</code>.</li>
            <li><b>Integrity Rule:</b> Always marked with <code>ON DELETE CASCADE</code>.</li>
          </ul>
        </div>
      `;

    } else if (tab === "result") {
      const solved = state.solvedIds.size;
      const pct = Math.round((solved / 150) * 100);
      el.schemaTableDisplay.innerHTML = `
        <div style="margin-bottom:8px; color:var(--accent-cyan); font-weight:700;">
          🏆 Module 1 Performance Analytics
        </div>
        <div style="font-size:12.5px; line-height:1.7; color:var(--text-secondary);">
          <div>Total Challenges Solved: <b style="color:#fff;">${solved} / 150 (${pct}%)</b></div>
          <div>Architectural Score Accumulated: <b style="color:var(--accent-amber);">${state.capital} XP</b></div>
          <div>Status: <b style="color:var(--accent-emerald);">${solved === 150 ? "Completed ✓ Master Architect" : "In Progress..."}</b></div>
        </div>
      `;
    }
  }

  // Handle Command / Answer Submission
  function handleCommandSubmit() {
    if (!el.termInput) return;
    const raw = el.termInput.value.trim();
    if (!raw) return;

    el.termInput.value = "";
    SoundFX.playKey();

    state.commandHistory.push(raw);
    state.historyIndex = state.commandHistory.length;

    appendTerminalLine(`
      <span style="color:var(--text-muted);">student@modeler:~$</span>
      <span style="color:#fff; font-weight:700;"> ${escapeHtml(raw)}</span>
    `);

    const currentQ = allQuestions.find(item => item.id === state.currentQuestionId);
    if (!currentQ || !window.ER_CATALOG_W1) return;

    const isCorrect = window.ER_CATALOG_W1.ER_GRADER.evaluate(currentQ, raw);

    if (isCorrect) {
      SoundFX.playSuccess();
      const isFirstSolve = !state.solvedIds.has(currentQ.id);

      if (isFirstSolve) {
        state.solvedIds.add(currentQ.id);
        state.capital += 25;
        saveProgress();
      }

      appendTerminalLine(`
        <span style="color:var(--accent-emerald-bright); font-weight:700;">
          ✓ Correct! Model specification verified. (+25 XP)
        </span>
      `);

      if (state.atelier) {
        state.atelier.triggerSuccess(currentQ.title);
      }

      showToast(`Challenge #${currentQ.id} solved successfully!`, "success");
      renderHUD();

      // Auto advance to next challenge after short delay
      setTimeout(() => {
        if (state.currentQuestionId < 150) {
          state.currentQuestionId++;
          const nextQ = allQuestions.find(item => item.id === state.currentQuestionId);
          if (nextQ && nextQ.sectorId !== state.activeSector) {
            state.activeSector = nextQ.sectorId;
          }
          renderHUD();
          renderQuestionDossier();
          saveProgress();
        }
      }, 700);

    } else {
      SoundFX.playError();
      appendTerminalLine(`
        <span style="color:var(--accent-ruby); font-weight:700;">
          ✗ Incorrect. Expected format: ${escapeHtml(currentQ.canonical)}
        </span>
      `);
      showToast("Evaluation failed. Check hint or inspect the concept dictionary.", "error");
    }

    renderInspectorView();
  }

  function appendTerminalLine(html) {
    if (!el.termScreen) return;
    const div = document.createElement("div");
    div.innerHTML = html;
    el.termScreen.appendChild(div);
    el.termScreen.scrollTop = el.termScreen.scrollHeight;
  }

  function showToast(message, type = "info") {
    if (!el.toastContainer) return;
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    el.toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3500);
  }

  function bindEventListeners() {
    if (el.btnExecCmd) el.btnExecCmd.addEventListener("click", handleCommandSubmit);
    if (el.termInput) {
      el.termInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          handleCommandSubmit();
        }
      });
    }

    if (el.btnPrevQ) {
      el.btnPrevQ.addEventListener("click", () => {
        SoundFX.playKey();
        if (state.currentQuestionId > 1) {
          state.currentQuestionId--;
          const q = allQuestions.find(item => item.id === state.currentQuestionId);
          if (q) state.activeSector = q.sectorId;
          renderHUD();
          renderQuestionDossier();
          saveProgress();
        }
      });
    }

    if (el.btnNextQ) {
      el.btnNextQ.addEventListener("click", () => {
        SoundFX.playKey();
        if (state.currentQuestionId < 150) {
          state.currentQuestionId++;
          const q = allQuestions.find(item => item.id === state.currentQuestionId);
          if (q) state.activeSector = q.sectorId;
          renderHUD();
          renderQuestionDossier();
          saveProgress();
        }
      });
    }

    if (el.btnToggleHint) {
      el.btnToggleHint.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.qHintBox) {
          el.qHintBox.classList.toggle("show");
          el.btnToggleHint.textContent = el.qHintBox.classList.contains("show") ? "💡 Hide Hint" : "💡 View Design Hint";
        }
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
        if (confirm("Reset all Module 1 progress and start fresh?")) {
          state.solvedIds.clear();
          state.currentQuestionId = 1;
          state.activeSector = 1;
          state.capital = 0;
          saveProgress();
          renderHUD();
          renderQuestionDossier();
          renderInspectorView();
          showToast("Progress successfully reset.", "info");
        }
      });
    }

    if (el.schemaTabs) {
      el.schemaTabs.forEach(btn => {
        btn.addEventListener("click", () => {
          SoundFX.playKey();
          state.activeTab = btn.getAttribute("data-tab");
          renderInspectorView();
        });
      });
    }

    if (el.btnTriggerEvent) {
      el.btnTriggerEvent.addEventListener("click", () => {
        SoundFX.playKey();
        const events = (window.ER_CATALOG_W1 && window.ER_CATALOG_W1.EMERGENCY_EVENTS) || [];
        const ev = events[state.activeIncidentIndex % events.length];
        state.activeIncidentIndex++;
        if (ev && el.eventModal && el.eventModalBody) {
          el.eventModalBody.innerHTML = `
            <div style="font-size:15px; font-weight:800; color:var(--accent-amber); margin-bottom:8px;">
              ${ev.title}
            </div>
            <div style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">
              DISPATCHED BY: <b>${ev.speaker}</b>
            </div>
            <div style="font-size:13px; color:#cbd5e1; line-height:1.5; margin-bottom:12px; background:rgba(0,0,0,0.4); padding:10px; border-radius:6px;">
              ${ev.desc}
            </div>
            <div style="font-size:13px; color:var(--accent-emerald); font-weight:600;">
              <b>Resolution:</b> ${ev.solution}
            </div>
          `;
          el.eventModal.classList.add("show");
        }
      });
    }

    if (el.btnOpenMap) {
      el.btnOpenMap.addEventListener("click", () => {
        SoundFX.playKey();
        if (el.mapModal && el.mapModalBody) {
          let html = `<div style="display:grid; grid-template-columns:repeat(15, 1fr); gap:6px;">`;
          allQuestions.forEach(q => {
            const isSolved = state.solvedIds.has(q.id);
            const isCur = (state.currentQuestionId === q.id);
            const bg = isCur ? "var(--accent-cyan)" : (isSolved ? "rgba(16,185,129,0.3)" : "#0c182c");
            const col = isCur ? "#050914" : (isSolved ? "var(--accent-emerald-bright)" : "var(--text-muted)");
            html += `
              <div onclick="window.jumpToQuestion(${q.id})" style="background:${bg}; color:${col}; padding:8px 4px; text-align:center; font-family:'JetBrains Mono', monospace; font-size:11px; font-weight:700; border-radius:4px; cursor:pointer; border:1px solid rgba(255,255,255,0.1);" title="#${q.id}: ${escapeHtml(q.title)}">
                ${q.id}
              </div>
            `;
          });
          html += `</div>`;
          el.mapModalBody.innerHTML = html;
          el.mapModal.classList.add("show");
        }
      });
    }

    // Modal Close
    document.querySelectorAll(".modal-close").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("show"));
      });
    });
  }

  window.jumpToQuestion = function (id) {
    state.currentQuestionId = id;
    const q = allQuestions.find(item => item.id === id);
    if (q) state.activeSector = q.sectorId;
    if (el.mapModal) el.mapModal.classList.remove("show");
    renderHUD();
    renderQuestionDossier();
    saveProgress();
  };

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Initialization
  function initGame() {
    initElements();
    loadProgress();
    renderHUD();
    renderQuestionDossier();
    renderInspectorView();

    appendTerminalLine(`
      <div style="color:var(--accent-cyan); font-weight:700; margin-bottom:4px;">
        🏛️ Week 1: Conceptual Design & ER Modeling Simulator Initialized.
      </div>
      <div style="color:var(--text-muted); margin-bottom:6px;">
        Read the design specification above. Select a quick token or type the correct UML multiplicity / construct.
      </div>
    `);
  }

  window.addEventListener("DOMContentLoaded", initGame);

})();
