// ============================================================================
// VERIFICATION TEST SUITE: WIUT OS WEEK 4 GAME
// Validates file integrity, 150 questions, flag anatomy, BASH_GRADER, and VFS
// ============================================================================

const fs = require('fs');
const path = require('path');

const BASE_DIR = __dirname;
console.log('🔍 Starting WIUT OS Week 4 Verification Test Suite...\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ❌ FAIL: ${message}`);
  }
}

// 1. FILE INTEGRITY CHECKS
console.log('--- 1. File Integrity Checks ---');
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

requiredFiles.forEach(file => {
  const fullPath = path.join(BASE_DIR, file);
  assert(fs.existsSync(fullPath), `Required file exists: ${file}`);
});

// 2. LOAD DATA MODULES IN MOCK ENVIRONMENT
console.log('\n--- 2. Loading Modules & Questions ---');

// Mock window object
global.window = {};

// Load virtual_fs.js
try {
  const virtualFsCode = fs.readFileSync(path.join(BASE_DIR, 'data/virtual_fs.js'), 'utf8');
  eval(virtualFsCode);
  assert(typeof window.VIRTUAL_LINUX_W4 !== 'undefined', 'VIRTUAL_LINUX_W4 loaded successfully');
} catch (e) {
  assert(false, `Failed to load virtual_fs.js: ${e.message}`);
}

// Load Question sets using the exact window variable names
try {
  eval(fs.readFileSync(path.join(BASE_DIR, 'data/questions_1_50.js'), 'utf8'));
  assert(Array.isArray(window.QUESTIONS_1_50_W4) && window.QUESTIONS_1_50_W4.length === 50, 'Loaded questions 1-50 (50 items)');

  eval(fs.readFileSync(path.join(BASE_DIR, 'data/questions_51_100.js'), 'utf8'));
  assert(Array.isArray(window.QUESTIONS_51_100_W4) && window.QUESTIONS_51_100_W4.length === 50, 'Loaded questions 51-100 (50 items)');

  eval(fs.readFileSync(path.join(BASE_DIR, 'data/questions_101_150.js'), 'utf8'));
  assert(Array.isArray(window.QUESTIONS_101_150_W4) && window.QUESTIONS_101_150_W4.length === 50, 'Loaded questions 101-150 (50 items)');
} catch (e) {
  assert(false, `Failed to load question files: ${e.message}`);
}

const allQuestions = [
  ...(window.QUESTIONS_1_50_W4 || []),
  ...(window.QUESTIONS_51_100_W4 || []),
  ...(window.QUESTIONS_101_150_W4 || [])
];

assert(allQuestions.length === 150, `Total questions count is exactly 150 (got ${allQuestions.length})`);

// 3. SECTOR DISTRIBUTION & QUESTION ANATOMY VALIDATION
console.log('\n--- 3. Sector Distribution & Flag Anatomy Validation ---');

const sectorCounts = {};
let allHaveFlags = true;
let allHaveRisk = true;
let flagCardCount = 0;

allQuestions.forEach(q => {
  sectorCounts[q.sector] = (sectorCounts[q.sector] || 0) + 1;

  if (!q.flagAnatomy || !Array.isArray(q.flagAnatomy.flags)) {
    allHaveFlags = false;
  } else if (q.flagAnatomy.flags.length > 0) {
    flagCardCount++;
    q.flagAnatomy.flags.forEach(f => {
      if (!f.withoutRisk || f.withoutRisk.trim().length === 0) {
        allHaveRisk = false;
      }
    });
  }
});

assert(Object.keys(sectorCounts).length === 10, 'All 10 sectors represented');
for (let s = 1; s <= 10; s++) {
  assert(sectorCounts[s] === 15, `Sector ${s} has exactly 15 questions (got ${sectorCounts[s]})`);
}
assert(allHaveFlags, 'Every single question (150/150) has flagAnatomy defined');
assert(allHaveRisk, 'Every single flag breakdown has an omission risk explanation ("withoutRisk")');
console.log(`  ℹ️ Total question flag cards: ${flagCardCount} / 150`);

// 4. BASH_GRADER PASS RATE TEST (150 / 150)
console.log('\n--- 4. BASH_GRADER Simulation (Testing all 150 canonical answers) ---');
const grader = window.VIRTUAL_LINUX_W4.BASH_GRADER;
assert(typeof grader === 'object' && typeof grader.evaluate === 'function', 'BASH_GRADER.evaluate function is defined');

let passedAnswers = 0;
allQuestions.forEach(q => {
  // Use primary expected command as test input
  let testCmd = q.expectedBash || (q.solutions && q.solutions[0]) || '';
  const result = grader.evaluate(q, testCmd);
  if (result && (result.match === true || result === true)) {
    passedAnswers++;
  } else {
    console.error(`  ⚠️ Question #${q.id} FAILED grader with '${testCmd}':`, result ? result.message : 'no result');
  }
});

assert(passedAnswers === 150, `150/150 questions PASS with their canonical answer (got ${passedAnswers}/150)`);

// 5. MASTER FLAG DICTIONARY TEST
console.log('\n--- 5. Master Flag Dictionary Tests ---');
const dict = window.VIRTUAL_LINUX_W4.LINUX_FLAG_DICTIONARY;
assert(Array.isArray(dict) && dict.length >= 25, `Flag dictionary has >= 25 entries (got ${dict ? dict.length : 0})`);

