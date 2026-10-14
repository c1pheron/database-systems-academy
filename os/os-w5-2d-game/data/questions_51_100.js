/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 QUESTION DOSSIERS (51 to 100)
 * Verified Pedagogical Structure with 5-Point Command & Flag Anatomy.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W5_PART2 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 51,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Qiyin",
    "source": "L05 Slide 31",
    "title": "Pagingda Ichki Fragmentatsiyani Hisoblash",
    "story": "Sahifa hajmi 2048 bayt. Jarayon hajmi 72,766 bayt (35 sahifa + 1086 bayt). So'nggi sahifada necha bayt ichki fragmentatsiya qoladi?",
    "task": "Ichki fragmentatsiya baytini kiriting (2048 - 1086 = 962).",
    "canonical": "962",
    "accepted": [
      "962 bytes",
      "962 bayt"
    ],
    "tags": [
      "#INTERNAL_FRAGMENTATION",
      "#CALCULATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Oxirgi freymdagi bo'sh qolgan xotira hisobi.",
      "flags": [],
      "whenToUse": "Sahifa hajmining isrofga ta'sirini baholashda.",
      "omissionRisk": "Katta sahifa tanlansa har bir jarayonda megabaytlab RAM yo'qotiladi.",
      "syntaxExample": "2048 - 1086 = 962 bytes"
    }
  },
  {
    "id": 52,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "O'rta",
    "source": "L05 Slide 31",
    "title": "Eng Yomon Holatdagi Ichki Fragmentatsiya",
    "story": "Pagingda eng yomon holatda jarayon bitta sahifadan atigi 1 bayt ortiqcha so'rasa, yo'qotish qancha bo'ladi?",
    "task": "1 frame - 1 byte formulasini yozing.",
    "canonical": "1 frame - 1 byte",
    "accepted": [
      "1 frame - 1",
      "frame - 1 byte"
    ],
    "tags": [
      "#WORST_CASE",
      "#FRAGMENTATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Maksimal ichki fragmentatsiya chegarasi.",
      "flags": [],
      "whenToUse": "Eng yomon holat stsenariysini tahlil qilishda.",
      "omissionRisk": "Butun bitta freym 1 bayt sabab band bo'ladi.",
      "syntaxExample": "Worst Case: 1 Frame - 1 Byte"
    }
  },
  {
    "id": 53,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Oson",
    "source": "L05 Slide 31",
    "title": "O'rtacha Ichki Fragmentatsiya",
    "story": "Statistik jihatdan har bir jarayonda o'rtacha qancha freym ichki fragmentatsiya yo'qotiladi (1/2 frame size)?",
    "task": "O'rtacha qiymatni yozing (1/2 frame size).",
    "canonical": "1/2 frame size",
    "accepted": [
      "1/2 frame",
      "0.5 frame size",
      "half frame"
    ],
    "tags": [
      "#AVERAGE",
      "#FRAGMENTATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir jarayon oxirgi sahifasining o'rtacha isrofi.",
      "flags": [],
      "whenToUse": "Umumiy tizim xotira zaxirasini rejalashtirishda.",
      "omissionRisk": "10,000 ta jarayonda bu 20MB gacha isrof degani.",
      "syntaxExample": "Average Internal Fragmentation = 1/2 Frame"
    }
  },
  {
    "id": 54,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "O'rta",
    "source": "L05 Slide 32",
    "title": "Page Table Base Register (PTBR)",
    "story": "Jarayonning sahifalar jadvali boshlang'ich manzilini saqlovchi apparat registri qanday ataladi?",
    "task": "PTBR qisqartmasini kiriting.",
    "canonical": "PTBR",
    "accepted": [
      "ptbr",
      "Page-table base register"
    ],
    "tags": [
      "#PTBR",
      "#PAGE_TABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifalar jadvalining RAM dagi asosiy ko'rsatkichi.",
      "flags": [],
      "whenToUse": "Kontekst almashganda jadvalni almashtirishda.",
      "omissionRisk": "PTBR bo'lmasa CPU boshqa jarayon jadvalini o'qiydi.",
      "syntaxExample": "Page-Table Base Register (PTBR)"
    }
  },
  {
    "id": 55,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "O'rta",
    "source": "L05 Slide 32",
    "title": "Page Table Length Register (PTLR)",
    "story": "Sahifalar jadvalining maksimal o'lchamini va jarayon xotirasi chegarasini saqlovchi registr qaysi?",
    "task": "PTLR qisqartmasini kiriting.",
    "canonical": "PTLR",
    "accepted": [
      "ptlr",
      "Page-table length register"
    ],
    "tags": [
      "#PTLR",
      "#LENGTH"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifalar jadvali uzunligini saqlash.",
      "flags": [],
      "whenToUse": "Sahifa raqamining diapazondan oshmaganligini tekshirishda.",
      "omissionRisk": "Jarayon mavjud bo'lmagan sahifaga murojaat qila oladi.",
      "syntaxExample": "Page-Table Length Register (PTLR)"
    }
  },
  {
    "id": 56,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "O'rta",
    "source": "L05 Slide 32",
    "title": "Oddiy Pagingdagi Ikki Murojaat Muammosi",
    "story": "Sahifalar jadvali RAM da saqlansa, 1 ta ma'lumotni olish uchun RAM ga necha marta murojaat qilinadi?",
    "task": "Murojaatlar sonini kiriting (2).",
    "canonical": "2",
    "accepted": [
      "2 marta",
      "two"
    ],
    "tags": [
      "#MEMORY_ACCESS",
      "#OVERHEAD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Avval jadvalni, keyin ma'lumotni o'qish zarurati.",
      "flags": [],
      "whenToUse": "TLB keshiga ehtiyoj borligini asoslashda.",
      "omissionRisk": "Xotira tezligi 2 barobar sekinlashib ketadi.",
      "syntaxExample": "2 Memory Accesses (1 for page table, 1 for data)"
    }
  },
  {
    "id": 57,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Oson",
    "source": "L05 Slide 36",
    "title": "Valid-Invalid Biti (v/i)",
    "story": "Sahifa jarayonning qonuniy mantiqiy xotirasida mavjudligini bildiruvchi bit qanday belgilanadi (v yoki i)?",
    "task": "Valid bitini kiriting (v).",
    "canonical": "v",
    "accepted": [
      "valid",
      "Valid",
      "v bit"
    ],
    "tags": [
      "#VALID_BIT",
      "#PAGE_TABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifaning qonuniy va RAM da ekanligini tasdiqlash.",
      "flags": [],
      "whenToUse": "Xotiraga noqonuniy murojaatni to'sishda.",
      "omissionRisk": "Agar 'i' bo'lsa apparat Page Fault xatosini ko'taradi.",
      "syntaxExample": "Valid-Invalid Bit (v / i)"
    }
  },
  {
    "id": 58,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Oson",
    "source": "L05 Slide 36",
    "title": "Noqonuniy Manzilga Murojaat Trap",
    "story": "Agar jarayon 'invalid' (i) bitiga ega sahifaga murojaat qilsa, operatsion tizim qanday xato trap hosil qiladi?",
    "task": "Page fault so'zini kiriting.",
    "canonical": "page fault",
    "accepted": [
      "Page fault",
      "trap"
    ],
    "tags": [
      "#PAGE_FAULT",
      "#TRAP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud bo'lmagan sahifa murojaatida uzilish.",
      "flags": [],
      "whenToUse": "Talab qilinganida yuklash (Demand Paging) tizimida.",
      "omissionRisk": "Dastur ruxsatsiz xotiraga yozib yuboradi.",
      "syntaxExample": "Page Fault Interrupt"
    }
  },
  {
    "id": 59,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "O'rta",
    "source": "L05 Slide 40",
    "title": "Ierarxik Sahifalar Jadvali (Hierarchical Paging)",
    "story": "Katta virtual xotirada jadvalning o'zi ham xotiraga sig'may qolganda uni qismlarga bo'lish usuli qanday ataladi?",
    "task": "Hierarchical paging nomini yozing.",
    "canonical": "hierarchical paging",
    "accepted": [
      "Hierarchical paging",
      "two-level paging"
    ],
    "tags": [
      "#HIERARCHICAL",
      "#PAGE_TABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifalar jadvalini ham sahifalash (Two-Level Paging).",
      "flags": [],
      "whenToUse": "64-bit zamonaviy arxitekturalarda.",
      "omissionRisk": "Bitta yagona jadval 4GB RAM ni egallab olgan bo'lar edi.",
      "syntaxExample": "Two-Level Hierarchical Paging"
    }
  },
  {
    "id": 60,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "O'rta",
    "source": "L05 Slide 48",
    "title": "Inverted Page Table",
    "story": "Har bir virtual sahifa uchun emas, balki RAM dagi har bir fizik freym uchun bittadan yozuv saqlovchi jadval qaysi?",
    "task": "Inverted page table nomini yozing.",
    "canonical": "inverted page table",
    "accepted": [
      "Inverted page table",
      "inverted"
    ],
    "tags": [
      "#INVERTED_PAGE_TABLE",
      "#MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fizik freymlar soniga mutanosib yagona jadval.",
      "flags": [],
      "whenToUse": "Katta 64-bit manzil fazosida xotirani tejashda.",
      "omissionRisk": "Jadvaldan qidirish vaqti ortadi (hash table kerak).",
      "syntaxExample": "Inverted Page Table"
    }
  },
  {
    "id": 61,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Oson",
    "source": "L05 Slide 33",
    "title": "Translation Look-Aside Buffer (TLB)",
    "story": "Sahifalar jadvaliga tezkor murojaat qilish uchun ishlatiladigan maxsus apparat kesh xotirasi qanday ataladi?",
    "task": "TLB qisqartmasini kiriting.",
    "canonical": "TLB",
    "accepted": [
      "tlb",
      "Translation Look-Aside Buffer"
    ],
    "tags": [
      "#TLB",
      "#HARDWARE_CACHE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifa-freym bog'lanishlarini saqlovchi assotsiativ kesh.",
      "flags": [],
      "whenToUse": "Xotiraga murojaatni 1 ta taktgacha tezlashtirishda.",
      "omissionRisk": "Har safar RAM dagi jadvalga borishga to'g'ri keladi.",
      "syntaxExample": "TLB (Translation Look-Aside Buffer)"
    }
  },
  {
    "id": 62,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Oson",
    "source": "L05 Slide 33",
    "title": "TLB Hit va TLB Miss",
    "story": "Kerakli sahifa raqami TLB keshidan topilmasa, bu hodisa nima deb ataladi?",
    "task": "TLB miss nomini yozing.",
    "canonical": "TLB miss",
    "accepted": [
      "tlb miss",
      "TLB Miss",
      "miss"
    ],
    "tags": [
      "#TLB_MISS",
      "#CACHE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Keshda manzil topilmagan holat.",
      "flags": [],
      "whenToUse": "Kesh samaradorligini tahlil qilishda.",
      "omissionRisk": "RAM dan o'qib keshga yuklash vaqti yo'qotiladi.",
      "syntaxExample": "TLB Miss -> Load from Page Table"
    }
  },
  {
    "id": 63,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Oson",
    "source": "L05 Slide 35",
    "title": "TLB Hit Ratio (Alfa)",
    "story": "Murojaat qilingan sahifa TLB dan topilish ehtimolligi/foizi qanday ataladi (Hit ratio)?",
    "task": "Hit ratio so'zini yozing.",
    "canonical": "hit ratio",
    "accepted": [
      "Hit ratio",
      "hit_ratio",
      "Hit Ratio"
    ],
    "tags": [
      "#HIT_RATIO",
      "#PERFORMANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Keshdan topish foiz ko'rsatkichi (alfa).",
      "flags": [],
      "whenToUse": "Samarali kirish vaqtini hisoblashda.",
      "omissionRisk": "Hit ratio past bo'lsa butun kompyuter sekinlashadi.",
      "syntaxExample": "Hit Ratio alpha (e.g. 80% to 99%)"
    }
  },
  {
    "id": 64,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "O'rta",
    "source": "L05 Slide 35",
    "title": "Samarali Kirish Vaqti (EAT) Qisqartmasi",
    "story": "Xotiraga o'rtacha murojaat vaqtini (Effective Access Time) ifodalovchi 3 harfli qisqartma qaysi?",
    "task": "EAT qisqartmasini yozing.",
    "canonical": "EAT",
    "accepted": [
      "eat",
      "Effective Access Time"
    ],
    "tags": [
      "#EAT",
      "#METRIC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xotira tizimining o'rtacha samarali ishlash tezligi.",
      "flags": [],
      "whenToUse": "Kesh hajmini optimallashtirishda.",
      "omissionRisk": "EAT yuqori bo'lsa CPU doimiy stall holatida qoladi.",
      "syntaxExample": "EAT = alpha * (t_TLB + t_RAM) + (1 - alpha) * (t_TLB + 2*t_RAM)"
    }
  },
  {
    "id": 65,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Qiyin",
    "source": "L05 Slide 35",
    "title": "EAT Matematik Hisobi (80% Hit)",
    "story": "Hit ratio = 80%, RAM access = 10ns, TLB qidiruvi = 0ns deb olinsa, EAT necha ns bo'ladi (0.80*10 + 0.20*20)?",
    "task": "Hisoblangan EAT qiymatini kiriting (12 ns).",
    "canonical": "12 ns",
    "accepted": [
      "12ns",
      "12"
    ],
    "tags": [
      "#EAT",
      "#CALCULATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "EAT formulasi bo'yicha amaliy hisoblash.",
      "flags": [],
      "whenToUse": "Nazariy kesh tezligini baholashda.",
      "omissionRisk": "Keshsiz 20ns bo'lar edi, 12ns orqali 40% tezlashuvga erishiladi.",
      "syntaxExample": "0.80 * 10ns + 0.20 * 20ns = 12 ns"
    }
  },
  {
    "id": 66,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "O'rta",
    "source": "L05 Slide 33",
    "title": "Address-Space Identifier (ASID)",
    "story": "Har bir jarayonning xotira fazosini TLB ichida alohida ajratib himoyalovchi identifikator nima?",
    "task": "ASID qisqartmasini kiriting.",
    "canonical": "ASID",
    "accepted": [
      "asid",
      "Address-space identifier"
    ],
    "tags": [
      "#ASID",
      "#PROTECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "TLB keshida qaysi yozuv qaysi jarayonga tegishliligini belgilash.",
      "flags": [],
      "whenToUse": "Kontekst almashganda TLB ni tozalab tashlamaslik uchun.",
      "omissionRisk": "ASID bo'lmasa har safar TLB flush qilinishi shart bo'ladi.",
      "syntaxExample": "Address-Space Identifier (ASID)"
    }
  },
  {
    "id": 67,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "O'rta",
    "source": "L05 Slide 33",
    "title": "ASID Bo'lmaganda TLB ni Tozalash",
    "story": "Agar apparatda ASID qo'llab-quvvatlanmasa, yangi jarayonga o'tishda (context switch) TLB keshiga nima qilinadi?",
    "task": "Flush (tozalash) so'zini yozing.",
    "canonical": "flush",
    "accepted": [
      "Flush",
      "flush TLB",
      "tlb flush"
    ],
    "tags": [
      "#FLUSH",
      "#TLB"
    ],
    "flagAnatomy": {
      "commandPurpose": "Boshqa jarayon ma'lumotlari keshdan o'chirilishi.",
      "flags": [],
      "whenToUse": "Xavfsizlikni ta'minlashda.",
      "omissionRisk": "Flush qilmasa jarayon begonaning xotirasini o'qiydi.",
      "syntaxExample": "TLB Flush on Context Switch"
    }
  },
  {
    "id": 68,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Oson",
    "source": "Linux vmstat Command",
    "title": "Linux Virtual Xotira Statistikalari (vmstat)",
    "story": "Xotira, swap, I/O va CPU faolligini har 1 soniyada jonli ko'rsatib turuvchi buyruq qaysi?",
    "task": "vmstat buyrug'ini 1 soniyalik interval bilan yozing.",
    "canonical": "vmstat 1",
    "accepted": [
      "vmstat",
      "vmstat 1 "
    ],
    "tags": [
      "#VMSTAT",
      "#MONITORING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Virtual xotira va tizim statistikasini jonli chiqarish.",
      "flags": [],
      "whenToUse": "Server sekinlashganda memory yoki CPU sababchiligini aniqlashda.",
      "omissionRisk": "Swap faolligini o'z vaqtida ko'rmay qolish mumkin.",
      "syntaxExample": "vmstat 1"
    }
  },
  {
    "id": 69,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "O'rta",
    "source": "Linux /proc/meminfo",
    "title": "Katta Sahifalar (HugePages)",
    "story": "Linuxda TLB misslarini kamaytirish uchun standart 4KB o'rniga 2MB yoki 1GB lik sahifalar nima deb ataladi?",
    "task": "HugePages nomini yozing.",
    "canonical": "HugePages",
    "accepted": [
      "hugepages",
      "Huge Pages",
      "huge pages"
    ],
    "tags": [
      "#HUGEPAGES",
      "#TLB_OPTIMIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Katta ma'lumotlar bazalarida TLB qamrovini oshirish.",
      "flags": [],
      "whenToUse": "Oracle, PostgreSQL, Redis kabi serverlarda.",
      "omissionRisk": "Kichik sahifalarda millionlab TLB miss yuz beradi.",
      "syntaxExample": "HugePages in /proc/meminfo"
    }
  },
  {
    "id": 70,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Oson",
    "source": "Linux /proc/meminfo",
    "title": "Tizimning To'liq Xotira Parametrlari",
    "story": "MemTotal, MemAvailable, Buffers va Cached ko'rsatkichlarini saqlovchi virtual fayl yo'lini kiriting.",
    "task": "/proc/meminfo faylini o'qish buyrug'ini yozing.",
    "canonical": "cat /proc/meminfo",
    "accepted": [
      "cat /proc/meminfo ",
      "less /proc/meminfo"
    ],
    "tags": [
      "#MEMINFO",
      "#KERNEL_STATS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yadroning batafsil xotira hisoboti.",
      "flags": [],
      "whenToUse": "Available RAM va kesh hajmini bilishda.",
      "omissionRisk": "MemFree va MemAvailable farqini bilmay xato signal berish mumkin.",
      "syntaxExample": "cat /proc/meminfo"
    }
  },
  {
    "id": 71,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "O'rta",
    "source": "Linux pmap Command",
    "title": "Jarayon Xotira Xaritasi (pmap)",
    "story": "PID 1250 jarayonining barcha virtual xotira segmentlari (kutubxonalar, heap, stack) xaritasini batafsil ko'rish buyrug'i qaysi?",
    "task": "pmap buyrug'ini -x bayrog'i bilan yozing.",
    "canonical": "pmap -x 1250",
    "accepted": [
      "pmap 1250",
      "pmap -x 1250 "
    ],
    "tags": [
      "#PMAP",
      "#MEMORY_MAP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonning virtual xotira qatlamlarini ko'rsatish.",
      "flags": [
        {
          "flag": "-x",
          "name": "Extended",
          "position": "pmap -x",
          "purpose": "Batafsil RSS va Dirty xotirani ko'rsatish",
          "withoutRisk": "Faqat umumiy manzil chiqadi."
        }
      ],
      "whenToUse": "Xotira sizishini (memory leak) qidirishda.",
      "omissionRisk": "Qaysi kutubxona xotirani yeyotgani noma'lum qoladi.",
      "syntaxExample": "pmap -x 1250"
    }
  },
  {
    "id": 72,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "O'rta",
    "source": "Linux /proc/pid/maps",
    "title": "Protsess Virtual Xaritasini Fayldan O'qish",
    "story": "Joriy PID jarayonining xotira xaritasini to'g'ridan-to'g'ri /proc dagi qaysi fayldan o'qish mumkin?",
    "task": "/proc/$$/maps faylini o'qish buyrug'ini yozing.",
    "canonical": "cat /proc/$$/maps",
    "accepted": [
      "cat /proc/self/maps",
      "cat /proc/1/maps"
    ],
    "tags": [
      "#PROC",
      "#MAPS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yadroning xotira xaritasini to'g'ridan-to'g'ri ko'rish.",
      "flags": [],
      "whenToUse": "Xavfsizlik auditi va exploit tahlilida.",
      "omissionRisk": "Dasturning ruxsatsiz yozuvchi segmentlari ochilmay qoladi.",
      "syntaxExample": "cat /proc/$$/maps"
    }
  },
  {
    "id": 73,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "O'rta",
    "source": "Linux /proc/pid/smaps",
    "title": "Batafsil PSS va RSS Xotira Fayli",
    "story": "Proportional Set Size (PSS) va Private Clean/Dirty xotirasini saqlovchi smaps faylini ochish buyrug'i qaysi?",
    "task": "/proc/$$/smaps faylini o'qish buyrug'ini yozing.",
    "canonical": "cat /proc/$$/smaps",
    "accepted": [
      "cat /proc/self/smaps",
      "head /proc/$$/smaps"
    ],
    "tags": [
      "#SMAPS",
      "#PSS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir segmentning aniq baytma-bayt foydalanishi.",
      "flags": [],
      "whenToUse": "Umumiy kutubxonalar xotira ulushini hisoblashda.",
      "omissionRisk": "Faqat RSS ga qarab xotira sarfini bo'rttirib hisoblash xavfi bor.",
      "syntaxExample": "cat /proc/$$/smaps"
    }
  },
  {
    "id": 74,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Oson",
    "source": "Linux Swappiness",
    "title": "Linux Swappiness Parametri",
    "story": "Yadroning xotirani RAM dan Swap ga qanchalik tajovuzkor surishini belgilovchi parametr (0 dan 100 gacha) nima deb ataladi?",
    "task": "Swappiness so'zini kiriting.",
    "canonical": "swappiness",
    "accepted": [
      "vm.swappiness",
      "Swappiness"
    ],
    "tags": [
      "#SWAPPINESS",
      "#SYSCTL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yadroning swapga ko'chirish darajasi.",
      "flags": [],
      "whenToUse": "Server unumdorligini sozlashda (odatda 10-60).",
      "omissionRisk": "Juda yuqori bo'lsa server disk sekinligi sabab qotib qoladi.",
      "syntaxExample": "sysctl vm.swappiness=10"
    }
  },
  {
    "id": 75,
    "sectorId": 5,
    "sectorTitle": "TLB & Samarali Kirish Vaqti (EAT Formula, ASID)",
    "difficulty": "Oson",
    "source": "Linux Drop Caches",
    "title": "Linux Tizim Keshini Tozalash",
    "story": "RAM dagi pagecache, dentries va inodes keshini xavfsiz tozalash uchun /proc/sys/vm/drop_caches ga necha qiymati yoziladi (3)?",
    "task": "echo 3 > /proc/sys/vm/drop_caches buyrug'ini yozing.",
    "canonical": "echo 3 > /proc/sys/vm/drop_caches",
    "accepted": [
      "sudo echo 3 > /proc/sys/vm/drop_caches"
    ],
    "tags": [
      "#DROP_CACHES",
      "#CACHE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xotira keshlarini xavfsiz tozalash.",
      "flags": [],
      "whenToUse": "Benchmark va testlar oldidan xotirani bo'shatishda.",
      "omissionRisk": "Ishlab turgan ishlab chiqarish serverida keshlarni bo'shatish I/O yuklamasini oshiradi.",
      "syntaxExample": "echo 3 > /proc/sys/vm/drop_caches"
    }
  },
  {
    "id": 76,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 4",
    "title": "Cron Xizmati Holatini Tekshirish",
    "story": "Linuxda cron rejalashtiruvchi daemoni ishlab turganligini tekshirish buyrug'ini yozing.",
    "task": "systemctl status cron buyrug'ini kiriting.",
    "canonical": "systemctl status cron",
    "accepted": [
      "systemctl status cron ",
      "sudo systemctl status cron"
    ],
    "tags": [
      "#CRON",
      "#SYSTEMCTL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Cron daemonining faol holatini ko'rish.",
      "flags": [],
      "whenToUse": "Rejalashtirilgan ishlar bajarilmay qolganda.",
      "omissionRisk": "Cron to'xtab qolgan bo'lsa hech qanday cronjob ishlamaydi.",
      "syntaxExample": "systemctl status cron"
    }
  },
  {
    "id": 77,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 4",
    "title": "Foydalanuvchi Cron Jadvalini Ko'rish",
    "story": "Joriy foydalanuvchining barcha cron vazifalari ro'yxatini chiqaruvchi buyruqni yozing.",
    "task": "crontab -l buyrug'ini kiriting.",
    "canonical": "crontab -l",
    "accepted": [
      "crontab -l "
    ],
    "tags": [
      "#CRONTAB",
      "#LIST"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud cron jadvallarini ko'rish.",
      "flags": [
        {
          "flag": "-l",
          "name": "List",
          "position": "crontab -l",
          "purpose": "Ro'yxatni ko'rsatish",
          "withoutRisk": "Buyruq kutib turadi."
        }
      ],
      "whenToUse": "Yangi vazifa kiritishdan oldin mavjudlarini tekshirishda.",
      "omissionRisk": "Takroriy ishlar qo'shilib ketishi mumkin.",
      "syntaxExample": "crontab -l"
    }
  },
  {
    "id": 78,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 4",
    "title": "Cron Jadvalini Xavfsiz Tahrirlash",
    "story": "Foydalanuvchi crontab jadvalini matn muharririda ochuvchi buyruqni kiriting.",
    "task": "crontab -e buyrug'ini yozing.",
    "canonical": "crontab -e",
    "accepted": [
      "crontab -e "
    ],
    "tags": [
      "#CRONTAB",
      "#EDIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Crontabni sintaksis tekshiruvli tahrirlash.",
      "flags": [
        {
          "flag": "-e",
          "name": "Edit",
          "position": "crontab -e",
          "purpose": "Tahrirlash rejimiga kirish",
          "withoutRisk": "Faylni ocholmaydi."
        }
      ],
      "whenToUse": "Yangi davriy jadval qo'shishda.",
      "omissionRisk": "-r yozilsa barcha cronjoblar o'chib ketadi!",
      "syntaxExample": "crontab -e"
    }
  },
  {
    "id": 79,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 4",
    "title": "Crontab Maydonlari Soni",
    "story": "Standart crontab jadvali boshida vaqtni belgilovchi nechta maydon mavjud (Daqiqa, Soat, Kun, Oy, Hafta kuni)?",
    "task": "Maydonlar sonini kiriting (5).",
    "canonical": "5",
    "accepted": [
      "5 ta",
      "five"
    ],
    "tags": [
      "#CRONTAB",
      "#SYNTAX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Vaqt maydonlari soni.",
      "flags": [],
      "whenToUse": "Jadval sintaksisini tekshirishda.",
      "omissionRisk": "Bitta maydon kam bo'lsa sintaksis xatosi beradi.",
      "syntaxExample": "* * * * * (5 fields)"
    }
  },
  {
    "id": 80,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Har Daqiqada Bajariluvchi Jadval",
    "story": "Skriptni har daqiqada ishga tushirish uchun crontab vaqt qolipini yozing (* * * * *).",
    "task": "Beshta yulduzcha qolipini kiriting.",
    "canonical": "* * * * *",
    "accepted": [
      "* * * * * "
    ],
    "tags": [
      "#CRONTAB",
      "#SCHEDULE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har daqiqalik davriy jadval.",
      "flags": [],
      "whenToUse": "Tezkor monitor yoki tekshiruvlarda.",
      "omissionRisk": "Og'ir skript bo'lsa serverni yuklab tashlaydi.",
      "syntaxExample": "* * * * * /path/script.sh"
    }
  },
  {
    "id": 81,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Har 5 Daqiqada Bajariluvchi Jadval",
    "story": "Vazifani har 5 daqiqada bajarish uchun qadamli qolipni yozing (*/5 * * * *).",
    "task": "*/5 bilan boshlanuvchi qolipni kiriting.",
    "canonical": "*/5 * * * *",
    "accepted": [
      "*/5 * * * * "
    ],
    "tags": [
      "#CRONTAB",
      "#STEP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har 5 daqiqada bir marta ishga tushirish.",
      "flags": [],
      "whenToUse": "Monitoring va kesh tozalashda.",
      "omissionRisk": "Yulduzcha unutilsa faqat 5-daqiqada (soatiga 1 marta) ishlaydi.",
      "syntaxExample": "*/5 * * * * /path/script.sh"
    }
  },
  {
    "id": 82,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Har Kuni Soat 02:30 da Bajarish",
    "story": "Har kuni kechasi soat 02:30 da zaxiralash skriptini yurgazish qolipini yozing (30 2 * * *).",
    "task": "30 2 bilan boshlanuvchi qolipni kiriting.",
    "canonical": "30 2 * * *",
    "accepted": [
      "30 2 * * * "
    ],
    "tags": [
      "#CRONTAB",
      "#DAILY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kunlik soat 02:30 dagi reja.",
      "flags": [],
      "whenToUse": "Tungi zaxira nusxa (backup) olishda.",
      "omissionRisk": "Maydonlar adashsa har soatda ishlab ketishi mumkin.",
      "syntaxExample": "30 2 * * * /backup.sh"
    }
  },
  {
    "id": 83,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Har Dushanba Soat 09:00 da Bajarish",
    "story": "Har dushanba kuni soat 09:00 da hisobot jo'natish qolipini yozing (0 9 * * 1).",
    "task": "0 9 * * 1 qolipini kiriting.",
    "canonical": "0 9 * * 1",
    "accepted": [
      "0 9 * * 1 "
    ],
    "tags": [
      "#CRONTAB",
      "#WEEKLY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Haftalik dushanba kungi reja.",
      "flags": [],
      "whenToUse": "Haftalik haftaboshi hisobotlarida.",
      "omissionRisk": "1 raqami dushanba ekanligi unutilsa noto'g'ri kunda ishlaydi.",
      "syntaxExample": "0 9 * * 1 /report.sh"
    }
  },
  {
    "id": 84,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 5",
    "title": "Kuniga Ikki Marta: 01:00 va 16:00 da",
    "story": "Har kuni soat 1:00 va 16:00 da ro'yxatli qolip bilan ishga tushirishni yozing (0 1,16 * * *).",
    "task": "0 1,16 * * * qolipini kiriting.",
    "canonical": "0 1,16 * * *",
    "accepted": [
      "0 1,16 * * * "
    ],
    "tags": [
      "#CRONTAB",
      "#LIST_HOURS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bir nechta soatlarda ishga tushirish.",
      "flags": [],
      "whenToUse": "Smena almashuvida ma'lumotlarni sinxronlashda.",
      "omissionRisk": "Vergul o'rniga tire qo'yilsa 1 dan 16 gacha har soatda ishlaydi.",
      "syntaxExample": "0 1,16 * * * /sync.sh"
    }
  },
  {
    "id": 85,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 5",
    "title": "Faqat Ish Kunlari Soat 08:00 da",
    "story": "Dushanbadan jumagacha (1-5) ertalab soat 08:00 da yurgazish qolipini yozing (0 8 * * 1-5).",
    "task": "0 8 * * 1-5 qolipini kiriting.",
    "canonical": "0 8 * * 1-5",
    "accepted": [
      "0 8 * * 1-5 "
    ],
    "tags": [
      "#CRONTAB",
      "#WORKDAYS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat ish kunlaridagi oraliq jadval.",
      "flags": [],
      "whenToUse": "Ishxona tizimlari diagnostikasida.",
      "omissionRisk": "Shanba-yakshanba dam olish kunlari behuda xabarlar keladi.",
      "syntaxExample": "0 8 * * 1-5 /check.sh"
    }
  },
  {
    "id": 86,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 5",
    "title": "Chiqish va Xatoliklarni Log Faylga Yo'naltirish",
    "story": "Cron da stdout va stderr ni log fayliga qo'shib yozish (append) operatorlarini yozing (>> /var/log/app.log 2>&1).",
    "task": "Yo'naltirish operatorini kiriting.",
    "canonical": ">> /var/log/app.log 2>&1",
    "accepted": [
      ">> /var/log/script.log 2>&1",
      ">> /log.log 2>&1"
    ],
    "tags": [
      "#REDIRECTION",
      "#LOGGING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xatoliklar va chiqishlarni faylga saqlash.",
      "flags": [],
      "whenToUse": "Cron skripti nima sabab xato berganini bilishda.",
      "omissionRisk": "2>&1 bo'lmasa xatoliklar ekranga chiqmay g'oyib bo'ladi.",
      "syntaxExample": ">> /var/log/app.log 2>&1"
    }
  },
  {
    "id": 87,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Cronda Mutlaq Yo'l (Full Path) Qoidasi",
    "story": "Cron muhitida PATH cheklangan bo'ladi. Shuning uchun buyruqlar mutlaq yo'l bilan (masalan /usr/bin/find) yozilishi shartmi (yes/no)?",
    "task": "Javobni kiriting (yes/no).",
    "canonical": "yes",
    "accepted": [
      "Yes",
      "ha",
      "Ha"
    ],
    "tags": [
      "#FULL_PATH",
      "#CRON_BEST_PRACTICE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Buyruqlar mutlaq manzil bilan chaqirilishi shart.",
      "flags": [],
      "whenToUse": "Barcha cron jadvallarida.",
      "omissionRisk": "'command not found' xatosi bilan skript to'xtaydi.",
      "syntaxExample": "/usr/bin/find instead of find"
    }
  },
  {
    "id": 88,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Buyruqning Mutlaq Yo'lini Aniqlash",
    "story": "find utilitasining mutlaq fayl yo'lini aniqlash uchun qaysi Linux buyrug'i beriladi?",
    "task": "which find buyrug'ini kiriting.",
    "canonical": "which find",
    "accepted": [
      "which find "
    ],
    "tags": [
      "#WHICH",
      "#BINARY_PATH"
    ],
    "flagAnatomy": {
      "commandPurpose": "Buyruqning joylashuv yo'lini topish.",
      "flags": [],
      "whenToUse": "Crontabga buyruq yo'lini kiritishdan oldin.",
      "omissionRisk": "Noto'g'ri yo'l kiritilsa cron bajara olmaydi.",
      "syntaxExample": "which find -> /usr/bin/find"
    }
  },
  {
    "id": 89,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "O'rta",
    "source": "Linux /etc/crontab",
    "title": "Tizim Crontab Fayli: /etc/crontab",
    "story": "/etc/crontab faylida foydalanuvchi jadvallaridan farqli o'laroq buyruqdan oldin qaysi maydon bo'ladi (user)?",
    "task": "Foydalanuvchi (user) maydonini yozing.",
    "canonical": "user",
    "accepted": [
      "username",
      "User"
    ],
    "tags": [
      "#SYSTEM_CRONTAB",
      "#USER_FIELD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Vazifa qaysi user nomidan bajarilishini belgilash.",
      "flags": [],
      "whenToUse": "Tizim darajasidagi cron konfiguratsiyasida.",
      "omissionRisk": "User ko'rsatilmasa yadro sintaksis xatosi deb hisoblaydi.",
      "syntaxExample": "* * * * * root /usr/bin/backup"
    }
  },
  {
    "id": 90,
    "sectorId": 6,
    "sectorTitle": "Crontab Davriy Rejalashtirish Muhandisligi",
    "difficulty": "Oson",
    "source": "Seminar 05 Warnings",
    "title": "Barcha Cron Rejalarini O'chirish Xavfi",
    "story": "Qaysi crontab bayrog'i ogohlantirishsiz barcha jadvallarni o'chirib yuboradi (-r)?",
    "task": "-r bayrog'ini yozing.",
    "canonical": "-r",
    "accepted": [
      "-r ",
      "crontab -r"
    ],
    "tags": [
      "#REMOVE",
      "#WARNING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Crontabni butunlay tozalash.",
      "flags": [
        {
          "flag": "-r",
          "name": "Remove",
          "position": "crontab -r",
          "purpose": "O'chirish",
          "withoutRisk": "Barcha rejalar yo'qoladi."
        }
      ],
      "whenToUse": "Foydalanuvchi rejalaridan to'liq voz kechganda.",
      "omissionRisk": "-e bilan adashtirilsa tiklab bo'lmaydi.",
      "syntaxExample": "crontab -r"
    }
  },
  {
    "id": 91,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Systemd Timers Afzalligi",
    "story": "Systemd timerlar cron ga zamonaviy alternativa bo'lib, uning loglari qaysi markaziy jurnalga yoziladi?",
    "task": "journalctl nomini yozing.",
    "canonical": "journalctl",
    "accepted": [
      "systemd-journald",
      "journald"
    ],
    "tags": [
      "#SYSTEMD_TIMERS",
      "#JOURNALCTL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Markazlashgan xavfsiz tizim jurnali.",
      "flags": [],
      "whenToUse": "Loglarni filtrlash va tahlil qilishda.",
      "omissionRisk": "Cron da loglar sochilib ketadi yoki yo'qoladi.",
      "syntaxExample": "journalctl -u cleanup.timer"
    }
  },
  {
    "id": 92,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 5",
    "title": "Systemd Rejali Vazifasining Ikki Birligi",
    "story": "Systemd da reja ikkita fayldan iborat: nima bajarilishini belgilovchi .service va qachon bajarilishini belgilovchi qaysi fayl?",
    "task": ".timer kengaytmasini yozing.",
    "canonical": ".timer",
    "accepted": [
      ".timer ",
      "timer"
    ],
    "tags": [
      "#TIMER_UNIT",
      "#ARCHITECTURE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Vaqt jadvalini belgilovchi unit fayli.",
      "flags": [],
      "whenToUse": "Har qanday systemd avtomatlashtirishida.",
      "omissionRisk": "Timer bo'lmasa service faqat qo'lda chaqiriladi.",
      "syntaxExample": "cleanup.service + cleanup.timer"
    }
  },
  {
    "id": 93,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 6",
    "title": "Service Unit Turi: Type=oneshot",
    "story": "Bir marta bajarilib, darhol tugaydigan qisqa skriptlar uchun Service bo'limida qaysi Type ko'rsatiladi?",
    "task": "Type=oneshot parametrini yozing.",
    "canonical": "Type=oneshot",
    "accepted": [
      "oneshot",
      "Type=oneshot "
    ],
    "tags": [
      "#ONESHOT",
      "#SERVICE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Skript bir marta ishlab tugashini bildirish.",
      "flags": [],
      "whenToUse": "Tozalash va zaxiralash skriptlarida.",
      "omissionRisk": "Oddiy forking yoki simple qilib qo'yilsa xizmat osilib qoladi.",
      "syntaxExample": "Type=oneshot"
    }
  },
  {
    "id": 94,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 6",
    "title": "Bajariluvchi Buyruq Direktivalari: ExecStart",
    "story": "Service faylida qaysi buyruq yoki skript ishga tushirilishi qaysi direktiva orqali yoziladi?",
    "task": "ExecStart direktivasini yozing.",
    "canonical": "ExecStart",
    "accepted": [
      "ExecStart=",
      "execstart"
    ],
    "tags": [
      "#EXECSTART",
      "#SERVICE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bajariluvchi dastur yo'lini belgilash.",
      "flags": [],
      "whenToUse": "Service blokida asosiy buyruqni kiritishda.",
      "omissionRisk": "ExecStart bo'lmasa service ishga tushmaydi.",
      "syntaxExample": "ExecStart=/usr/bin/find /tmp -mtime +1 -delete"
    }
  },
  {
    "id": 95,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 6",
    "title": "Har Kuni Soat 01:00 da OnCalendar Qolipi",
    "story": "Timer faylida har kuni soat 01:00:00 da rejalashtirish uchun OnCalendar direktivasini yozing.",
    "task": "OnCalendar=*-*-* 01:00:00 parametrini kiriting.",
    "canonical": "OnCalendar=*-*-* 01:00:00",
    "accepted": [
      "*-*-* 01:00:00"
    ],
    "tags": [
      "#ONCALENDAR",
      "#TIMER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kalendar bo'yicha aniq vaqtni belgilash.",
      "flags": [],
      "whenToUse": "Systemd timer jadvalini yozishda.",
      "omissionRisk": "Sintaksis xato bo'lsa timer ishlamaydi.",
      "syntaxExample": "OnCalendar=*-*-* 01:00:00"
    }
  },
  {
    "id": 96,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 6",
    "title": "O'tib Ketgan Rejani Qayta Tiklash: Persistent=true",
    "story": "Server o'chirilgan bo'lsa va reja vaqti o'tib ketgan bo'lsa, server yoqilgach uni darhol bajarish parametri qaysi?",
    "task": "Persistent=true parametrini kiriting.",
    "canonical": "Persistent=true",
    "accepted": [
      "persistent=true",
      "Persistent"
    ],
    "tags": [
      "#PERSISTENT",
      "#TIMER"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'tkazib yuborilgan vazifani bootdan keyin bajarish.",
      "flags": [],
      "whenToUse": "Doim yoniq turmaydigan server va noutbuklarda.",
      "omissionRisk": "Tungi zaxira nusxalar o'tkazib yuboriladi va olinmaydi.",
      "syntaxExample": "Persistent=true"
    }
  },
  {
    "id": 97,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 6",
    "title": "Timer Target Bog'lanishi: WantedBy",
    "story": "Timer fayli [Install] bo'limida qaysi target ga bog'lanishi kerak (WantedBy=timers.target)?",
    "task": "WantedBy=timers.target parametrini yozing.",
    "canonical": "WantedBy=timers.target",
    "accepted": [
      "timers.target"
    ],
    "tags": [
      "#INSTALL",
      "#TARGET"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tizim yuklanganda barcha taymerlarni faollashtirish.",
      "flags": [],
      "whenToUse": "Enable komandasini to'g'ri ulashda.",
      "omissionRisk": "Enable qilganda symlink yaratilmaydi.",
      "syntaxExample": "WantedBy=timers.target"
    }
  },
  {
    "id": 98,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 7",
    "title": "Taymerni Darhol Ishga Tushirish",
    "story": "cleanup.timer ni darhol yoqish buyrug'ini yozing.",
    "task": "sudo systemctl start cleanup.timer buyrug'ini kiriting.",
    "canonical": "sudo systemctl start cleanup.timer",
    "accepted": [
      "systemctl start cleanup.timer"
    ],
    "tags": [
      "#SYSTEMCTL",
      "#START_TIMER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Taymerni vaqtinchalik ishga tushirish.",
      "flags": [],
      "whenToUse": "Hozirgi sessiyada sinab ko'rishda.",
      "omissionRisk": "Reboot bo'lsa taymer o'chib qoladi.",
      "syntaxExample": "sudo systemctl start cleanup.timer"
    }
  },
  {
    "id": 99,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 7",
    "title": "Taymer Avtostartini Yoqish (Enable)",
    "story": "cleanup.timer ni har safar boot bo'lganda avtomatik yonadigan qilish buyrug'ini yozing.",
    "task": "sudo systemctl enable cleanup.timer buyrug'ini kiriting.",
    "canonical": "sudo systemctl enable cleanup.timer",
    "accepted": [
      "systemctl enable cleanup.timer"
    ],
    "tags": [
      "#ENABLE",
      "#BOOT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yuklanish vaqtida taymerni yoqish.",
      "flags": [],
      "whenToUse": "Ishlab chiqarishga topshirishda.",
      "omissionRisk": "Hozirgi daqiqada ishga tushmaydi (reboot kutadi).",
      "syntaxExample": "sudo systemctl enable cleanup.timer"
    }
  },
  {
    "id": 100,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Systemctl Enable --now",
    "title": "Birdaniga Ham Enable, Ham Start Qilish",
    "story": "Taymerni ham avtostartga qo'yib, ham aynan hozirgi daqiqadan ishga tushiruvchi --now bayrog'ini yozing.",
    "task": "sudo systemctl enable --now cleanup.timer buyrug'ini kiriting.",
    "canonical": "sudo systemctl enable --now cleanup.timer",
    "accepted": [
      "systemctl enable --now cleanup.timer"
    ],
    "tags": [
      "#NOW_FLAG",
      "#EFFICIENCY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta buyruq bilan avtostart va darhol yoqish.",
      "flags": [
        {
          "flag": "--now",
          "name": "Immediate start",
          "position": "enable --now",
          "purpose": "Darhol yoqish",
          "withoutRisk": "Faqat rebootdan keyin yonadi."
        }
      ],
      "whenToUse": "Professional DevOps konfiguratsiyasida.",
      "omissionRisk": "Ikkita alohida buyruq yozishga to'g'ri keladi.",
      "syntaxExample": "sudo systemctl enable --now cleanup.timer"
    }
  }
];
});
