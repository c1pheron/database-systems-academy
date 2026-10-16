/**
 * DATABASE SYSTEMS ACADEMY — 2-HAFTA: EER MODELNI KENGAYTIRISH (GAME CONTROLLER)
 * 150 ta EER Kengaytirish Keysi, draw.io EER Atelesi, 10 ta Qavat va Intelligent Grader
 * 
 * Bevosita 1-haftaning davomi:
 * - 1-haftada yaratilgan ER diagramma polotnoda avtomatik yuklanadi (starterDiagram)
 * - Talaba o'sha diagrammaga subklasslar, ISA uchburchagi {Mandatory, Or} / {Optional, And},
 *   zaif entitiylar yoki cheklovlarni kiritib to'laqonli EER diagrammaga aylantiradi.
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

    // 3. Initialize 2D Atelier Banner & EER Canvas Engine
    if (window.Relational2DEngine) {
      atelier2D = new window.Relational2DEngine('consultCanvas');
    }
    if (window.EERCanvasEngine) {
      eerCanvas = new window.EERCanvasEngine('eerCanvasContainer');

      // W2 Real-Time Auto-Save: Strictly saves to W2! NEVER affects W1!
      let autoSaveW2Timer = null;
      eerCanvas.onChange = function(diagram) {
        if (autoSaveW2Timer) clearTimeout(autoSaveW2Timer);
        autoSaveW2Timer = setTimeout(() => {
          if (STATE.currentQId && diagram && diagram.entities && diagram.entities.length > 0) {
            localStorage.setItem('DS_W2_DIAGRAM_' + STATE.currentQId, JSON.stringify(diagram));
            localStorage.setItem('DS_W2_UPDATED_' + STATE.currentQId, Date.now().toString());
            updateW2DiagramBanner('w2');
          }
        }, 200);
      };
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
  // 3. STATE PERSISTENCE (Multi-Key Mirroring)
  // ==========================================================================
  function loadSavedState() {
    try {
      const keys = ['DS_W2_PROGRESS', 'WIUT_DS_W2_PROGRESS', 'ACADEMY_DS_W2_PROGRESS', 'DS_W2_SOLVED_IDS', 'WIUT_DS_W2_SOLVED'];
      for (const k of keys) {
        const saved = localStorage.getItem(k);
        if (saved) {
          try {
            const data = JSON.parse(saved);
            if (Array.isArray(data)) {
              data.forEach(id => STATE.solvedIds.add(Number(id)));
            } else if (data && data.solvedIds && Array.isArray(data.solvedIds)) {
              data.solvedIds.forEach(id => STATE.solvedIds.add(Number(id)));
              if (data.currentQId) STATE.currentQId = data.currentQId;
              if (data.score) STATE.score = data.score;
              if (data.salary) STATE.salary = data.salary;
            }
          } catch (e) {}
        }
      }
    } catch (e) {}
  }

  function saveState() {
    try {
      const solvedArr = Array.from(STATE.solvedIds);
      const data = {
        solvedIds: solvedArr,
        currentQId: STATE.currentQId,
        score: STATE.score,
        salary: STATE.salary
      };
      const json = JSON.stringify(data);
      const arrJson = JSON.stringify(solvedArr);

      localStorage.setItem('DS_W2_PROGRESS', json);
      localStorage.setItem('WIUT_DS_W2_PROGRESS', json);
      localStorage.setItem('ACADEMY_DS_W2_PROGRESS', json);
      localStorage.setItem('DS_W2_SOLVED_IDS', arrJson);
      localStorage.setItem('WIUT_DS_W2_SOLVED', arrJson);
    } catch (e) {}
  }

  // ==========================================================================
  // 4. TOP EXECUTIVE HUD
  // ==========================================================================
  function updateHUD() {
    const solved = STATE.solvedIds.size;
    const total = 150;
    const pct = Math.round((solved / total) * 100);

    let rank = "Kichik EER Arxitektor";
    if (solved >= 135) rank = "Bosh Mantiqiy Arxitektor (Penthouse)";
    else if (solved >= 105) rank = "Katta EER Tizim Muhandisi";
    else if (solved >= 75) rank = "Yetakchi EER Modeleri";
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
    if (!nav) return;

    nav.innerHTML = '';
    const catalog = window.EER_CATALOG || window.RELATIONAL_CATALOG || {};
    const sectors = catalog.sectors || [
      { id: 1, range: [1, 15], name: "1-Qavat: Single Strong Entity", badge: "1F" },
      { id: 2, range: [16, 30], name: "2-Qavat: 1..1 Relationships", badge: "2F" },
      { id: 3, range: [31, 45], name: "3-Qavat: 1..* Cardinality", badge: "3F" },
      { id: 4, range: [46, 60], name: "4-Qavat: *..* Many-to-Many", badge: "4F" },
      { id: 5, range: [61, 75], name: "5-Qavat: Weak Entities", badge: "5F" },
      { id: 6, range: [76, 90], name: "6-Qavat: Recursive Hierarchy", badge: "6F" },
      { id: 7, range: [91, 105], name: "7-Qavat: Specialisation Disjoint", badge: "7F" },
      { id: 8, range: [106, 120], name: "8-Qavat: Specialisation Overlap", badge: "8F" },
      { id: 9, range: [121, 135], name: "9-Qavat: Categories / Union", badge: "9F" },
      { id: 10, range: [136, 150], name: "10-Qavat: Enterprise Architecture", badge: "10F" }
    ];

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
  // Update diagram badge status
  function updateW2DiagramBanner(sourceInfo) {
    const badge = document.getElementById('w2DiagramSourceBadge');
    if (!badge) return;
    if (sourceInfo === 'w1') {
      badge.innerHTML = '<span style="color:#38bdf8; font-weight:600;">🔗 1-hafta modeli faol (Asl nusxa)</span>';
      badge.title = "Ushbu diagramma 1-haftadan avtomatik yuklandi. Siz uni bemalol EER ga o'girishingiz mumkin.";
    } else if (sourceInfo === 'w2') {
      badge.innerHTML = '<span style="color:#ffd166; font-weight:600;">✏️ 2-hafta EER tahriri (1-hafta daxlsiz)</span>';
      badge.title = "2-haftadagi o'zgartirishlaringiz alohida saqlanmoqda, 1-hafta o'zgarmaydi.";
    } else {
      badge.innerHTML = '<span style="color:#94a3b8;">📋 Dastlabki shablon faol</span>';
    }
  }

  // Reset W2 diagram strictly back to Week 1 state (Default)
  function resetW2ToW1Default() {
    const qId = STATE.currentQId;
    const q = allQuestions.find(item => item.id === qId);
    if (!q) return;

    // 1. Remove W2 custom edit
    localStorage.removeItem('DS_W2_DIAGRAM_' + qId);
    localStorage.removeItem('DS_W2_UPDATED_' + qId);

    // 2. Fetch W1 diagram
    const savedW1 = localStorage.getItem('DS_W1_DIAGRAM_' + qId);
    let targetDiagram = null;
    let sourceInfo = 'starter';

    if (savedW1) {
      try {
        const parsed1 = JSON.parse(savedW1);
        if (parsed1 && parsed1.entities && parsed1.entities.length > 0) {
          targetDiagram = parsed1;
          sourceInfo = 'w1';
        }
      } catch (e) {}
    }

    if (!targetDiagram) {
      targetDiagram = q.starterDiagram || q.expectedDiagram;
      sourceInfo = 'starter';
    }

    if (eerCanvas && targetDiagram) {
      eerCanvas.loadStarterDiagram(targetDiagram);
      updateW2DiagramBanner(sourceInfo);
      if (window.playSfx) window.playSfx('click');

      if (sourceInfo === 'w1') {
        eerCanvas.showToast("↺ Diagramma 1-haftadagi holatiga (Default) qaytarildi!");
      } else {
        eerCanvas.showToast("↺ Diagramma dastlabki shablon holatiga qaytarildi!");
      }
    }
  }

  // 6. QUESTION STRIP & DOSSIER
  // ==========================================================================
  function loadQuestion(qId) {
    const q = allQuestions.find(item => item.id === qId);
    if (!q) return;

    // Save previous question W2 edits if modified
    if (STATE.currentQId && eerCanvas && STATE.currentQId !== qId) {
      const cur = eerCanvas.exportCurrentDiagram();
      if (cur && cur.entities && cur.entities.length > 0) {
        const savedW1 = localStorage.getItem('DS_W1_DIAGRAM_' + STATE.currentQId);
        if (savedW1 !== JSON.stringify(cur)) {
          localStorage.setItem('DS_W2_DIAGRAM_' + STATE.currentQId, JSON.stringify(cur));
          localStorage.setItem('DS_W2_UPDATED_' + STATE.currentQId, Date.now().toString());
        }
      }
    }

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
    const elHint = document.getElementById('qHintBox');
    const elFeedback = document.getElementById('feedbackBox');

    if (elFloor) elFloor.textContent = `${secId}-Qavat: EER Modelga Kengaytirish`;
    if (elSub) elSub.textContent = q.difficulty || "Amaliy Keys";
    if (elQNum) elQNum.textContent = `Keys #${q.id} / 150`;
    if (elDiff) elDiff.textContent = q.difficulty || "O'rta";
    if (elSource) elSource.textContent = "Seminar 02 • EER Modeli";
    if (elTitle) elTitle.textContent = q.title || "EER Kengaytirish";

    // Format Markdown Helper
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

    // Render Narrative (Without duplicate ticker)
    const elNarrative = document.getElementById('caseNarrativeBox');
    const elTasks = document.getElementById('caseTasksBox');

    if (elNarrative) {
      const paras = q.caseStudy?.paragraphs || (q.story || '').split('\n\n').filter(p => p.trim());
      elNarrative.innerHTML = paras.map(p => `<p>${formatInlineMarkdown(p)}</p>`).join('');
    }

    if (elTasks) {
      const inst = q.instruction || (q.caseStudy?.tasks ? q.caseStudy.tasks[0] : (q.taskUz ? q.taskUz.split('\n')[0] : "Dastlabki modelni EER qoidalari asosida kengaytiring."));
      elTasks.innerHTML = `
        <div class="case-instruction-pill" style="display:flex; align-items:flex-start; gap:8px; padding:10px 14px; background:rgba(212,175,55,0.08); border:1px solid rgba(212,175,55,0.25); border-radius:6px; color:#f0f0f0; font-size:13px; line-height:1.5;">
          <span style="font-size:16px;">🎯</span>
          <div><strong>Topshiriq:</strong> ${formatInlineMarkdown(inst.replace(/^[a-d]\)\s*/i, ''))}</div>
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
      btnDetail.innerHTML = `<span>📖 Batafsil</span> <small style="opacity:0.85;">(Nazariya & Misollar)</small>`;
      btnDetail.onclick = () => {
        if (window.databaseEncyclopedia) {
          window.databaseEncyclopedia.openForQuestion(q, 2);
        }
      };
    }

    if (elHint) {
      elHint.style.display = 'none';
      elHint.textContent = `💡 Maslahat: ${q.hint || "Subklasslar, ISA uchburchagi va {Mandatory, Or} / {Optional, And} cheklovlariga e'tibor bering."}`;
    }
    if (elFeedback) {
      elFeedback.style.display = 'none';
      elFeedback.className = 'feedback-box';
    }

    if (atelier2D) {
      atelier2D.setClient(q.clientName || "Bosh Me'mor Atlas", q.clientRole || "Maslahatchi", q.title);
    }
    const tickerSpeaker = document.getElementById('tickerSpeaker');
    const tickerMessage = document.getElementById('tickerMessage');
    if (tickerSpeaker) tickerSpeaker.textContent = q.clientRole ? q.clientRole.toUpperCase() : "BOSH ME'MOR ATLAS";
    if (tickerMessage) tickerMessage.textContent = "1-haftada yaratilgan model asosida yangi EER talablarini to'ldiring.";

    // Load Starter Diagram into EER Canvas (One-way Inheritance from Week 1!)
    if (eerCanvas) {
      const savedW2 = localStorage.getItem('DS_W2_DIAGRAM_' + qId);
      const savedW1 = localStorage.getItem('DS_W1_DIAGRAM_' + qId);
      const w1Updated = parseInt(localStorage.getItem('DS_W1_UPDATED_' + qId) || "0", 10);
      const w2Updated = parseInt(localStorage.getItem('DS_W2_UPDATED_' + qId) || "0", 10);

      let chosenDiagram = null;
      let sourceInfo = "starter";

      // 1. If W2 has custom edits and W1 wasn't updated AFTER W2
      if (savedW2 && w2Updated >= w1Updated) {
        try {
          const parsed2 = JSON.parse(savedW2);
          if (parsed2 && parsed2.entities && parsed2.entities.length > 0) {
            chosenDiagram = parsed2;
            sourceInfo = "w2";
          }
        } catch (e) {}
      }

      // 2. If no W2 edit, or W1 has newer changes -> Load W1 Diagram!
      if (!chosenDiagram && savedW1) {
        try {
          const parsed1 = JSON.parse(savedW1);
          if (parsed1 && parsed1.entities && parsed1.entities.length > 0) {
            chosenDiagram = parsed1;
            sourceInfo = "w1";
          }
        } catch (e) {}
      }

      // 3. Fallback to default starter
      if (!chosenDiagram) {
        chosenDiagram = q.starterDiagram || q.expectedDiagram;
        sourceInfo = "starter";
      }

      eerCanvas.loadStarterDiagram(chosenDiagram);
      updateW2DiagramBanner(sourceInfo);
    }
  }

  // ==========================================================================
  // 7. BIND CONTROLS
  // ==========================================================================
  function bindControls() {
    // Navigation: Next / Prev
    const btnPrev = document.getElementById('btnPrevQ');
    const btnNext = document.getElementById('btnNextQ');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        if (STATE.currentQId > 1) {
          window.playSfx('click');
          loadQuestion(STATE.currentQId - 1);
        }
      });
    }
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (STATE.currentQId < 150) {
          window.playSfx('click');
          loadQuestion(STATE.currentQId + 1);
        }
      });
    }

    // Canvas Toolbar Buttons
    const btnAddEntity = document.getElementById('eerBtnAddEntity');
    if (btnAddEntity) {
      btnAddEntity.addEventListener('click', () => {
        window.playSfx('click');
        if (eerCanvas) eerCanvas.spawnEntity();
      });
    }

    const btnAddRel = document.getElementById('eerBtnAddRel');
    if (btnAddRel) {
      btnAddRel.addEventListener('click', () => {
        window.playSfx('click');
        if (eerCanvas) eerCanvas.spawnRelationship();
      });
    }

    const btnToggleWeak = document.getElementById('eerBtnToggleWeak');
    if (btnToggleWeak) {
      btnToggleWeak.addEventListener('click', () => {
        window.playSfx('click');
        if (eerCanvas) eerCanvas.toggleSelectedWeak();
      });
    }

    // Default Button (Under Diagram & Top Toolbar)
    const btnW2Default = document.getElementById('btnW2Default');
    if (btnW2Default) {
      btnW2Default.addEventListener('click', resetW2ToW1Default);
    }

    const btnResetTemplate = document.getElementById('eerBtnResetTemplate');
    if (btnResetTemplate) {
      btnResetTemplate.addEventListener('click', resetW2ToW1Default);
    }

    const btnClearCanvas = document.getElementById('eerBtnClearCanvas');
    if (btnClearCanvas) {
      btnClearCanvas.addEventListener('click', () => {
        window.playSfx('click');
        if (confirm("Haqiqatan ham polotnoni tozalamoqchimisiz?")) {
          if (eerCanvas) eerCanvas.clear();
        }
      });
    }

    // Toggle Shapes Sidebar
    const btnToggleSidebar = document.getElementById('btnToggleShapesSidebar');
    const btnSidebarFold = document.getElementById('btnToggleSidebar');
    const btnSidebarUnfold = document.getElementById('btnUnfoldSidebar');
    const drawioSidebar = document.getElementById('drawioSidebar');

    if (btnToggleSidebar && drawioSidebar) {
      btnToggleSidebar.addEventListener('click', () => {
        drawioSidebar.classList.toggle('collapsed');
      });
    }
    if (btnSidebarFold && drawioSidebar) {
      btnSidebarFold.addEventListener('click', () => {
        drawioSidebar.classList.add('collapsed');
      });
    }
    if (btnSidebarUnfold && drawioSidebar) {
      btnSidebarUnfold.addEventListener('click', () => {
        drawioSidebar.classList.remove('collapsed');
      });
    }

    // Export draw.io XML
    const btnExport = document.getElementById('btnExportDrawio');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        window.playSfx('click');
        if (!eerCanvas) return;
        const xml = eerCanvas.exportDrawioXML();
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `EER_Model_W2_${STATE.currentQId}.drawio`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }

    // Verification Button
    const btnVerify = document.getElementById('btnVerifySchema');
    if (btnVerify) {
      btnVerify.addEventListener('click', verifyEERModel);
    }

    // Hint Button
    const btnHint = document.getElementById('btnToggleHint');
    if (btnHint) {
      btnHint.addEventListener('click', () => {
        window.playSfx('click');
        const elHint = document.getElementById('qHintBox');
        if (elHint) {
          elHint.style.display = elHint.style.display === 'none' ? 'block' : 'none';
        }
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

    setupModals();
  }

  // ==========================================================================
  // 8. EER MODEL VERIFICATION & GRADING
  // ==========================================================================
  function verifyEERModel() {
    const elFeedback = document.getElementById('feedbackBox');
    try {
      if (!eerCanvas) {
        if (elFeedback) {
          elFeedback.className = 'feedback-box error';
          elFeedback.innerHTML = `<strong>⚠️ Xatolik:</strong> EER kanvasi yuklanmagan.`;
          elFeedback.style.display = 'block';
        }
        return;
      }

      if (!window.EER_GRADER) {
        if (elFeedback) {
          elFeedback.className = 'feedback-box error';
          elFeedback.innerHTML = `<strong>⚠️ Xatolik:</strong> Tekshiruv moduli (EER_GRADER) topilmadi.`;
          elFeedback.style.display = 'block';
        }
        return;
      }

      const q = allQuestions.find(item => item.id === STATE.currentQId);
      if (!q) return;

      const userDiagram = eerCanvas.exportCurrentDiagram();
      const result = window.EER_GRADER.grade(userDiagram, q);

      if (!elFeedback) return;

      if (result.passed) {
        window.playSfx('success');
        if (atelier2D) atelier2D.triggerSuccess("EER Diagramma Qabul Qilindi!");

        elFeedback.className = 'feedback-box success';
        elFeedback.innerHTML = `
          <strong>🎉 A'lo Natija!</strong> ${result.feedback || "EER kengaytirishlari va subklasslar to'liq tasdiqlandi."}
          <div style="margin-top:8px;">
            <button id="btnNextChallenge" class="btn btn-primary" style="padding:4px 12px;">Keyingi Topshiriqqa O'tish ▶</button>
          </div>
        `;
        elFeedback.style.display = 'block';

        localStorage.setItem(`DS_W2_DIAGRAM_${q.id}`, JSON.stringify(userDiagram));
        if (!STATE.solvedIds.has(q.id)) {
          STATE.solvedIds.add(q.id);
          STATE.score += 150;
          STATE.salary += 50;
          saveState();
          updateHUD();
          renderSectorTabs();

          const dot = document.querySelector(`.q-dot[title='Topshiriq #${q.id}']`);
          if (dot) dot.classList.add('completed');
        }

        const btnNextChallenge = document.getElementById('btnNextChallenge');
        if (btnNextChallenge) {
          btnNextChallenge.addEventListener('click', () => {
            if (STATE.currentQId < 150) {
              loadQuestion(STATE.currentQId + 1);
            }
          });
        }
      } else {
        window.playSfx('error');
        elFeedback.className = 'feedback-box error';
        elFeedback.innerHTML = result.feedback;
        elFeedback.style.display = 'block';
      }
    } catch (err) {
      console.error("verifyEERModel error:", err);
      if (elFeedback) {
        elFeedback.className = 'feedback-box error';
        elFeedback.innerHTML = `<strong>⚠️ Xatolik yuz berdi:</strong> ${err.message}`;
        elFeedback.style.display = 'block';
      }
    }
  }

  // ==========================================================================
  // 9. MODALS (Map & Incident)
  // ==========================================================================
  function setupModals() {
    const btnMap = document.getElementById('btnOpenMap');
    const modalMap = document.getElementById('mapModal');
    const btnCloseMap = document.getElementById('btnCloseMap');
    const mapBody = document.getElementById('mapModalBody');

    if (btnMap && modalMap) {
      btnMap.addEventListener('click', () => {
        window.playSfx('click');
        if (mapBody) {
          mapBody.innerHTML = '';
          const catalog = window.EER_CATALOG || window.RELATIONAL_CATALOG || {};
          const sectors = catalog.sectors || [];
          sectors.forEach(sec => {
            const secCard = document.createElement('div');
            secCard.className = 'map-sector-card';
            secCard.innerHTML = `<h4 style="color:var(--accent-gold); margin:0 0 8px 0; font-size:13px;">${sec.name}</h4>`;
            const grid = document.createElement('div');
            grid.className = 'map-grid';
            for (let i = sec.range[0]; i <= sec.range[1]; i++) {
              const cell = document.createElement('div');
              cell.className = 'map-cell' + (i === STATE.currentQId ? ' active' : '') + (STATE.solvedIds.has(i) ? ' completed' : '');
              cell.textContent = i;
              cell.addEventListener('click', () => {
                modalMap.classList.remove('active');
                loadQuestion(i);
              });
              grid.appendChild(cell);
            }
            secCard.appendChild(grid);
            mapBody.appendChild(secCard);
          });
        }
        modalMap.classList.add('active');
      });
    }

    if (btnCloseMap && modalMap) {
      btnCloseMap.addEventListener('click', () => {
        modalMap.classList.remove('active');
      });
    }
  }

})();
