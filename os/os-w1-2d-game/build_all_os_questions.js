// ============================================================================
// OS WEEK 1 — 150 QUESTIONS GENERATOR & VALIDATION ENGINE
// Linux Essential Commands, File Systems, Inodes, Links, Text Tools & Find
// ============================================================================

const fs = require('fs');
const path = require('path');

global.window = global;
require('./data/virtual_fs.js');

const grader = window.VIRTUAL_LINUX.BASH_GRADER;

const allQuestions = [];

// ============================================================================
// SECTOR 1: TERMINALGA KIRISH, NAVIGATSIYA VA PWD (Q1 - Q15)
// ============================================================================
const s1_tasks = [
  {
    id: 1,
    title: "Joriy Ishchi Katalogni Aniqlash",
    story: "Debian 12 serveriga SSH orqali kirdingiz. Qaysi papkada turganingizni aniqlash zarur.",
    taskUz: "Joriy ishchi katalogning to'liq manzilini ekranga chiqaruvchi buyruqni bering.",
    expectedSql: "pwd",
    hint: "`pwd` (Print Working Directory) buyrug'ini yozing.",
    tags: ["PWD", "NAVIGATION", "BASIC"],
    solutions: ["pwd", "/bin/pwd"]
  },
  {
    id: 2,
    title: "Joriy Foydalanuvchi Shaxsini Aniqlash",
    story: "Serverda qaysi akkaunt (foydalanuvchi) nomidan ishlayotganingizni tekshiring.",
    taskUz: "Tizimga kirgan joriy foydalanuvchi nomini ko'rsatuvchi buyruqni bering.",
    expectedSql: "whoami",
    hint: "`whoami` buyrug'idan foydalaning.",
    tags: ["WHOAMI", "USER", "BASIC"],
    solutions: ["whoami", "/usr/bin/whoami"]
  },
  {
    id: 3,
    title: "Server Nomini (Hostname) Aniqlash",
    story: "Tarmoqdagi serverlar ichida aynan qaysi kompyuterga ulanganingizni tasdiqlang.",
    taskUz: "Ushbu mashinaning tarmoqdagi nomini (`hostname`) ekranga chiqaring.",
    expectedSql: "hostname",
    hint: "`hostname` buyrug'ini bering.",
    tags: ["HOSTNAME", "SYSTEM", "BASIC"],
    solutions: ["hostname", "/bin/hostname"]
  },
  {
    id: 4,
    title: "Ildiz (Root) Katalogga O'tish",
    story: "Linux fayl tizimining eng yuqori darajasi — bu ildiz (`/`) katalogidir.",
    taskUz: "Fayl tizimining eng boshlang'ich ildiz katalogiga (`/`) o'ting.",
    expectedSql: "cd /",
    hint: "`cd /` buyrug'ini bering.",
    tags: ["CD", "ROOT", "NAVIGATION"],
    solutions: ["cd /"]
  },
  {
    id: 5,
    title: "Foydalanuvchining Uy Papkasiga Qaytish",
    story: "Ildiz papkasidan o'z shaxsiy uy papkangizga (`/home/student`) qayting.",
    taskUz: "Argumentlarsiz yoki `~` belgisi orqali o'z uy katalogingizga o'ting.",
    expectedSql: "cd ~",
    hint: "`cd ~` yoki shunchaki `cd` buyrug'ini bering.",
    tags: ["CD", "HOME", "NAVIGATION"],
    solutions: ["cd ~", "cd", "cd /home/student"]
  },
  {
    id: 6,
    title: "/var/log Katalogiga O'tish",
    story: "Tizim log fayllarini tekshirish uchun `/var/log` papkasiga o'tish lozim.",
    taskUz: "Absolyut manzil orqali `/var/log` katalogiga kiring.",
    expectedSql: "cd /var/log",
    hint: "`cd /var/log` buyrug'ini bering.",
    tags: ["CD", "VAR_LOG", "NAVIGATION"],
    solutions: ["cd /var/log"]
  },
  {
    id: 7,
    title: "Bitta Qavat Yuqoriga Chiqish (cd ..)",
    story: "Joriy papkadan bitta qavat yuqoridagi ota katalogga o'ting.",
    taskUz: "`..` nisbiy belgisidan foydalanib bitta qavat yuqoriga o'ting.",
    expectedSql: "cd ..",
    hint: "`cd ..` deb yozing.",
    tags: ["CD", "PARENT DIR", "NAVIGATION"],
    solutions: ["cd .."]
  },
  {
    id: 8,
    title: "Oldingi Tashrif Buyurilgan Katalogga Qaytish (cd -)",
    story: "Linux terminalida oxirgi bo'lingan avvalgi katalogga tezkor qaytish imkoni mavjud.",
    taskUz: "Oldingi tashrif buyurilgan papkaga qaytish uchun `cd -` buyrug'ini bering.",
    expectedSql: "cd -",
    hint: "`cd -` buyrug'idan foydalaning.",
    tags: ["CD", "PREVIOUS DIR", "NAVIGATION"],
    solutions: ["cd -"]
  },
  {
    id: 9,
    title: "/etc Konfiguratsiya Katalogiga O'tish",
    story: "Server konfiguratsiya fayllari joylashgan `/etc` katalogiga o'ting.",
    taskUz: "Absolyut yo'l orqali `/etc` katalogiga kiring.",
    expectedSql: "cd /etc",
    hint: "`cd /etc` deb yozing.",
    tags: ["CD", "ETC", "NAVIGATION"],
    solutions: ["cd /etc"]
  },
  {
    id: 10,
    title: "Uy Papkasidagi Ichki Yo'l (cd ~/)",
    story: "Qayerda turishingizdan qat'i nazar, uy papkangiz ichidagi yo'lni `~/` orqali ko'rsatish mumkin.",
    taskUz: "`~/` sintaksisidan foydalanib uy katalogiga o'ting.",
    expectedSql: "cd ~/",
    hint: "`cd ~/` deb yozing.",
    tags: ["CD", "TILDE", "NAVIGATION"],
    solutions: ["cd ~/", "cd ~"]
  },
  {
    id: 11,
    title: "/tmp Vaqtinchalik Katalogga O'tish",
    story: "Vaqtinchalik fayllar ombori bo'lgan `/tmp` katalogiga kiring.",
    taskUz: "Absolyut manzil bo'yicha `/tmp` papkasiga o'ting.",
    expectedSql: "cd /tmp",
    hint: "`cd /tmp` deb yozing.",
    tags: ["CD", "TMP", "NAVIGATION"],
    solutions: ["cd /tmp"]
  },
  {
    id: 12,
    title: "Ikki Qavat Yuqoriga Chiqish (cd ../..)",
    story: "Chuqur kataloglardan ikki pog'ona yuqoriga sakrash zarur.",
    taskUz: "Ikki pog'ona yuqoridagi ota katalogga o'tish buyrug'ini bering.",
    expectedSql: "cd ../..",
    hint: "`cd ../..` deb yozing.",
    tags: ["CD", "DOUBLE PARENT", "NAVIGATION"],
    solutions: ["cd ../.."]
  },
  {
    id: 13,
    title: "Joriy Katalogni Tasdiqlash",
    story: "Navigatsiyadan so'ng qaysi papkaga kelganingizni `pwd` bilan tekshiring.",
    taskUz: "Joriy katalogni ekranga chiqaruvchi buyruqni bering.",
    expectedSql: "pwd",
    hint: "`pwd` deb yozing.",
    tags: ["PWD", "CHECK", "NAVIGATION"],
    solutions: ["pwd"]
  },
  {
    id: 14,
    title: "Uy Papkasiga To'liq Absolyut Yo'l Bilan O'tish",
    story: "Tilde `~` ishlatmasdan to'liq absolyut yo'l orqali `/home/student` ga o'ting.",
    taskUz: "`cd /home/student` buyrug'i orqali o'z shaxsiy katalogingizga kiring.",
    expectedSql: "cd /home/student",
    hint: "`cd /home/student` deb yozing.",
    tags: ["CD", "ABSOLUTE PATH", "NAVIGATION"],
    solutions: ["cd /home/student", "cd ~"]
  },
  {
    id: 15,
    title: "cd Buyrug'i Qo'llanmasini Ko'rish",
    story: "Ichki buyruqlar va parametrlar haqida yordam olishni o'rganing.",
    taskUz: "`pwd` buyrug'i haqida qo'llanmani `man pwd` orqali oching.",
    expectedSql: "man pwd",
    hint: "`man pwd` buyrug'ini bering.",
    tags: ["MAN", "HELP", "BASIC"],
    solutions: ["man pwd"]
  }
];

s1_tasks.forEach(t => allQuestions.push({ ...t, sector: 1, difficulty: "1-Qavat • Oson", source: "S01 Task 1 • Navigatsiya" }));

