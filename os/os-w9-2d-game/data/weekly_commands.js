/**
 * WIUT OS WEEK 9 — WEEKLY COMMANDS ENCYCLOPEDIA (Deadlocks & Banker's Algorithm)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.WEEKLY_COMMANDS_W9 = root.WEEKLY_COMMANDS = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    { cmd: "python3 01_coffman.py", desc: "4 ta Coffman shartini va deadlock paydo bo'lishini namoyish etish" },
    { cmd: "python3 02_rag_analyzer.py", desc: "Resurs taqsimoti grafigida (RAG) sikl mavjudligini aniqlash" },
    { cmd: "python3 03_bankers_algo.py", desc: "Bankir algoritmining xavfsizlik (Safety) hisobini bajarish" },
    { cmd: "python3 04_lock_ordering.py", desc: "Qulflarni ierarxik tartiblash orqali tupikning oldini olish" },
    { cmd: "python3 05_deadlock_recovery.py", desc: "Tupikka tushgan jarayonni majburiy tugatish (preemption) simulyatsiyasi" },
    { cmd: "kill -9 <PID>", desc: "Tupikda qotgan jarayonni SIGKILL signali bilan majburiy to'xtatish" },
    { cmd: "pkill -f python3", desc: "Barcha qotgan Python deadlock jarayonlarini baravariga to'xtatish" }
  ];
});
