// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — QUESTIONS_101_150.JS
// ============================================================================

window.QUESTIONS_101_150 = [
  {
    "id": 101,
    "title": "Parollar Fayli Qatorlarini Sanash",
    "story": "Tizimda ro'yxatdan o'tgan foydalanuvchilar qatorlari sonini oling.",
    "taskUz": "`wc -l /etc/passwd` buyrug'ini bering.",
    "expectedSql": "wc -l /etc/passwd",
    "hint": "`wc -l /etc/passwd` deb yozing.",
    "tags": [
      "WC -L",
      "PASSWD",
      "USERS"
    ],
    "solutions": [
      "wc -l /etc/passwd"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 102,
    "title": "Fayldagi Jami Belgilar Sonini Sanash",
    "story": "Harflar va belgilarni hisoblash uchun `-m` bayrog'ini bering.",
    "taskUz": "`wc -m head.txt` buyrug'ini bering.",
    "expectedSql": "wc -m head.txt",
    "hint": "`wc -m head.txt` deb yozing.",
    "tags": [
      "WC -M",
      "CHARS",
      "METRICS"
    ],
    "solutions": [
      "wc -m head.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 103,
    "title": "Sanash Natijasini Faylga Saqlash",
    "story": "Hisoblangan statistika sonini `stats.txt` ga yo'naltiring.",
    "taskUz": "`wc -l /var/log/syslog > stats.txt` buyrug'ini bering.",
    "expectedSql": "wc -l /var/log/syslog > stats.txt",
    "hint": "`wc -l /var/log/syslog > stats.txt` deb yozing.",
    "tags": [
      "WC",
      "REDIRECT >",
      "STATS"
    ],
    "solutions": [
      "wc -l /var/log/syslog > stats.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 104,
    "title": "Saqlangan stats.txt Faylini O'qish",
    "story": "Statistika yozilgan faylni `cat` bilan ko'ring.",
    "taskUz": "`cat stats.txt` buyrug'ini bering.",
    "expectedSql": "cat stats.txt",
    "hint": "`cat stats.txt` deb yozing.",
    "tags": [
      "CAT",
      "STATS.TXT",
      "VERIFY"
    ],
    "solutions": [
      "cat stats.txt"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 105,
    "title": "wc Buyrug'i Qo'llanmasini Ko'rish",
    "story": "`wc` buyrug'ining barcha bayroqlari haqida man sahifasini oching.",
    "taskUz": "`man wc` buyrug'ini bering.",
    "expectedSql": "man wc",
    "hint": "`man wc` deb yozing.",
    "tags": [
      "MAN",
      "WC",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man wc"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Ilg'or",
    "source": "S01 Task 7 • wc (Word Count)"
  },
  {
    "id": 106,
    "title": "Faylni Arxiv Papkasiga Nusxalash",
    "story": "Seminar 1: `system.log` faylini `s01/archive` papkasiga ko'chiring.",
    "taskUz": "`cp system.log ../archive/` buyrug'i orqali nusxa oling.",
    "expectedSql": "cp system.log ../archive/",
    "hint": "`cp system.log ../archive/` deb yozing.",
    "tags": [
      "CP",
      "COPY",
      "FILE MANAGEMENT"
    ],
    "solutions": [
      "cp system.log ../archive/",
      "cp system.log ../archive"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 107,
    "title": "Arxivdagi Fayl Nomini Zaxiraga O'zgartirish",
    "story": "Seminar 1: Arxivdagi nusxani `system.log.bak` deb qayta nomlang.",
    "taskUz": "`mv ../archive/system.log ../archive/system.log.bak` buyrug'ini bering.",
    "expectedSql": "mv ../archive/system.log ../archive/system.log.bak",
    "hint": "`mv ../archive/system.log ../archive/system.log.bak` deb yozing.",
    "tags": [
      "MV",
      "RENAME",
      "FILE MANAGEMENT"
    ],
    "solutions": [
      "mv ../archive/system.log ../archive/system.log.bak"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 108,
    "title": "Barcha Jurnal Fayllarini Bitta Buyruqda Nusxalash",
    "story": "Seminar 1: Barcha `.log` bilan tugovchi fayllarni arxivga nusxalang.",
    "taskUz": "`cp *.log ../archive/` buyrug'ini bering.",
    "expectedSql": "cp *.log ../archive/",
    "hint": "`cp *.log ../archive/` deb yozing.",
    "tags": [
      "CP",
      "WILDCARD *",
      "BULK COPY"
    ],
    "solutions": [
      "cp *.log ../archive/",
      "cp *.log ../archive"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 109,
    "title": "Xatoliklar Jurnali Faylini O'chirish",
    "story": "Seminar 1: Keraksiz bo'lgan `error.log` faylini xavfsiz o'chiring.",
    "taskUz": "`rm error.log` buyrug'ini bering.",
    "expectedSql": "rm error.log",
    "hint": "`rm error.log` deb yozing.",
    "tags": [
      "RM",
      "DELETE",
      "FILE"
    ],
    "solutions": [
      "rm error.log",
      "rm -i error.log",
      "rm -f error.log"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 110,
    "title": "Fayllar O'chirilganligini Tekshirish",
    "story": "`error.log` haqiqatda yo'qolganini tasdiqlash uchun ro'yxatni ko'ring.",
    "taskUz": "`ls` buyrug'ini bering.",
    "expectedSql": "ls",
    "hint": "`ls` deb yozing.",
    "tags": [
      "LS",
      "VERIFY",
      "CLEANUP"
    ],
    "solutions": [
      "ls"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 111,
    "title": "Arxiv Papkasi Tarkibini Ro'yxatlab Ko'rish",
    "story": "Arxiv papkasida barcha nusxalangan fayllar borligini tekshiring.",
    "taskUz": "`ls ../archive` buyrug'ini bering.",
    "expectedSql": "ls ../archive",
    "hint": "`ls ../archive` deb yozing.",
    "tags": [
      "LS",
      "ARCHIVE",
      "VERIFY"
    ],
    "solutions": [
      "ls ../archive",
      "ls ../archive/"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 112,
    "title": "Faylni Yangi Nom Bilan Joyida Nusxalash",
    "story": "`system.log` dan `system.copy` nomli zaxira oling.",
    "taskUz": "`cp system.log system.copy` buyrug'ini bering.",
    "expectedSql": "cp system.log system.copy",
    "hint": "`cp system.log system.copy` deb yozing.",
    "tags": [
      "CP",
      "DUPLICATE",
      "BACKUP"
    ],
    "solutions": [
      "cp system.log system.copy"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 113,
    "title": "Fayl Nomini Yangi Nomga O'zgartirish",
    "story": "`system.copy` faylini `system.renamed` deb o'zgartiring.",
    "taskUz": "`mv system.copy system.renamed` buyrug'ini bering.",
    "expectedSql": "mv system.copy system.renamed",
    "hint": "`mv system.copy system.renamed` deb yozing.",
    "tags": [
      "MV",
      "RENAME",
      "FILE"
    ],
    "solutions": [
      "mv system.copy system.renamed"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 114,
    "title": "Faylni reports Papkasiga Ko'chirish",
    "story": "`system.renamed` faylini `../reports/` katalogiga ko'chiring.",
    "taskUz": "`mv system.renamed ../reports/` buyrug'ini bering.",
    "expectedSql": "mv system.renamed ../reports/",
    "hint": "`mv system.renamed ../reports/` deb yozing.",
    "tags": [
      "MV",
      "MOVE",
      "REPORTS"
    ],
    "solutions": [
      "mv system.renamed ../reports/",
      "mv system.renamed ../reports"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 115,
    "title": "reports Papkasidagi Faylni Ko'rish",
    "story": "`../reports` katalogida ko'chirilgan faylni tekshiring.",
    "taskUz": "`ls ../reports` buyrug'ini bering.",
    "expectedSql": "ls ../reports",
    "hint": "`ls ../reports` deb yozing.",
    "tags": [
      "LS",
      "REPORTS",
      "VERIFY"
    ],
    "solutions": [
      "ls ../reports"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 116,
    "title": "Katalogni Barcha Tarkibi Bilan Rekursiv Nusxalash",
    "story": "Eslatma: papkalarni nusxalashda rekursiv `-r` bayrog'i shartdir.",
    "taskUz": "`cp -r ../reports ../reports_backup` buyrug'ini bering.",
    "expectedSql": "cp -r ../reports ../reports_backup",
    "hint": "`cp -r ../reports ../reports_backup` deb yozing.",
    "tags": [
      "CP -R",
      "RECURSIVE",
      "DIRECTORY"
    ],
    "solutions": [
      "cp -r ../reports ../reports_backup"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 117,
    "title": "Nusxalangan Papkani Butunlay Rekursiv O'chirish",
    "story": "Ortiqcha zaxira papkani `rm -r` bilan o'chirib tashlang.",
    "taskUz": "`rm -r ../reports_backup` buyrug'ini bering.",
    "expectedSql": "rm -r ../reports_backup",
    "hint": "`rm -r ../reports_backup` deb yozing.",
    "tags": [
      "RM -R",
      "RECURSIVE DELETE",
      "CLEANUP"
    ],
    "solutions": [
      "rm -r ../reports_backup",
      "rm -rf ../reports_backup"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 118,
    "title": "head.txt va tail.txt Fayllarini O'chirish",
    "story": "Vaqtinchalik matn bo'laklarini tozalang.",
    "taskUz": "`rm head.txt tail.txt` buyrug'ini bering.",
    "expectedSql": "rm head.txt tail.txt",
    "hint": "`rm head.txt tail.txt` deb yozing.",
    "tags": [
      "RM",
      "MULTIPLE",
      "CLEANUP"
    ],
    "solutions": [
      "rm head.txt tail.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 119,
    "title": "stats.txt Faylini O'chirish",
    "story": "Oraliq statistika faylini ham olib tashlang.",
    "taskUz": "`rm stats.txt` buyrug'ini bering.",
    "expectedSql": "rm stats.txt",
    "hint": "`rm stats.txt` deb yozing.",
    "tags": [
      "RM",
      "STATS",
      "CLEANUP"
    ],
    "solutions": [
      "rm stats.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 120,
    "title": "cp Buyrug'i Qo'llanmasini Ko'rish",
    "story": "`cp` buyrug'ining barcha xavfsizlik va zaxiralash bayroqlarini man da o'rganing.",
    "taskUz": "`man cp` buyrug'ini bering.",
    "expectedSql": "man cp",
    "hint": "`man cp` deb yozing.",
    "tags": [
      "MAN",
      "CP",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man cp"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Ekspert",
    "source": "S01 Task 8 • cp, mv & rm"
  },
  {
    "id": 121,
    "title": "Faylga Qattiq Havola (Hard Link) Yaratish",
    "story": "Seminar 1: `system.log` fayliga aynan bir xil Inodeni bo'lishuvchi Hard Link yarating.",
    "taskUz": "`ln system.log system_hardlink.log` buyrug'i orqali qattiq havola yarating.",
    "expectedSql": "ln system.log system_hardlink.log",
    "hint": "`ln system.log system_hardlink.log` deb yozing.",
    "tags": [
      "LN",
      "HARD LINK",
      "INODE"
    ],
    "solutions": [
      "ln system.log system_hardlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 122,
    "title": "Faylga Ramziy Havola (Soft Symlink) Yaratish",
    "story": "Seminar 1: `system.log` fayliga yo'naltiruvchi ramziy Soft Link (symlink) yarating.",
    "taskUz": "`ln -s system.log system_softlink.log` buyrug'ini bering.",
    "expectedSql": "ln -s system.log system_softlink.log",
    "hint": "`ln -s system.log system_softlink.log` deb yozing.",
    "tags": [
      "LN -S",
      "SYMLINK",
      "POINTER"
    ],
    "solutions": [
      "ln -s system.log system_softlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 123,
    "title": "Havolalar va Inodelarni Uzun Formatda Ko'rish",
    "story": "Hard link soni 2 ga oshganini va Soft link `->` strelka bilan ko'rsatilganini kuzating.",
    "taskUz": "`ls -l` buyrug'i orqali havolalar holatini chiqaring.",
    "expectedSql": "ls -l",
    "hint": "`ls -l` deb yozing.",
    "tags": [
      "LS -L",
      "LINK COUNT",
      "SYMLINK ARROW"
    ],
    "solutions": [
      "ls -l"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 124,
    "title": "Original Fayl Inode Raqamini Aniqlash",
    "story": "Original faylning Inode raqami va link count (2 ta) ekanini tasdiqlang.",
    "taskUz": "`stat system.log` buyrug'ini bering.",
    "expectedSql": "stat system.log",
    "hint": "`stat system.log` deb yozing.",
    "tags": [
      "STAT",
      "INODE",
      "HARD LINK"
    ],
    "solutions": [
      "stat system.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 125,
    "title": "Qattiq Havola Inode Raqamini Tekshirish",
    "story": "Hard link original bilan 100% bir xil Inode raqamiga egaligini o'z ko'zingiz bilan ko'ring.",
    "taskUz": "`stat system_hardlink.log` buyrug'ini bering.",
    "expectedSql": "stat system_hardlink.log",
    "hint": "`stat system_hardlink.log` deb yozing.",
    "tags": [
      "STAT",
      "SAME INODE",
      "PROOF"
    ],
    "solutions": [
      "stat system_hardlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 126,
    "title": "Ramziy Havola Inode Raqamini Tekshirish",
    "story": "Soft link alohida yangi Inode raqamiga egaligini tekshiring.",
    "taskUz": "`stat system_softlink.log` buyrug'ini bering.",
    "expectedSql": "stat system_softlink.log",
    "hint": "`stat system_softlink.log` deb yozing.",
    "tags": [
      "STAT",
      "DIFF INODE",
      "SYMLINK"
    ],
    "solutions": [
      "stat system_softlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 127,
    "title": "Hard Link Orqali Matn O'qish",
    "story": "Hard link orqali original fayl matnini o'qib ko'ring.",
    "taskUz": "`cat system_hardlink.log` buyrug'ini bering.",
    "expectedSql": "cat system_hardlink.log",
    "hint": "`cat system_hardlink.log` deb yozing.",
    "tags": [
      "CAT",
      "HARD LINK",
      "READ"
    ],
    "solutions": [
      "cat system_hardlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 128,
    "title": "Soft Link Orqali Matn O'qish",
    "story": "Soft link orqali ham original matn o'qilishini tasdiqlang.",
    "taskUz": "`cat system_softlink.log` buyrug'ini bering.",
    "expectedSql": "cat system_softlink.log",
    "hint": "`cat system_softlink.log` deb yozing.",
    "tags": [
      "CAT",
      "SOFT LINK",
      "READ"
    ],
    "solutions": [
      "cat system_softlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 129,
    "title": "Original Boshlang'ich Faylni O'chirish",
    "story": "Seminar 1 muhim tajribasi: Original `system.log` faylini ataylab o'chirib tashlang!",
    "taskUz": "`rm system.log` buyrug'ini bering.",
    "expectedSql": "rm system.log",
    "hint": "`rm system.log` deb yozing.",
    "tags": [
      "RM",
      "DELETE ORIGINAL",
      "EXPERIMENT"
    ],
    "solutions": [
      "rm system.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 130,
    "title": "Original O'chgach Qattiq Havola Orqali Faylni O'qish",
    "story": "Hayratlanarli natija: Hard link original o'chsa ham ma'lumotlarni to'liq saqlab qoladi!",
    "taskUz": "`cat system_hardlink.log` buyrug'ini bering.",
    "expectedSql": "cat system_hardlink.log",
    "hint": "`cat system_hardlink.log` deb yozing.",
    "tags": [
      "CAT",
      "HARD LINK SURVIVES",
      "INODE"
    ],
    "solutions": [
      "cat system_hardlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 131,
    "title": "Qattiq Havolaning Qolgan Bog'lanishlar Sonini Tekshirish",
    "story": "`stat` orqali ko'ring: link count 2 dan 1 ga tushdi, xotira bloki tirik.",
    "taskUz": "`stat system_hardlink.log` buyrug'ini bering.",
    "expectedSql": "stat system_hardlink.log",
    "hint": "`stat system_hardlink.log` deb yozing.",
    "tags": [
      "STAT",
      "LINK DECREMENT",
      "INODE"
    ],
    "solutions": [
      "stat system_hardlink.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 132,
    "title": "Tashqi Papkaga Soft Link Yaratish",
    "story": "`/var/log/syslog` fayliga `syslog_link` nomli symlink bog'lang.",
    "taskUz": "`ln -s /var/log/syslog syslog_link` buyrug'ini bering.",
    "expectedSql": "ln -s /var/log/syslog syslog_link",
    "hint": "`ln -s /var/log/syslog syslog_link` deb yozing.",
    "tags": [
      "LN -S",
      "SYSTEM LOG",
      "SYMLINK"
    ],
    "solutions": [
      "ln -s /var/log/syslog syslog_link"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 133,
    "title": "syslog_link Symlinkini Tekshirish",
    "story": "Yangi bog'langan symlink orqali tizim logini o'qing.",
    "taskUz": "`cat syslog_link` buyrug'ini bering.",
    "expectedSql": "cat syslog_link",
    "hint": "`cat syslog_link` deb yozing.",
    "tags": [
      "CAT",
      "SYMLINK",
      "TEST"
    ],
    "solutions": [
      "cat syslog_link"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 134,
    "title": "Ortiqcha Symlinkni O'chirish",
    "story": "`syslog_link` ramziy havolasini o'chiring.",
    "taskUz": "`rm syslog_link` buyrug'ini bering.",
    "expectedSql": "rm syslog_link",
    "hint": "`rm syslog_link` deb yozing.",
    "tags": [
      "RM",
      "SYMLINK DELETE",
      "CLEANUP"
    ],
    "solutions": [
      "rm syslog_link"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 135,
    "title": "ln Buyrug'i Qo'llanmasini Ko'rish",
    "story": "`ln` buyrug'ining barcha Inode va nisbiy yo'l qoidalarini man dan o'rganing.",
    "taskUz": "`man ln` buyrug'ini bering.",
    "expectedSql": "man ln",
    "hint": "`man ln` deb yozing.",
    "tags": [
      "MAN",
      "LN",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man ln"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Master",
    "source": "S01 Task 9 • ln & Inodes"
  },
  {
    "id": 136,
    "title": "Joriy Papkadagi Barcha .txt Fayllarni Qidirish",
    "story": "Seminar 1: Joriy katalog va uning ichidagi barcha `.txt` kengaytmali fayllarni qidiring.",
    "taskUz": "`find . -name \"*.txt\"` buyrug'i orqali qidiring.",
    "expectedSql": "find . -name \"*.txt\"",
    "hint": "`find . -name \"*.txt\"` deb yozing.",
    "tags": [
      "FIND",
      "-NAME",
      "SEARCH"
    ],
    "solutions": [
      "find . -name \"*.txt\"",
      "find . -name '*.txt'",
      "find -name \"*.txt\""
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 137,
    "title": "Faqat Oddiy Fayl Turiga Ega Bo'lganlarni Qidirish",
    "story": "Kataloglarni emas, faqat oddiy fayllarni (`-type f`) ajrating.",
    "taskUz": "`find . -type f -name \"*.txt\"` buyrug'ini bering.",
    "expectedSql": "find . -type f -name \"*.txt\"",
    "hint": "`find . -type f -name \"*.txt\"` deb yozing.",
    "tags": [
      "FIND -TYPE F",
      "FILE ONLY",
      "FILTER"
    ],
    "solutions": [
      "find . -type f -name \"*.txt\"",
      "find . -type f -name '*.txt'"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 138,
    "title": "7 Kundan Oldin O'zgartirilgan Eski Fayllarni Qidirish",
    "story": "Seminar 1: 7 kundan avval o'zgartirilgan (`-mtime +7`) eski fayllarni toping.",
    "taskUz": "`find . -type f -mtime +7` buyrug'ini bering.",
    "expectedSql": "find . -type f -mtime +7",
    "hint": "`find . -type f -mtime +7` deb yozing.",
    "tags": [
      "FIND -MTIME +7",
      "OLD FILES",
      "SEARCH"
    ],
    "solutions": [
      "find . -type f -mtime +7",
      "find . -mtime +7"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 139,
    "title": "7 Kundan Eski .txt Fayllarni Ko'rish",
    "story": "Ham 7 kundan eski, ham `.txt` bo'lgan fayllarni aniqlang (`old1.txt`, `old2.txt`).",
    "taskUz": "`find . -name \"*.txt\" -mtime +7` buyrug'ini bering.",
    "expectedSql": "find . -name \"*.txt\" -mtime +7",
    "hint": "`find . -name \"*.txt\" -mtime +7` deb yozing.",
    "tags": [
      "FIND",
      "COMBINED",
      "SEARCH"
    ],
    "solutions": [
      "find . -name \"*.txt\" -mtime +7",
      "find . -name '*.txt' -mtime +7"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 140,
    "title": "Topilgan Fayllarning Batafsil Formatdagi Ro'yxatini Ko'rish",
    "story": "Topilgan fayllarni `ls -l` kabi to'liq huquqlari va Inodelari bilan chiqaring.",
    "taskUz": "`find . -name \"*.txt\" -ls` buyrug'ini bering.",
    "expectedSql": "find . -name \"*.txt\" -ls",
    "hint": "`find . -name \"*.txt\" -ls` deb yozing.",
    "tags": [
      "FIND -LS",
      "DETAILED LIST",
      "AUDIT"
    ],
    "solutions": [
      "find . -name \"*.txt\" -ls",
      "find . -name '*.txt' -ls"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 141,
    "title": "/var/log Ichidagi Barcha .log Fayllarni Topish",
    "story": "Tizim loglar omboridagi barcha `.log` fayllarni toping.",
    "taskUz": "`find /var/log -name \"*.log\"` buyrug'ini bering.",
    "expectedSql": "find /var/log -name \"*.log\"",
    "hint": "`find /var/log -name \"*.log\"` deb yozing.",
    "tags": [
      "FIND",
      "VAR_LOG",
      "SEARCH"
    ],
    "solutions": [
      "find /var/log -name \"*.log\"",
      "find /var/log -name '*.log'"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 142,
    "title": "Tizimda Faqat Kataloglar Turini Qidirish",
    "story": "Fayllarni emas, faqat kataloglarni topish uchun `-type d` bayrog'ini bering.",
    "taskUz": "`find /etc -type d` buyrug'ini bering.",
    "expectedSql": "find /etc -type d",
    "hint": "`find /etc -type d` deb yozing.",
    "tags": [
      "FIND -TYPE D",
      "DIRECTORIES",
      "SEARCH"
    ],
    "solutions": [
      "find /etc -type d"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 143,
    "title": "Topilgan Eski Fayllarni Avtomatik O'chirish",
    "story": "Seminar 1: 7 kundan eski `.txt` fayllarni `-delete` orqali xavfsiz tozalang.",
    "taskUz": "`find . -name \"*.txt\" -mtime +7 -delete` buyrug'ini bering.",
    "expectedSql": "find . -name \"*.txt\" -mtime +7 -delete",
    "hint": "`find . -name \"*.txt\" -mtime +7 -delete` deb yozing.",
    "tags": [
      "FIND -DELETE",
      "CLEANUP",
      "AUTOMATION"
    ],
    "solutions": [
      "find . -name \"*.txt\" -mtime +7 -delete",
      "find . -name '*.txt' -mtime +7 -delete"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 144,
    "title": "Tozalashdan So'ng Qolgan .txt Fayllarni Sanash",
    "story": "Seminar 1: O'chirishdan so'ng nechta `.txt` qolganini `find | wc -l` bilan sanang.",
    "taskUz": "`find . -name \"*.txt\" | wc -l` buyrug'ini bering.",
    "expectedSql": "find . -name \"*.txt\" | wc -l",
    "hint": "`find . -name \"*.txt\" | wc -l` deb yozing.",
    "tags": [
      "FIND | WC",
      "PIPE",
      "COUNT"
    ],
    "solutions": [
      "find . -name \"*.txt\" | wc -l",
      "find . -name '*.txt' | wc -l"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 145,
    "title": "Qolgan Yagona .txt Faylni Ko'rish",
    "story": "Faqat yangi `recent.txt` omon qolganini tasdiqlang.",
    "taskUz": "`find . -name \"*.txt\"` buyrug'ini bering.",
    "expectedSql": "find . -name \"*.txt\"",
    "hint": "`find . -name \"*.txt\"` deb yozing.",
    "tags": [
      "FIND",
      "VERIFY",
      "CLEANUP"
    ],
    "solutions": [
      "find . -name \"*.txt\"",
      "find . -name '*.txt'"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 146,
    "title": "Harf Registriga Sezgir Bo'lmagan Qidiruvni Bajarish",
    "story": "Case-insensitive qidiruv uchun `-iname` bayrog'ini sinang.",
    "taskUz": "`find . -iname \"*.LOG\"` buyrug'ini bering.",
    "expectedSql": "find . -iname \"*.LOG\"",
    "hint": "`find . -iname \"*.LOG\"` deb yozing.",
    "tags": [
      "FIND -INAME",
      "INSENSITIVE",
      "SEARCH"
    ],
    "solutions": [
      "find . -iname \"*.LOG\"",
      "find . -iname '*.LOG'"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 147,
    "title": "So'nggi 7 Kun Ichida O'zgargan Yangi Fayllarni Topish",
    "story": "Minus `-7` belgisi oxirgi 7 kunda o'zgartirilgan yangi fayllarni topadi.",
    "taskUz": "`find . -type f -mtime -7` buyrug'ini bering.",
    "expectedSql": "find . -type f -mtime -7",
    "hint": "`find . -type f -mtime -7` deb yozing.",
    "tags": [
      "FIND -MTIME -7",
      "RECENT",
      "SEARCH"
    ],
    "solutions": [
      "find . -type f -mtime -7"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 148,
    "title": "Joriy Papkadagi Barcha Ob'yektlarni Rekursiv Ro'yxatlash",
    "story": "Joriy katalogdagi hamma obyektlarni to'liq qidirib chiqaring.",
    "taskUz": "`find .` buyrug'ini bering.",
    "expectedSql": "find .",
    "hint": "`find .` deb yozing.",
    "tags": [
      "FIND .",
      "ALL",
      "TRAVERSE"
    ],
    "solutions": [
      "find ."
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 149,
    "title": "find Buyrug'i Qo'llanmasini Ko'rish",
    "story": "`find` buyrug'ining barcha kuchli predicate parametrlarini man dan o'rganing.",
    "taskUz": "`man find` buyrug'ini bering.",
    "expectedSql": "man find",
    "hint": "`man find` deb yozing.",
    "tags": [
      "MAN",
      "FIND",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man find"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  },
  {
    "id": 150,
    "title": "Bosh Linux Kernel Arxitektori Final Sinovi",
    "story": "TABRIKLAYMIZ! 150-Final Sinov: Barcha o'rganilgan buyruqlarni yakunlab, to'liq joriy katalogni tasdiqlang.",
    "taskUz": "Fayl tizimi to'liq sozlanganini tasdiqlash uchun `pwd` buyrug'ini bering.",
    "expectedSql": "pwd",
    "hint": "`pwd` deb yozing.",
    "tags": [
      "GRAND FINALE",
      "PWD",
      "ARCHITECT"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Grand Master",
    "source": "S01 Task 10 • find & Automation"
  }
];
