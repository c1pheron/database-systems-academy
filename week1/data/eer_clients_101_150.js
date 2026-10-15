var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);

_scope.EER_CLIENTS_101_150 = [
  {
    "id": 101,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #101",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "To'lov Usullari: Naqd va Karta ({Mandatory, Or})",
    "story": "'PaymentMethod' superklassi ostida 'CashPayment' va 'CardPayment' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "'PaymentMethod' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **PaymentMethod** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'PaymentMethod' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'PaymentMethod' superklassi va uning subklasslarini ('CashPayment', 'CardPayment') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 102,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #102",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "Soliq To'lovchilar: Rezident va Norezident ({Mandatory, Or})",
    "story": "'TaxPayer' superklassi ostida 'Resident' va 'NonResident' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "'TaxPayer' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **TaxPayer** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'TaxPayer' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'TaxPayer' superklassi va uning subklasslarini ('Resident', 'NonResident') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 103,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #103",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "Avtomobil Dvigatellari: Benzin va Elektr ({Mandatory, Or})",
    "story": "'Engine' superklassi ostida 'PetrolEngine' va 'ElectricEngine' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "'Engine' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Engine** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Engine' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Engine' superklassi va uning subklasslarini ('PetrolEngine', 'ElectricEngine') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 104,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #104",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "Mehmonxona Xonalari: Standart va Lyuks ({Mandatory, Or})",
    "story": "'HotelRoom' superklassi ostida 'StandardRoom' va 'DeluxeRoom' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "'HotelRoom' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **HotelRoom** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'HotelRoom' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'HotelRoom' superklassi va uning subklasslarini ('StandardRoom', 'DeluxeRoom') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 105,
    "sector": 7,
    "floor": 7,
    "difficulty": "7-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #105",
    "clientRole": "EER Mutaxassisi",
    "clientAvatar": "architect",
    "title": "7-Qavat Grand Boss: Aeroport Xodimlari ({Mandatory, Or})",
    "story": "'AirportStaff' superklassi ostida 'GroundCrew' va 'FlightCrew' kesishmaydigan subklasslari joylashgan ({Mandatory, Or}).",
    "taskUz": "'AirportStaff' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **AirportStaff** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'AirportStaff' ostidagi '{Mandatory, Or}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'AirportStaff' superklassi va uning subklasslarini ('GroundCrew', 'FlightCrew') doskada chizing hamda '{Mandatory, Or}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 106,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #106",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Detal Ishlab Chiqarish va Xarid: {Mandatory, And}",
    "story": "'Part' superklassi ostida 'ManufacturedPart' va 'PurchasedPart' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Mandatory, And}'.",
    "taskUz": "'Part' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Part** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Part' ostidagi '{Mandatory, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Part' superklassi va uning subklasslarini ('ManufacturedPart', 'PurchasedPart') doskada chizing hamda '{Mandatory, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 107,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #107",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Universitet Xodimi va Talaba Kesishuvi: {Optional, And}",
    "story": "'Person' superklassi ostida 'StaffMember' va 'StudentMember' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'Person' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Person** (Birlamchi kalit: `id`): `id {PK}`",
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
        "constraint": "{Optional, And}",
        "subclasses": [
          "StaffMember",
          "StudentMember"
        ]
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Person' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Person' superklassi va uning subklasslarini ('StaffMember', 'StudentMember') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 108,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #108",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Muallif va Tarjimon Kesishuvi: {Optional, And}",
    "story": "'Writer' superklassi ostida 'Author' va 'Translator' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'Writer' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Writer** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Writer' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Writer' superklassi va uning subklasslarini ('Author', 'Translator') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 109,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #109",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Dastur Foydalanuvchisi: Xaridor va Sotuvchi ({Mandatory, And})",
    "story": "'PlatformUser' superklassi ostida 'Buyer' va 'Seller' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Mandatory, And}'.",
    "taskUz": "'PlatformUser' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **PlatformUser** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'PlatformUser' ostidagi '{Mandatory, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'PlatformUser' superklassi va uning subklasslarini ('Buyer', 'Seller') doskada chizing hamda '{Mandatory, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 110,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #110",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Avtomobil Ishlab Chiqaruvchi va Sotuvchi: {Optional, And}",
    "story": "'AutoCompany' superklassi ostida 'Manufacturer' va 'Dealer' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'AutoCompany' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **AutoCompany** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'AutoCompany' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'AutoCompany' superklassi va uning subklasslarini ('Manufacturer', 'Dealer') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 111,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #111",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Sportchi va Murabbiy Kesishuvi: {Optional, And}",
    "story": "'Athlete' superklassi ostida 'Player' va 'Coach' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'Athlete' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Athlete** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Athlete' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Athlete' superklassi va uning subklasslarini ('Player', 'Coach') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 112,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #112",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Shifoxona Xodimi: Vrach va O'qituvchi ({Optional, And})",
    "story": "'HospitalStaff' superklassi ostida 'Doctor' va 'Lecturer' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'HospitalStaff' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **HospitalStaff** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'HospitalStaff' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'HospitalStaff' superklassi va uning subklasslarini ('Doctor', 'Lecturer') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 113,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #113",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Kompaniya Filiali: Savdo va Servis Markazi ({Mandatory, And})",
    "story": "'Branch' superklassi ostida 'SalesOffice' va 'ServiceCenter' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Mandatory, And}'.",
    "taskUz": "'Branch' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Branch' ostidagi '{Mandatory, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Branch' superklassi va uning subklasslarini ('SalesOffice', 'ServiceCenter') doskada chizing hamda '{Mandatory, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 114,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #114",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Musiqachi: Bastakor va Ijrochi ({Optional, And})",
    "story": "'Musician' superklassi ostida 'Composer' va 'Performer' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'Musician' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Musician** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Musician' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Musician' superklassi va uning subklasslarini ('Composer', 'Performer') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 115,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #115",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "IT Mutaxassis: Dasturchi va DevOps ({Optional, And})",
    "story": "'TechStaff' superklassi ostida 'Coder' va 'DevOps' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'TechStaff' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **TechStaff** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'TechStaff' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'TechStaff' superklassi va uning subklasslarini ('Coder', 'DevOps') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 116,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #116",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Bino: Ofis va Turarjoy Majmuasi ({Mandatory, And})",
    "story": "'Building' superklassi ostida 'OfficeSpace' va 'ApartmentSpace' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Mandatory, And}'.",
    "taskUz": "'Building' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Building** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Building' ostidagi '{Mandatory, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Building' superklassi va uning subklasslarini ('OfficeSpace', 'ApartmentSpace') doskada chizing hamda '{Mandatory, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 117,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #117",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Kredit Karta Egasi: Debet va Kredit Funksiyasi ({Mandatory, And})",
    "story": "'CardHolder' superklassi ostida 'DebitCard' va 'CreditCard' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Mandatory, And}'.",
    "taskUz": "'CardHolder' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **CardHolder** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'CardHolder' ostidagi '{Mandatory, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'CardHolder' superklassi va uning subklasslarini ('DebitCard', 'CreditCard') doskada chizing hamda '{Mandatory, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 118,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #118",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Restoran Xodimi: Oshpaz va Ma'mur ({Optional, And})",
    "story": "'RestStaff' superklassi ostida 'Cook' va 'Manager' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'RestStaff' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **RestStaff** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'RestStaff' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'RestStaff' superklassi va uning subklasslarini ('Cook', 'Manager') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 119,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #119",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "Ilmiy Xodim: Tadqiqotchi va Ekspert ({Optional, And})",
    "story": "'Scientist' superklassi ostida 'Researcher' va 'Expert' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'Scientist' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Scientist** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'Scientist' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'Scientist' superklassi va uning subklasslarini ('Researcher', 'Expert') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 120,
    "sector": 8,
    "floor": 8,
    "difficulty": "8-Qavat • Ekspert",
    "clientName": "Biznes Hamkor #120",
    "clientRole": "EER Overlapping Arxitektori",
    "clientAvatar": "architect",
    "title": "8-Qavat Bossi: Aviatsiya Xodimi (Uchuvchi va Instruktor {Optional, And})",
    "story": "'AeroStaff' superklassi ostida 'Pilot' va 'FlightInstructor' bir vaqtning o'zida amal qilishi mumkin bo'lgan kesishuvchi subklasslar mavjud. Qoida: '{Optional, And}'.",
    "taskUz": "'AeroStaff' va uning ostidagi subklasslar ierarxiyasini tahlil qiling. Mijoz talabidagi ixtisoslashuv turini (kesishmaydigan yoki kesishuvchi) hamda to'liqlik cheklovini aniqlab, EER diagrammani to'g'ri shakllantiring.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **AeroStaff** (Birlamchi kalit: `id`): `id {PK}`",
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
      "subclasses": [],
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
      }
    },
    "hint": "Bitta ob'ekt bir vaqtning o'zida bir nechta subklassga tegishli bo'lishi mumkinmi (And) yoki qat'iy bittasigami (Or)? Har bir ob'ekt subklassga kirishi shartmi (Mandatory) yoki ixtiyoriymi (Optional)?",
    "explanation": "'AeroStaff' ostidagi '{Optional, And}' ixtisoslashuv ierarxiyasi to'g'ri va xatosiz o'rnatildi.",
    "task": "'AeroStaff' superklassi va uning subklasslarini ('Pilot', 'FlightInstructor') doskada chizing hamda '{Optional, And}' ixtisoslashuv cheklovini o'rnating."
  },
  {
    "id": 121,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #121",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Bo'lim, Filial va Xodim: Fan Trap Bartaraf Etish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 122,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #122",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Mulk, Filial va Xodim: Chasm Trap Tuzatish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Property** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Property` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Property' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 123,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #123",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Fakultet, Kafedra va O'qituvchi: Fan Trap Hal Qilish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 124,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #124",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Loyiha, Bo'lim va Dasturchi: Chasm Trap Bartaraf Etish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Property** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Property` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Property' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 125,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #125",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Zavod, Tsex va Ishchi: Fan Trap Tuzatish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 126,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #126",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Kasalxona, Bo'lim va Palata: Chasm Trap Hal Qilish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Property** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Property` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Property' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 127,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #127",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Bank, Filial va Kassir: Fan Trap Bartaraf Etish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 128,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #128",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Kompaniya, Shartnoma va Mijoz: Chasm Trap Tuzatish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Property** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Property` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Property' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 129,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #129",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Do'kon, Ombor va Yukchi: Fan Trap Hal Qilish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 130,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #130",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Universitet, Guruh va Talaba: Chasm Trap Bartaraf Etish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Property** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Property` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Property' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 131,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #131",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Nashriyot, Jurnal va Maqola: Fan Trap Tuzatish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 132,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #132",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Klinika, Shifokor va Retsept: Chasm Trap Hal Qilish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Property** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Property` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Property' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 133,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #133",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Holding, Korxona va Boshqaruvchi: Fan Trap Bartaraf Etish",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 134,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #134",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "Aviakompaniya, Samolyot va Reys: Chasm Trap Tuzatish",
    "story": "Tizimda Chasm Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Branch' -> 'Staff' va 'Staff' -> 'Property'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Property** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Property` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Property",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Property' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 135,
    "sector": 9,
    "floor": 9,
    "difficulty": "9-Qavat • Tuzoqlar Tahlili",
    "clientName": "Biznes Hamkor #135",
    "clientRole": "Ma'lumotlar Bazasi Audit Xizmati",
    "clientAvatar": "auditor",
    "title": "9-Qavat Bossi: Murakkab Fan va Chasm Trap Korporativ Qayta Loyihalash",
    "story": "Tizimda Fan Trap xatosi aniqlangan! Bog'lanishlar ketma-ketligi buzilganligi tufayli mantiqiy chalkashlik yuzaga kelgan. To'g'ri arxitektura: 'Division' -> 'Branch' va 'Branch' -> 'Staff'.",
    "taskUz": "Ushbu biznes modelidagi yashirin aloqa tuzog'ini (Fan Trap yoki Chasm Trap) aniqlang. Noaniqlikni bartaraf qilish uchun entitiylar orasidagi noto'g'ri zanjirni uzib, to'g'ri mantiqiy yo'nalish bo'ylab bog'lang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Division** (Birlamchi kalit: `id1`): `id1 {PK}`\n• **Branch** (Birlamchi kalit: `id2`): `id2 {PK}`\n• **Staff** (Birlamchi kalit: `id3`): `id3 {PK}`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Division` (**1..1**) ↔ `Branch` (**1..***)\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)",
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
          "entity1": "Division",
          "entity2": "Branch",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Fan Trap 1:* aloqalar bitta umumiy markazdan tarmoqlanganda paydo bo'ladi. Natijada chetdagi 2 entitiy bir-biriga bog'lanmay qoladi. Zanjirni qayta ko'rib chiqing.",
    "explanation": "'Division' (1..1) va 'Branch' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Division', 'Branch', 'Staff' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 136,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Bobur Rahimov",
    "clientRole": "Bank IT Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Orient Bank' Korporativ EER Master Arxitekturasi",
    "story": "Bank filiallari (Branch), xodimlari (Staff) va hisob raqamlari (Account) o'rtasidagi to'liq arxitekturani chizing.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Branch** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Staff** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Account** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Branch` (**1..1**) ↔ `Staff` (**1..***)\n• `Staff` (**1..1**) ↔ `Account` (**1..***)",
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
          "entity1": "Branch",
          "entity2": "Staff",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Staff",
          "entity2": "Account",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Branch' (1..1) va 'Staff' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Branch', 'Staff', 'Account' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 137,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Dr. Nilufar Mirzayeva",
    "clientRole": "Tibbiyot Markazi Bosh Vrachi",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Akfa Medline' Markaziy Tibbiyot EER Tizimi",
    "story": "Kasalxona bo'limlari (Department), shifokorlar (Doctor) va bemorlar (Patient) munosabatini to'liq ifodalang.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Department** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Doctor** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Patient** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Department` (**1..1**) ↔ `Doctor` (**1..***)\n• `Doctor` (**1..1**) ↔ `Patient` (**1..***)",
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
          "entity1": "Department",
          "entity2": "Doctor",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Doctor",
          "entity2": "Patient",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Department' (1..1) va 'Doctor' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Department', 'Doctor', 'Patient' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 138,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Farrux Qodirov",
    "clientRole": "Aviatsiya Xavfsizligi Head",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Uzbekistan Airways' Aviatashuvlar EER Bosh Sxemasi",
    "story": "Samolyot (Aircraft), parvoz (Flight) va yo'lovchilar chiptasi (Ticket) zanjirini quring.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Aircraft** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Flight** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Ticket** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Aircraft` (**1..1**) ↔ `Flight` (**1..***)\n• `Flight` (**1..1**) ↔ `Ticket` (**1..***)",
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
          "entity1": "Aircraft",
          "entity2": "Flight",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Flight",
          "entity2": "Ticket",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Aircraft' (1..1) va 'Flight' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Aircraft', 'Flight', 'Ticket' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 139,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Temur Aliyev",
    "clientRole": "Uzum Logistika Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Uzum Market' E-tijorat & Logistika EER Modeli",
    "story": "Buyurtma (Order), xaridor (Customer) va yetkazib berish kuryeri (Courier) aloqalarini chizing.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Customer** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Order** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Courier** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Customer` (**1..1**) ↔ `Order` (**1..***)\n• `Order` (**1..1**) ↔ `Courier` (**1..***)",
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
          "entity1": "Customer",
          "entity2": "Order",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Order",
          "entity2": "Courier",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Customer' (1..1) va 'Order' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Customer', 'Order', 'Courier' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 140,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Prof. Jahongir To'rayev",
    "clientRole": "O'quv Boshqarmasi Prorektori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'University ERP' Universitet Boshqaruv Tizimi EER Tizimi",
    "story": "Fakultet (Faculty), o'qituvchi (Lecturer) va fan (Course) o'rtasidagi munosabatlarni aniq quring.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Faculty** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Lecturer** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Course** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Faculty` (**1..1**) ↔ `Lecturer` (**1..***)\n• `Lecturer` (**1..1**) ↔ `Course` (**1..***)",
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
          "entity1": "Faculty",
          "entity2": "Lecturer",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Lecturer",
          "entity2": "Course",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Faculty' (1..1) va 'Lecturer' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Faculty', 'Lecturer', 'Course' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 141,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Nargiza Sodiqova",
    "clientRole": "Bosh Mehmonxona Boshqaruvchisi",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Tashkent City Hotel' Mehmonxona Majmuasi EER",
    "story": "Mehmonxona (Hotel), xona (Room) va bronlash (Reservation) modelini to'liq chizib bering.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Hotel** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Room** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Reservation** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Hotel` (**1..1**) ↔ `Room` (**1..***)\n• `Room` (**1..1**) ↔ `Reservation` (**1..***)",
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
          "entity1": "Hotel",
          "entity2": "Room",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Room",
          "entity2": "Reservation",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Hotel' (1..1) va 'Room' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Hotel', 'Room', 'Reservation' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 142,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Ibrohim Rustamov",
    "clientRole": "Bosh Texnolog",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Texnopark' Sanoat Ishlab Chiqarish EER Arxitekturasi",
    "story": "Zavod (Plant), ishlab chiqarish liniyasi (Line) va mahsulot (Product) munosabatini yarating.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Plant** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Line** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Product** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Plant` (**1..1**) ↔ `Line` (**1..***)\n• `Line` (**1..1**) ↔ `Product` (**1..***)",
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
          "entity1": "Plant",
          "entity2": "Line",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Line",
          "entity2": "Product",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Plant' (1..1) va 'Line' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Plant', 'Line', 'Product' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 143,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Botir Rahmonov",
    "clientRole": "Ta'minot Head",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Korzinka' Supermarketlar Tarmog'i Ta'minot Zanjiri",
    "story": "Markaziy ombor (Warehouse), do'kon (Store) va tovar partiyasi (GoodsBatch) zanjirini quring.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Warehouse** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Store** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **GoodsBatch** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Warehouse` (**1..1**) ↔ `Store` (**1..***)\n• `Store` (**1..1**) ↔ `GoodsBatch` (**1..***)",
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
          "entity1": "Warehouse",
          "entity2": "Store",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Store",
          "entity2": "GoodsBatch",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Warehouse' (1..1) va 'Store' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Warehouse', 'Store', 'GoodsBatch' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 144,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Sardor Yusupov",
    "clientRole": "Fintex Xavfsizlik Arxitektori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'Payme' To'lov Tizimi Kliring EER Tizimi",
    "story": "Hamyon (Wallet), tranzaksiya (PaymentTx) va savdo nuqtasi (Merchant) arxitekturasini chizing.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Merchant** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **PaymentTx** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Wallet** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Merchant` (**1..1**) ↔ `PaymentTx` (**1..***)\n• `PaymentTx` (**1..1**) ↔ `Wallet` (**1..***)",
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
          "entity1": "Merchant",
          "entity2": "PaymentTx",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "PaymentTx",
          "entity2": "Wallet",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Merchant' (1..1) va 'PaymentTx' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Merchant', 'PaymentTx', 'Wallet' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 145,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Farhod Ibragimov",
    "clientRole": "IT Park Bosh Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'IT Park Uzbekistan' Rezidentlar va Akseleratsiya EER",
    "story": "Akselerator (Accelerator), startap (Startup) va mentor (Mentor) o'rtasidagi aloqalarni birlashtiring.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Accelerator** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Startup** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Mentor** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Accelerator` (**1..1**) ↔ `Startup` (**1..***)\n• `Startup` (**1..1**) ↔ `Mentor` (**1..***)",
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
          "entity1": "Accelerator",
          "entity2": "Startup",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Startup",
          "entity2": "Mentor",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Accelerator' (1..1) va 'Startup' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Accelerator', 'Startup', 'Mentor' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 146,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Otabek Qosimov",
    "clientRole": "Magistral Dispetcheri",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'O'zbekiston Temir Yo'llari' Ekspress Chipta Tizimi",
    "story": "Poyezd (Train), vagon (Carriage) va chipta (Ticket) zanjirini chizing.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Train** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Carriage** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Ticket** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Train` (**1..1**) ↔ `Carriage` (**1..***)\n• `Carriage` (**1..1**) ↔ `Ticket` (**1..***)",
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
          "entity1": "Train",
          "entity2": "Carriage",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Carriage",
          "entity2": "Ticket",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Train' (1..1) va 'Carriage' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Train', 'Carriage', 'Ticket' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 147,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Mansur Zokirov",
    "clientRole": "Klaster Direktori",
    "clientAvatar": "ceo",
    "title": "10-Qavat: 'UzAuto Motors' Avtomobil Yig'uv Klasteri EER",
    "story": "Model (CarModel), korpus yig'ish sexi (BodyShop) va avtomobil nusxasi (CarUnit) ni bog'lang.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **CarModel** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **BodyShop** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **CarUnit** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `CarModel` (**1..1**) ↔ `BodyShop` (**1..***)\n• `BodyShop` (**1..1**) ↔ `CarUnit` (**1..***)",
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
          "entity1": "CarModel",
          "entity2": "BodyShop",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "BodyShop",
          "entity2": "CarUnit",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'CarModel' (1..1) va 'BodyShop' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'CarModel', 'BodyShop', 'CarUnit' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 148,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Madina Hakimova",
    "clientRole": "Xolding Bosh Aktuariysi",
    "clientAvatar": "ceo",
    "title": "10-Qavat: Sug'urta Xoldingi Integrallashgan EER Sxemasi",
    "story": "Mijoz (Client), polis (Policy) va sug'urta agenti (Agent) bog'liqligini to'liq ko'rsating.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Client** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Policy** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Agent** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Client` (**1..1**) ↔ `Policy` (**1..***)\n• `Policy` (**1..1**) ↔ `Agent` (**1..***)",
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
          "entity1": "Client",
          "entity2": "Policy",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Policy",
          "entity2": "Agent",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Client' (1..1) va 'Policy' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Client', 'Policy', 'Agent' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 149,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Rustam Mahmudov",
    "clientRole": "GNP Nazorati Head",
    "clientAvatar": "ceo",
    "title": "10-Qavat: Farmatsevtika Holdingi Xalqaro Ta'minot EER Tizimi",
    "story": "Ishlab chiqaruvchi (PharmaCorp), dori (Medicine) va distribyutor (Distributor) munosabatini chizing.",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **PharmaCorp** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Medicine** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Distributor** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `PharmaCorp` (**1..1**) ↔ `Medicine` (**1..***)\n• `Medicine` (**1..1**) ↔ `Distributor` (**1..***)",
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
          "entity1": "PharmaCorp",
          "entity2": "Medicine",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Medicine",
          "entity2": "Distributor",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'PharmaCorp' (1..1) va 'Medicine' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'PharmaCorp', 'Medicine', 'Distributor' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  },
  {
    "id": 150,
    "sector": 10,
    "floor": 10,
    "difficulty": "10-Qavat • Bosh Me'mor (Boss)",
    "clientName": "Professor Atlas",
    "clientRole": "Bosh Hakam & University VIVA Imtihonchisi",
    "clientAvatar": "atlas",
    "title": "10-Qavat OLIY BOSSI: University & Westminster University Enterprise Master EER",
    "story": "Tabriklayman, Bosh Me'mor! Siz 150-savol — Oliy Me'moriy Bossga yetib keldingiz! Butun universitet ekotizimini: Fakultet (Faculty), Kafedra (Department), Professor (Professor) va Talaba (Student) ning to'liq ierarxik va binar aloqalarini eng mukammal darajada chizib bering!",
    "taskUz": "Mijoz bayon qilgan ko'p tomonlama munosabatlarni tahlil qiling. Barcha entitiylar orasidagi to'g'ri aloqalarni o'rnating va har bir bog'lanish uchidagi UML multiplisitiyalarini mustaqil aniqlang.\n\n📋 **Kutilayotgan Entitiylar va Atributlar:**\n• **Faculty** (Birlamchi kalit: `id1`): `id1 {PK}`, `name`\n• **Department** (Birlamchi kalit: `id2`): `id2 {PK}`, `title`\n• **Professor** (Birlamchi kalit: `id3`): `id3 {PK}`, `code`\n🔗 **Kutilayotgan Bog'lanish (Multiplicity):**\n• `Faculty` (**1..1**) ↔ `Department` (**1..***)\n• `Department` (**1..1**) ↔ `Professor` (**1..***)",
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
          "entity1": "Faculty",
          "entity2": "Department",
          "mult1": "1..1",
          "mult2": "1..*"
        },
        {
          "entity1": "Department",
          "entity2": "Professor",
          "mult1": "1..1",
          "mult2": "1..*"
        }
      ]
    },
    "hint": "Mijoz hikoyasidagi 'kamida bitta', 'majburiy', 'ixtiyoriy' yoki 'bir nechta' so'zlariga e'tibor bering. Bular minimal (0 yoki 1) va maksimal (1 yoki *) chegaralarni belgilaydi.",
    "explanation": "'Faculty' (1..1) va 'Department' (1..*) o'rtasidagi munosabat mijoz talabi asosida to'liq qabul qilindi.",
    "task": "'Faculty', 'Department', 'Professor' entitiylarini chizing, ularning birlamchi kalitlarini belgilang va mijoz talabiga mos to'g'ri multiplisitiyalar bilan o'zaro bog'lang."
  }
];
