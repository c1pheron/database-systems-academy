/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 9 VIRTUAL SYSTEM & SHELL EMULATOR
 * Architecture: Deadlocks, Coffman Conditions, Banker's Algorithm & Resource Allocation Graphs.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.VIRTUAL_LINUX_W9 = root.VIRTUAL_LINUX = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const CAREER_RANKS = [
    { threshold: 0,   title: "Deadlock Detection Trainee",         salary: "$3,000/oy", color: "cyan" },
    { threshold: 15,  title: "Coffman Conditions Auditor",         salary: "$3,800/oy", color: "cyan" },
    { threshold: 30,  title: "Resource Allocation Graph Engineer", salary: "$4,800/oy", color: "emerald" },
    { threshold: 45,  title: "Deadlock Prevention Specialist",      salary: "$6,200/oy", color: "emerald" },
    { threshold: 60,  title: "Safe State & Avoidance Analyst",     salary: "$7,800/oy", color: "emerald" },
    { threshold: 75,  title: "Banker's Algorithm Core Architect",  salary: "$9,800/oy", color: "amber" },
    { threshold: 90,  title: "Resource Request State Machine Lead",salary: "$12,500/oy", color: "amber" },
    { threshold: 105, title: "Wait-For Graph Reduction Lead",      salary: "$15,000/oy", color: "violet" },
    { threshold: 120, title: "Deadlock Recovery & Preemption Lead",salary: "$18,500/oy", color: "violet" },
    { threshold: 135, title: "Principal Kernel Deadlock CTO",      salary: "$25,000/oy", color: "gold" }
  ];

  const SECTORS = [
    { id: 1,  range: "1–15",    name: "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti", icon: "🔒" },
    { id: 2,  range: "16–30",   name: "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili", icon: "🕸️" },
    { id: 3,  range: "31–45",   name: "Tupikning Oldini Olish (Deadlock Prevention)", icon: "🛡️" },
    { id: 4,  range: "46–60",   name: "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat", icon: "🧭" },
    { id: 5,  range: "61–75",   name: "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)", icon: "🏦" },
    { id: 6,  range: "76–90",   name: "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)", icon: "💳" },
    { id: 7,  range: "91–105",  name: "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish", icon: "🔍" },
    { id: 8,  range: "106–120", name: "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption", icon: "⚡" },
    { id: 9,  range: "121–135", name: "Python da Tupiklar: Lock Ordering & Ierarxiya", icon: "🐍" },
    { id: 10, range: "136–150", name: "Ostrich Algoritmi & CW1 Case Study Integratsiyasi", icon: "🐦" }
  ];

  const EMERGENCY_EVENTS = [
    {
      id: "evt_circular_wait_frozen",
      title: "🚨 Halqasimon Kutish (Circular Wait) Tizimni Muzlatib Qo'ydi!",
      speaker: "PROFESSOR TURING",
      desc: "P1 resurs R1 ni ushlab R2 ni kutyapti, P2 esa R2 ni ushlab R1 ni kutyapti. 4 ta Coffman shartlari to'liq bajarildi va tizim qotdi!",
      solution: "Resurslarni qat'iy tartiblash (Lock Ordering) yoki bittasini majburiy to'xtatish (Preemption) orqali sikl uziladi."
    },
    {
      id: "evt_banker_unsafe_state",
      title: "⚠️ Tizim Xavfli Holatga (Unsafe State) O'tib Qoldi!",
      speaker: "BANKER AGENT",
      desc: "So'rov qabul qilingandan so'ng mavjud erkin resurslar barcha jarayonlarning maksimal talabini qondira olmaydigan darajaga tushdi.",
      solution: "Bankir algoritmi resursni berishdan oldin so'rovni simulyatsiya qilib, xavfsiz ketma-ketlik mavjudligini kafolatlashi lozim."
    },
    {
      id: "evt_cascading_termination",
      title: "💥 Qayta-qayta Jarayonlarni O'ldirish (Cascading Rollback)!",
      speaker: "RECOVERY SUBSYSTEM",
      desc: "Tupikdan chiqish uchun jarayon o'ldirildi, biroq u qoldirgan yarimta tranzaksiyalar boshqa jarayonlarni ham to'xtashga majbur qildi.",
      solution: "Eng arzon narxdagi (minimum cost) jarayonni tanlash va checkpoint (nazorat nuqtasi) dan qayta tiklash kerak."
    }
  ];

  const INITIAL_VIRTUAL_STATE = {
    currentUser: "student",
    currentHost: "debian12",
    currentDir: "/home/student/deadlocks",
    files: {
      "01_coffman.py": { size: 1024, type: "file" },
      "02_rag_analyzer.py": { size: 1800, type: "file" },
      "03_bankers_algo.py": { size: 3200, type: "file" },
      "04_lock_ordering.py": { size: 2100, type: "file" },
      "05_deadlock_recovery.py": { size: 2600, type: "file" }
    }
  };

  class VirtualLinuxShell {
    constructor() {
      this.currentDir = "/home/student/deadlocks";
    }
    execute(cmd) {
      const clean = cmd.trim();
      return { output: "Deadlock tahlili muvaffaqiyatli bajarildi: " + clean, exitCode: 0 };
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
