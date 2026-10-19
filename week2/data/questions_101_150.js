var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Akmal Shokirov",
    "clientRole": "Kinoprokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Movie Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'movieId' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Movie",
          "pk": "movieId",
          "attributes": [
            {
              "name": "movieId",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "director",
              "isPK": false
            },
            {
              "name": "durationMin",
              "isPK": false
            },
            {
              "name": "ageRating",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Movie",
        "subs": [
          {
            "name": "MovieTypeA",
            "attributes": []
          },
          {
            "name": "MovieTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Movie",
          "pk": "movieId",
          "attributes": [
            {
              "name": "movieId",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "director",
              "isPK": false
            },
            {
              "name": "durationMin",
              "isPK": false
            },
            {
              "name": "ageRating",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Movie",
        "subs": [
          {
            "name": "MovieTypeA",
            "attributes": []
          },
          {
            "name": "MovieTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Umida Zokirova",
    "clientRole": "Bosh Provisor",
    "clientAvatar": "mentor",
    "title": "Medicine Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'barcode' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Medicine",
          "pk": "barcode",
          "attributes": [
            {
              "name": "barcode",
              "isPK": true
            },
            {
              "name": "name",
              "isPK": false
            },
            {
              "name": "dosageMg",
              "isPK": false
            },
            {
              "name": "manufacturer",
              "isPK": false
            },
            {
              "name": "expDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Medicine",
        "subs": [
          {
            "name": "MedicineTypeA",
            "attributes": []
          },
          {
            "name": "MedicineTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Medicine",
          "pk": "barcode",
          "attributes": [
            {
              "name": "barcode",
              "isPK": true
            },
            {
              "name": "name",
              "isPK": false
            },
            {
              "name": "dosageMg",
              "isPK": false
            },
            {
              "name": "manufacturer",
              "isPK": false
            },
            {
              "name": "expDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Medicine",
        "subs": [
          {
            "name": "MedicineTypeA",
            "attributes": []
          },
          {
            "name": "MedicineTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Sanjar Normatov",
    "clientRole": "Logistika Floti Boshlig'i",
    "clientAvatar": "mentor",
    "title": "CargoTruck Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'plateNo' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CargoTruck",
          "pk": "plateNo",
          "attributes": [
            {
              "name": "plateNo",
              "isPK": true
            },
            {
              "name": "capacityTons",
              "isPK": false
            },
            {
              "name": "fuelType",
              "isPK": false
            },
            {
              "name": "mileageKm",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "CargoTruck",
        "subs": [
          {
            "name": "CargoTruckTypeA",
            "attributes": []
          },
          {
            "name": "CargoTruckTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CargoTruck",
          "pk": "plateNo",
          "attributes": [
            {
              "name": "plateNo",
              "isPK": true
            },
            {
              "name": "capacityTons",
              "isPK": false
            },
            {
              "name": "fuelType",
              "isPK": false
            },
            {
              "name": "mileageKm",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "CargoTruck",
        "subs": [
          {
            "name": "CargoTruckTypeA",
            "attributes": []
          },
          {
            "name": "CargoTruckTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Nilufar Rahimova",
    "clientRole": "Mijozlar Xizmati Boshlig'i",
    "clientAvatar": "mentor",
    "title": "ClubMember Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'memberCardNo' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ClubMember",
          "pk": "memberCardNo",
          "attributes": [
            {
              "name": "memberCardNo",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "membershipType",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "ClubMember",
        "subs": [
          {
            "name": "ClubMemberTypeA",
            "attributes": []
          },
          {
            "name": "ClubMemberTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ClubMember",
          "pk": "memberCardNo",
          "attributes": [
            {
              "name": "memberCardNo",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "membershipType",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "ClubMember",
        "subs": [
          {
            "name": "ClubMemberTypeA",
            "attributes": []
          },
          {
            "name": "ClubMemberTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Davron Karimov",
    "clientRole": "Bosh Energetik",
    "clientAvatar": "mentor",
    "title": "SolarInverter Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'serialNo' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SolarInverter",
          "pk": "serialNo",
          "attributes": [
            {
              "name": "serialNo",
              "isPK": true
            },
            {
              "name": "peakPowerKw",
              "isPK": false
            },
            {
              "name": "voltageInput",
              "isPK": false
            },
            {
              "name": "installDate",
              "isPK": false
            },
            {
              "name": "efficiency",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "SolarInverter",
        "subs": [
          {
            "name": "SolarInverterTypeA",
            "attributes": []
          },
          {
            "name": "SolarInverterTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SolarInverter",
          "pk": "serialNo",
          "attributes": [
            {
              "name": "serialNo",
              "isPK": true
            },
            {
              "name": "peakPowerKw",
              "isPK": false
            },
            {
              "name": "voltageInput",
              "isPK": false
            },
            {
              "name": "installDate",
              "isPK": false
            },
            {
              "name": "efficiency",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "SolarInverter",
        "subs": [
          {
            "name": "SolarInverterTypeA",
            "attributes": []
          },
          {
            "name": "SolarInverterTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "UniversityStaff Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'staffId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'Instructor' va 'Researcher' jadvallarida 'staffId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UniversityStaff",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "UniversityStaff",
        "subs": [
          {
            "name": "Instructor",
            "attributes": []
          },
          {
            "name": "Researcher",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "UniversityStaff",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "UniversityStaff",
        "subs": [
          {
            "name": "Instructor",
            "attributes": []
          },
          {
            "name": "Researcher",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "BankClient Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'clientId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'Depositor' va 'Borrower' jadvallarida 'clientId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankClient",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "clientName",
              "isPK": false
            },
            {
              "name": "taxCode",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "BankClient",
        "subs": [
          {
            "name": "Depositor",
            "attributes": []
          },
          {
            "name": "Borrower",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankClient",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "clientName",
              "isPK": false
            },
            {
              "name": "taxCode",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "BankClient",
        "subs": [
          {
            "name": "Depositor",
            "attributes": []
          },
          {
            "name": "Borrower",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "SystemUser Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'userLogin' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'SecurityAdmin' va 'SystemDev' jadvallarida 'userLogin' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SystemUser",
          "pk": "userLogin",
          "attributes": [
            {
              "name": "userLogin",
              "isPK": true
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "createdDate",
              "isPK": false
            },
            {
              "name": "lastLogin",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "SystemUser",
        "subs": [
          {
            "name": "SecurityAdmin",
            "attributes": []
          },
          {
            "name": "SystemDev",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SystemUser",
          "pk": "userLogin",
          "attributes": [
            {
              "name": "userLogin",
              "isPK": true
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "createdDate",
              "isPK": false
            },
            {
              "name": "lastLogin",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "SystemUser",
        "subs": [
          {
            "name": "SecurityAdmin",
            "attributes": []
          },
          {
            "name": "SystemDev",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "ConferenceAttendee Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'attendeeId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'KeynoteSpeaker' va 'CommitteeReviewer' jadvallarida 'attendeeId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ConferenceAttendee",
          "pk": "attendeeId",
          "attributes": [
            {
              "name": "attendeeId",
              "isPK": true
            },
            {
              "name": "attendeeName",
              "isPK": false
            },
            {
              "name": "institution",
              "isPK": false
            },
            {
              "name": "country",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "ConferenceAttendee",
        "subs": [
          {
            "name": "KeynoteSpeaker",
            "attributes": []
          },
          {
            "name": "CommitteeReviewer",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ConferenceAttendee",
          "pk": "attendeeId",
          "attributes": [
            {
              "name": "attendeeId",
              "isPK": true
            },
            {
              "name": "attendeeName",
              "isPK": false
            },
            {
              "name": "institution",
              "isPK": false
            },
            {
              "name": "country",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "ConferenceAttendee",
        "subs": [
          {
            "name": "KeynoteSpeaker",
            "attributes": []
          },
          {
            "name": "CommitteeReviewer",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "AthleteMember Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'athleteId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'LeaguePlayer' va 'TeamCoach' jadvallarida 'athleteId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AthleteMember",
          "pk": "athleteId",
          "attributes": [
            {
              "name": "athleteId",
              "isPK": true
            },
            {
              "name": "athleteName",
              "isPK": false
            },
            {
              "name": "bloodGroup",
              "isPK": false
            },
            {
              "name": "joinYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "AthleteMember",
        "subs": [
          {
            "name": "LeaguePlayer",
            "attributes": []
          },
          {
            "name": "TeamCoach",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AthleteMember",
          "pk": "athleteId",
          "attributes": [
            {
              "name": "athleteId",
              "isPK": true
            },
            {
              "name": "athleteName",
              "isPK": false
            },
            {
              "name": "bloodGroup",
              "isPK": false
            },
            {
              "name": "joinYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "AthleteMember",
        "subs": [
          {
            "name": "LeaguePlayer",
            "attributes": []
          },
          {
            "name": "TeamCoach",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "CrewMember Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'crewId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'CommercialPilot' va 'SafetyInspector' jadvallarida 'crewId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CrewMember",
          "pk": "crewId",
          "attributes": [
            {
              "name": "crewId",
              "isPK": true
            },
            {
              "name": "crewName",
              "isPK": false
            },
            {
              "name": "flightHoursTotal",
              "isPK": false
            },
            {
              "name": "medicalCertDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "CrewMember",
        "subs": [
          {
            "name": "CommercialPilot",
            "attributes": []
          },
          {
            "name": "SafetyInspector",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CrewMember",
          "pk": "crewId",
          "attributes": [
            {
              "name": "crewId",
              "isPK": true
            },
            {
              "name": "crewName",
              "isPK": false
            },
            {
              "name": "flightHoursTotal",
              "isPK": false
            },
            {
              "name": "medicalCertDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "CrewMember",
        "subs": [
          {
            "name": "CommercialPilot",
            "attributes": []
          },
          {
            "name": "SafetyInspector",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "DealershipClient Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'clientId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'VehicleBuyer' va 'ServiceClient' jadvallarida 'clientId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DealershipClient",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "passportNumber",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "DealershipClient",
        "subs": [
          {
            "name": "VehicleBuyer",
            "attributes": []
          },
          {
            "name": "ServiceClient",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DealershipClient",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "passportNumber",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "DealershipClient",
        "subs": [
          {
            "name": "VehicleBuyer",
            "attributes": []
          },
          {
            "name": "ServiceClient",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "TheatreArtist Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'artistId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'StageActor' va 'PlayDirector' jadvallarida 'artistId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TheatreArtist",
          "pk": "artistId",
          "attributes": [
            {
              "name": "artistId",
              "isPK": true
            },
            {
              "name": "stageName",
              "isPK": false
            },
            {
              "name": "unionCardNo",
              "isPK": false
            },
            {
              "name": "debutYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "TheatreArtist",
        "subs": [
          {
            "name": "StageActor",
            "attributes": []
          },
          {
            "name": "PlayDirector",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TheatreArtist",
          "pk": "artistId",
          "attributes": [
            {
              "name": "artistId",
              "isPK": true
            },
            {
              "name": "stageName",
              "isPK": false
            },
            {
              "name": "unionCardNo",
              "isPK": false
            },
            {
              "name": "debutYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "TheatreArtist",
        "subs": [
          {
            "name": "StageActor",
            "attributes": []
          },
          {
            "name": "PlayDirector",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "MedicalStaff Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'licenseNo' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'Clinician' va 'TrialInvestigator' jadvallarida 'licenseNo' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MedicalStaff",
          "pk": "licenseNo",
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true
            },
            {
              "name": "doctorName",
              "isPK": false
            },
            {
              "name": "specialtyField",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "MedicalStaff",
        "subs": [
          {
            "name": "Clinician",
            "attributes": []
          },
          {
            "name": "TrialInvestigator",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MedicalStaff",
          "pk": "licenseNo",
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true
            },
            {
              "name": "doctorName",
              "isPK": false
            },
            {
              "name": "specialtyField",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "MedicalStaff",
        "subs": [
          {
            "name": "Clinician",
            "attributes": []
          },
          {
            "name": "TrialInvestigator",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "ContentCreator Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'creatorId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'VideoPresenter' va 'AudioPodcaster' jadvallarida 'creatorId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ContentCreator",
          "pk": "creatorId",
          "attributes": [
            {
              "name": "creatorId",
              "isPK": true
            },
            {
              "name": "channelName",
              "isPK": false
            },
            {
              "name": "subscriberTotal",
              "isPK": false
            },
            {
              "name": "contractExpiry",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "ContentCreator",
        "subs": [
          {
            "name": "VideoPresenter",
            "attributes": []
          },
          {
            "name": "AudioPodcaster",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ContentCreator",
          "pk": "creatorId",
          "attributes": [
            {
              "name": "creatorId",
              "isPK": true
            },
            {
              "name": "channelName",
              "isPK": false
            },
            {
              "name": "subscriberTotal",
              "isPK": false
            },
            {
              "name": "contractExpiry",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "ContentCreator",
        "subs": [
          {
            "name": "VideoPresenter",
            "attributes": []
          },
          {
            "name": "AudioPodcaster",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "FleetDriver Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'driverStaffId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'ExpressCourier' va 'LongHaulDriver' jadvallarida 'driverStaffId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FleetDriver",
          "pk": "driverStaffId",
          "attributes": [
            {
              "name": "driverStaffId",
              "isPK": true
            },
            {
              "name": "driverName",
              "isPK": false
            },
            {
              "name": "driverLicenseNo",
              "isPK": false
            },
            {
              "name": "ratingStars",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "FleetDriver",
        "subs": [
          {
            "name": "ExpressCourier",
            "attributes": []
          },
          {
            "name": "LongHaulDriver",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FleetDriver",
          "pk": "driverStaffId",
          "attributes": [
            {
              "name": "driverStaffId",
              "isPK": true
            },
            {
              "name": "driverName",
              "isPK": false
            },
            {
              "name": "driverLicenseNo",
              "isPK": false
            },
            {
              "name": "ratingStars",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "FleetDriver",
        "subs": [
          {
            "name": "ExpressCourier",
            "attributes": []
          },
          {
            "name": "LongHaulDriver",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "RestaurantStaff Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'staffBadgeId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'ChiefBartender' va 'SommelierExpert' jadvallarida 'staffBadgeId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RestaurantStaff",
          "pk": "staffBadgeId",
          "attributes": [
            {
              "name": "staffBadgeId",
              "isPK": true
            },
            {
              "name": "staffName",
              "isPK": false
            },
            {
              "name": "foodSafetyCertDate",
              "isPK": false
            },
            {
              "name": "wageHourly",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "RestaurantStaff",
        "subs": [
          {
            "name": "ChiefBartender",
            "attributes": []
          },
          {
            "name": "SommelierExpert",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RestaurantStaff",
          "pk": "staffBadgeId",
          "attributes": [
            {
              "name": "staffBadgeId",
              "isPK": true
            },
            {
              "name": "staffName",
              "isPK": false
            },
            {
              "name": "foodSafetyCertDate",
              "isPK": false
            },
            {
              "name": "wageHourly",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "RestaurantStaff",
        "subs": [
          {
            "name": "ChiefBartender",
            "attributes": []
          },
          {
            "name": "SommelierExpert",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "RealEstateCustomer Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'customerId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'PropertyVendor' va 'PropertyAcquirer' jadvallarida 'customerId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RealEstateCustomer",
          "pk": "customerId",
          "attributes": [
            {
              "name": "customerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "passportPin",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "RealEstateCustomer",
        "subs": [
          {
            "name": "PropertyVendor",
            "attributes": []
          },
          {
            "name": "PropertyAcquirer",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RealEstateCustomer",
          "pk": "customerId",
          "attributes": [
            {
              "name": "customerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "passportPin",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "RealEstateCustomer",
        "subs": [
          {
            "name": "PropertyVendor",
            "attributes": []
          },
          {
            "name": "PropertyAcquirer",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "PlatformUser Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'userId' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'ActiveLearner' va 'TeachingMentor' jadvallarida 'userId' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PlatformUser",
          "pk": "userId",
          "attributes": [
            {
              "name": "userId",
              "isPK": true
            },
            {
              "name": "userFullName",
              "isPK": false
            },
            {
              "name": "emailAddress",
              "isPK": false
            },
            {
              "name": "regTimestamp",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "PlatformUser",
        "subs": [
          {
            "name": "ActiveLearner",
            "attributes": []
          },
          {
            "name": "TeachingMentor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PlatformUser",
          "pk": "userId",
          "attributes": [
            {
              "name": "userId",
              "isPK": true
            },
            {
              "name": "userFullName",
              "isPK": false
            },
            {
              "name": "emailAddress",
              "isPK": false
            },
            {
              "name": "regTimestamp",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "PlatformUser",
        "subs": [
          {
            "name": "ActiveLearner",
            "attributes": []
          },
          {
            "name": "TeachingMentor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping) • Relational Mapping",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "TradingEnterprise Overlapping Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi ustma-ust tushuvchi modelni relyatsion sxemaga o'tkazishda: har bir subklass alohida jadval bo'lib, ota jadvalning 'enterpriseInn' kalitini o'ziga Birlamchi va Tashqi kalit [PK,FK1] sifatida oladi.",
    "instruction": "'RawMaterialSupplier' va 'WholesaleDistributor' jadvallarida 'enterpriseInn' [PK,FK1] ustunini belgilab, ota jadvalga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TradingEnterprise",
          "pk": "enterpriseInn",
          "attributes": [
            {
              "name": "enterpriseInn",
              "isPK": true
            },
            {
              "name": "legalEntityName",
              "isPK": false
            },
            {
              "name": "bankBik",
              "isPK": false
            },
            {
              "name": "cityHq",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "TradingEnterprise",
        "subs": [
          {
            "name": "RawMaterialSupplier",
            "attributes": []
          },
          {
            "name": "WholesaleDistributor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TradingEnterprise",
          "pk": "enterpriseInn",
          "attributes": [
            {
              "name": "enterpriseInn",
              "isPK": true
            },
            {
              "name": "legalEntityName",
              "isPK": false
            },
            {
              "name": "bankBik",
              "isPK": false
            },
            {
              "name": "cityHq",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "TradingEnterprise",
        "subs": [
          {
            "name": "RawMaterialSupplier",
            "attributes": []
          },
          {
            "name": "WholesaleDistributor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "isWeek2": true
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PropertyOwner Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'PropertyOwner' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'PropertyOwner' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Person",
          "pk": "pinfl",
          "attributes": [
            {
              "name": "pinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Bank",
          "pk": "bankCode",
          "attributes": [
            {
              "name": "bankCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "Company",
          "pk": "tin",
          "attributes": [
            {
              "name": "tin",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PropertyOwner",
          "superclasses": [
            "Person",
            "Bank",
            "Company"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Person",
          "pk": "pinfl",
          "attributes": [
            {
              "name": "pinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Bank",
          "pk": "bankCode",
          "attributes": [
            {
              "name": "bankCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "Company",
          "pk": "tin",
          "attributes": [
            {
              "name": "tin",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PropertyOwner",
          "superclasses": [
            "Person",
            "Bank",
            "Company"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "VehicleOwner Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'VehicleOwner' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'VehicleOwner' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PrivateCitizen",
          "pk": "citizenPinfl",
          "attributes": [
            {
              "name": "citizenPinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "LeasingFirm",
          "pk": "leasingInn",
          "attributes": [
            {
              "name": "leasingInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "StateAgency",
          "pk": "agencyCode",
          "attributes": [
            {
              "name": "agencyCode",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "VehicleOwner",
          "superclasses": [
            "PrivateCitizen",
            "LeasingFirm",
            "StateAgency"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PrivateCitizen",
          "pk": "citizenPinfl",
          "attributes": [
            {
              "name": "citizenPinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "LeasingFirm",
          "pk": "leasingInn",
          "attributes": [
            {
              "name": "leasingInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "StateAgency",
          "pk": "agencyCode",
          "attributes": [
            {
              "name": "agencyCode",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "VehicleOwner",
          "superclasses": [
            "PrivateCitizen",
            "LeasingFirm",
            "StateAgency"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PayeeEntity Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'PayeeEntity' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'PayeeEntity' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FreelanceContractor",
          "pk": "freelancerId",
          "attributes": [
            {
              "name": "freelancerId",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "UtilityProvider",
          "pk": "utilityInn",
          "attributes": [
            {
              "name": "utilityInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "TaxAuthority",
          "pk": "taxOfficeNo",
          "attributes": [
            {
              "name": "taxOfficeNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PayeeEntity",
          "superclasses": [
            "FreelanceContractor",
            "UtilityProvider",
            "TaxAuthority"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FreelanceContractor",
          "pk": "freelancerId",
          "attributes": [
            {
              "name": "freelancerId",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "UtilityProvider",
          "pk": "utilityInn",
          "attributes": [
            {
              "name": "utilityInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "TaxAuthority",
          "pk": "taxOfficeNo",
          "attributes": [
            {
              "name": "taxOfficeNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PayeeEntity",
          "superclasses": [
            "FreelanceContractor",
            "UtilityProvider",
            "TaxAuthority"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "LoanBorrower Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'LoanBorrower' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'LoanBorrower' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoleProprietorship",
          "pk": "spInn",
          "attributes": [
            {
              "name": "spInn",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "CommercialPartnership",
          "pk": "partnershipNo",
          "attributes": [
            {
              "name": "partnershipNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporationHolding",
          "pk": "holdingTin",
          "attributes": [
            {
              "name": "holdingTin",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "LoanBorrower",
          "superclasses": [
            "SoleProprietorship",
            "CommercialPartnership",
            "CorporationHolding"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SoleProprietorship",
          "pk": "spInn",
          "attributes": [
            {
              "name": "spInn",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "CommercialPartnership",
          "pk": "partnershipNo",
          "attributes": [
            {
              "name": "partnershipNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporationHolding",
          "pk": "holdingTin",
          "attributes": [
            {
              "name": "holdingTin",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "LoanBorrower",
          "superclasses": [
            "SoleProprietorship",
            "CommercialPartnership",
            "CorporationHolding"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "LegalSignatory Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'LegalSignatory' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'LegalSignatory' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DomesticCitizen",
          "pk": "residentPinfl",
          "attributes": [
            {
              "name": "residentPinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ForeignDiplomat",
          "pk": "passportNumber",
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporateAttorney",
          "pk": "powerOfAttorneyNo",
          "attributes": [
            {
              "name": "powerOfAttorneyNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "LegalSignatory",
          "superclasses": [
            "DomesticCitizen",
            "ForeignDiplomat",
            "CorporateAttorney"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DomesticCitizen",
          "pk": "residentPinfl",
          "attributes": [
            {
              "name": "residentPinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ForeignDiplomat",
          "pk": "passportNumber",
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporateAttorney",
          "pk": "powerOfAttorneyNo",
          "attributes": [
            {
              "name": "powerOfAttorneyNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "LegalSignatory",
          "superclasses": [
            "DomesticCitizen",
            "ForeignDiplomat",
            "CorporateAttorney"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "CargoConsignor Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'CargoConsignor' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'CargoConsignor' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ManufacturingPlant",
          "pk": "factoryTin",
          "attributes": [
            {
              "name": "factoryTin",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "TradingHouse",
          "pk": "tradingLicNo",
          "attributes": [
            {
              "name": "tradingLicNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "HumanitarianMission",
          "pk": "missionRegCode",
          "attributes": [
            {
              "name": "missionRegCode",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "CargoConsignor",
          "superclasses": [
            "ManufacturingPlant",
            "TradingHouse",
            "HumanitarianMission"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ManufacturingPlant",
          "pk": "factoryTin",
          "attributes": [
            {
              "name": "factoryTin",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "TradingHouse",
          "pk": "tradingLicNo",
          "attributes": [
            {
              "name": "tradingLicNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "HumanitarianMission",
          "pk": "missionRegCode",
          "attributes": [
            {
              "name": "missionRegCode",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "CargoConsignor",
          "superclasses": [
            "ManufacturingPlant",
            "TradingHouse",
            "HumanitarianMission"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PatentAssignee Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'PatentAssignee' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'PatentAssignee' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResearchUniversity",
          "pk": "universityCharterNo",
          "attributes": [
            {
              "name": "universityCharterNo",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "IndependentInventor",
          "pk": "inventorPinfl",
          "attributes": [
            {
              "name": "inventorPinfl",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "TechCorporation",
          "pk": "corpTin",
          "attributes": [
            {
              "name": "corpTin",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PatentAssignee",
          "superclasses": [
            "ResearchUniversity",
            "IndependentInventor",
            "TechCorporation"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ResearchUniversity",
          "pk": "universityCharterNo",
          "attributes": [
            {
              "name": "universityCharterNo",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "IndependentInventor",
          "pk": "inventorPinfl",
          "attributes": [
            {
              "name": "inventorPinfl",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "TechCorporation",
          "pk": "corpTin",
          "attributes": [
            {
              "name": "corpTin",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PatentAssignee",
          "superclasses": [
            "ResearchUniversity",
            "IndependentInventor",
            "TechCorporation"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PolicyBeneficiary Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'PolicyBeneficiary' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'PolicyBeneficiary' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FamilyKin",
          "pk": "relativePinfl",
          "attributes": [
            {
              "name": "relativePinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "MortgageBank",
          "pk": "bankLicNo",
          "attributes": [
            {
              "name": "bankLicNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "CharitableTrust",
          "pk": "charityRegNo",
          "attributes": [
            {
              "name": "charityRegNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PolicyBeneficiary",
          "superclasses": [
            "FamilyKin",
            "MortgageBank",
            "CharitableTrust"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FamilyKin",
          "pk": "relativePinfl",
          "attributes": [
            {
              "name": "relativePinfl",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "MortgageBank",
          "pk": "bankLicNo",
          "attributes": [
            {
              "name": "bankLicNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "CharitableTrust",
          "pk": "charityRegNo",
          "attributes": [
            {
              "name": "charityRegNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "PolicyBeneficiary",
          "superclasses": [
            "FamilyKin",
            "MortgageBank",
            "CharitableTrust"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "TrademarkOwner Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'TrademarkOwner' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'TrademarkOwner' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PrivateEnterpriser",
          "pk": "tinNo",
          "attributes": [
            {
              "name": "tinNo",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "NonProfitOrg",
          "pk": "npoCertNo",
          "attributes": [
            {
              "name": "npoCertNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "JointStockCompany",
          "pk": "jscInn",
          "attributes": [
            {
              "name": "jscInn",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "TrademarkOwner",
          "superclasses": [
            "PrivateEnterpriser",
            "NonProfitOrg",
            "JointStockCompany"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PrivateEnterpriser",
          "pk": "tinNo",
          "attributes": [
            {
              "name": "tinNo",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "NonProfitOrg",
          "pk": "npoCertNo",
          "attributes": [
            {
              "name": "npoCertNo",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "JointStockCompany",
          "pk": "jscInn",
          "attributes": [
            {
              "name": "jscInn",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "TrademarkOwner",
          "superclasses": [
            "PrivateEnterpriser",
            "NonProfitOrg",
            "JointStockCompany"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "HealthCoverageSponsor Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'HealthCoverageSponsor' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'HealthCoverageSponsor' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "EmployerCompany",
          "pk": "employerTin",
          "attributes": [
            {
              "name": "employerTin",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "HealthMinistry",
          "pk": "ministryCode",
          "attributes": [
            {
              "name": "ministryCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "PrivatePhilanthropist",
          "pk": "donorPinfl",
          "attributes": [
            {
              "name": "donorPinfl",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "HealthCoverageSponsor",
          "superclasses": [
            "EmployerCompany",
            "HealthMinistry",
            "PrivatePhilanthropist"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "EmployerCompany",
          "pk": "employerTin",
          "attributes": [
            {
              "name": "employerTin",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "HealthMinistry",
          "pk": "ministryCode",
          "attributes": [
            {
              "name": "ministryCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "PrivatePhilanthropist",
          "pk": "donorPinfl",
          "attributes": [
            {
              "name": "donorPinfl",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "HealthCoverageSponsor",
          "superclasses": [
            "EmployerCompany",
            "HealthMinistry",
            "PrivatePhilanthropist"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "ShareholderEntity Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'ShareholderEntity' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'ShareholderEntity' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MutualFund",
          "pk": "fundRegNo",
          "attributes": [
            {
              "name": "fundRegNo",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "SovereignWealthFund",
          "pk": "sovereignCode",
          "attributes": [
            {
              "name": "sovereignCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "RetailInvestor",
          "pk": "investorPassportNo",
          "attributes": [
            {
              "name": "investorPassportNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "ShareholderEntity",
          "superclasses": [
            "MutualFund",
            "SovereignWealthFund",
            "RetailInvestor"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MutualFund",
          "pk": "fundRegNo",
          "attributes": [
            {
              "name": "fundRegNo",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "SovereignWealthFund",
          "pk": "sovereignCode",
          "attributes": [
            {
              "name": "sovereignCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "RetailInvestor",
          "pk": "investorPassportNo",
          "attributes": [
            {
              "name": "investorPassportNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "ShareholderEntity",
          "superclasses": [
            "MutualFund",
            "SovereignWealthFund",
            "RetailInvestor"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "RunwayOperator Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'RunwayOperator' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'RunwayOperator' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CommercialAirline",
          "pk": "airlineIata",
          "attributes": [
            {
              "name": "airlineIata",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "AirForceSquadron",
          "pk": "militaryUnitCode",
          "attributes": [
            {
              "name": "militaryUnitCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "PrivateAirCharter",
          "pk": "charterFlightCert",
          "attributes": [
            {
              "name": "charterFlightCert",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "RunwayOperator",
          "superclasses": [
            "CommercialAirline",
            "AirForceSquadron",
            "PrivateAirCharter"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CommercialAirline",
          "pk": "airlineIata",
          "attributes": [
            {
              "name": "airlineIata",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "AirForceSquadron",
          "pk": "militaryUnitCode",
          "attributes": [
            {
              "name": "militaryUnitCode",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "PrivateAirCharter",
          "pk": "charterFlightCert",
          "attributes": [
            {
              "name": "charterFlightCert",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "RunwayOperator",
          "superclasses": [
            "CommercialAirline",
            "AirForceSquadron",
            "PrivateAirCharter"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "TelecomSubscriber Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'TelecomSubscriber' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'TelecomSubscriber' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "IndividualSubscriber",
          "pk": "personalId",
          "attributes": [
            {
              "name": "personalId",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporateSubscriber",
          "pk": "companyInn",
          "attributes": [
            {
              "name": "companyInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "IotDeviceGateway",
          "pk": "macAddressDevice",
          "attributes": [
            {
              "name": "macAddressDevice",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "TelecomSubscriber",
          "superclasses": [
            "IndividualSubscriber",
            "CorporateSubscriber",
            "IotDeviceGateway"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "IndividualSubscriber",
          "pk": "personalId",
          "attributes": [
            {
              "name": "personalId",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "CorporateSubscriber",
          "pk": "companyInn",
          "attributes": [
            {
              "name": "companyInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "IotDeviceGateway",
          "pk": "macAddressDevice",
          "attributes": [
            {
              "name": "macAddressDevice",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "TelecomSubscriber",
          "superclasses": [
            "IndividualSubscriber",
            "CorporateSubscriber",
            "IotDeviceGateway"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "GrantFunder Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'GrantFunder' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'GrantFunder' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "StateScienceAgency",
          "pk": "govAgencyId",
          "attributes": [
            {
              "name": "govAgencyId",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "TechConsortium",
          "pk": "consortiumInn",
          "attributes": [
            {
              "name": "consortiumInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "GlobalFoundation",
          "pk": "foundationRegNo",
          "attributes": [
            {
              "name": "foundationRegNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "GrantFunder",
          "superclasses": [
            "StateScienceAgency",
            "TechConsortium",
            "GlobalFoundation"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "StateScienceAgency",
          "pk": "govAgencyId",
          "attributes": [
            {
              "name": "govAgencyId",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "TechConsortium",
          "pk": "consortiumInn",
          "attributes": [
            {
              "name": "consortiumInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "GlobalFoundation",
          "pk": "foundationRegNo",
          "attributes": [
            {
              "name": "foundationRegNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "GrantFunder",
          "superclasses": [
            "StateScienceAgency",
            "TechConsortium",
            "GlobalFoundation"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪) • Relational Mapping",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "TenderBidder Kategoriyasi (Union Type ∪) (Relatsion Sxema)",
    "story": "1-haftadagi Union Type modelini relyatsion sxemaga o'tkazishda: umumiy 'TenderBidder' jadvali ochilib, unga o'zining yagona 'ownerId' [PK] beriladi va superklasslar unga Tashqi Kalit bilan ulanadi.",
    "instruction": "'TenderBidder' jadvalini oching va uning Birlamchi Kalitini [PK] belgilang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "EngineeringConsortium",
          "pk": "consortiumCode",
          "attributes": [
            {
              "name": "consortiumCode",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ConstructionCorp",
          "pk": "builderInn",
          "attributes": [
            {
              "name": "builderInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "MunicipalUtility",
          "pk": "utilityBranchNo",
          "attributes": [
            {
              "name": "utilityBranchNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "TenderBidder",
          "superclasses": [
            "EngineeringConsortium",
            "ConstructionCorp",
            "MunicipalUtility"
          ],
          "isUnion": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "EngineeringConsortium",
          "pk": "consortiumCode",
          "attributes": [
            {
              "name": "consortiumCode",
              "isPK": true
            },
            {
              "name": "nameOrTitle",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ConstructionCorp",
          "pk": "builderInn",
          "attributes": [
            {
              "name": "builderInn",
              "isPK": true
            },
            {
              "name": "licenseCode",
              "isPK": false
            },
            {
              "name": "contactEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "MunicipalUtility",
          "pk": "utilityBranchNo",
          "attributes": [
            {
              "name": "utilityBranchNo",
              "isPK": true
            },
            {
              "name": "charterNumber",
              "isPK": false
            },
            {
              "name": "taxStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "categories": [
        {
          "name": "TenderBidder",
          "superclasses": [
            "EngineeringConsortium",
            "ConstructionCorp",
            "MunicipalUtility"
          ],
          "isUnion": true
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Airport Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Airport",
          "pk": "iataCode",
          "attributes": [
            {
              "name": "iataCode",
              "isPK": true
            },
            {
              "name": "airportName",
              "isPK": false
            },
            {
              "name": "cityLocation",
              "isPK": false
            }
          ]
        },
        {
          "name": "Terminal",
          "pk": "terminalId",
          "attributes": [
            {
              "name": "terminalId",
              "isPK": true
            },
            {
              "name": "gateCount",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightSchedule",
          "pk": "flightNo",
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true
            },
            {
              "name": "depTime",
              "isPK": false
            },
            {
              "name": "destIata",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerBooking",
          "pk": "bookingRef",
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "seatNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airport",
          "entity2": "Terminal",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "Terminal",
          "entity2": "FlightSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "FlightSchedule",
          "entity2": "PassengerBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Airport",
          "pk": "iataCode",
          "attributes": [
            {
              "name": "iataCode",
              "isPK": true
            },
            {
              "name": "airportName",
              "isPK": false
            },
            {
              "name": "cityLocation",
              "isPK": false
            }
          ]
        },
        {
          "name": "Terminal",
          "pk": "terminalId",
          "attributes": [
            {
              "name": "terminalId",
              "isPK": true
            },
            {
              "name": "gateCount",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightSchedule",
          "pk": "flightNo",
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true
            },
            {
              "name": "depTime",
              "isPK": false
            },
            {
              "name": "destIata",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerBooking",
          "pk": "bookingRef",
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "seatNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airport",
          "entity2": "Terminal",
          "name": "Rel1"
        },
        {
          "entity1": "Terminal",
          "entity2": "FlightSchedule",
          "name": "Rel2"
        },
        {
          "entity1": "FlightSchedule",
          "entity2": "PassengerBooking",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "CentralBank Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CentralBank",
          "pk": "bankCode",
          "attributes": [
            {
              "name": "bankCode",
              "isPK": true
            },
            {
              "name": "officialTitle",
              "isPK": false
            },
            {
              "name": "goldReserveTons",
              "isPK": false
            }
          ]
        },
        {
          "name": "CommercialBank",
          "pk": "bikNumber",
          "attributes": [
            {
              "name": "bikNumber",
              "isPK": true
            },
            {
              "name": "bankName",
              "isPK": false
            },
            {
              "name": "capitalSum",
              "isPK": false
            }
          ]
        },
        {
          "name": "SettlementAccount",
          "pk": "accNo",
          "attributes": [
            {
              "name": "accNo",
              "isPK": true
            },
            {
              "name": "currency",
              "isPK": false
            },
            {
              "name": "balance",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClearingTx",
          "pk": "txRef",
          "attributes": [
            {
              "name": "txRef",
              "isPK": true
            },
            {
              "name": "transferSum",
              "isPK": false
            },
            {
              "name": "timestamp",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CentralBank",
          "entity2": "CommercialBank",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "CommercialBank",
          "entity2": "SettlementAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "SettlementAccount",
          "entity2": "ClearingTx",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CentralBank",
          "pk": "bankCode",
          "attributes": [
            {
              "name": "bankCode",
              "isPK": true
            },
            {
              "name": "officialTitle",
              "isPK": false
            },
            {
              "name": "goldReserveTons",
              "isPK": false
            }
          ]
        },
        {
          "name": "CommercialBank",
          "pk": "bikNumber",
          "attributes": [
            {
              "name": "bikNumber",
              "isPK": true
            },
            {
              "name": "bankName",
              "isPK": false
            },
            {
              "name": "capitalSum",
              "isPK": false
            }
          ]
        },
        {
          "name": "SettlementAccount",
          "pk": "accNo",
          "attributes": [
            {
              "name": "accNo",
              "isPK": true
            },
            {
              "name": "currency",
              "isPK": false
            },
            {
              "name": "balance",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClearingTx",
          "pk": "txRef",
          "attributes": [
            {
              "name": "txRef",
              "isPK": true
            },
            {
              "name": "transferSum",
              "isPK": false
            },
            {
              "name": "timestamp",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CentralBank",
          "entity2": "CommercialBank",
          "name": "Rel1"
        },
        {
          "entity1": "CommercialBank",
          "entity2": "SettlementAccount",
          "name": "Rel2"
        },
        {
          "entity1": "SettlementAccount",
          "entity2": "ClearingTx",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Hospital Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hospital",
          "pk": "hospId",
          "attributes": [
            {
              "name": "hospId",
              "isPK": true
            },
            {
              "name": "hospName",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        },
        {
          "name": "SpecializedWard",
          "pk": "wardCode",
          "attributes": [
            {
              "name": "wardCode",
              "isPK": true
            },
            {
              "name": "wardName",
              "isPK": false
            },
            {
              "name": "beds",
              "isPK": false
            }
          ]
        },
        {
          "name": "SpecializedDoctor",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
              "isPK": true
            },
            {
              "name": "docName",
              "isPK": false
            },
            {
              "name": "specialty",
              "isPK": false
            }
          ]
        },
        {
          "name": "PatientCourse",
          "pk": "courseId",
          "attributes": [
            {
              "name": "courseId",
              "isPK": true
            },
            {
              "name": "protocol",
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
          "entity1": "Hospital",
          "entity2": "SpecializedWard",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "SpecializedWard",
          "entity2": "SpecializedDoctor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "SpecializedDoctor",
          "entity2": "PatientCourse",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hospital",
          "pk": "hospId",
          "attributes": [
            {
              "name": "hospId",
              "isPK": true
            },
            {
              "name": "hospName",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        },
        {
          "name": "SpecializedWard",
          "pk": "wardCode",
          "attributes": [
            {
              "name": "wardCode",
              "isPK": true
            },
            {
              "name": "wardName",
              "isPK": false
            },
            {
              "name": "beds",
              "isPK": false
            }
          ]
        },
        {
          "name": "SpecializedDoctor",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
              "isPK": true
            },
            {
              "name": "docName",
              "isPK": false
            },
            {
              "name": "specialty",
              "isPK": false
            }
          ]
        },
        {
          "name": "PatientCourse",
          "pk": "courseId",
          "attributes": [
            {
              "name": "courseId",
              "isPK": true
            },
            {
              "name": "protocol",
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
          "entity1": "Hospital",
          "entity2": "SpecializedWard",
          "name": "Rel1"
        },
        {
          "entity1": "SpecializedWard",
          "entity2": "SpecializedDoctor",
          "name": "Rel2"
        },
        {
          "entity1": "SpecializedDoctor",
          "entity2": "PatientCourse",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "MegaWarehouse Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MegaWarehouse",
          "pk": "hubCode",
          "attributes": [
            {
              "name": "hubCode",
              "isPK": true
            },
            {
              "name": "portName",
              "isPK": false
            },
            {
              "name": "berthCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "ContainerVessel",
          "pk": "imoNumber",
          "attributes": [
            {
              "name": "imoNumber",
              "isPK": true
            },
            {
              "name": "vesselName",
              "isPK": false
            },
            {
              "name": "teuCap",
              "isPK": false
            }
          ]
        },
        {
          "name": "CustomsDeclaration",
          "pk": "gtdNumber",
          "attributes": [
            {
              "name": "gtdNumber",
              "isPK": true
            },
            {
              "name": "dutySum",
              "isPK": false
            },
            {
              "name": "passed",
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
            },
            {
              "name": "license",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MegaWarehouse",
          "entity2": "ContainerVessel",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "ContainerVessel",
          "entity2": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "CustomsDeclaration",
          "entity2": "FreightForwarder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MegaWarehouse",
          "pk": "hubCode",
          "attributes": [
            {
              "name": "hubCode",
              "isPK": true
            },
            {
              "name": "portName",
              "isPK": false
            },
            {
              "name": "berthCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "ContainerVessel",
          "pk": "imoNumber",
          "attributes": [
            {
              "name": "imoNumber",
              "isPK": true
            },
            {
              "name": "vesselName",
              "isPK": false
            },
            {
              "name": "teuCap",
              "isPK": false
            }
          ]
        },
        {
          "name": "CustomsDeclaration",
          "pk": "gtdNumber",
          "attributes": [
            {
              "name": "gtdNumber",
              "isPK": true
            },
            {
              "name": "dutySum",
              "isPK": false
            },
            {
              "name": "passed",
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
            },
            {
              "name": "license",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MegaWarehouse",
          "entity2": "ContainerVessel",
          "name": "Rel1"
        },
        {
          "entity1": "ContainerVessel",
          "entity2": "CustomsDeclaration",
          "name": "Rel2"
        },
        {
          "entity1": "CustomsDeclaration",
          "entity2": "FreightForwarder",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Faculty Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "pk": "facultyCode",
          "attributes": [
            {
              "name": "facultyCode",
              "isPK": true
            },
            {
              "name": "facultyName",
              "isPK": false
            },
            {
              "name": "building",
              "isPK": false
            }
          ]
        },
        {
          "name": "AcademicDept",
          "pk": "deptId",
          "attributes": [
            {
              "name": "deptId",
              "isPK": true
            },
            {
              "name": "deptTitle",
              "isPK": false
            },
            {
              "name": "focusArea",
              "isPK": false
            }
          ]
        },
        {
          "name": "StaffMember",
          "pk": "staffNo",
          "attributes": [
            {
              "name": "staffNo",
              "isPK": true
            },
            {
              "name": "staffName",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        },
        {
          "name": "StudentClass",
          "pk": "classCode",
          "attributes": [
            {
              "name": "classCode",
              "isPK": true
            },
            {
              "name": "semester",
              "isPK": false
            },
            {
              "name": "roomCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Faculty",
          "entity2": "AcademicDept",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "AcademicDept",
          "entity2": "StaffMember",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "StaffMember",
          "entity2": "StudentClass",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "pk": "facultyCode",
          "attributes": [
            {
              "name": "facultyCode",
              "isPK": true
            },
            {
              "name": "facultyName",
              "isPK": false
            },
            {
              "name": "building",
              "isPK": false
            }
          ]
        },
        {
          "name": "AcademicDept",
          "pk": "deptId",
          "attributes": [
            {
              "name": "deptId",
              "isPK": true
            },
            {
              "name": "deptTitle",
              "isPK": false
            },
            {
              "name": "focusArea",
              "isPK": false
            }
          ]
        },
        {
          "name": "StaffMember",
          "pk": "staffNo",
          "attributes": [
            {
              "name": "staffNo",
              "isPK": true
            },
            {
              "name": "staffName",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        },
        {
          "name": "StudentClass",
          "pk": "classCode",
          "attributes": [
            {
              "name": "classCode",
              "isPK": true
            },
            {
              "name": "semester",
              "isPK": false
            },
            {
              "name": "roomCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Faculty",
          "entity2": "AcademicDept",
          "name": "Rel1"
        },
        {
          "entity1": "AcademicDept",
          "entity2": "StaffMember",
          "name": "Rel2"
        },
        {
          "entity1": "StaffMember",
          "entity2": "StudentClass",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "PowerPlant Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PowerPlant",
          "pk": "plantCode",
          "attributes": [
            {
              "name": "plantCode",
              "isPK": true
            },
            {
              "name": "plantName",
              "isPK": false
            },
            {
              "name": "megaWatts",
              "isPK": false
            }
          ]
        },
        {
          "name": "Substation",
          "pk": "substationId",
          "attributes": [
            {
              "name": "substationId",
              "isPK": true
            },
            {
              "name": "substationName",
              "isPK": false
            },
            {
              "name": "voltageKv",
              "isPK": false
            }
          ]
        },
        {
          "name": "TransmissionLine",
          "pk": "lineCode",
          "attributes": [
            {
              "name": "lineCode",
              "isPK": true
            },
            {
              "name": "distanceKm",
              "isPK": false
            },
            {
              "name": "ampCapacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "LoadZone",
          "pk": "zoneId",
          "attributes": [
            {
              "name": "zoneId",
              "isPK": true
            },
            {
              "name": "region",
              "isPK": false
            },
            {
              "name": "peakDemand",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PowerPlant",
          "entity2": "Substation",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "Substation",
          "entity2": "TransmissionLine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "TransmissionLine",
          "entity2": "LoadZone",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PowerPlant",
          "pk": "plantCode",
          "attributes": [
            {
              "name": "plantCode",
              "isPK": true
            },
            {
              "name": "plantName",
              "isPK": false
            },
            {
              "name": "megaWatts",
              "isPK": false
            }
          ]
        },
        {
          "name": "Substation",
          "pk": "substationId",
          "attributes": [
            {
              "name": "substationId",
              "isPK": true
            },
            {
              "name": "substationName",
              "isPK": false
            },
            {
              "name": "voltageKv",
              "isPK": false
            }
          ]
        },
        {
          "name": "TransmissionLine",
          "pk": "lineCode",
          "attributes": [
            {
              "name": "lineCode",
              "isPK": true
            },
            {
              "name": "distanceKm",
              "isPK": false
            },
            {
              "name": "ampCapacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "LoadZone",
          "pk": "zoneId",
          "attributes": [
            {
              "name": "zoneId",
              "isPK": true
            },
            {
              "name": "region",
              "isPK": false
            },
            {
              "name": "peakDemand",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PowerPlant",
          "entity2": "Substation",
          "name": "Rel1"
        },
        {
          "entity1": "Substation",
          "entity2": "TransmissionLine",
          "name": "Rel2"
        },
        {
          "entity1": "TransmissionLine",
          "entity2": "LoadZone",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "RailwayNetwork Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RailwayNetwork",
          "pk": "networkId",
          "attributes": [
            {
              "name": "networkId",
              "isPK": true
            },
            {
              "name": "networkName",
              "isPK": false
            },
            {
              "name": "trackMm",
              "isPK": false
            }
          ]
        },
        {
          "name": "TrainSchedule",
          "pk": "tripNo",
          "attributes": [
            {
              "name": "tripNo",
              "isPK": true
            },
            {
              "name": "depTime",
              "isPK": false
            },
            {
              "name": "arrTime",
              "isPK": false
            }
          ]
        },
        {
          "name": "LocomotiveEngine",
          "pk": "locoNo",
          "attributes": [
            {
              "name": "locoNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "powerHp",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerTicket",
          "pk": "ticketPnr",
          "attributes": [
            {
              "name": "ticketPnr",
              "isPK": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "coachNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RailwayNetwork",
          "entity2": "TrainSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "TrainSchedule",
          "entity2": "LocomotiveEngine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "LocomotiveEngine",
          "entity2": "PassengerTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RailwayNetwork",
          "pk": "networkId",
          "attributes": [
            {
              "name": "networkId",
              "isPK": true
            },
            {
              "name": "networkName",
              "isPK": false
            },
            {
              "name": "trackMm",
              "isPK": false
            }
          ]
        },
        {
          "name": "TrainSchedule",
          "pk": "tripNo",
          "attributes": [
            {
              "name": "tripNo",
              "isPK": true
            },
            {
              "name": "depTime",
              "isPK": false
            },
            {
              "name": "arrTime",
              "isPK": false
            }
          ]
        },
        {
          "name": "LocomotiveEngine",
          "pk": "locoNo",
          "attributes": [
            {
              "name": "locoNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "powerHp",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerTicket",
          "pk": "ticketPnr",
          "attributes": [
            {
              "name": "ticketPnr",
              "isPK": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "coachNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RailwayNetwork",
          "entity2": "TrainSchedule",
          "name": "Rel1"
        },
        {
          "entity1": "TrainSchedule",
          "entity2": "LocomotiveEngine",
          "name": "Rel2"
        },
        {
          "entity1": "LocomotiveEngine",
          "entity2": "PassengerTicket",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "GovPortalService Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "GovPortalService",
          "pk": "serviceCode",
          "attributes": [
            {
              "name": "serviceCode",
              "isPK": true
            },
            {
              "name": "serviceTitle",
              "isPK": false
            },
            {
              "name": "fee",
              "isPK": false
            }
          ]
        },
        {
          "name": "CitizenRequest",
          "pk": "appId",
          "attributes": [
            {
              "name": "appId",
              "isPK": true
            },
            {
              "name": "applicantPinfl",
              "isPK": false
            },
            {
              "name": "submittedAt",
              "isPK": false
            }
          ]
        },
        {
          "name": "MinistryDept",
          "pk": "deptInn",
          "attributes": [
            {
              "name": "deptInn",
              "isPK": true
            },
            {
              "name": "ministryTitle",
              "isPK": false
            },
            {
              "name": "zone",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProcessingOfficer",
          "pk": "officerId",
          "attributes": [
            {
              "name": "officerId",
              "isPK": true
            },
            {
              "name": "officerName",
              "isPK": false
            },
            {
              "name": "certKey",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "GovPortalService",
          "entity2": "CitizenRequest",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "CitizenRequest",
          "entity2": "MinistryDept",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "MinistryDept",
          "entity2": "ProcessingOfficer",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "GovPortalService",
          "pk": "serviceCode",
          "attributes": [
            {
              "name": "serviceCode",
              "isPK": true
            },
            {
              "name": "serviceTitle",
              "isPK": false
            },
            {
              "name": "fee",
              "isPK": false
            }
          ]
        },
        {
          "name": "CitizenRequest",
          "pk": "appId",
          "attributes": [
            {
              "name": "appId",
              "isPK": true
            },
            {
              "name": "applicantPinfl",
              "isPK": false
            },
            {
              "name": "submittedAt",
              "isPK": false
            }
          ]
        },
        {
          "name": "MinistryDept",
          "pk": "deptInn",
          "attributes": [
            {
              "name": "deptInn",
              "isPK": true
            },
            {
              "name": "ministryTitle",
              "isPK": false
            },
            {
              "name": "zone",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProcessingOfficer",
          "pk": "officerId",
          "attributes": [
            {
              "name": "officerId",
              "isPK": true
            },
            {
              "name": "officerName",
              "isPK": false
            },
            {
              "name": "certKey",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "GovPortalService",
          "entity2": "CitizenRequest",
          "name": "Rel1"
        },
        {
          "entity1": "CitizenRequest",
          "entity2": "MinistryDept",
          "name": "Rel2"
        },
        {
          "entity1": "MinistryDept",
          "entity2": "ProcessingOfficer",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "PharmaFactory Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PharmaFactory",
          "pk": "facilityId",
          "attributes": [
            {
              "name": "facilityId",
              "isPK": true
            },
            {
              "name": "facilityName",
              "isPK": false
            },
            {
              "name": "gmpCert",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChemicalLab",
          "pk": "labCode",
          "attributes": [
            {
              "name": "labCode",
              "isPK": true
            },
            {
              "name": "labSpec",
              "isPK": false
            },
            {
              "name": "hplcCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "DrugBatch",
          "pk": "batchNo",
          "attributes": [
            {
              "name": "batchNo",
              "isPK": true
            },
            {
              "name": "manufDate",
              "isPK": false
            },
            {
              "name": "passed",
              "isPK": false
            }
          ]
        },
        {
          "name": "QualityAudit",
          "pk": "auditId",
          "attributes": [
            {
              "name": "auditId",
              "isPK": true
            },
            {
              "name": "auditorName",
              "isPK": false
            },
            {
              "name": "purityPct",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PharmaFactory",
          "entity2": "ChemicalLab",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "ChemicalLab",
          "entity2": "DrugBatch",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "DrugBatch",
          "entity2": "QualityAudit",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PharmaFactory",
          "pk": "facilityId",
          "attributes": [
            {
              "name": "facilityId",
              "isPK": true
            },
            {
              "name": "facilityName",
              "isPK": false
            },
            {
              "name": "gmpCert",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChemicalLab",
          "pk": "labCode",
          "attributes": [
            {
              "name": "labCode",
              "isPK": true
            },
            {
              "name": "labSpec",
              "isPK": false
            },
            {
              "name": "hplcCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "DrugBatch",
          "pk": "batchNo",
          "attributes": [
            {
              "name": "batchNo",
              "isPK": true
            },
            {
              "name": "manufDate",
              "isPK": false
            },
            {
              "name": "passed",
              "isPK": false
            }
          ]
        },
        {
          "name": "QualityAudit",
          "pk": "auditId",
          "attributes": [
            {
              "name": "auditId",
              "isPK": true
            },
            {
              "name": "auditorName",
              "isPK": false
            },
            {
              "name": "purityPct",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PharmaFactory",
          "entity2": "ChemicalLab",
          "name": "Rel1"
        },
        {
          "entity1": "ChemicalLab",
          "entity2": "DrugBatch",
          "name": "Rel2"
        },
        {
          "entity1": "DrugBatch",
          "entity2": "QualityAudit",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "CarManufacturer Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CarManufacturer",
          "pk": "oemCode",
          "attributes": [
            {
              "name": "oemCode",
              "isPK": true
            },
            {
              "name": "corpName",
              "isPK": false
            },
            {
              "name": "isoCert",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssemblyLine",
          "pk": "lineId",
          "attributes": [
            {
              "name": "lineId",
              "isPK": true
            },
            {
              "name": "lineModel",
              "isPK": false
            },
            {
              "name": "dailyCap",
              "isPK": false
            }
          ]
        },
        {
          "name": "DealershipShowroom",
          "pk": "dealerId",
          "attributes": [
            {
              "name": "dealerId",
              "isPK": true
            },
            {
              "name": "showroomCity",
              "isPK": false
            },
            {
              "name": "quota",
              "isPK": false
            }
          ]
        },
        {
          "name": "VehicleOrder",
          "pk": "contractNo",
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true
            },
            {
              "name": "customerPin",
              "isPK": false
            },
            {
              "name": "vin",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CarManufacturer",
          "entity2": "AssemblyLine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "AssemblyLine",
          "entity2": "DealershipShowroom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "DealershipShowroom",
          "entity2": "VehicleOrder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CarManufacturer",
          "pk": "oemCode",
          "attributes": [
            {
              "name": "oemCode",
              "isPK": true
            },
            {
              "name": "corpName",
              "isPK": false
            },
            {
              "name": "isoCert",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssemblyLine",
          "pk": "lineId",
          "attributes": [
            {
              "name": "lineId",
              "isPK": true
            },
            {
              "name": "lineModel",
              "isPK": false
            },
            {
              "name": "dailyCap",
              "isPK": false
            }
          ]
        },
        {
          "name": "DealershipShowroom",
          "pk": "dealerId",
          "attributes": [
            {
              "name": "dealerId",
              "isPK": true
            },
            {
              "name": "showroomCity",
              "isPK": false
            },
            {
              "name": "quota",
              "isPK": false
            }
          ]
        },
        {
          "name": "VehicleOrder",
          "pk": "contractNo",
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true
            },
            {
              "name": "customerPin",
              "isPK": false
            },
            {
              "name": "vin",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CarManufacturer",
          "entity2": "AssemblyLine",
          "name": "Rel1"
        },
        {
          "entity1": "AssemblyLine",
          "entity2": "DealershipShowroom",
          "name": "Rel2"
        },
        {
          "entity1": "DealershipShowroom",
          "entity2": "VehicleOrder",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "SOCNetwork Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SOCNetwork",
          "pk": "perimeterId",
          "attributes": [
            {
              "name": "perimeterId",
              "isPK": true
            },
            {
              "name": "segmentName",
              "isPK": false
            },
            {
              "name": "firewallIp",
              "isPK": false
            }
          ]
        },
        {
          "name": "SecurityThreat",
          "pk": "cveCode",
          "attributes": [
            {
              "name": "cveCode",
              "isPK": true
            },
            {
              "name": "cvssScore",
              "isPK": false
            },
            {
              "name": "category",
              "isPK": false
            }
          ]
        },
        {
          "name": "IncidentTicket",
          "pk": "incidentId",
          "attributes": [
            {
              "name": "incidentId",
              "isPK": true
            },
            {
              "name": "detectedAt",
              "isPK": false
            },
            {
              "name": "state",
              "isPK": false
            }
          ]
        },
        {
          "name": "MitigationAction",
          "pk": "actionId",
          "attributes": [
            {
              "name": "actionId",
              "isPK": true
            },
            {
              "name": "analystBadge",
              "isPK": false
            },
            {
              "name": "patchedAt",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SOCNetwork",
          "entity2": "SecurityThreat",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "SecurityThreat",
          "entity2": "IncidentTicket",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "IncidentTicket",
          "entity2": "MitigationAction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SOCNetwork",
          "pk": "perimeterId",
          "attributes": [
            {
              "name": "perimeterId",
              "isPK": true
            },
            {
              "name": "segmentName",
              "isPK": false
            },
            {
              "name": "firewallIp",
              "isPK": false
            }
          ]
        },
        {
          "name": "SecurityThreat",
          "pk": "cveCode",
          "attributes": [
            {
              "name": "cveCode",
              "isPK": true
            },
            {
              "name": "cvssScore",
              "isPK": false
            },
            {
              "name": "category",
              "isPK": false
            }
          ]
        },
        {
          "name": "IncidentTicket",
          "pk": "incidentId",
          "attributes": [
            {
              "name": "incidentId",
              "isPK": true
            },
            {
              "name": "detectedAt",
              "isPK": false
            },
            {
              "name": "state",
              "isPK": false
            }
          ]
        },
        {
          "name": "MitigationAction",
          "pk": "actionId",
          "attributes": [
            {
              "name": "actionId",
              "isPK": true
            },
            {
              "name": "analystBadge",
              "isPK": false
            },
            {
              "name": "patchedAt",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SOCNetwork",
          "entity2": "SecurityThreat",
          "name": "Rel1"
        },
        {
          "entity1": "SecurityThreat",
          "entity2": "IncidentTicket",
          "name": "Rel2"
        },
        {
          "entity1": "IncidentTicket",
          "entity2": "MitigationAction",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "RetailStore Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RetailStore",
          "pk": "storeId",
          "attributes": [
            {
              "name": "storeId",
              "isPK": true
            },
            {
              "name": "storeName",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "CentralDepot",
          "pk": "depotBarcode",
          "attributes": [
            {
              "name": "depotBarcode",
              "isPK": true
            },
            {
              "name": "volumeTons",
              "isPK": false
            },
            {
              "name": "slots",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupplierVendor",
          "pk": "vendorInn",
          "attributes": [
            {
              "name": "vendorInn",
              "isPK": true
            },
            {
              "name": "vendorName",
              "isPK": false
            },
            {
              "name": "slaScore",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProductInventory",
          "pk": "inventorySku",
          "attributes": [
            {
              "name": "inventorySku",
              "isPK": true
            },
            {
              "name": "quantityOnHand",
              "isPK": false
            },
            {
              "name": "reorderLevel",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RetailStore",
          "entity2": "CentralDepot",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "CentralDepot",
          "entity2": "SupplierVendor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "SupplierVendor",
          "entity2": "ProductInventory",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RetailStore",
          "pk": "storeId",
          "attributes": [
            {
              "name": "storeId",
              "isPK": true
            },
            {
              "name": "storeName",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "CentralDepot",
          "pk": "depotBarcode",
          "attributes": [
            {
              "name": "depotBarcode",
              "isPK": true
            },
            {
              "name": "volumeTons",
              "isPK": false
            },
            {
              "name": "slots",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupplierVendor",
          "pk": "vendorInn",
          "attributes": [
            {
              "name": "vendorInn",
              "isPK": true
            },
            {
              "name": "vendorName",
              "isPK": false
            },
            {
              "name": "slaScore",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProductInventory",
          "pk": "inventorySku",
          "attributes": [
            {
              "name": "inventorySku",
              "isPK": true
            },
            {
              "name": "quantityOnHand",
              "isPK": false
            },
            {
              "name": "reorderLevel",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RetailStore",
          "entity2": "CentralDepot",
          "name": "Rel1"
        },
        {
          "entity1": "CentralDepot",
          "entity2": "SupplierVendor",
          "name": "Rel2"
        },
        {
          "entity1": "SupplierVendor",
          "entity2": "ProductInventory",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "RefineryPlant Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RefineryPlant",
          "pk": "refineryCode",
          "attributes": [
            {
              "name": "refineryCode",
              "isPK": true
            },
            {
              "name": "refineryName",
              "isPK": false
            },
            {
              "name": "capacityBarrels",
              "isPK": false
            }
          ]
        },
        {
          "name": "StorageTanker",
          "pk": "tankId",
          "attributes": [
            {
              "name": "tankId",
              "isPK": true
            },
            {
              "name": "grossVolumeM3",
              "isPK": false
            },
            {
              "name": "grade",
              "isPK": false
            }
          ]
        },
        {
          "name": "PipelineSegment",
          "pk": "segmentCode",
          "attributes": [
            {
              "name": "segmentCode",
              "isPK": true
            },
            {
              "name": "diameterMm",
              "isPK": false
            },
            {
              "name": "pressureBar",
              "isPK": false
            }
          ]
        },
        {
          "name": "CrudeOilShipment",
          "pk": "consignmentNo",
          "attributes": [
            {
              "name": "consignmentNo",
              "isPK": true
            },
            {
              "name": "gravitySpec",
              "isPK": false
            },
            {
              "name": "dispatchTime",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RefineryPlant",
          "entity2": "StorageTanker",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "StorageTanker",
          "entity2": "PipelineSegment",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "PipelineSegment",
          "entity2": "CrudeOilShipment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RefineryPlant",
          "pk": "refineryCode",
          "attributes": [
            {
              "name": "refineryCode",
              "isPK": true
            },
            {
              "name": "refineryName",
              "isPK": false
            },
            {
              "name": "capacityBarrels",
              "isPK": false
            }
          ]
        },
        {
          "name": "StorageTanker",
          "pk": "tankId",
          "attributes": [
            {
              "name": "tankId",
              "isPK": true
            },
            {
              "name": "grossVolumeM3",
              "isPK": false
            },
            {
              "name": "grade",
              "isPK": false
            }
          ]
        },
        {
          "name": "PipelineSegment",
          "pk": "segmentCode",
          "attributes": [
            {
              "name": "segmentCode",
              "isPK": true
            },
            {
              "name": "diameterMm",
              "isPK": false
            },
            {
              "name": "pressureBar",
              "isPK": false
            }
          ]
        },
        {
          "name": "CrudeOilShipment",
          "pk": "consignmentNo",
          "attributes": [
            {
              "name": "consignmentNo",
              "isPK": true
            },
            {
              "name": "gravitySpec",
              "isPK": false
            },
            {
              "name": "dispatchTime",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RefineryPlant",
          "entity2": "StorageTanker",
          "name": "Rel1"
        },
        {
          "entity1": "StorageTanker",
          "entity2": "PipelineSegment",
          "name": "Rel2"
        },
        {
          "entity1": "PipelineSegment",
          "entity2": "CrudeOilShipment",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "TelecomCore Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TelecomCore",
          "pk": "coreSwitchId",
          "attributes": [
            {
              "name": "coreSwitchId",
              "isPK": true
            },
            {
              "name": "routerModel",
              "isPK": false
            },
            {
              "name": "capacityTbps",
              "isPK": false
            }
          ]
        },
        {
          "name": "FiveGBaseStation",
          "pk": "gNodeBId",
          "attributes": [
            {
              "name": "gNodeBId",
              "isPK": true
            },
            {
              "name": "freqGhz",
              "isPK": false
            },
            {
              "name": "mimoSectors",
              "isPK": false
            }
          ]
        },
        {
          "name": "BillingSubscription",
          "pk": "subscriberMsisdn",
          "attributes": [
            {
              "name": "subscriberMsisdn",
              "isPK": true
            },
            {
              "name": "planName",
              "isPK": false
            },
            {
              "name": "balanceGb",
              "isPK": false
            }
          ]
        },
        {
          "name": "DataTrafficSession",
          "pk": "cdrSessionId",
          "attributes": [
            {
              "name": "cdrSessionId",
              "isPK": true
            },
            {
              "name": "connectedAt",
              "isPK": false
            },
            {
              "name": "megabytes",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TelecomCore",
          "entity2": "FiveGBaseStation",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "FiveGBaseStation",
          "entity2": "BillingSubscription",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "BillingSubscription",
          "entity2": "DataTrafficSession",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TelecomCore",
          "pk": "coreSwitchId",
          "attributes": [
            {
              "name": "coreSwitchId",
              "isPK": true
            },
            {
              "name": "routerModel",
              "isPK": false
            },
            {
              "name": "capacityTbps",
              "isPK": false
            }
          ]
        },
        {
          "name": "FiveGBaseStation",
          "pk": "gNodeBId",
          "attributes": [
            {
              "name": "gNodeBId",
              "isPK": true
            },
            {
              "name": "freqGhz",
              "isPK": false
            },
            {
              "name": "mimoSectors",
              "isPK": false
            }
          ]
        },
        {
          "name": "BillingSubscription",
          "pk": "subscriberMsisdn",
          "attributes": [
            {
              "name": "subscriberMsisdn",
              "isPK": true
            },
            {
              "name": "planName",
              "isPK": false
            },
            {
              "name": "balanceGb",
              "isPK": false
            }
          ]
        },
        {
          "name": "DataTrafficSession",
          "pk": "cdrSessionId",
          "attributes": [
            {
              "name": "cdrSessionId",
              "isPK": true
            },
            {
              "name": "connectedAt",
              "isPK": false
            },
            {
              "name": "megabytes",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TelecomCore",
          "entity2": "FiveGBaseStation",
          "name": "Rel1"
        },
        {
          "entity1": "FiveGBaseStation",
          "entity2": "BillingSubscription",
          "name": "Rel2"
        },
        {
          "entity1": "BillingSubscription",
          "entity2": "DataTrafficSession",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise) • Relational Mapping",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Spaceport Korporativ Arxitekturasi (Relatsion Sxema)",
    "story": "1-haftadagi yirik korporativ modelni relyatsion sxemaga o'tkazish: har bir jadval o'zining [PK] va Tashqi Kalitlari [FK] orqali to'liq relieshon zanjirni hosil qiladi.",
    "instruction": "Barcha to'rtta jadvalni relieshon tarzda bog'lang: Tashqi Kalitlarni [FK1] to'g'ri joylashtirib, ota jadvallarga havola qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Spaceport",
          "pk": "complexId",
          "attributes": [
            {
              "name": "complexId",
              "isPK": true
            },
            {
              "name": "cosmodromeName",
              "isPK": false
            },
            {
              "name": "padCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "SatelliteOrbiter",
          "pk": "noradId",
          "attributes": [
            {
              "name": "noradId",
              "isPK": true
            },
            {
              "name": "satelliteName",
              "isPK": false
            },
            {
              "name": "altitudeKm",
              "isPK": false
            }
          ]
        },
        {
          "name": "GroundStation",
          "pk": "stationCode",
          "attributes": [
            {
              "name": "stationCode",
              "isPK": true
            },
            {
              "name": "dishDiameterMeters",
              "isPK": false
            },
            {
              "name": "freqGhz",
              "isPK": false
            }
          ]
        },
        {
          "name": "MissionTelemetry",
          "pk": "telemetryId",
          "attributes": [
            {
              "name": "telemetryId",
              "isPK": true
            },
            {
              "name": "volts",
              "isPK": false
            },
            {
              "name": "tempKelvin",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Spaceport",
          "entity2": "SatelliteOrbiter",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel1"
        },
        {
          "entity1": "SatelliteOrbiter",
          "entity2": "GroundStation",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Rel2"
        },
        {
          "entity1": "GroundStation",
          "entity2": "MissionTelemetry",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Rel3"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Spaceport",
          "pk": "complexId",
          "attributes": [
            {
              "name": "complexId",
              "isPK": true
            },
            {
              "name": "cosmodromeName",
              "isPK": false
            },
            {
              "name": "padCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "SatelliteOrbiter",
          "pk": "noradId",
          "attributes": [
            {
              "name": "noradId",
              "isPK": true
            },
            {
              "name": "satelliteName",
              "isPK": false
            },
            {
              "name": "altitudeKm",
              "isPK": false
            }
          ]
        },
        {
          "name": "GroundStation",
          "pk": "stationCode",
          "attributes": [
            {
              "name": "stationCode",
              "isPK": true
            },
            {
              "name": "dishDiameterMeters",
              "isPK": false
            },
            {
              "name": "freqGhz",
              "isPK": false
            }
          ]
        },
        {
          "name": "MissionTelemetry",
          "pk": "telemetryId",
          "attributes": [
            {
              "name": "telemetryId",
              "isPK": true
            },
            {
              "name": "volts",
              "isPK": false
            },
            {
              "name": "tempKelvin",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Spaceport",
          "entity2": "SatelliteOrbiter",
          "name": "Rel1"
        },
        {
          "entity1": "SatelliteOrbiter",
          "entity2": "GroundStation",
          "name": "Rel2"
        },
        {
          "entity1": "GroundStation",
          "entity2": "MissionTelemetry",
          "name": "Rel3"
        }
      ]
    },
    "isWeek2": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.QUESTIONS_101_150;
}
