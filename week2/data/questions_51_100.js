var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #51",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Aktyor va Film: 'ActsIn' Aloqasi (Role Atributi)",
    "story": "'Actor' va 'Movie' o'rtasida ko'pdan-ko'pga 'ActsIn' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Actor' and 'Movie' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "FlightPassenger",
          "entity2": "FlightBooking",
          "fromEntityName": "FlightPassenger",
          "toEntityName": "FlightBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Books",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Actor' (0..*) to 'Movie' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Actor' (0..*) and 'Movie' (0..*) verified and approved.",
    "task": "Model 'Actor' and 'Movie' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 52,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #52",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Foydalanuvchi va Guruh: 'MemberOf' Aloqasi (JoinedDate Atributi)",
    "story": "'User' va 'UserGroup' o'rtasida ko'pdan-ko'pga 'MemberOf' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'User' and 'UserGroup' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "OnlineReader",
          "entity2": "BookRental",
          "fromEntityName": "OnlineReader",
          "toEntityName": "BookRental",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Borrows",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'User' (0..*) to 'UserGroup' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'User' (0..*) and 'UserGroup' (0..*) verified and approved.",
    "task": "Model 'User' and 'UserGroup' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 53,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #53",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Avtomobil va Xizmat Safari: 'Drives' Aloqasi (Mileage Atributi)",
    "story": "'Driver' va 'Route' o'rtasida ko'pdan-ko'pga 'Drives' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Driver' and 'Route' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "CandidateStudent",
          "entity2": "ExamAttempt",
          "fromEntityName": "CandidateStudent",
          "toEntityName": "ExamAttempt",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Takes",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Driver' (0..*) to 'Route' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Driver' (0..*) and 'Route' (0..*) verified and approved.",
    "task": "Model 'Driver' and 'Route' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 54,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #54",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Dasturchi va Repozitoriy: 'Contributes' Aloqasi (Commits Atributi)",
    "story": "'Developer' va 'Repository' o'rtasida ko'pdan-ko'pga 'Contributes' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Developer' and 'Repository' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "TreatingDoctor",
          "entity2": "PrescriptionItem",
          "fromEntityName": "TreatingDoctor",
          "toEntityName": "PrescriptionItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Prescribes",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Developer' (0..*) to 'Repository' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Developer' (0..*) and 'Repository' (0..*) verified and approved.",
    "task": "Model 'Developer' and 'Repository' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 55,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #55",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Sayyoh va Mehmonxona: 'StaysAt' Aloqasi (CheckIn Atributi)",
    "story": "'Tourist' va 'Hotel' o'rtasida ko'pdan-ko'pga 'StaysAt' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Tourist' and 'Hotel' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "CorporateClient",
          "entity2": "HallBooking",
          "fromEntityName": "CorporateClient",
          "toEntityName": "HallBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Reserves",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Tourist' (0..*) to 'Hotel' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Tourist' (0..*) and 'Hotel' (0..*) verified and approved.",
    "task": "Model 'Tourist' and 'Hotel' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 56,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #56",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Xaridor va Do'kon Cheki: 'Purchases' Aloqasi (Discount Atributi)",
    "story": "'Buyer' va 'Receipt' o'rtasida ko'pdan-ko'pga 'Purchases' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Buyer' and 'Receipt' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "InsuredPerson",
          "entity2": "UnderwrittenPolicy",
          "fromEntityName": "InsuredPerson",
          "toEntityName": "UnderwrittenPolicy",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Subscribes",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Buyer' (0..*) to 'Receipt' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Buyer' (0..*) and 'Receipt' (0..*) verified and approved.",
    "task": "Model 'Buyer' and 'Receipt' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 57,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #57",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Dori va Kasallik: 'Treats' Aloqasi (Dosage Atributi)",
    "story": "'Drug' va 'Disease' o'rtasida ko'pdan-ko'pga 'Treats' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Drug' and 'Disease' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "CarBuyer",
          "entity2": "CarLeaseContract",
          "fromEntityName": "CarBuyer",
          "toEntityName": "CarLeaseContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SignsLease",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Drug' (0..*) to 'Disease' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Drug' (0..*) and 'Disease' (0..*) verified and approved.",
    "task": "Model 'Drug' and 'Disease' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 58,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #58",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "O'qituvchi va Sinf: 'Supervises' Aloqasi (AcademicYear Atributi)",
    "story": "'Teacher' va 'ClassRoom' o'rtasida ko'pdan-ko'pga 'Supervises' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Teacher' and 'ClassRoom' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "MovieViewer",
          "entity2": "CinemaTicket",
          "fromEntityName": "MovieViewer",
          "toEntityName": "CinemaTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Purchases",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Teacher' (0..*) to 'ClassRoom' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Teacher' (0..*) and 'ClassRoom' (0..*) verified and approved.",
    "task": "Model 'Teacher' and 'ClassRoom' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 59,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Intermediate",
    "clientName": "Biznes Hamkor #59",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "Kompaniya va Homiylik: 'Sponsors' Aloqasi (Amount Atributi)",
    "story": "'Company' va 'Event' o'rtasida ko'pdan-ko'pga 'Sponsors' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Company' and 'Event' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "ConstructionFirm",
          "entity2": "MachineRental",
          "fromEntityName": "ConstructionFirm",
          "toEntityName": "MachineRental",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rents",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Company' (0..*) to 'Event' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Company' (0..*) and 'Event' (0..*) verified and approved.",
    "task": "Model 'Company' and 'Event' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 60,
    "sector": 4,
    "floor": 4,
    "difficulty": "Floor 4 • Qiyin (Floor 4 Master Architecti)",
    "clientName": "Biznes Hamkor #60",
    "clientRole": "Tizim Tahlilchisi",
    "clientAvatar": "retailer",
    "title": "4-Qavat Final Bossi: Xalqaro Logistika Tranziti ('Transits' - FreightCost)",
    "story": "'Carrier' va 'CargoHub' o'rtasida ko'pdan-ko'pga 'Transits' munosabati bor. Aloqa ustida qo'shimcha biznes atribut saqlanadi (Association Class).",
    "taskUz": "Model 'Carrier' and 'CargoHub' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "DeliveryCourier",
          "entity2": "CourierShift",
          "fromEntityName": "DeliveryCourier",
          "toEntityName": "CourierShift",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ServesShift",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Carrier' (0..*) to 'CargoHub' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Carrier' (0..*) and 'CargoHub' (0..*) verified and approved.",
    "task": "Model 'Carrier' and 'CargoHub' entities, designate primary keys {PK}, and connect them with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 61,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #61",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Xodim va Rahbar Recursive Relationship (Supervises)",
    "story": "'Employee' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'Supervises' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Employee' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "supervisor",
          "role2": "subordinate"
        }
      ]
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
          "fromEntityName": "Employee",
          "toEntityName": "Employee",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "Manages",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "supervisor",
          "role2": "subordinate"
        }
      ]
    },
    "hint": "Connect 'Employee' (0..1) to 'Employee' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Employee' (0..1) and 'Employee' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Employee' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 62,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #62",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Ierarxik Katalog Daraxti Recursive Relationship (SubCategoryOf)",
    "story": "'Category' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'SubCategoryOf' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Category' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "parentCat",
          "role2": "subCat"
        }
      ]
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
          "entity1": "ProductCategory",
          "entity2": "ProductCategory",
          "fromEntityName": "ProductCategory",
          "toEntityName": "ProductCategory",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "SubCategoryOf",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentCat",
          "role2": "subCat"
        }
      ]
    },
    "hint": "Connect 'Category' (0..1) to 'Category' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Category' (0..1) and 'Category' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Category' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 63,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #63",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Zavod Detallari Rekursiv *:* Yig'masi (BOM - Contains)",
    "story": "'Part' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'Contains' munosabati are present: bir tomon, ikkinchi tomon esa.",
    "taskUz": "Model the recursive relationship on 'Part' with multiplicities '0..*' and '0..*'.",
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
          "isDirect": true,
          "role1": "parentAssembly",
          "role2": "subPart"
        }
      ]
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
          "entity1": "PartComponent",
          "entity2": "PartComponent",
          "fromEntityName": "PartComponent",
          "toEntityName": "PartComponent",
          "mult1": "0..*",
          "mult2": "1..*",
          "name": "AssembledFrom",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentAssembly",
          "role2": "subPart"
        }
      ]
    },
    "hint": "Connect 'Part' (0..*) to 'Part' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Part' (0..*) and 'Part' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Part' with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 64,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #64",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Universitet Fani Prerekvizitlari Recursive Relationship (Prerequisite)",
    "story": "'Course' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'Prerequisite' munosabati are present: bir tomon, ikkinchi tomon esa.",
    "taskUz": "Model the recursive relationship on 'Course' with multiplicities '0..*' and '0..*'.",
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
          "isDirect": true,
          "role1": "advancedCourse",
          "role2": "prerequisite"
        }
      ]
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
          "entity1": "AcademicCourse",
          "entity2": "AcademicCourse",
          "fromEntityName": "AcademicCourse",
          "toEntityName": "AcademicCourse",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "RequiresPrereq",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "advancedCourse",
          "role2": "prerequisite"
        }
      ]
    },
    "hint": "Connect 'Course' (0..*) to 'Course' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Course' (0..*) and 'Course' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Course' with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 65,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #65",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Ijtimoiy Tarmoq Do'stlik Recursive Relationship (FriendOf)",
    "story": "'User' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'FriendOf' munosabati are present: bir tomon, ikkinchi tomon esa.",
    "taskUz": "Model the recursive relationship on 'User' with multiplicities '0..*' and '0..*'.",
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
          "isDirect": true,
          "role1": "spouse1",
          "role2": "spouse2"
        }
      ]
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
          "entity1": "Citizen",
          "entity2": "Citizen",
          "fromEntityName": "Citizen",
          "toEntityName": "Citizen",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "MarriedTo",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "spouse1",
          "role2": "spouse2"
        }
      ]
    },
    "hint": "Connect 'User' (0..*) to 'User' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'User' (0..*) and 'User' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'User' with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 66,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #66",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Korxona Tashkiliy Bo'linmalar Daraxti (SubDivisionOf)",
    "story": "'Division' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'SubDivisionOf' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Division' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "referrer",
          "role2": "referee"
        }
      ]
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
          "entity1": "UserAccount",
          "entity2": "UserAccount",
          "fromEntityName": "UserAccount",
          "toEntityName": "UserAccount",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "ReferredBy",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "referrer",
          "role2": "referee"
        }
      ]
    },
    "hint": "Connect 'Division' (0..1) to 'Division' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (0..1) and 'Division' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Division' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 67,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #67",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Tarixiy Voqealar Sabab-Oqibat Recursive Relationship (LeadsTo)",
    "story": "'HistoricalEvent' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'LeadsTo' munosabati are present: bir tomon, ikkinchi tomon esa.",
    "taskUz": "Model the recursive relationship on 'HistoricalEvent' with multiplicities '0..*' and '0..*'.",
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
          "isDirect": true,
          "role1": "currentStation",
          "role2": "adjacentStation"
        }
      ]
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
          "entity1": "MetroStation",
          "entity2": "MetroStation",
          "fromEntityName": "MetroStation",
          "toEntityName": "MetroStation",
          "mult1": "0..2",
          "mult2": "0..2",
          "name": "NextTrackTo",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "currentStation",
          "role2": "adjacentStation"
        }
      ]
    },
    "hint": "Connect 'HistoricalEvent' (0..*) to 'HistoricalEvent' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'HistoricalEvent' (0..*) and 'HistoricalEvent' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'HistoricalEvent' with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 68,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #68",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Moliya Balans Moddalari Ierarxiyasi (SubAccountOf)",
    "story": "'Account' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'SubAccountOf' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Account' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "parentFolder",
          "role2": "subFolder"
        }
      ]
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
          "entity1": "FolderDirectory",
          "entity2": "FolderDirectory",
          "fromEntityName": "FolderDirectory",
          "toEntityName": "FolderDirectory",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "ContainsSubfolder",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentFolder",
          "role2": "subFolder"
        }
      ]
    },
    "hint": "Connect 'Account' (0..1) to 'Account' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Account' (0..1) and 'Account' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Account' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 69,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #69",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Dasturiy Komponentlar Paketlar Daraxti (DependsOn)",
    "story": "'Component' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'DependsOn' munosabati are present: bir tomon, ikkinchi tomon esa.",
    "taskUz": "Model the recursive relationship on 'Component' with multiplicities '0..*' and '0..*'.",
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
          "isDirect": true,
          "role1": "predecessor",
          "role2": "successor"
        }
      ]
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
          "entity1": "ProjectTask",
          "entity2": "ProjectTask",
          "fromEntityName": "ProjectTask",
          "toEntityName": "ProjectTask",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "PrecedesTask",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "predecessor",
          "role2": "successor"
        }
      ]
    },
    "hint": "Connect 'Component' (0..*) to 'Component' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Component' (0..*) and 'Component' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Component' with multiplicities '0..*' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 70,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #70",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Avtomobil Ehtiyot Qismlari O'rnini Bosish (Replaces)",
    "story": "'SparePart' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'Replaces' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'SparePart' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "homeTeam",
          "role2": "awayTeam"
        }
      ]
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
          "entity1": "FootballClub",
          "entity2": "FootballClub",
          "fromEntityName": "FootballClub",
          "toEntityName": "FootballClub",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "PlaysMatchAgainst",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "homeTeam",
          "role2": "awayTeam"
        }
      ]
    },
    "hint": "Connect 'SparePart' (0..1) to 'SparePart' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'SparePart' (0..1) and 'SparePart' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'SparePart' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 71,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #71",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Xizmat Vazifalari Ketma-ketligi Recursive Relationship (Follows)",
    "story": "'Task' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'Follows' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Task' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "sourceHub",
          "role2": "targetHub"
        }
      ]
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
          "entity1": "DistributionHub",
          "entity2": "DistributionHub",
          "fromEntityName": "DistributionHub",
          "toEntityName": "DistributionHub",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "TransfersCargoTo",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "sourceHub",
          "role2": "targetHub"
        }
      ]
    },
    "hint": "Connect 'Task' (0..1) to 'Task' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Task' (0..1) and 'Task' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Task' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 72,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #72",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Kadrlar Almashinuvi Merosxo'rlik Tizimi (Succeeds)",
    "story": "'Staff' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'Succeeds' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Staff' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "coreSwitch",
          "role2": "accessSwitch"
        }
      ]
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
          "entity1": "NetworkSwitch",
          "entity2": "NetworkSwitch",
          "fromEntityName": "NetworkSwitch",
          "toEntityName": "NetworkSwitch",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "UplinkTo",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "coreSwitch",
          "role2": "accessSwitch"
        }
      ]
    },
    "hint": "Connect 'Staff' (0..1) to 'Staff' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Staff' (0..1) and 'Staff' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Staff' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 73,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #73",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Geografik Hududlar Ma'muriy Daraxti (BelongsToRegion)",
    "story": "'Region' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'BelongsToRegion' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Region' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "originalTx",
          "role2": "reversalTx"
        }
      ]
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
          "entity1": "FinancialTransaction",
          "entity2": "FinancialTransaction",
          "fromEntityName": "FinancialTransaction",
          "toEntityName": "FinancialTransaction",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "ReversesTx",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "originalTx",
          "role2": "reversalTx"
        }
      ]
    },
    "hint": "Connect 'Region' (0..1) to 'Region' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Region' (0..1) and 'Region' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Region' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 74,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Intermediate",
    "clientName": "Biznes Hamkor #74",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "Elektron Pochta Xatlari Zanjiri (ReplyToThread)",
    "story": "'EmailMessage' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'ReplyToThread' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'EmailMessage' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "parent",
          "role2": "child"
        }
      ]
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
          "entity1": "FamilyPerson",
          "entity2": "FamilyPerson",
          "fromEntityName": "FamilyPerson",
          "toEntityName": "FamilyPerson",
          "mult1": "0..2",
          "mult2": "0..*",
          "name": "BiologicalParentOf",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parent",
          "role2": "child"
        }
      ]
    },
    "hint": "Connect 'EmailMessage' (0..1) to 'EmailMessage' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'EmailMessage' (0..1) and 'EmailMessage' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'EmailMessage' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 75,
    "sector": 5,
    "floor": 5,
    "difficulty": "Floor 5 • Qiyin (Floor 5 Master Architecti)",
    "clientName": "Biznes Hamkor #75",
    "clientRole": "Tashkiliy Boshqaruv Mutaxassisi",
    "clientAvatar": "ceo",
    "title": "5-Qavat Bossi: Mentorlik va Jamoa Rahbarligi Rekursiv Tizimi",
    "story": "'Staff' entitiyasining o'z-o'ziga bog'lanuvchi rekursiv 'Mentors' munosabati are present. Bunda ob'ektning ko'pi bilan bitta yuqori boshqaruvchisi bo'lishi yoki bo'lmasligi, hamda o'ziga bog'langan bir nechta quyi ob'ektlari bo'lishi mumkin.",
    "taskUz": "Model the recursive relationship on 'Staff' with multiplicities '0..1' and '0..*'.",
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
          "isDirect": true,
          "role1": "parentHolding",
          "role2": "subsidiary"
        }
      ]
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
          "entity1": "CorporateHolding",
          "entity2": "CorporateHolding",
          "fromEntityName": "CorporateHolding",
          "toEntityName": "CorporateHolding",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "OwnsSubsidiary",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "parentHolding",
          "role2": "subsidiary"
        }
      ]
    },
    "hint": "Connect 'Staff' (0..1) to 'Staff' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Staff' (0..1) and 'Staff' (0..*) verified and approved.",
    "task": "Model the recursive relationship on 'Staff' with multiplicities '0..1' and '0..*'.",
    "isWeek2": true
  },
  {
    "id": 76,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #76",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "O'qitish Taqsimoti Ternary Rombi (Teaches: Course, Instructor, Semester)",
    "story": "'Course', 'Instructor' va 'Semester' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Course', 'Instructor', 'Semester', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "Student",
          "entity2": "CourseModule",
          "fromEntityName": "Student",
          "toEntityName": "CourseModule",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Enrolls",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Course' (0..*) to 'Instructor' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Course' (0..*) and 'Instructor' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Course', 'Instructor', 'Semester', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 77,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #77",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Ta'minot Shartnomasi Ternary Rombi (Supplies: Supplier, Part, Project)",
    "story": "'Supplier', 'Part' va 'Project' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Supplier', 'Part', 'Project', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "Doctor",
          "entity2": "Patient",
          "fromEntityName": "Doctor",
          "toEntityName": "Patient",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Treats",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Supplier' (0..*) to 'Part' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Supplier' (0..*) and 'Part' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Supplier', 'Part', 'Project', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 78,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #78",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Tibbiy Davolash Rejasi (Prescribes: Doctor, Patient, Drug)",
    "story": "'Doctor', 'Patient' va 'Drug' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Doctor', 'Patient', 'Drug', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "AutoSupplier",
          "entity2": "SparePart",
          "fromEntityName": "AutoSupplier",
          "toEntityName": "SparePart",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Produces",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Doctor' (0..*) to 'Patient' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Doctor' (0..*) and 'Patient' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Doctor', 'Patient', 'Drug', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 79,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #79",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Sug'urta Da'vosi Ko'rib Chiqilishi (Assesses: Policy, Claim, Agent)",
    "story": "'Policy', 'Claim' va 'Agent' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Policy', 'Claim', 'Agent', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "SalesAgent",
          "entity2": "CarBuyer",
          "fromEntityName": "SalesAgent",
          "toEntityName": "CarBuyer",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Serves",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Policy' (0..*) to 'Claim' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Policy' (0..*) and 'Claim' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Policy', 'Claim', 'Agent', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 80,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #80",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Avtomobil Ijarasi Shartnomasi (Rents: Customer, Vehicle, AgencyBranch)",
    "story": "'Customer', 'Vehicle' va 'AgencyBranch' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Customer', 'Vehicle', 'AgencyBranch', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "BuildingContractor",
          "entity2": "BuildingSite",
          "fromEntityName": "BuildingContractor",
          "toEntityName": "BuildingSite",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "WorksOn",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Customer' (0..*) to 'Vehicle' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Customer' (0..*) and 'Vehicle' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Customer', 'Vehicle', 'AgencyBranch', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 81,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #81",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Qurilish Obyekti Mashina Taqsimoti (Deploys: Site, Machinery, Operator)",
    "story": "'Site', 'Machinery' va 'Operator' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Site', 'Machinery', 'Operator', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "KeynoteSpeaker",
          "entity2": "SymposiumTopic",
          "fromEntityName": "KeynoteSpeaker",
          "toEntityName": "SymposiumTopic",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Covers",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Site' (0..*) to 'Machinery' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Site' (0..*) and 'Machinery' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Site', 'Machinery', 'Operator', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 82,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #82",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Sport Musobaqasi Hakamligi (Officiates: Referee, Match, Tournament)",
    "story": "'Referee', 'Match' va 'Tournament' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Referee', 'Match', 'Tournament', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "InsuranceBroker",
          "entity2": "CorporateClient",
          "fromEntityName": "InsuranceBroker",
          "toEntityName": "CorporateClient",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Represents",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Referee' (0..*) to 'Match' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Referee' (0..*) and 'Match' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Referee', 'Match', 'Tournament', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 83,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #83",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Bank Kredit Komissiyasi (Evaluates: LoanApp, Officer, Committee)",
    "story": "'LoanApp', 'Officer' va 'Committee' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'LoanApp', 'Officer', 'Committee', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "CargoCarrier",
          "entity2": "CustomsTerminal",
          "fromEntityName": "CargoCarrier",
          "toEntityName": "CustomsTerminal",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ArrivesAt",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'LoanApp' (0..*) to 'Officer' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'LoanApp' (0..*) and 'Officer' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'LoanApp', 'Officer', 'Committee', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 84,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #84",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Yuk Bojxona Tekshiruvi (Inspects: Cargo, Inspector, CustomsPost)",
    "story": "'Cargo', 'Inspector' va 'CustomsPost' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Cargo', 'Inspector', 'CustomsPost', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "FilmActor",
          "entity2": "MovieProduction",
          "fromEntityName": "FilmActor",
          "toEntityName": "MovieProduction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ActsIn",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Cargo' (0..*) to 'Inspector' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Cargo' (0..*) and 'Inspector' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Cargo', 'Inspector', 'CustomsPost', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 85,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #85",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Laboratoriya Namunasi Tahlili (Tests: Sample, Chemist, Equipment)",
    "story": "'Sample', 'Chemist' va 'Equipment' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Sample', 'Chemist', 'Equipment', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "ResearchScientist",
          "entity2": "GrantProject",
          "fromEntityName": "ResearchScientist",
          "toEntityName": "GrantProject",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Conducts",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Sample' (0..*) to 'Chemist' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Sample' (0..*) and 'Chemist' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Sample', 'Chemist', 'Equipment', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 86,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #86",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Mehmonxona Xona Bandligi (Books: Guest, Room, BookingAgent)",
    "story": "'Guest', 'Room' va 'BookingAgent' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Guest', 'Room', 'BookingAgent', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "BrandMerchandiser",
          "entity2": "PromotedProduct",
          "fromEntityName": "BrandMerchandiser",
          "toEntityName": "PromotedProduct",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Supervises",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Guest' (0..*) to 'Room' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Guest' (0..*) and 'Room' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Guest', 'Room', 'BookingAgent', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 87,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #87",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Xalqaro Parvoz Ekipaji (Assigns: Flight, Pilot, Aircraft)",
    "story": "'Flight', 'Pilot' va 'Aircraft' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Flight', 'Pilot', 'Aircraft', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "SportAthlete",
          "entity2": "SportDiscipline",
          "fromEntityName": "SportAthlete",
          "toEntityName": "SportDiscipline",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Specializes",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Flight' (0..*) to 'Pilot' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Flight' (0..*) and 'Pilot' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Flight', 'Pilot', 'Aircraft', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 88,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #88",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Kinofilm Kasting Taqsimoti (Casts: Movie, Role, Actor)",
    "story": "'Movie', 'Role' va 'Actor' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Movie', 'Role', 'Actor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "ExamineeStudent",
          "entity2": "SubjectBlock",
          "fromEntityName": "ExamineeStudent",
          "toEntityName": "SubjectBlock",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AssignedBlock",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Movie' (0..*) to 'Role' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Movie' (0..*) and 'Role' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Movie', 'Role', 'Actor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 89,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Intermediate",
    "clientName": "Biznes Hamkor #89",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "Zavod Mahsulotini Qadoqlash (Packs: Product, PackagingLine, Operator)",
    "story": "'Product', 'PackagingLine' va 'Operator' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Product', 'PackagingLine', 'Operator', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "EnterpriseBuyer",
          "entity2": "SoftwareModule",
          "fromEntityName": "EnterpriseBuyer",
          "toEntityName": "SoftwareModule",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Purchases",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Product' (0..*) to 'PackagingLine' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Product' (0..*) and 'PackagingLine' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Product', 'PackagingLine', 'Operator', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 90,
    "sector": 6,
    "floor": 6,
    "difficulty": "Floor 6 • Qiyin (Floor 6 Master Architecti)",
    "clientName": "Biznes Hamkor #90",
    "clientRole": "Tizim Integratori",
    "clientAvatar": "vicechancellor",
    "title": "6-Qavat Bossi: Festival Chiqishlari Ternary Tizimi (Artist, Stage, FestivalDay)",
    "story": "'Artist', 'Stage' va 'FestivalDay' ob'ektlari 3 tomonlama yaxlit ternary romb orqali bog'lanadi. Har bir bog'lanish chizig'iga multiplicity o'rnatiladi.",
    "taskUz": "Model the multi-entity diagram for 'Artist', 'Stage', 'FestivalDay', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
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
          "mult1": "0..*",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
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
          "entity1": "FlightCaptain",
          "entity2": "FlightRoute",
          "fromEntityName": "FlightCaptain",
          "toEntityName": "FlightRoute",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AssignedRoute",
          "isIdentifying": false,
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Artist' (0..*) to 'Stage' (0..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Artist' (0..*) and 'Stage' (0..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Artist', 'Stage', 'FestivalDay', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 91,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #91",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Xodimlar Ixtisoslashuvi: Soatbay va Oylik ({Mandatory, Or})",
    "story": "'Employee' superklassi ostida 'HourlyEmp' va 'SalariedEmp' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'Employee' and its subclasses ('HourlyEmp', 'SalariedEmp') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Employee', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Employee' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'Employee' and its subclasses ('HourlyEmp', 'SalariedEmp') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 92,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #92",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Transport Vositalari Ierarxiyasi ({Mandatory, Or})",
    "story": "'Vehicle' superklassi ostida 'Car' va 'Truck' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'Vehicle' and its subclasses ('Car', 'Truck') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Vehicle', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Vehicle' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'Vehicle' and its subclasses ('Car', 'Truck') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 93,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #93",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Universitet Xodimlari Qisman Ixtisoslashuvi ({Optional, Or})",
    "story": "'Person' superklassi ostida 'Staff' va 'Student' subklasslari are present. Cheklov turi: '{Optional, Or}'.",
    "taskUz": "Model superclass 'Person' and its subclasses ('Staff', 'Student') with the '{Optional, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Person', select '{Optional, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Person' configured with '{Optional, Or}' successfully.",
    "task": "Model superclass 'Person' and its subclasses ('Staff', 'Student') with the '{Optional, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 94,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #94",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Bank Hisob Varaqlari: Omonat va Joriy ({Mandatory, Or})",
    "story": "'Account' superklassi ostida 'SavingsAcc' va 'CurrentAcc' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'Account' and its subclasses ('SavingsAcc', 'CurrentAcc') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Account', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Account' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'Account' and its subclasses ('SavingsAcc', 'CurrentAcc') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 95,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #95",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Kutubxona Resurslari: Kitob va Jurnal ({Mandatory, Or})",
    "story": "'LibraryItem' superklassi ostida 'Book' va 'Journal' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'LibraryItem' and its subclasses ('Book', 'Journal') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'LibraryItem', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'LibraryItem' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'LibraryItem' and its subclasses ('Book', 'Journal') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 96,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #96",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Mulk Turlari: Turarjoy va Tijorat Mulki ({Mandatory, Or})",
    "story": "'Property' superklassi ostida 'Residential' va 'Commercial' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'Property' and its subclasses ('Residential', 'Commercial') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Property', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Property' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'Property' and its subclasses ('Residential', 'Commercial') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 97,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #97",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Kompaniya Mijozlari: Jismoniy va Yuridik Shaxs ({Mandatory, Or})",
    "story": "'Customer' superklassi ostida 'Individual' va 'Corporate' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'Customer' and its subclasses ('Individual', 'Corporate') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Customer', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Customer' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'Customer' and its subclasses ('Individual', 'Corporate') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 98,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #98",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Dasturiy Foydalanuvchilar: Admin va Mehmon ({Optional, Or})",
    "story": "'User' superklassi ostida 'Admin' va 'Guest' subklasslari are present. Cheklov turi: '{Optional, Or}'.",
    "taskUz": "Model superclass 'User' and its subclasses ('Admin', 'Guest') with the '{Optional, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'User', select '{Optional, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'User' configured with '{Optional, Or}' successfully.",
    "task": "Model superclass 'User' and its subclasses ('Admin', 'Guest') with the '{Optional, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 99,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #99",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "Tibbiy Sug'urta Rejalari: Baza va Premium ({Mandatory, Or})",
    "story": "'InsurancePlan' superklassi ostida 'BasicPlan' va 'PremiumPlan' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'InsurancePlan' and its subclasses ('BasicPlan', 'PremiumPlan') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'InsurancePlan', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'InsurancePlan' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'InsurancePlan' and its subclasses ('BasicPlan', 'PremiumPlan') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 100,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Qiyin (Floor 7 Master Architecti)",
    "clientName": "Biznes Hamkor #100",
    "clientRole": "EER Arxitektura Eksperti",
    "clientAvatar": "architect",
    "title": "7-Qavat Bossi: Bemorlar Ixtisoslashuvi ({Mandatory, Or})",
    "story": "'Patient' superklassi ostida 'InPatient' va 'OutPatient' subklasslari are present. Cheklov turi: '{Mandatory, Or}'.",
    "taskUz": "Model superclass 'Patient' and its subclasses ('InPatient', 'OutPatient') with the '{Mandatory, Or}' constraint according to client requirements.",
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
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Patient', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Patient' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'Patient' and its subclasses ('InPatient', 'OutPatient') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.QUESTIONS_51_100;
}
