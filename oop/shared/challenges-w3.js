// WIUT OOP (5COSC018C) — WEEK 3 DATASET (150 PROGRESSIVE CHALLENGES)
window.OOP_CHALLENGES_W3 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "1. Uzum Market — 'PremiumProduct' Merosxo'r Sinifini Yaratish",
      "en": "1. Uzum Market — Subclassing with 'PremiumProduct'"
    },
    "scenario": {
      "uz": "Uzum Market tizimida 'Product' tayanch sinfidan meros oluvchi 'PremiumProduct' klassini e'lon qiling ('extends Product'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumProduct' from 'Product' using extends in Uzum Market. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "Product",
        "PremiumProduct"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Product {\n    public String title = \"Uzum Market Base\";\n}\n\nclass PremiumProduct extends Product {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumProduct item = new PremiumProduct();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumProduct extends Product { ... }",
      "breakdown": [
        "<code>extends Product</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "2. Payme Wallet — 'PremiumWalletUser' Merosxo'r Sinifini Yaratish",
      "en": "2. Payme Wallet — Subclassing with 'PremiumWalletUser'"
    },
    "scenario": {
      "uz": "Payme Wallet tizimida 'WalletUser' tayanch sinfidan meros oluvchi 'PremiumWalletUser' klassini e'lon qiling ('extends WalletUser'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumWalletUser' from 'WalletUser' using extends in Payme Wallet. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "WalletUser",
        "PremiumWalletUser"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUser {\n    public String title = \"Payme Wallet Base\";\n}\n\nclass PremiumWalletUser extends WalletUser {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumWalletUser item = new PremiumWalletUser();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumWalletUser extends WalletUser { ... }",
      "breakdown": [
        "<code>extends WalletUser</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "3. Yandex Go — 'PremiumTaxiRide' Merosxo'r Sinifini Yaratish",
      "en": "3. Yandex Go — Subclassing with 'PremiumTaxiRide'"
    },
    "scenario": {
      "uz": "Yandex Go tizimida 'TaxiRide' tayanch sinfidan meros oluvchi 'PremiumTaxiRide' klassini e'lon qiling ('extends TaxiRide'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumTaxiRide' from 'TaxiRide' using extends in Yandex Go. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "TaxiRide",
        "PremiumTaxiRide"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRide {\n    public String title = \"Yandex Go Base\";\n}\n\nclass PremiumTaxiRide extends TaxiRide {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumTaxiRide item = new PremiumTaxiRide();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumTaxiRide extends TaxiRide { ... }",
      "breakdown": [
        "<code>extends TaxiRide</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "4. Korzinka Go — 'PremiumLoyaltyCard' Merosxo'r Sinifini Yaratish",
      "en": "4. Korzinka Go — Subclassing with 'PremiumLoyaltyCard'"
    },
    "scenario": {
      "uz": "Korzinka Go tizimida 'LoyaltyCard' tayanch sinfidan meros oluvchi 'PremiumLoyaltyCard' klassini e'lon qiling ('extends LoyaltyCard'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumLoyaltyCard' from 'LoyaltyCard' using extends in Korzinka Go. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard",
        "PremiumLoyaltyCard"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCard {\n    public String title = \"Korzinka Go Base\";\n}\n\nclass PremiumLoyaltyCard extends LoyaltyCard {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumLoyaltyCard item = new PremiumLoyaltyCard();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumLoyaltyCard extends LoyaltyCard { ... }",
      "breakdown": [
        "<code>extends LoyaltyCard</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "5. WIUT Portal — 'PremiumStudent' Merosxo'r Sinifini Yaratish",
      "en": "5. WIUT Portal — Subclassing with 'PremiumStudent'"
    },
    "scenario": {
      "uz": "WIUT Portal tizimida 'Student' tayanch sinfidan meros oluvchi 'PremiumStudent' klassini e'lon qiling ('extends Student'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumStudent' from 'Student' using extends in WIUT Portal. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "Student",
        "PremiumStudent"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Student {\n    public String title = \"WIUT Portal Base\";\n}\n\nclass PremiumStudent extends Student {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumStudent item = new PremiumStudent();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumStudent extends Student { ... }",
      "breakdown": [
        "<code>extends Student</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "6. Click Pay — 'PremiumPaymentTxn' Merosxo'r Sinifini Yaratish",
      "en": "6. Click Pay — Subclassing with 'PremiumPaymentTxn'"
    },
    "scenario": {
      "uz": "Click Pay tizimida 'PaymentTxn' tayanch sinfidan meros oluvchi 'PremiumPaymentTxn' klassini e'lon qiling ('extends PaymentTxn'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumPaymentTxn' from 'PaymentTxn' using extends in Click Pay. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "PaymentTxn",
        "PremiumPaymentTxn"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxn {\n    public String title = \"Click Pay Base\";\n}\n\nclass PremiumPaymentTxn extends PaymentTxn {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumPaymentTxn item = new PremiumPaymentTxn();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumPaymentTxn extends PaymentTxn { ... }",
      "breakdown": [
        "<code>extends PaymentTxn</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "7. Telegram Bot — 'PremiumBotMessage' Merosxo'r Sinifini Yaratish",
      "en": "7. Telegram Bot — Subclassing with 'PremiumBotMessage'"
    },
    "scenario": {
      "uz": "Telegram Bot tizimida 'BotMessage' tayanch sinfidan meros oluvchi 'PremiumBotMessage' klassini e'lon qiling ('extends BotMessage'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumBotMessage' from 'BotMessage' using extends in Telegram Bot. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "BotMessage",
        "PremiumBotMessage"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessage {\n    public String title = \"Telegram Bot Base\";\n}\n\nclass PremiumBotMessage extends BotMessage {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumBotMessage item = new PremiumBotMessage();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumBotMessage extends BotMessage { ... }",
      "breakdown": [
        "<code>extends BotMessage</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "8. UzAirways — 'PremiumFlightTicket' Merosxo'r Sinifini Yaratish",
      "en": "8. UzAirways — Subclassing with 'PremiumFlightTicket'"
    },
    "scenario": {
      "uz": "UzAirways tizimida 'FlightTicket' tayanch sinfidan meros oluvchi 'PremiumFlightTicket' klassini e'lon qiling ('extends FlightTicket'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumFlightTicket' from 'FlightTicket' using extends in UzAirways. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "FlightTicket",
        "PremiumFlightTicket"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicket {\n    public String title = \"UzAirways Base\";\n}\n\nclass PremiumFlightTicket extends FlightTicket {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumFlightTicket item = new PremiumFlightTicket();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumFlightTicket extends FlightTicket { ... }",
      "breakdown": [
        "<code>extends FlightTicket</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "9. IT Park Academy — 'PremiumBootcampCourse' Merosxo'r Sinifini Yaratish",
      "en": "9. IT Park Academy — Subclassing with 'PremiumBootcampCourse'"
    },
    "scenario": {
      "uz": "IT Park Academy tizimida 'BootcampCourse' tayanch sinfidan meros oluvchi 'PremiumBootcampCourse' klassini e'lon qiling ('extends BootcampCourse'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumBootcampCourse' from 'BootcampCourse' using extends in IT Park Academy. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "BootcampCourse",
        "PremiumBootcampCourse"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourse {\n    public String title = \"IT Park Academy Base\";\n}\n\nclass PremiumBootcampCourse extends BootcampCourse {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumBootcampCourse item = new PremiumBootcampCourse();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumBootcampCourse extends BootcampCourse { ... }",
      "breakdown": [
        "<code>extends BootcampCourse</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "10. Anorbank — 'PremiumDebitCard' Merosxo'r Sinifini Yaratish",
      "en": "10. Anorbank — Subclassing with 'PremiumDebitCard'"
    },
    "scenario": {
      "uz": "Anorbank tizimida 'DebitCard' tayanch sinfidan meros oluvchi 'PremiumDebitCard' klassini e'lon qiling ('extends DebitCard'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumDebitCard' from 'DebitCard' using extends in Anorbank. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "DebitCard",
        "PremiumDebitCard"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCard {\n    public String title = \"Anorbank Base\";\n}\n\nclass PremiumDebitCard extends DebitCard {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumDebitCard item = new PremiumDebitCard();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumDebitCard extends DebitCard { ... }",
      "breakdown": [
        "<code>extends DebitCard</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "11. Oson Apteka — 'PremiumMedicine' Merosxo'r Sinifini Yaratish",
      "en": "11. Oson Apteka — Subclassing with 'PremiumMedicine'"
    },
    "scenario": {
      "uz": "Oson Apteka tizimida 'Medicine' tayanch sinfidan meros oluvchi 'PremiumMedicine' klassini e'lon qiling ('extends Medicine'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumMedicine' from 'Medicine' using extends in Oson Apteka. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "Medicine",
        "PremiumMedicine"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Medicine {\n    public String title = \"Oson Apteka Base\";\n}\n\nclass PremiumMedicine extends Medicine {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumMedicine item = new PremiumMedicine();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumMedicine extends Medicine { ... }",
      "breakdown": [
        "<code>extends Medicine</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "12. Evos FastFood — 'PremiumFoodOrder' Merosxo'r Sinifini Yaratish",
      "en": "12. Evos FastFood — Subclassing with 'PremiumFoodOrder'"
    },
    "scenario": {
      "uz": "Evos FastFood tizimida 'FoodOrder' tayanch sinfidan meros oluvchi 'PremiumFoodOrder' klassini e'lon qiling ('extends FoodOrder'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumFoodOrder' from 'FoodOrder' using extends in Evos FastFood. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "FoodOrder",
        "PremiumFoodOrder"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrder {\n    public String title = \"Evos FastFood Base\";\n}\n\nclass PremiumFoodOrder extends FoodOrder {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumFoodOrder item = new PremiumFoodOrder();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumFoodOrder extends FoodOrder { ... }",
      "breakdown": [
        "<code>extends FoodOrder</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "13. Bellissimo Pizza — 'PremiumPizzaOrder' Merosxo'r Sinifini Yaratish",
      "en": "13. Bellissimo Pizza — Subclassing with 'PremiumPizzaOrder'"
    },
    "scenario": {
      "uz": "Bellissimo Pizza tizimida 'PizzaOrder' tayanch sinfidan meros oluvchi 'PremiumPizzaOrder' klassini e'lon qiling ('extends PizzaOrder'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumPizzaOrder' from 'PizzaOrder' using extends in Bellissimo Pizza. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "PizzaOrder",
        "PremiumPizzaOrder"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrder {\n    public String title = \"Bellissimo Pizza Base\";\n}\n\nclass PremiumPizzaOrder extends PizzaOrder {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumPizzaOrder item = new PremiumPizzaOrder();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumPizzaOrder extends PizzaOrder { ... }",
      "breakdown": [
        "<code>extends PizzaOrder</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "14. Milliy TV — 'PremiumBroadcastShow' Merosxo'r Sinifini Yaratish",
      "en": "14. Milliy TV — Subclassing with 'PremiumBroadcastShow'"
    },
    "scenario": {
      "uz": "Milliy TV tizimida 'BroadcastShow' tayanch sinfidan meros oluvchi 'PremiumBroadcastShow' klassini e'lon qiling ('extends BroadcastShow'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumBroadcastShow' from 'BroadcastShow' using extends in Milliy TV. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "BroadcastShow",
        "PremiumBroadcastShow"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShow {\n    public String title = \"Milliy TV Base\";\n}\n\nclass PremiumBroadcastShow extends BroadcastShow {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumBroadcastShow item = new PremiumBroadcastShow();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumBroadcastShow extends BroadcastShow { ... }",
      "breakdown": [
        "<code>extends BroadcastShow</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "15. Spotify Sound — 'PremiumAudioTrack' Merosxo'r Sinifini Yaratish",
      "en": "15. Spotify Sound — Subclassing with 'PremiumAudioTrack'"
    },
    "scenario": {
      "uz": "Spotify Sound tizimida 'AudioTrack' tayanch sinfidan meros oluvchi 'PremiumAudioTrack' klassini e'lon qiling ('extends AudioTrack'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumAudioTrack' from 'AudioTrack' using extends in Spotify Sound. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "AudioTrack",
        "PremiumAudioTrack"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrack {\n    public String title = \"Spotify Sound Base\";\n}\n\nclass PremiumAudioTrack extends AudioTrack {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumAudioTrack item = new PremiumAudioTrack();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumAudioTrack extends AudioTrack { ... }",
      "breakdown": [
        "<code>extends AudioTrack</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "16. Smart Thermostat — 'PremiumThermostat' Merosxo'r Sinifini Yaratish",
      "en": "16. Smart Thermostat — Subclassing with 'PremiumThermostat'"
    },
    "scenario": {
      "uz": "Smart Thermostat tizimida 'Thermostat' tayanch sinfidan meros oluvchi 'PremiumThermostat' klassini e'lon qiling ('extends Thermostat'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumThermostat' from 'Thermostat' using extends in Smart Thermostat. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "PremiumThermostat"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Thermostat {\n    public String title = \"Smart Thermostat Base\";\n}\n\nclass PremiumThermostat extends Thermostat {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumThermostat item = new PremiumThermostat();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumThermostat extends Thermostat { ... }",
      "breakdown": [
        "<code>extends Thermostat</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "17. Drone Delivery — 'PremiumDeliveryDrone' Merosxo'r Sinifini Yaratish",
      "en": "17. Drone Delivery — Subclassing with 'PremiumDeliveryDrone'"
    },
    "scenario": {
      "uz": "Drone Delivery tizimida 'DeliveryDrone' tayanch sinfidan meros oluvchi 'PremiumDeliveryDrone' klassini e'lon qiling ('extends DeliveryDrone'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumDeliveryDrone' from 'DeliveryDrone' using extends in Drone Delivery. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone",
        "PremiumDeliveryDrone"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDrone {\n    public String title = \"Drone Delivery Base\";\n}\n\nclass PremiumDeliveryDrone extends DeliveryDrone {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumDeliveryDrone item = new PremiumDeliveryDrone();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumDeliveryDrone extends DeliveryDrone { ... }",
      "breakdown": [
        "<code>extends DeliveryDrone</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "18. Smart Warehouse — 'PremiumStorageBay' Merosxo'r Sinifini Yaratish",
      "en": "18. Smart Warehouse — Subclassing with 'PremiumStorageBay'"
    },
    "scenario": {
      "uz": "Smart Warehouse tizimida 'StorageBay' tayanch sinfidan meros oluvchi 'PremiumStorageBay' klassini e'lon qiling ('extends StorageBay'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumStorageBay' from 'StorageBay' using extends in Smart Warehouse. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "StorageBay",
        "PremiumStorageBay"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBay {\n    public String title = \"Smart Warehouse Base\";\n}\n\nclass PremiumStorageBay extends StorageBay {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumStorageBay item = new PremiumStorageBay();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumStorageBay extends StorageBay { ... }",
      "breakdown": [
        "<code>extends StorageBay</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "19. Crypto Wallet — 'PremiumCryptoAsset' Merosxo'r Sinifini Yaratish",
      "en": "19. Crypto Wallet — Subclassing with 'PremiumCryptoAsset'"
    },
    "scenario": {
      "uz": "Crypto Wallet tizimida 'CryptoAsset' tayanch sinfidan meros oluvchi 'PremiumCryptoAsset' klassini e'lon qiling ('extends CryptoAsset'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumCryptoAsset' from 'CryptoAsset' using extends in Crypto Wallet. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "CryptoAsset",
        "PremiumCryptoAsset"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAsset {\n    public String title = \"Crypto Wallet Base\";\n}\n\nclass PremiumCryptoAsset extends CryptoAsset {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumCryptoAsset item = new PremiumCryptoAsset();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumCryptoAsset extends CryptoAsset { ... }",
      "breakdown": [
        "<code>extends CryptoAsset</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "20. National Library — 'PremiumCatalogBook' Merosxo'r Sinifini Yaratish",
      "en": "20. National Library — Subclassing with 'PremiumCatalogBook'"
    },
    "scenario": {
      "uz": "National Library tizimida 'CatalogBook' tayanch sinfidan meros oluvchi 'PremiumCatalogBook' klassini e'lon qiling ('extends CatalogBook'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumCatalogBook' from 'CatalogBook' using extends in National Library. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "CatalogBook",
        "PremiumCatalogBook"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBook {\n    public String title = \"National Library Base\";\n}\n\nclass PremiumCatalogBook extends CatalogBook {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumCatalogBook item = new PremiumCatalogBook();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumCatalogBook extends CatalogBook { ... }",
      "breakdown": [
        "<code>extends CatalogBook</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "21. BeFit Club — 'PremiumGymMember' Merosxo'r Sinifini Yaratish",
      "en": "21. BeFit Club — Subclassing with 'PremiumGymMember'"
    },
    "scenario": {
      "uz": "BeFit Club tizimida 'GymMember' tayanch sinfidan meros oluvchi 'PremiumGymMember' klassini e'lon qiling ('extends GymMember'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumGymMember' from 'GymMember' using extends in BeFit Club. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "GymMember",
        "PremiumGymMember"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class GymMember {\n    public String title = \"BeFit Club Base\";\n}\n\nclass PremiumGymMember extends GymMember {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumGymMember item = new PremiumGymMember();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumGymMember extends GymMember { ... }",
      "breakdown": [
        "<code>extends GymMember</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "22. Tashkent Parking — 'PremiumParkingBay' Merosxo'r Sinifini Yaratish",
      "en": "22. Tashkent Parking — Subclassing with 'PremiumParkingBay'"
    },
    "scenario": {
      "uz": "Tashkent Parking tizimida 'ParkingBay' tayanch sinfidan meros oluvchi 'PremiumParkingBay' klassini e'lon qiling ('extends ParkingBay'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumParkingBay' from 'ParkingBay' using extends in Tashkent Parking. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "ParkingBay",
        "PremiumParkingBay"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBay {\n    public String title = \"Tashkent Parking Base\";\n}\n\nclass PremiumParkingBay extends ParkingBay {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumParkingBay item = new PremiumParkingBay();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumParkingBay extends ParkingBay { ... }",
      "breakdown": [
        "<code>extends ParkingBay</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "23. Medion Clinic — 'PremiumPatientRecord' Merosxo'r Sinifini Yaratish",
      "en": "23. Medion Clinic — Subclassing with 'PremiumPatientRecord'"
    },
    "scenario": {
      "uz": "Medion Clinic tizimida 'PatientRecord' tayanch sinfidan meros oluvchi 'PremiumPatientRecord' klassini e'lon qiling ('extends PatientRecord'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumPatientRecord' from 'PatientRecord' using extends in Medion Clinic. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "PatientRecord",
        "PremiumPatientRecord"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecord {\n    public String title = \"Medion Clinic Base\";\n}\n\nclass PremiumPatientRecord extends PatientRecord {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumPatientRecord item = new PremiumPatientRecord();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumPatientRecord extends PatientRecord { ... }",
      "breakdown": [
        "<code>extends PatientRecord</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "24. Hyatt Regency — 'PremiumHotelReservation' Merosxo'r Sinifini Yaratish",
      "en": "24. Hyatt Regency — Subclassing with 'PremiumHotelReservation'"
    },
    "scenario": {
      "uz": "Hyatt Regency tizimida 'HotelReservation' tayanch sinfidan meros oluvchi 'PremiumHotelReservation' klassini e'lon qiling ('extends HotelReservation'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumHotelReservation' from 'HotelReservation' using extends in Hyatt Regency. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "HotelReservation",
        "PremiumHotelReservation"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservation {\n    public String title = \"Hyatt Regency Base\";\n}\n\nclass PremiumHotelReservation extends HotelReservation {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumHotelReservation item = new PremiumHotelReservation();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumHotelReservation extends HotelReservation { ... }",
      "breakdown": [
        "<code>extends HotelReservation</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "25. Premier Cinema — 'PremiumCinemaTicket' Merosxo'r Sinifini Yaratish",
      "en": "25. Premier Cinema — Subclassing with 'PremiumCinemaTicket'"
    },
    "scenario": {
      "uz": "Premier Cinema tizimida 'CinemaTicket' tayanch sinfidan meros oluvchi 'PremiumCinemaTicket' klassini e'lon qiling ('extends CinemaTicket'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumCinemaTicket' from 'CinemaTicket' using extends in Premier Cinema. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "CinemaTicket",
        "PremiumCinemaTicket"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicket {\n    public String title = \"Premier Cinema Base\";\n}\n\nclass PremiumCinemaTicket extends CinemaTicket {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumCinemaTicket item = new PremiumCinemaTicket();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumCinemaTicket extends CinemaTicket { ... }",
      "breakdown": [
        "<code>extends CinemaTicket</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "26. Yandex Scooter — 'PremiumElectricScooter' Merosxo'r Sinifini Yaratish",
      "en": "26. Yandex Scooter — Subclassing with 'PremiumElectricScooter'"
    },
    "scenario": {
      "uz": "Yandex Scooter tizimida 'ElectricScooter' tayanch sinfidan meros oluvchi 'PremiumElectricScooter' klassini e'lon qiling ('extends ElectricScooter'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumElectricScooter' from 'ElectricScooter' using extends in Yandex Scooter. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "ElectricScooter",
        "PremiumElectricScooter"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooter {\n    public String title = \"Yandex Scooter Base\";\n}\n\nclass PremiumElectricScooter extends ElectricScooter {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumElectricScooter item = new PremiumElectricScooter();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumElectricScooter extends ElectricScooter { ... }",
      "breakdown": [
        "<code>extends ElectricScooter</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "27. Weather Network — 'PremiumMeteoStation' Merosxo'r Sinifini Yaratish",
      "en": "27. Weather Network — Subclassing with 'PremiumMeteoStation'"
    },
    "scenario": {
      "uz": "Weather Network tizimida 'MeteoStation' tayanch sinfidan meros oluvchi 'PremiumMeteoStation' klassini e'lon qiling ('extends MeteoStation'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumMeteoStation' from 'MeteoStation' using extends in Weather Network. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "MeteoStation",
        "PremiumMeteoStation"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStation {\n    public String title = \"Weather Network Base\";\n}\n\nclass PremiumMeteoStation extends MeteoStation {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumMeteoStation item = new PremiumMeteoStation();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumMeteoStation extends MeteoStation { ... }",
      "breakdown": [
        "<code>extends MeteoStation</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "28. OpenMarket Auction — 'PremiumAuctionLot' Merosxo'r Sinifini Yaratish",
      "en": "28. OpenMarket Auction — Subclassing with 'PremiumAuctionLot'"
    },
    "scenario": {
      "uz": "OpenMarket Auction tizimida 'AuctionLot' tayanch sinfidan meros oluvchi 'PremiumAuctionLot' klassini e'lon qiling ('extends AuctionLot'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumAuctionLot' from 'AuctionLot' using extends in OpenMarket Auction. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "AuctionLot",
        "PremiumAuctionLot"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLot {\n    public String title = \"OpenMarket Auction Base\";\n}\n\nclass PremiumAuctionLot extends AuctionLot {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumAuctionLot item = new PremiumAuctionLot();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumAuctionLot extends AuctionLot { ... }",
      "breakdown": [
        "<code>extends AuctionLot</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "29. Solar Energy Grid — 'PremiumSolarInverter' Merosxo'r Sinifini Yaratish",
      "en": "29. Solar Energy Grid — Subclassing with 'PremiumSolarInverter'"
    },
    "scenario": {
      "uz": "Solar Energy Grid tizimida 'SolarInverter' tayanch sinfidan meros oluvchi 'PremiumSolarInverter' klassini e'lon qiling ('extends SolarInverter'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumSolarInverter' from 'SolarInverter' using extends in Solar Energy Grid. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "SolarInverter",
        "PremiumSolarInverter"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverter {\n    public String title = \"Solar Energy Grid Base\";\n}\n\nclass PremiumSolarInverter extends SolarInverter {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumSolarInverter item = new PremiumSolarInverter();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumSolarInverter extends SolarInverter { ... }",
      "breakdown": [
        "<code>extends SolarInverter</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: 'extends' va Asosiy Merosxo'rlik",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "30. O'zbekiston Temir Yo'llari — 'PremiumTrainRoute' Merosxo'r Sinifini Yaratish",
      "en": "30. O'zbekiston Temir Yo'llari — Subclassing with 'PremiumTrainRoute'"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari tizimida 'TrainRoute' tayanch sinfidan meros oluvchi 'PremiumTrainRoute' klassini e'lon qiling ('extends TrainRoute'). Unga 'vipPerk' (String) maydoni qo'shing.",
      "en": "Derive 'PremiumTrainRoute' from 'TrainRoute' using extends in O'zbekiston Temir Yo'llari. Add 'vipPerk' (String)."
    },
    "requirements": {
      "classes": [
        "TrainRoute",
        "PremiumTrainRoute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRoute {\n    public String title = \"O'zbekiston Temir Yo'llari Base\";\n}\n\nclass PremiumTrainRoute extends TrainRoute {\n    public String vipPerk = \"Chegirma\";\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PremiumTrainRoute item = new PremiumTrainRoute();\n        System.out.println(item.title + \" -> \" + item.vipPerk);\n    }\n}",
    "detailedSolution": {
      "theory": "Merosxo'rlik (Inheritance) kodni takrorlamasdan tayanch sinfdagi barcha ochiq maydon va metodlarni avlod sinfga o'tkazish imkonini beradi (IS-A munosabati).",
      "theoryEn": "Inheritance achieves code reuse via the IS-A hierarchy, giving derived classes access to non-private superclass members.",
      "cleanCode": "class PremiumTrainRoute extends TrainRoute { ... }",
      "breakdown": [
        "<code>extends TrainRoute</code>: Tayanch sinf imkoniyatlarini kengaytirish."
      ],
      "pitfalls": "Java'da bir vaqtning o'zida ikkita sinfdan meros olib bo'lmaydi (bitta sinf faqat bitta ota sinfga ega bo'ladi).",
      "cw2Tip": "CW2 da turli xil tovarlar (BeverageItem, FoodItem, DessertItem) umumiy MenuItem sinfidan meros oladi."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "31. Uzum Market — Ota Konstruktorni Chaqirish ('super')",
      "en": "31. Uzum Market — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Uzum Market da 'Product' konstruktori 'name' parametrini talab qiladi. 'SpecialProduct' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Uzum Market. Call 'super(name)' as the very first line inside 'SpecialProduct'."
    },
    "requirements": {
      "classes": [
        "Product",
        "SpecialProduct"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialProduct"
      ]
    },
    "starterCode": "",
    "solution": "class Product {\n    public String name;\n    public Product(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialProduct extends Product {\n    public int extraPoints;\n    public SpecialProduct(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialProduct obj = new SpecialProduct(\"Uzum Market Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialProduct(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "32. Payme Wallet — Ota Konstruktorni Chaqirish ('super')",
      "en": "32. Payme Wallet — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Payme Wallet da 'WalletUser' konstruktori 'name' parametrini talab qiladi. 'SpecialWalletUser' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Payme Wallet. Call 'super(name)' as the very first line inside 'SpecialWalletUser'."
    },
    "requirements": {
      "classes": [
        "WalletUser",
        "SpecialWalletUser"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialWalletUser"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUser {\n    public String name;\n    public WalletUser(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialWalletUser extends WalletUser {\n    public int extraPoints;\n    public SpecialWalletUser(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialWalletUser obj = new SpecialWalletUser(\"Payme Wallet Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialWalletUser(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "33. Yandex Go — Ota Konstruktorni Chaqirish ('super')",
      "en": "33. Yandex Go — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Yandex Go da 'TaxiRide' konstruktori 'name' parametrini talab qiladi. 'SpecialTaxiRide' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Yandex Go. Call 'super(name)' as the very first line inside 'SpecialTaxiRide'."
    },
    "requirements": {
      "classes": [
        "TaxiRide",
        "SpecialTaxiRide"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialTaxiRide"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRide {\n    public String name;\n    public TaxiRide(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialTaxiRide extends TaxiRide {\n    public int extraPoints;\n    public SpecialTaxiRide(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialTaxiRide obj = new SpecialTaxiRide(\"Yandex Go Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialTaxiRide(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "34. Korzinka Go — Ota Konstruktorni Chaqirish ('super')",
      "en": "34. Korzinka Go — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Korzinka Go da 'LoyaltyCard' konstruktori 'name' parametrini talab qiladi. 'SpecialLoyaltyCard' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Korzinka Go. Call 'super(name)' as the very first line inside 'SpecialLoyaltyCard'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard",
        "SpecialLoyaltyCard"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialLoyaltyCard"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCard {\n    public String name;\n    public LoyaltyCard(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialLoyaltyCard extends LoyaltyCard {\n    public int extraPoints;\n    public SpecialLoyaltyCard(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialLoyaltyCard obj = new SpecialLoyaltyCard(\"Korzinka Go Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialLoyaltyCard(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "35. WIUT Portal — Ota Konstruktorni Chaqirish ('super')",
      "en": "35. WIUT Portal — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "WIUT Portal da 'Student' konstruktori 'name' parametrini talab qiladi. 'SpecialStudent' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in WIUT Portal. Call 'super(name)' as the very first line inside 'SpecialStudent'."
    },
    "requirements": {
      "classes": [
        "Student",
        "SpecialStudent"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialStudent"
      ]
    },
    "starterCode": "",
    "solution": "class Student {\n    public String name;\n    public Student(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialStudent extends Student {\n    public int extraPoints;\n    public SpecialStudent(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialStudent obj = new SpecialStudent(\"WIUT Portal Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialStudent(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "36. Click Pay — Ota Konstruktorni Chaqirish ('super')",
      "en": "36. Click Pay — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Click Pay da 'PaymentTxn' konstruktori 'name' parametrini talab qiladi. 'SpecialPaymentTxn' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Click Pay. Call 'super(name)' as the very first line inside 'SpecialPaymentTxn'."
    },
    "requirements": {
      "classes": [
        "PaymentTxn",
        "SpecialPaymentTxn"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialPaymentTxn"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxn {\n    public String name;\n    public PaymentTxn(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialPaymentTxn extends PaymentTxn {\n    public int extraPoints;\n    public SpecialPaymentTxn(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialPaymentTxn obj = new SpecialPaymentTxn(\"Click Pay Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialPaymentTxn(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "37. Telegram Bot — Ota Konstruktorni Chaqirish ('super')",
      "en": "37. Telegram Bot — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Telegram Bot da 'BotMessage' konstruktori 'name' parametrini talab qiladi. 'SpecialBotMessage' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Telegram Bot. Call 'super(name)' as the very first line inside 'SpecialBotMessage'."
    },
    "requirements": {
      "classes": [
        "BotMessage",
        "SpecialBotMessage"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialBotMessage"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessage {\n    public String name;\n    public BotMessage(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialBotMessage extends BotMessage {\n    public int extraPoints;\n    public SpecialBotMessage(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialBotMessage obj = new SpecialBotMessage(\"Telegram Bot Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialBotMessage(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "38. UzAirways — Ota Konstruktorni Chaqirish ('super')",
      "en": "38. UzAirways — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "UzAirways da 'FlightTicket' konstruktori 'name' parametrini talab qiladi. 'SpecialFlightTicket' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in UzAirways. Call 'super(name)' as the very first line inside 'SpecialFlightTicket'."
    },
    "requirements": {
      "classes": [
        "FlightTicket",
        "SpecialFlightTicket"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialFlightTicket"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicket {\n    public String name;\n    public FlightTicket(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialFlightTicket extends FlightTicket {\n    public int extraPoints;\n    public SpecialFlightTicket(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialFlightTicket obj = new SpecialFlightTicket(\"UzAirways Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialFlightTicket(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "39. IT Park Academy — Ota Konstruktorni Chaqirish ('super')",
      "en": "39. IT Park Academy — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "IT Park Academy da 'BootcampCourse' konstruktori 'name' parametrini talab qiladi. 'SpecialBootcampCourse' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in IT Park Academy. Call 'super(name)' as the very first line inside 'SpecialBootcampCourse'."
    },
    "requirements": {
      "classes": [
        "BootcampCourse",
        "SpecialBootcampCourse"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialBootcampCourse"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourse {\n    public String name;\n    public BootcampCourse(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialBootcampCourse extends BootcampCourse {\n    public int extraPoints;\n    public SpecialBootcampCourse(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialBootcampCourse obj = new SpecialBootcampCourse(\"IT Park Academy Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialBootcampCourse(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "40. Anorbank — Ota Konstruktorni Chaqirish ('super')",
      "en": "40. Anorbank — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Anorbank da 'DebitCard' konstruktori 'name' parametrini talab qiladi. 'SpecialDebitCard' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Anorbank. Call 'super(name)' as the very first line inside 'SpecialDebitCard'."
    },
    "requirements": {
      "classes": [
        "DebitCard",
        "SpecialDebitCard"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialDebitCard"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCard {\n    public String name;\n    public DebitCard(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialDebitCard extends DebitCard {\n    public int extraPoints;\n    public SpecialDebitCard(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialDebitCard obj = new SpecialDebitCard(\"Anorbank Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialDebitCard(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "41. Oson Apteka — Ota Konstruktorni Chaqirish ('super')",
      "en": "41. Oson Apteka — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Oson Apteka da 'Medicine' konstruktori 'name' parametrini talab qiladi. 'SpecialMedicine' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Oson Apteka. Call 'super(name)' as the very first line inside 'SpecialMedicine'."
    },
    "requirements": {
      "classes": [
        "Medicine",
        "SpecialMedicine"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialMedicine"
      ]
    },
    "starterCode": "",
    "solution": "class Medicine {\n    public String name;\n    public Medicine(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialMedicine extends Medicine {\n    public int extraPoints;\n    public SpecialMedicine(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialMedicine obj = new SpecialMedicine(\"Oson Apteka Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialMedicine(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "42. Evos FastFood — Ota Konstruktorni Chaqirish ('super')",
      "en": "42. Evos FastFood — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Evos FastFood da 'FoodOrder' konstruktori 'name' parametrini talab qiladi. 'SpecialFoodOrder' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Evos FastFood. Call 'super(name)' as the very first line inside 'SpecialFoodOrder'."
    },
    "requirements": {
      "classes": [
        "FoodOrder",
        "SpecialFoodOrder"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialFoodOrder"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrder {\n    public String name;\n    public FoodOrder(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialFoodOrder extends FoodOrder {\n    public int extraPoints;\n    public SpecialFoodOrder(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialFoodOrder obj = new SpecialFoodOrder(\"Evos FastFood Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialFoodOrder(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "43. Bellissimo Pizza — Ota Konstruktorni Chaqirish ('super')",
      "en": "43. Bellissimo Pizza — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'PizzaOrder' konstruktori 'name' parametrini talab qiladi. 'SpecialPizzaOrder' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Bellissimo Pizza. Call 'super(name)' as the very first line inside 'SpecialPizzaOrder'."
    },
    "requirements": {
      "classes": [
        "PizzaOrder",
        "SpecialPizzaOrder"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialPizzaOrder"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrder {\n    public String name;\n    public PizzaOrder(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialPizzaOrder extends PizzaOrder {\n    public int extraPoints;\n    public SpecialPizzaOrder(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialPizzaOrder obj = new SpecialPizzaOrder(\"Bellissimo Pizza Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialPizzaOrder(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "44. Milliy TV — Ota Konstruktorni Chaqirish ('super')",
      "en": "44. Milliy TV — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Milliy TV da 'BroadcastShow' konstruktori 'name' parametrini talab qiladi. 'SpecialBroadcastShow' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Milliy TV. Call 'super(name)' as the very first line inside 'SpecialBroadcastShow'."
    },
    "requirements": {
      "classes": [
        "BroadcastShow",
        "SpecialBroadcastShow"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialBroadcastShow"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShow {\n    public String name;\n    public BroadcastShow(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialBroadcastShow extends BroadcastShow {\n    public int extraPoints;\n    public SpecialBroadcastShow(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialBroadcastShow obj = new SpecialBroadcastShow(\"Milliy TV Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialBroadcastShow(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "45. Spotify Sound — Ota Konstruktorni Chaqirish ('super')",
      "en": "45. Spotify Sound — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Spotify Sound da 'AudioTrack' konstruktori 'name' parametrini talab qiladi. 'SpecialAudioTrack' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Spotify Sound. Call 'super(name)' as the very first line inside 'SpecialAudioTrack'."
    },
    "requirements": {
      "classes": [
        "AudioTrack",
        "SpecialAudioTrack"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialAudioTrack"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrack {\n    public String name;\n    public AudioTrack(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialAudioTrack extends AudioTrack {\n    public int extraPoints;\n    public SpecialAudioTrack(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialAudioTrack obj = new SpecialAudioTrack(\"Spotify Sound Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialAudioTrack(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "46. Smart Thermostat — Ota Konstruktorni Chaqirish ('super')",
      "en": "46. Smart Thermostat — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'Thermostat' konstruktori 'name' parametrini talab qiladi. 'SpecialThermostat' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Smart Thermostat. Call 'super(name)' as the very first line inside 'SpecialThermostat'."
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "SpecialThermostat"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialThermostat"
      ]
    },
    "starterCode": "",
    "solution": "class Thermostat {\n    public String name;\n    public Thermostat(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialThermostat extends Thermostat {\n    public int extraPoints;\n    public SpecialThermostat(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialThermostat obj = new SpecialThermostat(\"Smart Thermostat Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialThermostat(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "47. Drone Delivery — Ota Konstruktorni Chaqirish ('super')",
      "en": "47. Drone Delivery — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Drone Delivery da 'DeliveryDrone' konstruktori 'name' parametrini talab qiladi. 'SpecialDeliveryDrone' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Drone Delivery. Call 'super(name)' as the very first line inside 'SpecialDeliveryDrone'."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone",
        "SpecialDeliveryDrone"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialDeliveryDrone"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDrone {\n    public String name;\n    public DeliveryDrone(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialDeliveryDrone extends DeliveryDrone {\n    public int extraPoints;\n    public SpecialDeliveryDrone(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialDeliveryDrone obj = new SpecialDeliveryDrone(\"Drone Delivery Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialDeliveryDrone(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "48. Smart Warehouse — Ota Konstruktorni Chaqirish ('super')",
      "en": "48. Smart Warehouse — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'StorageBay' konstruktori 'name' parametrini talab qiladi. 'SpecialStorageBay' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Smart Warehouse. Call 'super(name)' as the very first line inside 'SpecialStorageBay'."
    },
    "requirements": {
      "classes": [
        "StorageBay",
        "SpecialStorageBay"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialStorageBay"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBay {\n    public String name;\n    public StorageBay(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialStorageBay extends StorageBay {\n    public int extraPoints;\n    public SpecialStorageBay(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialStorageBay obj = new SpecialStorageBay(\"Smart Warehouse Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialStorageBay(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "49. Crypto Wallet — Ota Konstruktorni Chaqirish ('super')",
      "en": "49. Crypto Wallet — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'CryptoAsset' konstruktori 'name' parametrini talab qiladi. 'SpecialCryptoAsset' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Crypto Wallet. Call 'super(name)' as the very first line inside 'SpecialCryptoAsset'."
    },
    "requirements": {
      "classes": [
        "CryptoAsset",
        "SpecialCryptoAsset"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialCryptoAsset"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAsset {\n    public String name;\n    public CryptoAsset(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialCryptoAsset extends CryptoAsset {\n    public int extraPoints;\n    public SpecialCryptoAsset(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialCryptoAsset obj = new SpecialCryptoAsset(\"Crypto Wallet Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialCryptoAsset(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "50. National Library — Ota Konstruktorni Chaqirish ('super')",
      "en": "50. National Library — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "National Library da 'CatalogBook' konstruktori 'name' parametrini talab qiladi. 'SpecialCatalogBook' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in National Library. Call 'super(name)' as the very first line inside 'SpecialCatalogBook'."
    },
    "requirements": {
      "classes": [
        "CatalogBook",
        "SpecialCatalogBook"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialCatalogBook"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBook {\n    public String name;\n    public CatalogBook(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialCatalogBook extends CatalogBook {\n    public int extraPoints;\n    public SpecialCatalogBook(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialCatalogBook obj = new SpecialCatalogBook(\"National Library Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialCatalogBook(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "51. BeFit Club — Ota Konstruktorni Chaqirish ('super')",
      "en": "51. BeFit Club — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "BeFit Club da 'GymMember' konstruktori 'name' parametrini talab qiladi. 'SpecialGymMember' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in BeFit Club. Call 'super(name)' as the very first line inside 'SpecialGymMember'."
    },
    "requirements": {
      "classes": [
        "GymMember",
        "SpecialGymMember"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialGymMember"
      ]
    },
    "starterCode": "",
    "solution": "class GymMember {\n    public String name;\n    public GymMember(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialGymMember extends GymMember {\n    public int extraPoints;\n    public SpecialGymMember(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialGymMember obj = new SpecialGymMember(\"BeFit Club Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialGymMember(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "52. Tashkent Parking — Ota Konstruktorni Chaqirish ('super')",
      "en": "52. Tashkent Parking — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'ParkingBay' konstruktori 'name' parametrini talab qiladi. 'SpecialParkingBay' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Tashkent Parking. Call 'super(name)' as the very first line inside 'SpecialParkingBay'."
    },
    "requirements": {
      "classes": [
        "ParkingBay",
        "SpecialParkingBay"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialParkingBay"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBay {\n    public String name;\n    public ParkingBay(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialParkingBay extends ParkingBay {\n    public int extraPoints;\n    public SpecialParkingBay(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialParkingBay obj = new SpecialParkingBay(\"Tashkent Parking Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialParkingBay(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "53. Medion Clinic — Ota Konstruktorni Chaqirish ('super')",
      "en": "53. Medion Clinic — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Medion Clinic da 'PatientRecord' konstruktori 'name' parametrini talab qiladi. 'SpecialPatientRecord' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Medion Clinic. Call 'super(name)' as the very first line inside 'SpecialPatientRecord'."
    },
    "requirements": {
      "classes": [
        "PatientRecord",
        "SpecialPatientRecord"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialPatientRecord"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecord {\n    public String name;\n    public PatientRecord(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialPatientRecord extends PatientRecord {\n    public int extraPoints;\n    public SpecialPatientRecord(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialPatientRecord obj = new SpecialPatientRecord(\"Medion Clinic Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialPatientRecord(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "54. Hyatt Regency — Ota Konstruktorni Chaqirish ('super')",
      "en": "54. Hyatt Regency — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'HotelReservation' konstruktori 'name' parametrini talab qiladi. 'SpecialHotelReservation' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Hyatt Regency. Call 'super(name)' as the very first line inside 'SpecialHotelReservation'."
    },
    "requirements": {
      "classes": [
        "HotelReservation",
        "SpecialHotelReservation"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialHotelReservation"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservation {\n    public String name;\n    public HotelReservation(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialHotelReservation extends HotelReservation {\n    public int extraPoints;\n    public SpecialHotelReservation(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialHotelReservation obj = new SpecialHotelReservation(\"Hyatt Regency Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialHotelReservation(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "55. Premier Cinema — Ota Konstruktorni Chaqirish ('super')",
      "en": "55. Premier Cinema — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Premier Cinema da 'CinemaTicket' konstruktori 'name' parametrini talab qiladi. 'SpecialCinemaTicket' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Premier Cinema. Call 'super(name)' as the very first line inside 'SpecialCinemaTicket'."
    },
    "requirements": {
      "classes": [
        "CinemaTicket",
        "SpecialCinemaTicket"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialCinemaTicket"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicket {\n    public String name;\n    public CinemaTicket(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialCinemaTicket extends CinemaTicket {\n    public int extraPoints;\n    public SpecialCinemaTicket(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialCinemaTicket obj = new SpecialCinemaTicket(\"Premier Cinema Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialCinemaTicket(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "56. Yandex Scooter — Ota Konstruktorni Chaqirish ('super')",
      "en": "56. Yandex Scooter — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'ElectricScooter' konstruktori 'name' parametrini talab qiladi. 'SpecialElectricScooter' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Yandex Scooter. Call 'super(name)' as the very first line inside 'SpecialElectricScooter'."
    },
    "requirements": {
      "classes": [
        "ElectricScooter",
        "SpecialElectricScooter"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialElectricScooter"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooter {\n    public String name;\n    public ElectricScooter(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialElectricScooter extends ElectricScooter {\n    public int extraPoints;\n    public SpecialElectricScooter(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialElectricScooter obj = new SpecialElectricScooter(\"Yandex Scooter Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialElectricScooter(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "57. Weather Network — Ota Konstruktorni Chaqirish ('super')",
      "en": "57. Weather Network — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Weather Network da 'MeteoStation' konstruktori 'name' parametrini talab qiladi. 'SpecialMeteoStation' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Weather Network. Call 'super(name)' as the very first line inside 'SpecialMeteoStation'."
    },
    "requirements": {
      "classes": [
        "MeteoStation",
        "SpecialMeteoStation"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialMeteoStation"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStation {\n    public String name;\n    public MeteoStation(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialMeteoStation extends MeteoStation {\n    public int extraPoints;\n    public SpecialMeteoStation(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialMeteoStation obj = new SpecialMeteoStation(\"Weather Network Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialMeteoStation(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "58. OpenMarket Auction — Ota Konstruktorni Chaqirish ('super')",
      "en": "58. OpenMarket Auction — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'AuctionLot' konstruktori 'name' parametrini talab qiladi. 'SpecialAuctionLot' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in OpenMarket Auction. Call 'super(name)' as the very first line inside 'SpecialAuctionLot'."
    },
    "requirements": {
      "classes": [
        "AuctionLot",
        "SpecialAuctionLot"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialAuctionLot"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLot {\n    public String name;\n    public AuctionLot(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialAuctionLot extends AuctionLot {\n    public int extraPoints;\n    public SpecialAuctionLot(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialAuctionLot obj = new SpecialAuctionLot(\"OpenMarket Auction Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialAuctionLot(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "59. Solar Energy Grid — Ota Konstruktorni Chaqirish ('super')",
      "en": "59. Solar Energy Grid — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'SolarInverter' konstruktori 'name' parametrini talab qiladi. 'SpecialSolarInverter' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in Solar Energy Grid. Call 'super(name)' as the very first line inside 'SpecialSolarInverter'."
    },
    "requirements": {
      "classes": [
        "SolarInverter",
        "SpecialSolarInverter"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialSolarInverter"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverter {\n    public String name;\n    public SolarInverter(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialSolarInverter extends SolarInverter {\n    public int extraPoints;\n    public SpecialSolarInverter(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialSolarInverter obj = new SpecialSolarInverter(\"Solar Energy Grid Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialSolarInverter(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: 'super()' Konstruktor Zanjiri",
    "sector": "Amaliyot",
    "title": {
      "uz": "60. O'zbekiston Temir Yo'llari — Ota Konstruktorni Chaqirish ('super')",
      "en": "60. O'zbekiston Temir Yo'llari — Super Constructor Chaining"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'TrainRoute' konstruktori 'name' parametrini talab qiladi. 'SpecialTrainRoute' konstruktori ichida birinchi qatorda 'super(name);' orqali ota konstruktorni chaqiring.",
      "en": "Chain constructors in O'zbekiston Temir Yo'llari. Call 'super(name)' as the very first line inside 'SpecialTrainRoute'."
    },
    "requirements": {
      "classes": [
        "TrainRoute",
        "SpecialTrainRoute"
      ],
      "keywords": [
        "super",
        "extends"
      ],
      "constructors": [
        "SpecialTrainRoute"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRoute {\n    public String name;\n    public TrainRoute(String name) {\n        this.name = name;\n    }\n}\n\nclass SpecialTrainRoute extends TrainRoute {\n    public int extraPoints;\n    public SpecialTrainRoute(String name, int extraPoints) {\n        super(name);\n        this.extraPoints = extraPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SpecialTrainRoute obj = new SpecialTrainRoute(\"O'zbekiston Temir Yo'llari Max\", 50);\n        System.out.println(obj.name + \" (\" + obj.extraPoints + \" ball)\");\n    }\n}",
    "detailedSolution": {
      "theory": "'super()' chaqirig'i har doim avlod sinf konstruktorining eng birinchi qatorida turishi shart. Ota sinf to'liq initsializatsiya bo'lmaguncha bola sinf maydonlari yaratilmaydi.",
      "theoryEn": "Constructor chaining requires 'super()' as the first executable line to ensure parent state is initialized before child state.",
      "cleanCode": "public SpecialTrainRoute(String name, int extraPoints) {\n    super(name);\n    this.extraPoints = extraPoints;\n}",
      "breakdown": [
        "<code>super(name);</code>: Ota sinf konstruktoriga zaruriy parametrni yetkazadi."
      ],
      "pitfalls": "'super()' dan oldin biror kod yozilsa, Java kompilyatori xatolik beradi.",
      "cw2Tip": "Viva imtihonida: 'super() qaysi qatorda turishi kerak?' Javob: Har doim birinchi qatorda!"
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "61. Uzum Market — 'calculatePrice' Metodini Qayta Yozish",
      "en": "61. Uzum Market — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Uzum Market da 'Product' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomProduct' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomProduct' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "Product",
        "CustomProduct"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Product {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomProduct extends Product {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product item = new CustomProduct();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "62. Payme Wallet — 'calculatePrice' Metodini Qayta Yozish",
      "en": "62. Payme Wallet — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Payme Wallet da 'WalletUser' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomWalletUser' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomWalletUser' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "WalletUser",
        "CustomWalletUser"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUser {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomWalletUser extends WalletUser {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser item = new CustomWalletUser();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "63. Yandex Go — 'calculatePrice' Metodini Qayta Yozish",
      "en": "63. Yandex Go — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Yandex Go da 'TaxiRide' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomTaxiRide' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomTaxiRide' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "TaxiRide",
        "CustomTaxiRide"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRide {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomTaxiRide extends TaxiRide {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide item = new CustomTaxiRide();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "64. Korzinka Go — 'calculatePrice' Metodini Qayta Yozish",
      "en": "64. Korzinka Go — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Korzinka Go da 'LoyaltyCard' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomLoyaltyCard' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomLoyaltyCard' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard",
        "CustomLoyaltyCard"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCard {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomLoyaltyCard extends LoyaltyCard {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard item = new CustomLoyaltyCard();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "65. WIUT Portal — 'calculatePrice' Metodini Qayta Yozish",
      "en": "65. WIUT Portal — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "WIUT Portal da 'Student' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomStudent' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomStudent' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "Student",
        "CustomStudent"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Student {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomStudent extends Student {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student item = new CustomStudent();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "66. Click Pay — 'calculatePrice' Metodini Qayta Yozish",
      "en": "66. Click Pay — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Click Pay da 'PaymentTxn' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomPaymentTxn' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomPaymentTxn' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "PaymentTxn",
        "CustomPaymentTxn"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxn {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomPaymentTxn extends PaymentTxn {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn item = new CustomPaymentTxn();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "67. Telegram Bot — 'calculatePrice' Metodini Qayta Yozish",
      "en": "67. Telegram Bot — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Telegram Bot da 'BotMessage' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomBotMessage' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomBotMessage' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "BotMessage",
        "CustomBotMessage"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessage {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomBotMessage extends BotMessage {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage item = new CustomBotMessage();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "68. UzAirways — 'calculatePrice' Metodini Qayta Yozish",
      "en": "68. UzAirways — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "UzAirways da 'FlightTicket' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomFlightTicket' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomFlightTicket' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "FlightTicket",
        "CustomFlightTicket"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicket {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomFlightTicket extends FlightTicket {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket item = new CustomFlightTicket();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "69. IT Park Academy — 'calculatePrice' Metodini Qayta Yozish",
      "en": "69. IT Park Academy — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "IT Park Academy da 'BootcampCourse' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomBootcampCourse' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomBootcampCourse' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "BootcampCourse",
        "CustomBootcampCourse"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourse {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomBootcampCourse extends BootcampCourse {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse item = new CustomBootcampCourse();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "70. Anorbank — 'calculatePrice' Metodini Qayta Yozish",
      "en": "70. Anorbank — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Anorbank da 'DebitCard' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomDebitCard' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomDebitCard' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "DebitCard",
        "CustomDebitCard"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCard {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomDebitCard extends DebitCard {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard item = new CustomDebitCard();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "71. Oson Apteka — 'calculatePrice' Metodini Qayta Yozish",
      "en": "71. Oson Apteka — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Oson Apteka da 'Medicine' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomMedicine' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomMedicine' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "Medicine",
        "CustomMedicine"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Medicine {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomMedicine extends Medicine {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine item = new CustomMedicine();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "72. Evos FastFood — 'calculatePrice' Metodini Qayta Yozish",
      "en": "72. Evos FastFood — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Evos FastFood da 'FoodOrder' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomFoodOrder' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomFoodOrder' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "FoodOrder",
        "CustomFoodOrder"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrder {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomFoodOrder extends FoodOrder {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder item = new CustomFoodOrder();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "73. Bellissimo Pizza — 'calculatePrice' Metodini Qayta Yozish",
      "en": "73. Bellissimo Pizza — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'PizzaOrder' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomPizzaOrder' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomPizzaOrder' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "PizzaOrder",
        "CustomPizzaOrder"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrder {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomPizzaOrder extends PizzaOrder {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder item = new CustomPizzaOrder();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "74. Milliy TV — 'calculatePrice' Metodini Qayta Yozish",
      "en": "74. Milliy TV — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Milliy TV da 'BroadcastShow' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomBroadcastShow' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomBroadcastShow' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "BroadcastShow",
        "CustomBroadcastShow"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShow {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomBroadcastShow extends BroadcastShow {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow item = new CustomBroadcastShow();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "75. Spotify Sound — 'calculatePrice' Metodini Qayta Yozish",
      "en": "75. Spotify Sound — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Spotify Sound da 'AudioTrack' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomAudioTrack' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomAudioTrack' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "AudioTrack",
        "CustomAudioTrack"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrack {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomAudioTrack extends AudioTrack {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack item = new CustomAudioTrack();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "76. Smart Thermostat — 'calculatePrice' Metodini Qayta Yozish",
      "en": "76. Smart Thermostat — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'Thermostat' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomThermostat' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomThermostat' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "CustomThermostat"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Thermostat {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomThermostat extends Thermostat {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat item = new CustomThermostat();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "77. Drone Delivery — 'calculatePrice' Metodini Qayta Yozish",
      "en": "77. Drone Delivery — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Drone Delivery da 'DeliveryDrone' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomDeliveryDrone' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomDeliveryDrone' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone",
        "CustomDeliveryDrone"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDrone {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomDeliveryDrone extends DeliveryDrone {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone item = new CustomDeliveryDrone();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "78. Smart Warehouse — 'calculatePrice' Metodini Qayta Yozish",
      "en": "78. Smart Warehouse — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'StorageBay' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomStorageBay' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomStorageBay' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "StorageBay",
        "CustomStorageBay"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBay {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomStorageBay extends StorageBay {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay item = new CustomStorageBay();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "79. Crypto Wallet — 'calculatePrice' Metodini Qayta Yozish",
      "en": "79. Crypto Wallet — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'CryptoAsset' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomCryptoAsset' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomCryptoAsset' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "CryptoAsset",
        "CustomCryptoAsset"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAsset {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomCryptoAsset extends CryptoAsset {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset item = new CustomCryptoAsset();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "80. National Library — 'calculatePrice' Metodini Qayta Yozish",
      "en": "80. National Library — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "National Library da 'CatalogBook' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomCatalogBook' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomCatalogBook' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "CatalogBook",
        "CustomCatalogBook"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBook {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomCatalogBook extends CatalogBook {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook item = new CustomCatalogBook();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "81. BeFit Club — 'calculatePrice' Metodini Qayta Yozish",
      "en": "81. BeFit Club — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "BeFit Club da 'GymMember' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomGymMember' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomGymMember' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "GymMember",
        "CustomGymMember"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class GymMember {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomGymMember extends GymMember {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember item = new CustomGymMember();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "82. Tashkent Parking — 'calculatePrice' Metodini Qayta Yozish",
      "en": "82. Tashkent Parking — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'ParkingBay' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomParkingBay' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomParkingBay' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "ParkingBay",
        "CustomParkingBay"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBay {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomParkingBay extends ParkingBay {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay item = new CustomParkingBay();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "83. Medion Clinic — 'calculatePrice' Metodini Qayta Yozish",
      "en": "83. Medion Clinic — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Medion Clinic da 'PatientRecord' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomPatientRecord' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomPatientRecord' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "PatientRecord",
        "CustomPatientRecord"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecord {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomPatientRecord extends PatientRecord {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord item = new CustomPatientRecord();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "84. Hyatt Regency — 'calculatePrice' Metodini Qayta Yozish",
      "en": "84. Hyatt Regency — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'HotelReservation' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomHotelReservation' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomHotelReservation' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "HotelReservation",
        "CustomHotelReservation"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservation {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomHotelReservation extends HotelReservation {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation item = new CustomHotelReservation();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "85. Premier Cinema — 'calculatePrice' Metodini Qayta Yozish",
      "en": "85. Premier Cinema — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Premier Cinema da 'CinemaTicket' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomCinemaTicket' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomCinemaTicket' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "CinemaTicket",
        "CustomCinemaTicket"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicket {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomCinemaTicket extends CinemaTicket {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket item = new CustomCinemaTicket();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "86. Yandex Scooter — 'calculatePrice' Metodini Qayta Yozish",
      "en": "86. Yandex Scooter — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'ElectricScooter' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomElectricScooter' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomElectricScooter' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "ElectricScooter",
        "CustomElectricScooter"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooter {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomElectricScooter extends ElectricScooter {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter item = new CustomElectricScooter();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "87. Weather Network — 'calculatePrice' Metodini Qayta Yozish",
      "en": "87. Weather Network — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Weather Network da 'MeteoStation' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomMeteoStation' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomMeteoStation' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "MeteoStation",
        "CustomMeteoStation"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStation {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomMeteoStation extends MeteoStation {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation item = new CustomMeteoStation();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "88. OpenMarket Auction — 'calculatePrice' Metodini Qayta Yozish",
      "en": "88. OpenMarket Auction — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'AuctionLot' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomAuctionLot' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomAuctionLot' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "AuctionLot",
        "CustomAuctionLot"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLot {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomAuctionLot extends AuctionLot {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot item = new CustomAuctionLot();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "89. Solar Energy Grid — 'calculatePrice' Metodini Qayta Yozish",
      "en": "89. Solar Energy Grid — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'SolarInverter' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomSolarInverter' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomSolarInverter' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "SolarInverter",
        "CustomSolarInverter"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverter {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomSolarInverter extends SolarInverter {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter item = new CustomSolarInverter();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Metodni Qayta Yozish (@Override)",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "90. O'zbekiston Temir Yo'llari — 'calculatePrice' Metodini Qayta Yozish",
      "en": "90. O'zbekiston Temir Yo'llari — Method Overriding with @Override"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'TrainRoute' sinfida 'public double calculatePrice()' 100.0 qaytaradi. 'CustomTrainRoute' sinfida uni '@Override' qilib 150.0 qaytaradigan qiling.",
      "en": "Override 'calculatePrice()' in 'CustomTrainRoute' to return 150.0 instead of superclass 100.0."
    },
    "requirements": {
      "classes": [
        "TrainRoute",
        "CustomTrainRoute"
      ],
      "methods": [
        "calculatePrice"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRoute {\n    public double calculatePrice() {\n        return 100.0;\n    }\n}\n\nclass CustomTrainRoute extends TrainRoute {\n    @Override\n    public double calculatePrice() {\n        return 150.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute item = new CustomTrainRoute();\n        System.out.println(\"Narx: $\" + item.calculatePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Metodni qayta yozish (@Override) avlod sinfga ota sinfdagi umumiy metodni o'ziga mos maxsus xatti-harakat bilan almashtirish imkonini beradi.",
      "theoryEn": "Method overriding provides specialized implementation for an inherited method while keeping the exact signature.",
      "cleanCode": "@Override\npublic double calculatePrice() {\n    return 150.0;\n}",
      "breakdown": [
        "<code>@Override</code>: Kompilyatorga ushbu metod ota sinfdan to'g'ri olinayotganini tekshirishni bildiradi."
      ],
      "pitfalls": "Metod nomi yoki parametrlari bittagina belgiga farq qilsa, qayta yozish emas, balki ortiqcha yuklash (overloading) sodir bo'ladi.",
      "cw2Tip": "CW2 da har bir tovar o'z narxini hisoblashda 'calculatePrice()' metodini qayta yozadi."
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "91. Uzum Market — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "91. Uzum Market — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Uzum Market da 3 qavatli ierarxiya tuzing: 'Product' -> 'MidProduct' -> 'TopProduct'. 'TopProduct' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'Product' -> 'MidProduct' -> 'TopProduct' and override toString() in 'TopProduct'."
    },
    "requirements": {
      "classes": [
        "Product",
        "MidProduct",
        "TopProduct"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Product {\n    public String level1 = \"A\";\n}\n\nclass MidProduct extends Product {\n    public String level2 = \"B\";\n}\n\nclass TopProduct extends MidProduct {\n    @Override\n    public String toString() {\n        return \"Uzum Market [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopProduct obj = new TopProduct();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Uzum Market [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopProduct extends MidProduct</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "92. Payme Wallet — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "92. Payme Wallet — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Payme Wallet da 3 qavatli ierarxiya tuzing: 'WalletUser' -> 'MidWalletUser' -> 'TopWalletUser'. 'TopWalletUser' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'WalletUser' -> 'MidWalletUser' -> 'TopWalletUser' and override toString() in 'TopWalletUser'."
    },
    "requirements": {
      "classes": [
        "WalletUser",
        "MidWalletUser",
        "TopWalletUser"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUser {\n    public String level1 = \"A\";\n}\n\nclass MidWalletUser extends WalletUser {\n    public String level2 = \"B\";\n}\n\nclass TopWalletUser extends MidWalletUser {\n    @Override\n    public String toString() {\n        return \"Payme Wallet [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopWalletUser obj = new TopWalletUser();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Payme Wallet [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopWalletUser extends MidWalletUser</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "93. Yandex Go — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "93. Yandex Go — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Yandex Go da 3 qavatli ierarxiya tuzing: 'TaxiRide' -> 'MidTaxiRide' -> 'TopTaxiRide'. 'TopTaxiRide' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'TaxiRide' -> 'MidTaxiRide' -> 'TopTaxiRide' and override toString() in 'TopTaxiRide'."
    },
    "requirements": {
      "classes": [
        "TaxiRide",
        "MidTaxiRide",
        "TopTaxiRide"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRide {\n    public String level1 = \"A\";\n}\n\nclass MidTaxiRide extends TaxiRide {\n    public String level2 = \"B\";\n}\n\nclass TopTaxiRide extends MidTaxiRide {\n    @Override\n    public String toString() {\n        return \"Yandex Go [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopTaxiRide obj = new TopTaxiRide();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Yandex Go [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopTaxiRide extends MidTaxiRide</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "94. Korzinka Go — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "94. Korzinka Go — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Korzinka Go da 3 qavatli ierarxiya tuzing: 'LoyaltyCard' -> 'MidLoyaltyCard' -> 'TopLoyaltyCard'. 'TopLoyaltyCard' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'LoyaltyCard' -> 'MidLoyaltyCard' -> 'TopLoyaltyCard' and override toString() in 'TopLoyaltyCard'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard",
        "MidLoyaltyCard",
        "TopLoyaltyCard"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCard {\n    public String level1 = \"A\";\n}\n\nclass MidLoyaltyCard extends LoyaltyCard {\n    public String level2 = \"B\";\n}\n\nclass TopLoyaltyCard extends MidLoyaltyCard {\n    @Override\n    public String toString() {\n        return \"Korzinka Go [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopLoyaltyCard obj = new TopLoyaltyCard();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Korzinka Go [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopLoyaltyCard extends MidLoyaltyCard</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "95. WIUT Portal — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "95. WIUT Portal — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "WIUT Portal da 3 qavatli ierarxiya tuzing: 'Student' -> 'MidStudent' -> 'TopStudent'. 'TopStudent' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'Student' -> 'MidStudent' -> 'TopStudent' and override toString() in 'TopStudent'."
    },
    "requirements": {
      "classes": [
        "Student",
        "MidStudent",
        "TopStudent"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Student {\n    public String level1 = \"A\";\n}\n\nclass MidStudent extends Student {\n    public String level2 = \"B\";\n}\n\nclass TopStudent extends MidStudent {\n    @Override\n    public String toString() {\n        return \"WIUT Portal [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopStudent obj = new TopStudent();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"WIUT Portal [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopStudent extends MidStudent</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "96. Click Pay — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "96. Click Pay — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Click Pay da 3 qavatli ierarxiya tuzing: 'PaymentTxn' -> 'MidPaymentTxn' -> 'TopPaymentTxn'. 'TopPaymentTxn' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'PaymentTxn' -> 'MidPaymentTxn' -> 'TopPaymentTxn' and override toString() in 'TopPaymentTxn'."
    },
    "requirements": {
      "classes": [
        "PaymentTxn",
        "MidPaymentTxn",
        "TopPaymentTxn"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxn {\n    public String level1 = \"A\";\n}\n\nclass MidPaymentTxn extends PaymentTxn {\n    public String level2 = \"B\";\n}\n\nclass TopPaymentTxn extends MidPaymentTxn {\n    @Override\n    public String toString() {\n        return \"Click Pay [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopPaymentTxn obj = new TopPaymentTxn();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Click Pay [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopPaymentTxn extends MidPaymentTxn</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "97. Telegram Bot — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "97. Telegram Bot — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Telegram Bot da 3 qavatli ierarxiya tuzing: 'BotMessage' -> 'MidBotMessage' -> 'TopBotMessage'. 'TopBotMessage' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'BotMessage' -> 'MidBotMessage' -> 'TopBotMessage' and override toString() in 'TopBotMessage'."
    },
    "requirements": {
      "classes": [
        "BotMessage",
        "MidBotMessage",
        "TopBotMessage"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessage {\n    public String level1 = \"A\";\n}\n\nclass MidBotMessage extends BotMessage {\n    public String level2 = \"B\";\n}\n\nclass TopBotMessage extends MidBotMessage {\n    @Override\n    public String toString() {\n        return \"Telegram Bot [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopBotMessage obj = new TopBotMessage();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Telegram Bot [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopBotMessage extends MidBotMessage</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "98. UzAirways — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "98. UzAirways — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "UzAirways da 3 qavatli ierarxiya tuzing: 'FlightTicket' -> 'MidFlightTicket' -> 'TopFlightTicket'. 'TopFlightTicket' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'FlightTicket' -> 'MidFlightTicket' -> 'TopFlightTicket' and override toString() in 'TopFlightTicket'."
    },
    "requirements": {
      "classes": [
        "FlightTicket",
        "MidFlightTicket",
        "TopFlightTicket"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicket {\n    public String level1 = \"A\";\n}\n\nclass MidFlightTicket extends FlightTicket {\n    public String level2 = \"B\";\n}\n\nclass TopFlightTicket extends MidFlightTicket {\n    @Override\n    public String toString() {\n        return \"UzAirways [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopFlightTicket obj = new TopFlightTicket();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"UzAirways [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopFlightTicket extends MidFlightTicket</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "99. IT Park Academy — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "99. IT Park Academy — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "IT Park Academy da 3 qavatli ierarxiya tuzing: 'BootcampCourse' -> 'MidBootcampCourse' -> 'TopBootcampCourse'. 'TopBootcampCourse' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'BootcampCourse' -> 'MidBootcampCourse' -> 'TopBootcampCourse' and override toString() in 'TopBootcampCourse'."
    },
    "requirements": {
      "classes": [
        "BootcampCourse",
        "MidBootcampCourse",
        "TopBootcampCourse"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourse {\n    public String level1 = \"A\";\n}\n\nclass MidBootcampCourse extends BootcampCourse {\n    public String level2 = \"B\";\n}\n\nclass TopBootcampCourse extends MidBootcampCourse {\n    @Override\n    public String toString() {\n        return \"IT Park Academy [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopBootcampCourse obj = new TopBootcampCourse();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"IT Park Academy [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopBootcampCourse extends MidBootcampCourse</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "100. Anorbank — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "100. Anorbank — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Anorbank da 3 qavatli ierarxiya tuzing: 'DebitCard' -> 'MidDebitCard' -> 'TopDebitCard'. 'TopDebitCard' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'DebitCard' -> 'MidDebitCard' -> 'TopDebitCard' and override toString() in 'TopDebitCard'."
    },
    "requirements": {
      "classes": [
        "DebitCard",
        "MidDebitCard",
        "TopDebitCard"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCard {\n    public String level1 = \"A\";\n}\n\nclass MidDebitCard extends DebitCard {\n    public String level2 = \"B\";\n}\n\nclass TopDebitCard extends MidDebitCard {\n    @Override\n    public String toString() {\n        return \"Anorbank [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopDebitCard obj = new TopDebitCard();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Anorbank [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopDebitCard extends MidDebitCard</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "101. Oson Apteka — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "101. Oson Apteka — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Oson Apteka da 3 qavatli ierarxiya tuzing: 'Medicine' -> 'MidMedicine' -> 'TopMedicine'. 'TopMedicine' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'Medicine' -> 'MidMedicine' -> 'TopMedicine' and override toString() in 'TopMedicine'."
    },
    "requirements": {
      "classes": [
        "Medicine",
        "MidMedicine",
        "TopMedicine"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Medicine {\n    public String level1 = \"A\";\n}\n\nclass MidMedicine extends Medicine {\n    public String level2 = \"B\";\n}\n\nclass TopMedicine extends MidMedicine {\n    @Override\n    public String toString() {\n        return \"Oson Apteka [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopMedicine obj = new TopMedicine();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Oson Apteka [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopMedicine extends MidMedicine</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "102. Evos FastFood — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "102. Evos FastFood — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Evos FastFood da 3 qavatli ierarxiya tuzing: 'FoodOrder' -> 'MidFoodOrder' -> 'TopFoodOrder'. 'TopFoodOrder' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'FoodOrder' -> 'MidFoodOrder' -> 'TopFoodOrder' and override toString() in 'TopFoodOrder'."
    },
    "requirements": {
      "classes": [
        "FoodOrder",
        "MidFoodOrder",
        "TopFoodOrder"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrder {\n    public String level1 = \"A\";\n}\n\nclass MidFoodOrder extends FoodOrder {\n    public String level2 = \"B\";\n}\n\nclass TopFoodOrder extends MidFoodOrder {\n    @Override\n    public String toString() {\n        return \"Evos FastFood [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopFoodOrder obj = new TopFoodOrder();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Evos FastFood [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopFoodOrder extends MidFoodOrder</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "103. Bellissimo Pizza — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "103. Bellissimo Pizza — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 3 qavatli ierarxiya tuzing: 'PizzaOrder' -> 'MidPizzaOrder' -> 'TopPizzaOrder'. 'TopPizzaOrder' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'PizzaOrder' -> 'MidPizzaOrder' -> 'TopPizzaOrder' and override toString() in 'TopPizzaOrder'."
    },
    "requirements": {
      "classes": [
        "PizzaOrder",
        "MidPizzaOrder",
        "TopPizzaOrder"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrder {\n    public String level1 = \"A\";\n}\n\nclass MidPizzaOrder extends PizzaOrder {\n    public String level2 = \"B\";\n}\n\nclass TopPizzaOrder extends MidPizzaOrder {\n    @Override\n    public String toString() {\n        return \"Bellissimo Pizza [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopPizzaOrder obj = new TopPizzaOrder();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Bellissimo Pizza [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopPizzaOrder extends MidPizzaOrder</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "104. Milliy TV — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "104. Milliy TV — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Milliy TV da 3 qavatli ierarxiya tuzing: 'BroadcastShow' -> 'MidBroadcastShow' -> 'TopBroadcastShow'. 'TopBroadcastShow' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'BroadcastShow' -> 'MidBroadcastShow' -> 'TopBroadcastShow' and override toString() in 'TopBroadcastShow'."
    },
    "requirements": {
      "classes": [
        "BroadcastShow",
        "MidBroadcastShow",
        "TopBroadcastShow"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShow {\n    public String level1 = \"A\";\n}\n\nclass MidBroadcastShow extends BroadcastShow {\n    public String level2 = \"B\";\n}\n\nclass TopBroadcastShow extends MidBroadcastShow {\n    @Override\n    public String toString() {\n        return \"Milliy TV [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopBroadcastShow obj = new TopBroadcastShow();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Milliy TV [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopBroadcastShow extends MidBroadcastShow</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "105. Spotify Sound — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "105. Spotify Sound — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Spotify Sound da 3 qavatli ierarxiya tuzing: 'AudioTrack' -> 'MidAudioTrack' -> 'TopAudioTrack'. 'TopAudioTrack' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'AudioTrack' -> 'MidAudioTrack' -> 'TopAudioTrack' and override toString() in 'TopAudioTrack'."
    },
    "requirements": {
      "classes": [
        "AudioTrack",
        "MidAudioTrack",
        "TopAudioTrack"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrack {\n    public String level1 = \"A\";\n}\n\nclass MidAudioTrack extends AudioTrack {\n    public String level2 = \"B\";\n}\n\nclass TopAudioTrack extends MidAudioTrack {\n    @Override\n    public String toString() {\n        return \"Spotify Sound [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopAudioTrack obj = new TopAudioTrack();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Spotify Sound [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopAudioTrack extends MidAudioTrack</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "106. Smart Thermostat — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "106. Smart Thermostat — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Smart Thermostat da 3 qavatli ierarxiya tuzing: 'Thermostat' -> 'MidThermostat' -> 'TopThermostat'. 'TopThermostat' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'Thermostat' -> 'MidThermostat' -> 'TopThermostat' and override toString() in 'TopThermostat'."
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "MidThermostat",
        "TopThermostat"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class Thermostat {\n    public String level1 = \"A\";\n}\n\nclass MidThermostat extends Thermostat {\n    public String level2 = \"B\";\n}\n\nclass TopThermostat extends MidThermostat {\n    @Override\n    public String toString() {\n        return \"Smart Thermostat [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopThermostat obj = new TopThermostat();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Smart Thermostat [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopThermostat extends MidThermostat</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "107. Drone Delivery — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "107. Drone Delivery — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Drone Delivery da 3 qavatli ierarxiya tuzing: 'DeliveryDrone' -> 'MidDeliveryDrone' -> 'TopDeliveryDrone'. 'TopDeliveryDrone' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'DeliveryDrone' -> 'MidDeliveryDrone' -> 'TopDeliveryDrone' and override toString() in 'TopDeliveryDrone'."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone",
        "MidDeliveryDrone",
        "TopDeliveryDrone"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDrone {\n    public String level1 = \"A\";\n}\n\nclass MidDeliveryDrone extends DeliveryDrone {\n    public String level2 = \"B\";\n}\n\nclass TopDeliveryDrone extends MidDeliveryDrone {\n    @Override\n    public String toString() {\n        return \"Drone Delivery [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopDeliveryDrone obj = new TopDeliveryDrone();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Drone Delivery [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopDeliveryDrone extends MidDeliveryDrone</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "108. Smart Warehouse — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "108. Smart Warehouse — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Smart Warehouse da 3 qavatli ierarxiya tuzing: 'StorageBay' -> 'MidStorageBay' -> 'TopStorageBay'. 'TopStorageBay' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'StorageBay' -> 'MidStorageBay' -> 'TopStorageBay' and override toString() in 'TopStorageBay'."
    },
    "requirements": {
      "classes": [
        "StorageBay",
        "MidStorageBay",
        "TopStorageBay"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBay {\n    public String level1 = \"A\";\n}\n\nclass MidStorageBay extends StorageBay {\n    public String level2 = \"B\";\n}\n\nclass TopStorageBay extends MidStorageBay {\n    @Override\n    public String toString() {\n        return \"Smart Warehouse [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopStorageBay obj = new TopStorageBay();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Smart Warehouse [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopStorageBay extends MidStorageBay</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "109. Crypto Wallet — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "109. Crypto Wallet — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Crypto Wallet da 3 qavatli ierarxiya tuzing: 'CryptoAsset' -> 'MidCryptoAsset' -> 'TopCryptoAsset'. 'TopCryptoAsset' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'CryptoAsset' -> 'MidCryptoAsset' -> 'TopCryptoAsset' and override toString() in 'TopCryptoAsset'."
    },
    "requirements": {
      "classes": [
        "CryptoAsset",
        "MidCryptoAsset",
        "TopCryptoAsset"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAsset {\n    public String level1 = \"A\";\n}\n\nclass MidCryptoAsset extends CryptoAsset {\n    public String level2 = \"B\";\n}\n\nclass TopCryptoAsset extends MidCryptoAsset {\n    @Override\n    public String toString() {\n        return \"Crypto Wallet [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopCryptoAsset obj = new TopCryptoAsset();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Crypto Wallet [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopCryptoAsset extends MidCryptoAsset</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "110. National Library — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "110. National Library — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "National Library da 3 qavatli ierarxiya tuzing: 'CatalogBook' -> 'MidCatalogBook' -> 'TopCatalogBook'. 'TopCatalogBook' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'CatalogBook' -> 'MidCatalogBook' -> 'TopCatalogBook' and override toString() in 'TopCatalogBook'."
    },
    "requirements": {
      "classes": [
        "CatalogBook",
        "MidCatalogBook",
        "TopCatalogBook"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBook {\n    public String level1 = \"A\";\n}\n\nclass MidCatalogBook extends CatalogBook {\n    public String level2 = \"B\";\n}\n\nclass TopCatalogBook extends MidCatalogBook {\n    @Override\n    public String toString() {\n        return \"National Library [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopCatalogBook obj = new TopCatalogBook();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"National Library [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopCatalogBook extends MidCatalogBook</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "111. BeFit Club — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "111. BeFit Club — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "BeFit Club da 3 qavatli ierarxiya tuzing: 'GymMember' -> 'MidGymMember' -> 'TopGymMember'. 'TopGymMember' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'GymMember' -> 'MidGymMember' -> 'TopGymMember' and override toString() in 'TopGymMember'."
    },
    "requirements": {
      "classes": [
        "GymMember",
        "MidGymMember",
        "TopGymMember"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class GymMember {\n    public String level1 = \"A\";\n}\n\nclass MidGymMember extends GymMember {\n    public String level2 = \"B\";\n}\n\nclass TopGymMember extends MidGymMember {\n    @Override\n    public String toString() {\n        return \"BeFit Club [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopGymMember obj = new TopGymMember();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"BeFit Club [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopGymMember extends MidGymMember</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "112. Tashkent Parking — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "112. Tashkent Parking — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Tashkent Parking da 3 qavatli ierarxiya tuzing: 'ParkingBay' -> 'MidParkingBay' -> 'TopParkingBay'. 'TopParkingBay' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'ParkingBay' -> 'MidParkingBay' -> 'TopParkingBay' and override toString() in 'TopParkingBay'."
    },
    "requirements": {
      "classes": [
        "ParkingBay",
        "MidParkingBay",
        "TopParkingBay"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBay {\n    public String level1 = \"A\";\n}\n\nclass MidParkingBay extends ParkingBay {\n    public String level2 = \"B\";\n}\n\nclass TopParkingBay extends MidParkingBay {\n    @Override\n    public String toString() {\n        return \"Tashkent Parking [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopParkingBay obj = new TopParkingBay();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Tashkent Parking [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopParkingBay extends MidParkingBay</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "113. Medion Clinic — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "113. Medion Clinic — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Medion Clinic da 3 qavatli ierarxiya tuzing: 'PatientRecord' -> 'MidPatientRecord' -> 'TopPatientRecord'. 'TopPatientRecord' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'PatientRecord' -> 'MidPatientRecord' -> 'TopPatientRecord' and override toString() in 'TopPatientRecord'."
    },
    "requirements": {
      "classes": [
        "PatientRecord",
        "MidPatientRecord",
        "TopPatientRecord"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecord {\n    public String level1 = \"A\";\n}\n\nclass MidPatientRecord extends PatientRecord {\n    public String level2 = \"B\";\n}\n\nclass TopPatientRecord extends MidPatientRecord {\n    @Override\n    public String toString() {\n        return \"Medion Clinic [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopPatientRecord obj = new TopPatientRecord();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Medion Clinic [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopPatientRecord extends MidPatientRecord</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "114. Hyatt Regency — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "114. Hyatt Regency — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Hyatt Regency da 3 qavatli ierarxiya tuzing: 'HotelReservation' -> 'MidHotelReservation' -> 'TopHotelReservation'. 'TopHotelReservation' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'HotelReservation' -> 'MidHotelReservation' -> 'TopHotelReservation' and override toString() in 'TopHotelReservation'."
    },
    "requirements": {
      "classes": [
        "HotelReservation",
        "MidHotelReservation",
        "TopHotelReservation"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservation {\n    public String level1 = \"A\";\n}\n\nclass MidHotelReservation extends HotelReservation {\n    public String level2 = \"B\";\n}\n\nclass TopHotelReservation extends MidHotelReservation {\n    @Override\n    public String toString() {\n        return \"Hyatt Regency [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopHotelReservation obj = new TopHotelReservation();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Hyatt Regency [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopHotelReservation extends MidHotelReservation</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "115. Premier Cinema — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "115. Premier Cinema — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Premier Cinema da 3 qavatli ierarxiya tuzing: 'CinemaTicket' -> 'MidCinemaTicket' -> 'TopCinemaTicket'. 'TopCinemaTicket' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'CinemaTicket' -> 'MidCinemaTicket' -> 'TopCinemaTicket' and override toString() in 'TopCinemaTicket'."
    },
    "requirements": {
      "classes": [
        "CinemaTicket",
        "MidCinemaTicket",
        "TopCinemaTicket"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicket {\n    public String level1 = \"A\";\n}\n\nclass MidCinemaTicket extends CinemaTicket {\n    public String level2 = \"B\";\n}\n\nclass TopCinemaTicket extends MidCinemaTicket {\n    @Override\n    public String toString() {\n        return \"Premier Cinema [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopCinemaTicket obj = new TopCinemaTicket();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Premier Cinema [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopCinemaTicket extends MidCinemaTicket</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "116. Yandex Scooter — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "116. Yandex Scooter — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Yandex Scooter da 3 qavatli ierarxiya tuzing: 'ElectricScooter' -> 'MidElectricScooter' -> 'TopElectricScooter'. 'TopElectricScooter' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'ElectricScooter' -> 'MidElectricScooter' -> 'TopElectricScooter' and override toString() in 'TopElectricScooter'."
    },
    "requirements": {
      "classes": [
        "ElectricScooter",
        "MidElectricScooter",
        "TopElectricScooter"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooter {\n    public String level1 = \"A\";\n}\n\nclass MidElectricScooter extends ElectricScooter {\n    public String level2 = \"B\";\n}\n\nclass TopElectricScooter extends MidElectricScooter {\n    @Override\n    public String toString() {\n        return \"Yandex Scooter [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopElectricScooter obj = new TopElectricScooter();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Yandex Scooter [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopElectricScooter extends MidElectricScooter</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "117. Weather Network — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "117. Weather Network — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Weather Network da 3 qavatli ierarxiya tuzing: 'MeteoStation' -> 'MidMeteoStation' -> 'TopMeteoStation'. 'TopMeteoStation' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'MeteoStation' -> 'MidMeteoStation' -> 'TopMeteoStation' and override toString() in 'TopMeteoStation'."
    },
    "requirements": {
      "classes": [
        "MeteoStation",
        "MidMeteoStation",
        "TopMeteoStation"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStation {\n    public String level1 = \"A\";\n}\n\nclass MidMeteoStation extends MeteoStation {\n    public String level2 = \"B\";\n}\n\nclass TopMeteoStation extends MidMeteoStation {\n    @Override\n    public String toString() {\n        return \"Weather Network [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopMeteoStation obj = new TopMeteoStation();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Weather Network [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopMeteoStation extends MidMeteoStation</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "118. OpenMarket Auction — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "118. OpenMarket Auction — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 3 qavatli ierarxiya tuzing: 'AuctionLot' -> 'MidAuctionLot' -> 'TopAuctionLot'. 'TopAuctionLot' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'AuctionLot' -> 'MidAuctionLot' -> 'TopAuctionLot' and override toString() in 'TopAuctionLot'."
    },
    "requirements": {
      "classes": [
        "AuctionLot",
        "MidAuctionLot",
        "TopAuctionLot"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLot {\n    public String level1 = \"A\";\n}\n\nclass MidAuctionLot extends AuctionLot {\n    public String level2 = \"B\";\n}\n\nclass TopAuctionLot extends MidAuctionLot {\n    @Override\n    public String toString() {\n        return \"OpenMarket Auction [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopAuctionLot obj = new TopAuctionLot();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"OpenMarket Auction [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopAuctionLot extends MidAuctionLot</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "119. Solar Energy Grid — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "119. Solar Energy Grid — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 3 qavatli ierarxiya tuzing: 'SolarInverter' -> 'MidSolarInverter' -> 'TopSolarInverter'. 'TopSolarInverter' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'SolarInverter' -> 'MidSolarInverter' -> 'TopSolarInverter' and override toString() in 'TopSolarInverter'."
    },
    "requirements": {
      "classes": [
        "SolarInverter",
        "MidSolarInverter",
        "TopSolarInverter"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverter {\n    public String level1 = \"A\";\n}\n\nclass MidSolarInverter extends SolarInverter {\n    public String level2 = \"B\";\n}\n\nclass TopSolarInverter extends MidSolarInverter {\n    @Override\n    public String toString() {\n        return \"Solar Energy Grid [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopSolarInverter obj = new TopSolarInverter();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"Solar Energy Grid [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopSolarInverter extends MidSolarInverter</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: Ko'p Qavatli Merosxo'rlik & toString()",
    "sector": "Arxitektura",
    "title": {
      "uz": "120. O'zbekiston Temir Yo'llari — Ko'p Qavatli Merosxo'rlik Zanjiri",
      "en": "120. O'zbekiston Temir Yo'llari — Multi-Level Inheritance & toString()"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 3 qavatli ierarxiya tuzing: 'TrainRoute' -> 'MidTrainRoute' -> 'TopTrainRoute'. 'TopTrainRoute' sinfida 'toString()' metodini qayta yozib chiroyli formatda matn qaytaring.",
      "en": "Form multi-level hierarchy 'TrainRoute' -> 'MidTrainRoute' -> 'TopTrainRoute' and override toString() in 'TopTrainRoute'."
    },
    "requirements": {
      "classes": [
        "TrainRoute",
        "MidTrainRoute",
        "TopTrainRoute"
      ],
      "methods": [
        "toString"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRoute {\n    public String level1 = \"A\";\n}\n\nclass MidTrainRoute extends TrainRoute {\n    public String level2 = \"B\";\n}\n\nclass TopTrainRoute extends MidTrainRoute {\n    @Override\n    public String toString() {\n        return \"O'zbekiston Temir Yo'llari [\" + level1 + \"-\" + level2 + \"]\";\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TopTrainRoute obj = new TopTrainRoute();\n        System.out.println(obj.toString());\n    }\n}",
    "detailedSolution": {
      "theory": "Java'da barcha sinflar bevosita yoki bilvosita 'java.lang.Object' sinfidan meros oladi. 'toString()' metodini qayta yozish orqali xotira manzili (hashcode) o'rniga tushunarli matn olinadi.",
      "theoryEn": "All Java classes inherit from Object. Overriding toString() converts default memory hex codes into human-readable descriptions.",
      "cleanCode": "@Override\npublic String toString() {\n    return \"O'zbekiston Temir Yo'llari [\" + level1 + \"-\" + level2 + \"]\";\n}",
      "breakdown": [
        "<code>TopTrainRoute extends MidTrainRoute</code>: O'zidan yuqoridagi barcha ota sinflarning xususiyatlarini meros qilib oladi."
      ],
      "pitfalls": "Ierarxiya juda chuqurlashib ketsa (5-6 qavat), kodni qo'llab-quvvatlash murakkablashadi.",
      "cw2Tip": "Konsolda buyurtma tafsilotlarini 'System.out.println(order)' deb chop etish uchun 'toString()' metodi juda qulaydir."
    }
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "121. Uzum Market — Kompozitsiya vs Merosxo'rlik",
      "en": "121. Uzum Market — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Uzum Market tizimida 'ProductCart' klassi o'z ichida 'ProductItem' obyektini saqlasin ('HAS-A' munosabati). 'ProductCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Uzum Market: 'ProductCart' contains a reference to 'ProductItem'."
    },
    "requirements": {
      "classes": [
        "ProductItem",
        "ProductCart"
      ]
    },
    "starterCode": "",
    "solution": "class ProductItem {\n    public String title;\n    public double price;\n    public ProductItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass ProductCart {\n    private ProductItem item;\n\n    public void setItem(ProductItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductCart cart = new ProductCart();\n        cart.setItem(new ProductItem(\"Uzum Market Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class ProductCart {\n    private ProductItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private ProductItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "122. Payme Wallet — Kompozitsiya vs Merosxo'rlik",
      "en": "122. Payme Wallet — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Payme Wallet tizimida 'WalletUserCart' klassi o'z ichida 'WalletUserItem' obyektini saqlasin ('HAS-A' munosabati). 'WalletUserCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Payme Wallet: 'WalletUserCart' contains a reference to 'WalletUserItem'."
    },
    "requirements": {
      "classes": [
        "WalletUserItem",
        "WalletUserCart"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUserItem {\n    public String title;\n    public double price;\n    public WalletUserItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass WalletUserCart {\n    private WalletUserItem item;\n\n    public void setItem(WalletUserItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserCart cart = new WalletUserCart();\n        cart.setItem(new WalletUserItem(\"Payme Wallet Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class WalletUserCart {\n    private WalletUserItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private WalletUserItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "123. Yandex Go — Kompozitsiya vs Merosxo'rlik",
      "en": "123. Yandex Go — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Yandex Go tizimida 'TaxiRideCart' klassi o'z ichida 'TaxiRideItem' obyektini saqlasin ('HAS-A' munosabati). 'TaxiRideCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Yandex Go: 'TaxiRideCart' contains a reference to 'TaxiRideItem'."
    },
    "requirements": {
      "classes": [
        "TaxiRideItem",
        "TaxiRideCart"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRideItem {\n    public String title;\n    public double price;\n    public TaxiRideItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass TaxiRideCart {\n    private TaxiRideItem item;\n\n    public void setItem(TaxiRideItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideCart cart = new TaxiRideCart();\n        cart.setItem(new TaxiRideItem(\"Yandex Go Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class TaxiRideCart {\n    private TaxiRideItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private TaxiRideItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "124. Korzinka Go — Kompozitsiya vs Merosxo'rlik",
      "en": "124. Korzinka Go — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Korzinka Go tizimida 'LoyaltyCardCart' klassi o'z ichida 'LoyaltyCardItem' obyektini saqlasin ('HAS-A' munosabati). 'LoyaltyCardCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Korzinka Go: 'LoyaltyCardCart' contains a reference to 'LoyaltyCardItem'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardItem",
        "LoyaltyCardCart"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCardItem {\n    public String title;\n    public double price;\n    public LoyaltyCardItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass LoyaltyCardCart {\n    private LoyaltyCardItem item;\n\n    public void setItem(LoyaltyCardItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardCart cart = new LoyaltyCardCart();\n        cart.setItem(new LoyaltyCardItem(\"Korzinka Go Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class LoyaltyCardCart {\n    private LoyaltyCardItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private LoyaltyCardItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "125. WIUT Portal — Kompozitsiya vs Merosxo'rlik",
      "en": "125. WIUT Portal — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "WIUT Portal tizimida 'StudentCart' klassi o'z ichida 'StudentItem' obyektini saqlasin ('HAS-A' munosabati). 'StudentCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in WIUT Portal: 'StudentCart' contains a reference to 'StudentItem'."
    },
    "requirements": {
      "classes": [
        "StudentItem",
        "StudentCart"
      ]
    },
    "starterCode": "",
    "solution": "class StudentItem {\n    public String title;\n    public double price;\n    public StudentItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass StudentCart {\n    private StudentItem item;\n\n    public void setItem(StudentItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentCart cart = new StudentCart();\n        cart.setItem(new StudentItem(\"WIUT Portal Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class StudentCart {\n    private StudentItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private StudentItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "126. Click Pay — Kompozitsiya vs Merosxo'rlik",
      "en": "126. Click Pay — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Click Pay tizimida 'PaymentTxnCart' klassi o'z ichida 'PaymentTxnItem' obyektini saqlasin ('HAS-A' munosabati). 'PaymentTxnCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Click Pay: 'PaymentTxnCart' contains a reference to 'PaymentTxnItem'."
    },
    "requirements": {
      "classes": [
        "PaymentTxnItem",
        "PaymentTxnCart"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxnItem {\n    public String title;\n    public double price;\n    public PaymentTxnItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass PaymentTxnCart {\n    private PaymentTxnItem item;\n\n    public void setItem(PaymentTxnItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnCart cart = new PaymentTxnCart();\n        cart.setItem(new PaymentTxnItem(\"Click Pay Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class PaymentTxnCart {\n    private PaymentTxnItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private PaymentTxnItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "127. Telegram Bot — Kompozitsiya vs Merosxo'rlik",
      "en": "127. Telegram Bot — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Telegram Bot tizimida 'BotMessageCart' klassi o'z ichida 'BotMessageItem' obyektini saqlasin ('HAS-A' munosabati). 'BotMessageCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Telegram Bot: 'BotMessageCart' contains a reference to 'BotMessageItem'."
    },
    "requirements": {
      "classes": [
        "BotMessageItem",
        "BotMessageCart"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessageItem {\n    public String title;\n    public double price;\n    public BotMessageItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass BotMessageCart {\n    private BotMessageItem item;\n\n    public void setItem(BotMessageItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageCart cart = new BotMessageCart();\n        cart.setItem(new BotMessageItem(\"Telegram Bot Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class BotMessageCart {\n    private BotMessageItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private BotMessageItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "128. UzAirways — Kompozitsiya vs Merosxo'rlik",
      "en": "128. UzAirways — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "UzAirways tizimida 'FlightTicketCart' klassi o'z ichida 'FlightTicketItem' obyektini saqlasin ('HAS-A' munosabati). 'FlightTicketCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in UzAirways: 'FlightTicketCart' contains a reference to 'FlightTicketItem'."
    },
    "requirements": {
      "classes": [
        "FlightTicketItem",
        "FlightTicketCart"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicketItem {\n    public String title;\n    public double price;\n    public FlightTicketItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass FlightTicketCart {\n    private FlightTicketItem item;\n\n    public void setItem(FlightTicketItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketCart cart = new FlightTicketCart();\n        cart.setItem(new FlightTicketItem(\"UzAirways Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class FlightTicketCart {\n    private FlightTicketItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private FlightTicketItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "129. IT Park Academy — Kompozitsiya vs Merosxo'rlik",
      "en": "129. IT Park Academy — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "IT Park Academy tizimida 'BootcampCourseCart' klassi o'z ichida 'BootcampCourseItem' obyektini saqlasin ('HAS-A' munosabati). 'BootcampCourseCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in IT Park Academy: 'BootcampCourseCart' contains a reference to 'BootcampCourseItem'."
    },
    "requirements": {
      "classes": [
        "BootcampCourseItem",
        "BootcampCourseCart"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourseItem {\n    public String title;\n    public double price;\n    public BootcampCourseItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass BootcampCourseCart {\n    private BootcampCourseItem item;\n\n    public void setItem(BootcampCourseItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseCart cart = new BootcampCourseCart();\n        cart.setItem(new BootcampCourseItem(\"IT Park Academy Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class BootcampCourseCart {\n    private BootcampCourseItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private BootcampCourseItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "130. Anorbank — Kompozitsiya vs Merosxo'rlik",
      "en": "130. Anorbank — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Anorbank tizimida 'DebitCardCart' klassi o'z ichida 'DebitCardItem' obyektini saqlasin ('HAS-A' munosabati). 'DebitCardCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Anorbank: 'DebitCardCart' contains a reference to 'DebitCardItem'."
    },
    "requirements": {
      "classes": [
        "DebitCardItem",
        "DebitCardCart"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCardItem {\n    public String title;\n    public double price;\n    public DebitCardItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass DebitCardCart {\n    private DebitCardItem item;\n\n    public void setItem(DebitCardItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardCart cart = new DebitCardCart();\n        cart.setItem(new DebitCardItem(\"Anorbank Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class DebitCardCart {\n    private DebitCardItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private DebitCardItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "131. Oson Apteka — Kompozitsiya vs Merosxo'rlik",
      "en": "131. Oson Apteka — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Oson Apteka tizimida 'MedicineCart' klassi o'z ichida 'MedicineItem' obyektini saqlasin ('HAS-A' munosabati). 'MedicineCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Oson Apteka: 'MedicineCart' contains a reference to 'MedicineItem'."
    },
    "requirements": {
      "classes": [
        "MedicineItem",
        "MedicineCart"
      ]
    },
    "starterCode": "",
    "solution": "class MedicineItem {\n    public String title;\n    public double price;\n    public MedicineItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass MedicineCart {\n    private MedicineItem item;\n\n    public void setItem(MedicineItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineCart cart = new MedicineCart();\n        cart.setItem(new MedicineItem(\"Oson Apteka Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class MedicineCart {\n    private MedicineItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private MedicineItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "132. Evos FastFood — Kompozitsiya vs Merosxo'rlik",
      "en": "132. Evos FastFood — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Evos FastFood tizimida 'FoodOrderCart' klassi o'z ichida 'FoodOrderItem' obyektini saqlasin ('HAS-A' munosabati). 'FoodOrderCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Evos FastFood: 'FoodOrderCart' contains a reference to 'FoodOrderItem'."
    },
    "requirements": {
      "classes": [
        "FoodOrderItem",
        "FoodOrderCart"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrderItem {\n    public String title;\n    public double price;\n    public FoodOrderItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass FoodOrderCart {\n    private FoodOrderItem item;\n\n    public void setItem(FoodOrderItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderCart cart = new FoodOrderCart();\n        cart.setItem(new FoodOrderItem(\"Evos FastFood Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class FoodOrderCart {\n    private FoodOrderItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private FoodOrderItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "133. Bellissimo Pizza — Kompozitsiya vs Merosxo'rlik",
      "en": "133. Bellissimo Pizza — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Bellissimo Pizza tizimida 'PizzaOrderCart' klassi o'z ichida 'PizzaOrderItem' obyektini saqlasin ('HAS-A' munosabati). 'PizzaOrderCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Bellissimo Pizza: 'PizzaOrderCart' contains a reference to 'PizzaOrderItem'."
    },
    "requirements": {
      "classes": [
        "PizzaOrderItem",
        "PizzaOrderCart"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrderItem {\n    public String title;\n    public double price;\n    public PizzaOrderItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass PizzaOrderCart {\n    private PizzaOrderItem item;\n\n    public void setItem(PizzaOrderItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderCart cart = new PizzaOrderCart();\n        cart.setItem(new PizzaOrderItem(\"Bellissimo Pizza Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class PizzaOrderCart {\n    private PizzaOrderItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private PizzaOrderItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "134. Milliy TV — Kompozitsiya vs Merosxo'rlik",
      "en": "134. Milliy TV — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Milliy TV tizimida 'BroadcastShowCart' klassi o'z ichida 'BroadcastShowItem' obyektini saqlasin ('HAS-A' munosabati). 'BroadcastShowCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Milliy TV: 'BroadcastShowCart' contains a reference to 'BroadcastShowItem'."
    },
    "requirements": {
      "classes": [
        "BroadcastShowItem",
        "BroadcastShowCart"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShowItem {\n    public String title;\n    public double price;\n    public BroadcastShowItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass BroadcastShowCart {\n    private BroadcastShowItem item;\n\n    public void setItem(BroadcastShowItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowCart cart = new BroadcastShowCart();\n        cart.setItem(new BroadcastShowItem(\"Milliy TV Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class BroadcastShowCart {\n    private BroadcastShowItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private BroadcastShowItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "135. Spotify Sound — Kompozitsiya vs Merosxo'rlik",
      "en": "135. Spotify Sound — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Spotify Sound tizimida 'AudioTrackCart' klassi o'z ichida 'AudioTrackItem' obyektini saqlasin ('HAS-A' munosabati). 'AudioTrackCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Spotify Sound: 'AudioTrackCart' contains a reference to 'AudioTrackItem'."
    },
    "requirements": {
      "classes": [
        "AudioTrackItem",
        "AudioTrackCart"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrackItem {\n    public String title;\n    public double price;\n    public AudioTrackItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass AudioTrackCart {\n    private AudioTrackItem item;\n\n    public void setItem(AudioTrackItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackCart cart = new AudioTrackCart();\n        cart.setItem(new AudioTrackItem(\"Spotify Sound Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class AudioTrackCart {\n    private AudioTrackItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private AudioTrackItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "136. Smart Thermostat — Kompozitsiya vs Merosxo'rlik",
      "en": "136. Smart Thermostat — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Smart Thermostat tizimida 'ThermostatCart' klassi o'z ichida 'ThermostatItem' obyektini saqlasin ('HAS-A' munosabati). 'ThermostatCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Smart Thermostat: 'ThermostatCart' contains a reference to 'ThermostatItem'."
    },
    "requirements": {
      "classes": [
        "ThermostatItem",
        "ThermostatCart"
      ]
    },
    "starterCode": "",
    "solution": "class ThermostatItem {\n    public String title;\n    public double price;\n    public ThermostatItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass ThermostatCart {\n    private ThermostatItem item;\n\n    public void setItem(ThermostatItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatCart cart = new ThermostatCart();\n        cart.setItem(new ThermostatItem(\"Smart Thermostat Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class ThermostatCart {\n    private ThermostatItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private ThermostatItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "137. Drone Delivery — Kompozitsiya vs Merosxo'rlik",
      "en": "137. Drone Delivery — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Drone Delivery tizimida 'DeliveryDroneCart' klassi o'z ichida 'DeliveryDroneItem' obyektini saqlasin ('HAS-A' munosabati). 'DeliveryDroneCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Drone Delivery: 'DeliveryDroneCart' contains a reference to 'DeliveryDroneItem'."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneItem",
        "DeliveryDroneCart"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDroneItem {\n    public String title;\n    public double price;\n    public DeliveryDroneItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass DeliveryDroneCart {\n    private DeliveryDroneItem item;\n\n    public void setItem(DeliveryDroneItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneCart cart = new DeliveryDroneCart();\n        cart.setItem(new DeliveryDroneItem(\"Drone Delivery Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class DeliveryDroneCart {\n    private DeliveryDroneItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private DeliveryDroneItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "138. Smart Warehouse — Kompozitsiya vs Merosxo'rlik",
      "en": "138. Smart Warehouse — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Smart Warehouse tizimida 'StorageBayCart' klassi o'z ichida 'StorageBayItem' obyektini saqlasin ('HAS-A' munosabati). 'StorageBayCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Smart Warehouse: 'StorageBayCart' contains a reference to 'StorageBayItem'."
    },
    "requirements": {
      "classes": [
        "StorageBayItem",
        "StorageBayCart"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBayItem {\n    public String title;\n    public double price;\n    public StorageBayItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass StorageBayCart {\n    private StorageBayItem item;\n\n    public void setItem(StorageBayItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayCart cart = new StorageBayCart();\n        cart.setItem(new StorageBayItem(\"Smart Warehouse Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class StorageBayCart {\n    private StorageBayItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private StorageBayItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "139. Crypto Wallet — Kompozitsiya vs Merosxo'rlik",
      "en": "139. Crypto Wallet — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Crypto Wallet tizimida 'CryptoAssetCart' klassi o'z ichida 'CryptoAssetItem' obyektini saqlasin ('HAS-A' munosabati). 'CryptoAssetCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Crypto Wallet: 'CryptoAssetCart' contains a reference to 'CryptoAssetItem'."
    },
    "requirements": {
      "classes": [
        "CryptoAssetItem",
        "CryptoAssetCart"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAssetItem {\n    public String title;\n    public double price;\n    public CryptoAssetItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass CryptoAssetCart {\n    private CryptoAssetItem item;\n\n    public void setItem(CryptoAssetItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetCart cart = new CryptoAssetCart();\n        cart.setItem(new CryptoAssetItem(\"Crypto Wallet Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class CryptoAssetCart {\n    private CryptoAssetItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private CryptoAssetItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "140. National Library — Kompozitsiya vs Merosxo'rlik",
      "en": "140. National Library — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "National Library tizimida 'CatalogBookCart' klassi o'z ichida 'CatalogBookItem' obyektini saqlasin ('HAS-A' munosabati). 'CatalogBookCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in National Library: 'CatalogBookCart' contains a reference to 'CatalogBookItem'."
    },
    "requirements": {
      "classes": [
        "CatalogBookItem",
        "CatalogBookCart"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBookItem {\n    public String title;\n    public double price;\n    public CatalogBookItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass CatalogBookCart {\n    private CatalogBookItem item;\n\n    public void setItem(CatalogBookItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookCart cart = new CatalogBookCart();\n        cart.setItem(new CatalogBookItem(\"National Library Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class CatalogBookCart {\n    private CatalogBookItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private CatalogBookItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "141. BeFit Club — Kompozitsiya vs Merosxo'rlik",
      "en": "141. BeFit Club — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "BeFit Club tizimida 'GymMemberCart' klassi o'z ichida 'GymMemberItem' obyektini saqlasin ('HAS-A' munosabati). 'GymMemberCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in BeFit Club: 'GymMemberCart' contains a reference to 'GymMemberItem'."
    },
    "requirements": {
      "classes": [
        "GymMemberItem",
        "GymMemberCart"
      ]
    },
    "starterCode": "",
    "solution": "class GymMemberItem {\n    public String title;\n    public double price;\n    public GymMemberItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass GymMemberCart {\n    private GymMemberItem item;\n\n    public void setItem(GymMemberItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberCart cart = new GymMemberCart();\n        cart.setItem(new GymMemberItem(\"BeFit Club Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class GymMemberCart {\n    private GymMemberItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private GymMemberItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "142. Tashkent Parking — Kompozitsiya vs Merosxo'rlik",
      "en": "142. Tashkent Parking — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Tashkent Parking tizimida 'ParkingBayCart' klassi o'z ichida 'ParkingBayItem' obyektini saqlasin ('HAS-A' munosabati). 'ParkingBayCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Tashkent Parking: 'ParkingBayCart' contains a reference to 'ParkingBayItem'."
    },
    "requirements": {
      "classes": [
        "ParkingBayItem",
        "ParkingBayCart"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBayItem {\n    public String title;\n    public double price;\n    public ParkingBayItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass ParkingBayCart {\n    private ParkingBayItem item;\n\n    public void setItem(ParkingBayItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayCart cart = new ParkingBayCart();\n        cart.setItem(new ParkingBayItem(\"Tashkent Parking Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class ParkingBayCart {\n    private ParkingBayItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private ParkingBayItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "143. Medion Clinic — Kompozitsiya vs Merosxo'rlik",
      "en": "143. Medion Clinic — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Medion Clinic tizimida 'PatientRecordCart' klassi o'z ichida 'PatientRecordItem' obyektini saqlasin ('HAS-A' munosabati). 'PatientRecordCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Medion Clinic: 'PatientRecordCart' contains a reference to 'PatientRecordItem'."
    },
    "requirements": {
      "classes": [
        "PatientRecordItem",
        "PatientRecordCart"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecordItem {\n    public String title;\n    public double price;\n    public PatientRecordItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass PatientRecordCart {\n    private PatientRecordItem item;\n\n    public void setItem(PatientRecordItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordCart cart = new PatientRecordCart();\n        cart.setItem(new PatientRecordItem(\"Medion Clinic Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class PatientRecordCart {\n    private PatientRecordItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private PatientRecordItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "144. Hyatt Regency — Kompozitsiya vs Merosxo'rlik",
      "en": "144. Hyatt Regency — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Hyatt Regency tizimida 'HotelReservationCart' klassi o'z ichida 'HotelReservationItem' obyektini saqlasin ('HAS-A' munosabati). 'HotelReservationCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Hyatt Regency: 'HotelReservationCart' contains a reference to 'HotelReservationItem'."
    },
    "requirements": {
      "classes": [
        "HotelReservationItem",
        "HotelReservationCart"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservationItem {\n    public String title;\n    public double price;\n    public HotelReservationItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass HotelReservationCart {\n    private HotelReservationItem item;\n\n    public void setItem(HotelReservationItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationCart cart = new HotelReservationCart();\n        cart.setItem(new HotelReservationItem(\"Hyatt Regency Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class HotelReservationCart {\n    private HotelReservationItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private HotelReservationItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "145. Premier Cinema — Kompozitsiya vs Merosxo'rlik",
      "en": "145. Premier Cinema — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Premier Cinema tizimida 'CinemaTicketCart' klassi o'z ichida 'CinemaTicketItem' obyektini saqlasin ('HAS-A' munosabati). 'CinemaTicketCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Premier Cinema: 'CinemaTicketCart' contains a reference to 'CinemaTicketItem'."
    },
    "requirements": {
      "classes": [
        "CinemaTicketItem",
        "CinemaTicketCart"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicketItem {\n    public String title;\n    public double price;\n    public CinemaTicketItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass CinemaTicketCart {\n    private CinemaTicketItem item;\n\n    public void setItem(CinemaTicketItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketCart cart = new CinemaTicketCart();\n        cart.setItem(new CinemaTicketItem(\"Premier Cinema Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class CinemaTicketCart {\n    private CinemaTicketItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private CinemaTicketItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "146. Yandex Scooter — Kompozitsiya vs Merosxo'rlik",
      "en": "146. Yandex Scooter — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Yandex Scooter tizimida 'ElectricScooterCart' klassi o'z ichida 'ElectricScooterItem' obyektini saqlasin ('HAS-A' munosabati). 'ElectricScooterCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Yandex Scooter: 'ElectricScooterCart' contains a reference to 'ElectricScooterItem'."
    },
    "requirements": {
      "classes": [
        "ElectricScooterItem",
        "ElectricScooterCart"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooterItem {\n    public String title;\n    public double price;\n    public ElectricScooterItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass ElectricScooterCart {\n    private ElectricScooterItem item;\n\n    public void setItem(ElectricScooterItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterCart cart = new ElectricScooterCart();\n        cart.setItem(new ElectricScooterItem(\"Yandex Scooter Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class ElectricScooterCart {\n    private ElectricScooterItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private ElectricScooterItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "147. Weather Network — Kompozitsiya vs Merosxo'rlik",
      "en": "147. Weather Network — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Weather Network tizimida 'MeteoStationCart' klassi o'z ichida 'MeteoStationItem' obyektini saqlasin ('HAS-A' munosabati). 'MeteoStationCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Weather Network: 'MeteoStationCart' contains a reference to 'MeteoStationItem'."
    },
    "requirements": {
      "classes": [
        "MeteoStationItem",
        "MeteoStationCart"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStationItem {\n    public String title;\n    public double price;\n    public MeteoStationItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass MeteoStationCart {\n    private MeteoStationItem item;\n\n    public void setItem(MeteoStationItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationCart cart = new MeteoStationCart();\n        cart.setItem(new MeteoStationItem(\"Weather Network Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class MeteoStationCart {\n    private MeteoStationItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private MeteoStationItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "148. OpenMarket Auction — Kompozitsiya vs Merosxo'rlik",
      "en": "148. OpenMarket Auction — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "OpenMarket Auction tizimida 'AuctionLotCart' klassi o'z ichida 'AuctionLotItem' obyektini saqlasin ('HAS-A' munosabati). 'AuctionLotCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in OpenMarket Auction: 'AuctionLotCart' contains a reference to 'AuctionLotItem'."
    },
    "requirements": {
      "classes": [
        "AuctionLotItem",
        "AuctionLotCart"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLotItem {\n    public String title;\n    public double price;\n    public AuctionLotItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass AuctionLotCart {\n    private AuctionLotItem item;\n\n    public void setItem(AuctionLotItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotCart cart = new AuctionLotCart();\n        cart.setItem(new AuctionLotItem(\"OpenMarket Auction Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class AuctionLotCart {\n    private AuctionLotItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private AuctionLotItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "149. Solar Energy Grid — Kompozitsiya vs Merosxo'rlik",
      "en": "149. Solar Energy Grid — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "Solar Energy Grid tizimida 'SolarInverterCart' klassi o'z ichida 'SolarInverterItem' obyektini saqlasin ('HAS-A' munosabati). 'SolarInverterCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in Solar Energy Grid: 'SolarInverterCart' contains a reference to 'SolarInverterItem'."
    },
    "requirements": {
      "classes": [
        "SolarInverterItem",
        "SolarInverterCart"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverterItem {\n    public String title;\n    public double price;\n    public SolarInverterItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass SolarInverterCart {\n    private SolarInverterItem item;\n\n    public void setItem(SolarInverterItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterCart cart = new SolarInverterCart();\n        cart.setItem(new SolarInverterItem(\"Solar Energy Grid Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class SolarInverterCart {\n    private SolarInverterItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private SolarInverterItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: Kompozitsiya (HAS-A Munosabati)",
    "sector": "Master • CW2",
    "title": {
      "uz": "150. O'zbekiston Temir Yo'llari — Kompozitsiya vs Merosxo'rlik",
      "en": "150. O'zbekiston Temir Yo'llari — Composition (HAS-A Pattern)"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari tizimida 'TrainRouteCart' klassi o'z ichida 'TrainRouteItem' obyektini saqlasin ('HAS-A' munosabati). 'TrainRouteCart' ichida to'g'ridan-to'g'ri element narxini qaytaruvchi metod yarating.",
      "en": "Model HAS-A composition in O'zbekiston Temir Yo'llari: 'TrainRouteCart' contains a reference to 'TrainRouteItem'."
    },
    "requirements": {
      "classes": [
        "TrainRouteItem",
        "TrainRouteCart"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRouteItem {\n    public String title;\n    public double price;\n    public TrainRouteItem(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass TrainRouteCart {\n    private TrainRouteItem item;\n\n    public void setItem(TrainRouteItem item) {\n        this.item = item;\n    }\n\n    public double getItemPrice() {\n        return (item != null) ? item.price : 0.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteCart cart = new TrainRouteCart();\n        cart.setItem(new TrainRouteItem(\"O'zbekiston Temir Yo'llari Tovari\", 45.0));\n        System.out.println(\"Element narxi: $\" + cart.getItemPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "\"Favor composition over inheritance\" (Merosxo'rlikdan ko'ra kompozitsiyani afzal biling) — OOP ning eng mashhur oltin qoidasi. Ob'yekt boshqa ob'yektni o'z ichida ushlab tursa, tizim bo'shroq va moslashuvchanroq bo'ladi.",
      "theoryEn": "Favor composition over inheritance: HAS-A relationships decouple components and promote flexible runtime reconfiguration.",
      "cleanCode": "class TrainRouteCart {\n    private TrainRouteItem item;\n    public double getItemPrice() { return item != null ? item.price : 0.0; }\n}",
      "breakdown": [
        "<code>private TrainRouteItem item;</code>: Savatcha tovarning bolasi emas, balki uni o'zida saqlaydi (HAS-A)."
      ],
      "pitfalls": "Mantiqsiz joyda 'extends' ishlatish (masalan, Car extends Engine) arxitekturani buzadi; mashina dvigatelning bolasi emas, dvigatelga ega!",
      "cw2Tip": "CW2 da Order sinfi OrderItem elementlarini ichida saqlashi (Composition) eng yuqori ball keltiruvchi arxitektura hisoblanadi."
    }
  }
];
