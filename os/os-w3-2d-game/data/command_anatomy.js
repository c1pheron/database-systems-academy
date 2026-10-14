// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — MASTER COMMAND & FLAG ANATOMY ENGINE
// Generates structured pedagogical breakdown for ANY Linux command:
// 1. Komandaning o'zi nima ish bajaradi? (Nima qiladi va qanday qiladi?)
// 2. Qo'shimchalar (flags) qo'shilishiga sabab nima?
// 3. Har bir qo'shimchaning vazifasi va sintaksisdagi o'rni.
// 4. Qachon kerak bo'ladi bu qo'shimchalar?
// 5. ⚠️ Agar bu qo'shimchalar bo'lmasa nima bo'ladi?
// ============================================================================

(function() {
  const KNOWLEDGE_BASE = {
    usermod: {
      name: "Foydalanuvchi hisobini o'zgartirish (Modify User Account)",
      whatItDoes: "Linux tizimidagi mavjud foydalanuvchilarning sozlamalarini (parol holati, qobiq, guruhlar, uy katalogi) <code>/etc/passwd</code> va <code>/etc/shadow</code> fayllariga xavfsiz o'zgartirish kiritish orqali boshqaradi.",
      whyFlags: "Faqat <code>usermod bob</code> deb yozilsa, Linux aynan qaysi parametrni o'zgartirish kerakligini bilmaydi va xato beradi. Shuning uchun parametr turi bayroqlar orqali ko'rsatilishi shart.",
      generalWhen: "Xodim lavozimi o'zgarganda, ishdan ketganda, paroli bloklanganda yoki qo'shimcha guruhlarga qo'shilganda ishlatiladi.",
      generalWithout: "Foydalanuvchi hisobini boshqarib bo'lmaydi yoki xato bayroq berilsa butun hisob sozlamalari buziladi.",
      flags: {
        "-L": {
          name: "Parolni qulflash / bloklash (Lock password)",
          syntaxPos: "usermod dan keyin, login oldidan: <code>usermod -L [login]</code>",
          whatItDoes: "<code>/etc/shadow</code> dagi shifrlangan parol xeshi boshiga <code>!</code> belgisini qo'yadi. Natijada parol bilan kirish imkonsiz bo'lib qoladi.",
          whenNeeded: "Xodim ta'tilga chiqqanda, ishdan bo'shatilganda yoki akkaunt xavfsizligi buzilgan deb gumon qilinganda akkauntni butunlay o'chirmasdan vaqtinchalik bloklash uchun.",
          withoutRisk: "⚠️ AGAR -L BO'LMASA: Hisob ochiq qoladi va ishdan bo'shatilgan xodim serverga kirib zarar yetkazishi mumkin! (Eslatma: kichik <code>-l</code> boshqa narsa — login nomini o'zgartiradi)."
        },
        "-U": {
          name: "Parol blokini ochish (Unlock password)",
          syntaxPos: "<code>usermod -U [login]</code>",
          whatItDoes: "<code>/etc/shadow</code> dagi parol oldidagi <code>!</code> belgisini olib tashlaydi va akkauntni yana faol holatga qaytaradi.",
          whenNeeded: "Foydalanuvchi qaytib kelganda yoki xavfsizlik tekshiruvi tugagach hisobni tiklashda.",
          withoutRisk: "⚠️ AGAR -U BO'LMASA: Foydalanuvchi to'g'ri parol kiritsa ham 'Authentication failure' xatosi olib tizimga kira olmaydi."
        },
        "-s": {
          name: "Login shellini belgilash (Set Login Shell)",
          syntaxPos: "<code>usermod -s [shell_yo'li] [login]</code>",
          whatItDoes: "Foydalanuvchi tizimga kirganda ishga tushadigan qobiqni (masalan <code>/bin/bash</code> yoki <code>/usr/sbin/nologin</code>) <code>/etc/passwd</code> da o'zgartiradi.",
          whenNeeded: "Xizmat hisoblarining terminalga kirishini taqiqlashda (<code>/usr/sbin/nologin</code>) yoki foydalanuvchiga qulay Bash berishda.",
          withoutRisk: "⚠️ AGAR -s BO'LMASA: Foydalanuvchi tizimga kirganda noqulay sukut qobig'ida (masalan <code>/bin/sh</code>) qolib ketadi yoki xizmat akkaunti ochiq qolib xakerlar undan terminal ochishi mumkin!"
        },
        "-c": {
          name: "Foydalanuvchi izohini o'zgartirish (Comment / GECOS field)",
          syntaxPos: "<code>usermod -c 'To'liq Ism, Xona' [login]</code>",
          whatItDoes: "<code>/etc/passwd</code> dagi 5-ustun (GECOS - foydalanuvchi to'liq ismi, bo'limi, telefon raqami) ni yangilaydi.",
          whenNeeded: "Tizim ma'murlari kim kimligini va kimga tegishli ekanini aniq bilishi uchun audit o'tkazishda.",
          withoutRisk: "⚠️ AGAR -c BO'LMASA: Loglarda va hisobotlarda login orqasida kim turgani noma'lum bo'lib qoladi."
        },
        "-m": {
          name: "Uy katalogi fayllarini yangi joyga ko'chirish (Move home contents)",
          syntaxPos: "Har doim <code>-d</code> bilan birga: <code>usermod -d /yangi/joy -m [login]</code>",
          whatItDoes: "Eski uy papkasidagi barcha fayllar va shaxsiy sozlamalarni yangi ko'rsatilgan manzilga jismonan ko'chiradi.",
          whenNeeded: "Foydalanuvchining uy katalogi manzili boshqa disk bo'limiga ko'chirilganda.",
          withoutRisk: "⚠️ AGAR -m BO'LMASA: Faqat <code>/etc/passwd</code> dagi yo'l o'zgaradi, lekin eski fayllar eski joyida qolib, yangi papka bo'm-bo'sh ochiladi va foydalanuvchi o'z fayllarini yo'qotdim deb o'ylaydi!"
        },
        "-aG": {
          name: "Qo'shimcha guruhga xavfsiz qo'shish (Append Groups)",
          syntaxPos: "<code>usermod -aG [guruh] [login]</code>",
          whatItDoes: "Foydalanuvchini mavjud boshqa barcha guruhlaridagi a'zoligini saqlab qolgan holda yangi qo'shimcha guruhga (masalan <code>sudo</code>) qo'shadi.",
          whenNeeded: "Foydalanuvchiga qo'shimcha imtiyozlar (sudo, docker, devteam) berishda.",
          withoutRisk: "⚠️ AGAR -a (APPEND) BO'LMASA: KATTA FALOKAT! Foydalanuvchi boshqa BARCHA qo'shimcha guruhlaridan chiqarib yuboriladi va faqat ko'rsatilgan guruhda qoladi!"
        }
      }
    },

    useradd: {
      name: "Yangi foydalanuvchi hisobi yaratish (Create User Account)",
      whatItDoes: "Linux operatsion tizimida yangi foydalanuvchi UID, GID va hisob yozuvini <code>/etc/passwd</code> va <code>/etc/shadow</code> fayllariga qo'shadi.",
      whyFlags: "Debian/Ubuntu tizimlarida <code>useradd</code> past darajali buyruq bo'lib, bayroqlarsiz chaqirilsa na shaxsiy uy papkasi yaratadi, na standart qulay shell beradi.",
      generalWhen: "Tizimga yangi xodim, talaba yoki dasturiy xizmat hisobi qo'shilayotganda.",
      generalWithout: "Foydalanuvchi tizimga kirganda shaxsiy papkasi yo'qligi sababli tizim xato beradi.",
      flags: {
        "-m": {
          name: "Uy papkasini yaratish (Make home directory)",
          syntaxPos: "<code>useradd -m [login]</code>",
          whatItDoes: "<code>/home/username</code> katalogini yaratadi va <code>/etc/skel</code> dagi boshlang'ich shablon fayllarni (<code>.bashrc</code>, <code>.profile</code>) avtomatik ko'chirib beradi.",
          whenNeeded: "Har qanday haqiqiy inson-foydalanuvchi yaratilganda shaxsiy ish joyi bo'lishi uchun.",
          withoutRisk: "⚠️ AGAR -m BO'LMASA: Foydalanuvchining shaxsiy <code>/home/login</code> papkasi umuman yaratilmaydi va tizimga kirganda 'No directory, logging in with HOME=/' xatosi chiqadi!"
        },
        "-s": {
          name: "Boshlang'ich Shell belgilash (Set Shell)",
          syntaxPos: "<code>useradd -s /bin/bash [login]</code>",
          whatItDoes: "Foydalanuvchi uchun interaktiv shellni (masalan <code>/bin/bash</code>) belgilaydi.",
          whenNeeded: "Foydalanuvchi tizimga kirganda to'g'ri terminal qobig'ida ochilishi uchun.",
          withoutRisk: "⚠️ AGAR -s BO'LMASA: Sukut bo'yicha cheklangan <code>/bin/sh</code> tayinlanadi, strelkalar va ranglar ishlamaydi."
        },
        "-G": {
          name: "Qo'shimcha guruhlar (Supplementary Groups)",
          syntaxPos: "<code>useradd -G sudo,devteam [login]</code>",
          whatItDoes: "Foydalanuvchini asosiy guruhidan tashqari qo'shimcha guruhlarga darhol biriktiradi.",
          whenNeeded: "Yangi yaratilayotgan foydalanuvchiga birdaniga kerakli ruxsatlarni berishda.",
          withoutRisk: "⚠️ AGAR -G BO'LMASA: Foydalanuvchi faqat o'zining shaxsiy guruhida qoladi va boshqa guruh loyihalariga kira olmaydi."
        },
        "-e": {
          name: "Amal qilish muddatini belgilash (Expire Date)",
          syntaxPos: "<code>useradd -e YYYY-MM-DD [login]</code>",
          whatItDoes: "Hisobning tugash sanasini <code>/etc/shadow</code> ning 8-ustuniga yozadi.",
          whenNeeded: "Amaliyotchi talabalar yoki vaqtinchalik pudratchilar hisobini avtomatik yopilishini ta'minlashda.",
          withoutRisk: "⚠️ AGAR -e BO'LMASA: Vaqtinchalik xodim ketganidan keyin ham uning hisobi cheksiz ochiq qolib xavfsizlikka tahdid soladi."
        }
      }
    },

    chmod: {
      name: "Fayl ruxsatlarini o'zgartirish (Change File Modes / Permissions)",
      whatItDoes: "Fayl va papkalarning egasi (u), guruhi (g) va boshqalar (o) uchun o'qish (r=4), yozish (w=2) va ijro etish (x=1) huquqlarini o'zgartiradi.",
      whyFlags: "Qaysi ruxsatlar kimga berilayotganini va bu ruxsatlar faqat bitta faylgami yoki butun papkaga tatbiq etilishini belgilash uchun qo'shimchalar kerak.",
      generalWhen: "Xavfsizlik darajasini sozlashda, skriptlarga ijro huquqini berishda yoki umumiy loyiha papkalarini himoyalashda.",
      generalWithout: "Fayllar yo hammaga ochiq bo'lib qoladi (ma'lumot sizishi), yoki dasturlar ijro etilmay qoladi ('Permission denied').",
      flags: {
        "+t": {
          name: "Sticky Bit o'rnatish (Yopishqoq bit / 1777)",
          syntaxPos: "<code>chmod +t /papka</code> yoki <code>chmod 1775 /papka</code>",
          whatItDoes: "Umumiy papkada fayllarni faqat ularning haqiqiy egasi yoki root o'chira oladigan qilib qulflaydi.",
          whenNeeded: "Bir nechta xodim yozadigan umumiy loyiha papkalari (<code>/srv/project</code>, <code>/tmp</code>) da boshqalar bir-birining faylini o'chirib yubormasligi uchun.",
          withoutRisk: "⚠️ AGAR +t (Sticky Bit) BO'LMASA: Guruh a'zolaridan istalgan biri boshqa xodimning muhim fayllarini bemalol o'chirib yuborishi mumkin!"
        },
        "+x": {
          name: "Ijro huquqini berish (Executable bit)",
          syntaxPos: "<code>chmod +x skript.sh</code>",
          whatItDoes: "Faylni to'g'ridan-to'g'ri dastur sifatida ishga tushirish (exec) imkonini beradi.",
          whenNeeded: "Bash, Python yoki ikkilik dasturlarni <code>./skript.sh</code> deb yurgizish uchun.",
          withoutRisk: "⚠️ AGAR +x BO'LMASA: Skriptni ishga tushirmoqchi bo'lsangiz 'bash: permission denied' xatosi chiqadi."
        },
        "-R": {
          name: "Rekursiv o'zgartirish (Recursive)",
          syntaxPos: "<code>chmod -R 750 /papka</code>",
          whatItDoes: "Ko'rsatilgan papka va uning ichidagi barcha ichki papkalar hamda fayllarga ruxsatni bir vaqtda qo'llaydi.",
          whenNeeded: "Katta katalogdagi barcha fayllar ruxsatini bir zumda to'g'rilashda.",
          withoutRisk: "⚠️ AGAR -R BO'LMASA: Faqat ustki papka o'zgaradi, ichidagi minglab fayllar esa eski ruxsatda qolib ketadi."
        }
      }
    },

    chown: {
      name: "Fayl egasi va guruhini o'zgartirish (Change File Owner)",
      whatItDoes: "Fayl tizimidagi obyektlarning foydalanuvchi (UID) va guruh (GID) egaligini o'zgartiradi.",
      whyFlags: "Yangi egasi va guruhini aniq belgilash va ichki obyektlarga tatbiq etish uchun ishlatiladi.",
      generalWhen: "Fayllar boshqa foydalanuvchiga topshirilganda yoki umumiy loyiha guruhiga biriktirilganda.",
      generalWithout: "Fayl egaligi noto'g'ri qolib, ruxsatsiz shaxslar unga egalik qilib turadi.",
      flags: {
        "-R": {
          name: "Rekursiv egalikni o'zgartirish",
          syntaxPos: "<code>chown -R egasi:guruhi /papka</code>",
          whatItDoes: "Papkaning ichidagi barcha fayl va ichki kataloglarning ham egasini birdek yangilaydi.",
          whenNeeded: "Yangi foydalanuvchi uy papkasini to'liq o'ziga o'tkazishda.",
          withoutRisk: "⚠️ AGAR -R BO'LMASA: Yangi foydalanuvchi o'z papkasi ichidagi fayllarni tahrirlay olmaydi."
        }
      }
    },

    cp: {
      name: "Fayl va papkalardan nusxa olish (Copy Files & Directories)",
      whatItDoes: "Fayl yoki katalog ma'lumotlarini boshqa joyga yoki boshqa nom ostida takrorlab nusxalaydi.",
      whyFlags: "Kataloglarni to'liq nusxalash, asl ruxsatlar va vaqtlarni saqlab qolish uchun maxsus bayroqlar kerak.",
      generalWhen: "Zaxira nusxa (backup) yaratishda yoki shablon fayllarni ko'chirishda.",
      generalWithout: "Kataloglar nusxalanmay qoladi yoki asl fayl huquqlari yo'qolib ketadi.",
      flags: {
        "-a": {
          name: "Arxiv rejimida nusxalash (Archive Mode = -dR --preserve=all)",
          syntaxPos: "<code>cp -a /manba/. /maqsad/</code>",
          whatItDoes: "Barcha fayllarni rekursiv, simvollar, asl egalari, ruxsatlari va vaqt tamg'alarini (timestamps) 100% saqlagan holda nusxalaydi.",
          whenNeeded: "<code>/etc/skel</code> dan foydalanuvchi uyiga shablonlarni ko'chirishda yoki to'liq tizim backupida.",
          withoutRisk: "⚠️ AGAR -a BO'LMASA: Barcha nusxalangan fayllarning egasi joriy foydalanuvchiga o'zgaradi va asl ruxsatlar yo'qolib tizim ishi buziladi!"
        },
        "-r": {
          name: "Rekursiv nusxalash (Recursive)",
          syntaxPos: "<code>cp -r /papka /yangi_joy</code>",
          whatItDoes: "Papkani barcha ichki fayllari va qatlamlari bilan nusxalaydi.",
          whenNeeded: "Oddiy papkalarni nusxalashda.",
          withoutRisk: "⚠️ AGAR -r BO'LMASA: 'cp: -r not specified; omitting directory' xatosi berib, papkani nusxalamay tashlab ketadi."
        },
        "-p": {
          name: "Atributlarni saqlab qolish (Preserve attributes)",
          syntaxPos: "<code>cp -p fayl.txt backup/</code>",
          whatItDoes: "Faylning o'zgartirilgan vaqti, ruxsati va egaligini o'zgarishsiz qoldiradi.",
          whenNeeded: "Loglar yoki konfiguratsiyalarni vaqt tamg'asini buzmasdan saqlashda.",
          withoutRisk: "⚠️ AGAR -p BO'LMASA: Fayl vaqti joriy daqiqaga o'zgarib, loglar tahlili chalkashadi."
        }
      }
    },

    mkdir: {
      name: "Yangi katalog yaratish (Make Directory)",
      whatItDoes: "Fayl tizimida yangi bo'sh papka yaratadi.",
      whyFlags: "Bir nechta ichma-ich joylashgan papkalarni bir buyruq bilan xatosiz yaratish uchun bayroq kerak.",
      generalWhen: "Yangi loyiha, loglar yoki arxivlar uchun joy ajratishda.",
      generalWithout: "Ota papka yo'q bo'lsa xato beradi.",
      flags: {
        "-p": {
          name: "Ota kataloglarni bir yo'la yaratish (Parents mode)",
          syntaxPos: "<code>mkdir -p /a/b/c</code>",
          whatItDoes: "Agar ko'rsatilgan yo'ldagi ota papkalar mavjud bo'lmasa, ularni ketma-ket avtomatik yaratadi va papka allaqachon mavjud bo'lsa xato chiqarmaydi.",
          whenNeeded: "Skriptlarda xavfsiz va xatosiz murakkab papka zanjirlarini yaratishda.",
          withoutRisk: "⚠️ AGAR -p BO'LMASA: Agar bittagina ota katalog mavjud bo'lmasa, 'No such file or directory' xatosi berib butun skript to'xtaydi!"
        }
      }
    },

    grep: {
      name: "Muntazam ifodalar bo'yicha qidirish (Global Regular Expression Print)",
      whatItDoes: "Kiritilgan matn yoki fayllar ichidan berilgan qolipga (pattern) mos keluvchi qatorlarni topib ekranga chiqaradi.",
      whyFlags: "Qidiruvni kengaytirish, katta-kichik harflarni e'tiborsiz qoldirish yoki faqat mos so'zni ajratish uchun bayroqlar shart.",
      generalWhen: "Loglarni tahlil qilishda, xatolarni topishda, konfiguratsiyalarni tekshirishda.",
      generalWithout: "Qidiruv qat'iy va cheklangan bo'lib qoladi.",
      flags: {
        "-E": {
          name: "Kengaytirilgan muntazam ifodalar (Extended Regex)",
          syntaxPos: "<code>grep -E 'qolip' fayl</code>",
          whatItDoes: "<code>+</code>, <code>?</code>, <code>|</code>, <code>()</code> kabi metabelgilarni teskari qiya chiziqsiz tushunish imkonini beradi.",
          whenNeeded: "Murakkab IP manzillar, sanalar yoki bir nechta so'zlarni ('soz1|soz2') qidirishda.",
          withoutRisk: "⚠️ AGAR -E BO'LMASA: Masalan <code>|</code> yoki <code>+</code> belgilari oddiy harf sifatida qidirilib, hech narsa topilmaydi!"
        },
        "-v": {
          name: "Teskari qidiruv (Invert match)",
          syntaxPos: "<code>grep -v 'qolip' fayl</code>",
          whatItDoes: "Berilgan qolipga mos KELMAYDIGAN qatorlarni filtrlab chiqaradi.",
          whenNeeded: "Izohlar (<code>#</code>) yoki bo'sh qatorlarni olib tashlab toza konfiguratsiyani o'qishda.",
          withoutRisk: "⚠️ AGAR -v BO'LMASA: Aksincha, faqat o'sha keraksiz qatorlar ekranga chiqadi."
        },
        "-c": {
          name: "Mos qatorlar sonini sanash (Count matches)",
          syntaxPos: "<code>grep -c 'xato' log.txt</code>",
          whatItDoes: "Qatorlarning o'zini emas, necha marta uchraganining sonini (butun son) chiqaradi.",
          whenNeeded: "Serverdagi xatolar yoki hujumlar sonini hisoblashda.",
          withoutRisk: "⚠️ AGAR -c BO'LMASA: Minglab qatorlar ekranni to'ldirib yuboradi va skript sonni ololmaydi."
        },
        "-o": {
          name: "Faqat mos qismni ajratish (Only matching)",
          syntaxPos: "<code>grep -oE '[0-9]+\.[0-9]+...' log</code>",
          whatItDoes: "Butun satrni emas, qolipga tushgan aniq bo'lakni (masalan faqat IP manzilni) alohida qilib chiqaradi.",
          whenNeeded: "Loglardan faqat IP yoki email manzillarini ajratib olib <code>sort | uniq</code> ga uzatishda.",
          withoutRisk: "⚠️ AGAR -o BO'LMASA: Butun Apache satri chiqadi va statistikani saralab bo'lmaydi."
        }
      }
    },

    find: {
      name: "Fayllarni mezonlar bo'yicha qidirish (Search Files in Directory Hierarchy)",
      whatItDoes: "Fayl tizimini chuqur tekshirib, berilgan parametrlar (tur, nom, hajm, o'zgarish vaqti) ga mos fayllarni topadi.",
      whyFlags: "<code>find</code> ga nima qidirilayotgani aynan predikat bayroqlar orqali tushuntiriladi.",
      generalWhen: "Eski loglarni tozalashda, xavfli ruxsatli fayllarni audit qilishda.",
      generalWithout: "Barcha fayllar va papkalar saralanmasdan chiqib ketadi.",
      flags: {
        "-type": {
          name: "Fayl turini cheklash (-type f / -type d)",
          syntaxPos: "<code>find . -type f</code>",
          whatItDoes: "Faqat oddiy fayllar (<code>f</code>) yoki faqat papkalar (<code>d</code>) ni tanlaydi.",
          whenNeeded: "Papkalar tasodifan o'chib ketmasligi uchun faqat fayllarni tozalashda.",
          withoutRisk: "⚠️ AGAR -type f BO'LMASA: Qidiruv papkalarni ham qo'shib yuboradi va skript papkalarni o'chirishga urinib xato keltirib chiqaradi!"
        },
        "-mmin": {
          name: "Daqiqalardagi o'zgartirish vaqti (-mmin +N)",
          syntaxPos: "<code>find . -mmin +10080</code> (7 kundan eski)",
          whatItDoes: "Faylning oxirgi marta o'zgartirilgan vaqtini daqiqalarda hisoblaydi (<code>+10080</code> = 7 kundan oldin).",
          whenNeeded: "Avtomatik log rotatsiyasi va eski arxivlarni tozalashda.",
          withoutRisk: "⚠️ AGAR -mmin BO'LMASA: Hozirgina yaratilgan yangi fayllar ham eskilarga qo'shilib o'chib ketadi!"
        },
        "-print0": {
          name: "NUL bayt bilan ajratish (Null-delimited output)",
          syntaxPos: "<code>find . -print0</code>",
          whatItDoes: "Fayl nomlarini yangi satr (<code>\\n</code>) o'rniga ASCII NUL (<code>\\0</code>) belgisi bilan ajratadi.",
          whenNeeded: "Fayl nomida bo'sh joy yoki g'alati belgilar bo'lsa skript buzilmasligi uchun (<code>while read -d ''</code> bilan).",
          withoutRisk: "⚠️ AGAR -print0 BO'LMASA: Bo'sh joyli fayl nomlari ikkiga bo'linib ketadi va noto'g'ri fayllar o'chirilishi yoki buzilishi mumkin!"
        },
        "-delete": {
          name: "Topilgan fayllarni o'chirish",
          syntaxPos: "<code>find . -type f -mmin +10080 -delete</code>",
          whatItDoes: "Qidiruv shartiga to'liq mos kelgan fayllarni darhol o'chiradi.",
          whenNeeded: "Tezkor tozalash skriptlarida.",
          withoutRisk: "⚠️ DIQQAT: Agar shartlar noto'g'ri berilsa, butun katalogdagi hamma fayllar o'chib ketishi mumkin!"
        }
      }
    },

    curl: {
      name: "Tarmoqdan yuklash va so'rov yuborish (Client URL Transfer)",
      whatItDoes: "HTTP, HTTPS, FTP protokollari orqali serverlar bilan ma'lumot almashadi va fayllarni yuklab oladi.",
      whyFlags: "Avtomatlashtirilgan skriptlarda curl jim ishlashi, xatolarda to'xtashi va qayta yo'naltirishlarga ergashishi shart.",
      generalWhen: "Dasturiy yangilanishlarni, API ma'lumotlarini yoki tashqi fayllarni avtomatik tortib olishda.",
      generalWithout: "Skript ekranni keraksiz foizlar bilan to'ldiradi yoki 404 xatolikni sezmay qoladi.",
      flags: {
        "-f": {
          name: "HTTP xatolarida darhol to'xtash (Fail on HTTP error)",
          syntaxPos: "<code>curl -f -o fayl URL</code>",
          whatItDoes: "Server 404 (Not Found) yoki 500 xato bersa, faylga xatolik HTML matnini yozmasdan, darhol chiqish kodi <code>!= 0</code> qaytaradi.",
          whenNeeded: "Avtomatlashtirilgan yuklash skriptlarida fayl haqiqatan mavjudligiga ishonch hosil qilishda.",
          withoutRisk: "⚠️ AGAR -f BO'LMASA: Server 404 xato bersa ham curl o'sha xatolik sahifasini faylga yozib qo'yadi va skriptingiz buni muvaffaqiyatli deb o'ylaydi!"
        },
        "-L": {
          name: "Qayta yo'naltirishga ergashish (Follow Location)",
          syntaxPos: "<code>curl -L URL</code>",
          whatItDoes: "Server 301 yoki 302 qayta yo'naltirish bergan taqdirda yangi manzilga avtomatik o'tadi.",
          whenNeeded: "Qisqartirilgan yoki HTTPS ga o'tgan manzillardan yuklashda.",
          withoutRisk: "⚠️ AGAR -L BO'LMASA: Haqiqiy fayl o'rniga 0 baytli 'Moved Permanently' xabari yuklanadi."
        },
        "-s": {
          name: "Jim rejim (Silent mode)",
          syntaxPos: "<code>curl -s URL</code>",
          whatItDoes: "Progress bar va yuklanish foizlarini ekranga chiqarmaydi.",
          whenNeeded: "Loglarni toza saqlashda va Cron skriptlarida.",
          withoutRisk: "⚠️ AGAR -s BO'LMASA: Terminal sekundiga o'nlab yuklanish foizlari bilan to'lib ketadi."
        },
        "-S": {
          name: "Xatolikni baribir ko'rsatish (Show error with -s)",
          syntaxPos: "<code>curl -sS URL</code>",
          whatItDoes: "-s bilan jim rejimda ishlayotganda ham, agar falokat yuz bersa xato sababini ekranga yozadi.",
          whenNeeded: "Xatolarni o'tkazib yubormaslik uchun.",
          withoutRisk: "⚠️ AGAR -S BO'LMASA: -s berilganda nima buzilganini hech qachon bilolmaysiz."
        }
      }
    },

    df: {
      name: "Disk bo'sh joyini ko'rsatish (Disk Free)",
      whatItDoes: "Fayl tizimlari egallagan va bo'sh qolgan xotira hajmini ko'rsatadi.",
      whyFlags: "Avtomatlashtirishda ma'lumotlar bitta qatorda barqaror chiqishi shart.",
      generalWhen: "Disk to'lib qolmasligini kuzatuvchi monitoring skriptlarida.",
      generalWithout: "Skriptlar bo'lingan qatorlarni tushunolmay xato beradi.",
      flags: {
        "-P": {
          name: "POSIX portativ 1-satrlik format (Portability format)",
          syntaxPos: "<code>df -P /</code>",
          whatItDoes: "Fayl tizimi nomi qanchalik uzun bo'lmasin, bitta satrga joylaydi (satrni ikkiga bo'lmaydi).",
          whenNeeded: "<code>awk '{print $5}'</code> bilan disk foizini ishonchli ajratib olishda.",
          withoutRisk: "⚠️ AGAR -P BO'LMASA: Uzun disk nomi 2-qatorga surilib ketadi va awk 5-ustundagi foiz o'rniga bo'sh qiymat o'qiydi!"
        },
        "-h": {
          name: "Odam tushunadigan birliklar (Human-readable: G, M, K)",
          syntaxPos: "<code>df -h</code>",
          whatItDoes: "Baytlar o'rniga GB, MB ko'rinishida chiqaradi.",
          whenNeeded: "Inson ko'zi bilan tezkor baholashda.",
          withoutRisk: "⚠️ Skriptlarda -h ishlatilsa, sonlarni solishtirish qiyinlashadi."
        }
      }
    },

    gcc: {
      name: "GNU C Compiler (C dasturlarini mashina kodiga o'girish)",
      whatItDoes: "C dasturlash tilidagi <code>.c</code> fayllarni tahlil qilib, mashina tushunadigan bajariluvchi fayl (executable binary) ga aylantiradi.",
      whyFlags: "Xatolarni o'z vaqtida ko'rish va natijaviy faylga nom berish uchun bayroqlar kerak.",
      generalWhen: "Tizim dasturlari (masalan <code>fork.c</code>) ni kompilyatsiya qilishda.",
      generalWithout: "Yashirin xatolar bilinmay qoladi va fayl doim <code>a.out</code> deb nomlanadi.",
      flags: {
        "-Wall": {
          name: "Barcha asosiy ogohlantirishlarni yoqish (All Warnings)",
          syntaxPos: "<code>gcc -Wall fayl.c</code>",
          whatItDoes: "Potensial xavfli, lekin sintaktik to'g'ri kodlar haqida kompilyator xabar beradi.",
          whenNeeded: "Xotira oqishi yoki o'zgaruvchi xatolarini oldini olishda.",
          withoutRisk: "⚠️ AGAR -Wall BO'LMASA: Xavfli xatolar sezilmay qolib, dastur ish vaqtida qulab tushadi!"
        },
        "-Wextra": {
          name: "Qo'shimcha qat'iy ogohlantirishlar (Extra Warnings)",
          syntaxPos: "<code>gcc -Wextra fayl.c</code>",
          whatItDoes: "Ishlatilmagan parametrlar va nozik xatolarni ham tekshiradi.",
          whenNeeded: "Professional toza kod yozishda.",
          withoutRisk: "⚠️ Bo'lmasa e'tibordan chetda qolgan nozik kamchiliklar qolib ketadi."
        },
        "-o": {
          name: "Chiqish fayli nomini belgilash (Output filename)",
          syntaxPos: "<code>gcc kod.c -o dastur.out</code>",
          whatItDoes: "Natijaviy ikkilik faylga istalgan nom beradi.",
          whenNeeded: "Dasturni aniq nom bilan chaqirish uchun.",
          withoutRisk: "⚠️ AGAR -o BO'LMASA: Sukut bo'yicha doim <code>a.out</code> fayli paydo bo'ladi va oldingi dasturlarni ustiga yozib yuboradi!"
        }
      }
    },

    read: {
      name: "Foydalanuvchi yoki oqimdan ma'lumot o'qish (Read user input)",
      whatItDoes: "Standart kirishdan (stdin) yoki terminaldan ma'lumotni satrma-satr o'qib o'zgaruvchiga yuklaydi.",
      whyFlags: "Qiya chiziqlarni asrab qolish, ekranga taklif matni chiqarish yoki parollarni yashirish uchun bayroqlar kerak.",
      generalWhen: "Interaktiv skriptlar va ma'lumotlarni oqimli tahlil qilishda.",
      generalWithout: "Kiritilgan ma'lumot xato o'qilishi yoki maxfiy parollar ekranda ko'rinib qolishi mumkin.",
      flags: {
        "-r": {
          name: "Xom rejim (Raw mode - backslash saqlash)",
          syntaxPos: "<code>read -r var</code>",
          whatItDoes: "Teskari qiya chiziq (<code>\\</code>) ni escape deb emas, oddiy harf deb qabul qiladi.",
          whenNeeded: "Windows yo'llari yoki fayl yo'llarini o'qishda.",
          withoutRisk: "⚠️ AGAR -r BO'LMASA: Yo'llardagi <code>\\</code> lar yo'qolib ketadi va fayl topilmaydi!"
        },
        "-p": {
          name: "Taklif matnini chiqarish (Prompt text)",
          syntaxPos: "<code>read -p 'Ismingiz: ' name</code>",
          whatItDoes: "Kiritish maydoni oldidan so'rov matnini chiqaradi.",
          whenNeeded: "Foydalanuvchiga nima kiritish kerakligini tushuntirishda.",
          withoutRisk: "⚠️ AGAR -p BO'LMASA: Terminal hech narsa demasdan miltillab qotib turaveradi."
        },
        "-s": {
          name: "Yashirin kiritish (Silent / Secret mode)",
          syntaxPos: "<code>read -s -p 'Parol: ' pass</code>",
          whatItDoes: "Kiritilayotgan harflarni terminalda ko'rsatmaydi.",
          whenNeeded: "Parollar yoki tokenlar kiritilayotganda.",
          withoutRisk: "⚠️ AGAR -s BO'LMASA: Parol hammaga ochiq ko'rinib qoladi!"
        },
        "-d": {
          name: "Chegaralovchi belgi (Delimiter)",
          syntaxPos: "<code>read -d '' var</code> (NUL delimiter)",
          whatItDoes: "Yangi satr o'rniga ko'rsatilgan belgi (masalan <code>\\0</code>) gacha o'qiydi.",
          whenNeeded: "<code>find -print0</code> oqimlarini qabul qilishda.",
          withoutRisk: "⚠️ Bo'lmasa bo'sh joyli fayllar buzilib ketadi."
        }
      }
    },

    kill: {
      name: "Jarayonlarga signal yuborish (Send Signal to Process)",
      whatItDoes: "Operatsion tizim yadrosi orqali jarayonga maxsus signal (to'xtatish, yakunlash, qayta yuklash) jo'natadi.",
      whyFlags: "Qaysi turdagi signal yuborilishini belgilash uchun.",
      generalWhen: "Qotib qolgan yoki javob bermayotgan dasturlarni to'xtatishda.",
      generalWithout: "Sukut bo'yicha SIGTERM (15) yuboriladi.",
      flags: {
        "-9": {
          name: "Majburiy to'xtatish signali (SIGKILL)",
          syntaxPos: "<code>kill -9 PID</code>",
          whatItDoes: "Jarayonni zudlik bilan xotiradan tozalaydi, jarayon bu signalni e'tiborsiz qoldirolmaydi.",
          whenNeeded: "Cheksiz siklga kirib ketgan yoki qotib qolgan dasturlarni to'xtatishda.",
          withoutRisk: "⚠️ Ehtiyot bo'ling: Fayllar saqlanmay qolishi mumkin."
        },
        "-15": {
          name: "Xushmuomala to'xtatish signali (SIGTERM)",
          syntaxPos: "<code>kill -15 PID</code>",
          whatItDoes: "Jarayonga xavfsiz yopilish va fayllarni saqlash imkonini beradi.",
          whenNeeded: "Standart xavfsiz to'xtatishda.",
          withoutRisk: "⚠️ Agar dastur qotib qolgan bo'lsa SIGTERM ta'sir qilmasligi mumkin."
        }
      }
    },

    systemctl: {
      name: "Systemd xizmatlarini boshqarish (Control Systemd System & Service Manager)",
      whatItDoes: "Linux tizimi xizmatlari (daemons), soketlar va taymerlarni ishga tushirish, to'xtatish va monitoring qilish vositasi.",
      whyFlags: "Foydalanuvchi darajasidagi xizmatlarni boshqarish yoki jim rejimda tekshirish uchun bayroqlar kerak.",
      generalWhen: "Server monitoringi va avtomatlashtirilgan xizmatlarni boshqarishda.",
      generalWithout: "Sukut bo'yicha root tizim xizmatlari qidiriladi va ruxsat xatosi beradi.",
      flags: {
        "--user": {
          name: "Foydalanuvchi darajasidagi xizmatlar (User mode)",
          syntaxPos: "<code>systemctl --user [buyruq] [unit]</code>",
          whatItDoes: "Root bo'lmagan oddiy talaba foydalanuvchisi shaxsiy taymer va servislari ustida ishlaydi.",
          whenNeeded: "Sudo parolisiz shaxsiy avtomatlashtirish taymerlarini yaratishda.",
          withoutRisk: "⚠️ AGAR --user BO'LMASA: Tizim root ruxsatini talab qiladi va 'Failed to connect to bus' xatosi beradi!"
        },
        "--quiet": {
          name: "Jim rejim (Quiet mode)",
          syntaxPos: "<code>systemctl is-active --quiet [service]</code>",
          whatItDoes: "Ekranga 'active' yoki 'inactive' deb yozmasdan, faqat chiqish statusi (<code>0</code> yoki <code>3</code>) ni qaytaradi.",
          whenNeeded: "<code>if systemctl is-active --quiet cron; then</code> kabi if shartlarida.",
          withoutRisk: "⚠️ AGAR --quiet BO'LMASA: Ekranga keraksiz so'zlar chiqib skript loglarini bulg'aydi."
        }
      }
    },

    crontab: {
      name: "Davriy vazifalar jadvalini boshqarish (Maintain crontab files)",
      whatItDoes: "Cron demoni uchun belgilangan vaqtlarda (daqiqa, soat, kun) avtomatik ishga tushadigan topshiriqlar jadvalini boshqaradi.",
      whyFlags: "Jadvalni ko'rish, tahrirlash yoki o'chirishni tanlash uchun.",
      generalWhen: "Serverda har kuni yoki har daqiqada avtomatik backup va tekshiruvlar o'tkazishda.",
      generalWithout: "Qo'shimchasiz chaqirilsa terminal qotib qolishi mumkin.",
      flags: {
        "-e": {
          name: "Jadvalni tahrirlash (Edit crontab)",
          syntaxPos: "<code>crontab -e</code>",
          whatItDoes: "Foydalanuvchining cron jadvalini matn muharririda ochib o'zgartirish kiritish imkonini beradi.",
          whenNeeded: "Yangi davriy vazifa qo'shishda.",
          withoutRisk: "⚠️ Bo'lmasa jadvalga o'zgartirish kiritib bo'lmaydi."
        },
        "-l": {
          name: "Jadvalni ekranga chiqarish (List crontab)",
          syntaxPos: "<code>crontab -l</code>",
          whatItDoes: "Mavjud rejalashtirilgan vazifalar ro'yxatini ko'rsatadi.",
          whenNeeded: "Qaysi skriptlar qachon yurishini audit qilishda.",
          withoutRisk: "⚠️ Bo'lmasa nima rejalashtirilganini bilib bo'lmaydi."
        },
        "-r": {
          name: "Jadvalni tozalash (Remove crontab)",
          syntaxPos: "<code>crontab -r</code>",
          whatItDoes: "Barcha davriy vazifalarni butunlay o'chirib tashlaydi.",
          whenNeeded: "Eski laboratoriya vazifalarini tozalashda.",
          withoutRisk: "⚠️ Ehtiyot bo'ling: Barcha rejalashtirilgan ishlar bekor bo'ladi."
        }
      }
    },

    stat: {
      name: "Fayl metama'lumotlarini aniqlash (Display File Status)",
      whatItDoes: "Faylning hajmi, inode raqami, kirish vaqti, o'zgarish vaqti va ruxsatlarini ko'rsatadi.",
      whyFlags: "Skriptlarda faqat sonli qiymatni ajratib olish uchun format bayrog'i shart.",
      generalWhen: "Fayl hajmini baytlarda solishtirishda va log rotatsiyasida.",
      generalWithout: "Ko'p satrli umumiy ma'lumotlar chiqib skript uni raqam deb o'qiy olmaydi.",
      flags: {
        "-c": {
          name: "Formatni tanlash (-c '%s')",
          syntaxPos: "<code>stat -c '%s' fayl</code>",
          whatItDoes: "Faqatgina fayl hajmini butun son (bayt) ko'rinishida formatlab chiqaradi.",
          whenNeeded: "Hajm 0 baytdan katta ekanini tekshirishda.",
          withoutRisk: "⚠️ AGAR -c '%s' BO'LMASA: 10 qatorli matn chiqadi va 'if [ $size -gt 0 ]' matematik xato beradi!"
        }
      }
    },

    tee: {
      name: "Oqimni ikkiga ajratish (Read stdin and write to stdout and files)",
      whatItDoes: "Kelgan ma'lumotni ham terminal ekraniga chiqaradi, ham faylga yozib saqlaydi.",
      whyFlags: "Faylni ustiga yozmasdan, oxiriga qo'shish (append) uchun bayroq kerak.",
      generalWhen: "Skript natijasini ko'rib turgan holda arxiv log fayliga ham yozishda.",
      generalWithout: "Eski loglar o'chib ketishi mumkin.",
      flags: {
        "-a": {
          name: "Oxiriga qo'shish (Append mode)",
          syntaxPos: "<code>buyruq | tee -a log.txt</code>",
          whatItDoes: "Mavjud log faylini tozalab tashlamasdan, yangi xabarni pastiga qo'shib yozadi.",
          whenNeeded: "Tizim auditi va monitoringida.",
          withoutRisk: "⚠️ AGAR -a BO'LMASA: Har bir yangi xabar butun eski log tarixini o'chirib yuboradi!"
        }
      }
    },

    gzip: {
      name: "Fayllarni siqish (Compress Files)",
      whatItDoes: "Fayllarni Lempel-Ziv algoritmi orqali siqib <code>.gz</code> kengaytmasiga aylantiradi.",
      whyFlags: "Xavfsizlik va aniq fayl ko'rsatish uchun.",
      generalWhen: "Eski loglarni arxivlashda disk joyini tejash uchun.",
      generalWithout: "Disk tezda loglar bilan to'lib ketadi.",
      flags: {
        "--": {
          name: "Bayroqlar tugashini bildirish (End of options delimiter)",
          syntaxPos: "<code>gzip -- '$file'</code>",
          whatItDoes: "Undan keyin kelgan har qanday matn (hatto tire <code>-</code> bilan boshlansa ham) fayl nomi deb tushuniladi.",
          whenNeeded: "G'alati nomli fayllar bilan xavfsiz ishlashda.",
          withoutRisk: "⚠️ AGAR -- BO'LMASA: Fayl nomi '-test.log' bo'lsa gzip uni noto'g'ri bayroq deb o'ylab qulaydi!"
        }
      }
    },

    ulimit: {
      name: "Jarayon resurslari limitlari (User Limits)",
      whatItDoes: "Joriy shell va uning bolalar jarayonlari uchun tizim resurslari (xotira, fayllar, protsesslar soni) ga chegara qo'yadi.",
      whyFlags: "Aynan qaysi resurs (xotira yoki protsess soni) chegaralanayotganini ko'rsatish uchun.",
      generalWhen: "Fork bombadan himoyalanishda va server barqarorligini ta'minlashda.",
      generalWithout: "Tizim qotib qolishi (hang) mumkin.",
      flags: {
        "-u": {
          name: "Maksimal jarayonlar soni (Max user processes)",
          syntaxPos: "<code>ulimit -u 50</code>",
          whatItDoes: "Foydalanuvchi bir vaqtda ochishi mumkin bo'lgan maksimal jarayonlar sonini cheklaydi.",
          whenNeeded: "Cheksiz fork() klonlash tajribalarida serverni qulashdan himoyalashda.",
          withoutRisk: "⚠️ AGAR -u BO'LMASA: Fork bomb butun serverning barcha protsessor va xotirasini qotirib qo'yadi!"
        },
        "-a": {
          name: "Barcha limitlarni ko'rish (All limits)",
          syntaxPos: "<code>ulimit -a</code>",
          whatItDoes: "Tizimdagi barcha joriy chegaralarni ro'yxatlaydi.",
          whenNeeded: "Server sozlamalarini tekshirishda.",
          withoutRisk: "⚠️ Limitlarni bilmasdan turib dastur xotira xatolariga uchrashi mumkin."
        }
      }
    },

    cut: {
      name: "Satrlardan ustunlarni ajratish (Remove sections from lines)",
      whatItDoes: "Har bir satrni ajratuvchi belgi (delimiter) orqali bo'laklarga ajratib, kerakli ustunlarni chiqaradi.",
      whyFlags: "Ajratuvchi belgi va ustun raqamlarini ko'rsatish uchun.",
      generalWhen: "<code>/etc/passwd</code> yoki CSV fayllaridan ma'lumot ajratishda.",
      generalWithout: "Butun satr chiqib ketadi.",
      flags: {
        "-d": {
          name: "Ajratuvchi belgi (Delimiter)",
          syntaxPos: "<code>cut -d: -f1 /etc/passwd</code>",
          whatItDoes: "Satr qaysi belgi (masalan <code>:</code>) bilan ajratilganini bildiradi.",
          whenNeeded: "Ikki nuqta bilan ajratilgan tizim fayllarida.",
          withoutRisk: "⚠️ Sukut bo'yicha TAB belgisi kutiladi va hech narsa ajralmaydi."
        },
        "-f": {
          name: "Ustun raqami (Field list)",
          syntaxPos: "<code>cut -d: -f1,7 /etc/passwd</code>",
          whatItDoes: "Aynan qaysi ustunlar (masalan 1-ism va 7-shell) kerakligini tanlaydi.",
          whenNeeded: "Keraksiz ma'lumotlarni tashlab yuborishda.",
          withoutRisk: "⚠️ Bo'lmasa qaysi ustun chiqarilishi noma'lum bo'lib qoladi."
        }
      }
    },

    sort: {
      name: "Satrlarni saralash (Sort lines of text)",
      whatItDoes: "Matn satrlarini alifbo yoki raqamlar tartibida tartiblaydi.",
      whyFlags: "Raqamli saralash yoki teskari tartibni belgilash uchun.",
      generalWhen: "Statistika yig'ishda va <code>uniq</code> dan oldin.",
      generalWithout: "Raqamlar alifbo tartibida (1, 10, 2) saralanib xato natija beradi.",
      flags: {
        "-n": {
          name: "Sonli qiymat bo'yicha saralash (Numeric sort)",
          syntaxPos: "<code>sort -n</code>",
          whatItDoes: "Satrlarni oddiy harf emas, haqiqiy arifmetik son deb tushunadi.",
          whenNeeded: "UID raqamlari yoki takrorlanishlar sonini to'g'ri saralashda.",
          withoutRisk: "⚠️ AGAR -n BO'LMASA: '10' soni '2' dan oldin kelib qoladi!"
        },
        "-r": {
          name: "Teskari saralash (Reverse)",
          syntaxPos: "<code>sort -nr</code>",
          whatItDoes: "Kattadan kichikka qarab teskari tartibda joylashtiradi.",
          whenNeeded: "Eng ko'p tashrif buyurgan Top IP larni yuqoriga chiqarishda.",
          withoutRisk: "⚠️ Eng kichik qiymatlar yuqorida qolib ketadi."
        }
      }
    },

    uniq: {
      name: "Takrorlangan qatorlarni tahlil qilish (Report or omit repeated lines)",
      whatItDoes: "Ketma-ket kelgan bir xil satrlarni bittaga tushiradi yoki ularni sanaydi.",
      whyFlags: "Necha marta takrorlanganini hisoblash uchun.",
      generalWhen: "Serverga qilingan hujumlar yoki tashriflar sonini hisoblashda.",
      generalWithout: "Faqat bir xillarini qirqadi, lekin sonini aytmaydi.",
      flags: {
        "-c": {
          name: "Takrorlanishlar sonini sanash (Count occurrences)",
          syntaxPos: "<code>sort | uniq -c</code>",
          whatItDoes: "Har bir satr oldiga uning necha marta takrorlangan sonini yozib qo'yadi.",
          whenNeeded: "Apache loglarida eng faol IP larni topishda.",
          withoutRisk: "⚠️ AGAR -c BO'LMASA: Har bir IP dan nechtadan so'rov kelganini bilolmaysiz!"
        }
      }
    },

    umask: {
      name: "Yangi fayllar uchun standart ruxsat maskasi (User File-Creation Mask)",
      whatItDoes: "Yangi yaratiladigan fayl va papkalardan sukut bo'yicha qaysi huquqlar olib tashlanishini (ayirib tashlanishini) belgilaydi.",
      whyFlags: "Raqamli rejim xavfsizlik darajasini belgilaydi (masalan 022, 027, 077).",
      generalWhen: "Tizim xavfsizligini oshirishda va yangi fayllarni begonalar o'qishini taqiqlashda.",
      generalWithout: "Fayllar hammaga ochiq bo'lib qoladi.",
      flags: {
        "-S": {
          name: "Simvolli formatda ko'rish (Symbolic format)",
          syntaxPos: "<code>umask -S</code>",
          whatItDoes: "Maskani <code>u=rwx,g=rx,o=rx</code> ko'rinishida ko'rsatadi.",
          whenNeeded: "Tushunishni osonlashtirishda.",
          withoutRisk: "⚠️ Faqat raqamli 0022 ko'rinadi."
        }
      }
    },

    cat: {
      name: "Fayllarni birlashtirish va ekranga chiqarish (Concatenate files)",
      whatItDoes: "Fayl ichidagi barcha matnlarni to'g'ridan-to'g'ri terminal ekraniga chiqaradi.",
      whyFlags: "Qator raqamlari yoki maxsus belgilarni ko'rsatish uchun.",
      generalWhen: "Konfiguratsiyalarni (masalan <code>/etc/passwd</code>) tezkor o'qishda.",
      generalWithout: "Katta fayllarda terminal to'lib ketishi mumkin.",
      flags: {
        "-n": {
          name: "Qatorlarni raqamlash (Number lines)",
          syntaxPos: "<code>cat -n fayl</code>",
          whatItDoes: "Har bir satr boshiga 1 dan boshlab qator raqamini qo'yib beradi.",
          whenNeeded: "Skript xatolarida aynan qaysi satrda muammo borligini bilishda.",
          withoutRisk: "⚠️ Qator raqamlarini sanash qiyinlashadi."
        }
      }
    }
  };

  // --- Dynamic Explainer Function ---
  function analyzeCommand(commandStr, questionObj) {
    if (!commandStr && questionObj) {
      commandStr = questionObj.expectedBash || (questionObj.solutions && questionObj.solutions[0]) || "";
    }
    const cleanCmd = (commandStr || "").trim();
    const parts = cleanCmd.split(/\s+/);
    const baseCmd = parts[0] ? parts[0].replace(/^\.\//, "").replace(/;$/, "") : "";

    const kb = KNOWLEDGE_BASE[baseCmd] || null;

    let whatItDoes = "";
    let whyFlags = "";
    let generalWhen = "";
    let generalWithout = "";
    const flagsList = [];

    if (kb) {
      whatItDoes = kb.whatItDoes;
      whyFlags = kb.whyFlags;
      generalWhen = kb.generalWhen;
      generalWithout = kb.generalWithout;

      // Extract flags from commandStr
      Object.keys(kb.flags).forEach(fl => {
        // Match flag either with space, attached, or exact
        const regex = new RegExp(`(^|\\s)${escapeRegExp(fl)}(\\s|$)`);
        if (regex.test(cleanCmd) || cleanCmd.includes(fl)) {
          flagsList.push({
            flag: fl,
            ...kb.flags[fl]
          });
        }
      });
    } else {
      // Generic fallback for any other Linux command
      whatItDoes = `Linux tizimidagi standart <code>${escapeHtml(baseCmd)}</code> utilitasi tizim resurslari va buyruq parametrlarini qayta ishlash uchun xizmat qiladi.`;
      whyFlags = `Qo'shimcha bayroqlar (flags) buyruqning standart xatti-harakatini o'zgartirish, aniq filtrlash va avtomatlashtirilgan rejimda ishlashni ta'minlaydi.`;
      generalWhen = `Tizim boshqaruvi va skriptlarni avtomatlashtirish jarayonida.`;
      generalWithout = `Buyruq sukut rejimida ishlaydi yoki kerakli natijani bermasdan to'xtashi mumkin.`;
    }

    // Also merge with question.flagAnatomy if available (e.g. from Week 4)
    if (questionObj && questionObj.flagAnatomy && Array.isArray(questionObj.flagAnatomy.flags)) {
      questionObj.flagAnatomy.flags.forEach(qf => {
        if (!flagsList.some(f => f.flag === qf.flag)) {
          flagsList.push({
            flag: qf.flag,
            name: qf.name,
            syntaxPos: qf.syntaxPos || `${baseCmd} dan keyin`,
            whatItDoes: qf.purpose,
            whenNeeded: "Darslik topshirig'i talabiga ko'ra.",
            withoutRisk: qf.withoutRisk || "⚠️ Kerakli operatsiya bajarilmay qoladi."
          });
        }
      });
    }

    return {
      baseCmd,
      fullCommand: cleanCmd,
      whatItDoes,
      whyFlags,
      generalWhen,
      generalWithout,
      flagsList
    };
  }

  function renderCardHtml(anatomy) {
    const hasFlags = anatomy.flagsList && anatomy.flagsList.length > 0;

    let html = `
      <div class="cmd-section">
        <div class="cmd-sec-head cyan">
          <span>⚙️ 1. Komandaning O'zi Nima Ish Bajaradi? (Nima qiladi va qanday qiladi?)</span>
        </div>
        <div class="cmd-sec-text">
          ${anatomy.whatItDoes}
        </div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head amber">
          <span>🎯 2. Qo'shimchalar (Bayroqlar / Flags) Qo'shilishiga Sabab Nima?</span>
        </div>
        <div class="cmd-sec-text">
          ${anatomy.whyFlags}
        </div>
      </div>
    `;

    if (hasFlags) {
      html += `
        <div class="cmd-section">
          <div class="cmd-sec-head emerald">
            <span>⚡ 3. Har Bir Qo'shimcha Nima Qiladi va Qayerda Joylashadi?</span>
          </div>
          <div class="cmd-flag-grid">
      `;
      anatomy.flagsList.forEach(f => {
        html += `
          <div class="cmd-flag-row">
            <div class="cmd-flag-top">
              <span class="cmd-flag-tag">${escapeHtml(f.flag)}</span>
              <span class="cmd-flag-name">${escapeHtml(f.name)}</span>
              ${f.syntaxPos ? `<span class="cmd-flag-pos">[Joylashuvi: ${f.syntaxPos}]</span>` : ""}
            </div>
            <div class="cmd-flag-purpose"><b>Vazifasi:</b> ${f.whatItDoes}</div>
            ${f.whenNeeded ? `<div class="cmd-flag-purpose" style="color:#38bdf8;"><b>Qachon kerak:</b> ${f.whenNeeded}</div>` : ""}
            ${f.withoutRisk ? `<div class="cmd-flag-risk">${f.withoutRisk}</div>` : ""}
          </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    } else {
      html += `
        <div class="cmd-section">
          <div class="cmd-sec-head emerald">
            <span>⚡ 3. Qo'shimchalar Holati</span>
          </div>
          <div class="cmd-sec-text">
            Ushbu qadamda qo'shimcha bayroqlar shart emas. Buyruq o'zining sof boshlang'ich rejimida to'liq vazifani bajaradi.
          </div>
        </div>
      `;
    }

    html += `
      <div class="cmd-section">
        <div class="cmd-sec-head cyan">
          <span>⏰ 4. Qachon Kerak Bo'ladi?</span>
        </div>
        <div class="cmd-sec-text">
          ${anatomy.generalWhen}
        </div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head ruby">
          <span>⚠️ 5. Agar Bu Buyruq / Qo'shimchalar Bo'lmasa Nima Bo'ladi?</span>
        </div>
        <div class="cmd-sec-text" style="color:#fca5a5;">
          ${anatomy.generalWithout}
        </div>
      </div>
    `;

    return html;
  }

  function escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  window.COMMAND_ANATOMY = {
    analyze: analyzeCommand,
    renderCardHtml: renderCardHtml
  };
})();
