// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 QUESTIONS 101 TO 150
// ============================================================================

window.QUESTIONS_101_150_W3 = [
  {
    "id": 101,
    "title": "Darajaga Ko'tarish ($((2 ** 3)))",
    "story": "Darslik 10-sahifasi: 2 ning 3-darajasini (kubini) hisoblang.",
    "taskUz": "<code>echo $((2 ** 3))</code> buyrug'ini bering.",
    "expectedSql": "echo $((2 ** 3))",
    "expectedBash": "echo $((2 ** 3))",
    "hint": "`echo $((2 ** 3))` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "MATH",
      "POW"
    ],
    "solutions": [
      "echo $((2 ** 3))",
      "echo $((2**3))"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Section 12 • Math **"
  },
  {
    "id": 102,
    "title": "Age.sh Sintaksisini Tekshirish",
    "story": "<code>bash -n age.sh</code> orqali xatolar yo'qligini tekshiring.",
    "taskUz": "<code>bash -n age.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n age.sh",
    "expectedBash": "bash -n age.sh",
    "hint": "`bash -n age.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "AGE"
    ],
    "solutions": [
      "bash -n age.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Section 20 • Syntax"
  },
  {
    "id": 103,
    "title": "RegEx 4 Xonali Yil Tekshiruvi Tushunchasi",
    "story": "Darslik 9-sahifasi: <code>^[0-9]{4}$</code> qolipi faqat 4 ta raqam kiritilishini kafolatlaydi.",
    "taskUz": "<code>cat age.sh</code> buyrug'ini bering.",
    "expectedSql": "cat age.sh",
    "expectedBash": "cat age.sh",
    "hint": "`cat age.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "REGEX",
      "VALIDATION"
    ],
    "solutions": [
      "cat age.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Activity 6 • Regex Year"
  },
  {
    "id": 104,
    "title": "Read -r -p Bayrog'i Tushunchasi",
    "story": "<code>read -r -p</code> nima uchun kerak? <code>-r</code> backslash larni saqlaydi, <code>-p</code> matn ko'rsatadi.",
    "taskUz": "<code>head -n 6 age.sh</code> buyrug'ini bering.",
    "expectedSql": "head -n 6 age.sh",
    "expectedBash": "head -n 6 age.sh",
    "hint": "`head -n 6 age.sh` buyrug'ini bering.",
    "tags": [
      "HEAD",
      "READ",
      "FLAGS"
    ],
    "solutions": [
      "head -n 6 age.sh",
      "head -6 age.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Activity 6 • Read flags"
  },
  {
    "id": 105,
    "title": "Joriy Katalogni Tekshirish",
    "story": "Joriy Katalogni Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini bering.",
    "tags": [
      "PWD",
      "STATUS",
      "CHECK"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Activity 1 • pwd"
  },
  {
    "id": 106,
    "title": "Classify.sh Qarorlar Skriptini Ko'rish",
    "story": "Darslik 10-sahifasi: Sonlarni oraliqlarga qarab ajratuvchi <code>classify.sh</code> skriptini o'qing.",
    "taskUz": "<code>cat classify.sh</code> buyrug'ini bering.",
    "expectedSql": "cat classify.sh",
    "expectedBash": "cat classify.sh",
    "hint": "`cat classify.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "CLASSIFY",
      "DECISION"
    ],
    "solutions": [
      "cat classify.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 7 • View classify"
  },
  {
    "id": 107,
    "title": "Classify.sh Skriptiga Ruxsat Berish",
    "story": "Classify.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x classify.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x classify.sh",
    "expectedBash": "chmod +x classify.sh",
    "hint": "`chmod +x classify.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "CLASSIFY"
    ],
    "solutions": [
      "chmod +x classify.sh",
      "chmod 755 classify.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 7 • chmod classify"
  },
  {
    "id": 108,
    "title": "O'rtacha Oraliqni Sinash (./classify.sh 25)",
    "story": "Darslik 10-sahifasi: 20 dan 100 gacha oraliqdagi son kiritilganda 'average' chiqadi.",
    "taskUz": "<code>./classify.sh 25</code> buyrug'ini bering.",
    "expectedSql": "./classify.sh 25",
    "expectedBash": "./classify.sh 25",
    "hint": "`./classify.sh 25` buyrug'ini bering.",
    "tags": [
      "RUN",
      "CLASSIFY",
      "AVERAGE"
    ],
    "solutions": [
      "./classify.sh 25",
      "bash classify.sh 25"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 7 • Test 25"
  },
  {
    "id": 109,
    "title": "Kichik Oraliqni Sinash (./classify.sh 5)",
    "story": "10 dan kichik son kiritilganda 'small' chiqadi.",
    "taskUz": "<code>./classify.sh 5</code> buyrug'ini bering.",
    "expectedSql": "./classify.sh 5",
    "expectedBash": "./classify.sh 5",
    "hint": "`./classify.sh 5` buyrug'ini bering.",
    "tags": [
      "RUN",
      "CLASSIFY",
      "SMALL"
    ],
    "solutions": [
      "./classify.sh 5",
      "bash classify.sh 5"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 7 • Test 5"
  },
  {
    "id": 110,
    "title": "Katta Oraliqni Sinash (./classify.sh 105)",
    "story": "100 dan katta son kiritilganda 'large' chiqadi.",
    "taskUz": "<code>./classify.sh 105</code> buyrug'ini bering.",
    "expectedSql": "./classify.sh 105",
    "expectedBash": "./classify.sh 105",
    "hint": "`./classify.sh 105` buyrug'ini bering.",
    "tags": [
      "RUN",
      "CLASSIFY",
      "LARGE"
    ],
    "solutions": [
      "./classify.sh 105",
      "bash classify.sh 105"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 7 • Test 105"
  },
  {
    "id": 111,
    "title": "Oraliqdan Tashqari Sonni Sinash (./classify.sh 15)",
    "story": "10 va 20 orasidagi son kiritilganda 'out of range' chiqadi.",
    "taskUz": "<code>./classify.sh 15</code> buyrug'ini bering.",
    "expectedSql": "./classify.sh 15",
    "expectedBash": "./classify.sh 15",
    "hint": "`./classify.sh 15` buyrug'ini bering.",
    "tags": [
      "RUN",
      "CLASSIFY",
      "OUT_OF_RANGE"
    ],
    "solutions": [
      "./classify.sh 15",
      "bash classify.sh 15"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 7 • Test 15"
  },
  {
    "id": 112,
    "title": "Fayl Sinovlari Skriptini Ko'rish (filecheck.sh)",
    "story": "Darslik 11-12-sahifalari: <code>-e</code>, <code>-f</code>, <code>-s</code> fayl operatorlari bilan ishlovchi skriptni o'qing.",
    "taskUz": "<code>cat filecheck.sh</code> buyrug'ini bering.",
    "expectedSql": "cat filecheck.sh",
    "expectedBash": "cat filecheck.sh",
    "hint": "`cat filecheck.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "FILECHECK",
      "FILE_TESTS"
    ],
    "solutions": [
      "cat filecheck.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 8 • View filecheck"
  },
  {
    "id": 113,
    "title": "Filecheck.sh Skriptiga Ruxsat Berish",
    "story": "Filecheck.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x filecheck.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x filecheck.sh",
    "expectedBash": "chmod +x filecheck.sh",
    "hint": "`chmod +x filecheck.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "FILECHECK"
    ],
    "solutions": [
      "chmod +x filecheck.sh",
      "chmod 755 filecheck.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 8 • chmod filecheck"
  },
  {
    "id": 114,
    "title": "Bo'sh Faylni Tekshirish (./filecheck.sh empty.txt)",
    "story": "Darslik 12-sahifasi: <code>empty.txt</code> tekshirilganda 'The file is empty.' chiqishi kerak.",
    "taskUz": "<code>./filecheck.sh empty.txt</code> buyrug'ini bering.",
    "expectedSql": "./filecheck.sh empty.txt",
    "expectedBash": "./filecheck.sh empty.txt",
    "hint": "`./filecheck.sh empty.txt` buyrug'ini bering.",
    "tags": [
      "RUN",
      "FILECHECK",
      "EMPTY"
    ],
    "solutions": [
      "./filecheck.sh empty.txt",
      "bash filecheck.sh empty.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 8 • Test empty"
  },
  {
    "id": 115,
    "title": "To'la Faylni Tekshirish (./filecheck.sh data.txt)",
    "story": "Darslik 12-sahifasi: <code>data.txt</code> tekshirilganda 'The file is not empty.' chiqishi kerak.",
    "taskUz": "<code>./filecheck.sh data.txt</code> buyrug'ini bering.",
    "expectedSql": "./filecheck.sh data.txt",
    "expectedBash": "./filecheck.sh data.txt",
    "hint": "`./filecheck.sh data.txt` buyrug'ini bering.",
    "tags": [
      "RUN",
      "FILECHECK",
      "DATA"
    ],
    "solutions": [
      "./filecheck.sh data.txt",
      "bash filecheck.sh data.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 8 • Test data"
  },
  {
    "id": 116,
    "title": "Mavjud Bo'lmagan Fayl Tekshiruvi (./filecheck.sh missing.txt)",
    "story": "Darslik 12-sahifasi: Yo'q fayl kiritilganda 'The path does not exist' xabari va exit 2 qaytadi.",
    "taskUz": "<code>./filecheck.sh missing.txt</code> buyrug'ini bering.",
    "expectedSql": "./filecheck.sh missing.txt",
    "expectedBash": "./filecheck.sh missing.txt",
    "hint": "`./filecheck.sh missing.txt` buyrug'ini bering.",
    "tags": [
      "RUN",
      "FILECHECK",
      "MISSING"
    ],
    "solutions": [
      "./filecheck.sh missing.txt",
      "bash filecheck.sh missing.txt"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 8 • Test missing"
  },
  {
    "id": 117,
    "title": "Case Strukturasi Skriptini Ko'rish (service_menu.sh)",
    "story": "Darslik 13-sahifasi: <code>case ... esac</code> ko'p tarmoqli tanlov skriptini o'qing.",
    "taskUz": "<code>cat service_menu.sh</code> buyrug'ini bering.",
    "expectedSql": "cat service_menu.sh",
    "expectedBash": "cat service_menu.sh",
    "hint": "`cat service_menu.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "CASE",
      "SERVICE_MENU"
    ],
    "solutions": [
      "cat service_menu.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 9 • View case"
  },
  {
    "id": 118,
    "title": "Service_menu.sh Skriptiga Ruxsat Berish",
    "story": "Service_menu.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x service_menu.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x service_menu.sh",
    "expectedBash": "chmod +x service_menu.sh",
    "hint": "`chmod +x service_menu.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "SERVICE_MENU"
    ],
    "solutions": [
      "chmod +x service_menu.sh",
      "chmod 755 service_menu.sh"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 9 • chmod menu"
  },
  {
    "id": 119,
    "title": "Start Buyrug'ini Sinash (./service_menu.sh start)",
    "story": "Darslik 13-sahifasi: start tanlanganda 'Starting the demonstration service...' chiqishi kerak.",
    "taskUz": "<code>./service_menu.sh start</code> buyrug'ini bering.",
    "expectedSql": "./service_menu.sh start",
    "expectedBash": "./service_menu.sh start",
    "hint": "`./service_menu.sh start` buyrug'ini bering.",
    "tags": [
      "RUN",
      "CASE",
      "START"
    ],
    "solutions": [
      "./service_menu.sh start",
      "bash service_menu.sh start"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 9 • Test start"
  },
  {
    "id": 120,
    "title": "Stop Buyrug'ini Sinash (./service_menu.sh stop)",
    "story": "stop tanlanganda 'Stopping the demonstration service...' chiqishi kerak.",
    "taskUz": "<code>./service_menu.sh stop</code> buyrug'ini bering.",
    "expectedSql": "./service_menu.sh stop",
    "expectedBash": "./service_menu.sh stop",
    "hint": "`./service_menu.sh stop` buyrug'ini bering.",
    "tags": [
      "RUN",
      "CASE",
      "STOP"
    ],
    "solutions": [
      "./service_menu.sh stop",
      "bash service_menu.sh stop"
    ],
    "sector": 8,
    "difficulty": "8-Qavat • Oson",
    "source": "S03 Activity 9 • Test stop"
  },
  {
    "id": 121,
    "title": "Loops.sh Tsikllar Skriptini Ko'rish",
    "story": "Darslik 14-sahifasi: For va While tsikllari jamlangan <code>loops.sh</code> skriptini o'qing.",
    "taskUz": "<code>cat loops.sh</code> buyrug'ini bering.",
    "expectedSql": "cat loops.sh",
    "expectedBash": "cat loops.sh",
    "hint": "`cat loops.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "LOOPS",
      "ITERATION"
    ],
    "solutions": [
      "cat loops.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • View loops"
  },
  {
    "id": 122,
    "title": "Loops.sh Skriptiga Ruxsat Berish",
    "story": "Loops.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x loops.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x loops.sh",
    "expectedBash": "chmod +x loops.sh",
    "hint": "`chmod +x loops.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "LOOPS"
    ],
    "solutions": [
      "chmod +x loops.sh",
      "chmod 755 loops.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • chmod loops"
  },
  {
    "id": 123,
    "title": "Loops.sh Skriptini 5 Bilan Ishga Tushirish",
    "story": "Darslik 14-sahifasi: 5 ta qadam bilan ikkala tsiklni ishga tushiring.",
    "taskUz": "<code>./loops.sh 5</code> buyrug'ini bering.",
    "expectedSql": "./loops.sh 5",
    "expectedBash": "./loops.sh 5",
    "hint": "`./loops.sh 5` buyrug'ini bering.",
    "tags": [
      "RUN",
      "LOOPS",
      "5_STEPS"
    ],
    "solutions": [
      "./loops.sh 5",
      "bash loops.sh 5"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • Run 5"
  },
  {
    "id": 124,
    "title": "Loops.sh Skriptini 3 Bilan Sinash",
    "story": "3 qadamli sikl natijasini oling.",
    "taskUz": "<code>./loops.sh 3</code> buyrug'ini bering.",
    "expectedSql": "./loops.sh 3",
    "expectedBash": "./loops.sh 3",
    "hint": "`./loops.sh 3` buyrug'ini bering.",
    "tags": [
      "RUN",
      "LOOPS",
      "3_STEPS"
    ],
    "solutions": [
      "./loops.sh 3",
      "bash loops.sh 3"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • Run 3"
  },
  {
    "id": 125,
    "title": "Fayldan Satrma-Satr O'qish Hujjatini Ko'rish (ips.txt)",
    "story": "Darslik 15-sahifasi: <code>ips.txt</code> faylida 2 ta IP manzil mavjud.",
    "taskUz": "<code>cat ips.txt</code> buyrug'ini bering.",
    "expectedSql": "cat ips.txt",
    "expectedBash": "cat ips.txt",
    "hint": "`cat ips.txt` buyrug'ini bering.",
    "tags": [
      "CAT",
      "IPS",
      "INPUT_FILE"
    ],
    "solutions": [
      "cat ips.txt"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • View ips.txt"
  },
  {
    "id": 126,
    "title": "Read_ips.sh Skriptini O'qish",
    "story": "Darslik 15-sahifasi: <code>while IFS= read -r ip</code> orqali faylni xavfsiz o'quvchi skriptni ko'ring.",
    "taskUz": "<code>cat read_ips.sh</code> buyrug'ini bering.",
    "expectedSql": "cat read_ips.sh",
    "expectedBash": "cat read_ips.sh",
    "hint": "`cat read_ips.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "WHILE_READ",
      "IFS"
    ],
    "solutions": [
      "cat read_ips.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • View read_ips"
  },
  {
    "id": 127,
    "title": "Read_ips.sh Skriptiga Ruxsat Berish",
    "story": "Read_ips.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x read_ips.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x read_ips.sh",
    "expectedBash": "chmod +x read_ips.sh",
    "hint": "`chmod +x read_ips.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "READ_IPS"
    ],
    "solutions": [
      "chmod +x read_ips.sh",
      "chmod 755 read_ips.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • chmod read_ips"
  },
  {
    "id": 128,
    "title": "Read_ips.sh Skriptini Ishga Tushirish",
    "story": "Darslik 15-sahifasi: Ikkala IP manzil etiketka bilan ekranga chiqishini ko'ring.",
    "taskUz": "<code>./read_ips.sh</code> buyrug'ini bering.",
    "expectedSql": "./read_ips.sh",
    "expectedBash": "./read_ips.sh",
    "hint": "`./read_ips.sh` buyrug'ini bering.",
    "tags": [
      "RUN",
      "READ_IPS",
      "LINE_BY_LINE"
    ],
    "solutions": [
      "./read_ips.sh",
      "bash read_ips.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Activity 10 • Run read_ips"
  },
  {
    "id": 129,
    "title": "IFS O'zgaruvchisi Vazifasi",
    "story": "Darslik 7-sahifasi: <code>IFS=</code> bo'sh qoldirilishi satr boshidagi bo'shliqlarni saqlab qoladi.",
    "taskUz": "<code>head -n 6 read_ips.sh</code> buyrug'ini bering.",
    "expectedSql": "head -n 6 read_ips.sh",
    "expectedBash": "head -n 6 read_ips.sh",
    "hint": "`head -n 6 read_ips.sh` buyrug'ini bering.",
    "tags": [
      "HEAD",
      "IFS",
      "EXPLANATION"
    ],
    "solutions": [
      "head -n 6 read_ips.sh",
      "head -6 read_ips.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Command Ref • IFS"
  },
  {
    "id": 130,
    "title": "Break Va Continue Tushunchasi",
    "story": "Darslik 14-sahifasi: <code>break</code> butun tsikldan chiqadi, <code>continue</code> esa keyingi qadamga o'tadi.",
    "taskUz": "<code>echo \"break and continue\"</code> buyrug'i orqali tasdiqlang.",
    "expectedSql": "echo \"break and continue\"",
    "expectedBash": "echo \"break and continue\"",
    "hint": "`echo \"break and continue\"` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "BREAK",
      "CONTINUE"
    ],
    "solutions": [
      "echo \"break and continue\""
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Section 16.2 • Loop Control"
  },
  {
    "id": 131,
    "title": "C-Style For Loop Tushunchasi",
    "story": "<code>for ((i=1; i<=limit; i++))</code> sintaksisi.",
    "taskUz": "<code>grep -A 3 \"for ((\" loops.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -A 3 \"for ((\" loops.sh",
    "expectedBash": "grep -A 3 \"for ((\" loops.sh",
    "hint": "`grep -A 3 \"for ((\" loops.sh` buyrug'ini bering.",
    "tags": [
      "GREP",
      "FOR_LOOP",
      "C_STYLE"
    ],
    "solutions": [
      "grep -A 3 \"for ((\" loops.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S03 Section 16.1 • C-style for"
  },
  {
    "id": 132,
    "title": "While Loop Sintaksisi",
    "story": "<code>while ((i <= limit))</code> tsiklini ko'ring.",
    "taskUz": "<code>grep -A 4 \"while ((\" loops.sh</code> buyrug'ini bering.",
    "expectedSql": "grep -A 4 \"while ((\" loops.sh",
    "expectedBash": "grep -A 4 \"while ((\" loops.sh",
    "hint": "`grep -A 4 \"while ((\" loops.sh` buyrug'ini bering.",
    "tags": [
      "GREP",
      "WHILE_LOOP",
      "CONDITION"
    ],
    "solutions": [
      "grep -A 4 \"while ((\" loops.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • O'rta",
    "source": "S03 Section 16.1 • while loop"
  },
  {
    "id": 133,
    "title": "Loops.sh Sintaksisini Tekshirish",
    "story": "Loops.sh Sintaksisini Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>bash -n loops.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n loops.sh",
    "expectedBash": "bash -n loops.sh",
    "hint": "`bash -n loops.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "LOOPS"
    ],
    "solutions": [
      "bash -n loops.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Section 20 • Syntax"
  },
  {
    "id": 134,
    "title": "Read_ips.sh Sintaksisini Tekshirish",
    "story": "Read_ips.sh Sintaksisini Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>bash -n read_ips.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n read_ips.sh",
    "expectedBash": "bash -n read_ips.sh",
    "hint": "`bash -n read_ips.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "READ_IPS"
    ],
    "solutions": [
      "bash -n read_ips.sh"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Section 20 • Syntax"
  },
  {
    "id": 135,
    "title": "Katalogdagi Barcha Fayllarni Ko'rish",
    "story": "Katalogdagi Barcha Fayllarni Ko'rish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>ls -l</code> buyrug'ini bering.",
    "expectedSql": "ls -l",
    "expectedBash": "ls -l",
    "hint": "`ls -l` buyrug'ini bering.",
    "tags": [
      "LS",
      "FILES",
      "STATUS"
    ],
    "solutions": [
      "ls -l"
    ],
    "sector": 9,
    "difficulty": "9-Qavat • Oson",
    "source": "S03 Practice • ls -l"
  },
  {
    "id": 136,
    "title": "Arrays.sh Massivlar Skriptini Ko'rish",
    "story": "Darslik 15-16-sahifalari: Indekslangan va assotsiativ (<code>declare -A</code>) massivlar yozilgan skriptni o'qing.",
    "taskUz": "<code>cat arrays.sh</code> buyrug'ini bering.",
    "expectedSql": "cat arrays.sh",
    "expectedBash": "cat arrays.sh",
    "hint": "`cat arrays.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "ARRAYS",
      "DATA_STRUCTURES"
    ],
    "solutions": [
      "cat arrays.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 11 • View arrays.sh"
  },
  {
    "id": 137,
    "title": "Arrays.sh Skriptiga Ruxsat Berish",
    "story": "Arrays.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x arrays.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x arrays.sh",
    "expectedBash": "chmod +x arrays.sh",
    "hint": "`chmod +x arrays.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "ARRAYS"
    ],
    "solutions": [
      "chmod +x arrays.sh",
      "chmod 755 arrays.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 11 • chmod arrays"
  },
  {
    "id": 138,
    "title": "Arrays.sh Skriptini Ishga Tushirish",
    "story": "Darslik 16-sahifasi: Mevalar va ranglar hesh-xaritasi chiqishini ko'ring.",
    "taskUz": "<code>./arrays.sh</code> buyrug'ini bering.",
    "expectedSql": "./arrays.sh",
    "expectedBash": "./arrays.sh",
    "hint": "`./arrays.sh` buyrug'ini bering.",
    "tags": [
      "RUN",
      "ARRAYS",
      "OUTPUT"
    ],
    "solutions": [
      "./arrays.sh",
      "bash arrays.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 11 • Run arrays"
  },
  {
    "id": 139,
    "title": "Massiv Elementlari Soni (${#array[@]})",
    "story": "Darslik 7-sahifasi: Massivdagi barcha elementlar sonini sanash.",
    "taskUz": "<code>grep \"Number of items\" arrays.sh</code> buyrug'ini bering.",
    "expectedSql": "grep \"Number of items\" arrays.sh",
    "expectedBash": "grep \"Number of items\" arrays.sh",
    "hint": "`grep \"Number of items\" arrays.sh` buyrug'ini bering.",
    "tags": [
      "GREP",
      "ARRAY_LEN",
      "${#ARRAY[@]}"
    ],
    "solutions": [
      "grep \"Number of items\" arrays.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Command Ref • Array count"
  },
  {
    "id": 140,
    "title": "Assotsiativ Massiv E'loni (declare -A)",
    "story": "Darslik 7-sahifasi: Kalit-qiymat (key-value) juftliklarini yaratish uchun <code>declare -A</code> kerak.",
    "taskUz": "<code>grep \"declare -A\" arrays.sh</code> buyrug'ini bering.",
    "expectedSql": "grep \"declare -A\" arrays.sh",
    "expectedBash": "grep \"declare -A\" arrays.sh",
    "hint": "`grep \"declare -A\" arrays.sh` buyrug'ini bering.",
    "tags": [
      "GREP",
      "DECLARE_-A",
      "HASHMAP"
    ],
    "solutions": [
      "grep \"declare -A\" arrays.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Command Ref • declare -A"
  },
  {
    "id": 141,
    "title": "Integratsiyalashgan Hisobot Skripti (process_report.sh)",
    "story": "Darslik 16-17-sahifalari: Protsesslar, sana, tizim foydalanuvchisi va xotira auditini birlashtiruvchi skriptni ko'ring.",
    "taskUz": "<code>cat process_report.sh</code> buyrug'ini bering.",
    "expectedSql": "cat process_report.sh",
    "expectedBash": "cat process_report.sh",
    "hint": "`cat process_report.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "REPORT",
      "INTEGRATION"
    ],
    "solutions": [
      "cat process_report.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 18 • View report"
  },
  {
    "id": 142,
    "title": "Process_report.sh Skriptiga Ruxsat Berish",
    "story": "Process_report.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x process_report.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x process_report.sh",
    "expectedBash": "chmod +x process_report.sh",
    "hint": "`chmod +x process_report.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "REPORT"
    ],
    "solutions": [
      "chmod +x process_report.sh",
      "chmod 755 process_report.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 18 • chmod report"
  },
  {
    "id": 143,
    "title": "Hisobotni Yangi Faylga Saqlash (./process_report.sh my_process_report.txt)",
    "story": "Darslik 17-sahifasi: <code>my_process_report.txt</code> nomli hisobot faylini yarating.",
    "taskUz": "<code>./process_report.sh my_process_report.txt</code> buyrug'ini bering.",
    "expectedSql": "./process_report.sh my_process_report.txt",
    "expectedBash": "./process_report.sh my_process_report.txt",
    "hint": "`./process_report.sh my_process_report.txt` buyrug'ini bering.",
    "tags": [
      "RUN",
      "REPORT",
      "GENERATE"
    ],
    "solutions": [
      "./process_report.sh my_process_report.txt",
      "bash process_report.sh my_process_report.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 18 • Run report"
  },
  {
    "id": 144,
    "title": "Generatsiya Qilingan Hisobot Hujjatini O'qish",
    "story": "Darslik 17-sahifasi: <code>cat my_process_report.txt</code> orqali yakuniy hisobotni tekshiring.",
    "taskUz": "<code>cat my_process_report.txt</code> buyrug'ini bering.",
    "expectedSql": "cat my_process_report.txt",
    "expectedBash": "cat my_process_report.txt",
    "hint": "`cat my_process_report.txt` buyrug'ini bering.",
    "tags": [
      "CAT",
      "REPORT_OUT",
      "VERIFY"
    ],
    "solutions": [
      "cat my_process_report.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 18 • Cat report"
  },
  {
    "id": 145,
    "title": "Hisobot Fayli Ruxsatlarini Tekshirish",
    "story": "Hisobot Fayli Ruxsatlarini Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>ls -l my_process_report.txt</code> buyrug'ini bering.",
    "expectedSql": "ls -l my_process_report.txt",
    "expectedBash": "ls -l my_process_report.txt",
    "hint": "`ls -l my_process_report.txt` buyrug'ini bering.",
    "tags": [
      "LS",
      "REPORT",
      "PERM"
    ],
    "solutions": [
      "ls -l my_process_report.txt"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Activity 18 • ls report"
  },
  {
    "id": 146,
    "title": "Xotira Sarfi Bo'yicha Bosh Protsesslar (ps aux --sort=-%mem | head -n 6)",
    "story": "Darslik 17-sahifasi: Hisobot ichidagi komandani alohida terminalda chaqiring.",
    "taskUz": "<code>ps aux --sort=-%mem | head -n 6</code> buyrug'ini bering.",
    "expectedSql": "ps aux --sort=-%mem | head -n 6",
    "expectedBash": "ps aux --sort=-%mem | head -n 6",
    "hint": "`ps aux --sort=-%mem | head -n 6` buyrug'ini bering.",
    "tags": [
      "PS",
      "SORT_MEM",
      "HEAD_6"
    ],
    "solutions": [
      "ps aux --sort=-%mem | head -n 6",
      "ps aux --sort=-%mem | head -6"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • O'rta",
    "source": "S03 Activity 18 • Memory Audit"
  },
  {
    "id": 147,
    "title": "Hisobot Skripti Sintaksisini Tekshirish",
    "story": "Hisobot Skripti Sintaksisini Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>bash -n process_report.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n process_report.sh",
    "expectedBash": "bash -n process_report.sh",
    "hint": "`bash -n process_report.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "REPORT"
    ],
    "solutions": [
      "bash -n process_report.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Section 20 • Syntax Check"
  },
  {
    "id": 148,
    "title": "Arrays.sh Sintaksisini Tekshirish",
    "story": "Arrays.sh Sintaksisini Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>bash -n arrays.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n arrays.sh",
    "expectedBash": "bash -n arrays.sh",
    "hint": "`bash -n arrays.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "ARRAYS"
    ],
    "solutions": [
      "bash -n arrays.sh"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Section 20 • Syntax Check"
  },
  {
    "id": 149,
    "title": "Joriy Foydalanuvchi Shaxsini Tekshirish",
    "story": "Barcha laboratoriya vazifalari muvaffaqiyatli yakunlandi. Shaxsingizni tasdiqlang.",
    "taskUz": "<code>whoami</code> buyrug'ini bering.",
    "expectedSql": "whoami",
    "expectedBash": "whoami",
    "hint": "`whoami` buyrug'ini bering.",
    "tags": [
      "WHOAMI",
      "FINAL",
      "SUCCESS"
    ],
    "solutions": [
      "whoami"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Final • whoami"
  },
  {
    "id": 150,
    "title": "Bosh Linux Protsesslar & Skriptlar Arxitektori Final Sinovi",
    "story": "Professor Turing olqishlaydi! 3-hafta bo'yicha barcha 150 topshiriq va skriptlar 100% bajarildi. Ishchi katalogni ekranga chiqaring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini bering.",
    "tags": [
      "PWD",
      "VICTORY",
      "KERNEL_ARCHITECT"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 10,
    "difficulty": "10-Qavat • Oson",
    "source": "S03 Final • Victory PWD"
  }
];
