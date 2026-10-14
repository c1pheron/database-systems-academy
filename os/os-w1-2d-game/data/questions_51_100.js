// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — QUESTIONS 51 TO 100
// touch -d, cat, redirection >, >>, head, tail, tail -f, wc -l, wc -w, wc -c.
// ============================================================================

window.QUESTIONS_51_100 = [
  {
    "id": 51,
    "title": "Eski 'old1.txt' Faylini Yaratish",
    "story": "Qidiruv va tozalash mashqi uchun 7 kundan eski `old1.txt` faylini hosil qiling.",
    "taskUz": "`touch -d \"2025-01-01\" old1.txt` buyrug'ini bering.",
    "expectedSql": "touch -d \"2025-01-01\" old1.txt",
    "hint": "`touch -d \"2025-01-01\" old1.txt` deb yozing.",
    "tags": [
      "TOUCH -D",
      "OLD FILE",
      "TEST"
    ],
    "solutions": [
      "touch -d \"2025-01-01\" old1.txt",
      "touch -d '2025-01-01' old1.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 52,
    "title": "Ikkinchi Eski 'old2.txt' Faylini Yaratish",
    "story": "Yana bitta eskirgan `old2.txt` faylini o'tmish sanasi bilan oching.",
    "taskUz": "`touch -d \"2025-01-02\" old2.txt` buyrug'ini bering.",
    "expectedSql": "touch -d \"2025-01-02\" old2.txt",
    "hint": "`touch -d \"2025-01-02\" old2.txt` deb yozing.",
    "tags": [
      "TOUCH -D",
      "OLD FILE",
      "TEST"
    ],
    "solutions": [
      "touch -d \"2025-01-02\" old2.txt",
      "touch -d '2025-01-02' old2.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 53,
    "title": "Yangi 'recent.txt' Faylini Yaratish",
    "story": "Bugungi yangi sanaga ega `recent.txt` faylini yarating.",
    "taskUz": "`touch recent.txt` buyrug'ini bering.",
    "expectedSql": "touch recent.txt",
    "hint": "`touch recent.txt` deb yozing.",
    "tags": [
      "TOUCH",
      "RECENT",
      "FILE CREATION"
    ],
    "solutions": [
      "touch recent.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 54,
    "title": "Bir Nechta Bo'sh Faylni Bitta Qatorda Yaratish",
    "story": "Bir vaqtning o'zida `f1.txt f2.txt f3.txt` fayllarini bitta `touch` bilan oching.",
    "taskUz": "`touch f1.txt f2.txt f3.txt` buyrug'ini bering.",
    "expectedSql": "touch f1.txt f2.txt f3.txt",
    "hint": "`touch f1.txt f2.txt f3.txt` deb yozing.",
    "tags": [
      "TOUCH",
      "MULTIPLE",
      "FILES"
    ],
    "solutions": [
      "touch f1.txt f2.txt f3.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 55,
    "title": "Fayllar Ro'yxatini Sana Bo'yicha Ko'rish (ls -lt)",
    "story": "Yaratilgan fayllar sanalarining farqini uzun formatda tekshiring.",
    "taskUz": "`ls -lt` buyrug'i orqali sanasi bo'yicha saralab chiqaring.",
    "expectedSql": "ls -lt",
    "hint": "`ls -lt` deb yozing.",
    "tags": [
      "LS -LT",
      "TIMESTAMP",
      "LIST"
    ],
    "solutions": [
      "ls -lt",
      "ls -l -t"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 56,
    "title": "stat Bilan old1.txt Inode va Huquqlarini Tekshirish",
    "story": "`old1.txt` faylining Inode va vaqt parametrlarini tahlil qiling.",
    "taskUz": "`stat old1.txt` buyrug'ini bering.",
    "expectedSql": "stat old1.txt",
    "hint": "`stat old1.txt` deb yozing.",
    "tags": [
      "STAT",
      "INODE",
      "AUDIT"
    ],
    "solutions": [
      "stat old1.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 57,
    "title": "Vaqt Tamg'asini Joriy Vaqtga Yangilash",
    "story": "`touch` mavjud faylga berilsa, uning o'zgarish vaqti joriy daqiqaga yangilanadi.",
    "taskUz": "`touch system.log` buyrug'i orqali vaqt tamg'asini joriy vaqtga yangilang.",
    "expectedSql": "touch system.log",
    "hint": "`touch system.log` deb yozing.",
    "tags": [
      "TOUCH",
      "UPDATE MTIME",
      "FILE"
    ],
    "solutions": [
      "touch system.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 58,
    "title": "Yangi 'audit.log' Faylini Yaratish",
    "story": "Xavfsizlik tekshiruvlari uchun `audit.log` faylini oching.",
    "taskUz": "`touch audit.log` buyrug'ini bering.",
    "expectedSql": "touch audit.log",
    "hint": "`touch audit.log` deb yozing.",
    "tags": [
      "TOUCH",
      "AUDIT",
      "FILE"
    ],
    "solutions": [
      "touch audit.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 59,
    "title": "Sinov Fayllarini O'chirish (rm f1.txt f2.txt f3.txt)",
    "story": "Ortiqcha sinov fayllarini tozalab tashlang.",
    "taskUz": "`rm f1.txt f2.txt f3.txt` buyrug'i orqali uchta faylni o'chiring.",
    "expectedSql": "rm f1.txt f2.txt f3.txt",
    "hint": "`rm f1.txt f2.txt f3.txt` deb yozing.",
    "tags": [
      "RM",
      "CLEANUP",
      "FILES"
    ],
    "solutions": [
      "rm f1.txt f2.txt f3.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 60,
    "title": "touch Buyrug'i Qo'llanmasini Ko'rish",
    "story": "`touch` buyrug'ining barcha vaqt formatlari haqida ma'lumot oling.",
    "taskUz": "`man touch` buyrug'ini bering.",
    "expectedSql": "man touch",
    "hint": "`man touch` deb yozing.",
    "tags": [
      "MAN",
      "TOUCH",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man touch"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 61,
    "title": "Fayl Tarkibini Ekranga Chiqarish (cat readme.txt)",
    "story": "Uy katalogidagi `readme.txt` fayli ichidagi xabarni to'liq o'qing.",
    "taskUz": "`cat ~/readme.txt` buyrug'i orqali matnni ekranga chiqaring.",
    "expectedSql": "cat ~/readme.txt",
    "hint": "`cat ~/readme.txt` yoki `cat /home/student/readme.txt` deb yozing.",
    "tags": [
      "CAT",
      "VIEW",
      "STDOUT"
    ],
    "solutions": [
      "cat ~/readme.txt",
      "cat /home/student/readme.txt"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 62,
    "title": "Tizim Hostini Ekranga Chiqarish (cat /etc/hostname)",
    "story": "Linux da ko'p parametrlar oddiy fayl ko'rinishida `/etc` da saqlanadi.",
    "taskUz": "`cat /etc/hostname` buyrug'i orqali mashina nomini ko'ring.",
    "expectedSql": "cat /etc/hostname",
    "hint": "`cat /etc/hostname` deb yozing.",
    "tags": [
      "CAT",
      "ETC",
      "HOSTNAME"
    ],
    "solutions": [
      "cat /etc/hostname"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 63,
    "title": "Linux Versiyasini Ko'rish (cat /etc/os-release)",
    "story": "Serverda qaysi Debian distributivi o'rnatilganini fayldan o'qing.",
    "taskUz": "`cat /etc/os-release` buyrug'ini bering.",
    "expectedSql": "cat /etc/os-release",
    "hint": "`cat /etc/os-release` deb yozing.",
    "tags": [
      "CAT",
      "OS RELEASE",
      "SYSTEM"
    ],
    "solutions": [
      "cat /etc/os-release"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 64,
    "title": "Foydalanuvchilar Ro'yxatini Ko'rish (cat /etc/passwd)",
    "story": "Tizim hisoblari ro'yxatini saqlovchi mashhur `/etc/passwd` faylini o'qing.",
    "taskUz": "`cat /etc/passwd` buyrug'ini bering.",
    "expectedSql": "cat /etc/passwd",
    "hint": "`cat /etc/passwd` deb yozing.",
    "tags": [
      "CAT",
      "PASSWD",
      "SECURITY"
    ],
    "solutions": [
      "cat /etc/passwd"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 65,
    "title": "Faylga Qayta Yozish (echo > system.log)",
    "story": "Eslatma: `>` operatori oqimni faylga yo'naltiradi va uni ustiga yozadi.",
    "taskUz": "`echo \"INFO: Server ishga tushdi\" > system.log` buyrug'ini bering.",
    "expectedSql": "echo \"INFO: Server ishga tushdi\" > system.log",
    "hint": "`echo \"INFO: Server ishga tushdi\" > system.log` deb yozing.",
    "tags": [
      "ECHO",
      "REDIRECT >",
      "TRUNCATE"
    ],
    "solutions": [
      "echo \"INFO: Server ishga tushdi\" > system.log",
      "echo 'INFO: Server ishga tushdi' > system.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 66,
    "title": "Fayl Oxiriga Qo'shish (echo >> system.log)",
    "story": "Eslatma: `>>` operatori mavjud matnni o'chirmasdan yangi qator qilib qo'shadi.",
    "taskUz": "`echo \"WARNING: Xotira sarfi oshdi\" >> system.log` buyrug'ini bering.",
    "expectedSql": "echo \"WARNING: Xotira sarfi oshdi\" >> system.log",
    "hint": "`echo \"WARNING: Xotira sarfi oshdi\" >> system.log` deb yozing.",
    "tags": [
      "ECHO",
      "REDIRECT >>",
      "APPEND"
    ],
    "solutions": [
      "echo \"WARNING: Xotira sarfi oshdi\" >> system.log",
      "echo 'WARNING: Xotira sarfi oshdi' >> system.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 67,
    "title": "Yana Bitta Xatolik Qatorini Qo'shish (>> system.log)",
    "story": "Audit uchun ERROR qatorini log fayl oxiriga qo'shing.",
    "taskUz": "`echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log` buyrug'ini bering.",
    "expectedSql": "echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log",
    "hint": "`echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log` deb yozing.",
    "tags": [
      "ECHO",
      "APPEND",
      "LOG"
    ],
    "solutions": [
      "echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log",
      "echo 'ERROR: Port 80 ulanishi rad etildi' >> system.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 68,
    "title": "system.log Faylini O'qish (cat system.log)",
    "story": "Yozilgan barcha yangi log yozuvlarini ekranga chiqarib tekshiring.",
    "taskUz": "`cat system.log` buyrug'ini bering.",
    "expectedSql": "cat system.log",
    "hint": "`cat system.log` deb yozing.",
    "tags": [
      "CAT",
      "LOG",
      "VIEW"
    ],
    "solutions": [
      "cat system.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 69,
    "title": "Qator Raqamlari Bilan Ko'rish (cat -n system.log)",
    "story": "Log qatorlarini qulay sanash uchun har bir qator oldiga raqam qo'ying.",
    "taskUz": "`cat -n system.log` buyrug'i orqali qator raqamlari bilan chiqaring.",
    "expectedSql": "cat -n system.log",
    "hint": "`cat -n system.log` deb yozing.",
    "tags": [
      "CAT -N",
      "LINE NUMBERS",
      "VIEW"
    ],
    "solutions": [
      "cat -n system.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 70,
    "title": "auth.log ga Muvaffaqiyatli Kirish Qatorini Yozish",
    "story": "Avtorizatsiya jurnali uchun yangi yozuv kiriting.",
    "taskUz": "`echo \"Accepted password for admin\" > auth.log` buyrug'ini bering.",
    "expectedSql": "echo \"Accepted password for admin\" > auth.log",
    "hint": "`echo \"Accepted password for admin\" > auth.log` deb yozing.",
    "tags": [
      "ECHO",
      "AUTH",
      "REDIRECT"
    ],
    "solutions": [
      "echo \"Accepted password for admin\" > auth.log",
      "echo 'Accepted password for admin' > auth.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 71,
    "title": "auth.log ga Muvaffaqiyatsiz Urinishni Qo'shish (>> auth.log)",
    "story": "Xavfsizlik tekshiruvi uchun noto'g'ri kirish urinishini qayd eting.",
    "taskUz": "`echo \"Failed password for root from 10.0.0.1\" >> auth.log` buyrug'ini bering.",
    "expectedSql": "echo \"Failed password for root from 10.0.0.1\" >> auth.log",
    "hint": "`echo \"Failed password for root from 10.0.0.1\" >> auth.log` deb yozing.",
    "tags": [
      "ECHO",
      "FAILED LOGIN",
      "APPEND"
    ],
    "solutions": [
      "echo \"Failed password for root from 10.0.0.1\" >> auth.log",
      "echo 'Failed password for root from 10.0.0.1' >> auth.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 72,
    "title": "Ikkita Faylni Birlashtirib Ko'rish (cat system.log auth.log)",
    "story": "`cat` (concatenate) buyrug'i bir vaqtda bir nechta faylni ketma-ket ulab chiqaradi.",
    "taskUz": "`cat system.log auth.log` buyrug'ini bering.",
    "expectedSql": "cat system.log auth.log",
    "hint": "`cat system.log auth.log` deb yozing.",
    "tags": [
      "CAT",
      "CONCATENATE",
      "MULTIPLE"
    ],
    "solutions": [
      "cat system.log auth.log"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 73,
    "title": "Katta Log Faylini Sahifama-sahifa Ko'rish (more /var/log/syslog)",
    "story": "Ekrandan toshib ketmasligi uchun matnni sahifalab ko'ruvchi `more` ni sinang.",
    "taskUz": "`more /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "more /var/log/syslog",
    "hint": "`more /var/log/syslog` deb yozing.",
    "tags": [
      "MORE",
      "PAGING",
      "VIEW"
    ],
    "solutions": [
      "more /var/log/syslog"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 74,
    "title": "Qulay Qidiruv Bilan Matn Ko'rish (less /var/log/syslog)",
    "story": "Kursor va `/qidiruv` imkoniyatiga ega professional `less` dasturini oching.",
    "taskUz": "`less /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "less /var/log/syslog",
    "hint": "`less /var/log/syslog` deb yozing.",
    "tags": [
      "LESS",
      "ADVANCED VIEW",
      "PAGING"
    ],
    "solutions": [
      "less /var/log/syslog"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 75,
    "title": "cat Buyrug'i Qo'llanmasini Ko'rish",
    "story": "`cat` buyrug'ining barcha maxsus belgilar va raqamlash parametrlarini o'rganing.",
    "taskUz": "`man cat` buyrug'ini bering.",
    "expectedSql": "man cat",
    "hint": "`man cat` deb yozing.",
    "tags": [
      "MAN",
      "CAT",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man cat"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Ekspert",
    "source": "S01 Task 5 • cat, redirection & less"
  },
  {
    "id": 76,
    "title": "Faylning Dastlabki 10 Qatorini Ko'rish (head)",
    "story": "`head` buyrug'i parametr berilmasa standart dastlabki 10 ta qatorni chiqaradi.",
    "taskUz": "`/var/log/syslog` faylining dastlabki 10 qatorini ekranga chiqaring.",
    "expectedSql": "head /var/log/syslog",
    "hint": "`head /var/log/syslog` deb yozing.",
    "tags": [
      "HEAD",
      "DEFAULT 10",
      "LOG"
    ],
    "solutions": [
      "head /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 77,
    "title": "Faqat Dastlabki 5 Qatorni Ko'rish (head -n 5)",
    "story": "Seminar 1 topshirig'i: log faylning faqat boshlang'ich 5 qatorini ajratib oling.",
    "taskUz": "`head -n 5 /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "head -n 5 /var/log/syslog",
    "hint": "`head -n 5 /var/log/syslog` deb yozing.",
    "tags": [
      "HEAD -N 5",
      "FIRST LINES",
      "FILTER"
    ],
    "solutions": [
      "head -n 5 /var/log/syslog",
      "head -5 /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 78,
    "title": "Dastlabki 3 Qatorni Ko'rish (head -n 3)",
    "story": "Tizim yuklanishidagi ilk 3 ta muhim voqeani ajrating.",
    "taskUz": "`head -n 3 /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "head -n 3 /var/log/syslog",
    "hint": "`head -n 3 /var/log/syslog` deb yozing.",
    "tags": [
      "HEAD -N 3",
      "LINES",
      "LOG"
    ],
    "solutions": [
      "head -n 3 /var/log/syslog",
      "head -3 /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 79,
    "title": "Faylning Oxirgi 10 Qatorini Ko'rish (tail)",
    "story": "`tail` parametri ko'rsatilmasa avtomatik eng oxirgi 10 ta qatorni chiqaradi.",
    "taskUz": "`/var/log/syslog` faylining eng oxirgi 10 ta qatorini chiqaring.",
    "expectedSql": "tail /var/log/syslog",
    "hint": "`tail /var/log/syslog` deb yozing.",
    "tags": [
      "TAIL",
      "LAST LINES",
      "LOG"
    ],
    "solutions": [
      "tail /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 80,
    "title": "Faqat Oxirgi 5 Qatorni Ko'rish (tail -n 5)",
    "story": "Seminar 1 topshirig'i: Serverdagi eng oxirgi 5 ta voqea yozuvini ko'ring.",
    "taskUz": "`tail -n 5 /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "tail -n 5 /var/log/syslog",
    "hint": "`tail -n 5 /var/log/syslog` deb yozing.",
    "tags": [
      "TAIL -N 5",
      "LAST 5",
      "FILTER"
    ],
    "solutions": [
      "tail -n 5 /var/log/syslog",
      "tail -5 /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 81,
    "title": "Faqat Oxirgi 2 Qatorni Ko'rish (tail -n 2)",
    "story": "Eng oxirgi ikkita faollikni nazorat qiling.",
    "taskUz": "`tail -n 2 /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "tail -n 2 /var/log/syslog",
    "hint": "`tail -n 2 /var/log/syslog` deb yozing.",
    "tags": [
      "TAIL -N 2",
      "RECENT",
      "LOG"
    ],
    "solutions": [
      "tail -n 2 /var/log/syslog",
      "tail -2 /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 82,
    "title": "auth.log Faylining Oxirgi 3 Qatorini Ko'rish",
    "story": "Avtorizatsiya jurnali bo'yicha so'nggi 3 ta urinishni tekshiring.",
    "taskUz": "`tail -n 3 /var/log/auth.log` buyrug'ini bering.",
    "expectedSql": "tail -n 3 /var/log/auth.log",
    "hint": "`tail -n 3 /var/log/auth.log` deb yozing.",
    "tags": [
      "TAIL -N 3",
      "AUTH LOG",
      "SECURITY"
    ],
    "solutions": [
      "tail -n 3 /var/log/auth.log",
      "tail -3 /var/log/auth.log"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 83,
    "title": "Oxirgi Qatorlarni Jonli Kuzatish Rejimi (tail -f)",
    "story": "SysAdminlar real vaqtda yangi tushayotgan loglarni `tail -f` (follow) orqali kuzatadi.",
    "taskUz": "`/var/log/syslog` faylini follow rejimida kuzatuvchi `tail -f` buyrug'ini bering.",
    "expectedSql": "tail -f /var/log/syslog",
    "hint": "`tail -f /var/log/syslog` deb yozing.",
    "tags": [
      "TAIL -F",
      "FOLLOW",
      "MONITORING"
    ],
    "solutions": [
      "tail -f /var/log/syslog",
      "tail -F /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 84,
    "title": "Boshlang'ich 1 Qatorni Chiqarish (head -n 1)",
    "story": "Log faylning eng birinchi ochilish qatorini ajrating.",
    "taskUz": "`head -n 1 /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "head -n 1 /var/log/syslog",
    "hint": "`head -n 1 /var/log/syslog` deb yozing.",
    "tags": [
      "HEAD -N 1",
      "FIRST LINE",
      "LOG"
    ],
    "solutions": [
      "head -n 1 /var/log/syslog",
      "head -1 /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 85,
    "title": "Eng Oxirgi 1 Qatorni Chiqarish (tail -n 1)",
    "story": "Jurnaldagi eng so'nggi yozilgan yagona qatorni oling.",
    "taskUz": "`tail -n 1 /var/log/syslog` buyrug'ini bering.",
    "expectedSql": "tail -n 1 /var/log/syslog",
    "hint": "`tail -n 1 /var/log/syslog` deb yozing.",
    "tags": [
      "TAIL -N 1",
      "LAST LINE",
      "LOG"
    ],
    "solutions": [
      "tail -n 1 /var/log/syslog",
      "tail -1 /var/log/syslog"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 86,
    "title": "Dastlabki 5 Qatorni Yangi Faylga Saqlash",
    "story": "Log boshidagi 5 qatorni `head.txt` ga yo'naltiring.",
    "taskUz": "`head -n 5 /var/log/syslog > head.txt` buyrug'ini bering.",
    "expectedSql": "head -n 5 /var/log/syslog > head.txt",
    "hint": "`head -n 5 /var/log/syslog > head.txt` deb yozing.",
    "tags": [
      "HEAD",
      "REDIRECT >",
      "EXTRACT"
    ],
    "solutions": [
      "head -n 5 /var/log/syslog > head.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 87,
    "title": "Oxirgi 5 Qatorni Yangi Faylga Saqlash",
    "story": "Log oxiridagi 5 qatorni `tail.txt` ga yo'naltiring.",
    "taskUz": "`tail -n 5 /var/log/syslog > tail.txt` buyrug'ini bering.",
    "expectedSql": "tail -n 5 /var/log/syslog > tail.txt",
    "hint": "`tail -n 5 /var/log/syslog > tail.txt` deb yozing.",
    "tags": [
      "TAIL",
      "REDIRECT >",
      "EXTRACT"
    ],
    "solutions": [
      "tail -n 5 /var/log/syslog > tail.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 88,
    "title": "Ajratilgan Bosh Qatorlarni Tekshirish",
    "story": "Saqlangan `head.txt` faylini o'qing.",
    "taskUz": "`cat head.txt` buyrug'ini bering.",
    "expectedSql": "cat head.txt",
    "hint": "`cat head.txt` deb yozing.",
    "tags": [
      "CAT",
      "HEAD.TXT",
      "VERIFY"
    ],
    "solutions": [
      "cat head.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 89,
    "title": "Ajratilgan Oxirgi Qatorlarni Tekshirish",
    "story": "Saqlangan `tail.txt` faylini o'qing.",
    "taskUz": "`cat tail.txt` buyrug'ini bering.",
    "expectedSql": "cat tail.txt",
    "hint": "`cat tail.txt` deb yozing.",
    "tags": [
      "CAT",
      "TAIL.TXT",
      "VERIFY"
    ],
    "solutions": [
      "cat tail.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 90,
    "title": "head va tail Qo'llanmasini Ko'rish",
    "story": "`head` buyrug'ining to'liq qo'llanmasini oching.",
    "taskUz": "`man head` buyrug'ini bering.",
    "expectedSql": "man head",
    "hint": "`man head` deb yozing.",
    "tags": [
      "MAN",
      "HEAD",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man head"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "source": "S01 Task 6 • head & tail"
  },
  {
    "id": 91,
    "title": "Fayl Qatorlari Sonini Sanash (wc -l)",
    "story": "Seminar 1: `/var/log/syslog` faylida jami nechta qator borligini aniqlang.",
    "taskUz": "`wc -l /var/log/syslog` buyrug'i orqali qatorlar sonini chiqaring.",
    "expectedSql": "wc -l /var/log/syslog",
    "hint": "`wc -l /var/log/syslog` deb yozing.",
    "tags": [
      "WC -L",
      "LINE COUNT",
      "METRICS"
    ],
    "solutions": [
      "wc -l /var/log/syslog"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 92,
    "title": "Fayl So'zlar Sonini Sanash (wc -w)",
    "story": "Jurnaldagi jami bo'shliqlar bilan ajratilgan so'zlar miqdorini sanang.",
    "taskUz": "`wc -w /var/log/syslog` buyrug'i orqali so'zlar sonini chiqaring.",
    "expectedSql": "wc -w /var/log/syslog",
    "hint": "`wc -w /var/log/syslog` deb yozing.",
    "tags": [
      "WC -W",
      "WORD COUNT",
      "METRICS"
    ],
    "solutions": [
      "wc -w /var/log/syslog"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 93,
    "title": "Fayl Baytlar (Hajmi) Sonini Sanash (wc -c)",
    "story": "Fayl diskda necha bayt hajmga ega ekanini `wc -c` orqali o'lchang.",
    "taskUz": "`wc -c /var/log/syslog` buyrug'i orqali baytlar sonini chiqaring.",
    "expectedSql": "wc -c /var/log/syslog",
    "hint": "`wc -c /var/log/syslog` deb yozing.",
    "tags": [
      "WC -C",
      "BYTE COUNT",
      "SIZE"
    ],
    "solutions": [
      "wc -c /var/log/syslog"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 94,
    "title": "To'liq Statistika (wc filename)",
    "story": "Parametrsiz `wc` qatorlar, so'zlar va baytlar sonini bir vaqtda chiqaradi.",
    "taskUz": "`/var/log/syslog` fayliga nisbatan parametrsiz `wc` buyrug'ini bering.",
    "expectedSql": "wc /var/log/syslog",
    "hint": "`wc /var/log/syslog` deb yozing.",
    "tags": [
      "WC",
      "SUMMARY",
      "METRICS"
    ],
    "solutions": [
      "wc /var/log/syslog"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 95,
    "title": "auth.log Qatorlari Sonini Sanash",
    "story": "Avtorizatsiya jurnali necha qatordan iboratligini hisoblang.",
    "taskUz": "`wc -l /var/log/auth.log` buyrug'ini bering.",
    "expectedSql": "wc -l /var/log/auth.log",
    "hint": "`wc -l /var/log/auth.log` deb yozing.",
    "tags": [
      "WC -L",
      "AUTH",
      "LINES"
    ],
    "solutions": [
      "wc -l /var/log/auth.log"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 96,
    "title": "dpkg.log Qatorlari Sonini Sanash",
    "story": "O'rnatilgan paketlar tarixi nechta hodisani o'z ichiga olganini sanang.",
    "taskUz": "`wc -l /var/log/dpkg.log` buyrug'ini bering.",
    "expectedSql": "wc -l /var/log/dpkg.log",
    "hint": "`wc -l /var/log/dpkg.log` deb yozing.",
    "tags": [
      "WC -L",
      "DPKG",
      "LINES"
    ],
    "solutions": [
      "wc -l /var/log/dpkg.log"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 97,
    "title": "head.txt Qatorlari Sonini Sanash",
    "story": "Avval ajratib olingan `head.txt` faylida aynan 5 ta qator borligini tasdiqlang.",
    "taskUz": "`wc -l head.txt` buyrug'ini bering.",
    "expectedSql": "wc -l head.txt",
    "hint": "`wc -l head.txt` deb yozing.",
    "tags": [
      "WC -L",
      "HEAD.TXT",
      "VERIFY"
    ],
    "solutions": [
      "wc -l head.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 98,
    "title": "tail.txt Qatorlari Sonini Sanash",
    "story": "`tail.txt` faylida ham 5 ta qator borligini tekshiring.",
    "taskUz": "`wc -l tail.txt` buyrug'ini bering.",
    "expectedSql": "wc -l tail.txt",
    "hint": "`wc -l tail.txt` deb yozing.",
    "tags": [
      "WC -L",
      "TAIL.TXT",
      "VERIFY"
    ],
    "solutions": [
      "wc -l tail.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 99,
    "title": "Bir Nechta Faylni Birgalikda Sanash",
    "story": "`wc` bir nechta faylni kiritganda, har biri va yakuniy `total` ni chiqaradi.",
    "taskUz": "`wc -l head.txt tail.txt` buyrug'ini bering.",
    "expectedSql": "wc -l head.txt tail.txt",
    "hint": "`wc -l head.txt tail.txt` deb yozing.",
    "tags": [
      "WC -L",
      "MULTIPLE",
      "TOTAL"
    ],
    "solutions": [
      "wc -l head.txt tail.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 100,
    "title": "readme.txt So'zlari Sonini Sanash",
    "story": "Uy papkasidagi yo'riqnomada nechta so'z borligini sanang.",
    "taskUz": "`wc -w ~/readme.txt` buyrug'ini bering.",
    "expectedSql": "wc -w ~/readme.txt",
    "hint": "`wc -w ~/readme.txt` yoki `wc -w /home/student/readme.txt` deb yozing.",
    "tags": [
      "WC -W",
      "WORDS",
      "README"
    ],
    "solutions": [
      "wc -w ~/readme.txt",
      "wc -w /home/student/readme.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  }
];
