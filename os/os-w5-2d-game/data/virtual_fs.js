/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 VIRTUAL FILE SYSTEM & SHELL EMULATOR
 * Architecture: CPU Scheduler, Memory Paging/MMU, Crontab, Systemd Timers & Docker Pods.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VIRTUAL_LINUX_W5 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  // 10 Progressive DevOps & System Architect Ranks
  const CAREER_RANKS = [
    { threshold: 0,   title: "Junior Container Trainee",      salary: "$2,200/oy", color: "cyan" },
    { threshold: 15,  title: "Process Scheduler Technician",  salary: "$2,800/oy", color: "cyan" },
    { threshold: 30,  title: "Memory Hardware Analyst",       salary: "$3,600/oy", color: "emerald" },
    { threshold: 45,  title: "Paging & MMU Specialist",       salary: "$4,500/oy", color: "emerald" },
    { threshold: 60,  title: "TLB & Performance Engineer",    salary: "$5,800/oy", color: "emerald" },
    { threshold: 75,  title: "Cron & Automation Specialist",  salary: "$7,200/oy", color: "amber" },
    { threshold: 90,  title: "Systemd Infrastructure Engineer",salary: "$9,000/oy", color: "amber" },
    { threshold: 105, title: "DevOps Monitoring Specialist",  salary: "$11,500/oy", color: "violet" },
    { threshold: 120, title: "Docker Platform Engineer",      salary: "$14,000/oy", color: "violet" },
    { threshold: 135, title: "Principal Cloud & Kernel Architect", salary: "$18,500/oy", color: "gold" }
  ];

  // 10 Pedagogical Sectors
  const SECTORS = [
    { id: 1,  range: "1–15",    name: "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)", icon: "⏱️" },
    { id: 2,  range: "16–30",   name: "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)", icon: "🧠" },
    { id: 3,  range: "31–45",   name: "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)", icon: "🧩" },
    { id: 4,  range: "46–60",   name: "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)", icon: "📄" },
    { id: 5,  range: "61–75",   name: "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)", icon: "⚡" },
    { id: 6,  range: "76–90",   name: "Crontab Davriy Rejalashtirish Muhandisligi", icon: "⏰" },
    { id: 7,  range: "91–105",  name: "Systemd Timerlar & Xizmat Unitlari (.service, .timer)", icon: "⚙️" },
    { id: 8,  range: "106–120", name: "Disk Monitoring & Telegram Alert Avtomatlashtirish", icon: "📊" },
    { id: 9,  range: "121–135", name: "Docker Klasteri O'rnatish & Asosiy Buyruqlar", icon: "🐳" },
    { id: 10, range: "136–150", name: "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi", icon: "🌐" }
  ];

  // 5 Real-world Cloud & Server Incidents
  const EMERGENCY_EVENTS = [
    {
      id: "event_srtf_preempt",
      title: "🚨 Yuqori Ustuvorlikdagi SRTF Jarayoni Keldi!",
      speaker: "PROFESSOR TURING",
      desc: "P1 jarayoni (Burst: 4ms) Time=1ms da keldi. P0 (Qoldiq: 8ms) CPU ni bo'shatishi shart. Preemption ro'y bermasa, o'rtacha kutish vaqti yomonlashadi!",
      solution: "SRTF algoritmiga ko'ra P0 to'xtatilib, P1 ga CPU topshiriladi. Kutish vaqti: 5.0 ms."
    },
    {
      id: "event_tlb_miss_storm",
      title: "⚠️ TLB Keshi Bo'shab Qoldi (Cold Miss Storm)",
      speaker: "KERNEL MONITOR",
      desc: "Kontekst almashishda ASID belgilanmaganligi sababli TLB to'liq tozalandi. Hit ratio 95% dan 20% ga tushib ketdi!",
      solution: "ASID (Address-Space ID) orqali keshni saqlab qolish va Effective Access Time (EAT) ni normallashtirish zarur."
    },
    {
      id: "event_cron_typo",
      title: "🔥 Crontab da 'crontab -r' Adashuvi Xavfi!",
      speaker: "DEVOPS LEAD",
      desc: "Junior admin 'crontab -e' (edit) o'rniga adashib 'crontab -r' (remove) buyrug'ini yozish arafasida. Tizim rejalari yo'qolib ketmasligi kerak!",
      solution: "Crontab fayli zaxirasini /var/spool/cron dan olish yoki har doim xavfsiz git omborida saqlash lozim."
    },
    {
      id: "event_disk_threshold",
      title: "🚨 Asosiy Disk '/' To'lib Qoldi (Usage: 91%)!",
      speaker: "TELEGRAM MONITOR BOT",
      desc: "Root bo'limi 85% dan oshdi. Avtomatlashtirilgan disk_monitor.sh skripti orqali zudlik bilan Telegram botga xabar jo'natilishi kerak!",
      solution: "curl -s -X POST orqali Telegram API ga ogohlantirish yuboriladi va /tmp dagi eski fayllar tozalanadi."
    },
    {
      id: "event_docker_port_conflict",
      title: "🐳 Docker Port To'qnashuvi (:80 allaqachon band)",
      speaker: "DOCKER DAEMON",
      desc: "Xostdagi 80-portda Apache ishlamoqda. Nginx konteynerini to'g'ridan-to'g'ri :80 ga ulab bo'lmaydi!",
      solution: "Port forwarding orqali -p 8888:80 sozlanadi va veb-server localhost:8888 orqali xavfsiz ochiladi."
    }
  ];

  // Virtual State Data
  const INITIAL_VIRTUAL_STATE = {
    currentUser: "student",
    currentHost: "kali",
    currentDir: "/home/student/os_lab5",
    cronRunning: true,
    cronJobs: [
      "*/5 * * * * /bin/bash /usr/local/bin/disk_monitor.sh >> /var/log/disk_monitor.log 2>&1",
      "0 1 * * * /usr/bin/find /tmp -type f -mtime +1 -delete"
    ],
    systemdTimers: [
      { unit: "disk-check.timer", service: "disk-check.service", schedule: "*:0/5", state: "active (waiting)", persistent: true },
      { unit: "cleanup.timer", service: "cleanup.service", schedule: "*-*-* 01:00:00", state: "active (waiting)", persistent: true }
    ],
    dockerContainers: [
      { id: "670e2bde00a9", name: "my-ubuntu", image: "ubuntu:22.04", status: "Up 2 hours", ports: "-" },
      { id: "9a4f210c8888", name: "nginx8888", image: "nginx:alpine", status: "Up 45 minutes", ports: "0.0.0.0:8888->80/tcp" },
      { id: "1c82b09a7777", name: "redis-cache", image: "redis:7-alpine", status: "Exited (0) 10 minutes ago", ports: "-" }
    ],
    dockerImages: [
      { repository: "ubuntu", tag: "22.04", imageId: "597ce5b4320c", size: "77.8MB" },
      { repository: "nginx", tag: "alpine", imageId: "3e5a2c918301", size: "23.5MB" },
      { repository: "hello-world", tag: "latest", imageId: "d2c94e258dcb", size: "13.3kB" }
    ],
    schedulingQueue: [
      { pid: "P0", arrival: 0, burst: 9, remaining: 0, comp: 13, tat: 13, wait: 4 },
      { pid: "P1", arrival: 1, burst: 4, remaining: 0, comp: 5,  tat: 4,  wait: 0 },
      { pid: "P2", arrival: 2, burst: 9, remaining: 0, comp: 22, tat: 20, wait: 11 }
    ],
    memoryPaging: {
      pageSize: 2048,
      processSize: 72766,
      requiredPages: 36,
      internalFragmentation: 962,
      tlbHitRatio: "85%",
      eatTime: "11.5 ns"
    }
  };

  /**
   * Virtual Linux Shell Engine for Week 5
   */
  class VirtualLinuxShell {
    constructor() {
      this.state = JSON.parse(JSON.stringify(INITIAL_VIRTUAL_STATE));
      this.history = [];
      this.cwd = "/home/student";
      this.isRoot = false;
      this.user = "student";
      this.root = { name: "/", type: "dir", inode: 1, permissions: "drwxr-xr-x", links: 2, owner: "root", group: "root", children: {} };
    }

    
    getNode(absPath) {
      const p = String(absPath || "/home/student");
      const name = p === "/" ? "/" : (p.split("/").filter(Boolean).pop() || "student");
      return {
        name: name,
        type: "dir",
        inode: 1001,
        permissions: "drwxr-xr-x",
        links: 2,
        owner: "student",
        group: "student",
        children: {
          "readme.txt": { name: "readme.txt", type: "file", inode: 1002, permissions: "-rw-r--r--", links: 1, owner: "student", group: "student", content: "WIUT OS Lab Module " + 5 }
        }
      };
    }

    resolvePath(p) {
      if (!p || p === ".") return this.cwd || "/home/student";
      if (p.startsWith("/")) return p;
      return (this.cwd || "/home/student").replace(/\/+$/, "") + "/" + p;
    }

    execute(cmdString) {
      const raw = (cmdString || "").trim();
      if (!raw) return { stdout: "", stderr: "", code: 0 };

      this.history.push(raw);

      // 1. Crontab commands
      if (raw === "crontab -l") {
        const out = "# Crontab for student (OS Lab 5 Automation)\n" + this.state.cronJobs.join("\n");
        return { stdout: out, stderr: "", code: 0 };
      }
      if (raw === "crontab -e") {
        return { stdout: "crontab: installing new crontab for student\n~ Edit session simulated: 2 active cron jobs verified.", stderr: "", code: 0 };
      }
      if (raw.startsWith("crontab -r")) {
        return { stdout: "crontab: all crontabs removed for user student (Simulated warning: Use -e next time!)", stderr: "", code: 0 };
      }

      // 2. Systemd and Systemctl commands
      if (raw === "systemctl status cron" || raw === "systemctl status crond") {
        return {
          stdout: "● cron.service - Regular background program processing daemon\n     Loaded: loaded (/lib/systemd/system/cron.service; enabled; preset: enabled)\n     Active: active (running) since Wed 2026-10-14 02:00:00 UZT; 1h ago\n   Main PID: 742 (cron)\n      Tasks: 1 (limit: 4661)\n     Memory: 2.1M\n        CPU: 142ms\n     CGroup: /system.slice/cron.service\n             └─742 /usr/sbin/cron -f -P",
          stderr: "",
          code: 0
        };
      }

      if (raw.includes("systemctl enable --now disk-check.timer") || raw.includes("systemctl enable --now cleanup.timer")) {
        return {
          stdout: "Created symlink /etc/systemd/system/timers.target.wants/disk-check.timer → /etc/systemd/system/disk-check.timer.\n● Timer activated immediately (--now applied).",
          stderr: "",
          code: 0
        };
      }

      if (raw.includes("systemctl start disk-check.timer") || raw.includes("systemctl start cleanup.timer")) {
        return { stdout: "● Timer started successfully.", stderr: "", code: 0 };
      }

      if (raw.includes("systemctl status disk-check.timer")) {
        return {
          stdout: "● disk-check.timer - Run Disk Usage Check Every 5 Minutes\n     Loaded: loaded (/etc/systemd/system/disk-check.timer; enabled)\n     Active: active (waiting) since Wed 2026-10-14 02:10:00 UZT\n    Trigger: Wed 2026-10-14 02:15:00 UZT; 3min left\n   Triggers: ● disk-check.service",
          stderr: "",
          code: 0
        };
      }

      if (raw === "sudo systemctl daemon-reload" || raw === "systemctl daemon-reload") {
        return { stdout: "Systemd daemon reloaded. Unit files re-parsed from disk successfully.", stderr: "", code: 0 };
      }

      if (raw.startsWith("systemd-analyze verify")) {
        return { stdout: "/etc/systemd/system/cleanup.service: verified (0 syntax errors, 0 warnings).", stderr: "", code: 0 };
      }

      if (raw.startsWith("journalctl -u")) {
        return {
          stdout: "-- Journal begins at Mon 2026-10-12 08:00:00 UZT. --\nOct 14 02:10:00 wiut-srv05 systemd[1]: Started Run Disk Usage Check Every 5 Minutes.\nOct 14 02:15:00 wiut-srv05 disk_monitor.sh[2914]: Usage normal (64%).",
          stderr: "",
          code: 0
        };
      }

      // 3. Disk check & Telegram script commands
      if (raw.includes("df / --output=pcent") || raw.includes("df / -P")) {
        if (raw.includes("tail") && raw.includes("tr")) {
          return { stdout: "64", stderr: "", code: 0 };
        }
        return { stdout: "Use%\n 64%", stderr: "", code: 0 };
      }

      if (raw.includes("curl") && raw.includes("api.telegram.org")) {
        return {
          stdout: '{"ok":true,"result":{"message_id":412,"chat":{"id":987654321,"title":"DevOps Alerts"},"text":"ALERT: High Disk Usage on wiut-srv05 Time: 2026-10-14 02:15:00 Current Usage: 87%"}}',
          stderr: "",
          code: 0
        };
      }

      if (raw === "./disk_monitor.sh" || raw === "/usr/local/bin/disk_monitor.sh") {
        return { stdout: "[OK] Disk usage checked: 64% (Threshold: 85%). No alert needed.", stderr: "", code: 0 };
      }

      // 4. Docker CLI commands
      if (raw === "docker container ls" || raw === "docker ps") {
        const out = "CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS                  NAMES\n" +
                    "670e2bde00a9   ubuntu:22.04   \"bash\"                   2 hours ago     Up 2 hours                            my-ubuntu\n" +
                    "9a4f210c8888   nginx:alpine   \"/docker-entrypoint.…\"   45 minutes ago  Up 45 minutes  0.0.0.0:8888->80/tcp   nginx8888";
        return { stdout: out, stderr: "", code: 0 };
      }

      if (raw === "docker container ls -a" || raw === "docker ps -a") {
        const out = "CONTAINER ID   IMAGE            COMMAND                  CREATED         STATUS                      PORTS                  NAMES\n" +
                    "670e2bde00a9   ubuntu:22.04     \"bash\"                   2 hours ago     Up 2 hours                                         my-ubuntu\n" +
                    "9a4f210c8888   nginx:alpine     \"/docker-entrypoint.…\"   45 minutes ago  Up 45 minutes               0.0.0.0:8888->80/tcp   nginx8888\n" +
                    "1c82b09a7777   redis:7-alpine   \"docker-entrypoint.s…\"   3 hours ago     Exited (0) 10 minutes ago                          redis-cache";
        return { stdout: out, stderr: "", code: 0 };
      }

      if (raw.includes("docker container run") || raw.includes("docker run")) {
        const newId = "d4e81a" + Math.floor(100000 + Math.random() * 900000);
        return { stdout: newId, stderr: "", code: 0 };
      }

      if (raw.includes("docker container exec -it") || raw.includes("docker exec -it")) {
        return { stdout: "root@670e2bde00a9:/# uname -a\nLinux 670e2bde00a9 6.1.0-18-amd64 #1 SMP PREEMPT_DYNAMIC Debian x86_64 GNU/Linux\nroot@670e2bde00a9:/# exit", stderr: "", code: 0 };
      }

      if (raw.includes("docker container logs") || raw.includes("docker logs")) {
        return {
          stdout: "192.168.1.50 - - [14/Oct/2026:02:18:22 +0500] \"GET / HTTP/1.1\" 200 615 \"-\" \"curl/7.88.1\"\n2026/10/14 02:18:22 [notice] 1#1: start worker processes",
          stderr: "",
          code: 0
        };
      }

      if (raw.includes("curl localhost:8888") || raw.includes("curl http://localhost:8888")) {
        return {
          stdout: "<!DOCTYPE html>\n<html>\n<head><title>Welcome to nginx!</title></head>\n<body>\n<h1>Welcome to nginx inside Docker!</h1>\n<p>Port 8888 successfully mapped to container port 80.</p>\n</body>\n</html>",
          stderr: "",
          code: 0
        };
      }

      if (raw === "docker stats --no-stream" || raw === "docker stats") {
        return {
          stdout: "CONTAINER ID   NAME        CPU %     MEM USAGE / LIMIT     MEM %     NET I/O           BLOCK I/O   PIDS\n670e2bde00a9   my-ubuntu   0.02%     12.4MiB / 7.68GiB     0.16%     1.2kB / 840B      0B / 0B     2\n9a4f210c8888   nginx8888   0.05%     18.6MiB / 7.68GiB     0.24%     4.8kB / 3.2kB     0B / 0B     4",
          stderr: "",
          code: 0
        };
      }

      if (raw.startsWith("docker container stop") || raw.startsWith("docker stop")) {
        const name = raw.split(" ").pop();
        return { stdout: name, stderr: "", code: 0 };
      }

      if (raw.startsWith("docker container start") || raw.startsWith("docker start")) {
        const name = raw.split(" ").pop();
        return { stdout: name, stderr: "", code: 0 };
      }

      if (raw.startsWith("docker container rename")) {
        return { stdout: "Container renamed successfully.", stderr: "", code: 0 };
      }

      if (raw.startsWith("docker container rm") || raw.startsWith("docker rm")) {
        const name = raw.split(" ").pop();
        return { stdout: name, stderr: "", code: 0 };
      }

      if (raw === "docker images" || raw === "docker image ls") {
        const out = "REPOSITORY   TAG       IMAGE ID       CREATED        SIZE\n" +
                    "ubuntu       22.04     597ce5b4320c   3 weeks ago    77.8MB\n" +
                    "nginx        alpine    3e5a2c918301   2 weeks ago    23.5MB\n" +
                    "hello-world  latest    d2c94e258dcb   5 months ago   13.3kB";
        return { stdout: out, stderr: "", code: 0 };
      }

      if (raw.includes("usermod -aG docker")) {
        return { stdout: "User added to group 'docker'. Run 'newgrp docker' or relogin to activate non-root docker rights.", stderr: "", code: 0 };
      }

      
      // Kali commands: vim, nano, sudo, uname, apt
      if (raw.startsWith("vim") || raw.startsWith("vi ") || raw.startsWith("nano") || raw === "vi") {
        const parts = raw.split(/\s+/);
        const editor = parts[0] || "vim";
        const filename = parts.slice(1).join(" ") || "script.sh";
        return {
          stdout: "~\n~   [" + editor.toUpperCase() + " - Kali GNU/Linux Text Editor]\n~   Fayl ochildi: " + filename + "\n~   ------------------------------------------------------------\n~   # Kali Linux matn muharriri\n~   # Tahrirlash: :i | Saqlash va chiqish: :wq | Chiqish: :q\n~   ------------------------------------------------------------\n~\n\"" + filename + "\" [Yangi fayl yaratildi va saqlandi: :wq]",
          stderr: "",
          code: 0
        };
      }
      if (raw.startsWith("sudo ")) {
        const inner = raw.replace(/^sudo\s+/, "");
        return this.execute(inner);
      }
      if (raw === "sudo" || raw === "sudo -h") {
        return { stdout: "usage: sudo -h | -K | -k | -V\nusage: sudo [command [arg ...]]", stderr: "", code: 0 };
      }
      if (raw === "uname" || raw === "uname -a" || raw === "uname -r") {
        return { stdout: "Linux kali 6.1.0-kali-amd64 #1 SMP PREEMPT_DYNAMIC Debian 6.1.76-1 (2024-02-01) x86_64 GNU/Linux", stderr: "", code: 0 };
      }
      if (raw.includes("apt update") || raw.includes("apt-get update")) {
        return {
          stdout: "Hit:1 http://http.kali.org/kali kali-rolling InRelease\nGet:2 http://http.kali.org/kali kali-rolling/main amd64 Packages [19.2 MB]\nFetched 19.4 MB in 1s (19.4 MB/s)\nReading package lists... Done\nBuilding dependency tree... Done\nAll packages are up to date.",
          stderr: "",
          code: 0
        };
      }
      if (raw.includes("apt install") || raw.includes("apt-get install")) {
        const pkg = raw.split(" ").filter(w => !["sudo", "apt", "apt-get", "install", "-y"].includes(w)).pop() || "tools";
        return {
          stdout: "Reading package lists... Done\nBuilding dependency tree... Done\nThe following NEW packages will be installed: " + pkg + "\nSetting up " + pkg + " (latest) ...\nProcessing triggers for man-db ... Done",
          stderr: "",
          code: 0
        };
      }

      // 5. Standard utility commands
      if (raw === "whoami") return { stdout: this.state.currentUser, stderr: "", code: 0 };
      if (raw === "pwd") return { stdout: this.state.currentDir, stderr: "", code: 0 };
      if (raw === "hostname") return { stdout: this.state.currentHost, stderr: "", code: 0 };
      if (raw === "date") return { stdout: "Wed Oct 14 02:20:00 UZT 2026", stderr: "", code: 0 };
      if (raw === "clear") return { stdout: "\x1b[2J\x1b[H", stderr: "", code: 0 };

      // Default fallback
      return { stdout: `Executed: ${raw} (exit code 0)`, stderr: "", code: 0 };
    }
  }

  /**
   * BASH_GRADER — Evaluates user input against expected canonical answers.
   */
  const BASH_GRADER = {
    evaluate: function (question, rawInput) {
      if (!question || !rawInput) return false;
      const input = rawInput.trim();

      // Direct exact match
      if (input === question.canonical) return true;

      // Accepted alternatives
      if (Array.isArray(question.accepted)) {
        for (const alt of question.accepted) {
          if (typeof alt === "string" && input === alt.trim()) return true;
          if (alt instanceof RegExp && alt.test(input)) return true;
        }
      }

      // Normalized command comparison
      const normInput = input.replace(/\s+/g, " ").replace(/["']/g, "'").trim();
      const normCanon = question.canonical.replace(/\s+/g, " ").replace(/["']/g, "'").trim();
      if (normInput === normCanon) return true;

      // Regex matching if provided
      if (question.pattern) {
        try {
          const re = new RegExp(question.pattern, "i");
          if (re.test(input)) return true;
        } catch (e) {
          // ignore invalid pattern
        }
      }

      return false;
    }
  };

  return {
    CAREER_RANKS,
    careerRanks: CAREER_RANKS,
    SECTORS,
    sectors: SECTORS,
    EMERGENCY_EVENTS,
    officeEvents: EMERGENCY_EVENTS,
    INITIAL_VIRTUAL_STATE,
    VirtualLinuxShell,
    BASH_GRADER
  };
});
