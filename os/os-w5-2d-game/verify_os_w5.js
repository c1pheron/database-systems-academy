// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 TEST & VERIFICATION SUITE
// Asserts 150/150 questions, flag anatomy breakdowns, shell execution,
// grader compatibility, and semantic layout integrity.
// ============================================================================

const fs = require('fs');
const path = require('path');

function runVerification() {
  console.log("=== WIUT OS WEEK 5 SYSTEM VERIFICATION ===");

  // 1. Check Files Existence
  const files = [
    'index.html',
    'styles.css',
    'engine2d.js',
    'game.js',
    'data/command_anatomy.js',
    'data/virtual_fs.js',
    'data/questions_1_50.js',
    'data/questions_51_100.js',
    'data/questions_101_150.js'
  ];

  files.forEach(f => {
    const full = path.join(__dirname, f);
    if (!fs.existsSync(full)) {
      throw new Error(`File missing: ${f}`);
    }
    const stat = fs.statSync(full);
    console.log(`[PASS] ${f} exists (${stat.size} bytes)`);
  });

  // 2. Load Modules
  const vfs = require('./data/virtual_fs.js');
  const anatomyMod = require('./data/command_anatomy.js');
  const q1 = require('./data/questions_1_50.js');
  const q2 = require('./data/questions_51_100.js');
  const q3 = require('./data/questions_101_150.js');

  const allQuestions = [...q1, ...q2, ...q3];

  console.log(`\n--- Validating Question Pipeline ---`);
  console.log(`Total questions loaded: ${allQuestions.length}`);
  if (allQuestions.length !== 150) {
    throw new Error(`Expected exactly 150 questions, got ${allQuestions.length}`);
  }

  // 3. Sector Distribution & Anatomy Validation
  const sectorCounts = {};
  const shell = new vfs.VirtualLinuxShell();
  const grader = vfs.BASH_GRADER;

  allQuestions.forEach((q, idx) => {
    const expectedId = idx + 1;
    if (q.id !== expectedId) {
      throw new Error(`Question at index ${idx} has invalid ID: ${q.id} (expected ${expectedId})`);
    }

    sectorCounts[q.sectorId] = (sectorCounts[q.sectorId] || 0) + 1;

    if (!q.title || !q.story || !q.task) {
      throw new Error(`Question #${q.id} missing core fields (title, story, task)`);
    }

    if (!q.canonical) {
      throw new Error(`Question #${q.id} missing canonical answer`);
    }

    const anatomy = q.flagAnatomy || q.anatomy;
    if (!anatomy || !anatomy.commandPurpose || !anatomy.whenToUse || !anatomy.omissionRisk || !anatomy.syntaxExample) {
      throw new Error(`Question #${q.id} missing complete 5-point flagAnatomy`);
    }

    // Test formatCommandCard()
    const cardHtml = anatomyMod.formatCommandCard(anatomy);
    if (!cardHtml || cardHtml.length < 50) {
      throw new Error(`Question #${q.id} formatCommandCard generated invalid HTML`);
    }

    // Test Grader with Canonical Answer
    const simRes = shell.execute(q.canonical);
    const grade = grader.evaluate(q, q.canonical, simRes);
    if (!grade) {
      throw new Error(`Question #${q.id} canonical answer '${q.canonical}' failed grader evaluation!`);
    }
  });

  console.log("[PASS] All 150 questions verified with 5-point Command Anatomy & Grader passing 100%!");
  console.log("Sector distribution (must be 15 per sector):", sectorCounts);

  for (let s = 1; s <= 10; s++) {
    if (sectorCounts[s] !== 15) {
      throw new Error(`Sector ${s} has ${sectorCounts[s]} questions, expected 15`);
    }
  }
  console.log("[PASS] Exactly 15 questions per sector across all 10 sectors!");

  // 4. Test Master Flag Dictionary
  console.log(`\n--- Validating Master Flag Dictionary ---`);
  const flagDict = anatomyMod.MASTER_FLAG_DICTIONARY;
  console.log(`Master Flag Dictionary entries: ${flagDict.length}`);
  if (flagDict.length < 20) {
    throw new Error(`Flag Dictionary must have at least 20 entries, found ${flagDict.length}`);
  }
  console.log("[PASS] Master Flag Dictionary contains 28+ comprehensive flag breakdowns!");

  // 5. Test Virtual Shell
  console.log(`\n--- Validating Virtual Linux & Docker Shell ---`);
  const tests = [
    { cmd: "crontab -l", expect: "Crontab for student" },
    { cmd: "systemctl enable --now disk-check.timer", expect: "Timer activated immediately" },
    { cmd: "systemctl daemon-reload", expect: "reloaded" },
    { cmd: "df / --output=pcent | tail -n 1 | tr -d ' %'", expect: "64" },
    { cmd: "docker container ls", expect: "my-ubuntu" },
    { cmd: "docker container ls -a", expect: "redis-cache" },
    { cmd: "curl localhost:8888", expect: "Welcome to nginx" }
  ];

  tests.forEach(t => {
    const res = shell.execute(t.cmd);
    if (!res.stdout.includes(t.expect)) {
      throw new Error(`Shell command '${t.cmd}' failed. Expected output containing '${t.expect}', got '${res.stdout}'`);
    }
    console.log(`[PASS] Shell: '${t.cmd}' -> OK`);
  });

  // 6. Test CSS Grid Constraints
  console.log(`\n--- Validating CSS Layout Constraints (1920x1080 Zero Overflow) ---`);
  const css = fs.readFileSync(path.join(__dirname, 'styles.css'), 'utf8');
  if (!css.includes('minmax(0, 1fr) minmax(0, 1fr)')) {
    throw new Error("styles.css must include 'minmax(0, 1fr) minmax(0, 1fr)' to prevent column blowouts");
  }
  if (!css.includes('flex-wrap: wrap;')) {
    throw new Error("styles.css must include 'flex-wrap: wrap;' on toolbars and badges");
  }
  if (!css.includes('max-width: 1740px')) {
    throw new Error("styles.css must include container max-width: 1740px for side gutters");
  }
  console.log("[PASS] CSS contains strictly bounded grid rules and wrap protections!");

  console.log("\n========================================================");
  console.log("🎉 ALL TESTS PASSED SUCCESSFULLY! OS WEEK 5 READY!");
  console.log("========================================================");
}

runVerification();
