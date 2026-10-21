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
    // 0. Initialize I18N Engine
    if (window.I18N) {
      window.I18N.init();
      window.onLanguageChange = function (lang) {
        updateHUD();
        renderSectorTabs();
        loadQuestion(STATE.currentQId);
        if (eerCanvas && typeof eerCanvas.renderLinks === 'function') {
          eerCanvas.renderLinks();
        }
      };
    }

    // 1. Gather all questions (1-200)
    const q1 = window.EER_CLIENTS_1_50 || [];
    const q2 = window.EER_CLIENTS_51_100 || [];
    const q3 = window.EER_CLIENTS_101_150 || [];
    const q4 = window.EER_CLIENTS_151_200 || [];
    allQuestions = [...q1, ...q2, ...q3, ...q4];

    // 2. Load LocalStorage
    loadSavedState();

    // 3. Initialize 2D Atelier Canvas & EER Studio Engine
    if (window.Atelier2DEngine) {
      atelier2D = new window.Atelier2DEngine('consultCanvas');
    }
    if (window.EERCanvasEngine) {
      eerCanvas = new window.EERCanvasEngine('eerCanvasContainer');

      // W1 Real-Time Auto-Save: Persists model continuously for seamless W2 continuity
      let autoSaveW1Timer = null;
      eerCanvas.onChange = function(diagram) {
        if (autoSaveW1Timer) clearTimeout(autoSaveW1Timer);
        autoSaveW1Timer = setTimeout(() => {
          if (STATE.currentQId && diagram && diagram.entities && diagram.entities.length > 0) {
            localStorage.setItem('DS_W1_DIAGRAM_' + STATE.currentQId, JSON.stringify(diagram));
            localStorage.setItem('DS_W1_UPDATED_' + STATE.currentQId, Date.now().toString());
          }
        }, 200);
      };
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
      const saved = localStorage.getItem('DS_W1_PROGRESS') || localStorage.getItem('WIUT_DS_W1_PROGRESS') || localStorage.getItem('ACADEMY_DS_W1_PROGRESS');
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
      const json = JSON.stringify(data);
      localStorage.setItem('DS_W1_PROGRESS', json);
      localStorage.setItem('WIUT_DS_W1_PROGRESS', json);
    } catch (e) {}
  }

  // ==========================================================================
  // 3.5. QUESTION SEQUENCE NAVIGATION HELPERS
  // ==========================================================================
  function getQuestionSequence() {
    const seq = [];
    for (let i = 1; i <= 15; i++) seq.push(i);
    // Sector 2: 16..30 then 151..200
    for (let i = 16; i <= 30; i++) seq.push(i);
    for (let i = 151; i <= 200; i++) seq.push(i);
    // Sectors 3-10: 31..150
    for (let i = 31; i <= 150; i++) seq.push(i);
    return seq;
  }

  function getNextQuestionId(currId) {
    const seq = getQuestionSequence();
    const idx = seq.indexOf(currId);
    if (idx >= 0 && idx < seq.length - 1) return seq[idx + 1];
    return null;
  }

  function getPrevQuestionId(currId) {
    const seq = getQuestionSequence();
    const idx = seq.indexOf(currId);
    if (idx > 0) return seq[idx - 1];
    return null;
  }

  // ==========================================================================
  // 4. TOP EXECUTIVE HUD
  // ==========================================================================
  function updateHUD() {
    const solved = STATE.solvedIds.size;
    const total = allQuestions.length || 200;
    const pct = Math.round((solved / total) * 100);

    const isEn = window.I18N && window.I18N.getLang() === 'en';
    const t = (k, fb) => (window.I18N ? window.I18N.t(k, fb) : fb);

    // Ranks based on solved count
    let rank = t('rank_1', "Kichik Ma'lumotlar Me'mori");
    if (solved >= 180) rank = t('rank_6', "Bosh Arxitektor & Hamkor (Penthouse)");
    else if (solved >= 140) rank = t('rank_5', "Katta EER Tizim Muhandisi");
    else if (solved >= 100) rank = t('rank_4', "Yetakchi Mantiqiy Modeler");
    else if (solved >= 60) rank = t('rank_3', "O'rta Darajali Modeler");
    else if (solved >= 20) rank = t('rank_2', "Kichik Muhandis-Modeler");

    const elRank = document.getElementById('hudRankTitle');
    const elSalary = document.getElementById('hudSalary');
    const elCapital = document.getElementById('hudCapital');
    const elSolved = document.getElementById('hudSolved');
    const elProgress = document.getElementById('hudProgressFill');

    if (elRank) elRank.textContent = rank;
    const ballSuffix = t('salary_suffix', ' Ball');
    if (elSalary) elSalary.textContent = `${STATE.salary.toLocaleString()}${ballSuffix}`;
    if (elCapital) elCapital.textContent = `${STATE.score.toLocaleString()}${ballSuffix}`;
    if (elSolved) elSolved.textContent = `${solved} / ${total}`;
    if (elProgress) elProgress.style.width = `${pct}%`;

    if (window.I18N && typeof window.I18N.applyDOM === 'function') {
      window.I18N.applyDOM();
    }
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

    const isEn = window.I18N && window.I18N.getLang() === 'en';

    sectors.forEach(sec => {
      const tab = document.createElement('button');
      tab.className = 'sector-tab' + (sec.id === currentSectorId ? ' active' : '');

      // Check if all questions in this sector are solved
      const secQs = allQuestions.filter(item => (item.sector || Math.ceil(item.id / 15)) === sec.id);
      let allSolved = secQs.length > 0 ? secQs.every(item => STATE.solvedIds.has(item.id)) : true;
      if (secQs.length === 0) {
        for (let i = sec.range[0]; i <= sec.range[1]; i++) {
          if (!STATE.solvedIds.has(i)) {
            allSolved = false;
            break;
          }
        }
      }
      if (allSolved) tab.classList.add('completed');

      const secBadge = (isEn && window.I18N ? window.I18N.t(`sec_${sec.id}_badge`) : null) || sec.badge || `${sec.id}F`;
      const fullSecName = (isEn && window.I18N ? window.I18N.t(`sec_${sec.id}_name`) : null) || sec.name;
      const cleanName = fullSecName.includes(':') ? fullSecName.split(':')[1].trim() : fullSecName;

      tab.innerHTML = `<span>${secBadge}</span> <span>${cleanName}</span>`;

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

    // Immediately save current question before switching
    if (STATE.currentQId && eerCanvas && STATE.currentQId !== qId) {
      const cur = eerCanvas.exportCurrentDiagram();
      if (cur && cur.entities && cur.entities.length > 0) {
        localStorage.setItem('DS_W1_DIAGRAM_' + STATE.currentQId, JSON.stringify(cur));
        localStorage.setItem('DS_W1_UPDATED_' + STATE.currentQId, Date.now().toString());
      }
    }

    STATE.currentQId = qId;
    saveState();

    // 1. Sector Tabs Update
    renderSectorTabs();

    // 2. Sector Question Dot Strip
    const secId = q.sector || (q.id > 150 ? 2 : Math.ceil(q.id / 15));
    const secQuestions = allQuestions.filter(item => (item.sector || Math.ceil(item.id / 15)) === secId);

    // Sort order: 16..30 first, then 151..200 for Sector 2
    secQuestions.sort((a, b) => {
      if (secId === 2) {
        const orderA = a.id > 100 ? a.id : a.id - 1000;
        const orderB = b.id > 100 ? b.id : b.id - 1000;
        return orderA - orderB;
      }
      return a.id - b.id;
    });

    const strip = document.getElementById('floorQuestionStrip');
    if (strip) {
      strip.innerHTML = '';
      secQuestions.forEach(sq => {
        const dot = document.createElement('div');
        dot.className = 'q-dot' + (sq.id === qId ? ' active' : '') + (STATE.solvedIds.has(sq.id) ? ' completed' : '');
        dot.title = `Topshiriq #${sq.id}: ${sq.title || ''}`;
        dot.addEventListener('click', () => {
          window.playSfx('click');
          loadQuestion(sq.id);
        });
        strip.appendChild(dot);
        if (sq.id === qId) {
          try {
            dot.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } catch (_) {}
        }
      });
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

    const isEn = window.I18N && window.I18N.getLang() === 'en';
    const isRu = window.I18N && window.I18N.getLang() === 'ru';
    const t = (k, fb) => (window.I18N ? window.I18N.t(k, fb) : fb);

    if (elFloor) elFloor.textContent = isRu ? `Этаж ${secId}: Концептуальное EER моделирование` : (isEn ? `Floor ${secId}: Conceptual EER Modeling` : `${secId}-Qavat: Konseptual EER Modellashtirish`);
    if (elSub) elSub.textContent = isRu ? "Аналитический практический кейс" : (isEn ? "Analytical Practical Case" : (q.difficulty || "Amaliy Keys"));
    if (elQNum) elQNum.textContent = `${isRu ? 'Кейс' : (isEn ? 'Case' : 'Keys')} #${q.id} / ${allQuestions.length || 200}`;
    if (elDiff) {
      let diffText = q.difficulty || "O'rta";
      if (isRu) {
        if (/boshlang/i.test(diffText)) diffText = t('diff_basic', 'Начальный');
        else if (/yuqori|qiyin/i.test(diffText)) diffText = t('diff_hard', 'Продвинутый');
        else if (/ekspert/i.test(diffText)) diffText = t('diff_expert', 'Эксперт');
        else diffText = t('diff_medium', 'Средний');
      } else if (isEn) {
        if (/boshlang/i.test(diffText)) diffText = t('diff_basic', 'Beginner');
        else if (/yuqori|qiyin/i.test(diffText)) diffText = t('diff_hard', 'Advanced');
        else if (/ekspert/i.test(diffText)) diffText = t('diff_expert', 'Expert');
        else diffText = t('diff_medium', 'Intermediate');
      }
      elDiff.textContent = diffText;
    }
    if (elSource) elSource.textContent = isRu ? "Семинар 01 • ERD" : (isEn ? "Seminar 01 • ERD" : "Seminar 01 • ERD");
    if (elTitle) elTitle.textContent = isRu ? (q.titleRu || q.titleEn || q.title || "Моделирование EER") : (isEn ? (q.titleEn || q.title || "EER Modeling") : (q.title || "EER Modellashtirish"));

    // Render Authentic Academic Case Study (Seminar 1 Standard - Image 2)
    const elNarrative = document.getElementById('caseNarrativeBox');
    const elTasks = document.getElementById('caseTasksBox');

    function formatInlineMarkdown(str) {
      if (!str) return '';
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code style="background:rgba(212,175,55,0.14); color:#ffd166; padding:1px 5px; border-radius:3px; font-family:\'JetBrains Mono\', monospace; font-size:12px;">$1</code>');
    }

    if (elNarrative) {
      const storyRaw = isRu ? (q.storyRu || q.storyEn || q.story || '') : (isEn ? (q.storyEn || q.story || '') : (q.story || ''));
      const paras = storyRaw.split('\n\n').filter(p => p.trim());
      elNarrative.innerHTML = paras.map(p => `<p>${formatInlineMarkdown(p)}</p>`).join('');
    }

    if (elTasks) {
      const inst = isRu
        ? (q.instructionRu || q.instructionEn || q.instruction || "Спроектируйте концептуальную модель на основе бизнес-требований.")
        : (isEn 
          ? (q.instructionEn || q.instruction || "Design the conceptual model based on business requirements.")
          : (q.instruction || (q.caseStudy?.tasks ? q.caseStudy.tasks[0] : (q.taskUz ? q.taskUz.split('\n')[0] : "Biznes talablari asosida modelni shakllantiring."))));
      
      elTasks.innerHTML = `
        <div class="case-instruction-pill" style="display:flex; align-items:flex-start; gap:8px; padding:10px 14px; background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:6px; color:#f0f0f0; font-size:13px; line-height:1.5;">
          <span style="font-size:16px;">🎯</span>
          <div><strong>${isRu ? 'Задание:' : (isEn ? 'Task:' : 'Topshiriq:')}</strong> ${formatInlineMarkdown(inst.replace(/^[a-d]\)\s*/i, ''))}</div>
        </div>
      `;

      let btnDetail = document.getElementById('btnChallengeDetail');
      if (!btnDetail) {
        btnDetail = document.createElement('button');
        btnDetail.id = 'btnChallengeDetail';
        btnDetail.className = 'btn-challenge-detail';
        btnDetail.type = 'button';
        btnDetail.style.marginTop = '12px';
        elTasks.appendChild(btnDetail);
      }
      btnDetail.innerHTML = `<span>📖 ${isRu ? 'Подробно' : (isEn ? 'Detailed' : 'Batafsil')}</span> <small style="opacity:0.85;">(${isRu ? 'Теория и примеры' : (isEn ? 'Theory & Examples' : 'Nazariya & Misollar')})</small>`;
      btnDetail.onclick = () => {
        if (window.databaseEncyclopedia) {
          window.databaseEncyclopedia.openForQuestion(q, 1);
        }
      };
    }

    // Hide hints and feedback initially
    if (elHint) {
      elHint.style.display = 'none';
      const hintContent = isRu
        ? (q.hintRu || q.hintEn || q.hint || "Обратите внимание на необходимые сущности и мощности связей.")
        : (isEn ? (q.hintEn || q.hint || "Focus on the required entities and their relationship cardinalities.") : (q.hint || "Talablardagi entitiylar va munosabatlarga e'tibor bering."));
      elHint.textContent = `💡 ${isRu ? 'Подсказка:' : (isEn ? 'Hint:' : 'Maslahat:')} ${hintContent}`;
    }
    if (elFeedback) {
      elFeedback.style.display = 'none';
      elFeedback.className = 'feedback-box';
    }

    // 4. Update 2D Atelier Banner (Short mentor advice, no story duplicate)
    if (atelier2D) {
      atelier2D.setClient(q.clientName, (isRu && q.clientRoleRu ? q.clientRoleRu : q.clientRole), (isRu && q.titleRu ? q.titleRu : q.title));
    }
    const tickerSpeaker = document.getElementById('tickerSpeaker');
    const tickerMessage = document.getElementById('tickerMessage');
    if (tickerSpeaker) tickerSpeaker.textContent = q.clientRole ? (isRu && q.clientRoleRu ? q.clientRoleRu.toUpperCase() : q.clientRole.toUpperCase()) : (isRu ? "ГЛАВНЫЙ АРХИТЕКТОР АТЛАС" : (isEn ? "CHIEF ARCHITECT ATLAS" : "BOSH ME'MOR ATLAS"));
    if (tickerMessage) tickerMessage.textContent = isRu ? "Изучите требования клиента и спроектируйте правильную диаграмму EER ниже." : (isEn ? "Analyze the client requirements and design the correct EER diagram below." : "Mijoz talablarini o'rganing va quyidagi EER diagrammasini to'g'ri shakllantiring.");

    // 5. Concept Anatomy Card
    renderConceptAnatomy(q);

    // 6. Load Starter Diagram into EER Canvas Engine (or student's saved work)
    if (eerCanvas) {
      const savedUserDiagram = localStorage.getItem(`DS_W1_DIAGRAM_${qId}`);
      if (savedUserDiagram) {
        try {
          const parsed = JSON.parse(savedUserDiagram);
          const stEntCount = (q.starterDiagram && q.starterDiagram.entities) ? q.starterDiagram.entities.length : 0;
          const stRelCount = (q.starterDiagram && q.starterDiagram.relationships) ? q.starterDiagram.relationships.length : 0;
          const userEntCount = (parsed && parsed.entities) ? parsed.entities.length : 0;
          const userRelCount = (parsed && parsed.relationships) ? parsed.relationships.length : 0;

          // If question is unsolved and previously saved diagram was missing entities or relationships from before update
          if (!STATE.solvedIds.has(qId) && (userEntCount < stEntCount || userRelCount < stRelCount)) {
            eerCanvas.loadStarterDiagram(q.starterDiagram);
          } else if (parsed && parsed.entities && parsed.entities.length > 0) {
            eerCanvas.loadStarterDiagram(parsed);
          } else {
            eerCanvas.loadStarterDiagram(q.starterDiagram);
          }
        } catch (e) {
          eerCanvas.loadStarterDiagram(q.starterDiagram);
        }
      } else {
        eerCanvas.loadStarterDiagram(q.starterDiagram);
      }
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
        const prevId = getPrevQuestionId(STATE.currentQId);
        if (prevId) loadQuestion(prevId);
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        window.playSfx('click');
        const nextId = getNextQuestionId(STATE.currentQId);
        if (nextId) loadQuestion(nextId);
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

    const btnAddRecursive = document.getElementById('eerBtnAddRecursive');
    if (btnAddRecursive) {
      btnAddRecursive.addEventListener('click', () => {
        window.playSfx('click');
        if (eerCanvas) eerCanvas.addRecursiveEntityOrLoop();
      });
    }

    const btnResetTemplate = document.getElementById('eerBtnResetTemplate');
    if (btnResetTemplate) {
      btnResetTemplate.addEventListener('click', () => {
        window.playSfx('click');
        const q = allQuestions.find(item => item.id === STATE.currentQId);
        if (q && eerCanvas) {
          localStorage.removeItem('DS_W1_DIAGRAM_' + STATE.currentQId);
          localStorage.setItem('DS_W1_UPDATED_' + STATE.currentQId, Date.now().toString());
          eerCanvas.loadStarterDiagram(q.starterDiagram);
        }
      });
    }

    // Language Switcher (UZ / RU / EN)
    const btnUz = document.getElementById('btnLangUz');
    const btnRu = document.getElementById('btnLangRu');
    const btnEn = document.getElementById('btnLangEn');
    if (btnUz) {
      btnUz.addEventListener('click', () => {
        window.playSfx('click');
        if (window.I18N) window.I18N.setLang('uz');
      });
    }
    if (btnRu) {
      btnRu.addEventListener('click', () => {
        window.playSfx('click');
        if (window.I18N) window.I18N.setLang('ru');
      });
    }
    if (btnEn) {
      btnEn.addEventListener('click', () => {
        window.playSfx('click');
        if (window.I18N) window.I18N.setLang('en');
      });
    }

    const btnClearCanvas = document.getElementById('eerBtnClearCanvas');
    if (btnClearCanvas) {
      btnClearCanvas.addEventListener('click', () => {
        window.playSfx('click');
        const confirmMsg = window.I18N ? window.I18N.t('confirm_clear_canvas', "Chizilgan diagrammani tozalashni xohlaysizmi?") : "Chizilgan diagrammani tozalashni xohlaysizmi?";
        if (confirm(confirmMsg) && eerCanvas) {
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
        const confirmResetMsg = window.I18N ? window.I18N.t('confirm_reset_all', "Haqiqatan ham barcha natijalaringizni qayta o'rnatmoqchimisiz?") : "Haqiqatan ham barcha natijalaringizni qayta o'rnatmoqchimisiz?";
        if (confirm(confirmResetMsg)) {
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

  window.addEventListener('beforeunload', () => {
    if (STATE.currentQId && eerCanvas) {
      const cur = eerCanvas.exportCurrentDiagram();
      if (cur && cur.entities && cur.entities.length > 0) {
        localStorage.setItem('DS_W1_DIAGRAM_' + STATE.currentQId, JSON.stringify(cur));
        localStorage.setItem('DS_W1_UPDATED_' + STATE.currentQId, Date.now().toString());
      }
    }
  });

  // ==========================================================================
  // 8. DIAGRAM VERIFICATION & GRADING
  // ==========================================================================
  function verifyDiagram() {
    const elFeedback = document.getElementById('feedbackBox');
    try {
      if (!eerCanvas) {
        if (elFeedback) {
          elFeedback.className = 'feedback-box error';
          elFeedback.innerHTML = `<strong>⚠️ Xatolik:</strong> Diagramma kanvasi yuklanmagan.`;
          elFeedback.style.display = 'block';
        }
        return;
      }
      if (!window.EER_GRADER) {
        if (elFeedback) {
          elFeedback.className = 'feedback-box error';
          elFeedback.innerHTML = `<strong>⚠️ Xatolik:</strong> EER Grader tekshiruv moduli yuklanmadi.`;
          elFeedback.style.display = 'block';
        }
        return;
      }

      const q = allQuestions.find(item => item.id === STATE.currentQId);
      if (!q) return;

      const userDiagram = eerCanvas.exportCurrentDiagram();
      const result = window.EER_GRADER.grade(userDiagram, q);

      if (!elFeedback) return;

      const isEn = window.I18N && window.I18N.getLang() === 'en';

      if (result.passed) {
        window.playSfx('success');
        if (atelier2D) atelier2D.triggerSuccess(isEn ? "EER Model Approved!" : "EER Diagramma Qabul Qilindi!");

        elFeedback.className = 'feedback-box success';
        elFeedback.innerHTML = `
          ${result.feedbackHTML || `<strong>${isEn ? '🎉 Excellent Result!' : "🎉 A'lo Natija!"}</strong> ${result.feedback || (isEn ? "Client approved your EER model completely." : "Mijoz siz tuzgan EER modelni to'liq tasdiqladi.")}`}
          <div style="margin-top:10px;">
            <button id="btnNextChallenge" class="btn btn-primary" style="padding:5px 14px; font-weight:600;">${isEn ? 'Proceed to Next Challenge ▶' : "Keyingi Topshiriqqa O'tish ▶"}</button>
          </div>
        `;
        elFeedback.style.display = 'block';

        // State updates & diagram persistence for Week 2 continuity
        localStorage.setItem(`DS_W1_DIAGRAM_${q.id}`, JSON.stringify(userDiagram));
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
            const nextId = getNextQuestionId(STATE.currentQId);
            if (nextId) {
              loadQuestion(nextId);
            }
          });
        }
      } else {
        window.playSfx('error');
        if (atelier2D) atelier2D.triggerError(isEn ? "Discrepancy in diagram!" : "Diagrammada nomutanosiblik bor!");

        elFeedback.className = 'feedback-box error';
        elFeedback.innerHTML = result.feedbackHTML || `<strong>${isEn ? '⚠️ Attention:' : '⚠️ Diqqat:'}</strong> ${result.feedback || (isEn ? "Errors found in diagram. Please verify again." : "Sxemada xatoliklar mavjud. Qaytadan tekshiring.")}`;
        elFeedback.style.display = 'block';
      }
    } catch (err) {
      console.error("verifyDiagram error:", err);
      if (elFeedback) {
        elFeedback.className = 'feedback-box error';
        elFeedback.innerHTML = `<strong>⚠️ Tekshiruvda kutilmagan xatolik:</strong> ${err.message || err}`;
        elFeedback.style.display = 'block';
      }
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

      const secQs = allQuestions.filter(q => (q.sector || Math.ceil(q.id / 15)) === sec.id);
      secQs.sort((a, b) => {
        if (sec.id === 2) {
          const orderA = a.id > 100 ? a.id : a.id - 1000;
          const orderB = b.id > 100 ? b.id : b.id - 1000;
          return orderA - orderB;
        }
        return a.id - b.id;
      });

      secQs.forEach(sq => {
        const i = sq.id;
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
      });

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
          btn.textContent += " ✓ (To'g'ri! +250 Ball & +100 Reyting)";
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
