var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.EER_CLIENTS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "7-Qavat • Kino Asarlari",
    "clientName": "Bobur Alimov",
    "clientRole": "Prokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Filmlar: FeatureFilm va DocumentaryFilm",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Kino Asarlari standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Movie** (movieId {PK}, `title`, `director`, `durationMin`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **FeatureFilm** (`boxOfficeMillions`, `aspectRatio`) va **DocumentaryFilm** (`historicalTopic`, `narratorName`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Movie' superklassidan 'FeatureFilm' va 'DocumentaryFilm' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Farmatsevtika Qonunchiligi",
    "clientName": "Dr. Umida Saidova",
    "clientRole": "Bosh Nazoratchi",
    "clientAvatar": "mentor",
    "title": "Dorilar: PrescriptionDrug va OtcDrug",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Farmatsevtika Qonunchiligi standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Medicine** (barcode {PK}, `name`, `dosageMg`, `expDate`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **PrescriptionDrug** (`controlledSchedule`, `doctorReq`) va **OtcDrug** (`flavor`, `ageLimitYears`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Medicine' superklassidan 'PrescriptionDrug' va 'OtcDrug' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Magistral Yuk Floti",
    "clientName": "Rustam Qobilov",
    "clientRole": "Avtopark Texnik Rahbari",
    "clientAvatar": "mentor",
    "title": "Furalar: RefrigeratedTruck va FlatbedTruck",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Magistral Yuk Floti standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **CargoTruck** (plateNo {PK}, `capacityTons`, `mileageKm`, `fuelType`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **RefrigeratedTruck** (`minTempCelsius`, `compressorPower`) va **FlatbedTruck** (`bedLengthMeters`, `maxAxleWeight`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'CargoTruck' superklassidan 'RefrigeratedTruck' va 'FlatbedTruck' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Fitnes Klub Ma'muriyati",
    "clientName": "Dilnoza Vohidova",
    "clientRole": "Klub Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Klub A'zolari: VipMember va RegularMember",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Fitnes Klub Ma'muriyati standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **ClubMember** (memberCardNo {PK}, `fullName`, `membershipType`, `phone`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **VipMember** (`personalTrainerId`, `spaAccessLevel`) va **RegularMember** (`lockerAssigned`, `timeSlot`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'ClubMember' superklassidan 'VipMember' va 'RegularMember' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Quyosh Podstansiyasi",
    "clientName": "Jamshid Mahmudov",
    "clientRole": "Stansiya Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Invertorlar: CentralInverter va MicroInverter",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Quyosh Podstansiyasi standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **SolarInverter** (serialNo {PK}, `peakPowerKw`, `voltageInput`, `efficiency`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **CentralInverter** (`transformerRatingKva`, `coolingSystem`) va **MicroInverter** (`mpptChannels`, `efficiencyRating`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'SolarInverter' superklassidan 'CentralInverter' va 'MicroInverter' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Universitet Shtati",
    "clientName": "Prof. Anvar Hakimov",
    "clientRole": "Ilmiy Kadrlar Bo'limi",
    "clientAvatar": "mentor",
    "title": "Akademik Xodimlar: Instructor va Researcher (Overlapping)",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Universitet Shtati amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **UniversityStaff** (staffId {PK}, `fullName`, `email`, `salary`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **Instructor** (`teachingHoursPerWeek`, `evalScore`) va **Researcher** (`grantFundingUsd`, `hIndex`). Bitta UniversityStaff bir vaqtning o'zida ham Instructor, ham Researcher bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'UniversityStaff' superklassiga 'Instructor' va 'Researcher' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Tijorat Banki Mijozlari",
    "clientName": "Gulnora Sobirova",
    "clientRole": "Chakana Xizmatlar Direktori",
    "clientAvatar": "mentor",
    "title": "Bank Mijozlari: Depositor va Borrower (Overlapping)",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Tijorat Banki Mijozlari amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **BankClient** (clientId {PK}, `clientName`, `taxCode`, `contactPhone`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **Depositor** (`depositBalance`, `termMonths`) va **Borrower** (`loanAmount`, `creditRating`). Bitta BankClient bir vaqtning o'zida ham Depositor, ham Borrower bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'BankClient' superklassiga 'Depositor' va 'Borrower' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Axborot Xavfsizligi",
    "clientName": "Farrux Olimov",
    "clientRole": "CISO Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Tizim Foydalanuvchilari: SecurityAdmin va SystemDev",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Axborot Xavfsizligi amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **SystemUser** (userLogin {PK}, `email`, `createdDate`, `lastLogin`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **SecurityAdmin** (`clearanceLevel`, `incidentAlertEmail`) va **SystemDev** (`gitBranchPermission`, `ideEnvConfig`). Bitta SystemUser bir vaqtning o'zida ham SecurityAdmin, ham SystemDev bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'SystemUser' superklassiga 'SecurityAdmin' va 'SystemDev' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Xalqaro Ilmiy Sammit",
    "clientName": "Prof. Dilnoza Rahimova",
    "clientRole": "Dastur Qo'mitasi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Sammit Qatnashchilari: KeynoteSpeaker va Reviewer",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Xalqaro Ilmiy Sammit amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **ConferenceAttendee** (attendeeId {PK}, `attendeeName`, `institution`, `country`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **KeynoteSpeaker** (`lectureTopic`, `honorariumSum`) va **CommitteeReviewer** (`paperQuota`, `assignedTrack`). Bitta ConferenceAttendee bir vaqtning o'zida ham KeynoteSpeaker, ham CommitteeReviewer bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'ConferenceAttendee' superklassiga 'KeynoteSpeaker' va 'CommitteeReviewer' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Professional Sport Klubi",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Sport Direktori",
    "clientAvatar": "mentor",
    "title": "Sportchilar: LeaguePlayer va TeamCoach",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Professional Sport Klubi amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **AthleteMember** (athleteId {PK}, `athleteName`, `bloodGroup`, `joinYear`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **LeaguePlayer** (`jerseyNumber`, `matchesPlayed`) va **TeamCoach** (`coachingBadge`, `winLossRatio`). Bitta AthleteMember bir vaqtning o'zida ham LeaguePlayer, ham TeamCoach bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'AthleteMember' superklassiga 'LeaguePlayer' va 'TeamCoach' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Aviatsiya Ekipaji",
    "clientName": "Kapitan Vladimir Kim",
    "clientRole": "Parvozlar Xavfsizligi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Parvoz Ekipaji: CommercialPilot va SafetyInspector",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Aviatsiya Ekipaji amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **CrewMember** (crewId {PK}, `crewName`, `flightHoursTotal`, `medicalCertDate`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **CommercialPilot** (`typeRatingAircraft`, `coPilotLicenseNo`) va **SafetyInspector** (`safetyAuditCert`, `inspectionCount`). Bitta CrewMember bir vaqtning o'zida ham CommercialPilot, ham SafetyInspector bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'CrewMember' superklassiga 'CommercialPilot' va 'SafetyInspector' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Avtodilerlik Klasteri",
    "clientName": "Sherzod Aliyev",
    "clientRole": "CRM Bosh Menejeri",
    "clientAvatar": "mentor",
    "title": "Avtosalon Mijozlari: VehicleBuyer va ServiceClient",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Avtodilerlik Klasteri amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **DealershipClient** (clientId {PK}, `fullName`, `passportNumber`, `contactPhone`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **VehicleBuyer** (`purchaseContractNo`, `purchasedVin`) va **ServiceClient** (`serviceHistoryCode`, `discountLevelPercent`). Bitta DealershipClient bir vaqtning o'zida ham VehicleBuyer, ham ServiceClient bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'DealershipClient' superklassiga 'VehicleBuyer' va 'ServiceClient' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Milliy Drama Teatri",
    "clientName": "Mansur Karimov",
    "clientRole": "Badiiy Rahbar",
    "clientAvatar": "mentor",
    "title": "Teatr Ijodkorlari: StageActor va PlayDirector",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Milliy Drama Teatri amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **TheatreArtist** (artistId {PK}, `stageName`, `unionCardNo`, `debutYear`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **StageActor** (`actingRoleType`, `vocalRange`) va **PlayDirector** (`directingPortfolio`, `repertoireCategory`). Bitta TheatreArtist bir vaqtning o'zida ham StageActor, ham PlayDirector bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'TheatreArtist' superklassiga 'StageActor' va 'PlayDirector' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Akademik Tibbiyot Instituti",
    "clientName": "Dr. Lola Sobirova",
    "clientRole": "Klinik Tadqiqotlar Mudiri",
    "clientAvatar": "mentor",
    "title": "Tibbiyot Xodimlari: Clinician va ClinicalTrialInvestigator",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Akademik Tibbiyot Instituti amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **MedicalStaff** (licenseNo {PK}, `doctorName`, `specialtyField`, `phone`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **Clinician** (`dailyPatientQuota`, `wardRoomCode`) va **ClinicalTrialInvestigator** (`clinicalProtocolCode`, `trialGrantNo`). Bitta MedicalStaff bir vaqtning o'zida ham Clinician, ham ClinicalTrialInvestigator bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'MedicalStaff' superklassiga 'Clinician' va 'ClinicalTrialInvestigator' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Raqamli Media Xolding",
    "clientName": "Zilola Mahmudova",
    "clientRole": "Ijodiy Direktor",
    "clientAvatar": "mentor",
    "title": "Media Ijodkorlari: VideoPresenter va AudioPodcaster",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Raqamli Media Xolding amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **ContentCreator** (creatorId {PK}, `channelName`, `subscriberTotal`, `contractExpiry`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **VideoPresenter** (`screenLanguage`, `videoStudioCode`) va **AudioPodcaster** (`podcastFeedRss`, `audioEpisodeCount`). Bitta ContentCreator bir vaqtning o'zida ham VideoPresenter, ham AudioPodcaster bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'ContentCreator' superklassiga 'VideoPresenter' va 'AudioPodcaster' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Ekspress Kuryerlik",
    "clientName": "Alisher Yusupov",
    "clientRole": "Flot Menejeri",
    "clientAvatar": "mentor",
    "title": "Haydovchilar: ExpressCourier va LongHaulDriver",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Ekspress Kuryerlik amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **FleetDriver** (driverStaffId {PK}, `driverName`, `driverLicenseNo`, `ratingStars`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **ExpressCourier** (`cityZoneCode`, `deliveriesPerShift`) va **LongHaulDriver** (`tirCarnetNo`, `heavyVehiclePermitYear`). Bitta FleetDriver bir vaqtning o'zida ham ExpressCourier, ham LongHaulDriver bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'FleetDriver' superklassiga 'ExpressCourier' va 'LongHaulDriver' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Restoranlar Zanjiri",
    "clientName": "Shavkat Saidov",
    "clientRole": "HR Menejeri",
    "clientAvatar": "mentor",
    "title": "Restoran Xizmatchilari: ChiefBartender va SommelierExpert",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Restoranlar Zanjiri amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **RestaurantStaff** (staffBadgeId {PK}, `staffName`, `foodSafetyCertDate`, `wageHourly`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **ChiefBartender** (`mixologyCertLevel`, `barStationCode`) va **SommelierExpert** (`sommelierDiplomaNo`, `cellarMasterPermit`). Bitta RestaurantStaff bir vaqtning o'zida ham ChiefBartender, ham SommelierExpert bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'RestaurantStaff' superklassiga 'ChiefBartender' va 'SommelierExpert' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Ko'chmas Mulk Birjasi",
    "clientName": "Kamola Rustamova",
    "clientRole": "Rieltorlar Uyushmasi",
    "clientAvatar": "mentor",
    "title": "Mulk Bozorida: PropertyVendor va PropertyAcquirer",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Ko'chmas Mulk Birjasi amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **RealEstateCustomer** (customerId {PK}, `fullName`, `passportPin`, `contactPhone`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **PropertyVendor** (`exclusiveListingCode`, `saleAskingPrice`) va **PropertyAcquirer** (`maxInvestmentBudget`, `desiredPropertyType`). Bitta RealEstateCustomer bir vaqtning o'zida ham PropertyVendor, ham PropertyAcquirer bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'RealEstateCustomer' superklassiga 'PropertyVendor' va 'PropertyAcquirer' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • EdTech Ta'lim Platformasi",
    "clientName": "Jaloliddin Qodirov",
    "clientRole": "Hamjamiyat Menejeri",
    "clientAvatar": "mentor",
    "title": "Platforma Foydalanuvchilari: ActiveLearner va TeachingMentor",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. EdTech Ta'lim Platformasi amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **PlatformUser** (userId {PK}, `userFullName`, `emailAddress`, `regTimestamp`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **ActiveLearner** (`enrolledCoursesCount`, `courseCertificatesTotal`) va **TeachingMentor** (`mentorHourlyFee`, `menteeSessionCount`). Bitta PlatformUser bir vaqtning o'zida ham ActiveLearner, ham TeachingMentor bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'PlatformUser' superklassiga 'ActiveLearner' va 'TeachingMentor' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "8-Qavat • Ulgurji B2B Savdo",
    "clientName": "Bahodir Olimov",
    "clientRole": "Tijorat Direktori",
    "clientAvatar": "mentor",
    "title": "Savdo Hamkorlari: RawMaterialSupplier va WholesaleDistributor",
    "story": "Tashkilot o'z faoliyatida ob'yektlarning ko'p qirrali rollarini qamrab oluvchi EER umumlashtirish modelini ishlab chiqmoqda. Ulgurji B2B Savdo amaliyotida bitta sub'yekt bir vaqtning o'zida bir nechta vazifani bajarishi mumkin.\n\nTizimning superklass ob'yekti — **TradingEnterprise** (enterpriseInn {PK}, `legalEntityName`, `bankBik`, `cityHq`) hisoblanadi.\n\nUshbu superklassdan ikkita ustma-ust tushuvchi subklass ajratiladi: **RawMaterialSupplier** (`supplyCatalogRef`, `isoQualityCert`) va **WholesaleDistributor** (`salesTerritoryRegion`, `creditLineLimit`). Bitta TradingEnterprise bir vaqtning o'zida ham RawMaterialSupplier, ham WholesaleDistributor bo'lishi, yoki ikkalasi ham bo'lmasligi mumkin: **{Optional, And}**.",
    "instruction": "'TradingEnterprise' superklassiga 'RawMaterialSupplier' va 'WholesaleDistributor' subklasslarini {Optional, And} cheklovi bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Ko'chmas Mulk Reyestri",
    "clientName": "Ziyoda Karimova",
    "clientRole": "Davlat Notariusi",
    "clientAvatar": "mentor",
    "title": "Mulk Egaligi: Owner Kategoriyasi (Person ∪ Bank ∪ Company)",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Ko'chmas Mulk Reyestri sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **Person** (pinfl {PK}), **Bank** (bankCode {PK}) va **Company** (tin {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **PropertyOwner** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'Person', 'Bank' va 'Company' entitiylarini chizing va ularni 'PropertyOwner' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Davlat Avtotransport Nazorati",
    "clientName": "Mayor Akmal Vohidov",
    "clientRole": "DYXX Ro'yxatdan O'tkazish Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Avtotransport Egasi: VehicleOwner Kategoriyasi (Citizen ∪ LeasingFirm ∪ StateAgency)",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Davlat Avtotransport Nazorati sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **PrivateCitizen** (citizenPinfl {PK}), **LeasingFirm** (leasingInn {PK}) va **StateAgency** (agencyCode {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **VehicleOwner** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'PrivateCitizen', 'LeasingFirm' va 'StateAgency' entitiylarini chizing va ularni 'VehicleOwner' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Davlat To'lovlar Kliringi",
    "clientName": "Sardor Salimov",
    "clientRole": "G'aznachilik Boshlig'i",
    "clientAvatar": "mentor",
    "title": "To'lov Qabul Qiluvchi: PayeeEntity Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Davlat To'lovlar Kliringi sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **FreelanceContractor** (freelancerId {PK}), **UtilityProvider** (utilityInn {PK}) va **TaxAuthority** (taxOfficeNo {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **PayeeEntity** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'FreelanceContractor', 'UtilityProvider' va 'TaxAuthority' entitiylarini chizing va ularni 'PayeeEntity' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Kredit Byurosi Reyestri",
    "clientName": "Nodira Qosimova",
    "clientRole": "Kredit Xatarlari Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Qarz Oluvchi: LoanBorrower Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Kredit Byurosi Reyestri sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **SoleProprietorship** (spInn {PK}), **CommercialPartnership** (partnershipNo {PK}) va **CorporationHolding** (holdingTin {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **LoanBorrower** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'SoleProprietorship', 'CommercialPartnership' va 'CorporationHolding' entitiylarini chizing va ularni 'LoanBorrower' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Notariat & Xalqaro Shartnomalar",
    "clientName": "Sherzod Jo'rayev",
    "clientRole": "Bosh Notarius",
    "clientAvatar": "mentor",
    "title": "Yuridik Hujjat Imzolovchi: LegalSignatory Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Notariat & Xalqaro Shartnomalar sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **DomesticCitizen** (residentPinfl {PK}), **ForeignDiplomat** (passportNumber {PK}) va **CorporateAttorney** (powerOfAttorneyNo {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **LegalSignatory** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'DomesticCitizen', 'ForeignDiplomat' va 'CorporateAttorney' entitiylarini chizing va ularni 'LegalSignatory' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Bojxona Tranziti",
    "clientName": "Polkovnik Baxtiyor Alimov",
    "clientRole": "Bojxona Posti Rahbari",
    "clientAvatar": "mentor",
    "title": "Bojxona Yuki Yuboruvchi: CargoConsignor Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Bojxona Tranziti sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **ManufacturingPlant** (factoryTin {PK}), **TradingHouse** (tradingLicNo {PK}) va **HumanitarianMission** (missionRegCode {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **CargoConsignor** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'ManufacturingPlant', 'TradingHouse' va 'HumanitarianMission' entitiylarini chizing va ularni 'CargoConsignor' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Intellektual Mulk Agentligi",
    "clientName": "Dr. Dilnoza Umarova",
    "clientRole": "Patent Eksperti",
    "clientAvatar": "mentor",
    "title": "Patent Huquq Egasi: PatentAssignee Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Intellektual Mulk Agentligi sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **ResearchUniversity** (universityCharterNo {PK}), **IndependentInventor** (inventorPinfl {PK}) va **TechCorporation** (corpTin {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **PatentAssignee** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'ResearchUniversity', 'IndependentInventor' va 'TechCorporation' entitiylarini chizing va ularni 'PatentAssignee' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Xalqaro Sug'urta Jamg'armasi",
    "clientName": "Ulug'bek Fayziyev",
    "clientRole": "Aktuariy Direktori",
    "clientAvatar": "mentor",
    "title": "Sug'urta Polisi Benefitsiari: PolicyBeneficiary Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Xalqaro Sug'urta Jamg'armasi sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **FamilyKin** (relativePinfl {PK}), **MortgageBank** (bankLicNo {PK}) va **CharitableTrust** (charityRegNo {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **PolicyBeneficiary** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'FamilyKin', 'MortgageBank' va 'CharitableTrust' entitiylarini chizing va ularni 'PolicyBeneficiary' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Savdo Belgilari Palatasi",
    "clientName": "Gulzoda Karimova",
    "clientRole": "Brendlar Reyestri Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Savdo Belgisi Egasi: TrademarkOwner Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Savdo Belgilari Palatasi sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **PrivateEnterpriser** (tinNo {PK}), **NonProfitOrg** (npoCertNo {PK}) va **JointStockCompany** (jscInn {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **TrademarkOwner** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'PrivateEnterpriser', 'NonProfitOrg' va 'JointStockCompany' entitiylarini chizing va ularni 'TrademarkOwner' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Sog'liqni Saqlash Jamg'armasi",
    "clientName": "Dr. Farhod Saidov",
    "clientRole": "Sug'urta Jamg'armasi Direktori",
    "clientAvatar": "mentor",
    "title": "Tibbiy Sug'urta Kafili: HealthCoverageSponsor Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Sog'liqni Saqlash Jamg'armasi sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **EmployerCompany** (employerTin {PK}), **HealthMinistry** (ministryCode {PK}) va **PrivatePhilanthropist** (donorPinfl {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **HealthCoverageSponsor** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'EmployerCompany', 'HealthMinistry' va 'PrivatePhilanthropist' entitiylarini chizing va ularni 'HealthCoverageSponsor' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Markaziy Qimmatli Qog'ozlar Depozitariysi",
    "clientName": "Mansur Shokirov",
    "clientRole": "Depozitariy Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Aksiya Egasi: ShareholderEntity Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Markaziy Qimmatli Qog'ozlar Depozitariysi sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **MutualFund** (fundRegNo {PK}), **SovereignWealthFund** (sovereignCode {PK}) va **RetailInvestor** (investorPassportNo {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **ShareholderEntity** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'MutualFund', 'SovereignWealthFund' va 'RetailInvestor' entitiylarini chizing va ularni 'ShareholderEntity' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Aeroport Uchish Yo'lagi Nazorati",
    "clientName": "Polkovnik Ravshan Normatov",
    "clientRole": "Aerodrom Texnik Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Uchish Yo'lagi Foydalanuvchisi: RunwayOperator Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Aeroport Uchish Yo'lagi Nazorati sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **CommercialAirline** (airlineIata {PK}), **AirForceSquadron** (militaryUnitCode {PK}) va **PrivateAirCharter** (charterFlightCert {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **RunwayOperator** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'CommercialAirline', 'AirForceSquadron' va 'PrivateAirCharter' entitiylarini chizing va ularni 'RunwayOperator' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Telekom Abonentlar Reyestri",
    "clientName": "Shohruh Mirzayev",
    "clientRole": "Billing Arxitektori",
    "clientAvatar": "mentor",
    "title": "Aloqa Abanenti: TelecomSubscriber Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Telekom Abonentlar Reyestri sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **IndividualSubscriber** (personalId {PK}), **CorporateSubscriber** (companyInn {PK}) va **IotDeviceGateway** (macAddressDevice {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **TelecomSubscriber** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'IndividualSubscriber', 'CorporateSubscriber' va 'IotDeviceGateway' entitiylarini chizing va ularni 'TelecomSubscriber' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Innovatsion Rivojlanish Agentligi",
    "clientName": "Prof. Temur Vohidov",
    "clientRole": "Grant Komissiyasi Raisi",
    "clientAvatar": "mentor",
    "title": "Ilmiy Grant Moliyalashtiruvchi: GrantFunder Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Innovatsion Rivojlanish Agentligi sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **StateScienceAgency** (govAgencyId {PK}), **TechConsortium** (consortiumInn {PK}) va **GlobalFoundation** (foundationRegNo {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **GrantFunder** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'StateScienceAgency', 'TechConsortium' va 'GlobalFoundation' entitiylarini chizing va ularni 'GrantFunder' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "9-Qavat • Davlat Xaridlari Portali",
    "clientName": "Aziz Sobirov",
    "clientRole": "Tender Bosh Inspektor",
    "clientAvatar": "mentor",
    "title": "Davlat Tenderi Ishtirokchisi: TenderBidder Kategoriyasi",
    "story": "Tizimda bir-biriga bog'liq bo'lmagan mustaqil superklasslarni yagona umumiy toifaga birlashtiruvchi Kategoriya (Union Type ∪) talab etiladi. Davlat Xaridlari Portali sohasida qonuniy munosabatlar turli yuridik va jismoniy shaxslar tomonidan amalga oshiriladi.\n\nTizimda uchta mustaqil entitiy mavjud: **EngineeringConsortium** (consortiumCode {PK}), **ConstructionCorp** (builderInn {PK}) va **MunicipalUtility** (utilityBranchNo {PK}).\n\nUshbu uchala turli entitiylar bitta umumiy **TenderBidder** toifasiga (Union Type ∪) ega bo'ladi va ushbu kategoriya tizimdagi boshqa operatsiyalarning asosiy sub'yekti sifatida ishtirok etadi.",
    "instruction": "'EngineeringConsortium', 'ConstructionCorp' va 'MunicipalUtility' entitiylarini chizing va ularni 'TenderBidder' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "10-Qavat • Xalqaro Aeroport Boshqaruvi",
    "clientName": "Behzod Vohidov",
    "clientRole": "Bosh Aeroport Me'mori",
    "clientAvatar": "mentor",
    "title": "Xalqaro Aeroport Kompleks Axborot Tizimi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Xalqaro Aeroport Boshqaruvi sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **Airport** (iataCode {PK}), **Terminal** (terminalId {PK}), **FlightSchedule** (flightNo {PK}) hamda **PassengerBooking** (bookingRef {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'Airport', 'Terminal', 'FlightSchedule' va 'PassengerBooking' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Markaziy Bank Kliring Markazi",
    "clientName": "Javohir Qodirov",
    "clientRole": "Bosh Bank Arxitektori",
    "clientAvatar": "mentor",
    "title": "Milliy Banklararo Hisob-Kitob va Kliring Arxitekturasi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Markaziy Bank Kliring Markazi sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **CentralBank** (centralBankCode {PK}), **CommercialBank** (bikNumber {PK}), **SettlementAccount** (correspondentAccNo {PK}) hamda **ClearingTransaction** (txRefCode {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'CentralBank', 'CommercialBank', 'SettlementAccount' va 'ClearingTransaction' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Onkologiya Ilmiy-Amaliy Markazi",
    "clientName": "Prof. Dilshod Umarov",
    "clientRole": "Klinika Texnik Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Respublika Onkologiya Markazi Davolash Tizimi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Onkologiya Ilmiy-Amaliy Markazi sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **Hospital** (hospitalId {PK}), **SpecializedWard** (wardCode {PK}), **SpecializedDoctor** (licenseId {PK}) hamda **PatientCourse** (courseId {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'Hospital', 'SpecializedWard', 'SpecializedDoctor' va 'PatientCourse' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Dengiz Konteyner Hubi",
    "clientName": "Kapitan Anvar Mahmudov",
    "clientRole": "Logistika Porti Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Trans-Okean Dengiz Porti va Konteyner Terminali",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Dengiz Konteyner Hubi sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **MegaWarehouse** (hubCode {PK}), **ContainerVessel** (imoNumber {PK}), **CustomsDeclaration** (gtdNumber {PK}) hamda **FreightForwarder** (forwarderInn {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'MegaWarehouse', 'ContainerVessel', 'CustomsDeclaration' va 'FreightForwarder' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Ko'p Tarmoqli Universitet",
    "clientName": "Prof. Sherzod Salimov",
    "clientRole": "IT Prorektor",
    "clientAvatar": "mentor",
    "title": "Xalqaro Universitet Kampusi Yagona Modeli",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Ko'p Tarmoqli Universitet sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **UniversityFaculty** (facultyCode {PK}), **AcademicDepartment** (deptId {PK}), **StaffMember** (staffNo {PK}) hamda **StudentClass** (classCode {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'UniversityFaculty', 'AcademicDepartment', 'StaffMember' va 'StudentClass' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Milliy Elektr Tarmoqlari",
    "clientName": "Akmal Qosimov",
    "clientRole": "Bosh Energetik Dispetcher",
    "clientAvatar": "mentor",
    "title": "Yagona Milliy Energotizim Dispetcherlik Arxitekturasi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Milliy Elektr Tarmoqlari sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **PowerPlant** (plantCode {PK}), **ElectricSubstation** (substationId {PK}), **TransmissionLine** (lineCode {PK}) hamda **LoadZone** (zoneId {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'PowerPlant', 'ElectricSubstation', 'TransmissionLine' va 'LoadZone' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Davlat Temir Yo'llari",
    "clientName": "Mansur Aliyev",
    "clientRole": "Bosh Poezd Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Magistral Temir Yo'l va Ekspress Qatnovlar Tizimi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Davlat Temir Yo'llari sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **RailwayNetwork** (networkId {PK}), **TrainSchedule** (scheduleTripNo {PK}), **LocomotiveEngine** (locoSerialNo {PK}) hamda **PassengerBooking** (ticketPnr {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'RailwayNetwork', 'TrainSchedule', 'LocomotiveEngine' va 'PassengerBooking' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Yagona Davlat Xizmatlari",
    "clientName": "Sanjar Normatov",
    "clientRole": "Raqamli Vazirlik Arxitektori",
    "clientAvatar": "mentor",
    "title": "Elektron Hukumat Davlat Xizmatlari Yagona Portali",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Yagona Davlat Xizmatlari sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **GovPortalService** (serviceCode {PK}), **CitizenRequest** (applicationId {PK}), **MinistryDepartment** (departmentInn {PK}) hamda **ProcessingOfficer** (officerStaffId {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'GovPortalService', 'CitizenRequest', 'MinistryDepartment' va 'ProcessingOfficer' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Biotexnologiya Farmatsevtika Zavodi",
    "clientName": "Dr. Zulfiya Rustamova",
    "clientRole": "Bosh Texnologik Arxitektor",
    "clientAvatar": "mentor",
    "title": "GMP Standartidagi Biotexnologik Zavod Axborot Klasteri",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Biotexnologiya Farmatsevtika Zavodi sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **PharmaFactory** (facilityId {PK}), **ChemicalLab** (labUnitCode {PK}), **DrugBatch** (batchNumber {PK}) hamda **QualityAudit** (auditProtocolId {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'PharmaFactory', 'ChemicalLab', 'DrugBatch' va 'QualityAudit' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Avtomobilsozlik Sanoat Klasteri",
    "clientName": "Temur Mahmudov",
    "clientRole": "Sanoat Ishlab Chiqarish Direktori",
    "clientAvatar": "mentor",
    "title": "Avtomobil Yig'uv Zavodi va Rasmiy Dilerlik Majmuasi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Avtomobilsozlik Sanoat Klasteri sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **CarManufacturer** (oemCode {PK}), **AssemblyLine** (conveyorId {PK}), **DealershipShowroom** (dealerChainId {PK}) hamda **VehicleOrder** (contractNumber {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'CarManufacturer', 'AssemblyLine', 'DealershipShowroom' va 'VehicleOrder' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Milliy Kiberxavfsizlik Markazi",
    "clientName": "Farhod Karimov",
    "clientRole": "SOC Bosh Muhandisi",
    "clientAvatar": "mentor",
    "title": "Davlat Kiberxavfsizlik Operatsion Markazi (SOC)",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Milliy Kiberxavfsizlik Markazi sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **SOCNetwork** (perimeterId {PK}), **SecurityThreat** (cveCode {PK}), **IncidentTicket** (incidentId {PK}) hamda **MitigationAction** (playbookActionId {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'SOCNetwork', 'SecurityThreat', 'IncidentTicket' va 'MitigationAction' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Milliy Gipermarketlar Zanjiri",
    "clientName": "Nargiza Jo'rayeva",
    "clientRole": "Ta'minot Zanjiri Arxitektori",
    "clientAvatar": "mentor",
    "title": "Markaziy Savdo Gipermarketlar Tarmog'i va Logistika Hubi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Milliy Gipermarketlar Zanjiri sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **RetailChainStore** (storeUnitId {PK}), **CentralDepot** (depotBarcode {PK}), **SupplierVendor** (vendorTin {PK}) hamda **ProductInventory** (inventorySku {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'RetailChainStore', 'CentralDepot', 'SupplierVendor' va 'ProductInventory' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Neft-Gaz Qayta Ishlash Majmuasi",
    "clientName": "G'ayrat Vohidov",
    "clientRole": "Bosh Texnologik Dispetcher",
    "clientAvatar": "mentor",
    "title": "Neft-Gaz Kimyo Majmuasi va Magistral Quvurlar Tizimi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Neft-Gaz Qayta Ishlash Majmuasi sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **RefineryPlant** (refineryCode {PK}), **StorageTanker** (tankId {PK}), **PipelineSegment** (pipelineSegmentCode {PK}) hamda **CrudeOilShipment** (consignmentBillOfLading {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'RefineryPlant', 'StorageTanker', 'PipelineSegment' va 'CrudeOilShipment' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Global Telekom Operator",
    "clientName": "Jamshid Aliyev",
    "clientRole": "Tarmoq Bosh Arxitektori",
    "clientAvatar": "mentor",
    "title": "5G Telekommunikatsiya Yadro Tarmog'i va Billing Arxitekturasi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Global Telekom Operator sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **TelecomCore** (coreSwitchId {PK}), **FiveGBaseStation** (gNodeBId {PK}), **BillingSubscription** (subscriberMsisdn {PK}) hamda **DataTrafficSession** (sessionCdrId {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'TelecomCore', 'FiveGBaseStation', 'BillingSubscription' va 'DataTrafficSession' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "10-Qavat • Kosmik Tadqiqotlar va Sun'iy Yo'ldoshlar",
    "clientName": "Akademik Anvar Qodirov",
    "clientRole": "Kosmik Missiyalar Bosh Arxitektori",
    "clientAvatar": "mentor",
    "title": "Global Kosmik Parvozlar va Sun'iy Yo'ldosh Boshqaruvi",
    "story": "Xalqaro korporativ darajadagi murakkab axborot tizimining butun arxitekturasini loyihalash amalga oshirilmoqda. Kosmik Tadqiqotlar va Sun'iy Yo'ldoshlar sohasida ko'plab bo'g'inlar yagona uzluksiz texnologik zanjirda faoliyat ko'rsatadi.\n\nTizimning negizida to'rtta asosiy entitiy ishtirok etadi: **Spaceport** (launchComplexId {PK}), **SatelliteOrbiter** (noradCatalogId {PK}), **GroundStation** (groundStationCode {PK}) hamda **MissionTelemetry** (telemetryFrameId {PK}).\n\nUshbu entitiylar o'zaro tabiiy ierarxiya, 1..* bo'ysunuv va operatsion munosabatlar zanjiri orqali bog'langan bo'lib, korxonaning to'liq biznes jarayonlarini ta'minlaydi.",
    "instruction": "Korporativ tizimning barcha 'Spaceport', 'SatelliteOrbiter', 'GroundStation' va 'MissionTelemetry' entitiylarini polotnoda joylashtiring va ularning aloqalarini to'g'ri o'rnating.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
