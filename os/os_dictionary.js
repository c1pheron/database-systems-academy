// ============================================================================
// OPERATING SYSTEMS ACADEMY — COMPREHENSIVE LINUX DICTIONARY & ENCYCLOPEDIA
// 100+ Linux Buyruqlari, Tizim Chaqiriqlari (System Calls), Bash Skriptlash,
// Jarayonlar, Xotira, Docker va Inodelar bo'yicha to'liq o'zbekcha ensiklopediya!
// ============================================================================

(function () {
  "use strict";

  const OS_DICTIONARY_DATA = [
    // -------------------------------------------------------------------------
    // 1. NAVIGATSIYA & INODELAR (WEEK 1)
    // -------------------------------------------------------------------------
    {
      cmd: "pwd",
      name: "Print Working Directory (Joriy Katalogni Ko'rsatish)",
      cat: "nav",
      catName: "Navigatsiya & Inodelar",
      desc: "Terminalda ayni daqiqada qaysi to'liq absolyut yo'lda (papka ichida) turganingizni chiqaradi.",
      syntax: "pwd [BAYROQLAR]",
      flags: [
        { flag: "-L", desc: "Mantiqiy yo'lni chiqarish (simvolik havolalar hisobga olinadi)" },
        { flag: "-P", desc: "Fizik real yo'lni chiqarish (barcha simvolik havolalarni ochib beradi)" }
      ],
      example: "pwd\n/home/student",
      analogy: "Xaritadagi 'Siz hozir shu yerdasiz' qizil belgisi. Serverda adashib qolmaslik uchun har doim birinchi bo'lib teriladigan buyruq."
    },
    {
      cmd: "ls",
      name: "List Directory Contents (Katalog Tarkibini Ko'rish)",
      cat: "nav",
      catName: "Navigatsiya & Inodelar",
      desc: "Katalog ichidagi fayl va jildlar ro'yxatini, ularning huquqlari, inodelari va hajmini ko'rsatadi.",
      syntax: "ls [BAYROQLAR] [MANZIL]",
      flags: [
        { flag: "-a", desc: "Barcha fayllarni, jumladan nuqta bilan boshlanuvchi yashirin fayllarni ham ko'rsatish" },
        { flag: "-l", desc: "Uzoq format: ruxsatlar, bog'lamlar soni, egasi, hajmi va sanasi bilan ko'rsatish" },
        { flag: "-h", desc: "Inson tushunadigan o'lchov birliklarida (K, M, G) chiqarish (-l bilan birga)" },
        { flag: "-i", desc: "Har bir faylning Inode (identifikatsiya) raqamini chiqarish" },
        { flag: "-R", desc: "Rekursiv ravishda barcha ichki papkalarni ham chiqarish" }
      ],
      example: "ls -lai /home/student\n10027 -rw-r--r-- 2 student student 4096 Oct 14 21:00 data.txt",
      analogy: "Do'kondagi peshtaxtani ko'zdan kechirish. -l har bir mahsulot narxi va ishlab chiqarilgan sanasini ko'rsatadi, -i esa shtrix-kodini (inode) ko'rsatadi."
    },
    {
      cmd: "cd",
      name: "Change Directory (Ishchi Katalogni O'zgartirish)",
      cat: "nav",
      catName: "Navigatsiya & Inodelar",
      desc: "Joriy papkadan boshqa papkaga o'tish uchun xizmat qiladi.",
      syntax: "cd [MANZIL]",
      flags: [
        { flag: "~", desc: "Foydalanuvchining uy katalogiga (/home/user) o'tish" },
        { flag: "..", desc: "Bitta yuqori darajadagi ota papkaga qaytish" },
        { flag: "-", desc: "Oldingi turgan katalogga qaytish" },
        { flag: "/", desc: "Ildiz (root) katalogiga o'tish" }
      ],
      example: "cd /var/log && pwd\n/var/log",
      analogy: "Bino ichida xonadan xonaga o'tish. cd .. eshikdan chiqib koridorga qaytish bilan barobar."
    },
    {
      cmd: "mkdir",
      name: "Make Directory (Yangi Katalog Yaratish)",
      cat: "nav",
      catName: "Navigatsiya & Inodelar",
      desc: "Fayl tizimida yangi jild yoki bir nechta qavatli jildlar zanjirini barpo etadi.",
      syntax: "mkdir [BAYROQLAR] KATALOG_NOMI",
      flags: [
        { flag: "-p", desc: "Parents: Ota-ona kataloglari mavjud bo'lmasa, ularni ham avtomatik yaratish" },
        { flag: "-m", desc: "Yaratilayotgan papkaga darhol ruxsatlar (masalan 755) belgilash" },
        { flag: "-v", desc: "Har bir yaratilgan papka haqida xabar chiqarish (verbose)" }
      ],
      example: "mkdir -p scripts/backup/daily",
      analogy: "Hujjatlar uchun yangi papka ochish. -p bayrog'i 'Agar javon va quti bo'lmasa, avval ularni yasab, keyin ichiga papka qo'y' degani."
    },
    {
      cmd: "stat",
      name: "Status (Fayl va Inode Metama'lumotlari)",
      cat: "nav",
      catName: "Navigatsiya & Inodelar",
      desc: "Faylning Inode raqami, kirish/o'zgarish vaqtlari (Access, Modify, Change) va bog'lamlar sonini (links) chiqaradi.",
      syntax: "stat [BAYROQLAR] FAYL_NOMI",
      flags: [
        { flag: "-c", desc: "Maxsus formatda faqat inode yoki ruxsatni chiqarish" },
        { flag: "-f", desc: "Fayl tizimi (file system) holatini ko'rsatish" }
      ],
      example: "stat myfile.txt\nInode: 10027   Links: 2   Access: (0644/-rw-r--r--)",
      analogy: "Insonning pasport ma'lumotlari: tug'ilgan yili, propiskasi va ID raqami. Linuxda har bir faylning pasporti stat orqali o'qiladi."
    },
    {
      cmd: "ln",
      name: "Link (Qattiq va Simvolik Bog'lamlar Yaratish)",
      cat: "nav",
      catName: "Navigatsiya & Inodelar",
      desc: "Fayllarga havolalar yaratish. Hard link bitta inodeni ulashadi, Soft link (symlink) esa boshqa fayl yo'liga ishora qiladi.",
      syntax: "ln [BAYROQLAR] MANBA NISHON",
      flags: [
        { flag: "-s", desc: "Simvolik (yumshoq / soft) havola yaratish (Windows yorlig'i kabi)" },
        { flag: "-f", desc: "Agar nishon fayli mavjud bo'lsa, uni majburiy o'chirib qayta ulash" },
        { flag: "-v", desc: "Yaratilgan havola haqida ma'lumot chiqarish" }
      ],
      example: "ln original.txt hardlink.txt   # Hardlink (bir xil inode)\nln -s /etc/passwd link_pass    # Softlink",
      analogy: "Hardlink — bitta xonaga 2 ta eshik qo'yish (bir eshik buzilsa ham xona qoladi). Softlink — eshik ustiga 'Qo'shni binoga qarang' deb yozib qo'yilgan yorliq."
    },
    {
      cmd: "find",
      name: "Find Files (Fayllarni Ierarxiya Bo'yicha Qidirish)",
      cat: "nav",
      catName: "Navigatsiya & Inodelar",
      desc: "Berilgan katalogdan boshlab nomi, hajmi, o'zgartirilgan vaqti yoki inodelar bo'yicha kuchli qidiruv.",
      syntax: "find [QAYERDAN] [KRITERIYALAR]",
      flags: [
        { flag: "-name", desc: "Fayl nomi bo'yicha qidirish (wildcard '*' ishlatish mumkin)" },
        { flag: "-iname", desc: "Katta-kichik harflarni farqlamasdan qidirish" },
        { flag: "-type", desc: "Fayl turi: 'f' (oddiy fayl), 'd' (katalog), 'l' (havola)" },
        { flag: "-mtime", desc: "Oxirgi o'zgartirilgan kunlar soni (-7 = so'nggi 7 kunda)" },
        { flag: "-inum", desc: "Aniq Inode raqami bo'yicha qidirish" },
        { flag: "-size", desc: "Hajmi bo'yicha qidirish (+100M = 100MB dan kattalar)" },
        { flag: "-exec", desc: "Topilgan har bir fayl ustida buyruq bajarish" }
      ],
      example: "find /var/log -name '*.log' -mtime -7",
      analogy: "Katta arxiv omborida maxsus robot orqali qidirish: 'Menga so'nggi 7 kunda kelgan .log kengaytmali barcha qog'ozlarni topib ber'."
    },

    // -------------------------------------------------------------------------
    // 2. MATN & OQIMLAR (WEEK 1 & 2)
    // -------------------------------------------------------------------------
    {
      cmd: "cat",
      name: "Concatenate & Display (Fayllarni O'qish va Birlashtirish)",
      cat: "text",
      catName: "Matn & Oqimlar",
      desc: "Fayl tarkibini to'liq terminalga chiqaradi yoki bir nechta faylni birlashtirib yangi faylga yo'naltiradi.",
      syntax: "cat [BAYROQLAR] [FAYLLAR]",
      flags: [
        { flag: "-n", desc: "Barcha satrlarni 1 dan boshlab raqamlash" },
        { flag: "-b", desc: "Faqat bo'sh bo'lmagan satrlarni raqamlash" },
        { flag: "-E", desc: "Har bir satr oxiriga '$' belgisini qo'yish" }
      ],
      example: "cat -n /etc/passwd\ncat part1.txt part2.txt > full.txt",
      analogy: "Kitobni varaqlamasdan, boshidan oxirigacha ovoz chiqarib o'qib berish."
    },
    {
      cmd: "head",
      name: "Head (Faylning Boshlang'ich Qismini Chiqarish)",
      cat: "text",
      catName: "Matn & Oqimlar",
      desc: "Faylning dastlabki bir necha satrini ko'rsatadi (sukut bo'yicha 10 ta satr).",
      syntax: "head -n [SON] FAYL",
      flags: [
        { flag: "-n", desc: "Ko'rsatiladigan satrlar soni (masalan -n 5)" },
        { flag: "-c", desc: "Ko'rsatiladigan baytlar soni" }
      ],
      example: "head -n 5 /etc/passwd",
      analogy: "Gazetaning birinchi betidagi sarlavhalarni tezda ko'zdan kechirish."
    },
    {
      cmd: "tail",
      name: "Tail (Faylning Oxirgi Qismini Chiqarish)",
      cat: "text",
      catName: "Matn & Oqimlar",
      desc: "Faylning oxirgi satrlarini chiqaradi. -f bayrog'i real vaqtda server loglarini kuzatish uchun eng mashhur vositadir.",
      syntax: "tail [BAYROQLAR] FAYL",
      flags: [
        { flag: "-n", desc: "Oxirgi satrlar soni (masalan -n 10)" },
        { flag: "-f", desc: "Follow: Faylga yangi yozilayotgan satrlarni real vaqt rejimida jonli kuzatish" }
      ],
      example: "tail -f /var/log/syslog",
      analogy: "Telegram chatining eng so'nggi xabarlarini kutib turish. Yangi xabar kelishi bilan ekranga darhol chiqadi."
    },
    {
      cmd: "wc",
      name: "Word Count (Satr, So'z va Baytlar Hisoblagichi)",
      cat: "text",
      catName: "Matn & Oqimlar",
      desc: "Matnli fayl ichidagi satrlar, so'zlar va baytlar sonini sanab beradi.",
      syntax: "wc [BAYROQLAR] FAYL",
      flags: [
        { flag: "-l", desc: "Faqat satrlar sonini (lines) sanash" },
        { flag: "-w", desc: "Faqat so'zlar sonini (words) sanash" },
        { flag: "-c", desc: "Faqat baytlar sonini (bytes) sanash" },
        { flag: "-m", desc: "Faqat belgilar sonini (characters) sanash" }
      ],
      example: "wc -l /etc/passwd\n42 /etc/passwd",
      analogy: "Insho tekshiruvchi o'qituvchining so'z sanash kalkulyatori."
    },
    {
      cmd: "grep",
      name: "Global Regular Expression Print (Muntazam Qidiruv)",
      cat: "text",
      catName: "Matn & Oqimlar",
      desc: "Fayllar yoki buyruq oqimi ichidan berilgan qolip (pattern/regex) bo'yicha mos keluvchi satrlarni filtrlaydi.",
      syntax: "grep [BAYROQLAR] 'QOLIP' FAYL",
      flags: [
        { flag: "-i", desc: "Katta-kichik harflarni farqlamaslik (ignore-case)" },
        { flag: "-v", desc: "Invert: Mos kelmaydigan barcha satrlarni chiqarish" },
        { flag: "-c", desc: "Mos kelgan satrlar sonini sanash" },
        { flag: "-r", desc: "Papka ichidagi barcha fayllarni rekursiv qidirish" },
        { flag: "-E", desc: "Kengaytirilgan Regex (Extended Regular Expressions) dan foydalanish" }
      ],
      example: "grep -i 'error' /var/log/syslog | wc -l",
      analogy: "Qum ichidan metall detektor yordamida tilla tangalarni topib olish."
    },
    {
      cmd: "sort",
      name: "Sort (Qatorlarni Tartiblash)",
      cat: "text",
      catName: "Matn & Oqimlar",
      desc: "Matn qatorlarini alifbo yoki raqamlar bo'yicha tartiblaydi.",
      syntax: "sort [BAYROQLAR] FAYL",
      flags: [
        { flag: "-n", desc: "Raqamli tartiblash (1, 2, 10 tartibida, 1, 10, 2 emas)" },
        { flag: "-r", desc: "Teskari tartibda (kamayish tartibida)" },
        { flag: "-u", desc: "Takrorlangan qatorlarni olib tashlash (unique)" },
        { flag: "-k", desc: "Aniq ustun (kolonka) bo'yicha saralash" }
      ],
      example: "sort -n -r scores.txt",
      analogy: "Kartalarni kattaligi bo'yicha tartiblab chiqish."
    },
    {
      cmd: "uniq",
      name: "Unique (Takrorlangan Qatorlarni Filtrlash)",
      cat: "text",
      catName: "Matn & Oqimlar",
      desc: "Ketma-ket kelgan bir xil satrlarni bittaga tushiradi yoki ularning necha marta takrorlanganini hisoblaydi.",
      syntax: "uniq [BAYROQLAR] [FAYL]",
      flags: [
        { flag: "-c", desc: "Har bir satr necha marta uchraganini ko'rsatish" },
        { flag: "-d", desc: "Faqat takrorlangan satrlarni chiqarish" },
        { flag: "-u", desc: "Faqat takrorlanmagan yagona satrlarni chiqarish" }
      ],
      example: "sort ip_addresses.txt | uniq -c | sort -nr",
      analogy: "Bir xil kvitansiyalarni yig'ib, har biridan nechtadan ekanligini belgilab qo'yish."
    },

    // -------------------------------------------------------------------------
    // 3. RUXSATLAR & FOYDALANUVCHILAR (WEEK 2)
    // -------------------------------------------------------------------------
    {
      cmd: "chmod",
      name: "Change Mode (Fayl Ruxsatlarini O'zgartirish)",
      cat: "perm",
      catName: "Ruxsatlar & Foydalanuvchilar",
      desc: "Fayl yoki jildga o'qish (r=4), yozish (w=2) va ijro etish (x=1) huquqlarini raqamli yoki belgili formatda o'rnatadi.",
      syntax: "chmod [RUXSAT] FAYL",
      flags: [
        { flag: "755", desc: "Egasi: rwx (7), Guruh: r-x (5), Boshqalar: r-x (5)" },
        { flag: "644", desc: "Egasi: rw- (6), Guruh: r-- (4), Boshqalar: r-- (4) — standart fayl ruxsati" },
        { flag: "700", desc: "Faqat egasiga to'liq huquq (shaxsiy SSH kalitlar uchun)" },
        { flag: "+x", desc: "Barcha foydalanuvchilarga ijro etish (executable) huquqini qo'shish" },
        { flag: "-R", desc: "Rekursiv tarzda papka va uning barcha ichki fayllariga qo'llash" },
        { flag: "+t", desc: "Sticky Bit: faqat fayl egasi o'chira oladigan qilib himoyalash" }
      ],
      example: "chmod +x deploy.sh\nchmod 755 /srv/app",
      analogy: "Eshik qulfini almashtirish: egasiga 3 ta kalit (ochish, yozish, kirish), mehmonlarga esa faqat derazadan qarash huquqini berish."
    },
    {
      cmd: "chown",
      name: "Change Owner (Fayl Egasini va Guruhini O'zgartirish)",
      cat: "perm",
      catName: "Ruxsatlar & Foydalanuvchilar",
      desc: "Fayl yoki papkaga egalik huquqini boshqa foydalanuvchiga yoki guruhga topshiradi.",
      syntax: "chown [FOYDALANUVCHI]:[GURUH] FAYL",
      flags: [
        { flag: "-R", desc: "Rekursiv ravishda butun katalog daraxtiga qo'llash" }
      ],
      example: "chown -R www-data:www-data /var/www/html",
      analogy: "Mulkdorlik shartnomasini qayta rasmiylashtirish. Uyning yangi egasini davlat reestridan ro'yxatdan o'tkazish."
    },
    {
      cmd: "useradd",
      name: "User Add (Yangi Tizim Foydalanuvchisini Yaratish)",
      cat: "perm",
      catName: "Ruxsatlar & Foydalanuvchilar",
      desc: "Debian/Linux tizimida yangi foydalanuvchi hisobini yaratadi va kerakli parametrlarni sozlaydi.",
      syntax: "useradd [BAYROQLAR] FOYDALANUVCHI",
      flags: [
        { flag: "-m", desc: "Uy katalogini (/home/username) avtomatik yaratish" },
        { flag: "-s", desc: "Standart login qobig'ini (masalan /bin/bash) belgilash" },
        { flag: "-g", desc: "Birlamchi guruhni belgilash" },
        { flag: "-G", desc: "Qo'shimcha ikkilamchi guruhlarga qo'shish (masalan sudo)" }
      ],
      example: "useradd -m -s /bin/bash -G sudo devuser",
      analogy: "Yangi xodimga ofis kaliti, stol-stul va xizmat guvohnomasini topshirish."
    },
    {
      cmd: "usermod",
      name: "User Modify (Foydalanuvchi Sozlamalarini O'zgartirish)",
      cat: "perm",
      catName: "Ruxsatlar & Foydalanuvchilar",
      desc: "Mavjud foydalanuvchining guruhlari, login qobig'i yoki uy katalogini o'zgartiradi.",
      syntax: "usermod [BAYROQLAR] FOYDALANUVCHI",
      flags: [
        { flag: "-aG", desc: "Append Group: Eski guruhlarni saqlab qolgan holda yangi guruhga qo'shish (juda muhim!)" },
        { flag: "-s", desc: "Foydalanuvchi qobig'ini o'zgartirish" },
        { flag: "-L", desc: "Foydalanuvchi hisobini bloklash (Lock)" }
      ],
      example: "usermod -aG docker student",
      analogy: "Xodim lavozimiga yangi vakolatlar qo'shish. -aG bayrog'isiz faqat -G qilinsa, xodimning eski barcha ruxsatlari bekor bo'lib ketadi!"
    },

    // -------------------------------------------------------------------------
    // 4. BASH SKRIPTLASH & AVTOMATLASHTIRISH (WEEK 2 & 3)
    // -------------------------------------------------------------------------
    {
      cmd: "shebang",
      name: "#!/bin/bash (Shebang Direktivasi)",
      cat: "bash",
      catName: "Bash Skriptlash",
      desc: "Skript faylining eng birinchi satrida turishi shart bo'lgan sehrli belgi. Operatsion tizimga ushbu faylni qaysi interpretator (bash, python, sh) orqali bajarish kerakligini ko'rsatadi.",
      syntax: "#!/bin/bash",
      flags: [
        { flag: "#!/usr/bin/env bash", desc: "Portativ variant: tizim PATH bo'yicha bashni o'zi topadi" }
      ],
      example: "#!/bin/bash\necho 'Salom WIUT!'",
      analogy: "Maktub konvertiga yozilgan til ko'rsatkichi: 'Ushbu xat o'zbek tilida yozilgan, tarjimonga o'zbekcha o'qiting'."
    },
    {
      cmd: "variables",
      name: "Bash O'zgaruvchilari & Maxsus Parametrlar",
      cat: "bash",
      catName: "Bash Skriptlash",
      desc: "Bashda ma'lumotlarni saqlash va tizim holatini tekshirish uchun o'zgaruvchilar.",
      syntax: "NAME='Qiymat'  # Diqqat: '=' atrofida probel bo'lmasligi shart!",
      flags: [
        { flag: "$?", desc: "Oxirgi bajarilgan buyruqning chiqish kodi (0 = muvaffaqiyatli, 1+ = xato)" },
        { flag: "$#", desc: "Skriptga uzatilgan argumentlar soni" },
        { flag: "$1, $2", desc: "Skriptga berilgan 1-chi va 2-chi pozitsion argumentlar" },
        { flag: "$$", desc: "Joriy skript jarayonining PID raqami" }
      ],
      example: "NAME='Ali'\necho \"Salom $NAME, Exit code: $?\"",
      analogy: "Qutiga yorliq yopishtirish. $? esa eng so'nggi amal muvaffaqiyatli bo'lgan yoki yo'qligini ko'rsatuvchi svetofor signali."
    },
    {
      cmd: "if_else",
      name: "Bash If-Else Shart Konstruksiyasi",
      cat: "bash",
      catName: "Bash Skriptlash",
      desc: "Berilgan shart bajarilishiga qarab skriptning turli qismlarini ishga tushirish.",
      syntax: "if [ SHART ]; then ... elif [ SHART ]; then ... else ... fi",
      flags: [
        { flag: "-f FAYL", desc: "Fayl mavjud va oddiy fayl ekanligini tekshirish" },
        { flag: "-d KATALOG", desc: "Katalog mavjudligini tekshirish" },
        { flag: "-z SATR", desc: "Satr bo'sh ekanligini tekshirish" },
        { flag: "-eq, -ne", desc: "Tenglik va teng emaslik (raqamlar uchun)" }
      ],
      example: "if [ -f /etc/passwd ]; then\n  echo 'Fayl topildi'\nfi",
      analogy: "Chorrahadagi yo'l belgisi: agar yomg'ir yog'sa soyabonni och, aks holda yo'lda davom et."
    },
    {
      cmd: "loops",
      name: "Bash Takrorlanish Sikllari (For & While)",
      cat: "bash",
      catName: "Bash Skriptlash",
      desc: "Bir xil amallarni ro'yxat bo'yicha yoki shart bajarilguniga qadar takroriy bajarish.",
      syntax: "for ITEM in RO'YXAT; do ... done\nwhile [ SHART ]; do ... done",
      flags: [
        { flag: "seq 1 10", desc: "1 dan 10 gacha raqamlar ketma-ketligini generatsiya qilish" }
      ],
      example: "for i in {1..5}; do\n  echo \"Server #$i tekshirildi\"\ndone",
      analogy: "Konveyer lentasi: har bir qutini birin-ketin olib, markalash va keyingisiga o'tish."
    },

    // -------------------------------------------------------------------------
    // 5. JARAYONLAR, SIGNALLAR & FORK() (WEEK 3 & 4)
    // -------------------------------------------------------------------------
    {
      cmd: "ps",
      name: "Process Status (Faol Jarayonlar Holati)",
      cat: "proc",
      catName: "Jarayonlar & Signallar",
      desc: "Tizimda ishlayotgan barcha jarayonlar (PID, foydalanuvchi, CPU/Xotira ulushi) suratini chiqaradi.",
      syntax: "ps [BAYROQLAR]",
      flags: [
        { flag: "aux", desc: "BSD formati: tizimdagi barcha jarayonlarni batafsil ko'rsatish" },
        { flag: "-ef", desc: "Standart UNIX formati: to'liq buyruq satri va PPID bilan chiqarish" },
        { flag: "--forest", desc: "Jarayonlar daraxtini (ota-bola munosabatlarini) chiroyli ko'rsatish" }
      ],
      example: "ps aux | grep nginx",
      analogy: "Kasalxona monitori: hozir qaysi bemorlar bor, ularning puls va harorati qanday."
    },
    {
      cmd: "top",
      name: "Table of Processes (Jonli Tizim Monitori)",
      cat: "proc",
      catName: "Jarayonlar & Signallar",
      desc: "Real vaqt rejimida CPU, RAM va eng ko'p resurs yeyayotgan jarayonlarni dinamik yangilab turadi.",
      syntax: "top [BAYROQLAR]",
      flags: [
        { flag: "-u", desc: "Faqat berilgan foydalanuvchi jarayonlarini ko'rsatish" },
        { flag: "-p", desc: "Faqat berilgan PID jarayonini kuzatish" }
      ],
      example: "top",
      analogy: "Aeroport dispetcherlik ekrani: havoda nechta samolyot bor, qaysi biri eng ko'p yoqilg'i sarflayapti."
    },
    {
      cmd: "kill",
      name: "Kill (Jarayonlarga Signal Yuborish)",
      cat: "proc",
      catName: "Jarayonlar & Signallar",
      desc: "Jarayonga tugatish yoki boshqaruv signallarini uzatadi.",
      syntax: "kill -[SIGNAL] PID",
      flags: [
        { flag: "-15 (SIGTERM)", desc: "Yumshoq to'xtatish signali (jarayonga ma'lumotlarni saqlab yopilishiga imkon beradi)" },
        { flag: "-9 (SIGKILL)", desc: "Majburiy va darhol o'ldirish signali (jarayon rad eta olmaydi)" },
        { flag: "-1 (SIGHUP)", desc: "Konfiguratsiyani qayta yuklash signali" }
      ],
      example: "kill -15 1245\nkill -9 9999",
      analogy: "SIGTERM: xodimga 'ishlaringizni yig'ishtiring, ofis yopilyapti' deyish. SIGKILL: elektr tokini to'satdan uzib qo'yish."
    },
    {
      cmd: "fork",
      name: "fork() System Call (Jarayonni Ikkiga Ko'paytirish)",
      cat: "proc",
      catName: "Jarayonlar & Signallar",
      desc: "Ota jarayonning aynan 1:1 nusxasi bo'lgan yangi bola (child) jarayonni vujudga keltiradi. Ota jarayonga bolaning PID raqami, bolaga esa 0 qaytadi.",
      syntax: "pid = os.fork()  # Python da",
      flags: [
        { flag: "pid > 0", desc: "Ota jarayon bloki (parent process)" },
        { flag: "pid == 0", desc: "Bola jarayon bloki (child process)" },
        { flag: "pid < 0", desc: "Xatolik: tizimda yangi jarayon yaratish uchun xotira yetmadi" }
      ],
      example: "import os\npid = os.fork()\nif pid == 0:\n  print('Men bola jarayonman!')\nelse:\n  print(f'Men otaman, bolam PID={pid}')",
      analogy: "Hujayraning mitoz bo'linishi. Bitta tirik organizmdan aynan bir xil xususiyatga ega ikkinchi organizm ajralib chiqadi."
    },

    // -------------------------------------------------------------------------
    // 6. DEVOPS, SCHEDULING & XOTIRA (WEEK 5 & 6)
    // -------------------------------------------------------------------------
    {
      cmd: "cron",
      name: "Cron & Crontab (Vaqt Bo'yicha Rejalashtiruvchi)",
      cat: "devops",
      catName: "DevOps & Xotira",
      desc: "Vazifalarni har daqiqa, soat, kun yoki haftada avtomatik ishga tushirish xizmati.",
      syntax: "* * * * * BUYRUQ  # (Daqiqa Soat Kun Oy Hafta_kuni)",
      flags: [
        { flag: "crontab -e", desc: "Joriy foydalanuvchining cron jadvalini tahrirlash" },
        { flag: "crontab -l", desc: "Mavjud rejalashtirilgan vazifalar ro'yxatini ko'rish" },
        { flag: "crontab -r", desc: "Barcha rejalashtirilgan cron vazifalarini o'chirib tashlash" }
      ],
      example: "0 2 * * * /backup/db_backup.sh  # Har kecha soat 02:00 da",
      analogy: "Budilnik: belgilangan vaqt kelganda avtomatik jiringlab, vazifani bajarishga tushadi."
    },
    {
      cmd: "free",
      name: "Free (Operativ Xotira Holati)",
      cat: "devops",
      catName: "DevOps & Xotira",
      desc: "Tizimning jami, ishlatilayotgan, bo'sh RAM va Swap (almashtirish) xotirasini ko'rsatadi.",
      syntax: "free [BAYROQLAR]",
      flags: [
        { flag: "-h", desc: "Inson tushunadigan formatda (GB, MB) chiqarish" },
        { flag: "-m", desc: "Megabaytlarda ko'rsatish" },
        { flag: "-s 2", desc: "Har 2 soniyada yangilab turish" }
      ],
      example: "free -h\nMem: 16Gi total, 4.2Gi used, 9.8Gi free",
      analogy: "Hamyondagi naqd pul va bank kartasidagi mablag'ni tekshirib olish."
    },
    {
      cmd: "docker",
      name: "Docker (Konteynerlashtirish Platformasi)",
      cat: "devops",
      catName: "DevOps & Xotira",
      desc: "Ilovalarni va ularning barcha bog'liqliklarini alohida izolyatsiyalangan konteynerlarda yurgizish.",
      syntax: "docker [KOMANDA] [PARAMETRLAR]",
      flags: [
        { flag: "run -d -p 80:80 nginx", desc: "Fonda 80-portni ulab Nginx konteynerini ishga tushirish" },
        { flag: "ps", desc: "Hozir ishlayotgan faol konteynerlarni ko'rish" },
        { flag: "ps -a", desc: "To'xtagan konteynerlarni ham ko'rsatish" },
        { flag: "stop ID", desc: "Konteynerni to'xtatish" },
        { flag: "exec -it ID bash", desc: "Ishlayotgan konteyner ichiga interaktiv terminal ochish" }
      ],
      example: "docker run -d --name my-web -p 8080:80 nginx",
      analogy: "Dengiz yuk konteyneri: ichida mebel bormi yoki mashina, kema uchun farqi yo'q — u xavfsiz va alohida tashiladi."
    }
  ];

  // Helper function to build modal HTML
  function buildDictionaryModalHtml() {
    return `
      <div class="os-dict-overlay" id="osDictOverlay">
        <div class="os-dict-modal">
          
          <div class="os-dict-header">
            <div class="os-dict-title-box">
              <span class="os-dict-title-icon">📖</span>
              <div>
                <div class="os-dict-title">Operating Systems — Barcha 6 Haftalik Buyruqlar Lug'ati</div>
                <div class="os-dict-sub">Linux CLI, Inodelar, Bash skriptlar, fork(), Xotira va Docker bo'yicha to'liq qo'llanma</div>
              </div>
            </div>
            <button class="os-dict-close" id="btnCloseOsDict" title="Yopish (Esc)">✕</button>
          </div>

          <div class="os-dict-controls">
            <div class="os-dict-search-wrap">
              <span class="os-dict-search-icon">🔍</span>
              <input type="text" id="osDictSearchInput" class="os-dict-search-input" placeholder="Buyruq, bayroq yoki tushunchani qidiring (masalan: pwd, chmod, fork, $?, cron)..." autocomplete="off" />
            </div>

            <div class="os-dict-categories" id="osDictCategories">
              <button class="os-cat-pill active" data-cat="all">Barchasi (Hammasi)</button>
              <button class="os-cat-pill" data-cat="nav">📁 Navigatsiya &amp; Inodelar</button>
              <button class="os-cat-pill" data-cat="text">📜 Matn &amp; Oqimlar</button>
              <button class="os-cat-pill" data-cat="perm">🔒 Ruxsatlar &amp; Foydalanuvchilar</button>
              <button class="os-cat-pill" data-cat="bash">⚡ Bash Skriptlash</button>
              <button class="os-cat-pill" data-cat="proc">⚙️ Jarayonlar &amp; fork()</button>
              <button class="os-cat-pill" data-cat="devops">🐳 DevOps, Cron &amp; Docker</button>
            </div>
          </div>

          <div class="os-dict-content" id="osDictContent"></div>

          <div class="os-dict-footer">
            <span id="osDictCounter">Ko'rsatilmoqda: 0 ta buyruq</span>
            <span>Maslahat: Istalgan buyruqni bitta bosishda nusxalashingiz mumkin</span>
          </div>

        </div>
      </div>
    `;
  }

  // Render cards
  function renderDictionaryEntries(filterText = "", activeCategory = "all") {
    const container = document.getElementById("osDictContent");
    const counter = document.getElementById("osDictCounter");
    if (!container) return;

    const query = filterText.toLowerCase().trim();

    const filtered = OS_DICTIONARY_DATA.filter(item => {
      // Category filter
      if (activeCategory !== "all" && item.cat !== activeCategory) {
        return false;
      }
      // Text search
      if (!query) return true;
      const haystack = `${item.cmd} ${item.name} ${item.desc} ${item.example} ${item.analogy} ${item.flags.map(f => f.flag + ' ' + f.desc).join(' ')}`.toLowerCase();
      return haystack.includes(query);
    });

    if (counter) {
      counter.textContent = `Ko'rsatilmoqda: ${filtered.length} ta buyruq va tushuncha`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--text-muted);">
          <div style="font-size: 36px; margin-bottom: 12px;">🔍</div>
          <div style="font-size: 16px; color: #fff; font-weight: 600;">Hech qanday buyruq topilmadi</div>
          <div style="font-size: 13px; margin-top: 6px;">Qidiruv so'zini o'zgartirib ko'ring yoki boshqa kategoriyani tanlang.</div>
        </div>
      `;
      return;
    }

    let html = "";
    filtered.forEach(item => {
      html += `
        <article class="os-cmd-entry">
          <div class="os-entry-head">
            <div class="os-entry-title-box">
              <span class="os-entry-cmd">${escapeHtml(item.cmd)}</span>
              <span class="os-entry-cat-badge">${escapeHtml(item.catName)}</span>
            </div>
            <button class="btn-copy-cmd" onclick="window.copyToClipboard('${escapeAttr(item.example.split('\n')[0])}')">Nusxa olish 📋</button>
          </div>

          <div style="font-size: 14px; font-weight: 600; color: #fff; margin-bottom: 6px;">${escapeHtml(item.name)}</div>
          <p class="os-entry-desc">${escapeHtml(item.desc)}</p>

          <div class="os-entry-block">
            <div class="os-block-title">📌 Sintaksis:</div>
            <div class="os-code-snippet">${escapeHtml(item.syntax)}</div>
          </div>

          ${item.flags && item.flags.length > 0 ? `
            <div class="os-entry-block">
              <div class="os-block-title">🚩 Eng Muhim Bayroqlar &amp; Variantlar:</div>
              <div class="os-flags-grid">
                ${item.flags.map(f => `
                  <div class="os-flag-item">
                    <span class="os-flag-name">${escapeHtml(f.flag)}</span>
                    <span style="color: #cbd5e1;">${escapeHtml(f.desc)}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}

          <div class="os-entry-block">
            <div class="os-block-title">💡 Amaliy Misol (Debian Server):</div>
            <div class="os-code-snippet">${escapeHtml(item.example)}</div>
          </div>

          <div class="os-analogy-box">
            <b>🏢 Real Hayotiy Analogi:</b> ${escapeHtml(item.analogy)}
          </div>
        </article>
      `;
    });

    container.innerHTML = html;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttr(str) {
    if (!str) return "";
    return String(str).replace(/'/g, "\\'").replace(/"/g, "&quot;");
  }

  window.copyToClipboard = function (text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showCopyToast("Buyruq nusxalandi!");
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showCopyToast("Buyruq nusxalandi!");
    }
  };

  function showCopyToast(msg) {
    let toast = document.getElementById("osCopyToast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "osCopyToast";
      toast.style.cssText = "position:fixed; bottom:24px; left:50%; transform:translateX(-50%); background:#0284c7; color:#fff; padding:8px 18px; border-radius:6px; font-weight:700; z-index:999999; box-shadow:0 4px 14px rgba(0,0,0,0.5); font-size:13px; transition:opacity 0.2s;";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    setTimeout(() => {
      toast.style.opacity = "0";
    }, 1800);
  }

  // Global open / close
  window.openOsDictionary = function () {
    let overlay = document.getElementById("osDictOverlay");
    if (!overlay) {
      document.body.insertAdjacentHTML("beforeend", buildDictionaryModalHtml());
      overlay = document.getElementById("osDictOverlay");
      bindDictionaryEvents();
    }
    overlay.classList.add("active");
    renderDictionaryEntries();
    const input = document.getElementById("osDictSearchInput");
    if (input) {
      input.value = "";
      setTimeout(() => input.focus(), 60);
    }
  };

  window.closeOsDictionary = function () {
    const overlay = document.getElementById("osDictOverlay");
    if (overlay) overlay.classList.remove("active");
  };

  function bindDictionaryEvents() {
    const overlay = document.getElementById("osDictOverlay");
    const closeBtn = document.getElementById("btnCloseOsDict");
    const searchInput = document.getElementById("osDictSearchInput");
    const catPills = document.querySelectorAll(".os-cat-pill");

    let currentCat = "all";

    if (closeBtn) {
      closeBtn.addEventListener("click", window.closeOsDictionary);
    }

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) window.closeOsDictionary();
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        renderDictionaryEntries(e.target.value, currentCat);
      });
    }

    catPills.forEach(pill => {
      pill.addEventListener("click", () => {
        catPills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        currentCat = pill.dataset.cat || "all";
        renderDictionaryEntries(searchInput ? searchInput.value : "", currentCat);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay && overlay.classList.contains("active")) {
        window.closeOsDictionary();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        window.openOsDictionary();
      }
    });
  }

  // Auto attach button trigger
  document.addEventListener("DOMContentLoaded", () => {
    const triggerBtn = document.getElementById("btnOpenDictionary");
    if (triggerBtn) {
      triggerBtn.addEventListener("click", window.openOsDictionary);
    }
  });

})();
