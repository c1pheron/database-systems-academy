// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 QUESTIONS 51 TO 100
// ============================================================================

window.QUESTIONS_51_100_W4 = [
  {
    "id": 51,
    "title": "Mantiqiy YOKI (-o) Bilan .log va .txt Fayllarni Birlashtirish",
    "story": "Darslik 5-sahifasi: -o bayrog'i orqali ikkala kengaytmani qidiring.",
    "taskUz": "<code>find logs -type f \\( -name '*.log' -o -name '*.txt' \\)</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\)",
    "expectedBash": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\)",
    "hint": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) buyrug'ini bering.",
    "tags": [
      "FIND",
      "-O",
      "LOGICAL_OR"
    ],
    "solutions": [
      "find logs -type f \\( -name '*.log' -o -name '*.txt' \\)",
      "find logs -type f ( -name '*.log' -o -name '*.txt' )"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S04 Task 1 • find -o",
    "flagAnatomy": {
      "command": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\)",
      "flags": [
        {
          "flag": "-o",
          "name": "Mantiqiy YOKI (Logical OR)",
          "syntaxPos": "Ikki shart o'rtasida",
          "purpose": "Birinchi yoki ikkinchi nom mos kelganda ham faylni tanlaydi.",
          "withoutRisk": "⚠️ AGAR -o BO'LMASA: Sukut bo'yicha mantiqiy VA (AND) ishlaydi va bir vaqtning o'zida ham .log ham .txt bo'lgan imkonsiz fayl qidiriladi!"
        },
        {
          "flag": "\\( va \\)",
          "name": "Shartlarni guruhlash (Grouping parentheses)",
          "syntaxPos": "Shartlar atrofida",
          "purpose": "-o operatori faqat nomlarga tegishli bo'lishi uchun guruhlaydi.",
          "withoutRisk": "⚠️ AGAR QAVSLAR BO'LMASA: Mantiqiy ustunlik buzilib, -type f faqat birinchi shartga ta'sir qiladi!"
        }
      ]
    }
  },
  {
    "id": 52,
    "title": "7 Kunda Katta Fayllarni Qidirish (-mmin +10080)",
    "story": "Darslik 5-sahifasi: 7 kun = 10,080 daqiqa. +10080 orqali eskirgan fayllarni ko'ring.",
    "taskUz": "<code>find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080",
    "expectedBash": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080",
    "hint": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 buyrug'ini bering.",
    "tags": [
      "FIND",
      "-MMIN",
      "+10080"
    ],
    "solutions": [
      "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S04 Task 1 • find -mmin +10080",
    "flagAnatomy": {
      "command": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080",
      "flags": [
        {
          "flag": "-mmin +10080",
          "name": "O'zgartirilgan vaqt (Modified minutes > 10080)",
          "syntaxPos": "Guruh qavslaridan so'ng",
          "purpose": "+ belgisi aniq 10,080 daqiqadan ko'proq vaqt oldin o'zgartirilgan fayllarni tanlaydi.",
          "withoutRisk": "⚠️ AGAR +10080 BO'LMASA: Agar minus (-10080) yozilsa, teskarisi — eng yangi 7 kundagi fayllar tanlanib fojiaga olib keladi!"
        }
      ]
    }
  },
  {
    "id": 53,
    "title": "Eskirgan Fayllarni Batafsil Ko'rish (-ls)",
    "story": "Darslik 5-sahifasi: Topilgan eski fayllarning inode, ruxsat va hajmini -ls bilan chiqaring.",
    "taskUz": "<code>find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls",
    "expectedBash": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls",
    "hint": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls buyrug'ini bering.",
    "tags": [
      "FIND",
      "-LS",
      "DETAILS"
    ],
    "solutions": [
      "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S04 Task 1 • find -ls",
    "flagAnatomy": {
      "command": "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls",
      "flags": [
        {
          "flag": "-ls",
          "name": "Batafsil ro'yxat (List format)",
          "syntaxPos": "Buyruqning eng oxirida",
          "purpose": "Fayl atributlarini to'liq formatda ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR -ls BO'LMASA: Faqat fayl manzillari quruq matn sifatida chiqadi."
        }
      ]
    }
  },
  {
    "id": 54,
    "title": "Yangi Fayl (recent.log) Tanlanmaganini Tasdiqlash",
    "story": "recent.log fayli 7 kundan yangi bo'lgani uchun natijada chiqmasligi kerak.",
    "taskUz": "<code>find logs -type f -name 'recent.log' -mmin +10080</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f -name 'recent.log' -mmin +10080",
    "expectedBash": "find logs -type f -name 'recent.log' -mmin +10080",
    "hint": "find logs -type f -name 'recent.log' -mmin +10080 buyrug'ini bering.",
    "tags": [
      "FIND",
      "RECENT_CHECK"
    ],
    "solutions": [
      "find logs -type f -name 'recent.log' -mmin +10080"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • verify recent.log",
    "flagAnatomy": {
      "command": "find logs -type f -name 'recent.log' -mmin +10080",
      "flags": []
    }
  },
  {
    "id": 55,
    "title": "Yangi Fayllar Filtri (-mmin -10080)",
    "story": "Minus (-) belgisi berilganda 7 kundan yangi bo'lgan fayllar chiqishini ko'ring.",
    "taskUz": "<code>find logs -type f -mmin -10080</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f -mmin -10080",
    "expectedBash": "find logs -type f -mmin -10080",
    "hint": "find logs -type f -mmin -10080 buyrug'ini bering.",
    "tags": [
      "FIND",
      "-MMIN_MINUS",
      "NEW_FILES"
    ],
    "solutions": [
      "find logs -type f -mmin -10080"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • -mmin -10080",
    "flagAnatomy": {
      "command": "find logs -type f -mmin -10080",
      "flags": [
        {
          "flag": "-mmin -10080",
          "name": "Yangi fayllar (Minutes < 10080)",
          "syntaxPos": "Fayl turidan so'ng",
          "purpose": "Oxirgi 7 kun ichida o'zgartirilgan yangi fayllarni tanlaydi.",
          "withoutRisk": "⚠️ AGAR - BO'LMASA: Eski fayllar bilan adashadi."
        }
      ]
    }
  },
  {
    "id": 56,
    "title": "Logs Papkasidagi Jami Fayllar Soni",
    "story": "find logs -type f | wc -l orqali jami nechta fayl borligini sanang.",
    "taskUz": "<code>find logs -type f | wc -l</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f | wc -l",
    "expectedBash": "find logs -type f | wc -l",
    "hint": "find logs -type f | wc -l buyrug'ini bering.",
    "tags": [
      "FIND",
      "COUNT"
    ],
    "solutions": [
      "find logs -type f | wc -l"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • count files",
    "flagAnatomy": {
      "command": "find logs -type f | wc -l",
      "flags": []
    }
  },
  {
    "id": 57,
    "title": "Stat Bilan old.log Faylining Aniq Hajmini Ko'rish",
    "story": "stat -c '%s' logs/old.log orqali baytlardagi hajmni ko'ring.",
    "taskUz": "<code>stat -c '%s' logs/old.log</code> buyrug'ini bering.",
    "expectedSql": "stat -c '%s' logs/old.log",
    "expectedBash": "stat -c '%s' logs/old.log",
    "hint": "stat -c '%s' logs/old.log buyrug'ini bering.",
    "tags": [
      "STAT",
      "-C",
      "SIZE"
    ],
    "solutions": [
      "stat -c '%s' logs/old.log",
      "stat -c \"%s\" logs/old.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • stat size",
    "flagAnatomy": {
      "command": "stat -c '%s' logs/old.log",
      "flags": [
        {
          "flag": "-c '%s'",
          "name": "Faqat hajm formati (Size format)",
          "syntaxPos": "stat dan so'ng",
          "purpose": "Faqatgina fayl hajmini butun son (bayt) ko'rinishida chiqaradi.",
          "withoutRisk": "⚠️ AGAR -c '%s' BO'LMASA: stat butun boshli ko'p satrli blok chiqaradi va skript uni raqam deb o'qiy olmaydi!"
        }
      ]
    }
  },
  {
    "id": 58,
    "title": "Stat Bilan old.txt Hajmini Ko'rish",
    "story": "old.txt faylining hajmini ko'rish uchun stat buyrug'idan foydalaning.",
    "taskUz": "<code>stat -c '%s' logs/old.txt</code> buyrug'ini bering.",
    "expectedSql": "stat -c '%s' logs/old.txt",
    "expectedBash": "stat -c '%s' logs/old.txt",
    "hint": "stat -c '%s' logs/old.txt buyrug'ini bering.",
    "tags": [
      "STAT",
      "OLD_TXT"
    ],
    "solutions": [
      "stat -c '%s' logs/old.txt",
      "stat -c \"%s\" logs/old.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • stat old.txt",
    "flagAnatomy": {
      "command": "stat -c '%s' logs/old.txt",
      "flags": []
    }
  },
  {
    "id": 59,
    "title": "Old.log Faylini O'qib Ko'rish (cat)",
    "story": "O'chirishdan oldin uning ichidagi ma'lumotni ko'ring.",
    "taskUz": "<code>cat logs/old.log</code> buyrug'ini bering.",
    "expectedSql": "cat logs/old.log",
    "expectedBash": "cat logs/old.log",
    "hint": "cat logs/old.log buyrug'ini bering.",
    "tags": [
      "CAT",
      "OLD_LOG"
    ],
    "solutions": [
      "cat logs/old.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • cat old.log",
    "flagAnatomy": {
      "command": "cat logs/old.log",
      "flags": []
    }
  },
  {
    "id": 60,
    "title": "Sektor 4 Xulosasi: Ishchi Papkani Tasdiqlash",
    "story": "Katalog manzilini tekshiring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "VERIFICATION"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 61,
    "title": "Cleanup.sh Skript Kodini O'qish (cat cleanup.sh)",
    "story": "Darslik 5-sahifasi: Foydalanuvchidan tasdiq so'rab o'chiruvchi cleanup.sh ni o'qing.",
    "taskUz": "<code>cat cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "cat cleanup.sh",
    "expectedBash": "cat cleanup.sh",
    "hint": "cat cleanup.sh buyrug'ini bering.",
    "tags": [
      "CAT",
      "CLEANUP_SH"
    ],
    "solutions": [
      "cat cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • cat cleanup.sh",
    "flagAnatomy": {
      "command": "cat cleanup.sh",
      "flags": []
    }
  },
  {
    "id": 62,
    "title": "Cleanup.sh Skriptiga Ijro Huquqini Berish",
    "story": "chmod +x orqali skriptni bajariladigan qiling.",
    "taskUz": "<code>chmod +x cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x cleanup.sh",
    "expectedBash": "chmod +x cleanup.sh",
    "hint": "chmod +x cleanup.sh buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "CLEANUP"
    ],
    "solutions": [
      "chmod +x cleanup.sh",
      "chmod 755 cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • chmod cleanup.sh",
    "flagAnatomy": {
      "command": "chmod +x cleanup.sh",
      "flags": [
        {
          "flag": "+x",
          "name": "Ijro huquqi",
          "syntaxPos": "Fayldan oldin",
          "purpose": "Skriptni to'g'ridan-to'g'ri chaqirishga ruxsat beradi.",
          "withoutRisk": "⚠️ AGAR +x BO'LMASA: './cleanup.sh' deb chaqirib bo'lmaydi."
        }
      ]
    }
  },
  {
    "id": 63,
    "title": "Cleanup.sh Skriptini Ishga Tushirish",
    "story": "Darslik 5-sahifasi: Skriptni ishga tushiring.",
    "taskUz": "<code>./cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "./cleanup.sh",
    "expectedBash": "./cleanup.sh",
    "hint": "./cleanup.sh buyrug'ini bering.",
    "tags": [
      "RUN",
      "CLEANUP"
    ],
    "solutions": [
      "./cleanup.sh",
      "bash cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • run cleanup.sh",
    "flagAnatomy": {
      "command": "./cleanup.sh",
      "flags": []
    }
  },
  {
    "id": 64,
    "title": "Bash Bilan Skriptni Ishga Tushirish (bash cleanup.sh)",
    "story": "Ijro huquqi bo'lmaganda ham 'bash' orqali to'g'ridan-to'g'ri ishga tushirish mumkin.",
    "taskUz": "<code>bash cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "bash cleanup.sh",
    "expectedBash": "bash cleanup.sh",
    "hint": "bash cleanup.sh buyrug'ini bering.",
    "tags": [
      "BASH",
      "RUN"
    ],
    "solutions": [
      "bash cleanup.sh",
      "./cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • bash cleanup.sh",
    "flagAnatomy": {
      "command": "bash cleanup.sh",
      "flags": []
    }
  },
  {
    "id": 65,
    "title": "Cleanup.sh dagi read -r -p Buyrug'ini Tahlil Qilish",
    "story": "Darslik 5-sahifasi: Foydalanuvchiga savol beruvchi qatorni toping.",
    "taskUz": "<code>grep 'read -r -p' cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "grep 'read -r -p' cleanup.sh",
    "expectedBash": "grep 'read -r -p' cleanup.sh",
    "hint": "grep 'read -r -p' cleanup.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "READ_PROMPT"
    ],
    "solutions": [
      "grep 'read -r -p' cleanup.sh",
      "grep \"read -r -p\" cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • grep read",
    "flagAnatomy": {
      "command": "grep 'read -r -p' cleanup.sh",
      "flags": [
        {
          "flag": "-r",
          "name": "Xom o'qish (Raw input)",
          "syntaxPos": "read dan so'ng",
          "purpose": "Teskari slesh (\\) belgilarini buzmasdan saqlaydi.",
          "withoutRisk": "⚠️ AGAR -r BO'LMASA: Kiritilgan maxsus belgilar yo'qoladi."
        },
        {
          "flag": "-p",
          "name": "Prompt taklif matni",
          "syntaxPos": "-r dan so'ng",
          "purpose": "Foydalanuvchiga nima kiritish kerakligini ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR -p BO'LMASA: Terminal bo'sh turib qoladi."
        }
      ]
    }
  },
  {
    "id": 66,
    "title": "Find Buyrug'ida -delete Parametrini Tekshirish",
    "story": "Skriptda fayllarni to'g'ridan-to'g'ri o'chiruvchi qatorni ko'ring.",
    "taskUz": "<code>grep -delete cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -delete cleanup.sh",
    "expectedBash": "grep -delete cleanup.sh",
    "hint": "grep -delete cleanup.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "-DELETE"
    ],
    "solutions": [
      "grep -delete cleanup.sh",
      "grep -- \"-delete\" cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • grep -delete",
    "flagAnatomy": {
      "command": "grep -delete cleanup.sh",
      "flags": [
        {
          "flag": "-delete",
          "name": "Atomik o'chirish (Atomic deletion)",
          "syntaxPos": "Find buyrug'ining oxirida",
          "purpose": "Topilgan mos fayllarni xavfsiz o'chiradi.",
          "withoutRisk": "⚠️ AGAR -delete BO'LMASA: Fayllar o'chmaydi va disk to'lib qoladi."
        }
      ]
    }
  },
  {
    "id": 67,
    "title": "Cleanup.sh Sintaksisini Tekshirish (bash -n)",
    "story": "Skriptda sintaktik xato yo'qligini 'bash -n' bilan tekshiring.",
    "taskUz": "<code>bash -n cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n cleanup.sh",
    "expectedBash": "bash -n cleanup.sh",
    "hint": "bash -n cleanup.sh buyrug'ini bering.",
    "tags": [
      "BASH",
      "-N",
      "SYNTAX"
    ],
    "solutions": [
      "bash -n cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • bash -n",
    "flagAnatomy": {
      "command": "bash -n cleanup.sh",
      "flags": [
        {
          "flag": "-n",
          "name": "Sintaksis tekshirish (No execution)",
          "syntaxPos": "bash dan so'ng",
          "purpose": "Skriptdagi buyruqlarni bajarmasdan faqat kod to'g'riligini tekshiradi.",
          "withoutRisk": "⚠️ AGAR -n BO'LMASA: Xatoli skript bajarilib tizim fayllarini buzishi mumkin!"
        }
      ]
    }
  },
  {
    "id": 68,
    "title": "Logs Papkasidagi Qolgan Fayllarni Ko'rish",
    "story": "recent.log fayli saqlanib qolganini tekshiring.",
    "taskUz": "<code>ls -l logs</code> buyrug'ini bering.",
    "expectedSql": "ls -l logs",
    "expectedBash": "ls -l logs",
    "hint": "ls -l logs buyrug'ini bering.",
    "tags": [
      "LS",
      "LOGS_VERIFY"
    ],
    "solutions": [
      "ls -l logs"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • ls logs verify",
    "flagAnatomy": {
      "command": "ls -l logs",
      "flags": []
    }
  },
  {
    "id": 69,
    "title": "Recent.log Faylining Mavjudligini Tekshirish (-f)",
    "story": "Fayl mavjudligini test buyrug'i bilan tekshiring.",
    "taskUz": "<code>test -f logs/recent.log && echo 'EXISTS'</code> buyrug'ini bering.",
    "expectedSql": "test -f logs/recent.log && echo 'EXISTS'",
    "expectedBash": "test -f logs/recent.log && echo 'EXISTS'",
    "hint": "test -f logs/recent.log && echo 'EXISTS' buyrug'ini bering.",
    "tags": [
      "TEST",
      "-F",
      "EXISTS"
    ],
    "solutions": [
      "test -f logs/recent.log && echo 'EXISTS'",
      "test -f logs/recent.log && echo EXISTS"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • test -f",
    "flagAnatomy": {
      "command": "test -f logs/recent.log && echo 'EXISTS'",
      "flags": [
        {
          "flag": "-f",
          "name": "Oddiy fayl mavjudligi (File exists)",
          "syntaxPos": "test dan so'ng",
          "purpose": "Yo'l oddiy faylga tegishli ekanini tekshiradi.",
          "withoutRisk": "⚠️ AGAR -f BO'LMASA: Fayl yo'qligi tekshirilmasdan xato yuz beradi."
        }
      ]
    }
  },
  {
    "id": 70,
    "title": "Eski Fayllar O'chirilganini Tasdiqlash",
    "story": "old.log fayli endi yo'qligini tekshiring.",
    "taskUz": "<code>ls logs/old.log 2>/dev/null || echo 'DELETED'</code> buyrug'ini bering.",
    "expectedSql": "ls logs/old.log 2>/dev/null || echo 'DELETED'",
    "expectedBash": "ls logs/old.log 2>/dev/null || echo 'DELETED'",
    "hint": "ls logs/old.log 2>/dev/null || echo 'DELETED' buyrug'ini bering.",
    "tags": [
      "LS",
      "DELETED_CHECK"
    ],
    "solutions": [
      "ls logs/old.log 2>/dev/null || echo 'DELETED'",
      "ls logs/old.log 2>/dev/null || echo DELETED"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "S04 Task 1 • verify deleted",
    "flagAnatomy": {
      "command": "ls logs/old.log 2>/dev/null || echo 'DELETED'",
      "flags": [
        {
          "flag": "2>/dev/null",
          "name": "Xatolik oqimini yashirish (Stderr redirect)",
          "syntaxPos": "Buyruq oxirida",
          "purpose": "Xatolik xabarlarini qora tuynuk (/dev/null) ga yo'naltiradi.",
          "withoutRisk": "⚠️ AGAR 2>/dev/null BO'LMASA: Ekranga keraksiz 'No such file' xatosi chiqadi."
        }
      ]
    }
  },
  {
    "id": 71,
    "title": "Chiqish Statusini Tekshirish",
    "story": "Muvaffaqiyatni tasdiqlang.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "echo $?' buyrug'ini bering.",
    "tags": [
      "ECHO",
      "STATUS"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 72,
    "title": "Cleanup.sh Hajmini Baytlarda Ko'rish",
    "story": "Skript hajmini aniqlash uchun stat buyrug'idan foydalaning.",
    "taskUz": "<code>stat -c '%s' cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "stat -c '%s' cleanup.sh",
    "expectedBash": "stat -c '%s' cleanup.sh",
    "hint": "stat -c '%s' cleanup.sh buyrug'ini bering.",
    "tags": [
      "STAT",
      "SIZE"
    ],
    "solutions": [
      "stat -c '%s' cleanup.sh",
      "stat -c \"%s\" cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • stat size",
    "flagAnatomy": {
      "command": "stat -c '%s' cleanup.sh",
      "flags": []
    }
  },
  {
    "id": 73,
    "title": "Barcha Skriptlarni Ro'yxatlash",
    "story": "Katalogdagi .sh skriptlarini ko'ring.",
    "taskUz": "<code>ls -l *.sh</code> buyrug'ini bering.",
    "expectedSql": "ls -l *.sh",
    "expectedBash": "ls -l *.sh",
    "hint": "ls -l *.sh buyrug'ini bering.",
    "tags": [
      "LS",
      "*.SH"
    ],
    "solutions": [
      "ls -l *.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • ls sh",
    "flagAnatomy": {
      "command": "ls -l *.sh",
      "flags": []
    }
  },
  {
    "id": 74,
    "title": "Cleanup.sh Birinchi 2 Qatorini O'qish",
    "story": "Shebang qatorini ko'ring.",
    "taskUz": "<code>head -n 2 cleanup.sh</code> buyrug'ini bering.",
    "expectedSql": "head -n 2 cleanup.sh",
    "expectedBash": "head -n 2 cleanup.sh",
    "hint": "head -n 2 cleanup.sh buyrug'ini bering.",
    "tags": [
      "HEAD",
      "SHEBANG"
    ],
    "solutions": [
      "head -n 2 cleanup.sh",
      "head -2 cleanup.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • head shebang",
    "flagAnatomy": {
      "command": "head -n 2 cleanup.sh",
      "flags": []
    }
  },
  {
    "id": 75,
    "title": "Sektor 5 Xulosasi: Ishchi Katalogni Tekshirish",
    "story": "Manzilni tasdiqlang.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "VERIFICATION"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S04 Task 1 • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 76,
    "title": "Urls.txt Fayli Tarkibini Ko'rish",
    "story": "Darslik 6-sahifasi: Yuklanishi kerak bo'lgan URL lar ro'yxatini ko'ring.",
    "taskUz": "<code>cat urls.txt</code> buyrug'ini bering.",
    "expectedSql": "cat urls.txt",
    "expectedBash": "cat urls.txt",
    "hint": "cat urls.txt buyrug'ini bering.",
    "tags": [
      "CAT",
      "URLS_TXT"
    ],
    "solutions": [
      "cat urls.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • cat urls.txt",
    "flagAnatomy": {
      "command": "cat urls.txt",
      "flags": []
    }
  },
  {
    "id": 77,
    "title": "Download.sh Skript Kodini O'rganish",
    "story": "Darslik 6-sahifasi: Tarmoq xatolariga bardoshli download.sh skriptini o'qing.",
    "taskUz": "<code>cat download.sh</code> buyrug'ini bering.",
    "expectedSql": "cat download.sh",
    "expectedBash": "cat download.sh",
    "hint": "cat download.sh buyrug'ini bering.",
    "tags": [
      "CAT",
      "DOWNLOAD_SH"
    ],
    "solutions": [
      "cat download.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • cat download.sh",
    "flagAnatomy": {
      "command": "cat download.sh",
      "flags": []
    }
  },
  {
    "id": 78,
    "title": "Download.sh Skriptiga Ijro Huquqini Berish",
    "story": "chmod +x orqali skriptni bajariladigan qiling.",
    "taskUz": "<code>chmod +x download.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x download.sh",
    "expectedBash": "chmod +x download.sh",
    "hint": "chmod +x download.sh buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "DOWNLOAD"
    ],
    "solutions": [
      "chmod +x download.sh",
      "chmod 755 download.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • chmod download.sh",
    "flagAnatomy": {
      "command": "chmod +x download.sh",
      "flags": []
    }
  },
  {
    "id": 79,
    "title": "Download.sh Skriptini urls.txt Bilan Ishga Tushirish",
    "story": "Darslik 7-sahifasi: URL ro'yxatini uzatib yuklash jarayonini boshlang.",
    "taskUz": "<code>./download.sh urls.txt</code> buyrug'ini bering.",
    "expectedSql": "./download.sh urls.txt",
    "expectedBash": "./download.sh urls.txt",
    "hint": "./download.sh urls.txt buyrug'ini bering.",
    "tags": [
      "RUN",
      "DOWNLOAD",
      "URLS"
    ],
    "solutions": [
      "./download.sh urls.txt",
      "bash download.sh urls.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • run download.sh",
    "flagAnatomy": {
      "command": "./download.sh urls.txt",
      "flags": []
    }
  },
  {
    "id": 80,
    "title": "Curl Buyrug'idagi -f (--fail) Bayrog'ini Tekshirish",
    "story": "Darslik 7-sahifasi: Server 404 yoki 500 berganda xato kod qaytaruvchi bayroqni toping.",
    "taskUz": "<code>grep -- '-fLsS' download.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -- '-fLsS' download.sh",
    "expectedBash": "grep -- '-fLsS' download.sh",
    "hint": "grep -- '-fLsS' download.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "CURL_FLAGS"
    ],
    "solutions": [
      "grep -- '-fLsS' download.sh",
      "grep -fLsS download.sh",
      "grep fLsS download.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S04 Task 2 • grep curl flags",
    "flagAnatomy": {
      "command": "grep -- '-fLsS' download.sh",
      "flags": [
        {
          "flag": "-f",
          "name": "Server xatolarida xato kodi qaytarish (Fail silently)",
          "syntaxPos": "curl dan so'ng",
          "purpose": "HTTP 404/500 xatolarida faylga xato sahifasini yozmasdan exit kodi != 0 beradi.",
          "withoutRisk": "⚠️ AGAR -f BO'LMASA: 404 xato sahifasi yuklanib, skript uni muvaffaqiyatli fayl deb o'ylaydi!"
        },
        {
          "flag": "-L",
          "name": "Qayta yo'naltirishga ergashish (Location)",
          "syntaxPos": "-f yonida",
          "purpose": "HTTP 301/302 qayta yo'naltirish bo'lsa yangi manzilga o'tadi.",
          "withoutRisk": "⚠️ AGAR -L BO'LMASA: Haqiqiy fayl yuklanmay, 0 baytli bo'sh redirect qoladi!"
        },
        {
          "flag": "-s",
          "name": "Jim rejim (Silent)",
          "syntaxPos": "-L yonida",
          "purpose": "Yuklanish foizlarini yashirib loglarni toza saqlaydi.",
          "withoutRisk": "⚠️ AGAR -s BO'LMASA: Terminal har soniya keraksiz foizlar bilan to'ladi."
        },
        {
          "flag": "-S",
          "name": "Xatolikni ko'rsatish (Show error)",
          "syntaxPos": "-s yonida",
          "purpose": "-s yoqilgan bo'lsa ham xatolik yuz bersa sababini ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR -S BO'LMASA: Yuklash barbod bo'lsa sababini mutlaqo bilib bo'lmaydi!"
        }
      ]
    }
  },
  {
    "id": 81,
    "title": "Curl --max-time 30 Parametrini Tekshirish",
    "story": "Ulanish qotib qolmasligi uchun 30 soniyalik kutish chegarasini tekshiring.",
    "taskUz": "<code>grep -- '--max-time' download.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -- '--max-time' download.sh",
    "expectedBash": "grep -- '--max-time' download.sh",
    "hint": "grep -- '--max-time' download.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "MAX_TIME"
    ],
    "solutions": [
      "grep -- '--max-time' download.sh",
      "grep max-time download.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • grep max-time",
    "flagAnatomy": {
      "command": "grep -- '--max-time' download.sh",
      "flags": [
        {
          "flag": "--max-time 30",
          "name": "Maksimal vaqt chegarasi (Timeout)",
          "syntaxPos": "curl parametrlarida",
          "purpose": "30 soniyada javob kelmasa ulanishni to'xtatadi.",
          "withoutRisk": "⚠️ AGAR --max-time BO'LMASA: Server javob bermasa butun skript abadiy qotib qoladi!"
        }
      ]
    }
  },
  {
    "id": 82,
    "title": "Curl Bayroqlar Tugash Belgisi (--) Tushunchasi",
    "story": "URL '-' bilan boshlansa xato bo'lmasligi uchun '--' ishlatilganini ko'ring.",
    "taskUz": "<code>grep -- '-- '$url'' download.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -- '-- \"$url\"' download.sh",
    "expectedBash": "grep -- '-- \"$url\"' download.sh",
    "hint": "grep -- '-- '$url'' download.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "END_OF_OPTIONS"
    ],
    "solutions": [
      "grep -- '-- \"$url\"' download.sh",
      "grep \"--\" download.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "S04 Task 2 • end of options",
    "flagAnatomy": {
      "command": "grep -- '-- \"$url\"' download.sh",
      "flags": [
        {
          "flag": "--",
          "name": "Bayroqlar tugash belgisi (End of options marker)",
          "syntaxPos": "URL manzilidan bevosita oldin",
          "purpose": "Keyingi keluvchi qiymatni minus bilan boshlansa ham parametr emas, argument deb qabul qildiradi.",
          "withoutRisk": "⚠️ AGAR -- BO'LMASA: URL '-bad' bo'lsa, curl uni noma'lum bayroq deb to'xtab qoladi!"
        }
      ]
    }
  },
  {
    "id": 83,
    "title": "Yuklangan Fayllar Papkasini Ko'rish (downloads/)",
    "story": "downloads papkasi tarkibini ko'ring.",
    "taskUz": "<code>ls -l downloads</code> buyrug'ini bering.",
    "expectedSql": "ls -l downloads",
    "expectedBash": "ls -l downloads",
    "hint": "ls -l downloads buyrug'ini bering.",
    "tags": [
      "LS",
      "DOWNLOADS"
    ],
    "solutions": [
      "ls -l downloads"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • ls downloads",
    "flagAnatomy": {
      "command": "ls -l downloads",
      "flags": []
    }
  },
  {
    "id": 84,
    "title": "Yuklangan Fayl Hajmini Stat Bilan Ko'rish",
    "story": "stat -c '%s' downloads/file_1 orqali fayl hajmini ko'ring.",
    "taskUz": "<code>stat -c '%s' downloads/file_1</code> buyrug'ini bering.",
    "expectedSql": "stat -c '%s' downloads/file_1",
    "expectedBash": "stat -c '%s' downloads/file_1",
    "hint": "stat -c '%s' downloads/file_1 buyrug'ini bering.",
    "tags": [
      "STAT",
      "DOWNLOADED_SIZE"
    ],
    "solutions": [
      "stat -c '%s' downloads/file_1",
      "stat -c \"%s\" downloads/file_1"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • stat download",
    "flagAnatomy": {
      "command": "stat -c '%s' downloads/file_1",
      "flags": []
    }
  },
  {
    "id": 85,
    "title": "Mavjud Bo'lmagan Fayl Bilan Xato Holatini Sinash",
    "story": "Darslik 7-sahifasi: Yo'q fayl berilganda 'missing or empty' xatosi chiqishi kerak.",
    "taskUz": "<code>./download.sh missing.txt</code> buyrug'ini bering.",
    "expectedSql": "./download.sh missing.txt",
    "expectedBash": "./download.sh missing.txt",
    "hint": "./download.sh missing.txt buyrug'ini bering.",
    "tags": [
      "RUN",
      "MISSING_TEST"
    ],
    "solutions": [
      "./download.sh missing.txt",
      "bash download.sh missing.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • test missing",
    "flagAnatomy": {
      "command": "./download.sh missing.txt",
      "flags": []
    }
  },
  {
    "id": 86,
    "title": "Xatolik Qaytish Statusini Tekshirish (Exit 1)",
    "story": "Oxirgi xatolik statusini ko'ring.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "echo $?' buyrug'ini bering.",
    "tags": [
      "ECHO",
      "STATUS"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 87,
    "title": "Download.sh Sintaksisini Tekshirish",
    "story": "bash -n orqali sintaksis tozaligini tasdiqlang.",
    "taskUz": "<code>bash -n download.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n download.sh",
    "expectedBash": "bash -n download.sh",
    "hint": "bash -n download.sh buyrug'ini bering.",
    "tags": [
      "BASH",
      "-N",
      "SYNTAX"
    ],
    "solutions": [
      "bash -n download.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • bash -n",
    "flagAnatomy": {
      "command": "bash -n download.sh",
      "flags": []
    }
  },
  {
    "id": 88,
    "title": "Yuklangan Fayl Boshini Ko'rish (head)",
    "story": "HTML sahifasi boshlanishini ko'ring.",
    "taskUz": "<code>head -n 5 downloads/file_1</code> buyrug'ini bering.",
    "expectedSql": "head -n 5 downloads/file_1",
    "expectedBash": "head -n 5 downloads/file_1",
    "hint": "head -n 5 downloads/file_1 buyrug'ini bering.",
    "tags": [
      "HEAD",
      "FILE_1"
    ],
    "solutions": [
      "head -n 5 downloads/file_1",
      "head -5 downloads/file_1"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • head file_1",
    "flagAnatomy": {
      "command": "head -n 5 downloads/file_1",
      "flags": []
    }
  },
  {
    "id": 89,
    "title": "Urls.txt Faylidagi Qatorlar Soni",
    "story": "Bo'sh qator o'tkazib yuborilganini tasdiqlang.",
    "taskUz": "<code>wc -l urls.txt</code> buyrug'ini bering.",
    "expectedSql": "wc -l urls.txt",
    "expectedBash": "wc -l urls.txt",
    "hint": "wc -l urls.txt buyrug'ini bering.",
    "tags": [
      "WC",
      "-L",
      "URLS"
    ],
    "solutions": [
      "wc -l urls.txt"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • wc urls",
    "flagAnatomy": {
      "command": "wc -l urls.txt",
      "flags": []
    }
  },
  {
    "id": 90,
    "title": "Sektor 6 Xulosasi: Ishchi Katalogni Tekshirish",
    "story": "Manzilni tasdiqlang.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "VERIFICATION"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S04 Task 2 • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 91,
    "title": "4 Kunlik va 8 Kunlik Log Fayllar Yaratish",
    "story": "Darslik 7-sahifasi: rotate.sh uchun namunaviy loglar tayyorlang.",
    "taskUz": "<code>touch logs/four_days.log logs/eight_days.log</code> buyrug'ini bering.",
    "expectedSql": "touch logs/four_days.log logs/eight_days.log",
    "expectedBash": "touch logs/four_days.log logs/eight_days.log",
    "hint": "touch logs/four_days.log logs/eight_days.log buyrug'ini bering.",
    "tags": [
      "TOUCH",
      "SAMPLE_LOGS"
    ],
    "solutions": [
      "touch logs/four_days.log logs/eight_days.log"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • touch rotate logs",
    "flagAnatomy": {
      "command": "touch logs/four_days.log logs/eight_days.log",
      "flags": []
    }
  },
  {
    "id": 92,
    "title": "4 Kun Oldingi Vaqtni O'rnatish (touch -d)",
    "story": "four_days.log fayliga 4 kunlik sanani bering.",
    "taskUz": "<code>touch -d '4 days ago' logs/four_days.log</code> buyrug'ini bering.",
    "expectedSql": "touch -d '4 days ago' logs/four_days.log",
    "expectedBash": "touch -d '4 days ago' logs/four_days.log",
    "hint": "touch -d '4 days ago' logs/four_days.log buyrug'ini bering.",
    "tags": [
      "TOUCH",
      "-D",
      "4_DAYS"
    ],
    "solutions": [
      "touch -d '4 days ago' logs/four_days.log",
      "touch -d \"4 days ago\" logs/four_days.log"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • touch -d 4 days",
    "flagAnatomy": {
      "command": "touch -d '4 days ago' logs/four_days.log",
      "flags": []
    }
  },
  {
    "id": 93,
    "title": "8 Kun Oldingi Vaqtni O'rnatish (touch -d)",
    "story": "eight_days.log fayliga 8 kunlik sanani bering.",
    "taskUz": "<code>touch -d '8 days ago' logs/eight_days.log</code> buyrug'ini bering.",
    "expectedSql": "touch -d '8 days ago' logs/eight_days.log",
    "expectedBash": "touch -d '8 days ago' logs/eight_days.log",
    "hint": "touch -d '8 days ago' logs/eight_days.log buyrug'ini bering.",
    "tags": [
      "TOUCH",
      "-D",
      "8_DAYS"
    ],
    "solutions": [
      "touch -d '8 days ago' logs/eight_days.log",
      "touch -d \"8 days ago\" logs/eight_days.log"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • touch -d 8 days",
    "flagAnatomy": {
      "command": "touch -d '8 days ago' logs/eight_days.log",
      "flags": []
    }
  },
  {
    "id": 94,
    "title": "Rotate.sh Skript Kodini Ko'rish",
    "story": "Darslik 8-sahifasi: NUL baytli qidiruv va gzip siqish skriptini o'qing.",
    "taskUz": "<code>cat rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "cat rotate.sh",
    "expectedBash": "cat rotate.sh",
    "hint": "cat rotate.sh buyrug'ini bering.",
    "tags": [
      "CAT",
      "ROTATE_SH"
    ],
    "solutions": [
      "cat rotate.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • cat rotate.sh",
    "flagAnatomy": {
      "command": "cat rotate.sh",
      "flags": []
    }
  },
  {
    "id": 95,
    "title": "Find -maxdepth 1 Bayrog'ini Tahlil Qilish",
    "story": "Darslik 8-sahifasi: Faqat joriy katalog bilan cheklovchi -maxdepth 1 ni ko'ring.",
    "taskUz": "<code>grep -- '-maxdepth 1' rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -- '-maxdepth 1' rotate.sh",
    "expectedBash": "grep -- '-maxdepth 1' rotate.sh",
    "hint": "grep -- '-maxdepth 1' rotate.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "MAXDEPTH"
    ],
    "solutions": [
      "grep -- '-maxdepth 1' rotate.sh",
      "grep maxdepth rotate.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "S04 Task 3 • grep maxdepth",
    "flagAnatomy": {
      "command": "grep -- '-maxdepth 1' rotate.sh",
      "flags": [
        {
          "flag": "-maxdepth 1",
          "name": "Maksimal qidiruv chuqurligi",
          "syntaxPos": "Katalog yo'lidan so'ng",
          "purpose": "Qidiruvni 1-darajali joriy papka bilan cheklaydi, ichki papkalar ichiga kirmaydi.",
          "withoutRisk": "⚠️ AGAR -maxdepth 1 BO'LMASA: Barcha ichki papkalardagi fayllar ham siqilib/ko'chib ketadi!"
        }
      ]
    }
  },
  {
    "id": 96,
    "title": "Find -print0 Bayrog'ini Tekshirish",
    "story": "Fayllarni NUL (\\0) bayt bilan ajratib chiqaruvchi bayroqni toping.",
    "taskUz": "<code>grep -- '-print0' rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -- '-print0' rotate.sh",
    "expectedBash": "grep -- '-print0' rotate.sh",
    "hint": "grep -- '-print0' rotate.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "PRINT0"
    ],
    "solutions": [
      "grep -- '-print0' rotate.sh",
      "grep print0 rotate.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "S04 Task 3 • grep print0",
    "flagAnatomy": {
      "command": "grep -- '-print0' rotate.sh",
      "flags": [
        {
          "flag": "-print0",
          "name": "NUL bayt ajratgich (Null-delimiter)",
          "syntaxPos": "find buyrug'i oxirida",
          "purpose": "Fayl nomlarini probellar va yangi qatorlardan himoyalagan holda xavfsiz uzatadi.",
          "withoutRisk": "⚠️ AGAR -print0 BO'LMASA: Nomi probelli fayllar ikkiga bo'linib buziladi!"
        }
      ]
    }
  },
  {
    "id": 97,
    "title": "Gzip -- Bayrog'i Xavfsizligini Tekshirish",
    "story": "Minus bilan boshlangan fayllar xato bermasligi uchun 'gzip --' ishlatilganini ko'ring.",
    "taskUz": "<code>grep 'gzip --' rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "grep 'gzip --' rotate.sh",
    "expectedBash": "grep 'gzip --' rotate.sh",
    "hint": "grep 'gzip --' rotate.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "GZIP_SAFE"
    ],
    "solutions": [
      "grep 'gzip --' rotate.sh",
      "grep gzip rotate.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • grep gzip",
    "flagAnatomy": {
      "command": "grep 'gzip --' rotate.sh",
      "flags": [
        {
          "flag": "gzip --",
          "name": "Bayroqlar tugash belgisi",
          "syntaxPos": "Fayldan oldin",
          "purpose": "Minusli fayl nomlarini xavfsiz siqadi.",
          "withoutRisk": "⚠️ AGAR -- BO'LMASA: Fayl '-fayl.log' bo'lsa gzip uni buyruq deb tushunib xato beradi!"
        }
      ]
    }
  },
  {
    "id": 98,
    "title": "Rotate.sh Skriptiga Ijro Huquqini Berish",
    "story": "chmod +x orqali skriptni bajariladigan qiling.",
    "taskUz": "<code>chmod +x rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x rotate.sh",
    "expectedBash": "chmod +x rotate.sh",
    "hint": "chmod +x rotate.sh buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "ROTATE"
    ],
    "solutions": [
      "chmod +x rotate.sh",
      "chmod 755 rotate.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • chmod rotate.sh",
    "flagAnatomy": {
      "command": "chmod +x rotate.sh",
      "flags": []
    }
  },
  {
    "id": 99,
    "title": "Rotate.sh Skriptini Ishga Tushirish (logs backup)",
    "story": "Darslik 8-sahifasi: Loglarni siqish va ko'chirishni boshlang.",
    "taskUz": "<code>./rotate.sh logs backup</code> buyrug'ini bering.",
    "expectedSql": "./rotate.sh logs backup",
    "expectedBash": "./rotate.sh logs backup",
    "hint": "./rotate.sh logs backup buyrug'ini bering.",
    "tags": [
      "RUN",
      "ROTATE_LOGS"
    ],
    "solutions": [
      "./rotate.sh logs backup",
      "bash rotate.sh logs backup"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • run rotate.sh",
    "flagAnatomy": {
      "command": "./rotate.sh logs backup",
      "flags": []
    }
  },
  {
    "id": 100,
    "title": "Siqilgan Loglarni Ko'rish (.gz)",
    "story": "logs papkasidagi .gz fayllarni ko'ring.",
    "taskUz": "<code>ls -l logs/*.gz</code> buyrug'ini bering.",
    "expectedSql": "ls -l logs/*.gz",
    "expectedBash": "ls -l logs/*.gz",
    "hint": "ls -l logs/*.gz buyrug'ini bering.",
    "tags": [
      "LS",
      "GZ_FILES"
    ],
    "solutions": [
      "ls -l logs/*.gz"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • ls gz",
    "flagAnatomy": {
      "command": "ls -l logs/*.gz",
      "flags": []
    }
  }
];
