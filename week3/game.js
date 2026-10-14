/**
 * ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 3
 * Main Game Controller: State Management, UI Binding, Schema Visualizer, Audio SFX
 */

(function () {
  'use strict';

  // 1. DATA INITIALIZATION
  const q1 = window.QUESTIONS_1_50 || [];
  const q2 = window.QUESTIONS_51_100 || [];
  const q3 = window.QUESTIONS_101_150 || [];
  const allQuestions = [...q1, ...q2, ...q3];

  if (allQuestions.length === 0) {
    console.error("Savollar to'plami topilmadi!");
    return;
  }

  const catalog = window.DDL_CATALOG || {};
  const grader = window.DDL_GRADER || {};

  // 2. STATE MANAGEMENT & LOCAL STORAGE
  const STORAGE_KEY = 'ACADEMY_DS_W3_PROGRESS_V1';

  let state = {
    currentIndex: 0,
    solvedIds: [],
    xp: 0,
    userCodes: {},
    resolvedEvents: {}
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ACADEMY_DS_W3_DDL_PROGRESS_V2');
      if (saved) {
        const parsed = JSON.parse(saved);
        state = {
          currentIndex: typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0,
          solvedIds: Array.isArray(parsed.solvedIds) ? parsed.solvedIds : [],
          xp: typeof parsed.xp === 'number' ? parsed.xp : 0,
          userCodes: parsed.userCodes || {},
          resolvedEvents: parsed.resolvedEvents || {}
        };
      }
    } catch (e) {
      console.warn("Progressni yuklashda xatolik:", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Progressni saqlashda xatolik:", e);
    }
  }

  // 3. AUDIO SYNTHESIZER (Web Audio API)
  class AudioEngine {
    constructor() {
      this.ctx = null;
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playSuccess() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.001, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.15, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.36);
      });
    }

    playError() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.22);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.23);
    }

    playClick() {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    }
  }

  const audio = new AudioEngine();

  // 4. UI ELEMENTS
  const hudProgressText = document.getElementById('hudProgressText');
  const hudProgressBar = document.getElementById('hudProgressBar');
  const hudXpText = document.getElementById('hudXpText');
  const floorRail = document.getElementById('floorRail');

  const dossierSector = document.getElementById('dossierSector');
  const dossierDiff = document.getElementById('dossierDiff');
  const dossierSource = document.getElementById('dossierSource');
  const navCounter = document.getElementById('navCounter');
  const dossierTitle = document.getElementById('dossierTitle');
  const dossierStory = document.getElementById('dossierStory');
  const dossierTask = document.getElementById('dossierTask');

  const sqlEditor = document.getElementById('sqlEditor');
  const btnRun = document.getElementById('btnRun');
  const btnHint = document.getElementById('btnHint');
  const hintCard = document.getElementById('hintCard');
  const btnPreviewSchema = document.getElementById('btnPreviewSchema');
  const btnSampleSol = document.getElementById('btnSampleSol');

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnPrevMini = document.getElementById('btnPrevMini');
  const btnNextMini = document.getElementById('btnNextMini');

  const consoleCard = document.getElementById('consoleCard');
  const consoleIcon = document.getElementById('consoleIcon');
  const consoleText = document.getElementById('consoleText');
  const schemaGrid = document.getElementById('schemaGrid');

  // Modals
  const btnOpenMap = document.getElementById('btnOpenMap');
  const mapModal = document.getElementById('mapModal');
  const btnCloseMap = document.getElementById('btnCloseMap');
  const mapModalBody = document.getElementById('mapModalBody');

  const btnOpenEvents = document.getElementById('btnOpenEvents');
  const eventsModal = document.getElementById('eventsModal');
  const btnCloseEvents = document.getElementById('btnCloseEvents');
  const eventsModalBody = document.getElementById('eventsModalBody');

  const solutionModal = document.getElementById('solutionModal');
  const btnCloseSolution = document.getElementById('btnCloseSolution');
  const solutionCodeText = document.getElementById('solutionCodeText');
  const btnCopySolution = document.getElementById('btnCopySolution');
  const btnApplySolution = document.getElementById('btnApplySolution');

  const btnResetProgress = document.getElementById('btnResetProgress');
  const toastNotice = document.getElementById('toastNotice');

  // 2D Foundry Canvas Engine
  let canvasEngine = null;
  if (typeof window.FoundryEngine2D !== 'undefined') {
    canvasEngine = new window.FoundryEngine2D('foundryCanvas');
  }

  // 5. RENDERING FUNCTIONS

  function getCurrentQuestion() {
    return allQuestions[state.currentIndex] || allQuestions[0];
  }

  function getFloorForQuestion(qId) {
    if (!catalog.sectors) return 1;
    for (const sec of catalog.sectors) {
      if (qId >= sec.floorRange[0] && qId <= sec.floorRange[1]) {
        return sec.id;
      }
    }
    return Math.min(10, Math.floor((qId - 1) / 15) + 1);
  }

  function renderHUD() {
    const total = allQuestions.length;
    const solved = state.solvedIds.length;
    const pct = Math.round((solved / total) * 100);

    hudProgressText.textContent = `${solved} / ${total} (${pct}%)`;
    hudProgressBar.style.width = `${pct}%`;
    hudXpText.textContent = `${state.xp} XP`;
  }

  function renderFloorRail() {
    if (!catalog.sectors) return;
    floorRail.innerHTML = '';

    const currentQ = getCurrentQuestion();
    const currentFloorId = getFloorForQuestion(currentQ.id);

    catalog.sectors.forEach((sec) => {
      const btn = document.createElement('button');
      btn.className = `floor-btn ${sec.id === currentFloorId ? 'active' : ''}`;

      // Count solved in this sector
      let secSolved = 0;
      for (let id = sec.floorRange[0]; id <= sec.floorRange[1]; id++) {
        if (state.solvedIds.includes(id)) secSolved++;
      }

      btn.innerHTML = `
        <span class="floor-badge">${sec.badge || `${sec.id}F`}</span>
        <span>${sec.name.split(':')[1] || sec.name}</span>
        <span style="font-size: 10px; opacity: 0.8;">(${secSolved}/${sec.floorRange[1] - sec.floorRange[0] + 1})</span>
      `;

      btn.addEventListener('click', () => {
        audio.playClick();
        jumpToQuestion(sec.floorRange[0] - 1);
      });

      floorRail.appendChild(btn);
    });
  }

  function renderQuestion() {
    const q = getCurrentQuestion();
    const isSolved = state.solvedIds.includes(q.id);
    const floorId = getFloorForQuestion(q.id);

    // Header info
    dossierSector.textContent = `${floorId}-QAVAT • SEKTOR ${q.sector || floorId}`;
    dossierDiff.textContent = q.difficulty || "O'rta";
    dossierSource.textContent = q.source || "ACADEMY MODULE";
    navCounter.textContent = `${q.id} / ${allQuestions.length}`;

    // Title & scenario
    dossierTitle.textContent = q.title;
    dossierStory.innerHTML = `<strong>Tizim holati:</strong> ${q.story}`;
    dossierTask.innerHTML = `<strong>Architectural Task:</strong> ${q.taskUz}`;

    // Editor content
    if (state.userCodes[q.id] !== undefined) {
      sqlEditor.value = state.userCodes[q.id];
    } else if (q.starterCode) {
      sqlEditor.value = q.starterCode;
    } else {
      sqlEditor.value = "";
    }

    // Hint reset
    hintCard.style.display = 'none';
    hintCard.innerHTML = `<strong>💡 Me'mor Maslahati:</strong> ${q.hint || "Sintaksis va kalit so'zlarni darslik talablari asosida tekshiring."}`;

    // Feedback Console state
    if (isSolved) {
      consoleCard.className = 'console-card success';
      consoleIcon.textContent = '✓';
      consoleText.innerHTML = `<strong>Hal etilgan!</strong> Ushbu arxitektura buyrug'i tekshiruvdan o'tgan. ${q.explanation || ""}`;
    } else {
      consoleCard.className = 'console-card';
      consoleIcon.textContent = 'ℹ️';
      consoleText.textContent = "SQL DDL buyrug'ingizni yozib, 'Tekshirish va Bajarish' tugmasini bosing yoki Ctrl+Enter ni bosing.";
    }

    // Schema Blueprint Visualizer
    renderSchemaBlueprint(q, isSolved);

    // Refresh HUD and floor rail
    renderHUD();
    renderFloorRail();
  }

  function renderSchemaBlueprint(question, isSolved) {
    schemaGrid.innerHTML = '';

    const schema = question.expectedSchema || {
      tableName: "database_entity",
      columns: [
        { name: "id", type: "integer", isPK: true },
        { name: "name", type: "varchar(50)", isNotNull: true }
      ]
    };

    const card = document.createElement('div');
    card.className = 'schema-table-card';
    if (isSolved) {
      card.style.borderColor = 'var(--accent-sage)';
    }

    // Header
    const head = document.createElement('div');
    head.className = 'table-card-head';
    head.innerHTML = `
      <span class="table-card-name">${schema.tableName}</span>
      <span class="table-card-tag">${isSolved ? '✓ Active' : 'Blueprint'}</span>
    `;
    card.appendChild(head);

    // Columns
    const body = document.createElement('div');
    body.className = 'table-card-body';

    if (schema.columns && schema.columns.length > 0) {
      schema.columns.forEach((col) => {
        const row = document.createElement('div');
        row.className = 'column-row';

        let badges = '';
        if (col.isPK) badges += '<span class="badge-pk">PK</span> ';
        if (col.isIdentity) badges += '<span class="badge-pk">IDENTITY</span> ';
        if (col.isFK) badges += `<span class="badge-fk">FK ➔ ${col.references || ''}</span> `;
        if (col.isUQ) badges += '<span class="badge-uq">UQ</span> ';
        if (col.hasCheck) badges += '<span class="badge-chk">CHECK</span> ';
        if (col.isNotNull && !col.isPK) badges += '<span class="badge-nn">NN</span> ';

        row.innerHTML = `
          <div class="col-left">
            <span>${col.name}</span>
          </div>
          <div class="col-right">
            <span class="col-type">${col.type || ''}</span>
            ${badges}
          </div>
        `;
        body.appendChild(row);
      });
    } else {
      body.innerHTML = `<div style="font-size: 11px; color: var(--text-muted); padding: 4px;">Konfiguratsion buyruq yoki relying algebra operatori</div>`;
    }

    card.appendChild(body);
    schemaGrid.appendChild(card);
  }

  function showToast(message) {
    toastNotice.textContent = message;
    toastNotice.classList.add('visible');
    setTimeout(() => {
      toastNotice.classList.remove('visible');
    }, 2800);
  }

  // 6. EXECUTION & GRADING

  function handleRunCode() {
    audio.init();
    const q = getCurrentQuestion();
    const code = sqlEditor.value.trim();

    // Save user's code to state
    state.userCodes[q.id] = sqlEditor.value;
    saveState();

    if (!code) {
      audio.playError();
      consoleCard.className = 'console-card error';
      consoleIcon.textContent = '⚠️';
      consoleText.textContent = "Iltimos, avval SQL DDL kodingizni yozing!";
      if (canvasEngine) canvasEngine.triggerErrorAlert("Kod maydoni bo'sh!");
      return;
    }

    // Run in DDL_GRADER
    const result = grader.grade(code, q);

    if (result.passed) {
      audio.playSuccess();

      const wasAlreadySolved = state.solvedIds.includes(q.id);
      if (!wasAlreadySolved) {
        state.solvedIds.push(q.id);
        const xpGain = (q.id % 15 === 0) ? 50 : 20; // 50 XP for Floor Bosses!
        state.xp += xpGain;
        saveState();
        showToast(`✓ Tabriklaymiz! +${xpGain} XP qabul qilindi.`);
      }

      consoleCard.className = 'console-card success';
      consoleIcon.textContent = '✓';
      consoleText.innerHTML = `<strong>Tekshiruvdan muvaffaqiyatli o'tdi!</strong> ${q.explanation || "DDL kodi barcha relyatsion talablarga to'liq javob berdi."}`;

      if (canvasEngine) {
        const tName = q.expectedSchema ? q.expectedSchema.tableName : "schema";
        canvasEngine.triggerDeploySuccess(tName);
      }

      renderSchemaBlueprint(q, true);
      renderHUD();
      renderFloorRail();
    } else {
      audio.playError();
      consoleCard.className = 'console-card error';
      consoleIcon.textContent = '❌';
      consoleText.innerHTML = `<strong>Kompilyatsiya Xatosi:</strong> ${result.feedback}`;

      if (canvasEngine) {
        canvasEngine.triggerErrorAlert(result.feedback);
      }
    }
  }

  function jumpToQuestion(index) {
    if (index < 0 || index >= allQuestions.length) return;
    // Save current code before leaving
    const curr = getCurrentQuestion();
    state.userCodes[curr.id] = sqlEditor.value;

    state.currentIndex = index;
    saveState();
    renderQuestion();
  }

  // 7. MODALS LOGIC

  function renderMapModal() {
    mapModalBody.innerHTML = '';
    if (!catalog.sectors) return;

    catalog.sectors.forEach((sec) => {
      const secDiv = document.createElement('div');
      secDiv.className = 'map-floor-section';

      const title = document.createElement('div');
      title.className = 'map-floor-title';
      title.innerHTML = `<span>${sec.name}</span> <span style="font-size: 11px; color: var(--text-muted); font-weight: normal;">(${sec.subtitle})</span>`;
      secDiv.appendChild(title);

      const grid = document.createElement('div');
      grid.className = 'map-grid';

      for (let id = sec.floorRange[0]; id <= sec.floorRange[1]; id++) {
        const cell = document.createElement('div');
        const isCompleted = state.solvedIds.includes(id);
        const isCurrent = (state.currentIndex + 1) === id;

        cell.className = `map-cell ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`;
        cell.textContent = id;
        cell.title = `Savol ${id}: ${allQuestions[id - 1] ? allQuestions[id - 1].title : ''}`;

        cell.addEventListener('click', () => {
          audio.playClick();
          jumpToQuestion(id - 1);
          mapModal.classList.remove('active');
        });

        grid.appendChild(cell);
      }

      secDiv.appendChild(grid);
      mapModalBody.appendChild(secDiv);
    });
  }

  function renderEventsModal() {
    eventsModalBody.innerHTML = '';
    const events = catalog.architectureEvents || [];

    if (events.length === 0) {
      eventsModalBody.innerHTML = `<p style="color: var(--text-secondary);">Hozircha tizimda ochiq arxitektura voqealari yo'q.</p>`;
      return;
    }

    events.forEach((ev) => {
      const card = document.createElement('div');
      card.className = 'event-card';

      const isResolved = state.resolvedEvents[ev.id] !== undefined;
      const chosenIdx = state.resolvedEvents[ev.id];

      card.innerHTML = `
        <div class="event-title">${ev.title} ${isResolved ? '✓ (Yechilgan)' : ''}</div>
        <div class="event-desc">${ev.desc}</div>
        <div class="event-choices" id="choices_${ev.id}"></div>
      `;

      const choicesBox = card.querySelector(`#choices_${ev.id}`);
      ev.choices.forEach((c, idx) => {
        const btn = document.createElement('button');
        btn.className = 'event-choice-btn';
        if (isResolved && chosenIdx === idx) {
          btn.style.borderColor = 'var(--accent-sage)';
          btn.style.color = 'var(--accent-sage)';
        }
        btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)})</strong> ${c.text}`;

        btn.addEventListener('click', () => {
          if (!isResolved) {
            audio.playSuccess();
            state.resolvedEvents[ev.id] = idx;
            state.xp += (c.rewardXp || 25);
            saveState();
            renderHUD();
            showToast(`Voqea auditdan o'tdi! +${c.rewardXp || 25} XP`);
            renderEventsModal();
          } else {
            showToast("Ushbu masala allaqachon hal qilingan.");
          }
        });

        choicesBox.appendChild(btn);
      });

      eventsModalBody.appendChild(card);
    });
  }

  // 8. EVENT LISTENERS SETUP

  // Editor Tab key handling
  sqlEditor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = sqlEditor.selectionStart;
      const end = sqlEditor.selectionEnd;
      sqlEditor.value = sqlEditor.value.substring(0, start) + "  " + sqlEditor.value.substring(end);
      sqlEditor.selectionStart = sqlEditor.selectionEnd = start + 2;
    } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleRunCode();
    }
  });

  // Global navigation shortcuts (Alt + Left/Right)
  window.addEventListener('keydown', (e) => {
    if (e.altKey && e.key === 'ArrowRight') {
      e.preventDefault();
      jumpToQuestion(state.currentIndex + 1);
    } else if (e.altKey && e.key === 'ArrowLeft') {
      e.preventDefault();
      jumpToQuestion(state.currentIndex - 1);
    }
  });

  // Action buttons
  btnRun.addEventListener('click', handleRunCode);

  btnHint.addEventListener('click', () => {
    audio.playClick();
    const isHidden = hintCard.style.display === 'none' || !hintCard.style.display;
    hintCard.style.display = isHidden ? 'block' : 'none';
  });

  btnPreviewSchema.addEventListener('click', () => {
    audio.playClick();
    const q = getCurrentQuestion();
    renderSchemaBlueprint(q, state.solvedIds.includes(q.id));
    showToast("Kutilgan Relyatsion Sxema ko'rinishi yangilandi.");
  });

  btnSampleSol.addEventListener('click', () => {
    audio.playClick();
    const q = getCurrentQuestion();
    if (q.solutions && q.solutions.length > 0) {
      solutionCodeText.textContent = q.solutions[0];
      solutionModal.classList.add('active');
    }
  });

  btnCopySolution.addEventListener('click', () => {
    navigator.clipboard.writeText(solutionCodeText.textContent).then(() => {
      showToast("Namuna kod xotiraga nusxalandi!");
    });
  });

  btnApplySolution.addEventListener('click', () => {
    sqlEditor.value = solutionCodeText.textContent;
    state.userCodes[getCurrentQuestion().id] = sqlEditor.value;
    saveState();
    solutionModal.classList.remove('active');
    showToast("Kod muharrirga joylashtirildi!");
  });

  btnCloseSolution.addEventListener('click', () => {
    solutionModal.classList.remove('active');
  });

  // Navigation Prev / Next
  btnPrev.addEventListener('click', () => {
    audio.playClick();
    jumpToQuestion(state.currentIndex - 1);
  });
  btnNext.addEventListener('click', () => {
    audio.playClick();
    jumpToQuestion(state.currentIndex + 1);
  });
  btnPrevMini.addEventListener('click', () => {
    audio.playClick();
    jumpToQuestion(state.currentIndex - 1);
  });
  btnNextMini.addEventListener('click', () => {
    audio.playClick();
    jumpToQuestion(state.currentIndex + 1);
  });

  // Quick Chips
  document.querySelectorAll('.chip-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      audio.playClick();
      const insert = btn.getAttribute('data-sql');
      const start = sqlEditor.selectionStart;
      const end = sqlEditor.selectionEnd;
      const val = sqlEditor.value;

      sqlEditor.value = val.substring(0, start) + insert + val.substring(end);
      sqlEditor.focus();
      sqlEditor.selectionStart = sqlEditor.selectionEnd = start + insert.length;
    });
  });

  // Modals Open / Close
  btnOpenMap.addEventListener('click', () => {
    audio.playClick();
    renderMapModal();
    mapModal.classList.add('active');
  });
  btnCloseMap.addEventListener('click', () => {
    mapModal.classList.remove('active');
  });

  btnOpenEvents.addEventListener('click', () => {
    audio.playClick();
    renderEventsModal();
    eventsModal.classList.add('active');
  });
  btnCloseEvents.addEventListener('click', () => {
    eventsModal.classList.remove('active');
  });

  // Close modals on overlay backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === mapModal) mapModal.classList.remove('active');
    if (e.target === eventsModal) eventsModal.classList.remove('active');
    if (e.target === solutionModal) solutionModal.classList.remove('active');
  });

  // Reset Progress
  btnResetProgress.addEventListener('click', () => {
    const ok = confirm("Diqqat! Barcha erishilgan 150 ta savol natijalari va XP tozalansinmi?");
    if (ok) {
      localStorage.removeItem(STORAGE_KEY);
      state = {
        currentIndex: 0,
        solvedIds: [],
        xp: 0,
        userCodes: {},
        resolvedEvents: {}
      };
      saveState();
      renderQuestion();
      showToast("Progress muvaffaqiyatli qayta tiklandi!");
    }
  });

  // 9. BOOTSTRAP
  loadState();
  renderQuestion();

  // Telegram WebApp Integration & Desktop Focus Fix
  if (window.Telegram && window.Telegram.WebApp) {
    try {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    } catch (e) {}
  }
  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('click', () => { el.focus(); });
  });

})();

