var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Tourist va TourPackage Hamkorligi",
    "story": "Xalqaro Turizm jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Sayyoh yil davomida bir nechta sayohat paketlarini xarid qilishi mumkin, har bir sayohat paketiga esa ko'plab sayyohlar bron qiladi. Tizimda asosiy ishtirokchilar sifatida **Tourist** (passportNumber {PK}) va **TourPackage** (packageCode {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **TourBooking** (bookingRef {PK}, `travelDate`, `adultCount`, `specialMealRequest`) polotnoda aks ettiriladi.",
    "instruction": "'Tourist' va 'TourPackage' o'rtasida assotsiativ 'TourBooking' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Tourist",
          "isWeak": false,
          "isAssociative": false,
          "pk": "passportNumber",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "touristName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "citizenship",
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
          "name": "TourPackage",
          "isWeak": false,
          "isAssociative": false,
          "pk": "packageCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "packageCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destinationCity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "durationDays",
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
          "name": "TourBooking",
          "isWeak": false,
          "isAssociative": true,
          "pk": "bookingRef",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "bookingRef",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "travelDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "adultCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "specialMealRequest",
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
          "name": "InvolvedIn",
          "entity1": "Tourist",
          "entity2": "TourBooking",
          "fromEntityName": "Tourist",
          "toEntityName": "TourBooking",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "TourPackage",
          "entity2": "TourBooking",
          "fromEntityName": "TourPackage",
          "toEntityName": "TourBooking",
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
          "name": "Tourist",
          "pk": "passportNumber",
          "attributes": [
            {
              "name": "passportNumber",
              "isPK": true
            },
            {
              "name": "touristName",
              "isPK": false
            },
            {
              "name": "citizenship",
              "isPK": false
            },
            {
              "name": "phone",
              "isPK": false
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
            },
            {
              "name": "destinationCity",
              "isPK": false
            },
            {
              "name": "durationDays",
              "isPK": false
            },
            {
              "name": "basePrice",
              "isPK": false
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
    }
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Musician va Track Hamkorligi",
    "story": "Ovoz Yozish Studiyasi jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Musiqachi ko'plab audio treklarni yozishda qatnashadi, bitta musiqiy trekda esa bir nechta artistlar hamkorlik qiladi. Tizimda asosiy ishtirokchilar sifatida **Musician** (artistId {PK}) va **Track** (isrcCode {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **TrackContribution** (contribId {PK}, `roleType`, `royaltySplitRatio`, `recordingStudio`) polotnoda aks ettiriladi.",
    "instruction": "'Musician' va 'Track' o'rtasida assotsiativ 'TrackContribution' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Musician",
          "isWeak": false,
          "isAssociative": false,
          "pk": "artistId",
          "x": 90,
          "y": 160,
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
              "name": "instrument",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "genre",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Track",
          "isWeak": false,
          "isAssociative": false,
          "pk": "isrcCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "isrcCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "trackTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "durationSeconds",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bpmTempo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TrackContribution",
          "isWeak": false,
          "isAssociative": true,
          "pk": "contribId",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "contribId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roleType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "royaltySplitRatio",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "recordingStudio",
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
          "name": "InvolvedIn",
          "entity1": "Musician",
          "entity2": "TrackContribution",
          "fromEntityName": "Musician",
          "toEntityName": "TrackContribution",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "Track",
          "entity2": "TrackContribution",
          "fromEntityName": "Track",
          "toEntityName": "TrackContribution",
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
          "name": "Musician",
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
              "name": "instrument",
              "isPK": false
            },
            {
              "name": "genre",
              "isPK": false
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
            },
            {
              "name": "trackTitle",
              "isPK": false
            },
            {
              "name": "durationSeconds",
              "isPK": false
            },
            {
              "name": "bpmTempo",
              "isPK": false
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
    }
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Actor va Film Hamkorligi",
    "story": "Kinematografiya Kasting jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Aktyor bir nechta filmlarda rol ijro etishi mumkin, filmda esa ko'plab aktyorlar jamoasi suratga tushadi. Tizimda asosiy ishtirokchilar sifatida **Actor** (actorCardId {PK}) va **Film** (filmCode {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **CastingContract** (contractNo {PK}, `characterName`, `compensationSum`, `isLeadRole`) polotnoda aks ettiriladi.",
    "instruction": "'Actor' va 'Film' o'rtasida assotsiativ 'CastingContract' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Actor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "actorCardId",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "actorCardId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "realName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "agentContact",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "actingUnionId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Film",
          "isWeak": false,
          "isAssociative": false,
          "pk": "filmCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "filmCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "filmTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "producerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shootingStartYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CastingContract",
          "isWeak": false,
          "isAssociative": true,
          "pk": "contractNo",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "contractNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "characterName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "compensationSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isLeadRole",
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
          "name": "InvolvedIn",
          "entity1": "Actor",
          "entity2": "CastingContract",
          "fromEntityName": "Actor",
          "toEntityName": "CastingContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "Film",
          "entity2": "CastingContract",
          "fromEntityName": "Film",
          "toEntityName": "CastingContract",
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
          "name": "Actor",
          "pk": "actorCardId",
          "attributes": [
            {
              "name": "actorCardId",
              "isPK": true
            },
            {
              "name": "realName",
              "isPK": false
            },
            {
              "name": "agentContact",
              "isPK": false
            },
            {
              "name": "actingUnionId",
              "isPK": false
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
            },
            {
              "name": "filmTitle",
              "isPK": false
            },
            {
              "name": "producerName",
              "isPK": false
            },
            {
              "name": "shootingStartYear",
              "isPK": false
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
    }
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Truck va Route Hamkorligi",
    "story": "Magistral Marshrutlar jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Yuk furasiga turli qatnov yo'nalishlari beriladi, bitta tranzit yo'nalishida esa bir nechta furalar qatnaydi. Tizimda asosiy ishtirokchilar sifatida **Truck** (truckPlate {PK}) va **Route** (routeId {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **DeliveryTrip** (tripTicketNo {PK}, `dispatchTime`, `fuelLitersUsed`, `driverStaffId`) polotnoda aks ettiriladi.",
    "instruction": "'Truck' va 'Route' o'rtasida assotsiativ 'DeliveryTrip' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Truck",
          "isWeak": false,
          "isAssociative": false,
          "pk": "truckPlate",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "truckPlate",
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
              "name": "maxPayloadTons",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "odometerKm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "Route",
          "isWeak": false,
          "isAssociative": false,
          "pk": "routeId",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "routeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "originHub",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "destHub",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "distanceKm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "DeliveryTrip",
          "isWeak": false,
          "isAssociative": true,
          "pk": "tripTicketNo",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "tripTicketNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dispatchTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fuelLitersUsed",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "driverStaffId",
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
          "name": "InvolvedIn",
          "entity1": "Truck",
          "entity2": "DeliveryTrip",
          "fromEntityName": "Truck",
          "toEntityName": "DeliveryTrip",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "Route",
          "entity2": "DeliveryTrip",
          "fromEntityName": "Route",
          "toEntityName": "DeliveryTrip",
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
          "name": "Truck",
          "pk": "truckPlate",
          "attributes": [
            {
              "name": "truckPlate",
              "isPK": true
            },
            {
              "name": "model",
              "isPK": false
            },
            {
              "name": "maxPayloadTons",
              "isPK": false
            },
            {
              "name": "odometerKm",
              "isPK": false
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
            },
            {
              "name": "originHub",
              "isPK": false
            },
            {
              "name": "destHub",
              "isPK": false
            },
            {
              "name": "distanceKm",
              "isPK": false
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
    }
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Product va RawMaterial Hamkorligi",
    "story": "Zavod Texnologik Xaritasi jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Tayyor mahsulot bir nechta xomashyolardan yig'iladi, bir xomashyo esa turli xil mahsulotlar ishlab chiqarishda ishlatiladi. Tizimda asosiy ishtirokchilar sifatida **Product** (productNo {PK}) va **RawMaterial** (materialCode {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **BillOfMaterial** (bomItemId {PK}, `requiredQuantity`, `wastageTolerancePercent`, `assemblySequenceNo`) polotnoda aks ettiriladi.",
    "instruction": "'Product' va 'RawMaterial' o'rtasida assotsiativ 'BillOfMaterial' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Product",
          "isWeak": false,
          "isAssociative": false,
          "pk": "productNo",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "productNo",
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
              "name": "retailPrice",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "manufacturingTimeHours",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "RawMaterial",
          "isWeak": false,
          "isAssociative": false,
          "pk": "materialCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "materialCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "materialName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "unitOfMeasure",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "costPerUnit",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BillOfMaterial",
          "isWeak": false,
          "isAssociative": true,
          "pk": "bomItemId",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "bomItemId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "requiredQuantity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "wastageTolerancePercent",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "assemblySequenceNo",
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
          "name": "InvolvedIn",
          "entity1": "Product",
          "entity2": "BillOfMaterial",
          "fromEntityName": "Product",
          "toEntityName": "BillOfMaterial",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "RawMaterial",
          "entity2": "BillOfMaterial",
          "fromEntityName": "RawMaterial",
          "toEntityName": "BillOfMaterial",
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
          "name": "Product",
          "pk": "productNo",
          "attributes": [
            {
              "name": "productNo",
              "isPK": true
            },
            {
              "name": "name",
              "isPK": false
            },
            {
              "name": "retailPrice",
              "isPK": false
            },
            {
              "name": "manufacturingTimeHours",
              "isPK": false
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
            },
            {
              "name": "materialName",
              "isPK": false
            },
            {
              "name": "unitOfMeasure",
              "isPK": false
            },
            {
              "name": "costPerUnit",
              "isPK": false
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
    }
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Delegate va WorkshopSession Hamkorligi",
    "story": "Xalqaro Kongress jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Kongress delegati bir nechta mahorat darslariga qatnashishi mumkin, har bir seminarga esa ko'plab delegatlar ro'yxatdan o'tadi. Tizimda asosiy ishtirokchilar sifatida **Delegate** (badgeId {PK}) va **WorkshopSession** (sessionCode {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **SessionRegistration** (regTicketId {PK}, `registeredAt`, `attendedAttendance`, `feedbackScore`) polotnoda aks ettiriladi.",
    "instruction": "'Delegate' va 'WorkshopSession' o'rtasida assotsiativ 'SessionRegistration' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Delegate",
          "isWeak": false,
          "isAssociative": false,
          "pk": "badgeId",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "badgeId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "delegateName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "organization",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "jobPosition",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "WorkshopSession",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sessionCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "sessionCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sessionTopic",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomHall",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "speakerName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SessionRegistration",
          "isWeak": false,
          "isAssociative": true,
          "pk": "regTicketId",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "regTicketId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "registeredAt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "attendedAttendance",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "feedbackScore",
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
          "name": "InvolvedIn",
          "entity1": "Delegate",
          "entity2": "SessionRegistration",
          "fromEntityName": "Delegate",
          "toEntityName": "SessionRegistration",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "WorkshopSession",
          "entity2": "SessionRegistration",
          "fromEntityName": "WorkshopSession",
          "toEntityName": "SessionRegistration",
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
          "name": "Delegate",
          "pk": "badgeId",
          "attributes": [
            {
              "name": "badgeId",
              "isPK": true
            },
            {
              "name": "delegateName",
              "isPK": false
            },
            {
              "name": "organization",
              "isPK": false
            },
            {
              "name": "jobPosition",
              "isPK": false
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
            },
            {
              "name": "sessionTopic",
              "isPK": false
            },
            {
              "name": "roomHall",
              "isPK": false
            },
            {
              "name": "speakerName",
              "isPK": false
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
    }
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Exporter va CustomsPost Hamkorligi",
    "story": "Bojxona Deklaratsiyasi jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Eksportchi korxona o'z yuklarini turli bojxona postlari orqali o'tkazishi mumkin, postda esa minglab eksportchilar deklaratsiya topshiradi. Tizimda asosiy ishtirokchilar sifatida **Exporter** (exporterInn {PK}) va **CustomsPost** (postCode {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **CustomsDeclaration** (gtdNumber {PK}, `cargoInvoiceSum`, `customsDutyPaid`, `clearanceDate`) polotnoda aks ettiriladi.",
    "instruction": "'Exporter' va 'CustomsPost' o'rtasida assotsiativ 'CustomsDeclaration' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Exporter",
          "isWeak": false,
          "isAssociative": false,
          "pk": "exporterInn",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "exporterInn",
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
            },
            {
              "name": "licenseDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CustomsPost",
          "isWeak": false,
          "isAssociative": false,
          "pk": "postCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "postCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "postName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "borderRegion",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "terminalCapacityTons",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CustomsDeclaration",
          "isWeak": false,
          "isAssociative": true,
          "pk": "gtdNumber",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "gtdNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "cargoInvoiceSum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "customsDutyPaid",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "clearanceDate",
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
          "name": "InvolvedIn",
          "entity1": "Exporter",
          "entity2": "CustomsDeclaration",
          "fromEntityName": "Exporter",
          "toEntityName": "CustomsDeclaration",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "CustomsPost",
          "entity2": "CustomsDeclaration",
          "fromEntityName": "CustomsPost",
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
          "name": "Exporter",
          "pk": "exporterInn",
          "attributes": [
            {
              "name": "exporterInn",
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
              "name": "licenseDate",
              "isPK": false
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
            },
            {
              "name": "postName",
              "isPK": false
            },
            {
              "name": "borderRegion",
              "isPK": false
            },
            {
              "name": "terminalCapacityTons",
              "isPK": false
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
    }
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Article va ContentTag Hamkorligi",
    "story": "Raqamli OAV Portal jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Yangilik maqolasiga bir nechta tematik teglar biriktiriladi, bitta teg esa yuzlab turli maqolalarda uchraydi. Tizimda asosiy ishtirokchilar sifatida **Article** (articleSlug {PK}) va **ContentTag** (tagId {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **ArticleTagMap** (mappingId {PK}, `attachedOrder`, `autoSuggestedByAi`, `relevanceScore`) polotnoda aks ettiriladi.",
    "instruction": "'Article' va 'ContentTag' o'rtasida assotsiativ 'ArticleTagMap' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Article",
          "isWeak": false,
          "isAssociative": false,
          "pk": "articleSlug",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "articleSlug",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "headline",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "authorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "publishDateTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ContentTag",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tagId",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "tagId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tagName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "categoryTheme",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "popularityIndex",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ArticleTagMap",
          "isWeak": false,
          "isAssociative": true,
          "pk": "mappingId",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "mappingId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "attachedOrder",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "autoSuggestedByAi",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "relevanceScore",
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
          "name": "InvolvedIn",
          "entity1": "Article",
          "entity2": "ArticleTagMap",
          "fromEntityName": "Article",
          "toEntityName": "ArticleTagMap",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "ContentTag",
          "entity2": "ArticleTagMap",
          "fromEntityName": "ContentTag",
          "toEntityName": "ArticleTagMap",
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
          "name": "Article",
          "pk": "articleSlug",
          "attributes": [
            {
              "name": "articleSlug",
              "isPK": true
            },
            {
              "name": "headline",
              "isPK": false
            },
            {
              "name": "authorName",
              "isPK": false
            },
            {
              "name": "publishDateTime",
              "isPK": false
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
            },
            {
              "name": "tagName",
              "isPK": false
            },
            {
              "name": "categoryTheme",
              "isPK": false
            },
            {
              "name": "popularityIndex",
              "isPK": false
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
    }
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Instructor va Classroom Hamkorligi",
    "story": "O'quv Markazi Jadvali jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: O'qituvchi haftaning turli kunlarida turli auditoriyalarda dars beradi, bitta auditoriyada esa turli o'qituvchilar navbat bilan mashg'ulot o'tkazadi. Tizimda asosiy ishtirokchilar sifatida **Instructor** (tutorId {PK}) va **Classroom** (roomCode {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **LessonSchedule** (scheduleEntryId {PK}, `dayOfWeek`, `lessonPeriod`, `studyGroupId`) polotnoda aks ettiriladi.",
    "instruction": "'Instructor' va 'Classroom' o'rtasida assotsiativ 'LessonSchedule' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Instructor",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tutorId",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "tutorId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "tutorName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "subjectExpertise",
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
          "name": "Classroom",
          "isWeak": false,
          "isAssociative": false,
          "pk": "roomCode",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "roomCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "buildingWing",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "projectorModel",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatingCap",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "LessonSchedule",
          "isWeak": false,
          "isAssociative": true,
          "pk": "scheduleEntryId",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "scheduleEntryId",
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
              "name": "lessonPeriod",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "studyGroupId",
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
          "name": "InvolvedIn",
          "entity1": "Instructor",
          "entity2": "LessonSchedule",
          "fromEntityName": "Instructor",
          "toEntityName": "LessonSchedule",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "Classroom",
          "entity2": "LessonSchedule",
          "fromEntityName": "Classroom",
          "toEntityName": "LessonSchedule",
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
          "name": "Instructor",
          "pk": "tutorId",
          "attributes": [
            {
              "name": "tutorId",
              "isPK": true
            },
            {
              "name": "tutorName",
              "isPK": false
            },
            {
              "name": "subjectExpertise",
              "isPK": false
            },
            {
              "name": "contactPhone",
              "isPK": false
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
            },
            {
              "name": "buildingWing",
              "isPK": false
            },
            {
              "name": "projectorModel",
              "isPK": false
            },
            {
              "name": "seatingCap",
              "isPK": false
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
    }
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*)",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Retailer va Supplier Hamkorligi",
    "story": "B2B Ta'minot Shartnomalari jarayonida ikki tomonlama ko'pga-ko'p munosabatlarni hisobga olish talab etiladi: Chakana savdo tarmog'i yuzlab yetkazib beruvchilar bilan shartnoma tuzadi, yirik yetkazib beruvchi ham turli do'konlar tarmog'iga mahsulot beradi. Tizimda asosiy ishtirokchilar sifatida **Retailer** (storeChainId {PK}) va **Supplier** (supplierInn {PK}) qatnashadi. Ikki tomon o'rtasida vujudga keladigan jarayon xususiyatlarini saqlash uchun assotsiativ entitiy **SupplyContract** (contractDocNo {PK}, `monthlyOrderMinimum`, `paymentTermDays`, `penaltyRatePercent`) polotnoda aks ettiriladi.",
    "instruction": "'Retailer' va 'Supplier' o'rtasida assotsiativ 'SupplyContract' entitiysini joylashtiring, {PK} kalitlarini belgilang va bog'lanishlarni o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Retailer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "storeChainId",
          "x": 90,
          "y": 160,
          "attributes": [
            {
              "name": "storeChainId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "chainName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "outletCount",
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
          "name": "Supplier",
          "isWeak": false,
          "isAssociative": false,
          "pk": "supplierInn",
          "x": 690,
          "y": 160,
          "attributes": [
            {
              "name": "supplierInn",
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
              "name": "warehouseLocation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "reliabilityScore",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupplyContract",
          "isWeak": false,
          "isAssociative": true,
          "pk": "contractDocNo",
          "x": 390,
          "y": 160,
          "attributes": [
            {
              "name": "contractDocNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "monthlyOrderMinimum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "paymentTermDays",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "penaltyRatePercent",
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
          "name": "InvolvedIn",
          "entity1": "Retailer",
          "entity2": "SupplyContract",
          "fromEntityName": "Retailer",
          "toEntityName": "SupplyContract",
          "mult1": "",
          "mult2": "",
          "isIdentifying": false,
          "isDirect": true
        },
        {
          "id": "rel_2",
          "name": "SubjectOf",
          "entity1": "Supplier",
          "entity2": "SupplyContract",
          "fromEntityName": "Supplier",
          "toEntityName": "SupplyContract",
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
          "name": "Retailer",
          "pk": "storeChainId",
          "attributes": [
            {
              "name": "storeChainId",
              "isPK": true
            },
            {
              "name": "chainName",
              "isPK": false
            },
            {
              "name": "outletCount",
              "isPK": false
            },
            {
              "name": "cityHq",
              "isPK": false
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
            },
            {
              "name": "vendorName",
              "isPK": false
            },
            {
              "name": "warehouseLocation",
              "isPK": false
            },
            {
              "name": "reliabilityScore",
              "isPK": false
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
    }
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "Hotel va Room (Zaif Bog'liqlik)",
    "story": "Mehmonxona Xonalari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Xona mustaqil holda mavjud bo'la olmaydi; uning xona raqami faqat bitta mehmonxona binosi ichida ma'noga ega bo'lib, qisman kalit (discriminator) hisoblanadi. Tizimda kuchli ega (Owner) entitiy sifatida **Hotel** (hotelId {PK}, `hotelName`, `starRating`, `city`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **Room** bo'lib, uning qisman kaliti (discriminator / PPK) `roomNo` va boshqa atributlari: `bedCount`, `floorNo`, `dailyPrice`. Ular o'rtasida identifikatsiyalovchi **HasRoom** aloqasi o'rnatiladi.",
    "instruction": "'Hotel' kuchli entitiysini va unga qaram zaif 'Room' entitiysini chizing, 'roomNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Hotel",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hotelId",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "hotelId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hotelName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "starRating",
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
          "name": "Room",
          "isWeak": true,
          "isAssociative": false,
          "pk": "roomNo",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "roomNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bedCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorNo",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dailyPrice",
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
          "name": "HasRoom",
          "entity1": "Hotel",
          "entity2": "Room",
          "fromEntityName": "Hotel",
          "toEntityName": "Room",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 62,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "Building va BuildingFloor (Zaif Bog'liqlik)",
    "story": "Bino Qavatlari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Qavat faqat o'z binosi doirasida mavjud; qavat raqami bino identifikatorisiz global miqyosda takrorlanuvchi bo'ladi. Tizimda kuchli ega (Owner) entitiy sifatida **Building** (buildingId {PK}, `buildingName`, `streetAddress`, `totalFloors`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **BuildingFloor** bo'lib, uning qisman kaliti (discriminator / PPK) `floorNo` va boshqa atributlari: `emergencyExitCount`, `usableAreaSqm`. Ular o'rtasida identifikatsiyalovchi **ContainsFloor** aloqasi o'rnatiladi.",
    "instruction": "'Building' kuchli entitiysini va unga qaram zaif 'BuildingFloor' entitiysini chizing, 'floorNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Building",
          "isWeak": false,
          "isAssociative": false,
          "pk": "buildingId",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "buildingId",
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
              "name": "streetAddress",
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
          "name": "BuildingFloor",
          "isWeak": true,
          "isAssociative": false,
          "pk": "floorNo",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "floorNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "emergencyExitCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "usableAreaSqm",
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
          "name": "ContainsFloor",
          "entity1": "Building",
          "entity2": "BuildingFloor",
          "fromEntityName": "Building",
          "toEntityName": "BuildingFloor",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 63,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "Employee va Dependent (Zaif Bog'liqlik)",
    "story": "Xodim Qaramog'idagilar faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Qaramog'idagi oila a'zosi xodimsiz korxona sug'urta tizimida mavjud bo'la olmaydi; xodim ishdan bo'shasa uning qarindoshlari ham reyestrdan o'chiriladi. Tizimda kuchli ega (Owner) entitiy sifatida **Employee** (empId {PK}, `empName`, `department`, `salary`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **Dependent** bo'lib, uning qisman kaliti (discriminator / PPK) `depName` va boshqa atributlari: `relationshipType`, `birthDate`, `gender`. Ular o'rtasida identifikatsiyalovchi **HasDependent** aloqasi o'rnatiladi.",
    "instruction": "'Employee' kuchli entitiysini va unga qaram zaif 'Dependent' entitiysini chizing, 'depName' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "isWeak": false,
          "isAssociative": false,
          "pk": "empId",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "empId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "empName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "department",
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
          "name": "Dependent",
          "isWeak": true,
          "isAssociative": false,
          "pk": "depName",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "depName",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "relationshipType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "birthDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "gender",
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
          "name": "HasDependent",
          "entity1": "Employee",
          "entity2": "Dependent",
          "fromEntityName": "Employee",
          "toEntityName": "Dependent",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
          "mult2": "1..*",
          "name": "HasDependent",
          "isIdentifying": true
        }
      ]
    }
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "BookTitle va BookCopy (Zaif Bog'liqlik)",
    "story": "Kutubxona Nusxalari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Fizik kitob nusxasi ma'lum bir kitob asariga bog'liq; nusxa raqami (1, 2, 3.) faqat o'sha ISBN ichida ma'noga ega. Tizimda kuchli ega (Owner) entitiy sifatida **BookTitle** (isbn {PK}, `title`, `author`, `editionYear`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **BookCopy** bo'lib, uning qisman kaliti (discriminator / PPK) `copyNo` va boshqa atributlari: `conditionStatus`, `shelfBay`, `isAvailable`. Ular o'rtasida identifikatsiyalovchi **HasCopy** aloqasi o'rnatiladi.",
    "instruction": "'BookTitle' kuchli entitiysini va unga qaram zaif 'BookCopy' entitiysini chizing, 'copyNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BookTitle",
          "isWeak": false,
          "isAssociative": false,
          "pk": "isbn",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "isbn",
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
              "name": "author",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "editionYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BookCopy",
          "isWeak": true,
          "isAssociative": false,
          "pk": "copyNo",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "copyNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "conditionStatus",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "shelfBay",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isAvailable",
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
          "name": "HasCopy",
          "entity1": "BookTitle",
          "entity2": "BookCopy",
          "fromEntityName": "BookTitle",
          "toEntityName": "BookCopy",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 65,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "BankAccount va AccountTransaction (Zaif Bog'liqlik)",
    "story": "Bank Hisob Tranzaksiyalari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Hisob tranzaksiyasi hisobsiz mavjud bo'lmaydi; har bir tranzaksiya tartib raqami o'sha hisob doirasida 1 dan boshlab hisoblanadi. Tizimda kuchli ega (Owner) entitiy sifatida **BankAccount** (accountNo {PK}, `holderName`, `currency`, `balance`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **AccountTransaction** bo'lib, uning qisman kaliti (discriminator / PPK) `txSeqNo` va boshqa atributlari: `txAmount`, `txTimestamp`, `terminalCode`. Ular o'rtasida identifikatsiyalovchi **LogsTx** aloqasi o'rnatiladi.",
    "instruction": "'BankAccount' kuchli entitiysini va unga qaram zaif 'AccountTransaction' entitiysini chizing, 'txSeqNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "accountNo",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "accountNo",
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
          "name": "AccountTransaction",
          "isWeak": true,
          "isAssociative": false,
          "pk": "txSeqNo",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "txSeqNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "txAmount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "txTimestamp",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "terminalCode",
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
          "name": "LogsTx",
          "entity1": "BankAccount",
          "entity2": "AccountTransaction",
          "fromEntityName": "BankAccount",
          "toEntityName": "AccountTransaction",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
          "mult2": "1..*",
          "name": "LogsTx",
          "isIdentifying": true
        }
      ]
    }
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "FlightSchedule va BoardingPass (Zaif Bog'liqlik)",
    "story": "Aviaparvoz Chiptalari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Bortga chiqish taloni parvoz reysisiz mavjud emas; joy raqami faqat ushbu samolyot reysi ichida noyobdir. Tizimda kuchli ega (Owner) entitiy sifatida **FlightSchedule** (flightNo {PK}, `originIata`, `destIata`, `depTime`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **BoardingPass** bo'lib, uning qisman kaliti (discriminator / PPK) `seatNo` va boshqa atributlari: `passengerName`, `gateNumber`, `boardingGroup`. Ular o'rtasida identifikatsiyalovchi **IssuesPass** aloqasi o'rnatiladi.",
    "instruction": "'FlightSchedule' kuchli entitiysini va unga qaram zaif 'BoardingPass' entitiysini chizing, 'seatNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FlightSchedule",
          "isWeak": false,
          "isAssociative": false,
          "pk": "flightNo",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "flightNo",
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
              "name": "depTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BoardingPass",
          "isWeak": true,
          "isAssociative": false,
          "pk": "seatNo",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "seatNo",
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
              "name": "gateNumber",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "boardingGroup",
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
          "name": "IssuesPass",
          "entity1": "FlightSchedule",
          "entity2": "BoardingPass",
          "fromEntityName": "FlightSchedule",
          "toEntityName": "BoardingPass",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 67,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "ApartmentComplex va FlatUnit (Zaif Bog'liqlik)",
    "story": "Turar-Joy Kvartiralari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Xonadon faqat o'z turar-joy majmuasi ichida mavjud; kvartira raqami majmuasiz shahar bo'yicha noyob bo'lolmaydi. Tizimda kuchli ega (Owner) entitiy sifatida **ApartmentComplex** (complexId {PK}, `complexName`, `street`, `blockLetter`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **FlatUnit** bo'lib, uning qisman kaliti (discriminator / PPK) `flatNo` va boshqa atributlari: `roomsCount`, `areaSqm`, `floorLevel`. Ular o'rtasida identifikatsiyalovchi **ComprisesFlat** aloqasi o'rnatiladi.",
    "instruction": "'ApartmentComplex' kuchli entitiysini va unga qaram zaif 'FlatUnit' entitiysini chizing, 'flatNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ApartmentComplex",
          "isWeak": false,
          "isAssociative": false,
          "pk": "complexId",
          "x": 130,
          "y": 160,
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
              "name": "street",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "blockLetter",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "FlatUnit",
          "isWeak": true,
          "isAssociative": false,
          "pk": "flatNo",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "flatNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "roomsCount",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "areaSqm",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorLevel",
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
          "name": "ComprisesFlat",
          "entity1": "ApartmentComplex",
          "entity2": "FlatUnit",
          "fromEntityName": "ApartmentComplex",
          "toEntityName": "FlatUnit",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 68,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "DrugFormula va BatchLot (Zaif Bog'liqlik)",
    "story": "Dori Ishlab Chiqarish Partiyalari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Ishlab chiqarilgan dori partiyasi uning kimyoviy formulasiga bog'liq; partiya raqami faqat shu preparat doirasida qisman kalit sanaladi. Tizimda kuchli ega (Owner) entitiy sifatida **DrugFormula** (formulaCode {PK}, `chemicalName`, `patentExpDate`, `dosageMg`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **BatchLot** bo'lib, uning qisman kaliti (discriminator / PPK) `lotNumber` va boshqa atributlari: `prodDate`, `expiryDate`, `labTechStaffId`. Ular o'rtasida identifikatsiyalovchi **ProducedInLot** aloqasi o'rnatiladi.",
    "instruction": "'DrugFormula' kuchli entitiysini va unga qaram zaif 'BatchLot' entitiysini chizing, 'lotNumber' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "DrugFormula",
          "isWeak": false,
          "isAssociative": false,
          "pk": "formulaCode",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "formulaCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "chemicalName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "patentExpDate",
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
          "name": "BatchLot",
          "isWeak": true,
          "isAssociative": false,
          "pk": "lotNumber",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "lotNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "prodDate",
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
              "name": "labTechStaffId",
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
          "name": "ProducedInLot",
          "entity1": "DrugFormula",
          "entity2": "BatchLot",
          "fromEntityName": "DrugFormula",
          "toEntityName": "BatchLot",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 69,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "OnlineCourse va CourseLesson (Zaif Bog'liqlik)",
    "story": "Onlayn Kurs Modullari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Video darslik mustaqil mavjud bo'lmaydi; darsning ketma-ketlik raqami faqat o'sha o'quv kursi ichida tartiblangan. Tizimda kuchli ega (Owner) entitiy sifatida **OnlineCourse** (courseId {PK}, `courseTitle`, `authorName`, `priceUsd`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **CourseLesson** bo'lib, uning qisman kaliti (discriminator / PPK) `lessonSeqNo` va boshqa atributlari: `videoDurationMin`, `lessonTitle`, `isFreePreview`. Ular o'rtasida identifikatsiyalovchi **ContainsLesson** aloqasi o'rnatiladi.",
    "instruction": "'OnlineCourse' kuchli entitiysini va unga qaram zaif 'CourseLesson' entitiysini chizing, 'lessonSeqNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "OnlineCourse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "courseId",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "courseId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "courseTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "authorName",
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
        },
        {
          "name": "CourseLesson",
          "isWeak": true,
          "isAssociative": false,
          "pk": "lessonSeqNo",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "lessonSeqNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "videoDurationMin",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lessonTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isFreePreview",
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
          "name": "ContainsLesson",
          "entity1": "OnlineCourse",
          "entity2": "CourseLesson",
          "fromEntityName": "OnlineCourse",
          "toEntityName": "CourseLesson",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 70,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "TrainRoute va CarriageUnit (Zaif Bog'liqlik)",
    "story": "Poyezd Tarkibi Vagonlari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Vagon poyezd tarkibisiz marshrutda qatnamaydi; vagon raqami poyezd lokomotivi kodi bilan birga to'liq identifikatsiyalanadi. Tizimda kuchli ega (Owner) entitiy sifatida **TrainRoute** (trainNo {PK}, `routeTitle`, `departureStation`, `arrivalStation`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **CarriageUnit** bo'lib, uning qisman kaliti (discriminator / PPK) `coachNumber` va boshqa atributlari: `classType`, `berthCapacity`, `manufactureYear`. Ular o'rtasida identifikatsiyalovchi **IncludesCarriage** aloqasi o'rnatiladi.",
    "instruction": "'TrainRoute' kuchli entitiysini va unga qaram zaif 'CarriageUnit' entitiysini chizing, 'coachNumber' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "TrainRoute",
          "isWeak": false,
          "isAssociative": false,
          "pk": "trainNo",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "trainNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "routeTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "departureStation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "arrivalStation",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "CarriageUnit",
          "isWeak": true,
          "isAssociative": false,
          "pk": "coachNumber",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "coachNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "classType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "berthCapacity",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "manufactureYear",
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
          "name": "IncludesCarriage",
          "entity1": "TrainRoute",
          "entity2": "CarriageUnit",
          "fromEntityName": "TrainRoute",
          "toEntityName": "CarriageUnit",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 71,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "LabSample va TestResultItem (Zaif Bog'liqlik)",
    "story": "Klinik Tahlil Parametrlari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Tahlil natijasi olingan qon/namuna probirkasisiz mavjud emas; parametr kodi probirka shtrix-kodi bilan birikadi. Tizimda kuchli ega (Owner) entitiy sifatida **LabSample** (sampleBarcode {PK}, `patientId`, `collectionTime`, `sampleType`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **TestResultItem** bo'lib, uning qisman kaliti (discriminator / PPK) `testMetricCode` va boshqa atributlari: `measuredValue`, `normalRange`, `unitMeasure`. Ular o'rtasida identifikatsiyalovchi **YieldsResult** aloqasi o'rnatiladi.",
    "instruction": "'LabSample' kuchli entitiysini va unga qaram zaif 'TestResultItem' entitiysini chizing, 'testMetricCode' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "LabSample",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sampleBarcode",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "sampleBarcode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "patientId",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "collectionTime",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "sampleType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "TestResultItem",
          "isWeak": true,
          "isAssociative": false,
          "pk": "testMetricCode",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "testMetricCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "measuredValue",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "normalRange",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "unitMeasure",
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
          "name": "YieldsResult",
          "entity1": "LabSample",
          "entity2": "TestResultItem",
          "fromEntityName": "LabSample",
          "toEntityName": "TestResultItem",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 72,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "IndustrialMachine va ComponentSlot (Zaif Bog'liqlik)",
    "story": "Sanoat Stanogi Detal Uyasi faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Uskuna uyasi stanok konstruksiyasidan ajralmas; uya kodi faqat o'sha stanok pasporti ichida ma'noga ega. Tizimda kuchli ega (Owner) entitiy sifatida **IndustrialMachine** (machineId {PK}, `modelName`, `installDate`, `powerKw`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **ComponentSlot** bo'lib, uning qisman kaliti (discriminator / PPK) `slotCode` va boshqa atributlari: `installedPartSerial`, `serviceLifeHours`, `lastReplaced`. Ular o'rtasida identifikatsiyalovchi **FittedWith** aloqasi o'rnatiladi.",
    "instruction": "'IndustrialMachine' kuchli entitiysini va unga qaram zaif 'ComponentSlot' entitiysini chizing, 'slotCode' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "IndustrialMachine",
          "isWeak": false,
          "isAssociative": false,
          "pk": "machineId",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "machineId",
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
              "name": "installDate",
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
        },
        {
          "name": "ComponentSlot",
          "isWeak": true,
          "isAssociative": false,
          "pk": "slotCode",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "slotCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "installedPartSerial",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "serviceLifeHours",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lastReplaced",
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
          "name": "FittedWith",
          "entity1": "IndustrialMachine",
          "entity2": "ComponentSlot",
          "fromEntityName": "IndustrialMachine",
          "toEntityName": "ComponentSlot",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 73,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "AuditoriumHall va HallSeat (Zaif Bog'liqlik)",
    "story": "Teatr Zoli Joylari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: O'rindiq teatr zolisiz mavjud bo'lmaydi; o'rindiq raqami faqat ma'lum bir zal ichida takrorlanmas hisoblanadi. Tizimda kuchli ega (Owner) entitiy sifatida **AuditoriumHall** (hallId {PK}, `hallName`, `soundAcousticGrade`, `screenType`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **HallSeat** bo'lib, uning qisman kaliti (discriminator / PPK) `seatNumber` va boshqa atributlari: `rowLetter`, `seatTier`, `isVipZone`. Ular o'rtasida identifikatsiyalovchi **HasSeat** aloqasi o'rnatiladi.",
    "instruction": "'AuditoriumHall' kuchli entitiysini va unga qaram zaif 'HallSeat' entitiysini chizing, 'seatNumber' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AuditoriumHall",
          "isWeak": false,
          "isAssociative": false,
          "pk": "hallId",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "hallId",
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
            },
            {
              "name": "screenType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HallSeat",
          "isWeak": true,
          "isAssociative": false,
          "pk": "seatNumber",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "seatNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "rowLetter",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "seatTier",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isVipZone",
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
          "name": "HasSeat",
          "entity1": "AuditoriumHall",
          "entity2": "HallSeat",
          "fromEntityName": "AuditoriumHall",
          "toEntityName": "HallSeat",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 74,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "SmartphoneModel va HardwareConfig (Zaif Bog'liqlik)",
    "story": "Smartfon Xotira Variantlari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Modifikatsiya smartfon modelisiz ma'nosiz; konfiguratsiya kodi faqat o'sha smartfon modeli doirasida amal qiladi. Tizimda kuchli ega (Owner) entitiy sifatida **SmartphoneModel** (modelCode {PK}, `marketingName`, `releaseYear`, `baseSocCpu`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **HardwareConfig** bo'lib, uning qisman kaliti (discriminator / PPK) `configCode` va boshqa atributlari: `storageGb`, `ramGb`, `colorVariant`. Ular o'rtasida identifikatsiyalovchi **ConfiguredAs** aloqasi o'rnatiladi.",
    "instruction": "'SmartphoneModel' kuchli entitiysini va unga qaram zaif 'HardwareConfig' entitiysini chizing, 'configCode' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SmartphoneModel",
          "isWeak": false,
          "isAssociative": false,
          "pk": "modelCode",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "modelCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "marketingName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "releaseYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "baseSocCpu",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "HardwareConfig",
          "isWeak": true,
          "isAssociative": false,
          "pk": "configCode",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "configCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "storageGb",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "ramGb",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "colorVariant",
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
          "name": "ConfiguredAs",
          "entity1": "SmartphoneModel",
          "entity2": "HardwareConfig",
          "fromEntityName": "SmartphoneModel",
          "toEntityName": "HardwareConfig",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
      ]
    }
  },
  {
    "id": 75,
    "sector": 5,
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy)",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "ResearchPaper va SupplementaryFile (Zaif Bog'liqlik)",
    "story": "Ilmiy Maqola Qo'shimchalari faoliyatida ob'yektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar mavjud: Ilova fayli maqolasiz mavjud bo'lolmaydi; ilova raqami (1-ilova, 2-ilova.) maqolaning DOI raqamiga bog'liq. Tizimda kuchli ega (Owner) entitiy sifatida **ResearchPaper** (doiCode {PK}, `paperTitle`, `primaryAuthor`, `submissionDate`) ro'yxatga olinadi. Unga to'liq qaram zaif entitiy esa **SupplementaryFile** bo'lib, uning qisman kaliti (discriminator / PPK) `fileIndex` va boshqa atributlari: `fileChecksum`, `mimeType`, `dataSizeBytes`. Ular o'rtasida identifikatsiyalovchi **AccompaniedBy** aloqasi o'rnatiladi.",
    "instruction": "'ResearchPaper' kuchli entitiysini va unga qaram zaif 'SupplementaryFile' entitiysini chizing, 'fileIndex' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ResearchPaper",
          "isWeak": false,
          "isAssociative": false,
          "pk": "doiCode",
          "x": 130,
          "y": 160,
          "attributes": [
            {
              "name": "doiCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "paperTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "primaryAuthor",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "submissionDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "SupplementaryFile",
          "isWeak": true,
          "isAssociative": false,
          "pk": "fileIndex",
          "x": 550,
          "y": 160,
          "attributes": [
            {
              "name": "fileIndex",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "fileChecksum",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "mimeType",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dataSizeBytes",
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
          "name": "AccompaniedBy",
          "entity1": "ResearchPaper",
          "entity2": "SupplementaryFile",
          "fromEntityName": "ResearchPaper",
          "toEntityName": "SupplementaryFile",
          "mult1": "",
          "mult2": "",
          "isIdentifying": true,
          "isDirect": true
        }
      ],
      "subclasses": null
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
          "mult2": "1..*",
          "name": "AccompaniedBy",
          "isIdentifying": true
        }
      ]
    }
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "Employee Rekursiv Ierarxiyasi",
    "story": "Korporativ Rahbariyat tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Xodim o'zidan quyi xodimlarga bevosita rahbarlik qilishi mumkin, har bir xodim esa bitta rahbarga hisobot beradi. Tizimda yagona markaziy entitiy — **Employee** (empId {PK}, `fullName`, `jobPosition`, `salary`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **Manages** rekursiv munosabatiga ega bo'lib, nusxalar `supervisor` va `supervisee` rollarini bajaradi.",
    "instruction": "'Employee' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'Manages' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Employee",
          "isWeak": false,
          "isAssociative": false,
          "pk": "empId",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "empId",
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
              "name": "jobPosition",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "Manages",
          "entity1": "Employee",
          "entity2": "Employee",
          "fromEntityName": "Employee",
          "toEntityName": "Employee",
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
    }
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "ProductCategory Rekursiv Ierarxiyasi",
    "story": "Marketpleys Katalogi tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Tovar kategoriyasi boshqa bosh kategoriyaning ichki bo'limi bo'lishi mumkin va daraxtsimon ierarxiyani hosil qiladi. Tizimda yagona markaziy entitiy — **ProductCategory** (categoryId {PK}, `categoryName`, `displayOrder`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **SubCategoryOf** rekursiv munosabatiga ega bo'lib, nusxalar `parentCat` va `subCat` rollarini bajaradi.",
    "instruction": "'ProductCategory' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'SubCategoryOf' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ProductCategory",
          "isWeak": false,
          "isAssociative": false,
          "pk": "categoryId",
          "x": 340,
          "y": 160,
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "SubCategoryOf",
          "entity1": "ProductCategory",
          "entity2": "ProductCategory",
          "fromEntityName": "ProductCategory",
          "toEntityName": "ProductCategory",
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
          "name": "SubCategoryOf",
          "role1": "parentCat",
          "role2": "subCat"
        }
      ]
    }
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "PartComponent Rekursiv Ierarxiyasi",
    "story": "Dvigatel Butlovchi Qismlari tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Bitta yirik mexanik detal o'zidan kichikroq detallar yig'indisidan tashkil topadi. Tizimda yagona markaziy entitiy — **PartComponent** (partNumber {PK}, `partName`, `unitCost`, `weightKg`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **AssembledFrom** rekursiv munosabatiga ega bo'lib, nusxalar `parentAssembly` va `subComponent` rollarini bajaradi.",
    "instruction": "'PartComponent' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'AssembledFrom' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PartComponent",
          "isWeak": false,
          "isAssociative": false,
          "pk": "partNumber",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "partNumber",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "partName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "unitCost",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weightKg",
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
          "name": "AssembledFrom",
          "entity1": "PartComponent",
          "entity2": "PartComponent",
          "fromEntityName": "PartComponent",
          "toEntityName": "PartComponent",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "AssembledFrom",
          "role1": "parentAssembly",
          "role2": "subComponent"
        }
      ]
    }
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "AcademicCourse Rekursiv Ierarxiyasi",
    "story": "Oliy Ta'lim Dasturi tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Yuqori bosqichdagi fanni o'rganish uchun talabadan quyi bosqichdagi ma'lum fanni muvaffaqiyatli topshirgan bo'lish talab etiladi. Tizimda yagona markaziy entitiy — **AcademicCourse** (courseCode {PK}, `courseTitle`, `creditUnits`, `level`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **RequiresPrereq** rekursiv munosabatiga ega bo'lib, nusxalar `advancedCourse` va `prerequisiteCourse` rollarini bajaradi.",
    "instruction": "'AcademicCourse' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'RequiresPrereq' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "AcademicCourse",
          "isWeak": false,
          "isAssociative": false,
          "pk": "courseCode",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "courseCode",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "courseTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "creditUnits",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "level",
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
          "name": "RequiresPrereq",
          "entity1": "AcademicCourse",
          "entity2": "AcademicCourse",
          "fromEntityName": "AcademicCourse",
          "toEntityName": "AcademicCourse",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "RequiresPrereq",
          "role1": "advancedCourse",
          "role2": "prerequisiteCourse"
        }
      ]
    }
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "Citizen Rekursiv Ierarxiyasi",
    "story": "FHDYo Qonuniy Nikohi tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Qonunchilikka ko'ra bir fuqaro faqat bitta boshqa fuqaro bilan qonuniy nikohda turishi mumkin. Tizimda yagona markaziy entitiy — **Citizen** (pinfl {PK}, `fullName`, `gender`, `birthDate`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **MarriedTo** rekursiv munosabatiga ega bo'lib, nusxalar `spouseA` va `spouseB` rollarini bajaradi.",
    "instruction": "'Citizen' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'MarriedTo' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Citizen",
          "isWeak": false,
          "isAssociative": false,
          "pk": "pinfl",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "pinfl",
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
              "name": "gender",
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
        }
      ],
      "relationships": [
        {
          "id": "rel_1",
          "name": "MarriedTo",
          "entity1": "Citizen",
          "entity2": "Citizen",
          "fromEntityName": "Citizen",
          "toEntityName": "Citizen",
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
          "mult2": "0..*",
          "name": "MarriedTo",
          "role1": "spouseA",
          "role2": "spouseB"
        }
      ]
    }
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "FlightLeg Rekursiv Ierarxiyasi",
    "story": "Tranzit Aviaqatnovlar tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Bitta oraliq parvoz reysi yo'lovchilarni keyingi davom etuvchi tutash reysga o'tkazishi mumkin. Tizimda yagona markaziy entitiy — **FlightLeg** (legId {PK}, `routeCode`, `depAirport`, `arrAirport`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **ConnectsTo** rekursiv munosabatiga ega bo'lib, nusxalar `inboundLeg` va `outboundConnectingLeg` rollarini bajaradi.",
    "instruction": "'FlightLeg' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'ConnectsTo' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "FlightLeg",
          "isWeak": false,
          "isAssociative": false,
          "pk": "legId",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "legId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "routeCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "depAirport",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "arrAirport",
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
          "name": "ConnectsTo",
          "entity1": "FlightLeg",
          "entity2": "FlightLeg",
          "fromEntityName": "FlightLeg",
          "toEntityName": "FlightLeg",
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
          "mult2": "0..*",
          "name": "ConnectsTo",
          "role1": "inboundLeg",
          "role2": "outboundConnectingLeg"
        }
      ]
    }
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "SoftwarePackage Rekursiv Ierarxiyasi",
    "story": "Dasturiy Paketlar Kutubxonasi tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Dasturiy kutubxona o'z ishlashi uchun boshqa bir qancha kutubxonalarga tayanadi. Tizimda yagona markaziy entitiy — **SoftwarePackage** (packageId {PK}, `packageName`, `semanticVersion`, `licenseType`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **DependsOn** rekursiv munosabatiga ega bo'lib, nusxalar `dependentModule` va `requiredDependency` rollarini bajaradi.",
    "instruction": "'SoftwarePackage' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'DependsOn' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "SoftwarePackage",
          "isWeak": false,
          "isAssociative": false,
          "pk": "packageId",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "packageId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "packageName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "semanticVersion",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "licenseType",
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
          "name": "DependsOn",
          "entity1": "SoftwarePackage",
          "entity2": "SoftwarePackage",
          "fromEntityName": "SoftwarePackage",
          "toEntityName": "SoftwarePackage",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "DependsOn",
          "role1": "dependentModule",
          "role2": "requiredDependency"
        }
      ]
    }
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "ChessMaster Rekursiv Ierarxiyasi",
    "story": "Shaxmat Musobaqasi tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Shaxmatchi musobaqa doirasida boshqa bir shaxmatchiga qarshi oq yoki qora donalarda dona suradi. Tizimda yagona markaziy entitiy — **ChessMaster** (fideId {PK}, `masterName`, `eloRating`, `federationCountry`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **PlaysMatch** rekursiv munosabatiga ega bo'lib, nusxalar `whitePlayer` va `blackPlayer` rollarini bajaradi.",
    "instruction": "'ChessMaster' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'PlaysMatch' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "ChessMaster",
          "isWeak": false,
          "isAssociative": false,
          "pk": "fideId",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "fideId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "masterName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "eloRating",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "federationCountry",
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
          "name": "PlaysMatch",
          "entity1": "ChessMaster",
          "entity2": "ChessMaster",
          "fromEntityName": "ChessMaster",
          "toEntityName": "ChessMaster",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "PlaysMatch",
          "role1": "whitePlayer",
          "role2": "blackPlayer"
        }
      ]
    }
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "HistoricalFigure Rekursiv Ierarxiyasi",
    "story": "Tarixiy Shajara tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Tarixiy shaxs o'zidan keyingi avlod vakilining bevosita ajdodi bo'lib nasl zanjirini bog'laydi. Tizimda yagona markaziy entitiy — **HistoricalFigure** (personId {PK}, `fullName`, `birthCentury`, `dynastyTitle`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **AncestorOf** rekursiv munosabatiga ega bo'lib, nusxalar `parentAncestor` va `childDescendant` rollarini bajaradi.",
    "instruction": "'HistoricalFigure' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'AncestorOf' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HistoricalFigure",
          "isWeak": false,
          "isAssociative": false,
          "pk": "personId",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "personId",
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
              "name": "birthCentury",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "dynastyTitle",
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
          "name": "AncestorOf",
          "entity1": "HistoricalFigure",
          "entity2": "HistoricalFigure",
          "fromEntityName": "HistoricalFigure",
          "toEntityName": "HistoricalFigure",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "AncestorOf",
          "role1": "parentAncestor",
          "role2": "childDescendant"
        }
      ]
    }
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "LegalPrecedent Rekursiv Ierarxiyasi",
    "story": "Sud Pretsedenti tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Ko'rilayotgan sud ishi o'tmishda yakunlangan boshqa bir sud pretsedenti qaroriga tayanadi. Tizimda yagona markaziy entitiy — **LegalPrecedent** (caseNo {PK}, `verdictYear`, `jurisdictionCourt`, `lawArticle`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **CitesPrecedent** rekursiv munosabatiga ega bo'lib, nusxalar `currentRulingCase` va `citedPrecedentCase` rollarini bajaradi.",
    "instruction": "'LegalPrecedent' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'CitesPrecedent' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "LegalPrecedent",
          "isWeak": false,
          "isAssociative": false,
          "pk": "caseNo",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "caseNo",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "verdictYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "jurisdictionCourt",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lawArticle",
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
          "name": "CitesPrecedent",
          "entity1": "LegalPrecedent",
          "entity2": "LegalPrecedent",
          "fromEntityName": "LegalPrecedent",
          "toEntityName": "LegalPrecedent",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "CitesPrecedent",
          "role1": "currentRulingCase",
          "role2": "citedPrecedentCase"
        }
      ]
    }
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "NetworkUser Rekursiv Ierarxiyasi",
    "story": "Ijtimoiy Tarmoq Tarmog'i tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Tarmoq foydalanuvchisi boshqa foydalanuvchining sahifasiga obuna bo'lib uning yangiliklarini kuzatadi. Tizimda yagona markaziy entitiy — **NetworkUser** (userHandle {PK}, `displayName`, `joinDate`, `isVerified`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **FollowsUser** rekursiv munosabatiga ega bo'lib, nusxalar `followerUser` va `followedUser` rollarini bajaradi.",
    "instruction": "'NetworkUser' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'FollowsUser' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "NetworkUser",
          "isWeak": false,
          "isAssociative": false,
          "pk": "userHandle",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "userHandle",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "displayName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "joinDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isVerified",
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
          "name": "FollowsUser",
          "entity1": "NetworkUser",
          "entity2": "NetworkUser",
          "fromEntityName": "NetworkUser",
          "toEntityName": "NetworkUser",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "FollowsUser",
          "role1": "followerUser",
          "role2": "followedUser"
        }
      ]
    }
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "CorporateEnterprise Rekursiv Ierarxiyasi",
    "story": "Xalqaro Xoldinglar tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Kompaniya boshqa bir yirikroq korporativ xoldingning sho''ba korxonasi sifatida unga bo'ysunadi. Tizimda yagona markaziy entitiy — **CorporateEnterprise** (holdingId {PK}, `corporateName`, `hqCountry`, `capitalUsd`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **SubsidiaryOf** rekursiv munosabatiga ega bo'lib, nusxalar `parentHolding` va `daughterCompany` rollarini bajaradi.",
    "instruction": "'CorporateEnterprise' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'SubsidiaryOf' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "CorporateEnterprise",
          "isWeak": false,
          "isAssociative": false,
          "pk": "holdingId",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "holdingId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "corporateName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "hqCountry",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "capitalUsd",
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
          "name": "SubsidiaryOf",
          "entity1": "CorporateEnterprise",
          "entity2": "CorporateEnterprise",
          "fromEntityName": "CorporateEnterprise",
          "toEntityName": "CorporateEnterprise",
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
    }
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "MetroStation Rekursiv Ierarxiyasi",
    "story": "Metropoliten Liniyasi tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Metro bekati temir yo'l yo'nalishi bo'ylab keyingi qo'shni bekat bilan bevosita tutashgan. Tizimda yagona markaziy entitiy — **MetroStation** (stationCode {PK}, `stationName`, `lineColor`, `zoneNo`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **AdjacentTo** rekursiv munosabatiga ega bo'lib, nusxalar `precedingStop` va `succeedingStop` rollarini bajaradi.",
    "instruction": "'MetroStation' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'AdjacentTo' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MetroStation",
          "isWeak": false,
          "isAssociative": false,
          "pk": "stationCode",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "stationCode",
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
            },
            {
              "name": "zoneNo",
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
          "name": "AdjacentTo",
          "entity1": "MetroStation",
          "entity2": "MetroStation",
          "fromEntityName": "MetroStation",
          "toEntityName": "MetroStation",
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
          "mult2": "0..*",
          "name": "AdjacentTo",
          "role1": "precedingStop",
          "role2": "succeedingStop"
        }
      ]
    }
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "PathogenStrain Rekursiv Ierarxiyasi",
    "story": "Virusologik Mutatsiya tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Yangi ajratilgan virus shtammi o'zidan oldingi ajdod virus shtammining mutatsiyasidan vujudga keladi. Tizimda yagona markaziy entitiy — **PathogenStrain** (strainId {PK}, `genomeSeqHash`, `isolationDate`, `virulenceRate`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **MutatedFrom** rekursiv munosabatiga ega bo'lib, nusxalar `ancestralStrain` va `mutantLineage` rollarini bajaradi.",
    "instruction": "'PathogenStrain' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'MutatedFrom' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "PathogenStrain",
          "isWeak": false,
          "isAssociative": false,
          "pk": "strainId",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "strainId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "genomeSeqHash",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "isolationDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "virulenceRate",
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
          "name": "MutatedFrom",
          "entity1": "PathogenStrain",
          "entity2": "PathogenStrain",
          "fromEntityName": "PathogenStrain",
          "toEntityName": "PathogenStrain",
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
    }
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv)",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "WebDocument Rekursiv Ierarxiyasi",
    "story": "Internet Veb Sahifalari tizimida bir xil turdagi ob'yektlarning o'zaro ichki ierarxiyasi mavjud: Internet veb sahifasida boshqa bir veb sahifaga o'tuvchi gipermatnli havola joylashtiriladi. Tizimda yagona markaziy entitiy — **WebDocument** (pageUrl {PK}, `pageTitle`, `pageRankScore`, `lastCrawled`) mavjud. Ushbu entitiy o'z-o'ziga bog'lanuvchi **HyperlinksTo** rekursiv munosabatiga ega bo'lib, nusxalar `referringPage` va `targetLinkedPage` rollarini bajaradi.",
    "instruction": "'WebDocument' entitiysini yarating va uning o'ziga-o'zi bog'lanuvchi rekursiv 'HyperlinksTo' aloqasini to'g'ri multiplisitiya bilan o'rnating.",
    "starterDiagram": {
      "entities": [
        {
          "name": "WebDocument",
          "isWeak": false,
          "isAssociative": false,
          "pk": "pageUrl",
          "x": 340,
          "y": 160,
          "attributes": [
            {
              "name": "pageUrl",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pageTitle",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "pageRankScore",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lastCrawled",
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
          "name": "HyperlinksTo",
          "entity1": "WebDocument",
          "entity2": "WebDocument",
          "fromEntityName": "WebDocument",
          "toEntityName": "WebDocument",
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
          "mult1": "0..1",
          "mult2": "0..*",
          "name": "HyperlinksTo",
          "role1": "referringPage",
          "role2": "targetLinkedPage"
        }
      ]
    }
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Temur Karimov",
    "clientRole": "Aviapark Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Aircraft Disjoint Ixtisoslashuvi",
    "story": "Fuqaro Aviatsiyasi sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Aircraft** (tailNo {PK}, `model`, `manufacturer`, `capacity`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Aircraft' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Aircraft",
          "isWeak": false,
          "isAssociative": false,
          "pk": "tailNo",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "tailNo",
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
              "name": "manufacturer",
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
          "name": "AircraftTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "AircraftTypeB",
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
        "superclass": "Aircraft",
        "subs": [
          {
            "name": "AircraftTypeA",
            "attributes": []
          },
          {
            "name": "AircraftTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "AircraftTypeA",
            "attributes": []
          },
          {
            "name": "AircraftTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 92,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Dr. Aziza Rahimova",
    "clientRole": "Bosh Shifokor Muovini",
    "clientAvatar": "mentor",
    "title": "Patient Disjoint Ixtisoslashuvi",
    "story": "Tibbiyot & Kardiologiya sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Patient** (patientId {PK}, `fullName`, `dob`, `bloodType`, `phone`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Patient' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Patient",
          "isWeak": false,
          "isAssociative": false,
          "pk": "patientId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "patientId",
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
              "name": "dob",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "bloodType",
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
          "name": "PatientTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "PatientTypeB",
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
        "superclass": "Patient",
        "subs": [
          {
            "name": "PatientTypeA",
            "attributes": []
          },
          {
            "name": "PatientTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "PatientTypeA",
            "attributes": []
          },
          {
            "name": "PatientTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 93,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Bobur Mansurov",
    "clientRole": "Bosh Registrator",
    "clientAvatar": "mentor",
    "title": "Student Disjoint Ixtisoslashuvi",
    "story": "Oliy Ta'lim sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Student** (studentId {PK}, `firstName`, `lastName`, `email`, `gpa`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Student' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Student",
          "isWeak": false,
          "isAssociative": false,
          "pk": "studentId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "studentId",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "firstName",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "lastName",
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
              "name": "gpa",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "StudentTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "StudentTypeB",
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
        "superclass": "Student",
        "subs": [
          {
            "name": "StudentTypeA",
            "attributes": []
          },
          {
            "name": "StudentTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "StudentTypeA",
            "attributes": []
          },
          {
            "name": "StudentTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 94,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Gulnora Karimova",
    "clientRole": "Bosh Bibliograf",
    "clientAvatar": "mentor",
    "title": "Book Disjoint Ixtisoslashuvi",
    "story": "Kutubxona & Fond sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Book** (isbn {PK}, `title`, `author`, `publishYear`, `genre`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Book' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Book",
          "isWeak": false,
          "isAssociative": false,
          "pk": "isbn",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "isbn",
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
              "name": "author",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "publishYear",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "genre",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BookTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "BookTypeB",
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
        "superclass": "Book",
        "subs": [
          {
            "name": "BookTypeA",
            "attributes": []
          },
          {
            "name": "BookTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "BookTypeA",
            "attributes": []
          },
          {
            "name": "BookTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 95,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Rustam Aliyev",
    "clientRole": "Savdo Direktori",
    "clientAvatar": "mentor",
    "title": "Vehicle Disjoint Ixtisoslashuvi",
    "story": "Avtosalon & Dilerlik sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Vehicle** (vin {PK}, `make`, `model`, `prodYear`, `price`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Vehicle' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Vehicle",
          "isWeak": false,
          "isAssociative": false,
          "pk": "vin",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "vin",
              "isPK": true,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "make",
              "isPK": false,
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
              "name": "prodYear",
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
          "name": "VehicleTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "VehicleTypeB",
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
        "superclass": "Vehicle",
        "subs": [
          {
            "name": "VehicleTypeA",
            "attributes": []
          },
          {
            "name": "VehicleTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "VehicleTypeA",
            "attributes": []
          },
          {
            "name": "VehicleTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 96,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Jamshid Qodirov",
    "clientRole": "Bosh Buxgalter",
    "clientAvatar": "mentor",
    "title": "BankAccount Disjoint Ixtisoslashuvi",
    "story": "Bank & Depozitlar sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **BankAccount** (accountNo {PK}, `balance`, `currency`, `openDate`, `branchCode`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'BankAccount' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "BankAccount",
          "isWeak": false,
          "isAssociative": false,
          "pk": "accountNo",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "accountNo",
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
              "name": "currency",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "openDate",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "branchCode",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "BankAccountTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "BankAccountTypeB",
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
        "superclass": "BankAccount",
        "subs": [
          {
            "name": "BankAccountTypeA",
            "attributes": []
          },
          {
            "name": "BankAccountTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "BankAccountTypeA",
            "attributes": []
          },
          {
            "name": "BankAccountTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 97,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Malika Yusupova",
    "clientRole": "Boshqaruvchi",
    "clientAvatar": "mentor",
    "title": "HotelRoom Disjoint Ixtisoslashuvi",
    "story": "Mehmonxona & Turizm sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **HotelRoom** (roomNo {PK}, `roomType`, `pricePerNight`, `floorNo`, `capacity`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'HotelRoom' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "HotelRoom",
          "isWeak": false,
          "isAssociative": false,
          "pk": "roomNo",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "roomNo",
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
              "name": "pricePerNight",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "floorNo",
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
          "name": "HotelRoomTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "HotelRoomTypeB",
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
        "superclass": "HotelRoom",
        "subs": [
          {
            "name": "HotelRoomTypeA",
            "attributes": []
          },
          {
            "name": "HotelRoomTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "HotelRoomTypeA",
            "attributes": []
          },
          {
            "name": "HotelRoomTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 98,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Otabek Sodiqov",
    "clientRole": "Bosh Oshpaz",
    "clientAvatar": "mentor",
    "title": "MenuItem Disjoint Ixtisoslashuvi",
    "story": "Restoran & Taomnoma sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **MenuItem** (itemId {PK}, `name`, `category`, `price`, `calories`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'MenuItem' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "MenuItem",
          "isWeak": false,
          "isAssociative": false,
          "pk": "itemId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "itemId",
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
              "name": "category",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "price",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "calories",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "MenuItemTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "MenuItemTypeB",
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
        "superclass": "MenuItem",
        "subs": [
          {
            "name": "MenuItemTypeA",
            "attributes": []
          },
          {
            "name": "MenuItemTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "MenuItemTypeA",
            "attributes": []
          },
          {
            "name": "MenuItemTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 99,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Farhod Ergashev",
    "clientRole": "Texnik Direktor (CTO)",
    "clientAvatar": "mentor",
    "title": "Developer Disjoint Ixtisoslashuvi",
    "story": "IT & Dasturiy Ta'minot sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Developer** (devId {PK}, `fullName`, `role`, `techStack`, `salary`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Developer' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Developer",
          "isWeak": false,
          "isAssociative": false,
          "pk": "devId",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "devId",
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
              "name": "role",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "techStack",
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
          "name": "DeveloperTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "DeveloperTypeB",
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
        "superclass": "Developer",
        "subs": [
          {
            "name": "DeveloperTypeA",
            "attributes": []
          },
          {
            "name": "DeveloperTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "DeveloperTypeA",
            "attributes": []
          },
          {
            "name": "DeveloperTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  },
  {
    "id": 100,
    "sector": 7,
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA)",
    "clientName": "Shahnoza Karimova",
    "clientRole": "Katalog Menejeri",
    "clientAvatar": "mentor",
    "title": "Product Disjoint Ixtisoslashuvi",
    "story": "E-Commerce sohasida xizmat turlarini mutlaqo alohida, kesishmaydigan toifalarga ajratish zarurati paydo bo'ldi. Har bir ob'yekt umumiy xususiyatlarga ega bo'lishi bilan birga, faqat o'ziga xos parametrlarni ham saqlashi kerak. Umumiy superklass sifatida **Product** (sku {PK}, `title`, `price`, `stockQty`, `weightKg`) xizmat qiladi. Biznes talabiga ko'ra har bir obyekt majburiy ravishda yo birinchi toifaga, yo ikkinchi toifaga kiradi, lekin bir vaqtda ikkalasi bo'la olmaydi.",
    "instruction": "'Product' superklassini yarating va uning ixtisoslashgan subklasslarini ISA ierarxiyasi orqali bog'lang.",
    "starterDiagram": {
      "entities": [
        {
          "name": "Product",
          "isWeak": false,
          "isAssociative": false,
          "pk": "sku",
          "x": 340,
          "y": 70,
          "attributes": [
            {
              "name": "sku",
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
            },
            {
              "name": "stockQty",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            },
            {
              "name": "weightKg",
              "isPK": false,
              "isPPK": false,
              "isFK": false
            }
          ]
        },
        {
          "name": "ProductTypeA",
          "isWeak": false,
          "isSubclass": true,
          "pk": "",
          "x": 150,
          "y": 300,
          "attributes": []
        },
        {
          "name": "ProductTypeB",
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
        "superclass": "Product",
        "subs": [
          {
            "name": "ProductTypeA",
            "attributes": []
          },
          {
            "name": "ProductTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
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
            "name": "ProductTypeA",
            "attributes": []
          },
          {
            "name": "ProductTypeB",
            "attributes": []
          }
        ],
        "constraint": "{Mandatory, Or}"
      }
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = _scope.QUESTIONS_51_100;
}
