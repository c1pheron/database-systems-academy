// ============================================================================
// OOP ACADEMY — DETAILED SOLUTION & PEDAGOGICAL BREAKDOWN ENGINE (PROFESSOR ADA)
// Renders rich architectural explanation, clean code, copy/load actions,
// line-by-line breakdown, common pitfalls, and Westminster CW2/Viva exam guidance.
// Solves: "batafsilni to'ldir endi. hammasi bo'lishi kerak."
// ============================================================================

(function (global) {
  "use strict";

  const SolutionRenderer = {
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
            if (global.UMLRenderer) {
              const classes = global.UMLRenderer.parseJavaToUML(cleanCode);
              global.UMLRenderer.renderSVG(classes, "umlContainer");
            }
            btnLoad.innerHTML = `<span>✅</span> <span>${isEn ? "Loaded!" : "Yuklandi!"}</span>`;
            setTimeout(() => {
              btnLoad.innerHTML = `<span>📥</span> <span>${isEn ? "Load to Editor" : "Muharrirga yuklash"}</span>`;
            }, 1800);

            // Focus editor
            editor.focus();
          }
        });
      }
    }
  };

  function escapeHtml(text) {
    if (!text) return "";
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  global.SolutionRenderer = SolutionRenderer;
})(typeof window !== "undefined" ? window : global);
