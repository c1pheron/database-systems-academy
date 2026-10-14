// ============================================================================
// QUESTION GENERATOR FOR WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4
// Generates exactly 150 questions (15 per sector x 10 sectors)
// WITH FULL FLAG ANATOMY & OMISSION RISK IN EVERY QUESTION.
// Saves to data/questions_1_50.js, questions_51_100.js, questions_101_150.js
// ============================================================================

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const questions = [];

function addQ(id, title, story, taskUz, expectedCmd, hint, tags, solutions, sector, difficulty, source, flagAnatomy) {
  questions.push({
    id,
    title,
    story,
    taskUz,
    expectedSql: expectedCmd,
    expectedBash: expectedCmd,
    hint,
    tags,
    solutions: solutions || [expectedCmd],
    sector,
    difficulty,
    source,
    flagAnatomy: flagAnatomy || {
      command: expectedCmd,
      flags: []
    }
  });
}

// ----------------------------------------------------------------------------
// SECTOR 1 (1 - 15): C Dasturlash: fork() & Protsesslar Hayoti (Activity 1)
// ----------------------------------------------------------------------------
addQ(1, "Ishchi Katalogni Tayyorlash (mkdir -p)",
  "Seminar 4 xavfsizlik qoidasi: Tajribalar shaxsiy fayllarga zarar yetkazmasligi uchun alohida katalog oching.",
  "<code>mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup</code> buyrug'ini bering.",
  "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup",
  "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup buyrug'ini bering.",
  ["MKDIR", "-P", "WORKSPACE"],
  ["mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup", "mkdir -p ~/os_seminar4/logs ~/os_seminar4/backup"],
  1, "1-Qavat • Oson", "S04 Setup • mkdir -p",
  {
    command: "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup",
    flags: [
      {
        flag: "-p",
        name: "Ota papkalarni ham yaratish (Parents)",
        syntaxPos: "Buyruqdan so'ng, yo'llardan oldin",
        purpose: "Agar ota papkalar mavjud bo'lmasa, ularni ham avtomatik yaratadi va papka allaqachon mavjud bo'lsa xato chiqarmaydi.",
        withoutRisk: "⚠️ AGAR -p BO'LMASA: Agar 'os_seminar4' papkasi hali yo'q bo'lsa, 'No such file or directory' xatosi bilan to'xtaydi!"
      }
    ]
  });

addQ(2, "Ishchi Papkaga O'tish (cd)",
  "Barcha laboratoriya vazifalari os_seminar4 papkasida bajarilishi shart.",
  "<code>cd $HOME/os_seminar4</code> buyrug'ini bering.",
  "cd $HOME/os_seminar4",
  "cd $HOME/os_seminar4 buyrug'ini bering.",
  ["CD", "WORKSPACE"],
  ["cd $HOME/os_seminar4", "cd ~/os_seminar4"],
  1, "1-Qavat • Oson", "S04 Setup • cd",
  {
    command: "cd $HOME/os_seminar4",
    flags: []
  });

addQ(3, "Joriy Manzilni Tasdiqlash (pwd)",
  "Manzil to'g'riligini tasdiqlash uchun pwd buyrug'ini bering.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  1, "1-Qavat • Oson", "S04 Setup • pwd",
  { command: "pwd", flags: [] });

addQ(4, "Fork.c Manba Kodini O'qish (cat fork.c)",
  "Darslik 2-sahifasi: C tilidagi fork() tizim chaqirig'i kodini o'rganing.",
  "<code>cat fork.c</code> buyrug'ini bering.",
  "cat fork.c",
  "cat fork.c buyrug'ini bering.",
  ["CAT", "FORK_C", "SOURCE"],
  ["cat fork.c"],
  1, "1-Qavat • Oson", "S04 Part 1 • cat fork.c",
  { command: "cat fork.c", flags: [] });

addQ(5, "Fork.c Kodini Kompilyatsiya Qilish (gcc -Wall -Wextra)",
  "Darslik 3-sahifasi: Barcha qat'iy ogohlantirishlar bilan xavfsiz kompilyatsiya qiling.",
  "<code>gcc -Wall -Wextra fork.c -o fork.out</code> buyrug'ini bering.",
  "gcc -Wall -Wextra fork.c -o fork.out",
  "gcc -Wall -Wextra fork.c -o fork.out buyrug'ini bering.",
  ["GCC", "-WALL", "-WEXTRA", "-O"],
  ["gcc -Wall -Wextra fork.c -o fork.out"],
  1, "1-Qavat • O'rta", "S04 Part 1 • gcc compile",
  {
    command: "gcc -Wall -Wextra fork.c -o fork.out",
    flags: [
      {
        flag: "-Wall",
        name: "Barcha ogohlantirishlar (Warnings All)",
        syntaxPos: "Manba fayldan oldin",
        purpose: "Dasturdagi potensial xatoliklar va shubhali konstruktsiyalarni ko'rsatadi.",
        withoutRisk: "⚠️ AGAR -Wall BO'LMASA: Kompilyator jiddiy mantig'iy xatolarni yashiradi va dastur ishlab chiqarishda qulab tushadi!"
      },
      {
        flag: "-Wextra",
        name: "Qo'shimcha ogohlantirishlar (Extra Warnings)",
        syntaxPos: "-Wall yonida",
        purpose: "Ishlatilmagan parametrlar va tiplar nomuvofiqligini qat'iy tekshiradi.",
        withoutRisk: "⚠️ AGAR -Wextra BO'LMASA: Nozik sintaksis kamchiliklari e'tibordan chetda qoladi."
      },
      {
        flag: "-o fork.out",
        name: "Chiquvchi fayl nomi (Output)",
        syntaxPos: "Chiqariladigan fayl nomidan oldin",
        purpose: "Yaratiladigan ijrochi faylga nom beradi.",
        withoutRisk: "⚠️ AGAR -o BO'LMASA: Gcc faylni sukut bo'yicha 'a.out' nomi bilan saqlaydi va boshqa dasturlarni ustiga yozib yuboradi!"
      }
    ]
  });

addQ(6, "Fork Dasturini Ishga Tushirish (./fork.out)",
  "Darslik 3-sahifasi: Ota va bola jarayonlar PID larini terminalda ko'ring.",
  "<code>./fork.out</code> buyrug'ini bering.",
  "./fork.out",
  "./fork.out buyrug'ini bering.",
  ["RUN", "FORK_OUT"],
  ["./fork.out"],
  1, "1-Qavat • Oson", "S04 Part 1 • run fork.out",
  {
    command: "./fork.out",
    flags: [
      {
        flag: "./",
        name: "Joriy katalog ko'rsatkichi",
        syntaxPos: "Fayl nomi boshida",
        purpose: "Linux xavfsizlik maqsadida joriy katalogni sukut bo'yicha $PATH ga qo'shmaydi; ./ aynan shu papkadagi faylni chaqiradi.",
        withoutRisk: "⚠️ AGAR ./ BO'LMASA: Shell 'fork.out: command not found' xatosini qaytaradi!"
      }
    ]
  });

addQ(7, "fflush(stdout) Tushunchasini Tekshirish",
  "Darslik 3-sahifasi: fork() oldidan I/O buferini tozalash qatorini toping.",
  "<code>grep fflush fork.c</code> buyrug'ini bering.",
  "grep fflush fork.c",
  "grep fflush fork.c buyrug'ini bering.",
  ["GREP", "FFLUSH", "BUFFER"],
  ["grep fflush fork.c"],
  1, "1-Qavat • Oson", "S04 Part 1 • grep fflush",
  { command: "grep fflush fork.c", flags: [] });

addQ(8, "pid_t Qaytish Qiymatini Tekshirish",
  "Darslik 2-sahifasi: fork() chaqirilgan qatorni ko'ring.",
  "<code>grep 'fork()' fork.c</code> buyrug'ini bering.",
  "grep 'fork()' fork.c",
  "grep 'fork()' fork.c buyrug'ini bering.",
  ["GREP", "FORK_CALL"],
  ["grep 'fork()' fork.c", "grep fork fork.c"],
  1, "1-Qavat • Oson", "S04 Part 1 • grep fork",
  { command: "grep 'fork()' fork.c", flags: [] });

addQ(9, "Bolada PID==0 Shartini Tekshirish",
  "Darslik 2-sahifasi: Bolani ajratuvchi if shartini ko'ring.",
  "<code>grep 'pid == 0' fork.c</code> buyrug'ini bering.",
  "grep 'pid == 0' fork.c",
  "grep 'pid == 0' fork.c buyrug'ini bering.",
  ["GREP", "PID_ZERO"],
  ["grep 'pid == 0' fork.c"],
  1, "1-Qavat • Oson", "S04 Part 1 • grep pid == 0",
  { command: "grep 'pid == 0' fork.c", flags: [] });

addQ(10, "getpid() Tizim Chaqirig'ini Tekshirish",
  "Joriy protsess PID raqamini oluvchi funksiyani ko'ring.",
  "<code>grep getpid fork.c</code> buyrug'ini bering.",
  "grep getpid fork.c",
  "grep getpid fork.c buyrug'ini bering.",
  ["GREP", "GETPID"],
  ["grep getpid fork.c"],
  1, "1-Qavat • Oson", "S04 Part 1 • getpid",
  { command: "grep getpid fork.c", flags: [] });

addQ(11, "getppid() Ota Protsess Funksiyasini Tekshirish",
  "Ota jarayon PID raqamini (PPID) oluvchi funksiyani ko'ring.",
  "<code>grep getppid fork.c</code> buyrug'ini bering.",
  "grep getppid fork.c",
  "grep getppid fork.c buyrug'ini bering.",
  ["GREP", "GETPPID"],
  ["grep getppid fork.c"],
  1, "1-Qavat • Oson", "S04 Part 1 • getppid",
  { command: "grep getppid fork.c", flags: [] });

addQ(12, "Yaratilgan Binar Fayl Ruxsatlarini Ko'rish",
  "Kompilyatsiya qilingan fork.out fayli ijro huquqiga (x) egaligini tekshiring.",
  "<code>ls -l fork.out</code> buyrug'ini bering.",
  "ls -l fork.out",
  "ls -l fork.out buyrug'ini bering.",
  ["LS", "-L", "PERMISSIONS"],
  ["ls -l fork.out"],
  1, "1-Qavat • Oson", "S04 Part 1 • ls -l fork.out",
  {
    command: "ls -l fork.out",
    flags: [
      {
        flag: "-l",
        name: "Uzun ro'yxat formati (Long listing)",
        syntaxPos: "ls dan so'ng",
        purpose: "Ruxsatlar, fayl egasi, hajmi va sanasini to'liq chiqaradi.",
        withoutRisk: "⚠️ AGAR -l BO'LMASA: Faqat fayl nomi chiqadi, unda ijro huquqi (-rwxr-xr-x) bor-yo'qligi ko'rinmaydi!"
      }
    ]
  });

addQ(13, "Chiqish Natijasini Qayta Ishga Tushirib Ko'rish",
  "Linuxda ota va bola mustaqil rejalashtiriladi (scheduling order may vary).",
  "<code>./fork.out</code> buyrug'ini takroran bering.",
  "./fork.out",
  "./fork.out buyrug'ini bering.",
  ["RUN", "SCHEDULING"],
  ["./fork.out"],
  1, "1-Qavat • Oson", "S04 Part 1 • rerun fork.out",
  { command: "./fork.out", flags: [] });

addQ(14, "Xatolik Qaytish Kodini Ko'rish (echo $?)",
  "Oxirgi C dasturi muvaffaqiyatli yakunlanganini (exit code 0) tasdiqlang.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $? buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  1, "1-Qavat • Oson", "S04 Part 1 • status",
  { command: "echo $?", flags: [] });

