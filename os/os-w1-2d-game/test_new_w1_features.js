// ============================================================================
// TEST SUITE: WEEK 1 NEW CLI MASTER & BATAFSIL FEATURES
// ============================================================================

const fs = require('fs');
const path = require('path');

console.log("=== TESTING WEEK 1 NEW CLI & BATAFSIL FEATURES ===");

// 1. Load command_anatomy.js in Node context
global.window = global;
require('./data/command_anatomy.js');

if (!global.COMMAND_ANATOMY) {
  console.error("FAIL: COMMAND_ANATOMY is not defined on window/global!");
  process.exit(1);
}
console.log("[PASS] COMMAND_ANATOMY module successfully loaded.");

// 2. Test analysis of key Week 1 commands
const testCommands = [
  { cmd: "pwd", expectFlags: 0 },
  { cmd: "ls -la", expectFlags: 2 },
  { cmd: "mkdir -p scripts/backup", expectFlags: 1 },
  { cmd: "cp -r /source /dest", expectFlags: 1 },
  { cmd: "ln -s /etc/passwd link_pass", expectFlags: 1 },
  { cmd: "touch -d '2024-01-01' datefile.txt", expectFlags: 1 },
  { cmd: "find . -name '*.log' -mtime -7", expectFlags: 2 },
  { cmd: "cat -n /etc/passwd", expectFlags: 1 },
  { cmd: "head -n 5 /var/log/syslog", expectFlags: 1 },
  { cmd: "tail -f /var/log/auth.log", expectFlags: 1 },
  { cmd: "wc -l /etc/passwd", expectFlags: 1 }
];

testCommands.forEach(t => {
  const analysis = global.COMMAND_ANATOMY.analyze(t.cmd, { taskUz: "Test vazifa" });
  console.log(`[TEST] Command '${t.cmd}': Name='${analysis.name}', Detected Flags=${analysis.flagsList.length}`);
  if (analysis.flagsList.length < t.expectFlags) {
    console.error(`FAIL: Expected at least ${t.expectFlags} flags for '${t.cmd}', got ${analysis.flagsList.length}`);
    process.exit(1);
  }
  const html = global.COMMAND_ANATOMY.renderCardHtml(analysis);
  if (!html.includes("Bu Buyruq Nima Qiladi") || !html.includes("Agar Bu Buyruq / Qo'shimchalar Bo'lmasa Nima Bo'ladi")) {
    console.error(`FAIL: Rendered HTML does not contain required pedagogical sections for '${t.cmd}'`);
    process.exit(1);
  }
});
console.log("[PASS] All test commands generated full pedagogical breakdowns!");

// 3. Test virtual FS autocompletion logic
require('./data/virtual_fs.js');
const shell = new global.VIRTUAL_LINUX.VirtualLinuxShell();
const cwdNode = shell.getNode(shell.cwd);
const files = Object.keys(cwdNode.children);
console.log("[TEST] Virtual FS /home/student files:", files.join(", "));

if (!files.includes("readme.txt")) {
  console.error("FAIL: expected readme.txt in /home/student");
  process.exit(1);
}
console.log("[PASS] Virtual Linux FS autocompletion source nodes verified!");

// 4. Test exit code `$?` in shell execution
const okRes = shell.execute("pwd");
if (okRes.code !== 0) {
  console.error("FAIL: pwd should have code 0, got:", okRes.code);
  process.exit(1);
}
const failRes = shell.execute("cd /non_existent_folder_xyz");
if (failRes.code === 0) {
  console.error("FAIL: cd into non-existent folder should return non-zero code");
  process.exit(1);
}
console.log("[PASS] Exit code tracking ($?): Success=0, Error=" + failRes.code);

console.log("\n=======================================================");
console.log("   ALL NEW WEEK 1 CLI & BATAFSIL TESTS PASSED 100%!    ");
console.log("=======================================================\n");
