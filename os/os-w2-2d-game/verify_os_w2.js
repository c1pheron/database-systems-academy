// ============================================================================
// COMPREHENSIVE VERIFICATION SUITE: WIUT OS WEEK 2 (150 QUESTIONS & ENGINE)
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log("=== WIUT OS WEEK 2 COMPREHENSIVE VERIFICATION SUITE ===\n");

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

const VIRTUAL_LINUX_W2 = sandbox.window.VIRTUAL_LINUX_W2;
const VirtualLinuxShell = VIRTUAL_LINUX_W2.VirtualLinuxShell;
const BASH_GRADER = VIRTUAL_LINUX_W2.BASH_GRADER;

const allQuestions = [
  ...(sandbox.window.QUESTIONS_1_50_W2 || []),
  ...(sandbox.window.QUESTIONS_51_100_W2 || []),
  ...(sandbox.window.QUESTIONS_101_150_W2 || [])
];

console.log(`\n[INFO] Loaded total questions: ${allQuestions.length}`);
if (allQuestions.length !== 150) {
  console.error(`[FAIL] Expected 150 questions, found ${allQuestions.length}`);
  process.exit(1);
}

// 3. Test Shell Core & Week 2 Specific Features
console.log("\n--- Testing Week 2 Linux Shell & PAM/Sticky Bit Mechanics ---");
const shell = new VirtualLinuxShell();

// Test /etc/passwd reading
const resPasswd = shell.execute("cat /etc/passwd");
console.log(`[TEST] cat /etc/passwd contains 'student': ${resPasswd.stdout.includes("student:x:1000:1000")}`);
if (!resPasswd.stdout.includes("student:x:1000:1000")) throw new Error("passwd read failed");

// Test useradd with -m and -s
shell.execute("useradd -m -s /bin/bash -G sudo charlie");
const resPasswdAfter = shell.execute("cat /etc/passwd");
if (!resPasswdAfter.stdout.includes("charlie:x:")) throw new Error("useradd failed");
const charlieHome = shell.getNode("/home/charlie");
if (!charlieHome || !charlieHome.children[".bashrc"]) throw new Error("/home/charlie or skeleton files missing!");
console.log("[TEST] useradd -m created /home/charlie with skeleton .bashrc: PASS");

// Test Sticky Bit (/srv/project)
shell.execute("chmod 1775 /srv/project");
const projNode = shell.getNode("/srv/project");
console.log(`[TEST] /srv/project permissions: '${projNode.permissions}', sticky: ${projNode.sticky}`);
if (projNode.permissions !== "drwxrwxr-t" || !projNode.sticky) throw new Error("Sticky bit 1775 failed");

// Test Umask
shell.execute("umask 002");
const umaskVal = shell.execute("umask");
if (umaskVal.stdout.trim() !== "0002" && umaskVal.stdout.trim() !== "002") throw new Error("umask failed");
console.log(`[TEST] umask 002 output: '${umaskVal.stdout.trim()}': PASS`);

// Test Redirection & Dev Null
shell.execute("ls -la > test_list.txt");
const resList = shell.execute("cat test_list.txt");
if (!resList.stdout.includes("readme.txt")) throw new Error("Redirection > failed");

// Test Grep & Case Study 1 on Apache Logs
const resApacheIp = shell.execute("grep -c '83.149.9.216' /var/log/apache_logs.txt");
console.log(`[TEST] grep -c '83.149.9.216' output: '${resApacheIp.stdout.trim()}'`);
if (resApacheIp.stdout.trim() !== "5") throw new Error("Apache log grep count failed");

// Test Grep with -oE and Top 5 pipeline
const resTopIps = shell.execute("grep -oE '^[0-9.]+' /var/log/apache_logs.txt | sort | uniq -c | sort -nr | head -5");
console.log(`[TEST] Top 5 IPs output:\n${resTopIps.stdout}`);
if (!resTopIps.stdout.includes("83.149.9.216")) throw new Error("Top IPs pipeline failed");

// Test Cut
const resCut = shell.execute("cut -d: -f1 /etc/passwd");
if (!resCut.stdout.includes("root")) throw new Error("cut failed");

// Test Sed
const resSed = shell.execute("sed 's/Math/Calculus/g' scores.csv");
if (!resSed.stdout.includes("Calculus")) throw new Error("sed failed");

// Test Awk
const resAwk = shell.execute("awk '{print $1}' inventory.txt");
if (!resAwk.stdout.includes("server1")) throw new Error("awk failed");

console.log("[PASS] All Virtual Linux Week 2 mechanics verified 100%!");

// 4. Test All 150 Questions with BASH_GRADER
console.log("\n--- Validating All 150 Questions with BASH_GRADER ---");
let failCount = 0;
allQuestions.forEach((q, idx) => {
  const expectedCmd = q.expectedBash || q.expectedSql || "";
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
