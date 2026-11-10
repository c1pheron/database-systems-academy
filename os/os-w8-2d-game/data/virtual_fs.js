/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 8 VIRTUAL SYSTEM & SHELL EMULATOR
 * Architecture: Process Synchronization, Race Conditions, Mutex, Semaphores & Python Threads.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VIRTUAL_LINUX_W8 = root.VIRTUAL_LINUX = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const CAREER_RANKS = [
    { threshold: 0,   title: "Junior Concurrency Trainee",        salary: "$2,800/oy", color: "cyan" },
    { threshold: 15,  title: "Race Condition Debugger",          salary: "$3,600/oy", color: "cyan" },
    { threshold: 30,  title: "Critical Section Analyst",          salary: "$4,600/oy", color: "emerald" },
    { threshold: 45,  title: "Peterson Algorithm Specialist",     salary: "$5,800/oy", color: "emerald" },
    { threshold: 60,  title: "Python Threading & Lock Engineer",  salary: "$7,500/oy", color: "emerald" },
    { threshold: 75,  title: "Counting Semaphore Architect",      salary: "$9,200/oy", color: "amber" },
    { threshold: 90,  title: "Condition Variable Specialist",     salary: "$11,500/oy", color: "amber" },
    { threshold: 105, title: "Bounded Buffer & Queue Lead",       salary: "$14,000/oy", color: "violet" },
    { threshold: 120, title: "Dining Philosophers & Barrier Lead", salary: "$17,000/oy", color: "violet" },
    { threshold: 135, title: "Principal Concurrency & Kernel CTO",salary: "$23,000/oy", color: "gold" }
  ];

  const SECTORS = [
    { id: 1,  range: "1–15",    name: "Parallel Bajarilish & Poyga Holati (Race Condition)", icon: "⚡" },
    { id: 2,  range: "16–30",   name: "Kritik Bo'lim (Critical Section) & 3 ta Shart", icon: "🛡️" },
    { id: 3,  range: "31–45",   name: "Dasturiy Yechimlar: Peterson Algoritmi & TestAndSet", icon: "📐" },
    { id: 4,  range: "46–60",   name: "Python Threading Asoslari: Thread Yaratish & join()", icon: "🐍" },
    { id: 5,  range: "61–75",   name: "Mutex Qulf: threading.Lock() & with lock: Konteksti", icon: "🔒" },
    { id: 6,  range: "76–90",   name: "Sanoqli Semaphorlar: threading.Semaphore(value)", icon: "🚥" },
    { id: 7,  range: "91–105",  name: "Shartli O'zgaruvchilar: threading.Condition() & wait()", icon: "🔔" },
    { id: 8,  range: "106–120", name: "Bounded Buffer (Producer-Consumer) Muammosi", icon: "📦" },
    { id: 9,  range: "121–135", name: "Sinxronizatsiya Bariyerlari: threading.Barrier & Event", icon: "🚧" },
    { id: 10, range: "136–150", name: "Readers-Writers & Dining Philosophers Klassik Sinovlari", icon: "🍽️" }
  ];

  const EMERGENCY_EVENTS = [
    {
      id: "evt_shared_counter_corrupt",
      title: "🚨 Umumiy Hisoblagich Korruptsiyasi (Counter Race Condition)!",
      speaker: "PROFESSOR TURING",
      desc: "4 ta oqim har biri 10,000 marta shared[0] += 1 bajardi, kutilgan natija 40,000 bo'lishi kerak edi. Biroq himoyalanmagan bo'lgani sababli natija 27,432 bo'lib qoldi!",
      solution: "O'zgaruvchini 'with lock:' yoki threading.Lock() bilan o'rab, o'qish-o'zgartirish-yozish qadamlarini atomik qilish zarur."
    },
    {
      id: "evt_busy_waiting_cpu_spike",
      title: "⚠️ Band Kutish (Busy Waiting / Spinlock) CPU ni 100% ga Chiqardi!",
      speaker: "KERNEL SCHEDULER",
      desc: "Oqim shart bajarilishini 'while condition: pass' orqali kutdi. CPU boshqa oqimlarga vaqt ajrata olmasdan qizib ketdi.",
      solution: "Band kutish o'rniga threading.Condition() yoki Semaphore kutishidan foydalanib, oqimni uxlatish (sleep/block) lozim."
    },
    {
      id: "evt_philosophers_starvation",
      title: "🍽️ Faylasuflar Tushligi: Barcha Faylasuflar O'ng Vilkani Ushlab Qoldi!",
      speaker: "RESOURCE MONITOR",
      desc: "Barcha 5 ta faylasuf bir vaqtda o'ng vilkani oldi va chap vilkani kutmoqda. Hech kim ovqatlana olmayapti (Circular Wait)!",
      solution: "Resurslar ierarxiyasi yoki kamida bitta faylasuf vilkalarni teskari tartibda olishini ta'minlash orqali sikl buziladi."
    }
  ];

  const INITIAL_VIRTUAL_STATE = {
    currentUser: "student",
    currentHost: "debian12",
    currentDir: "/home/student/synchronization",
    files: {
      "01_threads.py": { size: 1024, type: "file" },
      "02_race_condition.py": { size: 1536, type: "file" },
      "03_mutex_lock.py": { size: 2048, type: "file" },
      "04_semaphore.py": { size: 1800, type: "file" },
      "05_producer_consumer.py": { size: 2500, type: "file" }
    }
  };

  class VirtualLinuxShell {
    constructor() {
      this.currentDir = "/home/student/synchronization";
    }
    execute(cmd) {
      const clean = cmd.trim();
      return { output: "Python skripti muvaffaqiyatli bajarildi: " + clean, exitCode: 0 };
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
