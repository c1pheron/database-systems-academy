var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #101",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "To'lov Usullari: Naqd va Karta ({Mandatory, Or})",
    "story": "'PaymentMethod' superklassi ostida 'CashPayment' va 'CardPayment' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "Model superclass 'PaymentMethod' and its subclasses ('CashPayment', 'CardPayment') with the '{Mandatory, Or}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PaymentMethod",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "CashPayment",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "CardPayment",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PaymentMethod",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "PaymentMethod",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "CashPayment",
          "CardPayment"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'PaymentMethod', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'PaymentMethod' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'PaymentMethod' and its subclasses ('CashPayment', 'CardPayment') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 102,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #102",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "Soliq To'lovchilar: Rezident va Norezident ({Mandatory, Or})",
    "story": "'TaxPayer' superklassi ostida 'Resident' va 'NonResident' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "Model superclass 'TaxPayer' and its subclasses ('Resident', 'NonResident') with the '{Mandatory, Or}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TaxPayer",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Resident",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "NonResident",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TaxPayer",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "TaxPayer",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "Resident",
          "NonResident"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'TaxPayer', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'TaxPayer' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'TaxPayer' and its subclasses ('Resident', 'NonResident') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 103,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #103",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "Avtomobil Dvigatellari: Benzin va Elektr ({Mandatory, Or})",
    "story": "'Engine' superklassi ostida 'PetrolEngine' va 'ElectricEngine' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "Model superclass 'Engine' and its subclasses ('PetrolEngine', 'ElectricEngine') with the '{Mandatory, Or}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Engine",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "PetrolEngine",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "ElectricEngine",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Engine",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Engine",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "PetrolEngine",
          "ElectricEngine"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Engine', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Engine' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'Engine' and its subclasses ('PetrolEngine', 'ElectricEngine') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 104,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Intermediate",
    "clientName": "Biznes Hamkor #104",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "Mehmonxona Xonalari: Standart va Lyuks ({Mandatory, Or})",
    "story": "'HotelRoom' superklassi ostida 'StandardRoom' va 'DeluxeRoom' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "Model superclass 'HotelRoom' and its subclasses ('StandardRoom', 'DeluxeRoom') with the '{Mandatory, Or}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HotelRoom",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "StandardRoom",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "DeluxeRoom",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HotelRoom",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "HotelRoom",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "StandardRoom",
          "DeluxeRoom"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'HotelRoom', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'HotelRoom' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'HotelRoom' and its subclasses ('StandardRoom', 'DeluxeRoom') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 105,
    "sector": 7,
    "floor": 7,
    "difficulty": "Floor 7 • Qiyin (Floor 7 Grand Master Architect)",
    "clientName": "Biznes Hamkor #105",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "7-Qavat Grand Boss: Aeroport Xodimlari ({Mandatory, Or})",
    "story": "'AirportStaff' superklassi ostida 'GroundCrew' va 'FlightCrew' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "Model superclass 'AirportStaff' and its subclasses ('GroundCrew', 'FlightCrew') with the '{Mandatory, Or}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AirportStaff",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "GroundCrew",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "attr1"
            }
          ]
        },
        {
          "name": "FlightCrew",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "attr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AirportStaff",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "AirportStaff",
        "constraint": "{Mandatory, Or}",
        "subclasses": [
          "GroundCrew",
          "FlightCrew"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'AirportStaff', select '{Mandatory, Or}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'AirportStaff' configured with '{Mandatory, Or}' successfully.",
    "task": "Model superclass 'AirportStaff' and its subclasses ('GroundCrew', 'FlightCrew') with the '{Mandatory, Or}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 106,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #106",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Detal Ishlab Chiqarish va Xarid: {Mandatory, And}",
    "story": "'Part' superklassi ostida 'ManufacturedPart' va 'PurchasedPart' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Mandatory, And}'.",
    "taskUz": "Model superclass 'Part' and its subclasses ('ManufacturedPart', 'PurchasedPart') with the '{Mandatory, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Part",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "ManufacturedPart",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "PurchasedPart",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Part",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Part",
        "constraint": "{Mandatory, And}",
        "subclasses": [
          "ManufacturedPart",
          "PurchasedPart"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Part', select '{Mandatory, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Part' configured with '{Mandatory, And}' successfully.",
    "task": "Model superclass 'Part' and its subclasses ('ManufacturedPart', 'PurchasedPart') with the '{Mandatory, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 107,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #107",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Universitet Xodimi va Talaba Kesishuvi: {Optional, And}",
    "story": "'Person' superklassi ostida 'StaffMember' va 'StudentMember' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'Person' and its subclasses ('StaffMember', 'StudentMember') with the '{Optional, And}' constraint according to client requirements.",
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
            }
          ]
        },
        {
          "name": "StaffMember",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "StudentMember",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
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
        "constraint": "{Optional, And}",
        "subclasses": [
          "StaffMember",
          "StudentMember"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Person', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Person' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'Person' and its subclasses ('StaffMember', 'StudentMember') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 108,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #108",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Muallif va Tarjimon Kesishuvi: {Optional, And}",
    "story": "'Writer' superklassi ostida 'Author' va 'Translator' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'Writer' and its subclasses ('Author', 'Translator') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Writer",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Author",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Translator",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Writer",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Writer",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Author",
          "Translator"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Writer', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Writer' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'Writer' and its subclasses ('Author', 'Translator') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 109,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #109",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Dastur Foydalanuvchisi: Xaridor va Sotuvchi ({Mandatory, And})",
    "story": "'PlatformUser' superklassi ostida 'Buyer' va 'Seller' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Mandatory, And}'.",
    "taskUz": "Model superclass 'PlatformUser' and its subclasses ('Buyer', 'Seller') with the '{Mandatory, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PlatformUser",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Buyer",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Seller",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PlatformUser",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "PlatformUser",
        "constraint": "{Mandatory, And}",
        "subclasses": [
          "Buyer",
          "Seller"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'PlatformUser', select '{Mandatory, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'PlatformUser' configured with '{Mandatory, And}' successfully.",
    "task": "Model superclass 'PlatformUser' and its subclasses ('Buyer', 'Seller') with the '{Mandatory, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 110,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #110",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Avtomobil Ishlab Chiqaruvchi va Sotuvchi: {Optional, And}",
    "story": "'AutoCompany' superklassi ostida 'Manufacturer' va 'Dealer' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'AutoCompany' and its subclasses ('Manufacturer', 'Dealer') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AutoCompany",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Manufacturer",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Dealer",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AutoCompany",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "AutoCompany",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Manufacturer",
          "Dealer"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'AutoCompany', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'AutoCompany' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'AutoCompany' and its subclasses ('Manufacturer', 'Dealer') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 111,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #111",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Sportchi va Murabbiy Kesishuvi: {Optional, And}",
    "story": "'Athlete' superklassi ostida 'Player' va 'Coach' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'Athlete' and its subclasses ('Player', 'Coach') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Athlete",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Player",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Coach",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Athlete",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Athlete",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Player",
          "Coach"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Athlete', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Athlete' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'Athlete' and its subclasses ('Player', 'Coach') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 112,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #112",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Shifoxona Xodimi: Vrach va O'qituvchi ({Optional, And})",
    "story": "'HospitalStaff' superklassi ostida 'Doctor' va 'Lecturer' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'HospitalStaff' and its subclasses ('Doctor', 'Lecturer') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HospitalStaff",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Doctor",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Lecturer",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HospitalStaff",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "HospitalStaff",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Doctor",
          "Lecturer"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'HospitalStaff', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'HospitalStaff' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'HospitalStaff' and its subclasses ('Doctor', 'Lecturer') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 113,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #113",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Kompaniya Filiali: Savdo va Servis Markazi ({Mandatory, And})",
    "story": "'Branch' superklassi ostida 'SalesOffice' va 'ServiceCenter' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Mandatory, And}'.",
    "taskUz": "Model superclass 'Branch' and its subclasses ('SalesOffice', 'ServiceCenter') with the '{Mandatory, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "SalesOffice",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "ServiceCenter",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Branch",
        "constraint": "{Mandatory, And}",
        "subclasses": [
          "SalesOffice",
          "ServiceCenter"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Branch', select '{Mandatory, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Branch' configured with '{Mandatory, And}' successfully.",
    "task": "Model superclass 'Branch' and its subclasses ('SalesOffice', 'ServiceCenter') with the '{Mandatory, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 114,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #114",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Musiqachi: Bastakor va Ijrochi ({Optional, And})",
    "story": "'Musician' superklassi ostida 'Composer' va 'Performer' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'Musician' and its subclasses ('Composer', 'Performer') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Musician",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Composer",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Performer",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Musician",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Musician",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Composer",
          "Performer"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Musician', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Musician' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'Musician' and its subclasses ('Composer', 'Performer') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 115,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #115",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "IT Mutaxassis: Dasturchi va DevOps ({Optional, And})",
    "story": "'TechStaff' superklassi ostida 'Coder' va 'DevOps' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'TechStaff' and its subclasses ('Coder', 'DevOps') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TechStaff",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Coder",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "DevOps",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TechStaff",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "TechStaff",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Coder",
          "DevOps"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'TechStaff', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'TechStaff' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'TechStaff' and its subclasses ('Coder', 'DevOps') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 116,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #116",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Bino: Ofis va Turarjoy Majmuasi ({Mandatory, And})",
    "story": "'Building' superklassi ostida 'OfficeSpace' va 'ApartmentSpace' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Mandatory, And}'.",
    "taskUz": "Model superclass 'Building' and its subclasses ('OfficeSpace', 'ApartmentSpace') with the '{Mandatory, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Building",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "OfficeSpace",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "ApartmentSpace",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Building",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Building",
        "constraint": "{Mandatory, And}",
        "subclasses": [
          "OfficeSpace",
          "ApartmentSpace"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Building', select '{Mandatory, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Building' configured with '{Mandatory, And}' successfully.",
    "task": "Model superclass 'Building' and its subclasses ('OfficeSpace', 'ApartmentSpace') with the '{Mandatory, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 117,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #117",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Kredit Karta Egasi: Debet va Kredit Funksiyasi ({Mandatory, And})",
    "story": "'CardHolder' superklassi ostida 'DebitCard' va 'CreditCard' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Mandatory, And}'.",
    "taskUz": "Model superclass 'CardHolder' and its subclasses ('DebitCard', 'CreditCard') with the '{Mandatory, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CardHolder",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "DebitCard",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "CreditCard",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CardHolder",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "CardHolder",
        "constraint": "{Mandatory, And}",
        "subclasses": [
          "DebitCard",
          "CreditCard"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'CardHolder', select '{Mandatory, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'CardHolder' configured with '{Mandatory, And}' successfully.",
    "task": "Model superclass 'CardHolder' and its subclasses ('DebitCard', 'CreditCard') with the '{Mandatory, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 118,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #118",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Restoran Xodimi: Oshpaz va Ma'mur ({Optional, And})",
    "story": "'RestStaff' superklassi ostida 'Cook' va 'Manager' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'RestStaff' and its subclasses ('Cook', 'Manager') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "RestStaff",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Cook",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Manager",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "RestStaff",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "RestStaff",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Cook",
          "Manager"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'RestStaff', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'RestStaff' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'RestStaff' and its subclasses ('Cook', 'Manager') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 119,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Intermediate",
    "clientName": "Biznes Hamkor #119",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Ilmiy Xodim: Tadqiqotchi va Ekspert ({Optional, And})",
    "story": "'Scientist' superklassi ostida 'Researcher' va 'Expert' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'Scientist' and its subclasses ('Researcher', 'Expert') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Scientist",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Researcher",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "Expert",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Scientist",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "Scientist",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Researcher",
          "Expert"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'Scientist', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'Scientist' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'Scientist' and its subclasses ('Researcher', 'Expert') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 120,
    "sector": 8,
    "floor": 8,
    "difficulty": "Floor 8 • Qiyin (Floor 8 Master Architecti)",
    "clientName": "Biznes Hamkor #120",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "8-Qavat Bossi: Aviatsiya Xodimi (Uchuvchi va Instruktor {Optional, And})",
    "story": "'AeroStaff' superklassi ostida 'Pilot' va 'FlightInstructor' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar are present. Qoida: '{Optional, And}'.",
    "taskUz": "Model superclass 'AeroStaff' and its subclasses ('Pilot', 'FlightInstructor') with the '{Optional, And}' constraint according to client requirements.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AeroStaff",
          "x": 280,
          "y": 80,
          "attributes": [
            {
              "name": "id",
              "isPK": true
            }
          ]
        },
        {
          "name": "Pilot",
          "x": 120,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr1"
            }
          ]
        },
        {
          "name": "FlightInstructor",
          "x": 440,
          "y": 220,
          "attributes": [
            {
              "name": "subAttr2"
            }
          ]
        }
      ],
      "subclasses": null,
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AeroStaff",
          "pk": "id"
        }
      ],
      "subclasses": {
        "superclass": "AeroStaff",
        "constraint": "{Optional, And}",
        "subclasses": [
          "Pilot",
          "FlightInstructor"
        ]
      },
      "relationships": []
    },
    "hint": "Open the Subclass modal: set superclass to 'AeroStaff', select '{Optional, And}', and check child subclasses.",
    "explanation": "EER Subclass hierarchy under 'AeroStaff' configured with '{Optional, And}' successfully.",
    "task": "Model superclass 'AeroStaff' and its subclasses ('Pilot', 'FlightInstructor') with the '{Optional, And}' constraint according to client requirements.",
    "isWeek2": true
  },
  {
    "id": 121,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #121",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Bo'lim, Filial va Xodim: Fan Trap Bartaraf Etish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 122,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #122",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Mulk, Filial va Xodim: Chasm Trap Correction",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Property",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Property",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 123,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #123",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Fakultet, Kafedra va O'qituvchi: Fan Trap Hal Qilish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 124,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #124",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Loyiha, Bo'lim va Dasturchi: Chasm Trap Bartaraf Etish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Property",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Property",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 125,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #125",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Zavod, Tsex va Ishchi: Fan Trap Correction",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 126,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #126",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Kasalxona, Bo'lim va Palata: Chasm Trap Hal Qilish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Property",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Property",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 127,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #127",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Bank, Filial va Kassir: Fan Trap Bartaraf Etish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 128,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #128",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Kompaniya, Shartnoma va Mijoz: Chasm Trap Correction",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Property",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Property",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 129,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #129",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Do'kon, Ombor va Yukchi: Fan Trap Hal Qilish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 130,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #130",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Universitet, Guruh va Talaba: Chasm Trap Bartaraf Etish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Property",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Property",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 131,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #131",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Nashriyot, Jurnal va Maqola: Fan Trap Correction",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 132,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #132",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Klinika, Shifokor va Retsept: Chasm Trap Hal Qilish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Property",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Property",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 133,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #133",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Holding, Korxona va Boshqaruvchi: Fan Trap Bartaraf Etish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 134,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Intermediate",
    "clientName": "Biznes Hamkor #134",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Aviakompaniya, Samolyot va Reys: Chasm Trap Correction",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Property",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Property",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Property', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 135,
    "sector": 9,
    "floor": 9,
    "difficulty": "Floor 9 • Qiyin (Floor 9 Master Architecti)",
    "clientName": "Biznes Hamkor #135",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "9-Qavat Bossi: Murakkab Fan va Chasm Trap Korporativ Qayta Loyihalash",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Division",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            }
          ]
        },
        {
          "name": "Branch",
          "x": 300,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            }
          ]
        },
        {
          "name": "Staff",
          "x": 520,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Division",
          "pk": "id1"
        },
        {
          "name": "Branch",
          "pk": "id2"
        },
        {
          "name": "Staff",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Division' (1..1) to 'Branch' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Division' (1..1) and 'Branch' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Division', 'Branch', 'Staff', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 136,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Bobur Rahimov",
    "clientRole": "Bank IT Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Orient Bank' Korporativ EER Master Arxitekturasi",
    "story": "Bank filiallari (Branch), xodimlari (Staff) va hisob raqamlari (Account) o'rtasidagi to'liq arxitekturani chizing.",
    "taskUz": "Model the multi-entity diagram for 'Branch', 'Staff', 'Account', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Branch",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Staff",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Account",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Branch",
          "pk": "id1"
        },
        {
          "name": "Staff",
          "pk": "id2"
        },
        {
          "name": "Account",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Branch' (1..1) to 'Staff' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Branch' (1..1) and 'Staff' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Branch', 'Staff', 'Account', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 137,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Dr. Nilufar Mirzayeva",
    "clientRole": "Tibbiyot Markazi Bosh Vrachi",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Akfa Medline' Markaziy Tibbiyot EER Tizimi",
    "story": "Kasalxona bo'limlari (Department), shifokorlar (Doctor) va bemorlar (Patient) munosabatini to'liq ifodalang.",
    "taskUz": "Model the multi-entity diagram for 'Department', 'Doctor', 'Patient', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Department",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Doctor",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Patient",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Department",
          "pk": "id1"
        },
        {
          "name": "Doctor",
          "pk": "id2"
        },
        {
          "name": "Patient",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Department' (1..1) to 'Doctor' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Department' (1..1) and 'Doctor' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Department', 'Doctor', 'Patient', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 138,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Farrux Qodirov",
    "clientRole": "Aviatsiya Xavfsizligi Head",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Uzbekistan Airways' Aviatashuvlar EER Bosh Sxemasi",
    "story": "Samolyot (Aircraft), parvoz (Flight) va yo'lovchilar chiptasi (Ticket) zanjirini quring.",
    "taskUz": "Model the multi-entity diagram for 'Aircraft', 'Flight', 'Ticket', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Aircraft",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Flight",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Ticket",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
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
          "pk": "id1"
        },
        {
          "name": "Flight",
          "pk": "id2"
        },
        {
          "name": "Ticket",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Aircraft' (1..1) to 'Flight' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Aircraft' (1..1) and 'Flight' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Aircraft', 'Flight', 'Ticket', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 139,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Temur Aliyev",
    "clientRole": "Uzum Logistika Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Uzum Market' E-tijorat & Logistika EER Modeli",
    "story": "Buyurtma (Order), xaridor (Customer) va yetkazib berish kuryeri (Courier) aloqalarini chizing.",
    "taskUz": "Model the multi-entity diagram for 'Customer', 'Order', 'Courier', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Customer",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Order",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Courier",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Customer",
          "pk": "id1"
        },
        {
          "name": "Order",
          "pk": "id2"
        },
        {
          "name": "Courier",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Customer' (1..1) to 'Order' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Customer' (1..1) and 'Order' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Customer', 'Order', 'Courier', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 140,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Prof. Jahongir To'rayev",
    "clientRole": "O'quv Boshqarmasi Prorektori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'University ERP' University Management EER Tizimi",
    "story": "Fakultet (Faculty), o'qituvchi (Lecturer) va fan (Course) o'rtasidagi munosabatlarni aniq quring.",
    "taskUz": "Model the multi-entity diagram for 'Faculty', 'Lecturer', 'Course', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Lecturer",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Course",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "pk": "id1"
        },
        {
          "name": "Lecturer",
          "pk": "id2"
        },
        {
          "name": "Course",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Faculty' (1..1) to 'Lecturer' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Faculty' (1..1) and 'Lecturer' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Faculty', 'Lecturer', 'Course', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 141,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Nargiza Sodiqova",
    "clientRole": "Bosh Mehmonxona Boshqaruvchisi",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Tashkent City Hotel' Mehmonxona Majmuasi EER",
    "story": "Mehmonxona (Hotel), xona (Room) va bronlash (Reservation) modelini to'liq chizib bering.",
    "taskUz": "Model the multi-entity diagram for 'Hotel', 'Room', 'Reservation', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Room",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Reservation",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "pk": "id1"
        },
        {
          "name": "Room",
          "pk": "id2"
        },
        {
          "name": "Reservation",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Hotel' (1..1) to 'Room' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Hotel' (1..1) and 'Room' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Hotel', 'Room', 'Reservation', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 142,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Ibrohim Rustamov",
    "clientRole": "Bosh Texnolog",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Texnopark' Sanoat Ishlab Chiqarish EER Arxitekturasi",
    "story": "Zavod (Plant), ishlab chiqarish liniyasi (Line) va mahsulot (Product) munosabatini yarating.",
    "taskUz": "Model the multi-entity diagram for 'Plant', 'Line', 'Product', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Plant",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Line",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Product",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Plant",
          "pk": "id1"
        },
        {
          "name": "Line",
          "pk": "id2"
        },
        {
          "name": "Product",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Plant' (1..1) to 'Line' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Plant' (1..1) and 'Line' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Plant', 'Line', 'Product', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 143,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Botir Rahmonov",
    "clientRole": "Ta'minot Head",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Korzinka' Supermarketlar Tarmog'i Ta'minot Zanjiri",
    "story": "Markaziy ombor (Warehouse), do'kon (Store) va tovar partiyasi (GoodsBatch) zanjirini quring.",
    "taskUz": "Model the multi-entity diagram for 'Warehouse', 'Store', 'GoodsBatch', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Store",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "GoodsBatch",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Warehouse",
          "pk": "id1"
        },
        {
          "name": "Store",
          "pk": "id2"
        },
        {
          "name": "GoodsBatch",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Warehouse' (1..1) to 'Store' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Warehouse' (1..1) and 'Store' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Warehouse', 'Store', 'GoodsBatch', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 144,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Sardor Yusupov",
    "clientRole": "Fintex Xavfsizlik Arxitektori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Payme' To'lov Tizimi Kliring EER Tizimi",
    "story": "Hamyon (Wallet), tranzaksiya (PaymentTx) va savdo nuqtasi (Merchant) arxitekturasini chizing.",
    "taskUz": "Model the multi-entity diagram for 'Merchant', 'PaymentTx', 'Wallet', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Merchant",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "PaymentTx",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Wallet",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Merchant",
          "pk": "id1"
        },
        {
          "name": "PaymentTx",
          "pk": "id2"
        },
        {
          "name": "Wallet",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Merchant' (1..1) to 'PaymentTx' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Merchant' (1..1) and 'PaymentTx' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Merchant', 'PaymentTx', 'Wallet', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 145,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Farhod Ibragimov",
    "clientRole": "IT Park Bosh Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'IT Park Uzbekistan' Rezidentlar va Akseleratsiya EER",
    "story": "Akselerator (Accelerator), startap (Startup) va mentor (Mentor) o'rtasidagi aloqalarni birlashtiring.",
    "taskUz": "Model the multi-entity diagram for 'Accelerator', 'Startup', 'Mentor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Accelerator",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Startup",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Mentor",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Accelerator",
          "pk": "id1"
        },
        {
          "name": "Startup",
          "pk": "id2"
        },
        {
          "name": "Mentor",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Accelerator' (1..1) to 'Startup' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Accelerator' (1..1) and 'Startup' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Accelerator', 'Startup', 'Mentor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 146,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Otabek Qosimov",
    "clientRole": "Magistral Dispetcheri",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'O'zbekiston Temir Yo'llari' Ekspress Chipta Tizimi",
    "story": "Poyezd (Train), vagon (Carriage) va chipta (Ticket) zanjirini chizing.",
    "taskUz": "Model the multi-entity diagram for 'Train', 'Carriage', 'Ticket', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Train",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Carriage",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Ticket",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Train",
          "pk": "id1"
        },
        {
          "name": "Carriage",
          "pk": "id2"
        },
        {
          "name": "Ticket",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Train' (1..1) to 'Carriage' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Train' (1..1) and 'Carriage' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Train', 'Carriage', 'Ticket', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 147,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Mansur Zokirov",
    "clientRole": "Klaster Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'UzAuto Motors' Avtomobil Yig'uv Klasteri EER",
    "story": "Model (CarModel), korpus yig'ish sexi (BodyShop) va avtomobil nusxasi (CarUnit) ni bog'lang.",
    "taskUz": "Model the multi-entity diagram for 'CarModel', 'BodyShop', 'CarUnit', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CarModel",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "BodyShop",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "CarUnit",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CarModel",
          "pk": "id1"
        },
        {
          "name": "BodyShop",
          "pk": "id2"
        },
        {
          "name": "CarUnit",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'CarModel' (1..1) to 'BodyShop' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'CarModel' (1..1) and 'BodyShop' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'CarModel', 'BodyShop', 'CarUnit', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 148,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Madina Hakimova",
    "clientRole": "Xolding Bosh Aktuariysi",
    "clientAvatar": "ceo",
    "title": "10-Qavat: Sug'urta Xoldingi Integrallashgan EER Sxemasi",
    "story": "Mijoz (Client), polis (Policy) va sug'urta agenti (Agent) bog'liqligini to'liq ko'rsating.",
    "taskUz": "Model the multi-entity diagram for 'Client', 'Policy', 'Agent', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Client",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Policy",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Agent",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Client",
          "pk": "id1"
        },
        {
          "name": "Policy",
          "pk": "id2"
        },
        {
          "name": "Agent",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Client' (1..1) to 'Policy' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Client' (1..1) and 'Policy' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Client', 'Policy', 'Agent', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 149,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • Master EER",
    "clientName": "Rustam Mahmudov",
    "clientRole": "GNP Nazorati Head",
    "clientAvatar": "ceo",
    "title": "10-Qavat: Farmatsevtika Holdingi Xalqaro Ta'minot EER Tizimi",
    "story": "Ishlab chiqaruvchi (PharmaCorp), dori (Medicine) va distribyutor (Distributor) munosabatini chizing.",
    "taskUz": "Model the multi-entity diagram for 'PharmaCorp', 'Medicine', 'Distributor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PharmaCorp",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Medicine",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Distributor",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PharmaCorp",
          "pk": "id1"
        },
        {
          "name": "Medicine",
          "pk": "id2"
        },
        {
          "name": "Distributor",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'PharmaCorp' (1..1) to 'Medicine' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'PharmaCorp' (1..1) and 'Medicine' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'PharmaCorp', 'Medicine', 'Distributor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  },
  {
    "id": 150,
    "sector": 10,
    "floor": 10,
    "difficulty": "Floor 10 • OLIY BOSS (Professor Atlas)",
    "clientName": "Professor Atlas",
    "clientRole": "Bosh Hakam & University VIVA Imtihonchisi",
    "clientAvatar": "atlas",
    "title": "10-Qavat OLIY BOSSI: University & Westminster University Enterprise Master EER",
    "story": "Tabriklayman, Bosh Me'mor! Siz 150-savol — Oliy Me'moriy Bossga yetib keldingiz! Butun universitet ekotizimini: Fakultet (Faculty), Kafedra (Department), Professor (Professor) va Talaba (Student) ning to'liq ierarxik va binar aloqalarini eng mukammal darajada chizib bering!",
    "taskUz": "Model the multi-entity diagram for 'Faculty', 'Department', 'Professor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "x": 80,
          "y": 150,
          "attributes": [
            {
              "name": "id1",
              "isPK": true
            },
            {
              "name": "name"
            }
          ]
        },
        {
          "name": "Department",
          "x": 320,
          "y": 150,
          "attributes": [
            {
              "name": "id2",
              "isPK": true
            },
            {
              "name": "title"
            }
          ]
        },
        {
          "name": "Professor",
          "x": 560,
          "y": 150,
          "attributes": [
            {
              "name": "id3",
              "isPK": true
            },
            {
              "name": "code"
            }
          ]
        }
      ],
      "relationships": []
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Faculty",
          "pk": "id1"
        },
        {
          "name": "Department",
          "pk": "id2"
        },
        {
          "name": "Professor",
          "pk": "id3"
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
          "isDirect": true,
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
          "isDirect": true,
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
          "isDirect": true,
          "role1": "",
          "role2": ""
        }
      ]
    },
    "hint": "Connect 'Faculty' (1..1) to 'Department' (1..*) and ensure Primary Keys {PK} are set.",
    "explanation": "Relationship between 'Faculty' (1..1) and 'Department' (1..*) verified and approved.",
    "task": "Model the multi-entity diagram for 'Faculty', 'Department', 'Professor', assign primary keys {PK}, and connect them with the required multiplicity constraints.",
    "isWeek2": true
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.QUESTIONS_101_150;
}
