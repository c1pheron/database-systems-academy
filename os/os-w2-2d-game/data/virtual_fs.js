// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 VIRTUAL LINUX ENGINE & VFS
// Topics: User Management (useradd, usermod, passwd, /etc/passwd, /etc/shadow, /etc/skel),
// File Permissions & Sticky Bit (chmod 1777, chown, umask 022/002/027),
// Text Processing & Stream Pipelines (grep, cut, sort, uniq, sed, awk),
// Disk Management (df -h, du -sh, tar, zip),
// Apache Log Forensics, Career Ranks, 10 Sectors & Security Events.
// ============================================================================

(function () {
  let nextInode = 20001;

  // Authentic Apache Log Dataset from Seminar 2 Case Study
  const APACHE_LOGS_SAMPLE = [
    '83.149.9.216 - - [17/May/2015:10:05:03 +0000] "GET /presentations/logstash-monitorama-2013/images/kibana-search.png HTTP/1.1" 200 203023 "http://semicomplete.com/presentations/logstash-monitorama-2013/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36"',
    '83.149.9.216 - - [17/May/2015:10:05:27 +0000] "GET /presentations/logstash-monitorama-2013/images/kibana-dashboard.png HTTP/1.1" 200 321631 "http://semicomplete.com/presentations/logstash-monitorama-2013/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36"',
    '83.149.9.216 - - [17/May/2015:10:05:40 +0000] "GET /favicon.ico HTTP/1.1" 200 36382 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1) AppleWebKit/537.36"',
    '78.173.140.106 - - [17/May/2015:10:06:12 +0000] "POST /login.php HTTP/1.1" 200 4521 "http://semicomplete.com/login.php" "Mozilla/5.0 (Windows NT 6.1; WOW64)"',
    '78.173.140.106 - - [17/May/2015:10:06:45 +0000] "POST /api/update.php HTTP/1.1" 200 1204 "http://semicomplete.com/api" "Mozilla/5.0 (Windows NT 6.1; WOW64)"',
    '93.180.71.3 - - [17/May/2015:10:07:01 +0000] "GET /projects/xdotool/ HTTP/1.1" 200 12292 "http://www.google.com" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64)"',
    '93.180.71.3 - - [17/May/2015:10:08:14 +0000] "GET /style.css HTTP/1.1" 200 4312 "http://semicomplete.com/projects/xdotool/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64)"',
    '188.165.15.120 - - [17/May/2015:10:09:22 +0000] "GET /crash_report.php HTTP/1.1" 500 532 "-" "Python-urllib/2.7"',
    '188.165.15.120 - - [17/May/2015:10:09:23 +0000] "GET /admin/db_backup.sql HTTP/1.1" 403 287 "-" "Python-urllib/2.7"',
    '83.149.9.216 - - [17/May/2015:10:10:05 +0000] "GET /blog/tags/puppet.html HTTP/1.1" 200 14872 "http://semicomplete.com/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1)"',
    '66.249.73.135 - - [17/May/2015:10:11:40 +0000] "GET /robots.txt HTTP/1.1" 200 412 "-" "Googlebot/2.1 (+http://www.google.com/bot.html)"',
    '78.173.140.106 - - [17/May/2015:10:12:10 +0000] "GET /images/banner.jpg HTTP/1.1" 200 89230 "http://semicomplete.com/login.php" "Mozilla/5.0 (Windows NT 6.1; WOW64)"',
    '217.168.17.5 - - [17/May/2015:10:13:01 +0000] "GET /server-status HTTP/1.1" 500 612 "-" "Mozilla/5.0 (X11; Linux x86_64)"',
    '83.149.9.216 - - [17/May/2015:10:14:15 +0000] "GET /avatar.gif HTTP/1.1" 200 4512 "http://semicomplete.com/" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_1)"',
    '93.180.71.3 - - [17/May/2015:10:15:30 +0000] "POST /feedback.php HTTP/1.1" 200 2341 "http://semicomplete.com/projects/xdotool/" "Mozilla/5.0 (X11; Ubuntu; Linux x86_64)"'
  ].join("\n");

  function createInitialFS() {
    nextInode = 20001;

    const root = {
      name: "",
      type: "dir",
      inode: 2,
      permissions: "drwxr-xr-x",
      owner: "root",
      group: "root",
      links: 16,
      mtime: "2025-01-18 09:00:00",
      children: {}
    };

    function addDir(parent, name, perms = "drwxr-xr-x", owner = "root", group = "root", sticky = false) {
      const d = {
        name,
        type: "dir",
        inode: nextInode++,
        permissions: sticky ? perms.replace(/.$/, "t") : perms,
        owner,
        group,
        links: 2,
        sticky,
        mtime: "2025-01-18 09:00:00",
        children: {}
      };
      parent.children[name] = d;
      return d;
    }

    function addFile(parent, name, content = "", perms = "-rw-r--r--", owner = "root", group = "root", mtime = "2025-01-18 09:00:00") {
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

    // Standard Linux Root Hierarchy
    addDir(root, "bin");
    addDir(root, "boot");
    addDir(root, "dev");
    const etc = addDir(root, "etc");
    const home = addDir(root, "home");
    addDir(root, "lib");
    addDir(root, "proc");
    const srv = addDir(root, "srv");
    const tmp = addDir(root, "tmp", "drwxrwxrwt", "root", "root", true);
    const varDir = addDir(root, "var");

    // /etc Files (User Management & Skeletons)
    const skel = addDir(etc, "skel");
    addFile(skel, ".bashrc", '# ~/.bashrc\nalias ll="ls -la"\nPS1="\\u@\\h:\\w\\$ "\n', "-rw-r--r--");
    addFile(skel, ".profile", '# ~/.profile\nexport PATH="$HOME/bin:$PATH"\n', "-rw-r--r--");
    addFile(skel, ".bash_logout", '# ~/.bash_logout\nclear\n', "-rw-r--r--");

    const passwdContent = [
      "root:x:0:0:root:/root:/bin/bash",
      "daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin",
      "bin:x:2:2:bin:/bin:/usr/sbin/nologin",
      "sys:x:3:3:sys:/dev:/usr/sbin/nologin",
      "student:x:1000:1000:WIUT Student:/home/student:/bin/bash",
      "alice:x:1001:1001:Alice DevOps:/home/alice:/bin/bash",
      "bob:x:1002:1002:Bob Junior:/home/bob:/bin/sh"
    ].join("\n");
    addFile(etc, "passwd", passwdContent, "-rw-r--r--");

    const shadowContent = [
      "root:$6$xyz$encrypted_root_pass:19700:0:99999:7:::",
      "daemon:*:19700:0:99999:7:::",
      "bin:*:19700:0:99999:7:::",
      "student:$6$abc$encrypted_student_pass:19700:0:99999:7:::",
      "alice:$6$def$encrypted_alice_pass:19700:0:99999:7:::",
      "bob:!:19700:0:99999:7:::"
    ].join("\n");
    addFile(etc, "shadow", shadowContent, "-rw-r-----", "root", "shadow");

    const groupContent = [
      "root:x:0:",
      "sudo:x:27:student,alice",
      "student:x:1000:",
      "alice:x:1001:",
      "bob:x:1002:",
      "devteam:x:1005:student,alice,bob",
      "users:x:100:"
    ].join("\n");
    addFile(etc, "group", groupContent, "-rw-r--r--");

    // /srv/project (Seminar 2 Case Study 3 - Shared Project Folder)
    const projectDir = addDir(srv, "project", "drwxrwxr-t", "root", "devteam", true);
    addFile(projectDir, "README.md", "# DevTeam Shared Workspace\nEslatma: Sticky bit faollashtirilgan. Hech kim boshqaning faylini o'chira olmaydi.\n", "-rw-rw-r--", "root", "devteam");
    addFile(projectDir, "app_config.json", '{\n  "environment": "production",\n  "port": 8080\n}', "-rw-rw-r--", "alice", "devteam");
    addFile(projectDir, "pipeline.sh", '#!/bin/bash\necho "Running CI/CD pipeline..."\n', "-rwxrwxr-x", "alice", "devteam");

    // /home Directories
    const studentHome = addDir(home, "student", "drwxr-xr-x", "student", "student");
    addFile(studentHome, "readme.txt", "Assalomu alaykum! WIUT OS Seminar 2 laboratoriyasiga xush kelibsiz.\n", "-rw-r--r--", "student", "student");
    addFile(studentHome, "scores.csv", "Ali,85,Math\nVali,92,Physics\nZiyoda,78,CS\nBobur,95,Math\nMalika,88,CS\n", "-rw-r--r--", "student", "student");
    addFile(studentHome, "inventory.txt", "server1 192.168.1.10 web\nserver2 192.168.1.11 db\nserver3 192.168.1.12 cache\nserver4 192.168.1.13 backup\n", "-rw-r--r--", "student", "student");

    const aliceHome = addDir(home, "alice", "drwx------", "alice", "alice");
    addFile(aliceHome, ".bashrc", '# ~/.bashrc of alice\n', "-rw-r--r--", "alice", "alice");
    addFile(aliceHome, "notes.txt", "Sprint 2: Docker va Shell skriptlar avtomatizatsiyasi.\n", "-rw-------", "alice", "alice");

    // /var/log Directory & Apache Logs
    const logDir = addDir(varDir, "log");
    addFile(logDir, "apache_logs.txt", APACHE_LOGS_SAMPLE, "-rw-r--r--");
    addFile(logDir, "syslog", "2026-01-18T08:34:04.326908+00:00 mint systemd[1]: Started User Manager for UID 1000.\n2026-01-18T08:35:10.123456+00:00 mint cron[451]: (root) CMD (/usr/local/bin/backup.sh)\n2026-01-18T08:36:00.654321+00:00 mint kernel: [ 12.345678] eth0: Link is Up - 1000Mbps/Full\n", "-rw-r-----");
    addFile(logDir, "auth.log", "Jan 18 08:30:00 debian-server sshd[102]: Accepted publickey for student from 192.168.1.5 port 54321 ssh2\nJan 18 08:31:00 debian-server sudo: student : TTY=pts/0 ; PWD=/home/student ; USER=root ; COMMAND=/bin/cat /etc/shadow\nJan 18 08:32:00 debian-server sudo: pam_unix(sudo:session): session opened for user root by student(uid=0)\n", "-rw-r-----");

    return root;
  }

  // ============================================================================
  // VIRTUAL LINUX SHELL CLASS (WEEK 2)
  // ============================================================================

  class VirtualLinuxShell {
    constructor() {
      this.root = createInitialFS();
      this.cwd = "/home/student";
      this.user = "student";
      this.umask = "0022";
      this.env = {
        HOME: "/home/student",
        USER: "student",
        SHELL: "/bin/bash",
        PATH: "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",
        TERM: "xterm-256color"
      };
    }

    resolvePath(p) {
      if (!p) return this.cwd;
      let target = p.trim();
      if (target.startsWith("~")) {
        target = this.env.HOME + target.slice(1);
      }
      if (target.startsWith("/")) {
        return this.normalizePath(target);
      }
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

      // Handle 2>&1 merge
      let mergeStderr = false;
      if (trimmed.includes("2>&1") || trimmed.includes("&>")) {
        mergeStderr = true;
        trimmed = trimmed.replace(/2>&1/g, "").replace(/&>/g, ">").trim();
      }

      // Handle 2> /dev/null or error redirect
      let redirectErrorTarget = null;
      const errMatch = trimmed.match(/^([\s\S]+?)\s*2>>\s*([^\s]+)$/) || trimmed.match(/^([\s\S]+?)\s*2>\s*([^\s]+)$/);
      if (errMatch) {
        trimmed = errMatch[1].trim();
        redirectErrorTarget = errMatch[2].trim();
      }

      // Handle Output Redirection: > or >>
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

      // Handle Pipeline: cmd1 | cmd2 | cmd3
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
      if (redirectErrorTarget && redirectErrorTarget === "/dev/null") {
        return { stdout: res.stdout, stderr: "", code: res.code };
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
      file.size = (typeof TextEncoder !== "undefined" ? new TextEncoder().encode(file.content).length : file.content.length);
    }

    runSinglePiped(cmdStr, stdinData) {
      const rawTokens = this.parseArgs(cmdStr);
      if (rawTokens.length === 0) return { stdout: "", stderr: "", code: 0 };

      let isSudo = false;
      if (rawTokens[0] === "sudo") {
        isSudo = true;
        rawTokens.shift();
      }
      if (rawTokens.length === 0) return { stdout: "", stderr: "", code: 0 };

      const baseCmd = rawTokens[0];
      const args = rawTokens.slice(1);

      switch (baseCmd) {
        case "pwd": return this.cmdPwd();
        case "whoami":
        return { stdout: this.isRoot ? "root" : "userland", stderr: "", code: 0, editorAction: null };
        case "hostname":
        return { stdout: "kali", stderr: "", code: 0, editorAction: null };
        case "cd": return this.cmdCd(args);
        case "ls": return this.cmdLs(args);
        case "mkdir": return this.cmdMkdir(args);
        case "rmdir": return this.cmdRmdir(args);
        case "touch": return this.cmdTouch(args);
        case "cat": return this.cmdCat(args, stdinData);
        case "head": return this.cmdHead(args, stdinData);
        case "tail": return this.cmdTail(args, stdinData);
        case "wc": return this.cmdWc(args, stdinData);
        case "cp": return this.cmdCp(args);
        case "mv": return this.cmdMv(args);
        case "rm": return this.cmdRm(args);
        case "ln": return this.cmdLn(args);
        case "stat": return this.cmdStat(args);
        case "echo": return this.cmdEcho(args);
        case "useradd": case "adduser": return this.cmdUseradd(args);
        case "usermod": return this.cmdUsermod(args);
        case "passwd": return this.cmdPasswd(args);
        case "chmod": return this.cmdChmod(args);
        case "chown": return this.cmdChown(args);
        case "umask": return this.cmdUmask(args);
        case "grep": return this.cmdGrep(args, stdinData);
        case "cut": return this.cmdCut(args, stdinData);
        case "sort": return this.cmdSort(args, stdinData);
        case "uniq": return this.cmdUniq(args, stdinData);
        case "sed": return this.cmdSed(args, stdinData);
        case "awk": return this.cmdAwk(args, stdinData);
        case "df": return this.cmdDf(args);
        case "du": return this.cmdDu(args);
        case "tar": return this.cmdTar(args);
        case "zip": return this.cmdZip(args);
        case "unzip": return this.cmdUnzip(args);
        case "find": return this.cmdFind(args);
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

    // --- Commands Implementation ---

    cmdPwd() {
      return { stdout: this.cwd, stderr: "", code: 0 };
    }

    cmdCd(args) {
      let target = args[0] || "~";
      if (target === "-") target = this.env.HOME;
      const abs = this.resolvePath(target);
      const node = this.getNode(abs);
      if (!node) return { stdout: "", stderr: `bash: cd: ${target}: No such file or directory`, code: 1 };
      if (node.type !== "dir") return { stdout: "", stderr: `bash: cd: ${target}: Not a directory`, code: 1 };
      this.cwd = abs;
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdEcho(args) {
      return { stdout: args.join(" "), stderr: "", code: 0 };
    }

    cmdLs(args) {
      let showAll = false;
      let showLong = false;
      let target = ".";
      for (const a of args) {
        if (a.startsWith("-")) {
          if (a.includes("a")) showAll = true;
          if (a.includes("l")) showLong = true;
        } else {
          target = a;
        }
      }

      const node = this.getNode(this.resolvePath(target));
      if (!node) return { stdout: "", stderr: `ls: cannot access '${target}': No such file or directory`, code: 2 };

      if (node.type === "file") {
        if (showLong) {
          return { stdout: `${node.permissions} ${node.links} ${node.owner} ${node.group} ${node.size} ${node.mtime.slice(0, 10)} ${node.name}`, stderr: "", code: 0 };
        }
        return { stdout: node.name, stderr: "", code: 0 };
      }

      let entries = Object.values(node.children || {});
      if (!showAll) entries = entries.filter(e => !e.name.startsWith("."));
      entries.sort((a, b) => a.name.localeCompare(b.name));

      if (showLong) {
        const lines = entries.map(e => `${e.permissions} ${e.links} ${e.owner} ${e.group} ${e.size} ${e.mtime.slice(0, 10)} ${e.name}`);
        return { stdout: lines.join("\n"), stderr: "", code: 0 };
      }

      return { stdout: entries.map(e => e.name).join("  "), stderr: "", code: 0 };
    }

    cmdMkdir(args) {
      let createParents = false;
      const targets = [];
      for (const a of args) {
        if (a === "-p" || a === "--parents") createParents = true;
        else if (!a.startsWith("-")) targets.push(a);
      }
      if (targets.length === 0) return { stdout: "", stderr: "mkdir: missing operand", code: 1 };

      for (const t of targets) {
        const absPath = this.resolvePath(t);
        if (createParents) {
          const parts = absPath.split("/").filter(Boolean);
          let curPath = "";
          let cur = this.root;
          for (const p of parts) {
            curPath += "/" + p;
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
        } else {
          const { parent, name } = this.getParentAndName(absPath);
          if (!parent) return { stdout: "", stderr: `mkdir: cannot create directory '${t}': No such file or directory`, code: 1 };
          if (parent.children[name]) return { stdout: "", stderr: `mkdir: cannot create directory '${t}': File exists`, code: 1 };
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
      for (const a of args) {
        const abs = this.resolvePath(a);
        const node = this.getNode(abs);
        if (!node) return { stdout: "", stderr: `rmdir: failed to remove '${a}': No such file or directory`, code: 1 };
        if (node.type !== "dir") return { stdout: "", stderr: `rmdir: failed to remove '${a}': Not a directory`, code: 1 };
        if (Object.keys(node.children || {}).length > 0) return { stdout: "", stderr: `rmdir: failed to remove '${a}': Directory not empty`, code: 1 };
        const { parent, name } = this.getParentAndName(abs);
        delete parent.children[name];
      }
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdTouch(args) {
      for (const a of args) {
        if (a.startsWith("-")) continue;
        const abs = this.resolvePath(a);
        const node = this.getNode(abs);
        const now = new Date().toISOString().replace("T", " ").substring(0, 19);
        if (node) {
          node.mtime = now;
        } else {
          const { parent, name } = this.getParentAndName(abs);
          if (parent && parent.type === "dir") {
            parent.children[name] = {
              name,
              type: "file",
              inode: nextInode++,
              permissions: "-rw-r--r--",
              owner: this.user,
              group: this.user,
              links: 1,
              mtime: now,
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
        if (a.startsWith("-")) continue;
        const node = this.getNode(this.resolvePath(a));
        if (!node) return { stdout: "", stderr: `cat: ${a}: No such file or directory`, code: 1 };
        if (node.type === "dir") return { stdout: "", stderr: `cat: ${a}: Is a directory`, code: 1 };
        out.push(node.content || "");
      }
      return { stdout: out.join("\n"), stderr: "", code: 0 };
    }

    cmdHead(args, stdinData) {
      let n = 10;
      let fileTarget = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n" && args[i + 1]) {
          n = parseInt(args[i + 1], 10);
          i++;
        } else if (args[i].startsWith("-") && /-\d+/.test(args[i])) {
          n = parseInt(args[i].slice(1), 10);
        } else if (!args[i].startsWith("-")) {
          fileTarget = args[i];
        }
      }
      let content = stdinData;
      if (fileTarget) {
        const node = this.getNode(this.resolvePath(fileTarget));
        if (!node) return { stdout: "", stderr: `head: cannot open '${fileTarget}': No such file or directory`, code: 1 };
        content = node.content;
      }
      const lines = (content || "").split("\n");
      return { stdout: lines.slice(0, n).join("\n"), stderr: "", code: 0 };
    }

    cmdTail(args, stdinData) {
      let n = 10;
      let fileTarget = null;
      for (let i = 0; i < args.length; i++) {
        if (args[i] === "-n" && args[i + 1]) {
          n = parseInt(args[i + 1], 10);
          i++;
        } else if (args[i].startsWith("-") && /-\d+/.test(args[i])) {
          n = parseInt(args[i].slice(1), 10);
        } else if (!args[i].startsWith("-")) {
          fileTarget = args[i];
        }
      }
      let content = stdinData;
      if (fileTarget) {
        const node = this.getNode(this.resolvePath(fileTarget));
        if (!node) return { stdout: "", stderr: `tail: cannot open '${fileTarget}': No such file or directory`, code: 1 };
        content = node.content;
      }
      const lines = (content || "").split("\n").filter(Boolean);
      return { stdout: lines.slice(-n).join("\n"), stderr: "", code: 0 };
    }

    cmdWc(args, stdinData) {
      let doLines = false;
      let doWords = false;
      let doBytes = false;
      let fileTarget = null;
      for (const a of args) {
        if (a === "-l") doLines = true;
        else if (a === "-w") doWords = true;
        else if (a === "-c") doBytes = true;
        else if (!a.startsWith("-")) fileTarget = a;
      }
      if (!doLines && !doWords && !doBytes) {
        doLines = true; doWords = true; doBytes = true;
      }
      let content = stdinData;
      if (fileTarget) {
        const node = this.getNode(this.resolvePath(fileTarget));
        if (!node) return { stdout: "", stderr: `wc: ${fileTarget}: No such file or directory`, code: 1 };
        content = node.content || "";
      }
      const lines = content ? (content.endsWith("\n") ? content.slice(0, -1).split("\n").length : content.split("\n").length) : 0;
      const words = content ? content.trim().split(/\s+/).filter(Boolean).length : 0;
      const bytes = (typeof TextEncoder !== "undefined" ? new TextEncoder().encode(content).length : (content ? content.length : 0));

      const parts = [];
      if (doLines) parts.push(lines);
      if (doWords) parts.push(words);
      if (doBytes) parts.push(bytes);
      if (fileTarget) parts.push(fileTarget);

      return { stdout: parts.join(" "), stderr: "", code: 0 };
    }

    cmdCp(args) {
      let recursive = false;
      const targets = [];
      for (const a of args) {
        if (a === "-r" || a === "-R" || a === "-a") recursive = true;
        else if (!a.startsWith("-")) targets.push(a);
      }
      if (targets.length < 2) return { stdout: "", stderr: "cp: missing destination file operand", code: 1 };
      const src = targets[0];
      const dest = targets[1];
      const srcNode = this.getNode(this.resolvePath(src));
      if (!srcNode) return { stdout: "", stderr: `cp: cannot stat '${src}': No such file or directory`, code: 1 };

      const destAbs = this.resolvePath(dest);
      let destNode = this.getNode(destAbs);

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
      return { stdout: "", stderr: "", code: 0 };
    }

    cmdMv(args) {
      const targets = args.filter(a => !a.startsWith("-"));
      if (targets.length < 2) return { stdout: "", stderr: "mv: missing destination file operand", code: 1 };
      const src = targets[0];
      const dest = targets[1];
      const srcAbs = this.resolvePath(src);
      const srcNode = this.getNode(srcAbs);
      if (!srcNode) return { stdout: "", stderr: `mv: cannot stat '${src}': No such file or directory`, code: 1 };

      const { parent: srcParent, name: srcName } = this.getParentAndName(srcAbs);
      const destAbs = this.resolvePath(dest);
      const destNode = this.getNode(destAbs);

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
        if (node.type === "dir" && !recursive) return { stdout: "", stderr: `rm: cannot remove '${t}': Is a directory`, code: 1 };

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
      if (!isSymlink && !srcNode) return { stdout: "", stderr: `ln: failed to access '${src}': No such file or directory`, code: 1 };

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

    cmdStat(args) {
      const target = args[0] || ".";
      const node = this.getNode(this.resolvePath(target));
      if (!node) return { stdout: "", stderr: `stat: cannot stat '${target}': No such file or directory`, code: 1 };
      const out = [
        `  File: ${node.name || "/"}`,
        `  Size: ${node.size || 4096}   Blocks: 8   IO Block: 4096   ${node.type === "dir" ? "directory" : "regular file"}`,
        `Device: 8,1   Inode: ${node.inode}   Links: ${node.links}`,
        `Access: (${node.permissions})  Uid: ( 1000/ ${node.owner})   Gid: ( 1000/ ${node.group})`,
        `Modify: ${node.mtime}`
      ].join("\n");
      return { stdout: out, stderr: "", code: 0 };
    }

    // --- User & Group Administration (Week 2 Core) ---

    cmdUseradd(args) {
      let createHome = false;
      let shell = "/bin/sh";
      let comment = "";
      let group = "";
      let username = null;

      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a === "-m") createHome = true;
        else if (a === "-s" && args[i + 1]) { shell = args[++i]; }
        else if (a === "-c" && args[i + 1]) { comment = args[++i]; }
        else if (a === "-G" && args[i + 1]) { group = args[++i]; }
        else if (!a.startsWith("-")) { username = a; }
      }

      if (!username) return { stdout: "", stderr: "useradd: missing username", code: 1 };

      const passwdNode = this.getNode("/etc/passwd");
      if (passwdNode.content.includes(`${username}:`)) {
        return { stdout: "", stderr: `useradd: user '${username}' already exists`, code: 9 };
      }

      const uid = 1000 + Math.floor(Math.random() * 8999);
      const homePath = `/home/${username}`;
      passwdNode.content += `\n${username}:x:${uid}:${uid}:${comment}:${homePath}:${shell}`;

      const shadowNode = this.getNode("/etc/shadow");
      if (shadowNode) shadowNode.content += `\n${username}:!:19700:0:99999:7:::`;

      const groupNode = this.getNode("/etc/group");
      if (groupNode) {
        groupNode.content += `\n${username}:x:${uid}:`;
        if (group && groupNode.content.includes(`${group}:`)) {
          groupNode.content = groupNode.content.replace(new RegExp(`(${group}:x:\\d+:.*)`), `$1,${username}`);
        }
      }

      if (createHome) {
        const homeParent = this.getNode("/home");
        if (homeParent) {
          const userDir = {
            name: username,
            type: "dir",
            inode: nextInode++,
            permissions: "drwx------",
            owner: username,
            group: username,
            links: 2,
            mtime: new Date().toISOString().replace("T", " ").substring(0, 19),
            children: {}
          };
          homeParent.children[username] = userDir;

          // Copy /etc/skel
          const skel = this.getNode("/etc/skel");
          if (skel && skel.children) {
            for (const [skelName, skelChild] of Object.entries(skel.children)) {
              userDir.children[skelName] = {
                ...skelChild,
                inode: nextInode++,
                owner: username,
                group: username
              };
            }
          }
        }
      }

      return { stdout: "", stderr: "", code: 0 };
    }

    cmdUsermod(args) {
      let moveHome = false;
      let newHome = null;
      let newShell = null;
      let appendGroup = null;
      let doLock = false;
      let doUnlock = false;
      let username = null;

      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a === "-m") moveHome = true;
        else if (a === "-d" && args[i + 1]) { newHome = args[++i]; }
        else if (a === "-s" && args[i + 1]) { newShell = args[++i]; }
        else if ((a === "-aG" || a === "-G") && args[i + 1]) { appendGroup = args[++i]; }
        else if (a === "-L") doLock = true;
        else if (a === "-U") doUnlock = true;
        else if (!a.startsWith("-")) username = a;
      }

      if (!username) return { stdout: "", stderr: "usermod: missing username", code: 1 };

      const passwdNode = this.getNode("/etc/passwd");
      if (!passwdNode || !passwdNode.content.includes(`${username}:`)) {
        return { stdout: "", stderr: `usermod: user '${username}' does not exist`, code: 6 };
      }

      if (newShell) {
        const lines = passwdNode.content.split("\n");
        passwdNode.content = lines.map(line => {
          if (line.startsWith(`${username}:`)) {
            const parts = line.split(":");
            parts[6] = newShell;
            return parts.join(":");
          }
          return line;
        }).join("\n");
      }

      if (newHome) {
        const lines = passwdNode.content.split("\n");
        passwdNode.content = lines.map(line => {
          if (line.startsWith(`${username}:`)) {
            const parts = line.split(":");
            parts[5] = newHome;
            return parts.join(":");
          }
          return line;
        }).join("\n");
      }

      if (appendGroup) {
        const groupNode = this.getNode("/etc/group");
        if (groupNode && groupNode.content.includes(`${appendGroup}:`)) {
          groupNode.content = groupNode.content.replace(new RegExp(`(${appendGroup}:x:\\d+:.*)`), (m, p1) => {
            return p1.endsWith(":") ? `${p1}${username}` : `${p1},${username}`;
          });
        }
      }

      if (doLock) {
        const shadowNode = this.getNode("/etc/shadow");
        if (shadowNode) {
          const lines = shadowNode.content.split("\n");
          shadowNode.content = lines.map(line => {
            if (line.startsWith(`${username}:`)) {
              const parts = line.split(":");
              if (!parts[1].startsWith("!")) parts[1] = "!" + parts[1];
              return parts.join(":");
            }
            return line;
          }).join("\n");
        }
      }

      if (doUnlock) {
        const shadowNode = this.getNode("/etc/shadow");
        if (shadowNode) {
          const lines = shadowNode.content.split("\n");
          shadowNode.content = lines.map(line => {
            if (line.startsWith(`${username}:`)) {
              const parts = line.split(":");
              if (parts[1].startsWith("!")) parts[1] = parts[1].slice(1);
              return parts.join(":");
            }
            return line;
          }).join("\n");
        }
      }

      return { stdout: "", stderr: "", code: 0 };
    }

    cmdPasswd(args) {
      const user = args[0] || this.user;
      return { stdout: `passwd: password updated successfully for ${user}`, stderr: "", code: 0 };
    }

    // --- File Permissions & Sticky Bit (Week 2 Core) ---

    cmdChmod(args) {
      let recursive = false;
      let mode = null;
      const targets = [];

      for (const a of args) {
        if (a === "-R") recursive = true;
        else if (!mode) mode = a;
        else targets.push(a);
      }

      if (!mode || targets.length === 0) return { stdout: "", stderr: "chmod: missing operand", code: 1 };

      for (const t of targets) {
        const node = this.getNode(this.resolvePath(t));
        if (!node) return { stdout: "", stderr: `chmod: cannot access '${t}': No such file or directory`, code: 1 };

        this.applyChmod(node, mode, recursive);
      }

      return { stdout: "", stderr: "", code: 0 };
    }

    applyChmod(node, mode, recursive) {
      if (!node) return;

      // Numeric mode (e.g. 755, 644, 700, 1777, 1775, 0777)
      if (/^\d{3,4}$/.test(mode)) {
        let octal = mode;
        let sticky = false;
        if (octal.length === 4) {
          if (octal[0] === "1") sticky = true;
          octal = octal.slice(1);
        }

        const mapPerm = {
          "0": "---", "1": "--x", "2": "-w-", "3": "-wx",
          "4": "r--", "5": "r-x", "6": "rw-", "7": "rwx"
        };
        const u = mapPerm[octal[0]] || "rwx";
        const g = mapPerm[octal[1]] || "r-x";
        let o = mapPerm[octal[2]] || "r-x";

        if (sticky) {
          node.sticky = true;
          o = o.slice(0, 2) + "t";
        } else {
          node.sticky = false;
        }

        const prefix = node.type === "dir" ? "d" : "-";
        node.permissions = prefix + u + g + o;
      }
      // Symbolic mode: +x, -x, +t, -t, etc.
      else if (mode === "+x") {
        node.permissions = node.permissions.replace(/-(?=[^rwx]*$)/g, "x").replace(/^([d-])(r..)(r..)(r..)$/, (m, p, u, g, o) => {
          return p + u.slice(0, 2) + "x" + g.slice(0, 2) + "x" + o.slice(0, 2) + "x";
        });
      } else if (mode === "-x") {
        node.permissions = node.permissions.replace(/x/g, "-");
      } else if (mode === "+t") {
        node.sticky = true;
        node.permissions = node.permissions.replace(/.$/, "t");
      } else if (mode === "-t") {
        node.sticky = false;
        node.permissions = node.permissions.replace(/t$/, "x");
      }

      if (recursive && node.type === "dir" && node.children) {
        Object.values(node.children).forEach(child => this.applyChmod(child, mode, true));
      }
    }

    cmdChown(args) {
      let recursive = false;
      let ownerGroup = null;
      const targets = [];

      for (const a of args) {
        if (a === "-R") recursive = true;
        else if (!ownerGroup) ownerGroup = a;
        else targets.push(a);
      }

      if (!ownerGroup || targets.length === 0) return { stdout: "", stderr: "chown: missing operand", code: 1 };

      let [newOwner, newGroup] = ownerGroup.split(":");
      if (!newGroup && ownerGroup.includes(":")) newGroup = newOwner;

      for (const t of targets) {
        const node = this.getNode(this.resolvePath(t));
        if (!node) return { stdout: "", stderr: `chown: cannot access '${t}': No such file or directory`, code: 1 };

        function apply(n) {
          if (newOwner) n.owner = newOwner;
          if (newGroup) n.group = newGroup;
          if (recursive && n.type === "dir" && n.children) {
            Object.values(n.children).forEach(apply);
          }
        }
        apply(node);
      }

      return { stdout: "", stderr: "", code: 0 };
    }

    cmdUmask(args) {
      if (args.length === 0) {
        return { stdout: this.umask, stderr: "", code: 0 };
      }
      if (args[0] === "-S") {
        return { stdout: "u=rwx,g=rx,o=rx", stderr: "", code: 0 };
      }
      const val = args[0];
      if (/^\d{3,4}$/.test(val)) {
        this.umask = val.padStart(4, "0");
        return { stdout: "", stderr: "", code: 0 };
      }
      return { stdout: "", stderr: "umask: invalid octal number", code: 1 };
    }

    // --- Text Processing & Pipelines (Week 2 Core) ---

    cmdGrep(args, stdinData) {
      let caseInsensitive = false;
      let invert = false;
      let countOnly = false;
      let showLineNum = false;
      let recursive = false;
      let filesOnly = false;
      let onlyMatching = false;
      let useExtended = false;
      let contextAfter = 0;
      let contextBefore = 0;
      let pattern = null;
      const targets = [];

      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a.startsWith("-") && a !== "-") {
          if (a.includes("i")) caseInsensitive = true;
          if (a.includes("v")) invert = true;
          if (a.includes("c")) countOnly = true;
          if (a.includes("n")) showLineNum = true;
          if (a.includes("r") || a.includes("R")) recursive = true;
          if (a.includes("l")) filesOnly = true;
          if (a.includes("o")) onlyMatching = true;
          if (a.includes("E")) useExtended = true;
          if (a === "-A" && args[i + 1]) { contextAfter = parseInt(args[++i], 10); }
          else if (a === "-B" && args[i + 1]) { contextBefore = parseInt(args[++i], 10); }
          else if (a === "-C" && args[i + 1]) {
            const ctx = parseInt(args[++i], 10);
            contextAfter = ctx; contextBefore = ctx;
          }
        } else if (!pattern) {
          pattern = a;
        } else {
          targets.push(a);
        }
      }

      if (!pattern) return { stdout: "", stderr: "grep: missing pattern", code: 2 };

      let linesToScan = [];
      if (targets.length === 0 && stdinData !== null) {
        linesToScan = stdinData.split("\n");
      } else {
        for (const t of targets) {
          const node = this.getNode(this.resolvePath(t));
          if (node && node.type === "file") {
            const fileLines = (node.content || "").split("\n").filter(Boolean);
            linesToScan.push(...fileLines);
          }
        }
      }

      let regex;
      try {
        const flags = caseInsensitive ? "i" : "";
        regex = new RegExp(pattern, flags);
      } catch (e) {
        regex = new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), caseInsensitive ? "i" : "");
      }

      const matches = [];
      for (let i = 0; i < linesToScan.length; i++) {
        const line = linesToScan[i];
        const isMatch = regex.test(line);
        const condition = invert ? !isMatch : isMatch;

        if (condition) {
          if (onlyMatching && !invert) {
            const matchArr = line.match(regex);
            if (matchArr) matches.push(matchArr[0]);
          } else {
            // Context lines support (-A / -B)
            if (contextBefore > 0 || contextAfter > 0) {
              const startIdx = Math.max(0, i - contextBefore);
              const endIdx = Math.min(linesToScan.length - 1, i + contextAfter);
              for (let k = startIdx; k <= endIdx; k++) {
                const prefix = showLineNum ? `${k + 1}:` : "";
                matches.push(prefix + linesToScan[k]);
              }
              i = endIdx; // skip to end of context
            } else {
              const prefix = showLineNum ? `${i + 1}:` : "";
              matches.push(prefix + line);
            }
          }
        }
      }

      if (countOnly) {
        return { stdout: String(matches.length), stderr: "", code: 0 };
      }
      if (filesOnly && matches.length > 0) {
        return { stdout: targets[0] || "input", stderr: "", code: 0 };
      }

      return { stdout: matches.join("\n"), stderr: "", code: matches.length > 0 ? 0 : 1 };
    }

    cmdCut(args, stdinData) {
      let delim = "\t";
      let fields = null;
      let chars = null;
      let targetFile = null;

      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a.startsWith("-d")) {
          delim = a.length > 2 ? a.slice(2) : args[++i];
        } else if (a.startsWith("-f")) {
          fields = a.length > 2 ? a.slice(2) : args[++i];
        } else if (a.startsWith("-c")) {
          chars = a.length > 2 ? a.slice(2) : args[++i];
        } else if (!a.startsWith("-")) {
          targetFile = a;
        }
      }

      let content = stdinData;
      if (targetFile) {
        const node = this.getNode(this.resolvePath(targetFile));
        if (node) content = node.content;
      }
      if (!content) return { stdout: "", stderr: "", code: 0 };

      const lines = content.split("\n").filter(Boolean);
      const res = lines.map(line => {
        if (chars) {
          // character slicing, e.g. -c1-10
          const [start, end] = chars.split("-").map(n => parseInt(n, 10));
          return line.slice((start || 1) - 1, end || line.length);
        }
        if (fields) {
          const parts = line.split(delim);
          const fieldIndices = fields.split(",").map(f => parseInt(f.trim(), 10) - 1);
          return fieldIndices.map(idx => parts[idx] !== undefined ? parts[idx] : "").join(delim);
        }
        return line;
      });

      return { stdout: res.join("\n"), stderr: "", code: 0 };
    }

    cmdSort(args, stdinData) {
      let numeric = false;
      let reverse = false;
      let unique = false;
      let targetFile = null;

      for (const a of args) {
        if (a.includes("n")) numeric = true;
        if (a.includes("r")) reverse = true;
        if (a.includes("u")) unique = true;
        if (!a.startsWith("-")) targetFile = a;
      }

      let content = stdinData;
      if (targetFile) {
        const node = this.getNode(this.resolvePath(targetFile));
        if (node) content = node.content;
      }
      if (!content) return { stdout: "", stderr: "", code: 0 };

      let lines = content.split("\n").filter(Boolean);

      lines.sort((a, b) => {
        if (numeric) {
          const numA = parseFloat(a) || 0;
          const numB = parseFloat(b) || 0;
          return numA - numB;
        }
        return a.localeCompare(b);
      });

      if (reverse) lines.reverse();
      if (unique) lines = Array.from(new Set(lines));

      return { stdout: lines.join("\n"), stderr: "", code: 0 };
    }

    cmdUniq(args, stdinData) {
      let count = false;
      let uniqueOnly = false;
      let duplicateOnly = false;
      let targetFile = null;

      for (const a of args) {
        if (a.includes("c")) count = true;
        if (a.includes("u")) uniqueOnly = true;
        if (a.includes("d")) duplicateOnly = true;
        if (!a.startsWith("-")) targetFile = a;
      }

      let content = stdinData;
      if (targetFile) {
        const node = this.getNode(this.resolvePath(targetFile));
        if (node) content = node.content;
      }
      if (!content) return { stdout: "", stderr: "", code: 0 };

      const lines = content.split("\n").filter(Boolean);
      const counts = [];
      for (const line of lines) {
        if (counts.length > 0 && counts[counts.length - 1].line === line) {
          counts[counts.length - 1].count++;
        } else {
          counts.push({ line, count: 1 });
        }
      }

      const out = [];
      for (const item of counts) {
        if (uniqueOnly && item.count > 1) continue;
        if (duplicateOnly && item.count === 1) continue;

        if (count) {
          out.push(`${item.count} ${item.line}`);
        } else {
          out.push(item.line);
        }
      }

      return { stdout: out.join("\n"), stderr: "", code: 0 };
    }

    cmdSed(args, stdinData) {
      let script = null;
      let targetFile = null;

      for (const a of args) {
        if (a.startsWith("-")) continue;
        if (!script) script = a;
        else targetFile = a;
      }

      let content = stdinData;
      if (targetFile) {
        const node = this.getNode(this.resolvePath(targetFile));
        if (node) content = node.content;
      }
      if (!content || !script) return { stdout: "", stderr: "", code: 0 };

      const lines = content.split("\n");
      const out = [];

      // s/old/new/g substitution
      const subMatch = script.match(/^s\/([^/]+)\/([^/]*)\/([g]?)$/);
      if (subMatch) {
        const findStr = subMatch[1];
        const replaceStr = subMatch[2];
        const isGlobal = subMatch[3] === "g";
        for (const line of lines) {
          out.push(isGlobal ? line.replaceAll(findStr, replaceStr) : line.replace(findStr, replaceStr));
        }
        return { stdout: out.join("\n"), stderr: "", code: 0 };
      }

      // 3d line deletion
      const delMatch = script.match(/^(\d+)d$/);
      if (delMatch) {
        const lineNum = parseInt(delMatch[1], 10);
        for (let i = 0; i < lines.length; i++) {
          if (i + 1 !== lineNum) out.push(lines[i]);
        }
        return { stdout: out.join("\n"), stderr: "", code: 0 };
      }

      return { stdout: content, stderr: "", code: 0 };
    }

    cmdAwk(args, stdinData) {
      let fieldSep = " ";
      let script = null;
      let targetFile = null;

      for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a.startsWith("-F")) {
          fieldSep = a.length > 2 ? a.slice(2) : args[++i];
        } else if (!script) {
          script = a;
        } else {
          targetFile = a;
        }
      }

      let content = stdinData;
      if (targetFile) {
        const node = this.getNode(this.resolvePath(targetFile));
        if (node) content = node.content;
      }
      if (!content || !script) return { stdout: "", stderr: "", code: 0 };

      const lines = content.split("\n").filter(Boolean);
      const out = [];

      // awk '{print $1}' or '{print $1, $7}'
      if (script.includes("print")) {
        const matchPrint = script.match(/print\s+([^}]+)/);
        if (matchPrint) {
          const fieldsStr = matchPrint[1];
          const indices = Array.from(fieldsStr.matchAll(/\$(\d+)/g)).map(m => parseInt(m[1], 10));

          for (const line of lines) {
            const parts = fieldSep === " " ? line.trim().split(/\s+/) : line.split(fieldSep);
            const printed = indices.map(idx => idx === 0 ? line : (parts[idx - 1] || ""));
            out.push(printed.join(" "));
          }
          return { stdout: out.join("\n"), stderr: "", code: 0 };
        }
      }

      return { stdout: content, stderr: "", code: 0 };
    }

    // --- Disk Management & Archives ---

    cmdDf(args) {
      const out = [
        "Filesystem     Type      Size  Used Avail Use% Mounted on",
        "/dev/sda1      ext4       40G   14G   24G  37% /",
        "udev           devtmpfs  3.9G     0  3.9G   0% /dev",
        "tmpfs          tmpfs     794M  1.4M  793M   1% /run",
        "/dev/sdb1      ext4      100G   22G   73G  24% /srv"
      ].join("\n");
      return { stdout: out, stderr: "", code: 0 };
    }

    cmdDu(args) {
      const out = [
        "4.0K    /var/log/apache_logs.txt",
        "12K     /var/log/syslog",
        "8.0K    /var/log/auth.log",
        "24K     /var/log"
      ].join("\n");
      return { stdout: out, stderr: "", code: 0 };
    }

    cmdTar(args) {
      return { stdout: "tar: archive processed successfully", stderr: "", code: 0 };
    }

    cmdZip(args) {
      return { stdout: "zip: archive created", stderr: "", code: 0 };
    }

    cmdUnzip(args) {
      return { stdout: "unzip: extracted archive", stderr: "", code: 0 };
    }

    cmdFind(args) {
      let startPath = ".";
      let namePattern = null;
      let typeFilter = null;
      let mtimeDays = null;
      let sizeFilter = null;
      let userFilter = null;

      let idx = 0;
      if (args[0] && !args[0].startsWith("-")) {
        startPath = args[0];
        idx = 1;
      }

      while (idx < args.length) {
        const flag = args[idx];
        if (flag === "-name" || flag === "-iname") { namePattern = args[++idx]; }
        else if (flag === "-type") { typeFilter = args[++idx]; }
        else if (flag === "-size") { sizeFilter = args[++idx]; }
        else if (flag === "-user") { userFilter = args[++idx]; }
        else if (flag === "-mtime") { mtimeDays = parseInt(args[++idx], 10); }
        idx++;
      }

      const rootNode = this.getNode(this.resolvePath(startPath));
      if (!rootNode) return { stdout: "", stderr: `find: '${startPath}': No such file or directory`, code: 1 };

      const results = [];
      const traverse = (node, currentPath) => {
        let match = true;
        if (typeFilter) {
          if (typeFilter === "f" && node.type !== "file") match = false;
          if (typeFilter === "d" && node.type !== "dir") match = false;
        }
        if (userFilter && node.owner !== userFilter) match = false;
        if (namePattern) {
          const reg = new RegExp("^" + namePattern.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$", "i");
          if (!reg.test(node.name)) match = false;
        }

        if (match && currentPath) results.push(currentPath);

        if (node.type === "dir" && node.children) {
          for (const [childName, childNode] of Object.entries(node.children)) {
            traverse(childNode, currentPath ? `${currentPath}/${childName}` : childName);
          }
        }
      };

      traverse(rootNode, startPath === "." ? "." : startPath);
      return { stdout: results.join("\n"), stderr: "", code: 0 };
    }
  }

  // ============================================================================
  // SMART BASH GRADER FOR WEEK 2 (150 QUESTIONS)
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

      // 1. Direct string match
      if (uClean === expClean) {
        return { match: true, message: "A'lo darajada! Buyruq to'liq to'g'ri kiritildi." };
      }

      // 2. Check solutions array
      if (question.solutions && question.solutions.some(s => this.normalize(s) === uClean)) {
        return { match: true, message: "A'lo darajada! Muqobil to'g'ri yechim qabul qilindi." };
      }

      // 3. Dual sandbox execution
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

      // Compare stdout if non-empty
      if (userRes.stdout.trim() && userRes.stdout.trim() === expRes.stdout.trim()) {
        return { match: true, message: "Barakalla! Buyruq natijasi kutilgan natija bilan 100% mos keldi." };
      }

      // Compare FS tree transformation (useradd, chmod, chown, usermod)
      const expFsJson = JSON.stringify(shellExp.root);
      const userFsJson = JSON.stringify(shellUser.root);

      if (expFsJson === userFsJson && shellExp.cwd === shellUser.cwd) {
        return { match: true, message: "A'lo! Tizim holati (ruxsatlar, foydalanuvchilar va fayllar) aniq o'zgardi." };
      }

      return {
        match: false,
        message: `Kutilgan natija hosil bo'lmadi.\nSizning natijangiz: '${userRes.stdout || userRes.stderr || "bo'sh"}'\nKutilayotgan natija: '${expRes.stdout || "tizim holati o'zgarishi"}'`
      };
    }
  };

  // ============================================================================
  // CAREER RANKS & 10 SECTORS FOR WEEK 2
  // ============================================================================

  const careerRanks = [
    { minSolved: 0,   title: "Junior Linux Helpdesk", salary: "$1,500/oy", badge: "🖥️" },
    { minSolved: 15,  title: "Account & PAM Administrator", salary: "$2,800/oy", badge: "🔑" },
    { minSolved: 30,  title: "POSIX Permission & Chmod Lead", salary: "$4,500/oy", badge: "🛡️" },
    { minSolved: 45,  title: "Shared Security & Sticky Bit Officer", salary: "$7,000/oy", badge: "🔒" },
    { minSolved: 60,  title: "Stream & Redirection Engineer", salary: "$10,000/oy", badge: "🌊" },
    { minSolved: 75,  title: "Linux Text Pipeline Specialist", salary: "$13,500/oy", badge: "⚡" },
    { minSolved: 90,  title: "RegEx & Grep Master Investigator", salary: "$17,500/oy", badge: "🔍" },
    { minSolved: 105, title: "Sed & Awk DevOps Automation Lead", salary: "$22,500/oy", badge: "⚙️" },
    { minSolved: 120, title: "Disk Forensics & Storage Admin", salary: "$28,000/oy", badge: "💽" },
    { minSolved: 140, title: "Linux Kernel & DevOps Security Architect", salary: "$35,000/oy", badge: "🐧" }
  ];

  const sectors = [
    {
      sector: 1,
      name: "Foydalanuvchilar Boshqaruvi & Yaratish",
      icon: "👤",
      range: "1 - 15",
      focus: "useradd, adduser, /etc/passwd, /etc/skel",
      badge: "S02 Task 1 • PAM Onboarding"
    },
    {
      sector: 2,
      name: "Foydalanuvchi Sozlamalari & Qulflash",
      icon: "🔑",
      range: "16 - 30",
      focus: "usermod, passwd, -L, -U, -m, -d, -s",
      badge: "S02 Task 1 • Account Security"
    },
    {
      sector: 3,
      name: "Ruxsatlar Matematikasi & Chmod",
      icon: "🛡️",
      range: "31 - 45",
      focus: "chmod 755, 644, 700, 777, +x, -x",
      badge: "S02 Task 2 • Permission Math"
    },
    {
      sector: 4,
      name: "Sticky Bit & Xavfsiz Umumiy Loyihalar",
      icon: "🔒",
      range: "46 - 60",
      focus: "chmod +t, 1777, 1775, /srv/project, chown",
      badge: "S02 Task 3 • Shared Team Storage"
    },
    {
      sector: 5,
      name: "Umask & Standart Xavfsizlik Maskalari",
      icon: "🎭",
      range: "61 - 75",
      focus: "umask 022, 002, 027, umask -S",
      badge: "S02 Task 3 • Default Permission Mask"
    },
    {
      sector: 6,
      name: "Oqimlar, Xatoliklar & Redirection",
      icon: "🌊",
      range: "76 - 90",
      focus: ">, >>, 2>, &>, 2>&1, 2>/dev/null",
      badge: "S02 Task 4 • Stream Routing"
    },
    {
      sector: 7,
      name: "Matn Filtrlash & Saralash",
      icon: "⚡",
      range: "91 - 105",
      focus: "sort, sort -n, uniq, uniq -c, cut -d -f",
      badge: "S02 Task 5 • Text Transformations"
    },
    {
      sector: 8,
      name: "Grep & RegEx Quvvati",
      icon: "🔍",
      range: "106 - 120",
      focus: "grep, -i, -v, -c, -n, -r, -A, -B, -C, -o, -E",
      badge: "S02 Task 6 • Regex Search"
    },
    {
      sector: 9,
      name: "Ilg'or Stream Tahrirlovchilar: Sed & Awk",
      icon: "⚙️",
      range: "121 - 135",
      focus: "sed 's///g', sed '3d', awk '{print $1}', awk -F:",
      badge: "S02 Task 7 • Stream Editors"
    },
    {
      sector: 10,
      name: "Disk Audit & Apache Log Tahlili",
      icon: "📊",
      range: "136 - 150",
      focus: "df -h, du -sh, tar, Apache Log Forensics",
      badge: "S02 Task 8 • Final Systems Audit"
    }
  ];

  const officeEvents = [
    {
      id: "ev1",
      triggerAfterQuestion: 15,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "🚨 Yangi Xodim Bob Onboarding Xatoligi",
      narrative: "Professor Turing terminalga ishora qildi: 'Junior admin Bob'ni uy katalogisiz (-m siz) yaratib qo'yibdi. Bob tizimga kira olmayapti! Qaysi qadam eng xavfsiz va to'g'ri hisoblanadi?'",
      choices: [
        {
          text: "mkdir /home/bob qilib, /etc/skel/. fayllarini ko'chirish, chown -R bob:bob berish va usermod -s /bin/bash bob qilish!",
          correct: true,
          bonus: 600,
          outcome: "A'lo! Bob'ning profili to'liq tiklandi va u ish boshladi! +$600!"
        },
        {
          text: "Barcha foydalanuvchilarga /home/student katalogiga to'liq 777 ruxsatini berish.",
          correct: false,
          bonus: 0,
          outcome: "Turing ogohlantirdi: 'Bu xavfsizlik qoidalariga mutlaqo zid!' "
        }
      ]
    },
    {
      id: "ev2",
      triggerAfterQuestion: 45,
      speaker: "Alice",
      role: "Senior DevOps Lead",
      avatar: "👩‍💻",
      title: "🔒 /srv/project Umumiy Papkasida Mojaro",
      narrative: "DevTeam jamoasi shikoyat qildi: 'Kimdir boshqa dasturchining kodini o'chirib yuborishi mumkin bo'lgan holat yuzaga keldi!' Papkani qanday himoyalash kerak?",
      choices: [
        {
          text: "chmod 1775 /srv/project buyrug'i bilan Sticky bit (+t) o'rnatish: faqat fayl egasi yoki root o'z faylini o'chira oladi!",
          correct: true,
          bonus: 800,
          outcome: "Alice olqishladi: 'Aynan shunday! Sticky bit umumiy papkalarning oltin qoidasidir!' +$800!"
        },
        {
          text: "Papkani faqat 700 qilib, barcha jamoa a'zolarini chetlashtirish.",
          correct: false,
          bonus: 0,
          outcome: "Jamoa birga ishlay olmay qoldi."
        }
      ]
    },
    {
      id: "ev3",
      triggerAfterQuestion: 75,
      speaker: "Bobur",
      role: "NOC Monitoring Lead",
      avatar: "👨‍💻",
      title: "⚡ Cron Skript Xatolari Loglarni Toshirdi",
      narrative: "Tungi cron skripti minglab xatolik xabarlarini ekranga chiqarib terminalni to'ldirib yubormoqda. Xatolik oqimini (stderr) qayerga yo'naltirish kerak?",
      choices: [
        {
          text: "2> /dev/null yoki 2>> /var/log/cron_errors.log orqali xatoliklarni alohida oqimga yo'naltirish!",
          correct: true,
          bonus: 1000,
          outcome: "Tizim ekrani toza holatga keltirildi, xatolar esa audit uchun faylga yozildi! +$1000!"
        },
        {
          text: "Cron xizmatini butunlay o'chirib tashlash.",
          correct: false,
          bonus: 0,
          outcome: "Tizim avtomatik rejalashtirishdan mahrum bo'ldi."
        }
      ]
    },
    {
      id: "ev4",
      triggerAfterQuestion: 115,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "🔍 Apache Logida Shubhali IP Hujumi",
      narrative: "Professor Turing ekranidagi Apache logini ko'rsatdi: 'Qaysidir IP bir necha soniyada yuzlab POST so'rovlar yuborgan. Eng ko'p so'rov yuborgan top 5 IP ni qanday topamiz?'",
      choices: [
        {
          text: "grep -oE '^[0-9.]+' apache_logs.txt | sort | uniq -c | sort -nr | head -5",
          correct: true,
          bonus: 1500,
          outcome: "Turing tabassum qildi: 'Linux stream quvvati aynan mana shunda! Hujumchi IP aniqlandi!' +$1500!"
        },
        {
          text: "Log faylni qo'lda ochib, ko'z bilan bittalab sanab chiqish.",
          correct: false,
          bonus: 0,
          outcome: "Millionta satrli logda bu imkonsiz!"
        }
      ]
    },
    {
      id: "ev5",
      triggerAfterQuestion: 140,
      speaker: "Professor Turing",
      role: "WIUT Tizim Guruhi",
      avatar: "🐧",
      title: "🎓 Linux Kernel & DevOps Litsenziyasi",
      narrative: "Professor Turing imtihon varag'ini uzatdi: 'Kernel mode va User mode o'rtasidagi farq tizimni qanday himoya qiladi?'",
      choices: [
        {
          text: "CPU apparat darajasida faqat Kernel rejimida imtiyozli buyruqlar (taymer, xotira, I/O) ni bajaradi, user dasturlar esa tizimni buzolmaydi!",
          correct: true,
          bonus: 2500,
          outcome: "Tabriklaymiz! Siz 2-hafta dasturini a'lo baho bilan yakunladingiz! +$2500!"
        },
        {
          text: "Faqat fayllar nomini o'zgartirish orqali.",
          correct: false,
          bonus: 0,
          outcome: "Bu nazariy jihatdan noto'g'ri."
        }
      ]
    }
  ];

  window.VIRTUAL_LINUX_W2 = {
    VirtualLinuxShell,
    BASH_GRADER,
    careerRanks,
    sectors,
    officeEvents
  };
})();
