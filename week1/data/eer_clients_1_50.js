var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.EER_CLIENTS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Alisher Zokirov",
    "clientRole": "'Orient Bank' Boshqaruv Raisi",
    "clientAvatar": "banker",
    "title": "Bank Bank Filiallari va Xodimlar Tizimi",
    "story": "**Mijoz Portfolio:** Alisher Zokirov ('Orient Bank' Boshqaruv Raisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Branch** entitiysi (atributlari: noyob identifikatori `branchNo` {PK}, `city`)\n• **Staff** entitiysi (atributlari: noyob identifikatori `staffNo` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Branch** va **Staff** o'rtasidagi munosabat: Har bir Staff faqat va faqat bitta Branch ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Branch o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Staff larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `branchNo`): `branchNo` {PK}, `city`\n• **Staff** (Birlamchi kalit: `staffNo`): `staffNo` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true
            },
            {
              "name": "city"
            }
          ]
        },
        {
          "name": "Staff",
          "attributes": [
            {
              "name": "staffNo",
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
          "name": "Branch",
          "pk": "branchNo"
        },
        {
          "name": "Staff",
          "pk": "staffNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch' va 'Staff' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Dilnoza Rahimova",
    "clientRole": "University Fakultet Dekani",
    "clientAvatar": "dean",
    "title": "Fakultet va Talabalar Ro'yxati",
    "story": "**Mijoz Portfolio:** Dilnoza Rahimova (University Fakultet Dekani)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Faculty** entitiysi (atributlari: noyob identifikatori `facultyCode` {PK}, `facultyName`)\n• **Student** entitiysi (atributlari: noyob identifikatori `studentId` {PK}, `fullName`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Faculty** va **Student** o'rtasidagi munosabat: Har bir Student faqat va faqat bitta Faculty ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Faculty o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Student larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Faculty** (Birlamchi kalit: `facultyCode`): `facultyCode` {PK}, `facultyName`\n• **Student** (Birlamchi kalit: `studentId`): `studentId` {PK}, `fullName`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Faculty` (**1..1**) ↔ `Student` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "attributes": [
            {
              "name": "facultyCode",
              "isPK": true
            },
            {
              "name": "facultyName"
            }
          ]
        },
        {
          "name": "Student",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "fullName"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "pk": "facultyCode"
        },
        {
          "name": "Student",
          "pk": "studentId"
        }
      ],
      "relationships": [
        {
          "entity1": "Faculty",
          "entity2": "Student",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Faculty' (1..1) va 'Student' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Faculty' va 'Student' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Botir Qodirov",
    "clientRole": "'Mega Market' Logistika Direktori",
    "clientAvatar": "logistics",
    "title": "Toifalar va Mahsulotlar Katalogi",
    "story": "**Mijoz Portfolio:** Botir Qodirov ('Mega Market' Logistika Direktori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Category** entitiysi (atributlari: noyob identifikatori `catId` {PK}, `catName`)\n• **Product** entitiysi (atributlari: noyob identifikatori `prodCode` {PK}, `price`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Category** va **Product** o'rtasidagi munosabat: Har bir Product faqat va faqat bitta Category ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Category o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Product larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Category** (Birlamchi kalit: `catId`): `catId` {PK}, `catName`\n• **Product** (Birlamchi kalit: `prodCode`): `prodCode` {PK}, `price`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Category` (**1..1**) ↔ `Product` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Category",
          "attributes": [
            {
              "name": "catId",
              "isPK": true
            },
            {
              "name": "catName"
            }
          ]
        },
        {
          "name": "Product",
          "attributes": [
            {
              "name": "prodCode",
              "isPK": true
            },
            {
              "name": "price"
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
          "pk": "catId"
        },
        {
          "name": "Product",
          "pk": "prodCode"
        }
      ],
      "relationships": [
        {
          "entity1": "Category",
          "entity2": "Product",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Category' (1..1) va 'Product' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Category' va 'Product' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Nodir Salimov",
    "clientRole": "'Ziyo Nashr' Bosh Muharriri",
    "clientAvatar": "publisher",
    "title": "Nashriyot va Kitoblar Noshirligi",
    "story": "**Mijoz Portfolio:** Nodir Salimov ('Ziyo Nashr' Bosh Muharriri)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Publisher** entitiysi (atributlari: noyob identifikatori `pubId` {PK}, `pubName`)\n• **Book** entitiysi (atributlari: noyob identifikatori `isbn` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Publisher** va **Book** o'rtasidagi munosabat: Har bir Book faqat va faqat bitta Publisher ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Publisher o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Book larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Publisher** (Birlamchi kalit: `pubId`): `pubId` {PK}, `pubName`\n• **Book** (Birlamchi kalit: `isbn`): `isbn` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Publisher` (**1..1**) ↔ `Book` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Publisher",
          "attributes": [
            {
              "name": "pubId",
              "isPK": true
            },
            {
              "name": "pubName"
            }
          ]
        },
        {
          "name": "Book",
          "attributes": [
            {
              "name": "isbn",
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
          "name": "Publisher",
          "pk": "pubId"
        },
        {
          "name": "Book",
          "pk": "isbn"
        }
      ],
      "relationships": [
        {
          "entity1": "Publisher",
          "entity2": "Book",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Publisher' (1..1) va 'Book' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Publisher' va 'Book' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Malika Yusupova",
    "clientRole": "'Shifo Med' Bosh Shifokori",
    "clientAvatar": "doctor",
    "title": "Kasalxona Bo'limi va Palatalar",
    "story": "**Mijoz Portfolio:** Malika Yusupova ('Shifo Med' Bosh Shifokori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **WardDept** entitiysi (atributlari: noyob identifikatori `deptCode` {PK}, `name`)\n• **WardRoom** entitiysi (atributlari: noyob identifikatori `roomNo` {PK}, `capacity`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **WardDept** va **WardRoom** o'rtasidagi munosabat: Har bir WardRoom faqat va faqat bitta WardDept ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir WardDept o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab WardRoom larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **WardDept** (Birlamchi kalit: `deptCode`): `deptCode` {PK}, `name`\n• **WardRoom** (Birlamchi kalit: `roomNo`): `roomNo` {PK}, `capacity`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `WardDept` (**1..1**) ↔ `WardRoom` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "WardDept",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "WardRoom",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "capacity"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "WardDept",
          "pk": "deptCode"
        },
        {
          "name": "WardRoom",
          "pk": "roomNo"
        }
      ],
      "relationships": [
        {
          "entity1": "WardDept",
          "entity2": "WardRoom",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'WardDept' (1..1) va 'WardRoom' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'WardDept' va 'WardRoom' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Javohir Toirov",
    "clientRole": "Davlat Ro'yxatga Olish Xizmati",
    "clientAvatar": "officer",
    "title": "Fuqaro va Pasport Munosabati",
    "story": "**Mijoz Portfolio:** Javohir Toirov (Davlat Ro'yxatga Olish Xizmati)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Citizen** entitiysi (atributlari: noyob identifikatori `pinfl` {PK}, `fullName`)\n• **Passport** entitiysi (atributlari: noyob identifikatori `passNo` {PK}, `issueDate`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Citizen** va **Passport** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Citizen` tomonida **1..1**, `Passport` tomonida esa **1..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Citizen** (Birlamchi kalit: `pinfl`): `pinfl` {PK}, `fullName`\n• **Passport** (Birlamchi kalit: `passNo`): `passNo` {PK}, `issueDate`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Citizen` (**1..1**) ↔ `Passport` (**1..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Citizen",
          "attributes": [
            {
              "name": "pinfl",
              "isPK": true
            },
            {
              "name": "fullName"
            }
          ]
        },
        {
          "name": "Passport",
          "attributes": [
            {
              "name": "passNo",
              "isPK": true
            },
            {
              "name": "issueDate"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Citizen",
          "pk": "pinfl"
        },
        {
          "name": "Passport",
          "pk": "passNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Passport",
          "mult1": "1..1",
          "mult2": "1..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Citizen' (1..1) va 'Passport' (1..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Citizen' va 'Passport' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Sanjar Mirzayev",
    "clientRole": "Futbol Ligasi Komissari",
    "clientAvatar": "sports",
    "title": "Futbol Klubi va Stadion Munosabati",
    "story": "**Mijoz Portfolio:** Sanjar Mirzayev (Futbol Ligasi Komissari)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **FootballClub** entitiysi (atributlari: noyob identifikatori `clubId` {PK}, `clubName`)\n• **Stadium** entitiysi (atributlari: noyob identifikatori `stadiumId` {PK}, `seats`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **FootballClub** va **Stadium** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `FootballClub` tomonida **1..1**, `Stadium` tomonida esa **1..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **FootballClub** (Birlamchi kalit: `clubId`): `clubId` {PK}, `clubName`\n• **Stadium** (Birlamchi kalit: `stadiumId`): `stadiumId` {PK}, `seats`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `FootballClub` (**1..1**) ↔ `Stadium` (**1..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "FootballClub",
          "attributes": [
            {
              "name": "clubId",
              "isPK": true
            },
            {
              "name": "clubName"
            }
          ]
        },
        {
          "name": "Stadium",
          "attributes": [
            {
              "name": "stadiumId",
              "isPK": true
            },
            {
              "name": "seats"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FootballClub",
          "pk": "clubId"
        },
        {
          "name": "Stadium",
          "pk": "stadiumId"
        }
      ],
      "relationships": [
        {
          "entity1": "FootballClub",
          "entity2": "Stadium",
          "mult1": "1..1",
          "mult2": "1..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'FootballClub' (1..1) va 'Stadium' (1..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'FootballClub' va 'Stadium' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Gulnora Ergasheva",
    "clientRole": "Avtopark Mudiri",
    "clientAvatar": "fleet",
    "title": "Haydovchi va Xizmat Mashinasi",
    "story": "**Mijoz Portfolio:** Gulnora Ergasheva (Avtopark Mudiri)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Driver** entitiysi (atributlari: noyob identifikatori `licenseNo` {PK}, `fullName`)\n• **Vehicle** entitiysi (atributlari: noyob identifikatori `vin` {PK}, `model`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Driver** va **Vehicle** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Driver` tomonida **1..1**, `Vehicle` tomonida esa **1..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Driver** (Birlamchi kalit: `licenseNo`): `licenseNo` {PK}, `fullName`\n• **Vehicle** (Birlamchi kalit: `vin`): `vin` {PK}, `model`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Driver` (**1..1**) ↔ `Vehicle` (**1..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Driver",
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true
            },
            {
              "name": "fullName"
            }
          ]
        },
        {
          "name": "Vehicle",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "model"
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
          "pk": "licenseNo"
        },
        {
          "name": "Vehicle",
          "pk": "vin"
        }
      ],
      "relationships": [
        {
          "entity1": "Driver",
          "entity2": "Vehicle",
          "mult1": "1..1",
          "mult2": "1..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Driver' (1..1) va 'Vehicle' (1..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Driver' va 'Vehicle' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Davron Akbarov",
    "clientRole": "Dasturiy Ta'minot Company PM",
    "clientAvatar": "techpm",
    "title": "Loyiha va Versiya Boshqaruvi",
    "story": "**Mijoz Portfolio:** Davron Akbarov (Dasturiy Ta'minot Company PM)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Project** entitiysi (atributlari: noyob identifikatori `projId` {PK}, `title`)\n• **Repository** entitiysi (atributlari: noyob identifikatori `repoId` {PK}, `repoUrl`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Project** va **Repository** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Project` tomonida **1..1**, `Repository` tomonida esa **1..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Project** (Birlamchi kalit: `projId`): `projId` {PK}, `title`\n• **Repository** (Birlamchi kalit: `repoId`): `repoId` {PK}, `repoUrl`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Project` (**1..1**) ↔ `Repository` (**1..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Project",
          "attributes": [
            {
              "name": "projId",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Repository",
          "attributes": [
            {
              "name": "repoId",
              "isPK": true
            },
            {
              "name": "repoUrl"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Project",
          "pk": "projId"
        },
        {
          "name": "Repository",
          "pk": "repoId"
        }
      ],
      "relationships": [
        {
          "entity1": "Project",
          "entity2": "Repository",
          "mult1": "1..1",
          "mult2": "1..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Project' (1..1) va 'Repository' (1..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Project' va 'Repository' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Aziza Karimova",
    "clientRole": "Mehmonxona Tarmog'i Manager",
    "clientAvatar": "hotel",
    "title": "Mehmonxona va Bosh Bino",
    "story": "**Mijoz Portfolio:** Aziza Karimova (Mehmonxona Tarmog'i Manager)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Hotel** entitiysi (atributlari: noyob identifikatori `hotelId` {PK}, `city`)\n• **MainBuilding** entitiysi (atributlari: noyob identifikatori `bldgId` {PK}, `floors`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Hotel** va **MainBuilding** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Hotel` tomonida **1..1**, `MainBuilding` tomonida esa **1..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Hotel** (Birlamchi kalit: `hotelId`): `hotelId` {PK}, `city`\n• **MainBuilding** (Birlamchi kalit: `bldgId`): `bldgId` {PK}, `floors`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Hotel` (**1..1**) ↔ `MainBuilding` (**1..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true
            },
            {
              "name": "city"
            }
          ]
        },
        {
          "name": "MainBuilding",
          "attributes": [
            {
              "name": "bldgId",
              "isPK": true
            },
            {
              "name": "floors"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "pk": "hotelId"
        },
        {
          "name": "MainBuilding",
          "pk": "bldgId"
        }
      ],
      "relationships": [
        {
          "entity1": "Hotel",
          "entity2": "MainBuilding",
          "mult1": "1..1",
          "mult2": "1..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Hotel' (1..1) va 'MainBuilding' (1..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Hotel' va 'MainBuilding' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Otabek G'aniyev",
    "clientRole": "Temir Yo'l Vokzali Dispetcheri",
    "clientAvatar": "railway",
    "title": "Poyezd va Vagonlar Zanjiri",
    "story": "**Mijoz Portfolio:** Otabek G'aniyev (Temir Yo'l Vokzali Dispetcheri)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Train** entitiysi (atributlari: noyob identifikatori `trainNo` {PK}, `route`)\n• **Carriage** entitiysi (atributlari: noyob identifikatori `carriageId` {PK}, `seatsCount`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Train** va **Carriage** o'rtasidagi munosabat: Har bir Carriage faqat va faqat bitta Train ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Train o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Carriage larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Train** (Birlamchi kalit: `trainNo`): `trainNo` {PK}, `route`\n• **Carriage** (Birlamchi kalit: `carriageId`): `carriageId` {PK}, `seatsCount`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Train` (**1..1**) ↔ `Carriage` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Train",
          "attributes": [
            {
              "name": "trainNo",
              "isPK": true
            },
            {
              "name": "route"
            }
          ]
        },
        {
          "name": "Carriage",
          "attributes": [
            {
              "name": "carriageId",
              "isPK": true
            },
            {
              "name": "seatsCount"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Train",
          "pk": "trainNo"
        },
        {
          "name": "Carriage",
          "pk": "carriageId"
        }
      ],
      "relationships": [
        {
          "entity1": "Train",
          "entity2": "Carriage",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Train' (1..1) va 'Carriage' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Train' va 'Carriage' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Zuhra Murodova",
    "clientRole": "Maktab Direktori",
    "clientAvatar": "principal",
    "title": "Sinf va O'quvchilar Bog'liqligi",
    "story": "**Mijoz Portfolio:** Zuhra Murodova (Maktab Direktori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **SchoolClass** entitiysi (atributlari: noyob identifikatori `classId` {PK}, `gradeLevel`)\n• **Pupil** entitiysi (atributlari: noyob identifikatori `pupilId` {PK}, `fullName`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **SchoolClass** va **Pupil** o'rtasidagi munosabat: Har bir Pupil faqat va faqat bitta SchoolClass ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir SchoolClass o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Pupil larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **SchoolClass** (Birlamchi kalit: `classId`): `classId` {PK}, `gradeLevel`\n• **Pupil** (Birlamchi kalit: `pupilId`): `pupilId` {PK}, `fullName`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `SchoolClass` (**1..1**) ↔ `Pupil` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "SchoolClass",
          "attributes": [
            {
              "name": "classId",
              "isPK": true
            },
            {
              "name": "gradeLevel"
            }
          ]
        },
        {
          "name": "Pupil",
          "attributes": [
            {
              "name": "pupilId",
              "isPK": true
            },
            {
              "name": "fullName"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SchoolClass",
          "pk": "classId"
        },
        {
          "name": "Pupil",
          "pk": "pupilId"
        }
      ],
      "relationships": [
        {
          "entity1": "SchoolClass",
          "entity2": "Pupil",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'SchoolClass' (1..1) va 'Pupil' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'SchoolClass' va 'Pupil' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Umid Vohidov",
    "clientRole": "IT Xizmatlar Servis Manager",
    "clientAvatar": "itsm",
    "title": "Mijoz va Qo'llab-quvvatlash Chiptasi (Ticket)",
    "story": "**Mijoz Portfolio:** Umid Vohidov (IT Xizmatlar Servis Manager)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Client** entitiysi (atributlari: noyob identifikatori `clientId` {PK}, `orgName`)\n• **Ticket** entitiysi (atributlari: noyob identifikatori `ticketNo` {PK}, `issueText`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Client** va **Ticket** o'rtasidagi munosabat: Har bir Ticket faqat va faqat bitta Client ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Client o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Ticket larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Client** (Birlamchi kalit: `clientId`): `clientId` {PK}, `orgName`\n• **Ticket** (Birlamchi kalit: `ticketNo`): `ticketNo` {PK}, `issueText`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Client` (**1..1**) ↔ `Ticket` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Client",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "orgName"
            }
          ]
        },
        {
          "name": "Ticket",
          "attributes": [
            {
              "name": "ticketNo",
              "isPK": true
            },
            {
              "name": "issueText"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Client",
          "pk": "clientId"
        },
        {
          "name": "Ticket",
          "pk": "ticketNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Client",
          "entity2": "Ticket",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Client' (1..1) va 'Ticket' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Client' va 'Ticket' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Shahnoza Aliyeva",
    "clientRole": "Library Tarmog'i Head",
    "clientAvatar": "librarian",
    "title": "Kutubxona Bo'limi va Tokchalar",
    "story": "**Mijoz Portfolio:** Shahnoza Aliyeva (Library Tarmog'i Head)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **LibrarySection** entitiysi (atributlari: noyob identifikatori `secId` {PK}, `topic`)\n• **Bookshelf** entitiysi (atributlari: noyob identifikatori `shelfNo` {PK}, `capacity`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **LibrarySection** va **Bookshelf** o'rtasidagi munosabat: Har bir Bookshelf faqat va faqat bitta LibrarySection ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir LibrarySection o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Bookshelf larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **LibrarySection** (Birlamchi kalit: `secId`): `secId` {PK}, `topic`\n• **Bookshelf** (Birlamchi kalit: `shelfNo`): `shelfNo` {PK}, `capacity`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `LibrarySection` (**1..1**) ↔ `Bookshelf` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "LibrarySection",
          "attributes": [
            {
              "name": "secId",
              "isPK": true
            },
            {
              "name": "topic"
            }
          ]
        },
        {
          "name": "Bookshelf",
          "attributes": [
            {
              "name": "shelfNo",
              "isPK": true
            },
            {
              "name": "capacity"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "LibrarySection",
          "pk": "secId"
        },
        {
          "name": "Bookshelf",
          "pk": "shelfNo"
        }
      ],
      "relationships": [
        {
          "entity1": "LibrarySection",
          "entity2": "Bookshelf",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'LibrarySection' (1..1) va 'Bookshelf' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'LibrarySection' va 'Bookshelf' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Bahriddin Po'latov",
    "clientRole": "'Apex Corporation' Bosh Ijrochi Direktori",
    "clientAvatar": "ceo",
    "title": "1-Qavat Bossi: Korxona Departamenti va Bosh Menejer",
    "story": "**Mijoz Portfolio:** Bahriddin Po'latov ('Apex Corporation' Bosh Ijrochi Direktori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Department** entitiysi (atributlari: noyob identifikatori `deptNo` {PK}, `dName`)\n• **Employee** entitiysi (atributlari: noyob identifikatori `empNo` {PK}, `fullName`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Department** va **Employee** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Department` tomonida **1..1**, `Employee` tomonida esa **1..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Department** (Birlamchi kalit: `deptNo`): `deptNo` {PK}, `dName`\n• **Employee** (Birlamchi kalit: `empNo`): `empNo` {PK}, `fullName`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Department` (**1..1**) ↔ `Employee` (**1..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Department",
          "attributes": [
            {
              "name": "deptNo",
              "isPK": true
            },
            {
              "name": "dName"
            }
          ]
        },
        {
          "name": "Employee",
          "attributes": [
            {
              "name": "empNo",
              "isPK": true
            },
            {
              "name": "fullName"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Department",
          "pk": "deptNo"
        },
        {
          "name": "Employee",
          "pk": "empNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Department",
          "entity2": "Employee",
          "name": "Manages",
          "mult1": "1..1",
          "mult2": "1..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Department' (1..1) va 'Employee' (1..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Department' va 'Employee' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Eldor Shokirov",
    "clientRole": "Avtosalon Savdo Manager",
    "clientAvatar": "dealer",
    "title": "Mijoz va Avtomobil Xaridi (Ixtiyoriy 0..*)",
    "story": "**Mijoz Portfolio:** Eldor Shokirov (Avtosalon Savdo Manager)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Customer** entitiysi (atributlari: noyob identifikatori `custId` {PK}, `name`)\n• **Car** entitiysi (atributlari: noyob identifikatori `vin` {PK}, `model`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Customer** va **Car** o'rtasidagi munosabat: Har bir Car aniq bitta Customer ga tegishli (1..1), biroq yangi ochilgan Customer da hozircha birorta ham Car bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Customer** (Birlamchi kalit: `custId`): `custId` {PK}, `name`\n• **Car** (Birlamchi kalit: `vin`): `vin` {PK}, `model`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Customer` (**1..1**) ↔ `Car` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "attributes": [
            {
              "name": "custId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Car",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "model"
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
          "pk": "custId"
        },
        {
          "name": "Car",
          "pk": "vin"
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "Car",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Customer' (1..1) va 'Car' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Customer' va 'Car' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Nargiza Rustamova",
    "clientRole": "Universitet O'quv Department Head",
    "clientAvatar": "academic",
    "title": "Professor va Ilmiy Maqolalar Tizimi",
    "story": "**Mijoz Portfolio:** Nargiza Rustamova (Universitet O'quv Department Head)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Professor** entitiysi (atributlari: noyob identifikatori `profId` {PK}, `name`)\n• **Article** entitiysi (atributlari: noyob identifikatori `articleId` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Professor** va **Article** o'rtasidagi munosabat: Har bir Article aniq bitta Professor ga tegishli (1..1), biroq yangi ochilgan Professor da hozircha birorta ham Article bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Professor** (Birlamchi kalit: `profId`): `profId` {PK}, `name`\n• **Article** (Birlamchi kalit: `articleId`): `articleId` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Professor` (**1..1**) ↔ `Article` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Professor",
          "attributes": [
            {
              "name": "profId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Article",
          "attributes": [
            {
              "name": "articleId",
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
          "name": "Professor",
          "pk": "profId"
        },
        {
          "name": "Article",
          "pk": "articleId"
        }
      ],
      "relationships": [
        {
          "entity1": "Professor",
          "entity2": "Article",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Professor' (1..1) va 'Article' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Professor' va 'Article' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Bobur Ismoilov",
    "clientRole": "HR Boshqarmasi Director",
    "clientAvatar": "hrmanager",
    "title": "Xodim va Xizmat Noutbuki Tizimi",
    "story": "**Mijoz Portfolio:** Bobur Ismoilov (HR Boshqarmasi Director)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Employee** entitiysi (atributlari: noyob identifikatori `empNo` {PK}, `name`)\n• **Laptop** entitiysi (atributlari: noyob identifikatori `serialNo` {PK}, `model`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Employee** va **Laptop** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Employee` tomonida **1..1**, `Laptop` tomonida esa **0..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Employee** (Birlamchi kalit: `empNo`): `empNo` {PK}, `name`\n• **Laptop** (Birlamchi kalit: `serialNo`): `serialNo` {PK}, `model`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Employee` (**1..1**) ↔ `Laptop` (**0..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "attributes": [
            {
              "name": "empNo",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Laptop",
          "attributes": [
            {
              "name": "serialNo",
              "isPK": true
            },
            {
              "name": "model"
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
          "pk": "empNo"
        },
        {
          "name": "Laptop",
          "pk": "serialNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Laptop",
          "mult1": "1..1",
          "mult2": "0..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Employee' (1..1) va 'Laptop' (0..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Employee' va 'Laptop' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Nargiza Yo'ldosheva",
    "clientRole": "IT Akademiya Kurs Manager",
    "clientAvatar": "academic",
    "title": "O'quvchi va Sertifikat Tizimi",
    "story": "**Mijoz Portfolio:** Nargiza Yo'ldosheva (IT Akademiya Kurs Manager)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Student** entitiysi (atributlari: noyob identifikatori `studentId` {PK}, `name`)\n• **Certificate** entitiysi (atributlari: noyob identifikatori `certId` {PK}, `issueDate`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Student** va **Certificate** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Student` tomonida **1..1**, `Certificate` tomonida esa **0..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Student** (Birlamchi kalit: `studentId`): `studentId` {PK}, `name`\n• **Certificate** (Birlamchi kalit: `certId`): `certId` {PK}, `issueDate`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Student` (**1..1**) ↔ `Certificate` (**0..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Certificate",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "certId",
              "isPK": true
            },
            {
              "name": "issueDate"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Student",
          "pk": "studentId"
        },
        {
          "name": "Certificate",
          "pk": "certId"
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "Certificate",
          "mult1": "1..1",
          "mult2": "0..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Student' (1..1) va 'Certificate' (0..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Student' va 'Certificate' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Farhod Karimov",
    "clientRole": "Library Tizimi Engineer",
    "clientAvatar": "librarian",
    "title": "Kitobxon va Jarimalar Tizimi",
    "story": "**Mijoz Portfolio:** Farhod Karimov (Library Tizimi Engineer)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Member** entitiysi (atributlari: noyob identifikatori `memberId` {PK}, `name`)\n• **Fine** entitiysi (atributlari: noyob identifikatori `fineId` {PK}, `amount`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Member** va **Fine** o'rtasidagi munosabat: Har bir Fine aniq bitta Member ga tegishli (1..1), biroq yangi ochilgan Member da hozircha birorta ham Fine bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Member** (Birlamchi kalit: `memberId`): `memberId` {PK}, `name`\n• **Fine** (Birlamchi kalit: `fineId`): `fineId` {PK}, `amount`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Member` (**1..1**) ↔ `Fine` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Member",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Fine",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "fineId",
              "isPK": true
            },
            {
              "name": "amount"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Member",
          "pk": "memberId"
        },
        {
          "name": "Fine",
          "pk": "fineId"
        }
      ],
      "relationships": [
        {
          "entity1": "Member",
          "entity2": "Fine",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Member' (1..1) va 'Fine' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Member' va 'Fine' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Sevara Normatova",
    "clientRole": "Clinic Ro'yxatga Olish Department",
    "clientAvatar": "doctor",
    "title": "Bemor va Retseptlar Tizimi",
    "story": "**Mijoz Portfolio:** Sevara Normatova (Clinic Ro'yxatga Olish Department)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Patient** entitiysi (atributlari: noyob identifikatori `patientId` {PK}, `name`)\n• **Prescription** entitiysi (atributlari: noyob identifikatori `rxNo` {PK}, `date`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Patient** va **Prescription** o'rtasidagi munosabat: Har bir Prescription aniq bitta Patient ga tegishli (1..1), biroq yangi ochilgan Patient da hozircha birorta ham Prescription bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Patient** (Birlamchi kalit: `patientId`): `patientId` {PK}, `name`\n• **Prescription** (Birlamchi kalit: `rxNo`): `rxNo` {PK}, `date`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Patient` (**1..1**) ↔ `Prescription` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Patient",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Prescription",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "rxNo",
              "isPK": true
            },
            {
              "name": "date"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Patient",
          "pk": "patientId"
        },
        {
          "name": "Prescription",
          "pk": "rxNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Patient",
          "entity2": "Prescription",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Patient' (1..1) va 'Prescription' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Patient' va 'Prescription' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Akmal Rahmonov",
    "clientRole": "Uy-joy Agency Broker",
    "clientAvatar": "broker",
    "title": "Mulk Egasi va Kvartiralar Tizimi",
    "story": "**Mijoz Portfolio:** Akmal Rahmonov (Uy-joy Agency Broker)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Owner** entitiysi (atributlari: noyob identifikatori `ownerNo` {PK}, `name`)\n• **Property** entitiysi (atributlari: noyob identifikatori `propNo` {PK}, `address`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Owner** va **Property** o'rtasidagi munosabat: Har bir Property faqat va faqat bitta Owner ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Owner o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Property larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Owner** (Birlamchi kalit: `ownerNo`): `ownerNo` {PK}, `name`\n• **Property** (Birlamchi kalit: `propNo`): `propNo` {PK}, `address`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Owner` (**1..1**) ↔ `Property` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Owner",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "ownerNo",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Property",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "propNo",
              "isPK": true
            },
            {
              "name": "address"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Owner",
          "pk": "ownerNo"
        },
        {
          "name": "Property",
          "pk": "propNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Owner",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Owner' (1..1) va 'Property' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Owner' va 'Property' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Jamshid Tursunov",
    "clientRole": "Restoranlar Tarmog'i Bosh Oshpazi",
    "clientAvatar": "chef",
    "title": "Taom va Retsept Masalliqlari Tizimi",
    "story": "**Mijoz Portfolio:** Jamshid Tursunov (Restoranlar Tarmog'i Bosh Oshpazi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Dish** entitiysi (atributlari: noyob identifikatori `dishId` {PK}, `title`)\n• **Ingredient** entitiysi (atributlari: noyob identifikatori `ingId` {PK}, `name`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Dish** va **Ingredient** o'rtasidagi munosabat: Har bir Ingredient faqat va faqat bitta Dish ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Dish o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Ingredient larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Dish** (Birlamchi kalit: `dishId`): `dishId` {PK}, `title`\n• **Ingredient** (Birlamchi kalit: `ingId`): `ingId` {PK}, `name`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Dish` (**1..1**) ↔ `Ingredient` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Dish",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "dishId",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Ingredient",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "ingId",
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
          "name": "Dish",
          "pk": "dishId"
        },
        {
          "name": "Ingredient",
          "pk": "ingId"
        }
      ],
      "relationships": [
        {
          "entity1": "Dish",
          "entity2": "Ingredient",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Dish' (1..1) va 'Ingredient' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Dish' va 'Ingredient' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Malika Zufarova",
    "clientRole": "Mobil Aloqa Company Billing Mutaxassisi",
    "clientAvatar": "telecom",
    "title": "Abonent va SIM-karta Tizimi",
    "story": "**Mijoz Portfolio:** Malika Zufarova (Mobil Aloqa Company Billing Mutaxassisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Subscriber** entitiysi (atributlari: noyob identifikatori `subId` {PK}, `name`)\n• **SIMCard** entitiysi (atributlari: noyob identifikatori `iccid` {PK}, `msisdn`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Subscriber** va **SIMCard** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Subscriber` tomonida **1..1**, `SIMCard` tomonida esa **0..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Subscriber** (Birlamchi kalit: `subId`): `subId` {PK}, `name`\n• **SIMCard** (Birlamchi kalit: `iccid`): `iccid` {PK}, `msisdn`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Subscriber` (**1..1**) ↔ `SIMCard` (**0..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Subscriber",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "subId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "SIMCard",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "iccid",
              "isPK": true
            },
            {
              "name": "msisdn"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Subscriber",
          "pk": "subId"
        },
        {
          "name": "SIMCard",
          "pk": "iccid"
        }
      ],
      "relationships": [
        {
          "entity1": "Subscriber",
          "entity2": "SIMCard",
          "mult1": "1..1",
          "mult2": "0..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Subscriber' (1..1) va 'SIMCard' (0..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Subscriber' va 'SIMCard' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Madina Hakimova",
    "clientRole": "Tibbiy Sug'urta Company",
    "clientAvatar": "insurance",
    "title": "Mijoz va Sug'urta Polisi Tizimi",
    "story": "**Mijoz Portfolio:** Madina Hakimova (Tibbiy Sug'urta Company)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Person** entitiysi (atributlari: noyob identifikatori `personId` {PK}, `name`)\n• **Policy** entitiysi (atributlari: noyob identifikatori `policyNo` {PK}, `coverage`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Person** va **Policy** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Person` tomonida **1..1**, `Policy` tomonida esa **0..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Person** (Birlamchi kalit: `personId`): `personId` {PK}, `name`\n• **Policy** (Birlamchi kalit: `policyNo`): `policyNo` {PK}, `coverage`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Person` (**1..1**) ↔ `Policy` (**0..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Person",
          "attributes": [
            {
              "name": "personId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Policy",
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "coverage"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Person",
          "pk": "personId"
        },
        {
          "name": "Policy",
          "pk": "policyNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Person",
          "entity2": "Policy",
          "mult1": "1..1",
          "mult2": "0..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Person' (1..1) va 'Policy' (0..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Person' va 'Policy' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "G'ayrat Ergashev",
    "clientRole": "Yuk Tashish Company Dispetcheri",
    "clientAvatar": "logistics",
    "title": "Konteyner va Yuk Jo'natmasi Tizimi",
    "story": "**Mijoz Portfolio:** G'ayrat Ergashev (Yuk Tashish Company Dispetcheri)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Shipment** entitiysi (atributlari: noyob identifikatori `shipmentId` {PK}, `weight`)\n• **Container** entitiysi (atributlari: noyob identifikatori `containerNo` {PK}, `capacity`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Shipment** va **Container** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Shipment` tomonida **1..1**, `Container` tomonida esa **0..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Shipment** (Birlamchi kalit: `shipmentId`): `shipmentId` {PK}, `weight`\n• **Container** (Birlamchi kalit: `containerNo`): `containerNo` {PK}, `capacity`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Shipment` (**1..1**) ↔ `Container` (**0..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Shipment",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "shipmentId",
              "isPK": true
            },
            {
              "name": "weight"
            }
          ]
        },
        {
          "name": "Container",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "containerNo",
              "isPK": true
            },
            {
              "name": "capacity"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Shipment",
          "pk": "shipmentId"
        },
        {
          "name": "Container",
          "pk": "containerNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Shipment",
          "entity2": "Container",
          "mult1": "1..1",
          "mult2": "0..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Shipment' (1..1) va 'Container' (0..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Shipment' va 'Container' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Zokir Usmonov",
    "clientRole": "Kredit Byurosi Director",
    "clientAvatar": "banker",
    "title": "Mijoz va Garov Mulki Tizimi",
    "story": "**Mijoz Portfolio:** Zokir Usmonov (Kredit Byurosi Director)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Client** entitiysi (atributlari: noyob identifikatori `clientId` {PK}, `name`)\n• **Collateral** entitiysi (atributlari: noyob identifikatori `collateralId` {PK}, `appraisedValue`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Client** va **Collateral** o'rtasidagi munosabat: Har bir Collateral aniq bitta Client ga tegishli (1..1), biroq yangi ochilgan Client da hozircha birorta ham Collateral bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Client** (Birlamchi kalit: `clientId`): `clientId` {PK}, `name`\n• **Collateral** (Birlamchi kalit: `collateralId`): `collateralId` {PK}, `appraisedValue`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Client` (**1..1**) ↔ `Collateral` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Client",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Collateral",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "collateralId",
              "isPK": true
            },
            {
              "name": "appraisedValue"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Client",
          "pk": "clientId"
        },
        {
          "name": "Collateral",
          "pk": "collateralId"
        }
      ],
      "relationships": [
        {
          "entity1": "Client",
          "entity2": "Collateral",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Client' (1..1) va 'Collateral' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Client' va 'Collateral' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Shoira Valiyeva",
    "clientRole": "Farmatsevtika Ombori Mudiri",
    "clientAvatar": "pharmacist",
    "title": "Dori Partiyasi va Sifat Sertifikati Tizimi",
    "story": "**Mijoz Portfolio:** Shoira Valiyeva (Farmatsevtika Ombori Mudiri)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **MedicineBatch** entitiysi (atributlari: noyob identifikatori `batchNo` {PK}, `mfgDate`)\n• **QualityCert** entitiysi (atributlari: noyob identifikatori `certNo` {PK}, `labResult`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **MedicineBatch** va **QualityCert** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `MedicineBatch` tomonida **1..1**, `QualityCert` tomonida esa **1..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **MedicineBatch** (Birlamchi kalit: `batchNo`): `batchNo` {PK}, `mfgDate`\n• **QualityCert** (Birlamchi kalit: `certNo`): `certNo` {PK}, `labResult`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `MedicineBatch` (**1..1**) ↔ `QualityCert` (**1..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "MedicineBatch",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "batchNo",
              "isPK": true
            },
            {
              "name": "mfgDate"
            }
          ]
        },
        {
          "name": "QualityCert",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "certNo",
              "isPK": true
            },
            {
              "name": "labResult"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MedicineBatch",
          "pk": "batchNo"
        },
        {
          "name": "QualityCert",
          "pk": "certNo"
        }
      ],
      "relationships": [
        {
          "entity1": "MedicineBatch",
          "entity2": "QualityCert",
          "mult1": "1..1",
          "mult2": "1..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'MedicineBatch' (1..1) va 'QualityCert' (1..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'MedicineBatch' va 'QualityCert' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Avtoturargoh Kompleksi Boshqaruvchisi",
    "clientAvatar": "parking",
    "title": "Mashina va Avtoturargoh Joyi Tizimi",
    "story": "**Mijoz Portfolio:** Rustam Mirzayev (Avtoturargoh Kompleksi Boshqaruvchisi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Car** entitiysi (atributlari: noyob identifikatori `plateNo` {PK}, `model`)\n• **ParkingSpot** entitiysi (atributlari: noyob identifikatori `slotNo` {PK}, `floor`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Car** va **ParkingSpot** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Car` tomonida **1..1**, `ParkingSpot` tomonida esa **0..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Car** (Birlamchi kalit: `plateNo`): `plateNo` {PK}, `model`\n• **ParkingSpot** (Birlamchi kalit: `slotNo`): `slotNo` {PK}, `floor`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Car` (**1..1**) ↔ `ParkingSpot` (**0..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Car",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "plateNo",
              "isPK": true
            },
            {
              "name": "model"
            }
          ]
        },
        {
          "name": "ParkingSpot",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "slotNo",
              "isPK": true
            },
            {
              "name": "floor"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Car",
          "pk": "plateNo"
        },
        {
          "name": "ParkingSpot",
          "pk": "slotNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Car",
          "entity2": "ParkingSpot",
          "mult1": "1..1",
          "mult2": "0..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Car' (1..1) va 'ParkingSpot' (0..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Car' va 'ParkingSpot' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Sherzod Jo'rayev",
    "clientRole": "'Apex Aero' Parvozlar Xavfsizligi Direktori",
    "clientAvatar": "airline",
    "title": "2-Qavat Bossi: Samolyot va Parvozlar Jadvali Tizimi",
    "story": "**Mijoz Portfolio:** Sherzod Jo'rayev ('Apex Aero' Parvozlar Xavfsizligi Direktori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Aircraft** entitiysi (atributlari: noyob identifikatori `tailNumber` {PK}, `model`)\n• **Flight** entitiysi (atributlari: noyob identifikatori `flightNo` {PK}, `destAirport`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Aircraft** va **Flight** o'rtasidagi munosabat: Har bir Flight aniq bitta Aircraft ga tegishli (1..1), biroq yangi ochilgan Aircraft da hozircha birorta ham Flight bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Aircraft** (Birlamchi kalit: `tailNumber`): `tailNumber` {PK}, `model`\n• **Flight** (Birlamchi kalit: `flightNo`): `flightNo` {PK}, `destAirport`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Aircraft` (**1..1**) ↔ `Flight` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Aircraft",
          "attributes": [
            {
              "name": "tailNumber",
              "isPK": true
            },
            {
              "name": "model"
            }
          ]
        },
        {
          "name": "Flight",
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true
            },
            {
              "name": "destAirport"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Aircraft",
          "pk": "tailNumber"
        },
        {
          "name": "Flight",
          "pk": "flightNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Aircraft",
          "entity2": "Flight",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Aircraft' (1..1) va 'Flight' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Aircraft' va 'Flight' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Kamoliddin Fayzullayev",
    "clientRole": "Ijtimoiy Himoya Boshqarmasi",
    "clientAvatar": "social",
    "title": "Xodim va Farzandlari (Zaif Entitiy Child)",
    "story": "**Mijoz Portfolio:** Kamoliddin Fayzullayev (Ijtimoiy Himoya Boshqarmasi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Staff** entitiysi (atributlari: noyob identifikatori `staffNo` {PK}, `name`)\n• **Child** entitiysi (atributlari: `fName`, `age`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Staff** va **Child** o'rtasidagi munosabat: Har bir Child aniq bitta Staff ga tegishli (1..1), biroq yangi ochilgan Staff da hozircha birorta ham Child bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Staff** (Birlamchi kalit: `staffNo`): `staffNo` {PK}, `name`\n• **Child** (Birlamchi kalit: `id`): `fName`, `age`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Staff` (**1..1**) ↔ `Child` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Staff",
          "attributes": [
            {
              "name": "staffNo",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Child",
          "isWeak": true,
          "attributes": [
            {
              "name": "fName",
              "isPPK": true
            },
            {
              "name": "age"
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
          "pk": "staffNo"
        },
        {
          "name": "Child",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Staff",
          "entity2": "Child",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Staff' (1..1) va 'Child' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Staff' va 'Child' entitiylarini chizing. 'Child' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Ulug'bek Samatov",
    "clientRole": "E-tijorat Ombor Manager",
    "clientAvatar": "warehouse",
    "title": "Buyurtma va Buyurtma Qatorlari (OrderLine)",
    "story": "**Mijoz Portfolio:** Ulug'bek Samatov (E-tijorat Ombor Manager)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Order** entitiysi (atributlari: noyob identifikatori `orderId` {PK}, `orderDate`)\n• **OrderLine** entitiysi (atributlari: `lineNo`, `quantity`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Order** va **OrderLine** o'rtasidagi munosabat: Har bir OrderLine faqat va faqat bitta Order ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Order o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab OrderLine larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Order** (Birlamchi kalit: `orderId`): `orderId` {PK}, `orderDate`\n• **OrderLine** (Birlamchi kalit: `id`): `lineNo`, `quantity`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Order` (**1..1**) ↔ `OrderLine` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Order",
          "attributes": [
            {
              "name": "orderId",
              "isPK": true
            },
            {
              "name": "orderDate"
            }
          ]
        },
        {
          "name": "OrderLine",
          "isWeak": true,
          "attributes": [
            {
              "name": "lineNo",
              "isPPK": true
            },
            {
              "name": "quantity"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Order",
          "pk": "orderId"
        },
        {
          "name": "OrderLine",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Order",
          "entity2": "OrderLine",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Order' (1..1) va 'OrderLine' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Order' va 'OrderLine' entitiylarini chizing. 'OrderLine' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Bobur Hakimov",
    "clientRole": "IT Loyihalar Manager",
    "clientAvatar": "techpm",
    "title": "Loyiha va Bosqichlar (Milestone Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Bobur Hakimov (IT Loyihalar Manager)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Project** entitiysi (atributlari: noyob identifikatori `projId` {PK}, `title`)\n• **Milestone** entitiysi (atributlari: `milestoneNo`, `targetDate`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Project** va **Milestone** o'rtasidagi munosabat: Har bir Milestone faqat va faqat bitta Project ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Project o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Milestone larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Project** (Birlamchi kalit: `projId`): `projId` {PK}, `title`\n• **Milestone** (Birlamchi kalit: `id`): `milestoneNo`, `targetDate`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Project` (**1..1**) ↔ `Milestone` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Project",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "projId",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Milestone",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "milestoneNo",
              "isPPK": true
            },
            {
              "name": "targetDate"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Project",
          "pk": "projId"
        },
        {
          "name": "Milestone",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Project",
          "entity2": "Milestone",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Project' (1..1) va 'Milestone' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Project' va 'Milestone' entitiylarini chizing. 'Milestone' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Nilufar Qosimova",
    "clientRole": "Sug'urta Da'volari Boshqarmasi",
    "clientAvatar": "insurance",
    "title": "Sug'urta Polisi va Zarar Da'volari (Claim Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Nilufar Qosimova (Sug'urta Da'volari Boshqarmasi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Policy** entitiysi (atributlari: noyob identifikatori `policyNo` {PK}, `holder`)\n• **Claim** entitiysi (atributlari: `claimSeq`, `amount`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Policy** va **Claim** o'rtasidagi munosabat: Har bir Claim aniq bitta Policy ga tegishli (1..1), biroq yangi ochilgan Policy da hozircha birorta ham Claim bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Policy** (Birlamchi kalit: `policyNo`): `policyNo` {PK}, `holder`\n• **Claim** (Birlamchi kalit: `id`): `claimSeq`, `amount`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Policy` (**1..1**) ↔ `Claim` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Policy",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "holder"
            }
          ]
        },
        {
          "name": "Claim",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "claimSeq",
              "isPPK": true
            },
            {
              "name": "amount"
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
          "pk": "policyNo"
        },
        {
          "name": "Claim",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Policy",
          "entity2": "Claim",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Policy' (1..1) va 'Claim' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Policy' va 'Claim' entitiylarini chizing. 'Claim' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Ravshan Usmonov",
    "clientRole": "Mehmonxona Arxitektori",
    "clientAvatar": "architect",
    "title": "Bino va Xonalar (Zaif Entitiy) (Room Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Ravshan Usmonov (Mehmonxona Arxitektori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Building** entitiysi (atributlari: noyob identifikatori `bldgNo` {PK}, `city`)\n• **Room** entitiysi (atributlari: `roomNo`, `floor`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Building** va **Room** o'rtasidagi munosabat: Har bir Room faqat va faqat bitta Building ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Building o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Room larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Building** (Birlamchi kalit: `bldgNo`): `bldgNo` {PK}, `city`\n• **Room** (Birlamchi kalit: `id`): `roomNo`, `floor`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Building` (**1..1**) ↔ `Room` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Building",
          "attributes": [
            {
              "name": "bldgNo",
              "isPK": true
            },
            {
              "name": "city"
            }
          ]
        },
        {
          "name": "Room",
          "isWeak": true,
          "attributes": [
            {
              "name": "roomNo",
              "isPPK": true
            },
            {
              "name": "floor"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Building",
          "pk": "bldgNo"
        },
        {
          "name": "Room",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Building",
          "entity2": "Room",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Building' (1..1) va 'Room' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Building' va 'Room' entitiylarini chizing. 'Room' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Otabek Ergashev",
    "clientRole": "Shifoxona Bosh Vrachi",
    "clientAvatar": "doctor",
    "title": "Palata va Karavotlar (Bed Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Otabek Ergashev (Shifoxona Bosh Vrachi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Ward** entitiysi (atributlari: noyob identifikatori `wardNo` {PK}, `dept`)\n• **Bed** entitiysi (atributlari: `bedNo`, `type`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Ward** va **Bed** o'rtasidagi munosabat: Har bir Bed faqat va faqat bitta Ward ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Ward o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Bed larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Ward** (Birlamchi kalit: `wardNo`): `wardNo` {PK}, `dept`\n• **Bed** (Birlamchi kalit: `id`): `bedNo`, `type`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Ward` (**1..1**) ↔ `Bed` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Ward",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "wardNo",
              "isPK": true
            },
            {
              "name": "dept"
            }
          ]
        },
        {
          "name": "Bed",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "bedNo",
              "isPPK": true
            },
            {
              "name": "type"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Ward",
          "pk": "wardNo"
        },
        {
          "name": "Bed",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Ward",
          "entity2": "Bed",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Ward' (1..1) va 'Bed' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Ward' va 'Bed' entitiylarini chizing. 'Bed' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Lobar Sayfullayeva",
    "clientRole": "O'quv Nashriyoti Tahririyati",
    "clientAvatar": "publisher",
    "title": "Kitob va Boblar (Chapter Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Lobar Sayfullayeva (O'quv Nashriyoti Tahririyati)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Book** entitiysi (atributlari: noyob identifikatori `isbn` {PK}, `title`)\n• **Chapter** entitiysi (atributlari: `chapterNo`, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Book** va **Chapter** o'rtasidagi munosabat: Har bir Chapter faqat va faqat bitta Book ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Book o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Chapter larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Book** (Birlamchi kalit: `isbn`): `isbn` {PK}, `title`\n• **Chapter** (Birlamchi kalit: `id`): `chapterNo`, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Book` (**1..1**) ↔ `Chapter` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Book",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "isbn",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Chapter",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "chapterNo",
              "isPPK": true
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
          "name": "Book",
          "pk": "isbn"
        },
        {
          "name": "Chapter",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Book",
          "entity2": "Chapter",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Book' (1..1) va 'Chapter' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Book' va 'Chapter' entitiylarini chizing. 'Chapter' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Jahongir To'xtayev",
    "clientRole": "Aviakompaniya Engineer",
    "clientAvatar": "airline",
    "title": "Parvoz va Reys Segmentlari (FlightLeg Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Jahongir To'xtayev (Aviakompaniya Engineer)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Flight** entitiysi (atributlari: noyob identifikatori `flightNo` {PK}, `airline`)\n• **FlightLeg** entitiysi (atributlari: `legNo`, `depTime`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Flight** va **FlightLeg** o'rtasidagi munosabat: Har bir FlightLeg faqat va faqat bitta Flight ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Flight o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab FlightLeg larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Flight** (Birlamchi kalit: `flightNo`): `flightNo` {PK}, `airline`\n• **FlightLeg** (Birlamchi kalit: `id`): `legNo`, `depTime`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Flight` (**1..1**) ↔ `FlightLeg` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Flight",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true
            },
            {
              "name": "airline"
            }
          ]
        },
        {
          "name": "FlightLeg",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "legNo",
              "isPPK": true
            },
            {
              "name": "depTime"
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
          "pk": "flightNo"
        },
        {
          "name": "FlightLeg",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Flight",
          "entity2": "FlightLeg",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Flight' (1..1) va 'FlightLeg' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Flight' va 'FlightLeg' entitiylarini chizing. 'FlightLeg' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Doniyor Ziyoyev",
    "clientRole": "Dasturiy Mahsulot Arxitektori",
    "clientAvatar": "techpm",
    "title": "Dasturiy Paket va Modullar (Module Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Doniyor Ziyoyev (Dasturiy Mahsulot Arxitektori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **SoftwarePackage** entitiysi (atributlari: noyob identifikatori `pkgId` {PK}, `name`)\n• **Module** entitiysi (atributlari: `modCode`, `version`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **SoftwarePackage** va **Module** o'rtasidagi munosabat: Har bir Module faqat va faqat bitta SoftwarePackage ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir SoftwarePackage o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Module larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **SoftwarePackage** (Birlamchi kalit: `pkgId`): `pkgId` {PK}, `name`\n• **Module** (Birlamchi kalit: `id`): `modCode`, `version`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `SoftwarePackage` (**1..1**) ↔ `Module` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoftwarePackage",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "pkgId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Module",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "modCode",
              "isPPK": true
            },
            {
              "name": "version"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SoftwarePackage",
          "pk": "pkgId"
        },
        {
          "name": "Module",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "SoftwarePackage",
          "entity2": "Module",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'SoftwarePackage' (1..1) va 'Module' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'SoftwarePackage' va 'Module' entitiylarini chizing. 'Module' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Gulzoda Islomova",
    "clientRole": "Teatr Bosh Ma'muri",
    "clientAvatar": "arts",
    "title": "Teatr Zali va Qatorlar (SeatRow Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Gulzoda Islomova (Teatr Bosh Ma'muri)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Hall** entitiysi (atributlari: noyob identifikatori `hallId` {PK}, `hallName`)\n• **SeatRow** entitiysi (atributlari: `rowNo`, `seatCount`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Hall** va **SeatRow** o'rtasidagi munosabat: Har bir SeatRow faqat va faqat bitta Hall ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Hall o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab SeatRow larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Hall** (Birlamchi kalit: `hallId`): `hallId` {PK}, `hallName`\n• **SeatRow** (Birlamchi kalit: `id`): `rowNo`, `seatCount`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Hall` (**1..1**) ↔ `SeatRow` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hall",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "hallId",
              "isPK": true
            },
            {
              "name": "hallName"
            }
          ]
        },
        {
          "name": "SeatRow",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "rowNo",
              "isPPK": true
            },
            {
              "name": "seatCount"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hall",
          "pk": "hallId"
        },
        {
          "name": "SeatRow",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Hall",
          "entity2": "SeatRow",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Hall' (1..1) va 'SeatRow' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Hall' va 'SeatRow' entitiylarini chizing. 'SeatRow' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Bexruz Normurodov",
    "clientRole": "Chiptaxona Head",
    "clientAvatar": "retailer",
    "title": "Chipta va Chipta Kuponlari (Coupon Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Bexruz Normurodov (Chiptaxona Head)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Ticket** entitiysi (atributlari: noyob identifikatori `ticketId` {PK}, `price`)\n• **Coupon** entitiysi (atributlari: `couponNo`, `validDate`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Ticket** va **Coupon** o'rtasidagi munosabat: Har bir Coupon faqat va faqat bitta Ticket ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Ticket o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Coupon larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Ticket** (Birlamchi kalit: `ticketId`): `ticketId` {PK}, `price`\n• **Coupon** (Birlamchi kalit: `id`): `couponNo`, `validDate`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Ticket` (**1..1**) ↔ `Coupon` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Ticket",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "ticketId",
              "isPK": true
            },
            {
              "name": "price"
            }
          ]
        },
        {
          "name": "Coupon",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "couponNo",
              "isPPK": true
            },
            {
              "name": "validDate"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Ticket",
          "pk": "ticketId"
        },
        {
          "name": "Coupon",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Ticket",
          "entity2": "Coupon",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Ticket' (1..1) va 'Coupon' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Ticket' va 'Coupon' entitiylarini chizing. 'Coupon' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Maftuna Alimova",
    "clientRole": "Bank Kartalari Monitoringi",
    "clientAvatar": "banker",
    "title": "Plastik Karta va PIN-Konvert (PinEnvelope Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Maftuna Alimova (Bank Kartalari Monitoringi)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **BankCard** entitiysi (atributlari: noyob identifikatori `cardNo` {PK}, `expDate`)\n• **PinEnvelope** entitiysi (atributlari: `envSeq`, `salt`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **BankCard** va **PinEnvelope** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `BankCard` tomonida **1..1**, `PinEnvelope` tomonida esa **0..1** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **BankCard** (Birlamchi kalit: `cardNo`): `cardNo` {PK}, `expDate`\n• **PinEnvelope** (Birlamchi kalit: `id`): `envSeq`, `salt`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `BankCard` (**1..1**) ↔ `PinEnvelope` (**0..1**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankCard",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "cardNo",
              "isPK": true
            },
            {
              "name": "expDate"
            }
          ]
        },
        {
          "name": "PinEnvelope",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "envSeq",
              "isPPK": true
            },
            {
              "name": "salt"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankCard",
          "pk": "cardNo"
        },
        {
          "name": "PinEnvelope",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "BankCard",
          "entity2": "PinEnvelope",
          "mult1": "1..1",
          "mult2": "0..1"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'BankCard' (1..1) va 'PinEnvelope' (0..1) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'BankCard' va 'PinEnvelope' entitiylarini chizing. 'PinEnvelope' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Nodir Mahmudov",
    "clientRole": "Yuk Kemasi Kapitani",
    "clientAvatar": "logistics",
    "title": "Kema va Kema Xonalari (Cabin Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Nodir Mahmudov (Yuk Kemasi Kapitani)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Ship** entitiysi (atributlari: noyob identifikatori `imoNumber` {PK}, `name`)\n• **Cabin** entitiysi (atributlari: `cabinNo`, `beds`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Ship** va **Cabin** o'rtasidagi munosabat: Har bir Cabin faqat va faqat bitta Ship ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Ship o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Cabin larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Ship** (Birlamchi kalit: `imoNumber`): `imoNumber` {PK}, `name`\n• **Cabin** (Birlamchi kalit: `id`): `cabinNo`, `beds`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Ship` (**1..1**) ↔ `Cabin` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Ship",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "imoNumber",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Cabin",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "cabinNo",
              "isPPK": true
            },
            {
              "name": "beds"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Ship",
          "pk": "imoNumber"
        },
        {
          "name": "Cabin",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Ship",
          "entity2": "Cabin",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Ship' (1..1) va 'Cabin' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Ship' va 'Cabin' entitiylarini chizing. 'Cabin' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Zuhra Shodiyeva",
    "clientRole": "Kollej O'quv Rejalari Head",
    "clientAvatar": "principal",
    "title": "Fan Sillabusi va Dars Mavzulari (Topic Zaif Entitiy)",
    "story": "**Mijoz Portfolio:** Zuhra Shodiyeva (Kollej O'quv Rejalari Head)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Syllabus** entitiysi (atributlari: noyob identifikatori `sylId` {PK}, `subject`)\n• **Topic** entitiysi (atributlari: `topicNo`, `hours`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Syllabus** va **Topic** o'rtasidagi munosabat: Har bir Topic faqat va faqat bitta Syllabus ga qat'iy biriktiriladi (majburiy, 1..1). Boshqa tomondan, har bir Syllabus o'z tasarrufida kamida 1 ta va ko'pi bilan ko'plab Topic larni qamrab olishi talab etiladi (1..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Syllabus** (Birlamchi kalit: `sylId`): `sylId` {PK}, `subject`\n• **Topic** (Birlamchi kalit: `id`): `topicNo`, `hours`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Syllabus` (**1..1**) ↔ `Topic` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Syllabus",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "sylId",
              "isPK": true
            },
            {
              "name": "subject"
            }
          ]
        },
        {
          "name": "Topic",
          "isWeak": true,
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "topicNo",
              "isPPK": true
            },
            {
              "name": "hours"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Syllabus",
          "pk": "sylId"
        },
        {
          "name": "Topic",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Syllabus",
          "entity2": "Topic",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Syllabus' (1..1) va 'Topic' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Syllabus' va 'Topic' entitiylarini chizing. 'Topic' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Sardor Ahmedov",
    "clientRole": "Bank IT Direktori",
    "clientAvatar": "bankit",
    "title": "3-Qavat Bossi: Hisob Raqam va Tranzaksiyalar (Transaction)",
    "story": "**Mijoz Portfolio:** Sardor Ahmedov (Bank IT Direktori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Account** entitiysi (atributlari: noyob identifikatori `accNo` {PK}, `balance`)\n• **Transaction** entitiysi (atributlari: `txSeq`, `amount`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Account** va **Transaction** o'rtasidagi munosabat: Har bir Transaction aniq bitta Account ga tegishli (1..1), biroq yangi ochilgan Account da hozircha birorta ham Transaction bo'lmasligi yoki kelgusida ko'plab bo'lishi mumkin (ixtiyoriy, 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Account** (Birlamchi kalit: `accNo`): `accNo` {PK}, `balance`\n• **Transaction** (Birlamchi kalit: `id`): `txSeq`, `amount`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Account` (**1..1**) ↔ `Transaction` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Account",
          "attributes": [
            {
              "name": "accNo",
              "isPK": true
            },
            {
              "name": "balance"
            }
          ]
        },
        {
          "name": "Transaction",
          "isWeak": true,
          "attributes": [
            {
              "name": "txSeq",
              "isPPK": true
            },
            {
              "name": "amount"
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
          "pk": "accNo"
        },
        {
          "name": "Transaction",
          "isWeak": true
        }
      ],
      "relationships": [
        {
          "entity1": "Account",
          "entity2": "Transaction",
          "mult1": "1..1",
          "mult2": "0..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Account' (1..1) va 'Transaction' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Account' va 'Transaction' entitiylarini chizing. 'Transaction' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "IT Korxona Direktori",
    "clientAvatar": "itdirector",
    "title": "Xodim va Loyiha: Ish Soati Atributi (WorksOn)",
    "story": "**Mijoz Portfolio:** Mansur Jo'rayev (IT Korxona Direktori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Employee** entitiysi (atributlari: noyob identifikatori `empNo` {PK}, `name`)\n• **Project** entitiysi (atributlari: noyob identifikatori `projNo` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Employee** va **Project** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Employee` tomonida **1..***, `Project` tomonida esa **1..5** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Employee** (Birlamchi kalit: `empNo`): `empNo` {PK}, `name`\n• **Project** (Birlamchi kalit: `projNo`): `projNo` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Employee` (**1..***) ↔ `Project` (**1..5**)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "attributes": [
            {
              "name": "empNo",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Project",
          "attributes": [
            {
              "name": "projNo",
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
          "name": "Employee",
          "pk": "empNo"
        },
        {
          "name": "Project",
          "pk": "projNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Project",
          "name": "WorksOn",
          "mult1": "1..*",
          "mult2": "1..5",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Employee' (1..*) va 'Project' (1..5) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Employee' va 'Project' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..*' hamda '1..5' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Rustam Fayziyev",
    "clientRole": "Avtomobil Plant Ta'minot Manager",
    "clientAvatar": "automotive",
    "title": "Yetkazib Beruvchi va Detallar (Supplies - narx Atributi)",
    "story": "**Mijoz Portfolio:** Rustam Fayziyev (Avtomobil Plant Ta'minot Manager)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Supplier** entitiysi (atributlari: noyob identifikatori `supplierId` {PK}, `companyName`)\n• **Part** entitiysi (atributlari: noyob identifikatori `partNo` {PK}, `description`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Supplier** va **Part** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Supplier` tomonida **1..***, `Part` tomonida esa **0..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Supplier** (Birlamchi kalit: `supplierId`): `supplierId` {PK}, `companyName`\n• **Part** (Birlamchi kalit: `partNo`): `partNo` {PK}, `description`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Supplier` (**1..***) ↔ `Part` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Supplier",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "supplierId",
              "isPK": true
            },
            {
              "name": "companyName"
            }
          ]
        },
        {
          "name": "Part",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "partNo",
              "isPK": true
            },
            {
              "name": "description"
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
          "pk": "supplierId"
        },
        {
          "name": "Part",
          "pk": "partNo"
        }
      ],
      "relationships": [
        {
          "entity1": "Supplier",
          "entity2": "Part",
          "name": "Supplies",
          "mult1": "1..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Supplier' (1..*) va 'Part' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Supplier' va 'Part' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Shohrux Mirzohidov",
    "clientRole": "Library Tarmog'i Ma'muri",
    "clientAvatar": "librarian",
    "title": "A'zo va Kitob Ijarasi (Borrow - borrowDate Atributi)",
    "story": "**Mijoz Portfolio:** Shohrux Mirzohidov (Library Tarmog'i Ma'muri)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Member** entitiysi (atributlari: noyob identifikatori `memberId` {PK}, `fullName`)\n• **Book** entitiysi (atributlari: noyob identifikatori `bookId` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Member** va **Book** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Member bir nechta Book ga bog'lanishi mumkin, va aksincha, bitta Book bir nechta Member bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Member** (Birlamchi kalit: `memberId`): `memberId` {PK}, `fullName`\n• **Book** (Birlamchi kalit: `bookId`): `bookId` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Member` (**0..***) ↔ `Book` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Member",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "fullName"
            }
          ]
        },
        {
          "name": "Book",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "bookId",
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
          "name": "Member",
          "pk": "memberId"
        },
        {
          "name": "Book",
          "pk": "bookId"
        }
      ],
      "relationships": [
        {
          "entity1": "Member",
          "entity2": "Book",
          "name": "Borrows",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Member' (0..*) va 'Book' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Member' va 'Book' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Dilorom Yusupova",
    "clientRole": "Kasalxona Konsultatsiya Department",
    "clientAvatar": "doctor",
    "title": "Shifokor va Bemor Qabuli (Consults - konsultatsiya Tashxisi)",
    "story": "**Mijoz Portfolio:** Dilorom Yusupova (Kasalxona Konsultatsiya Department)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Doctor** entitiysi (atributlari: noyob identifikatori `docId` {PK}, `specialty`)\n• **Patient** entitiysi (atributlari: noyob identifikatori `patientId` {PK}, `fullName`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Doctor** va **Patient** o'rtasidagi munosabat: Bu ko'pga-ko'p (*:*) assotsiatsiyadir: bitta Doctor bir nechta Patient ga bog'lanishi mumkin, va aksincha, bitta Patient bir nechta Doctor bilan hamkorlik qilishi mumkin (0..* ↔ 0..*).\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Doctor** (Birlamchi kalit: `docId`): `docId` {PK}, `specialty`\n• **Patient** (Birlamchi kalit: `patientId`): `patientId` {PK}, `fullName`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Doctor` (**0..***) ↔ `Patient` (**0..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "x": 120,
          "y": 150,
          "attributes": [
            {
              "name": "docId",
              "isPK": true
            },
            {
              "name": "specialty"
            }
          ]
        },
        {
          "name": "Patient",
          "x": 480,
          "y": 150,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            },
            {
              "name": "fullName"
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
          "pk": "docId"
        },
        {
          "name": "Patient",
          "pk": "patientId"
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Patient",
          "name": "Consults",
          "mult1": "0..*",
          "mult2": "0..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Doctor' (0..*) va 'Patient' (0..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Doctor' va 'Patient' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang."
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Shuhrat Saidov",
    "clientRole": "Universitet Registratori",
    "clientAvatar": "registrar",
    "title": "4-Qavat Bossi: Talaba va Fan Ro'yxatdan O'tishi (grade Atributi)",
    "story": "**Mijoz Portfolio:** Shuhrat Saidov (Universitet Registratori)\n**Korporativ Muammo:** Bizning tashkilotimizda axborot tizimini kengaytirish va ma'lumotlar yaxlitligini ta'minlash bo'yicha Seminar 1 standartlariga muvofiq yangi arxitektura ishlab chiqilmoqda. Quyidagi ob'yektlar va mantiqiy biznes munosabatlarini tizimga kiritishimiz zarur:\n\n📋 **Tizimda Saqlanadigan Entitiylar va Atributlar:**\n• **Student** entitiysi (atributlari: noyob identifikatori `studentId` {PK}, `name`)\n• **Course** entitiysi (atributlari: noyob identifikatori `courseCode` {PK}, `title`)\n\n🏢 **Operatsion Biznes Qoidalari va Aloqadorlik:**\n• **Student** va **Course** o'rtasidagi munosabat: Biznes qoidasiga ko'ra, munosabat chegaralari: `Student` tomonida **0..***, `Course` tomonida esa **1..*** qatnashishi shart.\n\nAgar talab etilgan multiplicity yoki kalitlar noto'g'ri belgilansa, amaliyotda ma'lumotlar yo'qolishi yoki Connection Trap (Fan trap / Chasm trap) yuzaga keladi. Shuning uchun barcha qoidalarni sinchkovlik bilan loyihalang.",
    "taskUz": "Yuqoridagi biznes tavsifini diqqat bilan o'rganing va UML EER diagrammasini shakllantiring:\n1. **Entitiylarni shakllantirish:** Barcha keltirilgan entitiylarni polotnoda joylashtiring va ularning Birlamchi Kaliti {PK} yoki Qisman Kaliti {PPK} ni to'g'ri ko'rsating.\n2. **Multiplicity (Kardinallik)ni belgilash:** Aloqa chizig'ini torting va har bir tomondagi minimal va maksimal qatnashish chegaralarini to'g'ri o'rnating.\n3. **Tekshiruv:** Biznes mantiqqa zid bo'lgan multiplicity tanlansa, tizim xatolik haqida ogohlantiradi.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Student** (Birlamchi kalit: `studentId`): `studentId` {PK}, `name`\n• **Course** (Birlamchi kalit: `courseCode`): `courseCode` {PK}, `title`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Student` (**0..***) ↔ `Course` (**1..***)",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Course",
          "attributes": [
            {
              "name": "courseCode",
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
          "name": "Student",
          "pk": "studentId"
        },
        {
          "name": "Course",
          "pk": "courseCode"
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "Course",
          "name": "Registers",
          "mult1": "0..*",
          "mult2": "1..*",
          "associationClass": true
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Student' (0..*) va 'Course' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Student' va 'Course' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '1..*' multiplisitiyalari bilan bog'lang."
  }
];
