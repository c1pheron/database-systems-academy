// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 1 SPECIFIC COMMANDS REPOSITORY
// Modul: 1-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Chuqur tahlil, bayroqlar kombinatsiyalari, kernel tafsilotlari va analogiyalar
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "pwd",
    "name": "Print Working Directory (Joriy Ishchi Katalogni Ko'rish)",
    "category": "Navigatsiya & Inodelar",
    "syntax": "pwd [BAYROQLAR]",
    "syntaxRules": "Parametrsiz ishlatiladi yoki simvolik havolalarni ochish uchun '-P' bayrog'i qo'shiladi.",
    "desc": "Linux fayl ierarxiyasida foydalanuvchi ayni daqiqada qaysi papka ichida turganining to'liq absolyut manzilini (ildiz '/' dan boshlab) chiqaradi. Tizim administratori serverga SSH orqali kirganda adashmaslik uchun birinchi bo'lib teradigan xavfsizlik komandasi.",
    "flags": [
      {
        "flag": "-L",
        "desc": "Mantiqiy yo'lni chiqarish (Logical) — agar papka simvolik havola (symlink) bo'lsa, havolaning nomini ko'rsatadi (default)."
      },
      {
        "flag": "-P",
        "desc": "Fizik real yo'lni chiqarish (Physical) — barcha simvolik havolalarni chetlab o'tib, diskdagi haqiqiy fizik katalogni ko'rsatadi."
      }
    ],
    "combos": [
      {
        "combo": "pwd",
        "title": "Oddiy manzilni ko'rish",
        "desc": "Joriy turgan katalogni tezkor tekshirish: masalan /home/student/projects"
      },
      {
        "combo": "pwd -P",
        "title": "Haqiqiy fizik joylashuvni aniqlash",
        "desc": "Agar siz symlink orqali kirgan bo'lsangiz (masalan, /var/www/html -> /mnt/storage/web), diskdagi asl manzilni (/mnt/storage/web) aniqlab beradi."
      }
    ],
    "underTheHood": "Linux yadrosi (Kernel) har bir jarayon uchun `task_struct` strukturasini saqlaydi. Ushbu struktura ichida `fs_struct` ko'rsatkichi (`current->fs->pwd`) mavjud bo'lib, u joriy katalogning `dentry` (directory entry) va `inode` manzilini ushlab turadi. `pwd` chaqirilganda `getcwd()` tizim chaqiruvi (system call) ishga tushadi.",
    "example": "$ cd /var/lock\n$ pwd\n/var/lock\n$ pwd -P\n/run/lock",
    "analogy": "Xaritadagi 'Siz ayni paytda shu yerdasiz' degan qizil nina belgisi. Katta binoda adashib qolmaslik uchun qaysi xonada turganingizni peshtoqdagi raqamidan bilib olish.",
    "pitfalls": "Ko'pincha talabalar `pwd` ekranga chiqargan yo'lni nusxalashda oxirgi bo'sh joylarni ham ilashtirib olishadi. Skriptlarda buni o'zgaruvchiga olish uchun `CURRENT_DIR=$(pwd)` ko'rinishida qo'llash tavsiya etiladi."
  },
  {
    "cmd": "ls",
    "name": "List Directory Contents (Fayllar va Papkalar Ro'yxati)",
    "category": "Navigatsiya & Inodelar",
    "syntax": "ls [BAYROQLAR] [KATALOG_MANZILI]",
    "syntaxRules": "Bayroqlarni birga qo'shib yozish mumkin (masalan -l, -a, -h o'rniga -lah).",
    "desc": "Katalog ichidagi barcha fayllar, papkalar, qurilmalar va maxsus soketlar ro'yxatini chiqaradi. Fayllarning ruxsat huquqlari (permissions), qattiq bog'lamlar soni, egasi, guruhi, baytlardagi hajmi va oxirgi o'zgartirilgan vaqtini ko'rsatadi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha fayllarni ko'rsatish (All) — nuqta bilan boshlanuvchi yashirin (.bashrc, .profile) fayllarni ham ochadi."
      },
      {
        "flag": "-l",
        "desc": "Uzoq format (Long listing) — ruxsatlar, bog'lamlar soni, egasi, guruhi, hajmi va sanasi bilan ko'rsatadi."
      },
      {
        "flag": "-h",
        "desc": "Inson tushunadigan format (Human-readable) — fayl o'lchamlarini baytlarda emas, K, M, G ko'rinishida ko'rsatadi (-l bilan ishlatiladi)."
      },
      {
        "flag": "-i",
        "desc": "Inode raqamini ko'rsatish (Index Node) — fayl tizimidagi har bir ob'ektning yagona identifikator raqamini chiqaradi."
      },
      {
        "flag": "-t",
        "desc": "Vaqt bo'yicha saralash (Time) — eng yangi o'zgartirilgan fayllarni ro'yxat boshiga chiqaradi."
      },
      {
        "flag": "-r",
        "desc": "Teskari tartibda chiqarish (Reverse) — tartibni teskari qiladi (-ltr da juda foydali)."
      },
      {
        "flag": "-S",
        "desc": "Hajm bo'yicha saralash (Size) — eng katta hajmli fayllarni birinchi qilib chiqaradi."
      },
      {
        "flag": "-R",
        "desc": "Rekursiv ko'rish (Recursive) — barcha ichma-ich papkalar tarkibini ham ketma-ket chiqaradi."
      },
      {
        "flag": "-d",
        "desc": "Faqat katalogning o'zini ko'rsatish (Directory) — katalog ichidagilarni emas, o'sha papkaning atributlarini chiqaradi."
      }
    ],
    "combos": [
      {
        "combo": "ls -lah",
        "title": "Eng mashhur SysAdmin kombinatsiyasi",
        "desc": "Barcha yashirin fayllar bilan birga to'liq tafsilotlar va o'qishga oson o'lchamlarni (KB, MB, GB) ko'rsatadi."
      },
      {
        "combo": "ls -ltr",
        "title": "Oxirgi o'zgargan fayllarni pastda ko'rish",
        "desc": "Serverda yaqinda paydo bo'lgan loglarni yoki yangilangan fayllarni darhol ko'rish uchun eng qulay usul (yangi fayllar terminalning eng pastida chiqadi)."
      },
      {
        "combo": "ls -laS",
        "title": "Diskni to'ldirgan fayllarni topish",
        "desc": "Fayllarni hajmiga ko'ra kattasidan kichigiga saralab chiqaradi."
      },
      {
        "combo": "ls -ldi /var/log",
        "title": "Katalogning o'zini va uning Inode raqamini ko'rish",
        "desc": "Katalog tarkibini emas, aynan /var/log papkasining Inode va ruxsatlarini tekshiradi."
      }
    ],
    "underTheHood": "Linuxda katalog bu shunchaki `(fayl_nomi -> inode)` juftliklari saqlanuvchi maxsus fayldir. `ls` buyrug'i `opendir()` va `getdents64()` system call-lari orqali katalogni o'qiydi. `-l` bayrog'i qo'shilganda har bir fayl uchun alohida `lstat()` tizim chaqiruvi yuborilib, Inode jadvalidan metadata (huquqlar, o'lcham, vaqt) yuklanadi.",
    "example": "$ ls -lai\ntotal 28\n10027 drwxr-xr-x 2 student student 4096 Oct 26 18:00 .\n 9821 drwxr-xr-x 4 student student 4096 Oct 26 17:30 ..\n10034 -rw-r--r-- 1 student student  512 Oct 26 18:05 app.log",
    "analogy": "Supermarketdagi vitrina. Oddiy `ls` faqat tovar nomini aytadi, `-l` narxi, egasi va muddatini ko'rsatadi, `-i` esa har bir mahsulotning shtrix-kodini (inode) chiqaradi.",
    "pitfalls": "Katalogda 1,000,000 dan ortiq fayl bo'lsa, `ls -l` juda ko'p `stat()` chaqiruvlari sababli tizimni sekinlashtirishi mumkin. Bunday hollarda `find` yoki `ls -f` (saralashsiz) ishlatiladi."
  },
  {
    "cmd": "cd",
    "name": "Change Directory (Kataloglar Bo'ylab Harakatlanish)",
    "category": "Navigatsiya & Inodelar",
    "syntax": "cd [MANZIL]",
    "syntaxRules": "Parametrsiz 'cd' yozilsa, to'g'ridan-to'g'ri foydalanuvchining uy papkasiga (~ /home/user) olib boradi.",
    "desc": "Terminal sessiyasining joriy ishchi katalogini o'zgartiradi. Fayl tizimining istalgan burchagiga absolyut (/var/log) yoki nisbiy (../config) manzillar orqali o'tish imkonini beradi.",
    "flags": [
      {
        "flag": "-",
        "desc": "Oldingi katalogga qaytish ($OLDPWD) — xuddi televizor pultidagi 'Pre-ch' (oldingi kanal) kabi ikki katalog o'rtasida sakraydi."
      },
      {
        "flag": "..",
        "desc": "Bitta pog'ona yuqoridagi ota katalogga (Parent directory) ko'tarilish."
      },
      {
        "flag": "~",
        "desc": "Joriy foydalanuvchining shaxsiy uy katalogiga (/home/username) o'tish."
      },
      {
        "flag": "/",
        "desc": "Fayl tizimining eng yuqori ildiz katalogiga (Root /) o'tish."
      }
    ],
    "combos": [
      {
        "combo": "cd -",
        "title": "Ikki papka o'rtasida tezkor almashish",
        "desc": "/etc/nginx/sites-available va /var/log/nginx o'rtasida bir harakat bilan qaytib o'tish."
      },
      {
        "combo": "cd ../..",
        "title": "Ikkita pog'ona yuqoriga chiqish",
        "desc": "Ichma-ich ochilgan kataloglardan birdaniga 2 qadam ota papkaga qaytish."
      },
      {
        "combo": "cd ~student",
        "title": "Boshqa foydalanuvchi uy papkasiga o'tish",
        "desc": "To'g'ridan-to'g'ri 'student' foydalanuvchisining uy katalogiga yo'l olish."
      }
    ],
    "underTheHood": "`cd` bu tashqi dastur emas, balki Shell ichki buyrug'i (built-in) hisoblanadi. Chunki tashqi jarayon (child process) o'z ota jarayonining (shell) ishchi katalogini o'zgartira olmaydi. U to'g'ridan-to'g'ri `chdir()` tizim chaqiruvini bajaradi va Shellning `$PWD` hamda `$OLDPWD` o'zgaruvchilarini yangilaydi.",
    "example": "$ cd /var/log/nginx\n$ cd -\n/home/student\n$ cd ..\n$ pwd\n/home",
    "analogy": "Liftda qavatlar bo'ylab harakatlanish. 'cd ..' bir qavat yuqoriga, 'cd ~' o'z xonadoningizga, 'cd /' esa binoning 1-qavatidagi vestibyulga olib boradi.",
    "pitfalls": "Nomida bo'sh joy bo'lgan papkalarga o'tishda tirnoqdan foydalanmaslik xatoga sabab bo'ladi: masalan, `cd My Folder` emas, `cd 'My Folder'` yoki `cd My\\ Folder` deb yozilishi shart."
  },
  {
    "cmd": "mkdir",
    "name": "Make Directory (Yangi Papka Yaratish)",
    "category": "Fayl Boshqaruvi",
    "syntax": "mkdir [BAYROQLAR] [KATALOG_NOMI...]",
    "syntaxRules": "Bir vaqtning o'zida bir nechta papka nomini bo'sh joy bilan sanab o'tish mumkin.",
    "desc": "Fayl tizimida yangi bo'sh katalog barpo etadi va unga yangi Inode ajratadi. Ichma-ich joylashgan kataloglar daraxtini bir buyruq bilan avtomatik yaratish imkonini beradi.",
    "flags": [
      {
        "flag": "-p",
        "desc": "Zanjir papkalar (Parents) — agar ota papkalar mavjud bo'lmasa, ularni ham xatoliksiz ketma-ket yaratib ketadi."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (Verbose) — har bir yaratilgan papka haqida xabar chiqaradi."
      },
      {
        "flag": "-m",
        "desc": "Ruxsat rejimini o'rnatish (Mode) — papka yaratilishi bilan unga chmod huquqlarini (masalan, -m 750) beradi."
      }
    ],
    "combos": [
      {
        "combo": "mkdir -pv project/{src,bin,docs,tests}",
        "title": "To'liq loyiha arxitekturasini 1 sekundda yaratish",
        "desc": "Barcha ota va ichki papkalarni hisobot bilan birdaniga barpo etadi."
      },
      {
        "combo": "mkdir -m 700 secret_data",
        "title": "Faqat egasiga ruxsat etilgan maxfiy papka ochish",
        "desc": "Umask ga qaramasdan, darhol rwx------ huquqi bilan xavfsiz papka yaratadi."
      },
      {
        "combo": "mkdir -p a/b/c/d/e",
        "title": "Ichma-ich zanjir kataloglarni qurish",
        "desc": "Barcha yo'l bo'ylab yetishmayotgan papkalarni avtomatik ochadi."
      }
    ],
    "underTheHood": "`mkdir()` tizim chaqiruvini bajaradi. Linux yadrosi diskdagi Inode jadvalidan bo'sh Inode topadi, uning turini `S_IFDIR` qilib belgilaydi va ichiga 2 ta majburiy yozuvni kiritadi: `.` (o'zining inodiga) va `..` (ota papka inodiga havola). Natijada ota katalogning qattiq bog'lamlar soni (hard link count) 1 taga oshadi.",
    "example": "$ mkdir -pv /var/www/app/{config,logs,public}\nmkdir: created directory '/var/www/app'\nmkdir: created directory '/var/www/app/config'\nmkdir: created directory '/var/www/app/logs'\nmkdir: created directory '/var/www/app/public'",
    "analogy": "Yangi arxiv jildini ochish va ichiga ajratgichlar qo'yish. `-p` bayrog'i agar javon bo'lmasa, oldin javonni, keyin qutini, keyin jildni o'zi tayyorlab berishiga o'xshaydi.",
    "pitfalls": "Agar `-p` bayrog'i qo'yilmasa va ota papka mavjud bo'lmasa, `mkdir: cannot create directory: No such file or directory` xatoligi yuz beradi."
  },
  {
    "cmd": "rmdir",
    "name": "Remove Empty Directory (Bo'sh Papkani Xavfsiz O'chirish)",
    "category": "Fayl Boshqaruvi",
    "syntax": "rmdir [BAYROQLAR] [KATALOG_NOMI...]",
    "syntaxRules": "Faqat va faqat ichida hech qanday fayl yoki papka bo'lmagan bo'sh kataloglarni o'chiradi.",
    "desc": "Fayllari bo'lmagan bo'sh papkalarni o'chirish vositasi. `rm -rf` dan farqli ravishda, agar papka ichida tasodifan muhim fayllar qolib ketgan bo'lsa, o'chirishdan bosh tortadi va ma'lumotlarni yo'qolishdan asraydi.",
    "flags": [
      {
        "flag": "-p",
        "desc": "Ota papkalar bilan birga o'chirish (Parents) — bo'shab qolgan butun zanjir papkalarni ketma-ket tozalaydi."
      },
      {
        "flag": "-v",
        "desc": "Hisobot (Verbose) — o'chirilgan har bir bo'sh papka haqida xabar beradi."
      },
      {
        "flag": "--ignore-fail-on-non-empty",
        "desc": "Agar papka bo'sh bo'lmasa, xatolik chiqarmasdan o'tkazib yuborish."
      }
    ],
    "combos": [
      {
        "combo": "rmdir -pv a/b/c",
        "title": "Bo'sh zanjir papkalarni tozalash",
        "desc": "Agar 'c', 'b' va 'a' ichida boshqa hech narsa bo'lmasa, uchtasini ham bitta harakatda o'chirib tashlaydi."
      },
      {
        "combo": "rmdir logs",
        "title": "Xavfsiz o'chirish",
        "desc": "Faqat logs papkasi bo'sh bo'lsagina o'chiriladi, ichida fayl bo'lsa o'chirish rad etiladi."
      }
    ],
    "underTheHood": "`rmdir()` tizim chaqiruvini amalga oshiradi. Kernel Inode dagi katalog bloklarini tekshiradi; agar faqat `.` va `..` dan boshqa yozuv bo'lmasa, Inode bo'shatiladi (unlinked) va disk bloklari erkin ro'yxatga qaytariladi. Agar bitta bo'lsa ham fayl bo'lsa, `ENOTEMPTY` xatosi qaytadi.",
    "example": "$ rmdir -v empty_folder\nrmdir: removing directory, 'empty_folder'\n$ rmdir full_folder\nrmdir: failed to remove 'full_folder': Directory not empty",
    "analogy": "Qutini faqat ichi bo'sh bo'lgandagina chiqindiga tashlash. Agar ichida qimmatbaho hujjat qolib ketgan bo'lsa, uni xavfsizlik nuqtai nazaridan tashlab yubormaslik.",
    "pitfalls": "Agar papka ichida hatto 1 ta yashirin fayl (masalan `.gitkeep` yoki `.DS_Store`) bo'lsa ham `Directory not empty` deb xato beradi. Ko'rish uchun oldin `ls -la` bilan tekshirish lozim."
  },
  {
    "cmd": "touch",
    "name": "Change File Timestamps / Create File (Bo'sh Fayl Yaratish & Vaqtni Yangilash)",
    "category": "Fayl Boshqaruvi",
    "syntax": "touch [BAYROQLAR] [FAYL_NOMI...]",
    "syntaxRules": "Agar fayl mavjud bo'lmasa, yangi 0 baytlik fayl ochadi; mavjud bo'lsa, uning Inode vaqt tamg'alarini (timestamps) yangilaydi.",
    "desc": "Linux tizimida yangi bo'sh fayl yaratish yoki mavjud fayllarning kirish (atime) va o'zgartirish (mtime) vaqt tamg'alarini joriy tizim vaqtiga tenglashtirish buyrug'i. Skriptlar va build tizimlari (make) uchun juda muhim.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Faqat kirish vaqtini o'zgartirish (Access time - atime)."
      },
      {
        "flag": "-m",
        "desc": "Faqat o'zgartirish vaqtini yangilash (Modification time - mtime)."
      },
      {
        "flag": "-c",
        "desc": "Fayl mavjud bo'lmasa yaratmaslik (Do not create)."
      },
      {
        "flag": "-d",
        "desc": "Muayyan vaqtni qo'lda belgilash (masalan, -d '2026-01-01 12:00')."
      },
      {
        "flag": "-r",
        "desc": "Boshqa namuna faylning vaqtini ko'chirib o'tkazish (Reference)."
      }
    ],
    "combos": [
      {
        "combo": "touch app.py",
        "title": "Yangi kod faylini tezkor yaratish",
        "desc": "Hajmi 0 bayt bo'lgan yangi bo'sh Python faylini barpo etadi."
      },
      {
        "combo": "touch file{1..10}.txt",
        "title": "10 ta faylni 1 soniyada ochish",
        "desc": "file1.txt dan file10.txt gacha bo'lgan barcha fayllarni bir zumda yaratadi."
      },
      {
        "combo": "touch -d 'yesterday' report.txt",
        "title": "Vaqt tamg'asini o'tmishga surish",
        "desc": "Faylning oxirgi o'zgartirilgan vaqtini kechagi kunga o'zgartiradi."
      }
    ],
    "underTheHood": "Fayl mavjud bo'lmasa, `open()` chaqiruvi `O_CREAT | O_WRONLY | O_NONBLOCK` bayroqlari bilan chaqirilib, yangi Inode ajratiladi. Agar fayl mavjud bo'lsa, `utimensat()` tizim chaqiruvi Inode ichidagi `st_atim` va `st_mtim` strukturalarini yangilaydi.",
    "example": "$ stat test.txt | grep Modify\nModify: 2026-10-20 10:00:00\n$ touch test.txt\n$ stat test.txt | grep Modify\nModify: 2026-10-26 18:30:15",
    "analogy": "Hujjatga yangi sana muhrini bosish. Agar qog'oz yo'q bo'lsa, yangi oq varaq olib sana yozib qo'yish.",
    "pitfalls": "Ko'pchilik `touch` ni faqat fayl yaratish uchun deb o'ylaydi, aslida uning birlamchi vazifasi vaqt tamg'asini yangilashdir."
  },
  {
    "cmd": "cp",
    "name": "Copy Files and Directories (Fayl va Papkalarni Nusxalash)",
    "category": "Fayl Boshqaruvi",
    "syntax": "cp [BAYROQLAR] [MANBA] [MANZIL]",
    "syntaxRules": "Papkani nusxalashda majburiy ravishda '-r' yoki '-a' rekursiv bayrog'i qo'yilishi shart.",
    "desc": "Fayl yoki butun kataloglarning aniq nusxasini boshqa joyga ko'chiradi. Nusxa yangi Inode raqamiga ega bo'ladi va asl fayl bilan bog'lanmagan mustaqil faylga aylanadi.",
    "flags": [
      {
        "flag": "-r / -R",
        "desc": "Rekursiv nusxalash — papkani ichidagi barcha fayllari bilan birga nusxalaydi."
      },
      {
        "flag": "-a",
        "desc": "Arxiv rejimi (Archive) — barcha ruxsatlar, egalik (UID/GID), vaqtlar va simvolik havolalarni 100% asl holicha saqlab nusxalaydi (-rpP birlashmasi)."
      },
      {
        "flag": "-i",
        "desc": "Interaktiv so'rov — agar manzilida shu nomli fayl bo'lsa, ustiga yozishdan oldin so'raydi."
      },
      {
        "flag": "-u",
        "desc": "Faqat yangilarini ko'chirish (Update) — manbadagi fayl manzildagidan yangiroq bo'lsagina nusxalaydi."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (Verbose) — har bir nusxalangan faylni ekranda ko'rsatadi."
      }
    ],
    "combos": [
      {
        "combo": "cp -a /var/www /backup/www_backup",
        "title": "Server zaxirasini 100% asl ruxsatlari bilan olish",
        "desc": "Web sayt papkasini barcha huquqlari, egalari va symlinklari bilan buzmasdan nusxalaydi."
      },
      {
        "combo": "cp -i file.txt /tmp/",
        "title": "Xavfsiz nusxalash",
        "desc": "Agar /tmp ichida file.txt bo'lsa, uni tasodifan o'chirib yubormaslik uchun tasdiq so'raydi."
      },
      {
        "combo": "cp file.txt{,.bak}",
        "title": "Faylning backup nusxasini bir harakatda olish",
        "desc": "file.txt ni file.txt.bak qilib nusxalashning eng qisqa Bash tricki."
      }
    ],
    "underTheHood": "Manba fayl `open(O_RDONLY)` orqali o'qiladi, yangi manzil fayli esa yangi Inode bilan `open(O_WRONLY|O_CREAT|O_TRUNC)` ochiladi. Yadro buferlari orqali ma'lumot `read()` va `write()` (yoki zamonaviy `copy_file_range()` tizim chaqiruvi) orqali blokma-blok ko'chiriladi.",
    "example": "$ cp -av my_project /backup/\n'my_project' -> '/backup/my_project'\n'my_project/app.py' -> '/backup/my_project/app.py'",
    "analogy": "Kitobning sahifalarini kserokopiyadan chiqarish. Yangi nusxa asl kitobdan butunlay mustaqil bo'lib, unga qilingan o'zgarish asl nusxaga ta'sir qilmaydi.",
    "pitfalls": "Agar `-a` o'rniga oddiy `cp -r` ishlatilsa, fayllarning egasi joriy foydalanuvchiga aylanib qolishi va tizim xizmatlari (masalan, www-data yoki mysql) ishlamay qolishi mumkin."
  },
  {
    "cmd": "mv",
    "name": "Move / Rename Files and Directories (Ko'chirish va Qayta Nomlash)",
    "category": "Fayl Boshqaruvi",
    "syntax": "mv [BAYROQLAR] [MANBA] [MANZIL]",
    "syntaxRules": "Bitta disk partitsiyasi ichida qayta nomlash va ko'chirish bir zumda sodir bo'ladi.",
    "desc": "Fayl yoki papkaning nomini o'zgartirish yoki ularni boshqa katalogga ko'chirish vositasi. Bir fayl tizimi ichida faylning Inode raqami o'zgarmaydi, faqat katalogdagi ko'rsatkich yangilanadi.",
    "flags": [
      {
        "flag": "-i",
        "desc": "Interaktiv so'rov — mavjud fayl ustiga yozishdan oldin ogohlantiradi."
      },
      {
        "flag": "-n",
        "desc": "Ustiga yozmaslik (No-clobber) — mavjud faylni aslo almashtirmaydi."
      },
      {
        "flag": "-u",
        "desc": "Faqat yangiroq bo'lsa ko'chirish (Update)."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (Verbose) — qaysi fayl qayerga ko'chirilganini chiqaradi."
      }
    ],
    "combos": [
      {
        "combo": "mv old_name.txt new_name.txt",
        "title": "Faylni qayta nomlash",
        "desc": "Fayl nomini o'zgartiradi, diskdagi ma'lumot bloklari o'z joyida qoladi."
      },
      {
        "combo": "mv -i *.log /var/log/archive/",
        "title": "Barcha loglarni xavfsiz arxivga ko'chirish",
        "desc": "Agar arxivda shu nomli log bo'lsa, ustiga yozishdan oldin so'raydi."
      },
      {
        "combo": "mv -u * /destination/",
        "title": "Faqat yangilangan fayllarni ko'chirish",
        "desc": "Manzildagi eski fayllarni yangisi bilan almashtiradi, o'zgarmaganlariga tegmaydi."
      }
    ],
    "underTheHood": "Agar manba va manzil bir xil fayl tizimida bo'lsa, `rename()` tizim chaqiruvi ishlaydi. Faylning Inode raqami va ma'lumot bloklari umuman ko'chirilmaydi; faqat katalog dentry yozuvi o'zgaradi (shuning uchun 100 GB fayl ham 0.001 sekundda ko'chadi!). Agar har xil disklar bo'lsa, `cp` + `rm` kabi ishlaydi.",
    "example": "$ ls -i data.csv\n104857 data.csv\n$ mv data.csv /tmp/\n$ ls -i /tmp/data.csv\n104857 /tmp/data.csv",
    "analogy": "Eshikdagi yorliqni almashtirish yoki xonadagi buyumni qo'shni xonaga olib o'tish. Buyumning o'zi o'zgarmaydi, faqat uning joylashuvi yangilanadi.",
    "pitfalls": "Katta ehtiyotsizlik bilan `mv file.txt /folder` o'rniga `/folder` mavjud bo'lmasa, `file.txt` fayli `folder` nomli faylga aylanib qoladi."
  },
  {
    "cmd": "rm",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish)",
    "category": "Fayl Boshqaruvi",
    "syntax": "rm [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Linuxda 'Savatcha' (Recycle Bin) yo'q! `rm` bilan o'chirilgan fayllarni oddiy usulda tiklab bo'lmaydi.",
    "desc": "Fayllar, simvolik havolalar va papkalarni fayl tizimidan butunlay o'chirib tashlaydi. Fayl Inodining havolalar sonini kamaytiradi; bog'lamlar soni 0 ga tenglashganda disk bloklari bo'shatiladi.",
    "flags": [
      {
        "flag": "-r / -R",
        "desc": "Rekursiv o'chirish — katalog va uning ichidagi barcha narsalarni o'chiradi."
      },
      {
        "flag": "-f",
        "desc": "Majburiy (Force) — ruxsatsiz yoki mavjud bo'lmagan fayllarni so'rovsiz va xatolik xabarisiz o'chiradi."
      },
      {
        "flag": "-i",
        "desc": "Xavfsiz so'rov (Interactive) — har bir faylni o'chirishdan oldin 'y/n' tasdiq so'raydi."
      },
      {
        "flag": "-I",
        "desc": "Katta guruhli so'rov — 3 tadan ko'p fayl yoki rekursiv o'chirishda faqat bitta umumiy so'rov beradi."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (Verbose) — o'chirilgan har bir faylni chiqaradi."
      }
    ],
    "combos": [
      {
        "combo": "rm -i important.sql",
        "title": "Xavfsiz o'chirish",
        "desc": "Muhim bazalarni tasodifan o'chirib yubormaslik uchun tasdiq bilan o'chirish."
      },
      {
        "combo": "rm -rf /tmp/cache_*",
        "title": "Kesh fayllarni majburiy tozalash",
        "desc": "So'rovsiz barcha vaqtinchalik kesh papkalarini ildizi bilan tozalaydi."
      },
      {
        "combo": "rm -v *.tmp",
        "title": "Hisobot bilan o'chirish",
        "desc": "Barcha .tmp fayllarni o'chirib, qaysi fayllar ketganini ro'yxatlaydi."
      }
    ],
    "underTheHood": "`unlink()` tizim chaqiruvini bajaradi. Katalogdan dentry o'chiriladi va Inodedagi `i_nlink` hisoblagichi 1 ga kamayadi. Agar `i_nlink == 0` bo'lsa va faylni hech qaysi jarayon ochiq ushlab turmagan bo'lsa, Linux yadrosi disk bloklarini bo'sh deb belgilaydi.",
    "example": "$ rm -rf /tmp/old_build\n$ rm -i critical.conf\nrm: remove regular file 'critical.conf'? y",
    "analogy": "Hujjatlar maydalagich (shredder). Qog'ozni solganingizdan keyin uni qayta tiklab bo'lmaydi, shuning uchun ehtiyot bo'lish shart.",
    "pitfalls": "ENG XAVFLI BUYRUQ: `rm -rf /` yoki `rm -rf *` noto'g'ri papkada bajarilsa butun operatsion tizimni yo'q qiladi. Hech qachon o'rganilmagan buyruqni `rm -rf` bilan ishlatmang!"
  },
  {
    "cmd": "cat",
    "name": "Concatenate and Display Files (Fayllarni Birlashtirish va O'qish)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "cat [BAYROQLAR] [FAYLLAR...]",
    "syntaxRules": "Kichik va o'rta hajmdagi fayllarni bir zumda terminalga chiqarish yoki ularni birlashtirishda qo'llaniladi.",
    "desc": "Fayl tarkibini to'liq o'qib, standart chiqishga (stdout - terminal ekraniga) yo'naltiradi. Shuningdek bir nechta fayllarni bir-biriga ulab, yangi bitta fayl hosil qilishda juda qulay.",
    "flags": [
      {
        "flag": "-n",
        "desc": "Qatorlarni raqamlash (Number) — 1-qatordan boshlab barcha qatorlarga tartib raqami qo'yadi."
      },
      {
        "flag": "-b",
        "desc": "Faqat bo'sh bo'lmagan qatorlarni raqamlash."
      },
      {
        "flag": "-s",
        "desc": "Ketma-ket kelgan bo'sh qatorlarni bitta bo'sh qatorga siqish (Squeeze)."
      },
      {
        "flag": "-E",
        "desc": "Qator oxirini ko'rsatish — har bir qator oxiriga '$' belgisini qo'yib, yashirin bo'shliqlarni fosh qiladi."
      },
      {
        "flag": "-T",
        "desc": "Tabulyatsiyalarni ko'rsatish — Tab tugmasi bosilgan joylarga '^I' belgisini qo'yadi."
      }
    ],
    "combos": [
      {
        "combo": "cat -n app.py",
        "title": "Kod faylini qator raqamlari bilan o'qish",
        "desc": "Xatolik ro'y bergan qator raqamini tezkor topish uchun juda qulay."
      },
      {
        "combo": "cat file1.txt file2.txt > combined.txt",
        "title": "Ikki faylni bitta faylga birlashtirish",
        "desc": "file1 va file2 matnlarini ketma-ket ulab, combined.txt ga saqlaydi."
      },
      {
        "combo": "cat << 'EOF' > setup.sh",
        "title": "Bash Here-Doc orqali yangi skript yozish",
        "desc": "Terminaldan chiqmasdan turib butun boshli ko'p qatorli skript faylini hosil qilish."
      }
    ],
    "underTheHood": "`open()` orqali faylni ochadi va `read(fd, buf, BUFSIZ)` orqali standart 8192 yoki 4096 baytli buferlar bilan o'qib, to'g'ridan-to'g'ri fayl deskriptor 1 ga (`write(STDOUT_FILENO, buf, bytes)`) o'tkazadi.",
    "example": "$ cat -n /etc/issue\n     1  Debian GNU/Linux 12 \\n \\l",
    "analogy": "Maktubni konvertdan chiqarib ovoz chiqarib o'qish yoki ikki parcha qog'ozni bir-biriga yopishtirib bitta uzun lenta qilish.",
    "pitfalls": "10 GB li ulkan log faylini `cat` bilan ochishga urinmang! Terminalingiz soniyalar ichida muzlab qoladi. Katta fayllar uchun `less`, `tail` yoki `head` ishlatiladi."
  },
  {
    "cmd": "head",
    "name": "Output the First Part of Files (Faylning Boshlang'ich Qatorlarini O'qish)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "head [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Standart holatda faylning eng birinchi 10 ta qatorini chiqaradi.",
    "desc": "Katta matnli yoki konfiguratsiya fayllarining bosh qismini tezkor ko'rib chiqish vositasi. Faylning sarlavhasi (header) yoki ustunlar nomini tekshirishda juda qo'l keladi.",
    "flags": [
      {
        "flag": "-n [SON]",
        "desc": "Ko'rsatiladigan qatorlar sonini belgilash (masalan, -n 20 yoki shunchaki -20)."
      },
      {
        "flag": "-c [BAYT]",
        "desc": "Qatorlar emas, faylning dastlabki N baytini chiqarish."
      },
      {
        "flag": "-q",
        "desc": "Fayl nomlari sarlavhasini yashirish (Quiet)."
      },
      {
        "flag": "-v",
        "desc": "Har doim fayl nomi sarlavhasini ko'rsatish (Verbose)."
      }
    ],
    "combos": [
      {
        "combo": "head -n 5 /etc/passwd",
        "title": "Faylning dastlabki 5 qatorini ko'rish",
        "desc": "Tizimning dastlabki asosiy foydalanuvchilarini ko'zdan kechirish."
      },
      {
        "combo": "head -c 100 sample.dat",
        "title": "Faylning dastlabki 100 baytini o'qish",
        "desc": "Faylning sehrli raqami (magic number) yoki formatini tekshirish."
      },
      {
        "combo": "ps aux | head -n 11",
        "title": "Eng yuqori resurs yeyotgan 10 ta jarayon sarlavhasi bilan",
        "desc": "ps natijasining ustun nomlari va eng birinchi 10 ta yozuvini ajratib ko'rsatish."
      }
    ],
    "underTheHood": "Faylni ochgach, har bir `read()` buferidagi yangi qator `\\n` belgilarini sanaydi. Belgilangan songa (default 10) yetishi bilanoq, faylning qolgan qismini o'qimasdan darhol `close()` chaqirib jarayonni to'xtatadi. Shuning uchun 100 GB faylda ham bir zumda ishlaydi.",
    "example": "$ head -n 3 /etc/passwd\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin",
    "analogy": "Gazetaning birinchi betidagi bosh maqolani ko'zdan kechirish.",
    "pitfalls": "Agar `-n -5` (manfiy son) yozilsa, bu oxirgi 5 qatordan boshqa barcha qatorlarni chiqaradi degani. Musbat son bilan adashtirmaslik kerak."
  },
  {
    "cmd": "tail",
    "name": "Output the Last Part of Files (Faylning Oxirgi Qatorlarini O'qish & Jonli Kuzatish)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "tail [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Standart holatda faylning eng so'nggi 10 ta qatorini chiqaradi. '-f' bayrog'i real vaqtda jonli kuzatish imkonini beradi.",
    "desc": "Server administratori va dasturchilarning eng sevimli buyrug'i. Tizim loglari (syslog, nginx, mysql) ning eng oxirgi yozuvlarini o'qish va yangi yozilayotgan xatoliklarni jonli ekranda real-vaqtda kuzatib borish uchun xizmat qiladi.",
    "flags": [
      {
        "flag": "-n [SON]",
        "desc": "Oxirgi N ta qatorni chiqarish (masalan, -n 50 yoki shunchaki -50)."
      },
      {
        "flag": "-f",
        "desc": "Jonli kuzatish (Follow) — faylni yopmasdan ochiq qoldiradi va unga yangi qator yozilishi bilan ekranga uzatadi."
      },
      {
        "flag": "-F",
        "desc": "Kuzatish va qayta ochish (Follow & Retry) — agar log fayl rotatsiya qilinib (logrotate) o'chirilsa va yangisi ochilsa, yangi faylga avtomatik ulanadi."
      },
      {
        "flag": "-c [BAYT]",
        "desc": "Faylning oxirgi N baytini chiqarish."
      }
    ],
    "combos": [
      {
        "combo": "tail -f /var/log/syslog",
        "title": "Tizim hodisalarini jonli efirda kuzatish",
        "desc": "Serverda nima ro'y berayotganini real vaqt rejimida ko'rib turadi (chiqish uchun Ctrl+C)."
      },
      {
        "combo": "tail -n 100 -f /var/log/nginx/error.log",
        "title": "Oxirgi 100 ta xato va yangilarini kuzatish",
        "desc": "Veb-sayt xatolarining oxirgi 100 tasini o'qib, yangi kelayotgan xatolarni kutadi."
      },
      {
        "combo": "tail -n +2 data.csv",
        "title": "Fayl sarlavhasini (1-qatorni) tashlab ketish",
        "desc": "CSV faylning ustun nomlarini e'tiborsiz qoldirib, 2-qatordan boshlab oxirigacha chiqaradi."
      }
    ],
    "underTheHood": "Fayl oxirini aniqlash uchun `lseek(fd, 0, SEEK_END)` tizim chaqiruvini bajaradi va orqaga qarab o'qiydi. `-f` bayrog'i ishlatilganda, zamonaviy Linux yadrosining `inotify` mexanizmi (`inotify_add_watch(IN_MODIFY)`) ishga tushadi; yadro yangi ma'lumot kelishi bilan jarayonga signal beradi.",
    "example": "$ tail -n 2 /var/log/auth.log\nOct 26 18:20:01 debian CRON[12540]: pam_unix(cron:session): session opened for user root\nOct 26 18:20:02 debian CRON[12540]: pam_unix(cron:session): session closed for user root",
    "analogy": "Jonli translyatsiyani tomosha qilish. `-f` bayrog'i xuddi Telegram chatida yangi kelgan xabarlarning pastdan chiqib kelishiga o'xshaydi.",
    "pitfalls": "Agar log fayl `logrotate` tomonidan yangilansa, oddiy `-f` eski (o'chirilgan) faylni kuzatishda davom etaveradi. Ishlab chiqarish serverlarida har doim `tail -F` ishlatish kerak!"
  },
  {
    "cmd": "wc",
    "name": "Word, Line, Character Count (Qatorlar, So'zlar va Baytlarni Sanash)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "wc [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Parametrsiz ishlatilsa 3 ta qiymat chiqaradi: qatorlar soni, so'zlar soni va baytlar soni.",
    "desc": "Matnli fayllar yoki quvur (pipe) orqali kelayotgan oqimning statistik ma'lumotlarini hisoblab beradi. Serverda qancha foydalanuvchi borligi, faylda qancha qator kod borligi yoki qidiruv natijalarining aniq sonini topishda ajralmas vosita.",
    "flags": [
      {
        "flag": "-l",
        "desc": "Faqat qatorlar sonini sanash (Lines) — eng ko'p ishlatiladigan bayroq."
      },
      {
        "flag": "-w",
        "desc": "Faqat so'zlar sonini sanash (Words)."
      },
      {
        "flag": "-c",
        "desc": "Baytlar sonini hisoblash (Bytes)."
      },
      {
        "flag": "-m",
        "desc": "Belgilar sonini sanash (Characters - UTF-8 ko'p baytli belgilarni to'g'ri hisoblaydi)."
      },
      {
        "flag": "-L",
        "desc": "Fayldagi eng uzun qatorning belgilar sonini topish."
      }
    ],
    "combos": [
      {
        "combo": "wc -l /etc/passwd",
        "title": "Tizimdagi jami foydalanuvchilar sonini bilish",
        "desc": "/etc/passwd faylining qatorlari soni orqali hisoblaydi."
      },
      {
        "combo": "cat access.log | grep ' 404 ' | wc -l",
        "title": "Saytdagi 404 xatoliklar sonini sanash",
        "desc": "Log ichidan 404 xatolikka uchragan so'rovlar sonini quvur orqali sanab beradi."
      },
      {
        "combo": "ls -1 | wc -l",
        "title": "Joriy papkadagi fayllar sonini sanash",
        "desc": "Katalog ichida qancha ob'ekt borligini aniq hisoblaydi."
      }
    ],
    "underTheHood": "Faylni buferma-bufer o'qiydi (`read()`) va ASCII/UTF-8 oqimidagi `\\n` belgilarini (qatorlar uchun) va bo'sh joy `isspace()` oraliqlarini (so'zlar uchun) tekshiradi. O'ta optimallashgan C tilida yozilganligi bois soniyasiga gigabaytlab ma'lumotni sanay oladi.",
    "example": "$ wc /etc/services\n 114  610 6554 /etc/services\n# 114 ta qator, 610 ta so'z, 6554 bayt",
    "analogy": "Kassadagi pul sanash mashinasi yoki kitob muharririning matndagi so'zlar sonini hisoblovchi kalkulyatori.",
    "pitfalls": "`wc -l` faqat `\\n` (newline) bilan tugagan qatorlarni sanaydi! Agar faylning oxirgi qatorida 'Enter' bosilmagan bo'lsa, u qator hisobga kirmay qolishi mumkin."
  },
  {
    "cmd": "stat",
    "name": "Display File or File System Status (Fayl va Inode Metama'lumotlarini To'liq Ko'rish)",
    "category": "Navigatsiya & Inodelar",
    "syntax": "stat [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Faylning Inode raqami, ruxsatlari, bloklari va 3 ta vaqt tamg'asini (atime, mtime, ctime, birth) chiqaradi.",
    "desc": "Linux fayl tizimining eng chuqur diagnostika vositasi. Faylning diskdagi fizik bloki, Inode raqami, qattiq bog'lamlar soni, o'nlik va sakkizlik ruxsat kodi hamda vaqt tamg'alarini to'liq ko'rsatib beradi.",
    "flags": [
      {
        "flag": "-c [FORMAT]",
        "desc": "Maxsus formatda chiqarish (masalan %i Inode uchun, %a sakkizlik huquqlar uchun)."
      },
      {
        "flag": "-f",
        "desc": "Fayl emas, fayl tizimining holatini ko'rish (Filesystem status - bo'sh inodelar va bloklar)."
      },
      {
        "flag": "-t",
        "desc": "Qisqa bitta qatorli formatda chiqarish (Terse)."
      }
    ],
    "combos": [
      {
        "combo": "stat -c '%a %n' *",
        "title": "Barcha fayllarning raqamli huquqlarini ko'rish",
        "desc": "Har bir faylning huquqini 755, 644 kabi sakkizlik kodda chiqaradi."
      },
      {
        "combo": "stat -c '%i' database.db",
        "title": "Faylning faqat Inode raqamini olish",
        "desc": "Skriptlar ichida fayl inodini o'zgaruvchiga yuklash uchun qulay."
      },
      {
        "combo": "stat -f /",
        "title": "Root diskining erkin inodelari statistikasini ko'rish",
        "desc": "Fayl tizimida qancha bo'sh Inode qolganini aniqlaydi."
      }
    ],
    "underTheHood": "To'g'ridan-to'g'ri `stat()` yoki `lstat()` tizim chaqiruvini bajaradi. Linux yadrosi Inode strukturasidagi (`struct inode`) barcha maydonlarni (`i_ino`, `i_mode`, `i_nlink`, `i_uid`, `i_gid`, `i_size`, `i_atime`, `i_mtime`, `i_ctime`) olib, foydalanuvchiga taqdim etadi.",
    "example": "$ stat test.txt\n  File: test.txt\n  Size: 1024       Blocks: 8          IO Block: 4096   regular file\nDevice: 801h/2049d Inode: 1048580     Links: 2\nAccess: (0644/-rw-r--r--)  Uid: ( 1000/ student)   Gid: ( 1000/ student)\nAccess: 2026-10-26 18:00:00.000000000 +0500\nModify: 2026-10-26 18:00:00.000000000 +0500\nChange: 2026-10-26 18:05:00.000000000 +0500\n Birth: 2026-10-26 17:55:00.000000000 +0500",
    "analogy": "Faylning to'liq fuqarolik pasporti yoki tug'ilganlik haqidagi guvohnomasi. Unda faylning egasi kim, qachon tug'ilgan va qaysi manzilga (inode) biriktirilgani yozilgan.",
    "pitfalls": "`Modify` (mtime - fayl matni o'zgarganda) bilan `Change` (ctime - fayl huquqlari yoki nomi o'zgarganda) ni ko'pchilik adashtiradi. `ctime` ni qo'lda o'zgartirib bo'lmaydi, uni yadro yangilaydi."
  },
  {
    "cmd": "ln",
    "name": "Make Links Between Files (Qattiq va Simvolik Havolalar Yaratish)",
    "category": "Navigatsiya & Inodelar",
    "syntax": "ln [BAYROQLAR] [ASL_FAYL] [HAVOLA_NOMI]",
    "syntaxRules": "Standart holatda Hard Link (qattiq havola) yaratadi. Simvolik (Soft) havola uchun '-s' bayrog'i majburiydir.",
    "desc": "Linux fayl tizimining eng muhim tushunchalaridan biri. Bir faylga boshqa nom yoki manzildan ulanish imkonini beradi. Hard Link bir xil Inodega ishora qiladi; Soft Link (symlink) esa fayl yo'lini o'zida saqlaydigan kichik ko'rsatkich fayldir.",
    "flags": [
      {
        "flag": "-s",
        "desc": "Simvolik (Soft/Symbolic) havola yaratish — Windows dagi 'Yorliq' (Shortcut) kabi ishlaydi, boshqa disklarga ham o'tadi."
      },
      {
        "flag": "-f",
        "desc": "Majburiy (Force) — agar havola nomli fayl allaqachon mavjud bo'lsa, uni o'chirib o'rniga yangi havola qo'yadi."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (Verbose) — qaysi havola qaysi faylga ulanganini ko'rsatadi."
      }
    ],
    "combos": [
      {
        "combo": "ln -s /var/www/html /home/student/site",
        "title": "Katalogga tezkor simvolik yo'l (Shortcut) ochish",
        "desc": "Uzoqdagi veb-papkani o'z uy katalogingizdan qulay boshqarish imkoniyati."
      },
      {
        "combo": "ln original.txt hardlink.txt",
        "title": "Qattiq havola (Hard Link) yaratish",
        "desc": "Bir xil Inodega ega ikkinchi nom ochadi. Asl fayl o'chirilsa ham ma'lumot saqlanib qoladi!"
      },
      {
        "combo": "ln -sf /etc/nginx/sites-available/app /etc/nginx/sites-enabled/",
        "title": "Nginx saytini faollashtirish",
        "desc": "Web serverda sayt konfiguratsiyasini jonli rejimga yoqishning standart usuli."
      }
    ],
    "underTheHood": "Hard Link yaratilganda `link()` chaqiruvi Inodening `i_nlink` hisoblagichini 1 taga oshiradi va katalogga yangi dentry qo'shadi (yangi Inode ochilmaydi!). Soft Link yaratilganda `symlink()` chaqiruvi yangi Inode (`S_IFLNK`) ochadi va uning ichiga nishon faylning yo'li string sifatida yoziladi.",
    "example": "$ ln -s /usr/bin/python3 python\n$ ls -l python\nlrwxrwxrwx 1 student student 16 Oct 26 18:40 python -> /usr/bin/python3\n$ ln file1.txt file1_hard\n$ ls -i file1.txt file1_hard\n10055 file1.txt\n10055 file1_hard",
    "analogy": "Hard Link — bitta odamning 2 ta ismi (Ali va Alisher). Bitta ismini chaqirmasangiz ham odam o'lmaydi. Soft Link — eshikdagi ko'rsatkich belgi ('Oshxona 2-qavatda'). Agar oshxona buzib tashlansa, belgi qolaveradi, lekin hech qayerga olib bormaydi (Broken link).",
    "pitfalls": "Hard Link ni papkalarga nisbatan va boshqa disk bo'limlariga (partitions) nisbatan qo'llab bo'lmaydi! Ular uchun har doim `ln -s` ishlatilishi shart."
  },
  {
    "cmd": "find",
    "name": "Search for Files in a Directory Hierarchy (Fayllarni Qidirish va Filtrlash)",
    "category": "Qidiruv & Diagnostika",
    "syntax": "find [BOSHLANGICH_KATALOG] [MEZONLAR] [AMALLAR]",
    "syntaxRules": "Qidiruv real vaqtda butun disk daraxtini aylanib chiqadi va juda murakkab filtrlarni qo'llab-quvvatlaydi.",
    "desc": "Linuxdagi eng kuchli qidiruv quroli. Fayllarni nomi, hajmi, o'zgartirilgan vaqti, egasi, huquqlari va Inode raqamiga qarab qidiradi va topilgan fayllar ustida avtomatik buyruq bajarish (`-exec`) imkonini beradi.",
    "flags": [
      {
        "flag": "-name [NAMUNA]",
        "desc": "Fayl nomi bo'yicha qidirish (registrga sezgir, masalan '*.log')."
      },
      {
        "flag": "-iname [NAMUNA]",
        "desc": "Nom bo'yicha registrni hisobga olmasdan qidirish (A va a bir xil)."
      },
      {
        "flag": "-type [TUR]",
        "desc": "Ob'ekt turi bo'yicha filtrlash: 'f' - oddiy fayl, 'd' - katalog, 'l' - simvolik havola."
      },
      {
        "flag": "-size [HAJM]",
        "desc": "Hajm bo'yicha qidirish: '+100M' (100MB dan katta), '-10k' (10KB dan kichik)."
      },
      {
        "flag": "-mtime [KUN]",
        "desc": "O'zgartirilgan vaqti bo'yicha: '-7' (oxirgi 7 kunda o'zgarganlar), '+30' (30 kundan eski)."
      },
      {
        "flag": "-perm [HUQUQ]",
        "desc": "Ruxsat huquqlari bo'yicha qidirish (masalan, 777 yoki -u=s SUID uchun)."
      },
      {
        "flag": "-inum [INODE]",
        "desc": "Aniq Inode raqami bo'yicha faylni topish."
      },
      {
        "flag": "-exec [BUYRUQ] {} \\;",
        "desc": "Topilgan har bir fayl ustida ko'rsatilgan buyruqni bajarish."
      },
      {
        "flag": "-delete",
        "desc": "Topilgan fayllarni to'g'ridan-to'g'ri o'chirib yuborish."
      }
    ],
    "combos": [
      {
        "combo": "find /var/log -type f -name '*.log' -mtime +30",
        "title": "30 kundan eski log fayllarni topish",
        "desc": "Diskni tozalashdan oldin eski loglarni aniqlash."
      },
      {
        "combo": "find . -type f -size +50M -exec ls -lh {} \\;",
        "title": "50MB dan katta fayllarni hajmi bilan ko'rish",
        "desc": "Katta hajmli fayllarni topib, ularning hajmlarini chiroyli formatda chiqarish."
      },
      {
        "combo": "find . -type f -perm 777 -exec chmod 755 {} \\;",
        "title": "Xavfsizlikni to'g'irlash (777 ruxsatlarni 755 qilish)",
        "desc": "Xavfli ochiq qolgan fayllar huquqini darhol xavfsiz holatga keltiradi."
      },
      {
        "combo": "find / -inum 1048580 2>/dev/null",
        "title": "Inode raqami orqali fayl nomini topish",
        "desc": "Inode ma'lum bo'lganda uning barcha qattiq bog'lamlarini qidirib topadi."
      }
    ],
    "underTheHood": "Katalog daraxtini rekursiv aylanib chiqish uchun `nftw()` yoki ichki `opendir()` / `readdir()` mexanizmini ishlatadi. Har bir topilgan ob'ekt uchun `stat()` chaqirib, metama'lumotlarni foydalanuvchi filtrlari bilan taqqoslaydi.",
    "example": "$ find /etc -type f -name '*.conf' | head -n 3\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/fuse.conf",
    "analogy": "Politsiya detektivi yoki itining hid bilish qobiliyati. 'Faqat qizil rangli (turi fayl), 5 kundan katta bo'lmagan (mtime) va hajmi katta (size) bo'lgan narsalarni topib kel' deb topshiriq berish.",
    "pitfalls": "Wildcard (*) ishlatganda tirnoqqa olish shart (`'*.txt'`), aks holda Shell uni find ga uzatmasdan oldin o'zi yoyib yuboradi va xatolik yuzaga keladi."
  },
  {
    "cmd": "file",
    "name": "Determine File Type (Faylning Haqiqiy Turini Aniqlash)",
    "category": "Qidiruv & Diagnostika",
    "syntax": "file [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Linuxda fayl kengaytmasi (.txt, .exe, .png) muhim emas. 'file' buyrug'i uning ichki sehrli baytlarini o'qiydi.",
    "desc": "Faylning nomiga yoki kengaytmasiga qaramasdan, uning haqiqiy ichki strukturasini tekshirib, fayl turini (ASCII matn, ELF 64-bit dastur, JPEG rasm, Zip arxiv) aniqlaydi.",
    "flags": [
      {
        "flag": "-b",
        "desc": "Qisqa rejim (Brief) — natijada fayl nomini ko'rsatmasdan faqat turini chiqaradi."
      },
      {
        "flag": "-i",
        "desc": "MIME turini chiqarish (masalan, text/plain; charset=utf-8 yoki application/x-executable)."
      },
      {
        "flag": "-z",
        "desc": "Siqilgan arxiv fayllar ichini tekshirish (Look inside compressed files)."
      }
    ],
    "combos": [
      {
        "combo": "file script.sh",
        "title": "Skript turini aniqlash",
        "desc": "Fayl haqiqatan ham POSIX shell skripti yoki Python ekanligini aniqlaydi."
      },
      {
        "combo": "file -i document.pdf",
        "title": "MIME turini aniqlash",
        "desc": "Veb-serverlar uchun zarur bo'lgan 'application/pdf' turini chiqaradi."
      },
      {
        "combo": "file /bin/bash",
        "title": "Tizim dasturining arxitekturasini tekshirish",
        "desc": "ELF 64-bit LSB executable, x86-64, dynamically linked ekanligini ko'rsatadi."
      }
    ],
    "underTheHood": "Faylning boshidagi birinchi bir necha yuz baytni o'qiydi va ularni `/usr/share/misc/magic` bazasidagi 'Magic Numbers' (sehrli raqamlar) bilan taqqoslaydi (masalan, PNG fayllar har doim `89 50 4E 47`, ELF dasturlar esa `7F 45 4C 46` bilan boshlanadi).",
    "example": "$ mv virus.exe document.png\n$ file document.png\ndocument.png: PE32+ executable (GUI) x86-64, for MS Windows\n# Nomiga rasm deb yozilgani bilan ichi Windows dasturi!",
    "analogy": "Meva sharbati shishasidagi yorliqqa emas, laboratoriyada uning tarkibini tekshirib, haqiqatan nima ekanligini bilish.",
    "pitfalls": "Bo'sh fayllar uchun har doim `empty` natijasini qaytaradi."
  },
  {
    "cmd": "which",
    "name": "Locate a Command (Buyruqning Bajariluvchi Fayl Manzilini Topish)",
    "category": "Qidiruv & Diagnostika",
    "syntax": "which [BUYRUQ_NOMI...]",
    "syntaxRules": "Foydalanuvchining $PATH muhit o'zgaruvchisidagi kataloglarni ketma-ket tekshiradi.",
    "desc": "Terminalga biror buyruq kiritilganda (masalan `python3`, `git`, `bash`), Linux aynan qaysi diskdagi faylni ishga tushirayotganini (absolyut yo'lini) ko'rsatadi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha mos kelgan manzillarni chiqarish ($PATH bo'ylab bir nechta versiya bo'lsa barchasini ko'rsatadi)."
      }
    ],
    "combos": [
      {
        "combo": "which python3",
        "title": "Python qayerdan yuklanayotganini bilish",
        "desc": "/usr/bin/python3 yoki virtualenv ichidagi manzilni aniqlaydi."
      },
      {
        "combo": "which -a node",
        "title": "Barcha o'rnatilgan Node.js yo'llarini topish",
        "desc": "Agar tizimda ham NVM, ham apt orqali o'rnatilgan bo'lsa, ikkalasini ham ko'rsatadi."
      }
    ],
    "underTheHood": "`$PATH` o'zgaruvchisini ikki nuqta `:` bo'yicha ajratadi (masalan `/usr/local/bin:/usr/bin:/bin`) va har bir katalog ichida berilgan nomli fayl borligini hamda unga bajarish huquqi (`X_OK`) berilganligini `access()` tizim chaqiruvi orqali tekshiradi.",
    "example": "$ which ls\n/usr/bin/ls\n$ which docker\n/usr/bin/docker",
    "analogy": "Kutubxonada kitob qaysi javonda turganini ko'rsatuvchi ma'lumotnoma.",
    "pitfalls": "Shell ichki buyruqlari (built-ins) bo'lgan `cd`, `alias`, `history` kabilarni `which` topa olmasligi mumkin. Ular uchun `type -a` ishlatiladi."
  },
  {
    "cmd": "tree",
    "name": "Depth Indented Directory Tree (Papkalar Tuzilishini Daraxtsimon Ko'rish)",
    "category": "Navigatsiya & Inodelar",
    "syntax": "tree [BAYROQLAR] [KATALOG]",
    "syntaxRules": "Grafik daraja ko'rinishida barcha ichki papka va fayllarni chiroyli qilib chizib beradi.",
    "desc": "Kataloglar va fayllar ierarxiyasini vizual daraxt (tree) ko'rinishida terminalda aks ettiradi. Loyiha strukturasi bilan tanishish yoki hisobot tayyorlashda eng ajoyib vosita.",
    "flags": [
      {
        "flag": "-L [CHUQURLIK]",
        "desc": "Daraxt chuqurligini cheklash (masalan, -L 2 faqat 2 pog'onagacha tushadi)."
      },
      {
        "flag": "-d",
        "desc": "Faqat papkalarni ko'rsatish (fayllarni yashiradi)."
      },
      {
        "flag": "-a",
        "desc": "Barcha yashirin fayllarni ham ko'rsatish."
      },
      {
        "flag": "-p",
        "desc": "Har bir faylning huquqlarini ham yonida chiqarish."
      },
      {
        "flag": "-h",
        "desc": "Fayl hajmlarini inson tushunadigan formatda ko'rsatish."
      },
      {
        "flag": "-I [NAMUNA]",
        "desc": "Muayyan papkalarni e'tiborsiz qoldirish (masalan -I 'node_modules|.git')."
      }
    ],
    "combos": [
      {
        "combo": "tree -L 2 -d",
        "title": "Loyiha arxitekturasini 2 qadamda ko'rish",
        "desc": "Faqat asosiy kataloglar tizimini chiroyli ko'rsatadi."
      },
      {
        "combo": "tree -L 3 -I 'node_modules|venv'",
        "title": "Keraksiz papkalarsiz toza kod daraxtini ko'rish",
        "desc": "Katta tashqi kutubxonalarni chetlab o'tib, asosiy kod tuzilishini chiqaradi."
      }
    ],
    "underTheHood": "Kataloglarni rekursiv chuqurlik bo'yicha aylanib (Depth-First Search), har bir daraja uchun Unicode ramka belgilarini (`├──`, `└──`, `│`) chizadi.",
    "example": "$ tree -L 2\n.\n├── src\n│   ├── main.py\n│   └── utils.py\n└── tests\n    └── test_main.py\n\n2 directories, 3 files",
    "analogy": "Shajara daraxti (Genealogy tree) — kim kimning ota-bobosi va farzandi ekanligini yaqqol ko'rsatib beradi.",
    "pitfalls": "Agar `node_modules` yoki ildiz `/` katalogida cheklovchi `-L` siz ishlatilsa, millionlab qatorlarni chizib terminalni qotirib qo'yishi mumkin."
  },
  {
    "cmd": "more",
    "name": "File Page by Page Filter (Fayllarni Sahifama-Sahifa O'qish - Klassik)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "more [BAYROQLAR] [FAYL]",
    "syntaxRules": "Terminal bo'yicha bitta ekran to'ldirib ko'rsatadi. 'Space' keyingi sahifaga, 'Enter' keyingi qatorga o'tkazadi.",
    "desc": "Uzun matnli fayllarni butunlay ekranga otmasdan, ekran sig'imiga qarab sahifama-sahifa o'qish imkonini beruvchi klassik Unix vositasi.",
    "flags": [
      {
        "flag": "-d",
        "desc": "Qulay yordamchi ko'rsatish ('Press space to continue, q to quit')."
      },
      {
        "flag": "+[SON]",
        "desc": "Faylni to'g'ridan-to'g'ri ko'rsatilgan qatordan boshlab ochish."
      }
    ],
    "combos": [
      {
        "combo": "more +50 /var/log/syslog",
        "title": "Faylni 50-qatordan boshlab o'qish",
        "desc": "Boshidagi eskirgan ma'lumotlarni tashlab, o'rtasidan boshlaydi."
      },
      {
        "combo": "cat config.txt | more",
        "title": "Quvur natijasini sahifalab ko'rish",
        "desc": "Uzun buyruq natijalarini qulay varaqlash."
      }
    ],
    "underTheHood": "Terminal o'lchamini (qatorlar va ustunlar soni) `ioctl(TIOCGWINSZ)` orqali oladi va har gal ekran sig'adigan qatorlarni chiqarib, foydalanuvchi klaviatura kiritishini kutadi.",
    "example": "$ more /etc/services\n--More--(1%)\n# Space bosing",
    "analogy": "Kitobni shoshilmasdan betma-bet o'qish.",
    "pitfalls": "Klassik `more` faqat oldinga qarab o'qiydi, orqaga qaytish imkoniyati cheklangan. Zamonaviy tizimlarda uning o'rniga ancha mukammal `less` ishlatiladi."
  },
  {
    "cmd": "less",
    "name": "Opposite of More / Interactive Pager (Kengaytirilgan Sahifalab O'qish)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "less [BAYROQLAR] [FAYL]",
    "syntaxRules": "'Less is more' — orqaga ham, oldinga ham o'tish, matn ichidan tezkor qidirish ('/so'z') imkoniyatiga ega.",
    "desc": "Linuxdagi eng qulay va kuchli matn ko'rish dasturi. Butun faylni xotiraga yuklamasdan o'qiganligi tufayli hatto 50 Gigabaytlik ulkan log fayllarini ham 0.1 soniyada ochadi va qotmasdan varaqlash imkonini beradi.",
    "flags": [
      {
        "flag": "-N",
        "desc": "Qator raqamlarini yonida ko'rsatish (Line numbers)."
      },
      {
        "flag": "-S",
        "desc": "Uzun qatorlarni pastga tushirmasdan kesib ko'rsatish (gorizontal o'qish imkoniyati)."
      },
      {
        "flag": "-i",
        "desc": "Qidiruvda katta-kichik harflarni e'tiborsiz qoldirish (Smart case search)."
      },
      {
        "flag": "+F",
        "desc": "Xuddi `tail -f` kabi jonli kuzatish rejimiga o'tish (Ctrl+C bilan to'xtatiladi)."
      }
    ],
    "combos": [
      {
        "combo": "less -N /var/log/syslog",
        "title": "Log faylni qator raqamlari bilan o'qish",
        "desc": "Qator raqamlari bilan birga ochadi; ichida '/' bosib so'z qidirish mumkin."
      },
      {
        "combo": "less +F /var/log/nginx/access.log",
        "title": "Jonli kuzatishdan erkin qidiruvga o'tish",
        "desc": "+F rejimida yangi loglarni ko'radi, Ctrl+C bosib darhol ichidan qidirishga o'tadi."
      }
    ],
    "underTheHood": "`ncurses` kutubxonasiga asoslangan bo'lib, faylning faqat ekranga sig'adigan qismini `mmap()` yoki `lseek()` orqali yuklaydi. Shuning uchun fayl hajmi qanchalik ulkan bo'lishidan qat'i nazar xotirani (RAM) to'ldirmaydi.",
    "example": "$ less -N app.log\n# Ichida /ERROR deb yozib Enter bosing — barcha xatolar belgilab beriladi!",
    "analogy": "Elektron kitob (Kindle). Siz xohlagan sahifaga sakrashingiz, qidirishingiz va orqaga qaytishingiz mumkin.",
    "pitfalls": "Chiqish uchun 'q' tugmasini bosish kerakligini ba'zan yangi boshlovchilar unutib, terminalni yopib yuborishadi."
  },
  {
    "cmd": "echo",
    "name": "Display a Line of Text (Matn Chiqarish & Faylga Yozish)",
    "category": "Bash Skriptlash & Oqimlar",
    "syntax": "echo [BAYROQLAR] [MATN]",
    "syntaxRules": "Maxsus belgilarni (\\n, \\t) ishlatish uchun '-e' bayrog'i berilishi shart.",
    "desc": "Berilgan satrni yoki o'zgaruvchi qiymatini ekranga chiqaradi. Qayta yo'naltirish operatorlari (`>`, `>>`) bilan birgalikda fayllarga ma'lumot yozish yoki konfiguratsiya fayllarini yaratishda keng qo'llaniladi.",
    "flags": [
      {
        "flag": "-e",
        "desc": "Maxsus escape-ketma-ketliklarni faollashtirish (\\n - yangi qator, \\t - tab, \\e - ranglar)."
      },
      {
        "flag": "-n",
        "desc": "Oxiridagi yangi qator (newline) belgisini qo'shmaslik."
      }
    ],
    "combos": [
      {
        "combo": "echo 'nameserver 8.8.8.8' >> /etc/resolv.conf",
        "title": "Fayl oxiriga yangi qator qo'shish (Append)",
        "desc": "Mavjud ma'lumotlarni o'chirmasdan yangi DNS server qo'shadi."
      },
      {
        "combo": "echo 'PORT=8080' > .env",
        "title": "Yangi fayl yaratib matn yozish (Overwrite)",
        "desc": ".env faylini yaratib ichiga PORT=8080 yozadi."
      },
      {
        "combo": "echo -e 'Status:\\t\\e[32mOK\\e[0m'",
        "title": "Terminalda yashil rangli chiroyli matn chiqarish",
        "desc": "Rangli holat xabarlarini aks ettiradi."
      }
    ],
    "underTheHood": "Odatda Bash ichki buyrug'i (built-in). Argumentlarni olib, fayl deskriptor 1 ga (stdout) `write()` tizim chaqiruvi orqali uzatadi va oxiriga `\\n` belgisini qo'shadi.",
    "example": "$ echo $USER\nstudent\n$ echo -e 'Qator 1\\nQator 2'\nQator 1\nQator 2",
    "analogy": "Ovoz karnayi (Megafon). Siz unga nima deb baqirsangiz, uni hammaga eshittiradi yoki yozuvchi qalam kabi qog'ozga yozib qo'yadi.",
    "pitfalls": "`>` (bitta belgi) fayl ichidagi barcha narsani o'chirib yuborib ustidan yozadi! Fayl oxiriga qo'shish uchun doimo `>>` (ikkita belgi) ishlatilishi shart."
  },
  {
    "cmd": "clear",
    "name": "Clear the Terminal Screen (Terminal Ekranini Tozalash)",
    "category": "Navigatsiya & Inodelar",
    "syntax": "clear [BAYROQLAR]",
    "syntaxRules": "Hech qanday parametrsiz teriladi yoki Ctrl + L tugmalar birikmasi bosiladi.",
    "desc": "Terminal ekranidagi barcha oldingi buyruqlar va matnlarni ko'zdan yashirib, kursor boshiga bo'sh, toza ishchi maydon yaratadi.",
    "flags": [
      {
        "flag": "-x",
        "desc": "Orqaga qaytarish buferini (scrollback buffer) saqlab qolgan holda faqat ko'rinadigan qismni tozalash."
      }
    ],
    "combos": [
      {
        "combo": "clear",
        "title": "Ekranni tozalash",
        "desc": "Terminalni yangi ochilgandek toza holatga keltiradi."
      },
      {
        "combo": "Ctrl + L",
        "title": "Tezkor klaviatura kombinatsiyasi",
        "desc": "Klaviatura orqali yozuvni to'xtatmasdan ekranni tozalash."
      }
    ],
    "underTheHood": "Terminalga ANSI escape ketma-ketligini (`\\033[H\\033[2J` yoki `\\033[3J`) yuboradi. Ushbu kod terminal emulyatoriga ekranni tozalash va kursorni 1-qator 1-ustunga qaytarish buyrug'ini beradi.",
    "example": "$ clear",
    "analogy": "Doskadagi yozuvlarni gubka bilan o'chirib, yangi darsga tayyorlash.",
    "pitfalls": "`clear` bajarilganda ma'lumotlar o'chib ketmaydi, sichqoncha g'ildiragini yuqoriga aylantirsangiz eski buyruqlar yuqorida turgan bo'ladi."
  },
  {
    "cmd": "hostname",
    "name": "Show or Set System Hostname (Server Nomini Ko'rish va O'rnatish)",
    "category": "Tizim Boshqaruvi",
    "syntax": "hostname [BAYROQLAR] [YANGI_NOM]",
    "syntaxRules": "Parametrsiz nomni ko'rsatadi; yangi nom berish uchun root huquqi talab etiladi.",
    "desc": "Tarmoqda ushbu kompyuter yoki server qanday nom bilan atalishini ko'rsatadi yoki o'zgartiradi. DevOps arxitekturasida qaysi serverda (Prod, Dev, Stage) turganingizni bilishda juda muhim.",
    "flags": [
      {
        "flag": "-I",
        "desc": "Barcha tarmoq interfeyslarining IP manzillarini chiqarish."
      },
      {
        "flag": "-f",
        "desc": "To'liq domen nomini ko'rsatish (Fully Qualified Domain Name - FQDN)."
      },
      {
        "flag": "-s",
        "desc": "Qisqa nomni chiqarish (Short hostname)."
      }
    ],
    "combos": [
      {
        "combo": "hostname -I",
        "title": "Serverning barcha IP manzillarini bilish",
        "desc": "Serverning mahalliy va tashqi IP manzillarini bir zumda bilib olish."
      },
      {
        "combo": "sudo hostnamectl set-hostname kali-server",
        "title": "Server nomini butunlay o'zgartirish",
        "desc": "Tizim nomini qayta yuklanganda ham saqlanadigan qilib o'rnatadi."
      }
    ],
    "underTheHood": "`gethostname()` tizim chaqiruvi orqali yadro xotirasidagi `utsname` strukturasidan server nomini o'qiydi. O'zgartirishda esa `sethostname()` chaqiriladi va `/etc/hostname` fayliga yoziladi.",
    "example": "$ hostname\nkali-node-01\n$ hostname -I\n192.168.1.55 172.17.0.1",
    "analogy": "Odamning ismi yoki uyning raqami. Pochtalon xat olib kelganda yoki tarmoqda paket kelganda qaysi serverga kelganini bildiradi.",
    "pitfalls": "Oddiy `hostname yangi-nom` buyrug'i faqat xotirada o'zgaradi va server qayta yoqilganda (reboot) yana eski nomiga qaytadi. Doimiy o'zgartirish uchun `hostnamectl` ishlatiladi."
  },
  {
    "cmd": "whoami",
    "name": "Print Effective User ID (Joriy Sessiya Foydalanuvchi Nomini Chiqarish)",
    "category": "Xavfsizlik & Foydalanuvchilar",
    "syntax": "whoami",
    "syntaxRules": "Hech qanday qo'shimcha parametrsiz ishlatiladi.",
    "desc": "Ayni daqiqada terminalda qaysi foydalanuvchi hisobi (masalan, `root`, `student`, `www-data`) nomidan buyruqlar bajarilayotganini aniq ko'rsatadi.",
    "flags": [
      {
        "flag": "--help",
        "desc": "Yordam xabarini chiqarish."
      },
      {
        "flag": "--version",
        "desc": "Dastur versiyasini ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "whoami",
        "title": "Joriy foydalanuvchini bilish",
        "desc": "Siz rootmisiz yoki oddiy foydalanuvchi ekanligingizni tekshirish."
      },
      {
        "combo": "[ $(whoami) != 'root' ] && echo 'Faqat root bajarishi shart!'",
        "title": "Skriptlarda root huquqini tekshirish",
        "desc": "Skript xavfsizligi uchun agar foydalanuvchi root bo'lmasa ishni to'xtatish."
      }
    ],
    "underTheHood": "`geteuid()` (get effective user ID) tizim chaqiruvini bajaradi. Olingan raqamli UID (masalan 0 yoki 1000) orqali `getpwuid()` funksiyasi yordamida `/etc/passwd` faylidan foydalanuvchining matnli nomini topadi.",
    "example": "$ whoami\nstudent\n$ sudo whoami\nroot",
    "analogy": "Ko'zguga qarab 'Men hozir qaysi kiyimdaman va kimman?' deb o'zini tanib olish.",
    "pitfalls": "`id` buyrug'i ancha ko'proq ma'lumot (UID, GID va barcha guruhlar) beradi, lekin oddiy nom kerak bo'lganda `whoami` eng qulayidir."
  }
];
