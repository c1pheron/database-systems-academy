// ============================================================================
// OPERATING SYSTEMS ACADEMY — COMPREHENSIVE LINUX DICTIONARY & ENCYCLOPEDIA
// 120+ Linux Buyruqlari, Tizim Chaqiriqlari (System Calls), Bash Skriptlash,
// Jarayonlar, Xotira, Docker va Inodelar bo'yicha to'liq o'zbekcha ensiklopediya!
// WIUT Operating Systems (5COSC041C) & Database Systems uchun to'liq moslangan.
// ============================================================================

(function () {
  "use strict";

  const root = typeof window !== "undefined" ? window : (typeof global !== "undefined" ? global : this);

  const OS_DICTIONARY_DATA = [
  {
    "cmd": "apt",
    "name": "Advanced Package Tool (Debian/Ubuntu/Kali Dasturlar Menejeri)",
    "cat": "system",
    "catName": "⚙️ Tizim & Boshqaruv",
    "desc": "Debian va Kali Linux tizimida internetdagi rasmiy repozitoriylardan yangi dastur va paketlarni avtomatik qidirish, yuklab olish, o'rnatish, yangilash va o'chirish vositasi.",
    "syntax": "sudo apt [HARAKAT] [PAKET_NOMI] [BAYROQLAR]",
    "syntaxRules": "Muhim: Paketlar ro'yxatini yangilash (update) va o'rnatilgan paketlarni yangilash (upgrade) ikki xil jarayon! Dastur o'rnatishdan oldin har doim 'apt update' qilinadi.",
    "flags": [
      {
        "flag": "update",
        "desc": "Internet omboridagi barcha paketlar ro'yxatini va yangi versiyalarini tekshirib ro'yxatni yangilash"
      },
      {
        "flag": "upgrade",
        "desc": "Tizimda o'rnatilgan barcha dasturlarni yangi versiyaga yangilash (upgrade)"
      },
      {
        "flag": "install",
        "desc": "Yangi paket yoki utilitani o'rnatish (e.g. sudo apt install vim)"
      },
      {
        "flag": "remove",
        "desc": "Dasturni o'chirish (lekin uning konfiguratsiya sozlamalari saqlanib qoladi)"
      },
      {
        "flag": "purge",
        "desc": "Dasturni barcha konfiguratsiya fayllari bilan birga butunlay yo'q qilish"
      },
      {
        "flag": "autoremove",
        "desc": "Boshqa kerak bo'lmagan, keshda qolgan qaramliklarni (unused dependencies) tozalash"
      },
      {
        "flag": "search",
        "desc": "Kerakli dastur nomi yoki tavsifi bo'yicha repozitoriydan qidirish (e.g. apt search htop)"
      },
      {
        "flag": "show",
        "desc": "Paket haqida to'liq texnik ma'lumot (versiya, hajm, tavsif) ko'rish"
      },
      {
        "flag": "-y",
        "desc": "O'rnatish paytidagi so'rovga avtomatik 'Yes' javobini berish"
      }
    ],
    "combinations": [
      {
        "cmd": "sudo apt update && sudo apt upgrade -y",
        "desc": "Butun tizim omborlari va o'rnatilgan dasturlarni bitta buyruqda to'liq yangilash"
      },
      {
        "cmd": "sudo apt install -y vim git curl build-essential",
        "desc": "Dasturchi uchun zarur bo'lgan asosiy paketlar to'plamini bir vaqtda o'rnatish"
      },
      {
        "cmd": "apt list --installed | grep -i nginx",
        "desc": "Tizimda Nginx o'rnatilgan yoki yo'qligini tekshirish"
      },
      {
        "cmd": "sudo apt purge apache2 && sudo apt autoremove -y",
        "desc": "Apache serverini barcha qoldiqlari bilan tizimdan toza chiqarib tashlash"
      }
    ],
    "example": "sudo apt update && sudo apt install -y htop tree",
    "analogy": "Google Play Store yoki Uzum Market kabi rasmiy internet do'koni — siz qidirgan dastur va unga bog'liq barcha yordamchi kutubxonalarni o'zi topib, serveringizga o'rnatib beradi."
  },
  {
    "cmd": "dpkg",
    "name": "Debian Package Manager (Quyi Darajali .deb Paket Menejeri)",
    "cat": "system",
    "catName": "⚙️ Tizim & Boshqaruv",
    "desc": "Debian va Kali Linux tizimida mahalliy diskda yuklangan .deb arxiv paketlarini o'rnatish, tekshirish va boshqaruvchi quyi tizim mexanizmi (apt aynan dpkg ustiga qurilgan).",
    "syntax": "sudo dpkg [BAYROQLAR] [FAYL.deb YOKI PAKET_NOMI]",
    "syntaxRules": "Eslatma: dpkg internetdan qaramliklarni avtomatik tortmaydi. Agar qaramlik yetishmasa 'sudo apt install -f' orqali yetishmayotgan qismlar tiklanadi.",
    "flags": [
      {
        "flag": "-i",
        "desc": "Mahalliy .deb faylini tizimga o'rnatish (Install)"
      },
      {
        "flag": "-r",
        "desc": "O'rnatilgan paketni o'chirish (Remove)"
      },
      {
        "flag": "-P",
        "desc": "Paketni barcha konfiguratsiya fayllari bilan tozalab o'chirish (Purge)"
      },
      {
        "flag": "-l",
        "desc": "Tizimga o'rnatilgan barcha paketlar ro'yxatini ko'rish (List)"
      },
      {
        "flag": "-s",
        "desc": "Ko'rsatilgan paketning o'rnatilganlik holati va versiyasini ko'rish (Status)"
      },
      {
        "flag": "-L",
        "desc": "Ushbu paket tizimning aynan qaysi papkalariga qanday fayllar yozganini ko'rish (List files)"
      },
      {
        "flag": "-c",
        "desc": "Paketni o'rnatmasdan oldin uning ichidagi fayllar tarkibini ko'rish"
      }
    ],
    "combinations": [
      {
        "cmd": "sudo dpkg -i discord.deb || sudo apt install -f -y",
        "desc": "Yuklab olingan deb faylni o'rnatish va agar qaramliklar yetishmasa avtomatik to'ldirish"
      },
      {
        "cmd": "dpkg -l | grep -E 'ssh|ssl'",
        "desc": "Tizimda o'rnatilgan SSH va SSL paketlari ro'yxatini tekshirish"
      },
      {
        "cmd": "dpkg -L nginx | grep bin",
        "desc": "Nginx ning asosiy ishga tushuvchi binar fayli qayerga joylashganini topish"
      }
    ],
    "example": "dpkg -l | grep bash",
    "analogy": "Windows'dagi Setup.exe yoki MSI installer — internetdan mustaqil ravishda, qo'lingizdagi faylni to'g'ridan-to'g'ri tizimga joylashtiradi."
  },
  {
    "cmd": "man",
    "name": "Manual Pages (Linux Rasmiy Dasturchi va Tizim Qo'llanmasi)",
    "cat": "system",
    "catName": "⚙️ Tizim & Boshqaruv",
    "desc": "Linuxdagi har qanday buyruq, C funksiyalari, tizim chaqiriqlari (system calls: fork, read, execve) va konfiguratsiya fayllarining to'liq rasmiy hujjatini terminalda o'qish.",
    "syntax": "man [BO'LIM_RAQAMI] [BUYRUQ_YOKI_CHAQIRIQ]",
    "syntaxRules": "1: Oddiy buyruqlar (ls, chmod), 2: Kernel tizim chaqiriqlari (fork, read, write), 3: C kutubxona funksiyalari (printf, malloc), 5: Konfiguratsiya fayllari (/etc/passwd).",
    "flags": [
      {
        "flag": "-k",
        "desc": "Kalit so'z bo'yicha barcha man sahifalari qisqacha tavsifidan qidirish (apropos bilan bir xil)"
      },
      {
        "flag": "-f",
        "desc": "Buyruq nima vazifa bajarishini 1 qatorda ko'rsatish (whatis bilan bir xil)"
      },
      {
        "flag": "-a",
        "desc": "Barcha bo'limlardagi mos keluvchi qo'llanmalarni ketma-ket ko'rsatish"
      },
      {
        "flag": "-w",
        "desc": "Man sahifasi faylining diskdagi aniq manzilini chiqarish"
      }
    ],
    "combinations": [
      {
        "cmd": "man 2 fork",
        "desc": "Operatsion tizim darajasidagi fork() tizim chaqirig'ining C tilidagi rasmiy hujjatini o'qish"
      },
      {
        "cmd": "man -k 'socket'",
        "desc": "Tarmoq soketlari bilan bog'liq barcha tizim chaqiriqlari va buyruqlarni qidirish"
      },
      {
        "cmd": "man 5 passwd",
        "desc": "/etc/passwd faylining ichki tuzilishi va ustunlari qanday ishlashini o'rganish"
      }
    ],
    "example": "man ls",
    "analogy": "Avtomobil yoki samolyotning zavod tomonidan yozilgan to'liq texnik ensiklopediyasi — har bir vint va funksiyaning rasmiy hujjati."
  },
  {
    "cmd": "md5sum",
    "name": "MD5 Checksum (Fayl Butunligini Hesh Tekshiruvi)",
    "cat": "security",
    "catName": "🔒 Xavfsizlik & Ruxsatlar",
    "desc": "Faylning MD5 (128-bit) nazorat hesh qiymatini hisoblash yoki oldindan berilgan hesh bilan solishtirib, fayl ko'chirish paytida buzilmaganini yoki o'zgartirilmaganini aniqlash.",
    "syntax": "md5sum [BAYROQLAR] [FAYL]",
    "syntaxRules": "Chiqish formati: 32 ta o'n oltilik belgi (hash) va fayl nomi. Agar fayldagi bitta belgi o'zgarsa ham, butun hesh tubdan o'zgaradi.",
    "flags": [
      {
        "flag": "-c",
        "desc": "Hesh fayli (.md5) ichidagi ro'yxat bo'yicha fayllarning haqiqiyligini tekshirish (Check)"
      },
      {
        "flag": "-b",
        "desc": "Faylni ikkilik (binary) rejimda o'qish"
      },
      {
        "flag": "--status",
        "desc": "Natijani ekranga chiqarmasdan, faqat chiqish kodi ($?) orqali natija berish"
      },
      {
        "flag": "-w",
        "desc": "Noto'g'ri formatlangan qatorlar bo'lsa ogohlantirish berish"
      }
    ],
    "combinations": [
      {
        "cmd": "md5sum debian12.iso > debian12.iso.md5",
        "desc": "Katta ISO tasvirning nazorat heshini faylga saqlab qo'yish"
      },
      {
        "cmd": "md5sum -c debian12.iso.md5",
        "desc": "Yuklab olingan faylning buzilmaganligini avtomatik tekshirish"
      },
      {
        "cmd": "find /etc -type f -exec md5sum {} + > /tmp/etc_hashes.txt",
        "desc": "/etc katalogidagi barcha konfiguratsiya fayllarining boshlang'ich hesh bazasini yaratish"
      }
    ],
    "example": "md5sum /bin/bash",
    "analogy": "Har bir faylning takrorlanmas barmoq izi (fingerprint) — yuklab olish paytida internet uzilib fayl chala qolsa, hesh mos kelmay darhol bilinadi."
  },
  {
    "cmd": "sha256sum",
    "name": "SHA-256 Checksum (Kriptografik Xavfsiz Hesh Hisoblash)",
    "cat": "security",
    "catName": "🔒 Xavfsizlik & Ruxsatlar",
    "desc": "Fayl uchun 256-bitli SHA-2 oilasiga mansub yuqori darajada xavfsiz kriptografik hesh yaratish va tekshirish (MD5 ga qaraganda kolliziyadan 100% himoyalangan).",
    "syntax": "sha256sum [BAYROQLAR] [FAYL]",
    "syntaxRules": "Chiqish formati: 64 ta o'n oltilik belgi. Zamonaviy Linux distributivlari, Docker imidjlar va kriptovalyutalar aynan SHA-256 standartidan foydalanadi.",
    "flags": [
      {
        "flag": "-c",
        "desc": "Oldindan saqlangan .sha256 fayli asosida tekshirish"
      },
      {
        "flag": "--quiet",
        "desc": "Faqat xatolik yuz bergandagina ogohlantirish, muvaffaqiyatli fayllarni ko'rsatmaslik"
      },
      {
        "flag": "-b",
        "desc": "Binar rejimda hisoblash"
      }
    ],
    "combinations": [
      {
        "cmd": "sha256sum backup.tar.gz > backup.tar.gz.sha256",
        "desc": "Muhim zaxira nusxaning kriptografik nazorat imzosini yaratish"
      },
      {
        "cmd": "sha256sum -c backup.tar.gz.sha256",
        "desc": "Zaxira nusxaning xakerlar yoki xatoliklar tomonidan o'zgartirilmaganini tasdiqlash"
      },
      {
        "cmd": "echo -n 'parol123' | sha256sum",
        "desc": "Matn satrining SHA-256 heshini olish"
      }
    ],
    "example": "sha256sum /etc/passwd",
    "analogy": "Davlat gerbli notarial muhr — agar biron kimsa hujjatdagi bitta nuqtani o'zgartirsa, muhr haqiqiyligini yo'qotadi."
  },
  {
    "cmd": "hostname",
    "name": "Hostname & Hostnamectl (Server Nomini Boshqarish)",
    "cat": "system",
    "catName": "⚙️ Tizim & Boshqaruv",
    "desc": "Linux serverining tarmoqdagi nomini (hostname) ko'rish, vaqtincha yoki doimiy ravishda o'zgartirish hamda serverning IP manzillarini aniqlash.",
    "syntax": "hostname [BAYROQLAR] YOKI sudo hostnamectl set-hostname [YANGI_NOM]",
    "syntaxRules": "Doimiy o'zgartirish uchun systemd boshqaruvidagi tizimlarda 'hostnamectl set-hostname' ishlatiladi (/etc/hostname va /etc/hosts fayllariga yoziladi).",
    "flags": [
      {
        "flag": "-I",
        "desc": "Serverning barcha tarmoq interfeyslariga biriktirilgan IP manzillarini ko'rsatish"
      },
      {
        "flag": "-i",
        "desc": "Mahalliy host IP manzilini (odatda 127.0.1.1) ko'rsatish"
      },
      {
        "flag": "-f",
        "desc": "To'liq domen nomini (FQDN) chiqarish"
      },
      {
        "flag": "-s",
        "desc": "Faqat qisqa server nomini chiqarish"
      }
    ],
    "combinations": [
      {
        "cmd": "hostname -I | awk '{print $1}'",
        "desc": "Serverning asosiy birlamchi IP manzilini ajratib olish"
      },
      {
        "cmd": "sudo hostnamectl set-hostname node01.uzum.infra",
        "desc": "Server nomini korporativ standart bo'yicha doimiy o'zgartirish"
      },
      {
        "cmd": "hostname && uname -r",
        "desc": "Server nomi va joriy ishlayotgan Linux yadro versiyasini birga ko'rish"
      }
    ],
    "example": "hostname -I",
    "analogy": "Serverning pasportidagi ismi — minglab serverlar ichida aynan qaysi kompyuterda ishlayotganingizni bilish uchun shaxsiy nom."
  },
  {
    "cmd": "shutdown",
    "name": "Shutdown (Serverni Xavfsiz To'xtatish va O'chirish)",
    "cat": "system",
    "catName": "⚙️ Tizim & Boshqaruv",
    "desc": "Linux tizimida barcha ishlayotgan jarayonlarga SIGTERM va SIGKILL signallarini berib, keshdagi ma'lumotlarni diskka yozib (sync), serverni xavfsiz o'chirish yoki qayta yuklash.",
    "syntax": "sudo shutdown [BAYROQLAR] [VAQT] [XABAR]",
    "syntaxRules": "Vaqt: 'now' (darhol), '+15' (15 daqiqadan keyin), yoki '23:30' (aniq soatda). Barcha ulangan foydalanuvchilar ekraniga ogohlantiruvchi xabar boradi.",
    "flags": [
      {
        "flag": "-h",
        "desc": "Tizimni to'xtatish va quvvatni to'liq o'chirish (Halt/Poweroff)"
      },
      {
        "flag": "-r",
        "desc": "O'chgandan so'ng serverni qayta ishga tushirish (Reboot)"
      },
      {
        "flag": "-c",
        "desc": "Oldindan rejalashtirilgan o'chirish jarayonini bekor qilish (Cancel)"
      },
      {
        "flag": "-k",
        "desc": "Haqiqatda o'chirmasdan, faqat barcha foydalanuvchilarga soxta ogohlantirish xabari jo'natish"
      }
    ],
    "combinations": [
      {
        "cmd": "sudo shutdown -h now",
        "desc": "Serverni darhol barcha ma'lumotlarni saqlab xavfsiz o'chirish"
      },
      {
        "cmd": "sudo shutdown -r +10 'Diqqat: Server 10 daqiqadan keyin texnik profilaktikaga ketadi!'",
        "desc": "Foydalanuvchilarni ogohlantirib 10 daqiqadan so'ng qayta yuklash"
      },
      {
        "cmd": "sudo shutdown -c",
        "desc": "Rejalashtirilgan o'chirishni bekor qilish"
      }
    ],
    "example": "sudo shutdown -h now",
    "analogy": "Katta zavodda ish vaqti tugaganda smenadagi barcha ishchilarni ogohlantirib, dastgohlarni to'xtatib, elektrni xavfsiz o'chirish jarayoni."
  },
  {
    "cmd": "reboot",
    "name": "Reboot (Serverni Qayta Ishga Tushirish)",
    "cat": "system",
    "catName": "⚙️ Tizim & Boshqaruv",
    "desc": "Operatsion tizimni qayta ishga tushirish (restart qilish). Tizim yangilanishlaridan yoki yadro (kernel) yangilangandan so'ng yangi sozlamalarni faollashtirish uchun ishlatiladi.",
    "syntax": "sudo reboot [BAYROQLAR]",
    "syntaxRules": "Zamonaviy systemd tizimlarida bu buyruq 'systemctl reboot' chaqirig'ining qisqartmasi hisoblanadi.",
    "flags": [
      {
        "flag": "-f",
        "desc": "Majburiy (force) qayta yuklash — jarayonlarning yopilishini kutmasdan darhol qayta yoqish"
      },
      {
        "flag": "-p",
        "desc": "Qayta yuklash o'rniga to'liq quvvatni o'chirish (poweroff)"
      },
      {
        "flag": "-w",
        "desc": "Haqiqiy qayta yuklamasdan faqat /var/log/wtmp fayliga yozuv yozish"
      }
    ],
    "combinations": [
      {
        "cmd": "sudo reboot",
        "desc": "Serverni xavfsiz rejimda qayta ishga tushirish"
      },
      {
        "cmd": "sudo reboot -f",
        "desc": "Qotib qolgan jarayonlarni kutmasdan darhol tizimni majburiy qayta yuklash"
      }
    ],
    "example": "sudo reboot",
    "analogy": "Kompyuterdagi 'Restart' tugmasi — yangi dastur va drayverlar to'liq kuchga kirishi uchun serverni toza qayta yoqish."
  },
  {
    "cmd": "base64",
    "name": "Base64 (Ikkilik Ma'lumotlarni Matnga Kodlash va Dekodlash)",
    "cat": "shell",
    "catName": "🐚 Shell, Quvurlar & Oqimlar",
    "desc": "Ikkilik fayllar, parollar, tokenlar va sertifikatlarni faqat ASCII harf va raqamlaridan iborat xavfsiz matn formatiga (Base64) o'tkazish yoki aksincha ochish.",
    "syntax": "base64 [BAYROQLAR] [KIRISH_FAYLI]",
    "syntaxRules": "Kirish standart kiritish (pipe `|`) orqali ham berilishi mumkin. Har 3 bayt ikkilik ma'lumot 4 ta ASCII belgisiga aylanadi.",
    "flags": [
      {
        "flag": "-d",
        "desc": "Base64 matnni asl holatiga qayta dekodlash (Decode)"
      },
      {
        "flag": "-w 0",
        "desc": "Matnni 76 belgidan keyin bo'lmasdan bitta yaxlit qator qilib chiqarish"
      },
      {
        "flag": "-i",
        "desc": "Dekodlash paytida begona noto'g'ri belgilarni e'tiborsiz qoldirish"
      }
    ],
    "combinations": [
      {
        "cmd": "echo -n 'MaxfiyParol2026' | base64",
        "desc": "Matnni Base64 formatiga o'tkazish"
      },
      {
        "cmd": "echo 'TWF4Zml5UGFyb2wyMDI2' | base64 -d",
        "desc": "Base64 qatorini asl matnga qaytarish"
      },
      {
        "cmd": "base64 -w 0 logo.png > logo_base64.txt",
        "desc": "Rasmni veb sahifalar uchun bitta yaxlit Base64 qatoriga aylantirish"
      }
    ],
    "example": "echo 'Salom WIUT' | base64",
    "analogy": "Xalqaro pochtada mo'rt yoki suyuq buyumni xavfsiz qutiga joylab, ustiga shtrix-kod va standart yozuvlar yopishtirib jo'natish."
  },
  {
    "cmd": "bzip2",
    "name": "Bzip2 & Bunzip2 (Kuchli Blokli Siqish Algoritmi)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": "Burrows-Wheeler algoritmi asosida ishlovchi kuchli siqish dasturi. Gzip ga qaraganda ko'proq xotira talab qiladi, lekin fayllarni sezilarli kichikroq hajmga keltiradi (.bz2).",
    "syntax": "bzip2 [BAYROQLAR] [FAYL_NOMI] / bunzip2 [FAYL.bz2]",
    "syntaxRules": "Diqqat: Odatiy holda bzip2 siqishdan so'ng asl faylni o'chiradi! Asl nusxani saqlab qolish uchun har doim '-k' (keep) bayrog'ini ishlating.",
    "flags": [
      {
        "flag": "-k",
        "desc": "Asl boshlang'ich faylni o'chirmasdan saqlab qolish (Keep input files)"
      },
      {
        "flag": "-d",
        "desc": "Siqilgan .bz2 faylni ochish (Decompress / bunzip2)"
      },
      {
        "flag": "-v",
        "desc": "Har bir faylning siqilish foizini ekranda ko'rsatish (Verbose)"
      },
      {
        "flag": "-9",
        "desc": "Maksimal darajada kuchli siqish (Eng yaxshi siqish koeffitsiyenti)"
      },
      {
        "flag": "-t",
        "desc": "Arxivning butunligini ochmasdan tekshirish (Test integrity)"
      }
    ],
    "combinations": [
      {
        "cmd": "bzip2 -k -9 katta_baza.sql",
        "desc": "Katta SQL baza faylini asl nusxasini saqlagan holda maksimal siqish"
      },
      {
        "cmd": "tar -cvjf backup.tar.bz2 /etc",
        "desc": "Tar bilan birgalikda butun /etc katalogini bz2 orqali arxivlash"
      },
      {
        "cmd": "bunzip2 -k backup.tar.bz2",
        "desc": ".bz2 arxivni ochish va arxiv faylini saqlab qolish"
      }
    ],
    "example": "bzip2 -k -v katta_fayl.txt",
    "analogy": "Mebel yoki kiyimlarni vakuumli qopga solib, changyutgich bilan havosini oxirgi tomchisigacha so'rib olib ixchamlashtirish."
  },
  {
    "cmd": "xz",
    "name": "XZ & Unxz (LZMA2 Asosidagi Zamonaviy Eng Kuchli Siqish)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": "LZMA/LZMA2 algoritmi orqali ishlovchi eng zamonaviy va samarali siqish utilitasi (.xz). Linux yadrosi va rasmiy Debian paketlari aynan xz orqali tarqatiladi.",
    "syntax": "xz [BAYROQLAR] [FAYL_NOMI] / unxz [FAYL.xz]",
    "syntaxRules": "Ko'p yadroli protsessordan to'liq foydalanish uchun '-T0' (barcha yadrolar) bayrog'i juda katta tezlik beradi.",
    "flags": [
      {
        "flag": "-k",
        "desc": "Asl kirish faylini o'chirmay saqlash (Keep)"
      },
      {
        "flag": "-d",
        "desc": "Siqilgan faylni ochish (Decompress)"
      },
      {
        "flag": "-T0",
        "desc": "Siqish uchun mavjud barcha CPU yadrolarini ishlatish (Multi-threading)"
      },
      {
        "flag": "-9",
        "desc": "Eng yuqori siqish darajasi (Extreme compression)"
      },
      {
        "flag": "-l",
        "desc": "Siqilgan .xz fayl haqidagi ma'lumotlarni ko'rish (List metadata)"
      }
    ],
    "combinations": [
      {
        "cmd": "tar -cf - /var/log | xz -T0 -9 > logs_backup.tar.xz",
        "desc": "Barcha CPU yadrolarini ishga solib eng kuchli darajada arxiv yaratish"
      },
      {
        "cmd": "xz -d -k kernel.tar.xz",
        "desc": ".xz arxivni asl nusxasini o'chirmasdan ochish"
      },
      {
        "cmd": "xz -l linux-6.6.tar.xz",
        "desc": "Arxiv ichidagi asl fayl hajmi va siqilish koeffitsiyentini ko'rish"
      }
    ],
    "example": "xz -k -T0 data.csv",
    "analogy": "Super-kompressor — barcha protsessor kuchini jamlab, ma'lumotlarni eng kichik megabaytlarga qadar zichlab beradi."
  },
  {
    "cmd": "ifconfig",
    "name": "Interface Config (Tarmoq Kartalari va IP Sozlamalari)",
    "cat": "network",
    "catName": "🌐 Tarmoq & Aloqa",
    "desc": "Linux tizimida tarmoq interfeyslarini (eth0, wlan0, lo) ko'rish, IP manzil, maska va MAC manzillarni sozlash hamda tarmoq kartalarini yoqish/o'chirish.",
    "syntax": "ifconfig [INTERFEYS] [IP_MANZIL] [BAYROQLAR]",
    "syntaxRules": "Eslatma: Zamonaviy Linux tizimlarida ifconfig o'rniga 'ip addr' tavsiya etiladi, lekin u hali ham barcha korporativ tizimlarda keng ishlatiladi.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha, jumladan o'chiq bo'lgan tarmoq interfeyslarini ham ko'rsatish"
      },
      {
        "flag": "-s",
        "desc": "Tarmoq statistikasi haqida qisqacha jadval ko'rinishida chiqarish"
      },
      {
        "flag": "up",
        "desc": "Ko'rsatilgan tarmoq interfeysini yoqish / faollashtirish"
      },
      {
        "flag": "down",
        "desc": "Ko'rsatilgan tarmoq interfeysini o'chirish / to'xtatish"
      }
    ],
    "combinations": [
      {
        "cmd": "ifconfig eth0",
        "desc": "Faqat eth0 tarmoq kartasining IP, MAC va paketlar statistikasini ko'rish"
      },
      {
        "cmd": "sudo ifconfig eth0 192.168.1.55 netmask 255.255.255.0 up",
        "desc": "eth0 kartasiga statik IP va maska biriktirib yoqish"
      },
      {
        "cmd": "sudo ifconfig wlan0 down",
        "desc": "Simsiz tarmoq modulini xavfsizlik maqsadida o'chirish"
      }
    ],
    "example": "ifconfig",
    "analogy": "Serveringizga ulangan har bir tarmoq kabeli va Wi-Fi antennasining shaxsiy ko'krak nishoni."
  },
  {
    "cmd": "iptables",
    "name": "IP Tables (Linux Kernel Xavfsizlik Devori / Firewall)",
    "cat": "security",
    "catName": "🔒 Xavfsizlik & Ruxsatlar",
    "desc": "Linux yadrosining Netfilter quyi tizimi orqali kiruvchi (INPUT), chiquvchi (OUTPUT) va tranzit (FORWARD) tarmoq paketlarini filtrlash va xavfsizlik devorini boshqarish.",
    "syntax": "sudo iptables [BUYRUQ] [ZANJIR] [QOIDA] -j [HARAKAT]",
    "syntaxRules": "Asosiy zanjirlar: INPUT (keluvchi), OUTPUT (ketuvchi), FORWARD (yo'naltiriluvchi). Asosiy harakatlar: ACCEPT (ruxsat), DROP (bloklash), REJECT (rad etish).",
    "flags": [
      {
        "flag": "-L",
        "desc": "Mavjud barcha fayrvoll qoidalarini ro'yxat qilib ko'rsatish (List)"
      },
      {
        "flag": "-v",
        "desc": "Batafsil ma'lumot (trafik baytlari va paketlar soni)"
      },
      {
        "flag": "-n",
        "desc": "IP va portlarni raqamli ko'rinishda chiqarish (DNS ga so'rov bermaslik)"
      },
      {
        "flag": "-A",
        "desc": "Zanjir oxiriga yangi qoida qo'shish (Append)"
      },
      {
        "flag": "-D",
        "desc": "Ko'rsatilgan qoidani o'chirish (Delete)"
      },
      {
        "flag": "-F",
        "desc": "Barcha mavjud qoidalarni tozalab tashlash (Flush)"
      },
      {
        "flag": "-p",
        "desc": "Protokol turini ko'rsatish (tcp, udp, icmp)"
      },
      {
        "flag": "--dport",
        "desc": "Qabul qiluvchi maqsad porti (masalan 22, 80, 443)"
      },
      {
        "flag": "-j",
        "desc": "Shart bajarilganda qilinadigan harakat (ACCEPT, DROP, REJECT)"
      }
    ],
    "combinations": [
      {
        "cmd": "sudo iptables -L -v -n",
        "desc": "Hozirgi barcha tarmoq himoya qoidalarini raqamlar bilan batafsil ko'rish"
      },
      {
        "cmd": "sudo iptables -A INPUT -p tcp --dport 22 -j ACCEPT",
        "desc": "SSH portiga (22) barcha ulanishlarga ruxsat berish"
      },
      {
        "cmd": "sudo iptables -A INPUT -s 192.168.1.100 -j DROP",
        "desc": "Shubhali IP manzildan kelayotgan barcha paketlarni so'zsiz bloklash"
      },
      {
        "cmd": "sudo iptables -F",
        "desc": "Barcha xavfsizlik qoidalarini tozalash"
      }
    ],
    "example": "sudo iptables -L -n",
    "analogy": "Bank darvozasidagi qo'riqlash posti — har bir kirayotgan mijozning sumkasi, ruxsatnomasi va pasportini tekshirib, ichkariga kiritadi yoki haydab chiqaradi."
  },
  {
    "cmd": "nslookup",
    "name": "Name Server Lookup (DNS Serverdan Domen IP Manzilini So'rash)",
    "cat": "network",
    "catName": "🌐 Tarmoq & Aloqa",
    "desc": "DNS serverlariga to'g'ridan-to'g'ri so'rov yuborib, domen nomlarining IP manzillarini (A yozuvlari), pochta serverlarini (MX) va TXT yozuvlarini aniqlash.",
    "syntax": "nslookup [DOMEN_NOMI] [DNS_SERVER_IP]",
    "syntaxRules": "Agar DNS server ko'rsatilmasa, tizimning /etc/resolv.conf faylida ko'rsatilgan standart provayder DNS serveriga murojaat qiladi.",
    "flags": [
      {
        "flag": "-type=A",
        "desc": "Domenning IPv4 manzilini aniqlash"
      },
      {
        "flag": "-type=MX",
        "desc": "Domenning elektron pochta (Mail Exchange) serverlarini ko'rish"
      },
      {
        "flag": "-type=NS",
        "desc": "Domenga xizmat ko'rsatuvchi rasmiy Name Serverlarni ko'rish"
      },
      {
        "flag": "-type=TXT",
        "desc": "SPF, DKIM va domen tasdiqlovchi TXT yozuvlarini ko'rish"
      }
    ],
    "combinations": [
      {
        "cmd": "nslookup google.com",
        "desc": "Google domenining joriy IP manzillarini bilish"
      },
      {
        "cmd": "nslookup -type=MX wiut.uz 8.8.8.8",
        "desc": "Google DNS (8.8.8.8) orqali WIUT universitetining pochta serverlarini so'rash"
      },
      {
        "cmd": "nslookup 8.8.8.8",
        "desc": "Teskari DNS — IP manzil kimga tegishli ekanligini topish"
      }
    ],
    "example": "nslookup wiut.uz",
    "analogy": "Shahar telefon ma'lumotlar byurosi (109) — tashkilot nomini aytsangiz, uning to'g'ri telefon raqamini topib beradi."
  },
  {
    "cmd": "shred",
    "name": "Shred (Fayllarni Xotiradan Butunlay va Qaytarib Bo'lmas Yo'q Qilish)",
    "cat": "security",
    "catName": "🔒 Xavfsizlik & Ruxsatlar",
    "desc": "Maxfiy fayllarni shunchaki o'chirmasdan (rm faqat inodeni bo'shatadi), fayl egallagan disk sektorlariga bir necha marta tasodifiy ma'lumotlar va nollar yozib, qayta tiklab bo'lmaydigan darajada yo'q qilish.",
    "syntax": "shred [BAYROQLAR] [FAYL_NOMI]",
    "syntaxRules": "Muhim: rm buyrug'i faqat inodeni o'chiradi, ma'lumot diskda qoladi. shred esa disk sektorlarini qayta-qayta yozib tozalaydi.",
    "flags": [
      {
        "flag": "-u",
        "desc": "Ustidan ma'lumot yozib bo'lingach, faylning o'zini ham diskdan o'chirib tashlash (Remove / Unlink)"
      },
      {
        "flag": "-z",
        "desc": "Oxirgi bosqichda hamma sektorlarga 0 baytlar yozib, fayl shred qilinganini yashirish (Zero out)"
      },
      {
        "flag": "-n",
        "desc": "Necha marta ustidan tasodifiy sonlar yozish kerakligini belgilash (standart 3 marta)"
      },
      {
        "flag": "-v",
        "desc": "Har bir tozalash qadamini foizlar bilan ekranda ko'rsatish (Verbose)"
      }
    ],
    "combinations": [
      {
        "cmd": "shred -u -z -v -n 5 maxfiy_parollar.txt",
        "desc": "Maxfiy hujjatni 5 marta tasodifiy sonlar bilan yozib, oxirida nollab diskdan butunlay o'chirish"
      },
      {
        "cmd": "sudo shred -v -n 1 /dev/sdb",
        "desc": "Eski fleshka yoki qattiq diskdagi barcha ma'lumotlarni to'liq yo'q qilish"
      }
    ],
    "example": "shred -u -z maxfiy.txt",
    "analogy": "Hujjatlar maydalagich (shredder) apparati — maxfiy qog'ozlarni oddiy axlatga tashlamasdan, maydalab, kukun qilib yoqib yuborish."
  },
  {
    "cmd": "truncate",
    "name": "Truncate (Fayl Hajmini Qisqartirish yoki Kengaytirish)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": "Faylning ichki hajmini berilgan o'lchamga (masalan 0 bayt yoki 100MB) qisqartirish yoki bo'sh joy bilan kengaytirish. Faylni o'chirmasdan uning ichini bir zumda tozalash uchun qulay.",
    "syntax": "truncate -s [HAJM] [FAYL_NOMI]",
    "syntaxRules": "Hajm prefikslari: 0 (butunlay bo'shatish), 10K (kilobayt), 50M (megabayt), 2G (gigabayt). Agar fayl mavjud bo'lmasa, yangi bo'sh fayl yaratadi.",
    "flags": [
      {
        "flag": "-s",
        "desc": "Faylning yangi o'lchamini belgilash (Size: masalan -s 0 yoki -s 10M)"
      },
      {
        "flag": "-c",
        "desc": "Agar fayl mavjud bo'lmasa yangi fayl yaratmaslik (Do not create)"
      }
    ],
    "combinations": [
      {
        "cmd": "sudo truncate -s 0 /var/log/nginx/access.log",
        "desc": "Nginx ishlab turgan paytda serverni to'xtatmasdan uning gigabaytlik log faylini 0 baytga tushirib tozalash"
      },
      {
        "cmd": "truncate -s 1G virtual_disk.img",
        "desc": "Virtual mashina uchun 1 Gigabaytlik bo'sh qattiq disk tasvirini bir soniyada yaratish"
      }
    ],
    "example": "truncate -s 0 mylog.txt",
    "analogy": "Daftarning barcha yozilgan varaqlarini bitta harakatda oqartirib tashlash, lekin muqova va nomini joyida qoldirish."
  },
  {
    "cmd": "cal",
    "name": "Cal (Terminal Taqvimi / Kalendari)",
    "cat": "system",
    "catName": "⚙️ Tizim & Boshqaruv",
    "desc": "Linux terminalida qulay oylik yoki yillik taqvimni chiqarish, joriy kunni belgilab ko'rsatish va istalgan o'tgan yoki kelgusi yil oylarini ko'rish.",
    "syntax": "cal [BAYROQLAR] [OY] [YIL]",
    "syntaxRules": "Oy 1-12 oralig'ida raqam bilan beriladi. Yil to'liq 4 xonali bo'lishi shart (masalan 2026).",
    "flags": [
      {
        "flag": "-3",
        "desc": "Oldingi oy, joriy oy va keyingi oyni yonma-yon ko'rsatish"
      },
      {
        "flag": "-y",
        "desc": "Butun yil taqvimini (12 oyni) bitta ekranda chiqarish"
      },
      {
        "flag": "-j",
        "desc": "Yulian kunlari bo'yicha (1-365) hisoblab chiqarish"
      }
    ],
    "combinations": [
      {
        "cmd": "cal",
        "desc": "Joriy oy taqvimini bugungi kunni rang bilan ajratib ko'rsatish"
      },
      {
        "cmd": "cal -3",
        "desc": "O'tgan, joriy va kelasi oyni bitta ko'rinishda tekshirish"
      },
      {
        "cmd": "cal 12 2026",
        "desc": "2026-yil dekabr oyi taqvimini ko'rish"
      }
    ],
    "example": "cal -3",
    "analogy": "Ish stolingiz ustida turgan klassik devor taqvimi."
  },
  {
    "cmd": "bc",
    "name": "Basic Calculator (Ixtiyoriy Aniq O'lchamli CLI Kalkulyator)",
    "cat": "shell",
    "catName": "🐚 Shell, Quvurlar & Oqimlar",
    "desc": "Bash shell faqat butun sonlar bilan ishlay olganligi sababli, kasr sonlar (float), darajalar va murakkab matematik amallarni 100% aniqlikda hisoblovchi kalkulyator.",
    "syntax": "echo '[MATEMATIK_IFODA]' | bc [BAYROQLAR]",
    "syntaxRules": "Kasr qismini belgilash uchun 'scale=N' parametri ishlatiladi. '-l' bayrog'i standart matematik kutubxonani (sqrt, sin, cos) ulaydi.",
    "flags": [
      {
        "flag": "-l",
        "desc": "Standart matematik kutubxonani yuklash va scale ni avtomatik 20 xonaga sozlash"
      },
      {
        "flag": "-q",
        "desc": "Kirishdagi salomlashuv xabarlarini o'chirib jim rejimda ishlash (Quiet)"
      }
    ],
    "combinations": [
      {
        "cmd": "echo 'scale=4; 355 / 113' | bc",
        "desc": "Pi sonini kasr xonalari bilan hisoblash"
      },
      {
        "cmd": "echo '2 ^ 16' | bc",
        "desc": "2 ning 16-darajasini (65536) hisoblash"
      },
      {
        "cmd": "echo 'sqrt(144)' | bc -l",
        "desc": "144 ning kvadrat ildizini topish"
      }
    ],
    "example": "echo 'scale=2; 100 / 3' | bc",
    "analogy": "Muhandislik ilmiy kalkulyatori — murakkab hisob-kitoblarni tiyinigacha aniq chiqarib beruvchi aql."
  },
  {
    "cmd": "tar",
    "name": "Tape Archive (Fayl va Katalogni Arxivlash / Qadoqlash)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": "Linux tizimida bir nechta fayl va butun kataloglarni bitta arxiv fayliga (.tar, .tar.gz, .tar.bz2) qadoqlash yoki arxivdan qayta chiqarish (extract).",
    "syntax": "tar [BAYROQLAR] [ARXIV_NOMI.tar.gz] [FAYLLAR_YOKI_PAPKALAR]",
    "syntaxRules": "Yodlash qoidasi: 'c' = Create (yaratish), 'x' = eXtract (ochish), 'z' = gZip (siqish), 'v' = Verbose (ko'rsatish), 'f' = File (fayl nomi darhol keyin keladi!).",
    "flags": [
      {
        "flag": "-c",
        "desc": "Yangi arxiv fayli yaratish (Create)"
      },
      {
        "flag": "-x",
        "desc": "Arxiv ichidagilarni chiqarib olish (eXtract)"
      },
      {
        "flag": "-z",
        "desc": "Arxivni gzip orqali siqish (.tar.gz)"
      },
      {
        "flag": "-j",
        "desc": "Arxivni bzip2 orqali kuchliroq siqish (.tar.bz2)"
      },
      {
        "flag": "-v",
        "desc": "Jarayon davomida arxivlanayotgan har bir faylni ekranga chiqarish (Verbose)"
      },
      {
        "flag": "-f",
        "desc": "Arxiv fayl nomini ko'rsatish (har doim bayroqlar oxirida turishi shart!)"
      },
      {
        "flag": "-t",
        "desc": "Arxivni ochmasdan ichidagi fayllar ro'yxatini ko'rish (List content)"
      },
      {
        "flag": "-C",
        "desc": "Fayllarni boshqa ko'rsatilgan katalogga ochish (Destination directory)"
      }
    ],
    "combinations": [
      {
        "cmd": "tar -czvf loyiha_backup.tar.gz /var/www/myproject",
        "desc": "Katalogni barcha fayllari bilan gzip siqilgan arxivga o'rash"
      },
      {
        "cmd": "tar -xzvf loyiha_backup.tar.gz -C /opt/deployed/",
        "desc": "Arxivni /opt/deployed katalogiga ochish"
      },
      {
        "cmd": "tar -tzvf backup.tar.gz | grep 'config.php'",
        "desc": "Arxivni ochmasdan ichida config.php bor-yo'qligini tekshirish"
      }
    ],
    "example": "tar -czvf site_backup_$(date +%Y%m%d).tar.gz /var/www/html",
    "analogy": "Sayoxatga ketayotganda barcha kiyimlarni bitta chamadonga solib, ustidan vakuum qop bilan qisib havosini chiqarib olish."
  },
  {
    "cmd": "gzip",
    "name": "GNU Zip (Fayllarni Siqish / Hajmini Kichraytirish)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": "Alohida fayllarning hajmini Lempel-Ziv (LZ77) algoritmi yordamida sezilarli darajada kichraytiradi (.gz kengaytma beradi).",
    "syntax": "gzip [BAYROQLAR] [FAYL]",
    "syntaxRules": "DIQQAT: gzip asl faylni o'rniga .gz yaratadi. Asl faylni saqlash uchun -k (keep) bayrog'ini ishlating.",
    "flags": [
      {
        "flag": "-k",
        "desc": "Asl faylni o'chirib yubormasdan saqlab qolish (--keep)"
      },
      {
        "flag": "-d",
        "desc": "Siqilgan .gz faylni qayta ochish (decompress / gunzip bilan teng)"
      },
      {
        "flag": "-9",
        "desc": "Maksimal darajada qattiq siqish (eng kichik hajm, sekinroq)"
      },
      {
        "flag": "-1",
        "desc": "Eng tezkor siqish (tez, lekin hajm kattaroq)"
      },
      {
        "flag": "-r",
        "desc": "Katalog ichidagi barcha fayllarni rekursiv siqish"
      }
    ],
    "combinations": [
      {
        "cmd": "gzip -9 -k database_dump.sql",
        "desc": "SQL bazani asl nusxasini saqlab eng yuqori darajada siqish"
      },
      {
        "cmd": "gzip -d database_dump.sql.gz",
        "desc": "Siqilgan bazani qayta ochish"
      }
    ],
    "example": "gzip -k /var/log/nginx/access.log",
    "analogy": "Paxtani yoki kiyimni maxsus press ostida qisib, uning oladigan joyini 5 baravar kamaytirish."
  },
  {
    "cmd": "gunzip",
    "name": "GNU Unzip (Siqilgan .gz Fayllarni Qayta Ochish)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": "gzip yordamida siqilgan .gz fayllarni ochib, asl holatiga qaytaradi.",
    "syntax": "gunzip [BAYROQLAR] [FAYL.gz]",
    "syntaxRules": "gunzip file.gz buyrug'i 'gzip -d file.gz' bilan 100% bir xil ishlaydi.",
    "flags": [
      {
        "flag": "-k",
        "desc": ".gz arxivini o'chirib yubormay saqlab qolish"
      },
      {
        "flag": "-f",
        "desc": "Mavjud fayl ustiga majburiy yozish (force)"
      }
    ],
    "combinations": [
      {
        "cmd": "gunzip -k access.log.gz",
        "desc": "Log arxivini ochib, arxivning o'zini ham saqlab qolish"
      }
    ],
    "example": "gunzip backup.sql.gz",
    "analogy": "Vakuumlangan paketni ochib, ichidagi buyumlarni to'liq asl hajmiga qaytarish."
  },
  {
    "cmd": "zip",
    "name": "Package and Compress Files (.zip Arxivlash)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": "Windows va macOS bilan 100% mos keluvchi .zip arxivlarini yaratish va fayllarni siqish.",
    "syntax": "zip [BAYROQLAR] arxiv.zip fayl1 fayl2 ...",
    "syntaxRules": "Papkani to'liq siqish uchun majburiy -r (rekursiv) bayrog'i qo'yilishi shart!",
    "flags": [
      {
        "flag": "-r",
        "desc": "Katalog va uning barcha ichki fayllarini rekursiv siqish"
      },
      {
        "flag": "-e",
        "desc": "Arxivga parol o'rnatish (shifrlash)"
      },
      {
        "flag": "-q",
        "desc": "Jim rejim (ekranga log chiqarmaslik)"
      }
    ],
    "combinations": [
      {
        "cmd": "zip -r loyiha.zip ./src ./package.json",
        "desc": "Loyiha kodlarini Windows foydalanuvchilariga jo'natish uchun zip qilish"
      }
    ],
    "example": "zip -r -e maxfiy_arxiv.zip /home/student/hujjatlar",
    "analogy": "Hujjatlarni fermuarli (zamokli) qalin jildga solib yopish."
  },
  {
    "cmd": "unzip",
    "name": "Extract Compressed Files from ZIP Archive (.zip Arxivni Ochish)",
    "cat": "disk",
    "catName": "💾 Disk, Arxiv & Bloklar",
    "desc": ".zip fayllar ichidagi ma'lumotlarni chiqarib olish yoki ichini ko'rish.",
    "syntax": "unzip [BAYROQLAR] arxiv.zip",
    "syntaxRules": "Boshqa katalogga ochish uchun -d parametrini bering.",
    "flags": [
      {
        "flag": "-l",
        "desc": "Arxivni ochmasdan ichidagi fayllar ro'yxatini ko'rish"
      },
      {
        "flag": "-d",
        "desc": "Fayllar ochilishi kerak bo'lgan katalog yo'li"
      },
      {
        "flag": "-q",
        "desc": "Jim rejim (quiet)"
      }
    ],
    "combinations": [
      {
        "cmd": "unzip -l darsliklar.zip",
        "desc": "Arxiv ichidagi barcha fayllar ro'yxati va hajmini ko'rish"
      },
      {
        "cmd": "unzip darsliklar.zip -d /home/student/wiut/",
        "desc": "Arxivni ko'rsatilgan /home/student/wiut papkasiga ochish"
      }
    ],
    "example": "unzip archive.zip -d ./extracted/",
    "analogy": "Pochta qutisini ochib, ichidagi kitoblarni ajratib javonga terish."
  },
  {
    "cmd": "date",
    "name": "Display or Set System Date and Time (Tizim Vaqti va Sanasi)",
    "cat": "bash",
    "catName": "⚡ Bash, Vaqt & Skriptlar",
    "desc": "Serverning joriy vaqtini, sanasini, vaqt mintaqasini (timezone) ko'rsatadi yoki skriptlarda maxsus formatda chiqaradi.",
    "syntax": "date [FORMAT]",
    "syntaxRules": "Format har doim + belgisi bilan boshlanadi: date '+%Y-%m-%d %H:%M:%S'",
    "flags": [
      {
        "flag": "+%Y-%m-%d",
        "desc": "Yil-Oy-Kun formatida chiqarish (masalan: 2026-10-16)"
      },
      {
        "flag": "+%H:%M:%S",
        "desc": "Soat:Daqiqa:Soniya formatida chiqarish"
      },
      {
        "flag": "-u",
        "desc": "UTC (Grinvich) xalqaro vaqti bo'yicha ko'rsatish"
      },
      {
        "flag": "+%s",
        "desc": "Unix Epoch timestamp (1970-yildan beri o'tgan soniyalar soni)"
      }
    ],
    "combinations": [
      {
        "cmd": "echo \"[$(date '+%Y-%m-%d %H:%M:%S')] Zaxiralash boshlandi\" >> /var/log/backup.log",
        "desc": "Log faylga vaqt muhri (timestamp) bilan xabar yozish"
      },
      {
        "cmd": "tar -czvf app_$(date +%F).tar.gz /app",
        "desc": "Bugungi sana bilan avtomatik arxiv fayli nomini yaratish"
      }
    ],
    "example": "date '+%Y-%m-%d %H:%M:%S'",
    "analogy": "Devordagi soat va taqvimga qarab bugungi sana va soniyani bilish."
  },
  {
    "cmd": "groups",
    "name": "Show User Group Memberships (Foydalanuvchi Guruhlarini Ko'rish)",
    "cat": "perm",
    "catName": "🔒 Ruxsatlar & Xavfsizlik",
    "desc": "Ko'rsatilgan foydalanuvchi yoki joriy sessiyaning qaysi xavfsizlik guruhlariga (sudo, docker, www-data va boshqalar) tegishli ekanligini ko'rsatadi.",
    "syntax": "groups [FOYDALANUVCHI]",
    "syntaxRules": "Agar foydalanuvchi nomi berilmasa, joriy tizimdagi foydalanuvchining guruhlarini chiqaradi.",
    "flags": [],
    "combinations": [
      {
        "cmd": "groups student",
        "desc": "student foydalanuvchisi sudo yoki docker guruhida borligini tekshirish"
      }
    ],
    "example": "groups student",
    "analogy": "Xodimning ID kartasiga qarab qaysi bo'limlarga (Moliya, IT, Boshqaruv) kirish huquqi borligini ko'rish."
  },
  {
    "cmd": "unalias",
    "name": "Remove Command Alias (Taxallus / Aliasni O'chirish)",
    "cat": "bash",
    "catName": "⚡ Bash, Vaqt & Skriptlar",
    "desc": "Ilgari yaratilgan qisqartma buyruq (alias) taxallusini sessiyadan olib tashlaydi.",
    "syntax": "unalias [ALIAS_NOMI]",
    "syntaxRules": "Barcha aliaslarni o'chirish uchun -a (all) bayrog'ini ishlating.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Sessiyadagi barcha aliaslarni tozalash"
      }
    ],
    "combinations": [
      {
        "cmd": "unalias ll",
        "desc": "ll qisqartmasini o'chirib, standart ls ga qaytarish"
      }
    ],
    "example": "unalias mycmd",
    "analogy": "Telefon kitobidagi qisqa raqam yoki tezkor terish laqabini o'chirib tashlash."
  },
  {
    "cmd": "clear",
    "name": "Clear Terminal Screen (Terminal Ekranini Tozalash)",
    "cat": "nav",
    "catName": "📁 Navigatsiya & Tizim",
    "desc": "Terminal ekranidagi eski buyruqlar va chiqishlarni yuqoriga surib, toza ishchi maydon yaratadi (Ctrl+L tugmasi bilan bir xil).",
    "syntax": "clear",
    "syntaxRules": "Terminalni tozalaydi, lekin operativ xotiradagi o'zgaruvchilar va fayllarga daxl qilmaydi.",
    "flags": [],
    "combinations": [
      {
        "cmd": "clear && pwd && ls -la",
        "desc": "Ekranni tozalab, joriy katalog va uning fayllarini ko'rish"
      }
    ],
    "example": "clear",
    "analogy": "Sinf doskasidagi yozuvlarni gubka bilan o'chirib, yangi mavzuni toza doskadan boshlash."
  },
  {
    "cmd": "git",
    "name": "Fast, Scalable, Distributed Revision Control System (Versiyalar Boshqaruvi)",
    "cat": "devops",
    "catName": "🐳 Docker & DevOps",
    "desc": "Dastur kodlaridagi har bir o'zgarishni kuzatib boruvchi, filiallar (branches) yaratuvchi va GitHub/GitLab bilan sinxronlashuvchi global tizim.",
    "syntax": "git [BUYRUQ] [PARAMETRLAR]",
    "syntaxRules": "Asosiy sikl: git status -> git add . -> git commit -m '...' -> git push",
    "flags": [
      {
        "flag": "status",
        "desc": "O'zgargan va qo'shilgan fayllar holatini ko'rish"
      },
      {
        "flag": "add",
        "desc": "Fayllarni saqlash hududiga (Staging area) qo'shish"
      },
      {
        "flag": "commit",
        "desc": "O'zgarishlarni izoh bilan lokal bazaga muhrlash"
      },
      {
        "flag": "push",
        "desc": "Lokal o'zgarishlarni masofaviy GitHub/GitLab serveriga yuborish"
      },
      {
        "flag": "pull",
        "desc": "Serverdagi yangi o'zgarishlarni yuklab olish"
      },
      {
        "flag": "log",
        "desc": "Commitlar tarixini ko'rish"
      }
    ],
    "combinations": [
      {
        "cmd": "git add . && git commit -m 'feat: initial setup' && git push origin main",
        "desc": "Barcha kodlarni bitta buyruq bilan GitHub ga yuborish"
      },
      {
        "cmd": "git status -s",
        "desc": "O'zgargan fayllarning ixcham ro'yxatini ko'rish"
      }
    ],
    "example": "git status",
    "analogy": "Video o'yindagi 'Save Game' nuqtalari. Istalgan vaqtda avvalgi xatosiz nuqtaga qaytish imkonini beradi."
  },
  {
    "cmd": "|",
    "name": "Unix Anonymous Pipe (Quvur / Oqimli Konveyer)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Linux tizimining yuragi. Birinchi jarayonning standart chiqishini (STDOUT) ikkinchi jarayonning standart kirishiga (STDIN) diskka yozmasdan, to'g'ridan-to'g'ri operativ xotiradagi 64KB kernel buferi orqali uzatadi.",
    "syntax": "BUYRUQ1 [BAYROQLAR] | BUYRUQ2 [BAYROQLAR]",
    "syntaxRules": "Parametrlar tartibi: [Manba Dastur] | [Filtr/Format Dastur] | [Yakuniy Chiqaruvchi]. Har doim | belgisi atrofida bo'sh joy qoldiring.",
    "flags": [
      {
        "flag": "|",
        "desc": "STDOUT ni keyingi dastur STDIN ga ulash"
      },
      {
        "flag": "|&",
        "desc": "Ham STDOUT, ham STDERR xatoliklarni bitta quvurga uzatish (Bash 4.0+)"
      }
    ],
    "combinations": [
      {
        "cmd": "cat /etc/passwd | grep -i student | awk -F: '{print $1}'",
        "desc": "/etc/passwd dan student foydalanuvchilarini topib, faqat login nomini ajratib olish"
      },
      {
        "cmd": "ps aux --sort=-%mem | head -n 10",
        "desc": "Eng ko'p xotira (RAM) yeyotgan eng yuqori 10 ta jarayonni ekranga chiqarish"
      },
      {
        "cmd": "cat /var/log/nginx/access.log | awk '{print $1}' | sort | uniq -c | sort -nr | head -n 5",
        "desc": "Saytga eng ko'p so'rov yuborgan eng faol 5 ta IP manzilni aniqlash"
      }
    ],
    "example": "cat /var/log/syslog | grep -i 'error' | tail -n 20\n(Oxirgi 20 ta jiddiy xatolikni filtrlash)",
    "analogy": "Zavoddagi konveyer lentasi. Bir ishchi detalni qirqadi, ikkinchisi bo'yaydi, uchinchisi qutiga soladi. Har bir buyruq o'z ishini qilib keyingisiga uzatadi."
  },
  {
    "cmd": ">",
    "name": "STDOUT Truncate Redirection (Chiqishni Faylga Tozalab Yozish)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Terminal ekraniga chiqishi kerak bo'lgan matnni ko'rsatilgan faylga yo'naltiradi. Agar fayl diskda mavjud bo'lsa, uning ichidagi barcha eski ma'lumotlarni tozalab (0 bayt qilib), yangidan yozadi.",
    "syntax": "BUYRUQ > nishon_fayl.txt",
    "syntaxRules": "Format: BUYRUQ [PARAMETRLAR] > FAYL. > dan keyin darhol bo'sh joy bilan fayl nomi ko'rsatiladi.",
    "flags": [
      {
        "flag": ">",
        "desc": "Standart chiqishni (file descriptor 1) faylga tozalab yozish"
      }
    ],
    "combinations": [
      {
        "cmd": "cat /dev/null > /var/log/app.log",
        "desc": "Faylni o'chirmasdan uning hajmini 0 baytga tushirish (xizmat to'xtamasligi uchun)"
      },
      {
        "cmd": "echo 'PORT=8080' > .env",
        "desc": "Yangi toza .env konfiguratsiya fayli yaratish"
      }
    ],
    "example": "ls -la /var/log > barcha_loglar.txt\n(Katalog tarkibini toza faylga saqlash)",
    "analogy": "Daftarning eski yozilgan betini butunlay o'chirib, o'rniga yangi yozuv yozish."
  },
  {
    "cmd": ">>",
    "name": "STDOUT Append Redirection (Chiqishni Fayl Oxiriga Qo'shish)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Standart chiqish oqimini ko'rsatilgan faylning oxiriga yangi qator sifatida qo'shadi (mavjud eski ma'lumotlarga zarar yetkazmaydi).",
    "syntax": "BUYRUQ >> doimiy_log.txt",
    "syntaxRules": "DIQQAT: > o'rniga >> ishlatilmasa, barcha mavjud audit loglari yo'qolib ketadi!",
    "flags": [
      {
        "flag": ">>",
        "desc": "Standart chiqishni mavjud fayl oxiriga qo'shish (Append)"
      }
    ],
    "combinations": [
      {
        "cmd": "echo 'alias ll=\"ls -la\"' >> ~/.bashrc",
        "desc": "Foydalanuvchi profiliga yangi qulay alias qo'shish"
      },
      {
        "cmd": "date >> /var/log/healthcheck.log && curl -I https://api.mycorp.uz >> /var/log/healthcheck.log",
        "desc": "Server salomatligini har safar yangi yozuv qilib jurnalga kiritish"
      }
    ],
    "example": "echo \"$(date): Zaxiralash muvaffaqiyatli tugadi\" >> /var/log/backup.log",
    "analogy": "Kassaning chek lentasi: har bir yangi xarid oxiriga qo'shib boriladi, eskisi o'chirilmaydi."
  },
  {
    "cmd": "2>&1",
    "name": "Merge STDERR to STDOUT (Xatoliklar va Natijani Birlashtirish)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Linux tizimida fayl deskriptori 2 (STDERR) ni fayl deskriptori 1 (STDOUT) ga birlashtiradi. Bu orqali ham dastur natijasi, ham yuz bergan barcha xatoliklar bitta umumiy log fayliga yoki bitta quvurga yo'naltiriladi.",
    "syntax": "BUYRUQ > chiqish.log 2>&1",
    "syntaxRules": "Tartib qoidasi: Avval > fayl.log ko'rsatiladi, so'ngra 2>&1 yoziladi. Bash 4 da qisqartmasi: &> fayl.log",
    "flags": [
      {
        "flag": "2>",
        "desc": "Faqat xatoliklarni alohida faylga yo'naltirish (masalan 2> /dev/null)"
      },
      {
        "flag": "2>&1",
        "desc": "Xatoliklar deskriptorini standart chiqishga ulash"
      }
    ],
    "combinations": [
      {
        "cmd": "/usr/local/bin/backup.sh > /var/log/backup.log 2>&1",
        "desc": "Cron vazifasining barcha natija va xatoliklarini bitta logda to'plash"
      },
      {
        "cmd": "find / -name 'mysecret.txt' 2> /dev/null",
        "desc": "Faylni qidirishda barcha 'Permission denied' xatoliklarini yashirish"
      }
    ],
    "example": "crontab -e da: 0 2 * * * /backup.sh > /var/log/backup.log 2>&1",
    "analogy": "Ikkita alohida quvurni bitta umumiy trubaga ulash, shunda suv ham, loy ham bitta hovuzga borib quyiladi."
  },
  {
    "cmd": "xargs",
    "name": "Extended Arguments Converter (Oqimni Buyruq Argumentiga Aylantirish)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Quvurdan kelayotgan satrlar yoki ro'yxatni qabul qilib, ularni keyingi buyruqning chaqiruv parametrlari qatoriga (command arguments) aylantirib beradi.",
    "syntax": "BUYRUQ1 | xargs [BAYROQLAR] BUYRUQ2",
    "syntaxRules": "Bo'sh joyli fayl nomlari uchun: find -print0 | xargs -0 rm -f formatidan foydalaning.",
    "flags": [
      {
        "flag": "-I {}",
        "desc": "Har bir parametr o'rnini {} belgisi orqali belgilash"
      },
      {
        "flag": "-0",
        "desc": "Null bayt (\\0) bilan ajratilgan nomlarni xavfsiz qabul qilish (bo'sh joyli fayllar uchun)"
      },
      {
        "flag": "-n 1",
        "desc": "Har bir argument uchun buyruqni alohida bittalab chaqirish"
      }
    ],
    "combinations": [
      {
        "cmd": "find . -name '*.tmp' | xargs rm -f",
        "desc": "Topilgan barcha .tmp fayllarni rm buyrug'iga uzatib bittada o'chirish"
      },
      {
        "cmd": "docker ps -a -q | xargs docker rm",
        "desc": "To'xtagan barcha Docker konteynerlarini bitta buyruq bilan tozalash"
      },
      {
        "cmd": "cat urls.txt | xargs -n 1 -P 4 curl -O",
        "desc": "Fayldagi manzillarni 4 ta parallel oqimda yuklab olish"
      }
    ],
    "example": "grep -l 'PASSWORD' /var/www/*.php | xargs chmod 600",
    "analogy": "Pochtachi quvurdan kelgan xatlarni bittalab emas, hammasini qopga solib avtomobilga yuklaydi."
  },
  {
    "cmd": "tee",
    "name": "T-splitter for Streams (Oqimni Ekranga ham, Faylga ham Yozish)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Quvur ichida T-shaklidagi ajratuvchi bo'lib xizmat qiladi: ma'lumotni ham terminal ekranida ko'rsatadi, ham bir yoki bir nechta faylga saqlaydi.",
    "syntax": "BUYRUQ | tee [BAYROQ] FAYL",
    "syntaxRules": "Mavjud faylni ustiga yozmasdan oxiriga qo'shish uchun doim -a bayrog'i berilishi shart.",
    "flags": [
      {
        "flag": "-a",
        "desc": "Append rejimi: fayl oxiriga qo'shish"
      }
    ],
    "combinations": [
      {
        "cmd": "ping 8.8.8.8 | tee ping_results.log",
        "desc": "Tarmoq tekshiruvini ham ekranda ko'rish, ham faylga yozib borish"
      },
      {
        "cmd": "echo 'deb http://...' | sudo tee /etc/apt/sources.list.d/app.list",
        "desc": "Root ruxsati bilan tizim papkasiga xavfsiz yangi repo qo'shish"
      }
    ],
    "example": "apt-get update | tee apt_update.log",
    "analogy": "Suv trubasidagi T-quloq (troynik): suv ham kran orqali to'g'riga oqadi, ham yon truba orqali bochkaga quyiladi."
  },
  {
    "cmd": "$()",
    "name": "Command Substitution (Subshell Ichida Buyruq Bajarish)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Qavs ichidagi buyruqni alohida subshell jarayonida bajaradi va uning natijasini tashqi buyruqning parametri sifatida joylashtiradi.",
    "syntax": "BUYRUQ $(ICHKI_BUYRUQ)",
    "syntaxRules": "Eski uslubdagi `buyruq` (backticks) o'rniga har doim $(buyruq) ishlatilishi tavsiya etiladi (chunki qavslar ichma-ich joylashishi mumkin: $(cmd1 $(cmd2))).",
    "flags": [
      {
        "flag": "$()",
        "desc": "Ichki buyruq natijasini qiymat sifatida olish"
      }
    ],
    "combinations": [
      {
        "cmd": "kill -9 $(pgrep nginx)",
        "desc": "Nginx ning barcha PID raqamlarini subshell da aniqlab, kill ga uzatish"
      },
      {
        "cmd": "tar -czvf /backup/app-$(date +%F).tar.gz /var/www",
        "desc": "Arxiv fayl nomiga avtomatik bugungi sanani qo'yish"
      }
    ],
    "example": "echo \"Serverda jami $(who | wc -l) ta foydalanuvchi onlayn turibdi.\"",
    "analogy": "Hisob-kitobdagi qavs: (2 + 2) avval hisoblanadi, so'ngra uning natijasi 4 tashqi amalda ishlatiladi."
  },
  {
    "cmd": "&&",
    "name": "Logical AND (Mantiqiy VA — Zanjirli Ishga Tushirish)",
    "cat": "combos",
    "catName": "⚡ Quvurlar & Kombinatsiyalar",
    "desc": "Chapdagi buyruq muvaffaqiyatli (exit code 0) yakunlangan taqdirdagina o'ngdagi buyruqni ishga tushiradi.",
    "syntax": "BUYRUQ1 && BUYRUQ2",
    "syntaxRules": "Agar BUYRUQ1 xato bersa, BUYRUQ2 umuman ishga tushmaydi. Bu orqali xavfli amallar oldi olinadi.",
    "flags": [
      {
        "flag": "&&",
        "desc": "Oldingi buyruq exit-code 0 bo'lsa davom etish"
      }
    ],
    "combinations": [
      {
        "cmd": "mkdir -p /srv/project && cd /srv/project",
        "desc": "Papka ochilsagina uning ichiga kirish"
      },
      {
        "cmd": "gcc main.c -o app && ./app",
        "desc": "Kompilatsiya muvaffaqiyatli o'tsagina dasturni ishga tushirish"
      },
      {
        "cmd": "apt update && apt upgrade -y",
        "desc": "Paketlar ro'yxati yangilangandagina tizimni yangilash"
      }
    ],
    "example": "make && sudo make install",
    "analogy": "Xavfsizlik yo'lagi: birinchi eshik ochilsagina ikkinchi eshikka o'tish mumkin."
  },
  {
    "cmd": "pwd",
    "name": "Print Working Directory (Joriy Katalogni Ko'rsatish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Terminalda ayni daqiqada qaysi to'liq absolyut yo'lda (papka ichida) turganingizni chiqaradi.",
    "syntax": "pwd [BAYROQLAR]",
    "flags": [
      {
        "flag": "-L",
        "desc": "Mantiqiy yo'lni chiqarish (simvolik havolalar hisobga olinadi)"
      },
      {
        "flag": "-P",
        "desc": "Fizik real yo'lni chiqarish (barcha simvolik havolalarni ochib beradi)"
      }
    ],
    "example": "pwd\n/home/student",
    "analogy": "Xaritadagi 'Siz hozir shu yerdasiz' qizil belgisi. Serverda adashib qolmaslik uchun har doim birinchi bo'lib teriladigan buyruq."
  },
  {
    "cmd": "ls",
    "name": "List Directory Contents (Katalog Tarkibini Ko'rish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Katalog ichidagi fayl va jildlar ro'yxatini, ularning huquqlari, inodelari va hajmini ko'rsatadi.",
    "syntax": "ls [BAYROQLAR] [MANZIL]",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha fayllarni, jumladan nuqta bilan boshlanuvchi yashirin (.bashrc) fayllarni ko'rsatish"
      },
      {
        "flag": "-l",
        "desc": "Uzoq format: ruxsatlar, bog'lamlar soni, egasi, hajmi va sanasi bilan ko'rsatish"
      },
      {
        "flag": "-h",
        "desc": "Inson tushunadigan o'lchov birliklarida (K, M, G) chiqarish (-l bilan birga)"
      },
      {
        "flag": "-i",
        "desc": "Har bir faylning Inode (identifikatsiya) raqamini chiqarish"
      },
      {
        "flag": "-R",
        "desc": "Rekursiv ravishda barcha ichki papkalarni ham chiqarish"
      },
      {
        "flag": "-t",
        "desc": "O'zgartirilgan vaqti bo'yicha tartiblash (eng yangilari yuqorida)"
      }
    ],
    "example": "ls -lai /home/student\n10027 -rw-r--r-- 2 student student 4096 Oct 15 05:00 data.txt",
    "analogy": "Do'kondagi peshtaxtani ko'zdan kechirish. -l har bir mahsulot narxi va ishlab chiqarilgan sanasini ko'rsatadi, -i esa shtrix-kodini (inode) ko'rsatadi."
  },
  {
    "cmd": "cd",
    "name": "Change Directory (Ishchi Katalogni O'zgartirish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Joriy papkadan boshqa papkaga o'tish uchun xizmat qiladi.",
    "syntax": "cd [MANZIL]",
    "flags": [
      {
        "flag": "~",
        "desc": "Foydalanuvchining uy katalogiga (/home/user) o'tish"
      },
      {
        "flag": "..",
        "desc": "Bitta yuqori darajadagi ota papkaga qaytish"
      },
      {
        "flag": "-",
        "desc": "Oldingi turgan katalogga qaytish"
      },
      {
        "flag": "/",
        "desc": "Ildiz (root) katalogiga o'tish"
      }
    ],
    "example": "cd /var/log && pwd\n/var/log",
    "analogy": "Bino ichida xonadan xonaga o'tish. cd .. eshikdan chiqib koridorga qaytish bilan barobar."
  },
  {
    "cmd": "mkdir",
    "name": "Make Directory (Yangi Papka Yaratish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayl tizimida yangi papkalar (kataloglar) hosil qiladi.",
    "syntax": "mkdir [BAYROQLAR] PAPKA_NOMI",
    "flags": [
      {
        "flag": "-p",
        "desc": "Zarur bo'lsa barcha oraliq (ota) papkalarni bir vaqtda yaratish (parents)"
      },
      {
        "flag": "-m",
        "desc": "Yaratilayotgan papkaga darhol maxsus ruxsat o'rnatish (masalan: -m 755)"
      },
      {
        "flag": "-v",
        "desc": "Har bir yaratilgan papka haqida xabar chiqarish (verbose)"
      }
    ],
    "example": "mkdir -p /home/student/projects/os/lab1",
    "analogy": "Arxivda yangi quti yoki javon ochish. -p bayrog'i esa javon yo'q bo'lsa uni ham birvarakayiga yasab berishdir."
  },
  {
    "cmd": "rmdir",
    "name": "Remove Empty Directory (Bo'sh Papkani O'chirish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Faqatgina bo'sh bo'lgan papkalarni xavfsiz o'chirish uchun mo'ljallangan.",
    "syntax": "rmdir [BAYROQLAR] PAPKA_NOMI",
    "flags": [
      {
        "flag": "-p",
        "desc": "Bo'sh bo'lib qolgan ota papkalarni ham rekursiv o'chirish"
      },
      {
        "flag": "-v",
        "desc": "Har bir o'chirilgan papka haqida batafsil ma'lumot berish"
      }
    ],
    "example": "rmdir empty_folder/",
    "analogy": "Bo'shab qolgan qutini tashlab yuborish. Ichida bitta qalam bo'lsa ham xatolik berib tashlashdan to'xtatadi."
  },
  {
    "cmd": "touch",
    "name": "Touch / Update Timestamps (Fayl Yaratish yoki Vaqtini Yangilash)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Mavjud bo'lmagan bo'sh faylni hosil qiladi yoki mavjud faylning so'nggi kirish/o'zgarish vaqt tamg'asini yangilaydi.",
    "syntax": "touch [BAYROQLAR] FAYL_NOMI",
    "flags": [
      {
        "flag": "-a",
        "desc": "Faqat kirish (access) vaqtini o'zgartirish"
      },
      {
        "flag": "-m",
        "desc": "Faqat modifikatsiya (o'zgartirish) vaqtini o'zgartirish"
      },
      {
        "flag": "-c",
        "desc": "Fayl mavjud bo'lmasa uni yangidan yaratmaslik"
      },
      {
        "flag": "-d",
        "desc": "Maxsus sana/vaqt belgilash (masalan: touch -d 'yesterday' file)"
      }
    ],
    "example": "touch server.log",
    "analogy": "Daftarga bugungi sana shtampini bosish yoki bo'sh yangi daftar varag'ini ochish."
  },
  {
    "cmd": "rm",
    "name": "Remove Files or Directories (Fayl va Papkalarni O'chirish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayl tizimidan fayllar va kataloglarni doimiy ravishda o'chiradi (Linuxda savatcha/trash yo'q!).",
    "syntax": "rm [BAYROQLAR] NISHON",
    "flags": [
      {
        "flag": "-r, -R",
        "desc": "Rekursiv ravishda papka va uning barcha ichidagi narsalarini o'chirish"
      },
      {
        "flag": "-f",
        "desc": "Majburiy (force) o'chirish, tasdiq so'ramaslik va xatoliklarni yashirish"
      },
      {
        "flag": "-i",
        "desc": "Har bir faylni o'chirishdan oldin foydalanuvchidan tasdiq so'rash"
      }
    ],
    "example": "rm -rf /tmp/old_cache",
    "analogy": "Hujjatlarni maydalagichga (shredder) solish. rm -rf xuddi butun arxiv xonasini yondirib yuborishdek o'ta ehtiyotkorlik talab qiladi."
  },
  {
    "cmd": "cp",
    "name": "Copy Files and Directories (Nusxalash)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayllar va papkalardan yangi mustaqil nusxa yaratadi.",
    "syntax": "cp [BAYROQLAR] MANBA NISHON",
    "flags": [
      {
        "flag": "-r, -R",
        "desc": "Papkani barcha ichki elementlari bilan birga rekursiv nusxalash"
      },
      {
        "flag": "-p",
        "desc": "Faylning asl ruxsatlari, egasi va vaqt tamg'alarini saqlab qolish (preserve)"
      },
      {
        "flag": "-a",
        "desc": "Arxiv rejimi (-rpP barchasini o'z ichiga oladi)"
      },
      {
        "flag": "-u",
        "desc": "Faqat nishondan yangiroq bo'lgan manba fayllarni yangilash (update)"
      }
    ],
    "example": "cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak",
    "analogy": "Hujjatdan kseronusxa olish. Yangi nusxa o'z inodiga ega bo'lib, asl faylga bog'liq bo'lmaydi."
  },
  {
    "cmd": "mv",
    "name": "Move / Rename Files (Ko'chirish yoki Qayta Nomlash)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayl yoki papkaning manzilini o'zgartiradi yoki uning nomini o'zgartiradi (bitta disk ichida Inode o'zgarmaydi!).",
    "syntax": "mv [BAYROQLAR] MANBA NISHON",
    "flags": [
      {
        "flag": "-i",
        "desc": "Mavjud faylni ustiga yozishdan oldin so'rash (interactive)"
      },
      {
        "flag": "-f",
        "desc": "So'rovsiz ustiga yozish (force)"
      },
      {
        "flag": "-n",
        "desc": "Mavjud fayllarni hech qachon almashtirmaslik (no-clobber)"
      }
    ],
    "example": "mv draft.txt final_report.txt",
    "analogy": "Daftarning muqovadagi sarlavhasini o'zgartirish yoki papkani boshqa xonaga eltib qo'yish. Hujjatning o'zi (inode) o'zgarmaydi."
  },
  {
    "cmd": "ln",
    "name": "Link Files (Bog'lamlar: Hard Link va Soft Link)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayllarga qattiq (hard link) yoki simvolik (soft/symlink) havolalar hosil qiladi.",
    "syntax": "ln [BAYROQLAR] MANBA NISHON",
    "flags": [
      {
        "flag": "-s",
        "desc": "Simvolik (Soft) havola yaratish (Windowsdagi yorliq/shortcut kabi)"
      },
      {
        "flag": "-f",
        "desc": "Mavjud nishon faylni majburiy almashtirish"
      },
      {
        "flag": "-v",
        "desc": "Har bir yaratilgan bog'lam haqida ma'lumot berish"
      }
    ],
    "example": "ln -s /var/log/nginx/access.log ~/my_logs.lnk\nln file.txt hardlink.txt",
    "analogy": "Hard link — bitta odamning ikki xil pasporti (bitta Inode raqami, bitta ma'lumot). Soft link (-s) — eshikka osilgan 'Shu xonaga kiring' degan ko'rsatkich."
  },
  {
    "cmd": "stat",
    "name": "File / File System Status (Inode va Metama'lumotlarni Ko'rish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Faylning Inode raqami, kirish huquqlari (oktal va harfli), o'lchami, bloklar soni, atime, mtime va ctime vaqtlarini to'liq chiqaradi.",
    "syntax": "stat [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-c",
        "desc": "Maxsus formatda ma'lumot olish (masalan: %i Inode, %a huquqlar)"
      },
      {
        "flag": "-f",
        "desc": "Faylning o'zi emas, u joylashgan butun fayl tizimi statistikasini ko'rsatish"
      }
    ],
    "example": "stat /etc/passwd\nInode: 1048576 Links: 1 Access: (0644/-rw-r--r--)",
    "analogy": "Faylning tibbiy varaqasi yoki shaxsiy guvohnomasi. Undagi barcha sir-asrorlar va metama'lumotlar ochib beriladi."
  },
  {
    "cmd": "file",
    "name": "Determine File Type (Fayl Tipini Anqlash)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayl nomining kengaytmasiga (.txt, .exe) aldanmasdan, uning dastlabki sehrli baytlari (magic bytes) orqali haqiqiy turini aniqlaydi.",
    "syntax": "file [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-b",
        "desc": "Qisqa rejim: fayl nomini chiqarmasdan faqat tipini ko'rsatish (brief)"
      },
      {
        "flag": "-i",
        "desc": "MIME formatida chiqarish (masalan: text/plain; charset=utf-8)"
      }
    ],
    "example": "file script.sh\nscript.sh: Bourne-Again shell script, ASCII text executable",
    "analogy": "Kimyoviy laboratoriya tekshiruvi. Dorining yorlig'iga qaramasdan, uning tarkibini tahlil qilib haqiqiy nimaligini aytib beradi."
  },
  {
    "cmd": "find",
    "name": "Search Files in Directory Hierarchy (Fayllarni Qidirish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayl tizimida nomi, hajmi, egasi, inodelari, ruxsatlari va vaqtiga ko'ra chuqur real-vaqtli qidiruv olib boradi.",
    "syntax": "find [QIDIRUV_MANZILI] [MEZONLAR] [AMALLAR]",
    "flags": [
      {
        "flag": "-name",
        "desc": "Fayl nomi bo'yicha qidirish (katta-kichik harfga sezgir)"
      },
      {
        "flag": "-iname",
        "desc": "Harf registrini hisobga olmasdan qidirish"
      },
      {
        "flag": "-type",
        "desc": "Fayl turi bo'yicha: f (oddiy fayl), d (papka), l (symlink)"
      },
      {
        "flag": "-size",
        "desc": "Hajmi bo'yicha: +100M (100MB dan katta), -5k (5KB dan kichik)"
      },
      {
        "flag": "-mtime",
        "desc": "O'zgartirilgan kunlari bo'yicha (-7 so'nggi 7 kunda)"
      },
      {
        "flag": "-inum",
        "desc": "Aynan ma'lum bir Inode raqamiga ega faylni topish"
      },
      {
        "flag": "-exec",
        "desc": "Topilgan har bir fayl ustida buyruq bajarish (-exec rm {} \\;)"
      }
    ],
    "example": "find /var/log -type f -name '*.log' -size +10M",
    "analogy": "Tergovchi yoki politsiyachi xizmat iti. Butun binodan berilgan belgilarga (bo'yi, kiyimi, yoshi) mos keluvchi odamni topib beradi.",
    "syntaxRules": "Format: find [QAYERDAN] [MEZONLAR] [AMAL]. Har doim qidiruv manzili birinchi ko'rsatiladi.",
    "combinations": [
      {
        "cmd": "find /var/log -type f -name '*.log' -mtime +30 -exec gzip {} +",
        "desc": "30 kundan eski barcha loglarni avtomatik siqish"
      },
      {
        "cmd": "find /tmp -type f -size +100M -delete",
        "desc": "100MB dan oshgan vaqtincha fayllarni diskdan tozalash"
      },
      {
        "cmd": "find . -name '*.bak' | xargs rm -f",
        "desc": "Zaxira fayllarni xargs orqali bittada o'chirish"
      }
    ]
  },
  {
    "cmd": "locate",
    "name": "Find Files by Name Database (Tezkor Indekslangan Qidiruv)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Diskni to'liq aylanmasdan, oldindan tuzilgan ma'lumotlar bazasi (mlocate.db) orqali faylni millisekundlarda topadi.",
    "syntax": "locate [BAYROQLAR] NAQSH",
    "flags": [
      {
        "flag": "-i",
        "desc": "Katta-kichik harflarni farqlamaslik (ignore case)"
      },
      {
        "flag": "-n",
        "desc": "Chiqariladigan natijalar sonini cheklash (masalan: -n 5)"
      },
      {
        "flag": "-c",
        "desc": "Topilgan fayllar sonini chiqarish"
      }
    ],
    "example": "locate nginx.conf\n/etc/nginx/nginx.conf\n/usr/share/doc/nginx/examples/nginx.conf",
    "analogy": "Kutubxona katalog kartochkasi. Kitoblarni javonma-javon qidirmasdan, bazadagi ro'yxatdan bir zumda topish."
  },
  {
    "cmd": "which",
    "name": "Locate a Command Executable ($PATH Bo'ylab Qidirish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Terminalga buyruq yozilganda, $PATH muhit o'zgaruvchisidagi qaysi absolyut binary (/usr/bin/...) ishga tushishini ko'rsatadi.",
    "syntax": "which BUYRUQ_NOMI",
    "flags": [
      {
        "flag": "-a",
        "desc": "$PATH ichida topilgan barcha mos keluvchi ijrochi fayllarni chiqarish"
      }
    ],
    "example": "which bash\n/usr/bin/bash",
    "analogy": "Siz chaqirgan xodim qaysi xonada o'tirishini va qayerdan yugurib kelishini aniqlash."
  },
  {
    "cmd": "whereis",
    "name": "Locate Binary, Source, and Manual Pages (Hujjat va Dasturni Topish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Dasturning ijrochi binar fayli, manba kodi va qo'llanma (man page) sahifalari qayerda joylashganini ko'rsatadi.",
    "syntax": "whereis [BAYROQLAR] DASTUR",
    "flags": [
      {
        "flag": "-b",
        "desc": "Faqat binary (ijro fayli) qismini qidirish"
      },
      {
        "flag": "-m",
        "desc": "Faqat man qo'llanmalari bo'limini qidirish"
      }
    ],
    "example": "whereis tar\ntar: /usr/bin/tar /usr/include/tar.h /usr/share/man/man1/tar.1.gz",
    "analogy": "Mahsulotning o'zini, pasportini va ishlab chiqaruvchi zavod manzilini birdaniga topish."
  },
  {
    "cmd": "tree",
    "name": "List Directory Contents as a Tree (Daraxtsimon Ierarxiya)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Katalog va fayllar ierarxiyasini chiroyli grafik daraxt shaklida terminalga chiqaradi.",
    "syntax": "tree [BAYROQLAR] [MANZIL]",
    "flags": [
      {
        "flag": "-L N",
        "desc": "Daraxt chuqurligini N qavatgacha cheklash (level)"
      },
      {
        "flag": "-d",
        "desc": "Faqat papkalarni ko'rsatish, fayllarni yashirish"
      },
      {
        "flag": "-a",
        "desc": "Yashirin fayllarni ham chiqarish"
      }
    ],
    "example": "tree -L 2 /home/student",
    "analogy": "Kompaniya tashkiliy tuzilmasining shajarasi (organizational chart)."
  },
  {
    "cmd": "basename",
    "name": "Strip Directory and Suffix from Filenames (Fayl Nomini Ajratish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "To'liq yo'ldan (path) faqat faylning toza nomini ajratib oladi.",
    "syntax": "basename YO'L [QO'SHIMCHA]",
    "flags": [
      {
        "flag": "-a",
        "desc": "Bir nechta argumentlarni bir vaqtda qabul qilish"
      }
    ],
    "example": "basename /usr/local/bin/python3\npython3",
    "analogy": "Odamning to'liq pasport ma'lumotidan faqat ismini ajratib aytish."
  },
  {
    "cmd": "dirname",
    "name": "Strip Last Component from File Name (Papkaning Yo'lini Olish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Fayl joylashgan ota katalogning yo'lini qaytaradi.",
    "syntax": "dirname YO'L",
    "flags": [],
    "example": "dirname /etc/nginx/nginx.conf\n/etc/nginx",
    "analogy": "Xat yuboruvchining manzilidagi xonadon raqamini olib tashlab, shahar va ko'cha nomini qoldirish."
  },
  {
    "cmd": "realpath",
    "name": "Print Resolved Absolute Path (To'liq Haqiqiy Yo'l)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Nisbiy yo'llar (../, ./) va barcha simvolik havolalarni (symlinks) haqiqiy fizik absolyut yo'lga aylantiradi.",
    "syntax": "realpath [BAYROQLAR] YO'L",
    "flags": [
      {
        "flag": "-e",
        "desc": "Fayl mavjud bo'lishi shartligini tekshirish"
      },
      {
        "flag": "-q",
        "desc": "Xatoliklar chiqarmaslik (quiet)"
      }
    ],
    "example": "realpath ../../var/log\n/var/log",
    "analogy": "Taxallus yoki qisqartma nomning haqiqiy rasmiy yuridik nomini topish."
  },
  {
    "cmd": "cat",
    "name": "Concatenate and Display Files (Fayl Tarkibini Chiqarish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Bir yoki bir nechta fayl ichidagi matnni terminalga chiqaradi yoki ularni bir-biriga ulaydi.",
    "syntax": "cat [BAYROQLAR] [FAYLLAR]",
    "flags": [
      {
        "flag": "-n",
        "desc": "Barcha qatorlarni 1 dan boshlab raqamlash"
      },
      {
        "flag": "-b",
        "desc": "Faqat bo'sh bo'lmagan qatorlarni raqamlash"
      },
      {
        "flag": "-A",
        "desc": "Ko'rinmas belgilarni (tab, qator oxiri $) ko'rsatish"
      }
    ],
    "example": "cat /etc/issue\nDebian GNU/Linux 12 \\n \\l",
    "analogy": "Kitob sahifasini ochib ovoz chiqarib o'qib berish.",
    "syntaxRules": "Format: cat [BAYROQLAR] [FAYL...]. Quvurlarda foydalanilganda: cat fayl | filtr.",
    "combinations": [
      {
        "cmd": "cat /etc/passwd | awk -F: '{print $1, $6}'",
        "desc": "Barcha foydalanuvchilar va ularning uy papkalarini chiqarish"
      },
      {
        "cmd": "cat part1.txt part2.txt > full.txt",
        "desc": "Ikki qism faylni bitta butun faylga birlashtirish"
      }
    ]
  },
  {
    "cmd": "tac",
    "name": "Concatenate and Print in Reverse (Teskari Qatorlarda Chiqarish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Fayl qatorlarini oxirgi qatordan boshlab birinchi qatorgacha teskari tartibda chiqaradi (cat ning aksi).",
    "syntax": "tac [FAYL]",
    "flags": [],
    "example": "tac /var/log/boot.log",
    "analogy": "Gazetani eng so'nggi sahifasidan boshlab orqaga qarab o'qish."
  },
  {
    "cmd": "head",
    "name": "Output First Part of Files (Dastlabki Qatorlarni Ko'rish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Faylning boshidagi dastlabki bir necha qatorni (sukut bo'yicha 10 ta) ko'rsatadi.",
    "syntax": "head [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-n N",
        "desc": "Aynan N ta dastlabki qatorni chiqarish (masalan: -n 5)"
      },
      {
        "flag": "-c N",
        "desc": "Dastlabki N ta baytni chiqarish"
      }
    ],
    "example": "head -n 5 /etc/passwd",
    "analogy": "Gazetaning bosh maqolasi va sarlavhalarini ko'zdan kechirish."
  },
  {
    "cmd": "tail",
    "name": "Output Last Part of Files (Oxirgi Qatorlar va Jonli Loglar)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Faylning oxiridagi qatorlarni chiqaradi. -f bayrog'i server loglarini jonli (real-vaqt) kuzatish uchun asosiy quroldir.",
    "syntax": "tail [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-n N",
        "desc": "Oxirgi N ta qatorni chiqarish (masalan: -n 20)"
      },
      {
        "flag": "-f",
        "desc": "Faylga yangi qatorlar qo'shilganda ularni jonli ekranga chiqarib turish (follow)"
      },
      {
        "flag": "-F",
        "desc": "Fayl qayta yaratilsa (logrotate) ham kuzatishda davom etish"
      }
    ],
    "example": "tail -f /var/log/nginx/access.log",
    "analogy": "Kassadagi chek apparatini kuzatish. Har bir yangi xarid paydo bo'lishi bilan lenta pastga uzayib boradi."
  },
  {
    "cmd": "less",
    "name": "Opposite of More / Interactive Pager (Qulay Matn Ko'rgich)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Katta fayllarni xotirani to'ldirmasdan sahifama-sahifa o'qish, yuqoriga/pastga siljish va ichidan qidirish (/pattern) imkonini beradi.",
    "syntax": "less FAYL",
    "flags": [
      {
        "flag": "-N",
        "desc": "Qator raqamlarini chiqarish"
      },
      {
        "flag": "-S",
        "desc": "Uzun qatorlarni pastga tushirmasdan kesish (chop long lines)"
      }
    ],
    "example": "less /var/log/syslog",
    "analogy": "Elektron kitob o'quvchi (Kindle). 1000 betlik kitobni varaqlash, qidirish va istalgan joyiga sakrash mumkin."
  },
  {
    "cmd": "more",
    "name": "File Page by Page Filter (Oddiy Sahifalash)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Matnni faqat oldinga qarab sahifama-sahifa chiqaruvchi sodda klassik vosita.",
    "syntax": "more FAYL",
    "flags": [
      {
        "flag": "-d",
        "desc": "Foydalanuvchiga yordamchi tugmalar ko'rsatmasini berish"
      }
    ],
    "example": "more large_text.txt",
    "analogy": "Varaqlari faqat oldinga ochiladigan, orqaga qaytib bo'lmaydigan qadimgi qo'lyozma."
  },
  {
    "cmd": "grep",
    "name": "Global Regular Expression Print (Matn Ichidan Qidirish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Fayllar yoki quvur (pipe) ichidan berilgan so'z yoki muntazam ifoda (regex) ga mos keluvchi qatorlarni topib chiqaradi.",
    "syntax": "grep [BAYROQLAR] 'NAQSH' [FAYL]",
    "flags": [
      {
        "flag": "-i",
        "desc": "Harflar registrini (katta/kichik) farqlamaslik (ignore case)"
      },
      {
        "flag": "-v",
        "desc": "Inversiya: mos KELMAGAN qatorlarni chiqarish (invert match)"
      },
      {
        "flag": "-r, -R",
        "desc": "Barcha ichki papkalardagi fayllarni rekursiv qidirish"
      },
      {
        "flag": "-n",
        "desc": "Mos kelgan qator raqamini ham ko'rsatish"
      },
      {
        "flag": "-c",
        "desc": "Faqat mos kelgan qatorlar sonini chiqarish"
      },
      {
        "flag": "-E",
        "desc": "Kengaytirilgan muntazam ifodalar (ERE) rejimi (egrep)"
      },
      {
        "flag": "-o",
        "desc": "Butun qatorni emas, faqat mos kelgan bo'lagini chiqarish"
      }
    ],
    "example": "grep -i 'error' /var/log/syslog | grep -v 'debug'",
    "analogy": "Lug'atdan yoki kitobdan qalam bilan kerakli so'zlarni sariq marker bilan ajratib ko'rsatish.",
    "syntaxRules": "Parametrlar tartibi: grep [BAYROQLAR] 'SHABLON' [FAYLLAR...]. Shablon har doim bittalik qo'shtirnoq ichiga olinishi shart.",
    "combinations": [
      {
        "cmd": "cat /var/log/syslog | grep -i 'error' | tail -n 20",
        "desc": "Tizim loglaridan oxirgi 20 ta xatolikni filtrlash"
      },
      {
        "cmd": "ps aux | grep node | grep -v grep | awk '{print $2}'",
        "desc": "Node.js jarayonining aniq PID raqamini topish"
      },
      {
        "cmd": "grep -rnw '/var/www' -e 'DB_PASSWORD'",
        "desc": "Loyiha ichidagi barcha fayllardan maxfiy kalitni rekursiv qidirish"
      }
    ]
  },
  {
    "cmd": "sed",
    "name": "Stream Editor (Oqimli Matn Tahrirchisi)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Matn oqimi ustida qatorma-qator qidirish, almashtirish (substitute), o'chirish va o'zgartirishlarni avtomatlashtiradi.",
    "syntax": "sed [BAYROQLAR] 'BUYRUQ' FAYL",
    "flags": [
      {
        "flag": "-i",
        "desc": "Faylni to'g'ridan-to'g'ri joyida (in-place) o'zgartirib saqlash"
      },
      {
        "flag": "-e",
        "desc": "Bir nechta sed amallarini ketma-ket bajarish"
      },
      {
        "flag": "-n",
        "desc": "Standart chiqarishni bostirish (faqat 'p' buyrug'i bilan ko'rsatish)"
      }
    ],
    "example": "sed -i 's/8080/80/g' /etc/nginx/sites-available/default",
    "analogy": "Word dasturidagi 'Topish va almashtirish' (Ctrl+H) tugmasining super-tezkor avtomatlashgan terminal versiyasi."
  },
  {
    "cmd": "awk",
    "name": "Pattern Scanning and Processing Language (Matn va Jadval Dasturlash Tili)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Matn fayllarini ustunlar (maydonlar $1, $2...) bo'yicha tahlil qilish, matematik hisob-kitoblar va hisobotlar tuzish uchun qudratli vosita.",
    "syntax": "awk [BAYROQLAR] 'SHART {AMAL}' FAYL",
    "flags": [
      {
        "flag": "-F 'AJRATUVCHI'",
        "desc": "Ustunlar ajratuvchisini belgilash (masalan: -F ':' /etc/passwd uchun)"
      },
      {
        "flag": "-v O'ZGARUVCHI=QIYMAT",
        "desc": "Awk ichiga tashqi o'zgaruvchi uzatish"
      }
    ],
    "example": "awk -F':' '{print $1, $3}' /etc/passwd",
    "analogy": "Excel jadvalidan faqat A va C ustunlarini ajratib olib, ularning yig'indisini hisoblab beruvchi aqlli dasturchi.",
    "syntaxRules": "Format: awk -F[AJRATUVCHI] '{shart; print $ustun}' FAYL. Har doim bittalik qo'shtirnoq ishlatiladi.",
    "combinations": [
      {
        "cmd": "cat /etc/passwd | awk -F: '$3 >= 1000 {print $1, $3, $6}'",
        "desc": "Faqat oddiy foydalanuvchilar (UID >= 1000) ro'yxatini chiqarish"
      },
      {
        "cmd": "awk '{sum += $1} END {print \"Jami yig'indi:\", sum}' raqamlar.txt",
        "desc": "Ustundagi barcha sonlarning umumiy yig'indisini hisoblash"
      }
    ]
  },
  {
    "cmd": "cut",
    "name": "Remove Sections from Each Line (Ustunlarni Qirqib Olish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Har bir qatordan belgilangan maydonlar (fields) yoki baytlarni qirqib ajratib oladi.",
    "syntax": "cut [BAYROQLAR] [FAYL]",
    "flags": [
      {
        "flag": "-d 'BELGI'",
        "desc": "Maydonlar ajratuvchisini belgilash (delimiter, masalan: -d ':')"
      },
      {
        "flag": "-f RO'YXAT",
        "desc": "Aynan qaysi ustunlarni olish (masalan: -f 1,3 yoki -f 1-5)"
      },
      {
        "flag": "-c RO'YXAT",
        "desc": "Belgilar pozitsiyasi bo'yicha qirqish (characters)"
      }
    ],
    "example": "cut -d: -f1 /etc/passwd",
    "analogy": "Qaychi bilan jadvalning faqat kerakli ustunini qirqib olib, qolganini tashlab yuborish."
  },
  {
    "cmd": "sort",
    "name": "Sort Lines of Text Files (Matn Qatorlarini Tartiblash)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Matn qatorlarini alfavit yoki raqamlar bo'yicha, o'sish yoki kamayish tartibida joylashtiradi.",
    "syntax": "sort [BAYROQLAR] [FAYL]",
    "flags": [
      {
        "flag": "-n",
        "desc": "Raqamli qiymatlar bo'yicha tartiblash (1, 2, 10 tartibida, 1, 10, 2 emas)"
      },
      {
        "flag": "-r",
        "desc": "Teskari (kamayish) tartibda saralash (reverse)"
      },
      {
        "flag": "-k N",
        "desc": "Aynan N-ustun bo'yicha saralash"
      },
      {
        "flag": "-u",
        "desc": "Faqat takrorlanmas noyob qatorlarni qoldirish (unique)"
      }
    ],
    "example": "du -sh * | sort -h -r",
    "analogy": "Talabalar ro'yxatini baholari yoki familiyalari bo'yicha alfavit tartibiga keltirish.",
    "syntaxRules": "Format: sort [BAYROQLAR] FAYL. Raqamlar uchun -n, teskari uchun -r.",
    "combinations": [
      {
        "cmd": "cat log.txt | sort | uniq -c | sort -nr",
        "desc": "Eng ko'p takrorlangan qatorlarni kamayish tartibida saralab sanash"
      }
    ]
  },
  {
    "cmd": "uniq",
    "name": "Report or Omit Repeated Lines (Takrorlangan Qatorlarni Filtrlash)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Ketma-ket kelgan bir xil takroriy qatorlarni olib tashlaydi yoki ularning sonini hisoblaydi (ishlashdan oldin sort qilinishi kerak!).",
    "syntax": "uniq [BAYROQLAR] [KIRISH [CHIQISH]]",
    "flags": [
      {
        "flag": "-c",
        "desc": "Har bir qator necha marta takrorlanganini hisoblab yoniga yozish (count)"
      },
      {
        "flag": "-d",
        "desc": "Faqat takrorlangan (dublikat) qatorlarni ko'rsatish"
      },
      {
        "flag": "-u",
        "desc": "Faqat mutlaqo takrorlanmagan yakka qatorlarni ko'rsatish"
      }
    ],
    "example": "cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr",
    "analogy": "Bir xil tovarlardan faqat bittasini qoldirib, qolgan nusxalarini olib tashlash."
  },
  {
    "cmd": "tr",
    "name": "Translate or Delete Characters (Belgilarni Almashtirish/O'chirish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Standart kiritish oqimidagi belgilarni boshqa belgilarga almashtiradi, katta-kichik qiladi yoki o'chiradi.",
    "syntax": "tr [BAYROQLAR] TO'PLAM1 [TO'PLAM2]",
    "flags": [
      {
        "flag": "-d",
        "desc": "TO'PLAM1 da ko'rsatilgan belgilarni butunlay o'chirib tashlash (delete)"
      },
      {
        "flag": "-s",
        "desc": "Ketma-ket takrorlangan belgilarni bittaga qisqartirish (squeeze)"
      }
    ],
    "example": "echo 'hello world' | tr 'a-z' 'A-Z'\nHELLO WORLD",
    "analogy": "Matndagi barcha nuqtalarni vergulga yoki barcha kichik harflarni bosh harfga bir zumda aylantirish."
  },
  {
    "cmd": "wc",
    "name": "Word, Line, Character, Byte Count (Hisoblagich)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Fayl yoki quvurdagi qatorlar, so'zlar, belgilar va baytlar sonini aniq hisoblaydi.",
    "syntax": "wc [BAYROQLAR] [FAYL]",
    "flags": [
      {
        "flag": "-l",
        "desc": "Faqat qatorlar sonini chiqarish (lines) — skriptlarda eng ko'p ishlatiladi"
      },
      {
        "flag": "-w",
        "desc": "Faqat so'zlar sonini chiqarish (words)"
      },
      {
        "flag": "-c",
        "desc": "Faqat baytlar sonini chiqarish (bytes)"
      },
      {
        "flag": "-m",
        "desc": "Belgilar sonini chiqarish (characters)"
      }
    ],
    "example": "ps aux | wc -l\n142",
    "analogy": "Insho tekshirgich. Darsda talabaning necha so'z va necha qator yozganini sanab beradi."
  },
  {
    "cmd": "diff",
    "name": "Compare Files Line by Line (Farqlarni Aniqlash)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Ikki fayl orasidagi farqlarni qatorma-qator solishtirib ko'rsatadi.",
    "syntax": "diff [BAYROQLAR] FAYL1 FAYL2",
    "flags": [
      {
        "flag": "-u",
        "desc": "Unifikatsiyalangan (Git uslubidagi) qulay ko'rinishda chiqarish"
      },
      {
        "flag": "-y",
        "desc": "Ekranni ikkiga bo'lib yonma-yon ko'rsatish (side-by-side)"
      },
      {
        "flag": "-w",
        "desc": "Barcha probel va bo'shliqlarni e'tiborsiz qoldirish"
      }
    ],
    "example": "diff -u nginx.conf.old nginx.conf.new",
    "analogy": "Ikki shartnoma nusxasini chiroqqa tutib, qaysi so'zlar o'zgarganini solishtirish."
  },
  {
    "cmd": "cmp",
    "name": "Compare Two Files Byte by Byte (Baytma-bayt Solishtirish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Ikki binar yoki matnli faylni baytma-bayt solishtiradi va ilk uchragan farqning pozitsiyasini ko'rsatadi.",
    "syntax": "cmp [BAYROQLAR] FAYL1 FAYL2",
    "flags": [
      {
        "flag": "-l",
        "desc": "Farq qiluvchi barcha baytlar raqamini chiqarish"
      },
      {
        "flag": "-s",
        "desc": "Hech narsa chiqarmaslik, faqat chiqish kodi ($?) bilan javob berish"
      }
    ],
    "example": "cmp file1.bin file2.bin",
    "analogy": "Ikki nusxa faylning aynan bir xilligini tekshiruvchi MD5/hash nazorati kabi."
  },
  {
    "cmd": "strings",
    "name": "Find Printable Strings in Binary Files (Binar Fayldan Matn Ajratish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Ijrochi dastur, yadroli binar fayl yoki xotira dumpi ichidagi o'qilishi mumkin bo'lgan barcha matnlarni chiqaradi.",
    "syntax": "strings [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-n N",
        "desc": "Kamida N ta belgidan iborat so'zlarni qidirish (sukut bo'yicha 4)"
      }
    ],
    "example": "strings /usr/bin/sudo | grep 'PAM'",
    "analogy": "Qorong'i rudadan sof oltin donachalarini ajratib oluvchi magnit."
  },
  {
    "cmd": "paste",
    "name": "Merge Lines of Files (Fayllarni Yonma-Yon Birlashtirish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Bir nechta fayl qatorlarini vertikal emas, balki gorizontal ravishda yonma-yon ulaydi.",
    "syntax": "paste [BAYROQLAR] FAYLLAR...",
    "flags": [
      {
        "flag": "-d 'BELGI'",
        "desc": "Qatorlar orasiga qo'yiladigan ajratuvchini belgilash (masalan: -d ',')"
      },
      {
        "flag": "-s",
        "desc": "Ketma-ket bitta faylni bitta qatorga yoyish"
      }
    ],
    "example": "paste names.txt phones.txt",
    "analogy": "Ikki xil daftardagi ma'lumotlarni bitta jadvalga yonma-yon yopishtirish."
  },
  {
    "cmd": "split",
    "name": "Split a File into Pieces (Katta Faylni Bo'laklarga Bo'lish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Gigabaytlab katta fayllarni kichik qismlarga (qatorlar yoki megabaytlar bo'yicha) bo'lib beradi.",
    "syntax": "split [BAYROQLAR] FAYL [PREFIKS]",
    "flags": [
      {
        "flag": "-b N",
        "desc": "Har bir bo'lak hajmini belgilash (masalan: -b 100M)"
      },
      {
        "flag": "-l N",
        "desc": "Har bir bo'lak qatorlar sonini belgilash (masalan: -l 1000)"
      },
      {
        "flag": "-d",
        "desc": "Harflar o'rniga raqamli suffikslardan foydalanish"
      }
    ],
    "example": "split -b 50M backup.tar.gz backup_part_",
    "analogy": "Katta yuk mashinasiga sig'magan yukni bir nechta kichik avtomobillarga taqsimlab yuklash."
  },
  {
    "cmd": "chmod",
    "name": "Change File Mode Bits (Fayl Ruxsatlarini O'zgartirish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Fayl va kataloglar ustida O'qish (r=4), Yozish (w=2) va Ijro etish (x=1) huquqlarini belgilaydi.",
    "syntax": "chmod [BAYROQLAR] HUQUQ FAYL",
    "flags": [
      {
        "flag": "-R",
        "desc": "Rekursiv ravishda ichki barcha fayllar va papkalarga qo'llash"
      },
      {
        "flag": "755",
        "desc": "Egasi to'liq (rwx), guruh va boshqalar faqat o'qish va kirish (r-x)"
      },
      {
        "flag": "644",
        "desc": "Egasi o'qish-yozish (rw-), qolganlar faqat o'qish (r--)"
      },
      {
        "flag": "777",
        "desc": "Hamma uchun barcha ruxsatlar (xavfli!)"
      },
      {
        "flag": "+x",
        "desc": "Skriptga ijro etish huquqini qo'shish"
      },
      {
        "flag": "+t",
        "desc": "Sticky Bit o'rnatish (/tmp kabi, faqat fayl egasi o'chira oladi)"
      }
    ],
    "example": "chmod 755 deploy.sh && chmod +t /srv/shared_folder",
    "analogy": "Eshik qulfini almashtirish. 755 — uy egasiga to'liq kalit, mehmonlarga esa faqat ko'rish va o'tish ruxsati beradi.",
    "syntaxRules": "Format: chmod [BAYROQ] [REJIM: 755 / 644 / 1777] MANZIL. Rekursiv uchun -R ishlatiladi.",
    "combinations": [
      {
        "cmd": "chmod 1777 /srv/shared",
        "desc": "Sticky bit - har kim fayl yarata oladi, faqat egasi o'chira oladi"
      },
      {
        "cmd": "chmod 755 script.sh && ./script.sh",
        "desc": "Skriptga ijro ruxsatini berib, darhol ishga tushirish"
      },
      {
        "cmd": "find /var/www -type f -exec chmod 644 {} + && find /var/www -type d -exec chmod 755 {} +",
        "desc": "Veb-server uchun fayllarga 644, papkalarga 755 xavfsiz standart ruxsatlarini berish"
      }
    ]
  },
  {
    "cmd": "chown",
    "name": "Change File Owner and Group (Fayl Egasini O'zgartirish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Fayl yoki papkaning egasi (user) va guruhini (group) yangilaydi.",
    "syntax": "chown [BAYROQLAR] FOYDALANUVCHI[:GURUH] FAYL",
    "flags": [
      {
        "flag": "-R",
        "desc": "Rekursiv ravishda papka ichidagi barcha fayllarga o'rnatish"
      },
      {
        "flag": "-v",
        "desc": "O'zgargan har bir fayl haqida ma'lumot berish"
      }
    ],
    "example": "sudo chown -R www-data:www-data /var/www/html",
    "analogy": "Mulkdorlik guvohnomasini (kadastr) yangi egasining nomiga rasmiylashtirish."
  },
  {
    "cmd": "chgrp",
    "name": "Change Group Ownership (Fayl Guruhini O'zgartirish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Faylning qaysi guruhga tegishli ekanligini o'zgartiradi.",
    "syntax": "chgrp [BAYROQLAR] GURUH FAYL",
    "flags": [
      {
        "flag": "-R",
        "desc": "Rekursiv guruh o'zgartirish"
      }
    ],
    "example": "sudo chgrp developers /opt/project",
    "analogy": "Kompaniyadagi loyiha papkasini 'Marketing' bo'limidan 'Dasturchilar' bo'limi balansiga o'tkazish."
  },
  {
    "cmd": "umask",
    "name": "User File Creation Mask (Yangi Fayllar Maskasi)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Yangi yaratiladigan fayl va papkalardan qaysi ruxsatlar avtomatik olib tashlanishini belgilaydi (maksimal 666 va 777 dan ayriladi).",
    "syntax": "umask [MASKA]",
    "flags": [
      {
        "flag": "-S",
        "desc": "Maskani ramziy ko'rinishda ko'rish (masalan: u=rwx,g=rx,o=rx)"
      }
    ],
    "example": "umask 022\n# Yangi fayl 666-022=644 bo'ladi, papka esa 777-022=755",
    "analogy": "Yangi tug'ilgan hujjatga davlat standarti bo'yicha sukut bo'yicha qo'yiladigan cheklovlar filtri."
  },
  {
    "cmd": "useradd",
    "name": "Create a New User (Yangi Foydalanuvchi Yaratish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Linux tizimida yangi foydalanuvchi akkauntini hosil qiladi.",
    "syntax": "useradd [BAYROQLAR] FOYDALANUVCHI",
    "flags": [
      {
        "flag": "-m",
        "desc": "Foydalanuvchiga /home da shaxsiy uy papkasini yaratish"
      },
      {
        "flag": "-s SHELL",
        "desc": "Sukut bo'yicha shellni belgilash (masalan: -s /bin/bash)"
      },
      {
        "flag": "-g GURUH",
        "desc": "Asosiy birlamchi guruhni belgilash"
      },
      {
        "flag": "-G GURUHLAR",
        "desc": "Qo'shimcha ikkilamchi guruhlar ro'yxati (masalan: -G sudo,docker)"
      }
    ],
    "example": "sudo useradd -m -s /bin/bash -G sudo devops_user",
    "analogy": "Universitetga yangi talaba qabul qilib, unga talabalik guvohnomasi va yotoqxona xonasi ajratish."
  },
  {
    "cmd": "usermod",
    "name": "Modify a User Account (Foydalanuvchini Tahrirlash)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Mavjud foydalanuvchining guruhlari, boshlang'ich katalogi yoki shellini o'zgartiradi.",
    "syntax": "usermod [BAYROQLAR] FOYDALANUVCHI",
    "flags": [
      {
        "flag": "-aG GURUH",
        "desc": "Eski guruhlarini o'chirmasdan yangi guruhga qo'shish (append group)"
      },
      {
        "flag": "-s SHELL",
        "desc": "Yangi standart shell tayinlash"
      },
      {
        "flag": "-L",
        "desc": "Akkauntni vaqtincha bloklash (lock)"
      },
      {
        "flag": "-U",
        "desc": "Bloklangan akkauntni ochish (unlock)"
      }
    ],
    "example": "sudo usermod -aG docker student",
    "analogy": "Xodimning lavozimini oshirish va unga yangi xonalarga kirish uchun ruxsatnomalar qo'shib berish."
  },
  {
    "cmd": "userdel",
    "name": "Delete a User Account (Foydalanuvchini O'chirish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Tizimdan foydalanuvchi hisobini o'chiradi.",
    "syntax": "userdel [BAYROQLAR] FOYDALANUVCHI",
    "flags": [
      {
        "flag": "-r",
        "desc": "Foydalanuvchining uy papkasi (/home/user) va pochta qutisini ham o'chirish"
      }
    ],
    "example": "sudo userdel -r old_user",
    "analogy": "Ishdan bo'shatilgan xodimning profilini va uning barcha shaxsiy narsalarini tozalash."
  },
  {
    "cmd": "groupadd",
    "name": "Create a User Group (Yangi Guruh Yaratish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Tizimda foydalanuvchilarni umumiy huquqlar bilan birlashtirish uchun yangi guruh ochadi.",
    "syntax": "groupadd [BAYROQLAR] GURUH_NOMI",
    "flags": [
      {
        "flag": "-g GID",
        "desc": "Guruhga maxsus GID raqamini belgilash"
      }
    ],
    "example": "sudo groupadd devops",
    "analogy": "Kompaniyada yangi bo'lim yoki loyiha jamoasi tashkil qilish."
  },
  {
    "cmd": "passwd",
    "name": "Change User Password (Parolni O'zgartirish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Foydalanuvchining autentifikatsiya parolini o'zgartiradi (/etc/shadow yangilanadi).",
    "syntax": "passwd [FOYDALANUVCHI]",
    "flags": [
      {
        "flag": "-l",
        "desc": "Parolni bloklash (lock)"
      },
      {
        "flag": "-u",
        "desc": "Parolni blokdan chiqarish (unlock)"
      },
      {
        "flag": "-d",
        "desc": "Parolni butunlay olib tashlash (parolsiz kirish)"
      }
    ],
    "example": "passwd\nNew password:\nRetype new password:",
    "analogy": "Plastik karta PIN-kodini bankomatda yangilash."
  },
  {
    "cmd": "su",
    "name": "Substitute User Identity (Boshqa Foydalanuvchiga O'tish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Terminal seansida boshqa foydalanuvchi yoki root nomidan ishlash imkonini beradi.",
    "syntax": "su [BAYROQLAR] [FOYDALANUVCHI]",
    "flags": [
      {
        "flag": "-",
        "desc": "Foydalanuvchining to'liq muhitini (environment, $PATH, $HOME) yuklab o'tish (login shell)"
      }
    ],
    "example": "su - student",
    "analogy": "Boshqa xodimning kompyuteriga uning login-paroli bilan kirib ishlash."
  },
  {
    "cmd": "sudo",
    "name": "Execute a Command as Another User / Root (Superfoydalanuvchi Huquqi)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Oddiy foydalanuvchiga /etc/sudoers qoidalari asosida root nomidan xavfsiz va audit qilinadigan buyruq bajarishga ruxsat beradi.",
    "syntax": "sudo [BAYROQLAR] BUYRUQ",
    "flags": [
      {
        "flag": "-i",
        "desc": "Root foydalanuvchisining interaktiv login shellini ochish"
      },
      {
        "flag": "-u USER",
        "desc": "Root emas, aynan ko'rsatilgan foydalanuvchi nomidan buyruq bajarish"
      },
      {
        "flag": "-l",
        "desc": "Joriy foydalanuvchi qaysi buyruqlarni sudo orqali bajara olishini ko'rish"
      }
    ],
    "example": "sudo apt update && sudo systemctl restart nginx",
    "analogy": "Bosh direktorning maxsus muhrini vaqtincha ishlatish. Har bir harakat jurnalda (log) saqlanib qoladi."
  },
  {
    "cmd": "id",
    "name": "Print Real and Effective User and Group IDs (ID larni Ko'rish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Foydalanuvchining UID (User ID), GID (Group ID) va a'zo bo'lgan barcha guruhlarini chiqaradi.",
    "syntax": "id [FOYDALANUVCHI]",
    "flags": [
      {
        "flag": "-u",
        "desc": "Faqat UID raqamini chiqarish"
      },
      {
        "flag": "-g",
        "desc": "Faqat asosiy GID raqamini chiqarish"
      },
      {
        "flag": "-un",
        "desc": "Raqam o'rniga foydalanuvchi nomini chiqarish"
      }
    ],
    "example": "id\nuid=1000(student) gid=1000(student) groups=1000(student),27(sudo),998(docker)",
    "analogy": "Shaxsiy pasport va viza sahifalarini tekshirish."
  },
  {
    "cmd": "whoami",
    "name": "Print Effective User ID (Men Kimman?)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Ayni daqiqada qaysi foydalanuvchi akkaunti ostida buyruqlar bajarayotganingizni aniq chiqaradi.",
    "syntax": "whoami",
    "flags": [],
    "example": "whoami\nroot",
    "analogy": "Oynaga qarab kim ekanligingizni eslash."
  },
  {
    "cmd": "visudo",
    "name": "Edit the Sudoers File Safely (Sudoers Faylini Xavfsiz Tahrirlash)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "/etc/sudoers faylini sintaktik xatolarni tekshirgan holda ochadi. Sintaksisda xato bo'lsa saqlashga qo'ymaydi, bu esa tizimdan uzilib qolishdan asraydi.",
    "syntax": "sudo visudo",
    "flags": [
      {
        "flag": "-c",
        "desc": "Tahrirlamasdan faqat sintaksisni tekshirish (check only)"
      }
    ],
    "example": "sudo visudo",
    "analogy": "Konstitutsiyaga o'zgartirish kiritishdan oldin adliya ekspertizasidan o'tkazish."
  },
  {
    "cmd": "setfacl",
    "name": "Set File Access Control Lists (Kengaytirilgan Ruxsatlar O'rnatish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Standart Linux ruxsatlaridan (Owner/Group/Others) tashqari, ma'lum bir individual foydalanuvchiga alohida ruxsat berish imkonini beradi.",
    "syntax": "setfacl [BAYROQLAR] AMAL FAYL",
    "flags": [
      {
        "flag": "-m u:USER:rwx",
        "desc": "Ko'rsatilgan foydalanuvchiga alohida ruxsat berish (modify)"
      },
      {
        "flag": "-x u:USER",
        "desc": "Foydalanuvchining maxsus ACL huquqini olib tashlash"
      },
      {
        "flag": "-b",
        "desc": "Barcha qo'shimcha ACL huquqlarini tozalash"
      }
    ],
    "example": "setfacl -m u:ali:rw- secret_doc.txt",
    "analogy": "Umumiy qoidalardan tashqari aynan bitta mehmon uchun shaxsiy magnit ruxsatnoma ochib berish."
  },
  {
    "cmd": "getfacl",
    "name": "Get File Access Control Lists (Kengaytirilgan Ruxsatlarni Ko'rish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Foydalanuvchilar",
    "desc": "Faylga o'rnatilgan barcha standart va kengaytirilgan (ACL) huquqlarni batafsil ko'rsatadi.",
    "syntax": "getfacl FAYL",
    "flags": [],
    "example": "getfacl secret_doc.txt",
    "analogy": "Binoga kimlar maxsus ruxsat bilan kira olishi ro'yxatini ko'zdan kechirish."
  },
  {
    "cmd": "ps",
    "name": "Report Process Status (Jarayonlar Holati)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Tizimda ishlab turgan faol jarayonlarning PID, foydalanuvchi, CPU/Xotira sarfi va buyruq qatorini ko'rsatadi.",
    "syntax": "ps [BAYROQLAR]",
    "flags": [
      {
        "flag": "aux",
        "desc": "BSD formati: barcha foydalanuvchilarning barcha jarayonlarini to'liq chiqarish"
      },
      {
        "flag": "-ef",
        "desc": "Standart UNIX formati: to'liq ro'yxat va ota jarayonlar (PPID)"
      },
      {
        "flag": "-u USER",
        "desc": "Faqat ko'rsatilgan foydalanuvchi jarayonlarini ko'rish"
      }
    ],
    "example": "ps aux | grep nginx",
    "analogy": "Zavoddagi barcha ishchilarning joriy holati va nima ish qilayotgani qayd etilgan tabel.",
    "syntaxRules": "Format: ps [aux yoki -ef]. --sort=-%mem yoki --sort=-%cpu orqali saralash tavsiya etiladi.",
    "combinations": [
      {
        "cmd": "ps aux --sort=-%mem | head -n 10",
        "desc": "Eng ko'p operativ xotira (RAM) yeyotgan 10 ta jarayon"
      },
      {
        "cmd": "ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu | head -n 15",
        "desc": "CPU bo'yicha eng og'ir jarayonlar auditi"
      }
    ]
  },
  {
    "cmd": "top",
    "name": "Display Linux Processes (Jonli Tizim Monitori)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Protsessor (CPU), operativ xotira (RAM), Swap va jarayonlarning resurs iste'molini real vaqt rejimida har 3 soniyada yangilab turadi.",
    "syntax": "top [BAYROQLAR]",
    "flags": [
      {
        "flag": "-d N",
        "desc": "Yangilanish oralig'ini N soniya qilib belgilash"
      },
      {
        "flag": "-u USER",
        "desc": "Faqat ma'lum bir foydalanuvchi jarayonlarini ko'rsatish"
      }
    ],
    "example": "top\n# 'q' chiqish, 'k' jarayonni o'ldirish, 'M' xotira bo'yicha saralash",
    "analogy": "Reanimatsiya xonasidagi bemorning yurak urishi va qon bosimini real vaqtda ko'rsatib turuvchi kardiomonitor."
  },
  {
    "cmd": "htop",
    "name": "Interactive Process Viewer (Zamonaviy Rangli Monitor)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Top ning zamonaviy, rangli, klaviatura va sichqoncha bilan boshqariladigan, yadrolar sarfini alohida ko'rsatuvchi interaktiv varianti.",
    "syntax": "htop",
    "flags": [],
    "example": "htop",
    "analogy": "Oddiy qora-oq spidometr o'rniga o'rnatilgan zamonaviy rangli Tesla raqamli boshqaruv paneli."
  },
  {
    "cmd": "kill",
    "name": "Send a Signal to a Process (Jarayonga Signal Yuborish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Jarayonga uning PID raqami orqali POSIX signallarini yuboradi (masalan: to'xtatish, qayta yuklash yoki o'ldirish).",
    "syntax": "kill [-SIGNAL] PID",
    "flags": [
      {
        "flag": "-15 (SIGTERM)",
        "desc": "Yumshoq to'xtatish (jarayonga o'z ishini saqlab toza yopilish imkoni beriladi)"
      },
      {
        "flag": "-9 (SIGKILL)",
        "desc": "Majburiy o'ldirish (yadro darajasida darhol to'xtatiladi, inkor qilib bo'lmaydi)"
      },
      {
        "flag": "-1 (SIGHUP)",
        "desc": "Konfiguratsiyani qayta yuklash (reload)"
      },
      {
        "flag": "-l",
        "desc": "Barcha mavjud signallar ro'yxatini chiqarish"
      }
    ],
    "example": "kill -15 1420\nkill -9 9999",
    "analogy": "SIGTERM — xodimga 'ish vaqting tugadi, buyumlaringni yig'ishtirib ketaver' deyish. SIGKILL — xavfsizlik xizmati kelib xodimni ushlab tashqariga chiqarib yuborishi.",
    "syntaxRules": "Format: kill -[SIGNAL] PID. Avval xavfsiz -15 (SIGTERM), to'xtamasa -9 (SIGKILL) beriladi.",
    "combinations": [
      {
        "cmd": "kill -15 $(pgrep nginx)",
        "desc": "Nginx ni barcha fayllarni xavfsiz saqlagan holda to'xtatish (SIGTERM)"
      },
      {
        "cmd": "kill -9 $(lsof -t -i:8080)",
        "desc": "8080-portni band qilib turgan qotgan jarayonni majburiy o'ldirish"
      }
    ]
  },
  {
    "cmd": "killall",
    "name": "Kill Processes by Name (Nomi Bo'yicha Barchasini O'ldirish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "PID qidirmasdan, bir xil nomdagi barcha jarayonlarni bitta buyruq bilan to'xtatadi.",
    "syntax": "killall [BAYROQLAR] JARAYON_NOMI",
    "flags": [
      {
        "flag": "-9",
        "desc": "Majburiy SIGKILL signali bilan o'ldirish"
      },
      {
        "flag": "-u USER",
        "desc": "Faqat ko'rsatilgan foydalanuvchiga tegishli jarayonlarni o'ldirish"
      }
    ],
    "example": "sudo killall -9 firefox",
    "analogy": "Barcha xonalardagi chiroqlarni bitta umumiy rubilnik orqali o'chirib qo'yish."
  },
  {
    "cmd": "pkill",
    "name": "Signal Processes Based on Name (Naqsh Bo'yicha Signal Yuborish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Jarayon nomining bir qismi yoki naqsh bo'yicha mos keluvchilarga signal yuboradi.",
    "syntax": "pkill [BAYROQLAR] NAQSH",
    "flags": [
      {
        "flag": "-f",
        "desc": "Faqat jarayon nomini emas, butun buyruq qatorini (command line) tekshirish"
      },
      {
        "flag": "-u USER",
        "desc": "Aynan ma'lum bir foydalanuvchi nomini cheklash"
      }
    ],
    "example": "pkill -f 'python3 server.py'",
    "analogy": "Ismida 'Alisher' degan so'z bor barcha talabalarni chaqirib olish."
  },
  {
    "cmd": "pgrep",
    "name": "Look up Processes Based on Name (Jarayon PID larini Topish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Nomiga ko'ra ishlab turgan jarayonlarning faqat PID raqamlarini chiqaradi (skriptlar uchun ayni muddao).",
    "syntax": "pgrep [BAYROQLAR] NAQSH",
    "flags": [
      {
        "flag": "-l",
        "desc": "PID yonida jarayon nomini ham ko'rsatish"
      },
      {
        "flag": "-a",
        "desc": "To'liq buyruq qatorini ham chiqarish"
      }
    ],
    "example": "pgrep -l sshd\n824 sshd",
    "analogy": "Kutubxonadagi kitobning faqat inventar raqamini tezkor topib olish."
  },
  {
    "cmd": "nice",
    "name": "Run with Modified Scheduling Priority (Prioritet Bilan Boshlash)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Jarayonni maxsus ustuvorlik (nice qiymati -20 dan +19 gacha) bilan ishga tushiradi. Yuqori musbat son — tizimga 'muloyim' (kam CPU oladi), manfiy son — agressiv (ko'p CPU oladi).",
    "syntax": "nice -n QIYMAT BUYRUQ",
    "flags": [
      {
        "flag": "-n 19",
        "desc": "Eng past ustuvorlik (orqa fonda kompyuterni qotirmasdan ishlash)"
      },
      {
        "flag": "-n -10",
        "desc": "Yuqori ustuvorlik (faqat root ruxsat bera oladi)"
      }
    ],
    "example": "nice -n 15 tar -czf backup.tar.gz /var/www",
    "analogy": "Navbatda turgan odamning 'Men shoshmayapman, bemalol boshqalarni o'tkazavering' deb muloyimlik (nice) qilishi."
  },
  {
    "cmd": "renice",
    "name": "Alter Priority of Running Processes (Ishlab Turgan Jarayon Prioritetini O'zgartirish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Ayni vaqtda ishlab turgan jarayonning nice qiymatini o'zgartiradi.",
    "syntax": "renice QIYMAT -p PID",
    "flags": [
      {
        "flag": "-u USER",
        "desc": "Foydalanuvchining barcha jarayonlari prioritetini o'zgartirish"
      }
    ],
    "example": "sudo renice -n 5 -p 1420",
    "analogy": "Ishlab turgan ishchiga qo'shimcha vazifa yuklab yoki uning yuklamasini kamaytirib berish."
  },
  {
    "cmd": "nohup",
    "name": "Run a Command Immune to Hangups (Terminal Yopilganda Ham Ishlab Turish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Terminal yopilganda yuboriladigan SIGHUP signalini e'tiborsiz qoldirib, dasturning orqa fonda to'xtamasdan ishlashini ta'minlaydi.",
    "syntax": "nohup BUYRUQ &",
    "flags": [],
    "example": "nohup python3 long_train.py > train.log 2>&1 &",
    "analogy": "Telefon qo'ng'irog'i uzilsa ham, o'z ishini tugatmaguncha to'xtamaydigan mustaqil robot."
  },
  {
    "cmd": "bg",
    "name": "Send Jobs to Background (Jarayonni Orqa Fonga O'tkazish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Ctrl+Z bilan to'xtatilgan (suspended) jarayonni terminalni band qilmasdan fonda ishlashini davom ettiradi.",
    "syntax": "bg [%JOB_ID]",
    "flags": [],
    "example": "# Ctrl+Z bosilgach:\nbg %1",
    "analogy": "Ishni stoldan olib, orqa fondagi xodimning javoniga qo'yish."
  },
  {
    "cmd": "fg",
    "name": "Bring Job to Foreground (Jarayonni Old Fonga Qaytarish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Orqa fonda ishlayotgan jarayonni qaytadan faol terminal boshqaruviga olib chiqadi.",
    "syntax": "fg [%JOB_ID]",
    "flags": [],
    "example": "fg %1",
    "analogy": "Javonda turgan ishni yana oldingizga olib kelib, qo'lda davom ettirish."
  },
  {
    "cmd": "jobs",
    "name": "List Active Jobs (Joriy Terminal Vazifalarini Ko'rish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Ayni terminal seansida orqa fonda (bg) yoki to'xtatib turilgan (stopped) topshiriqlar ro'yxatini ko'rsatadi.",
    "syntax": "jobs [BAYROQLAR]",
    "flags": [
      {
        "flag": "-l",
        "desc": "Topshiriq raqami yonida uning haqiqiy PID raqamini ham ko'rsatish"
      }
    ],
    "example": "jobs -l\n[1]+ 14205 Running python3 bot.py &",
    "analogy": "Bitta ustaning bir vaqtda bajarayotgan buyurtmalari ro'yxati."
  },
  {
    "cmd": "pstree",
    "name": "Display a Tree of Processes (Ota-Bola Jarayonlar Shajarasi)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Jarayonlarning ota (PPID) va bola munosabatlarini daraxt ko'rinishida ko'rsatadi (systemd barcha jarayonlarning bobosi ekanini ko'rish mumkin).",
    "syntax": "pstree [BAYROQLAR] [PID/USER]",
    "flags": [
      {
        "flag": "-p",
        "desc": "Har bir jarayon nomi yonida uning PID raqamini ko'rsatish"
      },
      {
        "flag": "-u",
        "desc": "Foydalanuvchi o'zgargan nuqtalarni ko'rsatish"
      }
    ],
    "example": "pstree -p",
    "analogy": "Oila shajarasi (bobosi systemd, ota bash, farzandlari esa cat, grep...)."
  },
  {
    "cmd": "fork",
    "name": "Fork System Call (Jarayon Klonlash / Nusxa Yaratish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Operatsion tizim yadrosiga (kernel) murojaat qilib, joriy jarayonning xotiradagi aynan 100% nusxasini (bola jarayon) hosil qiladi. Ota jarayonga bolaning PID raqami, bola jarayonga esa 0 qaytadi.",
    "syntax": "pid_t pid = fork();",
    "flags": [
      {
        "flag": "pid > 0",
        "desc": "Ota jarayon kodi bajarilmoqda (pid - bola jarayon raqami)"
      },
      {
        "flag": "pid == 0",
        "desc": "Yangi tug'ilgan bola jarayon kodi bajarilmoqda"
      },
      {
        "flag": "pid < 0",
        "desc": "Xatolik! Yangi jarayon yaratish uchun xotira yetmadi"
      }
    ],
    "example": "int pid = fork();\nif (pid == 0) {\n    printf(\"Men bola jarayonman!\\n\");\n} else {\n    printf(\"Men otaman, bolam PID: %d\\n\", pid);\n}",
    "analogy": "Hujayraning mitoz bo'linishi. Bitta tirik organizmdan aynan bir xil xususiyatga ega ikkinchi mustaqil organizm ajralib chiqadi."
  },
  {
    "cmd": "execve",
    "name": "Execute Program System Call (Xotiradagi Dasturni Almashtirish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Joriy jarayon xotirasini butunlay tozalab, uning o'rniga yangi binar dasturni yuklaydi va ishga tushiradi (PID o'zgarmaydi!).",
    "syntax": "int execve(const char *pathname, char *const argv[], char *const envp[]);",
    "flags": [],
    "example": "char *args[] = {\"/bin/ls\", \"-l\", NULL};\nexecve(args[0], args, NULL);",
    "analogy": "Kostyum-shim kiygan odamning bir zumda shifokor xalatini kiyib, butunlay yangi kasb vazifasiga kirishishi. Odamning o'zi (PID) o'zgarmaydi."
  },
  {
    "cmd": "waitpid",
    "name": "Wait for Process State Change (Bola Jarayonni Kutish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Ota jarayon bola jarayon o'z ishini tugatguncha (exit bo'lguncha) to'xtab kutib turadi va uning chiqish kodini (status) qabul qiladi. Bu 'Zombie' jarayonlar hosil bo'lishining oldini oladi.",
    "syntax": "pid_t waitpid(pid_t pid, int *status, int options);",
    "flags": [
      {
        "flag": "WNOHANG",
        "desc": "Bola hali tugamagan bo'lsa otani qotirmasdan darhol qaytish"
      }
    ],
    "example": "waitpid(child_pid, &status, 0);",
    "analogy": "Maktab darvozasida farzandining darslari tugashini kutib turgan ota."
  },
  {
    "cmd": "pipe",
    "name": "Create Interprocess Communication Channel (Quvur Tizim Chaqirig'i)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Ikki jarayon orasida bir yo'nalishli ma'lumot almashish (IPC) uchun xotirada quvur ochadi (fd[0] o'qish uchun, fd[1] yozish uchun).",
    "syntax": "int pipe(int pipefd[2]);",
    "flags": [],
    "example": "int fd[2];\npipe(fd);\n// fd[1] ga yoziladi, fd[0] dan o'qiladi",
    "analogy": "Ikki xona orasiga o'rnatilgan pnevmatik quvur. Birinchi xona xatni solsa, ikkinchi xona qabul qilib oladi."
  },
  {
    "cmd": "strace",
    "name": "Trace System Calls and Signals (Tizim Chaqiriqlarini Kuzatish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Dastur ishlayotganda uning Linux yadrosiga qilayotgan barcha tizim chaqiriqlarini (open, read, write, connect, fork) real vaqtda ko'rsatadi.",
    "syntax": "strace [BAYROQLAR] DASTUR",
    "flags": [
      {
        "flag": "-e trace=open,read",
        "desc": "Faqat ma'lum turdagi tizim chaqiriqlarini filtrlab ko'rsatish"
      },
      {
        "flag": "-p PID",
        "desc": "Ishlab turgan begona jarayonga ulanib uning qo'ng'iroqlarini kuzatish"
      },
      {
        "flag": "-c",
        "desc": "Chaqiriqlar soni va vaqti bo'yicha yakuniy statistik jadval chiqarish"
      }
    ],
    "example": "strace -e trace=openat ls /tmp",
    "analogy": "Telefon tarmog'idagi barcha suhbatlar va qo'ng'iroqlarni yozib oluvchi xavfsizlik filtri."
  },
  {
    "cmd": "dmesg",
    "name": "Print Kernel Ring Buffer (Yadro Xabarlarini O'qish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Linux yadrosi yuklanishi (boot), uskunalar (HDD, USB, RAM) aniqlanishi va OOM (Out of Memory) xatoliklari tarixini ko'rsatadi.",
    "syntax": "dmesg [BAYROQLAR]",
    "flags": [
      {
        "flag": "-T",
        "desc": "Vaqt tamg'alarini inson tushunadigan sana ko'rinishida chiqarish"
      },
      {
        "flag": "-l err,warn",
        "desc": "Faqat jiddiy xato va ogohlantirishlarni filtrlash"
      },
      {
        "flag": "-w",
        "desc": "Yangi kelgan yadro xabarlarini jonli kuzatib turish"
      }
    ],
    "example": "dmesg -T | grep -i 'oom-killer'",
    "analogy": "Samolyotning 'qora qutisi'. Tizimda qanday uskunaviy muammo yoki yadroning halokati yuz berganini ochib beradi."
  },
  {
    "cmd": "uname",
    "name": "Print System Information (Yadro va OT Ma'lumotlari)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Linux yadrosi versiyasi, protsessor arxitekturasi (x86_64, aarch64) va operatsion tizim nomini ko'rsatadi.",
    "syntax": "uname [BAYROQLAR]",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha ma'lumotlarni to'liq chiqarish (all)"
      },
      {
        "flag": "-r",
        "desc": "Faqat Linux yadrosi versiyasini chiqarish (kernel release)"
      },
      {
        "flag": "-m",
        "desc": "Mashina arxitekturasini chiqarish (masalan: x86_64)"
      }
    ],
    "example": "uname -a\nLinux debian 6.1.0-18-amd64 #1 SMP x86_64 GNU/Linux",
    "analogy": "Avtomobilning texnik pasportini ko'zdan kechirish (motor turi, ishlab chiqarilgan yili)."
  },
  {
    "cmd": "free",
    "name": "Display Amount of Free and Used Memory (Operativ Xotira Holati)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Tizimdagi umumiy, ishlatilayotgan, bo'sh, buferlangan va keshdagi operativ xotira (RAM) hamda Swap hajmini ko'rsatadi.",
    "syntax": "free [BAYROQLAR]",
    "flags": [
      {
        "flag": "-h",
        "desc": "Inson tushunadigan formatda (GB, MB) chiqarish (human-readable)"
      },
      {
        "flag": "-m",
        "desc": "Megabaytlarda chiqarish"
      },
      {
        "flag": "-s N",
        "desc": "Har N soniyada yangilab turish"
      }
    ],
    "example": "free -h\n               total        used        free      shared  buff/cache   available\nMem:           15Gi       3.2Gi       8.4Gi       210Mi       3.8Gi        11Gi\nSwap:         2.0Gi          0B       2.0Gi",
    "analogy": "Katta ombordagi bo'sh javonlar va band javonlarni ko'zdan kechirish."
  },
  {
    "cmd": "vmstat",
    "name": "Report Virtual Memory Statistics (Virtual Xotira Tahlili)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Jarayonlar navbati, xotira, paging, swap kirish/chiqishi (si, so), disk I/O va CPU faolligi bo'yicha to'liq hisobot beradi.",
    "syntax": "vmstat [ORALIK [SONI]]",
    "flags": [
      {
        "flag": "-s",
        "desc": "Barcha xotira hodisalari bo'yicha jami hisoblagichlarni chiqarish"
      },
      {
        "flag": "-d",
        "desc": "Disk faolligi statistikasini alohida chiqarish"
      }
    ],
    "example": "vmstat 2 5",
    "analogy": "Tizimning pulsini tekshiruvchi tibbiy stetoskop. Swap operatsiyalari ko'paygan bo'lsa, xotira yetishmayotganini fosh qiladi."
  },
  {
    "cmd": "pmap",
    "name": "Report Memory Map of a Process (Jarayon Xotira Xaritasi)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Ma'lum bir jarayon qaysi virtual xotira manzillarini, kutubxonalarni (so) va stack/heap ni egallab turganini ko'rsatadi.",
    "syntax": "pmap [BAYROQLAR] PID",
    "flags": [
      {
        "flag": "-x",
        "desc": "Kengaytirilgan format: RSS (fizik xotira) va Dirty xotirani ham ko'rsatish"
      }
    ],
    "example": "pmap -x 1420",
    "analogy": "Bino ichidagi qaysi xonalarni qaysi bo'limlar egallab turganining aniq chizmasi."
  },
  {
    "cmd": "swapon",
    "name": "Enable Devices and Files for Paging (Swap Qismini Faollashtirish)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Diskdagi maxsus bo'lim yoki faylni virtual xotira (Swap) sifatida ishga tushiradi.",
    "syntax": "sudo swapon [BAYROQLAR] QURILMA/FAYL",
    "flags": [
      {
        "flag": "-a",
        "desc": "/etc/fstab dagi barcha belgilangan Swap bo'limlarini yoqish"
      },
      {
        "flag": "--show",
        "desc": "Faol Swap bo'limlari ro'yxati va ularning bandligini jadval ko'rinishida ko'rsatish"
      }
    ],
    "example": "sudo swapon /swapfile && swapon --show",
    "analogy": "Asosiy omborda joy tugaganda, qo'shni qo'shimcha yerto'lani zaxira ombor sifatida ishga tushirish."
  },
  {
    "cmd": "swapoff",
    "name": "Disable Devices and Files for Paging (Swapni O'chirish)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Swap xotirasidagi ma'lumotlarni qayta RAM ga ko'chirib, swap maydonini xavfsiz to'xtatadi.",
    "syntax": "sudo swapoff -a",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha faol Swap bo'limlarini o'chirish"
      }
    ],
    "example": "sudo swapoff -a",
    "analogy": "Zaxira yerto'ladagi barcha qutilarni qaytarib asosiy zalga kiritish va yerto'la eshigini qulflash."
  },
  {
    "cmd": "sync",
    "name": "Synchronize Cached Writes to Persistent Storage (Xotirani Diskka Yozish)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Operativ xotira (RAM) buferida qolib ketgan barcha ma'lumotlarni zudlik bilan qattiq diskka yozilishini majburiy ta'minlaydi.",
    "syntax": "sync",
    "flags": [],
    "example": "sync",
    "analogy": "Word da yozayotgan maqolangizni chiroq o'chib qolishidan oldin darhol Ctrl+S qilib fleshkaga saqlab olish."
  },
  {
    "cmd": "slabtop",
    "name": "Display Kernel Slab Cache Information in Real Time (Yadro Keshini Ko'rish)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Linux yadrosining ichki obyektlari (inodelar, dentry keshlari) qancha operativ xotira yeyayotganini real vaqtda ko'rsatadi.",
    "syntax": "sudo slabtop",
    "flags": [],
    "example": "sudo slabtop -s c",
    "analogy": "Zavod ma'muriyatining qog'ozbozlik va ichki blankalari qancha javonni egallab yotganini taftish qilish."
  },
  {
    "cmd": "df",
    "name": "Report File System Disk Space Usage (Disk Hajmi va Inodelar)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Ulangan barcha disk bo'limlarining umumiy hajmi, ishlatilgani, bo'sh joyi va Inodelar sonini (%i) chiqaradi.",
    "syntax": "df [BAYROQLAR]",
    "flags": [
      {
        "flag": "-h",
        "desc": "Inson tushunadigan formatda (GB, MB) chiqarish"
      },
      {
        "flag": "-i",
        "desc": "Bo'sh baytlarni emas, balki erkin Inodelar sonini tekshirish (juda muhim!)"
      },
      {
        "flag": "-T",
        "desc": "Fayl tizimi turini ham (ext4, xfs, btrfs) ko'rsatish"
      }
    ],
    "example": "df -hT\n/dev/sda1      ext4       40G   12G   26G  32% /",
    "analogy": "Fleshkangizda yoki qattiq diskingizda qancha bo'sh joy qolganini ko'rsatuvchi xususiyatlar oynasi."
  },
  {
    "cmd": "du",
    "name": "Estimate File Space Usage (Papka va Fayllar Hajmini O'lchash)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Qaysi papka yoki fayl diskda eng ko'p joy egallayotganini chuqur tahlil qiladi.",
    "syntax": "du [BAYROQLAR] [MANZIL]",
    "flags": [
      {
        "flag": "-s",
        "desc": "Faqat umumiy yig'indi hajmni chiqarish (summary)"
      },
      {
        "flag": "-h",
        "desc": "O'qish oson bo'lgan birliklarda (K, M, G) ko'rsatish"
      },
      {
        "flag": "-d N",
        "desc": "Papkalar chuqurligini N qavatgacha cheklash (max-depth)"
      }
    ],
    "example": "du -sh /var/log/* | sort -hr | head -n 5",
    "analogy": "Qaysi xonada eng ko'p eski buyumlar yig'ilib qolganini tarozi bilan o'lchab chiqish."
  },
  {
    "cmd": "mount",
    "name": "Mount a File System (Fayl Tizimini Ulash)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Disk bo'limi, fleshka, ISO obrazi yoki tarmoq diskini tizimdagi ma'lum bir papkaga (mount point) ulaydi.",
    "syntax": "sudo mount [BAYROQLAR] QURILMA PAPKA",
    "flags": [
      {
        "flag": "-t TUR",
        "desc": "Fayl tizimi turini ko'rsatish (ext4, ntfs, iso9660, nfs)"
      },
      {
        "flag": "-o VARIANTLAR",
        "desc": "Qo'shimcha parametrlar (ro=faqat o'qish, rw=o'qish-yozish, noexec)"
      }
    ],
    "example": "sudo mount /dev/sdb1 /mnt/usb_drive",
    "analogy": "Tashqi fleshkani kompyuter portiga tiqib, uning tarkibini bitta jild sifatida ochish."
  },
  {
    "cmd": "umount",
    "name": "Unmount File Systems (Fayl Tizimini Xavfsiz Uzish)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Ulab qo'yilgan disk bo'limi yoki fleshkani keshdagi ma'lumotlarni saqlab, xavfsiz uzadi.",
    "syntax": "sudo umount [BAYROQLAR] PAPKA_YOKI_QURILMA",
    "flags": [
      {
        "flag": "-l",
        "desc": "Band bo'lsa ham fon rejimida darhol xavfsiz uzish (lazy unmount)"
      },
      {
        "flag": "-f",
        "desc": "Tarmoq diski javob bermay qotganda majburiy uzish (force)"
      }
    ],
    "example": "sudo umount /mnt/usb_drive",
    "analogy": "Fleshkani sug'urib olishdan oldin Windowsda 'Xavfsiz chiqarish' tugmasini bosish."
  },
  {
    "cmd": "lsblk",
    "name": "List Block Devices (Blok Qurilmalari va Disk Bo'limlari)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Kompyuterga ulangan barcha qattiq disklar (sda, nvme0n1), ularning bo'limlari (sda1, sda2) va ulangan nuqtalarini shajara shaklida ko'rsatadi.",
    "syntax": "lsblk [BAYROQLAR]",
    "flags": [
      {
        "flag": "-f",
        "desc": "Fayl tizimi turlari (FSTYPE) va UUID raqamlarini ham ko'rsatish"
      },
      {
        "flag": "-m",
        "desc": "Ruxsatlar va egalik huquqlari bilan chiqarish"
      }
    ],
    "example": "lsblk -f",
    "analogy": "Kompyuterning qornini ochib, qaysi qattiq disk qaysi kabel orqali qayerga ulanganini ko'rsatuvchi sxema."
  },
  {
    "cmd": "fdisk",
    "name": "Manipulate Disk Partition Table (Disk Bo'limlari Ustasi)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "MBR va GPT formatdagi qattiq disklarni bo'laklarga ajratish, o'chirish va yangi bo'limlar ochish uchun interaktiv vosita.",
    "syntax": "sudo fdisk [BAYROQLAR] QURILMA",
    "flags": [
      {
        "flag": "-l",
        "desc": "Tizimdagi barcha disklar va ularning bo'limlar jadvalini chiqarish"
      }
    ],
    "example": "sudo fdisk -l /dev/sda",
    "analogy": "Yangi sotib olingan bo'sh yer uchastkasini kadastr bo'yicha devorlar bilan xonalarga bo'lib chiqish."
  },
  {
    "cmd": "mkfs",
    "name": "Build a Linux File System (Formatlash va Fayl Tizimi Yaratish)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Bo'sh disk qismiga ext4, xfs, vfat kabi fayl tizimi tuzilmasini, Inode jadvallarini yozadi (formatlaydi).",
    "syntax": "sudo mkfs [BAYROQLAR] QURILMA",
    "flags": [
      {
        "flag": "-t ext4",
        "desc": "ext4 fayl tizimini yaratish"
      },
      {
        "flag": "-t vfat",
        "desc": "Barcha tizimlar (Windows/Mac/Linux) tushunadigan FAT formatlash"
      }
    ],
    "example": "sudo mkfs.ext4 /dev/sdb1",
    "analogy": "Bo'sh daftarga kataklar, chiziqlar va bet raqamlarini chizib chiqish (formatlash)."
  },
  {
    "cmd": "fsck",
    "name": "Check and Repair a Linux File System (Fayl Tizimini Tekshirish va Davolash)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Diskdagi Inodelar buzilishi, bloklarning noto'g'ri ko'rsatkichlari va tizim to'satdan o'chgandagi xatoliklarni tekshiradi va tuzatadi.",
    "syntax": "sudo fsck [BAYROQLAR] QURILMA",
    "flags": [
      {
        "flag": "-y",
        "desc": "Barcha tuzatish savollariga avtomatik 'Ha' deb javob berish"
      },
      {
        "flag": "-f",
        "desc": "Fayl tizimi toza deb belgilangan bo'lsa ham majburiy tekshirish"
      }
    ],
    "example": "sudo fsck -y /dev/sdb1",
    "analogy": "Kasal bo'lgan diskni rentgen apparatiga solib, singan suyaklarini to'g'irlab qo'yuvchi jarroh."
  },
  {
    "cmd": "dd",
    "name": "Convert and Copy a File (Past Darajali Baytma-Bayt Nusxalash)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Fayllar va disk bloklarini to'g'ridan-to'g'ri baytma-bayt o'qiydi va yozadi (Bootable USB yasash, zaxira nusxa olish va disk klonlash quroli).",
    "syntax": "dd if=MANBA of=NISHON [PARAMETRLAR]",
    "flags": [
      {
        "flag": "if=FILE",
        "desc": "Kirish manbasi (Input File, masalan: if=debian.iso)"
      },
      {
        "flag": "of=DEVICE",
        "desc": "Chiqish qurilmasi (Output File, masalan: of=/dev/sdc)"
      },
      {
        "flag": "bs=4M",
        "desc": "Bitta blok hajmini 4MB qilib belgilash (tezlikni oshiradi)"
      },
      {
        "flag": "status=progress",
        "desc": "Nusxalanish jarayonini jonli ko'rsatib turish"
      }
    ],
    "example": "sudo dd if=linux.iso of=/dev/sdb bs=4M status=progress && sync",
    "analogy": "Kitobni harfma-harf emas, butun bir varoqni fotokopiya qilib aynan bir xil qilib ko'chirish."
  },
  {
    "cmd": "ip",
    "name": "Show / Manipulate Routing, Devices, Interfaces (Tarmoq Boshqaruvi)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Zamonaviy Linux tarmoq boshqaruv vositasi (ifconfig o'rnini bosuvchi). IP manzillar, interfeyslar va marshrutlarni boshqaradi.",
    "syntax": "ip [OBYEKT] [BUYRUQ]",
    "flags": [
      {
        "flag": "a / addr",
        "desc": "Barcha interfeyslarning IP manzillarini ko'rsatish"
      },
      {
        "flag": "r / route",
        "desc": "Standart shlyuz (gateway) va yo'nalishlar jadvalini ko'rish"
      },
      {
        "flag": "link set dev UP/DOWN",
        "desc": "Tarmoq kartasini yoqish yoki o'chirish"
      }
    ],
    "example": "ip a\nip route show",
    "analogy": "Xonadondagi barcha telefon raqamlari va internet kabellari holatini tekshirish."
  },
  {
    "cmd": "ping",
    "name": "Send ICMP ECHO_REQUEST to Network Hosts (Aloqani Tekshirish)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Tarmoqdagi server bilan aloqa borligini va ma'lumot yetib borish vaqtini (latency millisekundlarda) tekshiradi.",
    "syntax": "ping [BAYROQLAR] MANZIL",
    "flags": [
      {
        "flag": "-c N",
        "desc": "N ta so'rov yuborgandan so'ng to'xtash (Linuxda to'xtovsiz ketadi)"
      },
      {
        "flag": "-i SEK",
        "desc": "So'rovlar orasidagi tanaffus vaqti"
      }
    ],
    "example": "ping -c 4 8.8.8.8",
    "analogy": "Qorong'i xonada kimdir bormi deb ovoz chiqarish va aks-sado qaytib kelishini kutish."
  },
  {
    "cmd": "ss",
    "name": "Socket Statistics (Ochiq Portlar va Ulanishlar)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Serverda qaysi portlar tinglayotganini (listening) va qaysi mijozlar ulanganini tezkor ko'rsatadi (netstat o'rniga).",
    "syntax": "ss [BAYROQLAR]",
    "flags": [
      {
        "flag": "-t",
        "desc": "Faqat TCP ulanishlarni ko'rsatish"
      },
      {
        "flag": "-u",
        "desc": "Faqat UDP ulanishlarni ko'rsatish"
      },
      {
        "flag": "-l",
        "desc": "Faqat tinglayotgan (listening) ochiq portlarni ko'rsatish"
      },
      {
        "flag": "-n",
        "desc": "Nomlar emas, raqamli portlarni ko'rsatish (masalan: 80, 443, 22)"
      },
      {
        "flag": "-p",
        "desc": "Qaysi jarayon (PID va dastur) portni ushlab turganini ko'rsatish"
      }
    ],
    "example": "sudo ss -tulpn",
    "analogy": "Mehmonxonadagi barcha eshiklarning (portlar) qaysi biri ochiqligi va ichida kimlar borligini ko'zdan kechirish."
  },
  {
    "cmd": "netstat",
    "name": "Network Statistics (Klassik Tarmoq Monitori)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Tarmoq ulanishlari, marshrut jadvallari va interfeys statistikalarini ko'rsatuvchi klassik vosita.",
    "syntax": "netstat [BAYROQLAR]",
    "flags": [
      {
        "flag": "-tulpn",
        "desc": "TCP, UDP, tinglovchi portlar, raqamlar va jarayonlar"
      }
    ],
    "example": "netstat -rn",
    "analogy": "Eski uslubdagi telefon stansiyasi jurnali."
  },
  {
    "cmd": "curl",
    "name": "Transfer Data from or to a Server (HTTP / API So'rovlar)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Terminaldan turib veb-sahifalar, REST API larga HTTP GET, POST, PUT so'rovlar yuborish va fayllar yuklab olish vositasi.",
    "syntax": "curl [BAYROQLAR] URL",
    "flags": [
      {
        "flag": "-I",
        "desc": "Faqat HTTP sarlavhalarini (headers: 200 OK, 404) olish"
      },
      {
        "flag": "-O",
        "desc": "Faylni serverdagi asl nomi bilan diskka yuklab olish"
      },
      {
        "flag": "-L",
        "desc": "Agar yo'naltirish (301/302 redirect) bo'lsa orqasidan ergashish"
      },
      {
        "flag": "-X POST",
        "desc": "Maxsus HTTP metodini tanlash (POST, DELETE, PUT)"
      },
      {
        "flag": "-H 'Header'",
        "desc": "Maxsus sarlavha qo'shish (masalan: Authorization)"
      },
      {
        "flag": "-s",
        "desc": "Jim rejim: yuklanish foizini ko'rsatmaslik (silent)"
      }
    ],
    "example": "curl -I https://google.com\ncurl -s https://api.ipify.org",
    "analogy": "Brauzersiz to'g'ridan-to'g'ri veb-saytga yoki kuryerga xat va posilka yuborib javobini olish."
  },
  {
    "cmd": "wget",
    "name": "Non-interactive Network Downloader (Fayllarni Yuklab Olish)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Internetdan fayllar, arxivlar yoki butun boshli veb-saytlarni fon rejimida uzilishsiz yuklab oladi.",
    "syntax": "wget [BAYROQLAR] URL",
    "flags": [
      {
        "flag": "-c",
        "desc": "Uzilib qolgan yuklashni qolgan joyidan davom ettirish (continue)"
      },
      {
        "flag": "-b",
        "desc": "Orqa fonda yuklash (background)"
      },
      {
        "flag": "-O NOMI",
        "desc": "Yuklangan faylni boshqa nom bilan saqlash"
      }
    ],
    "example": "wget -c https://example.com/large_backup.zip",
    "analogy": "Internetdan yuklab olish menejeri (Download Master)."
  },
  {
    "cmd": "ssh",
    "name": "OpenSSH Remote Login Client (Masofaviy Xavfsiz Ulanish)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Internet yoki mahalliy tarmoqdagi masofaviy Linux serverga shifrlangan xavfsiz terminal konsolini ochadi.",
    "syntax": "ssh [BAYROQLAR] FOYDALANUVCHI@SERVER_IP",
    "flags": [
      {
        "flag": "-p PORT",
        "desc": "Standart 22-port o'rniga boshqa port orqali ulanish"
      },
      {
        "flag": "-i KALIT",
        "desc": "Parolsiz kirish uchun shaxsiy SSH kalitini ko'rsatish (id_rsa)"
      },
      {
        "flag": "-L L_PORT:HOST:R_PORT",
        "desc": "Port forwarding (tunneling) yaratish"
      }
    ],
    "example": "ssh -i ~/.ssh/wiut_key student@192.168.1.50",
    "analogy": "Dunyoning narigi burchagidagi kompyuterning oldiga borib o'tirib, uning klaviaturasidan boshqarayotgandek xavfsiz ulanish."
  },
  {
    "cmd": "scp",
    "name": "Secure Copy (SSH Orqali Fayl Yuborish)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Ikki kompyuter orasida SSH shifrlash protokoli orqali fayl va papkalarni nusxalaydi.",
    "syntax": "scp [BAYROQLAR] MANBA NISHON",
    "flags": [
      {
        "flag": "-r",
        "desc": "Papkani barcha ichki fayllari bilan rekursiv yuborish"
      },
      {
        "flag": "-P PORT",
        "desc": "Boshqa portni ko'rsatish"
      }
    ],
    "example": "scp -r ./dist/ student@server:/var/www/html/",
    "analogy": "Shifrlangan diplomatik pochta orqali chet eldagi ofisga hujjatlarni yetkazib berish."
  },
  {
    "cmd": "rsync",
    "name": "Remote Sync (Tezkor Sinxronizatsiya)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Fayllarni faqat o'zgargan bo'laklarini (delta-transfer) yuborish orqali favqulodda tez sinxronizatsiya qiladi.",
    "syntax": "rsync [BAYROQLAR] MANBA NISHON",
    "flags": [
      {
        "flag": "-a",
        "desc": "Arxiv rejimi (ruxsatlar, vaqtlar va symlinklar saqlanadi)"
      },
      {
        "flag": "-v",
        "desc": "Batafsil ma'lumot berish (verbose)"
      },
      {
        "flag": "-z",
        "desc": "Tarmoq orqali yuborishda ma'lumotni siqish (compress)"
      },
      {
        "flag": "--delete",
        "desc": "Manbada o'chirilgan fayllarni nishonda ham o'chirish"
      }
    ],
    "example": "rsync -avz --progress /data/ backup_server:/backup/",
    "analogy": "Kitobning ikkinchi nashrini chop etganda, butun kitobni emas, faqat o'zgargan 3 ta betini jo'natish."
  },
  {
    "cmd": "nc",
    "name": "Netcat (Shveysariya Armiyasi Pichoqchasi)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "TCP yoki UDP portlarni tekshirish, port tinglash, fayl uzatish va tarmoq orqali matn yuborishning eng universal vositasi.",
    "syntax": "nc [BAYROQLAR] MANZIL PORT",
    "flags": [
      {
        "flag": "-z",
        "desc": "Ma'lumot yubormasdan faqat port ochiqligini tekshirish (scan)"
      },
      {
        "flag": "-v",
        "desc": "Batafsil hisobot (verbose)"
      },
      {
        "flag": "-l",
        "desc": "Kutilayotgan ulanishlar uchun port tinglovchi serverga aylanish (listen)"
      }
    ],
    "example": "nc -zv 192.168.1.1 80 443 22",
    "analogy": "Har qanday qulfga tushadigan universal master-kalit."
  },
  {
    "cmd": "cron",
    "name": "Daemon to Execute Scheduled Commands (Vaqt Bo'yicha Rejalashtiruvchi)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Linux orqa fonida doim ishlab turadigan, daqiqa, soat, kun va oylarga qarab avtomatlashtirilgan vazifalarni ishga tushiruvchi tizim xizmati.",
    "syntax": "* * * * * BUYRUQ\n(daqiqa soat kun oy hafta_kuni)",
    "flags": [],
    "example": "# Har kuni kechasi soat 02:00 da zaxira olish:\n0 2 * * * /backup.sh",
    "analogy": "Xonadagi budilnik. Belgilangan daqiqa va soatda avtomatik jiringlab vazifani ishga tushiradi."
  },
  {
    "cmd": "crontab",
    "name": "Maintain Crontab Files for Individual Users (Cron Jadvalini Boshqarish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Foydalanuvchining avtomatlashtirilgan cron vazifalar jadvalini tahrirlash yoki ko'rish vositasi.",
    "syntax": "crontab [BAYROQLAR]",
    "flags": [
      {
        "flag": "-e",
        "desc": "Joriy foydalanuvchining cron jadvalini matn muharririda tahrirlash (edit)"
      },
      {
        "flag": "-l",
        "desc": "Faol vazifalar ro'yxatini chiqarish (list)"
      },
      {
        "flag": "-r",
        "desc": "Foydalanuvchining barcha cron vazifalarini tozalash (remove)"
      }
    ],
    "example": "crontab -e\ncrontab -l",
    "analogy": "Kundalik daftarchasiga har kungi yoki har haftalik rejalarni yozib qo'yish.",
    "syntaxRules": "Format: * * * * * BUYRUQ (daqiqa soat kun oy haftakuni). Har doim chiqishni logga yo'naltiring.",
    "combinations": [
      {
        "cmd": "(crontab -l 2>/dev/null; echo '0 2 * * * /backup.sh >> /var/log/backup.log 2>&1') | crontab -",
        "desc": "Mavjud jadvallarni saqlagan holda yangi cron vazifasini xavfsiz qo'shish"
      }
    ]
  },
  {
    "cmd": "systemctl",
    "name": "Control the Systemd System and Service Manager (Xizmatlar Boshqaruvi)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Linuxdagi tizim xizmatlarini (Nginx, Docker, SSH, MySQL) yoqish, to'xtatish, holatini tekshirish va avtoyuklashga qo'yish vositasi.",
    "syntax": "sudo systemctl [AMAL] XIZMAT",
    "flags": [
      {
        "flag": "start",
        "desc": "Xizmatni ishga tushirish"
      },
      {
        "flag": "stop",
        "desc": "Xizmatni to'xtatish"
      },
      {
        "flag": "restart",
        "desc": "Xizmatni qayta o'chirib yoqish"
      },
      {
        "flag": "status",
        "desc": "Xizmat faoliyati va so'nggi loglarini ko'rish"
      },
      {
        "flag": "enable",
        "desc": "Server o'chib yoqilganda avtomatik ishga tushishini yoqish"
      },
      {
        "flag": "disable",
        "desc": "Avtoyuklanishdan olib tashlash"
      }
    ],
    "example": "sudo systemctl restart nginx && systemctl status nginx",
    "analogy": "Binodagi lift, generator va ventilyatsiya tizimlarini markaziy boshqaruv pultidan yoqib-o'chirish."
  },
  {
    "cmd": "journalctl",
    "name": "Query the Systemd Journal (Tizim Loglarini O'qish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Systemd ning barcha xizmatlar, yadro va yuklanish loglarini birlashtiruvchi markaziy jurnal vositasi.",
    "syntax": "journalctl [BAYROQLAR]",
    "flags": [
      {
        "flag": "-u XIZMAT",
        "desc": "Faqat ko'rsatilgan xizmat loglarini ko'rish (masalan: -u ssh)"
      },
      {
        "flag": "-f",
        "desc": "Yangi kelgan loglarni real vaqtda jonli kuzatish (follow)"
      },
      {
        "flag": "-p err",
        "desc": "Faqat xatoliklarni filtrlash (priority)"
      },
      {
        "flag": "-b",
        "desc": "Faqat joriy yuklanishdan (boot) keyingi yozuvlarni ko'rish"
      }
    ],
    "example": "journalctl -u docker.service -f",
    "analogy": "Tashkilotdagi barcha hodisalar va xatoliklar yozib boriladigan yagona navbatchilik daftari."
  },
  {
    "cmd": "alias",
    "name": "Create an Alias for Commands (Qisqa Nom / Taxallus Berish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Uzun va murakkab buyruqlarga qisqa taxallus (shortcut) beradi.",
    "syntax": "alias QISQA='UZUN BUYRUQ'",
    "flags": [],
    "example": "alias ll='ls -lai --color=auto'\nalias update='sudo apt update && sudo apt upgrade -y'",
    "analogy": "Telefon kitobidagi tezkor terish raqami (masalan 1 ni bossangiz onangizga qo'ng'iroq ketishi)."
  },
  {
    "cmd": "export",
    "name": "Set an Environment Variable (Muhit O'zgaruvchisini Eksport Qilish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "O'zgaruvchini joriy shell va undan tug'iladigan barcha bola jarayonlarga uzatadi.",
    "syntax": "export O'ZGARUVCHI=QIYMAT",
    "flags": [],
    "example": "export PATH=$PATH:/opt/my_scripts\nexport NODE_ENV=production",
    "analogy": "Xonaning havosiga xushbo'y hid sepish. Xonaga kirgan har bir yangi odam (bola jarayon) bu hidni sezadi."
  },
  {
    "cmd": "env",
    "name": "Run a Program in a Modified Environment (Muhit O'zgaruvchilari)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Barcha faol muhit o'zgaruvchilari (USER, PATH, SHELL, HOME) ro'yxatini chiqaradi.",
    "syntax": "env",
    "flags": [],
    "example": "env | grep -E 'USER|SHELL|PATH'",
    "analogy": "Kompyuterning ayni damdagi ob-havo va iqlim sharoitlari xaritasi."
  },
  {
    "cmd": "source",
    "name": "Execute Commands from a File in Current Shell (Skriptni Joriy Shellda Yuklash)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Faylni yangi subshell ochmasdan, aynan joriy shell xotirasida ishga tushiradi (nuqta . buyrug'i bilan bir xil).",
    "syntax": "source FAYL yoki . FAYL",
    "flags": [],
    "example": "source ~/.bashrc",
    "analogy": "Yangi qoidalarni eshitib, ularni darhol o'z miyangizda qabul qilib ishga tushirish."
  },
  {
    "cmd": "history",
    "name": "GNU History Library (Terilgan Buyruqlar Tarixi)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Oldin terilgan barcha buyruqlar tarixini raqamlari bilan ko'rsatadi (!raqam orqali qayta bajarish mumkin).",
    "syntax": "history [SONI]",
    "flags": [
      {
        "flag": "-c",
        "desc": "Tarix xotirasini tozalash"
      }
    ],
    "example": "history | grep 'docker'\n!1024",
    "analogy": "Brauzerning ko'rilgan sahifalar tarixi (Ctrl+H)."
  },
  {
    "cmd": "read",
    "name": "Read a Line from Standard Input (Foydalanuvchidan Matn Kiritish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Bash skriptlarida foydalanuvchidan klaviatura orqali javob yoki ma'lumot qabul qilib oladi.",
    "syntax": "read [BAYROQLAR] O'ZGARUVCHI",
    "flags": [
      {
        "flag": "-p 'MATN'",
        "desc": "Kiritishdan oldin so'rov matnini chiqarish (prompt)"
      },
      {
        "flag": "-s",
        "desc": "Yozilayotgan parolni ekranda yashirish (silent)"
      },
      {
        "flag": "-t SEK",
        "desc": "Javob kutish vaqtini cheklash (timeout)"
      }
    ],
    "example": "read -p 'Ismingizni kiriting: ' user_name\necho \"Salom, $user_name!\"",
    "analogy": "Anketa to'ldirishda 'Ismingiz:' deb savol berib javob kutib turish."
  },
  {
    "cmd": "exit",
    "name": "Cause the Shell to Exit (Chiqish va Holat Kodini Qaytarish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Joriy shell yoki skriptni tugatadi va tizimga chiqish kodini (0 muvaffaqiyat, 1-255 xatolik) qaytaradi.",
    "syntax": "exit [KOD]",
    "flags": [],
    "example": "exit 0\nexit 1",
    "analogy": "Dars tamom bo'lib xonadan chiqib ketish va dars muvaffaqiyatli o'tganini bildirish."
  },
  {
    "cmd": "docker",
    "name": "Container Platform CLI (Konteynerlar Boshqaruvi)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Ilovalarni barcha kutubxonalari bilan birga mustaqil izolyatsiyalangan konteynerlarda ishga tushirish platformasi.",
    "syntax": "docker [BUYRUQ] [PARAMETRLAR]",
    "flags": [],
    "example": "docker --version",
    "analogy": "Dengiz yuk konteyneri. Tovarlarni kemada ham, poyezdda ham hech narsasini buzmasdan xuddi o'zidek eltib beradi.",
    "syntaxRules": "Format: docker [AMAL] [BAYROQLAR] OBRAZ. Detached rejim uchun -d, port uchun -p, volume uchun -v.",
    "combinations": [
      {
        "cmd": "docker ps -a --filter 'status=exited' -q | xargs docker rm",
        "desc": "O'chib qolgan barcha eski konteynerlarni tozalash"
      },
      {
        "cmd": "docker run -d -p 8080:80 --name web -v $(pwd)/html:/usr/share/nginx/html:ro nginx:alpine",
        "desc": "Port va havolali papka (volume) bilan Nginx konteynerini yurgizish"
      },
      {
        "cmd": "docker stats --no-stream --format 'table {{.Name}}\\t{{.CPUPerc}}\\t{{.MemUsage}}'",
        "desc": "Barcha konteynerlarning CPU va RAM sarfini bir lahzada ko'rish"
      }
    ]
  },
  {
    "cmd": "docker run",
    "name": "Run a Command in a New Container (Yangi Konteynerni Boshlash)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Obrazdan (image) yangi konteyner yaratadi va uni ishga tushiradi.",
    "syntax": "docker run [BAYROQLAR] OBRAZ [BUYRUQ]",
    "flags": [
      {
        "flag": "-d",
        "desc": "Orqa fonda ajratilgan rejimda ishga tushirish (detached)"
      },
      {
        "flag": "-p X:Y",
        "desc": "Portlarni ochish: tashqi X portni konteyner ichidagi Y portga ulash (masalan: -p 8080:80)"
      },
      {
        "flag": "--name NOMI",
        "desc": "Konteynerga inson tushunadigan nom berish"
      },
      {
        "flag": "-v X:Y",
        "desc": "Volume ulash: kompyuterdagi X papkani konteyner ichidagi Y ga bog'lash"
      },
      {
        "flag": "--rm",
        "desc": "Konteyner to'xtashi bilan uni avtomatik o'chirib tashlash"
      }
    ],
    "example": "docker run -d -p 80:80 --name my_web nginx:alpine",
    "analogy": "Yangi ijaraga olingan do'konga tovarlarni joylashtirib, tashqi eshigiga 80-raqamli yorliq osish."
  },
  {
    "cmd": "docker ps",
    "name": "List Containers (Ishlab Turgan Konteynerlarni Ko'rish)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Tizimda ishlab turgan yoki to'xtatilgan barcha konteynerlar holatini chiqaradi.",
    "syntax": "docker ps [BAYROQLAR]",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha konteynerlarni, shu jumladan to'xtaganlarini ham ko'rsatish"
      },
      {
        "flag": "-q",
        "desc": "Faqat konteyner ID larini chiqarish (skriptlar uchun)"
      }
    ],
    "example": "docker ps",
    "analogy": "Portdagi barcha kemalar va ularning holatini qayd etuvchi navbatchi jurnali."
  },
  {
    "cmd": "docker exec",
    "name": "Execute a Command in a Running Container (Konteyner Ichiga Kirish)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Ishlab turgan konteyner ichiga yangi buyruq yuborish yoki uning ichida Bash shell ochib ishlash vositasi.",
    "syntax": "docker exec [BAYROQLAR] KONTEYNER BUYRUQ",
    "flags": [
      {
        "flag": "-it",
        "desc": "Interaktiv tty terminal ochish (ichiga kirib ishlash imkonini beradi)"
      }
    ],
    "example": "docker exec -it my_web /bin/sh",
    "analogy": "Konteynerning eshigini ochib, uning ichiga kirib biror narsani tuzatib chiqish."
  },
  {
    "cmd": "docker build",
    "name": "Build an Image from a Dockerfile (Yangi Obraz Yig'ish)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Dockerfile ko'rsatmalari asosida qadamma-qadam yangi dasturiy ta'minot obrazini quradi.",
    "syntax": "docker build [BAYROQLAR] YO'L",
    "flags": [
      {
        "flag": "-t NOMI:TEG",
        "desc": "Yaratilayotgan obrazga nom va versiya tegi berish (masalan: -t myapp:1.0)"
      }
    ],
    "example": "docker build -t my_api:latest .",
    "analogy": "Retsept kitobi (Dockerfile) asosida yangi pishiriq pishirish."
  },
  {
    "cmd": "docker stop",
    "name": "Stop One or More Running Containers (Konteynerni To'xtatish)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Konteyner ichidagi asosiy jarayonga SIGTERM yuborib, uni xavfsiz to'xtatadi.",
    "syntax": "docker stop [BAYROQLAR] KONTEYNER",
    "flags": [
      {
        "flag": "-t N",
        "desc": "SIGKILL yuborishdan oldin N soniya kutish"
      }
    ],
    "example": "docker stop my_web",
    "analogy": "Ish kuni tugagach do'konni yopib kalit bilan qulflash."
  },
  {
    "cmd": "docker rm",
    "name": "Remove One or More Containers (Konteynerni O'chirish)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "To'xtatilgan konteynerlarni xotira va diskdan o'chirib tashlaydi.",
    "syntax": "docker rm [BAYROQLAR] KONTEYNER",
    "flags": [
      {
        "flag": "-f",
        "desc": "Ishlab turgan bo'lsa ham majburiy o'chirish"
      }
    ],
    "example": "docker rm my_web",
    "analogy": "Eskirgan vaqtinchalik chodirni buzib tashlab joyini tozalash."
  },
  {
    "cmd": "docker logs",
    "name": "Fetch the Logs of a Container (Konteyner Loglarini Ko'rish)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Konteyner ichidagi dastur standart chiqishga (stdout/stderr) chiqargan barcha ma'lumotlarni ko'rsatadi.",
    "syntax": "docker logs [BAYROQLAR] KONTEYNER",
    "flags": [
      {
        "flag": "-f",
        "desc": "Yangi kelayotgan loglarni jonli kuzatish (follow)"
      },
      {
        "flag": "--tail N",
        "desc": "Oxirgi N ta qatorni chiqarish"
      }
    ],
    "example": "docker logs -f my_web",
    "analogy": "Konteyner ichidagi avtomat apparatining hisobot lentasini ko'rib chiqish."
  },
  {
    "cmd": "chroot",
    "name": "Change Root Directory (Ildiz Papkani O'zgartirish)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Jarayon uchun yangi izolyatsiyalangan root (/) katalogini belgilaydi. Jarayon bu papkadan tashqariga chiqa olmaydi (qamoqxona/jail). Konteynerlar texnologiyasining eng qadimgi bobosi.",
    "syntax": "sudo chroot YANGI_ILDIZ [BUYRUQ]",
    "flags": [],
    "example": "sudo chroot /jail /bin/sh",
    "analogy": "Bolaga faqat o'yin xonasini ko'rsatib, butun dunyo faqat shu xonadan iborat ekaniga ishontirib qo'yish."
  },
  {
    "cmd": "cgroups",
    "name": "Control Groups (Resurslarni Cheklovchi Yadro Mexanizmi)",
    "cat": "devops",
    "catName": "Docker & Virtualizatsiya",
    "desc": "Linux yadrosining jarayonlar guruhi uchun CPU, xotira, disk I/O va tarmoq resurslarini qat'iy cheklash (quota) tizimi (Docker aynan cgroups ustiga qurilgan).",
    "syntax": "/sys/fs/cgroup/...",
    "flags": [],
    "example": "cat /sys/fs/cgroup/memory/memory.limit_in_bytes",
    "analogy": "Kvartiradagi elektr tokiga avtomat o'rnatish. Agar 5 kilovattdan oshsa, chiroq o'chib cheklov ishga tushadi."
  },
  {
    "cmd": "nano",
    "name": "GNU nano Text Editor (Oson Terminal Matn Muharriri)",
    "cat": "dev",
    "catName": "Muharrirlar & Dasturlar",
    "desc": "Boshlang'ich foydalanuvchilar uchun qulay, pastida barcha klaviatura buyruqlari (Ctrl+O saqlash, Ctrl+X chiqish) yozilgan sodda matn muharriri.",
    "syntax": "nano [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-l",
        "desc": "Qator raqamlarini chiqarish (line numbers)"
      }
    ],
    "example": "nano config.yaml",
    "analogy": "Oddiy va tushunarli Bloknot (Notepad) dasturi."
  },
  {
    "cmd": "vim",
    "name": "Vi IMproved (Professional Modal Matn Muharriri)",
    "cat": "dev",
    "catName": "Muharrirlar & Dasturlar",
    "desc": "Dunyo bo'ylab tizim ma'murlari va dasturchilarining asosiy modal muharriri (Normal rejim, Insert rejim 'i', Buyruq rejimi ':wq').",
    "syntax": "vim FAYL",
    "flags": [],
    "example": "vim script.sh\n# 'i' yozish, 'Esc' chiqish, ':wq' saqlab chiqish",
    "analogy": "Supertezkor sport avtomobili. Haydashni o'rganish biroz vaqt oladi, ammo o'rgangach boshqa mashinaga o'tgingiz kelmaydi."
  },
  {
    "cmd": "gcc",
    "name": "GNU Compiler Collection (C/C++ Kompilyatori)",
    "cat": "dev",
    "catName": "Muharrirlar & Dasturlar",
    "desc": "C va C++ dasturlash tilidagi kodlarni kompyuter tushunadigan mashina tiliga (binary) o'giradi.",
    "syntax": "gcc [BAYROQLAR] MANBA.c -o DASTUR",
    "flags": [
      {
        "flag": "-Wall",
        "desc": "Barcha mumkin bo'lgan ogohlantirishlarni (warnings) ko'rsatish"
      },
      {
        "flag": "-O2",
        "desc": "Kodni tezlik bo'yicha optimallashtirish"
      },
      {
        "flag": "-g",
        "desc": "Debag ma'lumotlarini qo'shish (GDB uchun)"
      }
    ],
    "example": "gcc -Wall main.c -o myprogram",
    "analogy": "Xorijiy tildagi kitobni o'zbek tiliga to'liq tarjima qilib yangi nashr etish."
  },
  {
    "cmd": "make",
    "name": "GNU make Utility to Maintain Groups of Programs (Avtomatik Yig'uvchi)",
    "cat": "dev",
    "catName": "Muharrirlar & Dasturlar",
    "desc": "Makefile qoidalari asosida faqat o'zgargan manba fayllarni aniqlab, loyihani tejamkor va avtomatlashtirilgan tarzda yig'adi.",
    "syntax": "make [MAQSAD]",
    "flags": [
      {
        "flag": "-j N",
        "desc": "N ta yadroda parallel yig'ish (tezlashtiradi)"
      }
    ],
    "example": "make -j4 && sudo make install",
    "analogy": "Katta binoni qurishda qaysi g'ishtlar o'zgarganini bilib, faqat o'sha devorni ta'mirlab beruvchi usta."
  },
  {
    "cmd": "ldd",
    "name": "Print Shared Object Dependencies (Dinamik Kutubxonalar Ro'yxati)",
    "cat": "dev",
    "catName": "Muharrirlar & Dasturlar",
    "desc": "Binar fayl ishlashi uchun qaysi umumiy kutubxonalar (.so fayllar) kerakligini ko'rsatadi.",
    "syntax": "ldd DASTUR",
    "flags": [],
    "example": "ldd /bin/bash",
    "analogy": "Yig'ilayotgan mebel uchun qaysi zavodning bolt va gaykalari talab etilishini tekshirish."
  },
  {
    "cmd": "readlink",
    "name": "Print Value of a Symbolic Link (Simvolik Havola Manzilini O'qish)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Simvolik (soft) havola qaysi haqiqiy faylga qarab turganini aniqlaydi.",
    "syntax": "readlink [BAYROQLAR] HAVOLA",
    "flags": [
      {
        "flag": "-f",
        "desc": "Barcha oraliq symlinklarni to'liq yechib haqiqiy yo'lni ko'rsatish"
      }
    ],
    "example": "readlink -f /usr/bin/python\n/usr/bin/python3.11",
    "analogy": "Ko'rsatkich belgining aslida qaysi ko'chaga eltishini xaritada tekshirish."
  },
  {
    "cmd": "type",
    "name": "Describe a Command (Buyruq Turini Aniqlash)",
    "cat": "nav",
    "catName": "Navigatsiya & Inodelar",
    "desc": "Kiritilgan buyruq Bash ichki buyrug'i (builtin), tashqi binary (/usr/bin), alias yoki funksiya ekanini aytadi.",
    "syntax": "type BUYRUQ",
    "flags": [
      {
        "flag": "-a",
        "desc": "Buyruqning barcha turlarini ko'rsatish"
      }
    ],
    "example": "type cd\ncd is a shell builtin\ntype ls\nls is aliased to 'ls --color=auto'",
    "analogy": "Xodim kompaniyaning doimiy shtatidami yoki yollanma ishchimi ekanini tekshirish."
  },
  {
    "cmd": "nl",
    "name": "Number Lines of Files (Qatorlarni Maxsus Raqamlash)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Fayl qatorlarini turli formatlarda, bo'limlar bo'yicha chiroyli raqamlab beradi.",
    "syntax": "nl [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-ba",
        "desc": "Bo'sh qatorlarni ham birga raqamlash"
      }
    ],
    "example": "nl -ba script.sh",
    "analogy": "Kitob boblarining har bir jumlasiga tartib raqami qo'yib chiqish."
  },
  {
    "cmd": "comm",
    "name": "Compare Two Sorted Files Line by Line (Tartiblangan Fayllarni Solishtirish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Oldindan saralangan (sort) ikki faylni solishtirib, faqat 1-faylda bor, faqat 2-faylda bor va ikkalasida ham bor qatorlarni 3 ta ustunda chiqaradi.",
    "syntax": "comm [BAYROQLAR] FAYL1 FAYL2",
    "flags": [
      {
        "flag": "-1",
        "desc": "1-ustunni (faqat 1-fayldagilarni) yashirish"
      },
      {
        "flag": "-2",
        "desc": "2-ustunni yashirish"
      },
      {
        "flag": "-3",
        "desc": "3-ustunni (umumiy bo'lganlarini) yashirish"
      }
    ],
    "example": "comm -12 listA.txt listB.txt # Faqat ikkalasida ham bor qatorlar",
    "analogy": "Ikki sinf o'quvchilari ro'yxatini solishtirib, umumiy to'garakka qatnashuvchilarni topish."
  },
  {
    "cmd": "join",
    "name": "Join Lines of Two Files on a Common Field (Fayllarni Kalit Bo'yicha Birlashtirish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "SQL dagi INNER JOIN kabi ikki matnli faylni umumiy ustun (kalit) bo'yicha birlashtiradi.",
    "syntax": "join [BAYROQLAR] FAYL1 FAYL2",
    "flags": [
      {
        "flag": "-t 'BELGI'",
        "desc": "Ustunlar ajratuvchisini belgilash"
      }
    ],
    "example": "join -t: users.txt salaries.txt",
    "analogy": "SQL dagi JOIN amali kabi mijozlar jadvali bilan ularning buyurtmalar jadvalini ID bo'yicha ulash."
  },
  {
    "cmd": "hexdump",
    "name": "Hexadecimal, Decimal, Octal, ASCII Dump (O'n Oltilik Ko'rinish)",
    "cat": "text",
    "catName": "Matn, Fayllar & Quvurlar",
    "desc": "Binar fayllarning ichki baytlarini o'n oltilik (hex) va ASCII ko'rinishida ko'rsatadi.",
    "syntax": "hexdump [BAYROQLAR] FAYL",
    "flags": [
      {
        "flag": "-C",
        "desc": "Kanonik format: yonida ASCII harflari bilan chiqarish"
      }
    ],
    "example": "hexdump -C /bin/ls | head -n 10",
    "analogy": "Kompyuter mikrosxemasidagi signallarni mikroskop ostida ko'rish."
  },
  {
    "cmd": "chattr",
    "name": "Change File Attributes on Linux File System (O'zgarmas Fayllar Yaratish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Xavfsizlik",
    "desc": "Faylga maxsus ext4 atributlarini o'rnatadi. Masalan +i atributi faylni hatto root ham o'chira olmaydigan yoki o'zgartira olmaydigan qilib qulflaydi!",
    "syntax": "sudo chattr [BAYROQLAR] [+/-ATRIBUT] FAYL",
    "flags": [
      {
        "flag": "+i",
        "desc": "Immutable: faylni o'chirish, nomini o'zgartirish va yozishni to'liq bloklash"
      },
      {
        "flag": "+a",
        "desc": "Append-only: faqat oxiriga ma'lumot qo'shish mumkin, eskilarini o'chirib bo'lmaydi (loglar uchun ideal)"
      }
    ],
    "example": "sudo chattr +i /etc/resolv.conf",
    "analogy": "Hujjatni temir seyfga solib, kalitini daryoga tashlab yuborish. Hatto kompaniya prezidenti ham uni o'zgartira olmaydi."
  },
  {
    "cmd": "lsattr",
    "name": "List File Attributes on a Linux Second Extended File System (Atributlarni Ko'rish)",
    "cat": "perm",
    "catName": "Ruxsatlar & Xavfsizlik",
    "desc": "Fayllarga qo'yilgan maxsus atributlarni (+i, +a) ko'rsatadi.",
    "syntax": "lsattr [BAYROQLAR] [FAYL]",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha fayllarni ko'rsatish"
      }
    ],
    "example": "lsattr /etc/resolv.conf\n----i---------e------- /etc/resolv.conf",
    "analogy": "Eshikdagi yashirin magnit qulflarni maxsus detektor bilan aniqlash."
  },
  {
    "cmd": "who",
    "name": "Show Who is Logged on (Tizimga Kirgan Foydalanuvchilar)",
    "cat": "perm",
    "catName": "Ruxsatlar & Xavfsizlik",
    "desc": "Ayni daqiqada serverga qaysi foydalanuvchilar qaysi terminal (tty, pts) va IP orqali kirganini ko'rsatadi.",
    "syntax": "who [BAYROQLAR]",
    "flags": [
      {
        "flag": "-b",
        "desc": "Tizim so'nggi marta qachon yoqilganini (boot time) chiqarish"
      },
      {
        "flag": "-H",
        "desc": "Ustunlar sarlavhalari bilan chiqarish"
      }
    ],
    "example": "who\nstudent  pts/0        2026-10-15 04:30 (192.168.1.100)",
    "analogy": "Kutubxonaga yoki ofisga ayni vaqtda kirib o'tirgan tashrifchilar ro'yxati."
  },
  {
    "cmd": "w",
    "name": "Show Who is Logged on and What They are Doing (Foydalanuvchilar Nima Qilyapti?)",
    "cat": "perm",
    "catName": "Ruxsatlar & Xavfsizlik",
    "desc": "Serverdagi faol foydalanuvchilar, server yuklamasi (load average) va har bir foydalanuvchi ayni paytda qaysi buyruqni ishlatayotganini ko'rsatadi.",
    "syntax": "w",
    "flags": [],
    "example": "w",
    "analogy": "Ofisdagi videokuzatuv kamerasi. Kim qaysi stolda o'tirgani va hozir aynan nima ish qilayotganini ko'rsatadi."
  },
  {
    "cmd": "last",
    "name": "Show a Listing of Last Logged in Users (Kirishlar Tarixi)",
    "cat": "perm",
    "catName": "Ruxsatlar & Xavfsizlik",
    "desc": "/var/log/wtmp faylini tahlil qilib, serverga kimlar, qachon, qancha vaqtga kirib chiqqanini ko'rsatadi (kiber-xavfsizlik auditi uchun muhim).",
    "syntax": "last [BAYROQLAR] [USER]",
    "flags": [
      {
        "flag": "-n N",
        "desc": "Oxirgi N ta kirish qaydini ko'rsatish"
      },
      {
        "flag": "-a",
        "desc": "IP manzilni eng o'ng ustunda ko'rsatish"
      }
    ],
    "example": "last -n 5 student",
    "analogy": "Bino nazorat o'tish joyidagi turniketning elektron kirish-chiqish arxivi."
  },
  {
    "cmd": "sleep",
    "name": "Delay for a Specified Amount of Time (Vaqtinchalik Tanaffus)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Skript yoki jarayonni belgilangan soniya, daqiqa yoki soatga to'xtatib turadi.",
    "syntax": "sleep VAQT[s/m/h/d]",
    "flags": [],
    "example": "sleep 5\nsleep 2m",
    "analogy": "Qisqa tanaffus e'lon qilish. Skript belgilangan vaqt davomida uxlab turadi."
  },
  {
    "cmd": "timeout",
    "name": "Run a Command with a Time Limit (Vaqt Cheklovi Bilan Ishga Tushirish)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Buyruqni ishga tushiradi va agar u belgilangan vaqt ichida tugamasa, uni avtomatik o'ldiradi (qotib qolishlarning oldini oladi).",
    "syntax": "timeout [SIGNAL] VAQT BUYRUQ",
    "flags": [
      {
        "flag": "-k VAQT",
        "desc": "SIGTERM dan so'ng ham to'xtamasa, SIGKILL yuborish"
      }
    ],
    "example": "timeout 10s ping 8.8.8.8",
    "analogy": "Imtihondagi qumsoat. Vaqt tugashi bilan o'qituvchi daftarni majburiy olib qo'yadi."
  },
  {
    "cmd": "watch",
    "name": "Execute a Program Periodically, Showing Output Fullscreen (Jonli Takroriy Kuzatuv)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Har 2 soniyada buyruqni qayta-qayta ishga tushirib, natijadagi o'zgarishlarni ekranda jonli ko'rsatib turadi.",
    "syntax": "watch [BAYROQLAR] BUYRUQ",
    "flags": [
      {
        "flag": "-n SEK",
        "desc": "Yangilanish oralig'ini belgilash (masalan: -n 1)"
      },
      {
        "flag": "-d",
        "desc": "O'zgargan harflar va sonlarni rangli qilib ajratib ko'rsatish (differences)"
      }
    ],
    "example": "watch -n 1 -d 'free -m'",
    "analogy": "Stadiondagi hisob tablosini har soniyada ko'zdan kechirib turish."
  },
  {
    "cmd": "pidof",
    "name": "Find the Process ID of a Running Program (Dastur PID ini Aniqlash)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Nomiga ko'ra ishlab turgan dasturning PID raqamini topib beradi.",
    "syntax": "pidof [BAYROQLAR] DASTUR",
    "flags": [
      {
        "flag": "-s",
        "desc": "Faqat bitta yagona PID chiqarish"
      }
    ],
    "example": "pidof nginx\n1048 1049 1050",
    "analogy": "Ism bo'yicha fuqaroning pasport seriya raqamini topib berish."
  },
  {
    "cmd": "lsof",
    "name": "List Open Files (Ochiq Fayllar va Tarmoq Soketlari)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Linuxda 'Hamma narsa fayl' tamoyili bor. lsof qaysi jarayon qaysi faylni, portni yoki soketni ochiq ushlab turganini ko'rsatadi.",
    "syntax": "sudo lsof [BAYROQLAR]",
    "flags": [
      {
        "flag": "-i :PORT",
        "desc": "Aynan ma'lum bir portni (masalan: -i :80) qaysi dastur ushlab turganini ko'rish"
      },
      {
        "flag": "-u USER",
        "desc": "Foydalanuvchining barcha ochiq fayllari"
      },
      {
        "flag": "-p PID",
        "desc": "Aynan shu jarayon ochgan barcha fayllar ro'yxati"
      }
    ],
    "example": "sudo lsof -i :80",
    "analogy": "Kutubxonadagi kitob hozir kimning qo'lida ekanini darhol fosh qiluvchi kitobxon kartochkasi."
  },
  {
    "cmd": "ltrace",
    "name": "A Library Call Tracer (Kutubxona Chaqiriqlarini Kuzatuvchi)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Dasturning dinamik kutubxonalarga (libc: printf, malloc, strlen) qilgan barcha chaqiriqlarini ko'rsatadi.",
    "syntax": "ltrace [BAYROQLAR] DASTUR",
    "flags": [],
    "example": "ltrace ./my_program",
    "analogy": "Dasturchining oshpazga qanday buyurtmalar berganini qadamma-qadam eshitib turish."
  },
  {
    "cmd": "uptime",
    "name": "Tell How Long the System has Been Running (Server Ish Vaqti)",
    "cat": "proc",
    "catName": "Jarayonlar & Signallar",
    "desc": "Server qancha vaqtdan beri o'chmasdan ishlayotgani (uptime), nechta foydalanuvchi borligi va 1, 5, 15 daqiqalik yuklama ko'rsatkichlarini (load average) chiqaradi.",
    "syntax": "uptime [BAYROQLAR]",
    "flags": [
      {
        "flag": "-p",
        "desc": "Chiroyli inson tilida chiqarish (masalan: up 14 days, 3 hours)"
      },
      {
        "flag": "-s",
        "desc": "Server qaysi aniq sana va vaqtda yoqilganini ko'rsatish"
      }
    ],
    "example": "uptime -p\nup 12 weeks, 3 days, 4 hours",
    "analogy": "Avtomobilning bosib o'tgan umumiy masofasi va dvigatelning to'xtovsiz ishlash soati."
  },
  {
    "cmd": "valgrind",
    "name": "Memory Management and Leak Detection Tool (Xotira Oqishini Tekshiruvchi)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "C/C++ dasturlarida xotiraning to'g'ri ajratilishi (malloc), tozalanishi (free) va xotira sizib chiqishlarini (memory leaks) tahlil qiluvchi mashhur vosita.",
    "syntax": "valgrind --leak-check=full ./dastur",
    "flags": [
      {
        "flag": "--leak-check=full",
        "desc": "Xotiradagi har bir oqib ketgan baytni qatorma-qator fosh qilish"
      }
    ],
    "example": "valgrind --leak-check=full ./lab4_fork",
    "analogy": "Suv quvuridagi eng kichik teshik va tomchilarni ham aniqlab beruvchi sezgir skaner."
  },
  {
    "cmd": "sysctl",
    "name": "Configure Kernel Parameters at Runtime (Yadro Parametrlarini Sozlash)",
    "cat": "mem",
    "catName": "Xotira & Swap",
    "desc": "Linux yadrosining xotira, tarmoq va xavfsizlik sozlamalarini (/proc/sys) real vaqtda ko'rish va o'zgartirish vositasi.",
    "syntax": "sudo sysctl [BAYROQLAR] [PARAMETR=QIYMAT]",
    "flags": [
      {
        "flag": "-a",
        "desc": "Barcha yadro parametrlarini chiqarish"
      },
      {
        "flag": "-p",
        "desc": "/etc/sysctl.conf faylidagi o'zgarishlarni qayta yuklash"
      }
    ],
    "example": "sudo sysctl vm.swappiness=10",
    "analogy": "Avtomobilning bort kompyuteriga kirib, dvigatelning maksimal quvvatini dasturiy sozlash."
  },
  {
    "cmd": "blkid",
    "name": "Locate / Print Block Device Attributes (Disk UUID larini Ko'rish)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "Disk bo'limlarining noyob UUID identifikatorlari va fayl tizimi turlarini (/etc/fstab uchun kerak) chiqaradi.",
    "syntax": "sudo blkid [QURILMA]",
    "flags": [],
    "example": "sudo blkid /dev/sda1\n/dev/sda1: UUID=\"a1b2c3d4-...\" TYPE=\"ext4\"",
    "analogy": "Har bir pasportning davlat ro'yxatidan o'tgan takrorlanmas unikal seriya raqami."
  },
  {
    "cmd": "parted",
    "name": "A Partition Manipulation Program (Katta Disklar Boshqaruvi)",
    "cat": "disk",
    "catName": "Disk & Fayl Tizimlari",
    "desc": "2 Terabaytdan katta bo'lgan zamonaviy GPT disklarni bo'limlarga ajratish va o'lchamini o'zgartirish vositasi.",
    "syntax": "sudo parted [QURILMA]",
    "flags": [
      {
        "flag": "-l",
        "desc": "Barcha disklar jadvalini ko'rsatish"
      }
    ],
    "example": "sudo parted -l",
    "analogy": "Katta stadionni qismlarga ajratuvchi professional arxitektor."
  },
  {
    "cmd": "traceroute",
    "name": "Print the Route Packets Trace to Network Host (Paket Yo'nalishini Kuzatish)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Kompyuteringizdan chiqqan paket nishon serverga yetib borguncha qaysi routerlar (hop) orqali o'tayotganini ko'rsatadi.",
    "syntax": "traceroute [BAYROQLAR] MANZIL",
    "flags": [
      {
        "flag": "-n",
        "desc": "DNS nomlarini yechmasdan tezkor raqamli IP larni ko'rsatish"
      }
    ],
    "example": "traceroute -n 8.8.8.8",
    "analogy": "Toshkentdan Samarqandga ketayotgan poyezdning qaysi bekatlarda to'xtab o'tishini kuzatish."
  },
  {
    "cmd": "dig",
    "name": "DNS Lookup Utility (DNS Domen Qidiruv Vositasi)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Domen nomining qaysi IP manzilga (A, CNAME, MX, TXT yozuvlari) tegishli ekanini DNS serverlardan so'rab beradi.",
    "syntax": "dig [BAYROQLAR] DOMEN",
    "flags": [
      {
        "flag": "+short",
        "desc": "Faqat qisqa toza IP manzilni chiqarish"
      },
      {
        "flag": "ANY",
        "desc": "Domenning barcha mavjud DNS yozuvlarini olish"
      }
    ],
    "example": "dig google.com +short\n142.250.185.206",
    "analogy": "Shahar ma'lumotlar byurosidan kompaniyaning aniq manzilini so'rab olish."
  },
  {
    "cmd": "ufw",
    "name": "Uncomplicated Firewall (Sodda Xavfsizlik Devori)",
    "cat": "net",
    "catName": "Tarmoq & Server",
    "desc": "Iptables ustiga qurilgan, server portlarini (22, 80, 443) xakerlardan himoyalovchi juda qulay brandmauer (firewall).",
    "syntax": "sudo ufw [AMAL] [PORT/XIZMAT]",
    "flags": [
      {
        "flag": "allow PORT",
        "desc": "Portga kirishga ruxsat berish (masalan: allow 22/tcp)"
      },
      {
        "flag": "deny PORT",
        "desc": "Portni butunlay yopish"
      },
      {
        "flag": "status",
        "desc": "Faol xavfsizlik qoidalari ro'yxatini ko'rish"
      }
    ],
    "example": "sudo ufw allow 22 && sudo ufw allow 80 && sudo ufw enable",
    "analogy": "Bino kirishidagi qattiqqo'l qorovul. Faqat ruxsatnomasi bor mehmonlarni ichkariga kiritadi."
  },
  {
    "cmd": "echo",
    "name": "Display a Line of Text (Matn Chiqarish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Terminalga matn yoki o'zgaruvchilar qiymatini chiqaradi yoki faylga yo'naltiradi (>).",
    "syntax": "echo [BAYROQLAR] [MATN]",
    "flags": [
      {
        "flag": "-e",
        "desc": "Maxsus belgilarni (\\n yangi qator, \\t tab) yoqish"
      },
      {
        "flag": "-n",
        "desc": "Oxirida yangi qatorga o'tmaslik"
      }
    ],
    "example": "echo \"Current user: $USER\"",
    "analogy": "Karnay orqali e'lon qilish."
  },
  {
    "cmd": "printf",
    "name": "Format and Print Data (Formatlangan Matn Chiqarish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "C tilidagi printf kabi ma'lumotlarni aniq ustunlar va formatlar (%s, %d, %-10s) bo'yicha chiroyli chiqaradi.",
    "syntax": "printf 'FORMAT' [ARGUMENTLAR]",
    "flags": [],
    "example": "printf \"%-10s: %d\\n\" \"Disk\" 85",
    "analogy": "Hujjatni maxsus bosmaxona shabloni bo'yicha chiroyli joylashtirib chop etish."
  },
  {
    "cmd": "test",
    "name": "Check File Types and Compare Values (Shartlarni Tekshirish / [ ])",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Fayl mavjudligi (-f), papkaligi (-d), sonlar kattaligi (-gt, -lt) yoki satrlar tengligini tekshiradi (Bashdagi [ shart ] sintaksisi bilan bir xil).",
    "syntax": "test SHART yoki [ SHART ]",
    "flags": [
      {
        "flag": "-f FAYL",
        "desc": "Fayl mavjud va oddiy fayl ekanini tekshirish"
      },
      {
        "flag": "-d PAPKA",
        "desc": "Papka mavjudligini tekshirish"
      },
      {
        "flag": "-z SATR",
        "desc": "Satr bo'sh ekanligini tekshirish"
      },
      {
        "flag": "-eq / -ne",
        "desc": "Sonlarning teng / teng emasligini tekshirish"
      }
    ],
    "example": "[ -f /etc/passwd ] && echo \"Fayl mavjud!\"",
    "analogy": "Mantiqiy shart tekshiruvi: agar xodim ro'yxatda bo'lsa ichkariga kiritilsin."
  },
  {
    "cmd": "seq",
    "name": "Print a Sequence of Numbers (Raqamlar Ketma-ketligini Chiqarish)",
    "cat": "bash",
    "catName": "Bash & Cron",
    "desc": "Bash sikllari (for) uchun raqamlar ketma-ketligini chiqarib beradi.",
    "syntax": "seq [BOSHLANISH [QADAM]] TUGASH",
    "flags": [
      {
        "flag": "-w",
        "desc": "Boshiga nollar qo'shib bir xil kenglikda chiqarish (01, 02..)"
      }
    ],
    "example": "for i in $(seq 1 5); do echo \"Server #$i\"; done",
    "analogy": "1 dan 100 gacha bo'lgan navbat talonlarini avtomatdan chiqarish."
  },
  {
    "cmd": "gdb",
    "name": "The GNU Project Debugger (C/C++ Dasturlar Debaggeri)",
    "cat": "dev",
    "catName": "Muharrirlar & Dev",
    "desc": "Dasturning qadam-baqadam bajarilishini ko'rish, xotiradagi o'zgaruvchilarni tekshirish va Segmentation Fault sababini aniqlash quroli.",
    "syntax": "gdb [DASTUR]",
    "flags": [],
    "example": "gdb ./my_c_program\n(gdb) run\n(gdb) backtrace",
    "analogy": "Kino lentasini to'xtatib, kadrma-kadr jinoyatchining qayerda xatoga yo'l qo'yganini o'rganish."
  },
  {
    "cmd": "objdump",
    "name": "Display Information from Object Files (Disassembler)",
    "cat": "dev",
    "catName": "Muharrirlar & Dev",
    "desc": "Kompilyatsiya qilingan binar faylni Assembler kodlariga (disassembly) o'girib, mashina ko'rsatmalarini ko'rish imkonini beradi.",
    "syntax": "objdump [BAYROQLAR] DASTUR",
    "flags": [
      {
        "flag": "-d",
        "desc": "Ijrochi kodni assembler tilida chiqarish (disassemble)"
      },
      {
        "flag": "-M intel",
        "desc": "Intel sintaksisida chiqarish (o'qish osonroq)"
      }
    ],
    "example": "objdump -d -M intel ./a.out",
    "analogy": "Zavod mashinasini qismlarga ajratib, ichidagi tishli g'ildiraklarning qanday aylanishini o'rganish."
  }
];

  function buildDictionaryModalHtml() {
    return `
      <div class="os-dict-overlay" id="osDictOverlay">
        <div class="os-dict-modal">
          
          <div class="os-dict-header">
            <div class="os-dict-title-box">
              <span class="os-dict-title-icon">📖</span>
              <div>
                <div class="os-dict-title">Operating Systems — 120+ Linux Buyruqlar Ensiklopediyasi</div>
                <div class="os-dict-sub">Linux CLI, Inodelar, Bash skriptlar, fork(), Xotira va Docker bo'yicha to'liq qo'llanma</div>
              </div>
            </div>
            <button class="os-dict-close" id="btnCloseOsDict" title="Yopish (Esc)">✕</button>
          </div>

          <div class="os-dict-controls">
            <div class="os-dict-search-wrap">
              <span class="os-dict-search-icon">🔍</span>
              <input type="text" id="osDictSearchInput" class="os-dict-search-input" placeholder="Buyruq, bayroq yoki tushunchani qidiring (masalan: pwd, chmod, fork, $?, cron, docker)..." autocomplete="off" />
            </div>

            <div class="os-dict-categories" id="osDictCategories">
              <button class="os-cat-pill active" data-cat="all">Barchasi (${OS_DICTIONARY_DATA.length})</button>
              <button class="os-cat-pill" data-cat="combos">⚡ Quvurlar &amp; Kombinatsiyalar</button>
              <button class="os-cat-pill" data-cat="nav">📁 Navigatsiya &amp; Inodelar</button>
              <button class="os-cat-pill" data-cat="text">📜 Matn &amp; Oqimlar</button>
              <button class="os-cat-pill" data-cat="perm">🔒 Ruxsatlar &amp; Xavfsizlik</button>
              <button class="os-cat-pill" data-cat="proc">⚙️ Jarayonlar &amp; fork()</button>
              <button class="os-cat-pill" data-cat="mem">🧠 Xotira &amp; Swap</button>
              <button class="os-cat-pill" data-cat="disk">💾 Disk &amp; Bloklar</button>
              <button class="os-cat-pill" data-cat="net">🌐 Tarmoq &amp; Server</button>
              <button class="os-cat-pill" data-cat="bash">⚡ Bash &amp; Cron</button>
              <button class="os-cat-pill" data-cat="devops">🐳 Docker &amp; DevOps</button>
              <button class="os-cat-pill" data-cat="dev">🛠 Muharrirlar &amp; Dev</button>
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

  function getScore(item, q) {
    if (!q) return 1;
    const cmd = (item.cmd || "").toLowerCase().trim();
    const name = (item.name || "").toLowerCase();
    const desc = (item.desc || "").toLowerCase();
    
    // Exact command match (Highest priority)
    if (cmd === q) return 10000;
    // Command starts with query (e.g. ls -> lsof, lsblk)
    if (cmd.startsWith(q)) return 5000 + (100 - Math.min(cmd.length, 90));
    // Command contains query
    if (cmd.includes(q)) return 2000;
    
    // Word match in name (e.g. 'arxiv' or 'terminal')
    const nameWords = name.replace(/[^a-z0-9_'-]/g, " ").split(/\s+/);
    if (nameWords.some(w => w === q)) return 1200;
    if (name.startsWith(q)) return 1000;

    // Exact flag match (e.g. -lh, -a, -p, -czvf)
    const cleanQ = q.replace(/^-+/, "");
    if ((item.flags || []).some(f => f.flag.toLowerCase().replace(/^-+/, "") === cleanQ)) return 900;
    
    // Combination command contains query as a distinct token
    if ((item.combinations || []).some(c => c.cmd.toLowerCase().split(/\s+/).includes(q))) return 600;

    // Word match in description
    const descWords = desc.replace(/[^a-z0-9_'-]/g, " ").split(/\s+/);
    if (descWords.some(w => w === q)) return 300;

    // If query is longer than 3 characters, allow substring in name or desc
    if (q.length > 3 && name.includes(q)) return 150;
    if (q.length > 3 && desc.includes(q)) return 50;

    // General mention in examples/analogies/flags
    const flagsText = (item.flags || []).map(f => f.flag + " " + f.desc).join(" ");
    const combosText = (item.combinations || []).map(c => c.cmd + " " + c.desc).join(" ");
    const haystack = (item.example + " " + item.analogy + " " + flagsText + " " + combosText).toLowerCase();
    if (haystack.includes(q)) return 10;
    
    return 0;
  }
  root.getDictionaryScore = getScore;

  // Render cards
  function renderDictionaryEntries(filterText = "", activeCategory = "all") {
    const container = document.getElementById("osDictContent");
    const counter = document.getElementById("osDictCounter");
    if (!container) return;

    const query = filterText.toLowerCase().trim();

    const matchedItems = OS_DICTIONARY_DATA.filter(item => {
      if (activeCategory !== "all" && item.cat !== activeCategory) {
        return false;
      }
      if (!query) return true;
      return getScore(item, query) > 0;
    });

    const filtered = query 
      ? matchedItems.sort((a, b) => getScore(b, query) - getScore(a, query))
      : matchedItems;

    if (counter) {
      counter.textContent = `Ko'rsatilmoqda: ${filtered.length} ta buyruq va tushuncha`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--text-muted, #94a3b8);">
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
        <article class="os-dict-card" id="dict-${escapeHtml(item.cmd)}">
          <div class="os-card-header">
            <div>
              <span class="os-cmd-badge">${escapeHtml(item.cmd)}</span>
              <span class="os-cmd-title">${escapeHtml(item.name)}</span>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="os-cat-tag">${escapeHtml(item.catName)}</span>
              <button class="os-copy-btn" onclick="window.copyToClipboard('${escapeAttr(item.cmd)}')">📋 Nusxalash</button>
              <button class="os-copy-btn" style="background:rgba(56,189,248,0.18); border-color:#38bdf8; color:#38bdf8;" onclick="if(window.insertKaliToken){window.insertKaliToken('${escapeAttr(item.cmd)}'); if(window.closeOsDictionary)window.closeOsDictionary();}">⚡ Terminalga</button>
            </div>
          </div>

          <div class="os-entry-desc">${escapeHtml(item.desc)}</div>

          <div class="os-entry-block">
            <div class="os-block-title">📌 Sintaksis:</div>
            <div class="os-code-snippet">${escapeHtml(item.syntax)}</div>
            ${item.syntaxRules ? `<div style="font-size:11.5px; color:#94a3b8; margin-top:5px; line-height:1.4;"><b>📐 Yozilish qoidasi:</b> ${escapeHtml(item.syntaxRules)}</div>` : ""}
          </div>

          ${item.combinations && item.combinations.length > 0 ? `
            <div class="os-entry-block" style="border-left: 3px solid #38bdf8;">
              <div class="os-block-title" style="color: #38bdf8;">⚡ Haqiqiy Hayotdagi Quvurlar &amp; Kombinatsiyalar (Pipelines):</div>
              <div style="display: flex; flex-direction: column; gap: 6px; margin-top: 6px;">
                ${item.combinations.map(c => `
                  <div style="background: rgba(15, 23, 42, 0.9); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 6px; padding: 6px 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
                      <code style="color: #34d399; font-family: monospace; font-size: 12px; word-break: break-all;">${escapeHtml(c.cmd)}</code>
                      <button class="os-copy-btn" style="flex-shrink: 0; padding: 2px 6px; font-size: 10px;" onclick="window.copyToClipboard('${escapeAttr(c.cmd)}')">📋 Nusxa</button>
                    </div>
                    <div style="font-size: 11px; color: #cbd5e1; margin-top: 3px;">• ${escapeHtml(c.desc)}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}

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

  root.copyToClipboard = function (text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showCopyToast("Buyruq nusxalandi: " + text);
      });
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      showCopyToast("Buyruq nusxalandi: " + text);
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
  root.openOsDictionary = function (initialSearch) {
    if (typeof document === "undefined") return;
    const weeklyModal = document.getElementById("modalWeeklyCommands");
    if (weeklyModal) {
      weeklyModal.style.display = "none";
      weeklyModal.classList.remove("active");
    }
    let overlay = document.getElementById("osDictOverlay");
    if (!overlay) {
      document.body.insertAdjacentHTML("beforeend", buildDictionaryModalHtml());
      overlay = document.getElementById("osDictOverlay");
      bindDictionaryEvents();
    }
    overlay.classList.add("active");
    renderDictionaryEntries(initialSearch || "");
    const input = document.getElementById("osDictSearchInput");
    if (input) {
      input.value = initialSearch || "";
      setTimeout(() => input.focus(), 60);
    }
  };

  root.closeOsDictionary = function () {
    if (typeof document === "undefined") return;
    const overlay = document.getElementById("osDictOverlay");
    if (overlay) overlay.classList.remove("active");
  };

  function bindDictionaryEvents() {
    if (typeof document === "undefined") return;
    const overlay = document.getElementById("osDictOverlay");
    const closeBtn = document.getElementById("btnCloseOsDict");
    const searchInput = document.getElementById("osDictSearchInput");
    const catPills = document.querySelectorAll(".os-cat-pill");

    let currentCat = "all";

    if (closeBtn) {
      closeBtn.addEventListener("click", root.closeOsDictionary);
    }

    if (overlay) {
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) root.closeOsDictionary();
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
        root.closeOsDictionary();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        root.openOsDictionary();
      }
    });
  }

  // Auto attach button trigger
  if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
      const triggerBtn = document.getElementById("btnOpenDictionary");
      if (triggerBtn) {
        triggerBtn.addEventListener("click", root.openOsDictionary);
      }
    });
  }

  root.OS_DICTIONARY_DATA = OS_DICTIONARY_DATA;
  root.findDictionaryCommand = function(cmdName) {
    return OS_DICTIONARY_DATA.find(x => x.cmd.toLowerCase() === (cmdName||'').toLowerCase().trim());
  };

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { 
      OS_DICTIONARY_DATA, 
      findDictionaryCommand: root.findDictionaryCommand,
      getScore 
    };
  }

})();
