const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('MASTER VERIFICATION SUITE — DATABASE SYSTEMS INTERACTIVE ACADEMY');
console.log('================================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// 1. Hub Verification
console.log('1. Checking Master Hub (index.html, styles.css, app.js)...');
const hubHtml = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
assert(hubHtml.includes('telegram-web-app.js'), 'Hub index.html includes Telegram WebApp SDK');
assert(!hubHtml.includes('5BUIS' + '009C'), 'Hub index.html has no course code');
assert(!hubHtml.includes('Ravshan' + 'bek'), 'Hub index.html has no personal student names');
for (let w = 1; w <= 6; w++) {
  assert(hubHtml.includes(`week${w}/index.html`), `Hub links to Module 0${w}`);
}

// 2. Module Question Counts and Integrity
console.log('\n2. Checking 6 Modules and 900 Practical Challenges...');
for (let w = 1; w <= 6; w++) {
  const dir = path.join(__dirname, `../week${w}`);
  const html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
  assert(html.includes('telegram-web-app.js'), `Week ${w} index.html includes Telegram WebApp SDK`);
  assert(html.includes('Academy Hub') || html.includes('../index.html'), `Week ${w} index.html has return navigation to Hub`);
  assert(!html.includes('5BUIS' + '009C'), `Week ${w} index.html has neutral branding (no course code)`);
  assert(!html.includes('Ravshan' + 'bek'), `Week ${w} index.html has no personal student names`);

  // Count questions
  global.window = global;
  let qCount = 0;
  if (w === 1) {
    const p1 = require(`../week1/data/questions_1_50.js`);
    const p2 = require(`../week1/data/questions_51_100.js`);
    const p3 = require(`../week1/data/questions_101_150.js`);
    qCount = (p1 || []).length + (p2 || []).length + (p3 || []).length;
  } else if (w === 2) {
    require(`../week2/data/eer_clients_1_50.js`);
    require(`../week2/data/eer_clients_51_100.js`);
    require(`../week2/data/eer_clients_101_150.js`);
    qCount = (global.EER_CLIENTS_1_50 || []).length + (global.EER_CLIENTS_51_100 || []).length + (global.EER_CLIENTS_101_150 || []).length;
  } else {
    require(`../week${w}/data/questions_1_50.js`);
    require(`../week${w}/data/questions_51_100.js`);
    require(`../week${w}/data/questions_101_150.js`);
    qCount = (global.QUESTIONS_1_50 || []).length + (global.QUESTIONS_51_100 || []).length + (global.QUESTIONS_101_150 || []).length;
  }
  assert(qCount === 150, `Week ${w} has exactly 150 challenges (Found: ${qCount})`);
}

// 3. Scan for any remaining disallowed strings
console.log('\n3. Scanning all academy files for disallowed branding strings...');
const academyRoot = path.join(__dirname, '..');
let leaks = 0;
function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === '.git' || f === 'node_modules' || f.endsWith('.png') || f.includes('verify_all_modules')) continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else if (f.endsWith('.js') || f.endsWith('.html') || f.endsWith('.css') || f.endsWith('.md')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('5BUIS' + '009C')) {
        console.error(`  Leak found: '5BUIS009C' in ${path.relative(academyRoot, full)}`);
        leaks++;
      }
      if (content.includes('Ravshan' + 'bek')) {
        console.error(`  Leak found: 'Ravshanbek' in ${path.relative(academyRoot, full)}`);
        leaks++;
      }
    }
  }
}
scanDir(academyRoot);
assert(leaks === 0, `Disallowed branding scan completed with 0 leaks (Found: ${leaks})`);

console.log(`\n================================================================`);
console.log(`RESULTS: ${passedTests} / ${totalTests} assertions passed (${failedTests} failed)`);
console.log(`================================================================\n`);

if (failedTests > 0) {
  process.exit(1);
}
