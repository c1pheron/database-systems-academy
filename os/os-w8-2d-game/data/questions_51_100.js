/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 8 QUESTIONS (PART 2: 51–100)
 * Sectors: 4 (Python Threading 6-15), 5 (Mutex & with lock:), 6 (Semaphores), 7 (Condition Variables 1-10)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W8_PART2 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 51,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Faol Oqimlar Soni (threading.active_count())",
    "story": "Hozirgi paytda tizimda nechta tirik oqim mavjudligini aniqlash zarur.",
    "task": "Faol oqimlar sonini qaytaruvchi funksiyani yozing.",
    "canonical": "threading.active_count()",
    "accepted": [
      "threading.active_count()",
      "threading.activeCount()"
    ],
    "tags": [
      "#ACTIVE_COUNT",
      "#METRICS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Joriy jarayonda ishlayotgan jami oqimlar sonini qaytarish.",
      "flags": [],
      "whenToUse": "Resurslar sarfini va oqimlar sizib ketishini (leak) monitoring qilishda.",
      "omissionRisk": "Asosiy oqim (MainThread) doimo bu son ichida bo'ladi.",
      "syntaxExample": "threading.active_count()"
    }
  },
  {
    "id": 52,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Joriy Oqim Nomini Aniqlash",
    "story": "Funksiya qaysi oqim ichida bajarilayotganini aniqlash uchun `current_thread()` dan foydalaniladi.",
    "task": "Ayni damdagi oqim nomini chiqaruvchi ifodani yozing.",
    "canonical": "threading.current_thread().name",
    "accepted": [
      "threading.current_thread().name",
      "threading.currentThread().name"
    ],
    "tags": [
      "#CURRENT_THREAD",
      "#INTROSPECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kod aynan qaysi oqim ostida ishlayotganini aniqlash.",
      "flags": [],
      "whenToUse": "Ko'p oqimli xizmatlarda log yozishda.",
      "omissionRisk": "Har bir worker o'z logiga o'z nomini qo'shishi uchun kerak.",
      "syntaxExample": "threading.current_thread().name"
    }
  },
  {
    "id": 53,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Barcha Faol Oqimlar Ro'yxati (threading.enumerate())",
    "story": "Xotiradagi barcha tirik oqim obyektlarini ko'rib chiqish talab etiladi.",
    "task": "Barcha faol oqimlar ro'yxatini qaytaruvchi funksiyani yozing.",
    "canonical": "threading.enumerate()",
    "accepted": [
      "threading.enumerate()",
      "threading.enumerate();"
    ],
    "tags": [
      "#ENUMERATE",
      "#AUDIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha tirik Thread obyektlarining ro'yxatini olish.",
      "flags": [],
      "whenToUse": "Dastur yakunida qaysi oqimlar hali yopilmaganini tahlil qilishda.",
      "omissionRisk": "Ular orasida demon va asosiy oqimlar ham bo'ladi.",
      "syntaxExample": "threading.enumerate()"
    }
  },
  {
    "id": 54,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Demon Oqim Belgilash (t.daemon = True)",
    "story": "Asosiy dastur yopilganda orqada osilib qolmasdan, dastur bilan birga darhol o'ladigan yordamchi oqim.",
    "task": "t oqimini demon qilib belgilovchi buyruqni bering.",
    "canonical": "t.daemon = True",
    "accepted": [
      "t.daemon = True",
      "t.daemon=True",
      "t.setDaemon(True)"
    ],
    "tags": [
      "#DAEMON_THREAD",
      "#BACKGROUND"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimni fon xizmati sifatida belgilash.",
      "flags": [],
      "whenToUse": "Monitoring, kesh tozalash kabi yordamchi oqimlarda.",
      "omissionRisk": "Demon bo'lmagan (non-daemon) oqim tirik tursa Python dasturi hech qachon yopilmaydi.",
      "syntaxExample": "t.daemon = True"
    }
  },
  {
    "id": 55,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Thread Sinfidan Meros Olish (Subclassing)",
    "story": "Murakkab oqim logikasini ob'ektga yo'naltirilgan uslubda yaratish uchun `threading.Thread` dan voris olinadi.",
    "task": "WorkerThread sinfini Thread dan meros olib e'lon qiling.",
    "canonical": "class WorkerThread(threading.Thread):",
    "accepted": [
      "class WorkerThread(threading.Thread):",
      "class WorkerThread(threading.Thread) :"
    ],
    "tags": [
      "#OOP",
      "#SUBCLASS",
      "#THREAD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Maxsus oqim klassini yaratish.",
      "flags": [],
      "whenToUse": "Oqim o'zining ichki holati va metodlariga ega bo'lishi kerak bo'lganda.",
      "omissionRisk": "Super klass konstruktori `super().__init__()` chaqirilishi shart.",
      "syntaxExample": "class WorkerThread(threading.Thread):"
    }
  },
  {
    "id": 56,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "run() Metodini Qayta Yozish",
    "story": "Meros olingan oqim sinfida oqim ishga tushganda bajariladigan kod qaysi metod ichiga yoziladi?",
    "task": "Ushbu asosiy ijro metodini aniqlang.",
    "canonical": "def run(self):",
    "accepted": [
      "def run(self):",
      "def run(self) :"
    ],
    "tags": [
      "#RUN_METHOD",
      "#OVERRIDE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimning asosiy bajarish mantiqini aniqlash.",
      "flags": [],
      "whenToUse": "start() chaqirilganda fon oqimida ushbu run() metodi bajariladi.",
      "omissionRisk": "Agar run() o'rniga boshqa nom berilsa, oqim bo'sh o'tib ketadi.",
      "syntaxExample": "def run(self):"
    }
  },
  {
    "id": 57,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "GIL Cheklovi (Global Interpreter Lock)",
    "story": "CPython da xotirani boshqarish (reference counting) xavfsizligi uchun bir vaqtda faqat bitta oqim Python baytkodini bajarishiga ruxsat beruvchi mexanizm.",
    "task": "Ushbu mashhur qisqartmani (3 ta harf) yozing.",
    "canonical": "GIL",
    "accepted": [
      "GIL",
      "gil",
      "Global Interpreter Lock"
    ],
    "tags": [
      "#GIL",
      "#CPYTHON"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPython xotirasini poyga holatlaridan himoya qilish.",
      "flags": [],
      "whenToUse": "CPU-intensive hisoblashlarda ko'p yadrolardan foydalana olmaslik sababini tushuntirishda.",
      "omissionRisk": "GIL sababli Python da CPU-bound vazifalar threading bilan tezlashmaydi.",
      "syntaxExample": "GIL"
    }
  },
  {
    "id": 58,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "CPU-Bound Vazifalar Uchun Yechim: multiprocessing",
    "story": "GIL cheklovini yengib, bir nechta CPU yadrolaridan 100% foydalanish uchun oqimlar o'rniga qaysi modul ishlatiladi?",
    "task": "Ushbu standart Python modulini yozing.",
    "canonical": "multiprocessing",
    "accepted": [
      "multiprocessing",
      "import multiprocessing"
    ],
    "tags": [
      "#MULTIPROCESSING",
      "#CPU_BOUND"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har biri o'zining mustaqil Python tarjimoni va xotirasiga ega bo'lgan jarayonlar yaratish.",
      "flags": [],
      "whenToUse": "Og'ir matematik hisoblar, rasm/video qayta ishlash va ma'lumotlar tahlilida.",
      "omissionRisk": "Oqimlarga qaraganda jarayonlararo aloqa (IPC) qimmatroqdir.",
      "syntaxExample": "import multiprocessing"
    }
  },
  {
    "id": 59,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "I/O-Bound Vazifalar Uchun Threading Samarasi",
    "story": "Fayl o'qish, tarmoq so'rovlari yoki ma'lumotlar bazasini kutish vaqtida Python GIL ni bo'shatadi. Bu holat qanday nomlanadi?",
    "task": "Bunday vazifalar turini yozing (I/O-bound yoki CPU-bound?).",
    "canonical": "I/O-bound",
    "accepted": [
      "I/O-bound",
      "io bound",
      "IO-bound"
    ],
    "tags": [
      "#IO_BOUND",
      "#OPTIMIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutish jarayonlarida oqimlarning parallel ishlashidan maksimal foyda olish.",
      "flags": [],
      "whenToUse": "Web scraping, API so'rovlari va fayl yuklashlarda.",
      "omissionRisk": "I/O operatsiyalarida threading juda yuqori samaradorlik beradi.",
      "syntaxExample": "I/O-bound"
    }
  },
  {
    "id": 60,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Oqim Xatolarini Tutish (Exception Handling)",
    "story": "Alohida oqim ichida yuz bergan istisno (exception) asosiy oqimga avtomatik o'tmaydi va oqimni jim o'ldiradi.",
    "task": "Oqim ichida xatolarni ushlash uchun qaysi blok qo'llaniladi?",
    "canonical": "try...except",
    "accepted": [
      "try...except",
      "try except",
      "try/except"
    ],
    "tags": [
      "#EXCEPTION",
      "#ERROR_HANDLING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqim ichidagi kutilmagan xatoliklarni ushlab loglash.",
      "flags": [],
      "whenToUse": "Har bir workerning run() metodi ichida.",
      "omissionRisk": "try...except bo'lmasa oqim xato bilan yopiladi va boshqa qismlar bundan bexabar qoladi.",
      "syntaxExample": "try...except"
    }
  },
  {
    "id": 61,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Mutex Obyektini Yaratish (threading.Lock())",
    "story": "L08 Mutex: Kritik bo'limni o'zaro istisno bilan himoyalash uchun Mutex qulf obyekti kerak.",
    "task": "Yangi Lock obyektini yaratib 'lock' o'zgaruvchisiga biriktiring.",
    "canonical": "lock = threading.Lock()",
    "accepted": [
      "lock = threading.Lock()",
      "lock=threading.Lock()"
    ],
    "tags": [
      "#MUTEX",
      "#LOCK",
      "#PYTHON"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kritik bo'limni bitta oqimga biriktiruvchi binar qulf yaratish.",
      "flags": [],
      "whenToUse": "Bir vaqtda faqat bitta oqim umumiy resursni o'zgartirishi lozim bo'lganda.",
      "omissionRisk": "Qulf yaratilmasa oqimlararo sinxronizatsiyani amalga oshirib bo'lmaydi.",
      "syntaxExample": "lock = threading.Lock()"
    }
  },
  {
    "id": 62,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Qulfni Band Qilish (lock.acquire())",
    "story": "Kritik bo'limga kirishdan oldin oqim qulfni o'ziga olishi kerak. Agar boshqa oqim ushlab turgan bo'lsa, u kutadi.",
    "task": "Qulfni band qiluvchi metodni chaqiring.",
    "canonical": "lock.acquire()",
    "accepted": [
      "lock.acquire()",
      "lock.acquire();"
    ],
    "tags": [
      "#ACQUIRE",
      "#ENTRY_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulfni egallash. Agar band bo'lsa, bo'shaguncha oqimni to'xtatib turish.",
      "flags": [],
      "whenToUse": "Kritik bo'lim boshlanishida.",
      "omissionRisk": "acquire qilinmasa o'zaro istisno ta'minlanmaydi.",
      "syntaxExample": "lock.acquire()"
    }
  },
  {
    "id": 63,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Qulfni Bo'shatish (lock.release())",
    "story": "Kritik bo'lim tugashi bilan boshqa oqimlar kira olishi uchun qulf ochilishi shart.",
    "task": "Qulfni bo'shatuvchi metodni chaqiring.",
    "canonical": "lock.release()",
    "accepted": [
      "lock.release()",
      "lock.release();"
    ],
    "tags": [
      "#RELEASE",
      "#EXIT_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulfni ochish va kutayotgan navbatdagi oqimga kirish imkonini berish.",
      "flags": [],
      "whenToUse": "Kritik bo'lim tugagach zudlik bilan.",
      "omissionRisk": "Agar release chaqirilmasa, boshqa barcha oqimlar abadiy kutib qoladi (deadlock).",
      "syntaxExample": "lock.release()"
    }
  },
  {
    "id": 64,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Bloklanmasdan Qulfni Tekshirish (blocking=False)",
    "story": "Oqim agar qulf band bo'lsa kutib qotib qolmasdan, boshqa ishini davom ettirishi kerak bo'lsa nima qilinadi?",
    "task": "Qulfni bloklanmasdan olishga urinuvchi buyruqni bering.",
    "canonical": "lock.acquire(blocking=False)",
    "accepted": [
      "lock.acquire(blocking=False)",
      "lock.acquire(False)"
    ],
    "tags": [
      "#NON_BLOCKING",
      "#TRY_LOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulf bo'sh bo'lsa darhol egallash (True), band bo'lsa darhol False qaytarish.",
      "flags": [],
      "whenToUse": "Deadlockning oldini olishda va oqimni behuda qotirmaslikda.",
      "omissionRisk": "Qaytarilgan boolean natijani tekshirish (if acquired:) shart.",
      "syntaxExample": "lock.acquire(blocking=False)"
    }
  },
  {
    "id": 65,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Taymout Bilan Qulf Olish (timeout=1.5)",
    "story": "Qulfni cheksiz emas, maksimum 1.5 soniya kutib, bo'shamasa boshqa chora ko'rish talab etiladi.",
    "task": "1.5 soniya taymout bilan acquire chaqiring.",
    "canonical": "lock.acquire(timeout=1.5)",
    "accepted": [
      "lock.acquire(timeout=1.5)",
      "lock.acquire(timeout = 1.5)"
    ],
    "tags": [
      "#TIMEOUT_LOCK",
      "#DEADLOCK_AVOIDANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Belgilangan vaqt kutib, qulf ochilmasa voz kechish.",
      "flags": [],
      "whenToUse": "Tizimning to'liq muzlab qolishining (deadlock) oldini olishda.",
      "omissionRisk": "Agar taymout tugasa False qaytadi, resursni o'zgartirish xavfli bo'ladi.",
      "syntaxExample": "lock.acquire(timeout=1.5)"
    }
  },
  {
    "id": 66,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Qulf Holatini Tekshirish (lock.locked())",
    "story": "Hozirgi paytda ushbu qulf biron bir oqim tomonidan band qilinganmi yoki bo'shmi?",
    "task": "Qulfning bandlik holatini tekshiruvchi metodni chaqiring.",
    "canonical": "lock.locked()",
    "accepted": [
      "lock.locked()",
      "lock.locked();"
    ],
    "tags": [
      "#LOCKED_STATUS",
      "#INSPECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulf band bo'lsa True, bo'sh bo'lsa False qaytarish.",
      "flags": [],
      "whenToUse": "Debag va monitoring qilishda.",
      "omissionRisk": "Tekshirish va keyingi amal o'rtasida poyga bo'lishi mumkinligi sababli buni acquire o'rniga qo'llab bo'lmaydi.",
      "syntaxExample": "lock.locked()"
    }
  },
  {
    "id": 67,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Eng Toza Usul: Kontekst Menejeri (with lock:)",
    "story": "Python ning eng xavfsiz va toza konstruksiyasi bo'lib, xato (exception) chiqsa ham avtomatik release bo'lishini kafolatlaydi.",
    "task": "Qulfni kontekst menejeri orqali ochuvchi sintaksisni yozing.",
    "canonical": "with lock:",
    "accepted": [
      "with lock:",
      "with lock :"
    ],
    "tags": [
      "#CONTEXT_MANAGER",
      "#WITH_LOCK",
      "#CLEAN_CODE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Blokka kirishda lock.acquire(), chiqishda avtomatik lock.release() qilish.",
      "flags": [],
      "whenToUse": "Kritik bo'limlarni himoyalashning rasmiy eng yaxshi amaliyoti (Best Practice).",
      "omissionRisk": "Qo'lda acquire/release yozish xatoliklarga (unreleased lock) olib keladi.",
      "syntaxExample": "with lock:"
    }
  },
  {
    "id": 68,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Qo'lda try...finally Usuli",
    "story": "Kontekst menejeri kapoti ostida qanday ishlaydi? Qulf ochilishini try...finally ning qaysi blokida chaqirish shart?",
    "task": "Kafolatlangan tozalash blokini yozing.",
    "canonical": "finally: lock.release()",
    "accepted": [
      "finally: lock.release()",
      "finally",
      "finally:"
    ],
    "tags": [
      "#FINALLY",
      "#EXCEPTION_SAFETY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har qanday xatolik yuz berganda ham qulf ochilishini ta'minlash.",
      "flags": [],
      "whenToUse": "Kontekst menejerisiz qulf ishlatilganda.",
      "omissionRisk": "finally bo'lmasa, dastur qulfni ushlab yiqiladi va butun tizim deadlockka uchraydi.",
      "syntaxExample": "finally: lock.release()"
    }
  },
  {
    "id": 69,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Qayta Kiruvchi Qulf (threading.RLock())",
    "story": "Bitta oqim o'zi egallab turgan qulfga yana qaytadan (rekursiv) kira olishi uchun oddiy Lock o'rniga nima ishlatiladi?",
    "task": "Re-entrant lock obyektini yaratib rlock ga biriktiring.",
    "canonical": "rlock = threading.RLock()",
    "accepted": [
      "rlock = threading.RLock()",
      "rlock=threading.RLock()"
    ],
    "tags": [
      "#RLOCK",
      "#REENTRANT_LOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta oqim tomonidan bir necha marta acquire qilinishi mumkin bo'lgan qulf.",
      "flags": [],
      "whenToUse": "Rekursiv funksiyalarda va bir metod ikkinchi himoyalangan metodni chaqirganda.",
      "omissionRisk": "Oddiy Lock bitta oqim qayta acquire qilsa o'zini o'zi deadlock qiladi.",
      "syntaxExample": "rlock = threading.RLock()"
    }
  },
  {
    "id": 70,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "RLock Hisoblagichi",
    "story": "RLock necha marta acquire qilingan bo'lsa, qulf to'liq bo'shashi uchun shuncha marta qaysi metod chaqirilishi kerak?",
    "task": "Qulfni bo'shatuvchi metod nomini yozing.",
    "canonical": "rlock.release()",
    "accepted": [
      "rlock.release()",
      "rlock.release();"
    ],
    "tags": [
      "#RLOCK",
      "#RECURSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ichki qulflash hisoblagichini 1 ga kamaytirish.",
      "flags": [],
      "whenToUse": "Rekursiya yoki o'ralgan metodlardan chiqishda.",
      "omissionRisk": "Agar hisoblagich 0 ga yetmasa qulf boshqa oqimlar uchun yopiq qolaveradi.",
      "syntaxExample": "rlock.release()"
    }
  },
  {
    "id": 71,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Himoyalangan Skriptni Ishga Tushirish (03_mutex_lock.py)",
    "story": "Mutex qo'llanilgan skript 10,000 dan ikkita oqim ishlaganda aynan 20,000 natijasini berishini tekshirish lozim.",
    "task": "Mutex qulfi bilan to'g'irlangan Python dasturini bajaring.",
    "canonical": "python3 03_mutex_lock.py",
    "accepted": [
      "python3 03_mutex_lock.py",
      "python 03_mutex_lock.py"
    ],
    "tags": [
      "#MUTEX_TEST",
      "#VERIFICATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mutex yordamida poyga holati to'liq bartaraf qilinganini isbotlash.",
      "flags": [],
      "whenToUse": "Kritik bo'lim xavfsizligini tekshirishda.",
      "omissionRisk": "Skript bajarilmasa natijaning aniqligiga ishonch hosil qilib bo'lmaydi.",
      "syntaxExample": "python3 03_mutex_lock.py"
    }
  },
  {
    "id": 72,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Noto'g'ri Release Xatosi (RuntimeError)",
    "story": "Boshqa oqim egallab turgan yoki umuman bloklanmagan qulf ustida `release()` chaqirilsa nima xato yuz beradi?",
    "task": "Python chiqaradigan istisno sinfi nomini yozing.",
    "canonical": "RuntimeError",
    "accepted": [
      "RuntimeError",
      "runtime_error"
    ],
    "tags": [
      "#RUNTIME_ERROR",
      "#LOCK_VIOLATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulflash protokolining buzilganligini ko'rsatish.",
      "flags": [],
      "whenToUse": "Qulflarni noto'g'ri oqimlardan bo'shatishga uringanda.",
      "omissionRisk": "Oddiy Lock faqat egasi tomonidan bo'shatilishi kerak.",
      "syntaxExample": "RuntimeError"
    }
  },
  {
    "id": 73,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Granularity: Dag'al va Nozik Qulflash (Fine vs Coarse)",
    "story": "Butun katta dasturni bitta qulf bilan o'rash (Coarse-grained) tezlikni o'ldiradi. Kichik bo'laklarni alohida qulflash qanday nomlanadi?",
    "task": "Nozik darajadagi qulflashning inglizcha atamasini yozing.",
    "canonical": "Fine-grained locking",
    "accepted": [
      "Fine-grained locking",
      "fine-grained",
      "fine grained"
    ],
    "tags": [
      "#FINE_GRAINED",
      "#ARCHITECTURE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bir vaqtning o'zida bir nechta mustaqil resurslar ustida parallel ishlash imkonini berish.",
      "flags": [],
      "whenToUse": "Katta ma'lumotlar bazalari va operatsion tizim yadrolarida.",
      "omissionRisk": "Qulflar soni ko'paygani sari Deadlock xavfi ham oshadi.",
      "syntaxExample": "Fine-grained locking"
    }
  },
  {
    "id": 74,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Kritik Bo'lim Ichida I/O Amalini Qilmaslik",
    "story": "Qulf olingan holatda fayl yozish, internetdan so'rov kutish kabi sekin amallarni bajarish boshqa oqimlarni nima qiladi?",
    "task": "Boshqa oqimlar holatini bir so'zda yozing (bloklaydi / tezlashtiradi).",
    "canonical": "bloklaydi",
    "accepted": [
      "bloklaydi",
      "to'xtatadi",
      "blocks"
    ],
    "tags": [
      "#PERFORMANCE",
      "#BEST_PRACTICE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kritik bo'limni imkon qadar tor va tezkor saqlash.",
      "flags": [],
      "whenToUse": "Tizim unumdorligini oshirish qoidalarida.",
      "omissionRisk": "Sekin I/O qulf ichiga tushsa butun tizim konveyeri to'xtaydi.",
      "syntaxExample": "bloklaydi"
    }
  },
  {
    "id": 75,
    "sectorId": 5,
    "sectorTitle": "Mutex Qulf: threading.Lock() & with lock: Konteksti",
    "title": "Python 3.13 No-GIL Rejimi (PEP 703)",
    "story": "Zamonaviy Python 3.13 da eksperimental tarzda kiritilgan, har bir oqimga haqiqiy parallel ko'p yadroli ishlash imkonini beruvchi rejim.",
    "task": "Ushbu rejim bayrog'ini yoki nomini yozing.",
    "canonical": "free-threaded",
    "accepted": [
      "free-threaded",
      "nogil",
      "no-gil"
    ],
    "tags": [
      "#PYTHON_3_13",
      "#FREE_THREADED"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPython dan global tarjimon qulfini olib tashlash.",
      "flags": [],
      "whenToUse": "Haqiqiy parallel ko'p oqimli hisob-kitoblarda.",
      "omissionRisk": "Kutubxonalarning thread-safety holati qayta tekshirilishi kerak bo'ladi.",
      "syntaxExample": "free-threaded"
    }
  },
  {
    "id": 76,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Sanoqli Semaphor Yaratish (qiymati 3)",
    "story": "L08 Semaphores: Bir vaqtning o'zida maksimal 3 ta oqim resursdan (masalan, DB connection) foydalana olsin.",
    "task": "3 ta ruxsatga ega Semaphore obyektini yarating.",
    "canonical": "sem = threading.Semaphore(3)",
    "accepted": [
      "sem = threading.Semaphore(3)",
      "sem=threading.Semaphore(3)"
    ],
    "tags": [
      "#SEMAPHORE",
      "#COUNTING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bir vaqtda belgilangan N ta oqimga resursdan foydalanishga ruxsat beruvchi hisoblagich.",
      "flags": [],
      "whenToUse": "Cheklangan resurslar (connection pool, server capacity) taqsimotida.",
      "omissionRisk": "Agar parametr berilmasa standart qiymati 1 bo'lib, binar semaphorga aylanadi.",
      "syntaxExample": "sem = threading.Semaphore(3)"
    }
  },
  {
    "id": 77,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Semaphordan Ruxsat Olish (sem.acquire())",
    "story": "Oqim resursdan foydalanmoqchi bo'lsa semaphor hisoblagichini 1 ga kamaytiradi. Agar 0 bo'lsa kutadi.",
    "task": "Semaphordan ruxsat so'rovchi metodni chaqiring.",
    "canonical": "sem.acquire()",
    "accepted": [
      "sem.acquire()",
      "sem.acquire();"
    ],
    "tags": [
      "#ACQUIRE",
      "#P_OPERATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Semaphor ichki qiymatini 1 taga kamaytirish (Dijkstra P amali).",
      "flags": [],
      "whenToUse": "Cheklangan resursga kirishdan oldin.",
      "omissionRisk": "Qiymat 0 bo'lsa oqim boshqa oqim release qilguncha uxlatiladi.",
      "syntaxExample": "sem.acquire()"
    }
  },
  {
    "id": 78,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Semaphorga Ruxsatni Qaytarish (sem.release())",
    "story": "Oqim o'z ishini tugatgach boshqa navbatdagi oqim kira olishi uchun hisoblagichni 1 ga oshiradi.",
    "task": "Semaphorni bo'shatuvchi metodni chaqiring.",
    "canonical": "sem.release()",
    "accepted": [
      "sem.release()",
      "sem.release();"
    ],
    "tags": [
      "#RELEASE",
      "#V_OPERATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Semaphor hisoblagichini 1 taga oshirish (Dijkstra V amali) va kutayotgan oqimni uyg'otish.",
      "flags": [],
      "whenToUse": "Resursdan foydalanib bo'lingach.",
      "omissionRisk": "Release unutilsa semaphor resurslari tugab, tizim sekin-asta to'xtab qoladi.",
      "syntaxExample": "sem.release()"
    }
  },
  {
    "id": 79,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Semaphor Kontekst Menejeri (with sem:)",
    "story": "Xatoliklar yuz berganda ham release unutilmasligi uchun Semaphore bilan context manager qo'llash tavsiya etiladi.",
    "task": "Semaphor kontekst menejeri sintaksisini yozing.",
    "canonical": "with sem:",
    "accepted": [
      "with sem:",
      "with sem :"
    ],
    "tags": [
      "#CONTEXT_MANAGER",
      "#WITH_SEM"
    ],
    "flagAnatomy": {
      "commandPurpose": "sem.acquire() va chiqishda sem.release() ni avtomatlashtirish.",
      "flags": [],
      "whenToUse": "Resurs cheklovlari mavjud bo'lgan barcha bloklarda.",
      "omissionRisk": "Istisno (exception) yuz berganda ham hisoblagich to'g'ri qaytariladi.",
      "syntaxExample": "with sem:"
    }
  },
  {
    "id": 80,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Binar Semaphor (Binary Semaphore)",
    "story": "Boshlang'ich qiymati aynan 1 bo'lgan semaphor xuddi Mutex kabi ishlaydi. U nima deb ataladi?",
    "task": "Ushbu semaphor turini yozing.",
    "canonical": "Binary Semaphore",
    "accepted": [
      "Binary Semaphore",
      "binary semaphore"
    ],
    "tags": [
      "#BINARY_SEMAPHORE",
      "#MUTEX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat 0 va 1 qiymatlari orasida o'zgaruvchi o'zaro istisno mexanizmi.",
      "flags": [],
      "whenToUse": "Mutex qulf talab qilingan joylarda.",
      "omissionRisk": "Mutexdan farqi: semaphorni uni qulflamagan boshqa oqim ham release qila oladi.",
      "syntaxExample": "Binary Semaphore"
    }
  },
  {
    "id": 81,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Chegaralangan Semaphor (threading.BoundedSemaphore)",
    "story": "Standart Semaphore da ehtiyotsizlik tufayli release ko'p chaqirilsa uning soni boshlang'ich qiymatdan oshib ketadi. Buni taqiqlovchi klass.",
    "task": "Boshlang'ich qiymati 2 bo'lgan BoundedSemaphore yarating.",
    "canonical": "bsem = threading.BoundedSemaphore(2)",
    "accepted": [
      "bsem = threading.BoundedSemaphore(2)",
      "bsem=threading.BoundedSemaphore(2)"
    ],
    "tags": [
      "#BOUNDED_SEMAPHORE",
      "#SAFETY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Semaphor soni uning boshlang'ich qiymatidan oshib ketishini taqiqlash.",
      "flags": [],
      "whenToUse": "Resurslarni qaytarishdagi dasturchi xatolarini zudlik bilan fosh qilishda.",
      "omissionRisk": "Ortiqcha release chaqirilsa ValueError istisnosini chiqaradi.",
      "syntaxExample": "bsem = threading.BoundedSemaphore(2)"
    }
  },
  {
    "id": 82,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Ortiqcha Release Xatosi (ValueError)",
    "story": "BoundedSemaphore da ruxsat berilgan hajmdan ko'proq release chaqirilsa Python qaysi xatoni chiqaradi?",
    "task": "Ushbu xatolik sinfini yozing.",
    "canonical": "ValueError",
    "accepted": [
      "ValueError",
      "value_error"
    ],
    "tags": [
      "#VALUE_ERROR",
      "#BOUNDED_SEMAPHORE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Semaphor hajmidan oshib ketganini ko'rsatish ('Semaphore released too many times').",
      "flags": [],
      "whenToUse": "Ortiqcha resurs qaytarilishini bartaraf qilishda.",
      "omissionRisk": "Standart semaphorda bu xato chiqmaydi va hisoblagich cheksiz o'sib ketishi mumkin.",
      "syntaxExample": "ValueError"
    }
  },
  {
    "id": 83,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Dijkstra P Operatsiyasi",
    "story": "Edsger Dijkstra tomonidan fanga kiritilgan semaphorning 'Proberen' (sinash/olish) amali zamonaviy tilda qaysi metodga to'g'ri keladi?",
    "task": "Python dagi mos metod nomini yozing.",
    "canonical": "acquire()",
    "accepted": [
      "acquire()",
      "acquire",
      "sem.acquire()"
    ],
    "tags": [
      "#DIJKSTRA",
      "#P_OP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dijkstraning tarixiy P (Proberen / to test) operatsiyasiga to'liq mos kelishi.",
      "flags": [],
      "whenToUse": "Resursni zaxiralashda.",
      "omissionRisk": "P amali atomik bo'lishi shart.",
      "syntaxExample": "acquire()"
    }
  },
  {
    "id": 84,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Dijkstra V Operatsiyasi",
    "story": "Dijkstraning 'Verhogen' (oshirish/chiqarish) amali zamonaviy tilda qaysi metodga to'g'ri keladi?",
    "task": "Python dagi mos metod nomini yozing.",
    "canonical": "release()",
    "accepted": [
      "release()",
      "release",
      "sem.release()"
    ],
    "tags": [
      "#DIJKSTRA",
      "#V_OP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dijkstraning tarixiy V (Verhogen / to increment) operatsiyasi.",
      "flags": [],
      "whenToUse": "Resursni qaytarish va boshqalarni uyg'otishda.",
      "omissionRisk": "V amali ham apparat darajasida atomikdir.",
      "syntaxExample": "release()"
    }
  },
  {
    "id": 85,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Ulanishlar Puli (Connection Pool) Modeli",
    "story": "Ma'lumotlar bazasiga bir vaqtda 5 tadan ortiq ulanish ochilmasligini ta'minlash uchun qaysi sinxronizatsiya mexanizmi eng qulay?",
    "task": "Ushbu vosita nomini yozing.",
    "canonical": "Semaphore",
    "accepted": [
      "Semaphore",
      "semaphore",
      "Counting Semaphore"
    ],
    "tags": [
      "#CONNECTION_POOL",
      "#USE_CASE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud resurslar pulini cheklash.",
      "flags": [],
      "whenToUse": "Backend tizimlarda ma'lumotlar bazasi yoki tashqi API limitlarida.",
      "omissionRisk": "Mutex faqat 1 ta ulanishga ruxsat beradi, semaphor esa bir nechta ulanishga.",
      "syntaxExample": "Semaphore"
    }
  },
  {
    "id": 86,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "So'rovlar Tezligini Cheklash (Rate Limiting)",
    "story": "Bir soniyada ko'pi bilan 10 ta so'rov qabul qilinishini boshqarish uchun semaphor taymer bilan birga ishlatiladi.",
    "task": "Bunday arxitektura modeli nima deyiladi?",
    "canonical": "Rate Limiter",
    "accepted": [
      "Rate Limiter",
      "rate limiter",
      "rate limiting"
    ],
    "tags": [
      "#RATE_LIMITER",
      "#TRAFFIC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Serverga tushayotgan yuklamani oqilona normallashtirish.",
      "flags": [],
      "whenToUse": "Mikroservislar va ommaviy API larda.",
      "omissionRisk": "Cheklov bo'lmasa DoS yuzaga kelishi mumkin.",
      "syntaxExample": "Rate Limiter"
    }
  },
  {
    "id": 87,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Semaphorda Bloklanmasdan Tekshirish",
    "story": "Agar semaphorda bo'sh joy bo'lsa olinsin, bo'sh joy bo'lmasa kutmasdan darhol qaytilsin.",
    "task": "sem.acquire metodiga qaysi parametr uzatiladi?",
    "canonical": "blocking=False",
    "accepted": [
      "blocking=False",
      "blocking = False",
      "False"
    ],
    "tags": [
      "#NON_BLOCKING",
      "#TRY_ACQUIRE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Semaphor resursi mavjudligini oqimni uxlatmasdan tekshirish.",
      "flags": [],
      "whenToUse": "Navbatda kutish maqsadga muvofiq bo'lmagan vaziyatlarda.",
      "omissionRisk": "Natija False bo'lsa darhol muqobil harakat qilinishi kerak.",
      "syntaxExample": "blocking=False"
    }
  },
  {
    "id": 88,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Semaphor Amaliy Skriptini Bajarish (04_semaphore.py)",
    "story": "4 ta oqim 2 ta resurs uchun navbat bilan kurashuvchi namunani sinab ko'rish zarur.",
    "task": "Semaphor dasturini terminalda ishga tushiring.",
    "canonical": "python3 04_semaphore.py",
    "accepted": [
      "python3 04_semaphore.py",
      "python 04_semaphore.py"
    ],
    "tags": [
      "#SEMAPHORE_RUN",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Semaphor orqali oqimlarning guruh bo'lib resursdan foydalanishini tekshirish.",
      "flags": [],
      "whenToUse": "Nazariy bilimlarni amalda tasdiqlashda.",
      "omissionRisk": "Skript bajarilmasa oqimlar almashinuvi vizual ko'rinmaydi.",
      "syntaxExample": "python3 04_semaphore.py"
    }
  },
  {
    "id": 89,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Semaphor va Mutex ning Farqi",
    "story": "Mutex faqat qulflagan oqim tomonidan ochilishi shart (Ownership tushunchasi bor). Semaphorda bu shart bormi?",
    "task": "Semaphorda 'ownership' (egalik) bormi? (ha / yo'q)",
    "canonical": "yo'q",
    "accepted": [
      "yo'q",
      "yoq",
      "no"
    ],
    "tags": [
      "#OWNERSHIP",
      "#MUTEX_VS_SEMAPHORE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mutex va Semaphore orasidagi asosiy kontseptual farqni tushunish.",
      "flags": [],
      "whenToUse": "Signal berish va jarayonlararo bildirishnomalarda.",
      "omissionRisk": "Bitta oqim acquire qilib boshqasi release qilishi mumkin (Signaling pattern).",
      "syntaxExample": "yo'q"
    }
  },
  {
    "id": 90,
    "sectorId": 6,
    "sectorTitle": "Sanoqli Semaphorlar: threading.Semaphore(value)",
    "title": "Counting Semaphore Maksimal Qiymati",
    "story": "Sanoqli semaphorning yuqori qiymati apparat arxitekturasidagi integer chegarasi bilan cheklanadi.",
    "task": "Bunday semaphorning ilmiy nomi nima?",
    "canonical": "Counting Semaphore",
    "accepted": [
      "Counting Semaphore",
      "counting semaphore"
    ],
    "tags": [
      "#COUNTING_SEMAPHORE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ixtiyoriy musbat butun sonli resurslar zaxirasini nazorat qilish.",
      "flags": [],
      "whenToUse": "Ko'p nusxali bir xil resurslar boshqaruvida.",
      "omissionRisk": "Resurslar tugaganda 0 bo'lib oqimlarni to'xtatadi.",
      "syntaxExample": "Counting Semaphore"
    }
  },
  {
    "id": 91,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Shartli O'zgaruvchi Yaratish (threading.Condition())",
    "story": "L08 Condition Variables: Oqim ma'lum bir murakkab shart (masalan, buferda ma'lumot paydo bo'lishi) bajarilgunicha uxlab turishi kerak.",
    "task": "Condition obyektini yaratib cv o'zgaruvchisiga biriktiring.",
    "canonical": "cv = threading.Condition()",
    "accepted": [
      "cv = threading.Condition()",
      "cv=threading.Condition()"
    ],
    "tags": [
      "#CONDITION_VAR",
      "#MONITOR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimlarga qulfni vaqtincha bo'shatib, bildirishnoma (signal) kutish imkonini beruvchi primitiv.",
      "flags": [],
      "whenToUse": "Band kutish (busy waiting) o'rniga oqimni xavfsiz uxlatish zarur bo'lganda.",
      "omissionRisk": "Condition har doim ichki Mutex qulfi bilan birga ishlaydi.",
      "syntaxExample": "cv = threading.Condition()"
    }
  },
  {
    "id": 92,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Condition Bilan Kontekst Olish (with cv:)",
    "story": "Condition metodlarini (wait, notify) chaqirishdan oldin oqim uning ichki qulfiga ega bo'lishi majburiydir.",
    "task": "Condition kontekst blokini ochuvchi sintaksisni yozing.",
    "canonical": "with cv:",
    "accepted": [
      "with cv:",
      "with cv :"
    ],
    "tags": [
      "#WITH_CV",
      "#ACQUIRE_CV"
    ],
    "flagAnatomy": {
      "commandPurpose": "Condition bilan bog'langan qulfni avtomatik egallash.",
      "flags": [],
      "whenToUse": "wait() yoki notify() chaqirishdan avval.",
      "omissionRisk": "Qulf olinmasdan wait() chaqirilsa RuntimeError: cannot wait on unacquired lock chiqadi.",
      "syntaxExample": "with cv:"
    }
  },
  {
    "id": 93,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Oqimni Uxlatish va Qulfni Bo'shatish (cv.wait())",
    "story": "Oqim shart bajarilmaganini ko'rsa, boshqalar kirib o'zgartira olishi uchun qulfni bo'shatadi va o'zi uyquga ketadi.",
    "task": "Oqimni kutish holatiga o'tkazuvchi metodni chaqiring.",
    "canonical": "cv.wait()",
    "accepted": [
      "cv.wait()",
      "cv.wait();"
    ],
    "tags": [
      "#WAIT",
      "#SLEEP_UNTIL_NOTIFIED"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulfni atomik tarzda bo'shatish va signal kelguncha oqimni to'xtatib turish.",
      "flags": [],
      "whenToUse": "Shart hali bajarilmagan paytda.",
      "omissionRisk": "Uyg'onganda qulfni yana qayta egallab oladi.",
      "syntaxExample": "cv.wait()"
    }
  },
  {
    "id": 94,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Bitta Kutayotgan Oqimni Uyg'otish (cv.notify())",
    "story": "Resurs o'zgargach, kutib yotgan oqimlardan bittasini uyg'otib ishini davom ettirishga ruxsat berish.",
    "task": "Bitta oqimni uyg'otuvchi metodni chaqiring.",
    "canonical": "cv.notify()",
    "accepted": [
      "cv.notify()",
      "cv.notify();"
    ],
    "tags": [
      "#NOTIFY",
      "#WAKEUP_ONE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutish navbatidagi aynan bitta oqimga bildirishnoma yuborish.",
      "flags": [],
      "whenToUse": "Faqat bitta iste'molchiga yetadigan yangi ma'lumot kelganda.",
      "omissionRisk": "Hech kim kutmayotgan bo'lsa xabar yo'qoladi (signal is lost).",
      "syntaxExample": "cv.notify()"
    }
  },
  {
    "id": 95,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Barcha Kutayotgan Oqimlarni Uyg'otish (cv.notify_all())",
    "story": "Tizim holati tubdan o'zgarganda barcha kutayotgan oqimlarni baravar uyg'otish talab etiladi.",
    "task": "Barcha oqimlarni uyg'otuvchi metodni chaqiring.",
    "canonical": "cv.notify_all()",
    "accepted": [
      "cv.notify_all()",
      "cv.notifyAll()"
    ],
    "tags": [
      "#NOTIFY_ALL",
      "#BROADCAST"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutayotgan barcha oqimlarni uyg'otish.",
      "flags": [],
      "whenToUse": "Hamma oqim qaytadan o'z shartini tekshirishi kerak bo'lgan holatlarda.",
      "omissionRisk": "Barcha oqimlar birdan uyg'onib qulf uchun kurash boshlaydi (Thundering Herd).",
      "syntaxExample": "cv.notify_all()"
    }
  },
  {
    "id": 96,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Soxta Uyg'onish (Spurious Wakeup) va while Sikli",
    "story": "Operatsion tizim oqimni hech qanday notify bo'lmasa ham soxta uyg'otib yuborishi mumkin. Shuning uchun if o'rniga nima ishlatiladi?",
    "task": "Kutish sharti qaysi sikl ichida bo'lishi kerak?",
    "canonical": "while",
    "accepted": [
      "while",
      "while sikli",
      "while loop"
    ],
    "tags": [
      "#SPURIOUS_WAKEUP",
      "#MESA_SEMANTICS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Soxta uyg'onish holatlarida shart qaytadan tekshirilishini ta'minlash (`while not condition: cv.wait()`).",
      "flags": [],
      "whenToUse": "Barcha zamonaviy operatsion tizimlarda (Mesa semantikasi).",
      "omissionRisk": "Agar oddiy `if` ishlatilsa, soxta uyg'ongan oqim ma'lumot bo'lmasa ham buzib o'tadi.",
      "syntaxExample": "while"
    }
  },
  {
    "id": 97,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Spurious Wakeup Atamasi",
    "story": "Signal kelmasdan oqimning o'z-o'zidan kutilmaganda uyg'onib ketishi ilmiy jihatdan nima deb ataladi?",
    "task": "Ushbu ilmiy atamani yozing.",
    "canonical": "Spurious Wakeup",
    "accepted": [
      "Spurious Wakeup",
      "spurious wakeup"
    ],
    "tags": [
      "#SPURIOUS_WAKEUP"
    ],
    "flagAnatomy": {
      "commandPurpose": "POSIX va Java/Python oqimlaridagi soxta uyg'onish hodisasini ifodalash.",
      "flags": [],
      "whenToUse": "Sinxronizatsiya algoritmlarini tahlil qilishda.",
      "omissionRisk": "Bu sababli hech qachon shartni if bilan tekshirib bo'lmaydi.",
      "syntaxExample": "Spurious Wakeup"
    }
  },
  {
    "id": 98,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Predikat Bilan Kutish (cv.wait_for(predicate))",
    "story": "Python 3 da while siklini avtomatlashtiruvchi qulay metod bor. U berilgan shart funksiyasi True bo'lguncha kutadi.",
    "task": "Predikat bilan kutuvchi metod chaqiruvini yozing.",
    "canonical": "cv.wait_for(predicate)",
    "accepted": [
      "cv.wait_for(predicate)",
      "cv.wait_for"
    ],
    "tags": [
      "#WAIT_FOR",
      "#PYTHON_API"
    ],
    "flagAnatomy": {
      "commandPurpose": "while sikli va cv.wait() ni birlashtirgan toza metod.",
      "flags": [],
      "whenToUse": "Kod o'qilishini soddalashtirish va xatolarni kamaytirishda.",
      "omissionRisk": "predicate funksiyasi parametr qabul qilmaydigan callable bo'lishi kerak.",
      "syntaxExample": "cv.wait_for(predicate)"
    }
  },
  {
    "id": 99,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Mavjud Mutexga Condition Bog'lash",
    "story": "Agar allaqachon yaratilgan maxsus qulfingiz bo'lsa, Condition ga o'sha qulfni uzatish mumkin.",
    "task": "lock obyekti asosida yangi Condition yarating.",
    "canonical": "cv = threading.Condition(lock)",
    "accepted": [
      "cv = threading.Condition(lock)",
      "cv=threading.Condition(lock)"
    ],
    "tags": [
      "#CUSTOM_LOCK",
      "#CONDITION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Maxsus Lock yoki RLock ni shartli o'zgaruvchiga ulash.",
      "flags": [],
      "whenToUse": "Bitta umumiy qulfga bir nechta mustaqil Condition lar (masalan, not_empty va not_full) ulashda.",
      "omissionRisk": "Agar uzatilmasa avtomatik yangi RLock yaratadi.",
      "syntaxExample": "cv = threading.Condition(lock)"
    }
  },
  {
    "id": 100,
    "sectorId": 7,
    "sectorTitle": "Shartli O'zgaruvchilar: threading.Condition() & wait()",
    "title": "Hoare Semantikasi: Signal-and-Wait",
    "story": "Klassik Hoare semantikasida signal bergan oqim zudlik bilan qulfni uyg'ongan oqimga topshiradi va o'zi kutadi.",
    "task": "Ushbu yondashuv nomini yozing.",
    "canonical": "Signal-and-Wait",
    "accepted": [
      "Signal-and-Wait",
      "signal and wait",
      "Hoare semantics"
    ],
    "tags": [
      "#HOARE",
      "#THEORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Uyg'ongan oqimning darhol ishlashini kafolatlash.",
      "flags": [],
      "whenToUse": "Nazariy monitor modellarida.",
      "omissionRisk": "Amaliyotda ko'p kontekst almashinuviga olib kelgani uchun deyarli barcha tizimlar Mesa ga o'tgan.",
      "syntaxExample": "Signal-and-Wait"
    }
  }
];
});
