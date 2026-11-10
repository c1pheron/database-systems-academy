/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 7 VIRTUAL SYSTEM & SHELL EMULATOR
 * Architecture: File Systems, Inodes, Virtual Memory, Page Tables & Docker Compose.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VIRTUAL_LINUX_W7 = root.VIRTUAL_LINUX = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const CAREER_RANKS = [
    { threshold: 0,   title: "Junior Storage & Container Trainee", salary: "$2,600/oy", color: "cyan" },
    { threshold: 15,  title: "Inode & Link Investigator",         salary: "$3,400/oy", color: "cyan" },
    { threshold: 30,  title: "Filesystem Allocation Specialist",   salary: "$4,400/oy", color: "emerald" },
    { threshold: 45,  title: "Page Table & EAT Architect",         salary: "$5,600/oy", color: "emerald" },
    { threshold: 60,  title: "Page Replacement (LRU/OPT) Lead",    salary: "$7,000/oy", color: "emerald" },
    { threshold: 75,  title: "Thrashing & Working-Set Engineer",   salary: "$8,800/oy", color: "amber" },
    { threshold: 90,  title: "Docker Multistage Specialist",       salary: "$11,000/oy", color: "amber" },
    { threshold: 105, title: "Container Network & Volume Architect",salary: "$13,500/oy", color: "violet" },
    { threshold: 120, title: "Docker Compose Orchestrator",        salary: "$16,500/oy", color: "violet" },
    { threshold: 135, title: "Principal Linux Systems & Cloud CTO",salary: "$22,000/oy", color: "gold" }
  ];

  const SECTORS = [
    { id: 1,  range: "1–15",    name: "Fayl Tizimi & Inode Metadata Tahlili", icon: "📁" },
    { id: 2,  range: "16–30",   name: "Qattiq va Simvolik Havolalar (ln vs ln -s)", icon: "🔗" },
    { id: 3,  range: "31–45",   name: "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi", icon: "💾" },
    { id: 4,  range: "46–60",   name: "Virtual Xotira Matematikasi (Page Table & TLB)", icon: "📐" },
    { id: 5,  range: "61–75",   name: "Sahifa Almashtirish (FIFO, LRU, OPT) & Thrashing", icon: "🔄" },
    { id: 6,  range: "76–90",   name: "Docker Multistage Qurilishi & Yengil Obrazlar", icon: "🐳" },
    { id: 7,  range: "91–105",  name: "Docker Tarmoqlari (Bridge, Host & DNS)", icon: "🌐" },
    { id: 8,  range: "106–120", name: "Docker Doimiy Hajmlari (Volumes & Mounts)", icon: "📦" },
    { id: 9,  range: "121–135", name: "Docker Compose Sintaksisi & Konfiguratsiya", icon: "⚙️" },
    { id: 10, range: "136–150", name: "Docker Compose Multi-Container (Web + DB) Boshqaruvi", icon: "🚀" }
  ];

  const EMERGENCY_EVENTS = [
    {
      id: "evt_inode_exhaustion",
      title: "🚨 Inode lar Tugadi: Diskda Joy Bor, Lekin Fayl Yaratib Bo'lmaydi!",
      speaker: "PROFESSOR TURING",
      desc: "Kompaniya serverida df -h 50% bo'sh joyni ko'rsatmoqda, biroq yangi fayl yozishda 'No space left on device' xatosi chiqdi! df -i orqali barcha inodelar millionlab mayda sessiya fayllari bilan to'lganligi aniqlandi.",
      solution: "find /var/spool -type f -delete orqali eskirgan mayda fayllar tozalanadi va inodelar zaxirasi bo'shatiladi."
    },
    {
      id: "evt_broken_symlink",
      title: "⚠️ Buzilgan Simvolik Havola (Dangling Symlink) Aniqlangan!",
      speaker: "STORAGE MONITOR",
      desc: "Asosiy ma'lumotlar bazasi konfiguratsiya fayli boshqa papkaga ko'chirilganda unga qaratilgan soft link qizil miltillab, 'No such file or directory' xatosi berdi.",
      solution: "ln -sf yangi_manzil havola_nomi orqali simvolik havola nishoni yangilanadi."
    },
    {
      id: "evt_compose_net_split",
      title: "🔥 Docker Compose: Web Ilova DB Konteynerini Topa Olmadi!",
      speaker: "DEVOPS ENGINEER",
      desc: "Web ilova bazaga 'localhost:5432' orqali ulanishga urindi, biroq alohida konteynerlarda localhost umumiy emas!",
      solution: "Docker Compose ichki DNS tarmog'ida servis nomi (masalan, host: 'db') orqali ulanish o'rnatiladi."
    }
  ];

  const INITIAL_VIRTUAL_STATE = {
    currentUser: "student",
    currentHost: "debian12",
    currentDir: "/home/student/workspace",
    files: {
      "file1.txt": { inode: 104521, size: 1024, links: 1, type: "file" },
      "app.py": { inode: 104522, size: 2048, links: 1, type: "file" },
      "docker-compose.yml": { inode: 104523, size: 512, links: 1, type: "file" }
    }
  };

  class VirtualLinuxShell {
    constructor() {
      this.currentDir = "/home/student/workspace";
    }
    execute(cmd) {
      const clean = cmd.trim();
      return { output: "Buyruq muvaffaqiyatli bajarildi: " + clean, exitCode: 0 };
    }
  }

  const BASH_GRADER = {
    evaluate(question, userInput, shellResult) {
      if (!question || !userInput) return false;
      const user = String(userInput).trim().toLowerCase();
      const canonical = String(question.canonical || "").trim().toLowerCase();
      if (user === canonical) return true;
      if (Array.isArray(question.accepted)) {
        for (const item of question.accepted) {
          if (user === String(item).trim().toLowerCase()) return true;
        }
      }
      return false;
    }
  };

  return {
    CAREER_RANKS,
    SECTORS,
    EMERGENCY_EVENTS,
    INITIAL_VIRTUAL_STATE,
    VirtualLinuxShell,
    BASH_GRADER
  };
});
