// ============================================================================
// ACADEMY DATABASE SYSTEMS (MODULE) — WEEK 2: QUESTIONS
// O'zgaruvchi: QUESTIONS_51_100 (100% Amaliy Relyatsion Sxema Keyslari - Jumboq Rejimi)
// ============================================================================

var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Bank Account Transaction Weak Entity",
    "title": "Bank Tranzaksiyasi Zaif Entitiyasi (Transaction)",
    "story": "Bank hisob raqami harakatlari `Transaction` alohida mavjud bo'la olmaydi. Ota kalit: `accountNo`, qisman kalit: `txSeq`.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table Transaction { accountNo varchar [ref: > Account.accountNo] txSeq int amount decimal txDate timestamp indexes { (accountNo, txSeq) [pk] } }",
      "Transaction(accountNo [PK, FK], txSeq [PK], amount, txDate)"
    ],
    "expectedSchema": {
      "tableName": "Transaction",
      "columns": [
        {
          "name": "accountNo",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Account(accountNo)"
        },
        {
          "name": "txSeq",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "amount",
          "type": "decimal"
        },
        {
          "name": "txDate",
          "type": "timestamp"
        }
      ]
    },
    "explanation": "Transaction zaif entitiyasi kompozit PK bilan loyihalandi."
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Project Milestone Weak Entity",
    "title": "Loyiha Bosqichi Zaif Entitiyasi (Milestone)",
    "story": "Loyiha oraliq marrasi `Milestone` faqat o'sha loyiha `Project` doirasida ma'noga ega. Ota kalit: `projNo`, qisman kalit: `milestoneNo`.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table Milestone { projNo int [ref: > Project.projNo] milestoneNo int title varchar targetDate date indexes { (projNo, milestoneNo) [pk] } }",
      "Milestone(projNo [PK, FK], milestoneNo [PK], title, targetDate)"
    ],
    "expectedSchema": {
      "tableName": "Milestone",
      "columns": [
        {
          "name": "projNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Project(projNo)"
        },
        {
          "name": "milestoneNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "title",
          "type": "varchar(80)"
        },
        {
          "name": "targetDate",
          "type": "date"
        }
      ]
    },
    "explanation": "Milestone zaif entitiyasi chizildi."
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Flight Leg Weak Entity",
    "title": "Aviareys Oraliq Segmenti (FlightLeg)",
    "story": "Transkontinental reysning har bir parvoz segmenti `FlightLeg` ota reysga bog'liq zaif entitiya hisoblanadi. Ota kalit: `flightNo`, qisman kalit: `legNo`.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table FlightLeg { flightNo varchar [ref: > Flight.flightNo] legNo int originAirport varchar destAirport varchar indexes { (flightNo, legNo) [pk] } }",
      "FlightLeg(flightNo [PK, FK], legNo [PK], originAirport, destAirport)"
    ],
    "expectedSchema": {
      "tableName": "FlightLeg",
      "columns": [
        {
          "name": "flightNo",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Flight(flightNo)"
        },
        {
          "name": "legNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "originAirport",
          "type": "varchar(5)"
        },
        {
          "name": "destAirport",
          "type": "varchar(5)"
        }
      ]
    },
    "explanation": "FlightLeg zaif entitiyasi loyihalandi."
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Document Revision Weak Entity",
    "title": "Hujjat Versiyasi Zaif Entitiyasi (DocRevision)",
    "story": "Shartnomaning har bir yangilangan versiyasi `DocRevision` hujjatga bog'liq. Ota kalit: `docId`, qisman kalit: `revNo`.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table DocRevision { docId varchar [ref: > Document.docId] revNo int revDate date authorName varchar indexes { (docId, revNo) [pk] } }",
      "DocRevision(docId [PK, FK], revNo [PK], revDate, authorName)"
    ],
    "expectedSchema": {
      "tableName": "DocRevision",
      "columns": [
        {
          "name": "docId",
          "type": "varchar(15)",
          "isPK": true,
          "isFK": true,
          "references": "Document(docId)"
        },
        {
          "name": "revNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "revDate",
          "type": "date"
        },
        {
          "name": "authorName",
          "type": "varchar(80)"
        }
      ]
    },
    "explanation": "DocRevision zaif entitiyasi chizildi."
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Course Module Topic Weak Entity",
    "title": "O'quv Moduli Mavzusi (ModuleTopic)",
    "story": "Modul ichidagi mavzu `ModuleTopic` mustaqil yashay olmaydi. Ota kalit: `moduleCode`, qisman kalit: `topicIndex`.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table ModuleTopic { moduleCode varchar [ref: > Module.moduleCode] topicIndex int topicTitle varchar indexes { (moduleCode, topicIndex) [pk] } }",
      "ModuleTopic(moduleCode [PK, FK], topicIndex [PK], topicTitle)"
    ],
    "expectedSchema": {
      "tableName": "ModuleTopic",
      "columns": [
        {
          "name": "moduleCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Module(moduleCode)"
        },
        {
          "name": "topicIndex",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "topicTitle",
          "type": "varchar(100)"
        }
      ]
    },
    "explanation": "ModuleTopic zaif entitiyasi loyihalandi."
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • 2-Level Multi-level Weak Entity Chain",
    "title": "2-Bosqichli Zaif Entitiy Zanjiri: Bino -> Qavat -> Xona",
    "story": "Bino `Building(buildingId)` -> Qavat `Floor(buildingId, floorNo)` -> Xona `BuildingRoom(buildingId, floorNo, roomNo)`. Xona qavatga, qavat esa binoga bog'liq zaif entitiya.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table BuildingRoom { buildingId varchar floorNo int roomNo int capacity int indexes { (buildingId, floorNo, roomNo) [pk] } }",
      "BuildingRoom(buildingId [PK, FK], floorNo [PK, FK], roomNo [PK], capacity)"
    ],
    "expectedSchema": {
      "tableName": "BuildingRoom",
      "columns": [
        {
          "name": "buildingId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true
        },
        {
          "name": "floorNo",
          "type": "integer",
          "isPK": true,
          "isFK": true
        },
        {
          "name": "roomNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "capacity",
          "type": "integer"
        }
      ]
    },
    "explanation": "Ko'p bosqichli zaif entitiy zanjirida barcha ota kalitlar pastga meros bo'lib o'tdi."
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Company-Division-Section Weak Chain",
    "title": "Bo'linma Bo'limchasi Zaif Zanjiri (CompSection)",
    "story": "Kompaniya `Company(compCode)` -> Bo'linma `Division(compCode, divCode)` -> Bo'limcha `CompSection(compCode, divCode, sectionCode)`. Ota kalitlar pastga zanjir bo'lib tushadi.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table CompSection { compCode varchar divCode varchar sectionCode varchar managerName varchar indexes { (compCode, divCode, sectionCode) [pk] } }",
      "CompSection(compCode [PK, FK], divCode [PK, FK], sectionCode [PK], managerName)"
    ],
    "expectedSchema": {
      "tableName": "CompSection",
      "columns": [
        {
          "name": "compCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true
        },
        {
          "name": "divCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true
        },
        {
          "name": "sectionCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "managerName",
          "type": "varchar(80)"
        }
      ]
    },
    "explanation": "CompSection zaif entitiyasi 3 kalitli kompozit PK bilan chizildi."
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Vehicle Inspection Log Weak Entity",
    "title": "Avtotransport Texnik Ko'riklari (VehicleInspection)",
    "story": "Avtomobil `Vehicle(vin)` har yili texnik ko'rikdan o'tadi `VehicleInspection`. Ota kalit: `vin`, qisman kalit: `inspectDate`.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table VehicleInspection { vin varchar [ref: > Vehicle.vin] inspectDate date inspectorName varchar passed boolean indexes { (vin, inspectDate) [pk] } }",
      "VehicleInspection(vin [PK, FK], inspectDate [PK], inspectorName, passed)"
    ],
    "expectedSchema": {
      "tableName": "VehicleInspection",
      "columns": [
        {
          "name": "vin",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Vehicle(vin)"
        },
        {
          "name": "inspectDate",
          "type": "date",
          "isPK": true
        },
        {
          "name": "inspectorName",
          "type": "varchar(80)"
        },
        {
          "name": "passed",
          "type": "boolean"
        }
      ]
    },
    "explanation": "VehicleInspection zaif jadvali loyihalandi."
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "4-Qavat • O'rta",
    "source": "L02 Slide 35 • Student Term GPA Weak Entity",
    "title": "Semestr Baholari Zaif Entitiyasi (TermGpa)",
    "story": "Talabaning har bir semestr bo'yicha GPA ko'rsatkichi `TermGpa` talabaga bog'liq. Ota kalit: `studentId`, qisman kalit: `termCode`.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table TermGpa { studentId int [ref: > Student.studentId] termCode varchar gpaValue decimal indexes { (studentId, termCode) [pk] } }",
      "TermGpa(studentId [PK, FK], termCode [PK], gpaValue)"
    ],
    "expectedSchema": {
      "tableName": "TermGpa",
      "columns": [
        {
          "name": "studentId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Student(studentId)"
        },
        {
          "name": "termCode",
          "type": "varchar(10)",
          "isPK": true
        },
        {
          "name": "gpaValue",
          "type": "decimal"
        }
      ]
    },
    "explanation": "TermGpa zaif entitiyasi loyihalandi."
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "4-Qavat • Qiyin (4-Qavat Bossi)",
    "source": "L02 Slide 35 • Weak Entity Boss",
    "title": "4-Qavat Bossi: Bemor Tashrif Kundaligi (PatientLog)",
    "story": "Shifoxonada bemor `Patient(patientId, fullName)` ota entitiyasi va uning har kungi tibbiy qaydlari `PatientLog` zaif entitiyasi bor. Qisman kalit: `entryDate`. Qaydlar otasiz yashay olmaydi.",
    "taskUz": "Zaif entitiy va uning egasi (ota entitiy) uchun relyatsion jadvallarni loyihalang. Zaif jadvalning kompozit kalitini ([PK,FK1]) to'g'ri shakllantiring.",
    "starterCode": "// Ota jadval va [PK,FK1] kompozit kalitli zaif bola jadvalini yarating",
    "hint": "Zaif entitiyning kaliti = (Ota_PK + Qisman_Kalit). Shuning uchun ota kaliti ham PK, ham FK bo'ladi.",
    "solutions": [
      "Table Patient { patientId varchar [pk] fullName varchar } Table PatientLog { patientId varchar [ref: > Patient.patientId] entryDate date doctorNotes text diagnosis varchar indexes { (patientId, entryDate) [pk] } }",
      "Patient(patientId [PK], fullName)\nPatientLog(patientId [PK, FK], entryDate [PK], doctorNotes, diagnosis)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Patient",
          "columns": [
            {
              "name": "patientId",
              "type": "varchar(15)",
              "isPK": true
            },
            {
              "name": "fullName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "PatientLog",
          "columns": [
            {
              "name": "patientId",
              "type": "varchar(15)",
              "isPK": true,
              "isFK": true,
              "references": "Patient(patientId)"
            },
            {
              "name": "entryDate",
              "type": "date",
              "isPK": true
            },
            {
              "name": "doctorNotes",
              "type": "text"
            },
            {
              "name": "diagnosis",
              "type": "varchar(100)"
            }
          ]
        }
      ]
    },
    "explanation": "4-Qavat Bossi: Ota Patient va zaif bola PatientLog sxemasi mukammal loyihalandi."
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "5-Qavat • Boshlang'ich",
    "source": "L02 Slide 37 & T02 Task 1 • Manages 1:1",
    "title": "Bo'lim Boshqaruvi 1:1 Sxemasi (Manages)",
    "story": "Kompaniyada departament va xodim o'rtasida `Manages` 1:1 aloqasi bor. Departament uchun boshqaruvchi majburiy, shuning uchun FK NULL lardan qochish maqsadida `Department` ga qo'yiladi va 1:1 bo'lishi uchun `managerId` ga unikal [UQ] belgisi beriladi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Department { deptNo int [pk] dName varchar managerId int [unique, ref: - Employee.empNo] } Table Employee { empNo int [pk] name varchar }",
      "Department(deptNo [PK], dName, managerId [UQ, FK -> Employee])\nEmployee(empNo [PK], name)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Department",
          "columns": [
            {
              "name": "deptNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "dName",
              "type": "varchar(50)"
            },
            {
              "name": "managerId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "Employee(empNo)"
            }
          ]
        },
        {
          "tableName": "Employee",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(80)"
            }
          ]
        }
      ]
    },
    "explanation": "1:1 munosabat muvaffaqiyatli chizildi: managerId unikal [UQ] qilinib Department ga qo'yildi."
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "5-Qavat • Boshlang'ich",
    "source": "L02 Slide 37 • Car-Driver 1:1",
    "title": "Mashina va Haydovchi 1:1 Sxemasi (Car <-> Driver)",
    "story": "Har bir xizmat mashinasi aniq bitta haydovchiga biriktirilgan. Mashina uchun haydovchi majburiy.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Car { vin varchar [pk] model varchar driverId int [unique, ref: - Driver.driverId] } Table Driver { driverId int [pk] driverName varchar }",
      "Car(vin [PK], model, driverId [UQ, FK -> Driver])\nDriver(driverId [PK], driverName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Car",
          "columns": [
            {
              "name": "vin",
              "type": "varchar(20)",
              "isPK": true
            },
            {
              "name": "model",
              "type": "varchar(50)"
            },
            {
              "name": "driverId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "Driver(driverId)"
            }
          ]
        },
        {
          "tableName": "Driver",
          "columns": [
            {
              "name": "driverId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "driverName",
              "type": "varchar(80)"
            }
          ]
        }
      ]
    },
    "explanation": "Car va Driver 1:1 sxemasi loyihalandi."
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Patient-MedicalCard 1:1",
    "title": "Bemor va Tibbiy Karta 1:1 Sxemasi (Patient <-> MedicalCard)",
    "story": "Har bir tibbiy karta aniq bitta bemorga ochiladi va bemor uchun karta ochilishi majburiy.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Patient { patientId varchar [pk] fullName varchar } Table MedicalCard { cardNo varchar [pk] issueDate date patientId varchar [unique, ref: - Patient.patientId] }",
      "Patient(patientId [PK], fullName)\nMedicalCard(cardNo [PK], issueDate, patientId [UQ, FK -> Patient])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Patient",
          "columns": [
            {
              "name": "patientId",
              "type": "varchar(15)",
              "isPK": true
            },
            {
              "name": "fullName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "MedicalCard",
          "columns": [
            {
              "name": "cardNo",
              "type": "varchar(15)",
              "isPK": true
            },
            {
              "name": "issueDate",
              "type": "date"
            },
            {
              "name": "patientId",
              "type": "varchar(15)",
              "isFK": true,
              "isUQ": true,
              "references": "Patient(patientId)"
            }
          ]
        }
      ]
    },
    "explanation": "MedicalCard 1:1 aloqasi unikal patientId bilan chizildi."
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Citizen-Passport 1:1",
    "title": "Fuqaro va Pasport 1:1 Sxemasi (Citizen <-> Passport)",
    "story": "Pasport aniq bitta fuqaroga tegishli bo'lib, uning JSHSHIR (pinfl) raqami pasportda unikal tashqi kalit bo'ladi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Citizen { pinfl varchar [pk] fullName varchar } Table Passport { passNo varchar [pk] expiryDate date pinfl varchar [unique, ref: - Citizen.pinfl] }",
      "Citizen(pinfl [PK], fullName)\nPassport(passNo [PK], expiryDate, pinfl [UQ, FK -> Citizen])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Citizen",
          "columns": [
            {
              "name": "pinfl",
              "type": "varchar(14)",
              "isPK": true
            },
            {
              "name": "fullName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Passport",
          "columns": [
            {
              "name": "passNo",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "expiryDate",
              "type": "date"
            },
            {
              "name": "pinfl",
              "type": "varchar(14)",
              "isFK": true,
              "isUQ": true,
              "references": "Citizen(pinfl)"
            }
          ]
        }
      ]
    },
    "explanation": "Citizen va Passport 1:1 sxemasi yaratildi."
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Club-Stadium 1:1",
    "title": "Futbol Klubi va Stadion 1:1 Sxemasi (Club <-> Stadium)",
    "story": "Har bir stadion bitta klubning uy stadioni hisoblanadi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table FootballClub { clubId int [pk] clubName varchar } Table Stadium { stadiumId int [pk] capacity int clubId int [unique, ref: - FootballClub.clubId] }",
      "FootballClub(clubId [PK], clubName)\nStadium(stadiumId [PK], capacity, clubId [UQ, FK -> FootballClub])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "FootballClub",
          "columns": [
            {
              "name": "clubId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "clubName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Stadium",
          "columns": [
            {
              "name": "stadiumId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "capacity",
              "type": "integer"
            },
            {
              "name": "clubId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "FootballClub(clubId)"
            }
          ]
        }
      ]
    },
    "explanation": "FootballClub va Stadium 1:1 sxemasi tuzildi."
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • 1:1 Relationship Attribute Placement",
    "title": "1:1 Aloqa Atributi Joylashuvi: Boshqaruv Sanasi (startDate)",
    "story": "1:1 munosabatdagi aloqa atributi (`startDate`) har doim Tashqi Kalit qayerga tushsa, o'sha jadvalga qo'shiladi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Department { deptNo int [pk] dName varchar managerId int [unique, ref: - Employee.empNo] startDate date }",
      "Department(deptNo [PK], dName, managerId [UQ, FK], startDate)"
    ],
    "expectedSchema": {
      "tableName": "Department",
      "columns": [
        {
          "name": "deptNo",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "dName",
          "type": "varchar(50)"
        },
        {
          "name": "managerId",
          "type": "integer",
          "isFK": true,
          "isUQ": true
        },
        {
          "name": "startDate",
          "type": "date"
        }
      ]
    },
    "explanation": "startDate atributi managerId bilan birga Department ga joylashtirildi."
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Store-Manager 1:1",
    "title": "Do'kon va Menejer 1:1 Sxemasi (Store <-> StoreManager)",
    "story": "Har bir supermarket filialida aniq bitta bosh menejer ishlaydi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Store { storeId int [pk] location varchar managerId int [unique, ref: - StoreManager.managerId] } Table StoreManager { managerId int [pk] fullName varchar }",
      "Store(storeId [PK], location, managerId [UQ, FK -> StoreManager])\nStoreManager(managerId [PK], fullName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Store",
          "columns": [
            {
              "name": "storeId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "location",
              "type": "varchar(50)"
            },
            {
              "name": "managerId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "StoreManager(managerId)"
            }
          ]
        },
        {
          "tableName": "StoreManager",
          "columns": [
            {
              "name": "managerId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "fullName",
              "type": "varchar(80)"
            }
          ]
        }
      ]
    },
    "explanation": "Store va StoreManager 1:1 sxemasi loyihalandi."
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Computer-Workstation 1:1",
    "title": "Ish Stoli va Tarmoq IP 1:1 Sxemasi (Workstation <-> NetworkIP)",
    "story": "Har bir kompyuterga aniq bitta statik IP biriktirilgan.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Workstation { pcId varchar [pk] model varchar ipAddress varchar [unique, ref: - NetworkIP.ipAddress] } Table NetworkIP { ipAddress varchar [pk] subnet varchar }",
      "Workstation(pcId [PK], model, ipAddress [UQ, FK -> NetworkIP])\nNetworkIP(ipAddress [PK], subnet)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Workstation",
          "columns": [
            {
              "name": "pcId",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "model",
              "type": "varchar(50)"
            },
            {
              "name": "ipAddress",
              "type": "varchar(15)",
              "isFK": true,
              "isUQ": true,
              "references": "NetworkIP(ipAddress)"
            }
          ]
        },
        {
          "tableName": "NetworkIP",
          "columns": [
            {
              "name": "ipAddress",
              "type": "varchar(15)",
              "isPK": true
            },
            {
              "name": "subnet",
              "type": "varchar(20)"
            }
          ]
        }
      ]
    },
    "explanation": "Workstation va NetworkIP 1:1 sxemasi chizildi."
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Merging Relations in Total-Total 1:1",
    "title": "Total-Total 1:1: Birlashtirilgan Yagona Jadval (UserAccountMerged)",
    "story": "Agar 1:1 aloqaning har ikkala tomoni ham majburiy bo'lsa (Total-Total), ularni bitta jadvalga birlashtirish (merge) JOIN larni yo'qotish uchun eng afzal yechimdir.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table UserSecurityMerged { userId int [pk] username varchar passwordHash varchar twoFactorEnabled boolean }",
      "UserSecurityMerged(userId [PK], username, passwordHash, twoFactorEnabled)"
    ],
    "expectedSchema": {
      "tableName": "UserSecurityMerged",
      "columns": [
        {
          "name": "userId",
          "type": "integer",
          "isPK": true
        },
        {
          "name": "username",
          "type": "varchar(50)"
        },
        {
          "name": "passwordHash",
          "type": "varchar(100)"
        },
        {
          "name": "twoFactorEnabled",
          "type": "boolean"
        }
      ]
    },
    "explanation": "Total-Total 1:1 aloqa yagona jadvalga muvaffaqiyatli birlashtirildi (merge)."
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Faculty-Dean 1:1",
    "title": "Fakultet va Dekan 1:1 Sxemasi (Faculty <-> Dean)",
    "story": "Har bir fakultetda bitta dekan bor. Dekanlik ixtiyoriy, lekin fakultet uchun dekan bo'lishi majburiy.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Faculty { facId int [pk] facName varchar deanId int [unique, ref: - Professor.profId] } Table Professor { profId int [pk] profName varchar }",
      "Faculty(facId [PK], facName, deanId [UQ, FK -> Professor])\nProfessor(profId [PK], profName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Faculty",
          "columns": [
            {
              "name": "facId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "facName",
              "type": "varchar(80)"
            },
            {
              "name": "deanId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "Professor(profId)"
            }
          ]
        },
        {
          "tableName": "Professor",
          "columns": [
            {
              "name": "profId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "profName",
              "type": "varchar(80)"
            }
          ]
        }
      ]
    },
    "explanation": "Faculty va Professor 1:1 sxemasi loyihalandi."
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Vessel-Captain 1:1",
    "title": "Kema va Kapitan 1:1 Sxemasi (Vessel <-> SeaCaptain)",
    "story": "Dengiz kemasida aniq bitta mas'ul kapitan bo'ladi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Vessel { imoNumber varchar [pk] vesselName varchar captainId int [unique, ref: - SeaCaptain.captainId] } Table SeaCaptain { captainId int [pk] captainName varchar }",
      "Vessel(imoNumber [PK], vesselName, captainId [UQ, FK -> SeaCaptain])\nSeaCaptain(captainId [PK], captainName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Vessel",
          "columns": [
            {
              "name": "imoNumber",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "vesselName",
              "type": "varchar(80)"
            },
            {
              "name": "captainId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "SeaCaptain(captainId)"
            }
          ]
        },
        {
          "tableName": "SeaCaptain",
          "columns": [
            {
              "name": "captainId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "captainName",
              "type": "varchar(80)"
            }
          ]
        }
      ]
    },
    "explanation": "Vessel va SeaCaptain 1:1 sxemasi tuzildi."
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Branch-HeadStaff 1:1",
    "title": "Filial Mudiri 1:1 Sxemasi (BranchHead)",
    "story": "Bank filialiga xodimlardan biri mudir qilib tayinlanadi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table BankBranch { branchCode varchar [pk] city varchar headEmpNo int [unique, ref: - BankStaff.empNo] } Table BankStaff { empNo int [pk] staffName varchar }",
      "BankBranch(branchCode [PK], city, headEmpNo [UQ, FK -> BankStaff])\nBankStaff(empNo [PK], staffName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "BankBranch",
          "columns": [
            {
              "name": "branchCode",
              "type": "varchar(10)",
              "isPK": true
            },
            {
              "name": "city",
              "type": "varchar(50)"
            },
            {
              "name": "headEmpNo",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "BankStaff(empNo)"
            }
          ]
        },
        {
          "tableName": "BankStaff",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "staffName",
              "type": "varchar(80)"
            }
          ]
        }
      ]
    },
    "explanation": "BankBranch va BankStaff 1:1 sxemasi chizildi."
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Country-CapitalCity 1:1",
    "title": "Davlat va Poytaxt 1:1 Sxemasi (Country <-> CapitalCity)",
    "story": "Har bir davlatning bitta poytaxti bor.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table CountryState { countryId varchar [pk] countryName varchar capitalCityId int [unique, ref: - CapitalCity.cityId] } Table CapitalCity { cityId int [pk] cityName varchar }",
      "CountryState(countryId [PK], countryName, capitalCityId [UQ, FK -> CapitalCity])\nCapitalCity(cityId [PK], cityName)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "CountryState",
          "columns": [
            {
              "name": "countryId",
              "type": "varchar(5)",
              "isPK": true
            },
            {
              "name": "countryName",
              "type": "varchar(60)"
            },
            {
              "name": "capitalCityId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "CapitalCity(cityId)"
            }
          ]
        },
        {
          "tableName": "CapitalCity",
          "columns": [
            {
              "name": "cityId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "cityName",
              "type": "varchar(60)"
            }
          ]
        }
      ]
    },
    "explanation": "CountryState va CapitalCity 1:1 sxemasi loyihalandi."
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "5-Qavat • O'rta",
    "source": "L02 Slide 37 • Account-SecurityProfile 1:1",
    "title": "Foydalanuvchi va Xavfsizlik Profili 1:1 Sxemasi (Account <-> SecurityProfile)",
    "story": "Foydalanuvchi hisobi o'zining xavfsizlik profiliga 1:1 bog'langan.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table UserAccount { accId int [pk] email varchar } Table SecurityProfile { profileId int [pk] pinCode varchar accId int [unique, ref: - UserAccount.accId] }",
      "UserAccount(accId [PK], email)\nSecurityProfile(profileId [PK], pinCode, accId [UQ, FK -> UserAccount])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "UserAccount",
          "columns": [
            {
              "name": "accId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "email",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "SecurityProfile",
          "columns": [
            {
              "name": "profileId",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "pinCode",
              "type": "varchar(10)"
            },
            {
              "name": "accId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "UserAccount(accId)"
            }
          ]
        }
      ]
    },
    "explanation": "UserAccount va SecurityProfile 1:1 sxemasi tuzildi."
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "5-Qavat • Qiyin (5-Qavat Bossi)",
    "source": "T02 Task 1 & L02 Slide 37 • 1:1 Executive Governance Boss",
    "title": "5-Qavat Bossi: Boshqaruv Me'moriyati (Department <-> Manager)",
    "story": "Kompaniyada `Department(deptNo, dName, budget)` departamenti va `Employee(empNo, name, salary)` xodimi o'rtasida 1:1 boshqaruv aloqasi bor. Boshqaruv sanasi `startDate` ham saqlanadi. 100% departamentlar boshqaruvchiga ega bo'lishi shart.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Department { deptNo int [pk] dName varchar budget decimal managerId int [unique, ref: - Employee.empNo] startDate date } Table Employee { empNo int [pk] name varchar salary decimal }",
      "Department(deptNo [PK], dName, budget, managerId [UQ, FK -> Employee], startDate)\nEmployee(empNo [PK], name, salary)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Department",
          "columns": [
            {
              "name": "deptNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "dName",
              "type": "varchar(50)"
            },
            {
              "name": "budget",
              "type": "decimal"
            },
            {
              "name": "managerId",
              "type": "integer",
              "isFK": true,
              "isUQ": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "startDate",
              "type": "date"
            }
          ]
        },
        {
          "tableName": "Employee",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(80)"
            },
            {
              "name": "salary",
              "type": "decimal"
            }
          ]
        }
      ]
    },
    "explanation": "5-Qavat Bossi: 1:1 boshqaruv me'moriyati managerId [UQ, FK] bilan mukammal chizildi."
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "6-Qavat • Boshlang'ich",
    "source": "T02 Task 1 • Assigned Bridge Relation",
    "title": "Loyiha Biriktiruvi Bog'lovchi Jadvali (Assigned)",
    "story": "Seminar 2 Task 1: `Employee(empNo)` va `Project(projNo)` o'rtasida ko'pga-ko'p `Assigned` aloqasi bor. Step 5 ga binoan u alohida oraliq jadval bilan hal qilinadi.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table Assigned { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] indexes { (empNo, projNo) [pk] } }",
      "Assigned(empNo [PK, FK], projNo [PK, FK])"
    ],
    "expectedSchema": {
      "tableName": "Assigned",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "projNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Project(projNo)"
        }
      ]
    },
    "explanation": "Assigned oraliq bog'lovchi jadvali Step 5 ga muvofiq kompozit PK bilan yaratildi."
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "6-Qavat • Boshlang'ich",
    "source": "L02 Slide 38 & T02 Task 4 • WorksOn with Hours Attribute",
    "title": "Ish Soati Atributli WorksOn Bog'lovchi Jadvali",
    "story": "Xodim loyihada ishlash vaqti `hours` aloqa atributi bo'lib, u oraliq bog'lovchi jadvalga tushadi.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table WorksOn { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] hours int indexes { (empNo, projNo) [pk] } }",
      "WorksOn(empNo [PK, FK], projNo [PK, FK], hours)"
    ],
    "expectedSchema": {
      "tableName": "WorksOn",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "projNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Project(projNo)"
        },
        {
          "name": "hours",
          "type": "integer"
        }
      ]
    },
    "explanation": "WorksOn oraliq jadvali hours atributi bilan loyihalandi."
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Student-Course Enrollment",
    "title": "Talaba va Kurs Ro'yxatdan O'tishi (Enrollment)",
    "story": "Talaba ko'plab kurslarda, kurs ko'plab talabalarda (`Enrollment` *:*). Baho: `grade`.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table Enrollment { studentId int [ref: > Student.studentId] courseCode varchar [ref: > Course.courseCode] grade varchar indexes { (studentId, courseCode) [pk] } }",
      "Enrollment(studentId [PK, FK], courseCode [PK, FK], grade)"
    ],
    "expectedSchema": {
      "tableName": "Enrollment",
      "columns": [
        {
          "name": "studentId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Student(studentId)"
        },
        {
          "name": "courseCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Course(courseCode)"
        },
        {
          "name": "grade",
          "type": "varchar(5)"
        }
      ]
    },
    "explanation": "Enrollment oraliq jadvali chizildi."
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Book-Author Many-to-Many",
    "title": "Kitob va Muallif Bog'lovchi Jadvali (BookAuthor)",
    "story": "Kitob bir nechta muallifga, muallif bir nechta kitobga ega bo'lishi mumkin.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table BookAuthor { isbn varchar [ref: > Book.isbn] authorId int [ref: > Author.authorId] contributionRole varchar indexes { (isbn, authorId) [pk] } }",
      "BookAuthor(isbn [PK, FK], authorId [PK, FK], contributionRole)"
    ],
    "expectedSchema": {
      "tableName": "BookAuthor",
      "columns": [
        {
          "name": "isbn",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Book(isbn)"
        },
        {
          "name": "authorId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Author(authorId)"
        },
        {
          "name": "contributionRole",
          "type": "varchar(50)"
        }
      ]
    },
    "explanation": "BookAuthor oraliq jadvali loyihalandi."
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Doctor-Patient Appointment",
    "title": "Shifokor Qabuli Bog'lovchi Jadvali (Appointment)",
    "story": "Shifokor ko'plab bemorlarni qabul qiladi, bemor bir nechta shifokorga ko'rinishi mumkin.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table Appointment { doctorId int [ref: > Doctor.doctorId] patientId varchar [ref: > Patient.patientId] apptDate timestamp consultationNotes text indexes { (doctorId, patientId, apptDate) [pk] } }",
      "Appointment(doctorId [PK, FK], patientId [PK, FK], apptDate [PK], consultationNotes)"
    ],
    "expectedSchema": {
      "tableName": "Appointment",
      "columns": [
        {
          "name": "doctorId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Doctor(doctorId)"
        },
        {
          "name": "patientId",
          "type": "varchar(15)",
          "isPK": true,
          "isFK": true,
          "references": "Patient(patientId)"
        },
        {
          "name": "apptDate",
          "type": "timestamp",
          "isPK": true
        },
        {
          "name": "consultationNotes",
          "type": "text"
        }
      ]
    },
    "explanation": "Appointment ko'pga-ko'p jadvali chizildi."
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Actor-Movie Cast",
    "title": "Film va Aktyor: Cast Bog'lovchi Jadvali",
    "story": "Aktyor bir nechta filmda rol o'ynaydi. Qahramon nomi `characterName` oraliq jadvalda saqlanadi.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table MovieCast { movieId int [ref: > Movie.movieId] actorId int [ref: > Actor.actorId] characterName varchar indexes { (movieId, actorId) [pk] } }",
      "MovieCast(movieId [PK, FK], actorId [PK, FK], characterName)"
    ],
    "expectedSchema": {
      "tableName": "MovieCast",
      "columns": [
        {
          "name": "movieId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Movie(movieId)"
        },
        {
          "name": "actorId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Actor(actorId)"
        },
        {
          "name": "characterName",
          "type": "varchar(80)"
        }
      ]
    },
    "explanation": "MovieCast oraliq jadvali loyihalandi."
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Supplier-Part Shipment",
    "title": "Ta'minotchi va Detallar Bog'lovchi Jadvali (Shipment)",
    "story": "Ta'minotchi turli qismlarni jo'natadi: miqdor `quantity` va yetkazish sanasi `shipDate`.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table Shipment { suppId varchar [ref: > Supplier.suppId] partId varchar [ref: > Part.partId] shipDate date quantity int indexes { (suppId, partId, shipDate) [pk] } }",
      "Shipment(suppId [PK, FK], partId [PK, FK], shipDate [PK], quantity)"
    ],
    "expectedSchema": {
      "tableName": "Shipment",
      "columns": [
        {
          "name": "suppId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Supplier(suppId)"
        },
        {
          "name": "partId",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Part(partId)"
        },
        {
          "name": "shipDate",
          "type": "date",
          "isPK": true
        },
        {
          "name": "quantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "Shipment ko'pga-ko'p bog'lovchi jadvali yaratildi."
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • User-Role Assignment",
    "title": "Foydalanuvchi va Rollar Bog'lovchi Jadvali (UserRole)",
    "story": "Foydalanuvchi tizimda bir nechta rolga ega bo'lishi mumkin (Admin, Manager, User).",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table UserRole { userId int [ref: > AppUser.userId] roleId int [ref: > Role.roleId] assignedDate date indexes { (userId, roleId) [pk] } }",
      "UserRole(userId [PK, FK], roleId [PK, FK], assignedDate)"
    ],
    "expectedSchema": {
      "tableName": "UserRole",
      "columns": [
        {
          "name": "userId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "AppUser(userId)"
        },
        {
          "name": "roleId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Role(roleId)"
        },
        {
          "name": "assignedDate",
          "type": "date"
        }
      ]
    },
    "explanation": "UserRole oraliq jadvali chizildi."
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Order-Product Bridge",
    "title": "Buyurtma va Mahsulotlar Bog'lovchi Jadvali (OrderItemBridge)",
    "story": "Buyurtmada bir nechta mahsulot, bitta mahsulot ko'p buyurtmada.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table OrderItemBridge { orderNo int [ref: > CustomerOrder.orderNo] productCode varchar [ref: > Product.productCode] unitPrice decimal quantity int indexes { (orderNo, productCode) [pk] } }",
      "OrderItemBridge(orderNo [PK, FK], productCode [PK, FK], unitPrice, quantity)"
    ],
    "expectedSchema": {
      "tableName": "OrderItemBridge",
      "columns": [
        {
          "name": "orderNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "CustomerOrder(orderNo)"
        },
        {
          "name": "productCode",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Product(productCode)"
        },
        {
          "name": "unitPrice",
          "type": "decimal"
        },
        {
          "name": "quantity",
          "type": "integer"
        }
      ]
    },
    "explanation": "OrderItemBridge oraliq jadvali loyihalandi."
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Customer-Promotion Redemption",
    "title": "Promokod va Mijoz Bog'lovchi Jadvali (PromoRedeem)",
    "story": "Mijoz promokoddan foydalangan vaqt `redeemTimestamp` oraliq jadvalda qayd etiladi.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table PromoRedeem { custId int [ref: > Customer.custId] promoCode varchar [ref: > Promotion.promoCode] discountApplied decimal indexes { (custId, promoCode) [pk] } }",
      "PromoRedeem(custId [PK, FK], promoCode [PK, FK], discountApplied)"
    ],
    "expectedSchema": {
      "tableName": "PromoRedeem",
      "columns": [
        {
          "name": "custId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Customer(custId)"
        },
        {
          "name": "promoCode",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Promotion(promoCode)"
        },
        {
          "name": "discountApplied",
          "type": "decimal"
        }
      ]
    },
    "explanation": "PromoRedeem oraliq jadvali yaratildi."
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Passenger-Flight Booking",
    "title": "Yo'lovchi va Parvoz Chiptasi Bog'lovchi Jadvali (FlightBooking)",
    "story": "Yo'lovchi reysga joy band qiladi: chipta narxi `ticketFare`.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table FlightBooking { passengerId varchar [ref: > Passenger.passengerId] flightNo varchar [ref: > Flight.flightNo] flightDate date ticketFare decimal indexes { (passengerId, flightNo, flightDate) [pk] } }",
      "FlightBooking(passengerId [PK, FK], flightNo [PK, FK], flightDate [PK], ticketFare)"
    ],
    "expectedSchema": {
      "tableName": "FlightBooking",
      "columns": [
        {
          "name": "passengerId",
          "type": "varchar(15)",
          "isPK": true,
          "isFK": true,
          "references": "Passenger(passengerId)"
        },
        {
          "name": "flightNo",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Flight(flightNo)"
        },
        {
          "name": "flightDate",
          "type": "date",
          "isPK": true
        },
        {
          "name": "ticketFare",
          "type": "decimal"
        }
      ]
    },
    "explanation": "FlightBooking oraliq jadvali loyihalandi."
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Musician-Band Membership",
    "title": "Musiqachi va Guruh A'zoligi (BandMember)",
    "story": "Musiqachi bir nechta guruhda chalishi mumkin: cholg'u asbobi `instrument`.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table BandMember { bandId int [ref: > MusicBand.bandId] musicianId int [ref: > Musician.musicianId] instrument varchar indexes { (bandId, musicianId) [pk] } }",
      "BandMember(bandId [PK, FK], musicianId [PK, FK], instrument)"
    ],
    "expectedSchema": {
      "tableName": "BandMember",
      "columns": [
        {
          "name": "bandId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "MusicBand(bandId)"
        },
        {
          "name": "musicianId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Musician(musicianId)"
        },
        {
          "name": "instrument",
          "type": "varchar(50)"
        }
      ]
    },
    "explanation": "BandMember oraliq jadvali tuzildi."
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Driver-Vehicle Trip",
    "title": "Haydovchi va Mashina Sayohati (DriverTrip)",
    "story": "Kompaniya mashinasida har kuni turlicha haydovchi qatnaydi.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table DriverTrip { vin varchar [ref: > Vehicle.vin] driverId int [ref: > Driver.driverId] tripDate date distanceKm decimal indexes { (vin, driverId, tripDate) [pk] } }",
      "DriverTrip(vin [PK, FK], driverId [PK, FK], tripDate [PK], distanceKm)"
    ],
    "expectedSchema": {
      "tableName": "DriverTrip",
      "columns": [
        {
          "name": "vin",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Vehicle(vin)"
        },
        {
          "name": "driverId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Driver(driverId)"
        },
        {
          "name": "tripDate",
          "type": "date",
          "isPK": true
        },
        {
          "name": "distanceKm",
          "type": "decimal"
        }
      ]
    },
    "explanation": "DriverTrip oraliq jadvali loyihalandi."
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "6-Qavat • O'rta",
    "source": "L02 Slide 38 • Student-Club Membership",
    "title": "Talabalar Klubi A'zoligi (ClubMembership)",
    "story": "Talaba universitetdagi bir nechta to'garak va klublarga a'zo bo'ladi.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table ClubMembership { studentId int [ref: > Student.studentId] clubCode varchar [ref: > StudentClub.clubCode] joinedDate date indexes { (studentId, clubCode) [pk] } }",
      "ClubMembership(studentId [PK, FK], clubCode [PK, FK], joinedDate)"
    ],
    "expectedSchema": {
      "tableName": "ClubMembership",
      "columns": [
        {
          "name": "studentId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Student(studentId)"
        },
        {
          "name": "clubCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "StudentClub(clubCode)"
        },
        {
          "name": "joinedDate",
          "type": "date"
        }
      ]
    },
    "explanation": "ClubMembership oraliq jadvali chizildi."
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "6-Qavat • Qiyin (6-Qavat Bossi)",
    "source": "T02 Task 1 & L02 Slide 38 • Many-to-Many Architecture Boss",
    "title": "6-Qavat Bossi: 3 Jadvalli To'liq Loyiha Biriktiruvi Tizimi",
    "story": "Kompaniyada xodim `Employee(empNo, name)`, loyiha `Project(projNo, pName)` va ularni bog'lovchi `WorksOn(empNo, projNo, hours)` oraliq jadvali bor. Barcha 3 ta jadval to'liq loyihalanishi kerak.",
    "taskUz": "*:* (M:N) munosabatni relying modelga o'tkazish uchun zarur jadvallarni, jumladan ikkala tomonni bog'lovchi Oraliq (Junction/Bridge) jadvalini loyihalang.",
    "starterCode": "// 2 ta asosiy jadval va 1 ta oraliq kompozit jadvalni loyihalang",
    "hint": "*:* aloqa to'g'ridan-to'g'ri ifodalanmaydi — ikkala jadvalning PK larini o'zida saqlovchi uchinchi oraliq jadval shart.",
    "solutions": [
      "Table Employee { empNo int [pk] name varchar } Table Project { projNo int [pk] pName varchar } Table WorksOn { empNo int [ref: > Employee.empNo] projNo int [ref: > Project.projNo] hours int indexes { (empNo, projNo) [pk] } }",
      "Employee(empNo [PK], name)\nProject(projNo [PK], pName)\nWorksOn(empNo [PK, FK], projNo [PK, FK], hours)"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Employee",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "name",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "Project",
          "columns": [
            {
              "name": "projNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "pName",
              "type": "varchar(80)"
            }
          ]
        },
        {
          "tableName": "WorksOn",
          "columns": [
            {
              "name": "empNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Employee(empNo)"
            },
            {
              "name": "projNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Project(projNo)"
            },
            {
              "name": "hours",
              "type": "integer"
            }
          ]
        }
      ]
    },
    "explanation": "6-Qavat Bossi: 3 jadvalli to'liq ko'pga-ko'p relyatsion arxitektura mukammal loyihalandi."
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "7-Qavat • Boshlang'ich",
    "source": "T02 Task 1 & L02 Slide 40 • Department Phone Multi-valued",
    "title": "Bo'lim Telefonlari Jadvali (DeptPhone)",
    "story": "Seminar 2 Task 1: Bo'lim ko'plab telefonlarga ega bo'lishi mumkin `Phone[1..*]`. 1NF atomiklik qoidasini saqlash uchun alohida jadval ochiladi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table DeptPhone { deptNo int [ref: > Department.deptNo] phone varchar indexes { (deptNo, phone) [pk] } }",
      "DeptPhone(deptNo [PK, FK], phone [PK])"
    ],
    "expectedSchema": {
      "tableName": "DeptPhone",
      "columns": [
        {
          "name": "deptNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Department(deptNo)"
        },
        {
          "name": "phone",
          "type": "varchar(25)",
          "isPK": true
        }
      ]
    },
    "explanation": "DeptPhone ko'p qiymatli atribut jadvali Step 6 asosida chizildi."
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "7-Qavat • Boshlang'ich",
    "source": "L02 Slide 40 • Employee Skills Multi-valued",
    "title": "Xodim Ko'nikmalari Jadvali (EmpSkill)",
    "story": "Xodim bir nechta dasturlash ko'nikmalariga ega bo'lishi mumkin: `Skill[*]`.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table EmpSkill { empNo int [ref: > Employee.empNo] skillName varchar indexes { (empNo, skillName) [pk] } }",
      "EmpSkill(empNo [PK, FK], skillName [PK])"
    ],
    "expectedSchema": {
      "tableName": "EmpSkill",
      "columns": [
        {
          "name": "empNo",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Employee(empNo)"
        },
        {
          "name": "skillName",
          "type": "varchar(50)",
          "isPK": true
        }
      ]
    },
    "explanation": "EmpSkill ko'p qiymatli atribut jadvali loyihalandi."
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Student Hobby Multi-valued",
    "title": "Talaba Qiziqishlari Jadvali (StudentHobby)",
    "story": "Talabaning sevimli mashg'ulotlari `Hobby[*]`: shaxmat, futbol, rasm chizish.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table StudentHobby { studentId int [ref: > Student.studentId] hobbyName varchar indexes { (studentId, hobbyName) [pk] } }",
      "StudentHobby(studentId [PK, FK], hobbyName [PK])"
    ],
    "expectedSchema": {
      "tableName": "StudentHobby",
      "columns": [
        {
          "name": "studentId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Student(studentId)"
        },
        {
          "name": "hobbyName",
          "type": "varchar(50)",
          "isPK": true
        }
      ]
    },
    "explanation": "StudentHobby jadvali chizildi."
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Company Location Multi-valued",
    "title": "Kompaniya Shaharlari Jadvali (CompLocation)",
    "story": "Kompaniya bir nechta shaharda ofisiga ega bo'lishi mumkin `Location[*]`: Toshkent, Samarqand, London.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table CompLocation { compCode varchar [ref: > Company.compCode] locationName varchar indexes { (compCode, locationName) [pk] } }",
      "CompLocation(compCode [PK, FK], locationName [PK])"
    ],
    "expectedSchema": {
      "tableName": "CompLocation",
      "columns": [
        {
          "name": "compCode",
          "type": "varchar(10)",
          "isPK": true,
          "isFK": true,
          "references": "Company(compCode)"
        },
        {
          "name": "locationName",
          "type": "varchar(60)",
          "isPK": true
        }
      ]
    },
    "explanation": "CompLocation ko'p qiymatli jadvali loyihalandi."
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Product Color Multi-valued",
    "title": "Mahsulot Ranglari Jadvali (ProductColor)",
    "story": "Mahsulot bir nechta ranglarda mavjud bo'ladi: qora, oq, ko'k.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table ProductColor { productCode varchar [ref: > Product.productCode] colorName varchar indexes { (productCode, colorName) [pk] } }",
      "ProductColor(productCode [PK, FK], colorName [PK])"
    ],
    "expectedSchema": {
      "tableName": "ProductColor",
      "columns": [
        {
          "name": "productCode",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Product(productCode)"
        },
        {
          "name": "colorName",
          "type": "varchar(30)",
          "isPK": true
        }
      ]
    },
    "explanation": "ProductColor jadvali tuzildi."
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Applicant Language Multi-valued",
    "title": "Nomzod Tillari Jadvali (ApplicantLang)",
    "story": "Nomzod bir nechta xorijiy tillarni bilishi mumkin: `Language[*]`. Qo'shimcha ravishda daraja `proficiencyLevel` mavjud.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table ApplicantLang { applicantId int [ref: > Applicant.applicantId] languageName varchar proficiencyLevel varchar indexes { (applicantId, languageName) [pk] } }",
      "ApplicantLang(applicantId [PK, FK], languageName [PK], proficiencyLevel)"
    ],
    "expectedSchema": {
      "tableName": "ApplicantLang",
      "columns": [
        {
          "name": "applicantId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Applicant(applicantId)"
        },
        {
          "name": "languageName",
          "type": "varchar(40)",
          "isPK": true
        },
        {
          "name": "proficiencyLevel",
          "type": "varchar(10)"
        }
      ]
    },
    "explanation": "ApplicantLang jadvali chizildi."
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Author Email Multi-valued",
    "title": "Muallif Elektron Pochtalari (AuthorEmail)",
    "story": "Muallif bir nechta e-mail manziliga ega bo'lishi mumkin `Email[*]`.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table AuthorEmail { authorId int [ref: > Author.authorId] emailAddress varchar indexes { (authorId, emailAddress) [pk] } }",
      "AuthorEmail(authorId [PK, FK], emailAddress [PK])"
    ],
    "expectedSchema": {
      "tableName": "AuthorEmail",
      "columns": [
        {
          "name": "authorId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Author(authorId)"
        },
        {
          "name": "emailAddress",
          "type": "varchar(100)",
          "isPK": true
        }
      ]
    },
    "explanation": "AuthorEmail jadvali loyihalandi."
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Customer Delivery Address Multi-valued",
    "title": "Mijoz Yetkazish Manzillari (CustDeliveryAddress)",
    "story": "Mijoz bir nechta yetkazib berish manzillariga ega (uy, ofis, ota-ona uyi).",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table CustDeliveryAddress { custId int [ref: > Customer.custId] addressLabel varchar fullAddress varchar indexes { (custId, addressLabel) [pk] } }",
      "CustDeliveryAddress(custId [PK, FK], addressLabel [PK], fullAddress)"
    ],
    "expectedSchema": {
      "tableName": "CustDeliveryAddress",
      "columns": [
        {
          "name": "custId",
          "type": "integer",
          "isPK": true,
          "isFK": true,
          "references": "Customer(custId)"
        },
        {
          "name": "addressLabel",
          "type": "varchar(30)",
          "isPK": true
        },
        {
          "name": "fullAddress",
          "type": "varchar(150)"
        }
      ]
    },
    "explanation": "CustDeliveryAddress ko'p qiymatli atribut jadvali chizildi."
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "7-Qavat • O'rta",
    "source": "L02 Slide 40 • Vehicle Feature Multi-valued",
    "title": "Avtomobil Qo'shimcha Jihozlari (VehicleFeature)",
    "story": "Avtomobil bir nechta qulayliklarga ega `Feature[*]`: Sunroof, HeatedSeats, Autopilot.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table VehicleFeature { vin varchar [ref: > Vehicle.vin] featureCode varchar indexes { (vin, featureCode) [pk] } }",
      "VehicleFeature(vin [PK, FK], featureCode [PK])"
    ],
    "expectedSchema": {
      "tableName": "VehicleFeature",
      "columns": [
        {
          "name": "vin",
          "type": "varchar(20)",
          "isPK": true,
          "isFK": true,
          "references": "Vehicle(vin)"
        },
        {
          "name": "featureCode",
          "type": "varchar(30)",
          "isPK": true
        }
      ]
    },
    "explanation": "VehicleFeature jadvali loyihalandi."
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "7-Qavat • Qiyin (7-Qavat Bossi)",
    "source": "L02 Slide 40 & T02 Task 1 • Multi-valued 1NF Boss",
    "title": "7-Qavat Bossi: Bo'lim va Telefonlar 1NF Normalizatsiya Sxemasi",
    "story": "Kompaniyada `Department(deptNo, dName, budget)` ota jadvali va uning ko'p qiymatli telefonlari `DeptPhone(deptNo, phone)` jadvallari birgalikda 1NF relying sxemasini hosil qiladi.",
    "taskUz": "Mijozning biznes talablariga mos relyatsion sxemani loyihalang. Kerakli jadvallar, Birlamchi Kalitlar (PK) va Tashqi Kalitlarni (FK) to'g'ri o'rnating.",
    "starterCode": "// Talab etilgan relyatsion jadvallar va aloqalarni kiriting",
    "hint": "Birlamchi va tashqi kalitlar munosabatini tekshiring.",
    "solutions": [
      "Table Department { deptNo int [pk] dName varchar budget decimal } Table DeptPhone { deptNo int [ref: > Department.deptNo] phone varchar indexes { (deptNo, phone) [pk] } }",
      "Department(deptNo [PK], dName, budget)\nDeptPhone(deptNo [PK, FK], phone [PK])"
    ],
    "expectedSchema": {
      "tables": [
        {
          "tableName": "Department",
          "columns": [
            {
              "name": "deptNo",
              "type": "integer",
              "isPK": true
            },
            {
              "name": "dName",
              "type": "varchar(50)"
            },
            {
              "name": "budget",
              "type": "decimal"
            }
          ]
        },
        {
          "tableName": "DeptPhone",
          "columns": [
            {
              "name": "deptNo",
              "type": "integer",
              "isPK": true,
              "isFK": true,
              "references": "Department(deptNo)"
            },
            {
              "name": "phone",
              "type": "varchar(25)",
              "isPK": true
            }
          ]
        }
      ]
    },
    "explanation": "7-Qavat Bossi: Department va DeptPhone 1NF relyatsion sxemasi mukammal chizildi."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.QUESTIONS_51_100;
}