// ============================================================================
// SECTOR 2: KATALOGLAR RO'YXATI VA YASHIRIN FAYLLAR (LS) (Q16 - Q30)
// ============================================================================
const s2_tasks = [
  {
    id: 16,
    title: "Oddiy Fayllar Ro'yxatini Ko'rish (ls)",
    story: "Joriy papkada qanday oddiy fayllar borligini ko'zdan kechiring.",
    taskUz: "Joriy katalogdagi fayllar va papkalar ro'yxatini chiqaring.",
    expectedSql: "ls",
    hint: "`ls` buyrug'ini bering.",
    tags: ["LS", "LIST", "BASIC"],
    solutions: ["ls"]
  },
  {
    id: 17,
    title: "Barcha Fayllar, Shu Jumladan Yashirin Fayllar (ls -a)",
    story: "Nuqta bilan boshlanuvchi `.bashrc` va `.profile` kabi yashirin konfiguratsiyalarni ko'rish lozim.",
    taskUz: "Barcha fayllarni (yashirin fayllar bilan birga) ko'rsatuvchi buyruqni bering.",
    expectedSql: "ls -a",
    hint: "`ls -a` (all) bayrog'idan foydalaning.",
    tags: ["LS -A", "HIDDEN FILES", "LIST"],
    solutions: ["ls -a", "ls --all"]
  },
  {
    id: 18,
    title: "Kengaytirilgan Formatda Chiqarish (ls -l)",
    story: "Huquqlar (rwx), Inodelar soni, egasi, guruhi va hajmini batafsil ko'rish talab qilinadi.",
    taskUz: "Fayllar ro'yxatini batafsil uzun formatda (`long format`) chiqaring.",
    expectedSql: "ls -l",
    hint: "`ls -l` buyrug'ini bering.",
    tags: ["LS -L", "LONG FORMAT", "PERMISSIONS"],
    solutions: ["ls -l"]
  },
  {
    id: 19,
    title: "Batafsil va Yashirin Fayllar Birlashmasi (ls -la)",
    story: "SysAdminlarning eng mashhur va kundalik buyrug'i `ls -la` hisoblanadi.",
    taskUz: "Ham yashirin fayllarni, ham uzun formatni birlashtirib chiqaring.",
    expectedSql: "ls -la",
    hint: "`ls -la` yoki `ls -al` deb yozing.",
    tags: ["LS -LA", "LONG FORMAT", "HIDDEN"],
    solutions: ["ls -la", "ls -al", "ls -l -a", "ls -a -l"]
  },
  {
    id: 20,
    title: "Inson O'qiy Oladigan O'lchamlar Bilan (ls -lh)",
    story: "Fayl hajmini baytlarda emas, balki KB, MB ko'rinishida ko'rish qulay.",
    taskUz: "Uzun formatda fayl o'lchamlarini inson o'qiy oladigan formatda (`-h`) chiqaring.",
    expectedSql: "ls -lh",
    hint: "`ls -lh` deb yozing.",
    tags: ["LS -LH", "HUMAN READABLE", "SIZE"],
    solutions: ["ls -lh", "ls -l -h", "ls -hl"]
  },
  {
    id: 21,
    title: "O'zgarish Vaqti Bo'yicha Saralash (ls -t)",
    story: "Eng oxirgi tahrirlangan yangi fayllarni ro'yxat boshida ko'rish kerak.",
    taskUz: "Fayllarni oxirgi o'zgartirilgan vaqti bo'yicha (eng yangilari birinchi) saralab chiqaring.",
    expectedSql: "ls -t",
    hint: "`ls -t` buyrug'ini bering.",
    tags: ["LS -T", "SORT TIME", "LIST"],
    solutions: ["ls -t"]
  },
  {
    id: 22,
    title: "Vaqt Bo'yicha Teskari Saralash (ls -tr)",
    story: "Eski fayllardan yangilariga qarab xronologik tartibda ko'rish zarur.",
    taskUz: "Fayllarni o'zgarish vaqti bo'yicha teskari (eng eskilari tepada) saralab chiqaring.",
    expectedSql: "ls -tr",
    hint: "`ls -tr` yoki `ls -rt` deb yozing.",
    tags: ["LS -TR", "REVERSE TIME", "SORT"],
    solutions: ["ls -tr", "ls -rt"]
  },
  {
    id: 23,
    title: "Hajmi Bo'yicha Saralash (ls -S)",
    story: "Diskda eng ko'p joy egallayotgan yirik fayllarni aniqlang.",
    taskUz: "Fayllarni hajmi bo'yicha kamayish tartibida (katta fayllar tepada) saralab chiqaring.",
    expectedSql: "ls -S",
    hint: "`ls -S` (katta S) bayrog'ini bering.",
    tags: ["LS -S", "SORT SIZE", "STORAGE"],
    solutions: ["ls -S"]
  },
  {
    id: 24,
    title: "Teskari Alifbo Tartibida Saralash (ls -r)",
    story: "Nomlarni Z dan A ga qarab teskari alifboda chiqarish talab etiladi.",
    taskUz: "Fayllar ro'yxatini teskari tartibda chiqaring.",
    expectedSql: "ls -r",
    hint: "`ls -r` deb yozing.",
    tags: ["LS -R", "REVERSE", "LIST"],
    solutions: ["ls -r"]
  },
  {
    id: 25,
    title: "/var/log Papkasi Tarkibini Chiqarish",
    story: "O'sha papkaga kirmasdan turib, boshqa papka tarkibini ko'rish mumkin.",
    taskUz: "Joriy joyingizni o'zgartirmasdan `/var/log` katalogidagi fayllarni chiqaring.",
    expectedSql: "ls /var/log",
    hint: "`ls /var/log` deb yozing.",
    tags: ["LS PATH", "VAR_LOG", "LIST"],
    solutions: ["ls /var/log"]
  },
  {
    id: 26,
    title: "/var/log dagi Loglarni Uzun Formatda Ko'rish",
    story: "Tizim loglarining huquqlari va hajmlarini uzun formatda tahlil qiling.",
    taskUz: "`/var/log` katalogidagi fayllarni uzun formatda (`-l`) chiqaring.",
    expectedSql: "ls -l /var/log",
    hint: "`ls -l /var/log` deb yozing.",
    tags: ["LS -L", "VAR_LOG", "AUDIT"],
    solutions: ["ls -l /var/log"]
  },
  {
    id: 27,
    title: "/etc/skel Katalogidagi Yashirin Shablonlarni Ko'rish",
    story: "Yangi foydalanuvchilar uchun tayyorlangan yashirin shablon fayllarni ko'ring.",
    taskUz: "`/etc/skel` katalogidagi barcha yashirin fayllarni (`-la`) chiqaring.",
    expectedSql: "ls -la /etc/skel",
    hint: "`ls -la /etc/skel` deb yozing.",
    tags: ["LS -LA", "SKEL", "HIDDEN"],
    solutions: ["ls -la /etc/skel", "ls -al /etc/skel"]
  },
  {
    id: 28,
    title: "Fayl Turlari Belgisi Bilan Chiqarish (ls -F)",
    story: "Papkalar orqasiga `/`, skriptlar orqasiga `*` qo'yuvchi `-F` bayrog'ini sinang.",
    taskUz: "Fayl turlari indikatori (`-F`) bilan fayllarni chiqaring.",
    expectedSql: "ls -F",
    hint: "`ls -F` deb yozing.",
    tags: ["LS -F", "INDICATOR", "LIST"],
    solutions: ["ls -F"]
  },
  {
    id: 29,
    title: "/var/log dagi Fayllarni Hajmi Bo'yicha Saralash",
    story: "Loglar orasida eng katta joy egallaganlarini aniqlash lozim.",
    taskUz: "`/var/log` katalogidagi fayllarni hajmi bo'yicha kamayish tartibida (`-lS`) chiqaring.",
    expectedSql: "ls -lS /var/log",
    hint: "`ls -lS /var/log` deb yozing.",
    tags: ["LS -LS", "SORT SIZE", "VAR_LOG"],
    solutions: ["ls -lS /var/log", "ls -Sl /var/log"]
  },
  {
    id: 30,
    title: "ls Buyrug'i Qo'llanmasini Ko'rish",
    story: "Barcha mavjud saralash va filtrlash bayroqlarini man sahifasidan ko'ring.",
    taskUz: "`ls` buyrug'ining to'liq qo'llanmasini ochuvchi buyruqni bering.",
    expectedSql: "man ls",
    hint: "`man ls` deb yozing.",
    tags: ["MAN", "LS", "DOCUMENTATION"],
    solutions: ["man ls"]
  }
];

s2_tasks.forEach(t => allQuestions.push({ ...t, sector: 2, difficulty: "2-Qavat • O'rta", source: "S01 Task 2 • ls Buyruqlari" }));

// ============================================================================
// SECTOR 3: KATALOGLAR DARAХTI (MKDIR & RMDIR) (Q31 - Q45)
// ============================================================================
const s3_tasks = [
  {
    id: 31,
    title: "Yangi 's01' Papkasini Yaratish",
    story: "Seminar 1 laboratoriya ishlari uchun asosiy ishchi papka yaratish kerak.",
    taskUz: "Joriy katalogda `s01` nomli yangi papka yarating.",
    expectedSql: "mkdir s01",
    hint: "`mkdir s01` deb yozing.",
    tags: ["MKDIR", "DIRECTORY", "CREATION"],
    solutions: ["mkdir s01"]
  },
  {
    id: 32,
    title: "Ota Papkalari Bilan Birgalikda Yaratish (mkdir -p)",
    story: "Seminar 1 topshirig'i: `s01/logs` ichki papkalarini bitta buyruqda yarating.",
    taskUz: "`-p` bayrog'i yordamida `s01/logs` papkalar zanjirini yarating.",
    expectedSql: "mkdir -p s01/logs",
    hint: "`mkdir -p s01/logs` deb yozing.",
    tags: ["MKDIR -P", "PARENTS", "HIERARCHY"],
    solutions: ["mkdir -p s01/logs"]
  },
  {
    id: 33,
    title: "Arxiv Papkasini Yaratish (mkdir -p s01/archive)",
    story: "Eskirgan log fayllar va zaxira nusxalar uchun maxsus papka ajrating.",
    taskUz: "`s01/archive` katalogini yarating.",
    expectedSql: "mkdir -p s01/archive",
    hint: "`mkdir -p s01/archive` deb yozing.",
    tags: ["MKDIR", "ARCHIVE", "HIERARCHY"],
    solutions: ["mkdir -p s01/archive", "mkdir s01/archive"]
  },
  {
    id: 34,
    title: "Hisobotlar Papkasini Yaratish (mkdir -p s01/reports)",
    story: "Audit va tahlil xulosalari uchun `reports` papkasini yarating.",
    taskUz: "`s01/reports` katalogini yarating.",
    expectedSql: "mkdir -p s01/reports",
    hint: "`mkdir -p s01/reports` deb yozing.",
    tags: ["MKDIR", "REPORTS", "HIERARCHY"],
    solutions: ["mkdir -p s01/reports", "mkdir s01/reports"]
  },
  {
    id: 35,
    title: "Bir Nechta Papkani Bitta Buyruqda Yaratish",
    story: "Ikkita mustaqil `test1` va `test2` papkalarini bitta qatorda yarating.",
    taskUz: "Bitta `mkdir` buyrug'i orqali `test1 test2` kataloglarini yarating.",
    expectedSql: "mkdir test1 test2",
    hint: "`mkdir test1 test2` deb yozing.",
    tags: ["MKDIR", "MULTIPLE", "CREATION"],
    solutions: ["mkdir test1 test2"]
  },
  {
    id: 36,
    title: "Bo'sh Papkani O'chirish (rmdir test1)",
    story: "Sinov uchun ochilgan bo'sh `test1` papkasini xavfsiz o'chiring.",
    taskUz: "`rmdir` yordamida bo'sh `test1` katalogini o'chiring.",
    expectedSql: "rmdir test1",
    hint: "`rmdir test1` deb yozing.",
    tags: ["RMDIR", "EMPTY DIR", "CLEANUP"],
    solutions: ["rmdir test1"]
  },
  {
    id: 37,
    title: "Ikkinchi Bo'sh Papkani O'chirish (rmdir test2)",
    story: "Keraksiz bo'lgan ikkinchi `test2` papkasini ham olib tashlang.",
    taskUz: "`rmdir` yordamida `test2` katalogini o'chiring.",
    expectedSql: "rmdir test2",
    hint: "`rmdir test2` deb yozing.",
    tags: ["RMDIR", "EMPTY DIR", "CLEANUP"],
    solutions: ["rmdir test2"]
  },
  {
    id: 38,
    title: "Konfiguratsiyalar Papkasini Yaratish (mkdir config)",
    story: "Tizim sozlamalari nusxalari uchun `config` papkasini tayyorlang.",
    taskUz: "Uy katalogida `config` nomli yangi papka yarating.",
    expectedSql: "mkdir config",
    hint: "`mkdir config` deb yozing.",
    tags: ["MKDIR", "CONFIG", "CREATION"],
    solutions: ["mkdir config"]
  },
  {
    id: 39,
    title: "Chuqur Tarmoqli Papka Yaratish (mkdir -p a/b/c)",
    story: "3 qavatli chuqur katalog strukturasini bitta buyruqda oching.",
    taskUz: "`-p` orqali `a/b/c` kataloglar ierarxiyasini yarating.",
    expectedSql: "mkdir -p a/b/c",
    hint: "`mkdir -p a/b/c` deb yozing.",
    tags: ["MKDIR -P", "NESTED", "HIERARCHY"],
    solutions: ["mkdir -p a/b/c"]
  },
  {
    id: 40,
    title: "Chuqur Papka Ichiga Kirish (cd a/b/c)",
    story: "Yangi yaratilgan eng chuqur `c` papkasiga o'ting.",
    taskUz: "`cd a/b/c` buyrug'i orqali ichki katalogga kiring.",
    expectedSql: "cd a/b/c",
    hint: "`cd a/b/c` deb yozing.",
    tags: ["CD", "NESTED", "NAVIGATION"],
    solutions: ["cd a/b/c"]
  },
  {
    id: 41,
    title: "Qaytadan Uy Papkasiga Qaytish (cd ~)",
    story: "Chuqur yo'ldan o'z boshlang'ich uy papkangizga qayting.",
    taskUz: "`cd ~` buyrug'i orqali uy papkangizga qayting.",
    expectedSql: "cd ~",
    hint: "`cd ~` deb yozing.",
    tags: ["CD", "HOME", "NAVIGATION"],
    solutions: ["cd ~", "cd"]
  },
  {
    id: 42,
    title: "Kataloglar Daraxtini Ko'rish (tree s01)",
    story: "Yaratilgan `s01` papkasi ierarxiyasini daraxt ko'rinishida ko'zdan kechiring.",
    taskUz: "`tree s01` buyrug'i orqali papkalar tuzilishini chiqaring.",
    expectedSql: "tree s01",
    hint: "`tree s01` deb yozing.",
    tags: ["TREE", "HIERARCHY", "STRUCTURE"],
    solutions: ["tree s01"]
  },
  {
    id: 43,
    title: "Zaxira Papkasini Yaratish (mkdir backup)",
    story: "Tizim zaxiralari uchun `backup` papkasi kerak bo'ladi.",
    taskUz: "Yangi `backup` nomli papka yarating.",
    expectedSql: "mkdir backup",
    hint: "`mkdir backup` deb yozing.",
    tags: ["MKDIR", "BACKUP", "CREATION"],
    solutions: ["mkdir backup"]
  },
  {
    id: 44,
    title: "Logs Papkasi Ichiga O'tish (cd s01/logs)",
    story: "Fayllar yaratish bosqichiga o'tish uchun `s01/logs` papkasiga kiring.",
    taskUz: "`cd s01/logs` buyrug'i orqali logs papkasiga o'ting.",
    expectedSql: "cd s01/logs",
    hint: "`cd s01/logs` deb yozing.",
    tags: ["CD", "LOGS", "NAVIGATION"],
    solutions: ["cd s01/logs"]
  },
  {
    id: 45,
    title: "mkdir Buyrug'i Qo'llanmasini Ko'rish",
    story: "`mkdir` buyrug'ining barcha ruxsat va ota papka bayroqlarini tekshiring.",
    taskUz: "`man mkdir` buyrug'ini bering.",
    expectedSql: "man mkdir",
    hint: "`man mkdir` deb yozing.",
    tags: ["MAN", "MKDIR", "DOCUMENTATION"],
    solutions: ["man mkdir"]
  }
];

