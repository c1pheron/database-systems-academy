// ============================================================================
// WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 4 QUESTIONS 1 TO 50
// ============================================================================

window.QUESTIONS_1_50_W4 = [
  {
    "id": 1,
    "title": "Ishchi Katalogni Tayyorlash (mkdir -p)",
    "story": "Seminar 4 xavfsizlik qoidasi: Tajribalar shaxsiy fayllarga zarar yetkazmasligi uchun alohida katalog oching.",
    "taskUz": "<code>mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup</code> buyrug'ini bering.",
    "expectedSql": "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup",
    "expectedBash": "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup",
    "hint": "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup buyrug'ini bering.",
    "tags": [
      "MKDIR",
      "-P",
      "WORKSPACE"
    ],
    "solutions": [
      "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup",
      "mkdir -p ~/os_seminar4/logs ~/os_seminar4/backup"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Setup • mkdir -p",
    "flagAnatomy": {
      "command": "mkdir -p $HOME/os_seminar4/logs $HOME/os_seminar4/backup",
      "flags": [
        {
          "flag": "-p",
          "name": "Ota papkalarni ham yaratish (Parents)",
          "syntaxPos": "Buyruqdan so'ng, yo'llardan oldin",
          "purpose": "Agar ota papkalar mavjud bo'lmasa, ularni ham avtomatik yaratadi va papka allaqachon mavjud bo'lsa xato chiqarmaydi.",
          "withoutRisk": "⚠️ AGAR -p BO'LMASA: Agar 'os_seminar4' papkasi hali yo'q bo'lsa, 'No such file or directory' xatosi bilan to'xtaydi!"
        }
      ]
    }
  },
  {
    "id": 2,
    "title": "Ishchi Papkaga O'tish (cd)",
    "story": "Barcha laboratoriya vazifalari os_seminar4 papkasida bajarilishi shart.",
    "taskUz": "<code>cd $HOME/os_seminar4</code> buyrug'ini bering.",
    "expectedSql": "cd $HOME/os_seminar4",
    "expectedBash": "cd $HOME/os_seminar4",
    "hint": "cd $HOME/os_seminar4 buyrug'ini bering.",
    "tags": [
      "CD",
      "WORKSPACE"
    ],
    "solutions": [
      "cd $HOME/os_seminar4",
      "cd ~/os_seminar4"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Setup • cd",
    "flagAnatomy": {
      "command": "cd $HOME/os_seminar4",
      "flags": []
    }
  },
  {
    "id": 3,
    "title": "Joriy Manzilni Tasdiqlash (pwd)",
    "story": "Manzil to'g'riligini tasdiqlash uchun pwd buyrug'ini bering.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "VERIFICATION"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Setup • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 4,
    "title": "Fork.c Manba Kodini O'qish (cat fork.c)",
    "story": "Darslik 2-sahifasi: C tilidagi fork() tizim chaqirig'i kodini o'rganing.",
    "taskUz": "<code>cat fork.c</code> buyrug'ini bering.",
    "expectedSql": "cat fork.c",
    "expectedBash": "cat fork.c",
    "hint": "cat fork.c buyrug'ini bering.",
    "tags": [
      "CAT",
      "FORK_C",
      "SOURCE"
    ],
    "solutions": [
      "cat fork.c"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • cat fork.c",
    "flagAnatomy": {
      "command": "cat fork.c",
      "flags": []
    }
  },
  {
    "id": 5,
    "title": "Fork.c Kodini Kompilyatsiya Qilish (gcc -Wall -Wextra)",
    "story": "Darslik 3-sahifasi: Barcha qat'iy ogohlantirishlar bilan xavfsiz kompilyatsiya qiling.",
    "taskUz": "<code>gcc -Wall -Wextra fork.c -o fork.out</code> buyrug'ini bering.",
    "expectedSql": "gcc -Wall -Wextra fork.c -o fork.out",
    "expectedBash": "gcc -Wall -Wextra fork.c -o fork.out",
    "hint": "gcc -Wall -Wextra fork.c -o fork.out buyrug'ini bering.",
    "tags": [
      "GCC",
      "-WALL",
      "-WEXTRA",
      "-O"
    ],
    "solutions": [
      "gcc -Wall -Wextra fork.c -o fork.out"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • O'rta",
    "source": "S04 Part 1 • gcc compile",
    "flagAnatomy": {
      "command": "gcc -Wall -Wextra fork.c -o fork.out",
      "flags": [
        {
          "flag": "-Wall",
          "name": "Barcha ogohlantirishlar (Warnings All)",
          "syntaxPos": "Manba fayldan oldin",
          "purpose": "Dasturdagi potensial xatoliklar va shubhali konstruktsiyalarni ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR -Wall BO'LMASA: Kompilyator jiddiy mantig'iy xatolarni yashiradi va dastur ishlab chiqarishda qulab tushadi!"
        },
        {
          "flag": "-Wextra",
          "name": "Qo'shimcha ogohlantirishlar (Extra Warnings)",
          "syntaxPos": "-Wall yonida",
          "purpose": "Ishlatilmagan parametrlar va tiplar nomuvofiqligini qat'iy tekshiradi.",
          "withoutRisk": "⚠️ AGAR -Wextra BO'LMASA: Nozik sintaksis kamchiliklari e'tibordan chetda qoladi."
        },
        {
          "flag": "-o fork.out",
          "name": "Chiquvchi fayl nomi (Output)",
          "syntaxPos": "Chiqariladigan fayl nomidan oldin",
          "purpose": "Yaratiladigan ijrochi faylga nom beradi.",
          "withoutRisk": "⚠️ AGAR -o BO'LMASA: Gcc faylni sukut bo'yicha 'a.out' nomi bilan saqlaydi va boshqa dasturlarni ustiga yozib yuboradi!"
        }
      ]
    }
  },
  {
    "id": 6,
    "title": "Fork Dasturini Ishga Tushirish (./fork.out)",
    "story": "Darslik 3-sahifasi: Ota va bola jarayonlar PID larini terminalda ko'ring.",
    "taskUz": "<code>./fork.out</code> buyrug'ini bering.",
    "expectedSql": "./fork.out",
    "expectedBash": "./fork.out",
    "hint": "./fork.out buyrug'ini bering.",
    "tags": [
      "RUN",
      "FORK_OUT"
    ],
    "solutions": [
      "./fork.out"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • run fork.out",
    "flagAnatomy": {
      "command": "./fork.out",
      "flags": [
        {
          "flag": "./",
          "name": "Joriy katalog ko'rsatkichi",
          "syntaxPos": "Fayl nomi boshida",
          "purpose": "Linux xavfsizlik maqsadida joriy katalogni sukut bo'yicha $PATH ga qo'shmaydi; ./ aynan shu papkadagi faylni chaqiradi.",
          "withoutRisk": "⚠️ AGAR ./ BO'LMASA: Shell 'fork.out: command not found' xatosini qaytaradi!"
        }
      ]
    }
  },
  {
    "id": 7,
    "title": "fflush(stdout) Tushunchasini Tekshirish",
    "story": "Darslik 3-sahifasi: fork() oldidan I/O buferini tozalash qatorini toping.",
    "taskUz": "<code>grep fflush fork.c</code> buyrug'ini bering.",
    "expectedSql": "grep fflush fork.c",
    "expectedBash": "grep fflush fork.c",
    "hint": "grep fflush fork.c buyrug'ini bering.",
    "tags": [
      "GREP",
      "FFLUSH",
      "BUFFER"
    ],
    "solutions": [
      "grep fflush fork.c"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • grep fflush",
    "flagAnatomy": {
      "command": "grep fflush fork.c",
      "flags": []
    }
  },
  {
    "id": 8,
    "title": "pid_t Qaytish Qiymatini Tekshirish",
    "story": "Darslik 2-sahifasi: fork() chaqirilgan qatorni ko'ring.",
    "taskUz": "<code>grep 'fork()' fork.c</code> buyrug'ini bering.",
    "expectedSql": "grep 'fork()' fork.c",
    "expectedBash": "grep 'fork()' fork.c",
    "hint": "grep 'fork()' fork.c buyrug'ini bering.",
    "tags": [
      "GREP",
      "FORK_CALL"
    ],
    "solutions": [
      "grep 'fork()' fork.c",
      "grep fork fork.c"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • grep fork",
    "flagAnatomy": {
      "command": "grep 'fork()' fork.c",
      "flags": []
    }
  },
  {
    "id": 9,
    "title": "Bolada PID==0 Shartini Tekshirish",
    "story": "Darslik 2-sahifasi: Bolani ajratuvchi if shartini ko'ring.",
    "taskUz": "<code>grep 'pid == 0' fork.c</code> buyrug'ini bering.",
    "expectedSql": "grep 'pid == 0' fork.c",
    "expectedBash": "grep 'pid == 0' fork.c",
    "hint": "grep 'pid == 0' fork.c buyrug'ini bering.",
    "tags": [
      "GREP",
      "PID_ZERO"
    ],
    "solutions": [
      "grep 'pid == 0' fork.c"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • grep pid == 0",
    "flagAnatomy": {
      "command": "grep 'pid == 0' fork.c",
      "flags": []
    }
  },
  {
    "id": 10,
    "title": "getpid() Tizim Chaqirig'ini Tekshirish",
    "story": "Joriy protsess PID raqamini oluvchi funksiyani ko'ring.",
    "taskUz": "<code>grep getpid fork.c</code> buyrug'ini bering.",
    "expectedSql": "grep getpid fork.c",
    "expectedBash": "grep getpid fork.c",
    "hint": "grep getpid fork.c buyrug'ini bering.",
    "tags": [
      "GREP",
      "GETPID"
    ],
    "solutions": [
      "grep getpid fork.c"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • getpid",
    "flagAnatomy": {
      "command": "grep getpid fork.c",
      "flags": []
    }
  },
  {
    "id": 11,
    "title": "getppid() Ota Protsess Funksiyasini Tekshirish",
    "story": "Ota jarayon PID raqamini (PPID) oluvchi funksiyani ko'ring.",
    "taskUz": "<code>grep getppid fork.c</code> buyrug'ini bering.",
    "expectedSql": "grep getppid fork.c",
    "expectedBash": "grep getppid fork.c",
    "hint": "grep getppid fork.c buyrug'ini bering.",
    "tags": [
      "GREP",
      "GETPPID"
    ],
    "solutions": [
      "grep getppid fork.c"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • getppid",
    "flagAnatomy": {
      "command": "grep getppid fork.c",
      "flags": []
    }
  },
  {
    "id": 12,
    "title": "Yaratilgan Binar Fayl Ruxsatlarini Ko'rish",
    "story": "Kompilyatsiya qilingan fork.out fayli ijro huquqiga (x) egaligini tekshiring.",
    "taskUz": "<code>ls -l fork.out</code> buyrug'ini bering.",
    "expectedSql": "ls -l fork.out",
    "expectedBash": "ls -l fork.out",
    "hint": "ls -l fork.out buyrug'ini bering.",
    "tags": [
      "LS",
      "-L",
      "PERMISSIONS"
    ],
    "solutions": [
      "ls -l fork.out"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • ls -l fork.out",
    "flagAnatomy": {
      "command": "ls -l fork.out",
      "flags": [
        {
          "flag": "-l",
          "name": "Uzun ro'yxat formati (Long listing)",
          "syntaxPos": "ls dan so'ng",
          "purpose": "Ruxsatlar, fayl egasi, hajmi va sanasini to'liq chiqaradi.",
          "withoutRisk": "⚠️ AGAR -l BO'LMASA: Faqat fayl nomi chiqadi, unda ijro huquqi (-rwxr-xr-x) bor-yo'qligi ko'rinmaydi!"
        }
      ]
    }
  },
  {
    "id": 13,
    "title": "Chiqish Natijasini Qayta Ishga Tushirib Ko'rish",
    "story": "Linuxda ota va bola mustaqil rejalashtiriladi (scheduling order may vary).",
    "taskUz": "<code>./fork.out</code> buyrug'ini takroran bering.",
    "expectedSql": "./fork.out",
    "expectedBash": "./fork.out",
    "hint": "./fork.out buyrug'ini bering.",
    "tags": [
      "RUN",
      "SCHEDULING"
    ],
    "solutions": [
      "./fork.out"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • rerun fork.out",
    "flagAnatomy": {
      "command": "./fork.out",
      "flags": []
    }
  },
  {
    "id": 14,
    "title": "Xatolik Qaytish Kodini Ko'rish (echo $?)",
    "story": "Oxirgi C dasturi muvaffaqiyatli yakunlanganini (exit code 0) tasdiqlang.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "echo $? buyrug'ini bering.",
    "tags": [
      "ECHO",
      "STATUS"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 15,
    "title": "Sektor 1 Xulosasi: Joriy Katalogni Tekshirish",
    "story": "Keyingi bosqichga o'tishdan oldin katalog manzilini tekshiring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "STATUS"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 1,
    "difficulty": "1-Qavat • Oson",
    "source": "S04 Part 1 • pwd end",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 16,
    "title": "Fork.py Python Manba Kodini Ko'rish",
    "story": "WIUT 'fork in Python.docx' qo'llanmasi: Python da os.fork() chaqirig'ini o'qing.",
    "taskUz": "<code>cat fork.py</code> buyrug'ini bering.",
    "expectedSql": "cat fork.py",
    "expectedBash": "cat fork.py",
    "hint": "cat fork.py buyrug'ini bering.",
    "tags": [
      "CAT",
      "PYTHON",
      "FORK_PY"
    ],
    "solutions": [
      "cat fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • cat fork.py",
    "flagAnatomy": {
      "command": "cat fork.py",
      "flags": []
    }
  },
  {
    "id": 17,
    "title": "Python Fork Skriptini Ishga Tushirish",
    "story": "Python interpretatori orqali fork.py skriptini bajaring.",
    "taskUz": "<code>python3 fork.py</code> buyrug'ini bering.",
    "expectedSql": "python3 fork.py",
    "expectedBash": "python3 fork.py",
    "hint": "python3 fork.py buyrug'ini bering.",
    "tags": [
      "PYTHON3",
      "RUN"
    ],
    "solutions": [
      "python3 fork.py",
      "./fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • run fork.py",
    "flagAnatomy": {
      "command": "python3 fork.py",
      "flags": []
    }
  },
  {
    "id": 18,
    "title": "Python Skriptida os Modulini Tekshirish",
    "story": "Python tizim chaqiriqlari 'os' moduli orqali amalga oshiriladi.",
    "taskUz": "<code>grep 'import os' fork.py</code> buyrug'ini bering.",
    "expectedSql": "grep 'import os' fork.py",
    "expectedBash": "grep 'import os' fork.py",
    "hint": "grep 'import os' fork.py buyrug'ini bering.",
    "tags": [
      "GREP",
      "IMPORT_OS"
    ],
    "solutions": [
      "grep 'import os' fork.py",
      "grep \"import os\" fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • import os",
    "flagAnatomy": {
      "command": "grep 'import os' fork.py",
      "flags": []
    }
  },
  {
    "id": 19,
    "title": "Python os.fork() Chaqirig'ini Topish",
    "story": "Yadroda jarayonni klonlovchi qatorni ko'ring.",
    "taskUz": "<code>grep 'os.fork()' fork.py</code> buyrug'ini bering.",
    "expectedSql": "grep 'os.fork()' fork.py",
    "expectedBash": "grep 'os.fork()' fork.py",
    "hint": "grep 'os.fork()' fork.py buyrug'ini bering.",
    "tags": [
      "GREP",
      "OS_FORK"
    ],
    "solutions": [
      "grep 'os.fork()' fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • os.fork",
    "flagAnatomy": {
      "command": "grep 'os.fork()' fork.py",
      "flags": []
    }
  },
  {
    "id": 20,
    "title": "Python OSError Istisnosi Tahlili",
    "story": "Agar tizimda xotira yetmasa yoki PID limiti oshsa, fork OSError chiqaradi.",
    "taskUz": "<code>grep OSError fork.py</code> buyrug'ini bering.",
    "expectedSql": "grep OSError fork.py",
    "expectedBash": "grep OSError fork.py",
    "hint": "grep OSError fork.py buyrug'ini bering.",
    "tags": [
      "GREP",
      "OSERROR"
    ],
    "solutions": [
      "grep OSError fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • OSError",
    "flagAnatomy": {
      "command": "grep OSError fork.py",
      "flags": []
    }
  },
  {
    "id": 21,
    "title": "Python da Bola Shartini Ko'rish (pid == 0)",
    "story": "Pythonda ham bolaning qaytish qiymati 0 ga teng bo'ladi.",
    "taskUz": "<code>grep 'pid == 0:' fork.py</code> buyrug'ini bering.",
    "expectedSql": "grep 'pid == 0:' fork.py",
    "expectedBash": "grep 'pid == 0:' fork.py",
    "hint": "grep 'pid == 0:' fork.py buyrug'ini bering.",
    "tags": [
      "GREP",
      "PID_0"
    ],
    "solutions": [
      "grep 'pid == 0:' fork.py",
      "grep 'pid == 0' fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • pid == 0",
    "flagAnatomy": {
      "command": "grep 'pid == 0:' fork.py",
      "flags": []
    }
  },
  {
    "id": 22,
    "title": "Fork.py Skriptiga Ijro Huquqini Berish",
    "story": "Skript to'g'ridan-to'g'ri ./fork.py ko'rinishida chaqirilishi uchun +x bering.",
    "taskUz": "<code>chmod +x fork.py</code> buyrug'ini bering.",
    "expectedSql": "chmod +x fork.py",
    "expectedBash": "chmod +x fork.py",
    "hint": "chmod +x fork.py buyrug'ini bering.",
    "tags": [
      "CHMOD",
      "+X",
      "PYTHON"
    ],
    "solutions": [
      "chmod +x fork.py",
      "chmod 755 fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • chmod +x",
    "flagAnatomy": {
      "command": "chmod +x fork.py",
      "flags": [
        {
          "flag": "+x",
          "name": "Ijro huquqini qo'shish (Executable)",
          "syntaxPos": "Fayl nomidan oldin",
          "purpose": "Faylni to'g'ridan-to'g'ri dastur kabi ishga tushirish huquqini beradi.",
          "withoutRisk": "⚠️ AGAR +x BO'LMASA: './fork.py' buyrug'i 'Permission denied' xatosi bilan to'xtaydi!"
        }
      ]
    }
  },
  {
    "id": 23,
    "title": "To'g'ridan-to'g'ri ./fork.py Bilan Ishga Tushirish",
    "story": "Ijro huquqi o'rnatilgan Python skriptini ishga tushiring.",
    "taskUz": "<code>./fork.py</code> buyrug'ini bering.",
    "expectedSql": "./fork.py",
    "expectedBash": "./fork.py",
    "hint": "./fork.py buyrug'ini bering.",
    "tags": [
      "RUN",
      "EXEC_PY"
    ],
    "solutions": [
      "./fork.py",
      "python3 fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • run ./fork.py",
    "flagAnatomy": {
      "command": "./fork.py",
      "flags": []
    }
  },
  {
    "id": 24,
    "title": "Python Versiyasini Tekshirish",
    "story": "Tizimda o'rnatilgan Python versiyasini ko'ring.",
    "taskUz": "<code>python3 --version</code> buyrug'ini bering.",
    "expectedSql": "python3 --version",
    "expectedBash": "python3 --version",
    "hint": "python3 --version buyrug'ini bering.",
    "tags": [
      "PYTHON3",
      "--VERSION"
    ],
    "solutions": [
      "python3 --version",
      "python3 -V"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • version",
    "flagAnatomy": {
      "command": "python3 --version",
      "flags": [
        {
          "flag": "--version",
          "name": "Dastur versiyasini ko'rsatish",
          "syntaxPos": "Buyruqdan so'ng",
          "purpose": "O'rnatilgan dasturning aniq versiyasini ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR --version BO'LMASA: Quruq 'python3' buyrug'i interaktiv REPL terminalini ochib qo'yadi."
        }
      ]
    }
  },
  {
    "id": 25,
    "title": "Python da os.getpid() Chaqirig'ini Tekshirish",
    "story": "Jarayon o'z PID raqamini qanday olishini ko'ring.",
    "taskUz": "<code>grep 'os.getpid()' fork.py</code> buyrug'ini bering.",
    "expectedSql": "grep 'os.getpid()' fork.py",
    "expectedBash": "grep 'os.getpid()' fork.py",
    "hint": "grep 'os.getpid()' fork.py buyrug'ini bering.",
    "tags": [
      "GREP",
      "GETPID_PY"
    ],
    "solutions": [
      "grep 'os.getpid()' fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • getpid",
    "flagAnatomy": {
      "command": "grep 'os.getpid()' fork.py",
      "flags": []
    }
  },
  {
    "id": 26,
    "title": "Python va C Chiqishlarini Taqqoslash",
    "story": "Ikkala til ham operatsion tizim yadrosi (Kernel) darajasida aynan bir xil fork() tizim chaqirig'ini (syscall) ishlatadi.",
    "taskUz": "<code>ls -l fork.c fork.py</code> buyrug'ini bering.",
    "expectedSql": "ls -l fork.c fork.py",
    "expectedBash": "ls -l fork.c fork.py",
    "hint": "ls -l fork.c fork.py buyrug'ini bering.",
    "tags": [
      "LS",
      "COMPARE"
    ],
    "solutions": [
      "ls -l fork.c fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • ls compare",
    "flagAnatomy": {
      "command": "ls -l fork.c fork.py",
      "flags": []
    }
  },
  {
    "id": 27,
    "title": "Joriy Jarayon Qaytish Statusini Ko'rish",
    "story": "Oxirgi buyruq muvaffaqiyatini tasdiqlang.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "echo $? buyrug'ini bering.",
    "tags": [
      "ECHO",
      "STATUS"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 28,
    "title": "Fork.py Faylining Birinchi 3 Qatorini O'qish",
    "story": "Boshlang'ich importlar va e'lonlarni ko'ring.",
    "taskUz": "<code>head -n 3 fork.py</code> buyrug'ini bering.",
    "expectedSql": "head -n 3 fork.py",
    "expectedBash": "head -n 3 fork.py",
    "hint": "head -n 3 fork.py buyrug'ini bering.",
    "tags": [
      "HEAD",
      "-N",
      "LINES"
    ],
    "solutions": [
      "head -n 3 fork.py",
      "head -3 fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • head -n 3",
    "flagAnatomy": {
      "command": "head -n 3 fork.py",
      "flags": [
        {
          "flag": "-n 3",
          "name": "Satrlar soni (Number of lines)",
          "syntaxPos": "head dan so'ng",
          "purpose": "Faylning faqat boshidagi 3 ta satrini ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR -n 3 BO'LMASA: Sukut bo'yicha 10 ta satr chiqadi."
        }
      ]
    }
  },
  {
    "id": 29,
    "title": "Fork.py Oxirgi 4 Qatorini Ko'rish",
    "story": "Ota va bola logikasining yakunini ko'ring.",
    "taskUz": "<code>tail -n 4 fork.py</code> buyrug'ini bering.",
    "expectedSql": "tail -n 4 fork.py",
    "expectedBash": "tail -n 4 fork.py",
    "hint": "tail -n 4 fork.py buyrug'ini bering.",
    "tags": [
      "TAIL",
      "-N",
      "LINES"
    ],
    "solutions": [
      "tail -n 4 fork.py",
      "tail -4 fork.py"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • tail -n 4",
    "flagAnatomy": {
      "command": "tail -n 4 fork.py",
      "flags": [
        {
          "flag": "-n 4",
          "name": "Oxirgi satrlar soni",
          "syntaxPos": "tail dan so'ng",
          "purpose": "Faylning oxirgi 4 satrini ajratib oladi.",
          "withoutRisk": "⚠️ AGAR -n 4 BO'LMASA: Sukut bo'yicha 10 ta satr chiqadi."
        }
      ]
    }
  },
  {
    "id": 30,
    "title": "Sektor 2 Yakunida Ishchi Papkani Tasdiqlash",
    "story": "Katalog manzilini tekshiring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "VERIFICATION"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 2,
    "difficulty": "2-Qavat • Oson",
    "source": "S04 Python • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 31,
    "title": "Forks.c Chegaralangan Manba Kodini O'qish",
    "story": "Darslik 3-sahifasi: Tsikl ichida chegaralangan (2 marta) fork() kodini ko'ring.",
    "taskUz": "<code>cat forks.c</code> buyrug'ini bering.",
    "expectedSql": "cat forks.c",
    "expectedBash": "cat forks.c",
    "hint": "cat forks.c buyrug'ini bering.",
    "tags": [
      "CAT",
      "FORKS_C"
    ],
    "solutions": [
      "cat forks.c"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • cat forks.c",
    "flagAnatomy": {
      "command": "cat forks.c",
      "flags": []
    }
  },
  {
    "id": 32,
    "title": "Forks.c Dasturini Kompilyatsiya Qilish",
    "story": "Darslik 4-sahifasi: 2 marta takrorlanuvchi dasturni kompilyatsiya qiling.",
    "taskUz": "<code>gcc -Wall -Wextra forks.c -o forks.out</code> buyrug'ini bering.",
    "expectedSql": "gcc -Wall -Wextra forks.c -o forks.out",
    "expectedBash": "gcc -Wall -Wextra forks.c -o forks.out",
    "hint": "gcc -Wall -Wextra forks.c -o forks.out buyrug'ini bering.",
    "tags": [
      "GCC",
      "COMPILE",
      "FORKS"
    ],
    "solutions": [
      "gcc -Wall -Wextra forks.c -o forks.out"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S04 Part 2 • gcc compile forks",
    "flagAnatomy": {
      "command": "gcc -Wall -Wextra forks.c -o forks.out",
      "flags": [
        {
          "flag": "-Wall",
          "name": "Barcha ogohlantirishlar",
          "syntaxPos": "Manba fayldan oldin",
          "purpose": "Sintaksis va mantiqiy xatolarni ogohlantiradi.",
          "withoutRisk": "⚠️ AGAR BO'LMASA: Xatolar yashirin qoladi."
        },
        {
          "flag": "-o forks.out",
          "name": "Chiquvchi fayl nomi",
          "syntaxPos": "Fayl nomi oldida",
          "purpose": "Dasturni forks.out sifatida saqlaydi.",
          "withoutRisk": "⚠️ AGAR BO'LMASA: Standart a.out yaratiladi."
        }
      ]
    }
  },
  {
    "id": 33,
    "title": "Forks.out Dasturini Ishga Tushirish",
    "story": "Darslik 4-sahifasi: 1-iteratsiyada 2 ta, 2-iteratsiyada 4 ta protsess hosil bo'lishini (jami 6 ta step satrini) ko'ring.",
    "taskUz": "<code>./forks.out</code> buyrug'ini bering.",
    "expectedSql": "./forks.out",
    "expectedBash": "./forks.out",
    "hint": "./forks.out buyrug'ini bering.",
    "tags": [
      "RUN",
      "FORKS_OUT"
    ],
    "solutions": [
      "./forks.out"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • run forks.out",
    "flagAnatomy": {
      "command": "./forks.out",
      "flags": []
    }
  },
  {
    "id": 34,
    "title": "Forks.c Kodidagi Tsikl Chegarasini Tekshirish",
    "story": "Darslik ogohlantirishi: Hech qachon chegarasiz fork chaqirmang!",
    "taskUz": "<code>grep 'for (' forks.c</code> buyrug'ini bering.",
    "expectedSql": "grep 'for (' forks.c",
    "expectedBash": "grep 'for (' forks.c",
    "hint": "grep 'for (' forks.c buyrug'ini bering.",
    "tags": [
      "GREP",
      "LOOP_BOUND"
    ],
    "solutions": [
      "grep 'for (' forks.c",
      "grep for forks.c"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • grep for",
    "flagAnatomy": {
      "command": "grep 'for (' forks.c",
      "flags": []
    }
  },
  {
    "id": 35,
    "title": "Jarayonlar Chegarasini Ko'rish (ulimit -u)",
    "story": "Linuxda fork bomb halokatlarining oldini olish uchun foydalanuvchiga tegishli protsesslar soni cheklanadi.",
    "taskUz": "<code>ulimit -u</code> buyrug'ini bering.",
    "expectedSql": "ulimit -u",
    "expectedBash": "ulimit -u",
    "hint": "ulimit -u buyrug'ini bering.",
    "tags": [
      "ULIMIT",
      "-U",
      "PROCESS_LIMIT"
    ],
    "solutions": [
      "ulimit -u"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • ulimit -u",
    "flagAnatomy": {
      "command": "ulimit -u",
      "flags": [
        {
          "flag": "-u",
          "name": "Maksimal foydalanuvchi jarayonlari (User process limit)",
          "syntaxPos": "ulimit dan so'ng",
          "purpose": "Yagona foydalanuvchi bir vaqtda ochishi mumkin bo'lgan maksimal protsesslar sonini ko'rsatadi.",
          "withoutRisk": "⚠️ AGAR -u BO'LMASA: ulimit sukut bo'yicha -f (fayl hajmi chegarasini) ko'rsatadi, protsesslar sonini emas!"
        }
      ]
    }
  },
  {
    "id": 36,
    "title": "Barcha Resurs Cheklovlarini Ko'rish (ulimit -a)",
    "story": "Tizimdagi xotira, stack va protsesslar cheklovlarini to'liq ro'yxatda ko'ring.",
    "taskUz": "<code>ulimit -a</code> buyrug'ini bering.",
    "expectedSql": "ulimit -a",
    "expectedBash": "ulimit -a",
    "hint": "ulimit -a buyrug'ini bering.",
    "tags": [
      "ULIMIT",
      "-A",
      "ALL_LIMITS"
    ],
    "solutions": [
      "ulimit -a"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • ulimit -a",
    "flagAnatomy": {
      "command": "ulimit -a",
      "flags": [
        {
          "flag": "-a",
          "name": "Barcha cheklovlar (All limits)",
          "syntaxPos": "ulimit dan so'ng",
          "purpose": "Tizimning barcha ulimit parametrlarini (fayllar, xotira, protsesslar) bir sahifada chiqaradi.",
          "withoutRisk": "⚠️ AGAR -a BO'LMASA: Faqat bitta birlamchi parametr ko'rinadi."
        }
      ]
    }
  },
  {
    "id": 37,
    "title": "Jarayonlar Chegarasini Vaqtincha 50 Ga Cheklash",
    "story": "Xavfsiz laboratoriya muhitida jarayonlar chegarasini 50 ga o'rnating.",
    "taskUz": "<code>ulimit -u 50</code> buyrug'ini bering.",
    "expectedSql": "ulimit -u 50",
    "expectedBash": "ulimit -u 50",
    "hint": "ulimit -u 50 buyrug'ini bering.",
    "tags": [
      "ULIMIT",
      "SET_LIMIT"
    ],
    "solutions": [
      "ulimit -u 50"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S04 Part 2 • set ulimit 50",
    "flagAnatomy": {
      "command": "ulimit -u 50",
      "flags": [
        {
          "flag": "-u 50",
          "name": "Chegarani 50 ga tenglash",
          "syntaxPos": "Parametr qiymati",
          "purpose": "Maksimal jarayonlar sonini 50 ta bilan chegaralaydi; yangi fork() chaqiriqlari 50 dan oshsa rad etiladi.",
          "withoutRisk": "⚠️ AGAR CHEKLOV O'RNATILMASA: Fork bomb yuz bersa yadro xotirasi to'lib, operatsion tizim to'liq restart talab qiladi!"
        }
      ]
    }
  },
  {
    "id": 38,
    "title": "Yangi O'rnatilgan Chegarani Tekshirish",
    "story": "ulimit -u orqali yangi chegara muvaffaqiyatini ko'ring.",
    "taskUz": "<code>ulimit -u</code> buyrug'ini bering.",
    "expectedSql": "ulimit -u",
    "expectedBash": "ulimit -u",
    "hint": "ulimit -u buyrug'ini bering.",
    "tags": [
      "ULIMIT",
      "CHECK"
    ],
    "solutions": [
      "ulimit -u"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • verify ulimit",
    "flagAnatomy": {
      "command": "ulimit -u",
      "flags": []
    }
  },
  {
    "id": 39,
    "title": "Forks.out Dasturini Qayta Sinash",
    "story": "Chegaralangan rejimda dasturni yana bir bor tekshiring.",
    "taskUz": "<code>./forks.out</code> buyrug'ini bering.",
    "expectedSql": "./forks.out",
    "expectedBash": "./forks.out",
    "hint": "./forks.out buyrug'ini bering.",
    "tags": [
      "RUN",
      "TEST_FORKS"
    ],
    "solutions": [
      "./forks.out"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • run forks.out 2",
    "flagAnatomy": {
      "command": "./forks.out",
      "flags": []
    }
  },
  {
    "id": 40,
    "title": "Forks.out Satrlar Soni Hisoblash (wc -l)",
    "story": "Dastur 6 ta satr chiqarganini quvur (pipe) orqali hisoblang.",
    "taskUz": "<code>./forks.out | wc -l</code> buyrug'ini bering.",
    "expectedSql": "./forks.out | wc -l",
    "expectedBash": "./forks.out | wc -l",
    "hint": "./forks.out | wc -l buyrug'ini bering.",
    "tags": [
      "WC",
      "-L",
      "PIPE"
    ],
    "solutions": [
      "./forks.out | wc -l"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "source": "S04 Part 2 • wc -l",
    "flagAnatomy": {
      "command": "./forks.out | wc -l",
      "flags": [
        {
          "flag": "-l",
          "name": "Satrlar soni (Lines count)",
          "syntaxPos": "wc dan so'ng",
          "purpose": "Chiqarilgan umumiy qatorlar sonini hisoblaydi.",
          "withoutRisk": "⚠️ AGAR -l BO'LMASA: wc baytlar, so'zlar va satrlar sonini chalkashtirib ko'rsatadi."
        }
      ]
    }
  },
  {
    "id": 41,
    "title": "Kompilyatsiya Qilingan Barcha .out Fayllarini Ko'rish",
    "story": "Yaratilgan binar dasturlarni ro'yxatlang.",
    "taskUz": "<code>ls -l *.out</code> buyrug'ini bering.",
    "expectedSql": "ls -l *.out",
    "expectedBash": "ls -l *.out",
    "hint": "ls -l *.out buyrug'ini bering.",
    "tags": [
      "LS",
      "*.OUT"
    ],
    "solutions": [
      "ls -l *.out"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • ls out",
    "flagAnatomy": {
      "command": "ls -l *.out",
      "flags": []
    }
  },
  {
    "id": 42,
    "title": "C Manba Fayllarini Ko'rish",
    "story": "Barcha .c fayllarini ro'yxatlang.",
    "taskUz": "<code>ls -l *.c</code> buyrug'ini bering.",
    "expectedSql": "ls -l *.c",
    "expectedBash": "ls -l *.c",
    "hint": "ls -l *.c buyrug'ini bering.",
    "tags": [
      "LS",
      "*.C"
    ],
    "solutions": [
      "ls -l *.c"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • ls c",
    "flagAnatomy": {
      "command": "ls -l *.c",
      "flags": []
    }
  },
  {
    "id": 43,
    "title": "Oxirgi Buyruq Statusini Ko'rish",
    "story": "Muvaffaqiyatni tasdiqlang.",
    "taskUz": "<code>echo $?</code> buyrug'ini bering.",
    "expectedSql": "echo $?",
    "expectedBash": "echo $?",
    "hint": "echo $? buyrug'ini bering.",
    "tags": [
      "ECHO",
      "STATUS"
    ],
    "solutions": [
      "echo $?",
      "echo \"$?\""
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • status",
    "flagAnatomy": {
      "command": "echo $?",
      "flags": []
    }
  },
  {
    "id": 44,
    "title": "Gcc Versiyasini Tekshirish",
    "story": "Gcc kompilyatori o'rnatilganini tekshiring.",
    "taskUz": "<code>gcc --version</code> buyrug'ini bering.",
    "expectedSql": "gcc --version",
    "expectedBash": "gcc --version",
    "hint": "gcc --version buyrug'ini bering.",
    "tags": [
      "GCC",
      "--VERSION"
    ],
    "solutions": [
      "gcc --version"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • gcc version",
    "flagAnatomy": {
      "command": "gcc --version",
      "flags": []
    }
  },
  {
    "id": 45,
    "title": "Sektor 3 Xulosasi: Ishchi Katalogni Tekshirish",
    "story": "Keyingi vazifaga o'tish oldidan manzilni ko'ring.",
    "taskUz": "<code>pwd</code> buyrug'ini bering.",
    "expectedSql": "pwd",
    "expectedBash": "pwd",
    "hint": "pwd buyrug'ini bering.",
    "tags": [
      "PWD",
      "VERIFICATION"
    ],
    "solutions": [
      "pwd"
    ],
    "sector": 3,
    "difficulty": "3-Qavat • Oson",
    "source": "S04 Part 2 • pwd",
    "flagAnatomy": {
      "command": "pwd",
      "flags": []
    }
  },
  {
    "id": 46,
    "title": "Namunaviy Log Fayllarni Yaratish (touch)",
    "story": "Darslik 4-sahifasi: logs papkasida sinov uchun fayllar yarating.",
    "taskUz": "<code>touch logs/old.log logs/recent.log logs/old.txt</code> buyrug'ini bering.",
    "expectedSql": "touch logs/old.log logs/recent.log logs/old.txt",
    "expectedBash": "touch logs/old.log logs/recent.log logs/old.txt",
    "hint": "touch logs/old.log logs/recent.log logs/old.txt buyrug'ini bering.",
    "tags": [
      "TOUCH",
      "FILES"
    ],
    "solutions": [
      "touch logs/old.log logs/recent.log logs/old.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • touch logs",
    "flagAnatomy": {
      "command": "touch logs/old.log logs/recent.log logs/old.txt",
      "flags": []
    }
  },
  {
    "id": 47,
    "title": "Eskirgan Sanani O'rnatish (touch -d '10 days ago')",
    "story": "Darslik 4-sahifasi: old.log va old.txt fayllari sanasini 10 kun oldingi vaqtga o'tkazing.",
    "taskUz": "<code>touch -d '10 days ago' logs/old.log logs/old.txt</code> buyrug'ini bering.",
    "expectedSql": "touch -d '10 days ago' logs/old.log logs/old.txt",
    "expectedBash": "touch -d '10 days ago' logs/old.log logs/old.txt",
    "hint": "touch -d '10 days ago' logs/old.log logs/old.txt buyrug'ini bering.",
    "tags": [
      "TOUCH",
      "-D",
      "DATE_AGE"
    ],
    "solutions": [
      "touch -d '10 days ago' logs/old.log logs/old.txt",
      "touch -d \"10 days ago\" logs/old.log logs/old.txt"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "S04 Task 1 • touch -d",
    "flagAnatomy": {
      "command": "touch -d '10 days ago' logs/old.log logs/old.txt",
      "flags": [
        {
          "flag": "-d '10 days ago'",
          "name": "Maxsus sana belgilash (Date string)",
          "syntaxPos": "touch dan so'ng, fayllar nomidan oldin",
          "purpose": "Faylning oxirgi o'zgartirilgan vaqtini (mtime) joriy vaqt o'rniga aynan ko'rsatilgan tarixga sozlaydi.",
          "withoutRisk": "⚠️ AGAR -d BO'LMASA: Touch fayl sanasini bugungi hozirgi vaqtga o'zgartiradi; natijada eskirgan fayllarni topish imkonsiz bo'ladi!"
        }
      ]
    }
  },
  {
    "id": 48,
    "title": "Logs Papkasidagi Fayllarni Sanalari Bilan Ko'rish",
    "story": "ls -l logs orqali old.log sanasi 10 kun oldingi ekanini tekshiring.",
    "taskUz": "<code>ls -l logs</code> buyrug'ini bering.",
    "expectedSql": "ls -l logs",
    "expectedBash": "ls -l logs",
    "hint": "ls -l logs buyrug'ini bering.",
    "tags": [
      "LS",
      "-L",
      "LOGS"
    ],
    "solutions": [
      "ls -l logs"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • ls -l logs",
    "flagAnatomy": {
      "command": "ls -l logs",
      "flags": []
    }
  },
  {
    "id": 49,
    "title": "Find Bilan Faqat Oddiy Fayllarni Qidirish (-type f)",
    "story": "logs katalogidagi barcha oddiy fayllarni toping.",
    "taskUz": "<code>find logs -type f</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f",
    "expectedBash": "find logs -type f",
    "hint": "find logs -type f buyrug'ini bering.",
    "tags": [
      "FIND",
      "-TYPE",
      "F"
    ],
    "solutions": [
      "find logs -type f"
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • find -type f",
    "flagAnatomy": {
      "command": "find logs -type f",
      "flags": [
        {
          "flag": "-type f",
          "name": "Oddiy fayllar filtri (File type)",
          "syntaxPos": "Katalogdan so'ng",
          "purpose": "Faqat oddiy fayllarni filtrlaydi (papkalarni chiqarib tashlaydi).",
          "withoutRisk": "⚠️ AGAR -type f BO'LMASA: Kataloglarning o'zi ham ro'yxatga qo'shiladi va keyingi avtomatlashtirishda papkalar ham xavf ostida qoladi!"
        }
      ]
    }
  },
  {
    "id": 50,
    "title": "Faqat .log Kengaytmali Fayllarni Topish (-name '*.log')",
    "story": "Nom namunasi bo'yicha qidiruv bering.",
    "taskUz": "<code>find logs -type f -name '*.log'</code> buyrug'ini bering.",
    "expectedSql": "find logs -type f -name '*.log'",
    "expectedBash": "find logs -type f -name '*.log'",
    "hint": "find logs -type f -name '*.log' buyrug'ini bering.",
    "tags": [
      "FIND",
      "-NAME",
      "PATTERN"
    ],
    "solutions": [
      "find logs -type f -name '*.log'",
      "find logs -type f -name \"*.log\""
    ],
    "sector": 4,
    "difficulty": "4-Qavat • Oson",
    "source": "S04 Task 1 • find -name",
    "flagAnatomy": {
      "command": "find logs -type f -name '*.log'",
      "flags": [
        {
          "flag": "-name '*.log'",
          "name": "Fayl nomi namunasi (Name pattern)",
          "syntaxPos": "-type f dan so'ng",
          "purpose": "Faqat .log bilan tugovchi fayllarni saralaydi. Yulduzcha (*) qo'shtirnoq ichida bo'lishi shart.",
          "withoutRisk": "⚠️ AGAR QO'SHTIRNOQ BO'LMASA: Shell '*.log' ni find ga yetmasdan oldin o'zi yoyib yuboradi (globbing) va xatolik beradi!"
        }
      ]
    }
  }
];
