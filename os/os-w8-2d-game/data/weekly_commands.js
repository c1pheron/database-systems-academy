/**
 * WIUT OS WEEK 8 — WEEKLY COMMANDS ENCYCLOPEDIA (Python Concurrency & Shell)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.WEEKLY_COMMANDS_W8 = root.WEEKLY_COMMANDS = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
    { cmd: "python3 01_threads.py", desc: "Python oqimlari (threading) dasturini ishga tushirish" },
    { cmd: "threading.Thread(target=worker)", desc: "Yangi oqim obyektini yaratish" },
    { cmd: "t.start()", desc: "Oqimni fon rejimida mustaqil bajarilishini boshlash" },
    { cmd: "t.join()", desc: "Asosiy oqim ko'rsatilgan oqim tugashini kutishi" },
    { cmd: "threading.Lock()", desc: "Kritik bo'limni himoyalovchi Mutex qulf yaratish" },
    { cmd: "with lock:", desc: "Qulfni avtomatik olish (acquire) va chiqarish (release) konteksti" },
    { cmd: "threading.Semaphore(value)", desc: "Sanoqli semaphor yaratish (bir vaqtda N ta oqim)" },
    { cmd: "threading.Condition()", desc: "Shartli o'zgaruvchi yaratish (wait/notify)" },
    { cmd: "threading.Barrier(parties)", desc: "N ta oqim bir joyga yetib kelguncha to'xtatib turuvchi to'siq" },
    { cmd: "threading.Event()", desc: "Oqimlararo signal va bayroq hodisasi (set/wait)" }
  ];
});
