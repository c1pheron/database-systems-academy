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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #51 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Actor** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **Movie** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Actor** va **Movie** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Actor bir nechta Movie ga bog'lanishi mumkin, va aksincha, bitta Movie bir nechta Actor bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Actor** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **Movie** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Actor` (**0..***) ↔ `Movie` (**0..***)",
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
    "task": "'Actor' va 'Movie' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #52 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **User** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **UserGroup** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **User** va **UserGroup** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta User bir nechta UserGroup ga bog'lanishi mumkin, va aksincha, bitta UserGroup bir nechta User bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **User** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **UserGroup** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `User` (**0..***) ↔ `UserGroup` (**0..***)",
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
    "task": "'User' va 'UserGroup' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #53 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Driver** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **Route** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Driver** va **Route** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Driver bir nechta Route ga bog'lanishi mumkin, va aksincha, bitta Route bir nechta Driver bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Driver** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **Route** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Driver` (**0..***) ↔ `Route` (**0..***)",
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
    "task": "'Driver' va 'Route' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #54 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Developer** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **Repository** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Developer** va **Repository** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Developer bir nechta Repository ga bog'lanishi mumkin, va aksincha, bitta Repository bir nechta Developer bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Developer** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **Repository** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Developer` (**0..***) ↔ `Repository` (**0..***)",
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
    "task": "'Developer' va 'Repository' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #55 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Tourist** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **Hotel** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Tourist** va **Hotel** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Tourist bir nechta Hotel ga bog'lanishi mumkin, va aksincha, bitta Hotel bir nechta Tourist bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Tourist** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **Hotel** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Tourist` (**0..***) ↔ `Hotel` (**0..***)",
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
    "task": "'Tourist' va 'Hotel' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #56 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Buyer** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **Receipt** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Buyer** va **Receipt** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Buyer bir nechta Receipt ga bog'lanishi mumkin, va aksincha, bitta Receipt bir nechta Buyer bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Buyer** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **Receipt** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Buyer` (**0..***) ↔ `Receipt` (**0..***)",
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
    "task": "'Buyer' va 'Receipt' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #57 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Drug** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **Disease** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Drug** va **Disease** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Drug bir nechta Disease ga bog'lanishi mumkin, va aksincha, bitta Disease bir nechta Drug bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Drug** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **Disease** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Drug` (**0..***) ↔ `Disease` (**0..***)",
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
    "task": "'Drug' va 'Disease' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #58 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Teacher** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **ClassRoom** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Teacher** va **ClassRoom** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Teacher bir nechta ClassRoom ga bog'lanishi mumkin, va aksincha, bitta ClassRoom bir nechta Teacher bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Teacher** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **ClassRoom** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Teacher` (**0..***) ↔ `ClassRoom` (**0..***)",
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
    "task": "'Teacher' va 'ClassRoom' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #59 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Company** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **Event** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Company** va **Event** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Company bir nechta Event ga bog'lanishi mumkin, va aksincha, bitta Event bir nechta Company bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Company** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **Event** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Company` (**0..***) ↔ `Event` (**0..***)",
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
    "task": "'Company' va 'Event' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #60 (Tizim Tahlilchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Carrier** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n• **CargoHub** entitiysi (atributlari: noyob identifikatori `code` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Carrier** va **CargoHub** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Carrier bir nechta CargoHub ga bog'lanishi mumkin, va aksincha, bitta CargoHub bir nechta Carrier bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Carrier** (Birlamchi kalit: `id`): `id` {PK}, `name`\n• **CargoHub** (Birlamchi kalit: `code`): `code` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Carrier` (**0..***) ↔ `CargoHub` (**0..***)",
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
    "task": "'Carrier' va 'CargoHub' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #61 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Employee** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Employee** va **Employee** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Employee` tomonida **0..1**, `Employee` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Employee** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Employee` (**0..1**) ↔ `Employee` (**0..***)",
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
    "task": "'Employee' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #62 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Category** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Category** va **Category** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Category` tomonida **0..1**, `Category` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Category** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Category` (**0..1**) ↔ `Category` (**0..***)",
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
    "task": "'Category' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #63 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Part** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Part** va **Part** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Part bir nechta Part ga bog'lanishi mumkin, va aksincha, bitta Part bir nechta Part bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Part** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Part` (**0..***) ↔ `Part` (**0..***)",
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
    "task": "'Part' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #64 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Course** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Course** va **Course** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Course bir nechta Course ga bog'lanishi mumkin, va aksincha, bitta Course bir nechta Course bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Course** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Course` (**0..***) ↔ `Course` (**0..***)",
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
    "task": "'Course' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #65 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **User** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **User** va **User** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta User bir nechta User ga bog'lanishi mumkin, va aksincha, bitta User bir nechta User bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **User** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `User` (**0..***) ↔ `User` (**0..***)",
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
    "task": "'User' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #66 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Division** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Division** va **Division** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Division` tomonida **0..1**, `Division` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**0..1**) ↔ `Division` (**0..***)",
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
    "task": "'Division' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #67 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **HistoricalEvent** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **HistoricalEvent** va **HistoricalEvent** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta HistoricalEvent bir nechta HistoricalEvent ga bog'lanishi mumkin, va aksincha, bitta HistoricalEvent bir nechta HistoricalEvent bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **HistoricalEvent** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `HistoricalEvent` (**0..***) ↔ `HistoricalEvent` (**0..***)",
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
    "task": "'HistoricalEvent' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #68 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Account** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Account** va **Account** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Account` tomonida **0..1**, `Account` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Account** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Account` (**0..1**) ↔ `Account` (**0..***)",
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
    "task": "'Account' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #69 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Component** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Component** va **Component** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Component bir nechta Component ga bog'lanishi mumkin, va aksincha, bitta Component bir nechta Component bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Component** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Component` (**0..***) ↔ `Component` (**0..***)",
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
    "task": "'Component' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..*', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #70 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **SparePart** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **SparePart** va **SparePart** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `SparePart` tomonida **0..1**, `SparePart` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **SparePart** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `SparePart` (**0..1**) ↔ `SparePart` (**0..***)",
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
    "task": "'SparePart' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #71 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Task** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Task** va **Task** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Task` tomonida **0..1**, `Task` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Task** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Task` (**0..1**) ↔ `Task` (**0..***)",
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
    "task": "'Task' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #72 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Staff** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Staff** va **Staff** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Staff` tomonida **0..1**, `Staff` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Staff** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Staff` (**0..1**) ↔ `Staff` (**0..***)",
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
    "task": "'Staff' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #73 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Region** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Region** va **Region** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Region` tomonida **0..1**, `Region` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Region** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Region` (**0..1**) ↔ `Region` (**0..***)",
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
    "task": "'Region' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #74 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **EmailMessage** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **EmailMessage** va **EmailMessage** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `EmailMessage` tomonida **0..1**, `EmailMessage` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **EmailMessage** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `EmailMessage` (**0..1**) ↔ `EmailMessage` (**0..***)",
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
    "task": "'EmailMessage' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #75 (Tashkiliy Boshqaruv Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Staff** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Staff** va **Staff** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Staff` tomonida **0..1**, `Staff` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Staff** (Birlamchi kalit: `id`): `id` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Staff` (**0..1**) ↔ `Staff` (**0..***)",
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
    "task": "'Staff' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv munosabatini chizing: bir tomoniga '0..1', ikkinchi tomoniga '0..*' multiplisitiyalarini qo'ying."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #76 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Course** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Instructor** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Semester** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Course** va **Instructor** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Course bir nechta Instructor ga bog'lanishi mumkin, va aksincha, bitta Instructor bir nechta Course bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Course** va **Semester** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Course bir nechta Semester ga bog'lanishi mumkin, va aksincha, bitta Semester bir nechta Course bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Course** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Instructor** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Semester** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Course` (**0..***) ↔ `Instructor` (**0..***)\n• `Course` (**0..***) ↔ `Semester` (**0..***)",
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
    "task": "'Course', 'Instructor', 'Semester' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #77 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Supplier** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Part** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Project** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Supplier** va **Part** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Supplier bir nechta Part ga bog'lanishi mumkin, va aksincha, bitta Part bir nechta Supplier bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Supplier** va **Project** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Supplier bir nechta Project ga bog'lanishi mumkin, va aksincha, bitta Project bir nechta Supplier bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Supplier** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Part** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Project** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Supplier` (**0..***) ↔ `Part` (**0..***)\n• `Supplier` (**0..***) ↔ `Project` (**0..***)",
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
    "task": "'Supplier', 'Part', 'Project' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #78 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Doctor** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Patient** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Drug** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Doctor** va **Patient** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Doctor bir nechta Patient ga bog'lanishi mumkin, va aksincha, bitta Patient bir nechta Doctor bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Doctor** va **Drug** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Doctor bir nechta Drug ga bog'lanishi mumkin, va aksincha, bitta Drug bir nechta Doctor bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Doctor** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Patient** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Drug** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Doctor` (**0..***) ↔ `Patient` (**0..***)\n• `Doctor` (**0..***) ↔ `Drug` (**0..***)",
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
    "task": "'Doctor', 'Patient', 'Drug' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #79 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Policy** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Claim** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Agent** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Policy** va **Claim** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Policy bir nechta Claim ga bog'lanishi mumkin, va aksincha, bitta Claim bir nechta Policy bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Policy** va **Agent** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Policy bir nechta Agent ga bog'lanishi mumkin, va aksincha, bitta Agent bir nechta Policy bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Policy** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Claim** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Agent** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Policy` (**0..***) ↔ `Claim` (**0..***)\n• `Policy` (**0..***) ↔ `Agent` (**0..***)",
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
    "task": "'Policy', 'Claim', 'Agent' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #80 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Customer** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Vehicle** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **AgencyBranch** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Customer** va **Vehicle** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Customer bir nechta Vehicle ga bog'lanishi mumkin, va aksincha, bitta Vehicle bir nechta Customer bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Customer** va **AgencyBranch** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Customer bir nechta AgencyBranch ga bog'lanishi mumkin, va aksincha, bitta AgencyBranch bir nechta Customer bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Customer** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Vehicle** (Birlamchi kalit: `id2`): `id2` {PK}\n• **AgencyBranch** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Customer` (**0..***) ↔ `Vehicle` (**0..***)\n• `Customer` (**0..***) ↔ `AgencyBranch` (**0..***)",
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
    "task": "'Customer', 'Vehicle', 'AgencyBranch' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #81 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Site** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Machinery** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Operator** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Site** va **Machinery** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Site bir nechta Machinery ga bog'lanishi mumkin, va aksincha, bitta Machinery bir nechta Site bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Site** va **Operator** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Site bir nechta Operator ga bog'lanishi mumkin, va aksincha, bitta Operator bir nechta Site bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Site** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Machinery** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Operator** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Site` (**0..***) ↔ `Machinery` (**0..***)\n• `Site` (**0..***) ↔ `Operator` (**0..***)",
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
    "task": "'Site', 'Machinery', 'Operator' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #82 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Referee** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Match** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Tournament** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Referee** va **Match** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Referee bir nechta Match ga bog'lanishi mumkin, va aksincha, bitta Match bir nechta Referee bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Referee** va **Tournament** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Referee bir nechta Tournament ga bog'lanishi mumkin, va aksincha, bitta Tournament bir nechta Referee bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Referee** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Match** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Tournament** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Referee` (**0..***) ↔ `Match` (**0..***)\n• `Referee` (**0..***) ↔ `Tournament` (**0..***)",
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
    "task": "'Referee', 'Match', 'Tournament' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #83 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **LoanApp** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Officer** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Committee** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **LoanApp** va **Officer** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta LoanApp bir nechta Officer ga bog'lanishi mumkin, va aksincha, bitta Officer bir nechta LoanApp bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **LoanApp** va **Committee** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta LoanApp bir nechta Committee ga bog'lanishi mumkin, va aksincha, bitta Committee bir nechta LoanApp bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **LoanApp** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Officer** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Committee** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `LoanApp` (**0..***) ↔ `Officer` (**0..***)\n• `LoanApp` (**0..***) ↔ `Committee` (**0..***)",
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
    "task": "'LoanApp', 'Officer', 'Committee' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #84 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Cargo** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Inspector** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **CustomsPost** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Cargo** va **Inspector** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Cargo bir nechta Inspector ga bog'lanishi mumkin, va aksincha, bitta Inspector bir nechta Cargo bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Cargo** va **CustomsPost** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Cargo bir nechta CustomsPost ga bog'lanishi mumkin, va aksincha, bitta CustomsPost bir nechta Cargo bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Cargo** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Inspector** (Birlamchi kalit: `id2`): `id2` {PK}\n• **CustomsPost** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Cargo` (**0..***) ↔ `Inspector` (**0..***)\n• `Cargo` (**0..***) ↔ `CustomsPost` (**0..***)",
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
    "task": "'Cargo', 'Inspector', 'CustomsPost' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #85 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Sample** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Chemist** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Equipment** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Sample** va **Chemist** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Sample bir nechta Chemist ga bog'lanishi mumkin, va aksincha, bitta Chemist bir nechta Sample bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Sample** va **Equipment** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Sample bir nechta Equipment ga bog'lanishi mumkin, va aksincha, bitta Equipment bir nechta Sample bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Sample** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Chemist** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Equipment** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Sample` (**0..***) ↔ `Chemist` (**0..***)\n• `Sample` (**0..***) ↔ `Equipment` (**0..***)",
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
    "task": "'Sample', 'Chemist', 'Equipment' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #86 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Guest** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Room** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **BookingAgent** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Guest** va **Room** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Guest bir nechta Room ga bog'lanishi mumkin, va aksincha, bitta Room bir nechta Guest bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Guest** va **BookingAgent** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Guest bir nechta BookingAgent ga bog'lanishi mumkin, va aksincha, bitta BookingAgent bir nechta Guest bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Guest** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Room** (Birlamchi kalit: `id2`): `id2` {PK}\n• **BookingAgent** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Guest` (**0..***) ↔ `Room` (**0..***)\n• `Guest` (**0..***) ↔ `BookingAgent` (**0..***)",
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
    "task": "'Guest', 'Room', 'BookingAgent' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #87 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Flight** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Pilot** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Aircraft** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Flight** va **Pilot** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Flight bir nechta Pilot ga bog'lanishi mumkin, va aksincha, bitta Pilot bir nechta Flight bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Flight** va **Aircraft** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Flight bir nechta Aircraft ga bog'lanishi mumkin, va aksincha, bitta Aircraft bir nechta Flight bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Flight** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Pilot** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Aircraft** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Flight` (**0..***) ↔ `Pilot` (**0..***)\n• `Flight` (**0..***) ↔ `Aircraft` (**0..***)",
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
    "task": "'Flight', 'Pilot', 'Aircraft' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #88 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Movie** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Role** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Actor** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Movie** va **Role** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Movie bir nechta Role ga bog'lanishi mumkin, va aksincha, bitta Role bir nechta Movie bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Movie** va **Actor** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Movie bir nechta Actor ga bog'lanishi mumkin, va aksincha, bitta Actor bir nechta Movie bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Movie** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Role** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Actor** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Movie` (**0..***) ↔ `Role` (**0..***)\n• `Movie` (**0..***) ↔ `Actor` (**0..***)",
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
    "task": "'Movie', 'Role', 'Actor' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #89 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Product** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **PackagingLine** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **Operator** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Product** va **PackagingLine** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Product bir nechta PackagingLine ga bog'lanishi mumkin, va aksincha, bitta PackagingLine bir nechta Product bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Product** va **Operator** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Product bir nechta Operator ga bog'lanishi mumkin, va aksincha, bitta Operator bir nechta Product bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Product** (Birlamchi kalit: `id1`): `id1` {PK}\n• **PackagingLine** (Birlamchi kalit: `id2`): `id2` {PK}\n• **Operator** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Product` (**0..***) ↔ `PackagingLine` (**0..***)\n• `Product` (**0..***) ↔ `Operator` (**0..***)",
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
    "task": "'Product', 'PackagingLine', 'Operator' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #90 (Tizim Integratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Artist** entitiysi (atributlari: noyob identifikatori `id1` {PK})\n• **Stage** entitiysi (atributlari: noyob identifikatori `id2` {PK})\n• **FestivalDay** entitiysi (atributlari: noyob identifikatori `id3` {PK})\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Artist** va **Stage** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Artist bir nechta Stage ga bog'lanishi mumkin, va aksincha, bitta Stage bir nechta Artist bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n• **Artist** va **FestivalDay** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Artist bir nechta FestivalDay ga bog'lanishi mumkin, va aksincha, bitta FestivalDay bir nechta Artist bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Artist** (Birlamchi kalit: `id1`): `id1` {PK}\n• **Stage** (Birlamchi kalit: `id2`): `id2` {PK}\n• **FestivalDay** (Birlamchi kalit: `id3`): `id3` {PK}\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Artist` (**0..***) ↔ `Stage` (**0..***)\n• `Artist` (**0..***) ↔ `FestivalDay` (**0..***)",
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
    "task": "'Artist', 'Stage', 'FestivalDay' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #91 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Employee** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Employee** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'Employee' superklassi va uning subklasslarini ('HourlyEmp', 'SalariedEmp') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #92 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Vehicle** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Vehicle** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'Vehicle' superklassi va uning subklasslarini ('Car', 'Truck') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #93 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Person** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Person** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'Person' superklassi va uning subklasslarini ('Staff', 'Student') doskada chizing hamda '{Optional, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #94 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Account** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Account** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'Account' superklassi va uning subklasslarini ('SavingsAcc', 'CurrentAcc') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #95 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **LibraryItem** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **LibraryItem** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'LibraryItem' superklassi va uning subklasslarini ('Book', 'Journal') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #96 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Property** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Property** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'Property' superklassi va uning subklasslarini ('Residential', 'Commercial') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #97 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Customer** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Customer** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'Customer' superklassi va uning subklasslarini ('Individual', 'Corporate') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #98 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **User** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **User** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'User' superklassi va uning subklasslarini ('Admin', 'Guest') doskada chizing hamda '{Optional, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #99 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **InsurancePlan** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **InsurancePlan** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'InsurancePlan' superklassi va uning subklasslarini ('BasicPlan', 'PremiumPlan') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
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
    "story": "**Mijoz Portfolio:** Biznes Hamkor #100 (EER Arxitektura Eksperti)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Patient** entitiysi (atributlari: noyob identifikatori `id` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\nMazkur mustaqil entitiy tashkilotning asosiy axborot yadrosi bo'lib, o'zining mustaqil birlamchi kalitiga ega.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Patient** (Birlamchi kalit: `id`): `id` {PK}, `name`",
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
    "task": "'Patient' superklassi va uning subklasslarini ('InPatient', 'OutPatient') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
  }
];
