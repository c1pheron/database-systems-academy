var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Zuhra Alimova",
    "clientRole": "Sayyohlik Agentligi Direktori",
    "clientAvatar": "mentor",
    "title": "Sayyoh va Ekskursiya Paketlari (TourBooking) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Tourist** va **TourPackage** o'rtasidagi assotsiativ **TourBooking** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **TourBooking** amali yo shoshilinch **UrgentTourBooking**, yoki rejali **StandardTourBooking** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'TourBooking' assotsiativ entitiyidan 'UrgentTourBooking' va 'StandardTourBooking' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Tourist",
          "pk": "passportNumber",
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true
            }
          ]
        },
        {
          "name": "TourPackage",
          "pk": "packageCode",
          "attributes": [
            {
              "name": "packageCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "TourBooking",
          "pk": "bookingRef",
          "isAssociative": true,
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true
            },
            {
              "name": "travelDate",
              "isPK": false
            },
            {
              "name": "adultCount",
              "isPK": false
            },
            {
              "name": "specialMealRequest",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Tourist",
          "entity2": "TourBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "TourPackage",
          "entity2": "TourBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Tourist",
          "pk": "passportNumber",
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true
            }
          ]
        },
        {
          "name": "TourPackage",
          "pk": "packageCode",
          "attributes": [
            {
              "name": "packageCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "TourBooking",
          "pk": "bookingRef",
          "isAssociative": true,
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true
            },
            {
              "name": "travelDate",
              "isPK": false
            },
            {
              "name": "adultCount",
              "isPK": false
            },
            {
              "name": "specialMealRequest",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Tourist",
          "entity2": "TourBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "TourPackage",
          "entity2": "TourBooking",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "TourBooking",
        "subs": [
          {
            "name": "UrgentTourBooking",
            "attributes": []
          },
          {
            "name": "StandardTourBooking",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Doniyor Karimov",
    "clientRole": "Musiqa Produseri",
    "clientAvatar": "mentor",
    "title": "Musiqachi va Audio Trek Hamkorligi (TrackContribution) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Musician** va **Track** o'rtasidagi assotsiativ **TrackContribution** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **TrackContribution** amali yo shoshilinch **UrgentTrackContribution**, yoki rejali **StandardTrackContribution** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'TrackContribution' assotsiativ entitiyidan 'UrgentTrackContribution' va 'StandardTrackContribution' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Musician",
          "pk": "artistId",
          "attributes": [
            {
              "name": "artistId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Track",
          "pk": "isrcCode",
          "attributes": [
            {
              "name": "isrcCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "TrackContribution",
          "pk": "contribId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "contribId",
              "isPK": true
            },
            {
              "name": "roleType",
              "isPK": false
            },
            {
              "name": "royaltySplitRatio",
              "isPK": false
            },
            {
              "name": "recordingStudio",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Musician",
          "entity2": "TrackContribution",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Track",
          "entity2": "TrackContribution",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Musician",
          "pk": "artistId",
          "attributes": [
            {
              "name": "artistId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Track",
          "pk": "isrcCode",
          "attributes": [
            {
              "name": "isrcCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "TrackContribution",
          "pk": "contribId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "contribId",
              "isPK": true
            },
            {
              "name": "roleType",
              "isPK": false
            },
            {
              "name": "royaltySplitRatio",
              "isPK": false
            },
            {
              "name": "recordingStudio",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Musician",
          "entity2": "TrackContribution",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Track",
          "entity2": "TrackContribution",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "TrackContribution",
        "subs": [
          {
            "name": "UrgentTrackContribution",
            "attributes": []
          },
          {
            "name": "StandardTrackContribution",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Nodira Qosimova",
    "clientRole": "Kasting Direktori",
    "clientAvatar": "mentor",
    "title": "Aktyor va Film Kasting Shartnomasi (CastingContract) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Actor** va **Film** o'rtasidagi assotsiativ **CastingContract** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **CastingContract** amali yo shoshilinch **UrgentCastingContract**, yoki rejali **StandardCastingContract** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'CastingContract' assotsiativ entitiyidan 'UrgentCastingContract' va 'StandardCastingContract' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Actor",
          "pk": "actorCardId",
          "attributes": [
            {
              "name": "actorCardId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Film",
          "pk": "filmCode",
          "attributes": [
            {
              "name": "filmCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "CastingContract",
          "pk": "contractNo",
          "isAssociative": true,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true
            },
            {
              "name": "characterName",
              "isPK": false
            },
            {
              "name": "compensationSum",
              "isPK": false
            },
            {
              "name": "isLeadRole",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Actor",
          "entity2": "CastingContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Film",
          "entity2": "CastingContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Actor",
          "pk": "actorCardId",
          "attributes": [
            {
              "name": "actorCardId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Film",
          "pk": "filmCode",
          "attributes": [
            {
              "name": "filmCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "CastingContract",
          "pk": "contractNo",
          "isAssociative": true,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true
            },
            {
              "name": "characterName",
              "isPK": false
            },
            {
              "name": "compensationSum",
              "isPK": false
            },
            {
              "name": "isLeadRole",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Actor",
          "entity2": "CastingContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Film",
          "entity2": "CastingContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "CastingContract",
        "subs": [
          {
            "name": "UrgentCastingContract",
            "attributes": []
          },
          {
            "name": "StandardCastingContract",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Ilhom Sobirov",
    "clientRole": "Logistika Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Yuk Mashinasi va Tranzit Yo'nalishi (DeliveryTrip) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Truck** va **Route** o'rtasidagi assotsiativ **DeliveryTrip** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **DeliveryTrip** amali yo shoshilinch **UrgentDeliveryTrip**, yoki rejali **StandardDeliveryTrip** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'DeliveryTrip' assotsiativ entitiyidan 'UrgentDeliveryTrip' va 'StandardDeliveryTrip' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Truck",
          "pk": "truckPlate",
          "attributes": [
            {
              "name": "truckPlate",
              "isPK": true
            }
          ]
        },
        {
          "name": "Route",
          "pk": "routeId",
          "attributes": [
            {
              "name": "routeId",
              "isPK": true
            }
          ]
        },
        {
          "name": "DeliveryTrip",
          "pk": "tripTicketNo",
          "isAssociative": true,
          "attributes": [
            {
              "name": "tripTicketNo",
              "isPK": true
            },
            {
              "name": "dispatchTime",
              "isPK": false
            },
            {
              "name": "fuelLitersUsed",
              "isPK": false
            },
            {
              "name": "driverStaffId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Truck",
          "entity2": "DeliveryTrip",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Route",
          "entity2": "DeliveryTrip",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Truck",
          "pk": "truckPlate",
          "attributes": [
            {
              "name": "truckPlate",
              "isPK": true
            }
          ]
        },
        {
          "name": "Route",
          "pk": "routeId",
          "attributes": [
            {
              "name": "routeId",
              "isPK": true
            }
          ]
        },
        {
          "name": "DeliveryTrip",
          "pk": "tripTicketNo",
          "isAssociative": true,
          "attributes": [
            {
              "name": "tripTicketNo",
              "isPK": true
            },
            {
              "name": "dispatchTime",
              "isPK": false
            },
            {
              "name": "fuelLitersUsed",
              "isPK": false
            },
            {
              "name": "driverStaffId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Truck",
          "entity2": "DeliveryTrip",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Route",
          "entity2": "DeliveryTrip",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "DeliveryTrip",
        "subs": [
          {
            "name": "UrgentDeliveryTrip",
            "attributes": []
          },
          {
            "name": "StandardDeliveryTrip",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "G'ayrat Normatov",
    "clientRole": "Bosh Texnolog",
    "clientAvatar": "mentor",
    "title": "Tayyor Mahsulot va Xomashyo Komponentlari (BillOfMaterial) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Product** va **RawMaterial** o'rtasidagi assotsiativ **BillOfMaterial** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **BillOfMaterial** amali yo shoshilinch **UrgentBillOfMaterial**, yoki rejali **StandardBillOfMaterial** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'BillOfMaterial' assotsiativ entitiyidan 'UrgentBillOfMaterial' va 'StandardBillOfMaterial' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Product",
          "pk": "productNo",
          "attributes": [
            {
              "name": "productNo",
              "isPK": true
            }
          ]
        },
        {
          "name": "RawMaterial",
          "pk": "materialCode",
          "attributes": [
            {
              "name": "materialCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "BillOfMaterial",
          "pk": "bomItemId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "bomItemId",
              "isPK": true
            },
            {
              "name": "requiredQuantity",
              "isPK": false
            },
            {
              "name": "wastageTolerancePercent",
              "isPK": false
            },
            {
              "name": "assemblySequenceNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Product",
          "entity2": "BillOfMaterial",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "RawMaterial",
          "entity2": "BillOfMaterial",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Product",
          "pk": "productNo",
          "attributes": [
            {
              "name": "productNo",
              "isPK": true
            }
          ]
        },
        {
          "name": "RawMaterial",
          "pk": "materialCode",
          "attributes": [
            {
              "name": "materialCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "BillOfMaterial",
          "pk": "bomItemId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "bomItemId",
              "isPK": true
            },
            {
              "name": "requiredQuantity",
              "isPK": false
            },
            {
              "name": "wastageTolerancePercent",
              "isPK": false
            },
            {
              "name": "assemblySequenceNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Product",
          "entity2": "BillOfMaterial",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "RawMaterial",
          "entity2": "BillOfMaterial",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "BillOfMaterial",
        "subs": [
          {
            "name": "UrgentBillOfMaterial",
            "attributes": []
          },
          {
            "name": "StandardBillOfMaterial",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Saida Mirzayeva",
    "clientRole": "Konferensiya Tashkilotchisi",
    "clientAvatar": "mentor",
    "title": "Konferensiya Ishtirokchisi va Seminar Sessiyalari (SessionRegistration) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Delegate** va **WorkshopSession** o'rtasidagi assotsiativ **SessionRegistration** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **SessionRegistration** amali yo shoshilinch **UrgentSessionRegistration**, yoki rejali **StandardSessionRegistration** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'SessionRegistration' assotsiativ entitiyidan 'UrgentSessionRegistration' va 'StandardSessionRegistration' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Delegate",
          "pk": "badgeId",
          "attributes": [
            {
              "name": "badgeId",
              "isPK": true
            }
          ]
        },
        {
          "name": "WorkshopSession",
          "pk": "sessionCode",
          "attributes": [
            {
              "name": "sessionCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "SessionRegistration",
          "pk": "regTicketId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "regTicketId",
              "isPK": true
            },
            {
              "name": "registeredAt",
              "isPK": false
            },
            {
              "name": "attendedAttendance",
              "isPK": false
            },
            {
              "name": "feedbackScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Delegate",
          "entity2": "SessionRegistration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "WorkshopSession",
          "entity2": "SessionRegistration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Delegate",
          "pk": "badgeId",
          "attributes": [
            {
              "name": "badgeId",
              "isPK": true
            }
          ]
        },
        {
          "name": "WorkshopSession",
          "pk": "sessionCode",
          "attributes": [
            {
              "name": "sessionCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "SessionRegistration",
          "pk": "regTicketId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "regTicketId",
              "isPK": true
            },
            {
              "name": "registeredAt",
              "isPK": false
            },
            {
              "name": "attendedAttendance",
              "isPK": false
            },
            {
              "name": "feedbackScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Delegate",
          "entity2": "SessionRegistration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "WorkshopSession",
          "entity2": "SessionRegistration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "SessionRegistration",
        "subs": [
          {
            "name": "UrgentSessionRegistration",
            "attributes": []
          },
          {
            "name": "StandardSessionRegistration",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Farrux Yusupov",
    "clientRole": "Bojxona Bosh Nazoratchisi",
    "clientAvatar": "mentor",
    "title": "Eksportchi Korxona va Bojxona Nazorati Posti (CustomsDeclaration) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Exporter** va **CustomsPost** o'rtasidagi assotsiativ **CustomsDeclaration** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **CustomsDeclaration** amali yo shoshilinch **UrgentCustomsDeclaration**, yoki rejali **StandardCustomsDeclaration** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'CustomsDeclaration' assotsiativ entitiyidan 'UrgentCustomsDeclaration' va 'StandardCustomsDeclaration' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Exporter",
          "pk": "exporterInn",
          "attributes": [
            {
              "name": "exporterInn",
              "isPK": true
            }
          ]
        },
        {
          "name": "CustomsPost",
          "pk": "postCode",
          "attributes": [
            {
              "name": "postCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "CustomsDeclaration",
          "pk": "gtdNumber",
          "isAssociative": true,
          "attributes": [
            {
              "name": "gtdNumber",
              "isPK": true
            },
            {
              "name": "cargoInvoiceSum",
              "isPK": false
            },
            {
              "name": "customsDutyPaid",
              "isPK": false
            },
            {
              "name": "clearanceDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Exporter",
          "entity2": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "CustomsPost",
          "entity2": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Exporter",
          "pk": "exporterInn",
          "attributes": [
            {
              "name": "exporterInn",
              "isPK": true
            }
          ]
        },
        {
          "name": "CustomsPost",
          "pk": "postCode",
          "attributes": [
            {
              "name": "postCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "CustomsDeclaration",
          "pk": "gtdNumber",
          "isAssociative": true,
          "attributes": [
            {
              "name": "gtdNumber",
              "isPK": true
            },
            {
              "name": "cargoInvoiceSum",
              "isPK": false
            },
            {
              "name": "customsDutyPaid",
              "isPK": false
            },
            {
              "name": "clearanceDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Exporter",
          "entity2": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "CustomsPost",
          "entity2": "CustomsDeclaration",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "CustomsDeclaration",
        "subs": [
          {
            "name": "UrgentCustomsDeclaration",
            "attributes": []
          },
          {
            "name": "StandardCustomsDeclaration",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Nilufar Jo'rayeva",
    "clientRole": "Bosh Redaktor",
    "clientAvatar": "mentor",
    "title": "Yangilik Maqolasi va Tematik Teglar (ArticleTagMap) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Article** va **ContentTag** o'rtasidagi assotsiativ **ArticleTagMap** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **ArticleTagMap** amali yo shoshilinch **UrgentArticleTagMap**, yoki rejali **StandardArticleTagMap** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'ArticleTagMap' assotsiativ entitiyidan 'UrgentArticleTagMap' va 'StandardArticleTagMap' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Article",
          "pk": "articleSlug",
          "attributes": [
            {
              "name": "articleSlug",
              "isPK": true
            }
          ]
        },
        {
          "name": "ContentTag",
          "pk": "tagId",
          "attributes": [
            {
              "name": "tagId",
              "isPK": true
            }
          ]
        },
        {
          "name": "ArticleTagMap",
          "pk": "mappingId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "mappingId",
              "isPK": true
            },
            {
              "name": "attachedOrder",
              "isPK": false
            },
            {
              "name": "autoSuggestedByAi",
              "isPK": false
            },
            {
              "name": "relevanceScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Article",
          "entity2": "ArticleTagMap",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "ContentTag",
          "entity2": "ArticleTagMap",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Article",
          "pk": "articleSlug",
          "attributes": [
            {
              "name": "articleSlug",
              "isPK": true
            }
          ]
        },
        {
          "name": "ContentTag",
          "pk": "tagId",
          "attributes": [
            {
              "name": "tagId",
              "isPK": true
            }
          ]
        },
        {
          "name": "ArticleTagMap",
          "pk": "mappingId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "mappingId",
              "isPK": true
            },
            {
              "name": "attachedOrder",
              "isPK": false
            },
            {
              "name": "autoSuggestedByAi",
              "isPK": false
            },
            {
              "name": "relevanceScore",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Article",
          "entity2": "ArticleTagMap",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "ContentTag",
          "entity2": "ArticleTagMap",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "ArticleTagMap",
        "subs": [
          {
            "name": "UrgentArticleTagMap",
            "attributes": []
          },
          {
            "name": "StandardArticleTagMap",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Sanjar Fayziyev",
    "clientRole": "O'quv Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "O'qituvchi va O'quv Xonasi Dars Jadvali (LessonSchedule) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Instructor** va **Classroom** o'rtasidagi assotsiativ **LessonSchedule** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **LessonSchedule** amali yo shoshilinch **UrgentLessonSchedule**, yoki rejali **StandardLessonSchedule** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'LessonSchedule' assotsiativ entitiyidan 'UrgentLessonSchedule' va 'StandardLessonSchedule' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Instructor",
          "pk": "tutorId",
          "attributes": [
            {
              "name": "tutorId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Classroom",
          "pk": "roomCode",
          "attributes": [
            {
              "name": "roomCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "LessonSchedule",
          "pk": "scheduleEntryId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "scheduleEntryId",
              "isPK": true
            },
            {
              "name": "dayOfWeek",
              "isPK": false
            },
            {
              "name": "lessonPeriod",
              "isPK": false
            },
            {
              "name": "studyGroupId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Instructor",
          "entity2": "LessonSchedule",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Classroom",
          "entity2": "LessonSchedule",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Instructor",
          "pk": "tutorId",
          "attributes": [
            {
              "name": "tutorId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Classroom",
          "pk": "roomCode",
          "attributes": [
            {
              "name": "roomCode",
              "isPK": true
            }
          ]
        },
        {
          "name": "LessonSchedule",
          "pk": "scheduleEntryId",
          "isAssociative": true,
          "attributes": [
            {
              "name": "scheduleEntryId",
              "isPK": true
            },
            {
              "name": "dayOfWeek",
              "isPK": false
            },
            {
              "name": "lessonPeriod",
              "isPK": false
            },
            {
              "name": "studyGroupId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Instructor",
          "entity2": "LessonSchedule",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Classroom",
          "entity2": "LessonSchedule",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "LessonSchedule",
        "subs": [
          {
            "name": "UrgentLessonSchedule",
            "attributes": []
          },
          {
            "name": "StandardLessonSchedule",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "4-Qavat • EER Kengaytirish",
    "clientName": "Shohruh Vohidov",
    "clientRole": "Ta'minot Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Chakana Savdo Tarmog'i va Dilerlik Shartnomasi (SupplyContract) (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Retailer** va **Supplier** o'rtasidagi assotsiativ **SupplyContract** entitiysi xizmat darajalari bo'yicha ixtisoslashtirilmoqda.\n\nHar bir **SupplyContract** amali yo shoshilinch **UrgentSupplyContract**, yoki rejali **StandardSupplyContract** toifasiga mansub bo'ladi ({Mandatory, Or}).\n\nMavjud ko'pga-ko'p bog'liqlik saqlangan holda oraliq entitiy EER darajasiga ko'tariladi.",
    "instruction": "'SupplyContract' assotsiativ entitiyidan 'UrgentSupplyContract' va 'StandardSupplyContract' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Retailer",
          "pk": "storeChainId",
          "attributes": [
            {
              "name": "storeChainId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Supplier",
          "pk": "supplierInn",
          "attributes": [
            {
              "name": "supplierInn",
              "isPK": true
            }
          ]
        },
        {
          "name": "SupplyContract",
          "pk": "contractDocNo",
          "isAssociative": true,
          "attributes": [
            {
              "name": "contractDocNo",
              "isPK": true
            },
            {
              "name": "monthlyOrderMinimum",
              "isPK": false
            },
            {
              "name": "paymentTermDays",
              "isPK": false
            },
            {
              "name": "penaltyRatePercent",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Retailer",
          "entity2": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Supplier",
          "entity2": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Retailer",
          "pk": "storeChainId",
          "attributes": [
            {
              "name": "storeChainId",
              "isPK": true
            }
          ]
        },
        {
          "name": "Supplier",
          "pk": "supplierInn",
          "attributes": [
            {
              "name": "supplierInn",
              "isPK": true
            }
          ]
        },
        {
          "name": "SupplyContract",
          "pk": "contractDocNo",
          "isAssociative": true,
          "attributes": [
            {
              "name": "contractDocNo",
              "isPK": true
            },
            {
              "name": "monthlyOrderMinimum",
              "isPK": false
            },
            {
              "name": "paymentTermDays",
              "isPK": false
            },
            {
              "name": "penaltyRatePercent",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Retailer",
          "entity2": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "InvolvedIn"
        },
        {
          "entity1": "Supplier",
          "entity2": "SupplyContract",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "SubjectOf"
        }
      ],
      "subclasses": {
        "superclass": "SupplyContract",
        "subs": [
          {
            "name": "UrgentSupplyContract",
            "attributes": []
          },
          {
            "name": "StandardSupplyContract",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Zulfiya Karimova",
    "clientRole": "Xonalar Menejeri",
    "clientAvatar": "mentor",
    "title": "Mehmonxona va Xonalar (Zaif Entitiy) (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **Hotel** va uning zaif entitiysi **Room** modeli kengaytirilmoqda.\n\nZaif entitiy **Room** ning o'zi ikkita toifaga ajratiladi: **PrimaryRoom** va **SecondaryRoom** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'Room' entitiysidan 'PrimaryRoom' va 'SecondaryRoom' subklasslarini {Mandatory, Or} bilan ajrating.",
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
              "name": "city",
              "isPK": false
            }
          ]
        },
        {
          "name": "Room",
          "pk": "roomNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "roomNo",
              "isPartialKey": true
            },
            {
              "name": "bedCount",
              "isPK": false
            },
            {
              "name": "floorNo",
              "isPK": false
            },
            {
              "name": "dailyPrice",
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
          "name": "HasRoom",
          "isIdentifying": true
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
              "name": "city",
              "isPK": false
            }
          ]
        },
        {
          "name": "Room",
          "pk": "roomNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "roomNo",
              "isPartialKey": true
            },
            {
              "name": "bedCount",
              "isPK": false
            },
            {
              "name": "floorNo",
              "isPK": false
            },
            {
              "name": "dailyPrice",
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
          "name": "HasRoom",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "Room",
        "subs": [
          {
            "name": "PrimaryRoom",
            "attributes": []
          },
          {
            "name": "SecondaryRoom",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Rustam Mahmudov",
    "clientRole": "Bino Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Biznes Markaz Binosi va Qavatlari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **Building** va uning zaif entitiysi **BuildingFloor** modeli kengaytirilmoqda.\n\nZaif entitiy **BuildingFloor** ning o'zi ikkita toifaga ajratiladi: **PrimaryBuildingFloor** va **SecondaryBuildingFloor** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'BuildingFloor' entitiysidan 'PrimaryBuildingFloor' va 'SecondaryBuildingFloor' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Building",
          "pk": "buildingId",
          "attributes": [
            {
              "name": "buildingId",
              "isPK": true
            },
            {
              "name": "buildingName",
              "isPK": false
            },
            {
              "name": "streetAddress",
              "isPK": false
            },
            {
              "name": "totalFloors",
              "isPK": false
            }
          ]
        },
        {
          "name": "BuildingFloor",
          "pk": "floorNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "floorNo",
              "isPartialKey": true
            },
            {
              "name": "emergencyExitCount",
              "isPK": false
            },
            {
              "name": "usableAreaSqm",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Building",
          "entity2": "BuildingFloor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ContainsFloor",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Building",
          "pk": "buildingId",
          "attributes": [
            {
              "name": "buildingId",
              "isPK": true
            },
            {
              "name": "buildingName",
              "isPK": false
            },
            {
              "name": "streetAddress",
              "isPK": false
            },
            {
              "name": "totalFloors",
              "isPK": false
            }
          ]
        },
        {
          "name": "BuildingFloor",
          "pk": "floorNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "floorNo",
              "isPartialKey": true
            },
            {
              "name": "emergencyExitCount",
              "isPK": false
            },
            {
              "name": "usableAreaSqm",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Building",
          "entity2": "BuildingFloor",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ContainsFloor",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "BuildingFloor",
        "subs": [
          {
            "name": "PrimaryBuildingFloor",
            "attributes": []
          },
          {
            "name": "SecondaryBuildingFloor",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Nargiza Sodiqova",
    "clientRole": "HR Ijtimoiy Himoya Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimi va Qaramog'idagilar (Dependent) (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **Employee** va uning zaif entitiysi **Dependent** modeli kengaytirilmoqda.\n\nZaif entitiy **Dependent** ning o'zi ikkita toifaga ajratiladi: **PrimaryDependent** va **SecondaryDependent** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'Dependent' entitiysidan 'PrimaryDependent' va 'SecondaryDependent' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "empName",
              "isPK": false
            },
            {
              "name": "department",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        },
        {
          "name": "Dependent",
          "pk": "depName",
          "isWeak": true,
          "attributes": [
            {
              "name": "depName",
              "isPartialKey": true
            },
            {
              "name": "relationshipType",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            },
            {
              "name": "gender",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Dependent",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "HasDependent",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "empName",
              "isPK": false
            },
            {
              "name": "department",
              "isPK": false
            },
            {
              "name": "salary",
              "isPK": false
            }
          ]
        },
        {
          "name": "Dependent",
          "pk": "depName",
          "isWeak": true,
          "attributes": [
            {
              "name": "depName",
              "isPartialKey": true
            },
            {
              "name": "relationshipType",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            },
            {
              "name": "gender",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Employee",
          "entity2": "Dependent",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "HasDependent",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "Dependent",
        "subs": [
          {
            "name": "PrimaryDependent",
            "attributes": []
          },
          {
            "name": "SecondaryDependent",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Mansur Aliyev",
    "clientRole": "Fond Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Kitob Asari va Uning Fizik Nusxalari (BookCopy) (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **BookTitle** va uning zaif entitiysi **BookCopy** modeli kengaytirilmoqda.\n\nZaif entitiy **BookCopy** ning o'zi ikkita toifaga ajratiladi: **PrimaryBookCopy** va **SecondaryBookCopy** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'BookCopy' entitiysidan 'PrimaryBookCopy' va 'SecondaryBookCopy' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BookTitle",
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
              "name": "editionYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookCopy",
          "pk": "copyNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "copyNo",
              "isPartialKey": true
            },
            {
              "name": "conditionStatus",
              "isPK": false
            },
            {
              "name": "shelfBay",
              "isPK": false
            },
            {
              "name": "isAvailable",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BookTitle",
          "entity2": "BookCopy",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HasCopy",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "BookTitle",
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
              "name": "editionYear",
              "isPK": false
            }
          ]
        },
        {
          "name": "BookCopy",
          "pk": "copyNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "copyNo",
              "isPartialKey": true
            },
            {
              "name": "conditionStatus",
              "isPK": false
            },
            {
              "name": "shelfBay",
              "isPK": false
            },
            {
              "name": "isAvailable",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BookTitle",
          "entity2": "BookCopy",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HasCopy",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "BookCopy",
        "subs": [
          {
            "name": "PrimaryBookCopy",
            "attributes": []
          },
          {
            "name": "SecondaryBookCopy",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Alisher Toirov",
    "clientRole": "Audit Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Hisobi va Tranzaksiya Yozuvlari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **BankAccount** va uning zaif entitiysi **AccountTransaction** modeli kengaytirilmoqda.\n\nZaif entitiy **AccountTransaction** ning o'zi ikkita toifaga ajratiladi: **PrimaryAccountTransaction** va **SecondaryAccountTransaction** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'AccountTransaction' entitiysidan 'PrimaryAccountTransaction' va 'SecondaryAccountTransaction' subklasslarini {Mandatory, Or} bilan ajrating.",
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
              "name": "holderName",
              "isPK": false
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
          "name": "AccountTransaction",
          "pk": "txSeqNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "txSeqNo",
              "isPartialKey": true
            },
            {
              "name": "txAmount",
              "isPK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false
            },
            {
              "name": "terminalCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BankAccount",
          "entity2": "AccountTransaction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "LogsTx",
          "isIdentifying": true
        }
      ]
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
              "name": "holderName",
              "isPK": false
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
          "name": "AccountTransaction",
          "pk": "txSeqNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "txSeqNo",
              "isPartialKey": true
            },
            {
              "name": "txAmount",
              "isPK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false
            },
            {
              "name": "terminalCode",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "BankAccount",
          "entity2": "AccountTransaction",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "LogsTx",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "AccountTransaction",
        "subs": [
          {
            "name": "PrimaryAccountTransaction",
            "attributes": []
          },
          {
            "name": "SecondaryAccountTransaction",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Oleg Petrov",
    "clientRole": "Parvoz Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Aviaparvoz Reysi va Parvoz Chiptalari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **FlightSchedule** va uning zaif entitiysi **BoardingPass** modeli kengaytirilmoqda.\n\nZaif entitiy **BoardingPass** ning o'zi ikkita toifaga ajratiladi: **PrimaryBoardingPass** va **SecondaryBoardingPass** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'BoardingPass' entitiysidan 'PrimaryBoardingPass' va 'SecondaryBoardingPass' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
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
              "name": "depTime",
              "isPK": false
            }
          ]
        },
        {
          "name": "BoardingPass",
          "pk": "seatNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "seatNo",
              "isPartialKey": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "gateNumber",
              "isPK": false
            },
            {
              "name": "boardingGroup",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FlightSchedule",
          "entity2": "BoardingPass",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "IssuesPass",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
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
              "name": "depTime",
              "isPK": false
            }
          ]
        },
        {
          "name": "BoardingPass",
          "pk": "seatNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "seatNo",
              "isPartialKey": true
            },
            {
              "name": "passengerName",
              "isPK": false
            },
            {
              "name": "gateNumber",
              "isPK": false
            },
            {
              "name": "boardingGroup",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FlightSchedule",
          "entity2": "BoardingPass",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "IssuesPass",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "BoardingPass",
        "subs": [
          {
            "name": "PrimaryBoardingPass",
            "attributes": []
          },
          {
            "name": "SecondaryBoardingPass",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Sherzod Qodirov",
    "clientRole": "Uy-Joy Boshqarmasi",
    "clientAvatar": "mentor",
    "title": "Turar-Joy Binosi va Kvartiralar Reyestri (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **ApartmentComplex** va uning zaif entitiysi **FlatUnit** modeli kengaytirilmoqda.\n\nZaif entitiy **FlatUnit** ning o'zi ikkita toifaga ajratiladi: **PrimaryFlatUnit** va **SecondaryFlatUnit** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'FlatUnit' entitiysidan 'PrimaryFlatUnit' va 'SecondaryFlatUnit' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ApartmentComplex",
          "pk": "complexId",
          "attributes": [
            {
              "name": "complexId",
              "isPK": true
            },
            {
              "name": "complexName",
              "isPK": false
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "blockLetter",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlatUnit",
          "pk": "flatNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "flatNo",
              "isPartialKey": true
            },
            {
              "name": "roomsCount",
              "isPK": false
            },
            {
              "name": "areaSqm",
              "isPK": false
            },
            {
              "name": "floorLevel",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ApartmentComplex",
          "entity2": "FlatUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ComprisesFlat",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ApartmentComplex",
          "pk": "complexId",
          "attributes": [
            {
              "name": "complexId",
              "isPK": true
            },
            {
              "name": "complexName",
              "isPK": false
            },
            {
              "name": "street",
              "isPK": false
            },
            {
              "name": "blockLetter",
              "isPK": false
            }
          ]
        },
        {
          "name": "FlatUnit",
          "pk": "flatNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "flatNo",
              "isPartialKey": true
            },
            {
              "name": "roomsCount",
              "isPK": false
            },
            {
              "name": "areaSqm",
              "isPK": false
            },
            {
              "name": "floorLevel",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ApartmentComplex",
          "entity2": "FlatUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ComprisesFlat",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "FlatUnit",
        "subs": [
          {
            "name": "PrimaryFlatUnit",
            "attributes": []
          },
          {
            "name": "SecondaryFlatUnit",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Kamola Umarova",
    "clientRole": "Sifat Nazorati Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Dori Formulari va Ishlab Chiqarish Partiyalari (Batch) (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **DrugFormula** va uning zaif entitiysi **BatchLot** modeli kengaytirilmoqda.\n\nZaif entitiy **BatchLot** ning o'zi ikkita toifaga ajratiladi: **PrimaryBatchLot** va **SecondaryBatchLot** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'BatchLot' entitiysidan 'PrimaryBatchLot' va 'SecondaryBatchLot' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DrugFormula",
          "pk": "formulaCode",
          "attributes": [
            {
              "name": "formulaCode",
              "isPK": true
            },
            {
              "name": "chemicalName",
              "isPK": false
            },
            {
              "name": "patentExpDate",
              "isPK": false
            },
            {
              "name": "dosageMg",
              "isPK": false
            }
          ]
        },
        {
          "name": "BatchLot",
          "pk": "lotNumber",
          "isWeak": true,
          "attributes": [
            {
              "name": "lotNumber",
              "isPartialKey": true
            },
            {
              "name": "prodDate",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "labTechStaffId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DrugFormula",
          "entity2": "BatchLot",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ProducedInLot",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "DrugFormula",
          "pk": "formulaCode",
          "attributes": [
            {
              "name": "formulaCode",
              "isPK": true
            },
            {
              "name": "chemicalName",
              "isPK": false
            },
            {
              "name": "patentExpDate",
              "isPK": false
            },
            {
              "name": "dosageMg",
              "isPK": false
            }
          ]
        },
        {
          "name": "BatchLot",
          "pk": "lotNumber",
          "isWeak": true,
          "attributes": [
            {
              "name": "lotNumber",
              "isPartialKey": true
            },
            {
              "name": "prodDate",
              "isPK": false
            },
            {
              "name": "expiryDate",
              "isPK": false
            },
            {
              "name": "labTechStaffId",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "DrugFormula",
          "entity2": "BatchLot",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ProducedInLot",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "BatchLot",
        "subs": [
          {
            "name": "PrimaryBatchLot",
            "attributes": []
          },
          {
            "name": "SecondaryBatchLot",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Jaloliddin Sobirov",
    "clientRole": "Metodist",
    "clientAvatar": "mentor",
    "title": "Onlayn Kurs va Uning Dars Modullari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **OnlineCourse** va uning zaif entitiysi **CourseLesson** modeli kengaytirilmoqda.\n\nZaif entitiy **CourseLesson** ning o'zi ikkita toifaga ajratiladi: **PrimaryCourseLesson** va **SecondaryCourseLesson** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'CourseLesson' entitiysidan 'PrimaryCourseLesson' va 'SecondaryCourseLesson' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "OnlineCourse",
          "pk": "courseId",
          "attributes": [
            {
              "name": "courseId",
              "isPK": true
            },
            {
              "name": "courseTitle",
              "isPK": false
            },
            {
              "name": "authorName",
              "isPK": false
            },
            {
              "name": "priceUsd",
              "isPK": false
            }
          ]
        },
        {
          "name": "CourseLesson",
          "pk": "lessonSeqNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "lessonSeqNo",
              "isPartialKey": true
            },
            {
              "name": "videoDurationMin",
              "isPK": false
            },
            {
              "name": "lessonTitle",
              "isPK": false
            },
            {
              "name": "isFreePreview",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "OnlineCourse",
          "entity2": "CourseLesson",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ContainsLesson",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "OnlineCourse",
          "pk": "courseId",
          "attributes": [
            {
              "name": "courseId",
              "isPK": true
            },
            {
              "name": "courseTitle",
              "isPK": false
            },
            {
              "name": "authorName",
              "isPK": false
            },
            {
              "name": "priceUsd",
              "isPK": false
            }
          ]
        },
        {
          "name": "CourseLesson",
          "pk": "lessonSeqNo",
          "isWeak": true,
          "attributes": [
            {
              "name": "lessonSeqNo",
              "isPartialKey": true
            },
            {
              "name": "videoDurationMin",
              "isPK": false
            },
            {
              "name": "lessonTitle",
              "isPK": false
            },
            {
              "name": "isFreePreview",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "OnlineCourse",
          "entity2": "CourseLesson",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ContainsLesson",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "CourseLesson",
        "subs": [
          {
            "name": "PrimaryCourseLesson",
            "attributes": []
          },
          {
            "name": "SecondaryCourseLesson",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Bahrom Rustamov",
    "clientRole": "Vagon Deposi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Poyezd Marshruti va Biriktirilgan Vagonlar (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **TrainRoute** va uning zaif entitiysi **CarriageUnit** modeli kengaytirilmoqda.\n\nZaif entitiy **CarriageUnit** ning o'zi ikkita toifaga ajratiladi: **PrimaryCarriageUnit** va **SecondaryCarriageUnit** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'CarriageUnit' entitiysidan 'PrimaryCarriageUnit' va 'SecondaryCarriageUnit' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TrainRoute",
          "pk": "trainNo",
          "attributes": [
            {
              "name": "trainNo",
              "isPK": true
            },
            {
              "name": "routeTitle",
              "isPK": false
            },
            {
              "name": "departureStation",
              "isPK": false
            },
            {
              "name": "arrivalStation",
              "isPK": false
            }
          ]
        },
        {
          "name": "CarriageUnit",
          "pk": "coachNumber",
          "isWeak": true,
          "attributes": [
            {
              "name": "coachNumber",
              "isPartialKey": true
            },
            {
              "name": "classType",
              "isPK": false
            },
            {
              "name": "berthCapacity",
              "isPK": false
            },
            {
              "name": "manufactureYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TrainRoute",
          "entity2": "CarriageUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "IncludesCarriage",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "TrainRoute",
          "pk": "trainNo",
          "attributes": [
            {
              "name": "trainNo",
              "isPK": true
            },
            {
              "name": "routeTitle",
              "isPK": false
            },
            {
              "name": "departureStation",
              "isPK": false
            },
            {
              "name": "arrivalStation",
              "isPK": false
            }
          ]
        },
        {
          "name": "CarriageUnit",
          "pk": "coachNumber",
          "isWeak": true,
          "attributes": [
            {
              "name": "coachNumber",
              "isPartialKey": true
            },
            {
              "name": "classType",
              "isPK": false
            },
            {
              "name": "berthCapacity",
              "isPK": false
            },
            {
              "name": "manufactureYear",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "TrainRoute",
          "entity2": "CarriageUnit",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "IncludesCarriage",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "CarriageUnit",
        "subs": [
          {
            "name": "PrimaryCarriageUnit",
            "attributes": []
          },
          {
            "name": "SecondaryCarriageUnit",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Dr. Nodir Fayzullayev",
    "clientRole": "Laboratoriya Mudiri",
    "clientAvatar": "mentor",
    "title": "Laboratoriya Namunasi va Tahlil Natijalari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **LabSample** va uning zaif entitiysi **TestResultItem** modeli kengaytirilmoqda.\n\nZaif entitiy **TestResultItem** ning o'zi ikkita toifaga ajratiladi: **PrimaryTestResultItem** va **SecondaryTestResultItem** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'TestResultItem' entitiysidan 'PrimaryTestResultItem' va 'SecondaryTestResultItem' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "LabSample",
          "pk": "sampleBarcode",
          "attributes": [
            {
              "name": "sampleBarcode",
              "isPK": true
            },
            {
              "name": "patientId",
              "isPK": false
            },
            {
              "name": "collectionTime",
              "isPK": false
            },
            {
              "name": "sampleType",
              "isPK": false
            }
          ]
        },
        {
          "name": "TestResultItem",
          "pk": "testMetricCode",
          "isWeak": true,
          "attributes": [
            {
              "name": "testMetricCode",
              "isPartialKey": true
            },
            {
              "name": "measuredValue",
              "isPK": false
            },
            {
              "name": "normalRange",
              "isPK": false
            },
            {
              "name": "unitMeasure",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "LabSample",
          "entity2": "TestResultItem",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "YieldsResult",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "LabSample",
          "pk": "sampleBarcode",
          "attributes": [
            {
              "name": "sampleBarcode",
              "isPK": true
            },
            {
              "name": "patientId",
              "isPK": false
            },
            {
              "name": "collectionTime",
              "isPK": false
            },
            {
              "name": "sampleType",
              "isPK": false
            }
          ]
        },
        {
          "name": "TestResultItem",
          "pk": "testMetricCode",
          "isWeak": true,
          "attributes": [
            {
              "name": "testMetricCode",
              "isPartialKey": true
            },
            {
              "name": "measuredValue",
              "isPK": false
            },
            {
              "name": "normalRange",
              "isPK": false
            },
            {
              "name": "unitMeasure",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "LabSample",
          "entity2": "TestResultItem",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "YieldsResult",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "TestResultItem",
        "subs": [
          {
            "name": "PrimaryTestResultItem",
            "attributes": []
          },
          {
            "name": "SecondaryTestResultItem",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Ixtiyor Hakimov",
    "clientRole": "Texnik Xizmat Muhandisi",
    "clientAvatar": "mentor",
    "title": "Sanoat Stanogi va Texnik Ehtiyot Qismlari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **IndustrialMachine** va uning zaif entitiysi **ComponentSlot** modeli kengaytirilmoqda.\n\nZaif entitiy **ComponentSlot** ning o'zi ikkita toifaga ajratiladi: **PrimaryComponentSlot** va **SecondaryComponentSlot** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'ComponentSlot' entitiysidan 'PrimaryComponentSlot' va 'SecondaryComponentSlot' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "IndustrialMachine",
          "pk": "machineId",
          "attributes": [
            {
              "name": "machineId",
              "isPK": true
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "installDate",
              "isPK": false
            },
            {
              "name": "powerKw",
              "isPK": false
            }
          ]
        },
        {
          "name": "ComponentSlot",
          "pk": "slotCode",
          "isWeak": true,
          "attributes": [
            {
              "name": "slotCode",
              "isPartialKey": true
            },
            {
              "name": "installedPartSerial",
              "isPK": false
            },
            {
              "name": "serviceLifeHours",
              "isPK": false
            },
            {
              "name": "lastReplaced",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "IndustrialMachine",
          "entity2": "ComponentSlot",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "FittedWith",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "IndustrialMachine",
          "pk": "machineId",
          "attributes": [
            {
              "name": "machineId",
              "isPK": true
            },
            {
              "name": "modelName",
              "isPK": false
            },
            {
              "name": "installDate",
              "isPK": false
            },
            {
              "name": "powerKw",
              "isPK": false
            }
          ]
        },
        {
          "name": "ComponentSlot",
          "pk": "slotCode",
          "isWeak": true,
          "attributes": [
            {
              "name": "slotCode",
              "isPartialKey": true
            },
            {
              "name": "installedPartSerial",
              "isPK": false
            },
            {
              "name": "serviceLifeHours",
              "isPK": false
            },
            {
              "name": "lastReplaced",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "IndustrialMachine",
          "entity2": "ComponentSlot",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "FittedWith",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "ComponentSlot",
        "subs": [
          {
            "name": "PrimaryComponentSlot",
            "attributes": []
          },
          {
            "name": "SecondaryComponentSlot",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Shoira Vohidova",
    "clientRole": "Chiptaxonalar Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Teatr Zoli va Tomoshabin O'rindiqlari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **AuditoriumHall** va uning zaif entitiysi **HallSeat** modeli kengaytirilmoqda.\n\nZaif entitiy **HallSeat** ning o'zi ikkita toifaga ajratiladi: **PrimaryHallSeat** va **SecondaryHallSeat** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'HallSeat' entitiysidan 'PrimaryHallSeat' va 'SecondaryHallSeat' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AuditoriumHall",
          "pk": "hallId",
          "attributes": [
            {
              "name": "hallId",
              "isPK": true
            },
            {
              "name": "hallName",
              "isPK": false
            },
            {
              "name": "soundAcousticGrade",
              "isPK": false
            },
            {
              "name": "screenType",
              "isPK": false
            }
          ]
        },
        {
          "name": "HallSeat",
          "pk": "seatNumber",
          "isWeak": true,
          "attributes": [
            {
              "name": "seatNumber",
              "isPartialKey": true
            },
            {
              "name": "rowLetter",
              "isPK": false
            },
            {
              "name": "seatTier",
              "isPK": false
            },
            {
              "name": "isVipZone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AuditoriumHall",
          "entity2": "HallSeat",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HasSeat",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AuditoriumHall",
          "pk": "hallId",
          "attributes": [
            {
              "name": "hallId",
              "isPK": true
            },
            {
              "name": "hallName",
              "isPK": false
            },
            {
              "name": "soundAcousticGrade",
              "isPK": false
            },
            {
              "name": "screenType",
              "isPK": false
            }
          ]
        },
        {
          "name": "HallSeat",
          "pk": "seatNumber",
          "isWeak": true,
          "attributes": [
            {
              "name": "seatNumber",
              "isPartialKey": true
            },
            {
              "name": "rowLetter",
              "isPK": false
            },
            {
              "name": "seatTier",
              "isPK": false
            },
            {
              "name": "isVipZone",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AuditoriumHall",
          "entity2": "HallSeat",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "HasSeat",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "HallSeat",
        "subs": [
          {
            "name": "PrimaryHallSeat",
            "attributes": []
          },
          {
            "name": "SecondaryHallSeat",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Farhod Mirzayev",
    "clientRole": "Mahsulot Arxitektori",
    "clientAvatar": "mentor",
    "title": "Smartfon Modeli va Qurilma Modifikatsiyalari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **SmartphoneModel** va uning zaif entitiysi **HardwareConfig** modeli kengaytirilmoqda.\n\nZaif entitiy **HardwareConfig** ning o'zi ikkita toifaga ajratiladi: **PrimaryHardwareConfig** va **SecondaryHardwareConfig** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'HardwareConfig' entitiysidan 'PrimaryHardwareConfig' va 'SecondaryHardwareConfig' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SmartphoneModel",
          "pk": "modelCode",
          "attributes": [
            {
              "name": "modelCode",
              "isPK": true
            },
            {
              "name": "marketingName",
              "isPK": false
            },
            {
              "name": "releaseYear",
              "isPK": false
            },
            {
              "name": "baseSocCpu",
              "isPK": false
            }
          ]
        },
        {
          "name": "HardwareConfig",
          "pk": "configCode",
          "isWeak": true,
          "attributes": [
            {
              "name": "configCode",
              "isPartialKey": true
            },
            {
              "name": "storageGb",
              "isPK": false
            },
            {
              "name": "ramGb",
              "isPK": false
            },
            {
              "name": "colorVariant",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SmartphoneModel",
          "entity2": "HardwareConfig",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ConfiguredAs",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SmartphoneModel",
          "pk": "modelCode",
          "attributes": [
            {
              "name": "modelCode",
              "isPK": true
            },
            {
              "name": "marketingName",
              "isPK": false
            },
            {
              "name": "releaseYear",
              "isPK": false
            },
            {
              "name": "baseSocCpu",
              "isPK": false
            }
          ]
        },
        {
          "name": "HardwareConfig",
          "pk": "configCode",
          "isWeak": true,
          "attributes": [
            {
              "name": "configCode",
              "isPartialKey": true
            },
            {
              "name": "storageGb",
              "isPK": false
            },
            {
              "name": "ramGb",
              "isPK": false
            },
            {
              "name": "colorVariant",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SmartphoneModel",
          "entity2": "HardwareConfig",
          "mult1": "1..1",
          "mult2": "1..*",
          "name": "ConfiguredAs",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "HardwareConfig",
        "subs": [
          {
            "name": "PrimaryHardwareConfig",
            "attributes": []
          },
          {
            "name": "SecondaryHardwareConfig",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "5-Qavat • EER Kengaytirish",
    "clientName": "Prof. Dilnoza Rahimova",
    "clientRole": "Ilmiy Kotib",
    "clientAvatar": "mentor",
    "title": "Ilmiy Tadqiqot Maqolasi va Ilova Fayllari (EER Bosqichi)",
    "story": "1-haftada shakllantirilgan **ResearchPaper** va uning zaif entitiysi **SupplementaryFile** modeli kengaytirilmoqda.\n\nZaif entitiy **SupplementaryFile** ning o'zi ikkita toifaga ajratiladi: **PrimarySupplementaryFile** va **SecondarySupplementaryFile** ({Mandatory, Or}). Ota obyekt bilan bog'liqlik saqlanadi.",
    "instruction": "Zaif 'SupplementaryFile' entitiysidan 'PrimarySupplementaryFile' va 'SecondarySupplementaryFile' subklasslarini {Mandatory, Or} bilan ajrating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResearchPaper",
          "pk": "doiCode",
          "attributes": [
            {
              "name": "doiCode",
              "isPK": true
            },
            {
              "name": "paperTitle",
              "isPK": false
            },
            {
              "name": "primaryAuthor",
              "isPK": false
            },
            {
              "name": "submissionDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupplementaryFile",
          "pk": "fileIndex",
          "isWeak": true,
          "attributes": [
            {
              "name": "fileIndex",
              "isPartialKey": true
            },
            {
              "name": "fileChecksum",
              "isPK": false
            },
            {
              "name": "mimeType",
              "isPK": false
            },
            {
              "name": "dataSizeBytes",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ResearchPaper",
          "entity2": "SupplementaryFile",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AccompaniedBy",
          "isIdentifying": true
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ResearchPaper",
          "pk": "doiCode",
          "attributes": [
            {
              "name": "doiCode",
              "isPK": true
            },
            {
              "name": "paperTitle",
              "isPK": false
            },
            {
              "name": "primaryAuthor",
              "isPK": false
            },
            {
              "name": "submissionDate",
              "isPK": false
            }
          ]
        },
        {
          "name": "SupplementaryFile",
          "pk": "fileIndex",
          "isWeak": true,
          "attributes": [
            {
              "name": "fileIndex",
              "isPartialKey": true
            },
            {
              "name": "fileChecksum",
              "isPK": false
            },
            {
              "name": "mimeType",
              "isPK": false
            },
            {
              "name": "dataSizeBytes",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ResearchPaper",
          "entity2": "SupplementaryFile",
          "mult1": "1..1",
          "mult2": "0..*",
          "name": "AccompaniedBy",
          "isIdentifying": true
        }
      ],
      "subclasses": {
        "superclass": "SupplementaryFile",
        "subs": [
          {
            "name": "PrimarySupplementaryFile",
            "attributes": []
          },
          {
            "name": "SecondarySupplementaryFile",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Umar Karimov",
    "clientRole": "HR Arxitektori",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimlari Boshqaruv Ierarxiyasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **Employee** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **Employee** yo rahbar **ExecutiveEmployee**, yoki oddiy ijrochi **StaffEmployee** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'Employee' superklassidan 'ExecutiveEmployee' va 'StaffEmployee' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "jobPosition",
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
          "entity1": "Employee",
          "entity2": "Employee",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "Manages",
          "role1": "supervisor",
          "role2": "supervisee"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "Employee",
          "pk": "empId",
          "attributes": [
            {
              "name": "empId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "jobPosition",
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
          "entity1": "Employee",
          "entity2": "Employee",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "Manages",
          "role1": "supervisor",
          "role2": "supervisee"
        }
      ],
      "subclasses": {
        "superclass": "Employee",
        "subs": [
          {
            "name": "ExecutiveEmployee",
            "attributes": []
          },
          {
            "name": "StaffEmployee",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Shirin Aliyeva",
    "clientRole": "Katalog Menejeri",
    "clientAvatar": "mentor",
    "title": "Onlayn Savdo Mahsulot Kategoriyalari Daraxti (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **ProductCategory** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **ProductCategory** yo rahbar **ExecutiveProductCategory**, yoki oddiy ijrochi **StaffProductCategory** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'ProductCategory' superklassidan 'ExecutiveProductCategory' va 'StaffProductCategory' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
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
        }
      ],
      "relationships": [
        {
          "entity1": "ProductCategory",
          "entity2": "ProductCategory",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "ParentCategoryOf",
          "role1": "parentCat",
          "role2": "subCat"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
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
        }
      ],
      "relationships": [
        {
          "entity1": "ProductCategory",
          "entity2": "ProductCategory",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "ParentCategoryOf",
          "role1": "parentCat",
          "role2": "subCat"
        }
      ],
      "subclasses": {
        "superclass": "ProductCategory",
        "subs": [
          {
            "name": "ExecutiveProductCategory",
            "attributes": []
          },
          {
            "name": "StaffProductCategory",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Temur Salimov",
    "clientRole": "Bosh Konstruktor",
    "clientAvatar": "mentor",
    "title": "Sanoat Detallari va Komponentlar Ierarxiyasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **PartComponent** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **PartComponent** yo rahbar **ExecutivePartComponent**, yoki oddiy ijrochi **StaffPartComponent** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'PartComponent' superklassidan 'ExecutivePartComponent' va 'StaffPartComponent' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PartComponent",
          "pk": "partNumber",
          "attributes": [
            {
              "name": "partNumber",
              "isPK": true
            },
            {
              "name": "partName",
              "isPK": false
            },
            {
              "name": "unitCost",
              "isPK": false
            },
            {
              "name": "weightKg",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PartComponent",
          "entity2": "PartComponent",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "AssembledFrom",
          "role1": "parentAssembly",
          "role2": "subComponent"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PartComponent",
          "pk": "partNumber",
          "attributes": [
            {
              "name": "partNumber",
              "isPK": true
            },
            {
              "name": "partName",
              "isPK": false
            },
            {
              "name": "unitCost",
              "isPK": false
            },
            {
              "name": "weightKg",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PartComponent",
          "entity2": "PartComponent",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "AssembledFrom",
          "role1": "parentAssembly",
          "role2": "subComponent"
        }
      ],
      "subclasses": {
        "superclass": "PartComponent",
        "subs": [
          {
            "name": "ExecutivePartComponent",
            "attributes": []
          },
          {
            "name": "StaffPartComponent",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Dr. Lola Rahimova",
    "clientRole": "O'quv-Uslubiy Boshqarma",
    "clientAvatar": "mentor",
    "title": "Universitet Fanlari va Prerekvizit Talablari (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **AcademicCourse** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **AcademicCourse** yo rahbar **ExecutiveAcademicCourse**, yoki oddiy ijrochi **StaffAcademicCourse** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'AcademicCourse' superklassidan 'ExecutiveAcademicCourse' va 'StaffAcademicCourse' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AcademicCourse",
          "pk": "courseCode",
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true
            },
            {
              "name": "courseTitle",
              "isPK": false
            },
            {
              "name": "creditUnits",
              "isPK": false
            },
            {
              "name": "level",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AcademicCourse",
          "entity2": "AcademicCourse",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "RequiresPrereq",
          "role1": "advancedCourse",
          "role2": "prerequisiteCourse"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "AcademicCourse",
          "pk": "courseCode",
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true
            },
            {
              "name": "courseTitle",
              "isPK": false
            },
            {
              "name": "creditUnits",
              "isPK": false
            },
            {
              "name": "level",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "AcademicCourse",
          "entity2": "AcademicCourse",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "RequiresPrereq",
          "role1": "advancedCourse",
          "role2": "prerequisiteCourse"
        }
      ],
      "subclasses": {
        "superclass": "AcademicCourse",
        "subs": [
          {
            "name": "ExecutiveAcademicCourse",
            "attributes": []
          },
          {
            "name": "StaffAcademicCourse",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Zulfiya Olimova",
    "clientRole": "FHDYo Mudiri",
    "clientAvatar": "mentor",
    "title": "Fuqaro va Qonuniy Nikoh Rishtasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **Citizen** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **Citizen** yo rahbar **ExecutiveCitizen**, yoki oddiy ijrochi **StaffCitizen** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'Citizen' superklassidan 'ExecutiveCitizen' va 'StaffCitizen' subklasslarini hosil qiling.",
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
              "name": "gender",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Citizen",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "MarriedTo",
          "role1": "spouseA",
          "role2": "spouseB"
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
              "name": "gender",
              "isPK": false
            },
            {
              "name": "birthDate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "Citizen",
          "entity2": "Citizen",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "MarriedTo",
          "role1": "spouseA",
          "role2": "spouseB"
        }
      ],
      "subclasses": {
        "superclass": "Citizen",
        "subs": [
          {
            "name": "ExecutiveCitizen",
            "attributes": []
          },
          {
            "name": "StaffCitizen",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Sanjar Vohidov",
    "clientRole": "Tranzit Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Tranzit Aviaparvoz Qatnovlari Zanjiri (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **FlightLeg** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **FlightLeg** yo rahbar **ExecutiveFlightLeg**, yoki oddiy ijrochi **StaffFlightLeg** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'FlightLeg' superklassidan 'ExecutiveFlightLeg' va 'StaffFlightLeg' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FlightLeg",
          "pk": "legId",
          "attributes": [
            {
              "name": "legId",
              "isPK": true
            },
            {
              "name": "routeCode",
              "isPK": false
            },
            {
              "name": "depAirport",
              "isPK": false
            },
            {
              "name": "arrAirport",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FlightLeg",
          "entity2": "FlightLeg",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "ConnectsTo",
          "role1": "inboundLeg",
          "role2": "outboundConnectingLeg"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "FlightLeg",
          "pk": "legId",
          "attributes": [
            {
              "name": "legId",
              "isPK": true
            },
            {
              "name": "routeCode",
              "isPK": false
            },
            {
              "name": "depAirport",
              "isPK": false
            },
            {
              "name": "arrAirport",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "FlightLeg",
          "entity2": "FlightLeg",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "ConnectsTo",
          "role1": "inboundLeg",
          "role2": "outboundConnectingLeg"
        }
      ],
      "subclasses": {
        "superclass": "FlightLeg",
        "subs": [
          {
            "name": "ExecutiveFlightLeg",
            "attributes": []
          },
          {
            "name": "StaffFlightLeg",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Akmal Saidov",
    "clientRole": "DevOps Arxitektori",
    "clientAvatar": "mentor",
    "title": "Dasturiy Modullar Bog'liqlik Grafigi (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **SoftwarePackage** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **SoftwarePackage** yo rahbar **ExecutiveSoftwarePackage**, yoki oddiy ijrochi **StaffSoftwarePackage** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'SoftwarePackage' superklassidan 'ExecutiveSoftwarePackage' va 'StaffSoftwarePackage' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoftwarePackage",
          "pk": "packageId",
          "attributes": [
            {
              "name": "packageId",
              "isPK": true
            },
            {
              "name": "packageName",
              "isPK": false
            },
            {
              "name": "semanticVersion",
              "isPK": false
            },
            {
              "name": "licenseType",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SoftwarePackage",
          "entity2": "SoftwarePackage",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "DependsOn",
          "role1": "dependentModule",
          "role2": "requiredDependency"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "SoftwarePackage",
          "pk": "packageId",
          "attributes": [
            {
              "name": "packageId",
              "isPK": true
            },
            {
              "name": "packageName",
              "isPK": false
            },
            {
              "name": "semanticVersion",
              "isPK": false
            },
            {
              "name": "licenseType",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "SoftwarePackage",
          "entity2": "SoftwarePackage",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "DependsOn",
          "role1": "dependentModule",
          "role2": "requiredDependency"
        }
      ],
      "subclasses": {
        "superclass": "SoftwarePackage",
        "subs": [
          {
            "name": "ExecutiveSoftwarePackage",
            "attributes": []
          },
          {
            "name": "StaffSoftwarePackage",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Grossmeyster Rustam Qodirov",
    "clientRole": "Bosh Hakam",
    "clientAvatar": "mentor",
    "title": "Shaxmat Musobaqasi Ishtirokchilar Juftligi (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **ChessMaster** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **ChessMaster** yo rahbar **ExecutiveChessMaster**, yoki oddiy ijrochi **StaffChessMaster** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'ChessMaster' superklassidan 'ExecutiveChessMaster' va 'StaffChessMaster' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ChessMaster",
          "pk": "fideId",
          "attributes": [
            {
              "name": "fideId",
              "isPK": true
            },
            {
              "name": "masterName",
              "isPK": false
            },
            {
              "name": "eloRating",
              "isPK": false
            },
            {
              "name": "federationCountry",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ChessMaster",
          "entity2": "ChessMaster",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "PlaysMatch",
          "role1": "whitePlayer",
          "role2": "blackPlayer"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "ChessMaster",
          "pk": "fideId",
          "attributes": [
            {
              "name": "fideId",
              "isPK": true
            },
            {
              "name": "masterName",
              "isPK": false
            },
            {
              "name": "eloRating",
              "isPK": false
            },
            {
              "name": "federationCountry",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "ChessMaster",
          "entity2": "ChessMaster",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "PlaysMatch",
          "role1": "whitePlayer",
          "role2": "blackPlayer"
        }
      ],
      "subclasses": {
        "superclass": "ChessMaster",
        "subs": [
          {
            "name": "ExecutiveChessMaster",
            "attributes": []
          },
          {
            "name": "StaffChessMaster",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Bobur Mahmudov",
    "clientRole": "Shajarashunos Olim",
    "clientAvatar": "mentor",
    "title": "Tarixiy Shaxslar Nasl-Nasab Shajarasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **HistoricalFigure** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **HistoricalFigure** yo rahbar **ExecutiveHistoricalFigure**, yoki oddiy ijrochi **StaffHistoricalFigure** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'HistoricalFigure' superklassidan 'ExecutiveHistoricalFigure' va 'StaffHistoricalFigure' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HistoricalFigure",
          "pk": "personId",
          "attributes": [
            {
              "name": "personId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "birthCentury",
              "isPK": false
            },
            {
              "name": "dynastyTitle",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "HistoricalFigure",
          "entity2": "HistoricalFigure",
          "mult1": "0..*",
          "mult2": "0..2",
          "name": "AncestorOf",
          "role1": "parentAncestor",
          "role2": "childDescendant"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "HistoricalFigure",
          "pk": "personId",
          "attributes": [
            {
              "name": "personId",
              "isPK": true
            },
            {
              "name": "fullName",
              "isPK": false
            },
            {
              "name": "birthCentury",
              "isPK": false
            },
            {
              "name": "dynastyTitle",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "HistoricalFigure",
          "entity2": "HistoricalFigure",
          "mult1": "0..*",
          "mult2": "0..2",
          "name": "AncestorOf",
          "role1": "parentAncestor",
          "role2": "childDescendant"
        }
      ],
      "subclasses": {
        "superclass": "HistoricalFigure",
        "subs": [
          {
            "name": "ExecutiveHistoricalFigure",
            "attributes": []
          },
          {
            "name": "StaffHistoricalFigure",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Dilorom Yusupova",
    "clientRole": "Sudya Konsultanti",
    "clientAvatar": "mentor",
    "title": "Sud Ishlari va Sud Pretsedenti Iqtiboslari (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **LegalPrecedent** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **LegalPrecedent** yo rahbar **ExecutiveLegalPrecedent**, yoki oddiy ijrochi **StaffLegalPrecedent** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'LegalPrecedent' superklassidan 'ExecutiveLegalPrecedent' va 'StaffLegalPrecedent' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "LegalPrecedent",
          "pk": "caseNo",
          "attributes": [
            {
              "name": "caseNo",
              "isPK": true
            },
            {
              "name": "verdictYear",
              "isPK": false
            },
            {
              "name": "jurisdictionCourt",
              "isPK": false
            },
            {
              "name": "lawArticle",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "LegalPrecedent",
          "entity2": "LegalPrecedent",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "CitesPrecedent",
          "role1": "currentRulingCase",
          "role2": "citedPrecedentCase"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "LegalPrecedent",
          "pk": "caseNo",
          "attributes": [
            {
              "name": "caseNo",
              "isPK": true
            },
            {
              "name": "verdictYear",
              "isPK": false
            },
            {
              "name": "jurisdictionCourt",
              "isPK": false
            },
            {
              "name": "lawArticle",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "LegalPrecedent",
          "entity2": "LegalPrecedent",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "CitesPrecedent",
          "role1": "currentRulingCase",
          "role2": "citedPrecedentCase"
        }
      ],
      "subclasses": {
        "superclass": "LegalPrecedent",
        "subs": [
          {
            "name": "ExecutiveLegalPrecedent",
            "attributes": []
          },
          {
            "name": "StaffLegalPrecedent",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Javlon Sharipov",
    "clientRole": "Ijtimoiy Graf Muhandisi",
    "clientAvatar": "mentor",
    "title": "Foydalanuvchi va Kuzatuvchilar Tarmog'i (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **NetworkUser** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **NetworkUser** yo rahbar **ExecutiveNetworkUser**, yoki oddiy ijrochi **StaffNetworkUser** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'NetworkUser' superklassidan 'ExecutiveNetworkUser' va 'StaffNetworkUser' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "NetworkUser",
          "pk": "userHandle",
          "attributes": [
            {
              "name": "userHandle",
              "isPK": true
            },
            {
              "name": "displayName",
              "isPK": false
            },
            {
              "name": "joinDate",
              "isPK": false
            },
            {
              "name": "isVerified",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "NetworkUser",
          "entity2": "NetworkUser",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "FollowsUser",
          "role1": "followerUser",
          "role2": "followedUser"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "NetworkUser",
          "pk": "userHandle",
          "attributes": [
            {
              "name": "userHandle",
              "isPK": true
            },
            {
              "name": "displayName",
              "isPK": false
            },
            {
              "name": "joinDate",
              "isPK": false
            },
            {
              "name": "isVerified",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "NetworkUser",
          "entity2": "NetworkUser",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "FollowsUser",
          "role1": "followerUser",
          "role2": "followedUser"
        }
      ],
      "subclasses": {
        "superclass": "NetworkUser",
        "subs": [
          {
            "name": "ExecutiveNetworkUser",
            "attributes": []
          },
          {
            "name": "StaffNetworkUser",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Mansur Toirov",
    "clientRole": "Korporativ Huquqshunos",
    "clientAvatar": "mentor",
    "title": "Xalqaro Xolding va Sho''ba Korxonalari (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **CorporateEnterprise** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **CorporateEnterprise** yo rahbar **ExecutiveCorporateEnterprise**, yoki oddiy ijrochi **StaffCorporateEnterprise** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'CorporateEnterprise' superklassidan 'ExecutiveCorporateEnterprise' va 'StaffCorporateEnterprise' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CorporateEnterprise",
          "pk": "holdingId",
          "attributes": [
            {
              "name": "holdingId",
              "isPK": true
            },
            {
              "name": "corporateName",
              "isPK": false
            },
            {
              "name": "hqCountry",
              "isPK": false
            },
            {
              "name": "capitalUsd",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CorporateEnterprise",
          "entity2": "CorporateEnterprise",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "SubsidiaryOf",
          "role1": "parentHolding",
          "role2": "daughterCompany"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "CorporateEnterprise",
          "pk": "holdingId",
          "attributes": [
            {
              "name": "holdingId",
              "isPK": true
            },
            {
              "name": "corporateName",
              "isPK": false
            },
            {
              "name": "hqCountry",
              "isPK": false
            },
            {
              "name": "capitalUsd",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "CorporateEnterprise",
          "entity2": "CorporateEnterprise",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "SubsidiaryOf",
          "role1": "parentHolding",
          "role2": "daughterCompany"
        }
      ],
      "subclasses": {
        "superclass": "CorporateEnterprise",
        "subs": [
          {
            "name": "ExecutiveCorporateEnterprise",
            "attributes": []
          },
          {
            "name": "StaffCorporateEnterprise",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Otabek Rustamov",
    "clientRole": "Metro Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Metro Bekatlari Ketma-ketlik Zanjiri (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **MetroStation** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **MetroStation** yo rahbar **ExecutiveMetroStation**, yoki oddiy ijrochi **StaffMetroStation** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'MetroStation' superklassidan 'ExecutiveMetroStation' va 'StaffMetroStation' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MetroStation",
          "pk": "stationCode",
          "attributes": [
            {
              "name": "stationCode",
              "isPK": true
            },
            {
              "name": "stationName",
              "isPK": false
            },
            {
              "name": "lineColor",
              "isPK": false
            },
            {
              "name": "zoneNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MetroStation",
          "entity2": "MetroStation",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "AdjacentTo",
          "role1": "precedingStop",
          "role2": "succeedingStop"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "MetroStation",
          "pk": "stationCode",
          "attributes": [
            {
              "name": "stationCode",
              "isPK": true
            },
            {
              "name": "stationName",
              "isPK": false
            },
            {
              "name": "lineColor",
              "isPK": false
            },
            {
              "name": "zoneNo",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "MetroStation",
          "entity2": "MetroStation",
          "mult1": "0..1",
          "mult2": "0..1",
          "name": "AdjacentTo",
          "role1": "precedingStop",
          "role2": "succeedingStop"
        }
      ],
      "subclasses": {
        "superclass": "MetroStation",
        "subs": [
          {
            "name": "ExecutiveMetroStation",
            "attributes": []
          },
          {
            "name": "StaffMetroStation",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Dr. Farrux Fayziyev",
    "clientRole": "Bosh Genetik",
    "clientAvatar": "mentor",
    "title": "Virus Shtammlari Mutatsiya Ierarxiyasi (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **PathogenStrain** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **PathogenStrain** yo rahbar **ExecutivePathogenStrain**, yoki oddiy ijrochi **StaffPathogenStrain** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'PathogenStrain' superklassidan 'ExecutivePathogenStrain' va 'StaffPathogenStrain' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PathogenStrain",
          "pk": "strainId",
          "attributes": [
            {
              "name": "strainId",
              "isPK": true
            },
            {
              "name": "genomeSeqHash",
              "isPK": false
            },
            {
              "name": "isolationDate",
              "isPK": false
            },
            {
              "name": "virulenceRate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PathogenStrain",
          "entity2": "PathogenStrain",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "MutatedFrom",
          "role1": "ancestralStrain",
          "role2": "mutantLineage"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "PathogenStrain",
          "pk": "strainId",
          "attributes": [
            {
              "name": "strainId",
              "isPK": true
            },
            {
              "name": "genomeSeqHash",
              "isPK": false
            },
            {
              "name": "isolationDate",
              "isPK": false
            },
            {
              "name": "virulenceRate",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "PathogenStrain",
          "entity2": "PathogenStrain",
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "MutatedFrom",
          "role1": "ancestralStrain",
          "role2": "mutantLineage"
        }
      ],
      "subclasses": {
        "superclass": "PathogenStrain",
        "subs": [
          {
            "name": "ExecutivePathogenStrain",
            "attributes": []
          },
          {
            "name": "StaffPathogenStrain",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "6-Qavat • EER Kengaytirish",
    "clientName": "Sardor Mirzayev",
    "clientRole": "Qidiruv Algoritmlari Arxitektori",
    "clientAvatar": "mentor",
    "title": "Internet Veb Sahifalari va Giperhavolalar (EER Bosqichi)",
    "story": "1-haftada yaratilgan rekursiv **WebDocument** boshqaruv modeli endi boshqaruvchilar va ijrochilarni aniq EER subklasslariga ajratishni talab qiladi.\n\nHar bir **WebDocument** yo rahbar **ExecutiveWebDocument**, yoki oddiy ijrochi **StaffWebDocument** hisoblanadi ({Mandatory, Or}). Rekursiv munosabat saqlanib qoladi.",
    "instruction": "'WebDocument' superklassidan 'ExecutiveWebDocument' va 'StaffWebDocument' subklasslarini hosil qiling.",
    "starterDiagram": {
      "entities": [
        {
          "name": "WebDocument",
          "pk": "pageUrl",
          "attributes": [
            {
              "name": "pageUrl",
              "isPK": true
            },
            {
              "name": "pageTitle",
              "isPK": false
            },
            {
              "name": "pageRankScore",
              "isPK": false
            },
            {
              "name": "lastCrawled",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "WebDocument",
          "entity2": "WebDocument",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "HyperlinksTo",
          "role1": "referringPage",
          "role2": "targetLinkedPage"
        }
      ]
    },
    "expectedDiagram": {
      "entities": [
        {
          "name": "WebDocument",
          "pk": "pageUrl",
          "attributes": [
            {
              "name": "pageUrl",
              "isPK": true
            },
            {
              "name": "pageTitle",
              "isPK": false
            },
            {
              "name": "pageRankScore",
              "isPK": false
            },
            {
              "name": "lastCrawled",
              "isPK": false
            }
          ]
        }
      ],
      "relationships": [
        {
          "entity1": "WebDocument",
          "entity2": "WebDocument",
          "mult1": "0..*",
          "mult2": "0..*",
          "name": "HyperlinksTo",
          "role1": "referringPage",
          "role2": "targetLinkedPage"
        }
      ],
      "subclasses": {
        "superclass": "WebDocument",
        "subs": [
          {
            "name": "ExecutiveWebDocument",
            "attributes": []
          },
          {
            "name": "StaffWebDocument",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Davron Salimov",
    "clientRole": "Aviapark Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Havo Kemalarini Disjoint Ixtisoslashtirish (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Aircraft** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Aviatsiya Muhandisligi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Aircraft** superklassidan ikkita maxsus subklass ajratiladi: **PassengerPlane** (`seatCount`, `entertainmentSystem`) va **CargoPlane** (`maxPayloadTons`, `cargoDoorType`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit tailNo ni meros qilib oladi.",
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
      },
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
      },
      "relationships": []
    }
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Dr. Malika Ahmedova",
    "clientRole": "Gospital Bosh Shifokori",
    "clientAvatar": "mentor",
    "title": "Gospital Bemorlari: InPatient va OutPatient (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Patient** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Klinik Gospital amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Patient** superklassidan ikkita maxsus subklass ajratiladi: **InPatient** (`bedNumber`, `admissionDate`) va **OutPatient** (`clinicVisitDate`, `doctorNotes`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit patientId ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Jahongir Vohidov",
    "clientRole": "Registrator Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Talabalar: Undergraduate va Postgraduate (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Student** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Universitet Talabalari amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Student** superklassidan ikkita maxsus subklass ajratiladi: **Undergraduate** (`highSchoolDiploma`, `creditsCompleted`) va **Postgraduate** (`bachelorDegreeNo`, `thesisTopic`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit studentId ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Sevara Karimova",
    "clientRole": "Elektron Resurslar Mudiri",
    "clientAvatar": "mentor",
    "title": "Kitoblar: EBook va PrintBook Ixtisoslashuvi (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Book** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Kutubxona Katalogi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Book** superklassidan ikkita maxsus subklass ajratiladi: **EBook** (`fileFormat`, `fileSizeBytes`) va **PrintBook** (`shelfLocation`, `coverType`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit isbn ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Ulug'bek Rustamov",
    "clientRole": "Avtopark Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Avtomobillar: ElectricVehicle va CombustionCar (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Vehicle** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Avtotransport Logistikasi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Vehicle** superklassidan ikkita maxsus subklass ajratiladi: **ElectricVehicle** (`batteryKwh`, `chargingTimeHrs`) va **CombustionCar** (`fuelTankLiters`, `emissionClass`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit vin ni meros qilib oladi.",
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
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
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
      },
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
              "name": "price",
              "isPK": false
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Nodir Salimov",
    "clientRole": "Depozit Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Hisoblari: SavingsAccount va CheckingAccount (EER Bosqichi)",
    "story": "1-haftada yaratilgan **BankAccount** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Bank Hisoblari amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **BankAccount** superklassidan ikkita maxsus subklass ajratiladi: **SavingsAccount** (`interestRatePercent`, `minBalance`) va **CheckingAccount** (`overdraftLimit`, `checkbookNo`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit accountNo ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Munira Yusupova",
    "clientRole": "Bron Qilish Menejeri",
    "clientAvatar": "mentor",
    "title": "Xonalar: StandardRoom va PresidentialSuite (EER Bosqichi)",
    "story": "1-haftada yaratilgan **HotelRoom** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Mehmonxona Joylashtirish amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **HotelRoom** superklassidan ikkita maxsus subklass ajratiladi: **StandardRoom** (`singleBedCount`, `hasBalcony`) va **PresidentialSuite** (`livingRoomCount`, `hasJacuzzi`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit roomNo ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Sanjar Qodirov",
    "clientRole": "Restoran Shef Oshpazi",
    "clientAvatar": "mentor",
    "title": "Taomnoma: VegetarianDish va MeatDish (EER Bosqichi)",
    "story": "1-haftada yaratilgan **MenuItem** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Restoran Taomnomasi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **MenuItem** superklassidan ikkita maxsus subklass ajratiladi: **VegetarianDish** (`organicCertified`, `dairyFree`) va **MeatDish** (`meatType`, `cookTimeMin`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit itemId ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Akmal Saidov",
    "clientRole": "Texnik Lider",
    "clientAvatar": "mentor",
    "title": "Muhandislar: FrontendDev va BackendDev (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Developer** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Dasturchilar Jamoasi amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Developer** superklassidan ikkita maxsus subklass ajratiladi: **FrontendDev** (`uiFramework`, `designSkillLevel`) va **BackendDev** (`dbEngine`, `cloudCertified`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit devId ni meros qilib oladi.",
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
      },
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
      },
      "relationships": []
    }
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "7-Qavat • EER Kengaytirish",
    "clientName": "Shahlo Rahimova",
    "clientRole": "Elektron Savdo Menejeri",
    "clientAvatar": "mentor",
    "title": "Mahsulotlar: DigitalProduct va PhysicalProduct (EER Bosqichi)",
    "story": "1-haftada yaratilgan **Product** modeli asosida tashkilot yangi ixtisoslashuv talablarini joriy etmoqda. Marketpleys Tovarlari amaliyotida umumiy parametrlardan tashqari har bir maxsus yo'nalish o'zining noyob xususiyatlariga ega bo'lishi shart.\n\nPolotnodagi mavjud **Product** superklassidan ikkita maxsus subklass ajratiladi: **DigitalProduct** (`downloadUrl`, `licenseKeyCount`) va **PhysicalProduct** (`dimensionsCm`, `shippingFee`).\n\nBiznes qoidalariga ko'ra, har bir obyekt majburiy ravishda ushbu ikki toifadan aynan bittasiga kirishi shart ({Mandatory, Or}). Subklasslar umumiy superklassdan birlamchi kalit sku ni meros qilib oladi.",
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
            }
          ]
        }
      ],
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
      },
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
            }
          ]
        }
      ],
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
      },
      "relationships": []
    }
  }
];
