// ============================================================================
// OS PALETTE OVERHAUL: AUTHENTIC TOKYO NIGHT THEME (MIDNIGHT, LAVENDER & PEACH)
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

// 1. TRANSFORM OS WEEK STYLES.CSS (TOKYO NIGHT)
function transformWeekStyles(css) {
  // Replace root variables with Tokyo Night
  css = css.replace(
    /:root\s*\{[\s\S]*?--shadow-matrix:\s*0\s*10px\s*30px\s*rgba\(0,\s*0,\s*0,\s*[^)]+\);/m,
    `:root {
  --bg-deep: #1a1b26;
  --bg-panel: #1f2335;
  --bg-card: #24283b;
  --bg-card-hover: #292e42;
  --bg-input: #16161e;
  --bg-terminal: #16161e;

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(187, 154, 247, 0.35);
  --border-emerald: rgba(115, 218, 202, 0.4);
  --border-amber: rgba(255, 158, 100, 0.45);
  --border-active: #bb9af7;

  --text-primary: #c0caf5;
  --text-secondary: #a9b1d6;
  --text-muted: #565f89;

  --accent-cyan: #7aa2f7;
  --accent-cyan-bright: #bb9af7;
  --accent-emerald: #73daca;
  --accent-emerald-bright: #73daca;
  --accent-emerald-soft: rgba(115, 218, 202, 0.15);
  --accent-amber: #ff9e64;
  --accent-amber-bright: #e0af68;
  --accent-ruby: #f7768e;

  --shadow-matrix: 0 10px 30px rgba(0, 0, 0, 0.65);`
  );

  // Background gradient: Tokyo Night deep midnight
  css = css.replace(
    /background-image:\s*radial-gradient\(circle at 50% 0%,\s*[^)]+\);/g,
    'background-image: radial-gradient(circle at 50% 0%, #24283b 0%, #16161e 85%);'
  );

  // Top HUD
  css = css.replace(
    /\.top-hud\s*\{[\s\S]*?z-index:\s*25;/m,
    `.top-hud {
  background: rgba(26, 27, 38, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(187, 154, 247, 0.2);
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
  background: #24283b !important;
  border: 1px solid rgba(187, 154, 247, 0.3) !important;
  color: #bb9af7 !important;
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
  background: #2f354d !important;
  border-color: #ff9e64 !important;
  color: #ff9e64 !important;
  box-shadow: 0 0 12px rgba(255, 158, 100, 0.3) !important;
}`
  );

  // Stat pill
  css = css.replace(
    /\.stat-pill\s*\{[\s\S]*?font-size:\s*12px;\s*\}/m,
    `.stat-pill {
  background: rgba(36, 40, 59, 0.85);
  border: 1px solid rgba(187, 154, 247, 0.18);
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
  background: #24283b;
  border: 1px solid rgba(187, 154, 247, 0.2);
  color: #c0caf5;
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
  background: #2f354d;
  border-color: #bb9af7;
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
  background: linear-gradient(135deg, #7aa2f7, #bb9af7);
  border-color: #bb9af7;
  color: #1a1b26;
  font-weight: 700;
  box-shadow: 0 0 14px rgba(187, 154, 247, 0.4);
}

.btn-primary:hover {
  background: linear-gradient(135deg, #bb9af7, #ff9e64);
  border-color: #ff9e64;
  color: #16161e;
  box-shadow: 0 0 18px rgba(255, 158, 100, 0.5);
}`
  );

  // Panel Header
  css = css.replace(
    /\.panel-header\s*\{[\s\S]*?border-bottom:\s*[^;]+;/m,
    `.panel-header {
  background: #24283b;
  border-bottom: 1px solid rgba(187, 154, 247, 0.18);`
  );

  // Question Dots
  css = css.replace(
    /\.q-strip\s*\{[\s\S]*?\.q-dot\.solved\.active\s*\{[\s\S]*?\}/m,
    `.q-strip {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 14px;
  background: #1f2335;
  border-bottom: 1px solid rgba(187, 154, 247, 0.15);
  overflow-x: auto;
}

.q-dot {
  width: 24px;
  height: 24px;
  border-radius: 5px;
  background: #24283b;
  border: 1px solid rgba(187, 154, 247, 0.2);
  color: #565f89;
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
  border-color: #bb9af7;
  color: #c0caf5;
}

.q-dot.active {
  background: #bb9af7;
  border-color: #c0caf5;
  color: #1a1b26;
  font-weight: 800;
  box-shadow: 0 0 12px rgba(187, 154, 247, 0.5);
}

.q-dot.solved {
  background: rgba(115, 218, 202, 0.18);
  border-color: #73daca;
  color: #73daca;
}

.q-dot.solved.active {
  background: #73daca;
  border-color: #bbf7d0;
  color: #1a1b26;
  font-weight: 800;
}`
  );

  // Cmd info card (Batafsil)
  css = css.replace(
    /\.cmd-info-card\s*\{[\s\S]*?\.cmd-card-toggle\.open\s*\{[\s\S]*?\}/m,
    `.cmd-info-card {
  margin: 10px 0;
  border-radius: 8px;
  background: #1f2335;
  border: 1px solid rgba(187, 154, 247, 0.25);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.2s ease;
}

.cmd-info-card:hover {
  border-color: #bb9af7;
}

.cmd-card-toggle {
  width: 100%;
  background: #24283b;
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
  background: #292e42;
}

.cmd-card-toggle.open {
  background: #292e42;
  border-bottom: 1px solid rgba(187, 154, 247, 0.2);
}`
  );

  // Terminal Window & Container
  css = css.replace(
    /\.terminal-window\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*18px\s*rgba\(0,\s*0,\s*0,\s*0\.65\);/m,
    `.terminal-window {
  background: #16161e;
  border: 1px solid rgba(187, 154, 247, 0.3);
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.7);`
  );

  // Terminal header
  css = css.replace(
    /\.terminal-header\s*\{[\s\S]*?justify-content:\s*space-between;/m,
    `.terminal-header {
  background: #1f2335;
  border-bottom: 1px solid rgba(187, 154, 247, 0.2);
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
  background: #16161e;
  border-top: 1px solid rgba(187, 154, 247, 0.2);
  padding: 6px 10px;
  gap: 8px;`
  );

  // Mode segmented bar (Topshiriqlar vs Sandbox)
  css = css.replace(
    /\.cli-mode-segmented-bar\s*\{[\s\S]*?\.cli-mode-pill\.active\s*\{[\s\S]*?\}/m,
    `.cli-mode-segmented-bar {
  display: flex;
  gap: 8px;
  background: #1f2335;
  padding: 4px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(187, 154, 247, 0.18);
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
  color: #a9b1d6;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cli-mode-pill:hover {
  background: rgba(187, 154, 247, 0.08);
  color: #c0caf5;
}

.cli-mode-pill.active {
  background: #24283b;
  border-color: #bb9af7;
  color: #fff;
  box-shadow: 0 0 10px rgba(187, 154, 247, 0.25);
}`
  );

  // Dictionary Button
  css = css.replace(
    /\.btn-dictionary\s*\{[\s\S]*?\.btn-dictionary:hover\s*\{[\s\S]*?\}/m,
    `.btn-dictionary {
  background: linear-gradient(135deg, rgba(122, 162, 247, 0.2), rgba(187, 154, 247, 0.2)) !important;
  border: 1px solid #bb9af7 !important;
  color: #c0caf5 !important;
  font-weight: 600 !important;
}

.btn-dictionary:hover {
  background: #bb9af7 !important;
  color: #1a1b26 !important;
  box-shadow: 0 0 14px rgba(187, 154, 247, 0.5) !important;
}`
  );

  return css;
}

// 2. TRANSFORM OS WEEK GAME.JS (TOKYO NIGHT TERMINAL PROMPT & COLORS)
function transformWeekJs(js) {
  // Update Kali prompt colors: User/Host/Path in Tokyo Night palette
  // userland (lavender #bb9af7), host (peach #ff9e64), path (#73daca)
  js = js.replace(/color:#34d399/g, 'color:#bb9af7');
  js = js.replace(/color:#00ff88/g, 'color:#73daca');
  js = js.replace(/color:#059669/g, 'color:#7aa2f7');

  return js;
}

// 3. TRANSFORM OS/STYLES.CSS (HUB - TOKYO NIGHT)
function transformHubStyles(css) {
  css = css.replace(
    /:root\s*\{[\s\S]*?--shadow-card-hover:\s*0\s*16px\s*36px\s*rgba\(0,\s*0,\s*0,\s*[^)]+\);/m,
    `:root {
  --bg-deep: #1a1b26;
  --bg-panel: #1f2335;
  --bg-card: #24283b;
  --bg-card-hover: #292e42;
  --bg-hud: rgba(26, 27, 38, 0.96);

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(187, 154, 247, 0.35);
  --border-emerald: rgba(115, 218, 202, 0.4);

  --text-primary: #c0caf5;
  --text-secondary: #a9b1d6;
  --text-muted: #565f89;

  --accent-cyan: #7aa2f7;
  --accent-cyan-bright: #bb9af7;
  --accent-emerald: #73daca;
  --accent-emerald-bright: #73daca;
  --accent-amber: #ff9e64;
  --accent-amber-bright: #e0af68;
  --accent-rose: #f7768e;

  --radius-lg: 12px;
  --radius-md: 10px;
  --radius-sm: 6px;

  --shadow-cyber: 0 10px 28px rgba(0, 0, 0, 0.65);
  --shadow-card-hover: 0 16px 36px rgba(0, 0, 0, 0.75), 0 0 20px rgba(187, 154, 247, 0.3);`
  );

  css = css.replace(
    /background-image:\s*radial-gradient\(circle at 50% 0%,\s*[^)]+\);/g,
    'background-image: radial-gradient(circle at 50% 0%, #24283b 0%, #16161e 85%);'
  );

  // Hub Brand emblem
  css = css.replace(
    /\.brand-emblem\s*\{[\s\S]*?font-size:\s*24px;/m,
    `.brand-emblem {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #7aa2f7, #bb9af7);
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;`
  );

  // Hub Button Back
  css = css.replace(
    /\.btn-back-hub\s*\{[\s\S]*?\.btn-back-hub:hover\s*\{[\s\S]*?\}/m,
    `.btn-back-hub {
  background: #24283b !important;
  border: 1px solid rgba(187, 154, 247, 0.3) !important;
  color: #bb9af7 !important;
  font-size: 12px !important;
  font-weight: 600 !important;
  padding: 6px 12px !important;
  border-radius: var(--radius-sm) !important;
  text-decoration: none !important;
  transition: all 0.2s ease !important;
}

.btn-back-hub:hover {
  background: #2f354d !important;
  border-color: #ff9e64 !important;
  color: #ff9e64 !important;
  box-shadow: 0 0 12px rgba(255, 158, 100, 0.3) !important;
}`
  );

  // Hub launch button
  css = css.replace(
    /\.btn-launch\s*\{[\s\S]*?\.btn-launch:hover\s*\{[\s\S]*?\}/m,
    `.btn-launch {
  background: linear-gradient(135deg, #7aa2f7, #bb9af7);
  color: #1a1b26;
  border: 1px solid #c0caf5;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-size: 12.5px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
  box-shadow: 0 0 12px rgba(187, 154, 247, 0.3);
}

.btn-launch:hover {
  background: linear-gradient(135deg, #bb9af7, #ff9e64);
  color: #16161e;
  box-shadow: 0 0 18px rgba(255, 158, 100, 0.5);
  transform: translateY(-1px);
}`
  );

  return css;
}

// 4. TRANSFORM OS_DICTIONARY.CSS (TOKYO NIGHT)
function transformDictStyles(css) {
  css = css.replace(/#059669/g, '#7aa2f7');
  css = css.replace(/#34d399/g, '#bb9af7');
  css = css.replace(/#10b981/g, '#bb9af7');
  css = css.replace(/#00ff88/g, '#ff9e64');
  return css;
}

// 5. TRANSFORM APP.JS (TELEGRAM COLORS)
function transformAppJs(js) {
  js = js.replace(/setHeaderColor\("[^"]+"\)/g, 'setHeaderColor("#1f2335")');
  js = js.replace(/setBackgroundColor\("[^"]+"\)/g, 'setBackgroundColor("#1a1b26")');
  return js;
}

// 6. TRANSFORM MAIN PORTAL (INDEX.HTML) FOR OS MODULE CARD (TOKYO NIGHT)
function transformPortalHtml(html) {
  // OS card top border gradient
  html = html.replace(
    /\.card-os::before\s*\{[\s\S]*?background:\s*linear-gradient\(90deg,\s*[^;]+;/g,
    '.card-os::before {\n      background: linear-gradient(90deg, #7aa2f7, #bb9af7);'
  );
  // OS card hover glow
  html = html.replace(
    /box-shadow:\s*0\s*16px\s*40px\s*rgba\(0,\s*0,\s*0,\s*0\.7\),\s*0\s*0\s*24px\s*rgba\(16,\s*185,\s*129,\s*0\.25\);/g,
    'box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 24px rgba(187, 154, 247, 0.35);'
  );
  // OS tag
  html = html.replace(
    /\.tag-os\s*\{\s*background:\s*rgba\(16,\s*185,\s*129,\s*0\.15\);\s*color:\s*#34d399;\s*border:\s*1px\s*solid\s*rgba\(16,\s*185,\s*129,\s*0\.3\);\s*\}/g,
    '.tag-os { background: rgba(187, 154, 247, 0.15); color: #bb9af7; border: 1px solid rgba(187, 154, 247, 0.35); }'
  );
  // OS button
  html = html.replace(
    /\.btn-gateway-os\s*\{[\s\S]*?background:\s*linear-gradient\(135deg,\s*[^;]+;[\s\S]*?border:\s*1px\s*solid\s*[^;]+;/g,
    `.btn-gateway-os {
      background: linear-gradient(135deg, #7aa2f7, #bb9af7);
      color: #1a1b26;
      border: 1px solid #c0caf5;`
  );
  html = html.replace(
    /\.btn-gateway-os:hover\s*\{[\s\S]*?background:\s*#00ff88;[\s\S]*?color:\s*#06140b;/g,
    `.btn-gateway-os:hover {
      background: linear-gradient(135deg, #bb9af7, #ff9e64);
      color: #16161e;`
  );

  return html;
}

// EXECUTE
console.log('=== APPLYING TOKYO NIGHT PALETTE TO OPERATING SYSTEMS ===\n');

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

// 3. OS Hub
console.log('\nProcessing OS Hub...');
updateFile(path.join(repoDir, 'os', 'styles.css'), transformHubStyles);
updateFile(path.join(repoDir, 'os', 'os_dictionary.css'), transformDictStyles);
updateFile(path.join(repoDir, 'os', 'app.js'), transformAppJs);

if (fs.existsSync(path.join(localOsDir, 'operating-systems-academy'))) {
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'styles.css'), transformHubStyles);
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'os_dictionary.css'), transformDictStyles);
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'app.js'), transformAppJs);
}

// 4. Portal index.html in DS and root
console.log('\nProcessing Portals...');
updateFile(path.join(repoDir, 'index.html'), transformPortalHtml);
updateFile('C:\\Users\\Ravshanbek\\Documents\\WIUT\\index.html', transformPortalHtml);

console.log('\n=== COMPLETED TOKYO NIGHT OVERHAUL ===');
