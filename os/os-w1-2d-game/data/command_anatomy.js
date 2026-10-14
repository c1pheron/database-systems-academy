// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 1 MASTER COMMAND & FLAG ANATOMY ENGINE
// Deep Pedagogical Breakdown for Week 1 Linux Commands & Flags:
// 1. Komandaning o'zi nima ish bajaradi? (Nima qiladi va qanday qiladi?)
// 2. Qo'shimchalar (flags/options) nima uchun qo'shiladi?
// 3. Har bir qo'shimchaning vazifasi, sintaksisdagi o'rni.
// 4. Qachon kerak bo'ladi?
// 5. ⚠️ Agar bu qo'shimchalar bo'lmasa nima bo'ladi? (Real xatolar va falokatlar)
// ============================================================================

(function () {
  const KNOWLEDGE_BASE = {
    pwd: {
      name: "Joriy Ishchi Katalogni Ko'rsatish (Print Working Directory)",
      whatItDoes: "Linux VFS (Virtual File System) daraxtida foydalanuvchi ayni paytda qaysi katalogda turganini aniqlab, uning ildizdan boshlangan to'liq (absolyut) manzilini ekranga chiqaradi.",
      whyFlags: "Odatda bayroqsiz ishlatiladi. Murakkab tizimlarda fizik va mantiqiy (simvolik bog'lam) yo'llarni ajratish uchun bayroqlar ishlatiladi.",
      generalWhen: "Terminalga SSH orqali kirganda, nisbiy yo'llar bilan ishlashdan oldin yoki skript ichida joriy joylashuvni o'zgaruvchiga saqlashda.",
      generalWithout: "Foydalanuvchi qaysi papkada ekanini bilmay, noto'g'ri joyda fayl yaratishi yoki boshqa papkadagi fayllarni adashib o'chirib yuborishi mumkin.",
      flags: {
        "-P": {
          name: "Fizik manzilni ko'rsatish (Physical Directory)",
          syntaxPos: "<code>pwd -P</code>",
          whatItDoes: "Agar joriy katalog simvolik havola (symlink) bo'lsa, havolaning o'zini emas, diskdagi asl fizik manzilini ko'rsatadi.",
          whenNeeded: "Simvolik bog'lamlar bilan chalkashmaslik va fayllarning haqiqiy saqlanish joyini aniqlashda.",
          withoutRisk: "⚠️ AGAR -P BO'LMASA: Standart <code>pwd</code> simvolik yo'lni ko'rsatadi va siz fayl aslida qaysi disk bo'limida ekanini ko'ra olmaysiz."
        },
        "-L": {
          name: "Mantiqiy manzilni ko'rsatish (Logical Directory)",
          syntaxPos: "<code>pwd -L</code>",
          whatItDoes: "Atrof-muhitdagi $PWD o'zgaruvchisi bo'yicha simvolik bog'lamli yo'lni ko'rsatadi (sukut bo'yicha rejim).",
          whenNeeded: "Foydalanuvchi mantiqiy yo'l bo'yicha navigatsiya qilganda.",
          withoutRisk: "Fizik manzil yashirin qoladi."
        }
      }
    },

    whoami: {
      name: "Joriy Foydalanuvchi Loginini Chiqarish (Print Effective User ID)",
      whatItDoes: "Tizim yadrosining joriy jarayoniga tegishli samarali foydalanuvchi nomi (Effective UID) ni <code>/etc/passwd</code> ma'lumotlariga asosan aniqlaydi.",
      whyFlags: "Oddiy buyruq bo'lib, bayroq talab qilmaydi.",
      generalWhen: "Serverda bir nechta akkaunt yoki <code>su</code> / <code>sudo</code> orqali boshqa foydalanuvchiga o'tilganda kim bo'lib turganingizni tekshirish uchun.",
      generalWithout: "Root vakolatida turib xavfli buyruqlar berib qo'yish yoki oddiy foydalanuvchi huquqi bilan amal bajarib xatoga uchrash xavfi tug'iladi.",
      flags: {}
    },

    hostname: {
      name: "Server va Tarmoq Nomi (Show System Hostname)",
      whatItDoes: "Linux yadrosi va <code>/etc/hostname</code> faylida saqlangan tarmoq identifikatorini ko'rsatadi.",
      whyFlags: "IP manzil yoki FQDN (to'liq domen) formatlarini olish uchun bayroqlar ishlatiladi.",
      generalWhen: "O'nlab klaster serverlari (prod, staging, dev) boshqarilayotganda, aynan to'g'ri serverda ishlayotganingizni tasdiqlash uchun.",
      generalWithout: "Ishlab chiqarish (Production) serverini adashtirib, test server deb o'ylab xato buyruq yuborish falokatiga olib keladi.",
      flags: {
        "-I": {
          name: "Barcha tarmoq IP manzillarini chiqarish",
          syntaxPos: "<code>hostname -I</code>",
          whatItDoes: "Serverga ulangan tarmoq interfeyslarining barcha IP manzillarini bo'sh joy bilan ajratib ko'rsatadi.",
          whenNeeded: "Serverning ichki/tashqi IP sini tezda bilishda.",
          withoutRisk: "IP manzilni bilish uchun uzunroq <code>ip addr</code> buyrug'ini yozishga to'g'ri keladi."
        }
      }
    },

    cd: {
      name: "Ishchi Katalogni O'zgartirish (Change Directory)",
      whatItDoes: "Linux VFS daraxtida joriy jarayonning ishchi katalogi ko'rsatkichini yangi manzilga o'zgartiradi.",
      whyFlags: "Yo'l argumentlari (`~`, `..`, `-`, `/`) orqali katalog tanlanadi.",
      generalWhen: "Fayllar ustida amallar bajarishdan oldin kerakli katalogga o'tishda.",
      generalWithout: "Har bir buyruqda fayllarning uzun absolyut yo'lini qayta-qayta yozishga majbur bo'lasiz.",
      flags: {
        "~": {
          name: "Uy katalogiga o'tish (Home Directory)",
          syntaxPos: "<code>cd ~</code> yoki oddiygina <code>cd</code>",
          whatItDoes: "Foydalanuvchining shaxsiy uy katalogiga (masalan <code>/home/student</code>) bir zumda qaytaradi.",
          whenNeeded: "Tizimning chuqur kataloglaridan tezda o'z shaxsiy hududingizga qaytishda.",
          withoutRisk: "⚠️ AGAR ~ ISHLATILMASA: Har safar <code>cd /home/student</code> deb to'liq yozishga to'g'ri keladi."
        },
        "..": {
          name: "Bitta ustki katalogga chiqish (Parent Directory)",
          syntaxPos: "<code>cd ..</code>",
          whatItDoes: "Joriy katalogning ota (parent) katalogiga ko'tariladi.",
          whenNeeded: "Papkalar bo'ylab bir pog'ona yuqoriga qaytishda.",
          withoutRisk: "Yuqoriga chiqish uchun butun yo'lni qaytadan yozish kerak bo'ladi."
        },
        "-": {
          name: "Oldingi katalogga qaytish (Previous Directory / Toggle)",
          syntaxPos: "<code>cd -</code>",
          whatItDoes: "Oxirgi marta turgan oldingi katalogga o'tkazadi ($OLDPWD).",
          whenNeeded: "Ikki uzoq katalog (masalan <code>/var/log/nginx</code> va <code>/home/student/project</code>) o'rtasida oldinga-orqaga tez almashishda.",
          withoutRisk: "Har safar uzun yo'lni qaytadan eslab yozishga to'g'ri keladi."
        }
      }
    },

    ls: {
      name: "Katalog Tarkibini Ro'yxat Qilish (List Directory Contents)",
      whatItDoes: "Katalog ichidagi fayl va ichki papkalar nomlarini o'qiydi va ekranga chiqaradi.",
      whyFlags: "Yashirin fayllarni ko'rish, fayl huquqlari, hajmi, inode raqamlari va saralashni boshqarish uchun bayroqlar ishlatiladi.",
      generalWhen: "Har safar yangi katalogga kirganda yoki fayllar borligini tekshirishda.",
      generalWithout: "Katalogda qanday fayllar borligini ko'ra olmaysiz.",
      flags: {
        "-l": {
          name: "Kengaytirilgan jadval ko'rinishi (Long Listing Format)",
          syntaxPos: "<code>ls -l</code>",
          whatItDoes: "Fayl turi, 9 ta ruxsat biti (rwxr-xr-x), bog'lamlar soni, egasi, guruhi, bayt hajmi va o'zgartirilgan vaqtini batafsil ko'rsatadi.",
          whenNeeded: "Fayl ruxsatlari, egasi yoki hajmini tekshirishda.",
          withoutRisk: "⚠️ AGAR -l BO'LMASA: Faqat fayl nomlari chiqadi; fayl kimga tegishli va qanday huquqlarga ega ekanini mutlaqo bilib bo'lmaydi!"
        },
        "-a": {
          name: "Barcha fayllarni ko'rsatish (All including Hidden)",
          syntaxPos: "<code>ls -a</code>",
          whatItDoes: "Nuqta (<code>.</code>) bilan boshlanadigan yashirin fayl va konfiguratsiyalarni (masalan <code>.bashrc</code>, <code>.profile</code>, <code>.git</code>) ham chiqaradi.",
          whenNeeded: "Tizim sozlamalari, atrof-muhit o'zgaruvchilari va yashirin konfiguratsiyalarni tahrirlashda.",
          withoutRisk: "⚠️ AGAR -a BO'LMASA: Yashirin konfiguratsiya fayllari (<code>.bashrc</code>, <code>.ssh/</code>) ko'rinmaydi va siz papka bo'm-bo'sh deb o'ylaysiz!"
        },
        "-la": {
          name: "To'liq jadval + Yashirin fayllar (Long Listing + All)",
          syntaxPos: "<code>ls -la</code> yoki <code>ls -al</code>",
          whatItDoes: "-l va -a bayroqlarining kuchli kombinatsiyasi: barcha fayllarni ularning to'liq atributlari bilan jadval qilib beradi.",
          whenNeeded: "Sysadmin va DevOps ishida eng ko'p ishlatiladigan professional buyruq.",
          withoutRisk: "Fayllarning yarmi yashirin qoladi va huquqlarini ko'rib bo'lmaydi."
        },
        "-lh": {
          name: "Inson tushunadigan o'lchov birliklari (Human-Readable Sizes)",
          syntaxPos: "<code>ls -lh</code>",
          whatItDoes: "Fayl hajmini quruq baytlarda emas, KB, MB, GB birliklarida (masalan 4.2K, 15M, 1.2G) qulay qilib chiqaradi.",
          whenNeeded: "Katta loglar, arxivlar va disk to'lishini baholashda.",
          withoutRisk: "⚠️ AGAR -h BO'LMASA: 4294967296 bayt deb chiqadi, uni darhol 4 GB ekanini hisoblash juda noqulay."
        },
        "-i": {
          name: "Inode raqamlarini ko'rsatish (Print Inode Numbers)",
          syntaxPos: "<code>ls -i</code> yoki <code>ls -li</code>",
          whatItDoes: "Fayl tizimidagi har bir obyektning diskdagi fizik Inode identifikator raqamini satr boshida chiqaradi.",
          whenNeeded: "Hard linklarni tekshirishda va qaysi fayllar bitta fizik ma'lumotga ulanganini aniqlashda.",
          withoutRisk: "⚠️ AGAR -i BO'LMASA: Ikki fayl bir xil ma'lumotga ulanganmi (Hard link) yoki yo'qmi, aniqlab bo'lmaydi!"
        },
        "-R": {
          name: "Rekursiv ko'rsatish (Recursive Listing)",
          syntaxPos: "<code>ls -R</code>",
          whatItDoes: "Joriy papka va uning ostidagi barcha ichki kataloglar tarkibini ketma-ket chiqaradi.",
          whenNeeded: "Butun loyiha katalogining tuzilishini ko'rishda.",
          withoutRisk: "Faqat birinchi qavatdagi fayllar ko'rinadi."
        },
        "-t": {
          name: "Vaqt bo'yicha saralash (Sort by Modification Time)",
          syntaxPos: "<code>ls -lt</code>",
          whatItDoes: "Eng oxirgi o'zgartirilgan fayllarni ro'yxatning eng yuqorisiga chiqaradi.",
          whenNeeded: "Yangi paydo bo'lgan loglarni yoki oxirgi tahrirlangan fayllarni tezda topishda.",
          withoutRisk: "Fayllar alifbo tartibida chiqib, qaysi biri yangilanganini topish qiyinlashadi."
        },
        "-1": {
          name: "Bitta ustun qilib chiqarish (One file per line)",
          syntaxPos: "<code>ls -1</code>",
          whatItDoes: "Fayl nomlarini qatorga birma-bir chiqaradi (quvurlar va skriptlar uchun juda qulay).",
          whenNeeded: "Fayl nomlarini boshqa buyruqlarga (masalan <code>wc -l</code>) uzatishda.",
          withoutRisk: "Nomlar ko'p ustun bo'lib chalkashishi mumkin."
        },
        "-d": {
          name: "Katalogning o'zini ko'rsatish (Directory itself, not contents)",
          syntaxPos: "<code>ls -ld /papka</code>",
          whatItDoes: "Katalog ichiga kirmaydi, aynan katalogning o'zining huquqlari va Inode'ini ko'rsatadi.",
          whenNeeded: "Papkaning ruxsatlarini (masalan <code>chmod 755 /var/www</code>) tekshirishda.",
          withoutRisk: "Papkaning o'zi emas, uning ichidagi barcha fayllar ro'yxati ochilib ketadi."
        }
      }
    },

    mkdir: {
      name: "Yangi Katalog Yaratish (Make Directory)",
      whatItDoes: "Fayl tizimida yangi katalog (directory) obyektini yaratadi, unga yangi Inode ajratadi va <code>.</code> hamda <code>..</code> bog'lamlarini ulaydi.",
      whyFlags: "Bir nechta ichma-ich papkalarni birdaniga ochish yoki boshlang'ich huquqlarni belgilash uchun bayroqlar kerak.",
      generalWhen: "Loyihalar uchun yangi papkalar, loglar yoki modullar saqlanadigan joy tayyorlashda.",
      generalWithout: "Papkalar bo'lmasa barcha fayllar bitta joyga to'planib tartibsizlik yuzaga keladi.",
      flags: {
        "-p": {
          name: "Barcha ota papkalar bilan birga yaratish (Parents Mode)",
          syntaxPos: "<code>mkdir -p loyiha/src/controllers</code>",
          whatItDoes: "Agar ko'rsatilgan yo'ldagi ota papkalar hali mavjud bo'lmasa, ularni ham xatosiz ketma-ket yaratib ketadi. Papka mavjud bo'lsa xato bermaydi.",
          whenNeeded: "Ichma-ich bir nechta darajali kataloglarni bir martada ochishda va skriptlarda xavfsiz katalog yaratishda.",
          withoutRisk: "⚠️ AGAR -p BO'LMASA: KATTA XATO! 'No such file or directory' xatosi berib buyruq to'xtaydi va siz har bir papkani 3-4 marta alohida-alohida yaratishga majbur bo'lasiz!"
        },
        "-v": {
          name: "Har bir yaratilgan papkani xabar qilish (Verbose)",
          syntaxPos: "<code>mkdir -v papka</code>",
          whatItDoes: "Yaratilgan har bir katalog nomini terminalga tasdiqlab chiqaradi.",
          whenNeeded: "Skriptlar bajarilishini kuzatishda.",
          withoutRisk: "Hech qanday xabar chiqmaydi (sukutli rejim)."
        },
        "-m": {
          name: "Boshlang'ich ruxsatlarni belgilash (Set Mode / Octal)",
          syntaxPos: "<code>mkdir -m 700 maxfiy_papka</code>",
          whatItDoes: "Papkani yaratish paytidayoq unga aniq ruxsat kodini (masalan 700 - faqat egasi uchun) beradi.",
          whenNeeded: "Xavfsizlik darajasi yuqori bo'lgan maxfiy papkalar ochishda.",
          withoutRisk: "Sukut bo'yicha umask ruxsati qo'llanadi va papka boshqalarga o'qish uchun ochiq qolishi mumkin."
        }
      }
    },

    rmdir: {
      name: "Bo'sh Katalogni O'chirish (Remove Empty Directory)",
      whatItDoes: "Ichida hech qanday fayl yoki ichki papkasi bo'lmagan bo'sh katalogni xavfsiz o'chiradi.",
      whyFlags: "Xavfsizlik vositasi — agar papka ichida bitta fayl bo'lsa ham o'chirishni rad etadi.",
      generalWhen: "Bo'shab qolgan vaqtinchalik papkalarni xavfsiz tozalashda.",
      generalWithout: "Tasodifan kerakli fayllarni o'chirib yuborish xavfi oshadi.",
      flags: {
        "-p": {
          name: "Ota papkalar bo'sh bo'lsa ularni ham o'chirish (Parents)",
          syntaxPos: "<code>rmdir -p a/b/c</code>",
          whatItDoes: "Zanjir bo'yicha barcha bo'sh ota papkalarni ketma-ket tozalaydi.",
          whenNeeded: "Butun bo'shab qolgan daraxtni tozalashda.",
          withoutRisk: "Faqat eng oxirgi papka o'chadi."
        }
      }
    },

    touch: {
      name: "Fayl Yaratish yoki Vaqtini Yangilash (Touch / Update Timestamp)",
      whatItDoes: "Fayl mavjud bo'lmasa 0 baytli yangi bo'sh fayl yaratadi. Fayl mavjud bo'lsa, uning Inode'idagi kirish (Access) va o'zgartirish (Modify) vaqtini ayni joriy vaqtga yangilaydi.",
      whyFlags: "O'tmishdagi yoki maxsus sanalarni qo'lda kiritish, faqat o'qish yoki faqat o'zgartirish vaqtini yangilash uchun bayroqlar ishlatiladi.",
      generalWhen: "Yangi bo'sh fayllar ochishda yoki build tizimlari (make, compilers) uchun fayl yangilanganini bildirishda.",
      generalWithout: "Fayllarning timestampini o'zgartirib bo'lmaydi va bo'sh fayl ochish uchun murakkabroq usullar kerak bo'ladi.",
      flags: {
        "-d": {
          name: "Maxsus sana va vaqtni matn ko'rinishida berish (Custom Date String)",
          syntaxPos: "<code>touch -d '2024-01-01 12:00:00' fayl.txt</code>",
          whatItDoes: "Faylning Modify va Access vaqtini ko'rsatilgan istalgan sana va vaqtga o'rnatadi.",
          whenNeeded: "Eski zaxira fayllarni sinash, audit vaqtini modellashtirish va vaqt bo'yicha qidiruvlarni (find -mtime) testlashda.",
          withoutRisk: "⚠️ AGAR -d BO'LMASA: Fayl vaqti faqat ayni daqiqadagi joriy tizim soatiga o'rnatiladi, o'tmishdagi vaqtni berib bo'lmaydi."
        },
        "-t": {
          name: "Vaqtni aniq raqamli formatda berish (Timestamp [[CC]YY]MMDDhhmm[.ss])",
          syntaxPos: "<code>touch -t 202401011200 fayl.txt</code>",
          whatItDoes: "Vaqtni qat'iy YYYYMMDDhhmm formati orqali to'g'ridan-to'g'ri o'rnatadi.",
          whenNeeded: "Skriptlarda standartlashtirilgan sanalarni qo'yishda.",
          withoutRisk: "Sana formatini erkin matnda yozishga to'g'ri keladi."
        },
        "-a": {
          name: "Faqat kirish vaqtini o'zgartirish (Access time only)",
          syntaxPos: "<code>touch -a fayl.txt</code>",
          whatItDoes: "Faylning faqat oxirgi o'qilgan vaqtini (atime) yangilaydi, modify (mtime) ga tegmaydi.",
          whenNeeded: "Fayl o'zgarmasdan faqat o'qilganini qayd etishda.",
          withoutRisk: "Ikkala vaqt ham bir vaqtda o'zgaradi."
        },
        "-m": {
          name: "Faqat o'zgartirish vaqtini yangilash (Modify time only)",
          syntaxPos: "<code>touch -m fayl.txt</code>",
          whatItDoes: "Faylning faqat o'zgarish vaqtini (mtime) yangilaydi.",
          whenNeeded: "Fayl tarkibi o'zgargandek ko'rsatishda.",
          withoutRisk: "Access vaqti ham qo'shilib o'zgaradi."
        }
      }
    },

    cat: {
      name: "Fayllarni O'qish va Oqimlarni Birlashtirish (Concatenate & Print)",
      whatItDoes: "Bir yoki bir nechta fayllar tarkibini diskdan o'qiydi va standart chiqish oqimiga (stdout) yo'naltiradi.",
      whyFlags: "Qatorlarni raqamlash, bo'sh qatorlarni qisqartirish va fayllarga qayta yo'naltirish (`>`, `>>`) uchun ishlatiladi.",
      generalWhen: "Konfiguratsiya fayllari (<code>/etc/passwd</code>, <code>/etc/hostname</code>), skriptlar va matnlarni terminalda tez o'qishda.",
      generalWithout: "Faylni ko'rish uchun murakkab matn muharrirlari (nano, vim) ni ochishga majbur bo'lasiz.",
      flags: {
        "-n": {
          name: "Barcha qatorlarni tartib raqami bilan chiqarish (Number all lines)",
          syntaxPos: "<code>cat -n fayl.txt</code>",
          whatItDoes: "Faylning har bir qatori boshiga 1 dan boshlab tartib raqamini qo'yib chiqadi.",
          whenNeeded: "Kod xatolarini tekshirishda yoki loglarda aynan qaysi qatorda xato borligini ko'rishda.",
          withoutRisk: "Qatorlar raqamsiz chiqadi va 500 qatorli faylda kerakli qatorni topish qiyinlashadi."
        },
        "-b": {
          name: "Faqat bo'sh bo'lmagan qatorlarni raqamlash (Number non-empty)",
          syntaxPos: "<code>cat -b fayl.txt</code>",
          whatItDoes: "Bo'sh qatorlarni hisobga olmasdan faqat matn bor qatorlarga raqam beradi.",
          whenNeeded: "Bo'shliqlar ko'p bo'lgan konfiguratsiya fayllarida haqiqiy qatorlarni sanashda.",
          withoutRisk: "Bo'sh qatorlar ham behuda raqamlanadi."
        },
        ">": {
          name: "Chiqishni yangi faylga yo'naltirish (Overwrite / Create)",
          syntaxPos: "<code>cat > yangi_fayl.txt</code> yoki <code>echo 'matn' > fayl.txt</code>",
          whatItDoes: "Faylni noldan yaratadi yoki mavjud faylning eski tarkibini to'liq o'chirib, yangi ma'lumotni yozadi.",
          whenNeeded: "Yangi fayl yozishda yoki faylni tozalab yangilashda.",
          withoutRisk: "⚠️ AGAR ESKI FAYLGA > QILSANGIZ: Eski barcha ma'lumotlar butunlay yo'qoladi! Ehtiyot bo'lish shart!"
        },
        ">>": {
          name: "Chiqishni fayl oxiriga qo'shish (Append)",
          syntaxPos: "<code>cat >> mavjud_fayl.txt</code> yoki <code>echo 'yangi qator' >> log.txt</code>",
          whatItDoes: "Faylning mavjud ma'lumotlarini saqlab qolgan holda, yangi satrni eng oxiriga qo'shib qo'yadi.",
          whenNeeded: "Log yozishda yoki mavjud konfiguratsiyaga yangi parametr qo'shishda.",
          withoutRisk: "⚠️ AGAR >> O'RNIGA > QO'YILSAB: Butun log faylingiz o'chib ketadi va faqat oxirgi satr qoladi!"
        }
      }
    },

    head: {
      name: "Faylning Boshlang'ich Qismini Ko'rsatish (Output First Part)",
      whatItDoes: "Faylning eng boshidan boshlab sukut bo'yicha dastlabki 10 ta qatorni chiqaradi.",
      whyFlags: "Nechta qator yoki nechta bayt ko'rsatishni aniq belgilash uchun bayroqlar ishlatiladi.",
      generalWhen: "Minglab qatorli katta fayllarning (masalan loglar, CSV fayllar) sarlavhasini va formatini tez ko'rishda.",
      generalWithout: "Butun ulkan fayl terminalga otilib chiqib, terminalni qotirib qo'yadi.",
      flags: {
        "-n": {
          name: "Chiqariladigan qatorlar sonini belgilash (Lines Count)",
          syntaxPos: "<code>head -n 5 fayl.txt</code>",
          whatItDoes: "Sukut bo'yicha 10 ta o'rniga aynan ko'rsatilgan N ta (masalan 5 ta, 20 ta) qatorni chiqaradi.",
          whenNeeded: "Topshiriqlarda aynan dastlabki 3 yoki 5 ta qator so'ralganda.",
          withoutRisk: "Har doim 10 ta qator chiqadi, kamroq yoki ko'proq ko'rib bo'lmaydi."
        }
      }
    },

    tail: {
      name: "Faylning Oxirgi Qismini Ko'rsatish (Output Last Part)",
      whatItDoes: "Faylning eng oxiridan boshlab sukut bo'yicha oxirgi 10 ta qatorni chiqaradi.",
      whyFlags: "Oxirgi qatorlar sonini belgilash yoki real vaqtda jonli o'zgarishlarni kuzatish uchun bayroqlar kerak.",
      generalWhen: "Tizim loglarida eng oxirgi sodir bo'lgan voqealar, xatolar va loginlarni tekshirishda.",
      generalWithout: "Oxirgi yozuvlarni ko'rish uchun butun gigabaytli faylni varaqlab chiqishga to'g'ri keladi.",
      flags: {
        "-n": {
          name: "Oxirgi qatorlar sonini belgilash (Lines Count)",
          syntaxPos: "<code>tail -n 20 /var/log/syslog</code>",
          whatItDoes: "Faylning eng oxirgi N ta qatorini ekranga chiqaradi.",
          whenNeeded: "Aynan oxirgi xatolarni ko'rishda.",
          withoutRisk: "Sukut bo'yicha faqat 10 ta qator bilan cheklanasiz."
        },
        "-f": {
          name: "Jonli kuzatish rejimi (Follow / Real-Time Streaming)",
          syntaxPos: "<code>tail -f /var/log/auth.log</code>",
          whatItDoes: "Faylni yopmaydi, terminalni ochiq tutib, yangi qo'shilayotgan har bir satrni real vaqtda ekranga chiqarib turadi.",
          whenNeeded: "Serverda SSH ulanishlarini, veb-server so'rovlarini yoki xatolarni jonli kuzatishda (Ctrl+C bilan to'xtatiladi).",
          withoutRisk: "⚠️ AGAR -f BO'LMASA: Yangi kelgan xatolarni ko'rish uchun buyruqni har soniyada qayta-qayta terishga to'g'ri keladi!"
        }
      }
    },

    wc: {
      name: "Satr, So'z va Baytlar Hisoblagichi (Word, Line, Byte Count)",
      whatItDoes: "Fayl yoki quvurdan kelgan matn oqimini tahlil qilib, undagi qatorlar soni, so'zlar soni va umumiy baytlar hajmini hisoblaydi.",
      whyFlags: "Aynan qaysi ko'rsatkich (faqat qatorlar, faqat so'zlar yoki faqat baytlar) kerakligini ajratish uchun bayroqlar ishlatiladi.",
      generalWhen: "Serverda nechta foydalanuvchi borligini bilishda (<code>cat /etc/passwd | wc -l</code>) yoki fayl hajmini o'lchashda.",
      generalWithout: "Qatorlarni qo'lda sanab chiqishning iloji yo'q.",
      flags: {
        "-l": {
          name: "Faqat qatorlar sonini hisoblash (Count Lines)",
          syntaxPos: "<code>wc -l fayl.txt</code> yoki <code>ls | wc -l</code>",
          whatItDoes: "Matndagi yangi satr belgilarini (<code>\\n</code>) sanaydi va faqat umumiy qatorlar sonini chiqaradi.",
          whenNeeded: "Fayllar sonini, foydalanuvchilar sonini yoki logdagi hodisalar sonini sanashda eng muhim bayroq.",
          withoutRisk: "Qatorlar, so'zlar va baytlar aralashib chiqadi, skriptda raqamni ajratib olish qiyinlashadi."
        },
        "-w": {
          name: "Faqat so'zlar sonini hisoblash (Count Words)",
          syntaxPos: "<code>wc -w matn.txt</code>",
          whatItDoes: "Bo'sh joy bilan ajratilgan so'zlar sonini hisoblaydi.",
          whenNeeded: "Hujjatlar va hisobotlardagi so'zlar hajmini baholashda.",
          withoutRisk: "Qatorlar va baytlar qo'shilib chiqadi."
        },
        "-c": {
          name: "Faqat baytlar sonini hisoblash (Count Bytes)",
          syntaxPos: "<code>wc -c fayl.txt</code>",
          whatItDoes: "Faylning aniq bayt hajmini ko'rsatadi.",
          whenNeeded: "Fayl o'lchamini tekshirishda.",
          withoutRisk: "Barcha ko'rsatkichlar aralash chiqadi."
        }
      }
    },

    cp: {
      name: "Fayl va Papkalardan Nusxa Olish (Copy Files & Directories)",
      whatItDoes: "Fayl yoki katalog ma'lumotlarini boshqa joyga yoki yangi nom ostida yangi Inode ajratib nusxalaydi.",
      whyFlags: "Kataloglarni to'liq nusxalash, asl atributlarni saqlash va ustiga yozishdan ogohlantirish uchun bayroqlar shart.",
      generalWhen: "Zaxira nusxa (backup) yaratishda va konfiguratsiyalarni xavfsiz saqlashda.",
      generalWithout: "Fayllarning zaxirasi bo'lmay, xato o'zgartirish kiritilganda asl holatni tiklab bo'lmaydi.",
      flags: {
        "-r": {
          name: "Rekursiv nusxalash (Recursive - for directories)",
          syntaxPos: "<code>cp -r /manba_papka /maqsad_papka</code>",
          whatItDoes: "Papkaning ichidagi barcha fayllar, ichki kataloglar va chuqur qavatlarni birgalikda nusxalaydi.",
          whenNeeded: "Papkalarni nusxalashda.",
          withoutRisk: "⚠️ AGAR -r BO'LMASA: KATTA XATO! 'cp: -r not specified; omitting directory' xatosi chiqadi va papka umuman nusxalanmaydi!"
        },
        "-p": {
          name: "Atributlarni saqlab qolish (Preserve attributes)",
          syntaxPos: "<code>cp -p fayl.txt zaxira.txt</code>",
          whatItDoes: "Faylning asl egasi, guruhi, ruxsatlari va modify vaqtini o'zgartirmasdan aynan saqlab nusxalaydi.",
          whenNeeded: "Tizim zaxiralarini yaratishda muhim huquqlar o'zgarmasligi uchun.",
          withoutRisk: "Yangi faylning egasi va vaqti ayni joriy foydalanuvchiga va soatga o'zgarib ketadi."
        },
        "-i": {
          name: "Ustiga yozishdan oldin so'rash (Interactive Confirmation)",
          syntaxPos: "<code>cp -i manba.txt maqsad.txt</code>",
          whatItDoes: "Agar maqsad fayl allaqachon mavjud bo'lsa, uni o'chirib ustiga yozishdan oldin 'overwrite?' deb ruxsat so'raydi.",
          whenNeeded: "Muhim ma'lumotlarni tasodifan yo'qotib qo'ymaslik uchun.",
          withoutRisk: "⚠️ AGAR -i BO'LMASA: Mavjud muhim fayl hech qanday ogohlantirishsiz o'chib ketadi va yangisi bilan almashadi!"
        },
        "-a": {
          name: "Arxiv rejimida nusxalash (Archive Mode = -dpR)",
          syntaxPos: "<code>cp -a /manba/. /maqsad/</code>",
          whatItDoes: "Rekursivlik, barcha huquqlar, vaqtlar va simvolik bog'lamlarni to'liq asliga mos saqlaydi.",
          whenNeeded: "Butun server tizimini yoki foydalanuvchining uy papkasini to'liq ko'chirishda.",
          withoutRisk: "Simvolik bog'lamlar oddiy faylga aylanib ketishi mumkin."
        }
      }
    },

    mv: {
      name: "Fayllarni Ko'chirish yoki Qayta Nomlash (Move & Rename)",
      whatItDoes: "Fayl yoki katalogni boshqa manzilga ko'chiradi yoki nomini o'zgartiradi. Bitta fayl tizimi ichida bu amal juda tez bajariladi, chunki Inode o'zgarmaydi, faqat katalogdagi nomi yangilanadi.",
      whyFlags: "Mavjud fayllarni ehtiyotsizlik bilan yo'qotib qo'ymaslik uchun bayroqlar ishlatiladi.",
      generalWhen: "Fayl nomini to'g'rilashda yoki yuklab olingan fayllarni o'z joyiga ko'chirishda.",
      generalWithout: "Fayllarni boshqa joyga tartiblab bo'lmaydi.",
      flags: {
        "-i": {
          name: "Ustiga yozishdan oldin ogohlantirish (Interactive Prompt)",
          syntaxPos: "<code>mv -i eski.txt yangi.txt</code>",
          whatItDoes: "Agar yangi nom ostida boshqa fayl mavjud bo'lsa, uning ustiga yozishdan oldin foydalanuvchidan tasdiq so'raydi.",
          whenNeeded: "Muhim fayllar ustiga tasodifan yozib yuborilishini oldini olishda.",
          withoutRisk: "⚠️ AGAR -i BO'LMASA: Mavjud fayl ogohlantirishsiz o'chib ketadi!"
        },
        "-f": {
          name: "Majburiy ko'chirish (Force - no prompts)",
          syntaxPos: "<code>mv -f fayl.txt /boshqa/joy</code>",
          whatItDoes: "Hech qanday ogohlantirishsiz to'g'ridan-to'g'ri ko'chiradi.",
          whenNeeded: "Avtomatlashtirilgan skriptlarda to'xtab qolmaslik uchun.",
          withoutRisk: "Skript savol berib qotib turishi mumkin."
        }
      }
    },

    rm: {
      name: "Fayl va Papkalarni Butunlay O'chirish (Remove / Unlink)",
      whatItDoes: "Faylning katalogdagi bog'lamini (dentry) o'chiradi va uning Inode'idagi bog'lamlar sonini (links count) bittaga kamaytiradi. Links 0 bo'lganda disk bloklari bo'shatiladi.",
      whyFlags: "Papkalarni ichidagi ma'lumotlar bilan o'chirish yoki tasdiq so'ramasdan majburiy tozalash uchun bayroqlar shart.",
      generalWhen: "Keraksiz vaqtinchalik fayllar, eski loglar va loyihalarni tozalashda.",
      generalWithout: "Disk keraksiz chiqindilar bilan to'lib ketadi.",
      flags: {
        "-r": {
          name: "Rekursiv o'chirish (Recursive - for directories)",
          syntaxPos: "<code>rm -r papka_nomi</code>",
          whatItDoes: "Papkani va uning ichidagi barcha ichki papkalar hamda fayllarni ketma-ket to'liq o'chiradi.",
          whenNeeded: "Ichida fayli bor papkalarni o'chirishda.",
          withoutRisk: "⚠️ AGAR -r BO'LMASA: 'rm: cannot remove directory: Is a directory' xatosi beradi va papka o'chmaydi!"
        },
        "-f": {
          name: "Majburiy o'chirish (Force - ignore nonexistent files)",
          syntaxPos: "<code>rm -f fayl.txt</code>",
          whatItDoes: "Agar fayl mavjud bo'lmasa xato ko'rsatmaydi va o'chirishda hech qachon tasdiq so'ramaydi.",
          whenNeeded: "Skriptlarda xatolarsiz tozalash ishlarini bajarishda.",
          withoutRisk: "Har bir o'chirishda tasdiq so'rashi yoki fayl topilmasa xato otishi mumkin."
        },
        "-rf": {
          name: "Rekursiv va Majburiy o'chirish (Recursive + Force)",
          syntaxPos: "<code>rm -rf /keraksiz/papka</code>",
          whatItDoes: "Linuxdagi eng kuchli va eng xavfli buyruq: ko'rsatilgan butun daraxtni savol-so'roqsiz zudlik bilan yo'q qiladi.",
          whenNeeded: "Katta loyiha keshlari, node_modules yoki vaqtinchalik kataloglarni bir zumda tozalashda.",
          withoutRisk: "⚠️ KATTA FALOKAT XAVFI: Agar adashib <code>rm -rf /</code> yoki <code>rm -rf *</code> yozilsa, butun operatsion tizim yo'q bo'ladi! Hech qachon ehtiyotsiz ishlatmang!"
        },
        "-i": {
          name: "Har bir faylni o'chirishdan oldin so'rash (Interactive)",
          syntaxPos: "<code>rm -i *.txt</code>",
          whatItDoes: "Har bitta fayl uchun 'remove regular file?' deb tasdiq so'raydi.",
          whenNeeded: "Muhim serverlarda adashib fayl o'chirib yubormaslik uchun eng xavfsiz rejim.",
          withoutRisk: "Barcha fayllar darhol o'chadi, qaytarib bo'lmaydi (Linuxda Savat/Recycle Bin yo'q!)."
        }
      }
    },

    ln: {
      name: "Fayllarga Bog'lam Yaratish (Create Hard and Symbolic Links)",
      whatItDoes: "Fayl tizimida bir xil ma'lumotga yangi yo'l yaratadi. Hard link va Soft (Symbolic) link turlari mavjud.",
      whyFlags: "Hard link (qattiq) yoki Soft link (simvolik) yaratishni tanlash uchun <code>-s</code> bayrog'i ishlatiladi.",
      generalWhen: "Kutubxona versiyalarini boshqarishda, konfiguratsiyalarni qulay joyga ulashda yoki disk joyini tejashda.",
      generalWithout: "Fayllarni ikki xil joyda ishlatish uchun ularni to'liq nusxalashga to'g'ri keladi va disk joyi ikki barobar behuda sarflanadi.",
      flags: {
        "-s": {
          name: "Simvolik / Yumshoq bog'lam yaratish (Symbolic / Soft Link)",
          syntaxPos: "<code>ln -s /haqiqiy/fayl yorliq_nomi</code>",
          whatItDoes: "Windows'dagi yorliq (shortcut) kabi ishlaydi: yangi alohida Inode yaratib, uning ichiga nishon faylning manzilini yozib qo'yadi. Papkalarga ham link qilsa bo'ladi.",
          whenNeeded: "Boshqa disk bo'limlariga ulanishda, papkalarni havola qilishda va dasturlar versiyasini boshqarishda.",
          withoutRisk: "⚠️ AGAR -s BO'LMASA: Tizim HARD LINK yaratadi! Hard link papkalarga ishlamaydi va turli disk bo'limlari (partitions) o'rtasida ishlamay xato beradi!"
        },
        "-sf": {
          name: "Mavjud linkni majburiy yangilash (Force Symbolic Link)",
          syntaxPos: "<code>ln -sf /yangi/fayl mavjud_link</code>",
          whatItDoes: "Agar ko'rsatilgan nomli link allaqachon mavjud bo'lsa, uni o'chirib yangi nishonga ulaydi.",
          whenNeeded: "Dasturlar yangilanganda havolani yangi versiyaga burishda.",
          withoutRisk: "Link mavjudligi haqida xato chiqib buyruq to'xtaydi."
        }
      }
    },

    stat: {
      name: "Inode va Fayl Holatini To'liq Tekshirish (Display File or File System Status)",
      whatItDoes: "Linux yadrosining Inode jadvalidan to'g'ridan-to'g'ri o'qib, faylning aniq bayt hajmi, ajratilgan bloklar soni, Inode raqami, bog'lamlar soni (Links count), ruxsatlar (UID/GID) hamda Access, Modify, Change vaqtlarini to'liq chiqaradi.",
      whyFlags: "Chiqish formatini skriptlar uchun qulay qilishda maxsus bayroqlar ishlatiladi.",
      generalWhen: "Hard linklar sonini tekshirishda, faylning Inode raqamini aniqlashda va xavfsizlik auditida.",
      generalWithout: "Faylning Inode'i va bloklari haqida chuqur ma'lumot olib bo'lmaydi.",
      flags: {
        "-c": {
          name: "Maxsus formatda chiqarish (Custom Format)",
          syntaxPos: "<code>stat -c '%i %h' fayl.txt</code>",
          whatItDoes: "Faqat kerakli ko'rsatkichlarni (masalan %i - Inode, %h - Links soni) ajratib chiqaradi.",
          whenNeeded: "Skriptlarda Inode raqamini o'zgaruvchiga olishda.",
          withoutRisk: "Butun katta jadval chiqadi."
        }
      }
    },

    file: {
      name: "Fayl Turini Aniqlash (Determine File Type)",
      whatItDoes: "Fayl kengaytmasiga (.txt, .png) qaramaydi! Faylning boshidagi 'sehrli baytlar' (Magic Bytes) ni tekshirib, uning haqiqiy ichki turini (ASCII text, UTF-8, ELF 64-bit executable, JPEG image, symlink) aniqlaydi.",
      whyFlags: "MIME formatini yoki simvolik havolalarning ichini ko'rish uchun bayroqlar ishlatiladi.",
      generalWhen: "Kengaytmasi yo'q fayllarni nima ekanini bilishda va shubhali fayllarni tekshirishda.",
      generalWithout: "Kengaytmasi bo'lmagan faylni qaysi dastur bilan ochish kerakligini bilib bo'lmaydi.",
      flags: {
        "-i": {
          name: "MIME turini chiqarish (MIME Type Output)",
          syntaxPos: "<code>file -i fayl</code>",
          whatItDoes: "Natijani standart MIME formatida (masalan <code>text/plain; charset=utf-8</code>) ko'rsatadi.",
          whenNeeded: "Veb-serverlar va API'lar bilan ishlashda.",
          withoutRisk: "Insoniy tushuntirish matni chiqadi."
        }
      }
    },

    find: {
      name: "Fayllarni Qidirish (Search Files in a Directory Hierarchy)",
      whatItDoes: "Fayl tizimi daraxtini rekursiv aylanib chiqib, berilgan parametrlar (nom, tur, hajm, o'zgartirilgan sana, Inode) bo'yicha mos keladigan barcha fayllarni topadi.",
      whyFlags: "Qidiruv mezonlarini (kriteriyalarini) aniq belgilash uchun bayroqlar ishlatiladi.",
      generalWhen: "Serverda qayerda joylashganini bilmayotgan faylni topishda, eski loglarni qidirishda yoki katta fayllarni aniqlashda.",
      generalWithout: "Minglab kataloglarni qo'lda birma-bir ochib chiqishga majbur bo'lasiz.",
      flags: {
        "-name": {
          name: "Nomi bo'yicha qidirish (Search by Filename Pattern)",
          syntaxPos: "<code>find / -name '*.txt'</code> yoki <code>find . -name 'config.ini'</code>",
          whatItDoes: "Fayl nomini ko'rsatilgan qolip (pattern) yoki aniq nom bo'yicha tekshirib topadi.",
          whenNeeded: "Faylning nomi ma'lum bo'lsa-yu, qaysi papkada ekani noma'lum bo'lganda.",
          withoutRisk: "⚠️ AGAR -name BO'LMASA: Barcha katalogdagi har bitta fayl nomma-nom chiqib ketadi!"
        },
        "-type": {
          name: "Obyekt turi bo'yicha saralash (File Type Filter)",
          syntaxPos: "<code>find . -type f</code> (fayllar) yoki <code>find . -type d</code> (papkalar)",
          whatItDoes: "Natijani faqat oddiy fayllar (f), kataloglar (d) yoki simvolik bog'lamlar (l) bilan cheklaydi.",
          whenNeeded: "Faqat fayllarni yoki faqat kataloglarni topishda.",
          withoutRisk: "Fayl va papkalar aralash chiqadi."
        },
        "-mtime": {
          name: "O'zgartirilgan vaqti bo'yicha qidirish (Modification Time in Days)",
          syntaxPos: "<code>find . -mtime -7</code> (oxirgi 7 kunda) yoki <code>find . -mtime +30</code> (30 kundan eski)",
          whatItDoes: "Inode'dagi Modify Time ko'rsatkichini tahlil qilib, kunlar bo'yicha saralaydi.",
          whenNeeded: "Oxirgi haftada o'zgargan fayllarni topishda yoki eski 30 kundan ortiq loglarni tozalashda.",
          withoutRisk: "Eski va yangi fayllarni ajratib bo'lmaydi."
        },
        "-size": {
          name: "Hajmi bo'yicha qidirish (Filter by File Size)",
          syntaxPos: "<code>find /var/log -size +10M</code> (10 MB dan katta)",
          whatItDoes: "Ko'rsatilgan hajmdan katta (+), kichik (-) yoki teng fayllarni topadi.",
          whenNeeded: "Server diski to'lib qolganda qaysi ulkan fayllar joyni yeb qo'yganini topishda eng muhim qurol.",
          withoutRisk: "Qaysi fayllar diskni to'ldirayotganini topish qiyinlashadi."
        },
        "-empty": {
          name: "Bo'sh fayl va papkalarni topish (Find Empty Files/Dirs)",
          syntaxPos: "<code>find . -type f -empty</code>",
          whatItDoes: "Hajmi 0 bayt bo'lgan bo'sh fayllarni yoki ichida hech narsa yo'q kataloglarni topadi.",
          whenNeeded: "Keraksiz bo'sh fayllarni aniqlashda.",
          withoutRisk: "Bo'sh fayllar e'tibordan chetda qoladi."
        },
        "-inum": {
          name: "Inode raqami bo'yicha qidirish (Find by Inode Number)",
          syntaxPos: "<code>find . -inum 10025</code>",
          whatItDoes: "Aynan ko'rsatilgan Inode raqamiga ega bo'lgan barcha fayllarni (Hard linklarni) topadi.",
          whenNeeded: "Hard link qayerlarga tarqalganini aniqlashda.",
          withoutRisk: "Bitta Inode'ga ulangan boshqa fayllarni topib bo'lmaydi."
        },
        "-maxdepth": {
          name: "Qidiruv chuqurligini cheklash (Max Directory Depth)",
          syntaxPos: "<code>find . -maxdepth 1 -name '*.log'</code>",
          whatItDoes: "Qidiruvni faqat joriy papka bilan cheklaydi (ichki papkalarga kirmaydi).",
          whenNeeded: "Qidiruv tezroq tugashi va faqat joriy katalogda ishlashi uchun.",
          withoutRisk: "Tizimning eng tubiga qadar kirib, qidiruv uzoq davom etadi."
        }
      }
    },

    clear: {
      name: "Terminal Ekranini Tozalash (Clear Terminal Screen)",
      whatItDoes: "Terminal oynasining ekrandagi barcha matnlarini yuqoriga surib, toza yangi qator ochadi (Ctrl+L bilan bir xil).",
      whyFlags: "Bayroq talab qilmaydi.",
      generalWhen: "Terminal ko'p chiqishlardan to'lib ketganda va yangi topshiriqqa e'tibor qaratishda.",
      generalWithout: "Eski chiqishlar yangi natijalar bilan chalkashadi.",
      flags: {}
    },

    echo: {
      name: "Matnni Chiqarish yoki Oqimga Uzatish (Print Line of Text)",
      whatItDoes: "Kiritilgan matnni yoki atrof-muhit o'zgaruvchilarini ($USER, $HOME, $?) standart oqimga (stdout) chiqaradi.",
      whyFlags: "Qayta yo'naltirish (`>`, `>>`) va chiqish formatlari bilan ishlatiladi.",
      generalWhen: "Fayllarga tezkor ma'lumot yozishda (<code>echo 'salom' > test.txt</code>) yoki o'zgaruvchilarni ko'rishda.",
      generalWithout: "Fayllarga oddiy matnlarni tez yozish imkoni bo'lmaydi.",
      flags: {
        "-n": {
          name: "Yangi qator belgisini qo'shmaslik (Do not output trailing newline)",
          syntaxPos: "<code>echo -n 'matn'</code>",
          whatItDoes: "Matn oxiriga yangi satr (\\n) tashlamaydi.",
          whenNeeded: "Bir qatorga bir nechta ma'lumotni ulashda.",
          withoutRisk: "Har doim yangi qator tashlab yuboradi."
        }
      }
    }
  };

  // Helper function: analyze command and detect flags
  function analyzeCommand(cmdStr, question) {
    if (!cmdStr) cmdStr = "";
    const clean = cmdStr.trim();
    const parts = clean.split(/\s+/);
    const baseCmd = parts[0] || "";

    const kb = KNOWLEDGE_BASE[baseCmd] || {
      name: `Linux Buyrug'i: ${baseCmd}`,
      whatItDoes: question ? question.taskUz : `Linux buyrug'i: ${baseCmd}`,
      whyFlags: "Ushbu buyruq turli xil parametrlar orqali tizimga aniq vazifani bajarishga ko'rsatma beradi.",
      generalWhen: "Tizim ma'muriyati va fayl boshqaruvida ishlatiladi.",
      generalWithout: "Tegishli vazifa bajarilmay qoladi.",
      flags: {}
    };

    // Extract flags from the command string
    const foundFlags = [];
    const flagsObj = kb.flags || {};

    // 1. Direct symbol flags (e.g. >, >>, ~, .., -, |)
    if (clean.includes(">>") && flagsObj[">>"]) {
      foundFlags.push({ flag: ">>", ...flagsObj[">>"] });
    } else if (clean.includes(">") && flagsObj[">"]) {
      foundFlags.push({ flag: ">", ...flagsObj[">"] });
    }
    if (parts.includes("~") && flagsObj["~"]) {
      foundFlags.push({ flag: "~", ...flagsObj["~"] });
    }
    if (parts.includes("..") && flagsObj[".."]) {
      foundFlags.push({ flag: "..", ...flagsObj[".."] });
    }
    if (parts.includes("-") && flagsObj["-"]) {
      foundFlags.push({ flag: "-", ...flagsObj["-"] });
    }

    // 2. Dash flags: -la, -l, -a, -h, -p, -r, -rf, -s, -d, etc.
    for (const [fKey, fData] of Object.entries(flagsObj)) {
      if (fKey.startsWith("-")) {
        // Test if command contains this exact flag token or part of combined flag
        const escaped = escapeRegExp(fKey);
        const regex = new RegExp(`(^|\\s)${escaped}(\\s|$)`);
        if (regex.test(clean)) {
          if (!foundFlags.some(f => f.flag === fKey)) {
            foundFlags.push({ flag: fKey, ...fData });
          }
        } else if (fKey.length === 2 && fKey.startsWith("-")) {
          // Check combined flags like -la containing -l and -a
          const char = fKey.charAt(1);
          const combinedRegex = new RegExp(`(^|\\s)-[a-zA-Z0-9]*${char}[a-zA-Z0-9]*(\\s|$)`);
          if (combinedRegex.test(clean) && !foundFlags.some(f => f.flag === fKey)) {
            foundFlags.push({ flag: fKey, ...fData });
          }
        }
      }
    }

    return {
      baseCmd,
      fullCommand: clean,
      name: kb.name,
      whatItDoes: kb.whatItDoes,
      whyFlags: kb.whyFlags,
      generalWhen: kb.generalWhen,
      generalWithout: kb.generalWithout,
      flagsList: foundFlags
    };
  }

  function renderCardHtml(anatomy) {
    let html = `
      <div class="cmd-section">
        <div class="cmd-sec-head cyan">
          <span>🎯 1. Bu Buyruq Nima Qiladi va Qanday Qiladi?</span>
        </div>
        <div class="cmd-sec-text">
          <b>${escapeHtml(anatomy.name)}:</b> ${anatomy.whatItDoes}
        </div>
      </div>

      <div class="cmd-section">
        <div class="cmd-sec-head amber">
          <span>⚙️ 2. Qo'shimchalar (Bayroqlar) Qo'shilishiga Sabab Nima?</span>
        </div>
        <div class="cmd-sec-text">
          ${anatomy.whyFlags}
        </div>
      </div>
    `;

    if (anatomy.flagsList && anatomy.flagsList.length > 0) {
      html += `
        <div class="cmd-section">
          <div class="cmd-sec-head emerald">
            <span>🚩 3. Masalada Ishlatilgan Bayroqlarning Tahlili (${anatomy.flagsList.length} ta)</span>
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
