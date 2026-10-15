var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.QUESTIONS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Tourist va TourPackage Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'TourBooking' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'touristId' [FK1] va 'tourpackageId' [FK2] sifatida kiritiladi.",
    "instruction": "'TourBooking' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Tourist' hamda 'TourPackage' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Musician va Track Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'TrackContribution' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'musicianId' [FK1] va 'trackId' [FK2] sifatida kiritiladi.",
    "instruction": "'TrackContribution' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Musician' hamda 'Track' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Actor va Film Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'CastingContract' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'actorId' [FK1] va 'filmId' [FK2] sifatida kiritiladi.",
    "instruction": "'CastingContract' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Actor' hamda 'Film' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Truck va Route Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'DeliveryTrip' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'truckId' [FK1] va 'routeId' [FK2] sifatida kiritiladi.",
    "instruction": "'DeliveryTrip' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Truck' hamda 'Route' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Product va RawMaterial Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'BillOfMaterial' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'productId' [FK1] va 'rawmaterialId' [FK2] sifatida kiritiladi.",
    "instruction": "'BillOfMaterial' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Product' hamda 'RawMaterial' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Delegate va WorkshopSession Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'SessionRegistration' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'delegateId' [FK1] va 'workshopsessionId' [FK2] sifatida kiritiladi.",
    "instruction": "'SessionRegistration' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Delegate' hamda 'WorkshopSession' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Exporter va CustomsPost Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'CustomsDeclaration' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'exporterId' [FK1] va 'customspostId' [FK2] sifatida kiritiladi.",
    "instruction": "'CustomsDeclaration' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Exporter' hamda 'CustomsPost' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Article va ContentTag Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'ArticleTagMap' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'articleId' [FK1] va 'contenttagId' [FK2] sifatida kiritiladi.",
    "instruction": "'ArticleTagMap' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Article' hamda 'ContentTag' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Instructor va Classroom Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'LessonSchedule' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'instructorId' [FK1] va 'classroomId' [FK2] sifatida kiritiladi.",
    "instruction": "'LessonSchedule' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Instructor' hamda 'Classroom' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "4-Qavat • Yuqori (*..*) • Relational Mapping",
    "clientName": "Yetakchi Tahlilchi",
    "clientRole": "Bosh Baza Arxitektori",
    "clientAvatar": "mentor",
    "title": "Retailer va Supplier Hamkorligi (Relatsion Sxema)",
    "story": "1-haftadagi ko'pga-ko'p (*..*) munosabatni SQL relyatsion jadvallariga o'tkazish uchun oraliq 'SupplyContract' jadvali ochiladi. Unda ikkala asosiy jadvalning birlamchi kalitlari 'retailerId' [FK1] va 'supplierId' [FK2] sifatida kiritiladi.",
    "instruction": "'SupplyContract' oraliq jadvaliga ikkala jadvalning Tashqi Kalitlari [FK1] va [FK2] ni kiriting va ularni 'Retailer' hamda 'Supplier' jadvallariga bog'lang.",
    "starterDiagram": {
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "Hotel va Room (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'Room' jadvalining Birlamchi Kaliti ota jadval kaliti 'hotelId' [FK1] bilan o'zining qisman kaliti 'roomNo' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'Room' jadvaliga ota kalit 'hotelId' [PK,FK1] ni qo'shing va 'Hotel' jadvaliga bog'lang.",
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
            },
            {
              "name": "hotelId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "Building va BuildingFloor (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'BuildingFloor' jadvalining Birlamchi Kaliti ota jadval kaliti 'buildingId' [FK1] bilan o'zining qisman kaliti 'floorNo' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'BuildingFloor' jadvaliga ota kalit 'buildingId' [PK,FK1] ni qo'shing va 'Building' jadvaliga bog'lang.",
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
            },
            {
              "name": "buildingId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "Employee va Dependent (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'Dependent' jadvalining Birlamchi Kaliti ota jadval kaliti 'employeeId' [FK1] bilan o'zining qisman kaliti 'depName' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'Dependent' jadvaliga ota kalit 'employeeId' [PK,FK1] ni qo'shing va 'Employee' jadvaliga bog'lang.",
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
          "mult2": "1..*",
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
            },
            {
              "name": "employeeId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "BookTitle va BookCopy (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'BookCopy' jadvalining Birlamchi Kaliti ota jadval kaliti 'booktitleId' [FK1] bilan o'zining qisman kaliti 'copyNo' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'BookCopy' jadvaliga ota kalit 'booktitleId' [PK,FK1] ni qo'shing va 'BookTitle' jadvaliga bog'lang.",
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
            },
            {
              "name": "booktitleId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "BankAccount va AccountTransaction (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'AccountTransaction' jadvalining Birlamchi Kaliti ota jadval kaliti 'bankaccountId' [FK1] bilan o'zining qisman kaliti 'txSeqNo' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'AccountTransaction' jadvaliga ota kalit 'bankaccountId' [PK,FK1] ni qo'shing va 'BankAccount' jadvaliga bog'lang.",
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
          "mult2": "1..*",
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
            },
            {
              "name": "bankaccountId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "FlightSchedule va BoardingPass (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'BoardingPass' jadvalining Birlamchi Kaliti ota jadval kaliti 'flightscheduleId' [FK1] bilan o'zining qisman kaliti 'seatNo' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'BoardingPass' jadvaliga ota kalit 'flightscheduleId' [PK,FK1] ni qo'shing va 'FlightSchedule' jadvaliga bog'lang.",
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
            },
            {
              "name": "flightscheduleId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "ApartmentComplex va FlatUnit (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'FlatUnit' jadvalining Birlamchi Kaliti ota jadval kaliti 'apartmentcomplexId' [FK1] bilan o'zining qisman kaliti 'flatNo' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'FlatUnit' jadvaliga ota kalit 'apartmentcomplexId' [PK,FK1] ni qo'shing va 'ApartmentComplex' jadvaliga bog'lang.",
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
            },
            {
              "name": "apartmentcomplexId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "DrugFormula va BatchLot (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'BatchLot' jadvalining Birlamchi Kaliti ota jadval kaliti 'drugformulaId' [FK1] bilan o'zining qisman kaliti 'lotNumber' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'BatchLot' jadvaliga ota kalit 'drugformulaId' [PK,FK1] ni qo'shing va 'DrugFormula' jadvaliga bog'lang.",
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
            },
            {
              "name": "drugformulaId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "OnlineCourse va CourseLesson (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'CourseLesson' jadvalining Birlamchi Kaliti ota jadval kaliti 'onlinecourseId' [FK1] bilan o'zining qisman kaliti 'lessonSeqNo' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'CourseLesson' jadvaliga ota kalit 'onlinecourseId' [PK,FK1] ni qo'shing va 'OnlineCourse' jadvaliga bog'lang.",
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
            },
            {
              "name": "onlinecourseId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "TrainRoute va CarriageUnit (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'CarriageUnit' jadvalining Birlamchi Kaliti ota jadval kaliti 'trainrouteId' [FK1] bilan o'zining qisman kaliti 'coachNumber' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'CarriageUnit' jadvaliga ota kalit 'trainrouteId' [PK,FK1] ni qo'shing va 'TrainRoute' jadvaliga bog'lang.",
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
            },
            {
              "name": "trainrouteId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "LabSample va TestResultItem (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'TestResultItem' jadvalining Birlamchi Kaliti ota jadval kaliti 'labsampleId' [FK1] bilan o'zining qisman kaliti 'testMetricCode' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'TestResultItem' jadvaliga ota kalit 'labsampleId' [PK,FK1] ni qo'shing va 'LabSample' jadvaliga bog'lang.",
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
            },
            {
              "name": "labsampleId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "IndustrialMachine va ComponentSlot (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'ComponentSlot' jadvalining Birlamchi Kaliti ota jadval kaliti 'industrialmachineId' [FK1] bilan o'zining qisman kaliti 'slotCode' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'ComponentSlot' jadvaliga ota kalit 'industrialmachineId' [PK,FK1] ni qo'shing va 'IndustrialMachine' jadvaliga bog'lang.",
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
            },
            {
              "name": "industrialmachineId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "AuditoriumHall va HallSeat (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'HallSeat' jadvalining Birlamchi Kaliti ota jadval kaliti 'auditoriumhallId' [FK1] bilan o'zining qisman kaliti 'seatNumber' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'HallSeat' jadvaliga ota kalit 'auditoriumhallId' [PK,FK1] ni qo'shing va 'AuditoriumHall' jadvaliga bog'lang.",
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
            },
            {
              "name": "auditoriumhallId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "SmartphoneModel va HardwareConfig (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'HardwareConfig' jadvalining Birlamchi Kaliti ota jadval kaliti 'smartphonemodelId' [FK1] bilan o'zining qisman kaliti 'configCode' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'HardwareConfig' jadvaliga ota kalit 'smartphonemodelId' [PK,FK1] ni qo'shing va 'SmartphoneModel' jadvaliga bog'lang.",
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
            },
            {
              "name": "smartphonemodelId",
              "isFK": true
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
    "difficulty": "5-Qavat • Yuqori (Zaif Entitiy) • Relational Mapping",
    "clientName": "Loyiha Nazoratchisi",
    "clientRole": "Tizim Muhandisi",
    "clientAvatar": "mentor",
    "title": "ResearchPaper va SupplementaryFile (Zaif Bog'liqlik) (Relatsion Sxema)",
    "story": "1-haftadagi zaif entitiyani relyatsion sxemaga o'tkazishda: zaif 'SupplementaryFile' jadvalining Birlamchi Kaliti ota jadval kaliti 'researchpaperId' [FK1] bilan o'zining qisman kaliti 'fileIndex' ning kompozit birlashmasi [PK,FK1] orqali hosil qilinadi.",
    "instruction": "'SupplementaryFile' jadvaliga ota kalit 'researchpaperId' [PK,FK1] ni qo'shing va 'ResearchPaper' jadvaliga bog'lang.",
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
          "mult2": "1..*",
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
            },
            {
              "name": "researchpaperId",
              "isFK": true
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "Employee Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'Employee' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'supervisorId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'Employee' jadvaliga 'supervisorId' [FK1] ustunini qo'shib, uni o'zining 'empId' [PK] ustuniga bog'lang.",
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
      ]
    }
  },
  {
    "id": 77,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "ProductCategory Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'ProductCategory' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'parentCatId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'ProductCategory' jadvaliga 'parentCatId' [FK1] ustunini qo'shib, uni o'zining 'categoryId' [PK] ustuniga bog'lang.",
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
          "name": "SubCategoryOf",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "PartComponent Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'PartComponent' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'parentAssemblyId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'PartComponent' jadvaliga 'parentAssemblyId' [FK1] ustunini qo'shib, uni o'zining 'partNumber' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "AcademicCourse Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'AcademicCourse' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'advancedCourseId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'AcademicCourse' jadvaliga 'advancedCourseId' [FK1] ustunini qo'shib, uni o'zining 'courseCode' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "Citizen Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'Citizen' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'spouseAId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'Citizen' jadvaliga 'spouseAId' [FK1] ustunini qo'shib, uni o'zining 'pinfl' [PK] ustuniga bog'lang.",
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
          "mult2": "0..*",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "FlightLeg Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'FlightLeg' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'inboundLegId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'FlightLeg' jadvaliga 'inboundLegId' [FK1] ustunini qo'shib, uni o'zining 'legId' [PK] ustuniga bog'lang.",
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
          "mult2": "0..*",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "SoftwarePackage Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'SoftwarePackage' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'dependentModuleId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'SoftwarePackage' jadvaliga 'dependentModuleId' [FK1] ustunini qo'shib, uni o'zining 'packageId' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "ChessMaster Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'ChessMaster' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'whitePlayerId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'ChessMaster' jadvaliga 'whitePlayerId' [FK1] ustunini qo'shib, uni o'zining 'fideId' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "HistoricalFigure Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'HistoricalFigure' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'parentAncestorId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'HistoricalFigure' jadvaliga 'parentAncestorId' [FK1] ustunini qo'shib, uni o'zining 'personId' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
          "mult2": "0..*",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "LegalPrecedent Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'LegalPrecedent' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'currentRulingCaseId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'LegalPrecedent' jadvaliga 'currentRulingCaseId' [FK1] ustunini qo'shib, uni o'zining 'caseNo' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "NetworkUser Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'NetworkUser' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'followerUserId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'NetworkUser' jadvaliga 'followerUserId' [FK1] ustunini qo'shib, uni o'zining 'userHandle' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "CorporateEnterprise Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'CorporateEnterprise' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'parentHoldingId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'CorporateEnterprise' jadvaliga 'parentHoldingId' [FK1] ustunini qo'shib, uni o'zining 'holdingId' [PK] ustuniga bog'lang.",
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
      ]
    }
  },
  {
    "id": 88,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "MetroStation Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'MetroStation' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'precedingStopId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'MetroStation' jadvaliga 'precedingStopId' [FK1] ustunini qo'shib, uni o'zining 'stationCode' [PK] ustuniga bog'lang.",
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
          "mult2": "0..*",
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
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "PathogenStrain Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'PathogenStrain' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'ancestralStrainId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'PathogenStrain' jadvaliga 'ancestralStrainId' [FK1] ustunini qo'shib, uni o'zining 'strainId' [PK] ustuniga bog'lang.",
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
      ]
    }
  },
  {
    "id": 90,
    "sector": 6,
    "difficulty": "6-Qavat • Ekspert (Rekursiv) • Relational Mapping",
    "clientName": "Bosh Tahlilchi",
    "clientRole": "Yetakchi Me'mor",
    "clientAvatar": "mentor",
    "title": "WebDocument Rekursiv Ierarxiyasi (Relatsion Sxema)",
    "story": "1-haftadagi rekursiv munosabatni relyatsion jadvalga o'tkazish uchun: 'WebDocument' jadvaliga o'zining birlamchi kalitiga tayanuvchi 'referringPageId' [FK1] Tashqi Kalit ustunini qo'shing va o'z jadvaliga bog'lang.",
    "instruction": "'WebDocument' jadvaliga 'referringPageId' [FK1] ustunini qo'shib, uni o'zining 'pageUrl' [PK] ustuniga bog'lang.",
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
          "mult1": "0..1",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Temur Karimov",
    "clientRole": "Aviapark Texnik Direktori",
    "clientAvatar": "mentor",
    "title": "Aircraft Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'tailNo' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Dr. Aziza Rahimova",
    "clientRole": "Bosh Shifokor Muovini",
    "clientAvatar": "mentor",
    "title": "Patient Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'patientId' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Bobur Mansurov",
    "clientRole": "Bosh Registrator",
    "clientAvatar": "mentor",
    "title": "Student Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'studentId' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Gulnora Karimova",
    "clientRole": "Bosh Bibliograf",
    "clientAvatar": "mentor",
    "title": "Book Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'isbn' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Rustam Aliyev",
    "clientRole": "Savdo Direktori",
    "clientAvatar": "mentor",
    "title": "Vehicle Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'vin' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Jamshid Qodirov",
    "clientRole": "Bosh Buxgalter",
    "clientAvatar": "mentor",
    "title": "BankAccount Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'accountNo' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Malika Yusupova",
    "clientRole": "Boshqaruvchi",
    "clientAvatar": "mentor",
    "title": "HotelRoom Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'roomNo' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Otabek Sodiqov",
    "clientRole": "Bosh Oshpaz",
    "clientAvatar": "mentor",
    "title": "MenuItem Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'itemId' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Farhod Ergashev",
    "clientRole": "Texnik Direktor (CTO)",
    "clientAvatar": "mentor",
    "title": "Developer Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'devId' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
    "difficulty": "7-Qavat • Ekspert (Disjoint ISA) • Relational Mapping",
    "clientName": "Shahnoza Karimova",
    "clientRole": "Katalog Menejeri",
    "clientAvatar": "mentor",
    "title": "Product Disjoint Ixtisoslashuvi (Relatsion Sxema)",
    "story": "1-haftadagi disjoint {Mandatory, Or} modelini SQL relyatsion jadvallarga o'tkazish: har bir subklass alohida jadval bo'ladi va superklassning Birlamchi Kalitini o'ziga [PK,FK1] qilib oladi.",
    "instruction": "Subklass jadvallariga ota kalit 'sku' ni [PK,FK1] qilib joylashtiring va superklass jadvaliga bog'lang.",
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
