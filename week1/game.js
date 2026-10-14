/**
 * DATABASE SYSTEMS ACADEMY — 1-HAFTA: KONSEPTUAL EER BOSHQARUVCHI (GAME CONTROLLER)
 * 150 ta Amaliy EER Keyslari, Draw.io Vizual Atelyesi, 10 ta Korporativ Qavat va Jonli Grader
 */

(function () {
  "use strict";

  // Master State
  const STATE = {
    currentQId: 1,
    solvedIds: new Set(),
    score: 0,
    salary: 2500,
    soundEnabled: true
  };

  let allQuestions = [];
  let eerCanvas = null;
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
        // Luxury major chord chime
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
    } catch (e) {
      // Audio not permitted or supported
    }
  };

  // ==========================================================================
  // 2. INITIALIZATION
  // ==========================================================================
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Gather all 150 questions
    const q1 = window.EER_CLIENTS_1_50 || [];
    const q2 = window.EER_CLIENTS_51_100 || [];
    const q3 = window.EER_CLIENTS_101_150 || [];
    allQuestions = [...q1, ...q2, ...q3];

    // 2. Load LocalStorage
    loadSavedState();

    // 3. Initialize 2D Atelier Canvas & EER Studio Engine
    if (window.Atelier2DEngine) {
      atelier2D = new window.Atelier2DEngine('consultCanvas');
    }
    if (window.EERCanvasEngine) {
      eerCanvas = new window.EERCanvasEngine('eerCanvasContainer');
    }

    // 4. Render 10 Floors & HUD
    renderSectorTabs();
    updateHUD();

    // 5. Load Current Question
    loadQuestion(STATE.currentQId);

    // 6. Bind User Controls
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
      const saved = localStorage.getItem('DS_W1_PROGRESS');
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
      localStorage.setItem('DS_W1_PROGRESS', JSON.stringify(data));
    } catch (e) {}
  }

  // ==========================================================================
  // 4. TOP EXECUTIVE HUD
  // ==========================================================================
  function updateHUD() {
    const solved = STATE.solvedIds.size;
    const total = 150;
    const pct = Math.round((solved / total) * 100);

    // Ranks based on solved count
    let rank = "Kichik Ma'lumotlar Me'mori";
    if (solved >= 135) rank = "Bosh Arxitektor & Hamkor (Penthouse)";
    else if (solved >= 105) rank = "Katta EER Tizim Muhandisi";
    else if (solved >= 75) rank = "Yetakchi Mantiqiy Modeler";
    else if (solved >= 45) rank = "O'rta Darajali Modeler";
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
    if (!nav || !window.EER_CATALOG) return;

    nav.innerHTML = '';
    const sectors = window.EER_CATALOG.sectors || [];
    const currentQ = allQuestions.find(q => q.id === STATE.currentQId) || allQuestions[0];
    const currentSectorId = currentQ ? (currentQ.sector || Math.ceil(currentQ.id / 15)) : 1;

    sectors.forEach(sec => {
      const tab = document.createElement('button');
      tab.className = 'sector-tab' + (sec.id === currentSectorId ? ' active' : '');

      // Check if all 15 questions in this sector are solved
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

    // 1. Sector Tabs Update
    renderSectorTabs();

    // 2. 15-Dot Strip
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

    // 3. Dossier Metadata
    const elFloor = document.getElementById('floorHeaderTitle');
    const elSub = document.getElementById('sectorSubTitle');
    const elQNum = document.getElementById('qNumberBadge');
    const elDiff = document.getElementById('qDifficultyBadge');
    const elSource = document.getElementById('qSourceBadge');
    const elTitle = document.getElementById('qTitle');
    const elClientAvatar = document.getElementById('clientAvatar');
    const elClientDialogue = document.getElementById('clientDialogue');
    const elTask = document.getElementById('qTask');
    const elHint = document.getElementById('qHintBox');
    const elFeedback = document.getElementById('feedbackBox');

    if (elFloor) elFloor.textContent = `${secId}-Qavat: Konseptual EER Modellashtirish`;
    if (elSub) elSub.textContent = q.difficulty || "Amaliy Keys";
    if (elQNum) elQNum.textContent = `Keys #${q.id} / 150`;
    if (elDiff) elDiff.textContent = q.difficulty || "O'rta";
    if (elSource) elSource.textContent = "Seminar 01 • ERD";
    if (elTitle) elTitle.textContent = q.title || "EER Modellashtirish";

    if (elClientAvatar) elClientAvatar.textContent = q.clientAvatar === 'banker' ? '🏦' : '💼';
    if (elClientDialogue) {
      elClientDialogue.innerHTML = `<strong>${q.clientName || 'Mijoz'} (${q.clientRole || 'Buyurtmachi'}):</strong> "${q.story || ''}"`;
    }

    if (elTask) {
      elTask.textContent = q.taskUz || "Entitiylarni chizing va to'g'ri bog'lang.";
      let btnDetail = document.getElementById('btnChallengeDetail');
      if (!btnDetail) {
        btnDetail = document.createElement('button');
        btnDetail.id = 'btnChallengeDetail';
        btnDetail.className = 'btn-challenge-detail';
        btnDetail.type = 'button';
        elTask.parentNode.appendChild(btnDetail);
      }
      btnDetail.innerHTML = `<span>📖 Batafsil</span> <small style="opacity:0.85;">(Komandani o'rganish)</small>`;
      btnDetail.onclick = () => {
        if (window.databaseEncyclopedia) {
          window.databaseEncyclopedia.openForQuestion(q, 1);
        }
      };
    }

    // Hide hints and feedback initially
    if (elHint) {
      elHint.style.display = 'none';
      elHint.textContent = `💡 Maslahat: ${q.hint || "Mijoz talablaridagi 1..1 yoki 1..* bog'lanishlarga e'tibor bering."}`;
    }
    if (elFeedback) {
      elFeedback.style.display = 'none';
      elFeedback.className = 'feedback-box';
    }

    // 4. Update 2D Atelier Banner
    if (atelier2D) {
      atelier2D.setClient(q.clientName, q.clientRole, q.story);
    }
    const tickerSpeaker = document.getElementById('tickerSpeaker');
    const tickerMessage = document.getElementById('tickerMessage');
    if (tickerSpeaker) tickerSpeaker.textContent = q.clientRole ? q.clientRole.toUpperCase() : "BUYURTMACHI";
    if (tickerMessage) tickerMessage.textContent = q.story || "Modelni shakllantiring.";

    // 5. Concept Anatomy Card
    renderConceptAnatomy(q);

    // 6. Load Starter Diagram into EER Canvas Engine
    if (eerCanvas) {
      eerCanvas.loadStarterDiagram(q.starterDiagram);
    }
  }

  function renderConceptAnatomy(q) {
    const cardCode = document.getElementById('cmdCardCode');
    const cardBody = document.getElementById('cmdCardBody');
    if (!cardCode || !cardBody) return;

    cardCode.textContent = "EER_NOTATION_RULE";
    cardBody.innerHTML = `
      <p style="margin-bottom:6px;"><strong>1. Entitiy:</strong> Mustaqil ob'ekt to'g'ri to'rtburchak shaklida chiziladi va ichiga uning atributlari yoziladi.</p>
      <p style="margin-bottom:6px;"><strong>2. Multiplicity:</strong> UML da <code>1..1</code> (qat'iy bitta), <code>0..1</code> (ixtiyoriy), <code>1..*</code> (kamida bitta), <code>0..*</code> (ixtiyoriy ko'p) munosabat chegaralari qo'yiladi.</p>
      <p style="margin-bottom:6px;"><strong>3. Zaif Entitiy (Weak):</strong> O'zining birlamchi kalitiga ega bo'lmagan ob'ekt ikki qavatli hoshiya (double rectangle) bilan belgilanadi.</p>
      <p><strong>4. Aloqa Rombo (Diamond):</strong> Ikki yoki undan ortiq entitiylarni bog'lovchi fe'l munosabat (masalan: <em>Manages</em>, <em>Contains</em>).</p>
    `;
  }

  // ==========================================================================
  // 7. BIND USER CONTROLS & WORKBENCH
  // ==========================================================================
  function bindControls() {
    // Nav Prev / Next buttons
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

    // Toggle Hint
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

    // Concept Anatomy Toggle
    const btnToggleCard = document.getElementById('btnToggleCmdCard');
    if (btnToggleCard) {
      btnToggleCard.addEventListener('click', () => {
        const body = document.getElementById('cmdCardBody');
        const arrow = document.getElementById('cmdCardToggleArrow');
        if (body) {
          const isOpen = body.style.display !== 'none';
          body.style.display = isOpen ? 'none' : 'block';
          if (arrow) arrow.textContent = isOpen ? '▾' : '▴';
        }
      });
    }

    // EER Studio Canvas Toolbar Controls
    const btnAddEnt = document.getElementById('eerBtnAddEntity');
    if (btnAddEnt) {
      btnAddEnt.addEventListener('click', () => {
        window.playSfx('click');
        const name = prompt("Yangi Entitiy nomini kiriting:", "Kompaniya");
        if (name && eerCanvas) {
          eerCanvas.addEntity({ name: name.trim() });
        }
      });
    }

    const btnAddRel = document.getElementById('eerBtnAddRel');
    if (btnAddRel) {
      btnAddRel.addEventListener('click', () => {
        window.playSfx('click');
        const name = prompt("Aloqa (Romb) nomini kiriting:", "Boshqaradi");
        if (name && eerCanvas) {
          eerCanvas.addRelationship({ name: name.trim() });
        }
      });
    }

    const btnToggleWeak = document.getElementById('eerBtnToggleWeak');
    if (btnToggleWeak) {
      btnToggleWeak.addEventListener('click', () => {
        window.playSfx('click');
        if (eerCanvas) eerCanvas.toggleSelectedWeak();
      });
    }

    const btnResetTemplate = document.getElementById('eerBtnResetTemplate');
    if (btnResetTemplate) {
      btnResetTemplate.addEventListener('click', () => {
        window.playSfx('click');
        const q = allQuestions.find(item => item.id === STATE.currentQId);
        if (q && eerCanvas) {
          eerCanvas.loadStarterDiagram(q.starterDiagram);
        }
      });
    }

    const btnClearCanvas = document.getElementById('eerBtnClearCanvas');
    if (btnClearCanvas) {
      btnClearCanvas.addEventListener('click', () => {
        window.playSfx('click');
        if (confirm("Chizilgan diagrammani tozalashni xohlaysizmi?") && eerCanvas) {
          eerCanvas.clearCanvas();
        }
      });
    }

    // Quick Multiplicity Preset Chips
    document.querySelectorAll('.token-chip[data-mult]').forEach(chip => {
      chip.addEventListener('click', () => {
        const m = chip.getAttribute('data-mult');
        if (m && eerCanvas) {
          eerCanvas.setMultiplicityForSelected(m);
        }
      });
    });

    // Verification Button
    const btnVerify = document.getElementById('btnVerifyDiagram');
    if (btnVerify) {
      btnVerify.addEventListener('click', verifyDiagram);
    }

    // Export .drawio XML Button
    const btnExport = document.getElementById('btnExportDrawio');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        window.playSfx('click');
        if (!eerCanvas || !window.DRAWIO_EXPORTER) return;
        const currentDiagram = eerCanvas.exportCurrentDiagram();
        const xml = window.DRAWIO_EXPORTER.exportToXml(currentDiagram);

        // Download as .drawio file
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `EER_Challenge_${STATE.currentQId}.drawio`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
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
        if (confirm("Haqiqatan ham 1-moduldagi barcha natijalaringizni qayta o'rnatmoqchimisiz?")) {
          STATE.solvedIds.clear();
          STATE.score = 0;
          STATE.salary = 2500;
          saveState();
          updateHUD();
          loadQuestion(1);
        }
      });
    }

    // Modals: Map & Incident
    setupModals();
  }

  // ==========================================================================
  // 8. DIAGRAM VERIFICATION & GRADING
  // ==========================================================================
  function verifyDiagram() {
    if (!eerCanvas || !window.EER_GRADER) return;

    const q = allQuestions.find(item => item.id === STATE.currentQId);
    if (!q) return;

    const userDiagram = eerCanvas.exportCurrentDiagram();
    const result = window.EER_GRADER.grade(userDiagram, q);

    const elFeedback = document.getElementById('feedbackBox');
    if (!elFeedback) return;

    if (result.passed) {
      window.playSfx('success');
      if (atelier2D) atelier2D.triggerSuccess("EER Diagramma Qabul Qilindi!");

      elFeedback.className = 'feedback-box success';
      elFeedback.innerHTML = `
        <strong>🎉 A'lo Natija!</strong> ${result.feedback || "Mijoz siz tuzgan EER modelni to'liq tasdiqladi."}
        <div style="margin-top:8px;">
          <button id="btnNextChallenge" class="btn btn-primary" style="padding:4px 12px;">Keyingi Topshiriqqa O'tish ▶</button>
        </div>
      `;
      elFeedback.style.display = 'block';

      // State updates
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
      if (atelier2D) atelier2D.triggerError("Diagrammada nomutanosiblik bor!");

      elFeedback.className = 'feedback-box error';
      elFeedback.innerHTML = `<strong>⚠️ Diqqat:</strong> ${result.feedback || "Sxemada xatoliklar mavjud. Qaytadan tekshiring."}`;
      elFeedback.style.display = 'block';
    }
  }

  // ==========================================================================
  // 9. MODALS: 150 MAP & OFFICE INCIDENT
  // ==========================================================================
  function setupModals() {
    // 150 Map
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

    // Incident Modal
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
    if (!body || !window.EER_CATALOG) return;

    body.innerHTML = '';
    const sectors = window.EER_CATALOG.sectors || [];

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
        title: "Boshqaruv Kengashining Shoshilinch Buyurtmasi",
        avatar: "🏛️",
        desc: "Kompaniya direktorlar kengashi yangi 'Loyihalar' va 'Xodimlar' o'rtasida ko'pdan-ko'pga (M:N) munosabat o'rnatishni talab qilmoqda. Lekin har bir xodim loyihada nechta soat ishlaganini saqlash kerak. Qaysi yechim eng to'g'ri?",
        choices: [
          { text: "Loyihalar entitiysiga xodimlar soni degan ustun qo'shish", correct: false },
          { text: "WorksOn nomli aloqa sinfi (Association Class) ochib, 'hours' atributini unga biriktirish", correct: true },
          { text: "Xodimlar entitiysiga loyiha soatlarini oddiy matn sifatida kiritish", correct: false }
        ]
      },
      {
        speaker: "Auditor Malika Saidova",
        title: "Fan Trap Xavfi Aniqlanganda",
        avatar: "👩‍💼",
        desc: "Filial (Branch) entitiysidan bir vaqtda Xodimlar (Staff) va Mijozlar (Client) ga 1:* munosabat tarmoqlangan. Natijada qaysi xodim qaysi mijozga xizmat qilgani noaniq bo'lib qoldi. Buni qanday hal qilamiz?",
        choices: [
          { text: "Aloqalarni o'zgartirmasdan qoldirish", correct: false },
          { text: "Mijozni to'g'ridan-to'g'ri xodim bilan (Staff 1 --- * Client) bog'lash orqali Fan Trap tuzog'ini bartaraf qilish", correct: true },
          { text: "Filial entitiysini umuman o'chirib tashlash", correct: false }
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
