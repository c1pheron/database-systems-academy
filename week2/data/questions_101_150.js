var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Bobur Alimov",
    "clientRole": "Prokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Filmlar: FeatureFilm va DocumentaryFilm (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Movie** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Kino Asarlari amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Movie** superklassidan ikkita maxsus subklass ajratiladi: **FeatureFilm** (`boxOfficeMillions`, `aspectRatio`) va **DocumentaryFilm** (`historicalTopic`, `narratorName`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit movieId ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Dr. Umida Saidova",
    "clientRole": "Bosh Nazoratchi",
    "clientAvatar": "mentor",
    "title": "Dorilar: PrescriptionDrug va OtcDrug (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Medicine** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Farmatsevtika Qonunchiligi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Medicine** superklassidan ikkita maxsus subklass ajratiladi: **PrescriptionDrug** (`controlledSchedule`, `doctorReq`) va **OtcDrug** (`flavor`, `ageLimitYears`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit barcode ni meros qilib oladi.",
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
              "name": "expDate",
              "isPK": false
            }
          ]
        }
      ],
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
      },
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
              "name": "expDate",
              "isPK": false
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Rustam Qobilov",
    "clientRole": "Avtopark Texnik Rahbari",
    "clientAvatar": "mentor",
    "title": "Furalar: RefrigeratedTruck va FlatbedTruck (EER Bosqichi)",
    "story": "1-haftada yaratilgan **CargoTruck** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Magistral Yuk Floti amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **CargoTruck** superklassidan ikkita maxsus subklass ajratiladi: **RefrigeratedTruck** (`minTempCelsius`, `compressorPower`) va **FlatbedTruck** (`bedLengthMeters`, `maxAxleWeight`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit plateNo ni meros qilib oladi.",
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
              "name": "mileageKm",
              "isPK": false
            },
            {
              "name": "fuelType",
              "isPK": false
            }
          ]
        }
      ],
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
      },
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
              "name": "mileageKm",
              "isPK": false
            },
            {
              "name": "fuelType",
              "isPK": false
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Dilnoza Vohidova",
    "clientRole": "Klub Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Klub A'zolari: VipMember va RegularMember (EER Bosqichi)",
    "story": "1-haftada yaratilgan **ClubMember** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Fitnes Klub Ma'muriyati amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **ClubMember** superklassidan ikkita maxsus subklass ajratiladi: **VipMember** (`personalTrainerId`, `spaAccessLevel`) va **RegularMember** (`lockerAssigned`, `timeSlot`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit memberCardNo ni meros qilib oladi.",
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
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
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
      },
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
              "name": "phone",
              "isPK": false
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Jamshid Mahmudov",
    "clientRole": "Stansiya Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Invertorlar: CentralInverter va MicroInverter (EER Bosqichi)",
    "story": "1-haftada yaratilgan **SolarInverter** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Quyosh Podstansiyasi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **SolarInverter** superklassidan ikkita maxsus subklass ajratiladi: **CentralInverter** (`transformerRatingKva`, `coolingSystem`) va **MicroInverter** (`mpptChannels`, `efficiencyRating`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit serialNo ni meros qilib oladi.",
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
              "name": "efficiency",
              "isPK": false
            }
          ]
        }
      ],
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
      },
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
              "name": "efficiency",
              "isPK": false
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Prof. Anvar Hakimov",
    "clientRole": "Ilmiy Kadrlar Bo'limi",
    "clientAvatar": "mentor",
    "title": "Akademik Xodimlar: Instructor va Researcher (Overlapping) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **UniversityStaff** ning ustma-ust tushuvchi **Instructor** va **Researcher** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'UniversityStaff' superklassining 'Instructor' va 'Researcher' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "UniversityStaff",
        "subs": [
          {
            "name": "Instructor",
            "attributes": [
              {
                "name": "teachingHoursPerWeek",
                "isPK": false
              },
              {
                "name": "evalScore",
                "isPK": false
              }
            ]
          },
          {
            "name": "Researcher",
            "attributes": [
              {
                "name": "grantFundingUsd",
                "isPK": false
              },
              {
                "name": "hIndex",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "UniversityStaff",
        "subs": [
          {
            "name": "Instructor",
            "attributes": [
              {
                "name": "teachingHoursPerWeek",
                "isPK": false
              },
              {
                "name": "evalScore",
                "isPK": false
              }
            ]
          },
          {
            "name": "Researcher",
            "attributes": [
              {
                "name": "grantFundingUsd",
                "isPK": false
              },
              {
                "name": "hIndex",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Gulnora Sobirova",
    "clientRole": "Chakana Xizmatlar Direktori",
    "clientAvatar": "mentor",
    "title": "Bank Mijozlari: Depositor va Borrower (Overlapping) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **BankClient** ning ustma-ust tushuvchi **Depositor** va **Borrower** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'BankClient' superklassining 'Depositor' va 'Borrower' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "BankClient",
        "subs": [
          {
            "name": "Depositor",
            "attributes": [
              {
                "name": "depositBalance",
                "isPK": false
              },
              {
                "name": "termMonths",
                "isPK": false
              }
            ]
          },
          {
            "name": "Borrower",
            "attributes": [
              {
                "name": "loanAmount",
                "isPK": false
              },
              {
                "name": "creditRating",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "BankClient",
        "subs": [
          {
            "name": "Depositor",
            "attributes": [
              {
                "name": "depositBalance",
                "isPK": false
              },
              {
                "name": "termMonths",
                "isPK": false
              }
            ]
          },
          {
            "name": "Borrower",
            "attributes": [
              {
                "name": "loanAmount",
                "isPK": false
              },
              {
                "name": "creditRating",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Farrux Olimov",
    "clientRole": "CISO Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Tizim Foydalanuvchilari: SecurityAdmin va SystemDev (EER Bosqichi)",
    "story": "1-haftada yaratilgan **SystemUser** ning ustma-ust tushuvchi **SecurityAdmin** va **SystemDev** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'SystemUser' superklassining 'SecurityAdmin' va 'SystemDev' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "SystemUser",
        "subs": [
          {
            "name": "SecurityAdmin",
            "attributes": [
              {
                "name": "clearanceLevel",
                "isPK": false
              },
              {
                "name": "incidentAlertEmail",
                "isPK": false
              }
            ]
          },
          {
            "name": "SystemDev",
            "attributes": [
              {
                "name": "gitBranchPermission",
                "isPK": false
              },
              {
                "name": "ideEnvConfig",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "SystemUser",
        "subs": [
          {
            "name": "SecurityAdmin",
            "attributes": [
              {
                "name": "clearanceLevel",
                "isPK": false
              },
              {
                "name": "incidentAlertEmail",
                "isPK": false
              }
            ]
          },
          {
            "name": "SystemDev",
            "attributes": [
              {
                "name": "gitBranchPermission",
                "isPK": false
              },
              {
                "name": "ideEnvConfig",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Prof. Dilnoza Rahimova",
    "clientRole": "Dastur Qo'mitasi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Sammit Qatnashchilari: KeynoteSpeaker va Reviewer (EER Bosqichi)",
    "story": "1-haftada yaratilgan **ConferenceAttendee** ning ustma-ust tushuvchi **KeynoteSpeaker** va **CommitteeReviewer** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'ConferenceAttendee' superklassining 'KeynoteSpeaker' va 'CommitteeReviewer' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "ConferenceAttendee",
        "subs": [
          {
            "name": "KeynoteSpeaker",
            "attributes": [
              {
                "name": "lectureTopic",
                "isPK": false
              },
              {
                "name": "honorariumSum",
                "isPK": false
              }
            ]
          },
          {
            "name": "CommitteeReviewer",
            "attributes": [
              {
                "name": "paperQuota",
                "isPK": false
              },
              {
                "name": "assignedTrack",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "ConferenceAttendee",
        "subs": [
          {
            "name": "KeynoteSpeaker",
            "attributes": [
              {
                "name": "lectureTopic",
                "isPK": false
              },
              {
                "name": "honorariumSum",
                "isPK": false
              }
            ]
          },
          {
            "name": "CommitteeReviewer",
            "attributes": [
              {
                "name": "paperQuota",
                "isPK": false
              },
              {
                "name": "assignedTrack",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Sport Direktori",
    "clientAvatar": "mentor",
    "title": "Sportchilar: LeaguePlayer va TeamCoach (EER Bosqichi)",
    "story": "1-haftada yaratilgan **AthleteMember** ning ustma-ust tushuvchi **LeaguePlayer** va **TeamCoach** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'AthleteMember' superklassining 'LeaguePlayer' va 'TeamCoach' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "AthleteMember",
        "subs": [
          {
            "name": "LeaguePlayer",
            "attributes": [
              {
                "name": "jerseyNumber",
                "isPK": false
              },
              {
                "name": "matchesPlayed",
                "isPK": false
              }
            ]
          },
          {
            "name": "TeamCoach",
            "attributes": [
              {
                "name": "coachingBadge",
                "isPK": false
              },
              {
                "name": "winLossRatio",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "AthleteMember",
        "subs": [
          {
            "name": "LeaguePlayer",
            "attributes": [
              {
                "name": "jerseyNumber",
                "isPK": false
              },
              {
                "name": "matchesPlayed",
                "isPK": false
              }
            ]
          },
          {
            "name": "TeamCoach",
            "attributes": [
              {
                "name": "coachingBadge",
                "isPK": false
              },
              {
                "name": "winLossRatio",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Kapitan Vladimir Kim",
    "clientRole": "Parvozlar Xavfsizligi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Parvoz Ekipaji: CommercialPilot va SafetyInspector (EER Bosqichi)",
    "story": "1-haftada yaratilgan **CrewMember** ning ustma-ust tushuvchi **CommercialPilot** va **SafetyInspector** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'CrewMember' superklassining 'CommercialPilot' va 'SafetyInspector' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "CrewMember",
        "subs": [
          {
            "name": "CommercialPilot",
            "attributes": [
              {
                "name": "typeRatingAircraft",
                "isPK": false
              },
              {
                "name": "coPilotLicenseNo",
                "isPK": false
              }
            ]
          },
          {
            "name": "SafetyInspector",
            "attributes": [
              {
                "name": "safetyAuditCert",
                "isPK": false
              },
              {
                "name": "inspectionCount",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "CrewMember",
        "subs": [
          {
            "name": "CommercialPilot",
            "attributes": [
              {
                "name": "typeRatingAircraft",
                "isPK": false
              },
              {
                "name": "coPilotLicenseNo",
                "isPK": false
              }
            ]
          },
          {
            "name": "SafetyInspector",
            "attributes": [
              {
                "name": "safetyAuditCert",
                "isPK": false
              },
              {
                "name": "inspectionCount",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Sherzod Aliyev",
    "clientRole": "CRM Bosh Menejeri",
    "clientAvatar": "mentor",
    "title": "Avtosalon Mijozlari: VehicleBuyer va ServiceClient (EER Bosqichi)",
    "story": "1-haftada yaratilgan **DealershipClient** ning ustma-ust tushuvchi **VehicleBuyer** va **ServiceClient** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'DealershipClient' superklassining 'VehicleBuyer' va 'ServiceClient' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "DealershipClient",
        "subs": [
          {
            "name": "VehicleBuyer",
            "attributes": [
              {
                "name": "purchaseContractNo",
                "isPK": false
              },
              {
                "name": "purchasedVin",
                "isPK": false
              }
            ]
          },
          {
            "name": "ServiceClient",
            "attributes": [
              {
                "name": "serviceHistoryCode",
                "isPK": false
              },
              {
                "name": "discountLevelPercent",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "DealershipClient",
        "subs": [
          {
            "name": "VehicleBuyer",
            "attributes": [
              {
                "name": "purchaseContractNo",
                "isPK": false
              },
              {
                "name": "purchasedVin",
                "isPK": false
              }
            ]
          },
          {
            "name": "ServiceClient",
            "attributes": [
              {
                "name": "serviceHistoryCode",
                "isPK": false
              },
              {
                "name": "discountLevelPercent",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Mansur Karimov",
    "clientRole": "Badiiy Rahbar",
    "clientAvatar": "mentor",
    "title": "Teatr Ijodkorlari: StageActor va PlayDirector (EER Bosqichi)",
    "story": "1-haftada yaratilgan **TheatreArtist** ning ustma-ust tushuvchi **StageActor** va **PlayDirector** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'TheatreArtist' superklassining 'StageActor' va 'PlayDirector' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "TheatreArtist",
        "subs": [
          {
            "name": "StageActor",
            "attributes": [
              {
                "name": "actingRoleType",
                "isPK": false
              },
              {
                "name": "vocalRange",
                "isPK": false
              }
            ]
          },
          {
            "name": "PlayDirector",
            "attributes": [
              {
                "name": "directingPortfolio",
                "isPK": false
              },
              {
                "name": "repertoireCategory",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "TheatreArtist",
        "subs": [
          {
            "name": "StageActor",
            "attributes": [
              {
                "name": "actingRoleType",
                "isPK": false
              },
              {
                "name": "vocalRange",
                "isPK": false
              }
            ]
          },
          {
            "name": "PlayDirector",
            "attributes": [
              {
                "name": "directingPortfolio",
                "isPK": false
              },
              {
                "name": "repertoireCategory",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Dr. Lola Sobirova",
    "clientRole": "Klinik Tadqiqotlar Mudiri",
    "clientAvatar": "mentor",
    "title": "Tibbiyot Xodimlari: Clinician va ClinicalTrialInvestigator (EER Bosqichi)",
    "story": "1-haftada yaratilgan **MedicalStaff** ning ustma-ust tushuvchi **Clinician** va **ClinicalTrialInvestigator** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'MedicalStaff' superklassining 'Clinician' va 'ClinicalTrialInvestigator' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "MedicalStaff",
        "subs": [
          {
            "name": "Clinician",
            "attributes": [
              {
                "name": "dailyPatientQuota",
                "isPK": false
              },
              {
                "name": "wardRoomCode",
                "isPK": false
              }
            ]
          },
          {
            "name": "ClinicalTrialInvestigator",
            "attributes": [
              {
                "name": "clinicalProtocolCode",
                "isPK": false
              },
              {
                "name": "trialGrantNo",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "MedicalStaff",
        "subs": [
          {
            "name": "Clinician",
            "attributes": [
              {
                "name": "dailyPatientQuota",
                "isPK": false
              },
              {
                "name": "wardRoomCode",
                "isPK": false
              }
            ]
          },
          {
            "name": "ClinicalTrialInvestigator",
            "attributes": [
              {
                "name": "clinicalProtocolCode",
                "isPK": false
              },
              {
                "name": "trialGrantNo",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Zilola Mahmudova",
    "clientRole": "Ijodiy Direktor",
    "clientAvatar": "mentor",
    "title": "Media Ijodkorlari: VideoPresenter va AudioPodcaster (EER Bosqichi)",
    "story": "1-haftada yaratilgan **ContentCreator** ning ustma-ust tushuvchi **VideoPresenter** va **AudioPodcaster** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'ContentCreator' superklassining 'VideoPresenter' va 'AudioPodcaster' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "ContentCreator",
        "subs": [
          {
            "name": "VideoPresenter",
            "attributes": [
              {
                "name": "screenLanguage",
                "isPK": false
              },
              {
                "name": "videoStudioCode",
                "isPK": false
              }
            ]
          },
          {
            "name": "AudioPodcaster",
            "attributes": [
              {
                "name": "podcastFeedRss",
                "isPK": false
              },
              {
                "name": "audioEpisodeCount",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "ContentCreator",
        "subs": [
          {
            "name": "VideoPresenter",
            "attributes": [
              {
                "name": "screenLanguage",
                "isPK": false
              },
              {
                "name": "videoStudioCode",
                "isPK": false
              }
            ]
          },
          {
            "name": "AudioPodcaster",
            "attributes": [
              {
                "name": "podcastFeedRss",
                "isPK": false
              },
              {
                "name": "audioEpisodeCount",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Alisher Yusupov",
    "clientRole": "Flot Menejeri",
    "clientAvatar": "mentor",
    "title": "Haydovchilar: ExpressCourier va LongHaulDriver (EER Bosqichi)",
    "story": "1-haftada yaratilgan **FleetDriver** ning ustma-ust tushuvchi **ExpressCourier** va **LongHaulDriver** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'FleetDriver' superklassining 'ExpressCourier' va 'LongHaulDriver' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "FleetDriver",
        "subs": [
          {
            "name": "ExpressCourier",
            "attributes": [
              {
                "name": "cityZoneCode",
                "isPK": false
              },
              {
                "name": "deliveriesPerShift",
                "isPK": false
              }
            ]
          },
          {
            "name": "LongHaulDriver",
            "attributes": [
              {
                "name": "tirCarnetNo",
                "isPK": false
              },
              {
                "name": "heavyVehiclePermitYear",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "FleetDriver",
        "subs": [
          {
            "name": "ExpressCourier",
            "attributes": [
              {
                "name": "cityZoneCode",
                "isPK": false
              },
              {
                "name": "deliveriesPerShift",
                "isPK": false
              }
            ]
          },
          {
            "name": "LongHaulDriver",
            "attributes": [
              {
                "name": "tirCarnetNo",
                "isPK": false
              },
              {
                "name": "heavyVehiclePermitYear",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Shavkat Saidov",
    "clientRole": "HR Menejeri",
    "clientAvatar": "mentor",
    "title": "Restoran Xizmatchilari: ChiefBartender va SommelierExpert (EER Bosqichi)",
    "story": "1-haftada yaratilgan **RestaurantStaff** ning ustma-ust tushuvchi **ChiefBartender** va **SommelierExpert** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'RestaurantStaff' superklassining 'ChiefBartender' va 'SommelierExpert' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "RestaurantStaff",
        "subs": [
          {
            "name": "ChiefBartender",
            "attributes": [
              {
                "name": "mixologyCertLevel",
                "isPK": false
              },
              {
                "name": "barStationCode",
                "isPK": false
              }
            ]
          },
          {
            "name": "SommelierExpert",
            "attributes": [
              {
                "name": "sommelierDiplomaNo",
                "isPK": false
              },
              {
                "name": "cellarMasterPermit",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "RestaurantStaff",
        "subs": [
          {
            "name": "ChiefBartender",
            "attributes": [
              {
                "name": "mixologyCertLevel",
                "isPK": false
              },
              {
                "name": "barStationCode",
                "isPK": false
              }
            ]
          },
          {
            "name": "SommelierExpert",
            "attributes": [
              {
                "name": "sommelierDiplomaNo",
                "isPK": false
              },
              {
                "name": "cellarMasterPermit",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Kamola Rustamova",
    "clientRole": "Rieltorlar Uyushmasi",
    "clientAvatar": "mentor",
    "title": "Mulk Bozorida: PropertyVendor va PropertyAcquirer (EER Bosqichi)",
    "story": "1-haftada yaratilgan **RealEstateCustomer** ning ustma-ust tushuvchi **PropertyVendor** va **PropertyAcquirer** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'RealEstateCustomer' superklassining 'PropertyVendor' va 'PropertyAcquirer' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "RealEstateCustomer",
        "subs": [
          {
            "name": "PropertyVendor",
            "attributes": [
              {
                "name": "exclusiveListingCode",
                "isPK": false
              },
              {
                "name": "saleAskingPrice",
                "isPK": false
              }
            ]
          },
          {
            "name": "PropertyAcquirer",
            "attributes": [
              {
                "name": "maxInvestmentBudget",
                "isPK": false
              },
              {
                "name": "desiredPropertyType",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "RealEstateCustomer",
        "subs": [
          {
            "name": "PropertyVendor",
            "attributes": [
              {
                "name": "exclusiveListingCode",
                "isPK": false
              },
              {
                "name": "saleAskingPrice",
                "isPK": false
              }
            ]
          },
          {
            "name": "PropertyAcquirer",
            "attributes": [
              {
                "name": "maxInvestmentBudget",
                "isPK": false
              },
              {
                "name": "desiredPropertyType",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Jaloliddin Qodirov",
    "clientRole": "Hamjamiyat Menejeri",
    "clientAvatar": "mentor",
    "title": "Platforma Foydalanuvchilari: ActiveLearner va TeachingMentor (EER Bosqichi)",
    "story": "1-haftada yaratilgan **PlatformUser** ning ustma-ust tushuvchi **ActiveLearner** va **TeachingMentor** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'PlatformUser' superklassining 'ActiveLearner' va 'TeachingMentor' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "PlatformUser",
        "subs": [
          {
            "name": "ActiveLearner",
            "attributes": [
              {
                "name": "enrolledCoursesCount",
                "isPK": false
              },
              {
                "name": "courseCertificatesTotal",
                "isPK": false
              }
            ]
          },
          {
            "name": "TeachingMentor",
            "attributes": [
              {
                "name": "mentorHourlyFee",
                "isPK": false
              },
              {
                "name": "menteeSessionCount",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "PlatformUser",
        "subs": [
          {
            "name": "ActiveLearner",
            "attributes": [
              {
                "name": "enrolledCoursesCount",
                "isPK": false
              },
              {
                "name": "courseCertificatesTotal",
                "isPK": false
              }
            ]
          },
          {
            "name": "TeachingMentor",
            "attributes": [
              {
                "name": "mentorHourlyFee",
                "isPK": false
              },
              {
                "name": "menteeSessionCount",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "8-Qavat • EER Kengaytirish",
    "clientName": "Bahodir Olimov",
    "clientRole": "Tijorat Direktori",
    "clientAvatar": "mentor",
    "title": "Savdo Hamkorlari: RawMaterialSupplier va WholesaleDistributor (EER Bosqichi)",
    "story": "1-haftada yaratilgan **TradingEnterprise** ning ustma-ust tushuvchi **RawMaterialSupplier** va **WholesaleDistributor** subklasslari tizimga muvaffaqiyatli kiritildi.\n\nEndi biznes talablari ushbu subklasslar uchun qo'shimcha maxsus atributlarni kiritish va model yaxlitligini tekshirishni talab etadi.",
    "instruction": "'TradingEnterprise' superklassining 'RawMaterialSupplier' va 'WholesaleDistributor' subklasslari uchun EER yaxlitlik cheklovlarini to'liq tasdiqlang.",
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
      "subclasses": {
        "superclass": "TradingEnterprise",
        "subs": [
          {
            "name": "RawMaterialSupplier",
            "attributes": [
              {
                "name": "supplyCatalogRef",
                "isPK": false
              },
              {
                "name": "isoQualityCert",
                "isPK": false
              }
            ]
          },
          {
            "name": "WholesaleDistributor",
            "attributes": [
              {
                "name": "salesTerritoryRegion",
                "isPK": false
              },
              {
                "name": "creditLineLimit",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
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
      "subclasses": {
        "superclass": "TradingEnterprise",
        "subs": [
          {
            "name": "RawMaterialSupplier",
            "attributes": [
              {
                "name": "supplyCatalogRef",
                "isPK": false
              },
              {
                "name": "isoQualityCert",
                "isPK": false
              }
            ]
          },
          {
            "name": "WholesaleDistributor",
            "attributes": [
              {
                "name": "salesTerritoryRegion",
                "isPK": false
              },
              {
                "name": "creditLineLimit",
                "isPK": false
              }
            ]
          }
        ],
        "constraint": "{Optional, And}"
      },
      "relationships": []
    }
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Ziyoda Karimova",
    "clientRole": "Davlat Notariusi",
    "clientAvatar": "mentor",
    "title": "Mulk Egaligi: Owner Kategoriyasi (Person ∪ Bank ∪ Company) (EER Bosqichi)",
    "story": "1-haftadagi **Person**, **Bank** va **Company** entitiylari asosida ularning barchasini birlashtiruvchi **PropertyOwner** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'PropertyOwner' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "phone",
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
              "name": "bankName",
              "isPK": false
            },
            {
              "name": "licenseNo",
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
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "phone",
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
              "name": "bankName",
              "isPK": false
            },
            {
              "name": "licenseNo",
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
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "address",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Mayor Akmal Vohidov",
    "clientRole": "DYXX Ro'yxatdan O'tkazish Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Avtotransport Egasi: VehicleOwner Kategoriyasi (Citizen ∪ LeasingFirm ∪ StateAgency) (EER Bosqichi)",
    "story": "1-haftadagi **PrivateCitizen**, **LeasingFirm** va **StateAgency** entitiylari asosida ularning barchasini birlashtiruvchi **VehicleOwner** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'VehicleOwner' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "citizenName",
              "isPK": false
            },
            {
              "name": "phone",
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
              "name": "firmTitle",
              "isPK": false
            },
            {
              "name": "licenseDate",
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
              "name": "agencyTitle",
              "isPK": false
            },
            {
              "name": "ministryCode",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "citizenName",
              "isPK": false
            },
            {
              "name": "phone",
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
              "name": "firmTitle",
              "isPK": false
            },
            {
              "name": "licenseDate",
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
              "name": "agencyTitle",
              "isPK": false
            },
            {
              "name": "ministryCode",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Sardor Salimov",
    "clientRole": "G'aznachilik Boshlig'i",
    "clientAvatar": "mentor",
    "title": "To'lov Qabul Qiluvchi: PayeeEntity Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **FreelanceContractor**, **UtilityProvider** va **TaxAuthority** entitiylari asosida ularning barchasini birlashtiruvchi **PayeeEntity** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'PayeeEntity' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "freelancerName",
              "isPK": false
            },
            {
              "name": "serviceCategory",
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
              "name": "providerName",
              "isPK": false
            },
            {
              "name": "accountIban",
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
              "name": "treasuryCode",
              "isPK": false
            },
            {
              "name": "regionName",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "freelancerName",
              "isPK": false
            },
            {
              "name": "serviceCategory",
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
              "name": "providerName",
              "isPK": false
            },
            {
              "name": "accountIban",
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
              "name": "treasuryCode",
              "isPK": false
            },
            {
              "name": "regionName",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Nodira Qosimova",
    "clientRole": "Kredit Xatarlari Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Qarz Oluvchi: LoanBorrower Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **SoleProprietorship**, **CommercialPartnership** va **CorporationHolding** entitiylari asosida ularning barchasini birlashtiruvchi **LoanBorrower** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'LoanBorrower' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "ownerFullName",
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
              "name": "firmName",
              "isPK": false
            },
            {
              "name": "shareCapital",
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
              "name": "corporateName",
              "isPK": false
            },
            {
              "name": "stockTicker",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "ownerFullName",
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
              "name": "firmName",
              "isPK": false
            },
            {
              "name": "shareCapital",
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
              "name": "corporateName",
              "isPK": false
            },
            {
              "name": "stockTicker",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Sherzod Jo'rayev",
    "clientRole": "Bosh Notarius",
    "clientAvatar": "mentor",
    "title": "Yuridik Hujjat Imzolovchi: LegalSignatory Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **DomesticCitizen**, **ForeignDiplomat** va **CorporateAttorney** entitiylari asosida ularning barchasini birlashtiruvchi **LegalSignatory** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'LegalSignatory' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "registeredAddress",
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
              "name": "diplomatName",
              "isPK": false
            },
            {
              "name": "sendingState",
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
              "name": "lawyerName",
              "isPK": false
            },
            {
              "name": "validUntil",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "registeredAddress",
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
              "name": "diplomatName",
              "isPK": false
            },
            {
              "name": "sendingState",
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
              "name": "lawyerName",
              "isPK": false
            },
            {
              "name": "validUntil",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Polkovnik Baxtiyor Alimov",
    "clientRole": "Bojxona Posti Rahbari",
    "clientAvatar": "mentor",
    "title": "Bojxona Yuki Yuboruvchi: CargoConsignor Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **ManufacturingPlant**, **TradingHouse** va **HumanitarianMission** entitiylari asosida ularning barchasini birlashtiruvchi **CargoConsignor** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'CargoConsignor' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "plantTitle",
              "isPK": false
            },
            {
              "name": "industrialZone",
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
              "name": "firmTitle",
              "isPK": false
            },
            {
              "name": "chamberMemberId",
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
              "name": "unCharityCode",
              "isPK": false
            },
            {
              "name": "countryOrigin",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "plantTitle",
              "isPK": false
            },
            {
              "name": "industrialZone",
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
              "name": "firmTitle",
              "isPK": false
            },
            {
              "name": "chamberMemberId",
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
              "name": "unCharityCode",
              "isPK": false
            },
            {
              "name": "countryOrigin",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Dr. Dilnoza Umarova",
    "clientRole": "Patent Eksperti",
    "clientAvatar": "mentor",
    "title": "Patent Huquq Egasi: PatentAssignee Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **ResearchUniversity**, **IndependentInventor** va **TechCorporation** entitiylari asosida ularning barchasini birlashtiruvchi **PatentAssignee** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'PatentAssignee' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "universityName",
              "isPK": false
            },
            {
              "name": "rectorName",
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
              "name": "inventorName",
              "isPK": false
            },
            {
              "name": "patentCount",
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
              "name": "corpLegalTitle",
              "isPK": false
            },
            {
              "name": "rndBudgetUsd",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "universityName",
              "isPK": false
            },
            {
              "name": "rectorName",
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
              "name": "inventorName",
              "isPK": false
            },
            {
              "name": "patentCount",
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
              "name": "corpLegalTitle",
              "isPK": false
            },
            {
              "name": "rndBudgetUsd",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Ulug'bek Fayziyev",
    "clientRole": "Aktuariy Direktori",
    "clientAvatar": "mentor",
    "title": "Sug'urta Polisi Benefitsiari: PolicyBeneficiary Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **FamilyKin**, **MortgageBank** va **CharitableTrust** entitiylari asosida ularning barchasini birlashtiruvchi **PolicyBeneficiary** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'PolicyBeneficiary' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "kinFullName",
              "isPK": false
            },
            {
              "name": "kinshipDegree",
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
              "name": "bankName",
              "isPK": false
            },
            {
              "name": "loanAgreementNo",
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
              "name": "trustTitle",
              "isPK": false
            },
            {
              "name": "foundationScope",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "kinFullName",
              "isPK": false
            },
            {
              "name": "kinshipDegree",
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
              "name": "bankName",
              "isPK": false
            },
            {
              "name": "loanAgreementNo",
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
              "name": "trustTitle",
              "isPK": false
            },
            {
              "name": "foundationScope",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Gulzoda Karimova",
    "clientRole": "Brendlar Reyestri Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Savdo Belgisi Egasi: TrademarkOwner Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **PrivateEnterpriser**, **NonProfitOrg** va **JointStockCompany** entitiylari asosida ularning barchasini birlashtiruvchi **TrademarkOwner** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'TrademarkOwner' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "brandOwnerName",
              "isPK": false
            },
            {
              "name": "taxRegime",
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
              "name": "orgTitle",
              "isPK": false
            },
            {
              "name": "justiceMinistryPermit",
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
              "name": "jscTitle",
              "isPK": false
            },
            {
              "name": "marketCapitalization",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "brandOwnerName",
              "isPK": false
            },
            {
              "name": "taxRegime",
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
              "name": "orgTitle",
              "isPK": false
            },
            {
              "name": "justiceMinistryPermit",
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
              "name": "jscTitle",
              "isPK": false
            },
            {
              "name": "marketCapitalization",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Dr. Farhod Saidov",
    "clientRole": "Sug'urta Jamg'armasi Direktori",
    "clientAvatar": "mentor",
    "title": "Tibbiy Sug'urta Kafili: HealthCoverageSponsor Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **EmployerCompany**, **HealthMinistry** va **PrivatePhilanthropist** entitiylari asosida ularning barchasini birlashtiruvchi **HealthCoverageSponsor** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'HealthCoverageSponsor' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "insuredStaffCount",
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
              "name": "budgetProgramName",
              "isPK": false
            },
            {
              "name": "decreeNumber",
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
              "name": "donorFullName",
              "isPK": false
            },
            {
              "name": "endowmentSum",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "insuredStaffCount",
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
              "name": "budgetProgramName",
              "isPK": false
            },
            {
              "name": "decreeNumber",
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
              "name": "donorFullName",
              "isPK": false
            },
            {
              "name": "endowmentSum",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Mansur Shokirov",
    "clientRole": "Depozitariy Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Aksiya Egasi: ShareholderEntity Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **MutualFund**, **SovereignWealthFund** va **RetailInvestor** entitiylari asosida ularning barchasini birlashtiruvchi **ShareholderEntity** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'ShareholderEntity' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "fundName",
              "isPK": false
            },
            {
              "name": "netAssetValueUsd",
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
              "name": "stateTreasuryTitle",
              "isPK": false
            },
            {
              "name": "trusteeCouncil",
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
              "name": "investorFullName",
              "isPK": false
            },
            {
              "name": "brokerageAccNo",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "fundName",
              "isPK": false
            },
            {
              "name": "netAssetValueUsd",
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
              "name": "stateTreasuryTitle",
              "isPK": false
            },
            {
              "name": "trusteeCouncil",
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
              "name": "investorFullName",
              "isPK": false
            },
            {
              "name": "brokerageAccNo",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Polkovnik Ravshan Normatov",
    "clientRole": "Aerodrom Texnik Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Uchish Yo'lagi Foydalanuvchisi: RunwayOperator Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **CommercialAirline**, **AirForceSquadron** va **PrivateAirCharter** entitiylari asosida ularning barchasini birlashtiruvchi **RunwayOperator** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'RunwayOperator' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "airlineName",
              "isPK": false
            },
            {
              "name": "slotPermitNo",
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
              "name": "squadronRank",
              "isPK": false
            },
            {
              "name": "defenseZoneId",
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
              "name": "operatorName",
              "isPK": false
            },
            {
              "name": "hangarCode",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "airlineName",
              "isPK": false
            },
            {
              "name": "slotPermitNo",
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
              "name": "squadronRank",
              "isPK": false
            },
            {
              "name": "defenseZoneId",
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
              "name": "operatorName",
              "isPK": false
            },
            {
              "name": "hangarCode",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Shohruh Mirzayev",
    "clientRole": "Billing Arxitektori",
    "clientAvatar": "mentor",
    "title": "Aloqa Abanenti: TelecomSubscriber Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **IndividualSubscriber**, **CorporateSubscriber** va **IotDeviceGateway** entitiylari asosida ularning barchasini birlashtiruvchi **TelecomSubscriber** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'TelecomSubscriber' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "subscriberName",
              "isPK": false
            },
            {
              "name": "passportSeries",
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
              "name": "corpClientName",
              "isPK": false
            },
            {
              "name": "allocatedSimCount",
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
              "name": "deviceHardwareType",
              "isPK": false
            },
            {
              "name": "firmwareVer",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "subscriberName",
              "isPK": false
            },
            {
              "name": "passportSeries",
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
              "name": "corpClientName",
              "isPK": false
            },
            {
              "name": "allocatedSimCount",
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
              "name": "deviceHardwareType",
              "isPK": false
            },
            {
              "name": "firmwareVer",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Prof. Temur Vohidov",
    "clientRole": "Grant Komissiyasi Raisi",
    "clientAvatar": "mentor",
    "title": "Ilmiy Grant Moliyalashtiruvchi: GrantFunder Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **StateScienceAgency**, **TechConsortium** va **GlobalFoundation** entitiylari asosida ularning barchasini birlashtiruvchi **GrantFunder** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'GrantFunder' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "budgetSourceTitle",
              "isPK": false
            },
            {
              "name": "curatorOfficer",
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
              "name": "industrialAllianceTitle",
              "isPK": false
            },
            {
              "name": "leadPartner",
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
              "name": "foundationTitle",
              "isPK": false
            },
            {
              "name": "genevaAccordNo",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "budgetSourceTitle",
              "isPK": false
            },
            {
              "name": "curatorOfficer",
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
              "name": "industrialAllianceTitle",
              "isPK": false
            },
            {
              "name": "leadPartner",
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
              "name": "foundationTitle",
              "isPK": false
            },
            {
              "name": "genevaAccordNo",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "9-Qavat • EER Kengaytirish",
    "clientName": "Aziz Sobirov",
    "clientRole": "Tender Bosh Inspektor",
    "clientAvatar": "mentor",
    "title": "Davlat Tenderi Ishtirokchisi: TenderBidder Kategoriyasi (EER Bosqichi)",
    "story": "1-haftadagi **EngineeringConsortium**, **ConstructionCorp** va **MunicipalUtility** entitiylari asosida ularning barchasini birlashtiruvchi **TenderBidder** Union Type (∪) toifasini EER polotnosida to'liq mustahkamlash lozim.",
    "instruction": "'TenderBidder' Union Type (∪) kategoriyasini to'g'ri bog'lang va diagrammani yakunlang.",
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
              "name": "consortiumTitle",
              "isPK": false
            },
            {
              "name": "guaranteeBankInn",
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
              "name": "sroLicenseNumber",
              "isPK": false
            },
            {
              "name": "machineryAssetCount",
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
              "name": "districtName",
              "isPK": false
            },
            {
              "name": "cityHokimiyatDecree",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
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
              "name": "consortiumTitle",
              "isPK": false
            },
            {
              "name": "guaranteeBankInn",
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
              "name": "sroLicenseNumber",
              "isPK": false
            },
            {
              "name": "machineryAssetCount",
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
              "name": "districtName",
              "isPK": false
            },
            {
              "name": "cityHokimiyatDecree",
              "isPK": false
            }
          ]
        }
      ],
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
      ],
      "relationships": []
    }
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Behzod Vohidov",
    "clientRole": "Bosh Aeroport Me'mori",
    "clientAvatar": "mentor",
    "title": "Xalqaro Aeroport Kompleks Axborot Tizimi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **Airport**, **Terminal**, **FlightSchedule** va **PassengerBooking** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
            },
            {
              "name": "countryCode",
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
              "name": "passengerCapacityAnnual",
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
              "name": "departureTime",
              "isPK": false
            },
            {
              "name": "aircraftTailNo",
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
          "entity1": "Airport",
          "entity2": "Terminal",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "Terminal",
          "entity2": "FlightSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "FlightSchedule",
          "entity2": "PassengerBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
            },
            {
              "name": "countryCode",
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
              "name": "passengerCapacityAnnual",
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
              "name": "departureTime",
              "isPK": false
            },
            {
              "name": "aircraftTailNo",
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
          "entity1": "Airport",
          "entity2": "Terminal",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "Terminal",
          "entity2": "FlightSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "FlightSchedule",
          "entity2": "PassengerBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Javohir Qodirov",
    "clientRole": "Bosh Bank Arxitektori",
    "clientAvatar": "mentor",
    "title": "Milliy Banklararo Hisob-Kitob va Kliring Arxitekturasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **CentralBank**, **CommercialBank**, **SettlementAccount** va **ClearingTransaction** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CentralBank",
          "pk": "centralBankCode",
          "attributes": [
            {
              "name": "centralBankCode",
              "isPK": true
            },
            {
              "name": "officialTitle",
              "isPK": false
            },
            {
              "name": "reserveGoldTons",
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
              "name": "charterCapitalBillion",
              "isPK": false
            }
          ]
        },
        {
          "name": "SettlementAccount",
          "pk": "correspondentAccNo",
          "attributes": [
            {
              "name": "correspondentAccNo",
              "isPK": true
            },
            {
              "name": "currencyCode",
              "isPK": false
            },
            {
              "name": "clearedBalance",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClearingTransaction",
          "pk": "txRefCode",
          "attributes": [
            {
              "name": "txRefCode",
              "isPK": true
            },
            {
              "name": "transferSum",
              "isPK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false
            },
            {
              "name": "swiftMessage",
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
          "name": "Manages"
        },
        {
          "entity1": "CommercialBank",
          "entity2": "SettlementAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "SettlementAccount",
          "entity2": "ClearingTransaction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CentralBank",
          "pk": "centralBankCode",
          "attributes": [
            {
              "name": "centralBankCode",
              "isPK": true
            },
            {
              "name": "officialTitle",
              "isPK": false
            },
            {
              "name": "reserveGoldTons",
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
              "name": "charterCapitalBillion",
              "isPK": false
            }
          ]
        },
        {
          "name": "SettlementAccount",
          "pk": "correspondentAccNo",
          "attributes": [
            {
              "name": "correspondentAccNo",
              "isPK": true
            },
            {
              "name": "currencyCode",
              "isPK": false
            },
            {
              "name": "clearedBalance",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClearingTransaction",
          "pk": "txRefCode",
          "attributes": [
            {
              "name": "txRefCode",
              "isPK": true
            },
            {
              "name": "transferSum",
              "isPK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false
            },
            {
              "name": "swiftMessage",
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
          "name": "Manages"
        },
        {
          "entity1": "CommercialBank",
          "entity2": "SettlementAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "SettlementAccount",
          "entity2": "ClearingTransaction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Prof. Dilshod Umarov",
    "clientRole": "Klinika Texnik Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Respublika Onkologiya Markazi Davolash Tizimi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **Hospital**, **SpecializedWard**, **SpecializedDoctor** va **PatientCourse** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hospital",
          "pk": "hospitalId",
          "attributes": [
            {
              "name": "hospitalId",
              "isPK": true
            },
            {
              "name": "hospitalName",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            },
            {
              "name": "bedCapacityTotal",
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
              "name": "radiationShieldingGrade",
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
              "name": "doctorFullName",
              "isPK": false
            },
            {
              "name": "oncologyBoardCert",
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
              "name": "diagnosisProtocol",
              "isPK": false
            },
            {
              "name": "chemoCycleNumber",
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
          "name": "Manages"
        },
        {
          "entity1": "SpecializedWard",
          "entity2": "SpecializedDoctor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "SpecializedDoctor",
          "entity2": "PatientCourse",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hospital",
          "pk": "hospitalId",
          "attributes": [
            {
              "name": "hospitalId",
              "isPK": true
            },
            {
              "name": "hospitalName",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            },
            {
              "name": "bedCapacityTotal",
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
              "name": "radiationShieldingGrade",
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
              "name": "doctorFullName",
              "isPK": false
            },
            {
              "name": "oncologyBoardCert",
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
              "name": "diagnosisProtocol",
              "isPK": false
            },
            {
              "name": "chemoCycleNumber",
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
          "name": "Manages"
        },
        {
          "entity1": "SpecializedWard",
          "entity2": "SpecializedDoctor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "SpecializedDoctor",
          "entity2": "PatientCourse",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Kapitan Anvar Mahmudov",
    "clientRole": "Logistika Porti Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Trans-Okean Dengiz Porti va Konteyner Terminali (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **MegaWarehouse**, **ContainerVessel**, **CustomsDeclaration** va **FreightForwarder** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "dockBerthCount",
              "isPK": false
            },
            {
              "name": "customsZoneCode",
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
              "name": "teuCapacity",
              "isPK": false
            },
            {
              "name": "flagState",
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
              "name": "customsDutySum",
              "isPK": false
            },
            {
              "name": "inspectionPassed",
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
              "name": "forwarderTitle",
              "isPK": false
            },
            {
              "name": "fiataLicenseNo",
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
          "name": "Manages"
        },
        {
          "entity1": "ContainerVessel",
          "entity2": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "CustomsDeclaration",
          "entity2": "FreightForwarder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "dockBerthCount",
              "isPK": false
            },
            {
              "name": "customsZoneCode",
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
              "name": "teuCapacity",
              "isPK": false
            },
            {
              "name": "flagState",
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
              "name": "customsDutySum",
              "isPK": false
            },
            {
              "name": "inspectionPassed",
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
              "name": "forwarderTitle",
              "isPK": false
            },
            {
              "name": "fiataLicenseNo",
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
          "name": "Manages"
        },
        {
          "entity1": "ContainerVessel",
          "entity2": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "CustomsDeclaration",
          "entity2": "FreightForwarder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Prof. Sherzod Salimov",
    "clientRole": "IT Prorektor",
    "clientAvatar": "mentor",
    "title": "Xalqaro Universitet Kampusi Yagona Modeli (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **UniversityFaculty**, **AcademicDepartment**, **StaffMember** va **StudentClass** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UniversityFaculty",
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
              "name": "buildingNumber",
              "isPK": false
            }
          ]
        },
        {
          "name": "AcademicDepartment",
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
              "name": "researchFocusArea",
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
              "name": "staffFullName",
              "isPK": false
            },
            {
              "name": "academicRankGrade",
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
              "name": "studySemester",
              "isPK": false
            },
            {
              "name": "roomHallCode",
              "isPK": false
            },
            {
              "name": "maxEnrolled",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "UniversityFaculty",
          "entity2": "AcademicDepartment",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "AcademicDepartment",
          "entity2": "StaffMember",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "StaffMember",
          "entity2": "StudentClass",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "UniversityFaculty",
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
              "name": "buildingNumber",
              "isPK": false
            }
          ]
        },
        {
          "name": "AcademicDepartment",
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
              "name": "researchFocusArea",
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
              "name": "staffFullName",
              "isPK": false
            },
            {
              "name": "academicRankGrade",
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
              "name": "studySemester",
              "isPK": false
            },
            {
              "name": "roomHallCode",
              "isPK": false
            },
            {
              "name": "maxEnrolled",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "UniversityFaculty",
          "entity2": "AcademicDepartment",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "AcademicDepartment",
          "entity2": "StaffMember",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "StaffMember",
          "entity2": "StudentClass",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Akmal Qosimov",
    "clientRole": "Bosh Energetik Dispetcher",
    "clientAvatar": "mentor",
    "title": "Yagona Milliy Energotizim Dispetcherlik Arxitekturasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **PowerPlant**, **ElectricSubstation**, **TransmissionLine** va **LoadZone** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "fuelType",
              "isPK": false
            },
            {
              "name": "installedMegaWatts",
              "isPK": false
            }
          ]
        },
        {
          "name": "ElectricSubstation",
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
              "name": "stepDownVoltageKv",
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
              "name": "distanceKilometers",
              "isPK": false
            },
            {
              "name": "maxAmpereThroughput",
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
              "name": "zoneCityRegion",
              "isPK": false
            },
            {
              "name": "peakDemandMegaWatts",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PowerPlant",
          "entity2": "ElectricSubstation",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "ElectricSubstation",
          "entity2": "TransmissionLine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "TransmissionLine",
          "entity2": "LoadZone",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "fuelType",
              "isPK": false
            },
            {
              "name": "installedMegaWatts",
              "isPK": false
            }
          ]
        },
        {
          "name": "ElectricSubstation",
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
              "name": "stepDownVoltageKv",
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
              "name": "distanceKilometers",
              "isPK": false
            },
            {
              "name": "maxAmpereThroughput",
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
              "name": "zoneCityRegion",
              "isPK": false
            },
            {
              "name": "peakDemandMegaWatts",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PowerPlant",
          "entity2": "ElectricSubstation",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "ElectricSubstation",
          "entity2": "TransmissionLine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "TransmissionLine",
          "entity2": "LoadZone",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Mansur Aliyev",
    "clientRole": "Bosh Poezd Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Magistral Temir Yo'l va Ekspress Qatnovlar Tizimi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **RailwayNetwork**, **TrainSchedule**, **LocomotiveEngine** va **PassengerBooking** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "trackGaugeMm",
              "isPK": false
            },
            {
              "name": "electrifiedPercent",
              "isPK": false
            }
          ]
        },
        {
          "name": "TrainSchedule",
          "pk": "scheduleTripNo",
          "attributes": [
            {
              "name": "scheduleTripNo",
              "isPK": true
            },
            {
              "name": "departureTimestamp",
              "isPK": false
            },
            {
              "name": "arrivalTimestamp",
              "isPK": false
            }
          ]
        },
        {
          "name": "LocomotiveEngine",
          "pk": "locoSerialNo",
          "attributes": [
            {
              "name": "locoSerialNo",
              "isPK": true
            },
            {
              "name": "locomotiveModel",
              "isPK": false
            },
            {
              "name": "tractivePowerHp",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerBooking",
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
              "name": "coachCarriageNo",
              "isPK": false
            },
            {
              "name": "seatIndex",
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
          "name": "Manages"
        },
        {
          "entity1": "TrainSchedule",
          "entity2": "LocomotiveEngine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "LocomotiveEngine",
          "entity2": "PassengerBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "trackGaugeMm",
              "isPK": false
            },
            {
              "name": "electrifiedPercent",
              "isPK": false
            }
          ]
        },
        {
          "name": "TrainSchedule",
          "pk": "scheduleTripNo",
          "attributes": [
            {
              "name": "scheduleTripNo",
              "isPK": true
            },
            {
              "name": "departureTimestamp",
              "isPK": false
            },
            {
              "name": "arrivalTimestamp",
              "isPK": false
            }
          ]
        },
        {
          "name": "LocomotiveEngine",
          "pk": "locoSerialNo",
          "attributes": [
            {
              "name": "locoSerialNo",
              "isPK": true
            },
            {
              "name": "locomotiveModel",
              "isPK": false
            },
            {
              "name": "tractivePowerHp",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerBooking",
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
              "name": "coachCarriageNo",
              "isPK": false
            },
            {
              "name": "seatIndex",
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
          "name": "Manages"
        },
        {
          "entity1": "TrainSchedule",
          "entity2": "LocomotiveEngine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "LocomotiveEngine",
          "entity2": "PassengerBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Sanjar Normatov",
    "clientRole": "Raqamli Vazirlik Arxitektori",
    "clientAvatar": "mentor",
    "title": "Elektron Hukumat Davlat Xizmatlari Yagona Portali (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **GovPortalService**, **CitizenRequest**, **MinistryDepartment** va **ProcessingOfficer** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "statutoryFeeSum",
              "isPK": false
            },
            {
              "name": "processingDays",
              "isPK": false
            }
          ]
        },
        {
          "name": "CitizenRequest",
          "pk": "applicationId",
          "attributes": [
            {
              "name": "applicationId",
              "isPK": true
            },
            {
              "name": "applicantPinfl",
              "isPK": false
            },
            {
              "name": "submittedTimestamp",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        },
        {
          "name": "MinistryDepartment",
          "pk": "departmentInn",
          "attributes": [
            {
              "name": "departmentInn",
              "isPK": true
            },
            {
              "name": "ministryTitle",
              "isPK": false
            },
            {
              "name": "competentAuthorityZone",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProcessingOfficer",
          "pk": "officerStaffId",
          "attributes": [
            {
              "name": "officerStaffId",
              "isPK": true
            },
            {
              "name": "officerFullName",
              "isPK": false
            },
            {
              "name": "digitalSignatureCert",
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
          "name": "Manages"
        },
        {
          "entity1": "CitizenRequest",
          "entity2": "MinistryDepartment",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "MinistryDepartment",
          "entity2": "ProcessingOfficer",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "statutoryFeeSum",
              "isPK": false
            },
            {
              "name": "processingDays",
              "isPK": false
            }
          ]
        },
        {
          "name": "CitizenRequest",
          "pk": "applicationId",
          "attributes": [
            {
              "name": "applicationId",
              "isPK": true
            },
            {
              "name": "applicantPinfl",
              "isPK": false
            },
            {
              "name": "submittedTimestamp",
              "isPK": false
            },
            {
              "name": "status",
              "isPK": false
            }
          ]
        },
        {
          "name": "MinistryDepartment",
          "pk": "departmentInn",
          "attributes": [
            {
              "name": "departmentInn",
              "isPK": true
            },
            {
              "name": "ministryTitle",
              "isPK": false
            },
            {
              "name": "competentAuthorityZone",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProcessingOfficer",
          "pk": "officerStaffId",
          "attributes": [
            {
              "name": "officerStaffId",
              "isPK": true
            },
            {
              "name": "officerFullName",
              "isPK": false
            },
            {
              "name": "digitalSignatureCert",
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
          "name": "Manages"
        },
        {
          "entity1": "CitizenRequest",
          "entity2": "MinistryDepartment",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "MinistryDepartment",
          "entity2": "ProcessingOfficer",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Dr. Zulfiya Rustamova",
    "clientRole": "Bosh Texnologik Arxitektor",
    "clientAvatar": "mentor",
    "title": "GMP Standartidagi Biotexnologik Zavod Axborot Klasteri (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **PharmaFactory**, **ChemicalLab**, **DrugBatch** va **QualityAudit** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "gmpAccreditationNo",
              "isPK": false
            },
            {
              "name": "cleanRoomGrade",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChemicalLab",
          "pk": "labUnitCode",
          "attributes": [
            {
              "name": "labUnitCode",
              "isPK": true
            },
            {
              "name": "labSpecialization",
              "isPK": false
            },
            {
              "name": "hplcInstrumentCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "DrugBatch",
          "pk": "batchNumber",
          "attributes": [
            {
              "name": "batchNumber",
              "isPK": true
            },
            {
              "name": "manufactureDate",
              "isPK": false
            },
            {
              "name": "releaseInspectionPassed",
              "isPK": false
            }
          ]
        },
        {
          "name": "QualityAudit",
          "pk": "auditProtocolId",
          "attributes": [
            {
              "name": "auditProtocolId",
              "isPK": true
            },
            {
              "name": "auditorName",
              "isPK": false
            },
            {
              "name": "purityAssayPercent",
              "isPK": false
            },
            {
              "name": "auditDate",
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
          "name": "Manages"
        },
        {
          "entity1": "ChemicalLab",
          "entity2": "DrugBatch",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "DrugBatch",
          "entity2": "QualityAudit",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "gmpAccreditationNo",
              "isPK": false
            },
            {
              "name": "cleanRoomGrade",
              "isPK": false
            }
          ]
        },
        {
          "name": "ChemicalLab",
          "pk": "labUnitCode",
          "attributes": [
            {
              "name": "labUnitCode",
              "isPK": true
            },
            {
              "name": "labSpecialization",
              "isPK": false
            },
            {
              "name": "hplcInstrumentCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "DrugBatch",
          "pk": "batchNumber",
          "attributes": [
            {
              "name": "batchNumber",
              "isPK": true
            },
            {
              "name": "manufactureDate",
              "isPK": false
            },
            {
              "name": "releaseInspectionPassed",
              "isPK": false
            }
          ]
        },
        {
          "name": "QualityAudit",
          "pk": "auditProtocolId",
          "attributes": [
            {
              "name": "auditProtocolId",
              "isPK": true
            },
            {
              "name": "auditorName",
              "isPK": false
            },
            {
              "name": "purityAssayPercent",
              "isPK": false
            },
            {
              "name": "auditDate",
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
          "name": "Manages"
        },
        {
          "entity1": "ChemicalLab",
          "entity2": "DrugBatch",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "DrugBatch",
          "entity2": "QualityAudit",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Temur Mahmudov",
    "clientRole": "Sanoat Ishlab Chiqarish Direktori",
    "clientAvatar": "mentor",
    "title": "Avtomobil Yig'uv Zavodi va Rasmiy Dilerlik Majmuasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **CarManufacturer**, **AssemblyLine**, **DealershipShowroom** va **VehicleOrder** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "manufacturerName",
              "isPK": false
            },
            {
              "name": "hqCountry",
              "isPK": false
            },
            {
              "name": "isoQualityCert",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssemblyLine",
          "pk": "conveyorId",
          "attributes": [
            {
              "name": "conveyorId",
              "isPK": true
            },
            {
              "name": "productionLineModel",
              "isPK": false
            },
            {
              "name": "unitsPerDayCapacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "DealershipShowroom",
          "pk": "dealerChainId",
          "attributes": [
            {
              "name": "dealerChainId",
              "isPK": true
            },
            {
              "name": "showroomCity",
              "isPK": false
            },
            {
              "name": "serviceBayQuota",
              "isPK": false
            }
          ]
        },
        {
          "name": "VehicleOrder",
          "pk": "contractNumber",
          "attributes": [
            {
              "name": "contractNumber",
              "isPK": true
            },
            {
              "name": "customerPinfl",
              "isPK": false
            },
            {
              "name": "allocatedVin",
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
          "entity1": "CarManufacturer",
          "entity2": "AssemblyLine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "AssemblyLine",
          "entity2": "DealershipShowroom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "DealershipShowroom",
          "entity2": "VehicleOrder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "manufacturerName",
              "isPK": false
            },
            {
              "name": "hqCountry",
              "isPK": false
            },
            {
              "name": "isoQualityCert",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssemblyLine",
          "pk": "conveyorId",
          "attributes": [
            {
              "name": "conveyorId",
              "isPK": true
            },
            {
              "name": "productionLineModel",
              "isPK": false
            },
            {
              "name": "unitsPerDayCapacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "DealershipShowroom",
          "pk": "dealerChainId",
          "attributes": [
            {
              "name": "dealerChainId",
              "isPK": true
            },
            {
              "name": "showroomCity",
              "isPK": false
            },
            {
              "name": "serviceBayQuota",
              "isPK": false
            }
          ]
        },
        {
          "name": "VehicleOrder",
          "pk": "contractNumber",
          "attributes": [
            {
              "name": "contractNumber",
              "isPK": true
            },
            {
              "name": "customerPinfl",
              "isPK": false
            },
            {
              "name": "allocatedVin",
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
          "entity1": "CarManufacturer",
          "entity2": "AssemblyLine",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "AssemblyLine",
          "entity2": "DealershipShowroom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "DealershipShowroom",
          "entity2": "VehicleOrder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Farhod Karimov",
    "clientRole": "SOC Bosh Muhandisi",
    "clientAvatar": "mentor",
    "title": "Davlat Kiberxavfsizlik Operatsion Markazi (SOC) (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **SOCNetwork**, **SecurityThreat**, **IncidentTicket** va **MitigationAction** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "networkSegmentName",
              "isPK": false
            },
            {
              "name": "firewallApplianceIp",
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
              "name": "cvssSeverityScore",
              "isPK": false
            },
            {
              "name": "threatVectorCategory",
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
              "name": "detectedTimestamp",
              "isPK": false
            },
            {
              "name": "containmentState",
              "isPK": false
            }
          ]
        },
        {
          "name": "MitigationAction",
          "pk": "playbookActionId",
          "attributes": [
            {
              "name": "playbookActionId",
              "isPK": true
            },
            {
              "name": "analystBadgeId",
              "isPK": false
            },
            {
              "name": "patchAppliedTimestamp",
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
          "name": "Manages"
        },
        {
          "entity1": "SecurityThreat",
          "entity2": "IncidentTicket",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "IncidentTicket",
          "entity2": "MitigationAction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "networkSegmentName",
              "isPK": false
            },
            {
              "name": "firewallApplianceIp",
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
              "name": "cvssSeverityScore",
              "isPK": false
            },
            {
              "name": "threatVectorCategory",
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
              "name": "detectedTimestamp",
              "isPK": false
            },
            {
              "name": "containmentState",
              "isPK": false
            }
          ]
        },
        {
          "name": "MitigationAction",
          "pk": "playbookActionId",
          "attributes": [
            {
              "name": "playbookActionId",
              "isPK": true
            },
            {
              "name": "analystBadgeId",
              "isPK": false
            },
            {
              "name": "patchAppliedTimestamp",
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
          "name": "Manages"
        },
        {
          "entity1": "SecurityThreat",
          "entity2": "IncidentTicket",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "IncidentTicket",
          "entity2": "MitigationAction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Nargiza Jo'rayeva",
    "clientRole": "Ta'minot Zanjiri Arxitektori",
    "clientAvatar": "mentor",
    "title": "Markaziy Savdo Gipermarketlar Tarmog'i va Logistika Hubi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **RetailChainStore**, **CentralDepot**, **SupplierVendor** va **ProductInventory** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RetailChainStore",
          "pk": "storeUnitId",
          "attributes": [
            {
              "name": "storeUnitId",
              "isPK": true
            },
            {
              "name": "storeBrandName",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            },
            {
              "name": "checkoutCount",
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
              "name": "refrigeratedCapacityTons",
              "isPK": false
            },
            {
              "name": "palletSlots",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupplierVendor",
          "pk": "vendorTin",
          "attributes": [
            {
              "name": "vendorTin",
              "isPK": true
            },
            {
              "name": "supplierCompanyName",
              "isPK": false
            },
            {
              "name": "slaPerformanceIndex",
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
              "name": "onHandQuantity",
              "isPK": false
            },
            {
              "name": "reorderThresholdUnits",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RetailChainStore",
          "entity2": "CentralDepot",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "CentralDepot",
          "entity2": "SupplierVendor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "SupplierVendor",
          "entity2": "ProductInventory",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RetailChainStore",
          "pk": "storeUnitId",
          "attributes": [
            {
              "name": "storeUnitId",
              "isPK": true
            },
            {
              "name": "storeBrandName",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            },
            {
              "name": "checkoutCount",
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
              "name": "refrigeratedCapacityTons",
              "isPK": false
            },
            {
              "name": "palletSlots",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupplierVendor",
          "pk": "vendorTin",
          "attributes": [
            {
              "name": "vendorTin",
              "isPK": true
            },
            {
              "name": "supplierCompanyName",
              "isPK": false
            },
            {
              "name": "slaPerformanceIndex",
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
              "name": "onHandQuantity",
              "isPK": false
            },
            {
              "name": "reorderThresholdUnits",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RetailChainStore",
          "entity2": "CentralDepot",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Manages"
        },
        {
          "entity1": "CentralDepot",
          "entity2": "SupplierVendor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "SupplierVendor",
          "entity2": "ProductInventory",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "G'ayrat Vohidov",
    "clientRole": "Bosh Texnologik Dispetcher",
    "clientAvatar": "mentor",
    "title": "Neft-Gaz Kimyo Majmuasi va Magistral Quvurlar Tizimi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **RefineryPlant**, **StorageTanker**, **PipelineSegment** va **CrudeOilShipment** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "crudeCapacityBarrelsPerDay",
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
              "name": "tankGrossVolumeM3",
              "isPK": false
            },
            {
              "name": "storedHydrocarbonGrade",
              "isPK": false
            }
          ]
        },
        {
          "name": "PipelineSegment",
          "pk": "pipelineSegmentCode",
          "attributes": [
            {
              "name": "pipelineSegmentCode",
              "isPK": true
            },
            {
              "name": "pipelineDiameterMm",
              "isPK": false
            },
            {
              "name": "operatingBarPressure",
              "isPK": false
            }
          ]
        },
        {
          "name": "CrudeOilShipment",
          "pk": "consignmentBillOfLading",
          "attributes": [
            {
              "name": "consignmentBillOfLading",
              "isPK": true
            },
            {
              "name": "batchSpecificGravity",
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
          "name": "Manages"
        },
        {
          "entity1": "StorageTanker",
          "entity2": "PipelineSegment",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "PipelineSegment",
          "entity2": "CrudeOilShipment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "crudeCapacityBarrelsPerDay",
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
              "name": "tankGrossVolumeM3",
              "isPK": false
            },
            {
              "name": "storedHydrocarbonGrade",
              "isPK": false
            }
          ]
        },
        {
          "name": "PipelineSegment",
          "pk": "pipelineSegmentCode",
          "attributes": [
            {
              "name": "pipelineSegmentCode",
              "isPK": true
            },
            {
              "name": "pipelineDiameterMm",
              "isPK": false
            },
            {
              "name": "operatingBarPressure",
              "isPK": false
            }
          ]
        },
        {
          "name": "CrudeOilShipment",
          "pk": "consignmentBillOfLading",
          "attributes": [
            {
              "name": "consignmentBillOfLading",
              "isPK": true
            },
            {
              "name": "batchSpecificGravity",
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
          "name": "Manages"
        },
        {
          "entity1": "StorageTanker",
          "entity2": "PipelineSegment",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "PipelineSegment",
          "entity2": "CrudeOilShipment",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Jamshid Aliyev",
    "clientRole": "Tarmoq Bosh Arxitektori",
    "clientAvatar": "mentor",
    "title": "5G Telekommunikatsiya Yadro Tarmog'i va Billing Arxitekturasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **TelecomCore**, **FiveGBaseStation**, **BillingSubscription** va **DataTrafficSession** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
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
              "name": "coreRouterModel",
              "isPK": false
            },
            {
              "name": "opticalCapacityTbps",
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
              "name": "carrierFrequencyGhz",
              "isPK": false
            },
            {
              "name": "massiveMimoSectors",
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
              "name": "activeTariffPlan",
              "isPK": false
            },
            {
              "name": "dataBalanceGigabytes",
              "isPK": false
            }
          ]
        },
        {
          "name": "DataTrafficSession",
          "pk": "sessionCdrId",
          "attributes": [
            {
              "name": "sessionCdrId",
              "isPK": true
            },
            {
              "name": "connectionTimestamp",
              "isPK": false
            },
            {
              "name": "uplinkMegabytesTransferred",
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
          "name": "Manages"
        },
        {
          "entity1": "FiveGBaseStation",
          "entity2": "BillingSubscription",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "BillingSubscription",
          "entity2": "DataTrafficSession",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
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
              "name": "coreRouterModel",
              "isPK": false
            },
            {
              "name": "opticalCapacityTbps",
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
              "name": "carrierFrequencyGhz",
              "isPK": false
            },
            {
              "name": "massiveMimoSectors",
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
              "name": "activeTariffPlan",
              "isPK": false
            },
            {
              "name": "dataBalanceGigabytes",
              "isPK": false
            }
          ]
        },
        {
          "name": "DataTrafficSession",
          "pk": "sessionCdrId",
          "attributes": [
            {
              "name": "sessionCdrId",
              "isPK": true
            },
            {
              "name": "connectionTimestamp",
              "isPK": false
            },
            {
              "name": "uplinkMegabytesTransferred",
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
          "name": "Manages"
        },
        {
          "entity1": "FiveGBaseStation",
          "entity2": "BillingSubscription",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "BillingSubscription",
          "entity2": "DataTrafficSession",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "10-Qavat • EER Kengaytirish",
    "clientName": "Akademik Anvar Qodirov",
    "clientRole": "Kosmik Missiyalar Bosh Arxitektori",
    "clientAvatar": "mentor",
    "title": "Global Kosmik Parvozlar va Sun'iy Yo'ldosh Boshqaruvi (EER Bosqichi)",
    "story": "1-haftada yaratilgan korporativ **Spaceport**, **SatelliteOrbiter**, **GroundStation** va **MissionTelemetry** arxitekturasi EER darajasida subklasslar va cheklovlar bilan boyitiladi.\n\nKorxona miqyosidagi to'liq ma'lumotlar modeli biznes talablariga 100% javob berishini tekshiring va tasdiqlang.",
    "instruction": "Korporativ EER modelining barcha entitiylar va aloqalarini to'liq tekshiruvdan o'tkazing.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Spaceport",
          "pk": "launchComplexId",
          "attributes": [
            {
              "name": "launchComplexId",
              "isPK": true
            },
            {
              "name": "cosmodromeName",
              "isPK": false
            },
            {
              "name": "launchPadCount",
              "isPK": false
            },
            {
              "name": "geoCoordinates",
              "isPK": false
            }
          ]
        },
        {
          "name": "SatelliteOrbiter",
          "pk": "noradCatalogId",
          "attributes": [
            {
              "name": "noradCatalogId",
              "isPK": true
            },
            {
              "name": "satelliteName",
              "isPK": false
            },
            {
              "name": "orbitAltitudeKm",
              "isPK": false
            },
            {
              "name": "payloadSensor",
              "isPK": false
            }
          ]
        },
        {
          "name": "GroundStation",
          "pk": "groundStationCode",
          "attributes": [
            {
              "name": "groundStationCode",
              "isPK": true
            },
            {
              "name": "parabolicDishDiameterMeters",
              "isPK": false
            },
            {
              "name": "uplinkFrequencyGhz",
              "isPK": false
            }
          ]
        },
        {
          "name": "MissionTelemetry",
          "pk": "telemetryFrameId",
          "attributes": [
            {
              "name": "telemetryFrameId",
              "isPK": true
            },
            {
              "name": "solarPanelVolts",
              "isPK": false
            },
            {
              "name": "onboardTempKelvin",
              "isPK": false
            },
            {
              "name": "downlinkTime",
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
          "name": "Manages"
        },
        {
          "entity1": "SatelliteOrbiter",
          "entity2": "GroundStation",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "GroundStation",
          "entity2": "MissionTelemetry",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Spaceport",
          "pk": "launchComplexId",
          "attributes": [
            {
              "name": "launchComplexId",
              "isPK": true
            },
            {
              "name": "cosmodromeName",
              "isPK": false
            },
            {
              "name": "launchPadCount",
              "isPK": false
            },
            {
              "name": "geoCoordinates",
              "isPK": false
            }
          ]
        },
        {
          "name": "SatelliteOrbiter",
          "pk": "noradCatalogId",
          "attributes": [
            {
              "name": "noradCatalogId",
              "isPK": true
            },
            {
              "name": "satelliteName",
              "isPK": false
            },
            {
              "name": "orbitAltitudeKm",
              "isPK": false
            },
            {
              "name": "payloadSensor",
              "isPK": false
            }
          ]
        },
        {
          "name": "GroundStation",
          "pk": "groundStationCode",
          "attributes": [
            {
              "name": "groundStationCode",
              "isPK": true
            },
            {
              "name": "parabolicDishDiameterMeters",
              "isPK": false
            },
            {
              "name": "uplinkFrequencyGhz",
              "isPK": false
            }
          ]
        },
        {
          "name": "MissionTelemetry",
          "pk": "telemetryFrameId",
          "attributes": [
            {
              "name": "telemetryFrameId",
              "isPK": true
            },
            {
              "name": "solarPanelVolts",
              "isPK": false
            },
            {
              "name": "onboardTempKelvin",
              "isPK": false
            },
            {
              "name": "downlinkTime",
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
          "name": "Manages"
        },
        {
          "entity1": "SatelliteOrbiter",
          "entity2": "GroundStation",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates"
        },
        {
          "entity1": "GroundStation",
          "entity2": "MissionTelemetry",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Records"
        }
      ]
    }
  }
];
