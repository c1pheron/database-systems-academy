// ============================================================================
// KORPORATIV BOSH OFIS: SO'ROV OPTIMALLASHTIRISH VA ILG'OR DML (WEEK 6)
// Academy Database Systems (MODULE) • 150 SQL & Optimization Sinovi
// Game Controller, State Persistence, Live Evaluation, Schema Tabs & HUD.
// ============================================================================

(function () {
  const STORAGE_KEY = "wiut_ds_w6_hq_state_v1";

  const ALL_QUESTIONS = [
    ...(window.QUESTIONS_1_50 || []),
    ...(window.QUESTIONS_51_100 || []),
    ...(window.QUESTIONS_101_150 || [])
  ].sort((a, b) => a.id - b.id);

  const TOTAL_QUESTIONS = ALL_QUESTIONS.length; // 150

  let state = {
    currentQuestionId: 1,
    solvedIds: [],
    savedQueries: {},
    bonusCapital: 0,
    completedEvents: [],
    activeSchemaTab: "emp",
    lastResultTable: null
  };

  let arena = null;
  let currentEventObj = null;

  const OFFICE_TICKER_NEWS = [
    { speaker: "👔 CLARK (Nyu-York)", text: "Skalyar subquery WHERE da yagona qiymat qaytarmasa, xatolik beradi! IN yoki = ANY ishlating." },
    { speaker: "🔬 JONES (Dallas)", text: "Mashhur NOT IN va NULL tuzog'i: agar ro'yxatda bitta NULL bo'lsa, natija 0 ta qator bo'ladi!" },
    { speaker: "💼 BLAKE (Chikago)", text: "> ANY kamida bittasidan katta, > ALL esa istisnosiz barchasidan katta deganidir!" },
    { speaker: "📋 HR Diana", text: "13 ta nomzod (applicant) jadvallari UNION va EXCEPT orqali xodimlar bilan solishtirildi." },
    { speaker: "💽 Server Karim", text: "Hevristika 1-qoidasi: Selektsiyani (WHERE) daraxtda pastga tushirish I/O yuklamasini 87% tejaydi!" },
    { speaker: "🏛 Prof. Atlas", text: "PostgreSQL parametrlari: seq_page_cost = 1.0, random_page_cost = 4.0, cpu_tuple_cost = 0.01!" },
    { speaker: "👑 KING (Prezident)", text: "Maxfiy maoshlarni yashirish va ma'lumotlar xavfsizligi uchun CREATE VIEW asosiy vositadir!" }
  ];
  let tickerIndex = 0;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        state.currentQuestionId = parsed.currentQuestionId || 1;
        state.solvedIds = Array.isArray(parsed.solvedIds) ? parsed.solvedIds : [];
        state.savedQueries = parsed.savedQueries || {};
        state.bonusCapital = typeof parsed.bonusCapital === "number" ? parsed.bonusCapital : 0;
        state.completedEvents = Array.isArray(parsed.completedEvents) ? parsed.completedEvents : [];
      }
    } catch (e) {
      console.warn("State load error:", e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          currentQuestionId: state.currentQuestionId,
          solvedIds: state.solvedIds,
          savedQueries: state.savedQueries,
          bonusCapital: state.bonusCapital,
          completedEvents: state.completedEvents
        })
      );
    } catch (e) {
      console.warn("State save error:", e);
    }
  }

  function getCurrentQuestion() {
    return ALL_QUESTIONS.find((q) => q.id === state.currentQuestionId) || ALL_QUESTIONS[0];
  }

  function getCareerRank(solvedCount) {
    const ranks = window.COMPANY_DB?.careerRanks || [
      { minSolved: 0, title: "Stajyor Tahlilchi", salary: "$2,000/oy", badge: "🎓" }
    ];
    let current = ranks[0];
    for (const r of ranks) {
      if (solvedCount >= r.minSolved) current = r;
    }
    return current;
  }

  function renderHUD() {
    const solvedCount = state.solvedIds.length;
    const rank = getCareerRank(solvedCount);

    const rankTitleEl = document.getElementById("hudRankTitle");
    const salaryEl = document.getElementById("hudSalary");
    const capitalEl = document.getElementById("hudCapital");
    const solvedEl = document.getElementById("hudSolved");
    const progressFillEl = document.getElementById("hudProgressFill");

    if (rankTitleEl) rankTitleEl.textContent = `${rank.badge} ${rank.title}`;
    if (salaryEl) salaryEl.textContent = rank.salary;
    if (capitalEl) capitalEl.textContent = `$${state.bonusCapital.toLocaleString()}`;
    if (solvedEl) solvedEl.textContent = `${solvedCount} / ${TOTAL_QUESTIONS}`;

    const pct = Math.min(100, Math.round((solvedCount / TOTAL_QUESTIONS) * 100));
    if (progressFillEl) progressFillEl.style.width = `${pct}%`;

    // Elevator check: floor solved?
    const q = getCurrentQuestion();
    const sector = window.COMPANY_DB?.sectors?.find((s) => s.id === q.sector);
    if (sector && arena) {
      const start = sector.range[0];
      const end = sector.range[1];
      let floorSolved = true;
      for (let i = start; i <= end; i++) {
        if (!state.solvedIds.includes(i)) {
          floorSolved = false;
          break;
        }
      }
      arena.setElevatorOpen(floorSolved);
    }
  }

  function renderSectorBar() {
    const bar = document.getElementById("sectorNavList");
    if (!bar) return;
    bar.innerHTML = "";

    const sectors = window.COMPANY_DB?.sectors || [];
    const currentQ = getCurrentQuestion();

    sectors.forEach((sec) => {
      const btn = document.createElement("button");
      btn.className = "sector-btn";
      if (sec.id === currentQ.sector) btn.classList.add("active");

      // Progress count
      let solvedInSec = 0;
      for (let i = sec.range[0]; i <= sec.range[1]; i++) {
        if (state.solvedIds.includes(i)) solvedInSec++;
      }
      const totalInSec = sec.range[1] - sec.range[0] + 1;

      btn.innerHTML = `
        <span class="sector-num">${sec.id}-Qavat</span>
        <span class="sector-title">${sec.name.replace(/^\d+-QAVAT:\s*/i, "")}</span>
        <span class="sector-badge">${solvedInSec}/${totalInSec}</span>
      `;

      btn.addEventListener("click", () => {
        // Go to first unsolved in sector, or start of sector
        let targetId = sec.range[0];
        for (let i = sec.range[0]; i <= sec.range[1]; i++) {
          if (!state.solvedIds.includes(i)) {
            targetId = i;
            break;
          }
        }
        selectQuestion(targetId);
      });

      bar.appendChild(btn);
    });
  }

  function renderFloorStrip() {
    const strip = document.getElementById("floorQuestionStrip");
    if (!strip) return;
    strip.innerHTML = "";

    const q = getCurrentQuestion();
    const sector = window.COMPANY_DB?.sectors?.find((s) => s.id === q.sector);
    if (!sector) return;

    for (let i = sector.range[0]; i <= sector.range[1]; i++) {
      const dot = document.createElement("button");
      dot.className = "floor-dot";
      dot.textContent = i;
      if (i === q.id) dot.classList.add("current");
      if (state.solvedIds.includes(i)) dot.classList.add("solved");

      dot.addEventListener("click", () => selectQuestion(i));
      strip.appendChild(dot);
    }
  }

  function renderQuestionDossier() {
    const q = getCurrentQuestion();

    const qNumEl = document.getElementById("qNumberBadge");
    const qDiffEl = document.getElementById("qDifficultyBadge");
    const qSourceEl = document.getElementById("qSourceBadge");
    const qTitleEl = document.getElementById("qTitle");
    const qStoryEl = document.getElementById("qStory");
    const qTaskEl = document.getElementById("qTask");
    const qTagsEl = document.getElementById("qTagsList");
    const sqlInput = document.getElementById("sqlInput");
    const feedbackBox = document.getElementById("feedbackBox");
    const hintBox = document.getElementById("hintBox");

    if (qNumEl) qNumEl.textContent = `Vazifa #${q.id}`;
    if (qDiffEl) qDiffEl.textContent = q.difficulty || "O'rta";
    if (qSourceEl) qSourceEl.textContent = q.source || "Academy W6";
    if (qTitleEl) qTitleEl.textContent = q.title;
    if (qStoryEl) qStoryEl.innerHTML = formatInlineMarkdown(q.story);
    if (qTaskEl) {
      qTaskEl.innerHTML = formatInlineMarkdown(q.taskUz);
      let btnDetail = document.getElementById('btnChallengeDetail');
      if (!btnDetail) {
        btnDetail = document.createElement('button');
        btnDetail.id = 'btnChallengeDetail';
        btnDetail.className = 'btn-challenge-detail';
        btnDetail.type = 'button';
        qTaskEl.parentNode.appendChild(btnDetail);
      }
      btnDetail.innerHTML = `<span>📖 Batafsil</span> <small style="opacity:0.85;">(Komandani o'rganish)</small>`;
      btnDetail.onclick = () => {
        if (window.databaseEncyclopedia) {
          window.databaseEncyclopedia.openForQuestion(q, 6);
        }
      };
    }

    if (qTagsEl) {
      qTagsEl.innerHTML = "";
      (q.tags || []).forEach((t) => {
        const span = document.createElement("span");
        span.className = "q-tag";
        span.textContent = t;
        qTagsEl.appendChild(span);
      });
    }

    // Load saved or clear
    if (sqlInput) {
      sqlInput.value = state.savedQueries[q.id] || "";
    }

    if (feedbackBox) {
      feedbackBox.style.display = "none";
      feedbackBox.className = "feedback-box";
      feedbackBox.innerHTML = "";
    }

    if (hintBox) {
      hintBox.style.display = "none";
      hintBox.innerHTML = "";
    }

    renderSectorBar();
    renderFloorStrip();

    if (arena) {
      arena.setSector(q.sector);
      // Highlight related emps
      const foundEmpnos = extractRelevantEmpnos(q);
      arena.highlightEmployees(foundEmpnos);
    }
  }

  function extractRelevantEmpnos(q) {
    const sql = (q.expectedSql || "").toUpperCase();
    const emps = window.COMPANY_DB?.emp || [];
    const matched = [];
    for (const e of emps) {
      if (sql.includes(e.ename)) matched.push(e.empno);
    }
    return matched;
  }

  function selectQuestion(id) {
    state.currentQuestionId = id;
    saveState();
    renderQuestionDossier();
    renderHUD();
  }

  function runUserQuery() {
    const q = getCurrentQuestion();
    const sqlInput = document.getElementById("sqlInput");
    const rawSql = sqlInput ? sqlInput.value.trim() : "";

    state.savedQueries[q.id] = rawSql;
    saveState();

    const feedbackBox = document.getElementById("feedbackBox");
    if (!feedbackBox) return;
    feedbackBox.style.display = "block";

    // 1. Diagnostics check
    const diag = window.SQL_GRADER.detectDiagnostics(rawSql, q);
    if (diag) {
      feedbackBox.className = "feedback-box error";
      feedbackBox.innerHTML = `<strong>⚠️ Sintaksis Ogohlantirishi:</strong><br>${diag}`;
      return;
    }

    // 2. Execute User SQL
    const userRes = window.SQL_GRADER.execute(rawSql);
    if (!userRes.success) {
      feedbackBox.className = "feedback-box error";
      feedbackBox.innerHTML = `<strong>❌ SQL Xatolik:</strong><br>${userRes.error}`;
      return;
    }

    // Save and display in results table
    state.lastResultTable = userRes;
    switchSchemaTab("result");

    // 3. Execute Expected SQL
    const expRes = window.SQL_GRADER.execute(q.expectedSql);
    const cmp = window.SQL_GRADER.compareResults(userRes, expRes);

    if (!cmp.match) {
      feedbackBox.className = "feedback-box error";
      feedbackBox.innerHTML = `
        <strong>⚠️ Natijada Farq Bor:</strong><br>
        ${cmp.message}<br><br>
        <span style="font-size:11.5px; color:#38bdf8;">Maslahat: So'rov shartini, ustunlar nomini va saralashni qayta tekshiring. 'Kutilayotgan Natija' tugmasi bilan solishtiring.</span>
      `;
      return;
    }

    // SUCCESS!
    feedbackBox.className = "feedback-box success";
    const isNewSolve = !state.solvedIds.includes(q.id);

    if (isNewSolve) {
      state.solvedIds.push(q.id);
      const bonusEarned = 400 + q.sector * 60;
      state.bonusCapital += bonusEarned;
      saveState();

      if (arena) arena.triggerExplosion(arena.width / 2, arena.height / 2, "#38bdf8");
      if (arena) arena.addFloatingText(`+$${bonusEarned} MUKOFOT!`, arena.player.x, arena.player.y - 40, "#10b981");

      feedbackBox.innerHTML = `
        <strong>🎉 Ajoyib Natija! Topshiriq Muvaffaqiyatli Bajarildi!</strong><br>
        Barcha ustunlar va qatorlar kutilganidek aniq chiqdi. Hisobingizga <strong>+$${bonusEarned}</strong> bonus kapital qo'shildi!
      `;

      checkOfficeEventTrigger(q.id);
    } else {
      feedbackBox.innerHTML = `
        <strong>✓ Qayta Tasdiqlandi!</strong><br>
        Ushbu topshiriq avval ham bajarilgan edi. Natijalar to'g'ri chiqmoqda!
      `;
    }

    renderHUD();
    renderFloorStrip();
    renderSectorBar();
  }

  function previewExpectedResult() {
    const q = getCurrentQuestion();
    const expRes = window.SQL_GRADER.execute(q.expectedSql);
    if (expRes.success) {
      state.lastResultTable = expRes;
      switchSchemaTab("result");
      const feedbackBox = document.getElementById("feedbackBox");
      if (feedbackBox) {
        feedbackBox.style.display = "block";
        feedbackBox.className = "feedback-box info";
        feedbackBox.innerHTML = `<strong>👁 Kutilayotgan Natija:</strong> Jadval ko'rinishida ${expRes.rows.length} ta qator yuklandi.`;
      }
    }
  }

  function revealSampleAnswer() {
    const q = getCurrentQuestion();
    const confirmReveal = confirm("Haqiqatan ham ushbu savol uchun rasmiy SQL yechim kodini ko'rmoqchimisiz?");
    if (!confirmReveal) return;

    const sqlInput = document.getElementById("sqlInput");
    if (sqlInput) {
      sqlInput.value = q.expectedSql;
      state.savedQueries[q.id] = q.expectedSql;
      saveState();
    }

    const feedbackBox = document.getElementById("feedbackBox");
    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.className = "feedback-box info";
      feedbackBox.innerHTML = `<strong>🔑 Namuna Yechim Yuklandi:</strong> 'Hisobotni Tekshirish' (Ctrl+Enter) tugmasini bosib natijani ko'rishingiz mumkin.`;
    }
  }

  function toggleHint() {
    const q = getCurrentQuestion();
    const hintBox = document.getElementById("hintBox");
    if (!hintBox) return;
    if (hintBox.style.display === "block") {
      hintBox.style.display = "none";
    } else {
      hintBox.style.display = "block";
      hintBox.innerHTML = `<strong>💡 Professor Atlas Maslahati:</strong><br>${formatInlineMarkdown(q.hint)}`;
    }
  }

  // ==========================================================================
  // SCHEMA TABS (emp, dept, applicant, salgrade, project, works_on, query_plans, optimizer_stats, views, result)
  // ==========================================================================

  function switchSchemaTab(tabKey) {
    state.activeSchemaTab = tabKey;
    document.querySelectorAll(".schema-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.table === tabKey);
    });

    const displayArea = document.getElementById("schemaTableDisplay");
    if (!displayArea) return;

    if (tabKey === "result") {
      renderResultTable(displayArea);
      return;
    }

    if (tabKey === "views") {
      renderViewsList(displayArea);
      return;
    }

    const tableData = window.COMPANY_DB?.[tabKey] || [];
    if (tableData.length === 0) {
      displayArea.innerHTML = `<p class="empty-tip">Ushbu jadvalda hozircha ma'lumot yo'q.</p>`;
      return;
    }

    const cols = Object.keys(tableData[0]);
    let html = `<div class="table-responsive"><table class="data-table"><thead><tr>`;
    cols.forEach((c) => (html += `<th>${c.toUpperCase()}</th>`));
    html += `</tr></thead><tbody>`;

    tableData.forEach((row) => {
      html += `<tr>`;
      cols.forEach((c) => {
        const val = row[c];
        const valStr = val === null ? `<span class="null-val">NULL</span>` : String(val);
        html += `<td>${valStr}</td>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    displayArea.innerHTML = html;
  }

  function renderResultTable(container) {
    if (!state.lastResultTable || !state.lastResultTable.rows || state.lastResultTable.rows.length === 0) {
      container.innerHTML = `<p class="empty-tip">Natijalar jadvali bo'sh. So'rovni bajaring yoki 'Kutilayotgan Natija' tugmasini bosing.</p>`;
      return;
    }

    const cols = state.lastResultTable.columns;
    const rows = state.lastResultTable.rows;

    let html = `<div class="table-responsive"><table class="data-table"><thead><tr>`;
    cols.forEach((c) => (html += `<th>${c.toUpperCase()}</th>`));
    html += `</tr></thead><tbody>`;

    rows.forEach((row) => {
      html += `<tr>`;
      cols.forEach((c) => {
        const val = row[c] !== undefined ? row[c] : row[c.toLowerCase()];
        const valStr = val === null ? `<span class="null-val">NULL</span>` : String(val);
        html += `<td>${valStr}</td>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table></div>`;
    container.innerHTML = html;
  }

  function renderViewsList(container) {
    const views = [
      { name: "v_emp_dept30", desc: "30-bo'lim xodimlari ko'rinishi (empno, ename, job, sal, deptno)" },
      { name: "v_emp_public", desc: "Ommaviy xavfsiz ko'rinish (maoshsiz: empno, ename, job, deptno)" },
      { name: "v_dept_summary", desc: "Bo'limlar agregati (deptno, emp_count, avg_sal)" },
      { name: "v_emp_dept_info", desc: "Xodim va bo'lim birlashgan ko'rinishi (ename, job, sal, dname, loc)" },
      { name: "v_commissioned_staff", desc: "Komissiya oluvchilar ko'rinishi (empno, ename, job, sal, comm)" },
      { name: "v_all_talents", desc: "Xodim va nomzodlar birlashmasi (ename, job)" }
    ];

    let html = `<div class="views-list">`;
    views.forEach((v) => {
      html += `
        <div class="view-item">
          <span class="view-name">👁 ${v.name}</span>
          <span class="view-desc">${v.desc}</span>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
  }

  // ==========================================================================
  // OFFICE EVENTS ("VOQEALIKLAR")
  // ==========================================================================

  function checkOfficeEventTrigger(justSolvedId) {
    const events = window.COMPANY_DB?.officeEvents || [];
    const event = events.find((ev) => ev.triggerAfterQuestion === justSolvedId && !state.completedEvents.includes(ev.id));
    if (event) {
      setTimeout(() => openEventModal(event), 800);
    }
  }

  function openEventModal(eventObj) {
    currentEventObj = eventObj;
    document.getElementById("eventModalTitle").textContent = eventObj.title || "Korporativ Voqea";
    document.getElementById("eventSpeakerName").textContent = eventObj.speaker || "Hamkasb";
    document.getElementById("eventSpeakerRole").textContent = eventObj.role || "Xodim";
    document.getElementById("eventAvatar").textContent = eventObj.avatar || "👔";
    document.getElementById("eventNarrative").innerHTML = formatInlineMarkdown(eventObj.narrative);

    const choicesContainer = document.getElementById("eventChoicesContainer");
    choicesContainer.innerHTML = "";

    const outcomeBox = document.getElementById("eventOutcomeBox");
    outcomeBox.style.display = "none";
    outcomeBox.innerHTML = "";

    eventObj.choices.forEach((ch, idx) => {
      const btn = document.createElement("button");
      btn.className = "event-choice-btn";
      btn.innerHTML = `<b>${idx + 1}.</b> ${formatInlineMarkdown(ch.text)}`;
      btn.addEventListener("click", () => handleEventChoice(ch));
      choicesContainer.appendChild(btn);
    });

    document.getElementById("eventModal").classList.add("open");
  }

  function handleEventChoice(choice) {
    const outcomeBox = document.getElementById("eventOutcomeBox");
    outcomeBox.style.display = "block";

    if (choice.correct) {
      outcomeBox.className = "feedback-box success";
      state.bonusCapital += choice.bonus || 500;
      if (arena) arena.addFloatingText(`+$${choice.bonus} Mukofot!`, arena.player.x, arena.player.y - 35, "#10b981");
      if (currentEventObj && !state.completedEvents.includes(currentEventObj.id)) {
        state.completedEvents.push(currentEventObj.id);
      }
      saveState();
      renderHUD();
      outcomeBox.innerHTML = `<strong>✓ To'g'ri Qaror:</strong><br>${formatInlineMarkdown(choice.outcome)}`;
    } else {
      outcomeBox.className = "feedback-box error";
      outcomeBox.innerHTML = `<strong>⚠️ Qayta O'ylab Ko'ring:</strong><br>${formatInlineMarkdown(choice.outcome)}`;
    }
  }

  function closeEventModal() {
    document.getElementById("eventModal").classList.remove("open");
  }

  // ==========================================================================
  // 150 QUESTIONS MAP MODAL
  // ==========================================================================

  function openMapModal() {
    const grid = document.getElementById("fullQuestionMapGrid");
    if (!grid) return;
    grid.innerHTML = "";

    ALL_QUESTIONS.forEach((q) => {
      const cell = document.createElement("div");
      cell.className = "map-cell";
      cell.textContent = q.id;
      if (state.solvedIds.includes(q.id)) cell.classList.add("solved");
      if (q.id === state.currentQuestionId) cell.classList.add("current");

      cell.title = `${q.id}. ${q.title} (${q.sector}-Qavat)`;

      cell.addEventListener("click", () => {
        selectQuestion(q.id);
        closeMapModal();
      });

      grid.appendChild(cell);
    });

    document.getElementById("mapModal").classList.add("open");
  }

  function closeMapModal() {
    document.getElementById("mapModal").classList.remove("open");
  }

  function resetAllProgress() {
    const ok = confirm("DIQQAT: Barcha yechilgan topshiriqlar, bonus kapital va saqlangan so'rovlar o'chiriladi. Ishonchingiz komilmi?");
    if (!ok) return;

    localStorage.removeItem(STORAGE_KEY);
    state = {
      currentQuestionId: 1,
      solvedIds: [],
      savedQueries: {},
      bonusCapital: 0,
      completedEvents: [],
      activeSchemaTab: "emp",
      lastResultTable: null
    };
    renderHUD();
    renderQuestionDossier();
    switchSchemaTab("emp");
    alert("Barcha natijalar qayta tiklandi!");
  }

  // Office Ticker Loop
  function startTicker() {
    setInterval(() => {
      tickerIndex = (tickerIndex + 1) % OFFICE_TICKER_NEWS.length;
      const item = OFFICE_TICKER_NEWS[tickerIndex];
      const speakerEl = document.getElementById("tickerSpeaker");
      const msgEl = document.getElementById("tickerMessage");
      if (speakerEl) speakerEl.textContent = item.speaker;
      if (msgEl) msgEl.textContent = item.text;
    }, 7000);
  }

  function formatInlineMarkdown(str) {
    if (!str) return "";
    return str
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>");
  }

  function insertTokenAtCursor(text) {
    const textarea = document.getElementById("sqlInput");
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    textarea.value = val.substring(0, start) + text + val.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + text.length;
    textarea.focus();
  }

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  window.addEventListener("DOMContentLoaded", () => {
    loadState();

    // Init 2D arena
    arena = new CyberArena2D("gameCanvas");
    arena.onTriggerEvent = () => {
      const events = window.COMPANY_DB?.officeEvents || [];
      const uncompleted = events.filter((ev) => !state.completedEvents.includes(ev.id));
      const evToOpen = uncompleted.length > 0 ? uncompleted[0] : events[0];
      if (evToOpen) openEventModal(evToOpen);
    };

    // UI Buttons
    document.getElementById("btnRunSql")?.addEventListener("click", runUserQuery);
    document.getElementById("btnShowHint")?.addEventListener("click", toggleHint);
    document.getElementById("btnPreviewExpected")?.addEventListener("click", previewExpectedResult);
    document.getElementById("btnRevealAnswer")?.addEventListener("click", revealSampleAnswer);

    document.getElementById("btnPrevQ")?.addEventListener("click", () => {
      if (state.currentQuestionId > 1) selectQuestion(state.currentQuestionId - 1);
    });
    document.getElementById("btnNextQ")?.addEventListener("click", () => {
      if (state.currentQuestionId < TOTAL_QUESTIONS) selectQuestion(state.currentQuestionId + 1);
    });

    // Modals
    document.getElementById("btnTriggerEvent")?.addEventListener("click", () => {
      const events = window.COMPANY_DB?.officeEvents || [];
      const uncompleted = events.filter((ev) => !state.completedEvents.includes(ev.id));
      openEventModal(uncompleted.length > 0 ? uncompleted[0] : events[0]);
    });
    document.getElementById("btnQuickEvent")?.addEventListener("click", () => {
      const events = window.COMPANY_DB?.officeEvents || [];
      const uncompleted = events.filter((ev) => !state.completedEvents.includes(ev.id));
      openEventModal(uncompleted.length > 0 ? uncompleted[0] : events[0]);
    });
    document.getElementById("btnCloseEventModal")?.addEventListener("click", closeEventModal);

    document.getElementById("btnOpenMap")?.addEventListener("click", openMapModal);
    document.getElementById("btnCloseMapModal")?.addEventListener("click", closeMapModal);

    document.getElementById("btnResetProgress")?.addEventListener("click", resetAllProgress);

    // Schema Tabs
    document.querySelectorAll(".schema-tab").forEach((tab) => {
      tab.addEventListener("click", () => switchSchemaTab(tab.dataset.table));
    });

    // Ctrl+Enter hotkey in textarea
    const sqlInput = document.getElementById("sqlInput");
    if (sqlInput) {
      sqlInput.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
          e.preventDefault();
          runUserQuery();
        }
        if (e.key === "Tab") {
          e.preventDefault();
          insertTokenAtCursor("  ");
        }
      });
    }

    // Initial Render
    renderHUD();
    renderQuestionDossier();
    switchSchemaTab("emp");
    startTicker();

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
  });
})();

