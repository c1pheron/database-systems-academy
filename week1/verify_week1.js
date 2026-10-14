// ============================================================================
// VERIFICATION SCRIPT FOR WEEK 1 (CONCEPTUAL ER MODELING)
// Tests: Question integrity, Sectors, Grader evaluation, Anatomy card generation,
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

console.log("=== WEEK 1 VERIFICATION TEST SUITE ===");

// 1. Check file existence
const requiredFiles = [
  'index.html',
  'styles.css',
  'engine2d.js',
  'game.js',
  'data/er_catalog.js',
  'data/questions_1_50.js',
  'data/questions_51_100.js',
  'data/questions_101_150.js'
];

requiredFiles.forEach(f => {
  const p = path.join(baseDir, f);
  assert(fs.existsSync(p), `Required file exists: ${f}`);
});

// 2. Load Modules & Scope
global.window = {};
global.document = {
  getElementById: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {}
};

window.ER_CATALOG_W1 = require(path.join(baseDir, 'data/er_catalog.js'));
window.QUESTIONS_W1_PART1 = require(path.join(baseDir, 'data/questions_1_50.js'));
window.QUESTIONS_W1_PART2 = require(path.join(baseDir, 'data/questions_51_100.js'));
window.QUESTIONS_W1_PART3 = require(path.join(baseDir, 'data/questions_101_150.js'));

const questions = [
  ...window.QUESTIONS_W1_PART1,
  ...window.QUESTIONS_W1_PART2,
  ...window.QUESTIONS_W1_PART3
];
const sectors = window.ER_CATALOG_W1.SECTORS || [];
const grader = window.ER_CATALOG_W1.ER_GRADER;
const catalog = window.ER_CATALOG_W1;

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

  // Test that canonical passes grader
  const isCorrect = grader.evaluate(q, q.canonical);
  if (!isCorrect) {
    graderFailures++;
    console.error(`Grader failed for Q#${q.id} ("${q.title}") with canonical "${q.canonical}"`);
  }

  // Test that 5-Point Concept Anatomy card is generated
  const cardHtml = catalog.formatConceptCard(q.flagAnatomy);
  if (!cardHtml || cardHtml.length < 50 || !cardHtml.includes("cmd-section")) {
    missingCards++;
    console.error(`Concept card missing/empty for Q#${q.id}`);
  }
});

assert(graderFailures === 0, `All 150 canonical commands pass ER_GRADER (failed: ${graderFailures})`);
assert(missingCards === 0, `All 150 questions generate rich concept anatomy cards (failed: ${missingCards})`);

// 5. Test CSS Constraints for 1920x1080 & Symmetrical Gutters
console.log("\n--- Testing CSS Layout Constraints ---");
const cssContent = fs.readFileSync(path.join(baseDir, 'styles.css'), 'utf8');

assert(cssContent.includes('max-width: 1740px'), 'styles.css contains max-width: 1740px for bounded layout');
assert(cssContent.includes('margin: 0 auto'), 'styles.css contains margin: 0 auto for symmetrical gutters');
assert(cssContent.includes('minmax(0, 1fr) minmax(0, 1fr)'), 'styles.css uses minmax(0, 1fr) to prevent grid track blowout');
assert(cssContent.includes('flex-wrap: wrap'), 'styles.css wraps token toolbar');
assert(cssContent.includes('overflow-x: hidden'), 'styles.css sets overflow-x: hidden on body/html');

// 6. Test HTML Semantic Anchors
console.log("\n--- Testing HTML Semantic Anchors ---");
const htmlContent = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');

const expectedIds = [
  'hudRankTitle', 'hudSalary', 'hudCapital', 'hudSolved', 'hudProgressFill',
  'btnTriggerEvent', 'btnOpenMap', 'btnResetProgress', 'btnToggleSound',
  'sectorNavList', 'gameCanvas', 'tickerSpeaker', 'tickerMessage',
  'schemaTableDisplay', 'floorHeaderTitle', 'sectorSubTitle', 'btnPrevQ', 'btnNextQ',
  'floorQuestionStrip', 'qNumberBadge', 'qDifficultyBadge', 'qSourceBadge',
  'qTitle', 'qStory', 'qTask', 'cmdInfoCard', 'btnToggleCmdCard', 'cmdCardCode',
  'cmdCardToggleHint', 'cmdCardToggleArrow', 'cmdCardBody', 'btnToggleHint', 'qHintBox',
  'tokenToolbar', 'termScreen', 'termInput', 'btnExecCmd',
  'mapModal', 'eventModal', 'toastContainer'
];

expectedIds.forEach(id => {
  assert(htmlContent.includes(`id="${id}"`), `HTML contains element with id="${id}"`);
});

// Final Result
console.log("\n==============================================");
if (failures.length === 0) {
  console.log("🎉 ALL TESTS PASSED! WEEK 1 (ER MODELING) IS 100% VERIFIED AND READY!");
  process.exit(0);
} else {
  console.error(`💥 ${failures.length} TEST(S) FAILED!`);
  process.exit(1);
}
