/**
 * ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 1 & 2
 * Main Game Controller: State Management, EER Canvas Linking, Audio SFX, 150-Question Flow
 */

(function () {
  'use strict';

  // 1. DATA INITIALIZATION
  const q1 = window.EER_CLIENTS_1_50 || [];
  const q2 = window.EER_CLIENTS_51_100 || [];
  const q3 = window.EER_CLIENTS_101_150 || [];
  const allQuestions = [...q1, ...q2, ...q3];

  if (allQuestions.length === 0) {
    console.error("EER Savollar to'plami topilmadi!");
    return;
  }

  const catalog = window.EER_CATALOG || {};
  const grader = window.EER_GRADER || {};

  // 2. STATE MANAGEMENT & LOCAL STORAGE
  const STORAGE_KEY = 'DS_W2_PROGRESS';

  let state = {
    currentIndex: 0,
    solvedIds: [],
    xp: 0
  };

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('ACADEMY_DS_W2_EER_PROGRESS_V2');
      if (saved) {
        const parsed = JSON.parse(saved);
        state = {
          currentIndex: typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0,
          solvedIds: Array.isArray(parsed.solvedIds) ? parsed.solvedIds : [],
          xp: typeof parsed.xp === 'number' ? parsed.xp : 0
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
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Major architectural chord)
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
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(140, now + 0.25);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.26);
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

  // 4. INSTANTIATE ENGINES
  loadState();

  const officeEngine = new window.ModelingBureauEngine2D('officeCanvas');
  const eerCanvas = new window.EERCanvas('eerBoardContainer');

  // Connect live drafting board actions directly to 2D consultation desk dialogue!
  eerCanvas.onLiveDialogue = (speechText) => {
    if (officeEngine) {
      officeEngine.setLiveSpeech(speechText);
    }
  };

  // Handle canvas reset request to reload question's starterDiagram
  eerCanvas.onResetRequest = () => {
    const q = allQuestions[state.currentIndex];
    if (q && q.starterDiagram) {
      eerCanvas.loadDiagram(q.starterDiagram);
      eerCanvas.setStatus("Dastlabki diagramma tiklandi.");
    }
  };

  // 5. DOM ELEMENTS
  const hudProgressText = document.getElementById('hudProgressText');
  const hudProgressBar = document.getElementById('hudProgressBar');
  const hudXpText = document.getElementById('hudXpText');

  const floorRail = document.getElementById('floorRail');

  const qFloorBadge = document.getElementById('qFloorBadge');
  const qNumberBadge = document.getElementById('qNumberBadge');
  const qDifficultyBadge = document.getElementById('qDifficultyBadge');
  const qTitle = document.getElementById('qTitle');

  const clientName = document.getElementById('clientName');
  const clientRole = document.getElementById('clientRole');
  const clientStory = document.getElementById('clientStory');
  const taskText = document.getElementById('taskText');

  const btnSubmit = document.getElementById('btnSubmitDiagram');
  const btnPrev = document.getElementById('btnPrevQuestion');
  const btnNext = document.getElementById('btnNextQuestion');
  const btnHint = document.getElementById('btnShowHint');
  const hintBox = document.getElementById('hintBox');
  const feedbackBox = document.getElementById('feedbackBox');

  const btnOpenMap = document.getElementById('btnOpenMap');
  const btnResetProgress = document.getElementById('btnResetProgress');

  const mapModal = document.getElementById('mapModal');
  const mapGrid = document.getElementById('mapGrid');
  const mapModalClose = document.getElementById('mapModalClose');

  // 6. RENDER FLOORS NAVIGATION RAIL
  function renderFloorRail() {
    if (!floorRail) return;
    floorRail.innerHTML = '';

    const sectors = catalog.sectors || [];
    sectors.forEach(sec => {
      const btn = document.createElement('button');
      btn.className = 'floor-pill';
      btn.id = `floorBtn_${sec.id}`;

      // Calculate progress in this floor
      const [start, end] = sec.range;
      let solvedInSector = 0;
      for (let i = start; i <= end; i++) {
        if (state.solvedIds.includes(i)) solvedInSector++;
      }
      const totalInSector = (end - start + 1);

      btn.innerHTML = `
        <span class="floor-num">${sec.badge}</span>
        <span class="floor-name">${sec.name.split(':')[1] || sec.name}</span>
        <span class="floor-count">${solvedInSector}/${totalInSector}</span>
      `;

      btn.onclick = () => {
        audio.playClick();
        jumpToQuestionId(start);
      };

      floorRail.appendChild(btn);
    });

    updateFloorRailActive();
  }

  function updateFloorRailActive() {
    const q = allQuestions[state.currentIndex];
    if (!q) return;

    document.querySelectorAll('.floor-pill').forEach(btn => btn.classList.remove('active'));
    const curBtn = document.getElementById(`floorBtn_${q.sector}`);
    if (curBtn) {
      curBtn.classList.add('active');
      curBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  function formatTaskSpec(q) {
    const exp = q.expectedDiagram || {};
    
    let entList = (exp.entities || []).map(e => {
      let name = typeof e === 'string' ? e : e.name;
      let pkStr = (typeof e === 'object' && e.pk) ? ` &nbsp;•&nbsp; Birlamchi Kalit: <code style="color:#ffffff; background:#1c1c22; padding:1px 5px; border-radius:2px;">{PK} ${e.pk}</code>` : '';
      let weakStr = (typeof e === 'object' && e.isWeak) ? ` &nbsp;•&nbsp; <i style="color:#ffffff;">(Zaif Entitiy / Weak Entity — qo'sh hoshiya)</i>` : '';
      return `<li><b style="color:#ffffff;">${name}</b>${pkStr}${weakStr}</li>`;
    }).join('');

    let relList = (exp.relationships || []).map(r => {
      let rName = r.name ? ` &nbsp;•&nbsp; Ulam nomi: <i>'${r.name}'</i>` : '';
      let acStr = r.associationClass ? ` &nbsp;•&nbsp; <i style="color:#d0d0d8;">(Association Class — ulam atributi)</i>` : '';
      return `
        <li style="margin-bottom: 6px;">
          <b style="color:#ffffff;">${r.entity1}</b> &nbsp;<span class="mystery-mult">[ ?.. ? ]</span> &nbsp;↔&nbsp; <span class="mystery-mult">[ ?.. ? ]</span>&nbsp; <b style="color:#ffffff;">${r.entity2}</b>${rName}${acStr}
          <div style="font-size:11px; color:#9999a4; margin-top:2px;">↳ Multiplicity (kardinallik) chegarasini mijoz hikoyasidagi biznes qoidasidan mantiqiy toping</div>
        </li>
      `;
    }).join('');

    let subHtml = '';
    if (exp.subclasses) {
      const sub = exp.subclasses;
      subHtml = `
        <div class="task-spec-section" style="margin-top:6px;">
          <strong style="color:#ffffff;">⛛ Subklass Ierarxiyasi ({Constraint}):</strong>
          <p>Superklass: <b>${sub.superclass}</b> &nbsp;➔&nbsp; Quyi Subklasslar: <b>${(sub.subclasses || []).join(', ')}</b></p>
          <p>Cheklov turi: <span class="mystery-mult">[ ? Cheklov ? ]</span> &nbsp;•&nbsp; <span style="font-size:11px; color:#9999a4;">({Mandatory/Optional, Or/And} turini biznes qoidasidan aniqlang)</span></p>
        </div>
      `;
    }

    return `
      <div class="task-spec-section">
        <strong>1. Yaratilishi lozim bo'lgan Entitiylar va Kalitlar:</strong>
        <ul style="margin:4px 0 8px 16px;">${entList || '<li>Mijoz talabidan entitiyni aniqlang</li>'}</ul>
      </div>
      <div class="task-spec-section">
        <strong>2. Mantiqiy Ulamlar (Kardinallik / Multiplicity):</strong>
        <ul style="margin:4px 0 8px 16px;">${relList || '<li>Munosabat chizig\'ini torting</li>'}</ul>
      </div>
      ${subHtml}
      <div class="task-spec-section" style="margin-top:6px; border-top:1px solid #282830; padding-top:6px;">
        <strong>3. Asosiy Vazifa:</strong>
        <p style="color:#e2e2e8;">${q.taskUz || "Mijozning yuqoridagi hikoyasini diqqat bilan o'qing va har bir tomon uchun minimal/maksimal ishtirok kardinalligini toping."}</p>
      </div>
    `;
  }

  // 7. QUESTION LOADER & DISPLAY
  function loadCurrentQuestion() {
    const q = allQuestions[state.currentIndex];
    if (!q) return;

    // Badges & Header
    if (qFloorBadge) qFloorBadge.textContent = `${q.sector}-Qavat`;
    if (qNumberBadge) qNumberBadge.textContent = `Savol ${q.id} / 150`;
    if (qDifficultyBadge) qDifficultyBadge.textContent = q.difficulty || "O'rta";
    if (qTitle) qTitle.textContent = q.title;

    // Client Info
    if (clientName) clientName.textContent = q.clientName;
    if (clientRole) clientRole.textContent = q.clientRole;
    if (clientStory) clientStory.textContent = `"${q.story}"`;
    if (taskText) taskText.innerHTML = formatTaskSpec(q);

    // Set client in 2D Office Atelier
    if (officeEngine) {
      officeEngine.setClient(q);
    }

    // Always start with 100% BLANK EMPTY CANVAS! (User draws everything from scratch)
    if (eerCanvas) {
      eerCanvas.clear();
      eerCanvas.setStatus(`Savol ${q.id}: Canvas is empty. Start with "+ Entity" button.`);
    }

    // Reset feedback and hint
    if (feedbackBox) {
      const isSolved = state.solvedIds.includes(q.id);
      if (isSolved) {
        feedbackBox.className = 'feedback-box solved';
        feedbackBox.innerHTML = `
          <div class="feedback-icon">✓</div>
          <div class="feedback-content">
            <h4>Approved by Client</h4>
            <p>${q.explanation || "This conceptual EER model has been successfully approved."}</p>
          </div>
        `;
      } else {
        feedbackBox.className = 'feedback-box idle';
        feedbackBox.innerHTML = `
          <div class="feedback-icon">📐</div>
          <div class="feedback-content">
            <h4>Drafting Mode</h4>
            <p>Draft the EER diagram according to client requirements and click "Submit to Client".</p>
          </div>
        `;
      }
    }

    if (hintBox) {
      hintBox.style.display = 'none';
      hintBox.textContent = `Architect Advice: ${q.hint || "Mijoz talablaridagi multiplisitiy va birlamchi kalitlarni tekshiring."}`;
    }

    // Prev / Next button states
    if (btnPrev) btnPrev.disabled = (state.currentIndex === 0);
    if (btnNext) btnNext.disabled = (state.currentIndex === allQuestions.length - 1);

    updateHUD();
    updateFloorRailActive();
    saveState();
  }

  function updateHUD() {
    const solvedCount = state.solvedIds.length;
    const total = allQuestions.length;
    const percent = Math.round((solvedCount / total) * 100);

    if (hudProgressText) hudProgressText.textContent = `${solvedCount} / ${total} (${percent}%)`;
    if (hudProgressBar) hudProgressBar.style.width = `${percent}%`;
    if (hudXpText) hudXpText.textContent = `${state.xp} XP`;
  }

  // 8. VERIFICATION / SUBMISSION TO CLIENT
  function handleSubmit() {
    audio.playClick();
    const q = allQuestions[state.currentIndex];
    if (!q) return;

    const userDiagram = eerCanvas.getDiagram();
    const result = grader.grade(userDiagram, q);

    if (result.passed) {
      audio.playSuccess();
      const isNewSolve = !state.solvedIds.includes(q.id);
      if (isNewSolve) {
        state.solvedIds.push(q.id);
        const gainXp = q.difficulty.includes("Boss") ? 300 : 100;
        state.xp += gainXp;
      }

      // Office animation
      officeEngine.triggerDeploySuccess(q.title);
      officeEngine.setLiveSpeech("Mijoz: 'Ajoyib me\\'moriy yechim! EER sxemani tasdiqlayman!'", 220);

      // Feedback display
      if (feedbackBox) {
        feedbackBox.className = 'feedback-box success';
        feedbackBox.innerHTML = `
          <div class="feedback-icon">🎉</div>
          <div class="feedback-content">
            <h4>EXCELLENT! SCHEMA APPROVED!</h4>
            <p>${result.feedback}</p>
            <p class="explanation-note">${q.explanation || ""}</p>
          </div>
        `;
      }

      updateHUD();
      renderFloorRail();
      saveState();

    } else {
      audio.playError();
      officeEngine.triggerErrorAlert(result.feedback);
      officeEngine.setLiveSpeech("Mijoz: 'Me\\'moriy xatolik! Sxemani qayta ko\\'rib chiqing.'", 180);

      if (feedbackBox) {
        feedbackBox.className = 'feedback-box error';
        feedbackBox.innerHTML = `
          <div class="feedback-icon">⚠️</div>
          <div class="feedback-content">
            <h4>DIAGNOSTIC: SCHEMA MISMATCH</h4>
            <p>${result.feedback}</p>
          </div>
        `;
      }
    }
  }

  // 9. NAVIGATION
  function jumpToQuestionId(id) {
    const idx = allQuestions.findIndex(q => q.id === id);
    if (idx !== -1) {
      state.currentIndex = idx;
      loadCurrentQuestion();
      closeMapModal();
    }
  }

  function nextQuestion() {
    audio.playClick();
    if (state.currentIndex < allQuestions.length - 1) {
      state.currentIndex++;
      loadCurrentQuestion();
    }
  }

  function prevQuestion() {
    audio.playClick();
    if (state.currentIndex > 0) {
      state.currentIndex--;
      loadCurrentQuestion();
    }
  }

  // 10. MAP MODAL
  function openMapModal() {
    audio.playClick();
    if (!mapModal || !mapGrid) return;
    mapGrid.innerHTML = '';

    allQuestions.forEach((q, idx) => {
      const isSolved = state.solvedIds.includes(q.id);
      const isCurrent = (idx === state.currentIndex);

      const cell = document.createElement('button');
      cell.className = `map-cell ${isSolved ? 'solved' : ''} ${isCurrent ? 'current' : ''}`;
      cell.title = `${q.id}. ${q.title}`;
      cell.innerHTML = `
        <span class="cell-num">${q.id}</span>
        <span class="cell-status">${isSolved ? '✓' : ''}</span>
      `;

      cell.onclick = () => {
        state.currentIndex = idx;
        loadCurrentQuestion();
        closeMapModal();
      };

      mapGrid.appendChild(cell);
    });

    mapModal.style.display = 'flex';
  }

  function closeMapModal() {
    if (mapModal) mapModal.style.display = 'none';
  }

  // 11. BIND EVENTS
  if (btnSubmit) btnSubmit.onclick = handleSubmit;
  if (btnNext) btnNext.onclick = nextQuestion;
  if (btnPrev) btnPrev.onclick = prevQuestion;

  if (btnHint) {
    btnHint.onclick = () => {
      audio.playClick();
      if (hintBox) {
        hintBox.style.display = (hintBox.style.display === 'none') ? 'block' : 'none';
      }
    };
  }

  if (btnOpenMap) btnOpenMap.onclick = openMapModal;
  if (mapModalClose) mapModalClose.onclick = closeMapModal;

  if (btnResetProgress) {
    btnResetProgress.onclick = () => {
      if (confirm("Haqiqatan ham barcha 150 ta savol natijalarini tozalab qaytadan boshlamoqchimisiz?")) {
        state.solvedIds = [];
        state.xp = 0;
        state.currentIndex = 0;
        saveState();
        renderFloorRail();
        loadCurrentQuestion();
        alert("Progress has been reset!");
      }
    };
  }

  // Keyboard Shortcuts (Ctrl+Enter to submit, Arrow keys to navigate)
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      handleSubmit();
    }
  });

  // INITIAL BOOT
  renderFloorRail();
  loadCurrentQuestion();

})();
