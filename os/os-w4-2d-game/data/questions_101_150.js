// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — W4 QUESTIONS_101_150.JS
// ============================================================================

window.QUESTIONS_101_150_W4 = [
  {
    "id": 101,
    "title": "Backup Papkasiga Ko'chgan Arxivni Ko'rish",
    "story": "8 kunlik log backup papkasiga o'tganini tekshiring.",
    "taskUz": "<code>ls -l backup</code> buyrug'ini bering.",
    "expectedSql": "ls -l backup",
    "expectedBash": "ls -l backup",
    "hint": "ls -l backup buyrug'ini bering.",
    "tags": [
      "LS",
      "BACKUP_DIR"
    ],
    "solutions": [
      "ls -l backup"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • ls backup",
    "flagAnatomy": {
      "command": "ls -l backup",
      "flags": []
    }
  },
  {
    "id": 102,
    "title": "Rotate.sh Sintaksisini Tekshirish",
    "story": "bash -n orqali sintaksisni tasdiqlang.",
    "taskUz": "<code>bash -n rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n rotate.sh",
    "expectedBash": "bash -n rotate.sh",
    "hint": "bash -n rotate.sh buyrug'ini bering.",
    "tags": [
      "BASH",
      "-N",
      "ROTATE"
    ],
    "solutions": [
      "bash -n rotate.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • bash -n rotate",
    "flagAnatomy": {
      "command": "bash -n rotate.sh",
      "flags": []
    }
  },
  {
    "id": 103,
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
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 104,
    "title": "Rotate.sh Skript Hajmini Ko'rish",
    "story": "Rotate.sh skriptining hajmini baytlarda ko'ring.",
    "taskUz": "<code>stat -c '%s' rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "stat -c '%s' rotate.sh",
    "expectedBash": "stat -c '%s' rotate.sh",
    "hint": "stat -c '%s' rotate.sh buyrug'ini bering.",
    "tags": [
      "STAT",
      "ROTATE_SIZE"
    ],
    "solutions": [
      "stat -c '%s' rotate.sh",
      "stat -c \"%s\" rotate.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • stat rotate",
    "flagAnatomy": {
      "command": "stat -c '%s' rotate.sh",
      "flags": []
    }
  },
  {
    "id": 105,
    "title": "Sektor 7 Xulosasi: Ishchi Papkani Tasdiqlash",
    "story": "Manzilni tekshiring.",
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
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S04 Task 3 • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 106,
    "title": "Rotation_report.txt Hisobotini O'qish",
    "story": "Darslik 8-sahifasi: Avtomatik yaratilgan hisobot faylini o'qing.",
    "taskUz": "<code>cat logs/rotation_report.txt</code> buyrug'ini bering.",
    "expectedSql": "cat logs/rotation_report.txt",
    "expectedBash": "cat logs/rotation_report.txt",
    "hint": "cat logs/rotation_report.txt buyrug'ini bering.",
    "tags": [
      "CAT",
      "ROTATION_REPORT"
    ],
    "solutions": [
      "cat logs/rotation_report.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • cat report",
    "flagAnatomy": {
      "command": "cat logs/rotation_report.txt",
      "flags": []
    }
  },
  {
    "id": 107,
    "title": "Process Substitution (< < Konstruktsiyasini Tahlil Qilish",
    "story": "Darslik 9-sahifasi: Subshell o'zgaruvchilari yo'qolmasligi uchun ishlatilgan < <(find ...) ni ko'ring.",
    "taskUz": "<code>grep '< <(' rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "grep '< <(' rotate.sh",
    "expectedBash": "grep '< <(' rotate.sh",
    "hint": "grep '< <(' rotate.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "PROCESS_SUBSTITUTION"
    ],
    "solutions": [
      "grep '< <(' rotate.sh",
      "grep \"< <(\" rotate.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S04 Task 3 • process substitution",
    "flagAnatomy": {
      "command": "grep '< <(' rotate.sh",
      "flags": [
        {
          "flag": "< <(cmd)",
          "name": "Jarayon almashtirish (Process substitution)",
          "syntaxPos": "while tsikli oxirida",
          "purpose": "Tsikl asosiy shell sessiyasida bajariladi va tsikl ichidagi massiv (array) o'zgaruvchilari yo'qolib ketmaydi.",
          "withoutRisk": "⚠️ AGAR ODDIY QUWUR (cmd | while) ISHLATILSA: Tsikl subshell da bajarilib, barcha hisoblangan massivlar tsikl tugashi bilan 0 ga aylanadi!"
        }
      ]
    }
  },
  {
    "id": 108,
    "title": "Read -d '' NUL Ajratgichini Tekshirish",
    "story": "NUL bayt bilan o'qish qatorini ko'ring.",
    "taskUz": "<code>grep 'read -r -d ''' rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "grep \"read -r -d ''\" rotate.sh",
    "expectedBash": "grep \"read -r -d ''\" rotate.sh",
    "hint": "grep 'read -r -d ''' rotate.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "READ_NUL"
    ],
    "solutions": [
      "grep \"read -r -d ''\" rotate.sh",
      "grep 'read -r -d' rotate.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • O'rta",
    "source": "S04 Task 3 • read -d NUL",
    "flagAnatomy": {
      "command": "grep \"read -r -d ''\" rotate.sh",
      "flags": []
    }
  },
  {
    "id": 109,
    "title": "Mv Buyrug'idagi Xavfsizlik Belgisini Tekshirish",
    "story": "Fayllarni zaxira papkaga ko'chirish qatorini ko'ring.",
    "taskUz": "<code>grep 'mv --' rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "grep 'mv --' rotate.sh",
    "expectedBash": "grep 'mv --' rotate.sh",
    "hint": "grep 'mv --' rotate.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "MV_SAFE"
    ],
    "solutions": [
      "grep 'mv --' rotate.sh",
      "grep mv rotate.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • mv safe",
    "flagAnatomy": {
      "command": "grep 'mv --' rotate.sh",
      "flags": []
    }
  },
  {
    "id": 110,
    "title": "Basename Buyrug'i Vazifasini Tekshirish",
    "story": "To'liq yo'ldan faqat fayl nomini ajratuvchi qatorni toping.",
    "taskUz": "<code>grep basename rotate.sh</code> buyrug'ini bering.",
    "expectedSql": "grep basename rotate.sh",
    "expectedBash": "grep basename rotate.sh",
    "hint": "grep basename rotate.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "BASENAME"
    ],
    "solutions": [
      "grep basename rotate.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • basename",
    "flagAnatomy": {
      "command": "grep basename rotate.sh",
      "flags": []
    }
  },
  {
    "id": 111,
    "title": "Logs Papkasini Qayta Tekshirish",
    "story": "Logs papkasi tarkibini yana bir bor ko'ring.",
    "taskUz": "<code>ls -l logs</code> buyrug'ini bering.",
    "expectedSql": "ls -l logs",
    "expectedBash": "ls -l logs",
    "hint": "ls -l logs buyrug'ini bering.",
    "tags": [
      "LS",
      "LOGS"
    ],
    "solutions": [
      "ls -l logs"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • ls logs",
    "flagAnatomy": {
      "command": "ls -l logs",
      "flags": []
    }
  },
  {
    "id": 112,
    "title": "Backup Papkasini Qayta Tekshirish",
    "story": "Backup papkasidagi arxivlangan fayllarni ko'ring.",
    "taskUz": "<code>ls -l backup</code> buyrug'ini bering.",
    "expectedSql": "ls -l backup",
    "expectedBash": "ls -l backup",
    "hint": "ls -l backup buyrug'ini bering.",
    "tags": [
      "LS",
      "BACKUP"
    ],
    "solutions": [
      "ls -l backup"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • ls backup",
    "flagAnatomy": {
      "command": "ls -l backup",
      "flags": []
    }
  },
  {
    "id": 113,
    "title": "Rotation_report.txt Fayl Hajmini Ko'rish",
    "story": "Hisobot faylining hajmini ko'rish uchun stat buyrug'idan foydalaning.",
    "taskUz": "<code>stat -c '%s' logs/rotation_report.txt</code> buyrug'ini bering.",
    "expectedSql": "stat -c '%s' logs/rotation_report.txt",
    "expectedBash": "stat -c '%s' logs/rotation_report.txt",
    "hint": "stat -c '%s' logs/rotation_report.txt buyrug'ini bering.",
    "tags": [
      "STAT",
      "REPORT_SIZE"
    ],
    "solutions": [
      "stat -c '%s' logs/rotation_report.txt",
      "stat -c \"%s\" logs/rotation_report.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • stat report",
    "flagAnatomy": {
      "command": "stat -c '%s' logs/rotation_report.txt",
      "flags": []
    }
  },
  {
    "id": 114,
    "title": "Argumentsiz Xato Holatini Sinash",
    "story": "Darslik 8-sahifasi: Parametrsiz chaqirilganda Usage xatosi chiqishi kerak.",
    "taskUz": "<code>./rotate.sh</code> buyrug'ini argumentlarsiz bering.",
    "expectedSql": "./rotate.sh",
    "expectedBash": "./rotate.sh",
    "hint": "./rotate.sh buyrug'ini bering.",
    "tags": [
      "RUN",
      "USAGE_ERROR"
    ],
    "solutions": [
      "./rotate.sh",
      "bash rotate.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • rotate usage",
    "flagAnatomy": {
      "command": "./rotate.sh",
      "flags": []
    }
  },
  {
    "id": 115,
    "title": "Xatolik Qaytish Statusini Tekshirish",
    "story": "echo $? orqali 1 kodini tasdiqlang.",
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
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 116,
    "title": "Takroriy Zaxiralashni Sinash",
    "story": "Hech qanday yangi eskirgan fayl yo'qligini tekshirish uchun skriptni qayta ishga tushiring.",
    "taskUz": "<code>./rotate.sh logs backup</code> buyrug'ini bering.",
    "expectedSql": "./rotate.sh logs backup",
    "expectedBash": "./rotate.sh logs backup",
    "hint": "./rotate.sh logs backup buyrug'ini bering.",
    "tags": [
      "RUN",
      "SECOND_RUN"
    ],
    "solutions": [
      "./rotate.sh logs backup",
      "bash rotate.sh logs backup"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • second run",
    "flagAnatomy": {
      "command": "./rotate.sh logs backup",
      "flags": []
    }
  },
  {
    "id": 117,
    "title": "Yangi Hisobotni O'qish",
    "story": "Takroriy ishga tushirishdan keyingi hisobotni ko'ring.",
    "taskUz": "<code>cat logs/rotation_report.txt</code> buyrug'ini bering.",
    "expectedSql": "cat logs/rotation_report.txt",
    "expectedBash": "cat logs/rotation_report.txt",
    "hint": "cat logs/rotation_report.txt buyrug'ini bering.",
    "tags": [
      "CAT",
      "REPORT"
    ],
    "solutions": [
      "cat logs/rotation_report.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • cat report 2",
    "flagAnatomy": {
      "command": "cat logs/rotation_report.txt",
      "flags": []
    }
  },
  {
    "id": 118,
    "title": "Gzip Versiyasini Tekshirish",
    "story": "Tizimdagi gzip arxivatorining versiyasini tekshiring.",
    "taskUz": "<code>gzip --version</code> buyrug'ini bering.",
    "expectedSql": "gzip --version",
    "expectedBash": "gzip --version",
    "hint": "gzip --version buyrug'ini bering.",
    "tags": [
      "GZIP",
      "--VERSION"
    ],
    "solutions": [
      "gzip --version"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • gzip version",
    "flagAnatomy": {
      "command": "gzip --version",
      "flags": []
    }
  },
  {
    "id": 119,
    "title": "Qaytish Statusini Tasdiqlash",
    "story": "Gzip buyrug'ining chiqish holatini tekshiring.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "echo $? buyrug'ini bering.",
    "tags": [
      "ECHO",
      "STATUS"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 120,
    "title": "Sektor 8 Xulosasi: Ishchi Papkani Tasdiqlash",
    "story": "Manzilni tekshiring.",
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
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S04 Task 3 • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 121,
    "title": "Disk_check.sh Skript Kodini O'qish",
    "story": "Darslik 9-sahifasi: Disk to'lib qolishini nazorat qiluvchi skriptni o'qing.",
    "taskUz": "<code>cat disk_check.sh</code> buyrug'ini bering.",
    "expectedSql": "cat disk_check.sh",
    "expectedBash": "cat disk_check.sh",
    "hint": "cat disk_check.sh buyrug'ini bering.",
    "tags": [
      "CAT",
      "DISK_CHECK"
    ],
    "solutions": [
      "cat disk_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 4 • cat disk_check.sh",
    "flagAnatomy": {
      "command": "cat disk_check.sh",
      "flags": []
    }
  },
  {
    "id": 122,
    "title": "Df -P POSIX Formatini Tahlil Qilish",
    "story": "Darslik 10-sahifasi: Disk ma'lumotlarini bitta satrga chiqaruvchi df -P / buyrug'ini bering.",
    "taskUz": "<code>df -P /</code> buyrug'ini bering.",
    "expectedSql": "df -P /",
    "expectedBash": "df -P /",
    "hint": "df -P / buyrug'ini bering.",
    "tags": [
      "DF",
      "-P",
      "POSIX"
    ],
    "solutions": [
      "df -P /"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 4 • df -P",
    "flagAnatomy": {
      "command": "df -P /",
      "flags": [
        {
          "flag": "-P",
          "name": "POSIX standart chiqish formati",
          "syntaxPos": "df dan so'ng",
          "purpose": "Har bir bo'limni aniq 1 qatorda chiqaradi (uzun nomli fayl tizimlarida satr ikkiga bo'linib ketmaydi).",
          "withoutRisk": "⚠️ AGAR -P BO'LMASA: Uzun disk nomlarida chiqish 2 satrga bo'linadi va awk 'NR==2 {print $5}' foiz o'rniga bo'sh satr olib xatoga uchraydi!"
        }
      ]
    }
  },
  {
    "id": 123,
    "title": "Awk Bilan 5-Ustun Foizini Ajratib Olish",
    "story": "Darslik 9-sahifasi: df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}' quvurini bering.",
    "taskUz": "<code>df -P / | awk 'NR==2 {gsub(/%/, ''); print $5}'</code> buyrug'ini bering.",
    "expectedSql": "df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'",
    "expectedBash": "df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'",
    "hint": "df -P / | awk 'NR==2 {gsub(/%/, ''); print $5}' buyrug'ini bering.",
    "tags": [
      "DF",
      "AWK",
      "PERCENT"
    ],
    "solutions": [
      "df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S04 Task 4 • df awk",
    "flagAnatomy": {
      "command": "df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'",
      "flags": []
    }
  },
  {
    "id": 124,
    "title": "Disk_check.sh Skriptiga Ijro Huquqini Berish",
    "story": "chmod +x orqali skriptni bajariladigan qiling.",
    "taskUz": "<code>chmod +x disk_check.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x disk_check.sh",
    "expectedBash": "chmod +x disk_check.sh",
    "hint": "chmod +x disk_check.sh buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "DISK_CHECK"
    ],
    "solutions": [
      "chmod +x disk_check.sh",
      "chmod 755 disk_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 4 • chmod disk_check",
    "flagAnatomy": {
      "command": "chmod +x disk_check.sh",
      "flags": []
    }
  },
  {
    "id": 125,
    "title": "Sukut Bo'yicha Disk Tekshiruvini Ishga Tushirish",
    "story": "Sukut bo'yicha 85% chegarasi bilan tekshiring (normal holat).",
    "taskUz": "<code>./disk_check.sh</code> buyrug'ini bering.",
    "expectedSql": "./disk_check.sh",
    "expectedBash": "./disk_check.sh",
    "hint": "./disk_check.sh buyrug'ini bering.",
    "tags": [
      "RUN",
      "DISK_NORMAL"
    ],
    "solutions": [
      "./disk_check.sh",
      "bash disk_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 4 • run disk_check",
    "flagAnatomy": {
      "command": "./disk_check.sh",
      "flags": []
    }
  },
  {
    "id": 126,
    "title": "Ogohlantirish Shartini Sinash",
    "story": "Darslik 10-sahifasi: 1% chegara berib ALERT yozilishini tekshiring.",
    "taskUz": "<code>./disk_check.sh 1</code> buyrug'ini bering.",
    "expectedSql": "./disk_check.sh 1",
    "expectedBash": "./disk_check.sh 1",
    "hint": "./disk_check.sh 1 buyrug'ini bering.",
    "tags": [
      "RUN",
      "DISK_ALERT"
    ],
    "solutions": [
      "./disk_check.sh 1",
      "bash disk_check.sh 1"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 4 • alert test",
    "flagAnatomy": {
      "command": "./disk_check.sh 1",
      "flags": []
    }
  },
  {
    "id": 127,
    "title": "Yozilgan Disk Ogohlantirish Logini O'qish",
    "story": "cat $HOME/os_seminar4/disk_alert.log orqali xabarni ko'ring.",
    "taskUz": "<code>cat $HOME/os_seminar4/disk_alert.log</code> buyrug'ini bering.",
    "expectedSql": "cat $HOME/os_seminar4/disk_alert.log",
    "expectedBash": "cat $HOME/os_seminar4/disk_alert.log",
    "hint": "cat $HOME/os_seminar4/disk_alert.log buyrug'ini bering.",
    "tags": [
      "CAT",
      "DISK_ALERT_LOG"
    ],
    "solutions": [
      "cat $HOME/os_seminar4/disk_alert.log",
      "cat disk_alert.log"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 4 • cat alert log",
    "flagAnatomy": {
      "command": "cat $HOME/os_seminar4/disk_alert.log",
      "flags": []
    }
  },
  {
    "id": 128,
    "title": "Tee -a Append Bayrog'i Xavfsizligini Tekshirish",
    "story": "Skriptda log tarixini saqlab qoluvchi 'tee -a' ni toping.",
    "taskUz": "<code>grep 'tee -a' disk_check.sh</code> buyrug'ini bering.",
    "expectedSql": "grep 'tee -a' disk_check.sh",
    "expectedBash": "grep 'tee -a' disk_check.sh",
    "hint": "grep 'tee -a' disk_check.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "TEE_APPEND"
    ],
    "solutions": [
      "grep 'tee -a' disk_check.sh",
      "grep tee disk_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 4 • grep tee",
    "flagAnatomy": {
      "command": "grep 'tee -a' disk_check.sh",
      "flags": [
        {
          "flag": "tee -a",
          "name": "Fayl oxiriga qo'shish (Append)",
          "syntaxPos": "tee dan so'ng",
          "purpose": "Mavjud log faylini tozalab yubormasdan, yangi xabarni oxiriga qo'shadi.",
          "withoutRisk": "⚠️ AGAR -a BO'LMASA: Tee faylni tozalab yuboradi (overwrite) va barcha eski ogohlantirishlar tarixi yo'qoladi!"
        }
      ]
    }
  },
  {
    "id": 129,
    "title": "Service_check.sh Skript Kodini O'qish",
    "story": "Darslik 11-sahifasi: Orqa fondagi xizmatlar (services) holatini tekshiruvchi skriptni o'qing.",
    "taskUz": "<code>cat service_check.sh</code> buyrug'ini bering.",
    "expectedSql": "cat service_check.sh",
    "expectedBash": "cat service_check.sh",
    "hint": "cat service_check.sh buyrug'ini bering.",
    "tags": [
      "CAT",
      "SERVICE_CHECK"
    ],
    "solutions": [
      "cat service_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 5 • cat service_check.sh",
    "flagAnatomy": {
      "command": "cat service_check.sh",
      "flags": []
    }
  },
  {
    "id": 130,
    "title": "Service_check.sh Skriptiga Ijro Huquqini Berish",
    "story": "Service_check.sh skriptini ishga tushirish uchun unga ijro huquqini bering.",
    "taskUz": "<code>chmod +x service_check.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x service_check.sh",
    "expectedBash": "chmod +x service_check.sh",
    "hint": "chmod +x service_check.sh buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "SERVICE_CHECK"
    ],
    "solutions": [
      "chmod +x service_check.sh",
      "chmod 755 service_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 5 • chmod service_check",
    "flagAnatomy": {
      "command": "chmod +x service_check.sh",
      "flags": []
    }
  },
  {
    "id": 131,
    "title": "Faol Xizmatni Tekshirish",
    "story": "Darslik 11-sahifasi: cron.service xizmatini tekshiring (OK: cron.service is active).",
    "taskUz": "<code>./service_check.sh cron.service</code> buyrug'ini bering.",
    "expectedSql": "./service_check.sh cron.service",
    "expectedBash": "./service_check.sh cron.service",
    "hint": "./service_check.sh cron.service buyrug'ini bering.",
    "tags": [
      "RUN",
      "CRON_SERVICE"
    ],
    "solutions": [
      "./service_check.sh cron.service",
      "bash service_check.sh cron.service"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 5 • check cron.service",
    "flagAnatomy": {
      "command": "./service_check.sh cron.service",
      "flags": []
    }
  },
  {
    "id": 132,
    "title": "Mavjud Bo'lmagan Xizmatni Tekshirish",
    "story": "Darslik 11-sahifasi: O'rnatilmagan xizmat xatosini tekshiring.",
    "taskUz": "<code>./service_check.sh invented-service.service</code> buyrug'ini bering.",
    "expectedSql": "./service_check.sh invented-service.service",
    "expectedBash": "./service_check.sh invented-service.service",
    "hint": "./service_check.sh invented-service.service buyrug'ini bering.",
    "tags": [
      "RUN",
      "INVENTED_SERVICE"
    ],
    "solutions": [
      "./service_check.sh invented-service.service",
      "bash service_check.sh invented-service.service"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 5 • check invented service",
    "flagAnatomy": {
      "command": "./service_check.sh invented-service.service",
      "flags": []
    }
  },
  {
    "id": 133,
    "title": "Systemctl is-active --quiet Bayrog'ini Tekshirish",
    "story": "Xizmat faolligini ekranga matn chiqarmasdan xavfsiz tekshiruvchi qatorni toping.",
    "taskUz": "<code>grep -- '--quiet' service_check.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -- '--quiet' service_check.sh",
    "expectedBash": "grep -- '--quiet' service_check.sh",
    "hint": "grep -- '--quiet' service_check.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "QUIET"
    ],
    "solutions": [
      "grep -- '--quiet' service_check.sh",
      "grep quiet service_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S04 Task 5 • grep quiet",
    "flagAnatomy": {
      "command": "grep -- '--quiet' service_check.sh",
      "flags": [
        {
          "flag": "--quiet",
          "name": "Jim rejim (Suppress output)",
          "syntaxPos": "is-active dan so'ng",
          "purpose": "Ekranga 'active' deb yozmasdan, faqat exit kodi (0 = faol, 3 = nofaol) qaytaradi.",
          "withoutRisk": "⚠️ AGAR --quiet BO'LMASA: Terminalda keraksiz 'active' so'zi chiqib, skript loglariga xalaqit beradi."
        }
      ]
    }
  },
  {
    "id": 134,
    "title": "Systemctl show --property=LoadState Tahlili",
    "story": "Faqat LoadState xususiyatini ajratib oluvchi qatorni ko'ring.",
    "taskUz": "<code>grep -- '--property=LoadState' service_check.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -- '--property=LoadState' service_check.sh",
    "expectedBash": "grep -- '--property=LoadState' service_check.sh",
    "hint": "grep -- '--property=LoadState' service_check.sh buyrug'ini bering.",
    "tags": [
      "GREP",
      "LOAD_STATE"
    ],
    "solutions": [
      "grep -- '--property=LoadState' service_check.sh",
      "grep LoadState service_check.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S04 Task 5 • grep LoadState",
    "flagAnatomy": {
      "command": "grep -- '--property=LoadState' service_check.sh",
      "flags": [
        {
          "flag": "--property=LoadState --value",
          "name": "Aniq xususiyat va uning toza qiymati",
          "syntaxPos": "systemctl show dan so'ng",
          "purpose": "Barcha yuzlab xususiyatlar ichidan faqat 'LoadState' qiymatini (loaded) chiqaradi.",
          "withoutRisk": "⚠️ AGAR BU BO'LMASA: Systemctl butun boshli butun xizmat xaritasini chiqarib skriptni chalkashtiradi!"
        }
      ]
    }
  },
  {
    "id": 135,
    "title": "Sektor 9 Xulosasi: Ishchi Papkani Tasdiqlash",
    "story": "Manzilni tekshiring.",
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
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S04 Task 5 • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 136,
    "title": "Tick.sh Reja Skriptini Ko'rish",
    "story": "Darslik 12-sahifasi: Har daqiqada vaqt tamg'asini ticks.log ga yozuvchi skriptni o'qing.",
    "taskUz": "<code>cat tick.sh</code> buyrug'ini bering.",
    "expectedSql": "cat tick.sh",
    "expectedBash": "cat tick.sh",
    "hint": "cat tick.sh buyrug'ini bering.",
    "tags": [
      "CAT",
      "TICK_SH"
    ],
    "solutions": [
      "cat tick.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 4 • cat tick.sh",
    "flagAnatomy": {
      "command": "cat tick.sh",
      "flags": []
    }
  },
  {
    "id": 137,
    "title": "Tick.sh Skriptiga Ijro Huquqini Berish",
    "story": "Cron va systemd ishga tushirishi uchun chmod +x bering.",
    "taskUz": "<code>chmod +x tick.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x tick.sh",
    "expectedBash": "chmod +x tick.sh",
    "hint": "chmod +x tick.sh buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "TICK"
    ],
    "solutions": [
      "chmod +x tick.sh",
      "chmod 755 tick.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 4 • chmod tick.sh",
    "flagAnatomy": {
      "command": "chmod +x tick.sh",
      "flags": []
    }
  },
  {
    "id": 138,
    "title": "Crontab Jadvalini Ko'rish",
    "story": "Darslik 12-sahifasi: Foydalanuvchining joriy cron vazifalarini ko'ring.",
    "taskUz": "<code>crontab -l</code> buyrug'ini bering.",
    "expectedSql": "crontab -l",
    "expectedBash": "crontab -l",
    "hint": "crontab -l buyrug'ini bering.",
    "tags": [
      "CRONTAB",
      "-L",
      "LIST"
    ],
    "solutions": [
      "crontab -l"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 4 • crontab -l",
    "flagAnatomy": {
      "command": "crontab -l",
      "flags": [
        {
          "flag": "-l",
          "name": "Jadvalni ko'rish (List crontab)",
          "syntaxPos": "crontab dan so'ng",
          "purpose": "Foydalanuvchining barcha rejalashtirilgan vazifalarini ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR -l O'RNIGA -r YOZILSA: Barcha rejalashtirilgan vazifalar bir zumda ogohlantirishsiz o'chib ketadi (Remove)!"
        }
      ]
    }
  },
  {
    "id": 139,
    "title": "Yangi Cron Vazifasini O'rnatish",
    "story": "Darslik 12-sahifasi: '* * * * * ...' har daqiqalik vazifasini o'rnating.",
    "taskUz": "<code>crontab -e</code> buyrug'ini bering.",
    "expectedSql": "crontab -e",
    "expectedBash": "crontab -e",
    "hint": "crontab -e buyrug'ini bering.",
    "tags": [
      "CRONTAB",
      "-E",
      "INSTALL"
    ],
    "solutions": [
      "crontab -e"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 4 • crontab -e",
    "flagAnatomy": {
      "command": "crontab -e",
      "flags": [
        {
          "flag": "-e",
          "name": "Jadvalni tahrirlash (Edit crontab)",
          "syntaxPos": "crontab dan so'ng",
          "purpose": "Vazifalar jadvalini ochib yangi qator kiritish imkonini beradi.",
          "withoutRisk": "⚠️ AGAR -e BO'LMASA: Quruq crontab buyrug'i terminalda kiritish kutib to'xtab qoladi."
        }
      ]
    }
  },
  {
    "id": 140,
    "title": "Yangi Crontab Jadvalini Tekshirish",
    "story": "Yangi kiritilgan '* * * * * ...' qatorini tasdiqlang.",
    "taskUz": "<code>crontab -l</code> buyrug'ini bering.",
    "expectedSql": "crontab -l",
    "expectedBash": "crontab -l",
    "hint": "crontab -l buyrug'ini bering.",
    "tags": [
      "CRONTAB",
      "VERIFY"
    ],
    "solutions": [
      "crontab -l"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 4 • crontab list verify",
    "flagAnatomy": {
      "command": "crontab -l",
      "flags": []
    }
  },
  {
    "id": 141,
    "title": "Systemd User Service Faylini Ko'rish",
    "story": "Darslik 13-sahifasi: ~/.config/systemd/user/os-seminar-tick.service faylini o'qing.",
    "taskUz": "<code>cat ~/.config/systemd/user/os-seminar-tick.service</code> buyrug'ini bering.",
    "expectedSql": "cat ~/.config/systemd/user/os-seminar-tick.service",
    "expectedBash": "cat ~/.config/systemd/user/os-seminar-tick.service",
    "hint": "cat ~/.config/systemd/user/os-seminar-tick.service buyrug'ini bering.",
    "tags": [
      "CAT",
      "SERVICE_UNIT"
    ],
    "solutions": [
      "cat ~/.config/systemd/user/os-seminar-tick.service",
      "cat $HOME/.config/systemd/user/os-seminar-tick.service"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 5 • cat service unit",
    "flagAnatomy": {
      "command": "cat ~/.config/systemd/user/os-seminar-tick.service",
      "flags": []
    }
  },
  {
    "id": 142,
    "title": "Systemd User Timer Faylini Ko'rish",
    "story": "Darslik 13-sahifasi: OnCalendar=*-*-* *:*:00 belgilangan timer faylini o'qing.",
    "taskUz": "<code>cat ~/.config/systemd/user/os-seminar-tick.timer</code> buyrug'ini bering.",
    "expectedSql": "cat ~/.config/systemd/user/os-seminar-tick.timer",
    "expectedBash": "cat ~/.config/systemd/user/os-seminar-tick.timer",
    "hint": "cat ~/.config/systemd/user/os-seminar-tick.timer buyrug'ini bering.",
    "tags": [
      "CAT",
      "TIMER_UNIT"
    ],
    "solutions": [
      "cat ~/.config/systemd/user/os-seminar-tick.timer",
      "cat $HOME/.config/systemd/user/os-seminar-tick.timer"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 5 • cat timer unit",
    "flagAnatomy": {
      "command": "cat ~/.config/systemd/user/os-seminar-tick.timer",
      "flags": []
    }
  },
  {
    "id": 143,
    "title": "Systemd Konfiguratsiyasini Qayta Yuklash",
    "story": "Darslik 14-sahifasi: Yangi unit fayllarini yuklash uchun daemon-reload bering.",
    "taskUz": "<code>systemctl --user daemon-reload</code> buyrug'ini bering.",
    "expectedSql": "systemctl --user daemon-reload",
    "expectedBash": "systemctl --user daemon-reload",
    "hint": "systemctl --user daemon-reload buyrug'ini bering.",
    "tags": [
      "SYSTEMCTL",
      "DAEMON_RELOAD"
    ],
    "solutions": [
      "systemctl --user daemon-reload"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S04 Part 5 • daemon-reload",
    "flagAnatomy": {
      "command": "systemctl --user daemon-reload",
      "flags": [
        {
          "flag": "--user",
          "name": "Foydalanuvchi darajasi (User session)",
          "syntaxPos": "systemctl dan so'ng",
          "purpose": "Root huquqisiz oddiy foydalanuvchi sessiyasida boshqarishni ta'minlaydi.",
          "withoutRisk": "⚠️ AGAR --user BO'LMASA: Root paroli so'raladi yoki Permission Denied chiqadi!"
        },
        {
          "flag": "daemon-reload",
          "name": "Barcha unit fayllarini qayta skanerlash",
          "syntaxPos": "Subcommand",
          "purpose": "Yangi yaratilgan xizmat va timerni systemd xotirasiga kiritadi.",
          "withoutRisk": "⚠️ AGAR daemon-reload BO'LMASA: Systemd yangi fayllarni mutlaqo ko'rmaydi!"
        }
      ]
    }
  },
  {
    "id": 144,
    "title": "Systemd Timerni Ishga Tushirish",
    "story": "Darslik 14-sahifasi: os-seminar-tick.timer ni faollashtiring.",
    "taskUz": "<code>systemctl --user start os-seminar-tick.timer</code> buyrug'ini bering.",
    "expectedSql": "systemctl --user start os-seminar-tick.timer",
    "expectedBash": "systemctl --user start os-seminar-tick.timer",
    "hint": "systemctl --user start os-seminar-tick.timer buyrug'ini bering.",
    "tags": [
      "SYSTEMCTL",
      "START_TIMER"
    ],
    "solutions": [
      "systemctl --user start os-seminar-tick.timer"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S04 Part 5 • start timer",
    "flagAnatomy": {
      "command": "systemctl --user start os-seminar-tick.timer",
      "flags": []
    }
  },
  {
    "id": 145,
    "title": "Faol Timerlar Ro'yxatini Ko'rish",
    "story": "Darslik 14-sahifasi: Barcha rejalashtirilgan timerlarni ko'ring.",
    "taskUz": "<code>systemctl --user list-timers --all</code> buyrug'ini bering.",
    "expectedSql": "systemctl --user list-timers --all",
    "expectedBash": "systemctl --user list-timers --all",
    "hint": "systemctl --user list-timers --all buyrug'ini bering.",
    "tags": [
      "SYSTEMCTL",
      "LIST_TIMERS",
      "--ALL"
    ],
    "solutions": [
      "systemctl --user list-timers --all",
      "systemctl --user list-timers"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S04 Part 5 • list-timers",
    "flagAnatomy": {
      "command": "systemctl --user list-timers --all",
      "flags": [
        {
          "flag": "--all",
          "name": "Barcha timerlar (All timers)",
          "syntaxPos": "list-timers dan so'ng",
          "purpose": "Nofaol yoki kutilayotgan barcha timerlarni to'liq chiqaradi.",
          "withoutRisk": "⚠️ AGAR --all BO'LMASA: Nofaol bo'lib qolgan timerlar ro'yxatdan tushib qolishi mumkin."
        }
      ]
    }
  },
  {
    "id": 146,
    "title": "Rejalashtirilgan Chiqish Logini O'qish",
    "story": "Darslik 14-sahifasi: tail -n 5 ticks.log orqali vaqt tamg'alarini ko'ring.",
    "taskUz": "<code>tail -n 5 $HOME/os_seminar4/ticks.log</code> buyrug'ini bering.",
    "expectedSql": "tail -n 5 $HOME/os_seminar4/ticks.log",
    "expectedBash": "tail -n 5 $HOME/os_seminar4/ticks.log",
    "hint": "tail -n 5 $HOME/os_seminar4/ticks.log buyrug'ini bering.",
    "tags": [
      "TAIL",
      "TICKS_LOG"
    ],
    "solutions": [
      "tail -n 5 $HOME/os_seminar4/ticks.log",
      "tail -n 5 ticks.log",
      "tail -5 ticks.log"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 5 • tail ticks.log",
    "flagAnatomy": {
      "command": "tail -n 5 $HOME/os_seminar4/ticks.log",
      "flags": []
    }
  },
  {
    "id": 147,
    "title": "Journalctl Bilan Xizmat Jurnalini O'qish",
    "story": "Darslik 14-sahifasi: journalctl --user -u os-seminar-tick.service -n 10 --no-pager buyrug'ini bering.",
    "taskUz": "<code>journalctl --user -u os-seminar-tick.service -n 10 --no-pager</code> buyrug'ini bering.",
    "expectedSql": "journalctl --user -u os-seminar-tick.service -n 10 --no-pager",
    "expectedBash": "journalctl --user -u os-seminar-tick.service -n 10 --no-pager",
    "hint": "journalctl --user -u os-seminar-tick.service -n 10 --no-pager buyrug'ini bering.",
    "tags": [
      "JOURNALCTL",
      "NO_PAGER",
      "SERVICE_LOG"
    ],
    "solutions": [
      "journalctl --user -u os-seminar-tick.service -n 10 --no-pager"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S04 Part 5 • journalctl logs",
    "flagAnatomy": {
      "command": "journalctl --user -u os-seminar-tick.service -n 10 --no-pager",
      "flags": [
        {
          "flag": "-u",
          "name": "Unit filtri (Unit name)",
          "syntaxPos": "journalctl dan so'ng",
          "purpose": "Faqat ko'rsatilgan xizmatga tegishli loglarni saralaydi.",
          "withoutRisk": "⚠️ AGAR -u BO'LMASA: Butun tizimdagi millionlab begona loglar to'kilib ketadi!"
        },
        {
          "flag": "--no-pager",
          "name": "Sahifalashsiz chiqarish (Direct stdout)",
          "syntaxPos": "Buyruq oxirida",
          "purpose": "Loglarni 'less' oynasida to'xtatmasdan to'g'ridan-to'g'ri terminalga chiqaradi.",
          "withoutRisk": "⚠️ AGAR --no-pager BO'LMASA: Skript 'less' interfeysida qotib qoladi va 'q' bosilmaguncha to'xtab turadi!"
        }
      ]
    }
  },
  {
    "id": 148,
    "title": "Timerni Xavfsiz To'xtatish",
    "story": "Laboratoriya yakunida timerni to'xtating.",
    "taskUz": "<code>systemctl --user stop os-seminar-tick.timer</code> buyrug'ini bering.",
    "expectedSql": "systemctl --user stop os-seminar-tick.timer",
    "expectedBash": "systemctl --user stop os-seminar-tick.timer",
    "hint": "systemctl --user stop os-seminar-tick.timer buyrug'ini bering.",
    "tags": [
      "SYSTEMCTL",
      "STOP_TIMER"
    ],
    "solutions": [
      "systemctl --user stop os-seminar-tick.timer"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 5 • stop timer",
    "flagAnatomy": {
      "command": "systemctl --user stop os-seminar-tick.timer",
      "flags": []
    }
  },
  {
    "id": 149,
    "title": "Crontab Jadvalini Tozalash",
    "story": "Test cron qatorini tozalab tizimni dastlabki holatga qaytaring.",
    "taskUz": "<code>crontab -r</code> buyrug'ini bering.",
    "expectedSql": "crontab -r",
    "expectedBash": "crontab -r",
    "hint": "crontab -r buyrug'ini bering.",
    "tags": [
      "CRONTAB",
      "-R",
      "CLEANUP"
    ],
    "solutions": [
      "crontab -r"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Part 5 • crontab -r",
    "flagAnatomy": {
      "command": "crontab -r",
      "flags": [
        {
          "flag": "-r",
          "name": "Jadvalni to'liq o'chirish (Remove)",
          "syntaxPos": "crontab dan so'ng",
          "purpose": "Foydalanuvchining barcha cron vazifalarini tozalaydi.",
          "withoutRisk": "⚠️ AGAR BEIXTIYOR BOSILSA: Barcha vazifalar yo'qoladi, ehtiyotkorlik bilan ishlatish shart!"
        }
      ]
    }
  },
  {
    "id": 150,
    "title": "Bosh Linux Avtomatlashtirish & Rejalashtirish Arxitektori Final Sinovi",
    "story": "Professor Turing olqishlaydi! Barcha 150 ta qat'iy rejimli Bash, fork(), tarmoq va systemd laboratoriya vazifalari 100% bajarildi!",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "VICTORY",
      "CHIEF_ARCHITECT"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S04 Final • Victory PWD",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  }
];
