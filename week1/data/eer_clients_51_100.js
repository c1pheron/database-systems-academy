var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.EER_CLIENTS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #51",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Aktyor va Film: 'ActsIn' Aloqasi (Role Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Actor** ob'yektlari hisobga olinadi. Har bir **Actor** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Movie** sub'yektlari kiritilgan. Har bir **Movie** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Actor** vaqt davomida bir nechta **Movie** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Movie** bir nechta **Actor** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Actor",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Movie",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Actor",
          "pk": "id"
        },
        {
          "name": "Movie",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Actor",
          "entity2": "Movie",
          "name": "ActsIn",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Actor' (0..*) va 'Movie' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Actor' va 'Movie' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Actor** ob'yektlari hisobga olinadi. Har bir **Actor** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Movie** sub'yektlari kiritilgan. Har bir **Movie** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Actor** vaqt davomida bir nechta **Movie** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Movie** bir nechta **Actor** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 52,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #52",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Foydalanuvchi va Guruh: 'MemberOf' Aloqasi (JoinedDate Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **User** ob'yektlari hisobga olinadi. Har bir **User** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **UserGroup** sub'yektlari kiritilgan. Har bir **UserGroup** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **User** vaqt davomida bir nechta **UserGroup** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **UserGroup** bir nechta **User** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "User",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "UserGroup",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "User",
          "pk": "id"
        },
        {
          "name": "UserGroup",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "User",
          "entity2": "UserGroup",
          "name": "MemberOf",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'User' (0..*) va 'UserGroup' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'User' va 'UserGroup' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **User** ob'yektlari hisobga olinadi. Har bir **User** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **UserGroup** sub'yektlari kiritilgan. Har bir **UserGroup** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **User** vaqt davomida bir nechta **UserGroup** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **UserGroup** bir nechta **User** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 53,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #53",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Avtomobil va Xizmat Safari: 'Drives' Aloqasi (Mileage Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Driver** ob'yektlari hisobga olinadi. Har bir **Driver** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Route** sub'yektlari kiritilgan. Har bir **Route** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Driver** vaqt davomida bir nechta **Route** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Route** bir nechta **Driver** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Driver",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Route",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Driver",
          "pk": "id"
        },
        {
          "name": "Route",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Driver",
          "entity2": "Route",
          "name": "Drives",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Driver' (0..*) va 'Route' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Driver' va 'Route' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Driver** ob'yektlari hisobga olinadi. Har bir **Driver** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Route** sub'yektlari kiritilgan. Har bir **Route** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Driver** vaqt davomida bir nechta **Route** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Route** bir nechta **Driver** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 54,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #54",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Dasturchi va Repozitoriy: 'Contributes' Aloqasi (Commits Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Developer** ob'yektlari hisobga olinadi. Har bir **Developer** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Repository** sub'yektlari kiritilgan. Har bir **Repository** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Developer** vaqt davomida bir nechta **Repository** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Repository** bir nechta **Developer** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Developer",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Repository",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Developer",
          "pk": "id"
        },
        {
          "name": "Repository",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Developer",
          "entity2": "Repository",
          "name": "Contributes",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Developer' (0..*) va 'Repository' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Developer' va 'Repository' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Developer** ob'yektlari hisobga olinadi. Har bir **Developer** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Repository** sub'yektlari kiritilgan. Har bir **Repository** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Developer** vaqt davomida bir nechta **Repository** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Repository** bir nechta **Developer** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 55,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #55",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Sayyoh va Mehmonxona: 'StaysAt' Aloqasi (CheckIn Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Tourist** ob'yektlari hisobga olinadi. Har bir **Tourist** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Hotel** sub'yektlari kiritilgan. Har bir **Hotel** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Tourist** vaqt davomida bir nechta **Hotel** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Hotel** bir nechta **Tourist** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Tourist",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Hotel",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Tourist",
          "pk": "id"
        },
        {
          "name": "Hotel",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Tourist",
          "entity2": "Hotel",
          "name": "StaysAt",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Tourist' (0..*) va 'Hotel' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Tourist' va 'Hotel' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Tourist** ob'yektlari hisobga olinadi. Har bir **Tourist** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Hotel** sub'yektlari kiritilgan. Har bir **Hotel** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Tourist** vaqt davomida bir nechta **Hotel** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Hotel** bir nechta **Tourist** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 56,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #56",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Xaridor va Do'kon Cheki: 'Purchases' Aloqasi (Discount Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Buyer** ob'yektlari hisobga olinadi. Har bir **Buyer** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Receipt** sub'yektlari kiritilgan. Har bir **Receipt** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Buyer** vaqt davomida bir nechta **Receipt** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Receipt** bir nechta **Buyer** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Buyer",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Receipt",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Buyer",
          "pk": "id"
        },
        {
          "name": "Receipt",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Buyer",
          "entity2": "Receipt",
          "name": "Purchases",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Buyer' (0..*) va 'Receipt' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Buyer' va 'Receipt' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Buyer** ob'yektlari hisobga olinadi. Har bir **Buyer** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Receipt** sub'yektlari kiritilgan. Har bir **Receipt** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Buyer** vaqt davomida bir nechta **Receipt** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Receipt** bir nechta **Buyer** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 57,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #57",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Dori va Kasallik: 'Treats' Aloqasi (Dosage Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Drug** ob'yektlari hisobga olinadi. Har bir **Drug** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Disease** sub'yektlari kiritilgan. Har bir **Disease** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Drug** vaqt davomida bir nechta **Disease** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Disease** bir nechta **Drug** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Drug",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Disease",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Drug",
          "pk": "id"
        },
        {
          "name": "Disease",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Drug",
          "entity2": "Disease",
          "name": "Treats",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Drug' (0..*) va 'Disease' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Drug' va 'Disease' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Drug** ob'yektlari hisobga olinadi. Har bir **Drug** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Disease** sub'yektlari kiritilgan. Har bir **Disease** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Drug** vaqt davomida bir nechta **Disease** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Disease** bir nechta **Drug** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 58,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #58",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "O'qituvchi va Sinf: 'Supervises' Aloqasi (AcademicYear Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Teacher** ob'yektlari hisobga olinadi. Har bir **Teacher** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **ClassRoom** sub'yektlari kiritilgan. Har bir **ClassRoom** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Teacher** vaqt davomida bir nechta **ClassRoom** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **ClassRoom** bir nechta **Teacher** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Teacher",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "ClassRoom",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Teacher",
          "pk": "id"
        },
        {
          "name": "ClassRoom",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Teacher",
          "entity2": "ClassRoom",
          "name": "Supervises",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Teacher' (0..*) va 'ClassRoom' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Teacher' va 'ClassRoom' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Teacher** ob'yektlari hisobga olinadi. Har bir **Teacher** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **ClassRoom** sub'yektlari kiritilgan. Har bir **ClassRoom** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Teacher** vaqt davomida bir nechta **ClassRoom** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **ClassRoom** bir nechta **Teacher** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 59,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #59",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Kompaniya va Homiylik: 'Sponsors' Aloqasi (Amount Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Company** ob'yektlari hisobga olinadi. Har bir **Company** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Event** sub'yektlari kiritilgan. Har bir **Event** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Company** vaqt davomida bir nechta **Event** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Event** bir nechta **Company** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Company",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Event",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Company",
          "pk": "id"
        },
        {
          "name": "Event",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Company",
          "entity2": "Event",
          "name": "Sponsors",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Company' (0..*) va 'Event' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Company' va 'Event' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Company** ob'yektlari hisobga olinadi. Har bir **Company** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Event** sub'yektlari kiritilgan. Har bir **Event** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Company** vaqt davomida bir nechta **Event** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Event** bir nechta **Company** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 60,
    "sector": 4,
    "floor": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Biznes Hamkor #60",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "4-Qavat Final Bossi: Xalqaro Logistika Tranziti ('Transits' - FreightCost)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Carrier** ob'yektlari hisobga olinadi. Har bir **Carrier** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **CargoHub** sub'yektlari kiritilgan. Har bir **CargoHub** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Carrier** vaqt davomida bir nechta **CargoHub** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **CargoHub** bir nechta **Carrier** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Carrier",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "CargoHub",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "code",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Carrier",
          "pk": "id"
        },
        {
          "name": "CargoHub",
          "pk": "code"
        }
      ],
      "relationships": [
        {
          "entity1": "Carrier",
          "entity2": "CargoHub",
          "name": "Transits",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Carrier' (0..*) va 'CargoHub' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Carrier' va 'CargoHub' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Carrier** ob'yektlari hisobga olinadi. Har bir **Carrier** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **CargoHub** sub'yektlari kiritilgan. Har bir **CargoHub** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: code (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Carrier** vaqt davomida bir nechta **CargoHub** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **CargoHub** bir nechta **Carrier** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 61,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #61",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Xodim va Rahbar Rekursiv Aloqasi (Supervises)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Employee** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Employee",
          "name": "Supervises",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Employee' (0..1) va 'Employee' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Employee' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Employee** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 62,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #62",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Ierarxik Katalog Daraxti Rekursiv Aloqasi (SubCategoryOf)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Category** ob'yektlari hisobga olinadi. Har bir **Category** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Category** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Category",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Category",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Category",
          "entity2": "Category",
          "name": "SubCategoryOf",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Category' (0..1) va 'Category' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Category' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Category** ob'yektlari hisobga olinadi. Har bir **Category** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Category** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 63,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #63",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Zavod Detallari Rekursiv *:* Yig'masi (BOM - Contains)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Part** ob'yektlari hisobga olinadi. Har bir **Part** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Part** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **Part** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Part",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Part",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Part",
          "entity2": "Part",
          "name": "Contains",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Part' (0..*) va 'Part' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Part' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Part** ob'yektlari hisobga olinadi. Har bir **Part** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Part** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **Part** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 64,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #64",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Universitet Fani Prerekvizitlari Rekursiv Aloqasi (Prerequisite)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Course** ob'yektlari hisobga olinadi. Har bir **Course** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Course** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **Course** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Course",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Course",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Course",
          "entity2": "Course",
          "name": "Prerequisite",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Course' (0..*) va 'Course' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Course' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Course** ob'yektlari hisobga olinadi. Har bir **Course** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Course** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **Course** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 65,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #65",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Ijtimoiy Tarmoq Do'stlik Rekursiv Aloqasi (FriendOf)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **User** ob'yektlari hisobga olinadi. Har bir **User** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **User** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **User** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "User",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "User",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "User",
          "entity2": "User",
          "name": "FriendOf",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'User' (0..*) va 'User' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'User' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **User** ob'yektlari hisobga olinadi. Har bir **User** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **User** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **User** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 66,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #66",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Korxona Tashkiliy Bo'linmalar Daraxti (SubDivisionOf)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Division** ob'yektlari hisobga olinadi. Har bir **Division** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Division** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Division",
          "entity2": "Division",
          "name": "SubDivisionOf",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Division' (0..1) va 'Division' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Division** ob'yektlari hisobga olinadi. Har bir **Division** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Division** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 67,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #67",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Tarixiy Voqealar Sabab-Oqibat Rekursiv Aloqasi (LeadsTo)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **HistoricalEvent** ob'yektlari hisobga olinadi. Har bir **HistoricalEvent** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **HistoricalEvent** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **HistoricalEvent** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "HistoricalEvent",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HistoricalEvent",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "HistoricalEvent",
          "entity2": "HistoricalEvent",
          "name": "LeadsTo",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'HistoricalEvent' (0..*) va 'HistoricalEvent' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'HistoricalEvent' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **HistoricalEvent** ob'yektlari hisobga olinadi. Har bir **HistoricalEvent** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **HistoricalEvent** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **HistoricalEvent** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 68,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #68",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Moliya Balans Moddalari Ierarxiyasi (SubAccountOf)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Account** ob'yektlari hisobga olinadi. Har bir **Account** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Account** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Account",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Account",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Account",
          "entity2": "Account",
          "name": "SubAccountOf",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Account' (0..1) va 'Account' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Account' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Account** ob'yektlari hisobga olinadi. Har bir **Account** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Account** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 69,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #69",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Dasturiy Komponentlar Paketlar Daraxti (DependsOn)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Component** ob'yektlari hisobga olinadi. Har bir **Component** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Component** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **Component** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Component",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Component",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Component",
          "entity2": "Component",
          "name": "DependsOn",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Component' (0..*) va 'Component' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Component' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Component** ob'yektlari hisobga olinadi. Har bir **Component** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Component** vaqt davomida bir nechta **Staff** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Staff** bir nechta **Component** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 70,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #70",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Avtomobil Ehtiyot Qismlari O'rnini Bosish (Replaces)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **SparePart** ob'yektlari hisobga olinadi. Har bir **SparePart** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **SparePart** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "SparePart",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SparePart",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "SparePart",
          "entity2": "SparePart",
          "name": "Replaces",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'SparePart' (0..1) va 'SparePart' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'SparePart' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **SparePart** ob'yektlari hisobga olinadi. Har bir **SparePart** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **SparePart** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 71,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #71",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Xizmat Vazifalari Ketma-ketligi Rekursiv Aloqasi (Follows)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Task** ob'yektlari hisobga olinadi. Har bir **Task** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Task** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Task",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Task",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Task",
          "entity2": "Task",
          "name": "Follows",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Task' (0..1) va 'Task' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Task' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Task** ob'yektlari hisobga olinadi. Har bir **Task** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Task** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 72,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #72",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Kadrlar Almashinuvi Merosxo'rlik Tizimi (Succeeds)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Staff** ob'yektlari hisobga olinadi. Har bir **Staff** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Staff** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Staff",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Staff",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Staff",
          "entity2": "Staff",
          "name": "Succeeds",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Staff' (0..1) va 'Staff' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Staff' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Staff** ob'yektlari hisobga olinadi. Har bir **Staff** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Staff** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 73,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #73",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Geografik Hududlar Ma'muriy Daraxti (BelongsToRegion)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Region** ob'yektlari hisobga olinadi. Har bir **Region** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Region** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Region",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Region",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Region",
          "entity2": "Region",
          "name": "BelongsToRegion",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Region' (0..1) va 'Region' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Region' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Region** ob'yektlari hisobga olinadi. Har bir **Region** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Region** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 74,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #74",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Elektron Pochta Xatlari Zanjiri (ReplyToThread)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **EmailMessage** ob'yektlari hisobga olinadi. Har bir **EmailMessage** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **EmailMessage** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "EmailMessage",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "EmailMessage",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "EmailMessage",
          "entity2": "EmailMessage",
          "name": "ReplyToThread",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'EmailMessage' (0..1) va 'EmailMessage' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'EmailMessage' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **EmailMessage** ob'yektlari hisobga olinadi. Har bir **EmailMessage** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **EmailMessage** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 75,
    "sector": 5,
    "floor": 5,
    "difficulty": "5-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #75",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "5-Qavat Bossi: Mentorlik va Jamoa Rahbarligi Rekursiv Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Staff** ob'yektlari hisobga olinadi. Har bir **Staff** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Staff** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Staff",
          "x": 280,
          "y": 150,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Staff",
          "pk": "id"
        }
      ],
      "relationships": [
        {
          "entity1": "Staff",
          "entity2": "Staff",
          "name": "Mentors",
          "mult1": "0..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Staff' (0..1) va 'Staff' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Staff' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Staff** ob'yektlari hisobga olinadi. Har bir **Staff** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Staff** va **Staff** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 76,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #76",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "O'qitish Taqsimoti Ternary Rombi (Teaches: Course, Instructor, Semester)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Course** ob'yektlari hisobga olinadi. Har bir **Course** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Instructor** sub'yektlari kiritilgan. Har bir **Instructor** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Course** vaqt davomida bir nechta **Instructor** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Instructor** bir nechta **Course** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Course",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Instructor",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Semester",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Course",
          "pk": "id1"
        },
        {
          "name": "Instructor",
          "pk": "id2"
        },
        {
          "name": "Semester",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Course",
          "entity2": "Instructor",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Course",
          "entity2": "Semester",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Course' (0..*) va 'Instructor' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Course', 'Instructor', 'Semester' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Course** ob'yektlari hisobga olinadi. Har bir **Course** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Instructor** sub'yektlari kiritilgan. Har bir **Instructor** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Course** vaqt davomida bir nechta **Instructor** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Instructor** bir nechta **Course** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 77,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #77",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Ta'minot Shartnomasi Ternary Rombi (Supplies: Supplier, Part, Project)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Supplier** ob'yektlari hisobga olinadi. Har bir **Supplier** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Part** sub'yektlari kiritilgan. Har bir **Part** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Supplier** vaqt davomida bir nechta **Part** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Part** bir nechta **Supplier** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Supplier",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Part",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Project",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Supplier",
          "pk": "id1"
        },
        {
          "name": "Part",
          "pk": "id2"
        },
        {
          "name": "Project",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Supplier",
          "entity2": "Part",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Supplier",
          "entity2": "Project",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Supplier' (0..*) va 'Part' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Supplier', 'Part', 'Project' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Supplier** ob'yektlari hisobga olinadi. Har bir **Supplier** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Part** sub'yektlari kiritilgan. Har bir **Part** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Supplier** vaqt davomida bir nechta **Part** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Part** bir nechta **Supplier** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 78,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #78",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Tibbiy Davolash Rejasi (Prescribes: Doctor, Patient, Drug)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Doctor** ob'yektlari hisobga olinadi. Har bir **Doctor** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Patient** sub'yektlari kiritilgan. Har bir **Patient** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Doctor** vaqt davomida bir nechta **Patient** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Patient** bir nechta **Doctor** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Patient",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Drug",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "pk": "id1"
        },
        {
          "name": "Patient",
          "pk": "id2"
        },
        {
          "name": "Drug",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Patient",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Doctor",
          "entity2": "Drug",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Doctor' (0..*) va 'Patient' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Doctor', 'Patient', 'Drug' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Doctor** ob'yektlari hisobga olinadi. Har bir **Doctor** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Patient** sub'yektlari kiritilgan. Har bir **Patient** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Doctor** vaqt davomida bir nechta **Patient** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Patient** bir nechta **Doctor** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 79,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #79",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Sug'urta Da'vosi Ko'rib Chiqilishi (Assesses: Policy, Claim, Agent)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Policy** ob'yektlari hisobga olinadi. Har bir **Policy** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Claim** sub'yektlari kiritilgan. Har bir **Claim** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Policy** vaqt davomida bir nechta **Claim** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Claim** bir nechta **Policy** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Policy",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Claim",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Agent",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Policy",
          "pk": "id1"
        },
        {
          "name": "Claim",
          "pk": "id2"
        },
        {
          "name": "Agent",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Policy",
          "entity2": "Claim",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Policy",
          "entity2": "Agent",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Policy' (0..*) va 'Claim' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Policy', 'Claim', 'Agent' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Policy** ob'yektlari hisobga olinadi. Har bir **Policy** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Claim** sub'yektlari kiritilgan. Har bir **Claim** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Policy** vaqt davomida bir nechta **Claim** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Claim** bir nechta **Policy** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 80,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #80",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Avtomobil Ijarasi Shartnomasi (Rents: Customer, Vehicle, AgencyBranch)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Customer** ob'yektlari hisobga olinadi. Har bir **Customer** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Vehicle** sub'yektlari kiritilgan. Har bir **Vehicle** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Customer** vaqt davomida bir nechta **Vehicle** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Vehicle** bir nechta **Customer** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Vehicle",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "AgencyBranch",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
          "pk": "id1"
        },
        {
          "name": "Vehicle",
          "pk": "id2"
        },
        {
          "name": "AgencyBranch",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "Vehicle",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Customer",
          "entity2": "AgencyBranch",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Customer' (0..*) va 'Vehicle' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Customer', 'Vehicle', 'AgencyBranch' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Customer** ob'yektlari hisobga olinadi. Har bir **Customer** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Vehicle** sub'yektlari kiritilgan. Har bir **Vehicle** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Customer** vaqt davomida bir nechta **Vehicle** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Vehicle** bir nechta **Customer** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 81,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #81",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Qurilish Obyekti Mashina Taqsimoti (Deploys: Site, Machinery, Operator)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Site** ob'yektlari hisobga olinadi. Har bir **Site** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Machinery** sub'yektlari kiritilgan. Har bir **Machinery** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Site** vaqt davomida bir nechta **Machinery** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Machinery** bir nechta **Site** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Site",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Machinery",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Operator",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Site",
          "pk": "id1"
        },
        {
          "name": "Machinery",
          "pk": "id2"
        },
        {
          "name": "Operator",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Site",
          "entity2": "Machinery",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Site",
          "entity2": "Operator",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Site' (0..*) va 'Machinery' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Site', 'Machinery', 'Operator' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Site** ob'yektlari hisobga olinadi. Har bir **Site** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Machinery** sub'yektlari kiritilgan. Har bir **Machinery** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Site** vaqt davomida bir nechta **Machinery** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Machinery** bir nechta **Site** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 82,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #82",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Sport Musobaqasi Hakamligi (Officiates: Referee, Match, Tournament)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Referee** ob'yektlari hisobga olinadi. Har bir **Referee** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Match** sub'yektlari kiritilgan. Har bir **Match** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Referee** vaqt davomida bir nechta **Match** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Match** bir nechta **Referee** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Referee",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Match",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Tournament",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Referee",
          "pk": "id1"
        },
        {
          "name": "Match",
          "pk": "id2"
        },
        {
          "name": "Tournament",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Referee",
          "entity2": "Match",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Referee",
          "entity2": "Tournament",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Referee' (0..*) va 'Match' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Referee', 'Match', 'Tournament' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Referee** ob'yektlari hisobga olinadi. Har bir **Referee** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Match** sub'yektlari kiritilgan. Har bir **Match** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Referee** vaqt davomida bir nechta **Match** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Match** bir nechta **Referee** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 83,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #83",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Bank Kredit Komissiyasi (Evaluates: LoanApp, Officer, Committee)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **LoanApp** ob'yektlari hisobga olinadi. Har bir **LoanApp** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Officer** sub'yektlari kiritilgan. Har bir **Officer** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **LoanApp** vaqt davomida bir nechta **Officer** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Officer** bir nechta **LoanApp** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "LoanApp",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Officer",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Committee",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "LoanApp",
          "pk": "id1"
        },
        {
          "name": "Officer",
          "pk": "id2"
        },
        {
          "name": "Committee",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "LoanApp",
          "entity2": "Officer",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "LoanApp",
          "entity2": "Committee",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'LoanApp' (0..*) va 'Officer' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'LoanApp', 'Officer', 'Committee' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **LoanApp** ob'yektlari hisobga olinadi. Har bir **LoanApp** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Officer** sub'yektlari kiritilgan. Har bir **Officer** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **LoanApp** vaqt davomida bir nechta **Officer** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Officer** bir nechta **LoanApp** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 84,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #84",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Yuk Bojxona Tekshiruvi (Inspects: Cargo, Inspector, CustomsPost)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Cargo** ob'yektlari hisobga olinadi. Har bir **Cargo** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Inspector** sub'yektlari kiritilgan. Har bir **Inspector** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Cargo** vaqt davomida bir nechta **Inspector** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Inspector** bir nechta **Cargo** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Cargo",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Inspector",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "CustomsPost",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Cargo",
          "pk": "id1"
        },
        {
          "name": "Inspector",
          "pk": "id2"
        },
        {
          "name": "CustomsPost",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Cargo",
          "entity2": "Inspector",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Cargo",
          "entity2": "CustomsPost",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Cargo' (0..*) va 'Inspector' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Cargo', 'Inspector', 'CustomsPost' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Cargo** ob'yektlari hisobga olinadi. Har bir **Cargo** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Inspector** sub'yektlari kiritilgan. Har bir **Inspector** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Cargo** vaqt davomida bir nechta **Inspector** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Inspector** bir nechta **Cargo** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 85,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #85",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Laboratoriya Namunasi Tahlili (Tests: Sample, Chemist, Equipment)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Sample** ob'yektlari hisobga olinadi. Har bir **Sample** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Chemist** sub'yektlari kiritilgan. Har bir **Chemist** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Sample** vaqt davomida bir nechta **Chemist** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Chemist** bir nechta **Sample** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Sample",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Chemist",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Equipment",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Sample",
          "pk": "id1"
        },
        {
          "name": "Chemist",
          "pk": "id2"
        },
        {
          "name": "Equipment",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Sample",
          "entity2": "Chemist",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Sample",
          "entity2": "Equipment",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Sample' (0..*) va 'Chemist' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Sample', 'Chemist', 'Equipment' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Sample** ob'yektlari hisobga olinadi. Har bir **Sample** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Chemist** sub'yektlari kiritilgan. Har bir **Chemist** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Sample** vaqt davomida bir nechta **Chemist** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Chemist** bir nechta **Sample** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 86,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #86",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Mehmonxona Xona Bandligi (Books: Guest, Room, BookingAgent)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Guest** ob'yektlari hisobga olinadi. Har bir **Guest** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Room** sub'yektlari kiritilgan. Har bir **Room** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Guest** vaqt davomida bir nechta **Room** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Room** bir nechta **Guest** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Guest",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Room",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "BookingAgent",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Guest",
          "pk": "id1"
        },
        {
          "name": "Room",
          "pk": "id2"
        },
        {
          "name": "BookingAgent",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Guest",
          "entity2": "Room",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Guest",
          "entity2": "BookingAgent",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Guest' (0..*) va 'Room' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Guest', 'Room', 'BookingAgent' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Guest** ob'yektlari hisobga olinadi. Har bir **Guest** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Room** sub'yektlari kiritilgan. Har bir **Room** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Guest** vaqt davomida bir nechta **Room** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Room** bir nechta **Guest** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 87,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #87",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Xalqaro Parvoz Ekipaji (Assigns: Flight, Pilot, Aircraft)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Flight** ob'yektlari hisobga olinadi. Har bir **Flight** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Pilot** sub'yektlari kiritilgan. Har bir **Pilot** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Flight** vaqt davomida bir nechta **Pilot** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Pilot** bir nechta **Flight** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Flight",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Pilot",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Aircraft",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Flight",
          "pk": "id1"
        },
        {
          "name": "Pilot",
          "pk": "id2"
        },
        {
          "name": "Aircraft",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Flight",
          "entity2": "Pilot",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Flight",
          "entity2": "Aircraft",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Flight' (0..*) va 'Pilot' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Flight', 'Pilot', 'Aircraft' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Flight** ob'yektlari hisobga olinadi. Har bir **Flight** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Pilot** sub'yektlari kiritilgan. Har bir **Pilot** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Flight** vaqt davomida bir nechta **Pilot** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Pilot** bir nechta **Flight** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 88,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #88",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Kinofilm Kasting Taqsimoti (Casts: Movie, Role, Actor)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Movie** ob'yektlari hisobga olinadi. Har bir **Movie** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Role** sub'yektlari kiritilgan. Har bir **Role** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Movie** vaqt davomida bir nechta **Role** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Role** bir nechta **Movie** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Movie",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Role",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Actor",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Movie",
          "pk": "id1"
        },
        {
          "name": "Role",
          "pk": "id2"
        },
        {
          "name": "Actor",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Movie",
          "entity2": "Role",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Movie",
          "entity2": "Actor",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Movie' (0..*) va 'Role' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Movie', 'Role', 'Actor' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Movie** ob'yektlari hisobga olinadi. Har bir **Movie** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Role** sub'yektlari kiritilgan. Har bir **Role** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Movie** vaqt davomida bir nechta **Role** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Role** bir nechta **Movie** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 89,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #89",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Zavod Mahsulotini Qadoqlash (Packs: Product, PackagingLine, Operator)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Product** ob'yektlari hisobga olinadi. Har bir **Product** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **PackagingLine** sub'yektlari kiritilgan. Har bir **PackagingLine** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Product** vaqt davomida bir nechta **PackagingLine** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **PackagingLine** bir nechta **Product** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Product",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "PackagingLine",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Operator",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Product",
          "pk": "id1"
        },
        {
          "name": "PackagingLine",
          "pk": "id2"
        },
        {
          "name": "Operator",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Product",
          "entity2": "PackagingLine",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Product",
          "entity2": "Operator",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Product' (0..*) va 'PackagingLine' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Product', 'PackagingLine', 'Operator' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Product** ob'yektlari hisobga olinadi. Har bir **Product** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **PackagingLine** sub'yektlari kiritilgan. Har bir **PackagingLine** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Product** vaqt davomida bir nechta **PackagingLine** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **PackagingLine** bir nechta **Product** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 90,
    "sector": 6,
    "floor": 6,
    "difficulty": "6-Qavat • Ilg'or",
    "clientName": "Biznes Hamkor #90",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "6-Qavat Bossi: Festival Chiqishlari Ternary Tizimi (Artist, Stage, FestivalDay)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Artist** ob'yektlari hisobga olinadi. Har bir **Artist** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Stage** sub'yektlari kiritilgan. Har bir **Stage** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Artist** vaqt davomida bir nechta **Stage** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Stage** bir nechta **Artist** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Artist",
          "x": 100,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Stage",
          "x": 450,
          "y": 80,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "FestivalDay",
          "x": 450,
          "y": 220,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Artist",
          "pk": "id1"
        },
        {
          "name": "Stage",
          "pk": "id2"
        },
        {
          "name": "FestivalDay",
          "pk": "id3"
        }
      ],
      "relationships": [
        {
          "entity1": "Artist",
          "entity2": "Stage",
          "mult1": "0..*",
          "mult2": "0..*"
        },
        {
          "entity1": "Artist",
          "entity2": "FestivalDay",
          "mult1": "0..*",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Artist' (0..*) va 'Stage' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Artist', 'Stage', 'FestivalDay' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Artist** ob'yektlari hisobga olinadi. Har bir **Artist** o'zining id1 (birlamchi kalit {PK}) kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Stage** sub'yektlari kiritilgan. Har bir **Stage** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id2 (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Artist** vaqt davomida bir nechta **Stage** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Stage** bir nechta **Artist** bilan aloqador bo'lishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 91,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #91",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Xodimlar Ixtisoslashuvi: Soatbay va Oylik ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Employee** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Employee** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "HourlyEmp",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "SalariedEmp",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Employee",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "HourlyEmp",
          "SalariedEmp"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Employee' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Employee' superklassi va uning subklasslarini ('HourlyEmp', 'SalariedEmp') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Employee** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Employee** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 92,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #92",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Transport Vositalari Ierarxiyasi ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Vehicle** ob'yektlari hisobga olinadi. Har bir **Vehicle** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Vehicle** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Vehicle** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Vehicle",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Car",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "Truck",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Vehicle",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Vehicle",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "Car",
          "Truck"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Vehicle' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Vehicle' superklassi va uning subklasslarini ('Car', 'Truck') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Vehicle** ob'yektlari hisobga olinadi. Har bir **Vehicle** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Vehicle** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Vehicle** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 93,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #93",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Universitet Xodimlari Qisman Ixtisoslashuvi ({Optional, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Person** ob'yektlari hisobga olinadi. Har bir **Person** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: attr1. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Person** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Person** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Person",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Staff",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "Student",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Person",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Person",
        "constraint": "{Optional, Or}",
        "subclasses": [
          "Staff",
          "Student"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Person' ostidagi '{Optional, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Person' superklassi va uning subklasslarini ('Staff', 'Student') doskada chizing hamda '{Optional, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Person** ob'yektlari hisobga olinadi. Har bir **Person** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: attr1. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Person** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Person** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 94,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #94",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Bank Hisob Varaqlari: Omonat va Joriy ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Account** ob'yektlari hisobga olinadi. Har bir **Account** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Account** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Account** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Account",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "SavingsAcc",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "CurrentAcc",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Account",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Account",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "SavingsAcc",
          "CurrentAcc"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Account' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Account' superklassi va uning subklasslarini ('SavingsAcc', 'CurrentAcc') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Account** ob'yektlari hisobga olinadi. Har bir **Account** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Account** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Account** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 95,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #95",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Kutubxona Resurslari: Kitob va Jurnal ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **LibraryItem** ob'yektlari hisobga olinadi. Har bir **LibraryItem** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **LibraryItem** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **LibraryItem** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "LibraryItem",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Book",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "Journal",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "LibraryItem",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "LibraryItem",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "Book",
          "Journal"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'LibraryItem' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'LibraryItem' superklassi va uning subklasslarini ('Book', 'Journal') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **LibraryItem** ob'yektlari hisobga olinadi. Har bir **LibraryItem** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **LibraryItem** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **LibraryItem** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 96,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #96",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Mulk Turlari: Turarjoy va Tijorat Mulki ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Property** ob'yektlari hisobga olinadi. Har bir **Property** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Property** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Property** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Property",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Residential",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "Commercial",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Property",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Property",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "Residential",
          "Commercial"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Property' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Property' superklassi va uning subklasslarini ('Residential', 'Commercial') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Property** ob'yektlari hisobga olinadi. Har bir **Property** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Property** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Property** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 97,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #97",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Kompaniya Mijozlari: Jismoniy va Yuridik Shaxs ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Customer** ob'yektlari hisobga olinadi. Har bir **Customer** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Customer** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Customer** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Individual",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "Corporate",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Customer",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "Individual",
          "Corporate"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Customer' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Customer' superklassi va uning subklasslarini ('Individual', 'Corporate') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Customer** ob'yektlari hisobga olinadi. Har bir **Customer** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Customer** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Customer** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 98,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #98",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Dasturiy Foydalanuvchilar: Admin va Mehmon ({Optional, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **User** ob'yektlari hisobga olinadi. Har bir **User** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **User** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **User** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "User",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Admin",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "Guest",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "User",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "User",
        "constraint": "{Optional, Or}",
        "subclasses": [
          "Admin",
          "Guest"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'User' ostidagi '{Optional, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'User' superklassi va uning subklasslarini ('Admin', 'Guest') doskada chizing hamda '{Optional, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **User** ob'yektlari hisobga olinadi. Har bir **User** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **User** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **User** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 99,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #99",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Tibbiy Sug'urta Rejalari: Baza va Premium ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **InsurancePlan** ob'yektlari hisobga olinadi. Har bir **InsurancePlan** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **InsurancePlan** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **InsurancePlan** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "InsurancePlan",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "BasicPlan",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "PremiumPlan",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "InsurancePlan",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "InsurancePlan",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "BasicPlan",
          "PremiumPlan"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'InsurancePlan' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'InsurancePlan' superklassi va uning subklasslarini ('BasicPlan', 'PremiumPlan') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **InsurancePlan** ob'yektlari hisobga olinadi. Har bir **InsurancePlan** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **InsurancePlan** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **InsurancePlan** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 100,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #100",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "7-Qavat Bossi: Bemorlar Ixtisoslashuvi ({Mandatory, Or})",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Patient** ob'yektlari hisobga olinadi. Har bir **Patient** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Patient** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Patient** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
    "starterDiagram": {
      "entities": [
        {
          "name": "Patient",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "InPatient",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "OutPatient",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": [],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Patient",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Patient",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "InPatient",
          "OutPatient"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Patient' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Patient' superklassi va uning subklasslarini ('InPatient', 'OutPatient') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Patient** ob'yektlari hisobga olinadi. Har bir **Patient** o'zining id (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: id (birlamchi kalit {PK}). Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Patient** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Patient** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  }
];
