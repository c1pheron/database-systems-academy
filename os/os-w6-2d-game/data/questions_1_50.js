/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 QUESTION DOSSIERS (questions_1_50.js)
 * Verified Pedagogical Structure with 5-Point Command & Flag Anatomy.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W6_PART1 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 1,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 1",
    "title": "FCFS Rejalashtirish Turi va Asosiy G'oyasi",
    "story": "FCFS algoritmi kelish tartibida ishlaydi. Uzoq davom etuvchi jarayon birinchi kelsa, qisqa jarayonlar kutib qoladi (Convoy Effect).",
    "task": "FCFS algoritmining xususiyatini kiriting: Preemptive yoki Non-preemptive?",
    "canonical": "Non-preemptive",
    "accepted": [
      "non-preemptive",
      "nonpreemptive",
      "no-preemptive"
    ],
    "tags": [
      "#SCHEDULING",
      "#FCFS"
    ],
    "flagAnatomy": {
      "commandPurpose": "FCFS algoritmi jarayonlarni navbatga kelish tartibida bajaradi.",
      "flags": [],
      "whenToUse": "Oddiy batch tizimlarda.",
      "omissionRisk": "Convoy effect tufayli kutish vaqti yomonlashadi.",
      "syntaxExample": "FCFS: Non-preemptive"
    }
  },
  {
    "id": 2,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 1",
    "title": "SJF Algoritmining Asosiy Xavfi (Starvation)",
    "story": "SJF eng qisqa burst vaqtiga ega jarayonni tanlaydi. Agar tizimga uzluksiz qisqa jarayonlar kelaversa, uzoq jarayonlar CPU ololmaydi.",
    "task": "SJF algoritmidagi uzoq jarayonlarning cheksiz kutish hodisasini nomlang (Starvation).",
    "canonical": "Starvation",
    "accepted": [
      "starvation",
      "indefinite blocking",
      "ochlik"
    ],
    "tags": [
      "#SCHEDULING",
      "#SJF"
    ],
    "flagAnatomy": {
      "commandPurpose": "SJF qisqa jarayonlarga ustuvorlik beradi.",
      "flags": [],
      "whenToUse": "Kutish vaqtini minimallashtirishda.",
      "omissionRisk": "Ageing qo'llanilmasa, starvation yuzaga keladi.",
      "syntaxExample": "SJF: Risk of starvation"
    }
  },
  {
    "id": 3,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 1",
    "title": "SRT (Shortest Remaining Time) Preemption Xususiyati",
    "story": "SRT algoritmi yangi jarayon kelganda uning burst vaqtini joriy jarayonning qoldiq vaqti bilan taqqoslaydi.",
    "task": "SRT algoritmining turini kiriting: Preemptive yoki Non-preemptive?",
    "canonical": "Preemptive",
    "accepted": [
      "preemptive",
      "pre-emptive"
    ],
    "tags": [
      "#SCHEDULING",
      "#SRT"
    ],
    "flagAnatomy": {
      "commandPurpose": "SRT SJF ning preemptive ko'rinishidir.",
      "flags": [],
      "whenToUse": "Yangi kelgan tezkor vazifalarga zudlik bilan javob berishda.",
      "omissionRisk": "Burst vaqtlarini baholash va kontekst almashish qo'shimcha xarajat talab qiladi.",
      "syntaxExample": "SRT: Preemptive version of SJF"
    }
  },
  {
    "id": 4,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 1",
    "title": "Round Robin va Time Quantum Oqibati",
    "story": "Round Robin tizimida har bir jarayonga vaqt kvanti (q) beriladi. Agar kvant o'ta kichik bo'lsa (1 mikrosekund), nima ko'payadi?",
    "task": "Kichik kvant oqibatida ortadigan sarf-xarajatni kiriting (Context switch overhead).",
    "canonical": "Context switch overhead",
    "accepted": [
      "context switch",
      "context switching",
      "overhead",
      "kontekst almashish"
    ],
    "tags": [
      "#SCHEDULING",
      "#RR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Round Robin adolatli vaqt taqsimotini ta'minlaydi.",
      "flags": [],
      "whenToUse": "Time-sharing tizimlarda.",
      "omissionRisk": "Kvant juda kichik bo'lsa, CPU faqat kontekst almashish bilan band bo'ladi.",
      "syntaxExample": "RR: Small quantum -> High context switch overhead"
    }
  },
  {
    "id": 5,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 1",
    "title": "Priority Scheduling va Ageing Texnikasi",
    "story": "Ustuvorlikka asoslangan rejalashtirishda quyi ustuvorlikdagi jarayonlar starvation ga uchrashi mumkin.",
    "task": "Starvation ni oldini oluvchi ushbu texnikaning nomini kiriting (Ageing).",
    "canonical": "Ageing",
    "accepted": [
      "ageing",
      "aging"
    ],
    "tags": [
      "#SCHEDULING",
      "#PRIORITY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ageing kutayotgan jarayonlarning ustuvorligini asta-sekin oshirib boradi.",
      "flags": [],
      "whenToUse": "Priority tizimlarida adolatsizlikni bartaraf etishda.",
      "omissionRisk": "Ageing bo'lmasa, past darajali jarayonlar hech qachon bajarilmaydi.",
      "syntaxExample": "Ageing: Gradually increase priority"
    }
  },
  {
    "id": 6,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 1",
    "title": "MLFQ: Navbatlar Orasida Ko'chish",
    "story": "Oddiy Multilevel Queue da jarayon statik qoladi. Qaysi algoritmda jarayonlar CPU va I/O xatti-harakatiga qarab navbatlar orasida ko'chishi mumkin?",
    "task": "Jarayonlarning navbatlar orasida ko'chishiga ruxsat beruvchi algoritm nomini kiriting (MLFQ).",
    "canonical": "Multilevel Feedback Queue",
    "accepted": [
      "mlfq",
      "multilevel feedback queue",
      "multilevel feedback"
    ],
    "tags": [
      "#SCHEDULING",
      "#MLFQ"
    ],
    "flagAnatomy": {
      "commandPurpose": "MLFQ adaptiv ko'p darajali navbat hisoblanadi.",
      "flags": [],
      "whenToUse": "Interaktiv va CPU-intensiv jarayonlarni avtomatik ajratishda.",
      "omissionRisk": "Statik navbatda interaktivlik yo'qoladi.",
      "syntaxExample": "MLFQ: Processes move between queues"
    }
  },
  {
    "id": 7,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Ichki Fragmentatsiya (Internal Fragmentation)",
    "story": "Fiksirlangan blok (masalan, 4 KB) ajratilganda, jarayon faqat 3 KB ishlatadi. Qolgan 1 KB blok ichida foydalanilmaydi.",
    "task": "Ajratilgan fiksirlangan blok ichidagi foydalanilmagan bo'sh joy qanday ataladi?",
    "canonical": "Internal fragmentation",
    "accepted": [
      "internal fragmentation",
      "ichki fragmentatsiya",
      "internal"
    ],
    "tags": [
      "#MEMORY",
      "#INTERNAL_FRAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fiksirlangan bloklar ichidagi isrof xotira.",
      "flags": [],
      "whenToUse": "Paging va statik partitsiyalarni tahlil qilishda.",
      "omissionRisk": "Katta bloklarda xotira isrofi oshadi.",
      "syntaxExample": "Internal fragmentation: Unused space inside an allocated block"
    }
  },
  {
    "id": 8,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Ichki Fragmentatsiyani Kamaytirish",
    "story": "Seminar MCQ: Qaysi chora ichki fragmentatsiyani kamaytirishga bevosita yordam beradi?",
    "task": "Partitsiyalar hajmini kichikroq qilishmi yoki kattaroq qilishmi?",
    "canonical": "Smaller fixed partition sizes",
    "accepted": [
      "smaller fixed partition sizes",
      "smaller partition sizes",
      "smaller",
      "kichikroq"
    ],
    "tags": [
      "#MEMORY",
      "#PARTITIONS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kichikroq bloklar oxirgi bo'lakdagi xotira isrofini kamaytiradi.",
      "flags": [],
      "whenToUse": "Sahifa hajmini (page size) loyihalashda.",
      "omissionRisk": "Sahifalar o'ta kichik bo'lsa, page table hajmi haddan tashqari kattalashadi.",
      "syntaxExample": "Reduce internal frag: Smaller fixed partition sizes"
    }
  },
  {
    "id": 9,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Tashqi Fragmentatsiya (External Fragmentation)",
    "story": "Xotirada jami erkin joy yetarli, biroq u tarqoq mayda teshiklarga (holes) bo'linganligi sababli yangi jarayon sig'maydi.",
    "task": "Tarqoq teshiklar tufayli yuzaga keladigan fragmentatsiya turini kiriting.",
    "canonical": "External fragmentation",
    "accepted": [
      "external fragmentation",
      "tashqi fragmentatsiya",
      "external"
    ],
    "tags": [
      "#MEMORY",
      "#EXTERNAL_FRAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Uzluksiz bo'lmagan erkin xotira bo'shliqlari.",
      "flags": [],
      "whenToUse": "Contiguous xotira taqsimotini baholashda.",
      "omissionRisk": "50% ga yaqin xotira mayda teshiklar holida yaroqsiz bo'lib qoladi.",
      "syntaxExample": "External fragmentation: Scattered free holes"
    }
  },
  {
    "id": 10,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Contiguous Allocation va Tashqi Fragmentatsiya",
    "story": "Contiguous Memory Allocation har bir jarayonga bitta yaxlit uzluksiz xotira sohasi ajratadi.",
    "task": "Uzluksiz joylashtirish asosan qaysi fragmentatsiyadan aziyat chekadi?",
    "canonical": "External fragmentation",
    "accepted": [
      "external fragmentation",
      "tashqi fragmentatsiya"
    ],
    "tags": [
      "#MEMORY",
      "#CONTIGUOUS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Contiguous allocation tashqi fragmentatsiyaga eng moyil.",
      "flags": [],
      "whenToUse": "Paging ga o'tish zaruratini isbotlashda.",
      "omissionRisk": "Dinamik jarayonlarda bo'shliqlar ko'payadi.",
      "syntaxExample": "Contiguous Allocation suffers from External Fragmentation"
    }
  },
  {
    "id": 11,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "First-Fit Strategiyasining Xususiyati",
    "story": "First-Fit bo'sh teshiklar ro'yxatini boshidan ko'rib chiqadi va jarayon sig'adigan eng birinchi teshikni oladi.",
    "task": "First-Fit qaysi teshikni tanlaydi: First adequate hole yoki Smallest adequate hole?",
    "canonical": "First adequate hole",
    "accepted": [
      "first adequate hole",
      "first",
      "birinchi yetarli"
    ],
    "tags": [
      "#MEMORY",
      "#FIRST_FIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "First-Fit eng tezkor teshik qidirish usulidir.",
      "flags": [],
      "whenToUse": "Qidirish vaqti cheklangan tizimlarda.",
      "omissionRisk": "Xotira boshida mayda teshiklar to'planib qolishi mumkin.",
      "syntaxExample": "First-Fit: Allocates first hole that is big enough"
    }
  },
  {
    "id": 12,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Best-Fit Strategiyasi va Qoldiq Teshik",
    "story": "Best-Fit butun xotirani skanerlab, jarayon sig'adigan eng kichik yetarli teshikni (smallest adequate hole) topadi.",
    "task": "Best-Fit ajratgandan so'ng qoladigan teshik qanday bo'ladi: Katta yoki eng mayda?",
    "canonical": "Smallest leftover hole",
    "accepted": [
      "smallest leftover hole",
      "mayda",
      "juda kichik",
      "smallest"
    ],
    "tags": [
      "#MEMORY",
      "#BEST_FIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Best-Fit minimal ortiqcha xotira sarflaydi.",
      "flags": [],
      "whenToUse": "Katta teshiklarni kelajak uchun saqlashda.",
      "omissionRisk": "Ortda foydalanib bo'lmaydigan o'ta mayda teshikchalar qoldiradi.",
      "syntaxExample": "Best-Fit: Allocates smallest adequate hole"
    }
  },
  {
    "id": 13,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Worst-Fit Strategiyasining Maqsadi",
    "story": "Worst-Fit doimo mavjud eng katta teshikni (largest hole) tanlaydi, toki qolgan qoldiq teshik yetarlicha katta bo'lsin.",
    "task": "Worst-Fit qaysi teshikni ajratadi: Largest hole yoki Smallest hole?",
    "canonical": "Largest hole",
    "accepted": [
      "largest hole",
      "largest",
      "eng katta"
    ],
    "tags": [
      "#MEMORY",
      "#WORST_FIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Worst-Fit eng katta teshikni bo'ladi.",
      "flags": [],
      "whenToUse": "Katta qoldiq qoldirish nazariyasida.",
      "omissionRisk": "Katta bo'shliqlarni tez yeb bitiradi.",
      "syntaxExample": "Worst-Fit: Allocates largest hole"
    }
  },
  {
    "id": 14,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Compaction (Siqish / Birlashtirish) Texnikasi",
    "story": "Tashqi fragmentatsiyani yo'qotish uchun xotiradagi barcha faol jarayonlarni bir tomonga siljitib, teshiklarni birlashtiriladi.",
    "task": "Tashqi fragmentatsiyani yo'qotuvchi ushbu jarayonni nomlang (Compaction).",
    "canonical": "Compaction",
    "accepted": [
      "compaction",
      "siqish"
    ],
    "tags": [
      "#MEMORY",
      "#COMPACTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Compaction tarqoq bo'sh joylarni bitta yirik blokka birlashtiradi.",
      "flags": [],
      "whenToUse": "Faqat dinamik qayta joylash (dynamic relocation) mavjud tizimlarda.",
      "omissionRisk": "Jarayonlarni ko'chirish protsessorga katta yuklama beradi.",
      "syntaxExample": "Compaction: Move processes to merge holes"
    }
  },
  {
    "id": 15,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling & Fragmentatsiya Reviziyasi",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Swapping (Almashtirish) Vazifasi",
    "story": "Agar jarayonlar talabi fizik RAM dan oshsa, OS ularni vaqtincha diskka chiqarib turadi va keyin qaytaradi.",
    "task": "Jarayonlarni asosiy xotira (RAM) va ikkilamchi xotira (disk) o'rtasida ko'chirish mexanizmi nima?",
    "canonical": "Swapping",
    "accepted": [
      "swapping",
      "swap"
    ],
    "tags": [
      "#MEMORY",
      "#SWAPPING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Swapping xotira yetishmovchiligida RAM ni bo'shatadi.",
      "flags": [],
      "whenToUse": "Ko'p dasturlilik darajasini saqlashda.",
      "omissionRisk": "Diskka to'liq jarayonni yozish sekin I/O ga ega.",
      "syntaxExample": "Swapping: Moving processes between main and secondary memory"
    }
  },
  {
    "id": 16,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 2",
    "title": "Nima Uchun Sahifa Hajmi 2 ning Darajasi Bo'ladi?",
    "story": "Seminar savoli: Nima uchun operatsion tizimlarda sahifa hajmi (page size) doimo 2 ning darajasi bo'ladi?",
    "task": "Manzil bitlarini sahifa raqami va ofsetga ajratishni qulay qilish uchunmi?",
    "canonical": "Powers of 2 allow address bits to split directly into page number and offset",
    "accepted": [
      "split directly into page number and offset",
      "powers of 2",
      "split into page and offset",
      "split directly",
      "2 ning darajasi"
    ],
    "tags": [
      "#PAGING",
      "#MATH"
    ],
    "flagAnatomy": {
      "commandPurpose": "2 ning darajasi manzilni apparat darajasida oson bo'lishga imkon beradi.",
      "flags": [],
      "whenToUse": "MMU apparat arxitekturasini loyihalashda.",
      "omissionRisk": "Aks holda manzilni ajratish uchun murakkab arifmetik bo'lish talab etilardi.",
      "syntaxExample": "Power-of-two page sizes: Direct bit splitting"
    }
  },
  {
    "id": 17,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q1",
    "title": "Mantiqiy Manzil Bitlari (64 sahifa, 1024 so'z)",
    "story": "Mantiqiy xotira fazosi: 64 ta sahifa, har birida 1,024 so'z. Fizik xotira: 32 ta freym.",
    "task": "Mantiqiy manzilda jami nechta bit bor? (6 page bits + 10 offset bits = 16).",
    "canonical": "16",
    "accepted": [
      "16 bits",
      "16",
      "16 bit"
    ],
    "tags": [
      "#PAGING",
      "#BITS"
    ],
    "flagAnatomy": {
      "commandPurpose": "2^6 = 64 sahifa (6 bit), 2^10 = 1024 so'z (10 bit). Jami: 6 + 10 = 16 bit.",
      "flags": [],
      "whenToUse": "Mantiqiy manzil bitlarini hisoblashda.",
      "omissionRisk": "Bitlar xato hisoblansa, xotira manzil diapazoni noto'g'ri bo'ladi.",
      "syntaxExample": "Logical: 6 page bits + 10 offset bits = 16 bits"
    }
  },
  {
    "id": 18,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q1",
    "title": "Fizik Manzil Bitlari (32 freym, 1024 so'z)",
    "story": "O'sha tizim: 32 ta freym, sahifa/freym hajmi 1,024 so'z.",
    "task": "Fizik manzilda jami nechta bit talab qilinadi? (5 frame bits + 10 offset bits = 15).",
    "canonical": "15",
    "accepted": [
      "15 bits",
      "15",
      "15 bit"
    ],
    "tags": [
      "#PAGING",
      "#PHYSICAL_BITS"
    ],
    "flagAnatomy": {
      "commandPurpose": "2^5 = 32 freym (5 bit), ofset o'zgarmaydi (10 bit). Jami: 5 + 10 = 15 bit.",
      "flags": [],
      "whenToUse": "Fizik RAM manzilini aniqlashda.",
      "omissionRisk": "Fizik freymlar yetishmasa, xotira to'liq manzillanmaydi.",
      "syntaxExample": "Physical: 5 frame bits + 10 offset bits = 15 bits"
    }
  },
  {
    "id": 19,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q2",
    "title": "Mantiqiy Manzil Bitlari (256 sahifa, 4 KB)",
    "story": "Mantiqiy fazo: 256 ta sahifa, 4-KB sahifa hajmi. Fizik xotira: 64 ta freym.",
    "task": "Mantiqiy manzilda jami nechta bit bor? (8 page bits + 12 offset bits = 20).",
    "canonical": "20",
    "accepted": [
      "20 bits",
      "20",
      "20 bit"
    ],
    "tags": [
      "#PAGING",
      "#LOGICAL_BITS"
    ],
    "flagAnatomy": {
      "commandPurpose": "2^8 = 256 sahifa (8 bit), 4 KB = 2^12 bayt (12 bit ofset). Jami: 8 + 12 = 20 bit.",
      "flags": [],
      "whenToUse": "Mantiqiy manzillashni hisoblashda.",
      "omissionRisk": "Ofset hisobida 4KB ni 12 bit deb olmaslik xatoga olib keladi.",
      "syntaxExample": "Logical: 8 + 12 = 20 bits"
    }
  },
  {
    "id": 20,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q2",
    "title": "Fizik Manzil Bitlari (64 freym, 4 KB)",
    "story": "O'sha tizim: 64 ta freym, 4-KB freym hajmi.",
    "task": "Fizik manzilda jami nechta bit talab etiladi? (6 frame bits + 12 offset bits = 18).",
    "canonical": "18",
    "accepted": [
      "18 bits",
      "18",
      "18 bit"
    ],
    "tags": [
      "#PAGING",
      "#PHYSICAL_BITS"
    ],
    "flagAnatomy": {
      "commandPurpose": "2^6 = 64 freym (6 bit), ofset 12 bit. Jami: 6 + 12 = 18 bit.",
      "flags": [],
      "whenToUse": "Fizik manzil shinasi o'lchamini bilishda.",
      "omissionRisk": "Freymlar soni noto'g'ri darajalansa manzil xato bo'ladi.",
      "syntaxExample": "Physical: 6 + 12 = 18 bits"
    }
  },
  {
    "id": 21,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "Murakkab",
    "source": "Seminar 06 Math Q3",
    "title": "Conventional Page Table Yozuvlari Soni",
    "story": "Tizim: 32-bit mantiqiy manzil, 4-KB sahifa hajmi. Bir bosqichli (single-level) sahifalar jadvalida nechta yozuv (entry) bo'ladi?",
    "task": "Bir bosqichli jadval yozuvlari sonini kiriting (2^20 = 1048576).",
    "canonical": "1048576",
    "accepted": [
      "1,048,576",
      "1048576",
      "2^20",
      "1M"
    ],
    "tags": [
      "#PAGING",
      "#PAGE_TABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "2^32 / 2^12 = 2^20 = 1,048,576 ta sahifa yozuvi.",
      "flags": [],
      "whenToUse": "Klassik sahifalar jadvali xotira sarfini hisoblashda.",
      "omissionRisk": "Har bir jarayon uchun 4 MB dan xotira ketishini e'tibordan chetda qoldirish.",
      "syntaxExample": "Entries = 2^32 / 2^12 = 2^20 = 1,048,576"
    }
  },
  {
    "id": 22,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "Murakkab",
    "source": "Seminar 06 Math Q3",
    "title": "Inverted Page Table Yozuvlari Soni",
    "story": "O'sha tizim: 512 MB fizik xotira (RAM) va 4-KB sahifa hajmi mavjud. Inverted page table da nechta yozuv bo'ladi?",
    "task": "Inverted page table yozuvlari sonini kiriting (2^29 / 2^12 = 2^17 = 131072).",
    "canonical": "131072",
    "accepted": [
      "131,072",
      "131072",
      "2^17"
    ],
    "tags": [
      "#PAGING",
      "#INVERTED_TABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Inverted table faqat fizik freymlar soniga teng: 512MB / 4KB = 131,072.",
      "flags": [],
      "whenToUse": "RAM sarfini keskin qisqartirishda.",
      "omissionRisk": "Oddiy jadval bilan adashtirib mantiqiy xotiraga bo'lib yuborish.",
      "syntaxExample": "Inverted Entries = 2^29 / 2^12 = 2^17 = 131,072"
    }
  },
  {
    "id": 23,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q4",
    "title": "Manzil 3,085 ning Sahifa Raqami (1-KB Pages)",
    "story": "Sahifa hajmi 1 KB (1,024 bayt). Berilgan o'nlik manzil: 3,085.",
    "task": "Ushbu manzilning sahifa raqamini (page number) toping (3085 / 1024 = 3).",
    "canonical": "3",
    "accepted": [
      "page 3",
      "3"
    ],
    "tags": [
      "#PAGING",
      "#ADDRESS_CALC"
    ],
    "flagAnatomy": {
      "commandPurpose": "3085 = 3 * 1024 + 13. Sahifa raqami p = 3.",
      "flags": [],
      "whenToUse": "MMU manzillarni ajratganda.",
      "omissionRisk": "Bo'linmaning butun qismi o'rniga qoldiqni olish.",
      "syntaxExample": "Page Number p = floor(3085 / 1024) = 3"
    }
  },
  {
    "id": 24,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q4",
    "title": "Manzil 3,085 ning Ofseti (1-KB Pages)",
    "story": "Sahifa hajmi 1 KB (1,024 bayt). Berilgan o'nlik manzil: 3,085.",
    "task": "Ushbu manzilning ofsetini (offset d) toping (3085 % 1024 = 13).",
    "canonical": "13",
    "accepted": [
      "offset 13",
      "13"
    ],
    "tags": [
      "#PAGING",
      "#OFFSET_CALC"
    ],
    "flagAnatomy": {
      "commandPurpose": "3085 = 3 * 1024 + 13. Ofset d = 13.",
      "flags": [],
      "whenToUse": "Freym ichidagi aniq baytni o'qishda.",
      "omissionRisk": "Ofset sahifa chegarasidan chiqib ketmasligi kerak.",
      "syntaxExample": "Offset d = 3085 % 1024 = 13"
    }
  },
  {
    "id": 25,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q4",
    "title": "Manzil 42,095 ning Sahifa Raqami (1-KB Pages)",
    "story": "Sahifa hajmi 1 KB (1,024 bayt). Berilgan o'nlik manzil: 42,095.",
    "task": "Ushbu manzilning sahifa raqamini toping (42095 / 1024 = 41).",
    "canonical": "41",
    "accepted": [
      "page 41",
      "41"
    ],
    "tags": [
      "#PAGING",
      "#ADDRESS_CALC"
    ],
    "flagAnatomy": {
      "commandPurpose": "42095 = 41 * 1024 + 111. Sahifa raqami p = 41.",
      "flags": [],
      "whenToUse": "Sahifa jadvaliga murojaat qilishda.",
      "omissionRisk": "Qoldiqni butun son bo'lish bilan adashtirish.",
      "syntaxExample": "Page Number p = floor(42095 / 1024) = 41"
    }
  },
  {
    "id": 26,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Seminar 06 Math Q4",
    "title": "Manzil 42,095 ning Ofseti (1-KB Pages)",
    "story": "Sahifa hajmi 1 KB (1,024 bayt). Berilgan o'nlik manzil: 42,095.",
    "task": "Ushbu manzilning ofsetini toping (42095 % 1024 = 111).",
    "canonical": "111",
    "accepted": [
      "offset 111",
      "111"
    ],
    "tags": [
      "#PAGING",
      "#OFFSET_CALC"
    ],
    "flagAnatomy": {
      "commandPurpose": "42095 = 41 * 1024 + 111. Ofset d = 111.",
      "flags": [],
      "whenToUse": "Fizik freymga ofsetni qo'shib xotiradan ma'lumot olishda.",
      "omissionRisk": "1024 ga qoldiqli bo'lishda hisoblash xatosi.",
      "syntaxExample": "Offset d = 42095 % 1024 = 111"
    }
  },
  {
    "id": 27,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 3",
    "title": "Inverted Page Table Asosiy Afzalligi",
    "story": "Oddiy jadval har bir mantiqiy sahifa uchun alohida yozuv saqlaydi. Inverted jadval esa faqat fizik freymlar soniga bog'liq.",
    "task": "Inverted Page Table ning asosiy yutug'i nima: RAM xotirasini tejashmi yoki qidirish tezligimi?",
    "canonical": "Saves physical memory",
    "accepted": [
      "saves physical memory",
      "saves memory",
      "xotira tejash",
      "kam xotira",
      "memory savings"
    ],
    "tags": [
      "#PAGING",
      "#INVERTED_TABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Inverted jadval faqat fizik freymlar soniga proporsional bo'ladi.",
      "flags": [],
      "whenToUse": "64-bit ulkan mantiqiy manzil fazosiga ega tizimlarda.",
      "omissionRisk": "Qidirish xesh-jadval orqali amalga oshishi tufayli qidiruv vaqti ortadi.",
      "syntaxExample": "Inverted Table: 1 entry per physical frame"
    }
  },
  {
    "id": 28,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 4",
    "title": "Mantiqiy Manzil Fazosining Bo'sh Qismlari",
    "story": "Jarayon manzil fazosida stack pastga, heap tepaga qarab o'sadi. O'rtadagi katta foydalanilmagan virtual hudud jismoniy RAM ni egallaydimi?",
    "task": "Foydalanilmagan virtual oraliqlar fizik RAM ni egallaydimi: Ha yoki Yo'q?",
    "canonical": "Yo'q",
    "accepted": [
      "yo'q",
      "no",
      "yoq",
      "egallamaydi"
    ],
    "tags": [
      "#VIRTUAL_MEMORY",
      "#HOLES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Virtual xotirada faqat faol sahifalar freymlarga bog'lanadi.",
      "flags": [],
      "whenToUse": "Katta sparse (siyrak) xotira fazosini yaratishda.",
      "omissionRisk": "Agar butun fazo RAM ga yuklansa, xotira darhol tugaydi.",
      "syntaxExample": "Unused virtual ranges need not occupy physical RAM"
    }
  },
  {
    "id": 29,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 5",
    "title": "Shared Libraries (Umumiy Kutubxonalar) va Paging",
    "story": "Bir nechta jarayonlar `libc.so` kabi umumiy kutubxonani o'qiyotganda, paging apparati ularni bitta jismoniy freymga bog'lay oladimi?",
    "task": "Bitta jismoniy freym bir nechta jarayonlar tomonidan bo'lishilishi mumkinmi: Ha yoki Yo'q?",
    "canonical": "Ha",
    "accepted": [
      "ha",
      "yes",
      "mumkin"
    ],
    "tags": [
      "#SHARED_PAGES",
      "#LIBRARIES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Read-only kod sahifalari bir nechta jarayonlar orasida bo'lishiladi.",
      "flags": [],
      "whenToUse": "Tizim umumiy RAM sarfini kamaytirishda.",
      "omissionRisk": "Har bir jarayonga nusxa berilsa RAM tez to'ladi.",
      "syntaxExample": "Shared pages: Multiple virtual pages map to 1 frame"
    }
  },
  {
    "id": 30,
    "sectorId": 2,
    "sectorTitle": "Paging Adreslar Matematikasi & Inverted Tables",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 6",
    "title": "Demand Paging ning Asosiy Tamoyili",
    "story": "Demand Paging jarayon yuklanganda uning barcha sahifalarini emas, balki faqat kerak bo'lgandagina (on demand) yuklaydi.",
    "task": "Ushbu tamoyil qanday ataladi: Pure Paging yoki Demand Paging?",
    "canonical": "Demand Paging",
    "accepted": [
      "demand paging",
      "demand-paging"
    ],
    "tags": [
      "#DEMAND_PAGING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifa faqat kerak bo'lgandagina xotiraga chaqiriladi.",
      "flags": [],
      "whenToUse": "Tezkor yuklanish va minimal I/O sarflashda.",
      "omissionRisk": "Dastlabki sahifalar murojaatida page fault lar yuzaga keladi.",
      "syntaxExample": "Demand Paging: Bring page into memory only when needed"
    }
  },
  {
    "id": 31,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 7",
    "title": "Valid-Invalid Bit Vazifasi",
    "story": "Sahifalar jadvalida har bir yozuv yonida valid (v) yoki invalid (i) biti bo'ladi.",
    "task": "Agar sahifa fizik RAM da bo'lmasa, bit qanday belgilanadi: Valid yoki Invalid?",
    "canonical": "Invalid",
    "accepted": [
      "invalid",
      "i",
      "not resident"
    ],
    "tags": [
      "#PAGE_TABLE",
      "#VALID_BIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Invalid bit sahifa xotirada yo'qligini yoki manzil noqonuniyligini bildiradi.",
      "flags": [],
      "whenToUse": "MMU apparati orqali Page Fault chaqirishda.",
      "omissionRisk": "Tekshirilmasa, mavjud bo'lmagan xotira o'qilib xatolik yuz beradi.",
      "syntaxExample": "Bit 'i': Page is not currently resident in memory"
    }
  },
  {
    "id": 32,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 8",
    "title": "Page Fault Tuzog'i (Trap) Ketma-ketligi",
    "story": "Protsessor 'invalid' belgisi qo'yilgan manzilga murojaat qilganda, apparat OS yadrosiga qanday signal uzatadi?",
    "task": "Ushbu apparat tuzog'ining (trap) nomini kiriting (Page Fault).",
    "canonical": "Page fault",
    "accepted": [
      "page fault",
      "page-fault",
      "page fault trap"
    ],
    "tags": [
      "#PAGE_FAULT",
      "#TRAP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Page fault sahifani diskdan xotiraga yuklash jarayonini boshlaydi.",
      "flags": [],
      "whenToUse": "Demand paging mexanizmida sahifa xotirada yo'q bo'lganda.",
      "omissionRisk": "Tuzoq ushlanmasa, jarayon segmentatsiya xatosi bilan qulaydi.",
      "syntaxExample": "Page fault trap generated by MMU"
    }
  },
  {
    "id": 33,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 9",
    "title": "Pure Demand Paging Boshlanishi",
    "story": "Pure Demand Paging tizimida dastur ishga tushganda uning nechta sahifasi oldindan RAM ga yuklangan bo'ladi?",
    "task": "Dastlabki resident sahifalar sonini kiriting (0 ta).",
    "canonical": "0",
    "accepted": [
      "0",
      "zero",
      "nol",
      "none"
    ],
    "tags": [
      "#DEMAND_PAGING",
      "#PURE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Pure demand paging bitta ham sahifasiz boshlanadi va har bir buyruqda fault beradi.",
      "flags": [],
      "whenToUse": "Minimal boshlang'ich kechikish talab qilinganda.",
      "omissionRisk": "Dastlabki soniyalarda juda ko'p page fault lar bo'ladi.",
      "syntaxExample": "Pure demand paging: Starts with 0 pages in memory"
    }
  },
  {
    "id": 34,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 10",
    "title": "Zero-Fill-On-Demand Xavfsizligi",
    "story": "Yangi ajratilgan anonim xotira sahifalari (heap/stack) xotiraga berilishidan oldin nima bilan to'ldiriladi?",
    "task": "Ushbu tozalash qiymatini kiriting (Zero / Nol).",
    "canonical": "Zero",
    "accepted": [
      "zero",
      "0",
      "zeros",
      "nol"
    ],
    "tags": [
      "#SECURITY",
      "#ZERO_FILL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xotirani nollar bilan to'ldirish oldingi jarayon maxfiy ma'lumotlarini oshkor qilmaslik uchundir.",
      "flags": [],
      "whenToUse": "Xavfsizlik va axborot himoyasi talab qilinganda.",
      "omissionRisk": "Tozalanmasa, boshqa foydalanuvchi parollari va tokenlari o'qilishi mumkin.",
      "syntaxExample": "Zero-fill-on-demand prevents data leakage"
    }
  },
  {
    "id": 35,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 11",
    "title": "Page Fault Xizmat Vaqti (Fault Service Time)",
    "story": "Oddiy xotiraga kirish 200 nanosekund. Page fault sodir bo'lganda diskdan o'qish xizmat vaqti taxminan qancha bo'ladi?",
    "task": "Leksiyadagi namunaviy vaqtni kiriting (8 ms).",
    "canonical": "8 ms",
    "accepted": [
      "8 ms",
      "8ms",
      "8000000 ns",
      "8000000"
    ],
    "tags": [
      "#EAT",
      "#METRICS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Diskka murojaat xotiraga nisbatan 40,000 barobarga sekinroqdir.",
      "flags": [],
      "whenToUse": "Samarali kirish vaqtini hisoblashda.",
      "omissionRisk": "Disk kechikishi hisobga olinmasa, unumdorlik bashorati xato bo'ladi.",
      "syntaxExample": "Fault service time = 8 ms = 8,000,000 ns"
    }
  },
  {
    "id": 36,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 11",
    "title": "EAT Formulasi (Effective Access Time)",
    "story": "Sahifa xatoligi ehtimolligi p bo'lganda: EAT = (1 - p)*ma + p*fault_time.",
    "task": "Agar p = 0.001 (0.1%), ma = 200 ns va fault_time = 8,000,000 ns bo'lsa, EAT taxminan necha mikrosekund (μs) bo'ladi?",
    "canonical": "8.2 μs",
    "accepted": [
      "8.2 us",
      "8.2 μs",
      "8.2",
      "8200 ns",
      "8200"
    ],
    "tags": [
      "#EAT",
      "#FORMULA"
    ],
    "flagAnatomy": {
      "commandPurpose": "EAT = 0.999 * 200 + 0.001 * 8,000,000 = 199.8 + 8000 = 8,199.8 ns ≈ 8.2 μs.",
      "flags": [],
      "whenToUse": "Demand paging unumdorlik yo'qotishini baholashda.",
      "omissionRisk": "Mikrosekund va nanosekund birliklarini chalkashtirish.",
      "syntaxExample": "EAT ≈ 8,200 ns = 8.2 μs at p = 0.001"
    }
  },
  {
    "id": 37,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 11",
    "title": "EAT ning Sekinlashuv Karraligi (Slowdown)",
    "story": "Oddiy murojaat 200 ns, 0.1% fault da esa EAT 8,200 ns bo'ldi. Tizim qariyb necha barobarga sekinlashdi?",
    "task": "Sekinlashuv karraligini kiriting (8200 / 200 = 41 barobar).",
    "canonical": "41",
    "accepted": [
      "41 times",
      "41 barobar",
      "41"
    ],
    "tags": [
      "#EAT",
      "#SLOWDOWN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Atigi bitta promille fault tizimni 41 barobarga sekinlashtiradi.",
      "flags": [],
      "whenToUse": "Nima uchun page fault ni kamaytirish hayotiy muhimligini ko'rsatishda.",
      "omissionRisk": "Kichik ehtimollik ta'sirini yetarlicha baholamaslik.",
      "syntaxExample": "Slowdown = 8,200 / 200 ≈ 41 times"
    }
  },
  {
    "id": 38,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Murakkab",
    "source": "Lecture 06 Slide 11",
    "title": "10% dan Kam Pasayish Uchun Cheklovchi Ehtimollik",
    "story": "Agar tizimning sekinlashuvi 10% dan oshmasligi talab qilinsa, sahifa xatosi ehtimolligi p qanday bo'lishi kerak?",
    "task": "Ruxsat etilgan maksimal p qiymatini kiriting (2.5 x 10^-6).",
    "canonical": "2.5 x 10^-6",
    "accepted": [
      "2.5 x 10^-6",
      "2.5e-6",
      "0.0000025",
      "2.5 * 10^-6"
    ],
    "tags": [
      "#EAT",
      "#PROBABILITY"
    ],
    "flagAnatomy": {
      "commandPurpose": "20 ns qo'shimcha vaqt uchun: p * 8,000,000 < 20 => p < 2.5 * 10^-6.",
      "flags": [],
      "whenToUse": "Sanoat serverlarida SLA talablarini belgilashda.",
      "omissionRisk": "Har 400,000 murojaatdan faqat 1 tasida fault bo'lishi mumkin.",
      "syntaxExample": "p < 2.5 x 10^-6 for < 10% slowdown"
    }
  },
  {
    "id": 39,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 12",
    "title": "Clean vs Dirty Sahifalar",
    "story": "O'zgartirilmagan (clean) sahifa xotiradan chiqarilganda diskka qayta yozilishi shartmi?",
    "task": "Clean sahifani diskka yozish shartmi: Ha yoki Yo'q?",
    "canonical": "Yo'q",
    "accepted": [
      "yo'q",
      "no",
      "yoq",
      "shart emas"
    ],
    "tags": [
      "#DIRTY_BIT",
      "#OPTIMIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Clean sahifa diskdagi asl nusxasi bilan bir xil bo'lgani uchun to'g'ridan-to'g'ri tashlab yuboriladi.",
      "flags": [],
      "whenToUse": "Page replacement paytida I/O yuklamasini kamaytirishda.",
      "omissionRisk": "Clean sahifani ham yozish ortiqcha disk I/O sarflaydi.",
      "syntaxExample": "Clean pages discarded without writeback"
    }
  },
  {
    "id": 40,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 12",
    "title": "Dirty Bit (Modify Bit) Rolli",
    "story": "Sahifaga ma'lumot yozilganda apparat darajasida qaysi bit 1 ga o'rnatiladi?",
    "task": "O'zgartirishni bildiruvchi bit nomini kiriting (Dirty bit / Modify bit).",
    "canonical": "Dirty bit",
    "accepted": [
      "dirty bit",
      "modify bit",
      "dirty",
      "modify"
    ],
    "tags": [
      "#DIRTY_BIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dirty bit sahifa diskdagi nusxadan farq qilishini bildiradi.",
      "flags": [],
      "whenToUse": "Victim (qurbon) freymni diskka yozish kerakligini aniqlashda.",
      "omissionRisk": "Dirty bit bo'lmasa, har bir sahifani majburiy yozishga to'g'ri kelardi.",
      "syntaxExample": "Dirty bit set to 1 on memory write"
    }
  },
  {
    "id": 41,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 13",
    "title": "Copy-on-Write (COW) Mexanizmi",
    "story": "`fork()` bajarilganda ota va bola dastlab bir xil fizik sahifalarni o'qish (read-only) rejimida bo'lishadi.",
    "task": "Ushbu samarali xotira nusxalash texnologiyasi qanday ataladi?",
    "canonical": "Copy-on-write",
    "accepted": [
      "copy-on-write",
      "cow",
      "copy on write"
    ],
    "tags": [
      "#COW",
      "#FORK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Copy-on-Write faqat biror jarayon yozgandagina xususiy nusxa yaratadi.",
      "flags": [],
      "whenToUse": "Linux `fork()` chaqiruvini yuzlab barobar tezlashtirishda.",
      "omissionRisk": "COW bo'lmasa, `fork()` butun megabaytlab xotirani darhol klonlashi kerak bo'lardi.",
      "syntaxExample": "Copy-on-write (COW): Shared until modified"
    }
  },
  {
    "id": 42,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 14",
    "title": "COW da Yozish Amalga Oshirilganda",
    "story": "Agar bola jarayon umumiy COW sahifasiga yangi ma'lumot yozsa, OS nima qiladi?",
    "task": "Ushbu sahifaning alohida xususiy nusxasini (private copy) yaratadimi?",
    "canonical": "Private copy",
    "accepted": [
      "private copy",
      "xususiy nusxa",
      "copy",
      "nusxa"
    ],
    "tags": [
      "#COW",
      "#PAGING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat o'zgargan bitta sahifaning nusxasi olinadi, qolganlari umumiy qoladi.",
      "flags": [],
      "whenToUse": "Xotira izolyatsiyasini ta'minlashda.",
      "omissionRisk": "Bir jarayon yozgan narsa ikkinchisiga ta'sir qilmasligi shart.",
      "syntaxExample": "A write creates a private version of the changed page"
    }
  },
  {
    "id": 43,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 15",
    "title": "Sahifa Almashtirish (Page Replacement) Zarurati",
    "story": "Agar barcha jismoniy freymlar band bo'lsa va yangi sahifa uchun joy kerak bo'lsa, OS nima tanlaydi?",
    "task": "Chiqarib yuboriladigan sahifaning nomini kiriting (Victim / Qurbon sahifa).",
    "canonical": "Victim",
    "accepted": [
      "victim",
      "victim page",
      "qurbon"
    ],
    "tags": [
      "#PAGE_REPLACEMENT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Page replacement bo'sh freym qolmaganda qurbon (victim) sahifani tanlaydi.",
      "flags": [],
      "whenToUse": "Xotira to'lib qolganda yangi talabni qondirishda.",
      "omissionRisk": "To'g'ri qurbon tanlanmasa, u darhol qayta talab qilinib thrashing boshlanadi.",
      "syntaxExample": "Select a victim frame to evict"
    }
  },
  {
    "id": 44,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 16",
    "title": "Victim Sahifani Tanlash Yo'li",
    "story": "Qurbon sahifa dirty (o'zgartirilgan) bo'lsa, uni xotiradan o'chirishdan oldin nima qilish shart?",
    "task": "Diskka yozish (writeback) shartmi?",
    "canonical": "Writeback",
    "accepted": [
      "writeback",
      "diskka yozish",
      "write to disk",
      "write"
    ],
    "tags": [
      "#DIRTY_BIT",
      "#WRITEBACK"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'zgarishlar yo'qolmasligi uchun diskdagi swap ga saqlanadi.",
      "flags": [],
      "whenToUse": "Dirty victim evict qilinganda.",
      "omissionRisk": "Writeback unutilsa, jarayon hisoblagan natijalar yo'qoladi.",
      "syntaxExample": "Dirty victims require writeback before reuse"
    }
  },
  {
    "id": 45,
    "sectorId": 3,
    "sectorTitle": "Demand Paging & EAT Formula Hisobi",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 16",
    "title": "Sahifa Almashtirish Algoritm Maqsadi",
    "story": "Barcha sahifa almashtirish algoritmlarining (FIFO, LRU, OPT) asosiy maqsadi nimani minimallashtirish?",
    "task": "Sahifa xatoliklari (page faults) soninimi?",
    "canonical": "Page faults",
    "accepted": [
      "page faults",
      "sahifa xatoliklari",
      "page fault rate",
      "faults"
    ],
    "tags": [
      "#OPTIMIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Algoritmlarning maqsadi eng kam page fault soniga erishishdir.",
      "flags": [],
      "whenToUse": "Algoritmlar samaradorligini solishtirishda.",
      "omissionRisk": "Ko'p fault bo'lsa, tizim disk tezligiga qadar sekinlashadi.",
      "syntaxExample": "Objective: Lowest page-fault rate"
    }
  },
  {
    "id": 46,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "Oson",
    "source": "Lecture 06 Slide 17",
    "title": "Reference String (Murojaatlar Ketma-ketligi)",
    "story": "Leksiyada almashtirish algoritmlarini sinash uchun sahifalar murojaatlari ketma-ketligi yozib olinadi.",
    "task": "Ushbu ketma-ketlik qanday ataladi (Reference string)?",
    "canonical": "Reference string",
    "accepted": [
      "reference string",
      "murojaat satri"
    ],
    "tags": [
      "#ALGORITHMS",
      "#REFERENCE_STRING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Reference string xotiraga murojaat tartibini ifodalaydi.",
      "flags": [],
      "whenToUse": "FIFO, LRU va OPT algoritmlarini bir xil sharoitda taqqoslashda.",
      "omissionRisk": "Har xil satrlar ishlatilsa xolis baholab bo'lmaydi.",
      "syntaxExample": "Reference string records page access order"
    }
  },
  {
    "id": 47,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 18",
    "title": "FIFO Algoritmi va 3 ta Freym Natijasi",
    "story": "Reference string: `7, 0, 1, 2, 0, 3, 0, 4, 2, 3, 0, 3, 0, 3, 2, 1, 2, 0, 1, 7, 0, 1` (3 ta freym).",
    "task": "FIFO algoritmi ushbu ketma-ketlikda jami nechta page fault hosil qiladi? (Leksiyadagi aniq hisob).",
    "canonical": "15",
    "accepted": [
      "15 page faults",
      "15",
      "15 ta"
    ],
    "tags": [
      "#FIFO",
      "#PAGE_FAULTS"
    ],
    "flagAnatomy": {
      "commandPurpose": "FIFO eng birinchi kelgan sahifani navbatdan chiqaradi. 20 ta murojaatda 15 ta fault.",
      "flags": [],
      "whenToUse": "Eng sodda navbat (queue) orqali almashtirishda.",
      "omissionRisk": "Faol ishlatilayotgan sahifalarni ham vaqti kelgani uchun chiqarib yuboradi.",
      "syntaxExample": "FIFO with 3 frames: 15 page faults"
    }
  },
  {
    "id": 48,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 19",
    "title": "Belady Anomaliyasi Qaysi Algoritmda Uchraydi?",
    "story": "Odatda ko'proq freym ajratilsa fault kamayishi kerak. Biroq ba'zi algoritmlarda freymlar ko'paygani sari fault ham ko'payadi.",
    "task": "Ushbu anomaliya qaysi keng tarqalgan algoritmda uchraydi (FIFO)?",
    "canonical": "FIFO",
    "accepted": [
      "fifo",
      "first-in first-out"
    ],
    "tags": [
      "#BELADY",
      "#FIFO"
    ],
    "flagAnatomy": {
      "commandPurpose": "Belady Anomaly FIFO da xotira oshganda ham nosamarasiz bo'lishi mumkinligini ko'rsatadi.",
      "flags": [],
      "whenToUse": "Nima uchun FIFO ishlab chiqarishda kam qo'llanishini tushuntirishda.",
      "omissionRisk": "Ko'proq RAM qo'shib ham tizimni sekinlashtirib qo'yish xavfi.",
      "syntaxExample": "Belady's Anomaly occurs in FIFO"
    }
  },
  {
    "id": 49,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 19",
    "title": "Belady Anomaliyasida Freym va Fault Misoli",
    "story": "`1,2,3,4,1,2,5,1,2,3,4,5` satrida: 3 ta freymda 9 ta fault bo'lgan edi. 4 ta freym berilganda faultlar soni nechta bo'lib ko'payadi?",
    "task": "4 ta freymdagi faultlar sonini kiriting (10 ta).",
    "canonical": "10",
    "accepted": [
      "10 page faults",
      "10",
      "10 ta"
    ],
    "tags": [
      "#BELADY",
      "#FAULT_COUNT"
    ],
    "flagAnatomy": {
      "commandPurpose": "3 freymda 9 ta, 4 freymda esa 10 ta fault hosil bo'ladi.",
      "flags": [],
      "whenToUse": "Belady anomaliyasining klassik matematik isboti sifatida.",
      "omissionRisk": "RAM oshsa doim unumdorlik oshadi degan noto'g'ri xulosaga kelish.",
      "syntaxExample": "3 frames -> 9 faults; 4 frames -> 10 faults (Anomaly!)"
    }
  },
  {
    "id": 50,
    "sectorId": 4,
    "sectorTitle": "Sahifa Almashtirish Algoritmlari (FIFO, OPT, LRU)",
    "difficulty": "O'rta",
    "source": "Lecture 06 Slide 20",
    "title": "Optimal (OPT) Algoritm Natijasi",
    "story": "Optimal algoritm kelajakda eng uzoq vaqt davomida ishlatilmaydigan sahifani almashtiradi.",
    "task": "O'sha reference string da 3 ta freym bilan Optimal algoritm nechta page fault beradi? (Minimal rekord).",
    "canonical": "9",
    "accepted": [
      "9 page faults",
      "9",
      "9 ta"
    ],
    "tags": [
      "#OPT",
      "#PAGE_FAULTS"
    ],
    "flagAnatomy": {
      "commandPurpose": "OPT eng kam fault beruvchi ideal etalondir (9 ta fault).",
      "flags": [],
      "whenToUse": "Boshqa algoritmlar samaradorligini baholash uchun etalon (benchmark) sifatida.",
      "omissionRisk": "Amaliyotda qo'llab bo'lmaydi, chunki kelajakni bilib bo'lmaydi.",
      "syntaxExample": "OPT with 3 frames: 9 page faults (Theoretical minimum)"
    }
  }
];
});
