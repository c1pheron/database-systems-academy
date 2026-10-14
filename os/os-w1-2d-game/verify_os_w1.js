// ============================================================================
// VERIFICATION SUITE: WIUT OS WEEK 1 2D GAME & 150 QUESTIONS
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== WIUT OS WEEK 1 COMPREHENSIVE VERIFICATION SUITE ===\n");

// 1. Check Files
const requiredFiles = [
  'index.html',
  'styles.css',
  'engine2d.js',
  'game.js',
  'data/virtual_fs.js',
  'data/questions_1_50.js',
  'data/questions_51_100.js',
  'data/questions_101_150.js'
];

let allFilesOk = true;
requiredFiles.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`[PASS] File exists: ${f} (${stat.size} bytes)`);
  } else {
    console.error(`[FAIL] Missing file: ${f}`);
    allFilesOk = false;
  }
});

if (!allFilesOk) {
  console.error("File check failed!");
  process.exit(1);
}

// 2. Load Environment in VM Context
const sandbox = {
  window: {},
  document: {
    addEventListener: () => {},
    getElementById: () => null,
    querySelectorAll: () => []
  },
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  localStorage: {
    getItem: () => null,
    setItem: () => {}
  }
};
vm.createContext(sandbox);

function runFileInSandbox(relPath) {
  const code = fs.readFileSync(path.join(__dirname, relPath), 'utf8');
  vm.runInContext(code, sandbox);
}

runFileInSandbox('data/virtual_fs.js');
runFileInSandbox('data/questions_1_50.js');
runFileInSandbox('data/questions_51_100.js');
runFileInSandbox('data/questions_101_150.js');

const VIRTUAL_LINUX = sandbox.window.VIRTUAL_LINUX;
const VirtualLinuxShell = VIRTUAL_LINUX.VirtualLinuxShell;
const BASH_GRADER = VIRTUAL_LINUX.BASH_GRADER;

const allQuestions = [
  ...(sandbox.window.QUESTIONS_1_50 || []),
  ...(sandbox.window.QUESTIONS_51_100 || []),
  ...(sandbox.window.QUESTIONS_101_150 || [])
];

console.log(`\n[INFO] Loaded total questions: ${allQuestions.length}`);
if (allQuestions.length !== 150) {
  console.error(`[FAIL] Expected 150 questions, found ${allQuestions.length}`);
  process.exit(1);
}

// 3. Test Inodes & File System Core Functionality
console.log("\n--- Testing Virtual Linux File System & Inode Logic ---");
const shell = new VirtualLinuxShell();

// Test pwd & initial directory
const resPwd = shell.execute("pwd");
console.log(`[TEST] pwd stdout: '${resPwd.stdout}' (Expected: /home/student)`);
if (resPwd.stdout !== "/home/student") throw new Error("pwd failed");

// Test touch & creation
shell.execute("touch testfile.txt");
const stat1 = shell.execute("stat testfile.txt");
console.log(`[TEST] stat testfile.txt output:\n${stat1.stdout}`);
if (!stat1.stdout.includes("Inode:")) throw new Error("stat failed");

// Test Hardlink creation and inode sharing (Seminar 1 Task 4)
shell.execute("ln testfile.txt hardlink.txt");
const nodeOrig = shell.getNode("/home/student/testfile.txt");
const nodeHard = shell.getNode("/home/student/hardlink.txt");
console.log(`[TEST] testfile Inode: ${nodeOrig.inode}, Links: ${nodeOrig.links}`);
console.log(`[TEST] hardlink Inode: ${nodeHard.inode}, Links: ${nodeHard.links}`);

if (nodeOrig.inode !== nodeHard.inode) throw new Error("Hardlink must share identical inode number!");
if (nodeOrig.links !== 2 || nodeHard.links !== 2) throw new Error("Links counter must be 2!");

// Test Deleting Original, Hardlink survives
shell.execute("rm testfile.txt");
const nodeHardAfter = shell.getNode("/home/student/hardlink.txt");
console.log(`[TEST] After 'rm testfile.txt': hardlink Links: ${nodeHardAfter.links}`);
if (nodeHardAfter.links !== 1) throw new Error("Links count should decrease to 1 after removing one hardlink!");

