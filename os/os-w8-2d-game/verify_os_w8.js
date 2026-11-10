/**
 * AUTOMATED VERIFICATION SUITE FOR OS WEEK 8 (150 CHALLENGES)
 */
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const baseDir = __dirname;
const failures = [];

console.log("==================================================");
console.log("OS WEEK 8 AUDIT & VERIFICATION SUITE");
console.log("==================================================");

const requiredFiles = [
  'index.html',
  'styles.css',
  'engine2d.js',
  'game.js',
  'data/virtual_fs.js',
  'data/questions_1_50.js',
  'data/questions_51_100.js',
  'data/questions_101_150.js',
  'data/command_anatomy.js',
  'data/weekly_commands.js'
];

requiredFiles.forEach(f => {
  const p = path.join(baseDir, f);
  assert(fs.existsSync(p), `Required file exists: ${f}`);
});

global.window = {};
global.document = {
  getElementById: () => null,
  querySelectorAll: () => [],
  addEventListener: () => {}
};

window.VIRTUAL_LINUX_W8 = require(path.join(baseDir, 'data/virtual_fs.js'));
window.QUESTIONS_W8_PART1 = require(path.join(baseDir, 'data/questions_1_50.js'));
window.QUESTIONS_W8_PART2 = require(path.join(baseDir, 'data/questions_51_100.js'));
window.QUESTIONS_W8_PART3 = require(path.join(baseDir, 'data/questions_101_150.js'));
window.COMMAND_ANATOMY_W8 = require(path.join(baseDir, 'data/command_anatomy.js'));

const questions = [
  ...window.QUESTIONS_W8_PART1,
  ...window.QUESTIONS_W8_PART2,
  ...window.QUESTIONS_W8_PART3
];
const sectors = window.VIRTUAL_LINUX_W8.SECTORS || [];
const anatomy = window.COMMAND_ANATOMY_W8;
const grader = window.VIRTUAL_LINUX_W8.BASH_GRADER;

assert(questions.length === 150, `Exactly 150 questions found in pool (actual: ${questions.length})`);
assert(sectors.length === 10, `Exactly 10 sectors defined (actual: ${sectors.length})`);

for (let s = 1; s <= 10; s++) {
  const count = questions.filter(q => q.sectorId === s).length;
  assert(count === 15, `Sector ${s} has exactly 15 questions (actual: ${count})`);
}

let graderFailures = 0;
let missingCards = 0;

questions.forEach(q => {
  if (!q.id || !q.title || !q.task || !q.canonical || !q.accepted || !q.flagAnatomy) {
    failures.push(`Question #${q.id} has missing required schema fields!`);
  }

  const isCorrect = grader.evaluate(q, q.canonical);
  if (!isCorrect) {
    graderFailures++;
    console.error(`Grader failed for Q#${q.id} ("${q.title}") with canonical "${q.canonical}"`);
  }

  const cmd = String(q.canonical || "");
  const analyzed = anatomy.analyze(cmd, q);
  const cardHtml = anatomy.renderCardHtml(analyzed);
  if (!cardHtml || cardHtml.length < 50 || !cardHtml.includes("cmd-section")) {
    missingCards++;
    console.error(`Command card missing/empty for Q#${q.id}: ${q.canonical}`);
  }
});

assert(graderFailures === 0, `All 150 canonical commands pass BASH_GRADER (failed: ${graderFailures})`);
assert(missingCards === 0, `All 150 questions generate rich command & flag anatomy cards (failed: ${missingCards})`);

if (failures.length > 0) {
  console.error(`\nVERIFICATION FAILED with ${failures.length} errors.`);
  process.exit(1);
} else {
  console.log("\n==================================================");
  console.log("ALL TESTS PASSED! OS WEEK 8 IS FULLY READY!");
  console.log("==================================================");
}
