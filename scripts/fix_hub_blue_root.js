const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'os', 'styles.css');
let css = fs.readFileSync(filePath, 'utf8');

const oldRootStart = css.indexOf(':root {');
const oldRootEnd = css.indexOf('}', oldRootStart) + 1;
const oldRoot = css.substring(oldRootStart, oldRootEnd);
console.log('Found old root length:', oldRoot.length);

const newRoot = `:root {
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
  --shadow-card-hover: 0 16px 36px rgba(0, 0, 0, 0.8), 0 0 20px rgba(56, 189, 248, 0.3);
}`;

css = css.replace(oldRoot, newRoot);

// Also check any remaining Tokyo Night hex codes in os/styles.css
css = css.replace(/#bb9af7/g, '#38bdf8');
css = css.replace(/#1a1b26/g, '#070b14');
css = css.replace(/#1f2335/g, '#0c1322');
css = css.replace(/#24283b/g, '#10192e');
css = css.replace(/#292e42/g, '#17233f');
css = css.replace(/#ff9e64/g, '#38bdf8');
css = css.replace(/#7aa2f7/g, '#60a5fa');
css = css.replace(/#73daca/g, '#2dd4bf');

fs.writeFileSync(filePath, css, 'utf8');
console.log('Successfully updated os/styles.css with Cyber Blue palette!');

// Also copy to local OS
const localOsPath = 'C:\\Users\\Ravshanbek\\Documents\\WIUT\\OS\\operating-systems-academy\\styles.css';
if (fs.existsSync(localOsPath)) {
  fs.writeFileSync(localOsPath, css, 'utf8');
  console.log('Successfully updated local OS styles.css!');
}
