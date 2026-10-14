/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 5 QUESTION DOSSIERS (101 to 150)
 * Verified Pedagogical Structure with 5-Point Command & Flag Anatomy.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W5_PART3 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 101,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 7",
    "title": "Timer Holatini Ko'rish (Status)",
    "story": "cleanup.timer ning keyingi qachon ishlashi va trigger holatini ko'rish buyrug'ini yozing.",
    "task": "systemctl status cleanup.timer buyrug'ini kiriting.",
    "canonical": "systemctl status cleanup.timer",
    "accepted": [
      "sudo systemctl status cleanup.timer"
    ],
    "tags": [
      "#SYSTEMCTL",
      "#STATUS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Taymer holati va trigger vaqtini ko'rish.",
      "flags": [],
      "whenToUse": "Keyingi ish qachon rejalashtirilganini bilishda.",
      "omissionRisk": "Taymer qotib qolganini sezmay qolish mumkin.",
      "syntaxExample": "systemctl status cleanup.timer"
    }
  },
  {
    "id": 102,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 7",
    "title": "Unit Fayl Sintaksisini Tekshirish",
    "story": "Yangi yaratilgan service yoki timer faylida sintaksis xatolarini xizmatni yoqmasdan tekshiruvchi buyruqni yozing.",
    "task": "systemd-analyze verify /etc/systemd/system/cleanup.service buyrug'ini kiriting.",
    "canonical": "systemd-analyze verify /etc/systemd/system/cleanup.service",
    "accepted": [
      "systemd-analyze verify cleanup.service"
    ],
    "tags": [
      "#VERIFY",
      "#SYNTAX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Systemd unit fayllari sintaksisini tekshirish.",
      "flags": [],
      "whenToUse": "Ishlab chiqarishga topshirishdan oldin.",
      "omissionRisk": "Xato bo'lsa xizmat failed holatga tushadi.",
      "syntaxExample": "systemd-analyze verify /etc/systemd/system/cleanup.service"
    }
  },
  {
    "id": 103,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 7",
    "title": "Tahrirdan So'ng Daemonni Qayta O'qitish",
    "story": ".service yoki .timer fayli tahrirlangandan so'ng Systemd xotirasiga o'zgarishlarni qayta yuklovchi buyruqni yozing.",
    "task": "sudo systemctl daemon-reload buyrug'ini kiriting.",
    "canonical": "sudo systemctl daemon-reload",
    "accepted": [
      "systemctl daemon-reload"
    ],
    "tags": [
      "#DAEMON_RELOAD",
      "#SYSTEMD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Diskdagi yangi konfiguratsiyalarni xotiraga yuklash.",
      "flags": [],
      "whenToUse": "Har qanday unit fayli o'zgarganda.",
      "omissionRisk": "Systemd eski keshdagi sozlamani ushlab turaveradi.",
      "syntaxExample": "sudo systemctl daemon-reload"
    }
  },
  {
    "id": 104,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 7",
    "title": "Timer Loglarini Jurnaldan Ko'rish",
    "story": "cleanup.timer ga oid barcha voqealar logini journalctl orqali chiqaruvchi buyruqni yozing.",
    "task": "journalctl -u cleanup.timer buyrug'ini kiriting.",
    "canonical": "journalctl -u cleanup.timer",
    "accepted": [
      "journalctl -u cleanup.service"
    ],
    "tags": [
      "#JOURNALCTL",
      "#LOGS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat ma'lum unit loglarini filtrlash.",
      "flags": [
        {
          "flag": "-u",
          "name": "Unit filter",
          "position": "journalctl -u",
          "purpose": "Unit nomi bo'yicha filter",
          "withoutRisk": "Millionlab tizim loglari aralashib ketadi."
        }
      ],
      "whenToUse": "Taymer muvaffaqiyatli ishlaganini tasdiqlashda.",
      "omissionRisk": "Xatolik sababini topish qiyinlashadi.",
      "syntaxExample": "journalctl -u cleanup.timer"
    }
  },
  {
    "id": 105,
    "sectorId": 7,
    "sectorTitle": "Systemd Timerlar & Xizmat Unitlari (.service, .timer)",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 7",
    "title": "Har 5 Daqiqada Systemd Interval Qolipi",
    "story": "Systemd OnCalendar da har 5 daqiqada bir marta bajarilishini bildiruvchi qisqa qolipni yozing (*:0/5).",
    "task": "*:0/5 qolipini kiriting.",
    "canonical": "*:0/5",
    "accepted": [
      "*:0/5 "
    ],
    "tags": [
      "#ONCALENDAR",
      "#STEP_MINUTES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har 5 daqiqalik qadam oralig'i.",
      "flags": [],
      "whenToUse": "Monitoring va tezkor davriy ishlarda.",
      "omissionRisk": "Sintaksis xato bo'lsa OnCalendar parse qilinmaydi.",
      "syntaxExample": "OnCalendar=*:0/5"
    }
  },
  {
    "id": 106,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 7",
    "title": "Faqat Disk Foydalanish Foizini Chiqarish",
    "story": "Root '/' fayl tizimi uchun barcha ustunlarni yashirib, faqat foiz ustunini chiqaruvchi df buyrug'ini yozing.",
    "task": "df / --output=pcent buyrug'ini kiriting.",
    "canonical": "df / --output=pcent",
    "accepted": [
      "df --output=pcent /"
    ],
    "tags": [
      "#DF",
      "#OUTPUT_FILTER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat disk foizi ustunini olish.",
      "flags": [
        {
          "flag": "--output=pcent",
          "name": "Percentage only",
          "position": "--output=pcent",
          "purpose": "Faqat foiz ustuni",
          "withoutRisk": "Ortiqcha 5 ta ustun chiqadi."
        }
      ],
      "whenToUse": "Skriptda disk to'lishini tekshirishda.",
      "omissionRisk": "Parsing qilish uchun qo'shimcha filtrlar kerak bo'ladi.",
      "syntaxExample": "df / --output=pcent"
    }
  },
  {
    "id": 107,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 7",
    "title": "Sarlavhani Tashlab Yuborish (tail)",
    "story": "df natijasidan birinchi sarlavha qatorini (Use%) tashlab, faqat oxirgi raqamli qatorni olish buyrug'ini yozing.",
    "task": "tail -n 1 buyrug'ini kiriting.",
    "canonical": "tail -n 1",
    "accepted": [
      "tail -1",
      "tail -n 1 "
    ],
    "tags": [
      "#TAIL",
      "#PIPELINE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat eng so'nggi 1 ta qatorni ajratish.",
      "flags": [
        {
          "flag": "-n 1",
          "name": "Lines count",
          "position": "tail -n 1",
          "purpose": "Bitta qator olish",
          "withoutRisk": "Standart 10 qator chiqadi."
        }
      ],
      "whenToUse": "Jadval sarlavhalarini kesib tashlashda.",
      "omissionRisk": "Sarlavhadagi matn raqamli solishtirishda xato beradi.",
      "syntaxExample": "df / --output=pcent | tail -n 1"
    }
  },
  {
    "id": 108,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 7",
    "title": "Bo'sh Joylar va Foiz Belgisini O'chirish",
    "story": "tr buyrug'i yordamida ' %' belgilarini o'chirib sof raqamni qoldiruvchi buyruqni yozing (tr -d ' %').",
    "task": "tr -d ' %' buyrug'ini kiriting.",
    "canonical": "tr -d ' %'",
    "accepted": [
      "tr -d ' ' | tr -d '%'",
      "tr -d ' %' "
    ],
    "tags": [
      "#TR",
      "#CLEANUP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bo'shliq va foiz belgilarini o'chirish.",
      "flags": [
        {
          "flag": "-d",
          "name": "Delete",
          "position": "tr -d",
          "purpose": "Ko'rsatilgan belgilarni o'chirish",
          "withoutRisk": "Belgilar qolib ketadi."
        }
      ],
      "whenToUse": "Bash da if [ $DISK -gt 85 ] integer tekshiruvi uchun.",
      "omissionRisk": "87% qolib ketsa bash arifmetika xatosi chiqaradi.",
      "syntaxExample": "tr -d ' %'"
    }
  },
  {
    "id": 109,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Qiyin",
    "source": "Seminar 05 Page 7",
    "title": "Yaxlit Disk Parsing Konveyeri (Pipeline)",
    "story": "Root '/' bo'limining to'lish foizini sof butun son sifatida chiqaruvchi to'liq konveyerni yozing.",
    "task": "df / --output=pcent | tail -n 1 | tr -d ' ' | tr -d '%' konveyerini kiriting.",
    "canonical": "df / --output=pcent | tail -n 1 | tr -d ' ' | tr -d '%'",
    "accepted": [
      "df / --output=pcent | tail -n 1 | tr -d ' %'"
    ],
    "tags": [
      "#PIPELINE",
      "#DISK_PARSE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Disk foizini to'g'ridan-to'g'ri son qilib olish.",
      "flags": [],
      "whenToUse": "Monitoring skriptining boshlanishida.",
      "omissionRisk": "Noto'g'ri qiymat olinsa threshold sharti ishlamaydi.",
      "syntaxExample": "DISK_USAGE=$(df / --output=pcent | tail -n 1 | tr -d ' ' | tr -d '%')"
    }
  },
  {
    "id": 110,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 8",
    "title": "Bash da Katta Bo'lsa Sharti (-gt)",
    "story": "Bash da $DISK_USAGE o'zgaruvchisi 85 dan katta ekanligini tekshirish sintaksisini yozing ([ \"$DISK_USAGE\" -gt 85 ]).",
    "task": "[ \"$DISK_USAGE\" -gt 85 ] shartini kiriting.",
    "canonical": "[ \"$DISK_USAGE\" -gt 85 ]",
    "accepted": [
      "[ $DISK_USAGE -gt 85 ]",
      "[[ \"$DISK_USAGE\" -gt 85 ]]"
    ],
    "tags": [
      "#BASH_CONDITION",
      "#THRESHOLD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Butun sonlar taqqoslashida greater than (-gt) tekshiruvi.",
      "flags": [],
      "whenToUse": "Disk chegaradan oshganini aniqlashda.",
      "omissionRisk": "'-gt' o'rniga '>' yozilsa leksikografik solishtirib xato qiladi.",
      "syntaxExample": "if [ \"$DISK_USAGE\" -gt 85 ]; then"
    }
  },
  {
    "id": 111,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Linux Hostname",
    "title": "Server Nomini Aniqlash",
    "story": "Xabarda qaysi server to'lib qolganini ko'rsatish uchun tizim nomini aniqlovchi buyruq qaysi?",
    "task": "hostname buyrug'ini yozing.",
    "canonical": "hostname",
    "accepted": [
      "hostname "
    ],
    "tags": [
      "#HOSTNAME",
      "#MONITORING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Joriy kompyuter nomini olish.",
      "flags": [],
      "whenToUse": "Bir nechta serverlardan keluvchi ogohlantirishlarda.",
      "omissionRisk": "Xabarda qaysi server to'lgani noma'lum bo'ladi.",
      "syntaxExample": "HOSTNAME=$(hostname)"
    }
  },
  {
    "id": 112,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Linux Date Format",
    "title": "Aniq Vaqt Qolipini Olish",
    "story": "Yil-Oy-Kun Soat:Daqiqa formatidagi vaqtni chiqarish uchun date buyrug'i formatini yozing (date \"+%Y-%m-%d %H:%M:%S\").",
    "task": "date \"+%Y-%m-%d %H:%M:%S\" buyrug'ini kiriting.",
    "canonical": "date \"+%Y-%m-%d %H:%M:%S\"",
    "accepted": [
      "date '+%Y-%m-%d %H:%M:%S'"
    ],
    "tags": [
      "#DATE",
      "#TIMESTAMP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Inson tushunadigan xalqaro vaqt tamg'asi.",
      "flags": [],
      "whenToUse": "Xabar yuborilgan aniq lahzani qayd etishda.",
      "omissionRisk": "Hodisa qachon yuz bergani noma'lum qoladi.",
      "syntaxExample": "TIMESTAMP=$(date \"+%Y-%m-%d %H:%M:%S\")"
    }
  },
  {
    "id": 113,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "O'rta",
    "source": "Telegram Bot API",
    "title": "Telegram Bot Xabar Jo'natish Endpointi",
    "story": "Telegram Bot API orqali xabar yuborish metodi qanday ataladi (sendMessage)?",
    "task": "sendMessage metodini yozing.",
    "canonical": "sendMessage",
    "accepted": [
      "sendMessage ",
      "sendmessage"
    ],
    "tags": [
      "#TELEGRAM_API",
      "#SENDMESSAGE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Telegram bot HTTP xabar jo'natish metodi.",
      "flags": [],
      "whenToUse": "curl orqali chatga xabar yuborishda.",
      "omissionRisk": "Metod xato bo'lsa 404 Not Found xatosi qaytadi.",
      "syntaxExample": "https://api.telegram.org/bot<TOKEN>/sendMessage"
    }
  },
  {
    "id": 114,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Qiyin",
    "source": "Seminar 05 Page 8",
    "title": "Curl Orqali Telegramga Xabar Yuborish",
    "story": "POST so'rovi va sokin rejim bilan Telegram API ga chat_id va text yuboruvchi asosiy curl buyrug'i qismini yozing.",
    "task": "curl -s -X POST buyrug'ini kiriting.",
    "canonical": "curl -s -X POST",
    "accepted": [
      "curl -s -X POST "
    ],
    "tags": [
      "#CURL",
      "#POST"
    ],
    "flagAnatomy": {
      "commandPurpose": "HTTP POST so'rovini sokin yuborish.",
      "flags": [
        {
          "flag": "-s",
          "name": "Silent",
          "position": "curl -s",
          "purpose": "Progress barni o'chirish",
          "withoutRisk": "Log fayl to'lib ketadi."
        },
        {
          "flag": "-X POST",
          "name": "Method",
          "position": "-X POST",
          "purpose": "POST metodini tanlash",
          "withoutRisk": "GET rad etiladi."
        }
      ],
      "whenToUse": "Botga bildirishnoma jo'natishda.",
      "omissionRisk": "Telegram xabarni qabul qilmaydi.",
      "syntaxExample": "curl -s -X POST \"https://api.telegram.org/...\""
    }
  },
  {
    "id": 115,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 8",
    "title": "Telegram Payload: chat_id Parametri",
    "story": "Xabar qaysi foydalanuvchi yoki guruhga borishini bildiruvchi parametr nomi qanday?",
    "task": "chat_id parametrini yozing.",
    "canonical": "chat_id",
    "accepted": [
      "chat_id=",
      "chat_id "
    ],
    "tags": [
      "#CHAT_ID",
      "#TELEGRAM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qabul qiluvchi chat identifikatori.",
      "flags": [],
      "whenToUse": "Xabar nishonini belgilashda.",
      "omissionRisk": "Telegram kimga jo'natishni bilmaydi.",
      "syntaxExample": "-d \"chat_id=${CHAT_ID}\""
    }
  },
  {
    "id": 116,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 8",
    "title": "Telegram Payload: text Parametri",
    "story": "Yuboriladigan xabarning mazmuni qaysi parametr orqali uzatiladi (text)?",
    "task": "text parametrini yozing.",
    "canonical": "text",
    "accepted": [
      "text=",
      "text "
    ],
    "tags": [
      "#TEXT",
      "#PAYLOAD"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xabar matni kontenti.",
      "flags": [],
      "whenToUse": "Ogohlantirish matnini kiritishda.",
      "omissionRisk": "Xabar bo'sh bo'lib qoladi.",
      "syntaxExample": "-d \"text=${MESSAGE}\""
    }
  },
  {
    "id": 117,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Linux curl Silent",
    "title": "Natijani /dev/null ga Tashlash",
    "story": "curl qaytargan JSON javobini ekranga yoki logga chiqarmaslik uchun qayerga yo'naltiriladi (> /dev/null)?",
    "task": "> /dev/null yo'naltirishini yozing.",
    "canonical": "> /dev/null",
    "accepted": [
      ">/dev/null",
      "> /dev/null "
    ],
    "tags": [
      "#DEV_NULL",
      "#SILENT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Chiqish oqimini yutib yuborish.",
      "flags": [],
      "whenToUse": "Skript toza ishlashi uchun.",
      "omissionRisk": "Foydasiz JSON chiqishi loglarni to'ldiradi.",
      "syntaxExample": "> /dev/null"
    }
  },
  {
    "id": 118,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Linux Permissions",
    "title": "Monitoring Skriptiga Ijro Ruxsati Berish",
    "story": "/usr/local/bin/disk_monitor.sh fayliga barcha uchun ijro (execute) ruxsati beruvchi buyruqni yozing.",
    "task": "chmod +x /usr/local/bin/disk_monitor.sh buyrug'ini kiriting.",
    "canonical": "chmod +x /usr/local/bin/disk_monitor.sh",
    "accepted": [
      "sudo chmod +x /usr/local/bin/disk_monitor.sh"
    ],
    "tags": [
      "#CHMOD",
      "#EXECUTE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Skriptni to'g'ridan-to'g'ri ishga tushadigan qilish.",
      "flags": [
        {
          "flag": "+x",
          "name": "Executable",
          "position": "chmod +x",
          "purpose": "Ijro ruxsatini qo'shish",
          "withoutRisk": "Permission denied xatosi chiqadi."
        }
      ],
      "whenToUse": "Yangi yozilgan bash skriptini ishga tushirishdan oldin.",
      "omissionRisk": "Cron skriptni bajara olmaydi.",
      "syntaxExample": "chmod +x /usr/local/bin/disk_monitor.sh"
    }
  },
  {
    "id": 119,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 5 Solution",
    "title": "Disk Skriptini Har 5 Daqiqada Crontabga Qo'shish",
    "story": "Har 5 daqiqada /usr/local/bin/disk_monitor.sh ni yurgazuvchi to'liq crontab qatorini yozing.",
    "task": "*/5 * * * * /bin/bash /usr/local/bin/disk_monitor.sh >> /var/log/disk_monitor.log 2>&1 qatorini kiriting.",
    "canonical": "*/5 * * * * /bin/bash /usr/local/bin/disk_monitor.sh >> /var/log/disk_monitor.log 2>&1",
    "accepted": [
      "*/5 * * * * /usr/local/bin/disk_monitor.sh >> /var/log/disk_monitor.log 2>&1"
    ],
    "tags": [
      "#CRONTAB_JOB",
      "#AUTOMATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Doimiy avtomatlashtirilgan disk nazorati.",
      "flags": [],
      "whenToUse": "Ishlab chiqarish serverlarini kuzatishda.",
      "omissionRisk": "Disk to'lib qolganda kech seziladi.",
      "syntaxExample": "*/5 * * * * /bin/bash /usr/local/bin/disk_monitor.sh >> /var/log/disk_monitor.log 2>&1"
    }
  },
  {
    "id": 120,
    "sectorId": 8,
    "sectorTitle": "Disk Monitoring & Telegram Alert Avtomatlashtirish",
    "difficulty": "Oson",
    "source": "Telegram BotFather",
    "title": "Telegram Bot Token Yaratuvchi Asosiy Bot",
    "story": "Telegramda yangi bot ochish va Token olish uchun qaysi rasmiy botga murojaat qilinadi?",
    "task": "@BotFather nomini kiriting.",
    "canonical": "@BotFather",
    "accepted": [
      "BotFather",
      "@botfather"
    ],
    "tags": [
      "#BOTFATHER",
      "#TELEGRAM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Telegram bot yaratish va boshqarish.",
      "flags": [],
      "whenToUse": "Yangi monitoring boti ochishda.",
      "omissionRisk": "Tokensiz Telegram API ga ulanib bo'lmaydi.",
      "syntaxExample": "Open @BotFather -> /newbot"
    }
  },
  {
    "id": 121,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 8",
    "title": "Docker vs Virtual Mashina (VM)",
    "story": "Virtual mashinadan farqli o'laroq, Docker konteynerlari alohida mehmon operatsion tizimi (Guest OS) o'rniga xost mashinasining nimasi bilan bo'lishadi (Kernel)?",
    "task": "Kernel (yadro) so'zini yozing.",
    "canonical": "kernel",
    "accepted": [
      "host kernel",
      "Kernel",
      "Host kernel"
    ],
    "tags": [
      "#DOCKER",
      "#KERNEL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xost yadrosini bo'lishish orqali yengil ishlash.",
      "flags": [],
      "whenToUse": "Resurslarni tejash va sekundda yuklanishda.",
      "omissionRisk": "To'liq VM gigabaytlab RAM va diskni behuda sarflaydi.",
      "syntaxExample": "Containers share Host Kernel"
    }
  },
  {
    "id": 122,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 8",
    "title": "Docker Keyrings Katalogini Yaratish",
    "story": "/etc/apt/keyrings katalogini 0755 ruxsati bilan yaratuvchi xavfsiz install buyrug'ini yozing.",
    "task": "sudo install -m 0755 -d /etc/apt/keyrings buyrug'ini kiriting.",
    "canonical": "sudo install -m 0755 -d /etc/apt/keyrings",
    "accepted": [
      "install -m 0755 -d /etc/apt/keyrings"
    ],
    "tags": [
      "#INSTALL",
      "#KEYRINGS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Xavfsiz kalitlar katalogini yaratish.",
      "flags": [
        {
          "flag": "-m 0755",
          "name": "Mode",
          "position": "-m 0755",
          "purpose": "Ruxsatlar",
          "withoutRisk": "Standart umask bilan yaratiladi."
        },
        {
          "flag": "-d",
          "name": "Directory",
          "position": "-d",
          "purpose": "Katalog yaratish",
          "withoutRisk": "Fayl deb o'ylaydi."
        }
      ],
      "whenToUse": "Rasmiy repozitoriy kalitlarini saqlashda.",
      "omissionRisk": "Katalog bo'lmasa GPG kalit yuklanmaydi.",
      "syntaxExample": "sudo install -m 0755 -d /etc/apt/keyrings"
    }
  },
  {
    "id": 123,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 8",
    "title": "Docker Rasmiy GPG Kalitini Yuklash",
    "story": "Docker rasmiy GPG kalitini /etc/apt/keyrings/docker.asc fayliga yuklab saqlovchi curl buyrug'ini yozing.",
    "task": "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc buyrug'ini kiriting.",
    "canonical": "sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc",
    "accepted": [
      "curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc"
    ],
    "tags": [
      "#CURL",
      "#GPG_KEY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Paketlar haqiqiyligini tekshiruvchi GPG kalitini yuklash.",
      "flags": [
        {
          "flag": "-fsSL",
          "name": "Flags",
          "position": "-fsSL",
          "purpose": "Silent, follow redirect, fail on error",
          "withoutRisk": "Yuklash buzilishi mumkin."
        },
        {
          "flag": "-o",
          "name": "Output",
          "position": "-o <file>",
          "purpose": "Faylga saqlash",
          "withoutRisk": "Terminalga chiqib ketadi."
        }
      ],
      "whenToUse": "Paket menejeri xavfsizligida.",
      "omissionRisk": "APT soxtalashtirilgan paketlardan himoyasiz qoladi.",
      "syntaxExample": "sudo curl -fsSL https://download.docker.com/... -o /etc/apt/keyrings/docker.asc"
    }
  },
  {
    "id": 124,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 8",
    "title": "Kalit Fayliga O'qish Ruxsati Berish",
    "story": "Yuklangan /etc/apt/keyrings/docker.asc kalitiga barcha uchun o'qish (a+r) ruxsatini berish buyrug'ini yozing.",
    "task": "sudo chmod a+r /etc/apt/keyrings/docker.asc buyrug'ini kiriting.",
    "canonical": "sudo chmod a+r /etc/apt/keyrings/docker.asc",
    "accepted": [
      "chmod a+r /etc/apt/keyrings/docker.asc"
    ],
    "tags": [
      "#CHMOD",
      "#KEY_PERMISSIONS"
    ],
    "flagAnatomy": {
      "commandPurpose": "APT menejeri kalitni erkin o'qiy olishi.",
      "flags": [
        {
          "flag": "a+r",
          "name": "All read",
          "position": "chmod a+r",
          "purpose": "Barchaga o'qish huquqi",
          "withoutRisk": "APT unprivileged user o'qiy olmaydi."
        }
      ],
      "whenToUse": "Kalit o'rnatilgach darhol.",
      "omissionRisk": "apt update GPG permission denied xatosini beradi.",
      "syntaxExample": "sudo chmod a+r /etc/apt/keyrings/docker.asc"
    }
  },
  {
    "id": 125,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 9",
    "title": "Docker Paketlarini O'rnatish (APT)",
    "story": "docker-ce, docker-ce-cli va containerd.io paketlarini o'rnatuvchi apt buyrug'ini yozing.",
    "task": "sudo apt install docker-ce docker-ce-cli containerd.io buyrug'ini kiriting.",
    "canonical": "sudo apt install docker-ce docker-ce-cli containerd.io",
    "accepted": [
      "sudo apt install -y docker-ce docker-ce-cli containerd.io",
      "apt install docker-ce docker-ce-cli containerd.io"
    ],
    "tags": [
      "#APT",
      "#INSTALL_DOCKER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker Engine va konteyner muhitini o'rnatish.",
      "flags": [],
      "whenToUse": "Tizimda konteynerlashtirishni sozlashda.",
      "omissionRisk": "Docker buyruqlari mavjud bo'lmaydi.",
      "syntaxExample": "sudo apt install docker-ce docker-ce-cli containerd.io"
    }
  },
  {
    "id": 126,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 9",
    "title": "Docker Xizmati Holatini Tekshirish",
    "story": "Docker daemoni faol (active running) ekanligini tekshirish buyrug'ini yozing.",
    "task": "sudo systemctl status docker buyrug'ini kiriting.",
    "canonical": "sudo systemctl status docker",
    "accepted": [
      "systemctl status docker"
    ],
    "tags": [
      "#SYSTEMCTL",
      "#DOCKER_STATUS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker daemon faolligini ko'rish.",
      "flags": [],
      "whenToUse": "Konteynerlar ishga tushmay qolganda.",
      "omissionRisk": "Daemon to'xtab qolgan bo'lsa barcha Docker buyruqlari xato beradi.",
      "syntaxExample": "sudo systemctl status docker"
    }
  },
  {
    "id": 127,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 9",
    "title": "Birinchi Test Tasvirini Ishga Tushirish",
    "story": "Docker o'rnatilishi muvaffaqiyatli bo'lganini tekshirish uchun test tasvirini ishga tushiruvchi buyruqni yozing.",
    "task": "sudo docker run hello-world buyrug'ini kiriting.",
    "canonical": "sudo docker run hello-world",
    "accepted": [
      "docker run hello-world"
    ],
    "tags": [
      "#HELLO_WORLD",
      "#TEST"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker Engine to'g'ri sozlanganini tekshirish.",
      "flags": [],
      "whenToUse": "O'rnatish yakunida tekshiruv uchun.",
      "omissionRisk": "Agar xato bo'lsa muammo o'z vaqtida aniqlanmaydi.",
      "syntaxExample": "sudo docker run hello-world"
    }
  },
  {
    "id": 128,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 9",
    "title": "Docker Guruhini Yaratish",
    "story": "Foydalanuvchilarga sudo siz Docker ishlatish huquqini berish uchun 'docker' tizim guruhini yaratish buyrug'ini yozing.",
    "task": "sudo groupadd docker buyrug'ini kiriting.",
    "canonical": "sudo groupadd docker",
    "accepted": [
      "groupadd docker"
    ],
    "tags": [
      "#GROUPADD",
      "#DOCKER_SECURITY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Docker xavfsizlik guruhini ochish.",
      "flags": [],
      "whenToUse": "Sudo siz konteyner boshqaruvini yoqishda.",
      "omissionRisk": "Foydalanuvchi har bir buyruqda sudo parolini kiritishga majbur bo'ladi.",
      "syntaxExample": "sudo groupadd docker"
    }
  },
  {
    "id": 129,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 9",
    "title": "Foydalanuvchini Docker Guruhiga Qo'shish",
    "story": "Joriy foydalanuvchini mavjud guruhlarini saqlagan holda docker guruhiga qo'shish buyrug'ini yozing.",
    "task": "sudo usermod -aG docker $USER buyrug'ini kiriting.",
    "canonical": "sudo usermod -aG docker $USER",
    "accepted": [
      "sudo usermod -aG docker student",
      "usermod -aG docker $USER"
    ],
    "tags": [
      "#USERMOD",
      "#DOCKER_GROUP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Foydalanuvchiga Docker imtiyozini berish.",
      "flags": [
        {
          "flag": "-aG",
          "name": "Append group",
          "position": "usermod -aG",
          "purpose": "Guruhga qo'shish",
          "withoutRisk": "Agar -a unutilsa foydalanuvchi boshqa barcha guruhlardan chiqarib yuboriladi!"
        }
      ],
      "whenToUse": "Non-root userga huquq berishda.",
      "omissionRisk": "-G ning o'zi sudoers huquqini o'chirib yuboradi.",
      "syntaxExample": "sudo usermod -aG docker $USER"
    }
  },
  {
    "id": 130,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 9",
    "title": "Yangi Guruhni Joriy Sessiyada Faollashtirish",
    "story": "Tizimdan chiqib qayta kirmasdan (relogin qilmasdan) docker guruhini joriy terminalda zudlik bilan faollashtiruvchi buyruq qaysi?",
    "task": "newgrp docker buyrug'ini kiriting.",
    "canonical": "newgrp docker",
    "accepted": [
      "newgrp docker "
    ],
    "tags": [
      "#NEWGRP",
      "#SESSION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yangi guruh a'zoligini joriy shellga darhol yuklash.",
      "flags": [],
      "whenToUse": "Relogin qilishga vaqt yo'q bo'lganda.",
      "omissionRisk": "Yangi guruh terminal yopilmaguncha kuchga kirmaydi.",
      "syntaxExample": "newgrp docker"
    }
  },
  {
    "id": 131,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Docker Hub Pull",
    "title": "Docker Hub dan Tasvirni Yuklab Olish",
    "story": "Docker Hub repozitoriysidan ubuntu:22.04 tasvirini yuklab oluvchi buyruqni yozing.",
    "task": "docker pull ubuntu:22.04 buyrug'ini kiriting.",
    "canonical": "docker pull ubuntu:22.04",
    "accepted": [
      "docker image pull ubuntu:22.04"
    ],
    "tags": [
      "#DOCKER_PULL",
      "#IMAGES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Internetdan konteyner tasvirini (image) ko'chirib olish.",
      "flags": [],
      "whenToUse": "Konteynerni ishga tushirishdan oldin zaxiralashda.",
      "omissionRisk": "Konteyner har safar ishga tushganda sekin yuklanadi.",
      "syntaxExample": "docker pull ubuntu:22.04"
    }
  },
  {
    "id": 132,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Mavjud Tasvirlar Ro'yxatini Ko'rish",
    "story": "Lokal kompyuterda mavjud barcha Docker tasvirlarini (images) ko'rish buyrug'ini yozing.",
    "task": "docker images buyrug'ini kiriting.",
    "canonical": "docker images",
    "accepted": [
      "docker image ls",
      "docker images "
    ],
    "tags": [
      "#DOCKER_IMAGES",
      "#LIST"
    ],
    "flagAnatomy": {
      "commandPurpose": "Diskdagi barcha tasvirlar ro'yxatini ko'rsatish.",
      "flags": [],
      "whenToUse": "Disk qancha tasvirlar bilan bandligini bilishda.",
      "omissionRisk": "Eski tasvirlar to'planib diskni to'ldirib yuboradi.",
      "syntaxExample": "docker images"
    }
  },
  {
    "id": 133,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 10",
    "title": "Interaktiv Fon Rejimida Konteyner Yaratish",
    "story": "ubuntu tasviridan 'my-ubuntu' nomli konteynerni orqa fonda (-d) va interaktiv (-it) ishga tushiruvchi to'liq buyruqni yozing.",
    "task": "docker container run -it -d --name my-ubuntu ubuntu buyrug'ini kiriting.",
    "canonical": "docker container run -it -d --name my-ubuntu ubuntu",
    "accepted": [
      "docker run -it -d --name my-ubuntu ubuntu",
      "docker container run -d -it --name my-ubuntu ubuntu"
    ],
    "tags": [
      "#DOCKER_RUN",
      "#INTERACTIVE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yangi konteyner yaratish va ishga tushirish.",
      "flags": [
        {
          "flag": "-d",
          "name": "Detached",
          "position": "-d",
          "purpose": "Fonda ishlash",
          "withoutRisk": "Terminalni bloklab oladi."
        },
        {
          "flag": "-it",
          "name": "Interactive TTY",
          "position": "-it",
          "purpose": "Terminal ajratish",
          "withoutRisk": "Bash darhol o'chib qoladi."
        },
        {
          "flag": "--name",
          "name": "Custom name",
          "position": "--name my-ubuntu",
          "purpose": "Aniq nom berish",
          "withoutRisk": "Tasodifiy g'alati nom beriladi."
        }
      ],
      "whenToUse": "Doimiy fon xizmati yoki test muhitini yaratishda.",
      "omissionRisk": "Konteynerni boshqarish qiyinlashadi.",
      "syntaxExample": "docker container run -it -d --name my-ubuntu ubuntu"
    }
  },
  {
    "id": 134,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Detached (-d) Bayrog'i Ma'nosi",
    "story": "Konteyner joriy terminalni band qilmasdan, orqa fonda xizmat sifatida ishlashini ta'minlovchi bayroq qaysi (-d)?",
    "task": "-d bayrog'ini yozing.",
    "canonical": "-d",
    "accepted": [
      "-d ",
      "--detach"
    ],
    "tags": [
      "#DETACHED",
      "#FLAGS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerni orqa fon rejimiga o'tkazish.",
      "flags": [
        {
          "flag": "-d",
          "name": "Detached",
          "position": "run -d",
          "purpose": "Orqa fonda yurgazish",
          "withoutRisk": "Terminal yopilsa konteyner ham o'ladi."
        }
      ],
      "whenToUse": "Server, veb-sayt va ma'lumotlar bazalarini yoqishda.",
      "omissionRisk": "Terminal oynasi band bo'lib qoladi.",
      "syntaxExample": "docker run -d nginx"
    }
  },
  {
    "id": 135,
    "sectorId": 9,
    "sectorTitle": "Docker Klasteri O'rnatish & Asosiy Buyruqlar",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Konteynerga Maxsus Nom Berish (--name)",
    "story": "Konteynerga inson tushunadigan aniq nom berish uchun qaysi parametr ishlatiladi (--name)?",
    "task": "--name parametrini yozing.",
    "canonical": "--name",
    "accepted": [
      "--name ",
      "-name"
    ],
    "tags": [
      "#CONTAINER_NAME",
      "#CONVENIENCE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerga ixtiyoriy nom biriktirish.",
      "flags": [
        {
          "flag": "--name",
          "name": "Container name",
          "position": "--name <name>",
          "purpose": "Nom berish",
          "withoutRisk": "Avtomatik 'laughing_morse' kabi nom beriladi."
        }
      ],
      "whenToUse": "Boshqarish va skriptlarda aniq identifikatsiya uchun.",
      "omissionRisk": "ID raqamini qidirib topishga to'g'ri keladi.",
      "syntaxExample": "docker run --name web-prod nginx"
    }
  },
  {
    "id": 136,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Ishlayotgan Konteynerlar Ro'yxati",
    "story": "Faqat ayni paytda ishlayotgan konteynerlar ro'yxatini ko'rish buyrug'ini yozing.",
    "task": "docker container ls buyrug'ini kiriting.",
    "canonical": "docker container ls",
    "accepted": [
      "docker ps",
      "docker container ls "
    ],
    "tags": [
      "#DOCKER_PS",
      "#LIST_RUNNING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faol konteynerlarni ko'rish.",
      "flags": [],
      "whenToUse": "Qaysi xizmatlar yoniqligini tekshirishda.",
      "omissionRisk": "To'xtagan konteynerlar ko'rinmaydi.",
      "syntaxExample": "docker container ls"
    }
  },
  {
    "id": 137,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Barcha Konteynerlarni Ko'rish (ls -a)",
    "story": "To'xtatilgan va xato bilan chiqqan (Exited) barcha konteynerlarni ko'rsatuvchi buyruqni yozing.",
    "task": "docker container ls -a buyrug'ini kiriting.",
    "canonical": "docker container ls -a",
    "accepted": [
      "docker ps -a",
      "docker container ls -a "
    ],
    "tags": [
      "#ALL_CONTAINERS",
      "#FLAG_A"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha (yoniq va o'chiq) konteynerlarni ko'rsatish.",
      "flags": [
        {
          "flag": "-a",
          "name": "All",
          "position": "ls -a",
          "purpose": "Barcha konteynerlar",
          "withoutRisk": "Faqat faollar chiqadi."
        }
      ],
      "whenToUse": "Xato sabab o'chgan konteynerlarni topishda.",
      "omissionRisk": "Crash bo'lgan konteynerlar yashirin qoladi.",
      "syntaxExample": "docker container ls -a"
    }
  },
  {
    "id": 138,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Qiyin",
    "source": "Seminar 05 Page 10",
    "title": "Port Forwarding Bilan Nginx Ishga Tushirish",
    "story": "nginx tasviridan 'nginx8888' nomli konteynerni orqa fonda (-d) va xostning 8888-portini konteynerning 80-portiga bog'lab (-p 8888:80) ishga tushirish buyrug'ini yozing.",
    "task": "docker container run -d -p 8888:80 --name nginx8888 nginx buyrug'ini kiriting.",
    "canonical": "docker container run -d -p 8888:80 --name nginx8888 nginx",
    "accepted": [
      "docker run -d -p 8888:80 --name nginx8888 nginx"
    ],
    "tags": [
      "#PORT_FORWARDING",
      "#NGINX"
    ],
    "flagAnatomy": {
      "commandPurpose": "Port mapping bilan veb-server yoqish.",
      "flags": [
        {
          "flag": "-p 8888:80",
          "name": "Port map",
          "position": "-p <host>:<container>",
          "purpose": "Tashqi portni ichki portga ulash",
          "withoutRisk": "Konteyner tashqaridan ochilmaydi!"
        },
        {
          "flag": "-d",
          "name": "Detached",
          "position": "-d",
          "purpose": "Orqa fonda yurgazish",
          "withoutRisk": "Terminal bloklanadi."
        }
      ],
      "whenToUse": "Konteynerdagi veb-saytni xostdan ochishda.",
      "omissionRisk": "localhost:8888 ulanishdan bosh tortadi.",
      "syntaxExample": "docker container run -d -p 8888:80 --name nginx8888 nginx"
    }
  },
  {
    "id": 139,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 10",
    "title": "Port Sintaksisi Tartibi: Host vs Container",
    "story": "Port yo'naltirishda -p 8888:80 parametrida chapdagi 8888 qaysi tizimning porti hisoblanadi (host yoki container)?",
    "task": "Host (xost kompyuter) so'zini yozing.",
    "canonical": "host",
    "accepted": [
      "Host",
      "host port",
      "Host port"
    ],
    "tags": [
      "#PORT_MAPPING",
      "#HOST_PORT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Chapdagi raqam xost, o'ngdagi konteyner porti.",
      "flags": [],
      "whenToUse": "Port to'qnashuvlarini oldini olishda.",
      "omissionRisk": "Teskari yozilsa konteyner portiga ulanib bo'lmaydi.",
      "syntaxExample": "-p <host_port>:<container_port>"
    }
  },
  {
    "id": 140,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Portga Murojaat Qilishni Tekshirish",
    "story": "8888-portga ochilgan Nginx veb-serveriga xostdan curl orqali so'rov yuborish buyrug'ini yozing.",
    "task": "curl localhost:8888 buyrug'ini kiriting.",
    "canonical": "curl localhost:8888",
    "accepted": [
      "curl http://localhost:8888",
      "curl 127.0.0.1:8888"
    ],
    "tags": [
      "#CURL",
      "#PORT_TEST"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yo'naltirilgan port orqali HTML sahifani o'qish.",
      "flags": [],
      "whenToUse": "Konteyner ishlashini tekshirishda.",
      "omissionRisk": "Port ochilmagan bo'lsa connection refused xatosi chiqadi.",
      "syntaxExample": "curl localhost:8888"
    }
  },
  {
    "id": 141,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 10",
    "title": "Ishlayotgan Konteyner Ichiga Bash Bilan Kirish",
    "story": "Ishlayotgan 'my-ubuntu' konteyneri ichida yangi interaktiv bash sessiyasini boshlash buyrug'ini yozing.",
    "task": "docker container exec -it my-ubuntu bash buyrug'ini kiriting.",
    "canonical": "docker container exec -it my-ubuntu bash",
    "accepted": [
      "docker exec -it my-ubuntu bash"
    ],
    "tags": [
      "#DOCKER_EXEC",
      "#SHELL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteyner ichiga yangi jarayon bilan kirish.",
      "flags": [
        {
          "flag": "-it",
          "name": "Interactive TTY",
          "position": "-it",
          "purpose": "Terminal ochish",
          "withoutRisk": "Buyruq kiritib bo'lmaydi."
        }
      ],
      "whenToUse": "Konteyner ichidagi fayllarni tahrirlash va diagnostikada.",
      "omissionRisk": "Konteyner to'xtab qolishi mumkin emas.",
      "syntaxExample": "docker container exec -it my-ubuntu bash"
    }
  },
  {
    "id": 142,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 10",
    "title": "Konteyner Asosiy Jarayoniga Ulanish (Attach)",
    "story": "my-ubuntu konteynerining asosiy 1-PID jarayoniga ulanuvchi buyruqni yozing.",
    "task": "docker container attach my-ubuntu buyrug'ini kiriting.",
    "canonical": "docker container attach my-ubuntu",
    "accepted": [
      "docker attach my-ubuntu"
    ],
    "tags": [
      "#ATTACH",
      "#STDIN_STDOUT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Boshlang'ich konsolga ulanish.",
      "flags": [],
      "whenToUse": "Dastlabki jarayon chiqarayotgan xabarlarni ko'rishda.",
      "omissionRisk": "Ctrl+C bosilsa butun konteyner to'xtaydi!",
      "syntaxExample": "docker container attach my-ubuntu"
    }
  },
  {
    "id": 143,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Attachdan Konteynerni To'xtatmasdan Chiqish",
    "story": "Attach qilingan konteynerni to'xtatmasdan (detach bo'lib) chiqish uchun qaysi klavishlar ketma-ketligi bosiladi (Ctrl+P, Ctrl+Q)?",
    "task": "Ctrl+P, Ctrl+Q kombinatsiyasini yozing.",
    "canonical": "Ctrl+P, Ctrl+Q",
    "accepted": [
      "Ctrl+P Ctrl+Q",
      "ctrl+p, ctrl+q",
      "Ctrl+p, Ctrl+q"
    ],
    "tags": [
      "#DETACH_KEY",
      "#SAFETY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerni to'xtatmasdan chiqish.",
      "flags": [],
      "whenToUse": "Attach dan so'ng konteynerni fonda qoldirishda.",
      "omissionRisk": "Ctrl+C bosilsa xizmat o'chib qoladi.",
      "syntaxExample": "Press Ctrl+P then Ctrl+Q"
    }
  },
  {
    "id": 144,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Konteyner Loglarini Ko'rish",
    "story": "nginx8888 konteyneri chiqargan barcha konsol loglarini ko'rish buyrug'ini yozing.",
    "task": "docker container logs nginx8888 buyrug'ini kiriting.",
    "canonical": "docker container logs nginx8888",
    "accepted": [
      "docker logs nginx8888"
    ],
    "tags": [
      "#DOCKER_LOGS",
      "#INSPECTION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteyner stdout/stderr qaydlarini o'qish.",
      "flags": [],
      "whenToUse": "Konteyner ichidagi veb-server xatolarini tekshirishda.",
      "omissionRisk": "Xato sababini bilib bo'lmaydi.",
      "syntaxExample": "docker container logs nginx8888"
    }
  },
  {
    "id": 145,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "O'rta",
    "source": "Docker Logs Follow",
    "title": "Loglarni Jonli Efirda Kuzatish (-f)",
    "story": "nginx8888 loglarini uzluksiz real-vaqt rejimida (follow) kuzatib turuvchi buyruqni yozing.",
    "task": "docker container logs -f nginx8888 buyrug'ini kiriting.",
    "canonical": "docker container logs -f nginx8888",
    "accepted": [
      "docker logs -f nginx8888"
    ],
    "tags": [
      "#LOGS_FOLLOW",
      "#REALTIME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yangi kelayotgan loglarni jonli oqimda ko'rish.",
      "flags": [
        {
          "flag": "-f",
          "name": "Follow",
          "position": "logs -f",
          "purpose": "Jonli oqim",
          "withoutRisk": "Faqat eski loglar chiqib dastur tugaydi."
        }
      ],
      "whenToUse": "Saytga so'rov yuborilganda real vaqtda ko'rishda.",
      "omissionRisk": "Yangi xatoliklar ko'rinmay qoladi.",
      "syntaxExample": "docker container logs -f nginx8888"
    }
  },
  {
    "id": 146,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "O'rta",
    "source": "Docker Stats",
    "title": "Konteynerlar Jonli Resurs Statistikasi",
    "story": "Barcha faol konteynerlarning CPU va RAM xotira sarfini real vaqtda foizlarda ko'rsatuvchi buyruq qaysi?",
    "task": "docker stats buyrug'ini kiriting.",
    "canonical": "docker stats",
    "accepted": [
      "docker container stats",
      "docker stats "
    ],
    "tags": [
      "#DOCKER_STATS",
      "#RESOURCES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerlarning jonli CPU/RAM monitoringi.",
      "flags": [],
      "whenToUse": "Qaysi konteyner RAM ni to'ldirayotganini aniqlashda.",
      "omissionRisk": "Konteyner OOM (Out Of Memory) bilan qulashi mumkin.",
      "syntaxExample": "docker stats"
    }
  },
  {
    "id": 147,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "Konteynerni Xavfsiz To'xtatish (Stop)",
    "story": "my-ubuntu konteyneriga SIGTERM yuborib uni xavfsiz to'xtatuvchi buyruqni yozing.",
    "task": "docker container stop my-ubuntu buyrug'ini kiriting.",
    "canonical": "docker container stop my-ubuntu",
    "accepted": [
      "docker stop my-ubuntu"
    ],
    "tags": [
      "#DOCKER_STOP",
      "#LIFECYCLE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerni xavfsiz to'xtatish.",
      "flags": [],
      "whenToUse": "Xizmatni o'chirish yoki yangilash oldidan.",
      "omissionRisk": "Konteyner resurslarni yeb turishda davom etadi.",
      "syntaxExample": "docker container stop my-ubuntu"
    }
  },
  {
    "id": 148,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "Oson",
    "source": "Seminar 05 Page 10",
    "title": "To'xtagan Konteynerni Qayta Yoqish (Start)",
    "story": "To'xtatilgan my-ubuntu konteynerini qayta ishga tushiruvchi buyruqni yozing.",
    "task": "docker container start my-ubuntu buyrug'ini kiriting.",
    "canonical": "docker container start my-ubuntu",
    "accepted": [
      "docker start my-ubuntu"
    ],
    "tags": [
      "#DOCKER_START",
      "#RESUME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud to'xtagan konteynerni yoqish.",
      "flags": [],
      "whenToUse": "Avvalgi ma'lumotlarni saqlagan holda qayta yoqishda.",
      "omissionRisk": "Yangi konteyner ochilsa eski o'zgarishlar yo'qoladi.",
      "syntaxExample": "docker container start my-ubuntu"
    }
  },
  {
    "id": 149,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "O'rta",
    "source": "Seminar 05 Page 10",
    "title": "Konteyner Nomini O'zgartirish (Rename)",
    "story": "my-ubuntu konteynerining nomini 'ubuntu-prod' ga o'zgartiruvchi buyruqni yozing.",
    "task": "docker container rename my-ubuntu ubuntu-prod buyrug'ini kiriting.",
    "canonical": "docker container rename my-ubuntu ubuntu-prod",
    "accepted": [
      "docker rename my-ubuntu ubuntu-prod"
    ],
    "tags": [
      "#RENAME",
      "#MANAGEMENT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteyner nomini o'zgartirish.",
      "flags": [],
      "whenToUse": "Infratuzilmani qayta tartiblashda.",
      "omissionRisk": "Konteynerni o'chirib qayta qurishga to'g'ri keladi.",
      "syntaxExample": "docker container rename my-ubuntu ubuntu-prod"
    }
  },
  {
    "id": 150,
    "sectorId": 10,
    "sectorTitle": "Docker Port Forwarding, Loglar & Konteyner Boshqaruvi",
    "difficulty": "O'rta",
    "source": "Docker Remove Force",
    "title": "Konteynerni Majburiy O'chirish (rm -f)",
    "story": "Ishlab turgan my-ubuntu konteynerini to'xtatmasdan darhol majburiy o'chirib yuboruvchi buyruqni yozing.",
    "task": "docker container rm -f my-ubuntu buyrug'ini kiriting.",
    "canonical": "docker container rm -f my-ubuntu",
    "accepted": [
      "docker rm -f my-ubuntu"
    ],
    "tags": [
      "#DOCKER_RM",
      "#FORCE_REMOVE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerni majburan o'chirish.",
      "flags": [
        {
          "flag": "-f",
          "name": "Force",
          "position": "rm -f",
          "purpose": "Majburiy o'chirish (SIGKILL)",
          "withoutRisk": "Avval stop qilishni talab etadi."
        }
      ],
      "whenToUse": "Qotib qolgan konteynerni tozalashda.",
      "omissionRisk": "Docker 'cannot remove running container' xatosini beradi.",
      "syntaxExample": "docker container rm -f my-ubuntu"
    }
  }
];
});