s3_tasks.forEach(t => allQuestions.push({ ...t, sector: 3, difficulty: "3-Qavat • O'rta", source: "S01 Task 3 • mkdir & rmdir" }));

// ============================================================================
// SECTOR 4: FAYLLAR YARATISH VA VAQT TAMG'ASI (TOUCH & STAT) (Q46 - Q60)
// ============================================================================
const s4_tasks = [
  {
    id: 46,
    title: "Yangi Bo'sh Fayl Yaratish (touch system.log)",
    story: "Seminar 1: `s01/logs` papkasi ichida asosiy tizim log faylini oching.",
    taskUz: "`touch` buyrug'i orqali `system.log` nomli bo'sh fayl yarating.",
    expectedSql: "touch system.log",
    hint: "`touch system.log` deb yozing.",
    tags: ["TOUCH", "LOG", "FILE CREATION"],
    solutions: ["touch system.log"]
  },
  {
    id: 47,
    title: "Autentifikatsiya Logini Yaratish (touch auth.log)",
    story: "Foydalanuvchilar kirishini qayd etuvchi `auth.log` faylini oching.",
    taskUz: "`touch auth.log` buyrug'i orqali fayl yarating.",
    expectedSql: "touch auth.log",
    hint: "`touch auth.log` deb yozing.",
    tags: ["TOUCH", "AUTH LOG", "FILE CREATION"],
    solutions: ["touch auth.log"]
  },
  {
    id: 48,
    title: "Xatoliklar Logini Yaratish (touch error.log)",
    story: "Kritik xatoliklarni yig'uvchi `error.log` faylini yarating.",
    taskUz: "`touch error.log` buyrug'ini bering.",
    expectedSql: "touch error.log",
    hint: "`touch error.log` deb yozing.",
    tags: ["TOUCH", "ERROR LOG", "FILE CREATION"],
    solutions: ["touch error.log"]
  },
  {
    id: 49,
    title: "Fayl Metama'lumotlarini Ko'rish (stat system.log)",
    story: "Faylning Inode raqami, havolalar soni va aniq vaqt tamg'asini ko'ring.",
    taskUz: "`stat system.log` buyrug'i orqali fayl ma'lumotlarini chiqaring.",
    expectedSql: "stat system.log",
    hint: "`stat system.log` deb yozing.",
    tags: ["STAT", "INODE", "METADATA"],
    solutions: ["stat system.log"]
  },
  {
    id: 50,
    title: "Vaqt Tamg'asini Sun'iy O'zgartirish (touch -d)",
    story: "Seminar 1 topshirig'i: Fayl sanasini o'tmishdagi sanaga o'zgartiring (eski log simulyatsiyasi).",
    taskUz: "`system.log` fayli sanasini `touch -d \"2025-01-08\" system.log` orqali o'zgartiring.",
    expectedSql: "touch -d \"2025-01-08\" system.log",
    hint: "`touch -d \"2025-01-08\" system.log` deb yozing.",
    tags: ["TOUCH -D", "TIMESTAMP", "SIMULATION"],
    solutions: ["touch -d \"2025-01-08\" system.log", "touch -d '2025-01-08' system.log"]
  },
  {
    id: 51,
    title: "Eski 'old1.txt' Faylini Yaratish",
    story: "Qidiruv va tozalash mashqi uchun 7 kundan eski `old1.txt` faylini hosil qiling.",
    taskUz: "`touch -d \"2025-01-01\" old1.txt` buyrug'ini bering.",
    expectedSql: "touch -d \"2025-01-01\" old1.txt",
    hint: "`touch -d \"2025-01-01\" old1.txt` deb yozing.",
    tags: ["TOUCH -D", "OLD FILE", "TEST"],
    solutions: ["touch -d \"2025-01-01\" old1.txt", "touch -d '2025-01-01' old1.txt"]
  },
  {
    id: 52,
    title: "Ikkinchi Eski 'old2.txt' Faylini Yaratish",
    story: "Yana bitta eskirgan `old2.txt` faylini o'tmish sanasi bilan oching.",
    taskUz: "`touch -d \"2025-01-02\" old2.txt` buyrug'ini bering.",
    expectedSql: "touch -d \"2025-01-02\" old2.txt",
    hint: "`touch -d \"2025-01-02\" old2.txt` deb yozing.",
    tags: ["TOUCH -D", "OLD FILE", "TEST"],
    solutions: ["touch -d \"2025-01-02\" old2.txt", "touch -d '2025-01-02' old2.txt"]
  },
  {
    id: 53,
    title: "Yangi 'recent.txt' Faylini Yaratish",
    story: "Bugungi yangi sanaga ega `recent.txt` faylini yarating.",
    taskUz: "`touch recent.txt` buyrug'ini bering.",
    expectedSql: "touch recent.txt",
    hint: "`touch recent.txt` deb yozing.",
    tags: ["TOUCH", "RECENT", "FILE CREATION"],
    solutions: ["touch recent.txt"]
  },
  {
    id: 54,
    title: "Bir Nechta Bo'sh Faylni Bitta Qatorda Yaratish",
    story: "Bir vaqtning o'zida `f1.txt f2.txt f3.txt` fayllarini bitta `touch` bilan oching.",
    taskUz: "`touch f1.txt f2.txt f3.txt` buyrug'ini bering.",
    expectedSql: "touch f1.txt f2.txt f3.txt",
    hint: "`touch f1.txt f2.txt f3.txt` deb yozing.",
    tags: ["TOUCH", "MULTIPLE", "FILES"],
    solutions: ["touch f1.txt f2.txt f3.txt"]
  },
  {
    id: 55,
    title: "Fayllar Ro'yxatini Sana Bo'yicha Ko'rish (ls -lt)",
    story: "Yaratilgan fayllar sanalarining farqini uzun formatda tekshiring.",
    taskUz: "`ls -lt` buyrug'i orqali sanasi bo'yicha saralab chiqaring.",
    expectedSql: "ls -lt",
    hint: "`ls -lt` deb yozing.",
    tags: ["LS -LT", "TIMESTAMP", "LIST"],
    solutions: ["ls -lt", "ls -l -t"]
  },
  {
    id: 56,
    title: "stat Bilan old1.txt Inode va Huquqlarini Tekshirish",
    story: "`old1.txt` faylining Inode va vaqt parametrlarini tahlil qiling.",
    taskUz: "`stat old1.txt` buyrug'ini bering.",
    expectedSql: "stat old1.txt",
    hint: "`stat old1.txt` deb yozing.",
    tags: ["STAT", "INODE", "AUDIT"],
    solutions: ["stat old1.txt"]
  },
  {
    id: 57,
    title: "Vaqt Tamg'asini Joriy Vaqtga Yangilash",
    story: "`touch` mavjud faylga berilsa, uning o'zgarish vaqti joriy daqiqaga yangilanadi.",
    taskUz: "`touch system.log` buyrug'i orqali vaqt tamg'asini joriy vaqtga yangilang.",
    expectedSql: "touch system.log",
    hint: "`touch system.log` deb yozing.",
    tags: ["TOUCH", "UPDATE MTIME", "FILE"],
    solutions: ["touch system.log"]
  },
  {
    id: 58,
    title: "Yangi 'audit.log' Faylini Yaratish",
    story: "Xavfsizlik tekshiruvlari uchun `audit.log` faylini oching.",
    taskUz: "`touch audit.log` buyrug'ini bering.",
    expectedSql: "touch audit.log",
    hint: "`touch audit.log` deb yozing.",
    tags: ["TOUCH", "AUDIT", "FILE"],
    solutions: ["touch audit.log"]
  },
  {
    id: 59,
    title: "Sinov Fayllarini O'chirish (rm f1.txt f2.txt f3.txt)",
    story: "Ortiqcha sinov fayllarini tozalab tashlang.",
    taskUz: "`rm f1.txt f2.txt f3.txt` buyrug'i orqali uchta faylni o'chiring.",
    expectedSql: "rm f1.txt f2.txt f3.txt",
    hint: "`rm f1.txt f2.txt f3.txt` deb yozing.",
    tags: ["RM", "CLEANUP", "FILES"],
    solutions: ["rm f1.txt f2.txt f3.txt"]
  },
  {
    id: 60,
    title: "touch Buyrug'i Qo'llanmasini Ko'rish",
    story: "`touch` buyrug'ining barcha vaqt formatlari haqida ma'lumot oling.",
    taskUz: "`man touch` buyrug'ini bering.",
    expectedSql: "man touch",
    hint: "`man touch` deb yozing.",
    tags: ["MAN", "TOUCH", "DOCUMENTATION"],
    solutions: ["man touch"]
  }
];

