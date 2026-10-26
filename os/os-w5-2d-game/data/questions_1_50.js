/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 QUESTION DOSSIERS (1 to 50)
 * Verified Pedagogical Structure with 5-Point Command & Flag Anatomy.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    window.QUESTIONS_1_50 = root.QUESTIONS_W5_PART1 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 1,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Seminar 05 Q1",
    "title": "N ta Jarayon Uchun Mumkin Bo'lgan Rejalar Soni",
    "story": "Bitta protsessorda n ta mustaqil jarayon navbatda turibdi. Non-preemptive muhitda ularni nechta turli xil ketma-ketlikda bajarish mumkin?",
    "task": "n ta jarayon uchun mumkin bo'lgan jadvallar sonining matematik formulasini kiriting (n!).",
    "canonical": "n!",
    "accepted": [
      "n! ",
      "n factorial",
      "factorial(n)"
    ],
    "tags": [
      "#SCHEDULING",
      "#FORMULA"
    ],
    "flagAnatomy": {
      "commandPurpose": "n ta jarayonni tartiblash kombinatsiyalari soni.",
      "flags": [],
      "whenToUse": "Qidiruv fazosining eksponensial ekanligini baholashda.",
      "omissionRisk": "Brute-force qidiruv CPU ni qotirib qo'yishi mumkin.",
      "syntaxExample": "n! = n * (n - 1) * ... * 1"
    }
  },
  {
    "id": 2,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Seminar 05 Q2",
    "title": "Preemptive va Non-preemptive Rejalashtirish Farqi",
    "story": "Linux tizimida yuqori ustuvorlikdagi jarayon kelganda, operatsion tizim joriy jarayonni to'xtatib CPU ni olib qo'ya oladimi?",
    "task": "Operatsion tizim joriy ishlayotgan jarayonni majburan to'xtatib CPU ni boshqasiga bera oladigan rejalashtirish turini yozing.",
    "canonical": "preemptive",
    "accepted": [
      "Preemptive",
      "preemptive scheduling"
    ],
    "tags": [
      "#PREEMPTIVE",
      "#CPU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayonni majburan to'xtatib turish mexanizmi.",
      "flags": [],
      "whenToUse": "Interaktiv ko'p vazifali tizimlarda.",
      "omissionRisk": "Non-preemptive bo'lsa bitta sikl tizimni qotirib qo'yadi.",
      "syntaxExample": "Preemptive Scheduling (e.g. SRTF, RR)"
    }
  },
  {
    "id": 3,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Seminar 05 Q4",
    "title": "Tayyor Navbatda Kutish Vaqti Metrikasi",
    "story": "Jarayon xotirada tayyor holda 'Ready Queue' da CPU unga berilishini kutib turibdi. Bu qaysi vaqt?",
    "task": "Jarayonning tayyor navbatda o'tkazgan umumiy vaqtini o'lchovchi metrika nomini kiriting.",
    "canonical": "waiting time",
    "accepted": [
      "Waiting time",
      "waiting_time"
    ],
    "tags": [
      "#METRIC",
      "#WAITING_TIME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Navbatda kutish vaqti metrikasi.",
      "flags": [],
      "whenToUse": "Algoritmlar samaradorligini baholashda.",
      "omissionRisk": "Kutish hisobga olinmasa past ustuvorlikdagilar och qoladi.",
      "syntaxExample": "Waiting Time = Turnaround Time - Burst Time"
    }
  },
  {
    "id": 4,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Seminar 05 Q5",
    "title": "Aylanish Vaqti (Turnaround Time) Formulasi",
    "story": "Foydalanuvchi buyruqni topshirgan paytdan to dastur to'liq yakunlangangacha ketgan vaqt.",
    "task": "Turnaround Time ning CompletionTime va ArrivalTime orasidagi formulasini yozing.",
    "canonical": "CompletionTime - ArrivalTime",
    "accepted": [
      "completion - arrival",
      "T_completion - T_arrival"
    ],
    "tags": [
      "#TAT",
      "#FORMULA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dastur topshirilgandan tugaguncha bo'lgan to'liq vaqt.",
      "flags": [],
      "whenToUse": "Foydalanuvchi tajribasini baholashda.",
      "omissionRisk": "TAT noto'g'ri bo'lsa fonda qotgan ishlar sezilmaydi.",
      "syntaxExample": "TAT = Completion_Time - Arrival_Time"
    }
  },
  {
    "id": 5,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Qiyin",
    "source": "Seminar 05 Q6",
    "title": "SRTF da O'rtacha Kutish Vaqti Hisoblash",
    "story": "P0 (0ms, burst 9ms), P1 (1ms, burst 4ms), P2 (2ms, burst 9ms). SRTF preemptive algoritmi qo'llanilganda o'rtacha kutish vaqti necha ms?",
    "task": "SRTF bo'yicha hisoblangan o'rtacha kutish vaqtini kiriting (birlik: ms).",
    "canonical": "5.0 ms",
    "accepted": [
      "5.0ms",
      "5 ms",
      "5ms",
      "5.0"
    ],
    "tags": [
      "#SRTF",
      "#CALCULATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Shortest Remaining Time First o'rtacha kutish vaqti.",
      "flags": [],
      "whenToUse": "Preemptive optimal kutish vaqtiga erishishda.",
      "omissionRisk": "Preemption bo'lmasa kutish 8.33ms ga oshib ketadi.",
      "syntaxExample": "(4 + 0 + 11) / 3 = 5.0 ms"
    }
  },
  {
    "id": 6,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Q7 Part A",
    "title": "FCFS Algoritmi Bo'yicha O'rtacha TAT",
    "story": "P0 (0ms, burst 8ms), P1 (0.4ms, burst 4ms), P2 (1.0ms, burst 1ms). FCFS da birinchi kelgan birinchi bajariladi.",
    "task": "FCFS algoritmi bo'yicha o'rtacha Turnaround Time (TAT) qiymatini kiriting (ms).",
    "canonical": "10.53 ms",
    "accepted": [
      "10.53ms",
      "10.53"
    ],
    "tags": [
      "#FCFS",
      "#TAT"
    ],
    "flagAnatomy": {
      "commandPurpose": "FCFS bo'yicha aylanish vaqti hisobi.",
      "flags": [],
      "whenToUse": "Oddiy navbat tizimlarida.",
      "omissionRisk": "Convoy effect yuzaga keladi.",
      "syntaxExample": "(8.0 + 11.6 + 12.0) / 3 = 10.53 ms"
    }
  },
  {
    "id": 7,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Q7 Part B",
    "title": "Non-preemptive SJF Bo'yicha O'rtacha TAT",
    "story": "O'sha jarayonlar: P0 (8ms), P1 (4ms), P2 (1ms). Time=8ms da P2 qisqaroq bo'lgani sababli P1 dan oldin bajariladi.",
    "task": "Non-preemptive SJF bo'yicha hisoblangan o'rtacha Turnaround Time qiymatini kiriting (ms).",
    "canonical": "9.53 ms",
    "accepted": [
      "9.53ms",
      "9.53"
    ],
    "tags": [
      "#SJF",
      "#TAT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Shortest Job First o'rtacha aylanish vaqti.",
      "flags": [],
      "whenToUse": "Kutish vaqtini FCFS dan kamaytirishda.",
      "omissionRisk": "Burst vaqtini oldindan bilish talab etiladi.",
      "syntaxExample": "(8.0 + 8.0 + 12.6) / 3 = 9.53 ms"
    }
  },
  {
    "id": 8,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Lecture 05 Slide 3",
    "title": "Round Robin Rejalashtirishdagi Asosiy Parametr",
    "story": "Har bir jarayonga navbat bilan bir xil kichik vaqt bo'lagi beriladi va muddat tugagach CPU keyingisiga o'tadi.",
    "task": "Round Robin algoritmidagi ushbu vaqt bo'lagi qanday ataladi?",
    "canonical": "time quantum",
    "accepted": [
      "Time quantum",
      "time slice",
      "quantum"
    ],
    "tags": [
      "#ROUND_ROBIN",
      "#QUANTUM"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPU taqsimotida vaqt kvanti.",
      "flags": [],
      "whenToUse": "Adolatli interaktiv ko'p foydalanuvchili tizimlarda.",
      "omissionRisk": "Juda kichik bo'lsa context switch overhead oshadi.",
      "syntaxExample": "Time Quantum q = 10 to 100 ms"
    }
  },
  {
    "id": 9,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Lecture 05 Slide 3",
    "title": "CPU Schedulingning Asosiy Maqsadi",
    "story": "CPU foydalanish koeffitsientini (utilization) qanday darajada ushlab turish rejalashtiruvchining asosiy maqsadi hisoblanadi (maximize/minimize)?",
    "task": "CPU utilization maqsadini yozing.",
    "canonical": "maximize",
    "accepted": [
      "Maximize",
      "maximize CPU utilization"
    ],
    "tags": [
      "#UTILIZATION",
      "#GOALS"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPU bandligini yuqori darajada ushlab turish.",
      "flags": [],
      "whenToUse": "Resurs samaradorligini belgilashda.",
      "omissionRisk": "CPU ko'p vaqt bo'sh turib qoladi.",
      "syntaxExample": "Maximize CPU utilization"
    }
  },
  {
    "id": 10,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "O'rta",
    "source": "Linux Kernel CFS",
    "title": "Linux Kernelning Standart Rejalashtiruvchisi",
    "story": "Zamonaviy Linux yadrosida oddiy jarayonlar uchun qaysi standart adolatli rejalashtiruvchi algoritmi ishlatiladi?",
    "task": "Ushbu rejalashtiruvchining qisqartma nomini kiriting (Completely Fair Scheduler).",
    "canonical": "CFS",
    "accepted": [
      "cfs",
      "Completely Fair Scheduler"
    ],
    "tags": [
      "#CFS",
      "#LINUX"
    ],
    "flagAnatomy": {
      "commandPurpose": "vruntime asosida red-black tree yordamida rejalashtirish.",
      "flags": [],
      "whenToUse": "Linux serverlarida adolatli taqsimot uchun.",
      "omissionRisk": "Fon ishlari interaktiv terminalni qotirib qo'yishi mumkin.",
      "syntaxExample": "Linux CFS (Completely Fair Scheduler)"
    }
  },
  {
    "id": 11,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Linux Nice Command",
    "title": "Jarayon Ustuvorligini Belgilab Ishga Tushirish",
    "story": "Yangi buyruqni past yoki yuqori nice qiymati bilan ishga tushiruvchi Linux buyrug'ini kiriting.",
    "task": "Buyruq nomini kiriting.",
    "canonical": "nice",
    "accepted": [
      "nice "
    ],
    "tags": [
      "#NICE",
      "#PRIORITY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon ustuvorligini belgilab ishga tushirish.",
      "flags": [
        {
          "flag": "-n",
          "name": "Increment",
          "position": "nice -n 10",
          "purpose": "Nice qiymati",
          "withoutRisk": "Standart 10 olinadi."
        }
      ],
      "whenToUse": "Og'ir ishlarni fon rejimida boshlashda.",
      "omissionRisk": "Normal jarayonlarga xalaqit berishi mumkin.",
      "syntaxExample": "nice -n 10 ./backup.sh"
    }
  },
  {
    "id": 12,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Linux Renice Command",
    "title": "Ishlab Turgan Jarayonning Ustuvorligini O'zgartirish",
    "story": "PID 1420 jarayonining nice qiymatini +15 ga tushirish buyrug'ini yozing.",
    "task": "renice buyrug'ini yozing.",
    "canonical": "renice -n 15 -p 1420",
    "accepted": [
      "renice 15 -p 1420",
      "renice 15 1420"
    ],
    "tags": [
      "#RENICE",
      "#PID"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faol jarayon ustuvorligini o'zgartirish.",
      "flags": [
        {
          "flag": "-n",
          "name": "Nice",
          "position": "renice -n 15",
          "purpose": "Yangi qiymat",
          "withoutRisk": "Xato beradi."
        },
        {
          "flag": "-p",
          "name": "PID",
          "position": "-p 1420",
          "purpose": "Jarayon ID",
          "withoutRisk": "Qaysi jarayonligi noma'lum."
        }
      ],
      "whenToUse": "Qizib ketgan jarayonni sekinlashtirishda.",
      "omissionRisk": "Server javob tezligi pasayadi.",
      "syntaxExample": "renice -n 15 -p 1420"
    }
  },
  {
    "id": 13,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "O'rta",
    "source": "Linux chrt Command",
    "title": "Realtime Jarayonlar Rejalashtiruvchisi (chrt)",
    "story": "Jarayonning real-vaqt rejalashtirish siyosatini (SCHED_FIFO, SCHED_RR) boshqaruvchi utilita nomini kiriting.",
    "task": "chrt buyrug'ini yozing.",
    "canonical": "chrt",
    "accepted": [
      "chrt ",
      "chrt -p"
    ],
    "tags": [
      "#CHRT",
      "#REALTIME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Real-time attributes boshqarish.",
      "flags": [
        {
          "flag": "-p",
          "name": "PID",
          "position": "chrt -p <pid>",
          "purpose": "Siyosatni ko'rish",
          "withoutRisk": "Yangi dastur ochadi."
        }
      ],
      "whenToUse": "Kechikishga sezgir vazifalarda.",
      "omissionRisk": "To'xtovsiz FIFO tizimni qotiradi.",
      "syntaxExample": "chrt -p 1420"
    }
  },
  {
    "id": 14,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "O'rta",
    "source": "Multilevel Feedback Queue",
    "title": "Ko'p Darajali Qaytuvchi Aloqa Navbati (MLFQ)",
    "story": "Jarayonning xulq-atvoriga (I/O yoki CPU bound) qarab navbatlar orasida suriluvchi algoritm nomini kiriting.",
    "task": "MLFQ qisqartmasini yozing.",
    "canonical": "MLFQ",
    "accepted": [
      "mlfq",
      "Multilevel Feedback Queue"
    ],
    "tags": [
      "#MLFQ",
      "#FEEDBACK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Moslashuvchan ko'p navbatli rejalashtirish.",
      "flags": [],
      "whenToUse": "Interaktiv qisqa ishlarga ustunlik berishda.",
      "omissionRisk": "Aging bo'lmasa og'ir ishlar och qoladi.",
      "syntaxExample": "Multilevel Feedback Queue (MLFQ)"
    }
  },
  {
    "id": 15,
    "sectorId": 1,
    "sectorTitle": "CPU Scheduling Algoritmlari (FCFS, SJF, SRTF, RR)",
    "difficulty": "Oson",
    "source": "Context Switch Overhead",
    "title": "Context Switch Qo'shimcha Sarf-Xarajati",
    "story": "CPU bir jarayondan ikkinchisiga o'tayotganda hech qanday foydali ish bajarmaydi. Bu yo'qotish nima deb ataladi?",
    "task": "Overhead so'zini kiriting.",
    "canonical": "overhead",
    "accepted": [
      "Overhead",
      "overhead "
    ],
    "tags": [
      "#OVERHEAD",
      "#KERNEL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kontekst almashishdagi foydasiz sarf.",
      "flags": [],
      "whenToUse": "Kvant o'lchamini belgilashda.",
      "omissionRisk": "Haddan tashqari ko'p almashish CPU quvvatini behuda sarflaydi.",
      "syntaxExample": "Context Switch Overhead"
    }
  },
  {
    "id": 16,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "Oson",
    "source": "L05 Slide 16",
    "title": "Mantiqiy va Jismoniy Manzil Farqi",
    "story": "CPU tomonidan yaratiladigan virtual manzil qanday ataladi?",
    "task": "Logical address (mantiqiy manzil) nomini yozing.",
    "canonical": "logical address",
    "accepted": [
      "logical",
      "Logical address",
      "virtual address"
    ],
    "tags": [
      "#LOGICAL_ADDRESS",
      "#MMU"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPU generatsiya qiluvchi manzil.",
      "flags": [],
      "whenToUse": "Dastur xotira himoyasida.",
      "omissionRisk": "Dastur jismoniy xotirani buzib qo'yishi mumkin.",
      "syntaxExample": "Logical address -> MMU -> Physical address"
    }
  },
  {
    "id": 17,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "Oson",
    "source": "L05 Slide 17",
    "title": "Xotirani Boshqarish Qurilmasi (MMU)",
    "story": "Ishlash vaqtida virtual manzilni jismoniy manzilga o'giruvchi apparat qurilmasi qanday ataladi?",
    "task": "MMU qisqartmasini kiriting.",
    "canonical": "MMU",
    "accepted": [
      "mmu",
      "Memory Management Unit"
    ],
    "tags": [
      "#MMU",
      "#HARDWARE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Virtual manzilni jismoniy manzilga tarjima qilish.",
      "flags": [],
      "whenToUse": "Har bir xotira murojaatida.",
      "omissionRisk": "MMU bo'lmasa virtual xotira ishlamaydi.",
      "syntaxExample": "Memory Management Unit (MMU)"
    }
  },
  {
    "id": 18,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 18",
    "title": "Relocation Registri",
    "story": "Oddiy MMU sxemasida dasturning mantiqiy manziliga qaysi registr qiymati qo'shiladi?",
    "task": "Relocation register nomini yozing.",
    "canonical": "relocation register",
    "accepted": [
      "Relocation register",
      "base register",
      "relocation"
    ],
    "tags": [
      "#RELOCATION",
      "#BASE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dastur boshlang'ich jismoniy manzilini saqlash.",
      "flags": [],
      "whenToUse": "Dinamik manzil bog'lashda.",
      "omissionRisk": "Dastur boshqa jarayon xotirasiga tegib ketadi.",
      "syntaxExample": "Physical = Logical + Relocation Register"
    }
  },
  {
    "id": 19,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "Oson",
    "source": "L05 Slide 12",
    "title": "Base va Limit Registrlari",
    "story": "Jarayon mantiqiy xotira hajmining chegarasini belgilovchi registr qaysi?",
    "task": "Limit registri nomini yozing.",
    "canonical": "limit register",
    "accepted": [
      "limit",
      "Limit register"
    ],
    "tags": [
      "#LIMIT_REGISTER",
      "#PROTECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon ruxsat etilgan xotira diapazoni uzunligi.",
      "flags": [],
      "whenToUse": "Xotira buzilishidan himoyalashda.",
      "omissionRisk": "Jarayon o'z chegarasidan chiqib OS ni qulatishi mumkin.",
      "syntaxExample": "Logical address < Limit register"
    }
  },
  {
    "id": 20,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 13",
    "title": "Privileged Buyruqlar",
    "story": "Base va limit registrlarini faqat qaysi rejimdagi ko'rsatmalar o'zgartira oladi?",
    "task": "Privileged (imtiyozli/kernel) rejim so'zini yozing.",
    "canonical": "privileged",
    "accepted": [
      "Privileged",
      "kernel mode",
      "privileged instructions"
    ],
    "tags": [
      "#PRIVILEGED",
      "#KERNEL_MODE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat yadro o'zgartira oladigan xavfsizlik amali.",
      "flags": [],
      "whenToUse": "Xotira himoyasini sozlashda.",
      "omissionRisk": "Oddiy user dasturi xotira chegarasini o'zboshimchalik bilan kengaytirib oladi.",
      "syntaxExample": "Privileged instructions to load Base/Limit"
    }
  },
  {
    "id": 21,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 5",
    "title": "SRAM vs DRAM: Kesh Xotirasi",
    "story": "Tezkor, qimmat, davriy yangilanish (refresh) talab qilmaydigan va CPU keshida ishlatiladigan xotira turi qaysi?",
    "task": "SRAM qisqartmasini yozing.",
    "canonical": "SRAM",
    "accepted": [
      "sram",
      "Static RAM"
    ],
    "tags": [
      "#SRAM",
      "#CACHE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Statik kesh xotira texnologiyasi.",
      "flags": [],
      "whenToUse": "L1, L2, L3 CPU keshlarida.",
      "omissionRisk": "DRAM ishlatilsa kesh tezligi juda sekinlashadi.",
      "syntaxExample": "SRAM (Static Random Access Memory)"
    }
  },
  {
    "id": 22,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "Oson",
    "source": "L05 Slide 5",
    "title": "Asosiy Xotira: DRAM",
    "story": "Arzon, zichligi yuqori, 1 tranzistor va 1 kondensatordan iborat, doimiy yangilanish talab qiladigan xotira qaysi?",
    "task": "DRAM qisqartmasini yozing.",
    "canonical": "DRAM",
    "accepted": [
      "dram",
      "Dynamic RAM"
    ],
    "tags": [
      "#DRAM",
      "#RAM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dinamik asosiy operativ xotira (RAM).",
      "flags": [],
      "whenToUse": "Asosiy operativ xotira sifatida.",
      "omissionRisk": "SRAM dan RAM qurilsa narx juda qimmatlashib ketadi.",
      "syntaxExample": "DRAM (Dynamic Random Access Memory)"
    }
  },
  {
    "id": 23,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 4",
    "title": "Xotiraga Kirishda CPU To'xtab Qolishi",
    "story": "Asosiy xotiraga (DRAM) kirish ko'p takt vaqtini olib, CPU ning to'xtab turishiga olib kelishi nima deb ataladi?",
    "task": "Stall so'zini yozing.",
    "canonical": "stall",
    "accepted": [
      "Stall",
      "memory stall"
    ],
    "tags": [
      "#STALL",
      "#CPU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xotira kutish paytidagi protsessor pauzasi.",
      "flags": [],
      "whenToUse": "Kesh xotira zaruriyatini tushunishda.",
      "omissionRisk": "Keshsiz CPU quvvatining 90% i xotirani kutishga sarflanadi.",
      "syntaxExample": "Memory Stall"
    }
  },
  {
    "id": 24,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 19",
    "title": "Dinamik Yuklash (Dynamic Loading)",
    "story": "Funksiya faqat chaqirilganda xotiraga yuklanishi orqali RAM tejaladigan texnika qanday ataladi?",
    "task": "Dynamic loading nomini yozing.",
    "canonical": "dynamic loading",
    "accepted": [
      "Dynamic loading",
      "Dynamic Loading"
    ],
    "tags": [
      "#DYNAMIC_LOADING",
      "#MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat kerakli funksiyalarni chaqirilganda yuklash.",
      "flags": [],
      "whenToUse": "Katta va kam ishlatiladigan xatolik modullarida.",
      "omissionRisk": "Keraksiz kodlar butun RAM ni egallab oladi.",
      "syntaxExample": "Dynamic Loading"
    }
  },
  {
    "id": 25,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 20",
    "title": "Dynamic Linking va Stub",
    "story": "Dinamik kutubxonani (.so) topish va yuklash uchun ishlatiladigan kichik kod bo'lagi qanday ataladi?",
    "task": "Stub so'zini yozing.",
    "canonical": "stub",
    "accepted": [
      "Stub",
      "stub code"
    ],
    "tags": [
      "#STUB",
      "#DYNAMIC_LINKING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Kutubxona manzilini almashtiruvchi kichik yo'lko'rsatkich.",
      "flags": [],
      "whenToUse": "Umumiy kutubxonalarni xotirada bo'lishishda.",
      "omissionRisk": "Statik linking barcha dastur hajmini gigabaytlarga oshiradi.",
      "syntaxExample": "Dynamic Linking Stub"
    }
  },
  {
    "id": 26,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "Oson",
    "source": "L05 Slide 14",
    "title": "Manzil Bog'lash Bosqichlari (Binding)",
    "story": "Dastur xotirada harakatlanishi mumkin bo'lganda manzil bog'lash qaysi bosqichgacha kechiktiriladi?",
    "task": "Execution time bosqichini yozing.",
    "canonical": "execution time",
    "accepted": [
      "Execution time",
      "run time",
      "runtime"
    ],
    "tags": [
      "#BINDING",
      "#EXECUTION_TIME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ishlash vaqtida manzilni dinamik hisoblash.",
      "flags": [],
      "whenToUse": "Jarayon boshqa xotira blokiga surilganda.",
      "omissionRisk": "Compile time bo'lsa dastur boshqa manzilga ko'chmaydi.",
      "syntaxExample": "Execution Time Address Binding"
    }
  },
  {
    "id": 27,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "Oson",
    "source": "L05 Slide 14",
    "title": "Qayta Joylashtiriladigan Kod",
    "story": "Yuklash vaqtida (Load time) har qanday manzilga joylashtirish mumkin bo'lgan kod turi qanday ataladi?",
    "task": "Relocatable code nomini yozing.",
    "canonical": "relocatable code",
    "accepted": [
      "relocatable",
      "Relocatable code"
    ],
    "tags": [
      "#RELOCATABLE",
      "#CODE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har qanday manzilga joylashuvchi kod.",
      "flags": [],
      "whenToUse": "Kompilyatordan keyingi xotira joylashuvida.",
      "omissionRisk": "Absolute kod bo'lsa faqat qat'iy 0x1000 da ishlay oladi.",
      "syntaxExample": "Relocatable Code"
    }
  },
  {
    "id": 28,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 38",
    "title": "Birgalikda Ishlatiluvchi Kod (Reentrant)",
    "story": "Bir vaqtning o'zida bir nechta jarayonlar xotirada bitta nusxasini bo'lishib ishlatadigan o'zgarmas kod qanday ataladi?",
    "task": "Reentrant code nomini kiriting.",
    "canonical": "reentrant",
    "accepted": [
      "Reentrant",
      "reentrant code",
      "re-entrant"
    ],
    "tags": [
      "#REENTRANT",
      "#SHARED_PAGES"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'zini o'zgartirmaydigan xavfsiz umumiy kod.",
      "flags": [],
      "whenToUse": "Matn muharrirlari va libc kutubxonasida.",
      "omissionRisk": "Har bir jarayon 100MB libc nusxasini yuklab RAM ni to'ldiradi.",
      "syntaxExample": "Reentrant Shared Code"
    }
  },
  {
    "id": 29,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "Oson",
    "source": "L05 Slide 36",
    "title": "Himoya Bitlari (Protection Bits)",
    "story": "Faqat o'qish (Read-Only) yoki yozish (Read-Write) huquqini belgilovchi xotira biti qanday ataladi?",
    "task": "Protection bit so'zini kiriting.",
    "canonical": "protection bit",
    "accepted": [
      "protection bits",
      "Protection bit"
    ],
    "tags": [
      "#PROTECTION_BITS",
      "#MMU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifa yoki segmentga ruxsat nazorati.",
      "flags": [],
      "whenToUse": "Kod segmentiga tasodifiy yozishni to'sishda.",
      "omissionRisk": "Zararli dastur o'z kodini o'zgartirib yadroga hujum qiladi.",
      "syntaxExample": "Protection Bit (r/w/x)"
    }
  },
  {
    "id": 30,
    "sectorId": 2,
    "sectorTitle": "Xotira Boshqaruvi & Hardware Himoyasi (Base/Limit, MMU)",
    "difficulty": "O'rta",
    "source": "L05 Slide 11",
    "title": "Segmentatsiya (Segmentation)",
    "story": "Dasturni mantiqiy bo'laklarga (Code, Data, Stack) bo'lib xotirada saqlash usuli nima deb ataladi?",
    "task": "Segmentation nomini yozing.",
    "canonical": "segmentation",
    "accepted": [
      "Segmentation"
    ],
    "tags": [
      "#SEGMENTATION",
      "#MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mantiqiy bloklar asosida xotira taqsimoti.",
      "flags": [],
      "whenToUse": "Dastur tuzilishiga mos xotira ajratishda.",
      "omissionRisk": "Tashqi fragmentatsiya keltirib chiqarishi mumkin.",
      "syntaxExample": "Memory Segmentation"
    }
  },
  {
    "id": 31,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 8",
    "title": "Bir Biriga Ulangan Xotira (Contiguous Allocation)",
    "story": "Jarayon fizik xotirada faqat bitta yaxlit uzluksiz blokda joylashishi talab etiladigan usul qanday ataladi?",
    "task": "Contiguous allocation nomini yozing.",
    "canonical": "contiguous allocation",
    "accepted": [
      "contiguous",
      "Contiguous allocation",
      "Contiguous Memory Allocation"
    ],
    "tags": [
      "#CONTIGUOUS",
      "#ALLOCATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Uzluksiz yagona xotira bloki ajratish.",
      "flags": [],
      "whenToUse": "Soddalashtirilgan monolit OS larda.",
      "omissionRisk": "Tashqi fragmentatsiya sababli RAM isrof bo'ladi.",
      "syntaxExample": "Contiguous Memory Allocation"
    }
  },
  {
    "id": 32,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "O'rta",
    "source": "L05 Slide 9",
    "title": "Statik va Dinamik Partitsiyalar",
    "story": "Xotira hajmi jarayon ehtiyojiga qarab tizim ishlash jarayonida aynan kerakli hajmda yaratiladigan partitsiya turi qaysi?",
    "task": "Dynamic partitioning nomini yozing.",
    "canonical": "dynamic partitioning",
    "accepted": [
      "dynamic",
      "Dynamic partitioning"
    ],
    "tags": [
      "#DYNAMIC_PARTITIONING",
      "#MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon o'lchamiga mos moslashuvchan bo'lim.",
      "flags": [],
      "whenToUse": "Ichki fragmentatsiyani yo'qotishda.",
      "omissionRisk": "Xotira bo'shaganda mayda teshiklar (holes) hosil bo'ladi.",
      "syntaxExample": "Dynamic Partitioning"
    }
  },
  {
    "id": 33,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 22",
    "title": "Xotiradagi Teshik (Hole)",
    "story": "Operatsion tizimda bo'sh turgan va yangi jarayonni joylashtirish mumkin bo'lgan mavjud xotira bloki nima deb ataladi?",
    "task": "Hole so'zini kiriting.",
    "canonical": "hole",
    "accepted": [
      "Hole",
      "free hole",
      "holes"
    ],
    "tags": [
      "#HOLE",
      "#FREE_MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud bo'sh xotira bloki.",
      "flags": [],
      "whenToUse": "Yangi jarayonga joy tanlashda.",
      "omissionRisk": "Teshiklar maydalanib ketsa katta dastur sig'may qoladi.",
      "syntaxExample": "Available Memory Hole"
    }
  },
  {
    "id": 34,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 23",
    "title": "First-Fit Strategiyasi",
    "story": "Xotira ro'yxatidan jarayon sig'adigan eng birinchi uchragan bo'sh joyni ajratuvchi strategiya qaysi?",
    "task": "First-fit nomini yozing.",
    "canonical": "first-fit",
    "accepted": [
      "First-fit",
      "first fit",
      "First-Fit"
    ],
    "tags": [
      "#FIRST_FIT",
      "#STRATEGY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Eng birinchi yetarli bo'sh teshikni ajratish.",
      "flags": [],
      "whenToUse": "Tezkor joylashtirish qidiruvida.",
      "omissionRisk": "Xotira boshida mayda bo'shliqlar to'planib qoladi.",
      "syntaxExample": "First-Fit Allocation"
    }
  },
  {
    "id": 35,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 23",
    "title": "Best-Fit Strategiyasi",
    "story": "Butun ro'yxatni qidirib, jarayonga sig'adigan eng kichik bo'shliqni tanlaydigan algoritm qaysi?",
    "task": "Best-fit nomini yozing.",
    "canonical": "best-fit",
    "accepted": [
      "Best-fit",
      "best fit",
      "Best-Fit"
    ],
    "tags": [
      "#BEST_FIT",
      "#STRATEGY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Eng kichik qoldiq qoldiruvchi teshikni tanlash.",
      "flags": [],
      "whenToUse": "Katta bo'shliqlarni saqlab qolishda.",
      "omissionRisk": "Juda mayda yaroqsiz teshikchalar ko'payib ketadi.",
      "syntaxExample": "Best-Fit Allocation"
    }
  },
  {
    "id": 36,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 23",
    "title": "Worst-Fit Strategiyasi",
    "story": "Eng katta bo'shliqni tanlab, qolgan qoldiq qismi keyingi jarayonlarga ham yarasin deydigan strategiya qaysi?",
    "task": "Worst-fit nomini yozing.",
    "canonical": "worst-fit",
    "accepted": [
      "Worst-fit",
      "worst fit",
      "Worst-Fit"
    ],
    "tags": [
      "#WORST_FIT",
      "#STRATEGY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Eng katta teshikni ajratish.",
      "flags": [],
      "whenToUse": "Qoldiq teshik yetarlicha katta bo'lishini ta'minlashda.",
      "omissionRisk": "Katta jarayonlar uchun yirik bo'sh joylar yo'qolib ketadi.",
      "syntaxExample": "Worst-Fit Allocation"
    }
  },
  {
    "id": 37,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "O'rta",
    "source": "L05 Slide 24",
    "title": "Tashqi Fragmentatsiya (External Fragmentation)",
    "story": "Jami bo'sh xotira yetarli, lekin ular mayda-mayda bo'lib sochilib ketganligi sababli yangi jarayon sig'may qolishi nima?",
    "task": "External fragmentation nomini yozing.",
    "canonical": "external fragmentation",
    "accepted": [
      "External fragmentation",
      "external"
    ],
    "tags": [
      "#EXTERNAL_FRAGMENTATION",
      "#MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Uzluksiz bo'lmagan xotira isrofi.",
      "flags": [],
      "whenToUse": "Paging texnologiyasiga o'tish sababini asoslashda.",
      "omissionRisk": "Yangi jarayon yetarli bo'sh RAM bo'lsa ham ishga tushmaydi.",
      "syntaxExample": "External Fragmentation"
    }
  },
  {
    "id": 38,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "O'rta",
    "source": "L05 Slide 24",
    "title": "Ichki Fragmentatsiya (Internal Fragmentation)",
    "story": "Partitsiya yoki sahifa o'lchami jarayon so'raganidan kattaroq bo'lib, bo'lim ichida ishlatilmay qolgan bo'sh joy nima?",
    "task": "Internal fragmentation nomini yozing.",
    "canonical": "internal fragmentation",
    "accepted": [
      "Internal fragmentation",
      "internal"
    ],
    "tags": [
      "#INTERNAL_FRAGMENTATION",
      "#MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Partitsiya ichidagi foydalanilmagan xotira.",
      "flags": [],
      "whenToUse": "Sahifa (page) hajmini tanlashda.",
      "omissionRisk": "Katta sahifa tanlansa har bir jarayonda 2-4KB bo'sh qoladi.",
      "syntaxExample": "Internal Fragmentation"
    }
  },
  {
    "id": 39,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Qiyin",
    "source": "L05 Slide 24",
    "title": "50-Foiz Qoidasi (50% Rule)",
    "story": "First-fit tahliliga ko'ra N ta blok ajratilganda, fragmentatsiya tufayli yana qancha qism yo'qotiladi (0.5 N)?",
    "task": "Yo'qotiladigan bloklar soni formulasini kiriting (0.5 N).",
    "canonical": "0.5 N",
    "accepted": [
      "0.5N",
      "0.5 * N",
      "50%"
    ],
    "tags": [
      "#50_PERCENT_RULE",
      "#FRAGMENTATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tashqi fragmentatsiyaning statistik qonuniyati.",
      "flags": [],
      "whenToUse": "Xotira yo'qotishlarini hisoblashda.",
      "omissionRisk": "RAM ning 33% qismi bekorga isrof bo'lishi mumkin.",
      "syntaxExample": "0.5 N blocks lost to fragmentation"
    }
  },
  {
    "id": 40,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "O'rta",
    "source": "L05 Slide 25",
    "title": "Zichlashtirish (Compaction)",
    "story": "Barcha bo'sh teshiklarni bitta katta uzluksiz blokka aylantirish uchun xotirani surish amali qanday ataladi?",
    "task": "Compaction nomini yozing.",
    "canonical": "compaction",
    "accepted": [
      "Compaction",
      "memory compaction"
    ],
    "tags": [
      "#COMPACTION",
      "#DEFRAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xotira bloklarini surib birlashtirish.",
      "flags": [],
      "whenToUse": "Tashqi fragmentatsiyani yo'qotishda.",
      "omissionRisk": "Og'ir I/O vaqt talab qiladi; dinamik relocation bo'lmasa qilib bo'lmaydi.",
      "syntaxExample": "Memory Compaction"
    }
  },
  {
    "id": 41,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "O'rta",
    "source": "L05 Slide 25",
    "title": "Compaction Uchun Majburiy Shart",
    "story": "Compaction amali bajarilishi uchun xotira manzillarini bog'lash qaysi vaqtda (Execution time) amalga oshishi shart?",
    "task": "Dynamic relocation (execution time) so'zini yozing.",
    "canonical": "dynamic relocation",
    "accepted": [
      "execution time",
      "Dynamic relocation"
    ],
    "tags": [
      "#DYNAMIC_RELOCATION",
      "#COMPACTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jarayon xotirada surilganda manzillar yangilanishi.",
      "flags": [],
      "whenToUse": "Zichlashtirishni amalga oshirishda.",
      "omissionRisk": "Statik manzilli dastur surilsa segmentation fault beradi.",
      "syntaxExample": "Dynamic relocation at execution time"
    }
  },
  {
    "id": 42,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 10",
    "title": "Non-contiguous Allocation Afzalligi",
    "story": "Jarayon qismlari RAM ning turli tarqoq joylariga bo'lib joylashtirilishi tashqi fragmentatsiyani butunlay yo'qotadimi (yes/no)?",
    "task": "Javobni kiriting (yes/no).",
    "canonical": "yes",
    "accepted": [
      "Yes",
      "ha",
      "Ha"
    ],
    "tags": [
      "#NON_CONTIGUOUS",
      "#PAGING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Uzluksiz bo'lmagan erkin xotira taqsimoti.",
      "flags": [],
      "whenToUse": "Paging texnologiyasi asosini tushunishda.",
      "omissionRisk": "Manzillarni tarjima qilish uchun qo'shimcha apparat talab etiladi.",
      "syntaxExample": "Non-contiguous allocation eliminates external fragmentation"
    }
  },
  {
    "id": 43,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 2",
    "title": "Swap Xotirasi (Swapping)",
    "story": "RAM to'lib qolganda jarayonni vaqtinchalik diskdagi bo'limga (Swap space) ko'chirib turish mexanizmi nima?",
    "task": "Swapping so'zini kiriting.",
    "canonical": "swapping",
    "accepted": [
      "Swapping",
      "swap"
    ],
    "tags": [
      "#SWAPPING",
      "#VIRTUAL_MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "RAM yetmaganda jarayonni diskka surib turish.",
      "flags": [],
      "whenToUse": "Xotira to'lib ketishini oldini olishda.",
      "omissionRisk": "Swap ishlatilganda disk sekinligi sababli tizim tormozlanadi.",
      "syntaxExample": "Process Swapping to Disk"
    }
  },
  {
    "id": 44,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "L05 Slide 2",
    "title": "Swappingdagi Asosiy Vaqt Yo'qotilishi",
    "story": "Swapping operatsiyasining unumdorlik xarajatida eng ko'p vaqt nima bilan band bo'ladi (disk transfer time)?",
    "task": "Transfer time so'zini yozing.",
    "canonical": "transfer time",
    "accepted": [
      "disk transfer time",
      "Transfer time"
    ],
    "tags": [
      "#TRANSFER_TIME",
      "#DISK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Katta hajmdagi jarayonni diskdan o'qish/yozish vaqti.",
      "flags": [],
      "whenToUse": "Swap samaradorligini tahlil qilishda.",
      "omissionRisk": "Haddan tashqari ko'p swap tizimni thrashing holatiga tushiradi.",
      "syntaxExample": "Disk Transfer Time dominates swapping cost"
    }
  },
  {
    "id": 45,
    "sectorId": 3,
    "sectorTitle": "Contiguous Allocation & Fragmentatsiya (First/Best/Worst-Fit)",
    "difficulty": "Oson",
    "source": "Linux Free Command",
    "title": "Linux Tizimida Xotira va Swapni Ko'rish",
    "story": "Linuxda jami RAM, ishlatilgan xotira va Swap bo'limi hajmini odam tushunadigan gigabayt/megabaytda ko'rish buyrug'i qaysi?",
    "task": "free buyrug'ini tegishli bayroq bilan yozing.",
    "canonical": "free -h",
    "accepted": [
      "free -m",
      "free",
      "free -h "
    ],
    "tags": [
      "#FREE",
      "#MEMORY_INSPECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Tizim RAM va Swap holatini ko'rsatish.",
      "flags": [
        {
          "flag": "-h",
          "name": "Human readable",
          "position": "free -h",
          "purpose": "GB/MB formatida ko'rsatish",
          "withoutRisk": "Baytlarda noqulay ko'rinadi."
        }
      ],
      "whenToUse": "Server xotirasi holatini zudlik bilan tekshirishda.",
      "omissionRisk": "RAM to'lib qolgani ko'rinmay server qulashi mumkin.",
      "syntaxExample": "free -h"
    }
  },
  {
    "id": 46,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Oson",
    "source": "L05 Slide 26",
    "title": "Sahifalash Modeli (Paging)",
    "story": "Fizik xotira teng o'lchamli qanday bloklarga bo'linadi?",
    "task": "Frames (freymlar) so'zini yozing.",
    "canonical": "frames",
    "accepted": [
      "Frames",
      "frame",
      "Frames "
    ],
    "tags": [
      "#PAGING",
      "#FRAMES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jismoniy xotiraning qat'iy o'lchamdagi bloklari.",
      "flags": [],
      "whenToUse": "Paging apparat arxitekturasida.",
      "omissionRisk": "Freymlarsiz dinamik sahifalash mumkin emas.",
      "syntaxExample": "Physical memory divided into Frames"
    }
  },
  {
    "id": 47,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Oson",
    "source": "L05 Slide 26",
    "title": "Mantiqiy Xotira Bloklari: Pages",
    "story": "Dasturning mantiqiy xotirasi freymlar bilan bir xil o'lchamdagi qanday bloklarga bo'linadi?",
    "task": "Pages (sahifalar) so'zini yozing.",
    "canonical": "pages",
    "accepted": [
      "Pages",
      "page"
    ],
    "tags": [
      "#PAGES",
      "#LOGICAL_MEMORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mantiqiy manzil fazosining bloklari.",
      "flags": [],
      "whenToUse": "Virtual xotirani tashkil etishda.",
      "omissionRisk": "Sahifalar va freymlar o'lchami teng bo'lmasa xotira buziladi.",
      "syntaxExample": "Logical memory divided into Pages"
    }
  },
  {
    "id": 48,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Oson",
    "source": "L05 Slide 27",
    "title": "Mantiqiy Manzilning Ikki Qismi",
    "story": "CPU yaratgan mantiqiy manzil sahifa raqami (p) va nimadan iborat bo'ladi (offset d)?",
    "task": "Offset (siljish) so'zini yozing.",
    "canonical": "offset",
    "accepted": [
      "Offset",
      "page offset",
      "d"
    ],
    "tags": [
      "#OFFSET",
      "#ADDRESS_TRANSLATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Sahifa ichidagi aniq bayt siljishi.",
      "flags": [],
      "whenToUse": "Freym ichidagi manzilni topishda.",
      "omissionRisk": "Offset o'zgarmasdan jismoniy manzilga o'tadi.",
      "syntaxExample": "Logical Address = (Page p, Offset d)"
    }
  },
  {
    "id": 49,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "Oson",
    "source": "L05 Slide 27",
    "title": "Sahifalar Jadvali (Page Table)",
    "story": "Sahifa raqamini (p) jismoniy freym raqamiga (f) o'girish uchun qaysi jadvaldan foydalaniladi?",
    "task": "Page table nomini kiriting.",
    "canonical": "page table",
    "accepted": [
      "Page table",
      "Page Table"
    ],
    "tags": [
      "#PAGE_TABLE",
      "#MMU"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir sahifaning qaysi freymda ekanligi xaritasi.",
      "flags": [],
      "whenToUse": "Har bir xotira murojaatida apparat darajasida.",
      "omissionRisk": "Jadvalsiz virtual manzil fizik manzilga aylanmaydi.",
      "syntaxExample": "Page Table: p -> f"
    }
  },
  {
    "id": 50,
    "sectorId": 4,
    "sectorTitle": "Paging Arxitekturasi & Sahifalar Jadvali (p, d, Frames)",
    "difficulty": "O'rta",
    "source": "L05 Slide 26",
    "title": "Sahifa O'lchami 2 ning Darajasida",
    "story": "Agar sahifa o'lchami 2048 bayt (2 KB) bo'lsa, offset uchun necha bit ajratiladi (2^11 = 2048)?",
    "task": "Bitlar sonini kiriting (11).",
    "canonical": "11",
    "accepted": [
      "11 bits",
      "11 bit"
    ],
    "tags": [
      "#PAGE_SIZE",
      "#BITS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Offset siljishini kodlash uchun zarur bitlar soni.",
      "flags": [],
      "whenToUse": "Virtual manzil arxitekturasini loyihalashda.",
      "omissionRisk": "Bitlar soni xato bo'lsa manzil noto'g'ri o'qiladi.",
      "syntaxExample": "2^11 = 2048 bytes -> 11 bits offset"
    }
  }
];
});
