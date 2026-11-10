/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 9 QUESTIONS (PART 3: 101–150)
 * Sectors: 7 (Detection 11-15), 8 (Recovery & Preemption), 9 (Lock Ordering in Python), 10 (Ostrich & CW1)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W9_PART3 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 101,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Matritsali Audit Skripti",
    "story": "Resurs matritsalari to'g'riligini audit qilish vositasi.",
    "task": "Python skriptini yozing.",
    "canonical": "python3 02_rag_analyzer.py",
    "accepted": [
      "python3 02_rag_analyzer.py",
      "python 02_rag_analyzer.py"
    ],
    "tags": [
      "#AUDIT_RUN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deteksiya natijasini terminalga chiqarish.",
      "flags": [],
      "whenToUse": "WFG tahlilida.",
      "omissionRisk": "Xatolar fosh qilinadi.",
      "syntaxExample": "python3 02_rag_analyzer.py"
    }
  },
  {
    "id": 102,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Deteksiya Narxi (Detection Overhead)",
    "story": "Deteksiya algoritmi doimo CPU va xotira sarflaydi. Bu narsa ilmiy tilda nima deyiladi?",
    "task": "Qo'shimcha sarf-xarajat atamasini yozing.",
    "canonical": "Overhead",
    "accepted": [
      "Overhead",
      "overhead",
      "qo'shimcha xarajat"
    ],
    "tags": [
      "#OVERHEAD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deteksiyaning tizimga salbiy yuklamasini ifodalash.",
      "flags": [],
      "whenToUse": "Arxitektura tanlashda.",
      "omissionRisk": "Juda tez-tez chaqirish tizimni sekinlashtiradi.",
      "syntaxExample": "Overhead"
    }
  },
  {
    "id": 103,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "WFG da Qirralar Yo'nalishi",
    "story": "P1 dan P2 ga yo'nalgan qirra kim kimni kutayotganini bildiradi?",
    "task": "Kim kutmoqda? (P1 kutmoqda / P2 kutmoqda)",
    "canonical": "P1 kutmoqda",
    "accepted": [
      "P1 kutmoqda",
      "P1",
      "p1"
    ],
    "tags": [
      "#EDGE_DIRECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutish munosabatini aniq tushunish (P1 waits for P2).",
      "flags": [],
      "whenToUse": "WFG o'qishda.",
      "omissionRisk": "Strelkani teskari tushunish butun tahlilni buzadi.",
      "syntaxExample": "P1 kutmoqda"
    }
  },
  {
    "id": 104,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Deteksiya Algoritmi Natijasi",
    "story": "Deteksiya faqat muammoni aniqlaydi, lekin uni o'zi avtomatik hal qilmaydi. Undan keyin nima kerak?",
    "task": "Keyingi zaruriy bosqichni yozing.",
    "canonical": "Deadlock Recovery",
    "accepted": [
      "Deadlock Recovery",
      "recovery",
      "qutulish"
    ],
    "tags": [
      "#NEXT_STEP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Aniqlangan tupikni amalda bartaraf etish bosqichi.",
      "flags": [],
      "whenToUse": "Deteksiya muvaffaqiyatli tugagach.",
      "omissionRisk": "Agar recovery bo'lmasa jarayonlar qotganicha qolaveradi.",
      "syntaxExample": "Deadlock Recovery"
    }
  },
  {
    "id": 105,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "PostgreSQL da Deadlock Deteksiyasi",
    "story": "PostgreSQL tranzaksiyalarida deadlock_timeout (standart 1 soniya) o'tgach WFG tekshiriladi va nima qilinadi?",
    "task": "Bitta tranzaksiya holati nima bo'ladi?",
    "canonical": "Rollback",
    "accepted": [
      "Rollback",
      "rollback qilinadi",
      "abort"
    ],
    "tags": [
      "#POSTGRES",
      "#DEADLOCK_TIMEOUT"
    ],
    "flagAnatomy": {
      "commandPurpose": "RDBMS larda deadlockni avtomatik uzish.",
      "flags": [],
      "whenToUse": "Ma'lumotlar bazasi boshqaruvida.",
      "omissionRisk": "Bitta tranzaksiyaga xato berilib qolganlari o'tkaziladi.",
      "syntaxExample": "Rollback"
    }
  },
  {
    "id": 106,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Tupikdan Qutulish (Deadlock Recovery)",
    "story": "L09 Recovery: Aniqlangan deadlockni sindirib, tizimni qayta to'liq ishchi holatga chiqarish.",
    "task": "Ushbu jarayon nomini yozing.",
    "canonical": "Deadlock Recovery",
    "accepted": [
      "Deadlock Recovery",
      "deadlock recovery",
      "recovery"
    ],
    "tags": [
      "#RECOVERY",
      "#HEALING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tupikni amalda bartaraf qilish.",
      "flags": [],
      "whenToUse": "Deteksiya algoritmi deadlockni topgan zahoti.",
      "omissionRisk": "Recovery bo'lmasa tizim to'xtab qolaveradi.",
      "syntaxExample": "Deadlock Recovery"
    }
  },
  {
    "id": 107,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Hammasini O'ldirish Usuli (Abort All)",
    "story": "Tupikda qatnashgan barcha jarayonlarni baravar to'xtatish. Eng oson, lekin barcha bajarilgan hisob-kitoblarni yo'qqa chiqaruvchi usul.",
    "task": "Bu strategiya nima deb ataladi?",
    "canonical": "Abort All",
    "accepted": [
      "Abort All",
      "abort all",
      "barchasini to'xtatish"
    ],
    "tags": [
      "#ABORT_ALL",
      "#TERMINATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha tupikdagi jarayonlarni darhol o'ldirish.",
      "flags": [],
      "whenToUse": "Juda og'ir va tuzatib bo'lmaydigan muzlashlarda.",
      "omissionRisk": "Barcha oraliq hisob-kitoblar yo'qoladi, juda qimmatga tushadi.",
      "syntaxExample": "Abort All"
    }
  },
  {
    "id": 108,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Bittalab O'ldirish Usuli (Abort One by One)",
    "story": "Bitta jarayonni o'ldirib, yana deteksiya qilib, agar deadlock yechilsa qolganlarini saqlab qolish strategiyasi.",
    "task": "Bu strategiya nomini yozing.",
    "canonical": "Abort One by One",
    "accepted": [
      "Abort One by One",
      "abort one by one",
      "bittalab to'xtatish"
    ],
    "tags": [
      "#ABORT_ONE_BY_ONE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Zararni minimallashtirish.",
      "flags": [],
      "whenToUse": "Deadlockni minimal yo'qotish bilan yechishda.",
      "omissionRisk": "Har bir o'ldirishdan so'ng deteksiyani qayta chaqirish yuklamasi bor.",
      "syntaxExample": "Abort One by One"
    }
  },
  {
    "id": 109,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Qurbon Tanlash (Victim Selection)",
    "story": "Qaysi jarayonni to'xtatish eng kam zarar keltirishini tanlab olish jarayoni.",
    "task": "Ushbu tanlov jarayoni nima deyiladi?",
    "canonical": "Victim Selection",
    "accepted": [
      "Victim Selection",
      "victim selection",
      "qurbon tanlash"
    ],
    "tags": [
      "#VICTIM_SELECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'ldirish uchun eng qulay (eng arzon) nomzodni topish.",
      "flags": [],
      "whenToUse": "Abort qilishdan oldin.",
      "omissionRisk": "Noto'g'ri tanlansa juda muhim tizim jarayoni o'ldirib qo'yilishi mumkin.",
      "syntaxExample": "Victim Selection"
    }
  },
  {
    "id": 110,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Minimal Xarajat Mezoni (Minimum Cost)",
    "story": "Victim tanlashda jarayonning ustuvorligi, qancha ishlagani, qancha resurs ushlagani hisobga olinadi. Bu mezon nima deyiladi?",
    "task": "Mezon nomini yozing.",
    "canonical": "Minimum Cost",
    "accepted": [
      "Minimum Cost",
      "minimum cost",
      "eng kam xarajat"
    ],
    "tags": [
      "#MINIMUM_COST"
    ],
    "flagAnatomy": {
      "commandPurpose": "Zararni minimallashtirish mezonlarini belgilash.",
      "flags": [],
      "whenToUse": "Victim selection algoritmlarida.",
      "omissionRisk": "Yangi boshlangan kichik jarayonlar birinchi o'ldiriladi.",
      "syntaxExample": "Minimum Cost"
    }
  },
  {
    "id": 111,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Resurslarni Majburiy Tortib Olish (Preemption)",
    "story": "Jarayonni o'ldirmasdan, undan kerakli resursni majburiy olib boshqasiga berish.",
    "task": "Bu usul nomi nima?",
    "canonical": "Resource Preemption",
    "accepted": [
      "Resource Preemption",
      "resource preemption",
      "preemption"
    ],
    "tags": [
      "#RESOURCE_PREEMPTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonni to'liq o'ldirmasdan deadlockni sindirish.",
      "flags": [],
      "whenToUse": "Resurs holati qaytarilishi mumkin bo'lganda.",
      "omissionRisk": "Resursi olingan jarayon Rollback qilinishi shart.",
      "syntaxExample": "Resource Preemption"
    }
  },
  {
    "id": 112,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "To'liq Qaytarish (Total Rollback)",
    "story": "Resursi tortib olingan jarayonni boshidan qayta boshlash (restart) holati.",
    "task": "Ushbu qaytarish turini yozing.",
    "canonical": "Total Rollback",
    "accepted": [
      "Total Rollback",
      "total rollback",
      "boshidan boshlash"
    ],
    "tags": [
      "#TOTAL_ROLLBACK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonni xavfsiz holda noldan qayta yurgizish.",
      "flags": [],
      "whenToUse": "Oraliq saqlash nuqtalari bo'lmaganda.",
      "omissionRisk": "Oldingi barcha ishlari yo'qoladi.",
      "syntaxExample": "Total Rollback"
    }
  },
  {
    "id": 113,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Qisman Qaytarish (Partial Rollback)",
    "story": "Jarayonni noldan emas, oxirgi muvaffaqiyatli saqlangan nuqtasigacha orqaga qaytarish.",
    "task": "Ushbu qaytarish turini yozing.",
    "canonical": "Partial Rollback",
    "accepted": [
      "Partial Rollback",
      "partial rollback",
      "qisman qaytarish"
    ],
    "tags": [
      "#PARTIAL_ROLLBACK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat deadlockka olib kelgan oxirgi harakatlarni bekor qilish.",
      "flags": [],
      "whenToUse": "Tizimda checkpoint mexanizmi bo'lganda.",
      "omissionRisk": "Ko'p hisob-kitoblarni saqlab qoladi.",
      "syntaxExample": "Partial Rollback"
    }
  },
  {
    "id": 114,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Nazorat Nuqtalari (Checkpoints)",
    "story": "Jarayonning joriy holati va xotirasini davriy ravishda diskka saqlab borish mexanizmi.",
    "task": "Ushbu saqlash nuqtalari nima deb ataladi?",
    "canonical": "Checkpoints",
    "accepted": [
      "Checkpoints",
      "checkpoint",
      "checkpoints"
    ],
    "tags": [
      "#CHECKPOINTS",
      "#ROLLBACK_SUPPORT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Partial rollback qilish imkoniyatini ta'minlash.",
      "flags": [],
      "whenToUse": "Katta tranzaksion tizimlar va uzoq hisoblashlarda.",
      "omissionRisk": "Checkpoints bo'lmasa faqat Total Rollback qilishga to'g'ri keladi.",
      "syntaxExample": "Checkpoints"
    }
  },
  {
    "id": 115,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Preemptionda Ochlik Xavfi (Starvation)",
    "story": "Agar bitta bechora kichik jarayon doim eng arzon bo'lgani sababli qayta-qayta qurbon qilib tanlanaversa nima yuz beradi?",
    "task": "Bu xavfli holatni yozing.",
    "canonical": "Starvation",
    "accepted": [
      "Starvation",
      "starvation",
      "ochlik"
    ],
    "tags": [
      "#STARVATION",
      "#VICTIM_BIAS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta jarayon hech qachon ishini tugata olmasligini ko'rsatish.",
      "flags": [],
      "whenToUse": "Adolatli mezonlarni ishlab chiqishda.",
      "omissionRisk": "Aging mexanizmi bilan bartaraf qilinishi shart.",
      "syntaxExample": "Starvation"
    }
  },
  {
    "id": 116,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Qarish Mexanizmi (Aging Factor)",
    "story": "Jarayon har safar qurbon qilinganda uning 'xarajati' sun'iy oshirib boriladi, toki keyingi safar boshqasi tanlansin. Bu nima deyiladi?",
    "task": "Ushbu usul nomini yozing.",
    "canonical": "Aging",
    "accepted": [
      "Aging",
      "aging",
      "qarish"
    ],
    "tags": [
      "#AGING",
      "#FAIRNESS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir jarayon qurbon bo'lish sonini cheklash.",
      "flags": [],
      "whenToUse": "Starvation ning oldini olishda.",
      "omissionRisk": "Jarayon oxir-oqibat o'z ishini yakunlay olishini kafolatlaydi.",
      "syntaxExample": "Aging"
    }
  },
  {
    "id": 117,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Linux da Majburiy To'xtatish (kill -9)",
    "story": "Linux tizimida deadlock tufayli qotib qolgan jarayonni majburiy to'xtatuvchi SIGKILL buyrug'ini yozing.",
    "task": "1234 PID li jarayonni majburiy to'xtatuvchi Linux buyrug'ini yozing.",
    "canonical": "kill -9 1234",
    "accepted": [
      "kill -9 1234",
      "kill -SIGKILL 1234",
      "kill -9"
    ],
    "tags": [
      "#KILL",
      "#SIGKILL",
      "#LINUX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonga darhol to'xtashni buyuruvchi o'ldirish signali (SIGKILL).",
      "flags": [
        {
          "flag": "-9",
          "meaning": "SIGKILL signalini yuborish (jarayon bu signalni e'tiborsiz qoldirolmaydi)",
          "syntax": "kill -9 <PID>"
        }
      ],
      "whenToUse": "Deadlockda qotgan va boshqa buyruqlarga javob bermayotgan dasturlarni to'xtatishda.",
      "omissionRisk": "Tozalanmagan vaqtinchalik fayllar qolishi mumkin.",
      "syntaxExample": "kill -9 1234"
    }
  },
  {
    "id": 118,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Nomi Bilan To'xtatish (pkill)",
    "story": "Qotib qolgan barcha 'python3' jarayonlarini nomi bo'yicha bir vaqtda to'xtatish.",
    "task": "Barcha python3 jarayonlarini o'ldiruvchi buyruqni bering.",
    "canonical": "pkill -f python3",
    "accepted": [
      "pkill -f python3",
      "pkill python3",
      "killall python3"
    ],
    "tags": [
      "#PKILL",
      "#CLEANUP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ko'rsatilgan nomga mos keluvchi barcha jarayonlarga signal yuborish.",
      "flags": [
        {
          "flag": "-f",
          "meaning": "To'liq buyruq qatorini tekshirish",
          "syntax": "pkill -f nom"
        }
      ],
      "whenToUse": "Ko'p oqimli yoki ko'p jarayonli dasturlarni to'liq tozalashda.",
      "omissionRisk": "Boshqa foydali python skriptlari ham to'xtab qolishi mumkin.",
      "syntaxExample": "pkill -f python3"
    }
  },
  {
    "id": 119,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Avtomatlashtirilgan Qutqaruv Skripti",
    "story": "Python da avtomatlashtirilgan deadlock qutqaruv simulyatsiyasini ishga tushiring.",
    "task": "05_deadlock_recovery.py dasturini terminalda bajaring.",
    "canonical": "python3 05_deadlock_recovery.py",
    "accepted": [
      "python3 05_deadlock_recovery.py",
      "python 05_deadlock_recovery.py"
    ],
    "tags": [
      "#RECOVERY_RUN",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tupikdagi jarayonlarni aniqlab ketma-ket to'xtatish simulyatsiyasini ko'rish.",
      "flags": [],
      "whenToUse": "Recovery amaliyotini o'rganishda.",
      "omissionRisk": "Skript bajarilmasa qutqaruv mantig'i ko'rinmaydi.",
      "syntaxExample": "python3 05_deadlock_recovery.py"
    }
  },
  {
    "id": 120,
    "sectorId": 8,
    "sectorTitle": "Tupikdan Qutulish: Jarayonlarni To'xtatish & Preemption",
    "title": "Eng Toza Qutqaruv Usuli Qaysi?",
    "story": "Oraliq nuqtalar saqlangan va jarayon qisman orqaga qaytariladigan usul eng toza hisoblanadi.",
    "task": "Ushbu usul nomini yozing.",
    "canonical": "Partial Rollback",
    "accepted": [
      "Partial Rollback",
      "partial rollback",
      "qisman qaytarish"
    ],
    "tags": [
      "#CLEAN_RECOVERY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Minimal resurs yo'qotishi bilan tizimni sog'lomlashtirish.",
      "flags": [],
      "whenToUse": "Zamonaviy ma'lumotlar bazalarida.",
      "omissionRisk": "Checkpoint yaratish xarajatlarini talab qiladi.",
      "syntaxExample": "Partial Rollback"
    }
  },
  {
    "id": 121,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Ikki Qulf Tupigi (Two Locks Deadlock)",
    "story": "L09 Python: Oqim 1 `lockA` ni olib `lockB` ni kutyapti, Oqim 2 esa `lockB` ni olib `lockA` ni kutyapti. Dastur abadiy qotadi.",
    "task": "Ushbu xavfli holatni yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock"
    ],
    "tags": [
      "#TWO_LOCKS",
      "#PYTHON"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ko'p qulfli dasturlashdagi eng keng tarqalgan xatolikni ko'rsatish.",
      "flags": [],
      "whenToUse": "Oqimlar bir vaqtda bir nechta umumiy qulfni ishlatganda.",
      "omissionRisk": "Qulflash tartibi qat'iy belgilanmasa yuzaga keladi.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 122,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Qulflarni Qat'iy Tartiblash (Lock Ordering)",
    "story": "Har ikkala oqim ham qulflarni bir xil tartibda (avval lockA, keyin lockB) olishga majbur qilinsa nima bo'ladi?",
    "task": "Ushbu yechim protokoli nomini yozing.",
    "canonical": "Lock Ordering",
    "accepted": [
      "Lock Ordering",
      "lock ordering",
      "resource ordering"
    ],
    "tags": [
      "#LOCK_ORDERING",
      "#BEST_PRACTICE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulflarni qat'iy tartibda olish orqali doiraviy kutishni yo'qotish.",
      "flags": [],
      "whenToUse": "Ko'p oqimli har qanday Python ilovasida.",
      "omissionRisk": "Deadlock 100% yo'qoladi.",
      "syntaxExample": "Lock Ordering"
    }
  },
  {
    "id": 123,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Tartiblangan Skriptni Bajarish (04_lock_ordering.py)",
    "story": "Qulflash tartibi to'g'irlangan dastur hech qanday to'xtashsiz tez va xavfsiz yakunlanishini ko'ring.",
    "task": "04_lock_ordering.py dasturini terminalda bajaring.",
    "canonical": "python3 04_lock_ordering.py",
    "accepted": [
      "python3 04_lock_ordering.py",
      "python 04_lock_ordering.py"
    ],
    "tags": [
      "#LOCK_ORDERING_RUN",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tartiblangan qulflar bilan dasturning muvaffaqiyatli yakunlanishini tasdiqlash.",
      "flags": [],
      "whenToUse": "Kod tekshiruvida.",
      "omissionRisk": "Skript bajarilmasa natijaning aniqligiga ishonch hosil qilib bo'lmaydi.",
      "syntaxExample": "python3 04_lock_ordering.py"
    }
  },
  {
    "id": 124,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Taymout Bilan Qulf Olish (Deadlock Avoidance in Python)",
    "story": "Agar ikkinchi qulf 2 soniya ichida ochilmasa, birinchi qulfni ham bo'shatib orqaga chekinish (backoff) qilish usuli.",
    "task": "2.0 soniya taymout bilan acquire chaqiring.",
    "canonical": "lockB.acquire(timeout=2.0)",
    "accepted": [
      "lockB.acquire(timeout=2.0)",
      "lock.acquire(timeout=2.0)",
      "lock.acquire(2.0)"
    ],
    "tags": [
      "#TIMEOUT_ACQUIRE",
      "#BACKOFF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Abadiy qotib qolish o'rniga taymout tugaganda boshqaruvni qaytarish.",
      "flags": [],
      "whenToUse": "Tizimlarda deadlockni oldini olishning amaliy usulida.",
      "omissionRisk": "False qaytganida oldin olingan barcha qulflar bo'shatilishi shart.",
      "syntaxExample": "lockB.acquire(timeout=2.0)"
    }
  },
  {
    "id": 125,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Tasodifiy Orqaga Chekinish (Randomized Backoff)",
    "story": "Ikkala oqim ham qulfni bo'shatgach, yana bir vaqtda qayta urinib livelock hosil qilmasligi uchun nima qilinadi?",
    "task": "Oqimlar kutish vaqtiga nima qo'shiladi?",
    "canonical": "Tasodifiy kechikish",
    "accepted": [
      "Tasodifiy kechikish",
      "random delay",
      "jitter"
    ],
    "tags": [
      "#RANDOM_BACKOFF",
      "#LIVELOCK_PREVENTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oqimlarning bir vaqtda to'qnashuvini (collision) sindirish.",
      "flags": [],
      "whenToUse": "Tarmoq protokollari (CSMA/CD) va taqsimlangan qulflarda.",
      "omissionRisk": "Tasodifiy son bo'lmasa oqimlar birga yurib livelockka tushadi.",
      "syntaxExample": "Tasodifiy kechikish"
    }
  },
  {
    "id": 126,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Universal Qulflash Tartibi: id(lock) Bo'yicha Saralash",
    "story": "Ixtiyoriy ikki qulf berilganda ularning xotiradagi unikal identifikatorini taqqoslab, kichigini birinchi olish formulasi.",
    "task": "Taqqoslovchi ifodani yozing.",
    "canonical": "id(lockA) < id(lockB)",
    "accepted": [
      "id(lockA) < id(lockB)",
      "id(a) < id(b)"
    ],
    "tags": [
      "#ID_ORDERING",
      "#DYNAMIC_ORDERING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har qanday qulflar to'plamida universal qat'iy tartibni avtomatik ta'minlash.",
      "flags": [],
      "whenToUse": "Qulflar dinamik uzatiladigan murakkab arxitekturalarda.",
      "omissionRisk": "Barcha oqimlar xotira manzili bo'yicha doim bir xil tartibda oladi.",
      "syntaxExample": "id(lockA) < id(lockB)"
    }
  },
  {
    "id": 127,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "O'zini O'zi Qulflash Xatosi (Self-Deadlock)",
    "story": "Bitta oqim o'zi egallab turgan oddiy Lock ga yana qaytadan `lock.acquire()` qilsa nima yuz beradi?",
    "task": "Xavfli oqibatni yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock",
      "self-deadlock"
    ],
    "tags": [
      "#SELF_DEADLOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta oqim o'zini o'zi bloklab abadiy kutib qolishini ko'rsatish.",
      "flags": [],
      "whenToUse": "Rekursiv funksiyalarda oddiy Lock ishlatilganda.",
      "omissionRisk": "Oddiy Lock re-entrant emas.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 128,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Self-Deadlock Yechimi: threading.RLock()",
    "story": "O'sha oqim qulfga qayta-qayta kira olishi uchun oddiy Lock o'rniga qaysi sinf ishlatiladi?",
    "task": "Tegishli sinf nomini yozing.",
    "canonical": "threading.RLock()",
    "accepted": [
      "threading.RLock()",
      "RLock",
      "threading.RLock"
    ],
    "tags": [
      "#RLOCK",
      "#RECURSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta oqim bir necha marta acquire qila oladigan re-entrant qulf yaratish.",
      "flags": [],
      "whenToUse": "Rekursiya va ichma-ich metod chaqiruvlarida.",
      "omissionRisk": "Boshqa oqimlar uchun baribir yopiq bo'ladi.",
      "syntaxExample": "threading.RLock()"
    }
  },
  {
    "id": 129,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Kontekst Bilan Bir Nechta Qulflarni Ochish (contextlib.ExitStack)",
    "story": "Python da bir nechta qulflarni xavfsiz ro'yxat bo'yicha ketma-ket context manager sifatida ochish uchun qaysi standart utilita qo'llaniladi?",
    "task": "Ushbu sinf nomini yozing.",
    "canonical": "ExitStack",
    "accepted": [
      "ExitStack",
      "contextlib.ExitStack",
      "contextlib.ExitStack()"
    ],
    "tags": [
      "#EXIT_STACK",
      "#CONTEXT_MANAGER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dinamik miqdordagi qulflarni bitta xavfsiz blokda ochish va teskari tartibda bo'shatish.",
      "flags": [],
      "whenToUse": "Ro'yxatdagi barcha qulflarni atomik egallashda.",
      "omissionRisk": "Bitta qulf olinmasa oldingi olingan barchasi avtomatik toza yopiladi.",
      "syntaxExample": "ExitStack"
    }
  },
  {
    "id": 130,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Qotgan Oqimlar Stack Trace ini Ko'rish (faulthandler)",
    "story": "Python dasturi qotib qolganda terminalda SIGUSR1 yuborib barcha oqimlarning kod qaysi qatorda turganini chiqarish moduli.",
    "task": "Python buyrug'iga qaysi bayroq qo'shiladi?",
    "canonical": "-X faulthandler",
    "accepted": [
      "-X faulthandler",
      "-Xfaulthandler",
      "faulthandler"
    ],
    "tags": [
      "#FAULTHANDLER",
      "#DEBUG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Muzlagan Python oqimlarining C va Python stack izlarini fosh qilish.",
      "flags": [
        {
          "flag": "-X faulthandler",
          "meaning": "Xatoliklar va signallarda trace ni konsolga chiqarish",
          "syntax": "python3 -X faulthandler dastur.py"
        }
      ],
      "whenToUse": "Deadlocklarni debag qilishda.",
      "omissionRisk": "Qaysi qatorda acquire qotib turgani aniq ko'rinadi.",
      "syntaxExample": "-X faulthandler"
    }
  },
  {
    "id": 131,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Oqimlarni Tashqaridan Profil Qilish (py-spy)",
    "story": "Ishlayotgan Python dasturini to'xtatmasdan uning oqimlari va qulflarini kuzatuvchi mashhur vosita.",
    "task": "Ushbu CLI utilitasini yozing.",
    "canonical": "py-spy",
    "accepted": [
      "py-spy",
      "pyspy"
    ],
    "tags": [
      "#PY_SPY",
      "#PROFILING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Production da ishlayotgan dasturdagi deadlocklarni vizual ko'rsatish.",
      "flags": [],
      "whenToUse": "Serverdagi osilib qolgan jarayonlarni audit qilishda.",
      "omissionRisk": "Dastur kodiga hech qanday o'zgartirish kiritishni talab qilmaydi.",
      "syntaxExample": "py-spy"
    }
  },
  {
    "id": 132,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Qulflar Ierarxiyasi Qoidasi (Lock Hierarchy)",
    "story": "Tizimdagi har bir qulfga daraja (Level 1, Level 2, Level 3) berilib, past darajali qulf ushlab turilganda yuqorisini olish qat'iy taqiqlanadi.",
    "task": "Ushbu dizayn qoidasi nomini yozing.",
    "canonical": "Lock Hierarchy",
    "accepted": [
      "Lock Hierarchy",
      "lock hierarchy",
      "ierarxiya"
    ],
    "tags": [
      "#LOCK_HIERARCHY",
      "#ARCHITECTURE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Katta dasturlarda qulflash tartibini me'moriy darajada kafolatlash.",
      "flags": [],
      "whenToUse": "Murakkab tizimlarda.",
      "omissionRisk": "Agar ierarxiya buzilsa CI/CD linter xato beradi.",
      "syntaxExample": "Lock Hierarchy"
    }
  },
  {
    "id": 133,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Deadlock-Free Qulf Olish Yordamchisi",
    "story": "Bir nechta qulflarni tartiblab oluvchi yordamchi funksiya yaratish.",
    "task": "Qulflarni tartiblash funksiyasini yozing.",
    "canonical": "acquire_ordered(*locks)",
    "accepted": [
      "acquire_ordered(*locks)",
      "acquire_ordered",
      "acquire_ordered()"
    ],
    "tags": [
      "#HELPER_FUNCTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulflarni avtomatik saralab tartibli egallash yordamchisi.",
      "flags": [],
      "whenToUse": "Kod takrorlanishini (DRY) yo'qotishda.",
      "omissionRisk": "Dasturchi tartibni eslab qolishi shart bo'lmaydi.",
      "syntaxExample": "acquire_ordered(*locks)"
    }
  },
  {
    "id": 134,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "Ichma-ich Qulflar Xavfi (Nested Locks)",
    "story": "Bitta qulf ichida boshqa qulfni ochish (Nested Locking) qancha ko'p bo'lsa, Deadlock xavfi qanday o'zgaradi?",
    "task": "Xavf qanday o'zgaradi? (Oshadi / Kamayadi)",
    "canonical": "Oshadi",
    "accepted": [
      "Oshadi",
      "oshadi",
      "increases"
    ],
    "tags": [
      "#NESTED_LOCKS",
      "#RISK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ichma-ich qulflardan imkon qadar qochish kerakligini anglash.",
      "flags": [],
      "whenToUse": "Kod refaktoringida.",
      "omissionRisk": "Iloji bo'lsa faqat bitta qulf bilan cheklanish lozim.",
      "syntaxExample": "Oshadi"
    }
  },
  {
    "id": 135,
    "sectorId": 9,
    "sectorTitle": "Python da Tupiklar: Lock Ordering & Ierarxiya",
    "title": "try...finally Bilanoq Bo'shatish Kafolati",
    "story": "Qulflar teskari tartibda bo'shatilishi va istisno yuz berganda ham qulf yopiq qolmasligi kafolati.",
    "task": "Qulf bo'shatish qaysi blokda bo'lishi shart?",
    "canonical": "finally",
    "accepted": [
      "finally",
      "finally:",
      "finally bloki"
    ],
    "tags": [
      "#FINALLY",
      "#CLEANUP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulfni kafolatlangan ochilishini ta'minlash.",
      "flags": [],
      "whenToUse": "With konteksidan foydalanilmagan holatlarda.",
      "omissionRisk": "finally bo'lmasa xato chiqqanda qulf ochiq qolmaydi va tizim deadlockka uchraydi.",
      "syntaxExample": "finally"
    }
  },
  {
    "id": 136,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Tuyaqush Algoritmi (Ostrich Algorithm)",
    "story": "L09 Modern OS: Muammo shunchalik kamdan-kam sodir bo'ladiki, uni oldini olish va tekshirish xarajatlari foydasidan ancha qimmatga tushadi, shuning uchun 'boshni qumga tiqib' e'tiborsiz qoldiriladi.",
    "task": "Ushbu mashhur algoritm nomini yozing.",
    "canonical": "Ostrich Algorithm",
    "accepted": [
      "Ostrich Algorithm",
      "ostrich algorithm",
      "tuyaqush algoritmi"
    ],
    "tags": [
      "#OSTRICH_ALGORITHM",
      "#PHILOSOPHY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kam uchraydigan murakkab muammolarni e'tiborsiz qoldirib, tezlikni saqlab qolish yondashuvi.",
      "flags": [],
      "whenToUse": "Windows, Linux va macOS kabi umumiy operatsion tizimlarda.",
      "omissionRisk": "Agar deadlock sodir bo'lsa foydalanuvchi tizimni o'zi reboot qiladi.",
      "syntaxExample": "Ostrich Algorithm"
    }
  },
  {
    "id": 137,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Nega Zamonaviy OS lar Ostrich Usulini Tanlaydi?",
    "story": "Har bir resurs so'rovida Bankir algoritmini yurgizish butun kompyuterni juda qattiq nima qiladi?",
    "task": "Kompyuterga ta'sirini yozing (sekinlashtiradi / tezlashtiradi).",
    "canonical": "sekinlashtiradi",
    "accepted": [
      "sekinlashtiradi",
      "slows down",
      "og'irlashtiradi"
    ],
    "tags": [
      "#PERFORMANCE_OVERHEAD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Unumdorlik yo'lida kam uchraydigan xatoga ko'z yumish sababini tushunish.",
      "flags": [],
      "whenToUse": "Arxitektura muhokamalarida.",
      "omissionRisk": "Foydalanuvchi tezlikni xavfsizlikdan ustun qo'yadi.",
      "syntaxExample": "sekinlashtiradi"
    }
  },
  {
    "id": 138,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Linux Yadrosidagi Qulf Tekshiruvchisi: lockdep",
    "story": "Linux kernelida kompilyatsiya va ish jarayonida potensial deadlocklarni oldindan aniqlovchi maxsus subsistema.",
    "task": "Ushbu yadro vositasi nomini yozing.",
    "canonical": "lockdep",
    "accepted": [
      "lockdep",
      "Lockdep",
      "LOCKDEP"
    ],
    "tags": [
      "#LOCKDEP",
      "#LINUX_KERNEL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Linux yadrosidagi qulflar bog'liqlik grafigini tekshirish.",
      "flags": [],
      "whenToUse": "Yadro drayverlari va modullarini ishlab chiqishda.",
      "omissionRisk": "Deadlock xavfi bor zanjir paydo bo'lishi bilan ogohlantirish beradi.",
      "syntaxExample": "lockdep"
    }
  },
  {
    "id": 139,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "RDBMS larda Deadlock Hal Qilish (InnoDB / Postgres)",
    "story": "Ma'lumotlar bazasida 2 ta tranzaksiya bir-birini qulflaganda RDBMS bittasiga qaysi xatoni chiqarib avtomatik Rollback qiladi?",
    "task": "Xatolik nomini yozing.",
    "canonical": "Deadlock detected",
    "accepted": [
      "Deadlock detected",
      "deadlock detected",
      "Deadlock"
    ],
    "tags": [
      "#DATABASE_DEADLOCK",
      "#RDBMS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ma'lumotlar bazasida WFG siklini uzish.",
      "flags": [],
      "whenToUse": "SQL tranzaksiyalarini boshqarishda.",
      "omissionRisk": "Dasturchi bu xatoni tutib tranzaksiyani qayta urinishi (retry) kerak.",
      "syntaxExample": "Deadlock detected"
    }
  },
  {
    "id": 140,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Taqsimlangan Tizimlarda Deadlock (Distributed Deadlocks)",
    "story": "Bir nechta serverlar aro tarmoq orqali yuzaga keladigan, markaziy koordinatsiyasiz tupik turi.",
    "task": "Ushbu tupik turini yozing.",
    "canonical": "Distributed Deadlock",
    "accepted": [
      "Distributed Deadlock",
      "distributed deadlock",
      "taqsimlangan tupik"
    ],
    "tags": [
      "#DISTRIBUTED_SYSTEMS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mikroservislar va klasterlarda yuzaga keladigan murakkab deadlocklar.",
      "flags": [],
      "whenToUse": "Bulutli tizimlar arxitekturasida.",
      "omissionRisk": "Chandy-Misra-Haas kabi maxsus proba protokollari talab etiladi.",
      "syntaxExample": "Distributed Deadlock"
    }
  },
  {
    "id": 141,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Chandy-Misra-Haas Algoritmi (Edge Chasing)",
    "story": "Taqsimlangan graflarda so'rov zanjirlari bo'ylab proba (probe) xabarlarini yuborib siklni qidiruvchi mashhur algoritm.",
    "task": "Bu usul nima deb ataladi?",
    "canonical": "Edge Chasing",
    "accepted": [
      "Edge Chasing",
      "edge chasing",
      "Chandy-Misra-Haas"
    ],
    "tags": [
      "#EDGE_CHASING",
      "#DISTRIBUTED"
    ],
    "flagAnatomy": {
      "commandPurpose": "Taqsimlangan tizimlarda markaziy RAG siz sikllarni aniqlash.",
      "flags": [],
      "whenToUse": "Katta taqsimlangan ma'lumotlar bazalarida.",
      "omissionRisk": "Proba xabari o'ziga qaytib kelsa deadlock borligi isbotlanadi.",
      "syntaxExample": "Edge Chasing"
    }
  },
  {
    "id": 142,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Soxta Tupik (Phantom Deadlock)",
    "story": "Tarmoq kechikishi sababli aslida yechilib bo'lgan, lekin xabari yetib kelmagani uchun hali ham bordek ko'ringan soxta deadlock.",
    "task": "Bu qanday deadlock deb ataladi?",
    "canonical": "Phantom Deadlock",
    "accepted": [
      "Phantom Deadlock",
      "phantom deadlock",
      "soxta deadlock"
    ],
    "tags": [
      "#PHANTOM_DEADLOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Taqsimlangan tizimlarda asinxron xabarlar tufayli paydo bo'ladigan illyuziya.",
      "flags": [],
      "whenToUse": "Deteksiya xatolarini tahlil qilishda.",
      "omissionRisk": "Keraksiz tranzaksiya bekor qilib yuborilishi mumkin.",
      "syntaxExample": "Phantom Deadlock"
    }
  },
  {
    "id": 143,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Linux da Qotgan Jarayonni Kuzatish (strace)",
    "story": "Qotib turgan jarayon qaysi tizim chaqiruvida (masalan, futex) bloklanib turganini jonli ko'rish utilitasi.",
    "task": "1234 PID li jarayonni kuzatuvchi strace buyrug'ini yozing.",
    "canonical": "strace -p 1234",
    "accepted": [
      "strace -p 1234",
      "strace -p"
    ],
    "tags": [
      "#STRACE",
      "#SYSTEM_CALLS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon qaysi system call da to'xtab turganini terminalda ko'rish.",
      "flags": [
        {
          "flag": "-p",
          "meaning": "Attach to the process with process ID PID and begin tracing",
          "syntax": "strace -p <PID>"
        }
      ],
      "whenToUse": "Qotgan jarayonlarni diagnostika qilishda.",
      "omissionRisk": "Qaysi qulf kutilyotganini kernel darajasida fosh qiladi.",
      "syntaxExample": "strace -p 1234"
    }
  },
  {
    "id": 144,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Linux Qulflash Asosi: futex",
    "story": "Linux da foydalanuvchi fazosida tezkor ishlaydigan va faqat ziddiyat (contention) bo'lgandagina yadroga murojaat qiluvchi primitiv.",
    "task": "Ushbu Linux mexanizmi nomini yozing.",
    "canonical": "futex",
    "accepted": [
      "futex",
      "Futex",
      "Fast Userspace Mutex"
    ],
    "tags": [
      "#FUTEX",
      "#LINUX_KERNEL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Linux da pthread mutexlarining yadrodagi apparat mexanizmi.",
      "flags": [],
      "whenToUse": "Tizimli dasturlash va yadro tahlilida.",
      "omissionRisk": "Ko'pgina deadlocklar aynan futex(..., FUTEX_WAIT_...) chaqiruvida qotadi.",
      "syntaxExample": "futex"
    }
  },
  {
    "id": 145,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Jarayonlar Statusini Ko'rish (ps aux | grep D)",
    "story": "Linux da uzilmas uyquda (Uninterruptible Sleep / D state) yoki qotgan holatdagi jarayonlarni filtrlash.",
    "task": "D statusidagi jarayonlarni qidiruvchi buyruqni bering.",
    "canonical": "ps aux | grep ' D '",
    "accepted": [
      "ps aux | grep ' D '",
      "ps aux | grep D",
      "ps aux"
    ],
    "tags": [
      "#PS",
      "#PROCESS_STATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Disk yoki qulf kutib uzilmas uyquga ketgan jarayonlarni topish.",
      "flags": [],
      "whenToUse": "Tizim muzlab qolganda diagnostika qilishda.",
      "omissionRisk": "D holatidagi jarayonlarni hatto kill -9 ham to'xtata olmasligi mumkin.",
      "syntaxExample": "ps aux | grep ' D '"
    }
  },
  {
    "id": 146,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "WIUT CW1 Case Study: Process Management & Deadlocks",
    "story": "WIUT 5COSC041C Coursework: Talaba hisobotida jarayonlarning hayot sikli, oqimlar sinxronizatsiyasi va deadlock xatarlari tahlili.",
    "task": "Kurs ishidagi ushbu mavzu qaysi haftalik (Week 9) yakunida to'liq o'rganildi?",
    "canonical": "Week 9",
    "accepted": [
      "Week 9",
      "week 9",
      "9-Hafta",
      "9"
    ],
    "tags": [
      "#CW1",
      "#COURSEWORK",
      "#WIUT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha Deadlock va Sinxronizatsiya bilimlarini CW1 Case Study hisobotiga to'liq bog'lash.",
      "flags": [],
      "whenToUse": "Hisobot yozishda va Viva imtihonida.",
      "omissionRisk": "Ushbu tahlillarsiz yuqori baho olib bo'lmaydi.",
      "syntaxExample": "Week 9"
    }
  },
  {
    "id": 147,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Viva Imtihoni Savoli: Deadlock va Starvation Farqi",
    "story": "Viva imtihonida professor so'radi: 'Deadlock bilan Starvation orasidagi asosiy farq nima?'",
    "task": "Starvation da bitta jarayon kutsa, Deadlockda nima bo'ladi?",
    "canonical": "Barcha jarayonlar to'xtaydi",
    "accepted": [
      "Barcha jarayonlar to'xtaydi",
      "hammasi to'xtaydi",
      "all processes blocked"
    ],
    "tags": [
      "#VIVA",
      "#EXAM_PREP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Viva imtihonida beriladigan asosiy savolga aniq va lo'nda javob berish.",
      "flags": [],
      "whenToUse": "Professor Turing bilan og'zaki himoyada.",
      "omissionRisk": "Bu farqni bilish First Class ball uchun majburiydir.",
      "syntaxExample": "Barcha jarayonlar to'xtaydi"
    }
  },
  {
    "id": 148,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Viva Imtihoni Savoli: Circular Wait ni Qanday Buzish Mumkin?",
    "story": "Professor so'radi: 'Circular Wait shartini eng oson va amaliy qanday yo'q qilish mumkin?'",
    "task": "Buzish usulini yozing.",
    "canonical": "Resource Ordering",
    "accepted": [
      "Resource Ordering",
      "lock ordering",
      "resurslarni tartiblash"
    ],
    "tags": [
      "#VIVA",
      "#ORDERING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Eng to'g'ri muhandislik yechimini ko'rsatish.",
      "flags": [],
      "whenToUse": "Viva savollarida.",
      "omissionRisk": "Qulflarni tartiblash 100% siklni yo'qotadi.",
      "syntaxExample": "Resource Ordering"
    }
  },
  {
    "id": 149,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "Viva Imtihoni Savoli: Unsafe State Har Doim Deadlockmi?",
    "story": "Professor so'radi: 'Agar tizim unsafe bo'lsa u albatta deadlockka uchraydimi?'",
    "task": "Javobingizni bering (Yo'q / Ha).",
    "canonical": "Yo'q",
    "accepted": [
      "Yo'q",
      "yo'q",
      "yoq",
      "no"
    ],
    "tags": [
      "#VIVA",
      "#CONCEPT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Unsafe holat bu faqat xavf zonasi ekanligini, deadlock kafolati emasligini tushuntirish.",
      "flags": [],
      "whenToUse": "Viva himoyasida.",
      "omissionRisk": "Professorlar aynan shu nozik farq bo'yicha sinashadi.",
      "syntaxExample": "Yo'q"
    }
  },
  {
    "id": 150,
    "sectorId": 10,
    "sectorTitle": "Ostrich Algoritmi & CW1 Case Study Integratsiyasi",
    "title": "OS Akademiya Hafta 9 Bitiruvchi Sertifikati",
    "story": "Tabriklaymiz! Siz WIUT Operatsion Tizimlar (5COSC041C) modulining Week 9: Deadlocks & Banker's Algorithm mavzusi bo'yicha barcha 150 ta vazifani muvaffaqiyatli zabt etdingiz!",
    "task": "Akademiyaning 9-haftalik kursini yakunlash uchun 'DONE' deb tasdiqlang.",
    "canonical": "DONE",
    "accepted": [
      "DONE",
      "done",
      "Done",
      "tamom"
    ],
    "tags": [
      "#MASTERY",
      "#CERTIFICATE",
      "#WIUT_OS"
    ],
    "flagAnatomy": {
      "commandPurpose": "OS Week 9 kursini to'liq 100% ga yakunlash.",
      "flags": [],
      "whenToUse": "Kurs ishi va Viva ga to'liq tayyor bo'lganda.",
      "omissionRisk": "Antigravity va Professor Turing bilan navbatdagi cho'qqilarga yo'l ochiq!",
      "syntaxExample": "DONE"
    }
  }
];
});
