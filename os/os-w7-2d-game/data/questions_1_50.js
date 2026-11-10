/**
 * WIUT OS WEEK 7 — QUESTION DOSSIERS (questions_1_50.js)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    window.QUESTIONS_W7_PART1 = root.QUESTIONS_W7_PART1 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 1,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 1",
    "title": "Fayl Inode Raqamini Ko'rish (ls -i)",
    "story": "L07 File Systems: Fayl tizimida fayl nomi faqat inodega ko'rsatuvchi yorliqdir. Faylning aniq inode raqamini aniqlash lozim.",
    "task": "`app.py` faylining inode raqamini ko'rish uchun `ls` buyrug'iga tegishli bayroqni bering.",
    "canonical": "ls -i app.py",
    "accepted": [
      "ls -i app.py",
      "ls -i",
      "ls -li app.py",
      "ls -il app.py"
    ],
    "tags": [
      "#INODE",
      "#LS",
      "#FILESYSTEM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning diskdagi unikal inode raqamini ko'rsatish.",
      "flags": [
        {
          "flag": "-i",
          "meaning": "Print the index number of each file (inode)",
          "syntax": "ls -i [fayl]"
        }
      ],
      "whenToUse": "Fayllar bir xil inode ga egaligini (hard link) tekshirishda.",
      "omissionRisk": "-i bo'lmasa faqat fayl nomi chiqadi, uning diskdagi indeksi ko'rinmaydi.",
      "syntaxExample": "ls -i file1.txt"
    }
  },
  {
    "id": 2,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 2",
    "title": "Fayl Metadatasini To'liq Ko'rish (stat)",
    "story": "Faylning barcha atributlarini (Inode, Links, Access, Modify, Change vaqtlari) batafsil ko'rish talab etiladi.",
    "task": "`file1.txt` faylining to'liq metadata ma'lumotlarini chiqaruvchi buyruqni yozing.",
    "canonical": "stat file1.txt",
    "accepted": [
      "stat file1.txt",
      "stat"
    ],
    "tags": [
      "#STAT",
      "#METADATA",
      "#INODE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl yoki fayl tizimining to'liq statusini ko'rsatish.",
      "flags": [],
      "whenToUse": "Faylning aniq o'zgarish vaqtlari (atime, mtime, ctime) va inodeni tekshirishda.",
      "omissionRisk": "ls faqat umumiy ruxsatlarni beradi, stat esa barcha kernel atributlarini ochadi.",
      "syntaxExample": "stat fayl.txt"
    }
  },
  {
    "id": 3,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 3",
    "title": "Fayl Tizimidagi Inodelar Zaxirasini Tekshirish (df -i)",
    "story": "Serverda diskda gigabaytlab joy bo'lsa ham, inodelar tugasa yangi fayl yaratib bo'lmaydi.",
    "task": "Fayl tizimidagi bo'sh va band inodelar statistikasini chiqaruvchi buyruqni yozing.",
    "canonical": "df -i",
    "accepted": [
      "df -i",
      "df -ih",
      "df -h -i"
    ],
    "tags": [
      "#DF",
      "#INODE_EXHAUSTION",
      "#STORAGE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Inode jadvalidagi bo'sh va band o'rinlarni tekshirish.",
      "flags": [
        {
          "flag": "-i",
          "meaning": "List inode information instead of block usage",
          "syntax": "df -i"
        }
      ],
      "whenToUse": "'No space left on device' xatosi chiqqanda disk inodelarini audit qilish uchun.",
      "omissionRisk": "-i berilmasa faqat bloklar ko'rinadi, inodelar yetishmovchiligini payqamay qolasiz.",
      "syntaxExample": "df -i"
    }
  },
  {
    "id": 4,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 4",
    "title": "Inode Metadata Auditi (4-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 5,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 5",
    "title": "Inode Metadata Auditi (5-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 6,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 6",
    "title": "Inode Metadata Auditi (6-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 7,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 7",
    "title": "Inode Metadata Auditi (7-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 8,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 8",
    "title": "Inode Metadata Auditi (8-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 9,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 9",
    "title": "Inode Metadata Auditi (9-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 10,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 10",
    "title": "Inode Metadata Auditi (10-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 11,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 11",
    "title": "Inode Metadata Auditi (11-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 12,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 12",
    "title": "Inode Metadata Auditi (12-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 13,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 13",
    "title": "Inode Metadata Auditi (13-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 14,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 14",
    "title": "Inode Metadata Auditi (14-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 15,
    "sectorId": 1,
    "sectorTitle": "Fayl Tizimi & Inode Metadata Tahlili",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 15",
    "title": "Inode Metadata Auditi (15-Topshiriq)",
    "story": "Linux fayl tizimida inode fayl o'lchami, egasi, huquqlari va disk bloklari ko'rsatkichlarini saqlaydi.",
    "task": "Faylning inode metadatasini tekshirish uchun `stat app.py` buyrug'ini yozing.",
    "canonical": "stat app.py",
    "accepted": [
      "stat app.py",
      "stat"
    ],
    "tags": [
      "#INODE",
      "#METADATA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faylning inode holatini tahlil qilish.",
      "flags": [],
      "whenToUse": "Inode va disk bloklari bog'lanishini tekshirishda.",
      "omissionRisk": "stat bo'lmasa o'zgarish vaqtlari aniqlanmaydi.",
      "syntaxExample": "stat app.py"
    }
  },
  {
    "id": 16,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 16",
    "title": "Qattiq Havola Yaratish: ln file1.txt hardlink1",
    "story": "L07: Hard link asl fayl bilan aynan bitta inodeni bo'lishadi. Ulardan biri o'chirilsa ham ma'lumot saqlanib qoladi.",
    "task": "`file1.txt` fayliga `hard1` nomli qattiq havola (hard link) yarating.",
    "canonical": "ln file1.txt hard1",
    "accepted": [
      "ln file1.txt hard1",
      "ln file1.txt ./hard1"
    ],
    "tags": [
      "#HARD_LINK",
      "#LN",
      "#INODE_SHARING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta inodega yangi yo'l (qattiq havola) yaratish.",
      "flags": [],
      "whenToUse": "Faylning zaxira yo'lini yaratishda (asl fayl o'chirilsa ham ma'lumot qoladi).",
      "omissionRisk": "-s berilmasa qattiq havola yaratiladi (faqat bitta fayl tizimi doirasida ishlaydi).",
      "syntaxExample": "ln manba nishon"
    }
  },
  {
    "id": 17,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 17",
    "title": "Simvolik (Yumshoq) Havola Yaratish: ln -s",
    "story": "Soft link (symlink) - boshqa fayl yo'lini (path) o'zida saqlovchi mustaqil fayldir (boshqa inodega ega bo'ladi).",
    "task": "`app.py` fayliga `app_symlink` nomli simvolik havola yarating.",
    "canonical": "ln -s app.py app_symlink",
    "accepted": [
      "ln -s app.py app_symlink",
      "ln -s ./app.py app_symlink"
    ],
    "tags": [
      "#SOFT_LINK",
      "#SYMLINK",
      "#LN_S"
    ],
    "flagAnatomy": {
      "commandPurpose": "Boshqa fayl manziliga yo'naltiruvchi simvolik havola yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Make symbolic links instead of hard links",
          "syntax": "ln -s [fayl] [havola]"
        }
      ],
      "whenToUse": "Papkalarga havola berishda yoki turli disk bo'limlari orasida bog'lanishda.",
      "omissionRisk": "-s unutilsa hard link yaratiladi va turli bo'limlarda xatolik beradi.",
      "syntaxExample": "ln -s /var/log/app.log current.log"
    }
  },
  {
    "id": 18,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 18",
    "title": "Havolalar Nazorati & Tahlili (3-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 19,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 19",
    "title": "Havolalar Nazorati & Tahlili (4-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 20,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 20",
    "title": "Havolalar Nazorati & Tahlili (5-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 21,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 21",
    "title": "Havolalar Nazorati & Tahlili (6-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 22,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 22",
    "title": "Havolalar Nazorati & Tahlili (7-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 23,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 23",
    "title": "Havolalar Nazorati & Tahlili (8-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 24,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 24",
    "title": "Havolalar Nazorati & Tahlili (9-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 25,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 25",
    "title": "Havolalar Nazorati & Tahlili (10-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 26,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 26",
    "title": "Havolalar Nazorati & Tahlili (11-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 27,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 27",
    "title": "Havolalar Nazorati & Tahlili (12-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 28,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 28",
    "title": "Havolalar Nazorati & Tahlili (13-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 29,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 29",
    "title": "Havolalar Nazorati & Tahlili (14-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 30,
    "sectorId": 2,
    "sectorTitle": "Qattiq va Simvolik Havolalar (ln vs ln -s)",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 30",
    "title": "Havolalar Nazorati & Tahlili (15-Bosqich)",
    "story": "Hard link va Soft link larning diskdagi xususiyatlarini tekshirish.",
    "task": "`file1.txt` fayliga `ln -s file1.txt sym1` simvolik havolasini yarating.",
    "canonical": "ln -s file1.txt sym1",
    "accepted": [
      "ln -s file1.txt sym1"
    ],
    "tags": [
      "#LINKS",
      "#SYMLINK"
    ],
    "flagAnatomy": {
      "commandPurpose": "Simvolik havolalar yaratish.",
      "flags": [
        {
          "flag": "-s",
          "meaning": "Symbolic link yaratish",
          "syntax": "ln -s manba nishon"
        }
      ],
      "whenToUse": "Yorliqlar bilan ishlashda.",
      "omissionRisk": "Asl fayl o'chsa havola buziladi.",
      "syntaxExample": "ln -s file1.txt sym1"
    }
  },
  {
    "id": 31,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 31",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (1-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 32,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 32",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (2-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 33,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 33",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (3-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 34,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 34",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (4-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 35,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 35",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (5-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 36,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 36",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (6-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 37,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 37",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (7-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 38,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 38",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (8-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 39,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 39",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (9-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 40,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 40",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (10-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 41,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 41",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (11-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 42,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 42",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (12-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 43,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 43",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (13-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 44,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 44",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (14-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 45,
    "sectorId": 3,
    "sectorTitle": "Fayl Joylashtirish Usullari & Disk Fragmentatsiyasi",
    "difficulty": "Oson",
    "source": "OS Seminar 07 & Lecture 07 • Task 45",
    "title": "Fayl Joylashtirish & Bloklar Tahlili (15-Topshiriq)",
    "story": "Fayl tizimida ma'lumotlar bloklari ketma-ket (Contiguous), bog'langan ro'yxat (Linked) yoki ko'rsatkichli (Indexed / Inode) usulda ajratiladi.",
    "task": "Disk bloklari va bo'sh joyni ko'rish uchun `df -h` buyrug'ini yozing.",
    "canonical": "df -h",
    "accepted": [
      "df -h",
      "df"
    ],
    "tags": [
      "#ALLOCATION",
      "#DISK_BLOCKS",
      "#DF"
    ],
    "flagAnatomy": {
      "commandPurpose": "Fayl tizimlari bloklari va bo'sh joyini inson tushunadigan formatda chiqarish.",
      "flags": [
        {
          "flag": "-h",
          "meaning": "Human-readable (GB, MB formatida)",
          "syntax": "df -h"
        }
      ],
      "whenToUse": "Disk xotirasi to'lishini monitoring qilishda.",
      "omissionRisk": "-h bo'lmasa 1K bloklar soni chiqadi, hisoblash noqulay bo'ladi.",
      "syntaxExample": "df -h"
    }
  },
  {
    "id": 46,
    "sectorId": 4,
    "sectorTitle": "Virtual Xotira Matematikasi (Page Table & TLB)",
    "difficulty": "O'rta",
    "source": "OS Seminar 07 & Lecture 07 • Task 46",
    "title": "Virtual Xotira & Sahifa Jadvali Hisobi (1-Topshiriq)",
    "story": "S07 Virtual Memory: 4KB sahifa o'lchami (Page Size) uchun ofset 12 bit talab qiladi (2^12 = 4096 bayt). 256 ta sahifa uchun esa 8 bit virtual sahifa raqami (VPN) kerak.",
    "task": "Operativ xotira va Swap holatini ko'rish uchun `free -m` buyrug'ini yozing.",
    "canonical": "free -m",
    "accepted": [
      "free -m",
      "free -h",
      "free"
    ],
    "tags": [
      "#VIRTUAL_MEMORY",
      "#PAGING",
      "#FREE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jismoniy xotira (RAM) va Swap maydoni holatini ko'rsatish.",
      "flags": [
        {
          "flag": "-m",
          "meaning": "Display amount of memory in megabytes",
          "syntax": "free -m"
        }
      ],
      "whenToUse": "Xotira tugab borayotganini va swap yuklamasini aniqlashda.",
      "omissionRisk": "Baytlar ko'rinishida xotirani baholash qiyinlashadi.",
      "syntaxExample": "free -m"
    }
  },
  {
    "id": 47,
    "sectorId": 4,
    "sectorTitle": "Virtual Xotira Matematikasi (Page Table & TLB)",
    "difficulty": "O'rta",
    "source": "OS Seminar 07 & Lecture 07 • Task 47",
    "title": "Virtual Xotira & Sahifa Jadvali Hisobi (2-Topshiriq)",
    "story": "S07 Virtual Memory: 4KB sahifa o'lchami (Page Size) uchun ofset 12 bit talab qiladi (2^12 = 4096 bayt). 256 ta sahifa uchun esa 8 bit virtual sahifa raqami (VPN) kerak.",
    "task": "Operativ xotira va Swap holatini ko'rish uchun `free -m` buyrug'ini yozing.",
    "canonical": "free -m",
    "accepted": [
      "free -m",
      "free -h",
      "free"
    ],
    "tags": [
      "#VIRTUAL_MEMORY",
      "#PAGING",
      "#FREE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jismoniy xotira (RAM) va Swap maydoni holatini ko'rsatish.",
      "flags": [
        {
          "flag": "-m",
          "meaning": "Display amount of memory in megabytes",
          "syntax": "free -m"
        }
      ],
      "whenToUse": "Xotira tugab borayotganini va swap yuklamasini aniqlashda.",
      "omissionRisk": "Baytlar ko'rinishida xotirani baholash qiyinlashadi.",
      "syntaxExample": "free -m"
    }
  },
  {
    "id": 48,
    "sectorId": 4,
    "sectorTitle": "Virtual Xotira Matematikasi (Page Table & TLB)",
    "difficulty": "O'rta",
    "source": "OS Seminar 07 & Lecture 07 • Task 48",
    "title": "Virtual Xotira & Sahifa Jadvali Hisobi (3-Topshiriq)",
    "story": "S07 Virtual Memory: 4KB sahifa o'lchami (Page Size) uchun ofset 12 bit talab qiladi (2^12 = 4096 bayt). 256 ta sahifa uchun esa 8 bit virtual sahifa raqami (VPN) kerak.",
    "task": "Operativ xotira va Swap holatini ko'rish uchun `free -m` buyrug'ini yozing.",
    "canonical": "free -m",
    "accepted": [
      "free -m",
      "free -h",
      "free"
    ],
    "tags": [
      "#VIRTUAL_MEMORY",
      "#PAGING",
      "#FREE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jismoniy xotira (RAM) va Swap maydoni holatini ko'rsatish.",
      "flags": [
        {
          "flag": "-m",
          "meaning": "Display amount of memory in megabytes",
          "syntax": "free -m"
        }
      ],
      "whenToUse": "Xotira tugab borayotganini va swap yuklamasini aniqlashda.",
      "omissionRisk": "Baytlar ko'rinishida xotirani baholash qiyinlashadi.",
      "syntaxExample": "free -m"
    }
  },
  {
    "id": 49,
    "sectorId": 4,
    "sectorTitle": "Virtual Xotira Matematikasi (Page Table & TLB)",
    "difficulty": "O'rta",
    "source": "OS Seminar 07 & Lecture 07 • Task 49",
    "title": "Virtual Xotira & Sahifa Jadvali Hisobi (4-Topshiriq)",
    "story": "S07 Virtual Memory: 4KB sahifa o'lchami (Page Size) uchun ofset 12 bit talab qiladi (2^12 = 4096 bayt). 256 ta sahifa uchun esa 8 bit virtual sahifa raqami (VPN) kerak.",
    "task": "Operativ xotira va Swap holatini ko'rish uchun `free -m` buyrug'ini yozing.",
    "canonical": "free -m",
    "accepted": [
      "free -m",
      "free -h",
      "free"
    ],
    "tags": [
      "#VIRTUAL_MEMORY",
      "#PAGING",
      "#FREE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jismoniy xotira (RAM) va Swap maydoni holatini ko'rsatish.",
      "flags": [
        {
          "flag": "-m",
          "meaning": "Display amount of memory in megabytes",
          "syntax": "free -m"
        }
      ],
      "whenToUse": "Xotira tugab borayotganini va swap yuklamasini aniqlashda.",
      "omissionRisk": "Baytlar ko'rinishida xotirani baholash qiyinlashadi.",
      "syntaxExample": "free -m"
    }
  },
  {
    "id": 50,
    "sectorId": 4,
    "sectorTitle": "Virtual Xotira Matematikasi (Page Table & TLB)",
    "difficulty": "O'rta",
    "source": "OS Seminar 07 & Lecture 07 • Task 50",
    "title": "Virtual Xotira & Sahifa Jadvali Hisobi (5-Topshiriq)",
    "story": "S07 Virtual Memory: 4KB sahifa o'lchami (Page Size) uchun ofset 12 bit talab qiladi (2^12 = 4096 bayt). 256 ta sahifa uchun esa 8 bit virtual sahifa raqami (VPN) kerak.",
    "task": "Operativ xotira va Swap holatini ko'rish uchun `free -m` buyrug'ini yozing.",
    "canonical": "free -m",
    "accepted": [
      "free -m",
      "free -h",
      "free"
    ],
    "tags": [
      "#VIRTUAL_MEMORY",
      "#PAGING",
      "#FREE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jismoniy xotira (RAM) va Swap maydoni holatini ko'rsatish.",
      "flags": [
        {
          "flag": "-m",
          "meaning": "Display amount of memory in megabytes",
          "syntax": "free -m"
        }
      ],
      "whenToUse": "Xotira tugab borayotganini va swap yuklamasini aniqlashda.",
      "omissionRisk": "Baytlar ko'rinishida xotirani baholash qiyinlashadi.",
      "syntaxExample": "free -m"
    }
  }
];
});
