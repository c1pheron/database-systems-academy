var _scope = typeof window !== 'undefined' ? window : (typeof global !== 'undefined' ? global : this);
_scope.EER_CLIENTS_51_100 = [
  {
    "id": 51,
    "sector": 4,
    "difficulty": "4-Qavat • Xalqaro Turizm",
    "clientName": "Zuhra Alimova",
    "clientRole": "Sayyohlik Agentligi Direktori",
    "clientAvatar": "mentor",
    "title": "Sayyoh va Ekskursiya Paketlari (TourBooking)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Xalqaro Turizm amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Tourist** (passportNumber {PK}) va **TourPackage** (packageCode {PK}) qatnashadi. Bir Tourist bir nechta TourPackage bilan, va aksincha, bir TourPackage bir nechta Tourist bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **TourBooking** (bookingRef {PK}, `travelDate`, `adultCount`, `specialMealRequest`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Tourist' va 'TourPackage' o'rtasida assotsiativ 'TourBooking' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 52,
    "sector": 4,
    "difficulty": "4-Qavat • Ovoz Yozish Studiyasi",
    "clientName": "Doniyor Karimov",
    "clientRole": "Musiqa Produseri",
    "clientAvatar": "mentor",
    "title": "Musiqachi va Audio Trek Hamkorligi (TrackContribution)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Ovoz Yozish Studiyasi amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Musician** (artistId {PK}) va **Track** (isrcCode {PK}) qatnashadi. Bir Musician bir nechta Track bilan, va aksincha, bir Track bir nechta Musician bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **TrackContribution** (contribId {PK}, `roleType`, `royaltySplitRatio`, `recordingStudio`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Musician' va 'Track' o'rtasida assotsiativ 'TrackContribution' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 53,
    "sector": 4,
    "difficulty": "4-Qavat • Kinematografiya",
    "clientName": "Nodira Qosimova",
    "clientRole": "Kasting Direktori",
    "clientAvatar": "mentor",
    "title": "Aktyor va Film Kasting Shartnomasi (CastingContract)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Kinematografiya amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Actor** (actorCardId {PK}) va **Film** (filmCode {PK}) qatnashadi. Bir Actor bir nechta Film bilan, va aksincha, bir Film bir nechta Actor bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **CastingContract** (contractNo {PK}, `characterName`, `compensationSum`, `isLeadRole`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Actor' va 'Film' o'rtasida assotsiativ 'CastingContract' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 54,
    "sector": 4,
    "difficulty": "4-Qavat • Magistral Logistika",
    "clientName": "Ilhom Sobirov",
    "clientRole": "Logistika Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Yuk Mashinasi va Tranzit Yo'nalishi (DeliveryTrip)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Magistral Logistika amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Truck** (truckPlate {PK}) va **Route** (routeId {PK}) qatnashadi. Bir Truck bir nechta Route bilan, va aksincha, bir Route bir nechta Truck bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **DeliveryTrip** (tripTicketNo {PK}, `dispatchTime`, `fuelLitersUsed`, `driverStaffId`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Truck' va 'Route' o'rtasida assotsiativ 'DeliveryTrip' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 55,
    "sector": 4,
    "difficulty": "4-Qavat • Ishlab Chiqarish Zavodi",
    "clientName": "G'ayrat Normatov",
    "clientRole": "Bosh Texnolog",
    "clientAvatar": "mentor",
    "title": "Tayyor Mahsulot va Xomashyo Komponentlari (BillOfMaterial)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Ishlab Chiqarish Zavodi amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Product** (productNo {PK}) va **RawMaterial** (materialCode {PK}) qatnashadi. Bir Product bir nechta RawMaterial bilan, va aksincha, bir RawMaterial bir nechta Product bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **BillOfMaterial** (bomItemId {PK}, `requiredQuantity`, `wastageTolerancePercent`, `assemblySequenceNo`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Product' va 'RawMaterial' o'rtasida assotsiativ 'BillOfMaterial' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 56,
    "sector": 4,
    "difficulty": "4-Qavat • Xalqaro Sammit",
    "clientName": "Saida Mirzayeva",
    "clientRole": "Konferensiya Tashkilotchisi",
    "clientAvatar": "mentor",
    "title": "Konferensiya Ishtirokchisi va Seminar Sessiyalari (SessionRegistration)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Xalqaro Sammit amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Delegate** (badgeId {PK}) va **WorkshopSession** (sessionCode {PK}) qatnashadi. Bir Delegate bir nechta WorkshopSession bilan, va aksincha, bir WorkshopSession bir nechta Delegate bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **SessionRegistration** (regTicketId {PK}, `registeredAt`, `attendedAttendance`, `feedbackScore`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Delegate' va 'WorkshopSession' o'rtasida assotsiativ 'SessionRegistration' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 57,
    "sector": 4,
    "difficulty": "4-Qavat • Tashqi Iqtisodiy Faoliyat",
    "clientName": "Farrux Yusupov",
    "clientRole": "Bojxona Bosh Nazoratchisi",
    "clientAvatar": "mentor",
    "title": "Eksportchi Korxona va Bojxona Nazorati Posti (CustomsDeclaration)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Tashqi Iqtisodiy Faoliyat amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Exporter** (exporterInn {PK}) va **CustomsPost** (postCode {PK}) qatnashadi. Bir Exporter bir nechta CustomsPost bilan, va aksincha, bir CustomsPost bir nechta Exporter bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **CustomsDeclaration** (gtdNumber {PK}, `cargoInvoiceSum`, `customsDutyPaid`, `clearanceDate`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Exporter' va 'CustomsPost' o'rtasida assotsiativ 'CustomsDeclaration' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 58,
    "sector": 4,
    "difficulty": "4-Qavat • Raqamli OAV & Portal",
    "clientName": "Nilufar Jo'rayeva",
    "clientRole": "Bosh Redaktor",
    "clientAvatar": "mentor",
    "title": "Yangilik Maqolasi va Tematik Teglar (ArticleTagMap)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. Raqamli OAV & Portal amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Article** (articleSlug {PK}) va **ContentTag** (tagId {PK}) qatnashadi. Bir Article bir nechta ContentTag bilan, va aksincha, bir ContentTag bir nechta Article bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **ArticleTagMap** (mappingId {PK}, `attachedOrder`, `autoSuggestedByAi`, `relevanceScore`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Article' va 'ContentTag' o'rtasida assotsiativ 'ArticleTagMap' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 59,
    "sector": 4,
    "difficulty": "4-Qavat • O'quv Markazi",
    "clientName": "Sanjar Fayziyev",
    "clientRole": "O'quv Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "O'qituvchi va O'quv Xonasi Dars Jadvali (LessonSchedule)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. O'quv Markazi amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Instructor** (tutorId {PK}) va **Classroom** (roomCode {PK}) qatnashadi. Bir Instructor bir nechta Classroom bilan, va aksincha, bir Classroom bir nechta Instructor bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **LessonSchedule** (scheduleEntryId {PK}, `dayOfWeek`, `lessonPeriod`, `studyGroupId`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Instructor' va 'Classroom' o'rtasida assotsiativ 'LessonSchedule' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 60,
    "sector": 4,
    "difficulty": "4-Qavat • B2B Savdo Tarmog'i",
    "clientName": "Shohruh Vohidov",
    "clientRole": "Ta'minot Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Chakana Savdo Tarmog'i va Dilerlik Shartnomasi (SupplyContract)",
    "story": "Kompaniyada ikki tomonlama erkin hamkorlikni ta'minlovchi ko'pga-ko'p (*..*) munosabatlarni hisobga olish tizimi joriy etilmoqda. B2B Savdo Tarmog'i amaliyotida ushbu jarayonlar maxsus oraliq hujjatlar orqali rasmiylashtiriladi.\n\nTizimda mustaqil ishtirokchilar sifatida **Retailer** (storeChainId {PK}) va **Supplier** (supplierInn {PK}) qatnashadi. Bir Retailer bir nechta Supplier bilan, va aksincha, bir Supplier bir nechta Retailer bilan o'zaro aloqada bo'lishi mumkin.\n\nMunosabatning o'ziga xos atributlarini saqlash uchun assotsiativ entitiy **SupplyContract** (contractDocNo {PK}, `monthlyOrderMinimum`, `paymentTermDays`, `penaltyRatePercent`) kiritiladi. Ushbu entitiy ikki tomonni birlashtiradi.",
    "instruction": "'Retailer' va 'Supplier' o'rtasida assotsiativ 'SupplyContract' entitiysini joylashtiring va munosabatlarni to'g'ri bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 61,
    "sector": 5,
    "difficulty": "5-Qavat • Mehmonxona Xonalari",
    "clientName": "Zulfiya Karimova",
    "clientRole": "Xonalar Menejeri",
    "clientAvatar": "mentor",
    "title": "Mehmonxona va Xonalar (Zaif Entitiy)",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Mehmonxona Xonalari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **Hotel** (hotelId {PK}, `hotelName`, `starRating`, `city`) qayd etiladi. Uning tarkibida esa zaif entitiy **Room** hisobga olinadi.\n\nZaif entitiy **Room** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `roomNo`) va `bedCount`, `floorNo`, `dailyPrice` atributlariga ega. Ota **Hotel** yo'qolsa, uning barcha **Room** lari ham o'chib ketadi. Bog'lanish: **HasRoom** (1..1 : 1..*).",
    "instruction": "'Hotel' kuchli entitiysini va unga bo'ysunuvchi zaif 'Room' entitiysini chizing, 'roomNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Bino Qavatlari",
    "clientName": "Rustam Mahmudov",
    "clientRole": "Bino Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Biznes Markaz Binosi va Qavatlari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Bino Qavatlari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **Building** (buildingId {PK}, `buildingName`, `streetAddress`, `totalFloors`) qayd etiladi. Uning tarkibida esa zaif entitiy **BuildingFloor** hisobga olinadi.\n\nZaif entitiy **BuildingFloor** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `floorNo`) va `emergencyExitCount`, `usableAreaSqm` atributlariga ega. Ota **Building** yo'qolsa, uning barcha **BuildingFloor** lari ham o'chib ketadi. Bog'lanish: **ContainsFloor** (1..1 : 1..*).",
    "instruction": "'Building' kuchli entitiysini va unga bo'ysunuvchi zaif 'BuildingFloor' entitiysini chizing, 'floorNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Korporativ Xodimlar Oila A'zolari",
    "clientName": "Nargiza Sodiqova",
    "clientRole": "HR Ijtimoiy Himoya Menejeri",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimi va Qaramog'idagilar (Dependent)",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Korporativ Xodimlar Oila A'zolari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **Employee** (empId {PK}, `empName`, `department`, `salary`) qayd etiladi. Uning tarkibida esa zaif entitiy **Dependent** hisobga olinadi.\n\nZaif entitiy **Dependent** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `depName`) va `relationshipType`, `birthDate`, `gender` atributlariga ega. Ota **Employee** yo'qolsa, uning barcha **Dependent** lari ham o'chib ketadi. Bog'lanish: **HasDependent** (1..1 : 0..*).",
    "instruction": "'Employee' kuchli entitiysini va unga bo'ysunuvchi zaif 'Dependent' entitiysini chizing, 'depName' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 64,
    "sector": 5,
    "difficulty": "5-Qavat • Kutubxona Nusxalari",
    "clientName": "Mansur Aliyev",
    "clientRole": "Fond Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Kitob Asari va Uning Fizik Nusxalari (BookCopy)",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Kutubxona Nusxalari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **BookTitle** (isbn {PK}, `title`, `author`, `editionYear`) qayd etiladi. Uning tarkibida esa zaif entitiy **BookCopy** hisobga olinadi.\n\nZaif entitiy **BookCopy** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `copyNo`) va `conditionStatus`, `shelfBay`, `isAvailable` atributlariga ega. Ota **BookTitle** yo'qolsa, uning barcha **BookCopy** lari ham o'chib ketadi. Bog'lanish: **HasCopy** (1..1 : 1..*).",
    "instruction": "'BookTitle' kuchli entitiysini va unga bo'ysunuvchi zaif 'BookCopy' entitiysini chizing, 'copyNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Bank Tranzaksiyalari",
    "clientName": "Alisher Toirov",
    "clientRole": "Audit Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Hisobi va Tranzaksiya Yozuvlari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Bank Tranzaksiyalari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **BankAccount** (accountNo {PK}, `holderName`, `currency`, `balance`) qayd etiladi. Uning tarkibida esa zaif entitiy **AccountTransaction** hisobga olinadi.\n\nZaif entitiy **AccountTransaction** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `txSeqNo`) va `txAmount`, `txTimestamp`, `terminalCode` atributlariga ega. Ota **BankAccount** yo'qolsa, uning barcha **AccountTransaction** lari ham o'chib ketadi. Bog'lanish: **LogsTx** (1..1 : 0..*).",
    "instruction": "'BankAccount' kuchli entitiysini va unga bo'ysunuvchi zaif 'AccountTransaction' entitiysini chizing, 'txSeqNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
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
    }
  },
  {
    "id": 66,
    "sector": 5,
    "difficulty": "5-Qavat • Aviaparvoz Chiptalari",
    "clientName": "Oleg Petrov",
    "clientRole": "Parvoz Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Aviaparvoz Reysi va Parvoz Chiptalari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Aviaparvoz Chiptalari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **FlightSchedule** (flightNo {PK}, `originIata`, `destIata`, `depTime`) qayd etiladi. Uning tarkibida esa zaif entitiy **BoardingPass** hisobga olinadi.\n\nZaif entitiy **BoardingPass** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `seatNo`) va `passengerName`, `gateNumber`, `boardingGroup` atributlariga ega. Ota **FlightSchedule** yo'qolsa, uning barcha **BoardingPass** lari ham o'chib ketadi. Bog'lanish: **IssuesPass** (1..1 : 1..*).",
    "instruction": "'FlightSchedule' kuchli entitiysini va unga bo'ysunuvchi zaif 'BoardingPass' entitiysini chizing, 'seatNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Turar-Joy Majmuasi",
    "clientName": "Sherzod Qodirov",
    "clientRole": "Uy-Joy Boshqarmasi",
    "clientAvatar": "mentor",
    "title": "Turar-Joy Binosi va Kvartiralar Reyestri",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Turar-Joy Majmuasi sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **ApartmentComplex** (complexId {PK}, `complexName`, `street`, `blockLetter`) qayd etiladi. Uning tarkibida esa zaif entitiy **FlatUnit** hisobga olinadi.\n\nZaif entitiy **FlatUnit** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `flatNo`) va `roomsCount`, `areaSqm`, `floorLevel` atributlariga ega. Ota **ApartmentComplex** yo'qolsa, uning barcha **FlatUnit** lari ham o'chib ketadi. Bog'lanish: **ComprisesFlat** (1..1 : 1..*).",
    "instruction": "'ApartmentComplex' kuchli entitiysini va unga bo'ysunuvchi zaif 'FlatUnit' entitiysini chizing, 'flatNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Farmatsevtika Partiyalari",
    "clientName": "Kamola Umarova",
    "clientRole": "Sifat Nazorati Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Dori Formulari va Ishlab Chiqarish Partiyalari (Batch)",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Farmatsevtika Partiyalari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **DrugFormula** (formulaCode {PK}, `chemicalName`, `patentExpDate`, `dosageMg`) qayd etiladi. Uning tarkibida esa zaif entitiy **BatchLot** hisobga olinadi.\n\nZaif entitiy **BatchLot** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `lotNumber`) va `prodDate`, `expiryDate`, `labTechStaffId` atributlariga ega. Ota **DrugFormula** yo'qolsa, uning barcha **BatchLot** lari ham o'chib ketadi. Bog'lanish: **ProducedInLot** (1..1 : 1..*).",
    "instruction": "'DrugFormula' kuchli entitiysini va unga bo'ysunuvchi zaif 'BatchLot' entitiysini chizing, 'lotNumber' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Onlayn Kurs Darslari",
    "clientName": "Jaloliddin Sobirov",
    "clientRole": "Metodist",
    "clientAvatar": "mentor",
    "title": "Onlayn Kurs va Uning Dars Modullari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Onlayn Kurs Darslari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **OnlineCourse** (courseId {PK}, `courseTitle`, `authorName`, `priceUsd`) qayd etiladi. Uning tarkibida esa zaif entitiy **CourseLesson** hisobga olinadi.\n\nZaif entitiy **CourseLesson** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `lessonSeqNo`) va `videoDurationMin`, `lessonTitle`, `isFreePreview` atributlariga ega. Ota **OnlineCourse** yo'qolsa, uning barcha **CourseLesson** lari ham o'chib ketadi. Bog'lanish: **ContainsLesson** (1..1 : 1..*).",
    "instruction": "'OnlineCourse' kuchli entitiysini va unga bo'ysunuvchi zaif 'CourseLesson' entitiysini chizing, 'lessonSeqNo' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Temir Yo'l Vagonlari",
    "clientName": "Bahrom Rustamov",
    "clientRole": "Vagon Deposi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Poyezd Marshruti va Biriktirilgan Vagonlar",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Temir Yo'l Vagonlari sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **TrainRoute** (trainNo {PK}, `routeTitle`, `departureStation`, `arrivalStation`) qayd etiladi. Uning tarkibida esa zaif entitiy **CarriageUnit** hisobga olinadi.\n\nZaif entitiy **CarriageUnit** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `coachNumber`) va `classType`, `berthCapacity`, `manufactureYear` atributlariga ega. Ota **TrainRoute** yo'qolsa, uning barcha **CarriageUnit** lari ham o'chib ketadi. Bog'lanish: **IncludesCarriage** (1..1 : 1..*).",
    "instruction": "'TrainRoute' kuchli entitiysini va unga bo'ysunuvchi zaif 'CarriageUnit' entitiysini chizing, 'coachNumber' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Tibbiy Diagnostika",
    "clientName": "Dr. Nodir Fayzullayev",
    "clientRole": "Laboratoriya Mudiri",
    "clientAvatar": "mentor",
    "title": "Laboratoriya Namunasi va Tahlil Natijalari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Tibbiy Diagnostika sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **LabSample** (sampleBarcode {PK}, `patientId`, `collectionTime`, `sampleType`) qayd etiladi. Uning tarkibida esa zaif entitiy **TestResultItem** hisobga olinadi.\n\nZaif entitiy **TestResultItem** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `testMetricCode`) va `measuredValue`, `normalRange`, `unitMeasure` atributlariga ega. Ota **LabSample** yo'qolsa, uning barcha **TestResultItem** lari ham o'chib ketadi. Bog'lanish: **YieldsResult** (1..1 : 1..*).",
    "instruction": "'LabSample' kuchli entitiysini va unga bo'ysunuvchi zaif 'TestResultItem' entitiysini chizing, 'testMetricCode' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Mashinasozlik Korxonasi",
    "clientName": "Ixtiyor Hakimov",
    "clientRole": "Texnik Xizmat Muhandisi",
    "clientAvatar": "mentor",
    "title": "Sanoat Stanogi va Texnik Ehtiyot Qismlari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Mashinasozlik Korxonasi sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **IndustrialMachine** (machineId {PK}, `modelName`, `installDate`, `powerKw`) qayd etiladi. Uning tarkibida esa zaif entitiy **ComponentSlot** hisobga olinadi.\n\nZaif entitiy **ComponentSlot** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `slotCode`) va `installedPartSerial`, `serviceLifeHours`, `lastReplaced` atributlariga ega. Ota **IndustrialMachine** yo'qolsa, uning barcha **ComponentSlot** lari ham o'chib ketadi. Bog'lanish: **FittedWith** (1..1 : 1..*).",
    "instruction": "'IndustrialMachine' kuchli entitiysini va unga bo'ysunuvchi zaif 'ComponentSlot' entitiysini chizing, 'slotCode' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Teatr Zoli",
    "clientName": "Shoira Vohidova",
    "clientRole": "Chiptaxonalar Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Teatr Zoli va Tomoshabin O'rindiqlari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Teatr Zoli sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **AuditoriumHall** (hallId {PK}, `hallName`, `soundAcousticGrade`, `screenType`) qayd etiladi. Uning tarkibida esa zaif entitiy **HallSeat** hisobga olinadi.\n\nZaif entitiy **HallSeat** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `seatNumber`) va `rowLetter`, `seatTier`, `isVipZone` atributlariga ega. Ota **AuditoriumHall** yo'qolsa, uning barcha **HallSeat** lari ham o'chib ketadi. Bog'lanish: **HasSeat** (1..1 : 1..*).",
    "instruction": "'AuditoriumHall' kuchli entitiysini va unga bo'ysunuvchi zaif 'HallSeat' entitiysini chizing, 'seatNumber' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Elektronika Zavodi",
    "clientName": "Farhod Mirzayev",
    "clientRole": "Mahsulot Arxitektori",
    "clientAvatar": "mentor",
    "title": "Smartfon Modeli va Qurilma Modifikatsiyalari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Elektronika Zavodi sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **SmartphoneModel** (modelCode {PK}, `marketingName`, `releaseYear`, `baseSocCpu`) qayd etiladi. Uning tarkibida esa zaif entitiy **HardwareConfig** hisobga olinadi.\n\nZaif entitiy **HardwareConfig** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `configCode`) va `storageGb`, `ramGb`, `colorVariant` atributlariga ega. Ota **SmartphoneModel** yo'qolsa, uning barcha **HardwareConfig** lari ham o'chib ketadi. Bog'lanish: **ConfiguredAs** (1..1 : 1..*).",
    "instruction": "'SmartphoneModel' kuchli entitiysini va unga bo'ysunuvchi zaif 'HardwareConfig' entitiysini chizing, 'configCode' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "5-Qavat • Ilmiy Nashrlar",
    "clientName": "Prof. Dilnoza Rahimova",
    "clientRole": "Ilmiy Kotib",
    "clientAvatar": "mentor",
    "title": "Ilmiy Tadqiqot Maqolasi va Ilova Fayllari",
    "story": "Tashkilotda obyektlarning mavjudlik bog'liqligi (existence dependency) asosida ishlovchi zaif entitiylar (Weak Entity) tizimi loyihalashtirilmoqda. Ilmiy Nashrlar sohasida ayrim obyektlar o'z egasisiz mustaqil mavjud bo'la olmaydi.\n\nTizimda kuchli ega (Owner) entitiy sifatida **ResearchPaper** (doiCode {PK}, `paperTitle`, `primaryAuthor`, `submissionDate`) qayd etiladi. Uning tarkibida esa zaif entitiy **SupplementaryFile** hisobga olinadi.\n\nZaif entitiy **SupplementaryFile** ning to'liq global birlamchi kaliti yo'q, u faqat qisman kalit (discriminator / PPK: `fileIndex`) va `fileChecksum`, `mimeType`, `dataSizeBytes` atributlariga ega. Ota **ResearchPaper** yo'qolsa, uning barcha **SupplementaryFile** lari ham o'chib ketadi. Bog'lanish: **AccompaniedBy** (1..1 : 0..*).",
    "instruction": "'ResearchPaper' kuchli entitiysini va unga bo'ysunuvchi zaif 'SupplementaryFile' entitiysini chizing, 'fileIndex' ni qisman kalit (PPK) deb belgilang va identifikatsiyalovchi aloqa bilan ulang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 76,
    "sector": 6,
    "difficulty": "6-Qavat • Korporativ Boshqaruv",
    "clientName": "Umar Karimov",
    "clientRole": "HR Arxitektori",
    "clientAvatar": "mentor",
    "title": "Kompaniya Xodimlari Boshqaruv Ierarxiyasi",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Korporativ Boshqaruv sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **Employee** (empId {PK}, `fullName`, `jobPosition`, `salary`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **Manages** doirasida bitta **Employee** o'z hamkasbiga nisbatan `supervisor` rolini, ikkinchisi esa `supervisee` rolini bajaradi. Multiplisitiya: **0..1** dan **0..*** gacha.",
    "instruction": "'Employee' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'Manages' aloqasini (supervisor / supervisee) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "6-Qavat • E-Commerce Mahsulotlar Daraxti",
    "clientName": "Shirin Aliyeva",
    "clientRole": "Katalog Menejeri",
    "clientAvatar": "mentor",
    "title": "Onlayn Savdo Mahsulot Kategoriyalari Daraxti",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. E-Commerce Mahsulotlar Daraxti sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **ProductCategory** (categoryId {PK}, `categoryName`, `displayOrder`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **ParentCategoryOf** doirasida bitta **ProductCategory** o'z hamkasbiga nisbatan `parentCat` rolini, ikkinchisi esa `subCat` rolini bajaradi. Multiplisitiya: **0..1** dan **0..*** gacha.",
    "instruction": "'ProductCategory' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'ParentCategoryOf' aloqasini (parentCat / subCat) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 78,
    "sector": 6,
    "difficulty": "6-Qavat • Mashinasozlik Detallari",
    "clientName": "Temur Salimov",
    "clientRole": "Bosh Konstruktor",
    "clientAvatar": "mentor",
    "title": "Sanoat Detallari va Komponentlar Ierarxiyasi",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Mashinasozlik Detallari sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **PartComponent** (partNumber {PK}, `partName`, `unitCost`, `weightKg`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **AssembledFrom** doirasida bitta **PartComponent** o'z hamkasbiga nisbatan `parentAssembly` rolini, ikkinchisi esa `subComponent` rolini bajaradi. Multiplisitiya: **0..*** dan **0..*** gacha.",
    "instruction": "'PartComponent' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'AssembledFrom' aloqasini (parentAssembly / subComponent) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 79,
    "sector": 6,
    "difficulty": "6-Qavat • Oliy Ta'lim Dasturlari",
    "clientName": "Dr. Lola Rahimova",
    "clientRole": "O'quv-Uslubiy Boshqarma",
    "clientAvatar": "mentor",
    "title": "Universitet Fanlari va Prerekvizit Talablari",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Oliy Ta'lim Dasturlari sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **AcademicCourse** (courseCode {PK}, `courseTitle`, `creditUnits`, `level`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **RequiresPrereq** doirasida bitta **AcademicCourse** o'z hamkasbiga nisbatan `advancedCourse` rolini, ikkinchisi esa `prerequisiteCourse` rolini bajaradi. Multiplisitiya: **0..*** dan **0..*** gacha.",
    "instruction": "'AcademicCourse' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'RequiresPrereq' aloqasini (advancedCourse / prerequisiteCourse) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 80,
    "sector": 6,
    "difficulty": "6-Qavat • Fuqarolik Holati Dalolatnomalari",
    "clientName": "Zulfiya Olimova",
    "clientRole": "FHDYo Mudiri",
    "clientAvatar": "mentor",
    "title": "Fuqaro va Qonuniy Nikoh Rishtasi",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Fuqarolik Holati Dalolatnomalari sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **Citizen** (pinfl {PK}, `fullName`, `gender`, `birthDate`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **MarriedTo** doirasida bitta **Citizen** o'z hamkasbiga nisbatan `spouseA` rolini, ikkinchisi esa `spouseB` rolini bajaradi. Multiplisitiya: **0..1** dan **0..1** gacha.",
    "instruction": "'Citizen' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'MarriedTo' aloqasini (spouseA / spouseB) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 81,
    "sector": 6,
    "difficulty": "6-Qavat • Aviakompaniya Reyslari",
    "clientName": "Sanjar Vohidov",
    "clientRole": "Tranzit Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Tranzit Aviaparvoz Qatnovlari Zanjiri",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Aviakompaniya Reyslari sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **FlightLeg** (legId {PK}, `routeCode`, `depAirport`, `arrAirport`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **ConnectsTo** doirasida bitta **FlightLeg** o'z hamkasbiga nisbatan `inboundLeg` rolini, ikkinchisi esa `outboundConnectingLeg` rolini bajaradi. Multiplisitiya: **0..1** dan **0..1** gacha.",
    "instruction": "'FlightLeg' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'ConnectsTo' aloqasini (inboundLeg / outboundConnectingLeg) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 82,
    "sector": 6,
    "difficulty": "6-Qavat • Dasturiy Paketlar Menejeri",
    "clientName": "Akmal Saidov",
    "clientRole": "DevOps Arxitektori",
    "clientAvatar": "mentor",
    "title": "Dasturiy Modullar Bog'liqlik Grafigi",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Dasturiy Paketlar Menejeri sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **SoftwarePackage** (packageId {PK}, `packageName`, `semanticVersion`, `licenseType`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **DependsOn** doirasida bitta **SoftwarePackage** o'z hamkasbiga nisbatan `dependentModule` rolini, ikkinchisi esa `requiredDependency` rolini bajaradi. Multiplisitiya: **0..*** dan **0..*** gacha.",
    "instruction": "'SoftwarePackage' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'DependsOn' aloqasini (dependentModule / requiredDependency) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 83,
    "sector": 6,
    "difficulty": "6-Qavat • Xalqaro Shaxmat Federatsiyasi",
    "clientName": "Grossmeyster Rustam Qodirov",
    "clientRole": "Bosh Hakam",
    "clientAvatar": "mentor",
    "title": "Shaxmat Musobaqasi Ishtirokchilar Juftligi",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Xalqaro Shaxmat Federatsiyasi sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **ChessMaster** (fideId {PK}, `masterName`, `eloRating`, `federationCountry`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **PlaysMatch** doirasida bitta **ChessMaster** o'z hamkasbiga nisbatan `whitePlayer` rolini, ikkinchisi esa `blackPlayer` rolini bajaradi. Multiplisitiya: **0..*** dan **0..*** gacha.",
    "instruction": "'ChessMaster' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'PlaysMatch' aloqasini (whitePlayer / blackPlayer) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 84,
    "sector": 6,
    "difficulty": "6-Qavat • Tarixiy Nasabnoma",
    "clientName": "Bobur Mahmudov",
    "clientRole": "Shajarashunos Olim",
    "clientAvatar": "mentor",
    "title": "Tarixiy Shaxslar Nasl-Nasab Shajarasi",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Tarixiy Nasabnoma sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **HistoricalFigure** (personId {PK}, `fullName`, `birthCentury`, `dynastyTitle`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **AncestorOf** doirasida bitta **HistoricalFigure** o'z hamkasbiga nisbatan `parentAncestor` rolini, ikkinchisi esa `childDescendant` rolini bajaradi. Multiplisitiya: **0..*** dan **0..2** gacha.",
    "instruction": "'HistoricalFigure' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'AncestorOf' aloqasini (parentAncestor / childDescendant) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 85,
    "sector": 6,
    "difficulty": "6-Qavat • Oliy Sud Qonunchiligi",
    "clientName": "Dilorom Yusupova",
    "clientRole": "Sudya Konsultanti",
    "clientAvatar": "mentor",
    "title": "Sud Ishlari va Sud Pretsedenti Iqtiboslari",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Oliy Sud Qonunchiligi sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **LegalPrecedent** (caseNo {PK}, `verdictYear`, `jurisdictionCourt`, `lawArticle`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **CitesPrecedent** doirasida bitta **LegalPrecedent** o'z hamkasbiga nisbatan `currentRulingCase` rolini, ikkinchisi esa `citedPrecedentCase` rolini bajaradi. Multiplisitiya: **0..*** dan **0..*** gacha.",
    "instruction": "'LegalPrecedent' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'CitesPrecedent' aloqasini (currentRulingCase / citedPrecedentCase) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 86,
    "sector": 6,
    "difficulty": "6-Qavat • Ijtimoiy Tarmoq",
    "clientName": "Javlon Sharipov",
    "clientRole": "Ijtimoiy Graf Muhandisi",
    "clientAvatar": "mentor",
    "title": "Foydalanuvchi va Kuzatuvchilar Tarmog'i",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Ijtimoiy Tarmoq sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **NetworkUser** (userHandle {PK}, `displayName`, `joinDate`, `isVerified`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **FollowsUser** doirasida bitta **NetworkUser** o'z hamkasbiga nisbatan `followerUser` rolini, ikkinchisi esa `followedUser` rolini bajaradi. Multiplisitiya: **0..*** dan **0..*** gacha.",
    "instruction": "'NetworkUser' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'FollowsUser' aloqasini (followerUser / followedUser) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 87,
    "sector": 6,
    "difficulty": "6-Qavat • Xalqaro Xoldinglar",
    "clientName": "Mansur Toirov",
    "clientRole": "Korporativ Huquqshunos",
    "clientAvatar": "mentor",
    "title": "Xalqaro Xolding va Sho''ba Korxonalari",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Xalqaro Xoldinglar sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **CorporateEnterprise** (holdingId {PK}, `corporateName`, `hqCountry`, `capitalUsd`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **SubsidiaryOf** doirasida bitta **CorporateEnterprise** o'z hamkasbiga nisbatan `parentHolding` rolini, ikkinchisi esa `daughterCompany` rolini bajaradi. Multiplisitiya: **0..1** dan **0..*** gacha.",
    "instruction": "'CorporateEnterprise' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'SubsidiaryOf' aloqasini (parentHolding / daughterCompany) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "6-Qavat • Metropoliten Magistrali",
    "clientName": "Otabek Rustamov",
    "clientRole": "Metro Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Metro Bekatlari Ketma-ketlik Zanjiri",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Metropoliten Magistrali sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **MetroStation** (stationCode {PK}, `stationName`, `lineColor`, `zoneNo`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **AdjacentTo** doirasida bitta **MetroStation** o'z hamkasbiga nisbatan `precedingStop` rolini, ikkinchisi esa `succeedingStop` rolini bajaradi. Multiplisitiya: **0..1** dan **0..1** gacha.",
    "instruction": "'MetroStation' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'AdjacentTo' aloqasini (precedingStop / succeedingStop) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 89,
    "sector": 6,
    "difficulty": "6-Qavat • Virusologiya & Epidemiologiya",
    "clientName": "Dr. Farrux Fayziyev",
    "clientRole": "Bosh Genetik",
    "clientAvatar": "mentor",
    "title": "Virus Shtammlari Mutatsiya Ierarxiyasi",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Virusologiya & Epidemiologiya sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **PathogenStrain** (strainId {PK}, `genomeSeqHash`, `isolationDate`, `virulenceRate`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **MutatedFrom** doirasida bitta **PathogenStrain** o'z hamkasbiga nisbatan `ancestralStrain` rolini, ikkinchisi esa `mutantLineage` rolini bajaradi. Multiplisitiya: **0..1** dan **0..*** gacha.",
    "instruction": "'PathogenStrain' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'MutatedFrom' aloqasini (ancestralStrain / mutantLineage) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
    "difficulty": "6-Qavat • Qidiruv Tizimi Web Grafigi",
    "clientName": "Sardor Mirzayev",
    "clientRole": "Qidiruv Algoritmlari Arxitektori",
    "clientAvatar": "mentor",
    "title": "Internet Veb Sahifalari va Giperhavolalar",
    "story": "Tashkilot ichki tuzilmasida bir xil turdagi ob'yektlarning o'zaro rekursiv ierarxiyasini modellashtirish talab etiladi. Qidiruv Tizimi Web Grafigi sohasida daraxtsimon tuzilmalar keng uchraydi.\n\nTizimda yagona markaziy entitiy — **WebDocument** (pageUrl {PK}, `pageTitle`, `pageRankScore`, `lastCrawled`) mavjud. Har bir nusxa ushbu entitiyning to'laqonli a'zosi hisoblanadi.\n\nRekursiv munosabat **HyperlinksTo** doirasida bitta **WebDocument** o'z hamkasbiga nisbatan `referringPage` rolini, ikkinchisi esa `targetLinkedPage` rolini bajaradi. Multiplisitiya: **0..*** dan **0..*** gacha.",
    "instruction": "'WebDocument' entitiysini polotnoga qo'ying va uning o'zidan-o'ziga rekursiv 'HyperlinksTo' aloqasini (referringPage / targetLinkedPage) rollari bilan bog'lang.",
    "starterDiagram": {
      "entities": [],
      "relationships": []
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
      ]
    }
  },
  {
    "id": 91,
    "sector": 7,
    "difficulty": "7-Qavat • Aviatsiya Muhandisligi",
    "clientName": "Davron Salimov",
    "clientRole": "Aviapark Boshqaruvchisi",
    "clientAvatar": "mentor",
    "title": "Havo Kemalarini Disjoint Ixtisoslashtirish",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Aviatsiya Muhandisligi standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Aircraft** (tailNo {PK}, `model`, `manufacturer`, `capacity`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **PassengerPlane** (`seatCount`, `entertainmentSystem`) va **CargoPlane** (`maxPayloadTons`, `cargoDoorType`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Aircraft' superklassidan 'PassengerPlane' va 'CargoPlane' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Klinik Gospital",
    "clientName": "Dr. Malika Ahmedova",
    "clientRole": "Gospital Bosh Shifokori",
    "clientAvatar": "mentor",
    "title": "Gospital Bemorlari: InPatient va OutPatient",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Klinik Gospital standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Patient** (patientId {PK}, `fullName`, `dob`, `bloodType`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **InPatient** (`bedNumber`, `admissionDate`) va **OutPatient** (`clinicVisitDate`, `doctorNotes`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Patient' superklassidan 'InPatient' va 'OutPatient' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Universitet Talabalari",
    "clientName": "Jahongir Vohidov",
    "clientRole": "Registrator Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Talabalar: Undergraduate va Postgraduate",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Universitet Talabalari standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Student** (studentId {PK}, `firstName`, `lastName`, `email`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **Undergraduate** (`highSchoolDiploma`, `creditsCompleted`) va **Postgraduate** (`bachelorDegreeNo`, `thesisTopic`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Student' superklassidan 'Undergraduate' va 'Postgraduate' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Kutubxona Katalogi",
    "clientName": "Sevara Karimova",
    "clientRole": "Elektron Resurslar Mudiri",
    "clientAvatar": "mentor",
    "title": "Kitoblar: EBook va PrintBook Ixtisoslashuvi",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Kutubxona Katalogi standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Book** (isbn {PK}, `title`, `author`, `publishYear`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **EBook** (`fileFormat`, `fileSizeBytes`) va **PrintBook** (`shelfLocation`, `coverType`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Book' superklassidan 'EBook' va 'PrintBook' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Avtotransport Logistikasi",
    "clientName": "Ulug'bek Rustamov",
    "clientRole": "Avtopark Dispetcheri",
    "clientAvatar": "mentor",
    "title": "Avtomobillar: ElectricVehicle va CombustionCar",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Avtotransport Logistikasi standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Vehicle** (vin {PK}, `make`, `model`, `price`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **ElectricVehicle** (`batteryKwh`, `chargingTimeHrs`) va **CombustionCar** (`fuelTankLiters`, `emissionClass`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Vehicle' superklassidan 'ElectricVehicle' va 'CombustionCar' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Bank Hisoblari",
    "clientName": "Nodir Salimov",
    "clientRole": "Depozit Bo'limi Boshlig'i",
    "clientAvatar": "mentor",
    "title": "Bank Hisoblari: SavingsAccount va CheckingAccount",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Bank Hisoblari standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **BankAccount** (accountNo {PK}, `balance`, `currency`, `openDate`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **SavingsAccount** (`interestRatePercent`, `minBalance`) va **CheckingAccount** (`overdraftLimit`, `checkbookNo`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'BankAccount' superklassidan 'SavingsAccount' va 'CheckingAccount' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Mehmonxona Joylashtirish",
    "clientName": "Munira Yusupova",
    "clientRole": "Bron Qilish Menejeri",
    "clientAvatar": "mentor",
    "title": "Xonalar: StandardRoom va PresidentialSuite",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Mehmonxona Joylashtirish standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **HotelRoom** (roomNo {PK}, `roomType`, `pricePerNight`, `floorNo`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **StandardRoom** (`singleBedCount`, `hasBalcony`) va **PresidentialSuite** (`livingRoomCount`, `hasJacuzzi`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'HotelRoom' superklassidan 'StandardRoom' va 'PresidentialSuite' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Restoran Taomnomasi",
    "clientName": "Sanjar Qodirov",
    "clientRole": "Restoran Shef Oshpazi",
    "clientAvatar": "mentor",
    "title": "Taomnoma: VegetarianDish va MeatDish",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Restoran Taomnomasi standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **MenuItem** (itemId {PK}, `name`, `category`, `price`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **VegetarianDish** (`organicCertified`, `dairyFree`) va **MeatDish** (`meatType`, `cookTimeMin`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'MenuItem' superklassidan 'VegetarianDish' va 'MeatDish' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Dasturchilar Jamoasi",
    "clientName": "Akmal Saidov",
    "clientRole": "Texnik Lider",
    "clientAvatar": "mentor",
    "title": "Muhandislar: FrontendDev va BackendDev",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Dasturchilar Jamoasi standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Developer** (devId {PK}, `fullName`, `techStack`, `salary`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **FrontendDev** (`uiFramework`, `designSkillLevel`) va **BackendDev** (`dbEngine`, `cloudCertified`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Developer' superklassidan 'FrontendDev' va 'BackendDev' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
    "difficulty": "7-Qavat • Marketpleys Tovarlari",
    "clientName": "Shahlo Rahimova",
    "clientRole": "Elektron Savdo Menejeri",
    "clientAvatar": "mentor",
    "title": "Mahsulotlar: DigitalProduct va PhysicalProduct",
    "story": "Kompaniya xizmat turlarini mutlaqo alohida, kesishmaydigan ixtisoslashuvlarga ajratishni rejalashtirmoqda. Marketpleys Tovarlari standartlariga ko'ra, umumiy ob'yekt xususiyatlari va tor ixtisoslashgan parametrlar farqlanishi shart.\n\nUmumiy superklass sifatida **Product** (sku {PK}, `title`, `price`, `stockQty`) xizmat qiladi.\n\nUshbu superklassdan ikkita disjoint subklass ajratiladi: **DigitalProduct** (`downloadUrl`, `licenseKeyCount`) va **PhysicalProduct** (`dimensionsCm`, `shippingFee`). Har bir nusxa majburiy ravishda yo birinchisi, yo ikkinchisi bo'ladi: **{Mandatory, Or}**.",
    "instruction": "'Product' superklassidan 'DigitalProduct' va 'PhysicalProduct' subklasslarini {Mandatory, Or} cheklovi bilan ISA uchburchagi orqali ulang.",
    "starterDiagram": {
      "entities": [],
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
