// ============================================================================
// QUESTION GENERATOR FOR WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3
// Generates exactly 150 questions (15 per sector x 10 sectors)
// Saves to data/questions_1_50.js, questions_51_100.js, questions_101_150.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const questions = [];

function addQ(id, title, story, taskUz, expectedCmd, hint, tags, solutions, sector, difficulty, source) {
  if (arguments.length === 10) {
    source = difficulty;
    difficulty = sector;
    sector = solutions;
    solutions = tags;
    tags = hint;
    hint = expectedCmd;
    expectedCmd = taskUz;
    taskUz = story;
    story = title + " bo'yicha amaliy topshiriq.";
  }
  questions.push({
    id,
    title,
    story,
    taskUz,
    expectedSql: expectedCmd, // alias
    expectedBash: expectedCmd,
    hint,
    tags,
    solutions: solutions || [expectedCmd],
    sector,
    difficulty,
    source
  });
}

// ----------------------------------------------------------------------------
// SECTOR 1 (1 - 15): Workspace Tayyorlash & Tizim Tekshiruvi
// ----------------------------------------------------------------------------
addQ(1, "Joriy Tizim Foydalanuvchisini Tekshirish",
  "Laboratoriya xavfsizlik qoidasi: Darslik talabiga ko'ra laboratoriya faqat oddiy (non-root) foydalanuvchi nomidan bajariladi.",
  "Faol terminal sessiyasidagi foydalanuvchi nomini aniqlang.",
  "whoami",
  "`whoami` buyrug'ini bering.",
  ["WHOAMI", "ENV", "VERIFICATION"],
  ["whoami", "/usr/bin/whoami"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Setup");

addQ(2, "Boshlang'ich Papka Manzilini Ko'rish",
  "Tizimga kirgandan so'ng qaysi katalogda turganingizni aniqlash lozim.",
  "Joriy ishchi katalogning to'liq manzilini ekranga chiqaring.",
  "pwd",
  "`pwd` buyrug'ini kiriting.",
  ["PWD", "PATH", "VERIFICATION"],
  ["pwd", "/bin/pwd"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Setup");

addQ(3, "Standart Shell Muhit O'zgaruvchisini Ko'rish",
  "Darslik 2-sahifasi: Foydalanuvchining standart qobig'i qaysi dastur ekanligini <code>$SHELL</code> orqali tekshiring.",
  "<code>$SHELL</code> o'zgaruvchisini ekranga chiqaring.",
  "echo \"$SHELL\"",
  "`echo \"$SHELL\"` buyrug'ini bering.",
  ["ECHO", "SHELL_VAR", "ENV"],
  ["echo \"$SHELL\"", "echo $SHELL"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Shell Check");

addQ(4, "Bash Dasturi Versiyasini Tekshirish",
  "Darslik talabi: Tizimdagi GNU Bash versiyasini ko'rish.",
  "<code>bash --version</code> buyrug'ini bering.",
  "bash --version",
  "`bash --version` buyrug'ini bering.",
  ["BASH", "VERSION", "ENVIRONMENT"],
  ["bash --version"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Version");

addQ(5, "Versiyaning Birinchi Satrini Kesib Olish",
  "Darslik 2-sahifasi namunasi: <code>bash --version | head -n 1</code> orqali faqat bosh satrni ko'rish.",
  "Bash versiyasining faqat 1-satrini ekranga chiqaring.",
  "bash --version | head -n 1",
  "`bash --version | head -n 1` buyrug'ini bering.",
  ["BASH", "PIPE", "HEAD"],
  ["bash --version | head -n 1", "bash --version | head -1"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Filtered Version");

addQ(6, "Server Tarmoq Nomi (Hostname)",
  "Debian serverining tarmoqdagi nomini aniqlang.",
  "<code>hostname</code> buyrug'ini bering.",
  "hostname",
  "`hostname` buyrug'ini kiriting.",
  ["HOSTNAME", "NETWORK", "SYS"],
  ["hostname", "/bin/hostname"],
  1, "1-Qavat • Oson", "S03 Command Reference • Hostname");

addQ(7, "Laboratoriya Maxsus Katalogini Ochish",
  "Darslik 4-sahifasi: Barcha skriptlar tartibli saqlanishi uchun maxsus papka ochish kerak.",
  "<code>mkdir -p ~/os_lab_process_bash</code> buyrug'i orqali katalog yarating.",
  "mkdir -p ~/os_lab_process_bash",
  "`mkdir -p ~/os_lab_process_bash` buyrug'ini bering.",
  ["MKDIR", "PARENTS", "WORKSPACE"],
  ["mkdir -p ~/os_lab_process_bash", "mkdir -p /home/student/os_lab_process_bash"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Create Workspace");

addQ(8, "Laboratoriya Katalogiga O'tish",
  "Yangi ochilgan laboratoriya papkasiga kiring.",
  "<code>cd ~/os_lab_process_bash</code> buyrug'ini bering.",
  "cd ~/os_lab_process_bash",
  "`cd ~/os_lab_process_bash` buyrug'ini kiriting.",
  ["CD", "WORKSPACE", "NAVIGATION"],
  ["cd ~/os_lab_process_bash", "cd /home/student/os_lab_process_bash"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Change Dir");

addQ(9, "Katalog Manzilini Qayta Tasdiqlash",
  "Haqiqatan ham <code>os_lab_process_bash</code> ichida ekanligingizni tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "`pwd` buyrug'ini bering.",
  ["PWD", "VERIFY", "PATH"],
  ["pwd"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Confirm Path");

addQ(10, "Redirection Sinovi: Birinchi Satrni Yozish (>)",
  "Darslik 4-sahifasi: <code>echo \"First line\" > message.txt</code> orqali faylga matn yo'naltiring.",
  "<code>echo \"First line\" > message.txt</code> buyrug'ini bering.",
  "echo \"First line\" > message.txt",
  "`echo \"First line\" > message.txt` buyrug'ini bering.",
  ["ECHO", "REDIRECT", "STDOUT"],
  ["echo \"First line\" > message.txt", "echo 'First line' > message.txt"],
  1, "1-Qavat • Oson", "S03 Section 4.2 • Redirection");

addQ(11, "Redirection Sinovi: Ikkinchi Satrni Qo'shish (>>)",
  "Darslik 4-sahifasi: Fayl oxiriga yangi satrni append qilish (<code>>></code>).",
  "<code>echo \"Second line\" >> message.txt</code> buyrug'ini bering.",
  "echo \"Second line\" >> message.txt",
  "`echo \"Second line\" >> message.txt` buyrug'ini bering.",
  ["ECHO", "APPEND", "STDOUT"],
  ["echo \"Second line\" >> message.txt", "echo 'Second line' >> message.txt"],
  1, "1-Qavat • Oson", "S03 Section 4.2 • Append");

addQ(12, "Yaratilgan Hujjatni O'qish",
  "Darslik 4-sahifasi: <code>cat message.txt</code> orqali natijani ko'ring.",
  "<code>cat message.txt</code> buyrug'ini bering.",
  "cat message.txt",
  "`cat message.txt` buyrug'ini bering.",
  ["CAT", "READ", "VERIFY"],
  ["cat message.txt"],
  1, "1-Qavat • Oson", "S03 Section 4.2 • Cat");

addQ(13, "Vaqtinchalik Xabarni O'chirish",
  "Test tugagach, <code>message.txt</code> faylini o'chiring.",
  "<code>rm message.txt</code> buyrug'ini bering.",
  "rm message.txt",
  "`rm message.txt` buyrug'ini kiriting.",
  ["RM", "CLEANUP", "FILES"],
  ["rm message.txt"],
  1, "1-Qavat • Oson", "S03 Cleanup • Remove test");

addQ(14, "Laboratoriya Ichidagi Fayllarni Ko'rish",
  "Katalogdagi mavjud fayllarni ro'yxatlang.",
  "<code>ls</code> buyrug'ini bering.",
  "ls",
  "`ls` buyrug'ini bering.",
  ["LS", "FILES", "DIRECTORY"],
  ["ls"],
  1, "1-Qavat • Oson", "S03 Activity 1 • List");

addQ(15, "Yashirin Fayllar Bilan Ko'rish (-la)",
  "Katalogdagi barcha fayl va nuqta bilan boshlanuvchi yashirin fayllarni batafsil ko'ring.",
  "<code>ls -la</code> buyrug'ini bering.",
  "ls -la",
  "`ls -la` buyrug'ini bering.",
  ["LS", "HIDDEN", "PERMISSIONS"],
  ["ls -la", "ls -l -a"],
  1, "1-Qavat • Oson", "S03 Activity 1 • Long list");

// ----------------------------------------------------------------------------
// SECTOR 2 (16 - 30): Protsesslar Audit & Ko'rish (ps, ps aux, top, pgrep)
// ----------------------------------------------------------------------------
addQ(16, "Joriy Terminal Protsesslarini Ko'rish (ps)",
  "Darslik 5-sahifasi: Faol terminalga bog'langan protsesslar snapshotini ko'ring.",
  "Oddiy <code>ps</code> buyrug'ini bering.",
  "ps",
  "`ps` buyrug'ini bering.",
  ["PS", "PROCESS", "SNAPSHOT"],
  ["ps", "/bin/ps"],
  2, "2-Qavat • Oson", "S03 Activity 2 • Simple ps");

addQ(17, "Barcha Foydalanuvchilar Protsesslari (ps aux)",
  "Darslik 5-sahifasi: Tizimdagi barcha foydalanuvchilar va fon xizmatlari (daemons) protsesslarini ko'ring.",
  "<code>ps aux</code> buyrug'ini bering.",
  "ps aux",
  "`ps aux` buyrug'ini bering.",
  ["PS", "AUX", "ALL_USERS"],
  ["ps aux"],
  2, "2-Qavat • Oson", "S03 Activity 2 • ps aux");

addQ(18, "Protsesslar Ro'yxatining Dastlabki 10 Qatorini Ko'rish",
  "Darslik 5-sahifasi: <code>ps aux | head -n 10</code> orqali birinchi 10 ta qatorni ajrating.",
  "<code>ps aux | head -n 10</code> buyrug'ini bering.",
  "ps aux | head -n 10",
  "`ps aux | head -n 10` buyrug'ini bering.",
  ["PS", "HEAD", "PIPELINE"],
  ["ps aux | head -n 10", "ps aux | head -10"],
  2, "2-Qavat • Oson", "S03 Activity 2 • ps head 10");

addQ(19, "Bash Protsesslarini Pgrep Bilan Topish",
  "Darslik 5-sahifasi: Bash dasturi ishlayotgan barcha PID larni va buyruq satrini ko'rish.",
  "<code>pgrep -a bash</code> buyrug'ini bering.",
  "pgrep -a bash",
  "`pgrep -a bash` buyrug'ini bering.",
  ["PGREP", "BASH", "SEARCH"],
  ["pgrep -a bash"],
  2, "2-Qavat • Oson", "S03 Activity 2 • pgrep bash");

addQ(20, "Interaktiv Protsesslar Monitorini Ochish (top)",
  "Darslik 5-sahifasi: CPU va xotira yuklamasini jonli ko'rsatuvchi interaktiv monitoring dasturini oching.",
  "<code>top</code> buyrug'ini bering.",
  "top",
  "`top` buyrug'ini bering.",
  ["TOP", "MONITOR", "CPU"],
  ["top", "/usr/bin/top"],
  2, "2-Qavat • Oson", "S03 Activity 2 • top viewer");

addQ(21, "Protsesslar Ro'yxatining Boshlang'ich 5 Satrini Ko'rish",
  "Sarlavha va eng muhim tizim jarayonlarini ko'rish uchun <code>head -n 5</code> dan foydalaning.",
  "<code>ps aux | head -n 5</code> buyrug'ini bering.",
  "ps aux | head -n 5",
  "`ps aux | head -n 5` buyrug'ini bering.",
  ["PS", "HEAD", "SYSTEM"],
  ["ps aux | head -n 5", "ps aux | head -5"],
  2, "2-Qavat • Oson", "S03 Activity 2 • Top 5");

addQ(22, "Protsesslar Umumiy Sonini Hisoblash",
  "Serverda qancha jarayon ishlayotganini quvur (pipe) orqali sanang.",
  "<code>ps aux | wc -l</code> buyrug'ini bering.",
  "ps aux | wc -l",
  "`ps aux | wc -l` buyrug'ini bering.",
  ["PS", "WC", "COUNT"],
  ["ps aux | wc -l"],
  2, "2-Qavat • Oson", "S03 Activity 2 • Total Count");

addQ(23, "Faqat Student Foydalanuvchisiga Tegishli Protsesslar",
  "Joriy talaba foydalanuvchisi boshqaruvidagi jarayonlarni filtrlang.",
  "<code>ps aux | grep student</code> buyrug'ini bering.",
  "ps aux | grep student",
  "`ps aux | grep student` buyrug'ini bering.",
  ["PS", "GREP", "FILTER"],
  ["ps aux | grep student", "ps aux | grep \"student\""],
  2, "2-Qavat • Oson", "S03 Activity 2 • User Filter");

addQ(24, "Xotira Sarfi Bo'yicha Saralash (--sort=-%mem)",
  "Darslik 17-sahifasi: Eng ko'p operativ xotira (RAM) yeyayotgan jarayonlarni birinchi o'ringa chiqarish.",
  "<code>ps aux --sort=-%mem | head -n 6</code> buyrug'ini bering.",
  "ps aux --sort=-%mem | head -n 6",
  "`ps aux --sort=-%mem | head -n 6` buyrug'ini bering.",
  ["PS", "SORT_MEM", "RESOURCE_AUDIT"],
  ["ps aux --sort=-%mem | head -n 6", "ps aux --sort=-%mem | head -6"],
  2, "2-Qavat • O'rta", "S03 Activity 18 • Memory Sort");

addQ(25, "Systemd Bosh Protsessini Topish",
  "Linuxda 1-PID har doim systemd yoki init dasturiga tegishli bo'ladi.",
  "<code>ps aux | grep init</code> yoki <code>ps aux | grep systemd</code> buyrug'ini bering.",
  "ps aux | grep systemd",
  "`ps aux | grep systemd` buyrug'ini bering.",
  ["PS", "SYSTEMD", "PID_1"],
  ["ps aux | grep systemd", "ps aux | grep init"],
  2, "2-Qavat • Oson", "S03 Activity 2 • PID 1");

addQ(26, "Cron Tungi Rejalashtiruvchi Jarayonini Topish",
  "Vaqti-vaqti bilan avtomatik vazifalarni bajaruvchi cron xizmatining faolligini tekshiring.",
  "<code>pgrep -a cron</code> buyrug'ini bering.",
  "pgrep -a cron",
  "`pgrep -a cron` buyrug'ini bering.",
  ["PGREP", "CRON", "DAEMON"],
  ["pgrep -a cron"],
  2, "2-Qavat • Oson", "S03 Activity 2 • Cron Daemon");

addQ(27, "SSHD Masofaviy Kirish Jarayonini Topish",
  "SSH orqali xavfsiz ulanishni ta'minlovchi sshd server jarayonini tekshiring.",
  "<code>pgrep -a sshd</code> buyrug'ini bering.",
  "pgrep -a sshd",
  "`pgrep -a sshd` buyrug'ini bering.",
  ["PGREP", "SSHD", "SECURITY"],
  ["pgrep -a sshd"],
  2, "2-Qavat • Oson", "S03 Activity 2 • SSHD Process");

addQ(28, "Faqat Bash PID Raqamini Olish (pgrep bash)",
  "Boshqa ma'lumotlarsiz faqat toza PID raqamining o'zini olish.",
  "<code>pgrep bash</code> buyrug'ini bering.",
  "pgrep bash",
  "`pgrep bash` buyrug'ini bering.",
  ["PGREP", "RAW_PID", "SCRIPTS"],
  ["pgrep bash"],
  2, "2-Qavat • Oson", "S03 Activity 2 • Raw PID");

addQ(29, "Joriy Terminalning Standart ps Snapshotini Qayta Ko'rish",
  "Faqat hozirgi terminalda ishlayotgan qisqa ro'yxatni ko'rish.",
  "<code>ps</code> buyrug'ini bering.",
  "ps",
  "`ps` buyrug'ini bering.",
  ["PS", "TERMINAL", "CLEAN"],
  ["ps"],
  2, "2-Qavat • Oson", "S03 Activity 2 • ps");

addQ(30, "Xotira Sarfi Bo'yicha Bosh 10 Qator",
  "RAM bo'yicha eng yuqori 10 ta jarayonni ko'ring.",
  "<code>ps aux --sort=-%mem | head -n 10</code> buyrug'ini bering.",
  "ps aux --sort=-%mem | head -n 10",
  "`ps aux --sort=-%mem | head -n 10` buyrug'ini bering.",
  ["PS", "MEM_AUDIT", "HEAD"],
  ["ps aux --sort=-%mem | head -n 10", "ps aux --sort=-%mem | head -10"],
  2, "2-Qavat • O'rta", "S03 Activity 18 • Memory Audit");

// ----------------------------------------------------------------------------
// SECTOR 3 (31 - 45): Job Control: Fon, To'xtatish & Qaytarish (Activity 3)
// ----------------------------------------------------------------------------
addQ(31, "Xavfsiz Test Jarayonini Fonda Boshlash (sleep 300 &)",
  "Darslik 5-sahifasi: Terminalni band qilmasdan, 300 soniyalik (5 daqiqa) kutish jarayonini fonda ishga tushiring.",
  "<code>sleep 300 &</code> buyrug'ini bering.",
  "sleep 300 &",
  "`sleep 300 &` buyrug'ini bering.",
  ["SLEEP", "BACKGROUND", "&"],
  ["sleep 300 &"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Background Job");

addQ(32, "Joriy Shell Nazoratidagi Joblarni Ko'rish (jobs -l)",
  "Darslik 5-sahifasi: Terminal boshqaruvi ostidagi barcha fon va to'xtatilgan vazifalarni PID lari bilan ko'ring.",
  "<code>jobs -l</code> buyrug'ini bering.",
  "jobs -l",
  "`jobs -l` buyrug'ini bering.",
  ["JOBS", "-L", "PID_LIST"],
  ["jobs -l"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Jobs -l");

addQ(33, "Nom Bo'yicha Fon Jarayonini Qidirish (pgrep -a sleep)",
  "Darslik 5-sahifasi: Fonda ishlayotgan sleep dasturining PID va parametrlarini toping.",
  "<code>pgrep -a sleep</code> buyrug'ini bering.",
  "pgrep -a sleep",
  "`pgrep -a sleep` buyrug'ini bering.",
  ["PGREP", "SLEEP", "AUDIT"],
  ["pgrep -a sleep"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Find sleep");

addQ(34, "Fon Jarayonini Oldingi Planga Qaytarish (fg %1)",
  "Darslik 6-sahifasi: Fonda ishlayotgan 1-raqamli jobni yana faol klaviatura nazoratiga qaytaring.",
  "<code>fg %1</code> buyrug'ini bering.",
  "fg %1",
  "`fg %1` buyrug'ini bering.",
  ["FG", "FOREGROUND", "%1"],
  ["fg %1", "fg 1"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Foreground");

addQ(35, "To'xtatilgan Jarayonni Fonda Qayta Davom Ettirish (bg %1)",
  "Darslik 6-sahifasi: Ctrl+Z orqali to'xtatilgan vazifani fonda davom ettirish.",
  "<code>bg %1</code> buyrug'ini bering.",
  "bg %1",
  "`bg %1` buyrug'ini bering.",
  ["BG", "RESUME", "BACKGROUND"],
  ["bg %1", "bg 1"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Background Resume");

addQ(36, "Oddiy jobs Ro'yxatini Ko'rish",
  "PID raqamlarisiz qisqa formatda fon joblarini ko'ring.",
  "<code>jobs</code> buyrug'ini bering.",
  "jobs",
  "`jobs` buyrug'ini bering.",
  ["JOBS", "STATUS", "LIST"],
  ["jobs"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Short Jobs");

addQ(37, "Fon Jarayonini Xushmuomalalik Bilan Yakunlash (kill %1)",
  "Darslik 6-sahifasi: 1-raqamli jobga odatiy tugatish (SIGTERM) signalini yuboring.",
  "<code>kill %1</code> buyrug'ini bering.",
  "kill %1",
  "`kill %1` buyrug'ini bering.",
  ["KILL", "SIGTERM", "%1"],
  ["kill %1", "kill 1"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Terminate Job");

addQ(38, "Jarayon To'xtaganligini Tasdiqlash",
  "Darslik 6-sahifasi: <code>jobs -l</code> orqali job ro'yxati bo'shaganligini tekshiring.",
  "<code>jobs -l</code> buyrug'ini bering.",
  "jobs -l",
  "`jobs -l` buyrug'ini bering.",
  ["JOBS", "VERIFY", "CLEAN"],
  ["jobs -l"],
  3, "3-Qavat • Oson", "S03 Activity 3 • Confirm Termination");

addQ(39, "Yangi Qisqa Fon Jarayoni Boshlash (sleep 60 &)",
  "Tajriba uchun 60 soniyalik yangi fon jarayonini ishga tushiring.",
  "<code>sleep 60 &</code> buyrug'ini bering.",
  "sleep 60 &",
  "`sleep 60 &` buyrug'ini bering.",
  ["SLEEP", "BG", "TEST"],
  ["sleep 60 &"],
  3, "3-Qavat • Oson", "S03 Practice • sleep 60");

addQ(40, "Yangi Jobni Ko'rish",
  "Hosil bo'lgan yangi fon vazifasini <code>jobs</code> orqali ko'ring.",
  "<code>jobs</code> buyrug'ini bering.",
  "jobs",
  "`jobs` buyrug'ini bering.",
  ["JOBS", "CHECK", "LIST"],
  ["jobs"],
  3, "3-Qavat • Oson", "S03 Practice • Jobs check");

addQ(41, "Yangi Jobni To'xtatish",
  "Ishga tushgan 2-raqamli vazifani <code>kill %2</code> orqali to'xtating.",
  "<code>kill %2</code> buyrug'ini bering.",
  "kill %2",
  "`kill %2` buyrug'ini bering.",
  ["KILL", "JOB_2", "STOP"],
  ["kill %2", "kill 2"],
  3, "3-Qavat • Oson", "S03 Practice • Kill job 2");

addQ(42, "Barcha Sleep Jarayonlarini Nom Bo'yicha Tugatish (pkill sleep)",
  "Darslik 6-sahifasi: Barcha mos keluvchi sleep jarayonlariga signal yuborish.",
  "<code>pkill sleep</code> buyrug'ini bering.",
  "pkill sleep",
  "`pkill sleep` buyrug'ini bering.",
  ["PKILL", "NAME_SIGNAL", "CLEANUP"],
  ["pkill sleep"],
  3, "3-Qavat • Oson", "S03 Command Ref • pkill");

addQ(43, "Killall Bilan To'liq Tozalash",
  "Darslik 6-sahifasi: <code>killall sleep</code> buyrug'i orqali to'liq tozalang.",
  "<code>killall sleep</code> buyrug'ini bering.",
  "killall sleep",
  "`killall sleep` buyrug'ini bering.",
  ["KILLALL", "EXACT_NAME", "SIGNALS"],
  ["killall sleep"],
  3, "3-Qavat • Oson", "S03 Command Ref • killall");

addQ(44, "Jobs Bo'shligini Qayta Tasdiqlash",
  "Barcha fon vazifalari to'liq yakunlanganini tekshiring.",
  "<code>jobs</code> buyrug'ini bering.",
  "jobs",
  "`jobs` buyrug'ini bering.",
  ["JOBS", "CLEAN", "FINAL"],
  ["jobs"],
  3, "3-Qavat • Oson", "S03 Practice • Confirm All Clear");

addQ(45, "Pgrep Bilan Hech Qanday Sleep Qolmaganini Tekshirish",
  "Sleep dasturi endi ro'yxatda yo'qligini tekshiring.",
  "<code>pgrep sleep</code> buyrug'ini bering.",
  "pgrep sleep",
  "`pgrep sleep` buyrug'ini bering.",
  ["PGREP", "ZERO_PROCESS", "VERIFY"],
  ["pgrep sleep"],
  3, "3-Qavat • Oson", "S03 Practice • Zero Sleep");

// ----------------------------------------------------------------------------
// SECTOR 4 (46 - 60): Protsesslar Daraxti & Signallar (Activity 3 & Command Ref)
// ----------------------------------------------------------------------------
addQ(46, "Protsesslar Daraxtini Vizual Ko'rish (pstree)",
  "Darslik 5-sahifasi: Ota-bola (parent-child) jarayonlar ierarxiyasini daraxt ko'rinishida oching.",
  "<code>pstree</code> buyrug'ini bering.",
  "pstree",
  "`pstree` buyrug'ini bering.",
  ["PSTREE", "HIERARCHY", "TREE"],
  ["pstree", "/usr/bin/pstree"],
  4, "4-Qavat • Oson", "S03 Activity 2 • pstree");

addQ(47, "PID Raqamlari Bilan Daraxtni Ko'rish (pstree -p)",
  "Darslik 5-sahifasi: Har bir protsess nomi yonida uning aniq PID raqamini ko'rsatuvchi <code>-p</code> bayrog'idan foydalaning.",
  "<code>pstree -p</code> buyrug'ini bering.",
  "pstree -p",
  "`pstree -p` buyrug'ini bering.",
  ["PSTREE", "-P", "PIDS"],
  ["pstree -p"],
  4, "4-Qavat • Oson", "S03 Activity 2 • pstree -p");

addQ(48, "Daraxtning Boshlang'ich 20 Qatorini Kesib Ko'rish",
  "Darslik 5-sahifasi namunasi: <code>pstree -p | head -n 20</code> orqali birinchi 20 qatorni ko'ring.",
  "<code>pstree -p | head -n 20</code> buyrug'ini bering.",
  "pstree -p | head -n 20",
  "`pstree -p | head -n 20` buyrug'ini bering.",
  ["PSTREE", "PIPE", "HEAD_20"],
  ["pstree -p | head -n 20", "pstree -p | head -20"],
  4, "4-Qavat • O'rta", "S03 Activity 2 • pstree head 20");

addQ(49, "Aniq PID Raqamiga SIGTERM Signal Yuborish",
  "Darslik 6-sahifasi: Fon jarayoni 2458 ga bevosita PID bo'yicha kill yuborish.",
  "<code>kill 2458</code> buyrug'ini bering.",
  "kill 2458",
  "`kill 2458` buyrug'ini bering.",
  ["KILL", "PID", "SIGTERM"],
  ["kill 2458"],
  4, "4-Qavat • Oson", "S03 Command Ref • Kill PID");

addQ(50, "Nima Uchun kill -9 Ishlatilmasligi Kerak?",
  "Darslik 6-sahifasi ogohlantirishi: Normal kill jarayonga tozalanish (clean up) imkonini beradi. Standart kill buyrug'ini bering.",
  "<code>kill 2458</code> buyrug'ini bering.",
  "kill 2458",
  "`kill 2458` buyrug'ini bering.",
  ["KILL", "SAFETY", "BEST_PRACTICE"],
  ["kill 2458"],
  4, "4-Qavat • Oson", "S03 Good Practice • Kill Safety");

addQ(51, "Pgrep Bilan Barcha Bash Jarayonlarini Topish",
  "Barcha ochilgan bash sessiyalari PID larini toping.",
  "<code>pgrep bash</code> buyrug'ini bering.",
  "pgrep bash",
  "`pgrep bash` buyrug'ini bering.",
  ["PGREP", "BASH", "AUDIT"],
  ["pgrep bash"],
  4, "4-Qavat • Oson", "S03 Activity 2 • pgrep");

addQ(52, "Pgrep Bilan Buyruq Matnlarini Birga Chiqarish (-a)",
  "PID bilan birga to'liq chaqirilgan argumentlarni ham ko'ring.",
  "<code>pgrep -a bash</code> buyrug'ini bering.",
  "pgrep -a bash",
  "`pgrep -a bash` buyrug'ini bering.",
  ["PGREP", "-A", "CMD_STRING"],
  ["pgrep -a bash"],
  4, "4-Qavat • Oson", "S03 Activity 2 • pgrep -a");

addQ(53, "Systemd Bosh Jarayoni Daraxtini Tekshirish",
  "Daraxtning eng yuqori qismini ko'rish.",
  "<code>pstree | head -n 5</code> buyrug'ini bering.",
  "pstree | head -n 5",
  "`pstree | head -n 5` buyrug'ini bering.",
  ["PSTREE", "HEAD", "INIT_TREE"],
  ["pstree | head -n 5", "pstree | head -5"],
  4, "4-Qavat • Oson", "S03 Activity 2 • Init Tree");

addQ(54, "Oddiy ps Bilan CMD Ustunini Ko'rish",
  "Har bir jarayon qaysi buyruq bilan chaqirilganini ko'ring.",
  "<code>ps</code> buyrug'ini bering.",
  "ps",
  "`ps` buyrug'ini bering.",
  ["PS", "CMD", "INSPECT"],
  ["ps"],
  4, "4-Qavat • Oson", "S03 Activity 2 • ps inspect");

addQ(55, "Joriy Ishchi Katalogni Tekshirish",
  "Hozirda <code>os_lab_process_bash</code> papkasida turganingizni tasdiqlang.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "`pwd` buyrug'ini bering.",
  ["PWD", "CHECK", "DIR"],
  ["pwd"],
  4, "4-Qavat • Oson", "S03 Activity 1 • pwd");

addQ(56, "Papkadagi Barcha Fayllar Ro'yxatini Ko'rish",
  "Tayyorlangan skriptlarni tekshiring.",
  "<code>ls -l</code> buyrug'ini bering.",
  "ls -l",
  "`ls -l` buyrug'ini bering.",
  ["LS", "FILES", "SCRIPTS"],
  ["ls -l"],
  4, "4-Qavat • Oson", "S03 Activity 1 • ls -l");

addQ(57, "Stat Buyrug'i Bilan Bitta Skript Xususiyatlarini Ko'rish",
  "<code>hello.sh</code> faylining inodelari va ruxsatlarini ko'ring.",
  "<code>stat hello.sh</code> buyrug'ini bering.",
  "stat hello.sh",
  "`stat hello.sh` buyrug'ini bering.",
  ["STAT", "INODE", "HELLO"],
  ["stat hello.sh"],
  4, "4-Qavat • Oson", "S03 Command Ref • stat");

addQ(58, "Top Dasturidan Qaytish Tushunchasi",
  "Top dasturidan chiqish uchun qaysi klavish bosiladi? (q klavishi).",
  "<code>echo \"q\"</code> buyrug'i orqali bilimingizni tasdiqlang.",
  "echo \"q\"",
  "`echo \"q\"` buyrug'ini bering.",
  ["TOP", "EXIT_KEY", "Q"],
  ["echo \"q\"", "echo q"],
  4, "4-Qavat • Oson", "S03 Activity 2 • Exit Top");

addQ(59, "Terminalni Tozalash",
  "Terminal oynasini toza holatga keltiring.",
  "<code>clear</code> buyrug'ini bering.",
  "clear",
  "`clear` buyrug'ini bering.",
  ["CLEAR", "SCREEN", "TERMINAL"],
  ["clear"],
  4, "4-Qavat • Oson", "S03 Activity 1 • Clear");

addQ(60, "Tizim Foydalanuvchisini Qayta Tasdiqlash",
  "Foydalanuvchi student ekanligini yana bir bor tekshiring.",
  "<code>whoami</code> buyrug'ini bering.",
  "whoami",
  "`whoami` buyrug'ini bering.",
  ["WHOAMI", "CHECK", "USER"],
  ["whoami"],
  4, "4-Qavat • Oson", "S03 Activity 1 • whoami");

// ----------------------------------------------------------------------------
// SECTOR 5 (61 - 75): Bash Skript Yaratish & Strict Mode (Activity 4)
// ----------------------------------------------------------------------------
addQ(61, "Hello.sh Skriptining Tarkibini O'qish",
  "Darslik 7-sahifasi: Yaratilgan <code>hello.sh</code> skriptining boshlang'ich 4 satrini o'qing.",
  "<code>cat hello.sh</code> buyrug'ini bering.",
  "cat hello.sh",
  "`cat hello.sh` buyrug'ini bering.",
  ["CAT", "HELLO", "SCRIPT"],
  ["cat hello.sh"],
  5, "5-Qavat • Oson", "S03 Activity 4 • View hello.sh");

addQ(62, "Skriptga Bajarish Huquqini Berish (chmod +x)",
  "Darslik 7-sahifasi: Skript matnli fayldan ishga tushadigan dasturga aylanishi uchun unga ijro ruxsatini qo'shing.",
  "<code>chmod +x hello.sh</code> buyrug'ini bering.",
  "chmod +x hello.sh",
  "`chmod +x hello.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "PERMISSIONS"],
  ["chmod +x hello.sh", "chmod 755 hello.sh"],
  5, "5-Qavat • Oson", "S03 Activity 4 • Grant Execution");

addQ(63, "Skriptni Ishga Tushirish (./hello.sh)",
  "Darslik 7-sahifasi: Joriy katalogdagi skriptni nisbiy yo'l orqali ishga tushiring.",
  "<code>./hello.sh</code> buyrug'ini bering.",
  "./hello.sh",
  "`./hello.sh` buyrug'ini bering.",
  ["RUN", "DOT_SLASH", "HELLO"],
  ["./hello.sh", "bash hello.sh"],
  5, "5-Qavat • Oson", "S03 Activity 4 • Run Script");

addQ(64, "Oxirgi Buyruqning Chiqish Statusini Tekshirish (echo $?)",
  "Darslik 7-sahifasi: Buyruq xatosiz yakunlanganini tasdiqlovchi <code>$?</code> qiymatini ko'ring (0 muvaffaqiyat).",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "`echo $?` buyrug'ini bering.",
  ["ECHO", "EXIT_STATUS", "$?"],
  ["echo $?", "echo \"$?\""],
  5, "5-Qavat • Oson", "S03 Activity 4 • Check Exit Code");

addQ(65, "Bash Sintaksisini Tekshirish (bash -n)",
  "Darslik 18-sahifasi: Skriptni ishga tushirmasdan, faqat sintaktik xatolarni tekshirish.",
  "<code>bash -n hello.sh</code> buyrug'ini bering.",
  "bash -n hello.sh",
  "`bash -n hello.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX_CHECK", "-N"],
  ["bash -n hello.sh"],
  5, "5-Qavat • Oson", "S03 Section 20 • Syntax Check");

addQ(66, "Shebang Satrini Tekshirish",
  "Darslik 7-sahifasi: Skriptning 1-satridagi shebangni ko'ring.",
  "<code>head -n 1 hello.sh</code> buyrug'ini bering.",
  "head -n 1 hello.sh",
  "`head -n 1 hello.sh` buyrug'ini bering.",
  ["HEAD", "SHEBANG", "ENV"],
  ["head -n 1 hello.sh", "head -1 hello.sh"],
  5, "5-Qavat • Oson", "S03 Section 9 • Shebang");

addQ(67, "Strict Mode Satrini Ko'rish",
  "Darslik 7-sahifasi: <code>set -euo pipefail</code> qat'iy rejimini ko'ring.",
  "<code>head -n 2 hello.sh</code> buyrug'ini bering.",
  "head -n 2 hello.sh",
  "`head -n 2 hello.sh` buyrug'ini bering.",
  ["HEAD", "STRICT_MODE", "SET"],
  ["head -n 2 hello.sh", "head -2 hello.sh"],
  5, "5-Qavat • Oson", "S03 Section 10 • Strict Mode");

addQ(68, "Skriptni To'g'ridan-To'g'ri Bash Bilan Chaqirish",
  "Ijro huquqi bo'lmagan taqdirda ham interpretator orqali to'g'ridan-to'g'ri chaqirish.",
  "<code>bash hello.sh</code> buyrug'ini bering.",
  "bash hello.sh",
  "`bash hello.sh` buyrug'ini bering.",
  ["BASH", "DIRECT", "HELLO"],
  ["bash hello.sh", "./hello.sh"],
  5, "5-Qavat • Oson", "S03 Activity 4 • Direct Call");

addQ(69, "Ruxsatlarni Aniq Ko'rish (ls -l hello.sh)",
  "<code>hello.sh</code> faylining ruxsatlarini ko'ring.",
  "<code>ls -l hello.sh</code> buyrug'ini bering.",
  "ls -l hello.sh",
  "`ls -l hello.sh` buyrug'ini bering.",
  ["LS", "PERM", "HELLO"],
  ["ls -l hello.sh"],
  5, "5-Qavat • Oson", "S03 Activity 4 • ls -l");

addQ(70, "Skript Xabarlarini Qayta Ishga Tushirish",
  "<code>./hello.sh</code> ni yana bir bor ishga tushiring.",
  "<code>./hello.sh</code> buyrug'ini bering.",
  "./hello.sh",
  "`./hello.sh` buyrug'ini bering.",
  ["RUN", "HELLO", "TEST"],
  ["./hello.sh", "bash hello.sh"],
  5, "5-Qavat • Oson", "S03 Activity 4 • Run again");

addQ(71, "Exit Statusni Yana Bir Bor Tekshirish",
  "Natija 0 ekanligini tasdiqlang.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "`echo $?` buyrug'ini bering.",
  ["EXIT_CODE", "ZERO", "SUCCESS"],
  ["echo $?", "echo \"$?\""],
  5, "5-Qavat • Oson", "S03 Activity 4 • Zero status");

addQ(72, "Skriptdagi Satrlar Sonini Sanash",
  "<code>hello.sh</code> nechta satrdan iborat ekanligini hisoblang.",
  "<code>wc -l hello.sh</code> buyrug'ini bering.",
  "wc -l hello.sh",
  "`wc -l hello.sh` buyrug'ini bering.",
  ["WC", "LINES", "HELLO"],
  ["wc -l hello.sh"],
  5, "5-Qavat • Oson", "S03 Practice • wc hello.sh");

addQ(73, "Katalogdagi Barcha .sh Skriptlarini Ko'rish",
  "Laboratoriyadagi barcha skriptlarni ro'yxatlang.",
  "<code>ls *.sh</code> buyrug'ini bering.",
  "ls *.sh",
  "`ls *.sh` buyrug'ini bering.",
  ["LS", "WILDCARD", "SCRIPTS"],
  ["ls *.sh"],
  5, "5-Qavat • Oson", "S03 Practice • List scripts");

addQ(74, "Barcha Skriptlar Sintaksisini Tekshirish",
  "<code>bash -n hello.sh</code> orqali tekshiruvdan o'ting.",
  "<code>bash -n hello.sh</code> buyrug'ini bering.",
  "bash -n hello.sh",
  "`bash -n hello.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "CLEAN"],
  ["bash -n hello.sh"],
  5, "5-Qavat • Oson", "S03 Section 20 • Check");

addQ(75, "Joriy Ishchi Katalogni Ko'rish",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "`pwd` buyrug'ini bering.",
  ["PWD", "STATUS", "WORKSPACE"],
  ["pwd"],
  5, "5-Qavat • Oson", "S03 Activity 1 • pwd");

// ----------------------------------------------------------------------------
// SECTOR 6 (76 - 90): O'zgaruvchilar & Argumentlar (Activity 5)
// ----------------------------------------------------------------------------
addQ(76, "Variables.sh Skriptini Ko'rish",
  "Darslik 8-sahifasi: O'zgaruvchilar e'lon qilingan <code>variables.sh</code> faylini o'qing.",
  "<code>cat variables.sh</code> buyrug'ini bering.",
  "cat variables.sh",
  "`cat variables.sh` buyrug'ini bering.",
  ["CAT", "VARIABLES", "READ"],
  ["cat variables.sh"],
  6, "6-Qavat • Oson", "S03 Activity 5 • View variables.sh");

addQ(77, "Variables.sh Skriptiga Ijro Huquqini Berish",
  "<code>chmod +x variables.sh</code> buyrug'ini bering.",
  "chmod +x variables.sh",
  "`chmod +x variables.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "VARIABLES"],
  ["chmod +x variables.sh", "chmod 755 variables.sh"],
  6, "6-Qavat • Oson", "S03 Activity 5 • chmod variables");

addQ(78, "Variables.sh Skriptini Ishga Tushirish",
  "Darslik 8-sahifasi: O'zgaruvchilar ekranga 4 satr qilib chiqarilishini ko'ring.",
  "<code>./variables.sh</code> buyrug'ini bering.",
  "./variables.sh",
  "`./variables.sh` buyrug'ini bering.",
  ["RUN", "VARIABLES", "TEST"],
  ["./variables.sh", "bash variables.sh"],
  6, "6-Qavat • Oson", "S03 Activity 5 • Run variables");

addQ(79, "Chiqish Statusini Tekshirish",
  "<code>echo $?</code> buyrug'i orqali muvaffaqiyatni tasdiqlang.",
  "echo $?",
  "`echo $?` buyrug'ini bering.",
  ["ECHO", "STATUS", "EXIT"],
  ["echo $?", "echo \"$?\""],
  6, "6-Qavat • Oson", "S03 Activity 5 • Status check");

addQ(80, "Greet.sh Argumentlar Skriptini Ko'rish",
  "Darslik 8-sahifasi: Bitta parametr (<code>$1</code>) qabul qiluvchi <code>greet.sh</code> skriptini o'qing.",
  "<code>cat greet.sh</code> buyrug'ini bering.",
  "cat greet.sh",
  "`cat greet.sh` buyrug'ini bering.",
  ["CAT", "GREET", "ARGUMENTS"],
  ["cat greet.sh"],
  6, "6-Qavat • Oson", "S03 Activity 5 • View greet.sh");

addQ(81, "Greet.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x greet.sh</code> buyrug'ini bering.",
  "chmod +x greet.sh",
  "`chmod +x greet.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "GREET"],
  ["chmod +x greet.sh", "chmod 755 greet.sh"],
  6, "6-Qavat • Oson", "S03 Activity 5 • chmod greet");

addQ(82, "To'g'ri Argument Bilan Ishga Tushirish (./greet.sh Alice)",
  "Darslik 8-sahifasi: 'Alice' argumentini uzatib salomlashuvni oling.",
  "<code>./greet.sh Alice</code> buyrug'ini bering.",
  "./greet.sh Alice",
  "`./greet.sh Alice` buyrug'ini bering.",
  ["RUN", "GREET", "PARAM"],
  ["./greet.sh Alice", "bash greet.sh Alice"],
  6, "6-Qavat • Oson", "S03 Activity 5 • Valid call");

addQ(83, "Boshqa Ism Bilan Sinash (./greet.sh Bob)",
  "Parametr o'zgarishini ko'rish uchun Bob argumentini uzating.",
  "<code>./greet.sh Bob</code> buyrug'ini bering.",
  "./greet.sh Bob",
  "`./greet.sh Bob` buyrug'ini bering.",
  ["RUN", "GREET", "BOB"],
  ["./greet.sh Bob", "bash greet.sh Bob"],
  6, "6-Qavat • Oson", "S03 Activity 5 • Greet Bob");

addQ(84, "Argumentsiz Xato Holatini Sinash (./greet.sh)",
  "Darslik 8-sahifasi: Parametrsiz chaqirilganda 'Usage: ./greet.sh <name>' chiqib exit status 1 qaytishi kerak.",
  "<code>./greet.sh</code> buyrug'ini argumentlarsiz bering.",
  "./greet.sh",
  "`./greet.sh` buyrug'ini bering.",
  ["RUN", "INVALID", "USAGE_ERROR"],
  ["./greet.sh", "bash greet.sh"],
  6, "6-Qavat • Oson", "S03 Activity 5 • Invalid test");

addQ(85, "Xatolik Statusini Tekshirish (Exit 1)",
  "Oxirgi xatolik statusini ko'ring.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "`echo $?` buyrug'ini bering.",
  ["ECHO", "EXIT_1", "ERROR_CODE"],
  ["echo $?", "echo \"$?\""],
  6, "6-Qavat • Oson", "S03 Activity 5 • Error Status");

addQ(86, "Argumentlar Sonini Tekshiruvchi $# Tushunchasi",
  "Skript ichidagi <code>$#</code> parametrlar sonini ifodalaydi. Greet skriptini ko'ring.",
  "<code>cat greet.sh</code> buyrug'ini bering.",
  "cat greet.sh",
  "`cat greet.sh` buyrug'ini bering.",
  ["CAT", "ARG_COUNT", "$#"],
  ["cat greet.sh"],
  6, "6-Qavat • Oson", "S03 Section 9 • $# Concept");

addQ(87, "Xavfsiz O'zgaruvchi E'loni Tushunchasi (${1:-})",
  "Darslik 5-sahifasi: Agar argument berilmasa unbound error bo'lmasligi uchun <code>${1:-}</code> sintaksisi ishlatiladi.",
  "<code>head -n 5 greet.sh</code> buyrug'ini bering.",
  "head -n 5 greet.sh",
  "`head -n 5 greet.sh` buyrug'ini bering.",
  ["HEAD", "SAFE_EXPANSION", "PARAM"],
  ["head -n 5 greet.sh", "head -5 greet.sh"],
  6, "6-Qavat • Oson", "S03 Section 11 • Safe Expansion");

addQ(88, "Greet.sh Sintaksisini Tekshirish",
  "<code>bash -n greet.sh</code> orqali sintaksisni tekshiring.",
  "<code>bash -n greet.sh</code> buyrug'ini bering.",
  "bash -n greet.sh",
  "`bash -n greet.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "GREET"],
  ["bash -n greet.sh"],
  6, "6-Qavat • Oson", "S03 Section 20 • Syntax");

addQ(89, "Variables.sh Sintaksisini Tekshirish",
  "<code>bash -n variables.sh</code> buyrug'ini bering.",
  "bash -n variables.sh",
  "`bash -n variables.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "VARIABLES"],
  ["bash -n variables.sh"],
  6, "6-Qavat • Oson", "S03 Section 20 • Syntax");

addQ(90, "Skriptlar Ro'yxatini Ko'rish",
  "Katalogdagi barcha fayllarni ko'ring.",
  "<code>ls -l</code> buyrug'ini bering.",
  "ls -l",
  "`ls -l` buyrug'ini bering.",
  ["LS", "FILES", "STATUS"],
  ["ls -l"],
  6, "6-Qavat • Oson", "S03 Practice • ls -l");

// ----------------------------------------------------------------------------
// SECTOR 7 (91 - 105): Foydalanuvchi Kiritishi & Butun Son Arifmetikasi (Activity 6)
// ----------------------------------------------------------------------------
addQ(91, "Age.sh Arifmetika Skriptini Ko'rish",
  "Darslik 9-sahifasi: <code>read</code> va butun son arifmetikasi (<code>$(( ... ))</code>) mavjud <code>age.sh</code> ni o'qing.",
  "<code>cat age.sh</code> buyrug'ini bering.",
  "cat age.sh",
  "`cat age.sh` buyrug'ini bering.",
  ["CAT", "AGE", "ARITHMETIC"],
  ["cat age.sh"],
  7, "7-Qavat • Oson", "S03 Activity 6 • View age.sh");

addQ(92, "Age.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x age.sh</code> buyrug'ini bering.",
  "chmod +x age.sh",
  "`chmod +x age.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "AGE"],
  ["chmod +x age.sh", "chmod 755 age.sh"],
  7, "7-Qavat • Oson", "S03 Activity 6 • chmod age");

addQ(93, "Age.sh Skriptini Ishga Tushirish",
  "Darslik 9-sahifasi: Yoshni hisoblovchi skriptni ishga tushiring.",
  "<code>./age.sh</code> buyrug'ini bering.",
  "./age.sh",
  "`./age.sh` buyrug'ini bering.",
  ["RUN", "AGE", "TEST"],
  ["./age.sh", "bash age.sh"],
  7, "7-Qavat • Oson", "S03 Activity 6 • Run age");

addQ(94, "Joriy Yilni Olish (date +%Y)",
  "Darslik 9-sahifasi: Tizimdan joriy 4 xonali yilni olish uchun <code>date +%Y</code> buyrug'ini bering.",
  "<code>date +%Y</code> buyrug'ini bering.",
  "date +%Y",
  "`date +%Y` buyrug'ini bering.",
  ["DATE", "YEAR", "SYSTEM"],
  ["date +%Y"],
  7, "7-Qavat • Oson", "S03 Activity 6 • date year");

addQ(95, "To'liq Vaqt Formati ('+%Y-%m-%d %H:%M:%S')",
  "Darslik 5 va 17-sahifasi: Aniq vaqt tamg'asi formatini ekranga chiqaring.",
  "<code>date '+%Y-%m-%d %H:%M:%S'</code> buyrug'ini bering.",
  "date '+%Y-%m-%d %H:%M:%S'",
  "`date '+%Y-%m-%d %H:%M:%S'` buyrug'ini bering.",
  ["DATE", "TIMESTAMP", "FORMAT"],
  ["date '+%Y-%m-%d %H:%M:%S'", "date \"+%Y-%m-%d %H:%M:%S\""],
  7, "7-Qavat • O'rta", "S03 Activity 18 • Date Format");

addQ(96, "Qo'shish Arifmetikasi ($((5 + 3)))",
  "Darslik 10-sahifasi: Bash butun sonlarni hisoblashi uchun <code>$(( ... ))</code> sintaksisidan foydalanadi.",
  "<code>echo $((5 + 3))</code> buyrug'ini bering.",
  "echo $((5 + 3))",
  "`echo $((5 + 3))` buyrug'ini bering.",
  ["ECHO", "MATH", "ADD"],
  ["echo $((5 + 3))", "echo $((5+3))"],
  7, "7-Qavat • Oson", "S03 Section 12 • Math +");

addQ(97, "Ayirish Arifmetikasi ($((10 - 4)))",
  "Darslik 10-sahifasi: 10 dan 4 ni ayirish amalini bajaring.",
  "<code>echo $((10 - 4))</code> buyrug'ini bering.",
  "echo $((10 - 4))",
  "`echo $((10 - 4))` buyrug'ini bering.",
  ["ECHO", "MATH", "SUB"],
  ["echo $((10 - 4))", "echo $((10-4))"],
  7, "7-Qavat • Oson", "S03 Section 12 • Math -");

addQ(98, "Ko'paytirish Arifmetikasi ($((6 * 7)))",
  "Darslik 10-sahifasi: 6 ni 7 ga ko'paytirish amali.",
  "<code>echo $((6 * 7))</code> buyrug'ini bering.",
  "echo $((6 * 7))",
  "`echo $((6 * 7))` buyrug'ini bering.",
  ["ECHO", "MATH", "MUL"],
  ["echo $((6 * 7))", "echo $((6*7))"],
  7, "7-Qavat • Oson", "S03 Section 12 • Math *");

addQ(99, "Bo'lish Arifmetikasi ($((10 / 3)))",
  "Darslik 10-sahifasi: Bash butun sonli bo'lishni bajaradi (kasr qismini tashlab yuboradi).",
  "<code>echo $((10 / 3))</code> buyrug'ini bering.",
  "echo $((10 / 3))",
  "`echo $((10 / 3))` buyrug'ini bering.",
  ["ECHO", "MATH", "DIV"],
  ["echo $((10 / 3))", "echo $((10/3))"],
  7, "7-Qavat • Oson", "S03 Section 12 • Math /");

addQ(100, "Qoldiqli Bo'lish ($((10 % 3)))",
  "Darslik 10-sahifasi: Qoldiqni topish (modul amali).",
  "<code>echo $((10 % 3))</code> buyrug'ini bering.",
  "echo $((10 % 3))",
  "`echo $((10 % 3))` buyrug'ini bering.",
  ["ECHO", "MATH", "MOD"],
  ["echo $((10 % 3))", "echo $((10%3))"],
  7, "7-Qavat • Oson", "S03 Section 12 • Math %");

addQ(101, "Darajaga Ko'tarish ($((2 ** 3)))",
  "Darslik 10-sahifasi: 2 ning 3-darajasini (kubini) hisoblang.",
  "<code>echo $((2 ** 3))</code> buyrug'ini bering.",
  "echo $((2 ** 3))",
  "`echo $((2 ** 3))` buyrug'ini bering.",
  ["ECHO", "MATH", "POW"],
  ["echo $((2 ** 3))", "echo $((2**3))"],
  7, "7-Qavat • Oson", "S03 Section 12 • Math **");

addQ(102, "Age.sh Sintaksisini Tekshirish",
  "<code>bash -n age.sh</code> orqali xatolar yo'qligini tekshiring.",
  "<code>bash -n age.sh</code> buyrug'ini bering.",
  "bash -n age.sh",
  "`bash -n age.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "AGE"],
  ["bash -n age.sh"],
  7, "7-Qavat • Oson", "S03 Section 20 • Syntax");

addQ(103, "RegEx 4 Xonali Yil Tekshiruvi Tushunchasi",
  "Darslik 9-sahifasi: <code>^[0-9]{4}$</code> qolipi faqat 4 ta raqam kiritilishini kafolatlaydi.",
  "<code>cat age.sh</code> buyrug'ini bering.",
  "cat age.sh",
  "`cat age.sh` buyrug'ini bering.",
  ["CAT", "REGEX", "VALIDATION"],
  ["cat age.sh"],
  7, "7-Qavat • Oson", "S03 Activity 6 • Regex Year");

addQ(104, "Read -r -p Bayrog'i Tushunchasi",
  "<code>read -r -p</code> nima uchun kerak? <code>-r</code> backslash larni saqlaydi, <code>-p</code> matn ko'rsatadi.",
  "<code>head -n 6 age.sh</code> buyrug'ini bering.",
  "head -n 6 age.sh",
  "`head -n 6 age.sh` buyrug'ini bering.",
  ["HEAD", "READ", "FLAGS"],
  ["head -n 6 age.sh", "head -6 age.sh"],
  7, "7-Qavat • Oson", "S03 Activity 6 • Read flags");

addQ(105, "Joriy Katalogni Tekshirish",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "`pwd` buyrug'ini bering.",
  ["PWD", "STATUS", "CHECK"],
  ["pwd"],
  7, "7-Qavat • Oson", "S03 Activity 1 • pwd");

// ----------------------------------------------------------------------------
// SECTOR 8 (106 - 120): Qarorlar Qabul Qilish (if, elif, case, file tests) (Activity 7 - 9)
// ----------------------------------------------------------------------------
addQ(106, "Classify.sh Qarorlar Skriptini Ko'rish",
  "Darslik 10-sahifasi: Sonlarni oraliqlarga qarab ajratuvchi <code>classify.sh</code> skriptini o'qing.",
  "<code>cat classify.sh</code> buyrug'ini bering.",
  "cat classify.sh",
  "`cat classify.sh` buyrug'ini bering.",
  ["CAT", "CLASSIFY", "DECISION"],
  ["cat classify.sh"],
  8, "8-Qavat • Oson", "S03 Activity 7 • View classify");

addQ(107, "Classify.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x classify.sh</code> buyrug'ini bering.",
  "chmod +x classify.sh",
  "`chmod +x classify.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "CLASSIFY"],
  ["chmod +x classify.sh", "chmod 755 classify.sh"],
  8, "8-Qavat • Oson", "S03 Activity 7 • chmod classify");

addQ(108, "O'rtacha Oraliqni Sinash (./classify.sh 25)",
  "Darslik 10-sahifasi: 20 dan 100 gacha oraliqdagi son kiritilganda 'average' chiqadi.",
  "<code>./classify.sh 25</code> buyrug'ini bering.",
  "./classify.sh 25",
  "`./classify.sh 25` buyrug'ini bering.",
  ["RUN", "CLASSIFY", "AVERAGE"],
  ["./classify.sh 25", "bash classify.sh 25"],
  8, "8-Qavat • Oson", "S03 Activity 7 • Test 25");

addQ(109, "Kichik Oraliqni Sinash (./classify.sh 5)",
  "10 dan kichik son kiritilganda 'small' chiqadi.",
  "<code>./classify.sh 5</code> buyrug'ini bering.",
  "./classify.sh 5",
  "`./classify.sh 5` buyrug'ini bering.",
  ["RUN", "CLASSIFY", "SMALL"],
  ["./classify.sh 5", "bash classify.sh 5"],
  8, "8-Qavat • Oson", "S03 Activity 7 • Test 5");

addQ(110, "Katta Oraliqni Sinash (./classify.sh 105)",
  "100 dan katta son kiritilganda 'large' chiqadi.",
  "<code>./classify.sh 105</code> buyrug'ini bering.",
  "./classify.sh 105",
  "`./classify.sh 105` buyrug'ini bering.",
  ["RUN", "CLASSIFY", "LARGE"],
  ["./classify.sh 105", "bash classify.sh 105"],
  8, "8-Qavat • Oson", "S03 Activity 7 • Test 105");

addQ(111, "Oraliqdan Tashqari Sonni Sinash (./classify.sh 15)",
  "10 va 20 orasidagi son kiritilganda 'out of range' chiqadi.",
  "<code>./classify.sh 15</code> buyrug'ini bering.",
  "./classify.sh 15",
  "`./classify.sh 15` buyrug'ini bering.",
  ["RUN", "CLASSIFY", "OUT_OF_RANGE"],
  ["./classify.sh 15", "bash classify.sh 15"],
  8, "8-Qavat • Oson", "S03 Activity 7 • Test 15");

addQ(112, "Fayl Sinovlari Skriptini Ko'rish (filecheck.sh)",
  "Darslik 11-12-sahifalari: <code>-e</code>, <code>-f</code>, <code>-s</code> fayl operatorlari bilan ishlovchi skriptni o'qing.",
  "<code>cat filecheck.sh</code> buyrug'ini bering.",
  "cat filecheck.sh",
  "`cat filecheck.sh` buyrug'ini bering.",
  ["CAT", "FILECHECK", "FILE_TESTS"],
  ["cat filecheck.sh"],
  8, "8-Qavat • Oson", "S03 Activity 8 • View filecheck");

addQ(113, "Filecheck.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x filecheck.sh</code> buyrug'ini bering.",
  "chmod +x filecheck.sh",
  "`chmod +x filecheck.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "FILECHECK"],
  ["chmod +x filecheck.sh", "chmod 755 filecheck.sh"],
  8, "8-Qavat • Oson", "S03 Activity 8 • chmod filecheck");

addQ(114, "Bo'sh Faylni Tekshirish (./filecheck.sh empty.txt)",
  "Darslik 12-sahifasi: <code>empty.txt</code> tekshirilganda 'The file is empty.' chiqishi kerak.",
  "<code>./filecheck.sh empty.txt</code> buyrug'ini bering.",
  "./filecheck.sh empty.txt",
  "`./filecheck.sh empty.txt` buyrug'ini bering.",
  ["RUN", "FILECHECK", "EMPTY"],
  ["./filecheck.sh empty.txt", "bash filecheck.sh empty.txt"],
  8, "8-Qavat • Oson", "S03 Activity 8 • Test empty");

addQ(115, "To'la Faylni Tekshirish (./filecheck.sh data.txt)",
  "Darslik 12-sahifasi: <code>data.txt</code> tekshirilganda 'The file is not empty.' chiqishi kerak.",
  "<code>./filecheck.sh data.txt</code> buyrug'ini bering.",
  "./filecheck.sh data.txt",
  "`./filecheck.sh data.txt` buyrug'ini bering.",
  ["RUN", "FILECHECK", "DATA"],
  ["./filecheck.sh data.txt", "bash filecheck.sh data.txt"],
  8, "8-Qavat • Oson", "S03 Activity 8 • Test data");

addQ(116, "Mavjud Bo'lmagan Fayl Tekshiruvi (./filecheck.sh missing.txt)",
  "Darslik 12-sahifasi: Yo'q fayl kiritilganda 'The path does not exist' xabari va exit 2 qaytadi.",
  "<code>./filecheck.sh missing.txt</code> buyrug'ini bering.",
  "./filecheck.sh missing.txt",
  "`./filecheck.sh missing.txt` buyrug'ini bering.",
  ["RUN", "FILECHECK", "MISSING"],
  ["./filecheck.sh missing.txt", "bash filecheck.sh missing.txt"],
  8, "8-Qavat • Oson", "S03 Activity 8 • Test missing");

addQ(117, "Case Strukturasi Skriptini Ko'rish (service_menu.sh)",
  "Darslik 13-sahifasi: <code>case ... esac</code> ko'p tarmoqli tanlov skriptini o'qing.",
  "<code>cat service_menu.sh</code> buyrug'ini bering.",
  "cat service_menu.sh",
  "`cat service_menu.sh` buyrug'ini bering.",
  ["CAT", "CASE", "SERVICE_MENU"],
  ["cat service_menu.sh"],
  8, "8-Qavat • Oson", "S03 Activity 9 • View case");

addQ(118, "Service_menu.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x service_menu.sh</code> buyrug'ini bering.",
  "chmod +x service_menu.sh",
  "`chmod +x service_menu.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "SERVICE_MENU"],
  ["chmod +x service_menu.sh", "chmod 755 service_menu.sh"],
  8, "8-Qavat • Oson", "S03 Activity 9 • chmod menu");

addQ(119, "Start Buyrug'ini Sinash (./service_menu.sh start)",
  "Darslik 13-sahifasi: start tanlanganda 'Starting the demonstration service...' chiqishi kerak.",
  "<code>./service_menu.sh start</code> buyrug'ini bering.",
  "./service_menu.sh start",
  "`./service_menu.sh start` buyrug'ini bering.",
  ["RUN", "CASE", "START"],
  ["./service_menu.sh start", "bash service_menu.sh start"],
  8, "8-Qavat • Oson", "S03 Activity 9 • Test start");

addQ(120, "Stop Buyrug'ini Sinash (./service_menu.sh stop)",
  "stop tanlanganda 'Stopping the demonstration service...' chiqishi kerak.",
  "<code>./service_menu.sh stop</code> buyrug'ini bering.",
  "./service_menu.sh stop",
  "`./service_menu.sh stop` buyrug'ini bering.",
  ["RUN", "CASE", "STOP"],
  ["./service_menu.sh stop", "bash service_menu.sh stop"],
  8, "8-Qavat • Oson", "S03 Activity 9 • Test stop");

// ----------------------------------------------------------------------------
// SECTOR 9 (121 - 135): Takrorlanishlar: Tsikllar & O'qish (Activity 10)
// ----------------------------------------------------------------------------
addQ(121, "Loops.sh Tsikllar Skriptini Ko'rish",
  "Darslik 14-sahifasi: For va While tsikllari jamlangan <code>loops.sh</code> skriptini o'qing.",
  "<code>cat loops.sh</code> buyrug'ini bering.",
  "cat loops.sh",
  "`cat loops.sh` buyrug'ini bering.",
  ["CAT", "LOOPS", "ITERATION"],
  ["cat loops.sh"],
  9, "9-Qavat • Oson", "S03 Activity 10 • View loops");

addQ(122, "Loops.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x loops.sh</code> buyrug'ini bering.",
  "chmod +x loops.sh",
  "`chmod +x loops.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "LOOPS"],
  ["chmod +x loops.sh", "chmod 755 loops.sh"],
  9, "9-Qavat • Oson", "S03 Activity 10 • chmod loops");

addQ(123, "Loops.sh Skriptini 5 Bilan Ishga Tushirish",
  "Darslik 14-sahifasi: 5 ta qadam bilan ikkala tsiklni ishga tushiring.",
  "<code>./loops.sh 5</code> buyrug'ini bering.",
  "./loops.sh 5",
  "`./loops.sh 5` buyrug'ini bering.",
  ["RUN", "LOOPS", "5_STEPS"],
  ["./loops.sh 5", "bash loops.sh 5"],
  9, "9-Qavat • Oson", "S03 Activity 10 • Run 5");

addQ(124, "Loops.sh Skriptini 3 Bilan Sinash",
  "3 qadamli sikl natijasini oling.",
  "<code>./loops.sh 3</code> buyrug'ini bering.",
  "./loops.sh 3",
  "`./loops.sh 3` buyrug'ini bering.",
  ["RUN", "LOOPS", "3_STEPS"],
  ["./loops.sh 3", "bash loops.sh 3"],
  9, "9-Qavat • Oson", "S03 Activity 10 • Run 3");

addQ(125, "Fayldan Satrma-Satr O'qish Hujjatini Ko'rish (ips.txt)",
  "Darslik 15-sahifasi: <code>ips.txt</code> faylida 2 ta IP manzil mavjud.",
  "<code>cat ips.txt</code> buyrug'ini bering.",
  "cat ips.txt",
  "`cat ips.txt` buyrug'ini bering.",
  ["CAT", "IPS", "INPUT_FILE"],
  ["cat ips.txt"],
  9, "9-Qavat • Oson", "S03 Activity 10 • View ips.txt");

addQ(126, "Read_ips.sh Skriptini O'qish",
  "Darslik 15-sahifasi: <code>while IFS= read -r ip</code> orqali faylni xavfsiz o'quvchi skriptni ko'ring.",
  "<code>cat read_ips.sh</code> buyrug'ini bering.",
  "cat read_ips.sh",
  "`cat read_ips.sh` buyrug'ini bering.",
  ["CAT", "WHILE_READ", "IFS"],
  ["cat read_ips.sh"],
  9, "9-Qavat • Oson", "S03 Activity 10 • View read_ips");

addQ(127, "Read_ips.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x read_ips.sh</code> buyrug'ini bering.",
  "chmod +x read_ips.sh",
  "`chmod +x read_ips.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "READ_IPS"],
  ["chmod +x read_ips.sh", "chmod 755 read_ips.sh"],
  9, "9-Qavat • Oson", "S03 Activity 10 • chmod read_ips");

addQ(128, "Read_ips.sh Skriptini Ishga Tushirish",
  "Darslik 15-sahifasi: Ikkala IP manzil etiketka bilan ekranga chiqishini ko'ring.",
  "<code>./read_ips.sh</code> buyrug'ini bering.",
  "./read_ips.sh",
  "`./read_ips.sh` buyrug'ini bering.",
  ["RUN", "READ_IPS", "LINE_BY_LINE"],
  ["./read_ips.sh", "bash read_ips.sh"],
  9, "9-Qavat • Oson", "S03 Activity 10 • Run read_ips");

addQ(129, "IFS O'zgaruvchisi Vazifasi",
  "Darslik 7-sahifasi: <code>IFS=</code> bo'sh qoldirilishi satr boshidagi bo'shliqlarni saqlab qoladi.",
  "<code>head -n 6 read_ips.sh</code> buyrug'ini bering.",
  "head -n 6 read_ips.sh",
  "`head -n 6 read_ips.sh` buyrug'ini bering.",
  ["HEAD", "IFS", "EXPLANATION"],
  ["head -n 6 read_ips.sh", "head -6 read_ips.sh"],
  9, "9-Qavat • Oson", "S03 Command Ref • IFS");

addQ(130, "Break Va Continue Tushunchasi",
  "Darslik 14-sahifasi: <code>break</code> butun tsikldan chiqadi, <code>continue</code> esa keyingi qadamga o'tadi.",
  "<code>echo \"break and continue\"</code> buyrug'i orqali tasdiqlang.",
  "echo \"break and continue\"",
  "`echo \"break and continue\"` buyrug'ini bering.",
  ["ECHO", "BREAK", "CONTINUE"],
  ["echo \"break and continue\""],
  9, "9-Qavat • Oson", "S03 Section 16.2 • Loop Control");

addQ(131, "C-Style For Loop Tushunchasi",
  "<code>for ((i=1; i<=limit; i++))</code> sintaksisi.",
  "<code>grep -A 3 \"for ((\" loops.sh</code> buyrug'ini bering.",
  "grep -A 3 \"for ((\" loops.sh",
  "`grep -A 3 \"for ((\" loops.sh` buyrug'ini bering.",
  ["GREP", "FOR_LOOP", "C_STYLE"],
  ["grep -A 3 \"for ((\" loops.sh"],
  9, "9-Qavat • O'rta", "S03 Section 16.1 • C-style for");

addQ(132, "While Loop Sintaksisi",
  "<code>while ((i <= limit))</code> tsiklini ko'ring.",
  "<code>grep -A 4 \"while ((\" loops.sh</code> buyrug'ini bering.",
  "grep -A 4 \"while ((\" loops.sh",
  "`grep -A 4 \"while ((\" loops.sh` buyrug'ini bering.",
  ["GREP", "WHILE_LOOP", "CONDITION"],
  ["grep -A 4 \"while ((\" loops.sh"],
  9, "9-Qavat • O'rta", "S03 Section 16.1 • while loop");

addQ(133, "Loops.sh Sintaksisini Tekshirish",
  "<code>bash -n loops.sh</code> buyrug'ini bering.",
  "bash -n loops.sh",
  "`bash -n loops.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "LOOPS"],
  ["bash -n loops.sh"],
  9, "9-Qavat • Oson", "S03 Section 20 • Syntax");

addQ(134, "Read_ips.sh Sintaksisini Tekshirish",
  "<code>bash -n read_ips.sh</code> buyrug'ini bering.",
  "bash -n read_ips.sh",
  "`bash -n read_ips.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "READ_IPS"],
  ["bash -n read_ips.sh"],
  9, "9-Qavat • Oson", "S03 Section 20 • Syntax");

addQ(135, "Katalogdagi Barcha Fayllarni Ko'rish",
  "<code>ls -l</code> buyrug'ini bering.",
  "ls -l",
  "`ls -l` buyrug'ini bering.",
  ["LS", "FILES", "STATUS"],
  ["ls -l"],
  9, "9-Qavat • Oson", "S03 Practice • ls -l");

// ----------------------------------------------------------------------------
// SECTOR 10 (136 - 150): Massivlar & Integratsiyalashgan Hisobot (Activity 11 - 18)
// ----------------------------------------------------------------------------
addQ(136, "Arrays.sh Massivlar Skriptini Ko'rish",
  "Darslik 15-16-sahifalari: Indekslangan va assotsiativ (<code>declare -A</code>) massivlar yozilgan skriptni o'qing.",
  "<code>cat arrays.sh</code> buyrug'ini bering.",
  "cat arrays.sh",
  "`cat arrays.sh` buyrug'ini bering.",
  ["CAT", "ARRAYS", "DATA_STRUCTURES"],
  ["cat arrays.sh"],
  10, "10-Qavat • Oson", "S03 Activity 11 • View arrays.sh");

addQ(137, "Arrays.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x arrays.sh</code> buyrug'ini bering.",
  "chmod +x arrays.sh",
  "`chmod +x arrays.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "ARRAYS"],
  ["chmod +x arrays.sh", "chmod 755 arrays.sh"],
  10, "10-Qavat • Oson", "S03 Activity 11 • chmod arrays");

addQ(138, "Arrays.sh Skriptini Ishga Tushirish",
  "Darslik 16-sahifasi: Mevalar va ranglar hesh-xaritasi chiqishini ko'ring.",
  "<code>./arrays.sh</code> buyrug'ini bering.",
  "./arrays.sh",
  "`./arrays.sh` buyrug'ini bering.",
  ["RUN", "ARRAYS", "OUTPUT"],
  ["./arrays.sh", "bash arrays.sh"],
  10, "10-Qavat • Oson", "S03 Activity 11 • Run arrays");

addQ(139, "Massiv Elementlari Soni (${#array[@]})",
  "Darslik 7-sahifasi: Massivdagi barcha elementlar sonini sanash.",
  "<code>grep \"Number of items\" arrays.sh</code> buyrug'ini bering.",
  "grep \"Number of items\" arrays.sh",
  "`grep \"Number of items\" arrays.sh` buyrug'ini bering.",
  ["GREP", "ARRAY_LEN", "${#ARRAY[@]}"],
  ["grep \"Number of items\" arrays.sh"],
  10, "10-Qavat • Oson", "S03 Command Ref • Array count");

addQ(140, "Assotsiativ Massiv E'loni (declare -A)",
  "Darslik 7-sahifasi: Kalit-qiymat (key-value) juftliklarini yaratish uchun <code>declare -A</code> kerak.",
  "<code>grep \"declare -A\" arrays.sh</code> buyrug'ini bering.",
  "grep \"declare -A\" arrays.sh",
  "`grep \"declare -A\" arrays.sh` buyrug'ini bering.",
  ["GREP", "DECLARE_-A", "HASHMAP"],
  ["grep \"declare -A\" arrays.sh"],
  10, "10-Qavat • Oson", "S03 Command Ref • declare -A");

addQ(141, "Integratsiyalashgan Hisobot Skripti (process_report.sh)",
  "Darslik 16-17-sahifalari: Protsesslar, sana, tizim foydalanuvchisi va xotira auditini birlashtiruvchi skriptni ko'ring.",
  "<code>cat process_report.sh</code> buyrug'ini bering.",
  "cat process_report.sh",
  "`cat process_report.sh` buyrug'ini bering.",
  ["CAT", "REPORT", "INTEGRATION"],
  ["cat process_report.sh"],
  10, "10-Qavat • Oson", "S03 Activity 18 • View report");

addQ(142, "Process_report.sh Skriptiga Ruxsat Berish",
  "<code>chmod +x process_report.sh</code> buyrug'ini bering.",
  "chmod +x process_report.sh",
  "`chmod +x process_report.sh` buyrug'ini bering.",
  ["CHMOD", "+X", "REPORT"],
  ["chmod +x process_report.sh", "chmod 755 process_report.sh"],
  10, "10-Qavat • Oson", "S03 Activity 18 • chmod report");

addQ(143, "Hisobotni Yangi Faylga Saqlash (./process_report.sh my_process_report.txt)",
  "Darslik 17-sahifasi: <code>my_process_report.txt</code> nomli hisobot faylini yarating.",
  "<code>./process_report.sh my_process_report.txt</code> buyrug'ini bering.",
  "./process_report.sh my_process_report.txt",
  "`./process_report.sh my_process_report.txt` buyrug'ini bering.",
  ["RUN", "REPORT", "GENERATE"],
  ["./process_report.sh my_process_report.txt", "bash process_report.sh my_process_report.txt"],
  10, "10-Qavat • Oson", "S03 Activity 18 • Run report");

addQ(144, "Generatsiya Qilingan Hisobot Hujjatini O'qish",
  "Darslik 17-sahifasi: <code>cat my_process_report.txt</code> orqali yakuniy hisobotni tekshiring.",
  "<code>cat my_process_report.txt</code> buyrug'ini bering.",
  "cat my_process_report.txt",
  "`cat my_process_report.txt` buyrug'ini bering.",
  ["CAT", "REPORT_OUT", "VERIFY"],
  ["cat my_process_report.txt"],
  10, "10-Qavat • Oson", "S03 Activity 18 • Cat report");

addQ(145, "Hisobot Fayli Ruxsatlarini Tekshirish",
  "<code>ls -l my_process_report.txt</code> buyrug'ini bering.",
  "ls -l my_process_report.txt",
  "`ls -l my_process_report.txt` buyrug'ini bering.",
  ["LS", "REPORT", "PERM"],
  ["ls -l my_process_report.txt"],
  10, "10-Qavat • Oson", "S03 Activity 18 • ls report");

addQ(146, "Xotira Sarfi Bo'yicha Bosh Protsesslar (ps aux --sort=-%mem | head -n 6)",
  "Darslik 17-sahifasi: Hisobot ichidagi komandani alohida terminalda chaqiring.",
  "<code>ps aux --sort=-%mem | head -n 6</code> buyrug'ini bering.",
  "ps aux --sort=-%mem | head -n 6",
  "`ps aux --sort=-%mem | head -n 6` buyrug'ini bering.",
  ["PS", "SORT_MEM", "HEAD_6"],
  ["ps aux --sort=-%mem | head -n 6", "ps aux --sort=-%mem | head -6"],
  10, "10-Qavat • O'rta", "S03 Activity 18 • Memory Audit");

addQ(147, "Hisobot Skripti Sintaksisini Tekshirish",
  "<code>bash -n process_report.sh</code> buyrug'ini bering.",
  "bash -n process_report.sh",
  "`bash -n process_report.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "REPORT"],
  ["bash -n process_report.sh"],
  10, "10-Qavat • Oson", "S03 Section 20 • Syntax Check");

addQ(148, "Arrays.sh Sintaksisini Tekshirish",
  "<code>bash -n arrays.sh</code> buyrug'ini bering.",
  "bash -n arrays.sh",
  "`bash -n arrays.sh` buyrug'ini bering.",
  ["BASH", "SYNTAX", "ARRAYS"],
  ["bash -n arrays.sh"],
  10, "10-Qavat • Oson", "S03 Section 20 • Syntax Check");

addQ(149, "Joriy Foydalanuvchi Shaxsini Tekshirish",
  "Barcha laboratoriya vazifalari muvaffaqiyatli yakunlandi. Shaxsingizni tasdiqlang.",
  "<code>whoami</code> buyrug'ini bering.",
  "whoami",
  "`whoami` buyrug'ini bering.",
  ["WHOAMI", "FINAL", "SUCCESS"],
  ["whoami"],
  10, "10-Qavat • Oson", "S03 Final • whoami");

addQ(150, "Bosh Linux Protsesslar & Skriptlar Arxitektori Final Sinovi",
  "Professor Turing olqishlaydi! 3-hafta bo'yicha barcha 150 topshiriq va skriptlar 100% bajarildi. Ishchi katalogni ekranga chiqaring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "`pwd` buyrug'ini bering.",
  ["PWD", "VICTORY", "KERNEL_ARCHITECT"],
  ["pwd"],
  10, "10-Qavat • Oson", "S03 Final • Victory PWD");

console.log(`Generated all ${questions.length} questions for Week 3.`);

// Validate against VirtualLinuxShell and BASH_GRADER
const virtualFsCode = fs.readFileSync(path.join(__dirname, 'data/virtual_fs.js'), 'utf8');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
vm.runInContext(virtualFsCode, sandbox);

const BASH_GRADER = sandbox.window.VIRTUAL_LINUX_W3.BASH_GRADER;
console.log("Validating all 150 questions with BASH_GRADER...");
let fails = 0;
questions.forEach(q => {
  const res = BASH_GRADER.evaluate(q.expectedBash, q.expectedBash, q);
  if (!res.match) {
    console.error(`Validation failed for Q#${q.id} (${q.title}):`, res.message);
    fails++;
  }
});

if (fails > 0) {
  console.error(`Validation failed on ${fails} questions!`);
  process.exit(1);
} else {
  console.log("PASS: All 150 questions validated successfully!");
}

// Split into 3 files:
const q1_50 = questions.slice(0, 50);
const q51_100 = questions.slice(50, 100);
const q101_150 = questions.slice(100, 150);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_1_50.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 QUESTIONS 1 TO 50\n// ============================================================================\n\nwindow.QUESTIONS_1_50_W3 = ${JSON.stringify(q1_50, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_51_100.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 QUESTIONS 51 TO 100\n// ============================================================================\n\nwindow.QUESTIONS_51_100_W3 = ${JSON.stringify(q51_100, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_101_150.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 3 QUESTIONS 101 TO 150\n// ============================================================================\n\nwindow.QUESTIONS_101_150_W3 = ${JSON.stringify(q101_150, null, 2)};\n`,
  'utf8'
);

console.log("Successfully wrote all 3 question files for Week 3!");
