/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 QUESTION DOSSIERS (questions_51_100.js)
 * Verified Pedagogical Structure with 5-Point Command & Flag Anatomy.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W6_PART2 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 51,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 20",
    "title": "Nima Uchun OPT Algoritmini Tizimda Ishlatib Bo'lmaydi?",
    "story": "Optimal algoritm nazariy jihatdan eng zo'r natijani beradi. Nima sababdan uni real operatsion tizimlarda to'liq joriy qilib bo'lmaydi?",
    "task": "Kelajakdagi murojaatlarni oldindan bilib bo'lmasligi sabablimi?",
    "canonical": "Cannot predict the future",
    "accepted": [
      "cannot predict the future",
      "future knowledge",
      "kelajakni bilib bo'lmaydi",
      "kelajak"
    ],
    "tags": [
      "#OPT",
      "#THEORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dasturlarning kelajakdagi shartli o'tishlarini oldindan bilishning iloji yo'q.",
      "flags": [],
      "whenToUse": "OPT ning amaliy emas, faqat o'lchov vositasi ekanligini anglashda.",
      "omissionRisk": "OPT ni amalga oshirishga urinib behuda resurs sarflash.",
      "syntaxExample": "OPT requires future knowledge: Can't read the future"
    }
  },
  {
    "id": 52,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 21",
    "title": "LRU (Least Recently Used) Algoritmining G'oyasi",
    "story": "Kelajakni bilishning iloji bo'lmagani uchun, LRU o'tmishdagi ma'lumotlarga qaraydi: eng uzoq vaqtdan beri ishlatilmagan sahifani almashtiradi.",
    "task": "O'sha reference string da 3 ta freym bilan LRU nechta page fault hosil qiladi? (FIFO dan yaxshiroq: 12 ta).",
    "canonical": "12",
    "accepted": [
      "12 page faults",
      "12",
      "12 ta"
    ],
    "tags": [
      "#LRU",
      "#PAGE_FAULTS"
    ],
    "flagAnatomy": {
      "commandPurpose": "LRU o'tmishdagi murojaatlar vaqtini kuzatadi. Natija: 12 ta fault.",
      "flags": [],
      "whenToUse": "FIFO dan ancha yaxshiroq va amaliyotga yaqin almashtirishda.",
      "omissionRisk": "Har bir murojaatda vaqt tamg'asini saqlash apparatga qiyinlik tug'diradi.",
      "syntaxExample": "LRU with 3 frames: 12 page faults"
    }
  },
  {
    "id": 53,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 22",
    "title": "Stack Property (Stack Xususiyati) Nima?",
    "story": "Stack algoritmlarida n ta freymdagi sahifalar to'plami har doim n+1 ta freymdagi sahifalar to'plamining qism-to'plami (subset) bo'ladi.",
    "task": "Stack xususiyatiga ega algoritmlarda Belady Anomaliyasi bo'ladimi: Ha yoki Yo'q?",
    "canonical": "Yo'q",
    "accepted": [
      "yo'q",
      "no",
      "yoq",
      "bo'lmaydi"
    ],
    "tags": [
      "#STACK_PROPERTY",
      "#LRU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Stack algoritmlari (LRU, OPT) hech qachon Belady anomaliyasiga uchramaydi.",
      "flags": [],
      "whenToUse": "Xotira oshganda fault kamayishini kafolatlashda.",
      "omissionRisk": "FIFO stack xususiyatiga ega emas, shuning uchun anomaliyaga uchraydi.",
      "syntaxExample": "Stack algorithms don't have Belady's Anomaly"
    }
  },
  {
    "id": 54,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 22",
    "title": "Qaysi Algoritmlar Stack Xususiyatiga Ega?",
    "story": "Seminar savoli: Quyidagi algoritmlardan qaysi biri Stack algoritmi hisoblanadi: FIFO yoki LRU?",
    "task": "LRU",
    "canonical": [
      "lru",
      "least recently used",
      "opt and lru"
    ],
    "accepted": [
      "#STACK_ALGORITHM",
      "#LRU"
    ],
    "tags": [
      "#OS_W6"
    ],
    "flagAnatomy": {
      "commandPurpose": "LRU va OPT ikkalasi ham stack algoritmlari sinfiga kiradi.",
      "flags": [],
      "whenToUse": "Kafolatlangan xotira kengayishida unumdorlikni ta'minlashda.",
      "omissionRisk": "FIFO ni tanlash anomaliya xavfini keltirib chiqaradi.",
      "syntaxExample": "LRU is a stack algorithm"
    }
  },
  {
    "id": 55,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 23",
    "title": "Second-Chance (Clock) Algoritmining Asosi",
    "story": "To'liq LRU apparat uchun juda qimmat bo'lgani sababli, unga yaqinlashuvchi Clock algoritmi ishlatiladi.",
    "task": "Clock algoritmi har bir sahifa uchun qanday bitta apparat bitidan foydalanadi (Reference bit)?",
    "canonical": "Reference bit",
    "accepted": [
      "reference bit",
      "use bit",
      "murojaat biti"
    ],
    "tags": [
      "#CLOCK_ALGORITHM",
      "#REFERENCE_BIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Reference bit sahifa o'qilganda yoki yozilganda apparat tomonidan 1 ga qo'yiladi.",
      "flags": [],
      "whenToUse": "Kam xarajat bilan LRU samaradorligiga erishishda.",
      "omissionRisk": "Oddiy FIFO ga nisbatan ancha kam fault beradi.",
      "syntaxExample": "Clock replacement scans reference bits"
    }
  },
  {
    "id": 56,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 23",
    "title": "Clock Algoritmi Strelkasi (Clock Hand) Harakati",
    "story": "Clock strelkasi navbatdagi freymni tekshirganda, agar uning reference biti 1 bo'lsa, OS nima qiladi?",
    "task": "Bitni 0 ga tushirib ikkinchi imkoniyat (second chance) beradimi va oldinga siljiydimi?",
    "canonical": "Clears to 0 and advances",
    "accepted": [
      "clears to 0 and advances",
      "clear 1 and advance",
      "0 ga tushiradi",
      "clears to 0"
    ],
    "tags": [
      "#CLOCK",
      "#SECOND_CHANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Agar bit 1 bo'lsa, u 0 qilinadi va keyingi kadrga o'tiladi. Agar 0 bo'lsa, almashtiriladi.",
      "flags": [],
      "whenToUse": "Yaqinda ishlatilgan sahifalarni saqlab qolishda.",
      "omissionRisk": "Hamma bitlar 1 bo'lsa, strelka bir aylanib chiqib birinchisini oladi.",
      "syntaxExample": "Clear 1 to 0 and advance, or replace candidate with 0"
    }
  },
  {
    "id": 57,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 24",
    "title": "Enhanced Second-Chance 4 Ta Sinf (Classes)",
    "story": "Enhanced Second-Chance algoritmi 2 ta bitga qaraydi: Reference bit (R) va Modify bit (M).",
    "task": "Eng birinchi tanlanadigan eng afzal qurbon sinf qaysi: (0,0) yoki (1,1)?",
    "canonical": "(0,0)",
    "accepted": [
      "(0,0)",
      "0,0",
      "class (0,0)"
    ],
    "tags": [
      "#ENHANCED_SECOND_CHANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Class (0,0) yaqinda ishlatilmagan va o'zgartirilmagan (clean) eng arzon kadrdir.",
      "flags": [],
      "whenToUse": "Diskka ortiqcha yozishni kamaytirishda.",
      "omissionRisk": "Dirty kadrni tanlash writeback kechikishiga sabab bo'ladi.",
      "syntaxExample": "Class (0,0): Not recently referenced and clean"
    }
  },
  {
    "id": 58,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 24",
    "title": "Enhanced Second-Chance: Class (0,1)",
    "story": "Agar tizimda (0,0) topilmasa, keyingi navbatda qaysi kadr tekshiriladi: (0,1) mi yoki (1,0)?",
    "task": "Ikkinchi afzal sinfni kiriting: (0,1).",
    "canonical": "(0,1)",
    "accepted": [
      "(0,1)",
      "0,1",
      "class (0,1)"
    ],
    "tags": [
      "#ENHANCED_SECOND_CHANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Class (0,1) yaqinda ishlatilmagan, lekin dirty bo'lgani uchun yozib olinishi kerak.",
      "flags": [],
      "whenToUse": "Eng kam ishlatilgan kadrni tanlash strategiyasida.",
      "omissionRisk": "I/O operatsiyasiga tayyor bo'lish lozim.",
      "syntaxExample": "Class (0,1): Not recent, but dirty"
    }
  },
  {
    "id": 59,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 25",
    "title": "LFU (Least Frequently Used) Algoritmi",
    "story": "Chastotaga asoslangan LFU algoritmi qaysi sahifani almashtiradi: Murojaatlar soni eng kam bo'lganinimi yoki eng ko'p bo'lganini?",
    "task": "Eng kichik murojaat hisoblagichiga ega bo'lgan sahifami (Lowest reference count)?",
    "canonical": "Lowest reference count",
    "accepted": [
      "lowest reference count",
      "lowest count",
      "eng kam",
      "lowest"
    ],
    "tags": [
      "#LFU",
      "#FREQUENCY"
    ],
    "flagAnatomy": {
      "commandPurpose": "LFU eng kam sonli murojaat qilingan sahifani chiqaradi.",
      "flags": [],
      "whenToUse": "Dasturning boshida ko'p ishlatilgan sahifalarni uzoq saqlamaslikda.",
      "omissionRisk": "Eski yuqori hisoblar o'z ahamiyatini yo'qotgan sahifani ushlab qolishi mumkin.",
      "syntaxExample": "LFU replaces page with lowest reference count"
    }
  },
  {
    "id": 60,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 25",
    "title": "MFU (Most Frequently Used) Algoritmi Mantiqi",
    "story": "MFU algoritmi eng kichik hisoblagichga ega sahifa hozirgina kelgan va endi ishlatiladi deb hisoblaydi.",
    "task": "Shu sababli MFU qaysi sahifani almashtiradi: Highest reference count yoki Lowest?",
    "canonical": "Highest reference count",
    "accepted": [
      "highest reference count",
      "highest count",
      "eng ko'p",
      "highest"
    ],
    "tags": [
      "#MFU",
      "#FREQUENCY"
    ],
    "flagAnatomy": {
      "commandPurpose": "MFU eng ko'p ishlatilgan sahifani o'z vazifasini bajarib bo'lgan deb hisoblaydi.",
      "flags": [],
      "whenToUse": "Eksperimental tadqiqotlarda.",
      "omissionRisk": "Amalda LFU ham, MFU ham keng qo'llanilmaydi va qimmat.",
      "syntaxExample": "MFU replaces page with highest reference count"
    }
  },
  {
    "id": 61,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 27",
    "title": "Teng Kadrlar Taqsimoti (Equal Allocation)",
    "story": "Agar tizimda 100 ta freym va 5 ta jarayon bo'lsa, Equal Allocation har bir jarayonga nechta freym beradi?",
    "task": "Har biriga ajratiladigan kadrlar sonini kiriting (100 / 5 = 20).",
    "canonical": "20",
    "accepted": [
      "20 frames",
      "20",
      "20 ta"
    ],
    "tags": [
      "#FRAME_ALLOCATION",
      "#EQUAL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Equal allocation har bir jarayon hajmiga qaramay teng m/n ulush beradi.",
      "flags": [],
      "whenToUse": "Barcha jarayonlar bir xil o'lchamda bo'lganda.",
      "omissionRisk": "Katta jarayonlarga yetmay qolib, ularda page fault ko'payadi.",
      "syntaxExample": "Equal allocation: m / n frames per process"
    }
  },
  {
    "id": 62,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 27",
    "title": "Proporsional Kadrlar Taqsimoti (Proportional Allocation)",
    "story": "Proportional Allocation har bir jarayonga uning virtual xotira hajmiga proporsional ravishda freym ajratadi.",
    "task": "Katta jarayon kichik jarayonga nisbatan ko'proq freym oladimi: Ha yoki Yo'q?",
    "canonical": "Ha",
    "accepted": [
      "ha",
      "yes",
      "albatta"
    ],
    "tags": [
      "#FRAME_ALLOCATION",
      "#PROPORTIONAL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Katta jarayonlarga ko'proq, kichiklarga kamroq freym taqsimlanadi.",
      "flags": [],
      "whenToUse": "Turli o'lchamdagi jarayonlar mavjud real tizimlarda.",
      "omissionRisk": "Jarayon dinamik kengayganda qayta taqsimlash talab etiladi.",
      "syntaxExample": "Proportional allocation follows relative process size"
    }
  },
  {
    "id": 63,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 28",
    "title": "Global vs Local Replacement Farqi",
    "story": "Local replacement faqat o'sha jarayonning o'ziga ajratilgan freymlar ichidan qurbon tanlaydi.",
    "task": "Boshqa jarayonlarning freymlarini ham tortib olishga qodir almashtirish qaysi: Global yoki Local?",
    "canonical": "Global replacement",
    "accepted": [
      "global replacement",
      "global"
    ],
    "tags": [
      "#GLOBAL_REPLACEMENT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Global replacement butun tizim bo'yicha erkin yoki kam ishlatilgan freymni oladi.",
      "flags": [],
      "whenToUse": "Tizim umumiy resurslaridan maksimal foydalanishda.",
      "omissionRisk": "Bitta nosoz jarayon boshqa barcha jarayonlarning kadrlarini yeb qo'yishi mumkin.",
      "syntaxExample": "Global replacement can choose frames from other processes"
    }
  },
  {
    "id": 64,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 31",
    "title": "Thrashing (G'ildirak Qotishi) Ta'rifi",
    "story": "Agar jarayon foydali kodni bajarishdan ko'ra ko'proq vaqtini sahifalarni swap qilish (in/out) bilan o'tkazsa, tizim nima holatga tushadi?",
    "task": "Ushbu falokatli holatning nomini kiriting (Thrashing).",
    "canonical": "Thrashing",
    "accepted": [
      "thrashing",
      "treshing"
    ],
    "tags": [
      "#THRASHING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Thrashing paytida CPU unumdorligi deyarli 0% ga tushadi, disk esa 100% band bo'ladi.",
      "flags": [],
      "whenToUse": "Xotira yetishmovchiligining eng xavfli bosqichini diagnostika qilishda.",
      "omissionRisk": "Tizim butunlay qotib qoladi (freeze).",
      "syntaxExample": "Thrashing: Process busy swapping pages in and out"
    }
  },
  {
    "id": 65,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 31",
    "title": "Thrashing Paytida CPU Unumdorligi Qanday Bo'ladi?",
    "story": "Thrashing sodir bo'lganda CPU utilization (foydalanish foizi) qanday o'zgaradi: Keskin tushib ketadimi yoki oshib ketadimi?",
    "task": "Foydali CPU ishlashi keskin tushadimi (Plummets / Drops)?",
    "canonical": "Drops sharply",
    "accepted": [
      "drops sharply",
      "tushib ketadi",
      "drops",
      "kamayadi",
      "0% ga tushadi"
    ],
    "tags": [
      "#THRASHING",
      "#CPU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Protsessor barcha jarayonlar disk I/O ni kutib yotgani uchun bekor qoladi.",
      "flags": [],
      "whenToUse": "Operatsion tizim nima sababdan yangi jarayon qo'shmasligi kerakligini bilishda.",
      "omissionRisk": "OS adashib ko'proq jarayon qo'shsa ahvol battar bo'ladi.",
      "syntaxExample": "Thrashing: CPU utilization plummets"
    }
  },
  {
    "id": 66,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 32",
    "title": "Locality of Reference (Murojaat Mahalliyligi)",
    "story": "Jarayon bajarilayotganda bir vaqtning o'zida hamma xotiraga emas, balki ma'lum bir kichik lokal hududga murojaat qiladi.",
    "task": "Yaqinda ishlatilgan sahifa yana qayta ishlatilish ehtimoli nima deb ataladi (Temporal locality)?",
    "canonical": "Temporal locality",
    "accepted": [
      "temporal locality",
      "temporal"
    ],
    "tags": [
      "#LOCALITY",
      "#TEMPORAL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Temporal locality vaqt bo'yicha takrorlanuvchi murojaatdir (masalan, loop hisoblagichi).",
      "flags": [],
      "whenToUse": "Kesh va paging samaradorligini tushuntirishda.",
      "omissionRisk": "Locality hisobga olinmasa, xotira haddan tashqari ko'p sahifalarni chaqiradi.",
      "syntaxExample": "Temporal locality: Recently used pages used again soon"
    }
  },
  {
    "id": 67,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 32",
    "title": "Spatial Locality (Fazo Mahalliyligi)",
    "story": "Jarayon bitta manzilga murojaat qilsa, uning yonidagi qo'shni manzillarga ham tez orada murojaat qiladi (masalan, massiv elementlari).",
    "task": "Ushbu yaqinlik xususiyati qanday ataladi (Spatial locality)?",
    "canonical": "Spatial locality",
    "accepted": [
      "spatial locality",
      "spatial"
    ],
    "tags": [
      "#LOCALITY",
      "#SPATIAL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Spatial locality fazoviy qo'shnilik xususiyatidir.",
      "flags": [],
      "whenToUse": "Massivlar va ketma-ket ma'lumotlar tuzilmalarini saqlashda.",
      "omissionRisk": "Satr bo'yicha o'rniga ustun bo'yicha noo'rin o'qish minglab page fault keltirib chiqaradi.",
      "syntaxExample": "Spatial locality: Nearby addresses accessed soon"
    }
  },
  {
    "id": 68,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 33",
    "title": "Working-Set Modeli va Oyna Parametri (Delta)",
    "story": "Working-Set modelida yaqinda murojaat qilingan sahifalar to'plami kuzatiladi. Ushbu oxirgi murojaatlar soni qaysi belgi bilan belgilanadi?",
    "task": "Oyna parametrini kiriting (Delta / Δ).",
    "canonical": "Delta",
    "accepted": [
      "delta",
      "Δ"
    ],
    "tags": [
      "#WORKING_SET",
      "#DELTA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Delta oynasi ichida jarayon ishlatgan betakror sahifalar uning working setini tashkil etadi.",
      "flags": [],
      "whenToUse": "Thrashing ning oldini olish algoritmlarida.",
      "omissionRisk": "Delta noto'g'ri tanlansa butun xotira talabi xato chiqadi.",
      "syntaxExample": "Delta is the window of recent page references"
    }
  },
  {
    "id": 69,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 33",
    "title": "Working-Set Jami Talab Formulasi (D)",
    "story": "Agar barcha jarayonlarning working-setlari yig'indisi D = sum(WSS_i) mavjud jismoniy freymlar m dan oshib ketsa (D > m), OS nima qilishi shart?",
    "task": "Jarayonlardan birini to'xtatib turishimi (Suspend a process) yoki yangi jarayon qo'shishimi?",
    "canonical": "Suspend a process",
    "accepted": [
      "suspend a process",
      "suspend",
      "to'xtatish",
      "bitta jarayonni to'xtatish"
    ],
    "tags": [
      "#WORKING_SET",
      "#POLICY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jami talab D mavjud xotiradan oshsa, bitta jarayon to'xtatilib uning freymlari boshqalarga beriladi.",
      "flags": [],
      "whenToUse": "Thrashing paydo bo'lishining oldini olishda.",
      "omissionRisk": "Hech kim to'xtatilmasa, butun tizim qulaydi.",
      "syntaxExample": "If D > m, suspend a process to avoid thrashing"
    }
  },
  {
    "id": 70,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 34",
    "title": "Page-Fault Frequency (PFF) Strategiyasi",
    "story": "PFF strategiyasi yuqori va quyi chegara (threshold) belgilaydi. Agar jarayonning fault tezligi yuqori chegaradan oshsa, OS unga nima beradi?",
    "task": "Jarayonga ko'proq freym ajratadimi (Allocate more frames)?",
    "canonical": "Allocate more frames",
    "accepted": [
      "allocate more frames",
      "ko'proq freym",
      "allocate frames",
      "more frames"
    ],
    "tags": [
      "#PFF",
      "#FRAMES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Agar fault rate o'ta yuqori bo'lsa, jarayonga yetarli xotira beriladi.",
      "flags": [],
      "whenToUse": "To'g'ridan-to'g'ri o'lchov orqali kadrlar taqsimlashda.",
      "omissionRisk": "Aks holda jarayon doimiy fault da qolib ketadi.",
      "syntaxExample": "If actual rate too high, process gains frame"
    }
  },
  {
    "id": 71,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 34",
    "title": "PFF da Xatolik Kamayganda (Low Fault Rate)",
    "story": "Agar jarayonning fault darajasi quyi chegaradan ham pastga tushib ketsa, OS nima qiladi?",
    "task": "Uning ortiqcha freymlarini qaytarib oladimi (Reclaim frames)?",
    "canonical": "Reclaim frames",
    "accepted": [
      "reclaim frames",
      "freymlarni oladi",
      "reclaim",
      "freym oladi"
    ],
    "tags": [
      "#PFF",
      "#RECLAIM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kam ishlatilayotgan bo'sh freymlar muhtoj jarayonlarga beriladi.",
      "flags": [],
      "whenToUse": "Xotiradan oqilona foydalanishda.",
      "omissionRisk": "Haddan tashqari ko'p freym bitta tinch jarayonda behuda yotadi.",
      "syntaxExample": "If actual rate too low, process loses frame"
    }
  },
  {
    "id": 72,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 35",
    "title": "Buddy Allocator Qanday Blokka Bo'ladi?",
    "story": "Yadro xotirasini boshqarishda Buddy Allocator xotirani qanday darajadagi bloklarga bo'ladi (Power-of-two)?",
    "task": "Ushbu darajani kiriting: 2 ning darajasimi yoki 10 ning?",
    "canonical": "Power-of-two",
    "accepted": [
      "power of two",
      "power-of-two",
      "2 ning darajasi",
      "2"
    ],
    "tags": [
      "#BUDDY_ALLOCATOR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Buddy allocator 2 ning darajasidagi bloklarni ikkiga bo'ladi va birlashtiradi.",
      "flags": [],
      "whenToUse": "Linux yadrosida fizik sahifalarni tezkor taqsimlashda.",
      "omissionRisk": "Ichki fragmentatsiya mavjud bo'ladi.",
      "syntaxExample": "Buddy allocation splits power-of-two blocks"
    }
  },
  {
    "id": 73,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 35",
    "title": "Buddy Allocator Misoli: 21 KiB Talabi",
    "story": "Buddy tizimida jarayon 21 KiB xotira so'radi. Unga ajratiladigan eng kichik 2 ning darajasidagi blok necha KiB bo'ladi?",
    "task": "Ajratiladigan blok hajmini kiriting (32 KiB).",
    "canonical": "32 KiB",
    "accepted": [
      "32 kib",
      "32 kb",
      "32",
      "32k"
    ],
    "tags": [
      "#BUDDY_ALLOCATOR",
      "#CALC"
    ],
    "flagAnatomy": {
      "commandPurpose": "16 < 21 <= 32 bo'lgani uchun 32 KiB blok ajratiladi.",
      "flags": [],
      "whenToUse": "Buddy taqsimotini hisoblashda.",
      "omissionRisk": "11 KiB ichki fragmentatsiya sifatida isrof bo'ladi.",
      "syntaxExample": "A 21 KiB request uses a 32 KiB block"
    }
  },
  {
    "id": 74,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 36",
    "title": "Slab Allocator Vazifasi",
    "story": "Yadro ko'p ishlatiladigan strukturalar (masalan, inode, task_struct) uchun oldindan tayyorlangan kesh slotlarini saqlaydi.",
    "task": "Ushbu ob'ekt keshlovchi yadro allokatori qanday ataladi (Slab Allocator)?",
    "canonical": "Slab allocator",
    "accepted": [
      "slab allocator",
      "slab"
    ],
    "tags": [
      "#SLAB_ALLOCATOR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Slab allokator yadro ob'ektlarini noldan yaratish/o'chirish xarajatini kamaytiradi.",
      "flags": [],
      "whenToUse": "Tizim chaqiruvlari tezligini oshirishda.",
      "omissionRisk": "Har bir yangi jarayon uchun to'liq initsializatsiya sekinlashadi.",
      "syntaxExample": "Slab caches reuse slots for kernel object types"
    }
  },
  {
    "id": 75,
    "sectorId": 5,
    "sectorTitle": "Clock Algoritmi, Kadrlar Taqsimoti & Thrashing",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 44",
    "title": "Memory Compression (Xotirani Siqish / zRAM)",
    "story": "Sahifalarni to'g'ridan-to'g'ri sekin diskdagi swap ga yozish o'rniga, bir nechta sahifani RAM ning o'zida siqib (compress) saqlash texnikasi nima deb ataladi?",
    "task": "Ushbu texnologiyani kiriting (Memory compression / zram).",
    "canonical": "Memory compression",
    "accepted": [
      "memory compression",
      "zram",
      "zswap",
      "compression"
    ],
    "tags": [
      "#MEMORY_COMPRESSION",
      "#ZRAM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Memory compression sahifalarni RAM da siqib, disk swap ga murojaatni qisqartiradi.",
      "flags": [],
      "whenToUse": "Android, Linux va zamonaviy serverlarda tezlikni oshirishda.",
      "omissionRisk": "Siqish va yoyish CPU vaqtini oladi.",
      "syntaxExample": "Memory compression reduces swapping to disk"
    }
  },
  {
    "id": 76,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 3",
    "title": "Docker Image (Obraz) Ta'rifi",
    "story": "Docker obrazi faqat o'qiladigan (read-only) qatlamlardan tashkil topgan dastur shablonidir.",
    "task": "Obraz qatlamlari qanday rejimda bo'ladi: Read-only yoki Writable?",
    "canonical": "Read-only",
    "accepted": [
      "read-only",
      "readonly",
      "faqat o'qish"
    ],
    "tags": [
      "#DOCKER",
      "#IMAGE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Image qatlamlari o'zgarmas (immutable) read-only shablondir.",
      "flags": [],
      "whenToUse": "Ilovalarni xavfsiz tarqatishda.",
      "omissionRisk": "Obrazga to'g'ridan-to'g'ri ma'lumot yozib bo'lmaydi.",
      "syntaxExample": "Image: Read-only layered template"
    }
  },
  {
    "id": 77,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 3",
    "title": "Docker Container (Konteyner) Ta'rifi",
    "story": "Konteyner obrazdan yaratilgan tirik instansiya bo'lib, o'zining yoziladigan qatlamiga (writable layer) ega bo'ladi.",
    "task": "Konteynerning yuqori qatlami qanday bo'ladi: Read-only yoki Writable?",
    "canonical": "Writable",
    "accepted": [
      "writable",
      "yoziladigan",
      "write"
    ],
    "tags": [
      "#DOCKER",
      "#CONTAINER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Container har qanday o'zgarishlarni o'zining yupqa writable layerida saqlaydi.",
      "flags": [],
      "whenToUse": "Ilovani mustaqil muhitda ishga tushirishda.",
      "omissionRisk": "Konteyner o'chirilsa, writable layer dagi ma'lumotlar yo'qoladi.",
      "syntaxExample": "Container: Instance with writable layer"
    }
  },
  {
    "id": 78,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 3",
    "title": "Bitta Obrazdan Bir Nechta Konteyner Yaratish",
    "story": "Bitta tayyorlangan `sample-app:1.0` obrazidan turli portlarda ishlaydigan bir nechta alohida konteynerlar (app1, app2) yaratish mumkinmi?",
    "task": "Mumkinmi: Ha yoki Yo'q?",
    "canonical": "Ha",
    "accepted": [
      "ha",
      "yes",
      "mumkin"
    ],
    "tags": [
      "#DOCKER",
      "#INSTANCES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta obrazdan istalgancha mustaqil konteynerlar ko'tarish mumkin.",
      "flags": [],
      "whenToUse": "Mikroservislarni gorizontal masshtablashda.",
      "omissionRisk": "Har biriga yangi obraz qurish shart emas.",
      "syntaxExample": "One image can create many containers"
    }
  },
  {
    "id": 79,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 3",
    "title": "Konteynerni To'xtatish (Stop) va Obraz",
    "story": "Konteyner to'xtatilganda (docker stop app1), uning asosi bo'lgan Docker obrazi o'chib ketadimi?",
    "task": "Obraz o'chib ketadimi: Ha yoki Yo'q?",
    "canonical": "Yo'q",
    "accepted": [
      "yo'q",
      "no",
      "yoq",
      "o'chmaydi"
    ],
    "tags": [
      "#DOCKER",
      "#STOP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerni to'xtatish obrazga hech qanday ta'sir qilmaydi.",
      "flags": [],
      "whenToUse": "Konteynerlar hayotiy siklini boshqarishda.",
      "omissionRisk": "To'xtatilgan konteyner yana start qilinishi mumkin.",
      "syntaxExample": "Stopping a container does not remove its image"
    }
  },
  {
    "id": 80,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Docker Skriptini Yuklab Olish (curl)",
    "story": "Ubuntu tizimida rasmiy o'rnatish skriptini xavfsiz yuklab olish uchun qaysi buyruq beriladi?",
    "task": "curl orqali get-docker.sh ni yuklab olish buyrug'ini kiriting.",
    "canonical": "curl -fsSL https://get.docker.com -o get-docker.sh",
    "accepted": [
      "curl -fsSL https://get.docker.com -o get-docker.sh",
      "curl -fsSL https://get.docker.com -o get-docker.sh "
    ],
    "tags": [
      "#BASH",
      "#CURL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker o'rnatish skriptini rasmiy manbadan yuklab oladi.",
      "flags": [
        {
          "flag": "-fsSL",
          "name": "Fail Silent Show-Error Follow-Location",
          "purpose": "Xatolarni ko'rsatib xavfsiz yuklaydi.",
          "withoutRisk": "404 HTML xato sahifasi ham faylga yozilib qolishi mumkin."
        },
        {
          "flag": "-o",
          "name": "Output File",
          "purpose": "Chiqish fayli nomini belgilaydi.",
          "withoutRisk": "Matn to'g'ridan-to'g'ri terminalga oqib ketadi."
        }
      ],
      "whenToUse": "Laboratoriya muhitida Docker o'rnatishda.",
      "omissionRisk": "Skript to'liq yuklanmasa o'rnatib bo'lmaydi.",
      "syntaxExample": "curl -fsSL https://get.docker.com -o get-docker.sh"
    }
  },
  {
    "id": 81,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "O'rnatishni Sinovdan O'tkazish (--dry-run)",
    "story": "Skriptni haqiqiy o'rnatishdan oldin, u nimalar qilishini faqat oldindan ko'rish (preview) uchun qaysi bayroq bilan ishga tushiriladi?",
    "task": "Dry-run tekshiruvi buyrug'ini kiriting.",
    "canonical": "sudo sh ./get-docker.sh --dry-run",
    "accepted": [
      "sudo sh ./get-docker.sh --dry-run",
      "sh ./get-docker.sh --dry-run"
    ],
    "tags": [
      "#DOCKER",
      "#DRY_RUN"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'rnatish paketlarini o'rnatmasdan oldindan tahlil qiladi.",
      "flags": [
        {
          "flag": "--dry-run",
          "name": "Dry Run",
          "purpose": "Haqiqiy o'zgarish qilmasdan faqat amallarni chop etadi.",
          "withoutRisk": "To'g'ridan-to'g'ri o'rnatish boshlanib ketadi."
        }
      ],
      "whenToUse": "Tizim paketlariga ziyon yetkazmaslik uchun.",
      "omissionRisk": "Kutilmagan mos kelmasliklar oldindan aniqlanmaydi.",
      "syntaxExample": "sudo sh ./get-docker.sh --dry-run"
    }
  },
  {
    "id": 82,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Haqiqiy Docker O'rnatish Buyrug'i",
    "story": "Oldindan ko'rish muvaffaqiyatli o'tgach, Docker Engine ni haqiqiy o'rnatish qaysi buyruq orqali bajariladi?",
    "task": "Skriptni sudo bilan bajarish buyrug'ini kiriting.",
    "canonical": "sudo sh ./get-docker.sh",
    "accepted": [
      "sudo sh ./get-docker.sh",
      "sh ./get-docker.sh"
    ],
    "tags": [
      "#DOCKER",
      "#INSTALL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker komponentlarini tizimga o'rnatadi.",
      "flags": [],
      "whenToUse": "Laboratoriya mashinasida Docker kutubxonalarini to'liq sozlashda.",
      "omissionRisk": "Sudo siz berilsa ruxsat yetmaydi.",
      "syntaxExample": "sudo sh ./get-docker.sh"
    }
  },
  {
    "id": 83,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Docker Xizmatini Faollashtirish (systemctl)",
    "story": "O'rnatilgach, Docker xizmatini ham avtoyuklanishga qo'yish, ham aynan hozir yoqish buyrug'i qaysi?",
    "task": "Systemctl orqali docker ni yoqish buyrug'ini kiriting.",
    "canonical": "sudo systemctl enable --now docker",
    "accepted": [
      "sudo systemctl enable --now docker",
      "systemctl enable --now docker"
    ],
    "tags": [
      "#SYSTEMCTL",
      "#DOCKER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker deymonini yuklanishga qo'shadi va darhol ishga tushiradi.",
      "flags": [
        {
          "flag": "enable --now",
          "name": "Enable Now",
          "purpose": "Darhol ishga tushirish va avtostart.",
          "withoutRisk": "Tizim qayta yuklanguncha Docker ishlamay turadi."
        }
      ],
      "whenToUse": "Docker Engine o'rnatilgandan so'ng.",
      "omissionRisk": "Docker deymoni ishlamasa birorta buyruq qabul qilinmaydi.",
      "syntaxExample": "sudo systemctl enable --now docker"
    }
  },
  {
    "id": 84,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "O'rnatishni hello-world Bilan Tekshirish",
    "story": "Docker to'g'ri ishlayotganini tekshiruvchi birinchi sinov konteynerini ishga tushiring.",
    "task": "hello-world konteynerini sudo bilan ishga tushirish buyrug'i.",
    "canonical": "sudo docker run hello-world",
    "accepted": [
      "sudo docker run hello-world",
      "docker run hello-world"
    ],
    "tags": [
      "#DOCKER",
      "#RUN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kichik hello-world test konteynerini yuklab ishga tushiradi.",
      "flags": [],
      "whenToUse": "Docker o'rnatilishi muvaffaqiyatli yakunlanganini tasdiqlashda.",
      "omissionRisk": "Tizimda aloqa bor-yo'qligi tekshirilmay qoladi.",
      "syntaxExample": "sudo docker run hello-world"
    }
  },
  {
    "id": 85,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Foydalanuvchini Docker Guruhiga Qo'shish (usermod)",
    "story": "Har safar sudo yozmaslik uchun joriy foydalanuvchini 'docker' guruhiga xavfsiz qo'shing.",
    "task": "Foydalanuvchini docker guruhiga qo'shish buyrug'i.",
    "canonical": "sudo usermod -aG docker \"$USER\"",
    "accepted": [
      "sudo usermod -aG docker \"$USER\"",
      "sudo usermod -aG docker $USER",
      "usermod -aG docker \"$USER\""
    ],
    "tags": [
      "#USERMOD",
      "#DOCKER_GROUP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Foydalanuvchiga sudonisiz Docker buyruqlarini berish imkonini taqdim etadi.",
      "flags": [
        {
          "flag": "-aG docker",
          "name": "Append Group",
          "purpose": "Mavjud guruhlarni saqlab yangi guruhga qo'shadi.",
          "withoutRisk": "DIQQAT: Agar -a qo'yilmasa, foydalanuvchi barcha guruhlaridan (sudo dan ham) chiqarib yuboriladi!"
        }
      ],
      "whenToUse": "Oddiy foydalanuvchi nomidan Docker ishlatishda.",
      "omissionRisk": "Sudo parol so'rashda davom etadi.",
      "syntaxExample": "sudo usermod -aG docker \"$USER\""
    }
  },
  {
    "id": 86,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Guruh Qo'shilgach Qilinadigan Amal",
    "story": "Foydalanuvchi yangi guruhga qo'shilgandan so'ng, yangi huquqlar kuchga kirishi uchun nima qilish shart?",
    "task": "Tizimdan chiqib qayta kirish (Log out and log back in) kerakmi?",
    "canonical": "Log out and log back in",
    "accepted": [
      "log out and log back in",
      "logout and login",
      "logout",
      "re-login",
      "chiqib qayta kirish"
    ],
    "tags": [
      "#LINUX",
      "#SESSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Joriy shell sessiyasi guruh yangilanishini qayta yuklashi kerak.",
      "flags": [],
      "whenToUse": "Guruh o'zgarganda huquqlar ishlamasa.",
      "omissionRisk": "Hali ham permission denied xatosi chiqaveradi.",
      "syntaxExample": "Log out and log back in after group change"
    }
  },
  {
    "id": 87,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Docker Versiyasini Tekshirish",
    "story": "O'rnatilgan Docker mijozi va serveri versiyasini ko'rsatuvchi buyruqni kiriting.",
    "task": "Docker versiyasini ko'rish buyrug'i.",
    "canonical": "docker version",
    "accepted": [
      "docker version",
      "docker --version"
    ],
    "tags": [
      "#DOCKER",
      "#VERSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker Client va Server versiyalari haqida batafsil ma'lumot beradi.",
      "flags": [],
      "whenToUse": "Versiyalar mosligini tekshirishda.",
      "omissionRisk": "Eski versiyadagi cheklovlarni bilib bo'lmaydi.",
      "syntaxExample": "docker version"
    }
  },
  {
    "id": 88,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Docker Compose Versiyasini Tekshirish",
    "story": "O'rnatilgan Docker Compose plaginining versiyasini tekshiruvchi buyruqni kiriting.",
    "task": "Docker compose versiyasini tekshirish buyrug'i.",
    "canonical": "docker compose version",
    "accepted": [
      "docker compose version",
      "docker-compose version"
    ],
    "tags": [
      "#DOCKER_COMPOSE",
      "#VERSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker Compose plaginining o'rnatilganini tasdiqlaydi.",
      "flags": [],
      "whenToUse": "Ko'p konteynerli orkestratsiya oldidan.",
      "omissionRisk": "Compose bo'lmasa ko'p servisli tizim ko'tarilmaydi.",
      "syntaxExample": "docker compose version"
    }
  },
  {
    "id": 89,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 4",
    "title": "Sudonisiz hello-world Ishga Tushirish",
    "story": "Guruh o'zgargach, sudonisiz to'g'ridan-to'g'ri hello-world ni ishga tushirib ko'ring.",
    "task": "Sudonisiz hello-world buyrug'i.",
    "canonical": "docker run hello-world",
    "accepted": [
      "docker run hello-world"
    ],
    "tags": [
      "#DOCKER",
      "#RUN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Foydalanuvchi muvaffaqiyatli ruxsat olganini tasdiqlaydi.",
      "flags": [],
      "whenToUse": "Ruxsatlar tekshiruvida.",
      "omissionRisk": "Agar permission denied bersa, guruh kirmagan bo'ladi.",
      "syntaxExample": "docker run hello-world"
    }
  },
  {
    "id": 90,
    "sectorId": 6,
    "sectorTitle": "Docker Konsepsiyasi & O'rnatish Tekshiruvi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "Python Ilovasi Uchun Katalog Yaratish",
    "story": "Week 6 amaliyoti uchun `~/week6-docker/python-app` katalogini bitta buyruq bilan yarating va unga o'ting.",
    "task": "Katalog yaratish buyrug'i.",
    "canonical": "mkdir -p ~/week6-docker/python-app",
    "accepted": [
      "mkdir -p ~/week6-docker/python-app",
      "mkdir -p ~/week6-docker/python-app "
    ],
    "tags": [
      "#BASH",
      "#MKDIR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Loyiha papkalar ierarxiyasini yaratadi.",
      "flags": [
        {
          "flag": "-p",
          "name": "Parents",
          "purpose": "Mavjud bo'lmagan ota papkalarni avtomatik yaratadi.",
          "withoutRisk": "Agar oraliq papka bo'lmasa No such file xatosi beradi."
        }
      ],
      "whenToUse": "Yangi Dockerfile loyihasini boshlashda.",
      "omissionRisk": "Fayllar noto'g'ri katalogga tushib qoladi.",
      "syntaxExample": "mkdir -p ~/week6-docker/python-app"
    }
  },
  {
    "id": 91,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "FROM Direktivasining Vazifasi",
    "story": "Dockerfile dagi eng birinchi buyruq bo'lib, ilova uchun asosiy tayanch obrazni tanlaydi (masalan: `FROM python:3.12-slim`).",
    "task": "Ushbu kalit so'z qanday ataladi?",
    "canonical": "FROM",
    "accepted": [
      "from"
    ],
    "tags": [
      "#DOCKERFILE",
      "#FROM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Base image (birlamchi obraz)ni belgilaydi.",
      "flags": [],
      "whenToUse": "Har bir Dockerfile boshida majburiy.",
      "omissionRisk": "FROM bo'lmasa Dockerfile qurib bo'lmaydi.",
      "syntaxExample": "FROM python:3.12-slim"
    }
  },
  {
    "id": 92,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "WORKDIR Direktivasining Vazifasi",
    "story": "Konteyner ichidagi barcha keyingi buyruqlar va fayllar joylashadigan ishchi katalogni belgilaydi (masalan: `WORKDIR /app`).",
    "task": "Ushbu direktivaning nomini kiriting.",
    "canonical": "WORKDIR",
    "accepted": [
      "workdir"
    ],
    "tags": [
      "#DOCKERFILE",
      "#WORKDIR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteyner ichidagi ishchi papkani belgilaydi.",
      "flags": [],
      "whenToUse": "Fayllarni tartibli /app katalogida saqlashda.",
      "omissionRisk": "Fayllar ildiz (/) katalogiga to'kilib ketadi.",
      "syntaxExample": "WORKDIR /app"
    }
  },
  {
    "id": 93,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "COPY Direktivasining Vazifasi",
    "story": "Xost mashinadagi fayllarni (masalan, requirements.txt) konteyner ichiga nusxalovchi direktiva qaysi?",
    "task": "Nusxalash direktivasini kiriting (COPY).",
    "canonical": "COPY",
    "accepted": [
      "copy"
    ],
    "tags": [
      "#DOCKERFILE",
      "#COPY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xostdagi manba kodlarini obraz qatlamiga nusxalaydi.",
      "flags": [],
      "whenToUse": "Ilova kodlarini konteynerga kiritishda.",
      "omissionRisk": "Kod nusxalanmasa, konteyner ichida dastur bo'lmaydi.",
      "syntaxExample": "COPY requirements.txt ."
    }
  },
  {
    "id": 94,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "RUN Direktivasining Vazifasi",
    "story": "Obrazni qurish (build) jarayonida buyruqni bajarib, natijani yangi qatlamga yozuvchi direktiva qaysi (masalan: pip paket o'rnatish)?",
    "task": "Qurilish paytidagi buyruq direktivasini kiriting (RUN).",
    "canonical": "RUN",
    "accepted": [
      "run"
    ],
    "tags": [
      "#DOCKERFILE",
      "#RUN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Obraz qurish paytida paketlarni o'rnatadi.",
      "flags": [],
      "whenToUse": "Bog'liqliklar va kutubxonalarni o'rnatishda.",
      "omissionRisk": "Kutubxonalar o'rnatilmay qoladi.",
      "syntaxExample": "RUN pip install --no-cache-dir -r requirements.txt"
    }
  },
  {
    "id": 95,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 5",
    "title": "Nima Uchun --no-cache-dir Ishlatiladi?",
    "story": "Seminar savoli: Nima uchun `pip install` buyrug'iga `--no-cache-dir` bayrog'i qo'shiladi?",
    "task": "Obraz hajmini kichraytirish va keraksiz kesh fayllarini saqlamaslik uchunmi?",
    "canonical": "Reduces image size by not storing cache wheels",
    "accepted": [
      "reduces image size",
      "reduce image size",
      "kichraytirish",
      "kesh saqlamaslik",
      "save disk space"
    ],
    "tags": [
      "#DOCKERFILE",
      "#OPTIMIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Pip kesh g'ildiraklarini saqlamay, obraz hajmini o'nlab megabaytga qisqartiradi.",
      "flags": [],
      "whenToUse": "Ishlab chiqarish (production) obrazlarini optimallashtirishda.",
      "omissionRisk": "Obraz hajmi asossiz kattalashadi.",
      "syntaxExample": "pip install --no-cache-dir -r requirements.txt"
    }
  },
  {
    "id": 96,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "ENV Direktivasining Vazifasi",
    "story": "Konteyner ishga tushganda ilova uchun standart runtime muhit o'zgaruvchisini o'rnatuvchi direktiva (masalan: `ENV APP_ENV=training`).",
    "task": "Muhit o'zgaruvchisi direktivasini kiriting (ENV).",
    "canonical": "ENV",
    "accepted": [
      "env"
    ],
    "tags": [
      "#DOCKERFILE",
      "#ENV"
    ],
    "flagAnatomy": {
      "commandPurpose": "Standart operatsion muhit parametrlarini belgilaydi.",
      "flags": [],
      "whenToUse": "Portlar, rejimlar (dev/prod) va yo'llarni sozlashda.",
      "omissionRisk": "Dastur sozlamalari kod ichiga qotib qoladi.",
      "syntaxExample": "ENV APP_ENV=training"
    }
  },
  {
    "id": 97,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "EXPOSE Direktivasining Haqiqiy Ma'nosi",
    "story": "Seminar savoli: `EXPOSE 5000` direktivasi portni avtomatik ravishda tashqi internetga ochadimi yoki faqat hujjatlashtiradimi (document)?",
    "task": "Faqat hujjatlashtiradimi (Document only; publishing requires -p)?",
    "canonical": "Document only",
    "accepted": [
      "document only",
      "document",
      "hujjatlashtiradi",
      "faqat hujjat"
    ],
    "tags": [
      "#DOCKERFILE",
      "#EXPOSE"
    ],
    "flagAnatomy": {
      "commandPurpose": "EXPOSE faqat portni hujjatlashtiradi; haqiqiy ochish uchun `docker run -p` talab etiladi.",
      "flags": [],
      "whenToUse": "Boshqa dasturchilarga port haqida ma'lumot berishda.",
      "omissionRisk": "EXPOSE yozilgani bilan -p bo'lmasa tashqaridan ulanib bo'lmaydi.",
      "syntaxExample": "EXPOSE 5000"
    }
  },
  {
    "id": 98,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "ENTRYPOINT Direktivasining Vazifasi",
    "story": "Konteyner ishga tushishi bilan birinchi bo'lib bajarilishi lozim bo'lgan asosiy ijro faylini belgilaydi (masalan: `ENTRYPOINT [\"python\", \"app.py\"]`).",
    "task": "Ijrochi direktivani kiriting (ENTRYPOINT).",
    "canonical": "ENTRYPOINT",
    "accepted": [
      "entrypoint"
    ],
    "tags": [
      "#DOCKERFILE",
      "#ENTRYPOINT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerni mustaqil bajariluvchi ilova sifatida belgilaydi.",
      "flags": [],
      "whenToUse": "Konteyner doimo bitta dasturni yurgizishi kerak bo'lganda.",
      "omissionRisk": "Konteyner nima ish qilishini bilmay to'xtab qoladi.",
      "syntaxExample": "ENTRYPOINT [\"python\", \"app.py\"]"
    }
  },
  {
    "id": 99,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "CMD Direktivasining Vazifasi",
    "story": "ENTRYPOINT ga uzatiladigan standart argumentlarni yoki standart buyruqni beruvchi direktiva (masalan: `CMD [\"Guest\"]`).",
    "task": "Ushbu argument direktivasini kiriting (CMD).",
    "canonical": "CMD",
    "accepted": [
      "cmd"
    ],
    "tags": [
      "#DOCKERFILE",
      "#CMD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Standart argumentlarni beradi; `docker run` da argument berilsa o'zgaradi.",
      "flags": [],
      "whenToUse": "Foydalanuvchiga argumentni o'zgartirish erkinligini berishda.",
      "omissionRisk": "Argument berilmasa dastur ishga tushmay qolishi mumkin.",
      "syntaxExample": "CMD [\"Guest\"]"
    }
  },
  {
    "id": 100,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 5",
    "title": "ARG Direktivasining Farqi",
    "story": "`ARG` va `ENV` ikkalasi ham o'zgaruvchi. Ulardan qaysi biri faqat obrazni qurish (build-time) paytida mavjud bo'ladi va konteyner ichida qolmaydi?",
    "task": "Faqat build-time bo'lgan direktivani kiriting (ARG).",
    "canonical": "ARG",
    "accepted": [
      "arg"
    ],
    "tags": [
      "#DOCKERFILE",
      "#ARG"
    ],
    "flagAnatomy": {
      "commandPurpose": "ARG faqat `docker build` jarayonida ishlatiladi.",
      "flags": [],
      "whenToUse": "Kompilyatsiya versiyasi yoki vaqtinchalik kalitlarni uzatishda.",
      "omissionRisk": "Konteyner ishga tushganda ARG qiymati yo'qoladi.",
      "syntaxExample": "ARG VERSION=1.0"
    }
  }
];
});
