/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — MASTER LINUX COMMAND & PIPELINE ANATOMY ENGINE
 * Universal Engine for Weeks 1, 2, 3, 4, 5, and 6.
 * Features:
 * 1. Multi-Stage Pipeline (|) & Compound (&&, ||, ;, >, >>, 2>&1, $()) Visual Dataflow
 * 2. Step-by-Step Writing Blueprints (Syntax ordering, quoting, spaces)
 * 3. Omission Risk Analysis (⚠️ Nima uchun kerak va bo'lmasa nima bo'ladi?)
 * 4. Real-World Production Alternatives (DevOps & SysAdmin practice)
 * 5. 380+ Comprehensive Master Flag Dictionary for Search & Breakdown
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    var instance = factory();
    root.COMMAND_ANATOMY = instance;
    root.COMMAND_ANATOMY_W5 = instance;
    root.COMMAND_ANATOMY_W6 = instance;
  }
})(typeof self !== 'undefined' ? self : this, function () {
  "use strict";

  // --- 1. OPERATORS & COMBINATIONS KNOWLEDGE BASE ---
  var OPERATORS = {
    "|": {
      name: "Unix Anonymous Pipe (Quvur / Ma'lumotlar oqimini uzatish)",
      role: "Oqim bog'lovchi",
      desc: "Chap tomondagi jarayonning standart chiqish (STDOUT) oqimini o'ng tomondagi jarayonning standart kirish (STDIN) oqimiga to'g'ridan-to'g'ri (diskka yozmasdan, operativ xotiradagi 64KB kernel buffer orqali) ulaydi.",
      syntax: "BUYRUQ1 | BUYRUQ2",
      whyUse: "Bir nechta sodda buyruqlarni birlashtirib, kuchli va murakkab konveyer (pipeline) hosil qilish imkonini beradi.",
      omissionRisk: "⚠️ AGAR | BO'LMASA: Buyruqlar alohida bajariladi, birinchi buyruq natijasi terminalga chiqib ketadi va ikkinchi buyruqqa yetib bormaydi!"
    },
    ">": {
      name: "STDOUT Redirection / Truncate (Chiqishni faylga tozalab yozish)",
      role: "Chiqishni yo'naltiruvchi",
      desc: "Terminalga chiqishi kerak bo'lgan matnni ko'rsatilgan faylga yo'naltiradi. Agar fayl mavjud bo'lsa, uning ichidagi hamma narsani TOZALAB (truncate) yangidan yozadi.",
      syntax: "BUYRUQ > fayl.txt",
      whyUse: "Dastur natijasini, hisobotni yoki konfiguratsiyani toza faylga saqlash uchun.",
      omissionRisk: "⚠️ AGAR > BO'LMASA: Ma'lumot faylga yozilmasdan terminal ekranida qolib ketadi. DIQQAT: Mavjud faylga yangi qator qo'shish kerak bo'lsa, > emas, balki >> ishlatilishi shart, aks holda eski ma'lumotlar o'chib ketadi!"
    },
    ">>": {
      name: "STDOUT Append Redirection (Chiqishni fayl oxiriga qo'shish)",
      role: "Chiqishni qo'shuvchi",
      desc: "Standart chiqishni ko'rsatilgan faylning OXIRIGA yangi qator qilib qo'shadi (mavjud ma'lumotlarga zarar yetkazmaydi).",
      syntax: "BUYRUQ >> log.txt",
      whyUse: "Server loglari, audit yozuvlari va doimiy monitoring natijalarini to'plash uchun.",
      omissionRisk: "⚠️ AGAR >> O'RNIGA > QO'YILSA: Butun server jurnali (log fayli) tozalab yuboriladi va oylik audit ma'lumotlari yo'qoladi!"
    },
    "<": {
      name: "STDIN Redirection (Kirishni fayldan o'qish)",
      role: "Kirishni yo'naltiruvchi",
      desc: "Dastur klaviaturadan kiritishni kutmasdan, to'g'ridan-to'g'ri ko'rsatilgan fayl ichidagi matnni o'zining STDIN kirishi sifatida qabul qiladi.",
      syntax: "BUYRUQ < fayl.sql",
      whyUse: "Ma'lumotlar bazasiga skript yuklashda (masalan, mysql db < dump.sql) yoki xatlarni yuborishda.",
      omissionRisk: "Dastur klaviaturadan matn kiritilishini cheksiz kutib turadi."
    },
    "2>": {
      name: "STDERR Redirection (Xatoliklar oqimini yo'naltirish)",
      role: "Xatoliklar filtri",
      desc: "Fayl deskriptori 2 bo'lgan standart xatoliklar (STDERR) oqimini alohida faylga yoki /dev/null ga yo'naltiradi.",
      syntax: "BUYRUQ 2> xatolar.log yoki BUYRUQ 2> /dev/null",
      whyUse: "Ruxsati yetmagan xabarlar (Permission denied) yoki ogohlantirishlar asosiy natijaga xalaqit bermasligi uchun.",
      omissionRisk: "⚠️ AGAR 2> /dev/null BO'LMASA: Ekran yuzlab 'Permission denied' xatoliklariga to'lib, haqiqiy foydali natijani topib bo'lmaydi."
    },
    "2>&1": {
      name: "Merge STDERR to STDOUT (Xatoliklar va Natijani bitta oqimga birlashtirish)",
      role: "Oqimlarni birlashtiruvchi",
      desc: "Standart xatolik (2) deskriptorini standart chiqish (1) deskriptoriga ulaydi. Natijada xatolar ham, oddiy chiqish ham bitta faylga yoki bitta quvurga yo'naltiriladi.",
      syntax: "BUYRUQ > barchasi.log 2>&1",
      whyUse: "Cron jadvallari va avtomatlashtirishda barcha chiqishlarni (shu jumladan yuz bergan xatolarni) bitta log faylida to'liq saqlab qolish uchun.",
      omissionRisk: "Cron xato berganida nima sodir bo'lgani logda ko'rinmay qoladi va nosozlikni aniqlash imkonsiz bo'ladi."
    },
    "&&": {
      name: "Logical AND (Mantiqiy VA — Muvaffaqiyatli bo'lsagina davom etish)",
      role: "Mantiqiy zanjir",
      desc: "Chapdagi buyruq 0 exit-code (muvaffaqiyat) bilan tugagan taqdirdagina o'ngdagi buyruqni ishga tushiradi.",
      syntax: "BUYRUQ1 && BUYRUQ2",
      whyUse: "Xavfsiz zanjirlar yaratishda: masalan, papka yaratilsagina uning ichiga kirish (mkdir test && cd test) yoki dastur kompilatsiya bo'lsagina uni ishga tushirish (gcc main.c && ./a.out).",
      omissionRisk: "⚠️ AGAR && O'RNIGA ; ISHLATILSA: Birinchi buyruq xatoga uchrasa ham ikkinchisi xavfli tarzda ishga tushib, mavjud bo'lmagan fayl ustida amal bajaradi!"
    },
    "||": {
      name: "Logical OR (Mantiqiy YOKI — Xatolik yuz bergandagina zaxira buyruqni bajarish)",
      role: "Xatolikni ushlovchi",
      desc: "Chapdagi buyruq noldan farqli exit-code (xato) qaytarsa, o'ngdagi zaxira buyruq ishga tushadi.",
      syntax: "BUYRUQ || echo 'Xatolik yuz berdi!'",
      whyUse: "Zaxira rejaga o'tish yoki xatolik haqida xabar berishda.",
      omissionRisk: "Xatoliklar e'tiborsiz qolib, skript jim to'xtab qoladi."
    },
    "$()": {
      name: "Command Substitution (Buyruqni Subshell ichida bajarib natijasini parametrga berish)",
      role: "Subshell qiymat beruvchi",
      desc: "Qavs ichidagi buyruqni alohida subshell jarayonida bajaradi va uning STDOUT natijasini tashqi buyruqning argumenti sifatida joylashtiradi.",
      syntax: "BUYRUQ $(ICHKI_BUYRUQ)",
      whyUse: "Dinamik qiymatlar bilan ishlashda: masalan, kill -9 $(pgrep nginx) yoki tar -czf backup-$(date +%F).tar.gz /var/www.",
      omissionRisk: "Buyruq natijasini qo'lda nusxalab yozishga to'g'ri keladi, avtomatlashtirish imkonsiz bo'ladi."
    },
    "xargs": {
      name: "Extended Arguments Converter (Standart oqimni buyruq argumentlariga aylantiruvchi)",
      role: "Argument konvertori",
      desc: "Quvurdan kelayotgan satrlarni yoki so'zlarni qabul qilib, ularni keyingi buyruqning parametrlar qatoriga (command-line arguments) aylantirib beradi.",
      syntax: "BUYRUQ1 | xargs BUYRUQ2",
      whyUse: "find yoki grep topgan yuzlab fayllarni bitta buyruq bilan (masalan, find . -name '*.tmp' | xargs rm -f) tezkor o'chirishda.",
      omissionRisk: "⚠️ AGAR xargs BO'LMASA: rm buyrug'i quvurdan kelgan satrlarni argument deb bilmaydi va hech narsa o'chirilmaydi!"
    }
  };

  // --- 2. ENCYCLOPEDIC LINUX COMMANDS KNOWLEDGE BASE (W1 - W6) ---
  var KNOWLEDGE_BASE = {
    // === WEEK 1: NAVIGATION, VFS, INODES & FILES ===
    pwd: {
      name: "Print Working Directory (Joriy Katalogni Chiqarish)",
      whatItDoes: "Linux VFS (Virtual File System) daraxtida foydalanuvchi ayni daqiqada qaysi jildda turganini aniqlaydi va ildizdan (/) boshlangan to'liq absolyut manzilni ko'rsatadi.",
      whyFlags: "Fizik real yo'l va simvolik bog'lamli (symlink) mantiqiy yo'llarni ajratish uchun bayroqlar ishlatiladi.",
      syntaxPattern: "pwd [BAYROQ]",
      generalWhen: "Serverga kirganda, nisbiy manzillar bilan ishlashdan oldin yoki skript ichida joriy papkani o'zgaruvchiga olishda.",
      generalWithout: "Foydalanuvchi qayerda ekanini bilmay, noto'g'ri joyda fayl yaratishi yoki boshqa papkadagi fayllarni o'chirib yuborishi mumkin.",
      flags: {
        "-P": { name: "Physical Directory", syntaxPos: "pwd -P", whatItDoes: "Simvolik bog'lamlarni ochib, diskdagi haqiqiy fizik yo'lni ko'rsatadi.", withoutRisk: "Symlink orqasidagi haqiqiy katalog yashirin qoladi." },
        "-L": { name: "Logical Directory", syntaxPos: "pwd -L", whatItDoes: "$PWD muhit o'zgaruvchisidagi mantiqiy simvolik yo'lni ko'rsatadi.", withoutRisk: "Sukut bo'yicha mantiqiy yo'l olinadi." }
      }
    },
    ls: {
      name: "List Directory Contents (Katalog Tarkibini Ko'rish)",
      whatItDoes: "Katalog ichidagi fayllar, kataloglar, ularning inodelari, huquqlari va hajmlarini Linux VFS dentry ro'yxatidan o'qib beradi.",
      whyFlags: "Sukut bo'yicha ls yashirin fayllarni, fayl hajmini, inodelarni va ruxsatlarni ko'rsatmaydi. Shuning uchun bayroqlar shart.",
      syntaxPattern: "ls [BAYROQLAR] [MANZIL]",
      generalWhen: "Har bir papkaga kirganda fayllar bor-yo'qligini, ularning huquqlari va hajmini tekshirishda.",
      generalWithout: "Yashirin konfiguratsiya fayllari (.env, .bashrc) ko'rinmay qoladi va fayl ruxsatlarini bilib bo'lmaydi.",
      flags: {
        "-a": { name: "All files", syntaxPos: "ls -a", whatItDoes: "Nuqta (.) bilan boshlanuvchi yashirin fayllarni ham chiqaradi.", withoutRisk: "⚠️ AGAR -a BO'LMASA: .env, .git, .bashrc kabi o'ta muhim konfiguratsiyalar ko'rinmaydi!" },
        "-l": { name: "Long format", syntaxPos: "ls -l", whatItDoes: "Ruxsatlar (rwx), bog'lamlar, egasi, guruhi, bayt hajmi va sanasi bilan jadval ko'rinishida chiqaradi.", withoutRisk: "Faqat fayl nomlari chiqadi, kim egalik qilishi va ruxsatlari ko'rinmaydi." },
        "-h": { name: "Human readable", syntaxPos: "ls -lh", whatItDoes: "Fayl hajmini baytlarda emas, K, M, G birliklarida tushunarli qilib ko'rsatadi.", withoutRisk: "Hajmlar uzun raqamlar bo'lib ko'rinadi (masalan 104857600 bayt)." },
        "-i": { name: "Inode number", syntaxPos: "ls -i", whatItDoes: "Har bir faylning diskdagi unikal Inode indeks raqamini ko'rsatadi.", withoutRisk: "Qattiq bog'lamlarni (hard link) aniqlab bo'lmaydi." },
        "-R": { name: "Recursive", syntaxPos: "ls -R", whatItDoes: "Barcha ichki kataloglar va ularning ichidagi fayllarni daraxtsimon o'qib chiqadi.", withoutRisk: "Faqat birinchi bosqichdagi fayllar ko'rinadi." },
        "-t": { name: "Time sort", syntaxPos: "ls -lt", whatItDoes: "O'zgartirilgan vaqti bo'yicha saralaydi (eng yangisi yuqorida).", withoutRisk: "Fayllar alifbo tartibida turadi, oxirgi tahrirlangan faylni topish qiyinlashadi." }
      }
    },
    cd: {
      name: "Change Directory (Ishchi Katalogni O'zgartirish)",
      whatItDoes: "Joriy jarayonning ishchi katalogi ko'rsatkichini Linux yadrosida boshqa manzilga yo'naltiradi.",
      whyFlags: "Manzil tokenlari (~, .., -) navigatsiyani tezlashtiradi.",
      syntaxPattern: "cd [MANZIL]",
      generalWhen: "Server fayl tizimi bo'ylab harakatlanishda.",
      generalWithout: "Barcha buyruqlarni uzun absolyut yo'llar bilan yozishga majbur bo'lasiz.",
      flags: {
        "~": { name: "Home directory", syntaxPos: "cd ~", whatItDoes: "Foydalanuvchining uy papkasiga (/home/username) o'tadi.", withoutRisk: "Uzun yo'lni qo'lda yozishga to'g'ri keladi." },
        "..": { name: "Parent directory", syntaxPos: "cd ..", whatItDoes: "Bitta yuqoridagi ota-katalogga qaytadi.", withoutRisk: "Ildizga qarab tez qaytib bo'lmaydi." },
        "-": { name: "Previous directory", syntaxPos: "cd -", whatItDoes: "Oxirgi marta turgan oldingi katalogga tezkor qaytadi.", withoutRisk: "Oldingi katalog manzilini eslab qolishga to'g'ri keladi." }
      }
    },
    mkdir: {
      name: "Make Directory (Yangi Katalog Yaratish)",
      whatItDoes: "Fayl tizimida yangi katalog uchun Inode ajratadi va ota katalog dentry ro'yxatiga yangi yozuv qo'shadi.",
      whyFlags: "Ota papkalar mavjud bo'lmaganda bir vaqtning o'zida butun yo'lni yaratish uchun -p bayrog'i ishlatiladi.",
      syntaxPattern: "mkdir [BAYROQ] MANZIL",
      generalWhen: "Yangi loyiha, zaxira papkasi yoki tizim katalogi ochishda.",
      generalWithout: "Papkalar bo'lmasa fayllarni tizimli saqlab bo'lmaydi.",
      flags: {
        "-p": { name: "Parents flag", syntaxPos: "mkdir -p a/b/c", whatItDoes: "Yo'ldagi barcha yetishmayotgan ota-papkalarni xatosiz, ketma-ket avtomatik yaratadi.", withoutRisk: "⚠️ AGAR -p BO'LMASA: 'No such file or directory' xatosi chiqadi va har bir papkani bittalab ochishga to'g'ri keladi!" },
        "-m": { name: "Mode flag", syntaxPos: "mkdir -m 750 papka", whatItDoes: "Yaratilayotgan papkaga darhol aniq ruxsat huquqlarini (masalan 750) o'rnatadi.", withoutRisk: "Papka umask bo'yicha sukut ruxsati bilan ochiladi." }
      }
    },
    touch: {
      name: "Update Timestamps / Create File (Fayl Yaratish yoki Vaqtini Yangilash)",
      whatItDoes: "Fayl mavjud bo'lsa uning atime/mtime vaqtlarini yangilaydi, agar mavjud bo'lmasa diskda 0 baytli yangi bo'sh fayl yaratadi.",
      whyFlags: "Vaqtni sun'iy o'zgartirish yoki yangi fayl yaratishni taqiqlash uchun bayroqlar ishlatiladi.",
      syntaxPattern: "touch [BAYROQ] FAYL",
      generalWhen: "Bo'sh skript, log yoki trigger fayl yaratishda, Makefile ni qayta ishga tushirishda.",
      generalWithout: "Faylni ochish uchun og'ir matn muharririni ishga tushirishga to'g'ri keladi.",
      flags: {
        "-c": { name: "No create", syntaxPos: "touch -c fayl", whatItDoes: "Agar fayl mavjud bo'lmasa, yangi fayl yaratmaydi.", withoutRisk: "Adashib kiritilgan nom bilan yangi bo'sh fayllar ko'payib ketadi." },
        "-d": { name: "Date string", syntaxPos: "touch -d '2 days ago' fayl", whatItDoes: "Faylga aniq ko'rsatilgan sanani biriktiradi.", withoutRisk: "Faqat joriy vaqt qo'yiladi." }
      }
    },
    cat: {
      name: "Concatenate and Display (Faylni Ekranga Chiqarish yoki Birlashtirish)",
      whatItDoes: "Fayl ichidagi barcha baytlarni diskdan o'qib, standart chiqish (STDOUT) oqimiga uzatadi.",
      whyFlags: "Qator raqamlarini ko'rish yoki bo'sh qatorlarni qisqartirish uchun bayroqlar qo'llaniladi.",
      syntaxPattern: "cat [BAYROQLAR] FAYL...",
      generalWhen: "Kichik va o'rtacha fayllar (konfiguratsiya, log, parollar) tarkibini ko'rishda va quvurlar orqali boshqa vositalarga uzatishda.",
      generalWithout: "Faylni ko'rish uchun har safar muharrirga kirishga to'g'ri keladi.",
      flags: {
        "-n": { name: "Number lines", syntaxPos: "cat -n fayl", whatItDoes: "Barcha qatorlarni 1 dan boshlab tartib raqami bilan chiqaradi.", withoutRisk: "Qatorlar raqamlanmaydi, xato qatorni topish qiyinlashadi." },
        "-b": { name: "Number non-empty", syntaxPos: "cat -b fayl", whatItDoes: "Faqat matnli (bo'sh bo'lmagan) qatorlarni raqamlaydi.", withoutRisk: "Bo'sh qatorlar ham raqamlanadi." },
        "-s": { name: "Squeeze blank", syntaxPos: "cat -s fayl", whatItDoes: "Ketma-ket kelgan bir nechta bo'sh qatorlarni bittaga siqadi.", withoutRisk: "Ekranni ortiqcha bo'shliqlar egallaydi." }
      }
    },
    head: {
      name: "Output Beginning of Files (Faylning Bosh Qismini Chiqarish)",
      whatItDoes: "Faylning boshidan boshlab ko'rsatilgan miqdordagi qator yoki baytlarni ekranga chiqaradi.",
      whyFlags: "Sukut bo'yicha faqat 10 ta qator ko'rsatiladi. Boshqa miqdor uchun -n kerak.",
      syntaxPattern: "head -n [SON] FAYL",
      generalWhen: "Katta ma'lumotlar bazasi yoki million qatorli logning birinchi bir necha qatorini tezkor ko'rib olishda.",
      generalWithout: "Million qatorli faylni birdan ekranga chiqarib terminal qotib qolishi mumkin.",
      flags: {
        "-n": { name: "Number of lines", syntaxPos: "head -n 20 fayl", whatItDoes: "Aynan ko'rsatilgan sondagi birinchi qatorlarni chiqaradi.", withoutRisk: "Sukut bo'yicha faqat 10 ta qator ko'rinadi." },
        "-c": { name: "Number of bytes", syntaxPos: "head -c 100 fayl", whatItDoes: "Faylning boshidan aniq bayt miqdorini o'qiydi.", withoutRisk: "Baytlar bo'yicha aniq kesib bo'lmaydi." }
      }
    },
    tail: {
      name: "Output Last Part of Files (Faylning Oxirgi Qismini Chiqarish)",
      whatItDoes: "Faylning eng oxiridan ko'rsatilgan sondagi qatorlarni o'qiydi yoki faylni jonli kuzatadi.",
      whyFlags: "Jonli server xatolarini real vaqtda kuzatish (-f) va aniq qatorlar sonini berish (-n) uchun.",
      syntaxPattern: "tail [BAYROQLAR] FAYL",
      generalWhen: "Server loglarini jonli kuzatishda (tail -f /var/log/syslog) va oxirgi voqealarni tekshirishda.",
      generalWithout: "Yangi loglar yozilayotganini ko'rish uchun faylni qayta-qayta ochishga to'g'ri keladi.",
      flags: {
        "-f": { name: "Follow mode", syntaxPos: "tail -f /var/log/syslog", whatItDoes: "Faylni yopmasdan ochiq ushlab turadi va yangi yozilgan qatorlarni real vaqtda ekranga uzatadi.", withoutRisk: "⚠️ AGAR -f BO'LMASA: Jonli xatolarni ushlab bo'lmaydi, faqat o'tmishdagi qatorlar ko'rinadi!" },
        "-n": { name: "Lines count", syntaxPos: "tail -n 50 fayl", whatItDoes: "Fayl oxiridan aniq ko'rsatilgan miqdordagi qatorlarni chiqaradi.", withoutRisk: "Sukut bo'yicha faqat oxirgi 10 ta qator chiqadi." }
      }
    },
    cp: {
      name: "Copy Files and Directories (Nusxalash)",
      whatItDoes: "Manba faylni o'qib, nishon manzilda yangi Inode va ma'lumot bloklari bilan to'liq nusxasini yaratadi.",
      whyFlags: "Kataloglarni nusxalashda rekursiv (-r) va ruxsatlarni saqlash (-p) bayroqlari shart.",
      syntaxPattern: "cp [BAYROQLAR] MANBA NISHON",
      generalWhen: "Fayllar zaxirasini olishda, konfiguratsiyalarni ko'paytirishda.",
      generalWithout: "Fayllarni boshqa joyga xavfsiz ko'chirib bo'lmaydi.",
      flags: {
        "-r": { name: "Recursive", syntaxPos: "cp -r papka/ yangi/", whatItDoes: "Katalog va uning ichidagi barcha fayllarni to'liq ichma-ich nusxalaydi.", withoutRisk: "⚠️ AGAR -r BO'LMASA: 'omitting directory' xatosi chiqadi va papka nusxalanmaydi!" },
        "-p": { name: "Preserve attributes", syntaxPos: "cp -p fayl nusxa", whatItDoes: "Asl faylning egasi, guruhi, ruxsatlari va vaqtlarini 100% o'zgarishsiz saqlab qoladi.", withoutRisk: "Nusxalangan fayl ruxsatlari o'zgarib ketib, ilovalar ishlamay qolishi mumkin." },
        "-u": { name: "Update mode", syntaxPos: "cp -u manba nishon", whatItDoes: "Faqat nishondagi fayldan yangiroq bo'lgan fayllarnigina nusxalaydi.", withoutRisk: "Barcha fayllar ustiga keraksiz qayta yoziladi." }
      }
    },
    mv: {
      name: "Move / Rename Files (Ko'chirish yoki Nomini O'zgartirish)",
      whatItDoes: "Agar bitta disk bo'limida bo'lsa, Inode raqami o'zgarmaydi, faqat ota katalogdagi dentry nomi o'zgaradi. Boshqa diskka ko'chirilganda esa nusxalanib eskisini o'chiradi.",
      whyFlags: "Mavjud fayllarni tasodifan ustiga yozib yubormaslik (-i, -n) uchun.",
      syntaxPattern: "mv [BAYROQLAR] MANBA NISHON",
      generalWhen: "Fayl nomini o'zgartirishda yoki boshqa papkaga ko'chirishda.",
      generalWithout: "Fayllarni qayta nomlab bo'lmaydi.",
      flags: {
        "-i": { name: "Interactive", syntaxPos: "mv -i fayl nishon", whatItDoes: "Agar nishon fayl allaqachon mavjud bo'lsa, ustiga yozishdan oldin tasdiqlash so'raydi.", withoutRisk: "Muhim fayllar ogohlantirishsiz o'chib, ustiga yozilib ketishi mumkin!" },
        "-n": { name: "No clobber", syntaxPos: "mv -n fayl nishon", whatItDoes: "Mavjud nishon faylni ustiga yozishni qat'iy taqiqlaydi.", withoutRisk: "Mavjud fayl ustiga yoziladi." }
      }
    },
    rm: {
      name: "Remove Files or Directories (Fayl yoki Katalogni O'chirish)",
      whatItDoes: "Fayl tizimidagi dentry bog'lamini uzadi (unlink). Agar faylga boshqa qattiq bog'lamlar qolmagan bo'lsa, Inode va bloklar bo'shatiladi.",
      whyFlags: "Papkalarni o'chirish (-r) va ogohlantirishsiz majburiy o'chirish (-f) uchun.",
      syntaxPattern: "rm [BAYROQLAR] MANZIL...",
      generalWhen: "Keraksiz vaqtincha fayllar, eski loglar va loyihalarni tozalashda.",
      generalWithout: "Disk keraksiz chiqindi fayllar bilan to'lib ketadi.",
      flags: {
        "-r": { name: "Recursive", syntaxPos: "rm -r papka/", whatItDoes: "Papkani va uning ichidagi barcha fayl va ichki papkalarni butunlay o'chiradi.", withoutRisk: "Papkalar o'chmaydi ('Is a directory' xatosi)." },
        "-f": { name: "Force", syntaxPos: "rm -rf papka/", whatItDoes: "Hech qanday tasdiq so'ramaydi va mavjud bo'lmagan fayllar uchun xato chiqarmaydi.", withoutRisk: "Har bir fayl uchun 'o'chirilsinmi?' deb so'rab terminalni to'xtatib qo'yadi." }
      }
    },
    find: {
      name: "Search for Files in Directory Hierarchy (Fayllarni Qidirish)",
      whatItDoes: "Fayl tizimi daraxtini skanerlab, nomi, turi, hajmi, egasi, ruxsatlari yoki o'zgartirilgan vaqti bo'yicha fayllarni topadi va ular ustida buyruq bajaradi.",
      whyFlags: "Qidiruv mezonlari (nomi, turi, vaqti) va topilgan fayllar ustida buyruq berish (-exec) bayroqlar orqali amalga oshadi.",
      syntaxPattern: "find [MANZIL] [MEZONLAR] [AMAL]",
      generalWhen: "Katta serverda qayerda turgani noma'lum bo'lgan fayllarni topishda va eski fayllarni tozalashda.",
      generalWithout: "Kerakli konfiguratsiya yoki eski 10GB lik log fayllarini topish imkonsiz bo'ladi.",
      flags: {
        "-name": { name: "Name pattern", syntaxPos: "find / -name '*.log'", whatItDoes: "Fayl nomi ko'rsatilgan shablonga mos kelishini tekshiradi.", withoutRisk: "Fayllar nomi bo'yicha filtrlanmaydi." },
        "-type": { name: "File type", syntaxPos: "find . -type f (yoki -type d)", whatItDoes: "Faqat oddiy fayllarni (f) yoki faqat papkalarni (d) saralaydi.", withoutRisk: "Papkalar va fayllar aralashib ketadi." },
        "-mtime": { name: "Modified days", syntaxPos: "find /var/log -mtime +30", whatItDoes: "Ko'rsatilgan kundan oldin o'zgartirilgan eski fayllarni topadi.", withoutRisk: "Eski fayllarni vaqt bo'yicha ajratib bo'lmaydi." },
        "-size": { name: "File size", syntaxPos: "find / -size +100M", whatItDoes: "Ko'rsatilgan hajmdan (masalan 100 Megabaytdan) katta fayllarni qidiradi.", withoutRisk: "Diskni to'ldirib yuborgan bahaybat fayllarni aniqlab bo'lmaydi." },
        "-exec": { name: "Execute command", syntaxPos: "find . -name '*.tmp' -exec rm -f {} \\;", whatItDoes: "Topilgan har bir faylni {} o'rniga qo'yib, ko'rsatilgan buyruqni avtomatik bajaradi.", withoutRisk: "Topilgan fayllarni qo'lda bittalab o'chirishga to'g'ri keladi." }
      }
    },

    // === WEEK 2: PERMISSIONS, USERS, TEXT PROCESSING & PIPELINES ===
    chmod: {
      name: "Change File Modes / Permissions (Fayl Ruxsatlarini O'zgartirish)",
      whatItDoes: "Fayl Inode strukturasidagi ruxsat bitlarini (Read, Write, Execute hamda SUID, SGID, Sticky bit) o'zgartiradi.",
      whyFlags: "Egasi (u), guruhi (g), boshqalar (o) huquqlarini raqamli (oktal: 755, 644, 1777) yoki simvolik (+x, u=rw) boshqarish uchun.",
      syntaxPattern: "chmod [BAYROQ] REJIM MANZIL",
      generalWhen: "Skriptlarga ishga tushirish (+x) berishda, umumiy papkaga Sticky bit (1777) o'rnatishda, parollar faylini (600) himoyalashda.",
      generalWithout: "⚠️ FAYL RUXSATLARI BUZILADI: Skriptlar 'Permission denied' xatosi beradi yoki maxfiy fayllarni begona foydalanuvchilar o'qib oladi!",
      flags: {
        "-R": { name: "Recursive", syntaxPos: "chmod -R 755 /var/www", whatItDoes: "Katalog ichidagi barcha fayl va ichki papkalarga ruxsatlarni bir vaqtda tatbiq etadi.", withoutRisk: "Faqat tashqi katalog o'zgaradi, ichidagi yuzlab fayllar eski ruxsatda qoladi." },
        "+x": { name: "Executable bit", syntaxPos: "chmod +x script.sh", whatItDoes: "Faylni dastur sifatida ishga tushirish huquqini yoqadi.", withoutRisk: "Skriptni to'g'ridan-to'g'ri ./script.sh deb bajarib bo'lmaydi." },
        "1777": { name: "Sticky bit with full access", syntaxPos: "chmod 1777 /srv/shared", whatItDoes: "Har kim fayl yarata oladi, lekin birovning faylini faqat uning haqiqiy egasi yoki root o'chira oladi.", withoutRisk: "⚠️ STICKY BIT BO'LMASA: Begona foydalanuvchilar boshqalarning muhim fayllarini o'chirib yuborishi mumkin!" }
      }
    },
    chown: {
      name: "Change File Owner and Group (Fayl Egasi va Guruhini O'zgartirish)",
      whatItDoes: "Faylning Inode yozuvidagi UID (User ID) va GID (Group ID) raqamlarini yangi ko'rsatilgan foydalanuvchi va guruhga o'tkazadi.",
      whyFlags: "Butun loyihani yangi xizmat foydalanuvchisiga (masalan www-data:www-data) o'tkazishda -R shart.",
      syntaxPattern: "chown [BAYROQ] FOYDALANUVCHI[:GURUH] MANZIL",
      generalWhen: "Veb-server (Nginx/Apache), ma'lumotlar bazasi yoki yangi xodim fayllariga to'liq egalik huquqini topshirishda.",
      generalWithout: "Xizmat dasturlari o'z fayllariga yoza olmay 'Access denied' xatosi beradi.",
      flags: {
        "-R": { name: "Recursive", syntaxPos: "chown -R www-data:www-data /var/www", whatItDoes: "Papkaning barcha ichki fayllari va jildlarining egasini birdaniga o'zgartiradi.", withoutRisk: "Ichki fayllar boshqa foydalanuvchida qolib ketadi." }
      }
    },
    grep: {
      name: "Global Regular Expression Print (Matn Ichidan Qidirish va Filtrlash)",
      whatItDoes: "Fayllar yoki standart kirish (STDIN) oqimidan ko'rsatilgan shablonga (regex) mos keluvchi qatorlarni qidirib topadi va ekranga chiqaradi.",
      whyFlags: "Katta-kichik harflarni inkor qilish (-i), qidiruvni teskari qilish (-v), qator raqamini ko'rish (-n) va rekursiv qidirish (-r) uchun.",
      syntaxPattern: "grep [BAYROQLAR] 'SHABLON' [FAYLLAR...]",
      generalWhen: "Server loglaridan xatoliklarni topishda, konfiguratsiyalarni tahlil qilishda, quvurda kerakli ma'lumotni saralashda.",
      generalWithout: "Minglab qatorli loglarni ko'z bilan bittalab o'qib chiqishga majbur bo'lasiz.",
      flags: {
        "-i": { name: "Ignore case", syntaxPos: "grep -i 'error' log.txt", whatItDoes: "Katta va kichik harflarni bir xil deb hisoblaydi ('Error', 'ERROR', 'error' barchasini topadi).", withoutRisk: "⚠️ AGAR -i BO'LMASA: Bosh harf bilan yozilgan xatoliklar qolib ketadi!" },
        "-v": { name: "Invert match", syntaxPos: "grep -v 'grep' yoki grep -v '^#'", whatItDoes: "Shablonga MOS KELMAYDIGAN qatorlarni chiqaradi (kommentariylarni yoki keraksiz jarayonlarni tashlab yuborishda ishlatiladi).", withoutRisk: "Keraksiz qatorlarni chiqarib tashlab bo'lmaydi." },
        "-n": { name: "Line number", syntaxPos: "grep -n 'root' /etc/passwd", whatItDoes: "Har bir topilgan qatorning fayldagi tartib raqamini ko'rsatadi.", withoutRisk: "Fayl ichidagi xato qator raqamini bilib bo'lmaydi." },
        "-E": { name: "Extended regex", syntaxPos: "grep -E 'ERROR|CRITICAL' log.txt", whatItDoes: "Kengaytirilgan muntazam ifodalarni (| mantiqiy YOKI, +, ? belgilari) yoqadi.", withoutRisk: "Murakkab shablonlar ishlamaydi." },
        "-r": { name: "Recursive", syntaxPos: "grep -r 'DB_PASS' /var/www", whatItDoes: "Katalog ichidagi barcha fayllarni ichma-ich qidirib chiqadi.", withoutRisk: "Faqat bitta fayl tekshiriladi." },
        "-c": { name: "Count", syntaxPos: "grep -c 'Failed' auth.log", whatItDoes: "Matnlarning o'zini emas, shablon necha marta uchraganining umumiy sonini chiqaradi.", withoutRisk: "Barcha qatorlar ekranga to'kilib ketadi." }
      }
    },
    awk: {
      name: "Pattern Scanning and Text Processing Language (Ustunlar bilan Ishlash)",
      whatItDoes: "Matnni qatorma-qator o'qib, har bir qatorni ajratuvchi belgi (masalan bo'shliq yoki ikki nuqta :) bo'yicha maydonlarga ($1, $2, $NF) bo'ladi va shartli amallarni bajaradi.",
      whyFlags: "Ajratuvchi belgi (-F) ni belgilash uchun.",
      syntaxPattern: "awk -F [AJRATUVCHI] '{BUYRUQ}' FAYL",
      generalWhen: "/etc/passwd, jadvallar yoki loglardan faqat aniq bir ustunni (masalan faqat IP manzil yoki loginlarni) ajratib olishda.",
      generalWithout: "Butun uzun qator chiqadi, kerakli ustunni ajratib olib bo'lmaydi.",
      flags: {
        "-F": { name: "Field separator", syntaxPos: "awk -F: '{print $1}' /etc/passwd", whatItDoes: "Ustunlarni ajratuvchi maxsus belgini belgilaydi (sukut bo'yicha probel o'rniga ikki nuqta, vergul yoki boshqa belgi).", withoutRisk: "⚠️ AGAR -F: BO'LMASA: /etc/passwd dagi qator probel yo'qligi sababli bitta so'z deb hisoblanadi va noto'g'ri natija beradi!" }
      }
    },
    sed: {
      name: "Stream Editor (Oqimli Matn Muharriri)",
      whatItDoes: "Faylni ochmasdan, oqimdagi matnlarni qidirish, almashtirish (substitute), o'chirish yoki qo'shish imkonini beradi.",
      whyFlags: "Faylning o'zida saqlash (-i) va shablon ifodalari (-e) uchun.",
      syntaxPattern: "sed [BAYROQ] 's/eski/yangi/g' FAYL",
      generalWhen: "Konfiguratsiya fayllaridagi parametrlarni avtomatik o'zgartirishda (masalan PORT=80 ni PORT=8080 ga).",
      generalWithout: "Har bir serverga kirib faylni nano/vim da qo'lda tahrirlashga to'g'ri keladi.",
      flags: {
        "-i": { name: "In-place edit", syntaxPos: "sed -i 's/foo/bar/g' config.cfg", whatItDoes: "Natijani ekranga chiqarish o'rniga to'g'ridan-to'g'ri faylning o'ziga yozib saqlaydi.", withoutRisk: "O'zgarishlar faqat ekranda ko'rinadi, fayl eski holicha qoladi." },
        "-n": { name: "Quiet mode", syntaxPos: "sed -n '10,20p' log.txt", whatItDoes: "Avtomatik chop etishni to'xtatib, faqat ko'rsatilgan qatorlarni (10 dan 20 gacha) chiqaradi.", withoutRisk: "Butun fayl ekranga to'kiladi." }
      }
    },
    cut: {
      name: "Remove Sections from Lines (Qatorlardan Bo'laklarni Kesib Olish)",
      whatItDoes: "Har bir qatordan ko'rsatilgan ustunlar yoki baytlarni ajratuvchi belgi orqali kesib oladi.",
      whyFlags: "Ajratuvchi belgi (-d) va ustun raqami (-f) ni ko'rsatish uchun.",
      syntaxPattern: "cut -d [BELGI] -f [USTUNLAR] FAYL",
      generalWhen: "CSV fayllar yoki ikki nuqta bilan ajratilgan ma'lumotlardan aniq ustunni olishda.",
      generalWithout: "Barcha ustunlar aralashib chiqadi.",
      flags: {
        "-d": { name: "Delimiter", syntaxPos: "cut -d: -f1 /etc/passwd", whatItDoes: "Ustunlar qaysi belgi bilan ajratilganini bildiradi.", withoutRisk: "Sukut bo'yicha Tab belgisi qidiriladi." },
        "-f": { name: "Fields", syntaxPos: "cut -d, -f2,4 data.csv", whatItDoes: "Aynan qaysi raqamli ustunlarni kesib olishni ko'rsatadi.", withoutRisk: "Qaysi ustun kerakligi noma'lum bo'lib xato beradi." }
      }
    },
    sort: {
      name: "Sort Lines of Text (Matn Qatorlarini Saralash)",
      whatItDoes: "Standart kirish yoki fayllardagi qatorlarni alifbo, raqam yoki hajm bo'yicha tartiblaydi.",
      whyFlags: "Sonlar bo'yicha saralash (-n), teskari tartib (-r) va unikal qilish (-u) uchun.",
      syntaxPattern: "sort [BAYROQLAR] FAYL",
      generalWhen: "Eng ko'p kirilgan IP manzillar, eng katta jarayonlar yoki tartibsiz ro'yxatlarni to'g'rilashda.",
      generalWithout: "uniq buyrug'i ketma-ket bo'lmagan dublikatlarni aniqlay olmaydi.",
      flags: {
        "-n": { name: "Numeric sort", syntaxPos: "sort -n sonlar.txt", whatItDoes: "Qatorlarni raqam qiymati bo'yicha to'g'ri tartiblaydi (1, 2, 10 tartibida; aks holda matn kabi 1, 10, 2 bo'lib qoladi).", withoutRisk: "⚠️ AGAR -n BO'LMASA: 100 soni 2 sonidan oldin turib qoladi!" },
        "-r": { name: "Reverse", syntaxPos: "sort -nr reyting.txt", whatItDoes: "Kattadan kichikka qarab teskari tartibda saralaydi.", withoutRisk: "Natija kichikdan kattaga qarab chiqadi." },
        "-k": { name: "Key column", syntaxPos: "sort -k2,2n data.txt", whatItDoes: "Aynan ko'rsatilgan ustun bo'yicha saralashni amalga oshiradi.", withoutRisk: "Faqat birinchi ustun bo'yicha saralanadi." },
        "-u": { name: "Unique", syntaxPos: "sort -u ro'yxat.txt", whatItDoes: "Takrorlangan qatorlarni olib tashlab, faqat unikal qatorlarni qoldiradi.", withoutRisk: "Dublikatlar qolib ketadi." }
      }
    },
    uniq: {
      name: "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash)",
      whatItDoes: "Ketma-ket kelgan bir xil qatorlarni bittaga qisqartiradi yoki ularning necha marta takrorlanganini hisoblaydi.",
      whyFlags: "Takrorlanishlar sonini chiqarish (-c) va faqat takrorlanganlarni ko'rish (-d) uchun.",
      syntaxPattern: "uniq [BAYROQLAR] [KIRISH]",
      generalWhen: "sort bilan birga quvurda ishlatilib, loglardagi xatoliklar yoki kirishlar sonini sanashda.",
      generalWithout: "Takrorlangan qatorlar qancha ekanini aniqlab bo'lmaydi.",
      flags: {
        "-c": { name: "Count", syntaxPos: "sort log.txt | uniq -c", whatItDoes: "Har bir qator boshiga uning necha marta takrorlangan sonini yozib qo'yadi.", withoutRisk: "Takrorlanish chastotasi ko'rinmaydi." },
        "-d": { name: "Duplicates only", syntaxPos: "sort | uniq -d", whatItDoes: "Faqat takrorlangan (dublikat) qatorlarnigina chiqaradi.", withoutRisk: "Barcha qatorlar chiqadi." }
      }
    },
    wc: {
      name: "Word, Line, Character Count (Qatorlar, So'zlar va Baytlarni Sanash)",
      whatItDoes: "Fayl yoki standart kirishdagi umumiy qatorlar sonini (newline), so'zlarni va bayt hajmini hisoblab beradi.",
      whyFlags: "Faqat qatorlar sonini (-l) yoki faqat so'zlarni (-w) olish uchun.",
      syntaxPattern: "wc [BAYROQ] [FAYL...]",
      generalWhen: "Quvurdan chiqqan natijalar miqdorini (masalan nechta xodim borligini) sanashda.",
      generalWithout: "Qatorlar sonini bilish uchun qo'lda sanashga to'g'ri keladi.",
      flags: {
        "-l": { name: "Lines count", syntaxPos: "cat /etc/passwd | wc -l", whatItDoes: "Faqat qatorlar sonini chiqaradi.", withoutRisk: "So'zlar va baytlar soni ham aralashib chiqadi." },
        "-w": { name: "Words count", syntaxPos: "wc -w insho.txt", whatItDoes: "Faqat so'zlar sonini hisoblaydi.", withoutRisk: "Qatorlar bilan birga chiqadi." },
        "-c": { name: "Bytes count", syntaxPos: "wc -c fayl.bin", whatItDoes: "Faylning umumiy bayt hajmini hisoblaydi.", withoutRisk: "To'liq jadval chiqadi." }
      }
    },
    tee: {
      name: "T-splitter for Streams (Oqimni Ekranga ham, Faylga ham Yozish)",
      whatItDoes: "Standart kirishdan kelgan ma'lumotni ham terminal ekraniga chiqaradi, ham ko'rsatilgan faylga yozib qo'yadi.",
      whyFlags: "Fayl oxiriga qo'shish (-a) uchun.",
      syntaxPattern: "BUYRUQ | tee [BAYROQ] FAYL",
      generalWhen: "Uzoq davom etadigan skriptni ham ekranda kuzatib turish, ham uning nusxasini logga yozishda.",
      generalWithout: "Yo faqat ekranda ko'rasiz, yoki faqat faylga yo'naltirib ekranni ko'ra olmaysiz.",
      flags: {
        "-a": { name: "Append", syntaxPos: "echo 'yangi' | tee -a log.txt", whatItDoes: "Faylni tozalab tashlamasdan, oxiriga qo'shadi.", withoutRisk: "Eski log tozalab yuboriladi." }
      }
    },
    tar: {
      name: "Tape Archive (Fayllarni Bitta Arxivga Jamlash va Siqish)",
      whatItDoes: "Ko'plab fayl va kataloglarni ularning ruxsatlari bilan birga bitta .tar konteyneriga yig'adi va gzip/bzip2 orqali siqadi.",
      whyFlags: "Arxiv yaratish (-c), ochish (-x), siqish (-z), fayl nomini berish (-f) bayroqlari shart.",
      syntaxPattern: "tar -[BAYROQLAR] arxiv.tar.gz PAPKA/",
      generalWhen: "Server zaxirasini (backup) olishda va loyihani arxiv holida boshqa serverga ko'chirishda.",
      generalWithout: "Yuzlab fayllarni bittalab siqish va ko'chirishga to'g'ri keladi.",
      flags: {
        "-c": { name: "Create archive", syntaxPos: "tar -cvf backup.tar /var/www", whatItDoes: "Yangi arxiv fayli yaratadi.", withoutRisk: "Arxiv yaratilmaydi." },
        "-x": { name: "Extract archive", syntaxPos: "tar -xvf backup.tar", whatItDoes: "Arxiv ichidagi fayllarni diskka chiqaradi.", withoutRisk: "Arxiv ochilmaydi." },
        "-z": { name: "Gzip compression", syntaxPos: "tar -czvf backup.tar.gz /var/www", whatItDoes: "Arxivni gzip algoritmi orqali siqib hajmini 5-10 baravargacha kichraytiradi.", withoutRisk: "⚠️ AGAR -z BO'LMASA: Arxiv siqilmaydi va diskda gigabaytlab ortiqcha joy egallaydi!" },
        "-v": { name: "Verbose", syntaxPos: "tar -cvf ...", whatItDoes: "Arxivlanayotgan har bir fayl nomini jarayonda ekranga ko'rsatadi.", withoutRisk: "Jarayon indamay fon rejimida o'tadi." },
        "-f": { name: "Archive file name", syntaxPos: "tar -cf arxiv.tar ...", whatItDoes: "Arxiv saqlanadigan fayl nomini belgilaydi (har doim bayroqlar oxirida turishi shart).", withoutRisk: "⚠️ AGAR -f BO'LMASA: tar buyrug'i lentali drayverni (tape drive) qidirib xato beradi!" }
      }
    },
    usermod: {
      name: "Modify User Account (Foydalanuvchi Hisobini O'zgartirish)",
      whatItDoes: "Foydalanuvchining guruhlari, login shelli, uy papkasi yoki parolini /etc/passwd va /etc/shadow da xavfsiz tahrirlaydi.",
      whyFlags: "Qaysi parametr o'zgarishini bildirish uchun bayroqlar majburiy.",
      syntaxPattern: "usermod [BAYROQLAR] LOGIN",
      generalWhen: "Xodimga qo'shimcha guruh berishda (sudo, docker), akkauntni bloklashda (-L).",
      generalWithout: "Foydalanuvchi hisobini boshqarib bo'lmaydi.",
      flags: {
        "-aG": { name: "Append Group", syntaxPos: "usermod -aG sudo student", whatItDoes: "Mavjud guruhlarni saqlab qolgan holda yangi guruhga xavfsiz qo'shadi.", withoutRisk: "⚠️ AGAR -a (APPEND) BO'LMASA: KATTA FALOKAT! Foydalanuvchi boshqa BARCHA qo'shimcha guruhlaridan o'chirib yuboriladi!" },
        "-s": { name: "Login shell", syntaxPos: "usermod -s /bin/bash student", whatItDoes: "Foydalanuvchi kirganda ochiladigan qobiqni o'zgartiradi.", withoutRisk: "Foydalanuvchi terminalga kira olmay qolishi mumkin." },
        "-L": { name: "Lock password", syntaxPos: "usermod -L baduser", whatItDoes: "Parol xeshi boshiga ! qo'yib akkauntni xavfsiz bloklaydi.", withoutRisk: "Ishdan ketgan xodim serverga kirish huquqini saqlab qoladi." },
        "-U": { name: "Unlock password", syntaxPos: "usermod -U gooduser", whatItDoes: "Akkaunt blokirovkasini yechadi.", withoutRisk: "Foydalanuvchi tizimga kira olmaydi." }
      }
    },
    useradd: {
      name: "Create New User (Yangi Foydalanuvchi Yaratish)",
      whatItDoes: "Tizimda yangi UID, GID ajratadi, /etc/passwd, /etc/shadow va /etc/group fayllariga yozuv kiritadi.",
      whyFlags: "Uy papkasini yaratish (-m) va boshlang'ich qobiqni berish (-s) uchun.",
      syntaxPattern: "useradd [BAYROQLAR] LOGIN",
      generalWhen: "Serverga yangi dasturchi yoki xizmat akkauntini kiritishda.",
      generalWithout: "Foydalanuvchi ochilmaydi.",
      flags: {
        "-m": { name: "Create home", syntaxPos: "useradd -m devuser", whatItDoes: "/home/devuser papkasini ochib, ichiga /etc/skel shablon fayllarini nusxalaydi.", withoutRisk: "⚠️ AGAR -m BO'LMASA: Foydalanuvchi kirganida uy papkasi bo'lmaydi va sozlamalarni saqlab bo'lmaydi!" },
        "-s": { name: "Shell", syntaxPos: "useradd -s /bin/bash devuser", whatItDoes: "Foydalanuvchiga qulay Bash terminalini biriktiradi.", withoutRisk: "Noqulay /bin/sh beriladi." }
      }
    },

    // === WEEK 3: PROCESSES, SIGNALS, PROCESS TREES & MONITORING ===
    ps: {
      name: "Report a Snapshot of the Current Processes (Jarayonlar Suratini Ko'rish)",
      whatItDoes: "Linux /proc virtual fayl tizimidan joriy vaqtda yadroda ishlayotgan barcha jarayonlarning PID, PPID, holati, CPU va RAM sarfini o'qib beradi.",
      whyFlags: "Barcha foydalanuvchilarning to'liq jarayonlarini ko'rish (aux yoki -ef) uchun.",
      syntaxPattern: "ps [BAYROQLAR]",
      generalWhen: "Server nima sababdan qotayotganini, qaysi PID ko'p resurs yeyayotganini aniqlashda.",
      generalWithout: "Faqat joriy terminalga tegishli 2 ta buyruq ko'rinadi, serverdagi asosiy jarayonlar yashirin qoladi.",
      flags: {
        "aux": { name: "BSD style all processes", syntaxPos: "ps aux", whatItDoes: "a (barcha foydalanuvchilar), u (foydalanuvchi nomi va resurs sarfi), x (terminalga bog'lanmagan orqa fon daemonlari) bilan to'liq ro'yxatni chiqaradi.", withoutRisk: "Orqa fondagi xizmatlar ko'rinmaydi." },
        "-ef": { name: "Standard full listing", syntaxPos: "ps -ef", whatItDoes: "Standart Unix formatida PID va uning ota jarayoni PPID ni to'liq buyruq qatori bilan ko'rsatadi.", withoutRisk: "Ota jarayon (PPID) bog'lanishlarini bilib bo'lmaydi." },
        "--sort": { name: "Sort output", syntaxPos: "ps aux --sort=-%mem", whatItDoes: "Ko'rsatilgan ustun (masalan xotira yoki protsessor) bo'yicha kamayish tartibida saralaydi.", withoutRisk: "Eng ko'p resurs yeyotgan jarayonlarni ro'yxatdan qidirib charchaysiz." }
      }
    },
    top: {
      name: "Real-Time Dynamic Process Monitor (Jonli Jarayonlar Monitori)",
      whatItDoes: "Har 3 soniyada CPU, RAM, Swap, Load Average va jarayonlar ro'yxatini interaktiv yangilab ko'rsatib turadi.",
      whyFlags: "Faqat bir marta skript ichida chiqarish (-b, -n) uchun.",
      syntaxPattern: "top [BAYROQLAR]",
      generalWhen: "Server yuklamasi (Load Average) oshib ketganda qaysi jarayon tizimni bosib yotganini jonli ko'rishda.",
      generalWithout: "Tizim parametrlarini dinamik kuzatib bo'lmaydi.",
      flags: {
        "-b": { name: "Batch mode", syntaxPos: "top -b -n 1", whatItDoes: "Interaktiv oynani o'chirib, natijani matn qilib chiqaradi (skriptlar va quvurlar uchun).", withoutRisk: "Quvurga uzatib bo'lmaydi." },
        "-n": { name: "Iterations count", syntaxPos: "top -n 1", whatItDoes: "Ko'rsatilgan martagina yangilanib, so'ng dasturdan chiqadi.", withoutRisk: "top doimiy ishlab terminalni band qiladi." }
      }
    },
    htop: {
      name: "Interactive Process Viewer (Rangli va Qulay Jarayonlar Monitori)",
      whatItDoes: "top buyrug'ining rangli, sichqoncha va F-tugmalarni qo'llab-quvvatlovchi, CPU yadrolarini alohida ko'rsatuvchi zamonaviy muqobili.",
      whyFlags: "Jarayon daraxtini ko'rish (F5) va filtrlash uchun.",
      syntaxPattern: "htop",
      generalWhen: "Server resurslarini qulay va tezkor tahlil qilishda.",
      generalWithout: "Oddiy oq-qora top bilan ishlashga to'g'ri keladi.",
      flags: {}
    },
    kill: {
      name: "Send a Signal to a Process (Jarayonga Signal Yuborish)",
      whatItDoes: "Linux yadrosi orqali ko'rsatilgan PID dagi jarayonga signallar (SIGTERM 15, SIGKILL 9, SIGHUP 1) uzatadi.",
      whyFlags: "Signallar turi (-9, -15, -1) jarayonning qanday to'xtashini belgilaydi.",
      syntaxPattern: "kill -[SIGNAL] PID",
      generalWhen: "Qotib qolgan dasturni to'xtatishda yoki sozlamalarini qayta yuklashda (SIGHUP).",
      generalWithout: "Qotib qolgan jarayon server xotirasini to'ldirib, serverni o'chirib qo'yishi mumkin.",
      flags: {
        "-15": { name: "SIGTERM (Graceful Termination)", syntaxPos: "kill -15 1234", whatItDoes: "Jarayonga xavfsiz to'xtashni buyuradi; jarayon ochilgan fayllarni yopishga va ma'lumotlarni saqlashga ulguradi.", withoutRisk: "To'g'ridan-to'g'ri -9 berilsa ma'lumotlar bazasi fayllari buzilishi mumkin!" },
        "-9": { name: "SIGKILL (Force Kill)", syntaxPos: "kill -9 1234", whatItDoes: "Yadro darajasida jarayonni DARHOL va MAJBURIY o'ldiradi. Jarayon bu signalni e'tiborsiz qoldirolmaydi.", withoutRisk: "⚠️ AGAR -9 BO'LMASA: Butunlay qotib qolgan zombi yoki ilinib qolgan jarayon to'xtamay turaveradi!" },
        "-1": { name: "SIGHUP (Reload Configuration)", syntaxPos: "kill -1 $(pgrep nginx)", whatItDoes: "Jarayonni o'chirmasdan uning konfiguratsiya fayllarini qayta yuklaydi.", withoutRisk: "Konfiguratsiyani o'zgartirish uchun butun serverni o'chirib-yoqishga to'g'ri keladi." }
      }
    },
    pkill: {
      name: "Signal Processes by Name (Nomi Bo'yicha Signal Yuborish)",
      whatItDoes: "PID raqamini qidirmasdan, buyruq nomi bo'yicha mos keluvchi barcha jarayonlarga signal yuboradi.",
      whyFlags: "Signal turini belgilash uchun.",
      syntaxPattern: "pkill -[SIGNAL] NOMI",
      generalWhen: "Bir nechta worker jarayonlarini (masalan pkill -9 nginx) bitta buyruq bilan to'xtatishda.",
      generalWithout: "Oldin pgrep qilib, keyin har bir PID ga alohida kill berishga to'g'ri keladi.",
      flags: {
        "-9": { name: "Force kill by name", syntaxPos: "pkill -9 node", whatItDoes: "Ko'rsatilgan nomdagi barcha jarayonlarni majburiy to'xtatadi.", withoutRisk: "Jarayonlar orqa fonda qolib ketishi mumkin." }
      }
    },
    pgrep: {
      name: "Look up Processes by Name (Nomi Bo'yicha PID larni Topish)",
      whatItDoes: "Ko'rsatilgan shablonga mos keluvchi barcha faol jarayonlarning faqat PID raqamlarini chiqarib beradi.",
      whyFlags: "To'liq buyruq qatorini tekshirish (-f) va nomlarini ham ko'rish (-l) uchun.",
      syntaxPattern: "pgrep [BAYROQLAR] NOMI",
      generalWhen: "Quvurlarda boshqa buyruqlarga PID uzatishda (masalan kill -9 $(pgrep python)).",
      generalWithout: "ps aux | grep name | grep -v grep | awk '{print $2}' kabi 4 ta buyruqli uzun quvur yozishga to'g'ri keladi.",
      flags: {
        "-l": { name: "List name with PID", syntaxPos: "pgrep -l nginx", whatItDoes: "Faqat raqam emas, jarayon nomini ham birga ko'rsatadi.", withoutRisk: "Faqat quruq raqamlar chiqadi." },
        "-f": { name: "Full command match", syntaxPos: "pgrep -f 'server.py'", whatItDoes: "Faqat jarayon nomini emas, butun argumentlari bilan birga qidiradi.", withoutRisk: "Skript nomi argumentda bo'lsa pgrep uni topa olmaydi." }
      }
    },
    pstree: {
      name: "Display a Tree of Processes (Jarayonlar Daraxtini Ko'rish)",
      whatItDoes: "PID 1 (systemd) dan boshlab, barcha child (farzand) jarayonlarning kim kimdan fork() bo'lganini vizual daraxt ko'rinishida ko'rsatadi.",
      whyFlags: "PID larni ham birga ko'rsatish (-p) uchun.",
      syntaxPattern: "pstree [BAYROQLAR]",
      generalWhen: "Fork-bomb yoki zombie jarayonlarning ota jarayonini (parent PPID) aniqlashda.",
      generalWithout: "Jarayonlar ierarxiyasini tasavvur qilib bo'lmaydi.",
      flags: {
        "-p": { name: "Show PIDs", syntaxPos: "pstree -p", whatItDoes: "Daraxtdagi har bir shoxning yoniga uning PID raqamini qavs ichida yozib beradi.", withoutRisk: "Jarayon qaysi PID ekanini ko'rib bo'lmaydi." }
      }
    },
    nice: {
      name: "Run with Modified Scheduling Priority (Ustuvorlik Bilan Ishga Tushirish)",
      whatItDoes: "Jarayon ishga tushirilayotganda uning CPU ga nisbatan 'odob / yoqimlilik' darajasini (-20 dan +19 gacha) belgilaydi.",
      whyFlags: "Yuqori yoki past ustuvorlik sonini berish uchun.",
      syntaxPattern: "nice -n [USTUVORLIK] BUYRUQ",
      generalWhen: "Og'ir hisob-kitob yoki zaxiralash serverdagi veb-saytni sekinlashtirmasligi uchun uni past ustuvorlikda (+19) ishga tushirishda.",
      generalWithout: "Og'ir skript barcha CPU yadrolarini 100% band qilib, boshqa foydalanuvchilarni to'xtatib qo'yadi.",
      flags: {
        "-n": { name: "Nice value", syntaxPos: "nice -n 19 tar -czf ...", whatItDoes: "Aniq son beradi. Musbat sonlar past ustuvorlik (odobli), manfiy sonlar esa faqat root uchun yuqori ustuvorlik.", withoutRisk: "Standart 0 ustuvorlikda ishlaydi." }
      }
    },
    systemctl: {
      name: "Control the systemd System and Service Manager (Tizim Xizmatlarini Boshqarish)",
      whatItDoes: "Linux systemd tizimida xizmatlar (daemons), soketlar va taymerlarni ishga tushiradi, to'xtatadi va holatini tekshiradi.",
      whyFlags: "Amallar (start, stop, restart, status, enable) xizmat holatini o'zgartiradi.",
      syntaxPattern: "systemctl [AMAL] XIZMAT",
      generalWhen: "Nginx, MySQL, SSH yoki Docker xizmatlarini boshqarishda.",
      generalWithout: "Xizmatlarni orqa fonda xavfsiz boshqarib bo'lmaydi.",
      flags: {
        "status": { name: "Show status", syntaxPos: "systemctl status nginx", whatItDoes: "Xizmatning faol (running) yoki to'xtaganini va oxirgi loglarini ko'rsatadi.", withoutRisk: "Xizmat nima uchun ishlamayotgani sirliligicha qoladi." },
        "restart": { name: "Restart service", syntaxPos: "systemctl restart nginx", whatItDoes: "Xizmatni to'xtatib, qaytadan yangi sozlamalar bilan ishga tushiradi.", withoutRisk: "O'zgarishlar kuchga kirmaydi." },
        "enable": { name: "Enable autostart", syntaxPos: "systemctl enable docker", whatItDoes: "Server o'chib-yonganida xizmat avtomatik ishga tushishini ta'minlaydi.", withoutRisk: "Server qayta yonganda xizmat o'chiq qoladi." }
      }
    },

    // === WEEK 4: IPC, THREADS, FORK, GCC & MAKE ===
    gcc: {
      name: "GNU Compiler Collection (C Dasturlarini Kompilatsiya Qilish)",
      whatItDoes: "C tilida yozilgan kodni (.c) mashina kodiga (ikkilik ijro fayliga) aylantiradi.",
      whyFlags: "Natijaviy fayl nomini berish (-o), ogohlantirishlarni yoqish (-Wall) va thread kutubxonasini ulash (-pthread) uchun.",
      syntaxPattern: "gcc [BAYROQLAR] kod.c -o dastur.out",
      generalWhen: "fork(), pipe(), pthread kabi tizim chaqiriqlarini C da yozib ishga tushirishda.",
      generalWithout: "C kodini Linux tizimida bajarib bo'lmaydi.",
      flags: {
        "-o": { name: "Output binary name", syntaxPos: "gcc prog.c -o prog", whatItDoes: "Kompilatsiya natijasidagi fayl nomini belgilaydi.", withoutRisk: "⚠️ AGAR -o BO'LMASA: Natija a.out degan xunuk nom bilan chiqadi va boshqa fayllarni adashtirib yuboradi!" },
        "-pthread": { name: "POSIX Threads support", syntaxPos: "gcc -pthread prog.c -o prog", whatItDoes: "pthread kutubxonasini ulab, ko'p oqimli (multithreading) dasturlarni xatosiz yig'adi.", withoutRisk: "undefined reference to 'pthread_create' xatosi chiqadi!" },
        "-Wall": { name: "All Warnings", syntaxPos: "gcc -Wall ...", whatItDoes: "Koddagi barcha yashirin xatoliklar va xavfli joylar haqida ogohlantiradi.", withoutRisk: "Xotira xatolari e'tibordan chetda qoladi." }
      }
    },
    make: {
      name: "GNU Make Utility (Avtomatlashtirilgan Loyiha Qurish)",
      whatItDoes: "Makefile dagi qoidalar va bog'liqliklarni o'qib, faqat o'zgargan fayllarnigina qayta kompilatsiya qiladi.",
      whyFlags: "Makefile faylini tanlash (-f) va parallel yadrolarda yig'ish (-j) uchun.",
      syntaxPattern: "make [NISHON]",
      generalWhen: "Katta C/C++ loyihalarini, Linux yadrosini yoki modullarni bitta buyruq bilan yig'ishda.",
      generalWithout: "O'nlab fayllar uchun uzun gcc buyruqlarini qo'lda yozishga majbur bo'lasiz.",
      flags: {
        "-j": { name: "Jobs / Parallel compilation", syntaxPos: "make -j4", whatItDoes: "Kompilatsiyani bir nechta CPU yadrolariga bo'lib, yig'ish vaqtini 4 baravar tezlashtiradi.", withoutRisk: "Yig'ish bitta yadroda juda sekin davom etadi." }
      }
    },

    // === WEEK 5: CPU SCHEDULING, MEMORY & CRONTAB ===
    crontab: {
      name: "Maintain Crontab Files for Users (Vazifalarni Rejalashtirish)",
      whatItDoes: "Linux cron daemoniga aniq vaqtda (daqiqa, soat, oy kuni, oy, hafta kuni) avtomatik ishga tushishi kerak bo'lgan buyruqlar jadvalini saqlaydi.",
      whyFlags: "Jadvalni ko'rish (-l), tahrirlash (-e) va o'chirish (-r) uchun.",
      syntaxPattern: "crontab [BAYROQ]",
      generalWhen: "Har kecha soat 03:00 da zaxira olish, loglarni tozalash yoki avtomatlashtirilgan hisobotlarni ishga tushirishda.",
      generalWithout: "Barcha texnik ishlarni har kuni yarim tunda uyg'onib qo'lda bajarishga to'g'ri keladi.",
      flags: {
        "-l": { name: "List cron jobs", syntaxPos: "crontab -l", whatItDoes: "Joriy foydalanuvchining barcha rejalashtirilgan cron vazifalarini ko'rsatadi.", withoutRisk: "⚠️ AGAR -l BO'LMASA: crontab buyrug'i klaviaturadan matn kutib turadi yoki xato beradi!" },
        "-e": { name: "Edit cron jobs", syntaxPos: "crontab -e", whatItDoes: "Jadvalni xavfsiz muharrirda ochib, sintaksis tekshiruvi bilan saqlaydi.", withoutRisk: "Yangi vazifalarni xavfsiz qo'shib bo'lmaydi." },
        "-r": { name: "Remove crontab", syntaxPos: "crontab -r", whatItDoes: "Foydalanuvchining butun cron jadvalini butunlay o'chirib tashlaydi.", withoutRisk: "Ehtiyot bo'ling: bu xavfli bayroq!" }
      }
    },
    free: {
      name: "Display Amount of Free and Used Memory (Operativ Xotira Holatini Ko'rish)",
      whatItDoes: "/proc/meminfo dan RAM va Swap xotiraning umumiy, band, bo'sh hamda buffer/cache miqdorini olib beradi.",
      whyFlags: "O'lchov birliklarini Megabayt (-m) yoki Gigabaytlarda (-h) tushunarli ko'rish uchun.",
      syntaxPattern: "free [BAYROQ]",
      generalWhen: "Server xotirasi to'lib, ilovalar OOM-Killer tomonidan o'ldirilishidan oldin RAM yetishmovchiligini aniqlashda.",
      generalWithout: "Server nima sababdan sekinlashayotgani noma'lum bo'lib qoladi.",
      flags: {
        "-h": { name: "Human readable", syntaxPos: "free -h", whatItDoes: "RAM hajmini GB va MB larda qulay qilib chiqaradi.", withoutRisk: "Xotira uzun baytlar sonida chiqadi." },
        "-m": { name: "Megabytes", syntaxPos: "free -m", whatItDoes: "Barcha xotirani megabaytlarda aniq hisoblaydi.", withoutRisk: "Baytlar ko'rinishida bo'ladi." }
      }
    },
    swapon: {
      name: "Enable Devices and Files for Paging and Swapping (Swap Xotirani Yoqish)",
      whatItDoes: "Diskdagi maxsus bo'lim yoki swap faylni virtual xotira (RAM kengaytmasi) sifatida tizimga ulaydi.",
      whyFlags: "Swap holatini ko'rish (-s) uchun.",
      syntaxPattern: "swapon [BAYROQ] [FAYL/BO'LIM]",
      generalWhen: "Serverda RAM tugab qolganda ilovalar qulab tushmasligi uchun virtual xotira qo'shishda.",
      generalWithout: "RAM to'lishi bilan Linux yadrosi muhim dasturlarni o'ldirishga majbur bo'ladi.",
      flags: {
        "-s": { name: "Summary", syntaxPos: "swapon -s", whatItDoes: "Faol swap bo'limlari va ularning ishlatilish hajmini jadval qilib chiqaradi.", withoutRisk: "Qaysi swap ulanganini bilib bo'lmaydi." },
        "-a": { name: "All", syntaxPos: "swapon -a", whatItDoes: "/etc/fstab dagi barcha swap yozuvlarini birdaniga yoqadi.", withoutRisk: "Swap qo'lda yoqilishi kerak bo'ladi." }
      }
    },

    // === WEEK 6: VIRTUAL MEMORY, DOCKER & CONTAINERS ===
    docker: {
      name: "Docker Container Runtime (Konteynerlarni Boshqarish)",
      whatItDoes: "Linux Namespaces va Cgroups yadro texnologiyalari asosida izolyatsiyalangan konteynerlarni yaratadi va boshqaradi.",
      whyFlags: "Amallar (run, ps, build, exec, stop, rm, images) konteyner hayotiy siklini belgilaydi.",
      syntaxPattern: "docker [AMAL] [BAYROQLAR] [OBRAZ/KONTEYNER]",
      generalWhen: "Microservice ilovalarini, veb-serverlar va ma'lumotlar bazalarini toza va xavfsiz muhitda yurgizishda.",
      generalWithout: "Har bir dastur kutubxonalarini to'g'ridan-to'g'ri operatsion tizimga o'rnatib tizimni ifloslantirishga to'g'ri keladi.",
      flags: {
        "-d": { name: "Detached mode", syntaxPos: "docker run -d nginx", whatItDoes: "Konteynerni orqa fonda (background) daemon rejimida ishga tushiradi va terminalni bo'shatadi.", withoutRisk: "⚠️ AGAR -d BO'LMASA: Konteyner terminalni band qilib oladi va Ctrl+C bosilishi bilan o'chib qoladi!" },
        "-p": { name: "Port mapping", syntaxPos: "docker run -p 8080:80 nginx", whatItDoes: "Host serverning portini (8080) konteynerning ichki portiga (80) yo'naltiradi.", withoutRisk: "⚠️ AGAR -p BO'LMASA: Tashqaridan turib brauzerda konteynerga ulanib bo'lmaydi!" },
        "-v": { name: "Volume mount", syntaxPos: "docker run -v /data:/var/lib/mysql mysql", whatItDoes: "Server diskidagi papkani konteyner ichiga ulaydi (konteyner o'chsa ham ma'lumotlar saqlanib qoladi).", withoutRisk: "Konteyner o'chirilishi bilan ichidagi barcha ma'lumotlar yo'qoladi!" },
        "--name": { name: "Container name", syntaxPos: "docker run --name myweb nginx", whatItDoes: "Konteynerga tasodifiy g'alati nomlar o'rniga esda qolarli chiroyli nom beradi.", withoutRisk: "Konteynerni faqat uzun hash ID si orqali boshqarishga to'g'ri keladi." },
        "-it": { name: "Interactive TTY", syntaxPos: "docker exec -it myweb bash", whatItDoes: "Konteyner ichida interaktiv terminal ochib beradi.", withoutRisk: "Konteyner ichiga buyruq yozib bo'lmaydi." }
      }
    }
  };

  // --- 3. MULTI-STAGE PIPELINE & COMPOUND COMMAND ANALYZER ---
  function splitPipeline(commandStr) {
    if (!commandStr) return [];
    var str = commandStr.trim();
    // Split on pipe characters that are not inside quotes
    var stages = [];
    var current = "";
    var inSingle = false;
    var inDouble = false;
    for (var i = 0; i < str.length; i++) {
      var ch = str[i];
      if (ch === "'" && !inDouble) {
        inSingle = !inSingle;
        current += ch;
      } else if (ch === '"' && !inSingle) {
        inDouble = !inDouble;
        current += ch;
      } else if (ch === '|' && !inSingle && !inDouble) {
        if (current.trim()) stages.push(current.trim());
        current = "";
      } else {
        current += ch;
      }
    }
    if (current.trim()) stages.push(current.trim());
    return stages;
  }

  function detectOperators(commandStr) {
    var detected = [];
    var str = commandStr || "";
    if (str.indexOf("2>&1") !== -1) detected.push("2>&1");
    if (str.indexOf(">>") !== -1) detected.push(">>");
    else if (str.indexOf(">") !== -1 && str.indexOf("2>") === -1) detected.push(">");
    if (str.indexOf("2>") !== -1 && str.indexOf("2>&1") === -1) detected.push("2>");
    if (str.indexOf("<") !== -1) detected.push("<");
    if (str.indexOf("&&") !== -1) detected.push("&&");
    if (str.indexOf("||") !== -1) detected.push("||");
    if (str.indexOf("$(") !== -1) detected.push("$()");
    if (str.indexOf("xargs") !== -1) detected.push("xargs");
    if (str.indexOf("tee") !== -1) detected.push("tee");
    return detected;
  }

  function analyzeSingleToken(stageStr) {
    var clean = (stageStr || "").trim();
    var parts = clean.split(/\\s+/);
    var baseCmd = parts[0] || "bash";

    // Handle sudo
    if (baseCmd === "sudo" && parts.length > 1) {
      baseCmd = parts[1];
    }
    // Handle docker subcommands
    if (baseCmd === "docker" && parts.length > 1 && !parts[1].startsWith("-")) {
      baseCmd = "docker";
    }

    var kb = KNOWLEDGE_BASE[baseCmd] || {
      name: baseCmd + " Buyrug'i",
      whatItDoes: "Linux tizimida ko'rsatilgan parametrlarga asosan ma'lumotlarni qayta ishlaydi va oqimga uzatadi.",
      whyFlags: "Amallarni aniqlashtirish va filtrlash uchun bayroqlar ishlatiladi.",
      syntaxPattern: baseCmd + " [PARAMETRLAR]",
      generalWhen: "Tizim jarayonlari va fayllari ustida aniq amallarni bajarishda.",
      generalWithout: "Vazifani avtomatlashtirish qiyinlashadi.",
      flags: {}
    };

    var foundFlags = [];
    var flagsObj = kb.flags || {};

    // Search for flags in stageStr
    for (var fKey in flagsObj) {
      var fData = flagsObj[fKey];
      var escaped = fKey.replace(/[-\\/\\\\^$*+?.()|[\\]{}]/g, "\\\\$&");
      var regex = new RegExp("(^|\\\\s)" + escaped + "(\\\\s|$)", "i");
      if (regex.test(clean)) {
        foundFlags.push({ flag: fKey, name: fData.name, whatItDoes: fData.whatItDoes, syntaxPos: fData.syntaxPos, withoutRisk: fData.withoutRisk });
      } else if (fKey.length === 2 && fKey.charAt(0) === "-") {
        var char = fKey.charAt(1);
        var combinedRegex = new RegExp("(^|\\\\s)-[a-zA-Z0-9]*" + char + "[a-zA-Z0-9]*(\\\\s|$)", "i");
        if (combinedRegex.test(clean)) {
          foundFlags.push({ flag: fKey, name: fData.name, whatItDoes: fData.whatItDoes, syntaxPos: fData.syntaxPos, withoutRisk: fData.withoutRisk });
        }
      }
    }

    return {
      rawStage: clean,
      baseCmd: baseCmd,
      name: kb.name,
      whatItDoes: kb.whatItDoes,
      whyFlags: kb.whyFlags,
      syntaxPattern: kb.syntaxPattern,
      generalWhen: kb.generalWhen,
      generalWithout: kb.generalWithout,
      flagsList: foundFlags
    };
  }

  function analyzeCommand(cmdStr, questionObj) {
    var raw = (cmdStr || "").trim();
    var stagesRaw = splitPipeline(raw);
    var isPipeline = stagesRaw.length > 1;
    var detectedOps = detectOperators(raw);

    var stages = stagesRaw.map(function (stg, idx) {
      var analyzed = analyzeSingleToken(stg);
      analyzed.stepIndex = idx + 1;
      return analyzed;
    });

    return {
      fullCommand: raw,
      isPipeline: isPipeline,
      stages: stages,
      detectedOps: detectedOps,
      question: questionObj || {}
    };
  }

  // --- 4. HTML RENDERER ENGINE (Zero-Scroll & Deep Visual Architecture) ---
  function renderCardHtml(anatomy) {
    if (!anatomy) return "<div class='cmd-sec-text'>Ma'lumot mavjud emas.</div>";

    var html = "";

    // CASE A: MULTI-STAGE PIPELINE OR COMPOUND COMMAND
    if (anatomy.isPipeline || (anatomy.detectedOps && anatomy.detectedOps.length > 0 && anatomy.stages.length > 1)) {
      html += "<div class='cmd-pipeline-banner' style='background:linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.1)); border:1px solid rgba(56,189,248,0.3); border-radius:8px; padding:10px 14px; margin-bottom:14px;'>";
      html += "<div style='display:flex; align-items:center; gap:8px; font-weight:700; color:#38bdf8; font-size:12.5px; text-transform:uppercase; letter-spacing:0.5px;'>";
      html += "<span>⚡ KO'P BOSQICHLI QUVUR (PIPELINE) VA KOMBINATSIYA TAHLILI</span>";
      html += "</div>";
      html += "<div style='font-size:12px; color:#cbd5e1; margin-top:4px;'>Ushbu topshiriqda bir nechta mustaqil Linux vositalari Unix konveyer tamoyili orqali kuchli zanjirga birlashtirilgan.</div>";
      html += "</div>";

      // 1. VISUAL DATAFLOW STREAM
      html += "<div class='cmd-section' style='margin-bottom:14px;'>";
      html += "<div class='cmd-sec-head cyan'><span>🌊 1. Ma'lumotlar Oqimi Chizmasi (Dataflow Pipeline)</span></div>";
      html += "<div class='cmd-stream-flow' style='display:flex; flex-wrap:wrap; align-items:center; gap:8px; background:#040711; padding:10px; border-radius:6px; border:1px solid rgba(255,255,255,0.08); margin-top:6px;'>";

      anatomy.stages.forEach(function (stg, idx) {
        var roleBadge = idx === 0 ? "Manba (Source)" : (idx === anatomy.stages.length - 1 ? "Natija / Maqsad" : "Filtr / Format");
        var roleColor = idx === 0 ? "#38bdf8" : (idx === anatomy.stages.length - 1 ? "#34d399" : "#fbbf24");
        html += "<div style='background:#0f172a; border:1px solid " + roleColor + "; border-radius:6px; padding:6px 10px; display:flex; flex-direction:column; gap:2px;'>";
        html += "<span style='font-size:10px; color:" + roleColor + "; font-weight:700; text-transform:uppercase;'>#" + (idx + 1) + " " + roleBadge + "</span>";
        html += "<code style='font-family:monospace; color:#fff; font-weight:700; font-size:12px;'>" + escapeHtml(stg.rawStage) + "</code>";
        html += "</div>";

        if (idx < anatomy.stages.length - 1) {
          html += "<div style='display:flex; align-items:center; gap:4px; color:#94a3b8; font-weight:700; font-size:13px;'>";
          html += "<span>➔</span>";
          html += "<span style='background:rgba(56,189,248,0.2); color:#38bdf8; padding:2px 6px; border-radius:4px; font-family:monospace; font-size:11px;'>| STDOUT ➔ STDIN</span>";
          html += "<span>➔</span>";
          html += "</div>";
        }
      });
      html += "</div>";
      html += "</div>";

      // 2. COMBINATION ARCHITECTURE
      html += "<div class='cmd-section' style='margin-bottom:14px;'>";
      html += "<div class='cmd-sec-head amber'><span>🔄 2. Nima Uchun Aynan Shu Buyruqlar Birlashtirildi?</span></div>";
      html += "<div class='cmd-sec-text' style='color:#e2e8f0; line-height:1.55;'>";
      html += "Linux falsafasining oltin qoidasi: <i>'Har bir buyruq faqat bitta ishni mukammal bajarsin va boshqa dasturlar bilan oqim orqali ulansin'</i>.<br/>";
      html += "Bu yerda: <b>" + escapeHtml(anatomy.stages[0].baseCmd) + "</b> dastlabki ma'lumotni o'qiydi, quvur (<code>|</code>) orqali matn diskka yozilmasdan to'g'ridan-to'g'ri yadro xotirasidagi bufer orqali keyingi <b>" + (anatomy.stages[1] ? escapeHtml(anatomy.stages[1].baseCmd) : "filtr") + "</b> buyrug'iga uzatiladi. Bu diskka yuklama tushirmasdan sekundiga millionlab qatorlarni qayta ishlash imkonini beradi.";
      html += "</div>";
      html += "</div>";

      // 3. SYNTAX BLUEPRINT & WRITING RULES
      html += "<div class='cmd-section' style='margin-bottom:14px;'>";
      html += "<div class='cmd-sec-head emerald'><span>📐 3. Sintaksis va Qanday Yozilishi Kerak (Writing Blueprint)</span></div>";
      html += "<div style='background:#060d1a; border-left:3px solid #10b981; padding:8px 12px; border-radius:0 6px 6px 0; margin-top:4px;'>";
      html += "<div style='font-family:monospace; font-size:12.5px; color:#a7f3d0; margin-bottom:6px;'><b>Format:</b> BUYRUQ1 [BAYROQLAR] [MANBA] | BUYRUQ2 [BAYROQLAR] [FILTR] ...</div>";
      html += "<ul style='margin:0; padding-left:18px; font-size:12px; color:#cbd5e1; line-height:1.5;'>";
      html += "<li><b>Quvurlar oralig'ida probel:</b> <code>|</code> belgisining ikki yonida probel bo'lishi shart (o'qishni osonlashtirish uchun).</li>";
      html += "<li><b>Qo'shtirnoqlar qoidasi:</b> <code>awk</code> yoki <code>grep</code> shablonlarida bittalik qo'shtirnoq (<code>'...'</code>) ishlatilishi shart, aks holda Bash qobig'i <code>$1</code>, <code>$2</code> ni o'zgaruvchi deb o'ylab xatoga sabab bo'ladi.</li>";
      html += "<li><b>Katta-kichik harflar:</b> Linux buyruqlari qat'iy ravishda registrga sezgir (case-sensitive).</li>";
      html += "</ul>";
      html += "</div>";
      html += "</div>";

      // 4. STEP-BY-STEP STAGE BREAKDOWN
      html += "<div class='cmd-section' style='margin-bottom:14px;'>";
      html += "<div class='cmd-sec-head cyan'><span>🚩 4. Bosqichma-bosqich Har Bir Buyruq va Bayroqlar Tahlili</span></div>";
      html += "<div style='display:flex; flex-direction:column; gap:8px; margin-top:6px;'>";

      anatomy.stages.forEach(function (stg) {
        html += "<div style='background:#090f1d; border:1px solid rgba(56,189,248,0.2); border-radius:6px; padding:10px;'>";
        html += "<div style='display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;'>";
        html += "<span style='font-family:monospace; font-weight:700; color:#38bdf8; font-size:13px;'>#" + stg.stepIndex + ". " + escapeHtml(stg.rawStage) + "</span>";
        html += "<span style='font-size:11px; background:rgba(255,255,255,0.08); padding:2px 8px; border-radius:4px; color:#94a3b8;'>" + escapeHtml(stg.name) + "</span>";
        html += "</div>";
        html += "<div style='font-size:12px; color:#cbd5e1; margin-bottom:6px;'><b>Vazifasi:</b> " + stg.whatItDoes + "</div>";

        if (stg.flagsList && stg.flagsList.length > 0) {
          html += "<div style='background:#040711; border-radius:4px; padding:6px 8px; margin-top:4px;'>";
          html += "<span style='font-size:10.5px; color:#fbbf24; font-weight:700; text-transform:uppercase;'>Ushbu bosqichdagi bayroqlar:</span>";
          stg.flagsList.forEach(function (flg) {
            html += "<div style='margin-top:4px; font-size:11.5px; color:#e2e8f0;'>";
            html += "<code style='color:#fbbf24; font-weight:700;'>" + escapeHtml(flg.flag) + "</code> — <b>" + escapeHtml(flg.name) + ":</b> " + flg.whatItDoes;
            if (flg.withoutRisk) {
              html += "<div style='color:#f87171; font-size:11px; margin-top:2px;'>⚠️ " + flg.withoutRisk + "</div>";
            }
            html += "</div>";
          });
          html += "</div>";
        }
        html += "</div>";
      });
      html += "</div>";
      html += "</div>";

      // 5. OPERATORS BREAKDOWN
      if (anatomy.detectedOps && anatomy.detectedOps.length > 0) {
        html += "<div class='cmd-section' style='margin-bottom:14px;'>";
        html += "<div class='cmd-sec-head amber'><span>⚡ 5. Konveyerdagi Maxsus Operatorlar Tahlili</span></div>";
        html += "<div style='display:flex; flex-direction:column; gap:6px; margin-top:6px;'>";
        anatomy.detectedOps.forEach(function (opKey) {
          var opInfo = OPERATORS[opKey];
          if (opInfo) {
            html += "<div style='background:#0f172a; border-left:3px solid #fbbf24; border-radius:0 4px 4px 0; padding:8px 10px; font-size:12px;'>";
            html += "<div style='display:flex; gap:6px; align-items:center;'>";
            html += "<code style='color:#fbbf24; font-weight:700; font-size:13px;'>" + escapeHtml(opKey) + "</code>";
            html += "<span style='color:#fff; font-weight:600;'>" + escapeHtml(opInfo.name) + "</span>";
            html += "</div>";
            html += "<div style='color:#cbd5e1; margin-top:2px;'>" + opInfo.desc + "</div>";
            html += "<div style='color:#f87171; font-size:11px; margin-top:3px;'>" + opInfo.omissionRisk + "</div>";
            html += "</div>";
          }
        });
        html += "</div>";
        html += "</div>";
      }

      // 6. OMISSION RISKS & SILENT BUGS
      html += "<div class='cmd-section' style='margin-bottom:14px;'>";
      html += "<div class='cmd-sec-head ruby'><span>⚠️ 6. Agar Bu Kombinatsiya Noto'g'ri Yozilsa Qanday Falokat Bo'ladi?</span></div>";
      html += "<div class='cmd-sec-text' style='color:#fca5a5;'>";
      html += "• <b>Quvur (<code>|</code>) tushib qolsa:</b> Buyruqlar alohida bajariladi va ikkinchi buyruq bo'sh qolib xato beradi.<br/>";
      html += "• <b><code>&gt;&gt;</code> o'rniga <code>&gt;</code> ishlatilsa:</b> Butun mavjud fayl tozalab tashlanadi va o'rniga faqat oxirgi qator yoziladi!<br/>";
      html += "• <b>Qo'shtirnoqlar unutilsa:</b> Maxsus belgilar (<code>*</code>, <code>|</code>, <code>$</code>) qobiq tomonidan noto'g'ri ochilib xatolikka olib keladi.";
      html += "</div>";
      html += "</div>";

      // 7. REAL-WORLD ALTERNATIVES
      html += "<div class='cmd-section'>";
      html += "<div class='cmd-sec-head cyan'><span>💡 7. Haqiqiy Hayotdagi Muqobil Yozilish Variantlari</span></div>";
      html += "<div style='background:#040711; border-radius:6px; padding:10px; font-size:12px; color:#cbd5e1; margin-top:4px;'>";
      html += "• <b>Variant 1 (To'g'ridan-to'g'ri qidirish):</b> <code>cat file | grep text</code> o'rniga to'g'ridan-to'g'ri <code>grep 'text' file</code> yozish resurslarni 2 barobar tejaydi (UUOC qoidasi).<br/>";
      html += "• <b>Variant 2 (Awk ichida filtrlash):</b> <code>grep 'user' | awk '{print $1}'</code> o'rniga bittada <code>awk -F: '/user/{print $1}' /etc/passwd</code> yozish mumkin.";
      html += "</div>";
      html += "</div>";

      return html;
    }

    // CASE B: SINGLE COMMAND DEEP BREAKDOWN
    var single = anatomy.stages[0] || {};
    html += "<div class='cmd-section' style='margin-bottom:14px;'>";
    html += "<div class='cmd-sec-head cyan'><span>🎯 1. Bu Buyruq Nima Qiladi va Qanday Qiladi?</span></div>";
    html += "<div class='cmd-sec-text'><b>" + escapeHtml(single.name) + ":</b> " + single.whatItDoes + "</div>";
    html += "</div>";

    html += "<div class='cmd-section' style='margin-bottom:14px;'>";
    html += "<div class='cmd-sec-head amber'><span>⚙️ 2. Qo'shimchalar (Bayroqlar) Qo'shilishiga Sabab Nima?</span></div>";
    html += "<div class='cmd-sec-text'>" + single.whyFlags + "</div>";
    html += "</div>";

    html += "<div class='cmd-section' style='margin-bottom:14px;'>";
    html += "<div class='cmd-sec-head emerald'><span>📐 3. Sintaksis va Qanday Yozilishi Kerak</span></div>";
    html += "<div style='background:#060d1a; border-left:3px solid #10b981; padding:8px 12px; border-radius:0 6px 6px 0; font-family:monospace; font-size:12.5px; color:#a7f3d0;'>";
    html += "<b>Sintaksis qolipi:</b> " + escapeHtml(single.syntaxPattern || (single.baseCmd + " [BAYROQLAR] [OBYEKT]"));
    html += "</div>";
    html += "</div>";

    if (single.flagsList && single.flagsList.length > 0) {
      html += "<div class='cmd-section' style='margin-bottom:14px;'>";
      html += "<div class='cmd-sec-head emerald'><span>🚩 4. Masalada Ishlatilgan Bayroqlarning Tahlili (" + single.flagsList.length + " ta)</span></div>";
      html += "<div class='cmd-flag-grid' style='display:flex; flex-direction:column; gap:6px; margin-top:6px;'>";
      single.flagsList.forEach(function (f) {
        html += "<div class='cmd-flag-row' style='background:#090f1d; border:1px solid rgba(56,189,248,0.2); border-radius:6px; padding:10px;'>";
        html += "<div style='display:flex; gap:8px; align-items:center; margin-bottom:4px;'>";
        html += "<span style='font-family:monospace; color:#fbbf24; font-weight:700; font-size:13px;'>" + escapeHtml(f.flag) + "</span>";
        html += "<span style='color:#fff; font-weight:600; font-size:12px;'>" + escapeHtml(f.name) + "</span>";
        if (f.syntaxPos) html += "<span style='color:#94a3b8; font-size:11px;'>[" + f.syntaxPos + "]</span>";
        html += "</div>";
        html += "<div style='font-size:12px; color:#cbd5e1;'><b>Vazifasi:</b> " + f.whatItDoes + "</div>";
        if (f.withoutRisk) {
          html += "<div style='color:#f87171; font-size:11.5px; margin-top:4px;'>⚠️ " + f.withoutRisk + "</div>";
        }
        html += "</div>";
      });
      html += "</div>";
      html += "</div>";
    } else {
      html += "<div class='cmd-section' style='margin-bottom:14px;'>";
      html += "<div class='cmd-sec-head emerald'><span>⚡ 4. Qo'shimchalar Holati</span></div>";
      html += "<div class='cmd-sec-text'>Ushbu qadamda qo'shimcha bayroqlar talab etilmaydi. Buyruq o'zining sof boshlang'ich rejimida to'liq vazifani bajaradi.</div>";
      html += "</div>";
    }

    html += "<div class='cmd-section' style='margin-bottom:14px;'>";
    html += "<div class='cmd-sec-head cyan'><span>⏰ 5. Qachon Kerak Bo'ladi?</span></div>";
    html += "<div class='cmd-sec-text'>" + (single.generalWhen || "Kundalik tizim boshqaruvi va monitoringida.") + "</div>";
    html += "</div>";

    html += "<div class='cmd-section'>";
    html += "<div class='cmd-sec-head ruby'><span>⚠️ 6. Agar Bu Buyruq / Qo'shimchalar Bo'lmasa Nima Bo'ladi?</span></div>";
    html += "<div class='cmd-sec-text' style='color:#fca5a5;'>" + (single.generalWithout || "Amal bajarilmaydi yoki xato yuz beradi.") + "</div>";
    html += "</div>";

    return html;
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

  var MASTER_FLAG_DICTIONARY = [
  {
    "cmd": "crontab",
    "flag": "-l",
    "name": "List cron jobs (Jadvalni ko'rish)",
    "syntax": "crontab -l",
    "purpose": "Joriy foydalanuvchining barcha faol rejalashtirilgan cron vazifalari ro'yxatini ekranga chiqaradi.",
    "withoutRisk": "Agar -l ko'rsatilmasa, crontab buyrug'i standart kiritishni (STDIN) kutib turadi yoki xatolik chiqaradi. Tizim jadvalini bilmasdan yangi vazifa qo'shish xavfli."
  },
  {
    "cmd": "crontab",
    "flag": "-e",
    "name": "Edit cron jobs (Tahrirlash rejimi)",
    "syntax": "crontab -e",
    "purpose": "Foydalanuvchi crontab faylini birlamchi matn muharririda (nano yoki vim) xavfsiz tahrirlash uchun ochadi.",
    "withoutRisk": "Agar -e bo'lmasa, faylni to'g'ridan-to'g'ri /var/spool/cron/ dan tahrirlash kerak bo'ladi, bu esa sintaksis tekshiruvini (crontab validity check) chetlab o'tib, buzilishga olib keladi."
  },
  {
    "cmd": "crontab",
    "flag": "-r",
    "name": "Remove crontab (Jadvalni butunlay o'chirish)",
    "syntax": "crontab -r",
    "purpose": "Foydalanuvchining barcha cron vazifalarini tizimdan butunlay o'chirib tashlaydi.",
    "withoutRisk": "DIQQAT: -e o'rniga adashib -r bosilsa, hech qanday so'rovsiz barcha rejalar o'chib ketadi! Qayta tiklashning iloji yo'q."
  },
  {
    "cmd": "systemctl",
    "flag": "enable --now",
    "name": "Enable & Immediate Start (Avtostart va Darhol Yoqish)",
    "syntax": "sudo systemctl enable --now disk-check.timer",
    "purpose": "Taymer yoki xizmatni ham operatsion tizim yuklanishiga (boot) avtomatik qo'shadi, ham aynan hozirgi daqiqadan faollashtiradi.",
    "withoutRisk": "Agar --now ko'rsatilmasa, faqat 'enable' bo'ladi. Tizim qayta yuklanguncha (reboot) taymer ishga tushmaydi va hozirgi reja bajarilmay qoladi."
  },
  {
    "cmd": "systemctl",
    "flag": "daemon-reload",
    "name": "Reload Systemd Units (Konfiguratsiyani qayta o'qish)",
    "syntax": "sudo systemctl daemon-reload",
    "purpose": "Yangi yaratilgan yoki tahrirlangan .service/.timer fayllarini diskdan Systemd xotirasiga qayta yuklaydi.",
    "withoutRisk": "Agar daemon-reload bajarilmasa, Systemd eski keshdagi sozlamalarni ushlab turadi va kiritilgan yangi o'zgarishlar e'tiborga olinmaydi."
  },
  {
    "cmd": "systemd-analyze",
    "flag": "verify",
    "name": "Verify Unit Syntax (Sintaksisni tekshirish)",
    "syntax": "systemd-analyze verify /etc/systemd/system/cleanup.service",
    "purpose": "Unit faylidagi xatoliklar, xato kalit so'zlar va direktivalarni xizmatni yoqmasdan turib diagnostika qiladi.",
    "withoutRisk": "Agar tekshirilmasa, sintaksisdagi bitta xato harf tufayli taymer 'Failed' holatiga tushadi va ishlab chiqarishdagi muhim tozalash to'xtab qoladi."
  },
  {
    "cmd": "journalctl",
    "flag": "-u",
    "name": "Unit Filter (Faqat bitta xizmat loglari)",
    "syntax": "journalctl -u cleanup.timer",
    "purpose": "Faqat ko'rsatilgan unit (timer yoki service) qaydlarini ajratib ko'rsatadi.",
    "withoutRisk": "Agar -u ko'rsatilmasa, journalctl butun Linux tizimining millionlab umumiy loglarini chiqarib, kerakli taymer xabarini topishni qiyinlashtiradi."
  },
  {
    "cmd": "df",
    "flag": "--output=pcent",
    "name": "Output Percentage Only (Faqat foiz ustuni)",
    "syntax": "df / --output=pcent",
    "purpose": "df natijasidagi ortiqcha ustunlarni (Blocks, Used, Available) yashirib, faqat disk to'lish foizini qaytaradi.",
    "withoutRisk": "Agar --output bo'lmasa, df barcha 6 ta ustunni chiqaradi. Skriptda foizni ajratib olish uchun murakkab awk/cut filtrlari talab etiladi."
  },
  {
    "cmd": "tail",
    "flag": "-n 1",
    "name": "Last Line Only (Faqat oxirgi qator)",
    "syntax": "tail -n 1",
    "purpose": "Chiqarilgan matnning faqat so'nggi bitta qatorini oladi (jadval sarlavhasini tashlab yuboradi).",
    "withoutRisk": "Agar -n 1 bo'lmasa, jadvalning 'Use%' sarlavhasi ham o'zgaruvchiga tushib qoladi va bash butun son taqqoslashida (integer expression) sintaksis xatosi beradi."
  },
  {
    "cmd": "tr",
    "flag": "-d",
    "name": "Delete Characters (Belgilarni qirqish)",
    "syntax": "tr -d ' %'",
    "purpose": "Matn tarkibidagi bo'sh joylar (spaces) va '%' belgisini o'chirib, sof raqamni (masalan: 87) qoldiradi.",
    "withoutRisk": "Agar -d ishlatilmasa, o'zgaruvchida '87%' qoladi va bash '-gt 85' shartida xato beradi, chunki '%' belgisi arifmetik raqam emas."
  },
  {
    "cmd": "curl",
    "flag": "-s",
    "name": "Silent Mode (Sokin rejim)",
    "syntax": "curl -s",
    "purpose": "Yuklash foizi, tezlik o'lchagich va progress-barni yashiradi.",
    "withoutRisk": "Agar -s bo'lmasa, cron skripti har 5 daqiqada log fayliga ulkan progress grafigini yozib, diskni tezda to'ldirib yuboradi."
  },
  {
    "cmd": "curl",
    "flag": "-X POST",
    "name": "HTTP POST Request (Ma'lumot yuborish)",
    "syntax": "curl -s -X POST 'https://api.telegram.org/...'",
    "purpose": "Serverga yangi ma'lumot jo'natish uchun HTTP metodini POST ga o'zgartiradi.",
    "withoutRisk": "Agar -X POST ko'rsatilmasa, standart GET so'rovi ketadi va ko'plab REST API lari (jumladan Telegram bot sendMessage) so'rovni rad etadi."
  },
  {
    "cmd": "curl",
    "flag": "-d",
    "name": "Data Payload (POST parametrlar)",
    "syntax": "curl -d 'chat_id=123' -d 'text=Alert'",
    "purpose": "So'rov tanasida (body) xabar matni va qabul qiluvchi identifikatorini uzatadi.",
    "withoutRisk": "Agar -d bo'lmasa, API bo'sh so'rov oladi va 'chat_id missing' xatosi bilan xabar jo'natilmay qoladi."
  },
  {
    "cmd": "docker",
    "flag": "run -d",
    "name": "Detached Mode (Orqa fonda ishga tushirish)",
    "syntax": "docker container run -d --name web nginx",
    "purpose": "Konteynerni mustaqil fon rejimida (daemon) yurgazadi va joriy terminalni bo'shatadi.",
    "withoutRisk": "Agar -d bo'lmasa, konteyner terminalni bloklab oladi. Terminal yopilsa yoki Ctrl+C bosilsa, konteyner ham darhol to'xtaydi."
  },
  {
    "cmd": "docker",
    "flag": "run -it",
    "name": "Interactive & Pseudo-TTY (Interaktiv terminal)",
    "syntax": "docker container run -it ubuntu bash",
    "purpose": "-i (STDIN ochiq ushlash) va -t (terminal tty emulyatori) orqali konteyner ichida to'g'ridan-to'g'ri interaktiv buyruq kiritish imkonini beradi.",
    "withoutRisk": "Agar -it bo'lmasa, bash buyrug'i kiritishni kutmasdan darhol exit (0) kodi bilan o'chib qoladi."
  },
  {
    "cmd": "docker",
    "flag": "--name",
    "name": "Custom Container Name (Maxsus nomlash)",
    "syntax": "docker container run --name my-ubuntu ubuntu",
    "purpose": "Konteynerga inson tushunadigan aniq nom beradi (masalan: my-ubuntu, nginx8888).",
    "withoutRisk": "Agar --name ko'rsatilmasa, Docker tasodifiy nom beradi (masalan: clever_curie, zen_newton). Keyinchalik skriptlarda konteynerni boshqarish qiyinlashadi."
  },
  {
    "cmd": "docker",
    "flag": "-p",
    "name": "Port Forwarding (Portlarni yo'naltirish)",
    "syntax": "docker container run -d -p 8888:80 --name web nginx",
    "purpose": "Xost mashinasining 8888-portini konteyner ichidagi 80-portga bog'laydi (HostPort:ContainerPort).",
    "withoutRisk": "Agar -p ko'rsatilmasa, konteyner ichidagi veb-server faqat ichki Docker tarmog'ida yopiq qoladi; tashqi brauzer yoki localhost:8888 orqali unga ulanib bo'lmaydi!"
  },
  {
    "cmd": "docker",
    "flag": "ls -a",
    "name": "List All Containers (Barcha konteynerlar ro'yxati)",
    "syntax": "docker container ls -a",
    "purpose": "Nafaqat faol ishlayotgan, balki to'xtatilgan (Exited) konteynerlarni ham to'liq ko'rsatadi.",
    "withoutRisk": "Agar -a bo'lmasa, faqat ishlayotganlar chiqadi. Xato tufayli to'xtab qolgan (crash bo'lgan) konteynerlarni ko'rib bo'lmaydi."
  },
  {
    "cmd": "docker",
    "flag": "exec -it",
    "name": "Execute in Running Container (Ishlayotgan konteyner ichiga kirish)",
    "syntax": "docker container exec -it my-ubuntu bash",
    "purpose": "Konteynerni to'xtatmasdan, uning ichida yangi bash sessiyasini ishga tushirib kiradi.",
    "withoutRisk": "Agar exec ishlatilmasa, konteyner ichidagi fayllarni tekshirish yoki uning jarayonlariga aralashishning iloji bo'lmaydi."
  },
  {
    "cmd": "docker",
    "flag": "attach",
    "name": "Attach to Main Process (Asosiy jarayonga ulanish)",
    "syntax": "docker container attach my-ubuntu",
    "purpose": "Konteynerning 1-PID ga ega asosiy ishchi jarayonining kirish/chiqish oqimiga to'g'ridan-to'g'ri ulanadi.",
    "withoutRisk": "DIQQAT: attach rejimida ehtiyotsizlik bilan Ctrl+C bosilsa, butun konteyner to'xtaydi! Chiqish uchun 'Ctrl+P, Ctrl+Q' kombinatsiyasidan foydalanish lozim."
  },
  {
    "cmd": "docker",
    "flag": "logs -f",
    "name": "Follow Container Logs (Jonli log kuzatish)",
    "syntax": "docker container logs -f my-ubuntu",
    "purpose": "Konteyner stdout/stderr xabarlarini jonli efir rejimida (real-time stream) ekranga uzatadi.",
    "withoutRisk": "Agar -f bo'lmasa, faqat o'tmishdagi loglarni ko'rsatib chiqib ketadi; yangi kelayotgan veb-so'rovlarni real vaqtda kuzatib bo'lmaydi."
  },
  {
    "cmd": "docker",
    "flag": "stats",
    "name": "Container Resource Metrics (Resurslar statistikasi)",
    "syntax": "docker stats",
    "purpose": "Barcha faol konteynerlarning CPU, RAM, Tarmoq I/O va Disk sarfini real vaqtda foizlarda ko'rsatadi.",
    "withoutRisk": "Agar stats bo'lmasa, qaysi konteyner xotira sizishiga (memory leak) olib kelayotganini aniqlash qiyin bo'ladi."
  },
  {
    "cmd": "docker",
    "flag": "rm -f",
    "name": "Force Remove Container (Majburiy o'chirish)",
    "syntax": "docker container rm -f my-ubuntu",
    "purpose": "Ishlayotgan konteynerga avval SIGKILL beradi va darhol tizimdan butunlay o'chirib tashlaydi.",
    "withoutRisk": "Agar -f bo'lmasa, Docker 'You cannot remove a running container' xatosi bilan o'chirishdan bosh tortadi. Avval stop qilish shart bo'ladi."
  },
  {
    "cmd": "docker",
    "flag": "rename",
    "name": "Rename Container (Nomini o'zgartirish)",
    "syntax": "docker container rename old_name new_name",
    "purpose": "Mavjud konteyner identifikatori va sozlamalarini saqlagan holda uning nomini o'zgartiradi.",
    "withoutRisk": "Agar rename bo'lmasa, yangi nom berish uchun konteynerni o'chirib noldan boshqatdan run qilishga to'g'ri keladi."
  },
  {
    "cmd": "usermod",
    "flag": "-aG docker",
    "name": "Append Group (Docker guruhiga qo'shish)",
    "syntax": "sudo usermod -aG docker $USER",
    "purpose": "Foydalanuvchini mavjud guruhlarini saqlagan holda 'docker' guruhiga qo'shadi, bu esa sudonisiz Docker buyruqlarini berish huquqini taqdim etadi.",
    "withoutRisk": "DIQQAT: Agar -a (append) unutilib, faqat '-G docker' yozilsa, foydalanuvchi qolgan barcha guruhlaridan (sudo, adm, dev) chiqarib yuboriladi va tizimda adminlik huquqini yo'qotadi!"
  },
  {
    "cmd": "find",
    "flag": "-mtime +1",
    "name": "Modified Time Filter (Eski fayllar)",
    "syntax": "find /tmp -type f -mtime +1 -ls",
    "purpose": "So'nggi 24 soatdan (1 kundan) ko'proq vaqt oldin o'zgartirilgan fayllarni ajratadi.",
    "withoutRisk": "Agar -mtime ko'rsatilmasa, hozirgina yaratilgan yangi fayllar ham o'chib ketishi xavfi tug'iladi."
  },
  {
    "cmd": "find",
    "flag": "-delete",
    "name": "Delete Matched Files (Haqiqiy o'chirish)",
    "syntax": "find /tmp -type f -mtime +1 -delete",
    "purpose": "Qidiruv shartiga to'g'ri kelgan fayllarni xavfsiz o'chiradi.",
    "withoutRisk": "Avval -ls orqali qaysi fayllar o'chishini tekshirib olmasdan -delete bersangiz, adashib butun katalog fayllari o'chib ketishi mumkin."
  },
  {
    "cmd": "docker build",
    "flag": "-t",
    "name": "Tag Image (Obrazga nom va versiya berish)",
    "syntax": "docker build -t sample-app:1.0 .",
    "purpose": "Yaratilayotgan obrazga inson o'qiy oladigan repozitoriy nomi va tegi (versiyasi)ni biriktiradi.",
    "withoutRisk": "Agar -t ko'rsatilmasa, obraz faqat 64 belgili sha256 xesh (masalan, <none>:<none>) bilan yaratiladi. Keyinchalik uni qidirib topish va ishga tushirish qiyinlashadi."
  },
  {
    "cmd": "docker build",
    "flag": ".",
    "name": "Build Context (Qurish konteksti katalogi)",
    "syntax": "docker build -t sample-app:1.0 .",
    "purpose": "Joriy katalogni qurish konteksti (build context) deb belgilaydi va Dockerfile, app.py kabi fayllarni Docker deymoniga yuboradi.",
    "withoutRisk": "Agar nuqta (.) yoki katalog yo'li qo'yilmasa, Docker buyrug'i sintaktik xato berib to'xtaydi, chunki Dockerfile va nusxalanadigan fayllar qayerdaligini bilolmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "-d",
    "name": "Detached Mode (Fon rejimida ishga tushirish)",
    "syntax": "docker run -d --name app1 sample-app:1.0",
    "purpose": "Konteynerni orqa fonda (background daemon) ishga tushiradi va terminalni bloklamasdan boshqaruvni foydalanuvchiga qaytaradi.",
    "withoutRisk": "Agar -d berilmasa, konteyner foreground (old) rejimda ochilib terminalni band qilib qo'yadi. Terminal yopilsa yoki Ctrl+C bosilsa, butun veb-server ham to'xtab qoladi."
  },
  {
    "cmd": "docker run",
    "flag": "--name",
    "name": "Container Name (Konteynerga nom berish)",
    "syntax": "docker run -d --name app1 sample-app:1.0",
    "purpose": "Konteynerga tasodifiy nom (masalan: cranky_darwin) o'rniga aniq mantiqiy nom (app1, mypg) beradi.",
    "withoutRisk": "Agar --name ko'rsatilmasa, Docker tasodifiy nom generatsiya qiladi. Keyingi skriptlar, stop/rm buyruqlari va loglarni ko'rishda konteynerni topish murakkablashadi."
  },
  {
    "cmd": "docker run",
    "flag": "-p 127.0.0.1:5000:5000",
    "name": "Port Publishing & Host Binding (Port yo'naltirish & IP chegaralash)",
    "syntax": "docker run -d -p 127.0.0.1:5000:5000 sample-app:1.0",
    "purpose": "Konteynerning ichki 5000-portini faqat lokal mashinaning (127.0.0.1) 5000-portiga bog'laydi.",
    "withoutRisk": "Agar '127.0.0.1:' qo'yilmay faqat '-p 5000:5000' berilsa, port barcha tashqi tarmoq interfeyslariga (0.0.0.0) ochilib ketadi va butun internetga xavfsizlik tahdidini tug'diradi."
  },
  {
    "cmd": "docker run",
    "flag": "-e",
    "name": "Environment Variable (Muhit o'zgaruvchisini o'rnatish)",
    "syntax": "docker run -d -e APP_ENV=dev sample-app:1.0",
    "purpose": "Konteyner ichidagi ilovaga muhit parametrini (masalan: APP_ENV=dev yoki POSTGRES_PASSWORD) uzatadi.",
    "withoutRisk": "Agar -e berilmasa, dastur Dockerfile'dagi default qiymatni oladi yoki PostgreSQL kabi ma'lumotlar bazasi parol berilmagani uchun darhol qulab (crash) to'xtaydi."
  },
  {
    "cmd": "docker run",
    "flag": "--rm",
    "name": "Auto-Remove (Tugagach o'z-o'zidan o'chirish)",
    "syntax": "docker run --rm --name japp java-multistage:1.0",
    "purpose": "Vazifasini bajarib bo'lgan konteyner to'xtashi bilan uning diskdagi qoldiqlarini avtomatik o'chirib tashlaydi.",
    "withoutRisk": "Agar qisqa muddatli bir martalik vazifalarda --rm qo'yilmasa, yuzlab o'lik (exited) konteynerlar to'planib qolib, disk maydonini to'ldirib yuboradi."
  },
  {
    "cmd": "docker run",
    "flag": "-v pgdata:/var/lib/postgresql/data",
    "name": "Volume Mount (Doimiy xotirani ulash)",
    "syntax": "docker run -d -v pgdata:/var/lib/postgresql/data postgres:15",
    "purpose": "Konteyner o'chirib yuborilsa ham, uning ma'lumotlar bazasi fayllari xostdagi 'pgdata' nomli hajmda omon qolishini ta'minlaydi.",
    "withoutRisk": "DIQQAT: Agar -v bo'lmasa, barcha jadvallar konteynerning vaqtinchalik yozish qatlamida (writable layer) saqlanadi. 'docker rm' bajarilishi bilan butun baza yo'qoladi!"
  },
  {
    "cmd": "docker exec",
    "flag": "-it",
    "name": "Interactive TTY (Interaktiv terminal rejimi)",
    "syntax": "docker exec -it app1 sh",
    "purpose": "Ishlab turgan konteyner ichida interaktiv buyruq qobig'ini (sh/bash) yoki dasturni (psql) ochadi.",
    "withoutRisk": "Agar -it (interactive + tty) berilmasa, kiritish oqimi (STDIN) ulanmaydi, terminal darhol yopiladi va konteyner ichida interaktiv buyruq kiritib bo'lmaydi."
  },
  {
    "cmd": "docker stats",
    "flag": "--no-stream",
    "name": "Static Snapshot (Bir martalik o'lchov olish)",
    "syntax": "docker stats --no-stream app1",
    "purpose": "Konteynerning CPU va RAM ishlatilishini jonli strim qilmasdan, aynan hozirgi lahzadagi bitta o'lchov natijasini chiqaradi.",
    "withoutRisk": "Agar --no-stream qo'yilmasa, buyruq terminalni cheksiz monitor rejimiga olib kiradi va avtomatlashtirish skriptlari uning tugashini kutib qotib qoladi."
  },
  {
    "cmd": "docker container ls",
    "flag": "-as",
    "name": "All Containers with Sizes (Barcha konteynerlar va hajmlar)",
    "syntax": "docker container ls -as",
    "purpose": "To'xtagan konteynerlarni ham chiqaradi va har bir konteynerning yoziladigan qatlami (writable layer) qancha disk egallaganini ko'rsatadi.",
    "withoutRisk": "Oddiy 'docker ps' faqat ishlab turganlarni ko'rsatadi va qaysi to'xtagan konteyner qancha disk joyini yeb yotganini aniqlab bo'lmaydi."
  },
  {
    "cmd": "docker volume",
    "flag": "create",
    "name": "Create Named Volume (Nomli doimiy hajm yaratish)",
    "syntax": "docker volume create pgdata",
    "purpose": "Docker tomonidan boshqariladigan mustaqil va xavfsiz fayl saqlash hududini barpo etadi.",
    "withoutRisk": "Hajm oldindan yaratilmasa yoki nazorat qilinmasa, anonim vaqtinchalik hajmlar hosil bo'lib, zaxira nusxa (backup) olish qiyinlashadi."
  },
  {
    "cmd": "docker volume",
    "flag": "rm",
    "name": "Remove Volume (Doimiy hajmni o'chirish)",
    "syntax": "docker volume rm pgdata",
    "purpose": "Foydalanilmayotgan doimiy ma'lumotlar hajmini diskdan butunlay tozalaydi.",
    "withoutRisk": "Hajmni o'chirishdan oldin konteyner to'xtatilib o'chirilgan bo'lishi kerak. Ehtiyotsizlik bilan ishlatilsa barcha saqlangan PostgreSQL ma'lumotlari ketadi."
  },
  {
    "cmd": "docker compose",
    "flag": "config",
    "name": "Validate Configuration (compose.yaml sintaksisini tekshirish)",
    "syntax": "docker compose config",
    "purpose": "compose.yaml faylidagi bo'shliqlar (indentation), portlar va o'zgaruvchilarni servislarni ishga tushirmasdan tekshiradi.",
    "withoutRisk": "Agar tekshirilmasa, noto'g'ri YAML tab/space xatosi tufayli konteynerlar yarimta ko'tarilib, nosozlik keltirib chiqaradi."
  },
  {
    "cmd": "docker compose",
    "flag": "up -d --build",
    "name": "Build & Detach Orchestration (Qurish va fonda ko'tarish)",
    "syntax": "docker compose up -d --build",
    "purpose": "Kod o'zgargan bo'lsa yangi obrazlarni quradi va barcha servislarni (web, db) fonda bir vaqtning o'zida ishga tushiradi.",
    "withoutRisk": "Agar --build qo'yilmasa, Docker Compose eski keshdagi obrazni ko'taradi va yangi kiritilgan kod o'zgarishlari kuchga kirmay qoladi."
  },
  {
    "cmd": "docker compose",
    "flag": "down",
    "name": "Tear Down Services (Servislarni xavfsiz to'xtatish)",
    "syntax": "docker compose down",
    "purpose": "Barcha konteynerlar va umumiy tarmoqni to'xtatib tozalaydi, lekin nomli ma'lumotlar bazasi hajmini saqlab qoladi.",
    "withoutRisk": "DIQQAT: Agar 'down -v' berilsa, hajmlar ham o'chib ketadi! Odatiy 'down' esa ma'lumotlarni xavfsiz saqlaydi."
  },
  {
    "cmd": "pip install",
    "flag": "--no-cache-dir",
    "name": "Disable Cache (Keshni o'chirish)",
    "syntax": "pip install --no-cache-dir -r requirements.txt",
    "purpose": "Yuklab olingan pip paketlarining g'ildiraklarini (wheels) keshga saqlamasdan, Docker obraz hajmini o'nlab megabaytga qisqartiradi.",
    "withoutRisk": "Agar --no-cache-dir bo'lmasa, ~/.cache papkasi Docker qatlamiga kirib, yakuniy obraz hajmini asossiz kattalashtirib yuboradi."
  },
  {
    "cmd": "psql",
    "flag": "-c",
    "name": "Command String (Bitta SQL so'rovini bajarish)",
    "syntax": "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\"",
    "purpose": "Interaktiv psql konsoliga kirmasdan, bitta SQL buyrug'ini bajarib natijani to'g'ridan-to'g'ri terminalga chiqaradi.",
    "withoutRisk": "Agar -c bo'lmasa, psql interaktiv sessiyani kutadi va avtomatlashtirilgan test skriptlari yoki terminal quvuri (pipe) to'xtab qoladi."
  },
  {
    "cmd": "curl",
    "flag": "-fsSL",
    "name": "Fail Silent Show-Error Follow-Location (Xavfsiz yuklab olish)",
    "syntax": "curl -fsSL https://get.docker.com -o get-docker.sh",
    "purpose": "HTTP xatolarida xatoni bildiradi (-f), progress barni yashiradi (-s), lekin nosozlik bo'lsa xatoni ko'rsatadi (-S) va redirectlarni kuzatadi (-L).",
    "withoutRisk": "Oddiy curl ishlatilsa, 404 HTML xato sahifasi ham skript fayliga yozilib qoladi va 'sh ./get-docker.sh' bajarilganda sintaksis halokati yuz beradi."
  },
  {
    "cmd": "usermod",
    "flag": "-L",
    "name": "Parolni qulflash (Lock)",
    "syntax": "usermod -L <username>",
    "purpose": "/etc/shadow faylidagi parollangan hash boshiga '!' belgisi qo'yib, hisobga kirishni zudlik bilan to'xtatadi.",
    "withoutRisk": "⚠️ AGAR -L BO'LMASA: Foydalanuvchi hisobi ochiq qoladi va parolini terib tizimga kirishda davom etaveradi!"
  },
  {
    "cmd": "usermod",
    "flag": "-U",
    "name": "Parol qulfini ochish (Unlock)",
    "syntax": "usermod -U <username>",
    "purpose": "/etc/shadow dagi hash boshidagi '!' belgisini olib tashlab, hisobni qayta faollashtiradi.",
    "withoutRisk": "⚠️ AGAR -U BO'LMASA: Foydalanuvchi qulflangan holatda qoladi va paroli to'g'ri bo'lsa ham tizimga kira olmaydi!"
  },
  {
    "cmd": "usermod",
    "flag": "-s",
    "name": "Boshlang'ich shellni o'zgartirish (Shell)",
    "syntax": "usermod -s /bin/bash <username>",
    "purpose": "Foydalanuvchi tizimga kirganda ishga tushadigan qobiqni (masalan, /bin/bash yoki /usr/sbin/nologin) belgilaydi.",
    "withoutRisk": "⚠️ AGAR -s BO'LMASA: Foydalanuvchining joriy shell dasturi o'zgarishsiz qoladi."
  },
  {
    "cmd": "usermod",
    "flag": "-c",
    "name": "Izoh va to'liq ism (Comment / GECOS)",
    "syntax": "usermod -c 'Alice Smith' <username>",
    "purpose": "/etc/passwd faylidagi 5-ustun (GECOS) ma'lumotini o'zgartiradi (xodim ismi, kabinet, telefon).",
    "withoutRisk": "⚠️ AGAR -c BO'LMASA: Tizim hisobi egasi kimligi noaniq bo'lib qoladi, audit tekshiruvi qiyinlashadi."
  },
  {
    "cmd": "usermod",
    "flag": "-m",
    "name": "Mavjud papkani yangi manzilga ko'chirish (Move home)",
    "syntax": "usermod -d /new/home -m <username>",
    "purpose": "Faqat -d bilan birga ishlaydi. Eski uydagi barcha fayllarni yangi /home manziliga jismonan ko'chiradi.",
    "withoutRisk": "⚠️ AGAR -m BO'LMASA: /etc/passwd da manzil o'zgaradi, lekin fayllar eski joyda qolib ketadi; foydalanuvchi hamma fayllarini 'yo'qotadi'!"
  },
  {
    "cmd": "useradd",
    "flag": "-m",
    "name": "Uy katalogini yaratish (Make home)",
    "syntax": "useradd -m <username>",
    "purpose": "/home/<username> papkasini avtomatik yaratadi va /etc/skel dan .bashrc, .profile fayllarini ko'chirib beradi.",
    "withoutRisk": "⚠️ AGAR -m BO'LMASA: Foydalanuvchining uy papkasi yaratilmaydi! Tizimga kirganda 'No directory, logging in with HOME=/' xatosi chiqadi!"
  },
  {
    "cmd": "useradd",
    "flag": "-G",
    "name": "Qo'shimcha guruhlarga biriktirish (Supplementary Groups)",
    "syntax": "useradd -m -G sudo,docker <username>",
    "purpose": "Foydalanuvchini asosiy guruhidan tashqari maxsus guruhlarga (sudo, devops) a'zo qiladi.",
    "withoutRisk": "⚠️ AGAR -G BO'LMASA: Foydalanuvchi faqat o'z shaxsiy guruhida qoladi, sudo yoki docker kabi imtiyozlarga ega bo'lmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "+t / 1777",
    "name": "Yopishqoq bit (Sticky Bit)",
    "syntax": "chmod +t /srv/project  YOKI  chmod 1777 /tmp",
    "purpose": "Umumiy papkada har kim fayl yarata oladi, lekin birovning faylini faqat o'sha fayl egasi yoki root o'chira oladi.",
    "withoutRisk": "⚠️ AGAR +t BO'LMASA: Har qanday foydalanuvchi boshqa hamkasblarining fayllarini qasddan yoki adashib o'chirib yuborishi mumkin!"
  },
  {
    "cmd": "chmod",
    "flag": "-R",
    "name": "Rekursiv qo'llash (Recursive)",
    "syntax": "chmod -R 755 /var/www",
    "purpose": "Katalog ichidagi barcha ichki papkalar va fayllarga ruxsatlarni bir vaqtda o'rnatadi.",
    "withoutRisk": "⚠️ AGAR -R BO'LMASA: Faqat tashqi katalogning ruxsati o'zgaradi, ichidagi barcha fayllar eski holicha qolib ketadi."
  },
  {
    "cmd": "gcc",
    "flag": "-Wall",
    "name": "Barcha ogohlantirishlar (Warnings: All)",
    "syntax": "gcc -Wall fork.c -o fork.out",
    "purpose": "Kompilyatorga kodda shubhali, ehtimoliy xato yoki xotira oqish holatlarini ogohlantirish sifatida ko'rsatishni buyuradi.",
    "withoutRisk": "⚠️ AGAR -Wall BO'LMASA: Kompilyator jiddiy mantig'iy xatolarni sukut saqlab o'tkazib yuboradi va dastur kutilmaganda halokatga uchraydi!"
  },
  {
    "cmd": "gcc",
    "flag": "-Wextra",
    "name": "Qo'shimcha qat'iy ogohlantirishlar (Warnings: Extra)",
    "syntax": "gcc -Wall -Wextra fork.c -o fork.out",
    "purpose": "Ishlatilmagan parametrlar, tiplar mos kelmasligi kabi nozik xatolarni ham topadi.",
    "withoutRisk": "⚠️ AGAR -Wextra BO'LMASA: Ishlab chiqarish darajasidagi nozik xatoliklar ko'zdan chetda qoladi."
  },
  {
    "cmd": "gcc",
    "flag": "-o",
    "name": "Chiquvchi ijrochi fayl nomi (Output)",
    "syntax": "gcc fork.c -o fork.out",
    "purpose": "Yaratiladigan binar dastur fayliga nom beradi (masalan, fork.out).",
    "withoutRisk": "⚠️ AGAR -o BO'LMASA: Gcc faylni sukut bo'yicha 'a.out' nomi bilan saqlaydi! Eski a.out dasturingiz ustiga yozilib yo'qoladi!"
  },
  {
    "cmd": "ulimit",
    "flag": "-u",
    "name": "Maksimal jarayonlar chegarasi (User process limit)",
    "syntax": "ulimit -u 50",
    "purpose": "Bitta foydalanuvchi ochishi mumkin bo'lgan maksimal protsesslar sonini cheklaydi.",
    "withoutRisk": "⚠️ AGAR -u BO'LMASA: Fork bomb yuz berganda protsesslar soni cheksiz ko'payib, butun Linux yadrosi (Kernel) qotib qoladi!"
  },
  {
    "cmd": "find",
    "flag": "-type f",
    "name": "Oddiy fayllar filtri (File type)",
    "syntax": "find /dir -type f -name '*.log'",
    "purpose": "Qidiruvni faqat oddiy matn/binar fayllar bilan cheklaydi (kataloglar, soketlar va havolalarni chetlab o'tadi).",
    "withoutRisk": "⚠️ AGAR -type f BO'LMASA: Kataloglarning o'zi ham qidiruvga tushadi; keyingi -delete buyrug'i butun boshli papkalarni o'chirib yuborishi mumkin!"
  },
  {
    "cmd": "find",
    "flag": "-mmin +10080",
    "name": "O'zgartirilgan vaqt daqiqalarda (Modified minutes)",
    "syntax": "find /dir -mmin +10080",
    "purpose": "+ belgisi 10,080 daqiqadan (aniq 7 kundan) ko'proq oldin o'zgartirilgan eski fayllarni bildiradi.",
    "withoutRisk": "⚠️ AGAR + ISHORASI BO'LMASA: '+10080' o'rniga '-10080' yozilsa, yangi (oxirgi 7 kundagi) dolzarb loglar tanlanib, xatoga olib keladi!"
  },
  {
    "cmd": "find",
    "flag": "-ls",
    "name": "Batafsil ro'yxat formatida chiqarish (List format)",
    "syntax": "find /dir -name '*.log' -ls",
    "purpose": "Topilgan har bir faylning inode, ruxsatlari, egasi, hajmi va sanasini to'liq ko'rsatadi.",
    "withoutRisk": "⚠️ AGAR -ls BO'LMASA: Find faqat fayllarning nomini quruq matn sifatida chiqaradi, ularning hajmi va sanasini ko'rib bo'lmaydi."
  },
  {
    "cmd": "find",
    "flag": "-maxdepth 1",
    "name": "Qidiruv chuqurligini cheklash (Max depth)",
    "syntax": "find /dir -maxdepth 1 -name '*.log'",
    "purpose": "Qidiruvni faqat ko'rsatilgan joriy papka bilan cheklaydi, ichki papkalar (subdirectories) ichiga kirmaydi.",
    "withoutRisk": "⚠️ AGAR -maxdepth 1 BO'LMASA: Barcha ichki arxiv papkalardagi loglar ham rekursiv topilib, siqilib yoki o'chib ketadi!"
  },
  {
    "cmd": "find",
    "flag": "-print0",
    "name": "NUL bayt ajratgich bilan chiqarish (NUL Delimiter)",
    "syntax": "find /dir -name '*.log' -print0",
    "purpose": "Fayl nomlarini yangi satr (\\n) o'rniga \\0 (NUL bayt) bilan ajratadi. Nomi bo'sh joyli (spaces) fayllarni xavfsiz uzatadi.",
    "withoutRisk": "⚠️ AGAR -print0 BO'LMASA: Fayl nomida bo'sh joy bo'lsa (masalan, 'my log.txt'), tsikl uni 'my' va 'log.txt' deb 2 ta xato faylga bo'lib yuboradi!"
  },
  {
    "cmd": "curl",
    "flag": "-f / --fail",
    "name": "Server xatolarida jimgina to'xtash (Fail on HTTP error)",
    "syntax": "curl -f -o file.html https://site.com",
    "purpose": "HTTP 404 (Not Found) yoki 500 xatolarida chiquvchi faylga xato sahifasini yozmasdan, darhol xato kodi (exit != 0) qaytaradi.",
    "withoutRisk": "⚠️ AGAR -f BO'LMASA: Server 404 xato bersa ham, curl o'sha xatolik HTML matnini yuklab olib, dasturingiz uni 'muvaffaqiyatli' deb o'ylaydi!"
  },
  {
    "cmd": "curl",
    "flag": "-L / --location",
    "name": "Qayta yo'naltirishlarga ergashish (Follow Location)",
    "syntax": "curl -L -o file.tar.gz https://site.com/download",
    "purpose": "Server 301 yoki 302 qayta yo'naltirish (Redirect) berganda yangi manzilga avtomatik o'tib yuklashni davom ettiradi.",
    "withoutRisk": "⚠️ AGAR -L BO'LMASA: Curl faqat '301 Moved Permanently' degan 0 baytli bo'sh javobni saqlaydi, kerakli fayl yuklanmay qoladi!"
  },
  {
    "cmd": "curl",
    "flag": "-s / --silent",
    "name": "Jim rejim (Silent mode)",
    "syntax": "curl -s https://site.com",
    "purpose": "Progress bar va yuklanish foizlarini ekranga chiqarmaydi (avtomatlashtirilgan skriptlar logini toza saqlash uchun).",
    "withoutRisk": "⚠️ AGAR -s BO'LMASA: Terminal har soniyada foizlar bilan to'lib, haqiqiy foydali loglar ko'rinmay ketadi."
  },
  {
    "cmd": "curl",
    "flag": "-S / --show-error",
    "name": "Xatolikni baribir ko'rsatish (Show error on failure)",
    "syntax": "curl -sS https://site.com",
    "purpose": "-s (jim rejim) bilan birga ishlatilganda, agar yuklash barbod bo'lsa, xatolik sababini ekranga chiqaradi.",
    "withoutRisk": "⚠️ AGAR -S BO'LMASA: -s berilganda xato bo'lsa ham terminal hech narsa aytmaydi, nima buzilganini bilib bo'lmaydi!"
  },
  {
    "cmd": "curl",
    "flag": "--max-time",
    "name": "Maksimal kutish vaqti soniyalarda (Timeout)",
    "syntax": "curl --max-time 30 https://site.com",
    "purpose": "Agar server 30 soniyada javob bermasa, ulanishni to'xtatadi.",
    "withoutRisk": "⚠️ AGAR --max-time BO'LMASA: Server qotib qolsa, butun avtomatlashtirilgan skriptingiz abadiy kutish rejimida muzlab qoladi!"
  },
  {
    "cmd": "curl",
    "flag": "--",
    "name": "Bayroqlar tugash belgisi (End of options)",
    "syntax": "curl -fLsS -o file -- '$url'",
    "purpose": "Keyingi keladigan parametr minus (-) belgisi bilan boshlansa ham, uni bayroq emas, URL deb qabul qilishni kafolatlaydi.",
    "withoutRisk": "⚠️ AGAR -- BO'LMASA: Agar URL '-bad-url' ko'rinishida bo'lsa, curl uni noto'g'ri bayroq deb hisoblab halokatga uchraydi!"
  },
  {
    "cmd": "read",
    "flag": "-r",
    "name": "Xom qator (Raw input)",
    "syntax": "read -r line",
    "purpose": "Kiritilgan matndagi teskari slesh (\\) belgilarini buzmasdan o'z holicha saqlaydi.",
    "withoutRisk": "⚠️ AGAR -r BO'LMASA: 'C:\\Users' yoki '\\n' kabi belgilar yo'qolib yoki buzilib ketadi!"
  },
  {
    "cmd": "read",
    "flag": "-p",
    "name": "Foydalanuvchiga savol matni (Prompt)",
    "syntax": "read -r -p 'Ismingiz: ' name",
    "purpose": "Foydalanuvchidan ma'lumot so'rashdan oldin ekranga taklif matnini chiqaradi.",
    "withoutRisk": "⚠️ AGAR -p BO'LMASA: Terminal bo'sh turadi, foydalanuvchi tizim nimani kutayotganini tushunmay qoladi."
  },
  {
    "cmd": "read",
    "flag": "-d ''",
    "name": "Ajratuvchi belgi (Delimiter NUL)",
    "syntax": "read -r -d '' file",
    "purpose": "Yangi satr o'rniga NUL (\\0) baytini qator oxiri deb hisoblaydi (find -print0 bilan tandemda ishlaydi).",
    "withoutRisk": "⚠️ AGAR -d '' BO'LMASA: Fayl nomida yangi qator yoki probel bo'lsa, xato o'qiladi."
  },
  {
    "cmd": "df",
    "flag": "-P",
    "name": "POSIX formati (Standard POSIX output)",
    "syntax": "df -P /",
    "purpose": "Har bir disk bo'limini aniq bitta satrga chiqarishni kafolatlaydi (uzun nomli disklarda satr bo'linib ketmaydi).",
    "withoutRisk": "⚠️ AGAR -P BO'LMASA: Uzun nomli fayl tizimlari 2 satrga bo'linadi va 'awk $5' foiz o'rniga bo'sh satr o'qib xatoga uchraydi!"
  },
  {
    "cmd": "tee",
    "flag": "-a",
    "name": "Fayl oxiriga qo'shish (Append)",
    "syntax": "echo 'alert' | tee -a alert.log",
    "purpose": "Chiqarilgan xabarni ham ekranga ko'rsatadi, ham mavjud log faylining oxiriga qo'shib saqlaydi.",
    "withoutRisk": "⚠️ AGAR -a BO'LMASA: Tee faylni boshidan tozalab yuboradi (overwrite) va barcha eski tarixiy xabarlar o'chib ketadi!"
  },
  {
    "cmd": "systemctl",
    "flag": "--user",
    "name": "Foydalanuvchi darajasi (User instance)",
    "syntax": "systemctl --user start os-seminar-tick.timer",
    "purpose": "Xizmatni oddiy foydalanuvchi sessiyasida (root huquqisiz) boshqarishni ta'minlaydi.",
    "withoutRisk": "⚠️ AGAR --user BO'LMASA: Tizim root parolini so'raydi yoki 'Permission denied' xatosi bilan to'xtaydi!"
  },
  {
    "cmd": "systemctl",
    "flag": "is-active --quiet",
    "name": "Sokin faollik tekshiruvi (Silent active check)",
    "syntax": "systemctl is-active --quiet cron.service",
    "purpose": "Ekranga 'active' yoki 'inactive' deb yozmasdan, faqat exit kod orqali (0 = faol, 3 = to'xtagan) javob beradi.",
    "withoutRisk": "⚠️ AGAR --quiet BO'LMASA: Terminalda keraksiz 'active' so'zi chiqib, skript loglariga xalaqit beradi."
  },
  {
    "cmd": "journalctl",
    "flag": "--no-pager",
    "name": "Matnni to'liq oqimda chiqarish (No pager)",
    "syntax": "journalctl --user -u service -n 10 --no-pager",
    "purpose": "Loglarni 'less' kabi interaktiv ko'rish oynasiga yo'naltirmasdan, to'g'ridan-to'g'ri terminalga to'kadi.",
    "withoutRisk": "⚠️ AGAR --no-pager BO'LMASA: Skript 'less' interfeysida qotib qoladi va foydalanuvchi 'q' tugmasini bosmaguncha davom etmaydi!"
  },
  {
    "cmd": "pwd",
    "flag": "-L",
    "name": "Print Working Directory (Joriy Katalogni Ko'rsatish) (-L)",
    "syntax": "pwd -L",
    "purpose": "Mantiqiy yo'lni chiqarish (simvolik havolalar hisobga olinadi)",
    "withoutRisk": "Agar -L bayrog'i berilmasa, pwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pwd",
    "flag": "-P",
    "name": "Print Working Directory (Joriy Katalogni Ko'rsatish) (-P)",
    "syntax": "pwd -P",
    "purpose": "Fizik real yo'lni chiqarish (barcha simvolik havolalarni ochib beradi)",
    "withoutRisk": "Agar -P bayrog'i berilmasa, pwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-a",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-a)",
    "syntax": "ls -a",
    "purpose": "Barcha fayllarni, jumladan nuqta bilan boshlanuvchi yashirin (.bashrc) fayllarni ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-l",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-l)",
    "syntax": "ls -l",
    "purpose": "Uzoq format: ruxsatlar, bog'lamlar soni, egasi, hajmi va sanasi bilan ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-h",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-h)",
    "syntax": "ls -h",
    "purpose": "Inson tushunadigan o'lchov birliklarida (K, M, G) chiqarish (-l bilan birga)",
    "withoutRisk": "Agar -h bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-i",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-i)",
    "syntax": "ls -i",
    "purpose": "Har bir faylning Inode (identifikatsiya) raqamini chiqarish",
    "withoutRisk": "Agar -i bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-R",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-R)",
    "syntax": "ls -R",
    "purpose": "Rekursiv ravishda barcha ichki papkalarni ham chiqarish",
    "withoutRisk": "Agar -R bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-t",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-t)",
    "syntax": "ls -t",
    "purpose": "O'zgartirilgan vaqti bo'yicha tartiblash (eng yangilari yuqorida)",
    "withoutRisk": "Agar -t bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "~",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (~)",
    "syntax": "cd ~",
    "purpose": "Foydalanuvchining uy katalogiga (/home/user) o'tish",
    "withoutRisk": "Agar ~ bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "..",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (..)",
    "syntax": "cd ..",
    "purpose": "Bitta yuqori darajadagi ota papkaga qaytish",
    "withoutRisk": "Agar .. bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "-",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (-)",
    "syntax": "cd -",
    "purpose": "Oldingi turgan katalogga qaytish",
    "withoutRisk": "Agar - bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "/",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (/)",
    "syntax": "cd /",
    "purpose": "Ildiz (root) katalogiga o'tish",
    "withoutRisk": "Agar / bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkdir",
    "flag": "-p",
    "name": "Make Directory (Yangi Papka Yaratish) (-p)",
    "syntax": "mkdir -p",
    "purpose": "Zarur bo'lsa barcha oraliq (ota) papkalarni bir vaqtda yaratish (parents)",
    "withoutRisk": "Agar -p bayrog'i berilmasa, mkdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkdir",
    "flag": "-m",
    "name": "Make Directory (Yangi Papka Yaratish) (-m)",
    "syntax": "mkdir -m",
    "purpose": "Yaratilayotgan papkaga darhol maxsus ruxsat o'rnatish (masalan: -m 755)",
    "withoutRisk": "Agar -m bayrog'i berilmasa, mkdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkdir",
    "flag": "-v",
    "name": "Make Directory (Yangi Papka Yaratish) (-v)",
    "syntax": "mkdir -v",
    "purpose": "Har bir yaratilgan papka haqida xabar chiqarish (verbose)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, mkdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rmdir",
    "flag": "-p",
    "name": "Remove Empty Directory (Bo'sh Papkani O'chirish) (-p)",
    "syntax": "rmdir -p",
    "purpose": "Bo'sh bo'lib qolgan ota papkalarni ham rekursiv o'chirish",
    "withoutRisk": "Agar -p bayrog'i berilmasa, rmdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rmdir",
    "flag": "-v",
    "name": "Remove Empty Directory (Bo'sh Papkani O'chirish) (-v)",
    "syntax": "rmdir -v",
    "purpose": "Har bir o'chirilgan papka haqida batafsil ma'lumot berish",
    "withoutRisk": "Agar -v bayrog'i berilmasa, rmdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-a",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-a)",
    "syntax": "touch -a",
    "purpose": "Faqat kirish (access) vaqtini o'zgartirish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-m",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-m)",
    "syntax": "touch -m",
    "purpose": "Faqat modifikatsiya (o'zgartirish) vaqtini o'zgartirish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-c",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-c)",
    "syntax": "touch -c",
    "purpose": "Fayl mavjud bo'lmasa uni yangidan yaratmaslik",
    "withoutRisk": "Agar -c bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-d",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-d)",
    "syntax": "touch -d",
    "purpose": "Maxsus sana/vaqt belgilash (masalan: touch -d 'yesterday' file)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rm",
    "flag": "-r, -R",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish) (-r, -R)",
    "syntax": "rm -r, -R",
    "purpose": "Rekursiv ravishda papka va uning barcha ichidagi narsalarini o'chirish",
    "withoutRisk": "Agar -r, -R bayrog'i berilmasa, rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rm",
    "flag": "-f",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish) (-f)",
    "syntax": "rm -f",
    "purpose": "Majburiy (force) o'chirish, tasdiq so'ramaslik va xatoliklarni yashirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rm",
    "flag": "-i",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish) (-i)",
    "syntax": "rm -i",
    "purpose": "Har bir faylni o'chirishdan oldin foydalanuvchidan tasdiq so'rash",
    "withoutRisk": "Agar -i bayrog'i berilmasa, rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-r, -R",
    "name": "Copy Files and Directories (Nusxalash) (-r, -R)",
    "syntax": "cp -r, -R",
    "purpose": "Papkani barcha ichki elementlari bilan birga rekursiv nusxalash",
    "withoutRisk": "Agar -r, -R bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-p",
    "name": "Copy Files and Directories (Nusxalash) (-p)",
    "syntax": "cp -p",
    "purpose": "Faylning asl ruxsatlari, egasi va vaqt tamg'alarini saqlab qolish (preserve)",
    "withoutRisk": "Agar -p bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-a",
    "name": "Copy Files and Directories (Nusxalash) (-a)",
    "syntax": "cp -a",
    "purpose": "Arxiv rejimi (-rpP barchasini o'z ichiga oladi)",
    "withoutRisk": "Agar -a bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-u",
    "name": "Copy Files and Directories (Nusxalash) (-u)",
    "syntax": "cp -u",
    "purpose": "Faqat nishondan yangiroq bo'lgan manba fayllarni yangilash (update)",
    "withoutRisk": "Agar -u bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mv",
    "flag": "-i",
    "name": "Move / Rename Files (Ko'chirish yoki Qayta Nomlash) (-i)",
    "syntax": "mv -i",
    "purpose": "Mavjud faylni ustiga yozishdan oldin so'rash (interactive)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, mv buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mv",
    "flag": "-f",
    "name": "Move / Rename Files (Ko'chirish yoki Qayta Nomlash) (-f)",
    "syntax": "mv -f",
    "purpose": "So'rovsiz ustiga yozish (force)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, mv buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mv",
    "flag": "-n",
    "name": "Move / Rename Files (Ko'chirish yoki Qayta Nomlash) (-n)",
    "syntax": "mv -n",
    "purpose": "Mavjud fayllarni hech qachon almashtirmaslik (no-clobber)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, mv buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ln",
    "flag": "-s",
    "name": "Link Files (Bog'lamlar: Hard Link va Soft Link) (-s)",
    "syntax": "ln -s",
    "purpose": "Simvolik (Soft) havola yaratish (Windowsdagi yorliq/shortcut kabi)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, ln buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ln",
    "flag": "-f",
    "name": "Link Files (Bog'lamlar: Hard Link va Soft Link) (-f)",
    "syntax": "ln -f",
    "purpose": "Mavjud nishon faylni majburiy almashtirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, ln buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ln",
    "flag": "-v",
    "name": "Link Files (Bog'lamlar: Hard Link va Soft Link) (-v)",
    "syntax": "ln -v",
    "purpose": "Har bir yaratilgan bog'lam haqida ma'lumot berish",
    "withoutRisk": "Agar -v bayrog'i berilmasa, ln buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "stat",
    "flag": "-c",
    "name": "File / File System Status (Inode va Metama'lumotlarni Ko'rish) (-c)",
    "syntax": "stat -c",
    "purpose": "Maxsus formatda ma'lumot olish (masalan: %i Inode, %a huquqlar)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, stat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "stat",
    "flag": "-f",
    "name": "File / File System Status (Inode va Metama'lumotlarni Ko'rish) (-f)",
    "syntax": "stat -f",
    "purpose": "Faylning o'zi emas, u joylashgan butun fayl tizimi statistikasini ko'rsatish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, stat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "file",
    "flag": "-b",
    "name": "Determine File Type (Fayl Tipini Anqlash) (-b)",
    "syntax": "file -b",
    "purpose": "Qisqa rejim: fayl nomini chiqarmasdan faqat tipini ko'rsatish (brief)",
    "withoutRisk": "Agar -b bayrog'i berilmasa, file buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "file",
    "flag": "-i",
    "name": "Determine File Type (Fayl Tipini Anqlash) (-i)",
    "syntax": "file -i",
    "purpose": "MIME formatida chiqarish (masalan: text/plain; charset=utf-8)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, file buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-name",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-name)",
    "syntax": "find -name",
    "purpose": "Fayl nomi bo'yicha qidirish (katta-kichik harfga sezgir)",
    "withoutRisk": "Agar -name bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-iname",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-iname)",
    "syntax": "find -iname",
    "purpose": "Harf registrini hisobga olmasdan qidirish",
    "withoutRisk": "Agar -iname bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-type",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-type)",
    "syntax": "find -type",
    "purpose": "Fayl turi bo'yicha: f (oddiy fayl), d (papka), l (symlink)",
    "withoutRisk": "Agar -type bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-size",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-size)",
    "syntax": "find -size",
    "purpose": "Hajmi bo'yicha: +100M (100MB dan katta), -5k (5KB dan kichik)",
    "withoutRisk": "Agar -size bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-mtime",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-mtime)",
    "syntax": "find -mtime",
    "purpose": "O'zgartirilgan kunlari bo'yicha (-7 so'nggi 7 kunda)",
    "withoutRisk": "Agar -mtime bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-inum",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-inum)",
    "syntax": "find -inum",
    "purpose": "Aynan ma'lum bir Inode raqamiga ega faylni topish",
    "withoutRisk": "Agar -inum bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-exec",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-exec)",
    "syntax": "find -exec",
    "purpose": "Topilgan har bir fayl ustida buyruq bajarish (-exec rm {} \\;)",
    "withoutRisk": "Agar -exec bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "locate",
    "flag": "-i",
    "name": "Find Files by Name Database (Tezkor Indekslangan Qidiruv) (-i)",
    "syntax": "locate -i",
    "purpose": "Katta-kichik harflarni farqlamaslik (ignore case)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, locate buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "locate",
    "flag": "-n",
    "name": "Find Files by Name Database (Tezkor Indekslangan Qidiruv) (-n)",
    "syntax": "locate -n",
    "purpose": "Chiqariladigan natijalar sonini cheklash (masalan: -n 5)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, locate buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "locate",
    "flag": "-c",
    "name": "Find Files by Name Database (Tezkor Indekslangan Qidiruv) (-c)",
    "syntax": "locate -c",
    "purpose": "Topilgan fayllar sonini chiqarish",
    "withoutRisk": "Agar -c bayrog'i berilmasa, locate buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "which",
    "flag": "-a",
    "name": "Locate a Command Executable ($PATH Bo'ylab Qidirish) (-a)",
    "syntax": "which -a",
    "purpose": "$PATH ichida topilgan barcha mos keluvchi ijrochi fayllarni chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, which buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "whereis",
    "flag": "-b",
    "name": "Locate Binary, Source, and Manual Pages (Hujjat va Dasturni Topish) (-b)",
    "syntax": "whereis -b",
    "purpose": "Faqat binary (ijro fayli) qismini qidirish",
    "withoutRisk": "Agar -b bayrog'i berilmasa, whereis buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "whereis",
    "flag": "-m",
    "name": "Locate Binary, Source, and Manual Pages (Hujjat va Dasturni Topish) (-m)",
    "syntax": "whereis -m",
    "purpose": "Faqat man qo'llanmalari bo'limini qidirish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, whereis buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tree",
    "flag": "-L N",
    "name": "List Directory Contents as a Tree (Daraxtsimon Ierarxiya) (-L N)",
    "syntax": "tree -L N",
    "purpose": "Daraxt chuqurligini N qavatgacha cheklash (level)",
    "withoutRisk": "Agar -L N bayrog'i berilmasa, tree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tree",
    "flag": "-d",
    "name": "List Directory Contents as a Tree (Daraxtsimon Ierarxiya) (-d)",
    "syntax": "tree -d",
    "purpose": "Faqat papkalarni ko'rsatish, fayllarni yashirish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, tree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tree",
    "flag": "-a",
    "name": "List Directory Contents as a Tree (Daraxtsimon Ierarxiya) (-a)",
    "syntax": "tree -a",
    "purpose": "Yashirin fayllarni ham chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, tree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "basename",
    "flag": "-a",
    "name": "Strip Directory and Suffix from Filenames (Fayl Nomini Ajratish) (-a)",
    "syntax": "basename -a",
    "purpose": "Bir nechta argumentlarni bir vaqtda qabul qilish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, basename buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "realpath",
    "flag": "-e",
    "name": "Print Resolved Absolute Path (To'liq Haqiqiy Yo'l) (-e)",
    "syntax": "realpath -e",
    "purpose": "Fayl mavjud bo'lishi shartligini tekshirish",
    "withoutRisk": "Agar -e bayrog'i berilmasa, realpath buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "realpath",
    "flag": "-q",
    "name": "Print Resolved Absolute Path (To'liq Haqiqiy Yo'l) (-q)",
    "syntax": "realpath -q",
    "purpose": "Xatoliklar chiqarmaslik (quiet)",
    "withoutRisk": "Agar -q bayrog'i berilmasa, realpath buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cat",
    "flag": "-n",
    "name": "Concatenate and Display Files (Fayl Tarkibini Chiqarish) (-n)",
    "syntax": "cat -n",
    "purpose": "Barcha qatorlarni 1 dan boshlab raqamlash",
    "withoutRisk": "Agar -n bayrog'i berilmasa, cat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cat",
    "flag": "-b",
    "name": "Concatenate and Display Files (Fayl Tarkibini Chiqarish) (-b)",
    "syntax": "cat -b",
    "purpose": "Faqat bo'sh bo'lmagan qatorlarni raqamlash",
    "withoutRisk": "Agar -b bayrog'i berilmasa, cat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cat",
    "flag": "-A",
    "name": "Concatenate and Display Files (Fayl Tarkibini Chiqarish) (-A)",
    "syntax": "cat -A",
    "purpose": "Ko'rinmas belgilarni (tab, qator oxiri $) ko'rsatish",
    "withoutRisk": "Agar -A bayrog'i berilmasa, cat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "head",
    "flag": "-n N",
    "name": "Output First Part of Files (Dastlabki Qatorlarni Ko'rish) (-n N)",
    "syntax": "head -n N",
    "purpose": "Aynan N ta dastlabki qatorni chiqarish (masalan: -n 5)",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, head buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "head",
    "flag": "-c N",
    "name": "Output First Part of Files (Dastlabki Qatorlarni Ko'rish) (-c N)",
    "syntax": "head -c N",
    "purpose": "Dastlabki N ta baytni chiqarish",
    "withoutRisk": "Agar -c N bayrog'i berilmasa, head buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tail",
    "flag": "-n N",
    "name": "Output Last Part of Files (Oxirgi Qatorlar va Jonli Loglar) (-n N)",
    "syntax": "tail -n N",
    "purpose": "Oxirgi N ta qatorni chiqarish (masalan: -n 20)",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, tail buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tail",
    "flag": "-f",
    "name": "Output Last Part of Files (Oxirgi Qatorlar va Jonli Loglar) (-f)",
    "syntax": "tail -f",
    "purpose": "Faylga yangi qatorlar qo'shilganda ularni jonli ekranga chiqarib turish (follow)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, tail buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "less",
    "flag": "-N",
    "name": "Opposite of More / Interactive Pager (Qulay Matn Ko'rgich) (-N)",
    "syntax": "less -N",
    "purpose": "Qator raqamlarini chiqarish",
    "withoutRisk": "Agar -N bayrog'i berilmasa, less buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "less",
    "flag": "-S",
    "name": "Opposite of More / Interactive Pager (Qulay Matn Ko'rgich) (-S)",
    "syntax": "less -S",
    "purpose": "Uzun qatorlarni pastga tushirmasdan kesish (chop long lines)",
    "withoutRisk": "Agar -S bayrog'i berilmasa, less buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "more",
    "flag": "-d",
    "name": "File Page by Page Filter (Oddiy Sahifalash) (-d)",
    "syntax": "more -d",
    "purpose": "Foydalanuvchiga yordamchi tugmalar ko'rsatmasini berish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, more buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-i",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-i)",
    "syntax": "grep -i",
    "purpose": "Harflar registrini (katta/kichik) farqlamaslik (ignore case)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-v",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-v)",
    "syntax": "grep -v",
    "purpose": "Inversiya: mos KELMAGAN qatorlarni chiqarish (invert match)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-r, -R",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-r, -R)",
    "syntax": "grep -r, -R",
    "purpose": "Barcha ichki papkalardagi fayllarni rekursiv qidirish",
    "withoutRisk": "Agar -r, -R bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-n",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-n)",
    "syntax": "grep -n",
    "purpose": "Mos kelgan qator raqamini ham ko'rsatish",
    "withoutRisk": "Agar -n bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-c",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-c)",
    "syntax": "grep -c",
    "purpose": "Faqat mos kelgan qatorlar sonini chiqarish",
    "withoutRisk": "Agar -c bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-E",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-E)",
    "syntax": "grep -E",
    "purpose": "Kengaytirilgan muntazam ifodalar (ERE) rejimi (egrep)",
    "withoutRisk": "Agar -E bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-o",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-o)",
    "syntax": "grep -o",
    "purpose": "Butun qatorni emas, faqat mos kelgan bo'lagini chiqarish",
    "withoutRisk": "Agar -o bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sed",
    "flag": "-i",
    "name": "Stream Editor (Oqimli Matn Tahrirchisi) (-i)",
    "syntax": "sed -i",
    "purpose": "Faylni to'g'ridan-to'g'ri joyida (in-place) o'zgartirib saqlash",
    "withoutRisk": "Agar -i bayrog'i berilmasa, sed buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sed",
    "flag": "-e",
    "name": "Stream Editor (Oqimli Matn Tahrirchisi) (-e)",
    "syntax": "sed -e",
    "purpose": "Bir nechta sed amallarini ketma-ket bajarish",
    "withoutRisk": "Agar -e bayrog'i berilmasa, sed buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sed",
    "flag": "-n",
    "name": "Stream Editor (Oqimli Matn Tahrirchisi) (-n)",
    "syntax": "sed -n",
    "purpose": "Standart chiqarishni bostirish (faqat 'p' buyrug'i bilan ko'rsatish)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, sed buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "awk",
    "flag": "-F 'AJRATUVCHI'",
    "name": "Pattern Scanning and Processing Language (Matn va Jadval Dasturlash Tili) (-F 'AJRATUVCHI')",
    "syntax": "awk -F 'AJRATUVCHI'",
    "purpose": "Ustunlar ajratuvchisini belgilash (masalan: -F ':' /etc/passwd uchun)",
    "withoutRisk": "Agar -F 'AJRATUVCHI' bayrog'i berilmasa, awk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "awk",
    "flag": "-v O'ZGARUVCHI=QIYMAT",
    "name": "Pattern Scanning and Processing Language (Matn va Jadval Dasturlash Tili) (-v O'ZGARUVCHI=QIYMAT)",
    "syntax": "awk -v O'ZGARUVCHI=QIYMAT",
    "purpose": "Awk ichiga tashqi o'zgaruvchi uzatish",
    "withoutRisk": "Agar -v O'ZGARUVCHI=QIYMAT bayrog'i berilmasa, awk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cut",
    "flag": "-d 'BELGI'",
    "name": "Remove Sections from Each Line (Ustunlarni Qirqib Olish) (-d 'BELGI')",
    "syntax": "cut -d 'BELGI'",
    "purpose": "Maydonlar ajratuvchisini belgilash (delimiter, masalan: -d ':')",
    "withoutRisk": "Agar -d 'BELGI' bayrog'i berilmasa, cut buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cut",
    "flag": "-f RO'YXAT",
    "name": "Remove Sections from Each Line (Ustunlarni Qirqib Olish) (-f RO'YXAT)",
    "syntax": "cut -f RO'YXAT",
    "purpose": "Aynan qaysi ustunlarni olish (masalan: -f 1,3 yoki -f 1-5)",
    "withoutRisk": "Agar -f RO'YXAT bayrog'i berilmasa, cut buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cut",
    "flag": "-c RO'YXAT",
    "name": "Remove Sections from Each Line (Ustunlarni Qirqib Olish) (-c RO'YXAT)",
    "syntax": "cut -c RO'YXAT",
    "purpose": "Belgilar pozitsiyasi bo'yicha qirqish (characters)",
    "withoutRisk": "Agar -c RO'YXAT bayrog'i berilmasa, cut buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-n",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-n)",
    "syntax": "sort -n",
    "purpose": "Raqamli qiymatlar bo'yicha tartiblash (1, 2, 10 tartibida, 1, 10, 2 emas)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-r",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-r)",
    "syntax": "sort -r",
    "purpose": "Teskari (kamayish) tartibda saralash (reverse)",
    "withoutRisk": "Agar -r bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-k N",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-k N)",
    "syntax": "sort -k N",
    "purpose": "Aynan N-ustun bo'yicha saralash",
    "withoutRisk": "Agar -k N bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-u",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-u)",
    "syntax": "sort -u",
    "purpose": "Faqat takrorlanmas noyob qatorlarni qoldirish (unique)",
    "withoutRisk": "Agar -u bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uniq",
    "flag": "-c",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash) (-c)",
    "syntax": "uniq -c",
    "purpose": "Har bir qator necha marta takrorlanganini hisoblab yoniga yozish (count)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, uniq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uniq",
    "flag": "-d",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash) (-d)",
    "syntax": "uniq -d",
    "purpose": "Faqat takrorlangan (dublikat) qatorlarni ko'rsatish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, uniq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uniq",
    "flag": "-u",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash) (-u)",
    "syntax": "uniq -u",
    "purpose": "Faqat mutlaqo takrorlanmagan yakka qatorlarni ko'rsatish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, uniq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tr",
    "flag": "-s",
    "name": "Translate or Delete Characters (Belgilarni Almashtirish/O'chirish) (-s)",
    "syntax": "tr -s",
    "purpose": "Ketma-ket takrorlangan belgilarni bittaga qisqartirish (squeeze)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, tr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-l",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-l)",
    "syntax": "wc -l",
    "purpose": "Faqat qatorlar sonini chiqarish (lines) — skriptlarda eng ko'p ishlatiladi",
    "withoutRisk": "Agar -l bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-w",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-w)",
    "syntax": "wc -w",
    "purpose": "Faqat so'zlar sonini chiqarish (words)",
    "withoutRisk": "Agar -w bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-c",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-c)",
    "syntax": "wc -c",
    "purpose": "Faqat baytlar sonini chiqarish (bytes)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-m",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-m)",
    "syntax": "wc -m",
    "purpose": "Belgilar sonini chiqarish (characters)",
    "withoutRisk": "Agar -m bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "xargs",
    "flag": "-I {}",
    "name": "Build and Execute Command Lines from stdin (Argumentlarga Aylantiruvchi) (-I {})",
    "syntax": "xargs -I {}",
    "purpose": "Har bir element uchun maxsus o'rnini bosuvchi belgilash (placeholder)",
    "withoutRisk": "Agar -I {} bayrog'i berilmasa, xargs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "xargs",
    "flag": "-n N",
    "name": "Build and Execute Command Lines from stdin (Argumentlarga Aylantiruvchi) (-n N)",
    "syntax": "xargs -n N",
    "purpose": "Bitta chaqiriqda ko'pi bilan N ta argument uzatish",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, xargs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "xargs",
    "flag": "-P N",
    "name": "Build and Execute Command Lines from stdin (Argumentlarga Aylantiruvchi) (-P N)",
    "syntax": "xargs -P N",
    "purpose": "N ta parallel jarayonda ishga tushirish (tezlashtirish)",
    "withoutRisk": "Agar -P N bayrog'i berilmasa, xargs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "diff",
    "flag": "-u",
    "name": "Compare Files Line by Line (Farqlarni Aniqlash) (-u)",
    "syntax": "diff -u",
    "purpose": "Unifikatsiyalangan (Git uslubidagi) qulay ko'rinishda chiqarish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, diff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "diff",
    "flag": "-y",
    "name": "Compare Files Line by Line (Farqlarni Aniqlash) (-y)",
    "syntax": "diff -y",
    "purpose": "Ekranni ikkiga bo'lib yonma-yon ko'rsatish (side-by-side)",
    "withoutRisk": "Agar -y bayrog'i berilmasa, diff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "diff",
    "flag": "-w",
    "name": "Compare Files Line by Line (Farqlarni Aniqlash) (-w)",
    "syntax": "diff -w",
    "purpose": "Barcha probel va bo'shliqlarni e'tiborsiz qoldirish",
    "withoutRisk": "Agar -w bayrog'i berilmasa, diff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cmp",
    "flag": "-l",
    "name": "Compare Two Files Byte by Byte (Baytma-bayt Solishtirish) (-l)",
    "syntax": "cmp -l",
    "purpose": "Farq qiluvchi barcha baytlar raqamini chiqarish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, cmp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cmp",
    "flag": "-s",
    "name": "Compare Two Files Byte by Byte (Baytma-bayt Solishtirish) (-s)",
    "syntax": "cmp -s",
    "purpose": "Hech narsa chiqarmaslik, faqat chiqish kodi ($?) bilan javob berish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, cmp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strings",
    "flag": "-n N",
    "name": "Find Printable Strings in Binary Files (Binar Fayldan Matn Ajratish) (-n N)",
    "syntax": "strings -n N",
    "purpose": "Kamida N ta belgidan iborat so'zlarni qidirish (sukut bo'yicha 4)",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, strings buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "paste",
    "flag": "-d 'BELGI'",
    "name": "Merge Lines of Files (Fayllarni Yonma-Yon Birlashtirish) (-d 'BELGI')",
    "syntax": "paste -d 'BELGI'",
    "purpose": "Qatorlar orasiga qo'yiladigan ajratuvchini belgilash (masalan: -d ',')",
    "withoutRisk": "Agar -d 'BELGI' bayrog'i berilmasa, paste buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "paste",
    "flag": "-s",
    "name": "Merge Lines of Files (Fayllarni Yonma-Yon Birlashtirish) (-s)",
    "syntax": "paste -s",
    "purpose": "Ketma-ket bitta faylni bitta qatorga yoyish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, paste buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "split",
    "flag": "-b N",
    "name": "Split a File into Pieces (Katta Faylni Bo'laklarga Bo'lish) (-b N)",
    "syntax": "split -b N",
    "purpose": "Har bir bo'lak hajmini belgilash (masalan: -b 100M)",
    "withoutRisk": "Agar -b N bayrog'i berilmasa, split buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "split",
    "flag": "-l N",
    "name": "Split a File into Pieces (Katta Faylni Bo'laklarga Bo'lish) (-l N)",
    "syntax": "split -l N",
    "purpose": "Har bir bo'lak qatorlar sonini belgilash (masalan: -l 1000)",
    "withoutRisk": "Agar -l N bayrog'i berilmasa, split buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "split",
    "flag": "-d",
    "name": "Split a File into Pieces (Katta Faylni Bo'laklarga Bo'lish) (-d)",
    "syntax": "split -d",
    "purpose": "Harflar o'rniga raqamli suffikslardan foydalanish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, split buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "755",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (755)",
    "syntax": "chmod 755",
    "purpose": "Egasi to'liq (rwx), guruh va boshqalar faqat o'qish va kirish (r-x)",
    "withoutRisk": "Agar 755 bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "644",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (644)",
    "syntax": "chmod 644",
    "purpose": "Egasi o'qish-yozish (rw-), qolganlar faqat o'qish (r--)",
    "withoutRisk": "Agar 644 bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "777",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (777)",
    "syntax": "chmod 777",
    "purpose": "Hamma uchun barcha ruxsatlar (xavfli!)",
    "withoutRisk": "Agar 777 bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "+x",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (+x)",
    "syntax": "chmod +x",
    "purpose": "Skriptga ijro etish huquqini qo'shish",
    "withoutRisk": "Agar +x bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "+t",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (+t)",
    "syntax": "chmod +t",
    "purpose": "Sticky Bit o'rnatish (/tmp kabi, faqat fayl egasi o'chira oladi)",
    "withoutRisk": "Agar +t bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chown",
    "flag": "-R",
    "name": "Change File Owner and Group (Fayl Egasini O'zgartirish) (-R)",
    "syntax": "chown -R",
    "purpose": "Rekursiv ravishda papka ichidagi barcha fayllarga o'rnatish",
    "withoutRisk": "Agar -R bayrog'i berilmasa, chown buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chown",
    "flag": "-v",
    "name": "Change File Owner and Group (Fayl Egasini O'zgartirish) (-v)",
    "syntax": "chown -v",
    "purpose": "O'zgargan har bir fayl haqida ma'lumot berish",
    "withoutRisk": "Agar -v bayrog'i berilmasa, chown buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chgrp",
    "flag": "-R",
    "name": "Change Group Ownership (Fayl Guruhini O'zgartirish) (-R)",
    "syntax": "chgrp -R",
    "purpose": "Rekursiv guruh o'zgartirish",
    "withoutRisk": "Agar -R bayrog'i berilmasa, chgrp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "umask",
    "flag": "-S",
    "name": "User File Creation Mask (Yangi Fayllar Maskasi) (-S)",
    "syntax": "umask -S",
    "purpose": "Maskani ramziy ko'rinishda ko'rish (masalan: u=rwx,g=rx,o=rx)",
    "withoutRisk": "Agar -S bayrog'i berilmasa, umask buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "useradd",
    "flag": "-s SHELL",
    "name": "Create a New User (Yangi Foydalanuvchi Yaratish) (-s SHELL)",
    "syntax": "useradd -s SHELL",
    "purpose": "Sukut bo'yicha shellni belgilash (masalan: -s /bin/bash)",
    "withoutRisk": "Agar -s SHELL bayrog'i berilmasa, useradd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "useradd",
    "flag": "-g GURUH",
    "name": "Create a New User (Yangi Foydalanuvchi Yaratish) (-g GURUH)",
    "syntax": "useradd -g GURUH",
    "purpose": "Asosiy birlamchi guruhni belgilash",
    "withoutRisk": "Agar -g GURUH bayrog'i berilmasa, useradd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "useradd",
    "flag": "-G GURUHLAR",
    "name": "Create a New User (Yangi Foydalanuvchi Yaratish) (-G GURUHLAR)",
    "syntax": "useradd -G GURUHLAR",
    "purpose": "Qo'shimcha ikkilamchi guruhlar ro'yxati (masalan: -G sudo,docker)",
    "withoutRisk": "Agar -G GURUHLAR bayrog'i berilmasa, useradd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "usermod",
    "flag": "-aG GURUH",
    "name": "Modify a User Account (Foydalanuvchini Tahrirlash) (-aG GURUH)",
    "syntax": "usermod -aG GURUH",
    "purpose": "Eski guruhlarini o'chirmasdan yangi guruhga qo'shish (append group)",
    "withoutRisk": "Agar -aG GURUH bayrog'i berilmasa, usermod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "usermod",
    "flag": "-s SHELL",
    "name": "Modify a User Account (Foydalanuvchini Tahrirlash) (-s SHELL)",
    "syntax": "usermod -s SHELL",
    "purpose": "Yangi standart shell tayinlash",
    "withoutRisk": "Agar -s SHELL bayrog'i berilmasa, usermod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "userdel",
    "flag": "-r",
    "name": "Delete a User Account (Foydalanuvchini O'chirish) (-r)",
    "syntax": "userdel -r",
    "purpose": "Foydalanuvchining uy papkasi (/home/user) va pochta qutisini ham o'chirish",
    "withoutRisk": "Agar -r bayrog'i berilmasa, userdel buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "groupadd",
    "flag": "-g GID",
    "name": "Create a User Group (Yangi Guruh Yaratish) (-g GID)",
    "syntax": "groupadd -g GID",
    "purpose": "Guruhga maxsus GID raqamini belgilash",
    "withoutRisk": "Agar -g GID bayrog'i berilmasa, groupadd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "passwd",
    "flag": "-l",
    "name": "Change User Password (Parolni O'zgartirish) (-l)",
    "syntax": "passwd -l",
    "purpose": "Parolni bloklash (lock)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, passwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "passwd",
    "flag": "-u",
    "name": "Change User Password (Parolni O'zgartirish) (-u)",
    "syntax": "passwd -u",
    "purpose": "Parolni blokdan chiqarish (unlock)",
    "withoutRisk": "Agar -u bayrog'i berilmasa, passwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "passwd",
    "flag": "-d",
    "name": "Change User Password (Parolni O'zgartirish) (-d)",
    "syntax": "passwd -d",
    "purpose": "Parolni butunlay olib tashlash (parolsiz kirish)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, passwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "su",
    "flag": "-",
    "name": "Substitute User Identity (Boshqa Foydalanuvchiga O'tish) (-)",
    "syntax": "su -",
    "purpose": "Foydalanuvchining to'liq muhitini (environment, $PATH, $HOME) yuklab o'tish (login shell)",
    "withoutRisk": "Agar - bayrog'i berilmasa, su buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sudo",
    "flag": "-i",
    "name": "Execute a Command as Another User / Root (Superfoydalanuvchi Huquqi) (-i)",
    "syntax": "sudo -i",
    "purpose": "Root foydalanuvchisining interaktiv login shellini ochish",
    "withoutRisk": "Agar -i bayrog'i berilmasa, sudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sudo",
    "flag": "-u USER",
    "name": "Execute a Command as Another User / Root (Superfoydalanuvchi Huquqi) (-u USER)",
    "syntax": "sudo -u USER",
    "purpose": "Root emas, aynan ko'rsatilgan foydalanuvchi nomidan buyruq bajarish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, sudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sudo",
    "flag": "-l",
    "name": "Execute a Command as Another User / Root (Superfoydalanuvchi Huquqi) (-l)",
    "syntax": "sudo -l",
    "purpose": "Joriy foydalanuvchi qaysi buyruqlarni sudo orqali bajara olishini ko'rish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, sudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "id",
    "flag": "-u",
    "name": "Print Real and Effective User and Group IDs (ID larni Ko'rish) (-u)",
    "syntax": "id -u",
    "purpose": "Faqat UID raqamini chiqarish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, id buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "id",
    "flag": "-g",
    "name": "Print Real and Effective User and Group IDs (ID larni Ko'rish) (-g)",
    "syntax": "id -g",
    "purpose": "Faqat asosiy GID raqamini chiqarish",
    "withoutRisk": "Agar -g bayrog'i berilmasa, id buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "id",
    "flag": "-un",
    "name": "Print Real and Effective User and Group IDs (ID larni Ko'rish) (-un)",
    "syntax": "id -un",
    "purpose": "Raqam o'rniga foydalanuvchi nomini chiqarish",
    "withoutRisk": "Agar -un bayrog'i berilmasa, id buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "visudo",
    "flag": "-c",
    "name": "Edit the Sudoers File Safely (Sudoers Faylini Xavfsiz Tahrirlash) (-c)",
    "syntax": "visudo -c",
    "purpose": "Tahrirlamasdan faqat sintaksisni tekshirish (check only)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, visudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "setfacl",
    "flag": "-m u:USER:rwx",
    "name": "Set File Access Control Lists (Kengaytirilgan Ruxsatlar O'rnatish) (-m u:USER:rwx)",
    "syntax": "setfacl -m u:USER:rwx",
    "purpose": "Ko'rsatilgan foydalanuvchiga alohida ruxsat berish (modify)",
    "withoutRisk": "Agar -m u:USER:rwx bayrog'i berilmasa, setfacl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "setfacl",
    "flag": "-x u:USER",
    "name": "Set File Access Control Lists (Kengaytirilgan Ruxsatlar O'rnatish) (-x u:USER)",
    "syntax": "setfacl -x u:USER",
    "purpose": "Foydalanuvchining maxsus ACL huquqini olib tashlash",
    "withoutRisk": "Agar -x u:USER bayrog'i berilmasa, setfacl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "setfacl",
    "flag": "-b",
    "name": "Set File Access Control Lists (Kengaytirilgan Ruxsatlar O'rnatish) (-b)",
    "syntax": "setfacl -b",
    "purpose": "Barcha qo'shimcha ACL huquqlarini tozalash",
    "withoutRisk": "Agar -b bayrog'i berilmasa, setfacl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ps",
    "flag": "aux",
    "name": "Report Process Status (Jarayonlar Holati) (aux)",
    "syntax": "ps aux",
    "purpose": "BSD formati: barcha foydalanuvchilarning barcha jarayonlarini to'liq chiqarish",
    "withoutRisk": "Agar aux bayrog'i berilmasa, ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ps",
    "flag": "-ef",
    "name": "Report Process Status (Jarayonlar Holati) (-ef)",
    "syntax": "ps -ef",
    "purpose": "Standart UNIX formati: to'liq ro'yxat va ota jarayonlar (PPID)",
    "withoutRisk": "Agar -ef bayrog'i berilmasa, ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ps",
    "flag": "-u USER",
    "name": "Report Process Status (Jarayonlar Holati) (-u USER)",
    "syntax": "ps -u USER",
    "purpose": "Faqat ko'rsatilgan foydalanuvchi jarayonlarini ko'rish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "top",
    "flag": "-d N",
    "name": "Display Linux Processes (Jonli Tizim Monitori) (-d N)",
    "syntax": "top -d N",
    "purpose": "Yangilanish oralig'ini N soniya qilib belgilash",
    "withoutRisk": "Agar -d N bayrog'i berilmasa, top buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "top",
    "flag": "-u USER",
    "name": "Display Linux Processes (Jonli Tizim Monitori) (-u USER)",
    "syntax": "top -u USER",
    "purpose": "Faqat ma'lum bir foydalanuvchi jarayonlarini ko'rsatish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, top buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-15 (SIGTERM)",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-15 (SIGTERM))",
    "syntax": "kill -15 (SIGTERM)",
    "purpose": "Yumshoq to'xtatish (jarayonga o'z ishini saqlab toza yopilish imkoni beriladi)",
    "withoutRisk": "Agar -15 (SIGTERM) bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-9 (SIGKILL)",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-9 (SIGKILL))",
    "syntax": "kill -9 (SIGKILL)",
    "purpose": "Majburiy o'ldirish (yadro darajasida darhol to'xtatiladi, inkor qilib bo'lmaydi)",
    "withoutRisk": "Agar -9 (SIGKILL) bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-1 (SIGHUP)",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-1 (SIGHUP))",
    "syntax": "kill -1 (SIGHUP)",
    "purpose": "Konfiguratsiyani qayta yuklash (reload)",
    "withoutRisk": "Agar -1 (SIGHUP) bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-l",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-l)",
    "syntax": "kill -l",
    "purpose": "Barcha mavjud signallar ro'yxatini chiqarish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "killall",
    "flag": "-9",
    "name": "Kill Processes by Name (Nomi Bo'yicha Barchasini O'ldirish) (-9)",
    "syntax": "killall -9",
    "purpose": "Majburiy SIGKILL signali bilan o'ldirish",
    "withoutRisk": "Agar -9 bayrog'i berilmasa, killall buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "killall",
    "flag": "-u USER",
    "name": "Kill Processes by Name (Nomi Bo'yicha Barchasini O'ldirish) (-u USER)",
    "syntax": "killall -u USER",
    "purpose": "Faqat ko'rsatilgan foydalanuvchiga tegishli jarayonlarni o'ldirish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, killall buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pkill",
    "flag": "-f",
    "name": "Signal Processes Based on Name (Naqsh Bo'yicha Signal Yuborish) (-f)",
    "syntax": "pkill -f",
    "purpose": "Faqat jarayon nomini emas, butun buyruq qatorini (command line) tekshirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, pkill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pkill",
    "flag": "-u USER",
    "name": "Signal Processes Based on Name (Naqsh Bo'yicha Signal Yuborish) (-u USER)",
    "syntax": "pkill -u USER",
    "purpose": "Aynan ma'lum bir foydalanuvchi nomini cheklash",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, pkill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pgrep",
    "flag": "-l",
    "name": "Look up Processes Based on Name (Jarayon PID larini Topish) (-l)",
    "syntax": "pgrep -l",
    "purpose": "PID yonida jarayon nomini ham ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, pgrep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pgrep",
    "flag": "-a",
    "name": "Look up Processes Based on Name (Jarayon PID larini Topish) (-a)",
    "syntax": "pgrep -a",
    "purpose": "To'liq buyruq qatorini ham chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, pgrep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nice",
    "flag": "-n 19",
    "name": "Run with Modified Scheduling Priority (Prioritet Bilan Boshlash) (-n 19)",
    "syntax": "nice -n 19",
    "purpose": "Eng past ustuvorlik (orqa fonda kompyuterni qotirmasdan ishlash)",
    "withoutRisk": "Agar -n 19 bayrog'i berilmasa, nice buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nice",
    "flag": "-n -10",
    "name": "Run with Modified Scheduling Priority (Prioritet Bilan Boshlash) (-n -10)",
    "syntax": "nice -n -10",
    "purpose": "Yuqori ustuvorlik (faqat root ruxsat bera oladi)",
    "withoutRisk": "Agar -n -10 bayrog'i berilmasa, nice buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "renice",
    "flag": "-u USER",
    "name": "Alter Priority of Running Processes (Ishlab Turgan Jarayon Prioritetini O'zgartirish) (-u USER)",
    "syntax": "renice -u USER",
    "purpose": "Foydalanuvchining barcha jarayonlari prioritetini o'zgartirish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, renice buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "jobs",
    "flag": "-l",
    "name": "List Active Jobs (Joriy Terminal Vazifalarini Ko'rish) (-l)",
    "syntax": "jobs -l",
    "purpose": "Topshiriq raqami yonida uning haqiqiy PID raqamini ham ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, jobs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pstree",
    "flag": "-p",
    "name": "Display a Tree of Processes (Ota-Bola Jarayonlar Shajarasi) (-p)",
    "syntax": "pstree -p",
    "purpose": "Har bir jarayon nomi yonida uning PID raqamini ko'rsatish",
    "withoutRisk": "Agar -p bayrog'i berilmasa, pstree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pstree",
    "flag": "-u",
    "name": "Display a Tree of Processes (Ota-Bola Jarayonlar Shajarasi) (-u)",
    "syntax": "pstree -u",
    "purpose": "Foydalanuvchi o'zgargan nuqtalarni ko'rsatish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, pstree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fork",
    "flag": "pid > 0",
    "name": "Fork System Call (Jarayon Klonlash / Nusxa Yaratish) (pid > 0)",
    "syntax": "fork pid > 0",
    "purpose": "Ota jarayon kodi bajarilmoqda (pid - bola jarayon raqami)",
    "withoutRisk": "Agar pid > 0 bayrog'i berilmasa, fork buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fork",
    "flag": "pid == 0",
    "name": "Fork System Call (Jarayon Klonlash / Nusxa Yaratish) (pid == 0)",
    "syntax": "fork pid == 0",
    "purpose": "Yangi tug'ilgan bola jarayon kodi bajarilmoqda",
    "withoutRisk": "Agar pid == 0 bayrog'i berilmasa, fork buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fork",
    "flag": "pid < 0",
    "name": "Fork System Call (Jarayon Klonlash / Nusxa Yaratish) (pid < 0)",
    "syntax": "fork pid < 0",
    "purpose": "Xatolik! Yangi jarayon yaratish uchun xotira yetmadi",
    "withoutRisk": "Agar pid < 0 bayrog'i berilmasa, fork buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "waitpid",
    "flag": "WNOHANG",
    "name": "Wait for Process State Change (Bola Jarayonni Kutish) (WNOHANG)",
    "syntax": "waitpid WNOHANG",
    "purpose": "Bola hali tugamagan bo'lsa otani qotirmasdan darhol qaytish",
    "withoutRisk": "Agar WNOHANG bayrog'i berilmasa, waitpid buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strace",
    "flag": "-e trace=open,read",
    "name": "Trace System Calls and Signals (Tizim Chaqiriqlarini Kuzatish) (-e trace=open,read)",
    "syntax": "strace -e trace=open,read",
    "purpose": "Faqat ma'lum turdagi tizim chaqiriqlarini filtrlab ko'rsatish",
    "withoutRisk": "Agar -e trace=open,read bayrog'i berilmasa, strace buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strace",
    "flag": "-p PID",
    "name": "Trace System Calls and Signals (Tizim Chaqiriqlarini Kuzatish) (-p PID)",
    "syntax": "strace -p PID",
    "purpose": "Ishlab turgan begona jarayonga ulanib uning qo'ng'iroqlarini kuzatish",
    "withoutRisk": "Agar -p PID bayrog'i berilmasa, strace buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strace",
    "flag": "-c",
    "name": "Trace System Calls and Signals (Tizim Chaqiriqlarini Kuzatish) (-c)",
    "syntax": "strace -c",
    "purpose": "Chaqiriqlar soni va vaqti bo'yicha yakuniy statistik jadval chiqarish",
    "withoutRisk": "Agar -c bayrog'i berilmasa, strace buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dmesg",
    "flag": "-T",
    "name": "Print Kernel Ring Buffer (Yadro Xabarlarini O'qish) (-T)",
    "syntax": "dmesg -T",
    "purpose": "Vaqt tamg'alarini inson tushunadigan sana ko'rinishida chiqarish",
    "withoutRisk": "Agar -T bayrog'i berilmasa, dmesg buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dmesg",
    "flag": "-l err,warn",
    "name": "Print Kernel Ring Buffer (Yadro Xabarlarini O'qish) (-l err,warn)",
    "syntax": "dmesg -l err,warn",
    "purpose": "Faqat jiddiy xato va ogohlantirishlarni filtrlash",
    "withoutRisk": "Agar -l err,warn bayrog'i berilmasa, dmesg buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dmesg",
    "flag": "-w",
    "name": "Print Kernel Ring Buffer (Yadro Xabarlarini O'qish) (-w)",
    "syntax": "dmesg -w",
    "purpose": "Yangi kelgan yadro xabarlarini jonli kuzatib turish",
    "withoutRisk": "Agar -w bayrog'i berilmasa, dmesg buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uname",
    "flag": "-a",
    "name": "Print System Information (Yadro va OT Ma'lumotlari) (-a)",
    "syntax": "uname -a",
    "purpose": "Barcha ma'lumotlarni to'liq chiqarish (all)",
    "withoutRisk": "Agar -a bayrog'i berilmasa, uname buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uname",
    "flag": "-r",
    "name": "Print System Information (Yadro va OT Ma'lumotlari) (-r)",
    "syntax": "uname -r",
    "purpose": "Faqat Linux yadrosi versiyasini chiqarish (kernel release)",
    "withoutRisk": "Agar -r bayrog'i berilmasa, uname buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uname",
    "flag": "-m",
    "name": "Print System Information (Yadro va OT Ma'lumotlari) (-m)",
    "syntax": "uname -m",
    "purpose": "Mashina arxitekturasini chiqarish (masalan: x86_64)",
    "withoutRisk": "Agar -m bayrog'i berilmasa, uname buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "free",
    "flag": "-h",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira Holati) (-h)",
    "syntax": "free -h",
    "purpose": "Inson tushunadigan formatda (GB, MB) chiqarish (human-readable)",
    "withoutRisk": "Agar -h bayrog'i berilmasa, free buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "free",
    "flag": "-m",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira Holati) (-m)",
    "syntax": "free -m",
    "purpose": "Megabaytlarda chiqarish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, free buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "free",
    "flag": "-s N",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira Holati) (-s N)",
    "syntax": "free -s N",
    "purpose": "Har N soniyada yangilab turish",
    "withoutRisk": "Agar -s N bayrog'i berilmasa, free buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "vmstat",
    "flag": "-s",
    "name": "Report Virtual Memory Statistics (Virtual Xotira Tahlili) (-s)",
    "syntax": "vmstat -s",
    "purpose": "Barcha xotira hodisalari bo'yicha jami hisoblagichlarni chiqarish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, vmstat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "vmstat",
    "flag": "-d",
    "name": "Report Virtual Memory Statistics (Virtual Xotira Tahlili) (-d)",
    "syntax": "vmstat -d",
    "purpose": "Disk faolligi statistikasini alohida chiqarish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, vmstat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pmap",
    "flag": "-x",
    "name": "Report Memory Map of a Process (Jarayon Xotira Xaritasi) (-x)",
    "syntax": "pmap -x",
    "purpose": "Kengaytirilgan format: RSS (fizik xotira) va Dirty xotirani ham ko'rsatish",
    "withoutRisk": "Agar -x bayrog'i berilmasa, pmap buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "swapon",
    "flag": "-a",
    "name": "Enable Devices and Files for Paging (Swap Qismini Faollashtirish) (-a)",
    "syntax": "swapon -a",
    "purpose": "/etc/fstab dagi barcha belgilangan Swap bo'limlarini yoqish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, swapon buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "swapon",
    "flag": "--show",
    "name": "Enable Devices and Files for Paging (Swap Qismini Faollashtirish) (--show)",
    "syntax": "swapon --show",
    "purpose": "Faol Swap bo'limlari ro'yxati va ularning bandligini jadval ko'rinishida ko'rsatish",
    "withoutRisk": "Agar --show bayrog'i berilmasa, swapon buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "swapoff",
    "flag": "-a",
    "name": "Disable Devices and Files for Paging (Swapni O'chirish) (-a)",
    "syntax": "swapoff -a",
    "purpose": "Barcha faol Swap bo'limlarini o'chirish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, swapoff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "df",
    "flag": "-h",
    "name": "Report File System Disk Space Usage (Disk Hajmi va Inodelar) (-h)",
    "syntax": "df -h",
    "purpose": "Inson tushunadigan formatda (GB, MB) chiqarish",
    "withoutRisk": "Agar -h bayrog'i berilmasa, df buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "df",
    "flag": "-i",
    "name": "Report File System Disk Space Usage (Disk Hajmi va Inodelar) (-i)",
    "syntax": "df -i",
    "purpose": "Bo'sh baytlarni emas, balki erkin Inodelar sonini tekshirish (juda muhim!)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, df buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "df",
    "flag": "-T",
    "name": "Report File System Disk Space Usage (Disk Hajmi va Inodelar) (-T)",
    "syntax": "df -T",
    "purpose": "Fayl tizimi turini ham (ext4, xfs, btrfs) ko'rsatish",
    "withoutRisk": "Agar -T bayrog'i berilmasa, df buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "du",
    "flag": "-s",
    "name": "Estimate File Space Usage (Papka va Fayllar Hajmini O'lchash) (-s)",
    "syntax": "du -s",
    "purpose": "Faqat umumiy yig'indi hajmni chiqarish (summary)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, du buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "du",
    "flag": "-h",
    "name": "Estimate File Space Usage (Papka va Fayllar Hajmini O'lchash) (-h)",
    "syntax": "du -h",
    "purpose": "O'qish oson bo'lgan birliklarda (K, M, G) ko'rsatish",
    "withoutRisk": "Agar -h bayrog'i berilmasa, du buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "du",
    "flag": "-d N",
    "name": "Estimate File Space Usage (Papka va Fayllar Hajmini O'lchash) (-d N)",
    "syntax": "du -d N",
    "purpose": "Papkalar chuqurligini N qavatgacha cheklash (max-depth)",
    "withoutRisk": "Agar -d N bayrog'i berilmasa, du buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mount",
    "flag": "-t TUR",
    "name": "Mount a File System (Fayl Tizimini Ulash) (-t TUR)",
    "syntax": "mount -t TUR",
    "purpose": "Fayl tizimi turini ko'rsatish (ext4, ntfs, iso9660, nfs)",
    "withoutRisk": "Agar -t TUR bayrog'i berilmasa, mount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mount",
    "flag": "-o VARIANTLAR",
    "name": "Mount a File System (Fayl Tizimini Ulash) (-o VARIANTLAR)",
    "syntax": "mount -o VARIANTLAR",
    "purpose": "Qo'shimcha parametrlar (ro=faqat o'qish, rw=o'qish-yozish, noexec)",
    "withoutRisk": "Agar -o VARIANTLAR bayrog'i berilmasa, mount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "umount",
    "flag": "-l",
    "name": "Unmount File Systems (Fayl Tizimini Xavfsiz Uzish) (-l)",
    "syntax": "umount -l",
    "purpose": "Band bo'lsa ham fon rejimida darhol xavfsiz uzish (lazy unmount)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, umount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "umount",
    "flag": "-f",
    "name": "Unmount File Systems (Fayl Tizimini Xavfsiz Uzish) (-f)",
    "syntax": "umount -f",
    "purpose": "Tarmoq diski javob bermay qotganda majburiy uzish (force)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, umount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsblk",
    "flag": "-f",
    "name": "List Block Devices (Blok Qurilmalari va Disk Bo'limlari) (-f)",
    "syntax": "lsblk -f",
    "purpose": "Fayl tizimi turlari (FSTYPE) va UUID raqamlarini ham ko'rsatish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, lsblk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsblk",
    "flag": "-m",
    "name": "List Block Devices (Blok Qurilmalari va Disk Bo'limlari) (-m)",
    "syntax": "lsblk -m",
    "purpose": "Ruxsatlar va egalik huquqlari bilan chiqarish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, lsblk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fdisk",
    "flag": "-l",
    "name": "Manipulate Disk Partition Table (Disk Bo'limlari Ustasi) (-l)",
    "syntax": "fdisk -l",
    "purpose": "Tizimdagi barcha disklar va ularning bo'limlar jadvalini chiqarish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, fdisk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkfs",
    "flag": "-t ext4",
    "name": "Build a Linux File System (Formatlash va Fayl Tizimi Yaratish) (-t ext4)",
    "syntax": "mkfs -t ext4",
    "purpose": "ext4 fayl tizimini yaratish",
    "withoutRisk": "Agar -t ext4 bayrog'i berilmasa, mkfs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkfs",
    "flag": "-t vfat",
    "name": "Build a Linux File System (Formatlash va Fayl Tizimi Yaratish) (-t vfat)",
    "syntax": "mkfs -t vfat",
    "purpose": "Barcha tizimlar (Windows/Mac/Linux) tushunadigan FAT formatlash",
    "withoutRisk": "Agar -t vfat bayrog'i berilmasa, mkfs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fsck",
    "flag": "-y",
    "name": "Check and Repair a Linux File System (Fayl Tizimini Tekshirish va Davolash) (-y)",
    "syntax": "fsck -y",
    "purpose": "Barcha tuzatish savollariga avtomatik 'Ha' deb javob berish",
    "withoutRisk": "Agar -y bayrog'i berilmasa, fsck buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fsck",
    "flag": "-f",
    "name": "Check and Repair a Linux File System (Fayl Tizimini Tekshirish va Davolash) (-f)",
    "syntax": "fsck -f",
    "purpose": "Fayl tizimi toza deb belgilangan bo'lsa ham majburiy tekshirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, fsck buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "if=FILE",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (if=FILE)",
    "syntax": "dd if=FILE",
    "purpose": "Kirish manbasi (Input File, masalan: if=debian.iso)",
    "withoutRisk": "Agar if=FILE bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "of=DEVICE",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (of=DEVICE)",
    "syntax": "dd of=DEVICE",
    "purpose": "Chiqish qurilmasi (Output File, masalan: of=/dev/sdc)",
    "withoutRisk": "Agar of=DEVICE bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "bs=4M",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (bs=4M)",
    "syntax": "dd bs=4M",
    "purpose": "Bitta blok hajmini 4MB qilib belgilash (tezlikni oshiradi)",
    "withoutRisk": "Agar bs=4M bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "status=progress",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (status=progress)",
    "syntax": "dd status=progress",
    "purpose": "Nusxalanish jarayonini jonli ko'rsatib turish",
    "withoutRisk": "Agar status=progress bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ip",
    "flag": "a / addr",
    "name": "Show / Manipulate Routing, Devices, Interfaces (Tarmoq Boshqaruvi) (a / addr)",
    "syntax": "ip a / addr",
    "purpose": "Barcha interfeyslarning IP manzillarini ko'rsatish",
    "withoutRisk": "Agar a / addr bayrog'i berilmasa, ip buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ip",
    "flag": "r / route",
    "name": "Show / Manipulate Routing, Devices, Interfaces (Tarmoq Boshqaruvi) (r / route)",
    "syntax": "ip r / route",
    "purpose": "Standart shlyuz (gateway) va yo'nalishlar jadvalini ko'rish",
    "withoutRisk": "Agar r / route bayrog'i berilmasa, ip buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ip",
    "flag": "link set dev UP/DOWN",
    "name": "Show / Manipulate Routing, Devices, Interfaces (Tarmoq Boshqaruvi) (link set dev UP/DOWN)",
    "syntax": "ip link set dev UP/DOWN",
    "purpose": "Tarmoq kartasini yoqish yoki o'chirish",
    "withoutRisk": "Agar link set dev UP/DOWN bayrog'i berilmasa, ip buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ping",
    "flag": "-c N",
    "name": "Send ICMP ECHO_REQUEST to Network Hosts (Aloqani Tekshirish) (-c N)",
    "syntax": "ping -c N",
    "purpose": "N ta so'rov yuborgandan so'ng to'xtash (Linuxda to'xtovsiz ketadi)",
    "withoutRisk": "Agar -c N bayrog'i berilmasa, ping buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ping",
    "flag": "-i SEK",
    "name": "Send ICMP ECHO_REQUEST to Network Hosts (Aloqani Tekshirish) (-i SEK)",
    "syntax": "ping -i SEK",
    "purpose": "So'rovlar orasidagi tanaffus vaqti",
    "withoutRisk": "Agar -i SEK bayrog'i berilmasa, ping buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-t",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-t)",
    "syntax": "ss -t",
    "purpose": "Faqat TCP ulanishlarni ko'rsatish",
    "withoutRisk": "Agar -t bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-u",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-u)",
    "syntax": "ss -u",
    "purpose": "Faqat UDP ulanishlarni ko'rsatish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-l",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-l)",
    "syntax": "ss -l",
    "purpose": "Faqat tinglayotgan (listening) ochiq portlarni ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-n",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-n)",
    "syntax": "ss -n",
    "purpose": "Nomlar emas, raqamli portlarni ko'rsatish (masalan: 80, 443, 22)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-p",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-p)",
    "syntax": "ss -p",
    "purpose": "Qaysi jarayon (PID va dastur) portni ushlab turganini ko'rsatish",
    "withoutRisk": "Agar -p bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "netstat",
    "flag": "-tulpn",
    "name": "Network Statistics (Klassik Tarmoq Monitori) (-tulpn)",
    "syntax": "netstat -tulpn",
    "purpose": "TCP, UDP, tinglovchi portlar, raqamlar va jarayonlar",
    "withoutRisk": "Agar -tulpn bayrog'i berilmasa, netstat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-I",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-I)",
    "syntax": "curl -I",
    "purpose": "Faqat HTTP sarlavhalarini (headers: 200 OK, 404) olish",
    "withoutRisk": "Agar -I bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-O",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-O)",
    "syntax": "curl -O",
    "purpose": "Faylni serverdagi asl nomi bilan diskka yuklab olish",
    "withoutRisk": "Agar -O bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-L",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-L)",
    "syntax": "curl -L",
    "purpose": "Agar yo'naltirish (301/302 redirect) bo'lsa orqasidan ergashish",
    "withoutRisk": "Agar -L bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-H 'Header'",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-H 'Header')",
    "syntax": "curl -H 'Header'",
    "purpose": "Maxsus sarlavha qo'shish (masalan: Authorization)",
    "withoutRisk": "Agar -H 'Header' bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wget",
    "flag": "-c",
    "name": "Non-interactive Network Downloader (Fayllarni Yuklab Olish) (-c)",
    "syntax": "wget -c",
    "purpose": "Uzilib qolgan yuklashni qolgan joyidan davom ettirish (continue)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, wget buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wget",
    "flag": "-b",
    "name": "Non-interactive Network Downloader (Fayllarni Yuklab Olish) (-b)",
    "syntax": "wget -b",
    "purpose": "Orqa fonda yuklash (background)",
    "withoutRisk": "Agar -b bayrog'i berilmasa, wget buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wget",
    "flag": "-O NOMI",
    "name": "Non-interactive Network Downloader (Fayllarni Yuklab Olish) (-O NOMI)",
    "syntax": "wget -O NOMI",
    "purpose": "Yuklangan faylni boshqa nom bilan saqlash",
    "withoutRisk": "Agar -O NOMI bayrog'i berilmasa, wget buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ssh",
    "flag": "-p PORT",
    "name": "OpenSSH Remote Login Client (Masofaviy Xavfsiz Ulanish) (-p PORT)",
    "syntax": "ssh -p PORT",
    "purpose": "Standart 22-port o'rniga boshqa port orqali ulanish",
    "withoutRisk": "Agar -p PORT bayrog'i berilmasa, ssh buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ssh",
    "flag": "-i KALIT",
    "name": "OpenSSH Remote Login Client (Masofaviy Xavfsiz Ulanish) (-i KALIT)",
    "syntax": "ssh -i KALIT",
    "purpose": "Parolsiz kirish uchun shaxsiy SSH kalitini ko'rsatish (id_rsa)",
    "withoutRisk": "Agar -i KALIT bayrog'i berilmasa, ssh buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ssh",
    "flag": "-L L_PORT:HOST:R_PORT",
    "name": "OpenSSH Remote Login Client (Masofaviy Xavfsiz Ulanish) (-L L_PORT:HOST:R_PORT)",
    "syntax": "ssh -L L_PORT:HOST:R_PORT",
    "purpose": "Port forwarding (tunneling) yaratish",
    "withoutRisk": "Agar -L L_PORT:HOST:R_PORT bayrog'i berilmasa, ssh buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "scp",
    "flag": "-r",
    "name": "Secure Copy (SSH Orqali Fayl Yuborish) (-r)",
    "syntax": "scp -r",
    "purpose": "Papkani barcha ichki fayllari bilan rekursiv yuborish",
    "withoutRisk": "Agar -r bayrog'i berilmasa, scp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "scp",
    "flag": "-P PORT",
    "name": "Secure Copy (SSH Orqali Fayl Yuborish) (-P PORT)",
    "syntax": "scp -P PORT",
    "purpose": "Boshqa portni ko'rsatish",
    "withoutRisk": "Agar -P PORT bayrog'i berilmasa, scp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "-a",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (-a)",
    "syntax": "rsync -a",
    "purpose": "Arxiv rejimi (ruxsatlar, vaqtlar va symlinklar saqlanadi)",
    "withoutRisk": "Agar -a bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "-v",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (-v)",
    "syntax": "rsync -v",
    "purpose": "Batafsil ma'lumot berish (verbose)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "-z",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (-z)",
    "syntax": "rsync -z",
    "purpose": "Tarmoq orqali yuborishda ma'lumotni siqish (compress)",
    "withoutRisk": "Agar -z bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "--delete",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (--delete)",
    "syntax": "rsync --delete",
    "purpose": "Manbada o'chirilgan fayllarni nishonda ham o'chirish",
    "withoutRisk": "Agar --delete bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nc",
    "flag": "-z",
    "name": "Netcat (Shveysariya Armiyasi Pichoqchasi) (-z)",
    "syntax": "nc -z",
    "purpose": "Ma'lumot yubormasdan faqat port ochiqligini tekshirish (scan)",
    "withoutRisk": "Agar -z bayrog'i berilmasa, nc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nc",
    "flag": "-v",
    "name": "Netcat (Shveysariya Armiyasi Pichoqchasi) (-v)",
    "syntax": "nc -v",
    "purpose": "Batafsil hisobot (verbose)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, nc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nc",
    "flag": "-l",
    "name": "Netcat (Shveysariya Armiyasi Pichoqchasi) (-l)",
    "syntax": "nc -l",
    "purpose": "Kutilayotgan ulanishlar uchun port tinglovchi serverga aylanish (listen)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, nc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "start",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (start)",
    "syntax": "systemctl start",
    "purpose": "Xizmatni ishga tushirish",
    "withoutRisk": "Agar start bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "stop",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (stop)",
    "syntax": "systemctl stop",
    "purpose": "Xizmatni to'xtatish",
    "withoutRisk": "Agar stop bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "restart",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (restart)",
    "syntax": "systemctl restart",
    "purpose": "Xizmatni qayta o'chirib yoqish",
    "withoutRisk": "Agar restart bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "status",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (status)",
    "syntax": "systemctl status",
    "purpose": "Xizmat faoliyati va so'nggi loglarini ko'rish",
    "withoutRisk": "Agar status bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "enable",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (enable)",
    "syntax": "systemctl enable",
    "purpose": "Server o'chib yoqilganda avtomatik ishga tushishini yoqish",
    "withoutRisk": "Agar enable bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "disable",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (disable)",
    "syntax": "systemctl disable",
    "purpose": "Avtoyuklanishdan olib tashlash",
    "withoutRisk": "Agar disable bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-u XIZMAT",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-u XIZMAT)",
    "syntax": "journalctl -u XIZMAT",
    "purpose": "Faqat ko'rsatilgan xizmat loglarini ko'rish (masalan: -u ssh)",
    "withoutRisk": "Agar -u XIZMAT bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-f",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-f)",
    "syntax": "journalctl -f",
    "purpose": "Yangi kelgan loglarni real vaqtda jonli kuzatish (follow)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-p err",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-p err)",
    "syntax": "journalctl -p err",
    "purpose": "Faqat xatoliklarni filtrlash (priority)",
    "withoutRisk": "Agar -p err bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-b",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-b)",
    "syntax": "journalctl -b",
    "purpose": "Faqat joriy yuklanishdan (boot) keyingi yozuvlarni ko'rish",
    "withoutRisk": "Agar -b bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "history",
    "flag": "-c",
    "name": "GNU History Library (Terilgan Buyruqlar Tarixi) (-c)",
    "syntax": "history -c",
    "purpose": "Tarix xotirasini tozalash",
    "withoutRisk": "Agar -c bayrog'i berilmasa, history buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "read",
    "flag": "-p 'MATN'",
    "name": "Read a Line from Standard Input (Foydalanuvchidan Matn Kiritish) (-p 'MATN')",
    "syntax": "read -p 'MATN'",
    "purpose": "Kiritishdan oldin so'rov matnini chiqarish (prompt)",
    "withoutRisk": "Agar -p 'MATN' bayrog'i berilmasa, read buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "read",
    "flag": "-s",
    "name": "Read a Line from Standard Input (Foydalanuvchidan Matn Kiritish) (-s)",
    "syntax": "read -s",
    "purpose": "Yozilayotgan parolni ekranda yashirish (silent)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, read buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "read",
    "flag": "-t SEK",
    "name": "Read a Line from Standard Input (Foydalanuvchidan Matn Kiritish) (-t SEK)",
    "syntax": "read -t SEK",
    "purpose": "Javob kutish vaqtini cheklash (timeout)",
    "withoutRisk": "Agar -t SEK bayrog'i berilmasa, read buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "-p X:Y",
    "name": "Run a Command in a New Container (Yangi Konteynerni Boshlash) (-p X:Y)",
    "syntax": "docker run -p X:Y",
    "purpose": "Portlarni ochish: tashqi X portni konteyner ichidagi Y portga ulash (masalan: -p 8080:80)",
    "withoutRisk": "Agar -p X:Y bayrog'i berilmasa, docker run buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "--name NOMI",
    "name": "Run a Command in a New Container (Yangi Konteynerni Boshlash) (--name NOMI)",
    "syntax": "docker run --name NOMI",
    "purpose": "Konteynerga inson tushunadigan nom berish",
    "withoutRisk": "Agar --name NOMI bayrog'i berilmasa, docker run buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "-v X:Y",
    "name": "Run a Command in a New Container (Yangi Konteynerni Boshlash) (-v X:Y)",
    "syntax": "docker run -v X:Y",
    "purpose": "Volume ulash: kompyuterdagi X papkani konteyner ichidagi Y ga bog'lash",
    "withoutRisk": "Agar -v X:Y bayrog'i berilmasa, docker run buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker ps",
    "flag": "-a",
    "name": "List Containers (Ishlab Turgan Konteynerlarni Ko'rish) (-a)",
    "syntax": "docker ps -a",
    "purpose": "Barcha konteynerlarni, shu jumladan to'xtaganlarini ham ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, docker ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker ps",
    "flag": "-q",
    "name": "List Containers (Ishlab Turgan Konteynerlarni Ko'rish) (-q)",
    "syntax": "docker ps -q",
    "purpose": "Faqat konteyner ID larini chiqarish (skriptlar uchun)",
    "withoutRisk": "Agar -q bayrog'i berilmasa, docker ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker build",
    "flag": "-t NOMI:TEG",
    "name": "Build an Image from a Dockerfile (Yangi Obraz Yig'ish) (-t NOMI:TEG)",
    "syntax": "docker build -t NOMI:TEG",
    "purpose": "Yaratilayotgan obrazga nom va versiya tegi berish (masalan: -t myapp:1.0)",
    "withoutRisk": "Agar -t NOMI:TEG bayrog'i berilmasa, docker build buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker stop",
    "flag": "-t N",
    "name": "Stop One or More Running Containers (Konteynerni To'xtatish) (-t N)",
    "syntax": "docker stop -t N",
    "purpose": "SIGKILL yuborishdan oldin N soniya kutish",
    "withoutRisk": "Agar -t N bayrog'i berilmasa, docker stop buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker rm",
    "flag": "-f",
    "name": "Remove One or More Containers (Konteynerni O'chirish) (-f)",
    "syntax": "docker rm -f",
    "purpose": "Ishlab turgan bo'lsa ham majburiy o'chirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, docker rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker logs",
    "flag": "-f",
    "name": "Fetch the Logs of a Container (Konteyner Loglarini Ko'rish) (-f)",
    "syntax": "docker logs -f",
    "purpose": "Yangi kelayotgan loglarni jonli kuzatish (follow)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, docker logs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker logs",
    "flag": "--tail N",
    "name": "Fetch the Logs of a Container (Konteyner Loglarini Ko'rish) (--tail N)",
    "syntax": "docker logs --tail N",
    "purpose": "Oxirgi N ta qatorni chiqarish",
    "withoutRisk": "Agar --tail N bayrog'i berilmasa, docker logs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nano",
    "flag": "-l",
    "name": "GNU nano Text Editor (Oson Terminal Matn Muharriri) (-l)",
    "syntax": "nano -l",
    "purpose": "Qator raqamlarini chiqarish (line numbers)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, nano buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "gcc",
    "flag": "-O2",
    "name": "GNU Compiler Collection (C/C++ Kompilyatori) (-O2)",
    "syntax": "gcc -O2",
    "purpose": "Kodni tezlik bo'yicha optimallashtirish",
    "withoutRisk": "Agar -O2 bayrog'i berilmasa, gcc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "gcc",
    "flag": "-g",
    "name": "GNU Compiler Collection (C/C++ Kompilyatori) (-g)",
    "syntax": "gcc -g",
    "purpose": "Debag ma'lumotlarini qo'shish (GDB uchun)",
    "withoutRisk": "Agar -g bayrog'i berilmasa, gcc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "make",
    "flag": "-j N",
    "name": "GNU make Utility to Maintain Groups of Programs (Avtomatik Yig'uvchi) (-j N)",
    "syntax": "make -j N",
    "purpose": "N ta yadroda parallel yig'ish (tezlashtiradi)",
    "withoutRisk": "Agar -j N bayrog'i berilmasa, make buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "readlink",
    "flag": "-f",
    "name": "Print Value of a Symbolic Link (Simvolik Havola Manzilini O'qish) (-f)",
    "syntax": "readlink -f",
    "purpose": "Barcha oraliq symlinklarni to'liq yechib haqiqiy yo'lni ko'rsatish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, readlink buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "type",
    "flag": "-a",
    "name": "Describe a Command (Buyruq Turini Aniqlash) (-a)",
    "syntax": "type -a",
    "purpose": "Buyruqning barcha turlarini ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, type buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nl",
    "flag": "-ba",
    "name": "Number Lines of Files (Qatorlarni Maxsus Raqamlash) (-ba)",
    "syntax": "nl -ba",
    "purpose": "Bo'sh qatorlarni ham birga raqamlash",
    "withoutRisk": "Agar -ba bayrog'i berilmasa, nl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "comm",
    "flag": "-1",
    "name": "Compare Two Sorted Files Line by Line (Tartiblangan Fayllarni Solishtirish) (-1)",
    "syntax": "comm -1",
    "purpose": "1-ustunni (faqat 1-fayldagilarni) yashirish",
    "withoutRisk": "Agar -1 bayrog'i berilmasa, comm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "comm",
    "flag": "-2",
    "name": "Compare Two Sorted Files Line by Line (Tartiblangan Fayllarni Solishtirish) (-2)",
    "syntax": "comm -2",
    "purpose": "2-ustunni yashirish",
    "withoutRisk": "Agar -2 bayrog'i berilmasa, comm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "comm",
    "flag": "-3",
    "name": "Compare Two Sorted Files Line by Line (Tartiblangan Fayllarni Solishtirish) (-3)",
    "syntax": "comm -3",
    "purpose": "3-ustunni (umumiy bo'lganlarini) yashirish",
    "withoutRisk": "Agar -3 bayrog'i berilmasa, comm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "join",
    "flag": "-t 'BELGI'",
    "name": "Join Lines of Two Files on a Common Field (Fayllarni Kalit Bo'yicha Birlashtirish) (-t 'BELGI')",
    "syntax": "join -t 'BELGI'",
    "purpose": "Ustunlar ajratuvchisini belgilash",
    "withoutRisk": "Agar -t 'BELGI' bayrog'i berilmasa, join buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "hexdump",
    "flag": "-C",
    "name": "Hexadecimal, Decimal, Octal, ASCII Dump (O'n Oltilik Ko'rinish) (-C)",
    "syntax": "hexdump -C",
    "purpose": "Kanonik format: yonida ASCII harflari bilan chiqarish",
    "withoutRisk": "Agar -C bayrog'i berilmasa, hexdump buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chattr",
    "flag": "+i",
    "name": "Change File Attributes on Linux File System (O'zgarmas Fayllar Yaratish) (+i)",
    "syntax": "chattr +i",
    "purpose": "Immutable: faylni o'chirish, nomini o'zgartirish va yozishni to'liq bloklash",
    "withoutRisk": "Agar +i bayrog'i berilmasa, chattr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chattr",
    "flag": "+a",
    "name": "Change File Attributes on Linux File System (O'zgarmas Fayllar Yaratish) (+a)",
    "syntax": "chattr +a",
    "purpose": "Append-only: faqat oxiriga ma'lumot qo'shish mumkin, eskilarini o'chirib bo'lmaydi (loglar uchun ideal)",
    "withoutRisk": "Agar +a bayrog'i berilmasa, chattr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsattr",
    "flag": "-a",
    "name": "List File Attributes on a Linux Second Extended File System (Atributlarni Ko'rish) (-a)",
    "syntax": "lsattr -a",
    "purpose": "Barcha fayllarni ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, lsattr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "who",
    "flag": "-b",
    "name": "Show Who is Logged on (Tizimga Kirgan Foydalanuvchilar) (-b)",
    "syntax": "who -b",
    "purpose": "Tizim so'nggi marta qachon yoqilganini (boot time) chiqarish",
    "withoutRisk": "Agar -b bayrog'i berilmasa, who buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "who",
    "flag": "-H",
    "name": "Show Who is Logged on (Tizimga Kirgan Foydalanuvchilar) (-H)",
    "syntax": "who -H",
    "purpose": "Ustunlar sarlavhalari bilan chiqarish",
    "withoutRisk": "Agar -H bayrog'i berilmasa, who buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "last",
    "flag": "-n N",
    "name": "Show a Listing of Last Logged in Users (Kirishlar Tarixi) (-n N)",
    "syntax": "last -n N",
    "purpose": "Oxirgi N ta kirish qaydini ko'rsatish",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, last buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "last",
    "flag": "-a",
    "name": "Show a Listing of Last Logged in Users (Kirishlar Tarixi) (-a)",
    "syntax": "last -a",
    "purpose": "IP manzilni eng o'ng ustunda ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, last buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "timeout",
    "flag": "-k VAQT",
    "name": "Run a Command with a Time Limit (Vaqt Cheklovi Bilan Ishga Tushirish) (-k VAQT)",
    "syntax": "timeout -k VAQT",
    "purpose": "SIGTERM dan so'ng ham to'xtamasa, SIGKILL yuborish",
    "withoutRisk": "Agar -k VAQT bayrog'i berilmasa, timeout buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "watch",
    "flag": "-n SEK",
    "name": "Execute a Program Periodically, Showing Output Fullscreen (Jonli Takroriy Kuzatuv) (-n SEK)",
    "syntax": "watch -n SEK",
    "purpose": "Yangilanish oralig'ini belgilash (masalan: -n 1)",
    "withoutRisk": "Agar -n SEK bayrog'i berilmasa, watch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "watch",
    "flag": "-d",
    "name": "Execute a Program Periodically, Showing Output Fullscreen (Jonli Takroriy Kuzatuv) (-d)",
    "syntax": "watch -d",
    "purpose": "O'zgargan harflar va sonlarni rangli qilib ajratib ko'rsatish (differences)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, watch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pidof",
    "flag": "-s",
    "name": "Find the Process ID of a Running Program (Dastur PID ini Aniqlash) (-s)",
    "syntax": "pidof -s",
    "purpose": "Faqat bitta yagona PID chiqarish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, pidof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsof",
    "flag": "-i :PORT",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Soketlari) (-i :PORT)",
    "syntax": "lsof -i :PORT",
    "purpose": "Aynan ma'lum bir portni (masalan: -i :80) qaysi dastur ushlab turganini ko'rish",
    "withoutRisk": "Agar -i :PORT bayrog'i berilmasa, lsof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsof",
    "flag": "-u USER",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Soketlari) (-u USER)",
    "syntax": "lsof -u USER",
    "purpose": "Foydalanuvchining barcha ochiq fayllari",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, lsof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsof",
    "flag": "-p PID",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Soketlari) (-p PID)",
    "syntax": "lsof -p PID",
    "purpose": "Aynan shu jarayon ochgan barcha fayllar ro'yxati",
    "withoutRisk": "Agar -p PID bayrog'i berilmasa, lsof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uptime",
    "flag": "-p",
    "name": "Tell How Long the System has Been Running (Server Ish Vaqti) (-p)",
    "syntax": "uptime -p",
    "purpose": "Chiroyli inson tilida chiqarish (masalan: up 14 days, 3 hours)",
    "withoutRisk": "Agar -p bayrog'i berilmasa, uptime buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uptime",
    "flag": "-s",
    "name": "Tell How Long the System has Been Running (Server Ish Vaqti) (-s)",
    "syntax": "uptime -s",
    "purpose": "Server qaysi aniq sana va vaqtda yoqilganini ko'rsatish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, uptime buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "valgrind",
    "flag": "--leak-check=full",
    "name": "Memory Management and Leak Detection Tool (Xotira Oqishini Tekshiruvchi) (--leak-check=full)",
    "syntax": "valgrind --leak-check=full",
    "purpose": "Xotiradagi har bir oqib ketgan baytni qatorma-qator fosh qilish",
    "withoutRisk": "Agar --leak-check=full bayrog'i berilmasa, valgrind buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sysctl",
    "flag": "-a",
    "name": "Configure Kernel Parameters at Runtime (Yadro Parametrlarini Sozlash) (-a)",
    "syntax": "sysctl -a",
    "purpose": "Barcha yadro parametrlarini chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, sysctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sysctl",
    "flag": "-p",
    "name": "Configure Kernel Parameters at Runtime (Yadro Parametrlarini Sozlash) (-p)",
    "syntax": "sysctl -p",
    "purpose": "/etc/sysctl.conf faylidagi o'zgarishlarni qayta yuklash",
    "withoutRisk": "Agar -p bayrog'i berilmasa, sysctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "parted",
    "flag": "-l",
    "name": "A Partition Manipulation Program (Katta Disklar Boshqaruvi) (-l)",
    "syntax": "parted -l",
    "purpose": "Barcha disklar jadvalini ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, parted buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "traceroute",
    "flag": "-n",
    "name": "Print the Route Packets Trace to Network Host (Paket Yo'nalishini Kuzatish) (-n)",
    "syntax": "traceroute -n",
    "purpose": "DNS nomlarini yechmasdan tezkor raqamli IP larni ko'rsatish",
    "withoutRisk": "Agar -n bayrog'i berilmasa, traceroute buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dig",
    "flag": "+short",
    "name": "DNS Lookup Utility (DNS Domen Qidiruv Vositasi) (+short)",
    "syntax": "dig +short",
    "purpose": "Faqat qisqa toza IP manzilni chiqarish",
    "withoutRisk": "Agar +short bayrog'i berilmasa, dig buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dig",
    "flag": "ANY",
    "name": "DNS Lookup Utility (DNS Domen Qidiruv Vositasi) (ANY)",
    "syntax": "dig ANY",
    "purpose": "Domenning barcha mavjud DNS yozuvlarini olish",
    "withoutRisk": "Agar ANY bayrog'i berilmasa, dig buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ufw",
    "flag": "allow PORT",
    "name": "Uncomplicated Firewall (Sodda Xavfsizlik Devori) (allow PORT)",
    "syntax": "ufw allow PORT",
    "purpose": "Portga kirishga ruxsat berish (masalan: allow 22/tcp)",
    "withoutRisk": "Agar allow PORT bayrog'i berilmasa, ufw buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ufw",
    "flag": "deny PORT",
    "name": "Uncomplicated Firewall (Sodda Xavfsizlik Devori) (deny PORT)",
    "syntax": "ufw deny PORT",
    "purpose": "Portni butunlay yopish",
    "withoutRisk": "Agar deny PORT bayrog'i berilmasa, ufw buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ufw",
    "flag": "status",
    "name": "Uncomplicated Firewall (Sodda Xavfsizlik Devori) (status)",
    "syntax": "ufw status",
    "purpose": "Faol xavfsizlik qoidalari ro'yxatini ko'rish",
    "withoutRisk": "Agar status bayrog'i berilmasa, ufw buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "echo",
    "flag": "-e",
    "name": "Display a Line of Text (Matn Chiqarish) (-e)",
    "syntax": "echo -e",
    "purpose": "Maxsus belgilarni (\\n yangi qator, \\t tab) yoqish",
    "withoutRisk": "Agar -e bayrog'i berilmasa, echo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "echo",
    "flag": "-n",
    "name": "Display a Line of Text (Matn Chiqarish) (-n)",
    "syntax": "echo -n",
    "purpose": "Oxirida yangi qatorga o'tmaslik",
    "withoutRisk": "Agar -n bayrog'i berilmasa, echo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-f FAYL",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-f FAYL)",
    "syntax": "test -f FAYL",
    "purpose": "Fayl mavjud va oddiy fayl ekanini tekshirish",
    "withoutRisk": "Agar -f FAYL bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-d PAPKA",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-d PAPKA)",
    "syntax": "test -d PAPKA",
    "purpose": "Papka mavjudligini tekshirish",
    "withoutRisk": "Agar -d PAPKA bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-z SATR",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-z SATR)",
    "syntax": "test -z SATR",
    "purpose": "Satr bo'sh ekanligini tekshirish",
    "withoutRisk": "Agar -z SATR bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-eq / -ne",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-eq / -ne)",
    "syntax": "test -eq / -ne",
    "purpose": "Sonlarning teng / teng emasligini tekshirish",
    "withoutRisk": "Agar -eq / -ne bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "seq",
    "flag": "-w",
    "name": "Print a Sequence of Numbers (Raqamlar Ketma-ketligini Chiqarish) (-w)",
    "syntax": "seq -w",
    "purpose": "Boshiga nollar qo'shib bir xil kenglikda chiqarish (01, 02..)",
    "withoutRisk": "Agar -w bayrog'i berilmasa, seq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "objdump",
    "flag": "-d",
    "name": "Display Information from Object Files (Disassembler) (-d)",
    "syntax": "objdump -d",
    "purpose": "Ijrochi kodni assembler tilida chiqarish (disassemble)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, objdump buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "objdump",
    "flag": "-M intel",
    "name": "Display Information from Object Files (Disassembler) (-M intel)",
    "syntax": "objdump -M intel",
    "purpose": "Intel sintaksisida chiqarish (o'qish osonroq)",
    "withoutRisk": "Agar -M intel bayrog'i berilmasa, objdump buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  }
];

    var MASTER_FLAG_DICTIONARY = [
  {
    "cmd": "crontab",
    "flag": "-l",
    "name": "List cron jobs (Jadvalni ko'rish)",
    "syntax": "crontab -l",
    "purpose": "Joriy foydalanuvchining barcha faol rejalashtirilgan cron vazifalari ro'yxatini ekranga chiqaradi.",
    "withoutRisk": "Agar -l ko'rsatilmasa, crontab buyrug'i standart kiritishni (STDIN) kutib turadi yoki xatolik chiqaradi. Tizim jadvalini bilmasdan yangi vazifa qo'shish xavfli."
  },
  {
    "cmd": "crontab",
    "flag": "-e",
    "name": "Edit cron jobs (Tahrirlash rejimi)",
    "syntax": "crontab -e",
    "purpose": "Foydalanuvchi crontab faylini birlamchi matn muharririda (nano yoki vim) xavfsiz tahrirlash uchun ochadi.",
    "withoutRisk": "Agar -e bo'lmasa, faylni to'g'ridan-to'g'ri /var/spool/cron/ dan tahrirlash kerak bo'ladi, bu esa sintaksis tekshiruvini (crontab validity check) chetlab o'tib, buzilishga olib keladi."
  },
  {
    "cmd": "crontab",
    "flag": "-r",
    "name": "Remove crontab (Jadvalni butunlay o'chirish)",
    "syntax": "crontab -r",
    "purpose": "Foydalanuvchining barcha cron vazifalarini tizimdan butunlay o'chirib tashlaydi.",
    "withoutRisk": "DIQQAT: -e o'rniga adashib -r bosilsa, hech qanday so'rovsiz barcha rejalar o'chib ketadi! Qayta tiklashning iloji yo'q."
  },
  {
    "cmd": "systemctl",
    "flag": "enable --now",
    "name": "Enable & Immediate Start (Avtostart va Darhol Yoqish)",
    "syntax": "sudo systemctl enable --now disk-check.timer",
    "purpose": "Taymer yoki xizmatni ham operatsion tizim yuklanishiga (boot) avtomatik qo'shadi, ham aynan hozirgi daqiqadan faollashtiradi.",
    "withoutRisk": "Agar --now ko'rsatilmasa, faqat 'enable' bo'ladi. Tizim qayta yuklanguncha (reboot) taymer ishga tushmaydi va hozirgi reja bajarilmay qoladi."
  },
  {
    "cmd": "systemctl",
    "flag": "daemon-reload",
    "name": "Reload Systemd Units (Konfiguratsiyani qayta o'qish)",
    "syntax": "sudo systemctl daemon-reload",
    "purpose": "Yangi yaratilgan yoki tahrirlangan .service/.timer fayllarini diskdan Systemd xotirasiga qayta yuklaydi.",
    "withoutRisk": "Agar daemon-reload bajarilmasa, Systemd eski keshdagi sozlamalarni ushlab turadi va kiritilgan yangi o'zgarishlar e'tiborga olinmaydi."
  },
  {
    "cmd": "systemd-analyze",
    "flag": "verify",
    "name": "Verify Unit Syntax (Sintaksisni tekshirish)",
    "syntax": "systemd-analyze verify /etc/systemd/system/cleanup.service",
    "purpose": "Unit faylidagi xatoliklar, xato kalit so'zlar va direktivalarni xizmatni yoqmasdan turib diagnostika qiladi.",
    "withoutRisk": "Agar tekshirilmasa, sintaksisdagi bitta xato harf tufayli taymer 'Failed' holatiga tushadi va ishlab chiqarishdagi muhim tozalash to'xtab qoladi."
  },
  {
    "cmd": "journalctl",
    "flag": "-u",
    "name": "Unit Filter (Faqat bitta xizmat loglari)",
    "syntax": "journalctl -u cleanup.timer",
    "purpose": "Faqat ko'rsatilgan unit (timer yoki service) qaydlarini ajratib ko'rsatadi.",
    "withoutRisk": "Agar -u ko'rsatilmasa, journalctl butun Linux tizimining millionlab umumiy loglarini chiqarib, kerakli taymer xabarini topishni qiyinlashtiradi."
  },
  {
    "cmd": "df",
    "flag": "--output=pcent",
    "name": "Output Percentage Only (Faqat foiz ustuni)",
    "syntax": "df / --output=pcent",
    "purpose": "df natijasidagi ortiqcha ustunlarni (Blocks, Used, Available) yashirib, faqat disk to'lish foizini qaytaradi.",
    "withoutRisk": "Agar --output bo'lmasa, df barcha 6 ta ustunni chiqaradi. Skriptda foizni ajratib olish uchun murakkab awk/cut filtrlari talab etiladi."
  },
  {
    "cmd": "tail",
    "flag": "-n 1",
    "name": "Last Line Only (Faqat oxirgi qator)",
    "syntax": "tail -n 1",
    "purpose": "Chiqarilgan matnning faqat so'nggi bitta qatorini oladi (jadval sarlavhasini tashlab yuboradi).",
    "withoutRisk": "Agar -n 1 bo'lmasa, jadvalning 'Use%' sarlavhasi ham o'zgaruvchiga tushib qoladi va bash butun son taqqoslashida (integer expression) sintaksis xatosi beradi."
  },
  {
    "cmd": "tr",
    "flag": "-d",
    "name": "Delete Characters (Belgilarni qirqish)",
    "syntax": "tr -d ' %'",
    "purpose": "Matn tarkibidagi bo'sh joylar (spaces) va '%' belgisini o'chirib, sof raqamni (masalan: 87) qoldiradi.",
    "withoutRisk": "Agar -d ishlatilmasa, o'zgaruvchida '87%' qoladi va bash '-gt 85' shartida xato beradi, chunki '%' belgisi arifmetik raqam emas."
  },
  {
    "cmd": "curl",
    "flag": "-s",
    "name": "Silent Mode (Sokin rejim)",
    "syntax": "curl -s",
    "purpose": "Yuklash foizi, tezlik o'lchagich va progress-barni yashiradi.",
    "withoutRisk": "Agar -s bo'lmasa, cron skripti har 5 daqiqada log fayliga ulkan progress grafigini yozib, diskni tezda to'ldirib yuboradi."
  },
  {
    "cmd": "curl",
    "flag": "-X POST",
    "name": "HTTP POST Request (Ma'lumot yuborish)",
    "syntax": "curl -s -X POST 'https://api.telegram.org/...'",
    "purpose": "Serverga yangi ma'lumot jo'natish uchun HTTP metodini POST ga o'zgartiradi.",
    "withoutRisk": "Agar -X POST ko'rsatilmasa, standart GET so'rovi ketadi va ko'plab REST API lari (jumladan Telegram bot sendMessage) so'rovni rad etadi."
  },
  {
    "cmd": "curl",
    "flag": "-d",
    "name": "Data Payload (POST parametrlar)",
    "syntax": "curl -d 'chat_id=123' -d 'text=Alert'",
    "purpose": "So'rov tanasida (body) xabar matni va qabul qiluvchi identifikatorini uzatadi.",
    "withoutRisk": "Agar -d bo'lmasa, API bo'sh so'rov oladi va 'chat_id missing' xatosi bilan xabar jo'natilmay qoladi."
  },
  {
    "cmd": "docker",
    "flag": "run -d",
    "name": "Detached Mode (Orqa fonda ishga tushirish)",
    "syntax": "docker container run -d --name web nginx",
    "purpose": "Konteynerni mustaqil fon rejimida (daemon) yurgazadi va joriy terminalni bo'shatadi.",
    "withoutRisk": "Agar -d bo'lmasa, konteyner terminalni bloklab oladi. Terminal yopilsa yoki Ctrl+C bosilsa, konteyner ham darhol to'xtaydi."
  },
  {
    "cmd": "docker",
    "flag": "run -it",
    "name": "Interactive & Pseudo-TTY (Interaktiv terminal)",
    "syntax": "docker container run -it ubuntu bash",
    "purpose": "-i (STDIN ochiq ushlash) va -t (terminal tty emulyatori) orqali konteyner ichida to'g'ridan-to'g'ri interaktiv buyruq kiritish imkonini beradi.",
    "withoutRisk": "Agar -it bo'lmasa, bash buyrug'i kiritishni kutmasdan darhol exit (0) kodi bilan o'chib qoladi."
  },
  {
    "cmd": "docker",
    "flag": "--name",
    "name": "Custom Container Name (Maxsus nomlash)",
    "syntax": "docker container run --name my-ubuntu ubuntu",
    "purpose": "Konteynerga inson tushunadigan aniq nom beradi (masalan: my-ubuntu, nginx8888).",
    "withoutRisk": "Agar --name ko'rsatilmasa, Docker tasodifiy nom beradi (masalan: clever_curie, zen_newton). Keyinchalik skriptlarda konteynerni boshqarish qiyinlashadi."
  },
  {
    "cmd": "docker",
    "flag": "-p",
    "name": "Port Forwarding (Portlarni yo'naltirish)",
    "syntax": "docker container run -d -p 8888:80 --name web nginx",
    "purpose": "Xost mashinasining 8888-portini konteyner ichidagi 80-portga bog'laydi (HostPort:ContainerPort).",
    "withoutRisk": "Agar -p ko'rsatilmasa, konteyner ichidagi veb-server faqat ichki Docker tarmog'ida yopiq qoladi; tashqi brauzer yoki localhost:8888 orqali unga ulanib bo'lmaydi!"
  },
  {
    "cmd": "docker",
    "flag": "ls -a",
    "name": "List All Containers (Barcha konteynerlar ro'yxati)",
    "syntax": "docker container ls -a",
    "purpose": "Nafaqat faol ishlayotgan, balki to'xtatilgan (Exited) konteynerlarni ham to'liq ko'rsatadi.",
    "withoutRisk": "Agar -a bo'lmasa, faqat ishlayotganlar chiqadi. Xato tufayli to'xtab qolgan (crash bo'lgan) konteynerlarni ko'rib bo'lmaydi."
  },
  {
    "cmd": "docker",
    "flag": "exec -it",
    "name": "Execute in Running Container (Ishlayotgan konteyner ichiga kirish)",
    "syntax": "docker container exec -it my-ubuntu bash",
    "purpose": "Konteynerni to'xtatmasdan, uning ichida yangi bash sessiyasini ishga tushirib kiradi.",
    "withoutRisk": "Agar exec ishlatilmasa, konteyner ichidagi fayllarni tekshirish yoki uning jarayonlariga aralashishning iloji bo'lmaydi."
  },
  {
    "cmd": "docker",
    "flag": "attach",
    "name": "Attach to Main Process (Asosiy jarayonga ulanish)",
    "syntax": "docker container attach my-ubuntu",
    "purpose": "Konteynerning 1-PID ga ega asosiy ishchi jarayonining kirish/chiqish oqimiga to'g'ridan-to'g'ri ulanadi.",
    "withoutRisk": "DIQQAT: attach rejimida ehtiyotsizlik bilan Ctrl+C bosilsa, butun konteyner to'xtaydi! Chiqish uchun 'Ctrl+P, Ctrl+Q' kombinatsiyasidan foydalanish lozim."
  },
  {
    "cmd": "docker",
    "flag": "logs -f",
    "name": "Follow Container Logs (Jonli log kuzatish)",
    "syntax": "docker container logs -f my-ubuntu",
    "purpose": "Konteyner stdout/stderr xabarlarini jonli efir rejimida (real-time stream) ekranga uzatadi.",
    "withoutRisk": "Agar -f bo'lmasa, faqat o'tmishdagi loglarni ko'rsatib chiqib ketadi; yangi kelayotgan veb-so'rovlarni real vaqtda kuzatib bo'lmaydi."
  },
  {
    "cmd": "docker",
    "flag": "stats",
    "name": "Container Resource Metrics (Resurslar statistikasi)",
    "syntax": "docker stats",
    "purpose": "Barcha faol konteynerlarning CPU, RAM, Tarmoq I/O va Disk sarfini real vaqtda foizlarda ko'rsatadi.",
    "withoutRisk": "Agar stats bo'lmasa, qaysi konteyner xotira sizishiga (memory leak) olib kelayotganini aniqlash qiyin bo'ladi."
  },
  {
    "cmd": "docker",
    "flag": "rm -f",
    "name": "Force Remove Container (Majburiy o'chirish)",
    "syntax": "docker container rm -f my-ubuntu",
    "purpose": "Ishlayotgan konteynerga avval SIGKILL beradi va darhol tizimdan butunlay o'chirib tashlaydi.",
    "withoutRisk": "Agar -f bo'lmasa, Docker 'You cannot remove a running container' xatosi bilan o'chirishdan bosh tortadi. Avval stop qilish shart bo'ladi."
  },
  {
    "cmd": "docker",
    "flag": "rename",
    "name": "Rename Container (Nomini o'zgartirish)",
    "syntax": "docker container rename old_name new_name",
    "purpose": "Mavjud konteyner identifikatori va sozlamalarini saqlagan holda uning nomini o'zgartiradi.",
    "withoutRisk": "Agar rename bo'lmasa, yangi nom berish uchun konteynerni o'chirib noldan boshqatdan run qilishga to'g'ri keladi."
  },
  {
    "cmd": "usermod",
    "flag": "-aG docker",
    "name": "Append Group (Docker guruhiga qo'shish)",
    "syntax": "sudo usermod -aG docker $USER",
    "purpose": "Foydalanuvchini mavjud guruhlarini saqlagan holda 'docker' guruhiga qo'shadi, bu esa sudonisiz Docker buyruqlarini berish huquqini taqdim etadi.",
    "withoutRisk": "DIQQAT: Agar -a (append) unutilib, faqat '-G docker' yozilsa, foydalanuvchi qolgan barcha guruhlaridan (sudo, adm, dev) chiqarib yuboriladi va tizimda adminlik huquqini yo'qotadi!"
  },
  {
    "cmd": "find",
    "flag": "-mtime +1",
    "name": "Modified Time Filter (Eski fayllar)",
    "syntax": "find /tmp -type f -mtime +1 -ls",
    "purpose": "So'nggi 24 soatdan (1 kundan) ko'proq vaqt oldin o'zgartirilgan fayllarni ajratadi.",
    "withoutRisk": "Agar -mtime ko'rsatilmasa, hozirgina yaratilgan yangi fayllar ham o'chib ketishi xavfi tug'iladi."
  },
  {
    "cmd": "find",
    "flag": "-delete",
    "name": "Delete Matched Files (Haqiqiy o'chirish)",
    "syntax": "find /tmp -type f -mtime +1 -delete",
    "purpose": "Qidiruv shartiga to'g'ri kelgan fayllarni xavfsiz o'chiradi.",
    "withoutRisk": "Avval -ls orqali qaysi fayllar o'chishini tekshirib olmasdan -delete bersangiz, adashib butun katalog fayllari o'chib ketishi mumkin."
  },
  {
    "cmd": "docker build",
    "flag": "-t",
    "name": "Tag Image (Obrazga nom va versiya berish)",
    "syntax": "docker build -t sample-app:1.0 .",
    "purpose": "Yaratilayotgan obrazga inson o'qiy oladigan repozitoriy nomi va tegi (versiyasi)ni biriktiradi.",
    "withoutRisk": "Agar -t ko'rsatilmasa, obraz faqat 64 belgili sha256 xesh (masalan, <none>:<none>) bilan yaratiladi. Keyinchalik uni qidirib topish va ishga tushirish qiyinlashadi."
  },
  {
    "cmd": "docker build",
    "flag": ".",
    "name": "Build Context (Qurish konteksti katalogi)",
    "syntax": "docker build -t sample-app:1.0 .",
    "purpose": "Joriy katalogni qurish konteksti (build context) deb belgilaydi va Dockerfile, app.py kabi fayllarni Docker deymoniga yuboradi.",
    "withoutRisk": "Agar nuqta (.) yoki katalog yo'li qo'yilmasa, Docker buyrug'i sintaktik xato berib to'xtaydi, chunki Dockerfile va nusxalanadigan fayllar qayerdaligini bilolmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "-d",
    "name": "Detached Mode (Fon rejimida ishga tushirish)",
    "syntax": "docker run -d --name app1 sample-app:1.0",
    "purpose": "Konteynerni orqa fonda (background daemon) ishga tushiradi va terminalni bloklamasdan boshqaruvni foydalanuvchiga qaytaradi.",
    "withoutRisk": "Agar -d berilmasa, konteyner foreground (old) rejimda ochilib terminalni band qilib qo'yadi. Terminal yopilsa yoki Ctrl+C bosilsa, butun veb-server ham to'xtab qoladi."
  },
  {
    "cmd": "docker run",
    "flag": "--name",
    "name": "Container Name (Konteynerga nom berish)",
    "syntax": "docker run -d --name app1 sample-app:1.0",
    "purpose": "Konteynerga tasodifiy nom (masalan: cranky_darwin) o'rniga aniq mantiqiy nom (app1, mypg) beradi.",
    "withoutRisk": "Agar --name ko'rsatilmasa, Docker tasodifiy nom generatsiya qiladi. Keyingi skriptlar, stop/rm buyruqlari va loglarni ko'rishda konteynerni topish murakkablashadi."
  },
  {
    "cmd": "docker run",
    "flag": "-p 127.0.0.1:5000:5000",
    "name": "Port Publishing & Host Binding (Port yo'naltirish & IP chegaralash)",
    "syntax": "docker run -d -p 127.0.0.1:5000:5000 sample-app:1.0",
    "purpose": "Konteynerning ichki 5000-portini faqat lokal mashinaning (127.0.0.1) 5000-portiga bog'laydi.",
    "withoutRisk": "Agar '127.0.0.1:' qo'yilmay faqat '-p 5000:5000' berilsa, port barcha tashqi tarmoq interfeyslariga (0.0.0.0) ochilib ketadi va butun internetga xavfsizlik tahdidini tug'diradi."
  },
  {
    "cmd": "docker run",
    "flag": "-e",
    "name": "Environment Variable (Muhit o'zgaruvchisini o'rnatish)",
    "syntax": "docker run -d -e APP_ENV=dev sample-app:1.0",
    "purpose": "Konteyner ichidagi ilovaga muhit parametrini (masalan: APP_ENV=dev yoki POSTGRES_PASSWORD) uzatadi.",
    "withoutRisk": "Agar -e berilmasa, dastur Dockerfile'dagi default qiymatni oladi yoki PostgreSQL kabi ma'lumotlar bazasi parol berilmagani uchun darhol qulab (crash) to'xtaydi."
  },
  {
    "cmd": "docker run",
    "flag": "--rm",
    "name": "Auto-Remove (Tugagach o'z-o'zidan o'chirish)",
    "syntax": "docker run --rm --name japp java-multistage:1.0",
    "purpose": "Vazifasini bajarib bo'lgan konteyner to'xtashi bilan uning diskdagi qoldiqlarini avtomatik o'chirib tashlaydi.",
    "withoutRisk": "Agar qisqa muddatli bir martalik vazifalarda --rm qo'yilmasa, yuzlab o'lik (exited) konteynerlar to'planib qolib, disk maydonini to'ldirib yuboradi."
  },
  {
    "cmd": "docker run",
    "flag": "-v pgdata:/var/lib/postgresql/data",
    "name": "Volume Mount (Doimiy xotirani ulash)",
    "syntax": "docker run -d -v pgdata:/var/lib/postgresql/data postgres:15",
    "purpose": "Konteyner o'chirib yuborilsa ham, uning ma'lumotlar bazasi fayllari xostdagi 'pgdata' nomli hajmda omon qolishini ta'minlaydi.",
    "withoutRisk": "DIQQAT: Agar -v bo'lmasa, barcha jadvallar konteynerning vaqtinchalik yozish qatlamida (writable layer) saqlanadi. 'docker rm' bajarilishi bilan butun baza yo'qoladi!"
  },
  {
    "cmd": "docker exec",
    "flag": "-it",
    "name": "Interactive TTY (Interaktiv terminal rejimi)",
    "syntax": "docker exec -it app1 sh",
    "purpose": "Ishlab turgan konteyner ichida interaktiv buyruq qobig'ini (sh/bash) yoki dasturni (psql) ochadi.",
    "withoutRisk": "Agar -it (interactive + tty) berilmasa, kiritish oqimi (STDIN) ulanmaydi, terminal darhol yopiladi va konteyner ichida interaktiv buyruq kiritib bo'lmaydi."
  },
  {
    "cmd": "docker stats",
    "flag": "--no-stream",
    "name": "Static Snapshot (Bir martalik o'lchov olish)",
    "syntax": "docker stats --no-stream app1",
    "purpose": "Konteynerning CPU va RAM ishlatilishini jonli strim qilmasdan, aynan hozirgi lahzadagi bitta o'lchov natijasini chiqaradi.",
    "withoutRisk": "Agar --no-stream qo'yilmasa, buyruq terminalni cheksiz monitor rejimiga olib kiradi va avtomatlashtirish skriptlari uning tugashini kutib qotib qoladi."
  },
  {
    "cmd": "docker container ls",
    "flag": "-as",
    "name": "All Containers with Sizes (Barcha konteynerlar va hajmlar)",
    "syntax": "docker container ls -as",
    "purpose": "To'xtagan konteynerlarni ham chiqaradi va har bir konteynerning yoziladigan qatlami (writable layer) qancha disk egallaganini ko'rsatadi.",
    "withoutRisk": "Oddiy 'docker ps' faqat ishlab turganlarni ko'rsatadi va qaysi to'xtagan konteyner qancha disk joyini yeb yotganini aniqlab bo'lmaydi."
  },
  {
    "cmd": "docker volume",
    "flag": "create",
    "name": "Create Named Volume (Nomli doimiy hajm yaratish)",
    "syntax": "docker volume create pgdata",
    "purpose": "Docker tomonidan boshqariladigan mustaqil va xavfsiz fayl saqlash hududini barpo etadi.",
    "withoutRisk": "Hajm oldindan yaratilmasa yoki nazorat qilinmasa, anonim vaqtinchalik hajmlar hosil bo'lib, zaxira nusxa (backup) olish qiyinlashadi."
  },
  {
    "cmd": "docker volume",
    "flag": "rm",
    "name": "Remove Volume (Doimiy hajmni o'chirish)",
    "syntax": "docker volume rm pgdata",
    "purpose": "Foydalanilmayotgan doimiy ma'lumotlar hajmini diskdan butunlay tozalaydi.",
    "withoutRisk": "Hajmni o'chirishdan oldin konteyner to'xtatilib o'chirilgan bo'lishi kerak. Ehtiyotsizlik bilan ishlatilsa barcha saqlangan PostgreSQL ma'lumotlari ketadi."
  },
  {
    "cmd": "docker compose",
    "flag": "config",
    "name": "Validate Configuration (compose.yaml sintaksisini tekshirish)",
    "syntax": "docker compose config",
    "purpose": "compose.yaml faylidagi bo'shliqlar (indentation), portlar va o'zgaruvchilarni servislarni ishga tushirmasdan tekshiradi.",
    "withoutRisk": "Agar tekshirilmasa, noto'g'ri YAML tab/space xatosi tufayli konteynerlar yarimta ko'tarilib, nosozlik keltirib chiqaradi."
  },
  {
    "cmd": "docker compose",
    "flag": "up -d --build",
    "name": "Build & Detach Orchestration (Qurish va fonda ko'tarish)",
    "syntax": "docker compose up -d --build",
    "purpose": "Kod o'zgargan bo'lsa yangi obrazlarni quradi va barcha servislarni (web, db) fonda bir vaqtning o'zida ishga tushiradi.",
    "withoutRisk": "Agar --build qo'yilmasa, Docker Compose eski keshdagi obrazni ko'taradi va yangi kiritilgan kod o'zgarishlari kuchga kirmay qoladi."
  },
  {
    "cmd": "docker compose",
    "flag": "down",
    "name": "Tear Down Services (Servislarni xavfsiz to'xtatish)",
    "syntax": "docker compose down",
    "purpose": "Barcha konteynerlar va umumiy tarmoqni to'xtatib tozalaydi, lekin nomli ma'lumotlar bazasi hajmini saqlab qoladi.",
    "withoutRisk": "DIQQAT: Agar 'down -v' berilsa, hajmlar ham o'chib ketadi! Odatiy 'down' esa ma'lumotlarni xavfsiz saqlaydi."
  },
  {
    "cmd": "pip install",
    "flag": "--no-cache-dir",
    "name": "Disable Cache (Keshni o'chirish)",
    "syntax": "pip install --no-cache-dir -r requirements.txt",
    "purpose": "Yuklab olingan pip paketlarining g'ildiraklarini (wheels) keshga saqlamasdan, Docker obraz hajmini o'nlab megabaytga qisqartiradi.",
    "withoutRisk": "Agar --no-cache-dir bo'lmasa, ~/.cache papkasi Docker qatlamiga kirib, yakuniy obraz hajmini asossiz kattalashtirib yuboradi."
  },
  {
    "cmd": "psql",
    "flag": "-c",
    "name": "Command String (Bitta SQL so'rovini bajarish)",
    "syntax": "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\"",
    "purpose": "Interaktiv psql konsoliga kirmasdan, bitta SQL buyrug'ini bajarib natijani to'g'ridan-to'g'ri terminalga chiqaradi.",
    "withoutRisk": "Agar -c bo'lmasa, psql interaktiv sessiyani kutadi va avtomatlashtirilgan test skriptlari yoki terminal quvuri (pipe) to'xtab qoladi."
  },
  {
    "cmd": "curl",
    "flag": "-fsSL",
    "name": "Fail Silent Show-Error Follow-Location (Xavfsiz yuklab olish)",
    "syntax": "curl -fsSL https://get.docker.com -o get-docker.sh",
    "purpose": "HTTP xatolarida xatoni bildiradi (-f), progress barni yashiradi (-s), lekin nosozlik bo'lsa xatoni ko'rsatadi (-S) va redirectlarni kuzatadi (-L).",
    "withoutRisk": "Oddiy curl ishlatilsa, 404 HTML xato sahifasi ham skript fayliga yozilib qoladi va 'sh ./get-docker.sh' bajarilganda sintaksis halokati yuz beradi."
  },
  {
    "cmd": "usermod",
    "flag": "-L",
    "name": "Parolni qulflash (Lock)",
    "syntax": "usermod -L <username>",
    "purpose": "/etc/shadow faylidagi parollangan hash boshiga '!' belgisi qo'yib, hisobga kirishni zudlik bilan to'xtatadi.",
    "withoutRisk": "⚠️ AGAR -L BO'LMASA: Foydalanuvchi hisobi ochiq qoladi va parolini terib tizimga kirishda davom etaveradi!"
  },
  {
    "cmd": "usermod",
    "flag": "-U",
    "name": "Parol qulfini ochish (Unlock)",
    "syntax": "usermod -U <username>",
    "purpose": "/etc/shadow dagi hash boshidagi '!' belgisini olib tashlab, hisobni qayta faollashtiradi.",
    "withoutRisk": "⚠️ AGAR -U BO'LMASA: Foydalanuvchi qulflangan holatda qoladi va paroli to'g'ri bo'lsa ham tizimga kira olmaydi!"
  },
  {
    "cmd": "usermod",
    "flag": "-s",
    "name": "Boshlang'ich shellni o'zgartirish (Shell)",
    "syntax": "usermod -s /bin/bash <username>",
    "purpose": "Foydalanuvchi tizimga kirganda ishga tushadigan qobiqni (masalan, /bin/bash yoki /usr/sbin/nologin) belgilaydi.",
    "withoutRisk": "⚠️ AGAR -s BO'LMASA: Foydalanuvchining joriy shell dasturi o'zgarishsiz qoladi."
  },
  {
    "cmd": "usermod",
    "flag": "-c",
    "name": "Izoh va to'liq ism (Comment / GECOS)",
    "syntax": "usermod -c 'Alice Smith' <username>",
    "purpose": "/etc/passwd faylidagi 5-ustun (GECOS) ma'lumotini o'zgartiradi (xodim ismi, kabinet, telefon).",
    "withoutRisk": "⚠️ AGAR -c BO'LMASA: Tizim hisobi egasi kimligi noaniq bo'lib qoladi, audit tekshiruvi qiyinlashadi."
  },
  {
    "cmd": "usermod",
    "flag": "-m",
    "name": "Mavjud papkani yangi manzilga ko'chirish (Move home)",
    "syntax": "usermod -d /new/home -m <username>",
    "purpose": "Faqat -d bilan birga ishlaydi. Eski uydagi barcha fayllarni yangi /home manziliga jismonan ko'chiradi.",
    "withoutRisk": "⚠️ AGAR -m BO'LMASA: /etc/passwd da manzil o'zgaradi, lekin fayllar eski joyda qolib ketadi; foydalanuvchi hamma fayllarini 'yo'qotadi'!"
  },
  {
    "cmd": "useradd",
    "flag": "-m",
    "name": "Uy katalogini yaratish (Make home)",
    "syntax": "useradd -m <username>",
    "purpose": "/home/<username> papkasini avtomatik yaratadi va /etc/skel dan .bashrc, .profile fayllarini ko'chirib beradi.",
    "withoutRisk": "⚠️ AGAR -m BO'LMASA: Foydalanuvchining uy papkasi yaratilmaydi! Tizimga kirganda 'No directory, logging in with HOME=/' xatosi chiqadi!"
  },
  {
    "cmd": "useradd",
    "flag": "-G",
    "name": "Qo'shimcha guruhlarga biriktirish (Supplementary Groups)",
    "syntax": "useradd -m -G sudo,docker <username>",
    "purpose": "Foydalanuvchini asosiy guruhidan tashqari maxsus guruhlarga (sudo, devops) a'zo qiladi.",
    "withoutRisk": "⚠️ AGAR -G BO'LMASA: Foydalanuvchi faqat o'z shaxsiy guruhida qoladi, sudo yoki docker kabi imtiyozlarga ega bo'lmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "+t / 1777",
    "name": "Yopishqoq bit (Sticky Bit)",
    "syntax": "chmod +t /srv/project  YOKI  chmod 1777 /tmp",
    "purpose": "Umumiy papkada har kim fayl yarata oladi, lekin birovning faylini faqat o'sha fayl egasi yoki root o'chira oladi.",
    "withoutRisk": "⚠️ AGAR +t BO'LMASA: Har qanday foydalanuvchi boshqa hamkasblarining fayllarini qasddan yoki adashib o'chirib yuborishi mumkin!"
  },
  {
    "cmd": "chmod",
    "flag": "-R",
    "name": "Rekursiv qo'llash (Recursive)",
    "syntax": "chmod -R 755 /var/www",
    "purpose": "Katalog ichidagi barcha ichki papkalar va fayllarga ruxsatlarni bir vaqtda o'rnatadi.",
    "withoutRisk": "⚠️ AGAR -R BO'LMASA: Faqat tashqi katalogning ruxsati o'zgaradi, ichidagi barcha fayllar eski holicha qolib ketadi."
  },
  {
    "cmd": "gcc",
    "flag": "-Wall",
    "name": "Barcha ogohlantirishlar (Warnings: All)",
    "syntax": "gcc -Wall fork.c -o fork.out",
    "purpose": "Kompilyatorga kodda shubhali, ehtimoliy xato yoki xotira oqish holatlarini ogohlantirish sifatida ko'rsatishni buyuradi.",
    "withoutRisk": "⚠️ AGAR -Wall BO'LMASA: Kompilyator jiddiy mantig'iy xatolarni sukut saqlab o'tkazib yuboradi va dastur kutilmaganda halokatga uchraydi!"
  },
  {
    "cmd": "gcc",
    "flag": "-Wextra",
    "name": "Qo'shimcha qat'iy ogohlantirishlar (Warnings: Extra)",
    "syntax": "gcc -Wall -Wextra fork.c -o fork.out",
    "purpose": "Ishlatilmagan parametrlar, tiplar mos kelmasligi kabi nozik xatolarni ham topadi.",
    "withoutRisk": "⚠️ AGAR -Wextra BO'LMASA: Ishlab chiqarish darajasidagi nozik xatoliklar ko'zdan chetda qoladi."
  },
  {
    "cmd": "gcc",
    "flag": "-o",
    "name": "Chiquvchi ijrochi fayl nomi (Output)",
    "syntax": "gcc fork.c -o fork.out",
    "purpose": "Yaratiladigan binar dastur fayliga nom beradi (masalan, fork.out).",
    "withoutRisk": "⚠️ AGAR -o BO'LMASA: Gcc faylni sukut bo'yicha 'a.out' nomi bilan saqlaydi! Eski a.out dasturingiz ustiga yozilib yo'qoladi!"
  },
  {
    "cmd": "ulimit",
    "flag": "-u",
    "name": "Maksimal jarayonlar chegarasi (User process limit)",
    "syntax": "ulimit -u 50",
    "purpose": "Bitta foydalanuvchi ochishi mumkin bo'lgan maksimal protsesslar sonini cheklaydi.",
    "withoutRisk": "⚠️ AGAR -u BO'LMASA: Fork bomb yuz berganda protsesslar soni cheksiz ko'payib, butun Linux yadrosi (Kernel) qotib qoladi!"
  },
  {
    "cmd": "find",
    "flag": "-type f",
    "name": "Oddiy fayllar filtri (File type)",
    "syntax": "find /dir -type f -name '*.log'",
    "purpose": "Qidiruvni faqat oddiy matn/binar fayllar bilan cheklaydi (kataloglar, soketlar va havolalarni chetlab o'tadi).",
    "withoutRisk": "⚠️ AGAR -type f BO'LMASA: Kataloglarning o'zi ham qidiruvga tushadi; keyingi -delete buyrug'i butun boshli papkalarni o'chirib yuborishi mumkin!"
  },
  {
    "cmd": "find",
    "flag": "-mmin +10080",
    "name": "O'zgartirilgan vaqt daqiqalarda (Modified minutes)",
    "syntax": "find /dir -mmin +10080",
    "purpose": "+ belgisi 10,080 daqiqadan (aniq 7 kundan) ko'proq oldin o'zgartirilgan eski fayllarni bildiradi.",
    "withoutRisk": "⚠️ AGAR + ISHORASI BO'LMASA: '+10080' o'rniga '-10080' yozilsa, yangi (oxirgi 7 kundagi) dolzarb loglar tanlanib, xatoga olib keladi!"
  },
  {
    "cmd": "find",
    "flag": "-ls",
    "name": "Batafsil ro'yxat formatida chiqarish (List format)",
    "syntax": "find /dir -name '*.log' -ls",
    "purpose": "Topilgan har bir faylning inode, ruxsatlari, egasi, hajmi va sanasini to'liq ko'rsatadi.",
    "withoutRisk": "⚠️ AGAR -ls BO'LMASA: Find faqat fayllarning nomini quruq matn sifatida chiqaradi, ularning hajmi va sanasini ko'rib bo'lmaydi."
  },
  {
    "cmd": "find",
    "flag": "-maxdepth 1",
    "name": "Qidiruv chuqurligini cheklash (Max depth)",
    "syntax": "find /dir -maxdepth 1 -name '*.log'",
    "purpose": "Qidiruvni faqat ko'rsatilgan joriy papka bilan cheklaydi, ichki papkalar (subdirectories) ichiga kirmaydi.",
    "withoutRisk": "⚠️ AGAR -maxdepth 1 BO'LMASA: Barcha ichki arxiv papkalardagi loglar ham rekursiv topilib, siqilib yoki o'chib ketadi!"
  },
  {
    "cmd": "find",
    "flag": "-print0",
    "name": "NUL bayt ajratgich bilan chiqarish (NUL Delimiter)",
    "syntax": "find /dir -name '*.log' -print0",
    "purpose": "Fayl nomlarini yangi satr (\\n) o'rniga \\0 (NUL bayt) bilan ajratadi. Nomi bo'sh joyli (spaces) fayllarni xavfsiz uzatadi.",
    "withoutRisk": "⚠️ AGAR -print0 BO'LMASA: Fayl nomida bo'sh joy bo'lsa (masalan, 'my log.txt'), tsikl uni 'my' va 'log.txt' deb 2 ta xato faylga bo'lib yuboradi!"
  },
  {
    "cmd": "curl",
    "flag": "-f / --fail",
    "name": "Server xatolarida jimgina to'xtash (Fail on HTTP error)",
    "syntax": "curl -f -o file.html https://site.com",
    "purpose": "HTTP 404 (Not Found) yoki 500 xatolarida chiquvchi faylga xato sahifasini yozmasdan, darhol xato kodi (exit != 0) qaytaradi.",
    "withoutRisk": "⚠️ AGAR -f BO'LMASA: Server 404 xato bersa ham, curl o'sha xatolik HTML matnini yuklab olib, dasturingiz uni 'muvaffaqiyatli' deb o'ylaydi!"
  },
  {
    "cmd": "curl",
    "flag": "-L / --location",
    "name": "Qayta yo'naltirishlarga ergashish (Follow Location)",
    "syntax": "curl -L -o file.tar.gz https://site.com/download",
    "purpose": "Server 301 yoki 302 qayta yo'naltirish (Redirect) berganda yangi manzilga avtomatik o'tib yuklashni davom ettiradi.",
    "withoutRisk": "⚠️ AGAR -L BO'LMASA: Curl faqat '301 Moved Permanently' degan 0 baytli bo'sh javobni saqlaydi, kerakli fayl yuklanmay qoladi!"
  },
  {
    "cmd": "curl",
    "flag": "-s / --silent",
    "name": "Jim rejim (Silent mode)",
    "syntax": "curl -s https://site.com",
    "purpose": "Progress bar va yuklanish foizlarini ekranga chiqarmaydi (avtomatlashtirilgan skriptlar logini toza saqlash uchun).",
    "withoutRisk": "⚠️ AGAR -s BO'LMASA: Terminal har soniyada foizlar bilan to'lib, haqiqiy foydali loglar ko'rinmay ketadi."
  },
  {
    "cmd": "curl",
    "flag": "-S / --show-error",
    "name": "Xatolikni baribir ko'rsatish (Show error on failure)",
    "syntax": "curl -sS https://site.com",
    "purpose": "-s (jim rejim) bilan birga ishlatilganda, agar yuklash barbod bo'lsa, xatolik sababini ekranga chiqaradi.",
    "withoutRisk": "⚠️ AGAR -S BO'LMASA: -s berilganda xato bo'lsa ham terminal hech narsa aytmaydi, nima buzilganini bilib bo'lmaydi!"
  },
  {
    "cmd": "curl",
    "flag": "--max-time",
    "name": "Maksimal kutish vaqti soniyalarda (Timeout)",
    "syntax": "curl --max-time 30 https://site.com",
    "purpose": "Agar server 30 soniyada javob bermasa, ulanishni to'xtatadi.",
    "withoutRisk": "⚠️ AGAR --max-time BO'LMASA: Server qotib qolsa, butun avtomatlashtirilgan skriptingiz abadiy kutish rejimida muzlab qoladi!"
  },
  {
    "cmd": "curl",
    "flag": "--",
    "name": "Bayroqlar tugash belgisi (End of options)",
    "syntax": "curl -fLsS -o file -- '$url'",
    "purpose": "Keyingi keladigan parametr minus (-) belgisi bilan boshlansa ham, uni bayroq emas, URL deb qabul qilishni kafolatlaydi.",
    "withoutRisk": "⚠️ AGAR -- BO'LMASA: Agar URL '-bad-url' ko'rinishida bo'lsa, curl uni noto'g'ri bayroq deb hisoblab halokatga uchraydi!"
  },
  {
    "cmd": "read",
    "flag": "-r",
    "name": "Xom qator (Raw input)",
    "syntax": "read -r line",
    "purpose": "Kiritilgan matndagi teskari slesh (\\) belgilarini buzmasdan o'z holicha saqlaydi.",
    "withoutRisk": "⚠️ AGAR -r BO'LMASA: 'C:\\Users' yoki '\\n' kabi belgilar yo'qolib yoki buzilib ketadi!"
  },
  {
    "cmd": "read",
    "flag": "-p",
    "name": "Foydalanuvchiga savol matni (Prompt)",
    "syntax": "read -r -p 'Ismingiz: ' name",
    "purpose": "Foydalanuvchidan ma'lumot so'rashdan oldin ekranga taklif matnini chiqaradi.",
    "withoutRisk": "⚠️ AGAR -p BO'LMASA: Terminal bo'sh turadi, foydalanuvchi tizim nimani kutayotganini tushunmay qoladi."
  },
  {
    "cmd": "read",
    "flag": "-d ''",
    "name": "Ajratuvchi belgi (Delimiter NUL)",
    "syntax": "read -r -d '' file",
    "purpose": "Yangi satr o'rniga NUL (\\0) baytini qator oxiri deb hisoblaydi (find -print0 bilan tandemda ishlaydi).",
    "withoutRisk": "⚠️ AGAR -d '' BO'LMASA: Fayl nomida yangi qator yoki probel bo'lsa, xato o'qiladi."
  },
  {
    "cmd": "df",
    "flag": "-P",
    "name": "POSIX formati (Standard POSIX output)",
    "syntax": "df -P /",
    "purpose": "Har bir disk bo'limini aniq bitta satrga chiqarishni kafolatlaydi (uzun nomli disklarda satr bo'linib ketmaydi).",
    "withoutRisk": "⚠️ AGAR -P BO'LMASA: Uzun nomli fayl tizimlari 2 satrga bo'linadi va 'awk $5' foiz o'rniga bo'sh satr o'qib xatoga uchraydi!"
  },
  {
    "cmd": "tee",
    "flag": "-a",
    "name": "Fayl oxiriga qo'shish (Append)",
    "syntax": "echo 'alert' | tee -a alert.log",
    "purpose": "Chiqarilgan xabarni ham ekranga ko'rsatadi, ham mavjud log faylining oxiriga qo'shib saqlaydi.",
    "withoutRisk": "⚠️ AGAR -a BO'LMASA: Tee faylni boshidan tozalab yuboradi (overwrite) va barcha eski tarixiy xabarlar o'chib ketadi!"
  },
  {
    "cmd": "systemctl",
    "flag": "--user",
    "name": "Foydalanuvchi darajasi (User instance)",
    "syntax": "systemctl --user start os-seminar-tick.timer",
    "purpose": "Xizmatni oddiy foydalanuvchi sessiyasida (root huquqisiz) boshqarishni ta'minlaydi.",
    "withoutRisk": "⚠️ AGAR --user BO'LMASA: Tizim root parolini so'raydi yoki 'Permission denied' xatosi bilan to'xtaydi!"
  },
  {
    "cmd": "systemctl",
    "flag": "is-active --quiet",
    "name": "Sokin faollik tekshiruvi (Silent active check)",
    "syntax": "systemctl is-active --quiet cron.service",
    "purpose": "Ekranga 'active' yoki 'inactive' deb yozmasdan, faqat exit kod orqali (0 = faol, 3 = to'xtagan) javob beradi.",
    "withoutRisk": "⚠️ AGAR --quiet BO'LMASA: Terminalda keraksiz 'active' so'zi chiqib, skript loglariga xalaqit beradi."
  },
  {
    "cmd": "journalctl",
    "flag": "--no-pager",
    "name": "Matnni to'liq oqimda chiqarish (No pager)",
    "syntax": "journalctl --user -u service -n 10 --no-pager",
    "purpose": "Loglarni 'less' kabi interaktiv ko'rish oynasiga yo'naltirmasdan, to'g'ridan-to'g'ri terminalga to'kadi.",
    "withoutRisk": "⚠️ AGAR --no-pager BO'LMASA: Skript 'less' interfeysida qotib qoladi va foydalanuvchi 'q' tugmasini bosmaguncha davom etmaydi!"
  },
  {
    "cmd": "pwd",
    "flag": "-L",
    "name": "Print Working Directory (Joriy Katalogni Ko'rsatish) (-L)",
    "syntax": "pwd -L",
    "purpose": "Mantiqiy yo'lni chiqarish (simvolik havolalar hisobga olinadi)",
    "withoutRisk": "Agar -L bayrog'i berilmasa, pwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pwd",
    "flag": "-P",
    "name": "Print Working Directory (Joriy Katalogni Ko'rsatish) (-P)",
    "syntax": "pwd -P",
    "purpose": "Fizik real yo'lni chiqarish (barcha simvolik havolalarni ochib beradi)",
    "withoutRisk": "Agar -P bayrog'i berilmasa, pwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-a",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-a)",
    "syntax": "ls -a",
    "purpose": "Barcha fayllarni, jumladan nuqta bilan boshlanuvchi yashirin (.bashrc) fayllarni ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-l",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-l)",
    "syntax": "ls -l",
    "purpose": "Uzoq format: ruxsatlar, bog'lamlar soni, egasi, hajmi va sanasi bilan ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-h",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-h)",
    "syntax": "ls -h",
    "purpose": "Inson tushunadigan o'lchov birliklarida (K, M, G) chiqarish (-l bilan birga)",
    "withoutRisk": "Agar -h bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-i",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-i)",
    "syntax": "ls -i",
    "purpose": "Har bir faylning Inode (identifikatsiya) raqamini chiqarish",
    "withoutRisk": "Agar -i bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-R",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-R)",
    "syntax": "ls -R",
    "purpose": "Rekursiv ravishda barcha ichki papkalarni ham chiqarish",
    "withoutRisk": "Agar -R bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ls",
    "flag": "-t",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish) (-t)",
    "syntax": "ls -t",
    "purpose": "O'zgartirilgan vaqti bo'yicha tartiblash (eng yangilari yuqorida)",
    "withoutRisk": "Agar -t bayrog'i berilmasa, ls buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "~",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (~)",
    "syntax": "cd ~",
    "purpose": "Foydalanuvchining uy katalogiga (/home/user) o'tish",
    "withoutRisk": "Agar ~ bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "..",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (..)",
    "syntax": "cd ..",
    "purpose": "Bitta yuqori darajadagi ota papkaga qaytish",
    "withoutRisk": "Agar .. bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "-",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (-)",
    "syntax": "cd -",
    "purpose": "Oldingi turgan katalogga qaytish",
    "withoutRisk": "Agar - bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cd",
    "flag": "/",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish) (/)",
    "syntax": "cd /",
    "purpose": "Ildiz (root) katalogiga o'tish",
    "withoutRisk": "Agar / bayrog'i berilmasa, cd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkdir",
    "flag": "-p",
    "name": "Make Directory (Yangi Papka Yaratish) (-p)",
    "syntax": "mkdir -p",
    "purpose": "Zarur bo'lsa barcha oraliq (ota) papkalarni bir vaqtda yaratish (parents)",
    "withoutRisk": "Agar -p bayrog'i berilmasa, mkdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkdir",
    "flag": "-m",
    "name": "Make Directory (Yangi Papka Yaratish) (-m)",
    "syntax": "mkdir -m",
    "purpose": "Yaratilayotgan papkaga darhol maxsus ruxsat o'rnatish (masalan: -m 755)",
    "withoutRisk": "Agar -m bayrog'i berilmasa, mkdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkdir",
    "flag": "-v",
    "name": "Make Directory (Yangi Papka Yaratish) (-v)",
    "syntax": "mkdir -v",
    "purpose": "Har bir yaratilgan papka haqida xabar chiqarish (verbose)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, mkdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rmdir",
    "flag": "-p",
    "name": "Remove Empty Directory (Bo'sh Papkani O'chirish) (-p)",
    "syntax": "rmdir -p",
    "purpose": "Bo'sh bo'lib qolgan ota papkalarni ham rekursiv o'chirish",
    "withoutRisk": "Agar -p bayrog'i berilmasa, rmdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rmdir",
    "flag": "-v",
    "name": "Remove Empty Directory (Bo'sh Papkani O'chirish) (-v)",
    "syntax": "rmdir -v",
    "purpose": "Har bir o'chirilgan papka haqida batafsil ma'lumot berish",
    "withoutRisk": "Agar -v bayrog'i berilmasa, rmdir buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-a",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-a)",
    "syntax": "touch -a",
    "purpose": "Faqat kirish (access) vaqtini o'zgartirish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-m",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-m)",
    "syntax": "touch -m",
    "purpose": "Faqat modifikatsiya (o'zgartirish) vaqtini o'zgartirish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-c",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-c)",
    "syntax": "touch -c",
    "purpose": "Fayl mavjud bo'lmasa uni yangidan yaratmaslik",
    "withoutRisk": "Agar -c bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "touch",
    "flag": "-d",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash) (-d)",
    "syntax": "touch -d",
    "purpose": "Maxsus sana/vaqt belgilash (masalan: touch -d 'yesterday' file)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, touch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rm",
    "flag": "-r, -R",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish) (-r, -R)",
    "syntax": "rm -r, -R",
    "purpose": "Rekursiv ravishda papka va uning barcha ichidagi narsalarini o'chirish",
    "withoutRisk": "Agar -r, -R bayrog'i berilmasa, rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rm",
    "flag": "-f",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish) (-f)",
    "syntax": "rm -f",
    "purpose": "Majburiy (force) o'chirish, tasdiq so'ramaslik va xatoliklarni yashirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rm",
    "flag": "-i",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish) (-i)",
    "syntax": "rm -i",
    "purpose": "Har bir faylni o'chirishdan oldin foydalanuvchidan tasdiq so'rash",
    "withoutRisk": "Agar -i bayrog'i berilmasa, rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-r, -R",
    "name": "Copy Files and Directories (Nusxalash) (-r, -R)",
    "syntax": "cp -r, -R",
    "purpose": "Papkani barcha ichki elementlari bilan birga rekursiv nusxalash",
    "withoutRisk": "Agar -r, -R bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-p",
    "name": "Copy Files and Directories (Nusxalash) (-p)",
    "syntax": "cp -p",
    "purpose": "Faylning asl ruxsatlari, egasi va vaqt tamg'alarini saqlab qolish (preserve)",
    "withoutRisk": "Agar -p bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-a",
    "name": "Copy Files and Directories (Nusxalash) (-a)",
    "syntax": "cp -a",
    "purpose": "Arxiv rejimi (-rpP barchasini o'z ichiga oladi)",
    "withoutRisk": "Agar -a bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cp",
    "flag": "-u",
    "name": "Copy Files and Directories (Nusxalash) (-u)",
    "syntax": "cp -u",
    "purpose": "Faqat nishondan yangiroq bo'lgan manba fayllarni yangilash (update)",
    "withoutRisk": "Agar -u bayrog'i berilmasa, cp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mv",
    "flag": "-i",
    "name": "Move / Rename Files (Ko'chirish yoki Qayta Nomlash) (-i)",
    "syntax": "mv -i",
    "purpose": "Mavjud faylni ustiga yozishdan oldin so'rash (interactive)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, mv buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mv",
    "flag": "-f",
    "name": "Move / Rename Files (Ko'chirish yoki Qayta Nomlash) (-f)",
    "syntax": "mv -f",
    "purpose": "So'rovsiz ustiga yozish (force)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, mv buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mv",
    "flag": "-n",
    "name": "Move / Rename Files (Ko'chirish yoki Qayta Nomlash) (-n)",
    "syntax": "mv -n",
    "purpose": "Mavjud fayllarni hech qachon almashtirmaslik (no-clobber)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, mv buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ln",
    "flag": "-s",
    "name": "Link Files (Bog'lamlar: Hard Link va Soft Link) (-s)",
    "syntax": "ln -s",
    "purpose": "Simvolik (Soft) havola yaratish (Windowsdagi yorliq/shortcut kabi)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, ln buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ln",
    "flag": "-f",
    "name": "Link Files (Bog'lamlar: Hard Link va Soft Link) (-f)",
    "syntax": "ln -f",
    "purpose": "Mavjud nishon faylni majburiy almashtirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, ln buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ln",
    "flag": "-v",
    "name": "Link Files (Bog'lamlar: Hard Link va Soft Link) (-v)",
    "syntax": "ln -v",
    "purpose": "Har bir yaratilgan bog'lam haqida ma'lumot berish",
    "withoutRisk": "Agar -v bayrog'i berilmasa, ln buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "stat",
    "flag": "-c",
    "name": "File / File System Status (Inode va Metama'lumotlarni Ko'rish) (-c)",
    "syntax": "stat -c",
    "purpose": "Maxsus formatda ma'lumot olish (masalan: %i Inode, %a huquqlar)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, stat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "stat",
    "flag": "-f",
    "name": "File / File System Status (Inode va Metama'lumotlarni Ko'rish) (-f)",
    "syntax": "stat -f",
    "purpose": "Faylning o'zi emas, u joylashgan butun fayl tizimi statistikasini ko'rsatish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, stat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "file",
    "flag": "-b",
    "name": "Determine File Type (Fayl Tipini Anqlash) (-b)",
    "syntax": "file -b",
    "purpose": "Qisqa rejim: fayl nomini chiqarmasdan faqat tipini ko'rsatish (brief)",
    "withoutRisk": "Agar -b bayrog'i berilmasa, file buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "file",
    "flag": "-i",
    "name": "Determine File Type (Fayl Tipini Anqlash) (-i)",
    "syntax": "file -i",
    "purpose": "MIME formatida chiqarish (masalan: text/plain; charset=utf-8)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, file buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-name",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-name)",
    "syntax": "find -name",
    "purpose": "Fayl nomi bo'yicha qidirish (katta-kichik harfga sezgir)",
    "withoutRisk": "Agar -name bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-iname",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-iname)",
    "syntax": "find -iname",
    "purpose": "Harf registrini hisobga olmasdan qidirish",
    "withoutRisk": "Agar -iname bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-type",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-type)",
    "syntax": "find -type",
    "purpose": "Fayl turi bo'yicha: f (oddiy fayl), d (papka), l (symlink)",
    "withoutRisk": "Agar -type bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-size",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-size)",
    "syntax": "find -size",
    "purpose": "Hajmi bo'yicha: +100M (100MB dan katta), -5k (5KB dan kichik)",
    "withoutRisk": "Agar -size bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-mtime",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-mtime)",
    "syntax": "find -mtime",
    "purpose": "O'zgartirilgan kunlari bo'yicha (-7 so'nggi 7 kunda)",
    "withoutRisk": "Agar -mtime bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-inum",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-inum)",
    "syntax": "find -inum",
    "purpose": "Aynan ma'lum bir Inode raqamiga ega faylni topish",
    "withoutRisk": "Agar -inum bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "find",
    "flag": "-exec",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish) (-exec)",
    "syntax": "find -exec",
    "purpose": "Topilgan har bir fayl ustida buyruq bajarish (-exec rm {} \\;)",
    "withoutRisk": "Agar -exec bayrog'i berilmasa, find buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "locate",
    "flag": "-i",
    "name": "Find Files by Name Database (Tezkor Indekslangan Qidiruv) (-i)",
    "syntax": "locate -i",
    "purpose": "Katta-kichik harflarni farqlamaslik (ignore case)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, locate buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "locate",
    "flag": "-n",
    "name": "Find Files by Name Database (Tezkor Indekslangan Qidiruv) (-n)",
    "syntax": "locate -n",
    "purpose": "Chiqariladigan natijalar sonini cheklash (masalan: -n 5)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, locate buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "locate",
    "flag": "-c",
    "name": "Find Files by Name Database (Tezkor Indekslangan Qidiruv) (-c)",
    "syntax": "locate -c",
    "purpose": "Topilgan fayllar sonini chiqarish",
    "withoutRisk": "Agar -c bayrog'i berilmasa, locate buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "which",
    "flag": "-a",
    "name": "Locate a Command Executable ($PATH Bo'ylab Qidirish) (-a)",
    "syntax": "which -a",
    "purpose": "$PATH ichida topilgan barcha mos keluvchi ijrochi fayllarni chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, which buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "whereis",
    "flag": "-b",
    "name": "Locate Binary, Source, and Manual Pages (Hujjat va Dasturni Topish) (-b)",
    "syntax": "whereis -b",
    "purpose": "Faqat binary (ijro fayli) qismini qidirish",
    "withoutRisk": "Agar -b bayrog'i berilmasa, whereis buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "whereis",
    "flag": "-m",
    "name": "Locate Binary, Source, and Manual Pages (Hujjat va Dasturni Topish) (-m)",
    "syntax": "whereis -m",
    "purpose": "Faqat man qo'llanmalari bo'limini qidirish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, whereis buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tree",
    "flag": "-L N",
    "name": "List Directory Contents as a Tree (Daraxtsimon Ierarxiya) (-L N)",
    "syntax": "tree -L N",
    "purpose": "Daraxt chuqurligini N qavatgacha cheklash (level)",
    "withoutRisk": "Agar -L N bayrog'i berilmasa, tree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tree",
    "flag": "-d",
    "name": "List Directory Contents as a Tree (Daraxtsimon Ierarxiya) (-d)",
    "syntax": "tree -d",
    "purpose": "Faqat papkalarni ko'rsatish, fayllarni yashirish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, tree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tree",
    "flag": "-a",
    "name": "List Directory Contents as a Tree (Daraxtsimon Ierarxiya) (-a)",
    "syntax": "tree -a",
    "purpose": "Yashirin fayllarni ham chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, tree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "basename",
    "flag": "-a",
    "name": "Strip Directory and Suffix from Filenames (Fayl Nomini Ajratish) (-a)",
    "syntax": "basename -a",
    "purpose": "Bir nechta argumentlarni bir vaqtda qabul qilish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, basename buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "realpath",
    "flag": "-e",
    "name": "Print Resolved Absolute Path (To'liq Haqiqiy Yo'l) (-e)",
    "syntax": "realpath -e",
    "purpose": "Fayl mavjud bo'lishi shartligini tekshirish",
    "withoutRisk": "Agar -e bayrog'i berilmasa, realpath buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "realpath",
    "flag": "-q",
    "name": "Print Resolved Absolute Path (To'liq Haqiqiy Yo'l) (-q)",
    "syntax": "realpath -q",
    "purpose": "Xatoliklar chiqarmaslik (quiet)",
    "withoutRisk": "Agar -q bayrog'i berilmasa, realpath buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cat",
    "flag": "-n",
    "name": "Concatenate and Display Files (Fayl Tarkibini Chiqarish) (-n)",
    "syntax": "cat -n",
    "purpose": "Barcha qatorlarni 1 dan boshlab raqamlash",
    "withoutRisk": "Agar -n bayrog'i berilmasa, cat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cat",
    "flag": "-b",
    "name": "Concatenate and Display Files (Fayl Tarkibini Chiqarish) (-b)",
    "syntax": "cat -b",
    "purpose": "Faqat bo'sh bo'lmagan qatorlarni raqamlash",
    "withoutRisk": "Agar -b bayrog'i berilmasa, cat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cat",
    "flag": "-A",
    "name": "Concatenate and Display Files (Fayl Tarkibini Chiqarish) (-A)",
    "syntax": "cat -A",
    "purpose": "Ko'rinmas belgilarni (tab, qator oxiri $) ko'rsatish",
    "withoutRisk": "Agar -A bayrog'i berilmasa, cat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "head",
    "flag": "-n N",
    "name": "Output First Part of Files (Dastlabki Qatorlarni Ko'rish) (-n N)",
    "syntax": "head -n N",
    "purpose": "Aynan N ta dastlabki qatorni chiqarish (masalan: -n 5)",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, head buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "head",
    "flag": "-c N",
    "name": "Output First Part of Files (Dastlabki Qatorlarni Ko'rish) (-c N)",
    "syntax": "head -c N",
    "purpose": "Dastlabki N ta baytni chiqarish",
    "withoutRisk": "Agar -c N bayrog'i berilmasa, head buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tail",
    "flag": "-n N",
    "name": "Output Last Part of Files (Oxirgi Qatorlar va Jonli Loglar) (-n N)",
    "syntax": "tail -n N",
    "purpose": "Oxirgi N ta qatorni chiqarish (masalan: -n 20)",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, tail buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tail",
    "flag": "-f",
    "name": "Output Last Part of Files (Oxirgi Qatorlar va Jonli Loglar) (-f)",
    "syntax": "tail -f",
    "purpose": "Faylga yangi qatorlar qo'shilganda ularni jonli ekranga chiqarib turish (follow)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, tail buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "less",
    "flag": "-N",
    "name": "Opposite of More / Interactive Pager (Qulay Matn Ko'rgich) (-N)",
    "syntax": "less -N",
    "purpose": "Qator raqamlarini chiqarish",
    "withoutRisk": "Agar -N bayrog'i berilmasa, less buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "less",
    "flag": "-S",
    "name": "Opposite of More / Interactive Pager (Qulay Matn Ko'rgich) (-S)",
    "syntax": "less -S",
    "purpose": "Uzun qatorlarni pastga tushirmasdan kesish (chop long lines)",
    "withoutRisk": "Agar -S bayrog'i berilmasa, less buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "more",
    "flag": "-d",
    "name": "File Page by Page Filter (Oddiy Sahifalash) (-d)",
    "syntax": "more -d",
    "purpose": "Foydalanuvchiga yordamchi tugmalar ko'rsatmasini berish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, more buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-i",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-i)",
    "syntax": "grep -i",
    "purpose": "Harflar registrini (katta/kichik) farqlamaslik (ignore case)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-v",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-v)",
    "syntax": "grep -v",
    "purpose": "Inversiya: mos KELMAGAN qatorlarni chiqarish (invert match)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-r, -R",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-r, -R)",
    "syntax": "grep -r, -R",
    "purpose": "Barcha ichki papkalardagi fayllarni rekursiv qidirish",
    "withoutRisk": "Agar -r, -R bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-n",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-n)",
    "syntax": "grep -n",
    "purpose": "Mos kelgan qator raqamini ham ko'rsatish",
    "withoutRisk": "Agar -n bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-c",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-c)",
    "syntax": "grep -c",
    "purpose": "Faqat mos kelgan qatorlar sonini chiqarish",
    "withoutRisk": "Agar -c bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-E",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-E)",
    "syntax": "grep -E",
    "purpose": "Kengaytirilgan muntazam ifodalar (ERE) rejimi (egrep)",
    "withoutRisk": "Agar -E bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "grep",
    "flag": "-o",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish) (-o)",
    "syntax": "grep -o",
    "purpose": "Butun qatorni emas, faqat mos kelgan bo'lagini chiqarish",
    "withoutRisk": "Agar -o bayrog'i berilmasa, grep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sed",
    "flag": "-i",
    "name": "Stream Editor (Oqimli Matn Tahrirchisi) (-i)",
    "syntax": "sed -i",
    "purpose": "Faylni to'g'ridan-to'g'ri joyida (in-place) o'zgartirib saqlash",
    "withoutRisk": "Agar -i bayrog'i berilmasa, sed buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sed",
    "flag": "-e",
    "name": "Stream Editor (Oqimli Matn Tahrirchisi) (-e)",
    "syntax": "sed -e",
    "purpose": "Bir nechta sed amallarini ketma-ket bajarish",
    "withoutRisk": "Agar -e bayrog'i berilmasa, sed buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sed",
    "flag": "-n",
    "name": "Stream Editor (Oqimli Matn Tahrirchisi) (-n)",
    "syntax": "sed -n",
    "purpose": "Standart chiqarishni bostirish (faqat 'p' buyrug'i bilan ko'rsatish)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, sed buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "awk",
    "flag": "-F 'AJRATUVCHI'",
    "name": "Pattern Scanning and Processing Language (Matn va Jadval Dasturlash Tili) (-F 'AJRATUVCHI')",
    "syntax": "awk -F 'AJRATUVCHI'",
    "purpose": "Ustunlar ajratuvchisini belgilash (masalan: -F ':' /etc/passwd uchun)",
    "withoutRisk": "Agar -F 'AJRATUVCHI' bayrog'i berilmasa, awk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "awk",
    "flag": "-v O'ZGARUVCHI=QIYMAT",
    "name": "Pattern Scanning and Processing Language (Matn va Jadval Dasturlash Tili) (-v O'ZGARUVCHI=QIYMAT)",
    "syntax": "awk -v O'ZGARUVCHI=QIYMAT",
    "purpose": "Awk ichiga tashqi o'zgaruvchi uzatish",
    "withoutRisk": "Agar -v O'ZGARUVCHI=QIYMAT bayrog'i berilmasa, awk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cut",
    "flag": "-d 'BELGI'",
    "name": "Remove Sections from Each Line (Ustunlarni Qirqib Olish) (-d 'BELGI')",
    "syntax": "cut -d 'BELGI'",
    "purpose": "Maydonlar ajratuvchisini belgilash (delimiter, masalan: -d ':')",
    "withoutRisk": "Agar -d 'BELGI' bayrog'i berilmasa, cut buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cut",
    "flag": "-f RO'YXAT",
    "name": "Remove Sections from Each Line (Ustunlarni Qirqib Olish) (-f RO'YXAT)",
    "syntax": "cut -f RO'YXAT",
    "purpose": "Aynan qaysi ustunlarni olish (masalan: -f 1,3 yoki -f 1-5)",
    "withoutRisk": "Agar -f RO'YXAT bayrog'i berilmasa, cut buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cut",
    "flag": "-c RO'YXAT",
    "name": "Remove Sections from Each Line (Ustunlarni Qirqib Olish) (-c RO'YXAT)",
    "syntax": "cut -c RO'YXAT",
    "purpose": "Belgilar pozitsiyasi bo'yicha qirqish (characters)",
    "withoutRisk": "Agar -c RO'YXAT bayrog'i berilmasa, cut buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-n",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-n)",
    "syntax": "sort -n",
    "purpose": "Raqamli qiymatlar bo'yicha tartiblash (1, 2, 10 tartibida, 1, 10, 2 emas)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-r",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-r)",
    "syntax": "sort -r",
    "purpose": "Teskari (kamayish) tartibda saralash (reverse)",
    "withoutRisk": "Agar -r bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-k N",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-k N)",
    "syntax": "sort -k N",
    "purpose": "Aynan N-ustun bo'yicha saralash",
    "withoutRisk": "Agar -k N bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sort",
    "flag": "-u",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash) (-u)",
    "syntax": "sort -u",
    "purpose": "Faqat takrorlanmas noyob qatorlarni qoldirish (unique)",
    "withoutRisk": "Agar -u bayrog'i berilmasa, sort buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uniq",
    "flag": "-c",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash) (-c)",
    "syntax": "uniq -c",
    "purpose": "Har bir qator necha marta takrorlanganini hisoblab yoniga yozish (count)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, uniq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uniq",
    "flag": "-d",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash) (-d)",
    "syntax": "uniq -d",
    "purpose": "Faqat takrorlangan (dublikat) qatorlarni ko'rsatish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, uniq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uniq",
    "flag": "-u",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash) (-u)",
    "syntax": "uniq -u",
    "purpose": "Faqat mutlaqo takrorlanmagan yakka qatorlarni ko'rsatish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, uniq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "tr",
    "flag": "-s",
    "name": "Translate or Delete Characters (Belgilarni Almashtirish/O'chirish) (-s)",
    "syntax": "tr -s",
    "purpose": "Ketma-ket takrorlangan belgilarni bittaga qisqartirish (squeeze)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, tr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-l",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-l)",
    "syntax": "wc -l",
    "purpose": "Faqat qatorlar sonini chiqarish (lines) — skriptlarda eng ko'p ishlatiladi",
    "withoutRisk": "Agar -l bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-w",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-w)",
    "syntax": "wc -w",
    "purpose": "Faqat so'zlar sonini chiqarish (words)",
    "withoutRisk": "Agar -w bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-c",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-c)",
    "syntax": "wc -c",
    "purpose": "Faqat baytlar sonini chiqarish (bytes)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wc",
    "flag": "-m",
    "name": "Word, Line, Character, Byte Count (Hisoblagich) (-m)",
    "syntax": "wc -m",
    "purpose": "Belgilar sonini chiqarish (characters)",
    "withoutRisk": "Agar -m bayrog'i berilmasa, wc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "xargs",
    "flag": "-I {}",
    "name": "Build and Execute Command Lines from stdin (Argumentlarga Aylantiruvchi) (-I {})",
    "syntax": "xargs -I {}",
    "purpose": "Har bir element uchun maxsus o'rnini bosuvchi belgilash (placeholder)",
    "withoutRisk": "Agar -I {} bayrog'i berilmasa, xargs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "xargs",
    "flag": "-n N",
    "name": "Build and Execute Command Lines from stdin (Argumentlarga Aylantiruvchi) (-n N)",
    "syntax": "xargs -n N",
    "purpose": "Bitta chaqiriqda ko'pi bilan N ta argument uzatish",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, xargs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "xargs",
    "flag": "-P N",
    "name": "Build and Execute Command Lines from stdin (Argumentlarga Aylantiruvchi) (-P N)",
    "syntax": "xargs -P N",
    "purpose": "N ta parallel jarayonda ishga tushirish (tezlashtirish)",
    "withoutRisk": "Agar -P N bayrog'i berilmasa, xargs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "diff",
    "flag": "-u",
    "name": "Compare Files Line by Line (Farqlarni Aniqlash) (-u)",
    "syntax": "diff -u",
    "purpose": "Unifikatsiyalangan (Git uslubidagi) qulay ko'rinishda chiqarish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, diff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "diff",
    "flag": "-y",
    "name": "Compare Files Line by Line (Farqlarni Aniqlash) (-y)",
    "syntax": "diff -y",
    "purpose": "Ekranni ikkiga bo'lib yonma-yon ko'rsatish (side-by-side)",
    "withoutRisk": "Agar -y bayrog'i berilmasa, diff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "diff",
    "flag": "-w",
    "name": "Compare Files Line by Line (Farqlarni Aniqlash) (-w)",
    "syntax": "diff -w",
    "purpose": "Barcha probel va bo'shliqlarni e'tiborsiz qoldirish",
    "withoutRisk": "Agar -w bayrog'i berilmasa, diff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cmp",
    "flag": "-l",
    "name": "Compare Two Files Byte by Byte (Baytma-bayt Solishtirish) (-l)",
    "syntax": "cmp -l",
    "purpose": "Farq qiluvchi barcha baytlar raqamini chiqarish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, cmp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "cmp",
    "flag": "-s",
    "name": "Compare Two Files Byte by Byte (Baytma-bayt Solishtirish) (-s)",
    "syntax": "cmp -s",
    "purpose": "Hech narsa chiqarmaslik, faqat chiqish kodi ($?) bilan javob berish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, cmp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strings",
    "flag": "-n N",
    "name": "Find Printable Strings in Binary Files (Binar Fayldan Matn Ajratish) (-n N)",
    "syntax": "strings -n N",
    "purpose": "Kamida N ta belgidan iborat so'zlarni qidirish (sukut bo'yicha 4)",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, strings buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "paste",
    "flag": "-d 'BELGI'",
    "name": "Merge Lines of Files (Fayllarni Yonma-Yon Birlashtirish) (-d 'BELGI')",
    "syntax": "paste -d 'BELGI'",
    "purpose": "Qatorlar orasiga qo'yiladigan ajratuvchini belgilash (masalan: -d ',')",
    "withoutRisk": "Agar -d 'BELGI' bayrog'i berilmasa, paste buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "paste",
    "flag": "-s",
    "name": "Merge Lines of Files (Fayllarni Yonma-Yon Birlashtirish) (-s)",
    "syntax": "paste -s",
    "purpose": "Ketma-ket bitta faylni bitta qatorga yoyish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, paste buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "split",
    "flag": "-b N",
    "name": "Split a File into Pieces (Katta Faylni Bo'laklarga Bo'lish) (-b N)",
    "syntax": "split -b N",
    "purpose": "Har bir bo'lak hajmini belgilash (masalan: -b 100M)",
    "withoutRisk": "Agar -b N bayrog'i berilmasa, split buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "split",
    "flag": "-l N",
    "name": "Split a File into Pieces (Katta Faylni Bo'laklarga Bo'lish) (-l N)",
    "syntax": "split -l N",
    "purpose": "Har bir bo'lak qatorlar sonini belgilash (masalan: -l 1000)",
    "withoutRisk": "Agar -l N bayrog'i berilmasa, split buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "split",
    "flag": "-d",
    "name": "Split a File into Pieces (Katta Faylni Bo'laklarga Bo'lish) (-d)",
    "syntax": "split -d",
    "purpose": "Harflar o'rniga raqamli suffikslardan foydalanish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, split buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "755",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (755)",
    "syntax": "chmod 755",
    "purpose": "Egasi to'liq (rwx), guruh va boshqalar faqat o'qish va kirish (r-x)",
    "withoutRisk": "Agar 755 bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "644",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (644)",
    "syntax": "chmod 644",
    "purpose": "Egasi o'qish-yozish (rw-), qolganlar faqat o'qish (r--)",
    "withoutRisk": "Agar 644 bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "777",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (777)",
    "syntax": "chmod 777",
    "purpose": "Hamma uchun barcha ruxsatlar (xavfli!)",
    "withoutRisk": "Agar 777 bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "+x",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (+x)",
    "syntax": "chmod +x",
    "purpose": "Skriptga ijro etish huquqini qo'shish",
    "withoutRisk": "Agar +x bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chmod",
    "flag": "+t",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish) (+t)",
    "syntax": "chmod +t",
    "purpose": "Sticky Bit o'rnatish (/tmp kabi, faqat fayl egasi o'chira oladi)",
    "withoutRisk": "Agar +t bayrog'i berilmasa, chmod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chown",
    "flag": "-R",
    "name": "Change File Owner and Group (Fayl Egasini O'zgartirish) (-R)",
    "syntax": "chown -R",
    "purpose": "Rekursiv ravishda papka ichidagi barcha fayllarga o'rnatish",
    "withoutRisk": "Agar -R bayrog'i berilmasa, chown buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chown",
    "flag": "-v",
    "name": "Change File Owner and Group (Fayl Egasini O'zgartirish) (-v)",
    "syntax": "chown -v",
    "purpose": "O'zgargan har bir fayl haqida ma'lumot berish",
    "withoutRisk": "Agar -v bayrog'i berilmasa, chown buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chgrp",
    "flag": "-R",
    "name": "Change Group Ownership (Fayl Guruhini O'zgartirish) (-R)",
    "syntax": "chgrp -R",
    "purpose": "Rekursiv guruh o'zgartirish",
    "withoutRisk": "Agar -R bayrog'i berilmasa, chgrp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "umask",
    "flag": "-S",
    "name": "User File Creation Mask (Yangi Fayllar Maskasi) (-S)",
    "syntax": "umask -S",
    "purpose": "Maskani ramziy ko'rinishda ko'rish (masalan: u=rwx,g=rx,o=rx)",
    "withoutRisk": "Agar -S bayrog'i berilmasa, umask buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "useradd",
    "flag": "-s SHELL",
    "name": "Create a New User (Yangi Foydalanuvchi Yaratish) (-s SHELL)",
    "syntax": "useradd -s SHELL",
    "purpose": "Sukut bo'yicha shellni belgilash (masalan: -s /bin/bash)",
    "withoutRisk": "Agar -s SHELL bayrog'i berilmasa, useradd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "useradd",
    "flag": "-g GURUH",
    "name": "Create a New User (Yangi Foydalanuvchi Yaratish) (-g GURUH)",
    "syntax": "useradd -g GURUH",
    "purpose": "Asosiy birlamchi guruhni belgilash",
    "withoutRisk": "Agar -g GURUH bayrog'i berilmasa, useradd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "useradd",
    "flag": "-G GURUHLAR",
    "name": "Create a New User (Yangi Foydalanuvchi Yaratish) (-G GURUHLAR)",
    "syntax": "useradd -G GURUHLAR",
    "purpose": "Qo'shimcha ikkilamchi guruhlar ro'yxati (masalan: -G sudo,docker)",
    "withoutRisk": "Agar -G GURUHLAR bayrog'i berilmasa, useradd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "usermod",
    "flag": "-aG GURUH",
    "name": "Modify a User Account (Foydalanuvchini Tahrirlash) (-aG GURUH)",
    "syntax": "usermod -aG GURUH",
    "purpose": "Eski guruhlarini o'chirmasdan yangi guruhga qo'shish (append group)",
    "withoutRisk": "Agar -aG GURUH bayrog'i berilmasa, usermod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "usermod",
    "flag": "-s SHELL",
    "name": "Modify a User Account (Foydalanuvchini Tahrirlash) (-s SHELL)",
    "syntax": "usermod -s SHELL",
    "purpose": "Yangi standart shell tayinlash",
    "withoutRisk": "Agar -s SHELL bayrog'i berilmasa, usermod buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "userdel",
    "flag": "-r",
    "name": "Delete a User Account (Foydalanuvchini O'chirish) (-r)",
    "syntax": "userdel -r",
    "purpose": "Foydalanuvchining uy papkasi (/home/user) va pochta qutisini ham o'chirish",
    "withoutRisk": "Agar -r bayrog'i berilmasa, userdel buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "groupadd",
    "flag": "-g GID",
    "name": "Create a User Group (Yangi Guruh Yaratish) (-g GID)",
    "syntax": "groupadd -g GID",
    "purpose": "Guruhga maxsus GID raqamini belgilash",
    "withoutRisk": "Agar -g GID bayrog'i berilmasa, groupadd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "passwd",
    "flag": "-l",
    "name": "Change User Password (Parolni O'zgartirish) (-l)",
    "syntax": "passwd -l",
    "purpose": "Parolni bloklash (lock)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, passwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "passwd",
    "flag": "-u",
    "name": "Change User Password (Parolni O'zgartirish) (-u)",
    "syntax": "passwd -u",
    "purpose": "Parolni blokdan chiqarish (unlock)",
    "withoutRisk": "Agar -u bayrog'i berilmasa, passwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "passwd",
    "flag": "-d",
    "name": "Change User Password (Parolni O'zgartirish) (-d)",
    "syntax": "passwd -d",
    "purpose": "Parolni butunlay olib tashlash (parolsiz kirish)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, passwd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "su",
    "flag": "-",
    "name": "Substitute User Identity (Boshqa Foydalanuvchiga O'tish) (-)",
    "syntax": "su -",
    "purpose": "Foydalanuvchining to'liq muhitini (environment, $PATH, $HOME) yuklab o'tish (login shell)",
    "withoutRisk": "Agar - bayrog'i berilmasa, su buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sudo",
    "flag": "-i",
    "name": "Execute a Command as Another User / Root (Superfoydalanuvchi Huquqi) (-i)",
    "syntax": "sudo -i",
    "purpose": "Root foydalanuvchisining interaktiv login shellini ochish",
    "withoutRisk": "Agar -i bayrog'i berilmasa, sudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sudo",
    "flag": "-u USER",
    "name": "Execute a Command as Another User / Root (Superfoydalanuvchi Huquqi) (-u USER)",
    "syntax": "sudo -u USER",
    "purpose": "Root emas, aynan ko'rsatilgan foydalanuvchi nomidan buyruq bajarish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, sudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sudo",
    "flag": "-l",
    "name": "Execute a Command as Another User / Root (Superfoydalanuvchi Huquqi) (-l)",
    "syntax": "sudo -l",
    "purpose": "Joriy foydalanuvchi qaysi buyruqlarni sudo orqali bajara olishini ko'rish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, sudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "id",
    "flag": "-u",
    "name": "Print Real and Effective User and Group IDs (ID larni Ko'rish) (-u)",
    "syntax": "id -u",
    "purpose": "Faqat UID raqamini chiqarish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, id buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "id",
    "flag": "-g",
    "name": "Print Real and Effective User and Group IDs (ID larni Ko'rish) (-g)",
    "syntax": "id -g",
    "purpose": "Faqat asosiy GID raqamini chiqarish",
    "withoutRisk": "Agar -g bayrog'i berilmasa, id buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "id",
    "flag": "-un",
    "name": "Print Real and Effective User and Group IDs (ID larni Ko'rish) (-un)",
    "syntax": "id -un",
    "purpose": "Raqam o'rniga foydalanuvchi nomini chiqarish",
    "withoutRisk": "Agar -un bayrog'i berilmasa, id buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "visudo",
    "flag": "-c",
    "name": "Edit the Sudoers File Safely (Sudoers Faylini Xavfsiz Tahrirlash) (-c)",
    "syntax": "visudo -c",
    "purpose": "Tahrirlamasdan faqat sintaksisni tekshirish (check only)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, visudo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "setfacl",
    "flag": "-m u:USER:rwx",
    "name": "Set File Access Control Lists (Kengaytirilgan Ruxsatlar O'rnatish) (-m u:USER:rwx)",
    "syntax": "setfacl -m u:USER:rwx",
    "purpose": "Ko'rsatilgan foydalanuvchiga alohida ruxsat berish (modify)",
    "withoutRisk": "Agar -m u:USER:rwx bayrog'i berilmasa, setfacl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "setfacl",
    "flag": "-x u:USER",
    "name": "Set File Access Control Lists (Kengaytirilgan Ruxsatlar O'rnatish) (-x u:USER)",
    "syntax": "setfacl -x u:USER",
    "purpose": "Foydalanuvchining maxsus ACL huquqini olib tashlash",
    "withoutRisk": "Agar -x u:USER bayrog'i berilmasa, setfacl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "setfacl",
    "flag": "-b",
    "name": "Set File Access Control Lists (Kengaytirilgan Ruxsatlar O'rnatish) (-b)",
    "syntax": "setfacl -b",
    "purpose": "Barcha qo'shimcha ACL huquqlarini tozalash",
    "withoutRisk": "Agar -b bayrog'i berilmasa, setfacl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ps",
    "flag": "aux",
    "name": "Report Process Status (Jarayonlar Holati) (aux)",
    "syntax": "ps aux",
    "purpose": "BSD formati: barcha foydalanuvchilarning barcha jarayonlarini to'liq chiqarish",
    "withoutRisk": "Agar aux bayrog'i berilmasa, ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ps",
    "flag": "-ef",
    "name": "Report Process Status (Jarayonlar Holati) (-ef)",
    "syntax": "ps -ef",
    "purpose": "Standart UNIX formati: to'liq ro'yxat va ota jarayonlar (PPID)",
    "withoutRisk": "Agar -ef bayrog'i berilmasa, ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ps",
    "flag": "-u USER",
    "name": "Report Process Status (Jarayonlar Holati) (-u USER)",
    "syntax": "ps -u USER",
    "purpose": "Faqat ko'rsatilgan foydalanuvchi jarayonlarini ko'rish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "top",
    "flag": "-d N",
    "name": "Display Linux Processes (Jonli Tizim Monitori) (-d N)",
    "syntax": "top -d N",
    "purpose": "Yangilanish oralig'ini N soniya qilib belgilash",
    "withoutRisk": "Agar -d N bayrog'i berilmasa, top buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "top",
    "flag": "-u USER",
    "name": "Display Linux Processes (Jonli Tizim Monitori) (-u USER)",
    "syntax": "top -u USER",
    "purpose": "Faqat ma'lum bir foydalanuvchi jarayonlarini ko'rsatish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, top buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-15 (SIGTERM)",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-15 (SIGTERM))",
    "syntax": "kill -15 (SIGTERM)",
    "purpose": "Yumshoq to'xtatish (jarayonga o'z ishini saqlab toza yopilish imkoni beriladi)",
    "withoutRisk": "Agar -15 (SIGTERM) bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-9 (SIGKILL)",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-9 (SIGKILL))",
    "syntax": "kill -9 (SIGKILL)",
    "purpose": "Majburiy o'ldirish (yadro darajasida darhol to'xtatiladi, inkor qilib bo'lmaydi)",
    "withoutRisk": "Agar -9 (SIGKILL) bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-1 (SIGHUP)",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-1 (SIGHUP))",
    "syntax": "kill -1 (SIGHUP)",
    "purpose": "Konfiguratsiyani qayta yuklash (reload)",
    "withoutRisk": "Agar -1 (SIGHUP) bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "kill",
    "flag": "-l",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish) (-l)",
    "syntax": "kill -l",
    "purpose": "Barcha mavjud signallar ro'yxatini chiqarish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, kill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "killall",
    "flag": "-9",
    "name": "Kill Processes by Name (Nomi Bo'yicha Barchasini O'ldirish) (-9)",
    "syntax": "killall -9",
    "purpose": "Majburiy SIGKILL signali bilan o'ldirish",
    "withoutRisk": "Agar -9 bayrog'i berilmasa, killall buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "killall",
    "flag": "-u USER",
    "name": "Kill Processes by Name (Nomi Bo'yicha Barchasini O'ldirish) (-u USER)",
    "syntax": "killall -u USER",
    "purpose": "Faqat ko'rsatilgan foydalanuvchiga tegishli jarayonlarni o'ldirish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, killall buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pkill",
    "flag": "-f",
    "name": "Signal Processes Based on Name (Naqsh Bo'yicha Signal Yuborish) (-f)",
    "syntax": "pkill -f",
    "purpose": "Faqat jarayon nomini emas, butun buyruq qatorini (command line) tekshirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, pkill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pkill",
    "flag": "-u USER",
    "name": "Signal Processes Based on Name (Naqsh Bo'yicha Signal Yuborish) (-u USER)",
    "syntax": "pkill -u USER",
    "purpose": "Aynan ma'lum bir foydalanuvchi nomini cheklash",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, pkill buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pgrep",
    "flag": "-l",
    "name": "Look up Processes Based on Name (Jarayon PID larini Topish) (-l)",
    "syntax": "pgrep -l",
    "purpose": "PID yonida jarayon nomini ham ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, pgrep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pgrep",
    "flag": "-a",
    "name": "Look up Processes Based on Name (Jarayon PID larini Topish) (-a)",
    "syntax": "pgrep -a",
    "purpose": "To'liq buyruq qatorini ham chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, pgrep buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nice",
    "flag": "-n 19",
    "name": "Run with Modified Scheduling Priority (Prioritet Bilan Boshlash) (-n 19)",
    "syntax": "nice -n 19",
    "purpose": "Eng past ustuvorlik (orqa fonda kompyuterni qotirmasdan ishlash)",
    "withoutRisk": "Agar -n 19 bayrog'i berilmasa, nice buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nice",
    "flag": "-n -10",
    "name": "Run with Modified Scheduling Priority (Prioritet Bilan Boshlash) (-n -10)",
    "syntax": "nice -n -10",
    "purpose": "Yuqori ustuvorlik (faqat root ruxsat bera oladi)",
    "withoutRisk": "Agar -n -10 bayrog'i berilmasa, nice buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "renice",
    "flag": "-u USER",
    "name": "Alter Priority of Running Processes (Ishlab Turgan Jarayon Prioritetini O'zgartirish) (-u USER)",
    "syntax": "renice -u USER",
    "purpose": "Foydalanuvchining barcha jarayonlari prioritetini o'zgartirish",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, renice buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "jobs",
    "flag": "-l",
    "name": "List Active Jobs (Joriy Terminal Vazifalarini Ko'rish) (-l)",
    "syntax": "jobs -l",
    "purpose": "Topshiriq raqami yonida uning haqiqiy PID raqamini ham ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, jobs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pstree",
    "flag": "-p",
    "name": "Display a Tree of Processes (Ota-Bola Jarayonlar Shajarasi) (-p)",
    "syntax": "pstree -p",
    "purpose": "Har bir jarayon nomi yonida uning PID raqamini ko'rsatish",
    "withoutRisk": "Agar -p bayrog'i berilmasa, pstree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pstree",
    "flag": "-u",
    "name": "Display a Tree of Processes (Ota-Bola Jarayonlar Shajarasi) (-u)",
    "syntax": "pstree -u",
    "purpose": "Foydalanuvchi o'zgargan nuqtalarni ko'rsatish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, pstree buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fork",
    "flag": "pid > 0",
    "name": "Fork System Call (Jarayon Klonlash / Nusxa Yaratish) (pid > 0)",
    "syntax": "fork pid > 0",
    "purpose": "Ota jarayon kodi bajarilmoqda (pid - bola jarayon raqami)",
    "withoutRisk": "Agar pid > 0 bayrog'i berilmasa, fork buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fork",
    "flag": "pid == 0",
    "name": "Fork System Call (Jarayon Klonlash / Nusxa Yaratish) (pid == 0)",
    "syntax": "fork pid == 0",
    "purpose": "Yangi tug'ilgan bola jarayon kodi bajarilmoqda",
    "withoutRisk": "Agar pid == 0 bayrog'i berilmasa, fork buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fork",
    "flag": "pid < 0",
    "name": "Fork System Call (Jarayon Klonlash / Nusxa Yaratish) (pid < 0)",
    "syntax": "fork pid < 0",
    "purpose": "Xatolik! Yangi jarayon yaratish uchun xotira yetmadi",
    "withoutRisk": "Agar pid < 0 bayrog'i berilmasa, fork buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "waitpid",
    "flag": "WNOHANG",
    "name": "Wait for Process State Change (Bola Jarayonni Kutish) (WNOHANG)",
    "syntax": "waitpid WNOHANG",
    "purpose": "Bola hali tugamagan bo'lsa otani qotirmasdan darhol qaytish",
    "withoutRisk": "Agar WNOHANG bayrog'i berilmasa, waitpid buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strace",
    "flag": "-e trace=open,read",
    "name": "Trace System Calls and Signals (Tizim Chaqiriqlarini Kuzatish) (-e trace=open,read)",
    "syntax": "strace -e trace=open,read",
    "purpose": "Faqat ma'lum turdagi tizim chaqiriqlarini filtrlab ko'rsatish",
    "withoutRisk": "Agar -e trace=open,read bayrog'i berilmasa, strace buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strace",
    "flag": "-p PID",
    "name": "Trace System Calls and Signals (Tizim Chaqiriqlarini Kuzatish) (-p PID)",
    "syntax": "strace -p PID",
    "purpose": "Ishlab turgan begona jarayonga ulanib uning qo'ng'iroqlarini kuzatish",
    "withoutRisk": "Agar -p PID bayrog'i berilmasa, strace buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "strace",
    "flag": "-c",
    "name": "Trace System Calls and Signals (Tizim Chaqiriqlarini Kuzatish) (-c)",
    "syntax": "strace -c",
    "purpose": "Chaqiriqlar soni va vaqti bo'yicha yakuniy statistik jadval chiqarish",
    "withoutRisk": "Agar -c bayrog'i berilmasa, strace buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dmesg",
    "flag": "-T",
    "name": "Print Kernel Ring Buffer (Yadro Xabarlarini O'qish) (-T)",
    "syntax": "dmesg -T",
    "purpose": "Vaqt tamg'alarini inson tushunadigan sana ko'rinishida chiqarish",
    "withoutRisk": "Agar -T bayrog'i berilmasa, dmesg buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dmesg",
    "flag": "-l err,warn",
    "name": "Print Kernel Ring Buffer (Yadro Xabarlarini O'qish) (-l err,warn)",
    "syntax": "dmesg -l err,warn",
    "purpose": "Faqat jiddiy xato va ogohlantirishlarni filtrlash",
    "withoutRisk": "Agar -l err,warn bayrog'i berilmasa, dmesg buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dmesg",
    "flag": "-w",
    "name": "Print Kernel Ring Buffer (Yadro Xabarlarini O'qish) (-w)",
    "syntax": "dmesg -w",
    "purpose": "Yangi kelgan yadro xabarlarini jonli kuzatib turish",
    "withoutRisk": "Agar -w bayrog'i berilmasa, dmesg buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uname",
    "flag": "-a",
    "name": "Print System Information (Yadro va OT Ma'lumotlari) (-a)",
    "syntax": "uname -a",
    "purpose": "Barcha ma'lumotlarni to'liq chiqarish (all)",
    "withoutRisk": "Agar -a bayrog'i berilmasa, uname buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uname",
    "flag": "-r",
    "name": "Print System Information (Yadro va OT Ma'lumotlari) (-r)",
    "syntax": "uname -r",
    "purpose": "Faqat Linux yadrosi versiyasini chiqarish (kernel release)",
    "withoutRisk": "Agar -r bayrog'i berilmasa, uname buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uname",
    "flag": "-m",
    "name": "Print System Information (Yadro va OT Ma'lumotlari) (-m)",
    "syntax": "uname -m",
    "purpose": "Mashina arxitekturasini chiqarish (masalan: x86_64)",
    "withoutRisk": "Agar -m bayrog'i berilmasa, uname buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "free",
    "flag": "-h",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira Holati) (-h)",
    "syntax": "free -h",
    "purpose": "Inson tushunadigan formatda (GB, MB) chiqarish (human-readable)",
    "withoutRisk": "Agar -h bayrog'i berilmasa, free buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "free",
    "flag": "-m",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira Holati) (-m)",
    "syntax": "free -m",
    "purpose": "Megabaytlarda chiqarish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, free buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "free",
    "flag": "-s N",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira Holati) (-s N)",
    "syntax": "free -s N",
    "purpose": "Har N soniyada yangilab turish",
    "withoutRisk": "Agar -s N bayrog'i berilmasa, free buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "vmstat",
    "flag": "-s",
    "name": "Report Virtual Memory Statistics (Virtual Xotira Tahlili) (-s)",
    "syntax": "vmstat -s",
    "purpose": "Barcha xotira hodisalari bo'yicha jami hisoblagichlarni chiqarish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, vmstat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "vmstat",
    "flag": "-d",
    "name": "Report Virtual Memory Statistics (Virtual Xotira Tahlili) (-d)",
    "syntax": "vmstat -d",
    "purpose": "Disk faolligi statistikasini alohida chiqarish",
    "withoutRisk": "Agar -d bayrog'i berilmasa, vmstat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pmap",
    "flag": "-x",
    "name": "Report Memory Map of a Process (Jarayon Xotira Xaritasi) (-x)",
    "syntax": "pmap -x",
    "purpose": "Kengaytirilgan format: RSS (fizik xotira) va Dirty xotirani ham ko'rsatish",
    "withoutRisk": "Agar -x bayrog'i berilmasa, pmap buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "swapon",
    "flag": "-a",
    "name": "Enable Devices and Files for Paging (Swap Qismini Faollashtirish) (-a)",
    "syntax": "swapon -a",
    "purpose": "/etc/fstab dagi barcha belgilangan Swap bo'limlarini yoqish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, swapon buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "swapon",
    "flag": "--show",
    "name": "Enable Devices and Files for Paging (Swap Qismini Faollashtirish) (--show)",
    "syntax": "swapon --show",
    "purpose": "Faol Swap bo'limlari ro'yxati va ularning bandligini jadval ko'rinishida ko'rsatish",
    "withoutRisk": "Agar --show bayrog'i berilmasa, swapon buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "swapoff",
    "flag": "-a",
    "name": "Disable Devices and Files for Paging (Swapni O'chirish) (-a)",
    "syntax": "swapoff -a",
    "purpose": "Barcha faol Swap bo'limlarini o'chirish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, swapoff buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "df",
    "flag": "-h",
    "name": "Report File System Disk Space Usage (Disk Hajmi va Inodelar) (-h)",
    "syntax": "df -h",
    "purpose": "Inson tushunadigan formatda (GB, MB) chiqarish",
    "withoutRisk": "Agar -h bayrog'i berilmasa, df buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "df",
    "flag": "-i",
    "name": "Report File System Disk Space Usage (Disk Hajmi va Inodelar) (-i)",
    "syntax": "df -i",
    "purpose": "Bo'sh baytlarni emas, balki erkin Inodelar sonini tekshirish (juda muhim!)",
    "withoutRisk": "Agar -i bayrog'i berilmasa, df buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "df",
    "flag": "-T",
    "name": "Report File System Disk Space Usage (Disk Hajmi va Inodelar) (-T)",
    "syntax": "df -T",
    "purpose": "Fayl tizimi turini ham (ext4, xfs, btrfs) ko'rsatish",
    "withoutRisk": "Agar -T bayrog'i berilmasa, df buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "du",
    "flag": "-s",
    "name": "Estimate File Space Usage (Papka va Fayllar Hajmini O'lchash) (-s)",
    "syntax": "du -s",
    "purpose": "Faqat umumiy yig'indi hajmni chiqarish (summary)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, du buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "du",
    "flag": "-h",
    "name": "Estimate File Space Usage (Papka va Fayllar Hajmini O'lchash) (-h)",
    "syntax": "du -h",
    "purpose": "O'qish oson bo'lgan birliklarda (K, M, G) ko'rsatish",
    "withoutRisk": "Agar -h bayrog'i berilmasa, du buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "du",
    "flag": "-d N",
    "name": "Estimate File Space Usage (Papka va Fayllar Hajmini O'lchash) (-d N)",
    "syntax": "du -d N",
    "purpose": "Papkalar chuqurligini N qavatgacha cheklash (max-depth)",
    "withoutRisk": "Agar -d N bayrog'i berilmasa, du buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mount",
    "flag": "-t TUR",
    "name": "Mount a File System (Fayl Tizimini Ulash) (-t TUR)",
    "syntax": "mount -t TUR",
    "purpose": "Fayl tizimi turini ko'rsatish (ext4, ntfs, iso9660, nfs)",
    "withoutRisk": "Agar -t TUR bayrog'i berilmasa, mount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mount",
    "flag": "-o VARIANTLAR",
    "name": "Mount a File System (Fayl Tizimini Ulash) (-o VARIANTLAR)",
    "syntax": "mount -o VARIANTLAR",
    "purpose": "Qo'shimcha parametrlar (ro=faqat o'qish, rw=o'qish-yozish, noexec)",
    "withoutRisk": "Agar -o VARIANTLAR bayrog'i berilmasa, mount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "umount",
    "flag": "-l",
    "name": "Unmount File Systems (Fayl Tizimini Xavfsiz Uzish) (-l)",
    "syntax": "umount -l",
    "purpose": "Band bo'lsa ham fon rejimida darhol xavfsiz uzish (lazy unmount)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, umount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "umount",
    "flag": "-f",
    "name": "Unmount File Systems (Fayl Tizimini Xavfsiz Uzish) (-f)",
    "syntax": "umount -f",
    "purpose": "Tarmoq diski javob bermay qotganda majburiy uzish (force)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, umount buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsblk",
    "flag": "-f",
    "name": "List Block Devices (Blok Qurilmalari va Disk Bo'limlari) (-f)",
    "syntax": "lsblk -f",
    "purpose": "Fayl tizimi turlari (FSTYPE) va UUID raqamlarini ham ko'rsatish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, lsblk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsblk",
    "flag": "-m",
    "name": "List Block Devices (Blok Qurilmalari va Disk Bo'limlari) (-m)",
    "syntax": "lsblk -m",
    "purpose": "Ruxsatlar va egalik huquqlari bilan chiqarish",
    "withoutRisk": "Agar -m bayrog'i berilmasa, lsblk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fdisk",
    "flag": "-l",
    "name": "Manipulate Disk Partition Table (Disk Bo'limlari Ustasi) (-l)",
    "syntax": "fdisk -l",
    "purpose": "Tizimdagi barcha disklar va ularning bo'limlar jadvalini chiqarish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, fdisk buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkfs",
    "flag": "-t ext4",
    "name": "Build a Linux File System (Formatlash va Fayl Tizimi Yaratish) (-t ext4)",
    "syntax": "mkfs -t ext4",
    "purpose": "ext4 fayl tizimini yaratish",
    "withoutRisk": "Agar -t ext4 bayrog'i berilmasa, mkfs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "mkfs",
    "flag": "-t vfat",
    "name": "Build a Linux File System (Formatlash va Fayl Tizimi Yaratish) (-t vfat)",
    "syntax": "mkfs -t vfat",
    "purpose": "Barcha tizimlar (Windows/Mac/Linux) tushunadigan FAT formatlash",
    "withoutRisk": "Agar -t vfat bayrog'i berilmasa, mkfs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fsck",
    "flag": "-y",
    "name": "Check and Repair a Linux File System (Fayl Tizimini Tekshirish va Davolash) (-y)",
    "syntax": "fsck -y",
    "purpose": "Barcha tuzatish savollariga avtomatik 'Ha' deb javob berish",
    "withoutRisk": "Agar -y bayrog'i berilmasa, fsck buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "fsck",
    "flag": "-f",
    "name": "Check and Repair a Linux File System (Fayl Tizimini Tekshirish va Davolash) (-f)",
    "syntax": "fsck -f",
    "purpose": "Fayl tizimi toza deb belgilangan bo'lsa ham majburiy tekshirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, fsck buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "if=FILE",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (if=FILE)",
    "syntax": "dd if=FILE",
    "purpose": "Kirish manbasi (Input File, masalan: if=debian.iso)",
    "withoutRisk": "Agar if=FILE bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "of=DEVICE",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (of=DEVICE)",
    "syntax": "dd of=DEVICE",
    "purpose": "Chiqish qurilmasi (Output File, masalan: of=/dev/sdc)",
    "withoutRisk": "Agar of=DEVICE bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "bs=4M",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (bs=4M)",
    "syntax": "dd bs=4M",
    "purpose": "Bitta blok hajmini 4MB qilib belgilash (tezlikni oshiradi)",
    "withoutRisk": "Agar bs=4M bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dd",
    "flag": "status=progress",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash) (status=progress)",
    "syntax": "dd status=progress",
    "purpose": "Nusxalanish jarayonini jonli ko'rsatib turish",
    "withoutRisk": "Agar status=progress bayrog'i berilmasa, dd buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ip",
    "flag": "a / addr",
    "name": "Show / Manipulate Routing, Devices, Interfaces (Tarmoq Boshqaruvi) (a / addr)",
    "syntax": "ip a / addr",
    "purpose": "Barcha interfeyslarning IP manzillarini ko'rsatish",
    "withoutRisk": "Agar a / addr bayrog'i berilmasa, ip buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ip",
    "flag": "r / route",
    "name": "Show / Manipulate Routing, Devices, Interfaces (Tarmoq Boshqaruvi) (r / route)",
    "syntax": "ip r / route",
    "purpose": "Standart shlyuz (gateway) va yo'nalishlar jadvalini ko'rish",
    "withoutRisk": "Agar r / route bayrog'i berilmasa, ip buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ip",
    "flag": "link set dev UP/DOWN",
    "name": "Show / Manipulate Routing, Devices, Interfaces (Tarmoq Boshqaruvi) (link set dev UP/DOWN)",
    "syntax": "ip link set dev UP/DOWN",
    "purpose": "Tarmoq kartasini yoqish yoki o'chirish",
    "withoutRisk": "Agar link set dev UP/DOWN bayrog'i berilmasa, ip buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ping",
    "flag": "-c N",
    "name": "Send ICMP ECHO_REQUEST to Network Hosts (Aloqani Tekshirish) (-c N)",
    "syntax": "ping -c N",
    "purpose": "N ta so'rov yuborgandan so'ng to'xtash (Linuxda to'xtovsiz ketadi)",
    "withoutRisk": "Agar -c N bayrog'i berilmasa, ping buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ping",
    "flag": "-i SEK",
    "name": "Send ICMP ECHO_REQUEST to Network Hosts (Aloqani Tekshirish) (-i SEK)",
    "syntax": "ping -i SEK",
    "purpose": "So'rovlar orasidagi tanaffus vaqti",
    "withoutRisk": "Agar -i SEK bayrog'i berilmasa, ping buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-t",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-t)",
    "syntax": "ss -t",
    "purpose": "Faqat TCP ulanishlarni ko'rsatish",
    "withoutRisk": "Agar -t bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-u",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-u)",
    "syntax": "ss -u",
    "purpose": "Faqat UDP ulanishlarni ko'rsatish",
    "withoutRisk": "Agar -u bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-l",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-l)",
    "syntax": "ss -l",
    "purpose": "Faqat tinglayotgan (listening) ochiq portlarni ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-n",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-n)",
    "syntax": "ss -n",
    "purpose": "Nomlar emas, raqamli portlarni ko'rsatish (masalan: 80, 443, 22)",
    "withoutRisk": "Agar -n bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ss",
    "flag": "-p",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar) (-p)",
    "syntax": "ss -p",
    "purpose": "Qaysi jarayon (PID va dastur) portni ushlab turganini ko'rsatish",
    "withoutRisk": "Agar -p bayrog'i berilmasa, ss buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "netstat",
    "flag": "-tulpn",
    "name": "Network Statistics (Klassik Tarmoq Monitori) (-tulpn)",
    "syntax": "netstat -tulpn",
    "purpose": "TCP, UDP, tinglovchi portlar, raqamlar va jarayonlar",
    "withoutRisk": "Agar -tulpn bayrog'i berilmasa, netstat buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-I",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-I)",
    "syntax": "curl -I",
    "purpose": "Faqat HTTP sarlavhalarini (headers: 200 OK, 404) olish",
    "withoutRisk": "Agar -I bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-O",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-O)",
    "syntax": "curl -O",
    "purpose": "Faylni serverdagi asl nomi bilan diskka yuklab olish",
    "withoutRisk": "Agar -O bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-L",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-L)",
    "syntax": "curl -L",
    "purpose": "Agar yo'naltirish (301/302 redirect) bo'lsa orqasidan ergashish",
    "withoutRisk": "Agar -L bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "curl",
    "flag": "-H 'Header'",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar) (-H 'Header')",
    "syntax": "curl -H 'Header'",
    "purpose": "Maxsus sarlavha qo'shish (masalan: Authorization)",
    "withoutRisk": "Agar -H 'Header' bayrog'i berilmasa, curl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wget",
    "flag": "-c",
    "name": "Non-interactive Network Downloader (Fayllarni Yuklab Olish) (-c)",
    "syntax": "wget -c",
    "purpose": "Uzilib qolgan yuklashni qolgan joyidan davom ettirish (continue)",
    "withoutRisk": "Agar -c bayrog'i berilmasa, wget buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wget",
    "flag": "-b",
    "name": "Non-interactive Network Downloader (Fayllarni Yuklab Olish) (-b)",
    "syntax": "wget -b",
    "purpose": "Orqa fonda yuklash (background)",
    "withoutRisk": "Agar -b bayrog'i berilmasa, wget buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "wget",
    "flag": "-O NOMI",
    "name": "Non-interactive Network Downloader (Fayllarni Yuklab Olish) (-O NOMI)",
    "syntax": "wget -O NOMI",
    "purpose": "Yuklangan faylni boshqa nom bilan saqlash",
    "withoutRisk": "Agar -O NOMI bayrog'i berilmasa, wget buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ssh",
    "flag": "-p PORT",
    "name": "OpenSSH Remote Login Client (Masofaviy Xavfsiz Ulanish) (-p PORT)",
    "syntax": "ssh -p PORT",
    "purpose": "Standart 22-port o'rniga boshqa port orqali ulanish",
    "withoutRisk": "Agar -p PORT bayrog'i berilmasa, ssh buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ssh",
    "flag": "-i KALIT",
    "name": "OpenSSH Remote Login Client (Masofaviy Xavfsiz Ulanish) (-i KALIT)",
    "syntax": "ssh -i KALIT",
    "purpose": "Parolsiz kirish uchun shaxsiy SSH kalitini ko'rsatish (id_rsa)",
    "withoutRisk": "Agar -i KALIT bayrog'i berilmasa, ssh buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ssh",
    "flag": "-L L_PORT:HOST:R_PORT",
    "name": "OpenSSH Remote Login Client (Masofaviy Xavfsiz Ulanish) (-L L_PORT:HOST:R_PORT)",
    "syntax": "ssh -L L_PORT:HOST:R_PORT",
    "purpose": "Port forwarding (tunneling) yaratish",
    "withoutRisk": "Agar -L L_PORT:HOST:R_PORT bayrog'i berilmasa, ssh buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "scp",
    "flag": "-r",
    "name": "Secure Copy (SSH Orqali Fayl Yuborish) (-r)",
    "syntax": "scp -r",
    "purpose": "Papkani barcha ichki fayllari bilan rekursiv yuborish",
    "withoutRisk": "Agar -r bayrog'i berilmasa, scp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "scp",
    "flag": "-P PORT",
    "name": "Secure Copy (SSH Orqali Fayl Yuborish) (-P PORT)",
    "syntax": "scp -P PORT",
    "purpose": "Boshqa portni ko'rsatish",
    "withoutRisk": "Agar -P PORT bayrog'i berilmasa, scp buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "-a",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (-a)",
    "syntax": "rsync -a",
    "purpose": "Arxiv rejimi (ruxsatlar, vaqtlar va symlinklar saqlanadi)",
    "withoutRisk": "Agar -a bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "-v",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (-v)",
    "syntax": "rsync -v",
    "purpose": "Batafsil ma'lumot berish (verbose)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "-z",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (-z)",
    "syntax": "rsync -z",
    "purpose": "Tarmoq orqali yuborishda ma'lumotni siqish (compress)",
    "withoutRisk": "Agar -z bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "rsync",
    "flag": "--delete",
    "name": "Remote Sync (Tezkor Sinxronizatsiya) (--delete)",
    "syntax": "rsync --delete",
    "purpose": "Manbada o'chirilgan fayllarni nishonda ham o'chirish",
    "withoutRisk": "Agar --delete bayrog'i berilmasa, rsync buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nc",
    "flag": "-z",
    "name": "Netcat (Shveysariya Armiyasi Pichoqchasi) (-z)",
    "syntax": "nc -z",
    "purpose": "Ma'lumot yubormasdan faqat port ochiqligini tekshirish (scan)",
    "withoutRisk": "Agar -z bayrog'i berilmasa, nc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nc",
    "flag": "-v",
    "name": "Netcat (Shveysariya Armiyasi Pichoqchasi) (-v)",
    "syntax": "nc -v",
    "purpose": "Batafsil hisobot (verbose)",
    "withoutRisk": "Agar -v bayrog'i berilmasa, nc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nc",
    "flag": "-l",
    "name": "Netcat (Shveysariya Armiyasi Pichoqchasi) (-l)",
    "syntax": "nc -l",
    "purpose": "Kutilayotgan ulanishlar uchun port tinglovchi serverga aylanish (listen)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, nc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "start",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (start)",
    "syntax": "systemctl start",
    "purpose": "Xizmatni ishga tushirish",
    "withoutRisk": "Agar start bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "stop",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (stop)",
    "syntax": "systemctl stop",
    "purpose": "Xizmatni to'xtatish",
    "withoutRisk": "Agar stop bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "restart",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (restart)",
    "syntax": "systemctl restart",
    "purpose": "Xizmatni qayta o'chirib yoqish",
    "withoutRisk": "Agar restart bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "status",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (status)",
    "syntax": "systemctl status",
    "purpose": "Xizmat faoliyati va so'nggi loglarini ko'rish",
    "withoutRisk": "Agar status bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "enable",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (enable)",
    "syntax": "systemctl enable",
    "purpose": "Server o'chib yoqilganda avtomatik ishga tushishini yoqish",
    "withoutRisk": "Agar enable bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "systemctl",
    "flag": "disable",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi) (disable)",
    "syntax": "systemctl disable",
    "purpose": "Avtoyuklanishdan olib tashlash",
    "withoutRisk": "Agar disable bayrog'i berilmasa, systemctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-u XIZMAT",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-u XIZMAT)",
    "syntax": "journalctl -u XIZMAT",
    "purpose": "Faqat ko'rsatilgan xizmat loglarini ko'rish (masalan: -u ssh)",
    "withoutRisk": "Agar -u XIZMAT bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-f",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-f)",
    "syntax": "journalctl -f",
    "purpose": "Yangi kelgan loglarni real vaqtda jonli kuzatish (follow)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-p err",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-p err)",
    "syntax": "journalctl -p err",
    "purpose": "Faqat xatoliklarni filtrlash (priority)",
    "withoutRisk": "Agar -p err bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "journalctl",
    "flag": "-b",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish) (-b)",
    "syntax": "journalctl -b",
    "purpose": "Faqat joriy yuklanishdan (boot) keyingi yozuvlarni ko'rish",
    "withoutRisk": "Agar -b bayrog'i berilmasa, journalctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "history",
    "flag": "-c",
    "name": "GNU History Library (Terilgan Buyruqlar Tarixi) (-c)",
    "syntax": "history -c",
    "purpose": "Tarix xotirasini tozalash",
    "withoutRisk": "Agar -c bayrog'i berilmasa, history buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "read",
    "flag": "-p 'MATN'",
    "name": "Read a Line from Standard Input (Foydalanuvchidan Matn Kiritish) (-p 'MATN')",
    "syntax": "read -p 'MATN'",
    "purpose": "Kiritishdan oldin so'rov matnini chiqarish (prompt)",
    "withoutRisk": "Agar -p 'MATN' bayrog'i berilmasa, read buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "read",
    "flag": "-s",
    "name": "Read a Line from Standard Input (Foydalanuvchidan Matn Kiritish) (-s)",
    "syntax": "read -s",
    "purpose": "Yozilayotgan parolni ekranda yashirish (silent)",
    "withoutRisk": "Agar -s bayrog'i berilmasa, read buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "read",
    "flag": "-t SEK",
    "name": "Read a Line from Standard Input (Foydalanuvchidan Matn Kiritish) (-t SEK)",
    "syntax": "read -t SEK",
    "purpose": "Javob kutish vaqtini cheklash (timeout)",
    "withoutRisk": "Agar -t SEK bayrog'i berilmasa, read buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "-p X:Y",
    "name": "Run a Command in a New Container (Yangi Konteynerni Boshlash) (-p X:Y)",
    "syntax": "docker run -p X:Y",
    "purpose": "Portlarni ochish: tashqi X portni konteyner ichidagi Y portga ulash (masalan: -p 8080:80)",
    "withoutRisk": "Agar -p X:Y bayrog'i berilmasa, docker run buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "--name NOMI",
    "name": "Run a Command in a New Container (Yangi Konteynerni Boshlash) (--name NOMI)",
    "syntax": "docker run --name NOMI",
    "purpose": "Konteynerga inson tushunadigan nom berish",
    "withoutRisk": "Agar --name NOMI bayrog'i berilmasa, docker run buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker run",
    "flag": "-v X:Y",
    "name": "Run a Command in a New Container (Yangi Konteynerni Boshlash) (-v X:Y)",
    "syntax": "docker run -v X:Y",
    "purpose": "Volume ulash: kompyuterdagi X papkani konteyner ichidagi Y ga bog'lash",
    "withoutRisk": "Agar -v X:Y bayrog'i berilmasa, docker run buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker ps",
    "flag": "-a",
    "name": "List Containers (Ishlab Turgan Konteynerlarni Ko'rish) (-a)",
    "syntax": "docker ps -a",
    "purpose": "Barcha konteynerlarni, shu jumladan to'xtaganlarini ham ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, docker ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker ps",
    "flag": "-q",
    "name": "List Containers (Ishlab Turgan Konteynerlarni Ko'rish) (-q)",
    "syntax": "docker ps -q",
    "purpose": "Faqat konteyner ID larini chiqarish (skriptlar uchun)",
    "withoutRisk": "Agar -q bayrog'i berilmasa, docker ps buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker build",
    "flag": "-t NOMI:TEG",
    "name": "Build an Image from a Dockerfile (Yangi Obraz Yig'ish) (-t NOMI:TEG)",
    "syntax": "docker build -t NOMI:TEG",
    "purpose": "Yaratilayotgan obrazga nom va versiya tegi berish (masalan: -t myapp:1.0)",
    "withoutRisk": "Agar -t NOMI:TEG bayrog'i berilmasa, docker build buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker stop",
    "flag": "-t N",
    "name": "Stop One or More Running Containers (Konteynerni To'xtatish) (-t N)",
    "syntax": "docker stop -t N",
    "purpose": "SIGKILL yuborishdan oldin N soniya kutish",
    "withoutRisk": "Agar -t N bayrog'i berilmasa, docker stop buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker rm",
    "flag": "-f",
    "name": "Remove One or More Containers (Konteynerni O'chirish) (-f)",
    "syntax": "docker rm -f",
    "purpose": "Ishlab turgan bo'lsa ham majburiy o'chirish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, docker rm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker logs",
    "flag": "-f",
    "name": "Fetch the Logs of a Container (Konteyner Loglarini Ko'rish) (-f)",
    "syntax": "docker logs -f",
    "purpose": "Yangi kelayotgan loglarni jonli kuzatish (follow)",
    "withoutRisk": "Agar -f bayrog'i berilmasa, docker logs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "docker logs",
    "flag": "--tail N",
    "name": "Fetch the Logs of a Container (Konteyner Loglarini Ko'rish) (--tail N)",
    "syntax": "docker logs --tail N",
    "purpose": "Oxirgi N ta qatorni chiqarish",
    "withoutRisk": "Agar --tail N bayrog'i berilmasa, docker logs buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nano",
    "flag": "-l",
    "name": "GNU nano Text Editor (Oson Terminal Matn Muharriri) (-l)",
    "syntax": "nano -l",
    "purpose": "Qator raqamlarini chiqarish (line numbers)",
    "withoutRisk": "Agar -l bayrog'i berilmasa, nano buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "gcc",
    "flag": "-O2",
    "name": "GNU Compiler Collection (C/C++ Kompilyatori) (-O2)",
    "syntax": "gcc -O2",
    "purpose": "Kodni tezlik bo'yicha optimallashtirish",
    "withoutRisk": "Agar -O2 bayrog'i berilmasa, gcc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "gcc",
    "flag": "-g",
    "name": "GNU Compiler Collection (C/C++ Kompilyatori) (-g)",
    "syntax": "gcc -g",
    "purpose": "Debag ma'lumotlarini qo'shish (GDB uchun)",
    "withoutRisk": "Agar -g bayrog'i berilmasa, gcc buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "make",
    "flag": "-j N",
    "name": "GNU make Utility to Maintain Groups of Programs (Avtomatik Yig'uvchi) (-j N)",
    "syntax": "make -j N",
    "purpose": "N ta yadroda parallel yig'ish (tezlashtiradi)",
    "withoutRisk": "Agar -j N bayrog'i berilmasa, make buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "readlink",
    "flag": "-f",
    "name": "Print Value of a Symbolic Link (Simvolik Havola Manzilini O'qish) (-f)",
    "syntax": "readlink -f",
    "purpose": "Barcha oraliq symlinklarni to'liq yechib haqiqiy yo'lni ko'rsatish",
    "withoutRisk": "Agar -f bayrog'i berilmasa, readlink buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "type",
    "flag": "-a",
    "name": "Describe a Command (Buyruq Turini Aniqlash) (-a)",
    "syntax": "type -a",
    "purpose": "Buyruqning barcha turlarini ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, type buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "nl",
    "flag": "-ba",
    "name": "Number Lines of Files (Qatorlarni Maxsus Raqamlash) (-ba)",
    "syntax": "nl -ba",
    "purpose": "Bo'sh qatorlarni ham birga raqamlash",
    "withoutRisk": "Agar -ba bayrog'i berilmasa, nl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "comm",
    "flag": "-1",
    "name": "Compare Two Sorted Files Line by Line (Tartiblangan Fayllarni Solishtirish) (-1)",
    "syntax": "comm -1",
    "purpose": "1-ustunni (faqat 1-fayldagilarni) yashirish",
    "withoutRisk": "Agar -1 bayrog'i berilmasa, comm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "comm",
    "flag": "-2",
    "name": "Compare Two Sorted Files Line by Line (Tartiblangan Fayllarni Solishtirish) (-2)",
    "syntax": "comm -2",
    "purpose": "2-ustunni yashirish",
    "withoutRisk": "Agar -2 bayrog'i berilmasa, comm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "comm",
    "flag": "-3",
    "name": "Compare Two Sorted Files Line by Line (Tartiblangan Fayllarni Solishtirish) (-3)",
    "syntax": "comm -3",
    "purpose": "3-ustunni (umumiy bo'lganlarini) yashirish",
    "withoutRisk": "Agar -3 bayrog'i berilmasa, comm buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "join",
    "flag": "-t 'BELGI'",
    "name": "Join Lines of Two Files on a Common Field (Fayllarni Kalit Bo'yicha Birlashtirish) (-t 'BELGI')",
    "syntax": "join -t 'BELGI'",
    "purpose": "Ustunlar ajratuvchisini belgilash",
    "withoutRisk": "Agar -t 'BELGI' bayrog'i berilmasa, join buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "hexdump",
    "flag": "-C",
    "name": "Hexadecimal, Decimal, Octal, ASCII Dump (O'n Oltilik Ko'rinish) (-C)",
    "syntax": "hexdump -C",
    "purpose": "Kanonik format: yonida ASCII harflari bilan chiqarish",
    "withoutRisk": "Agar -C bayrog'i berilmasa, hexdump buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chattr",
    "flag": "+i",
    "name": "Change File Attributes on Linux File System (O'zgarmas Fayllar Yaratish) (+i)",
    "syntax": "chattr +i",
    "purpose": "Immutable: faylni o'chirish, nomini o'zgartirish va yozishni to'liq bloklash",
    "withoutRisk": "Agar +i bayrog'i berilmasa, chattr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "chattr",
    "flag": "+a",
    "name": "Change File Attributes on Linux File System (O'zgarmas Fayllar Yaratish) (+a)",
    "syntax": "chattr +a",
    "purpose": "Append-only: faqat oxiriga ma'lumot qo'shish mumkin, eskilarini o'chirib bo'lmaydi (loglar uchun ideal)",
    "withoutRisk": "Agar +a bayrog'i berilmasa, chattr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsattr",
    "flag": "-a",
    "name": "List File Attributes on a Linux Second Extended File System (Atributlarni Ko'rish) (-a)",
    "syntax": "lsattr -a",
    "purpose": "Barcha fayllarni ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, lsattr buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "who",
    "flag": "-b",
    "name": "Show Who is Logged on (Tizimga Kirgan Foydalanuvchilar) (-b)",
    "syntax": "who -b",
    "purpose": "Tizim so'nggi marta qachon yoqilganini (boot time) chiqarish",
    "withoutRisk": "Agar -b bayrog'i berilmasa, who buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "who",
    "flag": "-H",
    "name": "Show Who is Logged on (Tizimga Kirgan Foydalanuvchilar) (-H)",
    "syntax": "who -H",
    "purpose": "Ustunlar sarlavhalari bilan chiqarish",
    "withoutRisk": "Agar -H bayrog'i berilmasa, who buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "last",
    "flag": "-n N",
    "name": "Show a Listing of Last Logged in Users (Kirishlar Tarixi) (-n N)",
    "syntax": "last -n N",
    "purpose": "Oxirgi N ta kirish qaydini ko'rsatish",
    "withoutRisk": "Agar -n N bayrog'i berilmasa, last buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "last",
    "flag": "-a",
    "name": "Show a Listing of Last Logged in Users (Kirishlar Tarixi) (-a)",
    "syntax": "last -a",
    "purpose": "IP manzilni eng o'ng ustunda ko'rsatish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, last buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "timeout",
    "flag": "-k VAQT",
    "name": "Run a Command with a Time Limit (Vaqt Cheklovi Bilan Ishga Tushirish) (-k VAQT)",
    "syntax": "timeout -k VAQT",
    "purpose": "SIGTERM dan so'ng ham to'xtamasa, SIGKILL yuborish",
    "withoutRisk": "Agar -k VAQT bayrog'i berilmasa, timeout buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "watch",
    "flag": "-n SEK",
    "name": "Execute a Program Periodically, Showing Output Fullscreen (Jonli Takroriy Kuzatuv) (-n SEK)",
    "syntax": "watch -n SEK",
    "purpose": "Yangilanish oralig'ini belgilash (masalan: -n 1)",
    "withoutRisk": "Agar -n SEK bayrog'i berilmasa, watch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "watch",
    "flag": "-d",
    "name": "Execute a Program Periodically, Showing Output Fullscreen (Jonli Takroriy Kuzatuv) (-d)",
    "syntax": "watch -d",
    "purpose": "O'zgargan harflar va sonlarni rangli qilib ajratib ko'rsatish (differences)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, watch buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "pidof",
    "flag": "-s",
    "name": "Find the Process ID of a Running Program (Dastur PID ini Aniqlash) (-s)",
    "syntax": "pidof -s",
    "purpose": "Faqat bitta yagona PID chiqarish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, pidof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsof",
    "flag": "-i :PORT",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Soketlari) (-i :PORT)",
    "syntax": "lsof -i :PORT",
    "purpose": "Aynan ma'lum bir portni (masalan: -i :80) qaysi dastur ushlab turganini ko'rish",
    "withoutRisk": "Agar -i :PORT bayrog'i berilmasa, lsof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsof",
    "flag": "-u USER",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Soketlari) (-u USER)",
    "syntax": "lsof -u USER",
    "purpose": "Foydalanuvchining barcha ochiq fayllari",
    "withoutRisk": "Agar -u USER bayrog'i berilmasa, lsof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "lsof",
    "flag": "-p PID",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Soketlari) (-p PID)",
    "syntax": "lsof -p PID",
    "purpose": "Aynan shu jarayon ochgan barcha fayllar ro'yxati",
    "withoutRisk": "Agar -p PID bayrog'i berilmasa, lsof buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uptime",
    "flag": "-p",
    "name": "Tell How Long the System has Been Running (Server Ish Vaqti) (-p)",
    "syntax": "uptime -p",
    "purpose": "Chiroyli inson tilida chiqarish (masalan: up 14 days, 3 hours)",
    "withoutRisk": "Agar -p bayrog'i berilmasa, uptime buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "uptime",
    "flag": "-s",
    "name": "Tell How Long the System has Been Running (Server Ish Vaqti) (-s)",
    "syntax": "uptime -s",
    "purpose": "Server qaysi aniq sana va vaqtda yoqilganini ko'rsatish",
    "withoutRisk": "Agar -s bayrog'i berilmasa, uptime buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "valgrind",
    "flag": "--leak-check=full",
    "name": "Memory Management and Leak Detection Tool (Xotira Oqishini Tekshiruvchi) (--leak-check=full)",
    "syntax": "valgrind --leak-check=full",
    "purpose": "Xotiradagi har bir oqib ketgan baytni qatorma-qator fosh qilish",
    "withoutRisk": "Agar --leak-check=full bayrog'i berilmasa, valgrind buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sysctl",
    "flag": "-a",
    "name": "Configure Kernel Parameters at Runtime (Yadro Parametrlarini Sozlash) (-a)",
    "syntax": "sysctl -a",
    "purpose": "Barcha yadro parametrlarini chiqarish",
    "withoutRisk": "Agar -a bayrog'i berilmasa, sysctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "sysctl",
    "flag": "-p",
    "name": "Configure Kernel Parameters at Runtime (Yadro Parametrlarini Sozlash) (-p)",
    "syntax": "sysctl -p",
    "purpose": "/etc/sysctl.conf faylidagi o'zgarishlarni qayta yuklash",
    "withoutRisk": "Agar -p bayrog'i berilmasa, sysctl buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "parted",
    "flag": "-l",
    "name": "A Partition Manipulation Program (Katta Disklar Boshqaruvi) (-l)",
    "syntax": "parted -l",
    "purpose": "Barcha disklar jadvalini ko'rsatish",
    "withoutRisk": "Agar -l bayrog'i berilmasa, parted buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "traceroute",
    "flag": "-n",
    "name": "Print the Route Packets Trace to Network Host (Paket Yo'nalishini Kuzatish) (-n)",
    "syntax": "traceroute -n",
    "purpose": "DNS nomlarini yechmasdan tezkor raqamli IP larni ko'rsatish",
    "withoutRisk": "Agar -n bayrog'i berilmasa, traceroute buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dig",
    "flag": "+short",
    "name": "DNS Lookup Utility (DNS Domen Qidiruv Vositasi) (+short)",
    "syntax": "dig +short",
    "purpose": "Faqat qisqa toza IP manzilni chiqarish",
    "withoutRisk": "Agar +short bayrog'i berilmasa, dig buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "dig",
    "flag": "ANY",
    "name": "DNS Lookup Utility (DNS Domen Qidiruv Vositasi) (ANY)",
    "syntax": "dig ANY",
    "purpose": "Domenning barcha mavjud DNS yozuvlarini olish",
    "withoutRisk": "Agar ANY bayrog'i berilmasa, dig buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ufw",
    "flag": "allow PORT",
    "name": "Uncomplicated Firewall (Sodda Xavfsizlik Devori) (allow PORT)",
    "syntax": "ufw allow PORT",
    "purpose": "Portga kirishga ruxsat berish (masalan: allow 22/tcp)",
    "withoutRisk": "Agar allow PORT bayrog'i berilmasa, ufw buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ufw",
    "flag": "deny PORT",
    "name": "Uncomplicated Firewall (Sodda Xavfsizlik Devori) (deny PORT)",
    "syntax": "ufw deny PORT",
    "purpose": "Portni butunlay yopish",
    "withoutRisk": "Agar deny PORT bayrog'i berilmasa, ufw buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "ufw",
    "flag": "status",
    "name": "Uncomplicated Firewall (Sodda Xavfsizlik Devori) (status)",
    "syntax": "ufw status",
    "purpose": "Faol xavfsizlik qoidalari ro'yxatini ko'rish",
    "withoutRisk": "Agar status bayrog'i berilmasa, ufw buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "echo",
    "flag": "-e",
    "name": "Display a Line of Text (Matn Chiqarish) (-e)",
    "syntax": "echo -e",
    "purpose": "Maxsus belgilarni (\\n yangi qator, \\t tab) yoqish",
    "withoutRisk": "Agar -e bayrog'i berilmasa, echo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "echo",
    "flag": "-n",
    "name": "Display a Line of Text (Matn Chiqarish) (-n)",
    "syntax": "echo -n",
    "purpose": "Oxirida yangi qatorga o'tmaslik",
    "withoutRisk": "Agar -n bayrog'i berilmasa, echo buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-f FAYL",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-f FAYL)",
    "syntax": "test -f FAYL",
    "purpose": "Fayl mavjud va oddiy fayl ekanini tekshirish",
    "withoutRisk": "Agar -f FAYL bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-d PAPKA",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-d PAPKA)",
    "syntax": "test -d PAPKA",
    "purpose": "Papka mavjudligini tekshirish",
    "withoutRisk": "Agar -d PAPKA bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-z SATR",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-z SATR)",
    "syntax": "test -z SATR",
    "purpose": "Satr bo'sh ekanligini tekshirish",
    "withoutRisk": "Agar -z SATR bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "test",
    "flag": "-eq / -ne",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ]) (-eq / -ne)",
    "syntax": "test -eq / -ne",
    "purpose": "Sonlarning teng / teng emasligini tekshirish",
    "withoutRisk": "Agar -eq / -ne bayrog'i berilmasa, test buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "seq",
    "flag": "-w",
    "name": "Print a Sequence of Numbers (Raqamlar Ketma-ketligini Chiqarish) (-w)",
    "syntax": "seq -w",
    "purpose": "Boshiga nollar qo'shib bir xil kenglikda chiqarish (01, 02..)",
    "withoutRisk": "Agar -w bayrog'i berilmasa, seq buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "objdump",
    "flag": "-d",
    "name": "Display Information from Object Files (Disassembler) (-d)",
    "syntax": "objdump -d",
    "purpose": "Ijrochi kodni assembler tilida chiqarish (disassemble)",
    "withoutRisk": "Agar -d bayrog'i berilmasa, objdump buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  },
  {
    "cmd": "objdump",
    "flag": "-M intel",
    "name": "Display Information from Object Files (Disassembler) (-M intel)",
    "syntax": "objdump -M intel",
    "purpose": "Intel sintaksisida chiqarish (o'qish osonroq)",
    "withoutRisk": "Agar -M intel bayrog'i berilmasa, objdump buyrug'i standart holatda ishlaydi yoki kerakli filtrlash bajarilmaydi."
  }
];

  var engine = {
    analyze: analyzeCommand,
    renderCardHtml: renderCardHtml,
    formatCommandCard: renderCardHtml,
    MASTER_FLAG_DICTIONARY: MASTER_FLAG_DICTIONARY,
    KNOWLEDGE_BASE: KNOWLEDGE_BASE,
    OPERATORS: OPERATORS
  };

  return engine;
});
