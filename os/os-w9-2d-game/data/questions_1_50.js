/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 9 QUESTIONS (PART 1: 1–50)
 * Sectors: 1 (Deadlock & Coffman), 2 (Resource Allocation Graph), 3 (Prevention), 4 (Avoidance & Safe State 1-5)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W9_PART1 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 1,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Tupik (Deadlock) Ta'rifi",
    "story": "L09 Deadlocks: Har bir jarayon boshqa bir jarayon tomonidan ushlab turilgan resursni kutib, butun tizimning to'xtab qolishi.",
    "task": "Ushbu holatning xalqaro ilmiy atamasini yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock"
    ],
    "tags": [
      "#DEADLOCK",
      "#CONCURRENCY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Operatsion tizimlarda jarayonlarning doiraviy bloklanish holatini ifodalash.",
      "flags": [],
      "whenToUse": "Ko'p oqimli va ko'p jarayonli tizimlar tahlilida.",
      "omissionRisk": "Tizim deadlockka tushsa tashqi aralashuvsiz (kill/reboot) chiqib keta olmaydi.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 2,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "1-Shart: O'zaro Istisno (Mutual Exclusion)",
    "story": "Coffman shartlaridan birinchisi: resursdan bir vaqtda faqat bitta jarayon foydalana oladi (bo'lishib bo'lmaydi).",
    "task": "1-shartning inglizcha ilmiy nomini yozing.",
    "canonical": "Mutual Exclusion",
    "accepted": [
      "Mutual Exclusion",
      "mutual exclusion",
      "mutex"
    ],
    "tags": [
      "#COFFMAN",
      "#MUTUAL_EXCLUSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Resurs bo'linmas tarzda faqat bitta egaga ega bo'lishini bildirish.",
      "flags": [],
      "whenToUse": "Printer, diskka yozish va qulflar kabi eksklyuziv resurslarda.",
      "omissionRisk": "Agar barcha resurslar faqat o'qiladigan (sharable) bo'lsa deadlock bo'lmaydi.",
      "syntaxExample": "Mutual Exclusion"
    }
  },
  {
    "id": 3,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "2-Shart: Ushlab Turish va Kutish (Hold and Wait)",
    "story": "Jarayon kamida 1 ta resursni egallab turgan holda, boshqa jarayonlar ushlab turgan yangi resurslarni kutib turadi.",
    "task": "2-shartning inglizcha nomini yozing.",
    "canonical": "Hold and Wait",
    "accepted": [
      "Hold and Wait",
      "hold and wait",
      "hold & wait"
    ],
    "tags": [
      "#COFFMAN",
      "#HOLD_AND_WAIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon mavjud resurslarni bo'shatmasdan yangilarini so'rashini ifodalash.",
      "flags": [],
      "whenToUse": "Bosqichma-bosqich resurs yig'uvchi jarayonlarda.",
      "omissionRisk": "Agar jarayon hamma resursni birdaniga olsa bu shart buziladi.",
      "syntaxExample": "Hold and Wait"
    }
  },
  {
    "id": 4,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "3-Shart: Majburiy Tortib Olmaslik (No Preemption)",
    "story": "Resurs jarayondan majburiy tortib olinmaydi; u faqat jarayon o'z ishini tugatgach ixtiyoriy ravishda bo'shatiladi.",
    "task": "3-shartning inglizcha nomini yozing.",
    "canonical": "No Preemption",
    "accepted": [
      "No Preemption",
      "no preemption"
    ],
    "tags": [
      "#COFFMAN",
      "#NO_PREEMPTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "OS resurslarni majburan tortib ololmasligini ko'rsatish.",
      "flags": [],
      "whenToUse": "Tranzaksion yaxlitlik va apparat qurilmalari xavfsizligida.",
      "omissionRisk": "Agar preemption bo'lsa qotgan jarayondan resursni tortib olib boshqasiga berish mumkin bo'lardi.",
      "syntaxExample": "No Preemption"
    }
  },
  {
    "id": 5,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "4-Shart: Halqasimon Kutish (Circular Wait)",
    "story": "P0 kutar P1 ni, P1 kutar P2 ni, ..., Pn kutar P0 ni. Doiraviy zanjir hosil bo'ladi.",
    "task": "4-shartning inglizcha nomini yozing.",
    "canonical": "Circular Wait",
    "accepted": [
      "Circular Wait",
      "circular wait"
    ],
    "tags": [
      "#COFFMAN",
      "#CIRCULAR_WAIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutish zanjirining yopiq halqa hosil qilishini ifodalash.",
      "flags": [],
      "whenToUse": "Tupikning eng asosiy bevosita belgisi hisoblanadi.",
      "omissionRisk": "Sikl buzilsa tupik ham darhol yechiladi.",
      "syntaxExample": "Circular Wait"
    }
  },
  {
    "id": 6,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Shartlar Muallifi: Coffman (1971)",
    "story": "Ushbu 4 ta zaruriy shartni 1971 yilda tizimlashtirgan olimning familiyasini yozing.",
    "task": "Olim familiyasini yozing.",
    "canonical": "Coffman",
    "accepted": [
      "Coffman",
      "Edward Coffman",
      "coffman"
    ],
    "tags": [
      "#COFFMAN",
      "#HISTORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock nazariyasining asoschisi Edward G. Coffman Jr. ni ifodalash.",
      "flags": [],
      "whenToUse": "Nazariy imtihon va darsliklarda.",
      "omissionRisk": "Bu 4 ta shart bir vaqtda mavjud bo'lgandagina Deadlock vujudga keladi.",
      "syntaxExample": "Coffman"
    }
  },
  {
    "id": 7,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "4 ta Shart Yetarlimi yoki Zaruriymi?",
    "story": "Coffman shartlari deadlock yuzaga kelishi uchun 'zaruriy' (necessary) shartlar hisoblanadi.",
    "task": "Ushbu shartlar turini yozing (Zaruriy / Yetarli).",
    "canonical": "Zaruriy",
    "accepted": [
      "Zaruriy",
      "zaruriy",
      "necessary"
    ],
    "tags": [
      "#NECESSARY_CONDITIONS",
      "#THEORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock bo'lishi uchun 4 ta shartning barchasi bir vaqtda bajarilishi shartligini anglatish.",
      "flags": [],
      "whenToUse": "Agar kamida bittasi yo'q qilinsa deadlock aslo sodir bo'lmaydi.",
      "omissionRisk": "Bitta shartning o'zi deadlock hosil qilish uchun yetarli emas.",
      "syntaxExample": "Zaruriy"
    }
  },
  {
    "id": 8,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Coffman Skriptini Bajarish (01_coffman.py)",
    "story": "4 ta shart qanday qilib amalda sun'iy deadlock hosil qilishini Python dasturida sinab ko'ring.",
    "task": "01_coffman.py dasturini terminalda ishga tushiring.",
    "canonical": "python3 01_coffman.py",
    "accepted": [
      "python3 01_coffman.py",
      "python 01_coffman.py"
    ],
    "tags": [
      "#PYTHON_DEADLOCK",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Terminalda ikkita oqim bir-birini kutib qotib qolishini ko'rish.",
      "flags": [],
      "whenToUse": "Deadlock holatini simulyatsiya qilishda.",
      "omissionRisk": "Skript bajarilgach qotib qoladi (Ctrl+C bilan to'xtatiladi).",
      "syntaxExample": "python3 01_coffman.py"
    }
  },
  {
    "id": 9,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Yagona Nusxali Resurs (Single-unit Resource)",
    "story": "Tizimda faqat 1 ta dona mavjud bo'lgan resurs turi (masalan, bitta DVD yozuvchi qurilma).",
    "task": "Bunday resurs turini yozing.",
    "canonical": "Single-unit",
    "accepted": [
      "Single-unit",
      "single-unit resource",
      "single instance"
    ],
    "tags": [
      "#RESOURCE_TYPE",
      "#SINGLE_INSTANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat bitta nusxasi bor bo'lgan resurslarni ifodalash.",
      "flags": [],
      "whenToUse": "RAG da bitta nuqta bilan belgilanadi.",
      "omissionRisk": "Bu turdagi resurslarda sikl mavjudligi 100% Deadlock demakdir.",
      "syntaxExample": "Single-unit"
    }
  },
  {
    "id": 10,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Ko'p Nusxali Resurs (Multi-unit Resource)",
    "story": "Bir xil turdagi 5 ta printer yoki 8 ta CPU yadrosi kabi bir nechta nusxaga ega resurs turi.",
    "task": "Bunday resurs turini yozing.",
    "canonical": "Multi-unit",
    "accepted": [
      "Multi-unit",
      "multi-unit resource",
      "multiple instances"
    ],
    "tags": [
      "#RESOURCE_TYPE",
      "#MULTI_INSTANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bir nechta nusxali resurslarni ifodalash.",
      "flags": [],
      "whenToUse": "Bankir algoritmi tahlilida.",
      "omissionRisk": "Bu yerda sikl bo'lishi har doim ham deadlock degani emas.",
      "syntaxExample": "Multi-unit"
    }
  },
  {
    "id": 11,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Chorraha Analogiyasi (Traffic Jam)",
    "story": "To'rt tomondan kelgan 4 ta avtomobil chorraha markaziga kirib, har biri oldidagi mashinani to'sib qo'yishi.",
    "task": "Ushbu mashhur hayotiy analogiya qaysi Coffman shartini yaqqol ko'rsatadi?",
    "canonical": "Circular Wait",
    "accepted": [
      "Circular Wait",
      "circular wait"
    ],
    "tags": [
      "#ANALOGY",
      "#TRAFFIC_JAM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Halqasimon kutishni real hayot misolida tushuntirish.",
      "flags": [],
      "whenToUse": "Feynman uslubidagi tushuntirishlarda.",
      "omissionRisk": "Mashinalardan biri orqaga chekinmasa hech kim harakatlana olmaydi.",
      "syntaxExample": "Circular Wait"
    }
  },
  {
    "id": 12,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Bir Yo'lli Ko'prik Muammosi (Bridge Crossing)",
    "story": "Faqat bitta mashina sig'adigan ko'prikda ikki tomondan mashina kelib yuzma-yuz to'xtab qolishi.",
    "task": "Ushbu vaziyat qaysi muammoning klassik modelidir?",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock"
    ],
    "tags": [
      "#BRIDGE_CROSSING",
      "#ANALOGY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ikki tomonlama resurs talabida yuzaga keladigan tupikni ko'rsatish.",
      "flags": [],
      "whenToUse": "Resurslarni navbatlashtirish qoidalarini ishlab chiqishda.",
      "omissionRisk": "Bitta mashinaga yo'l berish qoidasi kiritilishi shart.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 13,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Deadlock vs Starvation Farqi",
    "story": "Starvation da boshqa jarayonlar ishlab turadi, faqat bitta baxtsiz jarayon kutadi. Deadlock da esa nima bo'ladi?",
    "task": "Deadlockda qatnashgan barcha jarayonlar harakatini yozing (to'xtaydi / ishlaydi).",
    "canonical": "to'xtaydi",
    "accepted": [
      "to'xtaydi",
      "hammasi to'xtaydi",
      "muzlaydi"
    ],
    "tags": [
      "#DEADLOCK_VS_STARVATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock va Starvation orasidagi chegarani aniq bilish.",
      "flags": [],
      "whenToUse": "Viva savollarida.",
      "omissionRisk": "Deadlockda hech kim foydali ish qilmaydi.",
      "syntaxExample": "to'xtaydi"
    }
  },
  {
    "id": 14,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Deadlock Jarayonlari CPU Sarflaydimi?",
    "story": "Deadlockka tushgan jarayonlar qulfni kutib uyqu holatida (Blocked/Waiting) bo'ladi. Ular CPU ni sarflaydimi?",
    "task": "Javobni yozing (sarflamaydi / 100% sarflaydi).",
    "canonical": "sarflamaydi",
    "accepted": [
      "sarflamaydi",
      "yo'q",
      "sarflamaydi (0%)"
    ],
    "tags": [
      "#CPU_USAGE",
      "#BLOCKED_STATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlockdagi jarayonlar CPU yuklamasini 0% ga tushirishini ko'rsatish.",
      "flags": [],
      "whenToUse": "Livelock (100% CPU) dan farqlashda.",
      "omissionRisk": "CPU tinch tursa ham xotira va tizim qotgan bo'ladi.",
      "syntaxExample": "sarflamaydi"
    }
  },
  {
    "id": 15,
    "sectorId": 1,
    "sectorTitle": "Tupik (Deadlock) Tushunchasi & 4 ta Coffman Sharti",
    "title": "Coffman Shartlaridan Birini Yo'qotish Natijasi",
    "story": "Agar biz 4 ta shartdan kamida 1 tasini tizimdan butunlay chiqarib tashlasak nima bo'ladi?",
    "task": "Deadlock sodir bo'ladimi? (bo'lmaydi / bo'ladi)",
    "canonical": "bo'lmaydi",
    "accepted": [
      "bo'lmaydi",
      "yo'q",
      "bo'lmaydi!"
    ],
    "tags": [
      "#PREVENTION_PRINCIPLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock Prevention ning fundamental qoidasini tasdiqlash.",
      "flags": [],
      "whenToUse": "Tizim arxitekturasini rejalashtirishda.",
      "omissionRisk": "Bu qoida asosida Deadlock Prevention usullari quriladi.",
      "syntaxExample": "bo'lmaydi"
    }
  },
  {
    "id": 16,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Resurs Taqsimoti Grafigi (RAG)",
    "story": "L09 RAG: Tizimdagi barcha jarayonlar va resurslar munosabatini ifodalovchi yo'naltirilgan graf.",
    "task": "Ushbu grafning to'liq inglizcha nomini yozing.",
    "canonical": "Resource Allocation Graph",
    "accepted": [
      "Resource Allocation Graph",
      "RAG",
      "resource allocation graph"
    ],
    "tags": [
      "#RAG",
      "#GRAPH_THEORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonlar va resurslar holatini vizual va matematik modellashtirish.",
      "flags": [],
      "whenToUse": "Sikl va tupiklarni tahlil qilishda.",
      "omissionRisk": "Grafsiz murakkab tizimlardagi deadlockni aniqlash qiyin.",
      "syntaxExample": "Resource Allocation Graph"
    }
  },
  {
    "id": 17,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Jarayon Tuguni Shakli (Process Node)",
    "story": "RAG da jarayonlar qaysi geometrik figura bilan belgilanadi?",
    "task": "Jarayon tuguni shaklini yozing (Aylana / To'rtburchak).",
    "canonical": "Aylana",
    "accepted": [
      "Aylana",
      "aylana",
      "circle"
    ],
    "tags": [
      "#RAG",
      "#PROCESS_NODE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon tugunini resursdan ajratish.",
      "flags": [],
      "whenToUse": "RAG chizish va o'qishda.",
      "omissionRisk": "To'g'ri belgilash tushunishni osonlashtiradi.",
      "syntaxExample": "Aylana"
    }
  },
  {
    "id": 18,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Resurs Tuguni Shakli (Resource Node)",
    "story": "RAG da resurs turlari qaysi geometrik shakl bilan belgilanadi?",
    "task": "Resurs tuguni shaklini yozing (To'rtburchak / Aylana).",
    "canonical": "To'rtburchak",
    "accepted": [
      "To'rtburchak",
      "to'rtburchak",
      "rectangle"
    ],
    "tags": [
      "#RAG",
      "#RESOURCE_NODE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Resurs turini ifodalovchi to'rtburchak blok.",
      "flags": [],
      "whenToUse": "Resurslar zaxirasini ko'rsatishda.",
      "omissionRisk": "Ichiga nuqtalar qo'yiladi.",
      "syntaxExample": "To'rtburchak"
    }
  },
  {
    "id": 19,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Resurs Nusxalari (Instances / Dots)",
    "story": "Resurs to'rtburchagi ichidagi nuqtalar nimani bildiradi?",
    "task": "Ushbu nuqtalar soni nimani anglatadi?",
    "canonical": "Nusxalar soni",
    "accepted": [
      "Nusxalar soni",
      "nusxalar",
      "instances"
    ],
    "tags": [
      "#INSTANCES",
      "#RAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud bir xil turdagi resurs nusxalarini sanash.",
      "flags": [],
      "whenToUse": "Multi-instance resurslarda.",
      "omissionRisk": "Nuqtalar soni cheklangan bo'ladi.",
      "syntaxExample": "Nusxalar soni"
    }
  },
  {
    "id": 20,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "So'rov Qirrasi (Request Edge: Pi -> Rj)",
    "story": "Jarayon Pi dan resurs Rj ga qarab yo'nalgan strelka nima deb ataladi?",
    "task": "Ushbu qirra nomini yozing.",
    "canonical": "Request Edge",
    "accepted": [
      "Request Edge",
      "request edge",
      "so'rov qirrasi"
    ],
    "tags": [
      "#REQUEST_EDGE",
      "#RAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon ushbu resurs turidan bitta nusxa so'rayotganini bildirish.",
      "flags": [],
      "whenToUse": "Jarayon resurs kutayotganda chiziladi.",
      "omissionRisk": "Strelka aylanadan to'rtburchakka qaraydi.",
      "syntaxExample": "Request Edge"
    }
  },
  {
    "id": 21,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Taqsimot Qirrasi (Assignment Edge: Rj -> Pi)",
    "story": "Resurs Rj ichidagi aniq nuqtadan jarayon Pi ga yo'nalgan strelka nima deyiladi?",
    "task": "Ushbu qirra nomini yozing.",
    "canonical": "Assignment Edge",
    "accepted": [
      "Assignment Edge",
      "assignment edge",
      "taqsimot qirrasi"
    ],
    "tags": [
      "#ASSIGNMENT_EDGE",
      "#RAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Resurs nusxasi aynan shu jarayonga biriktirilganligini bildirish.",
      "flags": [],
      "whenToUse": "Resurs band qilinganda.",
      "omissionRisk": "Resurs nuqtasidan jarayon aylanasi tomon yo'naladi.",
      "syntaxExample": "Assignment Edge"
    }
  },
  {
    "id": 22,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Da'vo Qirrasi (Claim Edge: Pi --> Rj)",
    "story": "Jarayon kelajakda shu resursni so'rashi mumkinligini bildiruvchi punktir (chiziqcha) qirra.",
    "task": "Ushbu qirra nomini yozing.",
    "canonical": "Claim Edge",
    "accepted": [
      "Claim Edge",
      "claim edge",
      "da'vo qirrasi"
    ],
    "tags": [
      "#CLAIM_EDGE",
      "#AVOIDANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kelajakdagi potentsial so'rovlarni oldindan belgilash.",
      "flags": [],
      "whenToUse": "Deadlock Avoidance RAG modelida.",
      "omissionRisk": "Haqiqiy so'rov bo'lganda Request Edge ga aylanadi.",
      "syntaxExample": "Claim Edge"
    }
  },
  {
    "id": 23,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Yagona Nusxali RAG da Sikl Natijasi",
    "story": "Agar har bir resurs faqat 1 ta nusxaga ega bo'lsa va grafda SIKL topilsa, nima bo'ladi?",
    "task": "Tizim holatini yozing (Deadlock / Deadlock emas).",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock"
    ],
    "tags": [
      "#CYCLE_EQUALS_DEADLOCK",
      "#THEOREM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yagona nusxali tizimlarda sikl = 100% Deadlock ekanligini tasdiqlash.",
      "flags": [],
      "whenToUse": "Graf tahlilida.",
      "omissionRisk": "Bu yetarli va zaruriy shartdir.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 24,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Ko'p Nusxali RAG da Sikl Natijasi",
    "story": "Agar resurslar ko'p nusxali bo'lsa va sikl bo'lsa, Deadlock 100% bo'lishi shartmi?",
    "task": "Deadlock shartmi? (ha / yo'q)",
    "canonical": "yo'q",
    "accepted": [
      "yo'q",
      "yoq",
      "shart emas",
      "no"
    ],
    "tags": [
      "#MULTI_INSTANCE_CYCLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ko'p nusxali holatda sikl bo'lsa ham boshqa erkin jarayon resursni bo'shatishi mumkinligini ko'rsatish.",
      "flags": [],
      "whenToUse": "RAG xulosalarini chiqarishda.",
      "omissionRisk": "Sikl faqat potentsial xavfni bildiradi, lekin kafolatlamaydi.",
      "syntaxExample": "yo'q"
    }
  },
  {
    "id": 25,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "RAG Tahlil Skriptini Bajarish (02_rag_analyzer.py)",
    "story": "RAG grafigidagi sikllarni avtomatik topuvchi Python skriptini sinab ko'ring.",
    "task": "02_rag_analyzer.py dasturini terminalda bajaring.",
    "canonical": "python3 02_rag_analyzer.py",
    "accepted": [
      "python3 02_rag_analyzer.py",
      "python 02_rag_analyzer.py"
    ],
    "tags": [
      "#RAG_RUN",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Grafdagi bog'liqliklar va sikllarni terminalda chiqarish.",
      "flags": [],
      "whenToUse": "RAG topshiriqlarini avtomatlashtirilgan tarzda baholashda.",
      "omissionRisk": "Skript bajarilmasa graf tugunlari ko'rinmaydi.",
      "syntaxExample": "python3 02_rag_analyzer.py"
    }
  },
  {
    "id": 26,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Topologik Saralash (Topological Sort)",
    "story": "Yo'naltirilgan grafda sikl yo'qligini isbotlash uchun barcha tugunlarni ketma-ket joylashtiruvchi algoritm.",
    "task": "Ushbu saralash algoritmini yozing.",
    "canonical": "Topological Sort",
    "accepted": [
      "Topological Sort",
      "topological sort",
      "topologik saralash"
    ],
    "tags": [
      "#TOPOLOGICAL_SORT",
      "#DAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Graf DAG (Directed Acyclic Graph) ekanligini tekshirish.",
      "flags": [],
      "whenToUse": "Deadlock yo'qligini matematik isbotlashda.",
      "omissionRisk": "Agar saralash to'liq tugamasa grafda sikl bor.",
      "syntaxExample": "Topological Sort"
    }
  },
  {
    "id": 27,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Tarjan Algoritmi",
    "story": "Grafdagi kuchli bog'langan komponentlarni (SCC) va sikllarni chiziqli vaqtda ($O(V+E)$) topuvchi mashhur algoritm.",
    "task": "Ushbu algoritm muallifini yozing.",
    "canonical": "Tarjan",
    "accepted": [
      "Tarjan",
      "Tarjan algorithm",
      "tarjan"
    ],
    "tags": [
      "#TARJAN",
      "#SCC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Grafdagi barcha sikllarni tezkor aniqlash.",
      "flags": [],
      "whenToUse": "Katta tizimlarda deteksiya o'tkazishda.",
      "omissionRisk": "DFS ga asoslangan.",
      "syntaxExample": "Tarjan"
    }
  },
  {
    "id": 28,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Grafni Qisqartirish (Graph Reduction)",
    "story": "Barcha talablari qondirilishi mumkin bo'lgan jarayonlarni va ularning qirralarini grafdan o'chirib borish amali.",
    "task": "Bu jarayon nima deb ataladi?",
    "canonical": "Graph Reduction",
    "accepted": [
      "Graph Reduction",
      "graph reduction",
      "grafni qisqartirish"
    ],
    "tags": [
      "#GRAPH_REDUCTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Grafni bosqichma-bosqich bo'shatib borish orqali deadlockni topish.",
      "flags": [],
      "whenToUse": "Deteksiya algoritmlarida.",
      "omissionRisk": "Agar graf to'liq o'chib ketsa deadlock yo'q.",
      "syntaxExample": "Graph Reduction"
    }
  },
  {
    "id": 29,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "To'liq Qisqartiriladigan Graf (Completely Reducible)",
    "story": "Agar grafdagi barcha tugunlar bosqichma-bosqich muvaffaqiyatli o'chirib bo'linsa, bu tizimda deadlock bormi?",
    "task": "Tizimda deadlock bormi? (yo'q / bor)",
    "canonical": "yo'q",
    "accepted": [
      "yo'q",
      "yoq",
      "no"
    ],
    "tags": [
      "#COMPLETELY_REDUCIBLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Graf to'liq qisqarsa deadlock mutlaqo yo'qligini ko'rsatish.",
      "flags": [],
      "whenToUse": "Tizim xavfsizligini tasdiqlashda.",
      "omissionRisk": "Qisqarmay qolgan tugunlar bo'lsa deadlock bor.",
      "syntaxExample": "yo'q"
    }
  },
  {
    "id": 30,
    "sectorId": 2,
    "sectorTitle": "Resurs Taqsimoti Grafigi (RAG) & Sikl Tahlili",
    "title": "Siklsiz Graf Kafolati",
    "story": "Agar RAG da umuman hech qanday sikl bo'lmasa, tizim holati qanday bo'ladi?",
    "task": "Tizim xavfsizmi? (Xavfsiz / Deadlock)",
    "canonical": "Xavfsiz",
    "accepted": [
      "Xavfsiz",
      "xavfsiz",
      "safe"
    ],
    "tags": [
      "#NO_CYCLE",
      "#SAFE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sikl bo'lmasligi deadlock yo'qligining 100% kafolati ekanligini bilish.",
      "flags": [],
      "whenToUse": "Barcha resurs modellarida.",
      "omissionRisk": "Sikl yo'q = Deadlock yo'q.",
      "syntaxExample": "Xavfsiz"
    }
  },
  {
    "id": 31,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Tupikning Oldini Olish (Deadlock Prevention)",
    "story": "L09 Prevention: Tizim qoidalarini shunday loyihalashki, 4 ta Coffman shartlaridan kamida bittasi hech qachon yuzaga kela olmasin.",
    "task": "Ushbu strategiya nomini yozing.",
    "canonical": "Deadlock Prevention",
    "accepted": [
      "Deadlock Prevention",
      "deadlock prevention",
      "prevention"
    ],
    "tags": [
      "#PREVENTION",
      "#COFFMAN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock paydo bo'lish ehtimolini qat'iy qoidalar bilan 0 ga tushirish.",
      "flags": [],
      "whenToUse": "Tizim arxitekturasini yaratishda.",
      "omissionRisk": "Resurslardan foydalanish samaradorligini pasaytirishi mumkin.",
      "syntaxExample": "Deadlock Prevention"
    }
  },
  {
    "id": 32,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Mutual Exclusion ni Yo'qotish Usuli: Spooling",
    "story": "Printer kabi eksklyuziv qurilmalarni umumiy qilish uchun barcha chop etish topshiriqlari diskdagi navbatga yoziladi.",
    "task": "Bu buferlash texnologiyasi nima deb ataladi?",
    "canonical": "Spooling",
    "accepted": [
      "Spooling",
      "spooling"
    ],
    "tags": [
      "#SPOOLING",
      "#MUTUAL_EXCLUSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jismoniy resursni dasturiy navbat orqali virtuallashtirish.",
      "flags": [],
      "whenToUse": "Printer va sekin tashqi qurilmalarda.",
      "omissionRisk": "Faqat ma'lum turdagi qurilmalarda ishlaydi, umumiy xotirada emas.",
      "syntaxExample": "Spooling"
    }
  },
  {
    "id": 33,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Faqat O'qiladigan Resurslar (Read-Only)",
    "story": "Faqat o'qiladigan fayllar uchun o'zaro istisno talab qilinadimi?",
    "task": "Read-only resurslar uchun Mutex kerakmi? (kerak emas / kerak)",
    "canonical": "kerak emas",
    "accepted": [
      "kerak emas",
      "yo'q",
      "no"
    ],
    "tags": [
      "#READ_ONLY",
      "#SHARABLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bir nechta jarayonlar bir vaqtda o'qiy olishi.",
      "flags": [],
      "whenToUse": "Statik fayllar va umumiy konstantalarda.",
      "omissionRisk": "Hech qanday o'zgarish bo'lmagani sababli race condition ham bo'lmaydi.",
      "syntaxExample": "kerak emas"
    }
  },
  {
    "id": 34,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Hold and Wait ni Yo'qotish: All-or-Nothing",
    "story": "Jarayon o'z ishini boshlashidan oldin barcha kerak bo'ladigan resurslarni birdaniga so'rashi shart.",
    "task": "Bu protokol qanday nomlanadi?",
    "canonical": "All-or-Nothing",
    "accepted": [
      "All-or-Nothing",
      "all or nothing",
      "all-or-none"
    ],
    "tags": [
      "#ALL_OR_NOTHING",
      "#HOLD_AND_WAIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon resurslarni ushlab turib yangisini kutishiga yo'l qo'ymaslik.",
      "flags": [],
      "whenToUse": "Kichik va aniq vazifalarda.",
      "omissionRisk": "Resurslar uzoq vaqt behuda band bo'lib turadi (past utilizatsiya).",
      "syntaxExample": "All-or-Nothing"
    }
  },
  {
    "id": 35,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "All-or-Nothing ning Salbiy Oqibati",
    "story": "Jarayon oxirida ishlatadigan printerni ham boshida band qilib qo'ygani sababli printer bo'sh yotadi. Bu qanday muammo?",
    "task": "Resurslarning past ishlatilish darajasini yozing.",
    "canonical": "Past utilizatsiya",
    "accepted": [
      "Past utilizatsiya",
      "low utilization",
      "starvation"
    ],
    "tags": [
      "#LOW_UTILIZATION",
      "#TRADEOFF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Prevention qoidalarining salbiy tomonini tushunish.",
      "flags": [],
      "whenToUse": "Tizim optimizatsiyasida.",
      "omissionRisk": "Boshqa jarayonlar keraksiz kutib qoladi.",
      "syntaxExample": "Past utilizatsiya"
    }
  },
  {
    "id": 36,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "No Preemption ni Yo'qotish Protokoli",
    "story": "Agar jarayon yangi resurs so'rasa va u hozir band bo'lsa, jarayon o'zi ushlab turgan barcha resurslarini bo'shatishi shart.",
    "task": "Ushbu majburiy bo'shatish nima deyiladi?",
    "canonical": "Preemption",
    "accepted": [
      "Preemption",
      "preemption",
      "resurslarni tortib olish"
    ],
    "tags": [
      "#PREEMPTION",
      "#NO_PREEMPTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ushlab turilgan resurslarni majburan boshqalarga berish.",
      "flags": [],
      "whenToUse": "Holati oson saqlanadigan resurslarda.",
      "omissionRisk": "Jarayon keyinroq barcha resurslarni qaytadan so'raydi.",
      "syntaxExample": "Preemption"
    }
  },
  {
    "id": 37,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Preemption Qaysi Resurs Uchun Eng Mos?",
    "story": "Holati xotiraga (PCB) oson saqlanib qayta tiklanadigan resurs.",
    "task": "Ushbu apparat resursini yozing (CPU / Printer).",
    "canonical": "CPU",
    "accepted": [
      "CPU",
      "cpu",
      "xotira",
      "memory"
    ],
    "tags": [
      "#CPU",
      "#PREEMPTION_TARGET"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kontekst almashinuvi orqali oson tortib olinadigan resurs.",
      "flags": [],
      "whenToUse": "Vaqt bo'laklari (time sharing) tizimlarida.",
      "omissionRisk": "Printerda esa qog'oz yarmida yirtilib ketganidek buziladi.",
      "syntaxExample": "CPU"
    }
  },
  {
    "id": 38,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Preemption Nega Printer Uchun Mos Emas?",
    "story": "Agar 50 sahifalik hujjatning 25-sahifasida boshqa jarayon printerni tortib olsa nima yuz beradi?",
    "task": "Hujjat chop etilishi buziladi. Bu holat sababi nima?",
    "canonical": "Holatni saqlab bo'lmaydi",
    "accepted": [
      "Holatni saqlab bo'lmaydi",
      "buziladi",
      "state cannot be saved"
    ],
    "tags": [
      "#PRINTER",
      "#NON_PREEMPTIBLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ba'zi apparat resurslari preemptionga mutlaqo yaroqsizligini ko'rsatish.",
      "flags": [],
      "whenToUse": "Arxitektura tahlilida.",
      "omissionRisk": "Fizik qurilmalarda preemption qilib bo'lmaydi.",
      "syntaxExample": "Holatni saqlab bo'lmaydi"
    }
  },
  {
    "id": 39,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Circular Wait ni Yo'qotish: Resurslarni Qat'iy Tartiblash",
    "story": "Barcha resurs turlariga unikal butun sonlar (1, 2, 3...) beriladi va oqim faqat o'zidagidan katta raqamni so'rashi mumkin.",
    "task": "Ushbu mashhur yechim nomini yozing.",
    "canonical": "Resource Ordering",
    "accepted": [
      "Resource Ordering",
      "resource ordering",
      "lock ordering"
    ],
    "tags": [
      "#RESOURCE_ORDERING",
      "#CIRCULAR_WAIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Doiraviy kutish zanjiri hosil bo'lishini matematik jihatdan imkonsiz qilish.",
      "flags": [],
      "whenToUse": "Eng amaliy va eng keng qo'llaniladigan Prevention usuli.",
      "omissionRisk": "Barcha dasturchilar qat'iy shu tartibga rioya qilishi shart.",
      "syntaxExample": "Resource Ordering"
    }
  },
  {
    "id": 40,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Tartiblash Funksiyasi Formulasi",
    "story": "Har bir resurs R uchun natural son qaytaruvchi in'ektiv in'ektsiya funksiyasi.",
    "task": "Funksiya ifodasini yozing.",
    "canonical": "F(R)",
    "accepted": [
      "F(R)",
      "F(Ri)",
      "f(r)"
    ],
    "tags": [
      "#ORDERING_FUNCTION",
      "#MATH"
    ],
    "flagAnatomy": {
      "commandPurpose": "Resurslarga butun sonli daraja beruvchi matematik funksiya.",
      "flags": [],
      "whenToUse": "Havender teoremasida.",
      "omissionRisk": "Bir xil darajadagi resurslar birdaniga so'ralishi kerak.",
      "syntaxExample": "F(R)"
    }
  },
  {
    "id": 41,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Havender Protokoli (1968)",
    "story": "Resurslarni ierarxik tartiblash orqali Circular Wait ni bartaraf etishni ilk bor ilgari surgan olim.",
    "task": "Olim nomini yozing.",
    "canonical": "Havender",
    "accepted": [
      "Havender",
      "J. W. Havender",
      "havender"
    ],
    "tags": [
      "#HAVENDER",
      "#PIONEER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ierarxik resurs taqsimoti asoschisi.",
      "flags": [],
      "whenToUse": "Tarixiy va nazariy asoslarda.",
      "omissionRisk": "IBM OS/360 tizimlarida ilk bor sinovdan o'tgan.",
      "syntaxExample": "Havender"
    }
  },
  {
    "id": 42,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Eng Amaliy Prevention Usuli Qaysi?",
    "story": "4 ta shartdan qaysi birini yo'qotish zamonaviy dasturlashda eng ko'p qo'llaniladi?",
    "task": "Shart nomini yozing.",
    "canonical": "Circular Wait",
    "accepted": [
      "Circular Wait",
      "circular wait",
      "halqasimon kutish"
    ],
    "tags": [
      "#MOST_PRACTICAL",
      "#CIRCULAR_WAIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Lock Ordering orqali Circular Wait ni yo'qotish dastur darajasida eng qulay ekanligini bilish.",
      "flags": [],
      "whenToUse": "Java, C++, Python tizimlarida qulflarni tartiblashda.",
      "omissionRisk": "Boshqa 3 ta shartni yo'qotish juda qimmatga tushadi.",
      "syntaxExample": "Circular Wait"
    }
  },
  {
    "id": 43,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Dasturchilar Xatosi: Tartibni Buzish",
    "story": "Agar 1-dasturchi Lock1 keyin Lock2 olsa, 2-dasturchi esa Lock2 keyin Lock1 olsa nima yuz beradi?",
    "task": "Xavfli oqibatni yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock"
    ],
    "tags": [
      "#INCONSISTENT_ORDERING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qulflash tartibining buzilishi to'g'ridan-to'g'ri tupikka olib kelishini ko'rsatish.",
      "flags": [],
      "whenToUse": "Kod auditida (Code Review).",
      "omissionRisk": "Barcha jamoa a'zolari bir xil tartibga bo'ysunishi shart.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 44,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Prevention Strategiyasining Asosiy Kamchiligi",
    "story": "Tizim kafolatlangan xavfsiz bo'lsa-da, qoidalar qat'iyligi sababli umumiy tezlik va erkinlik tushadi.",
    "task": "Kamchilikni umumiy ma'noda yozing.",
    "canonical": "Past unumdorlik",
    "accepted": [
      "Past unumdorlik",
      "past samaradorlik",
      "low throughput"
    ],
    "tags": [
      "#PREVENTION_OVERHEAD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xavfsizlik va tezlik orasidagi murosa (trade-off).",
      "flags": [],
      "whenToUse": "Tizim loyihalashda.",
      "omissionRisk": "O'ta qattiq cheklovlar dastur imkoniyatlarini chegaralaydi.",
      "syntaxExample": "Past unumdorlik"
    }
  },
  {
    "id": 45,
    "sectorId": 3,
    "sectorTitle": "Tupikning Oldini Olish (Deadlock Prevention)",
    "title": "Statik Tekshiruv (Static Analysis)",
    "story": "Qulflash tartibi to'g'riligini dastur ishga tushmasdan oldin kodni tahlil qilib tekshirish.",
    "task": "Bunday tekshiruv usulini yozing.",
    "canonical": "Static Analysis",
    "accepted": [
      "Static Analysis",
      "static analysis",
      "statik tahlil"
    ],
    "tags": [
      "#STATIC_ANALYSIS",
      "#LINTER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock xavflarini kompilyatsiya paytida fosh qilish.",
      "flags": [],
      "whenToUse": "CI/CD konveyerlarida.",
      "omissionRisk": "Dinamik chaqiruvlarni har doim ham to'liq aniqlay olmasligi mumkin.",
      "syntaxExample": "Static Analysis"
    }
  },
  {
    "id": 46,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Tupikdan Qochish (Deadlock Avoidance)",
    "story": "L09 Avoidance: Resurs berishdan oldin tizim bu so'rov uni xavfli holatga (unsafe state) tushirmasligini dinamik tekshiradi.",
    "task": "Ushbu strategiya nomini yozing.",
    "canonical": "Deadlock Avoidance",
    "accepted": [
      "Deadlock Avoidance",
      "deadlock avoidance",
      "avoidance"
    ],
    "tags": [
      "#AVOIDANCE",
      "#DYNAMIC_CHECK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir so'rovni dinamik baholash orqali xavfli holatlardan qochish.",
      "flags": [],
      "whenToUse": "Jarayonlarning maksimal ehtiyojlari oldindan ma'lum bo'lganda.",
      "omissionRisk": "Prevention kabi qat'iy cheklovlar qo'ymaydi, resurslardan yaxshiroq foydalanadi.",
      "syntaxExample": "Deadlock Avoidance"
    }
  },
  {
    "id": 47,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Xavfsiz Holat (Safe State)",
    "story": "Tizimda barcha jarayonlarning maksimal talabini qondira oladigan kamida bitta xavfsiz ketma-ketlik mavjud bo'lgan holat.",
    "task": "Ushbu holat nomini yozing.",
    "canonical": "Safe State",
    "accepted": [
      "Safe State",
      "safe state",
      "xavfsiz holat"
    ],
    "tags": [
      "#SAFE_STATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock 100% yuz bermasligi kafolatlangan holat.",
      "flags": [],
      "whenToUse": "Avoidance algoritmlarining asosiy maqsadi.",
      "omissionRisk": "Xavfsiz holatda kamida bitta Safe Sequence mavjud bo'ladi.",
      "syntaxExample": "Safe State"
    }
  },
  {
    "id": 48,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Xavfli Holat (Unsafe State)",
    "story": "Tizimda barcha jarayonlarni oxirigacha yetkaza oladigan kafolatlangan ketma-ketlik mavjud bo'lmagan holat.",
    "task": "Ushbu holat nomini yozing.",
    "canonical": "Unsafe State",
    "accepted": [
      "Unsafe State",
      "unsafe state",
      "xavfli holat"
    ],
    "tags": [
      "#UNSAFE_STATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock xavfi mavjud bo'lgan holatni bildirish.",
      "flags": [],
      "whenToUse": "So'rovlarni rad etish yoki kutdirish mezonida.",
      "omissionRisk": "DIQQAT: Unsafe State har doim ham Deadlock degani emas, lekin Deadlockka olib kelishi mumkin!",
      "syntaxExample": "Unsafe State"
    }
  },
  {
    "id": 49,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Unsafe State Har Doim Deadlockmi?",
    "story": "Agar tizim Unsafe holatga o'tib qolsa, u albatta 100% Deadlock bo'ladimi yoki bu shunchaki ehtimolmi?",
    "task": "Unsafe har doim deadlockmi? (yo'q / ha)",
    "canonical": "yo'q",
    "accepted": [
      "yo'q",
      "yoq",
      "shart emas",
      "no"
    ],
    "tags": [
      "#UNSAFE_VS_DEADLOCK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Deadlock bu Unsafe holatning qism to'plami (subset) ekanligini anglash.",
      "flags": [],
      "whenToUse": "Imtihon testlarida.",
      "omissionRisk": "Agar jarayonlar maksimal talabini birdan so'ramasa unsafe holatdan eson-omon chiqib ketishi mumkin.",
      "syntaxExample": "yo'q"
    }
  },
  {
    "id": 50,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Xavfsiz Ketma-ketlik (Safe Sequence)",
    "story": "<P1, P2, ..., Pn> tartibi bo'yicha har bir jarayon o'z ehtiyojini mavjud va avvalgi bo'shagan resurslar hisobidan qondira olishi.",
    "task": "Ushbu ketma-ketlik nomi nima?",
    "canonical": "Safe Sequence",
    "accepted": [
      "Safe Sequence",
      "safe sequence",
      "xavfsiz ketma-ketlik"
    ],
    "tags": [
      "#SAFE_SEQUENCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha jarayonlarni qadamma-qadam muvaffaqiyatli tugatish rejasi.",
      "flags": [],
      "whenToUse": "Bankir algoritmining xulosasida.",
      "omissionRisk": "Agar bitta ham safe sequence topilmasa holat Unsafe hisoblanadi.",
      "syntaxExample": "Safe Sequence"
    }
  }
];
});
