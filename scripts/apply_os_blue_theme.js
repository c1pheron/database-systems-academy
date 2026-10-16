// ============================================================================
// OS PALETTE OVERHAUL: CYBER BLUE & NAVY THEME (DEEP COSMIC BLUE & ELECTRIC SKY)
// ============================================================================
const fs = require('fs');
const path = require('path');

const repoDir = path.join(__dirname, '..');
const localOsDir = 'C:\\Users\\Ravshanbek\\Documents\\WIUT\\OS';

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

// 1. TRANSFORM OS WEEK STYLES.CSS (CYBER BLUE)
function transformWeekStyles(css) {
  // Replace root variables with Cyber Blue
  css = css.replace(
    /:root\s*\{[\s\S]*?--shadow-matrix:\s*0\s*10px\s*30px\s*rgba\(0,\s*0,\s*0,\s*[^)]+\);/m,
    `:root {
  --bg-deep: #070b14;
  --bg-panel: #0c1322;
  --bg-card: #10192e;
  --bg-card-hover: #17233f;
  --bg-input: #080d1a;
  --bg-terminal: #080d1a;

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(56, 189, 248, 0.35);
  --border-emerald: rgba(45, 212, 191, 0.4);
  --border-amber: rgba(245, 158, 11, 0.45);
  --border-active: #38bdf8;

  --text-primary: #f0f6fc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  --accent-cyan: #0284c7;
  --accent-cyan-bright: #38bdf8;
  --accent-emerald: #2dd4bf;
  --accent-emerald-bright: #38bdf8;
  --accent-emerald-soft: rgba(56, 189, 248, 0.15);
  --accent-amber: #f59e0b;
  --accent-amber-bright: #fbbf24;
  --accent-ruby: #f43f5e;

  --shadow-matrix: 0 10px 30px rgba(0, 0, 0, 0.7);`
  );

  // Background gradient: Cosmic Navy
  css = css.replace(
    /background-image:\s*radial-gradient\(circle at 50% 0%,\s*[^)]+\);/g,
    'background-image: radial-gradient(circle at 50% 0%, #10192e 0%, #070b14 85%);'
  );

  // Top HUD
  css = css.replace(
    /\.top-hud\s*\{[\s\S]*?z-index:\s*25;/m,
    `.top-hud {
  background: rgba(12, 19, 34, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(56, 189, 248, 0.25);
  padding: 10px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  z-index: 25;`
  );

  // Back button
  css = css.replace(
    /\.btn-back\s*\{[\s\S]*?\.btn-back:hover\s*\{[\s\S]*?\}/m,
    `.btn-back {
  background: #10192e !important;
  border: 1px solid rgba(56, 189, 248, 0.35) !important;
  color: #38bdf8 !important;
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
  background: #17233f !important;
  border-color: #60a5fa !important;
  color: #93c5fd !important;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.4) !important;
}`
  );

  // Stat pill
  css = css.replace(
    /\.stat-pill\s*\{[\s\S]*?font-size:\s*12px;\s*\}/m,
    `.stat-pill {
  background: rgba(16, 25, 46, 0.85);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: 8px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
}`
  );

  // General Button
  css = css.replace(
    /\.btn\s*\{[\s\S]*?\.btn:active\s*\{[\s\S]*?\}/m,
    `.btn {
  background: #10192e;
  border: 1px solid rgba(56, 189, 248, 0.25);
  color: #f0f6fc;
  border-radius: var(--radius-sm);
  padding: 6px 12px;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.18s ease;
  user-select: none;
}

.btn:hover {
  background: #17233f;
  border-color: #38bdf8;
  color: #fff;
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}`
  );

  // Primary Button (Run)
  css = css.replace(
    /\.btn-primary\s*\{[\s\S]*?\.btn-primary:hover\s*\{[\s\S]*?\}/m,
    `.btn-primary {
  background: linear-gradient(135deg, #1d4ed8, #0284c7);
  border-color: #38bdf8;
  color: #fff;
  font-weight: 700;
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.4);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  border-color: #93c5fd;
  color: #fff;
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.6);
}`
  );

  // Panel Header
  css = css.replace(
    /\.panel-header\s*\{[\s\S]*?border-bottom:\s*[^;]+;/m,
    `.panel-header {
  background: #10192e;
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);`
  );

  // Question Dots
  css = css.replace(
    /\.q-strip\s*\{[\s\S]*?\.q-dot\.solved\.active\s*\{[\s\S]*?\}/m,
    `.q-strip {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 14px;
  background: #0c1322;
  border-bottom: 1px solid rgba(56, 189, 248, 0.18);
  overflow-x: auto;
}

.q-dot {
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background: #10192e;
  border: 1px solid rgba(56, 189, 248, 0.2);
  color: #64748b;
  font-size: 10.5px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.q-dot:hover {
  border-color: #38bdf8;
  color: #f0f6fc;
}

.q-dot.active {
  background: #0284c7;
  border-color: #38bdf8;
  color: #fff;
  font-weight: 800;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
}

.q-dot.solved {
  background: rgba(45, 212, 191, 0.15);
  border-color: #2dd4bf;
  color: #2dd4bf;
}

.q-dot.solved.active {
  background: #2dd4bf;
  border-color: #99f6e4;
  color: #070b14;
  font-weight: 800;
}`
  );

  // Cmd info card (Batafsil)
  css = css.replace(
    /\.cmd-info-card\s*\{[\s\S]*?\.cmd-card-toggle\.open\s*\{[\s\S]*?\}/m,
    `.cmd-info-card {
  margin: 10px 0;
  border-radius: 8px;
  background: #0c1322;
  border: 1px solid rgba(56, 189, 248, 0.25);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.2s ease;
}

.cmd-info-card:hover {
  border-color: #38bdf8;
}

.cmd-card-toggle {
  width: 100%;
  background: #10192e;
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
  background: #17233f;
}

.cmd-card-toggle.open {
  background: #17233f;
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
}`
  );

  // Terminal Window & Container
  css = css.replace(
    /\.terminal-window\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*18px\s*rgba\(0,\s*0,\s*0,\s*[^)]+\);/m,
    `.terminal-window {
  background: #080d1a;
  border: 1px solid rgba(56, 189, 248, 0.35);
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);`
  );

  // Terminal header
  css = css.replace(
    /\.terminal-header\s*\{[\s\S]*?justify-content:\s*space-between;/m,
    `.terminal-header {
  background: #0c1322;
  border-bottom: 1px solid rgba(56, 189, 248, 0.2);
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;`
  );

  // Terminal input row
  css = css.replace(
    /\.terminal-input-row\s*\{[\s\S]*?gap:\s*8px;/m,
    `.terminal-input-row {
  display: flex;
  align-items: center;
  background: #080d1a;
  border-top: 1px solid rgba(56, 189, 248, 0.2);
  padding: 6px 10px;
  gap: 8px;`
  );

  // Mode segmented bar (Topshiriqlar vs Sandbox)
  css = css.replace(
    /\.cli-mode-segmented-bar\s*\{[\s\S]*?\.cli-mode-pill\.active\s*\{[\s\S]*?\}/m,
    `.cli-mode-segmented-bar {
  display: flex;
  gap: 8px;
  background: #0c1322;
  padding: 4px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(56, 189, 248, 0.2);
  margin-bottom: 12px;
}

.cli-mode-pill {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #94a3b8;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cli-mode-pill:hover {
  background: rgba(56, 189, 248, 0.08);
  color: #f0f6fc;
}

.cli-mode-pill.active {
  background: #10192e;
  border-color: #38bdf8;
  color: #fff;
  box-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
}`
  );

  // Dictionary Button
  css = css.replace(
    /\.btn-dictionary\s*\{[\s\S]*?\.btn-dictionary:hover\s*\{[\s\S]*?\}/m,
    `.btn-dictionary {
  background: linear-gradient(135deg, rgba(2, 132, 199, 0.25), rgba(12, 19, 34, 0.9)) !important;
  border: 1px solid #38bdf8 !important;
  color: #f0f6fc !important;
  font-weight: 600 !important;
}

.btn-dictionary:hover {
  background: #0284c7 !important;
  color: #fff !important;
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.5) !important;
}`
  );

  return css;
}

// 2. TRANSFORM OS WEEK GAME.JS (CYBER BLUE TERMINAL PROMPT & COLORS)
function transformWeekJs(js) {
  // Replace Tokyo Night lavender/colors with Sky Blue & Navy accents
  js = js.replace(/color:#bb9af7/g, 'color:#38bdf8');
  js = js.replace(/color:#73daca/g, 'color:#34d399');
  js = js.replace(/color:#7aa2f7/g, 'color:#60a5fa');
  return js;
}

// 3. TRANSFORM OS/STYLES.CSS (HUB - CYBER BLUE)
function transformHubStyles(css) {
  css = css.replace(
    /:root\s*\{[\s\S]*?--shadow-card-hover:\s*0\s*16px\s*36px\s*rgba\(0,\s*0,\s*0,\s*[^)]+\);/m,
    `:root {
  --bg-deep: #070b14;
  --bg-panel: #0c1322;
  --bg-card: #10192e;
  --bg-card-hover: #17233f;
  --bg-hud: rgba(12, 19, 34, 0.96);

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(56, 189, 248, 0.35);
  --border-emerald: rgba(45, 212, 191, 0.4);

  --text-primary: #f0f6fc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  --accent-cyan: #0284c7;
  --accent-cyan-bright: #38bdf8;
  --accent-emerald: #2dd4bf;
  --accent-emerald-bright: #38bdf8;
  --accent-amber: #f59e0b;
  --accent-amber-bright: #fbbf24;
  --accent-rose: #f43f5e;

  --radius-lg: 12px;
  --radius-md: 10px;
  --radius-sm: 6px;

  --shadow-cyber: 0 10px 28px rgba(0, 0, 0, 0.7);
  --shadow-card-hover: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 20px rgba(56, 189, 248, 0.3);`
  );

  css = css.replace(
    /background-image:\s*radial-gradient\(circle at 50% 0%,\s*[^)]+\);/g,
    'background-image: radial-gradient(circle at 50% 0%, #10192e 0%, #070b14 85%);'
  );

  // Hub Brand emblem
  css = css.replace(
    /background:\s*linear-gradient\(135deg,\s*(#059669|#7aa2f7),\s*(#0f172a|#bb9af7)\);/g,
    'background: linear-gradient(135deg, #1d4ed8, #0284c7);'
  );

  // Hub Button Back
  css = css.replace(
    /\.btn-back-hub\s*\{[\s\S]*?\.btn-back-hub:hover\s*\{[\s\S]*?\}/m,
    `.btn-back-hub {
  background: #10192e !important;
  border: 1px solid rgba(56, 189, 248, 0.35) !important;
  color: #38bdf8 !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  padding: 6px 12px !important;
  border-radius: var(--radius-sm) !important;
  text-decoration: none !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  transition: all 0.2s ease !important;
}

.btn-back-hub:hover {
  background: #17233f !important;
  border-color: #60a5fa !important;
  color: #93c5fd !important;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.4) !important;
}`
  );

  // Hub launch button
  css = css.replace(
    /\.btn-launch\s*\{[\s\S]*?\.btn-launch:hover\s*\{[\s\S]*?\}/m,
    `.btn-launch {
  background: linear-gradient(135deg, #1d4ed8, #0284c7);
  color: #fff;
  border: 1px solid #38bdf8;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 12.5px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.35);
}

.btn-launch:hover {
  background: linear-gradient(135deg, #2563eb, #38bdf8);
  color: #fff;
  box-shadow: 0 0 18px rgba(56, 189, 248, 0.6);
  transform: translateY(-1px);
}`
  );

  return css;
}

// 4. TRANSFORM OS_DICTIONARY.CSS (CYBER BLUE)
function transformDictStyles(css) {
  css = css.replace(/#bb9af7/g, '#38bdf8');
  css = css.replace(/#7aa2f7/g, '#60a5fa');
  css = css.replace(/#ff9e64/g, '#38bdf8');
  return css;
}

// 5. TRANSFORM APP.JS (TELEGRAM COLORS)
function transformAppJs(js) {
  js = js.replace(/setHeaderColor\("[^"]+"\)/g, 'setHeaderColor("#0c1322")');
  js = js.replace(/setBackgroundColor\("[^"]+"\)/g, 'setBackgroundColor("#070b14")');
  return js;
}

// 6. TRANSFORM MAIN PORTAL (INDEX.HTML) FOR OS MODULE CARD (CYBER BLUE)
function transformPortalHtml(html) {
  // OS card top border gradient
  html = html.replace(
    /\.card-os::before\s*\{[\s\S]*?background:\s*linear-gradient\(90deg,\s*[^;]+;/g,
    '.card-os::before {\n      background: linear-gradient(90deg, #1d4ed8, #38bdf8);'
  );
  // OS card hover glow
  html = html.replace(
    /box-shadow:\s*0\s*16px\s*40px\s*rgba\(0,\s*0,\s*0,\s*0\.7\),\s*0\s*0\s*24px\s*rgba\(187,\s*154,\s*247,\s*0\.35\);/g,
    'box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 24px rgba(56, 189, 248, 0.35);'
  );
  // OS tag
  html = html.replace(
    /\.tag-os\s*\{[\s\S]*?\}/g,
    '.tag-os { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); }'
  );
  // OS button
  html = html.replace(
    /\.btn-gateway-os\s*\{[\s\S]*?background:\s*linear-gradient\(135deg,\s*[^;]+;[\s\S]*?border:\s*1px\s*solid\s*[^;]+;/g,
    `.btn-gateway-os {
      background: linear-gradient(135deg, #1d4ed8, #0284c7);
      color: #ffffff;
      border: 1px solid #38bdf8;`
  );
  html = html.replace(
    /\.btn-gateway-os:hover\s*\{[\s\S]*?background:\s*linear-gradient\(135deg,\s*[^;]+;[\s\S]*?color:\s*[^;]+;/g,
    `.btn-gateway-os:hover {
      background: linear-gradient(135deg, #2563eb, #38bdf8);
      color: #ffffff;`
  );

  return html;
}

// EXECUTE
console.log('=== APPLYING CYBER BLUE PALETTE TO OPERATING SYSTEMS ===\n');

// 1. All Weeks in DS repo
for (let w = 1; w <= 6; w++) {
  const wDir = path.join(repoDir, 'os', `os-w${w}-2d-game`);
  if (fs.existsSync(wDir)) {
    console.log(`Processing Week ${w} (DS Repo)...`);
    updateFile(path.join(wDir, 'styles.css'), transformWeekStyles);
    updateFile(path.join(wDir, 'game.js'), transformWeekJs);
  }
}

// 2. All Weeks in local OS dir
for (let w = 1; w <= 6; w++) {
  const wDir = path.join(localOsDir, 'OS GAME W1-6', `os-w${w}-2d-game`);
  if (fs.existsSync(wDir)) {
    console.log(`Processing Week ${w} (Local OS)...`);
    updateFile(path.join(wDir, 'styles.css'), transformWeekStyles);
    updateFile(path.join(wDir, 'game.js'), transformWeekJs);
  }
}

// 3. OS Hub in DS Repo
console.log('\nProcessing OS Hub (DS Repo)...');
updateFile(path.join(repoDir, 'os', 'styles.css'), transformHubStyles);
updateFile(path.join(repoDir, 'os', 'os_dictionary.css'), transformDictStyles);
updateFile(path.join(repoDir, 'os', 'app.js'), transformAppJs);

// 4. OS Hub in Local OS dir
if (fs.existsSync(path.join(localOsDir, 'operating-systems-academy'))) {
  console.log('\nProcessing OS Hub (Local OS)...');
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'styles.css'), transformHubStyles);
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'os_dictionary.css'), transformDictStyles);
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'app.js'), transformAppJs);
}

// 5. Portal index.html in DS and root
console.log('\nProcessing Portals...');
updateFile(path.join(repoDir, 'index.html'), transformPortalHtml);
updateFile('C:\\Users\\Ravshanbek\\Documents\\WIUT\\index.html', transformPortalHtml);

console.log('\n=== COMPLETED CYBER BLUE OVERHAUL ===');