s4_tasks.forEach(t => allQuestions.push({ ...t, sector: 4, difficulty: "4-Qavat • O'rta+", source: "S01 Task 4 • touch & stat" }));

// ============================================================================
// SECTOR 5: MATN KO'RISH VA OQIMLAR (CAT & REDIRECTION) (Q61 - Q75)
// ============================================================================
const s5_tasks = [
  {
    id: 61,
    title: "Fayl Tarkibini Ekranga Chiqarish (cat readme.txt)",
    story: "Uy katalogidagi `readme.txt` fayli ichidagi xabarni to'liq o'qing.",
    taskUz: "`cat ~/readme.txt` buyrug'i orqali matnni ekranga chiqaring.",
    expectedSql: "cat ~/readme.txt",
    hint: "`cat ~/readme.txt` yoki `cat /home/student/readme.txt` deb yozing.",
    tags: ["CAT", "VIEW", "STDOUT"],
    solutions: ["cat ~/readme.txt", "cat /home/student/readme.txt"]
  },
  {
    id: 62,
    title: "Tizim Hostini Ekranga Chiqarish (cat /etc/hostname)",
    story: "Linux da ko'p parametrlar oddiy fayl ko'rinishida `/etc` da saqlanadi.",
    taskUz: "`cat /etc/hostname` buyrug'i orqali mashina nomini ko'ring.",
    expectedSql: "cat /etc/hostname",
    hint: "`cat /etc/hostname` deb yozing.",
    tags: ["CAT", "ETC", "HOSTNAME"],
    solutions: ["cat /etc/hostname"]
  },
  {
    id: 63,
    title: "Linux Versiyasini Ko'rish (cat /etc/os-release)",
    story: "Serverda qaysi Debian distributivi o'rnatilganini fayldan o'qing.",
    taskUz: "`cat /etc/os-release` buyrug'ini bering.",
    expectedSql: "cat /etc/os-release",
    hint: "`cat /etc/os-release` deb yozing.",
    tags: ["CAT", "OS RELEASE", "SYSTEM"],
    solutions: ["cat /etc/os-release"]
  },
  {
    id: 64,
    title: "Foydalanuvchilar Ro'yxatini Ko'rish (cat /etc/passwd)",
    story: "Tizim hisoblari ro'yxatini saqlovchi mashhur `/etc/passwd` faylini o'qing.",
    taskUz: "`cat /etc/passwd` buyrug'ini bering.",
    expectedSql: "cat /etc/passwd",
    hint: "`cat /etc/passwd` deb yozing.",
    tags: ["CAT", "PASSWD", "SECURITY"],
    solutions: ["cat /etc/passwd"]
  },
  {
    id: 65,
    title: "Faylga Qayta Yozish (echo > system.log)",
    story: "Eslatma: `>` operatori oqimni faylga yo'naltiradi va uni ustiga yozadi.",
    taskUz: "`echo \"INFO: Server ishga tushdi\" > system.log` buyrug'ini bering.",
    expectedSql: "echo \"INFO: Server ishga tushdi\" > system.log",
    hint: "`echo \"INFO: Server ishga tushdi\" > system.log` deb yozing.",
    tags: ["ECHO", "REDIRECT >", "TRUNCATE"],
    solutions: ["echo \"INFO: Server ishga tushdi\" > system.log", "echo 'INFO: Server ishga tushdi' > system.log"]
  },
  {
    id: 66,
    title: "Fayl Oxiriga Qo'shish (echo >> system.log)",
    story: "Eslatma: `>>` operatori mavjud matnni o'chirmasdan yangi qator qilib qo'shadi.",
    taskUz: "`echo \"WARNING: Xotira sarfi oshdi\" >> system.log` buyrug'ini bering.",
    expectedSql: "echo \"WARNING: Xotira sarfi oshdi\" >> system.log",
    hint: "`echo \"WARNING: Xotira sarfi oshdi\" >> system.log` deb yozing.",
    tags: ["ECHO", "REDIRECT >>", "APPEND"],
    solutions: ["echo \"WARNING: Xotira sarfi oshdi\" >> system.log", "echo 'WARNING: Xotira sarfi oshdi' >> system.log"]
  },
  {
    id: 67,
    title: "Yana Bitta Xatolik Qatorini Qo'shish (>> system.log)",
    story: "Audit uchun ERROR qatorini log fayl oxiriga qo'shing.",
    taskUz: "`echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log` buyrug'ini bering.",
    expectedSql: "echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log",
    hint: "`echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log` deb yozing.",
    tags: ["ECHO", "APPEND", "LOG"],
    solutions: ["echo \"ERROR: Port 80 ulanishi rad etildi\" >> system.log", "echo 'ERROR: Port 80 ulanishi rad etildi' >> system.log"]
  },
  {
    id: 68,
    title: "system.log Faylini O'qish (cat system.log)",
    story: "Yozilgan barcha yangi log yozuvlarini ekranga chiqarib tekshiring.",
    taskUz: "`cat system.log` buyrug'ini bering.",
    expectedSql: "cat system.log",
    hint: "`cat system.log` deb yozing.",
    tags: ["CAT", "LOG", "VIEW"],
    solutions: ["cat system.log"]
  },
  {
    id: 69,
    title: "Qator Raqamlari Bilan Ko'rish (cat -n system.log)",
    story: "Log qatorlarini qulay sanash uchun har bir qator oldiga raqam qo'ying.",
    taskUz: "`cat -n system.log` buyrug'i orqali qator raqamlari bilan chiqaring.",
    expectedSql: "cat -n system.log",
    hint: "`cat -n system.log` deb yozing.",
    tags: ["CAT -N", "LINE NUMBERS", "VIEW"],
    solutions: ["cat -n system.log"]
  },
  {
    id: 70,
    title: "auth.log ga Muvaffaqiyatli Kirish Qatorini Yozish",
    story: "Avtorizatsiya jurnali uchun yangi yozuv kiriting.",
    taskUz: "`echo \"Accepted password for admin\" > auth.log` buyrug'ini bering.",
    expectedSql: "echo \"Accepted password for admin\" > auth.log",
    hint: "`echo \"Accepted password for admin\" > auth.log` deb yozing.",
    tags: ["ECHO", "AUTH", "REDIRECT"],
    solutions: ["echo \"Accepted password for admin\" > auth.log", "echo 'Accepted password for admin' > auth.log"]
  },
  {
    id: 71,
    title: "auth.log ga Muvaffaqiyatsiz Urinishni Qo'shish (>> auth.log)",
    story: "Xavfsizlik tekshiruvi uchun noto'g'ri kirish urinishini qayd eting.",
    taskUz: "`echo \"Failed password for root from 10.0.0.1\" >> auth.log` buyrug'ini bering.",
    expectedSql: "echo \"Failed password for root from 10.0.0.1\" >> auth.log",
    hint: "`echo \"Failed password for root from 10.0.0.1\" >> auth.log` deb yozing.",
    tags: ["ECHO", "FAILED LOGIN", "APPEND"],
    solutions: ["echo \"Failed password for root from 10.0.0.1\" >> auth.log", "echo 'Failed password for root from 10.0.0.1' >> auth.log"]
  },
  {
    id: 72,
    title: "Ikkita Faylni Birlashtirib Ko'rish (cat system.log auth.log)",
    story: "`cat` (concatenate) buyrug'i bir vaqtda bir nechta faylni ketma-ket ulab chiqaradi.",
    taskUz: "`cat system.log auth.log` buyrug'ini bering.",
    expectedSql: "cat system.log auth.log",
    hint: "`cat system.log auth.log` deb yozing.",
    tags: ["CAT", "CONCATENATE", "MULTIPLE"],
    solutions: ["cat system.log auth.log"]
  },
  {
    id: 73,
    title: "Katta Log Faylini Sahifama-sahifa Ko'rish (more /var/log/syslog)",
    story: "Ekrandan toshib ketmasligi uchun matnni sahifalab ko'ruvchi `more` ni sinang.",
    taskUz: "`more /var/log/syslog` buyrug'ini bering.",
    expectedSql: "more /var/log/syslog",
    hint: "`more /var/log/syslog` deb yozing.",
    tags: ["MORE", "PAGING", "VIEW"],
    solutions: ["more /var/log/syslog"]
  },
  {
    id: 74,
    title: "Qulay Qidiruv Bilan Matn Ko'rish (less /var/log/syslog)",
    story: "Kursor va `/qidiruv` imkoniyatiga ega professional `less` dasturini oching.",
    taskUz: "`less /var/log/syslog` buyrug'ini bering.",
    expectedSql: "less /var/log/syslog",
    hint: "`less /var/log/syslog` deb yozing.",
    tags: ["LESS", "ADVANCED VIEW", "PAGING"],
    solutions: ["less /var/log/syslog"]
  },
  {
    id: 75,
    title: "cat Buyrug'i Qo'llanmasini Ko'rish",
    story: "`cat` buyrug'ining barcha maxsus belgilar va raqamlash parametrlarini o'rganing.",
    taskUz: "`man cat` buyrug'ini bering.",
    expectedSql: "man cat",
    hint: "`man cat` deb yozing.",
    tags: ["MAN", "CAT", "DOCUMENTATION"],
    solutions: ["man cat"]
  }
];

s5_tasks.forEach(t => allQuestions.push({ ...t, sector: 5, difficulty: "5-Qavat • Ekspert", source: "S01 Task 5 • cat, redirection & less" }));

