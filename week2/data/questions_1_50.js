var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_1_50 = [
  {
    "id": 1,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Temur Karimov",
    "clientRole": "Aviatsiya Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Aviakompaniya Aviatsiya Parki (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Aircraft** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Fuqaro Aviatsiyasi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Aircraft** superklassidan ikkita maxsus subklass ajratiladi: **PassengerPlane** (`seatCount`, `entertainmentSystem`) va **CargoPlane** (`maxPayloadTons`, `cargoDoorType`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit tailNo ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Aircraft' superklassidan ISA uchburchagi orqali 'PassengerPlane' va 'CargoPlane' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Aircraft",
          "pk": "tailNo",
          "attributes": [
            {
              "name": "tailNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "manufacturer",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
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
          "pk": "tailNo",
          "attributes": [
            {
              "name": "tailNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "manufacturer",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Aircraft",
        "subs": [
          {
            "name": "PassengerPlane",
            "attributes": [
              {
                "name": "seatCount",
                "isPK": false
              },
              {
                "name": "entertainmentSystem",
                "isPK": false
              }
            ]
          },
          {
            "name": "CargoPlane",
            "attributes": [
              {
                "name": "maxPayloadTons",
                "isPK": false
              },
              {
                "name": "cargoDoorType",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 2,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Dr. Aziza Rahimova",
    "clientRole": "Bosh Shifokor Muovini",
    "clientAvatar": "mentor",
    "title": "Markaziy Shifoxona Bemorlar Reyestri (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Patient** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Tibbiyot & Sog'liqni Saqlash amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Patient** superklassidan ikkita maxsus subklass ajratiladi: **InPatient** (`bedNumber`, `admissionDate`) va **OutPatient** (`clinicVisitDate`, `doctorNotes`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit patientId ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Patient' superklassidan ISA uchburchagi orqali 'InPatient' va 'OutPatient' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
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
              "name": "dob",
              "isPK": false
            },
            {
              "name": "bloodType",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
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
              "name": "dob",
              "isPK": false
            },
            {
              "name": "bloodType",
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
        "superclass": "Patient",
        "subs": [
          {
            "name": "InPatient",
            "attributes": [
              {
                "name": "bedNumber",
                "isPK": false
              },
              {
                "name": "admissionDate",
                "isPK": false
              }
            ]
          },
          {
            "name": "OutPatient",
            "attributes": [
              {
                "name": "clinicVisitDate",
                "isPK": false
              },
              {
                "name": "doctorNotes",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 3,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Bobur Mansurov",
    "clientRole": "Akademik Registrator",
    "clientAvatar": "mentor",
    "title": "Universitet Talabalar Akademik Reyestri (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Student** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Oliy Ta'lim amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Student** superklassidan ikkita maxsus subklass ajratiladi: **Undergraduate** (`highSchoolDiploma`, `creditsCompleted`) va **Postgraduate** (`bachelorDegreeNo`, `thesisTopic`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit studentId ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Student' superklassidan ISA uchburchagi orqali 'Undergraduate' va 'Postgraduate' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
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
              "name": "firstName",
              "isPK": false
            },
            {
              "name": "lastName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "gpa",
              "isPK": false
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
          "pk": "studentId",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            },
            {
              "name": "firstName",
              "isPK": false
            },
            {
              "name": "lastName",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            },
            {
              "name": "gpa",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Student",
        "subs": [
          {
            "name": "Undergraduate",
            "attributes": [
              {
                "name": "highSchoolDiploma",
                "isPK": false
              },
              {
                "name": "creditsCompleted",
                "isPK": false
              }
            ]
          },
          {
            "name": "Postgraduate",
            "attributes": [
              {
                "name": "bachelorDegreeNo",
                "isPK": false
              },
              {
                "name": "thesisTopic",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 4,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Gulnora Karimova",
    "clientRole": "Bosh Bibliograf",
    "clientAvatar": "mentor",
    "title": "Davlat Ilmiy Kutubxonasi Kitob Fondi (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Book** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Kutubxona & Fond amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Book** superklassidan ikkita maxsus subklass ajratiladi: **EBook** (`fileFormat`, `fileSizeBytes`) va **PrintBook** (`shelfLocation`, `coverType`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit isbn ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Book' superklassidan ISA uchburchagi orqali 'EBook' va 'PrintBook' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Book",
          "pk": "isbn",
          "attributes": [
            {
              "name": "isbn",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "author",
              "isPK": false
            },
            {
              "name": "publishYear",
              "isPK": false
            },
            {
              "name": "genre",
              "isPK": false
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
          "pk": "isbn",
          "attributes": [
            {
              "name": "isbn",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "author",
              "isPK": false
            },
            {
              "name": "publishYear",
              "isPK": false
            },
            {
              "name": "genre",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Book",
        "subs": [
          {
            "name": "EBook",
            "attributes": [
              {
                "name": "fileFormat",
                "isPK": false
              },
              {
                "name": "fileSizeBytes",
                "isPK": false
              }
            ]
          },
          {
            "name": "PrintBook",
            "attributes": [
              {
                "name": "shelfLocation",
                "isPK": false
              },
              {
                "name": "coverType",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 5,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Rustam Aliyev",
    "clientRole": "Avtosalon Savdo Direktori",
    "clientAvatar": "mentor",
    "title": "Avtosalon Transport Vositalari Reyestri (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Vehicle** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Avtomobilsozlik & Dilerlik amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Vehicle** superklassidan ikkita maxsus subklass ajratiladi: **ElectricVehicle** (`batteryKwh`, `chargingTimeHrs`) va **CombustionCar** (`fuelTankLiters`, `emissionClass`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit vin ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Vehicle' superklassidan ISA uchburchagi orqali 'ElectricVehicle' va 'CombustionCar' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Vehicle",
          "pk": "vin",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "make",
              "isPK": false
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "prodYear",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Vehicle",
          "pk": "vin",
          "attributes": [
            {
              "name": "vin",
              "isPK": true
            },
            {
              "name": "make",
              "isPK": false
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "prodYear",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Vehicle",
        "subs": [
          {
            "name": "ElectricVehicle",
            "attributes": [
              {
                "name": "batteryKwh",
                "isPK": false
              },
              {
                "name": "chargingTimeHrs",
                "isPK": false
              }
            ]
          },
          {
            "name": "CombustionCar",
            "attributes": [
              {
                "name": "fuelTankLiters",
                "isPK": false
              },
              {
                "name": "emissionClass",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 6,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Jamshid Qodirov",
    "clientRole": "Bosh Buxgalter",
    "clientAvatar": "mentor",
    "title": "Tijorat Banki Depozit va Hisoblar Tizimi (EER Bosqichi)",
    "story": "1-haftada yaratilgan **BankAccount** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Bank & Moliya amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **BankAccount** superklassidan ikkita maxsus subklass ajratiladi: **SavingsAccount** (`interestRatePercent`, `minBalance`) va **CheckingAccount** (`overdraftLimit`, `checkbookNo`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit accountNo ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'BankAccount' superklassidan ISA uchburchagi orqali 'SavingsAccount' va 'CheckingAccount' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
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
              "name": "balance",
              "isPK": false
            },
            {
              "name": "currency",
              "isPK": false
            },
            {
              "name": "openDate",
              "isPK": false
            },
            {
              "name": "branchCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
              "name": "balance",
              "isPK": false
            },
            {
              "name": "currency",
              "isPK": false
            },
            {
              "name": "openDate",
              "isPK": false
            },
            {
              "name": "branchCode",
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
            "name": "SavingsAccount",
            "attributes": [
              {
                "name": "interestRatePercent",
                "isPK": false
              },
              {
                "name": "minBalance",
                "isPK": false
              }
            ]
          },
          {
            "name": "CheckingAccount",
            "attributes": [
              {
                "name": "overdraftLimit",
                "isPK": false
              },
              {
                "name": "checkbookNo",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 7,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Malika Yusupova",
    "clientRole": "Mehmonxona Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Besh Yulduzli Mehmonxona Xonalar Fondi (EER Bosqichi)",
    "story": "1-haftada yaratilgan **HotelRoom** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Mehmonxona & Turizm amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **HotelRoom** superklassidan ikkita maxsus subklass ajratiladi: **StandardRoom** (`singleBedCount`, `hasBalcony`) va **PresidentialSuite** (`livingRoomCount`, `hasJacuzzi`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit roomNo ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'HotelRoom' superklassidan ISA uchburchagi orqali 'StandardRoom' va 'PresidentialSuite' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
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
              "name": "roomType",
              "isPK": false
            },
            {
              "name": "pricePerNight",
              "isPK": false
            },
            {
              "name": "floorNo",
              "isPK": false
            },
            {
              "name": "capacity",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
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
              "name": "roomType",
              "isPK": false
            },
            {
              "name": "pricePerNight",
              "isPK": false
            },
            {
              "name": "floorNo",
              "isPK": false
            },
            {
              "name": "capacity",
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
              {
                "name": "singleBedCount",
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
            "attributes": [
              {
                "name": "livingRoomCount",
                "isPK": false
              },
              {
                "name": "hasJacuzzi",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 8,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Otabek Sodiqov",
    "clientRole": "Bosh Oshpaz",
    "clientAvatar": "mentor",
    "title": "Premium Restoran Taomnomasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan **MenuItem** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Restoran & Katering amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **MenuItem** superklassidan ikkita maxsus subklass ajratiladi: **VegetarianDish** (`organicCertified`, `dairyFree`) va **MeatDish** (`meatType`, `cookTimeMin`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit itemId ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'MenuItem' superklassidan ISA uchburchagi orqali 'VegetarianDish' va 'MeatDish' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MenuItem",
          "pk": "itemId",
          "attributes": [
            {
              "name": "itemId",
              "isPK": true
            },
            {
              "name": "name",
              "isPK": false
            },
            {
              "name": "category",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "calories",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MenuItem",
          "pk": "itemId",
          "attributes": [
            {
              "name": "itemId",
              "isPK": true
            },
            {
              "name": "name",
              "isPK": false
            },
            {
              "name": "category",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "calories",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "MenuItem",
        "subs": [
          {
            "name": "VegetarianDish",
            "attributes": [
              {
                "name": "organicCertified",
                "isPK": false
              },
              {
                "name": "dairyFree",
                "isPK": false
              }
            ]
          },
          {
            "name": "MeatDish",
            "attributes": [
              {
                "name": "meatType",
                "isPK": false
              },
              {
                "name": "cookTimeMin",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 9,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Farhod Ergashev",
    "clientRole": "Texnik Direktor (CTO)",
    "clientAvatar": "mentor",
    "title": "IT Kompaniyasi Muhandislik Shtati (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Developer** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. IT & Dasturiy Ta'minot amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Developer** superklassidan ikkita maxsus subklass ajratiladi: **FrontendDev** (`uiFramework`, `designSkillLevel`) va **BackendDev** (`dbEngine`, `cloudCertified`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit devId ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Developer' superklassidan ISA uchburchagi orqali 'FrontendDev' va 'BackendDev' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Developer",
          "pk": "devId",
          "attributes": [
            {
              "name": "devId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "role",
              "isPK": false
            },
            {
              "name": "techStack",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
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
          "pk": "devId",
          "attributes": [
            {
              "name": "devId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "role",
              "isPK": false
            },
            {
              "name": "techStack",
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
        "superclass": "Developer",
        "subs": [
          {
            "name": "FrontendDev",
            "attributes": [
              {
                "name": "uiFramework",
                "isPK": false
              },
              {
                "name": "designSkillLevel",
                "isPK": false
              }
            ]
          },
          {
            "name": "BackendDev",
            "attributes": [
              {
                "name": "dbEngine",
                "isPK": false
              },
              {
                "name": "cloudCertified",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 10,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Shahnoza Karimova",
    "clientRole": "Mahsulot Bosh Menejeri",
    "clientAvatar": "mentor",
    "title": "Onlayn Gipermarket Tovar Katalogi (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Product** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. E-Commerce & Savdo amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Product** superklassidan ikkita maxsus subklass ajratiladi: **DigitalProduct** (`downloadUrl`, `licenseKeyCount`) va **PhysicalProduct** (`dimensionsCm`, `shippingFee`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit sku ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Product' superklassidan ISA uchburchagi orqali 'DigitalProduct' va 'PhysicalProduct' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Product",
          "pk": "sku",
          "attributes": [
            {
              "name": "sku",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "stockQty",
              "isPK": false
            },
            {
              "name": "weightKg",
              "isPK": false
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
          "pk": "sku",
          "attributes": [
            {
              "name": "sku",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "stockQty",
              "isPK": false
            },
            {
              "name": "weightKg",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "Product",
        "subs": [
          {
            "name": "DigitalProduct",
            "attributes": [
              {
                "name": "downloadUrl",
                "isPK": false
              },
              {
                "name": "licenseKeyCount",
                "isPK": false
              }
            ]
          },
          {
            "name": "PhysicalProduct",
            "attributes": [
              {
                "name": "dimensionsCm",
                "isPK": false
              },
              {
                "name": "shippingFee",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 11,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Akmal Shokirov",
    "clientRole": "Kinoprokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Kinoteatrlar Tarmog'i Filmlar Jadvali (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Movie** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Kino & Ko'ngilochar amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Movie** superklassidan ikkita maxsus subklass ajratiladi: **FeatureFilm** (`boxOfficeMillions`, `aspectRatio`) va **DocumentaryFilm** (`historicalTopic`, `narratorName`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit movieId ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Movie' superklassidan ISA uchburchagi orqali 'FeatureFilm' va 'DocumentaryFilm' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
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
      "relationships": []
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
            "name": "FeatureFilm",
            "attributes": [
              {
                "name": "boxOfficeMillions",
                "isPK": false
              },
              {
                "name": "aspectRatio",
                "isPK": false
              }
            ]
          },
          {
            "name": "DocumentaryFilm",
            "attributes": [
              {
                "name": "historicalTopic",
                "isPK": false
              },
              {
                "name": "narratorName",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 12,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Umida Zokirova",
    "clientRole": "Bosh Provisor",
    "clientAvatar": "mentor",
    "title": "Markaziy Dorixona Dori Vositalari Inventari (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Medicine** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Farmatsevtika & Dorixona amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Medicine** superklassidan ikkita maxsus subklass ajratiladi: **PrescriptionDrug** (`controlledSchedule`, `doctorReq`) va **OtcDrug** (`flavor`, `ageLimitYears`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit barcode ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'Medicine' superklassidan ISA uchburchagi orqali 'PrescriptionDrug' va 'OtcDrug' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
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
      "relationships": []
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
            "name": "PrescriptionDrug",
            "attributes": [
              {
                "name": "controlledSchedule",
                "isPK": false
              },
              {
                "name": "doctorReq",
                "isPK": false
              }
            ]
          },
          {
            "name": "OtcDrug",
            "attributes": [
              {
                "name": "flavor",
                "isPK": false
              },
              {
                "name": "ageLimitYears",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 13,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Sanjar Normatov",
    "clientRole": "Logistika Floti Rahbari",
    "clientAvatar": "mentor",
    "title": "Trans-Kontinental Yuk Tashish Avtoparki (EER Bosqichi)",
    "story": "1-haftada yaratilgan **CargoTruck** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Logistika & Yuk Tashish amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **CargoTruck** superklassidan ikkita maxsus subklass ajratiladi: **RefrigeratedTruck** (`minTempCelsius`, `compressorPower`) va **FlatbedTruck** (`bedLengthMeters`, `maxAxleWeight`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit plateNo ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'CargoTruck' superklassidan ISA uchburchagi orqali 'RefrigeratedTruck' va 'FlatbedTruck' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
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
      "relationships": []
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
            "name": "RefrigeratedTruck",
            "attributes": [
              {
                "name": "minTempCelsius",
                "isPK": false
              },
              {
                "name": "compressorPower",
                "isPK": false
              }
            ]
          },
          {
            "name": "FlatbedTruck",
            "attributes": [
              {
                "name": "bedLengthMeters",
                "isPK": false
              },
              {
                "name": "maxAxleWeight",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 14,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Nilufar Rahimova",
    "clientRole": "Mijozlar Xizmati Rahbari",
    "clientAvatar": "mentor",
    "title": "Premium Fitnes Klub A'zolari Reyestri (EER Bosqichi)",
    "story": "1-haftada yaratilgan **ClubMember** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Sport & Fitnes amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **ClubMember** superklassidan ikkita maxsus subklass ajratiladi: **VipMember** (`personalTrainerId`, `spaAccessLevel`) va **RegularMember** (`lockerAssigned`, `timeSlot`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit memberCardNo ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'ClubMember' superklassidan ISA uchburchagi orqali 'VipMember' va 'RegularMember' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
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
      "relationships": []
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
            "name": "VipMember",
            "attributes": [
              {
                "name": "personalTrainerId",
                "isPK": false
              },
              {
                "name": "spaAccessLevel",
                "isPK": false
              }
            ]
          },
          {
            "name": "RegularMember",
            "attributes": [
              {
                "name": "lockerAssigned",
                "isPK": false
              },
              {
                "name": "timeSlot",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 15,
    "sector": 1,
    "difficulty": "1-Qavat • EER Kengaytirish",
    "clientName": "Davron Karimov",
    "clientRole": "Bosh Energetik Muhandis",
    "clientAvatar": "mentor",
    "title": "Quyosh Fotoelektr Stansiyasi Invertorlari (EER Bosqichi)",
    "story": "1-haftada yaratilgan **SolarInverter** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Yashil Energetika amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **SolarInverter** superklassidan ikkita maxsus subklass ajratiladi: **CentralInverter** (`transformerRatingKva`, `coolingSystem`) va **MicroInverter** (`mpptChannels`, `efficiencyRating`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit serialNo ni meros qilib oladi.",
    "instruction": "Polotnodagi mavjud 'SolarInverter' superklassidan ISA uchburchagi orqali 'CentralInverter' va 'MicroInverter' subklasslarini {Mandatory, Or} cheklovi bilan bog'lang.",
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
      "relationships": []
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
            "name": "CentralInverter",
            "attributes": [
              {
                "name": "transformerRatingKva",
                "isPK": false
              },
              {
                "name": "coolingSystem",
                "isPK": false
              }
            ]
          },
          {
            "name": "MicroInverter",
            "attributes": [
              {
                "name": "mpptChannels",
                "isPK": false
              },
              {
                "name": "efficiencyRating",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 16,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Polkovnik Botir Rahmonov",
    "clientRole": "DYXX Bosh Inspektor",
    "clientAvatar": "mentor",
    "title": "Avtomobil Haydovchisi va Haydovchilik Guvohnomasi (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Driver** va **DriverLicense** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Driver** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Driver** entitiysi superklassga aylantirilib, undan **DriverPremium** va **DriverStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Driver va DriverLicense o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Driver' superklassiga 'DriverPremium' va 'DriverStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Driver",
          "pk": "driverId",
          "attributes": [
            {
              "name": "driverId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "bloodGroup",
              "isPK": false
            }
          ]
        },
        {
          "name": "DriverLicense",
          "pk": "licenseNo",
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true
            },
            {
              "name": "categories",
              "isPK": false
            },
            {
              "name": "issueDate",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Driver",
          "entity2": "DriverLicense",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "Holds"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Driver",
          "pk": "driverId",
          "attributes": [
            {
              "name": "driverId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "bloodGroup",
              "isPK": false
            }
          ]
        },
        {
          "name": "DriverLicense",
          "pk": "licenseNo",
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true
            },
            {
              "name": "categories",
              "isPK": false
            },
            {
              "name": "issueDate",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Driver",
          "entity2": "DriverLicense",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "Holds"
        }
      ],
      "subclasses": {
        "superclass": "Driver",
        "subs": [
          {
            "name": "DriverPremium",
            "attributes": []
          },
          {
            "name": "DriverStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 17,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Mayor Sherzod Aliyev",
    "clientRole": "Pasport Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Fuqaro va Biometrik Identifikatsiya Pasporti (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Citizen** va **Passport** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Citizen** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Citizen** entitiysi superklassga aylantirilib, undan **CitizenPremium** va **CitizenStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Citizen va Passport o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Citizen' superklassiga 'CitizenPremium' va 'CitizenStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
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
              "name": "nationality",
              "isPK": false
            }
          ]
        },
        {
          "name": "Passport",
          "pk": "passportNo",
          "attributes": [
            {
              "name": "passportNo",
              "isPK": true
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "issuedBy",
              "isPK": false
            },
            {
              "name": "chipVersion",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Passport",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "IssuedTo"
        }
      ]
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
              "name": "nationality",
              "isPK": false
            }
          ]
        },
        {
          "name": "Passport",
          "pk": "passportNo",
          "attributes": [
            {
              "name": "passportNo",
              "isPK": true
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "issuedBy",
              "isPK": false
            },
            {
              "name": "chipVersion",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Passport",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "IssuedTo"
        }
      ],
      "subclasses": {
        "superclass": "Citizen",
        "subs": [
          {
            "name": "CitizenPremium",
            "attributes": []
          },
          {
            "name": "CitizenStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 18,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Nodir Hakimov",
    "clientRole": "Soliq Inspeksiyasi Rahbari",
    "clientAvatar": "mentor",
    "title": "Kompaniya va Soliq Ro'yxatdan O'tish Guvohnomasi (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Company** va **TaxCertificate** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Company** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Company** entitiysi superklassga aylantirilib, undan **CompanyPremium** va **CompanyStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Company va TaxCertificate o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Company' superklassiga 'CompanyPremium' va 'CompanyStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Company",
          "pk": "tin",
          "attributes": [
            {
              "name": "tin",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "legalAddress",
              "isPK": false
            },
            {
              "name": "industryType",
              "isPK": false
            }
          ]
        },
        {
          "name": "TaxCertificate",
          "pk": "certId",
          "attributes": [
            {
              "name": "certId",
              "isPK": true
            },
            {
              "name": "taxRegime",
              "isPK": false
            },
            {
              "name": "effectiveDate",
              "isPK": false
            },
            {
              "name": "regNumber",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Company",
          "entity2": "TaxCertificate",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "CertifiedBy"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Company",
          "pk": "tin",
          "attributes": [
            {
              "name": "tin",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "legalAddress",
              "isPK": false
            },
            {
              "name": "industryType",
              "isPK": false
            }
          ]
        },
        {
          "name": "TaxCertificate",
          "pk": "certId",
          "attributes": [
            {
              "name": "certId",
              "isPK": true
            },
            {
              "name": "taxRegime",
              "isPK": false
            },
            {
              "name": "effectiveDate",
              "isPK": false
            },
            {
              "name": "regNumber",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Company",
          "entity2": "TaxCertificate",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "CertifiedBy"
        }
      ],
      "subclasses": {
        "superclass": "Company",
        "subs": [
          {
            "name": "CompanyPremium",
            "attributes": []
          },
          {
            "name": "CompanyStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 19,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Prof. Hasan Umarov",
    "clientRole": "Bosh Shifokor",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bo'limi va Bo'lim Bosh Shifokori (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **HospitalDept** va **HeadDoctor** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **HospitalDept** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **HospitalDept** entitiysi superklassga aylantirilib, undan **HospitalDeptPremium** va **HospitalDeptStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud HospitalDept va HeadDoctor o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'HospitalDept' superklassiga 'HospitalDeptPremium' va 'HospitalDeptStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalDept",
          "pk": "deptCode",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "deptName",
              "isPK": false
            },
            {
              "name": "floorNo",
              "isPK": false
            },
            {
              "name": "bedQuota",
              "isPK": false
            }
          ]
        },
        {
          "name": "HeadDoctor",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
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
      "relationships": [
        {
          "entity1": "HospitalDept",
          "entity2": "HeadDoctor",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "HeadedBy"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalDept",
          "pk": "deptCode",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "deptName",
              "isPK": false
            },
            {
              "name": "floorNo",
              "isPK": false
            },
            {
              "name": "bedQuota",
              "isPK": false
            }
          ]
        },
        {
          "name": "HeadDoctor",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
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
      "relationships": [
        {
          "entity1": "HospitalDept",
          "entity2": "HeadDoctor",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "HeadedBy"
        }
      ],
      "subclasses": {
        "superclass": "HospitalDept",
        "subs": [
          {
            "name": "HospitalDeptPremium",
            "attributes": []
          },
          {
            "name": "HospitalDeptStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 20,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Javohir Qosimov",
    "clientRole": "IT Aktivlar Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimi va Xizmat Noutbuki (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **StaffMember** va **AssignedLaptop** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **StaffMember** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **StaffMember** entitiysi superklassga aylantirilib, undan **StaffMemberPremium** va **StaffMemberStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud StaffMember va AssignedLaptop o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'StaffMember' superklassiga 'StaffMemberPremium' va 'StaffMemberStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "StaffMember",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "staffName",
              "isPK": false
            },
            {
              "name": "jobTitle",
              "isPK": false
            },
            {
              "name": "workEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssignedLaptop",
          "pk": "assetTag",
          "attributes": [
            {
              "name": "assetTag",
              "isPK": true
            },
            {
              "name": "serialNo",
              "isPK": false
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "ramGb",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "StaffMember",
          "entity2": "AssignedLaptop",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "AssignedTo"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "StaffMember",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "staffName",
              "isPK": false
            },
            {
              "name": "jobTitle",
              "isPK": false
            },
            {
              "name": "workEmail",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssignedLaptop",
          "pk": "assetTag",
          "attributes": [
            {
              "name": "assetTag",
              "isPK": true
            },
            {
              "name": "serialNo",
              "isPK": false
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "ramGb",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "StaffMember",
          "entity2": "AssignedLaptop",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "AssignedTo"
        }
      ],
      "subclasses": {
        "superclass": "StaffMember",
        "subs": [
          {
            "name": "StaffMemberPremium",
            "attributes": []
          },
          {
            "name": "StaffMemberStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 21,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Shavkat Toirov",
    "clientRole": "Devonxona Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Vazirlik Boshqarmasi va Soha Vaziri (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Ministry** va **Minister** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Ministry** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Ministry** entitiysi superklassga aylantirilib, undan **MinistryPremium** va **MinistryStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Ministry va Minister o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Ministry' superklassiga 'MinistryPremium' va 'MinistryStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Ministry",
          "pk": "ministryId",
          "attributes": [
            {
              "name": "ministryId",
              "isPK": true
            },
            {
              "name": "officialTitle",
              "isPK": false
            },
            {
              "name": "budgetBillion",
              "isPK": false
            },
            {
              "name": "location",
              "isPK": false
            }
          ]
        },
        {
          "name": "Minister",
          "pk": "ministerId",
          "attributes": [
            {
              "name": "ministerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "appointedDate",
              "isPK": false
            },
            {
              "name": "decreeNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Ministry",
          "entity2": "Minister",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "LedBy"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Ministry",
          "pk": "ministryId",
          "attributes": [
            {
              "name": "ministryId",
              "isPK": true
            },
            {
              "name": "officialTitle",
              "isPK": false
            },
            {
              "name": "budgetBillion",
              "isPK": false
            },
            {
              "name": "location",
              "isPK": false
            }
          ]
        },
        {
          "name": "Minister",
          "pk": "ministerId",
          "attributes": [
            {
              "name": "ministerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "appointedDate",
              "isPK": false
            },
            {
              "name": "decreeNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Ministry",
          "entity2": "Minister",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "LedBy"
        }
      ],
      "subclasses": {
        "superclass": "Ministry",
        "subs": [
          {
            "name": "MinistryPremium",
            "attributes": []
          },
          {
            "name": "MinistryStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 22,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Kapitan Anvar Salimov",
    "clientRole": "Flot Admiral Shtabi",
    "clientAvatar": "mentor",
    "title": "Dengiz Harbiylashgan Kemasi va Kema Kapitani (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Warship** va **Captain** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Warship** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Warship** entitiysi superklassga aylantirilib, undan **WarshipPremium** va **WarshipStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Warship va Captain o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Warship' superklassiga 'WarshipPremium' va 'WarshipStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Warship",
          "pk": "hullNo",
          "attributes": [
            {
              "name": "hullNo",
              "isPK": true
            },
            {
              "name": "shipName",
              "isPK": false
            },
            {
              "name": "displacementTons",
              "isPK": false
            },
            {
              "name": "commissionYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Captain",
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
              "name": "rankGrade",
              "isPK": false
            },
            {
              "name": "serviceYears",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Warship",
          "entity2": "Captain",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "CommandedBy"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Warship",
          "pk": "hullNo",
          "attributes": [
            {
              "name": "hullNo",
              "isPK": true
            },
            {
              "name": "shipName",
              "isPK": false
            },
            {
              "name": "displacementTons",
              "isPK": false
            },
            {
              "name": "commissionYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Captain",
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
              "name": "rankGrade",
              "isPK": false
            },
            {
              "name": "serviceYears",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Warship",
          "entity2": "Captain",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "CommandedBy"
        }
      ],
      "subclasses": {
        "superclass": "Warship",
        "subs": [
          {
            "name": "WarshipPremium",
            "attributes": []
          },
          {
            "name": "WarshipStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 23,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Muzaffar Jo'rayev",
    "clientRole": "Kadastr Muhandisi",
    "clientAvatar": "mentor",
    "title": "Mulkdor va Ko'chmas Mulk Kadastr Pasporti (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **PropertyOwner** va **CadastreDeed** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **PropertyOwner** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **PropertyOwner** entitiysi superklassga aylantirilib, undan **PropertyOwnerPremium** va **PropertyOwnerStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud PropertyOwner va CadastreDeed o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'PropertyOwner' superklassiga 'PropertyOwnerPremium' va 'PropertyOwnerStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PropertyOwner",
          "pk": "ownerId",
          "attributes": [
            {
              "name": "ownerId",
              "isPK": true
            },
            {
              "name": "ownerName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "taxPayerCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "CadastreDeed",
          "pk": "deedNo",
          "attributes": [
            {
              "name": "deedNo",
              "isPK": true
            },
            {
              "name": "cadastralZone",
              "isPK": false
            },
            {
              "name": "landAreaSqm",
              "isPK": false
            },
            {
              "name": "registeredDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PropertyOwner",
          "entity2": "CadastreDeed",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "DeededWith"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PropertyOwner",
          "pk": "ownerId",
          "attributes": [
            {
              "name": "ownerId",
              "isPK": true
            },
            {
              "name": "ownerName",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            },
            {
              "name": "taxPayerCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "CadastreDeed",
          "pk": "deedNo",
          "attributes": [
            {
              "name": "deedNo",
              "isPK": true
            },
            {
              "name": "cadastralZone",
              "isPK": false
            },
            {
              "name": "landAreaSqm",
              "isPK": false
            },
            {
              "name": "registeredDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PropertyOwner",
          "entity2": "CadastreDeed",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "DeededWith"
        }
      ],
      "subclasses": {
        "superclass": "PropertyOwner",
        "subs": [
          {
            "name": "PropertyOwnerPremium",
            "attributes": []
          },
          {
            "name": "PropertyOwnerStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 24,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Sardor Saidov",
    "clientRole": "Kassa Texnik Mutaxassisi",
    "clientAvatar": "mentor",
    "title": "Kassa Shoxobchasi va Bank POS Terminali (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **CheckoutLane** va **PosTerminal** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **CheckoutLane** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **CheckoutLane** entitiysi superklassga aylantirilib, undan **CheckoutLanePremium** va **CheckoutLaneStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud CheckoutLane va PosTerminal o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'CheckoutLane' superklassiga 'CheckoutLanePremium' va 'CheckoutLaneStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CheckoutLane",
          "pk": "laneNo",
          "attributes": [
            {
              "name": "laneNo",
              "isPK": true
            },
            {
              "name": "deskCode",
              "isPK": false
            },
            {
              "name": "supervisorName",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        },
        {
          "name": "PosTerminal",
          "pk": "terminalId",
          "attributes": [
            {
              "name": "terminalId",
              "isPK": true
            },
            {
              "name": "ipAddress",
              "isPK": false
            },
            {
              "name": "merchantCode",
              "isPK": false
            },
            {
              "name": "serialNumber",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CheckoutLane",
          "entity2": "PosTerminal",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "EquippedWith"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CheckoutLane",
          "pk": "laneNo",
          "attributes": [
            {
              "name": "laneNo",
              "isPK": true
            },
            {
              "name": "deskCode",
              "isPK": false
            },
            {
              "name": "supervisorName",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        },
        {
          "name": "PosTerminal",
          "pk": "terminalId",
          "attributes": [
            {
              "name": "terminalId",
              "isPK": true
            },
            {
              "name": "ipAddress",
              "isPK": false
            },
            {
              "name": "merchantCode",
              "isPK": false
            },
            {
              "name": "serialNumber",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CheckoutLane",
          "entity2": "PosTerminal",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "EquippedWith"
        }
      ],
      "subclasses": {
        "superclass": "CheckoutLane",
        "subs": [
          {
            "name": "CheckoutLanePremium",
            "attributes": []
          },
          {
            "name": "CheckoutLaneStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 25,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Munira Fayzullayeva",
    "clientRole": "Maktab Mudiri",
    "clientAvatar": "mentor",
    "title": "Maktab O'quvchisi va Shaxsiy Saqlash Shkafchasi (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Pupil** va **SchoolLocker** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Pupil** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Pupil** entitiysi superklassga aylantirilib, undan **PupilPremium** va **PupilStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Pupil va SchoolLocker o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Pupil' superklassiga 'PupilPremium' va 'PupilStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Pupil",
          "pk": "pupilId",
          "attributes": [
            {
              "name": "pupilId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "gradeLevel",
              "isPK": false
            },
            {
              "name": "classRoom",
              "isPK": false
            }
          ]
        },
        {
          "name": "SchoolLocker",
          "pk": "lockerNo",
          "attributes": [
            {
              "name": "lockerNo",
              "isPK": true
            },
            {
              "name": "hallwayWing",
              "isPK": false
            },
            {
              "name": "combinationCode",
              "isPK": false
            },
            {
              "name": "shelfCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Pupil",
          "entity2": "SchoolLocker",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "Allocated"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Pupil",
          "pk": "pupilId",
          "attributes": [
            {
              "name": "pupilId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "gradeLevel",
              "isPK": false
            },
            {
              "name": "classRoom",
              "isPK": false
            }
          ]
        },
        {
          "name": "SchoolLocker",
          "pk": "lockerNo",
          "attributes": [
            {
              "name": "lockerNo",
              "isPK": true
            },
            {
              "name": "hallwayWing",
              "isPK": false
            },
            {
              "name": "combinationCode",
              "isPK": false
            },
            {
              "name": "shelfCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Pupil",
          "entity2": "SchoolLocker",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "Allocated"
        }
      ],
      "subclasses": {
        "superclass": "Pupil",
        "subs": [
          {
            "name": "PupilPremium",
            "attributes": []
          },
          {
            "name": "PupilStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 26,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Oleg Smirnov",
    "clientRole": "Avia Nazorat Inspeksiyasi",
    "clientAvatar": "mentor",
    "title": "Yo'lovchi Samolyoti va Qora Quti Yozuv Uskunasi (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Airplane** va **FlightRecorder** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Airplane** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Airplane** entitiysi superklassga aylantirilib, undan **AirplanePremium** va **AirplaneStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Airplane va FlightRecorder o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Airplane' superklassiga 'AirplanePremium' va 'AirplaneStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Airplane",
          "pk": "airframeNo",
          "attributes": [
            {
              "name": "airframeNo",
              "isPK": true
            },
            {
              "name": "tailNumber",
              "isPK": false
            },
            {
              "name": "modelCode",
              "isPK": false
            },
            {
              "name": "serviceHours",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightRecorder",
          "pk": "recorderId",
          "attributes": [
            {
              "name": "recorderId",
              "isPK": true
            },
            {
              "name": "beaconFrequency",
              "isPK": false
            },
            {
              "name": "memoryCapacityGb",
              "isPK": false
            },
            {
              "name": "batteryExpiry",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airplane",
          "entity2": "FlightRecorder",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "MonitoredBy"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Airplane",
          "pk": "airframeNo",
          "attributes": [
            {
              "name": "airframeNo",
              "isPK": true
            },
            {
              "name": "tailNumber",
              "isPK": false
            },
            {
              "name": "modelCode",
              "isPK": false
            },
            {
              "name": "serviceHours",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightRecorder",
          "pk": "recorderId",
          "attributes": [
            {
              "name": "recorderId",
              "isPK": true
            },
            {
              "name": "beaconFrequency",
              "isPK": false
            },
            {
              "name": "memoryCapacityGb",
              "isPK": false
            },
            {
              "name": "batteryExpiry",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airplane",
          "entity2": "FlightRecorder",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "MonitoredBy"
        }
      ],
      "subclasses": {
        "superclass": "Airplane",
        "subs": [
          {
            "name": "AirplanePremium",
            "attributes": []
          },
          {
            "name": "AirplaneStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 27,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Ibrohim Rustamov",
    "clientRole": "Yer Resurslari Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Fermer Xo'jaligi va Yer Ijara Shartnomasi (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Farm** va **LandLeaseContract** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Farm** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Farm** entitiysi superklassga aylantirilib, undan **FarmPremium** va **FarmStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Farm va LandLeaseContract o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Farm' superklassiga 'FarmPremium' va 'FarmStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Farm",
          "pk": "farmRegNo",
          "attributes": [
            {
              "name": "farmRegNo",
              "isPK": true
            },
            {
              "name": "farmName",
              "isPK": false
            },
            {
              "name": "province",
              "isPK": false
            },
            {
              "name": "cropType",
              "isPK": false
            }
          ]
        },
        {
          "name": "LandLeaseContract",
          "pk": "contractId",
          "attributes": [
            {
              "name": "contractId",
              "isPK": true
            },
            {
              "name": "hectares",
              "isPK": false
            },
            {
              "name": "leaseEndDate",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Farm",
          "entity2": "LandLeaseContract",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "ContractedUnder"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Farm",
          "pk": "farmRegNo",
          "attributes": [
            {
              "name": "farmRegNo",
              "isPK": true
            },
            {
              "name": "farmName",
              "isPK": false
            },
            {
              "name": "province",
              "isPK": false
            },
            {
              "name": "cropType",
              "isPK": false
            }
          ]
        },
        {
          "name": "LandLeaseContract",
          "pk": "contractId",
          "attributes": [
            {
              "name": "contractId",
              "isPK": true
            },
            {
              "name": "hectares",
              "isPK": false
            },
            {
              "name": "leaseEndDate",
              "isPK": false
            },
            {
              "name": "regDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Farm",
          "entity2": "LandLeaseContract",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "ContractedUnder"
        }
      ],
      "subclasses": {
        "superclass": "Farm",
        "subs": [
          {
            "name": "FarmPremium",
            "attributes": []
          },
          {
            "name": "FarmStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 28,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Kamol Boboyev",
    "clientRole": "Protokol Xizmati Rahbari",
    "clientAvatar": "mentor",
    "title": "Diplomatik Elchixona va Favqulodda Muxtor Elchi (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Embassy** va **Ambassador** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Embassy** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Embassy** entitiysi superklassga aylantirilib, undan **EmbassyPremium** va **EmbassyStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Embassy va Ambassador o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Embassy' superklassiga 'EmbassyPremium' va 'EmbassyStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Embassy",
          "pk": "embassyId",
          "attributes": [
            {
              "name": "embassyId",
              "isPK": true
            },
            {
              "name": "hostCountry",
              "isPK": false
            },
            {
              "name": "cityLocation",
              "isPK": false
            },
            {
              "name": "establishedYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Ambassador",
          "pk": "diplomatId",
          "attributes": [
            {
              "name": "diplomatId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "credentialDate",
              "isPK": false
            },
            {
              "name": "diplomaticRank",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Embassy",
          "entity2": "Ambassador",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "RepresentedBy"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Embassy",
          "pk": "embassyId",
          "attributes": [
            {
              "name": "embassyId",
              "isPK": true
            },
            {
              "name": "hostCountry",
              "isPK": false
            },
            {
              "name": "cityLocation",
              "isPK": false
            },
            {
              "name": "establishedYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "Ambassador",
          "pk": "diplomatId",
          "attributes": [
            {
              "name": "diplomatId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "credentialDate",
              "isPK": false
            },
            {
              "name": "diplomaticRank",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Embassy",
          "entity2": "Ambassador",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "RepresentedBy"
        }
      ],
      "subclasses": {
        "superclass": "Embassy",
        "subs": [
          {
            "name": "EmbassyPremium",
            "attributes": []
          },
          {
            "name": "EmbassyStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 29,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Akmal Fayziyev",
    "clientRole": "Bank Inkassatsiya Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Filiali va Asosiy Naqd Pul Seyfi (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **BankBranch** va **MainVault** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **BankBranch** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **BankBranch** entitiysi superklassga aylantirilib, undan **BankBranchPremium** va **BankBranchStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud BankBranch va MainVault o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'BankBranch' superklassiga 'BankBranchPremium' va 'BankBranchStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankBranch",
          "pk": "branchNo",
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "city",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "MainVault",
          "pk": "vaultId",
          "attributes": [
            {
              "name": "vaultId",
              "isPK": true
            },
            {
              "name": "securityGrade",
              "isPK": false
            },
            {
              "name": "capacityKg",
              "isPK": false
            },
            {
              "name": "alarmCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BankBranch",
          "entity2": "MainVault",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "SecuredWith"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankBranch",
          "pk": "branchNo",
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "city",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "MainVault",
          "pk": "vaultId",
          "attributes": [
            {
              "name": "vaultId",
              "isPK": true
            },
            {
              "name": "securityGrade",
              "isPK": false
            },
            {
              "name": "capacityKg",
              "isPK": false
            },
            {
              "name": "alarmCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BankBranch",
          "entity2": "MainVault",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "SecuredWith"
        }
      ],
      "subclasses": {
        "superclass": "BankBranch",
        "subs": [
          {
            "name": "BankBranchPremium",
            "attributes": []
          },
          {
            "name": "BankBranchStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 30,
    "sector": 2,
    "difficulty": "2-Qavat • EER Kengaytirish",
    "clientName": "Dilorom Ismoilova",
    "clientRole": "Antidoping Komissari",
    "clientAvatar": "mentor",
    "title": "Professional Atlet va Biologik Doping Pasporti (EER Bosqichi)",
    "story": "1-haftada o'rnatilgan **Athlete** va **DopingPassport** o'rtasidagi 1..1 munosabat muvaffaqiyatli ishga tushirildi. Endi biznes tahlilchilar **Athlete** xizmat ko'rsatish darajasini ixtisoslashtirishni talab qilmoqda.\n\nPolotnodagi mavjud **Athlete** entitiysi superklassga aylantirilib, undan **AthletePremium** va **AthleteStandard** subklasslari ajratilishi lozim ({Mandatory, Or} cheklovi).\n\nMavjud Athlete va DopingPassport o'rtasidagi 1..1 aloqasi saqlanib qoladi va yangi subklasslar merosxo'rlik ierarxiyasiga qo'shiladi.",
    "instruction": "Mavjud 'Athlete' superklassiga 'AthletePremium' va 'AthleteStandard' subklasslarini {Mandatory, Or} qoidasi bilan joylashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Athlete",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
              "isPK": true
            },
            {
              "name": "athleteName",
              "isPK": false
            },
            {
              "name": "sportDiscipline",
              "isPK": false
            },
            {
              "name": "countryCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "DopingPassport",
          "pk": "passportCode",
          "attributes": [
            {
              "name": "passportCode",
              "isPK": true
            },
            {
              "name": "biologicalProfile",
              "isPK": false
            },
            {
              "name": "lastTestDate",
              "isPK": false
            },
            {
              "name": "labCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Athlete",
          "entity2": "DopingPassport",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "TrackedBy"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Athlete",
          "pk": "licenseId",
          "attributes": [
            {
              "name": "licenseId",
              "isPK": true
            },
            {
              "name": "athleteName",
              "isPK": false
            },
            {
              "name": "sportDiscipline",
              "isPK": false
            },
            {
              "name": "countryCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "DopingPassport",
          "pk": "passportCode",
          "attributes": [
            {
              "name": "passportCode",
              "isPK": true
            },
            {
              "name": "biologicalProfile",
              "isPK": false
            },
            {
              "name": "lastTestDate",
              "isPK": false
            },
            {
              "name": "labCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Athlete",
          "entity2": "DopingPassport",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "TrackedBy"
        }
      ],
      "subclasses": {
        "superclass": "Athlete",
        "subs": [
          {
            "name": "AthletePremium",
            "attributes": []
          },
          {
            "name": "AthleteStandard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 31,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Prof. Dilshod Karimov",
    "clientRole": "Fakultet Dekani",
    "clientAvatar": "mentor",
    "title": "Universitet Kafedrasi va Professor-O'qituvchilar (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Department** va **Lecturer** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **Lecturer** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **Lecturer** entitiysidan ikkita subklass: **SeniorLecturer** va **JuniorLecturer** ajratiladi. Har bir Lecturer qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Department** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'Lecturer' entitiysini superklass qilib, unga 'SeniorLecturer' va 'JuniorLecturer' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Department",
          "pk": "deptCode",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "deptName",
              "isPK": false
            },
            {
              "name": "officeRoom",
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
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "academicRank",
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
          "entity1": "Department",
          "entity2": "Lecturer",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Employs"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Department",
          "pk": "deptCode",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "deptName",
              "isPK": false
            },
            {
              "name": "officeRoom",
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
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "academicRank",
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
          "entity1": "Department",
          "entity2": "Lecturer",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Employs"
        }
      ],
      "subclasses": {
        "superclass": "Lecturer",
        "subs": [
          {
            "name": "SeniorLecturer",
            "attributes": []
          },
          {
            "name": "JuniorLecturer",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 32,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Feruza Mahmudova",
    "clientRole": "Bosh Muharrir",
    "clientAvatar": "mentor",
    "title": "Nashriyot Uyi va Chop Etilgan Kitob Nashrlari (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Publisher** va **BookEdition** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **BookEdition** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **BookEdition** entitiysidan ikkita subklass: **SeniorBookEdition** va **JuniorBookEdition** ajratiladi. Har bir BookEdition qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Publisher** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'BookEdition' entitiysini superklass qilib, unga 'SeniorBookEdition' va 'JuniorBookEdition' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Publisher",
          "pk": "publisherId",
          "attributes": [
            {
              "name": "publisherId",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookEdition",
          "pk": "editionIsbn",
          "attributes": [
            {
              "name": "editionIsbn",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "printRun",
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
          "entity1": "Publisher",
          "entity2": "BookEdition",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Publishes"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Publisher",
          "pk": "publisherId",
          "attributes": [
            {
              "name": "publisherId",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookEdition",
          "pk": "editionIsbn",
          "attributes": [
            {
              "name": "editionIsbn",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "printRun",
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
          "entity1": "Publisher",
          "entity2": "BookEdition",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Publishes"
        }
      ],
      "subclasses": {
        "superclass": "BookEdition",
        "subs": [
          {
            "name": "SeniorBookEdition",
            "attributes": []
          },
          {
            "name": "JuniorBookEdition",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 33,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Ulug'bek Sobirov",
    "clientRole": "Karta Boshqarmasi Rahbari",
    "clientAvatar": "mentor",
    "title": "Bank Mijozi va Unga Biriktirilgan Plastik Kartalar (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Customer** va **PaymentCard** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **PaymentCard** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **PaymentCard** entitiysidan ikkita subklass: **SeniorPaymentCard** va **JuniorPaymentCard** ajratiladi. Har bir PaymentCard qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Customer** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'PaymentCard' entitiysini superklass qilib, unga 'SeniorPaymentCard' va 'JuniorPaymentCard' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
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
              "name": "phone",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            }
          ]
        },
        {
          "name": "PaymentCard",
          "pk": "cardNumber",
          "attributes": [
            {
              "name": "cardNumber",
              "isPK": true
            },
            {
              "name": "cardType",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "cvvHash",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "PaymentCard",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Owns"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
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
              "name": "phone",
              "isPK": false
            },
            {
              "name": "email",
              "isPK": false
            }
          ]
        },
        {
          "name": "PaymentCard",
          "pk": "cardNumber",
          "attributes": [
            {
              "name": "cardNumber",
              "isPK": true
            },
            {
              "name": "cardType",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "cvvHash",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Customer",
          "entity2": "PaymentCard",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Owns"
        }
      ],
      "subclasses": {
        "superclass": "PaymentCard",
        "subs": [
          {
            "name": "SeniorPaymentCard",
            "attributes": []
          },
          {
            "name": "JuniorPaymentCard",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 34,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "Transport Garaji Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Avtobus Saroyi va Shahar Avtobuslari Floti (EER Bosqichi)",
    "story": "1-haftada tuzilgan **BusDepot** va **CityBus** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **CityBus** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **CityBus** entitiysidan ikkita subklass: **SeniorCityBus** va **JuniorCityBus** ajratiladi. Har bir CityBus qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **BusDepot** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'CityBus' entitiysini superklass qilib, unga 'SeniorCityBus' va 'JuniorCityBus' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BusDepot",
          "pk": "depotId",
          "attributes": [
            {
              "name": "depotId",
              "isPK": true
            },
            {
              "name": "depotName",
              "isPK": false
            },
            {
              "name": "garageCapacity",
              "isPK": false
            },
            {
              "name": "cityZone",
              "isPK": false
            }
          ]
        },
        {
          "name": "CityBus",
          "pk": "busRegNo",
          "attributes": [
            {
              "name": "busRegNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "seatCapacity",
              "isPK": false
            },
            {
              "name": "routeNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BusDepot",
          "entity2": "CityBus",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Houses"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BusDepot",
          "pk": "depotId",
          "attributes": [
            {
              "name": "depotId",
              "isPK": true
            },
            {
              "name": "depotName",
              "isPK": false
            },
            {
              "name": "garageCapacity",
              "isPK": false
            },
            {
              "name": "cityZone",
              "isPK": false
            }
          ]
        },
        {
          "name": "CityBus",
          "pk": "busRegNo",
          "attributes": [
            {
              "name": "busRegNo",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "seatCapacity",
              "isPK": false
            },
            {
              "name": "routeNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BusDepot",
          "entity2": "CityBus",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Houses"
        }
      ],
      "subclasses": {
        "superclass": "CityBus",
        "subs": [
          {
            "name": "SeniorCityBus",
            "attributes": []
          },
          {
            "name": "JuniorCityBus",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 35,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Nargiza Odilova",
    "clientRole": "HR Bosh Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Filiali va Unda Ishlovchi Xodimlar (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Branch** va **Staff** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **Staff** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **Staff** entitiysidan ikkita subklass: **SeniorStaff** va **JuniorStaff** ajratiladi. Har bir Staff qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Branch** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'Staff' entitiysini superklass qilib, unga 'SeniorStaff' va 'JuniorStaff' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "branchNo",
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true
            },
            {
              "name": "city",
              "isPK": false
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "Staff",
          "pk": "staffNo",
          "attributes": [
            {
              "name": "staffNo",
              "isPK": true
            },
            {
              "name": "fName",
              "isPK": false
            },
            {
              "name": "lName",
              "isPK": false
            },
            {
              "name": "position",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "branchNo",
          "attributes": [
            {
              "name": "branchNo",
              "isPK": true
            },
            {
              "name": "city",
              "isPK": false
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
            }
          ]
        },
        {
          "name": "Staff",
          "pk": "staffNo",
          "attributes": [
            {
              "name": "staffNo",
              "isPK": true
            },
            {
              "name": "fName",
              "isPK": false
            },
            {
              "name": "lName",
              "isPK": false
            },
            {
              "name": "position",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        }
      ],
      "subclasses": {
        "superclass": "Staff",
        "subs": [
          {
            "name": "SeniorStaff",
            "attributes": []
          },
          {
            "name": "JuniorStaff",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 36,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Shohida Olimova",
    "clientRole": "Bosh Hamshira",
    "clientAvatar": "mentor",
    "title": "Shifoxona Bo'limi va Unga Qarashli Palatalar (EER Bosqichi)",
    "story": "1-haftada tuzilgan **HospitalWard** va **PatientRoom** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **PatientRoom** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **PatientRoom** entitiysidan ikkita subklass: **SeniorPatientRoom** va **JuniorPatientRoom** ajratiladi. Har bir PatientRoom qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **HospitalWard** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'PatientRoom' entitiysini superklass qilib, unga 'SeniorPatientRoom' va 'JuniorPatientRoom' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalWard",
          "pk": "wardId",
          "attributes": [
            {
              "name": "wardId",
              "isPK": true
            },
            {
              "name": "wardName",
              "isPK": false
            },
            {
              "name": "floorLevel",
              "isPK": false
            },
            {
              "name": "nurseStation",
              "isPK": false
            }
          ]
        },
        {
          "name": "PatientRoom",
          "pk": "roomNumber",
          "attributes": [
            {
              "name": "roomNumber",
              "isPK": true
            },
            {
              "name": "bedCount",
              "isPK": false
            },
            {
              "name": "isOxygenEquipped",
              "isPK": false
            },
            {
              "name": "dailyRate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "HospitalWard",
          "entity2": "PatientRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Contains"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalWard",
          "pk": "wardId",
          "attributes": [
            {
              "name": "wardId",
              "isPK": true
            },
            {
              "name": "wardName",
              "isPK": false
            },
            {
              "name": "floorLevel",
              "isPK": false
            },
            {
              "name": "nurseStation",
              "isPK": false
            }
          ]
        },
        {
          "name": "PatientRoom",
          "pk": "roomNumber",
          "attributes": [
            {
              "name": "roomNumber",
              "isPK": true
            },
            {
              "name": "bedCount",
              "isPK": false
            },
            {
              "name": "isOxygenEquipped",
              "isPK": false
            },
            {
              "name": "dailyRate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "HospitalWard",
          "entity2": "PatientRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Contains"
        }
      ],
      "subclasses": {
        "superclass": "PatientRoom",
        "subs": [
          {
            "name": "SeniorPatientRoom",
            "attributes": []
          },
          {
            "name": "JuniorPatientRoom",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 37,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Ravshan Yusupov",
    "clientRole": "Parvozlar Bosh Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Aviakompaniya va Xalqaro Parvoz Reyslari (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Airline** va **FlightSchedule** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **FlightSchedule** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **FlightSchedule** entitiysidan ikkita subklass: **SeniorFlightSchedule** va **JuniorFlightSchedule** ajratiladi. Har bir FlightSchedule qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Airline** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'FlightSchedule' entitiysini superklass qilib, unga 'SeniorFlightSchedule' va 'JuniorFlightSchedule' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Airline",
          "pk": "airlineCode",
          "attributes": [
            {
              "name": "airlineCode",
              "isPK": true
            },
            {
              "name": "airlineName",
              "isPK": false
            },
            {
              "name": "countryOrigin",
              "isPK": false
            },
            {
              "name": "alliance",
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
              "name": "originIata",
              "isPK": false
            },
            {
              "name": "destIata",
              "isPK": false
            },
            {
              "name": "departureTime",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airline",
          "entity2": "FlightSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Airline",
          "pk": "airlineCode",
          "attributes": [
            {
              "name": "airlineCode",
              "isPK": true
            },
            {
              "name": "airlineName",
              "isPK": false
            },
            {
              "name": "countryOrigin",
              "isPK": false
            },
            {
              "name": "alliance",
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
              "name": "originIata",
              "isPK": false
            },
            {
              "name": "destIata",
              "isPK": false
            },
            {
              "name": "departureTime",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Airline",
          "entity2": "FlightSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        }
      ],
      "subclasses": {
        "superclass": "FlightSchedule",
        "subs": [
          {
            "name": "SeniorFlightSchedule",
            "attributes": []
          },
          {
            "name": "JuniorFlightSchedule",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 38,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Zilola Ergasheva",
    "clientRole": "Restoran Administratori",
    "clientAvatar": "mentor",
    "title": "Restoran Stoli va Buyurtma Cheklari (EER Bosqichi)",
    "story": "1-haftada tuzilgan **DiningTable** va **OrderTicket** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **OrderTicket** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **OrderTicket** entitiysidan ikkita subklass: **SeniorOrderTicket** va **JuniorOrderTicket** ajratiladi. Har bir OrderTicket qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **DiningTable** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'OrderTicket' entitiysini superklass qilib, unga 'SeniorOrderTicket' va 'JuniorOrderTicket' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DiningTable",
          "pk": "tableNo",
          "attributes": [
            {
              "name": "tableNo",
              "isPK": true
            },
            {
              "name": "seatingCapacity",
              "isPK": false
            },
            {
              "name": "zoneArea",
              "isPK": false
            },
            {
              "name": "isReserved",
              "isPK": false
            }
          ]
        },
        {
          "name": "OrderTicket",
          "pk": "orderId",
          "attributes": [
            {
              "name": "orderId",
              "isPK": true
            },
            {
              "name": "orderTime",
              "isPK": false
            },
            {
              "name": "totalSum",
              "isPK": false
            },
            {
              "name": "paymentStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DiningTable",
          "entity2": "OrderTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Places"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DiningTable",
          "pk": "tableNo",
          "attributes": [
            {
              "name": "tableNo",
              "isPK": true
            },
            {
              "name": "seatingCapacity",
              "isPK": false
            },
            {
              "name": "zoneArea",
              "isPK": false
            },
            {
              "name": "isReserved",
              "isPK": false
            }
          ]
        },
        {
          "name": "OrderTicket",
          "pk": "orderId",
          "attributes": [
            {
              "name": "orderId",
              "isPK": true
            },
            {
              "name": "orderTime",
              "isPK": false
            },
            {
              "name": "totalSum",
              "isPK": false
            },
            {
              "name": "paymentStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DiningTable",
          "entity2": "OrderTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Places"
        }
      ],
      "subclasses": {
        "superclass": "OrderTicket",
        "subs": [
          {
            "name": "SeniorOrderTicket",
            "attributes": []
          },
          {
            "name": "JuniorOrderTicket",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 39,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Sevara Shokirova",
    "clientRole": "Mehmonxona Qabul Rahbari",
    "clientAvatar": "mentor",
    "title": "Mehmonxona Majmuasi va Xonalar Boshqaruvi (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Hotel** va **Room** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **Room** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **Room** entitiysidan ikkita subklass: **SeniorRoom** va **JuniorRoom** ajratiladi. Har bir Room qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Hotel** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'Room' entitiysini superklass qilib, unga 'SeniorRoom' va 'JuniorRoom' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "pk": "hotelId",
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true
            },
            {
              "name": "hotelName",
              "isPK": false
            },
            {
              "name": "starRating",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "Room",
          "pk": "roomNo",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "type",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "isCleaned",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Hotel",
          "entity2": "Room",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Has"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "pk": "hotelId",
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true
            },
            {
              "name": "hotelName",
              "isPK": false
            },
            {
              "name": "starRating",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "Room",
          "pk": "roomNo",
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true
            },
            {
              "name": "type",
              "isPK": false
            },
            {
              "name": "price",
              "isPK": false
            },
            {
              "name": "isCleaned",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Hotel",
          "entity2": "Room",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Has"
        }
      ],
      "subclasses": {
        "superclass": "Room",
        "subs": [
          {
            "name": "SeniorRoom",
            "attributes": []
          },
          {
            "name": "JuniorRoom",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 40,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Sahna Rejissyori",
    "clientAvatar": "mentor",
    "title": "Teatr Spektakli va Badiiy Rollar Fonotekasi (EER Bosqichi)",
    "story": "1-haftada tuzilgan **TheatrePlay** va **CharacterRole** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **CharacterRole** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **CharacterRole** entitiysidan ikkita subklass: **SeniorCharacterRole** va **JuniorCharacterRole** ajratiladi. Har bir CharacterRole qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **TheatrePlay** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'CharacterRole' entitiysini superklass qilib, unga 'SeniorCharacterRole' va 'JuniorCharacterRole' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TheatrePlay",
          "pk": "playCode",
          "attributes": [
            {
              "name": "playCode",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "authorPlaywright",
              "isPK": false
            },
            {
              "name": "genre",
              "isPK": false
            }
          ]
        },
        {
          "name": "CharacterRole",
          "pk": "roleId",
          "attributes": [
            {
              "name": "roleId",
              "isPK": true
            },
            {
              "name": "characterName",
              "isPK": false
            },
            {
              "name": "importanceTier",
              "isPK": false
            },
            {
              "name": "actCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TheatrePlay",
          "entity2": "CharacterRole",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Features"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TheatrePlay",
          "pk": "playCode",
          "attributes": [
            {
              "name": "playCode",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "authorPlaywright",
              "isPK": false
            },
            {
              "name": "genre",
              "isPK": false
            }
          ]
        },
        {
          "name": "CharacterRole",
          "pk": "roleId",
          "attributes": [
            {
              "name": "roleId",
              "isPK": true
            },
            {
              "name": "characterName",
              "isPK": false
            },
            {
              "name": "importanceTier",
              "isPK": false
            },
            {
              "name": "actCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TheatrePlay",
          "entity2": "CharacterRole",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Features"
        }
      ],
      "subclasses": {
        "superclass": "CharacterRole",
        "subs": [
          {
            "name": "SeniorCharacterRole",
            "attributes": []
          },
          {
            "name": "JuniorCharacterRole",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 41,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Madina Alimova",
    "clientRole": "Bosh Muharrir SMM",
    "clientAvatar": "mentor",
    "title": "Telegram Blog Kanali va Nashr Qilingan Postlar (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Channel** va **ChannelPost** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **ChannelPost** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **ChannelPost** entitiysidan ikkita subklass: **SeniorChannelPost** va **JuniorChannelPost** ajratiladi. Har bir ChannelPost qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Channel** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'ChannelPost' entitiysini superklass qilib, unga 'SeniorChannelPost' va 'JuniorChannelPost' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Channel",
          "pk": "channelHandle",
          "attributes": [
            {
              "name": "channelHandle",
              "isPK": true
            },
            {
              "name": "channelTitle",
              "isPK": false
            },
            {
              "name": "subscribersCount",
              "isPK": false
            },
            {
              "name": "createdDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChannelPost",
          "pk": "postId",
          "attributes": [
            {
              "name": "postId",
              "isPK": true
            },
            {
              "name": "publishedAt",
              "isPK": false
            },
            {
              "name": "viewCount",
              "isPK": false
            },
            {
              "name": "postText",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Channel",
          "entity2": "ChannelPost",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Publishes"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Channel",
          "pk": "channelHandle",
          "attributes": [
            {
              "name": "channelHandle",
              "isPK": true
            },
            {
              "name": "channelTitle",
              "isPK": false
            },
            {
              "name": "subscribersCount",
              "isPK": false
            },
            {
              "name": "createdDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChannelPost",
          "pk": "postId",
          "attributes": [
            {
              "name": "postId",
              "isPK": true
            },
            {
              "name": "publishedAt",
              "isPK": false
            },
            {
              "name": "viewCount",
              "isPK": false
            },
            {
              "name": "postText",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Channel",
          "entity2": "ChannelPost",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Publishes"
        }
      ],
      "subclasses": {
        "superclass": "ChannelPost",
        "subs": [
          {
            "name": "SeniorChannelPost",
            "attributes": []
          },
          {
            "name": "JuniorChannelPost",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 42,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Oybek Mahmudov",
    "clientRole": "Ombor Mudiri",
    "clientAvatar": "mentor",
    "title": "Logistika Omborxonasi va Saqlash Bo'lmalari (EER Bosqichi)",
    "story": "1-haftada tuzilgan **Warehouse** va **StorageBay** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **StorageBay** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **StorageBay** entitiysidan ikkita subklass: **SeniorStorageBay** va **JuniorStorageBay** ajratiladi. Har bir StorageBay qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **Warehouse** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'StorageBay' entitiysini superklass qilib, unga 'SeniorStorageBay' va 'JuniorStorageBay' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "pk": "warehouseCode",
          "attributes": [
            {
              "name": "warehouseCode",
              "isPK": true
            },
            {
              "name": "facilityName",
              "isPK": false
            },
            {
              "name": "totalVolumeM3",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        },
        {
          "name": "StorageBay",
          "pk": "bayBarcode",
          "attributes": [
            {
              "name": "bayBarcode",
              "isPK": true
            },
            {
              "name": "aisleNo",
              "isPK": false
            },
            {
              "name": "maxWeightKg",
              "isPK": false
            },
            {
              "name": "temperatureZone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Warehouse",
          "entity2": "StorageBay",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ConsistsOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "pk": "warehouseCode",
          "attributes": [
            {
              "name": "warehouseCode",
              "isPK": true
            },
            {
              "name": "facilityName",
              "isPK": false
            },
            {
              "name": "totalVolumeM3",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        },
        {
          "name": "StorageBay",
          "pk": "bayBarcode",
          "attributes": [
            {
              "name": "bayBarcode",
              "isPK": true
            },
            {
              "name": "aisleNo",
              "isPK": false
            },
            {
              "name": "maxWeightKg",
              "isPK": false
            },
            {
              "name": "temperatureZone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Warehouse",
          "entity2": "StorageBay",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ConsistsOf"
        }
      ],
      "subclasses": {
        "superclass": "StorageBay",
        "subs": [
          {
            "name": "SeniorStorageBay",
            "attributes": []
          },
          {
            "name": "JuniorStorageBay",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 43,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Botir Tursunov",
    "clientRole": "Shahar Hokimiyati",
    "clientAvatar": "mentor",
    "title": "Viloyat Shahri va Unga Tegishli Tumanlar (EER Bosqichi)",
    "story": "1-haftada tuzilgan **City** va **District** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **District** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **District** entitiysidan ikkita subklass: **SeniorDistrict** va **JuniorDistrict** ajratiladi. Har bir District qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **City** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'District' entitiysini superklass qilib, unga 'SeniorDistrict' va 'JuniorDistrict' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "City",
          "pk": "cityId",
          "attributes": [
            {
              "name": "cityId",
              "isPK": true
            },
            {
              "name": "cityName",
              "isPK": false
            },
            {
              "name": "regionName",
              "isPK": false
            },
            {
              "name": "population",
              "isPK": false
            }
          ]
        },
        {
          "name": "District",
          "pk": "districtId",
          "attributes": [
            {
              "name": "districtId",
              "isPK": true
            },
            {
              "name": "districtName",
              "isPK": false
            },
            {
              "name": "postalIndex",
              "isPK": false
            },
            {
              "name": "areaSqKm",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "City",
          "entity2": "District",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "DividedInto"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "City",
          "pk": "cityId",
          "attributes": [
            {
              "name": "cityId",
              "isPK": true
            },
            {
              "name": "cityName",
              "isPK": false
            },
            {
              "name": "regionName",
              "isPK": false
            },
            {
              "name": "population",
              "isPK": false
            }
          ]
        },
        {
          "name": "District",
          "pk": "districtId",
          "attributes": [
            {
              "name": "districtId",
              "isPK": true
            },
            {
              "name": "districtName",
              "isPK": false
            },
            {
              "name": "postalIndex",
              "isPK": false
            },
            {
              "name": "areaSqKm",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "City",
          "entity2": "District",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "DividedInto"
        }
      ],
      "subclasses": {
        "superclass": "District",
        "subs": [
          {
            "name": "SeniorDistrict",
            "attributes": []
          },
          {
            "name": "JuniorDistrict",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 44,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Gulzoda Salimova",
    "clientRole": "Sug'urta Kompaniyasi Menejeri",
    "clientAvatar": "mentor",
    "title": "Sug'urta Agenti va Rasmiylashtirilgan Sug'urta Polislari (EER Bosqichi)",
    "story": "1-haftada tuzilgan **InsuranceBroker** va **Policy** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **Policy** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **Policy** entitiysidan ikkita subklass: **SeniorPolicy** va **JuniorPolicy** ajratiladi. Har bir Policy qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **InsuranceBroker** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'Policy' entitiysini superklass qilib, unga 'SeniorPolicy' va 'JuniorPolicy' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
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
            },
            {
              "name": "licenseNo",
              "isPK": false
            },
            {
              "name": "commissionRate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Policy",
          "pk": "policyNo",
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "startDate",
              "isPK": false
            },
            {
              "name": "endDate",
              "isPK": false
            },
            {
              "name": "premiumAmount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceBroker",
          "entity2": "Policy",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Underwrites"
        }
      ]
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
            },
            {
              "name": "licenseNo",
              "isPK": false
            },
            {
              "name": "commissionRate",
              "isPK": false
            }
          ]
        },
        {
          "name": "Policy",
          "pk": "policyNo",
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "startDate",
              "isPK": false
            },
            {
              "name": "endDate",
              "isPK": false
            },
            {
              "name": "premiumAmount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceBroker",
          "entity2": "Policy",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Underwrites"
        }
      ],
      "subclasses": {
        "superclass": "Policy",
        "subs": [
          {
            "name": "SeniorPolicy",
            "attributes": []
          },
          {
            "name": "JuniorPolicy",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 45,
    "sector": 3,
    "difficulty": "3-Qavat • EER Kengaytirish",
    "clientName": "Eldor Vohidov",
    "clientRole": "Radio Tarmoq Muhandisi",
    "clientAvatar": "mentor",
    "title": "Mobil Aloqa Minorasi va Antenna Sektorlari (EER Bosqichi)",
    "story": "1-haftada tuzilgan **CellTower** va **AntennaSector** o'rtasidagi 1..* (birga-ko'p) ierarxiya amaliyotga tatbiq etildi. Endi tashkilot **AntennaSector** xodim/birliklarini toifalar bo'yicha ajratishni maqsad qildi.\n\nPolotnodagi **AntennaSector** entitiysidan ikkita subklass: **SeniorAntennaSector** va **JuniorAntennaSector** ajratiladi. Har bir AntennaSector qat'iy ravishda bitta toifaga tegishli bo'lishi shart ({Mandatory, Or}).\n\nOta **CellTower** bilan bo'lgan 1..* bog'lanish o'z kuchida qoladi.",
    "instruction": "'AntennaSector' entitiysini superklass qilib, unga 'SeniorAntennaSector' va 'JuniorAntennaSector' subklasslarini {Mandatory, Or} cheklovi bilan ulang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CellTower",
          "pk": "towerId",
          "attributes": [
            {
              "name": "towerId",
              "isPK": true
            },
            {
              "name": "towerName",
              "isPK": false
            },
            {
              "name": "latitude",
              "isPK": false
            },
            {
              "name": "longitude",
              "isPK": false
            },
            {
              "name": "heightMeters",
              "isPK": false
            }
          ]
        },
        {
          "name": "AntennaSector",
          "pk": "sectorId",
          "attributes": [
            {
              "name": "sectorId",
              "isPK": true
            },
            {
              "name": "azimuthDegree",
              "isPK": false
            },
            {
              "name": "frequencyBandMhz",
              "isPK": false
            },
            {
              "name": "powerWatt",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CellTower",
          "entity2": "AntennaSector",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Radiates"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CellTower",
          "pk": "towerId",
          "attributes": [
            {
              "name": "towerId",
              "isPK": true
            },
            {
              "name": "towerName",
              "isPK": false
            },
            {
              "name": "latitude",
              "isPK": false
            },
            {
              "name": "longitude",
              "isPK": false
            },
            {
              "name": "heightMeters",
              "isPK": false
            }
          ]
        },
        {
          "name": "AntennaSector",
          "pk": "sectorId",
          "attributes": [
            {
              "name": "sectorId",
              "isPK": true
            },
            {
              "name": "azimuthDegree",
              "isPK": false
            },
            {
              "name": "frequencyBandMhz",
              "isPK": false
            },
            {
              "name": "powerWatt",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CellTower",
          "entity2": "AntennaSector",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Radiates"
        }
      ],
      "subclasses": {
        "superclass": "AntennaSector",
        "subs": [
          {
            "name": "SeniorAntennaSector",
            "attributes": []
          },
          {
            "name": "JuniorAntennaSector",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 46,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Dr. Lola Sharipova",
    "clientRole": "Klinika Koordinatori",
    "clientAvatar": "mentor",
    "title": "Shifokor va Bemor Qabuli (Appointment) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Doctor** va **Patient** o'rtasidagi assotsiativ **Appointment** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **Appointment** amali yo shoshilinch **UrgentAppointment**, yoki rejali **StandardAppointment** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'Appointment' assotsiativ entitiyidan 'UrgentAppointment' va 'StandardAppointment' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "pk": "doctorId",
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Patient",
          "pk": "patientId",
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Appointment",
          "pk": "appointId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "appointId",
              "isPK": true
            },
            {
              "name": "appointTime",
              "isPK": false
            },
            {
              "name": "diagnosisNotes",
              "isPK": false
            },
            {
              "name": "cost",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Patient",
          "entity2": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "pk": "doctorId",
          "attributes": [
            {
              "name": "doctorId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Patient",
          "pk": "patientId",
          "attributes": [
            {
              "name": "patientId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Appointment",
          "pk": "appointId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "appointId",
              "isPK": true
            },
            {
              "name": "appointTime",
              "isPK": false
            },
            {
              "name": "diagnosisNotes",
              "isPK": false
            },
            {
              "name": "cost",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Patient",
          "entity2": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "Appointment",
        "subs": [
          {
            "name": "UrgentAppointment",
            "attributes": []
          },
          {
            "name": "StandardAppointment",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 47,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Jasur Qobilov",
    "clientRole": "Akademik Bo'lim Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Talaba va Fanlarga Ro'yxatdan O'tish (Enrollment) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Student** va **Course** o'rtasidagi assotsiativ **Enrollment** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **Enrollment** amali yo shoshilinch **UrgentEnrollment**, yoki rejali **StandardEnrollment** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'Enrollment' assotsiativ entitiyidan 'UrgentEnrollment' va 'StandardEnrollment' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "pk": "studentId",
          "attributes": [
            {
              "name": "studentId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Course",
          "pk": "courseCode",
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "Enrollment",
          "pk": "enrollmentId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "enrollmentId",
              "isPK": true
            },
            {
              "name": "semester",
              "isPK": false
            },
            {
              "name": "gradeLetter",
              "isPK": false
            },
            {
              "name": "attendanceScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Course",
          "entity2": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
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
            }
          ]
        },
        {
          "name": "Course",
          "pk": "courseCode",
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "Enrollment",
          "pk": "enrollmentId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "enrollmentId",
              "isPK": true
            },
            {
              "name": "semester",
              "isPK": false
            },
            {
              "name": "gradeLetter",
              "isPK": false
            },
            {
              "name": "attendanceScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Student",
          "entity2": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Course",
          "entity2": "Enrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "Enrollment",
        "subs": [
          {
            "name": "UrgentEnrollment",
            "attributes": []
          },
          {
            "name": "StandardEnrollment",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 48,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Gulbahor Karimova",
    "clientRole": "Adabiy Agent",
    "clientAvatar": "mentor",
    "title": "Muallif va Kitob Hammuallifligi (Authorship) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Author** va **Book** o'rtasidagi assotsiativ **Authorship** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **Authorship** amali yo shoshilinch **UrgentAuthorship**, yoki rejali **StandardAuthorship** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'Authorship' assotsiativ entitiyidan 'UrgentAuthorship' va 'StandardAuthorship' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Author",
          "pk": "authorId",
          "attributes": [
            {
              "name": "authorId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Book",
          "pk": "isbn",
          "attributes": [
            {
              "name": "isbn",
              "isPK": true
            }
          ]
        },
        {
          "name": "Authorship",
          "pk": "authorshipId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "authorshipId",
              "isPK": true
            },
            {
              "name": "royaltySharePercent",
              "isPK": false
            },
            {
              "name": "contributionChapter",
              "isPK": false
            },
            {
              "name": "contractSignDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Author",
          "entity2": "Authorship",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Book",
          "entity2": "Authorship",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Author",
          "pk": "authorId",
          "attributes": [
            {
              "name": "authorId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Book",
          "pk": "isbn",
          "attributes": [
            {
              "name": "isbn",
              "isPK": true
            }
          ]
        },
        {
          "name": "Authorship",
          "pk": "authorshipId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "authorshipId",
              "isPK": true
            },
            {
              "name": "royaltySharePercent",
              "isPK": false
            },
            {
              "name": "contributionChapter",
              "isPK": false
            },
            {
              "name": "contractSignDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Author",
          "entity2": "Authorship",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Book",
          "entity2": "Authorship",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "Authorship",
        "subs": [
          {
            "name": "UrgentAuthorship",
            "attributes": []
          },
          {
            "name": "StandardAuthorship",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 49,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Sardor Ahmedov",
    "clientRole": "Savdo Tahlilchisi",
    "clientAvatar": "mentor",
    "title": "Xarid Buyurtmasi va Tovar Tarkibi (OrderItem) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Order** va **Product** o'rtasidagi assotsiativ **OrderItem** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **OrderItem** amali yo shoshilinch **UrgentOrderItem**, yoki rejali **StandardOrderItem** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'OrderItem' assotsiativ entitiyidan 'UrgentOrderItem' va 'StandardOrderItem' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Order",
          "pk": "orderId",
          "attributes": [
            {
              "name": "orderId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Product",
          "pk": "sku",
          "attributes": [
            {
              "name": "sku",
              "isPK": true
            }
          ]
        },
        {
          "name": "OrderItem",
          "pk": "itemId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "itemId",
              "isPK": true
            },
            {
              "name": "quantity",
              "isPK": false
            },
            {
              "name": "appliedDiscount",
              "isPK": false
            },
            {
              "name": "lineTotal",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Order",
          "entity2": "OrderItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Product",
          "entity2": "OrderItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Order",
          "pk": "orderId",
          "attributes": [
            {
              "name": "orderId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Product",
          "pk": "sku",
          "attributes": [
            {
              "name": "sku",
              "isPK": true
            }
          ]
        },
        {
          "name": "OrderItem",
          "pk": "itemId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "itemId",
              "isPK": true
            },
            {
              "name": "quantity",
              "isPK": false
            },
            {
              "name": "appliedDiscount",
              "isPK": false
            },
            {
              "name": "lineTotal",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Order",
          "entity2": "OrderItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Product",
          "entity2": "OrderItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "OrderItem",
        "subs": [
          {
            "name": "UrgentOrderItem",
            "attributes": []
          },
          {
            "name": "StandardOrderItem",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 50,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Behzod Rahimov",
    "clientRole": "Scrum Master",
    "clientAvatar": "mentor",
    "title": "Dasturchi va Dasturiy Loyihalar (ProjectAssignment) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Developer** va **Project** o'rtasidagi assotsiativ **ProjectAssignment** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **ProjectAssignment** amali yo shoshilinch **UrgentProjectAssignment**, yoki rejali **StandardProjectAssignment** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'ProjectAssignment' assotsiativ entitiyidan 'UrgentProjectAssignment' va 'StandardProjectAssignment' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Developer",
          "pk": "devId",
          "attributes": [
            {
              "name": "devId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Project",
          "pk": "projectCode",
          "attributes": [
            {
              "name": "projectCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "ProjectAssignment",
          "pk": "assignId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "assignId",
              "isPK": true
            },
            {
              "name": "assignedRole",
              "isPK": false
            },
            {
              "name": "hoursPerWeek",
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
          "entity1": "Developer",
          "entity2": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Project",
          "entity2": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Developer",
          "pk": "devId",
          "attributes": [
            {
              "name": "devId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Project",
          "pk": "projectCode",
          "attributes": [
            {
              "name": "projectCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "ProjectAssignment",
          "pk": "assignId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "assignId",
              "isPK": true
            },
            {
              "name": "assignedRole",
              "isPK": false
            },
            {
              "name": "hoursPerWeek",
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
          "entity1": "Developer",
          "entity2": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Project",
          "entity2": "ProjectAssignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "ProjectAssignment",
        "subs": [
          {
            "name": "UrgentProjectAssignment",
            "attributes": []
          },
          {
            "name": "StandardProjectAssignment",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  }
];
