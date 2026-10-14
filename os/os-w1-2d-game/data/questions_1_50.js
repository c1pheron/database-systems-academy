// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — QUESTIONS 1 TO 50
// Navigation, pwd, cd, ls, ls -la, mkdir, mkdir -p, rmdir, touch, stat.
// ============================================================================

window.QUESTIONS_1_50 = [
  {
    "id": 1,
    "title": "Joriy Ishchi Katalogni Aniqlash",
    "story": "Debian 12 serveriga SSH orqali kirdingiz. Qaysi papkada turganingizni aniqlash zarur.",
    "taskUz": "Joriy ishchi katalogning to'liq manzilini ekranga chiqaruvchi buyruqni bering.",
    "expectedSql": "pwd",
    "hint": "`pwd` (Print Working Directory) buyrug'ini yozing.",
    "tags": [
      "PWD",
      "NAVIGATION",
      "BASIC"
    ],
    "solutions": [
      "pwd",
      "/bin/pwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 2,
    "title": "Joriy Foydalanuvchi Shaxsini Aniqlash",
    "story": "Serverda qaysi akkaunt (foydalanuvchi) nomidan ishlayotganingizni tekshiring.",
    "taskUz": "Tizimga kirgan joriy foydalanuvchi nomini ko'rsatuvchi buyruqni bering.",
    "expectedSql": "whoami",
    "hint": "`whoami` buyrug'idan foydalaning.",
    "tags": [
      "WHOAMI",
      "USER",
      "BASIC"
    ],
    "solutions": [
      "whoami",
      "/usr/bin/whoami"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 3,
    "title": "Server Nomini (Hostname) Aniqlash",
    "story": "Tarmoqdagi serverlar ichida aynan qaysi kompyuterga ulanganingizni tasdiqlang.",
    "taskUz": "Ushbu mashinaning tarmoqdagi nomini (`hostname`) ekranga chiqaring.",
    "expectedSql": "hostname",
    "hint": "`hostname` buyrug'ini bering.",
    "tags": [
      "HOSTNAME",
      "SYSTEM",
      "BASIC"
    ],
    "solutions": [
      "hostname",
      "/bin/hostname"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 4,
    "title": "Ildiz (Root) Katalogga O'tish",
    "story": "Linux fayl tizimining eng yuqori darajasi — bu ildiz (`/`) katalogidir.",
    "taskUz": "Fayl tizimining eng boshlang'ich ildiz katalogiga (`/`) o'ting.",
    "expectedSql": "cd /",
    "hint": "`cd /` buyrug'ini bering.",
    "tags": [
      "CD",
      "ROOT",
      "NAVIGATION"
    ],
    "solutions": [
      "cd /"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 5,
    "title": "Foydalanuvchining Uy Papkasiga Qaytish",
    "story": "Ildiz papkasidan o'z shaxsiy uy papkangizga (`/home/student`) qayting.",
    "taskUz": "Argumentlarsiz yoki `~` belgisi orqali o'z uy katalogingizga o'ting.",
    "expectedSql": "cd ~",
    "hint": "`cd ~` yoki shunchaki `cd` buyrug'ini bering.",
    "tags": [
      "CD",
      "HOME",
      "NAVIGATION"
    ],
    "solutions": [
      "cd ~",
      "cd",
      "cd /home/student"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 6,
    "title": "/var/log Katalogiga O'tish",
    "story": "Tizim log fayllarini tekshirish uchun `/var/log` papkasiga o'tish lozim.",
    "taskUz": "Absolyut manzil orqali `/var/log` katalogiga kiring.",
    "expectedSql": "cd /var/log",
    "hint": "`cd /var/log` buyrug'ini bering.",
    "tags": [
      "CD",
      "VAR_LOG",
      "NAVIGATION"
    ],
    "solutions": [
      "cd /var/log"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 7,
    "title": "Bitta Qavat Yuqoriga Chiqish (cd ..)",
    "story": "Joriy papkadan bitta qavat yuqoridagi ota katalogga o'ting.",
    "taskUz": "`..` nisbiy belgisidan foydalanib bitta qavat yuqoriga o'ting.",
    "expectedSql": "cd ..",
    "hint": "`cd ..` deb yozing.",
    "tags": [
      "CD",
      "PARENT DIR",
      "NAVIGATION"
    ],
    "solutions": [
      "cd .."
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 8,
    "title": "Oldingi Tashrif Buyurilgan Katalogga Qaytish (cd -)",
    "story": "Linux terminalida oxirgi bo'lingan avvalgi katalogga tezkor qaytish imkoni mavjud.",
    "taskUz": "Oldingi tashrif buyurilgan papkaga qaytish uchun `cd -` buyrug'ini bering.",
    "expectedSql": "cd -",
    "hint": "`cd -` buyrug'idan foydalaning.",
    "tags": [
      "CD",
      "PREVIOUS DIR",
      "NAVIGATION"
    ],
    "solutions": [
      "cd -"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 9,
    "title": "/etc Konfiguratsiya Katalogiga O'tish",
    "story": "Server konfiguratsiya fayllari joylashgan `/etc` katalogiga o'ting.",
    "taskUz": "Absolyut yo'l orqali `/etc` katalogiga kiring.",
    "expectedSql": "cd /etc",
    "hint": "`cd /etc` deb yozing.",
    "tags": [
      "CD",
      "ETC",
      "NAVIGATION"
    ],
    "solutions": [
      "cd /etc"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 10,
    "title": "Uy Papkasidagi Ichki Yo'l (cd ~/)",
    "story": "Qayerda turishingizdan qat'i nazar, uy papkangiz ichidagi yo'lni `~/` orqali ko'rsatish mumkin.",
    "taskUz": "`~/` sintaksisidan foydalanib uy katalogiga o'ting.",
    "expectedSql": "cd ~/",
    "hint": "`cd ~/` deb yozing.",
    "tags": [
      "CD",
      "TILDE",
      "NAVIGATION"
    ],
    "solutions": [
      "cd ~/",
      "cd ~"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 11,
    "title": "/tmp Vaqtinchalik Katalogga O'tish",
    "story": "Vaqtinchalik fayllar ombori bo'lgan `/tmp` katalogiga kiring.",
    "taskUz": "Absolyut manzil bo'yicha `/tmp` papkasiga o'ting.",
    "expectedSql": "cd /tmp",
    "hint": "`cd /tmp` deb yozing.",
    "tags": [
      "CD",
      "TMP",
      "NAVIGATION"
    ],
    "solutions": [
      "cd /tmp"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 12,
    "title": "Ikki Qavat Yuqoriga Chiqish (cd ../..)",
    "story": "Chuqur kataloglardan ikki pog'ona yuqoriga sakrash zarur.",
    "taskUz": "Ikki pog'ona yuqoridagi ota katalogga o'tish buyrug'ini bering.",
    "expectedSql": "cd ../..",
    "hint": "`cd ../..` deb yozing.",
    "tags": [
      "CD",
      "DOUBLE PARENT",
      "NAVIGATION"
    ],
    "solutions": [
      "cd ../.."
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 13,
    "title": "Joriy Katalogni Tasdiqlash",
    "story": "Navigatsiyadan so'ng qaysi papkaga kelganingizni `pwd` bilan tekshiring.",
    "taskUz": "Joriy katalogni ekranga chiqaruvchi buyruqni bering.",
    "expectedSql": "pwd",
    "hint": "`pwd` deb yozing.",
    "tags": [
      "PWD",
      "CHECK",
      "NAVIGATION"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 14,
    "title": "Uy Papkasiga To'liq Absolyut Yo'l Bilan O'tish",
    "story": "Tilde `~` ishlatmasdan to'liq absolyut yo'l orqali `/home/student` ga o'ting.",
    "taskUz": "`cd /home/student` buyrug'i orqali o'z shaxsiy katalogingizga kiring.",
    "expectedSql": "cd /home/student",
    "hint": "`cd /home/student` deb yozing.",
    "tags": [
      "CD",
      "ABSOLUTE PATH",
      "NAVIGATION"
    ],
    "solutions": [
      "cd /home/student",
      "cd ~"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 15,
    "title": "cd Buyrug'i Qo'llanmasini Ko'rish",
    "story": "Ichki buyruqlar va parametrlar haqida yordam olishni o'rganing.",
    "taskUz": "`pwd` buyrug'i haqida qo'llanmani `man pwd` orqali oching.",
    "expectedSql": "man pwd",
    "hint": "`man pwd` buyrug'ini bering.",
    "tags": [
      "MAN",
      "HELP",
      "BASIC"
    ],
    "solutions": [
      "man pwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S01 Task 1 • Navigatsiya"
  },
  {
    "id": 16,
    "title": "Oddiy Fayllar Ro'yxatini Ko'rish (ls)",
    "story": "Joriy papkada qanday oddiy fayllar borligini ko'zdan kechiring.",
    "taskUz": "Joriy katalogdagi fayllar va papkalar ro'yxatini chiqaring.",
    "expectedSql": "ls",
    "hint": "`ls` buyrug'ini bering.",
    "tags": [
      "LS",
      "LIST",
      "BASIC"
    ],
    "solutions": [
      "ls"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 17,
    "title": "Barcha Fayllar, Shu Jumladan Yashirin Fayllar (ls -a)",
    "story": "Nuqta bilan boshlanuvchi `.bashrc` va `.profile` kabi yashirin konfiguratsiyalarni ko'rish lozim.",
    "taskUz": "Barcha fayllarni (yashirin fayllar bilan birga) ko'rsatuvchi buyruqni bering.",
    "expectedSql": "ls -a",
    "hint": "`ls -a` (all) bayrog'idan foydalaning.",
    "tags": [
      "LS -A",
      "HIDDEN FILES",
      "LIST"
    ],
    "solutions": [
      "ls -a",
      "ls --all"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 18,
    "title": "Kengaytirilgan Formatda Chiqarish (ls -l)",
    "story": "Huquqlar (rwx), Inodelar soni, egasi, guruhi va hajmini batafsil ko'rish talab qilinadi.",
    "taskUz": "Fayllar ro'yxatini batafsil uzun formatda (`long format`) chiqaring.",
    "expectedSql": "ls -l",
    "hint": "`ls -l` buyrug'ini bering.",
    "tags": [
      "LS -L",
      "LONG FORMAT",
      "PERMISSIONS"
    ],
    "solutions": [
      "ls -l"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 19,
    "title": "Batafsil va Yashirin Fayllar Birlashmasi (ls -la)",
    "story": "SysAdminlarning eng mashhur va kundalik buyrug'i `ls -la` hisoblanadi.",
    "taskUz": "Ham yashirin fayllarni, ham uzun formatni birlashtirib chiqaring.",
    "expectedSql": "ls -la",
    "hint": "`ls -la` yoki `ls -al` deb yozing.",
    "tags": [
      "LS -LA",
      "LONG FORMAT",
      "HIDDEN"
    ],
    "solutions": [
      "ls -la",
      "ls -al",
      "ls -l -a",
      "ls -a -l"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 20,
    "title": "Inson O'qiy Oladigan O'lchamlar Bilan (ls -lh)",
    "story": "Fayl hajmini baytlarda emas, balki KB, MB ko'rinishida ko'rish qulay.",
    "taskUz": "Uzun formatda fayl o'lchamlarini inson o'qiy oladigan formatda (`-h`) chiqaring.",
    "expectedSql": "ls -lh",
    "hint": "`ls -lh` deb yozing.",
    "tags": [
      "LS -LH",
      "HUMAN READABLE",
      "SIZE"
    ],
    "solutions": [
      "ls -lh",
      "ls -l -h",
      "ls -hl"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 21,
    "title": "O'zgarish Vaqti Bo'yicha Saralash (ls -t)",
    "story": "Eng oxirgi tahrirlangan yangi fayllarni ro'yxat boshida ko'rish kerak.",
    "taskUz": "Fayllarni oxirgi o'zgartirilgan vaqti bo'yicha (eng yangilari birinchi) saralab chiqaring.",
    "expectedSql": "ls -t",
    "hint": "`ls -t` buyrug'ini bering.",
    "tags": [
      "LS -T",
      "SORT TIME",
      "LIST"
    ],
    "solutions": [
      "ls -t"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 22,
    "title": "Vaqt Bo'yicha Teskari Saralash (ls -tr)",
    "story": "Eski fayllardan yangilariga qarab xronologik tartibda ko'rish zarur.",
    "taskUz": "Fayllarni o'zgarish vaqti bo'yicha teskari (eng eskilari tepada) saralab chiqaring.",
    "expectedSql": "ls -tr",
    "hint": "`ls -tr` yoki `ls -rt` deb yozing.",
    "tags": [
      "LS -TR",
      "REVERSE TIME",
      "SORT"
    ],
    "solutions": [
      "ls -tr",
      "ls -rt"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 23,
    "title": "Hajmi Bo'yicha Saralash (ls -S)",
    "story": "Diskda eng ko'p joy egallayotgan yirik fayllarni aniqlang.",
    "taskUz": "Fayllarni hajmi bo'yicha kamayish tartibida (katta fayllar tepada) saralab chiqaring.",
    "expectedSql": "ls -S",
    "hint": "`ls -S` (katta S) bayrog'ini bering.",
    "tags": [
      "LS -S",
      "SORT SIZE",
      "STORAGE"
    ],
    "solutions": [
      "ls -S"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 24,
    "title": "Teskari Alifbo Tartibida Saralash (ls -r)",
    "story": "Nomlarni Z dan A ga qarab teskari alifboda chiqarish talab etiladi.",
    "taskUz": "Fayllar ro'yxatini teskari tartibda chiqaring.",
    "expectedSql": "ls -r",
    "hint": "`ls -r` deb yozing.",
    "tags": [
      "LS -R",
      "REVERSE",
      "LIST"
    ],
    "solutions": [
      "ls -r"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 25,
    "title": "/var/log Papkasi Tarkibini Chiqarish",
    "story": "O'sha papkaga kirmasdan turib, boshqa papka tarkibini ko'rish mumkin.",
    "taskUz": "Joriy joyingizni o'zgartirmasdan `/var/log` katalogidagi fayllarni chiqaring.",
    "expectedSql": "ls /var/log",
    "hint": "`ls /var/log` deb yozing.",
    "tags": [
      "LS PATH",
      "VAR_LOG",
      "LIST"
    ],
    "solutions": [
      "ls /var/log"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 26,
    "title": "/var/log dagi Loglarni Uzun Formatda Ko'rish",
    "story": "Tizim loglarining huquqlari va hajmlarini uzun formatda tahlil qiling.",
    "taskUz": "`/var/log` katalogidagi fayllarni uzun formatda (`-l`) chiqaring.",
    "expectedSql": "ls -l /var/log",
    "hint": "`ls -l /var/log` deb yozing.",
    "tags": [
      "LS -L",
      "VAR_LOG",
      "AUDIT"
    ],
    "solutions": [
      "ls -l /var/log"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 27,
    "title": "/etc/skel Katalogidagi Yashirin Shablonlarni Ko'rish",
    "story": "Yangi foydalanuvchilar uchun tayyorlangan yashirin shablon fayllarni ko'ring.",
    "taskUz": "`/etc/skel` katalogidagi barcha yashirin fayllarni (`-la`) chiqaring.",
    "expectedSql": "ls -la /etc/skel",
    "hint": "`ls -la /etc/skel` deb yozing.",
    "tags": [
      "LS -LA",
      "SKEL",
      "HIDDEN"
    ],
    "solutions": [
      "ls -la /etc/skel",
      "ls -al /etc/skel"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 28,
    "title": "Fayl Turlari Belgisi Bilan Chiqarish (ls -F)",
    "story": "Papkalar orqasiga `/`, skriptlar orqasiga `*` qo'yuvchi `-F` bayrog'ini sinang.",
    "taskUz": "Fayl turlari indikatori (`-F`) bilan fayllarni chiqaring.",
    "expectedSql": "ls -F",
    "hint": "`ls -F` deb yozing.",
    "tags": [
      "LS -F",
      "INDICATOR",
      "LIST"
    ],
    "solutions": [
      "ls -F"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 29,
    "title": "/var/log dagi Fayllarni Hajmi Bo'yicha Saralash",
    "story": "Loglar orasida eng katta joy egallaganlarini aniqlash lozim.",
    "taskUz": "`/var/log` katalogidagi fayllarni hajmi bo'yicha kamayish tartibida (`-lS`) chiqaring.",
    "expectedSql": "ls -lS /var/log",
    "hint": "`ls -lS /var/log` deb yozing.",
    "tags": [
      "LS -LS",
      "SORT SIZE",
      "VAR_LOG"
    ],
    "solutions": [
      "ls -lS /var/log",
      "ls -Sl /var/log"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 30,
    "title": "ls Buyrug'i Qo'llanmasini Ko'rish",
    "story": "Barcha mavjud saralash va filtrlash bayroqlarini man sahifasidan ko'ring.",
    "taskUz": "`ls` buyrug'ining to'liq qo'llanmasini ochuvchi buyruqni bering.",
    "expectedSql": "man ls",
    "hint": "`man ls` deb yozing.",
    "tags": [
      "MAN",
      "LS",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man ls"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "source": "S01 Task 2 • ls Buyruqlari"
  },
  {
    "id": 31,
    "title": "Yangi 's01' Papkasini Yaratish",
    "story": "Seminar 1 laboratoriya ishlari uchun asosiy ishchi papka yaratish kerak.",
    "taskUz": "Joriy katalogda `s01` nomli yangi papka yarating.",
    "expectedSql": "mkdir s01",
    "hint": "`mkdir s01` deb yozing.",
    "tags": [
      "MKDIR",
      "DIRECTORY",
      "CREATION"
    ],
    "solutions": [
      "mkdir s01"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 32,
    "title": "Ota Papkalari Bilan Birgalikda Yaratish (mkdir -p)",
    "story": "Seminar 1 topshirig'i: `s01/logs` ichki papkalarini bitta buyruqda yarating.",
    "taskUz": "`-p` bayrog'i yordamida `s01/logs` papkalar zanjirini yarating.",
    "expectedSql": "mkdir -p s01/logs",
    "hint": "`mkdir -p s01/logs` deb yozing.",
    "tags": [
      "MKDIR -P",
      "PARENTS",
      "HIERARCHY"
    ],
    "solutions": [
      "mkdir -p s01/logs"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 33,
    "title": "Arxiv Papkasini Yaratish (mkdir -p s01/archive)",
    "story": "Eskirgan log fayllar va zaxira nusxalar uchun maxsus papka ajrating.",
    "taskUz": "`s01/archive` katalogini yarating.",
    "expectedSql": "mkdir -p s01/archive",
    "hint": "`mkdir -p s01/archive` deb yozing.",
    "tags": [
      "MKDIR",
      "ARCHIVE",
      "HIERARCHY"
    ],
    "solutions": [
      "mkdir -p s01/archive",
      "mkdir s01/archive"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 34,
    "title": "Hisobotlar Papkasini Yaratish (mkdir -p s01/reports)",
    "story": "Audit va tahlil xulosalari uchun `reports` papkasini yarating.",
    "taskUz": "`s01/reports` katalogini yarating.",
    "expectedSql": "mkdir -p s01/reports",
    "hint": "`mkdir -p s01/reports` deb yozing.",
    "tags": [
      "MKDIR",
      "REPORTS",
      "HIERARCHY"
    ],
    "solutions": [
      "mkdir -p s01/reports",
      "mkdir s01/reports"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 35,
    "title": "Bir Nechta Papkani Bitta Buyruqda Yaratish",
    "story": "Ikkita mustaqil `test1` va `test2` papkalarini bitta qatorda yarating.",
    "taskUz": "Bitta `mkdir` buyrug'i orqali `test1 test2` kataloglarini yarating.",
    "expectedSql": "mkdir test1 test2",
    "hint": "`mkdir test1 test2` deb yozing.",
    "tags": [
      "MKDIR",
      "MULTIPLE",
      "CREATION"
    ],
    "solutions": [
      "mkdir test1 test2"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 36,
    "title": "Bo'sh Papkani O'chirish (rmdir test1)",
    "story": "Sinov uchun ochilgan bo'sh `test1` papkasini xavfsiz o'chiring.",
    "taskUz": "`rmdir` yordamida bo'sh `test1` katalogini o'chiring.",
    "expectedSql": "rmdir test1",
    "hint": "`rmdir test1` deb yozing.",
    "tags": [
      "RMDIR",
      "EMPTY DIR",
      "CLEANUP"
    ],
    "solutions": [
      "rmdir test1"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 37,
    "title": "Ikkinchi Bo'sh Papkani O'chirish (rmdir test2)",
    "story": "Keraksiz bo'lgan ikkinchi `test2` papkasini ham olib tashlang.",
    "taskUz": "`rmdir` yordamida `test2` katalogini o'chiring.",
    "expectedSql": "rmdir test2",
    "hint": "`rmdir test2` deb yozing.",
    "tags": [
      "RMDIR",
      "EMPTY DIR",
      "CLEANUP"
    ],
    "solutions": [
      "rmdir test2"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 38,
    "title": "Konfiguratsiyalar Papkasini Yaratish (mkdir config)",
    "story": "Tizim sozlamalari nusxalari uchun `config` papkasini tayyorlang.",
    "taskUz": "Uy katalogida `config` nomli yangi papka yarating.",
    "expectedSql": "mkdir config",
    "hint": "`mkdir config` deb yozing.",
    "tags": [
      "MKDIR",
      "CONFIG",
      "CREATION"
    ],
    "solutions": [
      "mkdir config"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 39,
    "title": "Chuqur Tarmoqli Papka Yaratish (mkdir -p a/b/c)",
    "story": "3 qavatli chuqur katalog strukturasini bitta buyruqda oching.",
    "taskUz": "`-p` orqali `a/b/c` kataloglar ierarxiyasini yarating.",
    "expectedSql": "mkdir -p a/b/c",
    "hint": "`mkdir -p a/b/c` deb yozing.",
    "tags": [
      "MKDIR -P",
      "NESTED",
      "HIERARCHY"
    ],
    "solutions": [
      "mkdir -p a/b/c"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 40,
    "title": "Chuqur Papka Ichiga Kirish (cd a/b/c)",
    "story": "Yangi yaratilgan eng chuqur `c` papkasiga o'ting.",
    "taskUz": "`cd a/b/c` buyrug'i orqali ichki katalogga kiring.",
    "expectedSql": "cd a/b/c",
    "hint": "`cd a/b/c` deb yozing.",
    "tags": [
      "CD",
      "NESTED",
      "NAVIGATION"
    ],
    "solutions": [
      "cd a/b/c"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 41,
    "title": "Qaytadan Uy Papkasiga Qaytish (cd ~)",
    "story": "Chuqur yo'ldan o'z boshlang'ich uy papkangizga qayting.",
    "taskUz": "`cd ~` buyrug'i orqali uy papkangizga qayting.",
    "expectedSql": "cd ~",
    "hint": "`cd ~` deb yozing.",
    "tags": [
      "CD",
      "HOME",
      "NAVIGATION"
    ],
    "solutions": [
      "cd ~",
      "cd"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 42,
    "title": "Kataloglar Daraxtini Ko'rish (tree s01)",
    "story": "Yaratilgan `s01` papkasi ierarxiyasini daraxt ko'rinishida ko'zdan kechiring.",
    "taskUz": "`tree s01` buyrug'i orqali papkalar tuzilishini chiqaring.",
    "expectedSql": "tree s01",
    "hint": "`tree s01` deb yozing.",
    "tags": [
      "TREE",
      "HIERARCHY",
      "STRUCTURE"
    ],
    "solutions": [
      "tree s01"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 43,
    "title": "Zaxira Papkasini Yaratish (mkdir backup)",
    "story": "Tizim zaxiralari uchun `backup` papkasi kerak bo'ladi.",
    "taskUz": "Yangi `backup` nomli papka yarating.",
    "expectedSql": "mkdir backup",
    "hint": "`mkdir backup` deb yozing.",
    "tags": [
      "MKDIR",
      "BACKUP",
      "CREATION"
    ],
    "solutions": [
      "mkdir backup"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 44,
    "title": "Logs Papkasi Ichiga O'tish (cd s01/logs)",
    "story": "Fayllar yaratish bosqichiga o'tish uchun `s01/logs` papkasiga kiring.",
    "taskUz": "`cd s01/logs` buyrug'i orqali logs papkasiga o'ting.",
    "expectedSql": "cd s01/logs",
    "hint": "`cd s01/logs` deb yozing.",
    "tags": [
      "CD",
      "LOGS",
      "NAVIGATION"
    ],
    "solutions": [
      "cd s01/logs"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 45,
    "title": "mkdir Buyrug'i Qo'llanmasini Ko'rish",
    "story": "`mkdir` buyrug'ining barcha ruxsat va ota papka bayroqlarini tekshiring.",
    "taskUz": "`man mkdir` buyrug'ini bering.",
    "expectedSql": "man mkdir",
    "hint": "`man mkdir` deb yozing.",
    "tags": [
      "MAN",
      "MKDIR",
      "DOCUMENTATION"
    ],
    "solutions": [
      "man mkdir"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S01 Task 3 • mkdir & rmdir"
  },
  {
    "id": 46,
    "title": "Yangi Bo'sh Fayl Yaratish (touch system.log)",
    "story": "Seminar 1: `s01/logs` papkasi ichida asosiy tizim log faylini oching.",
    "taskUz": "`touch` buyrug'i orqali `system.log` nomli bo'sh fayl yarating.",
    "expectedSql": "touch system.log",
    "hint": "`touch system.log` deb yozing.",
    "tags": [
      "TOUCH",
      "LOG",
      "FILE CREATION"
    ],
    "solutions": [
      "touch system.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 47,
    "title": "Autentifikatsiya Logini Yaratish (touch auth.log)",
    "story": "Foydalanuvchilar kirishini qayd etuvchi `auth.log` faylini oching.",
    "taskUz": "`touch auth.log` buyrug'i orqali fayl yarating.",
    "expectedSql": "touch auth.log",
    "hint": "`touch auth.log` deb yozing.",
    "tags": [
      "TOUCH",
      "AUTH LOG",
      "FILE CREATION"
    ],
    "solutions": [
      "touch auth.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 48,
    "title": "Xatoliklar Logini Yaratish (touch error.log)",
    "story": "Kritik xatoliklarni yig'uvchi `error.log` faylini yarating.",
    "taskUz": "`touch error.log` buyrug'ini bering.",
    "expectedSql": "touch error.log",
    "hint": "`touch error.log` deb yozing.",
    "tags": [
      "TOUCH",
      "ERROR LOG",
      "FILE CREATION"
    ],
    "solutions": [
      "touch error.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 49,
    "title": "Fayl Metama'lumotlarini Ko'rish (stat system.log)",
    "story": "Faylning Inode raqami, havolalar soni va aniq vaqt tamg'asini ko'ring.",
    "taskUz": "`stat system.log` buyrug'i orqali fayl ma'lumotlarini chiqaring.",
    "expectedSql": "stat system.log",
    "hint": "`stat system.log` deb yozing.",
    "tags": [
      "STAT",
      "INODE",
      "METADATA"
    ],
    "solutions": [
      "stat system.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  },
  {
    "id": 50,
    "title": "Vaqt Tamg'asini Sun'iy O'zgartirish (touch -d)",
    "story": "Seminar 1 topshirig'i: Fayl sanasini o'tmishdagi sanaga o'zgartiring (eski log simulyatsiyasi).",
    "taskUz": "`system.log` fayli sanasini `touch -d \"2025-01-08\" system.log` orqali o'zgartiring.",
    "expectedSql": "touch -d \"2025-01-08\" system.log",
    "hint": "`touch -d \"2025-01-08\" system.log` deb yozing.",
    "tags": [
      "TOUCH -D",
      "TIMESTAMP",
      "SIMULATION"
    ],
    "solutions": [
      "touch -d \"2025-01-08\" system.log",
      "touch -d '2025-01-08' system.log"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta+",
    "source": "S01 Task 4 • touch & stat"
  }
];