// ============================================================================
// SECTOR 6: BOSHI VA OXIRI (HEAD & TAIL) (Q76 - Q90)
// ============================================================================
const s6_tasks = [
  {
    id: 76,
    title: "Faylning Dastlabki 10 Qatorini Ko'rish (head)",
    story: "`head` buyrug'i parametr berilmasa standart dastlabki 10 ta qatorni chiqaradi.",
    taskUz: "`/var/log/syslog` faylining dastlabki 10 qatorini ekranga chiqaring.",
    expectedSql: "head /var/log/syslog",
    hint: "`head /var/log/syslog` deb yozing.",
    tags: ["HEAD", "DEFAULT 10", "LOG"],
    solutions: ["head /var/log/syslog"]
  },
  {
    id: 77,
    title: "Faqat Dastlabki 5 Qatorni Ko'rish (head -n 5)",
    story: "Seminar 1 topshirig'i: log faylning faqat boshlang'ich 5 qatorini ajratib oling.",
    taskUz: "`head -n 5 /var/log/syslog` buyrug'ini bering.",
    expectedSql: "head -n 5 /var/log/syslog",
    hint: "`head -n 5 /var/log/syslog` deb yozing.",
    tags: ["HEAD -N 5", "FIRST LINES", "FILTER"],
    solutions: ["head -n 5 /var/log/syslog", "head -5 /var/log/syslog"]
  },
  {
    id: 78,
    title: "Dastlabki 3 Qatorni Ko'rish (head -n 3)",
    story: "Tizim yuklanishidagi ilk 3 ta muhim voqeani ajrating.",
    taskUz: "`head -n 3 /var/log/syslog` buyrug'ini bering.",
    expectedSql: "head -n 3 /var/log/syslog",
    hint: "`head -n 3 /var/log/syslog` deb yozing.",
    tags: ["HEAD -N 3", "LINES", "LOG"],
    solutions: ["head -n 3 /var/log/syslog", "head -3 /var/log/syslog"]
  },
  {
    id: 79,
    title: "Faylning Oxirgi 10 Qatorini Ko'rish (tail)",
    story: "`tail` parametri ko'rsatilmasa avtomatik eng oxirgi 10 ta qatorni chiqaradi.",
    taskUz: "`/var/log/syslog` faylining eng oxirgi 10 ta qatorini chiqaring.",
    expectedSql: "tail /var/log/syslog",
    hint: "`tail /var/log/syslog` deb yozing.",
    tags: ["TAIL", "LAST LINES", "LOG"],
    solutions: ["tail /var/log/syslog"]
  },
  {
    id: 80,
    title: "Faqat Oxirgi 5 Qatorni Ko'rish (tail -n 5)",
    story: "Seminar 1 topshirig'i: Serverdagi eng oxirgi 5 ta voqea yozuvini ko'ring.",
    taskUz: "`tail -n 5 /var/log/syslog` buyrug'ini bering.",
    expectedSql: "tail -n 5 /var/log/syslog",
    hint: "`tail -n 5 /var/log/syslog` deb yozing.",
    tags: ["TAIL -N 5", "LAST 5", "FILTER"],
    solutions: ["tail -n 5 /var/log/syslog", "tail -5 /var/log/syslog"]
  },
  {
    id: 81,
    title: "Faqat Oxirgi 2 Qatorni Ko'rish (tail -n 2)",
    story: "Eng oxirgi ikkita faollikni nazorat qiling.",
    taskUz: "`tail -n 2 /var/log/syslog` buyrug'ini bering.",
    expectedSql: "tail -n 2 /var/log/syslog",
    hint: "`tail -n 2 /var/log/syslog` deb yozing.",
    tags: ["TAIL -N 2", "RECENT", "LOG"],
    solutions: ["tail -n 2 /var/log/syslog", "tail -2 /var/log/syslog"]
  },
  {
    id: 82,
    title: "auth.log Faylining Oxirgi 3 Qatorini Ko'rish",
    story: "Avtorizatsiya jurnali bo'yicha so'nggi 3 ta urinishni tekshiring.",
    taskUz: "`tail -n 3 /var/log/auth.log` buyrug'ini bering.",
    expectedSql: "tail -n 3 /var/log/auth.log",
    hint: "`tail -n 3 /var/log/auth.log` deb yozing.",
    tags: ["TAIL -N 3", "AUTH LOG", "SECURITY"],
    solutions: ["tail -n 3 /var/log/auth.log", "tail -3 /var/log/auth.log"]
  },
  {
    id: 83,
    title: "Oxirgi Qatorlarni Jonli Kuzatish Rejimi (tail -f)",
    story: "SysAdminlar real vaqtda yangi tushayotgan loglarni `tail -f` (follow) orqali kuzatadi.",
    taskUz: "`/var/log/syslog` faylini follow rejimida kuzatuvchi `tail -f` buyrug'ini bering.",
    expectedSql: "tail -f /var/log/syslog",
    hint: "`tail -f /var/log/syslog` deb yozing.",
    tags: ["TAIL -F", "FOLLOW", "MONITORING"],
    solutions: ["tail -f /var/log/syslog", "tail -F /var/log/syslog"]
  },
  {
    id: 84,
    title: "Boshlang'ich 1 Qatorni Chiqarish (head -n 1)",
    story: "Log faylning eng birinchi ochilish qatorini ajrating.",
    taskUz: "`head -n 1 /var/log/syslog` buyrug'ini bering.",
    expectedSql: "head -n 1 /var/log/syslog",
    hint: "`head -n 1 /var/log/syslog` deb yozing.",
    tags: ["HEAD -N 1", "FIRST LINE", "LOG"],
    solutions: ["head -n 1 /var/log/syslog", "head -1 /var/log/syslog"]
  },
  {
    id: 85,
    title: "Eng Oxirgi 1 Qatorni Chiqarish (tail -n 1)",
    story: "Jurnaldagi eng so'nggi yozilgan yagona qatorni oling.",
    taskUz: "`tail -n 1 /var/log/syslog` buyrug'ini bering.",
    expectedSql: "tail -n 1 /var/log/syslog",
    hint: "`tail -n 1 /var/log/syslog` deb yozing.",
    tags: ["TAIL -N 1", "LAST LINE", "LOG"],
    solutions: ["tail -n 1 /var/log/syslog", "tail -1 /var/log/syslog"]
  },
  {
    id: 86,
    title: "Dastlabki 5 Qatorni Yangi Faylga Saqlash",
    story: "Log boshidagi 5 qatorni `head.txt` ga yo'naltiring.",
    taskUz: "`head -n 5 /var/log/syslog > head.txt` buyrug'ini bering.",
    expectedSql: "head -n 5 /var/log/syslog > head.txt",
    hint: "`head -n 5 /var/log/syslog > head.txt` deb yozing.",
    tags: ["HEAD", "REDIRECT >", "EXTRACT"],
    solutions: ["head -n 5 /var/log/syslog > head.txt"]
  },
  {
    id: 87,
    title: "Oxirgi 5 Qatorni Yangi Faylga Saqlash",
    story: "Log oxiridagi 5 qatorni `tail.txt` ga yo'naltiring.",
    taskUz: "`tail -n 5 /var/log/syslog > tail.txt` buyrug'ini bering.",
    expectedSql: "tail -n 5 /var/log/syslog > tail.txt",
    hint: "`tail -n 5 /var/log/syslog > tail.txt` deb yozing.",
    tags: ["TAIL", "REDIRECT >", "EXTRACT"],
    solutions: ["tail -n 5 /var/log/syslog > tail.txt"]
  },
  {
    id: 88,
    title: "Ajratilgan Bosh Qatorlarni Tekshirish",
    story: "Saqlangan `head.txt` faylini o'qing.",
    taskUz: "`cat head.txt` buyrug'ini bering.",
    expectedSql: "cat head.txt",
    hint: "`cat head.txt` deb yozing.",
    tags: ["CAT", "HEAD.TXT", "VERIFY"],
    solutions: ["cat head.txt"]
  },
  {
    id: 89,
    title: "Ajratilgan Oxirgi Qatorlarni Tekshirish",
    story: "Saqlangan `tail.txt` faylini o'qing.",
    taskUz: "`cat tail.txt` buyrug'ini bering.",
    expectedSql: "cat tail.txt",
    hint: "`cat tail.txt` deb yozing.",
    tags: ["CAT", "TAIL.TXT", "VERIFY"],
    solutions: ["cat tail.txt"]
  },
  {
    id: 90,
    title: "head va tail Qo'llanmasini Ko'rish",
    story: "`head` buyrug'ining to'liq qo'llanmasini oching.",
    taskUz: "`man head` buyrug'ini bering.",
    expectedSql: "man head",
    hint: "`man head` deb yozing.",
    tags: ["MAN", "HEAD", "DOCUMENTATION"],
    solutions: ["man head"]
  }
];

s6_tasks.forEach(t => allQuestions.push({ ...t, sector: 6, difficulty: "6-Qavat • Ilg'or", source: "S01 Task 6 • head & tail" }));

