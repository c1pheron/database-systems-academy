// ============================================================================
// OOP ACADEMY — DETAILED SOLUTION & PEDAGOGICAL BREAKDOWN ENGINE (PROFESSOR ADA)
// Renders rich architectural explanation, clean code, copy/load actions,
// line-by-line breakdown, common pitfalls, and Westminster CW2/Viva exam guidance.
// Solves: "batafsilni to'ldir endi. hammasi bo'lishi kerak."
// ============================================================================

(function (global) {
  "use strict";

  const SolutionRenderer = {
        openModal(challenge, lang = "uz") {
      let modal = document.getElementById("oopSolutionModal");
      if (!modal) {
        modal = document.createElement("div");
        modal.id = "oopSolutionModal";
        modal.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.85); backdrop-filter:blur(8px); -webkit-backdrop-filter:blur(8px); z-index:999999; display:flex; align-items:center; justify-content:center; padding:16px; box-sizing:border-box;";
        document.body.appendChild(modal);
      }

      const isEn = lang === "en";
      const sol = challenge.detailedSolution || {};
      const cleanCode = challenge.solution || sol.cleanCode || "// Yechim kodi mavjud emas";
      const theory = isEn ? (sol.theoryEn || sol.theory) : (sol.theory || challenge.explanation?.[lang] || "Ushbu topshiriq toza arxitektura va OOP qoidalariga asoslanadi.");

      modal.innerHTML = `
        <div class="solution-modal-card" style="background:#130f2c; border:1px solid #a855f7; border-radius:14px; max-width:850px; width:100%; max-height:88vh; height:auto; display:flex; flex-direction:column; overflow:hidden; box-shadow:0 25px 60px rgba(0,0,0,0.9); position:relative;">
          <div style="padding:14px 20px; border-bottom:1px solid rgba(168,85,247,0.25); display:flex; align-items:center; justify-content:space-between; background:#181337; flex-shrink:0;">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:18px;">💡</span>
              <span style="font-weight:700; color:#fff; font-size:14px;">${isEn ? "Detailed Solution & Clean Code" : "To'liq Yechim & Toza Kod"} (${challenge.id}-Topshiriq)</span>
            </div>
            <button id="btnCloseSolutionModal" type="button" style="background:rgba(255,255,255,0.08); border:none; color:#cbd5e1; font-size:13px; font-weight:700; padding:6px 12px; border-radius:6px; cursor:pointer; transition:all 0.15s ease;">✕ ${isEn ? "Close" : "Yopish"}</button>
          </div>
          <div id="solutionModalBody" class="solution-modal-body" style="padding:18px 20px 28px 20px; overflow-y:auto; overflow-x:hidden; flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:14px; overscroll-behavior:contain; -webkit-overflow-scrolling:touch;">
            <div style="background:rgba(168,85,247,0.1); border-left:3px solid #a855f7; padding:12px 16px; border-radius:4px; font-size:12.5px; color:#e2e8f0; line-height:1.55; flex-shrink:0;">
              ${theory}
            </div>
            <div style="border:1px solid rgba(168,85,247,0.3); border-radius:8px; overflow:hidden; background:#0c091f; display:flex; flex-direction:column; flex-shrink:0;">
              <div style="padding:8px 14px; background:#14102c; border-bottom:1px solid rgba(168,85,247,0.2); display:flex; align-items:center; justify-content:space-between; flex-shrink:0;">
                <span style="font-family:Consolas, monospace; font-size:11.5px; color:#c084fc; font-weight:700;">Main.java</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" id="btnModalCopyCode" style="background:#241c45; border:1px solid rgba(168,85,247,0.4); color:#d8b4fe; font-size:11px; padding:4px 10px; border-radius:5px; cursor:pointer; font-weight:600; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s ease;">📋 ${isEn ? "Copy" : "Nusxa"}</button>
                  <button type="button" id="btnModalLoadCode" style="background:#7c3aed; border:1px solid #a855f7; color:#fff; font-size:11px; padding:4px 12px; border-radius:5px; cursor:pointer; font-weight:700; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s ease;">📥 ${isEn ? "Load to Editor" : "Muharrirga yuklash"}</button>
                </div>
              </div>
              <pre style="margin:0; padding:16px 18px; font-family:Consolas, 'Courier New', monospace; font-size:13px; line-height:1.55; color:#f1f5f9; overflow-x:auto; background:#0c091f; white-space:pre; tab-size:4;">${escapeHtml(cleanCode)}</pre>
            </div>
          </div>
        </div>
      `;

      modal.style.display = "flex";

      const bodyEl = modal.querySelector("#solutionModalBody");
      if (bodyEl) {
        bodyEl.scrollTop = 0;
      }

      const closeModal = () => {
        modal.style.display = "none";
        window.removeEventListener("keydown", onKeyDown);
      };

      const onKeyDown = (e) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", onKeyDown);

      const btnClose = modal.querySelector("#btnCloseSolutionModal");
      if (btnClose) {
        btnClose.addEventListener("click", closeModal);
      }
      modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
      });

      const btnCopy = modal.querySelector("#btnModalCopyCode");
      if (btnCopy) {
        btnCopy.addEventListener("click", () => {
          navigator.clipboard.writeText(cleanCode).then(() => {
            btnCopy.textContent = isEn ? "✅ Copied!" : "✅ Nusxalandi!";
            setTimeout(() => { btnCopy.textContent = isEn ? "📋 Copy" : "📋 Nusxa"; }, 1800);
          });
        });
      }

      const btnLoad = modal.querySelector("#btnModalLoadCode");
      if (btnLoad) {
        btnLoad.addEventListener("click", () => {
          const editor = document.getElementById("codeEditor");
          if (editor) {
            editor.value = cleanCode;
            if (global.JavaEditorEnhancer) {
              global.JavaEditorEnhancer.updateHighlighting();
              global.JavaEditorEnhancer.scanCodeForClasses();
              global.JavaEditorEnhancer.renderChipsBar();
            }
            if (global.UMLRenderer) {
              const classes = global.UMLRenderer.parseJavaToUML(cleanCode);
              global.UMLRenderer.renderSVG(classes, "umlContainer");
            }
            editor.dispatchEvent(new Event("input", { bubbles: true }));
            editor.focus();
          }
          closeModal();
        });
      }
    },

    render(challenge, containerId, lang = "uz") {
      const container = document.getElementById(containerId);
      if (!container || !challenge) return;

      const isEn = lang === "en";
      const sol = challenge.detailedSolution || {};
      const cleanCode = challenge.solution || sol.cleanCode || "// Yechim kodi mavjud emas";
      const theory = isEn ? (sol.theoryEn || sol.theory) : (sol.theory || challenge.explanation?.[lang] || "Ushbu topshiriq toza arxitektura va OOP qoidalariga asoslanadi.");
      const breakdown = isEn ? (sol.breakdownEn || sol.breakdown || []) : (sol.breakdown || []);
      const pitfalls = isEn ? (sol.pitfallsEn || sol.pitfalls) : (sol.pitfalls || "Maydonlar ko'rinish doirasi va parametrlar tartibiga e'tibor bering.");
      const cw2Viva = isEn ? (sol.cw2VivaEn || sol.cw2Viva) : (sol.cw2Viva || "Westminster Assessment 2 (50%) va og'zaki Viva imtihonida klasslar bog'liqligi va inkapsulyatsiya qat'iy tekshiriladi.");

      let breakdownHtml = "";
      if (Array.isArray(breakdown) && breakdown.length > 0) {
        breakdownHtml = `
          <div class="solution-section">
            <div class="solution-section-title">
              <span>🔍</span> <span>${isEn ? "Line-by-Line Code Breakdown:" : "Qatorma-qator Kod Tahlili:"}</span>
            </div>
            <ul class="solution-breakdown-list">
              ${breakdown.map(item => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `;
      }

      const html = `
        <div class="solution-content">
          <!-- 1. Theory & Architectural Justification -->
          <div class="solution-section">
            <div class="solution-section-title">
              <span>💡</span> <span>${isEn ? "Architectural Principle & Theory:" : "Nazariy Mohiyat & Arxitektura:"}</span>
            </div>
            <div class="solution-theory">
              ${theory}
            </div>
          </div>

          <!-- 2. Clean Code & Interactive Actions -->
          <div class="solution-section">
            <div class="solution-section-title">
              <span>💻</span> <span>${isEn ? "Clean Java Solution Code:" : "To'liq To'g'ri Java Kodi (Clean Code):"}</span>
            </div>
            <div class="solution-code-box">
              <div class="solution-code-header">
                <span style="font-family:'JetBrains Mono', monospace; font-size:11px; color:#c084fc; font-weight:700;">Main.java</span>
                <div style="display:flex; gap:6px;">
                  <button type="button" class="solution-action-btn" id="btnCopySolutionCode" title="Kodni xotiraga nusxalash">
                    <span>📋</span> <span>${isEn ? "Copy" : "Nusxa olish"}</span>
                  </button>
                  <button type="button" class="solution-action-btn" id="btnLoadSolutionToEditor" style="background:#7c3aed; color:#fff;" title="Kodni to'g'ridan-to'g'ri tahrirchiga yuklash">
                    <span>📥</span> <span>${isEn ? "Load to Editor" : "Muharrirga yuklash"}</span>
                  </button>
                </div>
              </div>
              <pre class="solution-code-pre" id="solutionCodePre">${escapeHtml(cleanCode)}</pre>
            </div>
          </div>

          <!-- 3. Line by Line Breakdown -->
          ${breakdownHtml}

          <!-- 4. Common Pitfalls -->
          <div class="solution-section">
            <div class="solution-section-title">
              <span>⚠️</span> <span>${isEn ? "Common Pitfalls & Anti-Patterns:" : "Keng Tarqalgan Xatolar (Anti-patternlar):"}</span>
            </div>
            <div class="solution-pitfall-box">
              ${pitfalls}
            </div>
          </div>

          <!-- 5. Westminster CW2 & Viva Tips -->
          <div class="solution-section">
            <div class="solution-section-title">
              <span>🏛️</span> <span>${isEn ? "Westminster CW2 (50%) & Viva Exam Tips:" : "Westminster CW2 (50%) & Viva Imtihoni Maslahati:"}</span>
            </div>
            <div class="solution-cw2-box">
              ${cw2Viva}
            </div>
          </div>
        </div>
      `;

      container.innerHTML = html;

      // Bind Copy and Load to Editor actions
      const btnCopy = document.getElementById("btnCopySolutionCode");
      const btnLoad = document.getElementById("btnLoadSolutionToEditor");

      if (btnCopy) {
        btnCopy.addEventListener("click", () => {
          navigator.clipboard.writeText(cleanCode).then(() => {
            btnCopy.innerHTML = `<span>✅</span> <span>${isEn ? "Copied!" : "Nusxalandi!"}</span>`;
            setTimeout(() => {
              btnCopy.innerHTML = `<span>📋</span> <span>${isEn ? "Copy" : "Nusxa olish"}</span>`;
            }, 1800);
          }).catch(() => {
            alert(isEn ? "Failed to copy code" : "Kodni nusxalab bo'lmadi");
          });
        });
      }

      if (btnLoad) {
        btnLoad.addEventListener("click", () => {
          const editor = document.getElementById("codeEditor");
          if (editor) {
            editor.value = cleanCode;
            if (global.JavaEditorEnhancer) {
              global.JavaEditorEnhancer.updateHighlighting();
              global.JavaEditorEnhancer.scanCodeForClasses();
              global.JavaEditorEnhancer.renderChipsBar();
            }
            if (global.UMLRenderer) {
              const classes = global.UMLRenderer.parseJavaToUML(cleanCode);
              global.UMLRenderer.renderSVG(classes, "umlContainer");
            }
            try {
              editor.dispatchEvent(new Event("input", { bubbles: true }));
            } catch (e) {}

            btnLoad.innerHTML = `<span>✅</span> <span>${isEn ? "Loaded!" : "Yuklandi!"}</span>`;
            setTimeout(() => {
              btnLoad.innerHTML = `<span>📥</span> <span>${isEn ? "Load to Editor" : "Muharrirga yuklash"}</span>`;
            }, 1800);

            // Auto-switch to editor view on mobile devices
            const btnMobEdit = document.getElementById("btnTabMobileEditor");
            if (btnMobEdit && window.innerWidth <= 768) {
              btnMobEdit.click();
            }

            // Focus editor
            editor.focus();
          }
        });
      }
    },

    formatScenarioHTML(ch, lang = "uz") {
      if (!ch) return "";
      const isEn = lang === "en";
      let storyText = "";
      let stepsList = [];

      if (ch.story && ch.story[lang]) {
        storyText = ch.story[lang];
      } else if (ch.story && ch.story.uz) {
        storyText = ch.story.uz;
      }

      if (ch.steps && ch.steps[lang] && Array.isArray(ch.steps[lang])) {
        stepsList = ch.steps[lang];
      } else if (ch.steps && ch.steps.uz && Array.isArray(ch.steps.uz)) {
        stepsList = ch.steps.uz;
      }

      // Fallback: If not structured into story and steps, extract from ch.scenario
      if (!storyText && (!stepsList || !stepsList.length) && ch.scenario) {
        const raw = (ch.scenario[lang] || ch.scenario.uz || "");
        if (raw.includes("[Hayotiy Voqealik") || raw.includes("[Real-World") || raw.includes("Bajarilishi kerak") || raw.includes("Step-by-Step")) {
          const parts = raw.split(/\[(?:Bajarilishi kerak bo'lgan vazifalar|Step-by-Step Implementation Tasks)[^\]]*\]/i);
          storyText = (parts[0] || "").replace(/\[(?:Hayotiy Voqealik & Kontekst|Real-World Story & Context)\]/i, '').trim();
          if (parts[1]) {
            stepsList = parts[1].split(/\n\s*(?=\d+\.)/).map(s => s.replace(/^\d+\.\s*/, '').trim()).filter(Boolean);
          }
        } else {
          storyText = raw;
        }
      }

      let html = "";
      if (storyText) {
        html += `
          <div class="scenario-story-card">
            <div class="scenario-header">
              <span class="scenario-badge story-badge">
                <i class="fas fa-book-open"></i> ${isEn ? "Real-World Context & Story" : "Hayotiy Voqealik & Kontekst"}
              </span>
            </div>
            <p class="scenario-story-text">${storyText}</p>
          </div>
        `;
      }

      if (stepsList && stepsList.length > 0) {
        const stepItems = stepsList.map((step, idx) => `
          <li class="scenario-step-item">
            <span class="scenario-step-num">${idx + 1}</span>
            <div class="scenario-step-content">${step}</div>
          </li>
        `).join("");

        html += `
          <div class="scenario-steps-card">
            <div class="scenario-header">
              <span class="scenario-badge steps-badge">
                <i class="fas fa-list-check"></i> ${isEn ? ("Action Steps (1 to " + stepsList.length + ")") : ("Bajarilishi Kerak Bo'lgan Qadamlar (1 dan " + stepsList.length + " gacha)")}
              </span>
            </div>
            <ol class="scenario-steps-list">
              ${stepItems}
            </ol>
          </div>
        `;
      }

      return html || (ch.scenario ? (ch.scenario[lang] || ch.scenario.uz || "") : "");
    }
  };

  function escapeHtml(text) {
    if (!text) return "";
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  global.SolutionRenderer = SolutionRenderer;
  global.formatChallengeScenarioHTML = SolutionRenderer.formatScenarioHTML;
})(typeof window !== "undefined" ? window : global);

