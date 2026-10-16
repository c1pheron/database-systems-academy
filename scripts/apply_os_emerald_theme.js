// ============================================================================
// COMPLETE OS PALETTE OVERHAUL: AUTHENTIC LINUX TERMINAL EMERALD & MATRIX
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

// 1. TRANSFORM OS WEEK STYLES.CSS
function transformWeekStyles(css) {
  // Replace root variables
  css = css.replace(
    /:root\s*\{[\s\S]*?--shadow-matrix:\s*0\s*10px\s*30px\s*rgba\(0,\s*0,\s*0,\s*0\.65\);/m,
    `:root {
  --bg-deep: #080c0a;
  --bg-panel: #0e1411;
  --bg-card: #131b16;
  --bg-card-hover: #18241d;
  --bg-input: #080c0a;
  --bg-terminal: #050806;

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(16, 185, 129, 0.32);
  --border-emerald: rgba(16, 185, 129, 0.45);
  --border-amber: rgba(245, 158, 11, 0.4);
  --border-active: #00ff88;

  --text-primary: #f0fdf4;
  --text-secondary: #c0cfc5;
  --text-muted: #738479;

  --accent-cyan: #059669;
  --accent-cyan-bright: #34d399;
  --accent-emerald: #10b981;
  --accent-emerald-bright: #00ff88;
  --accent-emerald-soft: rgba(16, 185, 129, 0.15);
  --accent-amber: #d97706;
  --accent-amber-bright: #fbbf24;
  --accent-ruby: #f43f5e;

  --shadow-matrix: 0 10px 30px rgba(0, 0, 0, 0.7);`
  );

  // Background gradient
  css = css.replace(
    /background-image:\s*radial-gradient\(circle at 50% 0%,\s*[^)]+\);/g,
    'background-image: radial-gradient(circle at 50% 0%, #15241b 0%, #080c0a 85%);'
  );

  // Top HUD
  css = css.replace(
    /\.top-hud\s*\{[\s\S]*?z-index:\s*25;/m,
    `.top-hud {
  background: rgba(14, 20, 17, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
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
  background: #131b16 !important;
  border: 1px solid rgba(16, 185, 129, 0.3) !important;
  color: #34d399 !important;
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
  background: #18241d !important;
  border-color: #00ff88 !important;
  color: #fff !important;
  box-shadow: 0 0 12px rgba(0, 255, 136, 0.25) !important;
}`
  );

  // Stat pill
  css = css.replace(
    /\.stat-pill\s*\{[\s\S]*?font-size:\s*12px;\s*\}/m,
    `.stat-pill {
  background: rgba(19, 27, 22, 0.85);
  border: 1px solid rgba(16, 185, 129, 0.18);
  border-radius: 8px;
  padding: 5px 12px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12px;
}`
  );

  // Panel Header
  css = css.replace(
    /\.panel-header\s*\{[\s\S]*?border-bottom:\s*[^;]+;/m,
    `.panel-header {
  background: #131b16;
  border-bottom: 1px solid rgba(16, 185, 129, 0.18);`
  );

  // Cmd info card (Batafsil)
  css = css.replace(
    /\.cmd-info-card\s*\{[\s\S]*?\.cmd-card-toggle\.open\s*\{[\s\S]*?\}/m,
    `.cmd-info-card {
  margin: 10px 0;
  border-radius: 8px;
  background: #0e1411;
  border: 1px solid rgba(16, 185, 129, 0.25);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  transition: all 0.2s ease;
}

.cmd-info-card:hover {
  border-color: #00ff88;
}

.cmd-card-toggle {
  width: 100%;
  background: #131b16;
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
  background: #18241d;
}

.cmd-card-toggle.open {
  background: #18241d;
  border-bottom: 1px solid rgba(16, 185, 129, 0.2);
}`
  );

  // Replace all lingering cyan/blue color codes
  css = css.replace(/#0284c7/g, '#059669');
  css = css.replace(/#38bdf8/g, '#34d399');
  css = css.replace(/#06b6d4/g, '#10b981');
  css = css.replace(/#22d3ee/g, '#00ff88');
  css = css.replace(/#67e8f9/g, '#6ee7b7');
  css = css.replace(/#7dd3fc/g, '#a7f3d0');
  css = css.replace(/#0a101f/g, '#0e1411');
  css = css.replace(/#0b1120/g, '#080c0a');
  css = css.replace(/#0d1424/g, '#0e1411');
  css = css.replace(/#121c32/g, '#131b16');
  css = css.replace(/#182642/g, '#18241d');
  css = css.replace(/#10182c/g, '#0e1411');
  css = css.replace(/#14223d/g, '#131b16');
  css = css.replace(/#15223c/g, '#18241d');
  css = css.replace(/#162238/g, '#131b16');
  css = css.replace(/#1f3050/g, '#18241d');

  return css;
}

// 2. TRANSFORM OS WEEK GAME.JS
function transformWeekJs(js) {
  // Replace inline cyan colors
  js = js.replace(/#0284c7/g, '#059669');
  js = js.replace(/#38bdf8/g, '#34d399');
  js = js.replace(/#06b6d4/g, '#10b981');
  js = js.replace(/#22d3ee/g, '#00ff88');
  js = js.replace(/rgba\(6,\s*182,\s*212,\s*0\.15\)/g, 'rgba(16, 185, 129, 0.15)');

  return js;
}

// 3. TRANSFORM OS/STYLES.CSS (HUB)
function transformHubStyles(css) {
  css = css.replace(
    /:root\s*\{[\s\S]*?--shadow-card-hover:\s*0\s*16px\s*36px\s*rgba\(0,\s*0,\s*0,\s*0\.8\)[^;]*;/m,
    `:root {
  --bg-deep: #080c0a;
  --bg-panel: #0e1411;
  --bg-card: #131b16;
  --bg-card-hover: #18241d;
  --bg-hud: rgba(14, 20, 17, 0.96);

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-cyan: rgba(16, 185, 129, 0.3);
  --border-emerald: rgba(16, 185, 129, 0.45);

  --text-primary: #f0fdf4;
  --text-secondary: #c0cfc5;
  --text-muted: #738479;

  --accent-cyan: #059669;
  --accent-cyan-bright: #34d399;
  --accent-emerald: #10b981;
  --accent-emerald-bright: #00ff88;
  --accent-amber: #f59e0b;
  --accent-amber-bright: #fbbf24;
  --accent-rose: #f43f5e;

  --radius-lg: 12px;
  --radius-md: 10px;
  --radius-sm: 6px;

  --shadow-cyber: 0 10px 28px rgba(0, 0, 0, 0.7);
  --shadow-card-hover: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 20px rgba(16, 185, 129, 0.25);`
  );

  css = css.replace(
    /background-image:\s*radial-gradient\(circle at 50% 0%,\s*[^)]+\);/g,
    'background-image: radial-gradient(circle at 50% 0%, #15241b 0%, #080c0a 85%);'
  );

  css = css.replace(/#0284c7/g, '#059669');
  css = css.replace(/#38bdf8/g, '#34d399');
  css = css.replace(/#06b6d4/g, '#10b981');
  css = css.replace(/#22d3ee/g, '#00ff88');

  return css;
}

// 4. TRANSFORM OS_DICTIONARY.CSS
function transformDictStyles(css) {
  css = css.replace(/#0284c7/g, '#059669');
  css = css.replace(/#38bdf8/g, '#34d399');
  css = css.replace(/#06b6d4/g, '#10b981');
  css = css.replace(/#22d3ee/g, '#00ff88');
  return css;
}

// 5. TRANSFORM MAIN PORTAL (INDEX.HTML) FOR OS MODULE CARD
function transformPortalHtml(html) {
  // OS card top border gradient
  html = html.replace(
    /\.card-os::before\s*\{[\s\S]*?background:\s*linear-gradient\(90deg,\s*#0284c7,\s*#38bdf8\);/g,
    '.card-os::before {\n      background: linear-gradient(90deg, #059669, #00ff88);'
  );
  // OS card hover glow
  html = html.replace(
    /box-shadow:\s*0\s*16px\s*40px\s*rgba\(0,\s*0,\s*0,\s*0\.7\),\s*0\s*0\s*24px\s*rgba\(56,\s*189,\s*248,\s*0\.25\);/g,
    'box-shadow: 0 16px 40px rgba(0, 0, 0, 0.7), 0 0 24px rgba(16, 185, 129, 0.25);'
  );
  // OS tag
  html = html.replace(
    /\.tag-os\s*\{\s*background:\s*rgba\(56,\s*189,\s*248,\s*0\.15\);\s*color:\s*#38bdf8;\s*border:\s*1px\s*solid\s*rgba\(56,\s*189,\s*248,\s*0\.3\);\s*\}/g,
    '.tag-os { background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); }'
  );
  // OS button
  html = html.replace(
    /\.btn-gateway-os\s*\{[\s\S]*?background:\s*linear-gradient\(135deg,\s*#0284c7,\s*#38bdf8\);[\s\S]*?border:\s*1px\s*solid\s*#7dd3fc;/g,
    `.btn-gateway-os {
      background: linear-gradient(135deg, #059669, #10b981);
      color: #fff;
      border: 1px solid #34d399;`
  );
  html = html.replace(
    /\.btn-gateway-os:hover\s*\{[\s\S]*?background:\s*#38bdf8;[\s\S]*?color:\s*#060913;/g,
    `.btn-gateway-os:hover {
      background: #00ff88;
      color: #06140b;`
  );

  return html;
}

// EXECUTE
console.log('=== OVERHAULING OS PALETTE TO TERMINAL EMERALD MATRIX ===\n');

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

if (fs.existsSync(path.join(localOsDir, 'operating-systems-academy'))) {
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'styles.css'), transformHubStyles);
  updateFile(path.join(localOsDir, 'operating-systems-academy', 'os_dictionary.css'), transformDictStyles);
}

// 4. Portal index.html in DS and root
console.log('\nProcessing Portals...');
updateFile(path.join(repoDir, 'index.html'), transformPortalHtml);
updateFile('C:\\Users\\Ravshanbek\\Documents\\WIUT\\index.html', transformPortalHtml);

console.log('\n=== COMPLETED EMERALD PALETTE OVERHAUL ===');
