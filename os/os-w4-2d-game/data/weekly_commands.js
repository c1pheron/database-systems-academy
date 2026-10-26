// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 SPECIFIC COMMANDS REPOSITORY
// Modul: 4-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Bu ro'yxat boshqa haftaliklarga aralashmaydi va qat'iy izolyatsiyalangan!
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "fork()",
    "name": "Bola Jarayon Yaratish (System Call)",
    "category": "Yadro & C",
    "syntax": "pid_t pid = fork();",
    "desc": "Joriy jarayonning xotira, deskriptor va registrlardan iborat aynan nusxasini yaratuvchi fundamental yadro chaqirig'i (Bola jarayonda 0, Otada bola PIDsi qaytadi).",
    "dictSearch": "fork"
  },
  {
    "cmd": "exec()",
    "name": "Jarayon Xotirasini Yangi Kod Bilan Almashtirish",
    "category": "Yadro & C",
    "syntax": "execvp(args[0], args);",
    "desc": "Joriy jarayon tanasiga yangi bajariladigan dastur kodini yuklab ishga tushiradi (yangi jarayon ochilmaydi, mavjud PID o'zgaradi).",
    "dictSearch": "exec"
  },
  {
    "cmd": "waitpid()",
    "name": "Bola Jarayon Holatini Kutish",
    "category": "Yadro & C",
    "syntax": "waitpid(pid, &status, 0);",
    "desc": "Ota jarayon o'z bolasining qachon tugashini va qanday chiqish kodi bilan tugaganini kutib oladi (Zombi jarayonlar hosil bo'lishining oldini oladi).",
    "dictSearch": "waitpid"
  },
  {
    "cmd": "crontab",
    "name": "Vaqt Bo'yicha Rejalashtiruvchi (Cron Table)",
    "category": "Avtomatlashtirish",
    "syntax": "crontab -e yoki crontab -l",
    "desc": "Topshiriqlarni daqiqa, soat, kun, oy va haftaning kuni ('* * * * *') bo'yicha muntazam avtomatik bajarish jadvalini tuzadi.",
    "dictSearch": "crontab"
  },
  {
    "cmd": "systemctl",
    "name": "Systemd Xizmatlari va Demonlarini Boshqarish",
    "category": "Systemd",
    "syntax": "systemctl [start|stop|restart|status] [XIZMAT]",
    "desc": "Linux xizmatlari (nginx, cron, docker), soketlari va taymerlarining ishlashini to'liq boshqarish vositasi.",
    "dictSearch": "systemctl"
  },
  {
    "cmd": "journalctl",
    "name": "Systemd Tizim Loglarini Tahlil Qilish",
    "category": "Systemd",
    "syntax": "journalctl -u [XIZMAT] -f",
    "desc": "Tizim va xizmatlarning xatolar, ogohlantirishlar va audit loglarini real vaqtda saralash vositasi.",
    "dictSearch": "journalctl"
  },
  {
    "cmd": "ulimit",
    "name": "Jarayon Resurs Chegaralari",
    "category": "Xavfsizlik & Yadro",
    "syntax": "ulimit -n [SON] yoki ulimit -u [SON]",
    "desc": "Bitta jarayon ochishi mumkin bo'lgan maksimal fayllar soni, stek hajmi yoki foydalanuvchi jarayonlari sonini cheklaydi.",
    "dictSearch": "ulimit"
  },
  {
    "cmd": "at",
    "name": "Bir Martalik Topshiriq Rejalashtirish",
    "category": "Avtomatlashtirish",
    "syntax": "at 02:30 AM tomorrow",
    "desc": "Vazifani kelajakdagi aniq bir vaqtda faqat bir marta avtomatik bajarish navbatiga qo'yadi.",
    "dictSearch": "at"
  },
  {
    "cmd": "uptime",
    "name": "Tizimning Ish Davomiyligi va Yuklamasi",
    "category": "Monitoring",
    "syntax": "uptime",
    "desc": "Server qancha vaqtdan beri ishlayotgani va so'nggi 1, 5, 15 daqiqadagi protsessor o'rtacha yuklamasini (Load Average) ko'rsatadi.",
    "dictSearch": "uptime"
  },
  {
    "cmd": "vmstat",
    "name": "Virtual Xotira & CPU Statistikasi",
    "category": "Monitoring",
    "syntax": "vmstat 2 5",
    "desc": "Jarayonlar navbati, RAM, Swap almashinuvi, blokli I/O va protsessor vaqti sarfini soniyalar bo'yicha ko'rsatadi.",
    "dictSearch": "vmstat"
  },
  {
    "cmd": "iostat",
    "name": "Qattiq Disk I/O Yuklama Tahlili",
    "category": "Monitoring",
    "syntax": "iostat -xz 1",
    "desc": "Disklarning o'qish/yozish tezligi, o'rtacha navbat uzunligi va disk yuklamasi foizini tahlil qiladi.",
    "dictSearch": "iostat"
  },
  {
    "cmd": "sar",
    "name": "Tizim Faolligi Tarixiy Hisobotlari",
    "category": "Monitoring",
    "syntax": "sar -u 1 3",
    "desc": "Tizim resurslarining barcha o'lchovlari bo'yicha davriy statistikani to'playdi va hisobot chiqaradi.",
    "dictSearch": "sar"
  },
  {
    "cmd": "watch",
    "name": "Buyruqni Davriy Takrorlab Kuzatish",
    "category": "Monitoring",
    "syntax": "watch -n 1 [BUYRUQ]",
    "desc": "Berilgan buyruqni har n soniyada avtomatik qayta-qayta ishga tushirib, terminalda uning o'zgarishini yoritib turadi.",
    "dictSearch": "watch"
  },
  {
    "cmd": "gcc",
    "name": "GNU C/C++ Kompilyatori",
    "category": "Dasturlash",
    "syntax": "gcc -Wall -O2 [KOD.c] -o [DASTUR]",
    "desc": "C dasturlash tilidagi manba kodlarini (masalan, fork, exec chaqiriqlari) mashina binar kodiga aylantiradi.",
    "dictSearch": "gcc"
  },
  {
    "cmd": "gzip",
    "name": "Fayllarni Siqish (Compression)",
    "category": "Tizim & Arxiv",
    "syntax": "gzip [FAYL] yoki gunzip [FAYL.gz]",
    "desc": "Katta log fayllar va arxivlarni Lempel-Ziv algoritmi orqali ixchamlashtiradi.",
    "dictSearch": "gzip"
  }
];
