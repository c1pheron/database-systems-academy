// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 1 VIRTUAL LINUX FILE SYSTEM & ENGINE
// Comprehensive in-memory Linux File System with Inodes, Permissions, Timestamps,
// Full Bash Command Evaluator (pwd, ls, cd, mkdir, touch, cat, head, tail, wc, cp, mv, rm, ln, find, stat),
// Career Ranks, 10 Sectors, and Server Incident Events.
// ============================================================================

(function () {
  let nextInode = 10001;

  function createInitialFS() {
    nextInode = 10001;

    const root = {
      name: "",
      type: "dir",
      inode: 2,
      permissions: "drwxr-xr-x",
      owner: "root",
      group: "root",
      links: 14,
      mtime: "2025-01-08 09:00:00",
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
        mtime: "2025-01-08 09:00:00",
        children: {}
      };
      parent.children[name] = d;
      return d;
    }

    function addFile(parent, name, content = "", perms = "-rw-r--r--", owner = "root", group = "root", mtime = "2025-01-08 09:00:00") {
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

    // Top-level Linux Hierarchy
    addDir(root, "bin");
    addDir(root, "boot");
    addDir(root, "dev");
    const etc = addDir(root, "etc");
    const home = addDir(root, "home");
    addDir(root, "lib");
    addDir(root, "proc");
    addDir(root, "root", "drwx------", "root", "root");
    addDir(root, "tmp", "drwxrwxrwt", "root", "root");
    addDir(root, "usr");
    const varDir = addDir(root, "var");
    const varLog = addDir(varDir, "log");

    // /etc files
    addFile(etc, "hostname", "debian-server\n");
    addFile(etc, "os-release", "PRETTY_NAME=\"Debian GNU/Linux 12 (bookworm)\"\nNAME=\"Debian GNU/Linux\"\nVERSION_ID=\"12\"\nVERSION=\"12 (bookworm)\"\nID=debian\n");
    addFile(etc, "passwd", "root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nstudent:x:1000:1000:Student User,,,:/home/student:/bin/bash\n");
    const skel = addDir(etc, "skel");
    addFile(skel, ".bashrc", "# ~/.bashrc: executed by bash for non-login shells.\nexport PS1='\\u@\\h:\\w\\$ '\nalias ll='ls -la'\n");
    addFile(skel, ".profile", "# ~/.profile: executed by the command interpreter for login shells.\nPATH=\"$HOME/bin:$PATH\"\n");
    addFile(skel, ".bash_logout", "# ~/.bash_logout: executed by bash when login shell exits.\n");

    // /home/student
    const student = addDir(home, "student", "drwxr-xr-x", "student", "student");
    addFile(student, ".bashrc", "# ~/.bashrc\nexport PS1='\\u@\\h:\\w\\$ '\nalias ll='ls -la'\n", "-rw-r--r--", "student", "student");
    addFile(student, ".profile", "# ~/.profile\n", "-rw-r--r--", "student", "student");
    addFile(student, "readme.txt", "Xush kelibsiz! Debian 12 Linux Serveriga muvaffaqiyatli ulandingiz.\nUshbu tizim WIUT OS moduli bo'yicha server mashg'ulotlari uchun sozlangan.\n", "-rw-r--r--", "student", "student");

    // /var/log realistic logs
    const syslogText = [
      "Jan 08 06:25:01 debian-server CRON[1042]: (root) CMD (test -x /usr/sbin/anacron || { cd / && run-parts --report /etc/cron.daily; })",
      "Jan 08 07:14:22 debian-server systemd[1]: Started Daily apt upgrade and clean activities.",
      "Jan 08 08:01:05 debian-server kernel: [    0.000000] Linux version 6.1.0-18-amd64 (debian-kernel@lists.debian.org)",
      "Jan 08 08:01:10 debian-server systemd[1]: Reached target Network is online.",
      "Jan 08 08:30:15 debian-server sshd[2104]: Server listening on 0.0.0.0 port 22.",
      "Jan 08 09:12:44 debian-server sshd[3312]: Accepted password for student from 192.168.1.105 port 52314 ssh2",
      "Jan 08 09:15:02 debian-server systemd[1]: Starting Daily Cleanup of Temporary Directories...",
      "Jan 08 09:20:11 debian-server kernel: [ 4812.102341] EXT4-fs (sda1): re-mounted. Opts: errors=remount-ro.",
      "Jan 08 10:02:45 debian-server CRON[4102]: (student) CMD (/home/student/scripts/backup.sh)",
      "Jan 08 10:14:30 debian-server systemd[1]: Finished Daily apt download activities."
    ].join("\n") + "\n";
    addFile(varLog, "syslog", syslogText, "-rw-r-----", "root", "adm", "2025-01-08 10:15:00");

    const authText = [
      "Jan 08 08:30:15 debian-server sshd[2104]: Server listening on 0.0.0.0 port 22.",
      "Jan 08 09:12:40 debian-server sshd[3312]: pam_unix(sshd:auth): authentication failure; logname= uid=0 euid=0 tty=ssh ruser= rhost=192.168.1.105  user=guest",
      "Jan 08 09:12:44 debian-server sshd[3312]: Accepted password for student from 192.168.1.105 port 52314 ssh2",
      "Jan 08 09:12:44 debian-server sshd[3312]: pam_unix(sshd:session): session opened for user student(uid=1000) by (uid=0)",
      "Jan 08 09:18:20 debian-server sudo:   student : TTY=pts/0 ; PWD=/home/student ; USER=root ; COMMAND=/bin/cat /var/log/syslog",
      "Jan 08 09:18:20 debian-server sudo: pam_unix(sudo:session): session opened for user root(uid=0) by student(uid=1000)",
      "Jan 08 09:18:25 debian-server sudo: pam_unix(sudo:session): session closed for user root(uid=0)"
    ].join("\n") + "\n";
    addFile(varLog, "auth.log", authText, "-rw-r-----", "root", "adm", "2025-01-08 09:18:25");

    addFile(varLog, "dpkg.log", "2025-01-08 08:00:00 status installed libc6:amd64 2.36-9+deb12u3\n2025-01-08 08:00:05 status installed bash:amd64 5.2.15-2+b2\n", "-rw-r--r--", "root", "root");

    return root;
  }

  // ============================================================================
  // VIRTUAL LINUX SHELL ENGINE
  // ============================================================================

  class VirtualLinuxShell {
    constructor() {
      this.root = createInitialFS();
      this.cwd = "/home/student";
      this.previousDir = "/home/student";
      this.user = "student";
      this.hostname = "debian-server";
      this.outputBuffer = [];
    }

    clone() {
      const copy = new VirtualLinuxShell();
      copy.root = JSON.parse(JSON.stringify(this.root));
      copy.cwd = this.cwd;
      copy.previousDir = this.previousDir;
      copy.user = this.user;
      copy.hostname = this.hostname;
      return copy;
    }

    reset() {
      this.root = createInitialFS();
      this.cwd = "/home/student";
      this.previousDir = "/home/student";
      this.outputBuffer = [];
    }

    resolvePath(p) {
      if (!p || p === ".") return this.cwd;
      if (p === "~") return "/home/" + this.user;
      if (p.startsWith("~/")) return "/home/" + this.user + "/" + p.slice(2);
      if (p === "-") return this.previousDir;

      let parts;
      if (p.startsWith("/")) {
        parts = p.split("/").filter(Boolean);
      } else {
        const curParts = this.cwd === "/" ? [] : this.cwd.split("/").filter(Boolean);
        parts = [...curParts, ...p.split("/").filter(Boolean)];
      }

      const stack = [];
      for (const seg of parts) {
        if (seg === ".") continue;
        if (seg === "..") {
          if (stack.length > 0) stack.pop();
        } else {
          stack.push(seg);
        }
      }

      return "/" + stack.join("/");
    }

    getNode(absPath) {
      if (absPath === "/") return this.root;
      const parts = absPath.split("/").filter(Boolean);
      let cur = this.root;

      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (!cur.children || !cur.children[part]) {
          return null;
        }
        cur = cur.children[part];

        // Follow symlinks if not last part or resolving directory
        if (cur.type === "symlink" && i < parts.length - 1) {
          cur = this.getNode(this.resolvePath(cur.target));
          if (!cur) return null;
        }
      }
      return cur;
    }

    updateInodeLinks(inode, delta) {
      function traverse(dir) {
        if (!dir || !dir.children) return;
        for (const child of Object.values(dir.children)) {
          if (child.inode === inode) {
            child.links = Math.max(1, (child.links || 1) + delta);
          }
          if (child.type === "dir") traverse(child);
        }
      }
      traverse(this.root);
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

      // Handle command chaining: ; or &&
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

      // Handle Redirection: > or >>
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
      if (!parent || parent.type !== "dir") {
        return { stdout: "", stderr: `bash: ${targetPath}: No such file or directory`, code: 1 };
      }

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
      file.size = file.content.length;
      file.mtime = new Date().toISOString().replace("T", " ").substring(0, 19);
    }

    runSinglePiped(cmdStr, pipeStdin) {
      const tokens = this.tokenize(cmdStr);
      if (tokens.length === 0) return { stdout: "", stderr: "", code: 0 };

      const prog = tokens[0];
      const args = tokens.slice(1);

      switch (prog) {
        case "pwd":
          return { stdout: this.cwd, stderr: "", code: 0 };

        case "whoami":
          return { stdout: this.user, stderr: "", code: 0 };

        case "hostname":
          return { stdout: this.hostname, stderr: "", code: 0 };

        case "clear":
          return { stdout: "__CLEAR__", stderr: "", code: 0 };

        case "echo":
          return { stdout: args.join(" "), stderr: "", code: 0 };

        case "cd":
          return this.cmdCd(args);

        case "ls":
          return this.cmdLs(args);

        case "mkdir":
          return this.cmdMkdir(args);

        case "rmdir":
          return this.cmdRmdir(args);

        case "touch":
          return this.cmdTouch(args);

        case "cat":
          return this.cmdCat(args, pipeStdin);

        case "head":
          return this.cmdHead(args, pipeStdin);

        case "tail":
          return this.cmdTail(args, pipeStdin);

        case "wc":
          return this.cmdWc(args, pipeStdin);

        case "cp":
          return this.cmdCp(args);

        case "mv":
          return this.cmdMv(args);

        case "rm":
          return this.cmdRm(args);

        case "ln":
          return this.cmdLn(args);

        case "find":
          return this.cmdFind(args);

        case "stat":
          return this.cmdStat(args);

        case "tree":
          return this.cmdTree(args);

        case "man":
          return this.cmdMan(args);

        case "uname": {
          if (args.includes("-a")) {
            return { stdout: "Linux debian-server 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.76-1 (2024-02-01) x86_64 GNU/Linux", stderr: "", code: 0 };
          }
          if (args.includes("-r")) {
            return { stdout: "6.1.0-18-amd64", stderr: "", code: 0 };
          }
          return { stdout: "Linux", stderr: "", code: 0 };
        }

        case "id": {
          return { stdout: "uid=1000(student) gid=1000(student) groups=1000(student),24(cdrom),25(floppy),27(sudo),29(audio),30(dip),44(video),46(plugdev),100(users),106(netdev)", stderr: "", code: 0 };
        }

        case "uptime": {
          return { stdout: " 02:15:30 up 14 days,  3:30,  1 user,  load average: 0.08, 0.04, 0.01", stderr: "", code: 0 };
        }

        case "free": {
          const memStr = [
            "               total        used        free      shared  buff/cache   available",
            "Mem:            3920         684        2406          12         830        3012",
            "Swap:           2048           0        2048"
          ].join("\n");
          return { stdout: memStr, stderr: "", code: 0 };
        }

        case "df": {
          const dfStr = [
            "Filesystem     1K-blocks    Used Available Use% Mounted on",
            "udev             1982544       0   1982544   0% /dev",
            "tmpfs             401568    1120    400448   1% /run",
            "/dev/sda1       40816048 4218304  34488360  11% /",
            "tmpfs            2007832       0   2007832   0% /dev/shm",
            "tmpfs               5120       4      5116   1% /run/lock",
            "/dev/sda2         523248    6144    517104   2% /boot/efi"
          ].join("\n");
          return { stdout: dfStr, stderr: "", code: 0 };
        }

        case "ps": {
          const psStr = [
            "  PID TTY          TIME CMD",
            " 1042 pts/0    00:00:00 bash",
            " 1120 pts/0    00:00:00 ps"
          ].join("\n");
          return { stdout: psStr, stderr: "", code: 0 };
        }

        case "date": {
          return { stdout: new Date().toUTCString(), stderr: "", code: 0 };
        }

        case "file": {
          if (args.length === 0) return { stdout: "", stderr: "file: missing argument", code: 1 };
          const p = this.resolvePath(args[0]);
          const node = this.getNode(p);
          if (!node) return { stdout: "", stderr: `file: ${args[0]}: No such file or directory`, code: 1 };
          if (node.type === "dir") return { stdout: `${args[0]}: directory`, stderr: "", code: 0 };
          if (node.type === "symlink") return { stdout: `${args[0]}: symbolic link to ${node.target}`, stderr: "", code: 0 };
          return { stdout: `${args[0]}: ASCII text`, stderr: "", code: 0 };
        }

        case "grep": {
          let pattern = "";
          let targetText = pipeStdin || "";
          if (args.length > 0) {
            pattern = args[0].replace(/^['"]|['"]$/g, "");
          }
          if (args.length > 1 && !pipeStdin) {
            const p = this.resolvePath(args[1]);
            const node = this.getNode(p);
            if (!node || node.type !== "file") {
              return { stdout: "", stderr: `grep: ${args[1]}: No such file or directory`, code: 2 };
            }
            targetText = node.content || "";
          }
          if (!pattern) return { stdout: targetText, stderr: "", code: 0 };
          const lines = targetText.split("\n");
          const matched = lines.filter(l => l.includes(pattern));
          return { stdout: matched.join("\n"), stderr: "", code: matched.length > 0 ? 0 : 1 };
        }

        default:
          return { stdout: "", stderr: `bash: ${prog}: command not found`, code: 127 };
      }
    }

    tokenize(str) {
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
        } else if (c === '"' || c === "'") {
          inQuote = c;
        } else if (/\s/.test(c)) {
          if (cur) {
            tokens.push(cur);
            cur = "";
          }
        } else {
          cur += c;
        }
      }
      if (cur) tokens.push(cur);
      return tokens;
    }

    cmdCd(args) {
      const target = args.length === 0 ? "~" : args[0];
      const newPath = this.resolvePath(target);
      const node = this.getNode(newPath);

      if (!node) {
        return { stdout: "", stderr: `bash: cd: ${target}: No such file or directory`, code: 1 };
      }
      if (node.type !== "dir") {
        return { stdout: "", stderr: `bash: cd: ${target}: Not a directory`, code: 1 };
      }

      this.previousDir = this.cwd;
      this.cwd = newPath;
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdLs(args) {
      let showAll = false;
      let longFormat = false;
      let humanReadable = false;
      let sortByTime = false;
      let reverseSort = false;
      let sortBySize = false;
      const paths = [];

      for (const a of args) {
        if (a.startsWith("-") && a.length > 1) {
          for (let i = 1; i < a.length; i++) {
            const flag = a[i];
            if (flag === "a") showAll = true;
            else if (flag === "l") longFormat = true;
            else if (flag === "h") humanReadable = true;
            else if (flag === "t") sortByTime = true;
            else if (flag === "r") reverseSort = true;
            else if (flag === "S") sortBySize = true;
          }
        } else {
          paths.push(a);
        }
      }

      const targetPath = paths.length > 0 ? paths[0] : ".";
      const absPath = this.resolvePath(targetPath);
      const node = this.getNode(absPath);

      if (!node) {
        return { stdout: "", stderr: `ls: cannot access '${targetPath}': No such file or directory`, code: 2 };
      }

      if (node.type === "file" || node.type === "symlink") {
        if (longFormat) {
          return { stdout: this.formatLongEntry(node, humanReadable), stderr: "", code: 0 };
        }
        return { stdout: node.name, stderr: "", code: 0 };
      }

      // Directory listing
      let entries = Object.values(node.children || {});

      if (!showAll) {
        entries = entries.filter(e => !e.name.startsWith("."));
      } else {
        // Add . and ..
        const dot = { ...node, name: "." };
        const dotdot = { ...node, name: ".." };
        entries = [dot, dotdot, ...entries];
      }

      // Sorting
      if (sortBySize) {
        entries.sort((a, b) => (b.size || 0) - (a.size || 0));
      } else if (sortByTime) {
        entries.sort((a, b) => new Date(b.mtime) - new Date(a.mtime));
      } else {
        entries.sort((a, b) => a.name.localeCompare(b.name));
      }

      if (reverseSort) {
        entries.reverse();
      }

      if (longFormat) {
        const lines = [`total ${entries.length * 4}`];
        for (const e of entries) {
          lines.push(this.formatLongEntry(e, humanReadable));
        }
        return { stdout: lines.join("\n"), stderr: "", code: 0 };
      }

      return { stdout: entries.map(e => e.name).join("  "), stderr: "", code: 0 };
    }

    formatLongEntry(e, humanReadable) {
      const perms = e.permissions || "-rw-r--r--";
      const links = e.links || 1;
      const owner = e.owner || "student";
      const group = e.group || "student";
      let sizeStr = String(e.size !== undefined ? e.size : 4096);
      if (humanReadable && e.size > 1024) {
        sizeStr = (e.size / 1024).toFixed(1) + "K";
      }
      const dateStr = (e.mtime || "2025-01-08").substring(0, 10);
      let nameStr = e.name;
      if (e.type === "symlink") {
        nameStr += " -> " + e.target;
      }
      return `${perms.padEnd(10)} ${String(links).padStart(2)} ${owner.padEnd(7)} ${group.padEnd(7)} ${sizeStr.padStart(6)} ${dateStr} ${nameStr}`;
    }

    cmdMkdir(args) {
      let makeParents = false;
      const dirs = [];

      for (const a of args) {
        if (a === "-p" || a === "--parents") makeParents = true;
        else if (a.startsWith("-")) continue;
        else dirs.push(a);
      }

      if (dirs.length === 0) {
        return { stdout: "", stderr: "mkdir: missing operand", code: 1 };
      }

      for (const dirName of dirs) {
        const absPath = this.resolvePath(dirName);
        if (makeParents) {
          const parts = absPath.split("/").filter(Boolean);
          let cur = this.root;
          for (const seg of parts) {
            if (!cur.children[seg]) {
              cur.children[seg] = {
                name: seg,
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
            cur = cur.children[seg];
          }
        } else {
          const { parent, name } = this.getParentAndName(absPath);
          if (!parent || parent.type !== "dir") {
            return { stdout: "", stderr: `mkdir: cannot create directory '${dirName}': No such file or directory`, code: 1 };
          }
          if (parent.children[name]) {
            return { stdout: "", stderr: `mkdir: cannot create directory '${dirName}': File exists`, code: 1 };
          }
          parent.children[name] = {
            name,
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
      }

      return { stdout: "", stderr: "", code: 0 };
    }

    cmdRmdir(args) {
      if (args.length === 0) return { stdout: "", stderr: "rmdir: missing operand", code: 1 };
      for (const d of args) {
        const absPath = this.resolvePath(d);
        const node = this.getNode(absPath);
        if (!node) return { stdout: "", stderr: `rmdir: failed to remove '${d}': No such file or directory`, code: 1 };
        if (node.type !== "dir") return { stdout: "", stderr: `rmdir: failed to remove '${d}': Not a directory`, code: 1 };
        if (Object.keys(node.children || {}).length > 0) {
          return { stdout: "", stderr: `rmdir: failed to remove '${d}': Directory not empty`, code: 1 };
        }
        const { parent, name } = this.getParentAndName(absPath);
        delete parent.children[name];
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdTouch(args) {
      let customDate = null;
      const files = [];

      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a === "-d" && i + 1 < args.length) {
          customDate = args[i + 1];
          i++;
        } else if (a.startsWith("-")) {
          continue;
        } else {
          files.push(a);
        }
      }

      if (files.length === 0) return { stdout: "", stderr: "touch: missing file operand", code: 1 };

      const timeStr = customDate
        ? (customDate.includes(" ") ? customDate : customDate + " 12:00:00")
        : new Date().toISOString().replace("T", " ").substring(0, 19);

      for (const f of files) {
        const absPath = this.resolvePath(f);
        const node = this.getNode(absPath);
        if (node) {
          node.mtime = timeStr;
        } else {
          const { parent, name } = this.getParentAndName(absPath);
          if (!parent || parent.type !== "dir") {
            return { stdout: "", stderr: `touch: cannot touch '${f}': No such file or directory`, code: 1 };
          }
          parent.children[name] = {
            name,
            type: "file",
            inode: nextInode++,
            permissions: "-rw-r--r--",
            owner: this.user,
            group: this.user,
            links: 1,
            mtime: timeStr,
            content: "",
            size: 0
          };
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdCat(args, stdin) {
      if (args.length === 0) {
        return { stdout: stdin || "", stderr: "", code: 0 };
      }
      const outputs = [];
      for (const a of args) {
        const absPath = this.resolvePath(a);
        const node = this.getNode(absPath);
        if (!node) return { stdout: "", stderr: `cat: ${a}: No such file or directory`, code: 1 };
        if (node.type === "dir") return { stdout: "", stderr: `cat: ${a}: Is a directory`, code: 1 };
        outputs.push(node.content || "");
      }
      return { stdout: outputs.join(""), stderr: "", code: 0 };
    }

    cmdHead(args, stdin) {
      let count = 10;
      let filename = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n" && i + 1 < args.length) {
          count = parseInt(args[i + 1], 10);
          i++;
        } else if (args[i].startsWith("-n")) {
          count = parseInt(args[i].slice(2), 10);
        } else if (!args[i].startsWith("-")) {
          filename = args[i];
        }
      }

      let text = stdin;
      if (filename) {
        const absPath = this.resolvePath(filename);
        const node = this.getNode(absPath);
        if (!node) return { stdout: "", stderr: `head: cannot open '${filename}': No such file or directory`, code: 1 };
        text = node.content || "";
      }
      const lines = (text || "").split("\n");
      return { stdout: lines.slice(0, count).join("\n"), stderr: "", code: 0 };
    }

    cmdTail(args, stdin) {
      let count = 10;
      let filename = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n" && i + 1 < args.length) {
          count = parseInt(args[i + 1], 10);
          i++;
        } else if (args[i].startsWith("-n")) {
          count = parseInt(args[i].slice(2), 10);
        } else if (args[i] === "-f" || args[i] === "-F") {
          // follow simulated
        } else if (!args[i].startsWith("-")) {
          filename = args[i];
        }
      }

      let text = stdin;
      if (filename) {
        const absPath = this.resolvePath(filename);
        const node = this.getNode(absPath);
        if (!node) return { stdout: "", stderr: `tail: cannot open '${filename}': No such file or directory`, code: 1 };
        text = node.content || "";
      }
      const lines = (text || "").trimEnd().split("\n");
      const sliceStart = Math.max(0, lines.length - count);
      return { stdout: lines.slice(sliceStart).join("\n"), stderr: "", code: 0 };
    }

    cmdWc(args, stdin) {
      let countLines = false;
      let countWords = false;
      let countBytes = false;
      let filename = null;

      for (const a of args) {
        if (a === "-l") countLines = true;
        else if (a === "-w") countWords = true;
        else if (a === "-c") countBytes = true;
        else if (!a.startsWith("-")) filename = a;
      }

      if (!countLines && !countWords && !countBytes) {
        countLines = countWords = countBytes = true;
      }

      let text = stdin;
      if (filename) {
        const absPath = this.resolvePath(filename);
        const node = this.getNode(absPath);
        if (!node) return { stdout: "", stderr: `wc: ${filename}: No such file or directory`, code: 1 };
        text = node.content || "";
      }

      const raw = text || "";
      const lines = raw.split("\n").length - 1;
      const words = raw.trim() ? raw.trim().split(/\s+/).length : 0;
      const bytes = raw.length;

      const resParts = [];
      if (countLines) resParts.push(lines);
      if (countWords) resParts.push(words);
      if (countBytes) resParts.push(bytes);
      if (filename) resParts.push(filename);

      return { stdout: resParts.join(" "), stderr: "", code: 0 };
    }

    cmdCp(args) {
      let recursive = false;
      const targets = [];
      for (const a of args) {
        if (a === "-r" || a === "-R" || a === "--recursive") recursive = true;
        else if (a === "-i") continue;
        else if (!a.startsWith("-")) targets.push(a);
      }

      if (targets.length < 2) return { stdout: "", stderr: "cp: missing destination file operand", code: 1 };

      const dest = targets.pop();
      const destAbs = this.resolvePath(dest);
      const destNode = this.getNode(destAbs);

      for (const src of targets) {
        const srcAbs = this.resolvePath(src);
        const srcNode = this.getNode(srcAbs);
        if (!srcNode) return { stdout: "", stderr: `cp: cannot stat '${src}': No such file or directory`, code: 1 };

        if (srcNode.type === "dir" && !recursive) {
          return { stdout: "", stderr: `cp: -r not specified; omitting directory '${src}'`, code: 1 };
        }

        if (destNode && destNode.type === "dir") {
          destNode.children[srcNode.name] = JSON.parse(JSON.stringify(srcNode));
          destNode.children[srcNode.name].inode = nextInode++;
        } else {
          const { parent, name } = this.getParentAndName(destAbs);
          if (!parent) return { stdout: "", stderr: `cp: cannot create regular file '${dest}': No such file or directory`, code: 1 };
          parent.children[name] = JSON.parse(JSON.stringify(srcNode));
          parent.children[name].name = name;
          parent.children[name].inode = nextInode++;
        }
      }

      return { stdout: "", stderr: "", code: 0 };
    }

    cmdMv(args) {
      const targets = args.filter(a => !a.startsWith("-"));
      if (targets.length < 2) return { stdout: "", stderr: "mv: missing destination file operand", code: 1 };

      const dest = targets.pop();
      const destAbs = this.resolvePath(dest);
      const destNode = this.getNode(destAbs);

      for (const src of targets) {
        const srcAbs = this.resolvePath(src);
        const srcNode = this.getNode(srcAbs);
        if (!srcNode) return { stdout: "", stderr: `mv: cannot stat '${src}': No such file or directory`, code: 1 };

        const { parent: srcParent, name: srcName } = this.getParentAndName(srcAbs);

        if (destNode && destNode.type === "dir") {
          destNode.children[srcNode.name] = srcNode;
          delete srcParent.children[srcName];
        } else {
          const { parent: dstParent, name: dstName } = this.getParentAndName(destAbs);
          if (!dstParent) return { stdout: "", stderr: `mv: cannot move '${src}' to '${dest}': No such file or directory`, code: 1 };
          srcNode.name = dstName;
          dstParent.children[dstName] = srcNode;
          delete srcParent.children[srcName];
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdRm(args) {
      let recursive = false;
      const targets = [];
      for (const a of args) {
        if (a === "-r" || a === "-R" || a === "-rf") recursive = true;
        else if (a === "-i" || a === "-f") continue;
        else if (!a.startsWith("-")) targets.push(a);
      }

      if (targets.length === 0) return { stdout: "", stderr: "rm: missing operand", code: 1 };

      for (const t of targets) {
        const absPath = this.resolvePath(t);
        const node = this.getNode(absPath);
        if (!node) return { stdout: "", stderr: `rm: cannot remove '${t}': No such file or directory`, code: 1 };

        if (node.type === "dir" && !recursive) {
          return { stdout: "", stderr: `rm: cannot remove '${t}': Is a directory`, code: 1 };
        }

        const { parent, name } = this.getParentAndName(absPath);
        if (parent && parent.children[name]) {
          if (node.type === "file" && node.inode) {
            this.updateInodeLinks(node.inode, -1);
          }
          delete parent.children[name];
        }
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdLn(args) {
      let isSymlink = false;
      const targets = [];
      for (const a of args) {
        if (a === "-s" || a === "--symbolic") isSymlink = true;
        else if (!a.startsWith("-")) targets.push(a);
      }

      if (targets.length < 2) return { stdout: "", stderr: "ln: missing destination file operand", code: 1 };

      const src = targets[0];
      const linkName = targets[1];
      const srcAbs = this.resolvePath(src);
      const linkAbs = this.resolvePath(linkName);

      const srcNode = this.getNode(srcAbs);
      if (!isSymlink && !srcNode) {
        return { stdout: "", stderr: `ln: failed to access '${src}': No such file or directory`, code: 1 };
      }

      const { parent: linkParent, name: newName } = this.getParentAndName(linkAbs);
      if (!linkParent) return { stdout: "", stderr: `ln: cannot create link '${linkName}': No such file or directory`, code: 1 };

      if (isSymlink) {
        linkParent.children[newName] = {
          name: newName,
          type: "symlink",
          target: src,
          inode: nextInode++,
          permissions: "lrwxrwxrwx",
          owner: this.user,
          group: this.user,
          links: 1,
          mtime: new Date().toISOString().replace("T", " ").substring(0, 19),
          size: src.length
        };
      } else {
        // Hard Link: shares same inode and content
        const newLinks = (srcNode.links || 1) + 1;
        this.updateInodeLinks(srcNode.inode, 1);
        linkParent.children[newName] = {
          ...srcNode,
          name: newName,
          links: newLinks
        };
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdFind(args) {
      let startPath = ".";
      let namePattern = null;
      let typeFilter = null;
      let mtimeDays = null;
      let doDelete = false;
      let doList = false;

      let idx = 0;
      if (args.length > 0 && !args[0].startsWith("-")) {
        startPath = args[0];
        idx = 1;
      }

      while (idx < args.length) {
        const flag = args[idx];
        if ((flag === "-name" || flag === "-iname") && idx + 1 < args.length) {
          namePattern = args[idx + 1].replace(/["']/g, "");
          idx += 2;
        } else if (flag === "-type" && idx + 1 < args.length) {
          typeFilter = args[idx + 1];
          idx += 2;
        } else if (flag === "-mtime" && idx + 1 < args.length) {
          mtimeDays = args[idx + 1];
          idx += 2;
        } else if (flag === "-delete") {
          doDelete = true;
          idx++;
        } else if (flag === "-ls") {
          doList = true;
          idx++;
        } else if (flag === "-exec") {
          // Skip until \; or +
          while (idx < args.length && args[idx] !== "\\;" && args[idx] !== ";") idx++;
          idx++;
        } else {
          idx++;
        }
      }

      const absStart = this.resolvePath(startPath);
      const rootNode = this.getNode(absStart);
      if (!rootNode) return { stdout: "", stderr: `find: '${startPath}': No such file or directory`, code: 1 };

      const matched = [];
      const now = new Date("2025-01-15 12:00:00"); // Baseline date

      const traverse = (node, curRelPath) => {
        let isMatch = true;

        if (namePattern) {
          const regex = new RegExp("^" + namePattern.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$", "i");
          if (!regex.test(node.name)) isMatch = false;
        }

        if (typeFilter) {
          if (typeFilter === "f" && node.type !== "file") isMatch = false;
          if (typeFilter === "d" && node.type !== "dir") isMatch = false;
        }

        if (mtimeDays) {
          const fileDate = new Date(node.mtime);
          const diffDays = Math.floor((now - fileDate) / (1000 * 60 * 60 * 24));
          if (mtimeDays.startsWith("+")) {
            const minDays = parseInt(mtimeDays.slice(1), 10);
            if (diffDays <= minDays) isMatch = false;
          } else if (mtimeDays.startsWith("-")) {
            const maxDays = parseInt(mtimeDays.slice(1), 10);
            if (diffDays >= maxDays) isMatch = false;
          } else {
            const exactDays = parseInt(mtimeDays, 10);
            if (diffDays !== exactDays) isMatch = false;
          }
        }

        if (isMatch && curRelPath) {
          matched.push({ node, path: curRelPath });
        }

        if (node.type === "dir" && node.children) {
          for (const chName of Object.keys(node.children)) {
            const childNode = node.children[chName];
            traverse(childNode, curRelPath === "." ? "./" + chName : curRelPath + "/" + chName);
          }
        }
      };

      traverse(rootNode, startPath === "." ? "." : startPath);

      if (doDelete) {
        for (const m of matched) {
          const abs = this.resolvePath(m.path);
          const { parent, name } = this.getParentAndName(abs);
          if (parent && parent.children[name]) {
            delete parent.children[name];
          }
        }
        return { stdout: "", stderr: "", code: 0 };
      }

      if (doList) {
        return { stdout: matched.map(m => this.formatLongEntry(m.node, false) + " " + m.path).join("\n"), stderr: "", code: 0 };
      }

      return { stdout: matched.map(m => m.path).join("\n"), stderr: "", code: 0 };
    }

    cmdStat(args) {
      if (args.length === 0) return { stdout: "", stderr: "stat: missing operand", code: 1 };
      const absPath = this.resolvePath(args[0]);
      const node = this.getNode(absPath);
      if (!node) return { stdout: "", stderr: `stat: cannot statx '${args[0]}': No such file or directory`, code: 1 };

      const out = [
        `  File: ${args[0]}`,
        `  Size: ${node.size || 0}   Blocks: 8   IO Block: 4096   ${node.type === "dir" ? "directory" : "regular file"}`,
        `Device: 8,1   Inode: ${node.inode}   Links: ${node.links || 1}`,
        `Access: (${node.permissions})  Uid: ( 1000/ student)   Gid: ( 1000/ student)`,
        `Modify: ${node.mtime}`
      ].join("\n");
      return { stdout: out, stderr: "", code: 0 };
    }

    cmdTree(args) {
      const target = args.length > 0 ? args[0] : ".";
      const absPath = this.resolvePath(target);
      const rootNode = this.getNode(absPath);
      if (!rootNode) return { stdout: "", stderr: `${target} [error opening dir]`, code: 1 };

      const lines = [target];
      const printTree = (node, prefix) => {
        const keys = Object.keys(node.children || {}).filter(k => !k.startsWith("."));
        keys.forEach((k, idx) => {
          const isLast = idx === keys.length - 1;
          const branch = isLast ? "└── " : "├── ";
          lines.push(prefix + branch + k);
          const ch = node.children[k];
          if (ch.type === "dir") {
            printTree(ch, prefix + (isLast ? "    " : "│   "));
          }
        });
      };
      printTree(rootNode, "");
      return { stdout: lines.join("\n"), stderr: "", code: 0 };
    }

    cmdMan(args) {
      if (args.length === 0) return { stdout: "", stderr: "What manual page do you want?", code: 1 };
      const cmd = args[0];
      const manPages = {
        pwd: "PWD(1) — Print name of current/working directory.",
        ls: "LS(1) — List directory contents. Options: -l (long format), -a (all/hidden), -h (human readable), -t (sort by time), -S (sort by size).",
        cd: "CD(1) — Change the shell working directory.",
        mkdir: "MKDIR(1) — Create directory. Options: -p (no error if existing, make parent directories as needed).",
        cat: "CAT(1) — Concatenate files and print on the standard output.",
        head: "HEAD(1) — Output the first part of files (default first 10 lines, -n NUM).",
        tail: "TAIL(1) — Output the last part of files (default last 10 lines, -n NUM, -f follow).",
        wc: "WC(1) — Print newline, word, and byte counts for each file. Options: -l (lines), -w (words), -c (bytes).",
        cp: "CP(1) — Copy files and directories. Options: -r (recursive), -i (interactive).",
        mv: "MV(1) — Move (rename) files.",
        rm: "RM(1) — Remove files or directories. Options: -r (recursive), -i (interactive), -f (force).",
        ln: "LN(1) — Make links between files. Options: -s (make symbolic links instead of hard links).",
        find: "FIND(1) — Search for files in a directory hierarchy. Tests: -name, -type, -mtime, -size. Actions: -exec, -delete."
      };
      return { stdout: manPages[cmd] || `No manual entry for ${cmd}`, stderr: "", code: 0 };
    }
  }

  // ============================================================================
  // SMART BASH GRADER FOR WEEK 1 (150 QUESTIONS)
  // ============================================================================

  const BASH_GRADER = {
    normalize(cmd) {
      if (!cmd) return "";
      return cmd
        .replace(/#.*$/gm, "")
        .trim()
        .replace(/\s+/g, " ");
    },

    evaluate(userCmd, expectedCmd, question) {
      const uClean = this.normalize(userCmd);
      const expClean = this.normalize(expectedCmd);

      if (!uClean) {
        return { match: false, message: "Terminalga buyruq kiritilmadi! Buyruq yozib Enter tugmasini bosing." };
      }

      // Check exact match or known equivalents
      if (uClean === expClean) {
        return { match: true, message: "A'lo darajada! Buyruq to'liq to'g'ri kiritildi." };
      }

      // Check in solutions list
      if (question.solutions && question.solutions.some(s => this.normalize(s) === uClean)) {
        return { match: true, message: "A'lo darajada! Muqobil to'g'ri yechim qabul qilindi." };
      }

      // Live Execution comparison in cloned environments
      const shellExp = new VirtualLinuxShell();
      const expRes = shellExp.execute(expClean);

      const shellUser = new VirtualLinuxShell();
      const userRes = shellUser.execute(uClean);

      if (userRes.code !== 0 && expRes.code === 0) {
        return {
          match: false,
          message: `Buyruq xatolik bilan yakunlandi (Exit code ${userRes.code}): ${userRes.stderr || "Noma'lum xatolik"}`
        };
      }

      // If outputs match
      if (userRes.stdout.trim() && userRes.stdout.trim() === expRes.stdout.trim()) {
        return { match: true, message: "Barakalla! Buyruq natijasi kutilgan natija bilan 100% mos keldi." };
      }

      // If FS state transformation matches (for mkdir, touch, cp, mv, rm, ln)
      const expCwd = shellExp.cwd;
      const userCwd = shellUser.cwd;
      const expFsJson = JSON.stringify(shellExp.root);
      const userFsJson = JSON.stringify(shellUser.root);

      if (expFsJson === userFsJson && expCwd === userCwd) {
        return { match: true, message: "A'lo! Fayl tizimi holati kutilganidek aniq o'zgardi." };
      }

      return {
        match: false,
        message: `Kutilgan natija hosil bo'lmadi.\nSizning natijangiz: '${userRes.stdout || userRes.stderr || "bo'sh"}'\nKutilayotgan natija: '${expRes.stdout || "holat o'zgarishi"}'`
      };
    }
  };

  // ============================================================================
  // CAREER RANKS & 10 SECTORS FOR WEEK 1
  // ============================================================================

  const careerRanks = [
    { minSolved: 0,   title: "Junior Helpdesk Operator", salary: "$1,200/oy", badge: "🖥️" },
    { minSolved: 15,  title: "Server Stantsiya Operatori", salary: "$2,000/oy", badge: "📟" },
    { minSolved: 30,  title: "Junior Linux SysAdmin", salary: "$3,500/oy", badge: "🐧" },
    { minSolved: 45,  title: "Linux File Systems Admin", salary: "$5,500/oy", badge: "📁" },
    { minSolved: 60,  title: "Advanced Shell Operator", salary: "$8,000/oy", badge: "⚡" },
    { minSolved: 75,  title: "Syslog & Audit Specialist", salary: "$11,000/oy", badge: "🔍" },
    { minSolved: 90,  title: "DevOps Stream & Filter Lead", salary: "$15,000/oy", badge: "🌊" },
    { minSolved: 105, title: "Inode & Link Architecture Lead", salary: "$20,000/oy", badge: "🔗" },
    { minSolved: 120, title: "Linux Search & Cleanup Master", salary: "$26,000/oy", badge: "🧹" },
    { minSolved: 140, title: "Grand Linux Kernel Architect", salary: "$35,000/oy", badge: "👑" }
  ];

  const sectors = [
    { id: 1,  name: "1-QAVAT: TERMINALGA KIRISH VA PWD", subtitle: "pwd, whoami, hostname, cd navigatsiyasi (1–15)", range: [1, 15] },
    { id: 2,  name: "2-QAVAT: KATALOGLAR RO'YXATI (LS)", subtitle: "ls, ls -la, ls -lh, ls -t, ls -tr, ls -S (16–30)", range: [16, 30] },
    { id: 3,  name: "3-QAVAT: KATALOGLAR DARAХTI (MKDIR)", subtitle: "mkdir, mkdir -p, rmdir va papkalar tuzilmasi (31–45)", range: [31, 45] },
    { id: 4,  name: "4-QAVAT: FAYLLAR VA VAQT TAMG'ASI", subtitle: "touch, touch -d, stat va inodelar (46–60)", range: [46, 60] },
    { id: 5,  name: "5-QAVAT: MATN KO'RISH VA OQIMLAR", subtitle: "cat, cat >, cat >>, more, less va qidiruv (61–75)", range: [61, 75] },
    { id: 6,  name: "6-QAVAT: BOSHI VA OXIRI (HEAD & TAIL)", subtitle: "head -n, tail -n, tail -f jonli monitoring (76–90)", range: [76, 90] },
    { id: 7,  name: "7-QAVAT: MATN STATISTIKASI (WC)", subtitle: "wc -l qatorlar, wc -w so'zlar, wc -c baytlar (91–105)", range: [91, 105] },
    { id: 8,  name: "8-QAVAT: NUSXALASH VA O'CHIRISH", subtitle: "cp, cp -r, mv nom o'zgartirish, rm -i, rm -r (106–120)", range: [106, 120] },
    { id: 9,  name: "9-QAVAT: HAVOLALAR: HARD VS SOFT LINK", subtitle: "ln, ln -s, Inode almashish va singan havolalar (121–135)", range: [121, 135] },
    { id: 10, name: "10-QAVAT: ILG'OR QIDIRUV (FIND)", subtitle: "find -name, -type, -mtime, -exec, -delete (136–150)", range: [136, 150] }
  ];

  const officeEvents = [
    {
      id: "ev1",
      triggerAfterQuestion: 5,
      speaker: "SysAdmin Bobur",
      role: "Debian Server Muhandisi",
      avatar: "🐧",
      title: "📁 Nega 'ls' Yashirin Fayllarni Ko'rsatmaydi?",
      narrative: "Bobur terminal monitorini ko'rsatdi: 'Talaba uy papkasiga kirib `ls` deb yozdi, ammo `.bashrc` va `.profile` ko'rinmadi! Linux da yashirin fayllar qanday boshlanadi va ularni ko'rish uchun qaysi flag kerak?'",
      choices: [
        {
          text: "Linux da nuqta (`.`) bilan boshlanuvchi fayllar yashirin hisoblanadi! Ularni ko'rish uchun `ls -a` (all) bayrog'i ishlatiladi.",
          correct: true,
          bonus: 600,
          outcome: "Bobur tasdiqladi: 'Aynan shunday! Nuqta bilan boshlangan fayllar tizim konfiguratsiyalari uchun yashiriladi. +$600 bonus!'"
        },
        {
          text: "Chunki Linux da faqat root foydalanuvchi fayllarni ko'ra oladi.",
          correct: false,
          bonus: 0,
          outcome: "Bobur eslatdi: 'Oddiy foydalanuvchilar ham `ls -a` orqali o'z yashirin fayllarini ko'ra oladi!'"
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 25,
      speaker: "DevOps Malika",
      role: "Infratuzilma Muhandisi",
      avatar: "👩‍💻",
      title: "📂 mkdir -p: Nega '-p' Muhim?",
      narrative: "Malika serverga skript tashlayotib so'radi: 'Biz chuqur papka `s01/logs/2025` yaratmoqchimiz, lekin `s01` hali mavjud emas. Nega oddiy `mkdir` xato beradi va qanday bayroq ota papkalarni avtomatik yaratadi?'",
      choices: [
        {
          text: "Oddiy `mkdir` oraliq ota papkalar yo'q bo'lsa xato beradi. `-p` (parents) bayrog'i barcha yetishmayotgan ota papkalarni bitta buyruqda xatosiz yaratadi!",
          correct: true,
          bonus: 800,
          outcome: "Malika kulimsiradi: 'Ofarin! `mkdir -p` tizim administratorining ajralmas do'stidir! +$800!'"
        },
        {
          text: "Chunki `-p` papkaga parol qo'yadi.",
          correct: false,
          bonus: 0,
          outcome: "Malika tuzatdi: '`-p` — bu parents (ota kataloglar) degani!'"
        }
      ]
    },
    {
      id: "ev3",
      triggerAfterQuestion: 45,
      speaker: "Security Audit Jasur",
      role: "Xavfsizlik Bo'limi Boshlig'i",
      avatar: "🛡️",
      title: "🔗 Hard Link va Soft Link (Symlink) Farqi",
      narrative: "Jasur audit jurnalini ko'rsatdi: 'Hard link yaratganda (`ln file hlink`) va Soft link yaratganda (`ln -s file slink`) Inode raqamlari bilan nima sodir bo'ladi?'",
      choices: [
        {
          text: "Hard link original fayl bilan aynan bir xil Inode raqamini va xotira blokini bo'lishadi (faylning 2-ismi). Soft link esa yangi Inode ga ega bo'lib, original fayl manziliga yo'naltiruvchi ko'rsatkichdir!",
          correct: true,
          bonus: 1000,
          outcome: "Jasur olqishladi: 'Aqlbovar qilmas chuqur bilim! Bu Linux fayl tizimining eng muhim arxitekturaviy farqidir! +$1000!'"
        },
        {
          text: "Ikkalasi ham Windows yorlig'i (shortcut) kabi bir xil ishlaydi.",
          correct: false,
          bonus: 0,
          outcome: "Jasur eslatdi: 'Hard link Inode va xotirani bo'lishadi, Soft link esa alohida ko'rsatkichdir!'"
        }
      ]
    },
    {
      id: "ev4",
      triggerAfterQuestion: 70,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "💀 Original Fayl O'chirilganda Havolalar Taqdiri",
      narrative: "Professor Turing so'radi: 'Agar biz original `system.log` faylini `rm` bilan o'chirib tashlasak, uning Hard Link va Soft Link havolalari nima bo'ladi?'",
      choices: [
        {
          text: "Hard link bemalol ishlashda davom etadi (chunki xotira bloki va Inode unga ham tegishli)! Soft link esa sinadi ('broken/dangling link') va xatolik beradi!",
          correct: true,
          bonus: 1200,
          outcome: "Professor Turing mamnun: 'Ofarin! Hard linklar soni 0 ga tushmaguncha Linux fayl ma'lumotlarini diskdan o'chirmaydi! +$1200!'"
        },
        {
          text: "Ikkala havola ham darhol butunlay o'chib ketadi.",
          correct: false,
          bonus: 0,
          outcome: "Turing tushuntirdi: 'Hard link ma'lumotlarni saqlab qoladi!' "
        }
      ]
    },
    {
      id: "ev5",
      triggerAfterQuestion: 90,
      speaker: "Server Muhandisi Karim",
      role: "Bosh Tizim Arxitektori",
      avatar: "💾",
      title: "⚠️ cat > file va cat >> file Xavfi",
      narrative: "Karim server konsolida ko'rsatdi: 'Yangi yordamchi log yozayotib, `>` o'rniga `>>` yoki aksincha ishlatib qo'yishning qanday halokatli xavfi bor?'",
      choices: [
        {
          text: "`>` mavjud faylni butunlay tozalab (ustiga) qayta yozadi (truncates)! `>>` esa mavjud matn oxiriga qo'shib yozadi (appends). Loglarni tozalab yubormaslik uchun ehtiyot bo'lish lozim!",
          correct: true,
          bonus: 1100,
          outcome: "Karim tasdiqladi: 'To'ppa-to'g'ri! Birgina `>` belgisi butun log tarixini o'chirib yuborishi mumkin! +$1100!'"
        },
        {
          text: "`>` matnni shifrlaydi, `>>` esa shifrdan chiqaradi.",
          correct: false,
          bonus: 0,
          outcome: "Karim bosh chayqadi: 'Bu yo'naltirish (redirection) operatorlaridir!' "
        }
      ]
    },
    {
      id: "ev6",
      triggerAfterQuestion: 115,
      speaker: "DevOps Malika",
      role: "Infratuzilma Muhandisi",
      avatar: "👩‍💻",
      title: "⚡ find buyrug'ida -exec va -delete",
      narrative: "Malika 7 kundan eski loglarni o'chirish skriptini tekshirmoqda: 'Nega avval `find -name \"*.txt\"` qilib fayllarni ko'rib olib, keyin `-delete` qo'llash tavsiya etiladi?'",
      choices: [
        {
          text: "Chunki `-delete` tasdiqlashsiz (darhol) o'chiradi! Tasodifan kerakli fayllarni o'chirib yubormaslik uchun avval qidiruv natijalarini ko'rib olish xavfsizlik qoidasidir.",
          correct: true,
          bonus: 1400,
          outcome: "Malika qoyil qoldi: 'Aynan shunday! Tizim ma'muri hech qachon ko'rmasdan `-delete` yoki `rm -rf` bermaydi! +$1400!'"
        },
        {
          text: "Chunki `-delete` buyrug'i faqat papkalarni o'chiradi.",
          correct: false,
          bonus: 0,
          outcome: "Malika eslatdi: 'Xavfsiz qidiruv va tekshiruv — asosiy qoida!' "
        }
      ]
    },
    {
      id: "ev7",
      triggerAfterQuestion: 135,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "🎓 Linux Kernel Tizim Sertifikatsiyasi",
      narrative: "Professor Turing sertifikatni ko'tardi: 'Debian 12 fayl tizimi, Inodelar, ruxsatlar va qidiruv bo'yicha to'liq 1-hafta dasturini yakunladingiz. Tizim qanday holatda to'liq barqaror ishlaydi?'",
      choices: [
        {
          text: "Fayllar ierarxiyasi to'g'ri tashkil etilganda, ruxsatlar minimal zarur darajada saqlanganda va eskirgan loglar avtomatik tozalanganda!",
          correct: true,
          bonus: 2500,
          outcome: "Professor Turing va butun laboratoriya olqishladi: 'Siz 1-darajali Linux Tizim Muhandisi maqomiga erishdingiz! +$2500!' "
        },
        {
          text: "Faqat barcha fayllarga 777 ruxsati berilganda.",
          correct: false,
          bonus: 0,
          outcome: "Turing tuzatdi: '777 ruxsati xavfsizlikning eng katta kulfatidir!' "
        }
      ]
    }
  ];

  window.VIRTUAL_LINUX = {
    VirtualLinuxShell,
    BASH_GRADER,
    careerRanks,
    sectors,
    officeEvents
  };
})();