// ============================================================================
// SECTOR 7: MATN STATISTIKASI VA HISOBLASH (WC) (Q91 - Q105)
// ============================================================================
const s7_tasks = [
  {
    id: 91,
    title: "Fayl Qatorlari Sonini Sanash (wc -l)",
    story: "Seminar 1: `/var/log/syslog` faylida jami nechta qator borligini aniqlang.",
    taskUz: "`wc -l /var/log/syslog` buyrug'i orqali qatorlar sonini chiqaring.",
    expectedSql: "wc -l /var/log/syslog",
    hint: "`wc -l /var/log/syslog` deb yozing.",
    tags: ["WC -L", "LINE COUNT", "METRICS"],
    solutions: ["wc -l /var/log/syslog"]
  },
  {
    id: 92,
    title: "Fayl So'zlar Sonini Sanash (wc -w)",
    story: "Jurnaldagi jami bo'shliqlar bilan ajratilgan so'zlar miqdorini sanang.",
    taskUz: "`wc -w /var/log/syslog` buyrug'i orqali so'zlar sonini chiqaring.",
    expectedSql: "wc -w /var/log/syslog",
    hint: "`wc -w /var/log/syslog` deb yozing.",
    tags: ["WC -W", "WORD COUNT", "METRICS"],
    solutions: ["wc -w /var/log/syslog"]
  },
  {
    id: 93,
    title: "Fayl Baytlar (Hajmi) Sonini Sanash (wc -c)",
    story: "Fayl diskda necha bayt hajmga ega ekanini `wc -c` orqali o'lchang.",
    taskUz: "`wc -c /var/log/syslog` buyrug'i orqali baytlar sonini chiqaring.",
    expectedSql: "wc -c /var/log/syslog",
    hint: "`wc -c /var/log/syslog` deb yozing.",
    tags: ["WC -C", "BYTE COUNT", "SIZE"],
    solutions: ["wc -c /var/log/syslog"]
  },
  {
    id: 94,
    title: "To'liq Statistika (wc filename)",
    story: "Parametrsiz `wc` qatorlar, so'zlar va baytlar sonini bir vaqtda chiqaradi.",
    taskUz: "`/var/log/syslog` fayliga nisbatan parametrsiz `wc` buyrug'ini bering.",
    expectedSql: "wc /var/log/syslog",
    hint: "`wc /var/log/syslog` deb yozing.",
    tags: ["WC", "SUMMARY", "METRICS"],
    solutions: ["wc /var/log/syslog"]
  },
  {
    id: 95,
    title: "auth.log Qatorlari Sonini Sanash",
    story: "Avtorizatsiya jurnali necha qatordan iboratligini hisoblang.",
    taskUz: "`wc -l /var/log/auth.log` buyrug'ini bering.",
    expectedSql: "wc -l /var/log/auth.log",
    hint: "`wc -l /var/log/auth.log` deb yozing.",
    tags: ["WC -L", "AUTH", "LINES"],
    solutions: ["wc -l /var/log/auth.log"]
  },
  {
    id: 96,
    title: "dpkg.log Qatorlari Sonini Sanash",
    story: "O'rnatilgan paketlar tarixi nechta hodisani o'z ichiga olganini sanang.",
    taskUz: "`wc -l /var/log/dpkg.log` buyrug'ini bering.",
    expectedSql: "wc -l /var/log/dpkg.log",
    hint: "`wc -l /var/log/dpkg.log` deb yozing.",
    tags: ["WC -L", "DPKG", "LINES"],
    solutions: ["wc -l /var/log/dpkg.log"]
  },
  {
    id: 97,
    title: "head.txt Qatorlari Sonini Sanash",
    story: "Avval ajratib olingan `head.txt` faylida aynan 5 ta qator borligini tasdiqlang.",
    taskUz: "`wc -l head.txt` buyrug'ini bering.",
    expectedSql: "wc -l head.txt",
    hint: "`wc -l head.txt` deb yozing.",
    tags: ["WC -L", "HEAD.TXT", "VERIFY"],
    solutions: ["wc -l head.txt"]
  },
  {
    id: 98,
    title: "tail.txt Qatorlari Sonini Sanash",
    story: "`tail.txt` faylida ham 5 ta qator borligini tekshiring.",
    taskUz: "`wc -l tail.txt` buyrug'ini bering.",
    expectedSql: "wc -l tail.txt",
    hint: "`wc -l tail.txt` deb yozing.",
    tags: ["WC -L", "TAIL.TXT", "VERIFY"],
    solutions: ["wc -l tail.txt"]
  },
  {
    id: 99,
    title: "Bir Nechta Faylni Birgalikda Sanash",
    story: "`wc` bir nechta faylni kiritganda, har biri va yakuniy `total` ni chiqaradi.",
    taskUz: "`wc -l head.txt tail.txt` buyrug'ini bering.",
    expectedSql: "wc -l head.txt tail.txt",
    hint: "`wc -l head.txt tail.txt` deb yozing.",
    tags: ["WC -L", "MULTIPLE", "TOTAL"],
    solutions: ["wc -l head.txt tail.txt"]
  },
  {
    id: 100,
    title: "readme.txt So'zlari Sonini Sanash",
    story: "Uy papkasidagi yo'riqnomada nechta so'z borligini sanang.",
    taskUz: "`wc -w ~/readme.txt` buyrug'ini bering.",
    expectedSql: "wc -w ~/readme.txt",
    hint: "`wc -w ~/readme.txt` yoki `wc -w /home/student/readme.txt` deb yozing.",
    tags: ["WC -W", "WORDS", "README"],
    solutions: ["wc -w ~/readme.txt", "wc -w /home/student/readme.txt"]
  },
  {
    id: 101,
    title: "Konfiguratsiyalar (/etc/passwd) Qatorlarini Sanash",
    story: "Tizimda ro'yxatdan o'tgan foydalanuvchilar qatorlari sonini oling.",
    taskUz: "`wc -l /etc/passwd` buyrug'ini bering.",
    expectedSql: "wc -l /etc/passwd",
    hint: "`wc -l /etc/passwd` deb yozing.",
    tags: ["WC -L", "PASSWD", "USERS"],
    solutions: ["wc -l /etc/passwd"]
  },
  {
    id: 102,
    title: "Fayl Belgilar (Characters) Sonini Sanash (wc -m)",
    story: "Harflar va belgilarni hisoblash uchun `-m` bayrog'ini bering.",
    taskUz: "`wc -m head.txt` buyrug'ini bering.",
    expectedSql: "wc -m head.txt",
    hint: "`wc -m head.txt` deb yozing.",
    tags: ["WC -M", "CHARS", "METRICS"],
    solutions: ["wc -m head.txt"]
  },
  {
    id: 103,
    title: "Sanash Natijasini Faylga Saqlash",
    story: "Hisoblangan statistika sonini `stats.txt` ga yo'naltiring.",
    taskUz: "`wc -l /var/log/syslog > stats.txt` buyrug'ini bering.",
    expectedSql: "wc -l /var/log/syslog > stats.txt",
    hint: "`wc -l /var/log/syslog > stats.txt` deb yozing.",
    tags: ["WC", "REDIRECT >", "STATS"],
    solutions: ["wc -l /var/log/syslog > stats.txt"]
  },
  {
    id: 104,
    title: "Saqlangan stats.txt Faylini O'qish",
    story: "Statistika yozilgan faylni `cat` bilan ko'ring.",
    taskUz: "`cat stats.txt` buyrug'ini bering.",
    expectedSql: "cat stats.txt",
    hint: "`cat stats.txt` deb yozing.",
    tags: ["CAT", "STATS.TXT", "VERIFY"],
    solutions: ["cat stats.txt"]
  },
  {
    id: 105,
    title: "wc Buyrug'i Qo'llanmasini Ko'rish",
    story: "`wc` buyrug'ining barcha bayroqlari haqida man sahifasini oching.",
    taskUz: "`man wc` buyrug'ini bering.",
    expectedSql: "man wc",
    hint: "`man wc` deb yozing.",
    tags: ["MAN", "WC", "DOCUMENTATION"],
    solutions: ["man wc"]
  }
];

s7_tasks.forEach(t => allQuestions.push({ ...t, sector: 7, difficulty: "7-Qavat • Ilg'or", source: "S01 Task 7 • wc (Word Count)" }));

// ============================================================================
// SECTOR 8: NUSXALASH VA O'CHIRISH (CP, MV, RM) (Q106 - Q120)
// ============================================================================
const s8_tasks = [
  {
    id: 106,
    title: "Fayldan Nusxa Olish (cp system.log to archive)",
    story: "Seminar 1: `system.log` faylini `s01/archive` papkasiga ko'chiring.",
    taskUz: "`cp system.log ../archive/` buyrug'i orqali nusxa oling.",
    expectedSql: "cp system.log ../archive/",
    hint: "`cp system.log ../archive/` deb yozing.",
    tags: ["CP", "COPY", "FILE MANAGEMENT"],
    solutions: ["cp system.log ../archive/", "cp system.log ../archive"]
  },
  {
    id: 107,
    title: "Nusxa Olingan Fayl Nomini O'zgartirish (mv)",
    story: "Seminar 1: Arxivdagi nusxani `system.log.bak` deb qayta nomlang.",
    taskUz: "`mv ../archive/system.log ../archive/system.log.bak` buyrug'ini bering.",
    expectedSql: "mv ../archive/system.log ../archive/system.log.bak",
    hint: "`mv ../archive/system.log ../archive/system.log.bak` deb yozing.",
    tags: ["MV", "RENAME", "FILE MANAGEMENT"],
    solutions: ["mv ../archive/system.log ../archive/system.log.bak"]
  },
  {
    id: 108,
    title: "Barcha Loglarni Bitta Buyruqda Nusxalash (cp *.log)",
    story: "Seminar 1: Barcha `.log` bilan tugovchi fayllarni arxivga nusxalang.",
    taskUz: "`cp *.log ../archive/` buyrug'ini bering.",
    expectedSql: "cp *.log ../archive/",
    hint: "`cp *.log ../archive/` deb yozing.",
    tags: ["CP", "WILDCARD *", "BULK COPY"],
    solutions: ["cp *.log ../archive/", "cp *.log ../archive"]
  },
  {
    id: 109,
    title: "error.log Faylini O'chirish (rm error.log)",
    story: "Seminar 1: Keraksiz bo'lgan `error.log` faylini xavfsiz o'chiring.",
    taskUz: "`rm error.log` buyrug'ini bering.",
    expectedSql: "rm error.log",
    hint: "`rm error.log` deb yozing.",
    tags: ["RM", "DELETE", "FILE"],
    solutions: ["rm error.log", "rm -i error.log", "rm -f error.log"]
  },
  {
    id: 110,
    title: "O'chirilganini Tekshirish (ls)",
    story: "`error.log` haqiqatda yo'qolganini tasdiqlash uchun ro'yxatni ko'ring.",
    taskUz: "`ls` buyrug'ini bering.",
    expectedSql: "ls",
    hint: "`ls` deb yozing.",
    tags: ["LS", "VERIFY", "CLEANUP"],
    solutions: ["ls"]
  },
  {
    id: 111,
    title: "Arxiv Papkasi Tarkibini Tekshirish (ls ../archive)",
    story: "Arxiv papkasida barcha nusxalangan fayllar borligini tekshiring.",
    taskUz: "`ls ../archive` buyrug'ini bering.",
    expectedSql: "ls ../archive",
    hint: "`ls ../archive` deb yozing.",
    tags: ["LS", "ARCHIVE", "VERIFY"],
    solutions: ["ls ../archive", "ls ../archive/"]
  },
  {
    id: 112,
    title: "Faylni Yangi Nom Bilan Joyida Nusxalash",
    story: "`system.log` dan `system.copy` nomli zaxira oling.",
    taskUz: "`cp system.log system.copy` buyrug'ini bering.",
    expectedSql: "cp system.log system.copy",
    hint: "`cp system.log system.copy` deb yozing.",
    tags: ["CP", "DUPLICATE", "BACKUP"],
    solutions: ["cp system.log system.copy"]
  },
  {
    id: 113,
    title: "Fayl Nomini O'zgartirish (mv system.copy to system.renamed)",
    story: "`system.copy` faylini `system.renamed` deb o'zgartiring.",
    taskUz: "`mv system.copy system.renamed` buyrug'ini bering.",
    expectedSql: "mv system.copy system.renamed",
    hint: "`mv system.copy system.renamed` deb yozing.",
    tags: ["MV", "RENAME", "FILE"],
    solutions: ["mv system.copy system.renamed"]
  },
  {
    id: 114,
    title: "Faylni reports Papkasiga Ko'chirish",
    story: "`system.renamed` faylini `../reports/` katalogiga ko'chiring.",
    taskUz: "`mv system.renamed ../reports/` buyrug'ini bering.",
    expectedSql: "mv system.renamed ../reports/",
    hint: "`mv system.renamed ../reports/` deb yozing.",
    tags: ["MV", "MOVE", "REPORTS"],
    solutions: ["mv system.renamed ../reports/", "mv system.renamed ../reports"]
  },
  {
    id: 115,
    title: "reports Papkasidagi Faylni Ko'rish",
    story: "`../reports` katalogida ko'chirilgan faylni tekshiring.",
    taskUz: "`ls ../reports` buyrug'ini bering.",
    expectedSql: "ls ../reports",
    hint: "`ls ../reports` deb yozing.",
    tags: ["LS", "REPORTS", "VERIFY"],
    solutions: ["ls ../reports"]
  },
  {
    id: 116,
    title: "Papkani Butunlay Rekursiv Nusxalash (cp -r)",
    story: "Eslatma: papkalarni nusxalashda rekursiv `-r` bayrog'i shartdir.",
    taskUz: "`cp -r ../reports ../reports_backup` buyrug'ini bering.",
    expectedSql: "cp -r ../reports ../reports_backup",
    hint: "`cp -r ../reports ../reports_backup` deb yozing.",
    tags: ["CP -R", "RECURSIVE", "DIRECTORY"],
    solutions: ["cp -r ../reports ../reports_backup"]
  },
  {
    id: 117,
    title: "Nusxa Olingan Papkani Rekursiv O'chirish (rm -r)",
    story: "Ortiqcha zaxira papkani `rm -r` bilan o'chirib tashlang.",
    taskUz: "`rm -r ../reports_backup` buyrug'ini bering.",
    expectedSql: "rm -r ../reports_backup",
    hint: "`rm -r ../reports_backup` deb yozing.",
    tags: ["RM -R", "RECURSIVE DELETE", "CLEANUP"],
    solutions: ["rm -r ../reports_backup", "rm -rf ../reports_backup"]
  },
  {
    id: 118,
    title: "head.txt va tail.txt Fayllarini O'chirish",
    story: "Vaqtinchalik matn bo'laklarini tozalang.",
    taskUz: "`rm head.txt tail.txt` buyrug'ini bering.",
    expectedSql: "rm head.txt tail.txt",
    hint: "`rm head.txt tail.txt` deb yozing.",
    tags: ["RM", "MULTIPLE", "CLEANUP"],
    solutions: ["rm head.txt tail.txt"]
  },
  {
    id: 119,
    title: "stats.txt Faylini O'chirish",
    story: "Oraliq statistika faylini ham olib tashlang.",
    taskUz: "`rm stats.txt` buyrug'ini bering.",
    expectedSql: "rm stats.txt",
    hint: "`rm stats.txt` deb yozing.",
    tags: ["RM", "STATS", "CLEANUP"],
    solutions: ["rm stats.txt"]
  },
  {
    id: 120,
    title: "cp Buyrug'i Qo'llanmasini Ko'rish",
    story: "`cp` buyrug'ining barcha xavfsizlik va zaxiralash bayroqlarini man da o'rganing.",
    taskUz: "`man cp` buyrug'ini bering.",
    expectedSql: "man cp",
    hint: "`man cp` deb yozing.",
    tags: ["MAN", "CP", "DOCUMENTATION"],
    solutions: ["man cp"]
  }
];

