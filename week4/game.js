// ============================================================================
// KORPORATIV BOSH OFIS: MA'LUMOTLAR ARXITEKTORI — GAME CONTROLLER (150 QUESTIONS)
// Manages 10 Corporate Floors, 150 SQL Challenges, Career Promotions,
// Live Office Events ("Voqealiklar"), and 2D Architectural Office Interaction.
// ============================================================================

(function () {
  const STORAGE_KEY = "wiut_ds_w4_luxury_hq_v2";

  const ALL_QUESTIONS = [
    ...(window.QUESTIONS_1_50 || []),
    ...(window.QUESTIONS_51_100 || []),
    ...(window.QUESTIONS_101_150 || [])
  ].sort((a, b) => a.id - b.id);

  const TOTAL_QUESTIONS = ALL_QUESTIONS.length; // 150

  // Persistent Player State
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

  // Real-life office ambient news / watercooler updates
  const OFFICE_TICKER_NEWS = [
    { speaker: "👔 CLARK (10-Bo'lim)", text: "Nyu-York bosh ofisida yillik moliyaviy taftish boshlandi. Maosh va komissiya hisobotlari tekshirilmoqda." },
    { speaker: "🔬 JONES (20-Bo'lim)", text: "Dallas ilmiy-tadqiqot markazida tahlilchilar FORD va SCOTT yangi ma'lumotlar modelini sinovdan o'tkazishmoqda." },
    { speaker: "💼 BLAKE (30-Bo'lim)", text: "Chikago savdo bo'limida MARTIN va WARD choraklik komissiya rejasini ortig'i bilan bajarishdi." },
    { speaker: "☕ Kofe-Breyk", text: "2D ofisdagi Espresso barga yoki '💬' belgili hamkasbingiz ustiga bosib jonli ofis voqealarida qatnashing!" },
    { speaker: "🏛 Prof. Atlas", text: "Eslatma: SQL da NULL qiymatni '=' bilan emas, doimo IS NULL yoki IS DISTINCT FROM bilan tekshiring." },
    { speaker: "👑 KING (Prezident)", text: "10-qavat Pentxausida eng kuchli tahlilchilar uchun Oyna funksiyalari (OVER) va Rekursiv shajara sinovlari kutmoqda." }
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

  function formatInlineMarkdown(text) {
    if (!text) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  }

  function getCurrentQuestion() {
    return ALL_QUESTIONS.find((q) => q.id === state.currentQuestionId) || ALL_QUESTIONS[0];
  }

  function getCareerRank(solvedCount) {
    const ranks = window.COMPANY_DB?.careerRanks || [
      { minSolved: 0, title: "Stajyor-Tahlilchi", salary: "$1,200/oy", badge: "🎓" }
    ];
    let current = ranks[0];
    for (const r of ranks) {
      if (solvedCount >= r.minSolved) current = r;
    }
    return current;
  }

  // ==========================================================================
  // UI RENDERING
  // ==========================================================================

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
    const bar = document.getElementById("sectorBar");
    bar.innerHTML = "";
    const currentQ = getCurrentQuestion();
    const sectors = window.COMPANY_DB?.sectors || [];

    sectors.forEach((sec) => {
      const secQuestions = ALL_QUESTIONS.filter((q) => q.sector === sec.id);
      const solvedInSec = secQuestions.filter((q) => state.solvedIds.includes(q.id)).length;
      const isComplete = secQuestions.length > 0 && solvedInSec === secQuestions.length;

      const btn = document.createElement("button");
      btn.className = "sector-tab";
      if (currentQ.sector === sec.id) btn.classList.add("active");
      if (isComplete) btn.classList.add("completed");

      btn.innerHTML = `
        <span>${isComplete ? "✓" : `${sec.id}F`}</span>
        <span>${sec.name.replace(/^\d+-Qavat:\s*/i, "")}</span>
        <span style="opacity:0.75; font-size:10.5px;">(${solvedInSec}/${secQuestions.length})</span>
      `;

      btn.addEventListener("click", () => {
        const firstUnfinished =
          secQuestions.find((q) => !state.solvedIds.includes(q.id)) || secQuestions[0];
        if (firstUnfinished) {
          selectQuestion(firstUnfinished.id);
        }
      });

      bar.appendChild(btn);
    });
  }

  function renderFloorQuestionsStrip() {
    const strip = document.getElementById("floorQuestionStrip");
    strip.innerHTML = "";
    const currentQ = getCurrentQuestion();
    const floorQuestions = ALL_QUESTIONS.filter((q) => q.sector === currentQ.sector);

    floorQuestions.forEach((q, idx) => {
      const dot = document.createElement("button");
      dot.className = "q-dot";
      if (q.id === currentQ.id) dot.classList.add("active");
      if (state.solvedIds.includes(q.id)) dot.classList.add("solved");
      if (idx === floorQuestions.length - 1) dot.classList.add("boss");

      dot.textContent = q.id;
      dot.title = `${q.id}. ${q.title}`;
      dot.addEventListener("click", () => selectQuestion(q.id));
      strip.appendChild(dot);
    });
  }

  function renderQuestionDossier() {
    const q = getCurrentQuestion();
    const secInfo = window.COMPANY_DB?.sectors?.find((s) => s.id === q.sector);
    const range = secInfo?.range || secInfo?.floorRange || [1, 15];

    document.getElementById("floorHeaderTitle").textContent = secInfo
      ? `${secInfo.name} — ${secInfo.subtitle}`
      : `${q.sector}-Qavat`;
    document.getElementById("sectorSubTitle").textContent = secInfo
      ? `${secInfo.name} (${range[0]}–${range[1]}-savollar)`
      : `Qavat topshiriqlari`;

    document.getElementById("qDifficultyBadge").textContent = q.difficulty || `${q.sector}-Qavat`;
    document.getElementById("qSourceBadge").textContent = q.source || "Academy DS W4";
    document.getElementById("qTitle").innerHTML = `${q.id}. ${formatInlineMarkdown(q.title)}`;
    document.getElementById("qStory").innerHTML = formatInlineMarkdown(q.story);
    const taskEl = document.getElementById("qTaskUz");
    if (taskEl) {
      taskEl.innerHTML = formatInlineMarkdown(q.taskUz);
      let btnDetail = document.getElementById('btnChallengeDetail');
      if (!btnDetail) {
        btnDetail = document.createElement('button');
        btnDetail.id = 'btnChallengeDetail';
        btnDetail.className = 'btn-challenge-detail';
        btnDetail.type = 'button';
        taskEl.parentNode.appendChild(btnDetail);
      }
      btnDetail.innerHTML = `<span>📖 Batafsil</span> <small style="opacity:0.85;">(Komandani o'rganish)</small>`;
      btnDetail.onclick = () => {
        if (window.databaseEncyclopedia) {
          window.databaseEncyclopedia.openForQuestion(q, 4);
        }
      };
    }

    // Prev / Next button status
    const prevBtn = document.getElementById("btnPrevQ");
    const nextBtn = document.getElementById("btnNextQ");
    if (prevBtn) {
      prevBtn.disabled = q.id <= 1;
      prevBtn.style.opacity = q.id <= 1 ? "0.5" : "1";
    }
    if (nextBtn) {
      nextBtn.disabled = q.id >= TOTAL_QUESTIONS;
      nextBtn.style.opacity = q.id >= TOTAL_QUESTIONS ? "0.5" : "1";
    }

    // SQL Editor: restore user's previously saved query if solved, otherwise empty!
    const sqlInput = document.getElementById("sqlInput");
    sqlInput.value = state.savedQueries[q.id] || "";

    // Hide hint and feedback boxes initially
    const hintBox = document.getElementById("hintBox");
    hintBox.style.display = "none";
    hintBox.innerHTML = `<strong>💡 Arxitektor Maslahati:</strong> ${formatInlineMarkdown(q.hint)}`;

    const fb = document.getElementById("feedbackBox");
    fb.className = "feedback-box";
    fb.style.display = "none";
    fb.innerHTML = "";

    renderTokenChips(q);

    // Update 2D Engine Floor state
    if (arena) {
      const secQuestions = ALL_QUESTIONS.filter((item) => item.sector === q.sector);
      const isSecComplete = secQuestions.every((item) => state.solvedIds.includes(item.id));
      arena.setSector(q.sector, isSecComplete);
    }
  }

  function renderTokenChips(q) {
    const bar = document.getElementById("tokenBar");
    bar.innerHTML = "";

    const baseTokens = ["SELECT ", "FROM emp ", "WHERE ", "ORDER BY ", "AND ", "OR "];
    const sectorTokens = {
      1: ["*", "ename, job, sal ", "DISTINCT ", "AS ", "dept ", "salgrade "],
      2: ["BETWEEN ", "IN (10, 20)", "<> ", ">= ", "<= ", "NOT "],
      3: ["IS NULL", "IS NOT NULL", "COALESCE(comm, 0)", "NULLIF(comm, 0)", "IS DISTINCT FROM "],
      4: ["LIKE '", "ILIKE '", "LOWER(", "UPPER(", "SUBSTRING(", "LENGTH(", "|| "],
      5: ["ROUND(", "MOD(", "ABS(", "EXTRACT(MONTH FROM hiredate)", "INTERVAL '", "TO_CHAR(hiredate, '"],
      6: ["DESC", "NULLS LAST", "NULLS FIRST", "LIMIT ", "OFFSET "],
      7: ["JOIN dept d ON e.deptno = d.deptno", "LEFT JOIN ", "RIGHT JOIN ", "FULL JOIN ", "emp e JOIN emp m ON e.supervisor = m.empno"],
      8: ["COUNT(*)", "SUM(sal)", "ROUND(AVG(sal), 2)", "MIN(sal)", "MAX(sal)", "GROUP BY ", "HAVING ", "CASE WHEN "],
      9: ["(SELECT ", "IN (SELECT ", "> ANY (", "> ALL (", "EXISTS (", "NOT EXISTS (", "UNION ", "INTERSECT ", "EXCEPT "],
      10: ["OVER (PARTITION BY deptno ", "ROW_NUMBER() OVER (", "RANK() OVER (", "DENSE_RANK() OVER (", "LAG(sal) OVER (", "WITH ", "WITH RECURSIVE "]
    };

    const tokens = [...baseTokens, ...(sectorTokens[q.sector] || [])];
    tokens.forEach((tok) => {
      const chip = document.createElement("button");
      chip.className = "token-chip";
      chip.textContent = tok.trim();
      chip.addEventListener("click", () => {
        const input = document.getElementById("sqlInput");
        const start = input.selectionStart || input.value.length;
        const end = input.selectionEnd || input.value.length;
        const before = input.value.slice(0, start);
        const after = input.value.slice(end);
        const needSpace = before.length > 0 && !/\s|\($/.test(before) ? " " : "";
        input.value = before + needSpace + tok + after;
        input.focus();
      });
      bar.appendChild(chip);
    });
  }

  function renderSchemaTable(matchedEmpnos = []) {
    const container = document.getElementById("schemaTableContainer");
    const db = window.COMPANY_DB;
    if (!db) return;

    const matchedSet = new Set(matchedEmpnos);

    if (state.activeSchemaTab === "result" && state.lastResultTable) {
      const { columns, rows } = state.lastResultTable;
      let html = `<table class="data-table"><thead><tr>`;
      columns.forEach((c) => {
        html += `<th>${c}</th>`;
      });
      html += `</tr></thead><tbody>`;
      if (rows.length === 0) {
        html += `<tr><td colspan="${columns.length}" style="text-align:center; color:var(--text-muted);">0 ta qator qaytdi (Bo'sh to'plam)</td></tr>`;
      } else {
        rows.forEach((r) => {
          html += `<tr class="row-matched">`;
          r.forEach((cell) => {
            const val = cell === null || cell === "NULL" ? `<span class="null-badge">NULL</span>` : cell;
            html += `<td>${val}</td>`;
          });
          html += `</tr>`;
        });
      }
      html += `</tbody></table>`;
      container.innerHTML = html;
      return;
    }

    if (state.activeSchemaTab === "dept") {
      let html = `<table class="data-table"><thead><tr><th>deptno</th><th>dname</th><th>loc</th></tr></thead><tbody>`;
      db.dept.forEach((d) => {
        html += `<tr><td>${d.deptno}</td><td>${d.dname}</td><td>${d.loc}</td></tr>`;
      });
      html += `</tbody></table>`;
      container.innerHTML = html;
      return;
    }

    if (state.activeSchemaTab === "salgrade") {
      let html = `<table class="data-table"><thead><tr><th>grade</th><th>losal</th><th>hisal</th></tr></thead><tbody>`;
      db.salgrade.forEach((s) => {
        html += `<tr><td>${s.grade}</td><td>$${s.losal}</td><td>$${s.hisal}</td></tr>`;
      });
      html += `</tbody></table>`;
      container.innerHTML = html;
      return;
    }

    // Default: emp table
    let html = `<table class="data-table"><thead><tr>
      <th>empno</th><th>ename</th><th>job</th><th>supervisor</th><th>hiredate</th><th>sal</th><th>comm</th><th>deptno</th>
    </tr></thead><tbody>`;

    db.emp.forEach((e) => {
      const isMatch = matchedSet.has(e.empno);
      html += `<tr class="${isMatch ? "row-matched" : ""}">
        <td>${e.empno}</td>
        <td><strong>${e.ename}</strong></td>
        <td>${e.job}</td>
        <td>${e.supervisor === null ? '<span class="null-badge">NULL</span>' : e.supervisor}</td>
        <td>${e.hiredate}</td>
        <td>$${e.sal}</td>
        <td>${e.comm === null ? '<span class="null-badge">NULL</span>' : e.comm}</td>
        <td>${e.deptno}</td>
      </tr>`;
    });
    html += `</tbody></table>`;
    container.innerHTML = html;
  }

  // ==========================================================================
  // SQL EXECUTION & GRADING
  // ==========================================================================

  function runAndGradeSQL() {
    const fb = document.getElementById("feedbackBox");
    try {
      const q = getCurrentQuestion();
      const rawSql = document.getElementById("sqlInput").value;

      if (!window.SQL_GRADER) {
        if (fb) {
          fb.className = "feedback-box error";
          fb.style.display = "block";
          fb.innerHTML = `<strong>⚠️ Xatolik:</strong> SQL Grader moduli yuklanmadi.`;
        }
        return;
      }

      const gradeRes = window.SQL_GRADER.grade(rawSql, q);
      const expected = window.SQL_GRADER.getExpectedResult(q);

      if (gradeRes.passed) {
        const isFirstTime = !state.solvedIds.includes(q.id);
        const isBoss = q.id % 15 === 0;
        const reward = isFirstTime ? (isBoss ? 600 : 250) : 0;

        if (isFirstTime) {
          state.solvedIds.push(q.id);
          state.bonusCapital += reward;
        }
        state.savedQueries[q.id] = rawSql;
        state.lastResultTable = expected;
        state.activeSchemaTab = "result";
        updateSchemaTabButtons();
        saveState();

        renderHUD();
        renderSectorBar();
        renderFloorQuestionsStrip();
        renderSchemaTable(expected.matchedEmpnos || []);

        if (arena) {
          arena.celebrateSuccess(
            expected.matchedEmpnos || [],
            isFirstTime ? `+$${reward} Mukofot!` : "Tasdiqlandi!"
          );
        }

        const nextQ = ALL_QUESTIONS.find((item) => item.id === q.id + 1);
        fb.className = "feedback-box success";
        fb.style.display = "block";
        fb.innerHTML = `
          <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
            <div>
              <strong>✓ Hisobot Tasdiqlandi!</strong> ${formatInlineMarkdown(gradeRes.feedback)}
              ${isFirstTime ? `<span style="color:var(--accent-gold-bright); font-weight:600;"> (+$${reward} Bonus Kapital)</span>` : ""}
            </div>
            ${
              nextQ
                ? `<button class="btn btn-primary" id="btnInlineNext">Keyingi Savol (${nextQ.id}) ▶</button>`
                : `<span style="color:var(--accent-gold-bright); font-weight:700;">🏆 Barcha 150 Savol Yakunlandi!</span>`
            }
          </div>
        `;

        const btnInlineNext = document.getElementById("btnInlineNext");
        if (btnInlineNext && nextQ) {
          btnInlineNext.addEventListener("click", () => selectQuestion(nextQ.id));
        }

        // Check if an interactive Office Story Event ("Voqealik") triggers at this milestone!
        const milestoneEvent = (window.COMPANY_DB?.officeEvents || []).find(
          (ev) => ev.triggerAfterQ === q.id && !state.completedEvents.includes(ev.id)
        );
        if (milestoneEvent) {
          setTimeout(() => openOfficeEventModal(milestoneEvent), 900);
        }
      } else {
        fb.className = "feedback-box error";
        fb.style.display = "block";
        fb.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:8px;">
            <div><strong>✕ Tekshiruvdan o'tmadi:</strong> ${formatInlineMarkdown(gradeRes.feedback)}</div>
            <div style="font-size:12px; color:var(--text-secondary); display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-top:2px;">
              <span>Yechishga yordam:</span>
              <button class="btn" style="padding:3px 9px; font-size:11.5px;" id="btnInlinePreviewExpected">👁 Kutilayotgan Natijani Ko'rish</button>
              <button class="btn" style="padding:3px 9px; font-size:11.5px;" id="btnInlineHint">💡 Maslahatni Ochish</button>
            </div>
          </div>
        `;
        document.getElementById("btnInlinePreviewExpected")?.addEventListener("click", () => {
          document.getElementById("btnPreviewExpected")?.click();
        });
        document.getElementById("btnInlineHint")?.addEventListener("click", () => {
          const hb = document.getElementById("hintBox");
          if (hb) hb.style.display = "block";
        });
        if (arena) {
          arena.triggerErrorEffect(gradeRes.feedback);
        }
      }
    } catch (err) {
      console.error("runAndGradeSQL error:", err);
      if (fb) {
        fb.className = "feedback-box error";
        fb.style.display = "block";
        fb.innerHTML = `<strong>⚠️ Tizim Xatosi:</strong> So'rovni tekshirishda kutilmagan xatolik yuz berdi: ${err.message || err}`;
      }
    }
  }

  function selectQuestion(qId) {
    const target = ALL_QUESTIONS.find((q) => q.id === qId);
    if (!target) return;
    state.currentQuestionId = target.id;
    saveState();
    renderSectorBar();
    renderFloorQuestionsStrip();
    renderQuestionDossier();
    if (state.activeSchemaTab === "result") {
      state.activeSchemaTab = "emp";
      updateSchemaTabButtons();
    }
    renderSchemaTable([]);
  }

  function updateSchemaTabButtons() {
    document.querySelectorAll(".schema-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.table === state.activeSchemaTab);
    });
  }

  // ==========================================================================
  // INTERACTIVE REAL-LIFE OFFICE STORY EVENTS ("VOQEALIKLAR")
  // ==========================================================================

  function openOfficeEventModal(specificEvent = null) {
    const events = window.COMPANY_DB?.officeEvents || [];
    if (events.length === 0) return;

    // Pick specific event, or next uncompleted event, or cycle through events
    let ev = specificEvent;
    if (!ev) {
      ev =
        events.find((item) => !state.completedEvents.includes(item.id)) ||
        events[Math.floor(Math.random() * events.length)];
    }
    currentEventObj = ev;

    document.getElementById("eventModalTitle").textContent = ev.title;
    document.getElementById("eventAvatar").textContent = ev.avatar || "👔";
    document.getElementById("eventSpeakerName").textContent = ev.speaker;
    document.getElementById("eventSpeakerRole").textContent = ev.role;
    document.getElementById("eventNarrative").innerHTML = formatInlineMarkdown(ev.narrative);

    const outcomeBox = document.getElementById("eventOutcomeBox");
    outcomeBox.style.display = "none";
    outcomeBox.className = "feedback-box";

    const choicesBox = document.getElementById("eventChoicesContainer");
    choicesBox.innerHTML = "";

    ev.choices.forEach((ch) => {
      const btn = document.createElement("button");
      btn.className = "choice-btn";
      btn.innerHTML = formatInlineMarkdown(ch.text);
      btn.addEventListener("click", () => {
        const isFirstCompletion = !state.completedEvents.includes(ev.id);
        if (ch.correct) {
          btn.classList.add("correct-choice");
          outcomeBox.className = "feedback-box success";
          outcomeBox.style.display = "block";
          const bonus = isFirstCompletion ? ch.bonus || 350 : 50;
          state.bonusCapital += bonus;
          if (isFirstCompletion) state.completedEvents.push(ev.id);
          saveState();
          renderHUD();
          outcomeBox.innerHTML = `${formatInlineMarkdown(ch.outcome)} <br><strong style="color:var(--accent-gold-bright);">+$${bonus} Korporativ Bonus Kapital qo'shildi!</strong>`;
        } else {
          btn.classList.add("wrong-choice");
          outcomeBox.className = "feedback-box error";
          outcomeBox.style.display = "block";
          outcomeBox.innerHTML = formatInlineMarkdown(ch.outcome);
        }
      });
      choicesBox.appendChild(btn);
    });

    document.getElementById("eventModal").classList.add("open");
  }

  function openMapModal() {
    const grid = document.getElementById("fullQuestionMapGrid");
    grid.innerHTML = "";
    ALL_QUESTIONS.forEach((q) => {
      const btn = document.createElement("button");
      btn.className = "q-dot";
      btn.style.width = "100%";
      btn.style.height = "32px";
      if (q.id === state.currentQuestionId) btn.classList.add("active");
      if (state.solvedIds.includes(q.id)) btn.classList.add("solved");
      btn.textContent = q.id;
      btn.title = `${q.id}. ${q.title}`;
      btn.addEventListener("click", () => {
        selectQuestion(q.id);
        document.getElementById("mapModal").classList.remove("open");
      });
      grid.appendChild(btn);
    });
    document.getElementById("mapModal").classList.add("open");
  }

  // ==========================================================================
  // INITIALIZATION & EVENT LISTENERS
  // ==========================================================================

  function init() {
    loadState();
    arena = new window.CyberArena2D("gameCanvas");
    arena.onTriggerEvent = () => openOfficeEventModal();

    renderHUD();
    renderSectorBar();
    renderFloorQuestionsStrip();
    renderQuestionDossier();
    renderSchemaTable([]);

    // Run SQL button & Ctrl+Enter
    document.getElementById("btnRunSql").addEventListener("click", runAndGradeSQL);
    document.getElementById("sqlInput").addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        runAndGradeSQL();
      }
    });

    // Hint button
    document.getElementById("btnShowHint").addEventListener("click", () => {
      const hb = document.getElementById("hintBox");
      hb.style.display = hb.style.display === "block" ? "none" : "block";
    });

    // Preview Expected Output Table
    document.getElementById("btnPreviewExpected").addEventListener("click", () => {
      const q = getCurrentQuestion();
      const expected = window.SQL_GRADER.getExpectedResult(q);
      state.lastResultTable = expected;
      state.activeSchemaTab = "result";
      updateSchemaTabButtons();
      renderSchemaTable(expected.matchedEmpnos || []);
      if (arena && expected.matchedEmpnos) {
        arena.highlightedEmpnos = new Set(expected.matchedEmpnos);
        arena.highlightTimer = 180;
      }
    });

    // Reveal Official Solution (only when user explicitly clicks the emergency button)
    document.getElementById("btnRevealAnswer").addEventListener("click", () => {
      const q = getCurrentQuestion();
      if (q.solutions && q.solutions.length > 0) {
        document.getElementById("sqlInput").value = q.solutions[0];
        document.getElementById("sqlInput").focus();
      }
    });

    // Prev / Next Question buttons & Keyboard Shortcuts
    document.getElementById("btnPrevQ")?.addEventListener("click", () => {
      if (state.currentQuestionId > 1) selectQuestion(state.currentQuestionId - 1);
    });
    document.getElementById("btnNextQ")?.addEventListener("click", () => {
      if (state.currentQuestionId < TOTAL_QUESTIONS) selectQuestion(state.currentQuestionId + 1);
    });

    window.addEventListener("keydown", (e) => {
      if ((e.altKey || (e.ctrlKey && e.shiftKey)) && e.key === "ArrowRight") {
        e.preventDefault();
        if (state.currentQuestionId < TOTAL_QUESTIONS) selectQuestion(state.currentQuestionId + 1);
      } else if ((e.altKey || (e.ctrlKey && e.shiftKey)) && e.key === "ArrowLeft") {
        e.preventDefault();
        if (state.currentQuestionId > 1) selectQuestion(state.currentQuestionId - 1);
      }
    });

    // Schema Tabs
    document.querySelectorAll(".schema-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeSchemaTab = btn.dataset.table;
        updateSchemaTabButtons();
        renderSchemaTable([]);
      });
    });

    // Office Event Modal triggers
    document.getElementById("btnTriggerEvent").addEventListener("click", () => openOfficeEventModal());
    document.getElementById("btnQuickEvent").addEventListener("click", () => openOfficeEventModal());
    document.getElementById("btnCloseEventModal").addEventListener("click", () => {
      document.getElementById("eventModal").classList.remove("open");
    });

    // 150 Questions Map Modal
    document.getElementById("btnOpenMap").addEventListener("click", openMapModal);
    document.getElementById("btnCloseMapModal").addEventListener("click", () => {
      document.getElementById("mapModal").classList.remove("open");
    });

    // Reset Progress
    document.getElementById("btnResetProgress").addEventListener("click", () => {
      if (confirm("Barcha yechilgan savollar va mansab ko'rsatkichlarini boshidan boshlaysizmi?")) {
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
        renderSectorBar();
        renderFloorQuestionsStrip();
        renderQuestionDossier();
        renderSchemaTable([]);
      }
    });

    // Rotate Office News Ticker every 8 seconds
    setInterval(() => {
      tickerIndex = (tickerIndex + 1) % OFFICE_TICKER_NEWS.length;
      const item = OFFICE_TICKER_NEWS[tickerIndex];
      const spEl = document.getElementById("tickerSpeaker");
      const msgEl = document.getElementById("tickerMessage");
      if (spEl && msgEl) {
        spEl.textContent = item.speaker;
        msgEl.textContent = item.text;
      }
    }, 8000);

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
  }

  window.addEventListener("DOMContentLoaded", init);
})();


