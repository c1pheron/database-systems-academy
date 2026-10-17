// WIUT OOP (5COSC018C) — WEEK 4 DATASET (150 PROGRESSIVE CHALLENGES)
window.OOP_CHALLENGES_W4 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "1. Uzum Market — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "1. Uzum Market — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Uzum Market da 'ProductService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineProductService' ob'yektini biriktiring ('ProductService ref = new OnlineProductService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Uzum Market: assign child 'OnlineProductService' to parent reference 'ProductService'."
    },
    "requirements": {
      "classes": [
        "ProductService",
        "OnlineProductService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ProductService {\n    public void execute() {\n        System.out.println(\"Uzum Market tayanch xizmati\");\n    }\n}\n\nclass OnlineProductService extends ProductService {\n    @Override\n    public void execute() {\n        System.out.println(\"Uzum Market onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductService ref = new OnlineProductService();\n        ref.execute();\n    }\n}",
    "solution": "class ProductService {\n    public void execute() {\n        System.out.println(\"Uzum Market tayanch xizmati\");\n    }\n}\n\nclass OnlineProductService extends ProductService {\n    @Override\n    public void execute() {\n        System.out.println(\"Uzum Market onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductService ref = new OnlineProductService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "ProductService ref = new OnlineProductService();\nref.execute();",
      "breakdown": [
        "<code>ProductService ref = new OnlineProductService();</code>: Kompilyatsiya vaqtidagi tur ProductService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineProductService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "2. Payme Wallet — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "2. Payme Wallet — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Payme Wallet da 'WalletUserService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineWalletUserService' ob'yektini biriktiring ('WalletUserService ref = new OnlineWalletUserService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Payme Wallet: assign child 'OnlineWalletUserService' to parent reference 'WalletUserService'."
    },
    "requirements": {
      "classes": [
        "WalletUserService",
        "OnlineWalletUserService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class WalletUserService {\n    public void execute() {\n        System.out.println(\"Payme Wallet tayanch xizmati\");\n    }\n}\n\nclass OnlineWalletUserService extends WalletUserService {\n    @Override\n    public void execute() {\n        System.out.println(\"Payme Wallet onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserService ref = new OnlineWalletUserService();\n        ref.execute();\n    }\n}",
    "solution": "class WalletUserService {\n    public void execute() {\n        System.out.println(\"Payme Wallet tayanch xizmati\");\n    }\n}\n\nclass OnlineWalletUserService extends WalletUserService {\n    @Override\n    public void execute() {\n        System.out.println(\"Payme Wallet onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserService ref = new OnlineWalletUserService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "WalletUserService ref = new OnlineWalletUserService();\nref.execute();",
      "breakdown": [
        "<code>WalletUserService ref = new OnlineWalletUserService();</code>: Kompilyatsiya vaqtidagi tur WalletUserService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineWalletUserService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "3. Yandex Go — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "3. Yandex Go — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Yandex Go da 'TaxiRideService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineTaxiRideService' ob'yektini biriktiring ('TaxiRideService ref = new OnlineTaxiRideService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Yandex Go: assign child 'OnlineTaxiRideService' to parent reference 'TaxiRideService'."
    },
    "requirements": {
      "classes": [
        "TaxiRideService",
        "OnlineTaxiRideService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class TaxiRideService {\n    public void execute() {\n        System.out.println(\"Yandex Go tayanch xizmati\");\n    }\n}\n\nclass OnlineTaxiRideService extends TaxiRideService {\n    @Override\n    public void execute() {\n        System.out.println(\"Yandex Go onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideService ref = new OnlineTaxiRideService();\n        ref.execute();\n    }\n}",
    "solution": "class TaxiRideService {\n    public void execute() {\n        System.out.println(\"Yandex Go tayanch xizmati\");\n    }\n}\n\nclass OnlineTaxiRideService extends TaxiRideService {\n    @Override\n    public void execute() {\n        System.out.println(\"Yandex Go onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideService ref = new OnlineTaxiRideService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "TaxiRideService ref = new OnlineTaxiRideService();\nref.execute();",
      "breakdown": [
        "<code>TaxiRideService ref = new OnlineTaxiRideService();</code>: Kompilyatsiya vaqtidagi tur TaxiRideService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineTaxiRideService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "4. Korzinka Go — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "4. Korzinka Go — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Korzinka Go da 'LoyaltyCardService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineLoyaltyCardService' ob'yektini biriktiring ('LoyaltyCardService ref = new OnlineLoyaltyCardService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Korzinka Go: assign child 'OnlineLoyaltyCardService' to parent reference 'LoyaltyCardService'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardService",
        "OnlineLoyaltyCardService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class LoyaltyCardService {\n    public void execute() {\n        System.out.println(\"Korzinka Go tayanch xizmati\");\n    }\n}\n\nclass OnlineLoyaltyCardService extends LoyaltyCardService {\n    @Override\n    public void execute() {\n        System.out.println(\"Korzinka Go onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardService ref = new OnlineLoyaltyCardService();\n        ref.execute();\n    }\n}",
    "solution": "class LoyaltyCardService {\n    public void execute() {\n        System.out.println(\"Korzinka Go tayanch xizmati\");\n    }\n}\n\nclass OnlineLoyaltyCardService extends LoyaltyCardService {\n    @Override\n    public void execute() {\n        System.out.println(\"Korzinka Go onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardService ref = new OnlineLoyaltyCardService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "LoyaltyCardService ref = new OnlineLoyaltyCardService();\nref.execute();",
      "breakdown": [
        "<code>LoyaltyCardService ref = new OnlineLoyaltyCardService();</code>: Kompilyatsiya vaqtidagi tur LoyaltyCardService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineLoyaltyCardService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "5. WIUT Portal — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "5. WIUT Portal — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "WIUT Portal da 'StudentService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineStudentService' ob'yektini biriktiring ('StudentService ref = new OnlineStudentService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in WIUT Portal: assign child 'OnlineStudentService' to parent reference 'StudentService'."
    },
    "requirements": {
      "classes": [
        "StudentService",
        "OnlineStudentService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class StudentService {\n    public void execute() {\n        System.out.println(\"WIUT Portal tayanch xizmati\");\n    }\n}\n\nclass OnlineStudentService extends StudentService {\n    @Override\n    public void execute() {\n        System.out.println(\"WIUT Portal onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentService ref = new OnlineStudentService();\n        ref.execute();\n    }\n}",
    "solution": "class StudentService {\n    public void execute() {\n        System.out.println(\"WIUT Portal tayanch xizmati\");\n    }\n}\n\nclass OnlineStudentService extends StudentService {\n    @Override\n    public void execute() {\n        System.out.println(\"WIUT Portal onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentService ref = new OnlineStudentService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "StudentService ref = new OnlineStudentService();\nref.execute();",
      "breakdown": [
        "<code>StudentService ref = new OnlineStudentService();</code>: Kompilyatsiya vaqtidagi tur StudentService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineStudentService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "6. Click Pay — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "6. Click Pay — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Click Pay da 'PaymentTxnService' ota turdagi o'zgaruvchiga uning bolasi 'OnlinePaymentTxnService' ob'yektini biriktiring ('PaymentTxnService ref = new OnlinePaymentTxnService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Click Pay: assign child 'OnlinePaymentTxnService' to parent reference 'PaymentTxnService'."
    },
    "requirements": {
      "classes": [
        "PaymentTxnService",
        "OnlinePaymentTxnService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class PaymentTxnService {\n    public void execute() {\n        System.out.println(\"Click Pay tayanch xizmati\");\n    }\n}\n\nclass OnlinePaymentTxnService extends PaymentTxnService {\n    @Override\n    public void execute() {\n        System.out.println(\"Click Pay onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnService ref = new OnlinePaymentTxnService();\n        ref.execute();\n    }\n}",
    "solution": "class PaymentTxnService {\n    public void execute() {\n        System.out.println(\"Click Pay tayanch xizmati\");\n    }\n}\n\nclass OnlinePaymentTxnService extends PaymentTxnService {\n    @Override\n    public void execute() {\n        System.out.println(\"Click Pay onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnService ref = new OnlinePaymentTxnService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "PaymentTxnService ref = new OnlinePaymentTxnService();\nref.execute();",
      "breakdown": [
        "<code>PaymentTxnService ref = new OnlinePaymentTxnService();</code>: Kompilyatsiya vaqtidagi tur PaymentTxnService, lekin Heap xotiradagi haqiqiy ob'yekt OnlinePaymentTxnService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "7. Telegram Bot — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "7. Telegram Bot — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Telegram Bot da 'BotMessageService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineBotMessageService' ob'yektini biriktiring ('BotMessageService ref = new OnlineBotMessageService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Telegram Bot: assign child 'OnlineBotMessageService' to parent reference 'BotMessageService'."
    },
    "requirements": {
      "classes": [
        "BotMessageService",
        "OnlineBotMessageService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BotMessageService {\n    public void execute() {\n        System.out.println(\"Telegram Bot tayanch xizmati\");\n    }\n}\n\nclass OnlineBotMessageService extends BotMessageService {\n    @Override\n    public void execute() {\n        System.out.println(\"Telegram Bot onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageService ref = new OnlineBotMessageService();\n        ref.execute();\n    }\n}",
    "solution": "class BotMessageService {\n    public void execute() {\n        System.out.println(\"Telegram Bot tayanch xizmati\");\n    }\n}\n\nclass OnlineBotMessageService extends BotMessageService {\n    @Override\n    public void execute() {\n        System.out.println(\"Telegram Bot onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageService ref = new OnlineBotMessageService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "BotMessageService ref = new OnlineBotMessageService();\nref.execute();",
      "breakdown": [
        "<code>BotMessageService ref = new OnlineBotMessageService();</code>: Kompilyatsiya vaqtidagi tur BotMessageService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineBotMessageService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "8. UzAirways — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "8. UzAirways — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "UzAirways da 'FlightTicketService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineFlightTicketService' ob'yektini biriktiring ('FlightTicketService ref = new OnlineFlightTicketService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in UzAirways: assign child 'OnlineFlightTicketService' to parent reference 'FlightTicketService'."
    },
    "requirements": {
      "classes": [
        "FlightTicketService",
        "OnlineFlightTicketService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class FlightTicketService {\n    public void execute() {\n        System.out.println(\"UzAirways tayanch xizmati\");\n    }\n}\n\nclass OnlineFlightTicketService extends FlightTicketService {\n    @Override\n    public void execute() {\n        System.out.println(\"UzAirways onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketService ref = new OnlineFlightTicketService();\n        ref.execute();\n    }\n}",
    "solution": "class FlightTicketService {\n    public void execute() {\n        System.out.println(\"UzAirways tayanch xizmati\");\n    }\n}\n\nclass OnlineFlightTicketService extends FlightTicketService {\n    @Override\n    public void execute() {\n        System.out.println(\"UzAirways onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketService ref = new OnlineFlightTicketService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "FlightTicketService ref = new OnlineFlightTicketService();\nref.execute();",
      "breakdown": [
        "<code>FlightTicketService ref = new OnlineFlightTicketService();</code>: Kompilyatsiya vaqtidagi tur FlightTicketService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineFlightTicketService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "9. IT Park Academy — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "9. IT Park Academy — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "IT Park Academy da 'BootcampCourseService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineBootcampCourseService' ob'yektini biriktiring ('BootcampCourseService ref = new OnlineBootcampCourseService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in IT Park Academy: assign child 'OnlineBootcampCourseService' to parent reference 'BootcampCourseService'."
    },
    "requirements": {
      "classes": [
        "BootcampCourseService",
        "OnlineBootcampCourseService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BootcampCourseService {\n    public void execute() {\n        System.out.println(\"IT Park Academy tayanch xizmati\");\n    }\n}\n\nclass OnlineBootcampCourseService extends BootcampCourseService {\n    @Override\n    public void execute() {\n        System.out.println(\"IT Park Academy onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseService ref = new OnlineBootcampCourseService();\n        ref.execute();\n    }\n}",
    "solution": "class BootcampCourseService {\n    public void execute() {\n        System.out.println(\"IT Park Academy tayanch xizmati\");\n    }\n}\n\nclass OnlineBootcampCourseService extends BootcampCourseService {\n    @Override\n    public void execute() {\n        System.out.println(\"IT Park Academy onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseService ref = new OnlineBootcampCourseService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "BootcampCourseService ref = new OnlineBootcampCourseService();\nref.execute();",
      "breakdown": [
        "<code>BootcampCourseService ref = new OnlineBootcampCourseService();</code>: Kompilyatsiya vaqtidagi tur BootcampCourseService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineBootcampCourseService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "10. Anorbank — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "10. Anorbank — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Anorbank da 'DebitCardService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineDebitCardService' ob'yektini biriktiring ('DebitCardService ref = new OnlineDebitCardService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Anorbank: assign child 'OnlineDebitCardService' to parent reference 'DebitCardService'."
    },
    "requirements": {
      "classes": [
        "DebitCardService",
        "OnlineDebitCardService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class DebitCardService {\n    public void execute() {\n        System.out.println(\"Anorbank tayanch xizmati\");\n    }\n}\n\nclass OnlineDebitCardService extends DebitCardService {\n    @Override\n    public void execute() {\n        System.out.println(\"Anorbank onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardService ref = new OnlineDebitCardService();\n        ref.execute();\n    }\n}",
    "solution": "class DebitCardService {\n    public void execute() {\n        System.out.println(\"Anorbank tayanch xizmati\");\n    }\n}\n\nclass OnlineDebitCardService extends DebitCardService {\n    @Override\n    public void execute() {\n        System.out.println(\"Anorbank onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardService ref = new OnlineDebitCardService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "DebitCardService ref = new OnlineDebitCardService();\nref.execute();",
      "breakdown": [
        "<code>DebitCardService ref = new OnlineDebitCardService();</code>: Kompilyatsiya vaqtidagi tur DebitCardService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineDebitCardService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "11. Oson Apteka — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "11. Oson Apteka — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Oson Apteka da 'MedicineService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineMedicineService' ob'yektini biriktiring ('MedicineService ref = new OnlineMedicineService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Oson Apteka: assign child 'OnlineMedicineService' to parent reference 'MedicineService'."
    },
    "requirements": {
      "classes": [
        "MedicineService",
        "OnlineMedicineService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class MedicineService {\n    public void execute() {\n        System.out.println(\"Oson Apteka tayanch xizmati\");\n    }\n}\n\nclass OnlineMedicineService extends MedicineService {\n    @Override\n    public void execute() {\n        System.out.println(\"Oson Apteka onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineService ref = new OnlineMedicineService();\n        ref.execute();\n    }\n}",
    "solution": "class MedicineService {\n    public void execute() {\n        System.out.println(\"Oson Apteka tayanch xizmati\");\n    }\n}\n\nclass OnlineMedicineService extends MedicineService {\n    @Override\n    public void execute() {\n        System.out.println(\"Oson Apteka onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineService ref = new OnlineMedicineService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "MedicineService ref = new OnlineMedicineService();\nref.execute();",
      "breakdown": [
        "<code>MedicineService ref = new OnlineMedicineService();</code>: Kompilyatsiya vaqtidagi tur MedicineService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineMedicineService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "12. Evos FastFood — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "12. Evos FastFood — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Evos FastFood da 'FoodOrderService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineFoodOrderService' ob'yektini biriktiring ('FoodOrderService ref = new OnlineFoodOrderService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Evos FastFood: assign child 'OnlineFoodOrderService' to parent reference 'FoodOrderService'."
    },
    "requirements": {
      "classes": [
        "FoodOrderService",
        "OnlineFoodOrderService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class FoodOrderService {\n    public void execute() {\n        System.out.println(\"Evos FastFood tayanch xizmati\");\n    }\n}\n\nclass OnlineFoodOrderService extends FoodOrderService {\n    @Override\n    public void execute() {\n        System.out.println(\"Evos FastFood onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderService ref = new OnlineFoodOrderService();\n        ref.execute();\n    }\n}",
    "solution": "class FoodOrderService {\n    public void execute() {\n        System.out.println(\"Evos FastFood tayanch xizmati\");\n    }\n}\n\nclass OnlineFoodOrderService extends FoodOrderService {\n    @Override\n    public void execute() {\n        System.out.println(\"Evos FastFood onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderService ref = new OnlineFoodOrderService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "FoodOrderService ref = new OnlineFoodOrderService();\nref.execute();",
      "breakdown": [
        "<code>FoodOrderService ref = new OnlineFoodOrderService();</code>: Kompilyatsiya vaqtidagi tur FoodOrderService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineFoodOrderService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "13. Bellissimo Pizza — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "13. Bellissimo Pizza — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'PizzaOrderService' ota turdagi o'zgaruvchiga uning bolasi 'OnlinePizzaOrderService' ob'yektini biriktiring ('PizzaOrderService ref = new OnlinePizzaOrderService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Bellissimo Pizza: assign child 'OnlinePizzaOrderService' to parent reference 'PizzaOrderService'."
    },
    "requirements": {
      "classes": [
        "PizzaOrderService",
        "OnlinePizzaOrderService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class PizzaOrderService {\n    public void execute() {\n        System.out.println(\"Bellissimo Pizza tayanch xizmati\");\n    }\n}\n\nclass OnlinePizzaOrderService extends PizzaOrderService {\n    @Override\n    public void execute() {\n        System.out.println(\"Bellissimo Pizza onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderService ref = new OnlinePizzaOrderService();\n        ref.execute();\n    }\n}",
    "solution": "class PizzaOrderService {\n    public void execute() {\n        System.out.println(\"Bellissimo Pizza tayanch xizmati\");\n    }\n}\n\nclass OnlinePizzaOrderService extends PizzaOrderService {\n    @Override\n    public void execute() {\n        System.out.println(\"Bellissimo Pizza onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderService ref = new OnlinePizzaOrderService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "PizzaOrderService ref = new OnlinePizzaOrderService();\nref.execute();",
      "breakdown": [
        "<code>PizzaOrderService ref = new OnlinePizzaOrderService();</code>: Kompilyatsiya vaqtidagi tur PizzaOrderService, lekin Heap xotiradagi haqiqiy ob'yekt OnlinePizzaOrderService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "14. Milliy TV — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "14. Milliy TV — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Milliy TV da 'BroadcastShowService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineBroadcastShowService' ob'yektini biriktiring ('BroadcastShowService ref = new OnlineBroadcastShowService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Milliy TV: assign child 'OnlineBroadcastShowService' to parent reference 'BroadcastShowService'."
    },
    "requirements": {
      "classes": [
        "BroadcastShowService",
        "OnlineBroadcastShowService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BroadcastShowService {\n    public void execute() {\n        System.out.println(\"Milliy TV tayanch xizmati\");\n    }\n}\n\nclass OnlineBroadcastShowService extends BroadcastShowService {\n    @Override\n    public void execute() {\n        System.out.println(\"Milliy TV onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowService ref = new OnlineBroadcastShowService();\n        ref.execute();\n    }\n}",
    "solution": "class BroadcastShowService {\n    public void execute() {\n        System.out.println(\"Milliy TV tayanch xizmati\");\n    }\n}\n\nclass OnlineBroadcastShowService extends BroadcastShowService {\n    @Override\n    public void execute() {\n        System.out.println(\"Milliy TV onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowService ref = new OnlineBroadcastShowService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "BroadcastShowService ref = new OnlineBroadcastShowService();\nref.execute();",
      "breakdown": [
        "<code>BroadcastShowService ref = new OnlineBroadcastShowService();</code>: Kompilyatsiya vaqtidagi tur BroadcastShowService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineBroadcastShowService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "15. Spotify Sound — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "15. Spotify Sound — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Spotify Sound da 'AudioTrackService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineAudioTrackService' ob'yektini biriktiring ('AudioTrackService ref = new OnlineAudioTrackService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Spotify Sound: assign child 'OnlineAudioTrackService' to parent reference 'AudioTrackService'."
    },
    "requirements": {
      "classes": [
        "AudioTrackService",
        "OnlineAudioTrackService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class AudioTrackService {\n    public void execute() {\n        System.out.println(\"Spotify Sound tayanch xizmati\");\n    }\n}\n\nclass OnlineAudioTrackService extends AudioTrackService {\n    @Override\n    public void execute() {\n        System.out.println(\"Spotify Sound onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackService ref = new OnlineAudioTrackService();\n        ref.execute();\n    }\n}",
    "solution": "class AudioTrackService {\n    public void execute() {\n        System.out.println(\"Spotify Sound tayanch xizmati\");\n    }\n}\n\nclass OnlineAudioTrackService extends AudioTrackService {\n    @Override\n    public void execute() {\n        System.out.println(\"Spotify Sound onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackService ref = new OnlineAudioTrackService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "AudioTrackService ref = new OnlineAudioTrackService();\nref.execute();",
      "breakdown": [
        "<code>AudioTrackService ref = new OnlineAudioTrackService();</code>: Kompilyatsiya vaqtidagi tur AudioTrackService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineAudioTrackService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "16. Smart Thermostat — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "16. Smart Thermostat — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'ThermostatService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineThermostatService' ob'yektini biriktiring ('ThermostatService ref = new OnlineThermostatService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Smart Thermostat: assign child 'OnlineThermostatService' to parent reference 'ThermostatService'."
    },
    "requirements": {
      "classes": [
        "ThermostatService",
        "OnlineThermostatService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ThermostatService {\n    public void execute() {\n        System.out.println(\"Smart Thermostat tayanch xizmati\");\n    }\n}\n\nclass OnlineThermostatService extends ThermostatService {\n    @Override\n    public void execute() {\n        System.out.println(\"Smart Thermostat onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatService ref = new OnlineThermostatService();\n        ref.execute();\n    }\n}",
    "solution": "class ThermostatService {\n    public void execute() {\n        System.out.println(\"Smart Thermostat tayanch xizmati\");\n    }\n}\n\nclass OnlineThermostatService extends ThermostatService {\n    @Override\n    public void execute() {\n        System.out.println(\"Smart Thermostat onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatService ref = new OnlineThermostatService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "ThermostatService ref = new OnlineThermostatService();\nref.execute();",
      "breakdown": [
        "<code>ThermostatService ref = new OnlineThermostatService();</code>: Kompilyatsiya vaqtidagi tur ThermostatService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineThermostatService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "17. Drone Delivery — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "17. Drone Delivery — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Drone Delivery da 'DeliveryDroneService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineDeliveryDroneService' ob'yektini biriktiring ('DeliveryDroneService ref = new OnlineDeliveryDroneService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Drone Delivery: assign child 'OnlineDeliveryDroneService' to parent reference 'DeliveryDroneService'."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneService",
        "OnlineDeliveryDroneService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class DeliveryDroneService {\n    public void execute() {\n        System.out.println(\"Drone Delivery tayanch xizmati\");\n    }\n}\n\nclass OnlineDeliveryDroneService extends DeliveryDroneService {\n    @Override\n    public void execute() {\n        System.out.println(\"Drone Delivery onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneService ref = new OnlineDeliveryDroneService();\n        ref.execute();\n    }\n}",
    "solution": "class DeliveryDroneService {\n    public void execute() {\n        System.out.println(\"Drone Delivery tayanch xizmati\");\n    }\n}\n\nclass OnlineDeliveryDroneService extends DeliveryDroneService {\n    @Override\n    public void execute() {\n        System.out.println(\"Drone Delivery onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneService ref = new OnlineDeliveryDroneService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "DeliveryDroneService ref = new OnlineDeliveryDroneService();\nref.execute();",
      "breakdown": [
        "<code>DeliveryDroneService ref = new OnlineDeliveryDroneService();</code>: Kompilyatsiya vaqtidagi tur DeliveryDroneService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineDeliveryDroneService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "18. Smart Warehouse — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "18. Smart Warehouse — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'StorageBayService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineStorageBayService' ob'yektini biriktiring ('StorageBayService ref = new OnlineStorageBayService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Smart Warehouse: assign child 'OnlineStorageBayService' to parent reference 'StorageBayService'."
    },
    "requirements": {
      "classes": [
        "StorageBayService",
        "OnlineStorageBayService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class StorageBayService {\n    public void execute() {\n        System.out.println(\"Smart Warehouse tayanch xizmati\");\n    }\n}\n\nclass OnlineStorageBayService extends StorageBayService {\n    @Override\n    public void execute() {\n        System.out.println(\"Smart Warehouse onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayService ref = new OnlineStorageBayService();\n        ref.execute();\n    }\n}",
    "solution": "class StorageBayService {\n    public void execute() {\n        System.out.println(\"Smart Warehouse tayanch xizmati\");\n    }\n}\n\nclass OnlineStorageBayService extends StorageBayService {\n    @Override\n    public void execute() {\n        System.out.println(\"Smart Warehouse onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayService ref = new OnlineStorageBayService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "StorageBayService ref = new OnlineStorageBayService();\nref.execute();",
      "breakdown": [
        "<code>StorageBayService ref = new OnlineStorageBayService();</code>: Kompilyatsiya vaqtidagi tur StorageBayService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineStorageBayService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "19. Crypto Wallet — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "19. Crypto Wallet — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'CryptoAssetService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineCryptoAssetService' ob'yektini biriktiring ('CryptoAssetService ref = new OnlineCryptoAssetService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Crypto Wallet: assign child 'OnlineCryptoAssetService' to parent reference 'CryptoAssetService'."
    },
    "requirements": {
      "classes": [
        "CryptoAssetService",
        "OnlineCryptoAssetService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class CryptoAssetService {\n    public void execute() {\n        System.out.println(\"Crypto Wallet tayanch xizmati\");\n    }\n}\n\nclass OnlineCryptoAssetService extends CryptoAssetService {\n    @Override\n    public void execute() {\n        System.out.println(\"Crypto Wallet onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetService ref = new OnlineCryptoAssetService();\n        ref.execute();\n    }\n}",
    "solution": "class CryptoAssetService {\n    public void execute() {\n        System.out.println(\"Crypto Wallet tayanch xizmati\");\n    }\n}\n\nclass OnlineCryptoAssetService extends CryptoAssetService {\n    @Override\n    public void execute() {\n        System.out.println(\"Crypto Wallet onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetService ref = new OnlineCryptoAssetService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "CryptoAssetService ref = new OnlineCryptoAssetService();\nref.execute();",
      "breakdown": [
        "<code>CryptoAssetService ref = new OnlineCryptoAssetService();</code>: Kompilyatsiya vaqtidagi tur CryptoAssetService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineCryptoAssetService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "20. National Library — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "20. National Library — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "National Library da 'CatalogBookService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineCatalogBookService' ob'yektini biriktiring ('CatalogBookService ref = new OnlineCatalogBookService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in National Library: assign child 'OnlineCatalogBookService' to parent reference 'CatalogBookService'."
    },
    "requirements": {
      "classes": [
        "CatalogBookService",
        "OnlineCatalogBookService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class CatalogBookService {\n    public void execute() {\n        System.out.println(\"National Library tayanch xizmati\");\n    }\n}\n\nclass OnlineCatalogBookService extends CatalogBookService {\n    @Override\n    public void execute() {\n        System.out.println(\"National Library onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookService ref = new OnlineCatalogBookService();\n        ref.execute();\n    }\n}",
    "solution": "class CatalogBookService {\n    public void execute() {\n        System.out.println(\"National Library tayanch xizmati\");\n    }\n}\n\nclass OnlineCatalogBookService extends CatalogBookService {\n    @Override\n    public void execute() {\n        System.out.println(\"National Library onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookService ref = new OnlineCatalogBookService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "CatalogBookService ref = new OnlineCatalogBookService();\nref.execute();",
      "breakdown": [
        "<code>CatalogBookService ref = new OnlineCatalogBookService();</code>: Kompilyatsiya vaqtidagi tur CatalogBookService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineCatalogBookService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "21. BeFit Club — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "21. BeFit Club — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "BeFit Club da 'GymMemberService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineGymMemberService' ob'yektini biriktiring ('GymMemberService ref = new OnlineGymMemberService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in BeFit Club: assign child 'OnlineGymMemberService' to parent reference 'GymMemberService'."
    },
    "requirements": {
      "classes": [
        "GymMemberService",
        "OnlineGymMemberService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class GymMemberService {\n    public void execute() {\n        System.out.println(\"BeFit Club tayanch xizmati\");\n    }\n}\n\nclass OnlineGymMemberService extends GymMemberService {\n    @Override\n    public void execute() {\n        System.out.println(\"BeFit Club onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberService ref = new OnlineGymMemberService();\n        ref.execute();\n    }\n}",
    "solution": "class GymMemberService {\n    public void execute() {\n        System.out.println(\"BeFit Club tayanch xizmati\");\n    }\n}\n\nclass OnlineGymMemberService extends GymMemberService {\n    @Override\n    public void execute() {\n        System.out.println(\"BeFit Club onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberService ref = new OnlineGymMemberService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "GymMemberService ref = new OnlineGymMemberService();\nref.execute();",
      "breakdown": [
        "<code>GymMemberService ref = new OnlineGymMemberService();</code>: Kompilyatsiya vaqtidagi tur GymMemberService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineGymMemberService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "22. Tashkent Parking — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "22. Tashkent Parking — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'ParkingBayService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineParkingBayService' ob'yektini biriktiring ('ParkingBayService ref = new OnlineParkingBayService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Tashkent Parking: assign child 'OnlineParkingBayService' to parent reference 'ParkingBayService'."
    },
    "requirements": {
      "classes": [
        "ParkingBayService",
        "OnlineParkingBayService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ParkingBayService {\n    public void execute() {\n        System.out.println(\"Tashkent Parking tayanch xizmati\");\n    }\n}\n\nclass OnlineParkingBayService extends ParkingBayService {\n    @Override\n    public void execute() {\n        System.out.println(\"Tashkent Parking onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayService ref = new OnlineParkingBayService();\n        ref.execute();\n    }\n}",
    "solution": "class ParkingBayService {\n    public void execute() {\n        System.out.println(\"Tashkent Parking tayanch xizmati\");\n    }\n}\n\nclass OnlineParkingBayService extends ParkingBayService {\n    @Override\n    public void execute() {\n        System.out.println(\"Tashkent Parking onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayService ref = new OnlineParkingBayService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "ParkingBayService ref = new OnlineParkingBayService();\nref.execute();",
      "breakdown": [
        "<code>ParkingBayService ref = new OnlineParkingBayService();</code>: Kompilyatsiya vaqtidagi tur ParkingBayService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineParkingBayService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "23. Medion Clinic — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "23. Medion Clinic — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Medion Clinic da 'PatientRecordService' ota turdagi o'zgaruvchiga uning bolasi 'OnlinePatientRecordService' ob'yektini biriktiring ('PatientRecordService ref = new OnlinePatientRecordService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Medion Clinic: assign child 'OnlinePatientRecordService' to parent reference 'PatientRecordService'."
    },
    "requirements": {
      "classes": [
        "PatientRecordService",
        "OnlinePatientRecordService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class PatientRecordService {\n    public void execute() {\n        System.out.println(\"Medion Clinic tayanch xizmati\");\n    }\n}\n\nclass OnlinePatientRecordService extends PatientRecordService {\n    @Override\n    public void execute() {\n        System.out.println(\"Medion Clinic onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordService ref = new OnlinePatientRecordService();\n        ref.execute();\n    }\n}",
    "solution": "class PatientRecordService {\n    public void execute() {\n        System.out.println(\"Medion Clinic tayanch xizmati\");\n    }\n}\n\nclass OnlinePatientRecordService extends PatientRecordService {\n    @Override\n    public void execute() {\n        System.out.println(\"Medion Clinic onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordService ref = new OnlinePatientRecordService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "PatientRecordService ref = new OnlinePatientRecordService();\nref.execute();",
      "breakdown": [
        "<code>PatientRecordService ref = new OnlinePatientRecordService();</code>: Kompilyatsiya vaqtidagi tur PatientRecordService, lekin Heap xotiradagi haqiqiy ob'yekt OnlinePatientRecordService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "24. Hyatt Regency — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "24. Hyatt Regency — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'HotelReservationService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineHotelReservationService' ob'yektini biriktiring ('HotelReservationService ref = new OnlineHotelReservationService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Hyatt Regency: assign child 'OnlineHotelReservationService' to parent reference 'HotelReservationService'."
    },
    "requirements": {
      "classes": [
        "HotelReservationService",
        "OnlineHotelReservationService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class HotelReservationService {\n    public void execute() {\n        System.out.println(\"Hyatt Regency tayanch xizmati\");\n    }\n}\n\nclass OnlineHotelReservationService extends HotelReservationService {\n    @Override\n    public void execute() {\n        System.out.println(\"Hyatt Regency onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationService ref = new OnlineHotelReservationService();\n        ref.execute();\n    }\n}",
    "solution": "class HotelReservationService {\n    public void execute() {\n        System.out.println(\"Hyatt Regency tayanch xizmati\");\n    }\n}\n\nclass OnlineHotelReservationService extends HotelReservationService {\n    @Override\n    public void execute() {\n        System.out.println(\"Hyatt Regency onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationService ref = new OnlineHotelReservationService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "HotelReservationService ref = new OnlineHotelReservationService();\nref.execute();",
      "breakdown": [
        "<code>HotelReservationService ref = new OnlineHotelReservationService();</code>: Kompilyatsiya vaqtidagi tur HotelReservationService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineHotelReservationService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "25. Premier Cinema — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "25. Premier Cinema — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Premier Cinema da 'CinemaTicketService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineCinemaTicketService' ob'yektini biriktiring ('CinemaTicketService ref = new OnlineCinemaTicketService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Premier Cinema: assign child 'OnlineCinemaTicketService' to parent reference 'CinemaTicketService'."
    },
    "requirements": {
      "classes": [
        "CinemaTicketService",
        "OnlineCinemaTicketService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class CinemaTicketService {\n    public void execute() {\n        System.out.println(\"Premier Cinema tayanch xizmati\");\n    }\n}\n\nclass OnlineCinemaTicketService extends CinemaTicketService {\n    @Override\n    public void execute() {\n        System.out.println(\"Premier Cinema onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketService ref = new OnlineCinemaTicketService();\n        ref.execute();\n    }\n}",
    "solution": "class CinemaTicketService {\n    public void execute() {\n        System.out.println(\"Premier Cinema tayanch xizmati\");\n    }\n}\n\nclass OnlineCinemaTicketService extends CinemaTicketService {\n    @Override\n    public void execute() {\n        System.out.println(\"Premier Cinema onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketService ref = new OnlineCinemaTicketService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "CinemaTicketService ref = new OnlineCinemaTicketService();\nref.execute();",
      "breakdown": [
        "<code>CinemaTicketService ref = new OnlineCinemaTicketService();</code>: Kompilyatsiya vaqtidagi tur CinemaTicketService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineCinemaTicketService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "26. Yandex Scooter — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "26. Yandex Scooter — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'ElectricScooterService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineElectricScooterService' ob'yektini biriktiring ('ElectricScooterService ref = new OnlineElectricScooterService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Yandex Scooter: assign child 'OnlineElectricScooterService' to parent reference 'ElectricScooterService'."
    },
    "requirements": {
      "classes": [
        "ElectricScooterService",
        "OnlineElectricScooterService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ElectricScooterService {\n    public void execute() {\n        System.out.println(\"Yandex Scooter tayanch xizmati\");\n    }\n}\n\nclass OnlineElectricScooterService extends ElectricScooterService {\n    @Override\n    public void execute() {\n        System.out.println(\"Yandex Scooter onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterService ref = new OnlineElectricScooterService();\n        ref.execute();\n    }\n}",
    "solution": "class ElectricScooterService {\n    public void execute() {\n        System.out.println(\"Yandex Scooter tayanch xizmati\");\n    }\n}\n\nclass OnlineElectricScooterService extends ElectricScooterService {\n    @Override\n    public void execute() {\n        System.out.println(\"Yandex Scooter onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterService ref = new OnlineElectricScooterService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "ElectricScooterService ref = new OnlineElectricScooterService();\nref.execute();",
      "breakdown": [
        "<code>ElectricScooterService ref = new OnlineElectricScooterService();</code>: Kompilyatsiya vaqtidagi tur ElectricScooterService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineElectricScooterService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "27. Weather Network — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "27. Weather Network — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Weather Network da 'MeteoStationService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineMeteoStationService' ob'yektini biriktiring ('MeteoStationService ref = new OnlineMeteoStationService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Weather Network: assign child 'OnlineMeteoStationService' to parent reference 'MeteoStationService'."
    },
    "requirements": {
      "classes": [
        "MeteoStationService",
        "OnlineMeteoStationService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class MeteoStationService {\n    public void execute() {\n        System.out.println(\"Weather Network tayanch xizmati\");\n    }\n}\n\nclass OnlineMeteoStationService extends MeteoStationService {\n    @Override\n    public void execute() {\n        System.out.println(\"Weather Network onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationService ref = new OnlineMeteoStationService();\n        ref.execute();\n    }\n}",
    "solution": "class MeteoStationService {\n    public void execute() {\n        System.out.println(\"Weather Network tayanch xizmati\");\n    }\n}\n\nclass OnlineMeteoStationService extends MeteoStationService {\n    @Override\n    public void execute() {\n        System.out.println(\"Weather Network onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationService ref = new OnlineMeteoStationService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "MeteoStationService ref = new OnlineMeteoStationService();\nref.execute();",
      "breakdown": [
        "<code>MeteoStationService ref = new OnlineMeteoStationService();</code>: Kompilyatsiya vaqtidagi tur MeteoStationService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineMeteoStationService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "28. OpenMarket Auction — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "28. OpenMarket Auction — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'AuctionLotService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineAuctionLotService' ob'yektini biriktiring ('AuctionLotService ref = new OnlineAuctionLotService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in OpenMarket Auction: assign child 'OnlineAuctionLotService' to parent reference 'AuctionLotService'."
    },
    "requirements": {
      "classes": [
        "AuctionLotService",
        "OnlineAuctionLotService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class AuctionLotService {\n    public void execute() {\n        System.out.println(\"OpenMarket Auction tayanch xizmati\");\n    }\n}\n\nclass OnlineAuctionLotService extends AuctionLotService {\n    @Override\n    public void execute() {\n        System.out.println(\"OpenMarket Auction onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotService ref = new OnlineAuctionLotService();\n        ref.execute();\n    }\n}",
    "solution": "class AuctionLotService {\n    public void execute() {\n        System.out.println(\"OpenMarket Auction tayanch xizmati\");\n    }\n}\n\nclass OnlineAuctionLotService extends AuctionLotService {\n    @Override\n    public void execute() {\n        System.out.println(\"OpenMarket Auction onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotService ref = new OnlineAuctionLotService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "AuctionLotService ref = new OnlineAuctionLotService();\nref.execute();",
      "breakdown": [
        "<code>AuctionLotService ref = new OnlineAuctionLotService();</code>: Kompilyatsiya vaqtidagi tur AuctionLotService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineAuctionLotService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "29. Solar Energy Grid — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "29. Solar Energy Grid — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'SolarInverterService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineSolarInverterService' ob'yektini biriktiring ('SolarInverterService ref = new OnlineSolarInverterService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in Solar Energy Grid: assign child 'OnlineSolarInverterService' to parent reference 'SolarInverterService'."
    },
    "requirements": {
      "classes": [
        "SolarInverterService",
        "OnlineSolarInverterService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class SolarInverterService {\n    public void execute() {\n        System.out.println(\"Solar Energy Grid tayanch xizmati\");\n    }\n}\n\nclass OnlineSolarInverterService extends SolarInverterService {\n    @Override\n    public void execute() {\n        System.out.println(\"Solar Energy Grid onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterService ref = new OnlineSolarInverterService();\n        ref.execute();\n    }\n}",
    "solution": "class SolarInverterService {\n    public void execute() {\n        System.out.println(\"Solar Energy Grid tayanch xizmati\");\n    }\n}\n\nclass OnlineSolarInverterService extends SolarInverterService {\n    @Override\n    public void execute() {\n        System.out.println(\"Solar Energy Grid onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterService ref = new OnlineSolarInverterService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "SolarInverterService ref = new OnlineSolarInverterService();\nref.execute();",
      "breakdown": [
        "<code>SolarInverterService ref = new OnlineSolarInverterService();</code>: Kompilyatsiya vaqtidagi tur SolarInverterService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineSolarInverterService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: Polimorfizm va Upcasting",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "30. O'zbekiston Temir Yo'llari — Polimorfik O'zgaruvchiga Biriktirish",
      "en": "30. O'zbekiston Temir Yo'llari — Subtype Polymorphic Upcasting"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'TrainRouteService' ota turdagi o'zgaruvchiga uning bolasi 'OnlineTrainRouteService' ob'yektini biriktiring ('TrainRouteService ref = new OnlineTrainRouteService();') va 'execute()' metodini chaqiring.",
      "en": "Demonstrate upcasting in O'zbekiston Temir Yo'llari: assign child 'OnlineTrainRouteService' to parent reference 'TrainRouteService'."
    },
    "requirements": {
      "classes": [
        "TrainRouteService",
        "OnlineTrainRouteService"
      ],
      "methods": [
        "execute"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class TrainRouteService {\n    public void execute() {\n        System.out.println(\"O'zbekiston Temir Yo'llari tayanch xizmati\");\n    }\n}\n\nclass OnlineTrainRouteService extends TrainRouteService {\n    @Override\n    public void execute() {\n        System.out.println(\"O'zbekiston Temir Yo'llari onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteService ref = new OnlineTrainRouteService();\n        ref.execute();\n    }\n}",
    "solution": "class TrainRouteService {\n    public void execute() {\n        System.out.println(\"O'zbekiston Temir Yo'llari tayanch xizmati\");\n    }\n}\n\nclass OnlineTrainRouteService extends TrainRouteService {\n    @Override\n    public void execute() {\n        System.out.println(\"O'zbekiston Temir Yo'llari onlayn xizmati\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteService ref = new OnlineTrainRouteService();\n        ref.execute();\n    }\n}",
    "detailedSolution": {
      "theory": "Polimorfizm (ko'p shakllilik) — bitta umumiy ota havola (reference) orqali turli avlod ob'yektlariga bir xil buyruq berish qobiliyatidir.",
      "theoryEn": "Subtype polymorphism allows treating specialized derived objects through a uniform supertype reference interface.",
      "cleanCode": "TrainRouteService ref = new OnlineTrainRouteService();\nref.execute();",
      "breakdown": [
        "<code>TrainRouteService ref = new OnlineTrainRouteService();</code>: Kompilyatsiya vaqtidagi tur TrainRouteService, lekin Heap xotiradagi haqiqiy ob'yekt OnlineTrainRouteService."
      ],
      "pitfalls": "Ota turdagi havola orqali faqat ota sinfda mavjud bo'lgan metodlarni to'g'ridan-to'g'ri chaqirish mumkin.",
      "cw2Tip": "CW2 da buyurtma hisoblagichiga qaysi tovar kelishidan qat'i nazar 'MenuItem item' deb qabul qilish aynan upcasting hisoblanadi."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "31. Uzum Market — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "31. Uzum Market — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Uzum Market da 'ProductHandler[]' massiviga ham 'StandardProductHandler', ham 'ExpressProductHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'ProductHandler' containing both 'StandardProductHandler' and 'ExpressProductHandler' instances."
    },
    "requirements": {
      "classes": [
        "ProductHandler",
        "StandardProductHandler",
        "ExpressProductHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ProductHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardProductHandler extends ProductHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Uzum Market: Standart\");\n    }\n}\n\nclass ExpressProductHandler extends ProductHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Uzum Market: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductHandler[] list = new ProductHandler[] { new StandardProductHandler(), new ExpressProductHandler() };\n        for (ProductHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class ProductHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardProductHandler extends ProductHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Uzum Market: Standart\");\n    }\n}\n\nclass ExpressProductHandler extends ProductHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Uzum Market: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductHandler[] list = new ProductHandler[] { new StandardProductHandler(), new ExpressProductHandler() };\n        for (ProductHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (ProductHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "32. Payme Wallet — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "32. Payme Wallet — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Payme Wallet da 'WalletUserHandler[]' massiviga ham 'StandardWalletUserHandler', ham 'ExpressWalletUserHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'WalletUserHandler' containing both 'StandardWalletUserHandler' and 'ExpressWalletUserHandler' instances."
    },
    "requirements": {
      "classes": [
        "WalletUserHandler",
        "StandardWalletUserHandler",
        "ExpressWalletUserHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class WalletUserHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardWalletUserHandler extends WalletUserHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Payme Wallet: Standart\");\n    }\n}\n\nclass ExpressWalletUserHandler extends WalletUserHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Payme Wallet: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserHandler[] list = new WalletUserHandler[] { new StandardWalletUserHandler(), new ExpressWalletUserHandler() };\n        for (WalletUserHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class WalletUserHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardWalletUserHandler extends WalletUserHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Payme Wallet: Standart\");\n    }\n}\n\nclass ExpressWalletUserHandler extends WalletUserHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Payme Wallet: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserHandler[] list = new WalletUserHandler[] { new StandardWalletUserHandler(), new ExpressWalletUserHandler() };\n        for (WalletUserHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (WalletUserHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "33. Yandex Go — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "33. Yandex Go — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Yandex Go da 'TaxiRideHandler[]' massiviga ham 'StandardTaxiRideHandler', ham 'ExpressTaxiRideHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'TaxiRideHandler' containing both 'StandardTaxiRideHandler' and 'ExpressTaxiRideHandler' instances."
    },
    "requirements": {
      "classes": [
        "TaxiRideHandler",
        "StandardTaxiRideHandler",
        "ExpressTaxiRideHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class TaxiRideHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardTaxiRideHandler extends TaxiRideHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Go: Standart\");\n    }\n}\n\nclass ExpressTaxiRideHandler extends TaxiRideHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Go: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideHandler[] list = new TaxiRideHandler[] { new StandardTaxiRideHandler(), new ExpressTaxiRideHandler() };\n        for (TaxiRideHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class TaxiRideHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardTaxiRideHandler extends TaxiRideHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Go: Standart\");\n    }\n}\n\nclass ExpressTaxiRideHandler extends TaxiRideHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Go: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideHandler[] list = new TaxiRideHandler[] { new StandardTaxiRideHandler(), new ExpressTaxiRideHandler() };\n        for (TaxiRideHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (TaxiRideHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "34. Korzinka Go — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "34. Korzinka Go — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Korzinka Go da 'LoyaltyCardHandler[]' massiviga ham 'StandardLoyaltyCardHandler', ham 'ExpressLoyaltyCardHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'LoyaltyCardHandler' containing both 'StandardLoyaltyCardHandler' and 'ExpressLoyaltyCardHandler' instances."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardHandler",
        "StandardLoyaltyCardHandler",
        "ExpressLoyaltyCardHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class LoyaltyCardHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardLoyaltyCardHandler extends LoyaltyCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Korzinka Go: Standart\");\n    }\n}\n\nclass ExpressLoyaltyCardHandler extends LoyaltyCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Korzinka Go: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardHandler[] list = new LoyaltyCardHandler[] { new StandardLoyaltyCardHandler(), new ExpressLoyaltyCardHandler() };\n        for (LoyaltyCardHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class LoyaltyCardHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardLoyaltyCardHandler extends LoyaltyCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Korzinka Go: Standart\");\n    }\n}\n\nclass ExpressLoyaltyCardHandler extends LoyaltyCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Korzinka Go: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardHandler[] list = new LoyaltyCardHandler[] { new StandardLoyaltyCardHandler(), new ExpressLoyaltyCardHandler() };\n        for (LoyaltyCardHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (LoyaltyCardHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "35. WIUT Portal — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "35. WIUT Portal — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "WIUT Portal da 'StudentHandler[]' massiviga ham 'StandardStudentHandler', ham 'ExpressStudentHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'StudentHandler' containing both 'StandardStudentHandler' and 'ExpressStudentHandler' instances."
    },
    "requirements": {
      "classes": [
        "StudentHandler",
        "StandardStudentHandler",
        "ExpressStudentHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class StudentHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardStudentHandler extends StudentHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"WIUT Portal: Standart\");\n    }\n}\n\nclass ExpressStudentHandler extends StudentHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"WIUT Portal: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentHandler[] list = new StudentHandler[] { new StandardStudentHandler(), new ExpressStudentHandler() };\n        for (StudentHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class StudentHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardStudentHandler extends StudentHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"WIUT Portal: Standart\");\n    }\n}\n\nclass ExpressStudentHandler extends StudentHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"WIUT Portal: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentHandler[] list = new StudentHandler[] { new StandardStudentHandler(), new ExpressStudentHandler() };\n        for (StudentHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (StudentHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "36. Click Pay — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "36. Click Pay — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Click Pay da 'PaymentTxnHandler[]' massiviga ham 'StandardPaymentTxnHandler', ham 'ExpressPaymentTxnHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'PaymentTxnHandler' containing both 'StandardPaymentTxnHandler' and 'ExpressPaymentTxnHandler' instances."
    },
    "requirements": {
      "classes": [
        "PaymentTxnHandler",
        "StandardPaymentTxnHandler",
        "ExpressPaymentTxnHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class PaymentTxnHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardPaymentTxnHandler extends PaymentTxnHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Click Pay: Standart\");\n    }\n}\n\nclass ExpressPaymentTxnHandler extends PaymentTxnHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Click Pay: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnHandler[] list = new PaymentTxnHandler[] { new StandardPaymentTxnHandler(), new ExpressPaymentTxnHandler() };\n        for (PaymentTxnHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class PaymentTxnHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardPaymentTxnHandler extends PaymentTxnHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Click Pay: Standart\");\n    }\n}\n\nclass ExpressPaymentTxnHandler extends PaymentTxnHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Click Pay: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnHandler[] list = new PaymentTxnHandler[] { new StandardPaymentTxnHandler(), new ExpressPaymentTxnHandler() };\n        for (PaymentTxnHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (PaymentTxnHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "37. Telegram Bot — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "37. Telegram Bot — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Telegram Bot da 'BotMessageHandler[]' massiviga ham 'StandardBotMessageHandler', ham 'ExpressBotMessageHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'BotMessageHandler' containing both 'StandardBotMessageHandler' and 'ExpressBotMessageHandler' instances."
    },
    "requirements": {
      "classes": [
        "BotMessageHandler",
        "StandardBotMessageHandler",
        "ExpressBotMessageHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BotMessageHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardBotMessageHandler extends BotMessageHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Telegram Bot: Standart\");\n    }\n}\n\nclass ExpressBotMessageHandler extends BotMessageHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Telegram Bot: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageHandler[] list = new BotMessageHandler[] { new StandardBotMessageHandler(), new ExpressBotMessageHandler() };\n        for (BotMessageHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class BotMessageHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardBotMessageHandler extends BotMessageHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Telegram Bot: Standart\");\n    }\n}\n\nclass ExpressBotMessageHandler extends BotMessageHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Telegram Bot: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageHandler[] list = new BotMessageHandler[] { new StandardBotMessageHandler(), new ExpressBotMessageHandler() };\n        for (BotMessageHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (BotMessageHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "38. UzAirways — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "38. UzAirways — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "UzAirways da 'FlightTicketHandler[]' massiviga ham 'StandardFlightTicketHandler', ham 'ExpressFlightTicketHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'FlightTicketHandler' containing both 'StandardFlightTicketHandler' and 'ExpressFlightTicketHandler' instances."
    },
    "requirements": {
      "classes": [
        "FlightTicketHandler",
        "StandardFlightTicketHandler",
        "ExpressFlightTicketHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class FlightTicketHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardFlightTicketHandler extends FlightTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"UzAirways: Standart\");\n    }\n}\n\nclass ExpressFlightTicketHandler extends FlightTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"UzAirways: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketHandler[] list = new FlightTicketHandler[] { new StandardFlightTicketHandler(), new ExpressFlightTicketHandler() };\n        for (FlightTicketHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class FlightTicketHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardFlightTicketHandler extends FlightTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"UzAirways: Standart\");\n    }\n}\n\nclass ExpressFlightTicketHandler extends FlightTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"UzAirways: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketHandler[] list = new FlightTicketHandler[] { new StandardFlightTicketHandler(), new ExpressFlightTicketHandler() };\n        for (FlightTicketHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (FlightTicketHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "39. IT Park Academy — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "39. IT Park Academy — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "IT Park Academy da 'BootcampCourseHandler[]' massiviga ham 'StandardBootcampCourseHandler', ham 'ExpressBootcampCourseHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'BootcampCourseHandler' containing both 'StandardBootcampCourseHandler' and 'ExpressBootcampCourseHandler' instances."
    },
    "requirements": {
      "classes": [
        "BootcampCourseHandler",
        "StandardBootcampCourseHandler",
        "ExpressBootcampCourseHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BootcampCourseHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardBootcampCourseHandler extends BootcampCourseHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"IT Park Academy: Standart\");\n    }\n}\n\nclass ExpressBootcampCourseHandler extends BootcampCourseHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"IT Park Academy: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseHandler[] list = new BootcampCourseHandler[] { new StandardBootcampCourseHandler(), new ExpressBootcampCourseHandler() };\n        for (BootcampCourseHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class BootcampCourseHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardBootcampCourseHandler extends BootcampCourseHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"IT Park Academy: Standart\");\n    }\n}\n\nclass ExpressBootcampCourseHandler extends BootcampCourseHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"IT Park Academy: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseHandler[] list = new BootcampCourseHandler[] { new StandardBootcampCourseHandler(), new ExpressBootcampCourseHandler() };\n        for (BootcampCourseHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (BootcampCourseHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "40. Anorbank — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "40. Anorbank — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Anorbank da 'DebitCardHandler[]' massiviga ham 'StandardDebitCardHandler', ham 'ExpressDebitCardHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'DebitCardHandler' containing both 'StandardDebitCardHandler' and 'ExpressDebitCardHandler' instances."
    },
    "requirements": {
      "classes": [
        "DebitCardHandler",
        "StandardDebitCardHandler",
        "ExpressDebitCardHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class DebitCardHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardDebitCardHandler extends DebitCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Anorbank: Standart\");\n    }\n}\n\nclass ExpressDebitCardHandler extends DebitCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Anorbank: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardHandler[] list = new DebitCardHandler[] { new StandardDebitCardHandler(), new ExpressDebitCardHandler() };\n        for (DebitCardHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class DebitCardHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardDebitCardHandler extends DebitCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Anorbank: Standart\");\n    }\n}\n\nclass ExpressDebitCardHandler extends DebitCardHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Anorbank: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardHandler[] list = new DebitCardHandler[] { new StandardDebitCardHandler(), new ExpressDebitCardHandler() };\n        for (DebitCardHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (DebitCardHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "41. Oson Apteka — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "41. Oson Apteka — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Oson Apteka da 'MedicineHandler[]' massiviga ham 'StandardMedicineHandler', ham 'ExpressMedicineHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'MedicineHandler' containing both 'StandardMedicineHandler' and 'ExpressMedicineHandler' instances."
    },
    "requirements": {
      "classes": [
        "MedicineHandler",
        "StandardMedicineHandler",
        "ExpressMedicineHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class MedicineHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardMedicineHandler extends MedicineHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Oson Apteka: Standart\");\n    }\n}\n\nclass ExpressMedicineHandler extends MedicineHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Oson Apteka: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineHandler[] list = new MedicineHandler[] { new StandardMedicineHandler(), new ExpressMedicineHandler() };\n        for (MedicineHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class MedicineHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardMedicineHandler extends MedicineHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Oson Apteka: Standart\");\n    }\n}\n\nclass ExpressMedicineHandler extends MedicineHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Oson Apteka: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineHandler[] list = new MedicineHandler[] { new StandardMedicineHandler(), new ExpressMedicineHandler() };\n        for (MedicineHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (MedicineHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "42. Evos FastFood — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "42. Evos FastFood — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Evos FastFood da 'FoodOrderHandler[]' massiviga ham 'StandardFoodOrderHandler', ham 'ExpressFoodOrderHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'FoodOrderHandler' containing both 'StandardFoodOrderHandler' and 'ExpressFoodOrderHandler' instances."
    },
    "requirements": {
      "classes": [
        "FoodOrderHandler",
        "StandardFoodOrderHandler",
        "ExpressFoodOrderHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class FoodOrderHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardFoodOrderHandler extends FoodOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Evos FastFood: Standart\");\n    }\n}\n\nclass ExpressFoodOrderHandler extends FoodOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Evos FastFood: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderHandler[] list = new FoodOrderHandler[] { new StandardFoodOrderHandler(), new ExpressFoodOrderHandler() };\n        for (FoodOrderHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class FoodOrderHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardFoodOrderHandler extends FoodOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Evos FastFood: Standart\");\n    }\n}\n\nclass ExpressFoodOrderHandler extends FoodOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Evos FastFood: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderHandler[] list = new FoodOrderHandler[] { new StandardFoodOrderHandler(), new ExpressFoodOrderHandler() };\n        for (FoodOrderHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (FoodOrderHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "43. Bellissimo Pizza — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "43. Bellissimo Pizza — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'PizzaOrderHandler[]' massiviga ham 'StandardPizzaOrderHandler', ham 'ExpressPizzaOrderHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'PizzaOrderHandler' containing both 'StandardPizzaOrderHandler' and 'ExpressPizzaOrderHandler' instances."
    },
    "requirements": {
      "classes": [
        "PizzaOrderHandler",
        "StandardPizzaOrderHandler",
        "ExpressPizzaOrderHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class PizzaOrderHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardPizzaOrderHandler extends PizzaOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Bellissimo Pizza: Standart\");\n    }\n}\n\nclass ExpressPizzaOrderHandler extends PizzaOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Bellissimo Pizza: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderHandler[] list = new PizzaOrderHandler[] { new StandardPizzaOrderHandler(), new ExpressPizzaOrderHandler() };\n        for (PizzaOrderHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class PizzaOrderHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardPizzaOrderHandler extends PizzaOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Bellissimo Pizza: Standart\");\n    }\n}\n\nclass ExpressPizzaOrderHandler extends PizzaOrderHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Bellissimo Pizza: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderHandler[] list = new PizzaOrderHandler[] { new StandardPizzaOrderHandler(), new ExpressPizzaOrderHandler() };\n        for (PizzaOrderHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (PizzaOrderHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "44. Milliy TV — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "44. Milliy TV — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Milliy TV da 'BroadcastShowHandler[]' massiviga ham 'StandardBroadcastShowHandler', ham 'ExpressBroadcastShowHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'BroadcastShowHandler' containing both 'StandardBroadcastShowHandler' and 'ExpressBroadcastShowHandler' instances."
    },
    "requirements": {
      "classes": [
        "BroadcastShowHandler",
        "StandardBroadcastShowHandler",
        "ExpressBroadcastShowHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class BroadcastShowHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardBroadcastShowHandler extends BroadcastShowHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Milliy TV: Standart\");\n    }\n}\n\nclass ExpressBroadcastShowHandler extends BroadcastShowHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Milliy TV: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowHandler[] list = new BroadcastShowHandler[] { new StandardBroadcastShowHandler(), new ExpressBroadcastShowHandler() };\n        for (BroadcastShowHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class BroadcastShowHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardBroadcastShowHandler extends BroadcastShowHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Milliy TV: Standart\");\n    }\n}\n\nclass ExpressBroadcastShowHandler extends BroadcastShowHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Milliy TV: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowHandler[] list = new BroadcastShowHandler[] { new StandardBroadcastShowHandler(), new ExpressBroadcastShowHandler() };\n        for (BroadcastShowHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (BroadcastShowHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "45. Spotify Sound — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "45. Spotify Sound — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Spotify Sound da 'AudioTrackHandler[]' massiviga ham 'StandardAudioTrackHandler', ham 'ExpressAudioTrackHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'AudioTrackHandler' containing both 'StandardAudioTrackHandler' and 'ExpressAudioTrackHandler' instances."
    },
    "requirements": {
      "classes": [
        "AudioTrackHandler",
        "StandardAudioTrackHandler",
        "ExpressAudioTrackHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class AudioTrackHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardAudioTrackHandler extends AudioTrackHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Spotify Sound: Standart\");\n    }\n}\n\nclass ExpressAudioTrackHandler extends AudioTrackHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Spotify Sound: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackHandler[] list = new AudioTrackHandler[] { new StandardAudioTrackHandler(), new ExpressAudioTrackHandler() };\n        for (AudioTrackHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class AudioTrackHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardAudioTrackHandler extends AudioTrackHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Spotify Sound: Standart\");\n    }\n}\n\nclass ExpressAudioTrackHandler extends AudioTrackHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Spotify Sound: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackHandler[] list = new AudioTrackHandler[] { new StandardAudioTrackHandler(), new ExpressAudioTrackHandler() };\n        for (AudioTrackHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (AudioTrackHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "46. Smart Thermostat — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "46. Smart Thermostat — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'ThermostatHandler[]' massiviga ham 'StandardThermostatHandler', ham 'ExpressThermostatHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'ThermostatHandler' containing both 'StandardThermostatHandler' and 'ExpressThermostatHandler' instances."
    },
    "requirements": {
      "classes": [
        "ThermostatHandler",
        "StandardThermostatHandler",
        "ExpressThermostatHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ThermostatHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardThermostatHandler extends ThermostatHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Thermostat: Standart\");\n    }\n}\n\nclass ExpressThermostatHandler extends ThermostatHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Thermostat: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatHandler[] list = new ThermostatHandler[] { new StandardThermostatHandler(), new ExpressThermostatHandler() };\n        for (ThermostatHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class ThermostatHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardThermostatHandler extends ThermostatHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Thermostat: Standart\");\n    }\n}\n\nclass ExpressThermostatHandler extends ThermostatHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Thermostat: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatHandler[] list = new ThermostatHandler[] { new StandardThermostatHandler(), new ExpressThermostatHandler() };\n        for (ThermostatHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (ThermostatHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "47. Drone Delivery — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "47. Drone Delivery — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Drone Delivery da 'DeliveryDroneHandler[]' massiviga ham 'StandardDeliveryDroneHandler', ham 'ExpressDeliveryDroneHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'DeliveryDroneHandler' containing both 'StandardDeliveryDroneHandler' and 'ExpressDeliveryDroneHandler' instances."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneHandler",
        "StandardDeliveryDroneHandler",
        "ExpressDeliveryDroneHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class DeliveryDroneHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardDeliveryDroneHandler extends DeliveryDroneHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Drone Delivery: Standart\");\n    }\n}\n\nclass ExpressDeliveryDroneHandler extends DeliveryDroneHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Drone Delivery: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneHandler[] list = new DeliveryDroneHandler[] { new StandardDeliveryDroneHandler(), new ExpressDeliveryDroneHandler() };\n        for (DeliveryDroneHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class DeliveryDroneHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardDeliveryDroneHandler extends DeliveryDroneHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Drone Delivery: Standart\");\n    }\n}\n\nclass ExpressDeliveryDroneHandler extends DeliveryDroneHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Drone Delivery: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneHandler[] list = new DeliveryDroneHandler[] { new StandardDeliveryDroneHandler(), new ExpressDeliveryDroneHandler() };\n        for (DeliveryDroneHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (DeliveryDroneHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "48. Smart Warehouse — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "48. Smart Warehouse — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'StorageBayHandler[]' massiviga ham 'StandardStorageBayHandler', ham 'ExpressStorageBayHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'StorageBayHandler' containing both 'StandardStorageBayHandler' and 'ExpressStorageBayHandler' instances."
    },
    "requirements": {
      "classes": [
        "StorageBayHandler",
        "StandardStorageBayHandler",
        "ExpressStorageBayHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class StorageBayHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardStorageBayHandler extends StorageBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Warehouse: Standart\");\n    }\n}\n\nclass ExpressStorageBayHandler extends StorageBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Warehouse: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayHandler[] list = new StorageBayHandler[] { new StandardStorageBayHandler(), new ExpressStorageBayHandler() };\n        for (StorageBayHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class StorageBayHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardStorageBayHandler extends StorageBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Warehouse: Standart\");\n    }\n}\n\nclass ExpressStorageBayHandler extends StorageBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Smart Warehouse: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayHandler[] list = new StorageBayHandler[] { new StandardStorageBayHandler(), new ExpressStorageBayHandler() };\n        for (StorageBayHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (StorageBayHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "49. Crypto Wallet — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "49. Crypto Wallet — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'CryptoAssetHandler[]' massiviga ham 'StandardCryptoAssetHandler', ham 'ExpressCryptoAssetHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'CryptoAssetHandler' containing both 'StandardCryptoAssetHandler' and 'ExpressCryptoAssetHandler' instances."
    },
    "requirements": {
      "classes": [
        "CryptoAssetHandler",
        "StandardCryptoAssetHandler",
        "ExpressCryptoAssetHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class CryptoAssetHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardCryptoAssetHandler extends CryptoAssetHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Crypto Wallet: Standart\");\n    }\n}\n\nclass ExpressCryptoAssetHandler extends CryptoAssetHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Crypto Wallet: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetHandler[] list = new CryptoAssetHandler[] { new StandardCryptoAssetHandler(), new ExpressCryptoAssetHandler() };\n        for (CryptoAssetHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class CryptoAssetHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardCryptoAssetHandler extends CryptoAssetHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Crypto Wallet: Standart\");\n    }\n}\n\nclass ExpressCryptoAssetHandler extends CryptoAssetHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Crypto Wallet: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetHandler[] list = new CryptoAssetHandler[] { new StandardCryptoAssetHandler(), new ExpressCryptoAssetHandler() };\n        for (CryptoAssetHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (CryptoAssetHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "50. National Library — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "50. National Library — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "National Library da 'CatalogBookHandler[]' massiviga ham 'StandardCatalogBookHandler', ham 'ExpressCatalogBookHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'CatalogBookHandler' containing both 'StandardCatalogBookHandler' and 'ExpressCatalogBookHandler' instances."
    },
    "requirements": {
      "classes": [
        "CatalogBookHandler",
        "StandardCatalogBookHandler",
        "ExpressCatalogBookHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class CatalogBookHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardCatalogBookHandler extends CatalogBookHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"National Library: Standart\");\n    }\n}\n\nclass ExpressCatalogBookHandler extends CatalogBookHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"National Library: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookHandler[] list = new CatalogBookHandler[] { new StandardCatalogBookHandler(), new ExpressCatalogBookHandler() };\n        for (CatalogBookHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class CatalogBookHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardCatalogBookHandler extends CatalogBookHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"National Library: Standart\");\n    }\n}\n\nclass ExpressCatalogBookHandler extends CatalogBookHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"National Library: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookHandler[] list = new CatalogBookHandler[] { new StandardCatalogBookHandler(), new ExpressCatalogBookHandler() };\n        for (CatalogBookHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (CatalogBookHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "51. BeFit Club — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "51. BeFit Club — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "BeFit Club da 'GymMemberHandler[]' massiviga ham 'StandardGymMemberHandler', ham 'ExpressGymMemberHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'GymMemberHandler' containing both 'StandardGymMemberHandler' and 'ExpressGymMemberHandler' instances."
    },
    "requirements": {
      "classes": [
        "GymMemberHandler",
        "StandardGymMemberHandler",
        "ExpressGymMemberHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class GymMemberHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardGymMemberHandler extends GymMemberHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"BeFit Club: Standart\");\n    }\n}\n\nclass ExpressGymMemberHandler extends GymMemberHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"BeFit Club: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberHandler[] list = new GymMemberHandler[] { new StandardGymMemberHandler(), new ExpressGymMemberHandler() };\n        for (GymMemberHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class GymMemberHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardGymMemberHandler extends GymMemberHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"BeFit Club: Standart\");\n    }\n}\n\nclass ExpressGymMemberHandler extends GymMemberHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"BeFit Club: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberHandler[] list = new GymMemberHandler[] { new StandardGymMemberHandler(), new ExpressGymMemberHandler() };\n        for (GymMemberHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (GymMemberHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "52. Tashkent Parking — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "52. Tashkent Parking — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'ParkingBayHandler[]' massiviga ham 'StandardParkingBayHandler', ham 'ExpressParkingBayHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'ParkingBayHandler' containing both 'StandardParkingBayHandler' and 'ExpressParkingBayHandler' instances."
    },
    "requirements": {
      "classes": [
        "ParkingBayHandler",
        "StandardParkingBayHandler",
        "ExpressParkingBayHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ParkingBayHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardParkingBayHandler extends ParkingBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Tashkent Parking: Standart\");\n    }\n}\n\nclass ExpressParkingBayHandler extends ParkingBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Tashkent Parking: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayHandler[] list = new ParkingBayHandler[] { new StandardParkingBayHandler(), new ExpressParkingBayHandler() };\n        for (ParkingBayHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class ParkingBayHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardParkingBayHandler extends ParkingBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Tashkent Parking: Standart\");\n    }\n}\n\nclass ExpressParkingBayHandler extends ParkingBayHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Tashkent Parking: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayHandler[] list = new ParkingBayHandler[] { new StandardParkingBayHandler(), new ExpressParkingBayHandler() };\n        for (ParkingBayHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (ParkingBayHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "53. Medion Clinic — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "53. Medion Clinic — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Medion Clinic da 'PatientRecordHandler[]' massiviga ham 'StandardPatientRecordHandler', ham 'ExpressPatientRecordHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'PatientRecordHandler' containing both 'StandardPatientRecordHandler' and 'ExpressPatientRecordHandler' instances."
    },
    "requirements": {
      "classes": [
        "PatientRecordHandler",
        "StandardPatientRecordHandler",
        "ExpressPatientRecordHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class PatientRecordHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardPatientRecordHandler extends PatientRecordHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Medion Clinic: Standart\");\n    }\n}\n\nclass ExpressPatientRecordHandler extends PatientRecordHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Medion Clinic: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordHandler[] list = new PatientRecordHandler[] { new StandardPatientRecordHandler(), new ExpressPatientRecordHandler() };\n        for (PatientRecordHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class PatientRecordHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardPatientRecordHandler extends PatientRecordHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Medion Clinic: Standart\");\n    }\n}\n\nclass ExpressPatientRecordHandler extends PatientRecordHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Medion Clinic: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordHandler[] list = new PatientRecordHandler[] { new StandardPatientRecordHandler(), new ExpressPatientRecordHandler() };\n        for (PatientRecordHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (PatientRecordHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "54. Hyatt Regency — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "54. Hyatt Regency — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'HotelReservationHandler[]' massiviga ham 'StandardHotelReservationHandler', ham 'ExpressHotelReservationHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'HotelReservationHandler' containing both 'StandardHotelReservationHandler' and 'ExpressHotelReservationHandler' instances."
    },
    "requirements": {
      "classes": [
        "HotelReservationHandler",
        "StandardHotelReservationHandler",
        "ExpressHotelReservationHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class HotelReservationHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardHotelReservationHandler extends HotelReservationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Hyatt Regency: Standart\");\n    }\n}\n\nclass ExpressHotelReservationHandler extends HotelReservationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Hyatt Regency: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationHandler[] list = new HotelReservationHandler[] { new StandardHotelReservationHandler(), new ExpressHotelReservationHandler() };\n        for (HotelReservationHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class HotelReservationHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardHotelReservationHandler extends HotelReservationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Hyatt Regency: Standart\");\n    }\n}\n\nclass ExpressHotelReservationHandler extends HotelReservationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Hyatt Regency: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationHandler[] list = new HotelReservationHandler[] { new StandardHotelReservationHandler(), new ExpressHotelReservationHandler() };\n        for (HotelReservationHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (HotelReservationHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "55. Premier Cinema — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "55. Premier Cinema — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Premier Cinema da 'CinemaTicketHandler[]' massiviga ham 'StandardCinemaTicketHandler', ham 'ExpressCinemaTicketHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'CinemaTicketHandler' containing both 'StandardCinemaTicketHandler' and 'ExpressCinemaTicketHandler' instances."
    },
    "requirements": {
      "classes": [
        "CinemaTicketHandler",
        "StandardCinemaTicketHandler",
        "ExpressCinemaTicketHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class CinemaTicketHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardCinemaTicketHandler extends CinemaTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Premier Cinema: Standart\");\n    }\n}\n\nclass ExpressCinemaTicketHandler extends CinemaTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Premier Cinema: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketHandler[] list = new CinemaTicketHandler[] { new StandardCinemaTicketHandler(), new ExpressCinemaTicketHandler() };\n        for (CinemaTicketHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class CinemaTicketHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardCinemaTicketHandler extends CinemaTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Premier Cinema: Standart\");\n    }\n}\n\nclass ExpressCinemaTicketHandler extends CinemaTicketHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Premier Cinema: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketHandler[] list = new CinemaTicketHandler[] { new StandardCinemaTicketHandler(), new ExpressCinemaTicketHandler() };\n        for (CinemaTicketHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (CinemaTicketHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "56. Yandex Scooter — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "56. Yandex Scooter — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'ElectricScooterHandler[]' massiviga ham 'StandardElectricScooterHandler', ham 'ExpressElectricScooterHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'ElectricScooterHandler' containing both 'StandardElectricScooterHandler' and 'ExpressElectricScooterHandler' instances."
    },
    "requirements": {
      "classes": [
        "ElectricScooterHandler",
        "StandardElectricScooterHandler",
        "ExpressElectricScooterHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class ElectricScooterHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardElectricScooterHandler extends ElectricScooterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Scooter: Standart\");\n    }\n}\n\nclass ExpressElectricScooterHandler extends ElectricScooterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Scooter: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterHandler[] list = new ElectricScooterHandler[] { new StandardElectricScooterHandler(), new ExpressElectricScooterHandler() };\n        for (ElectricScooterHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class ElectricScooterHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardElectricScooterHandler extends ElectricScooterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Scooter: Standart\");\n    }\n}\n\nclass ExpressElectricScooterHandler extends ElectricScooterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Yandex Scooter: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterHandler[] list = new ElectricScooterHandler[] { new StandardElectricScooterHandler(), new ExpressElectricScooterHandler() };\n        for (ElectricScooterHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (ElectricScooterHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "57. Weather Network — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "57. Weather Network — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Weather Network da 'MeteoStationHandler[]' massiviga ham 'StandardMeteoStationHandler', ham 'ExpressMeteoStationHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'MeteoStationHandler' containing both 'StandardMeteoStationHandler' and 'ExpressMeteoStationHandler' instances."
    },
    "requirements": {
      "classes": [
        "MeteoStationHandler",
        "StandardMeteoStationHandler",
        "ExpressMeteoStationHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class MeteoStationHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardMeteoStationHandler extends MeteoStationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Weather Network: Standart\");\n    }\n}\n\nclass ExpressMeteoStationHandler extends MeteoStationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Weather Network: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationHandler[] list = new MeteoStationHandler[] { new StandardMeteoStationHandler(), new ExpressMeteoStationHandler() };\n        for (MeteoStationHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class MeteoStationHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardMeteoStationHandler extends MeteoStationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Weather Network: Standart\");\n    }\n}\n\nclass ExpressMeteoStationHandler extends MeteoStationHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Weather Network: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationHandler[] list = new MeteoStationHandler[] { new StandardMeteoStationHandler(), new ExpressMeteoStationHandler() };\n        for (MeteoStationHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (MeteoStationHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "58. OpenMarket Auction — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "58. OpenMarket Auction — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'AuctionLotHandler[]' massiviga ham 'StandardAuctionLotHandler', ham 'ExpressAuctionLotHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'AuctionLotHandler' containing both 'StandardAuctionLotHandler' and 'ExpressAuctionLotHandler' instances."
    },
    "requirements": {
      "classes": [
        "AuctionLotHandler",
        "StandardAuctionLotHandler",
        "ExpressAuctionLotHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class AuctionLotHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardAuctionLotHandler extends AuctionLotHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"OpenMarket Auction: Standart\");\n    }\n}\n\nclass ExpressAuctionLotHandler extends AuctionLotHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"OpenMarket Auction: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotHandler[] list = new AuctionLotHandler[] { new StandardAuctionLotHandler(), new ExpressAuctionLotHandler() };\n        for (AuctionLotHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class AuctionLotHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardAuctionLotHandler extends AuctionLotHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"OpenMarket Auction: Standart\");\n    }\n}\n\nclass ExpressAuctionLotHandler extends AuctionLotHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"OpenMarket Auction: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotHandler[] list = new AuctionLotHandler[] { new StandardAuctionLotHandler(), new ExpressAuctionLotHandler() };\n        for (AuctionLotHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (AuctionLotHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "59. Solar Energy Grid — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "59. Solar Energy Grid — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'SolarInverterHandler[]' massiviga ham 'StandardSolarInverterHandler', ham 'ExpressSolarInverterHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'SolarInverterHandler' containing both 'StandardSolarInverterHandler' and 'ExpressSolarInverterHandler' instances."
    },
    "requirements": {
      "classes": [
        "SolarInverterHandler",
        "StandardSolarInverterHandler",
        "ExpressSolarInverterHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class SolarInverterHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardSolarInverterHandler extends SolarInverterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Solar Energy Grid: Standart\");\n    }\n}\n\nclass ExpressSolarInverterHandler extends SolarInverterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Solar Energy Grid: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterHandler[] list = new SolarInverterHandler[] { new StandardSolarInverterHandler(), new ExpressSolarInverterHandler() };\n        for (SolarInverterHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class SolarInverterHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardSolarInverterHandler extends SolarInverterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Solar Energy Grid: Standart\");\n    }\n}\n\nclass ExpressSolarInverterHandler extends SolarInverterHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"Solar Energy Grid: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterHandler[] list = new SolarInverterHandler[] { new StandardSolarInverterHandler(), new ExpressSolarInverterHandler() };\n        for (SolarInverterHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (SolarInverterHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: Geterogen Massiv va Dinamik Chaqiruv",
    "sector": "Amaliyot",
    "title": {
      "uz": "60. O'zbekiston Temir Yo'llari — Har Xil Turlarni Bitta Massivda Boshqarish",
      "en": "60. O'zbekiston Temir Yo'llari — Heterogeneous Polymorphic Array"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'TrainRouteHandler[]' massiviga ham 'StandardTrainRouteHandler', ham 'ExpressTrainRouteHandler' ob'yektlarini joylang va for tsikli orqali barchasining 'handle()' metodini dinamik chaqiring.",
      "en": "Loop through heterogeneous array of 'TrainRouteHandler' containing both 'StandardTrainRouteHandler' and 'ExpressTrainRouteHandler' instances."
    },
    "requirements": {
      "classes": [
        "TrainRouteHandler",
        "StandardTrainRouteHandler",
        "ExpressTrainRouteHandler"
      ],
      "methods": [
        "handle"
      ],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class TrainRouteHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardTrainRouteHandler extends TrainRouteHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Standart\");\n    }\n}\n\nclass ExpressTrainRouteHandler extends TrainRouteHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteHandler[] list = new TrainRouteHandler[] { new StandardTrainRouteHandler(), new ExpressTrainRouteHandler() };\n        for (TrainRouteHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "solution": "class TrainRouteHandler {\n    public void handle() {\n        System.out.println(\"Oddiy\");\n    }\n}\n\nclass StandardTrainRouteHandler extends TrainRouteHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Standart\");\n    }\n}\n\nclass ExpressTrainRouteHandler extends TrainRouteHandler {\n    @Override\n    public void handle() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: Tezkor\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteHandler[] list = new TrainRouteHandler[] { new StandardTrainRouteHandler(), new ExpressTrainRouteHandler() };\n        for (TrainRouteHandler h : list) {\n            h.handle();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Dinamik bog'lanish (Dynamic Method Dispatch) orqali JVM qaysi metodni ishga tushirishni kompilyatsiyada emas, dastur ishlab turgan paytda haqiqiy ob'yektga qarab hal qiladi.",
      "theoryEn": "Dynamic method dispatch resolves virtual method invocations at runtime based on the actual concrete heap object.",
      "cleanCode": "for (TrainRouteHandler h : list) { h.handle(); }",
      "breakdown": [
        "<code>h.handle()</code>: JVM har bir elementning haqiqiy turiga qarab to'g'ri metodni chaqiradi."
      ],
      "pitfalls": "Massiv ichida har xil sinflar bo'lsa ham, ularning barchasi umumiy ota sinfga ega bo'lishi shart.",
      "cw2Tip": "Savatchadagi barcha har xil tovarlarni (ichimlik, pitsa, shirinlik) bitta for tsiklida chop etishning asosi aynan shu!"
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "61. Uzum Market — 'AbstractProduct' Abstrakt Shabloni",
      "en": "61. Uzum Market — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Uzum Market tizimida 'abstract class AbstractProduct' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteProduct' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractProduct' with 'public abstract double calculateRate();' implemented by 'ConcreteProduct'."
    },
    "requirements": {
      "classes": [
        "AbstractProduct",
        "ConcreteProduct"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractProduct {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteProduct extends AbstractProduct {\n    public ConcreteProduct(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractProduct obj = new ConcreteProduct(\"Uzum Market Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractProduct {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteProduct extends AbstractProduct {\n    public ConcreteProduct(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractProduct obj = new ConcreteProduct(\"Uzum Market Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "62. Payme Wallet — 'AbstractWalletUser' Abstrakt Shabloni",
      "en": "62. Payme Wallet — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Payme Wallet tizimida 'abstract class AbstractWalletUser' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteWalletUser' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractWalletUser' with 'public abstract double calculateRate();' implemented by 'ConcreteWalletUser'."
    },
    "requirements": {
      "classes": [
        "AbstractWalletUser",
        "ConcreteWalletUser"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractWalletUser {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteWalletUser extends AbstractWalletUser {\n    public ConcreteWalletUser(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractWalletUser obj = new ConcreteWalletUser(\"Payme Wallet Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractWalletUser {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteWalletUser extends AbstractWalletUser {\n    public ConcreteWalletUser(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractWalletUser obj = new ConcreteWalletUser(\"Payme Wallet Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "63. Yandex Go — 'AbstractTaxiRide' Abstrakt Shabloni",
      "en": "63. Yandex Go — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Yandex Go tizimida 'abstract class AbstractTaxiRide' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteTaxiRide' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractTaxiRide' with 'public abstract double calculateRate();' implemented by 'ConcreteTaxiRide'."
    },
    "requirements": {
      "classes": [
        "AbstractTaxiRide",
        "ConcreteTaxiRide"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractTaxiRide {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteTaxiRide extends AbstractTaxiRide {\n    public ConcreteTaxiRide(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTaxiRide obj = new ConcreteTaxiRide(\"Yandex Go Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractTaxiRide {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteTaxiRide extends AbstractTaxiRide {\n    public ConcreteTaxiRide(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTaxiRide obj = new ConcreteTaxiRide(\"Yandex Go Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "64. Korzinka Go — 'AbstractLoyaltyCard' Abstrakt Shabloni",
      "en": "64. Korzinka Go — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Korzinka Go tizimida 'abstract class AbstractLoyaltyCard' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteLoyaltyCard' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractLoyaltyCard' with 'public abstract double calculateRate();' implemented by 'ConcreteLoyaltyCard'."
    },
    "requirements": {
      "classes": [
        "AbstractLoyaltyCard",
        "ConcreteLoyaltyCard"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractLoyaltyCard {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteLoyaltyCard extends AbstractLoyaltyCard {\n    public ConcreteLoyaltyCard(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractLoyaltyCard obj = new ConcreteLoyaltyCard(\"Korzinka Go Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractLoyaltyCard {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteLoyaltyCard extends AbstractLoyaltyCard {\n    public ConcreteLoyaltyCard(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractLoyaltyCard obj = new ConcreteLoyaltyCard(\"Korzinka Go Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "65. WIUT Portal — 'AbstractStudent' Abstrakt Shabloni",
      "en": "65. WIUT Portal — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "WIUT Portal tizimida 'abstract class AbstractStudent' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteStudent' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractStudent' with 'public abstract double calculateRate();' implemented by 'ConcreteStudent'."
    },
    "requirements": {
      "classes": [
        "AbstractStudent",
        "ConcreteStudent"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractStudent {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteStudent extends AbstractStudent {\n    public ConcreteStudent(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractStudent obj = new ConcreteStudent(\"WIUT Portal Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractStudent {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteStudent extends AbstractStudent {\n    public ConcreteStudent(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractStudent obj = new ConcreteStudent(\"WIUT Portal Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "66. Click Pay — 'AbstractPaymentTxn' Abstrakt Shabloni",
      "en": "66. Click Pay — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Click Pay tizimida 'abstract class AbstractPaymentTxn' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcretePaymentTxn' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractPaymentTxn' with 'public abstract double calculateRate();' implemented by 'ConcretePaymentTxn'."
    },
    "requirements": {
      "classes": [
        "AbstractPaymentTxn",
        "ConcretePaymentTxn"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractPaymentTxn {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcretePaymentTxn extends AbstractPaymentTxn {\n    public ConcretePaymentTxn(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPaymentTxn obj = new ConcretePaymentTxn(\"Click Pay Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractPaymentTxn {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcretePaymentTxn extends AbstractPaymentTxn {\n    public ConcretePaymentTxn(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPaymentTxn obj = new ConcretePaymentTxn(\"Click Pay Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "67. Telegram Bot — 'AbstractBotMessage' Abstrakt Shabloni",
      "en": "67. Telegram Bot — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Telegram Bot tizimida 'abstract class AbstractBotMessage' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteBotMessage' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractBotMessage' with 'public abstract double calculateRate();' implemented by 'ConcreteBotMessage'."
    },
    "requirements": {
      "classes": [
        "AbstractBotMessage",
        "ConcreteBotMessage"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractBotMessage {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteBotMessage extends AbstractBotMessage {\n    public ConcreteBotMessage(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractBotMessage obj = new ConcreteBotMessage(\"Telegram Bot Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractBotMessage {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteBotMessage extends AbstractBotMessage {\n    public ConcreteBotMessage(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractBotMessage obj = new ConcreteBotMessage(\"Telegram Bot Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "68. UzAirways — 'AbstractFlightTicket' Abstrakt Shabloni",
      "en": "68. UzAirways — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "UzAirways tizimida 'abstract class AbstractFlightTicket' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteFlightTicket' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractFlightTicket' with 'public abstract double calculateRate();' implemented by 'ConcreteFlightTicket'."
    },
    "requirements": {
      "classes": [
        "AbstractFlightTicket",
        "ConcreteFlightTicket"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractFlightTicket {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteFlightTicket extends AbstractFlightTicket {\n    public ConcreteFlightTicket(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractFlightTicket obj = new ConcreteFlightTicket(\"UzAirways Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractFlightTicket {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteFlightTicket extends AbstractFlightTicket {\n    public ConcreteFlightTicket(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractFlightTicket obj = new ConcreteFlightTicket(\"UzAirways Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "69. IT Park Academy — 'AbstractBootcampCourse' Abstrakt Shabloni",
      "en": "69. IT Park Academy — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "IT Park Academy tizimida 'abstract class AbstractBootcampCourse' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteBootcampCourse' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractBootcampCourse' with 'public abstract double calculateRate();' implemented by 'ConcreteBootcampCourse'."
    },
    "requirements": {
      "classes": [
        "AbstractBootcampCourse",
        "ConcreteBootcampCourse"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractBootcampCourse {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteBootcampCourse extends AbstractBootcampCourse {\n    public ConcreteBootcampCourse(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractBootcampCourse obj = new ConcreteBootcampCourse(\"IT Park Academy Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractBootcampCourse {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteBootcampCourse extends AbstractBootcampCourse {\n    public ConcreteBootcampCourse(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractBootcampCourse obj = new ConcreteBootcampCourse(\"IT Park Academy Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "70. Anorbank — 'AbstractDebitCard' Abstrakt Shabloni",
      "en": "70. Anorbank — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Anorbank tizimida 'abstract class AbstractDebitCard' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteDebitCard' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractDebitCard' with 'public abstract double calculateRate();' implemented by 'ConcreteDebitCard'."
    },
    "requirements": {
      "classes": [
        "AbstractDebitCard",
        "ConcreteDebitCard"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractDebitCard {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteDebitCard extends AbstractDebitCard {\n    public ConcreteDebitCard(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDebitCard obj = new ConcreteDebitCard(\"Anorbank Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractDebitCard {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteDebitCard extends AbstractDebitCard {\n    public ConcreteDebitCard(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDebitCard obj = new ConcreteDebitCard(\"Anorbank Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "71. Oson Apteka — 'AbstractMedicine' Abstrakt Shabloni",
      "en": "71. Oson Apteka — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Oson Apteka tizimida 'abstract class AbstractMedicine' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteMedicine' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractMedicine' with 'public abstract double calculateRate();' implemented by 'ConcreteMedicine'."
    },
    "requirements": {
      "classes": [
        "AbstractMedicine",
        "ConcreteMedicine"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractMedicine {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteMedicine extends AbstractMedicine {\n    public ConcreteMedicine(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractMedicine obj = new ConcreteMedicine(\"Oson Apteka Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractMedicine {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteMedicine extends AbstractMedicine {\n    public ConcreteMedicine(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractMedicine obj = new ConcreteMedicine(\"Oson Apteka Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "72. Evos FastFood — 'AbstractFoodOrder' Abstrakt Shabloni",
      "en": "72. Evos FastFood — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Evos FastFood tizimida 'abstract class AbstractFoodOrder' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteFoodOrder' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractFoodOrder' with 'public abstract double calculateRate();' implemented by 'ConcreteFoodOrder'."
    },
    "requirements": {
      "classes": [
        "AbstractFoodOrder",
        "ConcreteFoodOrder"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractFoodOrder {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteFoodOrder extends AbstractFoodOrder {\n    public ConcreteFoodOrder(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractFoodOrder obj = new ConcreteFoodOrder(\"Evos FastFood Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractFoodOrder {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteFoodOrder extends AbstractFoodOrder {\n    public ConcreteFoodOrder(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractFoodOrder obj = new ConcreteFoodOrder(\"Evos FastFood Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "73. Bellissimo Pizza — 'AbstractPizzaOrder' Abstrakt Shabloni",
      "en": "73. Bellissimo Pizza — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Bellissimo Pizza tizimida 'abstract class AbstractPizzaOrder' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcretePizzaOrder' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractPizzaOrder' with 'public abstract double calculateRate();' implemented by 'ConcretePizzaOrder'."
    },
    "requirements": {
      "classes": [
        "AbstractPizzaOrder",
        "ConcretePizzaOrder"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractPizzaOrder {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcretePizzaOrder extends AbstractPizzaOrder {\n    public ConcretePizzaOrder(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPizzaOrder obj = new ConcretePizzaOrder(\"Bellissimo Pizza Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractPizzaOrder {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcretePizzaOrder extends AbstractPizzaOrder {\n    public ConcretePizzaOrder(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPizzaOrder obj = new ConcretePizzaOrder(\"Bellissimo Pizza Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "74. Milliy TV — 'AbstractBroadcastShow' Abstrakt Shabloni",
      "en": "74. Milliy TV — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Milliy TV tizimida 'abstract class AbstractBroadcastShow' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteBroadcastShow' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractBroadcastShow' with 'public abstract double calculateRate();' implemented by 'ConcreteBroadcastShow'."
    },
    "requirements": {
      "classes": [
        "AbstractBroadcastShow",
        "ConcreteBroadcastShow"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractBroadcastShow {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteBroadcastShow extends AbstractBroadcastShow {\n    public ConcreteBroadcastShow(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractBroadcastShow obj = new ConcreteBroadcastShow(\"Milliy TV Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractBroadcastShow {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteBroadcastShow extends AbstractBroadcastShow {\n    public ConcreteBroadcastShow(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractBroadcastShow obj = new ConcreteBroadcastShow(\"Milliy TV Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "75. Spotify Sound — 'AbstractAudioTrack' Abstrakt Shabloni",
      "en": "75. Spotify Sound — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Spotify Sound tizimida 'abstract class AbstractAudioTrack' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteAudioTrack' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractAudioTrack' with 'public abstract double calculateRate();' implemented by 'ConcreteAudioTrack'."
    },
    "requirements": {
      "classes": [
        "AbstractAudioTrack",
        "ConcreteAudioTrack"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractAudioTrack {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteAudioTrack extends AbstractAudioTrack {\n    public ConcreteAudioTrack(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractAudioTrack obj = new ConcreteAudioTrack(\"Spotify Sound Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractAudioTrack {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteAudioTrack extends AbstractAudioTrack {\n    public ConcreteAudioTrack(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractAudioTrack obj = new ConcreteAudioTrack(\"Spotify Sound Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "76. Smart Thermostat — 'AbstractThermostat' Abstrakt Shabloni",
      "en": "76. Smart Thermostat — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Smart Thermostat tizimida 'abstract class AbstractThermostat' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteThermostat' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractThermostat' with 'public abstract double calculateRate();' implemented by 'ConcreteThermostat'."
    },
    "requirements": {
      "classes": [
        "AbstractThermostat",
        "ConcreteThermostat"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractThermostat {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteThermostat extends AbstractThermostat {\n    public ConcreteThermostat(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractThermostat obj = new ConcreteThermostat(\"Smart Thermostat Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractThermostat {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteThermostat extends AbstractThermostat {\n    public ConcreteThermostat(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractThermostat obj = new ConcreteThermostat(\"Smart Thermostat Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "77. Drone Delivery — 'AbstractDeliveryDrone' Abstrakt Shabloni",
      "en": "77. Drone Delivery — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Drone Delivery tizimida 'abstract class AbstractDeliveryDrone' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteDeliveryDrone' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractDeliveryDrone' with 'public abstract double calculateRate();' implemented by 'ConcreteDeliveryDrone'."
    },
    "requirements": {
      "classes": [
        "AbstractDeliveryDrone",
        "ConcreteDeliveryDrone"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractDeliveryDrone {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteDeliveryDrone extends AbstractDeliveryDrone {\n    public ConcreteDeliveryDrone(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDeliveryDrone obj = new ConcreteDeliveryDrone(\"Drone Delivery Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractDeliveryDrone {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteDeliveryDrone extends AbstractDeliveryDrone {\n    public ConcreteDeliveryDrone(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractDeliveryDrone obj = new ConcreteDeliveryDrone(\"Drone Delivery Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "78. Smart Warehouse — 'AbstractStorageBay' Abstrakt Shabloni",
      "en": "78. Smart Warehouse — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Smart Warehouse tizimida 'abstract class AbstractStorageBay' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteStorageBay' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractStorageBay' with 'public abstract double calculateRate();' implemented by 'ConcreteStorageBay'."
    },
    "requirements": {
      "classes": [
        "AbstractStorageBay",
        "ConcreteStorageBay"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractStorageBay {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteStorageBay extends AbstractStorageBay {\n    public ConcreteStorageBay(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractStorageBay obj = new ConcreteStorageBay(\"Smart Warehouse Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractStorageBay {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteStorageBay extends AbstractStorageBay {\n    public ConcreteStorageBay(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractStorageBay obj = new ConcreteStorageBay(\"Smart Warehouse Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "79. Crypto Wallet — 'AbstractCryptoAsset' Abstrakt Shabloni",
      "en": "79. Crypto Wallet — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Crypto Wallet tizimida 'abstract class AbstractCryptoAsset' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteCryptoAsset' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractCryptoAsset' with 'public abstract double calculateRate();' implemented by 'ConcreteCryptoAsset'."
    },
    "requirements": {
      "classes": [
        "AbstractCryptoAsset",
        "ConcreteCryptoAsset"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractCryptoAsset {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteCryptoAsset extends AbstractCryptoAsset {\n    public ConcreteCryptoAsset(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractCryptoAsset obj = new ConcreteCryptoAsset(\"Crypto Wallet Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractCryptoAsset {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteCryptoAsset extends AbstractCryptoAsset {\n    public ConcreteCryptoAsset(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractCryptoAsset obj = new ConcreteCryptoAsset(\"Crypto Wallet Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "80. National Library — 'AbstractCatalogBook' Abstrakt Shabloni",
      "en": "80. National Library — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "National Library tizimida 'abstract class AbstractCatalogBook' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteCatalogBook' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractCatalogBook' with 'public abstract double calculateRate();' implemented by 'ConcreteCatalogBook'."
    },
    "requirements": {
      "classes": [
        "AbstractCatalogBook",
        "ConcreteCatalogBook"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractCatalogBook {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteCatalogBook extends AbstractCatalogBook {\n    public ConcreteCatalogBook(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractCatalogBook obj = new ConcreteCatalogBook(\"National Library Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractCatalogBook {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteCatalogBook extends AbstractCatalogBook {\n    public ConcreteCatalogBook(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractCatalogBook obj = new ConcreteCatalogBook(\"National Library Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "81. BeFit Club — 'AbstractGymMember' Abstrakt Shabloni",
      "en": "81. BeFit Club — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "BeFit Club tizimida 'abstract class AbstractGymMember' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteGymMember' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractGymMember' with 'public abstract double calculateRate();' implemented by 'ConcreteGymMember'."
    },
    "requirements": {
      "classes": [
        "AbstractGymMember",
        "ConcreteGymMember"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractGymMember {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteGymMember extends AbstractGymMember {\n    public ConcreteGymMember(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractGymMember obj = new ConcreteGymMember(\"BeFit Club Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractGymMember {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteGymMember extends AbstractGymMember {\n    public ConcreteGymMember(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractGymMember obj = new ConcreteGymMember(\"BeFit Club Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "82. Tashkent Parking — 'AbstractParkingBay' Abstrakt Shabloni",
      "en": "82. Tashkent Parking — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Tashkent Parking tizimida 'abstract class AbstractParkingBay' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteParkingBay' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractParkingBay' with 'public abstract double calculateRate();' implemented by 'ConcreteParkingBay'."
    },
    "requirements": {
      "classes": [
        "AbstractParkingBay",
        "ConcreteParkingBay"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractParkingBay {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteParkingBay extends AbstractParkingBay {\n    public ConcreteParkingBay(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractParkingBay obj = new ConcreteParkingBay(\"Tashkent Parking Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractParkingBay {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteParkingBay extends AbstractParkingBay {\n    public ConcreteParkingBay(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractParkingBay obj = new ConcreteParkingBay(\"Tashkent Parking Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "83. Medion Clinic — 'AbstractPatientRecord' Abstrakt Shabloni",
      "en": "83. Medion Clinic — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Medion Clinic tizimida 'abstract class AbstractPatientRecord' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcretePatientRecord' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractPatientRecord' with 'public abstract double calculateRate();' implemented by 'ConcretePatientRecord'."
    },
    "requirements": {
      "classes": [
        "AbstractPatientRecord",
        "ConcretePatientRecord"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractPatientRecord {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcretePatientRecord extends AbstractPatientRecord {\n    public ConcretePatientRecord(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPatientRecord obj = new ConcretePatientRecord(\"Medion Clinic Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractPatientRecord {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcretePatientRecord extends AbstractPatientRecord {\n    public ConcretePatientRecord(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractPatientRecord obj = new ConcretePatientRecord(\"Medion Clinic Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "84. Hyatt Regency — 'AbstractHotelReservation' Abstrakt Shabloni",
      "en": "84. Hyatt Regency — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Hyatt Regency tizimida 'abstract class AbstractHotelReservation' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteHotelReservation' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractHotelReservation' with 'public abstract double calculateRate();' implemented by 'ConcreteHotelReservation'."
    },
    "requirements": {
      "classes": [
        "AbstractHotelReservation",
        "ConcreteHotelReservation"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractHotelReservation {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteHotelReservation extends AbstractHotelReservation {\n    public ConcreteHotelReservation(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractHotelReservation obj = new ConcreteHotelReservation(\"Hyatt Regency Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractHotelReservation {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteHotelReservation extends AbstractHotelReservation {\n    public ConcreteHotelReservation(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractHotelReservation obj = new ConcreteHotelReservation(\"Hyatt Regency Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "85. Premier Cinema — 'AbstractCinemaTicket' Abstrakt Shabloni",
      "en": "85. Premier Cinema — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Premier Cinema tizimida 'abstract class AbstractCinemaTicket' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteCinemaTicket' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractCinemaTicket' with 'public abstract double calculateRate();' implemented by 'ConcreteCinemaTicket'."
    },
    "requirements": {
      "classes": [
        "AbstractCinemaTicket",
        "ConcreteCinemaTicket"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractCinemaTicket {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteCinemaTicket extends AbstractCinemaTicket {\n    public ConcreteCinemaTicket(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractCinemaTicket obj = new ConcreteCinemaTicket(\"Premier Cinema Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractCinemaTicket {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteCinemaTicket extends AbstractCinemaTicket {\n    public ConcreteCinemaTicket(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractCinemaTicket obj = new ConcreteCinemaTicket(\"Premier Cinema Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "86. Yandex Scooter — 'AbstractElectricScooter' Abstrakt Shabloni",
      "en": "86. Yandex Scooter — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Yandex Scooter tizimida 'abstract class AbstractElectricScooter' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteElectricScooter' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractElectricScooter' with 'public abstract double calculateRate();' implemented by 'ConcreteElectricScooter'."
    },
    "requirements": {
      "classes": [
        "AbstractElectricScooter",
        "ConcreteElectricScooter"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractElectricScooter {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteElectricScooter extends AbstractElectricScooter {\n    public ConcreteElectricScooter(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractElectricScooter obj = new ConcreteElectricScooter(\"Yandex Scooter Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractElectricScooter {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteElectricScooter extends AbstractElectricScooter {\n    public ConcreteElectricScooter(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractElectricScooter obj = new ConcreteElectricScooter(\"Yandex Scooter Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "87. Weather Network — 'AbstractMeteoStation' Abstrakt Shabloni",
      "en": "87. Weather Network — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Weather Network tizimida 'abstract class AbstractMeteoStation' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteMeteoStation' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractMeteoStation' with 'public abstract double calculateRate();' implemented by 'ConcreteMeteoStation'."
    },
    "requirements": {
      "classes": [
        "AbstractMeteoStation",
        "ConcreteMeteoStation"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractMeteoStation {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteMeteoStation extends AbstractMeteoStation {\n    public ConcreteMeteoStation(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractMeteoStation obj = new ConcreteMeteoStation(\"Weather Network Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractMeteoStation {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteMeteoStation extends AbstractMeteoStation {\n    public ConcreteMeteoStation(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractMeteoStation obj = new ConcreteMeteoStation(\"Weather Network Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "88. OpenMarket Auction — 'AbstractAuctionLot' Abstrakt Shabloni",
      "en": "88. OpenMarket Auction — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "OpenMarket Auction tizimida 'abstract class AbstractAuctionLot' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteAuctionLot' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractAuctionLot' with 'public abstract double calculateRate();' implemented by 'ConcreteAuctionLot'."
    },
    "requirements": {
      "classes": [
        "AbstractAuctionLot",
        "ConcreteAuctionLot"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractAuctionLot {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteAuctionLot extends AbstractAuctionLot {\n    public ConcreteAuctionLot(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractAuctionLot obj = new ConcreteAuctionLot(\"OpenMarket Auction Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractAuctionLot {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteAuctionLot extends AbstractAuctionLot {\n    public ConcreteAuctionLot(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractAuctionLot obj = new ConcreteAuctionLot(\"OpenMarket Auction Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "89. Solar Energy Grid — 'AbstractSolarInverter' Abstrakt Shabloni",
      "en": "89. Solar Energy Grid — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "Solar Energy Grid tizimida 'abstract class AbstractSolarInverter' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteSolarInverter' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractSolarInverter' with 'public abstract double calculateRate();' implemented by 'ConcreteSolarInverter'."
    },
    "requirements": {
      "classes": [
        "AbstractSolarInverter",
        "ConcreteSolarInverter"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractSolarInverter {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteSolarInverter extends AbstractSolarInverter {\n    public ConcreteSolarInverter(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractSolarInverter obj = new ConcreteSolarInverter(\"Solar Energy Grid Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractSolarInverter {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteSolarInverter extends AbstractSolarInverter {\n    public ConcreteSolarInverter(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractSolarInverter obj = new ConcreteSolarInverter(\"Solar Energy Grid Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Abstrakt Sinflar va Metodlar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "90. O'zbekiston Temir Yo'llari — 'AbstractTrainRoute' Abstrakt Shabloni",
      "en": "90. O'zbekiston Temir Yo'llari — Abstract Class & Abstract Contract"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari tizimida 'abstract class AbstractTrainRoute' yarating va unga tanasiz 'public abstract double calculateRate();' metodini qo'shing. Uni 'ConcreteTrainRoute' klassida to'liq amalga oshiring.",
      "en": "Declare 'abstract class AbstractTrainRoute' with 'public abstract double calculateRate();' implemented by 'ConcreteTrainRoute'."
    },
    "requirements": {
      "classes": [
        "AbstractTrainRoute",
        "ConcreteTrainRoute"
      ],
      "methods": [
        "calculateRate"
      ],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "starterCode": "abstract class AbstractTrainRoute {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteTrainRoute extends AbstractTrainRoute {\n    public ConcreteTrainRoute(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTrainRoute obj = new ConcreteTrainRoute(\"O'zbekiston Temir Yo'llari Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "solution": "abstract class AbstractTrainRoute {\n    public String name;\n    public abstract double calculateRate();\n}\n\nclass ConcreteTrainRoute extends AbstractTrainRoute {\n    public ConcreteTrainRoute(String name) {\n        this.name = name;\n    }\n\n    @Override\n    public double calculateRate() {\n        return 88.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AbstractTrainRoute obj = new ConcreteTrainRoute(\"O'zbekiston Temir Yo'llari Maxsus\");\n        System.out.println(obj.name + \" tarifi: $\" + obj.calculateRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Abstrakt sinfdan to'g'ridan-to'g'ri 'new' orqali ob'yekt yaratib bo'lmaydi. U o'zida ham tayyor kodlarni (maydonlar, oddiy metodlar), ham bolalari majburan yozishi shart bo'lgan qoidalarni (abstrakt metodlar) birlashtiradi.",
      "theoryEn": "Abstract classes cannot be directly instantiated, providing both reusable concrete state and mandatory abstract method contracts.",
      "cleanCode": "public abstract double calculateRate();",
      "breakdown": [
        "<code>abstract class</code>: Shartnoma va umumiy asos vazifasini o'taydi."
      ],
      "pitfalls": "Agar avlod sinf ota abstrakt metodni yozmasa, u ham avtomatik ravishda abstrakt bo'lib qoladi.",
      "cw2Tip": "CW2 da asosiy tovar sinfi (abstract class MenuItem) abstrakt qilinishi shart!"
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "91. Uzum Market — Turni Tekshirish va Downcasting",
      "en": "91. Uzum Market — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Uzum Market da umumiy 'ProductBase' turidagi ob'yekt aynan 'ProductPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof ProductPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "ProductBase",
        "ProductPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class ProductBase {}\n\nclass ProductPremium extends ProductBase {\n    public void applyVipBonus() {\n        System.out.println(\"Uzum Market: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductBase obj = new ProductPremium();\n        if (obj instanceof ProductPremium) {\n            ProductPremium downcasted = (ProductPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class ProductBase {}\n\nclass ProductPremium extends ProductBase {\n    public void applyVipBonus() {\n        System.out.println(\"Uzum Market: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductBase obj = new ProductPremium();\n        if (obj instanceof ProductPremium) {\n            ProductPremium downcasted = (ProductPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof ProductPremium) {\n    ProductPremium downcasted = (ProductPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof ProductPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "92. Payme Wallet — Turni Tekshirish va Downcasting",
      "en": "92. Payme Wallet — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Payme Wallet da umumiy 'WalletUserBase' turidagi ob'yekt aynan 'WalletUserPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof WalletUserPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "WalletUserBase",
        "WalletUserPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class WalletUserBase {}\n\nclass WalletUserPremium extends WalletUserBase {\n    public void applyVipBonus() {\n        System.out.println(\"Payme Wallet: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserBase obj = new WalletUserPremium();\n        if (obj instanceof WalletUserPremium) {\n            WalletUserPremium downcasted = (WalletUserPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class WalletUserBase {}\n\nclass WalletUserPremium extends WalletUserBase {\n    public void applyVipBonus() {\n        System.out.println(\"Payme Wallet: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserBase obj = new WalletUserPremium();\n        if (obj instanceof WalletUserPremium) {\n            WalletUserPremium downcasted = (WalletUserPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof WalletUserPremium) {\n    WalletUserPremium downcasted = (WalletUserPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof WalletUserPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "93. Yandex Go — Turni Tekshirish va Downcasting",
      "en": "93. Yandex Go — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Yandex Go da umumiy 'TaxiRideBase' turidagi ob'yekt aynan 'TaxiRidePremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof TaxiRidePremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "TaxiRideBase",
        "TaxiRidePremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class TaxiRideBase {}\n\nclass TaxiRidePremium extends TaxiRideBase {\n    public void applyVipBonus() {\n        System.out.println(\"Yandex Go: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideBase obj = new TaxiRidePremium();\n        if (obj instanceof TaxiRidePremium) {\n            TaxiRidePremium downcasted = (TaxiRidePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class TaxiRideBase {}\n\nclass TaxiRidePremium extends TaxiRideBase {\n    public void applyVipBonus() {\n        System.out.println(\"Yandex Go: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideBase obj = new TaxiRidePremium();\n        if (obj instanceof TaxiRidePremium) {\n            TaxiRidePremium downcasted = (TaxiRidePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof TaxiRidePremium) {\n    TaxiRidePremium downcasted = (TaxiRidePremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof TaxiRidePremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "94. Korzinka Go — Turni Tekshirish va Downcasting",
      "en": "94. Korzinka Go — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Korzinka Go da umumiy 'LoyaltyCardBase' turidagi ob'yekt aynan 'LoyaltyCardPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof LoyaltyCardPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardBase",
        "LoyaltyCardPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class LoyaltyCardBase {}\n\nclass LoyaltyCardPremium extends LoyaltyCardBase {\n    public void applyVipBonus() {\n        System.out.println(\"Korzinka Go: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardBase obj = new LoyaltyCardPremium();\n        if (obj instanceof LoyaltyCardPremium) {\n            LoyaltyCardPremium downcasted = (LoyaltyCardPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class LoyaltyCardBase {}\n\nclass LoyaltyCardPremium extends LoyaltyCardBase {\n    public void applyVipBonus() {\n        System.out.println(\"Korzinka Go: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardBase obj = new LoyaltyCardPremium();\n        if (obj instanceof LoyaltyCardPremium) {\n            LoyaltyCardPremium downcasted = (LoyaltyCardPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof LoyaltyCardPremium) {\n    LoyaltyCardPremium downcasted = (LoyaltyCardPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof LoyaltyCardPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "95. WIUT Portal — Turni Tekshirish va Downcasting",
      "en": "95. WIUT Portal — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "WIUT Portal da umumiy 'StudentBase' turidagi ob'yekt aynan 'StudentPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof StudentPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "StudentBase",
        "StudentPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class StudentBase {}\n\nclass StudentPremium extends StudentBase {\n    public void applyVipBonus() {\n        System.out.println(\"WIUT Portal: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentBase obj = new StudentPremium();\n        if (obj instanceof StudentPremium) {\n            StudentPremium downcasted = (StudentPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class StudentBase {}\n\nclass StudentPremium extends StudentBase {\n    public void applyVipBonus() {\n        System.out.println(\"WIUT Portal: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentBase obj = new StudentPremium();\n        if (obj instanceof StudentPremium) {\n            StudentPremium downcasted = (StudentPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof StudentPremium) {\n    StudentPremium downcasted = (StudentPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof StudentPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "96. Click Pay — Turni Tekshirish va Downcasting",
      "en": "96. Click Pay — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Click Pay da umumiy 'PaymentTxnBase' turidagi ob'yekt aynan 'PaymentTxnPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof PaymentTxnPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "PaymentTxnBase",
        "PaymentTxnPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class PaymentTxnBase {}\n\nclass PaymentTxnPremium extends PaymentTxnBase {\n    public void applyVipBonus() {\n        System.out.println(\"Click Pay: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnBase obj = new PaymentTxnPremium();\n        if (obj instanceof PaymentTxnPremium) {\n            PaymentTxnPremium downcasted = (PaymentTxnPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class PaymentTxnBase {}\n\nclass PaymentTxnPremium extends PaymentTxnBase {\n    public void applyVipBonus() {\n        System.out.println(\"Click Pay: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnBase obj = new PaymentTxnPremium();\n        if (obj instanceof PaymentTxnPremium) {\n            PaymentTxnPremium downcasted = (PaymentTxnPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof PaymentTxnPremium) {\n    PaymentTxnPremium downcasted = (PaymentTxnPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof PaymentTxnPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "97. Telegram Bot — Turni Tekshirish va Downcasting",
      "en": "97. Telegram Bot — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Telegram Bot da umumiy 'BotMessageBase' turidagi ob'yekt aynan 'BotMessagePremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof BotMessagePremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "BotMessageBase",
        "BotMessagePremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class BotMessageBase {}\n\nclass BotMessagePremium extends BotMessageBase {\n    public void applyVipBonus() {\n        System.out.println(\"Telegram Bot: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageBase obj = new BotMessagePremium();\n        if (obj instanceof BotMessagePremium) {\n            BotMessagePremium downcasted = (BotMessagePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class BotMessageBase {}\n\nclass BotMessagePremium extends BotMessageBase {\n    public void applyVipBonus() {\n        System.out.println(\"Telegram Bot: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageBase obj = new BotMessagePremium();\n        if (obj instanceof BotMessagePremium) {\n            BotMessagePremium downcasted = (BotMessagePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof BotMessagePremium) {\n    BotMessagePremium downcasted = (BotMessagePremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof BotMessagePremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "98. UzAirways — Turni Tekshirish va Downcasting",
      "en": "98. UzAirways — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "UzAirways da umumiy 'FlightTicketBase' turidagi ob'yekt aynan 'FlightTicketPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof FlightTicketPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "FlightTicketBase",
        "FlightTicketPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class FlightTicketBase {}\n\nclass FlightTicketPremium extends FlightTicketBase {\n    public void applyVipBonus() {\n        System.out.println(\"UzAirways: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketBase obj = new FlightTicketPremium();\n        if (obj instanceof FlightTicketPremium) {\n            FlightTicketPremium downcasted = (FlightTicketPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class FlightTicketBase {}\n\nclass FlightTicketPremium extends FlightTicketBase {\n    public void applyVipBonus() {\n        System.out.println(\"UzAirways: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketBase obj = new FlightTicketPremium();\n        if (obj instanceof FlightTicketPremium) {\n            FlightTicketPremium downcasted = (FlightTicketPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof FlightTicketPremium) {\n    FlightTicketPremium downcasted = (FlightTicketPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof FlightTicketPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "99. IT Park Academy — Turni Tekshirish va Downcasting",
      "en": "99. IT Park Academy — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "IT Park Academy da umumiy 'BootcampCourseBase' turidagi ob'yekt aynan 'BootcampCoursePremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof BootcampCoursePremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "BootcampCourseBase",
        "BootcampCoursePremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class BootcampCourseBase {}\n\nclass BootcampCoursePremium extends BootcampCourseBase {\n    public void applyVipBonus() {\n        System.out.println(\"IT Park Academy: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseBase obj = new BootcampCoursePremium();\n        if (obj instanceof BootcampCoursePremium) {\n            BootcampCoursePremium downcasted = (BootcampCoursePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class BootcampCourseBase {}\n\nclass BootcampCoursePremium extends BootcampCourseBase {\n    public void applyVipBonus() {\n        System.out.println(\"IT Park Academy: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseBase obj = new BootcampCoursePremium();\n        if (obj instanceof BootcampCoursePremium) {\n            BootcampCoursePremium downcasted = (BootcampCoursePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof BootcampCoursePremium) {\n    BootcampCoursePremium downcasted = (BootcampCoursePremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof BootcampCoursePremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "100. Anorbank — Turni Tekshirish va Downcasting",
      "en": "100. Anorbank — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Anorbank da umumiy 'DebitCardBase' turidagi ob'yekt aynan 'DebitCardPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof DebitCardPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "DebitCardBase",
        "DebitCardPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class DebitCardBase {}\n\nclass DebitCardPremium extends DebitCardBase {\n    public void applyVipBonus() {\n        System.out.println(\"Anorbank: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardBase obj = new DebitCardPremium();\n        if (obj instanceof DebitCardPremium) {\n            DebitCardPremium downcasted = (DebitCardPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class DebitCardBase {}\n\nclass DebitCardPremium extends DebitCardBase {\n    public void applyVipBonus() {\n        System.out.println(\"Anorbank: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardBase obj = new DebitCardPremium();\n        if (obj instanceof DebitCardPremium) {\n            DebitCardPremium downcasted = (DebitCardPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof DebitCardPremium) {\n    DebitCardPremium downcasted = (DebitCardPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof DebitCardPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "101. Oson Apteka — Turni Tekshirish va Downcasting",
      "en": "101. Oson Apteka — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Oson Apteka da umumiy 'MedicineBase' turidagi ob'yekt aynan 'MedicinePremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof MedicinePremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "MedicineBase",
        "MedicinePremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class MedicineBase {}\n\nclass MedicinePremium extends MedicineBase {\n    public void applyVipBonus() {\n        System.out.println(\"Oson Apteka: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineBase obj = new MedicinePremium();\n        if (obj instanceof MedicinePremium) {\n            MedicinePremium downcasted = (MedicinePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class MedicineBase {}\n\nclass MedicinePremium extends MedicineBase {\n    public void applyVipBonus() {\n        System.out.println(\"Oson Apteka: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineBase obj = new MedicinePremium();\n        if (obj instanceof MedicinePremium) {\n            MedicinePremium downcasted = (MedicinePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof MedicinePremium) {\n    MedicinePremium downcasted = (MedicinePremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof MedicinePremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "102. Evos FastFood — Turni Tekshirish va Downcasting",
      "en": "102. Evos FastFood — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Evos FastFood da umumiy 'FoodOrderBase' turidagi ob'yekt aynan 'FoodOrderPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof FoodOrderPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "FoodOrderBase",
        "FoodOrderPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class FoodOrderBase {}\n\nclass FoodOrderPremium extends FoodOrderBase {\n    public void applyVipBonus() {\n        System.out.println(\"Evos FastFood: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderBase obj = new FoodOrderPremium();\n        if (obj instanceof FoodOrderPremium) {\n            FoodOrderPremium downcasted = (FoodOrderPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class FoodOrderBase {}\n\nclass FoodOrderPremium extends FoodOrderBase {\n    public void applyVipBonus() {\n        System.out.println(\"Evos FastFood: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderBase obj = new FoodOrderPremium();\n        if (obj instanceof FoodOrderPremium) {\n            FoodOrderPremium downcasted = (FoodOrderPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof FoodOrderPremium) {\n    FoodOrderPremium downcasted = (FoodOrderPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof FoodOrderPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "103. Bellissimo Pizza — Turni Tekshirish va Downcasting",
      "en": "103. Bellissimo Pizza — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da umumiy 'PizzaOrderBase' turidagi ob'yekt aynan 'PizzaOrderPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof PizzaOrderPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "PizzaOrderBase",
        "PizzaOrderPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class PizzaOrderBase {}\n\nclass PizzaOrderPremium extends PizzaOrderBase {\n    public void applyVipBonus() {\n        System.out.println(\"Bellissimo Pizza: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderBase obj = new PizzaOrderPremium();\n        if (obj instanceof PizzaOrderPremium) {\n            PizzaOrderPremium downcasted = (PizzaOrderPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class PizzaOrderBase {}\n\nclass PizzaOrderPremium extends PizzaOrderBase {\n    public void applyVipBonus() {\n        System.out.println(\"Bellissimo Pizza: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderBase obj = new PizzaOrderPremium();\n        if (obj instanceof PizzaOrderPremium) {\n            PizzaOrderPremium downcasted = (PizzaOrderPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof PizzaOrderPremium) {\n    PizzaOrderPremium downcasted = (PizzaOrderPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof PizzaOrderPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "104. Milliy TV — Turni Tekshirish va Downcasting",
      "en": "104. Milliy TV — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Milliy TV da umumiy 'BroadcastShowBase' turidagi ob'yekt aynan 'BroadcastShowPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof BroadcastShowPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "BroadcastShowBase",
        "BroadcastShowPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class BroadcastShowBase {}\n\nclass BroadcastShowPremium extends BroadcastShowBase {\n    public void applyVipBonus() {\n        System.out.println(\"Milliy TV: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowBase obj = new BroadcastShowPremium();\n        if (obj instanceof BroadcastShowPremium) {\n            BroadcastShowPremium downcasted = (BroadcastShowPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class BroadcastShowBase {}\n\nclass BroadcastShowPremium extends BroadcastShowBase {\n    public void applyVipBonus() {\n        System.out.println(\"Milliy TV: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowBase obj = new BroadcastShowPremium();\n        if (obj instanceof BroadcastShowPremium) {\n            BroadcastShowPremium downcasted = (BroadcastShowPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof BroadcastShowPremium) {\n    BroadcastShowPremium downcasted = (BroadcastShowPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof BroadcastShowPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "105. Spotify Sound — Turni Tekshirish va Downcasting",
      "en": "105. Spotify Sound — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Spotify Sound da umumiy 'AudioTrackBase' turidagi ob'yekt aynan 'AudioTrackPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof AudioTrackPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "AudioTrackBase",
        "AudioTrackPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class AudioTrackBase {}\n\nclass AudioTrackPremium extends AudioTrackBase {\n    public void applyVipBonus() {\n        System.out.println(\"Spotify Sound: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackBase obj = new AudioTrackPremium();\n        if (obj instanceof AudioTrackPremium) {\n            AudioTrackPremium downcasted = (AudioTrackPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class AudioTrackBase {}\n\nclass AudioTrackPremium extends AudioTrackBase {\n    public void applyVipBonus() {\n        System.out.println(\"Spotify Sound: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackBase obj = new AudioTrackPremium();\n        if (obj instanceof AudioTrackPremium) {\n            AudioTrackPremium downcasted = (AudioTrackPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof AudioTrackPremium) {\n    AudioTrackPremium downcasted = (AudioTrackPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof AudioTrackPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "106. Smart Thermostat — Turni Tekshirish va Downcasting",
      "en": "106. Smart Thermostat — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Smart Thermostat da umumiy 'ThermostatBase' turidagi ob'yekt aynan 'ThermostatPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof ThermostatPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "ThermostatBase",
        "ThermostatPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class ThermostatBase {}\n\nclass ThermostatPremium extends ThermostatBase {\n    public void applyVipBonus() {\n        System.out.println(\"Smart Thermostat: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatBase obj = new ThermostatPremium();\n        if (obj instanceof ThermostatPremium) {\n            ThermostatPremium downcasted = (ThermostatPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class ThermostatBase {}\n\nclass ThermostatPremium extends ThermostatBase {\n    public void applyVipBonus() {\n        System.out.println(\"Smart Thermostat: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatBase obj = new ThermostatPremium();\n        if (obj instanceof ThermostatPremium) {\n            ThermostatPremium downcasted = (ThermostatPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof ThermostatPremium) {\n    ThermostatPremium downcasted = (ThermostatPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof ThermostatPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "107. Drone Delivery — Turni Tekshirish va Downcasting",
      "en": "107. Drone Delivery — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Drone Delivery da umumiy 'DeliveryDroneBase' turidagi ob'yekt aynan 'DeliveryDronePremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof DeliveryDronePremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneBase",
        "DeliveryDronePremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class DeliveryDroneBase {}\n\nclass DeliveryDronePremium extends DeliveryDroneBase {\n    public void applyVipBonus() {\n        System.out.println(\"Drone Delivery: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneBase obj = new DeliveryDronePremium();\n        if (obj instanceof DeliveryDronePremium) {\n            DeliveryDronePremium downcasted = (DeliveryDronePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class DeliveryDroneBase {}\n\nclass DeliveryDronePremium extends DeliveryDroneBase {\n    public void applyVipBonus() {\n        System.out.println(\"Drone Delivery: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneBase obj = new DeliveryDronePremium();\n        if (obj instanceof DeliveryDronePremium) {\n            DeliveryDronePremium downcasted = (DeliveryDronePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof DeliveryDronePremium) {\n    DeliveryDronePremium downcasted = (DeliveryDronePremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof DeliveryDronePremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "108. Smart Warehouse — Turni Tekshirish va Downcasting",
      "en": "108. Smart Warehouse — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Smart Warehouse da umumiy 'StorageBayBase' turidagi ob'yekt aynan 'StorageBayPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof StorageBayPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "StorageBayBase",
        "StorageBayPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class StorageBayBase {}\n\nclass StorageBayPremium extends StorageBayBase {\n    public void applyVipBonus() {\n        System.out.println(\"Smart Warehouse: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayBase obj = new StorageBayPremium();\n        if (obj instanceof StorageBayPremium) {\n            StorageBayPremium downcasted = (StorageBayPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class StorageBayBase {}\n\nclass StorageBayPremium extends StorageBayBase {\n    public void applyVipBonus() {\n        System.out.println(\"Smart Warehouse: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayBase obj = new StorageBayPremium();\n        if (obj instanceof StorageBayPremium) {\n            StorageBayPremium downcasted = (StorageBayPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof StorageBayPremium) {\n    StorageBayPremium downcasted = (StorageBayPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof StorageBayPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "109. Crypto Wallet — Turni Tekshirish va Downcasting",
      "en": "109. Crypto Wallet — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Crypto Wallet da umumiy 'CryptoAssetBase' turidagi ob'yekt aynan 'CryptoAssetPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof CryptoAssetPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "CryptoAssetBase",
        "CryptoAssetPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class CryptoAssetBase {}\n\nclass CryptoAssetPremium extends CryptoAssetBase {\n    public void applyVipBonus() {\n        System.out.println(\"Crypto Wallet: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetBase obj = new CryptoAssetPremium();\n        if (obj instanceof CryptoAssetPremium) {\n            CryptoAssetPremium downcasted = (CryptoAssetPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class CryptoAssetBase {}\n\nclass CryptoAssetPremium extends CryptoAssetBase {\n    public void applyVipBonus() {\n        System.out.println(\"Crypto Wallet: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetBase obj = new CryptoAssetPremium();\n        if (obj instanceof CryptoAssetPremium) {\n            CryptoAssetPremium downcasted = (CryptoAssetPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof CryptoAssetPremium) {\n    CryptoAssetPremium downcasted = (CryptoAssetPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof CryptoAssetPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "110. National Library — Turni Tekshirish va Downcasting",
      "en": "110. National Library — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "National Library da umumiy 'CatalogBookBase' turidagi ob'yekt aynan 'CatalogBookPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof CatalogBookPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "CatalogBookBase",
        "CatalogBookPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class CatalogBookBase {}\n\nclass CatalogBookPremium extends CatalogBookBase {\n    public void applyVipBonus() {\n        System.out.println(\"National Library: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookBase obj = new CatalogBookPremium();\n        if (obj instanceof CatalogBookPremium) {\n            CatalogBookPremium downcasted = (CatalogBookPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class CatalogBookBase {}\n\nclass CatalogBookPremium extends CatalogBookBase {\n    public void applyVipBonus() {\n        System.out.println(\"National Library: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookBase obj = new CatalogBookPremium();\n        if (obj instanceof CatalogBookPremium) {\n            CatalogBookPremium downcasted = (CatalogBookPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof CatalogBookPremium) {\n    CatalogBookPremium downcasted = (CatalogBookPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof CatalogBookPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "111. BeFit Club — Turni Tekshirish va Downcasting",
      "en": "111. BeFit Club — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "BeFit Club da umumiy 'GymMemberBase' turidagi ob'yekt aynan 'GymMemberPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof GymMemberPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "GymMemberBase",
        "GymMemberPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class GymMemberBase {}\n\nclass GymMemberPremium extends GymMemberBase {\n    public void applyVipBonus() {\n        System.out.println(\"BeFit Club: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberBase obj = new GymMemberPremium();\n        if (obj instanceof GymMemberPremium) {\n            GymMemberPremium downcasted = (GymMemberPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class GymMemberBase {}\n\nclass GymMemberPremium extends GymMemberBase {\n    public void applyVipBonus() {\n        System.out.println(\"BeFit Club: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberBase obj = new GymMemberPremium();\n        if (obj instanceof GymMemberPremium) {\n            GymMemberPremium downcasted = (GymMemberPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof GymMemberPremium) {\n    GymMemberPremium downcasted = (GymMemberPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof GymMemberPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "112. Tashkent Parking — Turni Tekshirish va Downcasting",
      "en": "112. Tashkent Parking — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Tashkent Parking da umumiy 'ParkingBayBase' turidagi ob'yekt aynan 'ParkingBayPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof ParkingBayPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "ParkingBayBase",
        "ParkingBayPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class ParkingBayBase {}\n\nclass ParkingBayPremium extends ParkingBayBase {\n    public void applyVipBonus() {\n        System.out.println(\"Tashkent Parking: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayBase obj = new ParkingBayPremium();\n        if (obj instanceof ParkingBayPremium) {\n            ParkingBayPremium downcasted = (ParkingBayPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class ParkingBayBase {}\n\nclass ParkingBayPremium extends ParkingBayBase {\n    public void applyVipBonus() {\n        System.out.println(\"Tashkent Parking: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayBase obj = new ParkingBayPremium();\n        if (obj instanceof ParkingBayPremium) {\n            ParkingBayPremium downcasted = (ParkingBayPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof ParkingBayPremium) {\n    ParkingBayPremium downcasted = (ParkingBayPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof ParkingBayPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "113. Medion Clinic — Turni Tekshirish va Downcasting",
      "en": "113. Medion Clinic — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Medion Clinic da umumiy 'PatientRecordBase' turidagi ob'yekt aynan 'PatientRecordPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof PatientRecordPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "PatientRecordBase",
        "PatientRecordPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class PatientRecordBase {}\n\nclass PatientRecordPremium extends PatientRecordBase {\n    public void applyVipBonus() {\n        System.out.println(\"Medion Clinic: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordBase obj = new PatientRecordPremium();\n        if (obj instanceof PatientRecordPremium) {\n            PatientRecordPremium downcasted = (PatientRecordPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class PatientRecordBase {}\n\nclass PatientRecordPremium extends PatientRecordBase {\n    public void applyVipBonus() {\n        System.out.println(\"Medion Clinic: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordBase obj = new PatientRecordPremium();\n        if (obj instanceof PatientRecordPremium) {\n            PatientRecordPremium downcasted = (PatientRecordPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof PatientRecordPremium) {\n    PatientRecordPremium downcasted = (PatientRecordPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof PatientRecordPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "114. Hyatt Regency — Turni Tekshirish va Downcasting",
      "en": "114. Hyatt Regency — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Hyatt Regency da umumiy 'HotelReservationBase' turidagi ob'yekt aynan 'HotelReservationPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof HotelReservationPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "HotelReservationBase",
        "HotelReservationPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class HotelReservationBase {}\n\nclass HotelReservationPremium extends HotelReservationBase {\n    public void applyVipBonus() {\n        System.out.println(\"Hyatt Regency: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationBase obj = new HotelReservationPremium();\n        if (obj instanceof HotelReservationPremium) {\n            HotelReservationPremium downcasted = (HotelReservationPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class HotelReservationBase {}\n\nclass HotelReservationPremium extends HotelReservationBase {\n    public void applyVipBonus() {\n        System.out.println(\"Hyatt Regency: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationBase obj = new HotelReservationPremium();\n        if (obj instanceof HotelReservationPremium) {\n            HotelReservationPremium downcasted = (HotelReservationPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof HotelReservationPremium) {\n    HotelReservationPremium downcasted = (HotelReservationPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof HotelReservationPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "115. Premier Cinema — Turni Tekshirish va Downcasting",
      "en": "115. Premier Cinema — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Premier Cinema da umumiy 'CinemaTicketBase' turidagi ob'yekt aynan 'CinemaTicketPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof CinemaTicketPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "CinemaTicketBase",
        "CinemaTicketPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class CinemaTicketBase {}\n\nclass CinemaTicketPremium extends CinemaTicketBase {\n    public void applyVipBonus() {\n        System.out.println(\"Premier Cinema: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketBase obj = new CinemaTicketPremium();\n        if (obj instanceof CinemaTicketPremium) {\n            CinemaTicketPremium downcasted = (CinemaTicketPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class CinemaTicketBase {}\n\nclass CinemaTicketPremium extends CinemaTicketBase {\n    public void applyVipBonus() {\n        System.out.println(\"Premier Cinema: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketBase obj = new CinemaTicketPremium();\n        if (obj instanceof CinemaTicketPremium) {\n            CinemaTicketPremium downcasted = (CinemaTicketPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof CinemaTicketPremium) {\n    CinemaTicketPremium downcasted = (CinemaTicketPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof CinemaTicketPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "116. Yandex Scooter — Turni Tekshirish va Downcasting",
      "en": "116. Yandex Scooter — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Yandex Scooter da umumiy 'ElectricScooterBase' turidagi ob'yekt aynan 'ElectricScooterPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof ElectricScooterPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "ElectricScooterBase",
        "ElectricScooterPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class ElectricScooterBase {}\n\nclass ElectricScooterPremium extends ElectricScooterBase {\n    public void applyVipBonus() {\n        System.out.println(\"Yandex Scooter: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterBase obj = new ElectricScooterPremium();\n        if (obj instanceof ElectricScooterPremium) {\n            ElectricScooterPremium downcasted = (ElectricScooterPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class ElectricScooterBase {}\n\nclass ElectricScooterPremium extends ElectricScooterBase {\n    public void applyVipBonus() {\n        System.out.println(\"Yandex Scooter: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterBase obj = new ElectricScooterPremium();\n        if (obj instanceof ElectricScooterPremium) {\n            ElectricScooterPremium downcasted = (ElectricScooterPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof ElectricScooterPremium) {\n    ElectricScooterPremium downcasted = (ElectricScooterPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof ElectricScooterPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "117. Weather Network — Turni Tekshirish va Downcasting",
      "en": "117. Weather Network — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Weather Network da umumiy 'MeteoStationBase' turidagi ob'yekt aynan 'MeteoStationPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof MeteoStationPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "MeteoStationBase",
        "MeteoStationPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class MeteoStationBase {}\n\nclass MeteoStationPremium extends MeteoStationBase {\n    public void applyVipBonus() {\n        System.out.println(\"Weather Network: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationBase obj = new MeteoStationPremium();\n        if (obj instanceof MeteoStationPremium) {\n            MeteoStationPremium downcasted = (MeteoStationPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class MeteoStationBase {}\n\nclass MeteoStationPremium extends MeteoStationBase {\n    public void applyVipBonus() {\n        System.out.println(\"Weather Network: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationBase obj = new MeteoStationPremium();\n        if (obj instanceof MeteoStationPremium) {\n            MeteoStationPremium downcasted = (MeteoStationPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof MeteoStationPremium) {\n    MeteoStationPremium downcasted = (MeteoStationPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof MeteoStationPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "118. OpenMarket Auction — Turni Tekshirish va Downcasting",
      "en": "118. OpenMarket Auction — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "OpenMarket Auction da umumiy 'AuctionLotBase' turidagi ob'yekt aynan 'AuctionLotPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof AuctionLotPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "AuctionLotBase",
        "AuctionLotPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class AuctionLotBase {}\n\nclass AuctionLotPremium extends AuctionLotBase {\n    public void applyVipBonus() {\n        System.out.println(\"OpenMarket Auction: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotBase obj = new AuctionLotPremium();\n        if (obj instanceof AuctionLotPremium) {\n            AuctionLotPremium downcasted = (AuctionLotPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class AuctionLotBase {}\n\nclass AuctionLotPremium extends AuctionLotBase {\n    public void applyVipBonus() {\n        System.out.println(\"OpenMarket Auction: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotBase obj = new AuctionLotPremium();\n        if (obj instanceof AuctionLotPremium) {\n            AuctionLotPremium downcasted = (AuctionLotPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof AuctionLotPremium) {\n    AuctionLotPremium downcasted = (AuctionLotPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof AuctionLotPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "119. Solar Energy Grid — Turni Tekshirish va Downcasting",
      "en": "119. Solar Energy Grid — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "Solar Energy Grid da umumiy 'SolarInverterBase' turidagi ob'yekt aynan 'SolarInverterPremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof SolarInverterPremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "SolarInverterBase",
        "SolarInverterPremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class SolarInverterBase {}\n\nclass SolarInverterPremium extends SolarInverterBase {\n    public void applyVipBonus() {\n        System.out.println(\"Solar Energy Grid: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterBase obj = new SolarInverterPremium();\n        if (obj instanceof SolarInverterPremium) {\n            SolarInverterPremium downcasted = (SolarInverterPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class SolarInverterBase {}\n\nclass SolarInverterPremium extends SolarInverterBase {\n    public void applyVipBonus() {\n        System.out.println(\"Solar Energy Grid: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterBase obj = new SolarInverterPremium();\n        if (obj instanceof SolarInverterPremium) {\n            SolarInverterPremium downcasted = (SolarInverterPremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof SolarInverterPremium) {\n    SolarInverterPremium downcasted = (SolarInverterPremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof SolarInverterPremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: 'instanceof' va Xavfsiz Downcasting",
    "sector": "Arxitektura",
    "title": {
      "uz": "120. O'zbekiston Temir Yo'llari — Turni Tekshirish va Downcasting",
      "en": "120. O'zbekiston Temir Yo'llari — Safe Downcasting & instanceof"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da umumiy 'TrainRouteBase' turidagi ob'yekt aynan 'TrainRoutePremium' ekanligini 'instanceof' orqali tekshirib, keyin xavfsiz downcast qiling va maxsus 'applyVipBonus()' metodini chaqiring.",
      "en": "Safely check 'obj instanceof TrainRoutePremium' before downcasting to invoke 'applyVipBonus()'."
    },
    "requirements": {
      "classes": [
        "TrainRouteBase",
        "TrainRoutePremium"
      ],
      "methods": [
        "applyVipBonus"
      ],
      "keywords": [
        "instanceof",
        "extends"
      ]
    },
    "starterCode": "class TrainRouteBase {}\n\nclass TrainRoutePremium extends TrainRouteBase {\n    public void applyVipBonus() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteBase obj = new TrainRoutePremium();\n        if (obj instanceof TrainRoutePremium) {\n            TrainRoutePremium downcasted = (TrainRoutePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "solution": "class TrainRouteBase {}\n\nclass TrainRoutePremium extends TrainRouteBase {\n    public void applyVipBonus() {\n        System.out.println(\"O'zbekiston Temir Yo'llari: VIP bonus qo'shildi!\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteBase obj = new TrainRoutePremium();\n        if (obj instanceof TrainRoutePremium) {\n            TrainRoutePremium downcasted = (TrainRoutePremium) obj;\n            downcasted.applyVipBonus();\n        }\n    }\n}",
    "detailedSolution": {
      "theory": "Downcasting (otadan bolaga pastlash) xavfli operatsiyadir. Agar ob'yekt haqiqatda o'sha turda bo'lmasa, 'ClassCastException' otiladi. Shuning uchun har doim 'instanceof' bilan tekshiriladi.",
      "theoryEn": "Downcasting requires strict pre-validation via 'instanceof' to prevent disastrous runtime ClassCastExceptions.",
      "cleanCode": "if (obj instanceof TrainRoutePremium) {\n    TrainRoutePremium downcasted = (TrainRoutePremium) obj;\n    downcasted.applyVipBonus();\n}",
      "breakdown": [
        "<code>obj instanceof TrainRoutePremium</code>: Xotiradagi ob'yekt haqiqatan ham ushbu sinfga tegishlimi yo'qmi tekshiradi."
      ],
      "pitfalls": "'instanceof' tekshiruvisiz qilingan har qanday downcasting potentsial xavf manbaidir.",
      "cw2Tip": "Buyurtma tovarlari orasida faqat ichimliklarning muz miqdorini o'zgartirish kerak bo'lsa, 'item instanceof Beverage' tekshiruvi qo'llaniladi."
    }
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "121. Uzum Market — Template Method Patterni",
      "en": "121. Uzum Market — Template Method Pattern"
    },
    "scenario": {
      "uz": "Uzum Market da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Uzum Market: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "ProductPipeline",
        "ProductExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class ProductPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Uzum Market: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ProductExecution extends ProductPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductPipeline pipe = new ProductExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class ProductPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Uzum Market: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ProductExecution extends ProductPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductPipeline pipe = new ProductExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "122. Payme Wallet — Template Method Patterni",
      "en": "122. Payme Wallet — Template Method Pattern"
    },
    "scenario": {
      "uz": "Payme Wallet da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Payme Wallet: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "WalletUserPipeline",
        "WalletUserExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class WalletUserPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Payme Wallet: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass WalletUserExecution extends WalletUserPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserPipeline pipe = new WalletUserExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class WalletUserPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Payme Wallet: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass WalletUserExecution extends WalletUserPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserPipeline pipe = new WalletUserExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "123. Yandex Go — Template Method Patterni",
      "en": "123. Yandex Go — Template Method Pattern"
    },
    "scenario": {
      "uz": "Yandex Go da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Yandex Go: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "TaxiRidePipeline",
        "TaxiRideExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class TaxiRidePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Yandex Go: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass TaxiRideExecution extends TaxiRidePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRidePipeline pipe = new TaxiRideExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class TaxiRidePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Yandex Go: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass TaxiRideExecution extends TaxiRidePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRidePipeline pipe = new TaxiRideExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "124. Korzinka Go — Template Method Patterni",
      "en": "124. Korzinka Go — Template Method Pattern"
    },
    "scenario": {
      "uz": "Korzinka Go da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Korzinka Go: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardPipeline",
        "LoyaltyCardExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class LoyaltyCardPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Korzinka Go: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass LoyaltyCardExecution extends LoyaltyCardPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardPipeline pipe = new LoyaltyCardExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class LoyaltyCardPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Korzinka Go: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass LoyaltyCardExecution extends LoyaltyCardPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardPipeline pipe = new LoyaltyCardExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "125. WIUT Portal — Template Method Patterni",
      "en": "125. WIUT Portal — Template Method Pattern"
    },
    "scenario": {
      "uz": "WIUT Portal da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in WIUT Portal: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "StudentPipeline",
        "StudentExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class StudentPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"WIUT Portal: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass StudentExecution extends StudentPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentPipeline pipe = new StudentExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class StudentPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"WIUT Portal: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass StudentExecution extends StudentPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentPipeline pipe = new StudentExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "126. Click Pay — Template Method Patterni",
      "en": "126. Click Pay — Template Method Pattern"
    },
    "scenario": {
      "uz": "Click Pay da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Click Pay: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "PaymentTxnPipeline",
        "PaymentTxnExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class PaymentTxnPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Click Pay: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass PaymentTxnExecution extends PaymentTxnPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnPipeline pipe = new PaymentTxnExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class PaymentTxnPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Click Pay: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass PaymentTxnExecution extends PaymentTxnPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnPipeline pipe = new PaymentTxnExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "127. Telegram Bot — Template Method Patterni",
      "en": "127. Telegram Bot — Template Method Pattern"
    },
    "scenario": {
      "uz": "Telegram Bot da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Telegram Bot: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "BotMessagePipeline",
        "BotMessageExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class BotMessagePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Telegram Bot: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass BotMessageExecution extends BotMessagePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessagePipeline pipe = new BotMessageExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class BotMessagePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Telegram Bot: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass BotMessageExecution extends BotMessagePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessagePipeline pipe = new BotMessageExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "128. UzAirways — Template Method Patterni",
      "en": "128. UzAirways — Template Method Pattern"
    },
    "scenario": {
      "uz": "UzAirways da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in UzAirways: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "FlightTicketPipeline",
        "FlightTicketExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class FlightTicketPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"UzAirways: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass FlightTicketExecution extends FlightTicketPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketPipeline pipe = new FlightTicketExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class FlightTicketPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"UzAirways: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass FlightTicketExecution extends FlightTicketPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketPipeline pipe = new FlightTicketExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "129. IT Park Academy — Template Method Patterni",
      "en": "129. IT Park Academy — Template Method Pattern"
    },
    "scenario": {
      "uz": "IT Park Academy da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in IT Park Academy: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "BootcampCoursePipeline",
        "BootcampCourseExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class BootcampCoursePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"IT Park Academy: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass BootcampCourseExecution extends BootcampCoursePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCoursePipeline pipe = new BootcampCourseExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class BootcampCoursePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"IT Park Academy: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass BootcampCourseExecution extends BootcampCoursePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCoursePipeline pipe = new BootcampCourseExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "130. Anorbank — Template Method Patterni",
      "en": "130. Anorbank — Template Method Pattern"
    },
    "scenario": {
      "uz": "Anorbank da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Anorbank: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "DebitCardPipeline",
        "DebitCardExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class DebitCardPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Anorbank: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass DebitCardExecution extends DebitCardPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardPipeline pipe = new DebitCardExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class DebitCardPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Anorbank: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass DebitCardExecution extends DebitCardPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardPipeline pipe = new DebitCardExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "131. Oson Apteka — Template Method Patterni",
      "en": "131. Oson Apteka — Template Method Pattern"
    },
    "scenario": {
      "uz": "Oson Apteka da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Oson Apteka: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "MedicinePipeline",
        "MedicineExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class MedicinePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Oson Apteka: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass MedicineExecution extends MedicinePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicinePipeline pipe = new MedicineExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class MedicinePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Oson Apteka: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass MedicineExecution extends MedicinePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicinePipeline pipe = new MedicineExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "132. Evos FastFood — Template Method Patterni",
      "en": "132. Evos FastFood — Template Method Pattern"
    },
    "scenario": {
      "uz": "Evos FastFood da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Evos FastFood: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "FoodOrderPipeline",
        "FoodOrderExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class FoodOrderPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Evos FastFood: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass FoodOrderExecution extends FoodOrderPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderPipeline pipe = new FoodOrderExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class FoodOrderPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Evos FastFood: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass FoodOrderExecution extends FoodOrderPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderPipeline pipe = new FoodOrderExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "133. Bellissimo Pizza — Template Method Patterni",
      "en": "133. Bellissimo Pizza — Template Method Pattern"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Bellissimo Pizza: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "PizzaOrderPipeline",
        "PizzaOrderExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class PizzaOrderPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Bellissimo Pizza: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass PizzaOrderExecution extends PizzaOrderPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderPipeline pipe = new PizzaOrderExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class PizzaOrderPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Bellissimo Pizza: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass PizzaOrderExecution extends PizzaOrderPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderPipeline pipe = new PizzaOrderExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "134. Milliy TV — Template Method Patterni",
      "en": "134. Milliy TV — Template Method Pattern"
    },
    "scenario": {
      "uz": "Milliy TV da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Milliy TV: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "BroadcastShowPipeline",
        "BroadcastShowExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class BroadcastShowPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Milliy TV: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass BroadcastShowExecution extends BroadcastShowPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowPipeline pipe = new BroadcastShowExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class BroadcastShowPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Milliy TV: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass BroadcastShowExecution extends BroadcastShowPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowPipeline pipe = new BroadcastShowExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "135. Spotify Sound — Template Method Patterni",
      "en": "135. Spotify Sound — Template Method Pattern"
    },
    "scenario": {
      "uz": "Spotify Sound da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Spotify Sound: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "AudioTrackPipeline",
        "AudioTrackExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class AudioTrackPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Spotify Sound: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass AudioTrackExecution extends AudioTrackPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackPipeline pipe = new AudioTrackExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class AudioTrackPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Spotify Sound: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass AudioTrackExecution extends AudioTrackPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackPipeline pipe = new AudioTrackExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "136. Smart Thermostat — Template Method Patterni",
      "en": "136. Smart Thermostat — Template Method Pattern"
    },
    "scenario": {
      "uz": "Smart Thermostat da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Smart Thermostat: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "ThermostatPipeline",
        "ThermostatExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class ThermostatPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Smart Thermostat: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ThermostatExecution extends ThermostatPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatPipeline pipe = new ThermostatExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class ThermostatPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Smart Thermostat: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ThermostatExecution extends ThermostatPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatPipeline pipe = new ThermostatExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "137. Drone Delivery — Template Method Patterni",
      "en": "137. Drone Delivery — Template Method Pattern"
    },
    "scenario": {
      "uz": "Drone Delivery da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Drone Delivery: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "DeliveryDronePipeline",
        "DeliveryDroneExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class DeliveryDronePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Drone Delivery: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass DeliveryDroneExecution extends DeliveryDronePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDronePipeline pipe = new DeliveryDroneExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class DeliveryDronePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Drone Delivery: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass DeliveryDroneExecution extends DeliveryDronePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDronePipeline pipe = new DeliveryDroneExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "138. Smart Warehouse — Template Method Patterni",
      "en": "138. Smart Warehouse — Template Method Pattern"
    },
    "scenario": {
      "uz": "Smart Warehouse da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Smart Warehouse: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "StorageBayPipeline",
        "StorageBayExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class StorageBayPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Smart Warehouse: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass StorageBayExecution extends StorageBayPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayPipeline pipe = new StorageBayExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class StorageBayPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Smart Warehouse: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass StorageBayExecution extends StorageBayPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayPipeline pipe = new StorageBayExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "139. Crypto Wallet — Template Method Patterni",
      "en": "139. Crypto Wallet — Template Method Pattern"
    },
    "scenario": {
      "uz": "Crypto Wallet da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Crypto Wallet: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "CryptoAssetPipeline",
        "CryptoAssetExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class CryptoAssetPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Crypto Wallet: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass CryptoAssetExecution extends CryptoAssetPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetPipeline pipe = new CryptoAssetExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class CryptoAssetPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Crypto Wallet: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass CryptoAssetExecution extends CryptoAssetPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetPipeline pipe = new CryptoAssetExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "140. National Library — Template Method Patterni",
      "en": "140. National Library — Template Method Pattern"
    },
    "scenario": {
      "uz": "National Library da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in National Library: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "CatalogBookPipeline",
        "CatalogBookExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class CatalogBookPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"National Library: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass CatalogBookExecution extends CatalogBookPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookPipeline pipe = new CatalogBookExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class CatalogBookPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"National Library: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass CatalogBookExecution extends CatalogBookPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookPipeline pipe = new CatalogBookExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "141. BeFit Club — Template Method Patterni",
      "en": "141. BeFit Club — Template Method Pattern"
    },
    "scenario": {
      "uz": "BeFit Club da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in BeFit Club: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "GymMemberPipeline",
        "GymMemberExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class GymMemberPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"BeFit Club: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass GymMemberExecution extends GymMemberPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberPipeline pipe = new GymMemberExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class GymMemberPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"BeFit Club: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass GymMemberExecution extends GymMemberPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberPipeline pipe = new GymMemberExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "142. Tashkent Parking — Template Method Patterni",
      "en": "142. Tashkent Parking — Template Method Pattern"
    },
    "scenario": {
      "uz": "Tashkent Parking da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Tashkent Parking: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "ParkingBayPipeline",
        "ParkingBayExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class ParkingBayPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Tashkent Parking: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ParkingBayExecution extends ParkingBayPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayPipeline pipe = new ParkingBayExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class ParkingBayPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Tashkent Parking: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ParkingBayExecution extends ParkingBayPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayPipeline pipe = new ParkingBayExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "143. Medion Clinic — Template Method Patterni",
      "en": "143. Medion Clinic — Template Method Pattern"
    },
    "scenario": {
      "uz": "Medion Clinic da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Medion Clinic: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "PatientRecordPipeline",
        "PatientRecordExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class PatientRecordPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Medion Clinic: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass PatientRecordExecution extends PatientRecordPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordPipeline pipe = new PatientRecordExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class PatientRecordPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Medion Clinic: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass PatientRecordExecution extends PatientRecordPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordPipeline pipe = new PatientRecordExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "144. Hyatt Regency — Template Method Patterni",
      "en": "144. Hyatt Regency — Template Method Pattern"
    },
    "scenario": {
      "uz": "Hyatt Regency da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Hyatt Regency: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "HotelReservationPipeline",
        "HotelReservationExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class HotelReservationPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Hyatt Regency: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass HotelReservationExecution extends HotelReservationPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationPipeline pipe = new HotelReservationExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class HotelReservationPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Hyatt Regency: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass HotelReservationExecution extends HotelReservationPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationPipeline pipe = new HotelReservationExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "145. Premier Cinema — Template Method Patterni",
      "en": "145. Premier Cinema — Template Method Pattern"
    },
    "scenario": {
      "uz": "Premier Cinema da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Premier Cinema: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "CinemaTicketPipeline",
        "CinemaTicketExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class CinemaTicketPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Premier Cinema: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass CinemaTicketExecution extends CinemaTicketPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketPipeline pipe = new CinemaTicketExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class CinemaTicketPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Premier Cinema: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass CinemaTicketExecution extends CinemaTicketPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketPipeline pipe = new CinemaTicketExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "146. Yandex Scooter — Template Method Patterni",
      "en": "146. Yandex Scooter — Template Method Pattern"
    },
    "scenario": {
      "uz": "Yandex Scooter da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Yandex Scooter: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "ElectricScooterPipeline",
        "ElectricScooterExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class ElectricScooterPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Yandex Scooter: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ElectricScooterExecution extends ElectricScooterPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterPipeline pipe = new ElectricScooterExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class ElectricScooterPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Yandex Scooter: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass ElectricScooterExecution extends ElectricScooterPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterPipeline pipe = new ElectricScooterExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "147. Weather Network — Template Method Patterni",
      "en": "147. Weather Network — Template Method Pattern"
    },
    "scenario": {
      "uz": "Weather Network da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Weather Network: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "MeteoStationPipeline",
        "MeteoStationExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class MeteoStationPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Weather Network: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass MeteoStationExecution extends MeteoStationPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationPipeline pipe = new MeteoStationExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class MeteoStationPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Weather Network: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass MeteoStationExecution extends MeteoStationPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationPipeline pipe = new MeteoStationExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "148. OpenMarket Auction — Template Method Patterni",
      "en": "148. OpenMarket Auction — Template Method Pattern"
    },
    "scenario": {
      "uz": "OpenMarket Auction da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in OpenMarket Auction: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "AuctionLotPipeline",
        "AuctionLotExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class AuctionLotPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"OpenMarket Auction: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass AuctionLotExecution extends AuctionLotPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotPipeline pipe = new AuctionLotExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class AuctionLotPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"OpenMarket Auction: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass AuctionLotExecution extends AuctionLotPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotPipeline pipe = new AuctionLotExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "149. Solar Energy Grid — Template Method Patterni",
      "en": "149. Solar Energy Grid — Template Method Pattern"
    },
    "scenario": {
      "uz": "Solar Energy Grid da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in Solar Energy Grid: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "SolarInverterPipeline",
        "SolarInverterExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class SolarInverterPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Solar Energy Grid: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass SolarInverterExecution extends SolarInverterPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterPipeline pipe = new SolarInverterExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class SolarInverterPipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"Solar Energy Grid: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass SolarInverterExecution extends SolarInverterPipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterPipeline pipe = new SolarInverterExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: Shabloni Metod Dizayn Patterni",
    "sector": "Master • CW2",
    "title": {
      "uz": "150. O'zbekiston Temir Yo'llari — Template Method Patterni",
      "en": "150. O'zbekiston Temir Yo'llari — Template Method Pattern"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da jarayon ketma-ketligini belgilovchi 'public final void process()' shablon metodini tuzing. U 'validate()' va 'executeStep()' abstrakt qadamlarini chaqirsin.",
      "en": "Implement Template Method pattern in O'zbekiston Temir Yo'llari: final template 'process()' calling abstract steps."
    },
    "requirements": {
      "classes": [
        "TrainRoutePipeline",
        "TrainRouteExecution"
      ],
      "methods": [
        "process",
        "validate",
        "executeStep"
      ],
      "keywords": [
        "abstract",
        "final",
        "extends"
      ]
    },
    "starterCode": "abstract class TrainRoutePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"O'zbekiston Temir Yo'llari: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass TrainRouteExecution extends TrainRoutePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoutePipeline pipe = new TrainRouteExecution();\n        pipe.process();\n    }\n}",
    "solution": "abstract class TrainRoutePipeline {\n    public abstract void validate();\n    public abstract void executeStep();\n\n    public final void process() {\n        validate();\n        executeStep();\n        System.out.println(\"O'zbekiston Temir Yo'llari: Jarayon muvaffaqiyatli yakunlandi.\");\n    }\n}\n\nclass TrainRouteExecution extends TrainRoutePipeline {\n    @Override public void validate() { System.out.println(\"Tekshiruv o'tdi.\"); }\n    @Override public void executeStep() { System.out.println(\"Asosiy amal bajarildi.\"); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoutePipeline pipe = new TrainRouteExecution();\n        pipe.process();\n    }\n}",
    "detailedSolution": {
      "theory": "Template Method patterni algoritm skeletini ota sinfda 'final' metod sifatida qotirib qo'yadi va alohida qadamlarni avlod sinflarga topshiradi. Algoritm tuzilishi hech qachon buzilmaydi.",
      "theoryEn": "The Template Method pattern defines an algorithm invariant skeleton in a final method, delegating specific step execution to derived classes.",
      "cleanCode": "public final void process() {\n    validate();\n    executeStep();\n}",
      "breakdown": [
        "<code>public final void process()</code>: Ketma-ketlikni bolalar o'zgartira olmasligi uchun 'final' qilingan."
      ],
      "pitfalls": "Shablon metodni 'final' qilmaslik uning buzilishiga va qadamlar o'rni almashib ketishiga olib kelishi mumkin.",
      "cw2Tip": "CW2 da buyurtmani rasmiylashtirish jarayoni (Validate Cart -> Calculate Total -> Deduct Payment -> Print Receipt) aynan shu pattern asosida ishlaydi."
    }
  }
];
