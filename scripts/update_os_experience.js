// ============================================================================
// OS ACADEMY OVERHAUL: CLEAN HUD, NO FLOORS STRIP, BALL SCORE & BATAFSIL
// ============================================================================
const fs = require('fs');
const path = require('path');

const targets = [
  path.join(__dirname, '..', 'os'),
  'C:\\Users\\Ravshanbek\\Documents\\WIUT\\OS\\OS GAME W1-6'
];

function updateFile(filePath, updater) {
  if (!fs.existsSync(filePath)) return;
  const original = fs.readFileSync(filePath, 'utf8');
  const updated = updater(original);
  if (original !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`[UPDATED] ${filePath}`);
  } else {
    console.log(`[NO CHANGE] ${filePath}`);
  }
}

// 1. UPDATE STYLES.CSS
function updateStyles(css) {
  // Update root colors to Carbon Titanium
  css = css.replace(
    /:root\s*\{[\s\S]*?--shadow-matrix:\s*0\s*10px\s*30px\s*rgba\(0,\s*0,\s*0,\s*0\.65\);/m,
    `:root {
  --bg-deep: #0d1117;
  --bg-panel: #161b22;
  --bg-card: #1c2128;
  --bg-card-hover: #262c36;
  --bg-input: #0d1117;
  --bg-terminal: #090d13;

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(56, 189, 248, 0.28);
  --border-emerald: rgba(52, 211, 153, 0.35);
  --border-amber: rgba(245, 158, 11, 0.4);
  --border-active: #38bdf8;

  --text-primary: #f0f6fc;
  --text-secondary: #c9d1d9;
  --text-muted: #8b949e;

  --accent-cyan: #0284c7;
  --accent-cyan-bright: #38bdf8;
  --accent-emerald: #10b981;
  --accent-emerald-bright: #34d399;
  --accent-emerald-soft: rgba(16, 185, 129, 0.12);
  --accent-amber: #d97706;
  --accent-amber-bright: #fbbf24;
  --accent-ruby: #f43f5e;

  --shadow-matrix: 0 10px 30px rgba(0, 0, 0, 0.65);`
  );

  // Background gradient
  css = css.replace(
    /background-image:\s*radial-gradient\(circle at 50% 0%,\s*#111a2f 0%,\s*#080c14 80%\);/g,
    'background-image: radial-gradient(circle at 50% 0%, #1c2128 0%, #0d1117 85%);'
  );

  // Top HUD styling
  css = css.replace(
    /\.top-hud\s*\{[\s\S]*?z-index:\s*25;/m,
    `.top-hud {
  background: rgba(22, 27, 34, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.55);
  z-index: 25;`
  );

  // Back button styling
  css = css.replace(
    /\.btn-back\s*\{[\s\S]*?\.btn-back:hover\s*\{[\s\S]*?\}/m,
    `.btn-back {
  background: #1c2128 !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  color: var(--text-secondary) !important;
  font-weight: 600 !important;
  padding: 6px 12px !important;
  border-radius: 6px !important;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 5px !important;
  font-size: 12px !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
}

.btn-back:hover {
  background: #262c36 !important;
  border-color: var(--accent-cyan-bright) !important;
  color: #fff !important;
}`
  );

  // Stat pill
  css = css.replace(
    /\.stat-pill\s*\{[\s\S]*?font-size:\s*12px;\s*\}/m,
    `.stat-pill {
  background: rgba(28, 33, 40, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
}`
  );

  // Hide sector-bar permanently
  if (!css.includes('.sector-bar, #sectorNavList { display: none !important; }')) {
    css += `\n\n/* Clean Minimal HUD: Floor Sector Navigation Bar Hidden */\n.sector-bar, #sectorNavList {\n  display: none !important;\n}\n`;
  }

  // Cmd info card (Batafsil)
  css = css.replace(
    /\.cmd-info-card\s*\{[\s\S]*?\.cmd-card-toggle:hover\s*\{[\s\S]*?\}/m,
    `.cmd-info-card {
  margin: 10px 0;
  border-radius: 8px;
  background: #161b22;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: all 0.2s ease;
}

.cmd-info-card:hover {
  border-color: var(--accent-cyan-bright);
}

.cmd-card-toggle {
  width: 100%;
  background: #1c2128;
  border: none;
  padding: 10px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--text-primary);
  font-family: inherit;
  font-size: 13px;
  transition: background 0.15s ease;
}

.cmd-card-toggle:hover {
  background: #262c36;
}

.cmd-card-toggle.open {
  background: #21262d;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}`
  );

  return css;
}

// 2. UPDATE INDEX.HTML
function updateHtml(html) {
  // 1. Remove Maosh pill, change Kapital pill to Reyting Bali
  html = html.replace(
    /<div class="stat-pill" title="[^"]*maosh[^"]*">[\s\S]*?<\/div>/i,
    ''
  );
  html = html.replace(
    /<div class="stat-pill" title="[^"]*kapital[^"]*">[\s\S]*?<span id="hudCapital"[^>]*>[\s\S]*?<\/span>[\s\S]*?<\/div>/i,
    `<div class="stat-pill" title="To'plangan umumiy reyting bali">
        <span class="stat-label">Reyting Bali:</span>
        <span id="hudCapital" class="stat-val gold">0 Ball</span>
      </div>`
  );

  // 2. Clean HUD actions (remove btnTriggerEvent and btnResetProgress)
  html = html.replace(
    /<button id="btnTriggerEvent"[\s\S]*?<\/button>\s*/i,
    ''
  );
  html = html.replace(
    /<button id="btnResetProgress"[\s\S]*?<\/button>\s*/i,
    ''
  );

  // 3. Remove ONLY sector-bar (Safe regex anchored to sector bar header)
  html = html.replace(
    /<!-- =+\s*10 SECTORS NAVIGATION BAR\s*=+\s*-->\s*<nav class="sector-bar" id="sectorNavList">[\s\S]*?<\/nav>/i,
    ''
  );

  // 4. Overhaul Command Anatomy Card to Batafsil Yechim (No spoiler, no linux anatomiyasi title)
  html = html.replace(
    /<div class="cmd-info-card" id="cmdInfoCard">[\s\S]*?<div class="cmd-card-body" id="cmdCardBody"/i,
    `<div class="cmd-info-card" id="cmdInfoCard">
            <button type="button" class="cmd-card-toggle" id="btnToggleCmdCard" onclick="toggleCmdInfoCard()">
              <div class="cmd-card-toggle-left" style="display:flex; align-items:center; gap:8px;">
                <span class="cmd-badge-icon">💡</span>
                <span class="cmd-badge-title" style="color:var(--text-primary); font-weight:700; font-size:12.5px;">Batafsil Yechim</span>
              </div>
              <div class="cmd-card-toggle-right" style="display:flex; align-items:center; gap:6px;">
                <span id="cmdCardToggleHint" style="font-size:11.5px; color:var(--accent-cyan-bright); font-weight:600;">Ko'rish</span>
                <span id="cmdCardToggleArrow" style="font-size:12px; color:var(--text-muted);">▾</span>
              </div>
            </button>
            <div class="cmd-card-body" id="cmdCardBody"`
  );

  return html;
}

// 3. UPDATE GAME.JS
function updateJs(js) {
  // Update updateHUD
  js = js.replace(
    /if\s*\(\s*el\.hudSalary\s*\)\s*el\.hudSalary\.textContent\s*=\s*rank\.salary;/g,
    'if (el.hudSalary) el.hudSalary.textContent = "";'
  );
  js = js.replace(
    /if\s*\(\s*el\.hudCapital\s*\)\s*el\.hudCapital\.textContent\s*=\s*`\$\{state\.bonusCapital\.toLocaleString\(\)\}`;/g,
    'if (el.hudCapital) el.hudCapital.textContent = `${state.bonusCapital.toLocaleString()} Ball`;'
  );

  // Update loadQuestion command anatomy rendering (do not show command spoiler on toggle button)
  js = js.replace(
    /if\s*\(\s*el\.cmdCardBody\s*&&\s*window\.COMMAND_ANATOMY\s*\)\s*\{[\s\S]*?el\.cmdCardBody\.style\.display\s*=\s*"none";[\s\S]*?if\s*\(\s*el\.cmdCardToggleHint\s*\)\s*el\.cmdCardToggleHint\.textContent\s*=\s*"[^"]*";\s*\}/g,
    `if (el.cmdCardBody && window.COMMAND_ANATOMY) {
      const anatomy = window.COMMAND_ANATOMY.analyze(q.expectedSql || q.expectedBash, q);
      el.cmdCardBody.innerHTML = window.COMMAND_ANATOMY.renderCardHtml(anatomy);
      el.cmdCardBody.style.display = "none";
      if (el.btnToggleCmdCard) el.btnToggleCmdCard.classList.remove("open");
      if (el.cmdCardToggleHint) el.cmdCardToggleHint.textContent = "Ko'rish";
      const arrow = document.getElementById("cmdCardToggleArrow");
      if (arrow) arrow.textContent = "▾";
    }`
  );

  // Update window.toggleCmdInfoCard
  js = js.replace(
    /window\.toggleCmdInfoCard\s*=\s*function\s*\(\)\s*\{[\s\S]*?\};\s*\n/m,
    `window.toggleCmdInfoCard = function () {
    const cardBody = document.getElementById("cmdCardBody");
    const toggleBtn = document.getElementById("btnToggleCmdCard");
    const hint = document.getElementById("cmdCardToggleHint");
    const arrow = document.getElementById("cmdCardToggleArrow");
    if (!cardBody) return;

    SoundFX.playKey();
    if (cardBody.style.display === "none" || !cardBody.style.display) {
      cardBody.style.display = "flex";
      if (toggleBtn) toggleBtn.classList.add("open");
      if (hint) hint.textContent = "Yopish";
      if (arrow) arrow.textContent = "▴";
    } else {
      cardBody.style.display = "none";
      if (toggleBtn) toggleBtn.classList.remove("open");
      if (hint) hint.textContent = "Ko'rish";
      if (arrow) arrow.textContent = "▾";
    }
  };\n`
  );

  // Replace +$100 Bonus with +100 Ball
  js = js.replace(/\+\$100\s*Bonus\s*hisobingizga\s*qo'shildi!/g, "+100 Ball reytingingizga qo'shildi!");
  js = js.replace(/\+\$500\s*Bonus/g, "+500 Ball");

  return js;
}

// EXECUTE ACROSS ALL TARGET DIRECTORIES & WEEKS
targets.forEach(baseDir => {
  if (!fs.existsSync(baseDir)) return;
  for (let w = 1; w <= 6; w++) {
    const dir = path.join(baseDir, `os-w${w}-2d-game`);
    if (fs.existsSync(dir)) {
      console.log(`\n--- Processing Week ${w} in ${dir} ---`);
      updateFile(path.join(dir, 'styles.css'), updateStyles);
      updateFile(path.join(dir, 'index.html'), updateHtml);
      updateFile(path.join(dir, 'game.js'), updateJs);
    }
  }
});

console.log('\nAll OS week games updated successfully!');
