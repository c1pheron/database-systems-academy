// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — W2 QUESTIONS_51_100.JS
// ============================================================================

window.QUESTIONS_51_100_W2 = [
  {
    "id": 51,
    "title": "Tmp Katalogiga 1777 Ruxsatini Berish",
    "story": "Agar /tmp katalogida sticky bit buzilsa, tizim xavfsizligi keskin pasayadi.",
    "taskUz": "<code>/tmp</code> katalogiga 1777 ruxsatini o'rnating.",
    "expectedSql": "chmod 1777 /tmp",
    "expectedBash": "chmod 1777 /tmp",
    "hint": "`chmod 1777 /tmp` buyrug'ini kiriting.",
    "tags": [
      "CHMOD",
      "1777",
      "TMP_SECURITY"
    ],
    "solutions": [
      "chmod 1777 /tmp",
      "sudo chmod 1777 /tmp"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Seminar • /tmp 1777"
  },
  {
    "id": 52,
    "title": "Sticky Bitni Olib Tashlash",
    "story": "Agar maxsus test uchun sticky bitni o'chirish talab etilsa <code>-t</code> ishlatiladi.",
    "taskUz": "<code>/srv/project</code> katalogidan sticky bitni olib tashlang (<code>-t</code>).",
    "expectedSql": "chmod -t /srv/project",
    "expectedBash": "chmod -t /srv/project",
    "hint": "`chmod -t /srv/project` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "REMOVE_STICKY",
      "FLAGS"
    ],
    "solutions": [
      "chmod -t /srv/project",
      "sudo chmod -t /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Seminar • Unset Sticky"
  },
  {
    "id": 53,
    "title": "Oktal 0777 Bilan Sticky Bitni Bekor Qilish",
    "story": "Oktal formatda birinchi raqamni 0 qo'yish sticky bitni o'chiradi (0777).",
    "taskUz": "<code>/srv/project</code> katalogiga 0777 ruxsatini bering.",
    "expectedSql": "chmod 0777 /srv/project",
    "expectedBash": "chmod 0777 /srv/project",
    "hint": "`chmod 0777 /srv/project` buyrug'ini kiriting.",
    "tags": [
      "CHMOD",
      "0777",
      "OCTAL"
    ],
    "solutions": [
      "chmod 0777 /srv/project",
      "sudo chmod 0777 /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Seminar • Unset Sticky"
  },
  {
    "id": 54,
    "title": "Qayta 1775 Xavfsiz Rejimiga Tiklash",
    "story": "Loyiha xavfsizligini ta'minlash uchun katalogni qaytadan 1775 rejimiga o'tkazing.",
    "taskUz": "<code>/srv/project</code> katalogiga 1775 ruxsatini bering.",
    "expectedSql": "chmod 1775 /srv/project",
    "expectedBash": "chmod 1775 /srv/project",
    "hint": "`chmod 1775 /srv/project` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "1775",
      "SECURITY"
    ],
    "solutions": [
      "chmod 1775 /srv/project",
      "sudo chmod 1775 /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Case Study 3 • Fix"
  },
  {
    "id": 55,
    "title": "Loyiha Fayllari Tarkibini Ko'rish",
    "story": "Jamoa <code>/srv/project</code> ichida qanday fayllar ustida ishlayotganini tekshiring.",
    "taskUz": "<code>ls -la /srv/project</code> buyrug'i orqali barcha fayllarni ko'ring.",
    "expectedSql": "ls -la /srv/project",
    "expectedBash": "ls -la /srv/project",
    "hint": "`ls -la /srv/project` buyrug'ini bering.",
    "tags": [
      "LS",
      "PROJECT",
      "FILES"
    ],
    "solutions": [
      "ls -la /srv/project"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Case Study 3 • Files"
  },
  {
    "id": 56,
    "title": "Loyiha README Hujjatini O'qish",
    "story": "Jamoa qoidalari yozilgan <code>/srv/project/README.md</code> hujjatini o'qing.",
    "taskUz": "<code>cat /srv/project/README.md</code> buyrug'ini bering.",
    "expectedSql": "cat /srv/project/README.md",
    "expectedBash": "cat /srv/project/README.md",
    "hint": "`cat /srv/project/README.md` buyrug'ini kiriting.",
    "tags": [
      "CAT",
      "README",
      "DOCS"
    ],
    "solutions": [
      "cat /srv/project/README.md"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Case Study 3 • Readme"
  },
  {
    "id": 57,
    "title": "Loyiha Konfiguratsiya Faylini O'qish",
    "story": "Alice tomonidan tayyorlangan <code>/srv/project/app_config.json</code> sozlamalarini ko'ring.",
    "taskUz": "<code>cat /srv/project/app_config.json</code> buyrug'ini bering.",
    "expectedSql": "cat /srv/project/app_config.json",
    "expectedBash": "cat /srv/project/app_config.json",
    "hint": "`cat /srv/project/app_config.json` buyrug'ini yozing.",
    "tags": [
      "CAT",
      "JSON",
      "CONFIG"
    ],
    "solutions": [
      "cat /srv/project/app_config.json"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Case Study 3 • Config"
  },
  {
    "id": 58,
    "title": "Loyiha CI/CD Pipeline Skriptini Ko'rish",
    "story": "Jamoaviy <code>/srv/project/pipeline.sh</code> avtomatlashtirish skriptini tekshiring.",
    "taskUz": "<code>cat /srv/project/pipeline.sh</code> buyrug'ini bering.",
    "expectedSql": "cat /srv/project/pipeline.sh",
    "expectedBash": "cat /srv/project/pipeline.sh",
    "hint": "`cat /srv/project/pipeline.sh` buyrug'ini kiriting.",
    "tags": [
      "CAT",
      "BASH",
      "PIPELINE"
    ],
    "solutions": [
      "cat /srv/project/pipeline.sh"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Case Study 3 • Pipeline"
  },
  {
    "id": 59,
    "title": "Faqat Bitta Fayl Egaligini O'zgartirish",
    "story": "<code>scores.csv</code> faylining egasini <code>alice</code> ga o'zgartiring.",
    "taskUz": "<code>chown alice scores.csv</code> buyrug'ini bering.",
    "expectedSql": "chown alice scores.csv",
    "expectedBash": "chown alice scores.csv",
    "hint": "`chown alice scores.csv` buyrug'ini yozing.",
    "tags": [
      "CHOWN",
      "USER_ONLY",
      "FILES"
    ],
    "solutions": [
      "chown alice scores.csv",
      "sudo chown alice scores.csv"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Seminar • chown"
  },
  {
    "id": 60,
    "title": "Fayl Egasi Va Guruhini Qaytarish",
    "story": "<code>scores.csv</code> faylining egasini va guruhini yana <code>student:student</code> ga qaytaring.",
    "taskUz": "<code>chown student:student scores.csv</code> buyrug'ini bering.",
    "expectedSql": "chown student:student scores.csv",
    "expectedBash": "chown student:student scores.csv",
    "hint": "`chown student:student scores.csv` buyrug'ini bering.",
    "tags": [
      "CHOWN",
      "RESTORE",
      "GROUPS"
    ],
    "solutions": [
      "chown student:student scores.csv",
      "sudo chown student:student scores.csv"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S02 Seminar • chown"
  },
  {
    "id": 61,
    "title": "Joriy Umask Qiymatini Ko'rish",
    "story": "Yangi yaratiladigan fayl va kataloglar qanday standart ruxsat olishini bilish uchun joriy umaskni ko'ring.",
    "taskUz": "Argumentlarsiz <code>umask</code> buyrug'ini bering.",
    "expectedSql": "umask",
    "expectedBash": "umask",
    "hint": "`umask` buyrug'ini bering.",
    "tags": [
      "UMASK",
      "DEFAULT_MASK",
      "SECURITY"
    ],
    "solutions": [
      "umask",
      "/usr/bin/umask"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • umask"
  },
  {
    "id": 62,
    "title": "Umaskni Ramziy Formatda Ko'rish",
    "story": "Raqamlardan ko'ra ramziy (u=rwx,g=rx,o=rx) shaklda ko'rish osonroq tushuniladi.",
    "taskUz": "<code>umask -S</code> buyrug'ini bering.",
    "expectedSql": "umask -S",
    "expectedBash": "umask -S",
    "hint": "`umask -S` buyrug'ini kiriting.",
    "tags": [
      "UMASK",
      "SYMBOLIC",
      "FLAGS"
    ],
    "solutions": [
      "umask -S"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • umask -S"
  },
  {
    "id": 63,
    "title": "Standart 022 Umaskini O'rnatish",
    "story": "Umask 022 bo'lganda yangi fayllar 644 (rw-r--r--), yangi kataloglar esa 755 (rwxr-xr-x) ruxsat oladi.",
    "taskUz": "<code>umask 022</code> buyrug'ini bering.",
    "expectedSql": "umask 022",
    "expectedBash": "umask 022",
    "hint": "`umask 022` buyrug'ini bering.",
    "tags": [
      "UMASK",
      "022",
      "STANDARD"
    ],
    "solutions": [
      "umask 022"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • umask 022"
  },
  {
    "id": 64,
    "title": "Jamoaviy 002 Umaskini O'rnatish",
    "story": "Seminar 2 Case Study 3: Yangi fayllar 664 (rw-rw-r--) va yangi papkalar 775 (rwxrwxr-x) bo'lishi uchun.",
    "taskUz": "<code>umask 002</code> buyrug'ini o'rnating.",
    "expectedSql": "umask 002",
    "expectedBash": "umask 002",
    "hint": "`umask 002` buyrug'ini bering.",
    "tags": [
      "UMASK",
      "002",
      "CASE_STUDY_3"
    ],
    "solutions": [
      "umask 002"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Case Study 3 • umask 002"
  },
  {
    "id": 65,
    "title": "Qat'iy Xavfsiz 027 Umaskini O'rnatish",
    "story": "Egasiga to'liq, guruhga o'qish/ijro, begonalarga (others) umuman ruxsat berilmaydi (fayllar 640, papkalar 750).",
    "taskUz": "<code>umask 027</code> buyrug'ini bering.",
    "expectedSql": "umask 027",
    "expectedBash": "umask 027",
    "hint": "`umask 027` buyrug'ini yozing.",
    "tags": [
      "UMASK",
      "027",
      "HARDENED"
    ],
    "solutions": [
      "umask 027"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "S02 Seminar • umask 027"
  },
  {
    "id": 66,
    "title": "Maksimal Maxfiy 077 Umaskini O'rnatish",
    "story": "Faqat va faqat egasining o'zi kira oladigan rejim (yangi fayllar 600, yangi papkalar 700).",
    "taskUz": "<code>umask 077</code> buyrug'ini bering.",
    "expectedSql": "umask 077",
    "expectedBash": "umask 077",
    "hint": "`umask 077` buyrug'ini kiriting.",
    "tags": [
      "UMASK",
      "077",
      "PRIVATE"
    ],
    "solutions": [
      "umask 077"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "S02 Seminar • umask 077"
  },
  {
    "id": 67,
    "title": "Umask Ta'sirini Yangi Faylda Sinash",
    "story": "Umask 022 holatida yangi ochilgan fayl 644 ruxsatini oladi.",
    "taskUz": "<code>touch test_umask.txt</code> buyrug'i orqali test fayl oching.",
    "expectedSql": "touch test_umask.txt",
    "expectedBash": "touch test_umask.txt",
    "hint": "`touch test_umask.txt` buyrug'ini bering.",
    "tags": [
      "TOUCH",
      "TEST",
      "UMASK"
    ],
    "solutions": [
      "touch test_umask.txt"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Test File"
  },
  {
    "id": 68,
    "title": "Test Fayl Ruxsatini Tekshirish",
    "story": "Yangi ochilgan <code>test_umask.txt</code> faylining ruxsatlarini ko'ring.",
    "taskUz": "<code>ls -l test_umask.txt</code> buyrug'ini bering.",
    "expectedSql": "ls -l test_umask.txt",
    "expectedBash": "ls -l test_umask.txt",
    "hint": "`ls -l test_umask.txt` buyrug'ini bering.",
    "tags": [
      "LS",
      "TEST",
      "VERIFY"
    ],
    "solutions": [
      "ls -l test_umask.txt"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Verify Umask"
  },
  {
    "id": 69,
    "title": "Umask Ta'sirini Yangi Papkada Sinash",
    "story": "Umask 022 holatida yangi ochilgan katalog 755 ruxsatini oladi.",
    "taskUz": "<code>mkdir test_dir</code> buyrug'i orqali yangi katalog oching.",
    "expectedSql": "mkdir test_dir",
    "expectedBash": "mkdir test_dir",
    "hint": "`mkdir test_dir` buyrug'ini kiriting.",
    "tags": [
      "MKDIR",
      "TEST",
      "UMASK"
    ],
    "solutions": [
      "mkdir test_dir"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Test Dir"
  },
  {
    "id": 70,
    "title": "Test Papka Ruxsatini Tekshirish",
    "story": "Yangi ochilgan <code>test_dir</code> katalogining ruxsatlarini ko'ring.",
    "taskUz": "<code>ls -ld test_dir</code> buyrug'ini bering.",
    "expectedSql": "ls -ld test_dir",
    "expectedBash": "ls -ld test_dir",
    "hint": "`ls -ld test_dir` buyrug'ini yozing.",
    "tags": [
      "LS",
      "DIR",
      "VERIFY"
    ],
    "solutions": [
      "ls -ld test_dir"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Verify Dir"
  },
  {
    "id": 71,
    "title": "Test Faylni Tozalash",
    "story": "Test yakunlangach, ortiqcha faylni tizimdan o'chiring.",
    "taskUz": "<code>rm test_umask.txt</code> buyrug'ini bering.",
    "expectedSql": "rm test_umask.txt",
    "expectedBash": "rm test_umask.txt",
    "hint": "`rm test_umask.txt` buyrug'ini kiriting.",
    "tags": [
      "RM",
      "CLEANUP",
      "TEST"
    ],
    "solutions": [
      "rm test_umask.txt"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Cleanup"
  },
  {
    "id": 72,
    "title": "Test Papkani O'chirish",
    "story": "Test uchun ochilgan bo'sh katalogni <code>rmdir</code> orqali tozalang.",
    "taskUz": "<code>rmdir test_dir</code> buyrug'ini bering.",
    "expectedSql": "rmdir test_dir",
    "expectedBash": "rmdir test_dir",
    "hint": "`rmdir test_dir` buyrug'ini yozing.",
    "tags": [
      "RMDIR",
      "CLEANUP",
      "TEST"
    ],
    "solutions": [
      "rmdir test_dir"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Cleanup"
  },
  {
    "id": 73,
    "title": "Umaskni Yana Standart 022 ga Qaytarish",
    "story": "Kelgusi ishlar to'g'ri ishlashi uchun umaskni standart 022 ga qaytaring.",
    "taskUz": "<code>umask 022</code> buyrug'ini bering.",
    "expectedSql": "umask 022",
    "expectedBash": "umask 022",
    "hint": "`umask 022` buyrug'ini kiriting.",
    "tags": [
      "UMASK",
      "022",
      "RESET"
    ],
    "solutions": [
      "umask 022"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Reset Umask"
  },
  {
    "id": 74,
    "title": "Standart Umask Qiymatini Qayta Tekshirish",
    "story": "Umask 0022 ekanligini yana bir bor tekshiring.",
    "taskUz": "<code>umask</code> buyrug'ini bering.",
    "expectedSql": "umask",
    "expectedBash": "umask",
    "hint": "`umask` buyrug'ini bering.",
    "tags": [
      "UMASK",
      "CHECK",
      "STATUS"
    ],
    "solutions": [
      "umask"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Check Umask"
  },
  {
    "id": 75,
    "title": "Umask Matematikasi Tushunchasi",
    "story": "Fayllar uchun bazaviy 666 dan umask 022 ayirilsa 644 hosil bo'ladi. Hozirgi katalogni tekshiring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini bering.",
    "tags": [
      "PWD",
      "MATH",
      "CHECK"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S02 Seminar • Math"
  },
  {
    "id": 76,
    "title": "Chiqishni Yangi Faylga Yozish (>)",
    "story": "Seminar 2 talabi: Buyruq natijasini faylga yangitdan yozish (mavjud bo'lsa ustidan yozish).",
    "taskUz": "<code>ls -l</code> chiqishini <code>~/files.list</code> fayliga yo'naltiring.",
    "expectedSql": "ls -l > ~/files.list",
    "expectedBash": "ls -l > ~/files.list",
    "hint": "`ls -l > ~/files.list` buyrug'ini bering.",
    "tags": [
      "REDIRECTION",
      "WRITE",
      "STDOUT"
    ],
    "solutions": [
      "ls -l > ~/files.list",
      "ls -l > /home/student/files.list"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Redirection >"
  },
  {
    "id": 77,
    "title": "Chiqishni Mavjud Faylga Qo'shish (>>)",
    "story": "Fayl ichidagi mavjud ma'lumotlarni o'chirmasdan pastiga qo'shish.",
    "taskUz": "<code>date</code> yoki matnni <code>echo \"End of list\" >> ~/files.list</code> orqali fayl oxiriga qo'shing.",
    "expectedSql": "echo \"End of list\" >> ~/files.list",
    "expectedBash": "echo \"End of list\" >> ~/files.list",
    "hint": "`echo \"End of list\" >> ~/files.list` buyrug'ini bering.",
    "tags": [
      "REDIRECTION",
      "APPEND",
      "STDOUT"
    ],
    "solutions": [
      "echo \"End of list\" >> ~/files.list",
      "echo 'End of list' >> ~/files.list"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Append >>"
  },
  {
    "id": 78,
    "title": "Hosil Bo'lgan Faylni Tekshirish",
    "story": "Yo'naltirilgan ma'lumotlarni tekshirish uchun faylni o'qing.",
    "taskUz": "<code>cat ~/files.list</code> buyrug'ini bering.",
    "expectedSql": "cat ~/files.list",
    "expectedBash": "cat ~/files.list",
    "hint": "`cat ~/files.list` buyrug'ini bering.",
    "tags": [
      "CAT",
      "READ",
      "VERIFY"
    ],
    "solutions": [
      "cat ~/files.list",
      "cat /home/student/files.list"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Cat list"
  },
  {
    "id": 79,
    "title": "Xatoliklar Oqimini Faylga Yo'naltirish (2>)",
    "story": "Buyruq xatolik bersa (stderr), xatolik matnini alohida <code>errors.txt</code> fayliga yozish kerak.",
    "taskUz": "Mavjud bo'lmagan faylni o'qishda xatolikni yo'naltiring: <code>cat non_existing.txt 2> errors.txt</code>.",
    "expectedSql": "cat non_existing.txt 2> errors.txt",
    "expectedBash": "cat non_existing.txt 2> errors.txt",
    "hint": "`cat non_existing.txt 2> errors.txt` buyrug'ini bering.",
    "tags": [
      "STDERR",
      "2>",
      "ERRORS"
    ],
    "solutions": [
      "cat non_existing.txt 2> errors.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S02 Seminar • 2> Redirect"
  },
  {
    "id": 80,
    "title": "Xatoliklar Faylini Tekshirish",
    "story": "Yozilgan xatolik xabarini ko'rish uchun <code>cat errors.txt</code> buyrug'ini bering.",
    "taskUz": "<code>cat errors.txt</code> buyrug'ini bering.",
    "expectedSql": "cat errors.txt",
    "expectedBash": "cat errors.txt",
    "hint": "`cat errors.txt` buyrug'ini bering.",
    "tags": [
      "CAT",
      "ERRORS",
      "LOGS"
    ],
    "solutions": [
      "cat errors.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Check errors"
  },
  {
    "id": 81,
    "title": "Xatoliklarni Qora Tuynukka Tashlash (2> /dev/null)",
    "story": "Tizim adminlari ortiqcha xatoliklar ekranga chiqib chalg'itmasligi uchun uni <code>/dev/null</code> ga yo'naltiradi.",
    "taskUz": "<code>cat /var/log/syslog 2> /dev/null</code> buyrug'ini bering.",
    "expectedSql": "cat /var/log/syslog 2> /dev/null",
    "expectedBash": "cat /var/log/syslog 2> /dev/null",
    "hint": "`cat /var/log/syslog 2> /dev/null` buyrug'ini bering.",
    "tags": [
      "DEV_NULL",
      "SILENT",
      "STDERR"
    ],
    "solutions": [
      "cat /var/log/syslog 2> /dev/null"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S02 Seminar • 2> /dev/null"
  },
  {
    "id": 82,
    "title": "Bir Vaqtda Ham Chiqish, Ham Xatolikni Yo'naltirish",
    "story": "Seminar 2 namunasi: stdout ni bir faylga, xatolikni esa <code>/dev/null</code> ga ajratish.",
    "taskUz": "<code>cat /var/log/syslog 2> /dev/null > ~/log.txt</code> buyrug'ini bering.",
    "expectedSql": "cat /var/log/syslog 2> /dev/null > ~/log.txt",
    "expectedBash": "cat /var/log/syslog 2> /dev/null > ~/log.txt",
    "hint": "`cat /var/log/syslog 2> /dev/null > ~/log.txt` buyrug'ini bering.",
    "tags": [
      "STDOUT",
      "STDERR",
      "DUAL_ROUTING"
    ],
    "solutions": [
      "cat /var/log/syslog 2> /dev/null > ~/log.txt",
      "cat /var/log/syslog > ~/log.txt 2> /dev/null"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S02 Seminar • Dual Redirection"
  },
  {
    "id": 83,
    "title": "Ikkala Oqimni Bitta Faylga Birlashtirish (&>)",
    "story": "Zamonaviy Bash sintaksisi: ham stdout, ham stderr ni bitta <code>output.log</code> ga yozish.",
    "taskUz": "<code>ls -la &> output.log</code> buyrug'ini bering.",
    "expectedSql": "ls -la &> output.log",
    "expectedBash": "ls -la &> output.log",
    "hint": "`ls -la &> output.log` buyrug'ini bering.",
    "tags": [
      "MERGE",
      "&>",
      "COMBINED"
    ],
    "solutions": [
      "ls -la &> output.log"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S02 Seminar • &> Operator"
  },
  {
    "id": 84,
    "title": "Klassik 2>&1 Sintaksisi",
    "story": "Seminar 2 talabi: <code>2>&1</code> orqali 2-oqimni 1-oqimga qo'shib yuborish.",
    "taskUz": "<code>cat /etc/passwd > all.log 2>&1</code> buyrug'ini bering.",
    "expectedSql": "cat /etc/passwd > all.log 2>&1",
    "expectedBash": "cat /etc/passwd > all.log 2>&1",
    "hint": "`cat /etc/passwd > all.log 2>&1` buyrug'ini bering.",
    "tags": [
      "2>&1",
      "POSIX",
      "MERGE"
    ],
    "solutions": [
      "cat /etc/passwd > all.log 2>&1"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S02 Seminar • 2>&1"
  },
  {
    "id": 85,
    "title": "Pipeline Bilan Bog'lash (cmd1 | cmd2)",
    "story": "Birinchi buyruqning chiqishini ikkinchi buyruqqa kirish qilib uzatish.",
    "taskUz": "<code>cat /etc/passwd | wc -l</code> buyrug'i orqali foydalanuvchilar sonini hisoblang.",
    "expectedSql": "cat /etc/passwd | wc -l",
    "expectedBash": "cat /etc/passwd | wc -l",
    "hint": "`cat /etc/passwd | wc -l` buyrug'ini bering.",
    "tags": [
      "PIPE",
      "WC",
      "STREAM"
    ],
    "solutions": [
      "cat /etc/passwd | wc -l"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Pipeline"
  },
  {
    "id": 86,
    "title": "Grep Bilan Pipeline: Faqat Bash Foydalanuvchilarini Sanash",
    "story": "<code>/etc/passwd</code> faylidan bash ishlatuvchilarni topib sanash.",
    "taskUz": "<code>grep \"bash\" /etc/passwd | wc -l</code> buyrug'ini bering.",
    "expectedSql": "grep \"bash\" /etc/passwd | wc -l",
    "expectedBash": "grep \"bash\" /etc/passwd | wc -l",
    "hint": "`grep \"bash\" /etc/passwd | wc -l` buyrug'ini bering.",
    "tags": [
      "PIPE",
      "GREP",
      "COUNT"
    ],
    "solutions": [
      "grep \"bash\" /etc/passwd | wc -l",
      "grep bash /etc/passwd | wc -l"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S02 Seminar • Grep Pipe"
  },
  {
    "id": 87,
    "title": "Pipeline Natijasini Faylga Saqlash",
    "story": "Filtrlangan natijani to'g'ridan-to'g'ri faylga yo'naltirish.",
    "taskUz": "<code>grep \"bash\" /etc/passwd > bash_users.txt</code> buyrug'ini bering.",
    "expectedSql": "grep \"bash\" /etc/passwd > bash_users.txt",
    "expectedBash": "grep \"bash\" /etc/passwd > bash_users.txt",
    "hint": "`grep \"bash\" /etc/passwd > bash_users.txt` buyrug'ini bering.",
    "tags": [
      "GREP",
      "SAVE",
      "BASH_USERS"
    ],
    "solutions": [
      "grep \"bash\" /etc/passwd > bash_users.txt",
      "grep bash /etc/passwd > bash_users.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Save Filtered"
  },
  {
    "id": 88,
    "title": "Yozilgan Faylni Tekshirish",
    "story": "Saqlangan <code>bash_users.txt</code> faylini ko'ring.",
    "taskUz": "<code>cat bash_users.txt</code> buyrug'ini bering.",
    "expectedSql": "cat bash_users.txt",
    "expectedBash": "cat bash_users.txt",
    "hint": "`cat bash_users.txt` buyrug'ini bering.",
    "tags": [
      "CAT",
      "CHECK",
      "VERIFY"
    ],
    "solutions": [
      "cat bash_users.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Verify"
  },
  {
    "id": 89,
    "title": "Xatoliklarni Append Qilish (2>>)",
    "story": "Mavjud xatoliklar jurnaliga yangi xatolarni qo'shib borish.",
    "taskUz": "<code>cat missing.txt 2>> errors.txt</code> buyrug'ini bering.",
    "expectedSql": "cat missing.txt 2>> errors.txt",
    "expectedBash": "cat missing.txt 2>> errors.txt",
    "hint": "`cat missing.txt 2>> errors.txt` buyrug'ini bering.",
    "tags": [
      "2>>",
      "APPEND_ERROR",
      "LOGGING"
    ],
    "solutions": [
      "cat missing.txt 2>> errors.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • 2>> Append"
  },
  {
    "id": 90,
    "title": "Vaqtinchalik Test Fayllarni Tozalash",
    "story": "Oqimlar bo'limida yaratilgan test fayllarini o'chiring.",
    "taskUz": "<code>rm -f errors.txt all.log output.log bash_users.txt</code> buyrug'ini bering.",
    "expectedSql": "rm -f errors.txt all.log output.log bash_users.txt",
    "expectedBash": "rm -f errors.txt all.log output.log bash_users.txt",
    "hint": "`rm -f errors.txt all.log output.log bash_users.txt` buyrug'ini bering.",
    "tags": [
      "RM",
      "CLEANUP",
      "WORKSPACE"
    ],
    "solutions": [
      "rm -f errors.txt all.log output.log bash_users.txt",
      "rm errors.txt all.log output.log bash_users.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S02 Seminar • Clean Streams"
  },
  {
    "id": 91,
    "title": "Matn Faylini Alifbo Bo'yicha Saralash",
    "story": "Fayldagi satrlarni oddiy alifbo tartibida saralash.",
    "taskUz": "<code>sort scores.csv</code> buyrug'ini bering.",
    "expectedSql": "sort scores.csv",
    "expectedBash": "sort scores.csv",
    "hint": "`sort scores.csv` buyrug'ini bering.",
    "tags": [
      "SORT",
      "ALPHABETICAL",
      "TEXT"
    ],
    "solutions": [
      "sort scores.csv"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • sort"
  },
  {
    "id": 92,
    "title": "Matnni Teskari Saralash",
    "story": "Satrlarni Z dan A gacha (kamayish tartibida) joylashtirish.",
    "taskUz": "<code>sort -r scores.csv</code> buyrug'ini bering.",
    "expectedSql": "sort -r scores.csv",
    "expectedBash": "sort -r scores.csv",
    "hint": "`sort -r scores.csv` buyrug'ini bering.",
    "tags": [
      "SORT",
      "REVERSE",
      "TEXT"
    ],
    "solutions": [
      "sort -r scores.csv"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • sort -r"
  },
  {
    "id": 93,
    "title": "Takroriy Satrlarni Bittalab Qoldirish",
    "story": "Takrorlanuvchi satrlardan faqat bittadan nusxa qoldirish. Eslatma: uniq saralangan matn bilan ishlaydi.",
    "taskUz": "<code>sort scores.csv | uniq</code> buyrug'ini bering.",
    "expectedSql": "sort scores.csv | uniq",
    "expectedBash": "sort scores.csv | uniq",
    "hint": "`sort scores.csv | uniq` buyrug'ini bering.",
    "tags": [
      "UNIQ",
      "SORT",
      "DEDUPLICATE"
    ],
    "solutions": [
      "sort scores.csv | uniq"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • uniq"
  },
  {
    "id": 94,
    "title": "Takrorlanishlar Soni Bilan Chiqarish",
    "story": "Har bir satr necha marta uchraganini hisoblash.",
    "taskUz": "<code>sort scores.csv | uniq -c</code> buyrug'ini bering.",
    "expectedSql": "sort scores.csv | uniq -c",
    "expectedBash": "sort scores.csv | uniq -c",
    "hint": "`sort scores.csv | uniq -c` buyrug'ini bering.",
    "tags": [
      "UNIQ",
      "COUNT",
      "METRICS"
    ],
    "solutions": [
      "sort scores.csv | uniq -c"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • uniq -c"
  },
  {
    "id": 95,
    "title": "Faqat Takrorlanmagan",
    "story": "Faqat 1 marta uchragan nodir satrlarni ajratib olish.",
    "taskUz": "<code>sort scores.csv | uniq -u</code> buyrug'ini bering.",
    "expectedSql": "sort scores.csv | uniq -u",
    "expectedBash": "sort scores.csv | uniq -u",
    "hint": "`sort scores.csv | uniq -u` buyrug'ini bering.",
    "tags": [
      "UNIQ",
      "UNIQUE_ONLY",
      "AUDIT"
    ],
    "solutions": [
      "sort scores.csv | uniq -u"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • uniq -u"
  },
  {
    "id": 96,
    "title": "Faqat Dublikat Satrlarni Ko'rish",
    "story": "Kamida 2 marta uchragan takroriy satrlarni topish.",
    "taskUz": "<code>sort scores.csv | uniq -d</code> buyrug'ini bering.",
    "expectedSql": "sort scores.csv | uniq -d",
    "expectedBash": "sort scores.csv | uniq -d",
    "hint": "`sort scores.csv | uniq -d` buyrug'ini bering.",
    "tags": [
      "UNIQ",
      "DUPLICATES",
      "AUDIT"
    ],
    "solutions": [
      "sort scores.csv | uniq -d"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • uniq -d"
  },
  {
    "id": 97,
    "title": "Cut Bilan 1-Ustunni Ajratish (cut -d: -f1)",
    "story": "Seminar 2 namunasi: <code>/etc/passwd</code> faylidan faqat foydalanuvchi nomlarini (1-ustun) kesib olish.",
    "taskUz": "<code>cut -d: -f1 /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "cut -d: -f1 /etc/passwd",
    "expectedBash": "cut -d: -f1 /etc/passwd",
    "hint": "`cut -d: -f1 /etc/passwd` buyrug'ini bering.",
    "tags": [
      "CUT",
      "DELIMITER",
      "PASSWD"
    ],
    "solutions": [
      "cut -d: -f1 /etc/passwd",
      "cut -d':' -f1 /etc/passwd"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • cut -d: -f1"
  },
  {
    "id": 98,
    "title": "Foydalanuvchi Nomi Va Shellini Ajratish",
    "story": "Seminar 2 namunasi: 1-ustun (username) va 7-ustun (shell) ni ajratish.",
    "taskUz": "<code>cut -d: -f1,7 /etc/passwd</code> buyrug'ini bering.",
    "expectedSql": "cut -d: -f1,7 /etc/passwd",
    "expectedBash": "cut -d: -f1,7 /etc/passwd",
    "hint": "`cut -d: -f1,7 /etc/passwd` buyrug'ini bering.",
    "tags": [
      "CUT",
      "FIELDS",
      "PASSWD"
    ],
    "solutions": [
      "cut -d: -f1,7 /etc/passwd",
      "cut -d':' -f1,7 /etc/passwd"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "S02 Seminar • cut fields"
  },
  {
    "id": 99,
    "title": "CSV Fayldan Talabalar Ismlarini Kesib Olish",
    "story": "<code>scores.csv</code> vergul bilan ajratilgan faylidan 1-ustunni (talaba ismini) oling.",
    "taskUz": "<code>cut -d, -f1 scores.csv</code> buyrug'ini bering.",
    "expectedSql": "cut -d, -f1 scores.csv",
    "expectedBash": "cut -d, -f1 scores.csv",
    "hint": "`cut -d, -f1 scores.csv` buyrug'ini bering.",
    "tags": [
      "CUT",
      "CSV",
      "NAMES"
    ],
    "solutions": [
      "cut -d, -f1 scores.csv",
      "cut -d',' -f1 scores.csv"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • CSV Cut"
  },
  {
    "id": 100,
    "title": "CSV Fayldan Fanlar Ro'yxatini Olish",
    "story": "<code>scores.csv</code> faylidan 3-ustunni (fan nomini) kesib oling.",
    "taskUz": "<code>cut -d, -f3 scores.csv</code> buyrug'ini bering.",
    "expectedSql": "cut -d, -f3 scores.csv",
    "expectedBash": "cut -d, -f3 scores.csv",
    "hint": "`cut -d, -f3 scores.csv` buyrug'ini bering.",
    "tags": [
      "CUT",
      "CSV",
      "SUBJECTS"
    ],
    "solutions": [
      "cut -d, -f3 scores.csv",
      "cut -d',' -f3 scores.csv"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S02 Seminar • CSV Cut 3"
  }
];