s8_tasks.forEach(t => allQuestions.push({ ...t, sector: 8, difficulty: "8-Qavat • Ekspert", source: "S01 Task 8 • cp, mv & rm" }));

// ============================================================================
// SECTOR 9: HAVOLALAR: HARD VS SOFT LINK (LN & INODES) (Q121 - Q135)
// ============================================================================
const s9_tasks = [
  {
    id: 121,
    title: "Hard Link Yaratish (ln system.log system_hardlink.log)",
    story: "Seminar 1: `system.log` fayliga aynan bir xil Inodeni bo'lishuvchi Hard Link yarating.",
    taskUz: "`ln system.log system_hardlink.log` buyrug'i orqali qattiq havola yarating.",
    expectedSql: "ln system.log system_hardlink.log",
    hint: "`ln system.log system_hardlink.log` deb yozing.",
    tags: ["LN", "HARD LINK", "INODE"],
    solutions: ["ln system.log system_hardlink.log"]
  },
  {
    id: 122,
    title: "Soft Link (Symlink) Yaratish (ln -s)",
    story: "Seminar 1: `system.log` fayliga yo'naltiruvchi ramziy Soft Link (symlink) yarating.",
    taskUz: "`ln -s system.log system_softlink.log` buyrug'ini bering.",
    expectedSql: "ln -s system.log system_softlink.log",
    hint: "`ln -s system.log system_softlink.log` deb yozing.",
    tags: ["LN -S", "SYMLINK", "POINTER"],
    solutions: ["ln -s system.log system_softlink.log"]
  },
  {
    id: 123,
    title: "Havolalarni Uzun Formatda Ko'rish (ls -l)",
    story: "Hard link soni 2 ga oshganini va Soft link `->` strelka bilan ko'rsatilganini kuzating.",
    taskUz: "`ls -l` buyrug'i orqali havolalar holatini chiqaring.",
    expectedSql: "ls -l",
    hint: "`ls -l` deb yozing.",
    tags: ["LS -L", "LINK COUNT", "SYMLINK ARROW"],
    solutions: ["ls -l"]
  },
  {
    id: 124,
    title: "Original Fayl Inodesini Ko'rish (stat system.log)",
    story: "Original faylning Inode raqami va link count (2 ta) ekanini tasdiqlang.",
    taskUz: "`stat system.log` buyrug'ini bering.",
    expectedSql: "stat system.log",
    hint: "`stat system.log` deb yozing.",
    tags: ["STAT", "INODE", "HARD LINK"],
    solutions: ["stat system.log"]
  },
  {
    id: 125,
    title: "Hard Link Inodesini Ko'rish (stat system_hardlink.log)",
    story: "Hard link original bilan 100% bir xil Inode raqamiga egaligini o'z ko'zingiz bilan ko'ring.",
    taskUz: "`stat system_hardlink.log` buyrug'ini bering.",
    expectedSql: "stat system_hardlink.log",
    hint: "`stat system_hardlink.log` deb yozing.",
    tags: ["STAT", "SAME INODE", "PROOF"],
    solutions: ["stat system_hardlink.log"]
  },
  {
    id: 126,
    title: "Soft Link Inodesini Ko'rish (stat system_softlink.log)",
    story: "Soft link alohida yangi Inode raqamiga egaligini tekshiring.",
    taskUz: "`stat system_softlink.log` buyrug'ini bering.",
    expectedSql: "stat system_softlink.log",
    hint: "`stat system_softlink.log` deb yozing.",
    tags: ["STAT", "DIFF INODE", "SYMLINK"],
    solutions: ["stat system_softlink.log"]
  },
  {
    id: 127,
    title: "Hard Link Orqali Matn O'qish",
    story: "Hard link orqali original fayl matnini o'qib ko'ring.",
    taskUz: "`cat system_hardlink.log` buyrug'ini bering.",
    expectedSql: "cat system_hardlink.log",
    hint: "`cat system_hardlink.log` deb yozing.",
    tags: ["CAT", "HARD LINK", "READ"],
    solutions: ["cat system_hardlink.log"]
  },
  {
    id: 128,
    title: "Soft Link Orqali Matn O'qish",
    story: "Soft link orqali ham original matn o'qilishini tasdiqlang.",
    taskUz: "`cat system_softlink.log` buyrug'ini bering.",
    expectedSql: "cat system_softlink.log",
    hint: "`cat system_softlink.log` deb yozing.",
    tags: ["CAT", "SOFT LINK", "READ"],
    solutions: ["cat system_softlink.log"]
  },
  {
    id: 129,
    title: "Original Faylni O'chirish (rm system.log)",
    story: "Seminar 1 muhim tajribasi: Original `system.log` faylini ataylab o'chirib tashlang!",
    taskUz: "`rm system.log` buyrug'ini bering.",
    expectedSql: "rm system.log",
    hint: "`rm system.log` deb yozing.",
    tags: ["RM", "DELETE ORIGINAL", "EXPERIMENT"],
    solutions: ["rm system.log"]
  },
  {
    id: 130,
    title: "Original O'chgach Hard Linkni O'qish (Hali Tirik!)",
    story: "Hayratlanarli natija: Hard link original o'chsa ham ma'lumotlarni to'liq saqlab qoladi!",
    taskUz: "`cat system_hardlink.log` buyrug'ini bering.",
    expectedSql: "cat system_hardlink.log",
    hint: "`cat system_hardlink.log` deb yozing.",
    tags: ["CAT", "HARD LINK SURVIVES", "INODE"],
    solutions: ["cat system_hardlink.log"]
  },
  {
    id: 131,
    title: "Original O'chgach Hard Link Link Soni (1 ga tushdi)",
    story: "`stat` orqali ko'ring: link count 2 dan 1 ga tushdi, xotira bloki tirik.",
    taskUz: "`stat system_hardlink.log` buyrug'ini bering.",
    expectedSql: "stat system_hardlink.log",
    hint: "`stat system_hardlink.log` deb yozing.",
    tags: ["STAT", "LINK DECREMENT", "INODE"],
    solutions: ["stat system_hardlink.log"]
  },
  {
    id: 132,
    title: "Tashqi Papkaga Soft Link Yaratish",
    story: "`/var/log/syslog` fayliga `syslog_link` nomli symlink bog'lang.",
    taskUz: "`ln -s /var/log/syslog syslog_link` buyrug'ini bering.",
    expectedSql: "ln -s /var/log/syslog syslog_link",
    hint: "`ln -s /var/log/syslog syslog_link` deb yozing.",
    tags: ["LN -S", "SYSTEM LOG", "SYMLINK"],
    solutions: ["ln -s /var/log/syslog syslog_link"]
  },
  {
    id: 133,
    title: "syslog_link Symlinkini Tekshirish",
    story: "Yangi bog'langan symlink orqali tizim logini o'qing.",
    taskUz: "`cat syslog_link` buyrug'ini bering.",
    expectedSql: "cat syslog_link",
    hint: "`cat syslog_link` deb yozing.",
    tags: ["CAT", "SYMLINK", "TEST"],
    solutions: ["cat syslog_link"]
  },
  {
    id: 134,
    title: "Ortiqcha Symlinkni O'chirish",
    story: "`syslog_link` ramziy havolasini o'chiring.",
    taskUz: "`rm syslog_link` buyrug'ini bering.",
    expectedSql: "rm syslog_link",
    hint: "`rm syslog_link` deb yozing.",
    tags: ["RM", "SYMLINK DELETE", "CLEANUP"],
    solutions: ["rm syslog_link"]
  },
  {
    id: 135,
    title: "ln Buyrug'i Qo'llanmasini Ko'rish",
    story: "`ln` buyrug'ining barcha Inode va nisbiy yo'l qoidalarini man dan o'rganing.",
    taskUz: "`man ln` buyrug'ini bering.",
    expectedSql: "man ln",
    hint: "`man ln` deb yozing.",
    tags: ["MAN", "LN", "DOCUMENTATION"],
    solutions: ["man ln"]
  }
];

s9_tasks.forEach(t => allQuestions.push({ ...t, sector: 9, difficulty: "9-Qavat • Master", source: "S01 Task 9 • ln & Inodes" }));

