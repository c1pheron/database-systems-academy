// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 SPECIFIC COMMANDS REPOSITORY
// Modul: 3-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Jarayonlar, signallar, monitoring, ustuvorliklar va tizim chaqiruvlari
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "ps",
    "name": "Process Status (Aktiv Jarayonlar Holati va Ro'yxatini Ko'rish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "ps [BAYROQLAR]",
    "syntaxRules": "Ikki xil uslubda yoziladi: BSD uslubida tiresiz ('ps aux') yoki POSIX uslubida tire bilan ('ps -ef').",
    "desc": "Linux operatsion tizimi xotirasida ishlayotgan barcha jarayonlarning (Processes) oniy fotosuratini (snapshot) oladi. Jarayon ID raqami (PID), uning ota jarayoni (PPID), egasi, protsessor (%CPU) va operativ xotirani (%MEM) qancha yeyotganini ko'rsatadi.",
    "flags": [
      {
        "flag": "aux (BSD)",
        "desc": "a = boshqa foydalanuvchilar jarayonlari, u = foydalanuvchi/resurslar tafsiloti, x = terminalga bog'lanmagan orqa fon (daemon) jarayonlari."
      },
      {
        "flag": "-ef (POSIX)",
        "desc": "-e = barcha jarayonlar, -f = to'liq format (UID, PID, PPID, C, STIME, TTY, TIME, CMD)."
      },
      {
        "flag": "--sort",
        "desc": "Resurs bo'yicha saralash (masalan, --sort=-%mem yoki --sort=-%cpu)."
      },
      {
        "flag": "-u [FOYDALANUVCHI]",
        "desc": "Faqat ma'lum bir foydalanuvchi jarayonlarini ko'rish."
      }
    ],
    "combos": [
      {
        "combo": "ps aux | grep nginx",
        "title": "Nginx ishlayotganini va uning PID larini tekshirish",
        "desc": "Veb-server jarayonlarini topib, master va worker jarayonlarni aniqlaydi."
      },
      {
        "combo": "ps aux --sort=-%mem | head -n 10",
        "title": "Xotirani (RAM) eng ko'p yeyotgan Top-10 jarayon",
        "desc": "Server qotib qolganda qaysi dastur RAM ni to'ldirib yuborganini darhol fosh qiladi."
      },
      {
        "combo": "ps aux --sort=-%cpu | head -n 10",
        "title": "Protsessorni (CPU) 100% qilib qizdirayotgan jarayonlar",
        "desc": "CPU yuklamasini oshirgan dasturlarni aniqlash."
      },
      {
        "combo": "ps -ef --forest",
        "title": "Jarayonlarning ota-bola daraxtini terminalda ko'rish",
        "desc": "Qaysi jarayon kim tomonidan tug'ilganini chiroyli shajarada ko'rsatadi."
      }
    ],
    "underTheHood": "Linux yadrosi har bir jarayon haqidagi to'liq ma'lumotni `/proc` virtual fayl tizimida saqlaydi (masalan `/proc/[PID]/stat`, `/proc/[PID]/status`). `ps` buyrug'i `/proc` katalogidagi sonli papkalarni aylanib chiqib, yadro ma'lumotlarini o'qiydi.",
    "example": "$ ps aux | head -n 3\nUSER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.2 168432 11240 ?        Ss   18:00   0:01 /sbin/init\nroot         2  0.0  0.0      0     0 ?        S    18:00   0:00 [kthreadd]",
    "analogy": "Kasalxonadagi bemorlar monitoring paneli: kimning yurak urishi (CPU) qanday, qancha dori (RAM) olayotgani va xonasi (PID) ko'rinib turadi.",
    "pitfalls": "`ps` doimiy yangilanib turmaydi, u faqat buyruq kiritilgan millisekunddagi holatni (oniy fotosuratni) ko'rsatadi. Jonli yangilanish uchun `top` yoki `htop` kerak."
  },
  {
    "cmd": "top",
    "name": "Real-time Process Activity Monitor (Jonli Resurslar va Jarayonlar Monitoringi)",
    "category": "Jarayonlar & Signallar",
    "syntax": "top [BAYROQLAR]",
    "syntaxRules": "Ichki boshqaruv tugmalari: 'q' - chiqish, 'k' - jarayonni o'ldirish (kill), 'M' - xotira bo'yicha saralash, 'P' - CPU bo'yicha saralash.",
    "desc": "Tizim resurslari (CPU, RAM, Swap, Load Average) va eng faol jarayonlarni real vaqtda har 3 soniyada avtomatik yangilab turuvchi dinamik monitoring tizimi.",
    "flags": [
      {
        "flag": "-d [SON]",
        "desc": "Yangilanish tezligini soniyalarda belgilash (masalan, -d 1 har soniyada)."
      },
      {
        "flag": "-u [FOYDALANUVCHI]",
        "desc": "Faqat tanlangan foydalanuvchi jarayonlarini kuzatish."
      },
      {
        "flag": "-b",
        "desc": "Paketli (Batch) rejim — skriptlarga yozish uchun ekranni to'xtatmasdan oqim qilib chiqarish."
      },
      {
        "flag": "-n [SON]",
        "desc": "Necha marta yangilangandan so'ng dastur o'zi yopilishi."
      }
    ],
    "combos": [
      {
        "combo": "top -d 1",
        "title": "Har soniyada yangilanuvchi monitoring",
        "desc": "Resurslarning keskin sakrashlarini tutib olish uchun."
      },
      {
        "combo": "top -b -n 1 > system_snapshot.txt",
        "title": "Tizim holatini bitta faylga muhrlab saqlash",
        "desc": "Avtomatlashtirilgan hisobotlar uchun juda qulay."
      }
    ],
    "underTheHood": "Yadro `/proc/stat`, `/proc/meminfo` va `/proc/loadavg` fayllarini muntazam o'qiydi va terminalni `ncurses` kutubxonasi orqali qayta chizib boradi.",
    "example": "$ top\ntop - 19:30:00 up 1:30, 2 users, load average: 0.15, 0.20, 0.18\nTasks: 120 total, 1 running, 119 sleeping, 0 stopped, 0 zombie\n%Cpu(s): 2.5 us, 1.0 sy, 0.0 ni, 96.5 id\nMiB Mem : 7920.0 total, 4500.0 free, 1800.0 used, 1620.0 buff/cache",
    "analogy": "Samolyot kabinasidagi barcha datchiklar: balandlik, tezlik, yonilg'i qoldig'i real vaqtda o'zgarib turadi.",
    "pitfalls": "`Tasks` qatoridagi `zombie` (zombi jarayonlar) soni oshib ketmasligi kerak! Zombilar tugagan, lekin ota jarayoni `wait()` qilmagan xotira jadvalidagi o'lik yozuvlardir."
  },
  {
    "cmd": "htop",
    "name": "Interactive Process Viewer (Rangli va Interaktiv Jarayonlar Menejeri)",
    "category": "Jarayonlar & Signallar",
    "syntax": "htop [BAYROQLAR]",
    "syntaxRules": "F1-F10 funksional tugmalari orqali boshqariladi (F9 - kill, F6 - sort, F3 - search, F10 - exit). Sichqoncha bosilishini qo'llab-quvvatlaydi.",
    "desc": "`top` buyrug'ining zamonaviy, rangli va o'ta qulay muqobili. Barcha CPU yadrolarini alohida foizlar va chiroyli diagrammalarda ko'rsatadi, sichqoncha bilan jarayonni tanlab, bir tugma bilan o'ldirish yoki ustuvorligini (nice) o'zgartirish imkonini beradi.",
    "flags": [
      {
        "flag": "-u [USER]",
        "desc": "Faqat ko'rsatilgan foydalanuvchini ko'rish."
      },
      {
        "flag": "-p [PID,...]",
        "desc": "Faqat tanlangan PID raqamlarini kuzatish."
      },
      {
        "flag": "-t",
        "desc": "Jarayonlarni daraxt (tree) ko'rinishida ochish."
      }
    ],
    "combos": [
      {
        "combo": "htop",
        "title": "Interaktiv monitoringni boshlash",
        "desc": "Rangli grafik panellar bilan butun tizimni ko'rish."
      },
      {
        "combo": "htop -u student",
        "title": "Faqat o'z jarayonlarimni kuzatish",
        "desc": "Ortiqcha tizim jarayonlarini chetlab o'tish."
      }
    ],
    "underTheHood": "C tilida `ncurses` yordamida yozilgan bo'lib, `/proc` dagi barcha ma'lumotlarni parallel yadro oqimlari (threads) bilan tahlil qiladi.",
    "example": "$ htop\n# F9 tugmasini bosing -> SIGTERM (15) yoki SIGKILL (9) ni tanlang -> Enter bosing!",
    "analogy": "Eski qora-oq televizordan zamonaviy rangli Smart televizorga o'tishdek qulaylik.",
    "pitfalls": "Minimalistik serverlarda `htop` o'rnatilmagan bo'lishi mumkin (`sudo apt install htop`), bunday paytda doimo standart `top` yordamga keladi."
  },
  {
    "cmd": "pgrep",
    "name": "Process Grep (Jarayon Nomiga Qarab PID Raqamini Topish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "pgrep [BAYROQLAR] 'JARAYON_NOMI'",
    "syntaxRules": "Oddiy 'ps aux | grep nom' o'rnini bosuvchi tezkor va xatosiz buyruq.",
    "desc": "Nomiga yoki buyruqlar satriga qarab ishlayotgan barcha jarayonlarning PID raqamlarini bir zumda topib beradi.",
    "flags": [
      {
        "flag": "-l",
        "desc": "PID bilan birga jarayon nomini ham ko'rsatish (List name)."
      },
      {
        "flag": "-a",
        "desc": "To'liq buyruqlar satrini chiqarish (Full command line)."
      },
      {
        "flag": "-u [USER]",
        "desc": "Faqat belgilangan foydalanuvchining jarayonlarini topish."
      },
      {
        "flag": "-c",
        "desc": "Faqat mos keluvchi jarayonlar sonini hisoblash (Count)."
      }
    ],
    "combos": [
      {
        "combo": "pgrep -l python",
        "title": "Barcha ishlayotgan Python dasturlari PID larini topish",
        "desc": "Masalan: 1245 python3, 1450 python3"
      },
      {
        "combo": "pgrep -a nginx",
        "title": "Nginx ning to'liq argumentlari bilan PID larini ko'rish",
        "desc": "Qaysi konfiguratsiya bilan ishga tushganini aniqlaydi."
      }
    ],
    "underTheHood": "`/proc/[PID]/cmdline` va `/proc/[PID]/stat` fayllarini o'qib, RegEx qidiruvini amalga oshiradi. `grep` dan farqli ravishda, o'zining qidiruv jarayonini natijaga qo'shib chalkashtirmaydi.",
    "example": "$ pgrep -l sshd\n854 sshd\n1240 sshd",
    "analogy": "Telefon kitobchasidan 'Ali' deb yozib uning telefon raqamini (PID) topish.",
    "pitfalls": "`ps aux | grep nom` qilinganda `grep` ning o'zi ham ro'yxatda chiqib qoladi. `pgrep` esa faqat haqiqiy nishon jarayonni topadi."
  },
  {
    "cmd": "pkill",
    "name": "Process Kill by Name (Jarayon Nomi Bo'yicha Signal Yuborish / O'ldirish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "pkill [BAYROQLAR] [SIGNAL] 'JARAYON_NOMI'",
    "syntaxRules": "PID raqamini bilish shart emas, dasturning nomini ko'rsatish kifoya.",
    "desc": "Nomi bo'yicha mos kelgan barcha jarayonlarga signal (standart holatda SIGTERM=15) yuborib ularni to'xtatadi.",
    "flags": [
      {
        "flag": "-9 / -KILL",
        "desc": "Majburiy va darhol o'ldirish (SIGKILL) — dastur qarshilik qila olmaydi."
      },
      {
        "flag": "-u [USER]",
        "desc": "Faqat muayyan foydalanuvchiga tegishli jarayonlarni to'xtatish."
      },
      {
        "flag": "-f",
        "desc": "Faqat jarayon nomini emas, uning barcha argumentlarini ham hisobga olib qidirish."
      },
      {
        "flag": "-HUP",
        "desc": "Konfiguratsiyani qayta yuklash signalini yuborish (SIGHUP=1)."
      }
    ],
    "combos": [
      {
        "combo": "sudo pkill -9 -f 'python app.py'",
        "title": "Muzlab qolgan Python dasturini majburiy o'chirish",
        "desc": "Nomida app.py bo'lgan barcha jarayonlarni ildizi bilan yo'q qiladi."
      },
      {
        "combo": "sudo pkill -u guest_user",
        "title": "Mehmon foydalanuvchining barcha dasturlarini yopish",
        "desc": "Mehmonning barcha jarayonlarini to'xtatadi."
      },
      {
        "combo": "sudo pkill -HUP nginx",
        "title": "Nginx ni to'xtatmasdan sozlamalarini yangilash",
        "desc": "SIGHUP yuborib konfiguratsiyani qayta o'qiydi."
      }
    ],
    "underTheHood": "`pgrep` kabi `/proc` dan PID larni topadi va har biriga `kill(pid, signal)` tizim chaqiruvini yuboradi.",
    "example": "$ pkill -9 firefox\n# Barcha ochilgan Firefox oynalarini bir zumda yopadi",
    "analogy": "Sinfdagi barcha 'Ali' ismli o'quvchilarga bir vaqtning o'zida 'O'rningizdan turing' deb signal berish.",
    "pitfalls": "O'ta ehtiyot bo'ling: `pkill -9 p` deb bitta harf yozsangiz, nomida 'p' harfi bor barcha jarayonlar (masalan `systemd`, `pipewire`) o'lib tizim qulashi mumkin!"
  },
  {
    "cmd": "kill",
    "name": "Send Signal to Process (Jarayonga Signal Yuborish / PID Bo'yicha To'xtatish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "kill [SIGNAL] [PID...]",
    "syntaxRules": "Standart signal: -15 (SIGTERM - muloyim to'xtash). Majburiy signal: -9 (SIGKILL).",
    "desc": "Linux jarayonlariga operatsion tizim signallarini yuboruvchi asosiy mexanizm. Jarayonni xavfsiz yakunlash, qayta yuklash yoki majburiy o'ldirish uchun ishlatiladi.",
    "flags": [
      {
        "flag": "-l",
        "desc": "Barcha 64 ta Linux signallari ro'yxatini va raqamlarini ko'rish (List signals)."
      },
      {
        "flag": "-15 (SIGTERM)",
        "desc": "Standart: jarayonga o'z ishini yakunlab, fayllarni yopib, xotirani tozalab xavfsiz chiqishini so'raydi."
      },
      {
        "flag": "-9 (SIGKILL)",
        "desc": "Majburiy qatl: Yadro jarayonni darhol xotiradan yulib oladi. Dastur buni ushlay olmaydi va qarshilik ko'rsatolmaydi."
      },
      {
        "flag": "-2 (SIGINT)",
        "desc": "Interaktiv to'xtatish — xuddi klaviaturadagi 'Ctrl + C' bosilgandek signal beradi."
      },
      {
        "flag": "-19 (SIGSTOP)",
        "desc": "Jarayonni vaqtincha muzlatib qo'yish (Pause)."
      },
      {
        "flag": "-18 (SIGCONT)",
        "desc": "Muzlatilgan jarayonni yana davom ettirish (Resume)."
      }
    ],
    "combos": [
      {
        "combo": "kill 1450",
        "title": "Jarayonni xavfsiz to'xtatish (SIGTERM=15)",
        "desc": "Eng to'g'ri usul — dastur o'z bazasini saqlab, toza yopiladi."
      },
      {
        "combo": "kill -9 1450",
        "title": "Muzlab qolgan o'jar jarayonni majburiy o'ldirish (SIGKILL)",
        "desc": "Agar oddiy kill ga javob bermasa, yadro darajasida yo'q qiladi."
      },
      {
        "combo": "kill -STOP 1450 && sleep 5 && kill -CONT 1450",
        "title": "Jarayonni 5 soniyaga muzlatib, keyin uyg'otish",
        "desc": "CPU yuklamasini vaqtincha tushirish uchun fokus."
      }
    ],
    "underTheHood": "`kill(pid, sig)` tizim chaqiruvini bajaradi. Linux yadrosi nishon jarayonning `task_struct` dagi `pending` signallar navbatiga tegishli bitni qo'yadi. Agar signal 9 (SIGKILL) yoki 19 (SIGSTOP) bo'lsa, jarayon kodiga uzatilmasdan yadro darajasida bajariladi.",
    "example": "$ kill -l\n 1) SIGHUP       2) SIGINT       3) SIGQUIT      9) SIGKILL     15) SIGTERM\n$ kill -9 2045",
    "analogy": "SIGTERM (15) — do'konga kelib 'Iltimos, eshikni yoping, ish vaqti tugadi' deb aytish. SIGKILL (9) — binoni elektrini o'chirib qo'yish.",
    "pitfalls": "Har doim avval oddiy `kill PID` (SIGTERM) ishlatilishi shart! Darhol `-9` ishlatilsa, ma'lumotlar bazasi fayllari buzilishi (data corruption) yuz berishi mumkin."
  },
  {
    "cmd": "killall",
    "name": "Kill Processes by Exact Name (Aniq Nomi Bo'yicha Barcha Jarayonlarni To'xtatish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "killall [BAYROQLAR] [SIGNAL] [ANIQ_NOM]",
    "syntaxRules": "Nomi to'liq va aniq mos kelishi kerak (pkill dan farqli ravishda qisman emas, to'liq nom talab etadi).",
    "desc": "Berilgan nomga ega bo'lgan barcha nusxadagi jarayonlarni bir zumda to'xtatadi.",
    "flags": [
      {
        "flag": "-u [USER]",
        "desc": "Faqat shu foydalanuvchining jarayonlarini to'xtatish."
      },
      {
        "flag": "-w",
        "desc": "Barcha jarayonlar to'liq o'lib bo'lishini kutish (Wait)."
      },
      {
        "flag": "-i",
        "desc": "Har bir jarayonni o'ldirishdan oldin tasdiq so'rash (Interactive)."
      },
      {
        "flag": "-9 / -KILL",
        "desc": "Majburiy o'ldirish."
      }
    ],
    "combos": [
      {
        "combo": "killall -9 nginx",
        "title": "Barcha Nginx worker va master jarayonlarini to'xtatish",
        "desc": "Nginx ning barcha ochiq nusxalarini darhol yopadi."
      },
      {
        "combo": "killall -u student -w chrome",
        "title": "Talabaning barcha Chrome oynalari yopilishini kutish",
        "desc": "To'liq tugashini kutib xabar beradi."
      }
    ],
    "underTheHood": "`/proc` ni ko'rib chiqadi, jarayon nomlarini solishtiradi va har bir mos kelganga `kill()` chaqiradi.",
    "example": "$ sudo killall -9 apache2",
    "analogy": "Zavoddagi barcha bir xil robotlarni bitta pult tugmasi bilan o'chirish.",
    "pitfalls": "Solaris yoki boshqa Unix tizimlarida `killall` BARCHA jarayonlarni (butun tizimni) o'ldiradi! Linuxda esa faqat berilgan nomdagilarni to'xtatadi."
  },
  {
    "cmd": "pstree",
    "name": "Display a Tree of Processes (Jarayonlar Oila Shajarasini Ko'rish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "pstree [BAYROQLAR] [PID/USER]",
    "syntaxRules": "Init/Systemd (PID 1) dan boshlab barcha ota va bola jarayonlarni daraxt qilib chizadi.",
    "desc": "Linuxdagi barcha jarayonlarning ierarxiyasini vizual daraxt shaklida ko'rsatadi. Qaysi jarayon qaysi dastur tomonidan tug'ilganini (fork qilinganini) tushunishda eng qulay vosita.",
    "flags": [
      {
        "flag": "-p",
        "desc": "Har bir jarayon yonida uning PID raqamini ham ko'rsatish (PIDs)."
      },
      {
        "flag": "-u",
        "desc": "Agar jarayon egasi o'zgargan bo'lsa, foydalanuvchi nomini ham ko'rsatish."
      },
      {
        "flag": "-a",
        "desc": "Buyruqlar satri argumentlarini to'liq chiqarish."
      },
      {
        "flag": "-h",
        "desc": "Joriy jarayon va uning ota ajdodlarini yorqin rang bilan belgilash (Highlight)."
      }
    ],
    "combos": [
      {
        "combo": "pstree -p",
        "title": "Jarayonlar daraxtini PID lari bilan ko'rish",
        "desc": "Ota-bola bog'liqliklarini aniq PID raqamlari bilan tahlil qilish."
      },
      {
        "combo": "pstree -p student",
        "title": "Faqat bitta talabaning dasturlari shajarasini ko'rish",
        "desc": "Talaba qaysi terminaldan qanday dasturlar ochganini kuzatish."
      }
    ],
    "underTheHood": "`/proc/[PID]/stat` ichidagi 4-maydon bo'lgan `PPID` (Parent Process ID) qiymatlarini yig'adi va daraxtsimon grafik tuzilmasini tuzib terminalga chizadi.",
    "example": "$ pstree -p | head -n 5\nsystemd(1)─┬─cron(450)\n           ├─dbus-daemon(455)\n           ├─sshd(850)───sshd(1200)───bash(1205)───pstree(1350)",
    "analogy": "Oila shajarasi ( genealogy tree): Bobo (systemd) -> Ota (sshd) -> Bola (bash) -> Nevara (pstree).",
    "pitfalls": "Agar ota jarayon o'lib qolsa, uning bola jarayonlari 'yetim' (orphan) bo'lib qoladi va ularni avtomatik ravishda `systemd` (PID 1) o'z qaramog'iga asrab oladi (reparenting)."
  },
  {
    "cmd": "nice",
    "name": "Run a Program with Modified Scheduling Priority (Jarayon Ustuvorligi Bilan Ishga Tushirish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "nice [BAYROQLAR] BUYRUQ",
    "syntaxRules": "Nice qiymati -20 dan (eng yuqori ustuvorlik) +19 gacha (eng past ustuvorlik) bo'ladi. Standart qiymat 0.",
    "desc": "Yangi dasturni ishga tushirishda unga maxsus ustuvorlik (Nice value) beradi. 'Nice' qanchalik katta musbat bo'lsa (masalan +19), u shunchalik 'mehribon' (boshqalarga navbat beruvchi) bo'ladi va CPU vaqtini kamroq oladi.",
    "flags": [
      {
        "flag": "-n [QIYMAT]",
        "desc": "Ustuvorlik darajasini belgilash (-20 dan 19 gacha). Manfiy qiymat faqat root uchun ruxsat etilgan."
      }
    ],
    "combos": [
      {
        "combo": "nice -n 19 tar -czvf archive.tar.gz /data",
        "title": "Serverni qotirmasdan orqa fonda og'ir arxivlash",
        "desc": "Arxivlash eng past ustuvorlikda ishlaydi, veb-sayt foydalanuvchilariga umuman xalaqit bermaydi."
      },
      {
        "combo": "sudo nice -n -10 ./critical_task",
        "title": "O'ta muhim dasturni yuqori ustuvorlik bilan boshlash",
        "desc": "CPU unga ko'proq vaqt ajratadi."
      }
    ],
    "underTheHood": "Linux yadrosining CFS (Completely Fair Scheduler) rejalashtiruvchisidagi `vruntime` (virtual runtime) koeffitsientini o'zgartiradi. `setpriority()` tizim chaqiruvini bajaradi.",
    "example": "$ nice -n 15 python3 train_ai.py\n# AI modeli o'qitiladi, lekin kompyuter umuman qotmaydi",
    "analogy": "Kassadagi navbat: 'Marhamat, men shoshilmayapman, siz o'tib keting' deb o'zgalarga yo'l beruvchi odobli (nice) odam.",
    "pitfalls": "Oddiy foydalanuvchi faqat ustuvorlikni pasaytira oladi (musbat son beradi). Ustuvorlikni oshirish (manfiy son berish) faqat root huquqi bilan mumkin."
  },
  {
    "cmd": "renice",
    "name": "Alter Priority of Running Processes (Ishlab Turgan Jarayon Ustuvorligini O'zgartirish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "renice [QIYMAT] [BAYROQLAR] [PID/USER]",
    "syntaxRules": "Allaqaqon ishlayotgan jarayonning ustuvorligini to'xtatmasdan turib o'zgartiradi.",
    "desc": "Ayni paytda xotirada ishlayotgan dasturning Nice darajasini dinamik ravishda oshirish yoki tushirish imkonini beradi.",
    "flags": [
      {
        "flag": "-p [PID]",
        "desc": "PID raqami bo'yicha o'zgartirish (standart)."
      },
      {
        "flag": "-u [USER]",
        "desc": "Foydalanuvchining barcha jarayonlari ustuvorligini bir vaqtda o'zgartirish."
      }
    ],
    "combos": [
      {
        "combo": "renice +10 -p 1245",
        "title": "Ko'p CPU yeyotgan jarayonni tinchlantirish",
        "desc": "1245-jarayonning ustuvorligini pasaytiradi."
      },
      {
        "combo": "sudo renice -5 -p 850",
        "title": "Veb-serverga ko'proq kuch berish",
        "desc": "Jarayonga yuqoriroq ustuvorlik tayinlaydi."
      }
    ],
    "underTheHood": "`setpriority(PRIO_PROCESS, pid, priority)` tizim chaqiruvini amalga oshiradi.",
    "example": "$ renice +5 -p 3421\n3421 (process ID) old priority 0, new priority 5",
    "analogy": "Harakatlanayotgan avtomobilning tezlik rejimini Sport rejimdan Eko rejimga o'tkazish.",
    "pitfalls": "Oddiy foydalanuvchi bir marta ustuvorlikni pasaytirsa (masalan 10 qilsa), uni qaytib yana 0 ga ko'tara olmaydi (faqat root bajara oladi)."
  },
  {
    "cmd": "jobs",
    "name": "List Active Jobs in Current Shell (Joriy Sessiyadagi Fon Vazifalarini Ko'rish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "jobs [BAYROQLAR]",
    "syntaxRules": "Faqat joriy terminal sessiyasida orqa fonga o'tkazilgan vazifalarni ko'rsatadi.",
    "desc": "Ayni terminal oynasida orqa fonga (&) yuborilgan yoki Ctrl+Z orqali to'xtatib qo'yilgan barcha vazifalarni ularning job raqami ([1], [2]) bilan ro'yxatlaydi.",
    "flags": [
      {
        "flag": "-l",
        "desc": "Vazifaning PID raqamini ham ko'rsatish (List PIDs)."
      },
      {
        "flag": "-r",
        "desc": "Faqat ayni paytda ishlayotgan (Running) vazifalarni ko'rish."
      },
      {
        "flag": "-s",
        "desc": "Faqat to'xtatib qo'yilgan (Stopped) vazifalarni ko'rish."
      }
    ],
    "combos": [
      {
        "combo": "jobs -l",
        "title": "Barcha fon vazifalarini PID lari bilan ko'rish",
        "desc": "[1]+ 15420 Running ./backup.sh &"
      }
    ],
    "underTheHood": "Shell ning o'zida saqlanuvchi Job Control strukturasini o'qiydi. Har bir vazifaga alohida Process Group ID (PGID) ajratiladi.",
    "example": "$ jobs\n[1]+  Running                 python3 worker.py &\n[2]-  Stopped                 vim report.txt",
    "analogy": "Smartfoningizda orqa fonda ochiq turgan ilovalar ro'yxati.",
    "pitfalls": "`jobs` faqat ayni shu terminal oynasida boshlangan vazifalarni ko'rsatadi. Boshqa terminaldan ochilgan vazifalarni ko'rish uchun `ps` kerak."
  },
  {
    "cmd": "bg",
    "name": "Send Job to Background (To'xtatilgan Vazifani Orqa Fonda Davom Ettirish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "bg [%JOB_RAQAMI]",
    "syntaxRules": "Parametrsiz eng oxirgi to'xtatilgan vazifani fonga jo'natadi.",
    "desc": "Ctrl+Z bilan vaqtincha muzlatib qo'yilgan dasturni terminalni band qilmasdan, orqa fonda (background) ishlashda davom etishi uchun uyg'otadi.",
    "flags": [
      {
        "flag": "%1, %2",
        "desc": "Aniq vazifa raqamini ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "bg %1",
        "title": "1-vazifani orqa fonda yurgizish",
        "desc": "To'xtab turgan 1-vazifani fonga o'tkazib ishga soladi."
      }
    ],
    "underTheHood": "Shell nishon jarayon guruhiga `SIGCONT` (18) signalini yuboradi va uni orqa fon guruhiga o'tkazadi.",
    "example": "$ ./long_build.sh\n^Z\n[1]+  Stopped                 ./long_build.sh\n$ bg %1\n[1]+ ./long_build.sh &",
    "analogy": "Muzlatgichdan muzni olib, uni sekin orqa xonada erishiga qo'yib yuborish.",
    "pitfalls": "Agar dastur foydalanuvchidan klaviatura orqali kiritishni (stdin) kutayotgan bo'lsa, orqa fonda baribir to'xtab qoladi (`SIGTTIN` signali bilan)."
  },
  {
    "cmd": "fg",
    "name": "Bring Job to Foreground (Orqa Fondagi Vazifani Old Ekranga Qaytarish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "fg [%JOB_RAQAMI]",
    "syntaxRules": "Dasturni yana terminalning old qismiga qaytaradi, shunda u yana klaviatura boshqaruviga o'tadi.",
    "desc": "Orqa fonda ishlayotgan yoki to'xtatilgan dasturni yana asosiy ekranga (foreground) chaqirib oladi.",
    "flags": [
      {
        "flag": "%1, %2",
        "desc": "Aniq vazifa raqamini ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "fg %1",
        "title": "1-vazifani old ekranga qaytarish",
        "desc": "Dastur yana to'liq terminalni egallaydi."
      }
    ],
    "underTheHood": "Shell `tcsetpgrp()` chaqiruvi orqali terminalning boshqaruvini (controlling terminal) orqa fondagi jarayon guruhiga qaytaradi va `SIGCONT` yuboradi.",
    "example": "$ jobs\n[1]+  Stopped                 vim config.txt\n$ fg %1\n# Vim yana to'liq ekranda ochiladi!",
    "analogy": "Orqa fonda minimallashtirilgan oynani yana butun ekranga kattalashtirib ochish.",
    "pitfalls": "Agar bir nechta jobs bo'lsa, adashmaslik uchun raqamini ko'rsating: `fg %2`."
  },
  {
    "cmd": "nohup",
    "name": "No Hangup (SSH Sessiyasi Yopilganda Ham Dasturni O'chirmasdan Saqlash)",
    "category": "Jarayonlar & Signallar",
    "syntax": "nohup BUYRUQ [ARGUMENTLAR...] &",
    "syntaxRules": "Har doim buyruq oxiriga '&' (orqa fon) belgisi qo'yiladi. Natijalarni 'nohup.out' fayliga yozib boradi.",
    "desc": "SSH orqali serverga ulanganda eng kerakli qurol. Odatda SSH terminal yopilsa, uning ichidagi barcha dasturlar ham o'lib ketadi. `nohup` dasturni `SIGHUP` (terminal uzilish) signaliga sezgir bo'lmagan qilib qo'yadi va SSH uzilsa ham serverda 24/7 ishlashda davom etadi.",
    "flags": [
      {
        "flag": "--help",
        "desc": "Yordam ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "nohup python3 server.py > server.log 2>&1 &",
        "title": "O'lmas orqa fon serverini ishga tushirish (Oltin formula)",
        "desc": "Terminalni yopib ketsangiz ham server ishlayveradi, xatolar server.log ga tushadi."
      },
      {
        "combo": "nohup ./migrate_db.sh &",
        "title": "Katta ma'lumotlar bazasi migratsiyasini xavfsiz boshlash",
        "desc": "Internet uzilib qolsa ham migratsiya oxirigacha yetkaziladi."
      }
    ],
    "underTheHood": "Dastur boshlanishidan oldin `signal(SIGHUP, SIG_IGN)` tizim chaqiruvini bajaradi, ya'ni `SIGHUP` (terminal uzilishi) signalini butunlay e'tiborsiz qoldirishni (ignore) buyuradi.",
    "example": "$ nohup python3 app.py &\n[1] 23415\nnohup: ignoring input and appending output to 'nohup.out'",
    "analogy": "Xodim ishdan ketayotganda kompyuterni o'chirmasdan, unga 'Tun bo'yi hisobotni hisoblab tur' deb qoldirib ketishi.",
    "pitfalls": "Agar chiqish faylini (`> log.txt`) ko'rsatmasangiz, avtomatik `nohup.out` fayli ochiladi va vaqt o'tishi bilan u gigabaytlab joy olib diskni to'ldirishi mumkin."
  },
  {
    "cmd": "disown",
    "name": "Remove Job from Current Shell (Jarayonni Qobiq Nazoratidan Chiqarish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "disown [BAYROQLAR] [%JOB_RAQAMI / PID]",
    "syntaxRules": "Allaqaqon ishlab turgan jarayonni terminaldan ajratib olish imkonini beradi.",
    "desc": "Agar siz buyruqni `nohup` siz ishga tushirib qo'ygan bo'lsangiz, uni to'xtatmasdan turib joriy shell ro'yxatidan ajratib oladi va terminal yopilganda o'lmaydigan qiladi.",
    "flags": [
      {
        "flag": "-h",
        "desc": "Jarayonni ro'yxatda saqlaydi, lekin unga SIGHUP bormaydigan qiladi."
      },
      {
        "flag": "-a",
        "desc": "Barcha joriy fon vazifalariga nisbatan qo'llash."
      }
    ],
    "combos": [
      {
        "combo": "python3 long.py &\n$ disown",
        "title": "Unutilgan nohup o'rniga disown qilish",
        "desc": "Orqa fonga o'tgan dasturni terminaldan uzib mustaqil qiladi."
      }
    ],
    "underTheHood": "Shell ichki xotirasidagi jobs ro'yxatidan yozuvni o'chiradi va unga SIGHUP signalini yubormaslikni belgilaydi.",
    "example": "$ ./backup.sh &\n[1] 10245\n$ disown %1\n$ exit\n# Backup to'xtamasdan orqa fonda davom etaveradi!",
    "analogy": "Voyaga yetgan farzandni ota uyidan mustaqil hayotga uchirish.",
    "pitfalls": "`disown` qilingan vazifani endi `jobs` orqali ko'rib bo'lmaydi, uni faqat `ps aux` orqali topish mumkin."
  },
  {
    "cmd": "sleep",
    "name": "Delay for a Specified Amount of Time (Vaqtinchalik Tanaffus / Kutish)",
    "category": "Bash Skriptlash & Oqimlar",
    "syntax": "sleep SON[BIRLIK]",
    "syntaxRules": "Birliklar: s (soniya), m (daqiqa), h (soat), d (kun). Birliksiz soniya hisoblanadi.",
    "desc": "Skript yoki terminal bajarilishini belgilangan vaqtga to'xtatib turadi. Tsikllar, xizmatlarning qayta ulanishi va kutish algoritmlarida qo'llaniladi.",
    "flags": [
      {
        "flag": "--help",
        "desc": "Yordam ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "sleep 5",
        "title": "5 soniya kutish",
        "desc": "Jarayonni 5 soniyaga uxlatadi."
      },
      {
        "combo": "sleep 1m 30s",
        "title": "1 daqiqa 30 soniya kutish",
        "desc": "Murakkab vaqt oraliqlarini belgilash."
      },
      {
        "combo": "while true; do check_server; sleep 10; done",
        "title": "Har 10 soniyada serverni tekshirib turish",
        "desc": "Cheksiz monitoring sikli."
      }
    ],
    "underTheHood": "`nanosleep()` yoki `clock_nanosleep()` tizim chaqiruvini amalga oshiradi. Yadro jarayon holatini `TASK_INTERRUPTIBLE` ga o'tkazadi va taymer o'chguncha CPU sarflamaydi.",
    "example": "$ echo 'Boshlandi' && sleep 3 && echo '3 soniya o'tdi!'",
    "analogy": "Budilnikni 10 daqiqadan keyin jiringlaydigan qilib qo'yish.",
    "pitfalls": "Skriptlarda `sleep` paytida kelgan signallarni (masalan SIGINT) to'g'ri ushlash (trap) tavsiya etiladi."
  },
  {
    "cmd": "wait",
    "name": "Wait for Process to Complete (Orqa Fondagi Bola Jarayon Tugashini Kutish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "wait [PID / %JOB]",
    "syntaxRules": "Skript ichida barcha parallel bola jarayonlar tugashini poylash uchun xizmat qiladi.",
    "desc": "Orqa fonda ishga tushirilgan bir nechta parallel vazifalarning barchasi to'liq bajarilib bo'lguncha asosiy skriptni to'xtatib turadi va ularning chiqish kodini (exit status) qaytaradi.",
    "flags": [
      {
        "flag": "-n",
        "desc": "Barcha jarayonlarni emas, eng birinchi tugagan bitta jarayonni kutib natija olish."
      }
    ],
    "combos": [
      {
        "combo": "task1 & task2 & wait; echo 'Ikkala vazifa ham tugadi!'",
        "title": "Parallel hisoblashlarni sinxronlash",
        "desc": "Ikki jarayonni parallel ishlatib, ikkalasi ham tugagach keyingi qadamga o'tish."
      }
    ],
    "underTheHood": "To'g'ridan-to'g'ri `waitpid()` yoki `waitid()` tizim chaqiruvini bajaradi. Yadro bola jarayonning qaytargan exit kodini olgach, uning Inode va deskriptorlarini to'liq tozalaydi (zombi bo'lishiga yo'l qo'ymaydi).",
    "example": "$ sleep 5 & PID=$!\n$ wait $PID\n# 5 soniyadan so'ng terminal ozod bo'ladi",
    "analogy": "Jamoa rahbari: 'Hamma o'z vazifasini qilib bo'lsin, keyin birgalikda yig'ilishni boshlaymiz' deb kutib turishi.",
    "pitfalls": "Agar `wait` chaqirilmasa, orqa fonda tugagan bola jarayonlar qisqa muddatga zombiga (defunct) aylanishi mumkin."
  },
  {
    "cmd": "mkfifo",
    "name": "Make Named Pipe / FIFO (Nomlangan Quvur Yaratish)",
    "category": "Jarayonlar & Signallar",
    "syntax": "mkfifo [BAYROQLAR] NOMI",
    "syntaxRules": "FIFO (First-In, First-Out) maxsus fayl turini ('p') yaratadi.",
    "desc": "Ikki xil mustaqil jarayon o'rtasida diskka ma'lumot yozmasdan to'g'ridan-to'g'ri xotira orqali ma'lumot almashish (Inter-Process Communication - IPC) uchun maxsus nomlangan quvur ochadi.",
    "flags": [
      {
        "flag": "-m [MODE]",
        "desc": "Huquqlarini belgilash (masalan, -m 600)."
      }
    ],
    "combos": [
      {
        "combo": "mkfifo my_pipe",
        "title": "Nomlangan quvur ochish",
        "desc": "Diskda 'p' harfli maxsus quvur faylini barpo etadi."
      },
      {
        "combo": "cat my_pipe | gzip > backup.gz &",
        "title": "Quvurdan o'qib siqish",
        "desc": "1-jarayon quvurga ma'lumot quyadi, 2-jarayon uni diskka siqib yozadi."
      }
    ],
    "underTheHood": "`mknod(S_IFIFO)` tizim chaqiruvini bajaradi. Ushbu fayl diskda 0 bayt hajm egallaydi, barcha ma'lumotlar yadro buferi (odatda 64KB Ring Buffer) orqali to'g'ridan-to'g'ri o'tadi.",
    "example": "$ mkfifo pipe1\n$ ls -l pipe1\nprw-r--r-- 1 student student 0 Oct 26 19:40 pipe1\n# 'p' harfi bu Named Pipe!",
    "analogy": "Ikki bino o'rtasiga o'rnatilgan pnevmatik pochta quvuri: bir tomondan xat tashlansa, ikkinchi tomondan darhol qabul qilib olinadi.",
    "pitfalls": "FIFO ga biror narsa yozilsa (`echo 'hi' > pipe1`), uni boshqa dastur o'qib olmaguncha yozish jarayoni bloklanib (qotib) turadi."
  },
  {
    "cmd": "strace",
    "name": "System Call Tracer (Tizim Chaqiruvlarini Kuzatish va Diagnostika Qilish)",
    "category": "Qidiruv & Diagnostika",
    "syntax": "strace [BAYROQLAR] BUYRUQ [ARG...]",
    "syntaxRules": "Dastur va Linux yadrosi (Kernel) o'rtasidagi har bir gaplashuvni (system call) ko'rsatib beradi.",
    "desc": "Linuxdagi eng kuchli xatoliklarni qidirish (debugging) vositasi. Dasturning nima uchun qotib qolganini, qaysi konfiguratsiya faylini topa olmayotganini yoki qaysi faylga kira olmayotganini yadro tizim chaqiruvlari darajasida ko'rsatadi.",
    "flags": [
      {
        "flag": "-c",
        "desc": "Statistika yig'ish — qaysi system call lar necha marta chaqirilganini va qancha vaqt olganini chiqarish."
      },
      {
        "flag": "-e [FILTER]",
        "desc": "Faqat ma'lum tizim chaqiruvlarini filtrlash (masalan, -e openat,read,write)."
      },
      {
        "flag": "-p [PID]",
        "desc": "Ishlab turgan begona jarayonga ulanib kuzatish (Attach to process)."
      },
      {
        "flag": "-o [FAYL]",
        "desc": "Natijalarni faylga yozib saqlash."
      }
    ],
    "combos": [
      {
        "combo": "strace -e openat ls",
        "title": "ls qaysi fayllarni ochayotganini ko'rish",
        "desc": "Dastur qaysi papka va konfiguratsiyalarga murojaat qilayotganini aniqlaydi."
      },
      {
        "combo": "sudo strace -p 1420 -o debug.log",
        "title": "Qotib qolgan jarayon nima qilayotganini aniqlash",
        "desc": "Jarayon qaysi so'rovda qotib turganini fosh qiladi."
      },
      {
        "combo": "strace -c ls /var",
        "title": "Tizim chaqiruvlari sarflaydigan vaqtini o'lchash",
        "desc": "Profilaktika va optimallashtirish jadvalini tuzadi."
      }
    ],
    "underTheHood": "Linux yadrosining `ptrace(PTRACE_SYSCALL)` mexanizmidan foydalanadi. Nishon dastur har bir `syscall` kiritganda to'xtatiladi, registrlari o'qiladi va ekranga chiqariladi.",
    "example": "$ strace -e trace=openat cat /etc/issue\nopenat(AT_FDCWD, \"/etc/issue\", O_RDONLY) = 3\nDebian GNU/Linux 12",
    "analogy": "Tergovchining telefon tinglash moslamasi: dastur va yadro o'rtasidagi har bir qo'ng'iroqni yozib oladi.",
    "pitfalls": "`strace` dasturni sezilarli darajada sekinlashtiradi (10-100 baravargacha). Shuning uchun katta ishlab chiqarish serverlarida doimiy qoldirib bo'lmaydi."
  },
  {
    "cmd": "lsof",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Portlarini Kim Ishlatayotganini Ko'rish)",
    "category": "Qidiruv & Diagnostika",
    "syntax": "lsof [BAYROQLAR]",
    "syntaxRules": "Linuxda 'Everything is a file' — fayllar, kataloglar, soketlar va tarmoq portlarini ham ko'rsatadi.",
    "desc": "Tizimdagi qaysi dastur qaysi faylni, portni yoki kutubxonani ochiq ushlab turganini ko'rsatuvchi muhim vosita. Diskni ajratib bo'lmayotganda ('device is busy') yoki port band bo'lib turganda sababchini bir zumda topadi.",
    "flags": [
      {
        "flag": "-i :[PORT]",
        "desc": "Aniq portni kim band qilib turganini ko'rish (masalan -i :80 yoki -i :3000)."
      },
      {
        "flag": "-u [USER]",
        "desc": "Foydalanuvchi ochgan barcha fayllarni ko'rish."
      },
      {
        "flag": "+D [KATALOG]",
        "desc": "Katalog ichidagi qaysi fayllar ayni paytda ochiqligini tekshirish."
      },
      {
        "flag": "-p [PID]",
        "desc": "Aniq bitta jarayon ochgan barcha fayl deskriptorlarini ko'rish."
      }
    ],
    "combos": [
      {
        "combo": "sudo lsof -i :80",
        "title": "80-portni qaysi dastur band qilganini aniqlash",
        "desc": "Nginx yoki Apache portni band qilgani sababli yangi xizmat ishlamasa, kim band qilganini topadi."
      },
      {
        "combo": "lsof /mnt/usb",
        "title": "USB fleshkani nima uchun ajratib (umount) bo'lmayotganini bilish",
        "desc": "'Device is busy' xatosini yuzaga keltirgan dasturni ko'rsatadi."
      },
      {
        "combo": "lsof -p 1205",
        "title": "Jarayon qaysi loglar va fayllar bilan ishlayotganini ko'rish",
        "desc": "Jarayonning barcha fayl deskriptorlarini fosh qiladi."
      }
    ],
    "underTheHood": "`/proc/[PID]/fd/` katalogidagi barcha simvolik havolalarni va `/proc/net/` jadvallarini o'qiydi.",
    "example": "$ sudo lsof -i :3000\nCOMMAND   PID    USER   FD   TYPE DEVICE SIZE/OFF NODE NAME\nnode    12540 student   19u  IPv4  85421      0t0  TCP *:3000 (LISTEN)",
    "analogy": "Bino xavfsizlik jurnali: kim ayni paytda qaysi xonada o'tiribdi va qaysi kalitni (port/fayl) olib ketganini ko'rsatadi.",
    "pitfalls": "Katta serverlarda oddiy `lsof` yuz minglab qator chiqarishi mumkin, shuning uchun har doim `-i` yoki `grep` bilan filtrlash kerak."
  }
];
