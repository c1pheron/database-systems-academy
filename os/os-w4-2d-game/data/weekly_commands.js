// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 SPECIFIC COMMANDS REPOSITORY
// Modul: 4-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Tizim chaqiruvlari (fork, exec), avtomatlashtirish, systemd va C dasturlash
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "fork()",
    "name": "System Call: Fork (Yangi Bola Jarayon Yaratish Mexanizmi)",
    "category": "System Calls & Jarayonlar",
    "syntax": "pid_t pid = fork();",
    "syntaxRules": "Bir marta chaqiriladi, lekin IKKI MARTA qaytadi: ota jarayonga bolaning PID raqami, bola jarayonga esa 0 qaytadi.",
    "desc": "Linux va Unix operatsion tizimlarida yangi jarayon tug'ilishining yagona fundamental tizim chaqiruvi. Mavjud ota jarayonning (parent) xotira maydoni, fayl deskriptorlari va registrlarining to'liq nusxasini (Copy-on-Write usulida) yaratib, yangi bola jarayonni (child) dunyoga keltiradi.",
    "flags": [
      {
        "flag": "Qaytish qiymati > 0",
        "desc": "Ota jarayon ichida ekanligingizni bildiradi (qiymat bola jarayonning yangi PID raqamidir)."
      },
      {
        "flag": "Qaytish qiymati == 0",
        "desc": "Siz yangi tug'ilgan bola jarayon (child) ichidasiz."
      },
      {
        "flag": "Qaytish qiymati == -1",
        "desc": "Xatolik ro'y berdi (tizimda PID limit tugagan yoki xotira yetmadi)."
      }
    ],
    "combos": [
      {
        "combo": "pid = fork(); if (pid == 0) { execvp(...); } else { wait(NULL); }",
        "title": "Klassik Fork-Exec-Wait namunasi",
        "desc": "Unix da yangi dastur ishga tushirishning universal arxitekturasi."
      },
      {
        "combo": "for(int i=0; i<3; i++) fork();",
        "title": "Fork daraxti (8 ta jarayon)",
        "desc": "2^3 = 8 ta parallel jarayon yaratish imtihon masalasi."
      }
    ],
    "underTheHood": "Linux yadrosi `sys_clone()` funksiyasini chaqiradi. Xotira bloklari darhol nusxalanmaydi, balki `Copy-on-Write (COW)` mexanizmi orqali bitta sahifalarga ishora qiladi; qachonki jarayonlardan biri xotiraga yangi narsa yozmoqchi bo'lsa, yadro ayni o'sha sahifaning alohida nusxasini ajratadi.",
    "example": "#include <stdio.h>\n#include <unistd.h>\nint main() {\n    pid_t p = fork();\n    if (p == 0) printf(\"Men bola jarayonman!\\n\");\n    else printf(\"Men ota jarayonman, bolam PID: %d\\n\", p);\n    return 0;\n}",
    "analogy": "Hujayraning mitoz bo'linishi: bitta ona hujayradan uning barcha genetik kodini o'zida saqlagan ikkinchi mustaqil bola hujayra ajralib chiqadi.",
    "pitfalls": "'Fork Bomb' (`:(){ :|:& };:`) — cheksiz siklda fork chaqirish tizimning barcha PID raqamlarini to'ldirib, serverni o'ldiradi. Bunga qarshi `ulimit -u` qo'llaniladi."
  },
  {
    "cmd": "exec()",
    "name": "System Call: Exec Family (Jarayon Xotirasini Yangi Dastur Bilan Almashtirish)",
    "category": "System Calls & Jarayonlar",
    "syntax": "execvp(dastur, argumentlar);",
    "syntaxRules": "Muvaffaqiyatli bajarilsa, 'exec' HECH QACHON orqaga qaytmaydi! Chunki joriy dastur kodi butunlay yangi dastur kodi bilan o'chib ketadi.",
    "desc": "Mavjud jarayonning xotira maydoni (kod, ma'lumotlar, stek va xip) ni diskdagi yangi bajariluvchi dastur (masalan `/bin/ls`) bilan to'liq almashtiradi. Jarayonning PID raqami o'zgarmaydi, lekin uning ichidagi dastur butunlay yangilanadi.",
    "flags": [
      {
        "flag": "execl / execlp",
        "desc": "Argumentlarni ro'yxat ko'rinishida vergul bilan uzatish (List)."
      },
      {
        "flag": "execv / execvp",
        "desc": "Argumentlarni massiv (vektor - char* argv[]) ko'rinishida uzatish (Vector)."
      },
      {
        "flag": "'p' qo'shimchasi",
        "desc": "$PATH muhit o'zgaruvchisidan dasturni avtomatik qidirish (Path)."
      },
      {
        "flag": "'e' qo'shimchasi",
        "desc": "Yangi muhit o'zgaruvchilarini (environment) uzatish."
      }
    ],
    "combos": [
      {
        "combo": "char *args[] = {\"ls\", \"-l\", NULL}; execvp(\"ls\", args);",
        "title": "C dasturidan ls buyrug'ini ishga tushirish",
        "desc": "Joriy jarayon ls ga aylanadi va ekranga fayllar ro'yxatini chiqarib tugaydi."
      }
    ],
    "underTheHood": "Yadro `sys_execve()` tizim chaqiruvini bajaradi. Dasturning eski xotira sahifalari ozod qilinadi, yangi ELF binar fayli o'qiladi, dynamic linker (`ld-linux.so`) orqali kutubxonalar ulanadi va dasturning `_start` nuqtasiga o'tadi.",
    "example": "int main() {\n    printf(\"Bu qator chiqadi\\n\");\n    execlp(\"date\", \"date\", NULL);\n    printf(\"Bu qator HECH QACHON chiqmaydi!\\n\");\n}",
    "analogy": "Teatr sahnasida aktyorni almashtirish: PID (sahna) o'zgarmaydi, lekin sahnadagi aktyor (kod) ketib, o'rniga yangi aktyor chiqadi va o'z spektaklini o'ynaydi.",
    "pitfalls": "Agar `exec` muvaffaqiyatsiz bo'lsa (masalan fayl topilmasa), u -1 qaytaradi va eski dastur davom etadi. Shuning uchun `exec` chaqiruvidan keyin doimo `perror(\"exec failed\");` yozish shart."
  },
  {
    "cmd": "waitpid()",
    "name": "System Call: Wait for Child Process (Bola Jarayon Tugashini Kutish va Zombilarni Tozalash)",
    "category": "System Calls & Jarayonlar",
    "syntax": "pid_t waitpid(pid_t pid, int *status, int options);",
    "syntaxRules": "Options da WNOHANG berilsa, kutib qotib qolmasdan darhol qaytadi (Non-blocking).",
    "desc": "Ota jarayon tomonidan uning bola jarayoni (child) o'z ishini tugatishini kutish va uning chiqish kodini (exit code) qabul qilib olish tizim chaqiruvi. Tizimda Zombi jarayonlar hosil bo'lishining oldini oladi.",
    "flags": [
      {
        "flag": "pid == -1",
        "desc": "Istalgan bola jarayonning tugashini kutish."
      },
      {
        "flag": "pid > 0",
        "desc": "Aniq ko'rsatilgan PID dagi bola jarayonni kutish."
      },
      {
        "flag": "WNOHANG",
        "desc": "Bloklanmasdan tekshirish — agar bola jarayon hali tugamagan bo'lsa, 0 qaytaradi."
      },
      {
        "flag": "WIFEXITED(status)",
        "desc": "Bola jarayon normal tugaganligini tekshiruvchi makros."
      },
      {
        "flag": "WEXITSTATUS(status)",
        "desc": "Bola jarayon qaytargan sonli exit kodini (masalan 0 yoki 1) olish."
      }
    ],
    "combos": [
      {
        "combo": "waitpid(child_pid, &status, 0);",
        "title": "Bola jarayon tugashini kutish",
        "desc": "Bola tugagach uning exit kodini oladi va resurslarini tozalaydi."
      },
      {
        "combo": "waitpid(-1, &status, WNOHANG);",
        "title": "Zombilarni tozalovchi no-blocking signal handler",
        "desc": "SIGCHLD signali kelganda zombilarni tozalashning professional andozasi."
      }
    ],
    "underTheHood": "Yadro bola jarayonning `task_struct` dagi `exit_state` holatini tekshiradi. Ota `waitpid()` qilganida, yadro bola jarayonning oxirgi yozuvlarini ham xotira jadvalidan to'liq o'chirib yuboradi.",
    "example": "int status;\npid_t w = waitpid(child_pid, &status, 0);\nif (WIFEXITED(status))\n    printf(\"Bola chiqish kodi: %d\\n\", WEXITSTATUS(status));",
    "analogy": "Restoranda buyurtma bergan mijoz: 'Taom tayyor bo'lishini kutib turaman, keyin hisobni (exit code) to'lab ketaman'.",
    "pitfalls": "Agar ota jarayon `wait()` yoki `waitpid()` chaqirmasa, bola jarayon o'z ishini tugatgan taqdirda ham uning PID raqami xotira jadvalida 'Zombie (defunct)' bo'lib qolaveradi."
  },
  {
    "cmd": "crontab",
    "name": "Schedule Periodic Background Jobs (Vaqt Bo'yicha Avtomatlashtirilgan Vazifalar)",
    "category": "Avtomatlashtirish & Tizim",
    "syntax": "crontab [BAYROQLAR]",
    "syntaxRules": "5 ta yulduzcha formati: Daqiqa (0-59), Soat (0-23), Oy kuni (1-31), Oy (1-12), Hafta kuni (0-6).",
    "desc": "Linuxdagi eng mashhur rejalashtiruvchi taymer (Daemon). Skriptlar, zaxira nusxalar (backup) va tozalash ishlarini har kecha, har soat yoki har 5 daqiqada avtomatik ishga tushirish uchun xizmat qiladi.",
    "flags": [
      {
        "flag": "-e",
        "desc": "Joriy foydalanuvchining cron jadvalini tahrirlash (Edit)."
      },
      {
        "flag": "-l",
        "desc": "Mavjud rejalashtirilgan vazifalar ro'yxatini ko'rish (List)."
      },
      {
        "flag": "-r",
        "desc": "Barcha rejalashtirilgan cron vazifalarini o'chirib tashlash (Remove)."
      },
      {
        "flag": "-u [USER]",
        "desc": "Boshqa foydalanuvchining jadvalini tahrirlash (faqat root)."
      }
    ],
    "combos": [
      {
        "combo": "0 2 * * * /backup.sh",
        "title": "Har kecha soat 02:00 da zaxira olish",
        "desc": "Klassik tungi zaxira olish grafigi."
      },
      {
        "combo": "*/15 * * * * /opt/check_health.sh",
        "title": "Har 15 daqiqada serverni tekshirish",
        "desc": "Doimiy monitoring taymeri."
      },
      {
        "combo": "0 9 * * 1 /send_weekly_report.sh",
        "title": "Har dushanba ertalab soat 09:00 da hisobot yuborish",
        "desc": "Haftalik biznes hisobotlarini avtomatlashtirish."
      }
    ],
    "underTheHood": "Orqa fonda `cron` deamoni ishlaydi. U har daqiqaning 00-soniyasida `/var/spool/cron/crontabs/` dagi jadvallarni o'qiydi va joriy vaqtga mos kelgan buyruqlarni yangi bolacha shell orqali bajaradi.",
    "example": "$ crontab -l\n# Har kuni yarim kechada loglarni tozalash\n0 0 * * * find /var/log/app -name '*.log' -mtime +7 -delete",
    "analogy": "Har kuni ertalab 07:00 ga qo'yilgan aqlli budilnik.",
    "pitfalls": "Cron ishga tushganda uning `$PATH` muhit o'zgaruvchisi juda cheklangan bo'ladi! Shuning uchun skript ichida buyruqlarning to'liq absolyut yo'lini (masalan `/usr/bin/python3` yoki `/bin/tar`) yozish shart."
  },
  {
    "cmd": "systemctl",
    "name": "Control the Systemd System and Service Manager (Tizim Xizmatlarini Boshqarish)",
    "category": "Tizim & Diagnostika",
    "syntax": "systemctl [BUYRUQ] [XIZMAT_NOMI]",
    "syntaxRules": "Eng muhim amallar: start, stop, restart, status, enable, disable, reload.",
    "desc": "Zamonaviy Linux operatsion tizimlarining yuragi (Systemd). Tizim xizmatlari (Nginx, Docker, MySQL, SSH) ni ishga tushirish, to'xtatish, holatini tekshirish va server yoqilganda avtomatik ishga tushadigan (enable) qilish vositasi.",
    "flags": [
      {
        "flag": "status",
        "desc": "Xizmatning ayni damdagi holatini, PID raqamini va so'nggi loglarini ko'rish."
      },
      {
        "flag": "restart",
        "desc": "Xizmatni to'liq o'chirib qayta yoqish."
      },
      {
        "flag": "reload",
        "desc": "Xizmatni to'xtatmasdan uning konfiguratsiya fayllarini qayta o'qitish."
      },
      {
        "flag": "enable --now",
        "desc": "Xizmatni ham server yoqilganda avtomatik yonadigan qilish, ham darhol hozir ishga tushirish."
      },
      {
        "flag": "disable",
        "desc": "Server qayta yoqilganda avtomatik ishga tushishini bekor qilish."
      }
    ],
    "combos": [
      {
        "combo": "sudo systemctl status nginx",
        "title": "Nginx xizmati holatini tekshirish",
        "desc": "Xizmat 'active (running)' yoki 'failed' ekanligini ko'rsatadi."
      },
      {
        "combo": "sudo systemctl enable --now docker",
        "title": "Docker ni hozir yoqish va avtomatik yuklanishga qo'yish",
        "desc": "Ikkita buyruqni bitta harakatda bajarishning eng professional usuli."
      },
      {
        "combo": "systemctl list-units --type=service --state=running",
        "title": "Barcha ishlab turgan xizmatlar ro'yxatini ko'rish",
        "desc": "Serverdagi barcha faol xizmatlar xaritasini chiqaradi."
      }
    ],
    "underTheHood": "D-Bus protokoli orqali PID 1 (systemd) ga so'rov yuboradi. Systemd cgroups (boshqaruv guruhlari) orqali xizmatning barcha oqimlari va xotira chegaralarini nazorat qiladi.",
    "example": "$ sudo systemctl status ssh\n● ssh.service - OpenBSD Secure Shell server\n     Loaded: loaded (/lib/systemd/system/ssh.service; enabled)\n     Active: active (running) since Sun 2026-10-26 18:00:00 +0500",
    "analogy": "Binoning bosh elektr boshqaruv shiti: istalgan qavat yoki xonaning chirog'ini yoqish, o'chirish yoki avtomatga qo'yish.",
    "pitfalls": "Konfiguratsiyani o'zgartirgandan keyin ko'pincha `sudo systemctl daemon-reload` qilish kerak bo'ladi, aks holda systemd o'zgarishlarni sezmaydi."
  },
  {
    "cmd": "journalctl",
    "name": "Query the Systemd Journal (Tizim va Xizmatlar Loglarini Markazlashgan O'qish)",
    "category": "Tizim & Diagnostika",
    "syntax": "journalctl [BAYROQLAR]",
    "syntaxRules": "Barcha xizmatlarning binar loglarini yagona qulay interfeysda ko'rsatadi.",
    "desc": "Systemd tizimining markazlashgan loglar jurnali. Qaysi xizmat qachon buzilgani, qanday xatolik bergani va yadroning (kernel) barcha xabarlarini bitta joydan filtrlash imkonini beradi.",
    "flags": [
      {
        "flag": "-u [XIZMAT]",
        "desc": "Faqat aniq bitta xizmatning loglarini ko'rish (masalan, -u nginx yoki -u ssh)."
      },
      {
        "flag": "-f",
        "desc": "Jonli kuzatish (Follow) — xuddi tail -f kabi yangi loglarni real vaqtda chiqaradi."
      },
      {
        "flag": "-e",
        "desc": "Faylning eng oxirgi sahifasiga darhol sakrash (End)."
      },
      {
        "flag": "-b",
        "desc": "Faqat oxirgi tizim yuklanishidan (Current boot) keyingi loglarni ko'rish."
      },
      {
        "flag": "-p [DARAJASI]",
        "desc": "Xatolar darajasi bo'yicha filtrlash (masalan, -p err yoki -p emerg)."
      }
    ],
    "combos": [
      {
        "combo": "journalctl -u nginx -f",
        "title": "Nginx xizmati loglarini jonli efirda kuzatish",
        "desc": "Veb-serverga kelayotgan so'rovlar va xatoliklarni kuzatib boradi."
      },
      {
        "combo": "journalctl -xeu docker.service",
        "title": "Nega xizmat ishga tushmaganini aniqlash",
        "desc": "x=tafsilotlar, e=oxiriga o'tish, u=xizmat. Failed bo'lgan xizmatlarni tuzatishda birinchi raqamli buyruq!"
      },
      {
        "combo": "journalctl -b -p err",
        "title": "Ushbu yuklanishdagi barcha xatoliklarni ro'yxatlash",
        "desc": "Server yoqilgandan buyon sodir bo'lgan qizil xatoliklarni yig'ib beradi."
      }
    ],
    "underTheHood": "`/var/log/journal/` yoki `/run/log/journal/` katalogidagi optimallashgan binar log fayllarini o'qiydi. Loglar indekslanganligi tufayli matnli fayllardan 10 baravar tez qidiradi.",
    "example": "$ journalctl -u ssh -n 2\nOct 26 19:50:01 kali sshd[25410]: Accepted publickey for student from 192.168.1.10 port 54210",
    "analogy": "Samolyotning 'Qora qutisi' (Black Box): har bir xizmat va yadro nima qilganini soniyasigacha yozib boradi.",
    "pitfalls": "Vaqt o'tishi bilan jurnal diskingizni to'ldirib qo'ymasligi uchun `sudo journalctl --vacuum-size=500M` orqali eski loglarni tozalab turish kerak."
  },
  {
    "cmd": "ulimit",
    "name": "Set or Report User Resource Limits (Foydalanuvchi va Jarayon Resurslari Cheklovlari)",
    "category": "Tizim & Diagnostika",
    "syntax": "ulimit [BAYROQLAR] [LIMIT]",
    "syntaxRules": "'-n' ochiq fayllar, '-u' maksimal jarayonlar sonini boshqaradi. Soft (-S) va Hard (-H) limitlar mavjud.",
    "desc": "Bitta foydalanuvchi yoki uning jarayonlari qancha resurs ishlata olishini cheklovchi xavfsizlik vositasi. 'Fork Bomb' hujumlaridan himoyalash va yuqori yuklamali veb-serverlar (Nginx) uchun ochiq fayllar sonini oshirishda ishlatiladi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha joriy resurs cheklovlarini to'liq ro'yxatini ko'rish (All)."
      },
      {
        "flag": "-n",
        "desc": "Bitta jarayon ochishi mumkin bo'lgan maksimal fayllar (file descriptors) soni."
      },
      {
        "flag": "-u",
        "desc": "Foydalanuvchi ochishi mumkin bo'lgan maksimal jarayonlar soni (Max user processes)."
      },
      {
        "flag": "-v",
        "desc": "Virtual xotira maksimal hajmi (KB)."
      }
    ],
    "combos": [
      {
        "combo": "ulimit -n 65535",
        "title": "Ochiq fayllar limitini oshirish",
        "desc": "Katta yuklamali veb-serverlarda 'Too many open files' xatosini yo'qotadi."
      },
      {
        "combo": "ulimit -u 1000",
        "title": "Maksimal jarayonlar sonini cheklash",
        "desc": "Foydalanuvchini 1000 tadan ko'p jarayon ochishdan to'sib, Fork bomb dan asraydi."
      }
    ],
    "underTheHood": "`getrlimit()` va `setrlimit()` tizim chaqiruvlarini bajaradi. Linux yadrosi jarayon resurs sarflayotganda `rlimit` strukturasini tekshirib boradi.",
    "example": "$ ulimit -n\n1024\n$ ulimit -u\n31240",
    "analogy": "Bankomatdagi kunlik naqd pul yechish limiti: bir kunda qancha pul yechishingizni xavfsizlik uchun cheklab qo'yish.",
    "pitfalls": "Oddiy foydalanuvchi limitni faqat kamaytira oladi yoki 'Hard limit' gacha oshira oladi. Hard limitni faqat root `/etc/security/limits.conf` faylida ko'tara oladi."
  },
  {
    "cmd": "at",
    "name": "Queue Jobs for Later Execution (Bir Martalik Vazifani Belgilangan Vaqtda Bajarish)",
    "category": "Avtomatlashtirish & Tizim",
    "syntax": "at [VAQT]",
    "syntaxRules": "Cron dan farqli ravishda doimiy takrorlanmaydi, faqat BIR MARTA aytilgan vaqtda bajariladi.",
    "desc": "Muayyan buyruqni kelajakdagi aniq bir vaqtda (masalan bugun soat 23:00 da yoki 10 daqiqadan keyin) avtomatik ishga tushirish uchun navbatga qo'yadi.",
    "flags": [
      {
        "flag": "-l / atq",
        "desc": "Rejalashtirilgan vazifalar navbatini ko'rish (Queue)."
      },
      {
        "flag": "-d / atrm [ID]",
        "desc": "Navbatdagi vazifani bekor qilish (Delete)."
      }
    ],
    "combos": [
      {
        "combo": "echo 'sh /backup.sh' | at 23:00",
        "title": "Bugun 23:00 da zaxira olishni rejalashtirish",
        "desc": "Vazifani bugungi soat 23:00 ga navbatga qo'yadi."
      },
      {
        "combo": "echo 'reboot' | at now + 30 minutes",
        "title": "Serverni 30 daqiqadan so'ng qayta yuklash",
        "desc": "Yarim soatdan keyin serverni qayta ishga tushiradi."
      }
    ],
    "underTheHood": "`/var/spool/cron/atjobs` katalogida maxsus bajariluvchi skript yaratadi va `atd` deamoni belgilangan daqiqada uni ishga tushiradi.",
    "example": "$ at 14:00 tomorrow\nat> python3 send_news.py\nat> <EOT> (Ctrl+D bosing)",
    "analogy": "Taqvimga 'Ertaga soat 14:00 da do'stimga qo'ng'iroq qilish' deb bitta eslatma yozib qo'yish.",
    "pitfalls": "Agar `atd` deamoni tizimda ishlamayotgan bo'lsa (`systemctl status atd`), buyruq rejalashtiriladi lekin aytilgan vaqtda bajarilmay qoladi."
  },
  {
    "cmd": "uptime",
    "name": "Tell How Long the System Has Been Running (Server Qancha Vaqtdan Buyon Ishlayotgani va Yuklamasi)",
    "category": "Tizim & Diagnostika",
    "syntax": "uptime [BAYROQLAR]",
    "syntaxRules": "Joriy vaqt, server qancha vaqtdan buyon o'chmasdan ishlayotgani (uptime), ulangan foydalanuvchilar va 3 ta Load Average qiymatini ko'rsatadi.",
    "desc": "Server barqarorligini baholovchi eng qisqa va qulay buyruq. Load Average (1 daqiqa, 5 daqiqa va 15 daqiqalik o'rtacha yuklama) ni ko'rsatadi.",
    "flags": [
      {
        "flag": "-p",
        "desc": "Inson tushunadigan chiroyli formatda chiqarish (Pretty - masalan 'up 2 weeks, 3 days')."
      },
      {
        "flag": "-s",
        "desc": "Server aynan qaysi sana va soatda yoqilganini chiqarish (Since)."
      }
    ],
    "combos": [
      {
        "combo": "uptime",
        "title": "Server yuklamasi va ishlash vaqtini bilish",
        "desc": "20:00:00 up 45 days, 3 users, load average: 0.05, 0.12, 0.15"
      },
      {
        "combo": "uptime -p",
        "title": "Chiroyli ko'rinish",
        "desc": "up 6 weeks, 2 days, 4 hours"
      }
    ],
    "underTheHood": "`/proc/uptime` va `/proc/loadavg` fayllarini o'qiydi. Load Average bu CPU da ishlayotgan yoki disk kutayotgan (R va D holatidagi) jarayonlar sonining eksponensial o'rtacha qiymatidir.",
    "example": "$ uptime\n 20:15:30 up 12 days,  4:32,  2 users,  load average: 0.10, 0.25, 0.18",
    "analogy": "Avtomobilning umumiy bosib o'tgan masofasi va dvigatel harorati datchigi.",
    "pitfalls": "Agar 4 yadroli protsessorda Load Average 8 dan oshib ketsa, bu server 2 baravar ortiqcha yuklanib qotayotganidan dalolat beradi!"
  },
  {
    "cmd": "vmstat",
    "name": "Report Virtual Memory Statistics (Virtual Xotira, Jarayonlar va Protsessor Statistikasi)",
    "category": "Tizim & Diagnostika",
    "syntax": "vmstat [ORALIQ_SONIYA] [SANASH]",
    "syntaxRules": "Har N soniyada bitta yangi qator qilib xotira va CPU dinamikasini ko'rsatadi.",
    "desc": "Linux xotira boshqaruvining (Virtual Memory) oniy holati: protsessor navbati (r, b), bo'sh va kesh xotira (free, buff, cache), Swap almashtirish tezligi (si, so) va I/O yuklamasini aniqlaydi.",
    "flags": [
      {
        "flag": "-s",
        "desc": "Yuklangandan buyon xotira bo'yicha jami hodisalar statistikasini chiqarish."
      },
      {
        "flag": "-d",
        "desc": "Disk bo'yicha kirish/chiqish (I/O) statistikasini ko'rish."
      }
    ],
    "combos": [
      {
        "combo": "vmstat 1 5",
        "title": "Har 1 soniyada 5 marta yangilab ko'rish",
        "desc": "Xotira va CPU ning ayni paytdagi dinamikasini jadval ko'rinishida kuzatish."
      },
      {
        "combo": "vmstat -s",
        "title": "Jami xotira operatsiyalari xulosasi",
        "desc": "Necha marta page fault ro'y berganini ko'rish."
      }
    ],
    "underTheHood": "`/proc/stat`, `/proc/vmstat` va `/proc/meminfo` jadvallarini muntazam so'rab boradi.",
    "example": "$ vmstat 2 2\nprocs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 425120  85240 125410    0    0    12    45   85  150  2  1 97  0  0",
    "analogy": "Inson tanasidagi qon bosimi va puls monitoringi: jigar (RAM) va o'pka (CPU) ning qanchalik zo'riqib ishlayotganini ko'rsatadi.",
    "pitfalls": "Agar `si` (swap in) va `so` (swap out) ustunlarida uzluksiz noldan katta sonlar chiqayotgan bo'lsa, demak operativ xotira (RAM) butunlay yetmayapti va tizim Thrashing holatiga tushgan!"
  },
  {
    "cmd": "iostat",
    "name": "Input/Output Statistics for Devices and Partitions (Disk O'qish/Yozish Tezligi va Yuklamasi)",
    "category": "Tizim & Diagnostika",
    "syntax": "iostat [BAYROQLAR] [ORALIQ] [SANASH]",
    "syntaxRules": "Sysstat paketiga kiradi. Disklarning o'qish (kB_read/s), yozish (kB_wrtn/s) va yuklama foizini (%util) ko'rsatadi.",
    "desc": "Qattiq disklar va SSD larning kirish-chiqish (I/O) yuklamasini tahlil qiluvchi bosh diagnostika quroli. Serverdagi ma'lumotlar bazasi nima uchun sekin ishlayotganini aniqlashda eng muhim vosita.",
    "flags": [
      {
        "flag": "-x",
        "desc": "Kengaytirilgan tafsilotlar (Extended stats) — %util, await, r_await ko'rsatkichlari bilan."
      },
      {
        "flag": "-h",
        "desc": "Inson tushunadigan o'lchov birliklarida (MB/s)."
      },
      {
        "flag": "-d",
        "desc": "CPU ma'lumotlarini tashlab, faqat disklarni ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "iostat -xz 1",
        "title": "Faqat faol ishlayotgan disklarni har soniyada kengaytirilgan ko'rish",
        "desc": "Disk qanchalik qizg'in yozayotganini fosh qiladi."
      }
    ],
    "underTheHood": "`/proc/diskstats` faylidagi yadro hisoblagichlarini o'qiydi.",
    "example": "$ iostat -x 1 1\nDevice            r/s     w/s     rkB/s     wkB/s   await  %util\nsda              5.00   25.00    120.00    512.00    2.50  12.40",
    "analogy": "Yo'ldagi transport tirbandligi: yo'l (disk) qanchalik o'tkazuvchan va mashinalar (ma'lumotlar) qancha kutib qolayotgani.",
    "pitfalls": "Agar `%util` ko'rsatkichi 100% ga yaqinlashsa, demak disk to'liq tiqilib qolgan (bottleneck) va barcha dasturlar disk navbatida qotib turibdi."
  },
  {
    "cmd": "sar",
    "name": "System Activity Reporter (Tarixiy Tizim Faoliyati va Hodisalar Hisoboti)",
    "category": "Tizim & Diagnostika",
    "syntax": "sar [BAYROQLAR] [ORALIQ] [SANASH]",
    "syntaxRules": "Sysstat xizmati orqali orqa fonda kun bo'yi ma'lumot to'playdi; kecha yoki o'tgan hafta serverda nima bo'lganini bilish imkonini beradi.",
    "desc": "Linuxdagi eng kuchli tarixiy metrikalar arxivi. Kechasi soat 03:00 da server nima sababdan yiqilganini (CPU, xotira, tarmoq yoki disk sabablimi) tahlil qilishda o'rnini hech narsa bosa olmaydi.",
    "flags": [
      {
        "flag": "-u",
        "desc": "CPU yuklamasi statistikasini chiqarish."
      },
      {
        "flag": "-r",
        "desc": "Operativ xotira (RAM) sarfi tarixini ko'rish."
      },
      {
        "flag": "-n DEV",
        "desc": "Tarmoq adapterlari trafigi tarixini ko'rish."
      },
      {
        "flag": "-b",
        "desc": "I/O va uzatish tezligi hisoboti."
      }
    ],
    "combos": [
      {
        "combo": "sar -u 1 3",
        "title": "CPU ning ayni paytdagi sarfini o'lchash",
        "desc": "Har soniyada 3 marta CPU yuklamasini oladi."
      },
      {
        "combo": "sar -r -f /var/log/sysstat/sa25",
        "title": "Oyning 25-sanasidagi xotira sarfi tarixini o'qish",
        "desc": "O'tmishdagi arxivdan xotira o'zgarishlarini ko'tarib beradi."
      }
    ],
    "underTheHood": "Har 10 daqiqada cron/systemd taymer orqali `/var/log/sysstat/saXX` binar loglariga butun yadro holatini muhrlaydi.",
    "example": "$ sar -u 2 1\nLinux 6.1.0-kali (kali)  10/26/2026\n08:00:01 PM     CPU     %user     %nice   %system   %iowait    %idle\n08:00:03 PM     all      4.50      0.00      1.25      0.10    94.15",
    "analogy": "Bankdagi videokuzatuv arxivi: 'Kechasi soat nechada kim kassaga kelgan edi?' deb arxiv tasmasini orqaga qaytarib ko'rish.",
    "pitfalls": "`sar` ishlashi uchun `sysstat` xizmati yoqilgan bo'lishi shart (`sudo systemctl enable --now sysstat`)."
  },
  {
    "cmd": "watch",
    "name": "Execute a Program Periodically and Show Output Fullscreen (Buyruqni Har N Soniyada Avtomatik Takrorlash)",
    "category": "Monitoring & Diagnostika",
    "syntax": "watch [BAYROQLAR] 'BUYRUQ'",
    "syntaxRules": "Standart holatda har 2 soniyada buyruqni qayta bajaradi va o'zgarishlarni ekranda belgilab ko'rsatadi.",
    "desc": "Har qanday konsol buyrug'ini dinamik jonli monitoring paneliga aylantirib beruvchi ajoyib utilita.",
    "flags": [
      {
        "flag": "-n [SONIYA]",
        "desc": "Qayta takrorlanish oralig'ini belgilash (masalan, -n 1 har soniyada)."
      },
      {
        "flag": "-d",
        "desc": "O'zgargan qiymatlarni rang bilan belgilab ko'rsatish (Highlight differences) — eng foydali bayroq!"
      },
      {
        "flag": "-t",
        "desc": "Tepadagi sarlavha qatorini yashirish."
      }
    ],
    "combos": [
      {
        "combo": "watch -n 1 -d 'ls -lh download/'",
        "title": "Fayl yuklab olinishini jonli kuzatish",
        "desc": "Fayl hajmi sekundma-sekund qanday o'sayotganini ko'rsatib turadi."
      },
      {
        "combo": "watch -d 'cat /proc/mdstat'",
        "title": "RAID massivining sinxronizatsiyasini kuzatish",
        "desc": "Disklar tiklanish foizini jonli aks ettiradi."
      },
      {
        "combo": "watch -n 2 'nvidia-smi'",
        "title": "Videokarta (GPU) yuklamasini har 2 soniyada yangilab turish",
        "desc": "Sun'iy intellekt modellarini o'qitishda qulay."
      }
    ],
    "underTheHood": "Cheksiz sikl ichida `system(command)` ni chaqiradi, ekranni tozalab, eski va yangi matn orasidagi farqlarni ANSI ranglari bilan belgilaydi.",
    "example": "$ watch -n 1 'uptime'\nEvery 1.0s: uptime\n20:30:15 up 5 days, load average: 0.12, 0.14, 0.10",
    "analogy": "Har 2 soniyada eshik darchasidan qarab 'Tashqarida nima o'zgardi?' deb tekshirib turish.",
    "pitfalls": "Ichida quvur (|) yoki murakkab parametrlar bor buyruqlarni berayotganda butun buyruqni qo'shtirnoq ichiga olish shart: `watch 'ps aux | grep node'`."
  },
  {
    "cmd": "gcc",
    "name": "GNU Compiler Collection (C/C++ Dasturlash Tillari Kompilyatori)",
    "category": "Dasturlash & Tizim",
    "syntax": "gcc [BAYROQLAR] MANBA.c -o CHIQISH_FAYLI",
    "syntaxRules": "Inson tushunadigan C kodini Linux yadrosi tushunadigan ikkilik (ELF Binary) mashina kodiga aylantiradi.",
    "desc": "Linux operatsion tizimi va Linux yadrosining o'zi yozilgan afsonaviy GNU kompilyatori. Operatsion tizimlar modulida `fork()`, `exec()`, `pipe()`, `pthread` mavzularidagi amaliy ishlarni kompilyatsiya qilishning birlamchi quroli.",
    "flags": [
      {
        "flag": "-o [NOM]",
        "desc": "Chiqadigan dastur nomini belgilash (aks holda a.out nomini oladi)."
      },
      {
        "flag": "-Wall",
        "desc": "Barcha ogohlantirishlarni ko'rsatish (All Warnings) — toza kod yozish uchun shart!"
      },
      {
        "flag": "-g",
        "desc": "GDB bilan disk raskadrovka qilish uchun debug ma'lumotlarini qo'shish."
      },
      {
        "flag": "-O2 / -O3",
        "desc": "Kodni protsessor uchun maksimal tezlikka optimallashtirish."
      },
      {
        "flag": "-pthread",
        "desc": "POSIX oqimlar (multithreading) kutubxonasini ulash."
      }
    ],
    "combos": [
      {
        "combo": "gcc -Wall -o fork_demo fork_demo.c",
        "title": "C dasturini ogohlantirishlar bilan xavfsiz kompilyatsiya qilish",
        "desc": "fork_demo nomli tayyor bajariluvchi dastur hosil qiladi."
      },
      {
        "combo": "gcc -pthread thread_test.c -o thread_test",
        "title": "Ko'p oqimli (multithreaded) dasturni yig'ish",
        "desc": "Pthread kutubxonasi bilan birga to'g'ri yig'adi."
      }
    ],
    "underTheHood": "4 ta asosiy bosqichni bosib o'tadi: 1) Preprocessing (preprosessor `#include` larni yoyadi), 2) Compilation (C kodini assembler tiliga o'tkazadi), 3) Assembly (assemblerni mashina kodi ob'ektiga aylantiradi), 4) Linking (kutubxonalarni ulab yakuniy ELF fayl yaratadi).",
    "example": "$ gcc -Wall main.c -o app\n$ ./app\nSalom Linux Tizimi!",
    "analogy": "Arxitektor chizmasini (C kodi) quruvchilar brigadasi va g'isht teruvchilar yordamida haqiqiy mustahkam binoga (ikkilik dasturga) aylantirish.",
    "pitfalls": "Agar `-o nom` bayrog'ini bermasangiz, hosil bo'lgan dastur har doim `a.out` nomini oladi va keyingi safar boshqa kodni kompilyatsiya qilganingizda eski `a.out` ustidan yozib yuboriladi."
  },
  {
    "cmd": "gzip",
    "name": "Compress or Expand Files (Fayllarni DEFLATE Algoritmi Bilan Siqish)",
    "category": "Arxivlash & Fayl Boshqaruvi",
    "syntax": "gzip [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Asl faylni siqib, uning o'rniga '.gz' kengaytmali fayl hosil qiladi (asl fayl o'chadi).",
    "desc": "Linuxdagi eng keng tarqalgan standart fayl siquvchi utilita. DEFLATE (LZ77 va Huffman kodi) algoritmi orqali matnli fayllar va loglarni 70-85% gacha kichraytirib, diskda ulkan joy tejaydi.",
    "flags": [
      {
        "flag": "-d",
        "desc": "Siqilgan .gz faylni qayta ochish (Decompress - gunzip ga teng)."
      },
      {
        "flag": "-k",
        "desc": "Asl faylni o'chirmasdan saqlab qolish (Keep original file) — juda muhim!"
      },
      {
        "flag": "-9",
        "desc": "Maksimal darajada qattiq siqish (Best compression - ko'proq CPU sarflaydi)."
      },
      {
        "flag": "-1",
        "desc": "Eng tezkor siqish (Fast)."
      },
      {
        "flag": "-r",
        "desc": "Papkadagi barcha fayllarni rekursiv siqish."
      }
    ],
    "combos": [
      {
        "combo": "gzip -k -9 database_dump.sql",
        "title": "Bazani maksimal siqish va asl nusxasini saqlab qolish",
        "desc": "10 GB li SQL dumpni 1.5 GB li .gz faylga aylantiradi."
      },
      {
        "combo": "gzip -d archive.txt.gz",
        "title": "Siqilgan faylni asl holatiga qaytarish",
        "desc": "archive.txt ni ochib beradi."
      }
    ],
    "underTheHood": "Faylni blokma-blok o'qib, takrorlanuvchi bayt ketma-ketliklarini qisqa ko'rsatkichlarga almashtiradi. Standart Gzip header (`1F 8B`) bilan boshlanadi.",
    "example": "$ ls -lh dump.sql\n-rw-r--r-- 1 student student 100M Oct 26 20:00 dump.sql\n$ gzip -k dump.sql\n$ ls -lh dump.sql.gz\n-rw-r--r-- 1 student student  18M Oct 26 20:00 dump.sql.gz",
    "analogy": "Katta adyol yoki yostiqni vakuumli paketga solib, changyutgich bilan havosini so'rib olish: hajmi bir necha barobar kichrayadi.",
    "pitfalls": "Standart holatda `gzip file` qilinsa, asl `file` o'chib ketadi va faqat `file.gz` qoladi. Asl faylni yo'qotmaslik uchun har doim `-k` (keep) bayrog'ini qo'shing!"
  }
];
