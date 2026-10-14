/**
 * WIUT OPERATING SYSTEMS (5COSC041C) — WEEK 6 QUESTION DOSSIERS (questions_101_150.js)
 * Verified Pedagogical Structure with 5-Point Command & Flag Anatomy.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QUESTIONS_W6_PART3 = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return [
  {
    "id": 101,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "VOLUME Direktivasining Vazifasi",
    "story": "Dockerfile ichida konteyner ma'lumotlari uchun doimiy ulanish nuqtasini e'lon qiluvchi direktiva qaysi?",
    "task": "Hajm e'lon qilish direktivasini kiriting (VOLUME).",
    "canonical": "VOLUME",
    "accepted": [
      "volume"
    ],
    "tags": [
      "#DOCKERFILE",
      "#VOLUME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Doimiy ma'lumotlar saqlanadigan katalog nuqtasini ko'rsatadi.",
      "flags": [],
      "whenToUse": "Ma'lumotlar bazalari va loglar uchun.",
      "omissionRisk": "Ulanish nuqtasi bo'lmasa ma'lumotlar saqlanmaydi.",
      "syntaxExample": "VOLUME /var/lib/postgresql/data"
    }
  },
  {
    "id": 102,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 10",
    "title": ".dockerignore Faylining Vazifasi",
    "story": "Keraksiz yoki maxfiy fayllarni (`.git/`, `.env`, `password.txt`, `__pycache__/`) Docker build kontekstiga tushishidan saqlaydigan fayl qanday ataladi?",
    "task": "Ushbu fayl nomini kiriting (.dockerignore).",
    "canonical": ".dockerignore",
    "accepted": [
      ".dockerignore",
      "dockerignore"
    ],
    "tags": [
      "#DOCKERIGNORE",
      "#SECURITY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Keraksiz va maxfiy fayllarni build kontekstidan chiqarib tashlaydi.",
      "flags": [],
      "whenToUse": "Xavfsizlik va qurish tezligini oshirishda.",
      "omissionRisk": "Maxfiy parollar va kalitlar tasodifan obraz qatlamiga kirib ketishi mumkin.",
      "syntaxExample": ".dockerignore"
    }
  },
  {
    "id": 103,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "Python Obrazini Qurish Buyrug'i",
    "story": "`sample-app:1.0` nomli obrazni joriy katalogdagi Dockerfile asosida quring.",
    "task": "Obrazni qurish buyrug'ini kiriting.",
    "canonical": "docker build -t sample-app:1.0 .",
    "accepted": [
      "docker build -t sample-app:1.0 .",
      "docker build -t sample-app:1.0 . "
    ],
    "tags": [
      "#DOCKER_BUILD",
      "#IMAGE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Dockerfile asosida yangi qatlamli obraz yaratadi.",
      "flags": [
        {
          "flag": "-t",
          "name": "Tag",
          "purpose": "Obrazga nom va teg beradi.",
          "withoutRisk": "Obraz nomi <none> bo'lib qoladi."
        },
        {
          "flag": ".",
          "name": "Context",
          "purpose": "Joriy papkani build context qiladi.",
          "withoutRisk": "Katalog ko'rsatilmasa buyruq xato beradi."
        }
      ],
      "whenToUse": "Ilovani konteynerga aylantirishda.",
      "omissionRisk": "Obraz yaratilmasa konteyner ko'tarib bo'lmaydi.",
      "syntaxExample": "docker build -t sample-app:1.0 ."
    }
  },
  {
    "id": 104,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "Yaratilgan Obrazlar Ro'yxatini Ko'rish",
    "story": "Tizimda `sample-app:1.0` paydo bo'lganini tekshirish uchun barcha obrazlar ro'yxatini chiqaring.",
    "task": "Obrazlar ro'yxatini ko'rish buyrug'i.",
    "canonical": "docker image ls",
    "accepted": [
      "docker image ls",
      "docker images"
    ],
    "tags": [
      "#DOCKER_IMAGES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud barcha Docker obrazlari, ularning ID si va hajmini ko'rsatadi.",
      "flags": [],
      "whenToUse": "Qurish muvaffaqiyatli bo'lganini tasdiqlashda.",
      "omissionRisk": "Qaysi obrazlar borligini bilib bo'lmaydi.",
      "syntaxExample": "docker image ls"
    }
  },
  {
    "id": 105,
    "sectorId": 7,
    "sectorTitle": "Dockerfile Muhandisligi & Obraz Yaratish",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 5",
    "title": "Obraz Qatlamlari Tarixi (History)",
    "story": "`sample-app:1.0` obrazi qaysi buyruqlar va qatlamlardan qurilganini ko'rsatuvchi buyruqni bering.",
    "task": "Obraz tarixini ko'rish buyrug'i.",
    "canonical": "docker image history sample-app:1.0",
    "accepted": [
      "docker image history sample-app:1.0",
      "docker history sample-app:1.0"
    ],
    "tags": [
      "#DOCKER",
      "#HISTORY"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir qatlamning hajmi va qaysi Dockerfile buyrug'i bilan hosil qilinganini ko'rsatadi.",
      "flags": [],
      "whenToUse": "Qaysi qatlam ko'p joy olayotganini aniqlashda.",
      "omissionRisk": "Hajm bo'yicha optimallashtirish imkonsiz bo'ladi.",
      "syntaxExample": "docker image history sample-app:1.0"
    }
  },
  {
    "id": 106,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 6",
    "title": "app1 Konteynerini Fonda Ishga Tushirish",
    "story": "`sample-app:1.0` obrazidan `app1` nomli konteynerni fonda (-d), portini 127.0.0.1:5000 ga ulab, APP_ENV=dev qilib, Alex argumenti bilan ishga tushiring.",
    "task": "app1 ni ishga tushirish to'liq buyrug'i.",
    "canonical": "docker run -d --name app1 -p 127.0.0.1:5000:5000 -e APP_ENV=dev sample-app:1.0 Alex",
    "accepted": [
      "docker run -d --name app1 -p 127.0.0.1:5000:5000 -e APP_ENV=dev sample-app:1.0 Alex",
      "docker run -d --name app1 -p 127.0.0.1:5000:5000 -e APP_ENV=dev sample-app:1.0 Alex "
    ],
    "tags": [
      "#DOCKER_RUN",
      "#PORT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ilovani xavfsiz lokal portda va fon rejimida ishga tushiradi.",
      "flags": [
        {
          "flag": "-d",
          "name": "Detach",
          "purpose": "Orqa fonda ishga tushirish.",
          "withoutRisk": "Terminal bloklanib qoladi."
        },
        {
          "flag": "--name app1",
          "name": "Name",
          "purpose": "Konteynerga aniq nom berish.",
          "withoutRisk": "Tasodifiy nom beriladi."
        },
        {
          "flag": "-p 127.0.0.1:5000:5000",
          "name": "Publish Port",
          "purpose": "Faqat lokal xostga bog'lash.",
          "withoutRisk": "0.0.0.0 ga ochilib xavfsizlik buziladi."
        },
        {
          "flag": "-e APP_ENV=dev",
          "name": "Env Override",
          "purpose": "Muhit o'zgaruvchisini berish.",
          "withoutRisk": "Standart training qiymati olinadi."
        }
      ],
      "whenToUse": "Veb-serverni xavfsiz ko'tarishda.",
      "omissionRisk": "Port ulanmasa brauzerdan ulanib bo'lmaydi.",
      "syntaxExample": "docker run -d --name app1 -p 127.0.0.1:5000:5000 -e APP_ENV=dev sample-app:1.0 Alex"
    }
  },
  {
    "id": 107,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "app1 Serverini curl Bilan Sinash",
    "story": "`app1` veb-serveri to'g'ri ishlayotganini terminaldan curl yordamida tekshiring.",
    "task": "Lokal 5000-portga so'rov yuborish buyrug'i.",
    "canonical": "curl http://localhost:5000",
    "accepted": [
      "curl http://localhost:5000",
      "curl 127.0.0.1:5000",
      "curl http://127.0.0.1:5000"
    ],
    "tags": [
      "#CURL",
      "#HTTP"
    ],
    "flagAnatomy": {
      "commandPurpose": "HTTP so'rovi yuborib server javobini tekshiradi.",
      "flags": [],
      "whenToUse": "Veb-ilovaning sog'lomligini tekshirishda.",
      "omissionRisk": "Server javob berayotgani noaniq qoladi.",
      "syntaxExample": "curl http://localhost:5000"
    }
  },
  {
    "id": 108,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Faol Konteynerlar Ro'yxati (docker ps)",
    "story": "Hozirda ishlab turgan faol konteynerlarni ko'rish buyrug'ini kiriting.",
    "task": "Faol konteynerlar ro'yxati buyrug'i.",
    "canonical": "docker ps",
    "accepted": [
      "docker ps",
      "docker container ls"
    ],
    "tags": [
      "#DOCKER_PS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Faqat faol ishlayotgan konteynerlar va ularning portlarini ko'rsatadi.",
      "flags": [],
      "whenToUse": "Konteyner ishlayotganini tekshirishda.",
      "omissionRisk": "To'xtagan konteynerlar ko'rinmaydi.",
      "syntaxExample": "docker ps"
    }
  },
  {
    "id": 109,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Barcha Konteynerlar Ro'yxati (docker ps -a)",
    "story": "To'xtagan va faol bo'lgan barcha konteynerlar ro'yxatini chiqaruvchi buyruqni bering.",
    "task": "Barcha konteynerlarni ko'rish buyrug'i.",
    "canonical": "docker ps -a",
    "accepted": [
      "docker ps -a",
      "docker container ls -a"
    ],
    "tags": [
      "#DOCKER_PS_ALL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha konteynerlarni holati (Up, Exited) bilan ko'rsatadi.",
      "flags": [
        {
          "flag": "-a",
          "name": "All",
          "purpose": "To'xtagan konteynerlarni ham chiqaradi.",
          "withoutRisk": "Faqat faollar ko'rinadi."
        }
      ],
      "whenToUse": "Nega konteyner to'xtab qolganini tahlil qilishda.",
      "omissionRisk": "Yiqilgan konteynerlarni ko'rib bo'lmaydi.",
      "syntaxExample": "docker ps -a"
    }
  },
  {
    "id": 110,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "app1 Konteynerining Loglarini Ko'rish",
    "story": "`app1` konteynerining server konsoliga chiqargan so'rovlar loglarini ekranga chiqaring.",
    "task": "app1 loglarini ko'rish buyrug'i.",
    "canonical": "docker logs app1",
    "accepted": [
      "docker logs app1",
      "docker container logs app1"
    ],
    "tags": [
      "#DOCKER_LOGS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerning STDOUT va STDERR chiqishlarini ko'rsatadi.",
      "flags": [],
      "whenToUse": "Xatoliklar va HTTP kirishlarini kuzatishda.",
      "omissionRisk": "Ichki nosozliklar sababini bilib bo'lmaydi.",
      "syntaxExample": "docker logs app1"
    }
  },
  {
    "id": 111,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 7",
    "title": "app2 Konteynerini 5001-portda Ishga Tushirish",
    "story": "Aynan o'sha `sample-app:1.0` obrazidan `app2` nomli ikkinchi konteynerni 127.0.0.1:5001 portida, APP_ENV=testing va Zahid argumenti bilan ishga tushiring.",
    "task": "app2 ni ishga tushirish buyrug'i.",
    "canonical": "docker run -d --name app2 -p 127.0.0.1:5001:5000 -e APP_ENV=testing sample-app:1.0 Zahid",
    "accepted": [
      "docker run -d --name app2 -p 127.0.0.1:5001:5000 -e APP_ENV=testing sample-app:1.0 Zahid",
      "docker run -d --name app2 -p 127.0.0.1:5001:5000 -e APP_ENV=testing sample-app:1.0 Zahid "
    ],
    "tags": [
      "#DOCKER_RUN",
      "#MULTI_CONTAINER"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta obrazdan ikkinchi mustaqil nusxani turli xost portida ko'taradi.",
      "flags": [
        {
          "flag": "-p 127.0.0.1:5001:5000",
          "name": "Port 5001",
          "purpose": "5000-port band bo'lgani uchun 5001 ga ulaydi.",
          "withoutRisk": "Port to'qnashuvi yuz beradi."
        }
      ],
      "whenToUse": "Turli muhitlarda (dev, test) bir xil ilovani sinashda.",
      "omissionRisk": "Bir xil port berilsa Docker xato beradi.",
      "syntaxExample": "docker run -d --name app2 -p 127.0.0.1:5001:5000 -e APP_ENV=testing sample-app:1.0 Zahid"
    }
  },
  {
    "id": 112,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 7",
    "title": "app2 Serverini curl Bilan Sinash",
    "story": "`app2` veb-serveri to'g'ri ishlayotganini 5001-portga curl so'rovi yuborib tekshiring.",
    "task": "5001-portga curl so'rovi buyrug'i.",
    "canonical": "curl http://localhost:5001",
    "accepted": [
      "curl http://localhost:5001",
      "curl 127.0.0.1:5001",
      "curl http://127.0.0.1:5001"
    ],
    "tags": [
      "#CURL",
      "#TEST"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ikkinchi konteynerning mustaqil javobini tasdiqlaydi.",
      "flags": [],
      "whenToUse": "Turli parametrlar bilan ishlayotganini ko'rishda.",
      "omissionRisk": "Javob 'Hello Zahid! Environment: testing' ekanligi tekshirilmaydi.",
      "syntaxExample": "curl http://localhost:5001"
    }
  },
  {
    "id": 113,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 7",
    "title": "Nima Uchun app2 5000-Xost Portini Ishlata Olmaydi?",
    "story": "Seminar savoli: Nima uchun app2 xostdagi 5000-portga bog'lana olmaydi va 5001 tanlandi?",
    "task": "Xostdagi 5000-port allaqachon app1 tomonidan band qilinganligi sabablimi?",
    "canonical": "Host port 5000 is already allocated to app1",
    "accepted": [
      "host port 5000 is already allocated",
      "already allocated",
      "port band",
      "port 5000 band"
    ],
    "tags": [
      "#NETWORKING",
      "#PORT_CONFLICT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bitta xost portiga bir vaqtning o'zida ikkita jarayon ulana olmaydi.",
      "flags": [],
      "whenToUse": "Port konfliktlarini bartaraf etishda.",
      "omissionRisk": "'Port already allocated' xatosi yuzaga keladi.",
      "syntaxExample": "Host port 5000 already in use"
    }
  },
  {
    "id": 114,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 7",
    "title": "Nima Uchun Ikkala Konteyner Ichida 5000 Bo'lishi Mumkin?",
    "story": "Seminar savoli: Nima uchun app1 ham, app2 ham konteyner ichida 5000-portda bemalol ishlay oladi?",
    "task": "Har bir konteyner alohida izolyatsiyalangan tarmoq fazosiga (isolated network namespace) ega bo'lgani uchunmi?",
    "canonical": "Containers have isolated network namespaces",
    "accepted": [
      "isolated network namespaces",
      "isolated network",
      "izolyatsiyalangan tarmoq",
      "izolyatsiya"
    ],
    "tags": [
      "#NETWORKING",
      "#NAMESPACES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerlar o'zlarining virtual tarmoq interfeysiga ega.",
      "flags": [],
      "whenToUse": "Konteynerlar izolyatsiyasini tushunishda.",
      "omissionRisk": "Ichki portlarni ham har xil qilish kerak deb o'ylash.",
      "syntaxExample": "Containers have isolated network namespaces"
    }
  },
  {
    "id": 115,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "app1 Konteynerini To'xtatish (stop)",
    "story": "`app1` konteynerini xavfsiz to'xtatuvchi buyruqni bering.",
    "task": "app1 ni to'xtatish buyrug'i.",
    "canonical": "docker stop app1",
    "accepted": [
      "docker stop app1",
      "docker container stop app1"
    ],
    "tags": [
      "#DOCKER_STOP"
    ],
    "flagAnatomy": {
      "commandPurpose": "SIGTERM yuborib konteynerdagi jarayonlarni xavfsiz to'xtatadi.",
      "flags": [],
      "whenToUse": "Konteynerga vaqtincha ehtiyoj bo'lmaganda.",
      "omissionRisk": "Ishlab tursa xotira va CPU ni egallab turadi.",
      "syntaxExample": "docker stop app1"
    }
  },
  {
    "id": 116,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "app1 To'xtagandan So'ng curl Sinovi",
    "story": "`app1` to'xtatilgandan so'ng `curl http://localhost:5000` yuborilsa nima sodir bo'ladi?",
    "task": "Ulanish rad etiladimi (Connection refused)?",
    "canonical": "Connection refused",
    "accepted": [
      "connection refused",
      "ulanib bo'lmaydi",
      "refused",
      "xato"
    ],
    "tags": [
      "#CURL",
      "#OFFLINE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Server to'xtagani uchun port yopiladi va ulanish rad etiladi.",
      "flags": [],
      "whenToUse": "Konteyner haqiqatan to'xtaganini bilishda.",
      "omissionRisk": "Server to'xtamagan bo'lsa javob qaytarishda davom etadi.",
      "syntaxExample": "Connection refused: Server is stopped"
    }
  },
  {
    "id": 117,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "app1 Konteynerini Qayta Ishga Tushirish (start)",
    "story": "To'xtatilgan `app1` konteynerini qayta ishga tushiruvchi buyruqni bering.",
    "task": "app1 ni start qilish buyrug'i.",
    "canonical": "docker start app1",
    "accepted": [
      "docker start app1",
      "docker container start app1"
    ],
    "tags": [
      "#DOCKER_START"
    ],
    "flagAnatomy": {
      "commandPurpose": "Mavjud konteynerni yangidan yaratmasdan qayta ko'taradi.",
      "flags": [],
      "whenToUse": "To'xtatilgan xizmatni qayta tiklashda.",
      "omissionRisk": "Qayta run qilinsa yangi konteyner ochiladi.",
      "syntaxExample": "docker start app1"
    }
  },
  {
    "id": 118,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Qayta Ishga Tushgach curl Sinovi",
    "story": "`docker start app1` dan so'ng yana `curl http://localhost:5000` yuborilsa, ilova avvalgi xush kelibsiz xabarini qaytaradimi?",
    "task": "Qaytaradimi: Ha yoki Yo'q?",
    "canonical": "Ha",
    "accepted": [
      "ha",
      "yes",
      "albatta"
    ],
    "tags": [
      "#CURL",
      "#SUCCESS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Start qilingach veb-server xuddi o'sha parametrlar bilan qayta jonlanadi.",
      "flags": [],
      "whenToUse": "Xizmat ishonchliligini tasdiqlashda.",
      "omissionRisk": "Sozlamalar yo'qolib ketmasligi ko'rsatiladi.",
      "syntaxExample": "curl http://localhost:5000 succeeds after start"
    }
  },
  {
    "id": 119,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Nima Uchun --rm Bayrog'i Qo'yilmadi?",
    "story": "Seminar savoli: Nima sababdan `docker run` da `--rm` (avto-o'chirish) bayrog'i tushirib qoldirildi?",
    "task": "To'xtagan konteynerni tekshirish va qayta ishga tushirish imkoni bo'lishi uchunmi?",
    "canonical": "To inspect and restart the stopped container",
    "accepted": [
      "to inspect and restart",
      "inspect and restart",
      "qayta ishga tushirish uchun",
      "tekshirish uchun"
    ],
    "tags": [
      "#DOCKER",
      "#RM_FLAG"
    ],
    "flagAnatomy": {
      "commandPurpose": "--rm qo'yilsa konteyner to'xtashi bilan butunlay o'chib ketadi.",
      "flags": [],
      "whenToUse": "Doimiy xizmatlar va laboratoriya tahlilida.",
      "omissionRisk": "--rm bo'lsa `docker ps -a` da ko'rib bo'lmaydi.",
      "syntaxExample": "Omit --rm to allow inspection and restart"
    }
  },
  {
    "id": 120,
    "sectorId": 8,
    "sectorTitle": "Python Flask Konteyneri & Portlar (app1, app2)",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 8",
    "title": "Lokal Parol Xavfsizligi Eslatmasi",
    "story": "Laboratoriya mashqlarida ko'rsatilgan parollar (`LabOnly_12345`) faqat lokal sinov uchundir.",
    "task": "Haqiqiy ishlab chiqarishda (production) oddiy parollar Dockerfile yoki komandaga ochiq yozilishi mumkinmi: Ha yoki Yo'q?",
    "canonical": "Yo'q",
    "accepted": [
      "yo'q",
      "no",
      "yoq",
      "mumkin emas"
    ],
    "tags": [
      "#SECURITY",
      "#BEST_PRACTICES"
    ],
    "flagAnatomy": {
      "commandPurpose": "Haqiqiy tizimlarda parollar Docker Secrets yoki xavfsiz omborlarda saqlanadi.",
      "flags": [],
      "whenToUse": "Xavfsizlik auditida.",
      "omissionRisk": "Ochiq yozilgan parollar git va obrazlar orqali sizib chiqadi.",
      "syntaxExample": "Never hardcode production passwords"
    }
  },
  {
    "id": 121,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 6",
    "title": "app1 Konteyneri Ichiga Shell Ochish (exec -it)",
    "story": "`app1` konteyneri ichida interaktiv `sh` qobig'ini ochish buyrug'ini kiriting.",
    "task": "Konteyner ichiga exec orqali kirish buyrug'i.",
    "canonical": "docker exec -it app1 sh",
    "accepted": [
      "docker exec -it app1 sh",
      "docker container exec -it app1 sh"
    ],
    "tags": [
      "#DOCKER_EXEC",
      "#SH"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ishlab turgan konteyner ichida interaktiv terminal ochadi.",
      "flags": [
        {
          "flag": "-it",
          "name": "Interactive TTY",
          "purpose": "Interaktiv kiritish va tty sessiyasini ta'minlaydi.",
          "withoutRisk": "Terminal darhol yopilib qoladi."
        }
      ],
      "whenToUse": "Konteyner ichidagi fayllar va muhitni jonli tekshirishda.",
      "omissionRisk": "Konteyner ichini ko'rish imkoni bo'lmaydi.",
      "syntaxExample": "docker exec -it app1 sh"
    }
  },
  {
    "id": 122,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Konteyner Shellida Muhit O'zgaruvchisini Tekshirish",
    "story": "Konteyner ichki shellida `APP_ENV` qiymatini ekranga chiqarish uchun qaysi buyruq beriladi?",
    "task": "echo orqali APP_ENV ni ko'rish buyrug'i.",
    "canonical": "echo \"$APP_ENV\"",
    "accepted": [
      "echo \"$APP_ENV\"",
      "echo $APP_ENV"
    ],
    "tags": [
      "#BASH",
      "#ENV"
    ],
    "flagAnatomy": {
      "commandPurpose": "O'zgaruvchi dev ekanligini tasdiqlaydi.",
      "flags": [],
      "whenToUse": "Muhit o'zgaruvchilari to'g'ri yetib borganini bilishda.",
      "omissionRisk": "Noto'g'ri muhitda ishlash xatolari kelib chiqadi.",
      "syntaxExample": "echo \"$APP_ENV\""
    }
  },
  {
    "id": 123,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Konteyner Shellidan Chiqish (exit)",
    "story": "Konteyner ichidagi qo'shimcha shellni yopish uchun qaysi buyruq beriladi (veb-server to'xtamaydi)?",
    "task": "Shellni yopish buyrug'i.",
    "canonical": "exit",
    "accepted": [
      "exit"
    ],
    "tags": [
      "#BASH",
      "#EXIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Qo'shimcha shellni yopadi, lekin asosiy veb-server ishlashda davom etadi.",
      "flags": [],
      "whenToUse": "Ichki tahlil tugagandan so'ng.",
      "omissionRisk": "Terminal ichida qolib ketiladi.",
      "syntaxExample": "exit"
    }
  },
  {
    "id": 124,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Konteyner Jarayonlarini Ko'rish (docker top)",
    "story": "`app1` konteyneri ichida ishlayotgan barcha Linux jarayonlarini (PID, CMD) ko'rsatuvchi buyruqni bering.",
    "task": "Konteyner jarayonlarini ko'rish buyrug'i.",
    "canonical": "docker top app1",
    "accepted": [
      "docker top app1",
      "docker container top app1"
    ],
    "tags": [
      "#DOCKER_TOP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteyner ichidagi jarayonlarni ko'rsatadi.",
      "flags": [],
      "whenToUse": "Zombi yoki ortiqcha jarayonlarni aniqlashda.",
      "omissionRisk": "Ichki jarayonlar nazoratsiz qoladi.",
      "syntaxExample": "docker top app1"
    }
  },
  {
    "id": 125,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Konteyner Metama'lumotlarini Ko'rish (docker inspect)",
    "story": "`app1` konteynerining to'liq past darajali konfiguratsiyasi, tarmoq IP manzili va sozlamalarini JSON formatda chiqaring.",
    "task": "Konteynerni inspect qilish buyrug'i.",
    "canonical": "docker inspect app1",
    "accepted": [
      "docker inspect app1",
      "docker container inspect app1"
    ],
    "tags": [
      "#DOCKER_INSPECT"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerning to'liq JSON konfiguratsiyasini chiqaradi.",
      "flags": [],
      "whenToUse": "IP manzil, ulanish nuqtalari va drayverlarni bilishda.",
      "omissionRisk": "Nozik parametrlar ko'rinmaydi.",
      "syntaxExample": "docker inspect app1"
    }
  },
  {
    "id": 126,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 6",
    "title": "Resurs O'lchov Snapshotini Olish (--no-stream)",
    "story": "`app1` ning CPU va xotira sarfini cheksiz monitor qilmasdan, bitta statik o'lchov natijasini chiqaruvchi buyruqni bering.",
    "task": "Statik stats snapshot buyrug'i.",
    "canonical": "docker stats --no-stream app1",
    "accepted": [
      "docker stats --no-stream app1"
    ],
    "tags": [
      "#DOCKER_STATS"
    ],
    "flagAnatomy": {
      "commandPurpose": "CPU va RAM o'lchovining bir martalik suratini chiqaradi.",
      "flags": [
        {
          "flag": "--no-stream",
          "name": "No Stream",
          "purpose": "Doimiy strim qilishni o'chirib bitta natija qaytaradi.",
          "withoutRisk": "Terminal cheksiz yangilanish rejimiga kirib qotadi."
        }
      ],
      "whenToUse": "Monitoring skriptlarida parametr olishda.",
      "omissionRisk": "Skript keyingi qatorga o'tolmaydi.",
      "syntaxExample": "docker stats --no-stream app1"
    }
  },
  {
    "id": 127,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Konteyner Hajmlarini Ko'rish (docker container ls -as)",
    "story": "Barcha to'xtagan va faol konteynerlarning diskda egallagan hajmini ko'rsatuvchi buyruqni bering.",
    "task": "Konteynerlar hajmini ko'rish buyrug'i.",
    "canonical": "docker container ls -as",
    "accepted": [
      "docker container ls -as",
      "docker ps -as"
    ],
    "tags": [
      "#DOCKER_SIZE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Har bir konteynerning yoziladigan qatlami qancha joy olayotganini ko'rsatadi.",
      "flags": [
        {
          "flag": "-as",
          "name": "All with Size",
          "purpose": "Barcha konteynerlar va ularning o'lchamlarini chiqaradi.",
          "withoutRisk": "Hajm ko'rinmaydi."
        }
      ],
      "whenToUse": "Disk to'lib qolganda sababchini topishda.",
      "omissionRisk": "Qaysi konteyner shishib ketgani bilinmaydi.",
      "syntaxExample": "docker container ls -as"
    }
  },
  {
    "id": 128,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 6",
    "title": "Konteyner Writable Layer Qatlami",
    "story": "Konteyner ichida yangi fayl yaratilsa yoki o'zgartirilsa, bu o'zgarish qayerga yoziladi: Image ga mi yoki Writable Layer gami?",
    "task": "O'zgarishlar yoziladigan qatlamni kiriting (Writable layer).",
    "canonical": "Writable layer",
    "accepted": [
      "writable layer",
      "container layer",
      "writable"
    ],
    "tags": [
      "#DOCKER",
      "#LAYERS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Copy-on-write mexanizmi orqali faqat konteynerning yoziladigan qatlamiga yoziladi.",
      "flags": [],
      "whenToUse": "Obraz daxlsizligini saqlashda.",
      "omissionRisk": "Image buziladi deb o'ylash xatodir.",
      "syntaxExample": "Changes write to container's writable layer"
    }
  },
  {
    "id": 129,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 11",
    "title": "Ikkala Mashq Konteynerini Birgalikda To'xtatish",
    "story": "`app1` va `app2` konteynerlarini bitta buyruq bilan birgalikda to'xtatuvchi buyruqni bering.",
    "task": "app1 va app2 ni to'xtatish buyrug'i.",
    "canonical": "docker stop app1 app2",
    "accepted": [
      "docker stop app1 app2",
      "docker container stop app1 app2"
    ],
    "tags": [
      "#DOCKER_STOP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bir nechta konteynerlarni bir vaqtda to'xtatadi.",
      "flags": [],
      "whenToUse": "Tozalash va qayta ishga tushirishda.",
      "omissionRisk": "Alohida-alohida yozish ortiqcha vaqt oladi.",
      "syntaxExample": "docker stop app1 app2"
    }
  },
  {
    "id": 130,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 11",
    "title": "Ikkala Mashq Konteynerini O'chirish (rm)",
    "story": "To'xtatilgan `app1` va `app2` konteynerlarini diskdan o'chirib tashlovchi buyruqni bering.",
    "task": "app1 va app2 ni o'chirish buyrug'i.",
    "canonical": "docker rm app1 app2",
    "accepted": [
      "docker rm app1 app2",
      "docker container rm app1 app2"
    ],
    "tags": [
      "#DOCKER_RM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerlarning yoziladigan qatlamlarini tozalaydi.",
      "flags": [],
      "whenToUse": "Resurslarni bo'shatishda.",
      "omissionRisk": "Diskda o'lik konteynerlar to'planib qoladi.",
      "syntaxExample": "docker rm app1 app2"
    }
  },
  {
    "id": 131,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 11",
    "title": "Konteyner O'chganda Obraz O'chadimi?",
    "story": "`docker rm app1 app2` bajarilganda, `sample-app:1.0` obrazi ham tizimdan o'chib ketadimi?",
    "task": "Obraz o'chib ketadimi: Ha yoki Yo'q?",
    "canonical": "Yo'q",
    "accepted": [
      "yo'q",
      "no",
      "yoq",
      "o'chmaydi"
    ],
    "tags": [
      "#DOCKER_IMAGE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerlarni o'chirish ularning obrazini saqlab qoladi.",
      "flags": [],
      "whenToUse": "Konteyner va obraz farqini bilishda.",
      "omissionRisk": "Obraz qayta qurilishi kerak deb adashish.",
      "syntaxExample": "Removing containers does NOT remove their image"
    }
  },
  {
    "id": 132,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 11",
    "title": "Faqat Bitta Obrazni O'chirish (docker rmi)",
    "story": "Agar `sample-app:1.0` obrazining o'zini diskdan o'chirish kerak bo'lsa, qaysi buyruq ishlatiladi?",
    "task": "Obrazni o'chirish buyrug'i.",
    "canonical": "docker rmi sample-app:1.0",
    "accepted": [
      "docker rmi sample-app:1.0",
      "docker image rm sample-app:1.0"
    ],
    "tags": [
      "#DOCKER_RMI"
    ],
    "flagAnatomy": {
      "commandPurpose": "Obrazni diskdan o'chirib tashlaydi.",
      "flags": [],
      "whenToUse": "Eski obrazlarni tozalashda.",
      "omissionRisk": "Agar ushbu obrazdan ishlayotgan konteyner bo'lsa xato beradi.",
      "syntaxExample": "docker rmi sample-app:1.0"
    }
  },
  {
    "id": 133,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 11",
    "title": "Dangling Obrazlarni Tozalash (prune)",
    "story": "Nomsiz va foydalanilmayotgan osilib qolgan (dangling) barcha eski obraz qatlamlarini xavfsiz tozalash buyrug'i qaysi?",
    "task": "Obrazlarni prune qilish buyrug'i.",
    "canonical": "docker image prune",
    "accepted": [
      "docker image prune",
      "docker image prune -f"
    ],
    "tags": [
      "#DOCKER_PRUNE"
    ],
    "flagAnatomy": {
      "commandPurpose": "Keraksiz vaqtinchalik obraz qatlamlarini tozalaydi.",
      "flags": [],
      "whenToUse": "Disk maydoni bo'shatishda.",
      "omissionRisk": "Gigabaytlab keraksiz kesh yotadi.",
      "syntaxExample": "docker image prune"
    }
  },
  {
    "id": 134,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 11",
    "title": "Barcha To'xtagan Konteynerlarni Tozalash",
    "story": "Tizimdagi barcha to'xtagan (exited) konteynerlarni birdaniga tozalash buyrug'i qaysi?",
    "task": "Konteynerlarni prune qilish buyrug'i.",
    "canonical": "docker container prune",
    "accepted": [
      "docker container prune",
      "docker container prune -f"
    ],
    "tags": [
      "#DOCKER_PRUNE"
    ],
    "flagAnatomy": {
      "commandPurpose": "To'xtagan barcha konteynerlarni bir buyruq bilan o'chiradi.",
      "flags": [],
      "whenToUse": "Laboratoriyadan so'ng tizimni yig'ishtirishda.",
      "omissionRisk": "Qo'lda bittalab rm qilish talab etiladi.",
      "syntaxExample": "docker container prune"
    }
  },
  {
    "id": 135,
    "sectorId": 9,
    "sectorTitle": "Konteyner Boshqaruvi, Inspect & Loglar",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 11",
    "title": "Port Allocated Xatosining Yechimi",
    "story": "Seminar muammolar jadvali: Agar 'Port allocated' (port band) xatosi chiqsa, nima qilish kerak?",
    "task": "Boshqa xost portini tanlash kerakmi (Choose another host port)?",
    "canonical": "Choose another host port",
    "accepted": [
      "choose another host port",
      "boshqa port",
      "boshqa port tanlash",
      "another port"
    ],
    "tags": [
      "#TROUBLESHOOTING"
    ],
    "flagAnatomy": {
      "commandPurpose": "Masalan, 5000 o'rniga 5003:5000 ko'rinishida bo'sh port tanlanadi.",
      "flags": [],
      "whenToUse": "Port to'qnashuvida.",
      "omissionRisk": "Konteyner ko'tarilmaydi.",
      "syntaxExample": "Troubleshoot: Choose another host port"
    }
  },
  {
    "id": 136,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 8",
    "title": "Nomli Hajm Yaratish (docker volume create)",
    "story": "PostgreSQL ma'lumotlarini doimiy saqlash uchun `pgdata` nomli volume yarating.",
    "task": "pgdata hajmini yaratish buyrug'i.",
    "canonical": "docker volume create pgdata",
    "accepted": [
      "docker volume create pgdata"
    ],
    "tags": [
      "#DOCKER_VOLUME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerdan mustaqil doimiy saqlash hajmini yaratadi.",
      "flags": [],
      "whenToUse": "Ma'lumotlar bazalarini ko'tarishdan oldin.",
      "omissionRisk": "Anonim hajm paydo bo'lib boshqarish qiyinlashadi.",
      "syntaxExample": "docker volume create pgdata"
    }
  },
  {
    "id": 137,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 8",
    "title": "PostgreSQL Konteynerini Volume Bilan Ishga Tushirish",
    "story": "`postgres:15` obrazidan `mypg` nomli konteynerni fonda, POSTGRES_PASSWORD=LabOnly_12345 qilib, `pgdata` hajmini /var/lib/postgresql/data ga ulab ishga tushiring.",
    "task": "mypg ni ishga tushirish buyrug'i.",
    "canonical": "docker run -d --name mypg -e POSTGRES_PASSWORD=LabOnly_12345 -v pgdata:/var/lib/postgresql/data postgres:15",
    "accepted": [
      "docker run -d --name mypg -e POSTGRES_PASSWORD=LabOnly_12345 -v pgdata:/var/lib/postgresql/data postgres:15",
      "docker run -d --name mypg -e POSTGRES_PASSWORD=LabOnly_12345 -v pgdata:/var/lib/postgresql/data postgres:15 "
    ],
    "tags": [
      "#DOCKER_RUN",
      "#VOLUME"
    ],
    "flagAnatomy": {
      "commandPurpose": "Bazani doimiy disk hajmiga ulab ishga tushiradi.",
      "flags": [
        {
          "flag": "-v pgdata:/var/lib/postgresql/data",
          "name": "Volume Mount",
          "purpose": "Doimiy saqlashni ulaydi.",
          "withoutRisk": "Konteyner o'chishi bilan butun ma'lumotlar bazasi yo'qoladi!"
        },
        {
          "flag": "-e POSTGRES_PASSWORD=...",
          "name": "Password",
          "purpose": "Baza parolini o'rnatadi.",
          "withoutRisk": "Parolsiz PostgreSQL darhol qulaydi."
        }
      ],
      "whenToUse": "Ma'lumotlar yo'qolmasligi shart bo'lgan barcha bazalarda.",
      "omissionRisk": "Konteyner o'chirilishi halokatga olib keladi.",
      "syntaxExample": "docker run -d --name mypg -e POSTGRES_PASSWORD=LabOnly_12345 -v pgdata:/var/lib/postgresql/data postgres:15"
    }
  },
  {
    "id": 138,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 8",
    "title": "mypg Baza Loglarini Tekshirish",
    "story": "PostgreSQL ishga tushib ulanishlarni qabul qilishga tayyor bo'lganini bilish uchun loglarni ko'ring.",
    "task": "mypg loglarini tekshirish buyrug'i.",
    "canonical": "docker logs mypg",
    "accepted": [
      "docker logs mypg",
      "docker container logs mypg"
    ],
    "tags": [
      "#DOCKER_LOGS"
    ],
    "flagAnatomy": {
      "commandPurpose": "'database system is ready to accept connections' yozuvini tekshiradi.",
      "flags": [],
      "whenToUse": "Baza to'liq ko'tarilganini tasdiqlashda.",
      "omissionRisk": "Baza hali ochilmasdan unga so'rov yuborilsa xato beradi.",
      "syntaxExample": "docker logs mypg"
    }
  },
  {
    "id": 139,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 8",
    "title": "PostgreSQL Konsolini Ochish (psql)",
    "story": "`mypg` konteyneri ichida `postgres` foydalanuvchisi sifatida interaktiv `psql` SQL konsolini oching.",
    "task": "psql konsolini ochish buyrug'i.",
    "canonical": "docker exec -it mypg psql -U postgres",
    "accepted": [
      "docker exec -it mypg psql -U postgres"
    ],
    "tags": [
      "#PSQL",
      "#EXEC"
    ],
    "flagAnatomy": {
      "commandPurpose": "PostgreSQL buyruq qatorini ochadi.",
      "flags": [
        {
          "flag": "-U postgres",
          "name": "User",
          "purpose": "Foydalanuvchi nomini ko'rsatadi.",
          "withoutRisk": "Standart joriy tizim nomini izlaydi va ruxsat bermaydi."
        }
      ],
      "whenToUse": "SQL so'rovlarini to'g'ridan-to'g'ri kiritishda.",
      "omissionRisk": "SQL muhitiga kirib bo'lmaydi.",
      "syntaxExample": "docker exec -it mypg psql -U postgres"
    }
  },
  {
    "id": 140,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 8",
    "title": "Talabalar Jadvalini Yaratish (SQL)",
    "story": "psql ichida id (SERIAL PRIMARY KEY) va name (TEXT) ustunlariga ega `students` jadvalini yarating.",
    "task": "Jadval yaratish SQL buyrug'i.",
    "canonical": "CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);",
    "accepted": [
      "CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);",
      "CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT)"
    ],
    "tags": [
      "#SQL",
      "#DDL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Doimiy saqlanadigan talabalar jadvalini barpo etadi.",
      "flags": [],
      "whenToUse": "Ma'lumotlar bazasi sxemasini yaratishda.",
      "omissionRisk": "Jadvalsiz qator kiritib bo'lmaydi.",
      "syntaxExample": "CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);"
    }
  },
  {
    "id": 141,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 8",
    "title": "Jadvalga Zahid Nomini Qo'shish (SQL)",
    "story": "`students` jadvaliga `Zahid` ismini qo'shuvchi SQL buyrug'ini kiriting.",
    "task": "Qator qo'shish SQL buyrug'i.",
    "canonical": "INSERT INTO students (name) VALUES ('Zahid');",
    "accepted": [
      "INSERT INTO students (name) VALUES ('Zahid');",
      "INSERT INTO students (name) VALUES ('Zahid')"
    ],
    "tags": [
      "#SQL",
      "#DML"
    ],
    "flagAnatomy": {
      "commandPurpose": "Jadvalga sinov yozuvini kiritadi.",
      "flags": [],
      "whenToUse": "Ma'lumotlar persistensiyasini tekshirish uchun qator yaratishda.",
      "omissionRisk": "Tekshirish uchun ma'lumot bo'lmaydi.",
      "syntaxExample": "INSERT INTO students (name) VALUES ('Zahid');"
    }
  },
  {
    "id": 142,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 8",
    "title": "psql Konsolidan Chiqish (\\q)",
    "story": "PostgreSQL psql terminalidan xavfsiz chiqish uchun qaysi maxsus buyruq kiritiladi?",
    "task": "psql dan chiqish buyrug'i.",
    "canonical": "\\q",
    "accepted": [
      "\\q",
      "exit",
      "quit"
    ],
    "tags": [
      "#PSQL",
      "#EXIT"
    ],
    "flagAnatomy": {
      "commandPurpose": "SQL sessiyasini yopib Bash terminaliga qaytadi.",
      "flags": [],
      "whenToUse": "SQL amallari yakunlanganda.",
      "omissionRisk": "SQL muhitidan chiqib bo'lmaydi.",
      "syntaxExample": "\\q"
    }
  },
  {
    "id": 143,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 8",
    "title": "mypg Konteynerini O'chirish va Qayta Ko'tarish",
    "story": "Persistensiyani isbotlash uchun `mypg` konteynerini to'xtatib o'chirib yuboring (docker stop mypg && docker rm mypg).",
    "task": "mypg ni o'chirish buyrug'i.",
    "canonical": "docker rm mypg",
    "accepted": [
      "docker rm mypg",
      "docker container rm mypg",
      "docker rm -f mypg"
    ],
    "tags": [
      "#DOCKER_RM"
    ],
    "flagAnatomy": {
      "commandPurpose": "Eski konteynerni o'chiradi, lekin `pgdata` hajmi diskda saqlanib qoladi.",
      "flags": [],
      "whenToUse": "Ma'lumotlar konteynerdan mustaqil yashashini isbotlashda.",
      "omissionRisk": "Konteyner bilan birga baza ham o'chib ketmaganini tekshirish.",
      "syntaxExample": "docker rm mypg"
    }
  },
  {
    "id": 144,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 8",
    "title": "Yangi mypg dan Zahid Yozuvini O'qish (-c)",
    "story": "Xuddi o'sha `pgdata` hajmi bilan yangi `mypg` konteyneri ishga tushirilgach, uning ichidagi Zahid yozuvini `-c` orqali so'rang.",
    "task": "Non-interaktiv SELECT so'rovi buyrug'i.",
    "canonical": "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\"",
    "accepted": [
      "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\"",
      "docker exec mypg psql -U postgres -c 'SELECT * FROM students;'"
    ],
    "tags": [
      "#DOCKER_EXEC",
      "#SQL"
    ],
    "flagAnatomy": {
      "commandPurpose": "Yangi konteynerda eski baza saqlanib qolganini tasdiqlaydi.",
      "flags": [
        {
          "flag": "-c",
          "name": "Command",
          "purpose": "SQL so'rovini bevosita bajaradi.",
          "withoutRisk": "Interaktiv psql ochilib skript to'xtab qoladi."
        }
      ],
      "whenToUse": "Volume persistensiyasini avtomatlashtirilgan tarzda tekshirishda.",
      "omissionRisk": "Zahid yozuvi qaytmasa baza yo'qolgan bo'ladi.",
      "syntaxExample": "docker exec mypg psql -U postgres -c \"SELECT * FROM students;\""
    }
  },
  {
    "id": 145,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 8",
    "title": "Mavjud Doimiy Hajmlar Ro'yxati (docker volume ls)",
    "story": "Tizimdagi barcha Docker nomli hajmlari ro'yxatini chiqaruvchi buyruqni bering.",
    "task": "Hajmlar ro'yxatini ko'rish buyrug'i.",
    "canonical": "docker volume ls",
    "accepted": [
      "docker volume ls"
    ],
    "tags": [
      "#DOCKER_VOLUME",
      "#LS"
    ],
    "flagAnatomy": {
      "commandPurpose": "Barcha saqlangan nomli hajmlarni (pgdata, compose-db-data) ko'rsatadi.",
      "flags": [],
      "whenToUse": "Qaysi hajmlar mavjudligini bilishda.",
      "omissionRisk": "Hajm nomlari esdan chiqishi mumkin.",
      "syntaxExample": "docker volume ls"
    }
  },
  {
    "id": 146,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 9",
    "title": "Multi-Stage Build Maqsadi",
    "story": "Seminar Extension: Java dasturini Maven bilan `AS builder` qatlamida kompilyatsiya qilib, yakuniy JRE ga faqat `.jar` faylini ko'chirish nimaga xizmat qiladi?",
    "task": "Yakuniy obraz hajmini keskin kamaytirish va kompilyatorni kiritmaslik uchunmi?",
    "canonical": "Reduces final image size by excluding build tools",
    "accepted": [
      "reduces final image size",
      "reduce image size",
      "hajmni kamaytirish",
      "kichraytirish"
    ],
    "tags": [
      "#MULTI_STAGE",
      "#OPTIMIZATION"
    ],
    "flagAnatomy": {
      "commandPurpose": "Multi-stage build faqat kerakli runtime artefaktni qoldirib, yuzlab MB vositalarni tashlab yuboradi.",
      "flags": [],
      "whenToUse": "Katta dasturlarni (Java, Go, Rust, C++) qadoqlashda.",
      "omissionRisk": "Obraz hajmi 1 GB ga yetib ketadi.",
      "syntaxExample": "FROM maven AS builder ... COPY --from=builder ... app.jar"
    }
  },
  {
    "id": 147,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 9",
    "title": "Java Multi-Stage Obrazini Qurish",
    "story": "`java-multistage:1.0` nomli Java obrazini ko'p bosqichli Dockerfile dan quring.",
    "task": "Java obrazini qurish buyrug'i.",
    "canonical": "docker build -t java-multistage:1.0 .",
    "accepted": [
      "docker build -t java-multistage:1.0 .",
      "docker build -t java-multistage:1.0 . "
    ],
    "tags": [
      "#DOCKER_BUILD",
      "#JAVA"
    ],
    "flagAnatomy": {
      "commandPurpose": "Ko'p bosqichli Java Dockerfile ni kompilyatsiya qilib kichik yakuniy obraz yaratadi.",
      "flags": [],
      "whenToUse": "Java dasturlarini konteynerlashda.",
      "omissionRisk": "Obraz qurilmasa dastur ishga tushmaydi.",
      "syntaxExample": "docker build -t java-multistage:1.0 ."
    }
  },
  {
    "id": 148,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 10",
    "title": "Docker Compose Konfiguratsiyasini Tekshirish",
    "story": "`compose.yaml` faylida sintaksis yoki xato bo'shliqlar yo'qligini servislarni ko'tarmasdan oldin tekshiring.",
    "task": "Compose konfiguratsiyasini tekshirish buyrug'i.",
    "canonical": "docker compose config",
    "accepted": [
      "docker compose config"
    ],
    "tags": [
      "#DOCKER_COMPOSE",
      "#CONFIG"
    ],
    "flagAnatomy": {
      "commandPurpose": "compose.yaml faylini to'liq tekshirib, formatlangan holda chiqaradi.",
      "flags": [],
      "whenToUse": "Servislarni ishga tushirishdan oldin.",
      "omissionRisk": "Xato indentation tufayli servislar yarimta ko'tariladi.",
      "syntaxExample": "docker compose config"
    }
  },
  {
    "id": 149,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "O'rta",
    "source": "Seminar 06 Part 10",
    "title": "Compose Servislarini Fonda Qurib Ishga Tushirish",
    "story": "`docker compose` yordamida barcha servislarni (web va db) fonda (-d) va qayta qurish bilan (--build) ishga tushiring.",
    "task": "Compose orqali ko'tarish buyrug'i.",
    "canonical": "docker compose up -d --build",
    "accepted": [
      "docker compose up -d --build",
      "docker compose up -d --build "
    ],
    "tags": [
      "#DOCKER_COMPOSE",
      "#UP"
    ],
    "flagAnatomy": {
      "commandPurpose": "Obrazlarni qayta quradi va bir nechta servislarni fonda ko'taradi.",
      "flags": [
        {
          "flag": "-d",
          "name": "Detach",
          "purpose": "Orqa fonda orkestratsiya qilish.",
          "withoutRisk": "Terminal bloklanadi."
        },
        {
          "flag": "--build",
          "name": "Build",
          "purpose": "Yangi kod o'zgarishlarini qurish.",
          "withoutRisk": "Eski keshdagi obraz ishga tushadi."
        }
      ],
      "whenToUse": "Ko'p servisli arxitekturani ishga tushirishda.",
      "omissionRisk": "Servislar bittalab qo'lda ko'tarilishi kerak bo'ladi.",
      "syntaxExample": "docker compose up -d --build"
    }
  },
  {
    "id": 150,
    "sectorId": 10,
    "sectorTitle": "PostgreSQL Volume Persistensiya, Multi-Stage & Compose",
    "difficulty": "Oson",
    "source": "Seminar 06 Part 10",
    "title": "Compose Servislarini Xavfsiz To'xtatish (down)",
    "story": "Docker Compose orqali yaratilgan konteynerlar va tarmoqni to'xtatib tozalang, lekin doimiy `compose-db-data` hajmini saqlab qoling.",
    "task": "Compose ni to'xtatish xavfsiz buyrug'i.",
    "canonical": "docker compose down",
    "accepted": [
      "docker compose down"
    ],
    "tags": [
      "#DOCKER_COMPOSE",
      "#DOWN"
    ],
    "flagAnatomy": {
      "commandPurpose": "Konteynerlar va tarmoqni o'chiradi, lekin nomli bazaviy hajmlarni saqlaydi.",
      "flags": [],
      "whenToUse": "Loyihani to'xtatishda.",
      "omissionRisk": "DIQQAT: Agar 'down -v' berilsa, doimiy baza ham o'chib ketadi! Oddiy 'down' esa xavfsizdir.",
      "syntaxExample": "docker compose down"
    }
  }
];
});