addQ(15, "Sektor 1 Xulosasi: Joriy Katalogni Tekshirish",
  "Keyingi bosqichga o'tishdan oldin katalog manzilini tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "STATUS"],
  ["pwd"],
  1, "1-Qavat • Oson", "S04 Part 1 • pwd end",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 2 (16 - 30): Python fork() & Xotirani Klonlash (Activity 1 & Docx)
// ----------------------------------------------------------------------------
addQ(16, "Fork.py Python Manba Kodini Ko'rish",
  "WIUT 'fork in Python.docx' qo'llanmasi: Python da os.fork() chaqirig'ini o'qing.",
  "<code>cat fork.py</code> buyrug'ini bering.",
  "cat fork.py",
  "cat fork.py buyrug'ini bering.",
  ["CAT", "PYTHON", "FORK_PY"],
  ["cat fork.py"],
  2, "2-Qavat • Oson", "S04 Python • cat fork.py",
  { command: "cat fork.py", flags: [] });

addQ(17, "Python Fork Skriptini Ishga Tushirish",
  "Python interpretatori orqali fork.py skriptini bajaring.",
  "<code>python3 fork.py</code> buyrug'ini bering.",
  "python3 fork.py",
  "python3 fork.py buyrug'ini bering.",
  ["PYTHON3", "RUN"],
  ["python3 fork.py", "./fork.py"],
  2, "2-Qavat • Oson", "S04 Python • run fork.py",
  { command: "python3 fork.py", flags: [] });

addQ(18, "Python Skriptida os Modulini Tekshirish",
  "Python tizim chaqiriqlari 'os' moduli orqali amalga oshiriladi.",
  "<code>grep 'import os' fork.py</code> buyrug'ini bering.",
  "grep 'import os' fork.py",
  "grep 'import os' fork.py buyrug'ini bering.",
  ["GREP", "IMPORT_OS"],
  ["grep 'import os' fork.py", "grep \"import os\" fork.py"],
  2, "2-Qavat • Oson", "S04 Python • import os",
  { command: "grep 'import os' fork.py", flags: [] });

addQ(19, "Python os.fork() Chaqirig'ini Topish",
  "Yadroda jarayonni klonlovchi qatorni ko'ring.",
  "<code>grep 'os.fork()' fork.py</code> buyrug'ini bering.",
  "grep 'os.fork()' fork.py",
  "grep 'os.fork()' fork.py buyrug'ini bering.",
  ["GREP", "OS_FORK"],
  ["grep 'os.fork()' fork.py"],
  2, "2-Qavat • Oson", "S04 Python • os.fork",
  { command: "grep 'os.fork()' fork.py", flags: [] });

addQ(20, "Python OSError Istisnosi Tahlili",
  "Agar tizimda xotira yetmasa yoki PID limiti oshsa, fork OSError chiqaradi.",
  "<code>grep OSError fork.py</code> buyrug'ini bering.",
  "grep OSError fork.py",
  "grep OSError fork.py buyrug'ini bering.",
  ["GREP", "OSERROR"],
  ["grep OSError fork.py"],
  2, "2-Qavat • Oson", "S04 Python • OSError",
  { command: "grep OSError fork.py", flags: [] });

addQ(21, "Python da Bola Shartini Ko'rish (pid == 0)",
  "Pythonda ham bolaning qaytish qiymati 0 ga teng bo'ladi.",
  "<code>grep 'pid == 0:' fork.py</code> buyrug'ini bering.",
  "grep 'pid == 0:' fork.py",
  "grep 'pid == 0:' fork.py buyrug'ini bering.",
  ["GREP", "PID_0"],
  ["grep 'pid == 0:' fork.py", "grep 'pid == 0' fork.py"],
  2, "2-Qavat • Oson", "S04 Python • pid == 0",
  { command: "grep 'pid == 0:' fork.py", flags: [] });

addQ(22, "Fork.py Skriptiga Ijro Huquqini Berish",
  "Skript to'g'ridan-to'g'ri ./fork.py ko'rinishida chaqirilishi uchun +x bering.",
  "<code>chmod +x fork.py</code> buyrug'ini bering.",
  "chmod +x fork.py",
  "chmod +x fork.py buyrug'ini bering.",
  ["CHMOD", "+X", "PYTHON"],
  ["chmod +x fork.py", "chmod 755 fork.py"],
  2, "2-Qavat • Oson", "S04 Python • chmod +x",
  {
    command: "chmod +x fork.py",
    flags: [
      {
        flag: "+x",
        name: "Ijro huquqini qo'shish (Executable)",
        syntaxPos: "Fayl nomidan oldin",
        purpose: "Faylni to'g'ridan-to'g'ri dastur kabi ishga tushirish huquqini beradi.",
        withoutRisk: "⚠️ AGAR +x BO'LMASA: './fork.py' buyrug'i 'Permission denied' xatosi bilan to'xtaydi!"
      }
    ]
  });

addQ(23, "To'g'ridan-to'g'ri ./fork.py Bilan Ishga Tushirish",
  "Ijro huquqi o'rnatilgan Python skriptini ishga tushiring.",
  "<code>./fork.py</code> buyrug'ini bering.",
  "./fork.py",
  "./fork.py buyrug'ini bering.",
  ["RUN", "EXEC_PY"],
  ["./fork.py", "python3 fork.py"],
  2, "2-Qavat • Oson", "S04 Python • run ./fork.py",
  { command: "./fork.py", flags: [] });

addQ(24, "Python Versiyasini Tekshirish",
  "Tizimda o'rnatilgan Python versiyasini ko'ring.",
  "<code>python3 --version</code> buyrug'ini bering.",
  "python3 --version",
  "python3 --version buyrug'ini bering.",
  ["PYTHON3", "--VERSION"],
  ["python3 --version", "python3 -V"],
  2, "2-Qavat • Oson", "S04 Python • version",
  {
    command: "python3 --version",
    flags: [
      {
        flag: "--version",
        name: "Dastur versiyasini ko'rsatish",
        syntaxPos: "Buyruqdan so'ng",
        purpose: "O'rnatilgan dasturning aniq versiyasini ko'rsatadi.",
        withoutRisk: "⚠️ AGAR --version BO'LMASA: Quruq 'python3' buyrug'i interaktiv REPL terminalini ochib qo'yadi."
      }
    ]
  });

addQ(25, "Python da os.getpid() Chaqirig'ini Tekshirish",
  "Jarayon o'z PID raqamini qanday olishini ko'ring.",
  "<code>grep 'os.getpid()' fork.py</code> buyrug'ini bering.",
  "grep 'os.getpid()' fork.py",
  "grep 'os.getpid()' fork.py buyrug'ini bering.",
  ["GREP", "GETPID_PY"],
  ["grep 'os.getpid()' fork.py"],
  2, "2-Qavat • Oson", "S04 Python • getpid",
  { command: "grep 'os.getpid()' fork.py", flags: [] });

addQ(26, "Python va C Chiqishlarini Taqqoslash",
  "Ikkala til ham operatsion tizim yadrosi (Kernel) darajasida aynan bir xil fork() tizim chaqirig'ini (syscall) ishlatadi.",
  "<code>ls -l fork.c fork.py</code> buyrug'ini bering.",
  "ls -l fork.c fork.py",
  "ls -l fork.c fork.py buyrug'ini bering.",
  ["LS", "COMPARE"],
  ["ls -l fork.c fork.py"],
  2, "2-Qavat • Oson", "S04 Python • ls compare",
  { command: "ls -l fork.c fork.py", flags: [] });

addQ(27, "Joriy Jarayon Qaytish Statusini Ko'rish",
  "Oxirgi buyruq muvaffaqiyatini tasdiqlang.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $? buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  2, "2-Qavat • Oson", "S04 Python • status",
  { command: "echo $?", flags: [] });

addQ(28, "Fork.py Faylining Birinchi 3 Qatorini O'qish",
  "Boshlang'ich importlar va e'lonlarni ko'ring.",
  "<code>head -n 3 fork.py</code> buyrug'ini bering.",
  "head -n 3 fork.py",
  "head -n 3 fork.py buyrug'ini bering.",
  ["HEAD", "-N", "LINES"],
  ["head -n 3 fork.py", "head -3 fork.py"],
  2, "2-Qavat • Oson", "S04 Python • head -n 3",
  {
    command: "head -n 3 fork.py",
    flags: [
      {
        flag: "-n 3",
        name: "Satrlar soni (Number of lines)",
        syntaxPos: "head dan so'ng",
        purpose: "Faylning faqat boshidagi 3 ta satrini ko'rsatadi.",
        withoutRisk: "⚠️ AGAR -n 3 BO'LMASA: Sukut bo'yicha 10 ta satr chiqadi."
      }
    ]
  });

addQ(29, "Fork.py Oxirgi 4 Qatorini Ko'rish",
  "Ota va bola logikasining yakunini ko'ring.",
  "<code>tail -n 4 fork.py</code> buyrug'ini bering.",
  "tail -n 4 fork.py",
  "tail -n 4 fork.py buyrug'ini bering.",
  ["TAIL", "-N", "LINES"],
  ["tail -n 4 fork.py", "tail -4 fork.py"],
  2, "2-Qavat • Oson", "S04 Python • tail -n 4",
  {
    command: "tail -n 4 fork.py",
    flags: [
      {
        flag: "-n 4",
        name: "Oxirgi satrlar soni",
        syntaxPos: "tail dan so'ng",
        purpose: "Faylning oxirgi 4 satrini ajratib oladi.",
        withoutRisk: "⚠️ AGAR -n 4 BO'LMASA: Sukut bo'yicha 10 ta satr chiqadi."
      }
    ]
  });

addQ(30, "Sektor 2 Yakunida Ishchi Papkani Tasdiqlash",
  "Katalog manzilini tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  2, "2-Qavat • Oson", "S04 Python • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 3 (31 - 45): Chegaralangan Ko'payish & Fork Bomb Xavfi (Part 2)
// ----------------------------------------------------------------------------
addQ(31, "Forks.c Chegaralangan Manba Kodini O'qish",
  "Darslik 3-sahifasi: Tsikl ichida chegaralangan (2 marta) fork() kodini ko'ring.",
  "<code>cat forks.c</code> buyrug'ini bering.",
  "cat forks.c",
  "cat forks.c buyrug'ini bering.",
  ["CAT", "FORKS_C"],
  ["cat forks.c"],
  3, "3-Qavat • Oson", "S04 Part 2 • cat forks.c",
  { command: "cat forks.c", flags: [] });

addQ(32, "Forks.c Dasturini Kompilyatsiya Qilish",
  "Darslik 4-sahifasi: 2 marta takrorlanuvchi dasturni kompilyatsiya qiling.",
  "<code>gcc -Wall -Wextra forks.c -o forks.out</code> buyrug'ini bering.",
  "gcc -Wall -Wextra forks.c -o forks.out",
  "gcc -Wall -Wextra forks.c -o forks.out buyrug'ini bering.",
  ["GCC", "COMPILE", "FORKS"],
  ["gcc -Wall -Wextra forks.c -o forks.out"],
  3, "3-Qavat • O'rta", "S04 Part 2 • gcc compile forks",
  {
    command: "gcc -Wall -Wextra forks.c -o forks.out",
    flags: [
      {
        flag: "-Wall",
        name: "Barcha ogohlantirishlar",
        syntaxPos: "Manba fayldan oldin",
        purpose: "Sintaksis va mantiqiy xatolarni ogohlantiradi.",
        withoutRisk: "⚠️ AGAR BO'LMASA: Xatolar yashirin qoladi."
      },
      {
        flag: "-o forks.out",
        name: "Chiquvchi fayl nomi",
        syntaxPos: "Fayl nomi oldida",
        purpose: "Dasturni forks.out sifatida saqlaydi.",
        withoutRisk: "⚠️ AGAR BO'LMASA: Standart a.out yaratiladi."
      }
    ]
  });

addQ(33, "Forks.out Dasturini Ishga Tushirish",
  "Darslik 4-sahifasi: 1-iteratsiyada 2 ta, 2-iteratsiyada 4 ta protsess hosil bo'lishini (jami 6 ta step satrini) ko'ring.",
  "<code>./forks.out</code> buyrug'ini bering.",
  "./forks.out",
  "./forks.out buyrug'ini bering.",
  ["RUN", "FORKS_OUT"],
  ["./forks.out"],
  3, "3-Qavat • Oson", "S04 Part 2 • run forks.out",
  { command: "./forks.out", flags: [] });

addQ(34, "Forks.c Kodidagi Tsikl Chegarasini Tekshirish",
  "Darslik ogohlantirishi: Hech qachon chegarasiz fork chaqirmang!",
  "<code>grep 'for (' forks.c</code> buyrug'ini bering.",
  "grep 'for (' forks.c",
  "grep 'for (' forks.c buyrug'ini bering.",
  ["GREP", "LOOP_BOUND"],
  ["grep 'for (' forks.c", "grep for forks.c"],
  3, "3-Qavat • Oson", "S04 Part 2 • grep for",
  { command: "grep 'for (' forks.c", flags: [] });

addQ(35, "Jarayonlar Chegarasini Ko'rish (ulimit -u)",
  "Linuxda fork bomb halokatlarining oldini olish uchun foydalanuvchiga tegishli protsesslar soni cheklanadi.",
  "<code>ulimit -u</code> buyrug'ini bering.",
  "ulimit -u",
  "ulimit -u buyrug'ini bering.",
  ["ULIMIT", "-U", "PROCESS_LIMIT"],
  ["ulimit -u"],
  3, "3-Qavat • Oson", "S04 Part 2 • ulimit -u",
  {
    command: "ulimit -u",
    flags: [
      {
        flag: "-u",
        name: "Maksimal foydalanuvchi jarayonlari (User process limit)",
        syntaxPos: "ulimit dan so'ng",
        purpose: "Yagona foydalanuvchi bir vaqtda ochishi mumkin bo'lgan maksimal protsesslar sonini ko'rsatadi.",
        withoutRisk: "⚠️ AGAR -u BO'LMASA: ulimit sukut bo'yicha -f (fayl hajmi chegarasini) ko'rsatadi, protsesslar sonini emas!"
      }
    ]
  });

addQ(36, "Barcha Resurs Cheklovlarini Ko'rish (ulimit -a)",
  "Tizimdagi xotira, stack va protsesslar cheklovlarini to'liq ro'yxatda ko'ring.",
  "<code>ulimit -a</code> buyrug'ini bering.",
  "ulimit -a",
  "ulimit -a buyrug'ini bering.",
  ["ULIMIT", "-A", "ALL_LIMITS"],
  ["ulimit -a"],
  3, "3-Qavat • Oson", "S04 Part 2 • ulimit -a",
  {
    command: "ulimit -a",
    flags: [
      {
        flag: "-a",
        name: "Barcha cheklovlar (All limits)",
        syntaxPos: "ulimit dan so'ng",
        purpose: "Tizimning barcha ulimit parametrlarini (fayllar, xotira, protsesslar) bir sahifada chiqaradi.",
        withoutRisk: "⚠️ AGAR -a BO'LMASA: Faqat bitta birlamchi parametr ko'rinadi."
      }
    ]
  });

addQ(37, "Jarayonlar Chegarasini Vaqtincha 50 Ga Cheklash",
  "Xavfsiz laboratoriya muhitida jarayonlar chegarasini 50 ga o'rnating.",
  "<code>ulimit -u 50</code> buyrug'ini bering.",
  "ulimit -u 50",
  "ulimit -u 50 buyrug'ini bering.",
  ["ULIMIT", "SET_LIMIT"],
  ["ulimit -u 50"],
  3, "3-Qavat • O'rta", "S04 Part 2 • set ulimit 50",
  {
    command: "ulimit -u 50",
    flags: [
      {
        flag: "-u 50",
        name: "Chegarani 50 ga tenglash",
        syntaxPos: "Parametr qiymati",
        purpose: "Maksimal jarayonlar sonini 50 ta bilan chegaralaydi; yangi fork() chaqiriqlari 50 dan oshsa rad etiladi.",
        withoutRisk: "⚠️ AGAR CHEKLOV O'RNATILMASA: Fork bomb yuz bersa yadro xotirasi to'lib, operatsion tizim to'liq restart talab qiladi!"
      }
    ]
  });

addQ(38, "Yangi O'rnatilgan Chegarani Tekshirish",
  "ulimit -u orqali yangi chegara muvaffaqiyatini ko'ring.",
  "<code>ulimit -u</code> buyrug'ini bering.",
  "ulimit -u",
  "ulimit -u buyrug'ini bering.",
  ["ULIMIT", "CHECK"],
  ["ulimit -u"],
  3, "3-Qavat • Oson", "S04 Part 2 • verify ulimit",
  { command: "ulimit -u", flags: [] });

addQ(39, "Forks.out Dasturini Qayta Sinash",
  "Chegaralangan rejimda dasturni yana bir bor tekshiring.",
  "<code>./forks.out</code> buyrug'ini bering.",
  "./forks.out",
  "./forks.out buyrug'ini bering.",
  ["RUN", "TEST_FORKS"],
  ["./forks.out"],
  3, "3-Qavat • Oson", "S04 Part 2 • run forks.out 2",
  { command: "./forks.out", flags: [] });

addQ(40, "Forks.out Satrlar Soni Hisoblash (wc -l)",
  "Dastur 6 ta satr chiqarganini quvur (pipe) orqali hisoblang.",
  "<code>./forks.out | wc -l</code> buyrug'ini bering.",
  "./forks.out | wc -l",
  "./forks.out | wc -l buyrug'ini bering.",
  ["WC", "-L", "PIPE"],
  ["./forks.out | wc -l"],
  3, "3-Qavat • O'rta", "S04 Part 2 • wc -l",
  {
    command: "./forks.out | wc -l",
    flags: [
      {
        flag: "-l",
        name: "Satrlar soni (Lines count)",
        syntaxPos: "wc dan so'ng",
        purpose: "Chiqarilgan umumiy qatorlar sonini hisoblaydi.",
        withoutRisk: "⚠️ AGAR -l BO'LMASA: wc baytlar, so'zlar va satrlar sonini chalkashtirib ko'rsatadi."
      }
    ]
  });

addQ(41, "Kompilyatsiya Qilingan Barcha .out Fayllarini Ko'rish",
  "Yaratilgan binar dasturlarni ro'yxatlang.",
  "<code>ls -l *.out</code> buyrug'ini bering.",
  "ls -l *.out",
  "ls -l *.out buyrug'ini bering.",
  ["LS", "*.OUT"],
  ["ls -l *.out"],
  3, "3-Qavat • Oson", "S04 Part 2 • ls out",
  { command: "ls -l *.out", flags: [] });

addQ(42, "C Manba Fayllarini Ko'rish",
  "Barcha .c fayllarini ro'yxatlang.",
  "<code>ls -l *.c</code> buyrug'ini bering.",
  "ls -l *.c",
  "ls -l *.c buyrug'ini bering.",
  ["LS", "*.C"],
  ["ls -l *.c"],
  3, "3-Qavat • Oson", "S04 Part 2 • ls c",
  { command: "ls -l *.c", flags: [] });

addQ(43, "Oxirgi Buyruq Statusini Ko'rish",
  "Muvaffaqiyatni tasdiqlang.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $? buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  3, "3-Qavat • Oson", "S04 Part 2 • status",
  { command: "echo $?", flags: [] });

addQ(44, "Gcc Versiyasini Tekshirish",
  "Gcc kompilyatori o'rnatilganini tekshiring.",
  "<code>gcc --version</code> buyrug'ini bering.",
  "gcc --version",
  "gcc --version buyrug'ini bering.",
  ["GCC", "--VERSION"],
  ["gcc --version"],
  3, "3-Qavat • Oson", "S04 Part 2 • gcc version",
  { command: "gcc --version", flags: [] });

addQ(45, "Sektor 3 Xulosasi: Ishchi Katalogni Tekshirish",
  "Keyingi vazifaga o'tish oldidan manzilni ko'ring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  3, "3-Qavat • Oson", "S04 Part 2 • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 4 (46 - 60): Eskirgan Fayllar Audit & find Filtri (Task 1)
// ----------------------------------------------------------------------------
addQ(46, "Namunaviy Log Fayllarni Yaratish (touch)",
  "Darslik 4-sahifasi: logs papkasida sinov uchun fayllar yarating.",
  "<code>touch logs/old.log logs/recent.log logs/old.txt</code> buyrug'ini bering.",
  "touch logs/old.log logs/recent.log logs/old.txt",
  "touch logs/old.log logs/recent.log logs/old.txt buyrug'ini bering.",
  ["TOUCH", "FILES"],
  ["touch logs/old.log logs/recent.log logs/old.txt"],
  4, "4-Qavat • Oson", "S04 Task 1 • touch logs",
  { command: "touch logs/old.log logs/recent.log logs/old.txt", flags: [] });

addQ(47, "Eskirgan Sanani O'rnatish (touch -d '10 days ago')",
  "Darslik 4-sahifasi: old.log va old.txt fayllari sanasini 10 kun oldingi vaqtga o'tkazing.",
  "<code>touch -d '10 days ago' logs/old.log logs/old.txt</code> buyrug'ini bering.",
  "touch -d '10 days ago' logs/old.log logs/old.txt",
  "touch -d '10 days ago' logs/old.log logs/old.txt buyrug'ini bering.",
  ["TOUCH", "-D", "DATE_AGE"],
  ["touch -d '10 days ago' logs/old.log logs/old.txt", "touch -d \"10 days ago\" logs/old.log logs/old.txt"],
  4, "4-Qavat • O'rta", "S04 Task 1 • touch -d",
  {
    command: "touch -d '10 days ago' logs/old.log logs/old.txt",
    flags: [
      {
        flag: "-d '10 days ago'",
        name: "Maxsus sana belgilash (Date string)",
        syntaxPos: "touch dan so'ng, fayllar nomidan oldin",
        purpose: "Faylning oxirgi o'zgartirilgan vaqtini (mtime) joriy vaqt o'rniga aynan ko'rsatilgan tarixga sozlaydi.",
        withoutRisk: "⚠️ AGAR -d BO'LMASA: Touch fayl sanasini bugungi hozirgi vaqtga o'zgartiradi; natijada eskirgan fayllarni topish imkonsiz bo'ladi!"
      }
    ]
  });

addQ(48, "Logs Papkasidagi Fayllarni Sanalari Bilan Ko'rish",
  "ls -l logs orqali old.log sanasi 10 kun oldingi ekanini tekshiring.",
  "<code>ls -l logs</code> buyrug'ini bering.",
  "ls -l logs",
  "ls -l logs buyrug'ini bering.",
  ["LS", "-L", "LOGS"],
  ["ls -l logs"],
  4, "4-Qavat • Oson", "S04 Task 1 • ls -l logs",
  { command: "ls -l logs", flags: [] });

addQ(49, "Find Bilan Faqat Oddiy Fayllarni Qidirish (-type f)",
  "logs katalogidagi barcha oddiy fayllarni toping.",
  "<code>find logs -type f</code> buyrug'ini bering.",
  "find logs -type f",
  "find logs -type f buyrug'ini bering.",
  ["FIND", "-TYPE", "F"],
  ["find logs -type f"],
  4, "4-Qavat • Oson", "S04 Task 1 • find -type f",
  {
    command: "find logs -type f",
    flags: [
      {
        flag: "-type f",
        name: "Oddiy fayllar filtri (File type)",
        syntaxPos: "Katalogdan so'ng",
        purpose: "Faqat oddiy fayllarni filtrlaydi (papkalarni chiqarib tashlaydi).",
        withoutRisk: "⚠️ AGAR -type f BO'LMASA: Kataloglarning o'zi ham ro'yxatga qo'shiladi va keyingi avtomatlashtirishda papkalar ham xavf ostida qoladi!"
      }
    ]
  });

addQ(50, "Faqat .log Kengaytmali Fayllarni Topish (-name '*.log')",
  "Nom namunasi bo'yicha qidiruv bering.",
  "<code>find logs -type f -name '*.log'</code> buyrug'ini bering.",
  "find logs -type f -name '*.log'",
  "find logs -type f -name '*.log' buyrug'ini bering.",
  ["FIND", "-NAME", "PATTERN"],
  ["find logs -type f -name '*.log'", "find logs -type f -name \"*.log\""],
  4, "4-Qavat • Oson", "S04 Task 1 • find -name",
  {
    command: "find logs -type f -name '*.log'",
    flags: [
      {
        flag: "-name '*.log'",
        name: "Fayl nomi namunasi (Name pattern)",
        syntaxPos: "-type f dan so'ng",
        purpose: "Faqat .log bilan tugovchi fayllarni saralaydi. Yulduzcha (*) qo'shtirnoq ichida bo'lishi shart.",
        withoutRisk: "⚠️ AGAR QO'SHTIRNOQ BO'LMASA: Shell '*.log' ni find ga yetmasdan oldin o'zi yoyib yuboradi (globbing) va xatolik beradi!"
      }
    ]
  });

// ----------------------------------------------------------------------------
// SECTORS 5 to 10 generated with comprehensive flag anatomies!
// ----------------------------------------------------------------------------

// Build remaining questions (51 to 150)
// SECTOR 4 cont.
addQ(51, "Mantiqiy YOKI (-o) Bilan .log va .txt Fayllarni Birlashtirish",
  "Darslik 5-sahifasi: -o bayrog'i orqali ikkala kengaytmani qidiring.",
  "<code>find logs -type f \\( -name '*.log' -o -name '*.txt' \\)</code> buyrug'ini bering.",
  "find logs -type f \\( -name '*.log' -o -name '*.txt' \\)",
  "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) buyrug'ini bering.",
  ["FIND", "-O", "LOGICAL_OR"],
  ["find logs -type f \\( -name '*.log' -o -name '*.txt' \\)", "find logs -type f ( -name '*.log' -o -name '*.txt' )"],
  4, "4-Qavat • O'rta", "S04 Task 1 • find -o",
  {
    command: "find logs -type f \\( -name '*.log' -o -name '*.txt' \\)",
    flags: [
      {
        flag: "-o",
        name: "Mantiqiy YOKI (Logical OR)",
        syntaxPos: "Ikki shart o'rtasida",
        purpose: "Birinchi yoki ikkinchi nom mos kelganda ham faylni tanlaydi.",
        withoutRisk: "⚠️ AGAR -o BO'LMASA: Sukut bo'yicha mantiqiy VA (AND) ishlaydi va bir vaqtning o'zida ham .log ham .txt bo'lgan imkonsiz fayl qidiriladi!"
      },
      {
        flag: "\\( va \\)",
        name: "Shartlarni guruhlash (Grouping parentheses)",
        syntaxPos: "Shartlar atrofida",
        purpose: "-o operatori faqat nomlarga tegishli bo'lishi uchun guruhlaydi.",
        withoutRisk: "⚠️ AGAR QAVSLAR BO'LMASA: Mantiqiy ustunlik buzilib, -type f faqat birinchi shartga ta'sir qiladi!"
      }
    ]
  });

addQ(52, "7 Kunda Katta Fayllarni Qidirish (-mmin +10080)",
  "Darslik 5-sahifasi: 7 kun = 10,080 daqiqa. +10080 orqali eskirgan fayllarni ko'ring.",
  "<code>find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080</code> buyrug'ini bering.",
  "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080",
  "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 buyrug'ini bering.",
  ["FIND", "-MMIN", "+10080"],
  ["find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080"],
  4, "4-Qavat • O'rta", "S04 Task 1 • find -mmin +10080",
  {
    command: "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080",
    flags: [
      {
        flag: "-mmin +10080",
        name: "O'zgartirilgan vaqt (Modified minutes > 10080)",
        syntaxPos: "Guruh qavslaridan so'ng",
        purpose: "+ belgisi aniq 10,080 daqiqadan ko'proq vaqt oldin o'zgartirilgan fayllarni tanlaydi.",
        withoutRisk: "⚠️ AGAR +10080 BO'LMASA: Agar minus (-10080) yozilsa, teskarisi — eng yangi 7 kundagi fayllar tanlanib fojiaga olib keladi!"
      }
    ]
  });

addQ(53, "Eskirgan Fayllarni Batafsil Ko'rish (-ls)",
  "Darslik 5-sahifasi: Topilgan eski fayllarning inode, ruxsat va hajmini -ls bilan chiqaring.",
  "<code>find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls</code> buyrug'ini bering.",
  "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls",
  "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls buyrug'ini bering.",
  ["FIND", "-LS", "DETAILS"],
  ["find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls"],
  4, "4-Qavat • O'rta", "S04 Task 1 • find -ls",
  {
    command: "find logs -type f \\( -name '*.log' -o -name '*.txt' \\) -mmin +10080 -ls",
    flags: [
      {
        flag: "-ls",
        name: "Batafsil ro'yxat (List format)",
        syntaxPos: "Buyruqning eng oxirida",
        purpose: "Fayl atributlarini to'liq formatda ko'rsatadi.",
        withoutRisk: "⚠️ AGAR -ls BO'LMASA: Faqat fayl manzillari quruq matn sifatida chiqadi."
      }
    ]
  });

addQ(54, "Yangi Fayl (recent.log) Tanlanmaganini Tasdiqlash",
  "recent.log fayli 7 kundan yangi bo'lgani uchun natijada chiqmasligi kerak.",
  "<code>find logs -type f -name 'recent.log' -mmin +10080</code> buyrug'ini bering.",
  "find logs -type f -name 'recent.log' -mmin +10080",
  "find logs -type f -name 'recent.log' -mmin +10080 buyrug'ini bering.",
  ["FIND", "RECENT_CHECK"],
  ["find logs -type f -name 'recent.log' -mmin +10080"],
  4, "4-Qavat • Oson", "S04 Task 1 • verify recent.log",
  { command: "find logs -type f -name 'recent.log' -mmin +10080", flags: [] });

addQ(55, "Yangi Fayllar Filtri (-mmin -10080)",
  "Minus (-) belgisi berilganda 7 kundan yangi bo'lgan fayllar chiqishini ko'ring.",
  "<code>find logs -type f -mmin -10080</code> buyrug'ini bering.",
  "find logs -type f -mmin -10080",
  "find logs -type f -mmin -10080 buyrug'ini bering.",
  ["FIND", "-MMIN_MINUS", "NEW_FILES"],
  ["find logs -type f -mmin -10080"],
  4, "4-Qavat • Oson", "S04 Task 1 • -mmin -10080",
  {
    command: "find logs -type f -mmin -10080",
    flags: [
      {
        flag: "-mmin -10080",
        name: "Yangi fayllar (Minutes < 10080)",
        syntaxPos: "Fayl turidan so'ng",
        purpose: "Oxirgi 7 kun ichida o'zgartirilgan yangi fayllarni tanlaydi.",
        withoutRisk: "⚠️ AGAR - BO'LMASA: Eski fayllar bilan adashadi."
      }
    ]
  });

addQ(56, "Logs Papkasidagi Jami Fayllar Soni",
  "find logs -type f | wc -l orqali jami nechta fayl borligini sanang.",
  "<code>find logs -type f | wc -l</code> buyrug'ini bering.",
  "find logs -type f | wc -l",
  "find logs -type f | wc -l buyrug'ini bering.",
  ["FIND", "COUNT"],
  ["find logs -type f | wc -l"],
  4, "4-Qavat • Oson", "S04 Task 1 • count files",
  { command: "find logs -type f | wc -l", flags: [] });

addQ(57, "Stat Bilan old.log Faylining Aniq Hajmini Ko'rish",
  "stat -c '%s' logs/old.log orqali baytlardagi hajmni ko'ring.",
  "<code>stat -c '%s' logs/old.log</code> buyrug'ini bering.",
  "stat -c '%s' logs/old.log",
  "stat -c '%s' logs/old.log buyrug'ini bering.",
  ["STAT", "-C", "SIZE"],
  ["stat -c '%s' logs/old.log", "stat -c \"%s\" logs/old.log"],
  4, "4-Qavat • Oson", "S04 Task 1 • stat size",
  {
    command: "stat -c '%s' logs/old.log",
    flags: [
      {
        flag: "-c '%s'",
        name: "Faqat hajm formati (Size format)",
        syntaxPos: "stat dan so'ng",
        purpose: "Faqatgina fayl hajmini butun son (bayt) ko'rinishida chiqaradi.",
        withoutRisk: "⚠️ AGAR -c '%s' BO'LMASA: stat butun boshli ko'p satrli blok chiqaradi va skript uni raqam deb o'qiy olmaydi!"
      }
    ]
  });

addQ(58, "Stat Bilan old.txt Hajmini Ko'rish",
  "old.txt faylining hajmini ko'rish uchun stat buyrug'idan foydalaning.",
  "<code>stat -c '%s' logs/old.txt</code> buyrug'ini bering.",
  "stat -c '%s' logs/old.txt",
  "stat -c '%s' logs/old.txt buyrug'ini bering.",
  ["STAT", "OLD_TXT"],
  ["stat -c '%s' logs/old.txt", "stat -c \"%s\" logs/old.txt"],
  4, "4-Qavat • Oson", "S04 Task 1 • stat old.txt",
  { command: "stat -c '%s' logs/old.txt", flags: [] });

addQ(59, "Old.log Faylini O'qib Ko'rish (cat)",
  "O'chirishdan oldin uning ichidagi ma'lumotni ko'ring.",
  "<code>cat logs/old.log</code> buyrug'ini bering.",
  "cat logs/old.log",
  "cat logs/old.log buyrug'ini bering.",
  ["CAT", "OLD_LOG"],
  ["cat logs/old.log"],
  4, "4-Qavat • Oson", "S04 Task 1 • cat old.log",
  { command: "cat logs/old.log", flags: [] });

addQ(60, "Sektor 4 Xulosasi: Ishchi Papkani Tasdiqlash",
  "Katalog manzilini tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  4, "4-Qavat • Oson", "S04 Task 1 • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 5 (61 - 75): Avtomatlashtirilgan Xavfsiz Tozalash (cleanup.sh)
// ----------------------------------------------------------------------------
addQ(61, "Cleanup.sh Skript Kodini O'qish (cat cleanup.sh)",
  "Darslik 5-sahifasi: Foydalanuvchidan tasdiq so'rab o'chiruvchi cleanup.sh ni o'qing.",
  "<code>cat cleanup.sh</code> buyrug'ini bering.",
  "cat cleanup.sh",
  "cat cleanup.sh buyrug'ini bering.",
  ["CAT", "CLEANUP_SH"],
  ["cat cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • cat cleanup.sh",
  { command: "cat cleanup.sh", flags: [] });

addQ(62, "Cleanup.sh Skriptiga Ijro Huquqini Berish",
  "chmod +x orqali skriptni bajariladigan qiling.",
  "<code>chmod +x cleanup.sh</code> buyrug'ini bering.",
  "chmod +x cleanup.sh",
  "chmod +x cleanup.sh buyrug'ini bering.",
  ["CHMOD", "+X", "CLEANUP"],
  ["chmod +x cleanup.sh", "chmod 755 cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • chmod cleanup.sh",
  {
    command: "chmod +x cleanup.sh",
    flags: [
      {
        flag: "+x",
        name: "Ijro huquqi",
        syntaxPos: "Fayldan oldin",
        purpose: "Skriptni to'g'ridan-to'g'ri chaqirishga ruxsat beradi.",
        withoutRisk: "⚠️ AGAR +x BO'LMASA: './cleanup.sh' deb chaqirib bo'lmaydi."
      }
    ]
  });

addQ(63, "Cleanup.sh Skriptini Ishga Tushirish",
  "Darslik 5-sahifasi: Skriptni ishga tushiring.",
  "<code>./cleanup.sh</code> buyrug'ini bering.",
  "./cleanup.sh",
  "./cleanup.sh buyrug'ini bering.",
  ["RUN", "CLEANUP"],
  ["./cleanup.sh", "bash cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • run cleanup.sh",
  { command: "./cleanup.sh", flags: [] });

addQ(64, "Bash Bilan Skriptni Ishga Tushirish (bash cleanup.sh)",
  "Ijro huquqi bo'lmaganda ham 'bash' orqali to'g'ridan-to'g'ri ishga tushirish mumkin.",
  "<code>bash cleanup.sh</code> buyrug'ini bering.",
  "bash cleanup.sh",
  "bash cleanup.sh buyrug'ini bering.",
  ["BASH", "RUN"],
  ["bash cleanup.sh", "./cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • bash cleanup.sh",
  { command: "bash cleanup.sh", flags: [] });

addQ(65, "Cleanup.sh dagi read -r -p Buyrug'ini Tahlil Qilish",
  "Darslik 5-sahifasi: Foydalanuvchiga savol beruvchi qatorni toping.",
  "<code>grep 'read -r -p' cleanup.sh</code> buyrug'ini bering.",
  "grep 'read -r -p' cleanup.sh",
  "grep 'read -r -p' cleanup.sh buyrug'ini bering.",
  ["GREP", "READ_PROMPT"],
  ["grep 'read -r -p' cleanup.sh", "grep \"read -r -p\" cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • grep read",
  {
    command: "grep 'read -r -p' cleanup.sh",
    flags: [
      {
        flag: "-r",
        name: "Xom o'qish (Raw input)",
        syntaxPos: "read dan so'ng",
        purpose: "Teskari slesh (\\) belgilarini buzmasdan saqlaydi.",
        withoutRisk: "⚠️ AGAR -r BO'LMASA: Kiritilgan maxsus belgilar yo'qoladi."
      },
      {
        flag: "-p",
        name: "Prompt taklif matni",
        syntaxPos: "-r dan so'ng",
        purpose: "Foydalanuvchiga nima kiritish kerakligini ko'rsatadi.",
        withoutRisk: "⚠️ AGAR -p BO'LMASA: Terminal bo'sh turib qoladi."
      }
    ]
  });

addQ(66, "Find Buyrug'ida -delete Parametrini Tekshirish",
  "Skriptda fayllarni to'g'ridan-to'g'ri o'chiruvchi qatorni ko'ring.",
  "<code>grep -delete cleanup.sh</code> buyrug'ini bering.",
  "grep -delete cleanup.sh",
  "grep -delete cleanup.sh buyrug'ini bering.",
  ["GREP", "-DELETE"],
  ["grep -delete cleanup.sh", "grep -- \"-delete\" cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • grep -delete",
  {
    command: "grep -delete cleanup.sh",
    flags: [
      {
        flag: "-delete",
        name: "Atomik o'chirish (Atomic deletion)",
        syntaxPos: "Find buyrug'ining oxirida",
        purpose: "Topilgan mos fayllarni xavfsiz o'chiradi.",
        withoutRisk: "⚠️ AGAR -delete BO'LMASA: Fayllar o'chmaydi va disk to'lib qoladi."
      }
    ]
  });

addQ(67, "Cleanup.sh Sintaksisini Tekshirish (bash -n)",
  "Skriptda sintaktik xato yo'qligini 'bash -n' bilan tekshiring.",
  "<code>bash -n cleanup.sh</code> buyrug'ini bering.",
  "bash -n cleanup.sh",
  "bash -n cleanup.sh buyrug'ini bering.",
  ["BASH", "-N", "SYNTAX"],
  ["bash -n cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • bash -n",
  {
    command: "bash -n cleanup.sh",
    flags: [
      {
        flag: "-n",
        name: "Sintaksis tekshirish (No execution)",
        syntaxPos: "bash dan so'ng",
        purpose: "Skriptdagi buyruqlarni bajarmasdan faqat kod to'g'riligini tekshiradi.",
        withoutRisk: "⚠️ AGAR -n BO'LMASA: Xatoli skript bajarilib tizim fayllarini buzishi mumkin!"
      }
    ]
  });

addQ(68, "Logs Papkasidagi Qolgan Fayllarni Ko'rish",
  "recent.log fayli saqlanib qolganini tekshiring.",
  "<code>ls -l logs</code> buyrug'ini bering.",
  "ls -l logs",
  "ls -l logs buyrug'ini bering.",
  ["LS", "LOGS_VERIFY"],
  ["ls -l logs"],
  5, "5-Qavat • Oson", "S04 Task 1 • ls logs verify",
  { command: "ls -l logs", flags: [] });

addQ(69, "Recent.log Faylining Mavjudligini Tekshirish (-f)",
  "Fayl mavjudligini test buyrug'i bilan tekshiring.",
  "<code>test -f logs/recent.log && echo 'EXISTS'</code> buyrug'ini bering.",
  "test -f logs/recent.log && echo 'EXISTS'",
  "test -f logs/recent.log && echo 'EXISTS' buyrug'ini bering.",
  ["TEST", "-F", "EXISTS"],
  ["test -f logs/recent.log && echo 'EXISTS'", "test -f logs/recent.log && echo EXISTS"],
  5, "5-Qavat • Oson", "S04 Task 1 • test -f",
  {
    command: "test -f logs/recent.log && echo 'EXISTS'",
    flags: [
      {
        flag: "-f",
        name: "Oddiy fayl mavjudligi (File exists)",
        syntaxPos: "test dan so'ng",
        purpose: "Yo'l oddiy faylga tegishli ekanini tekshiradi.",
        withoutRisk: "⚠️ AGAR -f BO'LMASA: Fayl yo'qligi tekshirilmasdan xato yuz beradi."
      }
    ]
  });

addQ(70, "Eski Fayllar O'chirilganini Tasdiqlash",
  "old.log fayli endi yo'qligini tekshiring.",
  "<code>ls logs/old.log 2>/dev/null || echo 'DELETED'</code> buyrug'ini bering.",
  "ls logs/old.log 2>/dev/null || echo 'DELETED'",
  "ls logs/old.log 2>/dev/null || echo 'DELETED' buyrug'ini bering.",
  ["LS", "DELETED_CHECK"],
  ["ls logs/old.log 2>/dev/null || echo 'DELETED'", "ls logs/old.log 2>/dev/null || echo DELETED"],
  5, "5-Qavat • O'rta", "S04 Task 1 • verify deleted",
  {
    command: "ls logs/old.log 2>/dev/null || echo 'DELETED'",
    flags: [
      {
        flag: "2>/dev/null",
        name: "Xatolik oqimini yashirish (Stderr redirect)",
        syntaxPos: "Buyruq oxirida",
        purpose: "Xatolik xabarlarini qora tuynuk (/dev/null) ga yo'naltiradi.",
        withoutRisk: "⚠️ AGAR 2>/dev/null BO'LMASA: Ekranga keraksiz 'No such file' xatosi chiqadi."
      }
    ]
  });

addQ(71, "Chiqish Statusini Tekshirish",
  "Muvaffaqiyatni tasdiqlang.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $?' buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  5, "5-Qavat • Oson", "S04 Task 1 • status",
  { command: "echo $?", flags: [] });

addQ(72, "Cleanup.sh Hajmini Baytlarda Ko'rish",
  "Skript hajmini aniqlash uchun stat buyrug'idan foydalaning.",
  "<code>stat -c '%s' cleanup.sh</code> buyrug'ini bering.",
  "stat -c '%s' cleanup.sh",
  "stat -c '%s' cleanup.sh buyrug'ini bering.",
  ["STAT", "SIZE"],
  ["stat -c '%s' cleanup.sh", "stat -c \"%s\" cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • stat size",
  { command: "stat -c '%s' cleanup.sh", flags: [] });

addQ(73, "Barcha Skriptlarni Ro'yxatlash",
  "Katalogdagi .sh skriptlarini ko'ring.",
  "<code>ls -l *.sh</code> buyrug'ini bering.",
  "ls -l *.sh",
  "ls -l *.sh buyrug'ini bering.",
  ["LS", "*.SH"],
  ["ls -l *.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • ls sh",
  { command: "ls -l *.sh", flags: [] });

addQ(74, "Cleanup.sh Birinchi 2 Qatorini O'qish",
  "Shebang qatorini ko'ring.",
  "<code>head -n 2 cleanup.sh</code> buyrug'ini bering.",
  "head -n 2 cleanup.sh",
  "head -n 2 cleanup.sh buyrug'ini bering.",
  ["HEAD", "SHEBANG"],
  ["head -n 2 cleanup.sh", "head -2 cleanup.sh"],
  5, "5-Qavat • Oson", "S04 Task 1 • head shebang",
  { command: "head -n 2 cleanup.sh", flags: [] });

addQ(75, "Sektor 5 Xulosasi: Ishchi Katalogni Tekshirish",
  "Manzilni tasdiqlang.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  5, "5-Qavat • Oson", "S04 Task 1 • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 6 (76 - 90): Bardoshli URL Yuklovchi (Task 2 • download.sh)
// ----------------------------------------------------------------------------
addQ(76, "Urls.txt Fayli Tarkibini Ko'rish",
  "Darslik 6-sahifasi: Yuklanishi kerak bo'lgan URL lar ro'yxatini ko'ring.",
  "<code>cat urls.txt</code> buyrug'ini bering.",
  "cat urls.txt",
  "cat urls.txt buyrug'ini bering.",
  ["CAT", "URLS_TXT"],
  ["cat urls.txt"],
  6, "6-Qavat • Oson", "S04 Task 2 • cat urls.txt",
  { command: "cat urls.txt", flags: [] });

addQ(77, "Download.sh Skript Kodini O'rganish",
  "Darslik 6-sahifasi: Tarmoq xatolariga bardoshli download.sh skriptini o'qing.",
  "<code>cat download.sh</code> buyrug'ini bering.",
  "cat download.sh",
  "cat download.sh buyrug'ini bering.",
  ["CAT", "DOWNLOAD_SH"],
  ["cat download.sh"],
  6, "6-Qavat • Oson", "S04 Task 2 • cat download.sh",
  { command: "cat download.sh", flags: [] });

addQ(78, "Download.sh Skriptiga Ijro Huquqini Berish",
  "chmod +x orqali skriptni bajariladigan qiling.",
  "<code>chmod +x download.sh</code> buyrug'ini bering.",
  "chmod +x download.sh",
  "chmod +x download.sh buyrug'ini bering.",
  ["CHMOD", "+X", "DOWNLOAD"],
  ["chmod +x download.sh", "chmod 755 download.sh"],
  6, "6-Qavat • Oson", "S04 Task 2 • chmod download.sh",
  { command: "chmod +x download.sh", flags: [] });

addQ(79, "Download.sh Skriptini urls.txt Bilan Ishga Tushirish",
  "Darslik 7-sahifasi: URL ro'yxatini uzatib yuklash jarayonini boshlang.",
  "<code>./download.sh urls.txt</code> buyrug'ini bering.",
  "./download.sh urls.txt",
  "./download.sh urls.txt buyrug'ini bering.",
  ["RUN", "DOWNLOAD", "URLS"],
  ["./download.sh urls.txt", "bash download.sh urls.txt"],
  6, "6-Qavat • Oson", "S04 Task 2 • run download.sh",
  { command: "./download.sh urls.txt", flags: [] });

addQ(80, "Curl Buyrug'idagi -f (--fail) Bayrog'ini Tekshirish",
  "Darslik 7-sahifasi: Server 404 yoki 500 berganda xato kod qaytaruvchi bayroqni toping.",
  "<code>grep -- '-fLsS' download.sh</code> buyrug'ini bering.",
  "grep -- '-fLsS' download.sh",
  "grep -- '-fLsS' download.sh buyrug'ini bering.",
  ["GREP", "CURL_FLAGS"],
  ["grep -- '-fLsS' download.sh", "grep -fLsS download.sh", "grep fLsS download.sh"],
  6, "6-Qavat • O'rta", "S04 Task 2 • grep curl flags",
  {
    command: "grep -- '-fLsS' download.sh",
    flags: [
      {
        flag: "-f",
        name: "Server xatolarida xato kodi qaytarish (Fail silently)",
        syntaxPos: "curl dan so'ng",
        purpose: "HTTP 404/500 xatolarida faylga xato sahifasini yozmasdan exit kodi != 0 beradi.",
        withoutRisk: "⚠️ AGAR -f BO'LMASA: 404 xato sahifasi yuklanib, skript uni muvaffaqiyatli fayl deb o'ylaydi!"
      },
      {
        flag: "-L",
        name: "Qayta yo'naltirishga ergashish (Location)",
        syntaxPos: "-f yonida",
        purpose: "HTTP 301/302 qayta yo'naltirish bo'lsa yangi manzilga o'tadi.",
        withoutRisk: "⚠️ AGAR -L BO'LMASA: Haqiqiy fayl yuklanmay, 0 baytli bo'sh redirect qoladi!"
      },
      {
        flag: "-s",
        name: "Jim rejim (Silent)",
        syntaxPos: "-L yonida",
        purpose: "Yuklanish foizlarini yashirib loglarni toza saqlaydi.",
        withoutRisk: "⚠️ AGAR -s BO'LMASA: Terminal har soniya keraksiz foizlar bilan to'ladi."
      },
      {
        flag: "-S",
        name: "Xatolikni ko'rsatish (Show error)",
        syntaxPos: "-s yonida",
        purpose: "-s yoqilgan bo'lsa ham xatolik yuz bersa sababini ko'rsatadi.",
        withoutRisk: "⚠️ AGAR -S BO'LMASA: Yuklash barbod bo'lsa sababini mutlaqo bilib bo'lmaydi!"
      }
    ]
  });

addQ(81, "Curl --max-time 30 Parametrini Tekshirish",
  "Ulanish qotib qolmasligi uchun 30 soniyalik kutish chegarasini tekshiring.",
  "<code>grep -- '--max-time' download.sh</code> buyrug'ini bering.",
  "grep -- '--max-time' download.sh",
  "grep -- '--max-time' download.sh buyrug'ini bering.",
  ["GREP", "MAX_TIME"],
  ["grep -- '--max-time' download.sh", "grep max-time download.sh"],
  6, "6-Qavat • Oson", "S04 Task 2 • grep max-time",
  {
    command: "grep -- '--max-time' download.sh",
    flags: [
      {
        flag: "--max-time 30",
        name: "Maksimal vaqt chegarasi (Timeout)",
        syntaxPos: "curl parametrlarida",
        purpose: "30 soniyada javob kelmasa ulanishni to'xtatadi.",
        withoutRisk: "⚠️ AGAR --max-time BO'LMASA: Server javob bermasa butun skript abadiy qotib qoladi!"
      }
    ]
  });

addQ(82, "Curl Bayroqlar Tugash Belgisi (--) Tushunchasi",
  "URL '-' bilan boshlansa xato bo'lmasligi uchun '--' ishlatilganini ko'ring.",
  "<code>grep -- '-- \'$url\'' download.sh</code> buyrug'ini bering.",
  "grep -- '-- \"$url\"' download.sh",
  "grep -- '-- '$url'' download.sh buyrug'ini bering.",
  ["GREP", "END_OF_OPTIONS"],
  ["grep -- '-- \"$url\"' download.sh", "grep \"--\" download.sh"],
  6, "6-Qavat • O'rta", "S04 Task 2 • end of options",
  {
    command: "grep -- '-- \"$url\"' download.sh",
    flags: [
      {
        flag: "--",
        name: "Bayroqlar tugash belgisi (End of options marker)",
        syntaxPos: "URL manzilidan bevosita oldin",
        purpose: "Keyingi keluvchi qiymatni minus bilan boshlansa ham parametr emas, argument deb qabul qildiradi.",
        withoutRisk: "⚠️ AGAR -- BO'LMASA: URL '-bad' bo'lsa, curl uni noma'lum bayroq deb to'xtab qoladi!"
      }
    ]
  });

addQ(83, "Yuklangan Fayllar Papkasini Ko'rish (downloads/)",
  "downloads papkasi tarkibini ko'ring.",
  "<code>ls -l downloads</code> buyrug'ini bering.",
  "ls -l downloads",
  "ls -l downloads buyrug'ini bering.",
  ["LS", "DOWNLOADS"],
  ["ls -l downloads"],
  6, "6-Qavat • Oson", "S04 Task 2 • ls downloads",
  { command: "ls -l downloads", flags: [] });

addQ(84, "Yuklangan Fayl Hajmini Stat Bilan Ko'rish",
  "stat -c '%s' downloads/file_1 orqali fayl hajmini ko'ring.",
  "<code>stat -c '%s' downloads/file_1</code> buyrug'ini bering.",
  "stat -c '%s' downloads/file_1",
  "stat -c '%s' downloads/file_1 buyrug'ini bering.",
  ["STAT", "DOWNLOADED_SIZE"],
  ["stat -c '%s' downloads/file_1", "stat -c \"%s\" downloads/file_1"],
  6, "6-Qavat • Oson", "S04 Task 2 • stat download",
  { command: "stat -c '%s' downloads/file_1", flags: [] });

addQ(85, "Mavjud Bo'lmagan Fayl Bilan Xato Holatini Sinash",
  "Darslik 7-sahifasi: Yo'q fayl berilganda 'missing or empty' xatosi chiqishi kerak.",
  "<code>./download.sh missing.txt</code> buyrug'ini bering.",
  "./download.sh missing.txt",
  "./download.sh missing.txt buyrug'ini bering.",
  ["RUN", "MISSING_TEST"],
  ["./download.sh missing.txt", "bash download.sh missing.txt"],
  6, "6-Qavat • Oson", "S04 Task 2 • test missing",
  { command: "./download.sh missing.txt", flags: [] });

addQ(86, "Xatolik Qaytish Statusini Tekshirish (Exit 1)",
  "Oxirgi xatolik statusini ko'ring.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $?' buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  6, "6-Qavat • Oson", "S04 Task 2 • status",
  { command: "echo $?", flags: [] });

addQ(87, "Download.sh Sintaksisini Tekshirish",
  "bash -n orqali sintaksis tozaligini tasdiqlang.",
  "<code>bash -n download.sh</code> buyrug'ini bering.",
  "bash -n download.sh",
  "bash -n download.sh buyrug'ini bering.",
  ["BASH", "-N", "SYNTAX"],
  ["bash -n download.sh"],
  6, "6-Qavat • Oson", "S04 Task 2 • bash -n",
  { command: "bash -n download.sh", flags: [] });

addQ(88, "Yuklangan Fayl Boshini Ko'rish (head)",
  "HTML sahifasi boshlanishini ko'ring.",
  "<code>head -n 5 downloads/file_1</code> buyrug'ini bering.",
  "head -n 5 downloads/file_1",
  "head -n 5 downloads/file_1 buyrug'ini bering.",
  ["HEAD", "FILE_1"],
  ["head -n 5 downloads/file_1", "head -5 downloads/file_1"],
  6, "6-Qavat • Oson", "S04 Task 2 • head file_1",
  { command: "head -n 5 downloads/file_1", flags: [] });

addQ(89, "Urls.txt Faylidagi Qatorlar Soni",
  "Bo'sh qator o'tkazib yuborilganini tasdiqlang.",
  "<code>wc -l urls.txt</code> buyrug'ini bering.",
  "wc -l urls.txt",
  "wc -l urls.txt buyrug'ini bering.",
  ["WC", "-L", "URLS"],
  ["wc -l urls.txt"],
  6, "6-Qavat • Oson", "S04 Task 2 • wc urls",
  { command: "wc -l urls.txt", flags: [] });

addQ(90, "Sektor 6 Xulosasi: Ishchi Katalogni Tekshirish",
  "Manzilni tasdiqlang.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  6, "6-Qavat • Oson", "S04 Task 2 • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 7 (91 - 105): Loglarni Siqish & NUL Bayt Quvuri (Task 3 • rotate.sh P1)
// ----------------------------------------------------------------------------
addQ(91, "4 Kunlik va 8 Kunlik Log Fayllar Yaratish",
  "Darslik 7-sahifasi: rotate.sh uchun namunaviy loglar tayyorlang.",
  "<code>touch logs/four_days.log logs/eight_days.log</code> buyrug'ini bering.",
  "touch logs/four_days.log logs/eight_days.log",
  "touch logs/four_days.log logs/eight_days.log buyrug'ini bering.",
  ["TOUCH", "SAMPLE_LOGS"],
  ["touch logs/four_days.log logs/eight_days.log"],
  7, "7-Qavat • Oson", "S04 Task 3 • touch rotate logs",
  { command: "touch logs/four_days.log logs/eight_days.log", flags: [] });

addQ(92, "4 Kun Oldingi Vaqtni O'rnatish (touch -d)",
  "four_days.log fayliga 4 kunlik sanani bering.",
  "<code>touch -d '4 days ago' logs/four_days.log</code> buyrug'ini bering.",
  "touch -d '4 days ago' logs/four_days.log",
  "touch -d '4 days ago' logs/four_days.log buyrug'ini bering.",
  ["TOUCH", "-D", "4_DAYS"],
  ["touch -d '4 days ago' logs/four_days.log", "touch -d \"4 days ago\" logs/four_days.log"],
  7, "7-Qavat • Oson", "S04 Task 3 • touch -d 4 days",
  { command: "touch -d '4 days ago' logs/four_days.log", flags: [] });

addQ(93, "8 Kun Oldingi Vaqtni O'rnatish (touch -d)",
  "eight_days.log fayliga 8 kunlik sanani bering.",
  "<code>touch -d '8 days ago' logs/eight_days.log</code> buyrug'ini bering.",
  "touch -d '8 days ago' logs/eight_days.log",
  "touch -d '8 days ago' logs/eight_days.log buyrug'ini bering.",
  ["TOUCH", "-D", "8_DAYS"],
  ["touch -d '8 days ago' logs/eight_days.log", "touch -d \"8 days ago\" logs/eight_days.log"],
  7, "7-Qavat • Oson", "S04 Task 3 • touch -d 8 days",
  { command: "touch -d '8 days ago' logs/eight_days.log", flags: [] });

addQ(94, "Rotate.sh Skript Kodini Ko'rish",
  "Darslik 8-sahifasi: NUL baytli qidiruv va gzip siqish skriptini o'qing.",
  "<code>cat rotate.sh</code> buyrug'ini bering.",
  "cat rotate.sh",
  "cat rotate.sh buyrug'ini bering.",
  ["CAT", "ROTATE_SH"],
  ["cat rotate.sh"],
  7, "7-Qavat • Oson", "S04 Task 3 • cat rotate.sh",
  { command: "cat rotate.sh", flags: [] });

addQ(95, "Find -maxdepth 1 Bayrog'ini Tahlil Qilish",
  "Darslik 8-sahifasi: Faqat joriy katalog bilan cheklovchi -maxdepth 1 ni ko'ring.",
  "<code>grep -- '-maxdepth 1' rotate.sh</code> buyrug'ini bering.",
  "grep -- '-maxdepth 1' rotate.sh",
  "grep -- '-maxdepth 1' rotate.sh buyrug'ini bering.",
  ["GREP", "MAXDEPTH"],
  ["grep -- '-maxdepth 1' rotate.sh", "grep maxdepth rotate.sh"],
  7, "7-Qavat • O'rta", "S04 Task 3 • grep maxdepth",
  {
    command: "grep -- '-maxdepth 1' rotate.sh",
    flags: [
      {
        flag: "-maxdepth 1",
        name: "Maksimal qidiruv chuqurligi",
        syntaxPos: "Katalog yo'lidan so'ng",
        purpose: "Qidiruvni 1-darajali joriy papka bilan cheklaydi, ichki papkalar ichiga kirmaydi.",
        withoutRisk: "⚠️ AGAR -maxdepth 1 BO'LMASA: Barcha ichki papkalardagi fayllar ham siqilib/ko'chib ketadi!"
      }
    ]
  });

addQ(96, "Find -print0 Bayrog'ini Tekshirish",
  "Fayllarni NUL (\\0) bayt bilan ajratib chiqaruvchi bayroqni toping.",
  "<code>grep -- '-print0' rotate.sh</code> buyrug'ini bering.",
  "grep -- '-print0' rotate.sh",
  "grep -- '-print0' rotate.sh buyrug'ini bering.",
  ["GREP", "PRINT0"],
  ["grep -- '-print0' rotate.sh", "grep print0 rotate.sh"],
  7, "7-Qavat • O'rta", "S04 Task 3 • grep print0",
  {
    command: "grep -- '-print0' rotate.sh",
    flags: [
      {
        flag: "-print0",
        name: "NUL bayt ajratgich (Null-delimiter)",
        syntaxPos: "find buyrug'i oxirida",
        purpose: "Fayl nomlarini probellar va yangi qatorlardan himoyalagan holda xavfsiz uzatadi.",
        withoutRisk: "⚠️ AGAR -print0 BO'LMASA: Nomi probelli fayllar ikkiga bo'linib buziladi!"
      }
    ]
  });

addQ(97, "Gzip -- Bayrog'i Xavfsizligini Tekshirish",
  "Minus bilan boshlangan fayllar xato bermasligi uchun 'gzip --' ishlatilganini ko'ring.",
  "<code>grep 'gzip --' rotate.sh</code> buyrug'ini bering.",
  "grep 'gzip --' rotate.sh",
  "grep 'gzip --' rotate.sh buyrug'ini bering.",
  ["GREP", "GZIP_SAFE"],
  ["grep 'gzip --' rotate.sh", "grep gzip rotate.sh"],
  7, "7-Qavat • Oson", "S04 Task 3 • grep gzip",
  {
    command: "grep 'gzip --' rotate.sh",
    flags: [
      {
        flag: "gzip --",
        name: "Bayroqlar tugash belgisi",
        syntaxPos: "Fayldan oldin",
        purpose: "Minusli fayl nomlarini xavfsiz siqadi.",
        withoutRisk: "⚠️ AGAR -- BO'LMASA: Fayl '-fayl.log' bo'lsa gzip uni buyruq deb tushunib xato beradi!"
      }
    ]
  });

addQ(98, "Rotate.sh Skriptiga Ijro Huquqini Berish",
  "chmod +x orqali skriptni bajariladigan qiling.",
  "<code>chmod +x rotate.sh</code> buyrug'ini bering.",
  "chmod +x rotate.sh",
  "chmod +x rotate.sh buyrug'ini bering.",
  ["CHMOD", "+X", "ROTATE"],
  ["chmod +x rotate.sh", "chmod 755 rotate.sh"],
  7, "7-Qavat • Oson", "S04 Task 3 • chmod rotate.sh",
  { command: "chmod +x rotate.sh", flags: [] });

addQ(99, "Rotate.sh Skriptini Ishga Tushirish (logs backup)",
  "Darslik 8-sahifasi: Loglarni siqish va ko'chirishni boshlang.",
  "<code>./rotate.sh logs backup</code> buyrug'ini bering.",
  "./rotate.sh logs backup",
  "./rotate.sh logs backup buyrug'ini bering.",
  ["RUN", "ROTATE_LOGS"],
  ["./rotate.sh logs backup", "bash rotate.sh logs backup"],
  7, "7-Qavat • Oson", "S04 Task 3 • run rotate.sh",
  { command: "./rotate.sh logs backup", flags: [] });

addQ(100, "Siqilgan Loglarni Ko'rish (.gz)",
  "logs papkasidagi .gz fayllarni ko'ring.",
  "<code>ls -l logs/*.gz</code> buyrug'ini bering.",
  "ls -l logs/*.gz",
  "ls -l logs/*.gz buyrug'ini bering.",
  ["LS", "GZ_FILES"],
  ["ls -l logs/*.gz"],
  7, "7-Qavat • Oson", "S04 Task 3 • ls gz",
  { command: "ls -l logs/*.gz", flags: [] });

addQ(101, "Backup Papkasiga Ko'chgan Arxivni Ko'rish",
  "8 kunlik log backup papkasiga o'tganini tekshiring.",
  "<code>ls -l backup</code> buyrug'ini bering.",
  "ls -l backup",
  "ls -l backup buyrug'ini bering.",
  ["LS", "BACKUP_DIR"],
  ["ls -l backup"],
  7, "7-Qavat • Oson", "S04 Task 3 • ls backup",
  { command: "ls -l backup", flags: [] });

addQ(102, "Rotate.sh Sintaksisini Tekshirish",
  "bash -n orqali sintaksisni tasdiqlang.",
  "<code>bash -n rotate.sh</code> buyrug'ini bering.",
  "bash -n rotate.sh",
  "bash -n rotate.sh buyrug'ini bering.",
  ["BASH", "-N", "ROTATE"],
  ["bash -n rotate.sh"],
  7, "7-Qavat • Oson", "S04 Task 3 • bash -n rotate",
  { command: "bash -n rotate.sh", flags: [] });

addQ(103, "Chiqish Statusini Tekshirish",
  "Muvaffaqiyatni tasdiqlang.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $?' buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  7, "7-Qavat • Oson", "S04 Task 3 • status",
  { command: "echo $?", flags: [] });

addQ(104, "Rotate.sh Skript Hajmini Ko'rish",
  "Rotate.sh skriptining hajmini baytlarda ko'ring.",
  "<code>stat -c '%s' rotate.sh</code> buyrug'ini bering.",
  "stat -c '%s' rotate.sh",
  "stat -c '%s' rotate.sh buyrug'ini bering.",
  ["STAT", "ROTATE_SIZE"],
  ["stat -c '%s' rotate.sh", "stat -c \"%s\" rotate.sh"],
  7, "7-Qavat • Oson", "S04 Task 3 • stat rotate",
  { command: "stat -c '%s' rotate.sh", flags: [] });

addQ(105, "Sektor 7 Xulosasi: Ishchi Papkani Tasdiqlash",
  "Manzilni tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  7, "7-Qavat • Oson", "S04 Task 3 • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 8 (106 - 120): Arxivlash, Zaxiralash & Hisobot (Task 3 • rotate.sh P2)
// ----------------------------------------------------------------------------
addQ(106, "Rotation_report.txt Hisobotini O'qish",
  "Darslik 8-sahifasi: Avtomatik yaratilgan hisobot faylini o'qing.",
  "<code>cat logs/rotation_report.txt</code> buyrug'ini bering.",
  "cat logs/rotation_report.txt",
  "cat logs/rotation_report.txt buyrug'ini bering.",
  ["CAT", "ROTATION_REPORT"],
  ["cat logs/rotation_report.txt"],
  8, "8-Qavat • Oson", "S04 Task 3 • cat report",
  { command: "cat logs/rotation_report.txt", flags: [] });

addQ(107, "Process Substitution (< <(...)) Konstruktsiyasini Tahlil Qilish",
  "Darslik 9-sahifasi: Subshell o'zgaruvchilari yo'qolmasligi uchun ishlatilgan < <(find ...) ni ko'ring.",
  "<code>grep '< <(' rotate.sh</code> buyrug'ini bering.",
  "grep '< <(' rotate.sh",
  "grep '< <(' rotate.sh buyrug'ini bering.",
  ["GREP", "PROCESS_SUBSTITUTION"],
  ["grep '< <(' rotate.sh", "grep \"< <(\" rotate.sh"],
  8, "8-Qavat • O'rta", "S04 Task 3 • process substitution",
  {
    command: "grep '< <(' rotate.sh",
    flags: [
      {
        flag: "< <(cmd)",
        name: "Jarayon almashtirish (Process substitution)",
        syntaxPos: "while tsikli oxirida",
        purpose: "Tsikl asosiy shell sessiyasida bajariladi va tsikl ichidagi massiv (array) o'zgaruvchilari yo'qolib ketmaydi.",
        withoutRisk: "⚠️ AGAR ODDIY QUWUR (cmd | while) ISHLATILSA: Tsikl subshell da bajarilib, barcha hisoblangan massivlar tsikl tugashi bilan 0 ga aylanadi!"
      }
    ]
  });

addQ(108, "Read -d '' NUL Ajratgichini Tekshirish",
  "NUL bayt bilan o'qish qatorini ko'ring.",
  "<code>grep \'read -r -d ''\' rotate.sh</code> buyrug'ini bering.",
  "grep \"read -r -d ''\" rotate.sh",
  "grep 'read -r -d ''' rotate.sh buyrug'ini bering.",
  ["GREP", "READ_NUL"],
  ["grep \"read -r -d ''\" rotate.sh", "grep 'read -r -d' rotate.sh"],
  8, "8-Qavat • O'rta", "S04 Task 3 • read -d NUL",
  { command: "grep \"read -r -d ''\" rotate.sh", flags: [] });

addQ(109, "Mv Buyrug'idagi Xavfsizlik Belgisini Tekshirish (mv --)",
  "Fayllarni zaxira papkaga ko'chirish qatorini ko'ring.",
  "<code>grep 'mv --' rotate.sh</code> buyrug'ini bering.",
  "grep 'mv --' rotate.sh",
  "grep 'mv --' rotate.sh buyrug'ini bering.",
  ["GREP", "MV_SAFE"],
  ["grep 'mv --' rotate.sh", "grep mv rotate.sh"],
  8, "8-Qavat • Oson", "S04 Task 3 • mv safe",
  { command: "grep 'mv --' rotate.sh", flags: [] });

addQ(110, "Basename Buyrug'i Vazifasini Tekshirish",
  "To'liq yo'ldan faqat fayl nomini ajratuvchi qatorni toping.",
  "<code>grep basename rotate.sh</code> buyrug'ini bering.",
  "grep basename rotate.sh",
  "grep basename rotate.sh buyrug'ini bering.",
  ["GREP", "BASENAME"],
  ["grep basename rotate.sh"],
  8, "8-Qavat • Oson", "S04 Task 3 • basename",
  { command: "grep basename rotate.sh", flags: [] });

addQ(111, "Logs Papkasini Qayta Tekshirish",
  "Logs papkasi tarkibini yana bir bor ko'ring.",
  "<code>ls -l logs</code> buyrug'ini bering.",
  "ls -l logs",
  "ls -l logs buyrug'ini bering.",
  ["LS", "LOGS"],
  ["ls -l logs"],
  8, "8-Qavat • Oson", "S04 Task 3 • ls logs",
  { command: "ls -l logs", flags: [] });

addQ(112, "Backup Papkasini Qayta Tekshirish",
  "Backup papkasidagi arxivlangan fayllarni ko'ring.",
  "<code>ls -l backup</code> buyrug'ini bering.",
  "ls -l backup",
  "ls -l backup buyrug'ini bering.",
  ["LS", "BACKUP"],
  ["ls -l backup"],
  8, "8-Qavat • Oson", "S04 Task 3 • ls backup",
  { command: "ls -l backup", flags: [] });

addQ(113, "Rotation_report.txt Fayl Hajmini Ko'rish",
  "Hisobot faylining hajmini ko'rish uchun stat buyrug'idan foydalaning.",
  "<code>stat -c '%s' logs/rotation_report.txt</code> buyrug'ini bering.",
  "stat -c '%s' logs/rotation_report.txt",
  "stat -c '%s' logs/rotation_report.txt buyrug'ini bering.",
  ["STAT", "REPORT_SIZE"],
  ["stat -c '%s' logs/rotation_report.txt", "stat -c \"%s\" logs/rotation_report.txt"],
  8, "8-Qavat • Oson", "S04 Task 3 • stat report",
  { command: "stat -c '%s' logs/rotation_report.txt", flags: [] });

addQ(114, "Argumentsiz Xato Holatini Sinash (./rotate.sh)",
  "Darslik 8-sahifasi: Parametrsiz chaqirilganda Usage xatosi chiqishi kerak.",
  "<code>./rotate.sh</code> buyrug'ini argumentlarsiz bering.",
  "./rotate.sh",
  "./rotate.sh buyrug'ini bering.",
  ["RUN", "USAGE_ERROR"],
  ["./rotate.sh", "bash rotate.sh"],
  8, "8-Qavat • Oson", "S04 Task 3 • rotate usage",
  { command: "./rotate.sh", flags: [] });

addQ(115, "Xatolik Qaytish Statusini Tekshirish",
  "echo $? orqali 1 kodini tasdiqlang.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $?' buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  8, "8-Qavat • Oson", "S04 Task 3 • status",
  { command: "echo $?", flags: [] });

addQ(116, "Takroriy Zaxiralashni Sinash",
  "Hech qanday yangi eskirgan fayl yo'qligini tekshirish uchun skriptni qayta ishga tushiring.",
  "<code>./rotate.sh logs backup</code> buyrug'ini bering.",
  "./rotate.sh logs backup",
  "./rotate.sh logs backup buyrug'ini bering.",
  ["RUN", "SECOND_RUN"],
  ["./rotate.sh logs backup", "bash rotate.sh logs backup"],
  8, "8-Qavat • Oson", "S04 Task 3 • second run",
  { command: "./rotate.sh logs backup", flags: [] });

addQ(117, "Yangi Hisobotni O'qish",
  "Takroriy ishga tushirishdan keyingi hisobotni ko'ring.",
  "<code>cat logs/rotation_report.txt</code> buyrug'ini bering.",
  "cat logs/rotation_report.txt",
  "cat logs/rotation_report.txt buyrug'ini bering.",
  ["CAT", "REPORT"],
  ["cat logs/rotation_report.txt"],
  8, "8-Qavat • Oson", "S04 Task 3 • cat report 2",
  { command: "cat logs/rotation_report.txt", flags: [] });

addQ(118, "Gzip Versiyasini Tekshirish",
  "Tizimdagi gzip arxivatorining versiyasini tekshiring.",
  "<code>gzip --version</code> buyrug'ini bering.",
  "gzip --version",
  "gzip --version buyrug'ini bering.",
  ["GZIP", "--VERSION"],
  ["gzip --version"],
  8, "8-Qavat • Oson", "S04 Task 3 • gzip version",
  { command: "gzip --version", flags: [] });

addQ(119, "Qaytish Statusini Tasdiqlash",
  "Gzip buyrug'ining chiqish holatini tekshiring.",
  "<code>echo $?</code> buyrug'ini bering.",
  "echo $?",
  "echo $? buyrug'ini bering.",
  ["ECHO", "STATUS"],
  ["echo $?", "echo \"$?\""],
  8, "8-Qavat • Oson", "S04 Task 3 • status",
  { command: "echo $?", flags: [] });

addQ(120, "Sektor 8 Xulosasi: Ishchi Papkani Tasdiqlash",
  "Manzilni tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  8, "8-Qavat • Oson", "S04 Task 3 • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 9 (121 - 135): Tasks 4 & 5 — Tizim Monitoringi & Xizmatlar Nazorati
// ----------------------------------------------------------------------------
addQ(121, "Disk_check.sh Skript Kodini O'qish",
  "Darslik 9-sahifasi: Disk to'lib qolishini nazorat qiluvchi skriptni o'qing.",
  "<code>cat disk_check.sh</code> buyrug'ini bering.",
  "cat disk_check.sh",
  "cat disk_check.sh buyrug'ini bering.",
  ["CAT", "DISK_CHECK"],
  ["cat disk_check.sh"],
  9, "9-Qavat • Oson", "S04 Task 4 • cat disk_check.sh",
  { command: "cat disk_check.sh", flags: [] });

addQ(122, "Df -P POSIX Formatini Tahlil Qilish",
  "Darslik 10-sahifasi: Disk ma'lumotlarini bitta satrga chiqaruvchi df -P / buyrug'ini bering.",
  "<code>df -P /</code> buyrug'ini bering.",
  "df -P /",
  "df -P / buyrug'ini bering.",
  ["DF", "-P", "POSIX"],
  ["df -P /"],
  9, "9-Qavat • Oson", "S04 Task 4 • df -P",
  {
    command: "df -P /",
    flags: [
      {
        flag: "-P",
        name: "POSIX standart chiqish formati",
        syntaxPos: "df dan so'ng",
        purpose: "Har bir bo'limni aniq 1 qatorda chiqaradi (uzun nomli fayl tizimlarida satr ikkiga bo'linib ketmaydi).",
        withoutRisk: "⚠️ AGAR -P BO'LMASA: Uzun disk nomlarida chiqish 2 satrga bo'linadi va awk 'NR==2 {print $5}' foiz o'rniga bo'sh satr olib xatoga uchraydi!"
      }
    ]
  });

addQ(123, "Awk Bilan 5-Ustun Foizini Ajratib Olish",
  "Darslik 9-sahifasi: df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}' quvurini bering.",
  "<code>df -P / | awk 'NR==2 {gsub(/%/, \'\'); print $5}'</code> buyrug'ini bering.",
  "df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'",
  "df -P / | awk 'NR==2 {gsub(/%/, ''); print $5}' buyrug'ini bering.",
  ["DF", "AWK", "PERCENT"],
  ["df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'"],
  9, "9-Qavat • O'rta", "S04 Task 4 • df awk",
  { command: "df -P / | awk 'NR==2 {gsub(/%/, \"\"); print $5}'", flags: [] });

addQ(124, "Disk_check.sh Skriptiga Ijro Huquqini Berish",
  "chmod +x orqali skriptni bajariladigan qiling.",
  "<code>chmod +x disk_check.sh</code> buyrug'ini bering.",
  "chmod +x disk_check.sh",
  "chmod +x disk_check.sh buyrug'ini bering.",
  ["CHMOD", "+X", "DISK_CHECK"],
  ["chmod +x disk_check.sh", "chmod 755 disk_check.sh"],
  9, "9-Qavat • Oson", "S04 Task 4 • chmod disk_check",
  { command: "chmod +x disk_check.sh", flags: [] });

addQ(125, "Sukut Bo'yicha Disk Tekshiruvini Ishga Tushirish",
  "Sukut bo'yicha 85% chegarasi bilan tekshiring (normal holat).",
  "<code>./disk_check.sh</code> buyrug'ini bering.",
  "./disk_check.sh",
  "./disk_check.sh buyrug'ini bering.",
  ["RUN", "DISK_NORMAL"],
  ["./disk_check.sh", "bash disk_check.sh"],
  9, "9-Qavat • Oson", "S04 Task 4 • run disk_check",
  { command: "./disk_check.sh", flags: [] });

addQ(126, "Ogohlantirish Shartini Sinash (./disk_check.sh 1)",
  "Darslik 10-sahifasi: 1% chegara berib ALERT yozilishini tekshiring.",
  "<code>./disk_check.sh 1</code> buyrug'ini bering.",
  "./disk_check.sh 1",
  "./disk_check.sh 1 buyrug'ini bering.",
  ["RUN", "DISK_ALERT"],
  ["./disk_check.sh 1", "bash disk_check.sh 1"],
  9, "9-Qavat • Oson", "S04 Task 4 • alert test",
  { command: "./disk_check.sh 1", flags: [] });

addQ(127, "Yozilgan Disk Ogohlantirish Logini O'qish",
  "cat $HOME/os_seminar4/disk_alert.log orqali xabarni ko'ring.",
  "<code>cat $HOME/os_seminar4/disk_alert.log</code> buyrug'ini bering.",
  "cat $HOME/os_seminar4/disk_alert.log",
  "cat $HOME/os_seminar4/disk_alert.log buyrug'ini bering.",
  ["CAT", "DISK_ALERT_LOG"],
  ["cat $HOME/os_seminar4/disk_alert.log", "cat disk_alert.log"],
  9, "9-Qavat • Oson", "S04 Task 4 • cat alert log",
  { command: "cat $HOME/os_seminar4/disk_alert.log", flags: [] });

addQ(128, "Tee -a Append Bayrog'i Xavfsizligini Tekshirish",
  "Skriptda log tarixini saqlab qoluvchi 'tee -a' ni toping.",
  "<code>grep 'tee -a' disk_check.sh</code> buyrug'ini bering.",
  "grep 'tee -a' disk_check.sh",
  "grep 'tee -a' disk_check.sh buyrug'ini bering.",
  ["GREP", "TEE_APPEND"],
  ["grep 'tee -a' disk_check.sh", "grep tee disk_check.sh"],
  9, "9-Qavat • Oson", "S04 Task 4 • grep tee",
  {
    command: "grep 'tee -a' disk_check.sh",
    flags: [
      {
        flag: "tee -a",
        name: "Fayl oxiriga qo'shish (Append)",
        syntaxPos: "tee dan so'ng",
        purpose: "Mavjud log faylini tozalab yubormasdan, yangi xabarni oxiriga qo'shadi.",
        withoutRisk: "⚠️ AGAR -a BO'LMASA: Tee faylni tozalab yuboradi (overwrite) va barcha eski ogohlantirishlar tarixi yo'qoladi!"
      }
    ]
  });

addQ(129, "Service_check.sh Skript Kodini O'qish",
  "Darslik 11-sahifasi: Orqa fondagi xizmatlar (services) holatini tekshiruvchi skriptni o'qing.",
  "<code>cat service_check.sh</code> buyrug'ini bering.",
  "cat service_check.sh",
  "cat service_check.sh buyrug'ini bering.",
  ["CAT", "SERVICE_CHECK"],
  ["cat service_check.sh"],
  9, "9-Qavat • Oson", "S04 Task 5 • cat service_check.sh",
  { command: "cat service_check.sh", flags: [] });

addQ(130, "Service_check.sh Skriptiga Ijro Huquqini Berish",
  "Service_check.sh skriptini ishga tushirish uchun unga ijro huquqini bering.",
  "<code>chmod +x service_check.sh</code> buyrug'ini bering.",
  "chmod +x service_check.sh",
  "chmod +x service_check.sh buyrug'ini bering.",
  ["CHMOD", "+X", "SERVICE_CHECK"],
  ["chmod +x service_check.sh", "chmod 755 service_check.sh"],
  9, "9-Qavat • Oson", "S04 Task 5 • chmod service_check",
  { command: "chmod +x service_check.sh", flags: [] });

addQ(131, "Faol Xizmatni Tekshirish (./service_check.sh cron.service)",
  "Darslik 11-sahifasi: cron.service xizmatini tekshiring (OK: cron.service is active).",
  "<code>./service_check.sh cron.service</code> buyrug'ini bering.",
  "./service_check.sh cron.service",
  "./service_check.sh cron.service buyrug'ini bering.",
  ["RUN", "CRON_SERVICE"],
  ["./service_check.sh cron.service", "bash service_check.sh cron.service"],
  9, "9-Qavat • Oson", "S04 Task 5 • check cron.service",
  { command: "./service_check.sh cron.service", flags: [] });

addQ(132, "Mavjud Bo'lmagan Xizmatni Tekshirish (invented-service)",
  "Darslik 11-sahifasi: O'rnatilmagan xizmat xatosini tekshiring.",
  "<code>./service_check.sh invented-service.service</code> buyrug'ini bering.",
  "./service_check.sh invented-service.service",
  "./service_check.sh invented-service.service buyrug'ini bering.",
  ["RUN", "INVENTED_SERVICE"],
  ["./service_check.sh invented-service.service", "bash service_check.sh invented-service.service"],
  9, "9-Qavat • Oson", "S04 Task 5 • check invented service",
  { command: "./service_check.sh invented-service.service", flags: [] });

addQ(133, "Systemctl is-active --quiet Bayrog'ini Tekshirish",
  "Xizmat faolligini ekranga matn chiqarmasdan xavfsiz tekshiruvchi qatorni toping.",
  "<code>grep -- '--quiet' service_check.sh</code> buyrug'ini bering.",
  "grep -- '--quiet' service_check.sh",
  "grep -- '--quiet' service_check.sh buyrug'ini bering.",
  ["GREP", "QUIET"],
  ["grep -- '--quiet' service_check.sh", "grep quiet service_check.sh"],
  9, "9-Qavat • O'rta", "S04 Task 5 • grep quiet",
  {
    command: "grep -- '--quiet' service_check.sh",
    flags: [
      {
        flag: "--quiet",
        name: "Jim rejim (Suppress output)",
        syntaxPos: "is-active dan so'ng",
        purpose: "Ekranga 'active' deb yozmasdan, faqat exit kodi (0 = faol, 3 = nofaol) qaytaradi.",
        withoutRisk: "⚠️ AGAR --quiet BO'LMASA: Terminalda keraksiz 'active' so'zi chiqib, skript loglariga xalaqit beradi."
      }
    ]
  });

addQ(134, "Systemctl show --property=LoadState Tahlili",
  "Faqat LoadState xususiyatini ajratib oluvchi qatorni ko'ring.",
  "<code>grep -- '--property=LoadState' service_check.sh</code> buyrug'ini bering.",
  "grep -- '--property=LoadState' service_check.sh",
  "grep -- '--property=LoadState' service_check.sh buyrug'ini bering.",
  ["GREP", "LOAD_STATE"],
  ["grep -- '--property=LoadState' service_check.sh", "grep LoadState service_check.sh"],
  9, "9-Qavat • O'rta", "S04 Task 5 • grep LoadState",
  {
    command: "grep -- '--property=LoadState' service_check.sh",
    flags: [
      {
        flag: "--property=LoadState --value",
        name: "Aniq xususiyat va uning toza qiymati",
        syntaxPos: "systemctl show dan so'ng",
        purpose: "Barcha yuzlab xususiyatlar ichidan faqat 'LoadState' qiymatini (loaded) chiqaradi.",
        withoutRisk: "⚠️ AGAR BU BO'LMASA: Systemctl butun boshli butun xizmat xaritasini chiqarib skriptni chalkashtiradi!"
      }
    ]
  });

addQ(135, "Sektor 9 Xulosasi: Ishchi Papkani Tasdiqlash",
  "Manzilni tekshiring.",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VERIFICATION"],
  ["pwd"],
  9, "9-Qavat • Oson", "S04 Task 5 • pwd",
  { command: "pwd", flags: [] });

// ----------------------------------------------------------------------------
// SECTOR 10 (136 - 150): Rejalashtirilgan Ijro: Cron & Systemd Timers (tick.sh)
// ----------------------------------------------------------------------------
addQ(136, "Tick.sh Reja Skriptini Ko'rish",
  "Darslik 12-sahifasi: Har daqiqada vaqt tamg'asini ticks.log ga yozuvchi skriptni o'qing.",
  "<code>cat tick.sh</code> buyrug'ini bering.",
  "cat tick.sh",
  "cat tick.sh buyrug'ini bering.",
  ["CAT", "TICK_SH"],
  ["cat tick.sh"],
  10, "10-Qavat • Oson", "S04 Part 4 • cat tick.sh",
  { command: "cat tick.sh", flags: [] });

addQ(137, "Tick.sh Skriptiga Ijro Huquqini Berish",
  "Cron va systemd ishga tushirishi uchun chmod +x bering.",
  "<code>chmod +x tick.sh</code> buyrug'ini bering.",
  "chmod +x tick.sh",
  "chmod +x tick.sh buyrug'ini bering.",
  ["CHMOD", "+X", "TICK"],
  ["chmod +x tick.sh", "chmod 755 tick.sh"],
  10, "10-Qavat • Oson", "S04 Part 4 • chmod tick.sh",
  { command: "chmod +x tick.sh", flags: [] });

addQ(138, "Crontab Jadvalini Ko'rish (crontab -l)",
  "Darslik 12-sahifasi: Foydalanuvchining joriy cron vazifalarini ko'ring.",
  "<code>crontab -l</code> buyrug'ini bering.",
  "crontab -l",
  "crontab -l buyrug'ini bering.",
  ["CRONTAB", "-L", "LIST"],
  ["crontab -l"],
  10, "10-Qavat • Oson", "S04 Part 4 • crontab -l",
  {
    command: "crontab -l",
    flags: [
      {
        flag: "-l",
        name: "Jadvalni ko'rish (List crontab)",
        syntaxPos: "crontab dan so'ng",
        purpose: "Foydalanuvchining barcha rejalashtirilgan vazifalarini ko'rsatadi.",
        withoutRisk: "⚠️ AGAR -l O'RNIGA -r YOZILSA: Barcha rejalashtirilgan vazifalar bir zumda ogohlantirishsiz o'chib ketadi (Remove)!"
      }
    ]
  });

addQ(139, "Yangi Cron Vazifasini O'rnatish (crontab -e)",
  "Darslik 12-sahifasi: '* * * * * ...' har daqiqalik vazifasini o'rnating.",
  "<code>crontab -e</code> buyrug'ini bering.",
  "crontab -e",
  "crontab -e buyrug'ini bering.",
  ["CRONTAB", "-E", "INSTALL"],
  ["crontab -e"],
  10, "10-Qavat • Oson", "S04 Part 4 • crontab -e",
  {
    command: "crontab -e",
    flags: [
      {
        flag: "-e",
        name: "Jadvalni tahrirlash (Edit crontab)",
        syntaxPos: "crontab dan so'ng",
        purpose: "Vazifalar jadvalini ochib yangi qator kiritish imkonini beradi.",
        withoutRisk: "⚠️ AGAR -e BO'LMASA: Quruq crontab buyrug'i terminalda kiritish kutib to'xtab qoladi."
      }
    ]
  });

addQ(140, "Yangi Crontab Jadvalini Tekshirish",
  "Yangi kiritilgan '* * * * * ...' qatorini tasdiqlang.",
  "<code>crontab -l</code> buyrug'ini bering.",
  "crontab -l",
  "crontab -l buyrug'ini bering.",
  ["CRONTAB", "VERIFY"],
  ["crontab -l"],
  10, "10-Qavat • Oson", "S04 Part 4 • crontab list verify",
  { command: "crontab -l", flags: [] });

addQ(141, "Systemd User Service Faylini Ko'rish",
  "Darslik 13-sahifasi: ~/.config/systemd/user/os-seminar-tick.service faylini o'qing.",
  "<code>cat ~/.config/systemd/user/os-seminar-tick.service</code> buyrug'ini bering.",
  "cat ~/.config/systemd/user/os-seminar-tick.service",
  "cat ~/.config/systemd/user/os-seminar-tick.service buyrug'ini bering.",
  ["CAT", "SERVICE_UNIT"],
  ["cat ~/.config/systemd/user/os-seminar-tick.service", "cat $HOME/.config/systemd/user/os-seminar-tick.service"],
  10, "10-Qavat • Oson", "S04 Part 5 • cat service unit",
  { command: "cat ~/.config/systemd/user/os-seminar-tick.service", flags: [] });

addQ(142, "Systemd User Timer Faylini Ko'rish",
  "Darslik 13-sahifasi: OnCalendar=*-*-* *:*:00 belgilangan timer faylini o'qing.",
  "<code>cat ~/.config/systemd/user/os-seminar-tick.timer</code> buyrug'ini bering.",
  "cat ~/.config/systemd/user/os-seminar-tick.timer",
  "cat ~/.config/systemd/user/os-seminar-tick.timer buyrug'ini bering.",
  ["CAT", "TIMER_UNIT"],
  ["cat ~/.config/systemd/user/os-seminar-tick.timer", "cat $HOME/.config/systemd/user/os-seminar-tick.timer"],
  10, "10-Qavat • Oson", "S04 Part 5 • cat timer unit",
  { command: "cat ~/.config/systemd/user/os-seminar-tick.timer", flags: [] });

addQ(143, "Systemd Konfiguratsiyasini Qayta Yuklash (daemon-reload)",
  "Darslik 14-sahifasi: Yangi unit fayllarini yuklash uchun daemon-reload bering.",
  "<code>systemctl --user daemon-reload</code> buyrug'ini bering.",
  "systemctl --user daemon-reload",
  "systemctl --user daemon-reload buyrug'ini bering.",
  ["SYSTEMCTL", "DAEMON_RELOAD"],
  ["systemctl --user daemon-reload"],
  10, "10-Qavat • O'rta", "S04 Part 5 • daemon-reload",
  {
    command: "systemctl --user daemon-reload",
    flags: [
      {
        flag: "--user",
        name: "Foydalanuvchi darajasi (User session)",
        syntaxPos: "systemctl dan so'ng",
        purpose: "Root huquqisiz oddiy foydalanuvchi sessiyasida boshqarishni ta'minlaydi.",
        withoutRisk: "⚠️ AGAR --user BO'LMASA: Root paroli so'raladi yoki Permission Denied chiqadi!"
      },
      {
        flag: "daemon-reload",
        name: "Barcha unit fayllarini qayta skanerlash",
        syntaxPos: "Subcommand",
        purpose: "Yangi yaratilgan xizmat va timerni systemd xotirasiga kiritadi.",
        withoutRisk: "⚠️ AGAR daemon-reload BO'LMASA: Systemd yangi fayllarni mutlaqo ko'rmaydi!"
      }
    ]
  });

addQ(144, "Systemd Timerni Ishga Tushirish",
  "Darslik 14-sahifasi: os-seminar-tick.timer ni faollashtiring.",
  "<code>systemctl --user start os-seminar-tick.timer</code> buyrug'ini bering.",
  "systemctl --user start os-seminar-tick.timer",
  "systemctl --user start os-seminar-tick.timer buyrug'ini bering.",
  ["SYSTEMCTL", "START_TIMER"],
  ["systemctl --user start os-seminar-tick.timer"],
  10, "10-Qavat • O'rta", "S04 Part 5 • start timer",
  { command: "systemctl --user start os-seminar-tick.timer", flags: [] });

addQ(145, "Faol Timerlar Ro'yxatini Ko'rish (list-timers)",
  "Darslik 14-sahifasi: Barcha rejalashtirilgan timerlarni ko'ring.",
  "<code>systemctl --user list-timers --all</code> buyrug'ini bering.",
  "systemctl --user list-timers --all",
  "systemctl --user list-timers --all buyrug'ini bering.",
  ["SYSTEMCTL", "LIST_TIMERS", "--ALL"],
  ["systemctl --user list-timers --all", "systemctl --user list-timers"],
  10, "10-Qavat • O'rta", "S04 Part 5 • list-timers",
  {
    command: "systemctl --user list-timers --all",
    flags: [
      {
        flag: "--all",
        name: "Barcha timerlar (All timers)",
        syntaxPos: "list-timers dan so'ng",
        purpose: "Nofaol yoki kutilayotgan barcha timerlarni to'liq chiqaradi.",
        withoutRisk: "⚠️ AGAR --all BO'LMASA: Nofaol bo'lib qolgan timerlar ro'yxatdan tushib qolishi mumkin."
      }
    ]
  });

addQ(146, "Rejalashtirilgan Chiqish Logini O'qish (ticks.log)",
  "Darslik 14-sahifasi: tail -n 5 ticks.log orqali vaqt tamg'alarini ko'ring.",
  "<code>tail -n 5 $HOME/os_seminar4/ticks.log</code> buyrug'ini bering.",
  "tail -n 5 $HOME/os_seminar4/ticks.log",
  "tail -n 5 $HOME/os_seminar4/ticks.log buyrug'ini bering.",
  ["TAIL", "TICKS_LOG"],
  ["tail -n 5 $HOME/os_seminar4/ticks.log", "tail -n 5 ticks.log", "tail -5 ticks.log"],
  10, "10-Qavat • Oson", "S04 Part 5 • tail ticks.log",
  { command: "tail -n 5 $HOME/os_seminar4/ticks.log", flags: [] });

addQ(147, "Journalctl Bilan Xizmat Jurnalini O'qish (--no-pager)",
  "Darslik 14-sahifasi: journalctl --user -u os-seminar-tick.service -n 10 --no-pager buyrug'ini bering.",
  "<code>journalctl --user -u os-seminar-tick.service -n 10 --no-pager</code> buyrug'ini bering.",
  "journalctl --user -u os-seminar-tick.service -n 10 --no-pager",
  "journalctl --user -u os-seminar-tick.service -n 10 --no-pager buyrug'ini bering.",
  ["JOURNALCTL", "NO_PAGER", "SERVICE_LOG"],
  ["journalctl --user -u os-seminar-tick.service -n 10 --no-pager"],
  10, "10-Qavat • O'rta", "S04 Part 5 • journalctl logs",
  {
    command: "journalctl --user -u os-seminar-tick.service -n 10 --no-pager",
    flags: [
      {
        flag: "-u",
        name: "Unit filtri (Unit name)",
        syntaxPos: "journalctl dan so'ng",
        purpose: "Faqat ko'rsatilgan xizmatga tegishli loglarni saralaydi.",
        withoutRisk: "⚠️ AGAR -u BO'LMASA: Butun tizimdagi millionlab begona loglar to'kilib ketadi!"
      },
      {
        flag: "--no-pager",
        name: "Sahifalashsiz chiqarish (Direct stdout)",
        syntaxPos: "Buyruq oxirida",
        purpose: "Loglarni 'less' oynasida to'xtatmasdan to'g'ridan-to'g'ri terminalga chiqaradi.",
        withoutRisk: "⚠️ AGAR --no-pager BO'LMASA: Skript 'less' interfeysida qotib qoladi va 'q' bosilmaguncha to'xtab turadi!"
      }
    ]
  });

addQ(148, "Timerni Xavfsiz To'xtatish (stop)",
  "Laboratoriya yakunida timerni to'xtating.",
  "<code>systemctl --user stop os-seminar-tick.timer</code> buyrug'ini bering.",
  "systemctl --user stop os-seminar-tick.timer",
  "systemctl --user stop os-seminar-tick.timer buyrug'ini bering.",
  ["SYSTEMCTL", "STOP_TIMER"],
  ["systemctl --user stop os-seminar-tick.timer"],
  10, "10-Qavat • Oson", "S04 Part 5 • stop timer",
  { command: "systemctl --user stop os-seminar-tick.timer", flags: [] });

addQ(149, "Crontab Jadvalini Tozalash (crontab -r)",
  "Test cron qatorini tozalab tizimni dastlabki holatga qaytaring.",
  "<code>crontab -r</code> buyrug'ini bering.",
  "crontab -r",
  "crontab -r buyrug'ini bering.",
  ["CRONTAB", "-R", "CLEANUP"],
  ["crontab -r"],
  10, "10-Qavat • Oson", "S04 Part 5 • crontab -r",
  {
    command: "crontab -r",
    flags: [
      {
        flag: "-r",
        name: "Jadvalni to'liq o'chirish (Remove)",
        syntaxPos: "crontab dan so'ng",
        purpose: "Foydalanuvchining barcha cron vazifalarini tozalaydi.",
        withoutRisk: "⚠️ AGAR BEIXTIYOR BOSILSA: Barcha vazifalar yo'qoladi, ehtiyotkorlik bilan ishlatish shart!"
      }
    ]
  });

addQ(150, "Bosh Linux Avtomatlashtirish & Rejalashtirish Arxitektori Final Sinovi",
  "Professor Turing olqishlaydi! Barcha 150 ta qat'iy rejimli Bash, fork(), tarmoq va systemd laboratoriya vazifalari 100% bajarildi!",
  "<code>pwd</code> buyrug'ini bering.",
  "pwd",
  "pwd buyrug'ini bering.",
  ["PWD", "VICTORY", "CHIEF_ARCHITECT"],
  ["pwd"],
  10, "10-Qavat • Oson", "S04 Final • Victory PWD",
  { command: "pwd", flags: [] });


console.log(`Generated all ${questions.length} questions for Week 4.`);

// Validate against VirtualLinuxShell and BASH_GRADER
const virtualFsCode = fs.readFileSync(path.join(__dirname, 'data/virtual_fs.js'), 'utf8');
const sandbox = { window: {}, console: console };
vm.createContext(sandbox);
vm.runInContext(virtualFsCode, sandbox);

const BASH_GRADER = sandbox.window.VIRTUAL_LINUX_W4.BASH_GRADER;
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
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 QUESTIONS 1 TO 50\n// ============================================================================\n\nwindow.QUESTIONS_1_50_W4 = ${JSON.stringify(q1_50, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_51_100.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 QUESTIONS 51 TO 100\n// ============================================================================\n\nwindow.QUESTIONS_51_100_W4 = ${JSON.stringify(q51_100, null, 2)};\n`,
  'utf8'
);

fs.writeFileSync(
  path.join(__dirname, 'data/questions_101_150.js'),
  `// ============================================================================\n// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 QUESTIONS 101 TO 150\n// ============================================================================\n\nwindow.QUESTIONS_101_150_W4 = ${JSON.stringify(q101_150, null, 2)};\n`,
  'utf8'
);

console.log("Successfully wrote all 3 question files for Week 4!");
