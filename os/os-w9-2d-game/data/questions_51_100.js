/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 9 QUESTIONS (PART 2: 51–100)
 * Sectors: 4 (Avoidance 6-15), 5 (Banker's Algorithm: Safety), 6 (Banker's Algorithm: Request), 7 (Detection: WFG 1-10)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W9_PART2 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 51,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Oldindan Ma'lumot Talabi (A Priori Information)",
    "story": "Avoidance ishlashi uchun har bir jarayon tizimga kirishda o'zining qaysi ma'lumotini e'lon qilishi majburiy?",
    "task": "Jarayon e'lon qilishi shart bo'lgan ko'rsatkichni yozing.",
    "canonical": "Maksimal talab",
    "accepted": [
      "Maksimal talab",
      "maximum demand",
      "maksimal resurslar"
    ],
    "tags": [
      "#A_PRIORI",
      "#MAX_DEMAND"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kelajakdagi resurs talabini oldindan bilish.",
      "flags": [],
      "whenToUse": "Avoidance algoritmlarining boshlang'ich sharti sifatida.",
      "omissionRisk": "Agar maksimal talab noaniq bo'lsa avoidance algoritmini qo'llab bo'lmaydi.",
      "syntaxExample": "Maksimal talab"
    }
  },
  {
    "id": 52,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Da'vo Qirrasi (Claim Edge) Qachon Belgilanadi?",
    "story": "Jarayon kelajakda so'rashi mumkin bo'lgan barcha resurslarga qaratilgan punktir qirralar qachon grafga qo'shiladi?",
    "task": "Qirralar qachon qo'shiladi? (Ish boshlanishida / Ish oxirida)",
    "canonical": "Ish boshlanishida",
    "accepted": [
      "Ish boshlanishida",
      "boshida",
      "at start"
    ],
    "tags": [
      "#CLAIM_EDGE",
      "#INITIALIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon tizimda ro'yxatdan o'tgan onda barcha da'volarini ochiq ko'rsatishi.",
      "flags": [],
      "whenToUse": "RAG avoidance modelida.",
      "omissionRisk": "Boshida kiritilmasa keyinchalik dinamik da'vo qo'shish qiyinlashadi.",
      "syntaxExample": "Ish boshlanishida"
    }
  },
  {
    "id": 53,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "RAG da Avoidance Qoidasi",
    "story": "So'rov qirrasini taqsimot qirrasiga aylantirish faqat nima hosil bo'lmagan taqdirdagina amalga oshiriladi?",
    "task": "Grafda nima paydo bo'lmasligi kerak?",
    "canonical": "Sikl",
    "accepted": [
      "Sikl",
      "sikl hosil bo'lmasligi",
      "cycle"
    ],
    "tags": [
      "#CYCLE_CHECK",
      "#RAG_AVOIDANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yangi taqsimot grafda yopiq halqa hosil qilmasligini kafolatlash.",
      "flags": [],
      "whenToUse": "Har bir resurs berish arafasida.",
      "omissionRisk": "Agar sikl hosil bo'lsa so'rov rad etiladi va jarayon kutdiriladi.",
      "syntaxExample": "Sikl"
    }
  },
  {
    "id": 54,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Konservativ Yondashuv",
    "story": "Avoidance ba'zida tizimda bo'sh resurs bo'lsa ham, kelajakda xavf tug'ilishi mumkinligi sababli jarayonni kutdirib qo'yadi. Bu qanday xususiyat?",
    "task": "Ushbu ehtiyotkorona xarakterni yozing.",
    "canonical": "Konservativ",
    "accepted": [
      "Konservativ",
      "konservativ",
      "conservative"
    ],
    "tags": [
      "#CONSERVATIVE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har qanday shubhali unsafe holatga yo'l qo'ymaslik.",
      "flags": [],
      "whenToUse": "Xavfsizlik 1-o'rinda bo'lgan tizimlarda.",
      "omissionRisk": "Jarayonlar keraksiz kutib qolishi mumkin.",
      "syntaxExample": "Konservativ"
    }
  },
  {
    "id": 55,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Bankir Algoritmi Asoschisi",
    "story": "Ko'p nusxali resurslar uchun Avoidance algoritmini ishlab chiqqan gollandiyalik buyuk olim.",
    "task": "Olim familiyasini yozing.",
    "canonical": "Dijkstra",
    "accepted": [
      "Dijkstra",
      "Edsger Dijkstra",
      "dijkstra"
    ],
    "tags": [
      "#DIJKSTRA",
      "#BANKER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Banker's Algorithm muallifi.",
      "flags": [],
      "whenToUse": "OS fani tarixida.",
      "omissionRisk": "1965 yilda THE multiprogramming system uchun yaratilgan.",
      "syntaxExample": "Dijkstra"
    }
  },
  {
    "id": 56,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Bankir Analogiyasi Nima?",
    "story": "Kichik shahar bankiri mavjud naqd pullari bilan barcha mijozlarining kredit liniyalarini navbat bilan yopib bera olishi.",
    "task": "Ushbu algoritm nomi nima?",
    "canonical": "Banker's Algorithm",
    "accepted": [
      "Banker's Algorithm",
      "banker's algorithm",
      "bankir algoritmi"
    ],
    "tags": [
      "#BANKERS_ALGORITHM",
      "#ANALOGY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Moliyaviy likvidlik tamoyilini resurs taqsimotiga ko'chirish.",
      "flags": [],
      "whenToUse": "Bankir algoritmini tushuntirishda.",
      "omissionRisk": "Kassada yetarli pul bo'lmasa yangi kredit berilmaydi.",
      "syntaxExample": "Banker's Algorithm"
    }
  },
  {
    "id": 57,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Yagona Nusxali Resurslar Uchun Avoidance",
    "story": "Agar barcha resurslar 1 ta nusxali bo'lsa Bankir algoritmi shart emas, uning o'rniga nima yetarli?",
    "task": "Vosita nomini yozing.",
    "canonical": "RAG",
    "accepted": [
      "RAG",
      "Resource Allocation Graph",
      "rag"
    ],
    "tags": [
      "#RAG_FOR_AVOIDANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sikllarni tekshirish orqali oddiy va tezkor qochishni ta'minlash.",
      "flags": [],
      "whenToUse": "Single-unit tizimlarda.",
      "omissionRisk": "Bankir algoritmidan ancha yengilroq hisoblanadi.",
      "syntaxExample": "RAG"
    }
  },
  {
    "id": 58,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Ko'p Nusxali Resurslar Uchun Avoidance",
    "story": "Agar resurslar bir nechta nusxali (masalan, 3 ta disk, 4 ta lenta) bo'lsa qaysi algoritm qo'llaniladi?",
    "task": "Algoritm nomini yozing.",
    "canonical": "Banker's Algorithm",
    "accepted": [
      "Banker's Algorithm",
      "banker",
      "bankir algoritmi"
    ],
    "tags": [
      "#MULTI_INSTANCE_AVOIDANCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Matritsali hisob-kitoblar orqali xavfsizlikni tekshirish.",
      "flags": [],
      "whenToUse": "Multi-instance tizimlarda.",
      "omissionRisk": "RAG bu yerda yetarli bo'lmaydi.",
      "syntaxExample": "Banker's Algorithm"
    }
  },
  {
    "id": 59,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Avoidance va Prevention Farqi",
    "story": "Prevention qat'iy qoidalar orqali shartlarni yo'qotadi. Avoidance esa nima qiladi?",
    "task": "Avoidance usulini yozing (Dinamik tekshiradi / Statik taqiqlaydi).",
    "canonical": "Dinamik tekshiradi",
    "accepted": [
      "Dinamik tekshiradi",
      "dinamik",
      "dynamically checks"
    ],
    "tags": [
      "#AVOIDANCE_VS_PREVENTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Avoidance har bir so'rov arafasida dinamik tekshiruv o'tkazishini ko'rsatish.",
      "flags": [],
      "whenToUse": "Strategiyalarni taqqoslashda.",
      "omissionRisk": "Dinamik tekshiruv har safar qo'shimcha hisoblash yukini talab qiladi.",
      "syntaxExample": "Dinamik tekshiradi"
    }
  },
  {
    "id": 60,
    "sectorId": 4,
    "sectorTitle": "Tupikdan Qochish (Deadlock Avoidance) & Xavfsiz Holat",
    "title": "Xavfsiz Holat Kafolati",
    "story": "Tizim doimo xavfsiz holatda (Safe State) ushlab turilsa Deadlock sodir bo'lish ehtimoli nechaga teng?",
    "task": "Ehtimollikni raqamda yozing (0% / 50% / 100%).",
    "canonical": "0%",
    "accepted": [
      "0%",
      "0",
      "nol"
    ],
    "tags": [
      "#ZERO_RISK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xavfsiz holatda deadlock bo'lishi mutlaqo imkonsiz ekanligini ta'kidlash.",
      "flags": [],
      "whenToUse": "Nazariy xulosalarda.",
      "omissionRisk": "Hech qanday deadlock bo'lmaydi.",
      "syntaxExample": "0%"
    }
  },
  {
    "id": 61,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Mavjud Resurslar Vektori (Available)",
    "story": "L09 Banker: Har bir turdagi erkin bo'sh turgan resurslar sonini saqlovchi m o'lchamli vektor.",
    "task": "Ushbu vektor nomini yozing.",
    "canonical": "Available",
    "accepted": [
      "Available",
      "available"
    ],
    "tags": [
      "#AVAILABLE",
      "#BANKER_DATA_STRUCTURE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ayni damda hech qaysi jarayonga berilmagan bo'sh resurslar soni.",
      "flags": [],
      "whenToUse": "Safety va Request algoritmlarida.",
      "omissionRisk": "Agar Available bo'shasa yangi so'rovlar qondirilmaydi.",
      "syntaxExample": "Available"
    }
  },
  {
    "id": 62,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Maksimal Talab Matritsasi (Max)",
    "story": "Har bir jarayon o'z hayoti davomida so'rashi mumkin bo'lgan maksimal resurslar matritsasi (n x m).",
    "task": "Ushbu matritsa nomini yozing.",
    "canonical": "Max",
    "accepted": [
      "Max",
      "max"
    ],
    "tags": [
      "#MAX_MATRIX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir jarayonning maksimal talab shiftini belgilash.",
      "flags": [],
      "whenToUse": "Need matritsasini hisoblashda.",
      "omissionRisk": "Max dan ortiq resurs so'ralsa xato beriladi.",
      "syntaxExample": "Max"
    }
  },
  {
    "id": 63,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Taqsimlangan Resurslar Matritsasi (Allocation)",
    "story": "Hozirgi paytda har bir jarayonga haqiqatda ajratib berilgan resurslar matritsasi (n x m).",
    "task": "Ushbu matritsa nomini yozing.",
    "canonical": "Allocation",
    "accepted": [
      "Allocation",
      "allocation"
    ],
    "tags": [
      "#ALLOCATION_MATRIX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonlar ushlab turgan joriy resurslarni ko'rsatish.",
      "flags": [],
      "whenToUse": "Jarayon tugagach Available ga qaytariladigan miqdorni bilishda.",
      "omissionRisk": "Jarayon boshida barchasi 0 bo'ladi.",
      "syntaxExample": "Allocation"
    }
  },
  {
    "id": 64,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Qo'shimcha Ehtiyoj Matritsasi (Need)",
    "story": "Jarayon o'z ishini yakunlashi uchun unga yana qancha resurs kerakligini ifodalovchi matritsa.",
    "task": "Ushbu matritsa nomini yozing.",
    "canonical": "Need",
    "accepted": [
      "Need",
      "need"
    ],
    "tags": [
      "#NEED_MATRIX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonning qolgan barcha ehtiyojlarini hisoblash.",
      "flags": [],
      "whenToUse": "Safety algoritmidagi asosiy solishtirish mezoni.",
      "omissionRisk": "Max dan Allocation ayrilib topiladi.",
      "syntaxExample": "Need"
    }
  },
  {
    "id": 65,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Need Matritsasini Hisoblash Formulasi",
    "story": "Need[i][j] ni topish uchun Max[i][j] dan nimani ayirish kerak?",
    "task": "Formulani yozing.",
    "canonical": "Max[i][j] - Allocation[i][j]",
    "accepted": [
      "Max[i][j] - Allocation[i][j]",
      "Max - Allocation",
      "Max[i] - Allocation[i]"
    ],
    "tags": [
      "#NEED_FORMULA",
      "#MATH"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qolgan resurs talabini aniq hisoblash.",
      "flags": [],
      "whenToUse": "Bankir algoritmini ishga tushirishdan oldin.",
      "omissionRisk": "Need doimo musbat yoki 0 bo'lishi shart.",
      "syntaxExample": "Max[i][j] - Allocation[i][j]"
    }
  },
  {
    "id": 66,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Vaqtinchalik Ishchi Vektor (Work)",
    "story": "Xavfsizlik algoritmi davomida mavjud resurslarning o'zgarishini kuzatib boruvchi vaqtinchalik vektor.",
    "task": "Ushbu vektor nomini yozing.",
    "canonical": "Work",
    "accepted": [
      "Work",
      "work"
    ],
    "tags": [
      "#WORK_VECTOR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Hisob boshida Work = Available deb olinadi.",
      "flags": [],
      "whenToUse": "Safety tekshiruvida.",
      "omissionRisk": "Asl Available vektorini buzmasdan simulyatsiya qilish uchun kerak.",
      "syntaxExample": "Work"
    }
  },
  {
    "id": 67,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Tugatish Bayrog'i Vektori (Finish)",
    "story": "Barcha n ta jarayon uchun dastlab False qiymatiga ega bo'lgan, jarayon o'z ishini tugatganini bildiruvchi mantiqiy vektor.",
    "task": "Ushbu vektor nomini yozing.",
    "canonical": "Finish",
    "accepted": [
      "Finish",
      "finish"
    ],
    "tags": [
      "#FINISH_VECTOR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qaysi jarayonlar o'z ishini tugata olganini belgilash.",
      "flags": [],
      "whenToUse": "Boshida barcha Finish[i] = False bo'ladi.",
      "omissionRisk": "Oxirida barchasi True bo'lsa tizim Safe bo'ladi.",
      "syntaxExample": "Finish"
    }
  },
  {
    "id": 68,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Xavfsizlik Qadami Sharti (Safety Condition)",
    "story": "Navbatdagi jarayon Pi ni tanlash uchun uning Finish[i] == False bo'lishi va Need[i] qaysi vektordan kichik yoki teng bo'lishi kerak?",
    "task": "Solishtiriladigan vektor nomini yozing.",
    "canonical": "Work",
    "accepted": [
      "Work",
      "work",
      "Need[i] <= Work"
    ],
    "tags": [
      "#SAFETY_CONDITION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud bo'sh resurslar ushbu jarayonning barcha talabini qondira olishini tekshirish.",
      "flags": [],
      "whenToUse": "Har bir iteratsiyada mos jarayon qidirishda.",
      "omissionRisk": "Agar Need > Work bo'lsa bu jarayon hozircha kutishi kerak.",
      "syntaxExample": "Work"
    }
  },
  {
    "id": 69,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Work Vektorini Yangilash Formulasi",
    "story": "Tanlangan jarayon Pi o'z ishini tugatgach, o'zi ushlab turgan resurslarni bo'shatadi. Work qanday yangilanadi?",
    "task": "Work yangilanish formulasini yozing.",
    "canonical": "Work = Work + Allocation[i]",
    "accepted": [
      "Work = Work + Allocation[i]",
      "Work + Allocation[i]",
      "Work += Allocation[i]"
    ],
    "tags": [
      "#WORK_UPDATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon ishini yakunlab barcha resurslarini umumiy xazinaga qaytarishi.",
      "flags": [],
      "whenToUse": "Finish[i] = True qilingan paytda.",
      "omissionRisk": "Work kattalashib keyingi kattaroq jarayonlarga yo'l ochiladi.",
      "syntaxExample": "Work = Work + Allocation[i]"
    }
  },
  {
    "id": 70,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Xavfsiz Yakunlash Sharti",
    "story": "Agar barcha jarayonlar uchun Finish[i] == True bo'lsa, tizim holati qanday deb topiladi?",
    "task": "Holat nomini yozing.",
    "canonical": "Safe State",
    "accepted": [
      "Safe State",
      "safe",
      "xavfsiz holat"
    ],
    "tags": [
      "#SAFE_STATE_RESULT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha jarayonlar muvaffaqiyatli yakunlanishini tasdiqlash.",
      "flags": [],
      "whenToUse": "Safety algoritmining muvaffaqiyatli yakunida.",
      "omissionRisk": "Topilgan tartib Safe Sequence bo'ladi.",
      "syntaxExample": "Safe State"
    }
  },
  {
    "id": 71,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Xavfsizlik Algoritmining Vaqt Murakkabligi",
    "story": "m ta resurs va n ta jarayon uchun Safety algoritmining asimptotik vaqt murakkabligi nechaga teng?",
    "task": "Katta O notasini yozing.",
    "canonical": "O(m * n^2)",
    "accepted": [
      "O(m * n^2)",
      "O(m*n^2)",
      "O(m * n^2)"
    ],
    "tags": [
      "#TIME_COMPLEXITY",
      "#BIG_O"
    ],
    "flagAnatomy": {
      "commandPurpose": "Banker's Safety algoritmining hisoblash yukini ifodalash.",
      "flags": [],
      "whenToUse": "Algoritm samaradorligini tahlil qilishda.",
      "omissionRisk": "Jarayonlar soni oshgan sari kvadratik o'sadi.",
      "syntaxExample": "O(m * n^2)"
    }
  },
  {
    "id": 72,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Bankir Algoritmi Skriptini Bajarish (03_bankers_algo.py)",
    "story": "Bankir algoritmining to'liq Safety va Request hisoblarini terminalda sinab ko'ring.",
    "task": "03_bankers_algo.py dasturini ishga tushiring.",
    "canonical": "python3 03_bankers_algo.py",
    "accepted": [
      "python3 03_bankers_algo.py",
      "python 03_bankers_algo.py"
    ],
    "tags": [
      "#BANKER_RUN",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "Matritsalar asosida Safe Sequence hisoblashni terminalda ko'rish.",
      "flags": [],
      "whenToUse": "Amaliy topshiriqlarni tekshirishda.",
      "omissionRisk": "Skript bajarilmasa oraliq qadamlar ko'rinmaydi.",
      "syntaxExample": "python3 03_bankers_algo.py"
    }
  },
  {
    "id": 73,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Agar Mos Jarayon Topilmasa?",
    "story": "Agar hali Finish[i] == False bo'lgan jarayonlar qolgan bo'lsa, lekin ularning hech birining Need[i] <= Work sharti bajarilmasa nima bo'ladi?",
    "task": "Tizim holati nima deb e'lon qilinadi?",
    "canonical": "Unsafe State",
    "accepted": [
      "Unsafe State",
      "unsafe",
      "xavfli holat"
    ],
    "tags": [
      "#UNSAFE_RESULT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xavfsiz ketma-ketlik mavjud emasligini e'lon qilish.",
      "flags": [],
      "whenToUse": "Resurs yetishmovchiligi vujudga kelganda.",
      "omissionRisk": "So'rov rad etiladi.",
      "syntaxExample": "Unsafe State"
    }
  },
  {
    "id": 74,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Bitta Safe Sequence Yetarlimi?",
    "story": "Tizimni xavfsiz (Safe State) deb hisoblash uchun barcha mumkin bo'lgan kombinatsiyalarni topish shartmi yoki 1 ta topsa yetarlimi?",
    "task": "Nechta Safe Sequence topish yetarli? (1 ta / Hammasi)",
    "canonical": "1 ta",
    "accepted": [
      "1 ta",
      "bitta",
      "1"
    ],
    "tags": [
      "#SINGLE_SEQUENCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kamida bitta xavfsiz yo'l mavjudligi xavfsizlikni kafolatlashi.",
      "flags": [],
      "whenToUse": "Algoritm ishlashini erta to'xtatishda (Early return).",
      "omissionRisk": "Bitta topilsa qolganlarini qidirish shart emas.",
      "syntaxExample": "1 ta"
    }
  },
  {
    "id": 75,
    "sectorId": 5,
    "sectorTitle": "Bankir Algoritmi: Xavfsizlik Algoritmi (Safety)",
    "title": "Bankir Algoritmi Xavfsizlik Kafolati",
    "story": "Bankir algoritmining Safety tekshiruvidan o'tgan tizimda deadlock bo'lishi mumkinmi?",
    "task": "Deadlock bo'lishi mumkinmi? (mumkin emas / mumkin)",
    "canonical": "mumkin emas",
    "accepted": [
      "mumkin emas",
      "yo'q",
      "no"
    ],
    "tags": [
      "#GUARANTEE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Banker's algoritmining mutlaq matematik kafolatini tasdiqlash.",
      "flags": [],
      "whenToUse": "Imtihon savollarida.",
      "omissionRisk": "Tizim doimo safe state da saqlanadi.",
      "syntaxExample": "mumkin emas"
    }
  },
  {
    "id": 76,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Resurs So'rov Vektori (Request)",
    "story": "L09 Resource-Request: Pi jarayoni tomonidan ayni paytda qo'shimcha so'ralayotgan yangi resurslar vektori.",
    "task": "Ushbu vektor belgisini yozing.",
    "canonical": "Request[i]",
    "accepted": [
      "Request[i]",
      "Request",
      "request[i]"
    ],
    "tags": [
      "#REQUEST_VECTOR"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonning joriy arizasini ifodalash.",
      "flags": [],
      "whenToUse": "Bankir algoritmining so'rov qismida.",
      "omissionRisk": "Har bir so'rov 4 bosqichli tekshiruvdan o'tadi.",
      "syntaxExample": "Request[i]"
    }
  },
  {
    "id": 77,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "1-Qadam: Need Bilan Solishtirish",
    "story": "Birinchi navbatda so'rov jarayonning o'zi oldindan e'lon qilgan Need[i] chegarasidan oshib ketmaganligi tekshiriladi.",
    "task": "1-qadam tekshiruv tengsizligini yozing.",
    "canonical": "Request[i] <= Need[i]",
    "accepted": [
      "Request[i] <= Need[i]",
      "Request <= Need"
    ],
    "tags": [
      "#STEP_1",
      "#NEED_CHECK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon o'zining maksimal ehtiyojidan ko'p so'rashiga yo'l qo'ymaslik.",
      "flags": [],
      "whenToUse": "So'rov kelgan zahoti birinchi qadamda.",
      "omissionRisk": "Agar oshib ketsa xato (Error) tashlanadi.",
      "syntaxExample": "Request[i] <= Need[i]"
    }
  },
  {
    "id": 78,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Chegaradan Oshish Xatosi",
    "story": "Agar jarayon Need[i] dan ko'p resurs so'rasa nima bo'ladi?",
    "task": "Tizim xatti-harakatini yozing.",
    "canonical": "Xato beriladi",
    "accepted": [
      "Xato beriladi",
      "xato",
      "error"
    ],
    "tags": [
      "#ERROR_CONDITION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon shartnomani buzganini qayd etish ('Process has exceeded its maximum claim').",
      "flags": [],
      "whenToUse": "Dasturchi xatolarini ushlashda.",
      "omissionRisk": "So'rov qabul qilinmaydi.",
      "syntaxExample": "Xato beriladi"
    }
  },
  {
    "id": 79,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "2-Qadam: Available Bilan Solishtirish",
    "story": "So'rov qonuniy bo'lsa, tizimda ayni paytda buncha bo'sh resurs bormi-yo'qligi tekshiriladi.",
    "task": "2-qadam tengsizligini yozing.",
    "canonical": "Request[i] <= Available",
    "accepted": [
      "Request[i] <= Available",
      "Request <= Available"
    ],
    "tags": [
      "#STEP_2",
      "#AVAILABLE_CHECK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tizimda yetarli bo'sh resurslar mavjudligini tekshirish.",
      "flags": [],
      "whenToUse": "1-qadam muvaffaqiyatli o'tgach.",
      "omissionRisk": "Agar resurs yetmasa jarayon kutish holatiga o'tkaziladi.",
      "syntaxExample": "Request[i] <= Available"
    }
  },
  {
    "id": 80,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Resurs Yetishmaganda Jarayon Holati",
    "story": "Agar `Request[i] > Available` bo'lsa Pi jarayoni nima qiladi?",
    "task": "Jarayon holatini yozing.",
    "canonical": "Kutadi",
    "accepted": [
      "Kutadi",
      "kutadi (wait)",
      "wait"
    ],
    "tags": [
      "#WAIT_STATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bo'sh resurslar paydo bo'lguncha jarayonni to'xtatib turish.",
      "flags": [],
      "whenToUse": "Resurslar boshqa jarayonlar tomonidan band bo'lganda.",
      "omissionRisk": "Bu xato emas, normal kutilma holatidir.",
      "syntaxExample": "Kutadi"
    }
  },
  {
    "id": 81,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "3-Qadam: Simulyatsiya (Pretend Allocation)",
    "story": "Resurslar go'yoki berilgandek vaqtinchalik parametrlar o'zgartiriladi. Available qanday o'zgaradi?",
    "task": "Available o'zgarish formulasini yozing.",
    "canonical": "Available = Available - Request[i]",
    "accepted": [
      "Available = Available - Request[i]",
      "Available - Request[i]"
    ],
    "tags": [
      "#STEP_3",
      "#SIMULATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bo'sh resurslarni so'ralgan miqdorga kamaytirish simulyatsiyasi.",
      "flags": [],
      "whenToUse": "Xavfsizlik tekshiruvidan oldin.",
      "omissionRisk": "Agar unsafe bo'lsa yana qaytariladi.",
      "syntaxExample": "Available = Available - Request[i]"
    }
  },
  {
    "id": 82,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "3-Qadam: Allocation O'zgarishi",
    "story": "Simulyatsiyada jarayonga resurs qo'shib beriladi. Allocation qanday o'zgaradi?",
    "task": "Allocation formulasini yozing.",
    "canonical": "Allocation[i] = Allocation[i] + Request[i]",
    "accepted": [
      "Allocation[i] = Allocation[i] + Request[i]",
      "Allocation[i] + Request[i]"
    ],
    "tags": [
      "#ALLOCATION_UPDATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonga ajratilgan resurslarni vaqtincha oshirish.",
      "flags": [],
      "whenToUse": "Simulyatsiya qadamida.",
      "omissionRisk": "Qayta hisoblash uchun kerak.",
      "syntaxExample": "Allocation[i] = Allocation[i] + Request[i]"
    }
  },
  {
    "id": 83,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "3-Qadam: Need O'zgarishi",
    "story": "Jarayon so'ragan resursini olgach, uning qolgan ehtiyoji kamayadi. Need qanday yangilanadi?",
    "task": "Need formulasini yozing.",
    "canonical": "Need[i] = Need[i] - Request[i]",
    "accepted": [
      "Need[i] = Need[i] - Request[i]",
      "Need[i] - Request[i]"
    ],
    "tags": [
      "#NEED_UPDATE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qolgan ehtiyojni so'ralgan qismga kamaytirish.",
      "flags": [],
      "whenToUse": "Simulyatsiyaning yakuniy qismida.",
      "omissionRisk": "0 ga yetganda jarayon to'liq ta'minlangan bo'ladi.",
      "syntaxExample": "Need[i] = Need[i] - Request[i]"
    }
  },
  {
    "id": 84,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "4-Qadam: Safety Algoritmini Yurgizish",
    "story": "Simulyatsiya qilingan yangi holat ustida qaysi algoritm ishga tushiriladi?",
    "task": "Algoritm nomini yozing.",
    "canonical": "Safety Algorithm",
    "accepted": [
      "Safety Algorithm",
      "safety",
      "xavfsizlik algoritmi"
    ],
    "tags": [
      "#STEP_4",
      "#RUN_SAFETY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yangi holat xavfsiz (Safe) yoki xavfli (Unsafe) ekanligini aniqlash.",
      "flags": [],
      "whenToUse": "Qaror qabul qilishdan avval.",
      "omissionRisk": "Natijaga qarab resurs beriladi yoki bekor qilinadi.",
      "syntaxExample": "Safety Algorithm"
    }
  },
  {
    "id": 85,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Qaror: Safe Holat Topilsa",
    "story": "Agar Safety algoritmi Safe natijasini bersa, so'rov bilan nima qilinadi?",
    "task": "Qarorni yozing.",
    "canonical": "Resurslar beriladi",
    "accepted": [
      "Resurslar beriladi",
      "qabul qilinadi",
      "beriladi"
    ],
    "tags": [
      "#GRANT_RESOURCES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Resurslarni jarayonga haqiqiy berish.",
      "flags": [],
      "whenToUse": "Tizim xavfsiz qolishi kafolatlanganida.",
      "omissionRisk": "Jarayon o'z ishini davom ettiradi.",
      "syntaxExample": "Resurslar beriladi"
    }
  },
  {
    "id": 86,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Qaror: Unsafe Holat Topilsa (Rollback)",
    "story": "Agar yangi holat Unsafe bo'lib chiqsa, nima qilinadi?",
    "task": "Eski holatni tiklash jarayoni nima deb ataladi?",
    "canonical": "Rollback",
    "accepted": [
      "Rollback",
      "rollback",
      "bekor qilinadi"
    ],
    "tags": [
      "#ROLLBACK",
      "#REVERT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simulyatsiya qilingan matritsalarni eski asl holatiga qaytarish.",
      "flags": [],
      "whenToUse": "Xavfli holat aniqlanganda.",
      "omissionRisk": "Jarayon kutishga majbur qilinadi.",
      "syntaxExample": "Rollback"
    }
  },
  {
    "id": 87,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Bankir Algoritmining Asosiy Cheklovi",
    "story": "Umumiy kompyuterlarda jarayon qancha resurs ishlatishini oldindan ayta oladimi?",
    "task": "Maksimal talabni har doim aniq bilish mumkinmi? (mumkin emas / mumkin)",
    "canonical": "mumkin emas",
    "accepted": [
      "mumkin emas",
      "yo'q",
      "no"
    ],
    "tags": [
      "#PRACTICAL_LIMITATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Banker algoritmining real OS larda kam ishlatilish sababini tushunish.",
      "flags": [],
      "whenToUse": "Tanqidiy tahlillarda.",
      "omissionRisk": "Dasturlar o'zlarining kelajakdagi xotira va fayl talabini oldindan bilmaydi.",
      "syntaxExample": "mumkin emas"
    }
  },
  {
    "id": 88,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Qaysi Tizimlarda Bankir Algoritmi Keng Qo'llaniladi?",
    "story": "Barcha jarayonlari va resurslari oldindan qat'iy rejalashtirilgan kritik boshqaruv tizimlari.",
    "task": "Bunday tizimlar turini yozing.",
    "canonical": "O'rnatilgan tizimlar",
    "accepted": [
      "O'rnatilgan tizimlar",
      "embedded",
      "real-time",
      "real-vaqt tizimlari"
    ],
    "tags": [
      "#EMBEDDED_SYSTEMS",
      "#REAL_TIME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Banker algoritmi samolyotlar, reaktorlar va avtomobil tizimlarida juda muvaffaqiyatli ishlashini ko'rsatish.",
      "flags": [],
      "whenToUse": "Kritik muhandislik sohalarida.",
      "omissionRisk": "Bu yerda maksimal parametrlar doimo aniq bo'ladi.",
      "syntaxExample": "O'rnatilgan tizimlar"
    }
  },
  {
    "id": 89,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Hisoblash Yuklamasi (Overhead)",
    "story": "Har bir resurs so'ralganda matritsalarni ko'rib chiqish operatsion tizim tezligiga qanday ta'sir qiladi?",
    "task": "Tezlikka ta'sirini yozing (sekinlashtiradi / tezlashtiradi).",
    "canonical": "sekinlashtiradi",
    "accepted": [
      "sekinlashtiradi",
      "overhead beradi",
      "slows down"
    ],
    "tags": [
      "#OVERHEAD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir malloc/lock chaqiruvida matritsa tekshirish juda qimmat ekanligini ko'rsatish.",
      "flags": [],
      "whenToUse": "Unumdorlik tahlilida.",
      "omissionRisk": "Zamonaviy desktop OS lar bu xarajatdan qochish uchun boshqa usullarni tanlaydi.",
      "syntaxExample": "sekinlashtiradi"
    }
  },
  {
    "id": 90,
    "sectorId": 6,
    "sectorTitle": "Bankir Algoritmi: Resurs So'rov Algoritmi (Request)",
    "title": "Bir Nechta So'rovlarni Qayta Ishlash",
    "story": "Agar 3 ta jarayon bir vaqtda so'rov bersa, ular qanday tartibda ko'rib chiqiladi?",
    "task": "So'rovlar qanday tartibda ko'riladi? (Ketma-ket / Bir vaqtda)",
    "canonical": "Ketma-ket",
    "accepted": [
      "Ketma-ket",
      "ketma-ket",
      "serially"
    ],
    "tags": [
      "#SERIAL_PROCESSING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Poyga holatlaridan qochish uchun so'rovlarni birin-ketin navbat bilan tekshirish.",
      "flags": [],
      "whenToUse": "Bankir algoritmini amalga oshirishda.",
      "omissionRisk": "Bir vaqtda tekshirilsa noto'g'ri xavfsizlik xulosasi chiqishi mumkin.",
      "syntaxExample": "Ketma-ket"
    }
  },
  {
    "id": 91,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Tupikni Aniqlash (Deadlock Detection)",
    "story": "L09 Detection: Tizimga resurslarni erkin berishga ruxsat etiladi, lekin davriy ravishda tupik bor-yo'qligi tekshirib turiladi.",
    "task": "Ushbu strategiya nomini yozing.",
    "canonical": "Deadlock Detection",
    "accepted": [
      "Deadlock Detection",
      "deadlock detection",
      "detection"
    ],
    "tags": [
      "#DETECTION",
      "#MONITORING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tupik holatini aniqlash va fosh qilish.",
      "flags": [],
      "whenToUse": "Resurslarni cheklamasdan erkin ishlatish zarur bo'lganda.",
      "omissionRisk": "Aniqlangandan so'ng albatta Recovery (qutulish) mexanizmi kerak bo'ladi.",
      "syntaxExample": "Deadlock Detection"
    }
  },
  {
    "id": 92,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Kutish Grafigi (Wait-For Graph - WFG)",
    "story": "RAG dan barcha resurs to'rtburchaklari olib tashlanib, faqat jarayonlararo kutish qirralari qoldirilgan ixcham graf.",
    "task": "Ushbu graf qisqartmasi yoki to'liq nomini yozing.",
    "canonical": "Wait-For Graph",
    "accepted": [
      "Wait-For Graph",
      "WFG",
      "wait-for graph"
    ],
    "tags": [
      "#WFG",
      "#DETECTION_GRAPH"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat jarayonlar o'rtasidagi to'g'ridan-to'g'ri bog'liqlikni ifodalash.",
      "flags": [],
      "whenToUse": "Yagona nusxali tizimlarda deteksiya o'tkazishda.",
      "omissionRisk": "Pi -> Pj: Pi jarayoni Pj ushlab turgan resursni kutmoqda.",
      "syntaxExample": "Wait-For Graph"
    }
  },
  {
    "id": 93,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "WFG da Sikl Mavjudligi Nima Demak?",
    "story": "Wait-For Graph da agar sikl topilsa, bu nimani anglatadi?",
    "task": "Tizim holatini yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlock",
      "tupik"
    ],
    "tags": [
      "#WFG_CYCLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "WFG dagi har qanday sikl aniq Deadlock mavjudligini ko'rsatadi.",
      "flags": [],
      "whenToUse": "Deteksiya algoritmining xulosasida.",
      "omissionRisk": "Sikl topilsa darhol tuzatish choralari ko'rilishi lozim.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 94,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "WFG Murakkabligi",
    "story": "n ta jarayon uchun WFG da sikl qidirish algoritmining (masalan, DFS) murakkabligi nechaga teng?",
    "task": "Katta O notasini yozing.",
    "canonical": "O(n^2)",
    "accepted": [
      "O(n^2)",
      "O(n^2)",
      "O(V^2)"
    ],
    "tags": [
      "#WFG_COMPLEXITY",
      "#BIG_O"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutish grafigida sikl qidirish tezligini ko'rsatish.",
      "flags": [],
      "whenToUse": "Deteksiya samaradorligini baholashda.",
      "omissionRisk": "RAG ga qaraganda ancha tez ishlaydi.",
      "syntaxExample": "O(n^2)"
    }
  },
  {
    "id": 95,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Ko'p Nusxali Resurslar Uchun Deteksiya Algoritmi",
    "story": "Ko'p nusxali tizimlarda WFG ishlamaydi. U yerda Bankir algoritmining Safety qismiga o'xshash matritsali deteksiya ishlatiladi.",
    "task": "Boshida agar `Allocation[i] != 0` bo'lsa Finish[i] qanday qiymat oladi?",
    "canonical": "False",
    "accepted": [
      "False",
      "false"
    ],
    "tags": [
      "#DETECTION_ALGORITHM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Resurs ushlab turgan barcha jarayonlarni potensial tekshiruvga olish.",
      "flags": [],
      "whenToUse": "Multi-instance deteksiya boshida.",
      "omissionRisk": "Agar hech qanday resurs ushlamagan bo'lsa Finish[i] = True bo'ladi.",
      "syntaxExample": "False"
    }
  },
  {
    "id": 96,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Deteksiya Finish Sharti",
    "story": "Deteksiya algoritmi to'liq ishlab bo'lgach, har qanday `Finish[i] == False` bo'lib qolgan jarayon nima hisoblanadi?",
    "task": "Ushbu jarayonlar holatini yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "deadlockda",
      "tupikda"
    ],
    "tags": [
      "#DETECTION_RESULT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Aynan qaysi jarayonlar tupikka tushib qolganini aniqlash.",
      "flags": [],
      "whenToUse": "Recovery bosqichiga qurbonlar ro'yxatini uzatishda.",
      "omissionRisk": "Finish == True bo'lganlar xavfsiz hisoblanadi.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 97,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Deteksiyani Qachon Ishga Tushirish Kerak?",
    "story": "Deteksiyani juda tez-tez ishga tushirish CPU ni yeydi, juda kam ishga tushirish esa resurslarni qotirib qo'yadi. Yaxshi mezon nima?",
    "task": "Deteksiya qanday rejimda yurgiziladi? (Davriy / Har soniyada)",
    "canonical": "Davriy",
    "accepted": [
      "Davriy",
      "davriy taymer",
      "periodic"
    ],
    "tags": [
      "#DETECTION_FREQUENCY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tizim yuklamasini muvozanatlash.",
      "flags": [],
      "whenToUse": "Fon monitoringida.",
      "omissionRisk": "Masalan har 5 daqiqada yoki CPU yuklamasi ma'lum foizdan tushganda.",
      "syntaxExample": "Davriy"
    }
  },
  {
    "id": 98,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "CPU Yuklamasining Keskin Tushishi (CPU Drop)",
    "story": "Tizimda deadlocklar ko'paygani sari jarayonlar kutib qotadi va CPU yuklamasi nima bo'ladi?",
    "task": "CPU holatini yozing (keskin tushadi / oshadi).",
    "canonical": "keskin tushadi",
    "accepted": [
      "keskin tushadi",
      "tushadi",
      "drops"
    ],
    "tags": [
      "#CPU_DROP",
      "#INDICATOR"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPU yuklamasining pasayishi deadlock yuz berganining bilvosita signali bo'lishi.",
      "flags": [],
      "whenToUse": "Avtomatik monitoring tizimlarida trigger sifatida.",
      "omissionRisk": "Thrashingda esa aksincha paging yuklamasi 100% ga chiqadi.",
      "syntaxExample": "keskin tushadi"
    }
  },
  {
    "id": 99,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Qisqarmaydigan Qism (Irreducible Subgraph)",
    "story": "Grafni qisqartirish jarayonida oxirida o'chmay qolib ketgan tugunlar guruhi nima deb ataladi?",
    "task": "Ushbu guruh holatini yozing.",
    "canonical": "Deadlock",
    "accepted": [
      "Deadlock",
      "tupikdagi jarayonlar",
      "deadlocked set"
    ],
    "tags": [
      "#IRREDUCIBLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Aynan bir-birini bloklagan qatnashuvchilar to'plami.",
      "flags": [],
      "whenToUse": "Qutulish (Recovery) choralarini qo'llashda.",
      "omissionRisk": "Ular orasidan victim tanlanishi lozim.",
      "syntaxExample": "Deadlock"
    }
  },
  {
    "id": 100,
    "sectorId": 7,
    "sectorTitle": "Tupikni Aniqlash: Wait-For Graph (WFG) & Qisqartirish",
    "title": "Davriy Deteksiya Taymeri (Periodic Timer)",
    "story": "Har 60 soniyada WFG ni tahlil qilib turuvchi fon skripti strategiyasi.",
    "task": "Ushbu tekshirish mexanizmini yozing.",
    "canonical": "Davriy tekshiruv",
    "accepted": [
      "Davriy tekshiruv",
      "periodic check",
      "background audit"
    ],
    "tags": [
      "#CRON_AUDIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tizimni fonda avtomatik nazorat qilib borish.",
      "flags": [],
      "whenToUse": "Ma'lumotlar bazalari va server ilovalarida.",
      "omissionRisk": "Kechikishlar bo'lishi mumkin.",
      "syntaxExample": "Davriy tekshiruv"
    }
  }
];
});
