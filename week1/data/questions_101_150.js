var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Feruza Rasulova",
    "clientRole": "Respublika Sog'liqni Saqlash Boshqarmasi",
    "clientAvatar": "🩺",
    "title": "Tibbiyot Xodimlari — Shifokor va Hamshira (Physician vs Nurse)",
    "titleEn": "Medical Staff — Healthcare Staff Disjoint Subclasses (Physician vs Nurse)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKasalxona tibbiy xodimlari **HealthcareStaff** superklassida jamlanadi (`staffId`, `fullName`, `departmentCode`).\nTibbiy malakaviy litsenziyasiga ko'ra ikki qat'iy ajralgan toifa mavjud:\n1. **SpecialistPhysician** (Shifokor) — shifokorlik litsenziya raqami (`licenseNumber`) va tor klinik mutaxassisligi (`medicalSpecialty`).\n2. **ClinicalNurse** (Hamshira) — navbatchilik smena soatlari (`shiftDutyHours`) va biriktirilgan palatalar bloki (`wardAssigned`).\nXodim tibbiyotda yo shifokor lavozimida, yo hamshira lavozimida faoliyat yuritadi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `HealthcareStaff` superklassini yarating: {PK} `staffId`, `fullName`, `departmentCode`.\n2. Subklasslar: `SpecialistPhysician` va `ClinicalNurse`.\n3. Disjoint {Mandatory, Or} cheklovini o'rnating.",
    "storyEn": "Medical Staff — Healthcare Staff Disjoint Subclasses (Physician vs Nurse) — Conceptual ER business case study.",
    "instruction": "Tibbiyot xodimlari uchun Disjoint {Mandatory, Or} modelini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HealthcareStaff",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "staffId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "staffId",
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
              "name": "departmentCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SpecialistPhysician",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "ClinicalNurse",
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
        "superclass": "HealthcareStaff",
        "subs": [
          {
            "name": "SpecialistPhysician",
            "attributes": []
          },
          {
            "name": "ClinicalNurse",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HealthcareStaff",
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
              "name": "departmentCode",
              "isPK": false
            }
          ]
        },
        {
          "name": "SpecialistPhysician",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "licenseNumber",
              "isPK": false
            },
            {
              "name": "medicalSpecialty",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClinicalNurse",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "shiftDutyHours",
              "isPK": false
            },
            {
              "name": "wardAssigned",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "HealthcareStaff",
        "subs": [
          {
            "name": "SpecialistPhysician",
            "attributes": [
              "licenseNumber",
              "medicalSpecialty"
            ]
          },
          {
            "name": "ClinicalNurse",
            "attributes": [
              "shiftDutyHours",
              "wardAssigned"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "titleRu": "Медицинский персонал — раздельные подклассы медицинского персонала (врач или медсестра)",
    "storyRu": "Медицинский персонал — раздельные подклассы медицинского персонала (врач или медсестра) — концептуальное исследование бизнес-кейса скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Республиканский департамент здравоохранения"
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Alisher Muxtorov",
    "clientRole": "Alisher Navoiy Milliy Kutubxonasi",
    "clientAvatar": "📖",
    "title": "Kutubxona Resurslari — Bosma Kitob va Raqamli Disk (PrintedBook vs DigitalDisk)",
    "titleEn": "Library Catalog — Item Disjoint Subclasses (PrintedBook vs DigitalDisk)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nMilliy kutubxona fondidagi barcha asarlar **LibraryCatalogItem** superklassida ro'yxatga olinadi (`catalogId`, `title`, `publisherYear`).\nFizik tashuvchi formatiga ko'ra ikki toifa mavjud:\n1. **PrintedBook** (Bosma kitob) — 13 xonali ISBN kodi (`isbnNumber`), sahifalar soni (`pageCount`) va muqova turi (`bindingType`).\n2. **DigitalDiskMedia** (Optik disk/media) — disk formati (`mediaFormat`), xotira hajmi gigabaytda (`storageCapGb`) va mintaqaviy kod (`regionLockCode`).\nEksponat yo qog'oz kitob, yo raqamli disk hisoblanadi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `LibraryCatalogItem` superklassini chizing: {PK} `catalogId`, `title`, `publisherYear`.\n2. Subklasslar: `PrintedBook` va `DigitalDiskMedia`.\n3. Disjoint {Mandatory, Or} cheklovini qo'llang.",
    "storyEn": "Library Catalog — Item Disjoint Subclasses (PrintedBook vs DigitalDisk) — Conceptual ER business case study.",
    "instruction": "Kutubxona ashyolarining Disjoint {Mandatory, Or} modelini quring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "LibraryCatalogItem",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "catalogId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "catalogId",
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
              "name": "publisherYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PrintedBook",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "DigitalDiskMedia",
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
        "superclass": "LibraryCatalogItem",
        "subs": [
          {
            "name": "PrintedBook",
            "attributes": []
          },
          {
            "name": "DigitalDiskMedia",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "LibraryCatalogItem",
          "pk": "catalogId",
          "attributes": [
            {
              "name": "catalogId",
              "isPK": true
            },
            {
              "name": "title",
              "isPK": false
            },
            {
              "name": "publisherYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "PrintedBook",
          "pk": "catalogId",
          "attributes": [
            {
              "name": "catalogId",
              "isPK": true
            },
            {
              "name": "isbnNumber",
              "isPK": false
            },
            {
              "name": "pageCount",
              "isPK": false
            },
            {
              "name": "bindingType",
              "isPK": false
            }
          ]
        },
        {
          "name": "DigitalDiskMedia",
          "pk": "catalogId",
          "attributes": [
            {
              "name": "catalogId",
              "isPK": true
            },
            {
              "name": "mediaFormat",
              "isPK": false
            },
            {
              "name": "storageCapGb",
              "isPK": false
            },
            {
              "name": "regionLockCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "LibraryCatalogItem",
        "subs": [
          {
            "name": "PrintedBook",
            "attributes": [
              "isbnNumber",
              "pageCount",
              "bindingType"
            ]
          },
          {
            "name": "DigitalDiskMedia",
            "attributes": [
              "mediaFormat",
              "storageCapGb",
              "regionLockCode"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "titleRu": "Каталог библиотеки — непересекающиеся подклассы элементов (PrintedBook и DigitalDisk)",
    "storyRu": "Каталог библиотеки — непересекающиеся подклассы элементов (PrintedBook и DigitalDisk) — концептуальное бизнес-пример ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Национальная библиотека Алишера Навои"
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Sardor Po'latov",
    "clientRole": "Havo Floti Texnik Nazorati",
    "clientAvatar": "🛫",
    "title": "Aviapark — Yo'lovchi Layneri va Yuk Samolyoti (PassengerAirbus vs CargoFreighter)",
    "titleEn": "Air Fleet — Aircraft Disjoint Subclasses (PassengerAirbus vs CargoFreighter)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nAviakompaniya aviaparkidagi barcha samolyotlar **AircraftFleetUnit** superklassida yuritiladi (`tailNumber`, `manufacturer`, `engineCount`).\nSamolyotning konstruksion modifikatsiyasiga binoan qat'iy ikki toifa mavjud:\n1. **PassengerAirbus** (Yo'lovchi samolyoti) — ekonom o'rindiqlar soni (`economySeats`) va biznes o'rindiqlar soni (`businessSeats`).\n2. **CargoFreighter** (Yuk layneri) — standart yuk palletlari o'rni soni (`cargoPalletSlots`) va maksimal yuk ko'tarish tonnaji (`maxPayloadTons`).\nSamolyot ayni parvoz sertifikatida yo yo'lovchi, yo yuk layneri bo'ladi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `AircraftFleetUnit` superklassi: {PK} `tailNumber`, `manufacturer`, `engineCount`.\n2. Subklasslar: `PassengerAirbus` va `CargoFreighter`.\n3. Disjoint {Mandatory, Or} shartini tanlang.",
    "storyEn": "Air Fleet — Aircraft Disjoint Subclasses (PassengerAirbus vs CargoFreighter) — Conceptual ER business case study.",
    "instruction": "Aviapark uchun Disjoint {Mandatory, Or} modelini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AircraftFleetUnit",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "tailNumber",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "tailNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "manufacturer",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "engineCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PassengerAirbus",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "CargoFreighter",
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
        "superclass": "AircraftFleetUnit",
        "subs": [
          {
            "name": "PassengerAirbus",
            "attributes": []
          },
          {
            "name": "CargoFreighter",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AircraftFleetUnit",
          "pk": "tailNumber",
          "attributes": [
            {
              "name": "tailNumber",
              "isPK": true
            },
            {
              "name": "manufacturer",
              "isPK": false
            },
            {
              "name": "engineCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerAirbus",
          "pk": "tailNumber",
          "attributes": [
            {
              "name": "tailNumber",
              "isPK": true
            },
            {
              "name": "economySeats",
              "isPK": false
            },
            {
              "name": "businessSeats",
              "isPK": false
            }
          ]
        },
        {
          "name": "CargoFreighter",
          "pk": "tailNumber",
          "attributes": [
            {
              "name": "tailNumber",
              "isPK": true
            },
            {
              "name": "cargoPalletSlots",
              "isPK": false
            },
            {
              "name": "maxPayloadTons",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "AircraftFleetUnit",
        "subs": [
          {
            "name": "PassengerAirbus",
            "attributes": [
              "economySeats",
              "businessSeats"
            ]
          },
          {
            "name": "CargoFreighter",
            "attributes": [
              "cargoPalletSlots",
              "maxPayloadTons"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "titleRu": "Воздушный флот - непересекающиеся подклассы самолетов (пассажирские и грузовые самолеты)",
    "storyRu": "Воздушный флот — непересекающиеся подклассы воздушных судов (PassengerAirbus и CargoFreighter) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Технический контроль воздушного флота"
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Baxrom Zokirov",
    "clientRole": "O'zagrosug'urta Bosh Anderrayteri",
    "clientAvatar": "📄",
    "title": "Sug'urta Polislari — Avto Kasko va Ko'chmas Mulk Yong'in Polisi (AutoCasco vs PropertyFire)",
    "titleEn": "Insurance Policies — Policy Disjoint Subclasses (AutoCasco vs PropertyFire)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nSug'urta kompaniyasida barcha rasmiylashtirilgan polislar **InsurancePolicy** superklassida yuritiladi (`policyNo`, `issueDate`, `premiumCost`).\nSug'urtalangan mulk ob'ektiga ko'ra ikki toifa mavjud:\n1. **MotorCascoPolicy** (Kasko polisi) — avtomobil VIN kodi (`vehicleVinCode`) va dvigatel ot kuchi (`enginePowerHp`).\n2. **PropertyFirePolicy** (Yong'indan sug'urtalash) — bino kadastr raqami (`buildingCadastreNo`) va yong'inga qarshi sprinkler tizimi (`fireSprinklersInstalled`).\nPolis yo avto Kaskoga, yo ko'chmas mulk yong'in sug'urtasiga rasmiylashtiriladi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `InsurancePolicy` superklassi: {PK} `policyNo`, `issueDate`, `premiumCost`.\n2. Subklasslar: `MotorCascoPolicy` va `PropertyFirePolicy`.\n3. Disjoint {Mandatory, Or} ierarxiyasini o'rnating.",
    "storyEn": "Insurance Policies — Policy Disjoint Subclasses (AutoCasco vs PropertyFire) — Conceptual ER business case study.",
    "instruction": "Sug'urta polislari uchun Disjoint {Mandatory, Or} modelini polotnoda quring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "InsurancePolicy",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "policyNo",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issueDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "premiumCost",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MotorCascoPolicy",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "PropertyFirePolicy",
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
        "superclass": "InsurancePolicy",
        "subs": [
          {
            "name": "MotorCascoPolicy",
            "attributes": []
          },
          {
            "name": "PropertyFirePolicy",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "InsurancePolicy",
          "pk": "policyNo",
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "issueDate",
              "isPK": false
            },
            {
              "name": "premiumCost",
              "isPK": false
            }
          ]
        },
        {
          "name": "MotorCascoPolicy",
          "pk": "policyNo",
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "vehicleVinCode",
              "isPK": false
            },
            {
              "name": "enginePowerHp",
              "isPK": false
            }
          ]
        },
        {
          "name": "PropertyFirePolicy",
          "pk": "policyNo",
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true
            },
            {
              "name": "buildingCadastreNo",
              "isPK": false
            },
            {
              "name": "fireSprinklersInstalled",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "InsurancePolicy",
        "subs": [
          {
            "name": "MotorCascoPolicy",
            "attributes": [
              "vehicleVinCode",
              "enginePowerHp"
            ]
          },
          {
            "name": "PropertyFirePolicy",
            "attributes": [
              "buildingCadastreNo",
              "fireSprinklersInstalled"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "titleRu": "Страховые полисы — непересекающиеся подклассы полисов (AutoCasco и PropertyFire)",
    "storyRu": "Страховые полисы — непересекающиеся подклассы полисов (AutoCasco против PropertyFire) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный андеррайтер самострахования"
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "O'rta",
    "clientName": "Otabek Saidov",
    "clientRole": "CloudSaaS Platforma Mahsulot Menejeri",
    "clientAvatar": "☁️",
    "title": "Bulutli Obuna — Bepul va Korporativ Tarif Rejasi (FreeTier vs EnterprisePaid)",
    "titleEn": "Cloud SaaS — Subscription Disjoint Subclasses (FreeTier vs EnterprisePaid)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nBulutli dasturiy xizmatda (SaaS) foydalanuvchilarning hisobi **SaaSAccount** superklassida saqlanadi (`accountId`, `signupDate`, `primaryDomain`).\nFoydalanuvchi obuna paketiga ko'ra ikki kesishmaydigan guruhga ajratiladi:\n1. **FreeTierAccount** (Bepul havaskor obuna) — reklama bannerlari yoqilganligi (`adBannersEnabled`) va oylik tekin trafik kvotasi (`monthlyTrafficMb`).\n2. **EnterprisePaidAccount** (Pullik korporativ obuna) — ajratilgan shaxsiy IP manzil (`dedicatedIpAddress`), SLA kafolat foizi (`slaUptimeTarget`) va litsenziyali foydalanuvchi o'rinlari (`seatLicensesCount`).\nBitta mijoz hisobi yo bepul, yo pullik korporativ hisob bo'ladi ({Mandatory, Or}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `SaaSAccount` superklassi: {PK} `accountId`, `signupDate`, `primaryDomain`.\n2. Subklasslar: `FreeTierAccount` va `EnterprisePaidAccount`.\n3. Disjoint {Mandatory, Or} shartini belgilang.",
    "storyEn": "Cloud SaaS — Subscription Disjoint Subclasses (FreeTier vs EnterprisePaid) — Conceptual ER business case study.",
    "instruction": "Bulutli hisoblar uchun Disjoint {Mandatory, Or} modelini loyihalashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SaaSAccount",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "accountId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "accountId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "signupDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "primaryDomain",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FreeTierAccount",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "EnterprisePaidAccount",
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
        "superclass": "SaaSAccount",
        "subs": [
          {
            "name": "FreeTierAccount",
            "attributes": []
          },
          {
            "name": "EnterprisePaidAccount",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SaaSAccount",
          "pk": "accountId",
          "attributes": [
            {
              "name": "accountId",
              "isPK": true
            },
            {
              "name": "signupDate",
              "isPK": false
            },
            {
              "name": "primaryDomain",
              "isPK": false
            }
          ]
        },
        {
          "name": "FreeTierAccount",
          "pk": "accountId",
          "attributes": [
            {
              "name": "accountId",
              "isPK": true
            },
            {
              "name": "adBannersEnabled",
              "isPK": false
            },
            {
              "name": "monthlyTrafficMb",
              "isPK": false
            }
          ]
        },
        {
          "name": "EnterprisePaidAccount",
          "pk": "accountId",
          "attributes": [
            {
              "name": "accountId",
              "isPK": true
            },
            {
              "name": "dedicatedIpAddress",
              "isPK": false
            },
            {
              "name": "slaUptimeTarget",
              "isPK": false
            },
            {
              "name": "seatLicensesCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "SaaSAccount",
        "subs": [
          {
            "name": "FreeTierAccount",
            "attributes": [
              "adBannersEnabled",
              "monthlyTrafficMb"
            ]
          },
          {
            "name": "EnterprisePaidAccount",
            "attributes": [
              "dedicatedIpAddress",
              "slaUptimeTarget",
              "seatLicensesCount"
            ]
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    },
    "titleRu": "Облачное SaaS — непересекающиеся подклассы подписки (FreeTier и EnterprisePaid)",
    "storyRu": "Облачное SaaS — непересекающиеся подклассы подписки (FreeTier и EnterprisePaid) — концептуальное бизнес-пример ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер по продукту платформы CloudSaaS"
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Prof. Sherzod G'ulomov",
    "clientRole": "WIUT Ilmiy Tadqiqotlar Prorektori",
    "clientAvatar": "👨‍🏫",
    "title": "WIUT Xodimlari — O'qituvchi va Tadqiqotchi Kesishuvi (Instructor & Researcher)",
    "titleEn": "WIUT Faculty — Overlapping Staff Subclasses (Instructor & Researcher)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nToshkentdagi Xalqaro Vestminster Universitetida barcha akademik xodimlar umumiy **FacultyStaff** superklassida yuritiladi. Biroq universitet faoliyatida o'qitish va ilm-fan uzviy bog'langan:\n1. **AcademicInstructor** — bevosita ma'ruza va seminar o'tuvchi ustozlar. Ularga o'quv soatlari hajmi (`teachingHours`) va pedagogik baholash reytingi (`studentEvalScore`) xosdir.\n2. **ResearchFellow** — xalqaro ilmiy grantlar ustida ishlovchi tadqiqotchilar. Ularga Scopus maqolalari soni (`scopusPapersCount`) va jalb qilingan grant miqdori (`grantFundingSum`) xosdir.\nMuhim tomoni: ko'plab professorlar BIR VAQTNING O'ZIDA ham dars beradi, ham ilmiy grantni boshqaradi! Ya'ni bitta xodim har ikkala subklassga teng a'zo bo'lishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FacultyStaff` superklassini yarating: {PK} `staffId`, `fullName`, `academicDegree`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `AcademicInstructor`: `teachingHours`, `studentEvalScore`.\n   - `ResearchFellow`: `scopusPapersCount`, `grantFundingSum`.\n3. Overlapping ierarxiya cheklovini {Optional, And} deb belgilang.",
    "storyEn": "WIUT Faculty — Overlapping Staff Subclasses (Instructor & Researcher) — Conceptual ER business case study.",
    "instruction": "'FacultyStaff' superklassini va uning kesishuvchi 'AcademicInstructor' hamda 'ResearchFellow' subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FacultyStaff",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "staffId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "staffId",
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
              "name": "academicDegree",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AcademicInstructor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "ResearchFellow",
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
        "superclass": "FacultyStaff",
        "subs": [
          {
            "name": "AcademicInstructor",
            "attributes": []
          },
          {
            "name": "ResearchFellow",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FacultyStaff",
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
              "name": "academicDegree",
              "isPK": false
            }
          ]
        },
        {
          "name": "AcademicInstructor",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "teachingHours",
              "isPK": false
            },
            {
              "name": "studentEvalScore",
              "isPK": false
            }
          ]
        },
        {
          "name": "ResearchFellow",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "scopusPapersCount",
              "isPK": false
            },
            {
              "name": "grantFundingSum",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "FacultyStaff",
        "subs": [
          {
            "name": "AcademicInstructor",
            "attributes": [
              "teachingHours",
              "studentEvalScore"
            ]
          },
          {
            "name": "ResearchFellow",
            "attributes": [
              "scopusPapersCount",
              "grantFundingSum"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Факультет WIUT — перекрывающиеся подклассы персонала (преподаватель и исследователь)",
    "storyRu": "Факультет WIUT — перекрывающиеся подклассы персонала (преподаватель и исследователь) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "МВУТ, вице-канцлер по научным исследованиям"
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Nargiza Ahmedova",
    "clientRole": "Kapitalbank Chakana Biznes Boshlig'i",
    "clientAvatar": "🏦",
    "title": "Bank Mijozlari — Omonatchi va Qarz Oluvchi Kesishuvi (Depositor & Borrower)",
    "titleEn": "Retail Banking — Overlapping Customer Subclasses (Depositor & Borrower)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKapitalbank tizimida har bir ro'yxatga olingan jismoniy shaxs **BankCustomer** superklassida saqlanadi. Mijoz bank bilan turli moliyaviy munosabatlarga kirishishi mumkin:\n1. **DepositCustomer** — bankka muddatli yoki talab qilib olinguncha omonat qo'ygan mijoz. Faqat unga jamg'arma balansi (`savingsBalance`) va foiz to'lash sanasi (`interestDueDate`) hisoblanadi.\n2. **LoanBorrower** — ipoteka yoki avtokredit olgan mijoz. Faqat unga tasdiqlangan qarz limiti (`loanPrincipalLimit`) va kredit skoring balli (`creditScore`) tegishli.\nKo'p hollarda mijoz bir vaqtning o'zida ham depozit ochgan, ham avtokredit to'lab boradi. Shuning uchun bu ikkala toifa kesishuvchidir ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `BankCustomer` superklassini chizing: {PK} `customerId`, `pinfl`, `customerName`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `DepositCustomer`: `savingsBalance`, `interestDueDate`.\n   - `LoanBorrower`: `loanPrincipalLimit`, `creditScore`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Retail Banking — Overlapping Customer Subclasses (Depositor & Borrower) — Conceptual ER business case study.",
    "instruction": "'BankCustomer' superklassini va uning kesishuvchi 'DepositCustomer' hamda 'LoanBorrower' subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankCustomer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "customerId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "customerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pinfl",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "customerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DepositCustomer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "LoanBorrower",
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
        "superclass": "BankCustomer",
        "subs": [
          {
            "name": "DepositCustomer",
            "attributes": []
          },
          {
            "name": "LoanBorrower",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BankCustomer",
          "pk": "customerId",
          "attributes": [
            {
              "name": "customerId",
              "isPK": true
            },
            {
              "name": "pinfl",
              "isPK": false
            },
            {
              "name": "customerName",
              "isPK": false
            }
          ]
        },
        {
          "name": "DepositCustomer",
          "pk": "customerId",
          "attributes": [
            {
              "name": "customerId",
              "isPK": true
            },
            {
              "name": "savingsBalance",
              "isPK": false
            },
            {
              "name": "interestDueDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "LoanBorrower",
          "pk": "customerId",
          "attributes": [
            {
              "name": "customerId",
              "isPK": true
            },
            {
              "name": "loanPrincipalLimit",
              "isPK": false
            },
            {
              "name": "creditScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "BankCustomer",
        "subs": [
          {
            "name": "DepositCustomer",
            "attributes": [
              "savingsBalance",
              "interestDueDate"
            ]
          },
          {
            "name": "LoanBorrower",
            "attributes": [
              "loanPrincipalLimit",
              "creditScore"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Розничный банкинг — перекрывающиеся подклассы клиентов (вкладчик и заемщик)",
    "storyRu": "Розничный банкинг — перекрывающиеся подклассы клиентов (вкладчик и заемщик) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель розничного бизнеса Капиталбанка"
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Akmal Saidov",
    "clientRole": "Uzum Market E-commerce Arxitektori",
    "clientAvatar": "🛍️",
    "title": "Uzum Market — Foydalanuvchi: Xaridor va Sotuvchi (Buyer & Seller)",
    "titleEn": "Uzum Market — Overlapping User Subclasses (Buyer & Seller)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nUzum Market ekotizimida barcha akkauntlar yagona **PlatformUser** superklassida yuritiladi.\nFoydalanuvchilar platformada ikki xil rolda ishtirok etishi mumkin:\n1. **OnlineBuyer** — mahsulot xarid qiluvchi mijoz. Unga yetkazish manzili (`defaultShippingAddress`) va to'plangan cashback ballari (`cashbackBalance`) xosdir.\n2. **MerchantSeller** — o'z do'konini ochgan tadbirkor. Unga do'kon yuridik INN raqami (`merchantTaxId`) va do'kon reytingi (`sellerRating`) xosdir.\nO'zbekistonda yuzlab tadbirkorlar o'z do'konida tovar sotish bilan birga boshqa tovarlarni o'zi uchun sotib ham oladi. Shu bois akkaunt bir vaqtning o'zida ikkala subklassga tegishli bo'lishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `PlatformUser` superklassini yarating: {PK} `userId`, `phoneNumber`, `registeredAt`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `OnlineBuyer`: `defaultShippingAddress`, `cashbackBalance`.\n   - `MerchantSeller`: `merchantTaxId`, `sellerRating`.\n3. {Optional, And} ierarxiyasini o'rnating.",
    "storyEn": "Uzum Market — Overlapping User Subclasses (Buyer & Seller) — Conceptual ER business case study.",
    "instruction": "'PlatformUser' superklassini va uning 'OnlineBuyer' hamda 'MerchantSeller' subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PlatformUser",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "userId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "userId",
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
              "name": "registeredAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "OnlineBuyer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "MerchantSeller",
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
        "superclass": "PlatformUser",
        "subs": [
          {
            "name": "OnlineBuyer",
            "attributes": []
          },
          {
            "name": "MerchantSeller",
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
              "name": "phoneNumber",
              "isPK": false
            },
            {
              "name": "registeredAt",
              "isPK": false
            }
          ]
        },
        {
          "name": "OnlineBuyer",
          "pk": "userId",
          "attributes": [
            {
              "name": "userId",
              "isPK": true
            },
            {
              "name": "defaultShippingAddress",
              "isPK": false
            },
            {
              "name": "cashbackBalance",
              "isPK": false
            }
          ]
        },
        {
          "name": "MerchantSeller",
          "pk": "userId",
          "attributes": [
            {
              "name": "userId",
              "isPK": true
            },
            {
              "name": "merchantTaxId",
              "isPK": false
            },
            {
              "name": "sellerRating",
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
            "name": "OnlineBuyer",
            "attributes": [
              "defaultShippingAddress",
              "cashbackBalance"
            ]
          },
          {
            "name": "MerchantSeller",
            "attributes": [
              "merchantTaxId",
              "sellerRating"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Uzum Market — перекрывающиеся подклассы пользователей (покупатель и продавец)",
    "storyRu": "Рынок Uzum — перекрывающиеся подклассы пользователей (покупатель и продавец) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Архитектор электронной коммерции Uzum Market"
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Dr. Kamola Rahimova",
    "clientRole": "Respublika Xirurgiya Markazi Katta Ilmiy Xodimi",
    "clientAvatar": "👩‍⚕️",
    "title": "Tibbiyot Markazi — Amaliyotchi Jarroh va Ilmiy Sinovchi (Surgeon & TrialInvestigator)",
    "titleEn": "Medical Center — Overlapping Physician Subclasses (Surgeon & TrialInvestigator)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nIxtisoslashtirilgan xirurgiya markazida barcha yetakchi shifokorlar **MedicalSpecialist** superklassida ro'yxatdan o'tadi.\nKlinika shifokorlari amaliyot va ilmiy faoliyatni birgalikda olib boradi:\n1. **OperatingSurgeon** — murakkab operatsiyalarni o'tkazuvchi jarroh. Unga litsenziyalangan operatsiya turlari (`surgicalSpecialty`) va muvaffaqiyatli operatsiyalar soni (`surgeriesConducted`) xosdir.\n2. **ClinicalTrialInvestigator** — yangi dori-darmon va uslublarni klinik sinovdan o'tkazuvchi tadqiqotchi. Unga sinov protokoli kodi (`activeTrialProtocol`) va xalqaro sertifikat (`gcpCertificationDate`) xosdir.\nYetakchi shifokor ham jarrohlik stolida operatsiya qilishi, ham yangi davolash protokolini ilmiy sinovdan o'tkazishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `MedicalSpecialist` superklassini yarating: {PK} `physicianId`, `physicianName`, `hospitalDept`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `OperatingSurgeon`: `surgicalSpecialty`, `surgeriesConducted`.\n   - `ClinicalTrialInvestigator`: `activeTrialProtocol`, `gcpCertificationDate`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Medical Center — Overlapping Physician Subclasses (Surgeon & TrialInvestigator) — Conceptual ER business case study.",
    "instruction": "'MedicalSpecialist' superklassini va uning kesishuvchi jarroh hamda tadqiqotchi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MedicalSpecialist",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "physicianId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "physicianId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "physicianName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hospitalDept",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "OperatingSurgeon",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "ClinicalTrialInvestigator",
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
        "superclass": "MedicalSpecialist",
        "subs": [
          {
            "name": "OperatingSurgeon",
            "attributes": []
          },
          {
            "name": "ClinicalTrialInvestigator",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MedicalSpecialist",
          "pk": "physicianId",
          "attributes": [
            {
              "name": "physicianId",
              "isPK": true
            },
            {
              "name": "physicianName",
              "isPK": false
            },
            {
              "name": "hospitalDept",
              "isPK": false
            }
          ]
        },
        {
          "name": "OperatingSurgeon",
          "pk": "physicianId",
          "attributes": [
            {
              "name": "physicianId",
              "isPK": true
            },
            {
              "name": "surgicalSpecialty",
              "isPK": false
            },
            {
              "name": "surgeriesConducted",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClinicalTrialInvestigator",
          "pk": "physicianId",
          "attributes": [
            {
              "name": "physicianId",
              "isPK": true
            },
            {
              "name": "activeTrialProtocol",
              "isPK": false
            },
            {
              "name": "gcpCertificationDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "MedicalSpecialist",
        "subs": [
          {
            "name": "OperatingSurgeon",
            "attributes": [
              "surgicalSpecialty",
              "surgeriesConducted"
            ]
          },
          {
            "name": "ClinicalTrialInvestigator",
            "attributes": [
              "activeTrialProtocol",
              "gcpCertificationDate"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Медицинский центр — перекрывающиеся подклассы врачей (хирург и исследователь)",
    "storyRu": "Медицинский центр — перекрывающиеся подклассы врачей (хирург и исследователь) — Концептуальный бизнес-кейс отделения скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Старший научный сотрудник Республиканского хирургического центра"
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Mansur Qodirov",
    "clientRole": "O'zbekiston Milliy Olimpiya Qo'mitasi Koordinatori",
    "clientAvatar": "🏅",
    "title": "Sport Klubi — Sportchi va Murabbiy Kesishuvi (Athlete & Coach)",
    "titleEn": "Athletic Club — Overlapping Member Subclasses (Athlete & Coach)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nProfessional sport klubi a'zolari umumiy **SportsMember** superklassida yuritiladi. Sport olamida tajribali sportchilar ko'pincha yoshlarga ustozlik ham qiladi:\n1. **ClubAthlete** — musobaqalarda qatnashuvchi faol sportchi. Unga sport toifasi (`athleticRanking`) va shaxsiy eng yaxshi natijasi (`personalBestRecord`) xosdir.\n2. **TeamCoach** — jamoa a'zolarini tayyorlovchi murabbiy. Unga murabbiylik litsenziya darajasi (`coachingLicenseGrade`) va tayyorlagan shogirdlari soni (`mentoredAthletesCount`) xosdir.\nFaxriy kurashchi yoki dzyudochi bir vaqtning o'zida o'zi tatamiga chiqishi va yoshlar guruhiga murabbiylik qilishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `SportsMember` superklassini chizing: {PK} `memberId`, `athleteName`, `birthDate`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `ClubAthlete`: `athleticRanking`, `personalBestRecord`.\n   - `TeamCoach`: `coachingLicenseGrade`, `mentoredAthletesCount`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Athletic Club — Overlapping Member Subclasses (Athlete & Coach) — Conceptual ER business case study.",
    "instruction": "'SportsMember' superklassini va 'ClubAthlete' hamda 'TeamCoach' kesishuvchi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SportsMember",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "memberId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "memberId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "athleteName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "birthDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ClubAthlete",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "TeamCoach",
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
        "superclass": "SportsMember",
        "subs": [
          {
            "name": "ClubAthlete",
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
          "name": "SportsMember",
          "pk": "memberId",
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "athleteName",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClubAthlete",
          "pk": "memberId",
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "athleticRanking",
              "isPK": false
            },
            {
              "name": "personalBestRecord",
              "isPK": false
            }
          ]
        },
        {
          "name": "TeamCoach",
          "pk": "memberId",
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "coachingLicenseGrade",
              "isPK": false
            },
            {
              "name": "mentoredAthletesCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "SportsMember",
        "subs": [
          {
            "name": "ClubAthlete",
            "attributes": [
              "athleticRanking",
              "personalBestRecord"
            ]
          },
          {
            "name": "TeamCoach",
            "attributes": [
              "coachingLicenseGrade",
              "mentoredAthletesCount"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Спортивный клуб — перекрывающиеся подклассы членов (спортсмен и тренер)",
    "storyRu": "Спортивный клуб — перекрывающиеся подклассы членов (спортсмен и тренер) — концептуальное экономическое исследование скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Координатор Национального олимпийского комитета Узбекистана"
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Sanjar Yoqubov",
    "clientRole": "Uzbekistan Airways Aviatsiya Xavfsizligi Direktori",
    "clientAvatar": "✈️",
    "title": "Aviakompaniya — Layner Uchuvchisi va Parvoz Xavfsizligi Inspektori (Pilot & SafetyAuditor)",
    "titleEn": "Airlines — Overlapping Flight Crew Subclasses (Pilot & SafetyAuditor)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nUzbekistan Airways aviakompaniyasining parvozlar tarkibi **AviationFlightCrew** superklassida yuritiladi.\nTarkibdagi yuqori malakali komandirlar ko'pincha inspektorlik vazifasini ham bajaradilar:\n1. **CommercialPilot** — yo'lovchi laynerlarini boshqaruvchi uchuvchi. Unga parvoz soatlari hisobi (`flightLogHours`) va litsenziya toifasi (`pilotLicenseType`) xosdir.\n2. **FlightSafetyAuditor** — bort xavfsizligi standartlarini tekshiruvchi auditor. Unga audit akkreditatsiyasi (`icaoAuditCertId`) va o'tkazilgan xavfsizlik tekshiruvlari (`auditsCompleted`) xosdir.\nKomandir-uchuvchi navbatdagi reysni boshqarishi bilan birga, keyingi haftada boshqa ekipajning parvoz xavfsizligini taftish qiluvchi inspektor sifatida uchishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `AviationFlightCrew` superklassini yarating: {PK} `crewBadgeId`, `fullName`, `rankTitle`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `CommercialPilot`: `flightLogHours`, `pilotLicenseType`.\n   - `FlightSafetyAuditor`: `icaoAuditCertId`, `auditsCompleted`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Airlines — Overlapping Flight Crew Subclasses (Pilot & SafetyAuditor) — Conceptual ER business case study.",
    "instruction": "'AviationFlightCrew' superklassini va uning uchuvchi hamda xavfsizlik auditori subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AviationFlightCrew",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "crewBadgeId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "crewBadgeId",
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
              "name": "rankTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CommercialPilot",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "FlightSafetyAuditor",
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
        "superclass": "AviationFlightCrew",
        "subs": [
          {
            "name": "CommercialPilot",
            "attributes": []
          },
          {
            "name": "FlightSafetyAuditor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AviationFlightCrew",
          "pk": "crewBadgeId",
          "attributes": [
            {
              "name": "crewBadgeId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "rankTitle",
              "isPK": false
            }
          ]
        },
        {
          "name": "CommercialPilot",
          "pk": "crewBadgeId",
          "attributes": [
            {
              "name": "crewBadgeId",
              "isPK": true
            },
            {
              "name": "flightLogHours",
              "isPK": false
            },
            {
              "name": "pilotLicenseType",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightSafetyAuditor",
          "pk": "crewBadgeId",
          "attributes": [
            {
              "name": "crewBadgeId",
              "isPK": true
            },
            {
              "name": "icaoAuditCertId",
              "isPK": false
            },
            {
              "name": "auditsCompleted",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "AviationFlightCrew",
        "subs": [
          {
            "name": "CommercialPilot",
            "attributes": [
              "flightLogHours",
              "pilotLicenseType"
            ]
          },
          {
            "name": "FlightSafetyAuditor",
            "attributes": [
              "icaoAuditCertId",
              "auditsCompleted"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Авиакомпании — перекрывающиеся подклассы летных экипажей (Pilot & SafetyAuditor)",
    "storyRu": "Авиакомпании — перекрывающиеся подклассы летных экипажей (Pilot & SafetyAuditor) — концептуальное экономическое исследование ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Директор по авиационной безопасности «Узбекистон хаво йуллари»"
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Temur Aliyev",
    "clientRole": "Rohat Avtosalon Mijozlar Aloqalari Boshlig'i",
    "clientAvatar": "🚘",
    "title": "Avtosalon — Avtomobil Xaridori va Servis Mijozi (Buyer & ServiceClient)",
    "titleEn": "Auto Dealership — Overlapping Client Subclasses (Buyer & ServiceClient)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nRasmiy avtosalonda har bir mijoz yagona **DealershipClient** superklassida ro'yxatga olinadi.\nMijoz avtosalonga ikki xil maqsad bilan murojaat qiladi:\n1. **VehicleBuyer** — yangi avtomobil sotib oluvchi mijoz. Unga shartnoma bo'nak summasi (`downPaymentSum`) va shartnoma holati (`salesContractStatus`) tegishlidir.\n2. **ServiceContractClient** — avtomobiliga kafolatli texnik xizmat ko'rsatishga kelgan mijoz. Unga servis kitobchasi kodi (`serviceBookNumber`) va moy almashtirish oraliq masofasi (`lastServiceMileage`) tegishlidir.\nAvtomobil sotib olgan xaridor bir necha oydan keyin avtosalonning texnik servis mijoziga aylanadi va ikkala rolni ham o'zida saqlab qoladi ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `DealershipClient` superklassini yarating: {PK} `clientId`, `clientName`, `phoneNum`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `VehicleBuyer`: `downPaymentSum`, `salesContractStatus`.\n   - `ServiceContractClient`: `serviceBookNumber`, `lastServiceMileage`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Auto Dealership — Overlapping Client Subclasses (Buyer & ServiceClient) — Conceptual ER business case study.",
    "instruction": "'DealershipClient' superklassini va uning xaridor hamda servis mijozi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DealershipClient",
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
              "name": "clientName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phoneNum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "VehicleBuyer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "ServiceContractClient",
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
        "superclass": "DealershipClient",
        "subs": [
          {
            "name": "VehicleBuyer",
            "attributes": []
          },
          {
            "name": "ServiceContractClient",
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
              "name": "clientName",
              "isPK": false
            },
            {
              "name": "phoneNum",
              "isPK": false
            }
          ]
        },
        {
          "name": "VehicleBuyer",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "downPaymentSum",
              "isPK": false
            },
            {
              "name": "salesContractStatus",
              "isPK": false
            }
          ]
        },
        {
          "name": "ServiceContractClient",
          "pk": "clientId",
          "attributes": [
            {
              "name": "clientId",
              "isPK": true
            },
            {
              "name": "serviceBookNumber",
              "isPK": false
            },
            {
              "name": "lastServiceMileage",
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
            "attributes": [
              "downPaymentSum",
              "salesContractStatus"
            ]
          },
          {
            "name": "ServiceContractClient",
            "attributes": [
              "serviceBookNumber",
              "lastServiceMileage"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Автосалон — перекрывающиеся подклассы клиентов (покупатель и клиент обслуживания)",
    "storyRu": "Автосалон — перекрывающиеся подклассы клиентов (покупатель и клиент-сервис) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Рохат Автосалон Руководитель отдела по работе с клиентами"
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Gulnora Ergasheva",
    "clientRole": "Alisher Navoiy Nomidagi Milliy Teatr Bosh Rejissyori",
    "clientAvatar": "🎭",
    "title": "Davlat Teatri — Aktyor va Sahnalashtiruvchi Rejissyor (Actor & StageDirector)",
    "titleEn": "National Theatre — Overlapping Artist Subclasses (Actor & StageDirector)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nMilliy akademik teatr truppasining barcha a'zolari umumiy **TheatreArtist** superklassida yuritiladi.\nTeatr ijodiy jamoasida ko'plab iste'dodli san'atkorlar ikki yo'nalishda faoliyat yuritadi:\n1. **DramaticActor** — spektakllarda rol ijro etuvchi aktyor. Unga ovoz tembri (`vocalRange`) va asosiy ampluasi (`actingRoleType`) xosdir.\n2. **StageDirector** — spektakllarni sahnalashtiruvchi rejissyor. Unga sahnalashtirgan spektakllari soni (`productionsStaged`) va davlat mukofotlari (`artisticAwards`) xosdir.\nYetakchi san'atkor o'zi bosh rolni ijro etishi bilan birga spektaklga rejissyorlik qilishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `TheatreArtist` superklassini chizing: {PK} `artistId`, `stageName`, `joinedYear`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `DramaticActor`: `vocalRange`, `actingRoleType`.\n   - `StageDirector`: `productionsStaged`, `artisticAwards`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "National Theatre — Overlapping Artist Subclasses (Actor & StageDirector) — Conceptual ER business case study.",
    "instruction": "'TheatreArtist' superklassini va uning 'DramaticActor' hamda 'StageDirector' subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TheatreArtist",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "artistId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "artistId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "stageName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "joinedYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DramaticActor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "StageDirector",
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
        "superclass": "TheatreArtist",
        "subs": [
          {
            "name": "DramaticActor",
            "attributes": []
          },
          {
            "name": "StageDirector",
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
              "name": "joinedYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "DramaticActor",
          "pk": "artistId",
          "attributes": [
            {
              "name": "artistId",
              "isPK": true
            },
            {
              "name": "vocalRange",
              "isPK": false
            },
            {
              "name": "actingRoleType",
              "isPK": false
            }
          ]
        },
        {
          "name": "StageDirector",
          "pk": "artistId",
          "attributes": [
            {
              "name": "artistId",
              "isPK": true
            },
            {
              "name": "productionsStaged",
              "isPK": false
            },
            {
              "name": "artisticAwards",
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
            "name": "DramaticActor",
            "attributes": [
              "vocalRange",
              "actingRoleType"
            ]
          },
          {
            "name": "StageDirector",
            "attributes": [
              "productionsStaged",
              "artisticAwards"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Национальный театр — пересекающиеся подклассы артистов (актёр и режиссёр)",
    "storyRu": "Национальный театр — перекрывающиеся подклассы артистов (актёр и режиссёр) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный режиссер Национального театра имени Алишера Навои"
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Jasur Murodov",
    "clientRole": "IT Park Media Hub Menejeri",
    "clientAvatar": "🎙️",
    "title": "Media Hub — Video Strimer va Merch Sotuvchisi (Broadcaster & MerchVendor)",
    "titleEn": "Media Hub — Overlapping Content Creator Subclasses (Broadcaster & MerchVendor)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nIT Park qoshidagi raqamli media platformada ro'yxatdan o'tgan barcha ijodkorlar **DigitalCreator** superklassida jamlangan.\nMedia ijodkorlari zamonaviy iqtisodiyotda ko'p qirrali daromad manbalariga ega:\n1. **LiveStreamBroadcaster** — video kontent yaratuvchi va jonli efir uzatuvchi strimer. Unga jonli efir platformasi (`streamingPlatform`) va o'rtacha onlayn tomoshabinlar soni (`peakLiveViewers`) xosdir.\n2. **MerchVendor** — o'zining shaxsiy brendi ostida kiyim-kechak va suvenirlar sotuvchi muallif. Unga brend savdo belgisi (`merchBrandTag`) va do'kon aylanmasi (`monthlySalesSum`) xosdir.\nKo'plab muvaffaqiyatli strimerlar bir paytning o'zida jonli efir olib boradi va o'zining shaxsiy merch mahsulotlarini sotadi ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `DigitalCreator` superklassini yarating: {PK} `creatorId`, `handleName`, `subscribersCount`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `LiveStreamBroadcaster`: `streamingPlatform`, `peakLiveViewers`.\n   - `MerchVendor`: `merchBrandTag`, `monthlySalesSum`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Media Hub — Overlapping Content Creator Subclasses (Broadcaster & MerchVendor) — Conceptual ER business case study.",
    "instruction": "'DigitalCreator' superklassini va uning strimer hamda merch sotuvchi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DigitalCreator",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "creatorId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "creatorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "handleName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "subscribersCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LiveStreamBroadcaster",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "MerchVendor",
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
        "superclass": "DigitalCreator",
        "subs": [
          {
            "name": "LiveStreamBroadcaster",
            "attributes": []
          },
          {
            "name": "MerchVendor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DigitalCreator",
          "pk": "creatorId",
          "attributes": [
            {
              "name": "creatorId",
              "isPK": true
            },
            {
              "name": "handleName",
              "isPK": false
            },
            {
              "name": "subscribersCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "LiveStreamBroadcaster",
          "pk": "creatorId",
          "attributes": [
            {
              "name": "creatorId",
              "isPK": true
            },
            {
              "name": "streamingPlatform",
              "isPK": false
            },
            {
              "name": "peakLiveViewers",
              "isPK": false
            }
          ]
        },
        {
          "name": "MerchVendor",
          "pk": "creatorId",
          "attributes": [
            {
              "name": "creatorId",
              "isPK": true
            },
            {
              "name": "merchBrandTag",
              "isPK": false
            },
            {
              "name": "monthlySalesSum",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "DigitalCreator",
        "subs": [
          {
            "name": "LiveStreamBroadcaster",
            "attributes": [
              "streamingPlatform",
              "peakLiveViewers"
            ]
          },
          {
            "name": "MerchVendor",
            "attributes": [
              "merchBrandTag",
              "monthlySalesSum"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Медиа-хаб — перекрывающиеся подклассы создателей контента (вещательные компании и поставщики товаров)",
    "storyRu": "Медиа-хаб — перекрывающиеся подклассы создателей контента (вещательные компании и поставщики товаров) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер Медиа Хаба IT Park"
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Otabek Rustamov",
    "clientRole": "EPAM O'zbekiston Cloud Bo'limi Boshlig'i",
    "clientAvatar": "💻",
    "title": "EPAM Muhandislari — DevOps va Axborot Xavfsizligi Mutaxassisi (DevOps & SecOps)",
    "titleEn": "EPAM Engineering — Overlapping Tech Subclasses (DevOps & SecOps)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nDasturiy injiniring kompaniyasida barcha texnik mutaxassislar umumiy **SoftwareEngineer** superklassida qayd etiladi.\nBugungi kunda DevSecOps yondashuvi tufayli mutaxassislar bir vaqtning o'zida ikkita muhim yo'nalishni qamrab oladilar:\n1. **DevOpsEngineer** — CI/CD quvurlari va infratuzilmani avtomatlashtiruvchi muhandis. Unga bulut platformasi (`cloudStackType`) va konteyner boshqaruv darajasi (`k8sCertLevel`) xosdir.\n2. **SecurityAuditor** — kod zaifliklarini tekshiruvchi va xavfsizlik auditini o'tkazuvchi mutaxassis. Unga axborot xavfsizligi sertifikati (`securityCertCode`) va o'tkazgan penetratsion testlari soni (`pentestsConducted`) xosdir.\nKatta loyihalarda senior muhandis ham Kubernetes klasterlarini boshqaradi, ham xavfsizlik protokollarini audit qiladi ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `SoftwareEngineer` superklassini chizing: {PK} `engineerId`, `fullName`, `techSeniority`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `DevOpsEngineer`: `cloudStackType`, `k8sCertLevel`.\n   - `SecurityAuditor`: `securityCertCode`, `pentestsConducted`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "EPAM Engineering — Overlapping Tech Subclasses (DevOps & SecOps) — Conceptual ER business case study.",
    "instruction": "'SoftwareEngineer' superklassini va uning DevOps hamda xavfsizlik mutaxassisi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoftwareEngineer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "engineerId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "engineerId",
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
              "name": "techSeniority",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DevOpsEngineer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SecurityAuditor",
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
        "superclass": "SoftwareEngineer",
        "subs": [
          {
            "name": "DevOpsEngineer",
            "attributes": []
          },
          {
            "name": "SecurityAuditor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SoftwareEngineer",
          "pk": "engineerId",
          "attributes": [
            {
              "name": "engineerId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "techSeniority",
              "isPK": false
            }
          ]
        },
        {
          "name": "DevOpsEngineer",
          "pk": "engineerId",
          "attributes": [
            {
              "name": "engineerId",
              "isPK": true
            },
            {
              "name": "cloudStackType",
              "isPK": false
            },
            {
              "name": "k8sCertLevel",
              "isPK": false
            }
          ]
        },
        {
          "name": "SecurityAuditor",
          "pk": "engineerId",
          "attributes": [
            {
              "name": "engineerId",
              "isPK": true
            },
            {
              "name": "securityCertCode",
              "isPK": false
            },
            {
              "name": "pentestsConducted",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "SoftwareEngineer",
        "subs": [
          {
            "name": "DevOpsEngineer",
            "attributes": [
              "cloudStackType",
              "k8sCertLevel"
            ]
          },
          {
            "name": "SecurityAuditor",
            "attributes": [
              "securityCertCode",
              "pentestsConducted"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "EPAM Engineering — пересекающиеся технические подклассы (DevOps и SecOps)",
    "storyRu": "EPAM Engineering — Перекрывающиеся технические подклассы (DevOps и SecOps) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель облачного отдела EPAM Узбекистан"
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Dilshod Karimov",
    "clientRole": "O'zbekiston Fanlar Akademiyasi Ilmiy Kotibi",
    "clientAvatar": "🏛️",
    "title": "Akademiya — Kafedra Mudiri va PhD Ilmiy Rahbari (DepartmentDean & PhDSupervisor)",
    "titleEn": "Academy of Sciences — Overlapping Academic Subclasses (DepartmentDean & PhDSupervisor)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nO'zbekiston Fanlar Akademiyasida professorlar tarkibi umumiy **FacultyProfessor** superklassida hisobga olinadi.\nUniversitet boshqaruvida professorlar bir vaqtning o'zida ma'muriy va ilmiy rahbarlikni uyg'unlashtiradilar:\n1. **DepartmentDean** — fakultet yoki bo'lim boshlig'i. Unga ma'muriy byudjet vakolati (`budgetAuthoritySum`) va boshqaruvdagi kafedralar soni (`departmentsManaged`) xosdir.\n2. **PhDSupervisor** — doktorantlarga ilmiy rahbarlik qiluvchi olim. Unga faol doktorantlar soni (`currentDocStudents`) va dissertatsiya kengashi a'zoligi (`dissertationBoardId`) xosdir.\nFakultet dekani bir paytning o'zida o'z sohasidagi bir necha doktorantlarga dissertatsiya bo'yicha ilmiy rahbar bo'lib faoliyat yuritadi ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `FacultyProfessor` superklassini yarating: {PK} `professorId`, `profName`, `specialtyArea`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `DepartmentDean`: `budgetAuthoritySum`, `departmentsManaged`.\n   - `PhDSupervisor`: `currentDocStudents`, `dissertationBoardId`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Academy of Sciences — Overlapping Academic Subclasses (DepartmentDean & PhDSupervisor) — Conceptual ER business case study.",
    "instruction": "'FacultyProfessor' superklassini va uning dekan hamda doktorantlar rahbari subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FacultyProfessor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "professorId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "professorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "profName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialtyArea",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DepartmentDean",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "PhDSupervisor",
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
        "superclass": "FacultyProfessor",
        "subs": [
          {
            "name": "DepartmentDean",
            "attributes": []
          },
          {
            "name": "PhDSupervisor",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FacultyProfessor",
          "pk": "professorId",
          "attributes": [
            {
              "name": "professorId",
              "isPK": true
            },
            {
              "name": "profName",
              "isPK": false
            },
            {
              "name": "specialtyArea",
              "isPK": false
            }
          ]
        },
        {
          "name": "DepartmentDean",
          "pk": "professorId",
          "attributes": [
            {
              "name": "professorId",
              "isPK": true
            },
            {
              "name": "budgetAuthoritySum",
              "isPK": false
            },
            {
              "name": "departmentsManaged",
              "isPK": false
            }
          ]
        },
        {
          "name": "PhDSupervisor",
          "pk": "professorId",
          "attributes": [
            {
              "name": "professorId",
              "isPK": true
            },
            {
              "name": "currentDocStudents",
              "isPK": false
            },
            {
              "name": "dissertationBoardId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "FacultyProfessor",
        "subs": [
          {
            "name": "DepartmentDean",
            "attributes": [
              "budgetAuthoritySum",
              "departmentsManaged"
            ]
          },
          {
            "name": "PhDSupervisor",
            "attributes": [
              "currentDocStudents",
              "dissertationBoardId"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Академия наук - перекрывающиеся академические подклассы (декан кафедры и руководитель PhD)",
    "storyRu": "Академия наук — перекрывающиеся академические подклассы (декан кафедры и доктор наук) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Ученый секретарь Академии наук Узбекистана"
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Rustam Po'latov",
    "clientRole": "Sim-Sim Restoranlar Tarmog'i Bosh Boshqaruvchisi",
    "clientAvatar": "👨‍🍳",
    "title": "Restoran — Bosh Oshpaz va Ichimliklar Eksperti (ExecutiveChef & Sommelier)",
    "titleEn": "Fine Dining Restaurant — Overlapping Culinary Subclasses (ExecutiveChef & Sommelier)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nHashamatli restoranlar tarmog'ida barcha oshxona va xizmat mutaxassislari **HospitalityProfessional** superklassida yuritiladi.\nPremium gastronomiyada yetakchi mutaxassislar ikki sohada ham chuqur malakaga ega:\n1. **ExecutiveChef** — taomlar menyusi va oshxona jamoasini boshqaruvchi bosh oshpaz. Unga mualliflik menyulari soni (`signatureDishesCount`) va xalqaro oshpazlik darajasi (`michelinGrade`) xosdir.\n2. **Sommelier** — taomlarga mos ichimliklar va sharbatlarni saralovchi sertifikatlangan ekspert. Unga somelyelik litsenziyasi (`sommelierCertLevel`) va vinoteka zaxirasini boshqarish kodi (`cellarCatalogCode`) xosdir.\nTop darajadagi mutaxassis oshxona menyusini tayyorlash bilan birga mehmonga taomga mos ichimlikni tanlash bo'yicha mustaqil ekspert sifatida xizmat ko'rsatadi ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `HospitalityProfessional` superklassini yarating: {PK} `staffId`, `staffName`, `hireDate`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `ExecutiveChef`: `signatureDishesCount`, `michelinGrade`.\n   - `Sommelier`: `sommelierCertLevel`, `cellarCatalogCode`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Fine Dining Restaurant — Overlapping Culinary Subclasses (ExecutiveChef & Sommelier) — Conceptual ER business case study.",
    "instruction": "'HospitalityProfessional' superklassini va uning bosh oshpaz hamda somelye subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalityProfessional",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "staffId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "staffId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "staffName",
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
          "name": "ExecutiveChef",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "Sommelier",
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
        "superclass": "HospitalityProfessional",
        "subs": [
          {
            "name": "ExecutiveChef",
            "attributes": []
          },
          {
            "name": "Sommelier",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalityProfessional",
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
              "name": "hireDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ExecutiveChef",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "signatureDishesCount",
              "isPK": false
            },
            {
              "name": "michelinGrade",
              "isPK": false
            }
          ]
        },
        {
          "name": "Sommelier",
          "pk": "staffId",
          "attributes": [
            {
              "name": "staffId",
              "isPK": true
            },
            {
              "name": "sommelierCertLevel",
              "isPK": false
            },
            {
              "name": "cellarCatalogCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "HospitalityProfessional",
        "subs": [
          {
            "name": "ExecutiveChef",
            "attributes": [
              "signatureDishesCount",
              "michelinGrade"
            ]
          },
          {
            "name": "Sommelier",
            "attributes": [
              "sommelierCertLevel",
              "cellarCatalogCode"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Ресторан изысканной кухни — пересекающиеся кулинарные подклассы (шеф-повар и сомелье)",
    "storyRu": "Ресторан изысканной кухни — пересекающиеся кулинарные подклассы (шеф-повар и сомелье) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный директор сети ресторанов «Сим-Сим»"
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Madina Hakimova",
    "clientRole": "Tashkent Digital Forum Tashkiliy Qo'mitasi Raisi",
    "clientAvatar": "🎤",
    "title": "Xalqaro Konferensiya — Ma'ruzachi va Sessiya Moderatori (PaperSpeaker & SessionChair)",
    "titleEn": "International Conference — Overlapping Delegate Subclasses (PaperSpeaker & SessionChair)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nToshkentdagi nufuzli IT forumida barcha ro'yxatdan o'tgan rasmiy ishtirokchilar **ConferenceDelegate** superklassida yuritiladi.\nIlmiy anjumanda nufuzli ekspertlar bir necha muhim rollarda qatnashadilar:\n1. **PaperSpeaker** — ilmiy yoki amaliy ma'ruza qiluvchi notiq. Unga taqdimot mavzusi (`presentationTitle`) va ajratilgan nutq vaqti (`presentationTimeMinutes`) xosdir.\n2. **SessionChair** — panel muhokamasini boshqaruvchi moderator. Unga biriktirilgan zal kodi (`assignedHallCode`) va spikerlar bo'yicha savol-javob reglamenti (`qaModerationRound`) xosdir.\nYetakchi spiker o'z ma'ruzasini tugatgach, keyingi soatda boshqa mavzudagi davra suhbatiga sessiya raisi (moderator) bo'lib rahbarlik qilishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `ConferenceDelegate` superklassini chizing: {PK} `delegateBadgeId`, `fullName`, `organizationName`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `PaperSpeaker`: `presentationTitle`, `presentationTimeMinutes`.\n   - `SessionChair`: `assignedHallCode`, `qaModerationRound`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "International Conference — Overlapping Delegate Subclasses (PaperSpeaker & SessionChair) — Conceptual ER business case study.",
    "instruction": "'ConferenceDelegate' superklassini va uning ma'ruzachi hamda sessiya raisi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ConferenceDelegate",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "delegateBadgeId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "delegateBadgeId",
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
              "name": "organizationName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PaperSpeaker",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SessionChair",
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
        "superclass": "ConferenceDelegate",
        "subs": [
          {
            "name": "PaperSpeaker",
            "attributes": []
          },
          {
            "name": "SessionChair",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ConferenceDelegate",
          "pk": "delegateBadgeId",
          "attributes": [
            {
              "name": "delegateBadgeId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "organizationName",
              "isPK": false
            }
          ]
        },
        {
          "name": "PaperSpeaker",
          "pk": "delegateBadgeId",
          "attributes": [
            {
              "name": "delegateBadgeId",
              "isPK": true
            },
            {
              "name": "presentationTitle",
              "isPK": false
            },
            {
              "name": "presentationTimeMinutes",
              "isPK": false
            }
          ]
        },
        {
          "name": "SessionChair",
          "pk": "delegateBadgeId",
          "attributes": [
            {
              "name": "delegateBadgeId",
              "isPK": true
            },
            {
              "name": "assignedHallCode",
              "isPK": false
            },
            {
              "name": "qaModerationRound",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "ConferenceDelegate",
        "subs": [
          {
            "name": "PaperSpeaker",
            "attributes": [
              "presentationTitle",
              "presentationTimeMinutes"
            ]
          },
          {
            "name": "SessionChair",
            "attributes": [
              "assignedHallCode",
              "qaModerationRound"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Международная конференция — перекрывающиеся подклассы делегатов (PaperSpeaker и SessionChair)",
    "storyRu": "Международная конференция — Перекрывающиеся подклассы делегатов (PaperSpeaker и SessionChair) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Председатель оргкомитета Ташкентского цифрового форума"
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Bobur Eshonqulov",
    "clientRole": "Golden House Ko'chmas Mulk Agentligi Rahbari",
    "clientAvatar": "🏢",
    "title": "Ko'chmas Mulk — Savdo Agenti va Mulk Baholovchisi (ListingBroker & AssetAppraiser)",
    "titleEn": "Real Estate — Overlapping Specialist Subclasses (ListingBroker & AssetAppraiser)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nKatta rieltorlik kompaniyasida barcha litsenziyalangan rieltorlar **RealEstateAgent** superklassida yuritiladi.\nKo'chmas mulk bozorida mutaxassislar ikki muhim faoliyatni parallel bajarishi mumkin:\n1. **ListingBroker** — kvartira va ofislarni sotish va ijaraga berish bo'yicha agent. Unga komissiya foizi stavkasi (`commissionRatePct`) va faol sotuvdagi ob'ektlar soni (`activeListingsCount`) xosdir.\n2. **AssetAppraiser** — mulkning bozor qiymatini mustaqil baholovchi mutaxassis. Unga baholovchi litsenziya kodi (`appraiserLicenseCode`) va mulkni baholash uslubiyati (`valuationMethodology`) xosdir.\nKatta rieltor o'zi mustaqil baholovchi xulosasini berishi va shu mulkni o'zi bozorga sotuvga qo'yishi mumkin ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `RealEstateAgent` superklassini yarating: {PK} `agentId`, `agentName`, `licenseExpiryDate`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `ListingBroker`: `commissionRatePct`, `activeListingsCount`.\n   - `AssetAppraiser`: `appraiserLicenseCode`, `valuationMethodology`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Real Estate — Overlapping Specialist Subclasses (ListingBroker & AssetAppraiser) — Conceptual ER business case study.",
    "instruction": "'RealEstateAgent' superklassini va uning rieltor broker hamda baholovchi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RealEstateAgent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "agentId",
          "x": 300,
          "y": 100,
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
              "name": "licenseExpiryDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ListingBroker",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "AssetAppraiser",
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
        "superclass": "RealEstateAgent",
        "subs": [
          {
            "name": "ListingBroker",
            "attributes": []
          },
          {
            "name": "AssetAppraiser",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RealEstateAgent",
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
              "name": "licenseExpiryDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "ListingBroker",
          "pk": "agentId",
          "attributes": [
            {
              "name": "agentId",
              "isPK": true
            },
            {
              "name": "commissionRatePct",
              "isPK": false
            },
            {
              "name": "activeListingsCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "AssetAppraiser",
          "pk": "agentId",
          "attributes": [
            {
              "name": "agentId",
              "isPK": true
            },
            {
              "name": "appraiserLicenseCode",
              "isPK": false
            },
            {
              "name": "valuationMethodology",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "RealEstateAgent",
        "subs": [
          {
            "name": "ListingBroker",
            "attributes": [
              "commissionRatePct",
              "activeListingsCount"
            ]
          },
          {
            "name": "AssetAppraiser",
            "attributes": [
              "appraiserLicenseCode",
              "valuationMethodology"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Недвижимость — перекрывающиеся подклассы специалистов (ListingBroker и AssetAppraiser)",
    "storyRu": "Недвижимость — перекрывающиеся подклассы специалистов (ListingBroker и AssetAppraiser) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель агентства недвижимости Golden House"
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "Qiyin",
    "clientName": "Nodir Salimov",
    "clientRole": "O'zbekiston Avtomobil Federatsiyasi Bosh Muhandisi",
    "clientAvatar": "🏎️",
    "title": "Avtosport — Poyga Haydovchisi va Poyga Mashinasi Muhandisi (Racer & TrackEngineer)",
    "titleEn": "Motorsports — Overlapping Member Subclasses (Racer & TrackEngineer)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:**\nProfessional poyga jamoasida har bir texnik a'zo **MotorsportMember** superklassida qayd qilinadi.\nAvtosportda yetuk poygachilar ko'pincha muhandislik darajasiga ega bo'lib, bolidni o'zlari sozlaydilar:\n1. **RacingDriver** — poygada bolidni boshqaruvchi poygachi. Unga FIA xalqaro super-litsenziyasi (`fiaSuperlicenseId`) va g'alaba qozonilgan poygalar soni (`careerPodiums`) xosdir.\n2. **TrackTelemetryEngineer** — telemetriya ma'lumotlarini tahlil qilib bolid aerodinamikasi va motorini sozlovchi muhandis. Unga telemetriya dasturiy ta'minoti kodi (`telemetrySoftwareCode`) va motor diagnostika sertifikati (`engineTuningCert`) xosdir.\nPoygachi-muhandis o'zi trekda aylanma vaqtini ko'rsatib, boksga qaytgach telemetriya datchiklarini o'zi sozlab chiqadi ({Optional, And}).\n\n📋 **Bajarilishi Kerak Bo'lgan Qadamlar:**\n1. `MotorsportMember` superklassini yarating: {PK} `memberId`, `memberName`, `racingTeamName`.\n2. Kesishuvchi subklasslarni qo'shing:\n   - `RacingDriver`: `fiaSuperlicenseId`, `careerPodiums`.\n   - `TrackTelemetryEngineer`: `telemetrySoftwareCode`, `engineTuningCert`.\n3. Cheklovni {Optional, And} deb belgilang.",
    "storyEn": "Motorsports — Overlapping Member Subclasses (Racer & TrackEngineer) — Conceptual ER business case study.",
    "instruction": "'MotorsportMember' superklassini va uning poygachi hamda telemetriya muhandisi subklasslarini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MotorsportMember",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "memberId",
          "x": 300,
          "y": 100,
          "attributes": [
            {
              "name": "memberId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "memberName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "racingTeamName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RacingDriver",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": true,
          "pk": "",
          "x": 140,
          "y": 300,
          "attributes": []
        },
        {
          "name": "TrackTelemetryEngineer",
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
        "superclass": "MotorsportMember",
        "subs": [
          {
            "name": "RacingDriver",
            "attributes": []
          },
          {
            "name": "TrackTelemetryEngineer",
            "attributes": []
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MotorsportMember",
          "pk": "memberId",
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "memberName",
              "isPK": false
            },
            {
              "name": "racingTeamName",
              "isPK": false
            }
          ]
        },
        {
          "name": "RacingDriver",
          "pk": "memberId",
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "fiaSuperlicenseId",
              "isPK": false
            },
            {
              "name": "careerPodiums",
              "isPK": false
            }
          ]
        },
        {
          "name": "TrackTelemetryEngineer",
          "pk": "memberId",
          "attributes": [
            {
              "name": "memberId",
              "isPK": true
            },
            {
              "name": "telemetrySoftwareCode",
              "isPK": false
            },
            {
              "name": "engineTuningCert",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": {
        "superclass": "MotorsportMember",
        "subs": [
          {
            "name": "RacingDriver",
            "attributes": [
              "fiaSuperlicenseId",
              "careerPodiums"
            ]
          },
          {
            "name": "TrackTelemetryEngineer",
            "attributes": [
              "telemetrySoftwareCode",
              "engineTuningCert"
            ]
          }
        ],
        "constraint": "{Optional, And}"
      }
    },
    "titleRu": "Автоспорт — перекрывающиеся подклассы участников (Racer и TrackEngineer)",
    "storyRu": "Автоспорт — перекрывающиеся подклассы участников (Racer и TrackEngineer) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный инженер Автомобильной Федерации Узбекистана"
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Dr. Nodir Jalilov",
    "clientRole": "Respublika Shoshilinch Tibbiy Yordam Markazi Axborot Direktori",
    "clientAvatar": "🏥",
    "title": "Tez Tibbiy Markaz — Fan Trap Tuzog'i (Kasalxona, Bo'lim, Shifokor)",
    "titleEn": "Emergency Center — Fan Trap Resolution (Hospital, Division, Doctor)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Tibbiyot markazi ma'lumotlar bazasida dastlab xato model tuzilgan: Kasalxona markazi (**MedicalHospital**) bir vaqtning o'zida ham bo'limlarga (**HospitalDivision**), ham shifokorlarga (**MedicalDoctor**) bir nechta tarmoqlangan. Natijada qaysi shifokor aynan qaysi bo'limda (kardiologiya, reanimatsiya) ishlashini aniqlab bo'lmaydigan **Fan Trap (Yelpig'ich tuzog'i)** yuzaga kelgan. Tuzoqni bartaraf etish uchun ketma-ketlik zanjiri o'rnatiladi: Kasalxona o'z bo'limlariga ega, har bir bo'lim esa o'z shifokorlarini ishga qabul qiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `MedicalHospital` entitiysi: {PK} `hospitalId`, `hospitalName`, `regionCity`. 2. `HospitalDivision` entitiysi: {PK} `divisionId`, `divisionName`, `floorNum`. 3. `MedicalDoctor` entitiysi: {PK} `doctorId`, `doctorName`, `licenseNum`. 4. Aloqalarni to'g'ri zanjirda bog'lang: - `MedicalHospital` va `HospitalDivision`: qat'iy bittalik va majburiy ko'plik munosabati - `HospitalDivision` va `MedicalDoctor`: qat'iy bittalik va ixtiyoriy ko'plik munosabati",
    "storyEn": "Emergency Center — Fan Trap Resolution (Hospital, Division, Doctor) — Conceptual ER business case study.",
    "instruction": "Fan Trap tuzog'ini bartaraf etuvchi Kasalxona -> Bo'lim -> Shifokor to'g'ri zanjirli modelini barpo eting.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MedicalHospital",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "hospitalId",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "hospitalId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hospitalName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regionCity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HospitalDivision",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "divisionId",
          "x": 380,
          "y": 180,
          "attributes": [
            {
              "name": "divisionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "divisionName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorNum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MedicalDoctor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "doctorId",
          "x": 640,
          "y": 180,
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
              "name": "licenseNum",
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
          "name": "Operates",
          "entity1": "MedicalHospital",
          "entity2": "HospitalDivision",
          "fromEntityName": "MedicalHospital",
          "toEntityName": "HospitalDivision",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "Employs",
          "entity1": "HospitalDivision",
          "entity2": "MedicalDoctor",
          "fromEntityName": "HospitalDivision",
          "toEntityName": "MedicalDoctor",
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
          "name": "MedicalHospital",
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
              "name": "regionCity",
              "isPK": false
            }
          ]
        },
        {
          "name": "HospitalDivision",
          "pk": "divisionId",
          "attributes": [
            {
              "name": "divisionId",
              "isPK": true
            },
            {
              "name": "divisionName",
              "isPK": false
            },
            {
              "name": "floorNum",
              "isPK": false
            }
          ]
        },
        {
          "name": "MedicalDoctor",
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
              "name": "licenseNum",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MedicalHospital",
          "entity2": "HospitalDivision",
          "fromEntityName": "MedicalHospital",
          "toEntityName": "HospitalDivision",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Operates",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "HospitalDivision",
          "entity2": "MedicalDoctor",
          "fromEntityName": "HospitalDivision",
          "toEntityName": "MedicalDoctor",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "Employs",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Центр неотложной помощи — Разрешение ловушки вентилятора (больница, отделение, врач)",
    "storyRu": "Центр неотложной помощи — Разрешение ловушек для фанатов (больница, отделение, врач) — Концептуальный бизнес-кейс скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Информационный директор Республиканского центра скорой медицинской помощи"
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Shahnoza Mirzayeva",
    "clientRole": "WIUT Akademik Sifat Boshqarmasi Nazoratchisi",
    "clientAvatar": "👩‍🏫",
    "title": "WIUT Universiteti — Fan Trap Tuzog'i (Fakultet, Modul, O'qituvchi)",
    "titleEn": "WIUT University — Fan Trap Resolution (Faculty, Module, Lecturer)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Universitet axborot tizimida agar Fakultet (**UniversityFaculty**) to'g'ridan-to'g'ri ham fanlarga (**CourseModule**), ham o'qituvchilarga (**Lecturer**) birga-ko'p tarmoqlansa, qaysi o'qituvchi aynan qaysi fandan dars berishini aniqlash noaniq (ambiguous) bo'lib qoladi. Bu klassik **Fan Trap** hisoblanadi. Tuzatilgan yechim: Fakultet o'quv modullarini o'z ichiga oladi, har bir modulga esa mas'ul o'qituvchilar biriktiriladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `UniversityFaculty`: {PK} `facultyCode`, `facultyName`, `deanOffice`. 2. `CourseModule`: {PK} `moduleCode`, `moduleTitle`, `creditPoints`. 3. `Lecturer`: {PK} `lecturerId`, `lecturerName`, `staffEmail`. 4. Multiplisitiyalarni ketma-ket zanjirda bog'lang: - `UniversityFaculty` ⟷ `CourseModule`: bitta majburiy hamda majburiy ko'plik - `CourseModule` ⟷ `Lecturer`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "WIUT University — Fan Trap Resolution (Faculty, Module, Lecturer) — Conceptual ER business case study.",
    "instruction": "Fakultet, Modul va O'qituvchi o'rtasidagi Fan Trap tuzog'ini to'g'ri mantiqiy tartibda bartaraf qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UniversityFaculty",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "facultyCode",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "facultyCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "facultyName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deanOffice",
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
          "x": 380,
          "y": 180,
          "attributes": [
            {
              "name": "moduleCode",
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
              "name": "creditPoints",
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
          "x": 640,
          "y": 180,
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
              "name": "staffEmail",
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
          "name": "Offers",
          "entity1": "UniversityFaculty",
          "entity2": "CourseModule",
          "fromEntityName": "UniversityFaculty",
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
              "name": "deanOffice",
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
              "name": "moduleTitle",
              "isPK": false
            },
            {
              "name": "creditPoints",
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
              "name": "staffEmail",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "UniversityFaculty",
          "entity2": "CourseModule",
          "fromEntityName": "UniversityFaculty",
          "toEntityName": "CourseModule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Offers",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CourseModule",
          "entity2": "Lecturer",
          "fromEntityName": "CourseModule",
          "toEntityName": "Lecturer",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "TaughtBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Университет МВУТ — Разрешение фанатских ловушек (факультет, модуль, преподаватель)",
    "storyRu": "Университет МВУТ — Разрешение ловушек фанатов (факультет, модуль, преподаватель) — Концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель академического управления качеством МВУТ"
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Ulug'bek Yusupov",
    "clientRole": "Korzinka Chakana Savdo Boshqarmasi Boshlig'i",
    "clientAvatar": "🛒",
    "title": "Korzinka Tarmog'i — Fan Trap Tuzog'i (Bosh Ofis, Supermarket, Kassir)",
    "titleEn": "Korzinka Retail — Fan Trap Resolution (RetailChain, SupermarketBranch, Cashier)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Korzinka supermarketlar tarmog'ida Bosh boshqarma (**RetailHeadquarters**) barcha filiallarga va barcha kassirlarga alohida birga-ko'p aloqa ochsa, qaysi kassir qaysi filialda smenaga chiqishini bilib bo'lmaydi. Bu **Fan Trap** xatosidir. Tog'ri tuzilma: Bosh kompaniya filiallar ochadi, har bir supermarket filiali esa o'zining doimiy kassirlariga ega bo'ladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `RetailHeadquarters`: {PK} `hqInn`, `holdingName`, `mainOfficeAddress`. 2. `SupermarketBranch`: {PK} `branchId`, `branchName`, `districtLocation`. 3. `BranchCashier`: {PK} `cashierBadge`, `cashierName`, `tillPosNumber`. 4. Aloqalarni to'g'ri ketma-ketlikda o'rnating: - `RetailHeadquarters` ⟷ `SupermarketBranch`: bitta majburiy hamda majburiy ko'plik - `SupermarketBranch` ⟷ `BranchCashier`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Korzinka Retail — Fan Trap Resolution (RetailChain, SupermarketBranch, Cashier) — Conceptual ER business case study.",
    "instruction": "Kassirning qaysi filialga mansubligini aniq ko'rsatuvchi zanjirli bog'lanishni chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RetailHeadquarters",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "hqInn",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "hqInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "holdingName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "mainOfficeAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupermarketBranch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "branchId",
          "x": 380,
          "y": 180,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "districtLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BranchCashier",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "cashierBadge",
          "x": 640,
          "y": 180,
          "attributes": [
            {
              "name": "cashierBadge",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cashierName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tillPosNumber",
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
          "name": "OperatesBranch",
          "entity1": "RetailHeadquarters",
          "entity2": "SupermarketBranch",
          "fromEntityName": "RetailHeadquarters",
          "toEntityName": "SupermarketBranch",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AssignsCashier",
          "entity1": "SupermarketBranch",
          "entity2": "BranchCashier",
          "fromEntityName": "SupermarketBranch",
          "toEntityName": "BranchCashier",
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
          "name": "RetailHeadquarters",
          "pk": "hqInn",
          "attributes": [
            {
              "name": "hqInn",
              "isPK": true
            },
            {
              "name": "holdingName",
              "isPK": false
            },
            {
              "name": "mainOfficeAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupermarketBranch",
          "pk": "branchId",
          "attributes": [
            {
              "name": "branchId",
              "isPK": true
            },
            {
              "name": "branchName",
              "isPK": false
            },
            {
              "name": "districtLocation",
              "isPK": false
            }
          ]
        },
        {
          "name": "BranchCashier",
          "pk": "cashierBadge",
          "attributes": [
            {
              "name": "cashierBadge",
              "isPK": true
            },
            {
              "name": "cashierName",
              "isPK": false
            },
            {
              "name": "tillPosNumber",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "RetailHeadquarters",
          "entity2": "SupermarketBranch",
          "fromEntityName": "RetailHeadquarters",
          "toEntityName": "SupermarketBranch",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "OperatesBranch",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SupermarketBranch",
          "entity2": "BranchCashier",
          "fromEntityName": "SupermarketBranch",
          "toEntityName": "BranchCashier",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AssignsCashier",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Корзинка Ритейл — Разрешение ловушки для фанатов (Сеть Розничной Торговли, Отделение Супермаркета, Кассир)",
    "storyRu": "Корзинка Розничная торговля — Разрешение ловушек для фанатов (Розничная сеть, Отделение супермаркетов, Кассир) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Корзинка – руководитель департамента розничной торговли"
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Bobur Tursunov",
    "clientRole": "Yandex Go Delivery Logistika Arxitektori",
    "clientAvatar": "🚚",
    "title": "Yandex Yetkazish — Fan Trap Tuzog'i (Markaziy Xab, Hudud, Furgon)",
    "titleEn": "Yandex Logistics — Fan Trap Resolution (LogisticsHub, DeliveryZone, DeliveryVan)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Toshkent shahar tezkor logistika markazida Markaziy xab (**LogisticsHub**) tuman yetkazish hududlari (**DeliveryZone**) va furgonlar (**DeliveryVan**) bilan to'g'ridan-to'g'ri fanned-out bog'lansa, qaysi furgon qaysi tumanda xizmat ko'rsatayotgani mavhum bo'lib qoladi. Tuzatish: Markaziy xab o'z ichiga tuman zonalarni oladi, har bir hududga esa aniq furgonlar biriktiriladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `LogisticsHub`: {PK} `hubId`, `hubName`, `cityArea`. 2. `DeliveryZone`: {PK} `zoneCode`, `zoneTitle`, `postalCodeRange`. 3. `DeliveryVan`: {PK} `vanPlateNum`, `vanModel`, `cargoVolumeM3`. 4. Aloqalarni ketma-ketlikda bog'lang: - `LogisticsHub` ⟷ `DeliveryZone`: bitta majburiy hamda majburiy ko'plik - `DeliveryZone` ⟷ `DeliveryVan`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Yandex Logistics — Fan Trap Resolution (LogisticsHub, DeliveryZone, DeliveryVan) — Conceptual ER business case study.",
    "instruction": "Logistika xabi, yetkazish zonasi va furgon zanjirini Fan Trap xatosi bo'lmagan tarzda modellashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "LogisticsHub",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "hubId",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "hubId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hubName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityArea",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DeliveryZone",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "zoneCode",
          "x": 380,
          "y": 180,
          "attributes": [
            {
              "name": "zoneCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "zoneTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "postalCodeRange",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DeliveryVan",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "vanPlateNum",
          "x": 640,
          "y": 180,
          "attributes": [
            {
              "name": "vanPlateNum",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vanModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cargoVolumeM3",
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
          "name": "CoversZone",
          "entity1": "LogisticsHub",
          "entity2": "DeliveryZone",
          "fromEntityName": "LogisticsHub",
          "toEntityName": "DeliveryZone",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "DispatchesVan",
          "entity1": "DeliveryZone",
          "entity2": "DeliveryVan",
          "fromEntityName": "DeliveryZone",
          "toEntityName": "DeliveryVan",
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
          "name": "LogisticsHub",
          "pk": "hubId",
          "attributes": [
            {
              "name": "hubId",
              "isPK": true
            },
            {
              "name": "hubName",
              "isPK": false
            },
            {
              "name": "cityArea",
              "isPK": false
            }
          ]
        },
        {
          "name": "DeliveryZone",
          "pk": "zoneCode",
          "attributes": [
            {
              "name": "zoneCode",
              "isPK": true
            },
            {
              "name": "zoneTitle",
              "isPK": false
            },
            {
              "name": "postalCodeRange",
              "isPK": false
            }
          ]
        },
        {
          "name": "DeliveryVan",
          "pk": "vanPlateNum",
          "attributes": [
            {
              "name": "vanPlateNum",
              "isPK": true
            },
            {
              "name": "vanModel",
              "isPK": false
            },
            {
              "name": "cargoVolumeM3",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "LogisticsHub",
          "entity2": "DeliveryZone",
          "fromEntityName": "LogisticsHub",
          "toEntityName": "DeliveryZone",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "CoversZone",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "DeliveryZone",
          "entity2": "DeliveryVan",
          "fromEntityName": "DeliveryZone",
          "toEntityName": "DeliveryVan",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "DispatchesVan",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Яндекс Логистика — Разрешение ловушек фанатов (LogisticsHub, DeliveryZone, DeliveryVan)",
    "storyRu": "Яндекс Логистика — Разрешение ловушек фанатов (LogisticsHub, DeliveryZone, DeliveryVan) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Яндекс Go Архитектор логистики доставки"
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Erkin Qosimov",
    "clientRole": "Artel Zavodi Bosh Muhandisi",
    "clientAvatar": "⚙️",
    "title": "Artel Sanoat — Fan Trap Tuzog'i (Zavod, Sex, Stanok)",
    "titleEn": "Manufacturing Plant — Fan Trap Resolution (FactoryPlant, Workshop, IndustrialMachine)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Artel maishiy texnika zavodida bosh korxona (**FactoryPlant**) ham sexlarga (**ProductionWorkshop**), ham stanoklarga (**IndustrialMachine**) markazdan birga-ko'p tarmoqlansa, qaysi stanok qaysi sex binosida turgani noma'lum bo'ladi. Boshqaruv zanjirini tiklash: Zavod sexlardan iborat bo'ladi, har bir sex ichida esa belgilangan stanoklar o'rnatiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `FactoryPlant`: {PK} `plantId`, `plantName`, `industrialZone`. 2. `ProductionWorkshop`: {PK} `workshopId`, `workshopName`, `chiefMaster`. 3. `IndustrialMachine`: {PK} `machineSerial`, `machineType`, `powerKw`. 4. Multiplisitiyalarni zanjirda bog'lang: - `FactoryPlant` ⟷ `ProductionWorkshop`: bitta majburiy hamda majburiy ko'plik - `ProductionWorkshop` ⟷ `IndustrialMachine`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Manufacturing Plant — Fan Trap Resolution (FactoryPlant, Workshop, IndustrialMachine) — Conceptual ER business case study.",
    "instruction": "Zavod, sex va stanok ierarxiyasini Fan Trap tuzog'idan xoli tarzda chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FactoryPlant",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "plantId",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "plantId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "plantName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "industrialZone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProductionWorkshop",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "workshopId",
          "x": 380,
          "y": 180,
          "attributes": [
            {
              "name": "workshopId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "workshopName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "chiefMaster",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IndustrialMachine",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "machineSerial",
          "x": 640,
          "y": 180,
          "attributes": [
            {
              "name": "machineSerial",
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
              "name": "powerKw",
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
          "name": "Comprises",
          "entity1": "FactoryPlant",
          "entity2": "ProductionWorkshop",
          "fromEntityName": "FactoryPlant",
          "toEntityName": "ProductionWorkshop",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "HousesMachine",
          "entity1": "ProductionWorkshop",
          "entity2": "IndustrialMachine",
          "fromEntityName": "ProductionWorkshop",
          "toEntityName": "IndustrialMachine",
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
          "name": "FactoryPlant",
          "pk": "plantId",
          "attributes": [
            {
              "name": "plantId",
              "isPK": true
            },
            {
              "name": "plantName",
              "isPK": false
            },
            {
              "name": "industrialZone",
              "isPK": false
            }
          ]
        },
        {
          "name": "ProductionWorkshop",
          "pk": "workshopId",
          "attributes": [
            {
              "name": "workshopId",
              "isPK": true
            },
            {
              "name": "workshopName",
              "isPK": false
            },
            {
              "name": "chiefMaster",
              "isPK": false
            }
          ]
        },
        {
          "name": "IndustrialMachine",
          "pk": "machineSerial",
          "attributes": [
            {
              "name": "machineSerial",
              "isPK": true
            },
            {
              "name": "machineType",
              "isPK": false
            },
            {
              "name": "powerKw",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FactoryPlant",
          "entity2": "ProductionWorkshop",
          "fromEntityName": "FactoryPlant",
          "toEntityName": "ProductionWorkshop",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "Comprises",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ProductionWorkshop",
          "entity2": "IndustrialMachine",
          "fromEntityName": "ProductionWorkshop",
          "toEntityName": "IndustrialMachine",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "HousesMachine",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Завод-производитель — Разрешение ловушки вентилятора (Завод, Мастерская, Промышленная машина)",
    "storyRu": "Производственное предприятие — Устранение ловушек вентиляторов (FactoryPlant, Workshop, IndustrialMachine) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный инженер завода «Артель»"
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Anvar Karimov",
    "clientRole": "Chorvoq Oromgohi Bosh Menejeri",
    "clientAvatar": "🏔️",
    "title": "Chorvoq Resort — Fan Trap Tuzog'i (Dam Olish Maskani, Bino, Xona)",
    "titleEn": "Mountain Resort — Fan Trap Resolution (ResortComplex, GuestBuilding, HotelRoom)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Dam olish majmuasida bosh maskan (**ResortComplex**) bir vaqtda binolarga (**GuestBuilding**) va xonalarga (**HotelRoom**) birga-ko'p yelpig'ich hosil qilsa, 305-xona aynan qaysi binoda ekanligini bilib bo'lmaydi. To'g'ri ierarxiya: Dam olish maskani bir necha binodan tashkil topgan, har bir bino ichida esa xonalar joylashgan. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `ResortComplex`: {PK} `resortId`, `resortName`, `valleyLocation`. 2. `GuestBuilding`: {PK} `buildingCode`, `buildingName`, `totalFloors`. 3. `HotelRoom`: {PK} `roomNum`, `bedCapacity`, `roomPriceNight`. 4. Multiplisitiyalarni bog'lang: - `ResortComplex` ⟷ `GuestBuilding`: bitta majburiy hamda majburiy ko'plik - `GuestBuilding` ⟷ `HotelRoom`: bitta majburiy hamda majburiy ko'plik",
    "storyEn": "Mountain Resort — Fan Trap Resolution (ResortComplex, GuestBuilding, HotelRoom) — Conceptual ER business case study.",
    "instruction": "Dam olish majmuasi, bino va xona o'rtasidagi to'g'ri ketma-ketlik modelini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResortComplex",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "resortId",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "resortId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "resortName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "valleyLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "GuestBuilding",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "buildingCode",
          "x": 380,
          "y": 180,
          "attributes": [
            {
              "name": "buildingCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "buildingName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalFloors",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HotelRoom",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "roomNum",
          "x": 640,
          "y": 180,
          "attributes": [
            {
              "name": "roomNum",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bedCapacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomPriceNight",
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
          "name": "ContainsBuilding",
          "entity1": "ResortComplex",
          "entity2": "GuestBuilding",
          "fromEntityName": "ResortComplex",
          "toEntityName": "GuestBuilding",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "HousesRoom",
          "entity1": "GuestBuilding",
          "entity2": "HotelRoom",
          "fromEntityName": "GuestBuilding",
          "toEntityName": "HotelRoom",
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
          "name": "ResortComplex",
          "pk": "resortId",
          "attributes": [
            {
              "name": "resortId",
              "isPK": true
            },
            {
              "name": "resortName",
              "isPK": false
            },
            {
              "name": "valleyLocation",
              "isPK": false
            }
          ]
        },
        {
          "name": "GuestBuilding",
          "pk": "buildingCode",
          "attributes": [
            {
              "name": "buildingCode",
              "isPK": true
            },
            {
              "name": "buildingName",
              "isPK": false
            },
            {
              "name": "totalFloors",
              "isPK": false
            }
          ]
        },
        {
          "name": "HotelRoom",
          "pk": "roomNum",
          "attributes": [
            {
              "name": "roomNum",
              "isPK": true
            },
            {
              "name": "bedCapacity",
              "isPK": false
            },
            {
              "name": "roomPriceNight",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ResortComplex",
          "entity2": "GuestBuilding",
          "fromEntityName": "ResortComplex",
          "toEntityName": "GuestBuilding",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ContainsBuilding",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "GuestBuilding",
          "entity2": "HotelRoom",
          "fromEntityName": "GuestBuilding",
          "toEntityName": "HotelRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HousesRoom",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Горный курорт — Разрешение веерной ловушки (курортный комплекс, гостевой дом, гостиничный номер)",
    "storyRu": "Горный курорт — Разрешение ловушек для фанатов (Курортный комплекс, Гостевой дом, Гостиничный номер) — Концептуальный бизнес-кейс скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный директор животноводческого комплекса"
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Farhod Toirov",
    "clientRole": "Asaxiy.uz Katalog Boshqaruvchisi",
    "clientAvatar": "📦",
    "title": "Asaxiy Katalogi — Fan Trap Tuzog'i (Departament, Kategoriya, Mahsulot)",
    "titleEn": "Asaxiy Catalog — Fan Trap Resolution (CatalogDepartment, ProductCategory, RetailProduct)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Elektron do'konda bosh savdo departamenti (**CatalogDepartment**) kategoriyalar (**ProductCategory**) va mahsulotlar (**RetailProduct**) bilan alohida birga-ko'p bog'lansa, smartfon aynan qaysi kategoriyaga (masalan: Elektronika -> Smartfonlar) tegishli ekani adashib ketadi. Yechim: Departament kategoriyalarni birlashtiradi, tovarlar esa to'g'ridan-to'g'ri o'z kategoriyasiga biriktiriladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CatalogDepartment`: {PK} `deptCode`, `deptTitle`, `leadManager`. 2. `ProductCategory`: {PK} `categoryId`, `categoryName`, `displayOrder`. 3. `RetailProduct`: {PK} `skuCode`, `productTitle`, `retailPrice`. 4. Aloqalarni to'g'ri zanjirda bog'lang: - `CatalogDepartment` ⟷ `ProductCategory`: bitta majburiy hamda majburiy ko'plik - `ProductCategory` ⟷ `RetailProduct`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Asaxiy Catalog — Fan Trap Resolution (CatalogDepartment, ProductCategory, RetailProduct) — Conceptual ER business case study.",
    "instruction": "Asaxiy do'koni katalog ierarxiyasini Fan Trap tuzog'isiz modellashtiring.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CatalogDepartment",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "deptCode",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deptTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "leadManager",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProductCategory",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "categoryId",
          "x": 380,
          "y": 180,
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
              "name": "displayOrder",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RetailProduct",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "skuCode",
          "x": 640,
          "y": 180,
          "attributes": [
            {
              "name": "skuCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "productTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "retailPrice",
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
          "name": "IncludesCategory",
          "entity1": "CatalogDepartment",
          "entity2": "ProductCategory",
          "fromEntityName": "CatalogDepartment",
          "toEntityName": "ProductCategory",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ClassifiesProduct",
          "entity1": "ProductCategory",
          "entity2": "RetailProduct",
          "fromEntityName": "ProductCategory",
          "toEntityName": "RetailProduct",
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
          "name": "CatalogDepartment",
          "pk": "deptCode",
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true
            },
            {
              "name": "deptTitle",
              "isPK": false
            },
            {
              "name": "leadManager",
              "isPK": false
            }
          ]
        },
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
              "name": "displayOrder",
              "isPK": false
            }
          ]
        },
        {
          "name": "RetailProduct",
          "pk": "skuCode",
          "attributes": [
            {
              "name": "skuCode",
              "isPK": true
            },
            {
              "name": "productTitle",
              "isPK": false
            },
            {
              "name": "retailPrice",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CatalogDepartment",
          "entity2": "ProductCategory",
          "fromEntityName": "CatalogDepartment",
          "toEntityName": "ProductCategory",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "IncludesCategory",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ProductCategory",
          "entity2": "RetailProduct",
          "fromEntityName": "ProductCategory",
          "toEntityName": "RetailProduct",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ClassifiesProduct",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Каталог Asaxy — Разрешение веерных ловушек (CatalogDepartment, ProductCategory, RetailProduct)",
    "storyRu": "Каталог Asaxiy — Разрешение ловушек фанатов (CatalogDepartment, ProductCategory, RetailProduct) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер каталога Asaxy.uz"
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Olimjon Yo'ldoshev",
    "clientRole": "Uzbekistan Airways Flot Texnik Boshqarmasi Boshlig'i",
    "clientAvatar": "🛫",
    "title": "Aviatsiya Floti — Fan Trap Tuzog'i (Aviabaza, Eskadrilya, Samolyot)",
    "titleEn": "Aviation Fleet — Fan Trap Resolution (AirlineBase, FlightSquadron, Aircraft)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Aviakompaniya boshqaruvida aeroport aviabazasi (**AirlineBase**) ham parvoz eskadrilyalari (**FlightSquadron**), ham samolyotlar (**Aircraft**) bilan birga-ko'p markaziy tarmoqlansa, ma'lum bir Boeing samolyoti aynan qaysi eskadrilyaga tegishli ekani noaniq bo'lib qoladi. Tuzatilgan zanjir: Aviabazada bir necha eskadrilya tuziladi, har bir eskadrilyaga esa o'zining tayinlangan samolyotlari biriktiriladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `AirlineBase`: {PK} `baseIata`, `baseName`, `cityHangar`. 2. `FlightSquadron`: {PK} `squadronId`, `squadronTitle`, `commandPilot`. 3. `Aircraft`: {PK} `tailNumber`, `modelType`, `passengerSeats`. 4. Multiplisitiyalarni ketma-ketlikda o'rnating: - `AirlineBase` ⟷ `FlightSquadron`: bitta majburiy hamda majburiy ko'plik - `FlightSquadron` ⟷ `Aircraft`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Aviation Fleet — Fan Trap Resolution (AirlineBase, FlightSquadron, Aircraft) — Conceptual ER business case study.",
    "instruction": "Aviabaza, eskadrilya va samolyot zanjirini Fan Trap xatosi bo'lmagan tarzda yakunlang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AirlineBase",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "baseIata",
          "x": 120,
          "y": 180,
          "attributes": [
            {
              "name": "baseIata",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "baseName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityHangar",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FlightSquadron",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "squadronId",
          "x": 380,
          "y": 180,
          "attributes": [
            {
              "name": "squadronId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "squadronTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "commandPilot",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Aircraft",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "tailNumber",
          "x": 640,
          "y": 180,
          "attributes": [
            {
              "name": "tailNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "modelType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passengerSeats",
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
          "name": "HousesSquadron",
          "entity1": "AirlineBase",
          "entity2": "FlightSquadron",
          "fromEntityName": "AirlineBase",
          "toEntityName": "FlightSquadron",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "OperatesPlane",
          "entity1": "FlightSquadron",
          "entity2": "Aircraft",
          "fromEntityName": "FlightSquadron",
          "toEntityName": "Aircraft",
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
          "name": "AirlineBase",
          "pk": "baseIata",
          "attributes": [
            {
              "name": "baseIata",
              "isPK": true
            },
            {
              "name": "baseName",
              "isPK": false
            },
            {
              "name": "cityHangar",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightSquadron",
          "pk": "squadronId",
          "attributes": [
            {
              "name": "squadronId",
              "isPK": true
            },
            {
              "name": "squadronTitle",
              "isPK": false
            },
            {
              "name": "commandPilot",
              "isPK": false
            }
          ]
        },
        {
          "name": "Aircraft",
          "pk": "tailNumber",
          "attributes": [
            {
              "name": "tailNumber",
              "isPK": true
            },
            {
              "name": "modelType",
              "isPK": false
            },
            {
              "name": "passengerSeats",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AirlineBase",
          "entity2": "FlightSquadron",
          "fromEntityName": "AirlineBase",
          "toEntityName": "FlightSquadron",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HousesSquadron",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "FlightSquadron",
          "entity2": "Aircraft",
          "fromEntityName": "FlightSquadron",
          "toEntityName": "Aircraft",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "OperatesPlane",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Авиационный флот — Разрешение веерных ловушек (AirlineBase, FlightSquadron, Aircraft)",
    "storyRu": "Авиационный флот — Разрешение веерных ловушек (AirlineBase, FlightSquadron, Aircraft) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Начальник технического отдела флота «Узбекистон хаво йуллари»"
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Rohat Avtosalon Direktori",
    "clientAvatar": "🚘",
    "title": "Rohat Avtosalon — Chasm Trap Tuzog'i (Filial, Savdo Agenti, Sotuvdagi Mashina)",
    "titleEn": "Auto Dealership — Chasm Trap Resolution (DealershipBranch, SalesAgent, CarForSale)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Avtosalonlar tarmog'ida agar mashinalar (**CarForSale**) faqat savdo agenti (**SalesAgent**) orqali filialga (**DealershipBranch**) bog'langan bo'lsa, jiddiy muammo kelib chiqadi: yangi kelgan va hali agent biriktirilmagan avtomobil qaysi filialda turganini tizim aniqlay olmaydi (Chasm Trap — oraliq aloqa uzilishi!). Yechim: Filial va avtomobil o'rtasida to'g'ridan-to'g'ri (Direct) aloqa o'rnatiladi, agentning mashinani sotishi esa ixtiyoriy (ixtiyoriy bittalik) bog'lanish sifatida saqlanadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `DealershipBranch`: {PK} `branchId`, `branchName`, `showroomAddress`. 2. `SalesAgent`: {PK} `agentId`, `agentName`, `salesCommissionPct`. 3. `CarForSale`: {PK} `vinCode`, `modelName`, `priceUsd`. 4. Aloqalarni bog'lang: - Filial agentni ishlatadi: `DealershipBranch` ⟷ `SalesAgent` (qat'iy bittalik va ixtiyoriy ko'plik munosabati) - Agent mashinani sotadi: `SalesAgent` ⟷ `CarForSale` (ixtiyoriy bittalik va ixtiyoriy ko'plik munosabati) - TUZOQNI YECHISH (Direct aloqa): Filial avtomobilga ega: `DealershipBranch` ⟷ `CarForSale` (qat'iy bittalik va majburiy ko'plik munosabati)",
    "storyEn": "Auto Dealership — Chasm Trap Resolution (DealershipBranch, SalesAgent, CarForSale) — Conceptual ER business case study.",
    "instruction": "Chasm Trap tuzog'ini to'g'ridan-to'g'ri filial-avtomobil aloqasi orqali bartaraf eting.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DealershipBranch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "branchId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "showroomAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SalesAgent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "agentId",
          "x": 480,
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
              "name": "salesCommissionPct",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CarForSale",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "vinCode",
          "x": 300,
          "y": 320,
          "attributes": [
            {
              "name": "vinCode",
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
              "name": "priceUsd",
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
          "name": "EmploysAgent",
          "entity1": "DealershipBranch",
          "entity2": "SalesAgent",
          "fromEntityName": "DealershipBranch",
          "toEntityName": "SalesAgent",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AssignedToSell",
          "entity1": "SalesAgent",
          "entity2": "CarForSale",
          "fromEntityName": "SalesAgent",
          "toEntityName": "CarForSale",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "HoldsStockDirect",
          "entity1": "DealershipBranch",
          "entity2": "CarForSale",
          "fromEntityName": "DealershipBranch",
          "toEntityName": "CarForSale",
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
          "name": "DealershipBranch",
          "pk": "branchId",
          "attributes": [
            {
              "name": "branchId",
              "isPK": true
            },
            {
              "name": "branchName",
              "isPK": false
            },
            {
              "name": "showroomAddress",
              "isPK": false
            }
          ]
        },
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
              "name": "salesCommissionPct",
              "isPK": false
            }
          ]
        },
        {
          "name": "CarForSale",
          "pk": "vinCode",
          "attributes": [
            {
              "name": "vinCode",
              "isPK": true
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "priceUsd",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DealershipBranch",
          "entity2": "SalesAgent",
          "fromEntityName": "DealershipBranch",
          "toEntityName": "SalesAgent",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EmploysAgent",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SalesAgent",
          "entity2": "CarForSale",
          "fromEntityName": "SalesAgent",
          "toEntityName": "CarForSale",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "AssignedToSell",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "DealershipBranch",
          "entity2": "CarForSale",
          "fromEntityName": "DealershipBranch",
          "toEntityName": "CarForSale",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HoldsStockDirect",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Автосалон — разрешение ловушки пропасти (дилерский филиал, агент по продажам, CarForSale)",
    "storyRu": "Автосалон — разрешение ловушки пропасти (дилерский филиал, агент по продажам, CarForSale) — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Рохат Директор Автосалона"
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Kamron Alimov",
    "clientRole": "Tashkent City Real Estate Bosh Menejeri",
    "clientAvatar": "🏙️",
    "title": "Tashkent City Ko'chmas Mulk — Chasm Trap Tuzog'i (Filial, Rieltor, Tijorat Mulki)",
    "titleEn": "Commercial Real Estate — Chasm Trap Resolution (AgencyBranch, RealtorBroker, CommercialProperty)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Rieltorlik tarmog'ida agar tijorat mulki (**CommercialProperty**) faqat rieltor (**RealtorBroker**) orqali filialga (**AgencyBranch**) bog'lansa, hali broker tayinlanmagan bo'sh ofislarning qaysi filial nazoratida ekanligi yo'qolib qoladi (Chasm Trap). Yechim: Filial va tijorat mulki o'rtasida to'g'ridan-to'g'ri doimiy aloqa (qat'iy bittalik va majburiy ko'plik munosabati) o'rnatiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `AgencyBranch`: {PK} `branchId`, `branchTitle`, `cityDistrict`. 2. `RealtorBroker`: {PK} `brokerId`, `brokerName`, `brokerLicense`. 3. `CommercialProperty`: {PK} `cadastreNumber`, `areaSqM`, `leaseRateMonth`. 4. 3 ta aloqani bog'lang: - `AgencyBranch` ⟷ `RealtorBroker`: bitta majburiy hamda ixtiyoriy ko'plik - `RealtorBroker` ⟷ `CommercialProperty`: ixtiyoriy bittalik hamda ixtiyoriy ko'plik - `AgencyBranch` ⟷ `CommercialProperty` (Direct): bitta majburiy hamda majburiy ko'plik",
    "storyEn": "Commercial Real Estate — Chasm Trap Resolution (AgencyBranch, RealtorBroker, CommercialProperty) — Conceptual ER business case study.",
    "instruction": "Rieltor tayinlanmagan mulklar yo'qolmasligi uchun Chasm Trapni yechuvchi to'g'ridan-to'g'ri aloqani qo'shing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AgencyBranch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "branchId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "branchId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityDistrict",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RealtorBroker",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "brokerId",
          "x": 480,
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
            },
            {
              "name": "brokerLicense",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CommercialProperty",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "cadastreNumber",
          "x": 300,
          "y": 320,
          "attributes": [
            {
              "name": "cadastreNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "areaSqM",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "leaseRateMonth",
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
          "name": "EngagesBroker",
          "entity1": "AgencyBranch",
          "entity2": "RealtorBroker",
          "fromEntityName": "AgencyBranch",
          "toEntityName": "RealtorBroker",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ManagesListing",
          "entity1": "RealtorBroker",
          "entity2": "CommercialProperty",
          "fromEntityName": "RealtorBroker",
          "toEntityName": "CommercialProperty",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "OverseesPropertyDirect",
          "entity1": "AgencyBranch",
          "entity2": "CommercialProperty",
          "fromEntityName": "AgencyBranch",
          "toEntityName": "CommercialProperty",
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
          "name": "AgencyBranch",
          "pk": "branchId",
          "attributes": [
            {
              "name": "branchId",
              "isPK": true
            },
            {
              "name": "branchTitle",
              "isPK": false
            },
            {
              "name": "cityDistrict",
              "isPK": false
            }
          ]
        },
        {
          "name": "RealtorBroker",
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
              "name": "brokerLicense",
              "isPK": false
            }
          ]
        },
        {
          "name": "CommercialProperty",
          "pk": "cadastreNumber",
          "attributes": [
            {
              "name": "cadastreNumber",
              "isPK": true
            },
            {
              "name": "areaSqM",
              "isPK": false
            },
            {
              "name": "leaseRateMonth",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AgencyBranch",
          "entity2": "RealtorBroker",
          "fromEntityName": "AgencyBranch",
          "toEntityName": "RealtorBroker",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EngagesBroker",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "RealtorBroker",
          "entity2": "CommercialProperty",
          "fromEntityName": "RealtorBroker",
          "toEntityName": "CommercialProperty",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "ManagesListing",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "AgencyBranch",
          "entity2": "CommercialProperty",
          "fromEntityName": "AgencyBranch",
          "toEntityName": "CommercialProperty",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "OverseesPropertyDirect",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Коммерческая недвижимость: разрешение ловушки пропасти (AgencyBranch, RealtorBroker, CommercialProperty)",
    "storyRu": "Коммерческая недвижимость — Разрешение ловушки пропасти (AgencyBranch, RealtorBroker, CommercialProperty) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Генеральный директор компании «Ташкент Сити Недвижимость»"
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Nargiza Sodiqova",
    "clientRole": "Apex Insurance Sug'urta Boshqaruvchisi",
    "clientAvatar": "🛡️",
    "title": "Apex Sug'urta — Chasm Trap Tuzog'i (Ofis, Sug'urta Agenti, Polis)",
    "titleEn": "Insurance Company — Chasm Trap Resolution (InsuranceOffice, InsuranceAgent, PolicyContract)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Kompaniyada mijozlar sayt orqali mustaqil ravishda sug'urta polisini (**PolicyContract**) sotib olishlari mumkin. Agar polis faqat sug'urta agenti (**InsuranceAgent**) orqali ofisga (**InsuranceOffice**) bog'langan bo'lsa, agentsiz sotilgan polislar qaysi hududiy ofis hisobiga tushishi yo'qoladi (Chasm Trap). Yechim: Har bir polis to'g'ridan-to'g'ri hududiy ofisga biriktiriladi, agent ishtiroki esa ixtiyoriy qilinadi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `InsuranceOffice`: {PK} `officeCode`, `officeName`, `regionPhone`. 2. `InsuranceAgent`: {PK} `agentCode`, `agentName`, `agentTaxId`. 3. `PolicyContract`: {PK} `policyNumber`, `coverageAmount`, `premiumCost`. 4. Aloqalarni bog'lang: - `InsuranceOffice` ⟷ `InsuranceAgent`: bitta majburiy hamda ixtiyoriy ko'plik - `InsuranceAgent` ⟷ `PolicyContract`: ixtiyoriy bittalik hamda ixtiyoriy ko'plik - `InsuranceOffice` ⟷ `PolicyContract` (Direct): bitta majburiy hamda majburiy ko'plik",
    "storyEn": "Insurance Company — Chasm Trap Resolution (InsuranceOffice, InsuranceAgent, PolicyContract) — Conceptual ER business case study.",
    "instruction": "Sug'urta ofisi va polis o'rtasida to'g'ridan-to'g'ri aloqa bog'lab Chasm Trapni bartaraf qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "InsuranceOffice",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "officeCode",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "officeCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "officeName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regionPhone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InsuranceAgent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "agentCode",
          "x": 480,
          "y": 120,
          "attributes": [
            {
              "name": "agentCode",
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
              "name": "agentTaxId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PolicyContract",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "policyNumber",
          "x": 300,
          "y": 320,
          "attributes": [
            {
              "name": "policyNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "coverageAmount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "premiumCost",
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
          "name": "EmploysAgent",
          "entity1": "InsuranceOffice",
          "entity2": "InsuranceAgent",
          "fromEntityName": "InsuranceOffice",
          "toEntityName": "InsuranceAgent",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "BrokersPolicy",
          "entity1": "InsuranceAgent",
          "entity2": "PolicyContract",
          "fromEntityName": "InsuranceAgent",
          "toEntityName": "PolicyContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "RegistersPolicyDirect",
          "entity1": "InsuranceOffice",
          "entity2": "PolicyContract",
          "fromEntityName": "InsuranceOffice",
          "toEntityName": "PolicyContract",
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
          "name": "InsuranceOffice",
          "pk": "officeCode",
          "attributes": [
            {
              "name": "officeCode",
              "isPK": true
            },
            {
              "name": "officeName",
              "isPK": false
            },
            {
              "name": "regionPhone",
              "isPK": false
            }
          ]
        },
        {
          "name": "InsuranceAgent",
          "pk": "agentCode",
          "attributes": [
            {
              "name": "agentCode",
              "isPK": true
            },
            {
              "name": "agentName",
              "isPK": false
            },
            {
              "name": "agentTaxId",
              "isPK": false
            }
          ]
        },
        {
          "name": "PolicyContract",
          "pk": "policyNumber",
          "attributes": [
            {
              "name": "policyNumber",
              "isPK": true
            },
            {
              "name": "coverageAmount",
              "isPK": false
            },
            {
              "name": "premiumCost",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceOffice",
          "entity2": "InsuranceAgent",
          "fromEntityName": "InsuranceOffice",
          "toEntityName": "InsuranceAgent",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EmploysAgent",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "InsuranceAgent",
          "entity2": "PolicyContract",
          "fromEntityName": "InsuranceAgent",
          "toEntityName": "PolicyContract",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "BrokersPolicy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "InsuranceOffice",
          "entity2": "PolicyContract",
          "fromEntityName": "InsuranceOffice",
          "toEntityName": "PolicyContract",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "RegistersPolicyDirect",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Страховая компания — разрешение ловушки пропасти (InsuranceOffice, InsuranceAgent, PolicyContract)",
    "storyRu": "Страховая компания — Разрешение ловушки пропасти (InsuranceOffice, InsuranceAgent, PolicyContract) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Apex Insurance Менеджер по страхованию"
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Bekzod Rahimov",
    "clientRole": "Ucell Texnik Yordam Markazi Rahbari",
    "clientAvatar": "📞",
    "title": "Ucell Support — Chasm Trap Tuzog'i (Markaz, Texnik Xodim, Nosozlik Tiketi)",
    "titleEn": "Telecom Support — Chasm Trap Resolution (SupportCenter, Technician, IncidentTicket)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Uyali aloqa operatorida mijoz murojaati bilan avtomatik ochilgan yangi tiketlar (**IncidentTicket**) navbatda turadi va hali birorta texnik xodimga (**SupportTechnician**) biriktirilmagan bo'ladi. Agar tiket faqat muhandis orqali markazga (**SupportCenter**) ulangan bo'lsa, navbatdagi tiketlar qaysi texnik markazga tegishli ekanligi noaniq qoladi (Chasm Trap). Yechim: Markaz bilan barcha tiketlar o'rtasida to'g'ridan-to'g'ri qat'iy aloqa o'rnatiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `SupportCenter`: {PK} `centerId`, `centerName`, `supportShiftHours`. 2. `SupportTechnician`: {PK} `techId`, `techName`, `expertiseSkill`. 3. `IncidentTicket`: {PK} `ticketId`, `issueSeverity`, `openedTimestamp`. 4. Aloqalarni bog'lang: - `SupportCenter` ⟷ `SupportTechnician`: bitta majburiy hamda ixtiyoriy ko'plik - `SupportTechnician` ⟷ `IncidentTicket`: ixtiyoriy bittalik hamda ixtiyoriy ko'plik - `SupportCenter` ⟷ `IncidentTicket` (Direct): bitta majburiy hamda majburiy ko'plik",
    "storyEn": "Telecom Support — Chasm Trap Resolution (SupportCenter, Technician, IncidentTicket) — Conceptual ER business case study.",
    "instruction": "Hali muhandisga berilmagan tiketlar yo'qolmasligi uchun Chasm Trapni to'g'ridan-to'g'ri aloqa bilan yeching.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SupportCenter",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "centerId",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "centerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "centerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "supportShiftHours",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupportTechnician",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "techId",
          "x": 480,
          "y": 120,
          "attributes": [
            {
              "name": "techId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "techName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "expertiseSkill",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IncidentTicket",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "ticketId",
          "x": 300,
          "y": 320,
          "attributes": [
            {
              "name": "ticketId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issueSeverity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "openedTimestamp",
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
          "name": "EmploysTech",
          "entity1": "SupportCenter",
          "entity2": "SupportTechnician",
          "fromEntityName": "SupportCenter",
          "toEntityName": "SupportTechnician",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "InvestigatesTicket",
          "entity1": "SupportTechnician",
          "entity2": "IncidentTicket",
          "fromEntityName": "SupportTechnician",
          "toEntityName": "IncidentTicket",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "LogsTicketDirect",
          "entity1": "SupportCenter",
          "entity2": "IncidentTicket",
          "fromEntityName": "SupportCenter",
          "toEntityName": "IncidentTicket",
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
          "name": "SupportCenter",
          "pk": "centerId",
          "attributes": [
            {
              "name": "centerId",
              "isPK": true
            },
            {
              "name": "centerName",
              "isPK": false
            },
            {
              "name": "supportShiftHours",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupportTechnician",
          "pk": "techId",
          "attributes": [
            {
              "name": "techId",
              "isPK": true
            },
            {
              "name": "techName",
              "isPK": false
            },
            {
              "name": "expertiseSkill",
              "isPK": false
            }
          ]
        },
        {
          "name": "IncidentTicket",
          "pk": "ticketId",
          "attributes": [
            {
              "name": "ticketId",
              "isPK": true
            },
            {
              "name": "issueSeverity",
              "isPK": false
            },
            {
              "name": "openedTimestamp",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SupportCenter",
          "entity2": "SupportTechnician",
          "fromEntityName": "SupportCenter",
          "toEntityName": "SupportTechnician",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EmploysTech",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SupportTechnician",
          "entity2": "IncidentTicket",
          "fromEntityName": "SupportTechnician",
          "toEntityName": "IncidentTicket",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "InvestigatesTicket",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "SupportCenter",
          "entity2": "IncidentTicket",
          "fromEntityName": "SupportCenter",
          "toEntityName": "IncidentTicket",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "LogsTicketDirect",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Поддержка в сфере телекоммуникаций — разрешение ловушек разногласий (центр поддержки, технический специалист, IncidentTicket)",
    "storyRu": "Поддержка телекоммуникаций — устранение ловушек разногласий (центр поддержки, технический специалист, IncidentTicket) — концептуальное экономическое исследование ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель Центра технической поддержки Ucell"
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Sayyora Karimova",
    "clientRole": "O'zbekturizm Ekskursiyalar Koordinatori",
    "clientAvatar": "🗺️",
    "title": "Sayyohlik Agentligi — Chasm Trap Tuzog'i (Agentlik, Gid, Turistik Guruh)",
    "titleEn": "Tourism Agency — Chasm Trap Resolution (TourBranch, TourGuide, TravelGroup)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Tarixiy shaharlar bo'ylab sayohat guruhlari (**TravelGroup**) ichida mustaqil erkin sayohat qiluvchi guruhlar ham bor va ularga gid (**TourGuide**) biriktirilmaydi. Agar sayyohlik guruhi faqat gid orqali agentlikka (**TourBranch**) ulangan bo'lsa, gidsiz guruhlar qaysi agentlikka tegishliligi ko'rinmay qoladi (Chasm Trap). Yechim: Agentlik va sayohat guruhi o'rtasida to'g'ridan-to'g'ri nazorat aloqasi o'rnatiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `TourBranch`: {PK} `branchCode`, `branchCity`, `hotlinePhone`. 2. `TourGuide`: {PK} `guideBadge`, `guideName`, `spokenLanguages`. 3. `TravelGroup`: {PK} `groupCode`, `groupSize`, `startDate`. 4. Aloqalarni bog'lang: - `TourBranch` ⟷ `TourGuide`: bitta majburiy hamda ixtiyoriy ko'plik - `TourGuide` ⟷ `TravelGroup`: ixtiyoriy bittalik hamda ixtiyoriy ko'plik - `TourBranch` ⟷ `TravelGroup` (Direct): bitta majburiy hamda majburiy ko'plik",
    "storyEn": "Tourism Agency — Chasm Trap Resolution (TourBranch, TourGuide, TravelGroup) — Conceptual ER business case study.",
    "instruction": "Gid tayinlanmagan mustaqil sayohat guruhlari uchun Chasm Trapni bartaraf qiluvchi aloqani o'rnating.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TourBranch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "branchCode",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "branchCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchCity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hotlinePhone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TourGuide",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "guideBadge",
          "x": 480,
          "y": 120,
          "attributes": [
            {
              "name": "guideBadge",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "guideName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "spokenLanguages",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TravelGroup",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "groupCode",
          "x": 300,
          "y": 320,
          "attributes": [
            {
              "name": "groupCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "groupSize",
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
          "name": "ContractsGuide",
          "entity1": "TourBranch",
          "entity2": "TourGuide",
          "fromEntityName": "TourBranch",
          "toEntityName": "TourGuide",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AccompaniesGroup",
          "entity1": "TourGuide",
          "entity2": "TravelGroup",
          "fromEntityName": "TourGuide",
          "toEntityName": "TravelGroup",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "OrganizesGroupDirect",
          "entity1": "TourBranch",
          "entity2": "TravelGroup",
          "fromEntityName": "TourBranch",
          "toEntityName": "TravelGroup",
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
          "name": "TourBranch",
          "pk": "branchCode",
          "attributes": [
            {
              "name": "branchCode",
              "isPK": true
            },
            {
              "name": "branchCity",
              "isPK": false
            },
            {
              "name": "hotlinePhone",
              "isPK": false
            }
          ]
        },
        {
          "name": "TourGuide",
          "pk": "guideBadge",
          "attributes": [
            {
              "name": "guideBadge",
              "isPK": true
            },
            {
              "name": "guideName",
              "isPK": false
            },
            {
              "name": "spokenLanguages",
              "isPK": false
            }
          ]
        },
        {
          "name": "TravelGroup",
          "pk": "groupCode",
          "attributes": [
            {
              "name": "groupCode",
              "isPK": true
            },
            {
              "name": "groupSize",
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
          "entity1": "TourBranch",
          "entity2": "TourGuide",
          "fromEntityName": "TourBranch",
          "toEntityName": "TourGuide",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ContractsGuide",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "TourGuide",
          "entity2": "TravelGroup",
          "fromEntityName": "TourGuide",
          "toEntityName": "TravelGroup",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "AccompaniesGroup",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "TourBranch",
          "entity2": "TravelGroup",
          "fromEntityName": "TourBranch",
          "toEntityName": "TravelGroup",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "OrganizesGroupDirect",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Туристическое агентство — Разрешение ловушки пропасти (TourBranch, TourGuide, TravelGroup)",
    "storyRu": "Туристическое агентство — Разрешение ловушки пропасти (TourBranch, TourGuide, TravelGroup) — Концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Координатор экскурсий Узбектуризма"
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Sanjar Ahmedov",
    "clientRole": "Ipak Yo'li Bank Chakana Kredit Boshlig'i",
    "clientAvatar": "💳",
    "title": "Ipak Yo'li Bank — Chasm Trap Tuzog'i (Filial, Kredit Ofitseri, Ariza)",
    "titleEn": "Commercial Bank — Chasm Trap Resolution (BankBranch, CreditOfficer, LoanApplication)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Bank mobil ilovasi orqali tushgan kredit arizalari (**LoanApplication**) dastlab avtomatlashtirilgan navbatda turadi va hali kredit mutaxassisiga (**CreditOfficer**) taqsimlanmagan bo'ladi. Agar ariza faqat ofitser orqali filialga (**BankBranch**) bog'langan bo'lsa, navbatdagi arizalar qaysi filial portfeliga tegishliligi yo'qoladi (Chasm Trap). Yechim: Bank filiali bilan arizalar o'rtasida to'g'ridan-to'g'ri hisobga olish aloqasi o'rnatiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `BankBranch`: {PK} `branchMfo`, `branchTitle`, `vaultLocation`. 2. `CreditOfficer`: {PK} `officerId`, `officerName`, `creditApprovalLimit`. 3. `LoanApplication`: {PK} `appRegNumber`, `requestedSum`, `applicationDate`. 4. Aloqalarni bog'lang: - `BankBranch` ⟷ `CreditOfficer`: bitta majburiy hamda ixtiyoriy ko'plik - `CreditOfficer` ⟷ `LoanApplication`: ixtiyoriy bittalik hamda ixtiyoriy ko'plik - `BankBranch` ⟷ `LoanApplication` (Direct): bitta majburiy hamda majburiy ko'plik",
    "storyEn": "Commercial Bank — Chasm Trap Resolution (BankBranch, CreditOfficer, LoanApplication) — Conceptual ER business case study.",
    "instruction": "Kredit mutaxassisi hali taqsimlanmagan arizalar yo'qolmasligi uchun to'g'ridan-to'g'ri aloqani bog'lang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankBranch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "branchMfo",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "branchMfo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vaultLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CreditOfficer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "officerId",
          "x": 480,
          "y": 120,
          "attributes": [
            {
              "name": "officerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "officerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "creditApprovalLimit",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LoanApplication",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "appRegNumber",
          "x": 300,
          "y": 320,
          "attributes": [
            {
              "name": "appRegNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "requestedSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "applicationDate",
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
          "name": "AppointsOfficer",
          "entity1": "BankBranch",
          "entity2": "CreditOfficer",
          "fromEntityName": "BankBranch",
          "toEntityName": "CreditOfficer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AssessesLoan",
          "entity1": "CreditOfficer",
          "entity2": "LoanApplication",
          "fromEntityName": "CreditOfficer",
          "toEntityName": "LoanApplication",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "ReceivesAppDirect",
          "entity1": "BankBranch",
          "entity2": "LoanApplication",
          "fromEntityName": "BankBranch",
          "toEntityName": "LoanApplication",
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
          "name": "BankBranch",
          "pk": "branchMfo",
          "attributes": [
            {
              "name": "branchMfo",
              "isPK": true
            },
            {
              "name": "branchTitle",
              "isPK": false
            },
            {
              "name": "vaultLocation",
              "isPK": false
            }
          ]
        },
        {
          "name": "CreditOfficer",
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
              "name": "creditApprovalLimit",
              "isPK": false
            }
          ]
        },
        {
          "name": "LoanApplication",
          "pk": "appRegNumber",
          "attributes": [
            {
              "name": "appRegNumber",
              "isPK": true
            },
            {
              "name": "requestedSum",
              "isPK": false
            },
            {
              "name": "applicationDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BankBranch",
          "entity2": "CreditOfficer",
          "fromEntityName": "BankBranch",
          "toEntityName": "CreditOfficer",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AppointsOfficer",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CreditOfficer",
          "entity2": "LoanApplication",
          "fromEntityName": "CreditOfficer",
          "toEntityName": "LoanApplication",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "AssessesLoan",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "BankBranch",
          "entity2": "LoanApplication",
          "fromEntityName": "BankBranch",
          "toEntityName": "LoanApplication",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ReceivesAppDirect",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Коммерческий банк — разрешение ловушки пропасти (BankBranch, CreditOfficer, LoanApplication)",
    "storyRu": "Коммерческий банк — Разрешение ловушки пропасти (BankBranch, CreditOfficer, LoanApplication) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель розничного кредитования банка Silk Road"
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "Qiyin",
    "clientName": "Nasiba Ochilova",
    "clientRole": "Sharq Nashriyoti Bosh Muharriri",
    "clientAvatar": "📚",
    "title": "Sharq Nashriyoti — Chasm Trap Tuzog'i (Nashriyot, Muharrir, Qo'lyozma)",
    "titleEn": "Publishing House — Chasm Trap Resolution (PublishingHouse, LiteraryEditor, BookManuscript)",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Nashriyotga mualliflar tomonidan topshirilgan yangi kitob qo'lyozmalari (**BookManuscript**) dastlab ro'yxatdan o'tadi va ko'rib chiqish uchun muharrirga (**LiteraryEditor**) darhol biriktirilmasligi mumkin. Agar qo'lyozma faqat muharrir orqali nashriyotga (**PublishingHouse**) bog'lansa, muharrirsiz yangi qo'lyozmalar nashriyot arxiv tizimidan yo'qolib qoladi (Chasm Trap). Yechim: Nashriyot va qo'lyozma o'rtasida to'g'ridan-to'g'ri ro'yxatga olish aloqasi o'rnatiladi. 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `PublishingHouse`: {PK} `publisherInn`, `houseName`, `editorialOffice`. 2. `LiteraryEditor`: {PK} `editorId`, `editorName`, `genreSpecialty`. 3. `BookManuscript`: {PK} `isbnProposal`, `manuscriptTitle`, `pageCount`. 4. Aloqalarni bog'lang: - `PublishingHouse` ⟷ `LiteraryEditor`: bitta majburiy hamda ixtiyoriy ko'plik - `LiteraryEditor` ⟷ `BookManuscript`: ixtiyoriy bittalik hamda ixtiyoriy ko'plik - `PublishingHouse` ⟷ `BookManuscript` (Direct): bitta majburiy hamda majburiy ko'plik",
    "storyEn": "Publishing House — Chasm Trap Resolution (PublishingHouse, LiteraryEditor, BookManuscript) — Conceptual ER business case study.",
    "instruction": "Muharrir biriktirilmagan yangi qo'lyozmalar uchun Chasm Trapni to'g'ridan-to'g'ri aloqa bilan yeching.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PublishingHouse",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "publisherInn",
          "x": 120,
          "y": 120,
          "attributes": [
            {
              "name": "publisherInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "houseName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "editorialOffice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LiteraryEditor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "editorId",
          "x": 480,
          "y": 120,
          "attributes": [
            {
              "name": "editorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "editorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "genreSpecialty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BookManuscript",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "isbnProposal",
          "x": 300,
          "y": 320,
          "attributes": [
            {
              "name": "isbnProposal",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "manuscriptTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pageCount",
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
          "name": "EmploysEditor",
          "entity1": "PublishingHouse",
          "entity2": "LiteraryEditor",
          "fromEntityName": "PublishingHouse",
          "toEntityName": "LiteraryEditor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "EditsManuscript",
          "entity1": "LiteraryEditor",
          "entity2": "BookManuscript",
          "fromEntityName": "LiteraryEditor",
          "toEntityName": "BookManuscript",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "AcceptsManuscriptDirect",
          "entity1": "PublishingHouse",
          "entity2": "BookManuscript",
          "fromEntityName": "PublishingHouse",
          "toEntityName": "BookManuscript",
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
          "name": "PublishingHouse",
          "pk": "publisherInn",
          "attributes": [
            {
              "name": "publisherInn",
              "isPK": true
            },
            {
              "name": "houseName",
              "isPK": false
            },
            {
              "name": "editorialOffice",
              "isPK": false
            }
          ]
        },
        {
          "name": "LiteraryEditor",
          "pk": "editorId",
          "attributes": [
            {
              "name": "editorId",
              "isPK": true
            },
            {
              "name": "editorName",
              "isPK": false
            },
            {
              "name": "genreSpecialty",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookManuscript",
          "pk": "isbnProposal",
          "attributes": [
            {
              "name": "isbnProposal",
              "isPK": true
            },
            {
              "name": "manuscriptTitle",
              "isPK": false
            },
            {
              "name": "pageCount",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PublishingHouse",
          "entity2": "LiteraryEditor",
          "fromEntityName": "PublishingHouse",
          "toEntityName": "LiteraryEditor",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "EmploysEditor",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "LiteraryEditor",
          "entity2": "BookManuscript",
          "fromEntityName": "LiteraryEditor",
          "toEntityName": "BookManuscript",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "EditsManuscript",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "PublishingHouse",
          "entity2": "BookManuscript",
          "fromEntityName": "PublishingHouse",
          "toEntityName": "BookManuscript",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "AcceptsManuscriptDirect",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Издательство — Разрешение ловушки пропасти (Издательство, Литературный редактор, BookManuscript)",
    "storyRu": "Издательство — «Разрешение ловушки пропасти» (Издательство, Литературный редактор, BookManuscript) — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный редактор Восточного издательства"
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Sardor Jalolov",
    "clientRole": "Toshkent Xalqaro Aeroporti IT Direktori",
    "clientAvatar": "🛫",
    "title": "Toshkent Aeroporti — Parvozlar, Yo'lovchilar va Qo'nish Talonlari (Flight Boarding Lifecycle)",
    "titleEn": "Tashkent International Airport — Flight, Passenger and Boarding Pass Master ER",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Toshkent xalqaro aeroportida parvozlar va yo'lovchilar boshqaruvi 4 ta asosiy entitiy orqali amalga oshiriladi: 1. **CommercialAirline** (Aviakompaniya) — aviaqatnovlarni rejalashtiradi va boshqaradi. 2. **FlightSchedule** (Aviaqatnov) — muayyan sana va marshrutdagi reys. 3. **FlightPassenger** (Yo'lovchi) — chipta egasi bo'lgan jismoniy shaxs. 4. **BoardingPass** (Qo'nish Taloni) — yo'lovchining samolyotga chiqish va o'rindiqni band qilish hujjati. Aviakompaniya bir nechta reyslarni amalga oshiradi (qat'iy bittalik va majburiy ko'plik munosabati). Har bir reys bo'yicha yo'lovchilarga qo'nish talonlari beriladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Har bir yo'lovchi o'z navbatida qo'nish talonlariga ega bo'ladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CommercialAirline`: {PK} `airlineCode`, `airlineName`, `countryHQ`. 2. `FlightSchedule`: {PK} `flightNumber`, `originIata`, `destIata`, `departureTime`. 3. `FlightPassenger`: {PK} `passportNumber`, `passengerName`, `nationality`. 4. `BoardingPass`: {PK} `boardingPassId`, `seatNumber`, `gateNumber`, `isBoarded`. 5. 3 ta munosabatni to'g'ri multiplisitiyalar bilan bog'lang: - `CommercialAirline` ⟷ `FlightSchedule`: bitta majburiy hamda majburiy ko'plik - `FlightSchedule` ⟷ `BoardingPass`: bitta majburiy hamda ixtiyoriy ko'plik - `FlightPassenger` ⟷ `BoardingPass`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Tashkent International Airport — Flight, Passenger and Boarding Pass Master ER — Conceptual ER business case study.",
    "instruction": "Aeroportning aviakompaniya, reys, yo'lovchi va qo'nish taloni korxona modelini barpo qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CommercialAirline",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "airlineCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "airlineCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "airlineName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "countryHQ",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FlightSchedule",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "flightNumber",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "flightNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "originIata",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destIata",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "departureTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FlightPassenger",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "passportNumber",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "passportNumber",
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
              "name": "nationality",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BoardingPass",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "boardingPassId",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "boardingPassId",
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
              "name": "gateNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isBoarded",
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
          "name": "OperatesFlight",
          "entity1": "CommercialAirline",
          "entity2": "FlightSchedule",
          "fromEntityName": "CommercialAirline",
          "toEntityName": "FlightSchedule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "IssuesPass",
          "entity1": "FlightSchedule",
          "entity2": "BoardingPass",
          "fromEntityName": "FlightSchedule",
          "toEntityName": "BoardingPass",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "HoldsPass",
          "entity1": "FlightPassenger",
          "entity2": "BoardingPass",
          "fromEntityName": "FlightPassenger",
          "toEntityName": "BoardingPass",
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
          "name": "CommercialAirline",
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
              "name": "countryHQ",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlightSchedule",
          "pk": "flightNumber",
          "attributes": [
            {
              "name": "flightNumber",
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
        },
        {
          "name": "FlightPassenger",
          "pk": "passportNumber",
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "nationality",
              "isPK": false
            }
          ]
        },
        {
          "name": "BoardingPass",
          "pk": "boardingPassId",
          "attributes": [
            {
              "name": "boardingPassId",
              "isPK": true
            },
            {
              "name": "seatNumber",
              "isPK": false
            },
            {
              "name": "gateNumber",
              "isPK": false
            },
            {
              "name": "isBoarded",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CommercialAirline",
          "entity2": "FlightSchedule",
          "fromEntityName": "CommercialAirline",
          "toEntityName": "FlightSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "OperatesFlight",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "FlightSchedule",
          "entity2": "BoardingPass",
          "fromEntityName": "FlightSchedule",
          "toEntityName": "BoardingPass",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "IssuesPass",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "FlightPassenger",
          "entity2": "BoardingPass",
          "fromEntityName": "FlightPassenger",
          "toEntityName": "BoardingPass",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "HoldsPass",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Международный аэропорт Ташкента — Мастер ER по рейсам, пассажирам и посадочным талонам",
    "storyRu": "Международный аэропорт Ташкента — Мастер ER для полетов, пассажиров и посадочных талонов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "ИТ-директор Международного аэропорта Ташкент"
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Dilshod Fayziyev",
    "clientRole": "O'zbekiston Markaziy Banki Kliring Markazi Rahbari",
    "clientAvatar": "🏦",
    "title": "Markaziy Bank — Banklararo Kliring va Tranzaksiyalar (National Clearing System)",
    "titleEn": "Central Bank — Interbank Clearing & Settlement Architecture",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Markaziy Bankning banklararo milliy hisob-kitoblar tizimi quyidagi 4 bo'g'indan tashkil topgan: 1. **CommercialBank** — litsenziyaga ega bosh bank muassasasi. 2. **BankBranch** — hududiy bank filiali (MFO). 3. **CustomerAccount** — mijozning 20 xonali bank hisobraqami. 4. **ClearingTransaction** — banklararo kliring orqali o'tgan pul o'tkazmasi. Bank filiallar ochadi (qat'iy bittalik va majburiy ko'plik munosabati), filial hisobraqamlar ochadi (qat'iy bittalik va majburiy ko'plik munosabati), hisobraqam orqali kliring tranzaksiyalari yuboriladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CommercialBank`: {PK} `bankLicenseCode`, `bankName`, `capitalSum`. 2. `BankBranch`: {PK} `mfoCode`, `branchTitle`, `cityAddress`. 3. `CustomerAccount`: {PK} `account20`, `currencyCode`, `currentBalance`. 4. `ClearingTransaction`: {PK} `transRefNumber`, `transAmount`, `settledAt`. 5. 3 ta munosabatni ketma-ketlikda bog'lang: - `CommercialBank` ⟷ `BankBranch`: bitta majburiy hamda majburiy ko'plik - `BankBranch` ⟷ `CustomerAccount`: bitta majburiy hamda majburiy ko'plik - `CustomerAccount` ⟷ `ClearingTransaction`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Central Bank — Interbank Clearing & Settlement Architecture — Conceptual ER business case study.",
    "instruction": "Markaziy Bank kliring tizimi ierarxiyasini to'g'ri multiplisitiyalar bilan yakunlang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CommercialBank",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "bankLicenseCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "bankLicenseCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bankName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capitalSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BankBranch",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "mfoCode",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "mfoCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CustomerAccount",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "account20",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "account20",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "currencyCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "currentBalance",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ClearingTransaction",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "transRefNumber",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "transRefNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "transAmount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "settledAt",
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
          "name": "OperatesBranch",
          "entity1": "CommercialBank",
          "entity2": "BankBranch",
          "fromEntityName": "CommercialBank",
          "toEntityName": "BankBranch",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "MaintainsAccount",
          "entity1": "BankBranch",
          "entity2": "CustomerAccount",
          "fromEntityName": "BankBranch",
          "toEntityName": "CustomerAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "ExecutesTrans",
          "entity1": "CustomerAccount",
          "entity2": "ClearingTransaction",
          "fromEntityName": "CustomerAccount",
          "toEntityName": "ClearingTransaction",
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
          "name": "CommercialBank",
          "pk": "bankLicenseCode",
          "attributes": [
            {
              "name": "bankLicenseCode",
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
          "name": "BankBranch",
          "pk": "mfoCode",
          "attributes": [
            {
              "name": "mfoCode",
              "isPK": true
            },
            {
              "name": "branchTitle",
              "isPK": false
            },
            {
              "name": "cityAddress",
              "isPK": false
            }
          ]
        },
        {
          "name": "CustomerAccount",
          "pk": "account20",
          "attributes": [
            {
              "name": "account20",
              "isPK": true
            },
            {
              "name": "currencyCode",
              "isPK": false
            },
            {
              "name": "currentBalance",
              "isPK": false
            }
          ]
        },
        {
          "name": "ClearingTransaction",
          "pk": "transRefNumber",
          "attributes": [
            {
              "name": "transRefNumber",
              "isPK": true
            },
            {
              "name": "transAmount",
              "isPK": false
            },
            {
              "name": "settledAt",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CommercialBank",
          "entity2": "BankBranch",
          "fromEntityName": "CommercialBank",
          "toEntityName": "BankBranch",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "OperatesBranch",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "BankBranch",
          "entity2": "CustomerAccount",
          "fromEntityName": "BankBranch",
          "toEntityName": "CustomerAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "MaintainsAccount",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CustomerAccount",
          "entity2": "ClearingTransaction",
          "fromEntityName": "CustomerAccount",
          "toEntityName": "ClearingTransaction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "ExecutesTrans",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Центральный банк — архитектура межбанковского клиринга и расчетов",
    "storyRu": "Центральный банк — Архитектура межбанковского клиринга и расчетов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Руководитель Клирингового центра Центрального банка Узбекистана"
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Prof. Jahongir Otajonov",
    "clientRole": "Respublika Xirurgiya Markazi Bosh Shifokori",
    "clientAvatar": "🏥",
    "title": "Xirurgiya Markazi — Bo'lim, Palata, Bemor Yozuvi va Operatsiya (Hospital Inpatient Surgery)",
    "titleEn": "Surgical Center — Ward, Bed, Inpatient Record & Surgical Procedure",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Klinikada statsionar davolanish va jarrohlik amaliyotlari 4 ta korxona entitiysida ifodalanadi: 1. **MedicalWard** — statsionar bo'lim (masalan, Kardioxirurgiya). 2. **HospitalBed** — bo'limdagi maxsus yotoq joyi. 3. **InpatientRecord** — yotoqqa yotqizilgan bemorning kasallik tarixi. 4. **SurgicalProcedure** — bemor ustida o'tkazilgan operatsiya. Bo'lim yotoqlarga ega (qat'iy bittalik va majburiy ko'plik munosabati). Yotoqda vaqt o'tishi bilan statsionar yozuvlar ro'yxatga olinadi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Statsionar yozuv doirasida jarrohlik amaliyotlari bajariladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `MedicalWard`: {PK} `wardCode`, `wardName`, `floorNumber`. 2. `HospitalBed`: {PK} `bedNumber`, `bedType`, `isOccupied`. 3. `InpatientRecord`: {PK} `recordCardId`, `admissionDate`, `dischargeDate`. 4. `SurgicalProcedure`: {PK} `surgeryId`, `operationType`, `durationHours`. 5. Munosabatlarni bog'lang: - `MedicalWard` ⟷ `HospitalBed`: bitta majburiy hamda majburiy ko'plik - `HospitalBed` ⟷ `InpatientRecord`: bitta majburiy hamda ixtiyoriy ko'plik - `InpatientRecord` ⟷ `SurgicalProcedure`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Surgical Center — Ward, Bed, Inpatient Record & Surgical Procedure — Conceptual ER business case study.",
    "instruction": "Kasalxona statsionar bo'limi, yotoq, bemor tarixi va jarrohlik operatsiyasi modelini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MedicalWard",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "wardCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "wardCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "wardName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HospitalBed",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "bedNumber",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "bedNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bedType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isOccupied",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InpatientRecord",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "recordCardId",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "recordCardId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "admissionDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dischargeDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SurgicalProcedure",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "surgeryId",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "surgeryId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "operationType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "durationHours",
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
          "name": "ContainsBed",
          "entity1": "MedicalWard",
          "entity2": "HospitalBed",
          "fromEntityName": "MedicalWard",
          "toEntityName": "HospitalBed",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AssignedAdmission",
          "entity1": "HospitalBed",
          "entity2": "InpatientRecord",
          "fromEntityName": "HospitalBed",
          "toEntityName": "InpatientRecord",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "UndergoesSurgery",
          "entity1": "InpatientRecord",
          "entity2": "SurgicalProcedure",
          "fromEntityName": "InpatientRecord",
          "toEntityName": "SurgicalProcedure",
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
          "name": "MedicalWard",
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
              "name": "floorNumber",
              "isPK": false
            }
          ]
        },
        {
          "name": "HospitalBed",
          "pk": "bedNumber",
          "attributes": [
            {
              "name": "bedNumber",
              "isPK": true
            },
            {
              "name": "bedType",
              "isPK": false
            },
            {
              "name": "isOccupied",
              "isPK": false
            }
          ]
        },
        {
          "name": "InpatientRecord",
          "pk": "recordCardId",
          "attributes": [
            {
              "name": "recordCardId",
              "isPK": true
            },
            {
              "name": "admissionDate",
              "isPK": false
            },
            {
              "name": "dischargeDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "SurgicalProcedure",
          "pk": "surgeryId",
          "attributes": [
            {
              "name": "surgeryId",
              "isPK": true
            },
            {
              "name": "operationType",
              "isPK": false
            },
            {
              "name": "durationHours",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MedicalWard",
          "entity2": "HospitalBed",
          "fromEntityName": "MedicalWard",
          "toEntityName": "HospitalBed",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ContainsBed",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "HospitalBed",
          "entity2": "InpatientRecord",
          "fromEntityName": "HospitalBed",
          "toEntityName": "InpatientRecord",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AssignedAdmission",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "InpatientRecord",
          "entity2": "SurgicalProcedure",
          "fromEntityName": "InpatientRecord",
          "toEntityName": "SurgicalProcedure",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "UndergoesSurgery",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Хирургический центр — палата, койка, стационарная карта и хирургическая процедура",
    "storyRu": "Хирургический центр — Палата, Койка, Стационарная запись и хирургическая процедура — Концептуальный бизнес-кейс отделения неотложной помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный врач Республиканского хирургического центра"
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Nodirbek Vohidov",
    "clientRole": "Navoiy Erkin Iqtisodiy Zonasi Boshqaruvchisi",
    "clientAvatar": "🏗️",
    "title": "Navoiy EIZ — Sanoat Zonasi, Korxona, Loyiha va Soliq Imtiyozi (Navoi FEZ Investment)",
    "titleEn": "Navoi Free Industrial Zone — Zone, Enterprise, Investment Project & Tax Exemption",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Erkin Iqtisodiy Zonada investitsiyalarni rag'batlantirish tizimi 4 ta entitiyga tayanadi: 1. **IndustrialZone** — EIZ hududiy sektori. 2. **ManufacturingEnterprise** — zonada rezident bo'lgan ishlab chiqaruvchi korxona. 3. **InvestmentProject** — korxona tomonidan amalga oshirilayotgan investitsiya loyihasi. 4. **TaxIncentive** — loyiha doirasida berilgan bojxona yoki soliq imtiyozi sertifikati. Sanoat zonasi korxonalarni qabul qiladi (qat'iy bittalik va majburiy ko'plik munosabati). Har bir korxona loyihalarni yo'lga qo'yadi (qat'iy bittalik va majburiy ko'plik munosabati). Har bir loyihaga soliq imtiyozlari beriladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `IndustrialZone`: {PK} `zoneCode`, `zoneName`, `totalHectares`. 2. `ManufacturingEnterprise`: {PK} `residentInn`, `companyName`, `countryOrigin`. 3. `InvestmentProject`: {PK} `projectCode`, `investedUsd`, `jobsCreated`. 4. `TaxIncentive`: {PK} `certId`, `exemptionCategory`, `validUntilYear`. 5. Munosabatlarni ketma-ketlikda bog'lang: - `IndustrialZone` ⟷ `ManufacturingEnterprise`: bitta majburiy hamda majburiy ko'plik - `ManufacturingEnterprise` ⟷ `InvestmentProject`: bitta majburiy hamda majburiy ko'plik - `InvestmentProject` ⟷ `TaxIncentive`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Navoi Free Industrial Zone — Zone, Enterprise, Investment Project & Tax Exemption — Conceptual ER business case study.",
    "instruction": "Erkin iqtisodiy zona investitsiya zanjiri korxona modelini barpo eting.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "IndustrialZone",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "zoneCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "zoneCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "zoneName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalHectares",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ManufacturingEnterprise",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "residentInn",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "residentInn",
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
              "name": "countryOrigin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InvestmentProject",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "projectCode",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "projectCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "investedUsd",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "jobsCreated",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TaxIncentive",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "certId",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "certId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "exemptionCategory",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "validUntilYear",
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
          "name": "HostsCompany",
          "entity1": "IndustrialZone",
          "entity2": "ManufacturingEnterprise",
          "fromEntityName": "IndustrialZone",
          "toEntityName": "ManufacturingEnterprise",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "LaunchesProject",
          "entity1": "ManufacturingEnterprise",
          "entity2": "InvestmentProject",
          "fromEntityName": "ManufacturingEnterprise",
          "toEntityName": "InvestmentProject",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "GrantedIncentive",
          "entity1": "InvestmentProject",
          "entity2": "TaxIncentive",
          "fromEntityName": "InvestmentProject",
          "toEntityName": "TaxIncentive",
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
          "name": "IndustrialZone",
          "pk": "zoneCode",
          "attributes": [
            {
              "name": "zoneCode",
              "isPK": true
            },
            {
              "name": "zoneName",
              "isPK": false
            },
            {
              "name": "totalHectares",
              "isPK": false
            }
          ]
        },
        {
          "name": "ManufacturingEnterprise",
          "pk": "residentInn",
          "attributes": [
            {
              "name": "residentInn",
              "isPK": true
            },
            {
              "name": "companyName",
              "isPK": false
            },
            {
              "name": "countryOrigin",
              "isPK": false
            }
          ]
        },
        {
          "name": "InvestmentProject",
          "pk": "projectCode",
          "attributes": [
            {
              "name": "projectCode",
              "isPK": true
            },
            {
              "name": "investedUsd",
              "isPK": false
            },
            {
              "name": "jobsCreated",
              "isPK": false
            }
          ]
        },
        {
          "name": "TaxIncentive",
          "pk": "certId",
          "attributes": [
            {
              "name": "certId",
              "isPK": true
            },
            {
              "name": "exemptionCategory",
              "isPK": false
            },
            {
              "name": "validUntilYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "IndustrialZone",
          "entity2": "ManufacturingEnterprise",
          "fromEntityName": "IndustrialZone",
          "toEntityName": "ManufacturingEnterprise",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HostsCompany",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ManufacturingEnterprise",
          "entity2": "InvestmentProject",
          "fromEntityName": "ManufacturingEnterprise",
          "toEntityName": "InvestmentProject",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "LaunchesProject",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "InvestmentProject",
          "entity2": "TaxIncentive",
          "fromEntityName": "InvestmentProject",
          "toEntityName": "TaxIncentive",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "GrantedIncentive",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Свободная индустриальная зона «Навои» — зона, предприятие, инвестиционный проект и освобождение от налогов",
    "storyRu": "Свободная индустриальная зона «Навои» — зона, предприятие, инвестиционный проект и освобождение от налогов — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Менеджер свободной экономической зоны «Навои»"
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Bobur Ziyodov",
    "clientRole": "WIUT Kampus va Talabalar Turar Joyi Komendanti",
    "clientAvatar": "🏢",
    "title": "WIUT Rezidensiya — Bino, Xona, Talaba va Xona Inventarizatsiyasi (Campus Housing Life)",
    "titleEn": "WIUT Campus Housing — Residence Hall, Room, Resident Student & Inventory Audit",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Universitet yotoqxonasi axborot tizimida 4 ta korxona entitiysi o'zaro tutashgan: 1. **ResidenceHall** — talabalar turar joyi binosi. 2. **DormRoom** — binodagi turar joy xonasi. 3. **ResidentStudent** — xonada yashovchi talaba. 4. **RoomInventoryCheck** — xonadagi mebel va jihozlarning davriy inventarizatsiya tekshiruvi. Bino xonalardan iborat (qat'iy bittalik va majburiy ko'plik munosabati). Xonada talabalar istiqomat qiladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Xona bo'yicha davriy inventar aktlari tuziladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `ResidenceHall`: {PK} `hallCode`, `hallName`, `totalRooms`. 2. `DormRoom`: {PK} `roomNumber`, `floorNumber`, `maxBeds`. 3. `ResidentStudent`: {PK} `studentId`, `studentName`, `checkInDate`. 4. `RoomInventoryCheck`: {PK} `auditSlipCode`, `auditDate`, `passedStatus`. 5. Munosabatlarni bog'lang: - `ResidenceHall` ⟷ `DormRoom`: bitta majburiy hamda majburiy ko'plik - `DormRoom` ⟷ `ResidentStudent`: bitta majburiy hamda ixtiyoriy ko'plik - `DormRoom` ⟷ `RoomInventoryCheck`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "WIUT Campus Housing — Residence Hall, Room, Resident Student & Inventory Audit — Conceptual ER business case study.",
    "instruction": "Talabalar turar joyi binosi, xonasi, talaba va inventar nazorati modelini tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResidenceHall",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "hallCode",
          "x": 100,
          "y": 100,
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
              "name": "totalRooms",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DormRoom",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "roomNumber",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "roomNumber",
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
              "name": "maxBeds",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ResidentStudent",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "studentId",
          "x": 100,
          "y": 320,
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
              "name": "checkInDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RoomInventoryCheck",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "auditSlipCode",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "auditSlipCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "auditDate",
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
          "name": "ComprisesRoom",
          "entity1": "ResidenceHall",
          "entity2": "DormRoom",
          "fromEntityName": "ResidenceHall",
          "toEntityName": "DormRoom",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AccommodatesStudent",
          "entity1": "DormRoom",
          "entity2": "ResidentStudent",
          "fromEntityName": "DormRoom",
          "toEntityName": "ResidentStudent",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "AuditedBy",
          "entity1": "DormRoom",
          "entity2": "RoomInventoryCheck",
          "fromEntityName": "DormRoom",
          "toEntityName": "RoomInventoryCheck",
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
          "name": "ResidenceHall",
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
              "name": "totalRooms",
              "isPK": false
            }
          ]
        },
        {
          "name": "DormRoom",
          "pk": "roomNumber",
          "attributes": [
            {
              "name": "roomNumber",
              "isPK": true
            },
            {
              "name": "floorNumber",
              "isPK": false
            },
            {
              "name": "maxBeds",
              "isPK": false
            }
          ]
        },
        {
          "name": "ResidentStudent",
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
              "name": "checkInDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "RoomInventoryCheck",
          "pk": "auditSlipCode",
          "attributes": [
            {
              "name": "auditSlipCode",
              "isPK": true
            },
            {
              "name": "auditDate",
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
          "entity1": "ResidenceHall",
          "entity2": "DormRoom",
          "fromEntityName": "ResidenceHall",
          "toEntityName": "DormRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ComprisesRoom",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "DormRoom",
          "entity2": "ResidentStudent",
          "fromEntityName": "DormRoom",
          "toEntityName": "ResidentStudent",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AccommodatesStudent",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "DormRoom",
          "entity2": "RoomInventoryCheck",
          "fromEntityName": "DormRoom",
          "toEntityName": "RoomInventoryCheck",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AuditedBy",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Жилье в кампусе WIUT — общежитие, комната, студенческий резидент и инвентарный аудит",
    "storyRu": "Жилье в кампусе WIUT — общежитие, комната, студент-резидент и инвентарный аудит — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Декан кампуса и студенческого общежития МВУТ"
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Shuhrat Karimov",
    "clientRole": "UzAuto Motors Asaka Zavodi Sifat Boshqarmasi Boshlig'i",
    "clientAvatar": "🚘",
    "title": "UzAuto Motors — Konveyer Liniyasi, Model, Avtomobil va Sifat Tekshiruvi (Auto Assembly Quality)",
    "titleEn": "UzAuto Assembly — Assembly Line, Car Model, Manufactured Vehicle & Quality Audit",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Asaka avtomobil zavodida ishlab chiqarish jarayoni 4 ta korxona entitiyida modellashtiriladi: 1. **AssemblyLine** — avtomatlashtirilgan payvandlash va yig'ish konveyer liniyasi. 2. **VehicleModel** — avtomobil modeli katalogi (masalan, Tracker, Onix). 3. **ManufacturedCar** — konveyerdan chiqqan har bir tayyor avtomobil (VIN). 4. **QualityInspection** — avtomobilni yakuniy qabul qilish bo'yicha sifat nazorati akti. Konveyer liniyasi avtomobillarni yig'adi (qat'iy bittalik va majburiy ko'plik munosabati). Model turi avtomobillarni tasniflaydi (qat'iy bittalik va majburiy ko'plik munosabati). Har bir avtomobil sifat tekshiruvidan o'tadi (qat'iy bittalik va majburiy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `AssemblyLine`: {PK} `lineCode`, `lineName`, `capacityCarsPerDay`. 2. `VehicleModel`: {PK} `modelCode`, `modelName`, `engineLitres`. 3. `ManufacturedCar`: {PK} `vinCode`, `bodyColor`, `assemblyDate`. 4. `QualityInspection`: {PK} `inspectionId`, `inspectorBadge`, `passedQC`. 5. Multiplisitiyalarni bog'lang: - `AssemblyLine` ⟷ `ManufacturedCar`: bitta majburiy hamda majburiy ko'plik - `VehicleModel` ⟷ `ManufacturedCar`: bitta majburiy hamda majburiy ko'plik - `ManufacturedCar` ⟷ `QualityInspection`: bitta majburiy hamda majburiy ko'plik",
    "storyEn": "UzAuto Assembly — Assembly Line, Car Model, Manufactured Vehicle & Quality Audit — Conceptual ER business case study.",
    "instruction": "UzAuto avtomobil ishlab chiqarish va sifat nazorati korxona modelini barpo eting.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AssemblyLine",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "lineCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "lineCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lineName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityCarsPerDay",
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
          "x": 450,
          "y": 100,
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
              "name": "engineLitres",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ManufacturedCar",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "vinCode",
          "x": 275,
          "y": 240,
          "attributes": [
            {
              "name": "vinCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bodyColor",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "assemblyDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "QualityInspection",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "inspectionId",
          "x": 275,
          "y": 390,
          "attributes": [
            {
              "name": "inspectionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "inspectorBadge",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passedQC",
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
          "name": "AssemblesCar",
          "entity1": "AssemblyLine",
          "entity2": "ManufacturedCar",
          "fromEntityName": "AssemblyLine",
          "toEntityName": "ManufacturedCar",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "ClassifiesCar",
          "entity1": "VehicleModel",
          "entity2": "ManufacturedCar",
          "fromEntityName": "VehicleModel",
          "toEntityName": "ManufacturedCar",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "UndergoesQC",
          "entity1": "ManufacturedCar",
          "entity2": "QualityInspection",
          "fromEntityName": "ManufacturedCar",
          "toEntityName": "QualityInspection",
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
          "name": "AssemblyLine",
          "pk": "lineCode",
          "attributes": [
            {
              "name": "lineCode",
              "isPK": true
            },
            {
              "name": "lineName",
              "isPK": false
            },
            {
              "name": "capacityCarsPerDay",
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
              "name": "engineLitres",
              "isPK": false
            }
          ]
        },
        {
          "name": "ManufacturedCar",
          "pk": "vinCode",
          "attributes": [
            {
              "name": "vinCode",
              "isPK": true
            },
            {
              "name": "bodyColor",
              "isPK": false
            },
            {
              "name": "assemblyDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "QualityInspection",
          "pk": "inspectionId",
          "attributes": [
            {
              "name": "inspectionId",
              "isPK": true
            },
            {
              "name": "inspectorBadge",
              "isPK": false
            },
            {
              "name": "passedQC",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AssemblyLine",
          "entity2": "ManufacturedCar",
          "fromEntityName": "AssemblyLine",
          "toEntityName": "ManufacturedCar",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "AssemblesCar",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "VehicleModel",
          "entity2": "ManufacturedCar",
          "fromEntityName": "VehicleModel",
          "toEntityName": "ManufacturedCar",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ClassifiesCar",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ManufacturedCar",
          "entity2": "QualityInspection",
          "fromEntityName": "ManufacturedCar",
          "toEntityName": "QualityInspection",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "UndergoesQC",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Сборка UzAuto — сборочная линия, модель автомобиля, выпускаемый автомобиль и аудит качества",
    "storyRu": "Сборка UzAuto — сборочная линия, модель автомобиля, произведенный автомобиль и аудит качества — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Начальник отдела качества Асакинского завода UzAuto Motors"
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Otabek Umarov",
    "clientRole": "Korzinka Logistika Taqsimot Markazi Direktori",
    "clientAvatar": "📦",
    "title": "Korzinka Logistika — Markaziy Ombor, Yacheyka, Palleta va Do'kon Yuk Xati (Warehouse Distribution)",
    "titleEn": "Korzinka Supply Chain — Distribution Center, Bay, Pallet & Dispatch Consignment",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Korzinka supermarketlari ta'minot zanjirida taqsimot ombori 4 ta entitiy orqali boshqariladi: 1. **CentralWarehouse** — asosiy taqsimot logistika ombori. 2. **WarehouseBay** — ombor ichidagi maxsus baland tokcha yacheykasi. 3. **StockPallet** — yacheykada saqlanayotgan tovar palletasi. 4. **RetailDispatchedOrder** — do'konga jo'natish uchun shakllantirilgan yuk partiyasi. Ombor yacheykalarga bo'linadi (qat'iy bittalik va majburiy ko'plik munosabati). Yacheykada palletalar saqlanadi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Yacheykadan do'konga buyurtmalar jo'natiladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CentralWarehouse`: {PK} `warehouseCode`, `locationZone`, `storageSqM`. 2. `WarehouseBay`: {PK} `bayBarcode`, `aisleNumber`, `weightCapacityKg`. 3. `StockPallet`: {PK} `palletSerial`, `productSku`, `itemCount`. 4. `RetailDispatchedOrder`: {PK} `dispatchSlipNum`, `storeBranchId`, `dispatchDate`. 5. Munosabatlarni bog'lang: - `CentralWarehouse` ⟷ `WarehouseBay`: bitta majburiy hamda majburiy ko'plik - `WarehouseBay` ⟷ `StockPallet`: bitta majburiy hamda ixtiyoriy ko'plik - `WarehouseBay` ⟷ `RetailDispatchedOrder`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Korzinka Supply Chain — Distribution Center, Bay, Pallet & Dispatch Consignment — Conceptual ER business case study.",
    "instruction": "Logistika taqsimot ombori, yacheyka, palleta va jo'natma yuk xati modelini yakunlang.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CentralWarehouse",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "warehouseCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "warehouseCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "locationZone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storageSqM",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "WarehouseBay",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "bayBarcode",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "bayBarcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "aisleNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weightCapacityKg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StockPallet",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "palletSerial",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "palletSerial",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "productSku",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "itemCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RetailDispatchedOrder",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "dispatchSlipNum",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "dispatchSlipNum",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storeBranchId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dispatchDate",
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
          "name": "ComprisesBay",
          "entity1": "CentralWarehouse",
          "entity2": "WarehouseBay",
          "fromEntityName": "CentralWarehouse",
          "toEntityName": "WarehouseBay",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "HoldsPallet",
          "entity1": "WarehouseBay",
          "entity2": "StockPallet",
          "fromEntityName": "WarehouseBay",
          "toEntityName": "StockPallet",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "AllocatesToOrder",
          "entity1": "WarehouseBay",
          "entity2": "RetailDispatchedOrder",
          "fromEntityName": "WarehouseBay",
          "toEntityName": "RetailDispatchedOrder",
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
          "name": "CentralWarehouse",
          "pk": "warehouseCode",
          "attributes": [
            {
              "name": "warehouseCode",
              "isPK": true
            },
            {
              "name": "locationZone",
              "isPK": false
            },
            {
              "name": "storageSqM",
              "isPK": false
            }
          ]
        },
        {
          "name": "WarehouseBay",
          "pk": "bayBarcode",
          "attributes": [
            {
              "name": "bayBarcode",
              "isPK": true
            },
            {
              "name": "aisleNumber",
              "isPK": false
            },
            {
              "name": "weightCapacityKg",
              "isPK": false
            }
          ]
        },
        {
          "name": "StockPallet",
          "pk": "palletSerial",
          "attributes": [
            {
              "name": "palletSerial",
              "isPK": true
            },
            {
              "name": "productSku",
              "isPK": false
            },
            {
              "name": "itemCount",
              "isPK": false
            }
          ]
        },
        {
          "name": "RetailDispatchedOrder",
          "pk": "dispatchSlipNum",
          "attributes": [
            {
              "name": "dispatchSlipNum",
              "isPK": true
            },
            {
              "name": "storeBranchId",
              "isPK": false
            },
            {
              "name": "dispatchDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CentralWarehouse",
          "entity2": "WarehouseBay",
          "fromEntityName": "CentralWarehouse",
          "toEntityName": "WarehouseBay",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ComprisesBay",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "WarehouseBay",
          "entity2": "StockPallet",
          "fromEntityName": "WarehouseBay",
          "toEntityName": "StockPallet",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "HoldsPallet",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "WarehouseBay",
          "entity2": "RetailDispatchedOrder",
          "fromEntityName": "WarehouseBay",
          "toEntityName": "RetailDispatchedOrder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AllocatesToOrder",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Цепочка поставок «Корзинка» — распределительный центр, бухта, поддоны и отгрузка",
    "storyRu": "Цепочка поставок «Корзинка» — распределительный центр, склад, поддоны и отправка — концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Директор логистическо-распределительного центра «Корзинка»"
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Shahzod Murodov",
    "clientRole": "Uzum Market FinTech Boshlig'i",
    "clientAvatar": "🛍️",
    "title": "Uzum Market — Sotuvchi, Tovar Kartochkasi, Xaridor Buyurtmasi va Hisobvaraq (E-commerce Order Lifecycle)",
    "titleEn": "Uzum Marketplace — Merchant, Listing, Customer Order & Settlement Invoice",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Uzum Market elektron maydonchasida to'liq hisob-kitob davri 4 ta asosiy entitiy orqali amalga oshadi: 1. **UzumMerchant** — tovar sotuvchi ro'yxatdan o'tgan tadbirkor. 2. **MarketplaceListing** — sotuvchining platformadagi tovar kartochkasi. 3. **CustomerOrder** — xaridor tomonidan rasmiylashtirilgan savat buyurtmasi. 4. **SettlementInvoice** — ushbu buyurtma bo'yicha sotuvchiga to'lanadigan rasmiy hisobvaraq-faktura. Sotuvchi tovar kartochkalarini joylaydi (qat'iy bittalik va majburiy ko'plik munosabati). Tovar kartochkasi buyurtmalarda ishtirok etadi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Har bir buyurtma yakunida qat'iy yagona hisobvaraq-faktura shakllanadi (ikki tomonlama qat'iy va yagona bittalik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `UzumMerchant`: {PK} `sellerInn`, `storeBrandName`, `commissionTier`. 2. `MarketplaceListing`: {PK} `skuCode`, `productTitle`, `sellingPrice`. 3. `CustomerOrder`: {PK} `orderRefId`, `orderDate`, `totalOrderSum`. 4. `SettlementInvoice`: {PK} `invoiceNumber`, `payoutSum`, `clearedDate`. 5. Multiplisitiyalarni bog'lang: - `UzumMerchant` ⟷ `MarketplaceListing`: bitta majburiy hamda majburiy ko'plik - `MarketplaceListing` ⟷ `CustomerOrder`: bitta majburiy hamda ixtiyoriy ko'plik - `CustomerOrder` ⟷ `SettlementInvoice`: har ikki tomonda qat'iy bittalik",
    "storyEn": "Uzum Marketplace — Merchant, Listing, Customer Order & Settlement Invoice — Conceptual ER business case study.",
    "instruction": "Uzum Market sotuvchi, tovar, buyurtma va to'lov fakturasi korxona modelini barpo qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UzumMerchant",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "sellerInn",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "sellerInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storeBrandName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "commissionTier",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MarketplaceListing",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "skuCode",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "skuCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "productTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sellingPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CustomerOrder",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "orderRefId",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "orderRefId",
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
              "name": "totalOrderSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SettlementInvoice",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "invoiceNumber",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "invoiceNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "payoutSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "clearedDate",
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
          "name": "PublishesListing",
          "entity1": "UzumMerchant",
          "entity2": "MarketplaceListing",
          "fromEntityName": "UzumMerchant",
          "toEntityName": "MarketplaceListing",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "OrderedIn",
          "entity1": "MarketplaceListing",
          "entity2": "CustomerOrder",
          "fromEntityName": "MarketplaceListing",
          "toEntityName": "CustomerOrder",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "GeneratesInvoice",
          "entity1": "CustomerOrder",
          "entity2": "SettlementInvoice",
          "fromEntityName": "CustomerOrder",
          "toEntityName": "SettlementInvoice",
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
          "name": "UzumMerchant",
          "pk": "sellerInn",
          "attributes": [
            {
              "name": "sellerInn",
              "isPK": true
            },
            {
              "name": "storeBrandName",
              "isPK": false
            },
            {
              "name": "commissionTier",
              "isPK": false
            }
          ]
        },
        {
          "name": "MarketplaceListing",
          "pk": "skuCode",
          "attributes": [
            {
              "name": "skuCode",
              "isPK": true
            },
            {
              "name": "productTitle",
              "isPK": false
            },
            {
              "name": "sellingPrice",
              "isPK": false
            }
          ]
        },
        {
          "name": "CustomerOrder",
          "pk": "orderRefId",
          "attributes": [
            {
              "name": "orderRefId",
              "isPK": true
            },
            {
              "name": "orderDate",
              "isPK": false
            },
            {
              "name": "totalOrderSum",
              "isPK": false
            }
          ]
        },
        {
          "name": "SettlementInvoice",
          "pk": "invoiceNumber",
          "attributes": [
            {
              "name": "invoiceNumber",
              "isPK": true
            },
            {
              "name": "payoutSum",
              "isPK": false
            },
            {
              "name": "clearedDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "UzumMerchant",
          "entity2": "MarketplaceListing",
          "fromEntityName": "UzumMerchant",
          "toEntityName": "MarketplaceListing",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "PublishesListing",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "MarketplaceListing",
          "entity2": "CustomerOrder",
          "fromEntityName": "MarketplaceListing",
          "toEntityName": "CustomerOrder",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "OrderedIn",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "CustomerOrder",
          "entity2": "SettlementInvoice",
          "fromEntityName": "CustomerOrder",
          "toEntityName": "SettlementInvoice",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "GeneratesInvoice",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Uzum Marketplace — Продавец, листинг, заказ клиента и расчетный счет",
    "storyRu": "Uzum Marketplace — Продавец, листинг, заказ клиента и расчетный счет — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Глава Uzum Market FinTech"
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Erkin Yoqubov",
    "clientRole": "O'zbekiston Milliy Elektr Tarmoqlari Bosh Muhandisi",
    "clientAvatar": "⚡",
    "title": "Elektr Tarmoqlari — Nimstansiya, Fider, Transformator va Ta'mirlash Jurnali (National Power Grid)",
    "titleEn": "National Power Grid — Substation, Feeder, Transformer & Grid Maintenance Log",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Yuqori kuchlanishli milliy elektr tarmoqlari boshqaruv tizimi 4 ta texnik entitiyga tayanadi: 1. **PowerSubstation** — 110/35/10 kV nimstansiya. 2. **TransmissionFeeder** — elektr uzatuvchi fider liniyasi. 3. **IndustrialTransformer** — fiderga ulangan sanoat transformatori. 4. **GridMaintenanceLog** — transformatorda o'tkazilgan texnik profilaktika jurnali yozuvi. Nimstansiya fiderlarga ega (qat'iy bittalik va majburiy ko'plik munosabati). Fider transformatorlarni quvvatlaydi (qat'iy bittalik va majburiy ko'plik munosabati). Transformatorda ta'mirlash jurnali qayd etiladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `PowerSubstation`: {PK} `substationId`, `substationName`, `voltageKv`. 2. `TransmissionFeeder`: {PK} `feederLineId`, `lineLengthKm`, `maxLoadAmps`. 3. `IndustrialTransformer`: {PK} `transSerial`, `oilTempCelsius`, `kvaCapacity`. 4. `GridMaintenanceLog`: {PK} `logEntryId`, `serviceDate`, `techNotes`. 5. Munosabatlarni ketma-ketlikda bog'lang: - `PowerSubstation` ⟷ `TransmissionFeeder`: bitta majburiy hamda majburiy ko'plik - `TransmissionFeeder` ⟷ `IndustrialTransformer`: bitta majburiy hamda majburiy ko'plik - `IndustrialTransformer` ⟷ `GridMaintenanceLog`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "National Power Grid — Substation, Feeder, Transformer & Grid Maintenance Log — Conceptual ER business case study.",
    "instruction": "Elektr nimstansiyasi, fider, transformator va ta'mirlash jurnali modelini tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PowerSubstation",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "substationId",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "substationId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "substationName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "voltageKv",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TransmissionFeeder",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "feederLineId",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "feederLineId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lineLengthKm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "maxLoadAmps",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IndustrialTransformer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "transSerial",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "transSerial",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "oilTempCelsius",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "kvaCapacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "GridMaintenanceLog",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "logEntryId",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "logEntryId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "serviceDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "techNotes",
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
          "name": "DistributesFeeder",
          "entity1": "PowerSubstation",
          "entity2": "TransmissionFeeder",
          "fromEntityName": "PowerSubstation",
          "toEntityName": "TransmissionFeeder",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "PowersTransformer",
          "entity1": "TransmissionFeeder",
          "entity2": "IndustrialTransformer",
          "fromEntityName": "TransmissionFeeder",
          "toEntityName": "IndustrialTransformer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "LoggedService",
          "entity1": "IndustrialTransformer",
          "entity2": "GridMaintenanceLog",
          "fromEntityName": "IndustrialTransformer",
          "toEntityName": "GridMaintenanceLog",
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
          "name": "PowerSubstation",
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
          "name": "TransmissionFeeder",
          "pk": "feederLineId",
          "attributes": [
            {
              "name": "feederLineId",
              "isPK": true
            },
            {
              "name": "lineLengthKm",
              "isPK": false
            },
            {
              "name": "maxLoadAmps",
              "isPK": false
            }
          ]
        },
        {
          "name": "IndustrialTransformer",
          "pk": "transSerial",
          "attributes": [
            {
              "name": "transSerial",
              "isPK": true
            },
            {
              "name": "oilTempCelsius",
              "isPK": false
            },
            {
              "name": "kvaCapacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "GridMaintenanceLog",
          "pk": "logEntryId",
          "attributes": [
            {
              "name": "logEntryId",
              "isPK": true
            },
            {
              "name": "serviceDate",
              "isPK": false
            },
            {
              "name": "techNotes",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PowerSubstation",
          "entity2": "TransmissionFeeder",
          "fromEntityName": "PowerSubstation",
          "toEntityName": "TransmissionFeeder",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "DistributesFeeder",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "TransmissionFeeder",
          "entity2": "IndustrialTransformer",
          "fromEntityName": "TransmissionFeeder",
          "toEntityName": "IndustrialTransformer",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "PowersTransformer",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "IndustrialTransformer",
          "entity2": "GridMaintenanceLog",
          "fromEntityName": "IndustrialTransformer",
          "toEntityName": "GridMaintenanceLog",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "LoggedService",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Национальная электросеть — журнал обслуживания подстанций, фидеров, трансформаторов и сетей",
    "storyRu": "Национальная электросеть — Журнал технического обслуживания подстанций, фидеров, трансформаторов и сетей — Концептуальное экономическое исследование ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный инженер Национальных электрических сетей Узбекистана"
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Dr. Alisher Rasulov",
    "clientRole": "103 Tez Tibbiy Yordam Call-Markazi Rahbari",
    "clientAvatar": "🚑",
    "title": "103 Tez Yordam — Stansiya, Tez Yordam Brigadasi, Chaqiruv va Kasalxonaga Topshirish (Emergency 103)",
    "titleEn": "Emergency 103 Dispatch — Substation, Crew, Emergency Call & Hospital Handoff",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Toshkent shahar 103 shoshilinch tez yordam dispetcherlik tizimi 4 ta entitiy orqali boshqariladi: 1. **DispatchStation** — tuman tez yordam kichik stansiyasi. 2. **AmbulanceCrew** — navbatchilikdagi tez yordam brigadasi (mashina va shifokor). 3. **EmergencyCall** — 103 raqamiga tushgan shoshilinch chaqiruv. 4. **HospitalHandoff** — bemorni shifoxona qabul bo'limiga topshirish hujjati. Stansiya brigadalarni safarbar qiladi (qat'iy bittalik va majburiy ko'plik munosabati). Brigada chaqiruvlarga chiqadi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Chaqiruv yakunida bemor shifoxonaga yotqizilsa, bitta topshirish hujjati tuziladi (qat'iy bittalik va ixtiyoriy bittalik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `DispatchStation`: {PK} `stationNumber`, `districtArea`, `phoneDispatcher`. 2. `AmbulanceCrew`: {PK} `crewBadgeCode`, `vehiclePlate`, `leadDoctorName`. 3. `EmergencyCall`: {PK} `callTicketId`, `patientAddress`, `callerPhone`, `callTimestamp`. 4. `HospitalHandoff`: {PK} `handoffId`, `receivingHospital`, `prelimDiagnosis`. 5. Munosabatlarni bog'lang: - `DispatchStation` ⟷ `AmbulanceCrew`: bitta majburiy hamda majburiy ko'plik - `AmbulanceCrew` ⟷ `EmergencyCall`: bitta majburiy hamda ixtiyoriy ko'plik - `EmergencyCall` ⟷ `HospitalHandoff`: bitta majburiy hamda ixtiyoriy bittalik",
    "storyEn": "Emergency 103 Dispatch — Substation, Crew, Emergency Call & Hospital Handoff — Conceptual ER business case study.",
    "instruction": "103 tez tibbiy yordam dispetcherlik, brigada va shifoxonaga topshirish zanjirini tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DispatchStation",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "stationNumber",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "stationNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "districtArea",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "phoneDispatcher",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AmbulanceCrew",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "crewBadgeCode",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "crewBadgeCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vehiclePlate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "leadDoctorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "EmergencyCall",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "callTicketId",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "callTicketId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "patientAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "callerPhone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "callTimestamp",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HospitalHandoff",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "handoffId",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "handoffId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "receivingHospital",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "prelimDiagnosis",
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
          "name": "StationsCrew",
          "entity1": "DispatchStation",
          "entity2": "AmbulanceCrew",
          "fromEntityName": "DispatchStation",
          "toEntityName": "AmbulanceCrew",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AttendsCall",
          "entity1": "AmbulanceCrew",
          "entity2": "EmergencyCall",
          "fromEntityName": "AmbulanceCrew",
          "toEntityName": "EmergencyCall",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "ResultsInHandoff",
          "entity1": "EmergencyCall",
          "entity2": "HospitalHandoff",
          "fromEntityName": "EmergencyCall",
          "toEntityName": "HospitalHandoff",
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
          "name": "DispatchStation",
          "pk": "stationNumber",
          "attributes": [
            {
              "name": "stationNumber",
              "isPK": true
            },
            {
              "name": "districtArea",
              "isPK": false
            },
            {
              "name": "phoneDispatcher",
              "isPK": false
            }
          ]
        },
        {
          "name": "AmbulanceCrew",
          "pk": "crewBadgeCode",
          "attributes": [
            {
              "name": "crewBadgeCode",
              "isPK": true
            },
            {
              "name": "vehiclePlate",
              "isPK": false
            },
            {
              "name": "leadDoctorName",
              "isPK": false
            }
          ]
        },
        {
          "name": "EmergencyCall",
          "pk": "callTicketId",
          "attributes": [
            {
              "name": "callTicketId",
              "isPK": true
            },
            {
              "name": "patientAddress",
              "isPK": false
            },
            {
              "name": "callerPhone",
              "isPK": false
            },
            {
              "name": "callTimestamp",
              "isPK": false
            }
          ]
        },
        {
          "name": "HospitalHandoff",
          "pk": "handoffId",
          "attributes": [
            {
              "name": "handoffId",
              "isPK": true
            },
            {
              "name": "receivingHospital",
              "isPK": false
            },
            {
              "name": "prelimDiagnosis",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DispatchStation",
          "entity2": "AmbulanceCrew",
          "fromEntityName": "DispatchStation",
          "toEntityName": "AmbulanceCrew",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "StationsCrew",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "AmbulanceCrew",
          "entity2": "EmergencyCall",
          "fromEntityName": "AmbulanceCrew",
          "toEntityName": "EmergencyCall",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AttendsCall",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "EmergencyCall",
          "entity2": "HospitalHandoff",
          "fromEntityName": "EmergencyCall",
          "toEntityName": "HospitalHandoff",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "ResultsInHandoff",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Диспетчерская служба экстренной помощи 103 — подстанция, бригада, вызов службы экстренной помощи и передача в больницу",
    "storyRu": "Диспетчерская служба экстренной помощи 103 — подстанция, бригада, вызов службы экстренной помощи и передача в больницу — концептуальное экономическое исследование скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Заведующий 103-м колл-центром скорой медицинской помощи"
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Akmal Qodirov",
    "clientRole": "Tashkent City Biznes Markazi Ekspluatatsiya Direktori",
    "clientAvatar": "🏢",
    "title": "Tashkent City — Biznes Minorasi, Qavat, Ijara Shartnomasi va Servis So'rovi (Commercial Property Management)",
    "titleEn": "Tashkent City — Tower, Floor, Lease Contract & Facility Service Request",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Tashkent City biznes markazida tijorat ko'chmas mulkini boshqarish 4 ta korxona entitiyida ifodalanadi: 1. **BusinessTower** — ko'p qavatli osmono'par bino. 2. **OfficeFloor** — binodagi ma'lum bir ofis qavati. 3. **TenantLeaseContract** — ijarachi kompaniya bilan tuzilgan ijara shartnomasi. 4. **FacilityServiceRequest** — qavatdagi konditsioner yoki elektr bo'yicha servis arizasi. Minora qavatlardan iborat (qat'iy bittalik va majburiy ko'plik munosabati). Qavat bo'yicha ijara shartnomalari rasmiylashtiriladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Qavat bo'yicha ekspluatatsiya servis arizalari kelib tushadi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `BusinessTower`: {PK} `towerCode`, `towerName`, `totalHeightMeters`. 2. `OfficeFloor`: {PK} `floorNumber`, `rentableSqM`, `ceilingHeightM`. 3. `TenantLeaseContract`: {PK} `contractId`, `tenantName`, `monthlyRateUsd`. 4. `FacilityServiceRequest`: {PK} `requestId`, `issueCategory`, `reportedDate`. 5. Munosabatlarni bog'lang: - `BusinessTower` ⟷ `OfficeFloor`: bitta majburiy hamda majburiy ko'plik - `OfficeFloor` ⟷ `TenantLeaseContract`: bitta majburiy hamda ixtiyoriy ko'plik - `OfficeFloor` ⟷ `FacilityServiceRequest`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Tashkent City — Tower, Floor, Lease Contract & Facility Service Request — Conceptual ER business case study.",
    "instruction": "Biznes markazi minorasi, qavat, ijara va bino ekspluatatsiyasi servis modelini tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BusinessTower",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "towerCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "towerCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "towerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalHeightMeters",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "OfficeFloor",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "floorNumber",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "floorNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rentableSqM",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ceilingHeightM",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TenantLeaseContract",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "contractId",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "contractId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tenantName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "monthlyRateUsd",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FacilityServiceRequest",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "requestId",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "requestId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issueCategory",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "reportedDate",
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
          "name": "ComprisesFloor",
          "entity1": "BusinessTower",
          "entity2": "OfficeFloor",
          "fromEntityName": "BusinessTower",
          "toEntityName": "OfficeFloor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "LeasedUnderContract",
          "entity1": "OfficeFloor",
          "entity2": "TenantLeaseContract",
          "fromEntityName": "OfficeFloor",
          "toEntityName": "TenantLeaseContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "RequiresService",
          "entity1": "OfficeFloor",
          "entity2": "FacilityServiceRequest",
          "fromEntityName": "OfficeFloor",
          "toEntityName": "FacilityServiceRequest",
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
          "name": "BusinessTower",
          "pk": "towerCode",
          "attributes": [
            {
              "name": "towerCode",
              "isPK": true
            },
            {
              "name": "towerName",
              "isPK": false
            },
            {
              "name": "totalHeightMeters",
              "isPK": false
            }
          ]
        },
        {
          "name": "OfficeFloor",
          "pk": "floorNumber",
          "attributes": [
            {
              "name": "floorNumber",
              "isPK": true
            },
            {
              "name": "rentableSqM",
              "isPK": false
            },
            {
              "name": "ceilingHeightM",
              "isPK": false
            }
          ]
        },
        {
          "name": "TenantLeaseContract",
          "pk": "contractId",
          "attributes": [
            {
              "name": "contractId",
              "isPK": true
            },
            {
              "name": "tenantName",
              "isPK": false
            },
            {
              "name": "monthlyRateUsd",
              "isPK": false
            }
          ]
        },
        {
          "name": "FacilityServiceRequest",
          "pk": "requestId",
          "attributes": [
            {
              "name": "requestId",
              "isPK": true
            },
            {
              "name": "issueCategory",
              "isPK": false
            },
            {
              "name": "reportedDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BusinessTower",
          "entity2": "OfficeFloor",
          "fromEntityName": "BusinessTower",
          "toEntityName": "OfficeFloor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ComprisesFloor",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "OfficeFloor",
          "entity2": "TenantLeaseContract",
          "fromEntityName": "OfficeFloor",
          "toEntityName": "TenantLeaseContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "LeasedUnderContract",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "OfficeFloor",
          "entity2": "FacilityServiceRequest",
          "fromEntityName": "OfficeFloor",
          "toEntityName": "FacilityServiceRequest",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "RequiresService",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Ташкент-Сити — башня, этаж, договор аренды и запрос на обслуживание объекта",
    "storyRu": "Ташкент-Сити — Башня, этаж, договор аренды и запрос на обслуживание объекта — Концептуальный бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Директор по эксплуатации бизнес-центра Ташкент Сити"
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Dr. Lola Karimova",
    "clientRole": "O'zbekiston Farmatsevtika Agentligi Litsenziyalash Eksperti",
    "clientAvatar": "💊",
    "title": "Farmatsevtika Agentligi — Ishlab Chiqaruvchi, Dori, Bio-tahlil va Litsenziya (Drug Registration Architecture)",
    "titleEn": "National Pharma Agency — Manufacturer, Drug, Laboratory Bio-Analysis & Marketing License",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Davlat farmatsevtika agentligida yangi dorilarni litsenziyalash 4 ta korxona entitiyida olib boriladi: 1. **PharmaManufacturer** — farmatsevtik zavod (masalan, Jurabek Laboratories). 2. **MedicineDrug** — ishlab chiqarilgan dori vositasi. 3. **LabBioAnalysis** — davlat laboratoriyasida o'tkazilgan bioekvivalentlik sinov bayonnomasi. 4. **NationalMarketingLicense** — dorini O'zbekiston hududida sotish uchun berilgan davlat guvohnomasi. Zavod dorilarni ishlab chiqaradi (qat'iy bittalik va majburiy ko'plik munosabati). Dori vositasi laboratoriya sinovlaridan o'tadi (qat'iy bittalik va majburiy ko'plik munosabati). Sinovlar ijobiy bo'lsa dori uchun davlat litsenziyasi beriladi (qat'iy bittalik va ixtiyoriy bittalik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `PharmaManufacturer`: {PK} `pharmaInn`, `brandTitle`, `gmpCertified`. 2. `MedicineDrug`: {PK} `drugTradeCode`, `genericFormula`, `dosageMg`. 3. `LabBioAnalysis`: {PK} `labReportId`, `purityPercent`, `testPassed`. 4. `NationalMarketingLicense`: {PK} `licenseRegNumber`, `issueDate`, `expiryYear`. 5. Munosabatlarni bog'lang: - `PharmaManufacturer` ⟷ `MedicineDrug`: bitta majburiy hamda majburiy ko'plik - `MedicineDrug` ⟷ `LabBioAnalysis`: bitta majburiy hamda majburiy ko'plik - `MedicineDrug` ⟷ `NationalMarketingLicense`: bitta majburiy hamda ixtiyoriy bittalik",
    "storyEn": "National Pharma Agency — Manufacturer, Drug, Laboratory Bio-Analysis & Marketing License — Conceptual ER business case study.",
    "instruction": "Dori vositalarini davlat laboratoriya sinovidan o'tkazish va litsenziyalash modelini chizing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PharmaManufacturer",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "pharmaInn",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "pharmaInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "brandTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gmpCertified",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MedicineDrug",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "drugTradeCode",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "drugTradeCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "genericFormula",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dosageMg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LabBioAnalysis",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "labReportId",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "labReportId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "purityPercent",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "testPassed",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "NationalMarketingLicense",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "licenseRegNumber",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "licenseRegNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issueDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "expiryYear",
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
          "name": "ManufacturesDrug",
          "entity1": "PharmaManufacturer",
          "entity2": "MedicineDrug",
          "fromEntityName": "PharmaManufacturer",
          "toEntityName": "MedicineDrug",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "SubjectToTest",
          "entity1": "MedicineDrug",
          "entity2": "LabBioAnalysis",
          "fromEntityName": "MedicineDrug",
          "toEntityName": "LabBioAnalysis",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "ApprovedForSale",
          "entity1": "MedicineDrug",
          "entity2": "NationalMarketingLicense",
          "fromEntityName": "MedicineDrug",
          "toEntityName": "NationalMarketingLicense",
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
          "name": "PharmaManufacturer",
          "pk": "pharmaInn",
          "attributes": [
            {
              "name": "pharmaInn",
              "isPK": true
            },
            {
              "name": "brandTitle",
              "isPK": false
            },
            {
              "name": "gmpCertified",
              "isPK": false
            }
          ]
        },
        {
          "name": "MedicineDrug",
          "pk": "drugTradeCode",
          "attributes": [
            {
              "name": "drugTradeCode",
              "isPK": true
            },
            {
              "name": "genericFormula",
              "isPK": false
            },
            {
              "name": "dosageMg",
              "isPK": false
            }
          ]
        },
        {
          "name": "LabBioAnalysis",
          "pk": "labReportId",
          "attributes": [
            {
              "name": "labReportId",
              "isPK": true
            },
            {
              "name": "purityPercent",
              "isPK": false
            },
            {
              "name": "testPassed",
              "isPK": false
            }
          ]
        },
        {
          "name": "NationalMarketingLicense",
          "pk": "licenseRegNumber",
          "attributes": [
            {
              "name": "licenseRegNumber",
              "isPK": true
            },
            {
              "name": "issueDate",
              "isPK": false
            },
            {
              "name": "expiryYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PharmaManufacturer",
          "entity2": "MedicineDrug",
          "fromEntityName": "PharmaManufacturer",
          "toEntityName": "MedicineDrug",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ManufacturesDrug",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "MedicineDrug",
          "entity2": "LabBioAnalysis",
          "fromEntityName": "MedicineDrug",
          "toEntityName": "LabBioAnalysis",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "SubjectToTest",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "MedicineDrug",
          "entity2": "NationalMarketingLicense",
          "fromEntityName": "MedicineDrug",
          "toEntityName": "NationalMarketingLicense",
          "mult1": "1..1",
          "mult2": "0..1",
          "name": "ApprovedForSale",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Национальное фармацевтическое агентство — Производитель лекарств, лицензия на лабораторный биоанализ и маркетинг",
    "storyRu": "Национальное фармацевтическое агентство — Производитель, лекарство, лицензия на лабораторный биоанализ и маркетинг — Концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Лицензионный эксперт Фармацевтического агентства Узбекистана"
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Bobur Mahmudov",
    "clientRole": "O'zbekiston Temir Yo'llari Afrosiyob Bosh Dispecheri",
    "clientAvatar": "🚅",
    "title": "Afrosiyob Poyezdi — Poyezd Tarkibi, Vagon, Marshrut Reysi va Yo'lovchi Chiptasi (High-Speed Rail)",
    "titleEn": "High-Speed Rail — Train Set, Carriage, Scheduled Trip & Passenger Ticket",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Afrosiyob tezyurar temir yo'l yo'lovchi qatnovi 4 ta asosiy korxona entitiysida shakllantiriladi: 1. **TrainSet** — Afrosiyob tezyurar poyezd sostavi (masalan, Talgo-250). 2. **RailwayCarriage** — poyezd sostavidagi vagon (VIP, Biznes, Ekonom). 3. **ScheduledTrip** — jadval bo'yicha belgilangan aniq qatnov (Toshkent — Samarqand — Buxoro). 4. **PassengerTicket** — qatnov uchun sotilgan elektron poyezd chiptasi. Poyezd sostavi vagonlardan tashkil topadi (qat'iy bittalik va majburiy ko'plik munosabati). Poyezd sostavi reyslarni amalga oshiradi (qat'iy bittalik va majburiy ko'plik munosabati). Reys bo'yicha yo'lovchilarga chiptalar sotiladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `TrainSet`: {PK} `trainSetCode`, `modelType`, `maxSpeedKmH`. 2. `RailwayCarriage`: {PK} `carriageNumber`, `coachClass`, `seatCapacity`. 3. `ScheduledTrip`: {PK} `tripCode`, `departureDate`, `originStation`, `destStation`. 4. `PassengerTicket`: {PK} `ticketCode`, `seatAllocated`, `farePaidSum`. 5. Munosabatlarni bog'lang: - `TrainSet` ⟷ `RailwayCarriage`: bitta majburiy hamda majburiy ko'plik - `TrainSet` ⟷ `ScheduledTrip`: bitta majburiy hamda majburiy ko'plik - `ScheduledTrip` ⟷ `PassengerTicket`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "High-Speed Rail — Train Set, Carriage, Scheduled Trip & Passenger Ticket — Conceptual ER business case study.",
    "instruction": "Afrosiyob poyezd sostavi, vagon, reys va yo'lovchi chiptasi modelini barpo qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TrainSet",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "trainSetCode",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "trainSetCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "modelType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "maxSpeedKmH",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RailwayCarriage",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "carriageNumber",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "carriageNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "coachClass",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatCapacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ScheduledTrip",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "tripCode",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "tripCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "departureDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "originStation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destStation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PassengerTicket",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "ticketCode",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "ticketCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatAllocated",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "farePaidSum",
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
          "name": "ComprisesCarriage",
          "entity1": "TrainSet",
          "entity2": "RailwayCarriage",
          "fromEntityName": "TrainSet",
          "toEntityName": "RailwayCarriage",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "AssignedToTrip",
          "entity1": "TrainSet",
          "entity2": "ScheduledTrip",
          "fromEntityName": "TrainSet",
          "toEntityName": "ScheduledTrip",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "IssuesTicket",
          "entity1": "ScheduledTrip",
          "entity2": "PassengerTicket",
          "fromEntityName": "ScheduledTrip",
          "toEntityName": "PassengerTicket",
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
          "name": "TrainSet",
          "pk": "trainSetCode",
          "attributes": [
            {
              "name": "trainSetCode",
              "isPK": true
            },
            {
              "name": "modelType",
              "isPK": false
            },
            {
              "name": "maxSpeedKmH",
              "isPK": false
            }
          ]
        },
        {
          "name": "RailwayCarriage",
          "pk": "carriageNumber",
          "attributes": [
            {
              "name": "carriageNumber",
              "isPK": true
            },
            {
              "name": "coachClass",
              "isPK": false
            },
            {
              "name": "seatCapacity",
              "isPK": false
            }
          ]
        },
        {
          "name": "ScheduledTrip",
          "pk": "tripCode",
          "attributes": [
            {
              "name": "tripCode",
              "isPK": true
            },
            {
              "name": "departureDate",
              "isPK": false
            },
            {
              "name": "originStation",
              "isPK": false
            },
            {
              "name": "destStation",
              "isPK": false
            }
          ]
        },
        {
          "name": "PassengerTicket",
          "pk": "ticketCode",
          "attributes": [
            {
              "name": "ticketCode",
              "isPK": true
            },
            {
              "name": "seatAllocated",
              "isPK": false
            },
            {
              "name": "farePaidSum",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TrainSet",
          "entity2": "RailwayCarriage",
          "fromEntityName": "TrainSet",
          "toEntityName": "RailwayCarriage",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ComprisesCarriage",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "TrainSet",
          "entity2": "ScheduledTrip",
          "fromEntityName": "TrainSet",
          "toEntityName": "ScheduledTrip",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "AssignedToTrip",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ScheduledTrip",
          "entity2": "PassengerTicket",
          "fromEntityName": "ScheduledTrip",
          "toEntityName": "PassengerTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "IssuesTicket",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Высокоскоростная железная дорога — состав поездов, вагон, регулярный рейс и пассажирский билет",
    "storyRu": "Высокоскоростная железная дорога — состав поездов, вагон, регулярная поездка и пассажирский билет — Концептуальный бизнес-кейс скорой помощи.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный диспетчер Узбекской железной дороги"
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Nurbek Alimov",
    "clientRole": "Mobiuz Uyali Aloqa Tarmoq Operatsiyalari Markazi Muhandisi",
    "clientAvatar": "📡",
    "title": "Mobiuz Aloqa — Baza Stansiyasi, Qabul Qiluvchi, Abonent va Qo'ng'iroq Tranziti (Cellular Network CDR)",
    "titleEn": "Cellular Network — Base Station Tower, Transceiver, Subscriber & Call Detail Record",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** GSM/LTE uyali aloqa operatorida qo'ng'iroqlar va internet trafigi hisobi 4 ta entitiyda yuritiladi: 1. **CellularTowerBTS** — baza stansiyasi minorasi. 2. **FrequencyTransceiver** — minoradagi chastota uzatuvchi-qabul qiluvchi sektor antennasi. 3. **MobileSubscriber** — SIM-karta egasi bo'lgan abonent. 4. **CallDataRecord** — har bir qo'ng'iroq yoki sessiya bo'yicha hosil bo'ladigan tranzit CDR yozuvi. Minora sektor antennalariga ega (qat'iy bittalik va majburiy ko'plik munosabati). Antenna orqali qo'ng'iroq CDR yozuvlari qayd qilinadi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Abonent tomonidan ham CDR yozuvlari amalga oshiriladi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `CellularTowerBTS`: {PK} `cellTowerId`, `siteName`, `gpsCoordinates`. 2. `FrequencyTransceiver`: {PK} `transceiverId`, `azimuthDegrees`, `frequencyBand`. 3. `MobileSubscriber`: {PK} `msisdnPhone`, `imsiNumber`, `accountPlan`. 4. `CallDataRecord`: {PK} `cdrSeqId`, `callDurationSec`, `chargedSum`. 5. Munosabatlarni bog'lang: - `CellularTowerBTS` ⟷ `FrequencyTransceiver`: bitta majburiy hamda majburiy ko'plik - `FrequencyTransceiver` ⟷ `CallDataRecord`: bitta majburiy hamda ixtiyoriy ko'plik - `MobileSubscriber` ⟷ `CallDataRecord`: bitta majburiy hamda ixtiyoriy ko'plik",
    "storyEn": "Cellular Network — Base Station Tower, Transceiver, Subscriber & Call Detail Record — Conceptual ER business case study.",
    "instruction": "Uyali aloqa minorasi, antenna, abonent va qo'ng'iroq CDR modeli arxitekturasini tuzing.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CellularTowerBTS",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "cellTowerId",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "cellTowerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "siteName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gpsCoordinates",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FrequencyTransceiver",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "transceiverId",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "transceiverId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "azimuthDegrees",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "frequencyBand",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MobileSubscriber",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "msisdnPhone",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "msisdnPhone",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "imsiNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "accountPlan",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CallDataRecord",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "cdrSeqId",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "cdrSeqId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "callDurationSec",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "chargedSum",
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
          "name": "HousesAntenna",
          "entity1": "CellularTowerBTS",
          "entity2": "FrequencyTransceiver",
          "fromEntityName": "CellularTowerBTS",
          "toEntityName": "FrequencyTransceiver",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "RelaysCall",
          "entity1": "FrequencyTransceiver",
          "entity2": "CallDataRecord",
          "fromEntityName": "FrequencyTransceiver",
          "toEntityName": "CallDataRecord",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "InitiatesCall",
          "entity1": "MobileSubscriber",
          "entity2": "CallDataRecord",
          "fromEntityName": "MobileSubscriber",
          "toEntityName": "CallDataRecord",
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
          "name": "CellularTowerBTS",
          "pk": "cellTowerId",
          "attributes": [
            {
              "name": "cellTowerId",
              "isPK": true
            },
            {
              "name": "siteName",
              "isPK": false
            },
            {
              "name": "gpsCoordinates",
              "isPK": false
            }
          ]
        },
        {
          "name": "FrequencyTransceiver",
          "pk": "transceiverId",
          "attributes": [
            {
              "name": "transceiverId",
              "isPK": true
            },
            {
              "name": "azimuthDegrees",
              "isPK": false
            },
            {
              "name": "frequencyBand",
              "isPK": false
            }
          ]
        },
        {
          "name": "MobileSubscriber",
          "pk": "msisdnPhone",
          "attributes": [
            {
              "name": "msisdnPhone",
              "isPK": true
            },
            {
              "name": "imsiNumber",
              "isPK": false
            },
            {
              "name": "accountPlan",
              "isPK": false
            }
          ]
        },
        {
          "name": "CallDataRecord",
          "pk": "cdrSeqId",
          "attributes": [
            {
              "name": "cdrSeqId",
              "isPK": true
            },
            {
              "name": "callDurationSec",
              "isPK": false
            },
            {
              "name": "chargedSum",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CellularTowerBTS",
          "entity2": "FrequencyTransceiver",
          "fromEntityName": "CellularTowerBTS",
          "toEntityName": "FrequencyTransceiver",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HousesAntenna",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "FrequencyTransceiver",
          "entity2": "CallDataRecord",
          "fromEntityName": "FrequencyTransceiver",
          "toEntityName": "CallDataRecord",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "RelaysCall",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "MobileSubscriber",
          "entity2": "CallDataRecord",
          "fromEntityName": "MobileSubscriber",
          "toEntityName": "CallDataRecord",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InitiatesCall",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Сотовая сеть — вышка базовой станции, трансивер, абонент и запись подробностей вызовов",
    "storyRu": "Сотовая сеть — вышка базовой станции, приемопередатчик, абонент и подробная запись вызовов — концептуальное экономическое исследование ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Инженер центра управления сотовой сетью Mobiuz"
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "Ekspert",
    "clientName": "Sherzod Inoyatov",
    "clientRole": "O'zbekiston Davlat Soliq Qo'mitasi Bosh Dasturchisi",
    "clientAvatar": "📑",
    "title": "Soliq Qo'mitasi — Korxona, Onlayn KKM, Elektron Faktura va QQS Auditi (E-Invoicing & VAT Audit)",
    "titleEn": "Tax Committee — Enterprise, Smart Till, E-Invoice & VAT Audit Record",
    "story": "📖 **Hayotiy Voqealik & Biznes Kontekst:** Soliq.uz milliy elektron soliq tizimida korxonalarning hisob-faktura va fiskal auditi 4 ta entitiy orqali yuritiladi: 1. **TaxpayerCompany** — soliq to'lovchi yuridik korxona (INN). 2. **FiscalCashRegister** — korxonaga ro'yxatdan o'tgan onlayn onlayn-KKM yoki virtual kassa terminali. 3. **ElectronicInvoice** — elektron hisobvaraq-faktura (EHF). 4. **VATAuditRecord** — hisobvaraq-faktura bo'yicha hisoblangan qo'shilgan qiymat solig'i (QQS) soliq tekshiruv yozuvi. Korxona bir nechta onlayn kassa apparatiga ega bo'lishi mumkin (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Korxona elektron fakturalar chiqaradi (qat'iy bittalik va ixtiyoriy ko'plik munosabati). Har bir hisobvaraq-faktura bo'yicha qat'iy yagona QQS audit yozuvi yuritiladi (ikki tomonlama qat'iy va yagona bittalik munosabati). 📋 **Bajarilishi Kerak Bo'lgan Qadamlar:** 1. `TaxpayerCompany`: {PK} `companyInn`, `legalName`, `taxRegime`. 2. `FiscalCashRegister`: {PK} `fiscalModuleId`, `deviceModel`, `registeredAt`. 3. `ElectronicInvoice`: {PK} `invoiceSerialCode`, `contractNumber`, `totalWithVat`. 4. `VATAuditRecord`: {PK} `auditRefNumber`, `vatAmountDue`, `auditStatus`. 5. Munosabatlarni bog'lang: - `TaxpayerCompany` ⟷ `FiscalCashRegister`: bitta majburiy hamda ixtiyoriy ko'plik - `TaxpayerCompany` ⟷ `ElectronicInvoice`: bitta majburiy hamda ixtiyoriy ko'plik - `ElectronicInvoice` ⟷ `VATAuditRecord`: har ikki tomonda qat'iy bittalik",
    "storyEn": "Tax Committee — Enterprise, Smart Till, E-Invoice & VAT Audit Record — Conceptual ER business case study.",
    "instruction": "Soliq qo'mitasi korxona, onlayn-kassa, elektron faktura va QQS tekshiruvi korxona modelini barpo qiling.",
    "instructionEn": "Complete the diagram model by configuring entities, relationships, attributes and constraints as specified.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TaxpayerCompany",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "companyInn",
          "x": 100,
          "y": 100,
          "attributes": [
            {
              "name": "companyInn",
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
              "name": "taxRegime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FiscalCashRegister",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "fiscalModuleId",
          "x": 450,
          "y": 100,
          "attributes": [
            {
              "name": "fiscalModuleId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deviceModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "registeredAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ElectronicInvoice",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "invoiceSerialCode",
          "x": 100,
          "y": 320,
          "attributes": [
            {
              "name": "invoiceSerialCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contractNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalWithVat",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "VATAuditRecord",
          "isWeak": false,
          "isAssociative": false,
          "isSubclass": false,
          "pk": "auditRefNumber",
          "x": 450,
          "y": 320,
          "attributes": [
            {
              "name": "auditRefNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vatAmountDue",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "auditStatus",
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
          "name": "OperatesCashTill",
          "entity1": "TaxpayerCompany",
          "entity2": "FiscalCashRegister",
          "fromEntityName": "TaxpayerCompany",
          "toEntityName": "FiscalCashRegister",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_2",
          "name": "IssuesEInvoice",
          "entity1": "TaxpayerCompany",
          "entity2": "ElectronicInvoice",
          "fromEntityName": "TaxpayerCompany",
          "toEntityName": "ElectronicInvoice",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true,
          "role1": "",
          "role2": ""
        },
        {
          "id": "rel_3",
          "name": "AuditedForVAT",
          "entity1": "ElectronicInvoice",
          "entity2": "VATAuditRecord",
          "fromEntityName": "ElectronicInvoice",
          "toEntityName": "VATAuditRecord",
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
          "name": "TaxpayerCompany",
          "pk": "companyInn",
          "attributes": [
            {
              "name": "companyInn",
              "isPK": true
            },
            {
              "name": "legalName",
              "isPK": false
            },
            {
              "name": "taxRegime",
              "isPK": false
            }
          ]
        },
        {
          "name": "FiscalCashRegister",
          "pk": "fiscalModuleId",
          "attributes": [
            {
              "name": "fiscalModuleId",
              "isPK": true
            },
            {
              "name": "deviceModel",
              "isPK": false
            },
            {
              "name": "registeredAt",
              "isPK": false
            }
          ]
        },
        {
          "name": "ElectronicInvoice",
          "pk": "invoiceSerialCode",
          "attributes": [
            {
              "name": "invoiceSerialCode",
              "isPK": true
            },
            {
              "name": "contractNumber",
              "isPK": false
            },
            {
              "name": "totalWithVat",
              "isPK": false
            }
          ]
        },
        {
          "name": "VATAuditRecord",
          "pk": "auditRefNumber",
          "attributes": [
            {
              "name": "auditRefNumber",
              "isPK": true
            },
            {
              "name": "vatAmountDue",
              "isPK": false
            },
            {
              "name": "auditStatus",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TaxpayerCompany",
          "entity2": "FiscalCashRegister",
          "fromEntityName": "TaxpayerCompany",
          "toEntityName": "FiscalCashRegister",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "OperatesCashTill",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "TaxpayerCompany",
          "entity2": "ElectronicInvoice",
          "fromEntityName": "TaxpayerCompany",
          "toEntityName": "ElectronicInvoice",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "IssuesEInvoice",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        },
        {
          "entity1": "ElectronicInvoice",
          "entity2": "VATAuditRecord",
          "fromEntityName": "ElectronicInvoice",
          "toEntityName": "VATAuditRecord",
          "mult1": "1..1",
          "mult2": "1..1",
          "name": "AuditedForVAT",
          "isIdentifying": false,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "titleRu": "Налоговый комитет — Предприятие, Smart Till, электронный счет и отчет об аудите НДС",
    "storyRu": "Налоговый комитет — Предприятие, Smart Till, электронные счета и отчеты об аудите НДС — Концептуальное бизнес-кейс ER.",
    "instructionRu": "Завершите модель диаграммы, настроив сущности, связи, атрибуты и ограничения, как указано.",
    "clientRoleRu": "Главный программист Государственного налогового комитета Узбекистана"
  }
];
