// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 2 SPECIFIC COMMANDS REPOSITORY
// Modul: 2-Hafta | Maxsus O'rganilishi Shart Bo'lgan Buyruqlar Ro'yxati
// Bu ro'yxat boshqa haftaliklarga aralashmaydi va qat'iy izolyatsiyalangan!
// ============================================================================

window.WEEKLY_COMMANDS_DATA = [
  {
    "cmd": "useradd",
    "name": "Yangi Foydalanuvchi Qo'shish",
    "category": "Foydalanuvchilar",
    "syntax": "sudo useradd -m -s /bin/bash [FOYDALANUVCHI]",
    "desc": "Tizimga yangi foydalanuvchi kiritadi. '-m' unga uy papkasini ochadi, '-s' standart qobiqni biriktiradi.",
    "dictSearch": "useradd"
  },
  {
    "cmd": "usermod",
    "name": "Foydalanuvchi Sozlamalarini O'zgartirish",
    "category": "Foydalanuvchilar",
    "syntax": "sudo usermod -aG [GURUH] [FOYDALANUVCHI]",
    "desc": "Foydalanuvchi profilini yangilaydi. '-aG' orqali uni qo'shimcha guruhlarga (masalan sudo ga) qo'shish mumkin.",
    "dictSearch": "usermod"
  },
  {
    "cmd": "userdel",
    "name": "Foydalanuvchini O'chirish",
    "category": "Foydalanuvchilar",
    "syntax": "sudo userdel -r [FOYDALANUVCHI]",
    "desc": "Foydalanuvchi profilini tizimdan butunlay o'chiradi. '-r' bayrog'i uning uy katalogini ham yo'qotadi.",
    "dictSearch": "userdel"
  },
  {
    "cmd": "passwd",
    "name": "Parol O'rnatish va O'zgartirish",
    "category": "Foydalanuvchilar",
    "syntax": "sudo passwd [FOYDALANUVCHI]",
    "desc": "Foydalanuvchi xavfsizlik parolini o'rnatadi yoki mavjud parolni yangilash uchun interaktiv so'rov ochadi.",
    "dictSearch": "passwd"
  },
  {
    "cmd": "groupadd",
    "name": "Yangi Tizim Guruhini Yaratish",
    "category": "Foydalanuvchilar",
    "syntax": "sudo groupadd [GURUH_NOMI]",
    "desc": "/etc/group fayliga yangi guruh kiritadi, bu resurslarni guruh bo'yicha cheklash uchun kerak.",
    "dictSearch": "groupadd"
  },
  {
    "cmd": "groupdel",
    "name": "Guruhni Tizimdan O'chirish",
    "category": "Foydalanuvchilar",
    "syntax": "sudo groupdel [GURUH_NOMI]",
    "desc": "Ortiqcha yoki eskirgan guruhni tizim konfiguratsiyasidan o'chirib tashlaydi.",
    "dictSearch": "groupdel"
  },
  {
    "cmd": "groups",
    "name": "Tegishli Guruhlarni Ko'rish",
    "category": "Foydalanuvchilar",
    "syntax": "groups [FOYDALANUVCHI]",
    "desc": "Foydalanuvchi a'zo bo'lgan barcha guruhlar ro'yxatini chiqarib beradi.",
    "dictSearch": "groups"
  },
  {
    "cmd": "id",
    "name": "Foydalanuvchi va Guruh ID lari",
    "category": "Foydalanuvchilar",
    "syntax": "id [FOYDALANUVCHI]",
    "desc": "Foydalanuvchining raqamli UID (User ID), GID (Group ID) va barcha qo'shimcha guruh identifikatorlarini ko'rsatadi.",
    "dictSearch": "id"
  },
  {
    "cmd": "su",
    "name": "Boshqa Foydalanuvchiga O'tish",
    "category": "Xavfsizlik",
    "syntax": "su - [FOYDALANUVCHI]",
    "desc": "Joriy terminalda boshqa foydalanuvchining muhitiga o'tadi (Switch User). '-' belgisi to'liq login muhitini yuklaydi.",
    "dictSearch": "su"
  },
  {
    "cmd": "sudo",
    "name": "SuperUser Huquqi Bilan Bajarish",
    "category": "Xavfsizlik",
    "syntax": "sudo [BUYRUQ]",
    "desc": "Administrator (root) imtiyozlarini talab qiluvchi buyruqlarni xavfsiz audit ostida bajarish vositasi.",
    "dictSearch": "sudo"
  },
  {
    "cmd": "chmod",
    "name": "Fayl Ruxsatlarini O'zgartirish",
    "category": "Ruxsatlar",
    "syntax": "chmod 755 [FAYL] yoki chmod +x [FAYL]",
    "desc": "Fayl yoki katalog uchun egasi, guruhi va boshqalarga o'qish (r), yozish (w) hamda bajarish (x) huquqlarini o'rnatadi.",
    "dictSearch": "chmod"
  },
  {
    "cmd": "chown",
    "name": "Fayl Egasi va Guruhini O'zgartirish",
    "category": "Ruxsatlar",
    "syntax": "sudo chown [EGA]:[GURUH] [FAYL]",
    "desc": "Fayl yoki butun katalog ierarxiyasining haqiqiy egasi (ownership) hamda unga mas'ul guruhini belgilaydi.",
    "dictSearch": "chown"
  },
  {
    "cmd": "chgrp",
    "name": "Fayl Guruhini Yangilash",
    "category": "Ruxsatlar",
    "syntax": "sudo chgrp [GURUH] [FAYL]",
    "desc": "Fayl egasini o'zgartirmasdan, faqat unga tegishli bo'lgan guruh nomini yangilash uchun ishlatiladi.",
    "dictSearch": "chgrp"
  },
  {
    "cmd": "umask",
    "name": "Boshlang'ich Ruxsatlar Niqobi",
    "category": "Ruxsatlar",
    "syntax": "umask [NIQOB_RAQAMI]",
    "desc": "Yangi yaratiladigan fayllar (666) va kataloglar (777) uchun avtomatik ayirib tashlanadigan standart cheklov niqobi.",
    "dictSearch": "umask"
  },
  {
    "cmd": "grep",
    "name": "Matndan Qidirish & Regex",
    "category": "Matn Filtrlari",
    "syntax": "grep -in '[QIDIRUV]' [FAYL]",
    "desc": "Fayl yoki quvurlar oqimidan berilgan so'z yoki muntazam ifodaga mos keluvchi barcha qatorlarni chaqqon topib beradi.",
    "dictSearch": "grep"
  },
  {
    "cmd": "sed",
    "name": "Oqimli Matn Tahrirchisi (Stream Editor)",
    "category": "Matn Filtrlari",
    "syntax": "sed 's/eski/yangi/g' [FAYL]",
    "desc": "Matn ichidagi so'zlarni almashtirish, qatorlarni o'chirish yoki qo'shishni avtomatlashtiruvchi qudratli vosita.",
    "dictSearch": "sed"
  },
  {
    "cmd": "awk",
    "name": "Ustunli Ma'lumotlarni Qayta Ishlash",
    "category": "Matn Filtrlari",
    "syntax": "awk -F: '{print $1, $3}' /etc/passwd",
    "desc": "Jadvalli va ajratgichli ma'lumotlarni ustunma-ustun tahlil qilish, shartlar tekshirish va hisob-kitob qilish dasturlash vositasi.",
    "dictSearch": "awk"
  },
  {
    "cmd": "cut",
    "name": "Qatorlardan Ustun Ajratish",
    "category": "Matn Filtrlari",
    "syntax": "cut -d':' -f1 [FAYL]",
    "desc": "Matn qatorlarini ma'lum bir ajratuvchi belgi (delimiter) orqali kesib, faqat kerakli ustunlarni qirqib oladi.",
    "dictSearch": "cut"
  },
  {
    "cmd": "sort",
    "name": "Qatorlarni Tartiblash",
    "category": "Matn Filtrlari",
    "syntax": "sort -n -r [FAYL]",
    "desc": "Matn qatorlarini alifbo tartibida yoki raqamli qiymatlar ('-n') bo'yicha to'g'ri va teskari ('-r') tartiblaydi.",
    "dictSearch": "sort"
  },
  {
    "cmd": "uniq",
    "name": "Takroriy Qatorlarni Filtrlash",
    "category": "Matn Filtrlari",
    "syntax": "uniq -c [TARTIBLANGAN_FAYL]",
    "desc": "Ketma-ket kelgan takroriy qatorlarni yo'qotadi yoki '-c' bayrog'i bilan har bir qator necha marta uchraganini sanaydi.",
    "dictSearch": "uniq"
  },
  {
    "cmd": "tr",
    "name": "Belgilarni Almashtirish (Translate)",
    "category": "Matn Filtrlari",
    "syntax": "tr 'a-z' 'A-Z'",
    "desc": "Kiritish oqimidagi belgilarni boshqasiga o'giradi (masalan kichik harflarni kattaga) yoki ortiqcha belgilarni o'chiradi.",
    "dictSearch": "tr"
  },
  {
    "cmd": "tar",
    "name": "Arxivlash va Siqish (Tape Archive)",
    "category": "Tizim & Arxiv",
    "syntax": "tar -czvf arxiv.tar.gz [PAPKA]",
    "desc": "Ko'plab fayl va kataloglarni bitta ixcham '.tar' yoki '.tar.gz' arxiv fayliga jamlaydi va arxivdan ochadi ('-xzvf').",
    "dictSearch": "tar"
  },
  {
    "cmd": "df",
    "name": "Disk Xotirasini Ko'rish",
    "category": "Tizim & Tahlil",
    "syntax": "df -h",
    "desc": "Barcha ulangan disk bo'limlari, ularning umumiy hajmi, ishlatilgan qismi va bo'sh joyini odam o'qiy oladigan (MB/GB) ko'rinishda chiqaradi.",
    "dictSearch": "df"
  },
  {
    "cmd": "du",
    "name": "Papkalar Hajmini Hisoblash",
    "category": "Tizim & Tahlil",
    "syntax": "du -sh [KATALOG]",
    "desc": "Katalog va uning ichidagi barcha fayllar diskda jami qancha hajm egallab turganini aniqlab beradi.",
    "dictSearch": "du"
  },
  {
    "cmd": "nano",
    "name": "Sodda Konsol Matn Muharriri",
    "category": "Muharrirlar",
    "syntax": "nano [FAYL]",
    "desc": "Terminal ichida tezkor va oson matn yoki skript yozish imkonini beruvchi klaviatura boshqaruvidagi muharrir.",
    "dictSearch": "nano"
  },
  {
    "cmd": "vim",
    "name": "Professional Terminal Muharriri",
    "category": "Muharrirlar",
    "syntax": "vim [FAYL]",
    "desc": "Rejimli (Normal, Insert, Visual, Command) yuqori samarali Linux matn muharriri.",
    "dictSearch": "vim"
  }
];
