// ============================================================================
// VERIFICATION SCRIPT FOR WIUT OS WEEK 6 GAME
// Tests: Question integrity, Sectors, Command Grader, Flag Anatomy, Virtual Shell,
// and CSS/HTML Structural Layout Constraints.
// ============================================================================

const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
let failures = [];

function assert(condition, message) {
  if (!condition) {
    failures.push(message);
    console.error(`❌ FAIL: ${message}`);
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log("=== WIUT OS WEEK 6 VERIFICATION TEST SUITE ===");

// 1. Check file existence
const requiredFiles = [
  'index.html',
  'styles.css',
  'engine2d.js',
  'game.js',
  'data/virtual_fs.js',
  'data/questions_1_50.js',
  'data/questions_51_100.js',
  'data/questions_101_150.js',
  'data/command_anatomy.js'
];

requiredFiles.forEach(f => {
  const p = path.join(baseDir, f);
  assert(fs.existsSync(p), `Required file exists: ${f}`);
});

// 2. Load Modules & Establish Global Scope
global.window = {};
global.document = {
  getElementById: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {}
};

window.VIRTUAL_LINUX_W6 = require(path.join(baseDir, 'data/virtual_fs.js'));
window.QUESTIONS_W6_PART1 = require(path.join(baseDir, 'data/questions_1_50.js'));
window.QUESTIONS_W6_PART2 = require(path.join(baseDir, 'data/questions_51_100.js'));
window.QUESTIONS_W6_PART3 = require(path.join(baseDir, 'data/questions_101_150.js'));
window.COMMAND_ANATOMY_W6 = require(path.join(baseDir, 'data/command_anatomy.js'));

const questions = [
  ...window.QUESTIONS_W6_PART1,
  ...window.QUESTIONS_W6_PART2,
  ...window.QUESTIONS_W6_PART3
];
const sectors = window.VIRTUAL_LINUX_W6.SECTORS || [];
const anatomy = window.COMMAND_ANATOMY_W6;
const grader = window.VIRTUAL_LINUX_W6.BASH_GRADER;
const shell = new window.VIRTUAL_LINUX_W6.VirtualLinuxShell();

// 3. Question Count & Distribution Checks
assert(questions.length === 150, `Exactly 150 questions found in pool (actual: ${questions.length})`);
assert(sectors.length === 10, `Exactly 10 sectors defined (actual: ${sectors.length})`);

for (let s = 1; s <= 10; s++) {
  const count = questions.filter(q => q.sectorId === s).length;
  assert(count === 15, `Sector ${s} has exactly 15 questions (actual: ${count})`);
}

// 4. Validate Question Fields & Grader Evaluation
let graderFailures = 0;
let missingCards = 0;

questions.forEach(q => {
  if (!q.id || !q.title || !q.task || !q.canonical || !q.accepted || !q.flagAnatomy) {
    failures.push(`Question #${q.id} has missing required schema fields!`);
  }

  // Test that canonical passes grader: evaluate(question, userInput, shellResult)
  const isCorrect = grader.evaluate(q, q.canonical);
  if (!isCorrect) {
    graderFailures++;
    console.error(`Grader failed for Q#${q.id} ("${q.title}") with canonical "${q.canonical}"`);
  }

  // Test that Command Anatomy card is generated with 5 points
  const cardHtml = anatomy.formatCommandCard(q.flagAnatomy);
  if (!cardHtml || cardHtml.length < 50 || !cardHtml.includes("cmd-section")) {
    missingCards++;
    console.error(`Command card missing/empty for Q#${q.id}: ${q.canonical}`);
  }
});

assert(graderFailures === 0, `All 150 canonical commands pass BASH_GRADER (failed: ${graderFailures})`);
assert(missingCards === 0, `All 150 questions generate rich command & flag anatomy cards (failed: ${missingCards})`);

// 5. Test Virtual Shell Command Emulation
console.log("\n--- Testing Virtual Linux Shell Operations ---");
const testCommands = [
  'docker build -t sample-app:1.0 .',
  'docker run -d --name app1 -p 127.0.0.1:5000:5000 -e APP_ENV=dev sample-app:1.0 Alex',
  'docker ps',
  'docker exec -it app1 sh',
  'docker stats --no-stream app1',
  'docker volume create pgdata',
  'docker run -d --name mypg -e POSTGRES_PASSWORD=LabOnly_12345 -v pgdata:/var/lib/postgresql/data postgres:15',
  'docker compose up -d --build',
  'docker compose ps',
  'curl http://localhost:5000'
];

testCommands.forEach(cmd => {
  const res = shell.execute(cmd);
  assert(res.code === 0 && res.stdout.length > 0, `Shell successfully executed: "${cmd}"`);
});

// 6. Test CSS Constraints for 1920x1080 & Symmetrical Gutters
console.log("\n--- Testing CSS Layout Constraints ---");
const cssContent = fs.readFileSync(path.join(baseDir, 'styles.css'), 'utf8');

assert(cssContent.includes('max-width: 1740px'), 'styles.css contains max-width: 1740px for bounded layout');
assert(cssContent.includes('margin: 0 auto'), 'styles.css contains margin: 0 auto for symmetrical gutters');
assert(cssContent.includes('minmax(0, 1fr) minmax(0, 1fr)'), 'styles.css uses minmax(0, 1fr) to prevent grid track blowout');
assert(cssContent.includes('flex-wrap: wrap'), 'styles.css wraps token toolbar');
assert(cssContent.includes('overflow-x: hidden'), 'styles.css sets overflow-x: hidden on body/html');

// 7. Test HTML Semantic Anchors
console.log("\n--- Testing HTML Semantic Anchors ---");
const htmlContent = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

const expectedIds = [
  'hudRankTitle', 'hudSalary', 'hudCapital', 'hudSolved', 'hudProgressFill',
  'btnTriggerEvent', 'btnOpenMap', 'btnResetProgress', 'btnToggleSound',
  'sectorNavList', 'gameCanvas', 'tickerSpeaker', 'tickerMessage', 'btnQuickEvent',
  'schemaTableDisplay', 'floorHeaderTitle', 'sectorSubTitle', 'btnPrevQ', 'btnNextQ',
  'floorQuestionStrip', 'qNumberBadge', 'qDifficultyBadge', 'qSourceBadge',
  'qTitle', 'qStory', 'qTask', 'cmdInfoCard', 'btnToggleCmdCard', 'cmdCardCode',
  'cmdCardToggleHint', 'cmdCardToggleArrow', 'cmdCardBody', 'btnToggleHint', 'qHintBox',
  'tokenToolbar', 'termScreen', 'termInput', 'btnExecCmd',
  'mapModal', 'eventModal', 'certModal', 'toastContainer'
];

expectedIds.forEach(id => {
  assert(htmlContent.includes(`id="${id}"`), `HTML contains element with id="${id}"`);
});

// Final Result
console.log("\n==============================================");
if (failures.length === 0) {
  console.log("🎉 ALL TESTS PASSED! WEEK 6 GAME IS VERIFIED AND READY!");
  process.exit(0);
} else {
  console.error(`💥 ${failures.length} TEST(S) FAILED!`);
  process.exit(1);
}