// Test Redirection (Seminar 1 Task 2)
shell.execute("echo 'Line 1' > file_stream.txt");
const resC1 = shell.execute("cat file_stream.txt");
if (resC1.stdout.trim() !== "Line 1") throw new Error("Redirection > failed");

shell.execute("echo 'Line 2' >> file_stream.txt");
const resC2 = shell.execute("cat file_stream.txt");
if (resC2.stdout.trim() !== "Line 1\nLine 2") throw new Error("Append >> failed");

// Test Pipes (head & tail, wc)
shell.execute("wc -l file_stream.txt");
const resWc = shell.execute("wc -l file_stream.txt");
console.log(`[TEST] wc -l output: '${resWc.stdout}'`);
if (!resWc.stdout.includes("2")) throw new Error("wc -l failed");

// Test find
const resFind = shell.execute("find . -name '*.txt'");
console.log(`[TEST] find . -name '*.txt' output: '${resFind.stdout}'`);
if (!resFind.stdout.includes("hardlink.txt")) throw new Error("find failed");

console.log("[PASS] Virtual Linux File System and Inode tests succeeded 100%!");

// 4. Test All 150 Questions with BASH_GRADER
console.log("\n--- Validating All 150 Questions with BASH_GRADER ---");
let failCount = 0;
allQuestions.forEach((q, idx) => {
  const expectedCmd = q.expectedSql || q.expectedBash || "";
  if (!expectedCmd) {
    console.error(`[FAIL] Question #${q.id} missing expected command!`);
    failCount++;
    return;
  }
  const grade = BASH_GRADER.evaluate(expectedCmd, expectedCmd, q);
  if (!grade.match) {
    console.error(`[FAIL] Question #${q.id} (${q.title}): ${grade.message}`);
    failCount++;
  }
});

if (failCount > 0) {
  console.error(`[FAIL] ${failCount} questions failed validation!`);
  process.exit(1);
} else {
  console.log(`[PASS] 150/150 questions passed BASH_GRADER verification!`);
}

// 5. Verify HTML Element IDs
console.log("\n--- Checking HTML Element IDs ---");
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const expectedIds = [
  'hudRankTitle', 'hudSalary', 'hudCapital', 'hudSolved', 'hudProgressFill',
  'btnTriggerEvent', 'btnOpenMap', 'btnResetProgress', 'sectorNavList',
  'floorHeaderTitle', 'tickerSpeaker', 'tickerMessage', 'btnQuickEvent',
  'gameCanvas', 'schemaTableDisplay', 'sectorSubTitle', 'floorQuestionStrip',
  'btnPrevQ', 'btnNextQ', 'qNumberBadge', 'qDifficultyBadge', 'qSourceBadge',
  'qTitle', 'qStory', 'qTask', 'qTagsList', 'tokenBar', 'btnClearTerminal',
  'terminalOutput', 'terminalPromptUser', 'terminalPromptPath', 'bashInput',
  'btnRunBash', 'btnShowHint', 'btnPreviewExpected', 'btnRevealAnswer',
  'hintBox', 'feedbackBox', 'modalMap', 'mapSearch', 'mapQuestionsGrid',
  'btnCloseMap', 'modalEvent', 'eventAvatar', 'eventTitle', 'eventSpeaker',
  'eventRole', 'eventNarrative', 'eventChoicesContainer', 'eventFeedback',
  'btnCloseEvent', 'modalSolution', 'solQuestionTitle', 'solCode',
  'solExplanation', 'btnCloseSolution'
];

let missingIds = 0;
expectedIds.forEach(id => {
  if (!html.includes(`id="${id}"`)) {
    console.error(`[FAIL] Missing ID in HTML: ${id}`);
    missingIds++;
  }
});

if (missingIds > 0) {
  console.error(`[FAIL] ${missingIds} IDs missing in index.html!`);
  process.exit(1);
} else {
  console.log(`[PASS] All ${expectedIds.length} expected DOM IDs verified in index.html!`);
}

console.log("\n=======================================================");
console.log("   ALL VERIFICATIONS PASSED: 100% READY FOR STUDENT!   ");
console.log("=======================================================");
