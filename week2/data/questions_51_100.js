var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Rustam Ahmedov",
    "clientRole": "Uzbekistan Airways Chipta Nazorati",
    "clientAvatar": "✈️",
    "title": "Uzbekistan Airways — Yo'lovchi va Parvoz Broni (FlightBooking) (Relatsion Sxema)",
    "titleEn": "Uzbekistan Airways — Passenger Flight Booking Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Aviakompaniyada yo'lovchi (**FlightPassenger**) turli reyslarda uchishi mumkin. Muntazam parvoz reysi (**ScheduledFlight**) esa yuzlab yo'lovchilarni tashiydi. O'rindiq raqami (`seatNumber`), xizmat klassi (`cabinClass`) va to'langan chipta narxi (`ticketPrice`) **FlightBooking** assotsiativ entitiyida jamlanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FlightPassenger`: {PK} `passportNo`, `passengerName`, `citizenship`. 2. `ScheduledFlight`: {PK} `flightNumber`, `departureTime`, `destinationIata`. 3. `FlightBooking`: {PK} `bookingRef`, `seatNumber`, `cabinClass`, `ticketPrice`. 4. Ikkala master entitiyni `FlightBooking` ga qat'iy bittalik va ixtiyoriy ko'plik munosabati qilib ulang.",
    "storyEn": "Uzbekistan Airways — Passenger Flight Booking Association Class — Conceptual ER business case study.",
    "instruction": "Aviachipta band qilish (FlightBooking) assotsiativ modelini tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FlightPassenger",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "passportNo",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "passportNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passengerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "citizenship",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ScheduledFlight",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "flightNumber",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "flightNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "departureTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destinationIata",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FlightBooking",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "bookingRef",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cabinClass",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ticketPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passportNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "flightNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Books",
          "entity1": "FlightPassenger",
          "entity2": "FlightBooking",
          "fromEntityName": "FlightPassenger",
          "toEntityName": "FlightBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Carries",
          "entity1": "ScheduledFlight",
          "entity2": "FlightBooking",
          "fromEntityName": "ScheduledFlight",
          "toEntityName": "FlightBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FlightPassenger",
          "pk": "passportNo",
          "isWeak": false
        },
        {
          "name": "ScheduledFlight",
          "pk": "flightNumber",
          "isWeak": false
        },
        {
          "name": "FlightBooking",
          "pk": "bookingRef",
          "isWeak": false,
          "foreignKeys": [
            "passportNo",
            "flightNumber"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FlightPassenger",
          "entity2": "FlightBooking",
          "fromEntityName": "FlightPassenger",
          "toEntityName": "FlightBooking",
          "mult1": "+",
          "mult2": "+",
          "name": "Books",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ScheduledFlight",
          "entity2": "FlightBooking",
          "fromEntityName": "ScheduledFlight",
          "toEntityName": "FlightBooking",
          "mult1": "+",
          "mult2": "+",
          "name": "Carries",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "«Uzbekistan Airways» — класс Ассоциации бронирования пассажирских рейсов (реляционная схема)",
    "storyRu": "«Uzbekistan Airways» — Класс Ассоциации бронирования пассажирских рейсов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Билетный контроль «Узбекистон хаво йуллари»"
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Kamola Saidova",
    "clientRole": "Asaxiy Books Kutubxona Mudiri",
    "clientAvatar": "📚",
    "title": "Asaxiy Books — Kitobxon va Kitob Arendasi (BookRental) (Relatsion Sxema)",
    "titleEn": "Asaxiy Books — Reader Book Rental Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Elektron va qog'oz kitoblar ijarasida kitobxon (**OnlineReader**) ko'plab kitoblarni oladi. Kitob (**LibraryBook**) esa navbatma-navbat turli kitobxonlarga ijaraga beriladi. Ijara boshlangan sana (`rentalStartDate`), qaytarish muddati (`dueDate`) va ijara to'lovi (`rentalFee`) **BookRental** entitiysi orqali boshqariladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `OnlineReader`: {PK} `readerId`, `fullName`, `email`. 2. `LibraryBook`: {PK} `isbnCode`, `bookTitle`, `authorName`. 3. `BookRental`: {PK} `rentalId`, `rentalStartDate`, `dueDate`, `rentalFee`. 4. Multiplisitiyalarni to'g'ri o'rnating: bitta ijara aniq bitta kitob va bitta kitobxonga tegishli (qat'iy bittalik).",
    "storyEn": "Asaxiy Books — Reader Book Rental Association Class — Conceptual ER business case study.",
    "instruction": "'OnlineReader', 'LibraryBook' va 'BookRental' assotsiativ modelini quring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "OnlineReader",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "readerId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "readerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "email",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LibraryBook",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "isbnCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "isbnCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bookTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "authorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BookRental",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "rentalId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "rentalId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rentalStartDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dueDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rentalFee",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "readerId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isbnCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Borrows",
          "entity1": "OnlineReader",
          "entity2": "BookRental",
          "fromEntityName": "OnlineReader",
          "toEntityName": "BookRental",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "RentedVia",
          "entity1": "LibraryBook",
          "entity2": "BookRental",
          "fromEntityName": "LibraryBook",
          "toEntityName": "BookRental",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "OnlineReader",
          "pk": "readerId",
          "isWeak": false
        },
        {
          "name": "LibraryBook",
          "pk": "isbnCode",
          "isWeak": false
        },
        {
          "name": "BookRental",
          "pk": "rentalId",
          "isWeak": false,
          "foreignKeys": [
            "readerId",
            "isbnCode"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "OnlineReader",
          "entity2": "BookRental",
          "fromEntityName": "OnlineReader",
          "toEntityName": "BookRental",
          "mult1": "+",
          "mult2": "+",
          "name": "Borrows",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "LibraryBook",
          "entity2": "BookRental",
          "fromEntityName": "LibraryBook",
          "toEntityName": "BookRental",
          "mult1": "+",
          "mult2": "+",
          "name": "RentedVia",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Asaxy Books — класс ассоциации проката книг для чтения (реляционная схема)",
    "storyRu": "Asaxy Books — Класс Ассоциации по аренде книг для чтения — Концептуальный бизнес-кейс скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Директор книжной библиотеки Асахия"
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Javohir Zokirov",
    "clientRole": "IT Park Sertifikatsiya Rahbari",
    "clientAvatar": "🎓",
    "title": "IT Park Academy — Talaba va Sertifikat Imtihoni (ExamAttempt) (Relatsion Sxema)",
    "titleEn": "IT Park Academy — Student Certification Exam Attempt Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Professional IT sertifikatlash tizimida talaba (**CandidateStudent**) bir necha sertifikat imtihonlarini topshiradi. Imtihon (**CertificationExam**) har kuni o'nlab nomzodlar tomonidan topshiriladi. Topshirish sanasi (`attemptDate`), to'plangan ball foizi (`scorePercentage`) va muvaffaqiyat holati (`passedStatus`) **ExamAttempt** assotsiativ entitiysiga tegishlidir. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CandidateStudent`: {PK} `candidateId`, `candidateName`, `pinfl`. 2. `CertificationExam`: {PK} `examCode`, `examTitle`, `passingScore`. 3. `ExamAttempt`: {PK} `attemptId`, `attemptDate`, `scorePercentage`, `passedStatus`. 4. Multiplisitiyalarni bitta majburiy hamda ixtiyoriy ko'plik qilib bog'lang.",
    "storyEn": "IT Park Academy — Student Certification Exam Attempt Association Class — Conceptual ER business case study.",
    "instruction": "Nomzod va imtihon orasidagi 'ExamAttempt' assotsiativ sinfini shakllantiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CandidateStudent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "candidateId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "candidateId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "candidateName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pinfl",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CertificationExam",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "examCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "examCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "examTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passingScore",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ExamAttempt",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "attemptId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "attemptId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "attemptDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "scorePercentage",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passedStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "candidateId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "examCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Takes",
          "entity1": "CandidateStudent",
          "entity2": "ExamAttempt",
          "fromEntityName": "CandidateStudent",
          "toEntityName": "ExamAttempt",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Evaluates",
          "entity1": "CertificationExam",
          "entity2": "ExamAttempt",
          "fromEntityName": "CertificationExam",
          "toEntityName": "ExamAttempt",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CandidateStudent",
          "pk": "candidateId",
          "isWeak": false
        },
        {
          "name": "CertificationExam",
          "pk": "examCode",
          "isWeak": false
        },
        {
          "name": "ExamAttempt",
          "pk": "attemptId",
          "isWeak": false,
          "foreignKeys": [
            "candidateId",
            "examCode"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CandidateStudent",
          "entity2": "ExamAttempt",
          "fromEntityName": "CandidateStudent",
          "toEntityName": "ExamAttempt",
          "mult1": "+",
          "mult2": "+",
          "name": "Takes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CertificationExam",
          "entity2": "ExamAttempt",
          "fromEntityName": "CertificationExam",
          "toEntityName": "ExamAttempt",
          "mult1": "+",
          "mult2": "+",
          "name": "Evaluates",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "IT Park Academy — Класс ассоциации попыток сдачи аттестационного экзамена студента (реляционная схема)",
    "storyRu": "IT Park Academy — Класс Ассоциации попыток сдачи аттестационного экзамена студента — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер по сертификации ИТ-парка"
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Dilnoza Hakimova",
    "clientRole": "Klinik Farmatsevt",
    "clientAvatar": "💊",
    "title": "Elektron Retsept Tizimi — Shifokor va Dori Vositalari (PrescriptionItem) (Relatsion Sxema)",
    "titleEn": "Electronic Prescription — Doctor and Medication Prescription Item Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Shifoxona tizimida shifokor (**TreatingDoctor**) turli dori vositalarini yozib beradi. Dori vositasi (**MedicationDrug**) esa turli shifokorlar tomonidan tavsiya qilinadi. Tavsiya qilingan doza (`dosageMg`), qabul qilish chastotasi (`frequencyPerDay`) va kurs davomiyligi (`durationDays`) **PrescriptionItem** assotsiativ entitiyida ifodalanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `TreatingDoctor`: {PK} `doctorId`, `doctorName`, `licenseNo`. 2. `MedicationDrug`: {PK} `drugId`, `commercialName`, `activeSubstance`. 3. `PrescriptionItem`: {PK} `prescriptionId`, `dosageMg`, `frequencyPerDay`, `durationDays`. 4. Munosabatlarni to'g'ri o'rnating (qat'iy bittalik va ixtiyoriy ko'plik munosabati).",
    "storyEn": "Electronic Prescription — Doctor and Medication Prescription Item Association Class — Conceptual ER business case study.",
    "instruction": "Shifokor va dori vositasini 'PrescriptionItem' orqali assotsiativ bog'lang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TreatingDoctor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "doctorId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MedicationDrug",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "drugId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "drugId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "commercialName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "activeSubstance",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PrescriptionItem",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "prescriptionId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "prescriptionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dosageMg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "frequencyPerDay",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "durationDays",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "drugId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Prescribes",
          "entity1": "TreatingDoctor",
          "entity2": "PrescriptionItem",
          "fromEntityName": "TreatingDoctor",
          "toEntityName": "PrescriptionItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "PrescribedIn",
          "entity1": "MedicationDrug",
          "entity2": "PrescriptionItem",
          "fromEntityName": "MedicationDrug",
          "toEntityName": "PrescriptionItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TreatingDoctor",
          "pk": "doctorId",
          "isWeak": false
        },
        {
          "name": "MedicationDrug",
          "pk": "drugId",
          "isWeak": false
        },
        {
          "name": "PrescriptionItem",
          "pk": "prescriptionId",
          "isWeak": false,
          "foreignKeys": [
            "doctorId",
            "drugId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TreatingDoctor",
          "entity2": "PrescriptionItem",
          "fromEntityName": "TreatingDoctor",
          "toEntityName": "PrescriptionItem",
          "mult1": "+",
          "mult2": "+",
          "name": "Prescribes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "MedicationDrug",
          "entity2": "PrescriptionItem",
          "fromEntityName": "MedicationDrug",
          "toEntityName": "PrescriptionItem",
          "mult1": "+",
          "mult2": "+",
          "name": "PrescribedIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Электронный рецепт — класс ассоциации элемента рецепта врача и лекарства (реляционная схема)",
    "storyRu": "Электронный рецепт — Класс ассоциации предметов, выписывающих рецепты на лекарства и врачей — Концептуальный бизнес-кейс отделения неотложной помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Клинический фармацевт"
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Otabek Yusupov",
    "clientRole": "Hilton Mehmonxonasi Menejeri",
    "clientAvatar": "🏨",
    "title": "Hilton Mehmonxonasi — Korporativ Mijoz va Konferens Zal (HallBooking) (Relatsion Sxema)",
    "titleEn": "Hilton Hotel — Corporate Client and Conference Hall Booking Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Xalqaro mehmonxonada korporativ mijoz (**CorporateClient**) biznes tadbirlar uchun zallarni bron qiladi. Konferens zal (**ConferenceHall**) turli kompaniyalarga arendaga beriladi. Bron qilingan sana (`eventDate`), qatnashuvchilar soni (`attendeesCount`) va katering xizmati summasi (`cateringCost`) **HallBooking** assotsiativ entitiyida saqlanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CorporateClient`: {PK} `companyId`, `companyName`, `contactPhone`. 2. `ConferenceHall`: {PK} `hallCode`, `hallName`, `capacity`. 3. `HallBooking`: {PK} `bookingId`, `eventDate`, `attendeesCount`, `cateringCost`. 4. Multiplisitiyalarni bitta majburiy hamda ixtiyoriy ko'plik ko'rinishida tanlang.",
    "storyEn": "Hilton Hotel — Corporate Client and Conference Hall Booking Association Class — Conceptual ER business case study.",
    "instruction": "'CorporateClient', 'ConferenceHall' va 'HallBooking' entitiylarini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CorporateClient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "companyId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "companyId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactPhone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ConferenceHall",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "hallCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "hallCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hallName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HallBooking",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "bookingId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "bookingId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "eventDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "attendeesCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cateringCost",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hallCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Reserves",
          "entity1": "CorporateClient",
          "entity2": "HallBooking",
          "fromEntityName": "CorporateClient",
          "toEntityName": "HallBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "ReservedBy",
          "entity1": "ConferenceHall",
          "entity2": "HallBooking",
          "fromEntityName": "ConferenceHall",
          "toEntityName": "HallBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CorporateClient",
          "pk": "companyId",
          "isWeak": false
        },
        {
          "name": "ConferenceHall",
          "pk": "hallCode",
          "isWeak": false
        },
        {
          "name": "HallBooking",
          "pk": "bookingId",
          "isWeak": false,
          "foreignKeys": [
            "companyId",
            "hallCode"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CorporateClient",
          "entity2": "HallBooking",
          "fromEntityName": "CorporateClient",
          "toEntityName": "HallBooking",
          "mult1": "+",
          "mult2": "+",
          "name": "Reserves",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ConferenceHall",
          "entity2": "HallBooking",
          "fromEntityName": "ConferenceHall",
          "toEntityName": "HallBooking",
          "mult1": "+",
          "mult2": "+",
          "name": "ReservedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Отель Hilton — класс Ассоциации бронирования корпоративных клиентов и конференц-залов (реляционная схема)",
    "storyRu": "Отель Hilton — Класс Ассоциации по бронированию корпоративных клиентов и конференц-залов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер отеля Хилтон"
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Gulzoda Norova",
    "clientRole": "Apex Insurance Sug'urta Anderrayteri",
    "clientAvatar": "🛡️",
    "title": "Apex Sug'urta — Mijoz va Sug'urta Dasturi (UnderwrittenPolicy) (Relatsion Sxema)",
    "titleEn": "Apex Insurance — Client and Insurance Program Policy Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Sug'urta bozorida fuqaro (**InsuredPerson**) bir necha xil dasturlar (avto, salomatlik, uy) bo'yicha sug'urtalanadi. Sug'urta dasturi (**InsurancePlan**) minglab fuqarolarga xizmat qiladi. Yillik sug'urta mukofoti (`premiumSum`), tovon to'lash chegarasi (`coverageLimit`) va boshlanish sanasi (`startDate`) **UnderwrittenPolicy** assotsiativ entitiyida ifodalanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `InsuredPerson`: {PK} `personPinfl`, `fullName`, `city`. 2. `InsurancePlan`: {PK} `planCode`, `planName`, `baseRate`. 3. `UnderwrittenPolicy`: {PK} `policyNumber`, `premiumSum`, `coverageLimit`, `startDate`. 4. Har bir polis aniq bitta mijoz va bitta dasturga birikkanligini (qat'iy bittalik va ixtiyoriy ko'plik munosabati) tasdiqlang.",
    "storyEn": "Apex Insurance — Client and Insurance Program Policy Association Class — Conceptual ER business case study.",
    "instruction": "Sug'urta polisi assotsiativ modelini aniq chegaralar bilan polotnoda quring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "InsuredPerson",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "personPinfl",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "personPinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "city",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InsurancePlan",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "planCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "planCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "planName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "baseRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "UnderwrittenPolicy",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "policyNumber",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "policyNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "premiumSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "coverageLimit",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "startDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "personPinfl",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "planCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Subscribes",
          "entity1": "InsuredPerson",
          "entity2": "UnderwrittenPolicy",
          "fromEntityName": "InsuredPerson",
          "toEntityName": "UnderwrittenPolicy",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "AppliedTo",
          "entity1": "InsurancePlan",
          "entity2": "UnderwrittenPolicy",
          "fromEntityName": "InsurancePlan",
          "toEntityName": "UnderwrittenPolicy",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "InsuredPerson",
          "pk": "personPinfl",
          "isWeak": false
        },
        {
          "name": "InsurancePlan",
          "pk": "planCode",
          "isWeak": false
        },
        {
          "name": "UnderwrittenPolicy",
          "pk": "policyNumber",
          "isWeak": false,
          "foreignKeys": [
            "personPinfl",
            "planCode"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "InsuredPerson",
          "entity2": "UnderwrittenPolicy",
          "fromEntityName": "InsuredPerson",
          "toEntityName": "UnderwrittenPolicy",
          "mult1": "+",
          "mult2": "+",
          "name": "Subscribes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "InsurancePlan",
          "entity2": "UnderwrittenPolicy",
          "fromEntityName": "InsurancePlan",
          "toEntityName": "UnderwrittenPolicy",
          "mult1": "+",
          "mult2": "+",
          "name": "AppliedTo",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Apex Insurance — класс ассоциации политики клиента и страховой программы (реляционная схема)",
    "storyRu": "Apex Insurance — Класс Ассоциации политик клиентов и страховых программ — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Страхование Apex Страховой андеррайтер"
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Sherzod Temirov",
    "clientRole": "Avtosalon Lizing Menejeri",
    "clientAvatar": "🚘",
    "title": "Avtosalon — Xaridor va Avtomobil Lizing Shartnomasi (CarLeaseContract) (Relatsion Sxema)",
    "titleEn": "Car Dealership — Buyer and Vehicle Lease Contract Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Avtosalonda tadbirkor (**CarBuyer**) bir necha avtomobillarni lizingga olishi mumkin. Lizingdagi avtomobil modeli (**VehicleStock**) esa bir necha shartnomalarda aylanadi. Boshlang'ich to'lov miqdori (`downPayment`), oylik to'lov (`monthlyInstallment`) va lizing muddati oylar soni (`termMonths`) **CarLeaseContract** assotsiativ entitiyida saqlanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CarBuyer`: {PK} `buyerInn`, `buyerTitle`, `creditRating`. 2. `VehicleStock`: {PK} `vinNumber`, `carModel`, `stickerPrice`. 3. `CarLeaseContract`: {PK} `leaseContractNo`, `downPayment`, `monthlyInstallment`, `termMonths`. 4. Ikkala tomonni qat'iy bittalik va ixtiyoriy ko'plik munosabati bilan bog'lang.",
    "storyEn": "Car Dealership — Buyer and Vehicle Lease Contract Association Class — Conceptual ER business case study.",
    "instruction": "Lizing shartnomasi (CarLeaseContract) assotsiativ diagrammasini tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CarBuyer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "buyerInn",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "buyerInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "buyerTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "creditRating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "VehicleStock",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "vinNumber",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "vinNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "carModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "stickerPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CarLeaseContract",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "leaseContractNo",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "leaseContractNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "downPayment",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "monthlyInstallment",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "termMonths",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "buyerInn",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vinNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "SignsLease",
          "entity1": "CarBuyer",
          "entity2": "CarLeaseContract",
          "fromEntityName": "CarBuyer",
          "toEntityName": "CarLeaseContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "LeasedAs",
          "entity1": "VehicleStock",
          "entity2": "CarLeaseContract",
          "fromEntityName": "VehicleStock",
          "toEntityName": "CarLeaseContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CarBuyer",
          "pk": "buyerInn",
          "isWeak": false
        },
        {
          "name": "VehicleStock",
          "pk": "vinNumber",
          "isWeak": false
        },
        {
          "name": "CarLeaseContract",
          "pk": "leaseContractNo",
          "isWeak": false,
          "foreignKeys": [
            "buyerInn",
            "vinNumber"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CarBuyer",
          "entity2": "CarLeaseContract",
          "fromEntityName": "CarBuyer",
          "toEntityName": "CarLeaseContract",
          "mult1": "+",
          "mult2": "+",
          "name": "SignsLease",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "VehicleStock",
          "entity2": "CarLeaseContract",
          "fromEntityName": "VehicleStock",
          "toEntityName": "CarLeaseContract",
          "mult1": "+",
          "mult2": "+",
          "name": "LeasedAs",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Автосалон — класс ассоциации покупателя и договора аренды транспортного средства (реляционная схема)",
    "storyRu": "Автосалон — Класс ассоциации покупателя и договора аренды транспортных средств — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер по аренде автосалонов"
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Sevara Shokirova",
    "clientRole": "Magic Cinema Bosh Administratori",
    "clientAvatar": "🎬",
    "title": "Kinoteatr — Tomoshabin va Kino Seansi Chiptasi (CinemaTicket) (Relatsion Sxema)",
    "titleEn": "Magic Cinema — Viewer and Movie Session Ticket Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Zamonaviy kinoteatrda tomoshabin (**MovieViewer**) ko'plab seanslarga tushadi. Kino seansi (**CinemaSession**) esa zal to'la tomoshabinlarni qamrab oladi. Qator raqami (`rowNumber`), o'rindiq joyi (`seatNumber`) va chipta narxi (`ticketPrice`) **CinemaTicket** assotsiativ entitiyida ifodalanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `MovieViewer`: {PK} `viewerPhone`, `viewerName`. 2. `CinemaSession`: {PK} `sessionId`, `movieTitle`, `startTime`. 3. `CinemaTicket`: {PK} `ticketCode`, `rowNumber`, `seatNumber`, `ticketPrice`. 4. Multiplisitiyalarni qat'iy bittalik va ixtiyoriy ko'plik munosabati ko'rinishida tanlang.",
    "storyEn": "Magic Cinema — Viewer and Movie Session Ticket Association Class — Conceptual ER business case study.",
    "instruction": "Kino chiptasi assotsiativ modelini polotnoda ifodalang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MovieViewer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "viewerPhone",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "viewerPhone",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "viewerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CinemaSession",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "sessionId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "sessionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "movieTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "startTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CinemaTicket",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "ticketCode",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "ticketCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rowNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ticketPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "viewerPhone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sessionId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Purchases",
          "entity1": "MovieViewer",
          "entity2": "CinemaTicket",
          "fromEntityName": "MovieViewer",
          "toEntityName": "CinemaTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Admits",
          "entity1": "CinemaSession",
          "entity2": "CinemaTicket",
          "fromEntityName": "CinemaSession",
          "toEntityName": "CinemaTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MovieViewer",
          "pk": "viewerPhone",
          "isWeak": false
        },
        {
          "name": "CinemaSession",
          "pk": "sessionId",
          "isWeak": false
        },
        {
          "name": "CinemaTicket",
          "pk": "ticketCode",
          "isWeak": false,
          "foreignKeys": [
            "viewerPhone",
            "sessionId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MovieViewer",
          "entity2": "CinemaTicket",
          "fromEntityName": "MovieViewer",
          "toEntityName": "CinemaTicket",
          "mult1": "+",
          "mult2": "+",
          "name": "Purchases",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CinemaSession",
          "entity2": "CinemaTicket",
          "fromEntityName": "CinemaSession",
          "toEntityName": "CinemaTicket",
          "mult1": "+",
          "mult2": "+",
          "name": "Admits",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Magic Cinema — класс ассоциации билетов зрителя и сеанса фильма (реляционная схема)",
    "storyRu": "Magic Cinema — Класс Ассоциации по продаже билетов для зрителей и сеансов кино — Концептуальный бизнес-кейс скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный директор Magic Cinema"
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Farrux Zohidov",
    "clientRole": "Murad Buildings Texnika Nazoratchisi",
    "clientAvatar": "🏗️",
    "title": "Qurilish Pudrati — Bosh Pudratchi va Og'ir Texnika Arendasi (MachineRental) (Relatsion Sxema)",
    "titleEn": "Construction — Contractor and Heavy Machinery Rental Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Katta qurilish maydonlarida qurilish pudratchisi (**ConstructionFirm**) bir nechta og'ir texnikalarni (ekskavator, kran, buldozer) ijaraga oladi. Og'ir texnika (**HeavyMachinery**) turli ob'ektlarda navbati bilan ishlaydi. Kundalik ijara narxi (`dailyRentalRate`), ishlangan soatlar hisobi (`operatingHours`) va operator xizmati qo'shilganligi (`operatorIncluded`) **MachineRental** assotsiativ entitiyida qayd etiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `ConstructionFirm`: {PK} `firmInn`, `firmName`, `licenseGrade`. 2. `HeavyMachinery`: {PK} `machineVin`, `machineType`, `tonnage`. 3. `MachineRental`: {PK} `rentalSlipId`, `dailyRentalRate`, `operatingHours`, `operatorIncluded`. 4. Ikkala master entitiyni `MachineRental` ga qat'iy bittalik va ixtiyoriy ko'plik munosabati bilan bog'lang.",
    "storyEn": "Construction — Contractor and Heavy Machinery Rental Association Class — Conceptual ER business case study.",
    "instruction": "Qurilish texnikasi ijarasi assotsiativ entitiy modelini barpo qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ConstructionFirm",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "firmInn",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "firmInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "firmName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseGrade",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HeavyMachinery",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "machineVin",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "machineVin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "machineType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tonnage",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MachineRental",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "rentalSlipId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "rentalSlipId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dailyRentalRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "operatingHours",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "operatorIncluded",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "firmInn",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "machineVin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Rents",
          "entity1": "ConstructionFirm",
          "entity2": "MachineRental",
          "fromEntityName": "ConstructionFirm",
          "toEntityName": "MachineRental",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "EngagedBy",
          "entity1": "HeavyMachinery",
          "entity2": "MachineRental",
          "fromEntityName": "HeavyMachinery",
          "toEntityName": "MachineRental",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ConstructionFirm",
          "pk": "firmInn",
          "isWeak": false
        },
        {
          "name": "HeavyMachinery",
          "pk": "machineVin",
          "isWeak": false
        },
        {
          "name": "MachineRental",
          "pk": "rentalSlipId",
          "isWeak": false,
          "foreignKeys": [
            "firmInn",
            "machineVin"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ConstructionFirm",
          "entity2": "MachineRental",
          "fromEntityName": "ConstructionFirm",
          "toEntityName": "MachineRental",
          "mult1": "+",
          "mult2": "+",
          "name": "Rents",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "HeavyMachinery",
          "entity2": "MachineRental",
          "fromEntityName": "HeavyMachinery",
          "toEntityName": "MachineRental",
          "mult1": "+",
          "mult2": "+",
          "name": "EngagedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Строительство — класс ассоциации подрядчиков и арендодателей тяжелого машиностроения (реляционная схема)",
    "storyRu": "Строительство — Класс Ассоциации подрядчиков и арендодателей тяжелого машиностроения — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Технический руководитель Murad Buildings"
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Azizbek Rahmonov",
    "clientRole": "Express24 Kuryerlik Koordinatori",
    "clientAvatar": "🛵",
    "title": "Express24 — Kuryer va Restoran Filiali Smenasi (CourierShift) (Relatsion Sxema)",
    "titleEn": "Express24 — Courier and Restaurant Branch Shift Association Class (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Tezkor yetkazib berish xizmatida motokuryer (**DeliveryCourier**) bir necha restoran filiallarida smenada turishi mumkin. Restoran filiali (**RestaurantBranch**) esa kuniga o'nlab kuryerlar navbatchiligidan foydalanadi. Smena sanasi (`shiftDate`), yetkazilgan buyurtmalar soni (`ordersDelivered`) va to'langan kafolatlangan gonorar (`guaranteedPay`) **CourierShift** assotsiativ entitiyida ifodalanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `DeliveryCourier`: {PK} `courierId`, `courierName`, `vehicleType`. 2. `RestaurantBranch`: {PK} `branchId`, `brandName`, `district`. 3. `CourierShift`: {PK} `shiftId`, `shiftDate`, `ordersDelivered`, `guaranteedPay`. 4. Multiplisitiyalarni qat'iy bittalik va ixtiyoriy ko'plik munosabati tarzida bog'lang.",
    "storyEn": "Express24 — Courier and Restaurant Branch Shift Association Class — Conceptual ER business case study.",
    "instruction": "Kuryer va restoran filiali o'rtasidagi smena assotsiativ modelini yakunlang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DeliveryCourier",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "courierId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "courierId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "courierName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vehicleType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RestaurantBranch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "branchId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "brandName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "district",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CourierShift",
          "isWeak": false,
          "isAssociative": true,
          "isSubclass": false,
          "pk": "shiftId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "shiftId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shiftDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ordersDelivered",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "guaranteedPay",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "courierId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "ServesShift",
          "entity1": "DeliveryCourier",
          "entity2": "CourierShift",
          "fromEntityName": "DeliveryCourier",
          "toEntityName": "CourierShift",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "HostsShift",
          "entity1": "RestaurantBranch",
          "entity2": "CourierShift",
          "fromEntityName": "RestaurantBranch",
          "toEntityName": "CourierShift",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DeliveryCourier",
          "pk": "courierId",
          "isWeak": false
        },
        {
          "name": "RestaurantBranch",
          "pk": "branchId",
          "isWeak": false
        },
        {
          "name": "CourierShift",
          "pk": "shiftId",
          "isWeak": false,
          "foreignKeys": [
            "courierId",
            "branchId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DeliveryCourier",
          "entity2": "CourierShift",
          "fromEntityName": "DeliveryCourier",
          "toEntityName": "CourierShift",
          "mult1": "+",
          "mult2": "+",
          "name": "ServesShift",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "RestaurantBranch",
          "entity2": "CourierShift",
          "fromEntityName": "RestaurantBranch",
          "toEntityName": "CourierShift",
          "mult1": "+",
          "mult2": "+",
          "name": "HostsShift",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Express24 — класс ассоциации смен курьерских и ресторанных отделений (реляционная схема)",
    "storyRu": "Express24 — Класс Ассоциации смен курьерских и ресторанных отделений — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Координатор курьерской службы Express24"
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Alisher Vohidov",
    "clientRole": "O'zmilliybank Kadrlar Boshqarmasi",
    "clientAvatar": "🏦",
    "title": "O'zmilliybank — Xodim va Rahbar Boshqaruv Ierarxiyasi (Manages) (Relatsion Sxema)",
    "titleEn": "National Bank — Employee Manager Supervision Hierarchy (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** O'zbekiston Milliy Banki korporativ ierarxiyasida barcha ishchilar — oddiy kassirdan tortib boshqaruv raisigacha — bitta **Employee** entitiysiga tegishli. Har bir xodimning ko'pi bilan bitta bevosita rahbari (Manager) bo'lishi mumkin (ixtiyoriy bittalik — Boshqaruv Raisining o'zida bevosita rahbar yo'q, boshqalarda esa 1 ta). Bitta rahbar esa o'ziga bo'ysunuvchi 0 yoki undan ko'p xodimlarni boshqarishi mumkin (ixtiyoriy ko'plik — oddiy xodim qo'lida hech kim yo'q, rahbarda esa bir nechta xodim). Bu munosabat bitta entitiyning o'z-o'ziga bog'lanuvchi Rekursiv (Unitar) aloqasi orqali modellashtiriladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `Employee` entitiysini joylashtiring: {PK} `empId`, `fullName`, `jobPosition`, `salary`. 2. `Employee` dan chiquvchi va uning o'ziga qaytuvchi `Manages` rekursiv aloqasini o'rnating. 3. Rahbar tomoniga ixtiyoriy bittalik (Supervisor roli) va bo'ysunuvchi tomoniga ixtiyoriy ko'plik (Subordinate roli) multiplisitiyalarini qo'ying.",
    "storyEn": "National Bank — Employee Manager Supervision Hierarchy — Conceptual ER business case study.",
    "instruction": "'Employee' entitiysiga o'z-o'ziga bog'lanuvchi 'Manages' rekursiv aloqasini chizing va ixtiyoriy bittalik hamda ixtiyoriy ko'plik chegaralarini o'rnating.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "empId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "empId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "jobPosition",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "salary",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "supervisorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Manages",
          "entity1": "Employee",
          "entity2": "Employee",
          "fromEntityName": "Employee",
          "toEntityName": "Employee",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "isWeak": false,
          "foreignKeys": [
            "supervisorId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Employee",
          "fromEntityName": "Employee",
          "toEntityName": "Employee",
          "mult1": "+",
          "mult2": "+",
          "name": "Manages",
          "isIdentifying": false,
          "role1": "supervisor",
          "role2": "subordinate"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Национальный банк — Иерархия надзора за сотрудниками-менеджерами (реляционная схема)",
    "storyRu": "Национальный банк — Иерархия надзора за менеджерами сотрудников — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Отдел кадров Узмиллийбанка"
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Nodirbek Alimov",
    "clientRole": "Uzum Market Katalog Boshqaruvchisi",
    "clientAvatar": "🛍️",
    "title": "Uzum Market — Mahsulot Toifalari Daraxti (SubCategoryOf) (Relatsion Sxema)",
    "titleEn": "Uzum Market — Product Category Tree Hierarchy (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Elektron savdo platformasida barcha toifalar yagona **ProductCategory** entitiyida saqlanadi. Masalan: 'Elektronika' -> 'Smartfonlar' -> 'Aksessuarlar' -> 'G'iloflar'. Har bir quyi toifaning ko'pi bilan bitta ota toifasi (Parent Category) bo'ladi (ixtiyoriy bittalik — eng yuqori darajadagi bosh toifalarning ota toifasi yo'q, qolganlarida aniq 1 ta). Bitta ota toifa esa o'z ichiga 0 yoki undan ko'p quyi toifalarni qamrab oladi (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `ProductCategory` entitiysini yarating: {PK} `categoryId`, `categoryName`, `slugUrl`. 2. O'ziga qaytuvchi `SubCategoryOf` rekursiv aloqasini bog'lang. 3. Ota toifa tomoniga ixtiyoriy bittalik va quyi toifalar tomoniga ixtiyoriy ko'plik multiplisitiyasini qo'ying.",
    "storyEn": "Uzum Market — Product Category Tree Hierarchy — Conceptual ER business case study.",
    "instruction": "'ProductCategory' entitiysiga rekursiv ierarxik daraxt aloqasini o'rnating.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ProductCategory",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "categoryId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "categoryId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "categoryName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "slugUrl",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "parentCatId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "SubCategoryOf",
          "entity1": "ProductCategory",
          "entity2": "ProductCategory",
          "fromEntityName": "ProductCategory",
          "toEntityName": "ProductCategory",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ProductCategory",
          "pk": "categoryId",
          "isWeak": false,
          "foreignKeys": [
            "parentCatId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ProductCategory",
          "entity2": "ProductCategory",
          "fromEntityName": "ProductCategory",
          "toEntityName": "ProductCategory",
          "mult1": "+",
          "mult2": "+",
          "name": "SubCategoryOf",
          "isIdentifying": false,
          "role1": "parentCat",
          "role2": "subCat"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Uzum Market — Иерархия дерева категорий продуктов (реляционная схема)",
    "storyRu": "Uzum Market — Иерархия дерева категорий продуктов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер каталога виноградного рынка"
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Olimjon Jo'rayev",
    "clientRole": "UzAuto Motors Konstruktori",
    "clientAvatar": "🚗",
    "title": "UzAuto Motors — Detallar va Jamlama Spetsifikatsiyasi (AssembledFrom) (Relatsion Sxema)",
    "titleEn": "UzAuto Motors — Part Component Bill of Materials (BOM) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Avtomobil ishlab chiqarishda ehtiyot qismlar va agregatlar yagona **PartComponent** (BOM - Bill of Materials) tizimida ro'yxatga olinadi. Masalan, 'Dvigatel' agregati o'z navbatida 'Porshen', 'Val' kabi detallardan yig'iladi, porshen esa o'z navbatida mayda halqalardan tashkil topadi. Bitta murakkab detal ko'plab quyi qismlardan yig'ilishi mumkin (majburiy ko'plik), va bitta standart detal (masalan, bolt) turli xil yirik agregatlar tarkibiga kirishi mumkin (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `PartComponent`: {PK} `partNumber`, `partName`, `unitCost`, `weightKg`. 2. Rekursiv aloqa: `AssembledFrom` bog'lanishini chizing. 3. Multiplisitiyalarni: Agregat tomoniga ixtiyoriy ko'plik va butlovchi qismlar tomoniga majburiy ko'plik qilib belgilang.",
    "storyEn": "UzAuto Motors — Part Component Bill of Materials (BOM) — Conceptual ER business case study.",
    "instruction": "'PartComponent' ning BOM rekursiv aloqasini to'g'ri chegaralar bilan loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PartComponent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "partNumber",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "partNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "partName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "unitCost",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weightKg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "parentAssemblyId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "AssembledFrom",
          "entity1": "PartComponent",
          "entity2": "PartComponent",
          "fromEntityName": "PartComponent",
          "toEntityName": "PartComponent",
          "mult1": "0..*",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PartComponent",
          "pk": "partNumber",
          "isWeak": false,
          "foreignKeys": [
            "parentAssemblyId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PartComponent",
          "entity2": "PartComponent",
          "fromEntityName": "PartComponent",
          "toEntityName": "PartComponent",
          "mult1": "+",
          "mult2": "+",
          "name": "AssembledFrom",
          "isIdentifying": false,
          "role1": "parentAssembly",
          "role2": "subPart"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "UzAuto Motors — Спецификация деталей (BOM) (реляционная схема)",
    "storyRu": "UzAuto Motors — Спецификация деталей (BOM) — Концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "УзАвто Моторс Конструктор"
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Zilola Ergasheva",
    "clientRole": "WIUT O'quv Rejalar Bo'limi",
    "clientAvatar": "📑",
    "title": "WIUT Universiteti — Fanlar va Prerekvizitlar Zanjiri (RequiresPrereq) (Relatsion Sxema)",
    "titleEn": "WIUT University — Academic Course Prerequisite Chain (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Universitet o'quv dasturida ilg'or fanlarni o'qish uchun oldin boshlang'ich fanlarni o'zlashtirish shart (Prerequisite). Masalan, 'Advanced Databases' fanini o'qish uchun oldin 'Database Systems' fanini o'tash talab qilinadi. Barcha fanlar yagona **AcademicCourse** entitiyida jamlangan. Bitta fanning bir nechta prerekvizitlari bo'lishi mumkin (ixtiyoriy ko'plik — 1-kurs boshlang'ich fanlarida prerekvizit umuman bo'lmasligi mumkin, 3-kurs fanida esa 2 ta). Shuningdek, bitta tayanch fan kelgusida bir nechta yuqori kurs fanlari uchun prerekvizit bo'lib xizmat qilishi mumkin (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `AcademicCourse`: {PK} `courseCode`, `courseTitle`, `credits`. 2. Rekursiv `RequiresPrereq` aloqasini o'rnating. 3. Ikkala tomoniga ham ixtiyoriy ko'plik multiplisitiyasini tanlang.",
    "storyEn": "WIUT University — Academic Course Prerequisite Chain — Conceptual ER business case study.",
    "instruction": "'AcademicCourse' fanlari o'rtasidagi rekursiv prerekvizit munosabatini ifodalang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AcademicCourse",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "courseCode",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "courseTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "credits",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "advancedCourseId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "RequiresPrereq",
          "entity1": "AcademicCourse",
          "entity2": "AcademicCourse",
          "fromEntityName": "AcademicCourse",
          "toEntityName": "AcademicCourse",
          "mult1": "0..*",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AcademicCourse",
          "pk": "courseCode",
          "isWeak": false,
          "foreignKeys": [
            "advancedCourseId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AcademicCourse",
          "entity2": "AcademicCourse",
          "fromEntityName": "AcademicCourse",
          "toEntityName": "AcademicCourse",
          "mult1": "+",
          "mult2": "+",
          "name": "RequiresPrereq",
          "isIdentifying": false,
          "role1": "advancedCourse",
          "role2": "prerequisite"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Университет WIUT — Цепочка обязательных требований академического курса (реляционная схема)",
    "storyRu": "Университет WIUT — Цепочка обязательных требований академического курса — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Учебный отдел МВУТ"
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Xurshid Yo'ldoshev",
    "clientRole": "FHDYo (ZAGS) Axborot Tizimi Boshlig'i",
    "clientAvatar": "💍",
    "title": "FHDYo — Fuqarolar va Nikoh Munosabati (MarriedTo) (Relatsion Sxema)",
    "titleEn": "Civil Registry — Citizen Marriage 1:1 Recursive Association (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Fuqarolik holati dalolatnomalarini yozish (FHDYo) reyestrida har bir shaxs **Citizen** entitiyida ro'yxatga olinadi. O'zbekiston qonunchiligiga ko'ra, bitta fuqaro bir vaqtning o'zida ko'pi bilan bitta turmush o'rtog'iga ega bo'lishi mumkin. Hali oila qurmagan fuqarolar uchun bu aloqa mavjud emas (ixtiyoriy bittalik), oila qurganlar uchun esa bu aniq bitta boshqa fuqaroga ulanadi (ixtiyoriy bittalik). Bu klassik yakkama-yakka bittalik ixtiyoriy (ixtiyoriy bittalik ⟷ ixtiyoriy bittalik) rekursiv munosabatdir. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `Citizen`: {PK} `pinfl`, `fullName`, `birthDate`, `gender`. 2. O'ziga qaytuvchi `MarriedTo` rekursiv aloqasini chizing. 3. Har ikkala uchiga ham ixtiyoriy bittalik (ixtiyoriy bitta) multiplisitiyasini qo'ying.",
    "storyEn": "Civil Registry — Citizen Marriage 1:1 Recursive Association — Conceptual ER business case study.",
    "instruction": "'Citizen' entitiysiga yakkama-yakka bittalik ixtiyoriy 'MarriedTo' rekursiv aloqasini o'rnating.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Citizen",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "pinfl",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "pinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "birthDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gender",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "spouse1Id",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "MarriedTo",
          "entity1": "Citizen",
          "entity2": "Citizen",
          "fromEntityName": "Citizen",
          "toEntityName": "Citizen",
          "mult1": "0..1",
          "mult2": "0..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Citizen",
          "pk": "pinfl",
          "isWeak": false,
          "foreignKeys": [
            "spouse1Id"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Citizen",
          "fromEntityName": "Citizen",
          "toEntityName": "Citizen",
          "mult1": "+",
          "mult2": "+",
          "name": "MarriedTo",
          "isIdentifying": false,
          "role1": "spouse1",
          "role2": "spouse2"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Гражданский реестр — Рекурсивная ассоциация браков граждан 1:1 (реляционная схема)",
    "storyRu": "Гражданский реестр — Рекурсивная ассоциация браков граждан 1:1 — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель информационной системы ЗАГС (ЗАГС)."
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Sardor Ahmedov",
    "clientRole": "Payme Growth Menejeri",
    "clientAvatar": "📱",
    "title": "Payme / Click — Foydalanuvchi Referral Taklif Tizimi (ReferredBy) (Relatsion Sxema)",
    "titleEn": "Payme — User Account Referral Chain Recursive Association (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** To'lov ilovasida marketing dasturi doirasida barcha a'zolar **UserAccount** entitiyida yuritiladi. Har bir yangi ro'yxatdan o'tuvchi faqat 1 ta mavjud foydalanuvchining promo-kodi orqali taklif qilinishi mumkin (ixtiyoriy bittalik — mustaqil ro'yxatdan o'tganlarda taklifchi yo'q). Mavjud faol a'zo esa o'z kodi orqali 0 yoki undan ko'p yangi do'stlarini taklif etishi mumkin (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `UserAccount`: {PK} `accountId`, `phoneNumber`, `referralCode`. 2. Rekursiv `ReferredBy` aloqasini o'rnating. 3. Taklif qiluvchi tomoniga ixtiyoriy bittalik, yangi chaqirilganlar tomoniga ixtiyoriy ko'plik qo'ying.",
    "storyEn": "Payme — User Account Referral Chain Recursive Association — Conceptual ER business case study.",
    "instruction": "'UserAccount' entitiysiga referral rekursiv aloqasini o'rnating.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UserAccount",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "accountId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "accountId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phoneNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "referralCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "referrerId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "ReferredBy",
          "entity1": "UserAccount",
          "entity2": "UserAccount",
          "fromEntityName": "UserAccount",
          "toEntityName": "UserAccount",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "UserAccount",
          "pk": "accountId",
          "isWeak": false,
          "foreignKeys": [
            "referrerId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "UserAccount",
          "entity2": "UserAccount",
          "fromEntityName": "UserAccount",
          "toEntityName": "UserAccount",
          "mult1": "+",
          "mult2": "+",
          "name": "ReferredBy",
          "isIdentifying": false,
          "role1": "referrer",
          "role2": "referee"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Payme — рекурсивная ассоциация реферальной цепочки учетной записи пользователя (реляционная схема)",
    "storyRu": "Payme — Рекурсивная ассоциация реферальной цепочки учетных записей пользователей — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер по развитию Payme"
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Shavkat Qodirov",
    "clientRole": "Toshkent Metropoliteni Dispetcheri",
    "clientAvatar": "🚇",
    "title": "Toshkent Metropoliteni — Bekatlar Oraliq Zanjiri (NextTrackTo) (Relatsion Sxema)",
    "titleEn": "Tashkent Metro — Station Adjacent Track Network (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Metro poyezdlari harakati tarmog'ida barcha bekatlar yagona **MetroStation** entitiyida ro'yxatga olinadi. Har bir bekat o'z yo'nalishi bo'yicha ko'pi bilan 2 ta qo'shni bekatga (oldingi va keyingi) ulanadi. Oxirgi boshlang'ich/yakuniy bekatlarda esa faqat 1 ta qo'shni bekat mavjud. Shu sababli har ikkala tomon chegarasi `0..2` bo'lgan simmetrik rekursiv aloqa hosil bo'ladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `MetroStation`: {PK} `stationId`, `stationName`, `lineColor`. 2. `NextTrackTo` rekursiv aloqasini chizing. 3. Har ikki tomonga chegaralarni `0..2` (kamida 0 ta, ko'pi bilan 2 ta) qilib belgilang.",
    "storyEn": "Tashkent Metro — Station Adjacent Track Network — Conceptual ER business case study.",
    "instruction": "'MetroStation' bekatlarining qo'shni rels aloqasini rekursiv loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MetroStation",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "stationId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "stationId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "stationName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lineColor",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "currentStationId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "NextTrackTo",
          "entity1": "MetroStation",
          "entity2": "MetroStation",
          "fromEntityName": "MetroStation",
          "toEntityName": "MetroStation",
          "mult1": "0..2",
          "mult2": "0..2",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MetroStation",
          "pk": "stationId",
          "isWeak": false,
          "foreignKeys": [
            "currentStationId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MetroStation",
          "entity2": "MetroStation",
          "fromEntityName": "MetroStation",
          "toEntityName": "MetroStation",
          "mult1": "+",
          "mult2": "+",
          "name": "NextTrackTo",
          "isIdentifying": false,
          "role1": "currentStation",
          "role2": "adjacentStation"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Ташкентский метрополитен — привокзальная сеть путей (реляционная схема)",
    "storyRu": "Ташкентский метрополитен — Сеть привокзальных путей — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Ташкентский городской диспетчер"
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Temur Rustamov",
    "clientRole": "Linux Server Tizim Arxitektori",
    "clientAvatar": "🐧",
    "title": "Linux Fayl Tizimi — Papkalar Ierarxiyasi (ContainsSubfolder) (Relatsion Sxema)",
    "titleEn": "Linux File System — Directory Parent-Child Hierarchy (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Operatsion tizim fayl tuzilmasida barcha kataloglar **FolderDirectory** entitiysiga tegishli. Masalan: `/var/log/nginx`. Root (`/`) katalogidan tashqari har bir papkaning aniq bitta ota papkasi (Parent Folder) bo'ladi (ixtiyoriy bittalik). Bitta ota papka esa o'z ichida 0 yoki undan ko'p quyi papkalarni (Subfolders) saqlaydi (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FolderDirectory`: {PK} `folderId`, `folderPath`, `permissions`. 2. Rekursiv `ContainsSubfolder` chizig'ini torting. 3. Ota papka tomoniga ixtiyoriy bittalik, ichki papkalar tomoniga ixtiyoriy ko'plik qo'ying.",
    "storyEn": "Linux File System — Directory Parent-Child Hierarchy — Conceptual ER business case study.",
    "instruction": "'FolderDirectory' ning daraxtsimon rekursiv bog'lanishini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FolderDirectory",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "folderId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "folderId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "folderPath",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "permissions",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "parentFolderId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "ContainsSubfolder",
          "entity1": "FolderDirectory",
          "entity2": "FolderDirectory",
          "fromEntityName": "FolderDirectory",
          "toEntityName": "FolderDirectory",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FolderDirectory",
          "pk": "folderId",
          "isWeak": false,
          "foreignKeys": [
            "parentFolderId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FolderDirectory",
          "entity2": "FolderDirectory",
          "fromEntityName": "FolderDirectory",
          "toEntityName": "FolderDirectory",
          "mult1": "+",
          "mult2": "+",
          "name": "ContainsSubfolder",
          "isIdentifying": false,
          "role1": "parentFolder",
          "role2": "subFolder"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Файловая система Linux — иерархия родительских и дочерних каталогов (реляционная схема)",
    "storyRu": "Файловая система Linux — Иерархия родительских и дочерних каталогов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Системный архитектор Linux-серверов"
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "Jira Scrum Master",
    "clientAvatar": "📊",
    "title": "Jira / Gantt Jadvali — Loyiha Vazifalari Ketma-ketligi (PrecedesTask) (Relatsion Sxema)",
    "titleEn": "Jira Project Management — Task Dependency Predecessor Association (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** IT loyihalarni boshqarishda barcha ishlar **ProjectTask** entitiysida saqlanadi. Gantt diagrammasiga binoan, ma'lum bir vazifani boshlashdan oldin boshqa bir nechta vazifalar tugatilgan bo'lishi shart (Predecessors). Bitta vazifa bir nechta boshqa vazifalarga yo'l ochib berishi mumkin (ixtiyoriy ko'plik), va o'z navbatida boshqa bir necha vazifalarning tugashiga bog'liq bo'lishi mumkin (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `ProjectTask`: {PK} `taskId`, `taskTitle`, `estimatedHours`. 2. Rekursiv `PrecedesTask` aloqasini o'rnating. 3. Ikkala tomoniga ham ko'plik chegara: ixtiyoriy ko'plik o'rnating.",
    "storyEn": "Jira Project Management — Task Dependency Predecessor Association — Conceptual ER business case study.",
    "instruction": "'ProjectTask' entitiysiga vazifalar bog'liqligi (PrecedesTask) rekursiv aloqasini qo'ying.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ProjectTask",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "taskId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "taskId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taskTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "estimatedHours",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "predecessorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "PrecedesTask",
          "entity1": "ProjectTask",
          "entity2": "ProjectTask",
          "fromEntityName": "ProjectTask",
          "toEntityName": "ProjectTask",
          "mult1": "0..*",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ProjectTask",
          "pk": "taskId",
          "isWeak": false,
          "foreignKeys": [
            "predecessorId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ProjectTask",
          "entity2": "ProjectTask",
          "fromEntityName": "ProjectTask",
          "toEntityName": "ProjectTask",
          "mult1": "+",
          "mult2": "+",
          "name": "PrecedesTask",
          "isIdentifying": false,
          "role1": "predecessor",
          "role2": "successor"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Jira Project Management — Ассоциация предшественников зависимостей задач (реляционная схема)",
    "storyRu": "Jira Project Management — Ассоциация предшественников зависимостей задач — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Скрам-мастер Джира"
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Eldor Shomurodov",
    "clientRole": "O'zbekiston Futbol Assotsiatsiyasi Tahlilchisi",
    "clientAvatar": "⚽",
    "title": "O'zbekiston Superligasi — Futbol Klublari Uchrashuvi (PlaysMatchAgainst) (Relatsion Sxema)",
    "titleEn": "Uzbekistan Super League — Football Club Fixture Schedule (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Futbol chempionatidagi barcha jamoalar yagona **FootballClub** entitiyida qayd etiladi. Mavsum davomida bitta klub mezbon yoki mehmon sifatida boshqa klublar bilan o'yin o'tkazadi. Bitta klub mavsumda ko'plab raqib klublar bilan kuch sinashadi (ixtiyoriy ko'plik ⟷ ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FootballClub`: {PK} `clubId`, `clubName`, `homeStadium`. 2. Rekursiv `PlaysMatchAgainst` aloqasini o'rnating. 3. Ikkala tomoniga ixtiyoriy ko'plik (Home va Away) multiplisitiyasini tanlang.",
    "storyEn": "Uzbekistan Super League — Football Club Fixture Schedule — Conceptual ER business case study.",
    "instruction": "'FootballClub' entitiysiga musobaqa jadvali rekursiv aloqasini bog'lang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FootballClub",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "clubId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "clubId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "clubName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "homeStadium",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "homeTeamId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "PlaysMatchAgainst",
          "entity1": "FootballClub",
          "entity2": "FootballClub",
          "fromEntityName": "FootballClub",
          "toEntityName": "FootballClub",
          "mult1": "0..*",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FootballClub",
          "pk": "clubId",
          "isWeak": false,
          "foreignKeys": [
            "homeTeamId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FootballClub",
          "entity2": "FootballClub",
          "fromEntityName": "FootballClub",
          "toEntityName": "FootballClub",
          "mult1": "+",
          "mult2": "+",
          "name": "PlaysMatchAgainst",
          "isIdentifying": false,
          "role1": "homeTeam",
          "role2": "awayTeam"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Суперлига Узбекистана — Расписание матчей футбольных клубов (реляционная схема)",
    "storyRu": "Суперлига Узбекистана — Расписание матчей футбольных клубов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Аналитик Футбольной ассоциации Узбекистана"
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Bekzod Umarov",
    "clientRole": "Korzinka Logistika Boshlig'i",
    "clientAvatar": "🏭",
    "title": "Korzinka Logistika — Taqsimot Xablari Ichki Tranziti (TransfersCargoTo) (Relatsion Sxema)",
    "titleEn": "Korzinka Logistics — Distribution Hub Internal Cargo Transfer (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Yirik taqsimot tizimida barcha omborxona majmualari **DistributionHub** entitiyida yuritiladi. Mahsulot zaxirasi yetishmaganda bitta mintaqaviy xab boshqa markaziy xabdan tovar yukini qabul qiladi yoki jo'natadi. Bitta xab bir nechta boshqa xablarga tovar tranzit qilishi va boshqa xablardan qabul qilishi mumkin (ixtiyoriy ko'plik ⟷ ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `DistributionHub`: {PK} `hubCode`, `cityLocation`, `capacityTons`. 2. Rekursiv `TransfersCargoTo` aloqasini torting. 3. Jo'natuvchi va qabul qiluvchi tomonlarga ixtiyoriy ko'plik multiplisitiyasini bering.",
    "storyEn": "Korzinka Logistics — Distribution Hub Internal Cargo Transfer — Conceptual ER business case study.",
    "instruction": "'DistributionHub' ichki tranzit rekursiv aloqasini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DistributionHub",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "hubCode",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "hubCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityTons",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sourceHubId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "TransfersCargoTo",
          "entity1": "DistributionHub",
          "entity2": "DistributionHub",
          "fromEntityName": "DistributionHub",
          "toEntityName": "DistributionHub",
          "mult1": "0..*",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DistributionHub",
          "pk": "hubCode",
          "isWeak": false,
          "foreignKeys": [
            "sourceHubId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DistributionHub",
          "entity2": "DistributionHub",
          "fromEntityName": "DistributionHub",
          "toEntityName": "DistributionHub",
          "mult1": "+",
          "mult2": "+",
          "name": "TransfersCargoTo",
          "isIdentifying": false,
          "role1": "sourceHub",
          "role2": "targetHub"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Корзинка Логистика — Распределительный узел Внутренние грузоперевозки (реляционная схема)",
    "storyRu": "Корзинка Логистика — Распределительный узел Внутренняя транспортировка грузов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Корзинка Начальник отдела логистики"
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Anvar Qosimov",
    "clientRole": "Cisco Tarmoq Muhandisi",
    "clientAvatar": "🌐",
    "title": "Data Markaz — Tarmoq Kommutatorlari Magistrali (UplinkTo) (Relatsion Sxema)",
    "titleEn": "Data Center — Network Switch Uplink Hierarchy (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Ma'lumotlar markazi kommutatsiya ierarxiyasida barcha apparatlar **NetworkSwitch** entitiyiga kiradi. Har bir chekka (Access) kommutator magistral tezlik uchun aniq bitta yuqori darajadagi Core kommutatoriga ulanadi (ixtiyoriy bittalik — eng yuqori Core switchlarida uplink yo'q). Bitta Core switch esa o'ziga bir nechta quyi switchlarni qabul qiladi (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `NetworkSwitch`: {PK} `switchMac`, `ipAddress`, `rackPosition`. 2. Rekursiv `UplinkTo` aloqasini chizing. 3. Master Core tomoniga ixtiyoriy bittalik va quyi switchlar tomoniga ixtiyoriy ko'plik qo'ying.",
    "storyEn": "Data Center — Network Switch Uplink Hierarchy — Conceptual ER business case study.",
    "instruction": "'NetworkSwitch' entitiysiga kommutatsiya ierarxiyasini rekursiv bog'lang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "NetworkSwitch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "switchMac",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "switchMac",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ipAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rackPosition",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "coreSwitchId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "UplinkTo",
          "entity1": "NetworkSwitch",
          "entity2": "NetworkSwitch",
          "fromEntityName": "NetworkSwitch",
          "toEntityName": "NetworkSwitch",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "NetworkSwitch",
          "pk": "switchMac",
          "isWeak": false,
          "foreignKeys": [
            "coreSwitchId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "NetworkSwitch",
          "entity2": "NetworkSwitch",
          "fromEntityName": "NetworkSwitch",
          "toEntityName": "NetworkSwitch",
          "mult1": "+",
          "mult2": "+",
          "name": "UplinkTo",
          "isIdentifying": false,
          "role1": "coreSwitch",
          "role2": "accessSwitch"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Центр обработки данных — иерархия восходящих каналов сетевого коммутатора (реляционная схема)",
    "storyRu": "Центр обработки данных — Иерархия восходящих каналов сетевого коммутатора — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Сетевой инженер Cisco"
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Jamshid Karimov",
    "clientRole": "Humo To'lov Tizimi Xavfsizlik Ofitseri",
    "clientAvatar": "💳",
    "title": "To'lov Tranzaksiyalari — Qaytish va Bekor Qilish Zanjiri (ReversesTx) (Relatsion Sxema)",
    "titleEn": "Payment Processing — Transaction Refund Reversal Pair (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** To'lov protsessingida barcha to'lovlar **FinancialTransaction** entitiysida saqlanadi. Agar xaridor xaridni bekor qilsa (Refund / Chargeback), yangi teskari tranzaksiya ochiladi va u asl tranzaksiyaga bog'lanadi. Har bir bekor qilish tranzaksiyasi aniq bitta asl to'lovga bog'langan (ixtiyoriy bittalik), va bitta asl to'lov faqat 1 martagina to'liq qaytarilishi mumkin (ixtiyoriy bittalik). Bu klassik yakkama-yakka bittalik ixtiyoriy (ixtiyoriy bittalik ⟷ ixtiyoriy bittalik) rekursiv munosabatdir. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FinancialTransaction`: {PK} `txId`, `amountSum`, `txTimestamp`. 2. Rekursiv `ReversesTx` aloqasini o'rnating. 3. Ikkala tomoniga ixtiyoriy bittalik multiplisitiyasini bering.",
    "storyEn": "Payment Processing — Transaction Refund Reversal Pair — Conceptual ER business case study.",
    "instruction": "'FinancialTransaction' ga yakkama-yakka bittalik ixtiyoriy 'ReversesTx' aloqasini o'rnating.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FinancialTransaction",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "txId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "txId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "amountSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "originalTxId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "ReversesTx",
          "entity1": "FinancialTransaction",
          "entity2": "FinancialTransaction",
          "fromEntityName": "FinancialTransaction",
          "toEntityName": "FinancialTransaction",
          "mult1": "0..1",
          "mult2": "0..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FinancialTransaction",
          "pk": "txId",
          "isWeak": false,
          "foreignKeys": [
            "originalTxId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FinancialTransaction",
          "entity2": "FinancialTransaction",
          "fromEntityName": "FinancialTransaction",
          "toEntityName": "FinancialTransaction",
          "mult1": "+",
          "mult2": "+",
          "name": "ReversesTx",
          "isIdentifying": false,
          "role1": "originalTx",
          "role2": "reversalTx"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Обработка платежей — пара разворота возврата транзакции (реляционная схема)",
    "storyRu": "Обработка платежей — пара отмены возврата транзакции — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Сотрудник службы безопасности платежной системы Humo"
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Muyassar Karimova",
    "clientRole": "Tarixiy Nasabnoma Tadqiqotchisi",
    "clientAvatar": "🌳",
    "title": "Shajara Daraxti — Ota-ona va Farzand Nasli (BiologicalParentOf) (Relatsion Sxema)",
    "titleEn": "Genealogy Tree — Biological Parent Child Lineage (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Genealogik tahlilda barcha shaxslar **FamilyPerson** entitiysida jamlanadi. Har bir insonning biologik jihatdan ko'pi bilan 2 ta ota-onasi (Ota va Ona) bo'ladi (`0..2` — shajarada eng qadimgi ajdodlarning ota-onasi kiritilmagan bo'lishi mumkin). Bitta ota-ona esa hayot davomida 0 yoki undan ko'p farzandlarga ega bo'lishi mumkin (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FamilyPerson`: {PK} `personId`, `fullName`, `birthYear`. 2. Rekursiv `BiologicalParentOf` aloqasini o'rnating. 3. Ota-ona tomoniga `0..2`, farzandlar tomoniga ixtiyoriy ko'plik qo'ying.",
    "storyEn": "Genealogy Tree — Biological Parent Child Lineage — Conceptual ER business case study.",
    "instruction": "'FamilyPerson' shajara rekursiv aloqasini to'g'ri chegaralar bilan loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FamilyPerson",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "personId",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "personId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "birthYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "parentId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "BiologicalParentOf",
          "entity1": "FamilyPerson",
          "entity2": "FamilyPerson",
          "fromEntityName": "FamilyPerson",
          "toEntityName": "FamilyPerson",
          "mult1": "0..2",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FamilyPerson",
          "pk": "personId",
          "isWeak": false,
          "foreignKeys": [
            "parentId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FamilyPerson",
          "entity2": "FamilyPerson",
          "fromEntityName": "FamilyPerson",
          "toEntityName": "FamilyPerson",
          "mult1": "+",
          "mult2": "+",
          "name": "BiologicalParentOf",
          "isIdentifying": false,
          "role1": "parent",
          "role2": "child"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Генеалогическое древо — биологическая линия родителей и детей (реляционная схема)",
    "storyRu": "Генеалогическое древо — Биологическое происхождение родителей и детей — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Историко-генеалогический исследователь"
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Bobur Ziyodullayev",
    "clientRole": "Davlat Aktivlarini Boshqarish Agentligi",
    "clientAvatar": "🏛️",
    "title": "Xolding Ekotizimi — Bosh Kompaniya va Sho'ba Korxonalar (OwnsSubsidiary) (Relatsion Sxema)",
    "titleEn": "Corporate Conglomerate — Holding Parent and Subsidiary Ownership (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Yirik korporativ xoldingda barcha yuridik shaxslar **CorporateHolding** entitiysida yuritiladi. Har bir sho'ba korxonaning nazorat paketi ko'pi bilan 1 ta bosh xolding kompaniyasiga tegishli bo'ladi (ixtiyoriy bittalik — eng yuqori holdingning bosh kompaniyasi yo'q). Bitta xolding kompaniyasi esa o'z tasarrufiga 0 yoki undan ortiq sho'ba korxonalarni birlashtirishi mumkin (ixtiyoriy ko'plik). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CorporateHolding`: {PK} `holdingInn`, `legalName`, `charterCapital`. 2. Rekursiv `OwnsSubsidiary` aloqasini o'rnating. 3. Bosh xolding tomoniga ixtiyoriy bittalik va sho'ba korxonalar tomoniga ixtiyoriy ko'plik qo'ying.",
    "storyEn": "Corporate Conglomerate — Holding Parent and Subsidiary Ownership — Conceptual ER business case study.",
    "instruction": "'CorporateHolding' korporativ xolding rekursiv tuzilmasini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CorporateHolding",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "holdingInn",
          "x": 300,
          "y": 160,
          "attributes": [
            {
              "name": "holdingInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "legalName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterCapital",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "parentHoldingId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "OwnsSubsidiary",
          "entity1": "CorporateHolding",
          "entity2": "CorporateHolding",
          "fromEntityName": "CorporateHolding",
          "toEntityName": "CorporateHolding",
          "mult1": "0..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CorporateHolding",
          "pk": "holdingInn",
          "isWeak": false,
          "foreignKeys": [
            "parentHoldingId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CorporateHolding",
          "entity2": "CorporateHolding",
          "fromEntityName": "CorporateHolding",
          "toEntityName": "CorporateHolding",
          "mult1": "+",
          "mult2": "+",
          "name": "OwnsSubsidiary",
          "isIdentifying": false,
          "role1": "parentHolding",
          "role2": "subsidiary"
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Корпоративный конгломерат — холдинговая материнская и дочерняя компания (реляционная схема)",
    "storyRu": "Корпоративный конгломерат — Холдинговая и дочерняя компания — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Агентство по управлению госактивами"
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Prof. Jonatan Klark",
    "clientRole": "WIUT Akademik Dekani",
    "clientAvatar": "👨‍🏫",
    "title": "WIUT — Talaba, Fan Moduli va O'qituvchi 3 Tomonlama Darsi (TakesClass) (Relatsion Sxema)",
    "titleEn": "WIUT — Student, Course and Lecturer Ternary Association (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Universitet dars jadvalida talaba (**Student**), fan moduli (**CourseModule**) va o'qituvchi (**Lecturer**) uchtasi birgalikda yagona dars mashg'ulotini hosil qiladi. Buni ikkita alohida binar aloqa (Student-Course va Course-Lecturer) orqali to'liq ifodalab bo'lmaydi, chunki talaba bitta fandan qaysi aniq domlada o'qiyotganini bilish uchun uch tomonlama birikuv shart. Modelda uchta mustaqil entitiy o'zaro markaziy dars rombi orqali bog'lanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `Student`: {PK} `studentId`, `studentName`, `groupNo`. 2. `CourseModule`: {PK} `moduleCode`, `title`, `credits`. 3. `Lecturer`: {PK} `lecturerId`, `lecturerName`, `roomNo`. 4. Har bir talaba modulni o'qituvchidan o'rganishi bo'yicha uch tomonlama munosabatlarni bog'lang (qat'iy bittalik va ixtiyoriy ko'plik munosabati).",
    "storyEn": "WIUT — Student, Course and Lecturer Ternary Association — Conceptual ER business case study.",
    "instruction": "'Student', 'CourseModule' va 'Lecturer' o'rtasida uch tomonlama munosabat modelini barpo eting.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "studentId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "studentName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "groupNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CourseModule",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "moduleCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "moduleCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "title",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "credits",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "studentId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lecturerId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Lecturer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "lecturerId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "lecturerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lecturerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Enrolls",
          "entity1": "Student",
          "entity2": "CourseModule",
          "fromEntityName": "Student",
          "toEntityName": "CourseModule",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "TaughtBy",
          "entity1": "CourseModule",
          "entity2": "Lecturer",
          "fromEntityName": "CourseModule",
          "toEntityName": "Lecturer",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Student",
          "pk": "studentId",
          "isWeak": false
        },
        {
          "name": "CourseModule",
          "pk": "moduleCode",
          "isWeak": false,
          "foreignKeys": [
            "studentId",
            "lecturerId"
          ]
        },
        {
          "name": "Lecturer",
          "pk": "lecturerId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "CourseModule",
          "fromEntityName": "Student",
          "toEntityName": "CourseModule",
          "mult1": "+",
          "mult2": "+",
          "name": "Enrolls",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CourseModule",
          "entity2": "Lecturer",
          "fromEntityName": "CourseModule",
          "toEntityName": "Lecturer",
          "mult1": "+",
          "mult2": "+",
          "name": "TaughtBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "МВУТ — Троичная ассоциация студентов, курсов и преподавателей (реляционная схема)",
    "storyRu": "WIUT — Тройная ассоциация студентов, курсов и преподавателей — Концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Академический декан МВУТ"
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Dr. Feruz Boboyev",
    "clientRole": "Respublika Klinikasi Bosh Farmakologi",
    "clientAvatar": "👨‍⚕️",
    "title": "Klinika — Bemor, Shifokor va Tayinlangan Dori (TreatsWithDrug) (Relatsion Sxema)",
    "titleEn": "Clinic — Patient, Doctor and Prescribed Drug Ternary Relationship (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Kasalxonada davolash jarayonida bemor (**Patient**), davolovchi shifokor (**Doctor**) va dori vositasi (**Medication**) uch tomonlama bitta davolash retsizmini tashkil etadi. Qaysi shifokor aynan qaysi bemorga qaysi dorini buyurganini aniq qayd etish uchun uchta entitiy o'zaro bog'lanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `Patient`: {PK} `patientId`, `fullName`, `diagnosis`. 2. `Doctor`: {PK} `doctorId`, `doctorName`, `specialty`. 3. `Medication`: {PK} `drugCode`, `drugName`, `dosage`. 4. Munosabatlarni o'rnatib, to'g'ri multiplisitiyalarni joylashtiring.",
    "storyEn": "Clinic — Patient, Doctor and Prescribed Drug Ternary Relationship — Conceptual ER business case study.",
    "instruction": "Bemor, shifokor va dori vositasi o'rtasidagi munosabatlar modelini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Patient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "patientId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "diagnosis",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Doctor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "doctorId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Medication",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "drugCode",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "drugCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "drugName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dosage",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "doctorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Treats",
          "entity1": "Doctor",
          "entity2": "Patient",
          "fromEntityName": "Doctor",
          "toEntityName": "Patient",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Prescribes",
          "entity1": "Doctor",
          "entity2": "Medication",
          "fromEntityName": "Doctor",
          "toEntityName": "Medication",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Patient",
          "pk": "patientId",
          "isWeak": false,
          "foreignKeys": [
            "doctorId"
          ]
        },
        {
          "name": "Doctor",
          "pk": "doctorId",
          "isWeak": false
        },
        {
          "name": "Medication",
          "pk": "drugCode",
          "isWeak": false,
          "foreignKeys": [
            "doctorId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Patient",
          "fromEntityName": "Doctor",
          "toEntityName": "Patient",
          "mult1": "+",
          "mult2": "+",
          "name": "Treats",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "Doctor",
          "entity2": "Medication",
          "fromEntityName": "Doctor",
          "toEntityName": "Medication",
          "mult1": "+",
          "mult2": "+",
          "name": "Prescribes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Тернарная связь «Клиника — пациент, врач и назначенное лекарство» (реляционная схема)",
    "storyRu": "Клиника — Тернарная связь между пациентом, врачом и прописанным лекарством — Концептуальный бизнес-кейс отделения неотложной помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный фармаколог Республиканской клиники"
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Shuhrat Bekmurodov",
    "clientRole": "UzAuto Ta'minot Boshqarmasi",
    "clientAvatar": "🔩",
    "title": "UzAuto Motors — Ta'minotchi, Ehtiyot Qism va Avtomobil Modeli (SuppliesComponent) (Relatsion Sxema)",
    "titleEn": "UzAuto Motors — Supplier, Part and Vehicle Model Ternary Supply (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Avtomobil yig'uvida ta'minotchi kompaniya (**AutoSupplier**), ehtiyot qism (**SparePart**) va chiqarilayotgan avtomobil modeli (**VehicleModel**) uchlik munosabatda bo'ladi. Bitta ta'minotchi aynan ma'lum bir mashina modeli (masalan, Tracker) uchun muayyan detallarni (masalan, bamper) yetkazib berishini aniq belgilash zarur. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `AutoSupplier`: {PK} `supplierId`, `companyName`, `country`. 2. `SparePart`: {PK} `partCode`, `partName`, `cost`. 3. `VehicleModel`: {PK} `modelCode`, `modelName`, `seriesYear`. 4. Uch tomonlama munosabatlarni bog'lang.",
    "storyEn": "UzAuto Motors — Supplier, Part and Vehicle Model Ternary Supply — Conceptual ER business case study.",
    "instruction": "Ta'minotchi, ehtiyot qism va avtomobil modeli bog'lanishlarini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AutoSupplier",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "supplierId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "supplierId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "country",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SparePart",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "partCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "partCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "partName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cost",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "supplierId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "modelCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "VehicleModel",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "modelCode",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "modelCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "modelName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seriesYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Produces",
          "entity1": "AutoSupplier",
          "entity2": "SparePart",
          "fromEntityName": "AutoSupplier",
          "toEntityName": "SparePart",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "FittedTo",
          "entity1": "SparePart",
          "entity2": "VehicleModel",
          "fromEntityName": "SparePart",
          "toEntityName": "VehicleModel",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AutoSupplier",
          "pk": "supplierId",
          "isWeak": false
        },
        {
          "name": "SparePart",
          "pk": "partCode",
          "isWeak": false,
          "foreignKeys": [
            "supplierId",
            "modelCode"
          ]
        },
        {
          "name": "VehicleModel",
          "pk": "modelCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "AutoSupplier",
          "entity2": "SparePart",
          "fromEntityName": "AutoSupplier",
          "toEntityName": "SparePart",
          "mult1": "+",
          "mult2": "+",
          "name": "Produces",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SparePart",
          "entity2": "VehicleModel",
          "fromEntityName": "SparePart",
          "toEntityName": "VehicleModel",
          "mult1": "+",
          "mult2": "+",
          "name": "FittedTo",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "UzAuto Motors — Поставщик, тройная поставка деталей и моделей транспортных средств (реляционная схема)",
    "storyRu": "UzAuto Motors — Поставщик, тройная поставка деталей и моделей транспортных средств — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Отдел снабжения УзАвто"
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Ravshan Ikromov",
    "clientRole": "AutoMotors Dilari",
    "clientAvatar": "🚙",
    "title": "Avtosalon — Savdo Agenti, Xaridor va Avtomobil Savdosi (ExecutesCarSale) (Relatsion Sxema)",
    "titleEn": "Auto Dealership — Sales Agent, Buyer and Car Sale Ternary Relationship (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Katta avtosalonda savdo agenti (**SalesAgent**), xaridor (**CarBuyer**) va salondagi avtomobil (**ShowroomCar**) o'rtasida sotuv bitimi amalga oshiriladi. Kim kimga qaysi mashinani sotganligi to'liq uchala ob'ektning birikuvidan hosil bo'ladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `SalesAgent`: {PK} `agentId`, `agentName`, `salesTier`. 2. `CarBuyer`: {PK} `buyerId`, `buyerName`, `phone`. 3. `ShowroomCar`: {PK} `vinCode`, `model`, `price`. 4. O'zaro bog'lanish chiziqlarini va multiplisitiyalarni to'g'ri o'rnating.",
    "storyEn": "Auto Dealership — Sales Agent, Buyer and Car Sale Ternary Relationship — Conceptual ER business case study.",
    "instruction": "Agent, xaridor va mashina o'rtasidagi sotuv munosabatini shakllantiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SalesAgent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "agentId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "agentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "agentName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "salesTier",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CarBuyer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "buyerId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "buyerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "buyerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "agentId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ShowroomCar",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "vinCode",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "vinCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "model",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "price",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "buyerId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Serves",
          "entity1": "SalesAgent",
          "entity2": "CarBuyer",
          "fromEntityName": "SalesAgent",
          "toEntityName": "CarBuyer",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Purchases",
          "entity1": "CarBuyer",
          "entity2": "ShowroomCar",
          "fromEntityName": "CarBuyer",
          "toEntityName": "ShowroomCar",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SalesAgent",
          "pk": "agentId",
          "isWeak": false
        },
        {
          "name": "CarBuyer",
          "pk": "buyerId",
          "isWeak": false,
          "foreignKeys": [
            "agentId"
          ]
        },
        {
          "name": "ShowroomCar",
          "pk": "vinCode",
          "isWeak": false,
          "foreignKeys": [
            "buyerId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SalesAgent",
          "entity2": "CarBuyer",
          "fromEntityName": "SalesAgent",
          "toEntityName": "CarBuyer",
          "mult1": "+",
          "mult2": "+",
          "name": "Serves",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CarBuyer",
          "entity2": "ShowroomCar",
          "fromEntityName": "CarBuyer",
          "toEntityName": "ShowroomCar",
          "mult1": "+",
          "mult2": "+",
          "name": "Purchases",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Автосалон — агент по продажам, покупатель и троичная связь продажи автомобиля (реляционная схема)",
    "storyRu": "Автосалон — торговый агент, покупатель и троичные отношения по продаже автомобилей — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Дилер АвтоМоторс"
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Murod Shodiyev",
    "clientRole": "Golden House Bosh Muhandisi",
    "clientAvatar": "🏗️",
    "title": "Qurilish — Pudratchi, Obyekt va Og'ir Texnika Birikuvi (DeploysMachinery) (Relatsion Sxema)",
    "titleEn": "Construction — Contractor, Building Site and Heavy Machinery Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Katta developerlik loyihasida qurilish pudratchisi (**BuildingContractor**), qurilish maydoni (**BuildingSite**) va og'ir texnika (**HeavyEquipment**) uch tomonlama reja asosida ishlatiladi. Qaysi pudratchi qaysi ob'ektda qaysi kran yoki ekskavatorni ishlatayotganini boshqarish uchun uchta entitiy birlashtiriladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `BuildingContractor`: {PK} `contractorId`, `companyName`. 2. `BuildingSite`: {PK} `siteCode`, `siteAddress`. 3. `HeavyEquipment`: {PK} `machineId`, `machineType`. 4. Multiplisitiyalarni aniqlab, aloqalarni bog'lang.",
    "storyEn": "Construction — Contractor, Building Site and Heavy Machinery Ternary — Conceptual ER business case study.",
    "instruction": "Pudratchi, maydon va og'ir texnika munosabatlarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BuildingContractor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "contractorId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "contractorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BuildingSite",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "siteCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "siteCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "siteAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contractorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "machineId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HeavyEquipment",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "machineId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "machineId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "machineType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "WorksOn",
          "entity1": "BuildingContractor",
          "entity2": "BuildingSite",
          "fromEntityName": "BuildingContractor",
          "toEntityName": "BuildingSite",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Deploys",
          "entity1": "BuildingSite",
          "entity2": "HeavyEquipment",
          "fromEntityName": "BuildingSite",
          "toEntityName": "HeavyEquipment",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BuildingContractor",
          "pk": "contractorId",
          "isWeak": false
        },
        {
          "name": "BuildingSite",
          "pk": "siteCode",
          "isWeak": false,
          "foreignKeys": [
            "contractorId",
            "machineId"
          ]
        },
        {
          "name": "HeavyEquipment",
          "pk": "machineId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "BuildingContractor",
          "entity2": "BuildingSite",
          "fromEntityName": "BuildingContractor",
          "toEntityName": "BuildingSite",
          "mult1": "+",
          "mult2": "+",
          "name": "WorksOn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "BuildingSite",
          "entity2": "HeavyEquipment",
          "fromEntityName": "BuildingSite",
          "toEntityName": "HeavyEquipment",
          "mult1": "+",
          "mult2": "+",
          "name": "Deploys",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Строительство — подрядчик, строительная площадка и троичная система тяжелого машиностроения (реляционная схема)",
    "storyRu": "Строительство — Подрядчик, Строительная площадка и Тяжелое машиностроение. Тройной анализ — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный инженер Золотого дома"
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Nargiza Mirsaidova",
    "clientRole": "Xalqaro Forum Bosh Koordinatori",
    "clientAvatar": "🎤",
    "title": "Ilmiy Forum — Ma'ruzachi, Sho'ba Mavzusi va Zal (PresentsAtSession) (Relatsion Sxema)",
    "titleEn": "Symposium — Speaker, Topic and Conference Hall Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Toshkentdagi xalqaro ilmiy simpoziumda ma'ruzachi olim (**KeynoteSpeaker**), ilmiy mavzu (**SymposiumTopic**) va konferentsiya zali (**SessionHall**) uch tomonlama taqsimlanadi. Qaysi olim qaysi mavzu bo'yicha qaysi zalda taqdimot qilishini modellashtirish talab etiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `KeynoteSpeaker`: {PK} `speakerId`, `speakerName`, `academicRank`. 2. `SymposiumTopic`: {PK} `topicCode`, `topicTitle`, `field`. 3. `SessionHall`: {PK} `hallId`, `hallName`, `capacity`. 4. Aloqalarni bog'lab, to'g'ri multiplisitiyalarni joylashtiring.",
    "storyEn": "Symposium — Speaker, Topic and Conference Hall Ternary — Conceptual ER business case study.",
    "instruction": "Ma'ruzachi, mavzu va zal o'rtasidagi bog'lanishlarni ifodalang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "KeynoteSpeaker",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "speakerId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "speakerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "speakerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "academicRank",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SymposiumTopic",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "topicCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "topicCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "topicTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "field",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "speakerId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hallId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SessionHall",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "hallId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "hallId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hallName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Covers",
          "entity1": "KeynoteSpeaker",
          "entity2": "SymposiumTopic",
          "fromEntityName": "KeynoteSpeaker",
          "toEntityName": "SymposiumTopic",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "HostedIn",
          "entity1": "SymposiumTopic",
          "entity2": "SessionHall",
          "fromEntityName": "SymposiumTopic",
          "toEntityName": "SessionHall",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "KeynoteSpeaker",
          "pk": "speakerId",
          "isWeak": false
        },
        {
          "name": "SymposiumTopic",
          "pk": "topicCode",
          "isWeak": false,
          "foreignKeys": [
            "speakerId",
            "hallId"
          ]
        },
        {
          "name": "SessionHall",
          "pk": "hallId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "KeynoteSpeaker",
          "entity2": "SymposiumTopic",
          "fromEntityName": "KeynoteSpeaker",
          "toEntityName": "SymposiumTopic",
          "mult1": "+",
          "mult2": "+",
          "name": "Covers",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SymposiumTopic",
          "entity2": "SessionHall",
          "fromEntityName": "SymposiumTopic",
          "toEntityName": "SessionHall",
          "mult1": "+",
          "mult2": "+",
          "name": "HostedIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Симпозиум — докладчик, тема и конференц-зал Тройной (реляционная схема)",
    "storyRu": "Симпозиум — Докладчик, Тема и Конференц-зал. Трехлетний период — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный координатор Международного форума"
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Akmal Tohirov",
    "clientRole": "Sug'urta Brokeri",
    "clientAvatar": "🛡️",
    "title": "Sug'urta — Broker, Korporativ Mijoz va Sug'urta Kompaniyasi (BrokersDeal) (Relatsion Sxema)",
    "titleEn": "Insurance — Broker, Corporate Client and Underwriter Carrier Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Sug'urta bozorida litsenziyali broker (**InsuranceBroker**) yirik korxona (**CorporateClient**) uchun eng maqbul sug'urta kompaniyasidan (**UnderwritingFirm**) polislarni kelishtirib beradi. Uch tomonlama shartnoma mantiqini aks ettiruvchi model talab etiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `InsuranceBroker`: {PK} `brokerId`, `brokerName`. 2. `CorporateClient`: {PK} `clientInn`, `companyName`. 3. `UnderwritingFirm`: {PK} `firmId`, `firmName`. 4. Munosabatlarni o'rnating va tekshiring.",
    "storyEn": "Insurance — Broker, Corporate Client and Underwriter Carrier Ternary — Conceptual ER business case study.",
    "instruction": "Broker, mijoz va sug'urtachi o'rtasidagi uchlik modelni tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "InsuranceBroker",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "brokerId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "brokerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "brokerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CorporateClient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "clientInn",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "clientInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "brokerId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "firmId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "UnderwritingFirm",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "firmId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "firmId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "firmName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Represents",
          "entity1": "InsuranceBroker",
          "entity2": "CorporateClient",
          "fromEntityName": "InsuranceBroker",
          "toEntityName": "CorporateClient",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "InsuredBy",
          "entity1": "CorporateClient",
          "entity2": "UnderwritingFirm",
          "fromEntityName": "CorporateClient",
          "toEntityName": "UnderwritingFirm",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "InsuranceBroker",
          "pk": "brokerId",
          "isWeak": false
        },
        {
          "name": "CorporateClient",
          "pk": "clientInn",
          "isWeak": false,
          "foreignKeys": [
            "brokerId",
            "firmId"
          ]
        },
        {
          "name": "UnderwritingFirm",
          "pk": "firmId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceBroker",
          "entity2": "CorporateClient",
          "fromEntityName": "InsuranceBroker",
          "toEntityName": "CorporateClient",
          "mult1": "+",
          "mult2": "+",
          "name": "Represents",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CorporateClient",
          "entity2": "UnderwritingFirm",
          "fromEntityName": "CorporateClient",
          "toEntityName": "UnderwritingFirm",
          "mult1": "+",
          "mult2": "+",
          "name": "InsuredBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Страхование — брокер, корпоративный клиент и андеррайтер, перевозчик, тройной (реляционная схема)",
    "storyRu": "Страхование — Брокер, Корпоративный клиент и Андеррайтер Перевозчик Тернарий — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Страховой брокер"
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Qahramon Sodiqov",
    "clientRole": "Toshkent Bojxona Posti Boshlig'i",
    "clientAvatar": "🚢",
    "title": "Bojxona — Yuk Tashuvchi, Terminal va Ekspeditsiya Firmasi (ClearsCargo) (Relatsion Sxema)",
    "titleEn": "Customs Hub — Cargo Carrier, Terminal and Forwarder Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Xalqaro multimodal tashuvlarda yuk tashuvchi transport (**CargoCarrier**), bojxona terminali (**CustomsTerminal**) va logistika ekspeditori (**FreightForwarder**) o'rtasida yuk deklaratsiyasi rasmiylashtiriladi. Uchta ob'ekt yagona bojxona jarayonida ishtirok etadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CargoCarrier`: {PK} `carrierId`, `carrierName`. 2. `CustomsTerminal`: {PK} `terminalCode`, `location`. 3. `FreightForwarder`: {PK} `forwarderInn`, `title`. 4. Barcha zarur munosabatlarni bog'lang.",
    "storyEn": "Customs Hub — Cargo Carrier, Terminal and Forwarder Ternary — Conceptual ER business case study.",
    "instruction": "Yuk tashuvchi, bojxona terminali va ekspeditor uchligini ifodalang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CargoCarrier",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "carrierId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "carrierId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "carrierName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CustomsTerminal",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "terminalCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "terminalCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "location",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "carrierId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "forwarderInn",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FreightForwarder",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "forwarderInn",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "forwarderInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "title",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "ArrivesAt",
          "entity1": "CargoCarrier",
          "entity2": "CustomsTerminal",
          "fromEntityName": "CargoCarrier",
          "toEntityName": "CustomsTerminal",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "ClearedBy",
          "entity1": "CustomsTerminal",
          "entity2": "FreightForwarder",
          "fromEntityName": "CustomsTerminal",
          "toEntityName": "FreightForwarder",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CargoCarrier",
          "pk": "carrierId",
          "isWeak": false
        },
        {
          "name": "CustomsTerminal",
          "pk": "terminalCode",
          "isWeak": false,
          "foreignKeys": [
            "carrierId",
            "forwarderInn"
          ]
        },
        {
          "name": "FreightForwarder",
          "pk": "forwarderInn",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "CargoCarrier",
          "entity2": "CustomsTerminal",
          "fromEntityName": "CargoCarrier",
          "toEntityName": "CustomsTerminal",
          "mult1": "+",
          "mult2": "+",
          "name": "ArrivesAt",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CustomsTerminal",
          "entity2": "FreightForwarder",
          "fromEntityName": "CustomsTerminal",
          "toEntityName": "FreightForwarder",
          "mult1": "+",
          "mult2": "+",
          "name": "ClearedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Таможенный узел — грузоперевозчик, терминал и экспедитор Тройная система (реляционная схема)",
    "storyRu": "Таможенный узел — Грузоперевозчик, Терминал и Экспедитор Тройной — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Начальник Ташкентского таможенного поста"
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Rustam Sa'diyev",
    "clientRole": "O'zbekfilm Rejissyori",
    "clientAvatar": "🎭",
    "title": "Kinostudiya — Aktyor, Film Ishlab Chiqarish va Obraz Roli (CastInRole) (Relatsion Sxema)",
    "titleEn": "Film Studio — Actor, Movie Production and Character Role Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Kinofilm suratga olishda aktyor (**FilmActor**), film loyihasi (**MovieProduction**) va ssenariydagi obraz (**CharacterRole**) o'rtasida kasting tanlovi o'tkaziladi. Qaysi aktyor qaysi kinoda qaysi qahramon rolini ijro etayotganini aniqlash uchun uch tomonlama aloqa zarur. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FilmActor`: {PK} `actorId`, `actorName`. 2. `MovieProduction`: {PK} `movieId`, `movieTitle`. 3. `CharacterRole`: {PK} `roleCode`, `roleName`. 4. Aloqalarni to'g'ri multiplisitiyalar bilan yakunlang.",
    "storyEn": "Film Studio — Actor, Movie Production and Character Role Ternary — Conceptual ER business case study.",
    "instruction": "Aktyor, film va qahramon roli munosabatlarini polotnoda quring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FilmActor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "actorId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "actorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "actorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MovieProduction",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "movieId",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "movieId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "movieTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "actorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CharacterRole",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "roleCode",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "roleCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roleName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "movieId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "ActsIn",
          "entity1": "FilmActor",
          "entity2": "MovieProduction",
          "fromEntityName": "FilmActor",
          "toEntityName": "MovieProduction",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Features",
          "entity1": "MovieProduction",
          "entity2": "CharacterRole",
          "fromEntityName": "MovieProduction",
          "toEntityName": "CharacterRole",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FilmActor",
          "pk": "actorId",
          "isWeak": false
        },
        {
          "name": "MovieProduction",
          "pk": "movieId",
          "isWeak": false,
          "foreignKeys": [
            "actorId"
          ]
        },
        {
          "name": "CharacterRole",
          "pk": "roleCode",
          "isWeak": false,
          "foreignKeys": [
            "movieId"
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FilmActor",
          "entity2": "MovieProduction",
          "fromEntityName": "FilmActor",
          "toEntityName": "MovieProduction",
          "mult1": "+",
          "mult2": "+",
          "name": "ActsIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "MovieProduction",
          "entity2": "CharacterRole",
          "fromEntityName": "MovieProduction",
          "toEntityName": "CharacterRole",
          "mult1": "+",
          "mult2": "+",
          "name": "Features",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Киностудия — актер, кинопроизводство и роль персонажа Тернарный (реляционная схема)",
    "storyRu": "Киностудия — актер, кинопроизводство и персонажные роли Тернари — Концептуальный бизнес-кейс скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Узбекский кинорежиссер"
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Prof. Anora Yoqubova",
    "clientRole": "Fanlar Akademiyasi Laboratoriya Mudiri",
    "clientAvatar": "🔬",
    "title": "Ilmiy Tadqiqot — Olim, Grant Loyihasi va Laboratoriya (ConductsExperiment) (Relatsion Sxema)",
    "titleEn": "Scientific Research — Scientist, Grant Project and Laboratory Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Ilmiy tadqiqotlar markazida tadqiqotchi olim (**ResearchScientist**), davlat granti loyihasi (**GrantProject**) va ixtisoslashgan laboratoriya (**LabFacility**) uch tomonlama integratsiyalashadi. Tajribalar o'tkazilishi aynan shu uchlikning birikuviga asoslanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `ResearchScientist`: {PK} `scientistId`, `fullName`. 2. `GrantProject`: {PK} `grantNo`, `projectTitle`. 3. `LabFacility`: {PK} `labCode`, `labName`. 4. Multiplisitiyalarni bitta majburiy hamda ixtiyoriy ko'plik ko'rinishida tanlang.",
    "storyEn": "Scientific Research — Scientist, Grant Project and Laboratory Ternary — Conceptual ER business case study.",
    "instruction": "Olim, grant va laboratoriya o'rtasidagi tadqiqot modelini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResearchScientist",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "scientistId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "scientistId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "GrantProject",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "grantNo",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "grantNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "projectTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "scientistId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "labCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LabFacility",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "labCode",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "labCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "labName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Conducts",
          "entity1": "ResearchScientist",
          "entity2": "GrantProject",
          "fromEntityName": "ResearchScientist",
          "toEntityName": "GrantProject",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "UsesFacility",
          "entity1": "GrantProject",
          "entity2": "LabFacility",
          "fromEntityName": "GrantProject",
          "toEntityName": "LabFacility",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ResearchScientist",
          "pk": "scientistId",
          "isWeak": false
        },
        {
          "name": "GrantProject",
          "pk": "grantNo",
          "isWeak": false,
          "foreignKeys": [
            "scientistId",
            "labCode"
          ]
        },
        {
          "name": "LabFacility",
          "pk": "labCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "ResearchScientist",
          "entity2": "GrantProject",
          "fromEntityName": "ResearchScientist",
          "toEntityName": "GrantProject",
          "mult1": "+",
          "mult2": "+",
          "name": "Conducts",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "GrantProject",
          "entity2": "LabFacility",
          "fromEntityName": "GrantProject",
          "toEntityName": "LabFacility",
          "mult1": "+",
          "mult2": "+",
          "name": "UsesFacility",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Научные исследования - ученый, грантовый проект и лабораторная тройная система (реляционная схема)",
    "storyRu": "Научные исследования — ученый, грантовый проект и лаборатория. Тройной анализ — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Заведующий лабораторией Академии наук"
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Dilshod Fayziyev",
    "clientRole": "Nestle Savdo Koordinatori",
    "clientAvatar": "🍫",
    "title": "Chakana Savdo — Merchendayzer, Brend Mahsuloti va Supermarket (MerchandisesProduct) (Relatsion Sxema)",
    "titleEn": "Retail Merchandising — Merchandiser, Brand Product and Store Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Katta chakana savdoda merchendayzer mutaxassis (**BrandMerchandiser**), brend mahsuloti (**PromotedProduct**) va savdo tarmog'i filiali (**SupermarketStore**) o'rtasida polka joylashuvi kelishiladi. Uchala bo'g'in o'rtasidagi harakatni modellashtirish talab etiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `BrandMerchandiser`: {PK} `merchandiserId`, `fullName`. 2. `PromotedProduct`: {PK} `sku`, `productName`. 3. `SupermarketStore`: {PK} `storeId`, `storeAddress`. 4. O'zaro munosabatlarni bog'lang.",
    "storyEn": "Retail Merchandising — Merchandiser, Brand Product and Store Ternary — Conceptual ER business case study.",
    "instruction": "Merchendayzer, mahsulot va supermarket o'rtasidagi munosabatlarni o'rnating.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BrandMerchandiser",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "merchandiserId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "merchandiserId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PromotedProduct",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "sku",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "sku",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "productName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "merchandiserId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storeId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupermarketStore",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "storeId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "storeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storeAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Supervises",
          "entity1": "BrandMerchandiser",
          "entity2": "PromotedProduct",
          "fromEntityName": "BrandMerchandiser",
          "toEntityName": "PromotedProduct",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "PlacedIn",
          "entity1": "PromotedProduct",
          "entity2": "SupermarketStore",
          "fromEntityName": "PromotedProduct",
          "toEntityName": "SupermarketStore",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BrandMerchandiser",
          "pk": "merchandiserId",
          "isWeak": false
        },
        {
          "name": "PromotedProduct",
          "pk": "sku",
          "isWeak": false,
          "foreignKeys": [
            "merchandiserId",
            "storeId"
          ]
        },
        {
          "name": "SupermarketStore",
          "pk": "storeId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "BrandMerchandiser",
          "entity2": "PromotedProduct",
          "fromEntityName": "BrandMerchandiser",
          "toEntityName": "PromotedProduct",
          "mult1": "+",
          "mult2": "+",
          "name": "Supervises",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "PromotedProduct",
          "entity2": "SupermarketStore",
          "fromEntityName": "PromotedProduct",
          "toEntityName": "SupermarketStore",
          "mult1": "+",
          "mult2": "+",
          "name": "PlacedIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Розничный мерчандайзинг — мерчендайзер, бренд-продукт и тройной магазин (реляционная схема)",
    "storyRu": "Розничный мерчендайзинг — мерчендайзер, бренд-продукт и магазин. Тройной анализ — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Координатор продаж Нестле"
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Olim Olimov",
    "clientRole": "Olimpiya Qo'mitasi Bosh Kotibi",
    "clientAvatar": "🥇",
    "title": "Sport — Sportchi, Sport Yo'nalishi va Chempionat Musobaqasi (EntersContest) (Relatsion Sxema)",
    "titleEn": "Sports — Athlete, Discipline and Championship Event Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Osiyo O'yinlarida sportchi (**SportAthlete**), sport yo'nalishi (**SportDiscipline**) va musobaqa bahsi (**ChampionshipEvent**) o'rtasida ro'yxatdan o'tish amalga oshiriladi. Qaysi sportchi aynan qaysi yo'nalishda qaysi chempionat musobaqasida ishtirok etishini belgilash zarur. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `SportAthlete`: {PK} `athleteId`, `athleteName`. 2. `SportDiscipline`: {PK} `disciplineCode`, `title`. 3. `ChampionshipEvent`: {PK} `eventId`, `eventName`. 4. Munosabatlarni to'g'ri multiplisitiyalar bilan yakunlang.",
    "storyEn": "Sports — Athlete, Discipline and Championship Event Ternary — Conceptual ER business case study.",
    "instruction": "Sportchi, sport turi va musobaqa uchligini modellashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SportAthlete",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "athleteId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "athleteId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "athleteName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SportDiscipline",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "disciplineCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "disciplineCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "title",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "athleteId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "eventId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ChampionshipEvent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "eventId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "eventId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "eventName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Specializes",
          "entity1": "SportAthlete",
          "entity2": "SportDiscipline",
          "fromEntityName": "SportAthlete",
          "toEntityName": "SportDiscipline",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "ContestedAt",
          "entity1": "SportDiscipline",
          "entity2": "ChampionshipEvent",
          "fromEntityName": "SportDiscipline",
          "toEntityName": "ChampionshipEvent",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SportAthlete",
          "pk": "athleteId",
          "isWeak": false
        },
        {
          "name": "SportDiscipline",
          "pk": "disciplineCode",
          "isWeak": false,
          "foreignKeys": [
            "athleteId",
            "eventId"
          ]
        },
        {
          "name": "ChampionshipEvent",
          "pk": "eventId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "SportAthlete",
          "entity2": "SportDiscipline",
          "fromEntityName": "SportAthlete",
          "toEntityName": "SportDiscipline",
          "mult1": "+",
          "mult2": "+",
          "name": "Specializes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SportDiscipline",
          "entity2": "ChampionshipEvent",
          "fromEntityName": "SportDiscipline",
          "toEntityName": "ChampionshipEvent",
          "mult1": "+",
          "mult2": "+",
          "name": "ContestedAt",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Спорт — спортсмен, дисциплина и чемпионат, троичная система (реляционная схема)",
    "storyRu": "Спорт — Спортсмен, Дисциплина и Чемпионат. Тройной период — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный секретарь Олимпийского комитета"
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Zuhra Aliyeva",
    "clientRole": "Davlat Test Markazi (DTM) Menejeri",
    "clientAvatar": "📝",
    "title": "DTM Imtihoni — Abituriyent, Fan Bloki va Nazoratchi Proktor (ProctorsExam) (Relatsion Sxema)",
    "titleEn": "DTM Examination — Examinee, Subject Block and Proctor Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Katta imtihon majmuasida abituriyent (**ExamineeStudent**), test fanlari bloki (**SubjectBlock**) va imtihon nazoratchisi (**ExamProctor**) uchtaligi bitta test seansida birlashadi. Nazorat va xolislikni ta'minlash uchun uchala tomon ro'yxatga olinadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `ExamineeStudent`: {PK} `examineeId`, `fullName`. 2. `SubjectBlock`: {PK} `blockCode`, `subjects`. 3. `ExamProctor`: {PK} `proctorId`, `proctorName`. 4. Uch tomonlama munosabatlarni polotnoda quring.",
    "storyEn": "DTM Examination — Examinee, Subject Block and Proctor Ternary — Conceptual ER business case study.",
    "instruction": "Abituriyent, fan bloki va nazoratchi o'rtasidagi bog'lanishlarni ifodalang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ExamineeStudent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "examineeId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "examineeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SubjectBlock",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "blockCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "blockCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "subjects",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "examineeId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "proctorId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ExamProctor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "proctorId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "proctorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "proctorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "AssignedBlock",
          "entity1": "ExamineeStudent",
          "entity2": "SubjectBlock",
          "fromEntityName": "ExamineeStudent",
          "toEntityName": "SubjectBlock",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SupervisedBy",
          "entity1": "SubjectBlock",
          "entity2": "ExamProctor",
          "fromEntityName": "SubjectBlock",
          "toEntityName": "ExamProctor",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ExamineeStudent",
          "pk": "examineeId",
          "isWeak": false
        },
        {
          "name": "SubjectBlock",
          "pk": "blockCode",
          "isWeak": false,
          "foreignKeys": [
            "examineeId",
            "proctorId"
          ]
        },
        {
          "name": "ExamProctor",
          "pk": "proctorId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "ExamineeStudent",
          "entity2": "SubjectBlock",
          "fromEntityName": "ExamineeStudent",
          "toEntityName": "SubjectBlock",
          "mult1": "+",
          "mult2": "+",
          "name": "AssignedBlock",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SubjectBlock",
          "entity2": "ExamProctor",
          "fromEntityName": "SubjectBlock",
          "toEntityName": "ExamProctor",
          "mult1": "+",
          "mult2": "+",
          "name": "SupervisedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Экзамен DTM — экзаменуемый, предметный блок и тройная система проктора (реляционная схема)",
    "storyRu": "Экзамен DTM — экзаменуемый, предметный блок и тройной инспектор — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер Государственного испытательного центра (ДТМ)"
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Nodira Karimova",
    "clientRole": "Microsoft O'zbekiston Hamkori",
    "clientAvatar": "💻",
    "title": "Dasturiy Ta'minot — Korporativ Mijoz, Dastur Moduli va Diler (LicensesSoftware) (Relatsion Sxema)",
    "titleEn": "Software Enterprise — Client, Software Module and Reseller Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Korporativ dasturlar litsenziyalash bozorida xaridor korxona (**EnterpriseBuyer**), dasturiy modul (**SoftwareModule**) va sertifikatlangan diler (**LicenseReseller**) o'rtasida bitim tuziladi. Qaysi diler qaysi korxonaga qaysi litsenziyani sotganini yuritish talab etiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `EnterpriseBuyer`: {PK} `companyInn`, `companyName`. 2. `SoftwareModule`: {PK} `moduleSku`, `moduleTitle`. 3. `LicenseReseller`: {PK} `resellerId`, `resellerName`. 4. Munosabatlarni to'g'ri multiplisitiyalar bilan yakunlang.",
    "storyEn": "Software Enterprise — Client, Software Module and Reseller Ternary — Conceptual ER business case study.",
    "instruction": "Korxona, dasturiy modul va diler munosabatlarini shakllantiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "EnterpriseBuyer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "companyInn",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "companyInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SoftwareModule",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "moduleSku",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "moduleSku",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "moduleTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyInn",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "resellerId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LicenseReseller",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "resellerId",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "resellerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "resellerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Purchases",
          "entity1": "EnterpriseBuyer",
          "entity2": "SoftwareModule",
          "fromEntityName": "EnterpriseBuyer",
          "toEntityName": "SoftwareModule",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "ProvidedBy",
          "entity1": "SoftwareModule",
          "entity2": "LicenseReseller",
          "fromEntityName": "SoftwareModule",
          "toEntityName": "LicenseReseller",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "EnterpriseBuyer",
          "pk": "companyInn",
          "isWeak": false
        },
        {
          "name": "SoftwareModule",
          "pk": "moduleSku",
          "isWeak": false,
          "foreignKeys": [
            "companyInn",
            "resellerId"
          ]
        },
        {
          "name": "LicenseReseller",
          "pk": "resellerId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "EnterpriseBuyer",
          "entity2": "SoftwareModule",
          "fromEntityName": "EnterpriseBuyer",
          "toEntityName": "SoftwareModule",
          "mult1": "+",
          "mult2": "+",
          "name": "Purchases",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SoftwareModule",
          "entity2": "LicenseReseller",
          "fromEntityName": "SoftwareModule",
          "toEntityName": "LicenseReseller",
          "mult1": "+",
          "mult2": "+",
          "name": "ProvidedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Программное обеспечение Enterprise — клиент, программный модуль и тройной реселлер (реляционная схема)",
    "storyRu": "Предприятие по разработке программного обеспечения — клиент, программный модуль и реселлер. Тройной метод — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Партнер Microsoft в Узбекистане"
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Kapitan Rustam Saidov",
    "clientRole": "Uzbekistan Airways Bosh Uchuvchisi",
    "clientAvatar": "✈️",
    "title": "Aviatsiya — Komandir Uchuvchi, Aviayo'nalish va Samolyot Borti (CommandsFlightRoute) (Relatsion Sxema)",
    "titleEn": "Aviation Fleet — Captain Pilot, Flight Route and Aircraft Ternary (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Xalqaro parvozlarda komandir uchuvchi (**FlightCaptain**), aviareys marshruti (**FlightRoute**) va avialayner samolyoti (**AircraftFleet**) uch tomonlama reys topshirig'ida birlashadi. Qaysi kapitan qaysi samolyotda qaysi xalqaro reysni boshqarganini aniqlash zarur. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FlightCaptain`: {PK} `captainLicense`, `fullName`. 2. `FlightRoute`: {PK} `routeCode`, `originDest`. 3. `AircraftFleet`: {PK} `tailNo`, `model`. 4. Multiplisitiyalarni to'g'ri o'rnatib, aloqalarni bog'lang.",
    "storyEn": "Aviation Fleet — Captain Pilot, Flight Route and Aircraft Ternary — Conceptual ER business case study.",
    "instruction": "Uchuvchi, reys yo'nalishi va samolyot o'rtasidagi munosabatni yakunlang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FlightCaptain",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "captainLicense",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "captainLicense",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FlightRoute",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "routeCode",
          "x": 540,
          "y": 120,
          "attributes": [
            {
              "name": "routeCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "originDest",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "captainLicense",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tailNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AircraftFleet",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "tailNo",
          "x": 330,
          "y": 320,
          "attributes": [
            {
              "name": "tailNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "model",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "AssignedRoute",
          "entity1": "FlightCaptain",
          "entity2": "FlightRoute",
          "fromEntityName": "FlightCaptain",
          "toEntityName": "FlightRoute",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "OperatedWith",
          "entity1": "FlightRoute",
          "entity2": "AircraftFleet",
          "fromEntityName": "FlightRoute",
          "toEntityName": "AircraftFleet",
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FlightCaptain",
          "pk": "captainLicense",
          "isWeak": false
        },
        {
          "name": "FlightRoute",
          "pk": "routeCode",
          "isWeak": false,
          "foreignKeys": [
            "captainLicense",
            "tailNo"
          ]
        },
        {
          "name": "AircraftFleet",
          "pk": "tailNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "FlightCaptain",
          "entity2": "FlightRoute",
          "fromEntityName": "FlightCaptain",
          "toEntityName": "FlightRoute",
          "mult1": "+",
          "mult2": "+",
          "name": "AssignedRoute",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "FlightRoute",
          "entity2": "AircraftFleet",
          "fromEntityName": "FlightRoute",
          "toEntityName": "AircraftFleet",
          "mult1": "+",
          "mult2": "+",
          "name": "OperatedWith",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "isWeek2": true,
    "titleRu": "Авиационный флот — капитан-пилот, маршрут полета и тройная система самолетов (реляционная схема)",
    "storyRu": "Авиационный флот — капитан-пилот, маршрут полета и тройная система самолетов — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный пилот «Узбекистон хаво йуллари»"
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Bobur Ziyodov",
    "clientRole": "Artel Xodimlar Boshqarmasi Boshlig'i",
    "clientAvatar": "👔",
    "title": "Artel Zavodi — Xodimlar va To'lov Usuli (Hourly vs Salaried) (Relatsion Sxema)",
    "titleEn": "Artel Manufacturing — Employee Disjoint Subclasses (Hourly vs Salaried) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nArtel maishiy texnika ishlab chiqarish zavodida barcha ishchilar umumiy **Employee** superklassida qayd etiladi. Ishchining to'lov tizimiga ko'ra korxonada qat'iy ikkita kesishmaydigan (Disjoint 'Or') toifa mavjud:\n1. Soatbay ishlovchi ishchilar (**HourlyEmployee**) — faqat ularga soatlik tarif stavkasi (`hourlyRate`) va ortiqcha ishlagan vaqt bonusi (`overtimeBonus`) hisoblanadi.\n2. Oylik maosh oluvchi menejerlar (**SalariedEmployee**) — ularga qat'iy oylik maosh (`annualSalary`) va yillik korporativ bonus (`bonusPct`) belgilanadi.\nZavodda har bir xodim MAJBURIY ravishda yo soatbay, yo oylikbay toifasiga kirishi shart, bir vaqtning o'zida ikkalasi bo'la olmaydi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `Employee` superklassini yarating: {PK} `empId`, `fullName`, `hireDate`.\n2. Ixtisoslashgan subklasslarni yarating:\n   - `HourlyEmployee`: `hourlyRate`, `overtimeBonus`.\n   - `SalariedEmployee`: `annualSalary`, `bonusPct`.\n3. Disjoint ierarxiya cheklovini {Mandatory, Or} deb belgilang.",
    "storyEn": "Artel Manufacturing — Employee Disjoint Subclasses (Hourly vs Salaried) — Conceptual ER business case study.",
    "instruction": "'Employee' superklassini va uning kesishmaydigan 'HourlyEmployee' hamda 'SalariedEmployee' subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "empId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "empId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hireDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HourlyEmployee",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SalariedEmployee",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "isWeak": false
        },
        {
          "name": "HourlyEmployee",
          "isWeak": false
        },
        {
          "name": "SalariedEmployee",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Employee",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "HourlyEmployee",
          "SalariedEmployee"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Производство Artel — непересекающиеся подклассы сотрудников (почасовая или окладная) (реляционная схема)",
    "storyRu": "Artel Manufacturing — Непересекающиеся подклассы сотрудников (почасовые и оплачиваемые) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Начальник отдела кадров Артели"
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Sardor Umarov",
    "clientRole": "Click Bosh Arxitektori",
    "clientAvatar": "💳",
    "title": "To'lov Protsessing — Naqd va Plastik Karta To'lovlari (Cash vs Card) (Relatsion Sxema)",
    "titleEn": "Payment Processing — Transaction Disjoint Subclasses (Cash vs Card) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKassalarda har bir to'lov umumiy **PaymentTransaction** superklassida yuritiladi (`txId`, `amountSum`, `txTimestamp`).\nTo'lov amalga oshirilganda mijoz to'lov vositasini tanlaydi:\n1. **CashPayment** — faqat naqd to'lovda qabul qilingan summa (`tenderedAmount`) va qaytarilgan qaytim (`changeGiven`) yoziladi.\n2. **CardPayment** — faqat karta to'lovida karta so'nggi 4 raqami (`cardLast4`), avtorizatsiya kodi (`authCode`) va terminal kodi (`terminalId`) yoziladi.\nHar bir to'lov qat'iy ravishda yo naqd, yo karta orqali o'tadi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `PaymentTransaction` superklassini chizing: {PK} `txId`, `amountSum`, `txTimestamp`.\n2. Kesishmaydigan subklasslarni qo'shing:\n   - `CashPayment`: `tenderedAmount`, `changeGiven`.\n   - `CardPayment`: `cardLast4`, `authCode`, `terminalId`.\n3. {Mandatory, Or} shartini qo'llang.",
    "storyEn": "Payment Processing — Transaction Disjoint Subclasses (Cash vs Card) — Conceptual ER business case study.",
    "instruction": "To'lovlar uchun Disjoint {Mandatory, Or} ixtisoslashuv modelini shakllantiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PaymentTransaction",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "txId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "txId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "amountSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CashPayment",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "CardPayment",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PaymentTransaction",
          "pk": "txId",
          "isWeak": false
        },
        {
          "name": "CashPayment",
          "isWeak": false
        },
        {
          "name": "CardPayment",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "PaymentTransaction",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "CashPayment",
          "CardPayment"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Обработка платежей — непересекающиеся подклассы транзакций (наличные или карты) (реляционная схема)",
    "storyRu": "Обработка платежей — непересекающиеся подклассы транзакций (наличные или карты) — концептуальное экономическое исследование ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Нажмите Главный архитектор"
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Murod Aliyev",
    "clientRole": "Yandex Go Logistika Parki",
    "clientAvatar": "🚚",
    "title": "Transport Parki — Yengil Mashina va Og'ir Yuk Mashinasi (Car vs Truck) (Relatsion Sxema)",
    "titleEn": "Fleet Management — Vehicle Disjoint Subclasses (Car vs Truck) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nYirik avtokorxonada barcha mashinalar **FleetVehicle** superklassi ostida jamlanadi (`vin`, `modelName`, `manufactureYear`).\nTransport vositalari texnik maqsadiga ko'ra ikki guruhga ajratiladi:\n1. **PassengerCar** — yengil mashinalar bo'lib, yo'lovchi o'rindiqlari soni (`seatingCapacity`) va yukxona hajmi litrda (`trunkVolumeLiters`) belgilanadi.\n2. **FreightTruck** — yuk mashinalari bo'lib, ruxsat etilgan yuk ko'tarish tonnaji (`cargoTonnage`) va o'qlar soni (`axleCount`) ko'rsatiladi.\nAvtomobil yo yengil, yo yuk mashinasi bo'lishi shart ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FleetVehicle` superklassini joylashtiring: {PK} `vin`, `modelName`, `manufactureYear`.\n2. Subklasslar: `PassengerCar` va `FreightTruck`.\n3. Disjoint {Mandatory, Or} cheklovini tanlang.",
    "storyEn": "Fleet Management — Vehicle Disjoint Subclasses (Car vs Truck) — Conceptual ER business case study.",
    "instruction": "'FleetVehicle' superklassi va 'PassengerCar' hamda 'FreightTruck' subklasslarini bog'lang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FleetVehicle",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "vin",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "vin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "modelName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "manufactureYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PassengerCar",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "FreightTruck",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FleetVehicle",
          "pk": "vin",
          "isWeak": false
        },
        {
          "name": "PassengerCar",
          "isWeak": false
        },
        {
          "name": "FreightTruck",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "FleetVehicle",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "PassengerCar",
          "FreightTruck"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Управление автопарком — непересекающиеся подклассы транспортных средств (автомобиль или грузовик) (реляционная схема)",
    "storyRu": "Управление автопарком. Непересекающиеся подклассы транспортных средств (легковые автомобили и грузовики). Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Логистический парк Яндекс Го"
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Nodira Karimova",
    "clientRole": "Kapitalbank Depozit Bo'limi Boshlig'i",
    "clientAvatar": "💰",
    "title": "Bank Hisoblari — Hisob-kitob va Muddatli Depozit (Checking vs Savings) (Relatsion Sxema)",
    "titleEn": "Banking Accounts — Disjoint Subclasses (Checking vs Savings Deposit) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nTijorat bankida barcha mijoz hisoblari **BankAccount** superklassiga tegishli (`accountNo`, `balanceSum`, `openDate`).\nHisob turlari bo'yicha qat'iy ikkita ajralgan toifa mavjud:\n1. **CheckingAccount** (Joriy hisob) — unga ruxsat etilgan overdraft limiti (`overdraftLimit`) va bog'langan debit karta raqami (`linkedCardNo`) biriktiriladi.\n2. **SavingsDeposit** (Jamg'arma omonat) — unga yillik foiz stavkasi (`interestRatePct`) va omonat muddati oylar soni (`maturityMonths`) belgilanadi.\nBitta hisob raqami bir vaqtda ham joriy, ham muddatli bo'la olmaydi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `BankAccount` superklassini chizing: {PK} `accountNo`, `balanceSum`, `openDate`.\n2. Subklasslar: `CheckingAccount` va `SavingsDeposit`.\n3. {Mandatory, Or} ixtisoslashuv shartini o'rnating.",
    "storyEn": "Banking Accounts — Disjoint Subclasses (Checking vs Savings Deposit) — Conceptual ER business case study.",
    "instruction": "Bank hisoblari uchun Disjoint {Mandatory, Or} modelini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "accountNo",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "balanceSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "openDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CheckingAccount",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SavingsDeposit",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "pk": "accountNo",
          "isWeak": false
        },
        {
          "name": "CheckingAccount",
          "isWeak": false
        },
        {
          "name": "SavingsDeposit",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "BankAccount",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "CheckingAccount",
          "SavingsDeposit"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Банковские счета — непересекающиеся подклассы (чековые и сберегательные депозиты) (реляционная схема)",
    "storyRu": "Банковские счета — непересекающиеся подклассы (чековые и сберегательные депозиты) — концептуальное экономическое исследование ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель депозитного отдела Капиталбанка"
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Dr. Ziyoda Shoazimova",
    "clientRole": "Respublika Shifoxonasi Qabul Bo'limi",
    "clientAvatar": "🏥",
    "title": "Shifoxona — Statsionar va Ambulator Bemorlar (InPatient vs OutPatient) (Relatsion Sxema)",
    "titleEn": "Hospital Registry — Patient Disjoint Subclasses (InPatient vs OutPatient) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nShifoxonada barcha bemorlar **HospitalPatient** superklassida yuritiladi (`patientId`, `fullName`, `bloodGroup`).\nDavolanish rejimiga ko'ra bemor qat'iy ikki toifadan biriga mansub bo'ladi:\n1. **InPatient** (Yotib davolanuvchi) — kasalxonaga yotqizilgan sana (`admitDate`), palata raqami (`wardNumber`) va koyka ID si (`bedId`).\n2. **OutPatient** (Qatnab davolanuvchi) — poliklinikaga kelgan sana (`clinicVisitDate`) va keyingi ko'rik sanasi (`nextAppointmentDate`).\nBemor ayni paytda yo yotib davolanadi, yo qatnab davolanadi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `HospitalPatient` superklassini yarating: {PK} `patientId`, `fullName`, `bloodGroup`.\n2. Subklasslar: `InPatient` va `OutPatient`.\n3. Disjoint {Mandatory, Or} munosabatini o'rnating.",
    "storyEn": "Hospital Registry — Patient Disjoint Subclasses (InPatient vs OutPatient) — Conceptual ER business case study.",
    "instruction": "'HospitalPatient' superklassi ostida 'InPatient' va 'OutPatient' subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalPatient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "patientId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "patientId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bloodGroup",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InPatient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "OutPatient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalPatient",
          "pk": "patientId",
          "isWeak": false
        },
        {
          "name": "InPatient",
          "isWeak": false
        },
        {
          "name": "OutPatient",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "HospitalPatient",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "InPatient",
          "OutPatient"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Реестр больницы — непересекающиеся подклассы пациентов (стационарный и амбулаторный) (реляционная схема)",
    "storyRu": "Больничный регистр — непересекающиеся подклассы пациентов (стационарный и амбулаторный пациенты) — концептуальное бизнес-кейс отделения неотложной помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Приемное отделение Республиканской больницы"
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Shahzod Qobilov",
    "clientRole": "WIUT Talabalar Ishlari Registratori",
    "clientAvatar": "🎓",
    "title": "Universitet — Bakalavr va Magistratura Talabalari (Undergraduate vs Postgraduate) (Relatsion Sxema)",
    "titleEn": "University — Student Disjoint Subclasses (Undergrad vs Postgrad) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nUniversitet axborot tizimida barcha talabalar **UniversityStudent** superklassi ostida ro'yxatga olinadi (`studentId`, `fullName`, `enrolledYear`).\nO'qish bosqichiga binoan talabalar kesishmaydigan ikki guruhga bo'linadi:\n1. **UndergraduateStudent** — maktab/kollej attestat raqami (`highSchoolDocNo`) va asosiy mutaxassislik kodi (`majorProgram`).\n2. **PostgraduateStudent** — bakalavrlik diplomi raqami (`bachelorDegreeNo`), dissertatsiya mavzusi (`thesisTopic`) va ilmiy rahbar ismi (`supervisorName`).\nTalaba bir vaqtda yo bakalavrda, yo magistraturada o'qiydi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `UniversityStudent` superklassi: {PK} `studentId`, `fullName`, `enrolledYear`.\n2. Subklasslar: `UndergraduateStudent` va `PostgraduateStudent`.\n3. Disjoint {Mandatory, Or} ixtisoslashuvini shakllantiring.",
    "storyEn": "University — Student Disjoint Subclasses (Undergrad vs Postgrad) — Conceptual ER business case study.",
    "instruction": "Talabalar uchun Disjoint {Mandatory, Or} modelini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UniversityStudent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "studentId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "enrolledYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "UndergraduateStudent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "PostgraduateStudent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "UniversityStudent",
          "pk": "studentId",
          "isWeak": false
        },
        {
          "name": "UndergraduateStudent",
          "isWeak": false
        },
        {
          "name": "PostgraduateStudent",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "UniversityStudent",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "UndergraduateStudent",
          "PostgraduateStudent"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Университет — непересекающиеся подклассы студентов (бакалавриат или аспирант) (реляционная схема)",
    "storyRu": "Университет — непересекающиеся подклассы студентов (бакалавр или аспирант) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Регистратор по делам студентов МВУТ"
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Lobar Hasanova",
    "clientRole": "Kadastr Agentligi Ko'chmas Mulk Reestri",
    "clientAvatar": "🏙️",
    "title": "Ko'chmas Mulk — Turar-joy va Tijoriy Bino (Residential vs Commercial) (Relatsion Sxema)",
    "titleEn": "Real Estate — Property Disjoint Subclasses (Residential vs Commercial) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nDavlat kadastr reyestrida barcha mulklar **RealEstateProperty** superklassida qayd etiladi (`cadastreNo`, `address`, `totalAreaSqm`).\nKo'chmas mulkdan foydalanish maqsadiga ko'ra ikki kesishmaydigan toifa mavjud:\n1. **ResidentialFlat** (Aholi yashash xonadoni) — xonalar soni (`roomCount`), qavat raqami (`floorNumber`) va balkon maydoni (`balconyArea`).\n2. **CommercialOffice** (Tijoriy ofis) — ish o'rinlari sig'imi (`workstationsCapacity`), majlislar zali soni (`meetingRoomsCount`) va QQS soliq to'lovchi kodi (`vatRegCode`).\nBitta kadastr ob'ekti yo turar-joy, yo noturar tijoriy ob'ekt bo'ladi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `RealEstateProperty` superklassini yarating: {PK} `cadastreNo`, `address`, `totalAreaSqm`.\n2. Subklasslar: `ResidentialFlat` va `CommercialOffice`.\n3. Disjoint {Mandatory, Or} cheklovini belgilang.",
    "storyEn": "Real Estate — Property Disjoint Subclasses (Residential vs Commercial) — Conceptual ER business case study.",
    "instruction": "Ko'chmas mulk bo'yicha Disjoint {Mandatory, Or} ierarxiyasini polotnoda quring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RealEstateProperty",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "cadastreNo",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "cadastreNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalAreaSqm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ResidentialFlat",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "CommercialOffice",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RealEstateProperty",
          "pk": "cadastreNo",
          "isWeak": false
        },
        {
          "name": "ResidentialFlat",
          "isWeak": false
        },
        {
          "name": "CommercialOffice",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "RealEstateProperty",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "ResidentialFlat",
          "CommercialOffice"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Недвижимость — непересекающиеся подклассы недвижимости (жилая и коммерческая) (реляционная схема)",
    "storyRu": "Недвижимость — Непересекающиеся подклассы недвижимости (жилая и коммерческая) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Кадастровое агентство, реестр недвижимости"
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Eldor Samatov",
    "clientRole": "Hyatt Regency Bosh Menejeri",
    "clientAvatar": "🛎️",
    "title": "Mehmonxona Xonalari — Standart va Prezident Lyuks (Standard vs Presidential) (Relatsion Sxema)",
    "titleEn": "Hotel Rooms — Room Disjoint Subclasses (Standard vs Suite) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nMehmonxona bron qilish tizimida barcha xonalar **HotelRoom** superklassida ro'yxatdan o'tadi (`roomNo`, `floorNumber`, `cleaningStatus`).\nXonalar toifasi bo'yicha aniq ikkita toifa mavjud:\n1. **StandardRoom** — alohida bitta kishilik karavotlar soni (`singleBedsCount`) va balkon mavjudligi (`hasBalcony`).\n2. **PresidentialSuite** — mehmonxona zallari soni (`livingRoomsCount`), jakuzi o'rnatilganligi (`jacuzziInstalled`) va shaxsiy xizmatkor ta'minlanganligi (`butlerService`).\nHar bir xona aniq bitta toifaga kiradi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `HotelRoom` superklassini yarating: {PK} `roomNo`, `floorNumber`, `cleaningStatus`.\n2. Subklasslar: `StandardRoom` va `PresidentialSuite`.\n3. Disjoint {Mandatory, Or} cheklovini tasdiqlang.",
    "storyEn": "Hotel Rooms — Room Disjoint Subclasses (Standard vs Suite) — Conceptual ER business case study.",
    "instruction": "Mehmonxona xonalarining Disjoint {Mandatory, Or} modelini shakllantiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HotelRoom",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "roomNo",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cleaningStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StandardRoom",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "PresidentialSuite",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HotelRoom",
          "pk": "roomNo",
          "isWeak": false
        },
        {
          "name": "StandardRoom",
          "isWeak": false
        },
        {
          "name": "PresidentialSuite",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "HotelRoom",
        "constraint": "{Optional, Or}",
        "subclasses": [
          "StandardRoom",
          "PresidentialSuite"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Номера в отеле — непересекающиеся подклассы номеров (стандартные и люксовые) (реляционная схема)",
    "storyRu": "Гостиничные номера — непересекающиеся подклассы номеров (стандартные и люксовые) — концептуальное бизнес-пример ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный директор Хаятт Ридженси"
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Jahongir G'aniyev",
    "clientRole": "Davlat Soliq Qo'mitasi Bosh Tahlilchisi",
    "clientAvatar": "⚖️",
    "title": "Mijozlar Reyestri — Jismoniy Shaxs va Yuridik Korxona (Individual vs Corporate) (Relatsion Sxema)",
    "titleEn": "Tax Registry — Client Disjoint Subclasses (Individual vs Corporate) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nElektron xizmatlar reyestrida har bir kontragent **TradeClient** superklassida yuritiladi (`clientId`, `contactPhone`, `emailAddress`).\nMijozning huquqiy maqomiga ko'ra qat'iy ikkita kesishmaydigan guruh mavjud:\n1. **IndividualCitizen** (Jismoniy shaxs) — fuqaroning 14 xonali JShShIR kodi (`pinflCode`) va pasport seriya raqami (`passportSeries`).\n2. **CorporateLegalEntity** (Yuridik shaxs) — tashkilotning 9 xonali STIR/INN raqami (`innNumber`), bank MFO/BIK kodi (`bankingBik`) va rahbarining F.I.Sh. (`directorFullName`).\nHar bir mijoz yo jismoniy fuqaro, yo yuridik korxona bo'lishi shart ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `TradeClient` superklassini yarating: {PK} `clientId`, `contactPhone`, `emailAddress`.\n2. Subklasslar: `IndividualCitizen` va `CorporateLegalEntity`.\n3. Disjoint {Mandatory, Or} shartini qo'ying.",
    "storyEn": "Tax Registry — Client Disjoint Subclasses (Individual vs Corporate) — Conceptual ER business case study.",
    "instruction": "Mijozlar uchun Disjoint {Mandatory, Or} modelini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TradeClient",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "clientId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "clientId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactPhone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "emailAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IndividualCitizen",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "CorporateLegalEntity",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TradeClient",
          "pk": "clientId",
          "isWeak": false
        },
        {
          "name": "IndividualCitizen",
          "isWeak": false
        },
        {
          "name": "CorporateLegalEntity",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "TradeClient",
        "constraint": "{Optional, Or}",
        "subclasses": [
          "IndividualCitizen",
          "CorporateLegalEntity"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Налоговый реестр — непересекающиеся подклассы клиентов (физические и юридические лица) (реляционная схема)",
    "storyRu": "Налоговый регистр — Непересекающиеся подклассы клиентов (индивидуальные и корпоративные) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный аналитик Государственного налогового комитета"
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Umid Vohidov",
    "clientRole": "Uzum Market Buyurtmalar Nazorati",
    "clientAvatar": "📦",
    "title": "Uzum Buyurtmalari — Filialdan Olib Ketish va Kuryer Yetkazishi (Pickup vs Delivery) (Relatsion Sxema)",
    "titleEn": "Uzum Orders — Order Fulfillment Disjoint Subclasses (Pickup vs Delivery) (Relational Schema)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nElektron tijoratda barcha buyurtmalar **CustomerOrder** superklassida yuritiladi (`orderNo`, `orderDate`, `totalSum`).\nFulfillment usuliga ko'ra buyurtma ikki xil kesishmaydigan rejimda yopiladi:\n1. **BranchPickupOrder** (Topshirish punktidan olish) — punkt kodi (`pickupPointCode`) va saqlash katagi raqami (`shelfBoxNo`).\n2. **CourierDeliveryOrder** (Eshikkacha kuryerlik yetkazishi) — kuryer ID si (`courierId`), yetkazish ko'chasi (`deliveryStreet`) va domofon kodi (`intercomCode`).\nBitta buyurtma yo punktga, yo kuryer orqali xonadonga yuboriladi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `CustomerOrder` superklassi: {PK} `orderNo`, `orderDate`, `totalSum`.\n2. Subklasslar: `BranchPickupOrder` va `CourierDeliveryOrder`.\n3. Disjoint {Mandatory, Or} munosabatini barpo eting.",
    "storyEn": "Uzum Orders — Order Fulfillment Disjoint Subclasses (Pickup vs Delivery) — Conceptual ER business case study.",
    "instruction": "Buyurtmalar uchun Disjoint {Mandatory, Or} modelini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CustomerOrder",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "orderNo",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "orderDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BranchPickupOrder",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "CourierDeliveryOrder",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 480,
          "y": 300,
          "attributes": []
        }
      ],
      "relationships": [],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CustomerOrder",
          "pk": "orderNo",
          "isWeak": false
        },
        {
          "name": "BranchPickupOrder",
          "isWeak": false
        },
        {
          "name": "CourierDeliveryOrder",
          "isWeak": false
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "CustomerOrder",
        "constraint": "{Optional, Or}",
        "subclasses": [
          "BranchPickupOrder",
          "CourierDeliveryOrder"
        ]
      }
    },
    "isWeek2": true,
    "titleRu": "Заказы Uzum — непересекающиеся подклассы выполнения заказов (самовывоз или доставка) (реляционная схема)",
    "storyRu": "Заказы Uzum — Непересекающиеся подклассы выполнения заказов (Самовывоз или доставка) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Контроль заказов на рынке Узум"
  }
];
