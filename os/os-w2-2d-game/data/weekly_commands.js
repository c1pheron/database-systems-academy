// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 SPECIFIC COMMANDS REPOSITORY
// Modul: 2-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Foydalanuvchilar, huquqlar, matn filtrlash, arxivlar va disk boshqaruvi
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "useradd",
    "name": "Create a New User Account (Yangi Foydalanuvchi Qo'shish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "useradd [BAYROQLAR] [FOYDALANUVCHI_NOMI]",
    "syntaxRules": "Faqat root (yoki sudo) huquqi bilan bajariladi. Yangi uy papkasi yaratish uchun '-m' bayrog'i berilishi shart.",
    "desc": "Linux tizimida yangi foydalanuvchi hisobini yaratadi, unga yangi yagona UID (User ID) ajratadi va /etc/passwd hamda /etc/shadow fayllariga yozuv qo'shadi.",
    "flags": [
      {
        "flag": "-m",
        "desc": "Uy katalogini yaratish (Create home directory) — /home/username papkasini ochib, /etc/skel shablonlarini nusxalaydi."
      },
      {
        "flag": "-s [SHELL]",
        "desc": "Birlamchi qobiqni (login shell) belgilash (masalan /bin/bash yoki /sbin/nologin tizim xizmatlari uchun)."
      },
      {
        "flag": "-G [GURUHLAR]",
        "desc": "Qo'shimcha guruhlarga biriktirish (masalan, -G sudo,docker)."
      },
      {
        "flag": "-u [UID]",
        "desc": "Foydalanuvchiga aniq raqamli UID tayinlash."
      },
      {
        "flag": "-d [KATALOG]",
        "desc": "Standart bo'lmagan uy papkasini belgilash."
      }
    ],
    "combos": [
      {
        "combo": "useradd -m -s /bin/bash devops",
        "title": "To'laqonli ishlab chiquvchi hisobini ochish",
        "desc": "Uy papkasi va Bash qobig'i bilan yangi devops foydalanuvchisini barpo etadi."
      },
      {
        "combo": "useradd -r -s /usr/sbin/nologin myapp_svc",
        "title": "Tizim xizmatlari uchun xavfsiz foydalanuvchi ochish",
        "desc": "Tizimga kirish huquqi (shell) bo'lmagan, faqat dastur ishlatishga mo'ljallangan xavfsiz tizim foydalanuvchisi."
      },
      {
        "combo": "useradd -m -G sudo,docker developer",
        "title": "Sudo va Docker huquqlari bilan yaratish",
        "desc": "Foydalanuvchini darhol ma'muriy guruhlarga kiritib yaratadi."
      }
    ],
    "underTheHood": "Yadro `/etc/subuid`, `/etc/passwd` va `/etc/shadow` fayllarini `O_WRONLY` bilan ochadi, yangi UID va GID ajratadi, `/etc/skel` ichidagi yashirin konfiguratsiya fayllarini (`.bashrc`, `.profile`) yangi yaratilgan uy papkasiga nusxalaydi va ularga `chown` qiladi.",
    "example": "$ sudo useradd -m -s /bin/bash ali\n$ id ali\nuid=1001(ali) gid=1001(ali) groups=1001(ali)",
    "analogy": "Kompaniyaga yangi xodim qabul qilish: unga xodim kartochkasi (UID), shaxsiy stol (home directory) va xizmat kiyimi (shell) beriladi.",
    "pitfalls": "Agar `-m` bayrog'i unutilsa, foydalanuvchi yaratiladi, lekin uning shaxsiy uy papkasi ochilmaydi va tizimga kirganda 'No directory, logging in with HOME=/' xatosi chiqadi."
  },
  {
    "cmd": "usermod",
    "name": "Modify a User Account (Foydalanuvchi Sozlamalarini O'zgartirish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "usermod [BAYROQLAR] [FOYDALANUVCHI_NOMI]",
    "syntaxRules": "Mavjud foydalanuvchining guruhlari, qobig'i, nomi va uy papkasini o'zgartirish vositasi.",
    "desc": "Mavjud foydalanuvchi parametrlarini yangilash buyrug'i. Eng ko'p foydalanuvchini `sudo` yoki `docker` guruhiga qo'shishda ishlatiladi.",
    "flags": [
      {
        "flag": "-aG [GURUHLAR]",
        "desc": "Mavjud guruhlarni saqlagan holda yangi guruhlarga qo'shish (Append Group) — eng muhim bayroq!"
      },
      {
        "flag": "-s [SHELL]",
        "desc": "Foydalanuvchining login qobig'ini o'zgartirish (masalan /bin/zsh)."
      },
      {
        "flag": "-l [YANGI_NOM]",
        "desc": "Foydalanuvchi login nomini o'zgartirish."
      },
      {
        "flag": "-L",
        "desc": "Foydalanuvchi hisobini vaqtincha muzlatish/bloklash (Lock)."
      },
      {
        "flag": "-U",
        "desc": "Muzlatilgan hisobni qayta ochish (Unlock)."
      }
    ],
    "combos": [
      {
        "combo": "sudo usermod -aG sudo student",
        "title": "Foydalanuvchiga administrator (Sudo) huquqini berish",
        "desc": "Student foydalanuvchisiga barcha ma'muriy imtiyozlarni beradi."
      },
      {
        "combo": "sudo usermod -aG docker $USER",
        "title": "Docker ni sudo siz ishlatish huquqini berish",
        "desc": "Joriy foydalanuvchini docker guruhiga kiritadi."
      },
      {
        "combo": "sudo usermod -L bad_user",
        "title": "Xavfli xodimni tizimdan darhol bloklash",
        "desc": "Parol xeshiga '!' belgisini qo'yib, hisobni vaqtincha o'chirib qo'yadi."
      }
    ],
    "underTheHood": "`/etc/group` faylidagi guruh qatorlariga foydalanuvchi nomini vergul bilan qo'shadi yoki `/etc/passwd` dagi shell maydonini yangilaydi.",
    "example": "$ sudo usermod -aG sudo ali\n$ groups ali\nali : ali sudo",
    "analogy": "Xodimning lavozimini oshirish yoki unga server xonasining kalitini (sudo/docker guruhini) berish.",
    "pitfalls": "ENG KATTA XATO: `-aG` o'rniga faqat `-G` yozilsa, foydalanuvchi avval a'zo bo'lgan BARCHA boshqa guruhlardan chiqarib yuboriladi! Har doim `-a` (append) birga yozilishi shart!"
  },
  {
    "cmd": "userdel",
    "name": "Delete a User Account (Foydalanuvchini O'chirish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "userdel [BAYROQLAR] [FOYDALANUVCHI_NOMI]",
    "syntaxRules": "Foydalanuvchining uy papkasini ham o'chirish uchun '-r' bayrog'i berilishi lozim.",
    "desc": "Tizimdan foydalanuvchi hisobini o'chiradi. Agar `-r` bayrog'i qo'shilsa, uning uy katalogi va elektron pochta qutisini ham tozalab tashlaydi.",
    "flags": [
      {
        "flag": "-r",
        "desc": "Uy katalogi va pochta qutisi bilan birga o'chirish (Remove home dir)."
      },
      {
        "flag": "-f",
        "desc": "Majburiy o'chirish — hatto foydalanuvchi ayni paytda tizimga kirib turgan bo'lsa ham."
      }
    ],
    "combos": [
      {
        "combo": "sudo userdel -r old_user",
        "title": "Foydalanuvchini barcha fayllari bilan to'liq tozalash",
        "desc": "Tizimda hech qanday ortiqcha fayl qoldirmasdan to'liq yo'q qiladi."
      },
      {
        "combo": "sudo userdel guest",
        "title": "Foydalanuvchini uy papkasini saqlab o'chirish",
        "desc": "Hisob o'chiriladi, lekin uning fayllari keyinchalik tahlil qilish uchun qoladi."
      }
    ],
    "underTheHood": "`/etc/passwd`, `/etc/shadow` va `/etc/group` dan foydalanuvchi yozuvlarini o'chiradi. `-r` berilganda uning `/home/username` katalogi ustida rekursiv `unlink()` va `rmdir()` chaqiriladi.",
    "example": "$ sudo userdel -r testuser",
    "analogy": "Ishdan ketgan xodimning shaxsiy ish jildini yoqib yuborish va binoga kirish ruxsatnomasini bekor qilish.",
    "pitfalls": "Agar `-r` siz o'chirilsa, uning fayllari egasiz (UID raqami bilan) qolib ketadi (`ls -l` da egasi o'rniga 1002 raqami chiqib qoladi)."
  },
  {
    "cmd": "passwd",
    "name": "Change User Password (Parolni O'rnatish va Yangilash)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "passwd [BAYROQLAR] [FOYDALANUVCHI]",
    "syntaxRules": "Oddiy foydalanuvchi faqat o'z parolini o'zgartira oladi. Root esa istalgan foydalanuvchiga so'rovsiz yangi parol qo'ya oladi.",
    "desc": "Foydalanuvchining login parolini o'zgartirish yoki parolsiz holatga keltirish buyrug'i. Xavfsiz SHA-512 yoki yescrypt kriptografik algoritmlari orqali parolni xeshlab /etc/shadow ga saqlaydi.",
    "flags": [
      {
        "flag": "-l",
        "desc": "Parolni bloklash (Lock)."
      },
      {
        "flag": "-u",
        "desc": "Parolni blokdan chiqarish (Unlock)."
      },
      {
        "flag": "-d",
        "desc": "Parolni o'chirib parolsiz kirishga ruxsat berish (Delete password)."
      },
      {
        "flag": "-e",
        "desc": "Keyingi kirishda parolni majburiy almashtirishni talab qilish (Expire)."
      },
      {
        "flag": "-S",
        "desc": "Parol holati haqidagi ma'lumotni ko'rish (Status)."
      }
    ],
    "combos": [
      {
        "combo": "passwd",
        "title": "O'z shaxsiy parolini yangilash",
        "desc": "Eski parolni kiritish orqali yangi kuchli parol o'rnatish."
      },
      {
        "combo": "sudo passwd student",
        "title": "Administrator sifatida boshqa foydalanuvchiga yangi parol qo'yish",
        "desc": "Eski parolni so'ramay darhol yangi parol belgilaydi."
      },
      {
        "combo": "sudo passwd -e new_worker",
        "title": "Yangi xodimni 1-marta kirganda parolini almashtirishga majburlash",
        "desc": "Xavfsizlik siyosati bo'yicha majburiy almashtirish."
      }
    ],
    "underTheHood": "`passwd` dasturi `SUID` biti (`-rwsr-xr-x`) bilan o'rnatilgan. Shuning uchun u oddiy foydalanuvchi nomidan bajarilsa ham, `/etc/shadow` fayliga faqat root yoza oladigan imtiyoz bilan kiradi.",
    "example": "$ passwd\nChanging password for student.\nCurrent password:\nNew password:\nRetype new password:\npasswd: all authentication tokens updated successfully.",
    "analogy": "Eshik qulfining kodini almashtirish.",
    "pitfalls": "Terminalda yangi parol yozilayotganda yulduzchalar (*) yoki nuqtalar ko'rinmaydi — bu xavfsizlik chorasi! Klaviaturani shunchaki terib Enter bosish kerak."
  },
  {
    "cmd": "groupadd",
    "name": "Create a New Group (Yangi Guruh Yaratish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "groupadd [BAYROQLAR] [GURUH_NOMI]",
    "syntaxRules": "Yangi guruh nomi va yagona GID (Group ID) ajratadi.",
    "desc": "Linux tizimida yangi foydalanuvchilar guruhini yaratadi. Guruhlar jamoaviy ishlashda bir nechta dasturchilarga bitta umumiy papka yoki fayllar ustida birgalikda ishlash huquqini berish uchun xizmat qiladi.",
    "flags": [
      {
        "flag": "-g [GID]",
        "desc": "Guruhga aniq GID raqamini belgilash."
      },
      {
        "flag": "-r",
        "desc": "Tizim guruhi sifatida yaratish (System group - GID < 1000)."
      }
    ],
    "combos": [
      {
        "combo": "sudo groupadd developers",
        "title": "Dasturchilar guruhini ochish",
        "desc": "Yangi 'developers' jamoaviy guruhini barpo etadi."
      },
      {
        "combo": "sudo groupadd -r dba",
        "title": "Ma'lumotlar bazasi administratorlari tizim guruhini ochish",
        "desc": "Tizim xizmatlari darajasidagi maxsus guruh."
      }
    ],
    "underTheHood": "`/etc/group` va `/etc/gshadow` fayllarini ochib, yangi qator qo'shadi: `developers:x:1005:`",
    "example": "$ sudo groupadd analytics\n$ grep analytics /etc/group\nanalytics:x:1003:",
    "analogy": "Kompaniyada yangi bo'lim (masalan, Marketing yoki Backend jamoasi) ochish.",
    "pitfalls": "Agar guruh nomi allaqachon mavjud bo'lsa, `groupadd: group 'nom' already exists` xatosi chiqadi."
  },
  {
    "cmd": "groupdel",
    "name": "Delete a Group (Guruhni O'chirish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "groupdel [GURUH_NOMI]",
    "syntaxRules": "Agar guruh qaysidir foydalanuvchining 'birlamchi guruhi' (primary group) bo'lsa, uni o'chirishga ruxsat berilmaydi.",
    "desc": "Keraksiz yoki eskirgan guruhni tizimdan o'chirib tashlaydi.",
    "flags": [
      {
        "flag": "-f",
        "desc": "Majburiy o'chirish (Force)."
      }
    ],
    "combos": [
      {
        "combo": "sudo groupdel testers",
        "title": "Guruhni o'chirish",
        "desc": "Ortiqcha guruhni /etc/group dan tozalaydi."
      }
    ],
    "underTheHood": "`/etc/group` va `/etc/gshadow` fayllaridan guruh yozuvini olib tashlaydi.",
    "example": "$ sudo groupdel testgroup",
    "analogy": "Tashkilotda bo'limni yopish.",
    "pitfalls": "Foydalanuvchining asosiy guruhini o'chirishdan oldin `usermod -g` bilan uning boshqa guruhga o'tkazilishi shart."
  },
  {
    "cmd": "groups",
    "name": "Show User Groups (Foydalanuvchi Qaysi Guruhlarga A'zo Ekanligini Ko'rish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "groups [FOYDALANUVCHI]",
    "syntaxRules": "Parametrsiz joriy foydalanuvchining guruhlarini ko'rsatadi.",
    "desc": "Foydalanuvchining barcha birlamchi va ikkilamchi (supplementary) guruhlarini ro'yxatlaydi.",
    "flags": [
      {
        "flag": "--help",
        "desc": "Yordam ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "groups",
        "title": "O'z guruhlarimni bilish",
        "desc": "Qaysi huquqlarga ega ekanligingizni tezkor tekshirish."
      },
      {
        "combo": "groups student",
        "title": "Talaba hisobining guruhlarini tekshirish",
        "desc": "Student sudo yoki docker guruhida bor-yo'qligini bilish."
      }
    ],
    "underTheHood": "`getgrouplist()` tizim chaqiruvi orqali foydalanuvchining barcha GID larini oladi va `/etc/group` dan nomlarini chiqaradi.",
    "example": "$ groups\nstudent sudo docker dialout audio",
    "analogy": "Xodimning beydjigida qaysi eshiklarga ruxsati borligini ko'rsatuvchi muhrlar.",
    "pitfalls": "Yangi guruhga qo'shilgandan so'ng, sessiyani yangilash (`newgrp guruh` yoki qayta kirish) kerak, aks holda yangi huquqlar ishlamay turishi mumkin."
  },
  {
    "cmd": "id",
    "name": "Print Real and Effective User/Group IDs (Foydalanuvchi va Guruh ID larini Ko'rish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "id [BAYROQLAR] [FOYDALANUVCHI]",
    "syntaxRules": "UID, GID va barcha ikkilamchi guruhlarning raqamlari va nomlarini chiqaradi.",
    "desc": "Linux xavfsizlik auditining asosi. Sessiyaning real UID (ruid), effektiv UID (euid), real GID (rgid) va barcha qo'shimcha guruhlarini ko'rsatib beradi.",
    "flags": [
      {
        "flag": "-u",
        "desc": "Faqat UID raqamini chiqarish."
      },
      {
        "flag": "-g",
        "desc": "Faqat asosiy GID raqamini chiqarish."
      },
      {
        "flag": "-G",
        "desc": "Barcha guruhlar GID larini bo'sh joy bilan chiqarish."
      },
      {
        "flag": "-n",
        "desc": "Raqamlar o'rniga nomlarni chiqarish (-u, -g, -G bilan birga ishlatiladi)."
      },
      {
        "flag": "-un",
        "desc": "Faqat foydalanuvchi nomini chiqarish (whoami ga teng)."
      }
    ],
    "combos": [
      {
        "combo": "id",
        "title": "To'liq identifikatsiya ma'lumotlarini ko'rish",
        "desc": "uid=1000(student) gid=1000(student) groups=1000(student),27(sudo)..."
      },
      {
        "combo": "id -u",
        "title": "Skriptlarda root ekanlikni tekshirish",
        "desc": "Agar natija 0 bo'lsa — bu root foydalanuvchi!"
      }
    ],
    "underTheHood": "`getuid()`, `geteuid()`, `getgid()`, `getegid()` va `getgroups()` tizim chaqiruvlari majmuasini bajaradi.",
    "example": "$ id\nuid=1000(student) gid=1000(student) groups=1000(student),27(sudo),1001(docker)",
    "analogy": "Fuqaroning pasportidagi shaxsiy identifikatsiya raqami (JSHSHIR).",
    "pitfalls": "SUID dasturlar bajarilganda `uid` bilan `euid` farq qilishi mumkin."
  },
  {
    "cmd": "su",
    "name": "Switch User (Boshqa Foydalanuvchiga O'tish / Kirish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "su [BAYROQLAR] [FOYDALANUVCHI]",
    "syntaxRules": "Oddiy 'su' rootga o'tishni bildiradi. '-' bayrog'i (login shell) to'liq yangi muhit yuklash uchun nihoyatda muhim!",
    "desc": "Joriy terminalda boshqa foydalanuvchi hisobiga o'tish imkonini beradi. Uning parolini bilish talab etiladi (root dan boshqalarga o'tishda esa parol so'ralmaydi).",
    "flags": [
      {
        "flag": "- / -l",
        "desc": "Login qobig'ini ishga tushirish (Login shell) — barcha muhit o'zgaruvchilari ($PATH, $HOME) yangi foydalanuvchiga to'liq moslanadi."
      },
      {
        "flag": "-c [BUYRUQ]",
        "desc": "O'sha foydalanuvchi nomidan faqat 1 ta buyruqni bajarib qaytish."
      },
      {
        "flag": "-s [SHELL]",
        "desc": "Boshqa qobiqni ishlatish."
      }
    ],
    "combos": [
      {
        "combo": "su -",
        "title": "To'laqonli Root sessiyasini ochish",
        "desc": "Barcha root yo'llari (/sbin, /usr/sbin) bilan toza ma'muriy rejimga o'tadi."
      },
      {
        "combo": "su - student",
        "title": "Student hisobiga uning uy muhiti bilan o'tish",
        "desc": "To'liq student sifatida kiradi."
      },
      {
        "combo": "su - postgres -c 'psql'",
        "title": "PostgreSQL foydalanuvchisi nomidan buyruq bajarish",
        "desc": "Baza bilan ishlashda juda ommabop usul."
      }
    ],
    "underTheHood": "PAM (Pluggable Authentication Modules) orqali parolni tekshiradi, `setgid()`, `setuid()` chaqiruvlari orqali jarayon egasini o'zgartiradi va yangi shell dasturini `execve()` bilan ishga tushiradi.",
    "example": "$ su -\nPassword:\nroot@debian:~# whoami\nroot",
    "analogy": "Boshqa kiyim kiyib, boshqa odamning stoli orqasiga o'tirish.",
    "pitfalls": "Agar `su` yoniga `-` belgisi qo'yilmasa, eski foydalanuvchining `$PATH` va `$HOME` o'zgaruvchilari qolib ketadi va ko'plab boshqaruv buyruqlari (masalan, `fdisk`, `reboot`) 'command not found' xatosini beradi!"
  },
  {
    "cmd": "sudo",
    "name": "SuperUser DO (Ma'muriy Imtiyoz Bilan Buyruq Bajarish)",
    "category": "Foydalanuvchilar & Xavfsizlik",
    "syntax": "sudo [BAYROQLAR] [BUYRUQ]",
    "syntaxRules": "Foydalanuvchi o'z parolini kiritadi (root parolini emas). /etc/sudoers faylida ruxsat berilgan bo'lishi shart.",
    "desc": "Oddiy foydalanuvchiga xavfsiz va nazorat qilinadigan holda Root (superuser) huquqlari bilan tizim buyruqlarini bajarish imkonini beradi. Har bir harakat `/var/log/auth.log` da qat'iy qayd etib boriladi.",
    "flags": [
      {
        "flag": "-i",
        "desc": "Root login muhitiga o'tish (Interactive root shell)."
      },
      {
        "flag": "-u [FOYDALANUVCHI]",
        "desc": "Root o'rniga boshqa muayyan foydalanuvchi nomidan bajarish (masalan, sudo -u www-data)."
      },
      {
        "flag": "-k",
        "desc": "Vaqtinchalik eslab qolingan parolni bekor qilish (Key reset - darhol parolni unutadi)."
      },
      {
        "flag": "-l",
        "desc": "Ushbu foydalanuvchiga qaysi buyruqlarga ruxsat berilganligini ko'rish (List permissions)."
      }
    ],
    "combos": [
      {
        "combo": "sudo apt update && sudo apt upgrade -y",
        "title": "Tizim paketlarini yangilash",
        "desc": "Root darajasida barcha xavfsizlik yangilanishlarini o'rnatish."
      },
      {
        "combo": "sudo -i",
        "title": "Root terminalini ochish",
        "desc": "Xavfsiz usulda to'liq root boshqaruviga o'tish."
      },
      {
        "combo": "sudo -u www-data git pull",
        "title": "Veb-server foydalanuvchisi nomidan Git yangilanishini olish",
        "desc": "Fayl ruxsatlari buzilmasligi uchun juda muhim."
      }
    ],
    "underTheHood": "`/etc/sudoers` faylini va `/etc/sudoers.d/` katalogidagi qoidalarni tekshiradi. SUID root biti orqali jarayon UID=0 ga ko'tariladi, PAM orqali autentifikatsiya qilinadi va buyruq xavfsiz muhitda yuritiladi.",
    "example": "$ sudo apt install nginx\n[sudo] password for student: \nReading package lists... Done",
    "analogy": "Moliya direktorining imzosini vaqtincha olib, muhim hujjatni tasdiqlash.",
    "pitfalls": "Hech qachon `/etc/sudoers` faylini oddiy `nano` bilan tahrirlamang! Har doim `sudo visudo` buyrug'idan foydalaning, aks holda bitta sintaktik xato butun tizimda sudo huquqini abadiy bloklab qo'yishi mumkin."
  },
  {
    "cmd": "chmod",
    "name": "Change File Mode Bits (Fayl Ruxsat Huquqlarini O'zgartirish)",
    "category": "Fayl Huquqlari & Xavfsizlik",
    "syntax": "chmod [BAYROQLAR] [HUQUQ] [FAYL...]",
    "syntaxRules": "Sakkizlik raqamlar (755, 644) yoki simvolik kodlar (u+x, g-w, o=r) orqali beriladi.",
    "desc": "Linux fayl tizimidagi 3 ta toifa foydalanuvchi: Egasi (User), Guruhi (Group) va Boshqalar (Others) uchun O'qish (Read=4), Yozish (Write=2) va Bajarish (Execute=1) huquqlarini belgilaydi.",
    "flags": [
      {
        "flag": "-R",
        "desc": "Rekursiv — papka va uning ichidagi barcha fayllarga huquqlarni o'rnatadi."
      },
      {
        "flag": "-v",
        "desc": "Hisobot (Verbose) — qaysi fayllarning huquqlari o'zgarganini chiqaradi."
      },
      {
        "flag": "-c",
        "desc": "Faqat huquqi o'zgargan fayllarnigina ko'rsatish."
      }
    ],
    "combos": [
      {
        "combo": "chmod +x script.sh",
        "title": "Skriptga bajarish (Execute) huquqini berish",
        "desc": "Skriptni `./script.sh` ko'rinishida ishga tushirish imkoniyatini ochadi."
      },
      {
        "combo": "chmod 600 id_rsa",
        "title": "SSH maxfiy kalitlarini xavfsiz himoyalash",
        "desc": "Faqat egasiga o'qish/yozish beradi (rw-------), boshqalarga butunlay yopadi."
      },
      {
        "combo": "chmod 755 /var/www/html",
        "title": "Veb-sayt papkasi uchun standart xavfsiz huquq",
        "desc": "Egasi to'liq boshqaradi (rwx), boshqalar faqat o'qiydi va ko'radi (r-x)."
      },
      {
        "combo": "chmod -R 644 *.txt",
        "title": "Barcha matnli fayllarga xavfsiz o'qish huquqini o'rnatish",
        "desc": "Ortiqcha bajarish huquqlarini olib tashlaydi."
      }
    ],
    "underTheHood": "`chmod()` yoki `fchmodat()` tizim chaqiruvi Inodening `i_mode` maydonidagi 12 ta bitni yangilaydi (3 bit maxsus huquqlar: SUID, SGID, Sticky bit; 9 bit rwx huquqlari).",
    "example": "$ chmod 700 secret.sh\n$ ls -l secret.sh\n-rwx------ 1 student student 105 Oct 26 19:00 secret.sh",
    "analogy": "Xonaning eshigiga 3 xil qulf o'rnatish: birinchisi uy egasi uchun, ikkinchisi oila a'zolari uchun, uchinchisi mehmonlar uchun.",
    "pitfalls": "Ko'r-ko'rona `chmod -R 777` ishlatish — Linux xavfsizligidagi eng katta jinoyat! Bu har qanday foydalanuvchi yoki virusga fayllarni o'zgartirish va o'chirish imkonini beradi."
  },
  {
    "cmd": "chown",
    "name": "Change File Owner and Group (Fayl Egasi va Guruhini O'zgartirish)",
    "category": "Fayl Huquqlari & Xavfsizlik",
    "syntax": "chown [BAYROQLAR] [EGA]:[GURUH] [FAYL...]",
    "syntaxRules": "Ega va guruh ikki nuqta ':' orqali ajratiladi. Faqat root bajara oladi.",
    "desc": "Fayl yoki katalogning egasi bo'lgan foydalanuvchini va uning tegishli guruhini o'zgartiradi. Web-serverlar, ma'lumotlar bazalari va xizmatlarni sozlashda eng ko'p ishlatiladigan buyruq.",
    "flags": [
      {
        "flag": "-R",
        "desc": "Rekursiv o'zgartirish — katalog ichidagi barcha fayllar va ichki papkalar egasini ham almashtiradi."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (Verbose)."
      },
      {
        "flag": "--reference [NAMUNA]",
        "desc": "Boshqa faylning egasidan ko'chirib olish."
      }
    ],
    "combos": [
      {
        "combo": "sudo chown -R www-data:www-data /var/www/html",
        "title": "Sayt fayllarini Nginx/Apache ga topshirish",
        "desc": "Veb-server sayt fayllarini to'liq o'qishi va boshqarishi uchun majburiy amal."
      },
      {
        "combo": "sudo chown student:student data.csv",
        "title": "Faylni oddiy talabaga qaytarib berish",
        "desc": "Root tomonidan yaratilgan fayl egaligini studentga o'tkazish."
      },
      {
        "combo": "sudo chown :developers project/",
        "title": "Faqat guruhni o'zgartirish",
        "desc": "Fayl egasini saqlagan holda guruhini almashtiradi."
      }
    ],
    "underTheHood": "`chown()` yoki `fchownat()` tizim chaqiruvini bajaradi. Linux Inodesidagi `i_uid` va `i_gid` qiymatlari yangi raqamlarga almashtiriladi. Xavfsizlik nuqtai nazaridan fayl egasi o'zgarganda SUID va SGID bitlari avtomatik o'chiriladi.",
    "example": "$ ls -l app.py\n-rw-r--r-- 1 root root 204 Oct 26 19:10 app.py\n$ sudo chown student:student app.py\n$ ls -l app.py\n-rw-r--r-- 1 student student 204 Oct 26 19:10 app.py",
    "analogy": "Mulkning kadastr hujjatini notariusda yangi egasining nomiga rasmiylashtirish.",
    "pitfalls": "Oddiy foydalanuvchilar o'z faylini boshqa odamga 'hadya qila' (chown qila) olmaydi. Linux xavfsizlik qoidalariga ko'ra, buni faqat root amalga oshira oladi."
  },
  {
    "cmd": "chgrp",
    "name": "Change Group Ownership (Fayl Guruhini O'zgartirish)",
    "category": "Fayl Huquqlari & Xavfsizlik",
    "syntax": "chgrp [BAYROQLAR] [GURUH] [FAYL...]",
    "syntaxRules": "Faqat guruhni o'zgartirish uchun qulay qisqartma.",
    "desc": "Fayl yoki papkaning tegishli bo'lgan guruhini almashtiradi.",
    "flags": [
      {
        "flag": "-R",
        "desc": "Rekursiv almashtirish."
      },
      {
        "flag": "-v",
        "desc": "Hisobot bilan chiqarish."
      }
    ],
    "combos": [
      {
        "combo": "chgrp developers script.py",
        "title": "Faylni dasturchilar guruhiga berish",
        "desc": "Fayl guruhini 'developers' ga aylantiradi."
      },
      {
        "combo": "chgrp -R docker /opt/containers",
        "title": "Konteynerlar papkasini docker guruhiga ulash",
        "desc": "Barcha ichki fayllar guruhini o'zgartiradi."
      }
    ],
    "underTheHood": "`chown(-1, new_gid)` chaqiruvining qulay qobig'i.",
    "example": "$ chgrp -v sudo test.sh\nchanged group of 'test.sh' to sudo",
    "analogy": "Hujjatni boshqa bo'lim arxividan yangi bo'limga o'tkazish.",
    "pitfalls": "Oddiy foydalanuvchi faqat o'zi a'zo bo'lgan guruhlarnigina tanlay oladi."
  },
  {
    "cmd": "umask",
    "name": "Set File Mode Creation Mask (Standart Yangi Fayl Ruxsat Maskasi)",
    "category": "Fayl Huquqlari & Xavfsizlik",
    "syntax": "umask [MASKA]",
    "syntaxRules": "Parametrsiz joriy maskani ko'rsatadi. Raqamlar olib tashlanadigan huquqlarni bildiradi.",
    "desc": "Tizimda yangi yaratiladigan har qanday fayl yoki katalogga qanday standart ruxsatlar berilishini belgilovchi filtr maskasi. Yangi fayllarning boshlang'ich 666 va papkalarning 777 huquqidan umask qiymati ayirib tashlanadi.",
    "flags": [
      {
        "flag": "-S",
        "desc": "Maskani ramziy formatda ko'rish (masalan u=rwx,g=rx,o=rx)."
      },
      {
        "flag": "-p",
        "desc": "Qayta yuklash uchun qulay formatda chiqarish."
      }
    ],
    "combos": [
      {
        "combo": "umask",
        "title": "Joriy maskani ko'rish",
        "desc": "Standart holatda odatda 0022 yoki 0002 ko'rinishida bo'ladi."
      },
      {
        "combo": "umask 0077",
        "title": "O'ta yuqori xavfsizlik maskasini o'rnatish",
        "desc": "Yangi yaratilgan har qanday faylni faqat uning egasigina ko'ra oladigan qiladi (fayllar 600, papkalar 700 bo'lib yaratiladi)."
      },
      {
        "combo": "umask 0022",
        "title": "Standart xavfsizlikka qaytish",
        "desc": "Fayllar 644, papkalar 755 bo'lib yaratiladi."
      }
    ],
    "underTheHood": "`umask()` tizim chaqiruvini bajaradi. Yadro darajasida yangi ochilgan fayl huquqi `mode & ~umask` formulasi bo'yicha hisoblanadi.",
    "example": "$ umask\n0022\n$ touch newfile.txt && ls -l newfile.txt\n-rw-r--r-- 1 student student 0 Oct 26 19:15 newfile.txt\n# 666 - 022 = 644 bo'ldi!",
    "analogy": "Fotografiya filtri: u o'zidan faqat ruxsat etilgan nurlarni o'tkazib, ortiqcha nurlarni (huquqlarni) to'sib qoladi.",
    "pitfalls": "Umask huquq qo'shmaydi, u huquqni olib tashlaydi! Shuning uchun 0777 umask qo'yilsa, yaratilgan barcha yangi fayllar 0000 (hech kim o'qiy olmaydigan) bo'lib qoladi."
  },
  {
    "cmd": "grep",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish va Filtrlash)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "grep [BAYROQLAR] 'NAMUNA' [FAYL...]",
    "syntaxRules": "Muntazam ifodalar (RegEx) orqali matnlar va loglar ichidan aniq qatorlarni topib beradi.",
    "desc": "Linuxdagi eng mashhur va muhim ma'lumot izlash quroli. Gigabaytlab matnlar, konfiguratsiyalar va server loglari ichidan sizga kerakli bo'lgan so'z yoki qolipga mos keluvchi satrlarni soniyaning ulushlarida topadi.",
    "flags": [
      {
        "flag": "-i",
        "desc": "Registrni e'tiborsiz qoldirish (Ignore case) — 'error' va 'ERROR' ni bir xil deb biladi."
      },
      {
        "flag": "-r / -R",
        "desc": "Rekursiv qidirish — butun katalogdagi barcha fayllar ichidan qidiradi."
      },
      {
        "flag": "-n",
        "desc": "Qator raqamini ko'rsatish (Line number) — topilgan satr nechanchi qatorda ekanligini yozadi."
      },
      {
        "flag": "-v",
        "desc": "Teskari filtrlash (Invert match) — mos kelmagan satrlarni chiqaradi (keraksiz narsalarni olib tashlash)."
      },
      {
        "flag": "-c",
        "desc": "Faqat mos kelgan satrlar sonini chiqarish (Count)."
      },
      {
        "flag": "-E",
        "desc": "Kengaytirilgan RegEx larni ishlatish (Extended RegEx - egrep)."
      },
      {
        "flag": "-w",
        "desc": "Faqat to'liq so'zni qidirish (Word match)."
      }
    ],
    "combos": [
      {
        "combo": "grep -rni 'DB_PASSWORD' /var/www/",
        "title": "Kod ichidan ma'lumotlar bazasi parolini topish",
        "desc": "Barcha fayllarni aylanib, qaysi faylning qaysi qatorida parol borligini ko'rsatadi."
      },
      {
        "combo": "grep -i 'error' /var/log/nginx/*.log",
        "title": "Nginx xatoliklarini aniqlash",
        "desc": "Katta-kichik harflarga qaramay barcha xato yozuvlarini chiqaradi."
      },
      {
        "combo": "grep -v '^#' /etc/nginx/nginx.conf | grep -v '^$'",
        "title": "Kommentlar va bo'sh qatorlarsiz toza konfiguratsiyani o'qish",
        "desc": "Faylning faqat real ishlaydigan kod qismini ajratib beradi."
      },
      {
        "combo": "grep -E '404|500' access.log",
        "title": "Bir vaqtning o'zida ham 404, ham 500 xatolarini topish",
        "desc": "RegEx OR (|) operatori bilan bir nechta holatni qidirish."
      }
    ],
    "underTheHood": "Boyer-Moore algoritmiga asoslangan yuqori tezlikdagi qidiruv mexanizmini ishlatadi. Faylni to'g'ridan-to'g'ri o'qiydi va shartga mos keluvchi satrlarni stdout ga uzatadi.",
    "example": "$ grep -n 'student' /etc/passwd\n28:student:x:1000:1000:Student,,,:/home/student:/bin/bash",
    "analogy": "Kitob sahifasidan kerakli so'zni sariq marker (highlighter) bilan bo'yab, faqat o'sha gaplarni o'qib berish.",
    "pitfalls": "RegEx belgilari (`$`, `*`, `[`, `]`) qidirilganda namunani doimo bir tirnoqqa (`'...'`) olish shart, aks holda Bash ularni o'zgaruvchi deb o'ylab xato qiladi."
  },
  {
    "cmd": "sed",
    "name": "Stream Editor (Oqimli Matn Tahrirlagichi & Qidirib Almashtirish)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "sed [BAYROQLAR] 'BUYRUQ' [FAYL]",
    "syntaxRules": "Eng mashhur buyrug'i: 's/eski/yangi/g' (substitute global). Faylni ochmasdan turib matnni o'zgartiradi.",
    "desc": "Fayllarni vizual muharrirsiz, to'g'ridan-to'g'ri buyruqlar satridan turib avtomatik tahrirlash quroli. So'zlarni ommaviy almashtirish, satrlarni o'chirish va konfiguratsiyalarni skript orqali sozlashda beqiyos.",
    "flags": [
      {
        "flag": "-i",
        "desc": "Faylni to'g'ridan-to'g'ri o'zida saqlab o'zgartirish (In-place edit) — o'ta muhim bayroq!"
      },
      {
        "flag": "-n",
        "desc": "Standart chiqarishni to'xtatish (Suppress printing) — faqat 'p' buyrug'i berilgan satrlarni chiqaradi."
      },
      {
        "flag": "-e",
        "desc": "Bir nechta sed buyruqlarini ketma-ket bajarish."
      }
    ],
    "combos": [
      {
        "combo": "sed -i 's/80/8080/g' config.conf",
        "title": "Fayl ichidagi port raqamini almashtirish",
        "desc": "Fayldagi barcha 80 larni 8080 ga avtomatik o'zgartirib faylni saqlaydi."
      },
      {
        "combo": "sed -i.bak 's/localhost/127.0.0.1/g' app.env",
        "title": "Zaxira nusxa bilan xavfsiz almashtirish",
        "desc": "Eski faylni app.env.bak qilib saqlab, yangisini o'zgartiradi."
      },
      {
        "combo": "sed -n '10,20p' large.txt",
        "title": "Faqat 10-qatordan 20-qatorgacha bo'lgan oraliqni o'qish",
        "desc": "Aniq satrlar oralig'ini ajratib oladi."
      },
      {
        "combo": "sed -i '/^#/d' config.ini",
        "title": "Barcha izoh (komment) qatorlarini o'chirib tashlash",
        "desc": "Faylni ortiqcha izohlardan tozalaydi."
      }
    ],
    "underTheHood": "Faylni qatorma-qator o'zining Pattern Space xotirasiga o'qiydi, kiritilgan buyruqni qo'llaydi va natijani ekranga yoki `-i` bo'lsa yangi vaqtinchalik faylga yozib, so'ng `rename()` bilan almashtiradi.",
    "example": "$ echo 'Salom Dunyo' | sed 's/Dunyo/Linux/'\nSalom Linux",
    "analogy": "Word dasturidagi 'Qidirish va Almashtirish' (Find & Replace) tugmasi, faqat 1000 ta fayl ustida 1 soniyada ishlaydi.",
    "pitfalls": "Agar `-i` bayrog'i ehtiyotsizlik bilan ishlatilsa va almashtirish xato bo'lsa, asl fayl ma'lumotlari buziladi. Doimo oldin `-i` siz tekshirib ko'rish yoki `sed -i.bak` ishlatish tavsiya etiladi."
  },
  {
    "cmd": "awk",
    "name": "Pattern Scanning and Processing Language (Matn va Ustunlarni Qayta Ishlash Dasturi)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "awk [BAYROQLAR] 'SHART { HARAKAT }' [FAYL]",
    "syntaxRules": "$1, $2, $3 ustunlarni, $0 butun qatorni, NF ustunlar sonini, NR esa qator raqamini bildiradi.",
    "desc": "Matnli jadvallar, CSV fayllar va loglarni ustunma-ustun tahlil qilish va hisob-kitoblar bajarish uchun mo'ljallangan to'liq dasturlash tili. Ma'lumotlarni saralash va hisobotlar tuzishda eng kuchli vositadir.",
    "flags": [
      {
        "flag": "-F [AJRATUVCHI]",
        "desc": "Ustunlar ajratuvchisini belgilash (masalan, -F':' yoki -F',')."
      },
      {
        "flag": "-v [VAR=VAL]",
        "desc": "Awk skriptiga tashqi o'zgaruvchi uzatish."
      }
    ],
    "combos": [
      {
        "combo": "awk -F':' '{print $1, $7}' /etc/passwd",
        "title": "Barcha foydalanuvchilar va ularning qobiqlarini chiqarish",
        "desc": "1-ustun (login) va 7-ustun (shell) ni yonma-yon jadval qilib chiqaradi."
      },
      {
        "combo": "df -h | awk '$5 > \"80%\" {print $1, $5}'",
        "title": "80% dan ortiq to'lgan disklarni aniqlash",
        "desc": "To'lib qolgan disk partitsiyalarini avtomatik xabar beradi."
      },
      {
        "combo": "awk '{sum += $1} END {print \"Jami:\", sum}' numbers.txt",
        "title": "Ustundagi barcha sonlar yig'indisini hisoblash",
        "desc": "Kalkulyator kabi butun ustunni qo'shib umumiy summani chiqaradi."
      }
    ],
    "underTheHood": "Aho, Weinberger va Kernighan tomonidan yaratilgan. Satrlarni Record Separator (`RS`) bo'yicha bo'lib, har bir maydonni Field Separator (`FS`) orqali o'zgaruvchilarga yuklaydi va ichki C virtual mashinasida bajaradi.",
    "example": "$ ps aux | grep nginx | awk '{print $2}'\n# Barcha Nginx jarayonlarining PID raqamlarini chiqarib beradi",
    "analogy": "Excel jadvalida faqat 'Ism' va 'Maosh' ustunlarini qoldirib, qolganlarini yashirish va pastiga umumiy yig'indini (SUM) yozish.",
    "pitfalls": "Ustunlar orasida bo'sh joylar soni turlicha bo'lsa, oddiy kesuvchi dasturlar adashadi, ammo `awk` bo'shliqlarni avtomatik to'g'ri tushunadi."
  },
  {
    "cmd": "cut",
    "name": "Remove Sections from Each Line of Files (Matndan Kerakli Ustunlarni Kesib Olish)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "cut [BAYROQLAR] [FAYL...]",
    "syntaxRules": "'-d' ajratuvchi belgi, '-f' esa kerakli ustun raqamini belgilaydi.",
    "desc": "Jadvalli matnlardan aniq ustunlarni (fields) yoki baytlar oraliqlarini tezkor kesib olish vositasi. `awk` ga qaraganda soddaroq va yengilroq ishlaydi.",
    "flags": [
      {
        "flag": "-d [BELGI]",
        "desc": "Ajratuvchi belgi (Delimiter) — masalan, -d':' yoki -d','."
      },
      {
        "flag": "-f [USTUNLAR]",
        "desc": "Qaysi ustunlarni olish (Fields) — masalan, -f 1 yoki -f 1,3 yoki -f 2-5."
      },
      {
        "flag": "-c [BELGILAR]",
        "desc": "Ustunlar emas, aynan nechanchi belgidan nechanchigacha kesish (Characters)."
      }
    ],
    "combos": [
      {
        "combo": "cut -d':' -f1 /etc/passwd",
        "title": "Faqat foydalanuvchilar loginlarini ajratib olish",
        "desc": "Fayldagi barcha nomlarni bitta toza ustun qilib beradi."
      },
      {
        "combo": "ip addr show eth0 | grep 'inet ' | cut -d' ' -f6",
        "title": "Serverning IP manzilini ajratish",
        "desc": "Tarmoq sozlamalaridan faqat IP/maskani kesib oladi."
      }
    ],
    "underTheHood": "Faylni baytma-bayt skanerlaydi, ajratuvchi belgi kelganda hisoblagichni oshiradi va belgilangan ustunlardagi ma'lumotlarni stdout ga chiqaradi.",
    "example": "$ echo 'Toshkent,Uzbekistan,2026' | cut -d',' -f1,2\nToshkent,Uzbekistan",
    "analogy": "Jadvaldan qaychi bilan faqat kerakli bitta ustunni kesib olish.",
    "pitfalls": "Standart ajratuvchi 'Tab' belgisi hisoblanadi. Agar faylingiz bo'sh joylar (probel) bilan ajratilgan bo'lsa, `cut` bir nechta probellarni bitta deb tushunolmaydi (bunday paytda `awk` ishlatish kerak)."
  },
  {
    "cmd": "sort",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Saralash)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "sort [BAYROQLAR] [FAYL...]",
    "syntaxRules": "Standart holatda alifbo bo'yicha (A-Z) saralaydi. Raqamlarni to'g'ri saralash uchun '-n' bayrog'i shart.",
    "desc": "Matnli fayl qatorlarini alifbo, raqamlar kattaligi yoki o'lchov birliklari bo'yicha tartibga soladi.",
    "flags": [
      {
        "flag": "-n",
        "desc": "Raqamli saralash (Numerical sort) — 2, 10, 100 ni to'g'ri tartibda qo'yadi (alifboda 100 2 dan oldin kelib qoladi)."
      },
      {
        "flag": "-r",
        "desc": "Teskari saralash (Reverse) — kattasidan kichigiga (Z-A)."
      },
      {
        "flag": "-u",
        "desc": "Takrorlangan qatorlarni olib tashlash (Unique)."
      },
      {
        "flag": "-k [USTUN]",
        "desc": "Aniq nechanchi ustun bo'yicha saralash."
      },
      {
        "flag": "-h",
        "desc": "Inson tushunadigan hajm birliklari (2K, 5M, 1G) bo'yicha saralash."
      }
    ],
    "combos": [
      {
        "combo": "sort -n scores.txt",
        "title": "Ballarni o'sish tartibida saralash",
        "desc": "Raqamlar qiymati bo'yicha kichigidan kattasiga tizadi."
      },
      {
        "combo": "du -h --max-depth=1 /var | sort -hr",
        "title": "Eng ko'p joy olgan papkalarni tepada ko'rish",
        "desc": "Hajm bo'yicha kamayish tartibida saralaydi."
      },
      {
        "combo": "cat emails.txt | sort -u",
        "title": "Pochta manzillarini saralab dublikatlarni tozalash",
        "desc": "Har bir emaildan faqat 1 tadan qoldiradi."
      }
    ],
    "underTheHood": "Xotira yetarli bo'lsa tezkor saralash (QuickSort), agar fayl xotiradan katta bo'lsa tashqi ko'p bosqichli birlashtirish (External Merge Sort) algoritmini ishlatadi.",
    "example": "$ cat nums.txt\n10\n2\n1\n$ sort -n nums.txt\n1\n2\n10",
    "analogy": "Kutubxonadagi kitoblarni alifbo yoki yozilgan yili bo'yicha javonga chiroyli qilib terib chiqish.",
    "pitfalls": "Raqamlarni saralashda `-n` qo'yilmasa: 1, 10, 100, 2, 20 kabi alifbo bo'yicha noto'g'ri saralash hosil bo'ladi."
  },
  {
    "cmd": "uniq",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash va Sanash)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "uniq [BAYROQLAR] [KIRISH [CHIQISH]]",
    "syntaxRules": "DIQQAT: `uniq` faqat KETMA-KET kelgan takroriy qatorlarni taniydi! Shuning uchun undan oldin 'sort' ishlatilishi shart.",
    "desc": "Matndagi bir xil takrorlanib kelayotgan satrlarni o'chirib faqat bittasini qoldiradi yoki ularning necha marta takrorlanganini sanab beradi.",
    "flags": [
      {
        "flag": "-c",
        "desc": "Har bir qator necha marta takrorlanganini sanash (Count) — eng mashhur bayroq!"
      },
      {
        "flag": "-d",
        "desc": "Faqat takrorlangan qatorlarnigina chiqarish (Duplicates)."
      },
      {
        "flag": "-u",
        "desc": "Faqat bir marta uchragan (takrorlanmagan) noyob qatorlarni chiqarish."
      },
      {
        "flag": "-i",
        "desc": "Katta-kichik harflarni bir xil deb hisoblash."
      }
    ],
    "combos": [
      {
        "combo": "sort access.log | cut -d' ' -f1 | sort | uniq -c | sort -nr | head -n 10",
        "title": "Saytga eng ko'p kirgan Top-10 IP manzillarni aniqlash",
        "desc": "DDoS hujumchilarni topishning oltin klassik formulasi!"
      },
      {
        "combo": "sort users.txt | uniq -d",
        "title": "Faqat qayta-qayta yozilgan dublikat nomlarni ko'rish",
        "desc": "Qaysi foydalanuvchilar ikki marta ro'yxatdan o'tganini aniqlaydi."
      }
    ],
    "underTheHood": "Oldingi o'qilgan qatorni buferda ushlab turadi va yangi kelgan qator bilan `strcmp()` orqali solishtiradi. Agar bir xil bo'lsa hisoblagichni oshiradi.",
    "example": "$ cat fruit.txt | sort | uniq -c\n      3 olma\n      1 anor\n      2 nok",
    "analogy": "Saylov qutisidagi byulletenlarni sanash: har bir nomzodga nechtadan ovoz berilganini hisoblash.",
    "pitfalls": "Agar `sort` qilmasdan `uniq` ishlatilsa, u har xil joyda joylashgan bir xil so'zlarni o'chirmaydi!"
  },
  {
    "cmd": "tr",
    "name": "Translate or Delete Characters (Belgilarni Almashtirish va O'chirish)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "tr [BAYROQLAR] 'SET1' ['SET2']",
    "syntaxRules": "Faqat standart kirishdan (stdin/pipe) ma'lumot qabul qiladi.",
    "desc": "Oqim ichidagi muayyan belgilarni boshqa belgilarga almashtirish (masalan kichik harflarni kattaga) yoki keraksiz belgilarni o'chirib tashlash vositasi.",
    "flags": [
      {
        "flag": "-d",
        "desc": "Belgilangan belgilarni butunlay o'chirib tashlash (Delete)."
      },
      {
        "flag": "-s",
        "desc": "Ketma-ket takrorlangan bir xil belgilarni bitta qilib siqish (Squeeze)."
      }
    ],
    "combos": [
      {
        "combo": "cat text.txt | tr 'a-z' 'A-Z'",
        "title": "Barcha harflarni bosh harfga (UPPERCASE) o'tkazish",
        "desc": "Matnni to'liq katta harflar bilan chiqaradi."
      },
      {
        "combo": "cat windows.txt | tr -d '\\r' > unix.txt",
        "title": "Windows formatidagi fayllarni Linux formatiga o'tkazish (CRLF -> LF)",
        "desc": "\\r belgilarini olib tashlab skriptlarni xatosiz ishlaydigan qiladi."
      },
      {
        "combo": "echo 'Bu   juda    uzoq' | tr -s ' '",
        "title": "Ortiqcha ko'p probellarni bittaga tushirish",
        "desc": "Matnni toza ko'rinishga keltiradi."
      }
    ],
    "underTheHood": "256 ta baytdan iborat qidiruv jadvalini (lookup table) xotirada yaratadi. Har bir kelgan bayt zudlik bilan jadvaldagi mos baytga almashtiriladi (O(1) tezlikda).",
    "example": "$ echo 'hello world' | tr ' ' '_'\nhello_world",
    "analogy": "Matndagi barcha nuqtalarni vergulga yoki barcha kichik harflarni bosh harfga almashtiruvchi avtomat mashinka.",
    "pitfalls": "`tr` buyrug'iga to'g'ridan-to'g'ri fayl nomi berilmaydi (`tr a b fayl.txt` xato!). Unga quvur orqali uzatish shart: `cat fayl.txt | tr a b`."
  },
  {
    "cmd": "tar",
    "name": "Tape Archive (Fayllarni Arxivlash va Qayta Ochish)",
    "category": "Arxivlash & Fayl Boshqaruvi",
    "syntax": "tar [BAYROQLAR] [ARXIV_NOMI] [FAYLLAR...]",
    "syntaxRules": "Eng muhim 4 ta asosiy rejim: -c (yaratish), -x (ochish), -t (ko'rish), -v (hisobot).",
    "desc": "Yuzlab fayllar va papkalarni barcha huquqlari, egalari va katalog tuzilishi bilan bitta `.tar` (yoki siqilgan `.tar.gz`, `.tar.bz2`) arxiv fayliga jamlaydi yoki ochadi.",
    "flags": [
      {
        "flag": "-c",
        "desc": "Yangi arxiv yaratish (Create)."
      },
      {
        "flag": "-x",
        "desc": "Arxiv ichidagilarni diskka ochish (Extract)."
      },
      {
        "flag": "-z",
        "desc": "Gzip algoritmi bilan siqish yoki ochish (.tar.gz / .tgz)."
      },
      {
        "flag": "-j",
        "desc": "Bzip2 algoritmi bilan yanada kuchliroq siqish (.tar.bz2)."
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (Verbose) — qaysi fayllar arxivlanayotganini ko'rsatish."
      },
      {
        "flag": "-f",
        "desc": "Arxiv faylining nomini ko'rsatish (File) — har doim bayroqlar oxirida turishi shart!"
      },
      {
        "flag": "-C [MANZIL]",
        "desc": "Arxivni aniq ko'rsatilgan boshqa papkaga ochish."
      }
    ],
    "combos": [
      {
        "combo": "tar -czvf backup.tar.gz /var/www/my_project",
        "title": "Butun loyihani siqilgan arxivga olish (Standart)",
        "desc": "c=yaratish, z=gzip siqish, v=ko'rsatish, f=fayl nomi."
      },
      {
        "combo": "tar -xzvf archive.tar.gz -C /opt/",
        "title": "Arxivni boshqa papkaga ochish",
        "desc": "Arxivni to'g'ridan-to'g'ri /opt katalogiga chiqarib beradi."
      },
      {
        "combo": "tar -tzvf backup.tar.gz",
        "title": "Arxivni ochmasdan ichidagi fayllar ro'yxatini ko'rish",
        "desc": "Katta arxivni ochmasdan ichida nimalar borligini tekshirish."
      }
    ],
    "underTheHood": "Har bir fayl uchun 512 baytlik UStar header blokini (nom, ruxsatlar, UID, hajm, cheksum) yaratadi va ketidan fayl ma'lumot bloklarini ulaydi. `-z` qo'shilganda yadro zlib/gzip quvuri orqali ma'lumotni o'tkazadi.",
    "example": "$ tar -czvf site.tar.gz html/\nhtml/\nhtml/index.html\nhtml/style.css\n# site.tar.gz tayyor!",
    "analogy": "Sayohatchining chemodani. Barcha kiyimlarni (fayllarni) g'ijimlamasdan bitta sumkaga joylash va ustidan vakuum bilan siqish.",
    "pitfalls": "`-f` bayrog'i har doim harflar ketma-ketligining eng oxirida turishi shart! Agar `tar -czf v archive.tar.gz` deb yozilsa, arxiv nomi 'v' bo'lib qoladi."
  },
  {
    "cmd": "df",
    "name": "Disk Free (Disk Bo'limlaridagi Bo'sh Joyni Ko'rish)",
    "category": "Tizim & Disk Xotirasi",
    "syntax": "df [BAYROQLAR] [MANZIL]",
    "syntaxRules": "Inson tushunadigan o'lchamlarda (GB, MB) ko'rish uchun '-h' bayrog'i beriladi.",
    "desc": "Barcha ulangan disk qismlari (HDD, SSD, NVMe, USB), ularning umumiy sig'imi, ishlatilgan qismi, bo'sh joyi va qaysi papkaga ulanganini (Mount point) ko'rsatadi.",
    "flags": [
      {
        "flag": "-h",
        "desc": "Inson tushunadigan format (Human-readable - GB, MB)."
      },
      {
        "flag": "-T",
        "desc": "Fayl tizimi turini ko'rsatish (ext4, xfs, btrfs, vfat)."
      },
      {
        "flag": "-i",
        "desc": "Bo'sh Inodelar sonini ko'rsatish (Inodes)."
      },
      {
        "flag": "-x [TUR]",
        "desc": "Muayyan vaqtinchalik tizimlarni (masalan tmpfs, squashfs) yashirish."
      }
    ],
    "combos": [
      {
        "combo": "df -hT",
        "title": "Barcha disklarni turi va bo'sh joyi bilan ko'rish",
        "desc": "Server administratori har kuni birinchi bo'lib teradigan komanda."
      },
      {
        "combo": "df -ih",
        "title": "Inodelar bo'sh joyini tekshirish",
        "desc": "Diskda joy bo'lsa ham 'No space left on device' xatosi chiqsa, Inodelar to'lib qolganini shu ko'rsatadi!"
      }
    ],
    "underTheHood": "`statvfs()` tizim chaqiruvini bajaradi. Superblokdan bloklar va inodelar statistikasini o'qiydi.",
    "example": "$ df -h /dev/sda1\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   12G   36G  25% /",
    "analogy": "Avtomobilning yonilg'i baki ko'rsatkichi: qancha benzin bor va qanchasi sarflanganini bildiradi.",
    "pitfalls": "Diskda gigabaytlab joy bo'lishi mumkin, lekin agar millionlab mayda 0-baytlik fayllar yaratilsa, Inodelar 100% to'lib qoladi va tizim ishlamay qoladi. Buni `df -i` bilan aniqlash lozim."
  },
  {
    "cmd": "du",
    "name": "Disk Usage (Fayllar va Papkalar Qancha Joy Olayotganini Hisoblash)",
    "category": "Tizim & Disk Xotirasi",
    "syntax": "du [BAYROQLAR] [KATALOG...]",
    "syntaxRules": "Butun papkani umumiy bitta hajmda ko'rish uchun '-s' bayrog'i kerak.",
    "desc": "Aynan qaysi papka yoki fayl diskda qancha joy egallab turganini hisoblab beradi. Disk to'lib qolganda katta hajmli keraksiz fayllarni topishda asosiy quroldir.",
    "flags": [
      {
        "flag": "-s",
        "desc": "Umumiy yig'indini chiqarish (Summary) — ichki fayllarni sanamay umumiy hajmini beradi."
      },
      {
        "flag": "-h",
        "desc": "Inson tushunadigan format (K, M, G)."
      },
      {
        "flag": "-d [CHUQURLIK] / --max-depth",
        "desc": "Hisoblash chuqurligini cheklash."
      },
      {
        "flag": "-a",
        "desc": "Faqat papkalar emas, barcha individual fayllarni ham chiqarish."
      }
    ],
    "combos": [
      {
        "combo": "du -sh /var/log",
        "title": "Papkaning umumiy hajmini ko'rish",
        "desc": "Masalan: 2.4G /var/log"
      },
      {
        "combo": "du -h --max-depth=1 / | sort -hr | head -n 10",
        "title": "Root katalogidagi eng og'ir 10 ta papkani topish",
        "desc": "Serverda qaysi papka to'lib ketganini bir zumda aniqlash formulasidir."
      },
      {
        "combo": "du -ah . | sort -rh | head -n 5",
        "title": "Joriy papkadagi eng katta 5 ta faylni topish",
        "desc": "Katta loglar yoki arxivlarni topib beradi."
      }
    ],
    "underTheHood": "Katalog daraxtini rekursiv aylanib chiqadi, har bir fayl uchun `lstat()` chaqirib uning `st_blocks * 512` disk bloklarini qo'shib hisoblaydi.",
    "example": "$ du -sh /home/student\n4.2G    /home/student",
    "analogy": "Yukni taroziga qo'yib tortish.",
    "pitfalls": "`df` bilan `du` farqi: `df` butun disk bo'limini ko'rsatadi, `du` esa ko'rsatilgan aniq bitta papka yoki faylni hisoblaydi."
  },
  {
    "cmd": "nano",
    "name": "Nano Text Editor (Yangi Boshlovchilar Uchun Qulay Matn Muharriri)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "nano [BAYROQLAR] [FAYL]",
    "syntaxRules": "Pastida eng asosiy tugmalar yozilgan: Ctrl+O (saqlash), Ctrl+X (chiqish).",
    "desc": "Linux terminalidagi eng sodda, qulay va tushunarli matn muharriri. Konfiguratsiya fayllarini tezda ochib tuzatish uchun ideal.",
    "flags": [
      {
        "flag": "-m",
        "desc": "Sichqonchani qo'llab-quvvatlash (Mouse support) — kursorni sichqoncha bilan bosib siljitish."
      },
      {
        "flag": "-l",
        "desc": "Qator raqamlarini yonida ko'rsatish (Line numbers)."
      }
    ],
    "combos": [
      {
        "combo": "nano -l config.py",
        "title": "Qator raqamlari bilan kodni ochish",
        "desc": "Xato bergan qatorni tezda topib tuzatish."
      },
      {
        "combo": "sudo nano /etc/hosts",
        "title": "Tizim konfiguratsiyasini xavfsiz tahrirlash",
        "desc": "DNS va mahalliy xostlarni qo'lda kiritish."
      }
    ],
    "underTheHood": "Terminalni Raw rejimiga o'tkazib, har bir klaviatura bosilishini `read()` orqali ushlaydi va ekranni `ncurses` orqali to'liq boshqaradi.",
    "example": "$ nano app.py\n# Ctrl+O (Enter) - Saqlash\n# Ctrl+X - Chiqish",
    "analogy": "Oddiy daftar va ruchka. Hech qanday murakkab buyruqlarsiz shunchaki yozasiz.",
    "pitfalls": "Tugmalar ro'yxatidagi `^` belgisi 'Ctrl' tugmasini bildiradi (masalan `^X` = `Ctrl + X`)."
  },
  {
    "cmd": "vim",
    "name": "Vi IMproved (Professional Dasturchilar Matn Muharriri)",
    "category": "Matnni Ko'rish & Qayta Ishlash",
    "syntax": "vim [FAYL]",
    "syntaxRules": "Rejimlar: Normal (harakatlanish), Insert ('i' yozish), Command (':' buyruqlar). Saqlash va chiqish: ':wq', chiqish: ':q!'.",
    "desc": "Dunyo bo'ylab DevOps va Linux muhandislarining eng nufuzli matn muharriri. Klaviaturadan qo'lni uzmasdan soniyalar ichida minglab qator kodlarni tahrirlash imkonini beradi.",
    "flags": [
      {
        "flag": "-R",
        "desc": "Faqat o'qish rejimida ochish (Read-only)."
      },
      {
        "flag": "+[SON]",
        "desc": "Faylni to'g'ridan-to'g'ri ko'rsatilgan qatordan ochish."
      }
    ],
    "combos": [
      {
        "combo": "vim +50 server.py",
        "title": "To'g'ridan-to'g'ri 50-qatorga o'tish",
        "desc": "Xatolik ro'y bergan qatordan bir zumda ochish."
      },
      {
        "combo": ":%s/eski/yangi/g",
        "title": "Vim ichida butun fayldagi so'zlarni almashtirish",
        "desc": "Vim ning o'zida bir harakat bilan barcha so'zlarni yangilash."
      }
    ],
    "underTheHood": "O'zining kuchli VIM skript interpretatoriga ega bo'lib, xotirada Buffer, Window va Tab sahifalarini boshqaradi.",
    "example": "$ vim /etc/nginx/nginx.conf\n# 'i' bosing (Insert)\n# Matnni yozing\n# 'Esc' bosing\n# ':wq' yozib Enter bosing (Write and Quit)",
    "analogy": "Reaktiv samolyot shturvali: o'rganish biroz vaqt talab qiladi, lekin o'rgangach matnlar ustida tovush tezligida uchasiz.",
    "pitfalls": "Eng mashhur mem: 'Vim dan qanday chiqish mumkin?' Chiqish uchun: oldin `Esc` tugmasini bosing, so'ng `:q!` yozib Enter bosing!"
  }
];
