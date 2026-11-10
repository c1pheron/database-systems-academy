/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 8 QUESTIONS (PART 1: 1–50)
 * Sectors: 1 (Race Conditions), 2 (Critical Section), 3 (Peterson & HW), 4 (Python Threading 1-5)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W8_PART1 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 1,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Poyga Holati Skriptini Bajarish (python3 02_race_condition.py)",
    "story": "L08 Concurrency: Bir nechta oqim umumiy xotirani himoyasiz o'zgartirganda yakuniy qiymat kutilganidan kam chiqadi.",
    "task": "Poyga holati (race condition) namoyish etilgan Python skriptini ishga tushiring.",
    "canonical": "python3 02_race_condition.py",
    "accepted": [
      "python3 02_race_condition.py",
      "python 02_race_condition.py"
    ],
    "tags": [
      "#RACE_CONDITION",
      "#CONCURRENCY",
      "#PYTHON"
    ],
    "flagAnatomy": {
      "commandPurpose": "Python skriptini ishga tushirish va poyga holati xatosini terminalda ko'rish.",
      "flags": [],
      "whenToUse": "Bir nechta oqimlar umumiy hisoblagichni yangilaganda yo'qotilgan yangilanishlarni (lost update) kuzatishda.",
      "omissionRisk": "Skript bajarilmasa oqimlarning parallel ishlashdagi xatoligi ko'rinmaydi.",
      "syntaxExample": "python3 02_race_condition.py"
    }
  },
  {
    "id": 2,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Python threading Modulini Import Qilish",
    "story": "Python tilida oqimlar (threads) bilan ishlash uchun standart kutubxona modulini import qilish kerak.",
    "task": "Standart oqimlar modulini import qiluvchi Python direktivasini yozing.",
    "canonical": "import threading",
    "accepted": [
      "import threading",
      "import threading;"
    ],
    "tags": [
      "#THREADING",
      "#IMPORT",
      "#PYTHON"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimlar (Thread, Lock, Semaphore, Event) bilan ishlash kutubxonasini yuklash.",
      "flags": [],
      "whenToUse": "Dasturda parallel oqimlar yaratish va sinxronizatsiya mexanizmlaridan foydalanishda.",
      "omissionRisk": "Modul import qilinmasa Thread va Lock sinflariga murojaat qilib bo'lmaydi.",
      "syntaxExample": "import threading"
    }
  },
  {
    "id": 3,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Umumiy Resurs O'zgaruvchisi (counter = 0)",
    "story": "Bir nechta oqimlar bir vaqtda kirib kelishi va oshirishi uchun umumiy xotirada hisoblagich e'lon qilinadi.",
    "task": "Umumiy 'counter' o'zgaruvchisini 0 qiymati bilan boshlang'ich e'lon qiling.",
    "canonical": "counter = 0",
    "accepted": [
      "counter = 0",
      "counter=0"
    ],
    "tags": [
      "#SHARED_STATE",
      "#VARIABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimlar o'rtasida bo'lishiladigan umumiy holatni yaratish.",
      "flags": [],
      "whenToUse": "Kritik bo'lim va poyga holatini tahlil qilishda umumiy hisoblagich sifatida.",
      "omissionRisk": "Boshlang'ich qiymatsiz hisoblagichni oshirish (+= 1) NameError xatosini beradi.",
      "syntaxExample": "counter = 0"
    }
  },
  {
    "id": 4,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "O'zgaruvchini Oshirish Buyrug'i (counter += 1)",
    "story": "Dasturchi uchun `counter += 1` bitta buyruqdek ko'rinadi, ammo u mashina tilida 3 ta alohida atomik bo'lmagan qadamdir.",
    "task": "Hisoblagichni 1 ga oshirish amalini yozing.",
    "canonical": "counter += 1",
    "accepted": [
      "counter += 1",
      "counter=counter+1",
      "counter = counter + 1"
    ],
    "tags": [
      "#RACE_CONDITION",
      "#ATOMICITY"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'zgaruvchi qiymatini 1 taga oshirish (Read, Modify, Write).",
      "flags": [],
      "whenToUse": "Kritik bo'lim ichida yoki poyga holatida resursni yangilashda.",
      "omissionRisk": "Lock bo'lmasa 2 ta oqim bir vaqtda eski qiymatni o'qib, bittasini yo'qotadi.",
      "syntaxExample": "counter += 1"
    }
  },
  {
    "id": 5,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Baytkod Dissassemblerini Tekshirish (python3 -m dis)",
    "story": "Python baytkodida `counter += 1` qanday buyruqlarga bo'linishini ko'rish uchun `dis` modulidan foydalaniladi.",
    "task": "Python buyruqlarining baytkodini ko'rish uchun dis modulini skriptga qo'llang.",
    "canonical": "python3 -m dis 02_race_condition.py",
    "accepted": [
      "python3 -m dis 02_race_condition.py",
      "python -m dis 02_race_condition.py"
    ],
    "tags": [
      "#DISASSEMBLY",
      "#BYTECODE",
      "#ATOMICTY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Python kodini virtual mashina baytkodi (LOAD, BINARY_OP, STORE) ko'rinishida tahlil qilish.",
      "flags": [
        {
          "flag": "-m dis",
          "meaning": "dis dissassembler modulini ishga tushirish",
          "syntax": "python3 -m dis fayl.py"
        }
      ],
      "whenToUse": "Kod qaysi nuqtada oqimlar almashinuvi tufayli buzilishi mumkinligini isbotlashda.",
      "omissionRisk": "-m dis berilmasa baytkod ko'rinmaydi va buyruq atomik deb xomxayol qilinadi.",
      "syntaxExample": "python3 -m dis 02_race_condition.py"
    }
  },
  {
    "id": 6,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Atomik Bo'lmagan Qadam: LOAD_GLOBAL",
    "story": "Baytkoddagi 1-qadam: umumiy o'zgaruvchining joriy qiymati registor/stackka yuklanadi.",
    "task": "Hisoblagich qiymatini xotiradan stackka yuklovchi baytkod instruksiyasini yozing.",
    "canonical": "LOAD_GLOBAL counter",
    "accepted": [
      "LOAD_GLOBAL counter",
      "LOAD_GLOBAL"
    ],
    "tags": [
      "#BYTECODE",
      "#LOAD_GLOBAL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Global o'zgaruvchini stack xotiraga yuklash.",
      "flags": [],
      "whenToUse": "Atomik bo'lmagan operatsiyalarning boshlang'ich o'qish qadamida.",
      "omissionRisk": "O'qilgan vaqtda boshqa oqim qiymatni o'zgartirib yuborsa eski qiymat qoladi.",
      "syntaxExample": "LOAD_GLOBAL counter"
    }
  },
  {
    "id": 7,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Atomik Bo'lmagan Qadam: BINARY_OP (Add)",
    "story": "Baytkoddagi 2-qadam: yuklangan qiymatga 1 soni qo'shiladi va natija stackda ushlab turiladi.",
    "task": "Qo'shish amalini bajaruvchi Python baytkod instruksiyasini ko'rsating.",
    "canonical": "BINARY_OP 0",
    "accepted": [
      "BINARY_OP 0",
      "BINARY_ADD",
      "BINARY_OP"
    ],
    "tags": [
      "#BYTECODE",
      "#ALU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Stackdagi ikki qiymat ustida arifmetik qo'shish amalini bajarish.",
      "flags": [],
      "whenToUse": "Qo'shish jarayonida vaqtinchalik oraliq natijani hisoblashda.",
      "omissionRisk": "Bu qadamda CPU context switch qilsa, natija hali global xotiraga yozilmagan bo'ladi.",
      "syntaxExample": "BINARY_OP 0"
    }
  },
  {
    "id": 8,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Atomik Bo'lmagan Qadam: STORE_GLOBAL",
    "story": "Baytkoddagi 3-qadam: stackdagi yangi hisoblangan qiymat global `counter` xotirasiga yoziladi.",
    "task": "Natijani qayta global xotiraga saqlovchi baytkod instruksiyasini yozing.",
    "canonical": "STORE_GLOBAL counter",
    "accepted": [
      "STORE_GLOBAL counter",
      "STORE_GLOBAL"
    ],
    "tags": [
      "#BYTECODE",
      "#STORE_GLOBAL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Natijani xotiradagi o'zgaruvchiga yozish.",
      "flags": [],
      "whenToUse": "Yozish amali bilan o'zgaruvchini yangilashda.",
      "omissionRisk": "Agar boshqa oqim oraliqda o'zgartirgan bo'lsa, bu yozish o'sha o'zgarishni yo'qqa chiqaradi.",
      "syntaxExample": "STORE_GLOBAL counter"
    }
  },
  {
    "id": 9,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Oqimlar Almashinuvini Qo'zg'atish (time.sleep)",
    "story": "Poyga holatini yaqqol keltirib chiqarish uchun o'qish va yozish orasiga sun'iy mikro-kechikish qo'shiladi.",
    "task": "Joriy oqimni 0.001 soniyaga to'xtatuvchi buyruqni yozing.",
    "canonical": "time.sleep(0.001)",
    "accepted": [
      "time.sleep(0.001)",
      "time.sleep(0)"
    ],
    "tags": [
      "#PREEMPTION",
      "#SLEEP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimni belgilangan vaqtga uxlatib, CPU ni boshqa oqimlarga berish.",
      "flags": [],
      "whenToUse": "Kontekst almashinuvini majburlab poyga holatini namoyish etishda.",
      "omissionRisk": "Juda tez bajarilsa race condition har doim ham yuz bermasligi mumkin.",
      "syntaxExample": "time.sleep(0.001)"
    }
  },
  {
    "id": 10,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "1-Ishchi Oqimni Yaratish (threading.Thread)",
    "story": "Umumiy funksiyani bajarishi uchun birinchi oqim obyektini e'lon qilish lozim.",
    "task": "Targeti 'worker' bo'lgan t1 oqimini yarating.",
    "canonical": "t1 = threading.Thread(target=worker)",
    "accepted": [
      "t1 = threading.Thread(target=worker)",
      "t1=threading.Thread(target=worker)"
    ],
    "tags": [
      "#THREAD",
      "#SPAWN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yangi ishchi oqim obyektini yaratish.",
      "flags": [],
      "whenToUse": "Parallel yoki raqobatdosh vazifalarni boshlash uchun oqim tayyorlashda.",
      "omissionRisk": "Target ko'rsatilsa ham start() chaqirilmasa oqim ishga tushmaydi.",
      "syntaxExample": "t1 = threading.Thread(target=worker)"
    }
  },
  {
    "id": 11,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "2-Ishchi Oqimni Yaratish (t2)",
    "story": "Raqobat hosil bo'lishi uchun kamida ikkita oqim bir vaqtda bitta funksiyani bajarishi kerak.",
    "task": "Xuddi shu target bilan t2 oqimini yarating.",
    "canonical": "t2 = threading.Thread(target=worker)",
    "accepted": [
      "t2 = threading.Thread(target=worker)",
      "t2=threading.Thread(target=worker)"
    ],
    "tags": [
      "#THREAD",
      "#RACE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ikkinchi parallel ishchi oqimni yaratish.",
      "flags": [],
      "whenToUse": "Bir nechta oqim umumiy resurs ustida ishlashini tashkil qilishda.",
      "omissionRisk": "Bitta oqim bilan hech qachon poyga holati yuzaga kelmaydi.",
      "syntaxExample": "t2 = threading.Thread(target=worker)"
    }
  },
  {
    "id": 12,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "1-Oqimni Ishga Tushirish (t1.start())",
    "story": "Oqim yaratilgandan so'ng uning operatsion tizimdagi mustaqil ijrosini boshlash kerak.",
    "task": "t1 oqimining ijrosini boshlovchi buyruqni bering.",
    "canonical": "t1.start()",
    "accepted": [
      "t1.start()",
      "t1.start();"
    ],
    "tags": [
      "#START",
      "#THREAD_EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimni operatsion tizim rejalashtiruvchisiga topshirish va run() metodini chaqirish.",
      "flags": [],
      "whenToUse": "Oqimni parallel bajarishga yuborishda.",
      "omissionRisk": "Agar start() o'rniga run() chaqirilsa, yangi oqim ochilmaydi, asosiy oqimda ketma-ket bajariladi.",
      "syntaxExample": "t1.start()"
    }
  },
  {
    "id": 13,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "2-Oqimni Ishga Tushirish (t2.start())",
    "story": "Ikkinchi oqim ham start qilinsa, ikkala oqim CPU da bir vaqtda yoki vaqt bo'laklarida parallel yuguradi.",
    "task": "t2 oqimini ishga tushiring.",
    "canonical": "t2.start()",
    "accepted": [
      "t2.start()",
      "t2.start();"
    ],
    "tags": [
      "#START",
      "#PARALLEL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ikkinchi oqimni fon rejimida mustaqil ishga tushirish.",
      "flags": [],
      "whenToUse": "Ikkita parallel jarayonni sinxron emas, bir vaqtda yurgizishda.",
      "omissionRisk": "Oqim start qilinmasa umumiy vazifa yakuniga yetmaydi.",
      "syntaxExample": "t2.start()"
    }
  },
  {
    "id": 14,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Oqimlarni Kutish (t1.join() va t2.join())",
    "story": "Asosiy oqim (MainThread) natijani chop etishdan oldin barcha ishchi oqimlar tugashini kutishi shart.",
    "task": "t1 oqimi to'liq tugashini kutuvchi buyruqni bering.",
    "canonical": "t1.join()",
    "accepted": [
      "t1.join()",
      "t1.join();"
    ],
    "tags": [
      "#JOIN",
      "#SYNCHRONIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Asosiy oqimni ko'rsatilgan oqim tugagunga qadar to'xtatib turish (bloklash).",
      "flags": [],
      "whenToUse": "Natijalarni yig'ish yoki umumiy hisobot chiqarishdan oldin.",
      "omissionRisk": "join() chaqirilmasa, asosiy dastur oqimlar hali ishini tugatmasdanoq o'zgaruvchini o'qib noto'g'ri natija ko'rsatadi.",
      "syntaxExample": "t1.join()"
    }
  },
  {
    "id": 15,
    "sectorId": 1,
    "sectorTitle": "Parallel Bajarilish & Poyga Holati (Race Condition)",
    "title": "Natijani Tahlil Qilish (print(counter))",
    "story": "Har bir oqim 10,000 marta oshirdi. Agar poyga bo'lsa, natija 20,000 dan ancha kam chiqadi.",
    "task": "Hisoblagichning yakuniy qiymatini konsolga chiqarish buyrug'ini yozing.",
    "canonical": "print(counter)",
    "accepted": [
      "print(counter)",
      "print(counter);"
    ],
    "tags": [
      "#PRINT",
      "#AUDIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yakuniy hisoblagich qiymatini ekranga chiqarish.",
      "flags": [],
      "whenToUse": "Poyga holati sababli ma'lumotlar yo'qolganini ko'rishda.",
      "omissionRisk": "Chiqarilmasa poyga yuz bergan-bermaganligi fosh bo'lmaydi.",
      "syntaxExample": "print(counter)"
    }
  },
  {
    "id": 16,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "1-Shart: O'zaro Istisno (Mutual Exclusion)",
    "story": "L08 CS Problem: Agar bir jarayon o'zining kritik bo'limida ishlayotgan bo'lsa, boshqa hech bir jarayon u yerga kira olmasligi shart.",
    "task": "Ushbu 1-talabning inglizcha ilmiy atamasini yozing.",
    "canonical": "Mutual Exclusion",
    "accepted": [
      "Mutual Exclusion",
      "mutual exclusion",
      "mutex"
    ],
    "tags": [
      "#MUTUAL_EXCLUSION",
      "#CRITICAL_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kritik bo'limning eng asosiy qoidasi: bir vaqtda faqat 1 ta jarayon kirishi mumkin.",
      "flags": [],
      "whenToUse": "Resurs yaxlitligini ta'minlash va race condition ni 100% oldini olishda.",
      "omissionRisk": "Agar buzilsa umumiy ma'lumotlar buziladi (data corruption).",
      "syntaxExample": "Mutual Exclusion"
    }
  },
  {
    "id": 17,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "2-Shart: Rivojlanish / Siljish (Progress)",
    "story": "Agar kritik bo'limda hech kim bo'lmasa va bir necha jarayon kirmoqchi bo'lsa, qolgan bo'limdagi (remainder) jarayonlar tanlovda ishtirok etmaydi.",
    "task": "Ushbu 2-talabning inglizcha ilmiy atamasini yozing.",
    "canonical": "Progress",
    "accepted": [
      "Progress",
      "progress"
    ],
    "tags": [
      "#PROGRESS",
      "#CRITICAL_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kritik bo'limga kirish qarori cheksiz orqaga surilmasligini kafolatlash.",
      "flags": [],
      "whenToUse": "Deadlock (hech kim kira olmay to'xtab qolish) holatiga yo'l qo'ymaslikda.",
      "omissionRisk": "Agar Progress buzilsa, tizimda hech bir jarayon oldinga siljiy olmaydi.",
      "syntaxExample": "Progress"
    }
  },
  {
    "id": 18,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "3-Shart: Cheklangan Kutish (Bounded Waiting)",
    "story": "Jarayon kirishni so'raganidan so'ng, uning arizasi qondirilguncha boshqa jarayonlar kirish soni cheklangan bo'lishi shart.",
    "task": "Ushbu 3-talabning inglizcha ilmiy atamasini yozing.",
    "canonical": "Bounded Waiting",
    "accepted": [
      "Bounded Waiting",
      "bounded waiting"
    ],
    "tags": [
      "#BOUNDED_WAITING",
      "#STARVATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Hech bir jarayon cheksiz ochlikda (starvation) qolib ketmasligini ta'minlash.",
      "flags": [],
      "whenToUse": "Adolatli navbat tizimini yaratishda.",
      "omissionRisk": "Buzilsa past ustuvorlikdagi oqim umrbot kutib qoladi (starvation).",
      "syntaxExample": "Bounded Waiting"
    }
  },
  {
    "id": 19,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Kritik Bo'lim Tuzilishi: Entry Section",
    "story": "Kritik bo'limga kirishdan avval ruxsat so'raladigan kod qismi nima deb ataladi?",
    "task": "Kirish bo'limi nomini inglizcha atamada yozing.",
    "canonical": "Entry Section",
    "accepted": [
      "Entry Section",
      "entry section"
    ],
    "tags": [
      "#ENTRY_SECTION",
      "#STRUCTURE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulf olish yoki bayroq ko'tarish orqali ruxsat tekshirish.",
      "flags": [],
      "whenToUse": "Kritik bo'limga o'tishdan oldin boshqa oqimlarni to'xtatishda.",
      "omissionRisk": "Entry Section bo'lmasa oqim to'g'ridan-to'g'ri kritik resursga bostirib kiradi.",
      "syntaxExample": "Entry Section"
    }
  },
  {
    "id": 20,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Kritik Bo'lim Tuzilishi: Critical Section",
    "story": "Umumiy o'zgaruvchi, fayl yoki ma'lumotlar bazasi to'g'ridan-to'g'ri o'zgartiriladigan xavfli kod qismi.",
    "task": "Ushbu markaziy bo'lim nomini yozing.",
    "canonical": "Critical Section",
    "accepted": [
      "Critical Section",
      "critical section"
    ],
    "tags": [
      "#CRITICAL_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Umumiy resurslar ustida o'zgartirish operatsiyalarini o'tkazish.",
      "flags": [],
      "whenToUse": "Faqat bir vaqtda bitta jarayon ishlashi shart bo'lgan nuqtalarda.",
      "omissionRisk": "Ushbu qism imkon qadar qisqa bo'lishi kerak, aks holda tezlik keskin tushadi.",
      "syntaxExample": "Critical Section"
    }
  },
  {
    "id": 21,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Kritik Bo'lim Tuzilishi: Exit Section",
    "story": "Kritik bo'limdagi ish tugagach, boshqa kutayotgan jarayonlarga yo'l ochuvchi kod qismi.",
    "task": "Chiqish bo'limi atamasini yozing.",
    "canonical": "Exit Section",
    "accepted": [
      "Exit Section",
      "exit section"
    ],
    "tags": [
      "#EXIT_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulfni bo'shatish yoki bayroqni tushirish.",
      "flags": [],
      "whenToUse": "Kritik bo'limdan chiqish zahoti boshqalarni xabardor qilishda.",
      "omissionRisk": "Exit qilinmasa qulf ochiq qolmaydi va boshqa oqimlar umrbod deadlockka tushadi.",
      "syntaxExample": "Exit Section"
    }
  },
  {
    "id": 22,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Kritik Bo'lim Tuzilishi: Remainder Section",
    "story": "Jarayonning umumiy resurslarga aloqasi bo'lmagan mustaqil qolgan kod bo'lagi.",
    "task": "Qolgan bo'lim atamasini yozing.",
    "canonical": "Remainder Section",
    "accepted": [
      "Remainder Section",
      "remainder section"
    ],
    "tags": [
      "#REMAINDER_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Lokal hisob-kitoblar va mustaqil ishlarni bajarish.",
      "flags": [],
      "whenToUse": "Oqim hech qanday umumiy qulfni ushlab turmasdan mustaqil ishlayotgan qismda.",
      "omissionRisk": "Remainder section qancha ko'p bo'lsa, parallellik shuncha yuqori bo'ladi.",
      "syntaxExample": "Remainder Section"
    }
  },
  {
    "id": 23,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Bo'linmas Operatsiya (Atomic Operation)",
    "story": "Bajarilishi davomida hech qanday kontekst almashinuvi bilan bo'lib bo'lmaydigan, yo to'liq bajariladigan yoki umuman bajarilmaydigan amal.",
    "task": "Bunday operatsiyaning ilmiy atamasini yozing.",
    "canonical": "Atomic Operation",
    "accepted": [
      "Atomic Operation",
      "atomic operation",
      "atomic"
    ],
    "tags": [
      "#ATOMIC",
      "#HARDWARE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xotirada bo'linmas tarzda yaxlit bajariluvchi instruksiya.",
      "flags": [],
      "whenToUse": "Sinxronizatsiya primitivlarini (test-and-set, lock) qurishda.",
      "omissionRisk": "Atomiklik yo'qolsa tizimda poyga holati vujudga keladi.",
      "syntaxExample": "Atomic Operation"
    }
  },
  {
    "id": 24,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Kontekst Almashinuvi (Context Switch)",
    "story": "CPU bitta jarayon yoki oqimdan boshqasiga o'tayotganda registrlar va holatni saqlab yangisini yuklash jarayoni.",
    "task": "Ushbu OS mexanizmini yozing.",
    "canonical": "Context Switch",
    "accepted": [
      "Context Switch",
      "context switch"
    ],
    "tags": [
      "#CONTEXT_SWITCH",
      "#KERNEL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Vaqt bo'laklari (time slicing) asosida CPU ni boshqa jarayonga o'tkazish.",
      "flags": [],
      "whenToUse": "Ko'p vazifali (multitasking) tizimlarda.",
      "omissionRisk": "Haddan tashqari ko'p context switch CPU unumdorligini tushirib yuboradi.",
      "syntaxExample": "Context Switch"
    }
  },
  {
    "id": 25,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Majburiy To'xtatish (Preemption)",
    "story": "Operatsion tizim oqim o'z ixtiyori bilan CPU ni bo'shatishini kutmasdan, taymer uzilishi (timer interrupt) orqali uni to'xtatib boshqasiga berishi.",
    "task": "Bu xususiyat inglizcha nima deyiladi?",
    "canonical": "Preemption",
    "accepted": [
      "Preemption",
      "preemption",
      "preemptive"
    ],
    "tags": [
      "#PREEMPTION",
      "#SCHEDULER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta oqim butun CPU ni egallab olmasligi uchun majburiy boshqaruvni qaytarib olish.",
      "flags": [],
      "whenToUse": "Preemptive ko'p vazifali operatsion tizimlarda.",
      "omissionRisk": "Preemption bo'lmasa qotib qolgan dastur butun tizimni to'xtatib qo'yadi.",
      "syntaxExample": "Preemption"
    }
  },
  {
    "id": 26,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Preemptive Kernel Afzalligi",
    "story": "Yadro rejimida ishlayotgan jarayonni boshqa yuqori ustuvorlikdagi real-vaqt jarayoni to'xtata olishi.",
    "task": "Ushbu yadro turini yozing.",
    "canonical": "Preemptive Kernel",
    "accepted": [
      "Preemptive Kernel",
      "preemptive kernel"
    ],
    "tags": [
      "#KERNEL",
      "#PREEMPTIVE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Real-vaqt tizimlarida tezkor javob qaytarishni kafolatlash.",
      "flags": [],
      "whenToUse": "Zamonaviy Linux va Windows yadrolarida.",
      "omissionRisk": "Non-preemptive yadrolar real-vaqt talablariga javob bera olmaydi.",
      "syntaxExample": "Preemptive Kernel"
    }
  },
  {
    "id": 27,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Non-Preemptive Kernel Xavfsizligi",
    "story": "Jarayon o'zi ixtiyoriy ravishda chiqmaguncha yoki bloklanmaguncha uni to'xtatmaslik usuli.",
    "task": "Ushbu yadro rejimini yozing.",
    "canonical": "Non-preemptive Kernel",
    "accepted": [
      "Non-preemptive Kernel",
      "non-preemptive kernel",
      "cooperative"
    ],
    "tags": [
      "#KERNEL",
      "#NON_PREEMPTIVE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yadro ichidagi poyga holatlarini osonroq bartaraf qilish.",
      "flags": [],
      "whenToUse": "Oddiy o'rnatilgan (embedded) tizimlarda.",
      "omissionRisk": "Bitta jarayon cheksiz siklga kirsa butun kompyuter qotadi.",
      "syntaxExample": "Non-preemptive Kernel"
    }
  },
  {
    "id": 28,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Ochlik Muammosi (Starvation)",
    "story": "Oqim resursni so'ragan bo'lsa-da, boshqa oqimlar doimiy oldinga o'tib ketgani sababli unga hech qachon navbat tegmasligi.",
    "task": "Bu xavfli holatni yozing.",
    "canonical": "Starvation",
    "accepted": [
      "Starvation",
      "starvation",
      "indefinite blocking"
    ],
    "tags": [
      "#STARVATION",
      "#SCHEDULING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Cheksiz bloklanish holatini tavsiflash.",
      "flags": [],
      "whenToUse": "Sinxronizatsiya algoritmlarining adolatliligini tahlil qilishda.",
      "omissionRisk": "Aging (qarish/kutgan sari ustuvorlikni oshirish) mexanizmi bilan bartaraf qilinadi.",
      "syntaxExample": "Starvation"
    }
  },
  {
    "id": 29,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Tupik Holati (Deadlock)",
    "story": "Ikki yoki undan ortiq jarayonlar bir-birlari ushlab turgan resurslarni o'zaro kutib butunlay to'xtab qolishi.",
    "task": "Bu atamani yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock"
    ],
    "tags": [
      "#DEADLOCK",
      "#COFFMAN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tizimning to'liq harakatsiz to'xtashini ifodalash.",
      "flags": [],
      "whenToUse": "Ko'p qulfli arxitekturalarda xatoliklarni oldini olishda.",
      "omissionRisk": "Agar tizim deadlockka tushsa tashqi aralashuvsiz (kill) chiqib keta olmaydi.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 30,
    "sectorId": 2,
    "sectorTitle": "Kritik Bo'lim (Critical Section) & 3 ta Asosiy Shart",
    "title": "Aktiv Qotish (Livelock)",
    "story": "Jarayonlar bloklanmagan, aksincha bir-biriga doimiy yo'l berib o'z holatini o'zgartirmoqda, lekin hech kim oldinga siljiy olmayapti.",
    "task": "Ushbu faol qotish holatini yozing.",
    "canonical": "Livelock",
    "accepted": [
      "Livelock",
      "livelock"
    ],
    "tags": [
      "#LIVELOCK",
      "#CONCURRENCY"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPU 100% band bo'lgan holda foydali ish bajarilmayotgan holat.",
      "flags": [],
      "whenToUse": "Yo'l berish (backoff) algoritmlarida tasodifiy kechikishlar qo'llash zarurligini asoslashda.",
      "omissionRisk": "Deadlockdan qochish uchun shoshqaloq yo'l berish livelockka olib kelishi mumkin.",
      "syntaxExample": "Livelock"
    }
  },
  {
    "id": 31,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Peterson Algoritmi: Navbat O'zgaruvchisi (turn = 0)",
    "story": "Ikki jarayon (P0 va P1) uchun Peterson algoritmi kirish huquqiga kim ega ekanligini ko'rsatuvchi butun sonli o'zgaruvchidan foydalanadi.",
    "task": "turn o'zgaruvchisini 0 qiymati bilan e'lon qiling.",
    "canonical": "turn = 0",
    "accepted": [
      "turn = 0",
      "turn=0"
    ],
    "tags": [
      "#PETERSON",
      "#TURN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kritik bo'limga kirish navbatini belgilash.",
      "flags": [],
      "whenToUse": "Ikkita jarayon o'rtasida murosa qilishda.",
      "omissionRisk": "turn bo'lmasa o'zaro istisnoni to'liq kafolatlab bo'lmaydi.",
      "syntaxExample": "turn = 0"
    }
  },
  {
    "id": 32,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Peterson Algoritmi: Bayroqlar Massivi (flag = [False, False])",
    "story": "Jarayonlarning kritik bo'limga kirishga tayyorligini ifodalovchi ikkita mantiqiy qiymatdan iborat massiv kerak.",
    "task": "Har ikki jarayon tayyor emasligini ifodalovchi flag massivini yarating.",
    "canonical": "flag = [False, False]",
    "accepted": [
      "flag = [False, False]",
      "flag=[False,False]",
      "flag = [False,False]"
    ],
    "tags": [
      "#PETERSON",
      "#FLAG_ARRAY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir jarayonning xohishini ifodalovchi flag massivi.",
      "flags": [],
      "whenToUse": "P0 uchun flag[0], P1 uchun flag[1] qiymatlarini belgilashda.",
      "omissionRisk": "Massiv bo'lmasa qaysi jarayon kirmoqchiligini bilib bo'lmaydi.",
      "syntaxExample": "flag = [False, False]"
    }
  },
  {
    "id": 33,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "P0 Jarayoni O'z Xohishini Bildiradi (flag[0] = True)",
    "story": "P0 jarayoni kritik bo'limga kirmoqchi bo'lgan zahoti o'z bayrog'ini ko'taradi.",
    "task": "P0 bayrog'ini ko'taruvchi buyruqni bering.",
    "canonical": "flag[0] = True",
    "accepted": [
      "flag[0] = True",
      "flag[0]=True"
    ],
    "tags": [
      "#PETERSON",
      "#FLAG_SET"
    ],
    "flagAnatomy": {
      "commandPurpose": "0-jarayon kritik bo'limga kirishga tayyorligini e'lon qilishi.",
      "flags": [],
      "whenToUse": "Kritik bo'limning Entry Section boshida.",
      "omissionRisk": "Bayroq ko'tarilmasa boshqa jarayon uning kirayotganini sezmaydi.",
      "syntaxExample": "flag[0] = True"
    }
  },
  {
    "id": 34,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Murosa: Navbatni Ikkinchi Jarayonga Berish (turn = 1)",
    "story": "Peterson algoritmining eng go'zal xususiyati: har bir jarayon kirishdan oldin navbatni sherigiga berib saxovat ko'rsatadi.",
    "task": "P0 jarayoni navbatni 1 ga berish buyrug'ini yozing.",
    "canonical": "turn = 1",
    "accepted": [
      "turn = 1",
      "turn=1"
    ],
    "tags": [
      "#PETERSON",
      "#COURTESY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sherigiga ustunlik berish orqali ikkalasi bir vaqtda kirib qolishini oldini olish.",
      "flags": [],
      "whenToUse": "flag[0]=True qilingandan so'ng darhol.",
      "omissionRisk": "Agar bu bo'lmasa ikkala jarayon bir-biriga yo'l bermay deadlock hosil qiladi.",
      "syntaxExample": "turn = 1"
    }
  },
  {
    "id": 35,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Kutish Sharti (while flag[1] and turn == 1: pass)",
    "story": "P0 qachongacha kutadi? Agar P1 ham kirmoqchi bo'lsa va navbat ham 1 ga tegishli bo'lsa, P0 kutish siklida aylanadi.",
    "task": "P0 uchun kutish siklini yozing.",
    "canonical": "while flag[1] and turn == 1: pass",
    "accepted": [
      "while flag[1] and turn == 1: pass",
      "while flag[1] and turn==1: pass"
    ],
    "tags": [
      "#PETERSON",
      "#SPINLOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kritik bo'lim bo'shashini va navbat o'ziga kelishini tekshirish.",
      "flags": [],
      "whenToUse": "Entry section yakunida.",
      "omissionRisk": "Kutish sikli bo'lmasa ikkala oqim ham to'g'ridan-to'g'ri kritik bo'limga bostirib kiradi.",
      "syntaxExample": "while flag[1] and turn == 1: pass"
    }
  },
  {
    "id": 36,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Kritik Bo'limdan Chiqish: Bayroqni Tushirish (flag[0] = False)",
    "story": "P0 kritik bo'limdagi barcha ishlarini bajarib bo'lgach, sherigi P1 kira olishi uchun o'z bayrog'ini tushiradi.",
    "task": "P0 bayrog'ini tushiruvchi buyruqni bering.",
    "canonical": "flag[0] = False",
    "accepted": [
      "flag[0] = False",
      "flag[0]=False"
    ],
    "tags": [
      "#PETERSON",
      "#EXIT_SECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "P0 endi kritik bo'limda emasligini e'lon qilish.",
      "flags": [],
      "whenToUse": "Exit sectionda.",
      "omissionRisk": "Tushirilmasa P1 umrbod kutish siklida aylanib qoladi (starvation).",
      "syntaxExample": "flag[0] = False"
    }
  },
  {
    "id": 37,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Peterson Algoritmi Nechta Jarayon Uchun Ishlaydi?",
    "story": "Klassik Peterson algoritmi faqat ikkita jarayon (P0 va P1) uchun to'liq matematik isbotlangan.",
    "task": "Peterson algoritmi cheklangan jarayonlar sonini raqamda yozing.",
    "canonical": "2",
    "accepted": [
      "2",
      "two",
      "ikki"
    ],
    "tags": [
      "#PETERSON",
      "#TWO_PROCESSES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Peterson algoritmining fundamental cheklovini ko'rsatish.",
      "flags": [],
      "whenToUse": "Nazariy imtihon va sinovlarda.",
      "omissionRisk": "Ko'p jarayonlar uchun Lamport novvoyxona (Bakery) algoritmi kerak bo'ladi.",
      "syntaxExample": "2"
    }
  },
  {
    "id": 38,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Band Kutish (Busy Waiting / Spinlock)",
    "story": "Oqim shart bajarilishini CPU sikllarini behuda sarflagan holda siklda kutishi nima deb ataladi?",
    "task": "Ushbu kutish usulini yozing.",
    "canonical": "Busy Waiting",
    "accepted": [
      "Busy Waiting",
      "busy waiting",
      "spinlock"
    ],
    "tags": [
      "#BUSY_WAITING",
      "#SPINLOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qisqa muddatli kutilmalarda kontekst almashinuvining qimmat yukidan qochish.",
      "flags": [],
      "whenToUse": "Ko'p protsessorli tizimlarda qulf juda tez bo'shaydigan holatlarda.",
      "omissionRisk": "Bir protsessorli tizimda busy waiting CPU ni behuda kuydiradi.",
      "syntaxExample": "Busy Waiting"
    }
  },
  {
    "id": 39,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Hardware Atomik Instruksiyasi: TestAndSet",
    "story": "Xotiradagi bayroqni o'qish va unga 1 yozishni bitta bo'linmas apparat buyrug'i sifatida bajaruvchi CPU instruksiyasi.",
    "task": "Bu mashhur arxitektura buyrug'ini yozing.",
    "canonical": "TestAndSet",
    "accepted": [
      "TestAndSet",
      "test_and_set",
      "testandset"
    ],
    "tags": [
      "#TESTANDSET",
      "#HARDWARE_LOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Apparat darajasida atomik bayroq o'rnatish.",
      "flags": [],
      "whenToUse": "Spinlock va kernel darajasidagi qulflarni yaratishda.",
      "omissionRisk": "Apparat yordamisiz ko'p protsessorli tizimlarda dasturiy bayroqlar tartibi buziladi.",
      "syntaxExample": "TestAndSet"
    }
  },
  {
    "id": 40,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Hardware Atomik Instruksiyasi: CompareAndSwap (CAS)",
    "story": "Xotiradagi manzilni kutilgan qiymat bilan solishtirib, agar teng bo'lsa yangi qiymatga atomik almashtiruvchi zamonaviy CPU instruksiyasi.",
    "task": "Bu ko'p uchraydigan instruksiya qisqartmasi (3 harf) yoki to'liq nomini yozing.",
    "canonical": "CompareAndSwap",
    "accepted": [
      "CompareAndSwap",
      "CAS",
      "compare_and_swap"
    ],
    "tags": [
      "#CAS",
      "#LOCK_FREE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Lock-free (qulfsiz) ma'lumotlar tuzilmalarini qurish.",
      "flags": [],
      "whenToUse": "Zamonaviy Intel x86 (CMPXCHG) va ARM arxitekturalarida.",
      "omissionRisk": "ABA muammosiga (qiymat o'zgarib yana eskiga qaytishi) moyil bo'lishi mumkin.",
      "syntaxExample": "CompareAndSwap"
    }
  },
  {
    "id": 41,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Xotira To'sig'i (Memory Barrier / Fence)",
    "story": "Zamonaviy zamonaviy CPU lar va kompilyatorlar tezlik uchun buyruqlar ketma-ketligini o'zgartirishi mumkin (Out-of-order execution). Buni taqiqlash mexanizmi.",
    "task": "Xotira amallari tartibini qat'iy saqlovchi buyruqni yozing.",
    "canonical": "Memory Barrier",
    "accepted": [
      "Memory Barrier",
      "memory barrier",
      "memory fence"
    ],
    "tags": [
      "#MEMORY_BARRIER",
      "#CPU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xotiraga yozish va o'qish buyruqlarining reordering qilinishini to'xtatish.",
      "flags": [],
      "whenToUse": "Ko'p yadroli tizimlarda Peterson algoritmi yoki spinlocklarni apparat darajasida to'g'ri ishlashini ta'minlashda.",
      "omissionRisk": "Memory barrier bo'lmasa CPU boshqa tartibda yozib algoritmni buzadi.",
      "syntaxExample": "Memory Barrier"
    }
  },
  {
    "id": 42,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Ko'p Jarayonlar Uchun: Bakery Algoritmi",
    "story": "Leslie Lamport tomonidan o'ylab topilgan, navbatdagi mijozlar qog'oz raqam olib kutishiga asoslangan N ta jarayonli sinxronizatsiya algoritmi.",
    "task": "Bu algoritm nomini yozing.",
    "canonical": "Bakery Algorithm",
    "accepted": [
      "Bakery Algorithm",
      "bakery algorithm",
      "bakery"
    ],
    "tags": [
      "#BAKERY",
      "#LAMPORT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ixtiyoriy N ta jarayon o'rtasida o'zaro istisno va adolatli cheklangan kutishni ta'minlash.",
      "flags": [],
      "whenToUse": "Jarayonlar soni 2 tadan ko'p bo'lgan nazariy dasturiy yechimlarda.",
      "omissionRisk": "Raqamlar cheksiz o'sib ketmasligi uchun qo'shimcha nazorat talab qiladi.",
      "syntaxExample": "Bakery Algorithm"
    }
  },
  {
    "id": 43,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Kesh Muvofiqligi Muammosi (Cache Coherence)",
    "story": "Har bir CPU yadrosi o'zining L1/L2 keshiga ega bo'lgani sababli, bir yadro yozgan o'zgarish boshqa yadrolarda darhol ko'rinmasligi.",
    "task": "Bu apparat arxitekturasi muammosini yozing.",
    "canonical": "Cache Coherency",
    "accepted": [
      "Cache Coherency",
      "cache coherency",
      "cache coherence"
    ],
    "tags": [
      "#CACHE_COHERENCE",
      "#HARDWARE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yadrolararo keshlar holatini MESI protokoli orqali muvofiqlashtirish.",
      "flags": [],
      "whenToUse": "Parallel oqimlar turli yadrolarda umumiy xotirani yangilaganda.",
      "omissionRisk": "Keshlar sinxronlanmasa boshqa yadro eski ma'lumot bilan ishlayveradi.",
      "syntaxExample": "Cache Coherency"
    }
  },
  {
    "id": 44,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Spinlock Qachon Afzal?",
    "story": "Spinlock oqimni uxlatmaydi, shuning uchun kutish vaqti kontekst almashinuvi (context switch) vaqtidan qisqa bo'lganda juda samarali.",
    "task": "Spinlock qaysi sharoitda eng samarali: qisqa kutishdami yoki uzoq?",
    "canonical": "Qisqa kutishda",
    "accepted": [
      "Qisqa kutishda",
      "qisqa",
      "short waiting"
    ],
    "tags": [
      "#SPINLOCK",
      "#OPTIMIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Context switch xarajatidan qochish.",
      "flags": [],
      "whenToUse": "Kritik bo'lim bir necha CPU siklida tugaydigan operatsiyalarda.",
      "omissionRisk": "Uzoq operatsiyalarda qo'llanilsa CPU energiyasini va vaqtini isrof qiladi.",
      "syntaxExample": "Qisqa kutishda"
    }
  },
  {
    "id": 45,
    "sectorId": 3,
    "sectorTitle": "Dasturiy Yechimlar: Peterson Algoritmi & Hardware TestAndSet",
    "title": "Volatile / Atomic O'zgaruvchilar",
    "story": "Kompilyatorga ushbu o'zgaruvchini keshlamasdan to'g'ridan-to'g'ri asosiy RAM xotiradan o'qishni buyuruvchi kalit so'z.",
    "task": "C/C++ tillarida bu kalit so'zni yozing.",
    "canonical": "volatile",
    "accepted": [
      "volatile",
      "std::atomic"
    ],
    "tags": [
      "#VOLATILE",
      "#COMPILER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kompilyator optimizatsiyasini to'xtatib, har doim xotiradan to'g'ri o'qish.",
      "flags": [],
      "whenToUse": "Hardware registrlari va umumiy bayroqlarda.",
      "omissionRisk": "Volatile bo'lmasa kompilyator o'zgaruvchini registrda ushlab, boshqa oqim yangilaganini sezmaydi.",
      "syntaxExample": "volatile"
    }
  },
  {
    "id": 46,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Argumetli Oqim Yaratish (args=(5,))",
    "story": "Worker funksiyasiga parametr uzatish uchun `args` kortejidan (tuple) foydalaniladi.",
    "task": "Targeti 'task' va argumenti 5 bo'lgan oqim yaratish buyrug'ini yozing.",
    "canonical": "t = threading.Thread(target=task, args=(5,))",
    "accepted": [
      "t = threading.Thread(target=task, args=(5,))",
      "t=threading.Thread(target=task,args=(5,))"
    ],
    "tags": [
      "#THREAD",
      "#ARGS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqim maqsad funksiyasiga argumentlar uzatish.",
      "flags": [],
      "whenToUse": "Oqimga dinamik ma'lumotlar berishda (masalan, ID yoki hisoblash oralig'i).",
      "omissionRisk": "Bitta argument bo'lsa vergul qo'yilmasa tuple bo'lmay qoladi va TypeError beradi.",
      "syntaxExample": "t = threading.Thread(target=task, args=(5,))"
    }
  },
  {
    "id": 47,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Oqimga Nom Berish (name='Worker-1')",
    "story": "Loglarda va debag qilishda oqimlarni adashtirib yubormaslik uchun ularga maxsus nom beriladi.",
    "task": "Nomi 'Worker-1' bo'lgan oqim yarating.",
    "canonical": "t = threading.Thread(target=task, name='Worker-1')",
    "accepted": [
      "t = threading.Thread(target=task, name='Worker-1')",
      "t=threading.Thread(target=task,name='Worker-1')"
    ],
    "tags": [
      "#THREAD_NAME",
      "#DEBUG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimga tushunarli identifikator nom biriktirish.",
      "flags": [],
      "whenToUse": "Multi-threaded ilovalarni monitoring qilishda.",
      "omissionRisk": "Nom berilmasa Python avtomatik Thread-1, Thread-2 deb nomlaydi.",
      "syntaxExample": "t = threading.Thread(target=task, name='Worker-1')"
    }
  },
  {
    "id": 48,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Oqim Nomini O'qish (t.name)",
    "story": "Joriy oqim obyektining nomini dastur davomida bilish kerak.",
    "task": "t oqimining nomini qaytaruvchi atributni yozing.",
    "canonical": "t.name",
    "accepted": [
      "t.name",
      "print(t.name)"
    ],
    "tags": [
      "#THREAD_NAME",
      "#INSPECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqim nomini tekshirish.",
      "flags": [],
      "whenToUse": "Oqim ichida yoki tashqarisida identifikatsiya qilishda.",
      "omissionRisk": "Nom noto'g'ri o'qilsa loglash buziladi.",
      "syntaxExample": "t.name"
    }
  },
  {
    "id": 49,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Oqim Hali Ishlayaptimi? (t.is_alive())",
    "story": "Oqim o'z ishini tugatganmi yoki hali davom etyaptimi buni bilish uchun maxsus metod chaqiriladi.",
    "task": "Oqimning tirikligini tekshiruvchi metodni chaqiring.",
    "canonical": "t.is_alive()",
    "accepted": [
      "t.is_alive()",
      "t.isAlive()"
    ],
    "tags": [
      "#IS_ALIVE",
      "#THREAD_STATUS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqim bajarilish holatini tekshirish (True/False).",
      "flags": [],
      "whenToUse": "Oqim fonda qotib qolmaganini tekshirishda.",
      "omissionRisk": "start() chaqirilishidan oldin va run() tugagandan keyin False qaytaradi.",
      "syntaxExample": "t.is_alive()"
    }
  },
  {
    "id": 50,
    "sectorId": 4,
    "sectorTitle": "Python Threading Asoslari: Thread Yaratish & join()",
    "title": "Taymout Bilan Oqimni Kutish (t.join(timeout=2.0))",
    "story": "Oqim cheksiz qotib qolsa asosiy dastur ham qotib qolmasligi uchun unga maksimal 2 soniya vaqt beriladi.",
    "task": "t oqimini 2.0 soniya taymout bilan kutuvchi buyruqni bering.",
    "canonical": "t.join(timeout=2.0)",
    "accepted": [
      "t.join(timeout=2.0)",
      "t.join(2.0)",
      "t.join(2)"
    ],
    "tags": [
      "#JOIN_TIMEOUT",
      "#TIMEOUT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Belgilangan vaqt ichida oqim tugashini kutish, tugamasa davom etish.",
      "flags": [],
      "whenToUse": "Tarmoq yoki I/O oqimlari osilib qolganda dastur to'xtab qolmasligi uchun.",
      "omissionRisk": "Taymout tugagach oqim o'ldirilmaydi, u hali ham is_alive() bo'lib qolishi mumkin.",
      "syntaxExample": "t.join(timeout=2.0)"
    }
  }
];
});
