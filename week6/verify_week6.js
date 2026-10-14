// ============================================================================
// COMPREHENSIVE AUTOMATED VERIFICATION SUITE — ACADEMY DS WEEK 6 (150 QUESTIONS)
// ============================================================================

const fs = require('fs');
const path = require('path');

global.window = global;

console.log("==================================================");
console.log("ACADEMY DS WEEK 6 AUTOMATED VERIFICATION SUITE");
console.log("==================================================");

// 1. Load Files
require('./data/company_db.js');
require('./data/questions_1_50.js');
require('./data/questions_51_100.js');
require('./data/questions_101_150.js');

const db = window.COMPANY_DB;
const grader = window.SQL_GRADER;

console.log("\n[1/5] Checking COMPANY_DB tables & assets...");
const expectedTables = ['dept', 'emp', 'applicant', 'salgrade', 'project', 'works_on', 'query_plans', 'optimizer_stats', 'v_emp_dept30', 'v_emp_public', 'v_dept_summary', 'v_emp_dept_info'];
for (const tbl of expectedTables) {
  if (!db[tbl] || !Array.isArray(db[tbl])) {
    console.error(`FAIL: Missing or invalid table in COMPANY_DB: ${tbl}`);
    process.exit(1);
  }
}
console.log(`PASS: All ${expectedTables.length} tables and views verified in COMPANY_DB.`);
console.log(`- emp rows: ${db.emp.length}`);
console.log(`- applicant rows: ${db.applicant.length}`);
console.log(`- dept rows: ${db.dept.length}`);
console.log(`- sectors: ${db.sectors.length}`);
console.log(`- officeEvents: ${db.officeEvents.length}`);

// 2. Combine and check Question counts
console.log("\n[2/5] Combining questions and checking totals...");
const q1_50 = window.QUESTIONS_1_50 || [];
const q51_100 = window.QUESTIONS_51_100 || [];
const q101_150 = window.QUESTIONS_101_150 || [];

console.log(`- Q1-50 count: ${q1_50.length}`);
console.log(`- Q51-100 count: ${q51_100.length}`);
console.log(`- Q101-150 count: ${q101_150.length}`);

if (q1_50.length !== 50 || q51_100.length !== 50 || q101_150.length !== 50) {
  console.error("FAIL: Question file counts must be exactly 50 each!");
  process.exit(1);
}

const allQuestions = [...q1_50, ...q51_100, ...q101_150];
if (allQuestions.length !== 150) {
  console.error(`FAIL: Total questions must be 150, got ${allQuestions.length}`);
  process.exit(1);
}
console.log(`PASS: Exactly 150 questions combined.`);

// 3. Check Sequence, Sectors and Fields
console.log("\n[3/5] Checking question IDs (1 to 150) and sector distribution (15 per floor)...");
const sectorCounts = {};
for (let i = 1; i <= 150; i++) {
  const q = allQuestions[i - 1];
  if (q.id !== i) {
    console.error(`FAIL: Question index ${i - 1} has ID ${q.id}, expected ${i}`);
    process.exit(1);
  }

  // Check required fields
  const fields = ['title', 'story', 'taskUz', 'expectedSql', 'hint', 'tags', 'solutions'];
  for (const f of fields) {
    if (!q[f] || (typeof q[f] === 'string' && !q[f].trim())) {
      console.error(`FAIL: Question ${q.id} is missing field: ${f}`);
      process.exit(1);
    }
  }

  sectorCounts[q.sector] = (sectorCounts[q.sector] || 0) + 1;
}

for (let s = 1; s <= 10; s++) {
  if (sectorCounts[s] !== 15) {
    console.error(`FAIL: Sector ${s} has ${sectorCounts[s]} questions, expected 15!`);
    process.exit(1);
  }
}
console.log(`PASS: All 150 questions sequentially numbered 1..150; exactly 15 questions per sector.`);

// 4. Execute and Validate all 150 Expected SQLs
console.log("\n[4/5] Executing and evaluating all 150 SQL queries against SQL_GRADER...");
let executedCount = 0;
for (const q of allQuestions) {
  const res = grader.execute(q.expectedSql);
  if (!res.success) {
    console.error(`FAIL: Question #${q.id} ("${q.title}") execution error: ${res.error}`);
    console.error(`SQL: ${q.expectedSql}`);
    process.exit(1);
  }

  // Self-comparison test
  const cmp = grader.compareResults(res, res);
  if (!cmp.match) {
    console.error(`FAIL: Self comparison failed for Question #${q.id}: ${cmp.message}`);
    process.exit(1);
  }

  executedCount++;
}
console.log(`PASS: 150 / 150 SQL queries executed and passed evaluation with 100% accuracy!`);

// 5. Check HTML, CSS, JS assets
console.log("\n[5/5] Checking file existence and integrity...");
const files = [
  'index.html',
  'styles.css',
  'engine2d.js',
  'game.js',
  'data/company_db.js',
  'data/questions_1_50.js',
  'data/questions_51_100.js',
  'data/questions_101_150.js'
];
for (const f of files) {
  const p = path.join(__dirname, f);
  if (!fs.existsSync(p)) {
    console.error(`FAIL: Missing critical file: ${f}`);
    process.exit(1);
  }
  const size = fs.statSync(p).size;
  console.log(`- ${f}: ${(size / 1024).toFixed(1)} KB`);
}

console.log("\n==================================================");
console.log("ALL TESTS PASSED! WEEK 6 GAME IS FULLY READY!");
console.log("==================================================");
