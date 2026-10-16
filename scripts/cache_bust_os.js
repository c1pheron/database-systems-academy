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
  }
}

// 1. Hub
function bustHub(html) {
  html = html.replace(/href="styles\.css(\?[^"]*)?"/g, 'href="styles.css?v=20261017_blue_v2"');
  html = html.replace(/href="os_dictionary\.css(\?[^"]*)?"/g, 'href="os_dictionary.css?v=20261017_blue_v2"');
  html = html.replace(/src="app\.js(\?[^"]*)?"/g, 'src="app.js?v=20261017_blue_v2"');
  return html;
}

updateFile(path.join(repoDir, 'os', 'index.html'), bustHub);
updateFile(path.join(localOsDir, 'operating-systems-academy', 'index.html'), bustHub);

// 2. Weeks
function bustWeek(html) {
  html = html.replace(/href="styles\.css(\?[^"]*)?"/g, 'href="styles.css?v=20261017_blue_v2"');
  html = html.replace(/src="game\.js(\?[^"]*)?"/g, 'src="game.js?v=20261017_blue_v2"');
  return html;
}

for (let w = 1; w <= 6; w++) {
  updateFile(path.join(repoDir, 'os', `os-w${w}-2d-game`, 'index.html'), bustWeek);
  updateFile(path.join(localOsDir, 'OS GAME W1-6', `os-w${w}-2d-game`, 'index.html'), bustWeek);
}

console.log('Cache-busting successfully applied!');
