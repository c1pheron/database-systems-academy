// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — W3 QUESTIONS_51_100.JS
// ============================================================================

window.QUESTIONS_51_100_W3 = [
  {
    "id": 51,
    "title": "Pgrep Bilan Barcha Bash Jarayonlarini Topish",
    "story": "Barcha ochilgan bash sessiyalari PID larini toping.",
    "taskUz": "<code>pgrep bash</code> buyrug'ini bering.",
    "expectedSql": "pgrep bash",
    "expectedBash": "pgrep bash",
    "hint": "`pgrep bash` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "BASH",
      "AUDIT"
    ],
    "solutions": [
      "pgrep bash"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 2 • pgrep"
  },
  {
    "id": 52,
    "title": "Pgrep Bilan Buyruq Matnlarini Birga Chiqarish",
    "story": "PID bilan birga to'liq chaqirilgan argumentlarni ham ko'ring.",
    "taskUz": "<code>pgrep -a bash</code> buyrug'ini bering.",
    "expectedSql": "pgrep -a bash",
    "expectedBash": "pgrep -a bash",
    "hint": "`pgrep -a bash` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "-A",
      "CMD_STRING"
    ],
    "solutions": [
      "pgrep -a bash"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 2 • pgrep -a"
  },
  {
    "id": 53,
    "title": "Systemd Bosh Jarayoni Daraxtini Tekshirish",
    "story": "Daraxtning eng yuqori qismini ko'rish.",
    "taskUz": "<code>pstree | head -n 5</code> buyrug'ini bering.",
    "expectedSql": "pstree | head -n 5",
    "expectedBash": "pstree | head -n 5",
    "hint": "`pstree | head -n 5` buyrug'ini bering.",
    "tags": [
      "PSTREE",
      "HEAD",
      "INIT_TREE"
    ],
    "solutions": [
      "pstree | head -n 5",
      "pstree | head -5"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 2 • Init Tree"
  },
  {
    "id": 54,
    "title": "Oddiy ps Bilan CMD Ustunini Ko'rish",
    "story": "Har bir jarayon qaysi buyruq bilan chaqirilganini ko'ring.",
    "taskUz": "<code>ps</code> buyrug'ini bering.",
    "expectedSql": "ps",
    "expectedBash": "ps",
    "hint": "`ps` buyrug'ini bering.",
    "tags": [
      "PS",
      "CMD",
      "INSPECT"
    ],
    "solutions": [
      "ps"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 2 • ps inspect"
  },
  {
    "id": 55,
    "title": "Joriy Ishchi Katalogni Tekshirish",
    "story": "Hozirda <code>os_lab_process_bash</code> papkasida turganingizni tasdiqlang.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini bering.",
    "tags": [
      "PWD",
      "CHECK",
      "DIR"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 1 • pwd"
  },
  {
    "id": 56,
    "title": "Papkadagi Barcha Fayllar Ro'yxatini Ko'rish",
    "story": "Tayyorlangan skriptlarni tekshiring.",
    "taskUz": "<code>ls -l</code> buyrug'ini bering.",
    "expectedSql": "ls -l",
    "expectedBash": "ls -l",
    "hint": "`ls -l` buyrug'ini bering.",
    "tags": [
      "LS",
      "FILES",
      "SCRIPTS"
    ],
    "solutions": [
      "ls -l"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 1 • ls -l"
  },
  {
    "id": 57,
    "title": "Stat Buyrug'i Bilan Bitta Skript Xususiyatlarini Ko'rish",
    "story": "<code>hello.sh</code> faylining inodelari va ruxsatlarini ko'ring.",
    "taskUz": "<code>stat hello.sh</code> buyrug'ini bering.",
    "expectedSql": "stat hello.sh",
    "expectedBash": "stat hello.sh",
    "hint": "`stat hello.sh` buyrug'ini bering.",
    "tags": [
      "STAT",
      "INODE",
      "HELLO"
    ],
    "solutions": [
      "stat hello.sh"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Command Ref • stat"
  },
  {
    "id": 58,
    "title": "Top Dasturidan Qaytish Tushunchasi",
    "story": "Top dasturidan chiqish uchun qaysi klavish bosiladi? (q klavishi).",
    "taskUz": "<code>echo \"q\"</code> buyrug'i orqali bilimingizni tasdiqlang.",
    "expectedSql": "echo \"q\"",
    "expectedBash": "echo \"q\"",
    "hint": "`echo \"q\"` buyrug'ini bering.",
    "tags": [
      "TOP",
      "EXIT_KEY",
      "Q"
    ],
    "solutions": [
      "echo \"q\"",
      "echo q"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 2 • Exit Top"
  },
  {
    "id": 59,
    "title": "Terminalni Tozalash",
    "story": "Terminal oynasini toza holatga keltiring.",
    "taskUz": "<code>clear</code> buyrug'ini bering.",
    "expectedSql": "clear",
    "expectedBash": "clear",
    "hint": "`clear` buyrug'ini bering.",
    "tags": [
      "CLEAR",
      "SCREEN",
      "TERMINAL"
    ],
    "solutions": [
      "clear"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 1 • Clear"
  },
  {
    "id": 60,
    "title": "Tizim Foydalanuvchisini Qayta Tasdiqlash",
    "story": "Foydalanuvchi student ekanligini yana bir bor tekshiring.",
    "taskUz": "<code>whoami</code> buyrug'ini bering.",
    "expectedSql": "whoami",
    "expectedBash": "whoami",
    "hint": "`whoami` buyrug'ini bering.",
    "tags": [
      "WHOAMI",
      "CHECK",
      "USER"
    ],
    "solutions": [
      "whoami"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 1 • whoami"
  },
  {
    "id": 61,
    "title": "Hello.sh Skriptining Tarkibini O'qish",
    "story": "Darslik 7-sahifasi: Yaratilgan <code>hello.sh</code> skriptining boshlang'ich 4 satrini o'qing.",
    "taskUz": "<code>cat hello.sh</code> buyrug'ini bering.",
    "expectedSql": "cat hello.sh",
    "expectedBash": "cat hello.sh",
    "hint": "`cat hello.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "HELLO",
      "SCRIPT"
    ],
    "solutions": [
      "cat hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • View hello.sh"
  },
  {
    "id": 62,
    "title": "Skriptga Bajarish Huquqini Berish",
    "story": "Darslik 7-sahifasi: Skript matnli fayldan ishga tushadigan dasturga aylanishi uchun unga ijro ruxsatini qo'shing.",
    "taskUz": "<code>chmod +x hello.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x hello.sh",
    "expectedBash": "chmod +x hello.sh",
    "hint": "`chmod +x hello.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "PERMISSIONS"
    ],
    "solutions": [
      "chmod +x hello.sh",
      "chmod 755 hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • Grant Execution"
  },
  {
    "id": 63,
    "title": "Skriptni Ishga Tushirish",
    "story": "Darslik 7-sahifasi: Joriy katalogdagi skriptni nisbiy yo'l orqali ishga tushiring.",
    "taskUz": "<code>./hello.sh</code> buyrug'ini bering.",
    "expectedSql": "./hello.sh",
    "expectedBash": "./hello.sh",
    "hint": "`./hello.sh` buyrug'ini bering.",
    "tags": [
      "RUN",
      "DOT_SLASH",
      "HELLO"
    ],
    "solutions": [
      "./hello.sh",
      "bash hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • Run Script"
  },
  {
    "id": 64,
    "title": "Oxirgi Buyruqning Chiqish Statusini Tekshirish (echo $?)",
    "story": "Darslik 7-sahifasi: Buyruq xatosiz yakunlanganini tasdiqlovchi <code>$?</code> qiymatini ko'ring (0 muvaffaqiyat).",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "`echo $?` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "EXIT_STATUS",
      "$?"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • Check Exit Code"
  },
  {
    "id": 65,
    "title": "Bash Sintaksisini Tekshirish",
    "story": "Darslik 18-sahifasi: Skriptni ishga tushirmasdan, faqat sintaktik xatolarni tekshirish.",
    "taskUz": "<code>bash -n hello.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n hello.sh",
    "expectedBash": "bash -n hello.sh",
    "hint": "`bash -n hello.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX_CHECK",
      "-N"
    ],
    "solutions": [
      "bash -n hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Section 20 • Syntax Check"
  },
  {
    "id": 66,
    "title": "Shebang Satrini Tekshirish",
    "story": "Darslik 7-sahifasi: Skriptning 1-satridagi shebangni ko'ring.",
    "taskUz": "<code>head -n 1 hello.sh</code> buyrug'ini bering.",
    "expectedSql": "head -n 1 hello.sh",
    "expectedBash": "head -n 1 hello.sh",
    "hint": "`head -n 1 hello.sh` buyrug'ini bering.",
    "tags": [
      "HEAD",
      "SHEBANG",
      "ENV"
    ],
    "solutions": [
      "head -n 1 hello.sh",
      "head -1 hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Section 9 • Shebang"
  },
  {
    "id": 67,
    "title": "Strict Mode Satrini Ko'rish",
    "story": "Darslik 7-sahifasi: <code>set -euo pipefail</code> qat'iy rejimini ko'ring.",
    "taskUz": "<code>head -n 2 hello.sh</code> buyrug'ini bering.",
    "expectedSql": "head -n 2 hello.sh",
    "expectedBash": "head -n 2 hello.sh",
    "hint": "`head -n 2 hello.sh` buyrug'ini bering.",
    "tags": [
      "HEAD",
      "STRICT_MODE",
      "SET"
    ],
    "solutions": [
      "head -n 2 hello.sh",
      "head -2 hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Section 10 • Strict Mode"
  },
  {
    "id": 68,
    "title": "Skriptni To'g'ridan-To'g'ri Bash Bilan Chaqirish",
    "story": "Ijro huquqi bo'lmagan taqdirda ham interpretator orqali to'g'ridan-to'g'ri chaqirish.",
    "taskUz": "<code>bash hello.sh</code> buyrug'ini bering.",
    "expectedSql": "bash hello.sh",
    "expectedBash": "bash hello.sh",
    "hint": "`bash hello.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "DIRECT",
      "HELLO"
    ],
    "solutions": [
      "bash hello.sh",
      "./hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • Direct Call"
  },
  {
    "id": 69,
    "title": "Ruxsatlarni Aniq Ko'rish",
    "story": "<code>hello.sh</code> faylining ruxsatlarini ko'ring.",
    "taskUz": "<code>ls -l hello.sh</code> buyrug'ini bering.",
    "expectedSql": "ls -l hello.sh",
    "expectedBash": "ls -l hello.sh",
    "hint": "`ls -l hello.sh` buyrug'ini bering.",
    "tags": [
      "LS",
      "PERM",
      "HELLO"
    ],
    "solutions": [
      "ls -l hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • ls -l"
  },
  {
    "id": 70,
    "title": "Skript Xabarlarini Qayta Ishga Tushirish",
    "story": "<code>./hello.sh</code> ni yana bir bor ishga tushiring.",
    "taskUz": "<code>./hello.sh</code> buyrug'ini bering.",
    "expectedSql": "./hello.sh",
    "expectedBash": "./hello.sh",
    "hint": "`./hello.sh` buyrug'ini bering.",
    "tags": [
      "RUN",
      "HELLO",
      "TEST"
    ],
    "solutions": [
      "./hello.sh",
      "bash hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • Run again"
  },
  {
    "id": 71,
    "title": "Exit Statusni Yana Bir Bor Tekshirish",
    "story": "Natija 0 ekanligini tasdiqlang.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "`echo $?` buyrug'ini bering.",
    "tags": [
      "EXIT_CODE",
      "ZERO",
      "SUCCESS"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 4 • Zero status"
  },
  {
    "id": 72,
    "title": "Skriptdagi Satrlar Sonini Sanash",
    "story": "<code>hello.sh</code> nechta satrdan iborat ekanligini hisoblang.",
    "taskUz": "<code>wc -l hello.sh</code> buyrug'ini bering.",
    "expectedSql": "wc -l hello.sh",
    "expectedBash": "wc -l hello.sh",
    "hint": "`wc -l hello.sh` buyrug'ini bering.",
    "tags": [
      "WC",
      "LINES",
      "HELLO"
    ],
    "solutions": [
      "wc -l hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Practice • wc hello.sh"
  },
  {
    "id": 73,
    "title": "Katalogdagi Barcha .sh Skriptlarini Ko'rish",
    "story": "Laboratoriyadagi barcha skriptlarni ro'yxatlang.",
    "taskUz": "<code>ls *.sh</code> buyrug'ini bering.",
    "expectedSql": "ls *.sh",
    "expectedBash": "ls *.sh",
    "hint": "`ls *.sh` buyrug'ini bering.",
    "tags": [
      "LS",
      "WILDCARD",
      "SCRIPTS"
    ],
    "solutions": [
      "ls *.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Practice • List scripts"
  },
  {
    "id": 74,
    "title": "Barcha Skriptlar Sintaksisini Tekshirish",
    "story": "<code>bash -n hello.sh</code> orqali tekshiruvdan o'ting.",
    "taskUz": "<code>bash -n hello.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n hello.sh",
    "expectedBash": "bash -n hello.sh",
    "hint": "`bash -n hello.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "CLEAN"
    ],
    "solutions": [
      "bash -n hello.sh"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Section 20 • Check"
  },
  {
    "id": 75,
    "title": "Joriy Ishchi Katalogni Ko'rish",
    "story": "Joriy Ishchi Katalogni Ko'rish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini bering.",
    "tags": [
      "PWD",
      "STATUS",
      "WORKSPACE"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 5,
    "difficulty": "5-Qavat • Oson",
    "source": "S03 Activity 1 • pwd"
  },
  {
    "id": 76,
    "title": "Variables.sh Skriptini Ko'rish",
    "story": "Darslik 8-sahifasi: O'zgaruvchilar e'lon qilingan <code>variables.sh</code> faylini o'qing.",
    "taskUz": "<code>cat variables.sh</code> buyrug'ini bering.",
    "expectedSql": "cat variables.sh",
    "expectedBash": "cat variables.sh",
    "hint": "`cat variables.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "VARIABLES",
      "READ"
    ],
    "solutions": [
      "cat variables.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • View variables.sh"
  },
  {
    "id": 77,
    "title": "Variables.sh Skriptiga Ijro Huquqini Berish",
    "story": "Variables.sh Skriptiga Ijro Huquqini Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x variables.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x variables.sh",
    "expectedBash": "chmod +x variables.sh",
    "hint": "`chmod +x variables.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "VARIABLES"
    ],
    "solutions": [
      "chmod +x variables.sh",
      "chmod 755 variables.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • chmod variables"
  },
  {
    "id": 78,
    "title": "Variables.sh Skriptini Ishga Tushirish",
    "story": "Darslik 8-sahifasi: O'zgaruvchilar ekranga 4 satr qilib chiqarilishini ko'ring.",
    "taskUz": "<code>./variables.sh</code> buyrug'ini bering.",
    "expectedSql": "./variables.sh",
    "expectedBash": "./variables.sh",
    "hint": "`./variables.sh` buyrug'ini bering.",
    "tags": [
      "RUN",
      "VARIABLES",
      "TEST"
    ],
    "solutions": [
      "./variables.sh",
      "bash variables.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • Run variables"
  },
  {
    "id": 79,
    "title": "Chiqish Statusini Tekshirish",
    "story": "Chiqish Statusini Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>echo $?</code> buyrug'i orqali muvaffaqiyatni tasdiqlang.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "`echo $?` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "STATUS",
      "EXIT"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • Status check"
  },
  {
    "id": 80,
    "title": "Greet.sh Argumentlar Skriptini Ko'rish",
    "story": "Darslik 8-sahifasi: Bitta parametr (<code>$1</code>) qabul qiluvchi <code>greet.sh</code> skriptini o'qing.",
    "taskUz": "<code>cat greet.sh</code> buyrug'ini bering.",
    "expectedSql": "cat greet.sh",
    "expectedBash": "cat greet.sh",
    "hint": "`cat greet.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "GREET",
      "ARGUMENTS"
    ],
    "solutions": [
      "cat greet.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • View greet.sh"
  },
  {
    "id": 81,
    "title": "Greet.sh Skriptiga Ruxsat Berish",
    "story": "Greet.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x greet.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x greet.sh",
    "expectedBash": "chmod +x greet.sh",
    "hint": "`chmod +x greet.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "GREET"
    ],
    "solutions": [
      "chmod +x greet.sh",
      "chmod 755 greet.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • chmod greet"
  },
  {
    "id": 82,
    "title": "To'g'ri Argument Bilan Ishga Tushirish",
    "story": "Darslik 8-sahifasi: 'Alice' argumentini uzatib salomlashuvni oling.",
    "taskUz": "<code>./greet.sh Alice</code> buyrug'ini bering.",
    "expectedSql": "./greet.sh Alice",
    "expectedBash": "./greet.sh Alice",
    "hint": "`./greet.sh Alice` buyrug'ini bering.",
    "tags": [
      "RUN",
      "GREET",
      "PARAM"
    ],
    "solutions": [
      "./greet.sh Alice",
      "bash greet.sh Alice"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • Valid call"
  },
  {
    "id": 83,
    "title": "Boshqa Ism Bilan Sinash",
    "story": "Parametr o'zgarishini ko'rish uchun Bob argumentini uzating.",
    "taskUz": "<code>./greet.sh Bob</code> buyrug'ini bering.",
    "expectedSql": "./greet.sh Bob",
    "expectedBash": "./greet.sh Bob",
    "hint": "`./greet.sh Bob` buyrug'ini bering.",
    "tags": [
      "RUN",
      "GREET",
      "BOB"
    ],
    "solutions": [
      "./greet.sh Bob",
      "bash greet.sh Bob"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • Greet Bob"
  },
  {
    "id": 84,
    "title": "Argumentsiz Xato Holatini Sinash",
    "story": "Darslik 8-sahifasi: Parametrsiz chaqirilganda 'Usage: ./greet.sh <name>' chiqib exit status 1 qaytishi kerak.",
    "taskUz": "<code>./greet.sh</code> buyrug'ini argumentlarsiz bering.",
    "expectedSql": "./greet.sh",
    "expectedBash": "./greet.sh",
    "hint": "`./greet.sh` buyrug'ini bering.",
    "tags": [
      "RUN",
      "INVALID",
      "USAGE_ERROR"
    ],
    "solutions": [
      "./greet.sh",
      "bash greet.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • Invalid test"
  },
  {
    "id": 85,
    "title": "Xatolik Statusini Tekshirish",
    "story": "Oxirgi xatolik statusini ko'ring.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "`echo $?` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "EXIT_1",
      "ERROR_CODE"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Activity 5 • Error Status"
  },
  {
    "id": 86,
    "title": "Argumentlar Sonini Tekshiruvchi $# Tushunchasi",
    "story": "Skript ichidagi <code>$#</code> parametrlar sonini ifodalaydi. Greet skriptini ko'ring.",
    "taskUz": "<code>cat greet.sh</code> buyrug'ini bering.",
    "expectedSql": "cat greet.sh",
    "expectedBash": "cat greet.sh",
    "hint": "`cat greet.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "ARG_COUNT",
      "$#"
    ],
    "solutions": [
      "cat greet.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Section 9 • $# Concept"
  },
  {
    "id": 87,
    "title": "Xavfsiz O'zgaruvchi E'loni Tushunchasi (${1:-})",
    "story": "Darslik 5-sahifasi: Agar argument berilmasa unbound error bo'lmasligi uchun <code>${1:-}</code> sintaksisi ishlatiladi.",
    "taskUz": "<code>head -n 5 greet.sh</code> buyrug'ini bering.",
    "expectedSql": "head -n 5 greet.sh",
    "expectedBash": "head -n 5 greet.sh",
    "hint": "`head -n 5 greet.sh` buyrug'ini bering.",
    "tags": [
      "HEAD",
      "SAFE_EXPANSION",
      "PARAM"
    ],
    "solutions": [
      "head -n 5 greet.sh",
      "head -5 greet.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Section 11 • Safe Expansion"
  },
  {
    "id": 88,
    "title": "Greet.sh Sintaksisini Tekshirish",
    "story": "<code>bash -n greet.sh</code> orqali sintaksisni tekshiring.",
    "taskUz": "<code>bash -n greet.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n greet.sh",
    "expectedBash": "bash -n greet.sh",
    "hint": "`bash -n greet.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "GREET"
    ],
    "solutions": [
      "bash -n greet.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Section 20 • Syntax"
  },
  {
    "id": 89,
    "title": "Variables.sh Sintaksisini Tekshirish",
    "story": "Variables.sh Sintaksisini Tekshirish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>bash -n variables.sh</code> buyrug'ini bering.",
    "expectedSql": "bash -n variables.sh",
    "expectedBash": "bash -n variables.sh",
    "hint": "`bash -n variables.sh` buyrug'ini bering.",
    "tags": [
      "BASH",
      "SYNTAX",
      "VARIABLES"
    ],
    "solutions": [
      "bash -n variables.sh"
    ],
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Section 20 • Syntax"
  },
  {
    "id": 90,
    "title": "Skriptlar Ro'yxatini Ko'rish",
    "story": "Katalogdagi barcha fayllarni ko'ring.",
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
    "sector": 6,
    "difficulty": "6-Qavat • Oson",
    "source": "S03 Practice • ls -l"
  },
  {
    "id": 91,
    "title": "Age.sh Arifmetika Skriptini Ko'rish",
    "story": "Darslik 9-sahifasi: <code>read</code> va butun son arifmetikasi (<code>$(( ... ))</code>) mavjud <code>age.sh</code> ni o'qing.",
    "taskUz": "<code>cat age.sh</code> buyrug'ini bering.",
    "expectedSql": "cat age.sh",
    "expectedBash": "cat age.sh",
    "hint": "`cat age.sh` buyrug'ini bering.",
    "tags": [
      "CAT",
      "AGE",
      "ARITHMETIC"
    ],
    "solutions": [
      "cat age.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Activity 6 • View age.sh"
  },
  {
    "id": 92,
    "title": "Age.sh Skriptiga Ruxsat Berish",
    "story": "Age.sh Skriptiga Ruxsat Berish bo'yicha amaliy topshiriq.",
    "taskUz": "<code>chmod +x age.sh</code> buyrug'ini bering.",
    "expectedSql": "chmod +x age.sh",
    "expectedBash": "chmod +x age.sh",
    "hint": "`chmod +x age.sh` buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "AGE"
    ],
    "solutions": [
      "chmod +x age.sh",
      "chmod 755 age.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Activity 6 • chmod age"
  },
  {
    "id": 93,
    "title": "Age.sh Skriptini Ishga Tushirish",
    "story": "Darslik 9-sahifasi: Yoshni hisoblovchi skriptni ishga tushiring.",
    "taskUz": "<code>./age.sh</code> buyrug'ini bering.",
    "expectedSql": "./age.sh",
    "expectedBash": "./age.sh",
    "hint": "`./age.sh` buyrug'ini bering.",
    "tags": [
      "RUN",
      "AGE",
      "TEST"
    ],
    "solutions": [
      "./age.sh",
      "bash age.sh"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Activity 6 • Run age"
  },
  {
    "id": 94,
    "title": "Joriy Yilni Olish",
    "story": "Darslik 9-sahifasi: Tizimdan joriy 4 xonali yilni olish uchun <code>date +%Y</code> buyrug'ini bering.",
    "taskUz": "<code>date +%Y</code> buyrug'ini bering.",
    "expectedSql": "date +%Y",
    "expectedBash": "date +%Y",
    "hint": "`date +%Y` buyrug'ini bering.",
    "tags": [
      "DATE",
      "YEAR",
      "SYSTEM"
    ],
    "solutions": [
      "date +%Y"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Activity 6 • date year"
  },
  {
    "id": 95,
    "title": "To'liq Vaqt Formati ('+%Y-%m-%d %H:%M:%S')",
    "story": "Darslik 5 va 17-sahifasi: Aniq vaqt tamg'asi formatini ekranga chiqaring.",
    "taskUz": "<code>date '+%Y-%m-%d %H:%M:%S'</code> buyrug'ini bering.",
    "expectedSql": "date '+%Y-%m-%d %H:%M:%S'",
    "expectedBash": "date '+%Y-%m-%d %H:%M:%S'",
    "hint": "`date '+%Y-%m-%d %H:%M:%S'` buyrug'ini bering.",
    "tags": [
      "DATE",
      "TIMESTAMP",
      "FORMAT"
    ],
    "solutions": [
      "date '+%Y-%m-%d %H:%M:%S'",
      "date \"+%Y-%m-%d %H:%M:%S\""
    ],
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "S03 Activity 18 • Date Format"
  },
  {
    "id": 96,
    "title": "Qo'shish Arifmetikasi",
    "story": "Darslik 10-sahifasi: Bash butun sonlarni hisoblashi uchun <code>$(( ... ))</code> sintaksisidan foydalanadi.",
    "taskUz": "<code>echo $((5 + 3))</code> buyrug'ini bering.",
    "expectedSql": "echo $((5 + 3))",
    "expectedBash": "echo $((5 + 3))",
    "hint": "`echo $((5 + 3))` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "MATH",
      "ADD"
    ],
    "solutions": [
      "echo $((5 + 3))",
      "echo $((5+3))"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Section 12 • Math +"
  },
  {
    "id": 97,
    "title": "Ayirish Arifmetikasi",
    "story": "Darslik 10-sahifasi: 10 dan 4 ni ayirish amalini bajaring.",
    "taskUz": "<code>echo $((10 - 4))</code> buyrug'ini bering.",
    "expectedSql": "echo $((10 - 4))",
    "expectedBash": "echo $((10 - 4))",
    "hint": "`echo $((10 - 4))` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "MATH",
      "SUB"
    ],
    "solutions": [
      "echo $((10 - 4))",
      "echo $((10-4))"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Section 12 • Math -"
  },
  {
    "id": 98,
    "title": "Ko'paytirish Arifmetikasi",
    "story": "Darslik 10-sahifasi: 6 ni 7 ga ko'paytirish amali.",
    "taskUz": "<code>echo $((6 * 7))</code> buyrug'ini bering.",
    "expectedSql": "echo $((6 * 7))",
    "expectedBash": "echo $((6 * 7))",
    "hint": "`echo $((6 * 7))` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "MATH",
      "MUL"
    ],
    "solutions": [
      "echo $((6 * 7))",
      "echo $((6*7))"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Section 12 • Math *"
  },
  {
    "id": 99,
    "title": "Bo'lish Arifmetikasi",
    "story": "Darslik 10-sahifasi: Bash butun sonli bo'lishni bajaradi (kasr qismini tashlab yuboradi).",
    "taskUz": "<code>echo $((10 / 3))</code> buyrug'ini bering.",
    "expectedSql": "echo $((10 / 3))",
    "expectedBash": "echo $((10 / 3))",
    "hint": "`echo $((10 / 3))` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "MATH",
      "DIV"
    ],
    "solutions": [
      "echo $((10 / 3))",
      "echo $((10/3))"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Section 12 • Math /"
  },
  {
    "id": 100,
    "title": "Qoldiqli Bo'lish",
    "story": "Darslik 10-sahifasi: Qoldiqni topish (modul amali).",
    "taskUz": "<code>echo $((10 % 3))</code> buyrug'ini bering.",
    "expectedSql": "echo $((10 % 3))",
    "expectedBash": "echo $((10 % 3))",
    "hint": "`echo $((10 % 3))` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "MATH",
      "MOD"
    ],
    "solutions": [
      "echo $((10 % 3))",
      "echo $((10%3))"
    ],
    "sector": 7,
    "difficulty": "7-Qavat • Oson",
    "source": "S03 Section 12 • Math %"
  }
];
