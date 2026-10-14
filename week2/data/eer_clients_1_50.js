// ============================================================================
// DATABASE SYSTEMS ACADEMY — EER CLIENT CASE STUDIES
// Variable: EER_CLIENTS_1_50 (50 Questions)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.EER_CLIENTS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Alisher Zokirov",
    "clientRole": "'Orient Bank' President & CEO",
    "clientAvatar": "banker",
    "title": "Bank Branches and Staff System",
    "story": "Hello, Architect! In our bankda filiallar (Branch) va ularda ishlovchi xodimlar (Staff) are present. Har bir filialda kamida 1 ta, ko'pi bilan ko'plab xodim ishlaydi. Har bir xodim esa qat'iy ravishda faqat 1 ta filialga biriktiriladi.",
    "taskUz": "Model 'Branch' and 'Staff' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model 'Branch' and 'Staff' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Dilnoza Rahimova",
    "clientRole": "University Faculty Dean",
    "clientAvatar": "dean",
    "title": "Faculty and Student Registry",
    "story": "Universitetimizda har bir fakultet (Faculty) o'z talabalariga (Student) ega. Har bir talaba 1 ta fakultetda o'qiydi, fakultet esa ko'plab talabalarga ega.",
    "taskUz": "Model 'Faculty' and 'Student' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Faculty' (1..1) to 'Student' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Faculty' (1..1) and 'Student' (1..*) verified and approved.",
    "task": "Model 'Faculty' and 'Student' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Botir Qodirov",
    "clientRole": "'Mega Market' Logistika Direktori",
    "clientAvatar": "logistics",
    "title": "Toifalar va Mahsulotlar Katalogi",
    "story": "Do'konimizda har bir toifa (Category) o'z ichiga kamida 1 ta yoki undan ko'p mahsulotlarni (Product) oladi. Har bir mahsulot bitta toifaga kiradi.",
    "taskUz": "Model 'Category' and 'Product' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Category' (1..1) to 'Product' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Category' (1..1) and 'Product' (1..*) verified and approved.",
    "task": "Model 'Category' and 'Product' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Nodir Salimov",
    "clientRole": "'Ziyo Nashr' Bosh Muharriri",
    "clientAvatar": "publisher",
    "title": "Nashriyot va Kitoblar Noshirligi",
    "story": "Nashriyotimiz (Publisher) kitoblar (Book) chop etadi. Har bir kitob aynan 1 ta nashriyotga qarashli, nashriyot esa ko'plab kitob chop etadi.",
    "taskUz": "Model 'Publisher' and 'Book' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Publisher' (1..1) to 'Book' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Publisher' (1..1) and 'Book' (1..*) verified and approved.",
    "task": "Model 'Publisher' and 'Book' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Malika Yusupova",
    "clientRole": "'Shifo Med' Bosh Shifokori",
    "clientAvatar": "doctor",
    "title": "Kasalxona Bo'limi va Palatalar",
    "story": "Shifoxonamizda bo'limlar (WardDept) va palatalar (WardRoom) are present. Har bir bo'limda kamida 1 ta yoki ko'p palata bor, palata faqat 1 bo'limga tegishli.",
    "taskUz": "Model 'WardDept' and 'WardRoom' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'WardDept' (1..1) to 'WardRoom' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'WardDept' (1..1) and 'WardRoom' (1..*) verified and approved.",
    "task": "Model 'WardDept' and 'WardRoom' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Javohir Toirov",
    "clientRole": "Davlat Ro'yxatga Olish Xizmati",
    "clientAvatar": "officer",
    "title": "Fuqaro va Pasport Munosabati",
    "story": "In our tizimda har bir fuqaro (Citizen) qat'iy ravishda faqat bitta pasportga (Passport) ega bo'lishi shart va har bir pasport faqat 1 ta fuqaroga tegishli.",
    "taskUz": "Model 'Citizen' and 'Passport' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'.",
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
    "hint": "Connect 'Citizen' (1..1) to 'Passport' (1..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Citizen' (1..1) and 'Passport' (1..1) verified and approved.",
    "task": "Model 'Citizen' and 'Passport' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'."
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Sanjar Mirzayev",
    "clientRole": "Futbol Ligasi Komissari",
    "clientAvatar": "sports",
    "title": "Futbol Klubi va Stadion Munosabati",
    "story": "Ligamizda har bir klub (FootballClub) bitta uy stadioniga (Stadium) ega va har bir stadion faqat 1 ta klubga tegishli.",
    "taskUz": "Model 'FootballClub' and 'Stadium' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'.",
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
    "hint": "Connect 'FootballClub' (1..1) to 'Stadium' (1..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'FootballClub' (1..1) and 'Stadium' (1..1) verified and approved.",
    "task": "Model 'FootballClub' and 'Stadium' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'."
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Gulnora Ergasheva",
    "clientRole": "Avtopark Mudiri",
    "clientAvatar": "fleet",
    "title": "Haydovchi va Xizmat Mashinasi",
    "story": "Korxonamizda har bir maxsus haydovchiga (Driver) aniq 1 ta xizmat avtomobili (Vehicle) biriktirilgan va har bir mashina 1 ta haydovchiga ega.",
    "taskUz": "Model 'Driver' and 'Vehicle' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'.",
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
    "hint": "Connect 'Driver' (1..1) to 'Vehicle' (1..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Driver' (1..1) and 'Vehicle' (1..1) verified and approved.",
    "task": "Model 'Driver' and 'Vehicle' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'."
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Davron Akbarov",
    "clientRole": "Dasturiy Ta'minot Company PM",
    "clientAvatar": "techpm",
    "title": "Loyiha va Versiya Boshqaruvi",
    "story": "Kompaniyamizda har bir loyiha (Project) bitta markaziy Git repozitoriysiga (Repository) ega, har bir repozitoriy faqat 1 ta loyihaga xizmat qiladi.",
    "taskUz": "Model 'Project' and 'Repository' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'.",
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
    "hint": "Connect 'Project' (1..1) to 'Repository' (1..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Project' (1..1) and 'Repository' (1..1) verified and approved.",
    "task": "Model 'Project' and 'Repository' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'."
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "Floor 1 • Beginner",
    "clientName": "Aziza Karimova",
    "clientRole": "Mehmonxona Tarmog'i Manager",
    "clientAvatar": "hotel",
    "title": "Mehmonxona va Bosh Bino",
    "story": "Mehmonxona tarmog'imizda har bir filial mehmonxona (Hotel) o'zining asosiy qabulxona binosiga (MainBuilding) ega va har bir bosh bino 1 ta mehmonxonaga qaraydi.",
    "taskUz": "Model 'Hotel' and 'MainBuilding' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'.",
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
    "hint": "Connect 'Hotel' (1..1) to 'MainBuilding' (1..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Hotel' (1..1) and 'MainBuilding' (1..1) verified and approved.",
    "task": "Model 'Hotel' and 'MainBuilding' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'."
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "clientName": "Otabek G'aniyev",
    "clientRole": "Temir Yo'l Vokzali Dispetcheri",
    "clientAvatar": "railway",
    "title": "Poyezd va Vagonlar Zanjiri",
    "story": "Temir yo'lda har bir poyezd (Train) bir nechta vagonlardan (Carriage) iborat. Har bir vagon esa ayni paytda faqat 1 ta poyezd tarkibiga ulangan bo'lishi shart.",
    "taskUz": "Model 'Train' and 'Carriage' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Train' (1..1) to 'Carriage' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Train' (1..1) and 'Carriage' (1..*) verified and approved.",
    "task": "Model 'Train' and 'Carriage' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "clientName": "Zuhra Murodova",
    "clientRole": "Maktab Direktori",
    "clientAvatar": "principal",
    "title": "Sinf va O'quvchilar Bog'liqligi",
    "story": "Maktabimizda har bir sinf (SchoolClass) bir nechta o'quvchilarga (Pupil) ega. Har bir o'quvchi faqat 1 ta sinfda o'qiydi.",
    "taskUz": "Model 'SchoolClass' and 'Pupil' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'SchoolClass' (1..1) to 'Pupil' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'SchoolClass' (1..1) and 'Pupil' (1..*) verified and approved.",
    "task": "Model 'SchoolClass' and 'Pupil' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "clientName": "Umid Vohidov",
    "clientRole": "IT Xizmatlar Servis Manager",
    "clientAvatar": "itsm",
    "title": "Mijoz va Qo'llab-quvvatlash Chiptasi (Ticket)",
    "story": "IT xizmatimizda har bir so'rov chiptasi (Ticket) aniq 1 ta mijozga (Client) tegishli. Mijoz esa bir nechta chipta ochgan bo'lishi mumkin.",
    "taskUz": "Model 'Client' and 'Ticket' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Client' (1..1) to 'Ticket' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Client' (1..1) and 'Ticket' (1..*) verified and approved.",
    "task": "Model 'Client' and 'Ticket' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "Floor 1 • Intermediate",
    "clientName": "Shahnoza Aliyeva",
    "clientRole": "Library Tarmog'i Head",
    "clientAvatar": "librarian",
    "title": "Kutubxona Bo'limi va Tokchalar",
    "story": "Kutubxonamizda har bir zal bo'limi (LibrarySection) bir nechta kitob tokchalariga (Bookshelf) ega, har bir tokcha aniq 1 ta bo'limda joylashgan.",
    "taskUz": "Model 'LibrarySection' and 'Bookshelf' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'LibrarySection' (1..1) to 'Bookshelf' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'LibrarySection' (1..1) and 'Bookshelf' (1..*) verified and approved.",
    "task": "Model 'LibrarySection' and 'Bookshelf' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "Floor 1 • Qiyin (Floor 1 Master Architecti)",
    "clientName": "Bahriddin Po'latov",
    "clientRole": "'Apex Corporation' Bosh Ijrochi Direktori",
    "clientAvatar": "ceo",
    "title": "1-Qavat Bossi: Korxona Departamenti va Bosh Menejer",
    "story": "Assalomu alaykum, Bosh Me'mor! Korporatsiyamizda bo'limlar (Department) va xodimlar (Employee) are present. Har bir bo'limda qat'iy ravishda aniq 1 ta Bosh Menejer rahbarlik qiladi va har bir rahbar faqat 1 ta bo'limni boshqaradi. Ushbu 'Manages' 1:1 aloqasini to'liq chizib bering!",
    "taskUz": "Model 'Department' and 'Employee' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'.",
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
    "hint": "Connect 'Department' (1..1) to 'Employee' (1..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Department' (1..1) and 'Employee' (1..1) verified and approved.",
    "task": "Model 'Department' and 'Employee' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'."
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "Floor 2 • Beginner",
    "clientName": "Eldor Shokirov",
    "clientRole": "Avtosalon Savdo Manager",
    "clientAvatar": "dealer",
    "title": "Mijoz va Avtomobil Xaridi (Ixtiyoriy 0..*)",
    "story": "Avtosalonimizda mijozlar (Customer) va avtomobillar (Car) bor. Har bir sotilgan avtomobil aniq 1 ta mijozga tegishli bo'ladi. Lekin ro'yxatdan o'tgan mijoz hali mashina sotib olmagan bo'lishi ham mumkin, ya'ni 0 tadan ko'pgacha mashina xarid qiladi.",
    "taskUz": "Model 'Customer' and 'Car' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'.",
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
    "hint": "Connect 'Customer' (1..1) to 'Car' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Customer' (1..1) and 'Car' (0..*) verified and approved.",
    "task": "Model 'Customer' and 'Car' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'."
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "Floor 2 • Beginner",
    "clientName": "Nargiza Rustamova",
    "clientRole": "Universitet O'quv Department Head",
    "clientAvatar": "academic",
    "title": "Professor va Ilmiy Maqolalar Tizimi",
    "story": "Universitetimizda professorlar (Professor) va ilmiy maqolalar (Article) are present. Har bir maqola 1 ta muallifga tegishli. Lekin yangi ishga kirgan professor hali maqola chop etmagan bo'lishi mumkin.",
    "taskUz": "Model 'Professor' and 'Article' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'.",
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
    "hint": "Connect 'Professor' (1..1) to 'Article' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Professor' (1..1) and 'Article' (0..*) verified and approved.",
    "task": "Model 'Professor' and 'Article' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'."
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Bobur Ismoilov",
    "clientRole": "HR Boshqarmasi Director",
    "clientAvatar": "hrmanager",
    "title": "Xodim va Xizmat Noutbuki Tizimi",
    "story": "Korxonamizda har bir xodim (Employee) va xizmat noutbuki (Laptop) bor. Har bir noutbuk faqat 1 ta xodimga biriktiriladi. Biroq har bir xodimga ham noutbuk berilmaydi (ayrimlari statsionar kompyuterda ishlaydi), ya'ni xodim ko'pi bilan 1 ta yoki 0 ta noutbukka ega bo'lishi mumkin.",
    "taskUz": "Model 'Employee' and 'Laptop' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'.",
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
    "hint": "Connect 'Employee' (1..1) to 'Laptop' (0..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Employee' (1..1) and 'Laptop' (0..1) verified and approved.",
    "task": "Model 'Employee' and 'Laptop' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'."
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Nargiza Yo'ldosheva",
    "clientRole": "IT Akademiya Kurs Manager",
    "clientAvatar": "academic",
    "title": "O'quvchi va Sertifikat Tizimi",
    "story": "Akademiyamizda har bir sertifikat (Certificate) bitirgan 1 ta o'quvchiga (Student) beriladi. Lekin har bir o'quvchi ham kursni yakunlab sertifikat ololmasligi mumkin.",
    "taskUz": "Model 'Student' and 'Certificate' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'.",
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
    "hint": "Connect 'Student' (1..1) to 'Certificate' (0..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Student' (1..1) and 'Certificate' (0..1) verified and approved.",
    "task": "Model 'Student' and 'Certificate' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'."
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Farhod Karimov",
    "clientRole": "Library Tizimi Engineer",
    "clientAvatar": "librarian",
    "title": "Kitobxon va Jarimalar Tizimi",
    "story": "Kutubxonamizda a'zo kitobxon (Member) va jarima cheklari (Fine) are present. Har bir jarima aniq 1 ta a'zoga yoziladi. Lekin intizomli a'zoda umuman jarima bo'lmasligi mumkin.",
    "taskUz": "Model 'Member' and 'Fine' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'.",
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
    "hint": "Connect 'Member' (1..1) to 'Fine' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Member' (1..1) and 'Fine' (0..*) verified and approved.",
    "task": "Model 'Member' and 'Fine' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'."
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Sevara Normatova",
    "clientRole": "Clinic Ro'yxatga Olish Department",
    "clientAvatar": "doctor",
    "title": "Bemor va Retseptlar Tizimi",
    "story": "Klinikamizda har bir dori retsepti (Prescription) 1 ta bemorga (Patient) tegishli. Sog'lom profilaktikaga kelgan bemorga esa dori yozilmasligi mumkin.",
    "taskUz": "Model 'Patient' and 'Prescription' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'.",
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
    "hint": "Connect 'Patient' (1..1) to 'Prescription' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Patient' (1..1) and 'Prescription' (0..*) verified and approved.",
    "task": "Model 'Patient' and 'Prescription' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'."
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Akmal Rahmonov",
    "clientRole": "Uy-joy Agency Broker",
    "clientAvatar": "broker",
    "title": "Mulk Egasi va Kvartiralar Tizimi",
    "story": "Agentligimizda ro'yxatdan o'tgan har bir mulk egasi (Owner) kamida 1 ta yoki bir nechta kvartiraga (Property) ega bo'lishi shart. Har bir kvartira esa 1 ta egaga qarashli.",
    "taskUz": "Model 'Owner' and 'Property' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Owner' (1..1) to 'Property' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Owner' (1..1) and 'Property' (1..*) verified and approved.",
    "task": "Model 'Owner' and 'Property' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Jamshid Tursunov",
    "clientRole": "Restoranlar Tarmog'i Bosh Oshpazi",
    "clientAvatar": "chef",
    "title": "Taom va Retsept Masalliqlari Tizimi",
    "story": "Menyumizdagi har bir taom (Dish) kamida 1 ta yoki undan ko'p tarkibiy masalliqqa (Ingredient) ega bo'lishi shart. Har bir masalliq esa menyudagi 1 ta asosiy retseptga tegishli.",
    "taskUz": "Model 'Dish' and 'Ingredient' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'.",
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
    "hint": "Connect 'Dish' (1..1) to 'Ingredient' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Dish' (1..1) and 'Ingredient' (1..*) verified and approved.",
    "task": "Model 'Dish' and 'Ingredient' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..*'."
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Malika Zufarova",
    "clientRole": "Mobil Aloqa Company Billing Mutaxassisi",
    "clientAvatar": "telecom",
    "title": "Abonent va SIM-karta Tizimi",
    "story": "Har bir SIM-karta (SIMCard) 1 ta abonentga (Subscriber) biriktirilgan. Yangi shartnoma tuzgan abonentga esa hali SIM berilmagan bo'lishi mumkin.",
    "taskUz": "Model 'Subscriber' and 'SIMCard' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'.",
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
    "hint": "Connect 'Subscriber' (1..1) to 'SIMCard' (0..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Subscriber' (1..1) and 'SIMCard' (0..1) verified and approved.",
    "task": "Model 'Subscriber' and 'SIMCard' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'."
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Madina Hakimova",
    "clientRole": "Tibbiy Sug'urta Company",
    "clientAvatar": "insurance",
    "title": "Mijoz va Sug'urta Polisi Tizimi",
    "story": "Kompaniyamizda fuqaro (Person) va tibbiy sug'urta polisi (Policy) are present. Har bir polis aniq 1 kishiga beriladi. Lekin fuqaro hali polis sotib olmagan bo'lishi mumkin.",
    "taskUz": "Model 'Person' and 'Policy' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'.",
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
    "hint": "Connect 'Person' (1..1) to 'Policy' (0..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Person' (1..1) and 'Policy' (0..1) verified and approved.",
    "task": "Model 'Person' and 'Policy' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'."
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "G'ayrat Ergashev",
    "clientRole": "Yuk Tashish Company Dispetcheri",
    "clientAvatar": "logistics",
    "title": "Konteyner va Yuk Jo'natmasi Tizimi",
    "story": "Logistika parkimizda konteyner (Container) va jo'natma (Shipment) are present. Har bir yuk 1 ta konteynerga yuklanadi. Zaxiradagi bo'sh konteyner esa yuklanmagan bo'lishi mumkin.",
    "taskUz": "Model 'Shipment' and 'Container' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'.",
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
    "hint": "Connect 'Shipment' (1..1) to 'Container' (0..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Shipment' (1..1) and 'Container' (0..1) verified and approved.",
    "task": "Model 'Shipment' and 'Container' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'."
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Zokir Usmonov",
    "clientRole": "Kredit Byurosi Director",
    "clientAvatar": "banker",
    "title": "Mijoz va Garov Mulki Tizimi",
    "story": "Bankimizda har bir garov mulki (Collateral) 1 ta mijozga (Client) tegishli. Lekin oddiy mikroqarz olgan mijoz garov qo'ymasligi mumkin.",
    "taskUz": "Model 'Client' and 'Collateral' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'.",
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
    "hint": "Connect 'Client' (1..1) to 'Collateral' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Client' (1..1) and 'Collateral' (0..*) verified and approved.",
    "task": "Model 'Client' and 'Collateral' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'."
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Shoira Valiyeva",
    "clientRole": "Farmatsevtika Ombori Mudiri",
    "clientAvatar": "pharmacist",
    "title": "Dori Partiyasi va Sifat Sertifikati Tizimi",
    "story": "Omborimizda har bir dori partiyasi (MedicineBatch) majburiy ravishda aniq 1 ta sifat sertifikatiga (QualityCert) ega va har bir sertifikat 1 ta partiyaga beriladi.",
    "taskUz": "Model 'MedicineBatch' and 'QualityCert' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'.",
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
    "hint": "Connect 'MedicineBatch' (1..1) to 'QualityCert' (1..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'MedicineBatch' (1..1) and 'QualityCert' (1..1) verified and approved.",
    "task": "Model 'MedicineBatch' and 'QualityCert' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '1..1'."
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "Floor 2 • Intermediate",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Avtoturargoh Kompleksi Boshqaruvchisi",
    "clientAvatar": "parking",
    "title": "Mashina va Avtoturargoh Joyi Tizimi",
    "story": "Biznes markazimizda har bir band turargoh joyi (ParkingSpot) 1 ta ro'yxatdagi avtomobilga (Car) tegishli. Lekin mashina ko'chada yurgan paytda turargohda joy egallamasligi mumkin.",
    "taskUz": "Model 'Car' and 'ParkingSpot' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'.",
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
    "hint": "Connect 'Car' (1..1) to 'ParkingSpot' (0..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Car' (1..1) and 'ParkingSpot' (0..1) verified and approved.",
    "task": "Model 'Car' and 'ParkingSpot' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..1'."
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "Floor 2 • Qiyin (Floor 2 Master Architecti)",
    "clientName": "Sherzod Jo'rayev",
    "clientRole": "'Apex Aero' Parvozlar Xavfsizligi Direktori",
    "clientAvatar": "airline",
    "title": "2-Qavat Bossi: Samolyot va Parvozlar Jadvali Tizimi",
    "story": "Aviakompaniyamizda samolyotlar (Aircraft) va rejalashtirilgan parvozlar (Flight) are present. Har bir parvoz qat'iy ravishda aniq 1 ta samolyotga biriktirilishi shart. Lekin ba'zi yangi yoki ta'mirdagi samolyotlar hali birorta ham parvozga qo'yilmagan bo'lishi mumkin. Ushbu parvoz jadvalini to'liq chizing!",
    "taskUz": "Model 'Aircraft' and 'Flight' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'.",
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
    "hint": "Connect 'Aircraft' (1..1) to 'Flight' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Aircraft' (1..1) and 'Flight' (0..*) verified and approved.",
    "task": "Model 'Aircraft' and 'Flight' entities, designate primary keys {PK}, and connect them with multiplicities '1..1' and '0..*'."
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "Floor 3 • Beginner",
    "clientName": "Kamoliddin Fayzullayev",
    "clientRole": "Ijtimoiy Himoya Boshqarmasi",
    "clientAvatar": "social",
    "title": "Xodim va Farzandlari (Weak Entity Child)",
    "story": "Xodimlarimiz (Staff) va ularning qaramog'idagi farzandlari (Child) are present. Farzand alohida yashay olmaydi — u ota xodimiga bog'liq Weak Entity (Weak Entity) hisoblanadi. Farzandning o'ziga xos qisman kaliti {PPK} faqat uning ismi (fName) hisoblanadi. Har bir farzand aniq 1 ta xodimga tegishli, xodim esa 0 tadan ko'pgacha farzandga ega bo'lishi mumkin.",
    "taskUz": "Model 'Staff' and weak entity 'Child' with partial key, mark 'Child' as Weak Entity, and link with '1..1' and '0..*'.",
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
    "hint": "Connect 'Staff' (1..1) to 'Child' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Staff' (1..1) and 'Child' (0..*) verified and approved.",
    "task": "Model 'Staff' and weak entity 'Child' with partial key, mark 'Child' as Weak Entity, and link with '1..1' and '0..*'."
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Ulug'bek Samatov",
    "clientRole": "E-tijorat Ombor Manager",
    "clientAvatar": "warehouse",
    "title": "Buyurtma va Buyurtma Qatorlari (OrderLine)",
    "story": "Har bir buyurtma (Order) bir nechta qatorlardan (OrderLine) iborat. OrderLine mustaqil are present bo'la olmaydi (Weak Entity). Uning qisman kaliti {PPK} qator raqami (lineNo). Har bir buyurtma kamida 1 ta qatorga ega, qator esa aniq 1 ta buyurtmaga tegishli.",
    "taskUz": "Model 'Order' and weak entity 'OrderLine' with partial key, mark 'OrderLine' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Order' (1..1) to 'OrderLine' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Order' (1..1) and 'OrderLine' (1..*) verified and approved.",
    "task": "Model 'Order' and weak entity 'OrderLine' with partial key, mark 'OrderLine' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Bobur Hakimov",
    "clientRole": "IT Loyihalar Manager",
    "clientAvatar": "techpm",
    "title": "Loyiha va Bosqichlar (Milestone Weak Entity)",
    "story": "Kompaniyamizda har bir loyiha (Project) bir nechta oraliq bosqichlarga (Milestone) ega. Milestone loyihasiz mustaqil are present bo'lmaydi (Weak Entity). Uning qisman kaliti {PPK} bosqich tartib raqami (milestoneNo). Har bir loyiha 1 tadan ko'p bosqichga ega, bosqich esa aniq 1 ta loyihaga qarashli.",
    "taskUz": "Model 'Project' and weak entity 'Milestone' with partial key, mark 'Milestone' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Project' (1..1) to 'Milestone' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Project' (1..1) and 'Milestone' (1..*) verified and approved.",
    "task": "Model 'Project' and weak entity 'Milestone' with partial key, mark 'Milestone' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Nilufar Qosimova",
    "clientRole": "Sug'urta Da'volari Boshqarmasi",
    "clientAvatar": "insurance",
    "title": "Sug'urta Polisi va Zarar Da'volari (Claim Weak Entity)",
    "story": "Sug'urta kompaniyamizda har bir polis (Policy) bo'yicha zarar da'volari (Claim) tushadi. Da'vo polissiz are present bo'la olmaydi (Weak Entity). Qisman kalit {PPK} da'vo ketma-ket raqami (claimSeq). Polis 0 tadan ko'pgacha da'voga ega, da'vo esa 1 ta polisga tegishli.",
    "taskUz": "Model 'Policy' and weak entity 'Claim' with partial key, mark 'Claim' as Weak Entity, and link with '1..1' and '0..*'.",
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
    "hint": "Connect 'Policy' (1..1) to 'Claim' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Policy' (1..1) and 'Claim' (0..*) verified and approved.",
    "task": "Model 'Policy' and weak entity 'Claim' with partial key, mark 'Claim' as Weak Entity, and link with '1..1' and '0..*'."
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Ravshan Usmonov",
    "clientRole": "Mehmonxona Arxitektori",
    "clientAvatar": "architect",
    "title": "Building and Rooms (Room Weak Entity)",
    "story": "Mehmonxona binosi (Building) va undagi xonalar (Room) bor. Xona faqat shu bino ichida are present (Weak Entity). Bino ichidagi qisman kalit {PPK} xona raqamidir (roomNo). Bino 1 tadan ko'p xonaga ega, xona esa bitta binoga tegishli.",
    "taskUz": "Model 'Building' and weak entity 'Room' with partial key, mark 'Room' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Building' (1..1) to 'Room' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Building' (1..1) and 'Room' (1..*) verified and approved.",
    "task": "Model 'Building' and weak entity 'Room' with partial key, mark 'Room' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Otabek Ergashev",
    "clientRole": "Shifoxona Bosh Vrachi",
    "clientAvatar": "doctor",
    "title": "Palata va Karavotlar (Bed Weak Entity)",
    "story": "Shifoxonamizda palatalar (Ward) va karavotlar (Bed) are present. Karavot faqat shu palata ichida raqamlanadi (Weak Entity, {PPK} bedNo). Palata 1 tadan ko'p karavotga ega, karavot esa bitta palataga tegishli.",
    "taskUz": "Model 'Ward' and weak entity 'Bed' with partial key, mark 'Bed' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Ward' (1..1) to 'Bed' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Ward' (1..1) and 'Bed' (1..*) verified and approved.",
    "task": "Model 'Ward' and weak entity 'Bed' with partial key, mark 'Bed' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Lobar Sayfullayeva",
    "clientRole": "O'quv Nashriyoti Tahririyati",
    "clientAvatar": "publisher",
    "title": "Kitob va Boblar (Chapter Weak Entity)",
    "story": "Nashriyotimizda kitob (Book) va uning boblari (Chapter) bor. Bob kitobsiz yashay olmaydi (Weak Entity). Uning qisman kaliti {PPK} bob tartib raqami (chapterNo). Kitob kamida bitta yoki bir nechta bobga ega bo'ladi, har bir bob esa aniq bitta kitobga tegishli.",
    "taskUz": "Model 'Book' and weak entity 'Chapter' with partial key, mark 'Chapter' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Book' (1..1) to 'Chapter' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Book' (1..1) and 'Chapter' (1..*) verified and approved.",
    "task": "Model 'Book' and weak entity 'Chapter' with partial key, mark 'Chapter' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Jahongir To'xtayev",
    "clientRole": "Aviakompaniya Engineer",
    "clientAvatar": "airline",
    "title": "Parvoz va Reys Segmentlari (FlightLeg Weak Entity)",
    "story": "Aviakompaniyada asosiy parvoz (Flight) bir nechta oraliq uchish qismlaridan (FlightLeg) iborat bo'lishi mumkin (Weak Entity, {PPK} legNo). Parvoz bir nechta oraliq uchish qismlariga ega bo'lishi mumkin, har bir qism aniq bitta parvozga qarashli.",
    "taskUz": "Model 'Flight' and weak entity 'FlightLeg' with partial key, mark 'FlightLeg' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Flight' (1..1) to 'FlightLeg' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Flight' (1..1) and 'FlightLeg' (1..*) verified and approved.",
    "task": "Model 'Flight' and weak entity 'FlightLeg' with partial key, mark 'FlightLeg' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Doniyor Ziyoyev",
    "clientRole": "Dasturiy Mahsulot Arxitektori",
    "clientAvatar": "techpm",
    "title": "Dasturiy Paket va Modullar (Module Weak Entity)",
    "story": "Dasturimiz (SoftwarePackage) bir nechta modullardan (Module) iborat. Modul dastursiz are present emas (Weak Entity, {PPK} modCode). Paket bir nechta modullardan iborat bo'ladi, har bir modul esa aniq bitta paketga tegishli.",
    "taskUz": "Model 'SoftwarePackage' and weak entity 'Module' with partial key, mark 'Module' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'SoftwarePackage' (1..1) to 'Module' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'SoftwarePackage' (1..1) and 'Module' (1..*) verified and approved.",
    "task": "Model 'SoftwarePackage' and weak entity 'Module' with partial key, mark 'Module' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Gulzoda Islomova",
    "clientRole": "Teatr Bosh Ma'muri",
    "clientAvatar": "arts",
    "title": "Teatr Zali va Qatorlar (SeatRow Weak Entity)",
    "story": "Teatrimizda tomosha zali (Hall) va undagi o'rindiqlar qatori (SeatRow) are present. Qator zalsiz are present bo'lmaydi (Weak Entity, {PPK} rowNo). Zal bir nechta qatorlarga ega bo'ladi, har bir qator aniq bitta tomosha zaliga qarashli.",
    "taskUz": "Model 'Hall' and weak entity 'SeatRow' with partial key, mark 'SeatRow' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Hall' (1..1) to 'SeatRow' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Hall' (1..1) and 'SeatRow' (1..*) verified and approved.",
    "task": "Model 'Hall' and weak entity 'SeatRow' with partial key, mark 'SeatRow' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Bexruz Normurodov",
    "clientRole": "Chiptaxona Head",
    "clientAvatar": "retailer",
    "title": "Chipta va Chipta Kuponlari (Coupon Weak Entity)",
    "story": "Xalqaro poyezd chiptasi (Ticket) bir nechta kupon varaqlaridan (Coupon) iborat (Weak Entity, {PPK} couponNo). Chipta bir nechta kuponlardan iborat bo'ladi, har bir kupon esa aniq bitta chiptaga tegishli.",
    "taskUz": "Model 'Ticket' and weak entity 'Coupon' with partial key, mark 'Coupon' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Ticket' (1..1) to 'Coupon' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Ticket' (1..1) and 'Coupon' (1..*) verified and approved.",
    "task": "Model 'Ticket' and weak entity 'Coupon' with partial key, mark 'Coupon' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Maftuna Alimova",
    "clientRole": "Bank Kartalari Monitoringi",
    "clientAvatar": "banker",
    "title": "Plastik Karta va PIN-Konvert (PinEnvelope Weak Entity)",
    "story": "Bank plastik kartasi (BankCard) o'zining himoyalangan PIN-konvertiga (PinEnvelope) ega (Weak Entity, {PPK} envSeq). Karta ko'pi bilan bitta PIN-konvertga ega bo'lishi mumkin, konvert esa faqat bitta kartaga tegishli.",
    "taskUz": "Model 'BankCard' and weak entity 'PinEnvelope' with partial key, mark 'PinEnvelope' as Weak Entity, and link with '1..1' and '0..1'.",
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
    "hint": "Connect 'BankCard' (1..1) to 'PinEnvelope' (0..1) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'BankCard' (1..1) and 'PinEnvelope' (0..1) verified and approved.",
    "task": "Model 'BankCard' and weak entity 'PinEnvelope' with partial key, mark 'PinEnvelope' as Weak Entity, and link with '1..1' and '0..1'."
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Nodir Mahmudov",
    "clientRole": "Yuk Kemasi Kapitani",
    "clientAvatar": "logistics",
    "title": "Kema va Kema Xonalari (Cabin Weak Entity)",
    "story": "Yuk kemasida (Ship) kayutalar (Cabin) are present (Weak Entity, {PPK} cabinNo). Kema bir nechta kayutalarga ega bo'ladi, har bir kayuta esa faqat bitta kemaga tegishli.",
    "taskUz": "Model 'Ship' and weak entity 'Cabin' with partial key, mark 'Cabin' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Ship' (1..1) to 'Cabin' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Ship' (1..1) and 'Cabin' (1..*) verified and approved.",
    "task": "Model 'Ship' and weak entity 'Cabin' with partial key, mark 'Cabin' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "Floor 3 • Intermediate",
    "clientName": "Zuhra Shodiyeva",
    "clientRole": "Kollej O'quv Rejalari Head",
    "clientAvatar": "principal",
    "title": "Fan Sillabusi va Dars Mavzulari (Topic Weak Entity)",
    "story": "Fan sillabusida (Syllabus) dars mavzulari (Topic) bor (Weak Entity, {PPK} topicNo). Sillabus bir nechta mavzulardan iborat bo'ladi, har bir mavzu esa faqat bitta sillabusga qarashli.",
    "taskUz": "Model 'Syllabus' and weak entity 'Topic' with partial key, mark 'Topic' as Weak Entity, and link with '1..1' and '1..*'.",
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
    "hint": "Connect 'Syllabus' (1..1) to 'Topic' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Syllabus' (1..1) and 'Topic' (1..*) verified and approved.",
    "task": "Model 'Syllabus' and weak entity 'Topic' with partial key, mark 'Topic' as Weak Entity, and link with '1..1' and '1..*'."
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "Floor 3 • Qiyin (Floor 3 Master Architecti)",
    "clientName": "Sardor Ahmedov",
    "clientRole": "Bank IT Direktori",
    "clientAvatar": "bankit",
    "title": "3-Qavat Bossi: Hisob Raqam va Tranzaksiyalar (Transaction)",
    "story": "Assalomu alaykum! Bankimizda hisob raqamlari (Account) va har bir harakat (Transaction) are present. Tranzaksiya o'zicha mustaqil are present bo'lmaydi (Weak Entity). Uning qisman kaliti {PPK} tranzaksiya ketma-ketlik raqamidir (txSeq). Har bir hisob raqam 0 tadan ko'pgacha tranzaksiyaga ega bo'lishi mumkin, tranzaksiya esa qat'iy ravishda 1 ta hisobga tegishli. Ushbu zaif munosabatni chizing!",
    "taskUz": "Model 'Account' and weak entity 'Transaction' with partial key, mark 'Transaction' as Weak Entity, and link with '1..1' and '0..*'.",
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
    "hint": "Connect 'Account' (1..1) to 'Transaction' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Account' (1..1) and 'Transaction' (0..*) verified and approved.",
    "task": "Model 'Account' and weak entity 'Transaction' with partial key, mark 'Transaction' as Weak Entity, and link with '1..1' and '0..*'."
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "IT Korxona Direktori",
    "clientAvatar": "itdirector",
    "title": "Xodim va Loyiha: Ish Soati Atributi (WorksOn)",
    "story": "Korxonamizda xodimlar (Employee) va loyihalar (Project) o'rtasida ko'pdan-ko'pga munosabat bor: har bir xodim 1 tadan 5 tagacha loyihada ishlaydi (1..5), har bir loyihada kamida 1 ta yoki ko'p xodim ishlaydi. Eng muhimi: har bir xodimning loyihada ishlagan soati (hours) aynan shu 'WorksOn' aloqasining o'ziga xos atributi (Association Class) hisoblanadi!",
    "taskUz": "Model 'Employee' and 'Project' entities, designate primary keys {PK}, and connect them with multiplicities '1..*' and '1..5'.",
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
    "hint": "Connect 'Employee' (1..*) to 'Project' (1..5) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Employee' (1..*) and 'Project' (1..5) verified and approved.",
    "task": "Model 'Employee' and 'Project' entities, designate primary keys {PK}, and connect them with multiplicities '1..*' and '1..5'."
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Rustam Fayziyev",
    "clientRole": "Avtomobil Plant Ta'minot Manager",
    "clientAvatar": "automotive",
    "title": "Yetkazib Beruvchi va Detallar (Supplies - narx Atributi)",
    "story": "Zavodimizda ta'minotchi (Supplier) va detallar (Part) o'rtasida 'Supplies' ko'pdan-ko'pga aloqasi are present. Bir ta'minotchi ko'plab detal yetkazadi, har bir detal ko'plab ta'minotchidan olinishi mumkin. Yetkazib berish narxi (unitPrice) aynan shu aloqaga tegishli (Association Class)!",
    "taskUz": "Model 'Supplier' and 'Part' entities, designate primary keys {PK}, and connect them with multiplicities '1..*' and '0..*'.",
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
    "hint": "Connect 'Supplier' (1..*) to 'Part' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Supplier' (1..*) and 'Part' (0..*) verified and approved.",
    "task": "Model 'Supplier' and 'Part' entities, designate primary keys {PK}, and connect them with multiplicities '1..*' and '0..*'."
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Shohrux Mirzohidov",
    "clientRole": "Library Tarmog'i Ma'muri",
    "clientAvatar": "librarian",
    "title": "A'zo va Kitob Ijarasi (Borrow - borrowDate Atributi)",
    "story": "Kutubxonamizda a'zo kitobxon (Member) va kitob nusxasi (Book) o'rtasida 'Borrows' aloqasi bor. A'zo ko'p kitob olishi, kitob esa ko'p marta berilishi mumkin. Olingan sana (borrowDate) va qaytarish muddati (dueDate) aloqaning Association Class atributlaridir.",
    "taskUz": "Model 'Member' and 'Book' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
    "hint": "Connect 'Member' (0..*) to 'Book' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Member' (0..*) and 'Book' (0..*) verified and approved.",
    "task": "Model 'Member' and 'Book' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'."
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Dilorom Yusupova",
    "clientRole": "Kasalxona Konsultatsiya Department",
    "clientAvatar": "doctor",
    "title": "Shifokor va Bemor Qabuli (Consults - konsultatsiya Tashxisi)",
    "story": "Shifokor (Doctor) va bemor (Patient) o'rtasida 'Consults' aloqasi are present. Shifokor ko'p bemorni ko'radi, bemor ko'p shifokorga uchrashishi mumkin. Konsultatsiya natijasidagi tashxis (diagnosis) va to'lov (fee) aynan aloqa atributidir (Association Class).",
    "taskUz": "Model 'Doctor' and 'Patient' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
    "hint": "Connect 'Doctor' (0..*) to 'Patient' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Doctor' (0..*) and 'Patient' (0..*) verified and approved.",
    "task": "Model 'Doctor' and 'Patient' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'."
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "Floor 4 • Qiyin (Floor 4 Master Architecti)",
    "clientName": "Shuhrat Saidov",
    "clientRole": "Universitet Registratori",
    "clientAvatar": "registrar",
    "title": "4-Qavat Bossi: Talaba va Fan Ro'yxatdan O'tishi (grade Atributi)",
    "story": "Universitetimizda talaba (Student) va o'quv fani (Course) o'rtasida 'Registers' aloqasi bor. Talaba bir nechta fanga yoziladi, fanda ko'plab talaba o'qiydi. Aloqaning o'zida yakuniy ball (grade) va semestr (semester) atributlari saqlanadi (Association Class). Ushbu modelni to'liq taqdim eting!",
    "taskUz": "Model 'Student' and 'Course' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '1..*'.",
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
    "hint": "Connect 'Student' (0..*) to 'Course' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Student' (0..*) and 'Course' (1..*) verified and approved.",
    "task": "Model 'Student' and 'Course' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '1..*'."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.EER_CLIENTS_1_50;
}
