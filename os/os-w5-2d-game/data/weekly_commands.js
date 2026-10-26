// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 SPECIFIC COMMANDS REPOSITORY
// Modul: 5-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Xotira boshqaruvi, CPU rejalashtirish algoritmlari, MMU, Paging va TLB
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "free",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira va Swap Balansini Ko'rish)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "free [BAYROQLAR]",
    "syntaxRules": "Inson tushunadigan o'lchov birliklarida (MB, GB) ko'rish uchun '-m' yoki '-h' beriladi.",
    "desc": "Linux xotira arxitekturasining holatini tahlil qiluvchi asosiy buyruq. Umumiy jami xotira (total), real ishlatilayotgan xotira (used), butunlay bo'sh xotira (free), disk keshiga ajratilgan xotira (buff/cache) va yangi dasturlar uchun mavjud real xotira (available) miqdorini ko'rsatadi.",
    "flags": [
      {
        "flag": "-h",
        "desc": "Inson tushunadigan format (Human-readable - GB, MB)."
      },
      {
        "flag": "-m",
        "desc": "Barcha sonlarni Megabaytlarda (MB) ko'rsatish."
      },
      {
        "flag": "-g",
        "desc": "Barcha sonlarni Gigabaytlarda (GB) ko'rsatish."
      },
      {
        "flag": "-s [SONIYA]",
        "desc": "Har N soniyada avtomatik qayta yangilab turish."
      },
      {
        "flag": "-w",
        "desc": "Buffer va Cache larni ikkita alohida ustunda kengaytirilgan ko'rsatish (Wide)."
      }
    ],
    "combos": [
      {
        "combo": "free -h",
        "title": "Operativ xotira va Swap holatini bir qarashda bilish",
        "desc": "Jami, ishlatilgan va eng muhimi 'available' xotirani ko'rsatadi."
      },
      {
        "combo": "free -m -w",
        "title": "Buffer va Cache larni alohida ajratib o'lchash",
        "desc": "Xotiraning qancha qismi fayl keshiga xizmat qilayotganini aniqlaydi."
      }
    ],
    "underTheHood": "`/proc/meminfo` faylidagi `MemTotal`, `MemFree`, `MemAvailable`, `Buffers`, `Cached` va `SwapTotal` qiymatlarini o'qiydi. Linux bo'sh turgan xotirani bekor qoldirmaydi, uni avtomatik disk keshiga (buff/cache) aylantiradi; zarur bo'lganda bir zumda dasturlarga qaytaradi.",
    "example": "$ free -h\n               total        used        free      shared  buff/cache   available\nMem:           7.7Gi       2.1Gi       3.2Gi       120Mi       2.4Gi       5.2Gi\nSwap:          2.0Gi          0B       2.0Gi",
    "analogy": "Ish stoli: 'free' bu stolning chang bosib bo'sh turgan joyi, 'buff/cache' esa yaqinda kerak bo'ladi deb stol chetiga vaqtincha terib qo'yilgan kerakli kitoblar. Agar yangi ish boshlasangiz, stol chetidagi kitoblar darhol olinadi ('available').",
    "pitfalls": "'free' ustuni kichik son bo'lib qolsa vahima qilmang! Linuxda eng muhim ko'rsatkich bu 'available' ustunidir. Agar available ko'p bo'lsa, tizimda xotira yetarli."
  },
  {
    "cmd": "pmap",
    "name": "Report Memory Map of a Process (Jarayon Xotira Xaritasini Tahlil Qilish)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "pmap [BAYROQLAR] [PID]",
    "syntaxRules": "Jarayonning virtual xotira sahifalari (Virtual Memory Areas - VMA) qanday taqsimlanganini ko'rsatadi.",
    "desc": "Muayyan bitta jarayonning virtual xotira xaritasini batafsil ochib beradi. Dasturning matn kodi (.text), ma'lumotlari (.data), stek (stack), xip (heap) va qaysi ulashgan (.so) dinamik kutubxonalardan qancha xotira olayotganini ko'rsatadi.",
    "flags": [
      {
        "flag": "-x",
        "desc": "Kengaytirilgan format — RSS (real fizik xotira) va Dirty (o'zgartirilgan) sahifalarni ko'rsatadi."
      },
      {
        "flag": "-d",
        "desc": "Qurilmalar formati (Device format)."
      }
    ],
    "combos": [
      {
        "combo": "pmap -x 1245",
        "title": "Jarayon xotirasini chuqur tahlil qilish",
        "desc": "Kutubxonalar va stek hajmini aniq ko'rsatib, memory leak (xotira sizib chiqishi) ni aniqlaydi."
      },
      {
        "combo": "pmap -x 1245 | tail -n 1",
        "title": "Jarayonning umumiy virtual va fizik hajmini ko'rish",
        "desc": "Jami Address Space va RSS ni chiqaradi."
      }
    ],
    "underTheHood": "`/proc/[PID]/maps` va `/proc/[PID]/smaps` virtual fayllarini tahlil qiladi. Yadro `vm_area_struct` bog'langan ro'yxatini aylanib chiqadi.",
    "example": "$ pmap -x 1205 | head -n 5\n1205:   bash\nAddress           Kbytes     RSS   Dirty Mode  Mapping\n000055c82a1e0000    1132    1132       0 r-x-- bash\n000055c82a3fc000      36      36      36 r---- bash",
    "analogy": "Uyning loyiha chizmasi: qaysi xona yotoqxona (stack), qaysisi mehmonxona (heap) va qaysi qismi umumiy koridor (shared libraries) ekanligini ko'rsatuvchi xarita.",
    "pitfalls": "Virtual xotira hajmi (VSZ) bilan real fizik xotira (RSS) bir xil emas. Ko'pincha dastur 2 GB virtual joy so'rashi, lekin amalda faqat 50 MB fizik RAM ishlatayotgan bo'lishi mumkin."
  },
  {
    "cmd": "swapon",
    "name": "Enable Devices and Files for Paging and Swapping (Swap Xotirasini Yoqish)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "swapon [BAYROQLAR] [QURILMA / SWAP_FAYLI]",
    "syntaxRules": "Diskdagi maxsus partitsiya yoki faylni virtual xotiraning zaxira qismi sifatida faollashtiradi.",
    "desc": "Operativ xotira (RAM) to'lib qolganida tizim qulab tushmasligi (OOM Killer kelmasligi) uchun diskdan ajratilgan Swap maydonini ishga tushiradi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "/etc/fstab faylidagi barcha belgilangan swap qurilmalarini birdaniga yoqish."
      },
      {
        "flag": "-s / --show",
        "desc": "Joriy yoqilgan barcha Swap joylari, ularning hajmi va ishlatilishini ko'rish."
      },
      {
        "flag": "-p [PRIORITET]",
        "desc": "Swap ustuvorligini belgilash (masalan SSD ga yuqoriroq prioritet berish)."
      }
    ],
    "combos": [
      {
        "combo": "swapon --show",
        "title": "Qaysi Swap fayli yoki diski faolligini tekshirish",
        "desc": "NAME TYPE SIZE USED PRIO jadvalini chiqaradi."
      },
      {
        "combo": "sudo swapon /swapfile",
        "title": "Yangi yaratilgan Swap faylini faollashtirish",
        "desc": "RAM ga qo'shimcha disk xotirasini ulaydi."
      }
    ],
    "underTheHood": "`swapon()` tizim chaqiruvini bajaradi. Linux yadrosi xotira boshqaruvchisiga (MMU) sahifalarni ushbu fayl/partitsiyaga chiqarishga (page out) ruxsat beradi.",
    "example": "$ swapon --show\nNAME      TYPE SIZE USED PRIO\n/swapfile file   2G   0B   -2",
    "analogy": "Katta omborxona (RAM) to'lib qolganda, orqa hovlidagi qo'shimcha yerto'lani (Swap) ochib, kam ishlatiladigan yuklarni vaqtincha o'sha yerga taxlab turish.",
    "pitfalls": "Swap maydoni qattiq diskda joylashganligi sababli, operativ xotiradan (RAM) 100 dan 1000 baravargacha sekinroq ishlaydi!"
  },
  {
    "cmd": "swapoff",
    "name": "Disable Devices and Files for Paging and Swapping (Swap Xotirasini O'chirish)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "swapoff [BAYROQLAR] [QURILMA / SWAP_FAYLI]",
    "syntaxRules": "Swapni o'chirishdan oldin undagi barcha ma'lumotlar qaytib RAM ga sig'ishiga ishonch hosil qilish shart!",
    "desc": "Swap maydonini to'xtatadi va diskdagi sahifalarning barchasini qaytadan fizik operativ xotiraga (RAM) yuklab oladi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha faol Swap joylarini o'chirish."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot bilan chiqarish."
      }
    ],
    "combos": [
      {
        "combo": "sudo swapoff -a && sudo swapon -a",
        "title": "Swap xotirasini butunlay tozalash (Flush)",
        "desc": "Swapdagi barcha eskirgan sahifalarni RAM ga ko'chirib, diskni 0 baytgacha bo'shatadi."
      }
    ],
    "underTheHood": "`swapoff()` tizim chaqiruvi barcha sahifalarni diskdan o'qib, fizik RAM ga joylashtiradi (`page fault` chaqirmasdan) va swap jadvalini bo'shatadi.",
    "example": "$ sudo swapoff -v /swapfile\nswapoff /swapfile",
    "analogy": "Yerto'ladagi barcha narsalarni qaytadan do'kon peshtaxtasiga ko'chirib, yerto'la eshigini qulflash.",
    "pitfalls": "Agar siz `swapoff -a` qilganingizda RAM da bo'sh joy yetarli bo'lmasa, Linux yadrosi eng katta dasturlarni birin-ketin o'ldirishni (OOM Killer) boshlaydi!"
  },
  {
    "cmd": "chrt",
    "name": "Manipulate the Real-Time Attributes of a Process (Real-Vaqt Real-Time Rejalashtirishni Boshqarish)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "chrt [BAYROQLAR] [USTUVORLIK] [BUYRUQ / -p PID]",
    "syntaxRules": "Siyosatlar: FIFO (SCHED_FIFO), Round-Robin (SCHED_RR), DeadLine (SCHED_DEADLINE) va Oddiy (SCHED_OTHER).",
    "desc": "Linux jarayonlarini oddiy rejalashtiruvchidan (CFS) chiqarib, qat'iy Real-Vaqt (Real-Time) rejimiga o'tkazish vositasi. Audio qayta ishlash, robototexnika va bir millisekund ham kechikish mumkin bo'lmagan tizimlarda qo'llaniladi.",
    "flags": [
      {
        "flag": "-f",
        "desc": "SCHED_FIFO siyosatini o'rnatish (First-In, First-Out real-time)."
      },
      {
        "flag": "-r",
        "desc": "SCHED_RR siyosatini o'rnatish (Round Robin real-time)."
      },
      {
        "flag": "-o",
        "desc": "Standart CFS siyosatiga qaytarish (SCHED_OTHER)."
      },
      {
        "flag": "-p [PID]",
        "desc": "Mavjud ishlayotgan jarayonning real-vaqt parametrlarini o'zgartirish."
      }
    ],
    "combos": [
      {
        "combo": "chrt -p 1205",
        "title": "Jarayonning joriy rejalashtirish siyosatini ko'rish",
        "desc": "pid 1205's current scheduling policy: SCHED_OTHER"
      },
      {
        "combo": "sudo chrt -f 50 ./robot_control",
        "title": "Dasturni FIFO real-time 50-ustuvorlik bilan boshlash",
        "desc": "Bu dasturga hech qanday oddiy dastur xalaqit bera olmaydi."
      }
    ],
    "underTheHood": "`sched_setscheduler()` va `sched_getscheduler()` tizim chaqiruvlarini bajaradi. Real-time jarayonlar (1-99 ustuvorlik) oddiy jarayonlarning (0) ustidan mutlaq ustunlikka ega.",
    "example": "$ chrt -m\nSCHED_OTHER min/max priority    : 0/0\nSCHED_FIFO min/max priority     : 1/99\nSCHED_RR min/max priority       : 1/99",
    "analogy": "Tez yordam yoki o't o'chirish mashinasi: yo'ldagi barcha oddiy mashinalar (CFS) to'xtab, ularga so'zsiz yo'l beradi.",
    "pitfalls": "Agar `SCHED_FIFO` rejimida cheksiz sikl yozilsa, protsessor 100% o'sha dasturga berilib, butun operatsion tizim (hatto sichqoncha va klaviatura ham) qotib qoladi!"
  },
  {
    "cmd": "taskset",
    "name": "Set or Retrieve a Process's CPU Affinity (Jarayonni Aniq CPU Yadrosiga Bog'lash)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "taskset [BAYROQLAR] [MASKA / -c YADROLAR] [BUYRUQ / -p PID]",
    "syntaxRules": "CPU Affinity — jarayon faqat siz ko'rsatgan yadroda (masalan, faqat 0-yadro yoki 2,3-yadrolarda) ishlashini ta'minlaydi.",
    "desc": "Jarayon protsessor yadrolari o'rtasida sakrab CPU keshini (L1/L2) yo'qotmasligi uchun uni aniq bitta yoki bir nechta CPU yadrosiga mixlab qo'yadi. Katta unumdorlik talab qiluvchi dasturlarni tezlashtirishda qo'llaniladi.",
    "flags": [
      {
        "flag": "-c [RO'YXAT]",
        "desc": "Yadrolarni inson tushunadigan ro'yxatda berish (masalan -c 0,1 yoki -c 2-4)."
      },
      {
        "flag": "-p [PID]",
        "desc": "Ishlayotgan jarayonning CPU bog'liqligini o'zgartirish yoki ko'rish."
      }
    ],
    "combos": [
      {
        "combo": "taskset -c 0,1 python3 heavy_calc.py",
        "title": "Dasturni faqat 0 va 1-yadrolarda ishlatish",
        "desc": "Qolgan yadrolarni boshqa tizim ishlari uchun bo'sh qoldiradi."
      },
      {
        "combo": "sudo taskset -cp 0 1450",
        "title": "Ishlayotgan jarayonni faqat 0-yadroga mixlash",
        "desc": "Jarayonning barcha hisob-kitoblarini 0-yadroga o'tkazadi."
      }
    ],
    "underTheHood": "`sched_setaffinity()` va `sched_getaffinity()` tizim chaqiruvlarini bajaradi. Linux yadrosi jarayonni boshqa yadrolarga ko'chirishdan (migration) to'xtatadi.",
    "example": "$ taskset -cp 1245\npid 1245's current affinity list: 0-3\n$ sudo taskset -cp 2 1245\npid 1245's new affinity list: 2",
    "analogy": "Zavoddagi ishchini 'Sen faqat 2-dastgohda ishlaysan, boshqa stanoklarga o'tib vaqt yo'qotma' deb bitta joyga biriktirish.",
    "pitfalls": "Agar barcha jarayonlar bitta yadroga mixlab qo'yilsa, qolgan yadrolar bo'sh turib, o'sha yadro 100% ga to'lib ketadi."
  },
  {
    "cmd": "sysctl",
    "name": "Configure Kernel Parameters at Runtime (Linux Yadrosi Sozlamalarini Boshqarish)",
    "category": "Tizim & Yadro Sozlamalari",
    "syntax": "sysctl [BAYROQLAR] [PARAMETR[=QIYMAT]]",
    "syntaxRules": "Yadro parametrlarini '/proc/sys/' dagi fayllarni ochmasdan turib boshqarish imkoniyati.",
    "desc": "Linux operatsion tizimi yadrosining tarmoq, xotira, swap va xavfsizlik sozlamalarini (masalan, `vm.swappiness`, `net.ipv4.ip_forward`) real vaqtda o'zgartirish buyrug'i.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Yadroning barcha yuzlab parametrlarini to'liq chiqarish (All)."
      },
      {
        "flag": "-w [KEY=VAL]",
        "desc": "Yadro parametrining yangi qiymatini o'rnatish (Write)."
      },
      {
        "flag": "-p [FAYL]",
        "desc": "Sozlamalarni /etc/sysctl.conf faylidan qayta o'qib qo'llash."
      }
    ],
    "combos": [
      {
        "combo": "sudo sysctl vm.swappiness=10",
        "title": "Swap ishlatish ishtiyoqini kamaytirish",
        "desc": "Tizimga: 'RAM 90% to'lmaguncha Swap ga teginma' deb buyuradi (serverlar uchun ideal)."
      },
      {
        "combo": "sudo sysctl -w net.ipv4.ip_forward=1",
        "title": "Serverni yo'naltiruvchi (Router/NAT) rejimiga yoqish",
        "desc": "Paketlarni bir tarmoqdan ikkinchisiga o'tkazishni yoqadi."
      },
      {
        "combo": "sudo sysctl -p",
        "title": "Barcha o'zgarishlarni darhol kuchga kiritish",
        "desc": "/etc/sysctl.conf dagi sozlamalarni serverni qayta yoqmasdan faollashtiradi."
      }
    ],
    "underTheHood": "`/proc/sys/` virtual fayllariga yozish orqali Linux yadrosi xotirasidagi ichki global o'zgaruvchilarni yangilaydi.",
    "example": "$ sysctl vm.swappiness\nvm.swappiness = 60\n$ sudo sysctl vm.swappiness=10\nvm.swappiness = 10",
    "analogy": "Avtomobilning bort kompyuteri menyusidan ABS, havo harorati va tormoz sezgirligi kabi chuqur sozlamalarni o'zgartirish.",
    "pitfalls": "`sysctl -w` faqat server o'chguncha amal qiladi. Server qayta yoqilganda ham saqlanib qolishi uchun o'zgarishni `/etc/sysctl.conf` fayliga yozib qo'yish shart!"
  },
  {
    "cmd": "systemd-analyze",
    "name": "Analyze System Boot Performance (Server Yoqilish Tezligi va Sekin Xizmatlarni Tahlil Qilish)",
    "category": "Tizim & Diagnostika",
    "syntax": "systemd-analyze [BUYRUQ]",
    "syntaxRules": "Eng foydali buyruqlar: time, blame, critical-chain, plot.",
    "desc": "Server yoqilganda (boot time) qancha vaqt ketganini va aynan qaysi xizmatlar tizim yuklanishini sekinlashtirayotganini soniyasigacha ko'rsatib beradi.",
    "flags": [
      {
        "flag": "time",
        "desc": "Yadro (kernel) va foydalanuvchi qismi (userspace) necha soniyada yoqilganini ko'rish."
      },
      {
        "flag": "blame",
        "desc": "Eng ko'p vaqt yegan xizmatlarni kattasidan kichigiga saralab chiqarish."
      },
      {
        "flag": "critical-chain",
        "desc": "Yuklanish zanjiridagi eng sekin bo'g'inlarni daraxt ko'rinishida ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "systemd-analyze",
        "title": "Umumiy yuklanish vaqtini bilish",
        "desc": "Startup finished in 2.1s (kernel) + 4.5s (userspace) = 6.6s"
      },
      {
        "combo": "systemd-analyze blame | head -n 10",
        "title": "Eng sekin 10 ta xizmatni aniqlash",
        "desc": "Server nega sekin yoqilayotganini fosh qiladi."
      }
    ],
    "underTheHood": "Systemd har bir xizmat boshlangan va tugagan vaqtlarni mikrosekundgacha qayd etib, kritik yo'l (Critical Path) algoritmi bilan tahlil qiladi.",
    "example": "$ systemd-analyze blame | head -n 3\n     2.145s apache2.service\n     1.850s NetworkManager-wait-online.service\n     1.020s plymouth-quit-wait.service",
    "analogy": "Sportchining marraga yugurish sekundomeri: qaysi masofada qancha vaqt yo'qotganini ko'rsatuvchi murabbiy hisoboti.",
    "pitfalls": "`NetworkManager-wait-online.service` ko'pincha internetni uzoq kutib 15-20 soniya yo'qotadi, buni tahlilsiz bilish qiyin."
  },
  {
    "cmd": "FCFS Rejalashtirish",
    "name": "First-Come, First-Served CPU Scheduling (Birinchi Kelganga Birinchi Xizmat Algoritmi)",
    "category": "CPU Rejalashtirish Nazariyasi",
    "syntax": "Nazariy tushuncha / Rejalashtirish algoritmi",
    "syntaxRules": "Preemptive EMAS (Non-preemptive). Jarayon CPU ni olgach, o'z ishi tugamaguncha uni hech kim to'xtata olmaydi.",
    "desc": "Eng sodda CPU rejalashtirish algoritmi. Jarayonlar navbatga (Ready Queue) qaysi tartibda kelgan bo'lsa, xuddi shu tartibda protsessorda to'liq bajariladi.",
    "flags": [
      {
        "flag": "Convoy Effect",
        "desc": "Konvoy effekti — agar 1-o'rinda juda katta (masalan 100 soniya) jarayon kelsa, orqadagi barcha kichik (1 soniyalik) jarayonlar uzoq kutib qoladi."
      },
      {
        "flag": "Kutish vaqti (Waiting Time)",
        "desc": "O'rtacha kutish vaqti ko'pincha juda yuqori bo'ladi."
      }
    ],
    "combos": [
      {
        "combo": "Gantt Diagrammasi: P1(24ms) -> P2(3ms) -> P3(3ms)",
        "title": "Klassik imtihon masalasi",
        "desc": "P1 24ms ishlaydi, P2 24ms kutadi, P3 27ms kutadi. O'rtacha kutish: (0+24+27)/3 = 17ms!"
      },
      {
        "combo": "Teskari tartib: P2(3ms) -> P3(3ms) -> P1(24ms)",
        "title": "Qulay holat",
        "desc": "O'rtacha kutish: (0+3+6)/3 = 3ms ga tushadi!"
      }
    ],
    "underTheHood": "Klassik FIFO (First-In, First-Out) navbati yordamida amalga oshiriladi. Kontekst almashinuvi (Context Switch) juda kam bo'ladi, lekin interaktiv tizimlar uchun yaroqsiz.",
    "example": "Vazifalar: P1=10s, P2=1s, P3=1s.\nP1 navbat boshida tursa, P2 va P3 oddiy ish bo'lsa ham 10 soniya kutadi.",
    "analogy": "Supermarket kassasida bitta aravasini to'ldirib kelgan odam ortida faqat bitta saqich sotib olmoqchi bo'lgan 5 kishining kutib turishi (Konvoy effekti).",
    "pitfalls": "Konvoy effekti (Convoy effect) FCFS ning eng katta kamchiligidir; barcha I/O qurilmalari va kichik jarayonlar bitta yirik CPU jarayonini kutib bekor qoladi."
  },
  {
    "cmd": "SJF / SRTF",
    "name": "Shortest Job First / Shortest Remaining Time First (Eng Qisqa Vazifa Birinchi)",
    "category": "CPU Rejalashtirish Nazariyasi",
    "syntax": "SJF (Non-preemptive) yoki SRTF (Preemptive)",
    "syntaxRules": "Har doim navbatdagi bajarilish vaqti (burst time) eng qisqa bo'lgan jarayonni birinchi qilib CPU ga beradi.",
    "desc": "Matematik jihatdan O'RTACHA KUTISH VAQTINI (Average Waiting Time) eng minimal darajaga tushiruvchi eng optimal rejalashtirish algoritmi.",
    "flags": [
      {
        "flag": "SJF (Non-preemptive)",
        "desc": "Boshlangan qisqa jarayon to'liq tugashiga ruxsat beriladi."
      },
      {
        "flag": "SRTF (Preemptive)",
        "desc": "Agar navbatga yangi, undan ham qisqaroq jarayon kelsa, hozirgi jarayon to'xtatilib (preempt) yangisiga navbat beriladi."
      },
      {
        "flag": "Starvation",
        "desc": "Ochlik xavfi — agar tinimsiz yangi qisqa vazifalar kelaversa, katta og'ir vazifalar hech qachon bajarilmay och qolib ketishi mumkin."
      }
    ],
    "combos": [
      {
        "combo": "P1(6ms), P2(8ms), P3(7ms), P4(3ms) -> Tartib: P4, P1, P3, P2",
        "title": "SJF bo'yicha saralash",
        "desc": "Eng qisqasi (P4=3ms) birinchi bo'lib CPU ni oladi."
      }
    ],
    "underTheHood": "Kelajakdagi CPU burst vaqtini oldindan bilish imkonsiz bo'lganligi sababli, operatsion tizimlar o'tmishdagi statistikani Eksponensial Silliqlash (`Tau_{n+1} = alpha * t_n + (1-alpha) * Tau_n`) formulasi bilan bashorat qiladi.",
    "example": "Shifoxonada oddiy shamollagan bemorlarni birinchi ko'rib, murakkab operatsiyani keyinga qo'yish.",
    "analogy": "Bankda shunchaki kvitansiya to'lovchi odamni soatlab hujjat to'ldiruvchi tadbirkordan oldinroq o'tkazib yuborish.",
    "pitfalls": "Amalda kelajakdagi bajarilish vaqtini 100% aniq bilib bo'lmaydi, shuning uchun sof SJF ko'proq nazariy optimal standart sifatida qo'llaniladi."
  },
  {
    "cmd": "Round Robin (RR)",
    "name": "Round Robin CPU Scheduling (Vaqt Kvantlari Bo'yicha Doiraviy Navbat)",
    "category": "CPU Rejalashtirish Nazariyasi",
    "syntax": "RR [VAQT_KVANTI (q = 10-100ms)]",
    "syntaxRules": "Preemptive algoritm. Har bir jarayonga aniq 'Time Quantum' (masalan 20 millisekund) vaqt beriladi.",
    "desc": "Barcha zamonaviy operatsion tizimlarning (Linux, Windows, macOS) asosi bo'lgan interaktiv rejalashtiruvchi. Har bir jarayon navbatma-navbat kichik vaqt bo'lagida (Time Slice) ishlaydi, vaqti tugashi bilan orqa navbatga o'tadi va barcha dasturlar bir vaqtda ishlayotgandek silliq tuyuladi.",
    "flags": [
      {
        "flag": "Time Quantum (q)",
        "desc": "Vaqt kvanti: agar juda katta bo'lsa FCFS ga aylanadi; agar juda kichik bo'lsa kontekst almashinuvi (Context Switch) tizimni charchatadi."
      },
      {
        "flag": "Starvation yo'q",
        "desc": "Hech qaysi jarayon och qolmaydi, hamma navbati bilan o'z vaqt bo'lagini oladi."
      }
    ],
    "combos": [
      {
        "combo": "q = 20ms, P1(50ms) -> P1 20ms ishlaydi, qolgan 30ms bilan navbat oxiriga o'tadi",
        "title": "Kvantlash mexanizmi",
        "desc": "Barcha jarayonlar teng taqsimotda aylanadi."
      }
    ],
    "underTheHood": "Protsessor apparat taymeri (Hardware Timer Interrupt) belgilangan kvant tugaganda uzilish (interrupt) chaqiradi. Yadro jarayon registrlarini saqlab, navbatdagi jarayonni CPU ga yuklaydi.",
    "example": "3 ta dastur ochilgan: Brauzer, Musiqa va Kod muharriri. RR tufayli musiqa to'xtab qolmaydi, brauzer ham qotmaydi.",
    "analogy": "Bolalarga karuselda navbatma-navbat 2 daqiqadan aylanishga ruxsat berish: hech kim xafa bo'lmaydi, hamma aylanadi.",
    "pitfalls": "Kvant hajmini to'g'ri tanlash juda muhim: kontekst almashinuvi vaqti kvantning 1-2% idan oshmasligi shart."
  },
  {
    "cmd": "Priority Scheduling",
    "name": "Priority CPU Scheduling (Ustuvorlik Bo'yicha Rejalashtirish va Aging Mexanizmi)",
    "category": "CPU Rejalashtirish Nazariyasi",
    "syntax": "Priority [RAQAM]",
    "syntaxRules": "Eng yuqori ustuvorlikka ega jarayon har doim birinchi bo'lib CPU ni oladi.",
    "desc": "Har bir jarayonga uning muhimligiga qarab ustuvorlik (Priority) belgilanadi. Tizim xizmatlari va hayotiy muhim jarayonlar oddiy foydalanuvchi dasturlaridan oldinroq bajariladi.",
    "flags": [
      {
        "flag": "Starvation (Ochlik)",
        "desc": "Past ustuvorlikdagi jarayonlar hech qachon navbat ololmasligi xavfi."
      },
      {
        "flag": "Aging (Qarish yechimi)",
        "desc": "Uzoq kutgan jarayonlarning ustuvorligini asta-sekin sun'iy ravishda oshirib borish orqali ochlikni yengish."
      }
    ],
    "combos": [
      {
        "combo": "Aging: Har 1 daqiqa kutgan jarayon ustuvorligi 1 pog'ona oshiriladi",
        "title": "Ochlikka qarshi Aging formulasi",
        "desc": "Eng past darajadagi jarayon ham vaqt o'tishi bilan eng yuqoriga chiqadi."
      }
    ],
    "underTheHood": "Yadro ustuvorliklar massivini (masalan Linux CFS yoki O(1) dagi Priority Bitmap) ushlab turadi va eng yuqori bitdagi navbatdan jarayonlarni oladi.",
    "example": "Yadro xabarlari (Priority 1) -> Tizim xizmatlari (Priority 10) -> O'yinlar (Priority 20).",
    "analogy": "Aeroportda Business Class va First Class yo'lovchilarining Economy Class dan oldinroq samolyotga chiqishi.",
    "pitfalls": "'Priority Inversion' muammosi — past ustuvorlikdagi jarayon resursni (mutex) qulflab qo'ysa, yuqori ustuvorlikdagi jarayon ham qotib kutib qolishi mumkin."
  },
  {
    "cmd": "MMU",
    "name": "Memory Management Unit (Xotira Boshqaruv Apparat Bloki & Virtual Xotira)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "Apparat ta'minoti (Hardware CPU bloki)",
    "syntaxRules": "Virtual manzilni (Virtual Address) bir zumda Fizik manzilga (Physical Address) tarjima qiladi.",
    "desc": "Protsessor ichidagi eng muhim apparat moduli. Dasturlar ko'radigan barcha virtual manzillarni kompyuterning haqiqiy RAM xotira manzillariga tarjima qiladi va dasturlarning bir-birining xotirasiga ruxsatsiz kirishidan to'liq himoyalaydi (Memory Protection).",
    "flags": [
      {
        "flag": "Page Fault",
        "desc": "Agar so'ralgan sahifa RAM da bo'lmasa, MMU yadroga Page Fault uzilishini yuboradi."
      },
      {
        "flag": "Protection Fault",
        "desc": "Agar dastur faqat o'qish mumkin bo'lgan joyga yozmoqchi bo'lsa Segmentation Fault (SIGSEGV) beradi."
      }
    ],
    "combos": [
      {
        "combo": "Virtual Manzil = [Sahifa Raqami (Page Number) | Siljish (Offset)]",
        "title": "Manzil strukturasi",
        "desc": "4KB sahifa uchun 12 bit offset ishlatiladi."
      }
    ],
    "underTheHood": "CR3 registridagi Page Table ko'rsatkichidan foydalanib ko'p bosqichli sahifalar jadvalini (4-level / 5-level paging) aylanib chiqadi.",
    "example": "Dastur 0x7fff0004 manziliga murojaat qiladi -> MMU uni RAM dagi 0x1a450004 manziliga o'tkazib beradi.",
    "analogy": "Bosh pochtaxonaning indeksatsiya tizimi: har bir virtual xatni olib, shahardagi haqiqiy ko'cha va uy raqamiga yo'naltiradi.",
    "pitfalls": "MMU bo'lmaganida bitta dasturdagi xato butun kompyuter xotirasini buzib, operatsion tizimni qulatgan bo'lar edi."
  },
  {
    "cmd": "Paging & Frames",
    "name": "Paging and Page Frames (Sahifalash va Xotira Kadrlari Arxitekturasi)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "Page (Virtual xotira bo'lagi) -> Frame (Fizik RAM bo'lagi)",
    "syntaxRules": "Standart Linux sahifa hajmi: 4 Kilobayt (4096 bayt). Shuningdek HugePages (2MB, 1GB) mavjud.",
    "desc": "Tashqi fragmentatsiyani (External Fragmentation) butunlay yo'qotgan buyuk xotira modeli. Dasturning virtual xotirasi bir xil o'lchamdagi 'Sahifalar'ga (Pages), fizik RAM esa 'Kadrlar'ga (Frames) bo'linadi. Dastur xotirada ketma-ket joylashishi shart emas, ixtiyoriy bo'sh freymlarga sochilib joylashishi mumkin.",
    "flags": [
      {
        "flag": "Page Table",
        "desc": "Sahifalar jadvali — qaysi Page qaysi Frame da turganini ko'rsatuvchi xarita."
      },
      {
        "flag": "Present Bit",
        "desc": "Sahifa ayni paytda RAM dami (1) yoki Swap diskdami (0) ekanligini ko'rsatuvchi bayroq."
      },
      {
        "flag": "Dirty Bit",
        "desc": "Sahifa o'zgartirilganmi yoki diskdagi bilan bir xilmi."
      }
    ],
    "combos": [
      {
        "combo": "getconf PAGESIZE",
        "title": "Tizimning sahifa hajmini ko'rish",
        "desc": "Natija: 4096 (ya'ni 4KB)."
      }
    ],
    "underTheHood": "Linux yadrosi xotirani `struct page` orqali boshqaradi va Buddy Allocator hamda SLAB/SLUB tizimlari orqali freymlarni taqsimlaydi.",
    "example": "$ getconf PAGE_SIZE\n4096",
    "analogy": "Daftar varag'i (Page) va fotoalbomdagi bo'sh ramka (Frame). Istalgan varaqni albomdagi istalgan bo'sh ramkaga joylashtirish mumkin.",
    "pitfalls": "Ichki fragmentatsiya (Internal Fragmentation): agar dasturga bor-yo'g'i 10 bayt joy kerak bo'lsa ham unga butun boshli 4096 baytlik sahifa beriladi."
  },
  {
    "cmd": "TLB",
    "name": "Translation Lookaside Buffer (Tezkor Manzillar Kesh Xotirasi)",
    "category": "Xotira & Rejalashtirish",
    "syntax": "CPU apparat kesh xotirasi (Hardware Cache)",
    "syntaxRules": "TLB Hit bo'lsa 1 taktda manzil topiladi. TLB Miss bo'lsa sekin Page Table Walk boshlanadi.",
    "desc": "MMU ichidagi o'ta yuqori tezlikka ega maxsus apparat kesh xotirasi. Eng so'nggi tarjima qilingan Virtual->Fizik manzil juftliklarini o'zida saqlaydi, natijada xotiraga murojaat tezligi 10-50 barobargacha oshadi.",
    "flags": [
      {
        "flag": "TLB Hit",
        "desc": "Manzil TLB keshida bor — zudlik bilan RAM dagi fizik manzilga o'tiladi."
      },
      {
        "flag": "TLB Miss",
        "desc": "Manzil keshda yo'q — protsessor sekin Page Table jadvallarini aylanib xotiradan qidiradi."
      },
      {
        "flag": "TLB Flush",
        "desc": "Kontekst almashganda (CR3 o'zgarganda) eski dasturning TLB keshi butunlay tozalanadi."
      }
    ],
    "combos": [
      {
        "combo": "HugePages (2MB)",
        "title": "TLB Miss larni keskin kamaytirish usuli",
        "desc": "4KB o'rniga 2MB sahifalar ishlatilib, TLB ga minglab sahifalar bitta yozuv bilan sig'diriladi (Ma'lumotlar bazalari uchun juda muhim)."
      }
    ],
    "underTheHood": "Assotsiativ xotira (Associative Cache / CAM) bo'lib, bir vaqtning o'zida barcha yozuvlar bo'yicha parallel qidiruvni amalga oshiradi.",
    "example": "TLB Hit tezligi: ~1 nanosekund. Page Table Walk tezligi: ~30-50 nanosekund.",
    "analogy": "Telefoningizdagi 'Oxirgi terilgan raqamlar' (Tezkor kontaktlar): do'stingiz raqamini kitobchadan uzoq qidirmasdan, bitta bosish bilan topish.",
    "pitfalls": "Kontekst almashinuvi (Context Switch) paytida TLB tozalanishi sababli, dastur almashgandan keyingi dastlabki millisekundlarda ko'plab TLB Miss lar yuz beradi."
  }
];
