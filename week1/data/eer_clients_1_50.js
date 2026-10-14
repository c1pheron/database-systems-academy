// ============================================================================
// DATABASE SYSTEMS ACADEMY — 1-HAFTA: KONSEPTUAL EER MODEL VA DIAGRAMMALAR
// O'zgaruvchi: EER_CLIENTS_1_50 (50 ta Amaliy Vizual EER Keyslari - Jumboq Rejimi)
// ============================================================================

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
    "story": "Assalomu alaykum, Me'mor! Bizning bankda filiallar (Branch) va ularda ishlovchi xodimlar (Staff) mavjud. Har bir filialda kamida 1 ta, ko'pi bilan ko'plab xodim ishlaydi. Har bir xodim esa qat'iy ravishda faqat 1 ta filialga biriktiriladi.",
    "taskUz": "'Branch' va 'Staff' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Universitetimizda har bir fakultet (Faculty) o'z talabalariga (Student) ega. Har bir talaba 1 ta fakultetda o'qiydi, fakultet esa ko'plab talabalarga ega.",
    "taskUz": "'Faculty' va 'Student' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Do'konimizda har bir toifa (Category) o'z ichiga kamida 1 ta yoki undan ko'p mahsulotlarni (Product) oladi. Har bir mahsulot bitta toifaga kiradi.",
    "taskUz": "'Category' va 'Product' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Nashriyotimiz (Publisher) kitoblar (Book) chop etadi. Har bir kitob aynan 1 ta nashriyotga qarashli, nashriyot esa ko'plab kitob chop etadi.",
    "taskUz": "'Publisher' va 'Book' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Shifoxonamizda bo'limlar (WardDept) va palatalar (WardRoom) mavjud. Har bir bo'limda kamida 1 ta yoki ko'p palata bor, palata faqat 1 bo'limga tegishli.",
    "taskUz": "'WardDept' va 'WardRoom' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Bizning tizimda har bir fuqaro (Citizen) qat'iy ravishda faqat bitta pasportga (Passport) ega bo'lishi shart va har bir pasport faqat 1 ta fuqaroga tegishli.",
    "taskUz": "'Citizen' va 'Passport' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Ligamizda har bir klub (FootballClub) bitta uy stadioniga (Stadium) ega va har bir stadion faqat 1 ta klubga tegishli.",
    "taskUz": "'FootballClub' va 'Stadium' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Korxonamizda har bir maxsus haydovchiga (Driver) aniq 1 ta xizmat avtomobili (Vehicle) biriktirilgan va har bir mashina 1 ta haydovchiga ega.",
    "taskUz": "'Driver' va 'Vehicle' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Kompaniyamizda har bir loyiha (Project) bitta markaziy Git repozitoriysiga (Repository) ega, har bir repozitoriy faqat 1 ta loyihaga xizmat qiladi.",
    "taskUz": "'Project' va 'Repository' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Mehmonxona tarmog'imizda har bir filial mehmonxona (Hotel) o'zining asosiy qabulxona binosiga (MainBuilding) ega va har bir bosh bino 1 ta mehmonxonaga qaraydi.",
    "taskUz": "'Hotel' va 'MainBuilding' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Temir yo'lda har bir poyezd (Train) bir nechta vagonlardan (Carriage) iborat. Har bir vagon esa ayni paytda faqat 1 ta poyezd tarkibiga ulangan bo'lishi shart.",
    "taskUz": "'Train' va 'Carriage' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Maktabimizda har bir sinf (SchoolClass) bir nechta o'quvchilarga (Pupil) ega. Har bir o'quvchi faqat 1 ta sinfda o'qiydi.",
    "taskUz": "'SchoolClass' va 'Pupil' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "IT xizmatimizda har bir so'rov chiptasi (Ticket) aniq 1 ta mijozga (Client) tegishli. Mijoz esa bir nechta chipta ochgan bo'lishi mumkin.",
    "taskUz": "'Client' va 'Ticket' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Kutubxonamizda har bir zal bo'limi (LibrarySection) bir nechta kitob tokchalariga (Bookshelf) ega, har bir tokcha aniq 1 ta bo'limda joylashgan.",
    "taskUz": "'LibrarySection' va 'Bookshelf' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Assalomu alaykum, Bosh Me'mor! Korporatsiyamizda bo'limlar (Department) va xodimlar (Employee) mavjud. Har bir bo'limda qat'iy ravishda aniq 1 ta Bosh Menejer rahbarlik qiladi va har bir rahbar faqat 1 ta bo'limni boshqaradi. Ushbu 'Manages' 1:1 aloqasini to'liq chizib bering!",
    "taskUz": "'Department' va 'Employee' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Avtosalonimizda mijozlar (Customer) va avtomobillar (Car) bor. Har bir sotilgan avtomobil aniq 1 ta mijozga tegishli bo'ladi. Lekin ro'yxatdan o'tgan mijoz hali mashina sotib olmagan bo'lishi ham mumkin, ya'ni 0 tadan ko'pgacha mashina xarid qiladi.",
    "taskUz": "'Customer' va 'Car' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Universitetimizda professorlar (Professor) va ilmiy maqolalar (Article) mavjud. Har bir maqola 1 ta muallifga tegishli. Lekin yangi ishga kirgan professor hali maqola chop etmagan bo'lishi mumkin.",
    "taskUz": "'Professor' va 'Article' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Korxonamizda har bir xodim (Employee) va xizmat noutbuki (Laptop) bor. Har bir noutbuk faqat 1 ta xodimga biriktiriladi. Biroq har bir xodimga ham noutbuk berilmaydi (ayrimlari statsionar kompyuterda ishlaydi), ya'ni xodim ko'pi bilan 1 ta yoki 0 ta noutbukka ega bo'lishi mumkin.",
    "taskUz": "'Employee' va 'Laptop' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Akademiyamizda har bir sertifikat (Certificate) bitirgan 1 ta o'quvchiga (Student) beriladi. Lekin har bir o'quvchi ham kursni yakunlab sertifikat ololmasligi mumkin.",
    "taskUz": "'Student' va 'Certificate' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Kutubxonamizda a'zo kitobxon (Member) va jarima cheklari (Fine) mavjud. Har bir jarima aniq 1 ta a'zoga yoziladi. Lekin intizomli a'zoda umuman jarima bo'lmasligi mumkin.",
    "taskUz": "'Member' va 'Fine' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Klinikamizda har bir dori retsepti (Prescription) 1 ta bemorga (Patient) tegishli. Sog'lom profilaktikaga kelgan bemorga esa dori yozilmasligi mumkin.",
    "taskUz": "'Patient' va 'Prescription' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Agentligimizda ro'yxatdan o'tgan har bir mulk egasi (Owner) kamida 1 ta yoki bir nechta kvartiraga (Property) ega bo'lishi shart. Har bir kvartira esa 1 ta egaga qarashli.",
    "taskUz": "'Owner' va 'Property' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Menyumizdagi har bir taom (Dish) kamida 1 ta yoki undan ko'p tarkibiy masalliqqa (Ingredient) ega bo'lishi shart. Har bir masalliq esa menyudagi 1 ta asosiy retseptga tegishli.",
    "taskUz": "'Dish' va 'Ingredient' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Har bir SIM-karta (SIMCard) 1 ta abonentga (Subscriber) biriktirilgan. Yangi shartnoma tuzgan abonentga esa hali SIM berilmagan bo'lishi mumkin.",
    "taskUz": "'Subscriber' va 'SIMCard' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Kompaniyamizda fuqaro (Person) va tibbiy sug'urta polisi (Policy) mavjud. Har bir polis aniq 1 kishiga beriladi. Lekin fuqaro hali polis sotib olmagan bo'lishi mumkin.",
    "taskUz": "'Person' va 'Policy' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Logistika parkimizda konteyner (Container) va jo'natma (Shipment) mavjud. Har bir yuk 1 ta konteynerga yuklanadi. Zaxiradagi bo'sh konteyner esa yuklanmagan bo'lishi mumkin.",
    "taskUz": "'Shipment' va 'Container' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Bankimizda har bir garov mulki (Collateral) 1 ta mijozga (Client) tegishli. Lekin oddiy mikroqarz olgan mijoz garov qo'ymasligi mumkin.",
    "taskUz": "'Client' va 'Collateral' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Omborimizda har bir dori partiyasi (MedicineBatch) majburiy ravishda aniq 1 ta sifat sertifikatiga (QualityCert) ega va har bir sertifikat 1 ta partiyaga beriladi.",
    "taskUz": "'MedicineBatch' va 'QualityCert' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Biznes markazimizda har bir band turargoh joyi (ParkingSpot) 1 ta ro'yxatdagi avtomobilga (Car) tegishli. Lekin mashina ko'chada yurgan paytda turargohda joy egallamasligi mumkin.",
    "taskUz": "'Car' va 'ParkingSpot' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Aviakompaniyamizda samolyotlar (Aircraft) va rejalashtirilgan parvozlar (Flight) mavjud. Har bir parvoz qat'iy ravishda aniq 1 ta samolyotga biriktirilishi shart. Lekin ba'zi yangi yoki ta'mirdagi samolyotlar hali birorta ham parvozga qo'yilmagan bo'lishi mumkin. Ushbu parvoz jadvalini to'liq chizing!",
    "taskUz": "'Aircraft' va 'Flight' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Xodimlarimiz (Staff) va ularning qaramog'idagi farzandlari (Child) mavjud. Farzand alohida yashay olmaydi — u ota xodimiga bog'liq Weak Entity (Weak Entity) hisoblanadi. Farzandning o'ziga xos qisman kaliti {PPK} faqat uning ismi (fName) hisoblanadi. Har bir farzand aniq 1 ta xodimga tegishli, xodim esa 0 tadan ko'pgacha farzandga ega bo'lishi mumkin.",
    "taskUz": "'Staff' va 'Child' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Har bir buyurtma (Order) bir nechta qatorlardan (OrderLine) iborat. OrderLine mustaqil mavjud bo'la olmaydi (Weak Entity). Uning qisman kaliti {PPK} qator raqami (lineNo). Har bir buyurtma kamida 1 ta qatorga ega, qator esa aniq 1 ta buyurtmaga tegishli.",
    "taskUz": "'Order' va 'OrderLine' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Kompaniyamizda har bir loyiha (Project) bir nechta oraliq bosqichlarga (Milestone) ega. Milestone loyihasiz mustaqil mavjud bo'lmaydi (Weak Entity). Uning qisman kaliti {PPK} bosqich tartib raqami (milestoneNo). Har bir loyiha 1 tadan ko'p bosqichga ega, bosqich esa aniq 1 ta loyihaga qarashli.",
    "taskUz": "'Project' va 'Milestone' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Sug'urta kompaniyamizda har bir polis (Policy) bo'yicha zarar da'volari (Claim) tushadi. Da'vo polissiz mavjud bo'la olmaydi (Weak Entity). Qisman kalit {PPK} da'vo ketma-ket raqami (claimSeq). Polis 0 tadan ko'pgacha da'voga ega, da'vo esa 1 ta polisga tegishli.",
    "taskUz": "'Policy' va 'Claim' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Mehmonxona binosi (Building) va undagi xonalar (Room) bor. Xona faqat shu bino ichida mavjud (Weak Entity). Bino ichidagi qisman kalit {PPK} xona raqamidir (roomNo). Bino 1 tadan ko'p xonaga ega, xona esa bitta binoga tegishli.",
    "taskUz": "'Building' va 'Room' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Shifoxonamizda palatalar (Ward) va karavotlar (Bed) mavjud. Karavot faqat shu palata ichida raqamlanadi (Weak Entity, {PPK} bedNo). Palata 1 tadan ko'p karavotga ega, karavot esa bitta palataga tegishli.",
    "taskUz": "'Ward' va 'Bed' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Nashriyotimizda kitob (Book) va uning boblari (Chapter) bor. Bob kitobsiz yashay olmaydi (Weak Entity). Uning qisman kaliti {PPK} bob tartib raqami (chapterNo). Kitob kamida bitta yoki bir nechta bobga ega bo'ladi, har bir bob esa aniq bitta kitobga tegishli.",
    "taskUz": "'Book' va 'Chapter' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Aviakompaniyada asosiy parvoz (Flight) bir nechta oraliq uchish qismlaridan (FlightLeg) iborat bo'lishi mumkin (Weak Entity, {PPK} legNo). Parvoz bir nechta oraliq uchish qismlariga ega bo'lishi mumkin, har bir qism aniq bitta parvozga qarashli.",
    "taskUz": "'Flight' va 'FlightLeg' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Dasturimiz (SoftwarePackage) bir nechta modullardan (Module) iborat. Modul dastursiz mavjud emas (Weak Entity, {PPK} modCode). Paket bir nechta modullardan iborat bo'ladi, har bir modul esa aniq bitta paketga tegishli.",
    "taskUz": "'SoftwarePackage' va 'Module' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Teatrimizda tomosha zali (Hall) va undagi o'rindiqlar qatori (SeatRow) mavjud. Qator zalsiz mavjud bo'lmaydi (Weak Entity, {PPK} rowNo). Zal bir nechta qatorlarga ega bo'ladi, har bir qator aniq bitta tomosha zaliga qarashli.",
    "taskUz": "'Hall' va 'SeatRow' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Xalqaro poyezd chiptasi (Ticket) bir nechta kupon varaqlaridan (Coupon) iborat (Weak Entity, {PPK} couponNo). Chipta bir nechta kuponlardan iborat bo'ladi, har bir kupon esa aniq bitta chiptaga tegishli.",
    "taskUz": "'Ticket' va 'Coupon' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Bank plastik kartasi (BankCard) o'zining himoyalangan PIN-konvertiga (PinEnvelope) ega (Weak Entity, {PPK} envSeq). Karta ko'pi bilan bitta PIN-konvertga ega bo'lishi mumkin, konvert esa faqat bitta kartaga tegishli.",
    "taskUz": "'BankCard' va 'PinEnvelope' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Yuk kemasida (Ship) kayutalar (Cabin) mavjud (Weak Entity, {PPK} cabinNo). Kema bir nechta kayutalarga ega bo'ladi, har bir kayuta esa faqat bitta kemaga tegishli.",
    "taskUz": "'Ship' va 'Cabin' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Fan sillabusida (Syllabus) dars mavzulari (Topic) bor (Weak Entity, {PPK} topicNo). Sillabus bir nechta mavzulardan iborat bo'ladi, har bir mavzu esa faqat bitta sillabusga qarashli.",
    "taskUz": "'Syllabus' va 'Topic' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Assalomu alaykum! Bankimizda hisob raqamlari (Account) va har bir harakat (Transaction) mavjud. Tranzaksiya o'zicha mustaqil mavjud bo'lmaydi (Weak Entity). Uning qisman kaliti {PPK} tranzaksiya ketma-ketlik raqamidir (txSeq). Har bir hisob raqam 0 tadan ko'pgacha tranzaksiyaga ega bo'lishi mumkin, tranzaksiya esa qat'iy ravishda 1 ta hisobga tegishli. Ushbu zaif munosabatni chizing!",
    "taskUz": "'Account' va 'Transaction' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Korxonamizda xodimlar (Employee) va loyihalar (Project) o'rtasida ko'pdan-ko'pga munosabat bor: har bir xodim 1 tadan 5 tagacha loyihada ishlaydi (1..5), har bir loyihada kamida 1 ta yoki ko'p xodim ishlaydi. Eng muhimi: har bir xodimning loyihada ishlagan soati (hours) aynan shu 'WorksOn' aloqasining o'ziga xos atributi (Association Class) hisoblanadi!",
    "taskUz": "'Employee' va 'Project' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Zavodimizda ta'minotchi (Supplier) va detallar (Part) o'rtasida 'Supplies' ko'pdan-ko'pga aloqasi mavjud. Bir ta'minotchi ko'plab detal yetkazadi, har bir detal ko'plab ta'minotchidan olinishi mumkin. Yetkazib berish narxi (unitPrice) aynan shu aloqaga tegishli (Association Class)!",
    "taskUz": "'Supplier' va 'Part' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Kutubxonamizda a'zo kitobxon (Member) va kitob nusxasi (Book) o'rtasida 'Borrows' aloqasi bor. A'zo ko'p kitob olishi, kitob esa ko'p marta berilishi mumkin. Olingan sana (borrowDate) va qaytarish muddati (dueDate) aloqaning Association Class atributlaridir.",
    "taskUz": "'Member' va 'Book' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Shifokor (Doctor) va bemor (Patient) o'rtasida 'Consults' aloqasi mavjud. Shifokor ko'p bemorni ko'radi, bemor ko'p shifokorga uchrashishi mumkin. Konsultatsiya natijasidagi tashxis (diagnosis) va to'lov (fee) aynan aloqa atributidir (Association Class).",
    "taskUz": "'Doctor' va 'Patient' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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
    "story": "Universitetimizda talaba (Student) va o'quv fani (Course) o'rtasida 'Registers' aloqasi bor. Talaba bir nechta fanga yoziladi, fanda ko'plab talaba o'qiydi. Aloqaning o'zida yakuniy ball (grade) va semestr (semester) atributlari saqlanadi (Association Class). Ushbu modelni to'liq taqdim eting!",
    "taskUz": "'Student' va 'Course' entitiylari o'rtasidagi biznes qoidalarini chuqur o'rganing. Har bir tomonning minimal va maksimal ishtirok chegaralarini (UML multiplicity) mustaqil aniqlab, ularni diagrammada to'g'ri bog'lang.",
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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.EER_CLIENTS_1_50;
}
