/**
 * DATABASE SYSTEMS ACADEMY — 2-HAFTA: RELATSION SXEMA BOSHQARUVCHI (GAME CONTROLLER)
 * 150 ta Relyatsion Sxema Keyslari, draw.io Jadvallar Atelesi, 10 ta Qavat va Grader
 */

(function () {
  "use strict";

  // Master State
  const STATE = {
    currentQId: 1,
    solvedIds: new Set(),
    score: 0,
    salary: 3000,
    soundEnabled: true
  };

  let allQuestions = [];
  let relCanvas = null;
  let atelier2D = null;

  // ==========================================================================
  // 1. AUDIO SYNTHESIZER (WEB AUDIO API)
  // ==========================================================================
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  window.playSfx = function (type) {
    if (!STATE.soundEnabled) return;
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === 'click') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(480, now);
        osc.frequency.exponentialRampToValueAtTime(240, now + 0.05);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'success') {
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + i * 0.07);
          gain.gain.setValueAtTime(0, now + i * 0.07);
          gain.gain.linearRampToValueAtTime(0.18, now + i * 0.07 + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.07 + 0.45);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + i * 0.07);
          osc.stop(now + i * 0.07 + 0.5);
        });
      } else if (type === 'error') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(90, now + 0.18);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      }
    } catch (e) {}
  };

  // ==========================================================================
  // 2. INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Gather all 150 questions
    const q1 = window.QUESTIONS_1_50 || [];
    const q2 = window.QUESTIONS_51_100 || [];
    const q3 = window.QUESTIONS_101_150 || [];
    allQuestions = [...q1, ...q2, ...q3];

    // 2. Load LocalStorage
    loadSavedState();

    // 3. Initialize 2D Atelier Banner & Relational Canvas Engine
    if (window.Relational2DEngine) {
      atelier2D = new window.Relational2DEngine('consultCanvas');
    }
    if (window.RelationalCanvasEngine) {
      relCanvas = new window.RelationalCanvasEngine('relCanvasContainer');
    }

    // 4. Render 10 Floors & HUD
    renderSectorTabs();
    updateHUD();

    // 5. Load Current Question
    loadQuestion(STATE.currentQId);

    // 6. Bind Controls
    bindControls();

    // 7. Telegram WebApp Integration & Input Focus Fix
    if (window.Telegram && window.Telegram.WebApp) {
      try {
        window.Telegram.WebApp.ready();
        window.Telegram.WebApp.expand();
      } catch (e) {}
    }

    // Explicit focus for inputs/textarea/contenteditable on Telegram WebApp
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (target && (target.tagName === 'TEXTAREA' || target.tagName === 'INPUT' || target.getAttribute('contenteditable') === 'true')) {
        target.focus();
      }
    });
  });

  // ==========================================================================
  // 3. STATE PERSISTENCE
  // ==========================================================================
  function loadSavedState() {
    try {
      const saved = localStorage.getItem('DS_W2_PROGRESS');
      if (saved) {
        const data = JSON.parse(saved);
        if (data.solvedIds && Array.isArray(data.solvedIds)) {
          STATE.solvedIds = new Set(data.solvedIds);
        }
        if (data.currentQId) STATE.currentQId = data.currentQId;
        if (data.score) STATE.score = data.score;
        if (data.salary) STATE.salary = data.salary;
      }
    } catch (e) {}
  }

  function saveState() {
    try {
      const data = {
        solvedIds: Array.from(STATE.solvedIds),
        currentQId: STATE.currentQId,
        score: STATE.score,
        salary: STATE.salary
      };
      localStorage.setItem('DS_W2_PROGRESS', JSON.stringify(data));
    } catch (e) {}
  }

  // ==========================================================================
  // 4. TOP EXECUTIVE HUD
  // ==========================================================================
  function updateHUD() {
    const solved = STATE.solvedIds.size;
    const total = 150;
    const pct = Math.round((solved / total) * 100);

    let rank = "Kichik Sxema Me'mori";
    if (solved >= 135) rank = "Bosh Mantiqiy Arxitektor (Penthouse)";
    else if (solved >= 105) rank = "Katta Relyatsion Sxema Muhandisi";
    else if (solved >= 75) rank = "Yetakchi Jadvallar Modeleri";
    else if (solved >= 45) rank = "O'rta Relyatsion Modeler";
    else if (solved >= 15) rank = "Kichik Muhandis-Modeler";

    const elRank = document.getElementById('hudRankTitle');
    const elSalary = document.getElementById('hudSalary');
    const elCapital = document.getElementById('hudCapital');
    const elSolved = document.getElementById('hudSolved');
    const elProgress = document.getElementById('hudProgressFill');

    if (elRank) elRank.textContent = rank;
    if (elSalary) elSalary.textContent = `$${STATE.salary.toLocaleString()}/oy`;
    if (elCapital) elCapital.textContent = `$${STATE.score.toLocaleString()}`;
    if (elSolved) elSolved.textContent = `${solved} / ${total}`;
    if (elProgress) elProgress.style.width = `${pct}%`;
  }

  // ==========================================================================
  // 5. 10 SECTOR NAVIGATION TABS
  // ==========================================================================
  function renderSectorTabs() {
    const nav = document.getElementById('sectorNavList');
    if (!nav || !window.RELATIONAL_CATALOG) return;

    nav.innerHTML = '';
    const sectors = window.RELATIONAL_CATALOG.sectors || [];
    const currentQ = allQuestions.find(q => q.id === STATE.currentQId) || allQuestions[0];
    const currentSectorId = currentQ ? (currentQ.sector || Math.ceil(currentQ.id / 15)) : 1;

    sectors.forEach(sec => {
      const tab = document.createElement('button');
      tab.className = 'sector-tab' + (sec.id === currentSectorId ? ' active' : '');

      let allSolved = true;
      for (let i = sec.range[0]; i <= sec.range[1]; i++) {
        if (!STATE.solvedIds.has(i)) {
          allSolved = false;
          break;
        }
      }
      if (allSolved) tab.classList.add('completed');

      tab.innerHTML = `<span>${sec.badge || `${sec.id}F`}</span> <span>${sec.name.split(':')[1] || sec.name}</span>`;

      tab.addEventListener('click', () => {
        window.playSfx('click');
        loadQuestion(sec.range[0]);
      });

      nav.appendChild(tab);
    });
  }

  // ==========================================================================
  // 6. QUESTION STRIP & DOSSIER
  // ==========================================================================
  function loadQuestion(qId) {
    const q = allQuestions.find(item => item.id === qId);
    if (!q) return;

    STATE.currentQId = qId;
    saveState();

    renderSectorTabs();

    const secId = q.sector || Math.ceil(q.id / 15);
    const startQ = (secId - 1) * 15 + 1;
    const endQ = secId * 15;

    const strip = document.getElementById('floorQuestionStrip');
    if (strip) {
      strip.innerHTML = '';
      for (let i = startQ; i <= endQ; i++) {
        const dot = document.createElement('div');
        dot.className = 'q-dot' + (i === qId ? ' active' : '') + (STATE.solvedIds.has(i) ? ' completed' : '');
        dot.title = `Topshiriq #${i}`;
        dot.addEventListener('click', () => {
          window.playSfx('click');
          loadQuestion(i);
        });
        strip.appendChild(dot);
      }
    }

    const elFloor = document.getElementById('floorHeaderTitle');
    const elSub = document.getElementById('sectorSubTitle');
    const elQNum = document.getElementById('qNumberBadge');
    const elDiff = document.getElementById('qDifficultyBadge');
    const elSource = document.getElementById('qSourceBadge');
    const elTitle = document.getElementById('qTitle');
    const elClientDialogue = document.getElementById('clientDialogue');
    const elTask = document.getElementById('qTask');
    const elHint = document.getElementById('qHintBox');
    const elFeedback = document.getElementById('feedbackBox');

    if (elFloor) elFloor.textContent = `${secId}-Qavat: Relatsion Sxemaga O'tkazish`;
    if (elSub) elSub.textContent = q.difficulty || "Amaliy Keys";
    if (elQNum) elQNum.textContent = `Keys #${q.id} / 150`;
    if (elDiff) elDiff.textContent = q.difficulty || "O'rta";
    if (elSource) elSource.textContent = q.source || "L02 Relational Model";
    if (elTitle) elTitle.textContent = q.title || "Jadval Loyihalash";

    if (elClientDialogue) {
      elClientDialogue.innerHTML = `<strong>Tizimlar Rahbari:</strong> "${q.story || ''}"`;
    }

    if (elTask) elTask.textContent = q.taskUz || "Jadvalni belgilangan ustunlar va PK/FK bilan loyihalang.";

    if (elHint) {
      elHint.style.display = 'none';
      elHint.textContent = `💡 Maslahat: ${q.hint || "Birlamchi kalit [PK] va Tashqi kalit [FK] larni to'g'ri ko'rsating."}`;
    }
    if (elFeedback) {
      elFeedback.style.display = 'none';
      elFeedback.className = 'feedback-box';
    }

    if (atelier2D) {
      atelier2D.setClient("Tizimlar Rahbari", "Mijoz", q.story);
    }
    const tickerMessage = document.getElementById('tickerMessage');
    if (tickerMessage) tickerMessage.textContent = q.story || "Relyatsion sxemani shakllantiring.";

    // Render starter puzzle tables on canvas (No answers leaked!)
    if (relCanvas) {
      const exp = q.expectedSchema || {};
      const expTables = exp.tables || (exp.tableName ? [exp] : []);
      const count = expTables.length;
      const starterTables = expTables.map((t, idx) => ({
        tableName: t.tableName || t.name || `Jadval${idx + 1}`,
        columns: [
          { name: 'id', isPK: false }
        ],
        x: count === 1 ? 260 : (idx === 0 ? 80 : 420),
        y: 120
      }));
      relCanvas.renderSchema({ tables: starterTables, references: [] });
    }
  }

  // ==========================================================================
  // 7. BIND USER CONTROLS & WORKBENCH
  // ==========================================================================
  function bindControls() {
    const btnPrev = document.getElementById('btnPrevQ');
    const btnNext = document.getElementById('btnNextQ');

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        window.playSfx('click');
        if (STATE.currentQId > 1) loadQuestion(STATE.currentQId - 1);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        window.playSfx('click');
        if (STATE.currentQId < 150) loadQuestion(STATE.currentQId + 1);
      });
    }

    const btnHint = document.getElementById('btnToggleHint');
    if (btnHint) {
      btnHint.addEventListener('click', () => {
        window.playSfx('click');
        const box = document.getElementById('qHintBox');
        if (box) {
          box.style.display = box.style.display === 'none' ? 'block' : 'none';
        }
      });
    }

    // Toolbar buttons for draw.io Relational Studio
    const btnAddTable = document.getElementById('relBtnAddTable');
    if (btnAddTable) {
      btnAddTable.addEventListener('click', () => {
        window.playSfx('click');
        const name = prompt("Yangi jadval nomini kiriting:", "Kompaniya");
        if (name && relCanvas) {
          relCanvas.addTable({ tableName: name.trim() });
        }
      });
    }

    const btnResetTpl = document.getElementById('relBtnResetTemplate');
    if (btnResetTpl) {
      btnResetTpl.addEventListener('click', () => {
        window.playSfx('click');
        const q = allQuestions.find(item => item.id === STATE.currentQId);
        if (q && relCanvas) {
          const exp = q.expectedSchema || {};
          const expTables = exp.tables || (exp.tableName ? [exp] : []);
          const count = expTables.length;
          const starterTables = expTables.map((t, idx) => ({
            tableName: t.tableName || t.name || `Jadval${idx + 1}`,
            columns: [
              { name: 'id', isPK: false }
            ],
            x: count === 1 ? 260 : (idx === 0 ? 80 : 420),
            y: 120
          }));
          relCanvas.renderSchema({ tables: starterTables, references: [] });
        }
      });
    }

    const btnClearCanvas = document.getElementById('relBtnClearCanvas');
    if (btnClearCanvas) {
      btnClearCanvas.addEventListener('click', () => {
        window.playSfx('click');
        if (confirm("Chizilgan jadvallarni tozalashni xohlaysizmi?") && relCanvas) {
          relCanvas.clearCanvas();
        }
      });
    }

    const btnExportDrawio = document.getElementById('btnExportDrawio');
    if (btnExportDrawio) {
      btnExportDrawio.addEventListener('click', () => {
        window.playSfx('click');
        if (!relCanvas || !window.RELATIONAL_DRAWIO_EXPORTER) return;
        const currentSchema = relCanvas.exportCurrentSchema();
        const xml = window.RELATIONAL_DRAWIO_EXPORTER.exportToXml(currentSchema);

        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Relational_Schema_${STATE.currentQId}.drawio`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }

    // Verification Button
    const btnVerify = document.getElementById('btnVerifySchema');
    if (btnVerify) {
      btnVerify.addEventListener('click', verifySchema);
    }

    // Sound toggle
    const btnSound = document.getElementById('btnToggleSound');
    if (btnSound) {
      btnSound.addEventListener('click', () => {
        STATE.soundEnabled = !STATE.soundEnabled;
        btnSound.textContent = STATE.soundEnabled ? '🔊' : '🔇';
      });
    }

    // Reset Progress
    const btnReset = document.getElementById('btnResetProgress');
    if (btnReset) {
      btnReset.addEventListener('click', () => {
        if (confirm("Haqiqatan ham 2-moduldagi barcha natijalaringizni qayta o'rnatmoqchimisiz?")) {
          STATE.solvedIds.clear();
          STATE.score = 0;
          STATE.salary = 3000;
          saveState();
          updateHUD();
          loadQuestion(1);
        }
      });
    }

    // Modals
    setupModals();
  }

  // ==========================================================================
  // 8. SCHEMA VERIFICATION & GRADING (DIAGRAM ONLY)
  // ==========================================================================
  function verifySchema() {
    if (!window.RELATIONAL_GRADER) return;

    const q = allQuestions.find(item => item.id === STATE.currentQId);
    if (!q) return;

    let result = null;
    if (relCanvas) {
      const userSchema = relCanvas.exportCurrentSchema();
      result = window.RELATIONAL_GRADER.grade(userSchema, q);
    } else {
      result = window.RELATIONAL_GRADER.grade({ tables: [], references: [] }, q);
    }

    const elFeedback = document.getElementById('feedbackBox');
    if (!elFeedback) return;

    if (result.passed) {
      window.playSfx('success');
      if (atelier2D) atelier2D.triggerSuccess("Relyatsion Jadval Tasdiqlandi!");

      elFeedback.className = 'feedback-box success';
      elFeedback.innerHTML = `
        <strong>🎉 A'lo Natija!</strong> ${result.feedback || "Sxema relyatsion qoidalar va kalitlar bo'yicha to'g'ri loyihalandi."}
        <div style="margin-top:8px;">
          <button id="btnNextChallenge" class="btn btn-primary" style="padding:4px 12px;">Keyingi Topshiriqqa O'tish ▶</button>
        </div>
      `;
      elFeedback.style.display = 'block';

      if (!STATE.solvedIds.has(q.id)) {
        STATE.solvedIds.add(q.id);
        STATE.score += 100;
        STATE.salary += 150;
        saveState();
        updateHUD();
        renderSectorTabs();
      }

      const nextBtn = document.getElementById('btnNextChallenge');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          window.playSfx('click');
          if (STATE.currentQId < 150) {
            loadQuestion(STATE.currentQId + 1);
          }
        });
      }
    } else {
      window.playSfx('error');
      if (atelier2D) atelier2D.triggerError("Sxemada xatolik bor!");

      elFeedback.className = 'feedback-box error';
      elFeedback.innerHTML = `<strong>⚠️ Diqqat:</strong> ${result.feedback || "Jadval nomlari, Birlamchi Kalit [PK] yoki Tashqi Kalit [FK] larni qaytadan tekshiring."}`;
      elFeedback.style.display = 'block';
    }
  }

  // ==========================================================================
  // 9. MODALS: 150 MAP & OFFICE INCIDENT
  // ==========================================================================
  function setupModals() {
    const btnMap = document.getElementById('btnOpenMap');
    const mapModal = document.getElementById('mapModal');
    const btnCloseMap = document.getElementById('btnCloseMap');

    if (btnMap && mapModal) {
      btnMap.addEventListener('click', () => {
        window.playSfx('click');
        renderMapModal();
        mapModal.classList.add('open');
      });
    }
    if (btnCloseMap && mapModal) {
      btnCloseMap.addEventListener('click', () => mapModal.classList.remove('open'));
    }

    const btnIncident = document.getElementById('btnTriggerEvent');
    const incidentModal = document.getElementById('eventModal');
    const btnCloseIncident = document.getElementById('btnCloseEvent');

    if (btnIncident && incidentModal) {
      btnIncident.addEventListener('click', () => {
        window.playSfx('click');
        renderIncidentModal();
        incidentModal.classList.add('open');
      });
    }
    if (btnCloseIncident && incidentModal) {
      btnCloseIncident.addEventListener('click', () => incidentModal.classList.remove('open'));
    }
  }

  function renderMapModal() {
    const body = document.getElementById('mapModalBody');
    if (!body || !window.RELATIONAL_CATALOG) return;

    body.innerHTML = '';
    const sectors = window.RELATIONAL_CATALOG.sectors || [];

    sectors.forEach(sec => {
      const secBox = document.createElement('div');
      secBox.style.marginBottom = '14px';

      const secTitle = document.createElement('div');
      secTitle.style.fontWeight = '700';
      secTitle.style.fontSize = '12.5px';
      secTitle.style.color = '#c8a96e';
      secTitle.style.marginBottom = '6px';
      secTitle.textContent = `${sec.badge}: ${sec.name}`;
      secBox.appendChild(secTitle);

      const grid = document.createElement('div');
      grid.className = 'map-grid';

      for (let i = sec.range[0]; i <= sec.range[1]; i++) {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.style.padding = '6px 8px';
        btn.style.textAlign = 'center';
        btn.style.fontSize = '11px';
        btn.textContent = `#${i}`;

        if (STATE.solvedIds.has(i)) {
          btn.classList.add('correct-choice');
        }
        if (i === STATE.currentQId) {
          btn.style.borderColor = '#c8a96e';
          btn.style.fontWeight = 'bold';
        }

        btn.addEventListener('click', () => {
          window.playSfx('click');
          document.getElementById('mapModal').classList.remove('open');
          loadQuestion(i);
        });

        grid.appendChild(btn);
      }

      secBox.appendChild(grid);
      body.appendChild(secBox);
    });
  }

  function renderIncidentModal() {
    const body = document.getElementById('eventModalBody');
    if (!body) return;

    const events = [
      {
        speaker: "Katta Me'mor Atlas",
        title: "Subklasslarni Mapp Qilish Bahsi",
        avatar: "🏛️",
        desc: "Kompaniyada `Employee` superklassi ostida `Manager` va `Engineer` subklasslari mavjud. Cheklov: {Mandatory, Or}. Agar tashqi jadvallardan subklasslarga to'g'ridan-to'g'ri Tashqi Kalit (FK) yo'nalmagan bo'lsa, qaysi variant jadval sonini kamaytiradi?",
        choices: [
          { text: "Option 8A: 3 ta jadval ochish (Employee, Manager, Engineer)", correct: false },
          { text: "Option 8C: Faqat 1 ta umumiy Employee jadvali ochib, 'role' diskriminator ustunini qo'shish", correct: true },
          { text: "Option 8D: Subklasslarni umuman hisobga olmaslik", correct: false }
        ]
      },
      {
        speaker: "Ma'lumotlar Bazasi Administratori",
        title: "Crow's Foot da NULL Tashqi Kalit",
        avatar: "👨‍💻",
        desc: "Xodimlar jadvalida `deptNo` tashqi kaliti mavjud, lekin yangi ishga olingan xodimlar hali bo'limga biriktirilmagan bo'lishi mumkin. Crow's Foot chizig'ida qaysi belgi qo'yiladi?",
        choices: [
          { text: "Ikkita parallel chiziq (||) — majburiy NOT NULL", correct: false },
          { text: "Aylana va chiziq (o|) — ixtiyoriy, NULL bo'lishi mumkin", correct: true },
          { text: "Faqat qarg'a oyog'i", correct: false }
        ]
      }
    ];

    const ev = events[Math.floor(Math.random() * events.length)];

    body.innerHTML = `
      <div class="event-speaker-row">
        <div class="event-avatar">${ev.avatar}</div>
        <div>
          <div style="font-weight:700; color:#f2ede4; font-size:14px;">${ev.title}</div>
          <div style="font-size:11.5px; color:#c8a96e;">${ev.speaker}</div>
        </div>
      </div>
      <p style="font-size:13px; color:#c4bbb0; line-height:1.5;">${ev.desc}</p>
      <div class="event-choices" id="incidentChoices"></div>
    `;

    const choicesBox = document.getElementById('incidentChoices');
    ev.choices.forEach(ch => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = ch.text;

      btn.addEventListener('click', () => {
        if (ch.correct) {
          window.playSfx('success');
          btn.classList.add('correct-choice');
          STATE.score += 250;
          STATE.salary += 100;
          saveState();
          updateHUD();
          btn.textContent += " ✓ (To'g'ri! +$250 Kapital & +$100 Maosh)";
        } else {
          window.playSfx('error');
          btn.classList.add('wrong-choice');
          btn.textContent += " ✗ (Noto'g'ri yondashuv)";
        }
      });

      choicesBox.appendChild(btn);
    });
  }

})();