// Check required user-specific commands in dictionary: usermod (-L, -U, -s, -c, -m), find, curl, df, etc.
assert(dict.some(item => item.cmd === 'usermod' && item.flag.includes('-L')), "Dictionary includes 'usermod -L'");
assert(dict.some(item => item.cmd === 'usermod' && item.flag.includes('-U')), "Dictionary includes 'usermod -U'");
assert(dict.some(item => item.cmd === 'usermod' && item.flag.includes('-s')), "Dictionary includes 'usermod -s'");
assert(dict.some(item => item.cmd === 'usermod' && item.flag.includes('-c')), "Dictionary includes 'usermod -c'");
assert(dict.some(item => item.cmd === 'usermod' && item.flag.includes('-m')), "Dictionary includes 'usermod -m'");

assert(dict.some(item => item.cmd === 'curl' && item.flag.includes('-f')), "Dictionary includes 'curl -f'");
assert(dict.some(item => item.cmd === 'curl' && item.flag.includes('-L')), "Dictionary includes 'curl -L'");
assert(dict.some(item => item.cmd === 'curl' && item.flag.includes('-s')), "Dictionary includes 'curl -s'");
assert(dict.some(item => item.cmd === 'curl' && item.flag.includes('-S')), "Dictionary includes 'curl -S'");

assert(dict.some(item => item.cmd === 'find' && item.flag.includes('-type')), "Dictionary includes 'find -type'");
assert(dict.some(item => item.cmd === 'find' && item.flag.includes('-print0')), "Dictionary includes 'find -print0'");
assert(dict.some(item => item.cmd === 'find' && item.flag.includes('-mmin')), "Dictionary includes 'find -mmin'");

assert(dict.some(item => item.cmd === 'df' && item.flag.includes('-P')), "Dictionary includes 'df -P'");

// 6. VIRTUAL LINUX SHELL EXECUTION TESTS
console.log('\n--- 6. VirtualLinuxShell Execution Tests ---');
const shell = new window.VIRTUAL_LINUX_W4.VirtualLinuxShell();

// Test pwd & ls
let res = shell.execute('pwd');
assert(res.stdout.trim() === '/home/student/os_seminar4', "Virtual shell starts in /home/student/os_seminar4");

// Test gcc
res = shell.execute('gcc -Wall -Wextra fork.c -o fork.out');
assert(res.code === 0 && shell.getNode('/home/student/os_seminar4/fork.out') !== null, "gcc compiles fork.c to fork.out");

// Test ./fork.out
res = shell.execute('./fork.out');
assert(res.code === 0 && res.stdout.includes('Parent:') && res.stdout.includes('Child:'), "./fork.out outputs both child and parent PID info");

// Test python3 fork.py
res = shell.execute('python3 fork.py');
assert(res.code === 0 && res.stdout.includes('Hello from Parent!') && res.stdout.includes('Hello from Child!'), "python3 fork.py outputs child and parent PIDs");

// Test download.sh
res = shell.execute('./download.sh https://example.com/test.txt output.txt');
assert(res.code === 0 && res.stdout.includes('SUCCESS'), "./download.sh succeeds");

// Test rotate.sh
res = shell.execute('./rotate.sh');
assert(res.code === 0 && res.stdout.includes('rotation_report.txt'), "./rotate.sh generates rotation report");

// Test disk_check.sh
res = shell.execute('./disk_check.sh');
assert(res.code === 0 && res.stdout.includes('Disk usage normal'), "./disk_check.sh reports normal disk usage");

// Test service_check.sh
res = shell.execute('./service_check.sh cron.service');
assert(res.code === 0 && res.stdout.includes('is active'), "./service_check.sh reports active service");

// Test systemctl
res = shell.execute('systemctl --user start os-seminar-tick.timer');
assert(res.code === 0 && shell.systemdTimers['os-seminar-tick.timer'].active, "systemctl starts user timer");

res = shell.execute('systemctl --user list-timers');
assert(res.code === 0 && res.stdout.includes('os-seminar-tick.timer'), "systemctl list-timers lists the timer");

// Test crontab
res = shell.execute('crontab -e');
assert(res.code === 0 && shell.cronLines.length > 0, "crontab -e installs seminar tick cronjob");

res = shell.execute('crontab -l');
assert(res.code === 0 && res.stdout.includes('tick.sh'), "crontab -l outputs scheduled cron jobs");

// Test ps aux & pstree
res = shell.execute('ps aux');
assert(res.code === 0 && res.stdout.includes('PID'), "ps aux outputs process list");

res = shell.execute('pstree -p');
assert(res.code === 0 && res.stdout.includes('systemd(1)'), "pstree -p outputs process hierarchy tree");

// Test df -P /
res = shell.execute('df -P /');
assert(res.code === 0 && res.stdout.includes('/dev/sda1'), "df -P / outputs POSIX format");

// 7. SUMMARY
console.log('\n================================================================');
console.log(`VERIFICATION COMPLETE: ${passedTests} / ${totalTests} tests passed (${failedTests} failed)`);
console.log('================================================================');

if (failedTests > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL TESTS PASSED! Week 4 Simulator is 100% verified and ready.\n');
}
