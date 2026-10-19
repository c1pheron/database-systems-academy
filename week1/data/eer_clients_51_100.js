var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.EER_CLIENTS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Rustam Ahmedov",
    "clientRole": "Uzbekistan Airways Chipta Nazorati",
    "clientAvatar": "✈️",
    "title": "Uzbekistan Airways — Yo'lovchi va Parvoz Broni (FlightBooking)",
    "titleEn": "Uzbekistan Airways — Passenger Flight Booking Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nAviakompaniyada yo'lovchi (**FlightPassenger**) turli reyslarda uchishi mumkin. Muntazam parvoz reysi (**ScheduledFlight**) esa yuzlab yo'lovchilarni tashiydi.\nO'rindiq raqami (`seatNumber`), xizmat klassi (`cabinClass`) va to'langan chipta narxi (`ticketPrice`) **FlightBooking** assotsiativ entitiyida jamlanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FlightPassenger`: {PK} `passportNo`, `passengerName`, `citizenship`.\n2. `ScheduledFlight`: {PK} `flightNumber`, `departureTime`, `destinationIata`.\n3. `FlightBooking`: {PK} `bookingRef`, `seatNumber`, `cabinClass`, `ticketPrice`.\n4. Ikkala master entitiyni `FlightBooking` ga `1..1` ⟷ `0..*` qilib ulang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Carries",
          "entity1": "ScheduledFlight",
          "entity2": "FlightBooking",
          "fromEntityName": "ScheduledFlight",
          "toEntityName": "FlightBooking",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FlightPassenger",
          "pk": "passportNo",
          "attributes": [
            {
              "name": "passportNo",
              "isPK": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "citizenship",
              "isPK": false
            }
          ]
        },
        {
          "name": "ScheduledFlight",
          "pk": "flightNumber",
          "attributes": [
            {
              "name": "flightNumber",
              "isPK": true
            },
            {
              "name": "departureTime",
              "isPK": false
            },
            {
              "name": "destinationIata",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightBooking",
          "pk": "bookingRef",
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true
            },
            {
              "name": "seatNumber",
              "isPK": false
            },
            {
              "name": "cabinClass",
              "isPK": false
            },
            {
              "name": "ticketPrice",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FlightPassenger",
          "entity2": "FlightBooking",
          "fromEntityName": "FlightPassenger",
          "toEntityName": "FlightBooking",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Carries",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Kamola Saidova",
    "clientRole": "Asaxiy Books Kutubxona Mudiri",
    "clientAvatar": "📚",
    "title": "Asaxiy Books — Kitobxon va Kitob Arendasi (BookRental)",
    "titleEn": "Asaxiy Books — Reader Book Rental Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nElektron va qog'oz kitoblar ijarasida kitobxon (**OnlineReader**) ko'plab kitoblarni oladi. Kitob (**LibraryBook**) esa navbatma-navbat turli kitobxonlarga ijaraga beriladi.\nIjara boshlangan sana (`rentalStartDate`), qaytarish muddati (`dueDate`) va ijara to'lovi (`rentalFee`) **BookRental** entitiysi orqali boshqariladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `OnlineReader`: {PK} `readerId`, `fullName`, `email`.\n2. `LibraryBook`: {PK} `isbnCode`, `bookTitle`, `authorName`.\n3. `BookRental`: {PK} `rentalId`, `rentalStartDate`, `dueDate`, `rentalFee`.\n4. Multiplisitiyalarni to'g'ri o'rnating: bitta ijara aniq bitta kitob va bitta kitobxonga tegishli (`1..1`).",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "RentedVia",
          "entity1": "LibraryBook",
          "entity2": "BookRental",
          "fromEntityName": "LibraryBook",
          "toEntityName": "BookRental",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "OnlineReader",
          "pk": "readerId",
          "attributes": [
            {
              "name": "readerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            }
          ]
        },
        {
          "name": "LibraryBook",
          "pk": "isbnCode",
          "attributes": [
            {
              "name": "isbnCode",
              "isPK": true
            },
            {
              "name": "bookTitle",
              "isPK": false
            },
            {
              "name": "authorName",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookRental",
          "pk": "rentalId",
          "attributes": [
            {
              "name": "rentalId",
              "isPK": true
            },
            {
              "name": "rentalStartDate",
              "isPK": false
            },
            {
              "name": "dueDate",
              "isPK": false
            },
            {
              "name": "rentalFee",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "OnlineReader",
          "entity2": "BookRental",
          "fromEntityName": "OnlineReader",
          "toEntityName": "BookRental",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "RentedVia",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Javohir Zokirov",
    "clientRole": "IT Park Sertifikatsiya Rahbari",
    "clientAvatar": "🎓",
    "title": "IT Park Academy — Talaba va Sertifikat Imtihoni (ExamAttempt)",
    "titleEn": "IT Park Academy — Student Certification Exam Attempt Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nProfessional IT sertifikatlash tizimida talaba (**CandidateStudent**) bir necha sertifikat imtihonlarini topshiradi. Imtihon (**CertificationExam**) har kuni o'nlab nomzodlar tomonidan topshiriladi.\nTopshirish sanasi (`attemptDate`), to'plangan ball foizi (`scorePercentage`) va muvaffaqiyat holati (`passedStatus`) **ExamAttempt** assotsiativ entitiysiga tegishlidir.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `CandidateStudent`: {PK} `candidateId`, `candidateName`, `pinfl`.\n2. `CertificationExam`: {PK} `examCode`, `examTitle`, `passingScore`.\n3. `ExamAttempt`: {PK} `attemptId`, `attemptDate`, `scorePercentage`, `passedStatus`.\n4. Multiplisitiyalarni `1..1` va `0..*` qilib bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Evaluates",
          "entity1": "CertificationExam",
          "entity2": "ExamAttempt",
          "fromEntityName": "CertificationExam",
          "toEntityName": "ExamAttempt",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CandidateStudent",
          "pk": "candidateId",
          "attributes": [
            {
              "name": "candidateId",
              "isPK": true
            },
            {
              "name": "candidateName",
              "isPK": false
            },
            {
              "name": "pinfl",
              "isPK": false
            }
          ]
        },
        {
          "name": "CertificationExam",
          "pk": "examCode",
          "attributes": [
            {
              "name": "examCode",
              "isPK": true
            },
            {
              "name": "examTitle",
              "isPK": false
            },
            {
              "name": "passingScore",
              "isPK": false
            }
          ]
        },
        {
          "name": "ExamAttempt",
          "pk": "attemptId",
          "attributes": [
            {
              "name": "attemptId",
              "isPK": true
            },
            {
              "name": "attemptDate",
              "isPK": false
            },
            {
              "name": "scorePercentage",
              "isPK": false
            },
            {
              "name": "passedStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CandidateStudent",
          "entity2": "ExamAttempt",
          "fromEntityName": "CandidateStudent",
          "toEntityName": "ExamAttempt",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Evaluates",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Dilnoza Hakimova",
    "clientRole": "Klinik Farmatsevt",
    "clientAvatar": "💊",
    "title": "Elektron Retsept Tizimi — Shifokor va Dori Vositalari (PrescriptionItem)",
    "titleEn": "Electronic Prescription — Doctor and Medication Prescription Item Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nShifoxona tizimida shifokor (**TreatingDoctor**) turli dori vositalarini yozib beradi. Dori vositasi (**MedicationDrug**) esa turli shifokorlar tomonidan tavsiya qilinadi.\nTavsiya qilingan doza (`dosageMg`), qabul qilish chastotasi (`frequencyPerDay`) va kurs davomiyligi (`durationDays`) **PrescriptionItem** assotsiativ entitiyida ifodalanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `TreatingDoctor`: {PK} `doctorId`, `doctorName`, `licenseNo`.\n2. `MedicationDrug`: {PK} `drugId`, `commercialName`, `activeSubstance`.\n3. `PrescriptionItem`: {PK} `prescriptionId`, `dosageMg`, `frequencyPerDay`, `durationDays`.\n4. Munosabatlarni to'g'ri o'rnating (`1..1` ⟷ `0..*`).",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "PrescribedIn",
          "entity1": "MedicationDrug",
          "entity2": "PrescriptionItem",
          "fromEntityName": "MedicationDrug",
          "toEntityName": "PrescriptionItem",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TreatingDoctor",
          "pk": "doctorId",
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true
            },
            {
              "name": "doctorName",
              "isPK": false
            },
            {
              "name": "licenseNo",
              "isPK": false
            }
          ]
        },
        {
          "name": "MedicationDrug",
          "pk": "drugId",
          "attributes": [
            {
              "name": "drugId",
              "isPK": true
            },
            {
              "name": "commercialName",
              "isPK": false
            },
            {
              "name": "activeSubstance",
              "isPK": false
            }
          ]
        },
        {
          "name": "PrescriptionItem",
          "pk": "prescriptionId",
          "attributes": [
            {
              "name": "prescriptionId",
              "isPK": true
            },
            {
              "name": "dosageMg",
              "isPK": false
            },
            {
              "name": "frequencyPerDay",
              "isPK": false
            },
            {
              "name": "durationDays",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TreatingDoctor",
          "entity2": "PrescriptionItem",
          "fromEntityName": "TreatingDoctor",
          "toEntityName": "PrescriptionItem",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "PrescribedIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Otabek Yusupov",
    "clientRole": "Hilton Mehmonxonasi Menejeri",
    "clientAvatar": "🏨",
    "title": "Hilton Mehmonxonasi — Korporativ Mijoz va Konferens Zal (HallBooking)",
    "titleEn": "Hilton Hotel — Corporate Client and Conference Hall Booking Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nXalqaro mehmonxonada korporativ mijoz (**CorporateClient**) biznes tadbirlar uchun zallarni bron qiladi. Konferens zal (**ConferenceHall**) turli kompaniyalarga arendaga beriladi.\nBron qilingan sana (`eventDate`), qatnashuvchilar soni (`attendeesCount`) va katering xizmati summasi (`cateringCost`) **HallBooking** assotsiativ entitiyida saqlanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `CorporateClient`: {PK} `companyId`, `companyName`, `contactPhone`.\n2. `ConferenceHall`: {PK} `hallCode`, `hallName`, `capacity`.\n3. `HallBooking`: {PK} `bookingId`, `eventDate`, `attendeesCount`, `cateringCost`.\n4. Multiplisitiyalarni `1..1` va `0..*` ko'rinishida tanlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ReservedBy",
          "entity1": "ConferenceHall",
          "entity2": "HallBooking",
          "fromEntityName": "ConferenceHall",
          "toEntityName": "HallBooking",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CorporateClient",
          "pk": "companyId",
          "attributes": [
            {
              "name": "companyId",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
            }
          ]
        },
        {
          "name": "ConferenceHall",
          "pk": "hallCode",
          "attributes": [
            {
              "name": "hallCode",
              "isPK": true
            },
            {
              "name": "hallName",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "HallBooking",
          "pk": "bookingId",
          "attributes": [
            {
              "name": "bookingId",
              "isPK": true
            },
            {
              "name": "eventDate",
              "isPK": false
            },
            {
              "name": "attendeesCount",
              "isPK": false
            },
            {
              "name": "cateringCost",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CorporateClient",
          "entity2": "HallBooking",
          "fromEntityName": "CorporateClient",
          "toEntityName": "HallBooking",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ReservedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Gulzoda Norova",
    "clientRole": "Apex Insurance Sug'urta Anderrayteri",
    "clientAvatar": "🛡️",
    "title": "Apex Sug'urta — Mijoz va Sug'urta Dasturi (UnderwrittenPolicy)",
    "titleEn": "Apex Insurance — Client and Insurance Program Policy Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nSug'urta bozorida fuqaro (**InsuredPerson**) bir necha xil dasturlar (avto, salomatlik, uy) bo'yicha sug'urtalanadi. Sug'urta dasturi (**InsurancePlan**) minglab fuqarolarga xizmat qiladi.\nYillik sug'urta mukofoti (`premiumSum`), tovon to'lash chegarasi (`coverageLimit`) va boshlanish sanasi (`startDate`) **UnderwrittenPolicy** assotsiativ entitiyida ifodalanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `InsuredPerson`: {PK} `personPinfl`, `fullName`, `city`.\n2. `InsurancePlan`: {PK} `planCode`, `planName`, `baseRate`.\n3. `UnderwrittenPolicy`: {PK} `policyNumber`, `premiumSum`, `coverageLimit`, `startDate`.\n4. Har bir polis aniq bitta mijoz va bitta dasturga birikkanligini (`1..1` ⟷ `0..*`) tasdiqlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AppliedTo",
          "entity1": "InsurancePlan",
          "entity2": "UnderwrittenPolicy",
          "fromEntityName": "InsurancePlan",
          "toEntityName": "UnderwrittenPolicy",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "InsuredPerson",
          "pk": "personPinfl",
          "attributes": [
            {
              "name": "personPinfl",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "city",
              "isPK": false
            }
          ]
        },
        {
          "name": "InsurancePlan",
          "pk": "planCode",
          "attributes": [
            {
              "name": "planCode",
              "isPK": true
            },
            {
              "name": "planName",
              "isPK": false
            },
            {
              "name": "baseRate",
              "isPK": false
            }
          ]
        },
        {
          "name": "UnderwrittenPolicy",
          "pk": "policyNumber",
          "attributes": [
            {
              "name": "policyNumber",
              "isPK": true
            },
            {
              "name": "premiumSum",
              "isPK": false
            },
            {
              "name": "coverageLimit",
              "isPK": false
            },
            {
              "name": "startDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "InsuredPerson",
          "entity2": "UnderwrittenPolicy",
          "fromEntityName": "InsuredPerson",
          "toEntityName": "UnderwrittenPolicy",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AppliedTo",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Sherzod Temirov",
    "clientRole": "Avtosalon Lizing Menejeri",
    "clientAvatar": "🚘",
    "title": "Avtosalon — Xaridor va Avtomobil Lizing Shartnomasi (CarLeaseContract)",
    "titleEn": "Car Dealership — Buyer and Vehicle Lease Contract Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nAvtosalonda tadbirkor (**CarBuyer**) bir necha avtomobillarni lizingga olishi mumkin. Lizingdagi avtomobil modeli (**VehicleStock**) esa bir necha shartnomalarda aylanadi.\nBoshlang'ich to'lov miqdori (`downPayment`), oylik to'lov (`monthlyInstallment`) va lizing muddati oylar soni (`termMonths`) **CarLeaseContract** assotsiativ entitiyida saqlanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `CarBuyer`: {PK} `buyerInn`, `buyerTitle`, `creditRating`.\n2. `VehicleStock`: {PK} `vinNumber`, `carModel`, `stickerPrice`.\n3. `CarLeaseContract`: {PK} `leaseContractNo`, `downPayment`, `monthlyInstallment`, `termMonths`.\n4. Ikkala tomonni `1..1` ⟷ `0..*` bilan bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "LeasedAs",
          "entity1": "VehicleStock",
          "entity2": "CarLeaseContract",
          "fromEntityName": "VehicleStock",
          "toEntityName": "CarLeaseContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CarBuyer",
          "pk": "buyerInn",
          "attributes": [
            {
              "name": "buyerInn",
              "isPK": true
            },
            {
              "name": "buyerTitle",
              "isPK": false
            },
            {
              "name": "creditRating",
              "isPK": false
            }
          ]
        },
        {
          "name": "VehicleStock",
          "pk": "vinNumber",
          "attributes": [
            {
              "name": "vinNumber",
              "isPK": true
            },
            {
              "name": "carModel",
              "isPK": false
            },
            {
              "name": "stickerPrice",
              "isPK": false
            }
          ]
        },
        {
          "name": "CarLeaseContract",
          "pk": "leaseContractNo",
          "attributes": [
            {
              "name": "leaseContractNo",
              "isPK": true
            },
            {
              "name": "downPayment",
              "isPK": false
            },
            {
              "name": "monthlyInstallment",
              "isPK": false
            },
            {
              "name": "termMonths",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CarBuyer",
          "entity2": "CarLeaseContract",
          "fromEntityName": "CarBuyer",
          "toEntityName": "CarLeaseContract",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "LeasedAs",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Sevara Shokirova",
    "clientRole": "Magic Cinema Bosh Administratori",
    "clientAvatar": "🎬",
    "title": "Kinoteatr — Tomoshabin va Kino Seansi Chiptasi (CinemaTicket)",
    "titleEn": "Magic Cinema — Viewer and Movie Session Ticket Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nZamonaviy kinoteatrda tomoshabin (**MovieViewer**) ko'plab seanslarga tushadi. Kino seansi (**CinemaSession**) esa zal to'la tomoshabinlarni qamrab oladi.\nQator raqami (`rowNumber`), o'rindiq joyi (`seatNumber`) va chipta narxi (`ticketPrice`) **CinemaTicket** assotsiativ entitiyida ifodalanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `MovieViewer`: {PK} `viewerPhone`, `viewerName`.\n2. `CinemaSession`: {PK} `sessionId`, `movieTitle`, `startTime`.\n3. `CinemaTicket`: {PK} `ticketCode`, `rowNumber`, `seatNumber`, `ticketPrice`.\n4. Multiplisitiyalarni `1..1` ⟷ `0..*` ko'rinishida tanlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Admits",
          "entity1": "CinemaSession",
          "entity2": "CinemaTicket",
          "fromEntityName": "CinemaSession",
          "toEntityName": "CinemaTicket",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MovieViewer",
          "pk": "viewerPhone",
          "attributes": [
            {
              "name": "viewerPhone",
              "isPK": true
            },
            {
              "name": "viewerName",
              "isPK": false
            }
          ]
        },
        {
          "name": "CinemaSession",
          "pk": "sessionId",
          "attributes": [
            {
              "name": "sessionId",
              "isPK": true
            },
            {
              "name": "movieTitle",
              "isPK": false
            },
            {
              "name": "startTime",
              "isPK": false
            }
          ]
        },
        {
          "name": "CinemaTicket",
          "pk": "ticketCode",
          "attributes": [
            {
              "name": "ticketCode",
              "isPK": true
            },
            {
              "name": "rowNumber",
              "isPK": false
            },
            {
              "name": "seatNumber",
              "isPK": false
            },
            {
              "name": "ticketPrice",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MovieViewer",
          "entity2": "CinemaTicket",
          "fromEntityName": "MovieViewer",
          "toEntityName": "CinemaTicket",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Admits",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Farrux Zohidov",
    "clientRole": "Murad Buildings Texnika Nazoratchisi",
    "clientAvatar": "🏗️",
    "title": "Qurilish Pudrati — Bosh Pudratchi va Og'ir Texnika Arendasi (MachineRental)",
    "titleEn": "Construction — Contractor and Heavy Machinery Rental Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKatta qurilish maydonlarida qurilish pudratchisi (**ConstructionFirm**) bir nechta og'ir texnikalarni (ekskavator, kran, buldozer) ijaraga oladi. Og'ir texnika (**HeavyMachinery**) turli ob'ektlarda navbati bilan ishlaydi.\nKundalik ijara narxi (`dailyRentalRate`), ishlangan soatlar hisobi (`operatingHours`) va operator xizmati qo'shilganligi (`operatorIncluded`) **MachineRental** assotsiativ entitiyida qayd etiladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `ConstructionFirm`: {PK} `firmInn`, `firmName`, `licenseGrade`.\n2. `HeavyMachinery`: {PK} `machineVin`, `machineType`, `tonnage`.\n3. `MachineRental`: {PK} `rentalSlipId`, `dailyRentalRate`, `operatingHours`, `operatorIncluded`.\n4. Ikkala master entitiyni `MachineRental` ga `1..1` ⟷ `0..*` bilan bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "EngagedBy",
          "entity1": "HeavyMachinery",
          "entity2": "MachineRental",
          "fromEntityName": "HeavyMachinery",
          "toEntityName": "MachineRental",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ConstructionFirm",
          "pk": "firmInn",
          "attributes": [
            {
              "name": "firmInn",
              "isPK": true
            },
            {
              "name": "firmName",
              "isPK": false
            },
            {
              "name": "licenseGrade",
              "isPK": false
            }
          ]
        },
        {
          "name": "HeavyMachinery",
          "pk": "machineVin",
          "attributes": [
            {
              "name": "machineVin",
              "isPK": true
            },
            {
              "name": "machineType",
              "isPK": false
            },
            {
              "name": "tonnage",
              "isPK": false
            }
          ]
        },
        {
          "name": "MachineRental",
          "pk": "rentalSlipId",
          "attributes": [
            {
              "name": "rentalSlipId",
              "isPK": true
            },
            {
              "name": "dailyRentalRate",
              "isPK": false
            },
            {
              "name": "operatingHours",
              "isPK": false
            },
            {
              "name": "operatorIncluded",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ConstructionFirm",
          "entity2": "MachineRental",
          "fromEntityName": "ConstructionFirm",
          "toEntityName": "MachineRental",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EngagedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "O'rta",
    "clientName": "Azizbek Rahmonov",
    "clientRole": "Express24 Kuryerlik Koordinatori",
    "clientAvatar": "🛵",
    "title": "Express24 — Kuryer va Restoran Filiali Smenasi (CourierShift)",
    "titleEn": "Express24 — Courier and Restaurant Branch Shift Association Class",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nTezkor yetkazib berish xizmatida motokuryer (**DeliveryCourier**) bir necha restoran filiallarida smenada turishi mumkin. Restoran filiali (**RestaurantBranch**) esa kuniga o'nlab kuryerlar navbatchiligidan foydalanadi.\nSmena sanasi (`shiftDate`), yetkazilgan buyurtmalar soni (`ordersDelivered`) va to'langan kafolatlangan gonorar (`guaranteedPay`) **CourierShift** assotsiativ entitiyida ifodalanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `DeliveryCourier`: {PK} `courierId`, `courierName`, `vehicleType`.\n2. `RestaurantBranch`: {PK} `branchId`, `brandName`, `district`.\n3. `CourierShift`: {PK} `shiftId`, `shiftDate`, `ordersDelivered`, `guaranteedPay`.\n4. Multiplisitiyalarni `1..1` ⟷ `0..*` tarzida bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "HostsShift",
          "entity1": "RestaurantBranch",
          "entity2": "CourierShift",
          "fromEntityName": "RestaurantBranch",
          "toEntityName": "CourierShift",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DeliveryCourier",
          "pk": "courierId",
          "attributes": [
            {
              "name": "courierId",
              "isPK": true
            },
            {
              "name": "courierName",
              "isPK": false
            },
            {
              "name": "vehicleType",
              "isPK": false
            }
          ]
        },
        {
          "name": "RestaurantBranch",
          "pk": "branchId",
          "attributes": [
            {
              "name": "branchId",
              "isPK": true
            },
            {
              "name": "brandName",
              "isPK": false
            },
            {
              "name": "district",
              "isPK": false
            }
          ]
        },
        {
          "name": "CourierShift",
          "pk": "shiftId",
          "attributes": [
            {
              "name": "shiftId",
              "isPK": true
            },
            {
              "name": "shiftDate",
              "isPK": false
            },
            {
              "name": "ordersDelivered",
              "isPK": false
            },
            {
              "name": "guaranteedPay",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DeliveryCourier",
          "entity2": "CourierShift",
          "fromEntityName": "DeliveryCourier",
          "toEntityName": "CourierShift",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "HostsShift",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Alisher Vohidov",
    "clientRole": "O'zmilliybank Kadrlar Boshqarmasi",
    "clientAvatar": "🏦",
    "title": "O'zmilliybank — Xodim va Rahbar Boshqaruv Ierarxiyasi (Manages)",
    "titleEn": "National Bank — Employee Manager Supervision Hierarchy",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nO'zbekiston Milliy Banki korporativ ierarxiyasida barcha ishchilar — oddiy kassirdan tortib boshqaruv raisigacha — bitta **Employee** entitiysiga tegishli.\nHar bir xodimning ko'pi bilan bitta bevosita rahbari (Manager) bo'lishi mumkin (`0..1` — Boshqaruv Raisining o'zida bevosita rahbar yo'q, boshqalarda esa 1 ta).\nBitta rahbar esa o'ziga bo'ysunuvchi 0 yoki undan ko'p xodimlarni boshqarishi mumkin (`0..*` — oddiy xodim qo'lida hech kim yo'q, rahbarda esa bir nechta xodim).\nBu munosabat bitta entitiyning o'z-o'ziga bog'lanuvchi Rekursiv (Unitar) aloqasi orqali modellashtiriladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `Employee` entitiysini joylashtiring: {PK} `empId`, `fullName`, `jobPosition`, `salary`.\n2. `Employee` dan chiquvchi va uning o'ziga qaytuvchi `Manages` rekursiv aloqasini o'rnating.\n3. Rahbar tomoniga `0..1` (Supervisor roli) va bo'ysunuvchi tomoniga `0..*` (Subordinate roli) multiplisitiyalarini qo'ying.",
    "storyEn": "National Bank — Employee Manager Supervision Hierarchy — Conceptual ER business case study.",
    "instruction": "'Employee' entitiysiga o'z-o'ziga bog'lanuvchi 'Manages' rekursiv aloqasini chizing va 0..1 hamda 0..* chegaralarini o'rnating.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "supervisor",
          "role2": "subordinate"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "jobPosition",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Employee",
          "fromEntityName": "Employee",
          "toEntityName": "Employee",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "Manages",
          "isIdentifying": false,
          "role1": "supervisor",
          "role2": "subordinate"
        }
      ]
    }
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Nodirbek Alimov",
    "clientRole": "Uzum Market Katalog Boshqaruvchisi",
    "clientAvatar": "🛍️",
    "title": "Uzum Market — Mahsulot Toifalari Daraxti (SubCategoryOf)",
    "titleEn": "Uzum Market — Product Category Tree Hierarchy",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nElektron savdo platformasida barcha toifalar yagona **ProductCategory** entitiyida saqlanadi. Masalan: 'Elektronika' -> 'Smartfonlar' -> 'Aksessuarlar' -> 'G'iloflar'.\nHar bir quyi toifaning ko'pi bilan bitta ota toifasi (Parent Category) bo'ladi (`0..1` — eng yuqori darajadagi bosh toifalarning ota toifasi yo'q, qolganlarida aniq 1 ta).\nBitta ota toifa esa o'z ichiga 0 yoki undan ko'p quyi toifalarni qamrab oladi (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `ProductCategory` entitiysini yarating: {PK} `categoryId`, `categoryName`, `slugUrl`.\n2. O'ziga qaytuvchi `SubCategoryOf` rekursiv aloqasini bog'lang.\n3. Ota toifa tomoniga `0..1` va quyi toifalar tomoniga `0..*` multiplisitiyasini qo'ying.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentCat",
          "role2": "subCat"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ProductCategory",
          "pk": "categoryId",
          "attributes": [
            {
              "name": "categoryId",
              "isPK": true
            },
            {
              "name": "categoryName",
              "isPK": false
            },
            {
              "name": "slugUrl",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ProductCategory",
          "entity2": "ProductCategory",
          "fromEntityName": "ProductCategory",
          "toEntityName": "ProductCategory",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "SubCategoryOf",
          "isIdentifying": false,
          "role1": "parentCat",
          "role2": "subCat"
        }
      ]
    }
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Olimjon Jo'rayev",
    "clientRole": "UzAuto Motors Konstruktori",
    "clientAvatar": "🚗",
    "title": "UzAuto Motors — Detallar va Jamlama Spetsifikatsiyasi (AssembledFrom)",
    "titleEn": "UzAuto Motors — Part Component Bill of Materials (BOM)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nAvtomobil ishlab chiqarishda ehtiyot qismlar va agregatlar yagona **PartComponent** (BOM - Bill of Materials) tizimida ro'yxatga olinadi. Masalan, 'Dvigatel' agregati o'z navbatida 'Porshen', 'Val' kabi detallardan yig'iladi, porshen esa o'z navbatida mayda halqalardan tashkil topadi.\nBitta murakkab detal ko'plab quyi qismlardan yig'ilishi mumkin (`1..*`), va bitta standart detal (masalan, bolt) turli xil yirik agregatlar tarkibiga kirishi mumkin (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `PartComponent`: {PK} `partNumber`, `partName`, `unitCost`, `weightKg`.\n2. Rekursiv aloqa: `AssembledFrom` bog'lanishini chizing.\n3. Multiplisitiyalarni: Agregat tomoniga `0..*` va butlovchi qismlar tomoniga `1..*` qilib belgilang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentAssembly",
          "role2": "subPart"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PartComponent",
          "pk": "partNumber",
          "attributes": [
            {
              "name": "partNumber",
              "isPK": true
            },
            {
              "name": "partName",
              "isPK": false
            },
            {
              "name": "unitCost",
              "isPK": false
            },
            {
              "name": "weightKg",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PartComponent",
          "entity2": "PartComponent",
          "fromEntityName": "PartComponent",
          "toEntityName": "PartComponent",
          "mult1": "0..*",
          "mult2": "1..*",
          "name": "AssembledFrom",
          "isIdentifying": false,
          "role1": "parentAssembly",
          "role2": "subPart"
        }
      ]
    }
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Zilola Ergasheva",
    "clientRole": "WIUT O'quv Rejalar Bo'limi",
    "clientAvatar": "📑",
    "title": "WIUT Universiteti — Fanlar va Prerekvizitlar Zanjiri (RequiresPrereq)",
    "titleEn": "WIUT University — Academic Course Prerequisite Chain",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nUniversitet o'quv dasturida ilg'or fanlarni o'qish uchun oldin boshlang'ich fanlarni o'zlashtirish shart (Prerequisite). Masalan, 'Advanced Databases' fanini o'qish uchun oldin 'Database Systems' fanini o'tash talab qilinadi. Barcha fanlar yagona **AcademicCourse** entitiyida jamlangan.\nBitta fanning bir nechta prerekvizitlari bo'lishi mumkin (`0..*` — 1-kurs boshlang'ich fanlarida prerekvizit umuman bo'lmasligi mumkin, 3-kurs fanida esa 2 ta).\nShuningdek, bitta tayanch fan kelgusida bir nechta yuqori kurs fanlari uchun prerekvizit bo'lib xizmat qilishi mumkin (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `AcademicCourse`: {PK} `courseCode`, `courseTitle`, `credits`.\n2. Rekursiv `RequiresPrereq` aloqasini o'rnating.\n3. Ikkala tomoniga ham `0..*` multiplisitiyasini tanlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "advancedCourse",
          "role2": "prerequisite"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AcademicCourse",
          "pk": "courseCode",
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true
            },
            {
              "name": "courseTitle",
              "isPK": false
            },
            {
              "name": "credits",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AcademicCourse",
          "entity2": "AcademicCourse",
          "fromEntityName": "AcademicCourse",
          "toEntityName": "AcademicCourse",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "RequiresPrereq",
          "isIdentifying": false,
          "role1": "advancedCourse",
          "role2": "prerequisite"
        }
      ]
    }
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Xurshid Yo'ldoshev",
    "clientRole": "FHDYo (ZAGS) Axborot Tizimi Boshlig'i",
    "clientAvatar": "💍",
    "title": "FHDYo — Fuqarolar va Nikoh Munosabati (MarriedTo)",
    "titleEn": "Civil Registry — Citizen Marriage 1:1 Recursive Association",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nFuqarolik holati dalolatnomalarini yozish (FHDYo) reyestrida har bir shaxs **Citizen** entitiyida ro'yxatga olinadi. O'zbekiston qonunchiligiga ko'ra, bitta fuqaro bir vaqtning o'zida ko'pi bilan bitta turmush o'rtog'iga ega bo'lishi mumkin.\nHali oila qurmagan fuqarolar uchun bu aloqa mavjud emas (`0..1`), oila qurganlar uchun esa bu aniq bitta boshqa fuqaroga ulanadi (`0..1`).\nBu klassik 1:1 ixtiyoriy (`0..1` ⟷ `0..1`) rekursiv munosabatdir.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `Citizen`: {PK} `pinfl`, `fullName`, `birthDate`, `gender`.\n2. O'ziga qaytuvchi `MarriedTo` rekursiv aloqasini chizing.\n3. Har ikkala uchiga ham `0..1` (ixtiyoriy bitta) multiplisitiyasini qo'ying.",
    "storyEn": "Civil Registry — Citizen Marriage 1:1 Recursive Association — Conceptual ER business case study.",
    "instruction": "'Citizen' entitiysiga 1:1 ixtiyoriy 'MarriedTo' rekursiv aloqasini o'rnating.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "spouse1",
          "role2": "spouse2"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Citizen",
          "pk": "pinfl",
          "attributes": [
            {
              "name": "pinfl",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            },
            {
              "name": "gender",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Citizen",
          "fromEntityName": "Citizen",
          "toEntityName": "Citizen",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "MarriedTo",
          "isIdentifying": false,
          "role1": "spouse1",
          "role2": "spouse2"
        }
      ]
    }
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Sardor Ahmedov",
    "clientRole": "Payme Growth Menejeri",
    "clientAvatar": "📱",
    "title": "Payme / Click — Foydalanuvchi Referral Taklif Tizimi (ReferredBy)",
    "titleEn": "Payme — User Account Referral Chain Recursive Association",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nTo'lov ilovasida marketing dasturi doirasida barcha a'zolar **UserAccount** entitiyida yuritiladi. Har bir yangi ro'yxatdan o'tuvchi faqat 1 ta mavjud foydalanuvchining promo-kodi orqali taklif qilinishi mumkin (`0..1` — mustaqil ro'yxatdan o'tganlarda taklifchi yo'q).\nMavjud faol a'zo esa o'z kodi orqali 0 yoki undan ko'p yangi do'stlarini taklif etishi mumkin (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `UserAccount`: {PK} `accountId`, `phoneNumber`, `referralCode`.\n2. Rekursiv `ReferredBy` aloqasini o'rnating.\n3. Taklif qiluvchi tomoniga `0..1`, yangi chaqirilganlar tomoniga `0..*` qo'ying.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "referrer",
          "role2": "referee"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "UserAccount",
          "pk": "accountId",
          "attributes": [
            {
              "name": "accountId",
              "isPK": true
            },
            {
              "name": "phoneNumber",
              "isPK": false
            },
            {
              "name": "referralCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "UserAccount",
          "entity2": "UserAccount",
          "fromEntityName": "UserAccount",
          "toEntityName": "UserAccount",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "ReferredBy",
          "isIdentifying": false,
          "role1": "referrer",
          "role2": "referee"
        }
      ]
    }
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Shavkat Qodirov",
    "clientRole": "Toshkent Metropoliteni Dispetcheri",
    "clientAvatar": "🚇",
    "title": "Toshkent Metropoliteni — Bekatlar Oraliq Zanjiri (NextTrackTo)",
    "titleEn": "Tashkent Metro — Station Adjacent Track Network",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nMetro poyezdlari harakati tarmog'ida barcha bekatlar yagona **MetroStation** entitiyida ro'yxatga olinadi. Har bir bekat o'z yo'nalishi bo'yicha ko'pi bilan 2 ta qo'shni bekatga (oldingi va keyingi) ulanadi.\nOxirgi boshlang'ich/yakuniy bekatlarda esa faqat 1 ta qo'shni bekat mavjud.\nShu sababli har ikkala tomon chegarasi `0..2` bo'lgan simmetrik rekursiv aloqa hosil bo'ladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `MetroStation`: {PK} `stationId`, `stationName`, `lineColor`.\n2. `NextTrackTo` rekursiv aloqasini chizing.\n3. Har ikki tomonga chegaralarni `0..2` (kamida 0 ta, ko'pi bilan 2 ta) qilib belgilang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "currentStation",
          "role2": "adjacentStation"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MetroStation",
          "pk": "stationId",
          "attributes": [
            {
              "name": "stationId",
              "isPK": true
            },
            {
              "name": "stationName",
              "isPK": false
            },
            {
              "name": "lineColor",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MetroStation",
          "entity2": "MetroStation",
          "fromEntityName": "MetroStation",
          "toEntityName": "MetroStation",
          "mult1": "0..2",
          "mult2": "0..2",
          "name": "NextTrackTo",
          "isIdentifying": false,
          "role1": "currentStation",
          "role2": "adjacentStation"
        }
      ]
    }
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Temur Rustamov",
    "clientRole": "Linux Server Tizim Arxitektori",
    "clientAvatar": "🐧",
    "title": "Linux Fayl Tizimi — Papkalar Ierarxiyasi (ContainsSubfolder)",
    "titleEn": "Linux File System — Directory Parent-Child Hierarchy",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nOperatsion tizim fayl tuzilmasida barcha kataloglar **FolderDirectory** entitiysiga tegishli. Masalan: `/var/log/nginx`.\nRoot (`/`) katalogidan tashqari har bir papkaning aniq bitta ota papkasi (Parent Folder) bo'ladi (`0..1`).\nBitta ota papka esa o'z ichida 0 yoki undan ko'p quyi papkalarni (Subfolders) saqlaydi (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FolderDirectory`: {PK} `folderId`, `folderPath`, `permissions`.\n2. Rekursiv `ContainsSubfolder` chizig'ini torting.\n3. Ota papka tomoniga `0..1`, ichki papkalar tomoniga `0..*` qo'ying.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentFolder",
          "role2": "subFolder"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FolderDirectory",
          "pk": "folderId",
          "attributes": [
            {
              "name": "folderId",
              "isPK": true
            },
            {
              "name": "folderPath",
              "isPK": false
            },
            {
              "name": "permissions",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FolderDirectory",
          "entity2": "FolderDirectory",
          "fromEntityName": "FolderDirectory",
          "toEntityName": "FolderDirectory",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "ContainsSubfolder",
          "isIdentifying": false,
          "role1": "parentFolder",
          "role2": "subFolder"
        }
      ]
    }
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "Jira Scrum Master",
    "clientAvatar": "📊",
    "title": "Jira / Gantt Jadvali — Loyiha Vazifalari Ketma-ketligi (PrecedesTask)",
    "titleEn": "Jira Project Management — Task Dependency Predecessor Association",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nIT loyihalarni boshqarishda barcha ishlar **ProjectTask** entitiysida saqlanadi. Gantt diagrammasiga binoan, ma'lum bir vazifani boshlashdan oldin boshqa bir nechta vazifalar tugatilgan bo'lishi shart (Predecessors).\nBitta vazifa bir nechta boshqa vazifalarga yo'l ochib berishi mumkin (`0..*`), va o'z navbatida boshqa bir necha vazifalarning tugashiga bog'liq bo'lishi mumkin (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `ProjectTask`: {PK} `taskId`, `taskTitle`, `estimatedHours`.\n2. Rekursiv `PrecedesTask` aloqasini o'rnating.\n3. Ikkala tomoniga ham ko'plik chegara: `0..*` o'rnating.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "predecessor",
          "role2": "successor"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ProjectTask",
          "pk": "taskId",
          "attributes": [
            {
              "name": "taskId",
              "isPK": true
            },
            {
              "name": "taskTitle",
              "isPK": false
            },
            {
              "name": "estimatedHours",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ProjectTask",
          "entity2": "ProjectTask",
          "fromEntityName": "ProjectTask",
          "toEntityName": "ProjectTask",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "PrecedesTask",
          "isIdentifying": false,
          "role1": "predecessor",
          "role2": "successor"
        }
      ]
    }
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Eldor Shomurodov",
    "clientRole": "O'zbekiston Futbol Assotsiatsiyasi Tahlilchisi",
    "clientAvatar": "⚽",
    "title": "O'zbekiston Superligasi — Futbol Klublari Uchrashuvi (PlaysMatchAgainst)",
    "titleEn": "Uzbekistan Super League — Football Club Fixture Schedule",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nFutbol chempionatidagi barcha jamoalar yagona **FootballClub** entitiyida qayd etiladi. Mavsum davomida bitta klub mezbon yoki mehmon sifatida boshqa klublar bilan o'yin o'tkazadi.\nBitta klub mavsumda ko'plab raqib klublar bilan kuch sinashadi (`0..*` ⟷ `0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FootballClub`: {PK} `clubId`, `clubName`, `homeStadium`.\n2. Rekursiv `PlaysMatchAgainst` aloqasini o'rnating.\n3. Ikkala tomoniga `0..*` (Home va Away) multiplisitiyasini tanlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "homeTeam",
          "role2": "awayTeam"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FootballClub",
          "pk": "clubId",
          "attributes": [
            {
              "name": "clubId",
              "isPK": true
            },
            {
              "name": "clubName",
              "isPK": false
            },
            {
              "name": "homeStadium",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FootballClub",
          "entity2": "FootballClub",
          "fromEntityName": "FootballClub",
          "toEntityName": "FootballClub",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "PlaysMatchAgainst",
          "isIdentifying": false,
          "role1": "homeTeam",
          "role2": "awayTeam"
        }
      ]
    }
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Bekzod Umarov",
    "clientRole": "Korzinka Logistika Boshlig'i",
    "clientAvatar": "🏭",
    "title": "Korzinka Logistika — Taqsimot Xablari Ichki Tranziti (TransfersCargoTo)",
    "titleEn": "Korzinka Logistics — Distribution Hub Internal Cargo Transfer",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nYirik taqsimot tizimida barcha omborxona majmualari **DistributionHub** entitiyida yuritiladi. Mahsulot zaxirasi yetishmaganda bitta mintaqaviy xab boshqa markaziy xabdan tovar yukini qabul qiladi yoki jo'natadi.\nBitta xab bir nechta boshqa xablarga tovar tranzit qilishi va boshqa xablardan qabul qilishi mumkin (`0..*` ⟷ `0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `DistributionHub`: {PK} `hubCode`, `cityLocation`, `capacityTons`.\n2. Rekursiv `TransfersCargoTo` aloqasini torting.\n3. Jo'natuvchi va qabul qiluvchi tomonlarga `0..*` multiplisitiyasini bering.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "sourceHub",
          "role2": "targetHub"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DistributionHub",
          "pk": "hubCode",
          "attributes": [
            {
              "name": "hubCode",
              "isPK": true
            },
            {
              "name": "cityLocation",
              "isPK": false
            },
            {
              "name": "capacityTons",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DistributionHub",
          "entity2": "DistributionHub",
          "fromEntityName": "DistributionHub",
          "toEntityName": "DistributionHub",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "TransfersCargoTo",
          "isIdentifying": false,
          "role1": "sourceHub",
          "role2": "targetHub"
        }
      ]
    }
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Anvar Qosimov",
    "clientRole": "Cisco Tarmoq Muhandisi",
    "clientAvatar": "🌐",
    "title": "Data Markaz — Tarmoq Kommutatorlari Magistrali (UplinkTo)",
    "titleEn": "Data Center — Network Switch Uplink Hierarchy",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nMa'lumotlar markazi kommutatsiya ierarxiyasida barcha apparatlar **NetworkSwitch** entitiyiga kiradi.\nHar bir chekka (Access) kommutator magistral tezlik uchun aniq bitta yuqori darajadagi Core kommutatoriga ulanadi (`0..1` — eng yuqori Core switchlarida uplink yo'q).\nBitta Core switch esa o'ziga bir nechta quyi switchlarni qabul qiladi (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `NetworkSwitch`: {PK} `switchMac`, `ipAddress`, `rackPosition`.\n2. Rekursiv `UplinkTo` aloqasini chizing.\n3. Master Core tomoniga `0..1` va quyi switchlar tomoniga `0..*` qo'ying.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "coreSwitch",
          "role2": "accessSwitch"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "NetworkSwitch",
          "pk": "switchMac",
          "attributes": [
            {
              "name": "switchMac",
              "isPK": true
            },
            {
              "name": "ipAddress",
              "isPK": false
            },
            {
              "name": "rackPosition",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "NetworkSwitch",
          "entity2": "NetworkSwitch",
          "fromEntityName": "NetworkSwitch",
          "toEntityName": "NetworkSwitch",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "UplinkTo",
          "isIdentifying": false,
          "role1": "coreSwitch",
          "role2": "accessSwitch"
        }
      ]
    }
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Jamshid Karimov",
    "clientRole": "Humo To'lov Tizimi Xavfsizlik Ofitseri",
    "clientAvatar": "💳",
    "title": "To'lov Tranzaksiyalari — Qaytish va Bekor Qilish Zanjiri (ReversesTx)",
    "titleEn": "Payment Processing — Transaction Refund Reversal Pair",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nTo'lov protsessingida barcha to'lovlar **FinancialTransaction** entitiysida saqlanadi. Agar xaridor xaridni bekor qilsa (Refund / Chargeback), yangi teskari tranzaksiya ochiladi va u asl tranzaksiyaga bog'lanadi.\nHar bir bekor qilish tranzaksiyasi aniq bitta asl to'lovga bog'langan (`0..1`), va bitta asl to'lov faqat 1 martagina to'liq qaytarilishi mumkin (`0..1`).\nBu klassik 1:1 ixtiyoriy (`0..1` ⟷ `0..1`) rekursiv munosabatdir.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FinancialTransaction`: {PK} `txId`, `amountSum`, `txTimestamp`.\n2. Rekursiv `ReversesTx` aloqasini o'rnating.\n3. Ikkala tomoniga `0..1` multiplisitiyasini bering.",
    "storyEn": "Payment Processing — Transaction Refund Reversal Pair — Conceptual ER business case study.",
    "instruction": "'FinancialTransaction' ga 1:1 ixtiyoriy 'ReversesTx' aloqasini o'rnating.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "originalTx",
          "role2": "reversalTx"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FinancialTransaction",
          "pk": "txId",
          "attributes": [
            {
              "name": "txId",
              "isPK": true
            },
            {
              "name": "amountSum",
              "isPK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FinancialTransaction",
          "entity2": "FinancialTransaction",
          "fromEntityName": "FinancialTransaction",
          "toEntityName": "FinancialTransaction",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "ReversesTx",
          "isIdentifying": false,
          "role1": "originalTx",
          "role2": "reversalTx"
        }
      ]
    }
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Muyassar Karimova",
    "clientRole": "Tarixiy Nasabnoma Tadqiqotchisi",
    "clientAvatar": "🌳",
    "title": "Shajara Daraxti — Ota-ona va Farzand Nasli (BiologicalParentOf)",
    "titleEn": "Genealogy Tree — Biological Parent Child Lineage",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nGenealogik tahlilda barcha shaxslar **FamilyPerson** entitiysida jamlanadi. Har bir insonning biologik jihatdan ko'pi bilan 2 ta ota-onasi (Ota va Ona) bo'ladi (`0..2` — shajarada eng qadimgi ajdodlarning ota-onasi kiritilmagan bo'lishi mumkin).\nBitta ota-ona esa hayot davomida 0 yoki undan ko'p farzandlarga ega bo'lishi mumkin (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FamilyPerson`: {PK} `personId`, `fullName`, `birthYear`.\n2. Rekursiv `BiologicalParentOf` aloqasini o'rnating.\n3. Ota-ona tomoniga `0..2`, farzandlar tomoniga `0..*` qo'ying.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parent",
          "role2": "child"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FamilyPerson",
          "pk": "personId",
          "attributes": [
            {
              "name": "personId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "birthYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FamilyPerson",
          "entity2": "FamilyPerson",
          "fromEntityName": "FamilyPerson",
          "toEntityName": "FamilyPerson",
          "mult1": "0..2",
          "mult2": "0..*",
          "name": "BiologicalParentOf",
          "isIdentifying": false,
          "role1": "parent",
          "role2": "child"
        }
      ]
    }
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "O'rta",
    "clientName": "Bobur Ziyodullayev",
    "clientRole": "Davlat Aktivlarini Boshqarish Agentligi",
    "clientAvatar": "🏛️",
    "title": "Xolding Ekotizimi — Bosh Kompaniya va Sho'ba Korxonalar (OwnsSubsidiary)",
    "titleEn": "Corporate Conglomerate — Holding Parent and Subsidiary Ownership",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nYirik korporativ xoldingda barcha yuridik shaxslar **CorporateHolding** entitiysida yuritiladi.\nHar bir sho'ba korxonaning nazorat paketi ko'pi bilan 1 ta bosh xolding kompaniyasiga tegishli bo'ladi (`0..1` — eng yuqori holdingning bosh kompaniyasi yo'q).\nBitta xolding kompaniyasi esa o'z tasarrufiga 0 yoki undan ortiq sho'ba korxonalarni birlashtirishi mumkin (`0..*`).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `CorporateHolding`: {PK} `holdingInn`, `legalName`, `charterCapital`.\n2. Rekursiv `OwnsSubsidiary` aloqasini o'rnating.\n3. Bosh xolding tomoniga `0..1` va sho'ba korxonalar tomoniga `0..*` qo'ying.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentHolding",
          "role2": "subsidiary"
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CorporateHolding",
          "pk": "holdingInn",
          "attributes": [
            {
              "name": "holdingInn",
              "isPK": true
            },
            {
              "name": "legalName",
              "isPK": false
            },
            {
              "name": "charterCapital",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CorporateHolding",
          "entity2": "CorporateHolding",
          "fromEntityName": "CorporateHolding",
          "toEntityName": "CorporateHolding",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "OwnsSubsidiary",
          "isIdentifying": false,
          "role1": "parentHolding",
          "role2": "subsidiary"
        }
      ]
    }
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Prof. Jonatan Klark",
    "clientRole": "WIUT Akademik Dekani",
    "clientAvatar": "👨‍🏫",
    "title": "WIUT — Talaba, Fan Moduli va O'qituvchi 3 Tomonlama Darsi (TakesClass)",
    "titleEn": "WIUT — Student, Course and Lecturer Ternary Association",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nUniversitet dars jadvalida talaba (**Student**), fan moduli (**CourseModule**) va o'qituvchi (**Lecturer**) uchtasi birgalikda yagona dars mashg'ulotini hosil qiladi.\nBuni ikkita alohida binar aloqa (Student-Course va Course-Lecturer) orqali to'liq ifodalab bo'lmaydi, chunki talaba bitta fandan qaysi aniq domlada o'qiyotganini bilish uchun uch tomonlama birikuv shart.\nModelda uchta mustaqil entitiy o'zaro markaziy dars rombi orqali bog'lanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `Student`: {PK} `studentId`, `studentName`, `groupNo`.\n2. `CourseModule`: {PK} `moduleCode`, `title`, `credits`.\n3. `Lecturer`: {PK} `lecturerId`, `lecturerName`, `roomNo`.\n4. Har bir talaba modulni o'qituvchidan o'rganishi bo'yicha uch tomonlama munosabatlarni bog'lang (`1..1` ⟷ `0..*`).",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "TaughtBy",
          "entity1": "CourseModule",
          "entity2": "Lecturer",
          "fromEntityName": "CourseModule",
          "toEntityName": "Lecturer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Student",
          "pk": "studentId",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "studentName",
              "isPK": false
            },
            {
              "name": "groupNo",
              "isPK": false
            }
          ]
        },
        {
          "name": "CourseModule",
          "pk": "moduleCode",
          "attributes": [
            {
              "name": "moduleCode",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "credits",
              "isPK": false
            }
          ]
        },
        {
          "name": "Lecturer",
          "pk": "lecturerId",
          "attributes": [
            {
              "name": "lecturerId",
              "isPK": true
            },
            {
              "name": "lecturerName",
              "isPK": false
            },
            {
              "name": "roomNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "CourseModule",
          "fromEntityName": "Student",
          "toEntityName": "CourseModule",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "TaughtBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Dr. Feruz Boboyev",
    "clientRole": "Respublika Klinikasi Bosh Farmakologi",
    "clientAvatar": "👨‍⚕️",
    "title": "Klinika — Bemor, Shifokor va Tayinlangan Dori (TreatsWithDrug)",
    "titleEn": "Clinic — Patient, Doctor and Prescribed Drug Ternary Relationship",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKasalxonada davolash jarayonida bemor (**Patient**), davolovchi shifokor (**Doctor**) va dori vositasi (**Medication**) uch tomonlama bitta davolash retsizmini tashkil etadi.\nQaysi shifokor aynan qaysi bemorga qaysi dorini buyurganini aniq qayd etish uchun uchta entitiy o'zaro bog'lanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `Patient`: {PK} `patientId`, `fullName`, `diagnosis`.\n2. `Doctor`: {PK} `doctorId`, `doctorName`, `specialty`.\n3. `Medication`: {PK} `drugCode`, `drugName`, `dosage`.\n4. Munosabatlarni o'rnatib, to'g'ri multiplisitiyalarni joylashtiring.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Prescribes",
          "entity1": "Doctor",
          "entity2": "Medication",
          "fromEntityName": "Doctor",
          "toEntityName": "Medication",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Patient",
          "pk": "patientId",
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "diagnosis",
              "isPK": false
            }
          ]
        },
        {
          "name": "Doctor",
          "pk": "doctorId",
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true
            },
            {
              "name": "doctorName",
              "isPK": false
            },
            {
              "name": "specialty",
              "isPK": false
            }
          ]
        },
        {
          "name": "Medication",
          "pk": "drugCode",
          "attributes": [
            {
              "name": "drugCode",
              "isPK": true
            },
            {
              "name": "drugName",
              "isPK": false
            },
            {
              "name": "dosage",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Patient",
          "fromEntityName": "Doctor",
          "toEntityName": "Patient",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Prescribes",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Shuhrat Bekmurodov",
    "clientRole": "UzAuto Ta'minot Boshqarmasi",
    "clientAvatar": "🔩",
    "title": "UzAuto Motors — Ta'minotchi, Ehtiyot Qism va Avtomobil Modeli (SuppliesComponent)",
    "titleEn": "UzAuto Motors — Supplier, Part and Vehicle Model Ternary Supply",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nAvtomobil yig'uvida ta'minotchi kompaniya (**AutoSupplier**), ehtiyot qism (**SparePart**) va chiqarilayotgan avtomobil modeli (**VehicleModel**) uchlik munosabatda bo'ladi.\nBitta ta'minotchi aynan ma'lum bir mashina modeli (masalan, Tracker) uchun muayyan detallarni (masalan, bamper) yetkazib berishini aniq belgilash zarur.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `AutoSupplier`: {PK} `supplierId`, `companyName`, `country`.\n2. `SparePart`: {PK} `partCode`, `partName`, `cost`.\n3. `VehicleModel`: {PK} `modelCode`, `modelName`, `seriesYear`.\n4. Uch tomonlama munosabatlarni bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "FittedTo",
          "entity1": "SparePart",
          "entity2": "VehicleModel",
          "fromEntityName": "SparePart",
          "toEntityName": "VehicleModel",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AutoSupplier",
          "pk": "supplierId",
          "attributes": [
            {
              "name": "supplierId",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "country",
              "isPK": false
            }
          ]
        },
        {
          "name": "SparePart",
          "pk": "partCode",
          "attributes": [
            {
              "name": "partCode",
              "isPK": true
            },
            {
              "name": "partName",
              "isPK": false
            },
            {
              "name": "cost",
              "isPK": false
            }
          ]
        },
        {
          "name": "VehicleModel",
          "pk": "modelCode",
          "attributes": [
            {
              "name": "modelCode",
              "isPK": true
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "seriesYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AutoSupplier",
          "entity2": "SparePart",
          "fromEntityName": "AutoSupplier",
          "toEntityName": "SparePart",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "FittedTo",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Ravshan Ikromov",
    "clientRole": "AutoMotors Dilari",
    "clientAvatar": "🚙",
    "title": "Avtosalon — Savdo Agenti, Xaridor va Avtomobil Savdosi (ExecutesCarSale)",
    "titleEn": "Auto Dealership — Sales Agent, Buyer and Car Sale Ternary Relationship",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKatta avtosalonda savdo agenti (**SalesAgent**), xaridor (**CarBuyer**) va salondagi avtomobil (**ShowroomCar**) o'rtasida sotuv bitimi amalga oshiriladi.\nKim kimga qaysi mashinani sotganligi to'liq uchala ob'ektning birikuvidan hosil bo'ladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `SalesAgent`: {PK} `agentId`, `agentName`, `salesTier`.\n2. `CarBuyer`: {PK} `buyerId`, `buyerName`, `phone`.\n3. `ShowroomCar`: {PK} `vinCode`, `model`, `price`.\n4. O'zaro bog'lanish chiziqlarini va multiplisitiyalarni to'g'ri o'rnating.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Purchases",
          "entity1": "CarBuyer",
          "entity2": "ShowroomCar",
          "fromEntityName": "CarBuyer",
          "toEntityName": "ShowroomCar",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SalesAgent",
          "pk": "agentId",
          "attributes": [
            {
              "name": "agentId",
              "isPK": true
            },
            {
              "name": "agentName",
              "isPK": false
            },
            {
              "name": "salesTier",
              "isPK": false
            }
          ]
        },
        {
          "name": "CarBuyer",
          "pk": "buyerId",
          "attributes": [
            {
              "name": "buyerId",
              "isPK": true
            },
            {
              "name": "buyerName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "ShowroomCar",
          "pk": "vinCode",
          "attributes": [
            {
              "name": "vinCode",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SalesAgent",
          "entity2": "CarBuyer",
          "fromEntityName": "SalesAgent",
          "toEntityName": "CarBuyer",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Purchases",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Murod Shodiyev",
    "clientRole": "Golden House Bosh Muhandisi",
    "clientAvatar": "🏗️",
    "title": "Qurilish — Pudratchi, Obyekt va Og'ir Texnika Birikuvi (DeploysMachinery)",
    "titleEn": "Construction — Contractor, Building Site and Heavy Machinery Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKatta developerlik loyihasida qurilish pudratchisi (**BuildingContractor**), qurilish maydoni (**BuildingSite**) va og'ir texnika (**HeavyEquipment**) uch tomonlama reja asosida ishlatiladi.\nQaysi pudratchi qaysi ob'ektda qaysi kran yoki ekskavatorni ishlatayotganini boshqarish uchun uchta entitiy birlashtiriladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `BuildingContractor`: {PK} `contractorId`, `companyName`.\n2. `BuildingSite`: {PK} `siteCode`, `siteAddress`.\n3. `HeavyEquipment`: {PK} `machineId`, `machineType`.\n4. Multiplisitiyalarni aniqlab, aloqalarni bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Deploys",
          "entity1": "BuildingSite",
          "entity2": "HeavyEquipment",
          "fromEntityName": "BuildingSite",
          "toEntityName": "HeavyEquipment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BuildingContractor",
          "pk": "contractorId",
          "attributes": [
            {
              "name": "contractorId",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            }
          ]
        },
        {
          "name": "BuildingSite",
          "pk": "siteCode",
          "attributes": [
            {
              "name": "siteCode",
              "isPK": true
            },
            {
              "name": "siteAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "HeavyEquipment",
          "pk": "machineId",
          "attributes": [
            {
              "name": "machineId",
              "isPK": true
            },
            {
              "name": "machineType",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BuildingContractor",
          "entity2": "BuildingSite",
          "fromEntityName": "BuildingContractor",
          "toEntityName": "BuildingSite",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "Deploys",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Nargiza Mirsaidova",
    "clientRole": "Xalqaro Forum Bosh Koordinatori",
    "clientAvatar": "🎤",
    "title": "Ilmiy Forum — Ma'ruzachi, Sho'ba Mavzusi va Zal (PresentsAtSession)",
    "titleEn": "Symposium — Speaker, Topic and Conference Hall Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nToshkentdagi xalqaro ilmiy simpoziumda ma'ruzachi olim (**KeynoteSpeaker**), ilmiy mavzu (**SymposiumTopic**) va konferentsiya zali (**SessionHall**) uch tomonlama taqsimlanadi.\nQaysi olim qaysi mavzu bo'yicha qaysi zalda taqdimot qilishini modellashtirish talab etiladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `KeynoteSpeaker`: {PK} `speakerId`, `speakerName`, `academicRank`.\n2. `SymposiumTopic`: {PK} `topicCode`, `topicTitle`, `field`.\n3. `SessionHall`: {PK} `hallId`, `hallName`, `capacity`.\n4. Aloqalarni bog'lab, to'g'ri multiplisitiyalarni joylashtiring.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "HostedIn",
          "entity1": "SymposiumTopic",
          "entity2": "SessionHall",
          "fromEntityName": "SymposiumTopic",
          "toEntityName": "SessionHall",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "KeynoteSpeaker",
          "pk": "speakerId",
          "attributes": [
            {
              "name": "speakerId",
              "isPK": true
            },
            {
              "name": "speakerName",
              "isPK": false
            },
            {
              "name": "academicRank",
              "isPK": false
            }
          ]
        },
        {
          "name": "SymposiumTopic",
          "pk": "topicCode",
          "attributes": [
            {
              "name": "topicCode",
              "isPK": true
            },
            {
              "name": "topicTitle",
              "isPK": false
            },
            {
              "name": "field",
              "isPK": false
            }
          ]
        },
        {
          "name": "SessionHall",
          "pk": "hallId",
          "attributes": [
            {
              "name": "hallId",
              "isPK": true
            },
            {
              "name": "hallName",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "KeynoteSpeaker",
          "entity2": "SymposiumTopic",
          "fromEntityName": "KeynoteSpeaker",
          "toEntityName": "SymposiumTopic",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "HostedIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Akmal Tohirov",
    "clientRole": "Sug'urta Brokeri",
    "clientAvatar": "🛡️",
    "title": "Sug'urta — Broker, Korporativ Mijoz va Sug'urta Kompaniyasi (BrokersDeal)",
    "titleEn": "Insurance — Broker, Corporate Client and Underwriter Carrier Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nSug'urta bozorida litsenziyali broker (**InsuranceBroker**) yirik korxona (**CorporateClient**) uchun eng maqbul sug'urta kompaniyasidan (**UnderwritingFirm**) polislarni kelishtirib beradi.\nUch tomonlama shartnoma mantiqini aks ettiruvchi model talab etiladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `InsuranceBroker`: {PK} `brokerId`, `brokerName`.\n2. `CorporateClient`: {PK} `clientInn`, `companyName`.\n3. `UnderwritingFirm`: {PK} `firmId`, `firmName`.\n4. Munosabatlarni o'rnating va tekshiring.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "InsuredBy",
          "entity1": "CorporateClient",
          "entity2": "UnderwritingFirm",
          "fromEntityName": "CorporateClient",
          "toEntityName": "UnderwritingFirm",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "InsuranceBroker",
          "pk": "brokerId",
          "attributes": [
            {
              "name": "brokerId",
              "isPK": true
            },
            {
              "name": "brokerName",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporateClient",
          "pk": "clientInn",
          "attributes": [
            {
              "name": "clientInn",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            }
          ]
        },
        {
          "name": "UnderwritingFirm",
          "pk": "firmId",
          "attributes": [
            {
              "name": "firmId",
              "isPK": true
            },
            {
              "name": "firmName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceBroker",
          "entity2": "CorporateClient",
          "fromEntityName": "InsuranceBroker",
          "toEntityName": "CorporateClient",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "InsuredBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Qahramon Sodiqov",
    "clientRole": "Toshkent Bojxona Posti Boshlig'i",
    "clientAvatar": "🚢",
    "title": "Bojxona — Yuk Tashuvchi, Terminal va Ekspeditsiya Firmasi (ClearsCargo)",
    "titleEn": "Customs Hub — Cargo Carrier, Terminal and Forwarder Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nXalqaro multimodal tashuvlarda yuk tashuvchi transport (**CargoCarrier**), bojxona terminali (**CustomsTerminal**) va logistika ekspeditori (**FreightForwarder**) o'rtasida yuk deklaratsiyasi rasmiylashtiriladi.\nUchta ob'ekt yagona bojxona jarayonida ishtirok etadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `CargoCarrier`: {PK} `carrierId`, `carrierName`.\n2. `CustomsTerminal`: {PK} `terminalCode`, `location`.\n3. `FreightForwarder`: {PK} `forwarderInn`, `title`.\n4. Barcha zarur munosabatlarni bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ClearedBy",
          "entity1": "CustomsTerminal",
          "entity2": "FreightForwarder",
          "fromEntityName": "CustomsTerminal",
          "toEntityName": "FreightForwarder",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CargoCarrier",
          "pk": "carrierId",
          "attributes": [
            {
              "name": "carrierId",
              "isPK": true
            },
            {
              "name": "carrierName",
              "isPK": false
            }
          ]
        },
        {
          "name": "CustomsTerminal",
          "pk": "terminalCode",
          "attributes": [
            {
              "name": "terminalCode",
              "isPK": true
            },
            {
              "name": "location",
              "isPK": false
            }
          ]
        },
        {
          "name": "FreightForwarder",
          "pk": "forwarderInn",
          "attributes": [
            {
              "name": "forwarderInn",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CargoCarrier",
          "entity2": "CustomsTerminal",
          "fromEntityName": "CargoCarrier",
          "toEntityName": "CustomsTerminal",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "ClearedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Rustam Sa'diyev",
    "clientRole": "O'zbekfilm Rejissyori",
    "clientAvatar": "🎭",
    "title": "Kinostudiya — Aktyor, Film Ishlab Chiqarish va Obraz Roli (CastInRole)",
    "titleEn": "Film Studio — Actor, Movie Production and Character Role Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKinofilm suratga olishda aktyor (**FilmActor**), film loyihasi (**MovieProduction**) va ssenariydagi obraz (**CharacterRole**) o'rtasida kasting tanlovi o'tkaziladi.\nQaysi aktyor qaysi kinoda qaysi qahramon rolini ijro etayotganini aniqlash uchun uch tomonlama aloqa zarur.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FilmActor`: {PK} `actorId`, `actorName`.\n2. `MovieProduction`: {PK} `movieId`, `movieTitle`.\n3. `CharacterRole`: {PK} `roleCode`, `roleName`.\n4. Aloqalarni to'g'ri multiplisitiyalar bilan yakunlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Features",
          "entity1": "MovieProduction",
          "entity2": "CharacterRole",
          "fromEntityName": "MovieProduction",
          "toEntityName": "CharacterRole",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FilmActor",
          "pk": "actorId",
          "attributes": [
            {
              "name": "actorId",
              "isPK": true
            },
            {
              "name": "actorName",
              "isPK": false
            }
          ]
        },
        {
          "name": "MovieProduction",
          "pk": "movieId",
          "attributes": [
            {
              "name": "movieId",
              "isPK": true
            },
            {
              "name": "movieTitle",
              "isPK": false
            }
          ]
        },
        {
          "name": "CharacterRole",
          "pk": "roleCode",
          "attributes": [
            {
              "name": "roleCode",
              "isPK": true
            },
            {
              "name": "roleName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FilmActor",
          "entity2": "MovieProduction",
          "fromEntityName": "FilmActor",
          "toEntityName": "MovieProduction",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Features",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Prof. Anora Yoqubova",
    "clientRole": "Fanlar Akademiyasi Laboratoriya Mudiri",
    "clientAvatar": "🔬",
    "title": "Ilmiy Tadqiqot — Olim, Grant Loyihasi va Laboratoriya (ConductsExperiment)",
    "titleEn": "Scientific Research — Scientist, Grant Project and Laboratory Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nIlmiy tadqiqotlar markazida tadqiqotchi olim (**ResearchScientist**), davlat granti loyihasi (**GrantProject**) va ixtisoslashgan laboratoriya (**LabFacility**) uch tomonlama integratsiyalashadi.\nTajribalar o'tkazilishi aynan shu uchlikning birikuviga asoslanadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `ResearchScientist`: {PK} `scientistId`, `fullName`.\n2. `GrantProject`: {PK} `grantNo`, `projectTitle`.\n3. `LabFacility`: {PK} `labCode`, `labName`.\n4. Multiplisitiyalarni `1..1` va `0..*` ko'rinishida tanlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "UsesFacility",
          "entity1": "GrantProject",
          "entity2": "LabFacility",
          "fromEntityName": "GrantProject",
          "toEntityName": "LabFacility",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ResearchScientist",
          "pk": "scientistId",
          "attributes": [
            {
              "name": "scientistId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            }
          ]
        },
        {
          "name": "GrantProject",
          "pk": "grantNo",
          "attributes": [
            {
              "name": "grantNo",
              "isPK": true
            },
            {
              "name": "projectTitle",
              "isPK": false
            }
          ]
        },
        {
          "name": "LabFacility",
          "pk": "labCode",
          "attributes": [
            {
              "name": "labCode",
              "isPK": true
            },
            {
              "name": "labName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ResearchScientist",
          "entity2": "GrantProject",
          "fromEntityName": "ResearchScientist",
          "toEntityName": "GrantProject",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "UsesFacility",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Dilshod Fayziyev",
    "clientRole": "Nestle Savdo Koordinatori",
    "clientAvatar": "🍫",
    "title": "Chakana Savdo — Merchendayzer, Brend Mahsuloti va Supermarket (MerchandisesProduct)",
    "titleEn": "Retail Merchandising — Merchandiser, Brand Product and Store Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKatta chakana savdoda merchendayzer mutaxassis (**BrandMerchandiser**), brend mahsuloti (**PromotedProduct**) va savdo tarmog'i filiali (**SupermarketStore**) o'rtasida polka joylashuvi kelishiladi.\nUchala bo'g'in o'rtasidagi harakatni modellashtirish talab etiladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `BrandMerchandiser`: {PK} `merchandiserId`, `fullName`.\n2. `PromotedProduct`: {PK} `sku`, `productName`.\n3. `SupermarketStore`: {PK} `storeId`, `storeAddress`.\n4. O'zaro munosabatlarni bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "PlacedIn",
          "entity1": "PromotedProduct",
          "entity2": "SupermarketStore",
          "fromEntityName": "PromotedProduct",
          "toEntityName": "SupermarketStore",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BrandMerchandiser",
          "pk": "merchandiserId",
          "attributes": [
            {
              "name": "merchandiserId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            }
          ]
        },
        {
          "name": "PromotedProduct",
          "pk": "sku",
          "attributes": [
            {
              "name": "sku",
              "isPK": true
            },
            {
              "name": "productName",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupermarketStore",
          "pk": "storeId",
          "attributes": [
            {
              "name": "storeId",
              "isPK": true
            },
            {
              "name": "storeAddress",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BrandMerchandiser",
          "entity2": "PromotedProduct",
          "fromEntityName": "BrandMerchandiser",
          "toEntityName": "PromotedProduct",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "PlacedIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Olim Olimov",
    "clientRole": "Olimpiya Qo'mitasi Bosh Kotibi",
    "clientAvatar": "🥇",
    "title": "Sport — Sportchi, Sport Yo'nalishi va Chempionat Musobaqasi (EntersContest)",
    "titleEn": "Sports — Athlete, Discipline and Championship Event Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nOsiyo O'yinlarida sportchi (**SportAthlete**), sport yo'nalishi (**SportDiscipline**) va musobaqa bahsi (**ChampionshipEvent**) o'rtasida ro'yxatdan o'tish amalga oshiriladi.\nQaysi sportchi aynan qaysi yo'nalishda qaysi chempionat musobaqasida ishtirok etishini belgilash zarur.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `SportAthlete`: {PK} `athleteId`, `athleteName`.\n2. `SportDiscipline`: {PK} `disciplineCode`, `title`.\n3. `ChampionshipEvent`: {PK} `eventId`, `eventName`.\n4. Munosabatlarni to'g'ri multiplisitiyalar bilan yakunlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ContestedAt",
          "entity1": "SportDiscipline",
          "entity2": "ChampionshipEvent",
          "fromEntityName": "SportDiscipline",
          "toEntityName": "ChampionshipEvent",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SportAthlete",
          "pk": "athleteId",
          "attributes": [
            {
              "name": "athleteId",
              "isPK": true
            },
            {
              "name": "athleteName",
              "isPK": false
            }
          ]
        },
        {
          "name": "SportDiscipline",
          "pk": "disciplineCode",
          "attributes": [
            {
              "name": "disciplineCode",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChampionshipEvent",
          "pk": "eventId",
          "attributes": [
            {
              "name": "eventId",
              "isPK": true
            },
            {
              "name": "eventName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SportAthlete",
          "entity2": "SportDiscipline",
          "fromEntityName": "SportAthlete",
          "toEntityName": "SportDiscipline",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "ContestedAt",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Zuhra Aliyeva",
    "clientRole": "Davlat Test Markazi (DTM) Menejeri",
    "clientAvatar": "📝",
    "title": "DTM Imtihoni — Abituriyent, Fan Bloki va Nazoratchi Proktor (ProctorsExam)",
    "titleEn": "DTM Examination — Examinee, Subject Block and Proctor Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKatta imtihon majmuasida abituriyent (**ExamineeStudent**), test fanlari bloki (**SubjectBlock**) va imtihon nazoratchisi (**ExamProctor**) uchtaligi bitta test seansida birlashadi.\nNazorat va xolislikni ta'minlash uchun uchala tomon ro'yxatga olinadi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `ExamineeStudent`: {PK} `examineeId`, `fullName`.\n2. `SubjectBlock`: {PK} `blockCode`, `subjects`.\n3. `ExamProctor`: {PK} `proctorId`, `proctorName`.\n4. Uch tomonlama munosabatlarni polotnoda quring.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "SupervisedBy",
          "entity1": "SubjectBlock",
          "entity2": "ExamProctor",
          "fromEntityName": "SubjectBlock",
          "toEntityName": "ExamProctor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ExamineeStudent",
          "pk": "examineeId",
          "attributes": [
            {
              "name": "examineeId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            }
          ]
        },
        {
          "name": "SubjectBlock",
          "pk": "blockCode",
          "attributes": [
            {
              "name": "blockCode",
              "isPK": true
            },
            {
              "name": "subjects",
              "isPK": false
            }
          ]
        },
        {
          "name": "ExamProctor",
          "pk": "proctorId",
          "attributes": [
            {
              "name": "proctorId",
              "isPK": true
            },
            {
              "name": "proctorName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ExamineeStudent",
          "entity2": "SubjectBlock",
          "fromEntityName": "ExamineeStudent",
          "toEntityName": "SubjectBlock",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "SupervisedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Nodira Karimova",
    "clientRole": "Microsoft O'zbekiston Hamkori",
    "clientAvatar": "💻",
    "title": "Dasturiy Ta'minot — Korporativ Mijoz, Dastur Moduli va Diler (LicensesSoftware)",
    "titleEn": "Software Enterprise — Client, Software Module and Reseller Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKorporativ dasturlar litsenziyalash bozorida xaridor korxona (**EnterpriseBuyer**), dasturiy modul (**SoftwareModule**) va sertifikatlangan diler (**LicenseReseller**) o'rtasida bitim tuziladi.\nQaysi diler qaysi korxonaga qaysi litsenziyani sotganini yuritish talab etiladi.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `EnterpriseBuyer`: {PK} `companyInn`, `companyName`.\n2. `SoftwareModule`: {PK} `moduleSku`, `moduleTitle`.\n3. `LicenseReseller`: {PK} `resellerId`, `resellerName`.\n4. Munosabatlarni to'g'ri multiplisitiyalar bilan yakunlang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ProvidedBy",
          "entity1": "SoftwareModule",
          "entity2": "LicenseReseller",
          "fromEntityName": "SoftwareModule",
          "toEntityName": "LicenseReseller",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "EnterpriseBuyer",
          "pk": "companyInn",
          "attributes": [
            {
              "name": "companyInn",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            }
          ]
        },
        {
          "name": "SoftwareModule",
          "pk": "moduleSku",
          "attributes": [
            {
              "name": "moduleSku",
              "isPK": true
            },
            {
              "name": "moduleTitle",
              "isPK": false
            }
          ]
        },
        {
          "name": "LicenseReseller",
          "pk": "resellerId",
          "attributes": [
            {
              "name": "resellerId",
              "isPK": true
            },
            {
              "name": "resellerName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "EnterpriseBuyer",
          "entity2": "SoftwareModule",
          "fromEntityName": "EnterpriseBuyer",
          "toEntityName": "SoftwareModule",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "ProvidedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "Qiyin",
    "clientName": "Kapitan Rustam Saidov",
    "clientRole": "Uzbekistan Airways Bosh Uchuvchisi",
    "clientAvatar": "✈️",
    "title": "Aviatsiya — Komandir Uchuvchi, Aviayo'nalish va Samolyot Borti (CommandsFlightRoute)",
    "titleEn": "Aviation Fleet — Captain Pilot, Flight Route and Aircraft Ternary",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nXalqaro parvozlarda komandir uchuvchi (**FlightCaptain**), aviareys marshruti (**FlightRoute**) va avialayner samolyoti (**AircraftFleet**) uch tomonlama reys topshirig'ida birlashadi.\nQaysi kapitan qaysi samolyotda qaysi xalqaro reysni boshqarganini aniqlash zarur.\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FlightCaptain`: {PK} `captainLicense`, `fullName`.\n2. `FlightRoute`: {PK} `routeCode`, `originDest`.\n3. `AircraftFleet`: {PK} `tailNo`, `model`.\n4. Multiplisitiyalarni to'g'ri o'rnatib, aloqalarni bog'lang.",
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
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "OperatedWith",
          "entity1": "FlightRoute",
          "entity2": "AircraftFleet",
          "fromEntityName": "FlightRoute",
          "toEntityName": "AircraftFleet",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ],
      "subclasses": null
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FlightCaptain",
          "pk": "captainLicense",
          "attributes": [
            {
              "name": "captainLicense",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightRoute",
          "pk": "routeCode",
          "attributes": [
            {
              "name": "routeCode",
              "isPK": true
            },
            {
              "name": "originDest",
              "isPK": false
            }
          ]
        },
        {
          "name": "AircraftFleet",
          "pk": "tailNo",
          "attributes": [
            {
              "name": "tailNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FlightCaptain",
          "entity2": "FlightRoute",
          "fromEntityName": "FlightCaptain",
          "toEntityName": "FlightRoute",
          "mult1": "1..1",
          "mult2": "0..*",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "name": "OperatedWith",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    }
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Bobur Ziyodov",
    "clientRole": "Artel Xodimlar Boshqarmasi Boshlig'i",
    "clientAvatar": "👔",
    "title": "Artel Zavodi — Xodimlar va To'lov Usuli (Hourly vs Salaried)",
    "titleEn": "Artel Manufacturing — Employee Disjoint Subclasses (Hourly vs Salaried)",
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
      "subclasses": {
        "superclass": "Employee",
        "subs": [
          {
            "name": "HourlyEmployee",
            "attributes": []
          },
          {
            "name": "SalariedEmployee",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "hireDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "HourlyEmployee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "hourlyRate",
              "isPK": false
            },
            {
              "name": "overtimeBonus",
              "isPK": false
            }
          ]
        },
        {
          "name": "SalariedEmployee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "annualSalary",
              "isPK": false
            },
            {
              "name": "bonusPct",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Employee",
        "subs": [
          {
            "name": "HourlyEmployee",
            "attributes": [
              "hourlyRate",
              "overtimeBonus"
            ]
          },
          {
            "name": "SalariedEmployee",
            "attributes": [
              "annualSalary",
              "bonusPct"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Sardor Umarov",
    "clientRole": "Click Bosh Arxitektori",
    "clientAvatar": "💳",
    "title": "To'lov Protsessing — Naqd va Plastik Karta To'lovlari (Cash vs Card)",
    "titleEn": "Payment Processing — Transaction Disjoint Subclasses (Cash vs Card)",
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
      "subclasses": {
        "superclass": "PaymentTransaction",
        "subs": [
          {
            "name": "CashPayment",
            "attributes": []
          },
          {
            "name": "CardPayment",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PaymentTransaction",
          "pk": "txId",
          "attributes": [
            {
              "name": "txId",
              "isPK": true
            },
            {
              "name": "amountSum",
              "isPK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false
            }
          ]
        },
        {
          "name": "CashPayment",
          "pk": "txId",
          "attributes": [
            {
              "name": "txId",
              "isPK": true
            },
            {
              "name": "tenderedAmount",
              "isPK": false
            },
            {
              "name": "changeGiven",
              "isPK": false
            }
          ]
        },
        {
          "name": "CardPayment",
          "pk": "txId",
          "attributes": [
            {
              "name": "txId",
              "isPK": true
            },
            {
              "name": "cardLast4",
              "isPK": false
            },
            {
              "name": "authCode",
              "isPK": false
            },
            {
              "name": "terminalId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "PaymentTransaction",
        "subs": [
          {
            "name": "CashPayment",
            "attributes": [
              "tenderedAmount",
              "changeGiven"
            ]
          },
          {
            "name": "CardPayment",
            "attributes": [
              "cardLast4",
              "authCode",
              "terminalId"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Murod Aliyev",
    "clientRole": "Yandex Go Logistika Parki",
    "clientAvatar": "🚚",
    "title": "Transport Parki — Yengil Mashina va Og'ir Yuk Mashinasi (Car vs Truck)",
    "titleEn": "Fleet Management — Vehicle Disjoint Subclasses (Car vs Truck)",
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
      "subclasses": {
        "superclass": "FleetVehicle",
        "subs": [
          {
            "name": "PassengerCar",
            "attributes": []
          },
          {
            "name": "FreightTruck",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FleetVehicle",
          "pk": "vin",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "manufactureYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerCar",
          "pk": "vin",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "seatingCapacity",
              "isPK": false
            },
            {
              "name": "trunkVolumeLiters",
              "isPK": false
            }
          ]
        },
        {
          "name": "FreightTruck",
          "pk": "vin",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "cargoTonnage",
              "isPK": false
            },
            {
              "name": "axleCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "FleetVehicle",
        "subs": [
          {
            "name": "PassengerCar",
            "attributes": [
              "seatingCapacity",
              "trunkVolumeLiters"
            ]
          },
          {
            "name": "FreightTruck",
            "attributes": [
              "cargoTonnage",
              "axleCount"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Nodira Karimova",
    "clientRole": "Kapitalbank Depozit Bo'limi Boshlig'i",
    "clientAvatar": "💰",
    "title": "Bank Hisoblari — Hisob-kitob va Muddatli Depozit (Checking vs Savings)",
    "titleEn": "Banking Accounts — Disjoint Subclasses (Checking vs Savings Deposit)",
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
      "subclasses": {
        "superclass": "BankAccount",
        "subs": [
          {
            "name": "CheckingAccount",
            "attributes": []
          },
          {
            "name": "SavingsDeposit",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "pk": "accountNo",
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true
            },
            {
              "name": "balanceSum",
              "isPK": false
            },
            {
              "name": "openDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "CheckingAccount",
          "pk": "accountNo",
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true
            },
            {
              "name": "overdraftLimit",
              "isPK": false
            },
            {
              "name": "linkedCardNo",
              "isPK": false
            }
          ]
        },
        {
          "name": "SavingsDeposit",
          "pk": "accountNo",
          "attributes": [
            {
              "name": "accountNo",
              "isPK": true
            },
            {
              "name": "interestRatePct",
              "isPK": false
            },
            {
              "name": "maturityMonths",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "BankAccount",
        "subs": [
          {
            "name": "CheckingAccount",
            "attributes": [
              "overdraftLimit",
              "linkedCardNo"
            ]
          },
          {
            "name": "SavingsDeposit",
            "attributes": [
              "interestRatePct",
              "maturityMonths"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Dr. Ziyoda Shoazimova",
    "clientRole": "Respublika Shifoxonasi Qabul Bo'limi",
    "clientAvatar": "🏥",
    "title": "Shifoxona — Statsionar va Ambulator Bemorlar (InPatient vs OutPatient)",
    "titleEn": "Hospital Registry — Patient Disjoint Subclasses (InPatient vs OutPatient)",
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
      "subclasses": {
        "superclass": "HospitalPatient",
        "subs": [
          {
            "name": "InPatient",
            "attributes": []
          },
          {
            "name": "OutPatient",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalPatient",
          "pk": "patientId",
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "bloodGroup",
              "isPK": false
            }
          ]
        },
        {
          "name": "InPatient",
          "pk": "patientId",
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            },
            {
              "name": "admitDate",
              "isPK": false
            },
            {
              "name": "wardNumber",
              "isPK": false
            },
            {
              "name": "bedId",
              "isPK": false
            }
          ]
        },
        {
          "name": "OutPatient",
          "pk": "patientId",
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            },
            {
              "name": "clinicVisitDate",
              "isPK": false
            },
            {
              "name": "nextAppointmentDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "HospitalPatient",
        "subs": [
          {
            "name": "InPatient",
            "attributes": [
              "admitDate",
              "wardNumber",
              "bedId"
            ]
          },
          {
            "name": "OutPatient",
            "attributes": [
              "clinicVisitDate",
              "nextAppointmentDate"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Shahzod Qobilov",
    "clientRole": "WIUT Talabalar Ishlari Registratori",
    "clientAvatar": "🎓",
    "title": "Universitet — Bakalavr va Magistratura Talabalari (Undergraduate vs Postgraduate)",
    "titleEn": "University — Student Disjoint Subclasses (Undergrad vs Postgrad)",
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
      "subclasses": {
        "superclass": "UniversityStudent",
        "subs": [
          {
            "name": "UndergraduateStudent",
            "attributes": []
          },
          {
            "name": "PostgraduateStudent",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "UniversityStudent",
          "pk": "studentId",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "enrolledYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "UndergraduateStudent",
          "pk": "studentId",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "highSchoolDocNo",
              "isPK": false
            },
            {
              "name": "majorProgram",
              "isPK": false
            }
          ]
        },
        {
          "name": "PostgraduateStudent",
          "pk": "studentId",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "bachelorDegreeNo",
              "isPK": false
            },
            {
              "name": "thesisTopic",
              "isPK": false
            },
            {
              "name": "supervisorName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "UniversityStudent",
        "subs": [
          {
            "name": "UndergraduateStudent",
            "attributes": [
              "highSchoolDocNo",
              "majorProgram"
            ]
          },
          {
            "name": "PostgraduateStudent",
            "attributes": [
              "bachelorDegreeNo",
              "thesisTopic",
              "supervisorName"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Lobar Hasanova",
    "clientRole": "Kadastr Agentligi Ko'chmas Mulk Reestri",
    "clientAvatar": "🏙️",
    "title": "Ko'chmas Mulk — Turar-joy va Tijoriy Bino (Residential vs Commercial)",
    "titleEn": "Real Estate — Property Disjoint Subclasses (Residential vs Commercial)",
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
      "subclasses": {
        "superclass": "RealEstateProperty",
        "subs": [
          {
            "name": "ResidentialFlat",
            "attributes": []
          },
          {
            "name": "CommercialOffice",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RealEstateProperty",
          "pk": "cadastreNo",
          "attributes": [
            {
              "name": "cadastreNo",
              "isPK": true
            },
            {
              "name": "address",
              "isPK": false
            },
            {
              "name": "totalAreaSqm",
              "isPK": false
            }
          ]
        },
        {
          "name": "ResidentialFlat",
          "pk": "cadastreNo",
          "attributes": [
            {
              "name": "cadastreNo",
              "isPK": true
            },
            {
              "name": "roomCount",
              "isPK": false
            },
            {
              "name": "floorNumber",
              "isPK": false
            },
            {
              "name": "balconyArea",
              "isPK": false
            }
          ]
        },
        {
          "name": "CommercialOffice",
          "pk": "cadastreNo",
          "attributes": [
            {
              "name": "cadastreNo",
              "isPK": true
            },
            {
              "name": "workstationsCapacity",
              "isPK": false
            },
            {
              "name": "meetingRoomsCount",
              "isPK": false
            },
            {
              "name": "vatRegCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "RealEstateProperty",
        "subs": [
          {
            "name": "ResidentialFlat",
            "attributes": [
              "roomCount",
              "floorNumber",
              "balconyArea"
            ]
          },
          {
            "name": "CommercialOffice",
            "attributes": [
              "workstationsCapacity",
              "meetingRoomsCount",
              "vatRegCode"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Eldor Samatov",
    "clientRole": "Hyatt Regency Bosh Menejeri",
    "clientAvatar": "🛎️",
    "title": "Mehmonxona Xonalari — Standart va Prezident Lyuks (Standard vs Presidential)",
    "titleEn": "Hotel Rooms — Room Disjoint Subclasses (Standard vs Suite)",
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
      "subclasses": {
        "superclass": "HotelRoom",
        "subs": [
          {
            "name": "StandardRoom",
            "attributes": []
          },
          {
            "name": "PresidentialSuite",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HotelRoom",
          "pk": "roomNo",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "floorNumber",
              "isPK": false
            },
            {
              "name": "cleaningStatus",
              "isPK": false
            }
          ]
        },
        {
          "name": "StandardRoom",
          "pk": "roomNo",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "singleBedsCount",
              "isPK": false
            },
            {
              "name": "hasBalcony",
              "isPK": false
            }
          ]
        },
        {
          "name": "PresidentialSuite",
          "pk": "roomNo",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "livingRoomsCount",
              "isPK": false
            },
            {
              "name": "jacuzziInstalled",
              "isPK": false
            },
            {
              "name": "butlerService",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "HotelRoom",
        "subs": [
          {
            "name": "StandardRoom",
            "attributes": [
              "singleBedsCount",
              "hasBalcony"
            ]
          },
          {
            "name": "PresidentialSuite",
            "attributes": [
              "livingRoomsCount",
              "jacuzziInstalled",
              "butlerService"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Jahongir G'aniyev",
    "clientRole": "Davlat Soliq Qo'mitasi Bosh Tahlilchisi",
    "clientAvatar": "⚖️",
    "title": "Mijozlar Reyestri — Jismoniy Shaxs va Yuridik Korxona (Individual vs Corporate)",
    "titleEn": "Tax Registry — Client Disjoint Subclasses (Individual vs Corporate)",
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
      "subclasses": {
        "superclass": "TradeClient",
        "subs": [
          {
            "name": "IndividualCitizen",
            "attributes": []
          },
          {
            "name": "CorporateLegalEntity",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TradeClient",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "contactPhone",
              "isPK": false
            },
            {
              "name": "emailAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "IndividualCitizen",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "pinflCode",
              "isPK": false
            },
            {
              "name": "passportSeries",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporateLegalEntity",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "innNumber",
              "isPK": false
            },
            {
              "name": "bankingBik",
              "isPK": false
            },
            {
              "name": "directorFullName",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "TradeClient",
        "subs": [
          {
            "name": "IndividualCitizen",
            "attributes": [
              "pinflCode",
              "passportSeries"
            ]
          },
          {
            "name": "CorporateLegalEntity",
            "attributes": [
              "innNumber",
              "bankingBik",
              "directorFullName"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Umid Vohidov",
    "clientRole": "Uzum Market Buyurtmalar Nazorati",
    "clientAvatar": "📦",
    "title": "Uzum Buyurtmalari — Filialdan Olib Ketish va Kuryer Yetkazishi (Pickup vs Delivery)",
    "titleEn": "Uzum Orders — Order Fulfillment Disjoint Subclasses (Pickup vs Delivery)",
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
      "subclasses": {
        "superclass": "CustomerOrder",
        "subs": [
          {
            "name": "BranchPickupOrder",
            "attributes": []
          },
          {
            "name": "CourierDeliveryOrder",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CustomerOrder",
          "pk": "orderNo",
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true
            },
            {
              "name": "orderDate",
              "isPK": false
            },
            {
              "name": "totalSum",
              "isPK": false
            }
          ]
        },
        {
          "name": "BranchPickupOrder",
          "pk": "orderNo",
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true
            },
            {
              "name": "pickupPointCode",
              "isPK": false
            },
            {
              "name": "shelfBoxNo",
              "isPK": false
            }
          ]
        },
        {
          "name": "CourierDeliveryOrder",
          "pk": "orderNo",
          "attributes": [
            {
              "name": "orderNo",
              "isPK": true
            },
            {
              "name": "courierId",
              "isPK": false
            },
            {
              "name": "deliveryStreet",
              "isPK": false
            },
            {
              "name": "intercomCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "CustomerOrder",
        "subs": [
          {
            "name": "BranchPickupOrder",
            "attributes": [
              "pickupPointCode",
              "shelfBoxNo"
            ]
          },
          {
            "name": "CourierDeliveryOrder",
            "attributes": [
              "courierId",
              "deliveryStreet",
              "intercomCode"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.EER_CLIENTS_51_100;
}
