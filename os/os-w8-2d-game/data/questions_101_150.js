/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 8 QUESTIONS (PART 3: 101–150)
 * Sectors: 7 (Condition Variables 11-15), 8 (Bounded Buffer), 9 (Barriers & Events), 10 (Dining Philosophers & CW1)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W8_PART3 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 101,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Mesa Semantikasi: Signal-and-Continue",
    "story": "Zamonaviy OS larda signal bergan oqim o'z ishini davom ettiradi. Uyg'ongan oqim esa qulf bo'shashini navbatda kutadi.",
    "task": "Ushbu zamonaviy semantika nomini yozing.",
    "canonical": "Signal-and-Continue",
    "accepted": [
      "Signal-and-Continue",
      "signal and continue",
      "Mesa semantics"
    ],
    "tags": [
      "#MESA",
      "#MODERN_OS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Signallash samaradorligini oshirish.",
      "flags": [],
      "whenToUse": "Java, Python, POSIX pthreads kutubxonalarida.",
      "omissionRisk": "Uyg'ongan oqim ishga tushguncha shart yana buzilishi mumkin, shuning uchun while kerak.",
      "syntaxExample": "Signal-and-Continue"
    }
  },
  {
    "id": 102,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Qulfsiz Kutish Xatosi",
    "story": "Agar `with cv:` qilmasdan to'g'ridan-to'g'ri `cv.wait()` chaqirilsa nima yuz beradi?",
    "task": "Chiqadigan xatolik nomini yozing.",
    "canonical": "RuntimeError",
    "accepted": [
      "RuntimeError",
      "runtime_error"
    ],
    "tags": [
      "#RUNTIME_ERROR",
      "#CV_SAFETY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulf egallanmagan holda kutish taqiqlanganligini bildirish.",
      "flags": [],
      "whenToUse": "Condition qoidalarini to'g'ri qo'llashda.",
      "omissionRisk": "Oqim atomik release qila olmasligi tufayli xato qaytadi.",
      "syntaxExample": "RuntimeError"
    }
  },
  {
    "id": 103,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Taymoutli Kutish (cv.wait(timeout=5.0))",
    "story": "Oqim signal kelishini cheksiz emas, maksimal 5 soniya kutishi zarur.",
    "task": "5.0 soniya taymout bilan wait chaqiring.",
    "canonical": "cv.wait(timeout=5.0)",
    "accepted": [
      "cv.wait(timeout=5.0)",
      "cv.wait(5.0)",
      "cv.wait(5)"
    ],
    "tags": [
      "#WAIT_TIMEOUT",
      "#TIMEOUT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Belgilangan vaqt ichida bildirishnoma kelmasa ham uyg'onish.",
      "flags": [],
      "whenToUse": "Tizimning to'xtab qolishining oldini olishda.",
      "omissionRisk": "Taymout bo'yicha uyg'onganida ham qulfni qayta egallagan bo'ladi.",
      "syntaxExample": "cv.wait(timeout=5.0)"
    }
  },
  {
    "id": 104,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Thundering Herd Muammosi",
    "story": "`notify_all()` chaqirilganda 100 ta oqim baravar uyg'onib, bitta qulf uchun kurashib CPU ni qizdirib yuborishi.",
    "task": "Bu muammo ilmiy jihatdan nima deb ataladi?",
    "canonical": "Thundering Herd",
    "accepted": [
      "Thundering Herd",
      "thundering herd"
    ],
    "tags": [
      "#THUNDERING_HERD",
      "#BOTTLENECK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Haddan tashqari ko'p oqimlarni bir vaqtda uyg'otishdagi yuklamani ifodalash.",
      "flags": [],
      "whenToUse": "Katta yuklamali server arxitekturalarini loyihalashda.",
      "omissionRisk": "Imkon boricha notify() yoki ixtisoslashgan navbatlar ishlatish kerak.",
      "syntaxExample": "Thundering Herd"
    }
  },
  {
    "id": 105,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Monitor Tushunchasi (C.A.R. Hoare)",
    "story": "Ma'lumotlar, protseduralar va sinxronizatsiya qulflarini bitta inkapsulyatsiyalangan klassga birlashtiruvchi yuqori darajadagi konstruktsiya.",
    "task": "Bu nazariy konstruktsiya nomini yozing.",
    "canonical": "Monitor",
    "accepted": [
      "Monitor",
      "monitor"
    ],
    "tags": [
      "#MONITOR",
      "#HOARE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dasturchini pastki darajadagi semaphor xatolaridan himoya qilish.",
      "flags": [],
      "whenToUse": "Java dagi `synchronized` metodlar va Python dagi Condition obyektlarida.",
      "omissionRisk": "Monitor ichida bir vaqtda faqat bitta oqim ishlay oladi.",
      "syntaxExample": "Monitor"
    }
  },
  {
    "id": 106,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Xavfsiz Navbat Modulini Import Qilish",
    "story": "L08 Bounded Buffer: Python da oqimlararo ma'lumot uzatishning eng xavfsiz yo'li `queue` modulidir.",
    "task": "Queue sinfini import qiluvchi buyruqni yozing.",
    "canonical": "from queue import Queue",
    "accepted": [
      "from queue import Queue",
      "import queue"
    ],
    "tags": [
      "#QUEUE",
      "#PRODUCER_CONSUMER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimlar uchun xavfsiz (thread-safe) FIFO navbat modulini yuklash.",
      "flags": [],
      "whenToUse": "Ishlab chiqaruvchi va iste'molchi naqshini qurishda.",
      "omissionRisk": "Oddiy list [] thread-safe emas, poyga holatiga uchraydi.",
      "syntaxExample": "from queue import Queue"
    }
  },
  {
    "id": 107,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Cheklangan Bufer Hajmi (maxsize=10)",
    "story": "Xotira to'lib ketmasligi uchun navbat maksimal 10 ta element qabul qilsin.",
    "task": "Maksimal hajmi 10 bo'lgan Queue obyektini yarating.",
    "canonical": "q = Queue(maxsize=10)",
    "accepted": [
      "q = Queue(maxsize=10)",
      "q=Queue(maxsize=10)",
      "q = Queue(10)"
    ],
    "tags": [
      "#BOUNDED_BUFFER",
      "#QUEUE_SIZE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bufer hajmini cheklash (Bounded Buffer).",
      "flags": [],
      "whenToUse": "Producer haddan tashqari tez ishlasa xotirani to'ldirib yubormasligi uchun.",
      "omissionRisk": "0 berilsa navbat cheksiz (unbounded) bo'ladi va xotirani yeb qo'yishi mumkin.",
      "syntaxExample": "q = Queue(maxsize=10)"
    }
  },
  {
    "id": 108,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Element Qo'shish: q.put(item)",
    "story": "Ishlab chiqaruvchi yangi ma'lumotni navbatga joylaydi. Agar navbat to'la bo'lsa o'zi avtomatik to'xtab kutadi.",
    "task": "Navbatga 'item' qiymatini qo'shuvchi metodni chaqiring.",
    "canonical": "q.put(item)",
    "accepted": [
      "q.put(item)",
      "q.put(item);"
    ],
    "tags": [
      "#PUT",
      "#PRODUCER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Navbatga element qo'shish (agar to'la bo'lsa bo'sh joy ochilguncha bloklaydi).",
      "flags": [],
      "whenToUse": "Producer oqimi ichida.",
      "omissionRisk": "Qo'shimcha lock yozish shart emas, Queue ichida o'zi barchasini himoyalaydi.",
      "syntaxExample": "q.put(item)"
    }
  },
  {
    "id": 109,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Element Olish: q.get()",
    "story": "Iste'molchi navbatdan navbatdagi elementni oladi. Agar navbat bo'sh bo'lsa yangi element kelguncha avtomatik kutadi.",
    "task": "Navbatdan elementni sug'urib oluvchi metodni chaqiring.",
    "canonical": "item = q.get()",
    "accepted": [
      "item = q.get()",
      "q.get()",
      "item=q.get()"
    ],
    "tags": [
      "#GET",
      "#CONSUMER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Navbat boshidagi elementni o'qib o'chirish (agar bo'sh bo'lsa bloklaydi).",
      "flags": [],
      "whenToUse": "Consumer oqimi ichida.",
      "omissionRisk": "Element kelguncha oqim 0% CPU bilan uxlaydi.",
      "syntaxExample": "item = q.get()"
    }
  },
  {
    "id": 110,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Vazifa Bajarilganini Bildirish (q.task_done())",
    "story": "Iste'molchi olingan element ustidagi barcha amallarni yakunlaganini navbatga xabar qiladi.",
    "task": "Vazifa yakunlanganini bildiruvchi metodni chaqiring.",
    "canonical": "q.task_done()",
    "accepted": [
      "q.task_done()",
      "q.task_done();"
    ],
    "tags": [
      "#TASK_DONE",
      "#TRACKING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qayta ishlanmagan vazifalar sonini 1 taga kamaytirish.",
      "flags": [],
      "whenToUse": "Har bir muvaffaqiyatli q.get() dan so'ng qayta ishlash tugagach.",
      "omissionRisk": "task_done chaqirilmasa q.join() abadiy qotib qoladi.",
      "syntaxExample": "q.task_done()"
    }
  },
  {
    "id": 111,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Barcha Vazifalar Tugashini Kutish (q.join())",
    "story": "Navbatdagi har bir element uchun `task_done()` chaqirilib, barcha ishlar yakunlanguncha asosiy dasturni to'xtatib turish.",
    "task": "Navbat to'liq bo'shashini kutuvchi metodni chaqiring.",
    "canonical": "q.join()",
    "accepted": [
      "q.join()",
      "q.join();"
    ],
    "tags": [
      "#QUEUE_JOIN",
      "#BARRIER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha qo'shilgan elementlar to'liq ishlab bo'linishini kutish.",
      "flags": [],
      "whenToUse": "Batch qayta ishlash yakunida.",
      "omissionRisk": "Bitta oqim task_done qilmasa dastur osilib qoladi.",
      "syntaxExample": "q.join()"
    }
  },
  {
    "id": 112,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Navbat Bo'shligini Tekshirish (q.empty())",
    "story": "Ayni damda navbatda elementlar qolganmi yoki bo'shmi?",
    "task": "Navbat bo'shligini tekshiruvchi metodni chaqiring.",
    "canonical": "q.empty()",
    "accepted": [
      "q.empty()",
      "q.empty();"
    ],
    "tags": [
      "#EMPTY",
      "#STATUS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Navbat bo'sh bo'lsa True qaytarish.",
      "flags": [],
      "whenToUse": "Debag qilishda.",
      "omissionRisk": "Ko'p oqimli muhitda bu metod qaytargan zahoti boshqa oqim element solishi mumkin.",
      "syntaxExample": "q.empty()"
    }
  },
  {
    "id": 113,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Navbat To'laligini Tekshirish (q.full())",
    "story": "Navbat hajmi to'lganmi yoki yana joy bormi?",
    "task": "Navbat to'laligini tekshiruvchi metodni chaqiring.",
    "canonical": "q.full()",
    "accepted": [
      "q.full()",
      "q.full();"
    ],
    "tags": [
      "#FULL",
      "#CAPACITY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Navbat to'lgan bo'lsa True qaytarish.",
      "flags": [],
      "whenToUse": "Bufer sig'imini nazorat qilishda.",
      "omissionRisk": "Multi-threaded holatda tekshirishdan so'ng darhol holat o'zgarishi mumkin.",
      "syntaxExample": "q.full()"
    }
  },
  {
    "id": 114,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Elementlar Sonini O'qish (q.qsize())",
    "story": "Navbatda ayni paytda taxminan nechta element borligini bilish zarur.",
    "task": "Navbat o'lchamini qaytaruvchi metodni chaqiring.",
    "canonical": "q.qsize()",
    "accepted": [
      "q.qsize()",
      "q.qsize();"
    ],
    "tags": [
      "#QSIZE",
      "#METRICS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Navbatdagi elementlar sonini taxminiy aniqlash.",
      "flags": [],
      "whenToUse": "Monitoring va telemetriyada.",
      "omissionRisk": "Ba'zi platformalarda (masalan, macOS) aniq ishlamasligi mumkin.",
      "syntaxExample": "q.qsize()"
    }
  },
  {
    "id": 115,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Kutmasdan Qo'shish: q.put_nowait()",
    "story": "Agar navbat to'la bo'lsa oqim uxlamasdan darhol xato tashlasin.",
    "task": "Bloklanmasdan navbatga joylash metodini chaqiring.",
    "canonical": "q.put_nowait(item)",
    "accepted": [
      "q.put_nowait(item)",
      "q.put(item, block=False)"
    ],
    "tags": [
      "#PUT_NOWAIT",
      "#NON_BLOCKING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutmasdan joylash. Agar to'la bo'lsa queue.Full istisnosini chiqaradi.",
      "flags": [],
      "whenToUse": "Navbat to'lganida ma'lumotni tashlab yuborish (drop) yoki muqobil saqlash kerak bo'lganda.",
      "omissionRisk": "queue.Full istisnosini try...except bilan ushlash lozim.",
      "syntaxExample": "q.put_nowait(item)"
    }
  },
  {
    "id": 116,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Kutmasdan Olish: q.get_nowait()",
    "story": "Agar navbat bo'sh bo'lsa kutmasdan darhol xato tashlasin.",
    "task": "Bloklanmasdan navbatdan olish metodini chaqiring.",
    "canonical": "q.get_nowait()",
    "accepted": [
      "q.get_nowait()",
      "q.get(block=False)"
    ],
    "tags": [
      "#GET_NOWAIT",
      "#NON_BLOCKING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutmasdan olish. Agar bo'sh bo'lsa queue.Empty istisnosini chiqaradi.",
      "flags": [],
      "whenToUse": "Navbat bo'sh bo'lsa boshqa algoritmlarga o'tishda.",
      "omissionRisk": "queue.Empty ni tutish zarur.",
      "syntaxExample": "q.get_nowait()"
    }
  },
  {
    "id": 117,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Klassik Semaphor Yechimi: Bo'sh Joylar Semaphori",
    "story": "Semaphorlar yordamida Bounded Buffer yaratishda bo'sh joylarni hisoblovchi semaphor nechiga teng qilinadi?",
    "task": "Sig'imi CAPACITY bo'lgan 'empty' semaphorini e'lon qiling.",
    "canonical": "empty = threading.Semaphore(CAPACITY)",
    "accepted": [
      "empty = threading.Semaphore(CAPACITY)",
      "empty=threading.Semaphore(CAPACITY)"
    ],
    "tags": [
      "#SEMAPHORE",
      "#EMPTY_SEM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Buferdagi bo'sh o'rinlar sonini nazorat qilish.",
      "flags": [],
      "whenToUse": "Producer har bir element qo'shganda empty.acquire() qiladi.",
      "omissionRisk": "Bo'sh o'rin tugasa Producer avtomatik bloklanadi.",
      "syntaxExample": "empty = threading.Semaphore(CAPACITY)"
    }
  },
  {
    "id": 118,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Klassik Semaphor Yechimi: To'la Joylar Semaphori",
    "story": "Buferda tayyor elementlar sonini hisoblovchi semaphor dastlab nechta bo'ladi?",
    "task": "Boshlang'ich qiymati 0 bo'lgan 'full' semaphorini e'lon qiling.",
    "canonical": "full = threading.Semaphore(0)",
    "accepted": [
      "full = threading.Semaphore(0)",
      "full=threading.Semaphore(0)"
    ],
    "tags": [
      "#SEMAPHORE",
      "#FULL_SEM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Iste'molchi uchun tayyor mahsulotlar sonini hisoblash.",
      "flags": [],
      "whenToUse": "Consumer har bir element olishdan oldin full.acquire() qiladi.",
      "omissionRisk": "Boshida bufer bo'sh bo'lgani sababli qiymat 0 bo'ladi va Consumer kutadi.",
      "syntaxExample": "full = threading.Semaphore(0)"
    }
  },
  {
    "id": 119,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Klassik Bounded Buffer Skriptini Ishga Tushirish",
    "story": "Producer-Consumer modelining to'liq ishlashini terminalda sinab ko'rish talab etiladi.",
    "task": "05_producer_consumer.py dasturini ishga tushiring.",
    "canonical": "python3 05_producer_consumer.py",
    "accepted": [
      "python3 05_producer_consumer.py",
      "python 05_producer_consumer.py"
    ],
    "tags": [
      "#PRODUCER_CONSUMER_RUN",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Producer va Consumer oqimlari birgalikda muammosiz ishlashini kuzatish.",
      "flags": [],
      "whenToUse": "Amaliy sinov va hisobot tayyorlashda.",
      "omissionRisk": "Skript bajarilmasa navbat tezligi va oqimlar uyg'unligini tekshirib bo'lmaydi.",
      "syntaxExample": "python3 05_producer_consumer.py"
    }
  },
  {
    "id": 120,
    "sectorId": 8,
    "sectorTitle": "Bounded Buffer (Producer-Consumer) Muammosi",
    "title": "Zaharli Tabletka Naqshi (Poison Pill Pattern)",
    "story": "Iste'molchi oqimlarini toza va xavfsiz to'xtatish uchun navbatga maxsus to'xtatish belgisi (masalan, None) yuborish usuli.",
    "task": "Ushbu mashhur dizayn naqshining nomini yozing.",
    "canonical": "Poison Pill",
    "accepted": [
      "Poison Pill",
      "poison pill",
      "Sentinel"
    ],
    "tags": [
      "#POISON_PILL",
      "#GRACEFUL_SHUTDOWN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Consumer oqimiga 'barcha ishlar tugadi, o'zingni to'xtat' signali sifatida navbatga None solish.",
      "flags": [],
      "whenToUse": "Ko'p oqimli xizmatlarni xavfsiz yopishda (graceful shutdown).",
      "omissionRisk": "Poison pill bo'lmasa iste'molchilar q.get() da abadiy osilib qoladi.",
      "syntaxExample": "Poison Pill"
    }
  },
  {
    "id": 121,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Hodisa Bayrog'ini Yaratish (threading.Event())",
    "story": "L08 Barriers & Events: Bir nechta oqimlarga bir vaqtda signal berish uchun mantiqiy bayroq (Event) kerak.",
    "task": "Event obyektini yaratib event o'zgaruvchisiga biriktiring.",
    "canonical": "event = threading.Event()",
    "accepted": [
      "event = threading.Event()",
      "event=threading.Event()"
    ],
    "tags": [
      "#EVENT",
      "#SIGNALING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha oqimlar kuzatishi mumkin bo'lgan sodda bayroq hodisasini yaratish.",
      "flags": [],
      "whenToUse": "Oqimlar bitta umumiy start signalini kutayotganda.",
      "omissionRisk": "Boshlang'ich holatda bayroq har doim False bo'ladi.",
      "syntaxExample": "event = threading.Event()"
    }
  },
  {
    "id": 122,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Bayroqni True Qilish (event.set())",
    "story": "Signal beruvchi asosiy oqim bayroqni True qiladi va shu lahzada uni kutib turgan barcha oqimlar uyg'onadi.",
    "task": "Bayroqni ko'taruvchi metodni chaqiring.",
    "canonical": "event.set()",
    "accepted": [
      "event.set()",
      "event.set();"
    ],
    "tags": [
      "#SET",
      "#EVENT_TRIGGER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ichki bayroqni True qilish va barcha kutayotgan oqimlarni uyg'otish.",
      "flags": [],
      "whenToUse": "Boshlash signali yoki tizim tayyor bo'lgan lahzada.",
      "omissionRisk": "set() chaqirilmasa kutayotgan barcha oqimlar to'xtab qolaveradi.",
      "syntaxExample": "event.set()"
    }
  },
  {
    "id": 123,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Bayroqni Qayta Tushirish (event.clear())",
    "story": "Bayroqni yana qayta False qilish orqali keyingi sikl uchun kutish holatiga tayyorlash.",
    "task": "Bayroqni tushiruvchi metodni chaqiring.",
    "canonical": "event.clear()",
    "accepted": [
      "event.clear()",
      "event.clear();"
    ],
    "tags": [
      "#CLEAR",
      "#RESET_FLAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ichki bayroqni yana False holatiga qaytarish.",
      "flags": [],
      "whenToUse": "Hodisani bir necha marta qayta ishlatishda.",
      "omissionRisk": "clear qilinmasa keyingi wait() lar hech qanday kutishsiz darhol o'tib ketadi.",
      "syntaxExample": "event.clear()"
    }
  },
  {
    "id": 124,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Bayroq Holatini Tekshirish (event.is_set())",
    "story": "Bayroq hozirgi paytda True yoki False ekanligini bloklanmasdan bilish kerak.",
    "task": "Bayroq holatini qaytaruvchi metodni chaqiring.",
    "canonical": "event.is_set()",
    "accepted": [
      "event.is_set()",
      "event.isSet()"
    ],
    "tags": [
      "#IS_SET",
      "#CHECK_FLAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ichki bayroq holatini tekshirish (True/False).",
      "flags": [],
      "whenToUse": "Oqim ishini davom ettirish shartini tekshirishda.",
      "omissionRisk": "Oqimni to'xtatmaydi, shunchaki status beradi.",
      "syntaxExample": "event.is_set()"
    }
  },
  {
    "id": 125,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Bayroq Ko'tarilishini Kutish (event.wait())",
    "story": "Oqim bayroq set() qilinmaguncha shu joyda to'xtab turishi lozim.",
    "task": "Hodisa bayrog'ini kutuvchi metodni chaqiring.",
    "canonical": "event.wait()",
    "accepted": [
      "event.wait()",
      "event.wait();"
    ],
    "tags": [
      "#EVENT_WAIT",
      "#BLOCKING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bayroq True bo'lguncha oqimni bloklash.",
      "flags": [],
      "whenToUse": "Ishchi oqimlar umumiy start signalini kutayotganda.",
      "omissionRisk": "Agar bayroq allaqachon True bo'lsa hech qanday kechikishsiz darhol o'tib ketadi.",
      "syntaxExample": "event.wait()"
    }
  },
  {
    "id": 126,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Taymout Bilan Bayroq Kutish",
    "story": "Oqim bayroqni eng ko'pi bilan 3 soniya kutsin, signal kelmasa True emas, False bilan qaytsin.",
    "task": "3.0 soniya taymout bilan wait chaqiring.",
    "canonical": "event.wait(timeout=3.0)",
    "accepted": [
      "event.wait(timeout=3.0)",
      "event.wait(3.0)",
      "event.wait(3)"
    ],
    "tags": [
      "#EVENT_TIMEOUT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Maksimal 3 soniya kutish va vaqt tugasa davom etish.",
      "flags": [],
      "whenToUse": "Signal kelmay qolishi xavfi bo'lganda.",
      "omissionRisk": "Qaytarilgan natija tekshirilishi kerak (True bo'lsa signal kelgan, False bo'lsa vaqt tugagan).",
      "syntaxExample": "event.wait(timeout=3.0)"
    }
  },
  {
    "id": 127,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "To'siq (Barrier) Obyektini Yaratish (parties=4)",
    "story": "4 ta parallel oqimning barchasi belgilangan nazorat nuqtasiga yetib kelmaguncha hech kim oldinga o'ta olmasin.",
    "task": "4 ta ishtirokchi uchun Barrier obyektini yarating.",
    "canonical": "barrier = threading.Barrier(parties=4)",
    "accepted": [
      "barrier = threading.Barrier(parties=4)",
      "barrier=threading.Barrier(4)",
      "barrier = threading.Barrier(4)"
    ],
    "tags": [
      "#BARRIER",
      "#PHASE_SYNC"
    ],
    "flagAnatomy": {
      "commandPurpose": "N ta oqimni bir nuqtaga to'plab, so'ng baravariga keyingi fazaga o'tkazish.",
      "flags": [],
      "whenToUse": "Bosqichma-bosqich parallel algoritmlarda (masalan, har bir fazadan keyin ma'lumot almashishda).",
      "omissionRisk": "Agar 3 ta oqim kelib 4-chisi kelmasa barchasi abadiy qotib qoladi.",
      "syntaxExample": "barrier = threading.Barrier(parties=4)"
    }
  },
  {
    "id": 128,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "To'siqda Kutish (barrier.wait())",
    "story": "Har bir oqim o'z hisob-kitobini tugatib to'siq oldiga keladi va qolgan sheriklarini kutadi.",
    "task": "To'siqda kutuvchi metodni chaqiring.",
    "canonical": "barrier.wait()",
    "accepted": [
      "barrier.wait()",
      "barrier.wait();"
    ],
    "tags": [
      "#BARRIER_WAIT",
      "#RENDEZVOUS"
    ],
    "flagAnatomy": {
      "commandPurpose": "To'siq oldida to'xtash. Oxirgi N-chi oqim kelganda barchasi baravar ozod bo'ladi.",
      "flags": [],
      "whenToUse": "Parallel oqimlar navbatdagi qadamga bir vaqtda start berishi shart bo'lganda.",
      "omissionRisk": "Oxirgi oqim 0 raqamini, qolganlar esa 1..N-1 raqamlarini qaytaradi.",
      "syntaxExample": "barrier.wait()"
    }
  },
  {
    "id": 129,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "To'siqni Qayta Tiklash (barrier.reset())",
    "story": "To'siqni boshlang'ich bo'sh holatiga qaytarish talab etiladi.",
    "task": "To'siqni reset qiluvchi metodni chaqiring.",
    "canonical": "barrier.reset()",
    "accepted": [
      "barrier.reset()",
      "barrier.reset();"
    ],
    "tags": [
      "#BARRIER_RESET"
    ],
    "flagAnatomy": {
      "commandPurpose": "To'siqni boshlang'ich holatga qaytarish.",
      "flags": [],
      "whenToUse": "Yangi faza yoki sikl boshlanishida.",
      "omissionRisk": "Kutib turgan oqimlar bo'lsa ularga BrokenBarrierError beradi.",
      "syntaxExample": "barrier.reset()"
    }
  },
  {
    "id": 130,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "To'siqni Sindirish (barrier.abort())",
    "story": "Birorta oqimda xatolik chiqsa boshqa oqimlar behuda kutib o'tirmasligi uchun butun to'siq sindiriladi.",
    "task": "To'siqni majburiy sindiruvchi metodni chaqiring.",
    "canonical": "barrier.abort()",
    "accepted": [
      "barrier.abort()",
      "barrier.abort();"
    ],
    "tags": [
      "#BARRIER_ABORT",
      "#ERROR_RECOVERY"
    ],
    "flagAnatomy": {
      "commandPurpose": "To'siqni sindirilgan (broken) holatga o'tkazish.",
      "flags": [],
      "whenToUse": "Oqimlardan biri yiqilganda (crash) boshqalarni qutqarish uchun.",
      "omissionRisk": "Barcha kutayotgan oqimlarda darhol BrokenBarrierError qo'zg'atiladi.",
      "syntaxExample": "barrier.abort()"
    }
  },
  {
    "id": 131,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Singan To'siq Istisnosi (BrokenBarrierError)",
    "story": "To'siq abort() qilinganda yoki taymout bo'yicha buzilganda kutayotgan oqimlarda qaysi istisno chiqadi?",
    "task": "Ushbu istisno sinfi nomini yozing.",
    "canonical": "BrokenBarrierError",
    "accepted": [
      "BrokenBarrierError",
      "broken_barrier_error"
    ],
    "tags": [
      "#BROKEN_BARRIER",
      "#EXCEPTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "To'siq buzilganligini ifodalovchi xatolik.",
      "flags": [],
      "whenToUse": "Faza sinxronizatsiyasi muvaffaqiyatsiz bo'lganda.",
      "omissionRisk": "try...except bilan ushlanib resurslar tozalanishi kerak.",
      "syntaxExample": "BrokenBarrierError"
    }
  },
  {
    "id": 132,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "To'siq Buzilganligini Tekshirish (barrier.broken)",
    "story": "To'siq singan holatdami yoki yo'qmi buni ko'rsatuvchi mantiqiy atribut.",
    "task": "To'siqning broken atributini yozing.",
    "canonical": "barrier.broken",
    "accepted": [
      "barrier.broken",
      "barrier.broken;"
    ],
    "tags": [
      "#BARRIER_STATUS",
      "#INSPECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "To'siq buzilgan bo'lsa True, butun bo'lsa False qaytarish.",
      "flags": [],
      "whenToUse": "To'siqdan xavfsiz foydalanishdan oldin tekshirishda.",
      "omissionRisk": "Singan to'siqqa wait() chaqirilsa darhol BrokenBarrierError beradi.",
      "syntaxExample": "barrier.broken"
    }
  },
  {
    "id": 133,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "To'siqni Kutayotganlar Soni (barrier.n_waiting)",
    "story": "Ayni paytda to'siq oldiga nechta oqim kelib kutib turganini aniqlash zarur.",
    "task": "Kutayotganlar sonini qaytaruvchi atributni yozing.",
    "canonical": "barrier.n_waiting",
    "accepted": [
      "barrier.n_waiting",
      "barrier.n_waiting;"
    ],
    "tags": [
      "#N_WAITING",
      "#METRICS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Hozir to'siqda ushlanib turgan oqimlar sonini ko'rsatish.",
      "flags": [],
      "whenToUse": "Monitoring va jarayonlar progressini kuzatishda.",
      "omissionRisk": "parties ga yetganda 0 ga qaytadi.",
      "syntaxExample": "barrier.n_waiting"
    }
  },
  {
    "id": 134,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Kechiktirilgan Taymer Yaratish (threading.Timer)",
    "story": "Funksiyani darhol emas, roppa-rosa 5.0 soniya o'tgach fon oqimida bajaruvchi taymer.",
    "task": "5 soniyadan keyin 'task' funksiyasini bajaruvchi Timer yarating.",
    "canonical": "t = threading.Timer(5.0, task)",
    "accepted": [
      "t = threading.Timer(5.0, task)",
      "t=threading.Timer(5.0,task)",
      "t = threading.Timer(5, task)"
    ],
    "tags": [
      "#TIMER",
      "#DELAY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kechiktirilgan amallarni mustaqil oqimda rejalashtirish.",
      "flags": [],
      "whenToUse": "Avtomatik saqlash, seansni tugatish va qayta urinishlarda.",
      "omissionRisk": "t.start() chaqirilmasa taymer hisoblashni boshlamaydi.",
      "syntaxExample": "t = threading.Timer(5.0, task)"
    }
  },
  {
    "id": 135,
    "sectorId": 9,
    "sectorTitle": "Sinxronizatsiya Bariyerlari: threading.Barrier & Event",
    "title": "Taymerni Bekor Qilish (t.cancel())",
    "story": "Agar 5 soniya o'tmasdan oldin foydalanuvchi harakat qilsa, rejalashtirilgan taymerni to'xtatib bekor qilish mumkin.",
    "task": "Taymerni bekor qiluvchi metodni chaqiring.",
    "canonical": "t.cancel()",
    "accepted": [
      "t.cancel()",
      "t.cancel();"
    ],
    "tags": [
      "#TIMER_CANCEL",
      "#ABORT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Hali ishga tushmagan taymer ijrosini bekor qilish.",
      "flags": [],
      "whenToUse": "Foydalanuvchi orqaga qaytganda yoki taymer talab etilmaganda.",
      "omissionRisk": "Agar taymer allaqachon ishlab ketgan bo'lsa cancel() hech narsa qilmaydi.",
      "syntaxExample": "t.cancel()"
    }
  },
  {
    "id": 136,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Birinchi O'quvchilar-Yozuvchilar Muammosi (Reader Priority)",
    "story": "L08 Classical Problems: Agar bitta o'quvchi o'qiyotgan bo'lsa, boshqa o'quvchilar ham navbatsiz kirib kelaveradi. Yozuvchi esa kutadi.",
    "task": "Ushbu holatda kim och qolish xavfi ostida bo'ladi (Writer yoki Reader)?",
    "canonical": "Writer",
    "accepted": [
      "Writer",
      "writer",
      "yozuvchi"
    ],
    "tags": [
      "#READERS_WRITERS",
      "#WRITER_STARVATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'quvchilar ustunligi berilganda yozuvchilarning och qolishini ko'rsatish.",
      "flags": [],
      "whenToUse": "Katta ma'lumotlar bazalarida o'qish/yozish strategiyasini tanlashda.",
      "omissionRisk": "O'quvchilar oqimi to'xtamasa yozuvchi umrbod ma'lumotni o'zgartira olmaydi.",
      "syntaxExample": "Writer"
    }
  },
  {
    "id": 137,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Ikkinchi O'quvchilar-Yozuvchilar Muammosi (Writer Priority)",
    "story": "Agar yozuvchi navbatga kelsa, yangi o'quvchilar to'xtatiladi va yozuvchi o'zgartirib bo'lgach ruxsat beriladi.",
    "task": "Bu yondashuvda kim och qolishi mumkin?",
    "canonical": "Reader",
    "accepted": [
      "Reader",
      "reader",
      "o'quvchi"
    ],
    "tags": [
      "#WRITER_PRIORITY",
      "#READER_STARVATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ma'lumotlarning eskirib qolishini (stale data) oldini olish maqsadida yozuvchiga ustunlik berish.",
      "flags": [],
      "whenToUse": "Moliyaviy va dolzarb kotirovka tizimlarida.",
      "omissionRisk": "Doimiy yozishlar davom etsa o'quvchilar kutib qoladi.",
      "syntaxExample": "Reader"
    }
  },
  {
    "id": 138,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Faol O'quvchilar Hisoblagichi (read_count = 0)",
    "story": "Ayni damda kitobni nechta o'quvchi o'qiyotganini sanab boruvchi hisoblagich.",
    "task": "read_count o'zgaruvchisini 0 bilan e'lon qiling.",
    "canonical": "read_count = 0",
    "accepted": [
      "read_count = 0",
      "read_count=0"
    ],
    "tags": [
      "#READ_COUNT",
      "#TRACKING"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'qiyotgan oqimlar sonini saqlash.",
      "flags": [],
      "whenToUse": "Birinchi o'quvchi kirganda yozuvchini qulflash, oxirgi o'quvchi chiqqanda yozuvchini ochish uchun.",
      "omissionRisk": "read_count o'zi ham poyga holatiga tushmasligi uchun maxsus mutex bilan himoyalanishi shart.",
      "syntaxExample": "read_count = 0"
    }
  },
  {
    "id": 139,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Yozuvchilar Qulfi (rw_mutex = threading.Lock())",
    "story": "Yozuvchi resursga yolg'iz kirishini va o'quvchilar bor paytda to'xtab turishini ta'minlovchi asosiy qulf.",
    "task": "Yozuvchilar qulfini yarating.",
    "canonical": "rw_mutex = threading.Lock()",
    "accepted": [
      "rw_mutex = threading.Lock()",
      "rw_mutex=threading.Lock()"
    ],
    "tags": [
      "#RW_MUTEX",
      "#MUTEX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yozuvchilar uchun mutlaq o'zaro istisnoni kafolatlash.",
      "flags": [],
      "whenToUse": "Resursga ma'lumot yozishda va 1-o'quvchi kirganida.",
      "omissionRisk": "O'quvchilar ham yozuvchi bilan parallel ishlay olmaydi.",
      "syntaxExample": "rw_mutex = threading.Lock()"
    }
  },
  {
    "id": 140,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "read_count Himoyasi (read_count_mutex)",
    "story": "Ikkita o'quvchi bir vaqtda kirib kelib `read_count += 1` qilganda hisoblagich buzilmasligi uchun qulf.",
    "task": "read_count ni himoyalovchi mutexni e'lon qiling.",
    "canonical": "read_count_mutex = threading.Lock()",
    "accepted": [
      "read_count_mutex = threading.Lock()",
      "read_count_mutex=threading.Lock()"
    ],
    "tags": [
      "#MUTEX",
      "#PROTECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "read_count ustidagi amallarni atomik qilish.",
      "flags": [],
      "whenToUse": "O'quvchi kirishida va chiqishida.",
      "omissionRisk": "Agar bu bo'lmasa 1-o'quvchi ekanligini ikkala oqim ham sezmay qolishi mumkin.",
      "syntaxExample": "read_count_mutex = threading.Lock()"
    }
  },
  {
    "id": 141,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Birinchi O'quvchi Qulfni Egallaydi",
    "story": "Agar `read_count == 1` bo'lsa, demak bu birinchi o'quvchi va u yozuvchilarga eshikni yopishi shart.",
    "task": "Birinchi o'quvchi yozuvchilar qulfini olish buyrug'ini yozing.",
    "canonical": "rw_mutex.acquire()",
    "accepted": [
      "rw_mutex.acquire()",
      "rw_mutex.acquire();"
    ],
    "tags": [
      "#FIRST_READER",
      "#LOCK_WRITER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yozuvchilarni to'xtatib qo'yish.",
      "flags": [],
      "whenToUse": "read_count aynan 1 ga teng bo'lgan nuqtada.",
      "omissionRisk": "Keyingi 2, 3, 4-o'quvchilar bu qulfni olmasdan to'g'ridan-to'g'ri o'qiyveradi.",
      "syntaxExample": "rw_mutex.acquire()"
    }
  },
  {
    "id": 142,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Oxirgi O'quvchi Qulfni Bo'shatadi",
    "story": "O'quvchilar chiqib ketmoqda. Agar `read_count == 0` bo'lsa, demak oxirgi o'quvchi ham chiqdi va yozuvchilarga yo'l ochiladi.",
    "task": "Oxirgi o'quvchi yozuvchilar qulfini bo'shatish buyrug'ini yozing.",
    "canonical": "rw_mutex.release()",
    "accepted": [
      "rw_mutex.release()",
      "rw_mutex.release();"
    ],
    "tags": [
      "#LAST_READER",
      "#UNLOCK_WRITER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yozuvchilarga yozish ruxsatini qaytarish.",
      "flags": [],
      "whenToUse": "read_count 0 ga tushgan onda.",
      "omissionRisk": "release qilinmasa o'quvchilar ketganidan keyin ham yozuvchi kira olmaydi.",
      "syntaxExample": "rw_mutex.release()"
    }
  },
  {
    "id": 143,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Faylasuflar Tushligi (Dining Philosophers)",
    "story": "5 ta faylasuf stol atrofida o'tiribdi. Ular ovqatlanishi uchun har biri yonidagi 2 ta sanchqini (vilka) olishi kerak.",
    "task": "Stolda jami nechta sanchqi bor?",
    "canonical": "5",
    "accepted": [
      "5",
      "five",
      "besh"
    ],
    "tags": [
      "#DINING_PHILOSOPHERS",
      "#RESOURCES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Klassik cheklangan resurslar bo'yicha sinxronizatsiya modeli.",
      "flags": [],
      "whenToUse": "Deadlock va Starvation muammolarini o'rganishda.",
      "omissionRisk": "Har bir sanchqi o'zaro istisno bilan himoyalanuvchi Lock dir.",
      "syntaxExample": "5"
    }
  },
  {
    "id": 144,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Sanchqilar Ro'yxatini Yaratish (forks)",
    "story": "Har bir sanchqi bitta Mutex qulfi hisoblanadi. 5 ta sanchqi uchun qulflar ro'yxatini tuzish kerak.",
    "task": "5 ta Lock dan iborat 'forks' ro'yxatini yarating.",
    "canonical": "forks = [threading.Lock() for _ in range(5)]",
    "accepted": [
      "forks = [threading.Lock() for _ in range(5)]",
      "forks=[threading.Lock() for _ in range(5)]"
    ],
    "tags": [
      "#FORKS",
      "#MUTEX_ARRAY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylasuflar uchun 5 ta umumiy resurs qulflarini e'lon qilish.",
      "flags": [],
      "whenToUse": "Dining Philosophers masalasini modellashtirishda.",
      "omissionRisk": "Bitta qulf o'rniga ro'yxat bo'lishi kerak.",
      "syntaxExample": "forks = [threading.Lock() for _ in range(5)]"
    }
  },
  {
    "id": 145,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Chap va O'ng Sanchqilar Indeksi",
    "story": "i-faylasuf uchun chap vilkasi `i` bo'lsa, doira shaklidagi stol bo'yicha uning o'ng vilkasi qanday hisoblanadi?",
    "task": "O'ng vilka indeksini hisoblovchi formulani yozing.",
    "canonical": "(i + 1) % 5",
    "accepted": [
      "(i + 1) % 5",
      "(i+1)%5",
      "right = (i + 1) % 5"
    ],
    "tags": [
      "#INDEXING",
      "#CIRCULAR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Doiraviy stol bo'yicha qo'shni resursni aniqlash.",
      "flags": [],
      "whenToUse": "Oxirgi 4-faylasufning o'ng vilkasi 0-vilka bo'lishini ta'minlashda.",
      "omissionRisk": "% 5 bo'lmasa IndexError chiqadi.",
      "syntaxExample": "(i + 1) % 5"
    }
  },
  {
    "id": 146,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Faylasuflar Tushligida Tupik (Deadlock) Sababi",
    "story": "Agar barcha 5 ta faylasuf bir vaqtda och qolib, har biri birinchi bo'lib o'zining chap vilkasini olsa nima yuz beradi?",
    "task": "Barcha faylasuflar o'ng vilkani kutib qotib qolishi nima deb ataladi?",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock"
    ],
    "tags": [
      "#DEADLOCK",
      "#CIRCULAR_WAIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Doiraviy kutish (Circular Wait) tufayli butun tizim to'xtashini fosh qilish.",
      "flags": [],
      "whenToUse": "Deadlock holatining paydo bo'lish mexanizmini tushuntirishda.",
      "omissionRisk": "Hech bir faylasuf o'ng vilkani ololmaydi va ochlikdan o'ladi.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 147,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Resurslar Ierarxiyasi Yechimi (Dijkstra)",
    "story": "Deadlockni sindirish uchun eng oson yo'l: 4-faylasuf avval chap emas, balki o'ng vilkani olsin. Bu qoidaning nomi nima?",
    "task": "Resurslarni tartiblash orqali siklni buzish strategiyasini yozing.",
    "canonical": "Resource Ordering",
    "accepted": [
      "Resource Ordering",
      "resource ordering",
      "lock ordering"
    ],
    "tags": [
      "#RESOURCE_ORDERING",
      "#DEADLOCK_PREVENTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Doiraviy kutish zanjirini (Circular Wait) uzish.",
      "flags": [],
      "whenToUse": "Bir nechta qulf bir vaqtda olinadigan har qanday tizimda.",
      "omissionRisk": "Barcha oqimlar qulflarni doim bir xil qat'iy tartibda olsa, deadlock 100% matematik imkonsiz bo'ladi.",
      "syntaxExample": "Resource Ordering"
    }
  },
  {
    "id": 148,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Ofitsiant (Arbitrator) Yechimi",
    "story": "Faylasuflar vilkalarni olishdan oldin bitta stoldagi markaziy ofitsiantdan ruxsat so'rashi. Ofitsiant bir vaqtda ko'pi bilan 4 kishiga ruxsat beradi.",
    "task": "Bir vaqtda 4 kishiga ruxsat beruvchi vosita nima bo'ladi?",
    "canonical": "Semaphore",
    "accepted": [
      "Semaphore",
      "semaphore",
      "threading.Semaphore(4)"
    ],
    "tags": [
      "#ARBITRATOR",
      "#SEMAPHORE_LIMIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "5 ta faylasufdan ko'pi bilan 4 tasi stolga o'tirishini ta'minlab, kamida 1 kishi 2 ta vilkaga ega bo'lishini kafolatlash.",
      "flags": [],
      "whenToUse": "Markaziy koordinatsiyali yechimlarda.",
      "omissionRisk": "Deadlock vujudga kelmaydi.",
      "syntaxExample": "Semaphore"
    }
  },
  {
    "id": 149,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Dining Philosophers Skriptini Ishga Tushirish",
    "story": "Faylasuflar simulyatorini Python skriptida to'liq tekshirish lozim.",
    "task": "06_dining_philosophers.py dasturini terminalda bajaring.",
    "canonical": "python3 06_dining_philosophers.py",
    "accepted": [
      "python3 06_dining_philosophers.py",
      "python 06_dining_philosophers.py"
    ],
    "tags": [
      "#DINING_PHILOSOPHERS_RUN",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylasuflar ovqatlanishi va o'ylashi poygasiz va deadlocklarsiz o'tishini kuzatish.",
      "flags": [],
      "whenToUse": "Amaliy sinov va hisobot tayyorlashda.",
      "omissionRisk": "Skript bajarilmasa qulflar almashinuvi vizual ko'rinmaydi.",
      "syntaxExample": "python3 06_dining_philosophers.py"
    }
  },
  {
    "id": 150,
    "sectorId": 10,
    "sectorTitle": "Readers-Writers & Dining Philosophers Klassik Sinovlari",
    "title": "Kurs Ishi (CW1) Bog'liqligi: Concurrency Hisoboti",
    "story": "WIUT 5COSC041C Coursework: Talaba hisobotida jarayonlar va oqimlar sinxronizatsiyasi, poyga holati va qulflash mexanizmlari qat'iy talab qilinadi.",
    "task": "Kurs ishidagi ushbu mavzu qaysi haftalik doirasida (Week 8) o'rganildi?",
    "canonical": "Week 8",
    "accepted": [
      "Week 8",
      "week 8",
      "8-Hafta",
      "8"
    ],
    "tags": [
      "#CW1",
      "#COURSEWORK",
      "#WIUT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Week 8 dagi barcha sinxronizatsiya bilimlarini CW1 Case Study va amaliy skriptlarga integratsiya qilish.",
      "flags": [],
      "whenToUse": "Kurs ishi hisoboti yozishda va Viva imtihoniga tayyorgarlikda.",
      "omissionRisk": "Sinxronizatsiya va race condition tahlilisiz yuqori ball (First Class / 70%+) olib bo'lmaydi.",
      "syntaxExample": "Week 8"
    }
  }
];
});