// ============================================================================
// SECTOR 10: ILG'OR QIDIRUV VA AVTOMATIK TOZALASH (FIND) (Q136 - Q150)
// ============================================================================
const s10_tasks = [
  {
    id: 136,
    title: "Joriy Papkada .txt Fayllarni Topish (find -name)",
    story: "Seminar 1: Joriy katalog va uning ichidagi barcha `.txt` kengaytmali fayllarni qidiring.",
    taskUz: "`find . -name \"*.txt\"` buyrug'i orqali qidiring.",
    expectedSql: "find . -name \"*.txt\"",
    hint: "`find . -name \"*.txt\"` deb yozing.",
    tags: ["FIND", "-NAME", "SEARCH"],
    solutions: ["find . -name \"*.txt\"", "find . -name '*.txt'", "find -name \"*.txt\""]
  },
  {
    id: 137,
    title: "Faqat Oddiy Fayllarni Qidirish (find -type f)",
    story: "Kataloglarni emas, faqat oddiy fayllarni (`-type f`) ajrating.",
    taskUz: "`find . -type f -name \"*.txt\"` buyrug'ini bering.",
    expectedSql: "find . -type f -name \"*.txt\"",
    hint: "`find . -type f -name \"*.txt\"` deb yozing.",
    tags: ["FIND -TYPE F", "FILE ONLY", "FILTER"],
    solutions: ["find . -type f -name \"*.txt\"", "find . -type f -name '*.txt'"]
  },
  {
    id: 138,
    title: "7 Kundan Eski Fayllarni Topish (find -mtime +7)",
    story: "Seminar 1: 7 kundan avval o'zgartirilgan (`-mtime +7`) eski fayllarni toping.",
    taskUz: "`find . -type f -mtime +7` buyrug'ini bering.",
    expectedSql: "find . -type f -mtime +7",
    hint: "`find . -type f -mtime +7` deb yozing.",
    tags: ["FIND -MTIME +7", "OLD FILES", "SEARCH"],
    solutions: ["find . -type f -mtime +7", "find . -mtime +7"]
  },
  {
    id: 139,
    title: "7 Kundan Eski .txt Fayllarni Ko'rish",
    story: "Ham 7 kundan eski, ham `.txt` bo'lgan fayllarni aniqlang (`old1.txt`, `old2.txt`).",
    taskUz: "`find . -name \"*.txt\" -mtime +7` buyrug'ini bering.",
    expectedSql: "find . -name \"*.txt\" -mtime +7",
    hint: "`find . -name \"*.txt\" -mtime +7` deb yozing.",
    tags: ["FIND", "COMBINED", "SEARCH"],
    solutions: ["find . -name \"*.txt\" -mtime +7", "find . -name '*.txt' -mtime +7"]
  },
  {
    id: 140,
    title: "Topilgan Fayllarni Batafsil Ro'yxat Bilan Ko'rish (find -ls)",
    story: "Topilgan fayllarni `ls -l` kabi to'liq huquqlari va Inodelari bilan chiqaring.",
    taskUz: "`find . -name \"*.txt\" -ls` buyrug'ini bering.",
    expectedSql: "find . -name \"*.txt\" -ls",
    hint: "`find . -name \"*.txt\" -ls` deb yozing.",
    tags: ["FIND -LS", "DETAILED LIST", "AUDIT"],
    solutions: ["find . -name \"*.txt\" -ls", "find . -name '*.txt' -ls"]
  },
  {
    id: 141,
    title: "/var/log Ichidagi Barcha .log Fayllarni Topish",
    story: "Tizim loglar omboridagi barcha `.log` fayllarni toping.",
    taskUz: "`find /var/log -name \"*.log\"` buyrug'ini bering.",
    expectedSql: "find /var/log -name \"*.log\"",
    hint: "`find /var/log -name \"*.log\"` deb yozing.",
    tags: ["FIND", "VAR_LOG", "SEARCH"],
    solutions: ["find /var/log -name \"*.log\"", "find /var/log -name '*.log'"]
  },
  {
    id: 142,
    title: "Faqat Papkalarni Qidirish (find -type d)",
    story: "Fayllarni emas, faqat kataloglarni topish uchun `-type d` bayrog'ini bering.",
    taskUz: "`find /etc -type d` buyrug'ini bering.",
    expectedSql: "find /etc -type d",
    hint: "`find /etc -type d` deb yozing.",
    tags: ["FIND -TYPE D", "DIRECTORIES", "SEARCH"],
    solutions: ["find /etc -type d"]
  },
  {
    id: 143,
    title: "Eski Fayllarni Avtomatik O'chirish (find -delete)",
    story: "Seminar 1: 7 kundan eski `.txt` fayllarni `-delete` orqali xavfsiz tozalang.",
    taskUz: "`find . -name \"*.txt\" -mtime +7 -delete` buyrug'ini bering.",
    expectedSql: "find . -name \"*.txt\" -mtime +7 -delete",
    hint: "`find . -name \"*.txt\" -mtime +7 -delete` deb yozing.",
    tags: ["FIND -DELETE", "CLEANUP", "AUTOMATION"],
    solutions: ["find . -name \"*.txt\" -mtime +7 -delete", "find . -name '*.txt' -mtime +7 -delete"]
  },
  {
    id: 144,
    title: "Tozalashdan So'ng Qolgan .txt Fayllarni Sanash",
    story: "Seminar 1: O'chirishdan so'ng nechta `.txt` qolganini `find | wc -l` bilan sanang.",
    taskUz: "`find . -name \"*.txt\" | wc -l` buyrug'ini bering.",
    expectedSql: "find . -name \"*.txt\" | wc -l",
    hint: "`find . -name \"*.txt\" | wc -l` deb yozing.",
    tags: ["FIND | WC", "PIPE", "COUNT"],
    solutions: ["find . -name \"*.txt\" | wc -l", "find . -name '*.txt' | wc -l"]
  },
  {
    id: 145,
    title: "Qolgan Yagona .txt Faylni Ko'rish",
    story: "Faqat yangi `recent.txt` omon qolganini tasdiqlang.",
    taskUz: "`find . -name \"*.txt\"` buyrug'ini bering.",
    expectedSql: "find . -name \"*.txt\"",
    hint: "`find . -name \"*.txt\"` deb yozing.",
    tags: ["FIND", "VERIFY", "CLEANUP"],
    solutions: ["find . -name \"*.txt\"", "find . -name '*.txt'"]
  },
  {
    id: 146,
    title: "Katta-Kichik Harfga Sezgir Bo'lmagan Qidiruv (-iname)",
    story: "Case-insensitive qidiruv uchun `-iname` bayrog'ini sinang.",
    taskUz: "`find . -iname \"*.LOG\"` buyrug'ini bering.",
    expectedSql: "find . -iname \"*.LOG\"",
    hint: "`find . -iname \"*.LOG\"` deb yozing.",
    tags: ["FIND -INAME", "INSENSITIVE", "SEARCH"],
    solutions: ["find . -iname \"*.LOG\"", "find . -iname '*.LOG'"]
  },
  {
    id: 147,
    title: "So'nggi 7 Kunda O'zgargan Yangi Fayllar (-mtime -7)",
    story: "Minus `-7` belgisi oxirgi 7 kunda o'zgartirilgan yangi fayllarni topadi.",
    taskUz: "`find . -type f -mtime -7` buyrug'ini bering.",
    expectedSql: "find . -type f -mtime -7",
    hint: "`find . -type f -mtime -7` deb yozing.",
    tags: ["FIND -MTIME -7", "RECENT", "SEARCH"],
    solutions: ["find . -type f -mtime -7"]
  },
  {
    id: 148,
    title: "Joriy Papkadagi Barcha Fayllarni Ro'yxatlash (find .)",
    story: "Joriy katalogdagi hamma obyektlarni to'liq qidirib chiqaring.",
    taskUz: "`find .` buyrug'ini bering.",
    expectedSql: "find .",
    hint: "`find .` deb yozing.",
    tags: ["FIND .", "ALL", "TRAVERSE"],
    solutions: ["find ."]
  },
  {
    id: 149,
    title: "find Buyrug'i Qo'llanmasini Ko'rish",
    story: "`find` buyrug'ining barcha kuchli predicate parametrlarini man dan o'rganing.",
    taskUz: "`man find` buyrug'ini bering.",
    expectedSql: "man find",
    hint: "`man find` deb yozing.",
    tags: ["MAN", "FIND", "DOCUMENTATION"],
    solutions: ["man find"]
  },
  {
    id: 150,
    title: "Bosh Linux Kernel Arxitektori Final Sinovi",
    story: "TABRIKLAYMIZ! 150-Final Sinov: Barcha o'rganilgan buyruqlarni yakunlab, to'liq joriy katalogni tasdiqlang.",
    taskUz: "Fayl tizimi to'liq sozlanganini tasdiqlash uchun `pwd` buyrug'ini bering.",
    expectedSql: "pwd",
    hint: "`pwd` deb yozing.",
    tags: ["GRAND FINALE", "PWD", "ARCHITECT"],
    solutions: ["pwd"]
  }
];

s10_tasks.forEach(t => allQuestions.push({ ...t, sector: 10, difficulty: "10-Qavat • Grand Master", source: "S01 Task 10 • find & Automation" }));

console.log(`Generated all ${allQuestions.length} questions.`);

// Validate each question
console.log("Validating all 150 questions with BASH_GRADER...");
for (let i = 0; i < allQuestions.length; i++) {
  const q = allQuestions[i];
  if (q.id !== i + 1) {
    console.error(`ID Mismatch: expected ${i + 1}, got ${q.id}`);
    process.exit(1);
  }
  const evalRes = grader.evaluate(q.expectedSql, q.expectedSql, q);
  if (!evalRes.match) {
    console.error(`FAIL in Question ${q.id}: ${evalRes.message}`);
    process.exit(1);
  }
}
console.log("PASS: All 150 questions validated successfully!");

// Split into 3 files
const q1_50 = allQuestions.slice(0, 50);
const q51_100 = allQuestions.slice(50, 100);
const q101_150 = allQuestions.slice(100, 150);

const f1 = `// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — QUESTIONS 1 TO 50
// Navigation, pwd, cd, ls, ls -la, mkdir, mkdir -p, rmdir, touch, stat.
// ============================================================================

window.QUESTIONS_1_50 = ${JSON.stringify(q1_50, null, 2)};
`;

const f2 = `// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — QUESTIONS 51 TO 100
// touch -d, cat, redirection >, >>, head, tail, tail -f, wc -l, wc -w, wc -c.
// ============================================================================

window.QUESTIONS_51_100 = ${JSON.stringify(q51_100, null, 2)};
`;

const f3 = `// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — QUESTIONS 101 TO 150
// wc metrics, cp, cp -r, mv, rm, rm -r, ln, ln -s, Inodes, find, -mtime, -delete.
// ============================================================================

window.QUESTIONS_101_150 = ${JSON.stringify(q101_150, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'data', 'questions_1_50.js'), f1, 'utf8');
fs.writeFileSync(path.join(__dirname, 'data', 'questions_51_100.js'), f2, 'utf8');
fs.writeFileSync(path.join(__dirname, 'data', 'questions_101_150.js'), f3, 'utf8');

console.log("Successfully wrote all 3 question files!");
