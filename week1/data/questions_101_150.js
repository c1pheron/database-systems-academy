var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Akmal Shokirov",
    "clientRole": "Kinoprokat Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Movie Disjoint Ixtisoslashuvi",
    "story": "Kino & Premyeralar sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Movie** (movieId {PK}, `title`, `director`, `durationMin`, `ageRating`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Movie' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Movie",
          "isWeak": false,
          "isAssociative": false,
          "pk": "movieId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "movieId",
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
              "name": "director",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "durationMin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ageRating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MovieTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "MovieTypeB",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 102,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Umida Zokirova",
    "clientRole": "Bosh Provisor",
    "clientAvatar": "mentor",
    "title": "Medicine Disjoint Ixtisoslashuvi",
    "story": "Farmatsevtika sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Medicine** (barcode {PK}, `name`, `dosageMg`, `manufacturer`, `expDate`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Medicine' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Medicine",
          "isWeak": false,
          "isAssociative": false,
          "pk": "barcode",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "barcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "name",
              "isPK": false,
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
              "name": "manufacturer",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "expDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MedicineTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "MedicineTypeB",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 103,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Sanjar Normatov",
    "clientRole": "Logistika Floti Boshlig'i",
    "clientAvatar": "mentor",
    "title": "CargoTruck Disjoint Ixtisoslashuvi",
    "story": "Magistral Yuk Tashish sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **CargoTruck** (plateNo {PK}, `capacityTons`, `fuelType`, `mileageKm`, `status`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'CargoTruck' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CargoTruck",
          "isWeak": false,
          "isAssociative": false,
          "pk": "plateNo",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "plateNo",
              "isPK": true,
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
              "name": "fuelType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "mileageKm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "status",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CargoTruckTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "CargoTruckTypeB",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 104,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Nilufar Rahimova",
    "clientRole": "Mijozlar Xizmati Boshlig'i",
    "clientAvatar": "mentor",
    "title": "ClubMember Disjoint Ixtisoslashuvi",
    "story": "Sport & Fitnes sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **ClubMember** (memberCardNo {PK}, `fullName`, `membershipType`, `expiryDate`, `phone`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'ClubMember' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ClubMember",
          "isWeak": false,
          "isAssociative": false,
          "pk": "memberCardNo",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "memberCardNo",
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
              "name": "membershipType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "expiryDate",
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
          "name": "ClubMemberTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "ClubMemberTypeB",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 105,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Davron Karimov",
    "clientRole": "Bosh Energetik",
    "clientAvatar": "mentor",
    "title": "SolarInverter Disjoint Ixtisoslashuvi",
    "story": "Quyosh Energetikasi sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **SolarInverter** (serialNo {PK}, `peakPowerKw`, `voltageInput`, `installDate`, `efficiency`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'SolarInverter' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SolarInverter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "serialNo",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "serialNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "peakPowerKw",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "voltageInput",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "installDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "efficiency",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SolarInverterTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SolarInverterTypeB",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 106,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "UniversityStaff Overlapping Ixtisoslashuvi",
    "story": "Universitet Akademik Shtati faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Xodim bir vaqtning o'zida ham dars berishi (o'qituvchi), ham grant loyihasi ustida tadqiqot olib borishi (tadqiqotchi) mumkin. Tizimda superklass sifatida **UniversityStaff** (staffId {PK}, `fullName`, `email`, `salary`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'UniversityStaff' superklassini va uning ustma-ust tushuvchi 'Instructor' hamda 'Researcher' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UniversityStaff",
          "isWeak": false,
          "isAssociative": false,
          "pk": "staffId",
          "x": 340,
          "y": 70,
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
              "name": "email",
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
        },
        {
          "name": "Instructor",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "Researcher",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 107,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "BankClient Overlapping Ixtisoslashuvi",
    "story": "Tijorat Banki Mijozlari faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Mijoz bir vaqtda ham depozit hisobiga pul qo'ygan omonatchi, ham kredit olgan qarzdor bo'lishi mumkin. Tizimda superklass sifatida **BankClient** (clientId {PK}, `clientName`, `taxCode`, `contactPhone`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'BankClient' superklassini va uning ustma-ust tushuvchi 'Depositor' hamda 'Borrower' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankClient",
          "isWeak": false,
          "isAssociative": false,
          "pk": "clientId",
          "x": 340,
          "y": 70,
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
              "name": "taxCode",
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
          "name": "Depositor",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "Borrower",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 108,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "SystemUser Overlapping Ixtisoslashuvi",
    "story": "Axborot Xavfsizligi faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Foydalanuvchi bir vaqtda ham xavfsizlik ma'muri, ham ishlab chiquvchi dasturchi rollariga ega bo'lishi mumkin. Tizimda superklass sifatida **SystemUser** (userLogin {PK}, `email`, `createdDate`, `lastLogin`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'SystemUser' superklassini va uning ustma-ust tushuvchi 'SecurityAdmin' hamda 'SystemDev' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SystemUser",
          "isWeak": false,
          "isAssociative": false,
          "pk": "userLogin",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "userLogin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "email",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "createdDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lastLogin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SecurityAdmin",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SystemDev",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 109,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "ConferenceAttendee Overlapping Ixtisoslashuvi",
    "story": "Ilmiy Kongress faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Ishtirokchi ham ma'ruza qiluvchi spiker, ham maqolalarni baholovchi hay'at a'zosi bo'lishi mumkin. Tizimda superklass sifatida **ConferenceAttendee** (attendeeId {PK}, `attendeeName`, `institution`, `country`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'ConferenceAttendee' superklassini va uning ustma-ust tushuvchi 'KeynoteSpeaker' hamda 'CommitteeReviewer' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ConferenceAttendee",
          "isWeak": false,
          "isAssociative": false,
          "pk": "attendeeId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "attendeeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "attendeeName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "institution",
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
          "name": "KeynoteSpeaker",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "CommitteeReviewer",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 110,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "AthleteMember Overlapping Ixtisoslashuvi",
    "story": "Sport Klubi Shtati faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Tajribali sportchi ham maydonda o'yinchi, ham yoshlarga murabbiy sifatida faoliyat yuritishi mumkin. Tizimda superklass sifatida **AthleteMember** (athleteId {PK}, `athleteName`, `bloodGroup`, `joinYear`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'AthleteMember' superklassini va uning ustma-ust tushuvchi 'LeaguePlayer' hamda 'TeamCoach' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AthleteMember",
          "isWeak": false,
          "isAssociative": false,
          "pk": "athleteId",
          "x": 340,
          "y": 70,
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
            },
            {
              "name": "bloodGroup",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "joinYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LeaguePlayer",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "TeamCoach",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 111,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "CrewMember Overlapping Ixtisoslashuvi",
    "story": "Aviatsiya Ekipaji faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Ekipaj a'zosi ham parvoz uchuvchisi, ham xavfsizlik auditori vakolatiga ega bo'la oladi. Tizimda superklass sifatida **CrewMember** (crewId {PK}, `crewName`, `flightHoursTotal`, `medicalCertDate`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'CrewMember' superklassini va uning ustma-ust tushuvchi 'CommercialPilot' hamda 'SafetyInspector' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CrewMember",
          "isWeak": false,
          "isAssociative": false,
          "pk": "crewId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "crewId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "crewName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "flightHoursTotal",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "medicalCertDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CommercialPilot",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SafetyInspector",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 112,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "DealershipClient Overlapping Ixtisoslashuvi",
    "story": "Avtodilerlik Klasteri faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Mijoz ham yangi avtomobil xarid qiluvchi, ham ta'mirlash xizmatidan foydalanuvchi bo'lishi mumkin. Tizimda superklass sifatida **DealershipClient** (clientId {PK}, `fullName`, `passportNumber`, `contactPhone`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'DealershipClient' superklassini va uning ustma-ust tushuvchi 'VehicleBuyer' hamda 'ServiceClient' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DealershipClient",
          "isWeak": false,
          "isAssociative": false,
          "pk": "clientId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "clientId",
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
              "name": "passportNumber",
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
          "name": "VehicleBuyer",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "ServiceClient",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
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
    }
  },
  {
    "id": 113,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "TheatreArtist Overlapping Ixtisoslashuvi",
    "story": "Teatr Ijodiy Jamoasi faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Ijodkor aktyor sifatida sahnaga chiqishi bilan birga sahnalashtiruvchi rejissyor ham bo'lishi mumkin. Tizimda superklass sifatida **TheatreArtist** (artistId {PK}, `stageName`, `unionCardNo`, `debutYear`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'TheatreArtist' superklassini va uning ustma-ust tushuvchi 'StageActor' hamda 'PlayDirector' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TheatreArtist",
          "isWeak": false,
          "isAssociative": false,
          "pk": "artistId",
          "x": 340,
          "y": 70,
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
              "name": "unionCardNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "debutYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StageActor",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "PlayDirector",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 114,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "MedicalStaff Overlapping Ixtisoslashuvi",
    "story": "Klinik Tadqiqotlar faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Shifokor ham bemorlarni davolovchi vrach, ham dori sinovlarini o'tkazuvchi tadqiqotchi bo'la oladi. Tizimda superklass sifatida **MedicalStaff** (licenseNo {PK}, `doctorName`, `specialtyField`, `phone`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'MedicalStaff' superklassini va uning ustma-ust tushuvchi 'Clinician' hamda 'TrialInvestigator' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MedicalStaff",
          "isWeak": false,
          "isAssociative": false,
          "pk": "licenseNo",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "licenseNo",
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
              "name": "specialtyField",
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
          "name": "Clinician",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "TrialInvestigator",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 115,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "ContentCreator Overlapping Ixtisoslashuvi",
    "story": "Raqamli Media faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Muallif ham video lavha boshlovchisi, ham audio podkast yaratuvchisi sifatida faoliyat ko'rsatishi mumkin. Tizimda superklass sifatida **ContentCreator** (creatorId {PK}, `channelName`, `subscriberTotal`, `contractExpiry`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'ContentCreator' superklassini va uning ustma-ust tushuvchi 'VideoPresenter' hamda 'AudioPodcaster' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ContentCreator",
          "isWeak": false,
          "isAssociative": false,
          "pk": "creatorId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "creatorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "channelName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "subscriberTotal",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contractExpiry",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "VideoPresenter",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "AudioPodcaster",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 116,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "FleetDriver Overlapping Ixtisoslashuvi",
    "story": "Logistika Kuryerlari faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Haydovchi ham shahar ichida tezkor yetkazuvchi, ham shaharlararo yuk tashuvchi vazifasini bajarishi mumkin. Tizimda superklass sifatida **FleetDriver** (driverStaffId {PK}, `driverName`, `driverLicenseNo`, `ratingStars`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'FleetDriver' superklassini va uning ustma-ust tushuvchi 'ExpressCourier' hamda 'LongHaulDriver' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FleetDriver",
          "isWeak": false,
          "isAssociative": false,
          "pk": "driverStaffId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "driverStaffId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "driverName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "driverLicenseNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ratingStars",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ExpressCourier",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "LongHaulDriver",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 117,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "RestaurantStaff Overlapping Ixtisoslashuvi",
    "story": "Restoran Xizmati faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Xodim ham barda kokteyl ustasi, ham vino zaxirasini boshqaruvchi somelye bo'la oladi. Tizimda superklass sifatida **RestaurantStaff** (staffBadgeId {PK}, `staffName`, `foodSafetyCertDate`, `wageHourly`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'RestaurantStaff' superklassini va uning ustma-ust tushuvchi 'ChiefBartender' hamda 'SommelierExpert' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RestaurantStaff",
          "isWeak": false,
          "isAssociative": false,
          "pk": "staffBadgeId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "staffBadgeId",
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
              "name": "foodSafetyCertDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "wageHourly",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ChiefBartender",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "SommelierExpert",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 118,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "RealEstateCustomer Overlapping Ixtisoslashuvi",
    "story": "Mulk Birjasi faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Mijoz ham o'z eski uyini sotuvchi, ham o'rniga yangi kvartira xarid qiluvchi bo'lishi mumkin. Tizimda superklass sifatida **RealEstateCustomer** (customerId {PK}, `fullName`, `passportPin`, `contactPhone`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'RealEstateCustomer' superklassini va uning ustma-ust tushuvchi 'PropertyVendor' hamda 'PropertyAcquirer' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RealEstateCustomer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "customerId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "customerId",
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
              "name": "passportPin",
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
          "name": "PropertyVendor",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "PropertyAcquirer",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 119,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "PlatformUser Overlapping Ixtisoslashuvi",
    "story": "EdTech Platforma faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Foydalanuvchi ma'lum kurslarda talaba, o'zi mutaxassis bo'lgan boshqa kursda esa mentor bo'lishi mumkin. Tizimda superklass sifatida **PlatformUser** (userId {PK}, `userFullName`, `emailAddress`, `regTimestamp`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'PlatformUser' superklassini va uning ustma-ust tushuvchi 'ActiveLearner' hamda 'TeachingMentor' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PlatformUser",
          "isWeak": false,
          "isAssociative": false,
          "pk": "userId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "userId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "userFullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "emailAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regTimestamp",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ActiveLearner",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "TeachingMentor",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 120,
    "sector": 8,
    "difficulty": "8-Qavat • Professional (Overlapping)",
    "clientName": "Loyiha Rahbari",
    "clientRole": "Yetakchi Arxitektor",
    "clientAvatar": "mentor",
    "title": "TradingEnterprise Overlapping Ixtisoslashuvi",
    "story": "B2B Savdo faoliyatida bitta sub'yekt bir vaqtning o'zida bir nechta rolni bajarishi mumkin: Korxona ham xomashyo yetkazib beruvchi, ham tayyor tovarlarni ulgurji tarqatuvchi bo'la oladi. Tizimda superklass sifatida **TradingEnterprise** (enterpriseInn {PK}, `legalEntityName`, `bankBik`, `cityHq`) qayd etiladi. Undan ajratilgan subklasslar bir vaqtda kesishishi mumkin bo'lgan EER umumlashtirish qoidasi asosida bog'lanadi.",
    "instruction": "'TradingEnterprise' superklassini va uning ustma-ust tushuvchi 'RawMaterialSupplier' hamda 'WholesaleDistributor' subklasslarini polotnoda bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TradingEnterprise",
          "isWeak": false,
          "isAssociative": false,
          "pk": "enterpriseInn",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "enterpriseInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "legalEntityName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bankBik",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityHq",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RawMaterialSupplier",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "WholesaleDistributor",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 530,
          "y": 300,
          "attributes": []
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
    }
  },
  {
    "id": 121,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PropertyOwner Kategoriyasi (Union Type ∪)",
    "story": "Mulk Egaligi faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Ko'chmas mulk egasi fuqaro, ipoteka banki yoki tijorat kompaniyasi bo'lishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **Person** (pinfl {PK}), **Bank** (bankCode {PK}) va **Company** (tin {PK}). Ular yagona umumiy **PropertyOwner** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'Person', 'Bank' va 'Company' entitiylarini chizing va ularni 'PropertyOwner' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Person",
          "isWeak": false,
          "isAssociative": false,
          "pk": "pinfl",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "pinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Bank",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bankCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "bankCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Company",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tin",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "tin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 122,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "VehicleOwner Kategoriyasi (Union Type ∪)",
    "story": "Avtotransport Ro'yxati faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Avtomobil egasi jismoniy shaxs, lizing firmasi yoki davlat idorasi bo'la oladi. Tizimda uchta mustaqil entitiy mavjud: **PrivateCitizen** (citizenPinfl {PK}), **LeasingFirm** (leasingInn {PK}) va **StateAgency** (agencyCode {PK}). Ular yagona umumiy **VehicleOwner** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'PrivateCitizen', 'LeasingFirm' va 'StateAgency' entitiylarini chizing va ularni 'VehicleOwner' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PrivateCitizen",
          "isWeak": false,
          "isAssociative": false,
          "pk": "citizenPinfl",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "citizenPinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LeasingFirm",
          "isWeak": false,
          "isAssociative": false,
          "pk": "leasingInn",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "leasingInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StateAgency",
          "isWeak": false,
          "isAssociative": false,
          "pk": "agencyCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "agencyCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 123,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PayeeEntity Kategoriyasi (Union Type ∪)",
    "story": "G'aznachilik To'lovlari faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: To'lovni qabul qiluvchi frilanser usta, kommunal korxona yoki soliq inspeksiyasi bo'lishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **FreelanceContractor** (freelancerId {PK}), **UtilityProvider** (utilityInn {PK}) va **TaxAuthority** (taxOfficeNo {PK}). Ular yagona umumiy **PayeeEntity** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'FreelanceContractor', 'UtilityProvider' va 'TaxAuthority' entitiylarini chizing va ularni 'PayeeEntity' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FreelanceContractor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "freelancerId",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "freelancerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "UtilityProvider",
          "isWeak": false,
          "isAssociative": false,
          "pk": "utilityInn",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "utilityInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TaxAuthority",
          "isWeak": false,
          "isAssociative": false,
          "pk": "taxOfficeNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "taxOfficeNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 124,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "LoanBorrower Kategoriyasi (Union Type ∪)",
    "story": "Kredit Qarzdorligi faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Bankdan kredit oluvchi yakka tadbirkor, shirkat yoki xalqaro xolding bo'la oladi. Tizimda uchta mustaqil entitiy mavjud: **SoleProprietorship** (spInn {PK}), **CommercialPartnership** (partnershipNo {PK}) va **CorporationHolding** (holdingTin {PK}). Ular yagona umumiy **LoanBorrower** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'SoleProprietorship', 'CommercialPartnership' va 'CorporationHolding' entitiylarini chizing va ularni 'LoanBorrower' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoleProprietorship",
          "isWeak": false,
          "isAssociative": false,
          "pk": "spInn",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "spInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CommercialPartnership",
          "isWeak": false,
          "isAssociative": false,
          "pk": "partnershipNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "partnershipNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CorporationHolding",
          "isWeak": false,
          "isAssociative": false,
          "pk": "holdingTin",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "holdingTin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 125,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "LegalSignatory Kategoriyasi (Union Type ∪)",
    "story": "Notarial Hujjatlar faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Hujjatga imzo chekuvchi mahalliy fuqaro, xorijiy diplomat yoki ishonchnomali advokat bo'lishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **DomesticCitizen** (residentPinfl {PK}), **ForeignDiplomat** (passportNumber {PK}) va **CorporateAttorney** (powerOfAttorneyNo {PK}). Ular yagona umumiy **LegalSignatory** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'DomesticCitizen', 'ForeignDiplomat' va 'CorporateAttorney' entitiylarini chizing va ularni 'LegalSignatory' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DomesticCitizen",
          "isWeak": false,
          "isAssociative": false,
          "pk": "residentPinfl",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "residentPinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ForeignDiplomat",
          "isWeak": false,
          "isAssociative": false,
          "pk": "passportNumber",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CorporateAttorney",
          "isWeak": false,
          "isAssociative": false,
          "pk": "powerOfAttorneyNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "powerOfAttorneyNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 126,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "CargoConsignor Kategoriyasi (Union Type ∪)",
    "story": "Bojxona Kargo Yuklari faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Yuk jo'natuvchi ishlab chiqaruvchi zavod, savdo kompaniyasi yoki gumanitar jamg'arma bo'la oladi. Tizimda uchta mustaqil entitiy mavjud: **ManufacturingPlant** (factoryTin {PK}), **TradingHouse** (tradingLicNo {PK}) va **HumanitarianMission** (missionRegCode {PK}). Ular yagona umumiy **CargoConsignor** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'ManufacturingPlant', 'TradingHouse' va 'HumanitarianMission' entitiylarini chizing va ularni 'CargoConsignor' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ManufacturingPlant",
          "isWeak": false,
          "isAssociative": false,
          "pk": "factoryTin",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "factoryTin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TradingHouse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tradingLicNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "tradingLicNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HumanitarianMission",
          "isWeak": false,
          "isAssociative": false,
          "pk": "missionRegCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "missionRegCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 127,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PatentAssignee Kategoriyasi (Union Type ∪)",
    "story": "Patent Huquqi faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Patent egasi ilmiy universitet, yakka ixtirochi yoki texnologik korporatsiya bo'lishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **ResearchUniversity** (universityCharterNo {PK}), **IndependentInventor** (inventorPinfl {PK}) va **TechCorporation** (corpTin {PK}). Ular yagona umumiy **PatentAssignee** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'ResearchUniversity', 'IndependentInventor' va 'TechCorporation' entitiylarini chizing va ularni 'PatentAssignee' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResearchUniversity",
          "isWeak": false,
          "isAssociative": false,
          "pk": "universityCharterNo",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "universityCharterNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IndependentInventor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "inventorPinfl",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "inventorPinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TechCorporation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "corpTin",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "corpTin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 128,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "PolicyBeneficiary Kategoriyasi (Union Type ∪)",
    "story": "Sug'urta To'lovlari faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Sug'urta to'lovini oluvchi merosxo'r oila a'zosi, ipoteka banki yoki xayriya jamg'armasi bo'la oladi. Tizimda uchta mustaqil entitiy mavjud: **FamilyKin** (relativePinfl {PK}), **MortgageBank** (bankLicNo {PK}) va **CharitableTrust** (charityRegNo {PK}). Ular yagona umumiy **PolicyBeneficiary** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'FamilyKin', 'MortgageBank' va 'CharitableTrust' entitiylarini chizing va ularni 'PolicyBeneficiary' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FamilyKin",
          "isWeak": false,
          "isAssociative": false,
          "pk": "relativePinfl",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "relativePinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MortgageBank",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bankLicNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "bankLicNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CharitableTrust",
          "isWeak": false,
          "isAssociative": false,
          "pk": "charityRegNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "charityRegNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 129,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "TrademarkOwner Kategoriyasi (Union Type ∪)",
    "story": "Savdo Belgilari faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Savdo markasi egasi xususiy tadbirkor, notijorat tashkilot yoki aksiyadorlik jamiyati bo'lishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **PrivateEnterpriser** (tinNo {PK}), **NonProfitOrg** (npoCertNo {PK}) va **JointStockCompany** (jscInn {PK}). Ular yagona umumiy **TrademarkOwner** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'PrivateEnterpriser', 'NonProfitOrg' va 'JointStockCompany' entitiylarini chizing va ularni 'TrademarkOwner' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PrivateEnterpriser",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tinNo",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "tinNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "NonProfitOrg",
          "isWeak": false,
          "isAssociative": false,
          "pk": "npoCertNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "npoCertNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "JointStockCompany",
          "isWeak": false,
          "isAssociative": false,
          "pk": "jscInn",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "jscInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 130,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "HealthCoverageSponsor Kategoriyasi (Union Type ∪)",
    "story": "Tibbiy Kafillik faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Davolanish xarajatini qoplovchi ish beruvchi firma, vazirlik byudjeti yoki homiy bo'la oladi. Tizimda uchta mustaqil entitiy mavjud: **EmployerCompany** (employerTin {PK}), **HealthMinistry** (ministryCode {PK}) va **PrivatePhilanthropist** (donorPinfl {PK}). Ular yagona umumiy **HealthCoverageSponsor** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'EmployerCompany', 'HealthMinistry' va 'PrivatePhilanthropist' entitiylarini chizing va ularni 'HealthCoverageSponsor' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "EmployerCompany",
          "isWeak": false,
          "isAssociative": false,
          "pk": "employerTin",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "employerTin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HealthMinistry",
          "isWeak": false,
          "isAssociative": false,
          "pk": "ministryCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "ministryCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PrivatePhilanthropist",
          "isWeak": false,
          "isAssociative": false,
          "pk": "donorPinfl",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "donorPinfl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 131,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "ShareholderEntity Kategoriyasi (Union Type ∪)",
    "story": "Qimmatli Qog'ozlar Depozitariysi faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Aksiya egasi xususiy investitsiya fondi, davlat suveren fondi yoki chakana investor bo'lishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **MutualFund** (fundRegNo {PK}), **SovereignWealthFund** (sovereignCode {PK}) va **RetailInvestor** (investorPassportNo {PK}). Ular yagona umumiy **ShareholderEntity** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'MutualFund', 'SovereignWealthFund' va 'RetailInvestor' entitiylarini chizing va ularni 'ShareholderEntity' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MutualFund",
          "isWeak": false,
          "isAssociative": false,
          "pk": "fundRegNo",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "fundRegNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SovereignWealthFund",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sovereignCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "sovereignCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RetailInvestor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "investorPassportNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "investorPassportNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 132,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "RunwayOperator Kategoriyasi (Union Type ∪)",
    "story": "Aerodrom Uchish Yo'lagi faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Uchish yo'lagidan fuqaro aviakompaniyasi, harbiy eskadron yoki xususiy charter foydalanishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **CommercialAirline** (airlineIata {PK}), **AirForceSquadron** (militaryUnitCode {PK}) va **PrivateAirCharter** (charterFlightCert {PK}). Ular yagona umumiy **RunwayOperator** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'CommercialAirline', 'AirForceSquadron' va 'PrivateAirCharter' entitiylarini chizing va ularni 'RunwayOperator' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CommercialAirline",
          "isWeak": false,
          "isAssociative": false,
          "pk": "airlineIata",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "airlineIata",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AirForceSquadron",
          "isWeak": false,
          "isAssociative": false,
          "pk": "militaryUnitCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "militaryUnitCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PrivateAirCharter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "charterFlightCert",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "charterFlightCert",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 133,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "TelecomSubscriber Kategoriyasi (Union Type ∪)",
    "story": "Telekom Abonentlari faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Aloqa tarmog'i abonenti jismoniy fuqaro, korporativ kompaniya yoki IoT smart qurilmasi bo'la oladi. Tizimda uchta mustaqil entitiy mavjud: **IndividualSubscriber** (personalId {PK}), **CorporateSubscriber** (companyInn {PK}) va **IotDeviceGateway** (macAddressDevice {PK}). Ular yagona umumiy **TelecomSubscriber** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'IndividualSubscriber', 'CorporateSubscriber' va 'IotDeviceGateway' entitiylarini chizing va ularni 'TelecomSubscriber' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "IndividualSubscriber",
          "isWeak": false,
          "isAssociative": false,
          "pk": "personalId",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "personalId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CorporateSubscriber",
          "isWeak": false,
          "isAssociative": false,
          "pk": "companyInn",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "companyInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IotDeviceGateway",
          "isWeak": false,
          "isAssociative": false,
          "pk": "macAddressDevice",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "macAddressDevice",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 134,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "GrantFunder Kategoriyasi (Union Type ∪)",
    "story": "Ilmiy Grantlar faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Grant moliyalashtiruvchisi davlat ilmiy agentligi, IT konsorsium yoki xalqaro fond bo'lishi mumkin. Tizimda uchta mustaqil entitiy mavjud: **StateScienceAgency** (govAgencyId {PK}), **TechConsortium** (consortiumInn {PK}) va **GlobalFoundation** (foundationRegNo {PK}). Ular yagona umumiy **GrantFunder** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'StateScienceAgency', 'TechConsortium' va 'GlobalFoundation' entitiylarini chizing va ularni 'GrantFunder' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "StateScienceAgency",
          "isWeak": false,
          "isAssociative": false,
          "pk": "govAgencyId",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "govAgencyId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TechConsortium",
          "isWeak": false,
          "isAssociative": false,
          "pk": "consortiumInn",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "consortiumInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "GlobalFoundation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "foundationRegNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "foundationRegNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 135,
    "sector": 9,
    "difficulty": "9-Qavat • Professional (Kategoriya ∪)",
    "clientName": "Bosh Maslahatchi",
    "clientRole": "Tizim Arxitektori",
    "clientAvatar": "mentor",
    "title": "TenderBidder Kategoriyasi (Union Type ∪)",
    "story": "Davlat Tenderlari faoliyatida turli xil mustaqil superklasslarni yagona toifaga birlashtiruvchi Kategoriya (Union Type ∪) kerak: Tenderda qatnashuvchi muhandislik konsortsiumi, qurilish korxonasi yoki shahar kommunal korxonasi bo'la oladi. Tizimda uchta mustaqil entitiy mavjud: **EngineeringConsortium** (consortiumCode {PK}), **ConstructionCorp** (builderInn {PK}) va **MunicipalUtility** (utilityBranchNo {PK}). Ular yagona umumiy **TenderBidder** kategoriyasiga (Union Type ∪) birlashtiriladi.",
    "instruction": "'EngineeringConsortium', 'ConstructionCorp' va 'MunicipalUtility' entitiylarini chizing va ularni 'TenderBidder' Union Type (∪) kategoriyasiga birlashtiring.",
    "starterDiagram": {
      "entities": [
        {
          "name": "EngineeringConsortium",
          "isWeak": false,
          "isAssociative": false,
          "pk": "consortiumCode",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "consortiumCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "nameOrTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ConstructionCorp",
          "isWeak": false,
          "isAssociative": false,
          "pk": "builderInn",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "builderInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contactEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MunicipalUtility",
          "isWeak": false,
          "isAssociative": false,
          "pk": "utilityBranchNo",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "utilityBranchNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "charterNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "taxStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        }
      ],
      "relationships": [],
      "subclasses": null
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
    }
  },
  {
    "id": 136,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Airport Korporativ Arxitekturasi",
    "story": "Xalqaro Aeroport Majmuasi bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **Airport** (iataCode {PK}), **Terminal** (terminalId {PK}), **FlightSchedule** (flightNo {PK}) va **PassengerBooking** (bookingRef {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'Airport', 'Terminal', 'FlightSchedule' va 'PassengerBooking' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Airport",
          "isWeak": false,
          "isAssociative": false,
          "pk": "iataCode",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "iataCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "airportName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cityLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Terminal",
          "isWeak": false,
          "isAssociative": false,
          "pk": "terminalId",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "terminalId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gateCount",
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
          "name": "FlightSchedule",
          "isWeak": false,
          "isAssociative": false,
          "pk": "flightNo",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "flightNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "depTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destIata",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PassengerBooking",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bookingRef",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "bookingRef",
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
              "name": "seatNo",
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
          "name": "Rel1",
          "entity1": "Airport",
          "entity2": "Terminal",
          "fromEntityName": "Airport",
          "toEntityName": "Terminal",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "Terminal",
          "entity2": "FlightSchedule",
          "fromEntityName": "Terminal",
          "toEntityName": "FlightSchedule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "FlightSchedule",
          "entity2": "PassengerBooking",
          "fromEntityName": "FlightSchedule",
          "toEntityName": "PassengerBooking",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 137,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "CentralBank Korporativ Arxitekturasi",
    "story": "Markaziy Bank Kliringi bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **CentralBank** (bankCode {PK}), **CommercialBank** (bikNumber {PK}), **SettlementAccount** (accNo {PK}) va **ClearingTx** (txRef {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'CentralBank', 'CommercialBank', 'SettlementAccount' va 'ClearingTx' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CentralBank",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bankCode",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "bankCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "officialTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "goldReserveTons",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CommercialBank",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bikNumber",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "bikNumber",
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
          "name": "SettlementAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "accNo",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "accNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "currency",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "balance",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ClearingTx",
          "isWeak": false,
          "isAssociative": false,
          "pk": "txRef",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "txRef",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "transferSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "timestamp",
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
          "name": "Rel1",
          "entity1": "CentralBank",
          "entity2": "CommercialBank",
          "fromEntityName": "CentralBank",
          "toEntityName": "CommercialBank",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "CommercialBank",
          "entity2": "SettlementAccount",
          "fromEntityName": "CommercialBank",
          "toEntityName": "SettlementAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "SettlementAccount",
          "entity2": "ClearingTx",
          "fromEntityName": "SettlementAccount",
          "toEntityName": "ClearingTx",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 138,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Hospital Korporativ Arxitekturasi",
    "story": "Onkologiya Gospitali bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **Hospital** (hospId {PK}), **SpecializedWard** (wardCode {PK}), **SpecializedDoctor** (licenseId {PK}) va **PatientCourse** (courseId {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'Hospital', 'SpecializedWard', 'SpecializedDoctor' va 'PatientCourse' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hospital",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hospId",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "hospId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hospName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SpecializedWard",
          "isWeak": false,
          "isAssociative": false,
          "pk": "wardCode",
          "x": 550,
          "y": 90,
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
              "name": "beds",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SpecializedDoctor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "licenseId",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "licenseId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "docName",
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
          "name": "PatientCourse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "courseId",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "courseId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "protocol",
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
          "name": "Rel1",
          "entity1": "Hospital",
          "entity2": "SpecializedWard",
          "fromEntityName": "Hospital",
          "toEntityName": "SpecializedWard",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "SpecializedWard",
          "entity2": "SpecializedDoctor",
          "fromEntityName": "SpecializedWard",
          "toEntityName": "SpecializedDoctor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "SpecializedDoctor",
          "entity2": "PatientCourse",
          "fromEntityName": "SpecializedDoctor",
          "toEntityName": "PatientCourse",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 139,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "MegaWarehouse Korporativ Arxitekturasi",
    "story": "Trans-Okean Porti bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **MegaWarehouse** (hubCode {PK}), **ContainerVessel** (imoNumber {PK}), **CustomsDeclaration** (gtdNumber {PK}) va **FreightForwarder** (forwarderInn {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'MegaWarehouse', 'ContainerVessel', 'CustomsDeclaration' va 'FreightForwarder' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MegaWarehouse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hubCode",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "hubCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "portName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "berthCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ContainerVessel",
          "isWeak": false,
          "isAssociative": false,
          "pk": "imoNumber",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "imoNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vesselName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "teuCap",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CustomsDeclaration",
          "isWeak": false,
          "isAssociative": false,
          "pk": "gtdNumber",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "gtdNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dutySum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passed",
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
          "pk": "forwarderInn",
          "x": 550,
          "y": 330,
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
            },
            {
              "name": "license",
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
          "name": "Rel1",
          "entity1": "MegaWarehouse",
          "entity2": "ContainerVessel",
          "fromEntityName": "MegaWarehouse",
          "toEntityName": "ContainerVessel",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "ContainerVessel",
          "entity2": "CustomsDeclaration",
          "fromEntityName": "ContainerVessel",
          "toEntityName": "CustomsDeclaration",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "CustomsDeclaration",
          "entity2": "FreightForwarder",
          "fromEntityName": "CustomsDeclaration",
          "toEntityName": "FreightForwarder",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 140,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Faculty Korporativ Arxitekturasi",
    "story": "Universitet Kampusi bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **Faculty** (facultyCode {PK}), **AcademicDept** (deptId {PK}), **StaffMember** (staffNo {PK}) va **StudentClass** (classCode {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'Faculty', 'AcademicDept', 'StaffMember' va 'StudentClass' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "isWeak": false,
          "isAssociative": false,
          "pk": "facultyCode",
          "x": 130,
          "y": 90,
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
              "name": "building",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AcademicDept",
          "isWeak": false,
          "isAssociative": false,
          "pk": "deptId",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "deptId",
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
              "name": "focusArea",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StaffMember",
          "isWeak": false,
          "isAssociative": false,
          "pk": "staffNo",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "staffNo",
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
              "name": "salary",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StudentClass",
          "isWeak": false,
          "isAssociative": false,
          "pk": "classCode",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "classCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "semester",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomCode",
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
          "name": "Rel1",
          "entity1": "Faculty",
          "entity2": "AcademicDept",
          "fromEntityName": "Faculty",
          "toEntityName": "AcademicDept",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "AcademicDept",
          "entity2": "StaffMember",
          "fromEntityName": "AcademicDept",
          "toEntityName": "StaffMember",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "StaffMember",
          "entity2": "StudentClass",
          "fromEntityName": "StaffMember",
          "toEntityName": "StudentClass",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 141,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "PowerPlant Korporativ Arxitekturasi",
    "story": "Milliy Elektr Tizimi bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **PowerPlant** (plantCode {PK}), **Substation** (substationId {PK}), **TransmissionLine** (lineCode {PK}) va **LoadZone** (zoneId {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'PowerPlant', 'Substation', 'TransmissionLine' va 'LoadZone' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PowerPlant",
          "isWeak": false,
          "isAssociative": false,
          "pk": "plantCode",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "plantCode",
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
              "name": "megaWatts",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Substation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "substationId",
          "x": 550,
          "y": 90,
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
          "name": "TransmissionLine",
          "isWeak": false,
          "isAssociative": false,
          "pk": "lineCode",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "lineCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "distanceKm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ampCapacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LoadZone",
          "isWeak": false,
          "isAssociative": false,
          "pk": "zoneId",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "zoneId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "region",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "peakDemand",
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
          "name": "Rel1",
          "entity1": "PowerPlant",
          "entity2": "Substation",
          "fromEntityName": "PowerPlant",
          "toEntityName": "Substation",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "Substation",
          "entity2": "TransmissionLine",
          "fromEntityName": "Substation",
          "toEntityName": "TransmissionLine",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "TransmissionLine",
          "entity2": "LoadZone",
          "fromEntityName": "TransmissionLine",
          "toEntityName": "LoadZone",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 142,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "RailwayNetwork Korporativ Arxitekturasi",
    "story": "Davlat Temir Yo'llari bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **RailwayNetwork** (networkId {PK}), **TrainSchedule** (tripNo {PK}), **LocomotiveEngine** (locoNo {PK}) va **PassengerTicket** (ticketPnr {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'RailwayNetwork', 'TrainSchedule', 'LocomotiveEngine' va 'PassengerTicket' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RailwayNetwork",
          "isWeak": false,
          "isAssociative": false,
          "pk": "networkId",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "networkId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "networkName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "trackMm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TrainSchedule",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tripNo",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "tripNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "depTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "arrTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LocomotiveEngine",
          "isWeak": false,
          "isAssociative": false,
          "pk": "locoNo",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "locoNo",
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
              "name": "powerHp",
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
          "pk": "ticketPnr",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "ticketPnr",
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
              "name": "coachNo",
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
          "name": "Rel1",
          "entity1": "RailwayNetwork",
          "entity2": "TrainSchedule",
          "fromEntityName": "RailwayNetwork",
          "toEntityName": "TrainSchedule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "TrainSchedule",
          "entity2": "LocomotiveEngine",
          "fromEntityName": "TrainSchedule",
          "toEntityName": "LocomotiveEngine",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "LocomotiveEngine",
          "entity2": "PassengerTicket",
          "fromEntityName": "LocomotiveEngine",
          "toEntityName": "PassengerTicket",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 143,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "GovPortalService Korporativ Arxitekturasi",
    "story": "Elektron Hukumat Portali bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **GovPortalService** (serviceCode {PK}), **CitizenRequest** (appId {PK}), **MinistryDept** (deptInn {PK}) va **ProcessingOfficer** (officerId {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'GovPortalService', 'CitizenRequest', 'MinistryDept' va 'ProcessingOfficer' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "GovPortalService",
          "isWeak": false,
          "isAssociative": false,
          "pk": "serviceCode",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "serviceCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "serviceTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fee",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CitizenRequest",
          "isWeak": false,
          "isAssociative": false,
          "pk": "appId",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "appId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "applicantPinfl",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "submittedAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MinistryDept",
          "isWeak": false,
          "isAssociative": false,
          "pk": "deptInn",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "deptInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ministryTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "zone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProcessingOfficer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "officerId",
          "x": 550,
          "y": 330,
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
              "name": "certKey",
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
          "name": "Rel1",
          "entity1": "GovPortalService",
          "entity2": "CitizenRequest",
          "fromEntityName": "GovPortalService",
          "toEntityName": "CitizenRequest",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "CitizenRequest",
          "entity2": "MinistryDept",
          "fromEntityName": "CitizenRequest",
          "toEntityName": "MinistryDept",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "MinistryDept",
          "entity2": "ProcessingOfficer",
          "fromEntityName": "MinistryDept",
          "toEntityName": "ProcessingOfficer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 144,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "PharmaFactory Korporativ Arxitekturasi",
    "story": "GMP Farmatsevtika Klasteri bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **PharmaFactory** (facilityId {PK}), **ChemicalLab** (labCode {PK}), **DrugBatch** (batchNo {PK}) va **QualityAudit** (auditId {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'PharmaFactory', 'ChemicalLab', 'DrugBatch' va 'QualityAudit' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PharmaFactory",
          "isWeak": false,
          "isAssociative": false,
          "pk": "facilityId",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "facilityId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "facilityName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gmpCert",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ChemicalLab",
          "isWeak": false,
          "isAssociative": false,
          "pk": "labCode",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "labCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "labSpec",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hplcCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DrugBatch",
          "isWeak": false,
          "isAssociative": false,
          "pk": "batchNo",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "batchNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "manufDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passed",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "QualityAudit",
          "isWeak": false,
          "isAssociative": false,
          "pk": "auditId",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "auditId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "auditorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "purityPct",
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
          "name": "Rel1",
          "entity1": "PharmaFactory",
          "entity2": "ChemicalLab",
          "fromEntityName": "PharmaFactory",
          "toEntityName": "ChemicalLab",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "ChemicalLab",
          "entity2": "DrugBatch",
          "fromEntityName": "ChemicalLab",
          "toEntityName": "DrugBatch",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "DrugBatch",
          "entity2": "QualityAudit",
          "fromEntityName": "DrugBatch",
          "toEntityName": "QualityAudit",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 145,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "CarManufacturer Korporativ Arxitekturasi",
    "story": "Avtomobil Yig'uv Klasteri bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **CarManufacturer** (oemCode {PK}), **AssemblyLine** (lineId {PK}), **DealershipShowroom** (dealerId {PK}) va **VehicleOrder** (contractNo {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'CarManufacturer', 'AssemblyLine', 'DealershipShowroom' va 'VehicleOrder' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CarManufacturer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "oemCode",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "oemCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "corpName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isoCert",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AssemblyLine",
          "isWeak": false,
          "isAssociative": false,
          "pk": "lineId",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "lineId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lineModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dailyCap",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DealershipShowroom",
          "isWeak": false,
          "isAssociative": false,
          "pk": "dealerId",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "dealerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "showroomCity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "quota",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "VehicleOrder",
          "isWeak": false,
          "isAssociative": false,
          "pk": "contractNo",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "customerPin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vin",
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
          "name": "Rel1",
          "entity1": "CarManufacturer",
          "entity2": "AssemblyLine",
          "fromEntityName": "CarManufacturer",
          "toEntityName": "AssemblyLine",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "AssemblyLine",
          "entity2": "DealershipShowroom",
          "fromEntityName": "AssemblyLine",
          "toEntityName": "DealershipShowroom",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "DealershipShowroom",
          "entity2": "VehicleOrder",
          "fromEntityName": "DealershipShowroom",
          "toEntityName": "VehicleOrder",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 146,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "SOCNetwork Korporativ Arxitekturasi",
    "story": "SOC Kiberxavfsizlik bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **SOCNetwork** (perimeterId {PK}), **SecurityThreat** (cveCode {PK}), **IncidentTicket** (incidentId {PK}) va **MitigationAction** (actionId {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'SOCNetwork', 'SecurityThreat', 'IncidentTicket' va 'MitigationAction' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SOCNetwork",
          "isWeak": false,
          "isAssociative": false,
          "pk": "perimeterId",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "perimeterId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "segmentName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "firewallIp",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SecurityThreat",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cveCode",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "cveCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cvssScore",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "category",
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
          "pk": "incidentId",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "incidentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "detectedAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "state",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MitigationAction",
          "isWeak": false,
          "isAssociative": false,
          "pk": "actionId",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "actionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "analystBadge",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "patchedAt",
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
          "name": "Rel1",
          "entity1": "SOCNetwork",
          "entity2": "SecurityThreat",
          "fromEntityName": "SOCNetwork",
          "toEntityName": "SecurityThreat",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "SecurityThreat",
          "entity2": "IncidentTicket",
          "fromEntityName": "SecurityThreat",
          "toEntityName": "IncidentTicket",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "IncidentTicket",
          "entity2": "MitigationAction",
          "fromEntityName": "IncidentTicket",
          "toEntityName": "MitigationAction",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 147,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "RetailStore Korporativ Arxitekturasi",
    "story": "Chakana Savdo Zanjiri bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **RetailStore** (storeId {PK}), **CentralDepot** (depotBarcode {PK}), **SupplierVendor** (vendorInn {PK}) va **ProductInventory** (inventorySku {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'RetailStore', 'CentralDepot', 'SupplierVendor' va 'ProductInventory' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RetailStore",
          "isWeak": false,
          "isAssociative": false,
          "pk": "storeId",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "storeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storeName",
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
          "name": "CentralDepot",
          "isWeak": false,
          "isAssociative": false,
          "pk": "depotBarcode",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "depotBarcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "volumeTons",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "slots",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupplierVendor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vendorInn",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "vendorInn",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "vendorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "slaScore",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProductInventory",
          "isWeak": false,
          "isAssociative": false,
          "pk": "inventorySku",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "inventorySku",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "quantityOnHand",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "reorderLevel",
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
          "name": "Rel1",
          "entity1": "RetailStore",
          "entity2": "CentralDepot",
          "fromEntityName": "RetailStore",
          "toEntityName": "CentralDepot",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "CentralDepot",
          "entity2": "SupplierVendor",
          "fromEntityName": "CentralDepot",
          "toEntityName": "SupplierVendor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "SupplierVendor",
          "entity2": "ProductInventory",
          "fromEntityName": "SupplierVendor",
          "toEntityName": "ProductInventory",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 148,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "RefineryPlant Korporativ Arxitekturasi",
    "story": "Neft-Gaz Majmuasi bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **RefineryPlant** (refineryCode {PK}), **StorageTanker** (tankId {PK}), **PipelineSegment** (segmentCode {PK}) va **CrudeOilShipment** (consignmentNo {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'RefineryPlant', 'StorageTanker', 'PipelineSegment' va 'CrudeOilShipment' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RefineryPlant",
          "isWeak": false,
          "isAssociative": false,
          "pk": "refineryCode",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "refineryCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "refineryName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityBarrels",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StorageTanker",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tankId",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "tankId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "grossVolumeM3",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "grade",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PipelineSegment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "segmentCode",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "segmentCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "diameterMm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pressureBar",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CrudeOilShipment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "consignmentNo",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "consignmentNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gravitySpec",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dispatchTime",
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
          "name": "Rel1",
          "entity1": "RefineryPlant",
          "entity2": "StorageTanker",
          "fromEntityName": "RefineryPlant",
          "toEntityName": "StorageTanker",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "StorageTanker",
          "entity2": "PipelineSegment",
          "fromEntityName": "StorageTanker",
          "toEntityName": "PipelineSegment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "PipelineSegment",
          "entity2": "CrudeOilShipment",
          "fromEntityName": "PipelineSegment",
          "toEntityName": "CrudeOilShipment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 149,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "TelecomCore Korporativ Arxitekturasi",
    "story": "5G Telekomunikasiya bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **TelecomCore** (coreSwitchId {PK}), **FiveGBaseStation** (gNodeBId {PK}), **BillingSubscription** (subscriberMsisdn {PK}) va **DataTrafficSession** (cdrSessionId {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'TelecomCore', 'FiveGBaseStation', 'BillingSubscription' va 'DataTrafficSession' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TelecomCore",
          "isWeak": false,
          "isAssociative": false,
          "pk": "coreSwitchId",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "coreSwitchId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "routerModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityTbps",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FiveGBaseStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "gNodeBId",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "gNodeBId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "freqGhz",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "mimoSectors",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BillingSubscription",
          "isWeak": false,
          "isAssociative": false,
          "pk": "subscriberMsisdn",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "subscriberMsisdn",
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
              "name": "balanceGb",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DataTrafficSession",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cdrSessionId",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "cdrSessionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "connectedAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "megabytes",
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
          "name": "Rel1",
          "entity1": "TelecomCore",
          "entity2": "FiveGBaseStation",
          "fromEntityName": "TelecomCore",
          "toEntityName": "FiveGBaseStation",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "FiveGBaseStation",
          "entity2": "BillingSubscription",
          "fromEntityName": "FiveGBaseStation",
          "toEntityName": "BillingSubscription",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "BillingSubscription",
          "entity2": "DataTrafficSession",
          "fromEntityName": "BillingSubscription",
          "toEntityName": "DataTrafficSession",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  },
  {
    "id": 150,
    "sector": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Enterprise)",
    "clientName": "Bosh Direktor",
    "clientRole": "Bosh Korporativ Me'mor",
    "clientAvatar": "mentor",
    "title": "Spaceport Korporativ Arxitekturasi",
    "story": "Kosmik Missiyalar Boshqaruvi bo'yicha korxona miqyosidagi integratsiyalashgan axborot tizimi qurilmoqda. Tizimda to'rtta asosiy bo'g'in: **Spaceport** (complexId {PK}), **SatelliteOrbiter** (noradId {PK}), **GroundStation** (stationCode {PK}) va **MissionTelemetry** (telemetryId {PK}) o'zaro uzluksiz texnologik zanjirda faoliyat yuritadi. Har bir ob'yekt o'zining birlamchi kalitiga ega bo'lib, ular o'rtasidagi munosabatlar va multiplisitiyalar tashkilot reglamentiga mos ravishda polotnoda aks ettiriladi.",
    "instruction": "'Spaceport', 'SatelliteOrbiter', 'GroundStation' va 'MissionTelemetry' entitiylarini polotnoda joylashtiring, {PK} kalitlarini belgilang va ular orasidagi barcha munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Spaceport",
          "isWeak": false,
          "isAssociative": false,
          "pk": "complexId",
          "x": 130,
          "y": 90,
          "attributes": [
            {
              "name": "complexId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cosmodromeName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "padCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SatelliteOrbiter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "noradId",
          "x": 550,
          "y": 90,
          "attributes": [
            {
              "name": "noradId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "satelliteName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "altitudeKm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "GroundStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationCode",
          "x": 130,
          "y": 330,
          "attributes": [
            {
              "name": "stationCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dishDiameterMeters",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "freqGhz",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MissionTelemetry",
          "isWeak": false,
          "isAssociative": false,
          "pk": "telemetryId",
          "x": 550,
          "y": 330,
          "attributes": [
            {
              "name": "telemetryId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "volts",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tempKelvin",
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
          "name": "Rel1",
          "entity1": "Spaceport",
          "entity2": "SatelliteOrbiter",
          "fromEntityName": "Spaceport",
          "toEntityName": "SatelliteOrbiter",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Rel2",
          "entity1": "SatelliteOrbiter",
          "entity2": "GroundStation",
          "fromEntityName": "SatelliteOrbiter",
          "toEntityName": "GroundStation",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Rel3",
          "entity1": "GroundStation",
          "entity2": "MissionTelemetry",
          "fromEntityName": "GroundStation",
          "toEntityName": "MissionTelemetry",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        }
      ],
      "subclasses": null
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
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.QUESTIONS_101_150;
}
