// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 VIRTUAL LINUX ENGINE & VFS
// Topics: Process Management (ps, ps aux, top, pstree, pgrep, sleep 300 &, jobs -l,
// fg, bg, kill, pkill, killall, signals),
// Bash Shell Scripting (shebang, set -euo pipefail, strict mode, chmod +x, echo $?),
// Variables & Arguments ($#, $1, "${1:-}"), User Input (read -r -p, date +%Y),
// Conditional Logic (if [[ ]], (( )), case, file tests -e -f -d -s),
// Loops (for, while, break, continue, read line-by-line), Arrays,
// Process Reports, Career Progression & Office Events.
// ============================================================================

(function () {
  let nextInode = 30001;

  function createInitialFS() {
    nextInode = 30001;

    const root = {
      name: "",
      type: "dir",
      inode: 2,
      permissions: "drwxr-xr-x",
      owner: "root",
      group: "root",
      links: 16,
      mtime: "2025-01-25 09:00:00",
      children: {}
    };

    function addDir(parent, name, perms = "drwxr-xr-x", owner = "root", group = "root") {
      const d = {
        name,
        type: "dir",
        inode: nextInode++,
        permissions: perms,
        owner,
        group,
        links: 2,
        mtime: "2025-01-25 09:00:00",
        children: {}
      };
      parent.children[name] = d;
      return d;
    }

    function addFile(parent, name, content = "", perms = "-rw-r--r--", owner = "root", group = "root", mtime = "2025-01-25 09:00:00") {
      const f = {
        name,
        type: "file",
        inode: nextInode++,
        permissions: perms,
        owner,
        group,
        links: 1,
        mtime,
        content,
        size: (typeof TextEncoder !== "undefined" ? new TextEncoder().encode(content).length : (content ? content.length : 0))
      };
      parent.children[name] = f;
      return f;
    }

    addDir(root, "bin");
    addDir(root, "boot");
    addDir(root, "dev");
    const etc = addDir(root, "etc");
    const home = addDir(root, "home");
    addDir(root, "lib");
    addDir(root, "proc");
    addDir(root, "tmp", "drwxrwxrwt", "root", "root");
    const varDir = addDir(root, "var");
    addDir(varDir, "log");

    // Student Workspace
    const studentHome = addDir(home, "student", "drwxr-xr-x", "student", "student");
    const labDir = addDir(studentHome, "os_lab_process_bash", "drwxr-xr-x", "student", "student");

    // Pre-populate Lab Files & Scripts from Student Manual Week 03
    addFile(labDir, "empty.txt", "", "-rw-r--r--", "student", "student");
    addFile(labDir, "data.txt", "sample\n", "-rw-r--r--", "student", "student");
    addFile(labDir, "ips.txt", "127.0.0.1\n192.0.2.1\n", "-rw-r--r--", "student", "student");

    const helloContent = `#!/usr/bin/env bash
set -euo pipefail

echo "Hello from Bash!"
`;
    addFile(labDir, "hello.sh", helloContent, "-rwxr-xr-x", "student", "student");

    const varContent = `#!/usr/bin/env bash
set -euo pipefail

COURSE="Operating Systems"
LAB_NUMBER=2
STUDENT_NAME="Alice Smith"

echo "Student: \${STUDENT_NAME}"
echo "Welcome to \${COURSE} - Lab \${LAB_NUMBER}"
echo "Shell: \${SHELL}"
echo "Effective user ID: \${EUID}"
`;
    addFile(labDir, "variables.sh", varContent, "-rwxr-xr-x", "student", "student");

    const greetContent = `#!/usr/bin/env bash
set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: $0 <name>"
  exit 1
fi

name="$1"
echo "Hello, \${name}!"
`;
    addFile(labDir, "greet.sh", greetContent, "-rwxr-xr-x", "student", "student");

    const ageContent = `#!/usr/bin/env bash
set -euo pipefail

read -r -p "Enter your name: " name
read -r -p "Enter your year of birth: " birth_year
current_year=$(date +%Y)

if [[ ! "\${birth_year}" =~ ^[0-9]{4}$ ]]; then
  echo "Error: enter a four-digit year."
  exit 1
fi

age=$((current_year - birth_year))
echo "Hello \${name}. Your approximate age is \${age}."
`;
    addFile(labDir, "age.sh", ageContent, "-rwxr-xr-x", "student", "student");

    const classifyContent = `#!/usr/bin/env bash
set -euo pipefail

read -r -p "Enter an integer: " number

if [[ ! "\${number}" =~ ^-?[0-9]+$ ]]; then
  echo "Error: input must be an integer."
  exit 1
fi

if (( number >= 20 && number <= 100 )); then
  echo "average"
elif (( number < 10 )); then
  echo "small"
elif (( number > 100 )); then
  echo "large"
else
  echo "out of range"
fi
`;
    addFile(labDir, "classify.sh", classifyContent, "-rwxr-xr-x", "student", "student");

    const filecheckContent = `#!/usr/bin/env bash
set -euo pipefail

file="\${1:-}"
if [[ -z "\${file}" ]]; then
  echo "Usage: $0 <filename>"
  exit 1
fi

if [[ ! -e "\${file}" ]]; then
  echo "The path does not exist: \${file}"
  exit 2
fi

if [[ -f "\${file}" ]]; then
  echo "It is a regular file."
else
  echo "It exists but is not a regular file."
fi

if [[ -s "\${file}" ]]; then
  echo "The file is not empty."
else
  echo "The file is empty."
fi
`;
    addFile(labDir, "filecheck.sh", filecheckContent, "-rwxr-xr-x", "student", "student");

    const serviceMenuContent = `#!/usr/bin/env bash
set -euo pipefail

action="\${1:-}"
case "\${action}" in
  start)
    echo "Starting the demonstration service..."
    ;;
  stop)
    echo "Stopping the demonstration service..."
    ;;
  restart)
    echo "Restarting the demonstration service..."
    ;;
  *)
    echo "Usage: $0 {start|stop|restart}"
    exit 1
    ;;
esac
`;
    addFile(labDir, "service_menu.sh", serviceMenuContent, "-rwxr-xr-x", "student", "student");

    const loopsContent = `#!/usr/bin/env bash
set -euo pipefail

limit="\${1:-}"
if [[ ! "\${limit}" =~ ^[1-9][0-9]*$ ]]; then
  echo "Usage: $0 <positive-integer>"
  exit 1
fi

echo "for loop"
for ((i=1; i<=limit; i++)); do
  echo "\${i}"
done

echo "while loop"
i=1
while ((i <= limit)); do
  echo "\${i}"
  ((i += 1))
done
`;
    addFile(labDir, "loops.sh", loopsContent, "-rwxr-xr-x", "student", "student");

    const readIpsContent = `#!/usr/bin/env bash
set -euo pipefail

while IFS= read -r ip; do
  [[ -z "\${ip}" ]] && continue
  echo "IP: \${ip}"
done < ips.txt
`;
    addFile(labDir, "read_ips.sh", readIpsContent, "-rwxr-xr-x", "student", "student");

    const arraysContent = `#!/usr/bin/env bash
set -euo pipefail

fruits=("apple" "banana" "cherry")
fruits+=("melon")

echo "First item: \${fruits[0]}"
echo "Number of items: \${#fruits[@]}"

for index in "\${!fruits[@]}"; do
  echo "Fruit \${index} = \${fruits[$index]}"
done

declare -A colours=(
  [red]="#FF0000"
  [green]="#00FF00"
  [blue]="#0000FF"
)

for name in "\${!colours[@]}"; do
  echo "\${name}: \${colours[$name]}"
done
`;
    addFile(labDir, "arrays.sh", arraysContent, "-rwxr-xr-x", "student", "student");

    const reportContent = `#!/usr/bin/env bash
set -euo pipefail

output="\${1:-process_report.txt}"
timestamp=$(date '+%Y-%m-%d %H:%M:%S')

{
  echo "PROCESS REPORT"
  echo "Generated: \${timestamp}"
  echo "User: $(whoami)"
  echo "Host: $(hostname)"
  echo
  echo "Top processes by memory use"
  ps aux --sort=-%mem | head -n 6
} > "\${output}"

echo "Report saved to: \${output}"
`;
    addFile(labDir, "process_report.sh", reportContent, "-rwxr-xr-x", "student", "student");

    return root;
  }

  // ============================================================================
  // VIRTUAL LINUX SHELL CLASS (WEEK 3)
  // ============================================================================

  class VirtualLinuxShell {
    constructor() {
      this.root = createInitialFS();
      this.cwd = "/home/student/os_lab_process_bash";
      this.user = "student";
      this.env = {
        HOME: "/home/student",
        USER: "student",
        SHELL: "/bin/bash",
        EUID: "1000",
        PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        TERM: "xterm-256color"
      };

      // Job Control State
      this.jobs = [
        { id: 1, pid: 2458, name: "sleep 300", state: "Running" }
      ];
      this.nextJobId = 2;
      this.nextPid = 2500;
    }

    resolvePath(p) {
      if (!p) return this.cwd;
      let target = p.trim();
      if (target.startsWith("~")) target = this.env.HOME + target.slice(1);
      if (target.startsWith("/")) return this.normalizePath(target);
      return this.normalizePath(this.cwd + "/" + target);
    }

    normalizePath(p) {
      const parts = p.split("/").filter(Boolean);
      const stack = [];
      for (const part of parts) {
        if (part === ".") continue;
        if (part === "..") {
          if (stack.length > 0) stack.pop();
        } else {
          stack.push(part);
        }
      }
      return "/" + stack.join("/");
    }

    getNode(absPath) {
      if (absPath === "/" || absPath === "") return this.root;
      const parts = absPath.split("/").filter(Boolean);
      let cur = this.root;
      for (let i = 0; i < parts.length; i++) {
        if (!cur.children || !cur.children[parts[i]]) return null;
        cur = cur.children[parts[i]];
        if (cur.type === "symlink" && i < parts.length - 1) {
          cur = this.getNode(this.resolvePath(cur.target));
          if (!cur) return null;
        }
      }
      return cur;
    }

    getParentAndName(absPath) {
      const parts = absPath.split("/").filter(Boolean);
      if (parts.length === 0) return { parent: null, name: "" };
      const name = parts.pop();
      const parentPath = "/" + parts.join("/");
      const parent = this.getNode(parentPath);
      return { parent, name, parentPath };
    }

    execute(cmdLine) {
      if (!cmdLine || !cmdLine.trim()) return { stdout: "", stderr: "", code: 0 };
      const raw = cmdLine.trim();

      const commands = raw.split(/;|&&/).map(s => s.trim()).filter(Boolean);
      let combinedStdout = "";
      let combinedStderr = "";
      let lastCode = 0;

      for (const single of commands) {
        const res = this.executeSingle(single);
        if (res.stdout) combinedStdout += (combinedStdout ? "\n" : "") + res.stdout;
        if (res.stderr) combinedStderr += (combinedStderr ? "\n" : "") + res.stderr;
        lastCode = res.code;
        if (res.code !== 0 && raw.includes("&&")) break;
      }

      return { stdout: combinedStdout, stderr: combinedStderr, code: lastCode };
    }

    executeSingle(cmd) {
      let trimmed = cmd.trim();

      // Output Redirection: > or >>
      let redirectAppend = false;
      let redirectTarget = null;

      const appendMatch = trimmed.match(/^([\s\S]+?)\s*>>\s*([^\s]+)$/);
      const writeMatch = trimmed.match(/^([\s\S]+?)\s*>\s*([^\s]+)$/);

      if (appendMatch) {
        trimmed = appendMatch[1].trim();
        redirectTarget = appendMatch[2].trim();
        redirectAppend = true;
      } else if (writeMatch) {
        trimmed = writeMatch[1].trim();
        redirectTarget = writeMatch[2].trim();
        redirectAppend = false;
      }

      // Handle Pipeline: cmd1 | cmd2
      if (trimmed.includes("|")) {
        const pipeParts = trimmed.split("|").map(s => s.trim());
        let currentInput = "";
        for (let i = 0; i < pipeParts.length; i++) {
          const partRes = this.runSinglePiped(pipeParts[i], currentInput);
          if (partRes.code !== 0) return partRes;
          currentInput = partRes.stdout;
        }
        if (redirectTarget) {
          this.writeRedirect(redirectTarget, currentInput, redirectAppend);
          return { stdout: "", stderr: "", code: 0 };
        }
        return { stdout: currentInput, stderr: "", code: 0 };
      }

      const res = this.runSinglePiped(trimmed, "");
      if (redirectTarget) {
        this.writeRedirect(redirectTarget, res.stdout, redirectAppend);
        return { stdout: "", stderr: res.stderr, code: res.code };
      }
      return res;
    }

    writeRedirect(targetPath, text, isAppend) {
      const absPath = this.resolvePath(targetPath);
      const { parent, name } = this.getParentAndName(absPath);
      if (!parent || parent.type !== "dir") return;

      let file = parent.children[name];
      if (!file) {
        file = {
          name,
          type: "file",
          inode: nextInode++,
          permissions: "-rw-r--r--",
          owner: this.user,
          group: this.user,
          links: 1,
          mtime: new Date().toISOString().replace("T", " ").substring(0, 19),
          content: "",
          size: 0
        };
        parent.children[name] = file;
      }

      const toWrite = text.endsWith("\n") ? text : text + "\n";
      if (isAppend) {
        file.content += toWrite;
      } else {
        file.content = toWrite;
      }
      file.size = (typeof TextEncoder !== "undefined" ? new TextEncoder().encode(file.content).length : file.content.length);
    }

    runSinglePiped(cmdStr, stdinData) {
      const rawTokens = this.parseArgs(cmdStr);
      if (rawTokens.length === 0) return { stdout: "", stderr: "", code: 0 };

      // Handle script execution like ./hello.sh or bash hello.sh
      if (rawTokens[0].startsWith("./") || rawTokens[0].endsWith(".sh")) {
        return this.runScript(rawTokens);
      }

      const baseCmd = rawTokens[0];
      const args = rawTokens.slice(1);

      switch (baseCmd) {
        case "whoami":
        return { stdout: this.isRoot ? "root" : "userland", stderr: "", code: 0, editorAction: null };
        case "pwd": return { stdout: this.cwd, stderr: "", code: 0 };
        case "hostname":
        return { stdout: "kali", stderr: "", code: 0, editorAction: null };
        case "echo": return this.cmdEcho(args);
        case "bash": return this.cmdBash(args);
        case "ps": return this.cmdPs(args);
        case "top": return this.cmdTop();
        case "pstree": return this.cmdPstree(args);
        case "pgrep": return this.cmdPgrep(args);
        case "sleep": return this.cmdSleep(args);
        case "jobs": return this.cmdJobs(args);
        case "fg": return this.cmdFg(args);
        case "bg": return this.cmdBg(args);
        case "kill": return this.cmdKill(args);
        case "pkill": return this.cmdPkill(args);
        case "killall": return this.cmdKillall(args);
        case "cd": return this.cmdCd(args);
        case "mkdir": return this.cmdMkdir(args);
        case "touch": return this.cmdTouch(args);
        case "cat": return this.cmdCat(args, stdinData);
        case "head": return this.cmdHead(args, stdinData);
        case "tail": return this.cmdTail(args, stdinData);
        case "wc": return this.cmdWc(args, stdinData);
        case "chmod": return this.cmdChmod(args);
        case "date": return this.cmdDate(args);
        case "printf": return this.cmdPrintf(args);
        case "ls": return this.cmdLs(args);
        case "clear": return { stdout: "", stderr: "", code: 0 };
        
        case "vim":
        case "vi":
        case "nano": {
          const target = (args && args[0]) || "script.sh";
          if (typeof this.cmdTouch === "function") this.cmdTouch([target]);
          return {
            stdout: "~\n~   [" + baseCmd.toUpperCase() + " - Kali GNU/Linux Text Editor]\n~   Fayl ochildi: " + target + "\n~   ------------------------------------------------------------\n~   # Kali Linux matn muharriri\n~   # Tahrirlash: :i | Saqlash va chiqish: :wq | Chiqish: :q\n~   ------------------------------------------------------------\n~\n\"" + target + "\" [Yangi fayl yaratildi va saqlandi]",
            stderr: "",
            code: 0
          };
        }
        case "uname": {
        const hasA = tokens.includes("-a");
        const hasR = tokens.includes("-r");
        if (hasA) {
          return { stdout: "Linux kali 6.6.9-kali1-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.6.9-1kali1 (2024-01-08) x86_64 GNU/Linux", stderr: "", code: 0, editorAction: null };
        }
        if (hasR) {
          return { stdout: "6.6.9-kali1-amd64", stderr: "", code: 0, editorAction: null };
        }
        return { stdout: "Linux", stderr: "", code: 0, editorAction: null };
      }
        case "hostname": {
          return { stdout: "kali", stderr: "", code: 0 };
        }
        case "apt":
        case "apt-get": {
          const sub = (args && args[0] ? args[0] : "").toLowerCase();
          if (sub === "update") {
            return {
              stdout: "Hit:1 http://http.kali.org/kali kali-rolling InRelease\nGet:2 http://http.kali.org/kali kali-rolling/main amd64 Packages [19.2 MB]\nFetched 19.4 MB in 1s (19.4 MB/s)\nReading package lists... Done\nBuilding dependency tree... Done\nAll packages are up to date.",
              stderr: "",
              code: 0
            };
          }
          const pkg = (args && args[1]) || "tools";
          return {
            stdout: "Reading package lists... Done\nBuilding dependency tree... Done\nThe following NEW packages will be installed: " + pkg + "\nSetting up " + pkg + " (latest) ...\nProcessing triggers for man-db ... Done",
            stderr: "",
            code: 0
          };
        }

        default:
          return { stdout: "", stderr: `bash: ${baseCmd}: command not found`, code: 127 };
      }
    }

    parseArgs(str) {
      const tokens = [];
      let cur = "";
      let inQuote = null;
      for (let i = 0; i < str.length; i++) {
        const c = str[i];
        if (inQuote) {
          if (c === inQuote) {
            inQuote = null;
          } else {
            cur += c;
          }
        } else if (c === "'" || c === '"') {
          inQuote = c;
        } else if (/\s/.test(c)) {
          if (cur.length > 0) {
            tokens.push(cur);
            cur = "";
          }
        } else {
          cur += c;
        }
      }
      if (cur.length > 0) tokens.push(cur);
      return tokens;
    }

    // --- Command Handlers ---

    cmdEcho(args) {
      const line = args.join(" ");
      if (line === '"$SHELL"' || line === '$SHELL') {
        return { stdout: this.env.SHELL, stderr: "", code: 0 };
      }
      if (line === "$?" || line === '"$?"') {
        return { stdout: "0", stderr: "", code: 0 };
      }
      return { stdout: line.replace(/^["']|["']$/g, ""), stderr: "", code: 0 };
    }

    cmdBash(args) {
      if (args.includes("--version")) {
        return {
          stdout: "GNU bash, version 5.2.15(1)-release (x86_64-pc-linux-gnu)\nCopyright (C) 2022 Free Software Foundation, Inc.",
          stderr: "",
          code: 0
        };
      }
      if (args[0] === "-n" && args[1]) {
        const fileNode = this.getNode(this.resolvePath(args[1]));
        if (!fileNode) return { stdout: "", stderr: `bash: ${args[1]}: No such file or directory`, code: 1 };
        return { stdout: "", stderr: "", code: 0 }; // Syntax OK (no output)
      }
      if (args[0] && args[0].endsWith(".sh")) {
        return this.runScript(args);
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdPs(args) {
      const str = args.join(" ");
      if (str.includes("aux")) {
        if (str.includes("--sort=-%mem")) {
          const rows = [
            "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND",
            "student   1000  0.1  2.4 105432 18456 pts/0    Ss   09:00   0:01 bash",
            "root       102  0.0  1.8  85412 14210 ?        Ss   08:50   0:00 sshd: /usr/sbin/sshd",
            "root         1  0.0  1.2 168452  9540 ?        Ss   08:50   0:02 /sbin/init",
            "root       451  0.0  0.8  24150  6240 ?        Ss   08:50   0:00 /usr/sbin/cron -f",
            "student   2458  0.0  0.1   8240  1024 pts/0    S    09:05   0:00 sleep 300"
          ];
          return { stdout: rows.join("\n"), stderr: "", code: 0 };
        }
        const fullRows = [
          "USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND",
          "root         1  0.0  1.2 168452  9540 ?        Ss   08:50   0:02 /sbin/init",
          "root       102  0.0  1.8  85412 14210 ?        Ss   08:50   0:00 sshd: /usr/sbin/sshd",
          "root       451  0.0  0.8  24150  6240 ?        Ss   08:50   0:00 /usr/sbin/cron -f",
          "student   1000  0.1  2.4 105432 18456 pts/0    Ss   09:00   0:01 bash",
          "student   2458  0.0  0.1   8240  1024 pts/0    S    09:05   0:00 sleep 300"
        ];
        return { stdout: fullRows.join("\n"), stderr: "", code: 0 };
      }

      // Default standard ps
      const defaultRows = [
        "  PID TTY          TIME CMD",
        " 1000 pts/0    00:00:01 bash",
        " 2458 pts/0    00:00:00 sleep",
        " 2510 pts/0    00:00:00 ps"
      ];
      return { stdout: defaultRows.join("\n"), stderr: "", code: 0 };
    }

    cmdTop() {
      const topOutput = [
        "top - 09:15:00 up 25 min,  1 user,  load average: 0.05, 0.03, 0.00",
        "Tasks:  45 total,   1 running,  44 sleeping,   0 stopped,   0 zombie",
        "%Cpu(s):  0.3 us,  0.2 sy,  0.0 ni, 99.5 id,  0.0 wa,  0.0 hi,  0.0 si",
        "MiB Mem :   3920.5 total,   2840.1 free,    650.3 used,    430.1 buff/cache",
        "MiB Swap:      0.0 total,      0.0 free,      0.0 used.   3120.4 avail Mem",
        "",
        "    PID USER      PR  NI    VIRT    RES    SHR S  %CPU  %MEM     TIME+ COMMAND",
        "   1000 student   20   0  105432  18456   5420 S   0.3   2.4   0:01.12 bash",
        "   2458 student   20   0    8240   1024    840 S   0.0   0.1   0:00.02 sleep"
      ].join("\n");
      return { stdout: topOutput, stderr: "", code: 0 };
    }

    cmdPstree(args) {
      if (args.includes("-p")) {
        const tree = [
          "systemd(1)─┬─cron(451)",
          "           ├─sshd(102)───bash(1000)───sleep(2458)",
          "           └─systemd-journal(85)"
        ].join("\n");
        return { stdout: tree, stderr: "", code: 0 };
      }
      return {
        stdout: "systemd─┬─cron\n        ├─sshd───bash───sleep\n        └─systemd-journal",
        stderr: "",
        code: 0
      };
    }

    cmdPgrep(args) {
      let showName = false;
      let target = null;
      for (const a of args) {
        if (a === "-a") showName = true;
        else if (!a.startsWith("-")) target = a;
      }
      if (!target) return { stdout: "", stderr: "pgrep: missing pattern", code: 1 };

      if (target === "bash") {
        return { stdout: showName ? "1000 /bin/bash" : "1000", stderr: "", code: 0 };
      }
      if (target === "sleep") {
        const sleepJob = this.jobs.find(j => j.name.includes("sleep") && j.state !== "Terminated");
        if (sleepJob) {
          return { stdout: showName ? `${sleepJob.pid} sleep 300` : `${sleepJob.pid}`, stderr: "", code: 0 };
        }
        return { stdout: "", stderr: "", code: 1 };
      }
      return { stdout: "", stderr: "", code: 1 };
    }

    cmdSleep(args) {
      const isBg = args.includes("&");
      const seconds = args[0] || "300";
      if (isBg) {
        const jId = this.nextJobId++;
        const pid = this.nextPid++;
        this.jobs.push({ id: jId, pid, name: `sleep ${seconds}`, state: "Running" });
        return { stdout: `[${jId}] ${pid}`, stderr: "", code: 0 };
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdJobs(args) {
      const lines = this.jobs
        .filter(j => j.state !== "Terminated")
        .map(j => {
          if (args.includes("-l")) {
            return `[${j.id}]+  ${j.pid} ${j.state}                 ${j.name} &`;
          }
          return `[${j.id}]+  ${j.state}                 ${j.name} &`;
        });
      return { stdout: lines.join("\n"), stderr: "", code: 0 };
    }

    cmdFg(args) {
      const target = args[0] || "%1";
      const id = parseInt(target.replace("%", ""), 10) || 1;
      const job = this.jobs.find(j => j.id === id);
      if (!job || job.state === "Terminated") {
        return { stdout: "", stderr: `bash: fg: ${target}: no such job`, code: 1 };
      }
      job.state = "Running";
      return { stdout: `${job.name}`, stderr: "", code: 0 };
    }

    cmdBg(args) {
      const target = args[0] || "%1";
      const id = parseInt(target.replace("%", ""), 10) || 1;
      const job = this.jobs.find(j => j.id === id);
      if (!job || job.state === "Terminated") {
        return { stdout: "", stderr: `bash: bg: ${target}: no such job`, code: 1 };
      }
      job.state = "Running";
      return { stdout: `[${job.id}]+ ${job.name} &`, stderr: "", code: 0 };
    }

    cmdKill(args) {
      const target = args[0];
      if (!target) return { stdout: "", stderr: "kill: usage: kill [-s sigspec | -n signum | -sigspec] pid | jobspec ...", code: 1 };

      if (target.startsWith("%")) {
        const id = parseInt(target.slice(1), 10);
        const job = this.jobs.find(j => j.id === id);
        if (job) {
          job.state = "Terminated";
          return { stdout: "", stderr: "", code: 0 };
        }
        return { stdout: "", stderr: `bash: kill: ${target}: no such job`, code: 1 };
      }

      const pid = parseInt(target, 10);
      const jobByPid = this.jobs.find(j => j.pid === pid);
      if (jobByPid) {
        jobByPid.state = "Terminated";
        return { stdout: "", stderr: "", code: 0 };
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdPkill(args) {
      const target = args[0];
      this.jobs.forEach(j => {
        if (j.name.includes(target)) j.state = "Terminated";
      });
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdKillall(args) {
      const target = args[0];
      this.jobs.forEach(j => {
        if (j.name.includes(target)) j.state = "Terminated";
      });
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdCd(args) {
      let target = args[0] || "~";
      if (target === "-") target = this.env.HOME;
      const abs = this.resolvePath(target);
      const node = this.getNode(abs);
      if (!node || node.type !== "dir") return { stdout: "", stderr: `bash: cd: ${target}: No such file or directory`, code: 1 };
      this.cwd = abs;
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdMkdir(args) {
      const isP = args.includes("-p");
      const targets = args.filter(a => !a.startsWith("-"));
      for (const t of targets) {
        const abs = this.resolvePath(t);
        if (isP) {
          const parts = abs.split("/").filter(Boolean);
          let cur = this.root;
          for (const p of parts) {
            if (!cur.children[p]) {
              cur.children[p] = {
                name: p,
                type: "dir",
                inode: nextInode++,
                permissions: "drwxr-xr-x",
                owner: this.user,
                group: this.user,
                links: 2,
                mtime: new Date().toISOString().replace("T", " ").substring(0, 19),
                children: {}
              };
            }
            cur = cur.children[p];
          }
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdTouch(args) {
      for (const a of args) {
        if (a.startsWith("-")) continue;
        const abs = this.resolvePath(a);
        const node = this.getNode(abs);
        if (node) {
          node.mtime = new Date().toISOString().replace("T", " ").substring(0, 19);
        } else {
          const { parent, name } = this.getParentAndName(abs);
          if (parent) {
            parent.children[name] = {
              name,
              type: "file",
              inode: nextInode++,
              permissions: "-rw-r--r--",
              owner: this.user,
              group: this.user,
              links: 1,
              mtime: new Date().toISOString().replace("T", " ").substring(0, 19),
              content: "",
              size: 0
            };
          }
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdCat(args, stdinData) {
      if (args.length === 0) return { stdout: stdinData || "", stderr: "", code: 0 };
      const out = [];
      for (const a of args) {
        const node = this.getNode(this.resolvePath(a));
        if (!node) return { stdout: "", stderr: `cat: ${a}: No such file or directory`, code: 1 };
        out.push(node.content || "");
      }
      return { stdout: out.join("\n"), stderr: "", code: 0 };
    }

    cmdHead(args, stdinData) {
      let n = 10;
      let target = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n" && args[i + 1]) {
          n = parseInt(args[i + 1], 10); i++;
        } else if (args[i].startsWith("-") && /-\d+/.test(args[i])) {
          n = parseInt(args[i].slice(1), 10);
        } else if (!args[i].startsWith("-")) {
          target = args[i];
        }
      }
      let content = stdinData;
      if (target) {
        const node = this.getNode(this.resolvePath(target));
        if (node) content = node.content;
      }
      const lines = (content || "").split("\n");
      return { stdout: lines.slice(0, n).join("\n"), stderr: "", code: 0 };
    }

    cmdTail(args, stdinData) {
      let n = 10;
      let target = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n" && args[i + 1]) {
          n = parseInt(args[i + 1], 10); i++;
        } else if (!args[i].startsWith("-")) {
          target = args[i];
        }
      }
      let content = stdinData;
      if (target) {
        const node = this.getNode(this.resolvePath(target));
        if (node) content = node.content;
      }
      const lines = (content || "").split("\n").filter(Boolean);
      return { stdout: lines.slice(-n).join("\n"), stderr: "", code: 0 };
    }

    cmdWc(args, stdinData) {
      let content = stdinData;
      let target = args.find(a => !a.startsWith("-"));
      if (target) {
        const node = this.getNode(this.resolvePath(target));
        if (node) content = node.content;
      }
      const lines = (content || "").split("\n").filter(Boolean).length;
      return { stdout: `${lines} ${target || ""}`.trim(), stderr: "", code: 0 };
    }

    cmdChmod(args) {
      const mode = args[0];
      const target = args[1];
      if (target) {
        const node = this.getNode(this.resolvePath(target));
        if (node) {
          if (mode === "+x") {
            node.permissions = node.permissions.replace(/-(?=[^rwx]*$)/g, "x").replace(/^([d-])(r..)(r..)(r..)$/, (m, p, u, g, o) => {
              return p + u.slice(0, 2) + "x" + g.slice(0, 2) + "x" + o.slice(0, 2) + "x";
            });
          }
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdDate(args) {
      if (args.includes("+%Y")) return { stdout: "2026", stderr: "", code: 0 };
      if (args.some(a => a.includes("%Y-%m-%d"))) return { stdout: "2026-01-25 09:30:00", stderr: "", code: 0 };
      return { stdout: "Sun Jan 25 09:30:00 UTC 2026", stderr: "", code: 0 };
    }

    cmdPrintf(args) {
      return { stdout: "127.0.0.1\n192.0.2.1\n", stderr: "", code: 0 };
    }

    cmdLs(args) {
      const node = this.getNode(this.cwd);
      if (!node || !node.children) return { stdout: "", stderr: "", code: 0 };
      const names = Object.keys(node.children).sort();
      if (args.includes("-l")) {
        const lines = names.map(n => {
          const c = node.children[n];
          return `${c.permissions} ${c.links} ${c.owner} ${c.group} ${c.size} ${c.mtime.slice(0, 10)} ${c.name}`;
        });
        return { stdout: lines.join("\n"), stderr: "", code: 0 };
      }
      return { stdout: names.join("  "), stderr: "", code: 0 };
    }

    // --- Script Runner for Seminar 3 Scripts ---
    runScript(tokens) {
      const rawPath = tokens[0].replace(/^\.\//, "");
      const args = tokens.slice(1);
      const node = this.getNode(this.resolvePath(rawPath));
      if (!node) return { stdout: "", stderr: `bash: ${tokens[0]}: No such file or directory`, code: 127 };

      if (rawPath === "hello.sh") {
        return { stdout: "Hello from Bash!", stderr: "", code: 0 };
      }
      if (rawPath === "variables.sh") {
        return {
          stdout: "Student: Alice Smith\nWelcome to Operating Systems - Lab 2\nShell: /bin/bash\nEffective user ID: 1000",
          stderr: "",
          code: 0
        };
      }
      if (rawPath === "greet.sh") {
        if (args.length !== 1) {
          return { stdout: "Usage: greet.sh <name>", stderr: "", code: 1 };
        }
        return { stdout: `Hello, ${args[0]}!`, stderr: "", code: 0 };
      }
      if (rawPath === "age.sh") {
        return { stdout: "Hello Alice. Your approximate age is 20.", stderr: "", code: 0 };
      }
      if (rawPath === "classify.sh") {
        const val = parseInt(args[0] || "25", 10);
        if (val >= 20 && val <= 100) return { stdout: "average", stderr: "", code: 0 };
        if (val < 10) return { stdout: "small", stderr: "", code: 0 };
        if (val > 100) return { stdout: "large", stderr: "", code: 0 };
        return { stdout: "out of range", stderr: "", code: 0 };
      }
      if (rawPath === "filecheck.sh") {
        const f = args[0];
        if (!f) return { stdout: "Usage: filecheck.sh <filename>", stderr: "", code: 1 };
        const targetNode = this.getNode(this.resolvePath(f));
        if (!targetNode) return { stdout: `The path does not exist: ${f}`, stderr: "", code: 2 };
        const isReg = targetNode.type === "file" ? "It is a regular file." : "It exists but is not a regular file.";
        const isEmp = targetNode.size > 0 ? "The file is not empty." : "The file is empty.";
        return { stdout: `${isReg}\n${isEmp}`, stderr: "", code: 0 };
      }
      if (rawPath === "service_menu.sh") {
        const act = args[0];
        if (act === "start") return { stdout: "Starting the demonstration service...", stderr: "", code: 0 };
        if (act === "stop") return { stdout: "Stopping the demonstration service...", stderr: "", code: 0 };
        if (act === "restart") return { stdout: "Restarting the demonstration service...", stderr: "", code: 0 };
        return { stdout: "Usage: service_menu.sh {start|stop|restart}", stderr: "", code: 1 };
      }
      if (rawPath === "loops.sh") {
        const limit = parseInt(args[0] || "5", 10);
        let out = "for loop\n";
        for (let i = 1; i <= limit; i++) out += `${i}\n`;
        out += "while loop\n";
        for (let i = 1; i <= limit; i++) out += `${i}\n`;
        return { stdout: out.trim(), stderr: "", code: 0 };
      }
      if (rawPath === "read_ips.sh") {
        return { stdout: "IP: 127.0.0.1\nIP: 192.0.2.1", stderr: "", code: 0 };
      }
      if (rawPath === "arrays.sh") {
        const arrOut = [
          "First item: apple",
          "Number of items: 4",
          "Fruit 0 = apple",
          "Fruit 1 = banana",
          "Fruit 2 = cherry",
          "Fruit 3 = melon",
          "red: #FF0000",
          "green: #00FF00",
          "blue: #0000FF"
        ].join("\n");
        return { stdout: arrOut, stderr: "", code: 0 };
      }
      if (rawPath === "process_report.sh") {
        const outName = args[0] || "process_report.txt";
        this.writeRedirect(outName, "PROCESS REPORT\nGenerated: 2026-01-25 09:30:00\nUser: student\nHost: debian-server\nTop processes by memory use\nstudent 1000 bash", false);
        return { stdout: `Report saved to: ${outName}`, stderr: "", code: 0 };
      }

      return { stdout: `Executed ${rawPath}`, stderr: "", code: 0 };
    }
  }

  // ============================================================================
  // SMART BASH GRADER FOR WEEK 3 (150 QUESTIONS)
  // ============================================================================

  const BASH_GRADER = {
    normalize(cmd) {
      if (!cmd) return "";
      return cmd
        .replace(/#.*$/gm, "")
        .trim()
        .replace(/\s+/g, " ");
    },

    evaluate(arg1, arg2, arg3) {
      let question, userCmd, expectedCmd;
      if (arg1 && typeof arg1 === "object" && (arg1.expectedBash || arg1.id)) {
        // Called as evaluate(question, userCmd, execRes)
        question = arg1;
        userCmd = arg2;
        expectedCmd = question.expectedBash || (question.solutions && question.solutions[0]) || "";
      } else {
        // Called as evaluate(userCmd, expectedCmd, question)
        userCmd = arg1;
        expectedCmd = arg2;
        question = arg3 || {};
      }

      const uClean = this.normalize(userCmd);
      const expClean = this.normalize(expectedCmd);

      if (!uClean) {
        return { match: false, message: "Terminalga buyruq kiritilmadi! Buyruq yozib Enter tugmasini bosing." };
      }

      // 1. Direct exact match
      if (uClean === expClean) {
        return { match: true, message: "A'lo darajada! Buyruq to'liq to'g'ri kiritildi." };
      }

      // 2. Solutions list check
      if (question.solutions && question.solutions.some(s => this.normalize(s) === uClean)) {
        return { match: true, message: "A'lo darajada! Muqobil to'g'ri yechim qabul qilindi." };
      }

      // 3. Sandbox live execution
      const shellExp = new VirtualLinuxShell();
      const expRes = shellExp.execute(expClean);

      const shellUser = new VirtualLinuxShell();
      const userRes = shellUser.execute(uClean);

      if (userRes.code !== 0 && expRes.code === 0) {
        return {
          match: false,
          message: `Buyruq xatolik bilan yakunlandi (Exit code ${userRes.code}): ${userRes.stderr || "Sintaktik xatolik"}`
        };
      }

      if (userRes.stdout.trim() && userRes.stdout.trim() === expRes.stdout.trim()) {
        return { match: true, message: "Barakalla! Buyruq natijasi kutilgan natija bilan 100% mos keldi." };
      }

      const expFsJson = JSON.stringify(shellExp.root);
      const userFsJson = JSON.stringify(shellUser.root);
      const expJobs = JSON.stringify(shellExp.jobs);
      const userJobs = JSON.stringify(shellUser.jobs);

      if (expFsJson === userFsJson && expJobs === userJobs && shellExp.cwd === shellUser.cwd) {
        return { match: true, message: "A'lo! Tizim holati (protsesslar yoki fayllar) kutilganidek o'zgardi." };
      }

      return {
        match: false,
        message: `Kutilgan natija hosil bo'lmadi.\nSizning natijangiz: '${userRes.stdout || userRes.stderr || "bo'sh"}'\nKutilayotgan natija: '${expRes.stdout || "tizim holati o'zgarishi"}'`
      };
    }
  };

  // ============================================================================
  // CAREER RANKS & 10 SECTORS FOR WEEK 3
  // ============================================================================

  const careerRanks = [
    { minSolved: 0,   title: "Junior Process Observer", salary: "$1,800/oy", badge: "🖥️" },
    { minSolved: 15,  title: "Process Table Inspector", salary: "$3,000/oy", badge: "🔍" },
    { minSolved: 30,  title: "Job Control & Signal Operator", salary: "$5,000/oy", badge: "⚡" },
    { minSolved: 45,  title: "Process Tree & Hierarchy Lead", salary: "$7,500/oy", badge: "🌲" },
    { minSolved: 60,  title: "Strict Mode Shell Scripter", salary: "$11,000/oy", badge: "🛡️" },
    { minSolved: 75,  title: "Positional Parameter Engineer", salary: "$15,000/oy", badge: "📋" },
    { minSolved: 90,  title: "Input & Arithmetic Architect", salary: "$20,000/oy", badge: "🔢" },
    { minSolved: 105, title: "Conditional Branching Specialist", salary: "$25,000/oy", badge: "🔀" },
    { minSolved: 120, title: "Loop & Stream Pipeline Master", salary: "$31,000/oy", badge: "🔁" },
    { minSolved: 140, title: "Linux Kernel Process & CPU Scheduling Architect", salary: "$38,000/oy", badge: "🐧" }
  ];

  const sectors = [
    {
      sector: 1,
      name: "Workspace Tayyorlash & Tizim Tekshiruvi",
      icon: "🖥️",
      range: "1 - 15",
      focus: "whoami, echo $SHELL, bash --version, mkdir -p",
      badge: "S03 Activity 1 • Setup & Environment"
    },
    {
      sector: 2,
      name: "Protsesslar Audit & Ko'rish",
      icon: "🔍",
      range: "16 - 30",
      focus: "ps, ps aux, head -n 10, pgrep -a, top",
      badge: "S03 Activity 2 • Process Audit"
    },
    {
      sector: 3,
      name: "Job Control: Fon, To'xtatish & Qaytarish",
      icon: "⚡",
      range: "31 - 45",
      focus: "sleep 300 &, jobs -l, fg %1, bg %1, kill %1",
      badge: "S03 Activity 3 • Job Control"
    },
    {
      sector: 4,
      name: "Protsesslar Daraxti & Signallar",
      icon: "🌲",
      range: "46 - 60",
      focus: "pstree -p, pkill, killall, kill <PID>, signals",
      badge: "S03 Activity 3 • Hierarchy & Signals"
    },
    {
      sector: 5,
      name: "Bash Skript Yaratish & Strict Mode",
      icon: "🛡️",
      range: "61 - 75",
      focus: "shebang, set -euo pipefail, chmod +x, echo $?",
      badge: "S03 Activity 4 • Strict Scripting"
    },
    {
      sector: 6,
      name: "O'zgaruvchilar & Argumentlar",
      icon: "📋",
      range: "76 - 90",
      focus: "variables.sh, $#, $1, ${1:-}, greet.sh",
      badge: "S03 Activity 5 • Parameters"
    },
    {
      sector: 7,
      name: "Foydalanuvchi Kiritishi & Butun Son Arifmetikasi",
      icon: "🔢",
      range: "91 - 105",
      focus: "read -r -p, date +%Y, $(( ... )), age.sh",
      badge: "S03 Activity 6 • User Input & Math"
    },
    {
      sector: 8,
      name: "Qarorlar Qabul Qilish (if, elif, case)",
      icon: "🔀",
      range: "106 - 120",
      focus: "classify.sh, filecheck.sh, service_menu.sh, -e -f -s",
      badge: "S03 Activity 7-9 • Branching & Tests"
    },
    {
      sector: 9,
      name: "Takrorlanishlar: Tsikllar & O'qish",
      icon: "🔁",
      range: "121 - 135",
      focus: "for ((i=1...)), while, break, continue, read_ips.sh",
      badge: "S03 Activity 10 • Loops & Files"
    },
    {
      sector: 10,
      name: "Massivlar & Integratsiyalashgan Hisobot",
      icon: "📊",
      range: "136 - 150",
      focus: "arrays.sh, ps aux --sort=-%mem, process_report.sh",
      badge: "S03 Activity 11-18 • Final Reports"
    }
  ];

  const officeEvents = [
    {
      id: "ev1",
      triggerAfterQuestion: 15,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "🚨 Dastlabki Muhit Tekshiruvi",
      narrative: "Professor Turing ekranga qaradi: 'Skript yozishdan oldin uning to'g'ri shell ostida ishga tushishiga qanday kafolat beramiz?'",
      choices: [
        {
          text: "Skriptning eng birinchi satriga #!/usr/bin/env bash shebangini qo'yish orqali!",
          correct: true,
          bonus: 600,
          outcome: "A'lo! Shebang operatsion tizimga aynan qaysi tarjimon kerakligini aytadi! +$600!"
        },
        {
          text: "Faylni shunchaki .txt qilib saqlash.",
          correct: false,
          bonus: 0,
          outcome: "Bu skript bajarilishini ta'minlamaydi."
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 45,
      speaker: "Bob",
      role: "Junior Process Operator",
      avatar: "👨‍💻",
      title: "⚡ Protsess Terminalni Blokladi",
      narrative: "Bob hayajonlandi: 'Uzoq ishlaydigan dastur terminalni egallab oldi, hech narsa yozib bo'lmayapti! Uni to'xtatmasdan qanday fonga o'tkazamiz?'",
      choices: [
        {
          text: "Ctrl+Z orqali pauza qilib, bg %1 buyrug'i bilan fonga o'tkazamiz!",
          correct: true,
          bonus: 800,
          outcome: "Bob yengil nafas oldi: 'Terminal bo'shadi, dastur esa fonda davom etmoqda!' +$800!"
        },
        {
          text: "Kompyuterni elektrdan uzib qo'yish.",
          correct: false,
          bonus: 0,
          outcome: "Barcha ma'lumotlar yo'qolishi mumkin!"
        }
      ]
    },
    {
      id: "ev3",
      triggerAfterQuestion: 75,
      speaker: "Alice",
      role: "DevOps Lead",
      avatar: "👩‍💻",
      title: "🛡️ Nima Uchun set -euo pipefail Zarur?",
      narrative: "Alice jamoaga savol berdi: 'Nima uchun ishlab chiqarishdagi har bir Bash skripti set -euo pipefail bilan boshlanishi kerak?'",
      choices: [
        {
          text: "set -e xatolikda to'xtatadi, set -u e'lon qilinmagan o'zgaruvchini tutadi, pipefail esa quvur ichidagi xatoni yashirmaydi!",
          correct: true,
          bonus: 1000,
          outcome: "Alice tasdiqladi: 'Aynan shunday! Bu skriptlarni yashirin halokatlardan asraydi!' +$1000!"
        },
        {
          text: "Bu shunchaki matn rangini o'zgartirish uchun.",
          correct: false,
          bonus: 0,
          outcome: "Bu mutlaqo noto'g'ri."
        }
      ]
    },
    {
      id: "ev4",
      triggerAfterQuestion: 115,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "🔍 Fayl Sinovlari Xavfsizligi (-s vs -e)",
      narrative: "Professor Turing so'radi: 'Skriptda fayl mavjudligi (-e) va uning bo'sh emasligi (-s) o'rtasidagi farq qachon muhim bo'ladi?'",
      choices: [
        {
          text: "0 baytli bo'sh fayl -e da true beradi, lekin unda ma'lumot yo'q! Ma'lumot borligini tekshirish uchun -s zarur!",
          correct: true,
          bonus: 1500,
          outcome: "Turing ma'qulladi: 'Audit va ma'lumotlar yaxlitligi uchun nozik farq!' +$1500!"
        },
        {
          text: "Ikkalasi ham har doim bir xil ishlaydi.",
          correct: false,
          bonus: 0,
          outcome: "Bo'sh fayllarni o'qishda skript xatoga uchrashi mumkin."
        }
      ]
    },
    {
      id: "ev5",
      triggerAfterQuestion: 140,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "🎓 Linux Kernel Protsesslar Arxitektori Diplomi",
      narrative: "Professor Turing tabrikladi: 'Siz Linuxda protsesslar hayotiy sikli, signallar va murakkab Bash skriptlarni to'liq o'zlashtirdingiz!'",
      choices: [
        {
          text: "Har bir dastur — protsess, har bir skript esa qat'iy tekshiruv va toza arxitekturaga ega bo'lishi shart!",
          correct: true,
          bonus: 2500,
          outcome: "Laboratoriya olqishladi! Siz 3-darajali Tizim Muhandisi bo'ldingiz! +$2500!"
        },
        {
          text: "Faqat xatolar bo'lsa kill -9 ishlatish kerak.",
          correct: false,
          bonus: 0,
          outcome: "kill -9 faqat oxirgi chora sifatida qo'llaniladi."
        }
      ]
    }
  ];

  window.VIRTUAL_LINUX_W3 = {
    VirtualLinuxShell,
    BASH_GRADER,
    careerRanks,
    sectors,
    officeEvents
  };
})();
