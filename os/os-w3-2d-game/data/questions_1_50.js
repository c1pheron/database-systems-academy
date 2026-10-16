// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — W3 QUESTIONS_1_50.JS
// ============================================================================

window.QUESTIONS_1_50_W3 = [
  {
    "id": 1,
    "title": "Joriy Tizim Foydalanuvchisini Tekshirish",
    "story": "Laboratoriya xavfsizlik qoidasi: Darslik talabiga ko'ra laboratoriya faqat oddiy (non-root) foydalanuvchi nomidan bajariladi.",
    "taskUz": "Faol terminal sessiyasidagi foydalanuvchi nomini aniqlang.",
    "expectedSql": "whoami",
    "expectedBash": "whoami",
    "hint": "`whoami` buyrug'ini bering.",
    "tags": [
      "WHOAMI",
      "ENV",
      "VERIFICATION"
    ],
    "solutions": [
      "whoami",
      "/usr/bin/whoami"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Setup"
  },
  {
    "id": 2,
    "title": "Boshlang'ich Papka Manzilini Ko'rish",
    "story": "Tizimga kirgandan so'ng qaysi katalogda turganingizni aniqlash lozim.",
    "taskUz": "Joriy ishchi katalogning to'liq manzilini ekranga chiqaring.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini kiriting.",
    "tags": [
      "PWD",
      "PATH",
      "VERIFICATION"
    ],
    "solutions": [
      "pwd",
      "/bin/pwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Setup"
  },
  {
    "id": 3,
    "title": "Standart Shell Muhit O'zgaruvchisini Ko'rish",
    "story": "Darslik 2-sahifasi: Foydalanuvchining standart qobig'i qaysi dastur ekanligini <code>$SHELL</code> orqali tekshiring.",
    "taskUz": "<code>$SHELL</code> o'zgaruvchisini ekranga chiqaring.",
    "expectedSql": "echo \"$SHELL\"",
    "expectedBash": "echo \"$SHELL\"",
    "hint": "`echo \"$SHELL\"` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "SHELL_VAR",
      "ENV"
    ],
    "solutions": [
      "echo \"$SHELL\"",
      "echo $SHELL"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Shell Check"
  },
  {
    "id": 4,
    "title": "Bash Dasturi Versiyasini Tekshirish",
    "story": "Darslik talabi: Tizimdagi GNU Bash versiyasini ko'rish.",
    "taskUz": "<code>bash --version</code> buyrug'ini bering.",
    "expectedSql": "bash --version",
    "expectedBash": "bash --version",
    "hint": "`bash --version` buyrug'ini bering.",
    "tags": [
      "BASH",
      "VERSION",
      "ENVIRONMENT"
    ],
    "solutions": [
      "bash --version"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Version"
  },
  {
    "id": 5,
    "title": "Versiyaning Birinchi Satrini Kesib Olish",
    "story": "Darslik 2-sahifasi namunasi: <code>bash --version | head -n 1</code> orqali faqat bosh satrni ko'rish.",
    "taskUz": "Bash versiyasining faqat 1-satrini ekranga chiqaring.",
    "expectedSql": "bash --version | head -n 1",
    "expectedBash": "bash --version | head -n 1",
    "hint": "`bash --version | head -n 1` buyrug'ini bering.",
    "tags": [
      "BASH",
      "PIPE",
      "HEAD"
    ],
    "solutions": [
      "bash --version | head -n 1",
      "bash --version | head -1"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Filtered Version"
  },
  {
    "id": 6,
    "title": "Server Tarmoq Nomi",
    "story": "Debian serverining tarmoqdagi nomini aniqlang.",
    "taskUz": "<code>hostname</code> buyrug'ini bering.",
    "expectedSql": "hostname",
    "expectedBash": "hostname",
    "hint": "`hostname` buyrug'ini kiriting.",
    "tags": [
      "HOSTNAME",
      "NETWORK",
      "SYS"
    ],
    "solutions": [
      "hostname",
      "/bin/hostname"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Command Reference • Hostname"
  },
  {
    "id": 7,
    "title": "Laboratoriya Maxsus Katalogini Ochish",
    "story": "Darslik 4-sahifasi: Barcha skriptlar tartibli saqlanishi uchun maxsus papka ochish kerak.",
    "taskUz": "<code>mkdir -p ~/os_lab_process_bash</code> buyrug'i orqali katalog yarating.",
    "expectedSql": "mkdir -p ~/os_lab_process_bash",
    "expectedBash": "mkdir -p ~/os_lab_process_bash",
    "hint": "`mkdir -p ~/os_lab_process_bash` buyrug'ini bering.",
    "tags": [
      "MKDIR",
      "PARENTS",
      "WORKSPACE"
    ],
    "solutions": [
      "mkdir -p ~/os_lab_process_bash",
      "mkdir -p /home/student/os_lab_process_bash"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Create Workspace"
  },
  {
    "id": 8,
    "title": "Laboratoriya Katalogiga O'tish",
    "story": "Yangi ochilgan laboratoriya papkasiga kiring.",
    "taskUz": "<code>cd ~/os_lab_process_bash</code> buyrug'ini bering.",
    "expectedSql": "cd ~/os_lab_process_bash",
    "expectedBash": "cd ~/os_lab_process_bash",
    "hint": "`cd ~/os_lab_process_bash` buyrug'ini kiriting.",
    "tags": [
      "CD",
      "WORKSPACE",
      "NAVIGATION"
    ],
    "solutions": [
      "cd ~/os_lab_process_bash",
      "cd /home/student/os_lab_process_bash"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Change Dir"
  },
  {
    "id": 9,
    "title": "Katalog Manzilini Qayta Tasdiqlash",
    "story": "Haqiqatan ham <code>os_lab_process_bash</code> ichida ekanligingizni tekshiring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "`pwd` buyrug'ini bering.",
    "tags": [
      "PWD",
      "VERIFY",
      "PATH"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Confirm Path"
  },
  {
    "id": 10,
    "title": "Redirection Sinovi: Birinchi Satrni Yozish (>)",
    "story": "Darslik 4-sahifasi: <code>echo \"First line\" > message.txt</code> orqali faylga matn yo'naltiring.",
    "taskUz": "<code>echo \"First line\" > message.txt</code> buyrug'ini bering.",
    "expectedSql": "echo \"First line\" > message.txt",
    "expectedBash": "echo \"First line\" > message.txt",
    "hint": "`echo \"First line\" > message.txt` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "REDIRECT",
      "STDOUT"
    ],
    "solutions": [
      "echo \"First line\" > message.txt",
      "echo 'First line' > message.txt"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Section 4.2 • Redirection"
  },
  {
    "id": 11,
    "title": "Redirection Sinovi: Ikkinchi Satrni Qo'shish (>>)",
    "story": "Darslik 4-sahifasi: Fayl oxiriga yangi satrni append qilish (<code>>></code>).",
    "taskUz": "<code>echo \"Second line\" >> message.txt</code> buyrug'ini bering.",
    "expectedSql": "echo \"Second line\" >> message.txt",
    "expectedBash": "echo \"Second line\" >> message.txt",
    "hint": "`echo \"Second line\" >> message.txt` buyrug'ini bering.",
    "tags": [
      "ECHO",
      "APPEND",
      "STDOUT"
    ],
    "solutions": [
      "echo \"Second line\" >> message.txt",
      "echo 'Second line' >> message.txt"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Section 4.2 • Append"
  },
  {
    "id": 12,
    "title": "Yaratilgan Hujjatni O'qish",
    "story": "Darslik 4-sahifasi: <code>cat message.txt</code> orqali natijani ko'ring.",
    "taskUz": "<code>cat message.txt</code> buyrug'ini bering.",
    "expectedSql": "cat message.txt",
    "expectedBash": "cat message.txt",
    "hint": "`cat message.txt` buyrug'ini bering.",
    "tags": [
      "CAT",
      "READ",
      "VERIFY"
    ],
    "solutions": [
      "cat message.txt"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Section 4.2 • Cat"
  },
  {
    "id": 13,
    "title": "Vaqtinchalik Xabarni O'chirish",
    "story": "Test tugagach, <code>message.txt</code> faylini o'chiring.",
    "taskUz": "<code>rm message.txt</code> buyrug'ini bering.",
    "expectedSql": "rm message.txt",
    "expectedBash": "rm message.txt",
    "hint": "`rm message.txt` buyrug'ini kiriting.",
    "tags": [
      "RM",
      "CLEANUP",
      "FILES"
    ],
    "solutions": [
      "rm message.txt"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Cleanup • Remove test"
  },
  {
    "id": 14,
    "title": "Laboratoriya Ichidagi Fayllarni Ko'rish",
    "story": "Katalogdagi mavjud fayllarni ro'yxatlang.",
    "taskUz": "<code>ls</code> buyrug'ini bering.",
    "expectedSql": "ls",
    "expectedBash": "ls",
    "hint": "`ls` buyrug'ini bering.",
    "tags": [
      "LS",
      "FILES",
      "DIRECTORY"
    ],
    "solutions": [
      "ls"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • List"
  },
  {
    "id": 15,
    "title": "Yashirin Fayllar Bilan Ko'rish",
    "story": "Katalogdagi barcha fayl va nuqta bilan boshlanuvchi yashirin fayllarni batafsil ko'ring.",
    "taskUz": "<code>ls -la</code> buyrug'ini bering.",
    "expectedSql": "ls -la",
    "expectedBash": "ls -la",
    "hint": "`ls -la` buyrug'ini bering.",
    "tags": [
      "LS",
      "HIDDEN",
      "PERMISSIONS"
    ],
    "solutions": [
      "ls -la",
      "ls -l -a"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S03 Activity 1 • Long list"
  },
  {
    "id": 16,
    "title": "Joriy Terminal Protsesslarini Ko'rish",
    "story": "Darslik 5-sahifasi: Faol terminalga bog'langan protsesslar snapshotini ko'ring.",
    "taskUz": "Oddiy <code>ps</code> buyrug'ini bering.",
    "expectedSql": "ps",
    "expectedBash": "ps",
    "hint": "`ps` buyrug'ini bering.",
    "tags": [
      "PS",
      "PROCESS",
      "SNAPSHOT"
    ],
    "solutions": [
      "ps",
      "/bin/ps"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • Simple ps"
  },
  {
    "id": 17,
    "title": "Barcha Foydalanuvchilar Protsesslari",
    "story": "Darslik 5-sahifasi: Tizimdagi barcha foydalanuvchilar va fon xizmatlari (daemons) protsesslarini ko'ring.",
    "taskUz": "<code>ps aux</code> buyrug'ini bering.",
    "expectedSql": "ps aux",
    "expectedBash": "ps aux",
    "hint": "`ps aux` buyrug'ini bering.",
    "tags": [
      "PS",
      "AUX",
      "ALL_USERS"
    ],
    "solutions": [
      "ps aux"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • ps aux"
  },
  {
    "id": 18,
    "title": "Protsesslar Ro'yxatining Dastlabki 10 Qatorini Ko'rish",
    "story": "Darslik 5-sahifasi: <code>ps aux | head -n 10</code> orqali birinchi 10 ta qatorni ajrating.",
    "taskUz": "<code>ps aux | head -n 10</code> buyrug'ini bering.",
    "expectedSql": "ps aux | head -n 10",
    "expectedBash": "ps aux | head -n 10",
    "hint": "`ps aux | head -n 10` buyrug'ini bering.",
    "tags": [
      "PS",
      "HEAD",
      "PIPELINE"
    ],
    "solutions": [
      "ps aux | head -n 10",
      "ps aux | head -10"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • ps head 10"
  },
  {
    "id": 19,
    "title": "Bash Protsesslarini Pgrep Bilan Topish",
    "story": "Darslik 5-sahifasi: Bash dasturi ishlayotgan barcha PID larni va buyruq satrini ko'rish.",
    "taskUz": "<code>pgrep -a bash</code> buyrug'ini bering.",
    "expectedSql": "pgrep -a bash",
    "expectedBash": "pgrep -a bash",
    "hint": "`pgrep -a bash` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "BASH",
      "SEARCH"
    ],
    "solutions": [
      "pgrep -a bash"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • pgrep bash"
  },
  {
    "id": 20,
    "title": "Interaktiv Protsesslar Monitorini Ochish",
    "story": "Darslik 5-sahifasi: CPU va xotira yuklamasini jonli ko'rsatuvchi interaktiv monitoring dasturini oching.",
    "taskUz": "<code>top</code> buyrug'ini bering.",
    "expectedSql": "top",
    "expectedBash": "top",
    "hint": "`top` buyrug'ini bering.",
    "tags": [
      "TOP",
      "MONITOR",
      "CPU"
    ],
    "solutions": [
      "top",
      "/usr/bin/top"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • top viewer"
  },
  {
    "id": 21,
    "title": "Protsesslar Ro'yxatining Boshlang'ich 5 Satrini Ko'rish",
    "story": "Sarlavha va eng muhim tizim jarayonlarini ko'rish uchun <code>head -n 5</code> dan foydalaning.",
    "taskUz": "<code>ps aux | head -n 5</code> buyrug'ini bering.",
    "expectedSql": "ps aux | head -n 5",
    "expectedBash": "ps aux | head -n 5",
    "hint": "`ps aux | head -n 5` buyrug'ini bering.",
    "tags": [
      "PS",
      "HEAD",
      "SYSTEM"
    ],
    "solutions": [
      "ps aux | head -n 5",
      "ps aux | head -5"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • Top 5"
  },
  {
    "id": 22,
    "title": "Protsesslar Umumiy Sonini Hisoblash",
    "story": "Serverda qancha jarayon ishlayotganini quvur (pipe) orqali sanang.",
    "taskUz": "<code>ps aux | wc -l</code> buyrug'ini bering.",
    "expectedSql": "ps aux | wc -l",
    "expectedBash": "ps aux | wc -l",
    "hint": "`ps aux | wc -l` buyrug'ini bering.",
    "tags": [
      "PS",
      "WC",
      "COUNT"
    ],
    "solutions": [
      "ps aux | wc -l"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • Total Count"
  },
  {
    "id": 23,
    "title": "Faqat Student Foydalanuvchisiga Tegishli Protsesslar",
    "story": "Joriy talaba foydalanuvchisi boshqaruvidagi jarayonlarni filtrlang.",
    "taskUz": "<code>ps aux | grep student</code> buyrug'ini bering.",
    "expectedSql": "ps aux | grep student",
    "expectedBash": "ps aux | grep student",
    "hint": "`ps aux | grep student` buyrug'ini bering.",
    "tags": [
      "PS",
      "GREP",
      "FILTER"
    ],
    "solutions": [
      "ps aux | grep student",
      "ps aux | grep \"student\""
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • User Filter"
  },
  {
    "id": 24,
    "title": "Xotira Sarfi Bo'yicha Saralash (--sort=-%mem)",
    "story": "Darslik 17-sahifasi: Eng ko'p operativ xotira (RAM) yeyayotgan jarayonlarni birinchi o'ringa chiqarish.",
    "taskUz": "<code>ps aux --sort=-%mem | head -n 6</code> buyrug'ini bering.",
    "expectedSql": "ps aux --sort=-%mem | head -n 6",
    "expectedBash": "ps aux --sort=-%mem | head -n 6",
    "hint": "`ps aux --sort=-%mem | head -n 6` buyrug'ini bering.",
    "tags": [
      "PS",
      "SORT_MEM",
      "RESOURCE_AUDIT"
    ],
    "solutions": [
      "ps aux --sort=-%mem | head -n 6",
      "ps aux --sort=-%mem | head -6"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S03 Activity 18 • Memory Sort"
  },
  {
    "id": 25,
    "title": "Systemd Bosh Protsessini Topish",
    "story": "Linuxda 1-PID har doim systemd yoki init dasturiga tegishli bo'ladi.",
    "taskUz": "<code>ps aux | grep init</code> yoki <code>ps aux | grep systemd</code> buyrug'ini bering.",
    "expectedSql": "ps aux | grep systemd",
    "expectedBash": "ps aux | grep systemd",
    "hint": "`ps aux | grep systemd` buyrug'ini bering.",
    "tags": [
      "PS",
      "SYSTEMD",
      "PID_1"
    ],
    "solutions": [
      "ps aux | grep systemd",
      "ps aux | grep init"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • PID 1"
  },
  {
    "id": 26,
    "title": "Cron Tungi Rejalashtiruvchi Jarayonini Topish",
    "story": "Vaqti-vaqti bilan avtomatik vazifalarni bajaruvchi cron xizmatining faolligini tekshiring.",
    "taskUz": "<code>pgrep -a cron</code> buyrug'ini bering.",
    "expectedSql": "pgrep -a cron",
    "expectedBash": "pgrep -a cron",
    "hint": "`pgrep -a cron` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "CRON",
      "DAEMON"
    ],
    "solutions": [
      "pgrep -a cron"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • Cron Daemon"
  },
  {
    "id": 27,
    "title": "SSHD Masofaviy Kirish Jarayonini Topish",
    "story": "SSH orqali xavfsiz ulanishni ta'minlovchi sshd server jarayonini tekshiring.",
    "taskUz": "<code>pgrep -a sshd</code> buyrug'ini bering.",
    "expectedSql": "pgrep -a sshd",
    "expectedBash": "pgrep -a sshd",
    "hint": "`pgrep -a sshd` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "SSHD",
      "SECURITY"
    ],
    "solutions": [
      "pgrep -a sshd"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • SSHD Process"
  },
  {
    "id": 28,
    "title": "Faqat Bash PID Raqamini Olish",
    "story": "Boshqa ma'lumotlarsiz faqat toza PID raqamining o'zini olish.",
    "taskUz": "<code>pgrep bash</code> buyrug'ini bering.",
    "expectedSql": "pgrep bash",
    "expectedBash": "pgrep bash",
    "hint": "`pgrep bash` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "RAW_PID",
      "SCRIPTS"
    ],
    "solutions": [
      "pgrep bash"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • Raw PID"
  },
  {
    "id": 29,
    "title": "Joriy Terminalning Standart ps Snapshotini Qayta Ko'rish",
    "story": "Faqat hozirgi terminalda ishlayotgan qisqa ro'yxatni ko'rish.",
    "taskUz": "<code>ps</code> buyrug'ini bering.",
    "expectedSql": "ps",
    "expectedBash": "ps",
    "hint": "`ps` buyrug'ini bering.",
    "tags": [
      "PS",
      "TERMINAL",
      "CLEAN"
    ],
    "solutions": [
      "ps"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S03 Activity 2 • ps"
  },
  {
    "id": 30,
    "title": "Xotira Sarfi Bo'yicha Bosh 10 Qator",
    "story": "RAM bo'yicha eng yuqori 10 ta jarayonni ko'ring.",
    "taskUz": "<code>ps aux --sort=-%mem | head -n 10</code> buyrug'ini bering.",
    "expectedSql": "ps aux --sort=-%mem | head -n 10",
    "expectedBash": "ps aux --sort=-%mem | head -n 10",
    "hint": "`ps aux --sort=-%mem | head -n 10` buyrug'ini bering.",
    "tags": [
      "PS",
      "MEM_AUDIT",
      "HEAD"
    ],
    "solutions": [
      "ps aux --sort=-%mem | head -n 10",
      "ps aux --sort=-%mem | head -10"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S03 Activity 18 • Memory Audit"
  },
  {
    "id": 31,
    "title": "Xavfsiz Test Jarayonini Fonda Boshlash",
    "story": "Darslik 5-sahifasi: Terminalni band qilmasdan, 300 soniyalik (5 daqiqa) kutish jarayonini fonda ishga tushiring.",
    "taskUz": "<code>sleep 300 &</code> buyrug'ini bering.",
    "expectedSql": "sleep 300 &",
    "expectedBash": "sleep 300 &",
    "hint": "`sleep 300 &` buyrug'ini bering.",
    "tags": [
      "SLEEP",
      "BACKGROUND",
      "&"
    ],
    "solutions": [
      "sleep 300 &"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Background Job"
  },
  {
    "id": 32,
    "title": "Joriy Shell Nazoratidagi Joblarni Ko'rish",
    "story": "Darslik 5-sahifasi: Terminal boshqaruvi ostidagi barcha fon va to'xtatilgan vazifalarni PID lari bilan ko'ring.",
    "taskUz": "<code>jobs -l</code> buyrug'ini bering.",
    "expectedSql": "jobs -l",
    "expectedBash": "jobs -l",
    "hint": "`jobs -l` buyrug'ini bering.",
    "tags": [
      "JOBS",
      "-L",
      "PID_LIST"
    ],
    "solutions": [
      "jobs -l"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Jobs -l"
  },
  {
    "id": 33,
    "title": "Nom Bo'yicha Fon Jarayonini Qidirish",
    "story": "Darslik 5-sahifasi: Fonda ishlayotgan sleep dasturining PID va parametrlarini toping.",
    "taskUz": "<code>pgrep -a sleep</code> buyrug'ini bering.",
    "expectedSql": "pgrep -a sleep",
    "expectedBash": "pgrep -a sleep",
    "hint": "`pgrep -a sleep` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "SLEEP",
      "AUDIT"
    ],
    "solutions": [
      "pgrep -a sleep"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Find sleep"
  },
  {
    "id": 34,
    "title": "Fon Jarayonini Oldingi Planga Qaytarish",
    "story": "Darslik 6-sahifasi: Fonda ishlayotgan 1-raqamli jobni yana faol klaviatura nazoratiga qaytaring.",
    "taskUz": "<code>fg %1</code> buyrug'ini bering.",
    "expectedSql": "fg %1",
    "expectedBash": "fg %1",
    "hint": "`fg %1` buyrug'ini bering.",
    "tags": [
      "FG",
      "FOREGROUND",
      "%1"
    ],
    "solutions": [
      "fg %1",
      "fg 1"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Foreground"
  },
  {
    "id": 35,
    "title": "To'xtatilgan Jarayonni Fonda Qayta Davom Ettirish",
    "story": "Darslik 6-sahifasi: Ctrl+Z orqali to'xtatilgan vazifani fonda davom ettirish.",
    "taskUz": "<code>bg %1</code> buyrug'ini bering.",
    "expectedSql": "bg %1",
    "expectedBash": "bg %1",
    "hint": "`bg %1` buyrug'ini bering.",
    "tags": [
      "BG",
      "RESUME",
      "BACKGROUND"
    ],
    "solutions": [
      "bg %1",
      "bg 1"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Background Resume"
  },
  {
    "id": 36,
    "title": "Oddiy jobs Ro'yxatini Ko'rish",
    "story": "PID raqamlarisiz qisqa formatda fon joblarini ko'ring.",
    "taskUz": "<code>jobs</code> buyrug'ini bering.",
    "expectedSql": "jobs",
    "expectedBash": "jobs",
    "hint": "`jobs` buyrug'ini bering.",
    "tags": [
      "JOBS",
      "STATUS",
      "LIST"
    ],
    "solutions": [
      "jobs"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Short Jobs"
  },
  {
    "id": 37,
    "title": "Fon Jarayonini Xushmuomalalik Bilan Yakunlash",
    "story": "Darslik 6-sahifasi: 1-raqamli jobga odatiy tugatish (SIGTERM) signalini yuboring.",
    "taskUz": "<code>kill %1</code> buyrug'ini bering.",
    "expectedSql": "kill %1",
    "expectedBash": "kill %1",
    "hint": "`kill %1` buyrug'ini bering.",
    "tags": [
      "KILL",
      "SIGTERM",
      "%1"
    ],
    "solutions": [
      "kill %1",
      "kill 1"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Terminate Job"
  },
  {
    "id": 38,
    "title": "Jarayon To'xtaganligini Tasdiqlash",
    "story": "Darslik 6-sahifasi: <code>jobs -l</code> orqali job ro'yxati bo'shaganligini tekshiring.",
    "taskUz": "<code>jobs -l</code> buyrug'ini bering.",
    "expectedSql": "jobs -l",
    "expectedBash": "jobs -l",
    "hint": "`jobs -l` buyrug'ini bering.",
    "tags": [
      "JOBS",
      "VERIFY",
      "CLEAN"
    ],
    "solutions": [
      "jobs -l"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Activity 3 • Confirm Termination"
  },
  {
    "id": 39,
    "title": "Yangi Qisqa Fon Jarayoni Boshlash",
    "story": "Tajriba uchun 60 soniyalik yangi fon jarayonini ishga tushiring.",
    "taskUz": "<code>sleep 60 &</code> buyrug'ini bering.",
    "expectedSql": "sleep 60 &",
    "expectedBash": "sleep 60 &",
    "hint": "`sleep 60 &` buyrug'ini bering.",
    "tags": [
      "SLEEP",
      "BG",
      "TEST"
    ],
    "solutions": [
      "sleep 60 &"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Practice • sleep 60"
  },
  {
    "id": 40,
    "title": "Yangi Jobni Ko'rish",
    "story": "Hosil bo'lgan yangi fon vazifasini <code>jobs</code> orqali ko'ring.",
    "taskUz": "<code>jobs</code> buyrug'ini bering.",
    "expectedSql": "jobs",
    "expectedBash": "jobs",
    "hint": "`jobs` buyrug'ini bering.",
    "tags": [
      "JOBS",
      "CHECK",
      "LIST"
    ],
    "solutions": [
      "jobs"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Practice • Jobs check"
  },
  {
    "id": 41,
    "title": "Yangi Jobni To'xtatish",
    "story": "Ishga tushgan 2-raqamli vazifani <code>kill %2</code> orqali to'xtating.",
    "taskUz": "<code>kill %2</code> buyrug'ini bering.",
    "expectedSql": "kill %2",
    "expectedBash": "kill %2",
    "hint": "`kill %2` buyrug'ini bering.",
    "tags": [
      "KILL",
      "JOB_2",
      "STOP"
    ],
    "solutions": [
      "kill %2",
      "kill 2"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Practice • Kill job 2"
  },
  {
    "id": 42,
    "title": "Barcha Sleep Jarayonlarini Nom Bo'yicha Tugatish",
    "story": "Darslik 6-sahifasi: Barcha mos keluvchi sleep jarayonlariga signal yuborish.",
    "taskUz": "<code>pkill sleep</code> buyrug'ini bering.",
    "expectedSql": "pkill sleep",
    "expectedBash": "pkill sleep",
    "hint": "`pkill sleep` buyrug'ini bering.",
    "tags": [
      "PKILL",
      "NAME_SIGNAL",
      "CLEANUP"
    ],
    "solutions": [
      "pkill sleep"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Command Ref • pkill"
  },
  {
    "id": 43,
    "title": "Killall Bilan To'liq Tozalash",
    "story": "Darslik 6-sahifasi: <code>killall sleep</code> buyrug'i orqali to'liq tozalang.",
    "taskUz": "<code>killall sleep</code> buyrug'ini bering.",
    "expectedSql": "killall sleep",
    "expectedBash": "killall sleep",
    "hint": "`killall sleep` buyrug'ini bering.",
    "tags": [
      "KILLALL",
      "EXACT_NAME",
      "SIGNALS"
    ],
    "solutions": [
      "killall sleep"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Command Ref • killall"
  },
  {
    "id": 44,
    "title": "Jobs Bo'shligini Qayta Tasdiqlash",
    "story": "Barcha fon vazifalari to'liq yakunlanganini tekshiring.",
    "taskUz": "<code>jobs</code> buyrug'ini bering.",
    "expectedSql": "jobs",
    "expectedBash": "jobs",
    "hint": "`jobs` buyrug'ini bering.",
    "tags": [
      "JOBS",
      "CLEAN",
      "FINAL"
    ],
    "solutions": [
      "jobs"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Practice • Confirm All Clear"
  },
  {
    "id": 45,
    "title": "Pgrep Bilan Hech Qanday Sleep Qolmaganini Tekshirish",
    "story": "Sleep dasturi endi ro'yxatda yo'qligini tekshiring.",
    "taskUz": "<code>pgrep sleep</code> buyrug'ini bering.",
    "expectedSql": "pgrep sleep",
    "expectedBash": "pgrep sleep",
    "hint": "`pgrep sleep` buyrug'ini bering.",
    "tags": [
      "PGREP",
      "ZERO_PROCESS",
      "VERIFY"
    ],
    "solutions": [
      "pgrep sleep"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S03 Practice • Zero Sleep"
  },
  {
    "id": 46,
    "title": "Protsesslar Daraxtini Vizual Ko'rish",
    "story": "Darslik 5-sahifasi: Ota-bola (parent-child) jarayonlar ierarxiyasini daraxt ko'rinishida oching.",
    "taskUz": "<code>pstree</code> buyrug'ini bering.",
    "expectedSql": "pstree",
    "expectedBash": "pstree",
    "hint": "`pstree` buyrug'ini bering.",
    "tags": [
      "PSTREE",
      "HIERARCHY",
      "TREE"
    ],
    "solutions": [
      "pstree",
      "/usr/bin/pstree"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 2 • pstree"
  },
  {
    "id": 47,
    "title": "PID Raqamlari Bilan Daraxtni Ko'rish",
    "story": "Darslik 5-sahifasi: Har bir protsess nomi yonida uning aniq PID raqamini ko'rsatuvchi <code>-p</code> bayrog'idan foydalaning.",
    "taskUz": "<code>pstree -p</code> buyrug'ini bering.",
    "expectedSql": "pstree -p",
    "expectedBash": "pstree -p",
    "hint": "`pstree -p` buyrug'ini bering.",
    "tags": [
      "PSTREE",
      "-P",
      "PIDS"
    ],
    "solutions": [
      "pstree -p"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Activity 2 • pstree -p"
  },
  {
    "id": 48,
    "title": "Daraxtning Boshlang'ich 20 Qatorini Kesib Ko'rish",
    "story": "Darslik 5-sahifasi namunasi: <code>pstree -p | head -n 20</code> orqali birinchi 20 qatorni ko'ring.",
    "taskUz": "<code>pstree -p | head -n 20</code> buyrug'ini bering.",
    "expectedSql": "pstree -p | head -n 20",
    "expectedBash": "pstree -p | head -n 20",
    "hint": "`pstree -p | head -n 20` buyrug'ini bering.",
    "tags": [
      "PSTREE",
      "PIPE",
      "HEAD_20"
    ],
    "solutions": [
      "pstree -p | head -n 20",
      "pstree -p | head -20"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S03 Activity 2 • pstree head 20"
  },
  {
    "id": 49,
    "title": "Aniq PID Raqamiga SIGTERM Signal Yuborish",
    "story": "Darslik 6-sahifasi: Fon jarayoni 2458 ga bevosita PID bo'yicha kill yuborish.",
    "taskUz": "<code>kill 2458</code> buyrug'ini bering.",
    "expectedSql": "kill 2458",
    "expectedBash": "kill 2458",
    "hint": "`kill 2458` buyrug'ini bering.",
    "tags": [
      "KILL",
      "PID",
      "SIGTERM"
    ],
    "solutions": [
      "kill 2458"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Command Ref • Kill PID"
  },
  {
    "id": 50,
    "title": "Nima Uchun kill -9 Ishlatilmasligi Kerak?",
    "story": "Darslik 6-sahifasi ogohlantirishi: Normal kill jarayonga tozalanish (clean up) imkonini beradi. Standart kill buyrug'ini bering.",
    "taskUz": "<code>kill 2458</code> buyrug'ini bering.",
    "expectedSql": "kill 2458",
    "expectedBash": "kill 2458",
    "hint": "`kill 2458` buyrug'ini bering.",
    "tags": [
      "KILL",
      "SAFETY",
      "BEST_PRACTICE"
    ],
    "solutions": [
      "kill 2458"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S03 Good Practice • Kill Safety"
  }
];
