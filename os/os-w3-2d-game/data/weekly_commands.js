// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 SPECIFIC COMMANDS REPOSITORY
// Modul: 3-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Bu ro'yxat boshqa haftaliklarga aralashmaydi va qat'iy izolyatsiyalangan!
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "ps",
    "name": "Jarayonlar Holatini Ko'rish",
    "category": "Jarayonlar",
    "syntax": "ps aux",
    "desc": "Tizimda ishlab turgan barcha jarayonlar, ularning PID raqami, CPU va RAM sarfi, holati (STAT) va boshlangan vaqtini ko'rsatadi.",
    "dictSearch": "ps"
  },
  {
    "cmd": "top",
    "name": "Jonli Jarayonlar Monitori",
    "category": "Jarayonlar",
    "syntax": "top",
    "desc": "Protsessor va operativ xotira yuklamasini har 3 soniyada avtomatik yangilab, eng ko'p resurs yeyotgan jarayonlarni tepada chiqaradi.",
    "dictSearch": "top"
  },
  {
    "cmd": "htop",
    "name": "Rangli Zamonaviy Jarayon Monitori",
    "category": "Jarayonlar",
    "syntax": "htop",
    "desc": "Jarayonlar ustida sichqoncha va klaviatura orqali qulay boshqaruv, o'ldirish va filtrlash imkonini beruvchi interaktiv monitor.",
    "dictSearch": "htop"
  },
  {
    "cmd": "pgrep",
    "name": "Jarayon PID sini Qidirish",
    "category": "Jarayonlar",
    "syntax": "pgrep -l [JARAYON_NOMI]",
    "desc": "Berilgan dastur nomi yoki foydalanuvchiga tegishli barcha jarayonlarning faqatgina raqamli PID larini ajratib topadi.",
    "dictSearch": "pgrep"
  },
  {
    "cmd": "pkill",
    "name": "Jarayonni Nomi Bo'yicha To'xtatish",
    "category": "Signallar",
    "syntax": "pkill -9 -f [JARAYON_NOMI]",
    "desc": "PID ni bilish talab qilinmasdan, dastur nomi bo'yicha barcha mos jarayonlarga signal yuborib to'xtatadi.",
    "dictSearch": "pkill"
  },
  {
    "cmd": "kill",
    "name": "Jarayonga Signal Yuborish",
    "category": "Signallar",
    "syntax": "kill -15 [PID] yoki kill -9 [PID]",
    "desc": "Jarayonga xavfsiz to'xtash (SIGTERM 15) yoki majburiy o'ldirish (SIGKILL 9) signallarini yetkazadi.",
    "dictSearch": "kill"
  },
  {
    "cmd": "killall",
    "name": "Barcha Nomdosh Jarayonlarni O'chirish",
    "category": "Signallar",
    "syntax": "killall -9 [JARAYON_NOMI]",
    "desc": "Bir vaqtning o'zida ishlab turgan bir xil dasturning barcha nusxalarini birdaniga yo'q qiladi.",
    "dictSearch": "killall"
  },
  {
    "cmd": "pstree",
    "name": "Jarayonlar Daraxti (Parent-Child)",
    "category": "Jarayonlar",
    "syntax": "pstree -p",
    "desc": "Systemd (PID 1) dan boshlab barcha ota va bola jarayonlarning shajaraviy bog'liqlik daraxtini chiqaradi.",
    "dictSearch": "pstree"
  },
  {
    "cmd": "nice",
    "name": "Ustuvorlik Bilan Boshlash (Priority)",
    "category": "Rejalashtirish",
    "syntax": "nice -n 10 [BUYRUQ]",
    "desc": "Yangi jarayonni belgilangan 'niceness' darajasi (-20 eng yuqori ustuvorlik, +19 eng past) bilan ishga tushiradi.",
    "dictSearch": "nice"
  },
  {
    "cmd": "renice",
    "name": "Ishlayotgan Jarayon Ustuvorligini O'zgartirish",
    "category": "Rejalashtirish",
    "syntax": "sudo renice -n -5 -p [PID]",
    "desc": "Ishlab turgan jarayonning CPU navbatidagi ustuvorligini real vaqt rejimida qayta belgilaydi.",
    "dictSearch": "renice"
  },
  {
    "cmd": "jobs",
    "name": "Faol Fon Vazifalarini Ko'rish",
    "category": "Job Control",
    "syntax": "jobs -l",
    "desc": "Joriy terminal qobig'ida fonda yoki to'xtatilgan holda turgan barcha topshiriqlar ro'yxatini ko'rsatadi.",
    "dictSearch": "jobs"
  },
  {
    "cmd": "bg",
    "name": "Vazifani Fonda Davom Ettirish",
    "category": "Job Control",
    "syntax": "bg %[JOB_ID]",
    "desc": "Ctrl+Z bilan to'xtatilgan dasturni terminalni band qilmasdan, fonda (background) ishlashini tiklaydi.",
    "dictSearch": "bg"
  },
  {
    "cmd": "fg",
    "name": "Vazifani Oldingi Planga Chiqarish",
    "category": "Job Control",
    "syntax": "fg %[JOB_ID]",
    "desc": "Fondagi jarayonni terminalning oldingi planiga (foreground) chiqarib, unga klaviatura kiritishini qaytaradi.",
    "dictSearch": "fg"
  },
  {
    "cmd": "nohup",
    "name": "Aloqa Uzilsa Ham To'xtamaslik",
    "category": "Jarayonlar",
    "syntax": "nohup [BUYRUQ] &",
    "desc": "Terminal yoki SSH sessiyasi yopilganda yuboriladigan SIGHUP (signal 1) ni e'tiborsiz qoldirib, jarayonning foniy ishlashini davom ettiradi.",
    "dictSearch": "nohup"
  },
  {
    "cmd": "disown",
    "name": "Qobiq Nazoratidan Chiqarish",
    "category": "Job Control",
    "syntax": "disown -h %[JOB_ID]",
    "desc": "Jarayonni qobiqning jobs jadvalidan chiqarib, terminal yopilganda o'chib ketishining oldini oladi.",
    "dictSearch": "disown"
  },
  {
    "cmd": "sleep",
    "name": "Kechiktirish va Kutish",
    "category": "Jarayonlar",
    "syntax": "sleep [SONIYA]",
    "desc": "Skript yoki terminal bajarilishini belgilangan soniyalarga to'xtatib turadi.",
    "dictSearch": "sleep"
  },
  {
    "cmd": "wait",
    "name": "Bola Jarayonlar Tugashini Kutish",
    "category": "Jarayonlar",
    "syntax": "wait [PID]",
    "desc": "Fondagi bola jarayon o'z ishini to'liq tugatmaguncha ota jarayonni kutish holatida ushlab turadi.",
    "dictSearch": "wait"
  },
  {
    "cmd": "mkfifo",
    "name": "Nomlangan Kanal Yaratish (Named Pipe / FIFO)",
    "category": "IPC (Inter-Process)",
    "syntax": "mkfifo [KANAL_NOMI]",
    "desc": "Ikki xil mustaqil jarayon o'rtasida ma'lumotlarni fayl tizimi orqali real vaqtda uzatish uchun maxsus FIFO kanali ochadi.",
    "dictSearch": "mkfifo"
  },
  {
    "cmd": "strace",
    "name": "Tizim Chaqiriqlarini Kuzatish (System Calls)",
    "category": "Diagnostika",
    "syntax": "strace -p [PID] yoki strace [BUYRUQ]",
    "desc": "Dastur Linux yadrosi (Kernel) bilan qanday tizim chaqiriqlari (open, read, write, fork) orqali muloqot qilayotganini tahlil qiladi.",
    "dictSearch": "strace"
  },
  {
    "cmd": "lsof",
    "name": "Ochiq Fayllar va Tarmoq Portlari",
    "category": "Diagnostika",
    "syntax": "lsof -i :[PORT] yoki lsof [FAYL]",
    "desc": "Qaysi jarayon qaysi faylni yoki qaysi tarmoq portini ochiq ushlab turganini fosh qiladi.",
    "dictSearch": "lsof"
  }
];
