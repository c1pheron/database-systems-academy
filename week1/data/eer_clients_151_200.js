var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.EER_CLIENTS_151_200 = [
  {
    "id": 151,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Sardor Olimov",
    "clientRole": "Express24 Bosh Logisti",
    "clientAvatar": "mentor",
    "title": "Express24 Taom Yetkazib Berish (3 ta Entitiy)",
    "titleEn": "Express24 Food Delivery Pipeline (3 Entities)",
    "story": "Express24 tizimida restoran (Restaurant) bir nechta taom buyurtmalarini (FoodOrder) qabul qiladi. Har bir buyurtmaga aniq bitta kuryer (Courier) biriktiriladi. Kuryer esa bir vaqtning o'zida ko'pi bilan bitta faol buyurtmani yetkazadi (yoki hozircha yangi/bo'sh kuryer birorta ham buyurtmaga ega bo'lmasligi mumkin: ixtiyoriy bittalik). 'Restaurant' -> 'FoodOrder' va 'FoodOrder' -> 'Courier' munosabatlarini belgilang.",
    "storyEn": "In Express24 food delivery, a restaurant accepts multiple orders. Each order is assigned to exactly one courier. A courier carries at most one active delivery order at a time (ixtiyoriy bittalik). Connect 'Restaurant' -> 'FoodOrder' and 'FoodOrder' -> 'Courier'.",
    "instruction": "'Restaurant' -> 'FoodOrder' va 'FoodOrder' -> 'Courier' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'Restaurant' -> 'FoodOrder' and 'FoodOrder' -> 'Courier' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Restaurant",
          "isWeak": false,
          "isAssociative": false,
          "pk": "restaurantId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "restaurantId",
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
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FoodOrder",
          "isWeak": false,
          "isAssociative": false,
          "pk": "orderId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "orderId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalAmount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "orderTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Courier",
          "isWeak": false,
          "isAssociative": false,
          "pk": "courierId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "courierId",
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
              "name": "phone",
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
          "name": "Aloqa",
          "entity1": "Restaurant",
          "entity2": "FoodOrder",
          "fromEntityName": "Restaurant",
          "toEntityName": "FoodOrder",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "FoodOrder",
          "entity2": "Courier",
          "fromEntityName": "FoodOrder",
          "toEntityName": "Courier",
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
          "name": "Restaurant",
          "pk": "restaurantId",
          "isWeak": false
        },
        {
          "name": "FoodOrder",
          "pk": "orderId",
          "isWeak": false
        },
        {
          "name": "Courier",
          "pk": "courierId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Restaurant",
          "entity2": "FoodOrder",
          "fromEntityName": "Restaurant",
          "toEntityName": "FoodOrder",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "FoodOrder",
          "entity2": "Courier",
          "fromEntityName": "FoodOrder",
          "toEntityName": "Courier",
          "mult1": "0..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 152,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Firuz Allayev",
    "clientRole": "Asaxiy Bosh Muharriri",
    "clientAvatar": "mentor",
    "title": "Asaxiy Books Kitob Nashri va Savdosi (3 ta Entitiy)",
    "titleEn": "Asaxiy Publishing and Book Sales (3 Entities)",
    "story": "Nashriyot (Publisher) kamida bitta yoki ko'plab kitoblarni (Book) chop etadi. Har bir kitob savdo tizimida buyurtma qatorlariga (OrderLine) birikadi (yangi kitob hali hech qaysi buyurtmaga tushmagan bo'lishi mumkin: ixtiyoriy ko'plik). 'Publisher' -> 'Book' va 'Book' -> 'OrderLine' zanjirini loyihalang.",
    "storyEn": "A publishing house publishes one or more books. Each book appears on zero or more retail order line items. Model 'Publisher' -> 'Book' and 'Book' -> 'OrderLine'.",
    "instruction": "'Publisher' -> 'Book' va 'Book' -> 'OrderLine' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'Publisher' -> 'Book' and 'Book' -> 'OrderLine' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Publisher",
          "isWeak": false,
          "isAssociative": false,
          "pk": "publisherId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "publisherId",
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
              "name": "country",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Book",
          "isWeak": false,
          "isAssociative": false,
          "pk": "isbnCode",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "isbnCode",
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
              "name": "price",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "OrderLine",
          "isWeak": false,
          "isAssociative": false,
          "pk": "lineId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "lineId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "quantity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "subtotal",
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
          "name": "Aloqa",
          "entity1": "Publisher",
          "entity2": "Book",
          "fromEntityName": "Publisher",
          "toEntityName": "Book",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Book",
          "entity2": "OrderLine",
          "fromEntityName": "Book",
          "toEntityName": "OrderLine",
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
          "name": "Publisher",
          "pk": "publisherId",
          "isWeak": false
        },
        {
          "name": "Book",
          "pk": "isbnCode",
          "isWeak": false
        },
        {
          "name": "OrderLine",
          "pk": "lineId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Publisher",
          "entity2": "Book",
          "fromEntityName": "Publisher",
          "toEntityName": "Book",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Book",
          "entity2": "OrderLine",
          "fromEntityName": "Book",
          "toEntityName": "OrderLine",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 153,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Temur Mahmudov",
    "clientRole": "Poyezdlar Harakati Dispecheri",
    "clientAvatar": "mentor",
    "title": "O'zbekiston Temir Yo'llari Vagonlar Tizimi (3 ta Entitiy)",
    "titleEn": "Uzbekistan Railways Carriage Structure (3 Entities)",
    "story": "Har bir yo'lovchi poyezdi (PassengerTrain) tarkibida kamida bitta vagon (TrainCarriage) ulanishi shart. Har bir vagon esa kamida bitta yo'lovchi o'rindig'iga (CarriageSeat) ega bo'ladi. 'PassengerTrain' -> 'TrainCarriage' va 'TrainCarriage' -> 'CarriageSeat' aloqalarini to'g'ri multiplisitiyalar bilan bog'lang.",
    "storyEn": "Each passenger train must assemble at least one carriage. Each carriage contains at least one designated passenger seat. Configure 'PassengerTrain' -> 'TrainCarriage' and 'TrainCarriage' -> 'CarriageSeat'.",
    "instruction": "'PassengerTrain' -> 'TrainCarriage' va 'TrainCarriage' -> 'CarriageSeat' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'PassengerTrain' -> 'TrainCarriage' and 'TrainCarriage' -> 'CarriageSeat' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PassengerTrain",
          "isWeak": false,
          "isAssociative": false,
          "pk": "trainNo",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "trainNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "trainRoute",
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
          "name": "TrainCarriage",
          "isWeak": false,
          "isAssociative": false,
          "pk": "carriageId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "carriageId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "carriageType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "carNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CarriageSeat",
          "isWeak": false,
          "isAssociative": false,
          "pk": "seatId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "seatId",
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
              "name": "seatClass",
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
          "name": "Aloqa",
          "entity1": "PassengerTrain",
          "entity2": "TrainCarriage",
          "fromEntityName": "PassengerTrain",
          "toEntityName": "TrainCarriage",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "TrainCarriage",
          "entity2": "CarriageSeat",
          "fromEntityName": "TrainCarriage",
          "toEntityName": "CarriageSeat",
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
          "name": "PassengerTrain",
          "pk": "trainNo",
          "isWeak": false
        },
        {
          "name": "TrainCarriage",
          "pk": "carriageId",
          "isWeak": false
        },
        {
          "name": "CarriageSeat",
          "pk": "seatId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "PassengerTrain",
          "entity2": "TrainCarriage",
          "fromEntityName": "PassengerTrain",
          "toEntityName": "TrainCarriage",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "TrainCarriage",
          "entity2": "CarriageSeat",
          "fromEntityName": "TrainCarriage",
          "toEntityName": "CarriageSeat",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 154,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Farhod Ibragimov",
    "clientRole": "IT Park Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "IT Park Rezidentlik va Startap Loyihalari (3 ta Entitiy)",
    "titleEn": "IT Park Residency and Venture Projects (3 Entities)",
    "story": "IT Park texnoparkida kompaniyalar (ResidentCompany) rezidentlik maqomini oladi (parkda hali yangi paytda kompaniyalar bo'lmasligi yoki ko'plab rezidentlar bo'lishi mumkin: ixtiyoriy ko'plik). Har bir rezident kompaniya esa kamida bitta IT dasturiy loyihani (SoftwareProject) amalga oshirishi shart. 'ITPark' -> 'ResidentCompany' va 'ResidentCompany' -> 'SoftwareProject' aloqalarini belgilang.",
    "storyEn": "IT Park registers zero or more resident companies. Every resident company must deliver at least one approved software project. Model 'ITPark' -> 'ResidentCompany' and 'ResidentCompany' -> 'SoftwareProject'.",
    "instruction": "'ITPark' -> 'ResidentCompany' va 'ResidentCompany' -> 'SoftwareProject' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'ITPark' -> 'ResidentCompany' and 'ResidentCompany' -> 'SoftwareProject' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ITPark",
          "isWeak": false,
          "isAssociative": false,
          "pk": "parkId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "parkId",
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
              "name": "city",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ResidentCompany",
          "isWeak": false,
          "isAssociative": false,
          "pk": "taxId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "taxId",
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
              "name": "legalAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SoftwareProject",
          "isWeak": false,
          "isAssociative": false,
          "pk": "projectId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "projectId",
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
              "name": "techStack",
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
          "name": "Aloqa",
          "entity1": "ITPark",
          "entity2": "ResidentCompany",
          "fromEntityName": "ITPark",
          "toEntityName": "ResidentCompany",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "ResidentCompany",
          "entity2": "SoftwareProject",
          "fromEntityName": "ResidentCompany",
          "toEntityName": "SoftwareProject",
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
          "name": "ITPark",
          "pk": "parkId",
          "isWeak": false
        },
        {
          "name": "ResidentCompany",
          "pk": "taxId",
          "isWeak": false
        },
        {
          "name": "SoftwareProject",
          "pk": "projectId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "ITPark",
          "entity2": "ResidentCompany",
          "fromEntityName": "ITPark",
          "toEntityName": "ResidentCompany",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "ResidentCompany",
          "entity2": "SoftwareProject",
          "fromEntityName": "ResidentCompany",
          "toEntityName": "SoftwareProject",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 155,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Dr. Nodir Zokirov",
    "clientRole": "Medion Bosh Shifokori",
    "clientAvatar": "mentor",
    "title": "Medion Poliklinika Shifokor Qabuli (3 ta Entitiy)",
    "titleEn": "Medion Clinic Doctor Appointment Schedule (3 Entities)",
    "story": "Klinikada shifokor (Doctor) qabul soatlariga (Appointment) ega bo'ladi (yangi ish boshlagan shifokorda hali qabul yozuvlari bo'lmasligi mumkin: ixtiyoriy ishtirok). Har bir qabul yozuvi esa qat'iy bitta ro'yxatdan o'tgan bemorga (Patient) tegishli bo'ladi. 'Doctor' -> 'Appointment' va 'Patient' -> 'Appointment' (Fan-In bog'lanish) aloqalarini chizing.",
    "storyEn": "A doctor schedules zero or more clinic appointments. Each appointment is booked for strictly one patient. Connect 'Doctor' -> 'Appointment' and 'Patient' -> 'Appointment'.",
    "instruction": "'Doctor' -> 'Appointment' va 'Appointment' -> 'Patient' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'Doctor' -> 'Appointment' and 'Appointment' -> 'Patient' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Doctor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "licenseNo",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "licenseNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "docName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Appointment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "appId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "appId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "appDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Patient",
          "isWeak": false,
          "isAssociative": false,
          "pk": "patientPin",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "patientPin",
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
              "name": "phone",
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
          "name": "Aloqa",
          "entity1": "Doctor",
          "entity2": "Appointment",
          "fromEntityName": "Doctor",
          "toEntityName": "Appointment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Patient",
          "entity2": "Appointment",
          "fromEntityName": "Patient",
          "toEntityName": "Appointment",
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
          "name": "Doctor",
          "pk": "licenseNo",
          "isWeak": false
        },
        {
          "name": "Appointment",
          "pk": "appId",
          "isWeak": false
        },
        {
          "name": "Patient",
          "pk": "patientPin",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Doctor",
          "entity2": "Appointment",
          "fromEntityName": "Doctor",
          "toEntityName": "Appointment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Patient",
          "entity2": "Appointment",
          "fromEntityName": "Patient",
          "toEntityName": "Appointment",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 156,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Javlon Rahmonov",
    "clientRole": "Paynet Tranzaksiyalar Nazoratchisi",
    "clientAvatar": "mentor",
    "title": "Paynet Kommunal To'lov Kvitansiyalari (3 ta Entitiy)",
    "titleEn": "Paynet Utility Bill Processing (3 Entities)",
    "story": "Kommunal xizmat korxonasi (UtilityProvider) barcha abonent hisobvaraqlariga (BillingAccount) ega (kamida 1 ta). Har bir abonent hisobiga Paynet orqali 0 yoki undan ko'p to'lov kvitansiyalari (PaymentSlip) to'lanadi. 'UtilityProvider' -> 'BillingAccount' va 'BillingAccount' -> 'PaymentSlip' zanjirini yarating.",
    "storyEn": "A utility provider manages one or more billing accounts. Each account receives zero or more payment slips via Paynet. Model 'UtilityProvider' -> 'BillingAccount' and 'BillingAccount' -> 'PaymentSlip'.",
    "instruction": "'UtilityProvider' -> 'BillingAccount' va 'BillingAccount' -> 'PaymentSlip' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'UtilityProvider' -> 'BillingAccount' and 'BillingAccount' -> 'PaymentSlip' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "UtilityProvider",
          "isWeak": false,
          "isAssociative": false,
          "pk": "providerId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "providerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "serviceType",
              "isPK": false,
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
          "name": "BillingAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "accNumber",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "accNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "balance",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ownerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PaymentSlip",
          "isWeak": false,
          "isAssociative": false,
          "pk": "slipNo",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "slipNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "payAmount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "paidAt",
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
          "name": "Aloqa",
          "entity1": "UtilityProvider",
          "entity2": "BillingAccount",
          "fromEntityName": "UtilityProvider",
          "toEntityName": "BillingAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "BillingAccount",
          "entity2": "PaymentSlip",
          "fromEntityName": "BillingAccount",
          "toEntityName": "PaymentSlip",
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
          "name": "UtilityProvider",
          "pk": "providerId",
          "isWeak": false
        },
        {
          "name": "BillingAccount",
          "pk": "accNumber",
          "isWeak": false
        },
        {
          "name": "PaymentSlip",
          "pk": "slipNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "UtilityProvider",
          "entity2": "BillingAccount",
          "fromEntityName": "UtilityProvider",
          "toEntityName": "BillingAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BillingAccount",
          "entity2": "PaymentSlip",
          "fromEntityName": "BillingAccount",
          "toEntityName": "PaymentSlip",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 157,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Shavkat Qosimov",
    "clientRole": "Avtosalon Tijorat Direktori",
    "clientAvatar": "mentor",
    "title": "Avtosalon Shartnomalari va Transport (3 ta Entitiy)",
    "titleEn": "Auto Dealership Sales Pipeline (3 Entities)",
    "story": "Avtosalon (Dealership) filialida kamida 1 ta yoki ko'plab yangi avtomobillar (Automobile) sotuvga qo'yiladi. Har bir avtomobil faqat va faqat bitta oldi-sotdi shartnomasiga (SaleContract) birikishi mumkin (sotilmagan mashinada shartnoma 0 ta bo'ladi: ixtiyoriy bittalik). 'Dealership' -> 'Automobile' va 'Automobile' -> 'SaleContract' aloqalarini belgilang.",
    "storyEn": "A car dealership stocks one or more automobiles. Each automobile links to at most one sales contract upon sale (ixtiyoriy bittalik). Connect 'Dealership' -> 'Automobile' and 'Automobile' -> 'SaleContract'.",
    "instruction": "'Dealership' -> 'Automobile' va 'Automobile' -> 'SaleContract' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'Dealership' -> 'Automobile' and 'Automobile' -> 'SaleContract' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Dealership",
          "isWeak": false,
          "isAssociative": false,
          "pk": "dealerId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "dealerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "salonName",
              "isPK": false,
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
          "name": "Automobile",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vinNumber",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "vinNumber",
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
              "name": "basePrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SaleContract",
          "isWeak": false,
          "isAssociative": false,
          "pk": "contractNo",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "contractDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "finalSum",
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
          "name": "Aloqa",
          "entity1": "Dealership",
          "entity2": "Automobile",
          "fromEntityName": "Dealership",
          "toEntityName": "Automobile",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Automobile",
          "entity2": "SaleContract",
          "fromEntityName": "Automobile",
          "toEntityName": "SaleContract",
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
          "name": "Dealership",
          "pk": "dealerId",
          "isWeak": false
        },
        {
          "name": "Automobile",
          "pk": "vinNumber",
          "isWeak": false
        },
        {
          "name": "SaleContract",
          "pk": "contractNo",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Dealership",
          "entity2": "Automobile",
          "fromEntityName": "Dealership",
          "toEntityName": "Automobile",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Automobile",
          "entity2": "SaleContract",
          "fromEntityName": "Automobile",
          "toEntityName": "SaleContract",
          "mult1": "1..1",
          "mult2": "0..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 158,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Bahrom Yoqubov",
    "clientRole": "Metropoliten Bosh Muhandisi",
    "clientAvatar": "mentor",
    "title": "Toshkent Metropoliteni Turniket Tranzitlari (3 ta Entitiy)",
    "titleEn": "Tashkent Metro Turnstile Transit Logs (3 Entities)",
    "story": "Metro bekatida (MetroStation) kamida bitta kirish turniketi (Turnstile) o'rnatilgan. Har bir turniket kun davomida 0 yoki ko'plab yo'lovchilar o'tish yozuvlarini (TransitLog) ro'yxatga oladi. 'MetroStation' -> 'Turnstile' va 'Turnstile' -> 'TransitLog' munosabatlarini tuzing.",
    "storyEn": "A metro station operates at least one turnstile gate. Each turnstile records zero or more transit logs. Model 'MetroStation' -> 'Turnstile' and 'Turnstile' -> 'TransitLog'.",
    "instruction": "'MetroStation' -> 'Turnstile' va 'Turnstile' -> 'TransitLog' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'MetroStation' -> 'Turnstile' and 'Turnstile' -> 'TransitLog' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MetroStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationId",
          "x": 100,
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
        },
        {
          "name": "Turnstile",
          "isWeak": false,
          "isAssociative": false,
          "pk": "gateSerial",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "gateSerial",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gateModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gateStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TransitLog",
          "isWeak": false,
          "isAssociative": false,
          "pk": "logId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "logId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cardUid",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "scanTime",
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
          "name": "Aloqa",
          "entity1": "MetroStation",
          "entity2": "Turnstile",
          "fromEntityName": "MetroStation",
          "toEntityName": "Turnstile",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Turnstile",
          "entity2": "TransitLog",
          "fromEntityName": "Turnstile",
          "toEntityName": "TransitLog",
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
          "name": "MetroStation",
          "pk": "stationId",
          "isWeak": false
        },
        {
          "name": "Turnstile",
          "pk": "gateSerial",
          "isWeak": false
        },
        {
          "name": "TransitLog",
          "pk": "logId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "MetroStation",
          "entity2": "Turnstile",
          "fromEntityName": "MetroStation",
          "toEntityName": "Turnstile",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Turnstile",
          "entity2": "TransitLog",
          "fromEntityName": "Turnstile",
          "toEntityName": "TransitLog",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 159,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Aziza Vohidova",
    "clientRole": "WIUT Registry Ofisi",
    "clientAvatar": "mentor",
    "title": "WIUT Dars Jadvali va Auditoriyalar (3 ta Entitiy)",
    "titleEn": "WIUT Classroom Scheduling System (3 Entities)",
    "story": "Universitet ma'ruza zali (LectureHall) dars jadvali slotlariga (TimetableSlot) biriktiriladi (ixtiyoriy ko'plik slot). Har bir slot esa aniq bitta modul dars mashg'ulotiga (ModuleSession) biriktirilgan bo'lishi shart (qat'iy bittalik). 'LectureHall' -> 'TimetableSlot' va 'ModuleSession' -> 'TimetableSlot' aloqalarini belgilang.",
    "storyEn": "A lecture hall hosts zero or more timetable slots. Each timetable slot is assigned strictly one module session (qat'iy bittalik). Configure 'LectureHall' -> 'TimetableSlot' and 'ModuleSession' -> 'TimetableSlot'.",
    "instruction": "'LectureHall' -> 'TimetableSlot' va 'TimetableSlot' -> 'ModuleSession' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'LectureHall' -> 'TimetableSlot' and 'TimetableSlot' -> 'ModuleSession' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "LectureHall",
          "isWeak": false,
          "isAssociative": false,
          "pk": "roomCode",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "roomCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacity",
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
          "name": "TimetableSlot",
          "isWeak": false,
          "isAssociative": false,
          "pk": "slotId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "slotId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dayOfWeek",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "timePeriod",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ModuleSession",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sessionId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "sessionId",
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
              "name": "tutor",
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
          "name": "Aloqa",
          "entity1": "LectureHall",
          "entity2": "TimetableSlot",
          "fromEntityName": "LectureHall",
          "toEntityName": "TimetableSlot",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "ModuleSession",
          "entity2": "TimetableSlot",
          "fromEntityName": "ModuleSession",
          "toEntityName": "TimetableSlot",
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
          "name": "LectureHall",
          "pk": "roomCode",
          "isWeak": false
        },
        {
          "name": "TimetableSlot",
          "pk": "slotId",
          "isWeak": false
        },
        {
          "name": "ModuleSession",
          "pk": "sessionId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "LectureHall",
          "entity2": "TimetableSlot",
          "fromEntityName": "LectureHall",
          "toEntityName": "TimetableSlot",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "ModuleSession",
          "entity2": "TimetableSlot",
          "fromEntityName": "ModuleSession",
          "toEntityName": "TimetableSlot",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 160,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Bobur Karimov",
    "clientRole": "Cinema City Bosh Menejeri",
    "clientAvatar": "mentor",
    "title": "Kinoteatr Seanslari va Chiptalar Savdosi (3 ta Entitiy)",
    "titleEn": "Cinema Screening and Ticket Reservation (3 Entities)",
    "story": "Har bir kinofilm (Movie) namoyish uchun kamida bitta seansga (MovieSession) ega. Har bir seansga esa xaridorlar tomonidan 0 yoki ko'plab chiptalar (CinemaTicket) sotib olinadi. 'Movie' -> 'MovieSession' va 'MovieSession' -> 'CinemaTicket' bog'lanishlarini loyihalang.",
    "storyEn": "A movie must have at least one screening session. Each session sells zero or more cinema tickets. Connect 'Movie' -> 'MovieSession' and 'MovieSession' -> 'CinemaTicket'.",
    "instruction": "'Movie' -> 'MovieSession' va 'MovieSession' -> 'CinemaTicket' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'Movie' -> 'MovieSession' and 'MovieSession' -> 'CinemaTicket' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Movie",
          "isWeak": false,
          "isAssociative": false,
          "pk": "movieId",
          "x": 100,
          "y": 160,
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
              "name": "durationMin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MovieSession",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sessionId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "sessionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "screenTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hallNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CinemaTicket",
          "isWeak": false,
          "isAssociative": false,
          "pk": "ticketCode",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "ticketCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatRow",
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
          "name": "Aloqa",
          "entity1": "Movie",
          "entity2": "MovieSession",
          "fromEntityName": "Movie",
          "toEntityName": "MovieSession",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "MovieSession",
          "entity2": "CinemaTicket",
          "fromEntityName": "MovieSession",
          "toEntityName": "CinemaTicket",
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
          "name": "Movie",
          "pk": "movieId",
          "isWeak": false
        },
        {
          "name": "MovieSession",
          "pk": "sessionId",
          "isWeak": false
        },
        {
          "name": "CinemaTicket",
          "pk": "ticketCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Movie",
          "entity2": "MovieSession",
          "fromEntityName": "Movie",
          "toEntityName": "MovieSession",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "MovieSession",
          "entity2": "CinemaTicket",
          "fromEntityName": "MovieSession",
          "toEntityName": "CinemaTicket",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 161,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Nodira Karimova",
    "clientRole": "Chakana Bank Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Plastik Kartalari va PIN Konvert (3 ta Entitiy)",
    "titleEn": "Bank Card Issuance and PIN Envelope (3 Entities)",
    "story": "Mijoz (CardHolder) kamida bitta plastik kartaga (PlasticCard) ega. Xavfsizlik qoidasiga binoan, har bir yangi karta chiqarilganda unga aniq bitta yopiq maxfiy PIN konvert (PinEnvelope) biriktiriladi (yakkama-yakka bittalik qat'iy majburiy). 'CardHolder' -> 'PlasticCard' va 'PlasticCard' -> 'PinEnvelope' aloqalarini chizing.",
    "storyEn": "A card holder owns at least one payment card. Each issued card pairs with strictly one security PIN envelope (yakkama-yakka bittalik mandatory). Connect 'CardHolder' -> 'PlasticCard' and 'PlasticCard' -> 'PinEnvelope'.",
    "instruction": "'CardHolder' -> 'PlasticCard' va 'PlasticCard' -> 'PinEnvelope' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'CardHolder' -> 'PlasticCard' and 'PlasticCard' -> 'PinEnvelope' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CardHolder",
          "isWeak": false,
          "isAssociative": false,
          "pk": "clientCif",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "clientCif",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "holderName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passport",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PlasticCard",
          "isWeak": false,
          "isAssociative": false,
          "pk": "panNumber",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "panNumber",
              "isPK": true,
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
              "name": "cardType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PinEnvelope",
          "isWeak": false,
          "isAssociative": false,
          "pk": "envelopeId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "envelopeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "batchCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issuedDate",
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
          "name": "Aloqa",
          "entity1": "CardHolder",
          "entity2": "PlasticCard",
          "fromEntityName": "CardHolder",
          "toEntityName": "PlasticCard",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "PlasticCard",
          "entity2": "PinEnvelope",
          "fromEntityName": "PlasticCard",
          "toEntityName": "PinEnvelope",
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
          "name": "CardHolder",
          "pk": "clientCif",
          "isWeak": false
        },
        {
          "name": "PlasticCard",
          "pk": "panNumber",
          "isWeak": false
        },
        {
          "name": "PinEnvelope",
          "pk": "envelopeId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "CardHolder",
          "entity2": "PlasticCard",
          "fromEntityName": "CardHolder",
          "toEntityName": "PlasticCard",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "PlasticCard",
          "entity2": "PinEnvelope",
          "fromEntityName": "PlasticCard",
          "toEntityName": "PinEnvelope",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 162,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Ulug'bek Fayziyev",
    "clientRole": "O'zbekinvest Sug'urta Aktuariysi",
    "clientAvatar": "mentor",
    "title": "Sug'urta Agentligi va Da'vo Arizalari (3 ta Entitiy)",
    "titleEn": "Insurance Policies and Claim Audits (3 Entities)",
    "story": "Sug'urta agenti (InsuranceAgent) mijozlarga polislarni (InsurancePolicy) sotadi (ixtiyoriy ko'plik polis). Har bir polis bo'yicha sug'urta hodisasi ro'y berganda 0 yoki undan ko'p zararni qoplash da'volari (Claim) topshiriladi. 'InsuranceAgent' -> 'InsurancePolicy' va 'InsurancePolicy' -> 'Claim' munosabatlarini tuzing.",
    "storyEn": "An insurance agent sells zero or more policies. Each policy can accumulate zero or more claim audits over its duration. Model 'InsuranceAgent' -> 'InsurancePolicy' and 'InsurancePolicy' -> 'Claim'.",
    "instruction": "'InsuranceAgent' -> 'InsurancePolicy' va 'InsurancePolicy' -> 'Claim' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'InsuranceAgent' -> 'InsurancePolicy' and 'InsurancePolicy' -> 'Claim' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "InsuranceAgent",
          "isWeak": false,
          "isAssociative": false,
          "pk": "agentCode",
          "x": 100,
          "y": 160,
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
              "name": "branchCity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InsurancePolicy",
          "isWeak": false,
          "isAssociative": false,
          "pk": "policyNo",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true,
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
              "name": "premium",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Claim",
          "isWeak": false,
          "isAssociative": false,
          "pk": "claimId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "claimId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "incidentDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "claimAmount",
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
          "name": "Aloqa",
          "entity1": "InsuranceAgent",
          "entity2": "InsurancePolicy",
          "fromEntityName": "InsuranceAgent",
          "toEntityName": "InsurancePolicy",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "InsurancePolicy",
          "entity2": "Claim",
          "fromEntityName": "InsurancePolicy",
          "toEntityName": "Claim",
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
          "name": "InsuranceAgent",
          "pk": "agentCode",
          "isWeak": false
        },
        {
          "name": "InsurancePolicy",
          "pk": "policyNo",
          "isWeak": false
        },
        {
          "name": "Claim",
          "pk": "claimId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceAgent",
          "entity2": "InsurancePolicy",
          "fromEntityName": "InsuranceAgent",
          "toEntityName": "InsurancePolicy",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "InsurancePolicy",
          "entity2": "Claim",
          "fromEntityName": "InsurancePolicy",
          "toEntityName": "Claim",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 163,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Sanjar Alimov",
    "clientRole": "Aeroport Zamin Xizmati Rahbari",
    "clientAvatar": "mentor",
    "title": "Aviakompaniya Reyslari va Yo'lovchi Bagajlari (3 ta Entitiy)",
    "titleEn": "UzAirways Passenger Boarding and Luggage (3 Entities)",
    "story": "Reysga (Flight) kamida bitta yo'lovchi ro'yxatdan o'tishi (BoardingPass) zarur. Har bir yo'lovchi o'zi bilan 0 yoki bir nechta yuk sumkalarini (LuggageItem) ro'yxatdan o'tkazishi mumkin. 'Flight' -> 'BoardingPass' va 'BoardingPass' -> 'LuggageItem' modelini quring.",
    "storyEn": "A flight must board at least one registered passenger boarding pass. Each boarding passenger checks in zero or more luggage items. Model 'Flight' -> 'BoardingPass' and 'BoardingPass' -> 'LuggageItem'.",
    "instruction": "'Flight' -> 'BoardingPass' va 'BoardingPass' -> 'LuggageItem' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'Flight' -> 'BoardingPass' and 'BoardingPass' -> 'LuggageItem' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Flight",
          "isWeak": false,
          "isAssociative": false,
          "pk": "flightNumber",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "flightNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "origin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destination",
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
          "pk": "passId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "passId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passengerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LuggageItem",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tagNumber",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "tagNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weightKg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isFragile",
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
          "name": "Aloqa",
          "entity1": "Flight",
          "entity2": "BoardingPass",
          "fromEntityName": "Flight",
          "toEntityName": "BoardingPass",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "BoardingPass",
          "entity2": "LuggageItem",
          "fromEntityName": "BoardingPass",
          "toEntityName": "LuggageItem",
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
          "name": "Flight",
          "pk": "flightNumber",
          "isWeak": false
        },
        {
          "name": "BoardingPass",
          "pk": "passId",
          "isWeak": false
        },
        {
          "name": "LuggageItem",
          "pk": "tagNumber",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "Flight",
          "entity2": "BoardingPass",
          "fromEntityName": "Flight",
          "toEntityName": "BoardingPass",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BoardingPass",
          "entity2": "LuggageItem",
          "fromEntityName": "BoardingPass",
          "toEntityName": "LuggageItem",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 164,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Eldor Yusupov",
    "clientRole": "Sarkor Telecom Tarmoq Muhandisi",
    "clientAvatar": "mentor",
    "title": "Internet Provayder Routerni Faollashtirish (3 ta Entitiy)",
    "titleEn": "ISP Tariff Subscription and Customer Router (3 Entities)",
    "story": "Internet tarifi (InternetPlan) bo'yicha mijozlar obuna shartnomasi (Subscription) tuzadilar (ixtiyoriy ko'plik obuna). Har bir faol shartnomaga provayder tomonidan aniq 1 ta optik router qurilmasi (ClientRouter) beriladi (yakkama-yakka bittalik). 'InternetPlan' -> 'Subscription' va 'Subscription' -> 'ClientRouter' munosabatlarini belgilang.",
    "storyEn": "An internet tariff plan supports zero or more customer subscriptions. Each active subscription is issued strictly one optical router device. Connect 'InternetPlan' -> 'Subscription' and 'Subscription' -> 'ClientRouter'.",
    "instruction": "'InternetPlan' -> 'Subscription' va 'Subscription' -> 'ClientRouter' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'InternetPlan' -> 'Subscription' and 'Subscription' -> 'ClientRouter' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "InternetPlan",
          "isWeak": false,
          "isAssociative": false,
          "pk": "planCode",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "planCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "speedMbps",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "monthlyFee",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Subscription",
          "isWeak": false,
          "isAssociative": false,
          "pk": "subId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "subId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "startDate",
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
          "name": "ClientRouter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "macAddress",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "macAddress",
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
              "name": "serialNumber",
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
          "name": "Aloqa",
          "entity1": "InternetPlan",
          "entity2": "Subscription",
          "fromEntityName": "InternetPlan",
          "toEntityName": "Subscription",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Subscription",
          "entity2": "ClientRouter",
          "fromEntityName": "Subscription",
          "toEntityName": "ClientRouter",
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
          "name": "InternetPlan",
          "pk": "planCode",
          "isWeak": false
        },
        {
          "name": "Subscription",
          "pk": "subId",
          "isWeak": false
        },
        {
          "name": "ClientRouter",
          "pk": "macAddress",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "InternetPlan",
          "entity2": "Subscription",
          "fromEntityName": "InternetPlan",
          "toEntityName": "Subscription",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Subscription",
          "entity2": "ClientRouter",
          "fromEntityName": "Subscription",
          "toEntityName": "ClientRouter",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 165,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Dilorom Usmonova",
    "clientRole": "Grand Farm Bosh Provizori",
    "clientAvatar": "mentor",
    "title": "Dorixona Zaxiralari va Dori Vositalari (3 ta Entitiy)",
    "titleEn": "Pharmacy Branch Drug Inventory (3 Entities)",
    "story": "Dorixona filialida (PharmacyBranch) zaxira pozitsiyalari (DrugStock) saqlanadi (kamida 1 ta). Har bir zaxira pozitsiyasi katalogdagi aniq bitta dori vositasiga (Medicine) tegishli bo'ladi. 'PharmacyBranch' -> 'DrugStock' va 'Medicine' -> 'DrugStock' aloqalarini belgilang.",
    "storyEn": "A pharmacy branch stocks one or more inventory positions. Each inventory position references strictly one medicine catalog item. Model 'PharmacyBranch' -> 'DrugStock' and 'Medicine' -> 'DrugStock'.",
    "instruction": "'PharmacyBranch' -> 'DrugStock' va 'DrugStock' -> 'Medicine' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'PharmacyBranch' -> 'DrugStock' and 'DrugStock' -> 'Medicine' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PharmacyBranch",
          "isWeak": false,
          "isAssociative": false,
          "pk": "branchId",
          "x": 100,
          "y": 160,
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
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DrugStock",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stockId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "stockId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "quantity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shelfRow",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Medicine",
          "isWeak": false,
          "isAssociative": false,
          "pk": "medCode",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "medCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "genericName",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "PharmacyBranch",
          "entity2": "DrugStock",
          "fromEntityName": "PharmacyBranch",
          "toEntityName": "DrugStock",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Medicine",
          "entity2": "DrugStock",
          "fromEntityName": "Medicine",
          "toEntityName": "DrugStock",
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
          "name": "PharmacyBranch",
          "pk": "branchId",
          "isWeak": false
        },
        {
          "name": "DrugStock",
          "pk": "stockId",
          "isWeak": false
        },
        {
          "name": "Medicine",
          "pk": "medCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "PharmacyBranch",
          "entity2": "DrugStock",
          "fromEntityName": "PharmacyBranch",
          "toEntityName": "DrugStock",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Medicine",
          "entity2": "DrugStock",
          "fromEntityName": "Medicine",
          "toEntityName": "DrugStock",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 166,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Mirjalol Shodiyev",
    "clientRole": "Hyatt Regency Xavfsizlik Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Mehmonxona Qavatlari va Kalit Kartalar (3 ta Entitiy)",
    "titleEn": "Hotel Floor Layout and Access Keys (3 Entities)",
    "story": "Mehmonxona binosidagi har bir qavatda (HotelFloor) kamida bitta mehmon xonasi (GuestRoom) mavjud. Har bir xonaga esa kamida bitta yoki bir nechta elektron kalit karta (AccessCard) dasturlashtiriladi. 'HotelFloor' -> 'GuestRoom' va 'GuestRoom' -> 'AccessCard' aloqalarini quring.",
    "storyEn": "Each hotel floor contains at least one guest room. Each guest room has one or more programmed electronic access cards. Connect 'HotelFloor' -> 'GuestRoom' and 'GuestRoom' -> 'AccessCard'.",
    "instruction": "'HotelFloor' -> 'GuestRoom' va 'GuestRoom' -> 'AccessCard' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'HotelFloor' -> 'GuestRoom' and 'GuestRoom' -> 'AccessCard' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HotelFloor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "floorNo",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "floorNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorPlan",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "zoneName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "GuestRoom",
          "isWeak": false,
          "isAssociative": false,
          "pk": "roomNumber",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "roomNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dailyRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AccessCard",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cardRfid",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "cardRfid",
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
              "name": "isActive",
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
          "name": "Aloqa",
          "entity1": "HotelFloor",
          "entity2": "GuestRoom",
          "fromEntityName": "HotelFloor",
          "toEntityName": "GuestRoom",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "GuestRoom",
          "entity2": "AccessCard",
          "fromEntityName": "GuestRoom",
          "toEntityName": "AccessCard",
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
          "name": "HotelFloor",
          "pk": "floorNo",
          "isWeak": false
        },
        {
          "name": "GuestRoom",
          "pk": "roomNumber",
          "isWeak": false
        },
        {
          "name": "AccessCard",
          "pk": "cardRfid",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "HotelFloor",
          "entity2": "GuestRoom",
          "fromEntityName": "HotelFloor",
          "toEntityName": "GuestRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "GuestRoom",
          "entity2": "AccessCard",
          "fromEntityName": "GuestRoom",
          "toEntityName": "AccessCard",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 167,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Zilola Saidova",
    "clientRole": "HeadHunter O'zbekiston Bosh Maslahatchisi",
    "clientAvatar": "mentor",
    "title": "HR Ishga Qabul Qilish va Rezyumelar (3 ta Entitiy)",
    "titleEn": "HR Recruitment and Candidate Applications (3 Entities)",
    "story": "Ochiq vakansiya (JobOpening) e'lon qilinganda nomzodlar tomonidan arizalar (JobApplication) kelib tushadi (ixtiyoriy ko'plik). Har bir ariza aniq bitta nomzod (Candidate) tomonidan yuboriladi. 'JobOpening' -> 'JobApplication' va 'Candidate' -> 'JobApplication' aloqalarini to'g'ri bog'lang.",
    "storyEn": "A job opening receives zero or more applications. Each application originates from strictly one registered candidate. Model 'JobOpening' -> 'JobApplication' and 'Candidate' -> 'JobApplication'.",
    "instruction": "'JobOpening' -> 'JobApplication' va 'JobApplication' -> 'Candidate' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'JobOpening' -> 'JobApplication' and 'JobApplication' -> 'Candidate' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "JobOpening",
          "isWeak": false,
          "isAssociative": false,
          "pk": "jobId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "jobId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roleTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "salaryOffered",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "JobApplication",
          "isWeak": false,
          "isAssociative": false,
          "pk": "appCode",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "appCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "submittedAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "stageStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Candidate",
          "isWeak": false,
          "isAssociative": false,
          "pk": "candidateId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "candidateId",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "JobOpening",
          "entity2": "JobApplication",
          "fromEntityName": "JobOpening",
          "toEntityName": "JobApplication",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "Candidate",
          "entity2": "JobApplication",
          "fromEntityName": "Candidate",
          "toEntityName": "JobApplication",
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
          "name": "JobOpening",
          "pk": "jobId",
          "isWeak": false
        },
        {
          "name": "JobApplication",
          "pk": "appCode",
          "isWeak": false
        },
        {
          "name": "Candidate",
          "pk": "candidateId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "JobOpening",
          "entity2": "JobApplication",
          "fromEntityName": "JobOpening",
          "toEntityName": "JobApplication",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Candidate",
          "entity2": "JobApplication",
          "fromEntityName": "Candidate",
          "toEntityName": "JobApplication",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 168,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Mansur Jo'rayev",
    "clientRole": "Universitet Kampusi Komendanti",
    "clientAvatar": "mentor",
    "title": "Talabalar Yotoqxonasi Joylashtiruvi (3 ta Entitiy)",
    "titleEn": "Student Dormitory Room Bed Allocation (3 Entities)",
    "story": "Yotoqxona korpusida (DormBuilding) kamida bitta yotoqxona xonasi (DormRoom) bor. Har bir xonada esa kamida bitta talaba karavot o'rni (BedSpace) taqsimlanadi. 'DormBuilding' -> 'DormRoom' va 'DormRoom' -> 'BedSpace' aloqalarini chizing.",
    "storyEn": "A dormitory building contains at least one room. Each room designates at least one allocated student bed space. Connect 'DormBuilding' -> 'DormRoom' and 'DormRoom' -> 'BedSpace'.",
    "instruction": "'DormBuilding' -> 'DormRoom' va 'DormRoom' -> 'BedSpace' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'DormBuilding' -> 'DormRoom' and 'DormRoom' -> 'BedSpace' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DormBuilding",
          "isWeak": false,
          "isAssociative": false,
          "pk": "buildingCode",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "buildingCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "campusAddress",
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
          "name": "DormRoom",
          "isWeak": false,
          "isAssociative": false,
          "pk": "roomNo",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityBeds",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floor",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BedSpace",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bedId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "bedId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bedLabel",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "DormBuilding",
          "entity2": "DormRoom",
          "fromEntityName": "DormBuilding",
          "toEntityName": "DormRoom",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "DormRoom",
          "entity2": "BedSpace",
          "fromEntityName": "DormRoom",
          "toEntityName": "BedSpace",
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
          "name": "DormBuilding",
          "pk": "buildingCode",
          "isWeak": false
        },
        {
          "name": "DormRoom",
          "pk": "roomNo",
          "isWeak": false
        },
        {
          "name": "BedSpace",
          "pk": "bedId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "DormBuilding",
          "entity2": "DormRoom",
          "fromEntityName": "DormBuilding",
          "toEntityName": "DormRoom",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "DormRoom",
          "entity2": "BedSpace",
          "fromEntityName": "DormRoom",
          "toEntityName": "BedSpace",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 169,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Akbar Sharipov",
    "clientRole": "Beeline Texnik Infratuzilma Muhandisi",
    "clientAvatar": "mentor",
    "title": "Uyali Aloqa Minoralari va Transmitterlar (3 ta Entitiy)",
    "titleEn": "Cell Tower Antenna and Maintenance Checks (3 Entities)",
    "story": "Uyali aloqa minorasida (CellTower) kamida bitta antenna uzatgich (RadioTransmitter) ishlaydi. Aloqa minorasi davriy ravishda 0 yoki ko'plab texnik ko'riklardan (TowerMaintenance) o'tkaziladi. 'CellTower' -> 'RadioTransmitter' va 'CellTower' -> 'TowerMaintenance' aloqalarini belgilang.",
    "storyEn": "A cell tower houses one or more radio transmitters. The tower undergoes zero or more scheduled maintenance checks. Configure 'CellTower' -> 'RadioTransmitter' and 'CellTower' -> 'TowerMaintenance'.",
    "instruction": "'CellTower' -> 'RadioTransmitter' va 'RadioTransmitter' -> 'TowerMaintenance' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'CellTower' -> 'RadioTransmitter' and 'RadioTransmitter' -> 'TowerMaintenance' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CellTower",
          "isWeak": false,
          "isAssociative": false,
          "pk": "towerId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "towerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "altitude",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "coordinates",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RadioTransmitter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "transId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "transId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "frequencyMhz",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "powerWatt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TowerMaintenance",
          "isWeak": false,
          "isAssociative": false,
          "pk": "checkId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "checkId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "checkedDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "findings",
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
          "name": "Aloqa",
          "entity1": "CellTower",
          "entity2": "RadioTransmitter",
          "fromEntityName": "CellTower",
          "toEntityName": "RadioTransmitter",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "CellTower",
          "entity2": "TowerMaintenance",
          "fromEntityName": "CellTower",
          "toEntityName": "TowerMaintenance",
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
          "name": "CellTower",
          "pk": "towerId",
          "isWeak": false
        },
        {
          "name": "RadioTransmitter",
          "pk": "transId",
          "isWeak": false
        },
        {
          "name": "TowerMaintenance",
          "pk": "checkId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "CellTower",
          "entity2": "RadioTransmitter",
          "fromEntityName": "CellTower",
          "toEntityName": "RadioTransmitter",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CellTower",
          "entity2": "TowerMaintenance",
          "fromEntityName": "CellTower",
          "toEntityName": "TowerMaintenance",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 170,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Gulnora Karimova",
    "clientRole": "Sanitariya-Epidemiologiya Laboratoriyasi Rahbari",
    "clientAvatar": "mentor",
    "title": "Oziq-ovqat Laboratoriyasi Ekspertizasi (3 ta Entitiy)",
    "titleEn": "Food Quality Lab Sampling and Certification (3 Entities)",
    "story": "Oziq-ovqat mahsulot partiyasidan (FoodBatch) kamida bitta laboratoriya namunasi (LabSample) olinadi. Har bir olingan namuna bo'yicha aniq bitta rasmiy ekspertiza xulosasi (TestReport) tuziladi (yakkama-yakka bittalik). 'FoodBatch' -> 'LabSample' va 'LabSample' -> 'TestReport' aloqalarini belgilang.",
    "storyEn": "A food batch requires taking at least one laboratory sample. Each tested sample yields strictly one certified test report (yakkama-yakka bittalik). Model 'FoodBatch' -> 'LabSample' and 'LabSample' -> 'TestReport'.",
    "instruction": "'FoodBatch' -> 'LabSample' va 'LabSample' -> 'TestReport' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'FoodBatch' -> 'LabSample' and 'LabSample' -> 'TestReport' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FoodBatch",
          "isWeak": false,
          "isAssociative": false,
          "pk": "batchCode",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "batchCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "productName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "mfgDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LabSample",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sampleNo",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "sampleNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "takenAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sampleWeightGram",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TestReport",
          "isWeak": false,
          "isAssociative": false,
          "pk": "reportId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "reportId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "safetyConclusion",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "certDate",
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
          "name": "Aloqa",
          "entity1": "FoodBatch",
          "entity2": "LabSample",
          "fromEntityName": "FoodBatch",
          "toEntityName": "LabSample",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "LabSample",
          "entity2": "TestReport",
          "fromEntityName": "LabSample",
          "toEntityName": "TestReport",
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
          "name": "FoodBatch",
          "pk": "batchCode",
          "isWeak": false
        },
        {
          "name": "LabSample",
          "pk": "sampleNo",
          "isWeak": false
        },
        {
          "name": "TestReport",
          "pk": "reportId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "FoodBatch",
          "entity2": "LabSample",
          "fromEntityName": "FoodBatch",
          "toEntityName": "LabSample",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "LabSample",
          "entity2": "TestReport",
          "fromEntityName": "LabSample",
          "toEntityName": "TestReport",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 171,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Jamshid Yunusov",
    "clientRole": "Texnik Ko'rik Bosh Mutaxassisi",
    "clientAvatar": "mentor",
    "title": "Avtomobil Diagnostika Liniyasi (3 ta Entitiy)",
    "titleEn": "Automotive Inspection Lane and Diagnostics (3 Entities)",
    "story": "Texnik ko'rik stantsiyasida (InspectionStation) kamida bitta ko'rik yo'lagi (InspectionLane) mavjud. Har bir yo'lak kun davomida 0 yoki ko'plab avtomobillarga texnik guvohnoma (DiagnosticCertificate) beradi. 'InspectionStation' -> 'InspectionLane' va 'InspectionLane' -> 'DiagnosticCertificate' zanjirini yarating.",
    "storyEn": "A vehicle inspection station operates at least one inspection lane. Each lane issues zero or more diagnostic certificates. Connect 'InspectionStation' -> 'InspectionLane' and 'InspectionLane' -> 'DiagnosticCertificate'.",
    "instruction": "'InspectionStation' -> 'InspectionLane' va 'InspectionLane' -> 'DiagnosticCertificate' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'InspectionStation' -> 'InspectionLane' and 'InspectionLane' -> 'DiagnosticCertificate' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "InspectionStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "stationId",
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
              "name": "city",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InspectionLane",
          "isWeak": false,
          "isAssociative": false,
          "pk": "laneNumber",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "laneNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "equipmentType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "maxWeightLimit",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DiagnosticCertificate",
          "isWeak": false,
          "isAssociative": false,
          "pk": "certNumber",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "certNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issuedAt",
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
          "name": "Aloqa",
          "entity1": "InspectionStation",
          "entity2": "InspectionLane",
          "fromEntityName": "InspectionStation",
          "toEntityName": "InspectionLane",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "InspectionLane",
          "entity2": "DiagnosticCertificate",
          "fromEntityName": "InspectionLane",
          "toEntityName": "DiagnosticCertificate",
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
          "name": "InspectionStation",
          "pk": "stationId",
          "isWeak": false
        },
        {
          "name": "InspectionLane",
          "pk": "laneNumber",
          "isWeak": false
        },
        {
          "name": "DiagnosticCertificate",
          "pk": "certNumber",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "InspectionStation",
          "entity2": "InspectionLane",
          "fromEntityName": "InspectionStation",
          "toEntityName": "InspectionLane",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "InspectionLane",
          "entity2": "DiagnosticCertificate",
          "fromEntityName": "InspectionLane",
          "toEntityName": "DiagnosticCertificate",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 172,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Bekzod Shukurov",
    "clientRole": "PDP Academy O'quv Qismi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Ta'lim Markazi Kurslari va Sertifikatlar (3 ta Entitiy)",
    "titleEn": "Academy Enrollment and Graduate Certificates (3 Entities)",
    "story": "O'quv kursi (TrainingCourse) ochilganda talabalar ro'yxatdan o'tadilar (ixtiyoriy ko'plik ro'yxat). Har bir o'qish yakunlangan ro'yxat yozuvi bo'yicha talabaga ko'pi bilan bitta bitiruv sertifikati (IssuedCertificate) taqdim etiladi (ixtiyoriy bittalik). 'TrainingCourse' -> 'StudentEnrollment' va 'StudentEnrollment' -> 'IssuedCertificate' munosabatini quring.",
    "storyEn": "A training course registers zero or more student enrollments. Each completed enrollment may earn at most one graduation certificate (ixtiyoriy bittalik). Model 'TrainingCourse' -> 'StudentEnrollment' and 'StudentEnrollment' -> 'IssuedCertificate'.",
    "instruction": "'TrainingCourse' -> 'StudentEnrollment' va 'StudentEnrollment' -> 'IssuedCertificate' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'TrainingCourse' -> 'StudentEnrollment' and 'StudentEnrollment' -> 'IssuedCertificate' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TrainingCourse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "courseId",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "courseId",
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
              "name": "fee",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StudentEnrollment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "enrollmentId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "enrollmentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "enrolledDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "finalScore",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IssuedCertificate",
          "isWeak": false,
          "isAssociative": false,
          "pk": "serialCode",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "serialCode",
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
              "name": "honorLevel",
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
          "name": "Aloqa",
          "entity1": "TrainingCourse",
          "entity2": "StudentEnrollment",
          "fromEntityName": "TrainingCourse",
          "toEntityName": "StudentEnrollment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "StudentEnrollment",
          "entity2": "IssuedCertificate",
          "fromEntityName": "StudentEnrollment",
          "toEntityName": "IssuedCertificate",
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
          "name": "TrainingCourse",
          "pk": "courseId",
          "isWeak": false
        },
        {
          "name": "StudentEnrollment",
          "pk": "enrollmentId",
          "isWeak": false
        },
        {
          "name": "IssuedCertificate",
          "pk": "serialCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "TrainingCourse",
          "entity2": "StudentEnrollment",
          "fromEntityName": "TrainingCourse",
          "toEntityName": "StudentEnrollment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "StudentEnrollment",
          "entity2": "IssuedCertificate",
          "fromEntityName": "StudentEnrollment",
          "toEntityName": "IssuedCertificate",
          "mult1": "1..1",
          "mult2": "0..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 173,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Husan Mirzayev",
    "clientRole": "Hududiy Elektr Tarmoqlari Dispecheri",
    "clientAvatar": "mentor",
    "title": "Elektr Podstansiyasi va Smart Hisoblagichlar (3 ta Entitiy)",
    "titleEn": "Power Substation and Smart Meter Telemetry (3 Entities)",
    "story": "Elektr podstansiyasiga (ElectricSubstation) kamida bitta aqlli hisoblagich (SmartMeter) ulanadi. Har bir aqlli hisoblagich esa 0 yoki ko'plab oylik elektr sarfi ko'rsatkichlarini (MeterReading) markaziy serverga uzatadi. 'ElectricSubstation' -> 'SmartMeter' va 'SmartMeter' -> 'MeterReading' aloqalarini belgilang.",
    "storyEn": "A power substation connects to at least one smart meter. Each smart meter transmits zero or more periodic meter readings. Connect 'ElectricSubstation' -> 'SmartMeter' and 'SmartMeter' -> 'MeterReading'.",
    "instruction": "'ElectricSubstation' -> 'SmartMeter' va 'SmartMeter' -> 'MeterReading' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'ElectricSubstation' -> 'SmartMeter' and 'SmartMeter' -> 'MeterReading' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ElectricSubstation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "substationCode",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "substationCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "voltageKv",
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
          "name": "SmartMeter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "meterSerial",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "meterSerial",
              "isPK": true,
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
              "name": "meterModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MeterReading",
          "isWeak": false,
          "isAssociative": false,
          "pk": "readingId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "readingId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "kwhConsumed",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "loggedTime",
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
          "name": "Aloqa",
          "entity1": "ElectricSubstation",
          "entity2": "SmartMeter",
          "fromEntityName": "ElectricSubstation",
          "toEntityName": "SmartMeter",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "SmartMeter",
          "entity2": "MeterReading",
          "fromEntityName": "SmartMeter",
          "toEntityName": "MeterReading",
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
          "name": "ElectricSubstation",
          "pk": "substationCode",
          "isWeak": false
        },
        {
          "name": "SmartMeter",
          "pk": "meterSerial",
          "isWeak": false
        },
        {
          "name": "MeterReading",
          "pk": "readingId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "ElectricSubstation",
          "entity2": "SmartMeter",
          "fromEntityName": "ElectricSubstation",
          "toEntityName": "SmartMeter",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "SmartMeter",
          "entity2": "MeterReading",
          "fromEntityName": "SmartMeter",
          "toEntityName": "MeterReading",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 174,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Otabek Qodirov",
    "clientRole": "Avtobus Saroyi Harakat Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Toshshahartransxizmat Avtobus Saroyi (3 ta Entitiy)",
    "titleEn": "Public Bus Depot Fleet and Daily Run (3 Entities)",
    "story": "Shahar avtobus saroyida (BusDepot) kamida bitta shahar avtobusi (TransitBus) ro'yxatda turadi. Har bir avtobus kunlik jadval asosida 0 yoki ko'plab marshrut reyslarini (RouteRun) bajaradi. 'BusDepot' -> 'TransitBus' va 'TransitBus' -> 'RouteRun' aloqalarini belgilang.",
    "storyEn": "A municipal bus depot houses one or more transit buses. Each bus completes zero or more daily route runs. Model 'BusDepot' -> 'TransitBus' and 'TransitBus' -> 'RouteRun'.",
    "instruction": "'BusDepot' -> 'TransitBus' va 'TransitBus' -> 'RouteRun' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'BusDepot' -> 'TransitBus' and 'TransitBus' -> 'RouteRun' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BusDepot",
          "isWeak": false,
          "isAssociative": false,
          "pk": "depotNumber",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "depotNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "garageName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityBuses",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TransitBus",
          "isWeak": false,
          "isAssociative": false,
          "pk": "garageId",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "garageId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "plateNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "busModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RouteRun",
          "isWeak": false,
          "isAssociative": false,
          "pk": "runId",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "runId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "departureHour",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passengersCount",
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
          "name": "Aloqa",
          "entity1": "BusDepot",
          "entity2": "TransitBus",
          "fromEntityName": "BusDepot",
          "toEntityName": "TransitBus",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "TransitBus",
          "entity2": "RouteRun",
          "fromEntityName": "TransitBus",
          "toEntityName": "RouteRun",
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
          "name": "BusDepot",
          "pk": "depotNumber",
          "isWeak": false
        },
        {
          "name": "TransitBus",
          "pk": "garageId",
          "isWeak": false
        },
        {
          "name": "RouteRun",
          "pk": "runId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "BusDepot",
          "entity2": "TransitBus",
          "fromEntityName": "BusDepot",
          "toEntityName": "TransitBus",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "TransitBus",
          "entity2": "RouteRun",
          "fromEntityName": "TransitBus",
          "toEntityName": "RouteRun",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 175,
    "sector": 2,
    "difficulty": "2-Qavat • O'rta",
    "clientName": "Prof. Dilnoza Umarova",
    "clientRole": "Westminster Ilmiy Kengash Kotibi",
    "clientAvatar": "mentor",
    "title": "Ilmiy Jurnal va Maqolalar Nashri (3 ta Entitiy)",
    "titleEn": "Academic Journal Publications and Issues (3 Entities)",
    "story": "Ilmiy jurnalda (AcademicJournal) kamida bitta jurnal soni (JournalIssue) nashr qilinishi shart. Har bir jurnal sonida esa kamida bitta yoki bir nechta ilmiy maqolalar (ResearchArticle) chop etiladi. 'AcademicJournal' -> 'JournalIssue' va 'JournalIssue' -> 'ResearchArticle' munosabatlarini tuzing.",
    "storyEn": "An academic journal must release at least one issue. Each journal issue prints at least one peer-reviewed research article. Connect 'AcademicJournal' -> 'JournalIssue' and 'JournalIssue' -> 'ResearchArticle'.",
    "instruction": "'AcademicJournal' -> 'JournalIssue' va 'JournalIssue' -> 'ResearchArticle' o'rtasidagi aloqalarni chizing va multiplisitiya chegaralarini to'g'ri belgilang.",
    "instructionEn": "Connect 'AcademicJournal' -> 'JournalIssue' and 'JournalIssue' -> 'ResearchArticle' with precise multiplicity bounds.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AcademicJournal",
          "isWeak": false,
          "isAssociative": false,
          "pk": "issnNumber",
          "x": 100,
          "y": 160,
          "attributes": [
            {
              "name": "issnNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "journalName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "impactFactor",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "JournalIssue",
          "isWeak": false,
          "isAssociative": false,
          "pk": "issueVolume",
          "x": 440,
          "y": 160,
          "attributes": [
            {
              "name": "issueVolume",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "yearPublished",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issueNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ResearchArticle",
          "isWeak": false,
          "isAssociative": false,
          "pk": "doiCode",
          "x": 780,
          "y": 160,
          "attributes": [
            {
              "name": "doiCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "articleTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pagesCount",
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
          "name": "Aloqa",
          "entity1": "AcademicJournal",
          "entity2": "JournalIssue",
          "fromEntityName": "AcademicJournal",
          "toEntityName": "JournalIssue",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "JournalIssue",
          "entity2": "ResearchArticle",
          "fromEntityName": "JournalIssue",
          "toEntityName": "ResearchArticle",
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
          "name": "AcademicJournal",
          "pk": "issnNumber",
          "isWeak": false
        },
        {
          "name": "JournalIssue",
          "pk": "issueVolume",
          "isWeak": false
        },
        {
          "name": "ResearchArticle",
          "pk": "doiCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "AcademicJournal",
          "entity2": "JournalIssue",
          "fromEntityName": "AcademicJournal",
          "toEntityName": "JournalIssue",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "JournalIssue",
          "entity2": "ResearchArticle",
          "fromEntityName": "JournalIssue",
          "toEntityName": "ResearchArticle",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 176,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Kamoliddin Saidov",
    "clientRole": "Ipoteka Bank Depozitlar Menejeri",
    "clientAvatar": "mentor",
    "title": "Bank Depozitlari va Foiz Hisoblash (4 ta Entitiy!)",
    "titleEn": "Commercial Bank Deposit Ledger (4 Entities!)",
    "story": "Bank filialida (BranchOffice) depozit hisoblari (DepositAccount) ochiladi. Mijoz (BankCustomer) kamida bitta depozitga ega bo'lishi shart. Har bir depozit hisobvarag'i bo'yicha esa 0 yoki ko'plab oylik foizlar (MonthlyInterest) hisoblab yoziladi. 'BranchOffice' -> 'DepositAccount', 'BankCustomer' -> 'DepositAccount' va 'DepositAccount' -> 'MonthlyInterest' aloqalarini belgilang.",
    "storyEn": "A branch office hosts deposit accounts. A bank customer holds one or more deposit accounts. Each deposit earns zero or more monthly interest payments. Model BranchOffice -> DepositAccount, BankCustomer -> DepositAccount, and DepositAccount -> MonthlyInterest.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "BranchOffice",
          "isWeak": false,
          "isAssociative": false,
          "pk": "branchCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "branchCode",
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
              "name": "address",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BankCustomer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cifNumber",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "cifNumber",
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
              "name": "phone",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DepositAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "depositId",
          "x": 440,
          "y": 230,
          "attributes": [
            {
              "name": "depositId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "principal",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "interestRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MonthlyInterest",
          "isWeak": false,
          "isAssociative": false,
          "pk": "accrualId",
          "x": 800,
          "y": 230,
          "attributes": [
            {
              "name": "accrualId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "payoutDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "amount",
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
          "name": "Aloqa",
          "entity1": "BranchOffice",
          "entity2": "DepositAccount",
          "fromEntityName": "BranchOffice",
          "toEntityName": "DepositAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "BankCustomer",
          "entity2": "DepositAccount",
          "fromEntityName": "BankCustomer",
          "toEntityName": "DepositAccount",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "DepositAccount",
          "entity2": "MonthlyInterest",
          "fromEntityName": "DepositAccount",
          "toEntityName": "MonthlyInterest",
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
          "name": "BranchOffice",
          "pk": "branchCode",
          "isWeak": false
        },
        {
          "name": "BankCustomer",
          "pk": "cifNumber",
          "isWeak": false
        },
        {
          "name": "DepositAccount",
          "pk": "depositId",
          "isWeak": false
        },
        {
          "name": "MonthlyInterest",
          "pk": "accrualId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "BranchOffice",
          "entity2": "DepositAccount",
          "fromEntityName": "BranchOffice",
          "toEntityName": "DepositAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BankCustomer",
          "entity2": "DepositAccount",
          "fromEntityName": "BankCustomer",
          "toEntityName": "DepositAccount",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "DepositAccount",
          "entity2": "MonthlyInterest",
          "fromEntityName": "DepositAccount",
          "toEntityName": "MonthlyInterest",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 177,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Doniyor Ergashev",
    "clientRole": "UzAuto Motors Zavod Nazoratchisi",
    "clientAvatar": "mentor",
    "title": "UzAuto Motors Zavod Konveyeri (4 ta Entitiy!)",
    "titleEn": "UzAuto Motors Assembly & Inspection (4 Entities!)",
    "story": "Avtomobil zavodida (FactoryPlant) kamida bitta yig'uv liniyasi (AssemblyLine) mavjud. Yig'uv liniyasida 0 yoki ko'plab avtomobillar (AssembledVehicle) yig'iladi. Har bir yig'ilgan avtomobil esa qat'iy 1 ta sifat nazorati aktidan (QualityInspection) o'tadi (yakkama-yakka bittalik). 'FactoryPlant' -> 'AssemblyLine', 'AssemblyLine' -> 'AssembledVehicle' va 'AssembledVehicle' -> 'QualityInspection' modelini quring.",
    "storyEn": "A manufacturing plant operates one or more assembly lines. Lines assemble zero or more vehicles. Each vehicle undergoes strictly one quality inspection (yakkama-yakka bittalik). Model FactoryPlant -> AssemblyLine -> AssembledVehicle -> QualityInspection.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "FactoryPlant",
          "isWeak": false,
          "isAssociative": false,
          "pk": "plantId",
          "x": 80,
          "y": 120,
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
              "name": "city",
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
          "pk": "lineNo",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "lineNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityPerDay",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lineStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AssembledVehicle",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vinCode",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "vinCode",
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
              "name": "color",
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
          "pk": "inspectId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "inspectId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "inspectorName",
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
          "name": "Aloqa",
          "entity1": "FactoryPlant",
          "entity2": "AssemblyLine",
          "fromEntityName": "FactoryPlant",
          "toEntityName": "AssemblyLine",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "AssemblyLine",
          "entity2": "AssembledVehicle",
          "fromEntityName": "AssemblyLine",
          "toEntityName": "AssembledVehicle",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "AssembledVehicle",
          "entity2": "QualityInspection",
          "fromEntityName": "AssembledVehicle",
          "toEntityName": "QualityInspection",
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
          "name": "FactoryPlant",
          "pk": "plantId",
          "isWeak": false
        },
        {
          "name": "AssemblyLine",
          "pk": "lineNo",
          "isWeak": false
        },
        {
          "name": "AssembledVehicle",
          "pk": "vinCode",
          "isWeak": false
        },
        {
          "name": "QualityInspection",
          "pk": "inspectId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "FactoryPlant",
          "entity2": "AssemblyLine",
          "fromEntityName": "FactoryPlant",
          "toEntityName": "AssemblyLine",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AssemblyLine",
          "entity2": "AssembledVehicle",
          "fromEntityName": "AssemblyLine",
          "toEntityName": "AssembledVehicle",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AssembledVehicle",
          "entity2": "QualityInspection",
          "fromEntityName": "AssembledVehicle",
          "toEntityName": "QualityInspection",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 178,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Nargiza Muxtorova",
    "clientRole": "my.gov.uz Bosh Tahlilchisi",
    "clientAvatar": "mentor",
    "title": "Yagona Davlat Xizmatlari Portali (4 ta Entitiy!)",
    "titleEn": "Public Electronic Services Portal (4 Entities!)",
    "story": "Davlat organi (GovernmentAgency) kamida bitta davlat xizmatini (PublicService) taqdim etadi. Fuqaro xizmat bo'yicha ariza (CitizenRequest) topshiradi (ixtiyoriy ko'plik ariza). Har bir arizaga ko'pi bilan bitta natijaviy elektron ma'lumotnoma (ResultDocument) beriladi (ixtiyoriy bittalik). 'GovernmentAgency' -> 'PublicService', 'PublicService' -> 'CitizenRequest' va 'CitizenRequest' -> 'ResultDocument' zanjirini yarating.",
    "storyEn": "A government agency hosts at least one public service. Services receive zero or more citizen requests. Each request generates at most one output certificate document (ixtiyoriy bittalik). Connect Agency -> Service -> Request -> ResultDocument.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "GovernmentAgency",
          "isWeak": false,
          "isAssociative": false,
          "pk": "agencyCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "agencyCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ministryName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hotline",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PublicService",
          "isWeak": false,
          "isAssociative": false,
          "pk": "serviceId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "serviceId",
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
              "name": "statutoryDays",
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
          "pk": "ticketNumber",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "ticketNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "filedDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "applicantPin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ResultDocument",
          "isWeak": false,
          "isAssociative": false,
          "pk": "docNumber",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "docNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "digitalQr",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "signedAt",
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
          "name": "Aloqa",
          "entity1": "GovernmentAgency",
          "entity2": "PublicService",
          "fromEntityName": "GovernmentAgency",
          "toEntityName": "PublicService",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "PublicService",
          "entity2": "CitizenRequest",
          "fromEntityName": "PublicService",
          "toEntityName": "CitizenRequest",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "CitizenRequest",
          "entity2": "ResultDocument",
          "fromEntityName": "CitizenRequest",
          "toEntityName": "ResultDocument",
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
          "name": "GovernmentAgency",
          "pk": "agencyCode",
          "isWeak": false
        },
        {
          "name": "PublicService",
          "pk": "serviceId",
          "isWeak": false
        },
        {
          "name": "CitizenRequest",
          "pk": "ticketNumber",
          "isWeak": false
        },
        {
          "name": "ResultDocument",
          "pk": "docNumber",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "GovernmentAgency",
          "entity2": "PublicService",
          "fromEntityName": "GovernmentAgency",
          "toEntityName": "PublicService",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "PublicService",
          "entity2": "CitizenRequest",
          "fromEntityName": "PublicService",
          "toEntityName": "CitizenRequest",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CitizenRequest",
          "entity2": "ResultDocument",
          "fromEntityName": "CitizenRequest",
          "toEntityName": "ResultDocument",
          "mult1": "1..1",
          "mult2": "0..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 179,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Bobir Xolmatov",
    "clientRole": "Korzinka Logistika Menejeri",
    "clientAvatar": "mentor",
    "title": "Supermarket Tovar Ta'minoti va Omborxonasi (4 ta Entitiy!)",
    "titleEn": "Supermarket Supply Invoicing and Receiving (4 Entities!)",
    "story": "Tovar yetkazib beruvchi (SupplierVendor) kamida bitta ta'minot hisob-fakturasini (SupplyInvoice) rasmiylashtiradi. Faktura qaysi ombor sektsiyasiga (WarehouseBay) tushishi kerak bo'lsa (ixtiyoriy ko'plik faktura), o'sha yerda qabul qilinadi. Har bir fakturada esa kamida 1 ta qabul qilingan tovar (ReceivedItem) ro'yxati bo'ladi. 'SupplierVendor' -> 'SupplyInvoice', 'WarehouseBay' -> 'SupplyInvoice' va 'SupplyInvoice' -> 'ReceivedItem' aloqalarini belgilang.",
    "storyEn": "A supplier issues one or more supply invoices. A warehouse bay receives zero or more invoices. Each invoice lists one or more received items. Model Vendor -> Invoice, WarehouseBay -> Invoice, and Invoice -> ReceivedItem.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "SupplierVendor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vendorId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "vendorId",
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
              "name": "taxInn",
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
          "pk": "bayCode",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "bayCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sectionType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "maxVolume",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupplyInvoice",
          "isWeak": false,
          "isAssociative": false,
          "pk": "invoiceNumber",
          "x": 440,
          "y": 230,
          "attributes": [
            {
              "name": "invoiceNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shippedDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "grandTotal",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ReceivedItem",
          "isWeak": false,
          "isAssociative": false,
          "pk": "itemId",
          "x": 800,
          "y": 230,
          "attributes": [
            {
              "name": "itemId",
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
              "name": "quantityReceived",
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
          "name": "Aloqa",
          "entity1": "SupplierVendor",
          "entity2": "SupplyInvoice",
          "fromEntityName": "SupplierVendor",
          "toEntityName": "SupplyInvoice",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "WarehouseBay",
          "entity2": "SupplyInvoice",
          "fromEntityName": "WarehouseBay",
          "toEntityName": "SupplyInvoice",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "SupplyInvoice",
          "entity2": "ReceivedItem",
          "fromEntityName": "SupplyInvoice",
          "toEntityName": "ReceivedItem",
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
          "name": "SupplierVendor",
          "pk": "vendorId",
          "isWeak": false
        },
        {
          "name": "WarehouseBay",
          "pk": "bayCode",
          "isWeak": false
        },
        {
          "name": "SupplyInvoice",
          "pk": "invoiceNumber",
          "isWeak": false
        },
        {
          "name": "ReceivedItem",
          "pk": "itemId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "SupplierVendor",
          "entity2": "SupplyInvoice",
          "fromEntityName": "SupplierVendor",
          "toEntityName": "SupplyInvoice",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "WarehouseBay",
          "entity2": "SupplyInvoice",
          "fromEntityName": "WarehouseBay",
          "toEntityName": "SupplyInvoice",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "SupplyInvoice",
          "entity2": "ReceivedItem",
          "fromEntityName": "SupplyInvoice",
          "toEntityName": "ReceivedItem",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 180,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Botir G'ulomov",
    "clientRole": "Tashkent City Qurilish Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Turar-joy Majmuasi va Xonadonlar (4 ta Entitiy!)",
    "titleEn": "Residential Real Estate Complex & Units (4 Entities!)",
    "story": "Turar-joy majmuasi (ResidentialComplex) kamida bitta korpus binosiga (BuildingBlock) ega. Har bir bino korpusida kamida 1 ta kvartira (ApartmentUnit) joylashgan. Har bir xonadon egasi (HomeOwner) esa kamida bitta kvartiraga egalik qiladi (majburiy ko'plik). 'ResidentialComplex' -> 'BuildingBlock', 'BuildingBlock' -> 'ApartmentUnit' va 'HomeOwner' -> 'ApartmentUnit' munosabatlarini tuzing.",
    "storyEn": "A residential complex encompasses one or more building blocks. Each block houses one or more apartment units. Each registered homeowner owns one or more apartments. Model Complex -> Block -> ApartmentUnit and HomeOwner -> ApartmentUnit.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResidentialComplex",
          "isWeak": false,
          "isAssociative": false,
          "pk": "complexId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "complexId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "complexName",
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
          "name": "BuildingBlock",
          "isWeak": false,
          "isAssociative": false,
          "pk": "blockId",
          "x": 440,
          "y": 120,
          "attributes": [
            {
              "name": "blockId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "blockLetter",
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
          "name": "ApartmentUnit",
          "isWeak": false,
          "isAssociative": false,
          "pk": "aptId",
          "x": 440,
          "y": 340,
          "attributes": [
            {
              "name": "aptId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "unitNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "squareMeters",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HomeOwner",
          "isWeak": false,
          "isAssociative": false,
          "pk": "ownerPassport",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "ownerPassport",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ownerName",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "ResidentialComplex",
          "entity2": "BuildingBlock",
          "fromEntityName": "ResidentialComplex",
          "toEntityName": "BuildingBlock",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "BuildingBlock",
          "entity2": "ApartmentUnit",
          "fromEntityName": "BuildingBlock",
          "toEntityName": "ApartmentUnit",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "HomeOwner",
          "entity2": "ApartmentUnit",
          "fromEntityName": "HomeOwner",
          "toEntityName": "ApartmentUnit",
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
          "name": "ResidentialComplex",
          "pk": "complexId",
          "isWeak": false
        },
        {
          "name": "BuildingBlock",
          "pk": "blockId",
          "isWeak": false
        },
        {
          "name": "ApartmentUnit",
          "pk": "aptId",
          "isWeak": false
        },
        {
          "name": "HomeOwner",
          "pk": "ownerPassport",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "ResidentialComplex",
          "entity2": "BuildingBlock",
          "fromEntityName": "ResidentialComplex",
          "toEntityName": "BuildingBlock",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BuildingBlock",
          "entity2": "ApartmentUnit",
          "fromEntityName": "BuildingBlock",
          "toEntityName": "ApartmentUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "HomeOwner",
          "entity2": "ApartmentUnit",
          "fromEntityName": "HomeOwner",
          "toEntityName": "ApartmentUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 181,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Shohruh Ziyodov",
    "clientRole": "Tibbiyot Diagnostika Markazi Mudiri",
    "clientAvatar": "mentor",
    "title": "Klinik Diagnostika va Bio-Namunalar (4 ta Entitiy!)",
    "titleEn": "Clinical Laboratory Biospecimen Pipeline (4 Entities!)",
    "story": "Diagnostika laboratoriyasida (DiagnosticLab) laborantlar (LabTechnician) ishlaydi (kamida 1 ta). Laborant tahlil buyurtmalarini (LabOrder) qabul qiladi (ixtiyoriy ko'plik buyurtma). Har bir tahlil buyurtmasi esa kamida bitta biologik namunani (BioSample) tekshirishni talab qiladi. 'DiagnosticLab' -> 'LabTechnician', 'LabTechnician' -> 'LabOrder' va 'LabOrder' -> 'BioSample' tizimini quring.",
    "storyEn": "A diagnostic lab employs one or more technicians. A technician processes zero or more lab orders. Each lab order tests one or more biosamples. Connect Lab -> Technician -> LabOrder -> BioSample.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "DiagnosticLab",
          "isWeak": false,
          "isAssociative": false,
          "pk": "labId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "labId",
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
              "name": "accreditation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LabTechnician",
          "isWeak": false,
          "isAssociative": false,
          "pk": "techId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "techId",
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
              "name": "specialty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LabOrder",
          "isWeak": false,
          "isAssociative": false,
          "pk": "orderNumber",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "orderNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "requestDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "priorityLevel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BioSample",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sampleBarcode",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "sampleBarcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sampleType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "volumeMl",
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
          "name": "Aloqa",
          "entity1": "DiagnosticLab",
          "entity2": "LabTechnician",
          "fromEntityName": "DiagnosticLab",
          "toEntityName": "LabTechnician",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "LabTechnician",
          "entity2": "LabOrder",
          "fromEntityName": "LabTechnician",
          "toEntityName": "LabOrder",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "LabOrder",
          "entity2": "BioSample",
          "fromEntityName": "LabOrder",
          "toEntityName": "BioSample",
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
          "name": "DiagnosticLab",
          "pk": "labId",
          "isWeak": false
        },
        {
          "name": "LabTechnician",
          "pk": "techId",
          "isWeak": false
        },
        {
          "name": "LabOrder",
          "pk": "orderNumber",
          "isWeak": false
        },
        {
          "name": "BioSample",
          "pk": "sampleBarcode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "DiagnosticLab",
          "entity2": "LabTechnician",
          "fromEntityName": "DiagnosticLab",
          "toEntityName": "LabTechnician",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "LabTechnician",
          "entity2": "LabOrder",
          "fromEntityName": "LabTechnician",
          "toEntityName": "LabOrder",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "LabOrder",
          "entity2": "BioSample",
          "fromEntityName": "LabOrder",
          "toEntityName": "BioSample",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 182,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Oybek Sattorov",
    "clientRole": "UNG Petro Bosh Dispecheri",
    "clientAvatar": "mentor",
    "title": "Yoqilg'i Quyish Shoxobchalari Tarmog'i (4 ta Entitiy!)",
    "titleEn": "Gasoline Station Network & Fueling Sessions (4 Entities!)",
    "story": "Har bir yoqilg'i quyish shoxobchasida (FuelStation) kamida bitta yer osti yoqilg'i rezervuari (FuelTank) bor. Har bir rezervuarga kamida bitta yonilg'i quyish kolonkasi (PumpDispenser) ulanadi. Kolonka orqali esa 0 yoki ko'plab mijoz quyish sessiyalari (FuelingSession) bajariladi. 'FuelStation' -> 'FuelTank', 'FuelTank' -> 'PumpDispenser' va 'PumpDispenser' -> 'FuelingSession' modelini belgilang.",
    "storyEn": "A fuel station houses at least one underground tank. Each tank connects to one or more pump dispensers. A dispenser conducts zero or more fueling sessions. Connect FuelStation -> FuelTank -> PumpDispenser -> FuelingSession.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "FuelStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "stationCode",
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
              "name": "highwayKm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FuelTank",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tankId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "tankId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fuelGrade",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capacityLiters",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PumpDispenser",
          "isWeak": false,
          "isAssociative": false,
          "pk": "pumpId",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "pumpId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pumpNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "flowRateLpm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FuelingSession",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sessionId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "sessionId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dispensedLiters",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalCost",
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
          "name": "Aloqa",
          "entity1": "FuelStation",
          "entity2": "FuelTank",
          "fromEntityName": "FuelStation",
          "toEntityName": "FuelTank",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "FuelTank",
          "entity2": "PumpDispenser",
          "fromEntityName": "FuelTank",
          "toEntityName": "PumpDispenser",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "PumpDispenser",
          "entity2": "FuelingSession",
          "fromEntityName": "PumpDispenser",
          "toEntityName": "FuelingSession",
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
          "name": "FuelStation",
          "pk": "stationCode",
          "isWeak": false
        },
        {
          "name": "FuelTank",
          "pk": "tankId",
          "isWeak": false
        },
        {
          "name": "PumpDispenser",
          "pk": "pumpId",
          "isWeak": false
        },
        {
          "name": "FuelingSession",
          "pk": "sessionId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "FuelStation",
          "entity2": "FuelTank",
          "fromEntityName": "FuelStation",
          "toEntityName": "FuelTank",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "FuelTank",
          "entity2": "PumpDispenser",
          "fromEntityName": "FuelTank",
          "toEntityName": "PumpDispenser",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "PumpDispenser",
          "entity2": "FuelingSession",
          "fromEntityName": "PumpDispenser",
          "toEntityName": "FuelingSession",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 183,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Madina Normurodova",
    "clientRole": "Coursera Uzbekistan Pedagogik Dizayneri",
    "clientAvatar": "mentor",
    "title": "Onlayn Ta'lim Kurslari va Quiz Sinovlari (4 ta Entitiy!)",
    "titleEn": "MOOC Platform Courses and Quiz Assessments (4 Entities!)",
    "story": "Ta'lim platformasida (LearningPlatform) kamida bitta onlayn kurs (OnlineCourse) joylashtiriladi. Har bir kurs kamida bitta mavzu moduliga (CourseModule) bo'linadi. Har bir modul esa talabani tekshirish uchun 0 yoki bir nechta quiz testlaridan (QuizAssessment) iborat. 'LearningPlatform' -> 'OnlineCourse', 'OnlineCourse' -> 'CourseModule' va 'CourseModule' -> 'QuizAssessment' aloqalarini belgilang.",
    "storyEn": "An e-learning platform hosts one or more online courses. Each course is divided into at least one module. Modules contain zero or more quiz assessments. Connect Platform -> Course -> Module -> Quiz.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "LearningPlatform",
          "isWeak": false,
          "isAssociative": false,
          "pk": "platformId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "platformId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "domainUrl",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "platformName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "OnlineCourse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "courseCode",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "courseCode",
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
              "name": "difficulty",
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
          "pk": "moduleId",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "moduleId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "moduleOrder",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "topicTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "QuizAssessment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "quizId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "quizId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passPercentage",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "maxAttempts",
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
          "name": "Aloqa",
          "entity1": "LearningPlatform",
          "entity2": "OnlineCourse",
          "fromEntityName": "LearningPlatform",
          "toEntityName": "OnlineCourse",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "OnlineCourse",
          "entity2": "CourseModule",
          "fromEntityName": "OnlineCourse",
          "toEntityName": "CourseModule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "CourseModule",
          "entity2": "QuizAssessment",
          "fromEntityName": "CourseModule",
          "toEntityName": "QuizAssessment",
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
          "name": "LearningPlatform",
          "pk": "platformId",
          "isWeak": false
        },
        {
          "name": "OnlineCourse",
          "pk": "courseCode",
          "isWeak": false
        },
        {
          "name": "CourseModule",
          "pk": "moduleId",
          "isWeak": false
        },
        {
          "name": "QuizAssessment",
          "pk": "quizId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "LearningPlatform",
          "entity2": "OnlineCourse",
          "fromEntityName": "LearningPlatform",
          "toEntityName": "OnlineCourse",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "OnlineCourse",
          "entity2": "CourseModule",
          "fromEntityName": "OnlineCourse",
          "toEntityName": "CourseModule",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CourseModule",
          "entity2": "QuizAssessment",
          "fromEntityName": "CourseModule",
          "toEntityName": "QuizAssessment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 184,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Rustam Xojiyev",
    "clientRole": "Toshkent Bojxona Posti Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Yuk Tashish Logistika Xabi va Bojxona (4 ta Entitiy!)",
    "titleEn": "Freight Hub Container and Customs Declaration (4 Entities!)",
    "story": "Xalqaro logistika xabida (LogisticsHub) yuk konteynerlari (ShippingContainer) qabul qilinadi (ixtiyoriy ko'plik konteyner). Har bir konteynerda 0 yoki ko'plab yuk partiyalari (CargoConsignment) ortilgan. Har bir yuk partiyasi esa majburiy ravishda aniq 1 ta rasmiy bojxona deklaratsiyasiga (CustomsDeclaration) ega bo'ladi (yakkama-yakka bittalik). 'LogisticsHub' -> 'ShippingContainer', 'ShippingContainer' -> 'CargoConsignment' va 'CargoConsignment' -> 'CustomsDeclaration' tizimini quring.",
    "storyEn": "A freight hub manages zero or more containers. Containers hold zero or more consignments. Each consignment requires strictly one customs declaration. Model Hub -> Container -> Consignment -> Declaration.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "LogisticsHub",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hubCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "hubCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hubCity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "customsZoneCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ShippingContainer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "containerIso",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "containerIso",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tareWeightKg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "containerType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CargoConsignment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "consignmentNo",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "consignmentNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "goodsDescription",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "declaredValue",
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
          "pk": "declNumber",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "declNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "stampDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dutyAmountPaid",
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
          "name": "Aloqa",
          "entity1": "LogisticsHub",
          "entity2": "ShippingContainer",
          "fromEntityName": "LogisticsHub",
          "toEntityName": "ShippingContainer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "ShippingContainer",
          "entity2": "CargoConsignment",
          "fromEntityName": "ShippingContainer",
          "toEntityName": "CargoConsignment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "CargoConsignment",
          "entity2": "CustomsDeclaration",
          "fromEntityName": "CargoConsignment",
          "toEntityName": "CustomsDeclaration",
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
          "name": "LogisticsHub",
          "pk": "hubCode",
          "isWeak": false
        },
        {
          "name": "ShippingContainer",
          "pk": "containerIso",
          "isWeak": false
        },
        {
          "name": "CargoConsignment",
          "pk": "consignmentNo",
          "isWeak": false
        },
        {
          "name": "CustomsDeclaration",
          "pk": "declNumber",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "LogisticsHub",
          "entity2": "ShippingContainer",
          "fromEntityName": "LogisticsHub",
          "toEntityName": "ShippingContainer",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "ShippingContainer",
          "entity2": "CargoConsignment",
          "fromEntityName": "ShippingContainer",
          "toEntityName": "CargoConsignment",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CargoConsignment",
          "entity2": "CustomsDeclaration",
          "fromEntityName": "CargoConsignment",
          "toEntityName": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 185,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Jaloliddin Qodirov",
    "clientRole": "Gross Insurance Sug'urta Direktori",
    "clientAvatar": "mentor",
    "title": "Avto-Sug'urta KASKO Shartnomalari (4 ta Entitiy!)",
    "titleEn": "Auto Comprehensive Insurance & Insured Vehicle (4 Entities!)",
    "story": "Sug'urta kompaniyasida (InsuranceAgency) shtatdagi sug'urta agentlari (SalesAgent) ishlaydi (kamida 1 ta). Har bir agent mijozlarga KASKO polislarini (AutoPolicy) rasmiylashtiradi (ixtiyoriy ko'plik). Har bir polis esa aniq bitta sug'urtalangan avtomashinani (InsuredVehicle) qoplaydi (yakkama-yakka bittalik majburiy). 'InsuranceAgency' -> 'SalesAgent', 'SalesAgent' -> 'AutoPolicy' va 'AutoPolicy' -> 'InsuredVehicle' munosabatlarini tuzing.",
    "storyEn": "An insurance agency employs one or more sales agents. Agents write zero or more auto policies. Each auto policy covers strictly one insured vehicle (yakkama-yakka bittalik). Connect Agency -> Agent -> Policy -> Vehicle.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "InsuranceAgency",
          "isWeak": false,
          "isAssociative": false,
          "pk": "agencyId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "agencyId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "companyTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseExpiry",
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
          "pk": "agentId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "agentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "agentFullName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "commissionRate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AutoPolicy",
          "isWeak": false,
          "isAssociative": false,
          "pk": "policyNo",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "policyNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "coveragePrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "effectiveFrom",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "InsuredVehicle",
          "isWeak": false,
          "isAssociative": false,
          "pk": "statePlate",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "statePlate",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "chassisVin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "engineVolume",
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
          "name": "Aloqa",
          "entity1": "InsuranceAgency",
          "entity2": "SalesAgent",
          "fromEntityName": "InsuranceAgency",
          "toEntityName": "SalesAgent",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "SalesAgent",
          "entity2": "AutoPolicy",
          "fromEntityName": "SalesAgent",
          "toEntityName": "AutoPolicy",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "AutoPolicy",
          "entity2": "InsuredVehicle",
          "fromEntityName": "AutoPolicy",
          "toEntityName": "InsuredVehicle",
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
          "name": "InsuranceAgency",
          "pk": "agencyId",
          "isWeak": false
        },
        {
          "name": "SalesAgent",
          "pk": "agentId",
          "isWeak": false
        },
        {
          "name": "AutoPolicy",
          "pk": "policyNo",
          "isWeak": false
        },
        {
          "name": "InsuredVehicle",
          "pk": "statePlate",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "InsuranceAgency",
          "entity2": "SalesAgent",
          "fromEntityName": "InsuranceAgency",
          "toEntityName": "SalesAgent",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "SalesAgent",
          "entity2": "AutoPolicy",
          "fromEntityName": "SalesAgent",
          "toEntityName": "AutoPolicy",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AutoPolicy",
          "entity2": "InsuredVehicle",
          "fromEntityName": "AutoPolicy",
          "toEntityName": "InsuredVehicle",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 186,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Nodir Mirjalolov",
    "clientRole": "Toshkent Xalqaro Aeroporti Nazoratchisi",
    "clientAvatar": "mentor",
    "title": "Aeroport Terminallari va Darvozalar (4 ta Entitiy!)",
    "titleEn": "Airport Terminal Gates and Shift Rosters (4 Entities!)",
    "story": "Xalqaro aeroportda (AirportFacility) kamida bitta yo'lovchi terminali (FlightTerminal) mavjud. Har bir terminalda kamida bitta samolyotga chiqish darvozasi (BoardingGate) o'rnatilgan. Har bir darvozaga esa kun davomida 0 yoki ko'plab xodimlar navbatchiligi (ShiftRoster) biriktiriladi. 'AirportFacility' -> 'FlightTerminal', 'FlightTerminal' -> 'BoardingGate' va 'BoardingGate' -> 'ShiftRoster' zanjirini yarating.",
    "storyEn": "An airport operates one or more flight terminals. Each terminal features one or more boarding gates. A boarding gate schedules zero or more staff shift rosters. Connect Airport -> Terminal -> Gate -> ShiftRoster.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "AirportFacility",
          "isWeak": false,
          "isAssociative": false,
          "pk": "iataCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "iataCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "airportTitle",
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
          "name": "FlightTerminal",
          "isWeak": false,
          "isAssociative": false,
          "pk": "terminalId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "terminalId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "terminalLabel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "openHours",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BoardingGate",
          "isWeak": false,
          "isAssociative": false,
          "pk": "gateNumber",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "gateNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hasJetBridge",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gateStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ShiftRoster",
          "isWeak": false,
          "isAssociative": false,
          "pk": "rosterId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "rosterId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shiftLeader",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "AirportFacility",
          "entity2": "FlightTerminal",
          "fromEntityName": "AirportFacility",
          "toEntityName": "FlightTerminal",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "FlightTerminal",
          "entity2": "BoardingGate",
          "fromEntityName": "FlightTerminal",
          "toEntityName": "BoardingGate",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "BoardingGate",
          "entity2": "ShiftRoster",
          "fromEntityName": "BoardingGate",
          "toEntityName": "ShiftRoster",
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
          "name": "AirportFacility",
          "pk": "iataCode",
          "isWeak": false
        },
        {
          "name": "FlightTerminal",
          "pk": "terminalId",
          "isWeak": false
        },
        {
          "name": "BoardingGate",
          "pk": "gateNumber",
          "isWeak": false
        },
        {
          "name": "ShiftRoster",
          "pk": "rosterId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "AirportFacility",
          "entity2": "FlightTerminal",
          "fromEntityName": "AirportFacility",
          "toEntityName": "FlightTerminal",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "FlightTerminal",
          "entity2": "BoardingGate",
          "fromEntityName": "FlightTerminal",
          "toEntityName": "BoardingGate",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BoardingGate",
          "entity2": "ShiftRoster",
          "fromEntityName": "BoardingGate",
          "toEntityName": "ShiftRoster",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 187,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Muzaffar Ismoilov",
    "clientRole": "Compass Mall Ijara Menejeri",
    "clientAvatar": "mentor",
    "title": "Savdo Markazi Do'konlar Ijarasi (4 ta Entitiy!)",
    "titleEn": "Shopping Mall Commercial Tenant Leases (4 Entities!)",
    "story": "Savdo majmuasida (ShoppingCenter) kamida bitta savdo maydoni do'koni (StoreUnit) bor. Har bir savdo do'koni bo'sh bo'lishi yoki ko'pi bilan bitta ijara shartnomasiga (LeaseContract) ega bo'lishi mumkin (ixtiyoriy bittalik). Har bir ijarachi tadbirkor (CommercialTenant) esa kamida bitta shartnoma tuzadi (majburiy ko'plik). 'ShoppingCenter' -> 'StoreUnit', 'StoreUnit' -> 'LeaseContract' va 'CommercialTenant' -> 'LeaseContract' modelini tuzing.",
    "storyEn": "A shopping mall leases one or more store units. A store unit has at most one active lease contract (ixtiyoriy bittalik). A commercial tenant holds one or more lease contracts. Connect Mall -> StoreUnit -> LeaseContract and Tenant -> LeaseContract.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "ShoppingCenter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "mallId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "mallId",
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
              "name": "totalFloors",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StoreUnit",
          "isWeak": false,
          "isAssociative": false,
          "pk": "unitCode",
          "x": 440,
          "y": 120,
          "attributes": [
            {
              "name": "unitCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "unitSquareMeters",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rentalRatePerSqM",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LeaseContract",
          "isWeak": false,
          "isAssociative": false,
          "pk": "leaseNumber",
          "x": 440,
          "y": 340,
          "attributes": [
            {
              "name": "leaseNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "commenceDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "monthlyRent",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CommercialTenant",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tenantInn",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "tenantInn",
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
              "name": "ownerPhone",
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
          "name": "Aloqa",
          "entity1": "ShoppingCenter",
          "entity2": "StoreUnit",
          "fromEntityName": "ShoppingCenter",
          "toEntityName": "StoreUnit",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "StoreUnit",
          "entity2": "LeaseContract",
          "fromEntityName": "StoreUnit",
          "toEntityName": "LeaseContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "CommercialTenant",
          "entity2": "LeaseContract",
          "fromEntityName": "CommercialTenant",
          "toEntityName": "LeaseContract",
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
          "name": "ShoppingCenter",
          "pk": "mallId",
          "isWeak": false
        },
        {
          "name": "StoreUnit",
          "pk": "unitCode",
          "isWeak": false
        },
        {
          "name": "LeaseContract",
          "pk": "leaseNumber",
          "isWeak": false
        },
        {
          "name": "CommercialTenant",
          "pk": "tenantInn",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "ShoppingCenter",
          "entity2": "StoreUnit",
          "fromEntityName": "ShoppingCenter",
          "toEntityName": "StoreUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "StoreUnit",
          "entity2": "LeaseContract",
          "fromEntityName": "StoreUnit",
          "toEntityName": "LeaseContract",
          "mult1": "1..1",
          "mult2": "0..1",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CommercialTenant",
          "entity2": "LeaseContract",
          "fromEntityName": "CommercialTenant",
          "toEntityName": "LeaseContract",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 188,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Anvar Jo'rayev",
    "clientRole": "Kapitalbank Bankomatlar Texnigi",
    "clientAvatar": "mentor",
    "title": "Bankomatlar Tarmog'i va Naqd Pul Kassetasi (4 ta Entitiy!)",
    "titleEn": "ATM Network Cassettes and Cash Replenishment (4 Entities!)",
    "story": "Bankning bankomatlar tarmog'iga (AtmNetwork) kamida bitta ATM terminali (AtmTerminal) kiradi. Har bir bankomat ichida kamida bitta naqd pul kassetasi (CashCassette) o'rnatilgan. Bankomatga esa xizmat ko'rsatish davomida 0 yoki bir nechta inkassatsiya ziyoratlari (ReplenishmentTrip) amalga oshiriladi. 'AtmNetwork' -> 'AtmTerminal', 'AtmTerminal' -> 'CashCassette' va 'AtmTerminal' -> 'ReplenishmentTrip' tizimini quring.",
    "storyEn": "An ATM network manages one or more ATM terminals. Each terminal houses at least one cash cassette. Terminals receive zero or more cash replenishment trips. Connect Network -> Terminal -> Cassette and Terminal -> ReplenishmentTrip.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "AtmNetwork",
          "isWeak": false,
          "isAssociative": false,
          "pk": "networkCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "networkCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "operatorBank",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "supportContact",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AtmTerminal",
          "isWeak": false,
          "isAssociative": false,
          "pk": "atmId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "atmId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "locationDesc",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ipAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CashCassette",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cassetteSerial",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "cassetteSerial",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "noteDenomination",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "billsCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ReplenishmentTrip",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tripId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "tripId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "replenishDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "loadedAmount",
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
          "name": "Aloqa",
          "entity1": "AtmNetwork",
          "entity2": "AtmTerminal",
          "fromEntityName": "AtmNetwork",
          "toEntityName": "AtmTerminal",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "AtmTerminal",
          "entity2": "CashCassette",
          "fromEntityName": "AtmTerminal",
          "toEntityName": "CashCassette",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "AtmTerminal",
          "entity2": "ReplenishmentTrip",
          "fromEntityName": "AtmTerminal",
          "toEntityName": "ReplenishmentTrip",
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
          "name": "AtmNetwork",
          "pk": "networkCode",
          "isWeak": false
        },
        {
          "name": "AtmTerminal",
          "pk": "atmId",
          "isWeak": false
        },
        {
          "name": "CashCassette",
          "pk": "cassetteSerial",
          "isWeak": false
        },
        {
          "name": "ReplenishmentTrip",
          "pk": "tripId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "AtmNetwork",
          "entity2": "AtmTerminal",
          "fromEntityName": "AtmNetwork",
          "toEntityName": "AtmTerminal",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AtmTerminal",
          "entity2": "CashCassette",
          "fromEntityName": "AtmTerminal",
          "toEntityName": "CashCassette",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AtmTerminal",
          "entity2": "ReplenishmentTrip",
          "fromEntityName": "AtmTerminal",
          "toEntityName": "ReplenishmentTrip",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 189,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Dr. Alisher Toshmatov",
    "clientRole": "WIUT Dekani",
    "clientAvatar": "mentor",
    "title": "WIUT Akademik Fakultet va Guruhlar (4 ta Entitiy!)",
    "titleEn": "WIUT Faculty Departments and Cohort Advising (4 Entities!)",
    "story": "Akademik fakultetda (AcademicFaculty) kamida bitta kafedra (AcademicDepartment) faoliyat yuritadi. Har bir kafedra kamida bitta talabalar akademik guruhiga (StudentGroup) javobgar. Har bir akademik maslahatchi tyutor (AcademicTutor) esa 0 yoki ko'plab guruhlarga rahbarlik qiladi. 'AcademicFaculty' -> 'AcademicDepartment', 'AcademicDepartment' -> 'StudentGroup' va 'AcademicTutor' -> 'StudentGroup' modelini belgilang.",
    "storyEn": "A university faculty contains at least one academic department. Each department manages at least one student cohort group. An academic tutor mentors zero or more student groups. Connect Faculty -> Department -> Group and Tutor -> Group.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "AcademicFaculty",
          "isWeak": false,
          "isAssociative": false,
          "pk": "facultyId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "facultyId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "facultyTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deanName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AcademicDepartment",
          "isWeak": false,
          "isAssociative": false,
          "pk": "deptCode",
          "x": 440,
          "y": 120,
          "attributes": [
            {
              "name": "deptCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "deptName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "headOffice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StudentGroup",
          "isWeak": false,
          "isAssociative": false,
          "pk": "groupCode",
          "x": 440,
          "y": 340,
          "attributes": [
            {
              "name": "groupCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "intakeYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "studentCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AcademicTutor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tutorStaffId",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "tutorStaffId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tutorFullName",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Aloqa",
          "entity1": "AcademicFaculty",
          "entity2": "AcademicDepartment",
          "fromEntityName": "AcademicFaculty",
          "toEntityName": "AcademicDepartment",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "AcademicDepartment",
          "entity2": "StudentGroup",
          "fromEntityName": "AcademicDepartment",
          "toEntityName": "StudentGroup",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "AcademicTutor",
          "entity2": "StudentGroup",
          "fromEntityName": "AcademicTutor",
          "toEntityName": "StudentGroup",
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
          "name": "AcademicFaculty",
          "pk": "facultyId",
          "isWeak": false
        },
        {
          "name": "AcademicDepartment",
          "pk": "deptCode",
          "isWeak": false
        },
        {
          "name": "StudentGroup",
          "pk": "groupCode",
          "isWeak": false
        },
        {
          "name": "AcademicTutor",
          "pk": "tutorStaffId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "AcademicFaculty",
          "entity2": "AcademicDepartment",
          "fromEntityName": "AcademicFaculty",
          "toEntityName": "AcademicDepartment",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AcademicDepartment",
          "entity2": "StudentGroup",
          "fromEntityName": "AcademicDepartment",
          "toEntityName": "StudentGroup",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AcademicTutor",
          "entity2": "StudentGroup",
          "fromEntityName": "AcademicTutor",
          "toEntityName": "StudentGroup",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 190,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Erkin Vohidov",
    "clientRole": "O'zsuvta'minot Bosh Muhandisi",
    "clientAvatar": "mentor",
    "title": "Shahar Suv Ta'minoti Nasosxonalari (4 ta Entitiy!)",
    "titleEn": "Municipal Water Treatment and Meter Readings (4 Entities!)",
    "story": "Suv tozalash inshooti (WaterFacility) kamida bitta tuman nasos stantsiyasiga (PumpingStation) suv uzatadi. Har bir nasos stantsiyasi kamida bitta hudud sektoriga (DistrictZone) xizmat qiladi. Har bir hudud sektorida esa kamida bitta suv o'lchagich hisoblagich (WaterMeter) o'rnatilgan. 'WaterFacility' -> 'PumpingStation', 'PumpingStation' -> 'DistrictZone' va 'DistrictZone' -> 'WaterMeter' aloqalarini tuzing.",
    "storyEn": "A water treatment facility feeds one or more municipal pumping stations. Pumping stations serve at least one district zone. District zones operate one or more water meters. Connect Facility -> Station -> Zone -> Meter.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "WaterFacility",
          "isWeak": false,
          "isAssociative": false,
          "pk": "facilityCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "facilityCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "riverSource",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dailyCapacityM3",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PumpingStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "stationId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pumpPressureBar",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "operatorOnDuty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DistrictZone",
          "isWeak": false,
          "isAssociative": false,
          "pk": "zoneId",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "zoneId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "districtName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "populationCovered",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "WaterMeter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "meterSerial",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "meterSerial",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pipeDiameterMm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lastReadingM3",
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
          "name": "Aloqa",
          "entity1": "WaterFacility",
          "entity2": "PumpingStation",
          "fromEntityName": "WaterFacility",
          "toEntityName": "PumpingStation",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "PumpingStation",
          "entity2": "DistrictZone",
          "fromEntityName": "PumpingStation",
          "toEntityName": "DistrictZone",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "DistrictZone",
          "entity2": "WaterMeter",
          "fromEntityName": "DistrictZone",
          "toEntityName": "WaterMeter",
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
          "name": "WaterFacility",
          "pk": "facilityCode",
          "isWeak": false
        },
        {
          "name": "PumpingStation",
          "pk": "stationId",
          "isWeak": false
        },
        {
          "name": "DistrictZone",
          "pk": "zoneId",
          "isWeak": false
        },
        {
          "name": "WaterMeter",
          "pk": "meterSerial",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "WaterFacility",
          "entity2": "PumpingStation",
          "fromEntityName": "WaterFacility",
          "toEntityName": "PumpingStation",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "PumpingStation",
          "entity2": "DistrictZone",
          "fromEntityName": "PumpingStation",
          "toEntityName": "DistrictZone",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "DistrictZone",
          "entity2": "WaterMeter",
          "fromEntityName": "DistrictZone",
          "toEntityName": "WaterMeter",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 191,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Dr. Lola Rahimova",
    "clientRole": "Salomatlik Markazi Farmatsevti",
    "clientAvatar": "mentor",
    "title": "Tibbiy Retseptlar va Dori Ta'minoti (4 ta Entitiy!)",
    "titleEn": "Medical Prescriptions & Dispensed Pharmaceuticals (4 Entities!)",
    "story": "Tibbiyot markazida (MedicalCenter) kamida bitta litsenziyali shifokor (MedicalPhysician) xizmat ko'rsatadi. Shifokor bemorga retsept (RxPrescription) yozib beradi (ixtiyoriy ko'plik). Har bir retseptda esa kamida bitta tayinlangan dori preparati (PrescribedItem) ko'rsatiladi. 'MedicalCenter' -> 'MedicalPhysician', 'MedicalPhysician' -> 'RxPrescription' va 'RxPrescription' -> 'PrescribedItem' modelini yarating.",
    "storyEn": "A medical center employs at least one physician. Physicians write zero or more prescriptions. Each prescription specifies at least one prescribed drug item. Connect Center -> Physician -> Prescription -> PrescribedItem.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "MedicalCenter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "centerId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "centerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "clinicTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "postalAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MedicalPhysician",
          "isWeak": false,
          "isAssociative": false,
          "pk": "physicianId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "physicianId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "drName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialization",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RxPrescription",
          "isWeak": false,
          "isAssociative": false,
          "pk": "prescriptionNo",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "prescriptionNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "issuedDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "diagnosisCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PrescribedItem",
          "isWeak": false,
          "isAssociative": false,
          "pk": "itemCode",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "itemCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "medicationTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dailyDosage",
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
          "name": "Aloqa",
          "entity1": "MedicalCenter",
          "entity2": "MedicalPhysician",
          "fromEntityName": "MedicalCenter",
          "toEntityName": "MedicalPhysician",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "MedicalPhysician",
          "entity2": "RxPrescription",
          "fromEntityName": "MedicalPhysician",
          "toEntityName": "RxPrescription",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "RxPrescription",
          "entity2": "PrescribedItem",
          "fromEntityName": "RxPrescription",
          "toEntityName": "PrescribedItem",
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
          "name": "MedicalCenter",
          "pk": "centerId",
          "isWeak": false
        },
        {
          "name": "MedicalPhysician",
          "pk": "physicianId",
          "isWeak": false
        },
        {
          "name": "RxPrescription",
          "pk": "prescriptionNo",
          "isWeak": false
        },
        {
          "name": "PrescribedItem",
          "pk": "itemCode",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "MedicalCenter",
          "entity2": "MedicalPhysician",
          "fromEntityName": "MedicalCenter",
          "toEntityName": "MedicalPhysician",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "MedicalPhysician",
          "entity2": "RxPrescription",
          "fromEntityName": "MedicalPhysician",
          "toEntityName": "RxPrescription",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "RxPrescription",
          "entity2": "PrescribedItem",
          "fromEntityName": "RxPrescription",
          "toEntityName": "PrescribedItem",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 192,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Iskandar Qobilov",
    "clientRole": "Cloud Serverlar Arxitektori",
    "clientAvatar": "mentor",
    "title": "Korxona Data Markazi Serverlari (4 ta Entitiy!)",
    "titleEn": "Data Center Racks & Virtual Machine Instances (4 Entities!)",
    "story": "Ma'lumotlar markazida (DataCenter) kamida bitta server stoykasi (ServerRack) o'rnatilgan. Har bir stoyka ichida kamida bitta server bloki (HostBlade) joylashadi. Server bloki ustida esa 0 yoki ko'plab virtual mashinalar (VmInstance) ishga tushiriladi. 'DataCenter' -> 'ServerRack', 'ServerRack' -> 'HostBlade' va 'HostBlade' -> 'VmInstance' zanjirini loyihalang.",
    "storyEn": "A data center houses at least one rack. Each rack mounts one or more host blade servers. A host blade hosts zero or more virtual machine instances. Connect DataCenter -> ServerRack -> HostBlade -> VmInstance.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "DataCenter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "dcCode",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "dcCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dcName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalKvaPower",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ServerRack",
          "isWeak": false,
          "isAssociative": false,
          "pk": "rackId",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "rackId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rackUnitHeight",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rowLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HostBlade",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bladeSerial",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "bladeSerial",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cpuCores",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ramGb",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "VmInstance",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vmId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "vmId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hostname",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "assignedIp",
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
          "name": "Aloqa",
          "entity1": "DataCenter",
          "entity2": "ServerRack",
          "fromEntityName": "DataCenter",
          "toEntityName": "ServerRack",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "ServerRack",
          "entity2": "HostBlade",
          "fromEntityName": "ServerRack",
          "toEntityName": "HostBlade",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "HostBlade",
          "entity2": "VmInstance",
          "fromEntityName": "HostBlade",
          "toEntityName": "VmInstance",
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
          "name": "DataCenter",
          "pk": "dcCode",
          "isWeak": false
        },
        {
          "name": "ServerRack",
          "pk": "rackId",
          "isWeak": false
        },
        {
          "name": "HostBlade",
          "pk": "bladeSerial",
          "isWeak": false
        },
        {
          "name": "VmInstance",
          "pk": "vmId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "DataCenter",
          "entity2": "ServerRack",
          "fromEntityName": "DataCenter",
          "toEntityName": "ServerRack",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "ServerRack",
          "entity2": "HostBlade",
          "fromEntityName": "ServerRack",
          "toEntityName": "HostBlade",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "HostBlade",
          "entity2": "VmInstance",
          "fromEntityName": "HostBlade",
          "toEntityName": "VmInstance",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 193,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Sobir Ahmedov",
    "clientRole": "Depo Bosh Mexanigi",
    "clientAvatar": "mentor",
    "title": "Lokomotiv Deposi va Texnik Xizmat (4 ta Entitiy!)",
    "titleEn": "Locomotive Depot Maintenance Bay Services (4 Entities!)",
    "story": "Temir yo'l deposiga (RailwayDepot) lokomotivlar (LocomotiveUnit) biriktirilgan (kamida 1 ta). Depoda kamida bitta ta'mirlash boksi (RepairBay) faoliyat yuritadi. Lokomotiv bo'yicha ta'mirlash boksida 0 yoki ko'plab texnik xizmat ko'rsatish aktlari (MaintenanceLog) qayd etiladi. 'RailwayDepot' -> 'LocomotiveUnit', 'RailwayDepot' -> 'RepairBay' va 'LocomotiveUnit' -> 'MaintenanceLog' tizimini quring.",
    "storyEn": "A railway depot assigns one or more locomotives. The depot operates at least one repair bay. Locomotives log zero or more maintenance service records. Connect Depot -> Locomotive, Depot -> RepairBay, and Locomotive -> MaintenanceLog.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "RailwayDepot",
          "isWeak": false,
          "isAssociative": false,
          "pk": "depotId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "depotId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "depotName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "railGaugeMm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LocomotiveUnit",
          "isWeak": false,
          "isAssociative": false,
          "pk": "locoNumber",
          "x": 440,
          "y": 120,
          "attributes": [
            {
              "name": "locoNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dieselKwPower",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "yearBuilt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RepairBay",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bayId",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "bayId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "craneTonnage",
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
          "name": "MaintenanceLog",
          "isWeak": false,
          "isAssociative": false,
          "pk": "logTicket",
          "x": 440,
          "y": 340,
          "attributes": [
            {
              "name": "logTicket",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "serviceType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "completedAt",
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
          "name": "Aloqa",
          "entity1": "RailwayDepot",
          "entity2": "LocomotiveUnit",
          "fromEntityName": "RailwayDepot",
          "toEntityName": "LocomotiveUnit",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "RailwayDepot",
          "entity2": "RepairBay",
          "fromEntityName": "RailwayDepot",
          "toEntityName": "RepairBay",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "LocomotiveUnit",
          "entity2": "MaintenanceLog",
          "fromEntityName": "LocomotiveUnit",
          "toEntityName": "MaintenanceLog",
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
          "name": "RailwayDepot",
          "pk": "depotId",
          "isWeak": false
        },
        {
          "name": "LocomotiveUnit",
          "pk": "locoNumber",
          "isWeak": false
        },
        {
          "name": "RepairBay",
          "pk": "bayId",
          "isWeak": false
        },
        {
          "name": "MaintenanceLog",
          "pk": "logTicket",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "RailwayDepot",
          "entity2": "LocomotiveUnit",
          "fromEntityName": "RailwayDepot",
          "toEntityName": "LocomotiveUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "RailwayDepot",
          "entity2": "RepairBay",
          "fromEntityName": "RailwayDepot",
          "toEntityName": "RepairBay",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "LocomotiveUnit",
          "entity2": "MaintenanceLog",
          "fromEntityName": "LocomotiveUnit",
          "toEntityName": "MaintenanceLog",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 194,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Nigora Alimova",
    "clientRole": "Navoiy Teatri Chiptaxona Menejeri",
    "clientAvatar": "mentor",
    "title": "Madaniyat Saroyi Spektakllari va Qatorlar (4 ta Entitiy!)",
    "titleEn": "Concert Hall Theater Seating & Bookings (4 Entities!)",
    "story": "Teatr binosida (TheaterHall) kamida bitta o'rindiqlar qatori (AuditoriumRow) mavjud. Sahnalashtirilgan spektakl (StageShow) bo'yicha chipta buyurtmalari (SeatBooking) qabul qilinadi (ixtiyoriy ko'plik). Har bir buyurtma aniq bitta qatordagi joyga rasmiylashtiriladi. 'TheaterHall' -> 'AuditoriumRow', 'StageShow' -> 'SeatBooking' va 'AuditoriumRow' -> 'SeatBooking' modelini belgilang.",
    "storyEn": "A theater hall organizes one or more auditorium seating rows. A stage show registers zero or more seat bookings. Each booking reserves a seat in a row. Connect Hall -> Row, Show -> Booking, and Row -> Booking.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "TheaterHall",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hallCode",
          "x": 80,
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
              "name": "soundAcousticGrade",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "AuditoriumRow",
          "isWeak": false,
          "isAssociative": false,
          "pk": "rowNumber",
          "x": 440,
          "y": 120,
          "attributes": [
            {
              "name": "rowNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalSeatsInRow",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorTier",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StageShow",
          "isWeak": false,
          "isAssociative": false,
          "pk": "showId",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "showId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "showTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "premiereDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SeatBooking",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bookingRef",
          "x": 440,
          "y": 340,
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatNum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ticketFee",
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
          "name": "Aloqa",
          "entity1": "TheaterHall",
          "entity2": "AuditoriumRow",
          "fromEntityName": "TheaterHall",
          "toEntityName": "AuditoriumRow",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "StageShow",
          "entity2": "SeatBooking",
          "fromEntityName": "StageShow",
          "toEntityName": "SeatBooking",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "AuditoriumRow",
          "entity2": "SeatBooking",
          "fromEntityName": "AuditoriumRow",
          "toEntityName": "SeatBooking",
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
          "name": "TheaterHall",
          "pk": "hallCode",
          "isWeak": false
        },
        {
          "name": "AuditoriumRow",
          "pk": "rowNumber",
          "isWeak": false
        },
        {
          "name": "StageShow",
          "pk": "showId",
          "isWeak": false
        },
        {
          "name": "SeatBooking",
          "pk": "bookingRef",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "TheaterHall",
          "entity2": "AuditoriumRow",
          "fromEntityName": "TheaterHall",
          "toEntityName": "AuditoriumRow",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "StageShow",
          "entity2": "SeatBooking",
          "fromEntityName": "StageShow",
          "toEntityName": "SeatBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "AuditoriumRow",
          "entity2": "SeatBooking",
          "fromEntityName": "AuditoriumRow",
          "toEntityName": "SeatBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 195,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Rustam Mirzayev",
    "clientRole": "Ucell Telekom Menejeri",
    "clientAvatar": "mentor",
    "title": "Telekom SIM-karta va Telefon Raqamlari (4 ta Entitiy!)",
    "titleEn": "Telecom SIM Package and Subscriber MSISDN (4 Entities!)",
    "story": "Telekom operatori (TelecomCarrier) yangi SIM-karta paketlarini (SimPackage) chiqaradi (kamida 1 ta). Har bir SIM-karta aniq bitta noyob telefon raqamiga (MsisdnNumber) biriktirilgan (yakkama-yakka bittalik). Abonent (Subscriber) esa o'z nomiga kamida bitta SIM-karta rasmiylashtirishi shart (majburiy ko'plik). 'TelecomCarrier' -> 'SimPackage', 'SimPackage' -> 'MsisdnNumber' va 'Subscriber' -> 'SimPackage' tizimini quring.",
    "storyEn": "A telecom carrier manufactures one or more SIM packages. Each SIM package pairs with strictly one phone number (yakkama-yakka bittalik). A registered subscriber holds at least one SIM package. Model Carrier -> SIM -> MSISDN and Subscriber -> SIM.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "TelecomCarrier",
          "isWeak": false,
          "isAssociative": false,
          "pk": "carrierId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "carrierId",
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
              "name": "networkTech",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SimPackage",
          "isWeak": false,
          "isAssociative": false,
          "pk": "iccidNumber",
          "x": 440,
          "y": 120,
          "attributes": [
            {
              "name": "iccidNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "imsiCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "formatSize",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MsisdnNumber",
          "isWeak": false,
          "isAssociative": false,
          "pk": "phoneDigits",
          "x": 800,
          "y": 120,
          "attributes": [
            {
              "name": "phoneDigits",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "numberCategory",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isReserved",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Subscriber",
          "isWeak": false,
          "isAssociative": false,
          "pk": "citizenPin",
          "x": 440,
          "y": 340,
          "attributes": [
            {
              "name": "citizenPin",
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
              "name": "regAddress",
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
          "name": "Aloqa",
          "entity1": "TelecomCarrier",
          "entity2": "SimPackage",
          "fromEntityName": "TelecomCarrier",
          "toEntityName": "SimPackage",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "SimPackage",
          "entity2": "MsisdnNumber",
          "fromEntityName": "SimPackage",
          "toEntityName": "MsisdnNumber",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "Subscriber",
          "entity2": "SimPackage",
          "fromEntityName": "Subscriber",
          "toEntityName": "SimPackage",
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
          "name": "TelecomCarrier",
          "pk": "carrierId",
          "isWeak": false
        },
        {
          "name": "SimPackage",
          "pk": "iccidNumber",
          "isWeak": false
        },
        {
          "name": "MsisdnNumber",
          "pk": "phoneDigits",
          "isWeak": false
        },
        {
          "name": "Subscriber",
          "pk": "citizenPin",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "TelecomCarrier",
          "entity2": "SimPackage",
          "fromEntityName": "TelecomCarrier",
          "toEntityName": "SimPackage",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "SimPackage",
          "entity2": "MsisdnNumber",
          "fromEntityName": "SimPackage",
          "toEntityName": "MsisdnNumber",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "Subscriber",
          "entity2": "SimPackage",
          "fromEntityName": "Subscriber",
          "toEntityName": "SimPackage",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 196,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Baxrom G'aniyev",
    "clientRole": "Energiya Tizimi Texnik Nazoratchisi",
    "clientAvatar": "mentor",
    "title": "Mintaqaviy Transformator Podstansiyasi (4 ta Entitiy!)",
    "titleEn": "Regional Grid Transformers and Maintenance Logs (4 Entities!)",
    "story": "Mintaqaviy energetika tarmog'ida (RegionalGrid) kamida bitta yuqori kuchlanishli podstansiya (PowerStation) mavjud. Har bir podstansiyada kamida bitta elektr transformatori (StepTransformer) o'rnatilgan. Transformator esa 0 yoki undan ortiq davriy texnik xizmat ko'rigidan (ServiceInspection) o'tkaziladi. 'RegionalGrid' -> 'PowerStation', 'PowerStation' -> 'StepTransformer' va 'StepTransformer' -> 'ServiceInspection' aloqalarini belgilang.",
    "storyEn": "A regional grid powers at least one electrical substation. Each substation hosts one or more step transformers. A transformer undergoes zero or more service inspections. Connect Grid -> Substation -> Transformer -> Inspection.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "RegionalGrid",
          "isWeak": false,
          "isAssociative": false,
          "pk": "gridId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "gridId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "regionName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalMegaWatts",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "PowerStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationCode",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "stationCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "stepUpKv",
              "isPK": false,
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
          "name": "StepTransformer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "transformerId",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "transformerId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "mvaRating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "oilTempC",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ServiceInspection",
          "isWeak": false,
          "isAssociative": false,
          "pk": "inspectReportId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "inspectReportId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "testDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "oilQualityStatus",
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
          "name": "Aloqa",
          "entity1": "RegionalGrid",
          "entity2": "PowerStation",
          "fromEntityName": "RegionalGrid",
          "toEntityName": "PowerStation",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "PowerStation",
          "entity2": "StepTransformer",
          "fromEntityName": "PowerStation",
          "toEntityName": "StepTransformer",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "StepTransformer",
          "entity2": "ServiceInspection",
          "fromEntityName": "StepTransformer",
          "toEntityName": "ServiceInspection",
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
          "name": "RegionalGrid",
          "pk": "gridId",
          "isWeak": false
        },
        {
          "name": "PowerStation",
          "pk": "stationCode",
          "isWeak": false
        },
        {
          "name": "StepTransformer",
          "pk": "transformerId",
          "isWeak": false
        },
        {
          "name": "ServiceInspection",
          "pk": "inspectReportId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "RegionalGrid",
          "entity2": "PowerStation",
          "fromEntityName": "RegionalGrid",
          "toEntityName": "PowerStation",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "PowerStation",
          "entity2": "StepTransformer",
          "fromEntityName": "PowerStation",
          "toEntityName": "StepTransformer",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "StepTransformer",
          "entity2": "ServiceInspection",
          "fromEntityName": "StepTransformer",
          "toEntityName": "ServiceInspection",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 197,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Malika Yusupova",
    "clientRole": "Toshkent Kommunal Xizmatlar Auditor",
    "clientAvatar": "mentor",
    "title": "Uy-joy Kommunal Shartnomalari va Kvitansiyalar (4 ta Entitiy!)",
    "titleEn": "Municipal Utility Housing Contracts & Receipts (4 Entities!)",
    "story": "Kommunal xizmat korxonasi (MunicipalUtility) turar-joy ko'chmas mulklari (ResidentialProperty) bilan xizmat ko'rsatish shartnomalarini (UtilityContract) tuzadi. Har bir mulk kamida 1 ta shartnomaga ega bo'ladi. Har bir shartnoma bo'yicha esa 0 yoki ko'plab to'lov cheklari (PaymentReceipt) qabul qilinadi. 'MunicipalUtility' -> 'UtilityContract', 'ResidentialProperty' -> 'UtilityContract' va 'UtilityContract' -> 'PaymentReceipt' modelini chizing.",
    "storyEn": "A municipal utility issues service contracts to residential properties. Properties hold one or more utility contracts. A contract accepts zero or more payment receipts. Connect Utility -> Contract, Property -> Contract, and Contract -> Receipt.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "MunicipalUtility",
          "isWeak": false,
          "isAssociative": false,
          "pk": "utilityId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "utilityId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "utilityType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tariffPerUnit",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ResidentialProperty",
          "isWeak": false,
          "isAssociative": false,
          "pk": "cadastreNo",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "cadastreNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cadastreAddress",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalResidents",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "UtilityContract",
          "isWeak": false,
          "isAssociative": false,
          "pk": "contractCode",
          "x": 440,
          "y": 230,
          "attributes": [
            {
              "name": "contractCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "startDate",
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
          "name": "PaymentReceipt",
          "isWeak": false,
          "isAssociative": false,
          "pk": "receiptNumber",
          "x": 800,
          "y": 230,
          "attributes": [
            {
              "name": "receiptNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "paidSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "transactionStamp",
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
          "name": "Aloqa",
          "entity1": "MunicipalUtility",
          "entity2": "UtilityContract",
          "fromEntityName": "MunicipalUtility",
          "toEntityName": "UtilityContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "ResidentialProperty",
          "entity2": "UtilityContract",
          "fromEntityName": "ResidentialProperty",
          "toEntityName": "UtilityContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "UtilityContract",
          "entity2": "PaymentReceipt",
          "fromEntityName": "UtilityContract",
          "toEntityName": "PaymentReceipt",
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
          "name": "MunicipalUtility",
          "pk": "utilityId",
          "isWeak": false
        },
        {
          "name": "ResidentialProperty",
          "pk": "cadastreNo",
          "isWeak": false
        },
        {
          "name": "UtilityContract",
          "pk": "contractCode",
          "isWeak": false
        },
        {
          "name": "PaymentReceipt",
          "pk": "receiptNumber",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "MunicipalUtility",
          "entity2": "UtilityContract",
          "fromEntityName": "MunicipalUtility",
          "toEntityName": "UtilityContract",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "ResidentialProperty",
          "entity2": "UtilityContract",
          "fromEntityName": "ResidentialProperty",
          "toEntityName": "UtilityContract",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "UtilityContract",
          "entity2": "PaymentReceipt",
          "fromEntityName": "UtilityContract",
          "toEntityName": "PaymentReceipt",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 198,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Ilyos Karimov",
    "clientRole": "Oltintepa Avtovokzal Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Shaharlararo Avtobus Marshrutlari va Chiptalar (4 ta Entitiy!)",
    "titleEn": "Intercity Bus Terminal Scheduling & Bookings (4 Entities!)",
    "story": "Avtovokzal (BusStation) shaharlararo qatnov jadvallarini (BusSchedule) tashkil etadi (kamida 1 ta). Shaharlararo avtobus (IntercityCoach) 0 yoki bir nechta qatnov jadvaliga biriktiriladi. Har bir qatnov jadvali bo'yicha esa yo'lovchilarga 0 yoki ko'plab chipta bandlovlari (TicketReservation) sotiladi. 'BusStation' -> 'BusSchedule', 'IntercityCoach' -> 'BusSchedule' va 'BusSchedule' -> 'TicketReservation' aloqalarini belgilang.",
    "storyEn": "A bus station schedules one or more departures. An intercity coach operates zero or more scheduled runs. Each schedule sells zero or more ticket reservations. Connect Station -> Schedule, Coach -> Schedule, and Schedule -> Reservation.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "BusStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "stationId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "terminalCity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "baysCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "IntercityCoach",
          "isWeak": false,
          "isAssociative": false,
          "pk": "busPlate",
          "x": 80,
          "y": 340,
          "attributes": [
            {
              "name": "busPlate",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatCapacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "coachBrand",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BusSchedule",
          "isWeak": false,
          "isAssociative": false,
          "pk": "scheduleId",
          "x": 440,
          "y": 230,
          "attributes": [
            {
              "name": "scheduleId",
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
              "name": "targetDestination",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TicketReservation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "bookingPnr",
          "x": 800,
          "y": 230,
          "attributes": [
            {
              "name": "bookingPnr",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "passengerPassport",
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
          "name": "Aloqa",
          "entity1": "BusStation",
          "entity2": "BusSchedule",
          "fromEntityName": "BusStation",
          "toEntityName": "BusSchedule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "IntercityCoach",
          "entity2": "BusSchedule",
          "fromEntityName": "IntercityCoach",
          "toEntityName": "BusSchedule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "BusSchedule",
          "entity2": "TicketReservation",
          "fromEntityName": "BusSchedule",
          "toEntityName": "TicketReservation",
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
          "name": "BusStation",
          "pk": "stationId",
          "isWeak": false
        },
        {
          "name": "IntercityCoach",
          "pk": "busPlate",
          "isWeak": false
        },
        {
          "name": "BusSchedule",
          "pk": "scheduleId",
          "isWeak": false
        },
        {
          "name": "TicketReservation",
          "pk": "bookingPnr",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "BusStation",
          "entity2": "BusSchedule",
          "fromEntityName": "BusStation",
          "toEntityName": "BusSchedule",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "IntercityCoach",
          "entity2": "BusSchedule",
          "fromEntityName": "IntercityCoach",
          "toEntityName": "BusSchedule",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "BusSchedule",
          "entity2": "TicketReservation",
          "fromEntityName": "BusSchedule",
          "toEntityName": "TicketReservation",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 199,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Komil Omonov",
    "clientRole": "Buxoro To'qimachilik Klasteri Bosh Muhandisi",
    "clientAvatar": "mentor",
    "title": "To'qimachilik Fabrikasi va Sifat Sertifikati (4 ta Entitiy!)",
    "titleEn": "Textile Mill Fabric Batches and Inspection Certificate (4 Entities!)",
    "story": "To'qimachilik fabrikasida (TextileMill) kamida bitta yigiruv sexi (SpinningWorkshop) faoliyat yuritadi. Har bir sexda 0 yoki ko'plab tayyor mato partiyalari (FabricBatch) ishlab chiqariladi. Har bir mato partiyasi laboratoriyada tekshirilib, qat'iy bitta rasmiy sifat sertifikatiga (QualityCertificate) ega bo'ladi (yakkama-yakka bittalik). 'TextileMill' -> 'SpinningWorkshop', 'SpinningWorkshop' -> 'FabricBatch' va 'FabricBatch' -> 'QualityCertificate' munosabatlarini belgilang.",
    "storyEn": "A textile mill houses one or more spinning workshops. Workshops produce zero or more fabric batches. Each fabric batch secures strictly one quality certificate upon testing (yakkama-yakka bittalik). Connect Mill -> Workshop -> Batch -> Certificate.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "TextileMill",
          "isWeak": false,
          "isAssociative": false,
          "pk": "millId",
          "x": 80,
          "y": 120,
          "attributes": [
            {
              "name": "millId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "millName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cottonRegion",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SpinningWorkshop",
          "isWeak": false,
          "isAssociative": false,
          "pk": "workshopNo",
          "x": 400,
          "y": 120,
          "attributes": [
            {
              "name": "workshopNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "loomMachineryCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "workshopChief",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FabricBatch",
          "isWeak": false,
          "isAssociative": false,
          "pk": "batchBarcode",
          "x": 400,
          "y": 340,
          "attributes": [
            {
              "name": "batchBarcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "metersLength",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "threadDensityGsm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "QualityCertificate",
          "isWeak": false,
          "isAssociative": false,
          "pk": "certRegId",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "certRegId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isoStandard",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "approvalDate",
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
          "name": "Aloqa",
          "entity1": "TextileMill",
          "entity2": "SpinningWorkshop",
          "fromEntityName": "TextileMill",
          "toEntityName": "SpinningWorkshop",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "SpinningWorkshop",
          "entity2": "FabricBatch",
          "fromEntityName": "SpinningWorkshop",
          "toEntityName": "FabricBatch",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "FabricBatch",
          "entity2": "QualityCertificate",
          "fromEntityName": "FabricBatch",
          "toEntityName": "QualityCertificate",
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
          "name": "TextileMill",
          "pk": "millId",
          "isWeak": false
        },
        {
          "name": "SpinningWorkshop",
          "pk": "workshopNo",
          "isWeak": false
        },
        {
          "name": "FabricBatch",
          "pk": "batchBarcode",
          "isWeak": false
        },
        {
          "name": "QualityCertificate",
          "pk": "certRegId",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "TextileMill",
          "entity2": "SpinningWorkshop",
          "fromEntityName": "TextileMill",
          "toEntityName": "SpinningWorkshop",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "SpinningWorkshop",
          "entity2": "FabricBatch",
          "fromEntityName": "SpinningWorkshop",
          "toEntityName": "FabricBatch",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "FabricBatch",
          "entity2": "QualityCertificate",
          "fromEntityName": "FabricBatch",
          "toEntityName": "QualityCertificate",
          "mult1": "1..1",
          "mult2": "1..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  },
  {
    "id": 200,
    "sector": 2,
    "difficulty": "2-Qavat • Murakkab",
    "clientName": "Bobur Zokirov",
    "clientRole": "Uzum Market Arxitektura Boshlig'i",
    "clientAvatar": "mentor",
    "title": "E-Commerce Xarid Savati va Yetkazish Invoysi (Master 4 ta Entitiy!)",
    "titleEn": "E-Commerce Cart, Shipping Address and Invoice (Master 4 Entities!)",
    "story": "E-Commerce xaridori (OnlineShopper) tizimda kamida bitta manzilga (DeliveryAddress) ega bo'ladi (majburiy ko'plik). Xaridor 0 yoki ko'plab xarid savatlarini (CartBasket) to'ldirishi mumkin. Har bir buyurtma qilingan savat bo'yicha ko'pi bilan bitta yakuniy to'lov invoysi (CheckoutInvoice) generatsiya qilinadi (ixtiyoriy bittalik). 'OnlineShopper' -> 'DeliveryAddress', 'OnlineShopper' -> 'CartBasket' va 'CartBasket' -> 'CheckoutInvoice' tizimini quring.",
    "storyEn": "An online shopper must maintain at least one shipping address. A shopper fills zero or more cart baskets. Each checkout cart generates at most one payment invoice (ixtiyoriy bittalik). Model Shopper -> Address, Shopper -> Cart, and Cart -> Invoice.",
    "instruction": "Berilgan 4 ta entitiy o'rtasidagi aloqalarni chizing va har bir chiziq uchiga to'g'ri multiplisitiyalarni (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik) joylashtiring.",
    "instructionEn": "Draw relationship links between the 4 entities and set the exact multiplicity constraints (ixtiyoriy bittalik, qat'iy bittalik, ixtiyoriy ko'plik, majburiy ko'plik).",
    "starterDiagram": {
      "entities": [
        {
          "name": "OnlineShopper",
          "isWeak": false,
          "isAssociative": false,
          "pk": "shopperId",
          "x": 80,
          "y": 230,
          "attributes": [
            {
              "name": "shopperId",
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
              "name": "userEmail",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DeliveryAddress",
          "isWeak": false,
          "isAssociative": false,
          "pk": "addressId",
          "x": 440,
          "y": 120,
          "attributes": [
            {
              "name": "addressId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "streetLine",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "postalIndex",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CartBasket",
          "isWeak": false,
          "isAssociative": false,
          "pk": "basketId",
          "x": 440,
          "y": 340,
          "attributes": [
            {
              "name": "basketId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "createdStamp",
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
          "name": "CheckoutInvoice",
          "isWeak": false,
          "isAssociative": false,
          "pk": "invoiceNumber",
          "x": 800,
          "y": 340,
          "attributes": [
            {
              "name": "invoiceNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "totalPayable",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "paymentStatus",
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
          "name": "Aloqa",
          "entity1": "OnlineShopper",
          "entity2": "DeliveryAddress",
          "fromEntityName": "OnlineShopper",
          "toEntityName": "DeliveryAddress",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "Aloqa",
          "entity1": "OnlineShopper",
          "entity2": "CartBasket",
          "fromEntityName": "OnlineShopper",
          "toEntityName": "CartBasket",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_3",
          "name": "Aloqa",
          "entity1": "CartBasket",
          "entity2": "CheckoutInvoice",
          "fromEntityName": "CartBasket",
          "toEntityName": "CheckoutInvoice",
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
          "name": "OnlineShopper",
          "pk": "shopperId",
          "isWeak": false
        },
        {
          "name": "DeliveryAddress",
          "pk": "addressId",
          "isWeak": false
        },
        {
          "name": "CartBasket",
          "pk": "basketId",
          "isWeak": false
        },
        {
          "name": "CheckoutInvoice",
          "pk": "invoiceNumber",
          "isWeak": false
        }
      ],
      "relationships": [
        {
          "entity1": "OnlineShopper",
          "entity2": "DeliveryAddress",
          "fromEntityName": "OnlineShopper",
          "toEntityName": "DeliveryAddress",
          "mult1": "1..1",
          "mult2": "1..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "OnlineShopper",
          "entity2": "CartBasket",
          "fromEntityName": "OnlineShopper",
          "toEntityName": "CartBasket",
          "mult1": "1..1",
          "mult2": "0..*",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "entity1": "CartBasket",
          "entity2": "CheckoutInvoice",
          "fromEntityName": "CartBasket",
          "toEntityName": "CheckoutInvoice",
          "mult1": "1..1",
          "mult2": "0..1",
          "isIdentifying": false,
          "isDirect": true
        }
      ]
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.EER_CLIENTS_151_200;
}
