var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.EER_CLIENTS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Alisher Zokirov",
    "clientRole": "'Orient Bank' Boshqaruv Raisi",
    "clientAvatar": "banker",
    "title": "Bank Filiallari va Xodimlar Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Branch** ob'yektlari hisobga olinadi. Har bir **Branch** o'zining branchNo (birlamchi kalit {PK}), city kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: staffNo (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Branch** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Branch** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Branch' va 'Staff' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Branch** ob'yektlari hisobga olinadi. Har bir **Branch** o'zining branchNo (birlamchi kalit {PK}), city kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Staff** sub'yektlari kiritilgan. Har bir **Staff** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: staffNo (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Branch** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Staff** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Staff** qat'iy ravishda faqat bitta **Branch** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 2,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Dilnoza Rahimova",
    "clientRole": "University Fakultet Dekani",
    "clientAvatar": "dean",
    "title": "Fakultet va Talabalar Ro'yxati",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Faculty** ob'yektlari hisobga olinadi. Har bir **Faculty** o'zining facultyCode (birlamchi kalit {PK}), facultyName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Student** sub'yektlari kiritilgan. Har bir **Student** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: studentId (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Faculty** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Student** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Student** qat'iy ravishda faqat bitta **Faculty** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Faculty' va 'Student' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Faculty** ob'yektlari hisobga olinadi. Har bir **Faculty** o'zining facultyCode (birlamchi kalit {PK}), facultyName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Student** sub'yektlari kiritilgan. Har bir **Student** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: studentId (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Faculty** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Student** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Student** qat'iy ravishda faqat bitta **Faculty** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 3,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Botir Qodirov",
    "clientRole": "'Mega Market' Logistika Direktori",
    "clientAvatar": "logistics",
    "title": "Toifalar va Mahsulotlar Katalogi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Category** ob'yektlari hisobga olinadi. Har bir **Category** o'zining catId (birlamchi kalit {PK}), catName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Product** sub'yektlari kiritilgan. Har bir **Product** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: prodCode (birlamchi kalit {PK}), price. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Category** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Product** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Product** qat'iy ravishda faqat bitta **Category** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Category' va 'Product' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Category** ob'yektlari hisobga olinadi. Har bir **Category** o'zining catId (birlamchi kalit {PK}), catName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Product** sub'yektlari kiritilgan. Har bir **Product** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: prodCode (birlamchi kalit {PK}), price. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Category** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Product** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Product** qat'iy ravishda faqat bitta **Category** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 4,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Nodir Salimov",
    "clientRole": "'Ziyo Nashr' Bosh Muharriri",
    "clientAvatar": "publisher",
    "title": "Nashriyot va Kitoblar Noshirligi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Publisher** ob'yektlari hisobga olinadi. Har bir **Publisher** o'zining pubId (birlamchi kalit {PK}), pubName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Book** sub'yektlari kiritilgan. Har bir **Book** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: isbn (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Publisher** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Book** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Book** qat'iy ravishda faqat bitta **Publisher** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Publisher' va 'Book' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Publisher** ob'yektlari hisobga olinadi. Har bir **Publisher** o'zining pubId (birlamchi kalit {PK}), pubName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Book** sub'yektlari kiritilgan. Har bir **Book** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: isbn (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Publisher** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Book** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Book** qat'iy ravishda faqat bitta **Publisher** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 5,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Malika Yusupova",
    "clientRole": "'Shifo Med' Bosh Shifokori",
    "clientAvatar": "doctor",
    "title": "Kasalxona Bo'limi va Palatalar",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **WardDept** ob'yektlari hisobga olinadi. Har bir **WardDept** o'zining deptCode (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **WardRoom** sub'yektlari kiritilgan. Har bir **WardRoom** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: roomNo (birlamchi kalit {PK}), capacity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **WardDept** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **WardRoom** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **WardRoom** qat'iy ravishda faqat bitta **WardDept** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'WardDept' va 'WardRoom' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **WardDept** ob'yektlari hisobga olinadi. Har bir **WardDept** o'zining deptCode (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **WardRoom** sub'yektlari kiritilgan. Har bir **WardRoom** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: roomNo (birlamchi kalit {PK}), capacity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **WardDept** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **WardRoom** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **WardRoom** qat'iy ravishda faqat bitta **WardDept** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 6,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Javohir Toirov",
    "clientRole": "Davlat Ro'yxatga Olish Xizmati",
    "clientAvatar": "officer",
    "title": "Fuqaro va Pasport Munosabati",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Citizen** ob'yektlari hisobga olinadi. Har bir **Citizen** o'zining pinfl (birlamchi kalit {PK}), fullName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Passport** sub'yektlari kiritilgan. Har bir **Passport** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: passNo (birlamchi kalit {PK}), issueDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Citizen** va **Passport** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Citizen' va 'Passport' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Citizen** ob'yektlari hisobga olinadi. Har bir **Citizen** o'zining pinfl (birlamchi kalit {PK}), fullName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Passport** sub'yektlari kiritilgan. Har bir **Passport** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: passNo (birlamchi kalit {PK}), issueDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Citizen** va **Passport** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 7,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Sanjar Mirzayev",
    "clientRole": "Futbol Ligasi Komissari",
    "clientAvatar": "sports",
    "title": "Futbol Klubi va Stadion Munosabati",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **FootballClub** ob'yektlari hisobga olinadi. Har bir **FootballClub** o'zining clubId (birlamchi kalit {PK}), clubName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Stadium** sub'yektlari kiritilgan. Har bir **Stadium** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: stadiumId (birlamchi kalit {PK}), seats. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **FootballClub** va **Stadium** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'FootballClub' va 'Stadium' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **FootballClub** ob'yektlari hisobga olinadi. Har bir **FootballClub** o'zining clubId (birlamchi kalit {PK}), clubName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Stadium** sub'yektlari kiritilgan. Har bir **Stadium** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: stadiumId (birlamchi kalit {PK}), seats. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **FootballClub** va **Stadium** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 8,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Gulnora Ergasheva",
    "clientRole": "Avtopark Mudiri",
    "clientAvatar": "fleet",
    "title": "Haydovchi va Xizmat Mashinasi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Driver** ob'yektlari hisobga olinadi. Har bir **Driver** o'zining licenseNo (birlamchi kalit {PK}), fullName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Vehicle** sub'yektlari kiritilgan. Har bir **Vehicle** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: vin (birlamchi kalit {PK}), model. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Driver** va **Vehicle** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Driver' va 'Vehicle' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Driver** ob'yektlari hisobga olinadi. Har bir **Driver** o'zining licenseNo (birlamchi kalit {PK}), fullName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Vehicle** sub'yektlari kiritilgan. Har bir **Vehicle** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: vin (birlamchi kalit {PK}), model. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Driver** va **Vehicle** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 9,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Davron Akbarov",
    "clientRole": "Dasturiy Ta'minot Company PM",
    "clientAvatar": "techpm",
    "title": "Loyiha va Versiya Boshqaruvi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Project** ob'yektlari hisobga olinadi. Har bir **Project** o'zining projId (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Repository** sub'yektlari kiritilgan. Har bir **Repository** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: repoId (birlamchi kalit {PK}), repoUrl. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Project** va **Repository** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Project' va 'Repository' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Project** ob'yektlari hisobga olinadi. Har bir **Project** o'zining projId (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Repository** sub'yektlari kiritilgan. Har bir **Repository** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: repoId (birlamchi kalit {PK}), repoUrl. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Project** va **Repository** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 10,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Aziza Karimova",
    "clientRole": "Mehmonxona Tarmog'i Manager",
    "clientAvatar": "hotel",
    "title": "Mehmonxona va Bosh Bino",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Hotel** ob'yektlari hisobga olinadi. Har bir **Hotel** o'zining hotelId (birlamchi kalit {PK}), city kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **MainBuilding** sub'yektlari kiritilgan. Har bir **MainBuilding** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: bldgId (birlamchi kalit {PK}), floors. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Hotel** va **MainBuilding** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Hotel' va 'MainBuilding' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Hotel** ob'yektlari hisobga olinadi. Har bir **Hotel** o'zining hotelId (birlamchi kalit {PK}), city kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **MainBuilding** sub'yektlari kiritilgan. Har bir **MainBuilding** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: bldgId (birlamchi kalit {PK}), floors. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Hotel** va **MainBuilding** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 11,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Otabek G'aniyev",
    "clientRole": "Temir Yo'l Vokzali Dispetcheri",
    "clientAvatar": "railway",
    "title": "Poyezd va Vagonlar Zanjiri",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Train** ob'yektlari hisobga olinadi. Har bir **Train** o'zining trainNo (birlamchi kalit {PK}), route kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Carriage** sub'yektlari kiritilgan. Har bir **Carriage** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: carriageId (birlamchi kalit {PK}), seatsCount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Train** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Carriage** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Carriage** qat'iy ravishda faqat bitta **Train** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Train' va 'Carriage' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Train** ob'yektlari hisobga olinadi. Har bir **Train** o'zining trainNo (birlamchi kalit {PK}), route kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Carriage** sub'yektlari kiritilgan. Har bir **Carriage** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: carriageId (birlamchi kalit {PK}), seatsCount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Train** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Carriage** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Carriage** qat'iy ravishda faqat bitta **Train** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 12,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Zuhra Murodova",
    "clientRole": "Maktab Direktori",
    "clientAvatar": "principal",
    "title": "Sinf va O'quvchilar Bog'liqligi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **SchoolClass** ob'yektlari hisobga olinadi. Har bir **SchoolClass** o'zining classId (birlamchi kalit {PK}), gradeLevel kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Pupil** sub'yektlari kiritilgan. Har bir **Pupil** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: pupilId (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **SchoolClass** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Pupil** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Pupil** qat'iy ravishda faqat bitta **SchoolClass** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'SchoolClass' va 'Pupil' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **SchoolClass** ob'yektlari hisobga olinadi. Har bir **SchoolClass** o'zining classId (birlamchi kalit {PK}), gradeLevel kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Pupil** sub'yektlari kiritilgan. Har bir **Pupil** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: pupilId (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **SchoolClass** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Pupil** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Pupil** qat'iy ravishda faqat bitta **SchoolClass** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 13,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Umid Vohidov",
    "clientRole": "IT Xizmatlar Servis Manager",
    "clientAvatar": "itsm",
    "title": "Mijoz va Qo'llab-quvvatlash Chiptasi (Ticket)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Client** ob'yektlari hisobga olinadi. Har bir **Client** o'zining clientId (birlamchi kalit {PK}), orgName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Ticket** sub'yektlari kiritilgan. Har bir **Ticket** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: ticketNo (birlamchi kalit {PK}), issueText. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Client** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Ticket** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Ticket** qat'iy ravishda faqat bitta **Client** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Client' va 'Ticket' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Client** ob'yektlari hisobga olinadi. Har bir **Client** o'zining clientId (birlamchi kalit {PK}), orgName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Ticket** sub'yektlari kiritilgan. Har bir **Ticket** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: ticketNo (birlamchi kalit {PK}), issueText. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Client** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Ticket** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Ticket** qat'iy ravishda faqat bitta **Client** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 14,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Shahnoza Aliyeva",
    "clientRole": "Library Tarmog'i Head",
    "clientAvatar": "librarian",
    "title": "Kutubxona Bo'limi va Tokchalar",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **LibrarySection** ob'yektlari hisobga olinadi. Har bir **LibrarySection** o'zining secId (birlamchi kalit {PK}), topic kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Bookshelf** sub'yektlari kiritilgan. Har bir **Bookshelf** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: shelfNo (birlamchi kalit {PK}), capacity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **LibrarySection** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Bookshelf** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Bookshelf** qat'iy ravishda faqat bitta **LibrarySection** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'LibrarySection' va 'Bookshelf' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **LibrarySection** ob'yektlari hisobga olinadi. Har bir **LibrarySection** o'zining secId (birlamchi kalit {PK}), topic kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Bookshelf** sub'yektlari kiritilgan. Har bir **Bookshelf** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: shelfNo (birlamchi kalit {PK}), capacity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **LibrarySection** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Bookshelf** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Bookshelf** qat'iy ravishda faqat bitta **LibrarySection** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 15,
    "sector": 1,
    "difficulty": "1-Qavat • Boshlang'ich",
    "clientName": "Bahriddin Po'latov",
    "clientRole": "'Apex Corporation' Bosh Ijrochi Direktori",
    "clientAvatar": "ceo",
    "title": "1-Qavat Bossi: Korxona Departamenti va Bosh Menejer",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Department** ob'yektlari hisobga olinadi. Har bir **Department** o'zining deptNo (birlamchi kalit {PK}), dName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Employee** sub'yektlari kiritilgan. Har bir **Employee** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: empNo (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Department** va **Employee** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Department' va 'Employee' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Department** ob'yektlari hisobga olinadi. Har bir **Department** o'zining deptNo (birlamchi kalit {PK}), dName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Employee** sub'yektlari kiritilgan. Har bir **Employee** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: empNo (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Department** va **Employee** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 16,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Eldor Shokirov",
    "clientRole": "Avtosalon Savdo Manager",
    "clientAvatar": "dealer",
    "title": "Mijoz va Avtomobil Xaridi (Ixtiyoriy 0..*)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Customer** ob'yektlari hisobga olinadi. Har bir **Customer** o'zining custId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Car** sub'yektlari kiritilgan. Har bir **Car** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: vin (birlamchi kalit {PK}), model. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Car** aniq bitta **Customer** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Customer** da dastlabki bosqichda birorta ham **Car** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Customer' va 'Car' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Customer** ob'yektlari hisobga olinadi. Har bir **Customer** o'zining custId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Car** sub'yektlari kiritilgan. Har bir **Car** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: vin (birlamchi kalit {PK}), model. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Car** aniq bitta **Customer** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Customer** da dastlabki bosqichda birorta ham **Car** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
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
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Nargiza Rustamova",
    "clientRole": "Universitet O'quv Department Head",
    "clientAvatar": "academic",
    "title": "Professor va Ilmiy Maqolalar Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Professor** ob'yektlari hisobga olinadi. Har bir **Professor** o'zining profId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Article** sub'yektlari kiritilgan. Har bir **Article** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: articleId (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Article** aniq bitta **Professor** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Professor** da dastlabki bosqichda birorta ham **Article** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Professor' va 'Article' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Professor** ob'yektlari hisobga olinadi. Har bir **Professor** o'zining profId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Article** sub'yektlari kiritilgan. Har bir **Article** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: articleId (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Article** aniq bitta **Professor** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Professor** da dastlabki bosqichda birorta ham **Article** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
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
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Bobur Ismoilov",
    "clientRole": "HR Boshqarmasi Director",
    "clientAvatar": "hrmanager",
    "title": "Xodim va Xizmat Noutbuki Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining empNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Laptop** sub'yektlari kiritilgan. Har bir **Laptop** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: serialNo (birlamchi kalit {PK}), model. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Employee** va **Laptop** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Employee' va 'Laptop' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining empNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Laptop** sub'yektlari kiritilgan. Har bir **Laptop** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: serialNo (birlamchi kalit {PK}), model. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Employee** va **Laptop** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Nargiza Yo'ldosheva",
    "clientRole": "IT Akademiya Kurs Manager",
    "clientAvatar": "academic",
    "title": "O'quvchi va Sertifikat Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Student** ob'yektlari hisobga olinadi. Har bir **Student** o'zining studentId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Certificate** sub'yektlari kiritilgan. Har bir **Certificate** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: certId (birlamchi kalit {PK}), issueDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Student** va **Certificate** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Student' va 'Certificate' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Student** ob'yektlari hisobga olinadi. Har bir **Student** o'zining studentId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Certificate** sub'yektlari kiritilgan. Har bir **Certificate** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: certId (birlamchi kalit {PK}), issueDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Student** va **Certificate** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Farhod Karimov",
    "clientRole": "Library Tizimi Engineer",
    "clientAvatar": "librarian",
    "title": "Kitobxon va Jarimalar Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Member** ob'yektlari hisobga olinadi. Har bir **Member** o'zining memberId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Fine** sub'yektlari kiritilgan. Har bir **Fine** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: fineId (birlamchi kalit {PK}), amount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Fine** aniq bitta **Member** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Member** da dastlabki bosqichda birorta ham **Fine** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Member' va 'Fine' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Member** ob'yektlari hisobga olinadi. Har bir **Member** o'zining memberId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Fine** sub'yektlari kiritilgan. Har bir **Fine** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: fineId (birlamchi kalit {PK}), amount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Fine** aniq bitta **Member** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Member** da dastlabki bosqichda birorta ham **Fine** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
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
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Sevara Normatova",
    "clientRole": "Clinic Ro'yxatga Olish Department",
    "clientAvatar": "doctor",
    "title": "Bemor va Retseptlar Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Patient** ob'yektlari hisobga olinadi. Har bir **Patient** o'zining patientId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Prescription** sub'yektlari kiritilgan. Har bir **Prescription** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: rxNo (birlamchi kalit {PK}), date. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Prescription** aniq bitta **Patient** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Patient** da dastlabki bosqichda birorta ham **Prescription** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Patient' va 'Prescription' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Patient** ob'yektlari hisobga olinadi. Har bir **Patient** o'zining patientId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Prescription** sub'yektlari kiritilgan. Har bir **Prescription** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: rxNo (birlamchi kalit {PK}), date. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Prescription** aniq bitta **Patient** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Patient** da dastlabki bosqichda birorta ham **Prescription** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
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
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Akmal Rahmonov",
    "clientRole": "Uy-joy Agency Broker",
    "clientAvatar": "broker",
    "title": "Mulk Egasi va Kvartiralar Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Owner** ob'yektlari hisobga olinadi. Har bir **Owner** o'zining ownerNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Property** sub'yektlari kiritilgan. Har bir **Property** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: propNo (birlamchi kalit {PK}), address. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Owner** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Property** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Property** qat'iy ravishda faqat bitta **Owner** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Owner' va 'Property' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Owner** ob'yektlari hisobga olinadi. Har bir **Owner** o'zining ownerNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Property** sub'yektlari kiritilgan. Har bir **Property** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: propNo (birlamchi kalit {PK}), address. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Owner** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Property** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Property** qat'iy ravishda faqat bitta **Owner** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Jamshid Tursunov",
    "clientRole": "Restoranlar Tarmog'i Bosh Oshpazi",
    "clientAvatar": "chef",
    "title": "Taom va Retsept Masalliqlari Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Dish** ob'yektlari hisobga olinadi. Har bir **Dish** o'zining dishId (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Ingredient** sub'yektlari kiritilgan. Har bir **Ingredient** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: ingId (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Dish** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Ingredient** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Ingredient** qat'iy ravishda faqat bitta **Dish** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Dish' va 'Ingredient' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Dish** ob'yektlari hisobga olinadi. Har bir **Dish** o'zining dishId (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Ingredient** sub'yektlari kiritilgan. Har bir **Ingredient** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: ingId (birlamchi kalit {PK}), name. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Dish** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Ingredient** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Ingredient** qat'iy ravishda faqat bitta **Dish** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
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
    "id": 24,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Malika Zufarova",
    "clientRole": "Mobil Aloqa Company Billing Mutaxassisi",
    "clientAvatar": "telecom",
    "title": "Abonent va SIM-karta Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Subscriber** ob'yektlari hisobga olinadi. Har bir **Subscriber** o'zining subId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **SIMCard** sub'yektlari kiritilgan. Har bir **SIMCard** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: iccid (birlamchi kalit {PK}), msisdn. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Subscriber** va **SIMCard** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Subscriber' va 'SIMCard' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Subscriber** ob'yektlari hisobga olinadi. Har bir **Subscriber** o'zining subId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **SIMCard** sub'yektlari kiritilgan. Har bir **SIMCard** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: iccid (birlamchi kalit {PK}), msisdn. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Subscriber** va **SIMCard** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 25,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Madina Hakimova",
    "clientRole": "Tibbiy Sug'urta Company",
    "clientAvatar": "insurance",
    "title": "Mijoz va Sug'urta Polisi Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Person** ob'yektlari hisobga olinadi. Har bir **Person** o'zining personId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Policy** sub'yektlari kiritilgan. Har bir **Policy** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: policyNo (birlamchi kalit {PK}), coverage. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Person** va **Policy** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Person' va 'Policy' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Person** ob'yektlari hisobga olinadi. Har bir **Person** o'zining personId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Policy** sub'yektlari kiritilgan. Har bir **Policy** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: policyNo (birlamchi kalit {PK}), coverage. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Person** va **Policy** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 26,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "G'ayrat Ergashev",
    "clientRole": "Yuk Tashish Company Dispetcheri",
    "clientAvatar": "logistics",
    "title": "Konteyner va Yuk Jo'natmasi Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Shipment** ob'yektlari hisobga olinadi. Har bir **Shipment** o'zining shipmentId (birlamchi kalit {PK}), weight kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Container** sub'yektlari kiritilgan. Har bir **Container** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: containerNo (birlamchi kalit {PK}), capacity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Shipment** va **Container** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Shipment' va 'Container' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Shipment** ob'yektlari hisobga olinadi. Har bir **Shipment** o'zining shipmentId (birlamchi kalit {PK}), weight kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Container** sub'yektlari kiritilgan. Har bir **Container** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: containerNo (birlamchi kalit {PK}), capacity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Shipment** va **Container** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 27,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Zokir Usmonov",
    "clientRole": "Kredit Byurosi Director",
    "clientAvatar": "banker",
    "title": "Mijoz va Garov Mulki Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Client** ob'yektlari hisobga olinadi. Har bir **Client** o'zining clientId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Collateral** sub'yektlari kiritilgan. Har bir **Collateral** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: collateralId (birlamchi kalit {PK}), appraisedValue. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Collateral** aniq bitta **Client** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Client** da dastlabki bosqichda birorta ham **Collateral** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Client' va 'Collateral' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Client** ob'yektlari hisobga olinadi. Har bir **Client** o'zining clientId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Collateral** sub'yektlari kiritilgan. Har bir **Collateral** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: collateralId (birlamchi kalit {PK}), appraisedValue. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Collateral** aniq bitta **Client** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Client** da dastlabki bosqichda birorta ham **Collateral** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
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
    "id": 28,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Shoira Valiyeva",
    "clientRole": "Farmatsevtika Ombori Mudiri",
    "clientAvatar": "pharmacist",
    "title": "Dori Partiyasi va Sifat Sertifikati Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **MedicineBatch** ob'yektlari hisobga olinadi. Har bir **MedicineBatch** o'zining batchNo (birlamchi kalit {PK}), mfgDate kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **QualityCert** sub'yektlari kiritilgan. Har bir **QualityCert** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: certNo (birlamchi kalit {PK}), labResult. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **MedicineBatch** va **QualityCert** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'MedicineBatch' va 'QualityCert' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '1..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **MedicineBatch** ob'yektlari hisobga olinadi. Har bir **MedicineBatch** o'zining batchNo (birlamchi kalit {PK}), mfgDate kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **QualityCert** sub'yektlari kiritilgan. Har bir **QualityCert** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: certNo (birlamchi kalit {PK}), labResult. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **MedicineBatch** va **QualityCert** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 29,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Avtoturargoh Kompleksi Boshqaruvchisi",
    "clientAvatar": "parking",
    "title": "Mashina va Avtoturargoh Joyi Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Car** ob'yektlari hisobga olinadi. Har bir **Car** o'zining plateNo (birlamchi kalit {PK}), model kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **ParkingSpot** sub'yektlari kiritilgan. Har bir **ParkingSpot** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: slotNo (birlamchi kalit {PK}), floor. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Car** va **ParkingSpot** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Car' va 'ParkingSpot' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Car** ob'yektlari hisobga olinadi. Har bir **Car** o'zining plateNo (birlamchi kalit {PK}), model kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **ParkingSpot** sub'yektlari kiritilgan. Har bir **ParkingSpot** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: slotNo (birlamchi kalit {PK}), floor. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Car** va **ParkingSpot** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 30,
    "sector": 2,
    "difficulty": "2-Qavat • Boshlang'ich",
    "clientName": "Sherzod Jo'rayev",
    "clientRole": "'Apex Aero' Parvozlar Xavfsizligi Direktori",
    "clientAvatar": "airline",
    "title": "2-Qavat Bossi: Samolyot va Parvozlar Jadvali Tizimi",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Aircraft** ob'yektlari hisobga olinadi. Har bir **Aircraft** o'zining tailNumber (birlamchi kalit {PK}), model kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Flight** sub'yektlari kiritilgan. Har bir **Flight** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: flightNo (birlamchi kalit {PK}), destAirport. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Flight** aniq bitta **Aircraft** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Aircraft** da dastlabki bosqichda birorta ham **Flight** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Aircraft' va 'Flight' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Aircraft** ob'yektlari hisobga olinadi. Har bir **Aircraft** o'zining tailNumber (birlamchi kalit {PK}), model kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Flight** sub'yektlari kiritilgan. Har bir **Flight** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: flightNo (birlamchi kalit {PK}), destAirport. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Flight** aniq bitta **Aircraft** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Aircraft** da dastlabki bosqichda birorta ham **Flight** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
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
    "id": 31,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Kamoliddin Fayzullayev",
    "clientRole": "Ijtimoiy Himoya Boshqarmasi",
    "clientAvatar": "social",
    "title": "Xodim va Farzandlari (Zaif Entitiy Child)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Staff** ob'yektlari hisobga olinadi. Har bir **Staff** o'zining staffNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Child** sub'yektlari kiritilgan. Har bir **Child** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: fName, age. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Child** aniq bitta **Staff** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Staff** da dastlabki bosqichda birorta ham **Child** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Staff' va 'Child' entitiylarini chizing. 'Child' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Staff** ob'yektlari hisobga olinadi. Har bir **Staff** o'zining staffNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Child** sub'yektlari kiritilgan. Har bir **Child** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: fName, age. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Child** aniq bitta **Staff** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Staff** da dastlabki bosqichda birorta ham **Child** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Ulug'bek Samatov",
    "clientRole": "E-tijorat Ombor Manager",
    "clientAvatar": "warehouse",
    "title": "Buyurtma va Buyurtma Qatorlari (OrderLine)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Order** ob'yektlari hisobga olinadi. Har bir **Order** o'zining orderId (birlamchi kalit {PK}), orderDate kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **OrderLine** sub'yektlari kiritilgan. Har bir **OrderLine** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: lineNo, quantity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Order** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **OrderLine** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **OrderLine** qat'iy ravishda faqat bitta **Order** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Order' va 'OrderLine' entitiylarini chizing. 'OrderLine' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Order** ob'yektlari hisobga olinadi. Har bir **Order** o'zining orderId (birlamchi kalit {PK}), orderDate kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **OrderLine** sub'yektlari kiritilgan. Har bir **OrderLine** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: lineNo, quantity. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Order** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **OrderLine** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **OrderLine** qat'iy ravishda faqat bitta **Order** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Bobur Hakimov",
    "clientRole": "IT Loyihalar Manager",
    "clientAvatar": "techpm",
    "title": "Loyiha va Bosqichlar (Milestone Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Project** ob'yektlari hisobga olinadi. Har bir **Project** o'zining projId (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Milestone** sub'yektlari kiritilgan. Har bir **Milestone** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: milestoneNo, targetDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Project** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Milestone** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Milestone** qat'iy ravishda faqat bitta **Project** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Project' va 'Milestone' entitiylarini chizing. 'Milestone' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Project** ob'yektlari hisobga olinadi. Har bir **Project** o'zining projId (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Milestone** sub'yektlari kiritilgan. Har bir **Milestone** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: milestoneNo, targetDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Project** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Milestone** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Milestone** qat'iy ravishda faqat bitta **Project** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Nilufar Qosimova",
    "clientRole": "Sug'urta Da'volari Boshqarmasi",
    "clientAvatar": "insurance",
    "title": "Sug'urta Polisi va Zarar Da'volari (Claim Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Policy** ob'yektlari hisobga olinadi. Har bir **Policy** o'zining policyNo (birlamchi kalit {PK}), holder kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Claim** sub'yektlari kiritilgan. Har bir **Claim** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: claimSeq, amount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Claim** aniq bitta **Policy** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Policy** da dastlabki bosqichda birorta ham **Claim** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Policy' va 'Claim' entitiylarini chizing. 'Claim' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Policy** ob'yektlari hisobga olinadi. Har bir **Policy** o'zining policyNo (birlamchi kalit {PK}), holder kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Claim** sub'yektlari kiritilgan. Har bir **Claim** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: claimSeq, amount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Claim** aniq bitta **Policy** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Policy** da dastlabki bosqichda birorta ham **Claim** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Ravshan Usmonov",
    "clientRole": "Mehmonxona Arxitektori",
    "clientAvatar": "architect",
    "title": "Bino va Xonalar (Zaif Entitiy) (Room Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Building** ob'yektlari hisobga olinadi. Har bir **Building** o'zining bldgNo (birlamchi kalit {PK}), city kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Room** sub'yektlari kiritilgan. Har bir **Room** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: roomNo, floor. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Building** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Room** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Room** qat'iy ravishda faqat bitta **Building** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Building' va 'Room' entitiylarini chizing. 'Room' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Building** ob'yektlari hisobga olinadi. Har bir **Building** o'zining bldgNo (birlamchi kalit {PK}), city kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Room** sub'yektlari kiritilgan. Har bir **Room** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: roomNo, floor. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Building** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Room** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Room** qat'iy ravishda faqat bitta **Building** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Otabek Ergashev",
    "clientRole": "Shifoxona Bosh Vrachi",
    "clientAvatar": "doctor",
    "title": "Palata va Karavotlar (Bed Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Ward** ob'yektlari hisobga olinadi. Har bir **Ward** o'zining wardNo (birlamchi kalit {PK}), dept kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Bed** sub'yektlari kiritilgan. Har bir **Bed** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: bedNo, type. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Ward** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Bed** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Bed** qat'iy ravishda faqat bitta **Ward** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Ward' va 'Bed' entitiylarini chizing. 'Bed' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Ward** ob'yektlari hisobga olinadi. Har bir **Ward** o'zining wardNo (birlamchi kalit {PK}), dept kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Bed** sub'yektlari kiritilgan. Har bir **Bed** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: bedNo, type. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Ward** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Bed** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Bed** qat'iy ravishda faqat bitta **Ward** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Lobar Sayfullayeva",
    "clientRole": "O'quv Nashriyoti Tahririyati",
    "clientAvatar": "publisher",
    "title": "Kitob va Boblar (Chapter Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Book** ob'yektlari hisobga olinadi. Har bir **Book** o'zining isbn (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Chapter** sub'yektlari kiritilgan. Har bir **Chapter** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: chapterNo, title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Book** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Chapter** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Chapter** qat'iy ravishda faqat bitta **Book** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Book' va 'Chapter' entitiylarini chizing. 'Chapter' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Book** ob'yektlari hisobga olinadi. Har bir **Book** o'zining isbn (birlamchi kalit {PK}), title kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Chapter** sub'yektlari kiritilgan. Har bir **Chapter** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: chapterNo, title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Book** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Chapter** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Chapter** qat'iy ravishda faqat bitta **Book** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Jahongir To'xtayev",
    "clientRole": "Aviakompaniya Engineer",
    "clientAvatar": "airline",
    "title": "Parvoz va Reys Segmentlari (FlightLeg Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Flight** ob'yektlari hisobga olinadi. Har bir **Flight** o'zining flightNo (birlamchi kalit {PK}), airline kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **FlightLeg** sub'yektlari kiritilgan. Har bir **FlightLeg** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: legNo, depTime. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Flight** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **FlightLeg** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **FlightLeg** qat'iy ravishda faqat bitta **Flight** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Flight' va 'FlightLeg' entitiylarini chizing. 'FlightLeg' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Flight** ob'yektlari hisobga olinadi. Har bir **Flight** o'zining flightNo (birlamchi kalit {PK}), airline kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **FlightLeg** sub'yektlari kiritilgan. Har bir **FlightLeg** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: legNo, depTime. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Flight** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **FlightLeg** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **FlightLeg** qat'iy ravishda faqat bitta **Flight** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Doniyor Ziyoyev",
    "clientRole": "Dasturiy Mahsulot Arxitektori",
    "clientAvatar": "techpm",
    "title": "Dasturiy Paket va Modullar (Module Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **SoftwarePackage** ob'yektlari hisobga olinadi. Har bir **SoftwarePackage** o'zining pkgId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Module** sub'yektlari kiritilgan. Har bir **Module** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: modCode, version. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **SoftwarePackage** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Module** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Module** qat'iy ravishda faqat bitta **SoftwarePackage** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'SoftwarePackage' va 'Module' entitiylarini chizing. 'Module' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **SoftwarePackage** ob'yektlari hisobga olinadi. Har bir **SoftwarePackage** o'zining pkgId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Module** sub'yektlari kiritilgan. Har bir **Module** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: modCode, version. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **SoftwarePackage** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Module** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Module** qat'iy ravishda faqat bitta **SoftwarePackage** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Gulzoda Islomova",
    "clientRole": "Teatr Bosh Ma'muri",
    "clientAvatar": "arts",
    "title": "Teatr Zali va Qatorlar (SeatRow Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Hall** ob'yektlari hisobga olinadi. Har bir **Hall** o'zining hallId (birlamchi kalit {PK}), hallName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **SeatRow** sub'yektlari kiritilgan. Har bir **SeatRow** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: rowNo, seatCount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Hall** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **SeatRow** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **SeatRow** qat'iy ravishda faqat bitta **Hall** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Hall' va 'SeatRow' entitiylarini chizing. 'SeatRow' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Hall** ob'yektlari hisobga olinadi. Har bir **Hall** o'zining hallId (birlamchi kalit {PK}), hallName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **SeatRow** sub'yektlari kiritilgan. Har bir **SeatRow** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: rowNo, seatCount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Hall** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **SeatRow** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **SeatRow** qat'iy ravishda faqat bitta **Hall** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Bexruz Normurodov",
    "clientRole": "Chiptaxona Head",
    "clientAvatar": "retailer",
    "title": "Chipta va Chipta Kuponlari (Coupon Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Ticket** ob'yektlari hisobga olinadi. Har bir **Ticket** o'zining ticketId (birlamchi kalit {PK}), price kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Coupon** sub'yektlari kiritilgan. Har bir **Coupon** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: couponNo, validDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Ticket** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Coupon** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Coupon** qat'iy ravishda faqat bitta **Ticket** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Ticket' va 'Coupon' entitiylarini chizing. 'Coupon' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Ticket** ob'yektlari hisobga olinadi. Har bir **Ticket** o'zining ticketId (birlamchi kalit {PK}), price kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Coupon** sub'yektlari kiritilgan. Har bir **Coupon** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: couponNo, validDate. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Ticket** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Coupon** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Coupon** qat'iy ravishda faqat bitta **Ticket** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Maftuna Alimova",
    "clientRole": "Bank Kartalari Monitoringi",
    "clientAvatar": "banker",
    "title": "Plastik Karta va PIN-Konvert (PinEnvelope Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **BankCard** ob'yektlari hisobga olinadi. Har bir **BankCard** o'zining cardNo (birlamchi kalit {PK}), expDate kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **PinEnvelope** sub'yektlari kiritilgan. Har bir **PinEnvelope** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: envSeq, salt. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **BankCard** va **PinEnvelope** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'BankCard' va 'PinEnvelope' entitiylarini chizing. 'PinEnvelope' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..1' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **BankCard** ob'yektlari hisobga olinadi. Har bir **BankCard** o'zining cardNo (birlamchi kalit {PK}), expDate kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **PinEnvelope** sub'yektlari kiritilgan. Har bir **PinEnvelope** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: envSeq, salt. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **BankCard** va **PinEnvelope** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Nodir Mahmudov",
    "clientRole": "Yuk Kemasi Kapitani",
    "clientAvatar": "logistics",
    "title": "Kema va Kema Xonalari (Cabin Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Ship** ob'yektlari hisobga olinadi. Har bir **Ship** o'zining imoNumber (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Cabin** sub'yektlari kiritilgan. Har bir **Cabin** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: cabinNo, beds. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Ship** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Cabin** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Cabin** qat'iy ravishda faqat bitta **Ship** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Ship' va 'Cabin' entitiylarini chizing. 'Cabin' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Ship** ob'yektlari hisobga olinadi. Har bir **Ship** o'zining imoNumber (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Cabin** sub'yektlari kiritilgan. Har bir **Cabin** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: cabinNo, beds. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Ship** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Cabin** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Cabin** qat'iy ravishda faqat bitta **Ship** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Zuhra Shodiyeva",
    "clientRole": "Kollej O'quv Rejalari Head",
    "clientAvatar": "principal",
    "title": "Fan Sillabusi va Dars Mavzulari (Topic Zaif Entitiy)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Syllabus** ob'yektlari hisobga olinadi. Har bir **Syllabus** o'zining sylId (birlamchi kalit {PK}), subject kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Topic** sub'yektlari kiritilgan. Har bir **Topic** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: topicNo, hours. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nKompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Syllabus** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Topic** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Topic** qat'iy ravishda faqat bitta **Syllabus** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Syllabus' va 'Topic' entitiylarini chizing. 'Topic' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Syllabus** ob'yektlari hisobga olinadi. Har bir **Syllabus** o'zining sylId (birlamchi kalit {PK}), subject kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Topic** sub'yektlari kiritilgan. Har bir **Topic** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: topicNo, hours. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Kompaniya nizomi va xavfsizlik reglamentiga muvofiq, har bir faoliyat ko'rsatayotgan **Syllabus** da operatsiyalar uzluksizligini ta'minlash uchun kamida bitta va ko'pi bilan cheklanmagan miqdorda **Topic** faoliyat yuritishi majburiydir. Boshqa tomondan, ichki tartib-qoidalarga ko'ra, har bir **Topic** qat'iy ravishda faqat bitta **Syllabus** shtatiga biriktiriladi va bir vaqtning o'zida bir nechta joyda xizmat qila olmaydi."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • O'rta",
    "clientName": "Sardor Ahmedov",
    "clientRole": "Bank IT Direktori",
    "clientAvatar": "bankit",
    "title": "3-Qavat Bossi: Hisob Raqam va Tranzaksiyalar (Transaction)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Account** ob'yektlari hisobga olinadi. Har bir **Account** o'zining accNo (birlamchi kalit {PK}), balance kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Transaction** sub'yektlari kiritilgan. Har bir **Transaction** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: txSeq, amount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkiliy tartibga binoan, har bir **Transaction** aniq bitta **Account** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Account** da dastlabki bosqichda birorta ham **Transaction** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Account' va 'Transaction' entitiylarini chizing. 'Transaction' entitiysini 'Zaif Entitiy' deb belgilang, qisman kalitini ko'rsating va ularni '1..1' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Account** ob'yektlari hisobga olinadi. Har bir **Account** o'zining accNo (birlamchi kalit {PK}), balance kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Transaction** sub'yektlari kiritilgan. Har bir **Transaction** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: txSeq, amount. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkiliy tartibga binoan, har bir **Transaction** aniq bitta **Account** ga tayinlanadi. Biroq yangi ta'sis etilgan yoki qayta tashkil qilinayotgan **Account** da dastlabki bosqichda birorta ham **Transaction** ro'yxatga olinmagan bo'lishi yoki vaqt o'tishi bilan ko'plab xodimlar biriktirilishi mumkin."
      ],
      "tasks": [
        "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.",
        "b) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.",
        "c) Qaysi entitiy zaif entitiy (Weak Entity) hisoblanadi va uning mavjudlik bog'liqligi (identifying relationship ◆) qanday ifodalanadi?",
        "d) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?"
      ]
    }
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "IT Korxona Direktori",
    "clientAvatar": "itdirector",
    "title": "Xodim va Loyiha: Ish Soati Atributi (WorksOn)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining empNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Project** sub'yektlari kiritilgan. Har bir **Project** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: projNo (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Employee** va **Project** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Employee' va 'Project' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..*' hamda '1..5' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Employee** ob'yektlari hisobga olinadi. Har bir **Employee** o'zining empNo (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Project** sub'yektlari kiritilgan. Har bir **Project** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: projNo (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Employee** va **Project** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 47,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Rustam Fayziyev",
    "clientRole": "Avtomobil Plant Ta'minot Manager",
    "clientAvatar": "automotive",
    "title": "Yetkazib Beruvchi va Detallar (Supplies - narx Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Supplier** ob'yektlari hisobga olinadi. Har bir **Supplier** o'zining supplierId (birlamchi kalit {PK}), companyName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Part** sub'yektlari kiritilgan. Har bir **Part** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: partNo (birlamchi kalit {PK}), description. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Supplier** va **Part** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Supplier' va 'Part' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '1..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Supplier** ob'yektlari hisobga olinadi. Har bir **Supplier** o'zining supplierId (birlamchi kalit {PK}), companyName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Part** sub'yektlari kiritilgan. Har bir **Part** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: partNo (birlamchi kalit {PK}), description. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Supplier** va **Part** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
    "id": 48,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Shohrux Mirzohidov",
    "clientRole": "Library Tarmog'i Ma'muri",
    "clientAvatar": "librarian",
    "title": "A'zo va Kitob Ijarasi (Borrow - borrowDate Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Member** ob'yektlari hisobga olinadi. Har bir **Member** o'zining memberId (birlamchi kalit {PK}), fullName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Book** sub'yektlari kiritilgan. Har bir **Book** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: bookId (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Member** vaqt davomida bir nechta **Book** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Book** bir nechta **Member** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Member' va 'Book' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Member** ob'yektlari hisobga olinadi. Har bir **Member** o'zining memberId (birlamchi kalit {PK}), fullName kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Book** sub'yektlari kiritilgan. Har bir **Book** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: bookId (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Ushbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Member** vaqt davomida bir nechta **Book** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Book** bir nechta **Member** bilan aloqador bo'lishi mumkin."
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
    "id": 49,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Dilorom Yusupova",
    "clientRole": "Kasalxona Konsultatsiya Department",
    "clientAvatar": "doctor",
    "title": "Shifokor va Bemor Qabuli (Consults - konsultatsiya Tashxisi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Doctor** ob'yektlari hisobga olinadi. Har bir **Doctor** o'zining docId (birlamchi kalit {PK}), specialty kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Patient** sub'yektlari kiritilgan. Har bir **Patient** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: patientId (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nUshbu ikki ob'yekt o'rtasidagi hamkorlik erkin va ko'p tomonlama tashkil etilgan: bitta **Doctor** vaqt davomida bir nechta **Patient** bilan munosabatda bo'lishi mumkin, va aksincha, bitta **Patient** bir nechta **Doctor** bilan aloqador bo'lishi mumkin.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Doctor' va 'Patient' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '0..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Doctor** ob'yektlari hisobga olinadi. Har bir **Doctor** o'zining docId (birlamchi kalit {PK}), specialty kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Patient** sub'yektlari kiritilgan. Har bir **Patient** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: patientId (birlamchi kalit {PK}), fullName. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
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
    "id": 50,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "clientName": "Shuhrat Saidov",
    "clientRole": "Universitet Registratori",
    "clientAvatar": "registrar",
    "title": "4-Qavat Bossi: Talaba va Fan Ro'yxatdan O'tishi (grade Atributi)",
    "story": "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Student** ob'yektlari hisobga olinadi. Har bir **Student** o'zining studentId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.\n\nBoshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Course** sub'yektlari kiritilgan. Har bir **Course** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: courseCode (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.\n\nTashkilotning operatsion qoidalariga muvofiq, **Student** va **Course** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir.",
    "taskUz": "a) Yuqoridagi matnli keys tavsifi asosida UML EER diagrammasini tuzing: entitiylarni chizing, ularning birlamchi kalitlari {PK} va ko'rsatilgan barcha atributlarini polotnoga joylashtiring.\nb) Matndagi operatsion qoidalarni sinchkovlik bilan o'qib, har bir munosabat uchun minimal va maksimal qatnashish chegaralarini (Multiplicity) to'g'ri tanlang.\nc) Qaysi bog'lanish tomoni majburiy (mandatory) va qaysi biri ixtiyoriy (optional) ekanligini matndan iqtibos keltirib asoslang.\nd) Berilgan keys matnidagi qaysi operatsion qoidani EER diagrammasida bevosita ifodalab bo'lmaydi va nima uchun?",
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
    "task": "'Student' va 'Course' entitiylarini chizing, birlamchi kalitlarini {PK} belgilang va mijoz talabiga mos '0..*' hamda '1..*' multiplisitiyalari bilan bog'lang.",
    "caseStudy": {
      "paragraphs": [
        "Tashkilot o'z faoliyatini butun mamlakat bo'ylab kengaytirmoqda va axborot tizimining ma'lumotlar bazasini konseptual darajada loyihalash talab etiladi. Tizimda asosiy boshqaruv birligi sifatida **Student** ob'yektlari hisobga olinadi. Har bir **Student** o'zining studentId (birlamchi kalit {PK}), name kabi muhim ma'lumotlari bilan tavsiflanadi. Ushbu ob'yekt kompaniyaning mustaqil operatsion bo'g'ini hisoblanadi.",
        "Boshqaruv va xizmat ko'rsatish jarayonlarini ta'minlash maqsadida tizimga **Course** sub'yektlari kiritilgan. Har bir **Course** to'g'risida quyidagi ma'lumotlar to'liq qayd etiladi: courseCode (birlamchi kalit {PK}), title. Mazkur sub'yektlar tashkilotning kundalik amaliy vazifalarini bajarish, hisobotlarni yuritish va mijozlarga xizmat ko'rsatishga mas'uldirlar.",
        "Tashkilotning operatsion qoidalariga muvofiq, **Student** va **Course** o'rtasidagi o'zaro ishtirok chegaralari biznes logikasi asosida qat'iy cheklangan. Ushbu chegaralarni aniqlash tizim arxitektorining muhim tahliliy vazifasidir."
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
