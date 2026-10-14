// ============================================================================
// KORPORATIV BOSH OFIS: MA'LUMOTLAR VA TAHLIL ARXITEKTORI — GAME CONTROLLER
// Academy Database Systems (MODULE) • Week 5 (150 Questions)
// ============================================================================

(function () {
  const STORAGE_KEY = "wiut_ds_w5_hq_state_v1";

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
    { speaker: "👔 CLARK (Nyu-York)", text: "Nyu-York bosh ofisida moliyaviy audit: ANSI JOIN...ON va WHERE shartlari to'liq ajratildi." },
    { speaker: "🔬 JONES (Dallas)", text: "Dallas ilmiy tadqiqot markazida FORD va SCOTT maosh razryadlari bo'yicha non-equi join sinovlarini o'tkazmoqda." },
    { speaker: "💼 BLAKE (Chikago)", text: "Chikago savdo departamentida 40-bo'lim uchun LEFT JOIN orqali bo'sh qatorlar saqlab qolindi." },
    { speaker: "☕ Espresso Bar", text: "2D ofisdagi Espresso barga yoki hamkasblar ustiga bosib jonli voqealarda qatnashing!" },
    { speaker: "🏛 Prof. Atlas", text: "Eslatma: WHERE qatorlarni filtrlaydi, HAVING esa guruhlangan natijalarni filtrlaydi!" },
    { speaker: "💾 Storage Vault", text: "15,395 ta 8 KB sahifali bazada Heap b/2, Sorted log2(b), Hash O(1) qidiruv tezligini beradi." },
    { speaker: "👑 KING (Prezident)", text: "10-qavat Pentxausida eng yuqori darajadagi B+ Tree arxitekturasi va RAID 10 sinovlari kutmoqda!" }
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
      { minSolved: 0, title: "Stajyor Tahlilchi", salary: "$1,500/oy", badge: "🎓" }
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

    document.getElementById("hudRankTitle").textContent = `${rank.badge} ${rank.title}`;
    document.getElementById("hudSalary").textContent = rank.salary;
    document.getElementById("hudCapital").textContent = `$${state.bonusCapital.toLocaleString()}`;
    document.getElementById("hudSolved").textContent = `${solvedCount} / ${TOTAL_QUESTIONS}`;

    const pct = Math.min(100, Math.round((solvedCount / TOTAL_QUESTIONS) * 100));
    document.getElementById("hudProgressFill").style.width = `${pct}%`;

    const events = window.COMPANY_DB?.officeEvents || [];
    const remainingEvents = events.filter((ev) => !state.completedEvents.includes(ev.id)).length;
    document.getElementById("eventBadgeCount").textContent =
      remainingEvents > 0 ? `${remainingEvents} ta yangi` : "Arxiv";
  }

  function renderSectorBar() {
    const container = document.getElementById("sectorBar");
    if (!container) return;
    container.innerHTML = "";

    const currentQ = getCurrentQuestion();
    const sectors = window.COMPANY_DB?.sectors || [];

    sectors.forEach((sec) => {
      const btn = document.createElement("button");
      btn.className = "sector-tab";
      if (sec.id === currentQ.sector) btn.classList.add("active");

      // Count solved for this sector
      const [startQ, endQ] = sec.range;
      let solvedInSector = 0;
      for (let id = startQ; id <= endQ; id++) {
        if (state.solvedIds.includes(id)) solvedInSector++;
      }
      const totalInSector = endQ - startQ + 1;
      if (solvedInSector === totalInSector) {
        btn.classList.add("completed");
      }

      btn.innerHTML = `
        <span>${sec.name.split(":")[0]}</span>
        <span class="sector-badge">${solvedInSector}/${totalInSector}</span>
      `;

      btn.addEventListener("click", () => {
        // Switch to the first unsolved question in this sector, or startQ
        let targetId = startQ;
        for (let id = startQ; id <= endQ; id++) {
          if (!state.solvedIds.includes(id)) {
            targetId = id;
            break;
          }
        }
        selectQuestion(targetId);
      });

      container.appendChild(btn);
    });
  }

  function renderFloorStrip() {
    const container = document.getElementById("floorQuestionStrip");
    if (!container) return;
    container.innerHTML = "";

    const currentQ = getCurrentQuestion();
    const sector = window.COMPANY_DB?.sectors?.find((s) => s.id === currentQ.sector);
    const [startQ, endQ] = sector ? sector.range : [1, 15];

    for (let id = startQ; id <= endQ; id++) {
      const dot = document.createElement("div");
      dot.className = "q-dot";
      dot.textContent = id;
      if (id === currentQ.id) dot.classList.add("active");
      if (state.solvedIds.includes(id)) dot.classList.add("solved");

      dot.addEventListener("click", () => selectQuestion(id));
      container.appendChild(dot);
    }
  }

  function renderQuestionDossier() {
    const q = getCurrentQuestion();
    if (!q) return;

    document.getElementById("sectorSubTitle").textContent = `${q.sector}-Qavat: Bosqich Topshirig'i (${q.id} / 150)`;
    document.getElementById("floorHeaderTitle").textContent = `${q.sector}-Qavat: Korporativ Ofis & Baza Muhiti`;
    document.getElementById("qDifficultyBadge").textContent = q.difficulty || `${q.sector}-Qavat`;
    document.getElementById("qSourceBadge").textContent = q.source || "L05 & S05";
    document.getElementById("qTitle").textContent = `${q.id}. ${q.title}`;

    document.getElementById("qStory").innerHTML = formatInlineMarkdown(q.story);
    document.getElementById("qTaskUz").innerHTML = formatInlineMarkdown(q.taskUz);

    // SQL Editor value
    const saved = state.savedQueries[q.id];
    const editor = document.getElementById("sqlInput");
    editor.value = saved !== undefined ? saved : (q.starterCode || "");

    // Hint & Feedback reset
    const hintBox = document.getElementById("hintBox");
    hintBox.style.display = "none";
    hintBox.innerHTML = "";

    const feedbackBox = document.getElementById("feedbackBox");
    feedbackBox.style.display = "none";
    feedbackBox.className = "feedback-box";
    feedbackBox.innerHTML = "";

    renderTokenBar(q);
    renderFloorStrip();
    renderSectorBar();

    if (arena) {
      arena.setSector(q.sector);
      // check if all questions in sector are solved
      const sector = window.COMPANY_DB?.sectors?.find((s) => s.id === q.sector);
      if (sector) {
        const allSolved = ALL_QUESTIONS
          .filter((item) => item.sector === q.sector)
          .every((item) => state.solvedIds.includes(item.id));
        arena.setFloorCleared(allSolved);
      }
    }
  }

  function renderTokenBar(q) {
    const bar = document.getElementById("tokenBar");
    if (!bar) return;
    bar.innerHTML = "";

    const defaultTokens = ["SELECT", "FROM", "JOIN", "ON", "LEFT JOIN", "WHERE", "GROUP BY", "HAVING", "ORDER BY", "COUNT(*)", "SUM()", "AVG()", "COALESCE()"];
    defaultTokens.forEach((tok) => {
      const btn = document.createElement("button");
      btn.className = "token-btn";
      btn.textContent = tok;
      btn.addEventListener("click", () => {
        insertTokenAtCursor(tok);
      });
      bar.appendChild(btn);
    });
  }

  function insertTokenAtCursor(token) {
    const textarea = document.getElementById("sqlInput");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;

    const insertText = token.endsWith("()") ? token.slice(0, -1) : token + " ";
    textarea.value = val.substring(0, start) + insertText + val.substring(end);
    textarea.focus();
    const newPos = start + insertText.length;
    textarea.setSelectionRange(newPos, newPos);

    state.savedQueries[state.currentQuestionId] = textarea.value;
    saveState();
  }

  function formatInlineMarkdown(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function renderTableContainer(tableName) {
    const container = document.getElementById("schemaTableContainer");
    if (!container) return;
    container.innerHTML = "";

    let columns = [];
    let rows = [];

    if (tableName === "result") {
      if (state.lastResultTable) {
        columns = state.lastResultTable.columns || [];
        rows = state.lastResultTable.rows || [];
      } else {
        container.innerHTML = `<div style="padding:16px; color:var(--text-muted); text-align:center;">Hali so'rov bajarilmadi. SQL yozib, 'Hisobotni Tekshirish' tugmasini bosing.</div>`;
        return;
      }
    } else {
      const data = window.COMPANY_DB ? window.COMPANY_DB[tableName] : [];
      if (!data || data.length === 0) {
        container.innerHTML = `<div style="padding:16px; color:var(--text-muted);">Jadval topilmadi yoki bo'sh.</div>`;
        return;
      }
      columns = Object.keys(data[0]);
      rows = data;
    }

    const table = document.createElement("table");
    table.className = "data-table";

    // Header
    const thead = document.createElement("thead");
    const trHead = document.createElement("tr");
    columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col;
      trHead.appendChild(th);
    });
    thead.appendChild(trHead);
    table.appendChild(thead);

    // Body
    const tbody = document.createElement("tbody");
    rows.forEach((r) => {
      const tr = document.createElement("tr");
      columns.forEach((col) => {
        const td = document.createElement("td");
        const val = r[col];
        if (val === null || val === undefined) {
          td.innerHTML = `<span class="val-null">NULL</span>`;
        } else {
          td.textContent = String(val);
        }
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.appendChild(table);
  }

  function switchSchemaTab(tabName) {
    state.activeSchemaTab = tabName;
    document.querySelectorAll(".schema-tab").forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.table === tabName);
    });
    renderTableContainer(tabName);
  }

  function selectQuestion(qId) {
    state.currentQuestionId = qId;
    saveState();
    renderHUD();
    renderQuestionDossier();
  }

  // ==========================================================================
  // QUERY EXECUTION & GRADING
  // ==========================================================================

  function runUserQuery() {
    const q = getCurrentQuestion();
    const rawSql = document.getElementById("sqlInput").value.trim();

    state.savedQueries[q.id] = rawSql;
    saveState();

    const feedbackBox = document.getElementById("feedbackBox");
    feedbackBox.style.display = "block";

    // 1. Diagnostics check
    const diag = window.SQL_GRADER.detectDiagnostics(rawSql, q);
    if (diag) {
      feedbackBox.className = "feedback-box error";
      feedbackBox.innerHTML = `<strong>⚠️ Tekshiruv Xabari:</strong><br>${formatInlineMarkdown(diag)}`;
      return;
    }

    // 2. Execute user query
    const userRes = window.SQL_GRADER.execute(rawSql);
    if (!userRes.success) {
      feedbackBox.className = "feedback-box error";
      feedbackBox.innerHTML = `<strong>❌ Bajarishda Xatolik:</strong><br>${userRes.error}`;
      return;
    }

    // Store in result tab
    state.lastResultTable = userRes;
    switchSchemaTab("result");

    // 3. Execute expected reference query
    const expRes = window.SQL_GRADER.execute(q.expectedSql);

    // 4. Compare results
    const cmp = window.SQL_GRADER.compareResults(userRes, expRes);

    if (!cmp.match) {
      feedbackBox.className = "feedback-box error";
      feedbackBox.innerHTML = `
        <strong>⚠️ Natijada Farq Bor:</strong><br>
        ${cmp.message}<br><br>
        <span style="font-size:11.5px; color:#e0c288;">Maslahat: So'rov shartini, ustunlar nomini va saralashni qayta tekshiring. 'Kutilayotgan Natija' tugmasi bilan solishtiring.</span>
      `;
      return;
    }

    // SUCCESS!
    feedbackBox.className = "feedback-box success";
    const isNewSolve = !state.solvedIds.includes(q.id);

    if (isNewSolve) {
      state.solvedIds.push(q.id);
      const bonusEarned = 350 + q.sector * 50;
      state.bonusCapital += bonusEarned;
      saveState();

      if (arena) arena.spawnBonusEffect(`+$${bonusEarned} Mukofot!`);

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
      feedbackBox.style.display = "block";
      feedbackBox.className = "feedback-box info";
      feedbackBox.innerHTML = `<strong>👁 Kutilayotgan Natija:</strong> Jadval ko'rinishida ${expRes.rows.length} ta qator yuklandi.`;
    }
  }

  function revealSampleAnswer() {
    const q = getCurrentQuestion();
    const confirmReveal = confirm("Haqiqatan ham ushbu savol uchun rasmiy SQL yechim kodini ko'rmoqchimisiz?");
    if (!confirmReveal) return;

    document.getElementById("sqlInput").value = q.expectedSql;
    state.savedQueries[q.id] = q.expectedSql;
    saveState();

    const feedbackBox = document.getElementById("feedbackBox");
    feedbackBox.style.display = "block";
    feedbackBox.className = "feedback-box info";
    feedbackBox.innerHTML = `<strong>🔑 Namuna Yechim Yuklandi:</strong> 'Hisobotni Tekshirish' tugmasini bosib natijani ko'rishingiz mumkin.`;
  }

  function toggleHint() {
    const q = getCurrentQuestion();
    const hintBox = document.getElementById("hintBox");
    if (hintBox.style.display === "block") {
      hintBox.style.display = "none";
    } else {
      hintBox.style.display = "block";
      hintBox.innerHTML = `<strong>💡 Professor Atlas Maslahati:</strong><br>${formatInlineMarkdown(q.hint)}`;
    }
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
      if (arena) arena.spawnBonusEffect(`+$${choice.bonus} Mukofot!`);
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

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================

  window.addEventListener("DOMContentLoaded", () => {
    loadState();

    // Init 2D arena
    arena = new CyberArena2D("gameCanvas");
    arena.onTriggerEvent = (speakerName) => {
      const events = window.COMPANY_DB?.officeEvents || [];
      const uncompleted = events.filter((ev) => !state.completedEvents.includes(ev.id));
      const evToOpen = uncompleted.length > 0 ? uncompleted[0] : events[0];
      if (evToOpen) openEventModal(evToOpen);
    };

    // UI Buttons
    document.getElementById("btnRunSql").addEventListener("click", runUserQuery);
    document.getElementById("btnShowHint").addEventListener("click", toggleHint);
    document.getElementById("btnPreviewExpected").addEventListener("click", previewExpectedResult);
    document.getElementById("btnRevealAnswer").addEventListener("click", revealSampleAnswer);

    document.getElementById("btnPrevQ").addEventListener("click", () => {
      if (state.currentQuestionId > 1) selectQuestion(state.currentQuestionId - 1);
    });
    document.getElementById("btnNextQ").addEventListener("click", () => {
      if (state.currentQuestionId < TOTAL_QUESTIONS) selectQuestion(state.currentQuestionId + 1);
    });

    // Modals
    document.getElementById("btnTriggerEvent").addEventListener("click", () => {
      const events = window.COMPANY_DB?.officeEvents || [];
      const uncompleted = events.filter((ev) => !state.completedEvents.includes(ev.id));
      openEventModal(uncompleted.length > 0 ? uncompleted[0] : events[0]);
    });
    document.getElementById("btnQuickEvent").addEventListener("click", () => {
      const events = window.COMPANY_DB?.officeEvents || [];
      const uncompleted = events.filter((ev) => !state.completedEvents.includes(ev.id));
      openEventModal(uncompleted.length > 0 ? uncompleted[0] : events[0]);
    });
    document.getElementById("btnCloseEventModal").addEventListener("click", closeEventModal);

    document.getElementById("btnOpenMap").addEventListener("click", openMapModal);
    document.getElementById("btnCloseMapModal").addEventListener("click", closeMapModal);

    document.getElementById("btnResetProgress").addEventListener("click", resetAllProgress);

    // Schema Tabs
    document.querySelectorAll(".schema-tab").forEach((tab) => {
      tab.addEventListener("click", () => switchSchemaTab(tab.dataset.table));
    });

    // Ctrl+Enter hotkey in textarea
    document.getElementById("sqlInput").addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runUserQuery();
      }
      if (e.key === "Tab") {
        e.preventDefault();
        insertTokenAtCursor("  ");
      }
    });

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

