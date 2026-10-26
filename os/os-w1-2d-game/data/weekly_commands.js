// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 1 SPECIFIC COMMANDS REPOSITORY
// Modul: 1-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Bu ro'yxat boshqa haftaliklarga aralashmaydi va qat'iy izolyatsiyalangan!
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "pwd",
    "name": "Joriy Ishchi Katalogni Ko'rish",
    "category": "Navigatsiya",
    "syntax": "pwd",
    "desc": "Tizimda hozir qaysi katalogda (papka) turganingizning to'liq absolyut manzilini (Print Working Directory) chiqaradi.",
    "dictSearch": "pwd"
  },
  {
    "cmd": "ls",
    "name": "Fayllar va Papkalar Ro'yxati",
    "category": "Navigatsiya",
    "syntax": "ls -la [KATALOG]",
    "desc": "Katalog ichidagi barcha fayllarni, jumladan yashirin fayllar (.fayl), ruxsatlar, egasi va hajmini ko'rsatadi.",
    "dictSearch": "ls"
  },
  {
    "cmd": "cd",
    "name": "Kataloglar Bo'ylab Harakatlanish",
    "category": "Navigatsiya",
    "syntax": "cd [MANZIL]",
    "desc": "Boshqa katalogga o'tish vositasi: 'cd ..' bir pog'ona yuqoriga, 'cd ~' uy papkasiga, 'cd -' oldingi joyga qaytaradi.",
    "dictSearch": "cd"
  },
  {
    "cmd": "mkdir",
    "name": "Yangi Katalog Yaratish",
    "category": "Fayl Boshqaruvi",
    "syntax": "mkdir -p [KATALOG_YOLI]",
    "desc": "Fayl tizimida yangi papka ochadi. '-p' bayrog'i ichma-ich zanjir kataloglarni (parents) avtomatik barpo etadi.",
    "dictSearch": "mkdir"
  },
  {
    "cmd": "rmdir",
    "name": "Bo'sh Katalogni O'chirish",
    "category": "Fayl Boshqaruvi",
    "syntax": "rmdir [BO'SH_KATALOG]",
    "desc": "Faqatgina ichida hech narsa bo'lmagan bo'sh kataloglarni xavfsiz o'chirish uchun xizmat qiladi.",
    "dictSearch": "rmdir"
  },
  {
    "cmd": "touch",
    "name": "Bo'sh Fayl Yaratish & Timestamp",
    "category": "Fayl Boshqaruvi",
    "syntax": "touch [FAYL_NOMI]",
    "desc": "Yangi 0 baytlik fayl yaratadi yoki mavjud faylning oxirgi o'zgartirilgan vaqt tamg'asini (timestamp) yangilaydi.",
    "dictSearch": "touch"
  },
  {
    "cmd": "cp",
    "name": "Fayl va Katalogni Nusxalash",
    "category": "Fayl Boshqaruvi",
    "syntax": "cp -r [MANBA] [MANZIL]",
    "desc": "Fayldan nusxa oladi. Kataloglarni to'liq nusxalash uchun rekursiv '-r' bayrog'i ishlatiladi.",
    "dictSearch": "cp"
  },
  {
    "cmd": "mv",
    "name": "Ko'chirish & Qayta Nomlash",
    "category": "Fayl Boshqaruvi",
    "syntax": "mv [ESKI_FAYL] [YANGI_MANZIL_YOKI_NOM]",
    "desc": "Fayl yoki katalogni boshqa manzilga ko'chiradi yoki uning nomini o'zgartiradi (fayl inodelari saqlanadi).",
    "dictSearch": "mv"
  },
  {
    "cmd": "rm",
    "name": "Fayl va Katalogni O'chirish",
    "category": "Fayl Boshqaruvi",
    "syntax": "rm -rf [FAYL_YOKI_KATALOG]",
    "desc": "Fayllarni butunlay o'chiradi. '-r' kataloglarni, '-f' esa so'rovsiz majburiy o'chirish (force) imkonini beradi.",
    "dictSearch": "rm"
  },
  {
    "cmd": "cat",
    "name": "Fayl Tarkibini O'qish va Birlashtirish",
    "category": "Matn & Tahlil",
    "syntax": "cat -n [FAYL]",
    "desc": "Fayl ichidagi matnni to'liq terminalga chiqaradi. '-n' qator raqamlarini ham ko'rsatadi.",
    "dictSearch": "cat"
  },
  {
    "cmd": "head",
    "name": "Boshlang'ich Qatorlarni Chiqarish",
    "category": "Matn & Tahlil",
    "syntax": "head -n [SON] [FAYL]",
    "desc": "Faylning yuqori qismidan boshlab berilgan sondagi qatorlarni (standart 10 qator) ekranga chiqaradi.",
    "dictSearch": "head"
  },
  {
    "cmd": "tail",
    "name": "Oxirgi Qatorlarni Chiqarish & Jonli Kuzatish",
    "category": "Matn & Tahlil",
    "syntax": "tail -f [FAYL]",
    "desc": "Fayl oxiridagi qatorlarni chiqaradi. '-f' bayrog'i server log fayllarini real vaqtda jonli kuzatish imkonini beradi.",
    "dictSearch": "tail"
  },
  {
    "cmd": "wc",
    "name": "Qator, So'z va Baytlarni Sanash",
    "category": "Matn & Tahlil",
    "syntax": "wc -l [FAYL]",
    "desc": "Matnli fayldagi qatorlar ('-l'), so'zlar ('-w') va baytlar ('-c') sonini hisoblab beruvchi quvvatli vosita.",
    "dictSearch": "wc"
  },
  {
    "cmd": "stat",
    "name": "Inode & Metadata Chuqur Tahlili",
    "category": "Inode & Fayl Tizimi",
    "syntax": "stat [FAYL_YOKI_KATALOG]",
    "desc": "Faylning Inode raqami, jismoniy bloklari, hajm, ruxsatlar, links soni va Access/Modify/Change vaqtlarini to'liq ochib beradi.",
    "dictSearch": "stat"
  },
  {
    "cmd": "ln",
    "name": "Hard Link & Soft Link Yaratish",
    "category": "Inode & Fayl Tizimi",
    "syntax": "ln -s [ASL_FAYL] [HAVOLA_NOMI]",
    "desc": "Fayllararo bog'lanish: 'ln' bir xil Inodega ega Hard link yaratadi, 'ln -s' esa ko'rsatkichli ramziy (Symbolic/Soft) havola yasaydi.",
    "dictSearch": "ln"
  },
  {
    "cmd": "find",
    "name": "Fayllarni Filtrlash va Qidirish",
    "category": "Inode & Fayl Tizimi",
    "syntax": "find [MANZIL] -name '*.txt' -type f",
    "desc": "Fayl tizimida nom, tur (f/d/l), hajm, vaqt yoki Inode raqami bo'yicha kuchli qidiruvni amalga oshiradi.",
    "dictSearch": "find"
  },
  {
    "cmd": "file",
    "name": "Faylning Haqiqiy Formatini Aniqlash",
    "category": "Tizim & Tahlil",
    "syntax": "file [FAYL]",
    "desc": "Fayl kengaytmasiga aldanmasdan, uning ichki 'sehrli baytlari' (magic numbers) orqali haqiqiy turini (ASCII, ELF binary, JPEG va h.k.) aniqlaydi.",
    "dictSearch": "file"
  },
  {
    "cmd": "which",
    "name": "Buyruq Manzilini Topish",
    "category": "Tizim & Tahlil",
    "syntax": "which [BUYRUQ]",
    "desc": "$PATH muhit o'zgaruvchisidan buyruqning qaysi katalogda joylashganini (e.g. /usr/bin/bash) topib beradi.",
    "dictSearch": "which"
  },
  {
    "cmd": "tree",
    "name": "Ierarxik Daraxt Ko'rinishi",
    "category": "Navigatsiya",
    "syntax": "tree -L [CHUQURLIK] [KATALOG]",
    "desc": "Kataloglar va fayllar tuzilishini ko'rgazmali daraxtsimon grafik chiziqlar bilan terminalda namoyish etadi.",
    "dictSearch": "tree"
  },
  {
    "cmd": "more",
    "name": "Matnni Sahifalab O'qish",
    "category": "Matn & Tahlil",
    "syntax": "more [FAYL]",
    "desc": "Uzun matnli fayllarni terminal ekraniga moslab, pastga qarab sahifalab o'qish imkonini beruvchi sodda ko'ruvchi.",
    "dictSearch": "more"
  },
  {
    "cmd": "less",
    "name": "Interaktiv Matn Ko'ruvchi",
    "category": "Matn & Tahlil",
    "syntax": "less [FAYL]",
    "desc": "Katta fayllarni xotiraga yuklamasdan, yuqoriga va pastga erkin aylantirib, ichidan qidiruv olib borish vositasi.",
    "dictSearch": "less"
  },
  {
    "cmd": "echo",
    "name": "Matn yoki O'zgaruvchini Chiqarish",
    "category": "Matn & Tahlil",
    "syntax": "echo [MATN_YOKI_$OZGARUVCHI]",
    "desc": "Terminalga matn chiqaradi yoki qayta yo'naltirish ('>', '>>') orqali yangi faylga yozib beradi.",
    "dictSearch": "echo"
  },
  {
    "cmd": "clear",
    "name": "Terminalni Tozalash",
    "category": "Navigatsiya",
    "syntax": "clear",
    "desc": "Terminal ekranidagi eski yozuvlarni tozalab, kursor va promptni tepaga qaytaradi (Ctrl+L muqobili).",
    "dictSearch": "clear"
  },
  {
    "cmd": "hostname",
    "name": "Server va Tarmoq Nomi",
    "category": "Tizim & Tahlil",
    "syntax": "hostname",
    "desc": "Joriy Linux serverining tarmoqdagi rasmiy identifikator nomini ko'rsatadi.",
    "dictSearch": "hostname"
  },
  {
    "cmd": "whoami",
    "name": "Faol Foydalanuvchini Aniqlash",
    "category": "Tizim & Tahlil",
    "syntax": "whoami",
    "desc": "Hozirgi terminal sessiyasida qaysi foydalanuvchi hisobidan buyruq bajarilayotganini ko'rsatadi.",
    "dictSearch": "whoami"
  }
];
