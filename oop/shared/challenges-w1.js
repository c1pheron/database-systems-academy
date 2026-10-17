// WIUT OOP (5COSC018C) — WEEK 1 DATASET (150 PROGRESSIVE CHALLENGES)
window.OOP_CHALLENGES_W1 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "1. Uzum Market — 'Product' Klassi va Maydonlari",
      "en": "1. Uzum Market — 'Product' Class & State Fields"
    },
    "scenario": {
      "uz": "Uzum Market (E-Commerce) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'Product' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'price' (double) qo'shing.",
      "en": "In Uzum Market (E-Commerce), create a blueprint 'Product' with two fields: 'title' (String) and 'price' (double)."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "price",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Uzum Market ob'yekt klassi\nclass Product {\n    String title;\n    double price;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product obj = new Product();\n        obj.title = \"Uzum Market Birlamchi\";\n        obj.price = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.price);\n    }\n}",
    "solution": "class Product {\n    String title;\n    double price;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product obj = new Product();\n        obj.title = \"Uzum Market Birlamchi\";\n        obj.price = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.price);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'price' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'price' resides in Heap memory per instance.",
      "cleanCode": "class Product {\n    String title;\n    double price;\n}",
      "breakdown": [
        "<code>class Product { ... }</code>: Uzum Market ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double price;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'price' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "2. Payme Wallet — 'WalletUser' Klassi va Maydonlari",
      "en": "2. Payme Wallet — 'WalletUser' Class & State Fields"
    },
    "scenario": {
      "uz": "Payme Wallet (FinTech) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'WalletUser' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'balance' (double) qo'shing.",
      "en": "In Payme Wallet (FinTech), create a blueprint 'WalletUser' with two fields: 'title' (String) and 'balance' (double)."
    },
    "requirements": {
      "classes": [
        "WalletUser"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "balance",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Payme Wallet ob'yekt klassi\nclass WalletUser {\n    String title;\n    double balance;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser obj = new WalletUser();\n        obj.title = \"Payme Wallet Birlamchi\";\n        obj.balance = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.balance);\n    }\n}",
    "solution": "class WalletUser {\n    String title;\n    double balance;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser obj = new WalletUser();\n        obj.title = \"Payme Wallet Birlamchi\";\n        obj.balance = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.balance);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'balance' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'balance' resides in Heap memory per instance.",
      "cleanCode": "class WalletUser {\n    String title;\n    double balance;\n}",
      "breakdown": [
        "<code>class WalletUser { ... }</code>: Payme Wallet ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double balance;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'balance' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "3. Yandex Go — 'TaxiRide' Klassi va Maydonlari",
      "en": "3. Yandex Go — 'TaxiRide' Class & State Fields"
    },
    "scenario": {
      "uz": "Yandex Go (Transport) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'TaxiRide' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'distanceKm' (double) qo'shing.",
      "en": "In Yandex Go (Transport), create a blueprint 'TaxiRide' with two fields: 'title' (String) and 'distanceKm' (double)."
    },
    "requirements": {
      "classes": [
        "TaxiRide"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "distanceKm",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Yandex Go ob'yekt klassi\nclass TaxiRide {\n    String title;\n    double distanceKm;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide obj = new TaxiRide();\n        obj.title = \"Yandex Go Birlamchi\";\n        obj.distanceKm = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.distanceKm);\n    }\n}",
    "solution": "class TaxiRide {\n    String title;\n    double distanceKm;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide obj = new TaxiRide();\n        obj.title = \"Yandex Go Birlamchi\";\n        obj.distanceKm = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.distanceKm);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'distanceKm' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'distanceKm' resides in Heap memory per instance.",
      "cleanCode": "class TaxiRide {\n    String title;\n    double distanceKm;\n}",
      "breakdown": [
        "<code>class TaxiRide { ... }</code>: Yandex Go ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double distanceKm;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'distanceKm' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "4. Korzinka Go — 'LoyaltyCard' Klassi va Maydonlari",
      "en": "4. Korzinka Go — 'LoyaltyCard' Class & State Fields"
    },
    "scenario": {
      "uz": "Korzinka Go (Retail) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'LoyaltyCard' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'bonusPoints' (int) qo'shing.",
      "en": "In Korzinka Go (Retail), create a blueprint 'LoyaltyCard' with two fields: 'title' (String) and 'bonusPoints' (int)."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "bonusPoints",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Korzinka Go ob'yekt klassi\nclass LoyaltyCard {\n    String title;\n    int bonusPoints;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard obj = new LoyaltyCard();\n        obj.title = \"Korzinka Go Birlamchi\";\n        obj.bonusPoints = 42;\n        System.out.println(obj.title + \" holati: \" + obj.bonusPoints);\n    }\n}",
    "solution": "class LoyaltyCard {\n    String title;\n    int bonusPoints;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard obj = new LoyaltyCard();\n        obj.title = \"Korzinka Go Birlamchi\";\n        obj.bonusPoints = 42;\n        System.out.println(obj.title + \" holati: \" + obj.bonusPoints);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'bonusPoints' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'bonusPoints' resides in Heap memory per instance.",
      "cleanCode": "class LoyaltyCard {\n    String title;\n    int bonusPoints;\n}",
      "breakdown": [
        "<code>class LoyaltyCard { ... }</code>: Korzinka Go ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int bonusPoints;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'bonusPoints' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "5. WIUT Portal — 'Student' Klassi va Maydonlari",
      "en": "5. WIUT Portal — 'Student' Class & State Fields"
    },
    "scenario": {
      "uz": "WIUT Portal (EdTech) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'Student' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'gpa' (double) qo'shing.",
      "en": "In WIUT Portal (EdTech), create a blueprint 'Student' with two fields: 'title' (String) and 'gpa' (double)."
    },
    "requirements": {
      "classes": [
        "Student"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "gpa",
          "type": "double"
        }
      ]
    },
    "starterCode": "// WIUT Portal ob'yekt klassi\nclass Student {\n    String title;\n    double gpa;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student obj = new Student();\n        obj.title = \"WIUT Portal Birlamchi\";\n        obj.gpa = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.gpa);\n    }\n}",
    "solution": "class Student {\n    String title;\n    double gpa;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student obj = new Student();\n        obj.title = \"WIUT Portal Birlamchi\";\n        obj.gpa = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.gpa);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'gpa' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'gpa' resides in Heap memory per instance.",
      "cleanCode": "class Student {\n    String title;\n    double gpa;\n}",
      "breakdown": [
        "<code>class Student { ... }</code>: WIUT Portal ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double gpa;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'gpa' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "6. Click Pay — 'PaymentTxn' Klassi va Maydonlari",
      "en": "6. Click Pay — 'PaymentTxn' Class & State Fields"
    },
    "scenario": {
      "uz": "Click Pay (Payments) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'PaymentTxn' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'amount' (double) qo'shing.",
      "en": "In Click Pay (Payments), create a blueprint 'PaymentTxn' with two fields: 'title' (String) and 'amount' (double)."
    },
    "requirements": {
      "classes": [
        "PaymentTxn"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "amount",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Click Pay ob'yekt klassi\nclass PaymentTxn {\n    String title;\n    double amount;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn obj = new PaymentTxn();\n        obj.title = \"Click Pay Birlamchi\";\n        obj.amount = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.amount);\n    }\n}",
    "solution": "class PaymentTxn {\n    String title;\n    double amount;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn obj = new PaymentTxn();\n        obj.title = \"Click Pay Birlamchi\";\n        obj.amount = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.amount);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'amount' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'amount' resides in Heap memory per instance.",
      "cleanCode": "class PaymentTxn {\n    String title;\n    double amount;\n}",
      "breakdown": [
        "<code>class PaymentTxn { ... }</code>: Click Pay ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double amount;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'amount' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "7. Telegram Bot — 'BotMessage' Klassi va Maydonlari",
      "en": "7. Telegram Bot — 'BotMessage' Class & State Fields"
    },
    "scenario": {
      "uz": "Telegram Bot (Messaging) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'BotMessage' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'chatId' (long) qo'shing.",
      "en": "In Telegram Bot (Messaging), create a blueprint 'BotMessage' with two fields: 'title' (String) and 'chatId' (long)."
    },
    "requirements": {
      "classes": [
        "BotMessage"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "chatId",
          "type": "long"
        }
      ]
    },
    "starterCode": "// Telegram Bot ob'yekt klassi\nclass BotMessage {\n    String title;\n    long chatId;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage obj = new BotMessage();\n        obj.title = \"Telegram Bot Birlamchi\";\n        obj.chatId = 1000L;\n        System.out.println(obj.title + \" holati: \" + obj.chatId);\n    }\n}",
    "solution": "class BotMessage {\n    String title;\n    long chatId;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage obj = new BotMessage();\n        obj.title = \"Telegram Bot Birlamchi\";\n        obj.chatId = 1000L;\n        System.out.println(obj.title + \" holati: \" + obj.chatId);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'chatId' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'chatId' resides in Heap memory per instance.",
      "cleanCode": "class BotMessage {\n    String title;\n    long chatId;\n}",
      "breakdown": [
        "<code>class BotMessage { ... }</code>: Telegram Bot ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>long chatId;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'chatId' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "8. UzAirways — 'FlightTicket' Klassi va Maydonlari",
      "en": "8. UzAirways — 'FlightTicket' Class & State Fields"
    },
    "scenario": {
      "uz": "UzAirways (Aviation) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'FlightTicket' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'farePrice' (double) qo'shing.",
      "en": "In UzAirways (Aviation), create a blueprint 'FlightTicket' with two fields: 'title' (String) and 'farePrice' (double)."
    },
    "requirements": {
      "classes": [
        "FlightTicket"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "farePrice",
          "type": "double"
        }
      ]
    },
    "starterCode": "// UzAirways ob'yekt klassi\nclass FlightTicket {\n    String title;\n    double farePrice;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket obj = new FlightTicket();\n        obj.title = \"UzAirways Birlamchi\";\n        obj.farePrice = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.farePrice);\n    }\n}",
    "solution": "class FlightTicket {\n    String title;\n    double farePrice;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket obj = new FlightTicket();\n        obj.title = \"UzAirways Birlamchi\";\n        obj.farePrice = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.farePrice);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'farePrice' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'farePrice' resides in Heap memory per instance.",
      "cleanCode": "class FlightTicket {\n    String title;\n    double farePrice;\n}",
      "breakdown": [
        "<code>class FlightTicket { ... }</code>: UzAirways ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double farePrice;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'farePrice' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "9. IT Park Academy — 'BootcampCourse' Klassi va Maydonlari",
      "en": "9. IT Park Academy — 'BootcampCourse' Class & State Fields"
    },
    "scenario": {
      "uz": "IT Park Academy (Bootcamp) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'BootcampCourse' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'durationWeeks' (int) qo'shing.",
      "en": "In IT Park Academy (Bootcamp), create a blueprint 'BootcampCourse' with two fields: 'title' (String) and 'durationWeeks' (int)."
    },
    "requirements": {
      "classes": [
        "BootcampCourse"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "durationWeeks",
          "type": "int"
        }
      ]
    },
    "starterCode": "// IT Park Academy ob'yekt klassi\nclass BootcampCourse {\n    String title;\n    int durationWeeks;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse obj = new BootcampCourse();\n        obj.title = \"IT Park Academy Birlamchi\";\n        obj.durationWeeks = 42;\n        System.out.println(obj.title + \" holati: \" + obj.durationWeeks);\n    }\n}",
    "solution": "class BootcampCourse {\n    String title;\n    int durationWeeks;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse obj = new BootcampCourse();\n        obj.title = \"IT Park Academy Birlamchi\";\n        obj.durationWeeks = 42;\n        System.out.println(obj.title + \" holati: \" + obj.durationWeeks);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'durationWeeks' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'durationWeeks' resides in Heap memory per instance.",
      "cleanCode": "class BootcampCourse {\n    String title;\n    int durationWeeks;\n}",
      "breakdown": [
        "<code>class BootcampCourse { ... }</code>: IT Park Academy ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int durationWeeks;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'durationWeeks' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "10. Anorbank — 'DebitCard' Klassi va Maydonlari",
      "en": "10. Anorbank — 'DebitCard' Class & State Fields"
    },
    "scenario": {
      "uz": "Anorbank (Neobank) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'DebitCard' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'creditLimit' (double) qo'shing.",
      "en": "In Anorbank (Neobank), create a blueprint 'DebitCard' with two fields: 'title' (String) and 'creditLimit' (double)."
    },
    "requirements": {
      "classes": [
        "DebitCard"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "creditLimit",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Anorbank ob'yekt klassi\nclass DebitCard {\n    String title;\n    double creditLimit;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard obj = new DebitCard();\n        obj.title = \"Anorbank Birlamchi\";\n        obj.creditLimit = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.creditLimit);\n    }\n}",
    "solution": "class DebitCard {\n    String title;\n    double creditLimit;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard obj = new DebitCard();\n        obj.title = \"Anorbank Birlamchi\";\n        obj.creditLimit = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.creditLimit);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'creditLimit' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'creditLimit' resides in Heap memory per instance.",
      "cleanCode": "class DebitCard {\n    String title;\n    double creditLimit;\n}",
      "breakdown": [
        "<code>class DebitCard { ... }</code>: Anorbank ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double creditLimit;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'creditLimit' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "11. Oson Apteka — 'Medicine' Klassi va Maydonlari",
      "en": "11. Oson Apteka — 'Medicine' Class & State Fields"
    },
    "scenario": {
      "uz": "Oson Apteka (Pharma) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'Medicine' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'stockCount' (int) qo'shing.",
      "en": "In Oson Apteka (Pharma), create a blueprint 'Medicine' with two fields: 'title' (String) and 'stockCount' (int)."
    },
    "requirements": {
      "classes": [
        "Medicine"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "stockCount",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Oson Apteka ob'yekt klassi\nclass Medicine {\n    String title;\n    int stockCount;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine obj = new Medicine();\n        obj.title = \"Oson Apteka Birlamchi\";\n        obj.stockCount = 42;\n        System.out.println(obj.title + \" holati: \" + obj.stockCount);\n    }\n}",
    "solution": "class Medicine {\n    String title;\n    int stockCount;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine obj = new Medicine();\n        obj.title = \"Oson Apteka Birlamchi\";\n        obj.stockCount = 42;\n        System.out.println(obj.title + \" holati: \" + obj.stockCount);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'stockCount' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'stockCount' resides in Heap memory per instance.",
      "cleanCode": "class Medicine {\n    String title;\n    int stockCount;\n}",
      "breakdown": [
        "<code>class Medicine { ... }</code>: Oson Apteka ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int stockCount;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'stockCount' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "12. Evos FastFood — 'FoodOrder' Klassi va Maydonlari",
      "en": "12. Evos FastFood — 'FoodOrder' Class & State Fields"
    },
    "scenario": {
      "uz": "Evos FastFood (QSR) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'FoodOrder' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'totalSum' (double) qo'shing.",
      "en": "In Evos FastFood (QSR), create a blueprint 'FoodOrder' with two fields: 'title' (String) and 'totalSum' (double)."
    },
    "requirements": {
      "classes": [
        "FoodOrder"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "totalSum",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Evos FastFood ob'yekt klassi\nclass FoodOrder {\n    String title;\n    double totalSum;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder obj = new FoodOrder();\n        obj.title = \"Evos FastFood Birlamchi\";\n        obj.totalSum = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.totalSum);\n    }\n}",
    "solution": "class FoodOrder {\n    String title;\n    double totalSum;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder obj = new FoodOrder();\n        obj.title = \"Evos FastFood Birlamchi\";\n        obj.totalSum = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.totalSum);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'totalSum' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'totalSum' resides in Heap memory per instance.",
      "cleanCode": "class FoodOrder {\n    String title;\n    double totalSum;\n}",
      "breakdown": [
        "<code>class FoodOrder { ... }</code>: Evos FastFood ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double totalSum;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'totalSum' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "13. Bellissimo Pizza — 'PizzaOrder' Klassi va Maydonlari",
      "en": "13. Bellissimo Pizza — 'PizzaOrder' Class & State Fields"
    },
    "scenario": {
      "uz": "Bellissimo Pizza (Delivery) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'PizzaOrder' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'prepTimeMinutes' (int) qo'shing.",
      "en": "In Bellissimo Pizza (Delivery), create a blueprint 'PizzaOrder' with two fields: 'title' (String) and 'prepTimeMinutes' (int)."
    },
    "requirements": {
      "classes": [
        "PizzaOrder"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "prepTimeMinutes",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Bellissimo Pizza ob'yekt klassi\nclass PizzaOrder {\n    String title;\n    int prepTimeMinutes;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder obj = new PizzaOrder();\n        obj.title = \"Bellissimo Pizza Birlamchi\";\n        obj.prepTimeMinutes = 42;\n        System.out.println(obj.title + \" holati: \" + obj.prepTimeMinutes);\n    }\n}",
    "solution": "class PizzaOrder {\n    String title;\n    int prepTimeMinutes;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder obj = new PizzaOrder();\n        obj.title = \"Bellissimo Pizza Birlamchi\";\n        obj.prepTimeMinutes = 42;\n        System.out.println(obj.title + \" holati: \" + obj.prepTimeMinutes);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'prepTimeMinutes' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'prepTimeMinutes' resides in Heap memory per instance.",
      "cleanCode": "class PizzaOrder {\n    String title;\n    int prepTimeMinutes;\n}",
      "breakdown": [
        "<code>class PizzaOrder { ... }</code>: Bellissimo Pizza ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int prepTimeMinutes;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'prepTimeMinutes' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "14. Milliy TV — 'BroadcastShow' Klassi va Maydonlari",
      "en": "14. Milliy TV — 'BroadcastShow' Class & State Fields"
    },
    "scenario": {
      "uz": "Milliy TV (Media) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'BroadcastShow' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'viewersRating' (double) qo'shing.",
      "en": "In Milliy TV (Media), create a blueprint 'BroadcastShow' with two fields: 'title' (String) and 'viewersRating' (double)."
    },
    "requirements": {
      "classes": [
        "BroadcastShow"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "viewersRating",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Milliy TV ob'yekt klassi\nclass BroadcastShow {\n    String title;\n    double viewersRating;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow obj = new BroadcastShow();\n        obj.title = \"Milliy TV Birlamchi\";\n        obj.viewersRating = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.viewersRating);\n    }\n}",
    "solution": "class BroadcastShow {\n    String title;\n    double viewersRating;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow obj = new BroadcastShow();\n        obj.title = \"Milliy TV Birlamchi\";\n        obj.viewersRating = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.viewersRating);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'viewersRating' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'viewersRating' resides in Heap memory per instance.",
      "cleanCode": "class BroadcastShow {\n    String title;\n    double viewersRating;\n}",
      "breakdown": [
        "<code>class BroadcastShow { ... }</code>: Milliy TV ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double viewersRating;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'viewersRating' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "15. Spotify Sound — 'AudioTrack' Klassi va Maydonlari",
      "en": "15. Spotify Sound — 'AudioTrack' Class & State Fields"
    },
    "scenario": {
      "uz": "Spotify Sound (Streaming) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'AudioTrack' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'durationSec' (int) qo'shing.",
      "en": "In Spotify Sound (Streaming), create a blueprint 'AudioTrack' with two fields: 'title' (String) and 'durationSec' (int)."
    },
    "requirements": {
      "classes": [
        "AudioTrack"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "durationSec",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Spotify Sound ob'yekt klassi\nclass AudioTrack {\n    String title;\n    int durationSec;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack obj = new AudioTrack();\n        obj.title = \"Spotify Sound Birlamchi\";\n        obj.durationSec = 42;\n        System.out.println(obj.title + \" holati: \" + obj.durationSec);\n    }\n}",
    "solution": "class AudioTrack {\n    String title;\n    int durationSec;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack obj = new AudioTrack();\n        obj.title = \"Spotify Sound Birlamchi\";\n        obj.durationSec = 42;\n        System.out.println(obj.title + \" holati: \" + obj.durationSec);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'durationSec' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'durationSec' resides in Heap memory per instance.",
      "cleanCode": "class AudioTrack {\n    String title;\n    int durationSec;\n}",
      "breakdown": [
        "<code>class AudioTrack { ... }</code>: Spotify Sound ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int durationSec;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'durationSec' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "16. Smart Thermostat — 'Thermostat' Klassi va Maydonlari",
      "en": "16. Smart Thermostat — 'Thermostat' Class & State Fields"
    },
    "scenario": {
      "uz": "Smart Thermostat (IoT) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'Thermostat' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'targetTemp' (double) qo'shing.",
      "en": "In Smart Thermostat (IoT), create a blueprint 'Thermostat' with two fields: 'title' (String) and 'targetTemp' (double)."
    },
    "requirements": {
      "classes": [
        "Thermostat"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "targetTemp",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Smart Thermostat ob'yekt klassi\nclass Thermostat {\n    String title;\n    double targetTemp;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat obj = new Thermostat();\n        obj.title = \"Smart Thermostat Birlamchi\";\n        obj.targetTemp = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.targetTemp);\n    }\n}",
    "solution": "class Thermostat {\n    String title;\n    double targetTemp;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat obj = new Thermostat();\n        obj.title = \"Smart Thermostat Birlamchi\";\n        obj.targetTemp = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.targetTemp);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'targetTemp' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'targetTemp' resides in Heap memory per instance.",
      "cleanCode": "class Thermostat {\n    String title;\n    double targetTemp;\n}",
      "breakdown": [
        "<code>class Thermostat { ... }</code>: Smart Thermostat ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double targetTemp;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'targetTemp' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "17. Drone Delivery — 'DeliveryDrone' Klassi va Maydonlari",
      "en": "17. Drone Delivery — 'DeliveryDrone' Class & State Fields"
    },
    "scenario": {
      "uz": "Drone Delivery (Logistics) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'DeliveryDrone' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'batteryPct' (int) qo'shing.",
      "en": "In Drone Delivery (Logistics), create a blueprint 'DeliveryDrone' with two fields: 'title' (String) and 'batteryPct' (int)."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "batteryPct",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Drone Delivery ob'yekt klassi\nclass DeliveryDrone {\n    String title;\n    int batteryPct;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone obj = new DeliveryDrone();\n        obj.title = \"Drone Delivery Birlamchi\";\n        obj.batteryPct = 42;\n        System.out.println(obj.title + \" holati: \" + obj.batteryPct);\n    }\n}",
    "solution": "class DeliveryDrone {\n    String title;\n    int batteryPct;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone obj = new DeliveryDrone();\n        obj.title = \"Drone Delivery Birlamchi\";\n        obj.batteryPct = 42;\n        System.out.println(obj.title + \" holati: \" + obj.batteryPct);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'batteryPct' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'batteryPct' resides in Heap memory per instance.",
      "cleanCode": "class DeliveryDrone {\n    String title;\n    int batteryPct;\n}",
      "breakdown": [
        "<code>class DeliveryDrone { ... }</code>: Drone Delivery ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int batteryPct;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'batteryPct' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "18. Smart Warehouse — 'StorageBay' Klassi va Maydonlari",
      "en": "18. Smart Warehouse — 'StorageBay' Class & State Fields"
    },
    "scenario": {
      "uz": "Smart Warehouse (Robotics) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'StorageBay' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'weightLimitKg' (double) qo'shing.",
      "en": "In Smart Warehouse (Robotics), create a blueprint 'StorageBay' with two fields: 'title' (String) and 'weightLimitKg' (double)."
    },
    "requirements": {
      "classes": [
        "StorageBay"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "weightLimitKg",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Smart Warehouse ob'yekt klassi\nclass StorageBay {\n    String title;\n    double weightLimitKg;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay obj = new StorageBay();\n        obj.title = \"Smart Warehouse Birlamchi\";\n        obj.weightLimitKg = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.weightLimitKg);\n    }\n}",
    "solution": "class StorageBay {\n    String title;\n    double weightLimitKg;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay obj = new StorageBay();\n        obj.title = \"Smart Warehouse Birlamchi\";\n        obj.weightLimitKg = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.weightLimitKg);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'weightLimitKg' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'weightLimitKg' resides in Heap memory per instance.",
      "cleanCode": "class StorageBay {\n    String title;\n    double weightLimitKg;\n}",
      "breakdown": [
        "<code>class StorageBay { ... }</code>: Smart Warehouse ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double weightLimitKg;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'weightLimitKg' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "19. Crypto Wallet — 'CryptoAsset' Klassi va Maydonlari",
      "en": "19. Crypto Wallet — 'CryptoAsset' Class & State Fields"
    },
    "scenario": {
      "uz": "Crypto Wallet (Blockchain) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'CryptoAsset' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'coinUnits' (double) qo'shing.",
      "en": "In Crypto Wallet (Blockchain), create a blueprint 'CryptoAsset' with two fields: 'title' (String) and 'coinUnits' (double)."
    },
    "requirements": {
      "classes": [
        "CryptoAsset"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "coinUnits",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Crypto Wallet ob'yekt klassi\nclass CryptoAsset {\n    String title;\n    double coinUnits;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset obj = new CryptoAsset();\n        obj.title = \"Crypto Wallet Birlamchi\";\n        obj.coinUnits = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.coinUnits);\n    }\n}",
    "solution": "class CryptoAsset {\n    String title;\n    double coinUnits;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset obj = new CryptoAsset();\n        obj.title = \"Crypto Wallet Birlamchi\";\n        obj.coinUnits = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.coinUnits);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'coinUnits' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'coinUnits' resides in Heap memory per instance.",
      "cleanCode": "class CryptoAsset {\n    String title;\n    double coinUnits;\n}",
      "breakdown": [
        "<code>class CryptoAsset { ... }</code>: Crypto Wallet ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double coinUnits;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'coinUnits' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "20. National Library — 'CatalogBook' Klassi va Maydonlari",
      "en": "20. National Library — 'CatalogBook' Class & State Fields"
    },
    "scenario": {
      "uz": "National Library (Archive) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'CatalogBook' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'pageCount' (int) qo'shing.",
      "en": "In National Library (Archive), create a blueprint 'CatalogBook' with two fields: 'title' (String) and 'pageCount' (int)."
    },
    "requirements": {
      "classes": [
        "CatalogBook"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "pageCount",
          "type": "int"
        }
      ]
    },
    "starterCode": "// National Library ob'yekt klassi\nclass CatalogBook {\n    String title;\n    int pageCount;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook obj = new CatalogBook();\n        obj.title = \"National Library Birlamchi\";\n        obj.pageCount = 42;\n        System.out.println(obj.title + \" holati: \" + obj.pageCount);\n    }\n}",
    "solution": "class CatalogBook {\n    String title;\n    int pageCount;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook obj = new CatalogBook();\n        obj.title = \"National Library Birlamchi\";\n        obj.pageCount = 42;\n        System.out.println(obj.title + \" holati: \" + obj.pageCount);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'pageCount' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'pageCount' resides in Heap memory per instance.",
      "cleanCode": "class CatalogBook {\n    String title;\n    int pageCount;\n}",
      "breakdown": [
        "<code>class CatalogBook { ... }</code>: National Library ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int pageCount;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'pageCount' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "21. BeFit Club — 'GymMember' Klassi va Maydonlari",
      "en": "21. BeFit Club — 'GymMember' Class & State Fields"
    },
    "scenario": {
      "uz": "BeFit Club (Fitness) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'GymMember' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'activeMonths' (int) qo'shing.",
      "en": "In BeFit Club (Fitness), create a blueprint 'GymMember' with two fields: 'title' (String) and 'activeMonths' (int)."
    },
    "requirements": {
      "classes": [
        "GymMember"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "activeMonths",
          "type": "int"
        }
      ]
    },
    "starterCode": "// BeFit Club ob'yekt klassi\nclass GymMember {\n    String title;\n    int activeMonths;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember obj = new GymMember();\n        obj.title = \"BeFit Club Birlamchi\";\n        obj.activeMonths = 42;\n        System.out.println(obj.title + \" holati: \" + obj.activeMonths);\n    }\n}",
    "solution": "class GymMember {\n    String title;\n    int activeMonths;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember obj = new GymMember();\n        obj.title = \"BeFit Club Birlamchi\";\n        obj.activeMonths = 42;\n        System.out.println(obj.title + \" holati: \" + obj.activeMonths);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'activeMonths' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'activeMonths' resides in Heap memory per instance.",
      "cleanCode": "class GymMember {\n    String title;\n    int activeMonths;\n}",
      "breakdown": [
        "<code>class GymMember { ... }</code>: BeFit Club ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int activeMonths;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'activeMonths' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "22. Tashkent Parking — 'ParkingBay' Klassi va Maydonlari",
      "en": "22. Tashkent Parking — 'ParkingBay' Class & State Fields"
    },
    "scenario": {
      "uz": "Tashkent Parking (SmartCity) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'ParkingBay' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'hourlyTariff' (double) qo'shing.",
      "en": "In Tashkent Parking (SmartCity), create a blueprint 'ParkingBay' with two fields: 'title' (String) and 'hourlyTariff' (double)."
    },
    "requirements": {
      "classes": [
        "ParkingBay"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "hourlyTariff",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Tashkent Parking ob'yekt klassi\nclass ParkingBay {\n    String title;\n    double hourlyTariff;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay obj = new ParkingBay();\n        obj.title = \"Tashkent Parking Birlamchi\";\n        obj.hourlyTariff = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.hourlyTariff);\n    }\n}",
    "solution": "class ParkingBay {\n    String title;\n    double hourlyTariff;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay obj = new ParkingBay();\n        obj.title = \"Tashkent Parking Birlamchi\";\n        obj.hourlyTariff = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.hourlyTariff);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'hourlyTariff' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'hourlyTariff' resides in Heap memory per instance.",
      "cleanCode": "class ParkingBay {\n    String title;\n    double hourlyTariff;\n}",
      "breakdown": [
        "<code>class ParkingBay { ... }</code>: Tashkent Parking ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double hourlyTariff;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'hourlyTariff' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "23. Medion Clinic — 'PatientRecord' Klassi va Maydonlari",
      "en": "23. Medion Clinic — 'PatientRecord' Class & State Fields"
    },
    "scenario": {
      "uz": "Medion Clinic (Medical) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'PatientRecord' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'pulseRate' (int) qo'shing.",
      "en": "In Medion Clinic (Medical), create a blueprint 'PatientRecord' with two fields: 'title' (String) and 'pulseRate' (int)."
    },
    "requirements": {
      "classes": [
        "PatientRecord"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "pulseRate",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Medion Clinic ob'yekt klassi\nclass PatientRecord {\n    String title;\n    int pulseRate;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord obj = new PatientRecord();\n        obj.title = \"Medion Clinic Birlamchi\";\n        obj.pulseRate = 42;\n        System.out.println(obj.title + \" holati: \" + obj.pulseRate);\n    }\n}",
    "solution": "class PatientRecord {\n    String title;\n    int pulseRate;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord obj = new PatientRecord();\n        obj.title = \"Medion Clinic Birlamchi\";\n        obj.pulseRate = 42;\n        System.out.println(obj.title + \" holati: \" + obj.pulseRate);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'pulseRate' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'pulseRate' resides in Heap memory per instance.",
      "cleanCode": "class PatientRecord {\n    String title;\n    int pulseRate;\n}",
      "breakdown": [
        "<code>class PatientRecord { ... }</code>: Medion Clinic ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int pulseRate;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'pulseRate' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "24. Hyatt Regency — 'HotelReservation' Klassi va Maydonlari",
      "en": "24. Hyatt Regency — 'HotelReservation' Class & State Fields"
    },
    "scenario": {
      "uz": "Hyatt Regency (Hospitality) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'HotelReservation' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'nightlyRate' (double) qo'shing.",
      "en": "In Hyatt Regency (Hospitality), create a blueprint 'HotelReservation' with two fields: 'title' (String) and 'nightlyRate' (double)."
    },
    "requirements": {
      "classes": [
        "HotelReservation"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "nightlyRate",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Hyatt Regency ob'yekt klassi\nclass HotelReservation {\n    String title;\n    double nightlyRate;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation obj = new HotelReservation();\n        obj.title = \"Hyatt Regency Birlamchi\";\n        obj.nightlyRate = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.nightlyRate);\n    }\n}",
    "solution": "class HotelReservation {\n    String title;\n    double nightlyRate;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation obj = new HotelReservation();\n        obj.title = \"Hyatt Regency Birlamchi\";\n        obj.nightlyRate = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.nightlyRate);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'nightlyRate' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'nightlyRate' resides in Heap memory per instance.",
      "cleanCode": "class HotelReservation {\n    String title;\n    double nightlyRate;\n}",
      "breakdown": [
        "<code>class HotelReservation { ... }</code>: Hyatt Regency ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double nightlyRate;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'nightlyRate' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "25. Premier Cinema — 'CinemaTicket' Klassi va Maydonlari",
      "en": "25. Premier Cinema — 'CinemaTicket' Class & State Fields"
    },
    "scenario": {
      "uz": "Premier Cinema (Cinema) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'CinemaTicket' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'hallSeatNo' (int) qo'shing.",
      "en": "In Premier Cinema (Cinema), create a blueprint 'CinemaTicket' with two fields: 'title' (String) and 'hallSeatNo' (int)."
    },
    "requirements": {
      "classes": [
        "CinemaTicket"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "hallSeatNo",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Premier Cinema ob'yekt klassi\nclass CinemaTicket {\n    String title;\n    int hallSeatNo;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket obj = new CinemaTicket();\n        obj.title = \"Premier Cinema Birlamchi\";\n        obj.hallSeatNo = 42;\n        System.out.println(obj.title + \" holati: \" + obj.hallSeatNo);\n    }\n}",
    "solution": "class CinemaTicket {\n    String title;\n    int hallSeatNo;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket obj = new CinemaTicket();\n        obj.title = \"Premier Cinema Birlamchi\";\n        obj.hallSeatNo = 42;\n        System.out.println(obj.title + \" holati: \" + obj.hallSeatNo);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'hallSeatNo' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'hallSeatNo' resides in Heap memory per instance.",
      "cleanCode": "class CinemaTicket {\n    String title;\n    int hallSeatNo;\n}",
      "breakdown": [
        "<code>class CinemaTicket { ... }</code>: Premier Cinema ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int hallSeatNo;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'hallSeatNo' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "26. Yandex Scooter — 'ElectricScooter' Klassi va Maydonlari",
      "en": "26. Yandex Scooter — 'ElectricScooter' Class & State Fields"
    },
    "scenario": {
      "uz": "Yandex Scooter (Mobility) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'ElectricScooter' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'maxSpeedKmh' (double) qo'shing.",
      "en": "In Yandex Scooter (Mobility), create a blueprint 'ElectricScooter' with two fields: 'title' (String) and 'maxSpeedKmh' (double)."
    },
    "requirements": {
      "classes": [
        "ElectricScooter"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "maxSpeedKmh",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Yandex Scooter ob'yekt klassi\nclass ElectricScooter {\n    String title;\n    double maxSpeedKmh;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter obj = new ElectricScooter();\n        obj.title = \"Yandex Scooter Birlamchi\";\n        obj.maxSpeedKmh = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.maxSpeedKmh);\n    }\n}",
    "solution": "class ElectricScooter {\n    String title;\n    double maxSpeedKmh;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter obj = new ElectricScooter();\n        obj.title = \"Yandex Scooter Birlamchi\";\n        obj.maxSpeedKmh = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.maxSpeedKmh);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'maxSpeedKmh' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'maxSpeedKmh' resides in Heap memory per instance.",
      "cleanCode": "class ElectricScooter {\n    String title;\n    double maxSpeedKmh;\n}",
      "breakdown": [
        "<code>class ElectricScooter { ... }</code>: Yandex Scooter ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double maxSpeedKmh;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'maxSpeedKmh' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "27. Weather Network — 'MeteoStation' Klassi va Maydonlari",
      "en": "27. Weather Network — 'MeteoStation' Class & State Fields"
    },
    "scenario": {
      "uz": "Weather Network (Meteo) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'MeteoStation' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'humidityPct' (int) qo'shing.",
      "en": "In Weather Network (Meteo), create a blueprint 'MeteoStation' with two fields: 'title' (String) and 'humidityPct' (int)."
    },
    "requirements": {
      "classes": [
        "MeteoStation"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "humidityPct",
          "type": "int"
        }
      ]
    },
    "starterCode": "// Weather Network ob'yekt klassi\nclass MeteoStation {\n    String title;\n    int humidityPct;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation obj = new MeteoStation();\n        obj.title = \"Weather Network Birlamchi\";\n        obj.humidityPct = 42;\n        System.out.println(obj.title + \" holati: \" + obj.humidityPct);\n    }\n}",
    "solution": "class MeteoStation {\n    String title;\n    int humidityPct;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation obj = new MeteoStation();\n        obj.title = \"Weather Network Birlamchi\";\n        obj.humidityPct = 42;\n        System.out.println(obj.title + \" holati: \" + obj.humidityPct);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'humidityPct' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'humidityPct' resides in Heap memory per instance.",
      "cleanCode": "class MeteoStation {\n    String title;\n    int humidityPct;\n}",
      "breakdown": [
        "<code>class MeteoStation { ... }</code>: Weather Network ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>int humidityPct;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'humidityPct' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "28. OpenMarket Auction — 'AuctionLot' Klassi va Maydonlari",
      "en": "28. OpenMarket Auction — 'AuctionLot' Class & State Fields"
    },
    "scenario": {
      "uz": "OpenMarket Auction (Auction) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'AuctionLot' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'reservePrice' (double) qo'shing.",
      "en": "In OpenMarket Auction (Auction), create a blueprint 'AuctionLot' with two fields: 'title' (String) and 'reservePrice' (double)."
    },
    "requirements": {
      "classes": [
        "AuctionLot"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "reservePrice",
          "type": "double"
        }
      ]
    },
    "starterCode": "// OpenMarket Auction ob'yekt klassi\nclass AuctionLot {\n    String title;\n    double reservePrice;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot obj = new AuctionLot();\n        obj.title = \"OpenMarket Auction Birlamchi\";\n        obj.reservePrice = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.reservePrice);\n    }\n}",
    "solution": "class AuctionLot {\n    String title;\n    double reservePrice;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot obj = new AuctionLot();\n        obj.title = \"OpenMarket Auction Birlamchi\";\n        obj.reservePrice = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.reservePrice);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'reservePrice' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'reservePrice' resides in Heap memory per instance.",
      "cleanCode": "class AuctionLot {\n    String title;\n    double reservePrice;\n}",
      "breakdown": [
        "<code>class AuctionLot { ... }</code>: OpenMarket Auction ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double reservePrice;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'reservePrice' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "29. Solar Energy Grid — 'SolarInverter' Klassi va Maydonlari",
      "en": "29. Solar Energy Grid — 'SolarInverter' Class & State Fields"
    },
    "scenario": {
      "uz": "Solar Energy Grid (CleanTech) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'SolarInverter' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'powerKw' (double) qo'shing.",
      "en": "In Solar Energy Grid (CleanTech), create a blueprint 'SolarInverter' with two fields: 'title' (String) and 'powerKw' (double)."
    },
    "requirements": {
      "classes": [
        "SolarInverter"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "powerKw",
          "type": "double"
        }
      ]
    },
    "starterCode": "// Solar Energy Grid ob'yekt klassi\nclass SolarInverter {\n    String title;\n    double powerKw;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter obj = new SolarInverter();\n        obj.title = \"Solar Energy Grid Birlamchi\";\n        obj.powerKw = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.powerKw);\n    }\n}",
    "solution": "class SolarInverter {\n    String title;\n    double powerKw;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter obj = new SolarInverter();\n        obj.title = \"Solar Energy Grid Birlamchi\";\n        obj.powerKw = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.powerKw);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'powerKw' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'powerKw' resides in Heap memory per instance.",
      "cleanCode": "class SolarInverter {\n    String title;\n    double powerKw;\n}",
      "breakdown": [
        "<code>class SolarInverter { ... }</code>: Solar Energy Grid ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double powerKw;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'powerKw' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar va Maydonlar",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "30. O'zbekiston Temir Yo'llari — 'TrainRoute' Klassi va Maydonlari",
      "en": "30. O'zbekiston Temir Yo'llari — 'TrainRoute' Class & State Fields"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari (Railway) tizimida ob'yektlarni saqlash uchun shablon yaratish zarur. 'TrainRoute' klassini e'lon qiling va unga ikkita maydon: 'title' (String) hamda 'travelDurationHours' (double) qo'shing.",
      "en": "In O'zbekiston Temir Yo'llari (Railway), create a blueprint 'TrainRoute' with two fields: 'title' (String) and 'travelDurationHours' (double)."
    },
    "requirements": {
      "classes": [
        "TrainRoute"
      ],
      "fields": [
        {
          "name": "title",
          "type": "String"
        },
        {
          "name": "travelDurationHours",
          "type": "double"
        }
      ]
    },
    "starterCode": "// O'zbekiston Temir Yo'llari ob'yekt klassi\nclass TrainRoute {\n    String title;\n    double travelDurationHours;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute obj = new TrainRoute();\n        obj.title = \"O'zbekiston Temir Yo'llari Birlamchi\";\n        obj.travelDurationHours = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.travelDurationHours);\n    }\n}",
    "solution": "class TrainRoute {\n    String title;\n    double travelDurationHours;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute obj = new TrainRoute();\n        obj.title = \"O'zbekiston Temir Yo'llari Birlamchi\";\n        obj.travelDurationHours = 150.0;\n        System.out.println(obj.title + \" holati: \" + obj.travelDurationHours);\n    }\n}",
    "detailedSolution": {
      "theory": "Java dasturlash tilida har qanday ma'lumot strukturasi klassdan (chizma) boshlanadi. Heap xotirada joy ajratilganda 'travelDurationHours' maydoni o'z turiga ko'ra birlamchi qiymat oladi.",
      "theoryEn": "In Java, every domain model originates from a class blueprint. The field 'travelDurationHours' resides in Heap memory per instance.",
      "cleanCode": "class TrainRoute {\n    String title;\n    double travelDurationHours;\n}",
      "breakdown": [
        "<code>class TrainRoute { ... }</code>: O'zbekiston Temir Yo'llari ob'yektlari uchun mustaqil model chizmasi.",
        "<code>String title;</code> va <code>double travelDurationHours;</code>: Ob'yektning holatini (state) belgilovchi maydonlar."
      ],
      "pitfalls": "Maydon nomlarini e'lon qilishda katta-kichik harflarga (case-sensitive) e'tibor bering. 'travelDurationHours' o'rniga boshqa nom yozilsa, testdan o'tmaydi.",
      "cw2Tip": "CW2 konsol ilovangizda har bir tovar va xizmat aynan mana shunday aniq maydonlarga ega klass orqali ifodalanadi."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "31. Uzum Market — 'discountOperation' Metodi orqali Amallar",
      "en": "31. Uzum Market — 'discountOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Uzum Market ob'yektining holatini o'zgartirish uchun instans metod kerak. 'Product' klassiga 'public void discountOperation(double delta)' metodini qo'shing va u 'price' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Uzum Market. Implement 'public void discountOperation(double delta)' in 'Product' to update 'price'."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "methods": [
        "discountOperation"
      ]
    },
    "starterCode": "class Product {\n    String title;\n    double price;\n\n    public void discountOperation(double delta) {\n        this.price += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product item = new Product();\n        item.discountOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.price);\n    }\n}",
    "solution": "class Product {\n    String title;\n    double price;\n\n    public void discountOperation(double delta) {\n        this.price += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product item = new Product();\n        item.discountOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.price);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void discountOperation(double delta) {\n    this.price += delta;\n}",
      "breakdown": [
        "<code>discountOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "32. Payme Wallet — 'transferOperation' Metodi orqali Amallar",
      "en": "32. Payme Wallet — 'transferOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Payme Wallet ob'yektining holatini o'zgartirish uchun instans metod kerak. 'WalletUser' klassiga 'public void transferOperation(double delta)' metodini qo'shing va u 'balance' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Payme Wallet. Implement 'public void transferOperation(double delta)' in 'WalletUser' to update 'balance'."
    },
    "requirements": {
      "classes": [
        "WalletUser"
      ],
      "methods": [
        "transferOperation"
      ]
    },
    "starterCode": "class WalletUser {\n    String title;\n    double balance;\n\n    public void transferOperation(double delta) {\n        this.balance += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser item = new WalletUser();\n        item.transferOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.balance);\n    }\n}",
    "solution": "class WalletUser {\n    String title;\n    double balance;\n\n    public void transferOperation(double delta) {\n        this.balance += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser item = new WalletUser();\n        item.transferOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.balance);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void transferOperation(double delta) {\n    this.balance += delta;\n}",
      "breakdown": [
        "<code>transferOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "33. Yandex Go — 'fareOperation' Metodi orqali Amallar",
      "en": "33. Yandex Go — 'fareOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Yandex Go ob'yektining holatini o'zgartirish uchun instans metod kerak. 'TaxiRide' klassiga 'public void fareOperation(double delta)' metodini qo'shing va u 'distanceKm' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Yandex Go. Implement 'public void fareOperation(double delta)' in 'TaxiRide' to update 'distanceKm'."
    },
    "requirements": {
      "classes": [
        "TaxiRide"
      ],
      "methods": [
        "fareOperation"
      ]
    },
    "starterCode": "class TaxiRide {\n    String title;\n    double distanceKm;\n\n    public void fareOperation(double delta) {\n        this.distanceKm += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide item = new TaxiRide();\n        item.fareOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.distanceKm);\n    }\n}",
    "solution": "class TaxiRide {\n    String title;\n    double distanceKm;\n\n    public void fareOperation(double delta) {\n        this.distanceKm += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide item = new TaxiRide();\n        item.fareOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.distanceKm);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void fareOperation(double delta) {\n    this.distanceKm += delta;\n}",
      "breakdown": [
        "<code>fareOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "34. Korzinka Go — 'redeemOperation' Metodi orqali Amallar",
      "en": "34. Korzinka Go — 'redeemOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Korzinka Go ob'yektining holatini o'zgartirish uchun instans metod kerak. 'LoyaltyCard' klassiga 'public void redeemOperation(int delta)' metodini qo'shing va u 'bonusPoints' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Korzinka Go. Implement 'public void redeemOperation(int delta)' in 'LoyaltyCard' to update 'bonusPoints'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard"
      ],
      "methods": [
        "redeemOperation"
      ]
    },
    "starterCode": "class LoyaltyCard {\n    String title;\n    int bonusPoints;\n\n    public void redeemOperation(int delta) {\n        this.bonusPoints += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard item = new LoyaltyCard();\n        item.redeemOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.bonusPoints);\n    }\n}",
    "solution": "class LoyaltyCard {\n    String title;\n    int bonusPoints;\n\n    public void redeemOperation(int delta) {\n        this.bonusPoints += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard item = new LoyaltyCard();\n        item.redeemOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.bonusPoints);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void redeemOperation(int delta) {\n    this.bonusPoints += delta;\n}",
      "breakdown": [
        "<code>redeemOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "35. WIUT Portal — 'gradeOperation' Metodi orqali Amallar",
      "en": "35. WIUT Portal — 'gradeOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "WIUT Portal ob'yektining holatini o'zgartirish uchun instans metod kerak. 'Student' klassiga 'public void gradeOperation(double delta)' metodini qo'shing va u 'gpa' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to WIUT Portal. Implement 'public void gradeOperation(double delta)' in 'Student' to update 'gpa'."
    },
    "requirements": {
      "classes": [
        "Student"
      ],
      "methods": [
        "gradeOperation"
      ]
    },
    "starterCode": "class Student {\n    String title;\n    double gpa;\n\n    public void gradeOperation(double delta) {\n        this.gpa += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student item = new Student();\n        item.gradeOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.gpa);\n    }\n}",
    "solution": "class Student {\n    String title;\n    double gpa;\n\n    public void gradeOperation(double delta) {\n        this.gpa += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student item = new Student();\n        item.gradeOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.gpa);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void gradeOperation(double delta) {\n    this.gpa += delta;\n}",
      "breakdown": [
        "<code>gradeOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "36. Click Pay — 'verifyOperation' Metodi orqali Amallar",
      "en": "36. Click Pay — 'verifyOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Click Pay ob'yektining holatini o'zgartirish uchun instans metod kerak. 'PaymentTxn' klassiga 'public void verifyOperation(double delta)' metodini qo'shing va u 'amount' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Click Pay. Implement 'public void verifyOperation(double delta)' in 'PaymentTxn' to update 'amount'."
    },
    "requirements": {
      "classes": [
        "PaymentTxn"
      ],
      "methods": [
        "verifyOperation"
      ]
    },
    "starterCode": "class PaymentTxn {\n    String title;\n    double amount;\n\n    public void verifyOperation(double delta) {\n        this.amount += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn item = new PaymentTxn();\n        item.verifyOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.amount);\n    }\n}",
    "solution": "class PaymentTxn {\n    String title;\n    double amount;\n\n    public void verifyOperation(double delta) {\n        this.amount += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn item = new PaymentTxn();\n        item.verifyOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.amount);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void verifyOperation(double delta) {\n    this.amount += delta;\n}",
      "breakdown": [
        "<code>verifyOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "37. Telegram Bot — 'forwardOperation' Metodi orqali Amallar",
      "en": "37. Telegram Bot — 'forwardOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Telegram Bot ob'yektining holatini o'zgartirish uchun instans metod kerak. 'BotMessage' klassiga 'public void forwardOperation(long delta)' metodini qo'shing va u 'chatId' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Telegram Bot. Implement 'public void forwardOperation(long delta)' in 'BotMessage' to update 'chatId'."
    },
    "requirements": {
      "classes": [
        "BotMessage"
      ],
      "methods": [
        "forwardOperation"
      ]
    },
    "starterCode": "class BotMessage {\n    String title;\n    long chatId;\n\n    public void forwardOperation(long delta) {\n        this.chatId += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage item = new BotMessage();\n        item.forwardOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.chatId);\n    }\n}",
    "solution": "class BotMessage {\n    String title;\n    long chatId;\n\n    public void forwardOperation(long delta) {\n        this.chatId += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage item = new BotMessage();\n        item.forwardOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.chatId);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void forwardOperation(long delta) {\n    this.chatId += delta;\n}",
      "breakdown": [
        "<code>forwardOperation(long delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "38. UzAirways — 'upgradeOperation' Metodi orqali Amallar",
      "en": "38. UzAirways — 'upgradeOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "UzAirways ob'yektining holatini o'zgartirish uchun instans metod kerak. 'FlightTicket' klassiga 'public void upgradeOperation(double delta)' metodini qo'shing va u 'farePrice' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to UzAirways. Implement 'public void upgradeOperation(double delta)' in 'FlightTicket' to update 'farePrice'."
    },
    "requirements": {
      "classes": [
        "FlightTicket"
      ],
      "methods": [
        "upgradeOperation"
      ]
    },
    "starterCode": "class FlightTicket {\n    String title;\n    double farePrice;\n\n    public void upgradeOperation(double delta) {\n        this.farePrice += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket item = new FlightTicket();\n        item.upgradeOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.farePrice);\n    }\n}",
    "solution": "class FlightTicket {\n    String title;\n    double farePrice;\n\n    public void upgradeOperation(double delta) {\n        this.farePrice += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket item = new FlightTicket();\n        item.upgradeOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.farePrice);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void upgradeOperation(double delta) {\n    this.farePrice += delta;\n}",
      "breakdown": [
        "<code>upgradeOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "39. IT Park Academy — 'enrollOperation' Metodi orqali Amallar",
      "en": "39. IT Park Academy — 'enrollOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "IT Park Academy ob'yektining holatini o'zgartirish uchun instans metod kerak. 'BootcampCourse' klassiga 'public void enrollOperation(int delta)' metodini qo'shing va u 'durationWeeks' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to IT Park Academy. Implement 'public void enrollOperation(int delta)' in 'BootcampCourse' to update 'durationWeeks'."
    },
    "requirements": {
      "classes": [
        "BootcampCourse"
      ],
      "methods": [
        "enrollOperation"
      ]
    },
    "starterCode": "class BootcampCourse {\n    String title;\n    int durationWeeks;\n\n    public void enrollOperation(int delta) {\n        this.durationWeeks += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse item = new BootcampCourse();\n        item.enrollOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.durationWeeks);\n    }\n}",
    "solution": "class BootcampCourse {\n    String title;\n    int durationWeeks;\n\n    public void enrollOperation(int delta) {\n        this.durationWeeks += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse item = new BootcampCourse();\n        item.enrollOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.durationWeeks);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void enrollOperation(int delta) {\n    this.durationWeeks += delta;\n}",
      "breakdown": [
        "<code>enrollOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "40. Anorbank — 'limitOperation' Metodi orqali Amallar",
      "en": "40. Anorbank — 'limitOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Anorbank ob'yektining holatini o'zgartirish uchun instans metod kerak. 'DebitCard' klassiga 'public void limitOperation(double delta)' metodini qo'shing va u 'creditLimit' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Anorbank. Implement 'public void limitOperation(double delta)' in 'DebitCard' to update 'creditLimit'."
    },
    "requirements": {
      "classes": [
        "DebitCard"
      ],
      "methods": [
        "limitOperation"
      ]
    },
    "starterCode": "class DebitCard {\n    String title;\n    double creditLimit;\n\n    public void limitOperation(double delta) {\n        this.creditLimit += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard item = new DebitCard();\n        item.limitOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.creditLimit);\n    }\n}",
    "solution": "class DebitCard {\n    String title;\n    double creditLimit;\n\n    public void limitOperation(double delta) {\n        this.creditLimit += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard item = new DebitCard();\n        item.limitOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.creditLimit);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void limitOperation(double delta) {\n    this.creditLimit += delta;\n}",
      "breakdown": [
        "<code>limitOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "41. Oson Apteka — 'dispenseOperation' Metodi orqali Amallar",
      "en": "41. Oson Apteka — 'dispenseOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Oson Apteka ob'yektining holatini o'zgartirish uchun instans metod kerak. 'Medicine' klassiga 'public void dispenseOperation(int delta)' metodini qo'shing va u 'stockCount' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Oson Apteka. Implement 'public void dispenseOperation(int delta)' in 'Medicine' to update 'stockCount'."
    },
    "requirements": {
      "classes": [
        "Medicine"
      ],
      "methods": [
        "dispenseOperation"
      ]
    },
    "starterCode": "class Medicine {\n    String title;\n    int stockCount;\n\n    public void dispenseOperation(int delta) {\n        this.stockCount += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine item = new Medicine();\n        item.dispenseOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.stockCount);\n    }\n}",
    "solution": "class Medicine {\n    String title;\n    int stockCount;\n\n    public void dispenseOperation(int delta) {\n        this.stockCount += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine item = new Medicine();\n        item.dispenseOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.stockCount);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void dispenseOperation(int delta) {\n    this.stockCount += delta;\n}",
      "breakdown": [
        "<code>dispenseOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "42. Evos FastFood — 'packOperation' Metodi orqali Amallar",
      "en": "42. Evos FastFood — 'packOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Evos FastFood ob'yektining holatini o'zgartirish uchun instans metod kerak. 'FoodOrder' klassiga 'public void packOperation(double delta)' metodini qo'shing va u 'totalSum' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Evos FastFood. Implement 'public void packOperation(double delta)' in 'FoodOrder' to update 'totalSum'."
    },
    "requirements": {
      "classes": [
        "FoodOrder"
      ],
      "methods": [
        "packOperation"
      ]
    },
    "starterCode": "class FoodOrder {\n    String title;\n    double totalSum;\n\n    public void packOperation(double delta) {\n        this.totalSum += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder item = new FoodOrder();\n        item.packOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.totalSum);\n    }\n}",
    "solution": "class FoodOrder {\n    String title;\n    double totalSum;\n\n    public void packOperation(double delta) {\n        this.totalSum += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder item = new FoodOrder();\n        item.packOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.totalSum);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void packOperation(double delta) {\n    this.totalSum += delta;\n}",
      "breakdown": [
        "<code>packOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "43. Bellissimo Pizza — 'bakeOperation' Metodi orqali Amallar",
      "en": "43. Bellissimo Pizza — 'bakeOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Bellissimo Pizza ob'yektining holatini o'zgartirish uchun instans metod kerak. 'PizzaOrder' klassiga 'public void bakeOperation(int delta)' metodini qo'shing va u 'prepTimeMinutes' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Bellissimo Pizza. Implement 'public void bakeOperation(int delta)' in 'PizzaOrder' to update 'prepTimeMinutes'."
    },
    "requirements": {
      "classes": [
        "PizzaOrder"
      ],
      "methods": [
        "bakeOperation"
      ]
    },
    "starterCode": "class PizzaOrder {\n    String title;\n    int prepTimeMinutes;\n\n    public void bakeOperation(int delta) {\n        this.prepTimeMinutes += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder item = new PizzaOrder();\n        item.bakeOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.prepTimeMinutes);\n    }\n}",
    "solution": "class PizzaOrder {\n    String title;\n    int prepTimeMinutes;\n\n    public void bakeOperation(int delta) {\n        this.prepTimeMinutes += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder item = new PizzaOrder();\n        item.bakeOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.prepTimeMinutes);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void bakeOperation(int delta) {\n    this.prepTimeMinutes += delta;\n}",
      "breakdown": [
        "<code>bakeOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "44. Milliy TV — 'airOperation' Metodi orqali Amallar",
      "en": "44. Milliy TV — 'airOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Milliy TV ob'yektining holatini o'zgartirish uchun instans metod kerak. 'BroadcastShow' klassiga 'public void airOperation(double delta)' metodini qo'shing va u 'viewersRating' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Milliy TV. Implement 'public void airOperation(double delta)' in 'BroadcastShow' to update 'viewersRating'."
    },
    "requirements": {
      "classes": [
        "BroadcastShow"
      ],
      "methods": [
        "airOperation"
      ]
    },
    "starterCode": "class BroadcastShow {\n    String title;\n    double viewersRating;\n\n    public void airOperation(double delta) {\n        this.viewersRating += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow item = new BroadcastShow();\n        item.airOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.viewersRating);\n    }\n}",
    "solution": "class BroadcastShow {\n    String title;\n    double viewersRating;\n\n    public void airOperation(double delta) {\n        this.viewersRating += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow item = new BroadcastShow();\n        item.airOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.viewersRating);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void airOperation(double delta) {\n    this.viewersRating += delta;\n}",
      "breakdown": [
        "<code>airOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "45. Spotify Sound — 'streamOperation' Metodi orqali Amallar",
      "en": "45. Spotify Sound — 'streamOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Spotify Sound ob'yektining holatini o'zgartirish uchun instans metod kerak. 'AudioTrack' klassiga 'public void streamOperation(int delta)' metodini qo'shing va u 'durationSec' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Spotify Sound. Implement 'public void streamOperation(int delta)' in 'AudioTrack' to update 'durationSec'."
    },
    "requirements": {
      "classes": [
        "AudioTrack"
      ],
      "methods": [
        "streamOperation"
      ]
    },
    "starterCode": "class AudioTrack {\n    String title;\n    int durationSec;\n\n    public void streamOperation(int delta) {\n        this.durationSec += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack item = new AudioTrack();\n        item.streamOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.durationSec);\n    }\n}",
    "solution": "class AudioTrack {\n    String title;\n    int durationSec;\n\n    public void streamOperation(int delta) {\n        this.durationSec += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack item = new AudioTrack();\n        item.streamOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.durationSec);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void streamOperation(int delta) {\n    this.durationSec += delta;\n}",
      "breakdown": [
        "<code>streamOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "46. Smart Thermostat — 'heatOperation' Metodi orqali Amallar",
      "en": "46. Smart Thermostat — 'heatOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Smart Thermostat ob'yektining holatini o'zgartirish uchun instans metod kerak. 'Thermostat' klassiga 'public void heatOperation(double delta)' metodini qo'shing va u 'targetTemp' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Smart Thermostat. Implement 'public void heatOperation(double delta)' in 'Thermostat' to update 'targetTemp'."
    },
    "requirements": {
      "classes": [
        "Thermostat"
      ],
      "methods": [
        "heatOperation"
      ]
    },
    "starterCode": "class Thermostat {\n    String title;\n    double targetTemp;\n\n    public void heatOperation(double delta) {\n        this.targetTemp += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat item = new Thermostat();\n        item.heatOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.targetTemp);\n    }\n}",
    "solution": "class Thermostat {\n    String title;\n    double targetTemp;\n\n    public void heatOperation(double delta) {\n        this.targetTemp += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat item = new Thermostat();\n        item.heatOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.targetTemp);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void heatOperation(double delta) {\n    this.targetTemp += delta;\n}",
      "breakdown": [
        "<code>heatOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "47. Drone Delivery — 'flyOperation' Metodi orqali Amallar",
      "en": "47. Drone Delivery — 'flyOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Drone Delivery ob'yektining holatini o'zgartirish uchun instans metod kerak. 'DeliveryDrone' klassiga 'public void flyOperation(int delta)' metodini qo'shing va u 'batteryPct' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Drone Delivery. Implement 'public void flyOperation(int delta)' in 'DeliveryDrone' to update 'batteryPct'."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone"
      ],
      "methods": [
        "flyOperation"
      ]
    },
    "starterCode": "class DeliveryDrone {\n    String title;\n    int batteryPct;\n\n    public void flyOperation(int delta) {\n        this.batteryPct += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone item = new DeliveryDrone();\n        item.flyOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.batteryPct);\n    }\n}",
    "solution": "class DeliveryDrone {\n    String title;\n    int batteryPct;\n\n    public void flyOperation(int delta) {\n        this.batteryPct += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone item = new DeliveryDrone();\n        item.flyOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.batteryPct);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void flyOperation(int delta) {\n    this.batteryPct += delta;\n}",
      "breakdown": [
        "<code>flyOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "48. Smart Warehouse — 'loadOperation' Metodi orqali Amallar",
      "en": "48. Smart Warehouse — 'loadOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Smart Warehouse ob'yektining holatini o'zgartirish uchun instans metod kerak. 'StorageBay' klassiga 'public void loadOperation(double delta)' metodini qo'shing va u 'weightLimitKg' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Smart Warehouse. Implement 'public void loadOperation(double delta)' in 'StorageBay' to update 'weightLimitKg'."
    },
    "requirements": {
      "classes": [
        "StorageBay"
      ],
      "methods": [
        "loadOperation"
      ]
    },
    "starterCode": "class StorageBay {\n    String title;\n    double weightLimitKg;\n\n    public void loadOperation(double delta) {\n        this.weightLimitKg += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay item = new StorageBay();\n        item.loadOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.weightLimitKg);\n    }\n}",
    "solution": "class StorageBay {\n    String title;\n    double weightLimitKg;\n\n    public void loadOperation(double delta) {\n        this.weightLimitKg += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay item = new StorageBay();\n        item.loadOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.weightLimitKg);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void loadOperation(double delta) {\n    this.weightLimitKg += delta;\n}",
      "breakdown": [
        "<code>loadOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "49. Crypto Wallet — 'swapOperation' Metodi orqali Amallar",
      "en": "49. Crypto Wallet — 'swapOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Crypto Wallet ob'yektining holatini o'zgartirish uchun instans metod kerak. 'CryptoAsset' klassiga 'public void swapOperation(double delta)' metodini qo'shing va u 'coinUnits' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Crypto Wallet. Implement 'public void swapOperation(double delta)' in 'CryptoAsset' to update 'coinUnits'."
    },
    "requirements": {
      "classes": [
        "CryptoAsset"
      ],
      "methods": [
        "swapOperation"
      ]
    },
    "starterCode": "class CryptoAsset {\n    String title;\n    double coinUnits;\n\n    public void swapOperation(double delta) {\n        this.coinUnits += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset item = new CryptoAsset();\n        item.swapOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.coinUnits);\n    }\n}",
    "solution": "class CryptoAsset {\n    String title;\n    double coinUnits;\n\n    public void swapOperation(double delta) {\n        this.coinUnits += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset item = new CryptoAsset();\n        item.swapOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.coinUnits);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void swapOperation(double delta) {\n    this.coinUnits += delta;\n}",
      "breakdown": [
        "<code>swapOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "50. National Library — 'borrowOperation' Metodi orqali Amallar",
      "en": "50. National Library — 'borrowOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "National Library ob'yektining holatini o'zgartirish uchun instans metod kerak. 'CatalogBook' klassiga 'public void borrowOperation(int delta)' metodini qo'shing va u 'pageCount' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to National Library. Implement 'public void borrowOperation(int delta)' in 'CatalogBook' to update 'pageCount'."
    },
    "requirements": {
      "classes": [
        "CatalogBook"
      ],
      "methods": [
        "borrowOperation"
      ]
    },
    "starterCode": "class CatalogBook {\n    String title;\n    int pageCount;\n\n    public void borrowOperation(int delta) {\n        this.pageCount += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook item = new CatalogBook();\n        item.borrowOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.pageCount);\n    }\n}",
    "solution": "class CatalogBook {\n    String title;\n    int pageCount;\n\n    public void borrowOperation(int delta) {\n        this.pageCount += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook item = new CatalogBook();\n        item.borrowOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.pageCount);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void borrowOperation(int delta) {\n    this.pageCount += delta;\n}",
      "breakdown": [
        "<code>borrowOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "51. BeFit Club — 'checkinOperation' Metodi orqali Amallar",
      "en": "51. BeFit Club — 'checkinOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "BeFit Club ob'yektining holatini o'zgartirish uchun instans metod kerak. 'GymMember' klassiga 'public void checkinOperation(int delta)' metodini qo'shing va u 'activeMonths' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to BeFit Club. Implement 'public void checkinOperation(int delta)' in 'GymMember' to update 'activeMonths'."
    },
    "requirements": {
      "classes": [
        "GymMember"
      ],
      "methods": [
        "checkinOperation"
      ]
    },
    "starterCode": "class GymMember {\n    String title;\n    int activeMonths;\n\n    public void checkinOperation(int delta) {\n        this.activeMonths += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember item = new GymMember();\n        item.checkinOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.activeMonths);\n    }\n}",
    "solution": "class GymMember {\n    String title;\n    int activeMonths;\n\n    public void checkinOperation(int delta) {\n        this.activeMonths += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember item = new GymMember();\n        item.checkinOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.activeMonths);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void checkinOperation(int delta) {\n    this.activeMonths += delta;\n}",
      "breakdown": [
        "<code>checkinOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "52. Tashkent Parking — 'parkOperation' Metodi orqali Amallar",
      "en": "52. Tashkent Parking — 'parkOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Tashkent Parking ob'yektining holatini o'zgartirish uchun instans metod kerak. 'ParkingBay' klassiga 'public void parkOperation(double delta)' metodini qo'shing va u 'hourlyTariff' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Tashkent Parking. Implement 'public void parkOperation(double delta)' in 'ParkingBay' to update 'hourlyTariff'."
    },
    "requirements": {
      "classes": [
        "ParkingBay"
      ],
      "methods": [
        "parkOperation"
      ]
    },
    "starterCode": "class ParkingBay {\n    String title;\n    double hourlyTariff;\n\n    public void parkOperation(double delta) {\n        this.hourlyTariff += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay item = new ParkingBay();\n        item.parkOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.hourlyTariff);\n    }\n}",
    "solution": "class ParkingBay {\n    String title;\n    double hourlyTariff;\n\n    public void parkOperation(double delta) {\n        this.hourlyTariff += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay item = new ParkingBay();\n        item.parkOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.hourlyTariff);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void parkOperation(double delta) {\n    this.hourlyTariff += delta;\n}",
      "breakdown": [
        "<code>parkOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "53. Medion Clinic — 'diagnoseOperation' Metodi orqali Amallar",
      "en": "53. Medion Clinic — 'diagnoseOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Medion Clinic ob'yektining holatini o'zgartirish uchun instans metod kerak. 'PatientRecord' klassiga 'public void diagnoseOperation(int delta)' metodini qo'shing va u 'pulseRate' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Medion Clinic. Implement 'public void diagnoseOperation(int delta)' in 'PatientRecord' to update 'pulseRate'."
    },
    "requirements": {
      "classes": [
        "PatientRecord"
      ],
      "methods": [
        "diagnoseOperation"
      ]
    },
    "starterCode": "class PatientRecord {\n    String title;\n    int pulseRate;\n\n    public void diagnoseOperation(int delta) {\n        this.pulseRate += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord item = new PatientRecord();\n        item.diagnoseOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.pulseRate);\n    }\n}",
    "solution": "class PatientRecord {\n    String title;\n    int pulseRate;\n\n    public void diagnoseOperation(int delta) {\n        this.pulseRate += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord item = new PatientRecord();\n        item.diagnoseOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.pulseRate);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void diagnoseOperation(int delta) {\n    this.pulseRate += delta;\n}",
      "breakdown": [
        "<code>diagnoseOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "54. Hyatt Regency — 'bookOperation' Metodi orqali Amallar",
      "en": "54. Hyatt Regency — 'bookOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Hyatt Regency ob'yektining holatini o'zgartirish uchun instans metod kerak. 'HotelReservation' klassiga 'public void bookOperation(double delta)' metodini qo'shing va u 'nightlyRate' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Hyatt Regency. Implement 'public void bookOperation(double delta)' in 'HotelReservation' to update 'nightlyRate'."
    },
    "requirements": {
      "classes": [
        "HotelReservation"
      ],
      "methods": [
        "bookOperation"
      ]
    },
    "starterCode": "class HotelReservation {\n    String title;\n    double nightlyRate;\n\n    public void bookOperation(double delta) {\n        this.nightlyRate += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation item = new HotelReservation();\n        item.bookOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.nightlyRate);\n    }\n}",
    "solution": "class HotelReservation {\n    String title;\n    double nightlyRate;\n\n    public void bookOperation(double delta) {\n        this.nightlyRate += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation item = new HotelReservation();\n        item.bookOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.nightlyRate);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void bookOperation(double delta) {\n    this.nightlyRate += delta;\n}",
      "breakdown": [
        "<code>bookOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "55. Premier Cinema — 'scanOperation' Metodi orqali Amallar",
      "en": "55. Premier Cinema — 'scanOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Premier Cinema ob'yektining holatini o'zgartirish uchun instans metod kerak. 'CinemaTicket' klassiga 'public void scanOperation(int delta)' metodini qo'shing va u 'hallSeatNo' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Premier Cinema. Implement 'public void scanOperation(int delta)' in 'CinemaTicket' to update 'hallSeatNo'."
    },
    "requirements": {
      "classes": [
        "CinemaTicket"
      ],
      "methods": [
        "scanOperation"
      ]
    },
    "starterCode": "class CinemaTicket {\n    String title;\n    int hallSeatNo;\n\n    public void scanOperation(int delta) {\n        this.hallSeatNo += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket item = new CinemaTicket();\n        item.scanOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.hallSeatNo);\n    }\n}",
    "solution": "class CinemaTicket {\n    String title;\n    int hallSeatNo;\n\n    public void scanOperation(int delta) {\n        this.hallSeatNo += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket item = new CinemaTicket();\n        item.scanOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.hallSeatNo);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void scanOperation(int delta) {\n    this.hallSeatNo += delta;\n}",
      "breakdown": [
        "<code>scanOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "56. Yandex Scooter — 'rideOperation' Metodi orqali Amallar",
      "en": "56. Yandex Scooter — 'rideOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Yandex Scooter ob'yektining holatini o'zgartirish uchun instans metod kerak. 'ElectricScooter' klassiga 'public void rideOperation(double delta)' metodini qo'shing va u 'maxSpeedKmh' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Yandex Scooter. Implement 'public void rideOperation(double delta)' in 'ElectricScooter' to update 'maxSpeedKmh'."
    },
    "requirements": {
      "classes": [
        "ElectricScooter"
      ],
      "methods": [
        "rideOperation"
      ]
    },
    "starterCode": "class ElectricScooter {\n    String title;\n    double maxSpeedKmh;\n\n    public void rideOperation(double delta) {\n        this.maxSpeedKmh += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter item = new ElectricScooter();\n        item.rideOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.maxSpeedKmh);\n    }\n}",
    "solution": "class ElectricScooter {\n    String title;\n    double maxSpeedKmh;\n\n    public void rideOperation(double delta) {\n        this.maxSpeedKmh += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter item = new ElectricScooter();\n        item.rideOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.maxSpeedKmh);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void rideOperation(double delta) {\n    this.maxSpeedKmh += delta;\n}",
      "breakdown": [
        "<code>rideOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "57. Weather Network — 'senseOperation' Metodi orqali Amallar",
      "en": "57. Weather Network — 'senseOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Weather Network ob'yektining holatini o'zgartirish uchun instans metod kerak. 'MeteoStation' klassiga 'public void senseOperation(int delta)' metodini qo'shing va u 'humidityPct' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Weather Network. Implement 'public void senseOperation(int delta)' in 'MeteoStation' to update 'humidityPct'."
    },
    "requirements": {
      "classes": [
        "MeteoStation"
      ],
      "methods": [
        "senseOperation"
      ]
    },
    "starterCode": "class MeteoStation {\n    String title;\n    int humidityPct;\n\n    public void senseOperation(int delta) {\n        this.humidityPct += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation item = new MeteoStation();\n        item.senseOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.humidityPct);\n    }\n}",
    "solution": "class MeteoStation {\n    String title;\n    int humidityPct;\n\n    public void senseOperation(int delta) {\n        this.humidityPct += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation item = new MeteoStation();\n        item.senseOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.humidityPct);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void senseOperation(int delta) {\n    this.humidityPct += delta;\n}",
      "breakdown": [
        "<code>senseOperation(int delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "58. OpenMarket Auction — 'bidOperation' Metodi orqali Amallar",
      "en": "58. OpenMarket Auction — 'bidOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "OpenMarket Auction ob'yektining holatini o'zgartirish uchun instans metod kerak. 'AuctionLot' klassiga 'public void bidOperation(double delta)' metodini qo'shing va u 'reservePrice' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to OpenMarket Auction. Implement 'public void bidOperation(double delta)' in 'AuctionLot' to update 'reservePrice'."
    },
    "requirements": {
      "classes": [
        "AuctionLot"
      ],
      "methods": [
        "bidOperation"
      ]
    },
    "starterCode": "class AuctionLot {\n    String title;\n    double reservePrice;\n\n    public void bidOperation(double delta) {\n        this.reservePrice += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot item = new AuctionLot();\n        item.bidOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.reservePrice);\n    }\n}",
    "solution": "class AuctionLot {\n    String title;\n    double reservePrice;\n\n    public void bidOperation(double delta) {\n        this.reservePrice += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot item = new AuctionLot();\n        item.bidOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.reservePrice);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void bidOperation(double delta) {\n    this.reservePrice += delta;\n}",
      "breakdown": [
        "<code>bidOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "59. Solar Energy Grid — 'generateOperation' Metodi orqali Amallar",
      "en": "59. Solar Energy Grid — 'generateOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "Solar Energy Grid ob'yektining holatini o'zgartirish uchun instans metod kerak. 'SolarInverter' klassiga 'public void generateOperation(double delta)' metodini qo'shing va u 'powerKw' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to Solar Energy Grid. Implement 'public void generateOperation(double delta)' in 'SolarInverter' to update 'powerKw'."
    },
    "requirements": {
      "classes": [
        "SolarInverter"
      ],
      "methods": [
        "generateOperation"
      ]
    },
    "starterCode": "class SolarInverter {\n    String title;\n    double powerKw;\n\n    public void generateOperation(double delta) {\n        this.powerKw += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter item = new SolarInverter();\n        item.generateOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.powerKw);\n    }\n}",
    "solution": "class SolarInverter {\n    String title;\n    double powerKw;\n\n    public void generateOperation(double delta) {\n        this.powerKw += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter item = new SolarInverter();\n        item.generateOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.powerKw);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void generateOperation(double delta) {\n    this.powerKw += delta;\n}",
      "breakdown": [
        "<code>generateOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: Instans Metodlar va Holat O'zgarishi",
    "sector": "Amaliyot",
    "title": {
      "uz": "60. O'zbekiston Temir Yo'llari — 'departOperation' Metodi orqali Amallar",
      "en": "60. O'zbekiston Temir Yo'llari — 'departOperation' Method & Behavior"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari ob'yektining holatini o'zgartirish uchun instans metod kerak. 'TrainRoute' klassiga 'public void departOperation(double delta)' metodini qo'shing va u 'travelDurationHours' maydonini delta miqdorga oshirsin.",
      "en": "Add instance behavior to O'zbekiston Temir Yo'llari. Implement 'public void departOperation(double delta)' in 'TrainRoute' to update 'travelDurationHours'."
    },
    "requirements": {
      "classes": [
        "TrainRoute"
      ],
      "methods": [
        "departOperation"
      ]
    },
    "starterCode": "class TrainRoute {\n    String title;\n    double travelDurationHours;\n\n    public void departOperation(double delta) {\n        this.travelDurationHours += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute item = new TrainRoute();\n        item.departOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.travelDurationHours);\n    }\n}",
    "solution": "class TrainRoute {\n    String title;\n    double travelDurationHours;\n\n    public void departOperation(double delta) {\n        this.travelDurationHours += delta;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute item = new TrainRoute();\n        item.departOperation(10);\n        System.out.println(\"Yangilangan qiymat: \" + item.travelDurationHours);\n    }\n}",
    "detailedSolution": {
      "theory": "Metodlar ob'yektning xatti-harakatini (behavior) belgilaydi. 'this' kalit so'zi aynan metod chaqirilayotgan joriy ob'yekt manziliga ishora qiladi.",
      "theoryEn": "Instance methods encapsulate object behavior. The 'this' keyword unambiguously references the current executing instance on the Heap.",
      "cleanCode": "public void departOperation(double delta) {\n    this.travelDurationHours += delta;\n}",
      "breakdown": [
        "<code>departOperation(double delta)</code>: Tashqaridan argument qabul qilib, ob'yekt ichki holatini xavfsiz o'zgartiradi."
      ],
      "pitfalls": "Agar parametr nomi bilan maydon nomi bir xil bo'lsa (shadowing), 'this' so'zini tushirib qoldirish o'zgaruvchi qiymatini yangilamaydi.",
      "cw2Tip": "CW2 savatchasida tovar sonini oshirish yoki narxni yangilash aynan mana shunday instans metodlar orqali boshqariladi."
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "61. Uzum Market — 'Product' Maxsus Konstruktori",
      "en": "61. Uzum Market — 'Product' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Uzum Market tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'Product(String title, double price)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Uzum Market. Implement parameterized constructor 'Product(String title, double price)'."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "constructors": [
        "Product"
      ]
    },
    "starterCode": "class Product {\n    String title;\n    double price;\n\n    public Product(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product obj = new Product(\"Uzum Market Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.price);\n    }\n}",
    "solution": "class Product {\n    String title;\n    double price;\n\n    public Product(String title, double price) {\n        this.title = title;\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product obj = new Product(\"Uzum Market Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.price);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public Product(String title, double price) {\n    this.title = title;\n    this.price = price;\n}",
      "breakdown": [
        "<code>public Product(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "62. Payme Wallet — 'WalletUser' Maxsus Konstruktori",
      "en": "62. Payme Wallet — 'WalletUser' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Payme Wallet tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'WalletUser(String title, double balance)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Payme Wallet. Implement parameterized constructor 'WalletUser(String title, double balance)'."
    },
    "requirements": {
      "classes": [
        "WalletUser"
      ],
      "constructors": [
        "WalletUser"
      ]
    },
    "starterCode": "class WalletUser {\n    String title;\n    double balance;\n\n    public WalletUser(String title, double balance) {\n        this.title = title;\n        this.balance = balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser obj = new WalletUser(\"Payme Wallet Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.balance);\n    }\n}",
    "solution": "class WalletUser {\n    String title;\n    double balance;\n\n    public WalletUser(String title, double balance) {\n        this.title = title;\n        this.balance = balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser obj = new WalletUser(\"Payme Wallet Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.balance);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public WalletUser(String title, double balance) {\n    this.title = title;\n    this.balance = balance;\n}",
      "breakdown": [
        "<code>public WalletUser(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "63. Yandex Go — 'TaxiRide' Maxsus Konstruktori",
      "en": "63. Yandex Go — 'TaxiRide' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Yandex Go tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'TaxiRide(String title, double distanceKm)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Yandex Go. Implement parameterized constructor 'TaxiRide(String title, double distanceKm)'."
    },
    "requirements": {
      "classes": [
        "TaxiRide"
      ],
      "constructors": [
        "TaxiRide"
      ]
    },
    "starterCode": "class TaxiRide {\n    String title;\n    double distanceKm;\n\n    public TaxiRide(String title, double distanceKm) {\n        this.title = title;\n        this.distanceKm = distanceKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide obj = new TaxiRide(\"Yandex Go Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.distanceKm);\n    }\n}",
    "solution": "class TaxiRide {\n    String title;\n    double distanceKm;\n\n    public TaxiRide(String title, double distanceKm) {\n        this.title = title;\n        this.distanceKm = distanceKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide obj = new TaxiRide(\"Yandex Go Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.distanceKm);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public TaxiRide(String title, double distanceKm) {\n    this.title = title;\n    this.distanceKm = distanceKm;\n}",
      "breakdown": [
        "<code>public TaxiRide(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "64. Korzinka Go — 'LoyaltyCard' Maxsus Konstruktori",
      "en": "64. Korzinka Go — 'LoyaltyCard' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Korzinka Go tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'LoyaltyCard(String title, int bonusPoints)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Korzinka Go. Implement parameterized constructor 'LoyaltyCard(String title, int bonusPoints)'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard"
      ],
      "constructors": [
        "LoyaltyCard"
      ]
    },
    "starterCode": "class LoyaltyCard {\n    String title;\n    int bonusPoints;\n\n    public LoyaltyCard(String title, int bonusPoints) {\n        this.title = title;\n        this.bonusPoints = bonusPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard obj = new LoyaltyCard(\"Korzinka Go Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.bonusPoints);\n    }\n}",
    "solution": "class LoyaltyCard {\n    String title;\n    int bonusPoints;\n\n    public LoyaltyCard(String title, int bonusPoints) {\n        this.title = title;\n        this.bonusPoints = bonusPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard obj = new LoyaltyCard(\"Korzinka Go Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.bonusPoints);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public LoyaltyCard(String title, int bonusPoints) {\n    this.title = title;\n    this.bonusPoints = bonusPoints;\n}",
      "breakdown": [
        "<code>public LoyaltyCard(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "65. WIUT Portal — 'Student' Maxsus Konstruktori",
      "en": "65. WIUT Portal — 'Student' Parameterized Constructor"
    },
    "scenario": {
      "uz": "WIUT Portal tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'Student(String title, double gpa)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in WIUT Portal. Implement parameterized constructor 'Student(String title, double gpa)'."
    },
    "requirements": {
      "classes": [
        "Student"
      ],
      "constructors": [
        "Student"
      ]
    },
    "starterCode": "class Student {\n    String title;\n    double gpa;\n\n    public Student(String title, double gpa) {\n        this.title = title;\n        this.gpa = gpa;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student obj = new Student(\"WIUT Portal Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.gpa);\n    }\n}",
    "solution": "class Student {\n    String title;\n    double gpa;\n\n    public Student(String title, double gpa) {\n        this.title = title;\n        this.gpa = gpa;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student obj = new Student(\"WIUT Portal Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.gpa);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public Student(String title, double gpa) {\n    this.title = title;\n    this.gpa = gpa;\n}",
      "breakdown": [
        "<code>public Student(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "66. Click Pay — 'PaymentTxn' Maxsus Konstruktori",
      "en": "66. Click Pay — 'PaymentTxn' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Click Pay tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'PaymentTxn(String title, double amount)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Click Pay. Implement parameterized constructor 'PaymentTxn(String title, double amount)'."
    },
    "requirements": {
      "classes": [
        "PaymentTxn"
      ],
      "constructors": [
        "PaymentTxn"
      ]
    },
    "starterCode": "class PaymentTxn {\n    String title;\n    double amount;\n\n    public PaymentTxn(String title, double amount) {\n        this.title = title;\n        this.amount = amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn obj = new PaymentTxn(\"Click Pay Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.amount);\n    }\n}",
    "solution": "class PaymentTxn {\n    String title;\n    double amount;\n\n    public PaymentTxn(String title, double amount) {\n        this.title = title;\n        this.amount = amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn obj = new PaymentTxn(\"Click Pay Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.amount);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public PaymentTxn(String title, double amount) {\n    this.title = title;\n    this.amount = amount;\n}",
      "breakdown": [
        "<code>public PaymentTxn(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "67. Telegram Bot — 'BotMessage' Maxsus Konstruktori",
      "en": "67. Telegram Bot — 'BotMessage' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Telegram Bot tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'BotMessage(String title, long chatId)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Telegram Bot. Implement parameterized constructor 'BotMessage(String title, long chatId)'."
    },
    "requirements": {
      "classes": [
        "BotMessage"
      ],
      "constructors": [
        "BotMessage"
      ]
    },
    "starterCode": "class BotMessage {\n    String title;\n    long chatId;\n\n    public BotMessage(String title, long chatId) {\n        this.title = title;\n        this.chatId = chatId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage obj = new BotMessage(\"Telegram Bot Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.chatId);\n    }\n}",
    "solution": "class BotMessage {\n    String title;\n    long chatId;\n\n    public BotMessage(String title, long chatId) {\n        this.title = title;\n        this.chatId = chatId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage obj = new BotMessage(\"Telegram Bot Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.chatId);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public BotMessage(String title, long chatId) {\n    this.title = title;\n    this.chatId = chatId;\n}",
      "breakdown": [
        "<code>public BotMessage(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "68. UzAirways — 'FlightTicket' Maxsus Konstruktori",
      "en": "68. UzAirways — 'FlightTicket' Parameterized Constructor"
    },
    "scenario": {
      "uz": "UzAirways tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'FlightTicket(String title, double farePrice)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in UzAirways. Implement parameterized constructor 'FlightTicket(String title, double farePrice)'."
    },
    "requirements": {
      "classes": [
        "FlightTicket"
      ],
      "constructors": [
        "FlightTicket"
      ]
    },
    "starterCode": "class FlightTicket {\n    String title;\n    double farePrice;\n\n    public FlightTicket(String title, double farePrice) {\n        this.title = title;\n        this.farePrice = farePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket obj = new FlightTicket(\"UzAirways Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.farePrice);\n    }\n}",
    "solution": "class FlightTicket {\n    String title;\n    double farePrice;\n\n    public FlightTicket(String title, double farePrice) {\n        this.title = title;\n        this.farePrice = farePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket obj = new FlightTicket(\"UzAirways Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.farePrice);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public FlightTicket(String title, double farePrice) {\n    this.title = title;\n    this.farePrice = farePrice;\n}",
      "breakdown": [
        "<code>public FlightTicket(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "69. IT Park Academy — 'BootcampCourse' Maxsus Konstruktori",
      "en": "69. IT Park Academy — 'BootcampCourse' Parameterized Constructor"
    },
    "scenario": {
      "uz": "IT Park Academy tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'BootcampCourse(String title, int durationWeeks)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in IT Park Academy. Implement parameterized constructor 'BootcampCourse(String title, int durationWeeks)'."
    },
    "requirements": {
      "classes": [
        "BootcampCourse"
      ],
      "constructors": [
        "BootcampCourse"
      ]
    },
    "starterCode": "class BootcampCourse {\n    String title;\n    int durationWeeks;\n\n    public BootcampCourse(String title, int durationWeeks) {\n        this.title = title;\n        this.durationWeeks = durationWeeks;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse obj = new BootcampCourse(\"IT Park Academy Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.durationWeeks);\n    }\n}",
    "solution": "class BootcampCourse {\n    String title;\n    int durationWeeks;\n\n    public BootcampCourse(String title, int durationWeeks) {\n        this.title = title;\n        this.durationWeeks = durationWeeks;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse obj = new BootcampCourse(\"IT Park Academy Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.durationWeeks);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public BootcampCourse(String title, int durationWeeks) {\n    this.title = title;\n    this.durationWeeks = durationWeeks;\n}",
      "breakdown": [
        "<code>public BootcampCourse(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "70. Anorbank — 'DebitCard' Maxsus Konstruktori",
      "en": "70. Anorbank — 'DebitCard' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Anorbank tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'DebitCard(String title, double creditLimit)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Anorbank. Implement parameterized constructor 'DebitCard(String title, double creditLimit)'."
    },
    "requirements": {
      "classes": [
        "DebitCard"
      ],
      "constructors": [
        "DebitCard"
      ]
    },
    "starterCode": "class DebitCard {\n    String title;\n    double creditLimit;\n\n    public DebitCard(String title, double creditLimit) {\n        this.title = title;\n        this.creditLimit = creditLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard obj = new DebitCard(\"Anorbank Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.creditLimit);\n    }\n}",
    "solution": "class DebitCard {\n    String title;\n    double creditLimit;\n\n    public DebitCard(String title, double creditLimit) {\n        this.title = title;\n        this.creditLimit = creditLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard obj = new DebitCard(\"Anorbank Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.creditLimit);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public DebitCard(String title, double creditLimit) {\n    this.title = title;\n    this.creditLimit = creditLimit;\n}",
      "breakdown": [
        "<code>public DebitCard(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "71. Oson Apteka — 'Medicine' Maxsus Konstruktori",
      "en": "71. Oson Apteka — 'Medicine' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Oson Apteka tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'Medicine(String title, int stockCount)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Oson Apteka. Implement parameterized constructor 'Medicine(String title, int stockCount)'."
    },
    "requirements": {
      "classes": [
        "Medicine"
      ],
      "constructors": [
        "Medicine"
      ]
    },
    "starterCode": "class Medicine {\n    String title;\n    int stockCount;\n\n    public Medicine(String title, int stockCount) {\n        this.title = title;\n        this.stockCount = stockCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine obj = new Medicine(\"Oson Apteka Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.stockCount);\n    }\n}",
    "solution": "class Medicine {\n    String title;\n    int stockCount;\n\n    public Medicine(String title, int stockCount) {\n        this.title = title;\n        this.stockCount = stockCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine obj = new Medicine(\"Oson Apteka Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.stockCount);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public Medicine(String title, int stockCount) {\n    this.title = title;\n    this.stockCount = stockCount;\n}",
      "breakdown": [
        "<code>public Medicine(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "72. Evos FastFood — 'FoodOrder' Maxsus Konstruktori",
      "en": "72. Evos FastFood — 'FoodOrder' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Evos FastFood tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'FoodOrder(String title, double totalSum)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Evos FastFood. Implement parameterized constructor 'FoodOrder(String title, double totalSum)'."
    },
    "requirements": {
      "classes": [
        "FoodOrder"
      ],
      "constructors": [
        "FoodOrder"
      ]
    },
    "starterCode": "class FoodOrder {\n    String title;\n    double totalSum;\n\n    public FoodOrder(String title, double totalSum) {\n        this.title = title;\n        this.totalSum = totalSum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder obj = new FoodOrder(\"Evos FastFood Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.totalSum);\n    }\n}",
    "solution": "class FoodOrder {\n    String title;\n    double totalSum;\n\n    public FoodOrder(String title, double totalSum) {\n        this.title = title;\n        this.totalSum = totalSum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder obj = new FoodOrder(\"Evos FastFood Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.totalSum);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public FoodOrder(String title, double totalSum) {\n    this.title = title;\n    this.totalSum = totalSum;\n}",
      "breakdown": [
        "<code>public FoodOrder(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "73. Bellissimo Pizza — 'PizzaOrder' Maxsus Konstruktori",
      "en": "73. Bellissimo Pizza — 'PizzaOrder' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Bellissimo Pizza tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'PizzaOrder(String title, int prepTimeMinutes)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Bellissimo Pizza. Implement parameterized constructor 'PizzaOrder(String title, int prepTimeMinutes)'."
    },
    "requirements": {
      "classes": [
        "PizzaOrder"
      ],
      "constructors": [
        "PizzaOrder"
      ]
    },
    "starterCode": "class PizzaOrder {\n    String title;\n    int prepTimeMinutes;\n\n    public PizzaOrder(String title, int prepTimeMinutes) {\n        this.title = title;\n        this.prepTimeMinutes = prepTimeMinutes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder obj = new PizzaOrder(\"Bellissimo Pizza Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.prepTimeMinutes);\n    }\n}",
    "solution": "class PizzaOrder {\n    String title;\n    int prepTimeMinutes;\n\n    public PizzaOrder(String title, int prepTimeMinutes) {\n        this.title = title;\n        this.prepTimeMinutes = prepTimeMinutes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder obj = new PizzaOrder(\"Bellissimo Pizza Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.prepTimeMinutes);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public PizzaOrder(String title, int prepTimeMinutes) {\n    this.title = title;\n    this.prepTimeMinutes = prepTimeMinutes;\n}",
      "breakdown": [
        "<code>public PizzaOrder(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "74. Milliy TV — 'BroadcastShow' Maxsus Konstruktori",
      "en": "74. Milliy TV — 'BroadcastShow' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Milliy TV tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'BroadcastShow(String title, double viewersRating)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Milliy TV. Implement parameterized constructor 'BroadcastShow(String title, double viewersRating)'."
    },
    "requirements": {
      "classes": [
        "BroadcastShow"
      ],
      "constructors": [
        "BroadcastShow"
      ]
    },
    "starterCode": "class BroadcastShow {\n    String title;\n    double viewersRating;\n\n    public BroadcastShow(String title, double viewersRating) {\n        this.title = title;\n        this.viewersRating = viewersRating;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow obj = new BroadcastShow(\"Milliy TV Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.viewersRating);\n    }\n}",
    "solution": "class BroadcastShow {\n    String title;\n    double viewersRating;\n\n    public BroadcastShow(String title, double viewersRating) {\n        this.title = title;\n        this.viewersRating = viewersRating;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow obj = new BroadcastShow(\"Milliy TV Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.viewersRating);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public BroadcastShow(String title, double viewersRating) {\n    this.title = title;\n    this.viewersRating = viewersRating;\n}",
      "breakdown": [
        "<code>public BroadcastShow(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "75. Spotify Sound — 'AudioTrack' Maxsus Konstruktori",
      "en": "75. Spotify Sound — 'AudioTrack' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Spotify Sound tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'AudioTrack(String title, int durationSec)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Spotify Sound. Implement parameterized constructor 'AudioTrack(String title, int durationSec)'."
    },
    "requirements": {
      "classes": [
        "AudioTrack"
      ],
      "constructors": [
        "AudioTrack"
      ]
    },
    "starterCode": "class AudioTrack {\n    String title;\n    int durationSec;\n\n    public AudioTrack(String title, int durationSec) {\n        this.title = title;\n        this.durationSec = durationSec;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack obj = new AudioTrack(\"Spotify Sound Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.durationSec);\n    }\n}",
    "solution": "class AudioTrack {\n    String title;\n    int durationSec;\n\n    public AudioTrack(String title, int durationSec) {\n        this.title = title;\n        this.durationSec = durationSec;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack obj = new AudioTrack(\"Spotify Sound Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.durationSec);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public AudioTrack(String title, int durationSec) {\n    this.title = title;\n    this.durationSec = durationSec;\n}",
      "breakdown": [
        "<code>public AudioTrack(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "76. Smart Thermostat — 'Thermostat' Maxsus Konstruktori",
      "en": "76. Smart Thermostat — 'Thermostat' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Smart Thermostat tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'Thermostat(String title, double targetTemp)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Smart Thermostat. Implement parameterized constructor 'Thermostat(String title, double targetTemp)'."
    },
    "requirements": {
      "classes": [
        "Thermostat"
      ],
      "constructors": [
        "Thermostat"
      ]
    },
    "starterCode": "class Thermostat {\n    String title;\n    double targetTemp;\n\n    public Thermostat(String title, double targetTemp) {\n        this.title = title;\n        this.targetTemp = targetTemp;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat obj = new Thermostat(\"Smart Thermostat Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.targetTemp);\n    }\n}",
    "solution": "class Thermostat {\n    String title;\n    double targetTemp;\n\n    public Thermostat(String title, double targetTemp) {\n        this.title = title;\n        this.targetTemp = targetTemp;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat obj = new Thermostat(\"Smart Thermostat Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.targetTemp);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public Thermostat(String title, double targetTemp) {\n    this.title = title;\n    this.targetTemp = targetTemp;\n}",
      "breakdown": [
        "<code>public Thermostat(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "77. Drone Delivery — 'DeliveryDrone' Maxsus Konstruktori",
      "en": "77. Drone Delivery — 'DeliveryDrone' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Drone Delivery tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'DeliveryDrone(String title, int batteryPct)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Drone Delivery. Implement parameterized constructor 'DeliveryDrone(String title, int batteryPct)'."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone"
      ],
      "constructors": [
        "DeliveryDrone"
      ]
    },
    "starterCode": "class DeliveryDrone {\n    String title;\n    int batteryPct;\n\n    public DeliveryDrone(String title, int batteryPct) {\n        this.title = title;\n        this.batteryPct = batteryPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone obj = new DeliveryDrone(\"Drone Delivery Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.batteryPct);\n    }\n}",
    "solution": "class DeliveryDrone {\n    String title;\n    int batteryPct;\n\n    public DeliveryDrone(String title, int batteryPct) {\n        this.title = title;\n        this.batteryPct = batteryPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone obj = new DeliveryDrone(\"Drone Delivery Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.batteryPct);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public DeliveryDrone(String title, int batteryPct) {\n    this.title = title;\n    this.batteryPct = batteryPct;\n}",
      "breakdown": [
        "<code>public DeliveryDrone(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "78. Smart Warehouse — 'StorageBay' Maxsus Konstruktori",
      "en": "78. Smart Warehouse — 'StorageBay' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Smart Warehouse tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'StorageBay(String title, double weightLimitKg)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Smart Warehouse. Implement parameterized constructor 'StorageBay(String title, double weightLimitKg)'."
    },
    "requirements": {
      "classes": [
        "StorageBay"
      ],
      "constructors": [
        "StorageBay"
      ]
    },
    "starterCode": "class StorageBay {\n    String title;\n    double weightLimitKg;\n\n    public StorageBay(String title, double weightLimitKg) {\n        this.title = title;\n        this.weightLimitKg = weightLimitKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay obj = new StorageBay(\"Smart Warehouse Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.weightLimitKg);\n    }\n}",
    "solution": "class StorageBay {\n    String title;\n    double weightLimitKg;\n\n    public StorageBay(String title, double weightLimitKg) {\n        this.title = title;\n        this.weightLimitKg = weightLimitKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay obj = new StorageBay(\"Smart Warehouse Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.weightLimitKg);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public StorageBay(String title, double weightLimitKg) {\n    this.title = title;\n    this.weightLimitKg = weightLimitKg;\n}",
      "breakdown": [
        "<code>public StorageBay(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "79. Crypto Wallet — 'CryptoAsset' Maxsus Konstruktori",
      "en": "79. Crypto Wallet — 'CryptoAsset' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Crypto Wallet tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'CryptoAsset(String title, double coinUnits)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Crypto Wallet. Implement parameterized constructor 'CryptoAsset(String title, double coinUnits)'."
    },
    "requirements": {
      "classes": [
        "CryptoAsset"
      ],
      "constructors": [
        "CryptoAsset"
      ]
    },
    "starterCode": "class CryptoAsset {\n    String title;\n    double coinUnits;\n\n    public CryptoAsset(String title, double coinUnits) {\n        this.title = title;\n        this.coinUnits = coinUnits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset obj = new CryptoAsset(\"Crypto Wallet Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.coinUnits);\n    }\n}",
    "solution": "class CryptoAsset {\n    String title;\n    double coinUnits;\n\n    public CryptoAsset(String title, double coinUnits) {\n        this.title = title;\n        this.coinUnits = coinUnits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset obj = new CryptoAsset(\"Crypto Wallet Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.coinUnits);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public CryptoAsset(String title, double coinUnits) {\n    this.title = title;\n    this.coinUnits = coinUnits;\n}",
      "breakdown": [
        "<code>public CryptoAsset(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "80. National Library — 'CatalogBook' Maxsus Konstruktori",
      "en": "80. National Library — 'CatalogBook' Parameterized Constructor"
    },
    "scenario": {
      "uz": "National Library tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'CatalogBook(String title, int pageCount)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in National Library. Implement parameterized constructor 'CatalogBook(String title, int pageCount)'."
    },
    "requirements": {
      "classes": [
        "CatalogBook"
      ],
      "constructors": [
        "CatalogBook"
      ]
    },
    "starterCode": "class CatalogBook {\n    String title;\n    int pageCount;\n\n    public CatalogBook(String title, int pageCount) {\n        this.title = title;\n        this.pageCount = pageCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook obj = new CatalogBook(\"National Library Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.pageCount);\n    }\n}",
    "solution": "class CatalogBook {\n    String title;\n    int pageCount;\n\n    public CatalogBook(String title, int pageCount) {\n        this.title = title;\n        this.pageCount = pageCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook obj = new CatalogBook(\"National Library Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.pageCount);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public CatalogBook(String title, int pageCount) {\n    this.title = title;\n    this.pageCount = pageCount;\n}",
      "breakdown": [
        "<code>public CatalogBook(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "81. BeFit Club — 'GymMember' Maxsus Konstruktori",
      "en": "81. BeFit Club — 'GymMember' Parameterized Constructor"
    },
    "scenario": {
      "uz": "BeFit Club tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'GymMember(String title, int activeMonths)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in BeFit Club. Implement parameterized constructor 'GymMember(String title, int activeMonths)'."
    },
    "requirements": {
      "classes": [
        "GymMember"
      ],
      "constructors": [
        "GymMember"
      ]
    },
    "starterCode": "class GymMember {\n    String title;\n    int activeMonths;\n\n    public GymMember(String title, int activeMonths) {\n        this.title = title;\n        this.activeMonths = activeMonths;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember obj = new GymMember(\"BeFit Club Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.activeMonths);\n    }\n}",
    "solution": "class GymMember {\n    String title;\n    int activeMonths;\n\n    public GymMember(String title, int activeMonths) {\n        this.title = title;\n        this.activeMonths = activeMonths;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember obj = new GymMember(\"BeFit Club Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.activeMonths);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public GymMember(String title, int activeMonths) {\n    this.title = title;\n    this.activeMonths = activeMonths;\n}",
      "breakdown": [
        "<code>public GymMember(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "82. Tashkent Parking — 'ParkingBay' Maxsus Konstruktori",
      "en": "82. Tashkent Parking — 'ParkingBay' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Tashkent Parking tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'ParkingBay(String title, double hourlyTariff)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Tashkent Parking. Implement parameterized constructor 'ParkingBay(String title, double hourlyTariff)'."
    },
    "requirements": {
      "classes": [
        "ParkingBay"
      ],
      "constructors": [
        "ParkingBay"
      ]
    },
    "starterCode": "class ParkingBay {\n    String title;\n    double hourlyTariff;\n\n    public ParkingBay(String title, double hourlyTariff) {\n        this.title = title;\n        this.hourlyTariff = hourlyTariff;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay obj = new ParkingBay(\"Tashkent Parking Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.hourlyTariff);\n    }\n}",
    "solution": "class ParkingBay {\n    String title;\n    double hourlyTariff;\n\n    public ParkingBay(String title, double hourlyTariff) {\n        this.title = title;\n        this.hourlyTariff = hourlyTariff;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay obj = new ParkingBay(\"Tashkent Parking Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.hourlyTariff);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public ParkingBay(String title, double hourlyTariff) {\n    this.title = title;\n    this.hourlyTariff = hourlyTariff;\n}",
      "breakdown": [
        "<code>public ParkingBay(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "83. Medion Clinic — 'PatientRecord' Maxsus Konstruktori",
      "en": "83. Medion Clinic — 'PatientRecord' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Medion Clinic tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'PatientRecord(String title, int pulseRate)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Medion Clinic. Implement parameterized constructor 'PatientRecord(String title, int pulseRate)'."
    },
    "requirements": {
      "classes": [
        "PatientRecord"
      ],
      "constructors": [
        "PatientRecord"
      ]
    },
    "starterCode": "class PatientRecord {\n    String title;\n    int pulseRate;\n\n    public PatientRecord(String title, int pulseRate) {\n        this.title = title;\n        this.pulseRate = pulseRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord obj = new PatientRecord(\"Medion Clinic Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.pulseRate);\n    }\n}",
    "solution": "class PatientRecord {\n    String title;\n    int pulseRate;\n\n    public PatientRecord(String title, int pulseRate) {\n        this.title = title;\n        this.pulseRate = pulseRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord obj = new PatientRecord(\"Medion Clinic Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.pulseRate);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public PatientRecord(String title, int pulseRate) {\n    this.title = title;\n    this.pulseRate = pulseRate;\n}",
      "breakdown": [
        "<code>public PatientRecord(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "84. Hyatt Regency — 'HotelReservation' Maxsus Konstruktori",
      "en": "84. Hyatt Regency — 'HotelReservation' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Hyatt Regency tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'HotelReservation(String title, double nightlyRate)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Hyatt Regency. Implement parameterized constructor 'HotelReservation(String title, double nightlyRate)'."
    },
    "requirements": {
      "classes": [
        "HotelReservation"
      ],
      "constructors": [
        "HotelReservation"
      ]
    },
    "starterCode": "class HotelReservation {\n    String title;\n    double nightlyRate;\n\n    public HotelReservation(String title, double nightlyRate) {\n        this.title = title;\n        this.nightlyRate = nightlyRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation obj = new HotelReservation(\"Hyatt Regency Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.nightlyRate);\n    }\n}",
    "solution": "class HotelReservation {\n    String title;\n    double nightlyRate;\n\n    public HotelReservation(String title, double nightlyRate) {\n        this.title = title;\n        this.nightlyRate = nightlyRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation obj = new HotelReservation(\"Hyatt Regency Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.nightlyRate);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public HotelReservation(String title, double nightlyRate) {\n    this.title = title;\n    this.nightlyRate = nightlyRate;\n}",
      "breakdown": [
        "<code>public HotelReservation(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "85. Premier Cinema — 'CinemaTicket' Maxsus Konstruktori",
      "en": "85. Premier Cinema — 'CinemaTicket' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Premier Cinema tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'CinemaTicket(String title, int hallSeatNo)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Premier Cinema. Implement parameterized constructor 'CinemaTicket(String title, int hallSeatNo)'."
    },
    "requirements": {
      "classes": [
        "CinemaTicket"
      ],
      "constructors": [
        "CinemaTicket"
      ]
    },
    "starterCode": "class CinemaTicket {\n    String title;\n    int hallSeatNo;\n\n    public CinemaTicket(String title, int hallSeatNo) {\n        this.title = title;\n        this.hallSeatNo = hallSeatNo;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket obj = new CinemaTicket(\"Premier Cinema Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.hallSeatNo);\n    }\n}",
    "solution": "class CinemaTicket {\n    String title;\n    int hallSeatNo;\n\n    public CinemaTicket(String title, int hallSeatNo) {\n        this.title = title;\n        this.hallSeatNo = hallSeatNo;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket obj = new CinemaTicket(\"Premier Cinema Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.hallSeatNo);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public CinemaTicket(String title, int hallSeatNo) {\n    this.title = title;\n    this.hallSeatNo = hallSeatNo;\n}",
      "breakdown": [
        "<code>public CinemaTicket(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "86. Yandex Scooter — 'ElectricScooter' Maxsus Konstruktori",
      "en": "86. Yandex Scooter — 'ElectricScooter' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Yandex Scooter tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'ElectricScooter(String title, double maxSpeedKmh)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Yandex Scooter. Implement parameterized constructor 'ElectricScooter(String title, double maxSpeedKmh)'."
    },
    "requirements": {
      "classes": [
        "ElectricScooter"
      ],
      "constructors": [
        "ElectricScooter"
      ]
    },
    "starterCode": "class ElectricScooter {\n    String title;\n    double maxSpeedKmh;\n\n    public ElectricScooter(String title, double maxSpeedKmh) {\n        this.title = title;\n        this.maxSpeedKmh = maxSpeedKmh;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter obj = new ElectricScooter(\"Yandex Scooter Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.maxSpeedKmh);\n    }\n}",
    "solution": "class ElectricScooter {\n    String title;\n    double maxSpeedKmh;\n\n    public ElectricScooter(String title, double maxSpeedKmh) {\n        this.title = title;\n        this.maxSpeedKmh = maxSpeedKmh;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter obj = new ElectricScooter(\"Yandex Scooter Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.maxSpeedKmh);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public ElectricScooter(String title, double maxSpeedKmh) {\n    this.title = title;\n    this.maxSpeedKmh = maxSpeedKmh;\n}",
      "breakdown": [
        "<code>public ElectricScooter(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "87. Weather Network — 'MeteoStation' Maxsus Konstruktori",
      "en": "87. Weather Network — 'MeteoStation' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Weather Network tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'MeteoStation(String title, int humidityPct)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Weather Network. Implement parameterized constructor 'MeteoStation(String title, int humidityPct)'."
    },
    "requirements": {
      "classes": [
        "MeteoStation"
      ],
      "constructors": [
        "MeteoStation"
      ]
    },
    "starterCode": "class MeteoStation {\n    String title;\n    int humidityPct;\n\n    public MeteoStation(String title, int humidityPct) {\n        this.title = title;\n        this.humidityPct = humidityPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation obj = new MeteoStation(\"Weather Network Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.humidityPct);\n    }\n}",
    "solution": "class MeteoStation {\n    String title;\n    int humidityPct;\n\n    public MeteoStation(String title, int humidityPct) {\n        this.title = title;\n        this.humidityPct = humidityPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation obj = new MeteoStation(\"Weather Network Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.humidityPct);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public MeteoStation(String title, int humidityPct) {\n    this.title = title;\n    this.humidityPct = humidityPct;\n}",
      "breakdown": [
        "<code>public MeteoStation(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "88. OpenMarket Auction — 'AuctionLot' Maxsus Konstruktori",
      "en": "88. OpenMarket Auction — 'AuctionLot' Parameterized Constructor"
    },
    "scenario": {
      "uz": "OpenMarket Auction tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'AuctionLot(String title, double reservePrice)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in OpenMarket Auction. Implement parameterized constructor 'AuctionLot(String title, double reservePrice)'."
    },
    "requirements": {
      "classes": [
        "AuctionLot"
      ],
      "constructors": [
        "AuctionLot"
      ]
    },
    "starterCode": "class AuctionLot {\n    String title;\n    double reservePrice;\n\n    public AuctionLot(String title, double reservePrice) {\n        this.title = title;\n        this.reservePrice = reservePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot obj = new AuctionLot(\"OpenMarket Auction Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.reservePrice);\n    }\n}",
    "solution": "class AuctionLot {\n    String title;\n    double reservePrice;\n\n    public AuctionLot(String title, double reservePrice) {\n        this.title = title;\n        this.reservePrice = reservePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot obj = new AuctionLot(\"OpenMarket Auction Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.reservePrice);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public AuctionLot(String title, double reservePrice) {\n    this.title = title;\n    this.reservePrice = reservePrice;\n}",
      "breakdown": [
        "<code>public AuctionLot(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "89. Solar Energy Grid — 'SolarInverter' Maxsus Konstruktori",
      "en": "89. Solar Energy Grid — 'SolarInverter' Parameterized Constructor"
    },
    "scenario": {
      "uz": "Solar Energy Grid tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'SolarInverter(String title, double powerKw)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in Solar Energy Grid. Implement parameterized constructor 'SolarInverter(String title, double powerKw)'."
    },
    "requirements": {
      "classes": [
        "SolarInverter"
      ],
      "constructors": [
        "SolarInverter"
      ]
    },
    "starterCode": "class SolarInverter {\n    String title;\n    double powerKw;\n\n    public SolarInverter(String title, double powerKw) {\n        this.title = title;\n        this.powerKw = powerKw;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter obj = new SolarInverter(\"Solar Energy Grid Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.powerKw);\n    }\n}",
    "solution": "class SolarInverter {\n    String title;\n    double powerKw;\n\n    public SolarInverter(String title, double powerKw) {\n        this.title = title;\n        this.powerKw = powerKw;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter obj = new SolarInverter(\"Solar Energy Grid Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.powerKw);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public SolarInverter(String title, double powerKw) {\n    this.title = title;\n    this.powerKw = powerKw;\n}",
      "breakdown": [
        "<code>public SolarInverter(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Konstruktorlar va Ob'yekt Hayot Sikli",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "90. O'zbekiston Temir Yo'llari — 'TrainRoute' Maxsus Konstruktori",
      "en": "90. O'zbekiston Temir Yo'llari — 'TrainRoute' Parameterized Constructor"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari tizimida ob'yektlar bo'sh qolib ketmasligi kerak. 'TrainRoute(String title, double travelDurationHours)' maxsus konstruktorini yarating va 'this' kalit so'zi orqali maydonlarni initsializatsiya qiling.",
      "en": "Guarantee consistent initialization in O'zbekiston Temir Yo'llari. Implement parameterized constructor 'TrainRoute(String title, double travelDurationHours)'."
    },
    "requirements": {
      "classes": [
        "TrainRoute"
      ],
      "constructors": [
        "TrainRoute"
      ]
    },
    "starterCode": "class TrainRoute {\n    String title;\n    double travelDurationHours;\n\n    public TrainRoute(String title, double travelDurationHours) {\n        this.title = title;\n        this.travelDurationHours = travelDurationHours;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute obj = new TrainRoute(\"O'zbekiston Temir Yo'llari Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.travelDurationHours);\n    }\n}",
    "solution": "class TrainRoute {\n    String title;\n    double travelDurationHours;\n\n    public TrainRoute(String title, double travelDurationHours) {\n        this.title = title;\n        this.travelDurationHours = travelDurationHours;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute obj = new TrainRoute(\"O'zbekiston Temir Yo'llari Pro\", 75);\n        System.out.println(\"Yaratildi: \" + obj.title + \" -> \" + obj.travelDurationHours);\n    }\n}",
    "detailedSolution": {
      "theory": "Konstruktor — ob'yekt Heap xotirada yaratilayotganda birinchi bo'lib chaqiriluvchi maxsus blokdir. Uning qaytish turi (return type) bo'lmaydi va nomi sinf nomi bilan bir xil bo'ladi.",
      "theoryEn": "A constructor initializes the state of an instance upon Heap instantiation. It carries no return type and mirrors the class identifier.",
      "cleanCode": "public TrainRoute(String title, double travelDurationHours) {\n    this.title = title;\n    this.travelDurationHours = travelDurationHours;\n}",
      "breakdown": [
        "<code>public TrainRoute(...)</code>: Yaratish vaqtida majburiy parametrlarni talab qilish orqali ob'yektning yaroqli holatini ta'minlaydi."
      ],
      "pitfalls": "Maxsus konstruktor yozilganda, Java avtomatik bo'sh konstruktorni (default no-arg constructor) o'chirib yuboradi.",
      "cw2Tip": "Viva savollarida 'Default constructor qachon yo'qoladi?' deb so'raladi: aynan siz bitta bo'lsa ham maxsus konstruktor yozganingizda!"
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "91. Uzum Market — Statik Hisoblagich va ID Generatsiya",
      "en": "91. Uzum Market — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Uzum Market kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'Product' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Uzum Market. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "Product"
      ]
    },
    "starterCode": "class Product {\n    public static int totalCreated = 0;\n    String title;\n\n    public Product(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Product(\"1-Ob'yekt\");\n        new Product(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Product.totalCreated);\n    }\n}",
    "solution": "class Product {\n    public static int totalCreated = 0;\n    String title;\n\n    public Product(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Product(\"1-Ob'yekt\");\n        new Product(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Product.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic Product(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "92. Payme Wallet — Statik Hisoblagich va ID Generatsiya",
      "en": "92. Payme Wallet — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Payme Wallet kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'WalletUser' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Payme Wallet. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "WalletUser"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "WalletUser"
      ]
    },
    "starterCode": "class WalletUser {\n    public static int totalCreated = 0;\n    String title;\n\n    public WalletUser(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new WalletUser(\"1-Ob'yekt\");\n        new WalletUser(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + WalletUser.totalCreated);\n    }\n}",
    "solution": "class WalletUser {\n    public static int totalCreated = 0;\n    String title;\n\n    public WalletUser(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new WalletUser(\"1-Ob'yekt\");\n        new WalletUser(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + WalletUser.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic WalletUser(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "93. Yandex Go — Statik Hisoblagich va ID Generatsiya",
      "en": "93. Yandex Go — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Yandex Go kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'TaxiRide' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Yandex Go. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "TaxiRide"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "TaxiRide"
      ]
    },
    "starterCode": "class TaxiRide {\n    public static int totalCreated = 0;\n    String title;\n\n    public TaxiRide(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new TaxiRide(\"1-Ob'yekt\");\n        new TaxiRide(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + TaxiRide.totalCreated);\n    }\n}",
    "solution": "class TaxiRide {\n    public static int totalCreated = 0;\n    String title;\n\n    public TaxiRide(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new TaxiRide(\"1-Ob'yekt\");\n        new TaxiRide(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + TaxiRide.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic TaxiRide(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "94. Korzinka Go — Statik Hisoblagich va ID Generatsiya",
      "en": "94. Korzinka Go — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Korzinka Go kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'LoyaltyCard' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Korzinka Go. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "LoyaltyCard"
      ]
    },
    "starterCode": "class LoyaltyCard {\n    public static int totalCreated = 0;\n    String title;\n\n    public LoyaltyCard(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new LoyaltyCard(\"1-Ob'yekt\");\n        new LoyaltyCard(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + LoyaltyCard.totalCreated);\n    }\n}",
    "solution": "class LoyaltyCard {\n    public static int totalCreated = 0;\n    String title;\n\n    public LoyaltyCard(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new LoyaltyCard(\"1-Ob'yekt\");\n        new LoyaltyCard(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + LoyaltyCard.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic LoyaltyCard(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "95. WIUT Portal — Statik Hisoblagich va ID Generatsiya",
      "en": "95. WIUT Portal — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "WIUT Portal kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'Student' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in WIUT Portal. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "Student"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "Student"
      ]
    },
    "starterCode": "class Student {\n    public static int totalCreated = 0;\n    String title;\n\n    public Student(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Student(\"1-Ob'yekt\");\n        new Student(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Student.totalCreated);\n    }\n}",
    "solution": "class Student {\n    public static int totalCreated = 0;\n    String title;\n\n    public Student(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Student(\"1-Ob'yekt\");\n        new Student(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Student.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic Student(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "96. Click Pay — Statik Hisoblagich va ID Generatsiya",
      "en": "96. Click Pay — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Click Pay kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'PaymentTxn' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Click Pay. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "PaymentTxn"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "PaymentTxn"
      ]
    },
    "starterCode": "class PaymentTxn {\n    public static int totalCreated = 0;\n    String title;\n\n    public PaymentTxn(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new PaymentTxn(\"1-Ob'yekt\");\n        new PaymentTxn(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + PaymentTxn.totalCreated);\n    }\n}",
    "solution": "class PaymentTxn {\n    public static int totalCreated = 0;\n    String title;\n\n    public PaymentTxn(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new PaymentTxn(\"1-Ob'yekt\");\n        new PaymentTxn(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + PaymentTxn.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic PaymentTxn(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "97. Telegram Bot — Statik Hisoblagich va ID Generatsiya",
      "en": "97. Telegram Bot — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Telegram Bot kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'BotMessage' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Telegram Bot. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "BotMessage"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "BotMessage"
      ]
    },
    "starterCode": "class BotMessage {\n    public static int totalCreated = 0;\n    String title;\n\n    public BotMessage(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new BotMessage(\"1-Ob'yekt\");\n        new BotMessage(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + BotMessage.totalCreated);\n    }\n}",
    "solution": "class BotMessage {\n    public static int totalCreated = 0;\n    String title;\n\n    public BotMessage(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new BotMessage(\"1-Ob'yekt\");\n        new BotMessage(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + BotMessage.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic BotMessage(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "98. UzAirways — Statik Hisoblagich va ID Generatsiya",
      "en": "98. UzAirways — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "UzAirways kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'FlightTicket' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in UzAirways. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "FlightTicket"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "FlightTicket"
      ]
    },
    "starterCode": "class FlightTicket {\n    public static int totalCreated = 0;\n    String title;\n\n    public FlightTicket(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new FlightTicket(\"1-Ob'yekt\");\n        new FlightTicket(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + FlightTicket.totalCreated);\n    }\n}",
    "solution": "class FlightTicket {\n    public static int totalCreated = 0;\n    String title;\n\n    public FlightTicket(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new FlightTicket(\"1-Ob'yekt\");\n        new FlightTicket(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + FlightTicket.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic FlightTicket(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "99. IT Park Academy — Statik Hisoblagich va ID Generatsiya",
      "en": "99. IT Park Academy — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "IT Park Academy kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'BootcampCourse' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in IT Park Academy. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "BootcampCourse"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "BootcampCourse"
      ]
    },
    "starterCode": "class BootcampCourse {\n    public static int totalCreated = 0;\n    String title;\n\n    public BootcampCourse(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new BootcampCourse(\"1-Ob'yekt\");\n        new BootcampCourse(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + BootcampCourse.totalCreated);\n    }\n}",
    "solution": "class BootcampCourse {\n    public static int totalCreated = 0;\n    String title;\n\n    public BootcampCourse(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new BootcampCourse(\"1-Ob'yekt\");\n        new BootcampCourse(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + BootcampCourse.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic BootcampCourse(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "100. Anorbank — Statik Hisoblagich va ID Generatsiya",
      "en": "100. Anorbank — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Anorbank kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'DebitCard' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Anorbank. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "DebitCard"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "DebitCard"
      ]
    },
    "starterCode": "class DebitCard {\n    public static int totalCreated = 0;\n    String title;\n\n    public DebitCard(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new DebitCard(\"1-Ob'yekt\");\n        new DebitCard(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + DebitCard.totalCreated);\n    }\n}",
    "solution": "class DebitCard {\n    public static int totalCreated = 0;\n    String title;\n\n    public DebitCard(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new DebitCard(\"1-Ob'yekt\");\n        new DebitCard(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + DebitCard.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic DebitCard(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "101. Oson Apteka — Statik Hisoblagich va ID Generatsiya",
      "en": "101. Oson Apteka — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Oson Apteka kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'Medicine' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Oson Apteka. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "Medicine"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "Medicine"
      ]
    },
    "starterCode": "class Medicine {\n    public static int totalCreated = 0;\n    String title;\n\n    public Medicine(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Medicine(\"1-Ob'yekt\");\n        new Medicine(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Medicine.totalCreated);\n    }\n}",
    "solution": "class Medicine {\n    public static int totalCreated = 0;\n    String title;\n\n    public Medicine(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Medicine(\"1-Ob'yekt\");\n        new Medicine(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Medicine.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic Medicine(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "102. Evos FastFood — Statik Hisoblagich va ID Generatsiya",
      "en": "102. Evos FastFood — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Evos FastFood kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'FoodOrder' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Evos FastFood. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "FoodOrder"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "FoodOrder"
      ]
    },
    "starterCode": "class FoodOrder {\n    public static int totalCreated = 0;\n    String title;\n\n    public FoodOrder(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new FoodOrder(\"1-Ob'yekt\");\n        new FoodOrder(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + FoodOrder.totalCreated);\n    }\n}",
    "solution": "class FoodOrder {\n    public static int totalCreated = 0;\n    String title;\n\n    public FoodOrder(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new FoodOrder(\"1-Ob'yekt\");\n        new FoodOrder(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + FoodOrder.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic FoodOrder(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "103. Bellissimo Pizza — Statik Hisoblagich va ID Generatsiya",
      "en": "103. Bellissimo Pizza — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Bellissimo Pizza kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'PizzaOrder' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Bellissimo Pizza. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "PizzaOrder"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "PizzaOrder"
      ]
    },
    "starterCode": "class PizzaOrder {\n    public static int totalCreated = 0;\n    String title;\n\n    public PizzaOrder(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new PizzaOrder(\"1-Ob'yekt\");\n        new PizzaOrder(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + PizzaOrder.totalCreated);\n    }\n}",
    "solution": "class PizzaOrder {\n    public static int totalCreated = 0;\n    String title;\n\n    public PizzaOrder(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new PizzaOrder(\"1-Ob'yekt\");\n        new PizzaOrder(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + PizzaOrder.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic PizzaOrder(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "104. Milliy TV — Statik Hisoblagich va ID Generatsiya",
      "en": "104. Milliy TV — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Milliy TV kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'BroadcastShow' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Milliy TV. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "BroadcastShow"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "BroadcastShow"
      ]
    },
    "starterCode": "class BroadcastShow {\n    public static int totalCreated = 0;\n    String title;\n\n    public BroadcastShow(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new BroadcastShow(\"1-Ob'yekt\");\n        new BroadcastShow(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + BroadcastShow.totalCreated);\n    }\n}",
    "solution": "class BroadcastShow {\n    public static int totalCreated = 0;\n    String title;\n\n    public BroadcastShow(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new BroadcastShow(\"1-Ob'yekt\");\n        new BroadcastShow(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + BroadcastShow.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic BroadcastShow(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "105. Spotify Sound — Statik Hisoblagich va ID Generatsiya",
      "en": "105. Spotify Sound — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Spotify Sound kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'AudioTrack' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Spotify Sound. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "AudioTrack"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "AudioTrack"
      ]
    },
    "starterCode": "class AudioTrack {\n    public static int totalCreated = 0;\n    String title;\n\n    public AudioTrack(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new AudioTrack(\"1-Ob'yekt\");\n        new AudioTrack(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + AudioTrack.totalCreated);\n    }\n}",
    "solution": "class AudioTrack {\n    public static int totalCreated = 0;\n    String title;\n\n    public AudioTrack(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new AudioTrack(\"1-Ob'yekt\");\n        new AudioTrack(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + AudioTrack.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic AudioTrack(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "106. Smart Thermostat — Statik Hisoblagich va ID Generatsiya",
      "en": "106. Smart Thermostat — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Smart Thermostat kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'Thermostat' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Smart Thermostat. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "Thermostat"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "Thermostat"
      ]
    },
    "starterCode": "class Thermostat {\n    public static int totalCreated = 0;\n    String title;\n\n    public Thermostat(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Thermostat(\"1-Ob'yekt\");\n        new Thermostat(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Thermostat.totalCreated);\n    }\n}",
    "solution": "class Thermostat {\n    public static int totalCreated = 0;\n    String title;\n\n    public Thermostat(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new Thermostat(\"1-Ob'yekt\");\n        new Thermostat(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + Thermostat.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic Thermostat(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "107. Drone Delivery — Statik Hisoblagich va ID Generatsiya",
      "en": "107. Drone Delivery — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Drone Delivery kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'DeliveryDrone' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Drone Delivery. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "DeliveryDrone"
      ]
    },
    "starterCode": "class DeliveryDrone {\n    public static int totalCreated = 0;\n    String title;\n\n    public DeliveryDrone(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new DeliveryDrone(\"1-Ob'yekt\");\n        new DeliveryDrone(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + DeliveryDrone.totalCreated);\n    }\n}",
    "solution": "class DeliveryDrone {\n    public static int totalCreated = 0;\n    String title;\n\n    public DeliveryDrone(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new DeliveryDrone(\"1-Ob'yekt\");\n        new DeliveryDrone(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + DeliveryDrone.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic DeliveryDrone(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "108. Smart Warehouse — Statik Hisoblagich va ID Generatsiya",
      "en": "108. Smart Warehouse — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Smart Warehouse kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'StorageBay' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Smart Warehouse. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "StorageBay"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "StorageBay"
      ]
    },
    "starterCode": "class StorageBay {\n    public static int totalCreated = 0;\n    String title;\n\n    public StorageBay(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new StorageBay(\"1-Ob'yekt\");\n        new StorageBay(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + StorageBay.totalCreated);\n    }\n}",
    "solution": "class StorageBay {\n    public static int totalCreated = 0;\n    String title;\n\n    public StorageBay(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new StorageBay(\"1-Ob'yekt\");\n        new StorageBay(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + StorageBay.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic StorageBay(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "109. Crypto Wallet — Statik Hisoblagich va ID Generatsiya",
      "en": "109. Crypto Wallet — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Crypto Wallet kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'CryptoAsset' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Crypto Wallet. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "CryptoAsset"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "CryptoAsset"
      ]
    },
    "starterCode": "class CryptoAsset {\n    public static int totalCreated = 0;\n    String title;\n\n    public CryptoAsset(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CryptoAsset(\"1-Ob'yekt\");\n        new CryptoAsset(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + CryptoAsset.totalCreated);\n    }\n}",
    "solution": "class CryptoAsset {\n    public static int totalCreated = 0;\n    String title;\n\n    public CryptoAsset(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CryptoAsset(\"1-Ob'yekt\");\n        new CryptoAsset(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + CryptoAsset.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic CryptoAsset(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "110. National Library — Statik Hisoblagich va ID Generatsiya",
      "en": "110. National Library — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "National Library kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'CatalogBook' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in National Library. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "CatalogBook"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "CatalogBook"
      ]
    },
    "starterCode": "class CatalogBook {\n    public static int totalCreated = 0;\n    String title;\n\n    public CatalogBook(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CatalogBook(\"1-Ob'yekt\");\n        new CatalogBook(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + CatalogBook.totalCreated);\n    }\n}",
    "solution": "class CatalogBook {\n    public static int totalCreated = 0;\n    String title;\n\n    public CatalogBook(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CatalogBook(\"1-Ob'yekt\");\n        new CatalogBook(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + CatalogBook.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic CatalogBook(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "111. BeFit Club — Statik Hisoblagich va ID Generatsiya",
      "en": "111. BeFit Club — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "BeFit Club kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'GymMember' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in BeFit Club. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "GymMember"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "GymMember"
      ]
    },
    "starterCode": "class GymMember {\n    public static int totalCreated = 0;\n    String title;\n\n    public GymMember(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new GymMember(\"1-Ob'yekt\");\n        new GymMember(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + GymMember.totalCreated);\n    }\n}",
    "solution": "class GymMember {\n    public static int totalCreated = 0;\n    String title;\n\n    public GymMember(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new GymMember(\"1-Ob'yekt\");\n        new GymMember(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + GymMember.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic GymMember(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "112. Tashkent Parking — Statik Hisoblagich va ID Generatsiya",
      "en": "112. Tashkent Parking — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Tashkent Parking kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'ParkingBay' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Tashkent Parking. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "ParkingBay"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "ParkingBay"
      ]
    },
    "starterCode": "class ParkingBay {\n    public static int totalCreated = 0;\n    String title;\n\n    public ParkingBay(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new ParkingBay(\"1-Ob'yekt\");\n        new ParkingBay(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + ParkingBay.totalCreated);\n    }\n}",
    "solution": "class ParkingBay {\n    public static int totalCreated = 0;\n    String title;\n\n    public ParkingBay(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new ParkingBay(\"1-Ob'yekt\");\n        new ParkingBay(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + ParkingBay.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic ParkingBay(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "113. Medion Clinic — Statik Hisoblagich va ID Generatsiya",
      "en": "113. Medion Clinic — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Medion Clinic kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'PatientRecord' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Medion Clinic. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "PatientRecord"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "PatientRecord"
      ]
    },
    "starterCode": "class PatientRecord {\n    public static int totalCreated = 0;\n    String title;\n\n    public PatientRecord(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new PatientRecord(\"1-Ob'yekt\");\n        new PatientRecord(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + PatientRecord.totalCreated);\n    }\n}",
    "solution": "class PatientRecord {\n    public static int totalCreated = 0;\n    String title;\n\n    public PatientRecord(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new PatientRecord(\"1-Ob'yekt\");\n        new PatientRecord(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + PatientRecord.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic PatientRecord(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "114. Hyatt Regency — Statik Hisoblagich va ID Generatsiya",
      "en": "114. Hyatt Regency — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Hyatt Regency kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'HotelReservation' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Hyatt Regency. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "HotelReservation"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "HotelReservation"
      ]
    },
    "starterCode": "class HotelReservation {\n    public static int totalCreated = 0;\n    String title;\n\n    public HotelReservation(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new HotelReservation(\"1-Ob'yekt\");\n        new HotelReservation(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + HotelReservation.totalCreated);\n    }\n}",
    "solution": "class HotelReservation {\n    public static int totalCreated = 0;\n    String title;\n\n    public HotelReservation(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new HotelReservation(\"1-Ob'yekt\");\n        new HotelReservation(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + HotelReservation.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic HotelReservation(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "115. Premier Cinema — Statik Hisoblagich va ID Generatsiya",
      "en": "115. Premier Cinema — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Premier Cinema kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'CinemaTicket' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Premier Cinema. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "CinemaTicket"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "CinemaTicket"
      ]
    },
    "starterCode": "class CinemaTicket {\n    public static int totalCreated = 0;\n    String title;\n\n    public CinemaTicket(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CinemaTicket(\"1-Ob'yekt\");\n        new CinemaTicket(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + CinemaTicket.totalCreated);\n    }\n}",
    "solution": "class CinemaTicket {\n    public static int totalCreated = 0;\n    String title;\n\n    public CinemaTicket(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new CinemaTicket(\"1-Ob'yekt\");\n        new CinemaTicket(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + CinemaTicket.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic CinemaTicket(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "116. Yandex Scooter — Statik Hisoblagich va ID Generatsiya",
      "en": "116. Yandex Scooter — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Yandex Scooter kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'ElectricScooter' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Yandex Scooter. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "ElectricScooter"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "ElectricScooter"
      ]
    },
    "starterCode": "class ElectricScooter {\n    public static int totalCreated = 0;\n    String title;\n\n    public ElectricScooter(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new ElectricScooter(\"1-Ob'yekt\");\n        new ElectricScooter(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + ElectricScooter.totalCreated);\n    }\n}",
    "solution": "class ElectricScooter {\n    public static int totalCreated = 0;\n    String title;\n\n    public ElectricScooter(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new ElectricScooter(\"1-Ob'yekt\");\n        new ElectricScooter(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + ElectricScooter.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic ElectricScooter(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "117. Weather Network — Statik Hisoblagich va ID Generatsiya",
      "en": "117. Weather Network — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Weather Network kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'MeteoStation' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Weather Network. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "MeteoStation"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "MeteoStation"
      ]
    },
    "starterCode": "class MeteoStation {\n    public static int totalCreated = 0;\n    String title;\n\n    public MeteoStation(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new MeteoStation(\"1-Ob'yekt\");\n        new MeteoStation(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + MeteoStation.totalCreated);\n    }\n}",
    "solution": "class MeteoStation {\n    public static int totalCreated = 0;\n    String title;\n\n    public MeteoStation(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new MeteoStation(\"1-Ob'yekt\");\n        new MeteoStation(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + MeteoStation.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic MeteoStation(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "118. OpenMarket Auction — Statik Hisoblagich va ID Generatsiya",
      "en": "118. OpenMarket Auction — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "OpenMarket Auction kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'AuctionLot' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in OpenMarket Auction. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "AuctionLot"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "AuctionLot"
      ]
    },
    "starterCode": "class AuctionLot {\n    public static int totalCreated = 0;\n    String title;\n\n    public AuctionLot(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new AuctionLot(\"1-Ob'yekt\");\n        new AuctionLot(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + AuctionLot.totalCreated);\n    }\n}",
    "solution": "class AuctionLot {\n    public static int totalCreated = 0;\n    String title;\n\n    public AuctionLot(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new AuctionLot(\"1-Ob'yekt\");\n        new AuctionLot(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + AuctionLot.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic AuctionLot(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "119. Solar Energy Grid — Statik Hisoblagich va ID Generatsiya",
      "en": "119. Solar Energy Grid — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "Solar Energy Grid kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'SolarInverter' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in Solar Energy Grid. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "SolarInverter"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "SolarInverter"
      ]
    },
    "starterCode": "class SolarInverter {\n    public static int totalCreated = 0;\n    String title;\n\n    public SolarInverter(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new SolarInverter(\"1-Ob'yekt\");\n        new SolarInverter(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + SolarInverter.totalCreated);\n    }\n}",
    "solution": "class SolarInverter {\n    public static int totalCreated = 0;\n    String title;\n\n    public SolarInverter(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new SolarInverter(\"1-Ob'yekt\");\n        new SolarInverter(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + SolarInverter.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic SolarInverter(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: Statik A'zolar va Umumiy Holat",
    "sector": "Arxitektura",
    "title": {
      "uz": "120. O'zbekiston Temir Yo'llari — Statik Hisoblagich va ID Generatsiya",
      "en": "120. O'zbekiston Temir Yo'llari — Static Counter & Global Registry"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari kompaniyasida yaratilgan jami ob'yektlar sonini hisoblash zarur. 'TrainRoute' klassiga 'public static int totalCreated = 0;' maydonini qo'shing va har bir konstruktor ishlaganda uni 1 taga oshiring.",
      "en": "Track global creation in O'zbekiston Temir Yo'llari. Add 'public static int totalCreated = 0;' incremented inside the constructor."
    },
    "requirements": {
      "classes": [
        "TrainRoute"
      ],
      "keywords": [
        "static"
      ],
      "constructors": [
        "TrainRoute"
      ]
    },
    "starterCode": "class TrainRoute {\n    public static int totalCreated = 0;\n    String title;\n\n    public TrainRoute(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new TrainRoute(\"1-Ob'yekt\");\n        new TrainRoute(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + TrainRoute.totalCreated);\n    }\n}",
    "solution": "class TrainRoute {\n    public static int totalCreated = 0;\n    String title;\n\n    public TrainRoute(String title) {\n        this.title = title;\n        totalCreated++;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        new TrainRoute(\"1-Ob'yekt\");\n        new TrainRoute(\"2-Ob'yekt\");\n        System.out.println(\"Jami ob'yektlar soni: \" + TrainRoute.totalCreated);\n    }\n}",
    "detailedSolution": {
      "theory": "'static' maydon ob'yektga emas, balki to'g'ridan-to'g'ri klassning o'ziga tegishlidir. Barcha instanslar bitta umumiy xotira maydonini (Metaspace/Class area) bo'lishadi.",
      "theoryEn": "Static variables belong to the class definition itself in Metaspace, shared uniformly across all heap instances.",
      "cleanCode": "public static int totalCreated = 0;\npublic TrainRoute(String title) {\n    this.title = title;\n    totalCreated++;\n}",
      "breakdown": [
        "<code>public static int totalCreated = 0;</code>: Klass darajasidagi yagona global hisoblagich."
      ],
      "pitfalls": "Statik metodlar ichidan instans o'zgaruvchilarga ('this') murojaat qilib bo'lmaydi, chunki statik kontekstda ob'yekt hali mavjud bo'lmasligi mumkin.",
      "cw2Tip": "CW2 da buyurtma raqamlarini (Order ID: 1001, 1002, 1003...) avtomatik generatsiya qilishda aynan 'static int nextId' ishlatiladi."
    }
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "121. Uzum Market — 'ProductManager' va Massivlar Bilan Ishlash",
      "en": "121. Uzum Market — 'ProductManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Uzum Market ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'ProductManager' klassini yarating va unga 'Product[] items' massivi hamda barcha elementlarning 'price' summasini hisoblovchi 'public double calculateTotalSum(Product[] list)' metodini qo'shing.",
      "en": "Manage collection in Uzum Market. Create 'ProductManager' with 'public double calculateTotalSum(Product[] list)' to sum up 'price'."
    },
    "requirements": {
      "classes": [
        "Product",
        "ProductManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class Product {\n    double price;\n    public Product(double price) {\n        this.price = price;\n    }\n}\n\nclass ProductManager {\n    public double calculateTotalSum(Product[] list) {\n        double sum = 0;\n        for (Product item : list) {\n            if (item != null) sum += item.price;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product[] array = new Product[] { new Product(50.0), new Product(120.0) };\n        ProductManager mgr = new ProductManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class Product {\n    double price;\n    public Product(double price) {\n        this.price = price;\n    }\n}\n\nclass ProductManager {\n    public double calculateTotalSum(Product[] list) {\n        double sum = 0;\n        for (Product item : list) {\n            if (item != null) sum += item.price;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product[] array = new Product[] { new Product(50.0), new Product(120.0) };\n        ProductManager mgr = new ProductManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(Product[] list) {\n    double sum = 0;\n    for (Product item : list) {\n        if (item != null) sum += item.price;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>Product[] array = new Product[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.price' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "122. Payme Wallet — 'WalletUserManager' va Massivlar Bilan Ishlash",
      "en": "122. Payme Wallet — 'WalletUserManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Payme Wallet ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'WalletUserManager' klassini yarating va unga 'WalletUser[] items' massivi hamda barcha elementlarning 'balance' summasini hisoblovchi 'public double calculateTotalSum(WalletUser[] list)' metodini qo'shing.",
      "en": "Manage collection in Payme Wallet. Create 'WalletUserManager' with 'public double calculateTotalSum(WalletUser[] list)' to sum up 'balance'."
    },
    "requirements": {
      "classes": [
        "WalletUser",
        "WalletUserManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class WalletUser {\n    double balance;\n    public WalletUser(double balance) {\n        this.balance = balance;\n    }\n}\n\nclass WalletUserManager {\n    public double calculateTotalSum(WalletUser[] list) {\n        double sum = 0;\n        for (WalletUser item : list) {\n            if (item != null) sum += item.balance;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser[] array = new WalletUser[] { new WalletUser(50.0), new WalletUser(120.0) };\n        WalletUserManager mgr = new WalletUserManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class WalletUser {\n    double balance;\n    public WalletUser(double balance) {\n        this.balance = balance;\n    }\n}\n\nclass WalletUserManager {\n    public double calculateTotalSum(WalletUser[] list) {\n        double sum = 0;\n        for (WalletUser item : list) {\n            if (item != null) sum += item.balance;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser[] array = new WalletUser[] { new WalletUser(50.0), new WalletUser(120.0) };\n        WalletUserManager mgr = new WalletUserManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(WalletUser[] list) {\n    double sum = 0;\n    for (WalletUser item : list) {\n        if (item != null) sum += item.balance;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>WalletUser[] array = new WalletUser[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.balance' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "123. Yandex Go — 'TaxiRideManager' va Massivlar Bilan Ishlash",
      "en": "123. Yandex Go — 'TaxiRideManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Yandex Go ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'TaxiRideManager' klassini yarating va unga 'TaxiRide[] items' massivi hamda barcha elementlarning 'distanceKm' summasini hisoblovchi 'public double calculateTotalSum(TaxiRide[] list)' metodini qo'shing.",
      "en": "Manage collection in Yandex Go. Create 'TaxiRideManager' with 'public double calculateTotalSum(TaxiRide[] list)' to sum up 'distanceKm'."
    },
    "requirements": {
      "classes": [
        "TaxiRide",
        "TaxiRideManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class TaxiRide {\n    double distanceKm;\n    public TaxiRide(double distanceKm) {\n        this.distanceKm = distanceKm;\n    }\n}\n\nclass TaxiRideManager {\n    public double calculateTotalSum(TaxiRide[] list) {\n        double sum = 0;\n        for (TaxiRide item : list) {\n            if (item != null) sum += item.distanceKm;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide[] array = new TaxiRide[] { new TaxiRide(50.0), new TaxiRide(120.0) };\n        TaxiRideManager mgr = new TaxiRideManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class TaxiRide {\n    double distanceKm;\n    public TaxiRide(double distanceKm) {\n        this.distanceKm = distanceKm;\n    }\n}\n\nclass TaxiRideManager {\n    public double calculateTotalSum(TaxiRide[] list) {\n        double sum = 0;\n        for (TaxiRide item : list) {\n            if (item != null) sum += item.distanceKm;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide[] array = new TaxiRide[] { new TaxiRide(50.0), new TaxiRide(120.0) };\n        TaxiRideManager mgr = new TaxiRideManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(TaxiRide[] list) {\n    double sum = 0;\n    for (TaxiRide item : list) {\n        if (item != null) sum += item.distanceKm;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>TaxiRide[] array = new TaxiRide[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.distanceKm' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "124. Korzinka Go — 'LoyaltyCardManager' va Massivlar Bilan Ishlash",
      "en": "124. Korzinka Go — 'LoyaltyCardManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Korzinka Go ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'LoyaltyCardManager' klassini yarating va unga 'LoyaltyCard[] items' massivi hamda barcha elementlarning 'bonusPoints' summasini hisoblovchi 'public double calculateTotalSum(LoyaltyCard[] list)' metodini qo'shing.",
      "en": "Manage collection in Korzinka Go. Create 'LoyaltyCardManager' with 'public double calculateTotalSum(LoyaltyCard[] list)' to sum up 'bonusPoints'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard",
        "LoyaltyCardManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class LoyaltyCard {\n    double bonusPoints;\n    public LoyaltyCard(double bonusPoints) {\n        this.bonusPoints = bonusPoints;\n    }\n}\n\nclass LoyaltyCardManager {\n    public double calculateTotalSum(LoyaltyCard[] list) {\n        double sum = 0;\n        for (LoyaltyCard item : list) {\n            if (item != null) sum += item.bonusPoints;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard[] array = new LoyaltyCard[] { new LoyaltyCard(50.0), new LoyaltyCard(120.0) };\n        LoyaltyCardManager mgr = new LoyaltyCardManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class LoyaltyCard {\n    double bonusPoints;\n    public LoyaltyCard(double bonusPoints) {\n        this.bonusPoints = bonusPoints;\n    }\n}\n\nclass LoyaltyCardManager {\n    public double calculateTotalSum(LoyaltyCard[] list) {\n        double sum = 0;\n        for (LoyaltyCard item : list) {\n            if (item != null) sum += item.bonusPoints;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard[] array = new LoyaltyCard[] { new LoyaltyCard(50.0), new LoyaltyCard(120.0) };\n        LoyaltyCardManager mgr = new LoyaltyCardManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(LoyaltyCard[] list) {\n    double sum = 0;\n    for (LoyaltyCard item : list) {\n        if (item != null) sum += item.bonusPoints;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>LoyaltyCard[] array = new LoyaltyCard[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.bonusPoints' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "125. WIUT Portal — 'StudentManager' va Massivlar Bilan Ishlash",
      "en": "125. WIUT Portal — 'StudentManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "WIUT Portal ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'StudentManager' klassini yarating va unga 'Student[] items' massivi hamda barcha elementlarning 'gpa' summasini hisoblovchi 'public double calculateTotalSum(Student[] list)' metodini qo'shing.",
      "en": "Manage collection in WIUT Portal. Create 'StudentManager' with 'public double calculateTotalSum(Student[] list)' to sum up 'gpa'."
    },
    "requirements": {
      "classes": [
        "Student",
        "StudentManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class Student {\n    double gpa;\n    public Student(double gpa) {\n        this.gpa = gpa;\n    }\n}\n\nclass StudentManager {\n    public double calculateTotalSum(Student[] list) {\n        double sum = 0;\n        for (Student item : list) {\n            if (item != null) sum += item.gpa;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student[] array = new Student[] { new Student(50.0), new Student(120.0) };\n        StudentManager mgr = new StudentManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class Student {\n    double gpa;\n    public Student(double gpa) {\n        this.gpa = gpa;\n    }\n}\n\nclass StudentManager {\n    public double calculateTotalSum(Student[] list) {\n        double sum = 0;\n        for (Student item : list) {\n            if (item != null) sum += item.gpa;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student[] array = new Student[] { new Student(50.0), new Student(120.0) };\n        StudentManager mgr = new StudentManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(Student[] list) {\n    double sum = 0;\n    for (Student item : list) {\n        if (item != null) sum += item.gpa;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>Student[] array = new Student[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.gpa' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "126. Click Pay — 'PaymentTxnManager' va Massivlar Bilan Ishlash",
      "en": "126. Click Pay — 'PaymentTxnManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Click Pay ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'PaymentTxnManager' klassini yarating va unga 'PaymentTxn[] items' massivi hamda barcha elementlarning 'amount' summasini hisoblovchi 'public double calculateTotalSum(PaymentTxn[] list)' metodini qo'shing.",
      "en": "Manage collection in Click Pay. Create 'PaymentTxnManager' with 'public double calculateTotalSum(PaymentTxn[] list)' to sum up 'amount'."
    },
    "requirements": {
      "classes": [
        "PaymentTxn",
        "PaymentTxnManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class PaymentTxn {\n    double amount;\n    public PaymentTxn(double amount) {\n        this.amount = amount;\n    }\n}\n\nclass PaymentTxnManager {\n    public double calculateTotalSum(PaymentTxn[] list) {\n        double sum = 0;\n        for (PaymentTxn item : list) {\n            if (item != null) sum += item.amount;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn[] array = new PaymentTxn[] { new PaymentTxn(50.0), new PaymentTxn(120.0) };\n        PaymentTxnManager mgr = new PaymentTxnManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class PaymentTxn {\n    double amount;\n    public PaymentTxn(double amount) {\n        this.amount = amount;\n    }\n}\n\nclass PaymentTxnManager {\n    public double calculateTotalSum(PaymentTxn[] list) {\n        double sum = 0;\n        for (PaymentTxn item : list) {\n            if (item != null) sum += item.amount;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn[] array = new PaymentTxn[] { new PaymentTxn(50.0), new PaymentTxn(120.0) };\n        PaymentTxnManager mgr = new PaymentTxnManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(PaymentTxn[] list) {\n    double sum = 0;\n    for (PaymentTxn item : list) {\n        if (item != null) sum += item.amount;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>PaymentTxn[] array = new PaymentTxn[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.amount' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "127. Telegram Bot — 'BotMessageManager' va Massivlar Bilan Ishlash",
      "en": "127. Telegram Bot — 'BotMessageManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Telegram Bot ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'BotMessageManager' klassini yarating va unga 'BotMessage[] items' massivi hamda barcha elementlarning 'chatId' summasini hisoblovchi 'public double calculateTotalSum(BotMessage[] list)' metodini qo'shing.",
      "en": "Manage collection in Telegram Bot. Create 'BotMessageManager' with 'public double calculateTotalSum(BotMessage[] list)' to sum up 'chatId'."
    },
    "requirements": {
      "classes": [
        "BotMessage",
        "BotMessageManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class BotMessage {\n    double chatId;\n    public BotMessage(double chatId) {\n        this.chatId = chatId;\n    }\n}\n\nclass BotMessageManager {\n    public double calculateTotalSum(BotMessage[] list) {\n        double sum = 0;\n        for (BotMessage item : list) {\n            if (item != null) sum += item.chatId;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage[] array = new BotMessage[] { new BotMessage(50.0), new BotMessage(120.0) };\n        BotMessageManager mgr = new BotMessageManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class BotMessage {\n    double chatId;\n    public BotMessage(double chatId) {\n        this.chatId = chatId;\n    }\n}\n\nclass BotMessageManager {\n    public double calculateTotalSum(BotMessage[] list) {\n        double sum = 0;\n        for (BotMessage item : list) {\n            if (item != null) sum += item.chatId;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage[] array = new BotMessage[] { new BotMessage(50.0), new BotMessage(120.0) };\n        BotMessageManager mgr = new BotMessageManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(BotMessage[] list) {\n    double sum = 0;\n    for (BotMessage item : list) {\n        if (item != null) sum += item.chatId;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>BotMessage[] array = new BotMessage[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.chatId' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "128. UzAirways — 'FlightTicketManager' va Massivlar Bilan Ishlash",
      "en": "128. UzAirways — 'FlightTicketManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "UzAirways ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'FlightTicketManager' klassini yarating va unga 'FlightTicket[] items' massivi hamda barcha elementlarning 'farePrice' summasini hisoblovchi 'public double calculateTotalSum(FlightTicket[] list)' metodini qo'shing.",
      "en": "Manage collection in UzAirways. Create 'FlightTicketManager' with 'public double calculateTotalSum(FlightTicket[] list)' to sum up 'farePrice'."
    },
    "requirements": {
      "classes": [
        "FlightTicket",
        "FlightTicketManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class FlightTicket {\n    double farePrice;\n    public FlightTicket(double farePrice) {\n        this.farePrice = farePrice;\n    }\n}\n\nclass FlightTicketManager {\n    public double calculateTotalSum(FlightTicket[] list) {\n        double sum = 0;\n        for (FlightTicket item : list) {\n            if (item != null) sum += item.farePrice;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket[] array = new FlightTicket[] { new FlightTicket(50.0), new FlightTicket(120.0) };\n        FlightTicketManager mgr = new FlightTicketManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class FlightTicket {\n    double farePrice;\n    public FlightTicket(double farePrice) {\n        this.farePrice = farePrice;\n    }\n}\n\nclass FlightTicketManager {\n    public double calculateTotalSum(FlightTicket[] list) {\n        double sum = 0;\n        for (FlightTicket item : list) {\n            if (item != null) sum += item.farePrice;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket[] array = new FlightTicket[] { new FlightTicket(50.0), new FlightTicket(120.0) };\n        FlightTicketManager mgr = new FlightTicketManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(FlightTicket[] list) {\n    double sum = 0;\n    for (FlightTicket item : list) {\n        if (item != null) sum += item.farePrice;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>FlightTicket[] array = new FlightTicket[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.farePrice' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "129. IT Park Academy — 'BootcampCourseManager' va Massivlar Bilan Ishlash",
      "en": "129. IT Park Academy — 'BootcampCourseManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "IT Park Academy ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'BootcampCourseManager' klassini yarating va unga 'BootcampCourse[] items' massivi hamda barcha elementlarning 'durationWeeks' summasini hisoblovchi 'public double calculateTotalSum(BootcampCourse[] list)' metodini qo'shing.",
      "en": "Manage collection in IT Park Academy. Create 'BootcampCourseManager' with 'public double calculateTotalSum(BootcampCourse[] list)' to sum up 'durationWeeks'."
    },
    "requirements": {
      "classes": [
        "BootcampCourse",
        "BootcampCourseManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class BootcampCourse {\n    double durationWeeks;\n    public BootcampCourse(double durationWeeks) {\n        this.durationWeeks = durationWeeks;\n    }\n}\n\nclass BootcampCourseManager {\n    public double calculateTotalSum(BootcampCourse[] list) {\n        double sum = 0;\n        for (BootcampCourse item : list) {\n            if (item != null) sum += item.durationWeeks;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse[] array = new BootcampCourse[] { new BootcampCourse(50.0), new BootcampCourse(120.0) };\n        BootcampCourseManager mgr = new BootcampCourseManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class BootcampCourse {\n    double durationWeeks;\n    public BootcampCourse(double durationWeeks) {\n        this.durationWeeks = durationWeeks;\n    }\n}\n\nclass BootcampCourseManager {\n    public double calculateTotalSum(BootcampCourse[] list) {\n        double sum = 0;\n        for (BootcampCourse item : list) {\n            if (item != null) sum += item.durationWeeks;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse[] array = new BootcampCourse[] { new BootcampCourse(50.0), new BootcampCourse(120.0) };\n        BootcampCourseManager mgr = new BootcampCourseManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(BootcampCourse[] list) {\n    double sum = 0;\n    for (BootcampCourse item : list) {\n        if (item != null) sum += item.durationWeeks;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>BootcampCourse[] array = new BootcampCourse[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.durationWeeks' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "130. Anorbank — 'DebitCardManager' va Massivlar Bilan Ishlash",
      "en": "130. Anorbank — 'DebitCardManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Anorbank ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'DebitCardManager' klassini yarating va unga 'DebitCard[] items' massivi hamda barcha elementlarning 'creditLimit' summasini hisoblovchi 'public double calculateTotalSum(DebitCard[] list)' metodini qo'shing.",
      "en": "Manage collection in Anorbank. Create 'DebitCardManager' with 'public double calculateTotalSum(DebitCard[] list)' to sum up 'creditLimit'."
    },
    "requirements": {
      "classes": [
        "DebitCard",
        "DebitCardManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class DebitCard {\n    double creditLimit;\n    public DebitCard(double creditLimit) {\n        this.creditLimit = creditLimit;\n    }\n}\n\nclass DebitCardManager {\n    public double calculateTotalSum(DebitCard[] list) {\n        double sum = 0;\n        for (DebitCard item : list) {\n            if (item != null) sum += item.creditLimit;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard[] array = new DebitCard[] { new DebitCard(50.0), new DebitCard(120.0) };\n        DebitCardManager mgr = new DebitCardManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class DebitCard {\n    double creditLimit;\n    public DebitCard(double creditLimit) {\n        this.creditLimit = creditLimit;\n    }\n}\n\nclass DebitCardManager {\n    public double calculateTotalSum(DebitCard[] list) {\n        double sum = 0;\n        for (DebitCard item : list) {\n            if (item != null) sum += item.creditLimit;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard[] array = new DebitCard[] { new DebitCard(50.0), new DebitCard(120.0) };\n        DebitCardManager mgr = new DebitCardManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(DebitCard[] list) {\n    double sum = 0;\n    for (DebitCard item : list) {\n        if (item != null) sum += item.creditLimit;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>DebitCard[] array = new DebitCard[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.creditLimit' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "131. Oson Apteka — 'MedicineManager' va Massivlar Bilan Ishlash",
      "en": "131. Oson Apteka — 'MedicineManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Oson Apteka ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'MedicineManager' klassini yarating va unga 'Medicine[] items' massivi hamda barcha elementlarning 'stockCount' summasini hisoblovchi 'public double calculateTotalSum(Medicine[] list)' metodini qo'shing.",
      "en": "Manage collection in Oson Apteka. Create 'MedicineManager' with 'public double calculateTotalSum(Medicine[] list)' to sum up 'stockCount'."
    },
    "requirements": {
      "classes": [
        "Medicine",
        "MedicineManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class Medicine {\n    double stockCount;\n    public Medicine(double stockCount) {\n        this.stockCount = stockCount;\n    }\n}\n\nclass MedicineManager {\n    public double calculateTotalSum(Medicine[] list) {\n        double sum = 0;\n        for (Medicine item : list) {\n            if (item != null) sum += item.stockCount;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine[] array = new Medicine[] { new Medicine(50.0), new Medicine(120.0) };\n        MedicineManager mgr = new MedicineManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class Medicine {\n    double stockCount;\n    public Medicine(double stockCount) {\n        this.stockCount = stockCount;\n    }\n}\n\nclass MedicineManager {\n    public double calculateTotalSum(Medicine[] list) {\n        double sum = 0;\n        for (Medicine item : list) {\n            if (item != null) sum += item.stockCount;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine[] array = new Medicine[] { new Medicine(50.0), new Medicine(120.0) };\n        MedicineManager mgr = new MedicineManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(Medicine[] list) {\n    double sum = 0;\n    for (Medicine item : list) {\n        if (item != null) sum += item.stockCount;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>Medicine[] array = new Medicine[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.stockCount' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "132. Evos FastFood — 'FoodOrderManager' va Massivlar Bilan Ishlash",
      "en": "132. Evos FastFood — 'FoodOrderManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Evos FastFood ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'FoodOrderManager' klassini yarating va unga 'FoodOrder[] items' massivi hamda barcha elementlarning 'totalSum' summasini hisoblovchi 'public double calculateTotalSum(FoodOrder[] list)' metodini qo'shing.",
      "en": "Manage collection in Evos FastFood. Create 'FoodOrderManager' with 'public double calculateTotalSum(FoodOrder[] list)' to sum up 'totalSum'."
    },
    "requirements": {
      "classes": [
        "FoodOrder",
        "FoodOrderManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class FoodOrder {\n    double totalSum;\n    public FoodOrder(double totalSum) {\n        this.totalSum = totalSum;\n    }\n}\n\nclass FoodOrderManager {\n    public double calculateTotalSum(FoodOrder[] list) {\n        double sum = 0;\n        for (FoodOrder item : list) {\n            if (item != null) sum += item.totalSum;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder[] array = new FoodOrder[] { new FoodOrder(50.0), new FoodOrder(120.0) };\n        FoodOrderManager mgr = new FoodOrderManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class FoodOrder {\n    double totalSum;\n    public FoodOrder(double totalSum) {\n        this.totalSum = totalSum;\n    }\n}\n\nclass FoodOrderManager {\n    public double calculateTotalSum(FoodOrder[] list) {\n        double sum = 0;\n        for (FoodOrder item : list) {\n            if (item != null) sum += item.totalSum;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder[] array = new FoodOrder[] { new FoodOrder(50.0), new FoodOrder(120.0) };\n        FoodOrderManager mgr = new FoodOrderManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(FoodOrder[] list) {\n    double sum = 0;\n    for (FoodOrder item : list) {\n        if (item != null) sum += item.totalSum;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>FoodOrder[] array = new FoodOrder[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.totalSum' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "133. Bellissimo Pizza — 'PizzaOrderManager' va Massivlar Bilan Ishlash",
      "en": "133. Bellissimo Pizza — 'PizzaOrderManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Bellissimo Pizza ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'PizzaOrderManager' klassini yarating va unga 'PizzaOrder[] items' massivi hamda barcha elementlarning 'prepTimeMinutes' summasini hisoblovchi 'public double calculateTotalSum(PizzaOrder[] list)' metodini qo'shing.",
      "en": "Manage collection in Bellissimo Pizza. Create 'PizzaOrderManager' with 'public double calculateTotalSum(PizzaOrder[] list)' to sum up 'prepTimeMinutes'."
    },
    "requirements": {
      "classes": [
        "PizzaOrder",
        "PizzaOrderManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class PizzaOrder {\n    double prepTimeMinutes;\n    public PizzaOrder(double prepTimeMinutes) {\n        this.prepTimeMinutes = prepTimeMinutes;\n    }\n}\n\nclass PizzaOrderManager {\n    public double calculateTotalSum(PizzaOrder[] list) {\n        double sum = 0;\n        for (PizzaOrder item : list) {\n            if (item != null) sum += item.prepTimeMinutes;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder[] array = new PizzaOrder[] { new PizzaOrder(50.0), new PizzaOrder(120.0) };\n        PizzaOrderManager mgr = new PizzaOrderManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class PizzaOrder {\n    double prepTimeMinutes;\n    public PizzaOrder(double prepTimeMinutes) {\n        this.prepTimeMinutes = prepTimeMinutes;\n    }\n}\n\nclass PizzaOrderManager {\n    public double calculateTotalSum(PizzaOrder[] list) {\n        double sum = 0;\n        for (PizzaOrder item : list) {\n            if (item != null) sum += item.prepTimeMinutes;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder[] array = new PizzaOrder[] { new PizzaOrder(50.0), new PizzaOrder(120.0) };\n        PizzaOrderManager mgr = new PizzaOrderManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(PizzaOrder[] list) {\n    double sum = 0;\n    for (PizzaOrder item : list) {\n        if (item != null) sum += item.prepTimeMinutes;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>PizzaOrder[] array = new PizzaOrder[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.prepTimeMinutes' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "134. Milliy TV — 'BroadcastShowManager' va Massivlar Bilan Ishlash",
      "en": "134. Milliy TV — 'BroadcastShowManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Milliy TV ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'BroadcastShowManager' klassini yarating va unga 'BroadcastShow[] items' massivi hamda barcha elementlarning 'viewersRating' summasini hisoblovchi 'public double calculateTotalSum(BroadcastShow[] list)' metodini qo'shing.",
      "en": "Manage collection in Milliy TV. Create 'BroadcastShowManager' with 'public double calculateTotalSum(BroadcastShow[] list)' to sum up 'viewersRating'."
    },
    "requirements": {
      "classes": [
        "BroadcastShow",
        "BroadcastShowManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class BroadcastShow {\n    double viewersRating;\n    public BroadcastShow(double viewersRating) {\n        this.viewersRating = viewersRating;\n    }\n}\n\nclass BroadcastShowManager {\n    public double calculateTotalSum(BroadcastShow[] list) {\n        double sum = 0;\n        for (BroadcastShow item : list) {\n            if (item != null) sum += item.viewersRating;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow[] array = new BroadcastShow[] { new BroadcastShow(50.0), new BroadcastShow(120.0) };\n        BroadcastShowManager mgr = new BroadcastShowManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class BroadcastShow {\n    double viewersRating;\n    public BroadcastShow(double viewersRating) {\n        this.viewersRating = viewersRating;\n    }\n}\n\nclass BroadcastShowManager {\n    public double calculateTotalSum(BroadcastShow[] list) {\n        double sum = 0;\n        for (BroadcastShow item : list) {\n            if (item != null) sum += item.viewersRating;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow[] array = new BroadcastShow[] { new BroadcastShow(50.0), new BroadcastShow(120.0) };\n        BroadcastShowManager mgr = new BroadcastShowManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(BroadcastShow[] list) {\n    double sum = 0;\n    for (BroadcastShow item : list) {\n        if (item != null) sum += item.viewersRating;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>BroadcastShow[] array = new BroadcastShow[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.viewersRating' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "135. Spotify Sound — 'AudioTrackManager' va Massivlar Bilan Ishlash",
      "en": "135. Spotify Sound — 'AudioTrackManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Spotify Sound ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'AudioTrackManager' klassini yarating va unga 'AudioTrack[] items' massivi hamda barcha elementlarning 'durationSec' summasini hisoblovchi 'public double calculateTotalSum(AudioTrack[] list)' metodini qo'shing.",
      "en": "Manage collection in Spotify Sound. Create 'AudioTrackManager' with 'public double calculateTotalSum(AudioTrack[] list)' to sum up 'durationSec'."
    },
    "requirements": {
      "classes": [
        "AudioTrack",
        "AudioTrackManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class AudioTrack {\n    double durationSec;\n    public AudioTrack(double durationSec) {\n        this.durationSec = durationSec;\n    }\n}\n\nclass AudioTrackManager {\n    public double calculateTotalSum(AudioTrack[] list) {\n        double sum = 0;\n        for (AudioTrack item : list) {\n            if (item != null) sum += item.durationSec;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack[] array = new AudioTrack[] { new AudioTrack(50.0), new AudioTrack(120.0) };\n        AudioTrackManager mgr = new AudioTrackManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class AudioTrack {\n    double durationSec;\n    public AudioTrack(double durationSec) {\n        this.durationSec = durationSec;\n    }\n}\n\nclass AudioTrackManager {\n    public double calculateTotalSum(AudioTrack[] list) {\n        double sum = 0;\n        for (AudioTrack item : list) {\n            if (item != null) sum += item.durationSec;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack[] array = new AudioTrack[] { new AudioTrack(50.0), new AudioTrack(120.0) };\n        AudioTrackManager mgr = new AudioTrackManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(AudioTrack[] list) {\n    double sum = 0;\n    for (AudioTrack item : list) {\n        if (item != null) sum += item.durationSec;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>AudioTrack[] array = new AudioTrack[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.durationSec' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "136. Smart Thermostat — 'ThermostatManager' va Massivlar Bilan Ishlash",
      "en": "136. Smart Thermostat — 'ThermostatManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Smart Thermostat ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'ThermostatManager' klassini yarating va unga 'Thermostat[] items' massivi hamda barcha elementlarning 'targetTemp' summasini hisoblovchi 'public double calculateTotalSum(Thermostat[] list)' metodini qo'shing.",
      "en": "Manage collection in Smart Thermostat. Create 'ThermostatManager' with 'public double calculateTotalSum(Thermostat[] list)' to sum up 'targetTemp'."
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "ThermostatManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class Thermostat {\n    double targetTemp;\n    public Thermostat(double targetTemp) {\n        this.targetTemp = targetTemp;\n    }\n}\n\nclass ThermostatManager {\n    public double calculateTotalSum(Thermostat[] list) {\n        double sum = 0;\n        for (Thermostat item : list) {\n            if (item != null) sum += item.targetTemp;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat[] array = new Thermostat[] { new Thermostat(50.0), new Thermostat(120.0) };\n        ThermostatManager mgr = new ThermostatManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class Thermostat {\n    double targetTemp;\n    public Thermostat(double targetTemp) {\n        this.targetTemp = targetTemp;\n    }\n}\n\nclass ThermostatManager {\n    public double calculateTotalSum(Thermostat[] list) {\n        double sum = 0;\n        for (Thermostat item : list) {\n            if (item != null) sum += item.targetTemp;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat[] array = new Thermostat[] { new Thermostat(50.0), new Thermostat(120.0) };\n        ThermostatManager mgr = new ThermostatManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(Thermostat[] list) {\n    double sum = 0;\n    for (Thermostat item : list) {\n        if (item != null) sum += item.targetTemp;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>Thermostat[] array = new Thermostat[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.targetTemp' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "137. Drone Delivery — 'DeliveryDroneManager' va Massivlar Bilan Ishlash",
      "en": "137. Drone Delivery — 'DeliveryDroneManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Drone Delivery ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'DeliveryDroneManager' klassini yarating va unga 'DeliveryDrone[] items' massivi hamda barcha elementlarning 'batteryPct' summasini hisoblovchi 'public double calculateTotalSum(DeliveryDrone[] list)' metodini qo'shing.",
      "en": "Manage collection in Drone Delivery. Create 'DeliveryDroneManager' with 'public double calculateTotalSum(DeliveryDrone[] list)' to sum up 'batteryPct'."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone",
        "DeliveryDroneManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class DeliveryDrone {\n    double batteryPct;\n    public DeliveryDrone(double batteryPct) {\n        this.batteryPct = batteryPct;\n    }\n}\n\nclass DeliveryDroneManager {\n    public double calculateTotalSum(DeliveryDrone[] list) {\n        double sum = 0;\n        for (DeliveryDrone item : list) {\n            if (item != null) sum += item.batteryPct;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone[] array = new DeliveryDrone[] { new DeliveryDrone(50.0), new DeliveryDrone(120.0) };\n        DeliveryDroneManager mgr = new DeliveryDroneManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class DeliveryDrone {\n    double batteryPct;\n    public DeliveryDrone(double batteryPct) {\n        this.batteryPct = batteryPct;\n    }\n}\n\nclass DeliveryDroneManager {\n    public double calculateTotalSum(DeliveryDrone[] list) {\n        double sum = 0;\n        for (DeliveryDrone item : list) {\n            if (item != null) sum += item.batteryPct;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone[] array = new DeliveryDrone[] { new DeliveryDrone(50.0), new DeliveryDrone(120.0) };\n        DeliveryDroneManager mgr = new DeliveryDroneManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(DeliveryDrone[] list) {\n    double sum = 0;\n    for (DeliveryDrone item : list) {\n        if (item != null) sum += item.batteryPct;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>DeliveryDrone[] array = new DeliveryDrone[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.batteryPct' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "138. Smart Warehouse — 'StorageBayManager' va Massivlar Bilan Ishlash",
      "en": "138. Smart Warehouse — 'StorageBayManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Smart Warehouse ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'StorageBayManager' klassini yarating va unga 'StorageBay[] items' massivi hamda barcha elementlarning 'weightLimitKg' summasini hisoblovchi 'public double calculateTotalSum(StorageBay[] list)' metodini qo'shing.",
      "en": "Manage collection in Smart Warehouse. Create 'StorageBayManager' with 'public double calculateTotalSum(StorageBay[] list)' to sum up 'weightLimitKg'."
    },
    "requirements": {
      "classes": [
        "StorageBay",
        "StorageBayManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class StorageBay {\n    double weightLimitKg;\n    public StorageBay(double weightLimitKg) {\n        this.weightLimitKg = weightLimitKg;\n    }\n}\n\nclass StorageBayManager {\n    public double calculateTotalSum(StorageBay[] list) {\n        double sum = 0;\n        for (StorageBay item : list) {\n            if (item != null) sum += item.weightLimitKg;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay[] array = new StorageBay[] { new StorageBay(50.0), new StorageBay(120.0) };\n        StorageBayManager mgr = new StorageBayManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class StorageBay {\n    double weightLimitKg;\n    public StorageBay(double weightLimitKg) {\n        this.weightLimitKg = weightLimitKg;\n    }\n}\n\nclass StorageBayManager {\n    public double calculateTotalSum(StorageBay[] list) {\n        double sum = 0;\n        for (StorageBay item : list) {\n            if (item != null) sum += item.weightLimitKg;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay[] array = new StorageBay[] { new StorageBay(50.0), new StorageBay(120.0) };\n        StorageBayManager mgr = new StorageBayManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(StorageBay[] list) {\n    double sum = 0;\n    for (StorageBay item : list) {\n        if (item != null) sum += item.weightLimitKg;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>StorageBay[] array = new StorageBay[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.weightLimitKg' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "139. Crypto Wallet — 'CryptoAssetManager' va Massivlar Bilan Ishlash",
      "en": "139. Crypto Wallet — 'CryptoAssetManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Crypto Wallet ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'CryptoAssetManager' klassini yarating va unga 'CryptoAsset[] items' massivi hamda barcha elementlarning 'coinUnits' summasini hisoblovchi 'public double calculateTotalSum(CryptoAsset[] list)' metodini qo'shing.",
      "en": "Manage collection in Crypto Wallet. Create 'CryptoAssetManager' with 'public double calculateTotalSum(CryptoAsset[] list)' to sum up 'coinUnits'."
    },
    "requirements": {
      "classes": [
        "CryptoAsset",
        "CryptoAssetManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class CryptoAsset {\n    double coinUnits;\n    public CryptoAsset(double coinUnits) {\n        this.coinUnits = coinUnits;\n    }\n}\n\nclass CryptoAssetManager {\n    public double calculateTotalSum(CryptoAsset[] list) {\n        double sum = 0;\n        for (CryptoAsset item : list) {\n            if (item != null) sum += item.coinUnits;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset[] array = new CryptoAsset[] { new CryptoAsset(50.0), new CryptoAsset(120.0) };\n        CryptoAssetManager mgr = new CryptoAssetManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class CryptoAsset {\n    double coinUnits;\n    public CryptoAsset(double coinUnits) {\n        this.coinUnits = coinUnits;\n    }\n}\n\nclass CryptoAssetManager {\n    public double calculateTotalSum(CryptoAsset[] list) {\n        double sum = 0;\n        for (CryptoAsset item : list) {\n            if (item != null) sum += item.coinUnits;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset[] array = new CryptoAsset[] { new CryptoAsset(50.0), new CryptoAsset(120.0) };\n        CryptoAssetManager mgr = new CryptoAssetManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(CryptoAsset[] list) {\n    double sum = 0;\n    for (CryptoAsset item : list) {\n        if (item != null) sum += item.coinUnits;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>CryptoAsset[] array = new CryptoAsset[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.coinUnits' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "140. National Library — 'CatalogBookManager' va Massivlar Bilan Ishlash",
      "en": "140. National Library — 'CatalogBookManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "National Library ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'CatalogBookManager' klassini yarating va unga 'CatalogBook[] items' massivi hamda barcha elementlarning 'pageCount' summasini hisoblovchi 'public double calculateTotalSum(CatalogBook[] list)' metodini qo'shing.",
      "en": "Manage collection in National Library. Create 'CatalogBookManager' with 'public double calculateTotalSum(CatalogBook[] list)' to sum up 'pageCount'."
    },
    "requirements": {
      "classes": [
        "CatalogBook",
        "CatalogBookManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class CatalogBook {\n    double pageCount;\n    public CatalogBook(double pageCount) {\n        this.pageCount = pageCount;\n    }\n}\n\nclass CatalogBookManager {\n    public double calculateTotalSum(CatalogBook[] list) {\n        double sum = 0;\n        for (CatalogBook item : list) {\n            if (item != null) sum += item.pageCount;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook[] array = new CatalogBook[] { new CatalogBook(50.0), new CatalogBook(120.0) };\n        CatalogBookManager mgr = new CatalogBookManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class CatalogBook {\n    double pageCount;\n    public CatalogBook(double pageCount) {\n        this.pageCount = pageCount;\n    }\n}\n\nclass CatalogBookManager {\n    public double calculateTotalSum(CatalogBook[] list) {\n        double sum = 0;\n        for (CatalogBook item : list) {\n            if (item != null) sum += item.pageCount;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook[] array = new CatalogBook[] { new CatalogBook(50.0), new CatalogBook(120.0) };\n        CatalogBookManager mgr = new CatalogBookManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(CatalogBook[] list) {\n    double sum = 0;\n    for (CatalogBook item : list) {\n        if (item != null) sum += item.pageCount;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>CatalogBook[] array = new CatalogBook[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.pageCount' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "141. BeFit Club — 'GymMemberManager' va Massivlar Bilan Ishlash",
      "en": "141. BeFit Club — 'GymMemberManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "BeFit Club ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'GymMemberManager' klassini yarating va unga 'GymMember[] items' massivi hamda barcha elementlarning 'activeMonths' summasini hisoblovchi 'public double calculateTotalSum(GymMember[] list)' metodini qo'shing.",
      "en": "Manage collection in BeFit Club. Create 'GymMemberManager' with 'public double calculateTotalSum(GymMember[] list)' to sum up 'activeMonths'."
    },
    "requirements": {
      "classes": [
        "GymMember",
        "GymMemberManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class GymMember {\n    double activeMonths;\n    public GymMember(double activeMonths) {\n        this.activeMonths = activeMonths;\n    }\n}\n\nclass GymMemberManager {\n    public double calculateTotalSum(GymMember[] list) {\n        double sum = 0;\n        for (GymMember item : list) {\n            if (item != null) sum += item.activeMonths;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember[] array = new GymMember[] { new GymMember(50.0), new GymMember(120.0) };\n        GymMemberManager mgr = new GymMemberManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class GymMember {\n    double activeMonths;\n    public GymMember(double activeMonths) {\n        this.activeMonths = activeMonths;\n    }\n}\n\nclass GymMemberManager {\n    public double calculateTotalSum(GymMember[] list) {\n        double sum = 0;\n        for (GymMember item : list) {\n            if (item != null) sum += item.activeMonths;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember[] array = new GymMember[] { new GymMember(50.0), new GymMember(120.0) };\n        GymMemberManager mgr = new GymMemberManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(GymMember[] list) {\n    double sum = 0;\n    for (GymMember item : list) {\n        if (item != null) sum += item.activeMonths;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>GymMember[] array = new GymMember[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.activeMonths' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "142. Tashkent Parking — 'ParkingBayManager' va Massivlar Bilan Ishlash",
      "en": "142. Tashkent Parking — 'ParkingBayManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Tashkent Parking ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'ParkingBayManager' klassini yarating va unga 'ParkingBay[] items' massivi hamda barcha elementlarning 'hourlyTariff' summasini hisoblovchi 'public double calculateTotalSum(ParkingBay[] list)' metodini qo'shing.",
      "en": "Manage collection in Tashkent Parking. Create 'ParkingBayManager' with 'public double calculateTotalSum(ParkingBay[] list)' to sum up 'hourlyTariff'."
    },
    "requirements": {
      "classes": [
        "ParkingBay",
        "ParkingBayManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class ParkingBay {\n    double hourlyTariff;\n    public ParkingBay(double hourlyTariff) {\n        this.hourlyTariff = hourlyTariff;\n    }\n}\n\nclass ParkingBayManager {\n    public double calculateTotalSum(ParkingBay[] list) {\n        double sum = 0;\n        for (ParkingBay item : list) {\n            if (item != null) sum += item.hourlyTariff;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay[] array = new ParkingBay[] { new ParkingBay(50.0), new ParkingBay(120.0) };\n        ParkingBayManager mgr = new ParkingBayManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class ParkingBay {\n    double hourlyTariff;\n    public ParkingBay(double hourlyTariff) {\n        this.hourlyTariff = hourlyTariff;\n    }\n}\n\nclass ParkingBayManager {\n    public double calculateTotalSum(ParkingBay[] list) {\n        double sum = 0;\n        for (ParkingBay item : list) {\n            if (item != null) sum += item.hourlyTariff;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay[] array = new ParkingBay[] { new ParkingBay(50.0), new ParkingBay(120.0) };\n        ParkingBayManager mgr = new ParkingBayManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(ParkingBay[] list) {\n    double sum = 0;\n    for (ParkingBay item : list) {\n        if (item != null) sum += item.hourlyTariff;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>ParkingBay[] array = new ParkingBay[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.hourlyTariff' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "143. Medion Clinic — 'PatientRecordManager' va Massivlar Bilan Ishlash",
      "en": "143. Medion Clinic — 'PatientRecordManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Medion Clinic ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'PatientRecordManager' klassini yarating va unga 'PatientRecord[] items' massivi hamda barcha elementlarning 'pulseRate' summasini hisoblovchi 'public double calculateTotalSum(PatientRecord[] list)' metodini qo'shing.",
      "en": "Manage collection in Medion Clinic. Create 'PatientRecordManager' with 'public double calculateTotalSum(PatientRecord[] list)' to sum up 'pulseRate'."
    },
    "requirements": {
      "classes": [
        "PatientRecord",
        "PatientRecordManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class PatientRecord {\n    double pulseRate;\n    public PatientRecord(double pulseRate) {\n        this.pulseRate = pulseRate;\n    }\n}\n\nclass PatientRecordManager {\n    public double calculateTotalSum(PatientRecord[] list) {\n        double sum = 0;\n        for (PatientRecord item : list) {\n            if (item != null) sum += item.pulseRate;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord[] array = new PatientRecord[] { new PatientRecord(50.0), new PatientRecord(120.0) };\n        PatientRecordManager mgr = new PatientRecordManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class PatientRecord {\n    double pulseRate;\n    public PatientRecord(double pulseRate) {\n        this.pulseRate = pulseRate;\n    }\n}\n\nclass PatientRecordManager {\n    public double calculateTotalSum(PatientRecord[] list) {\n        double sum = 0;\n        for (PatientRecord item : list) {\n            if (item != null) sum += item.pulseRate;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord[] array = new PatientRecord[] { new PatientRecord(50.0), new PatientRecord(120.0) };\n        PatientRecordManager mgr = new PatientRecordManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(PatientRecord[] list) {\n    double sum = 0;\n    for (PatientRecord item : list) {\n        if (item != null) sum += item.pulseRate;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>PatientRecord[] array = new PatientRecord[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.pulseRate' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "144. Hyatt Regency — 'HotelReservationManager' va Massivlar Bilan Ishlash",
      "en": "144. Hyatt Regency — 'HotelReservationManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Hyatt Regency ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'HotelReservationManager' klassini yarating va unga 'HotelReservation[] items' massivi hamda barcha elementlarning 'nightlyRate' summasini hisoblovchi 'public double calculateTotalSum(HotelReservation[] list)' metodini qo'shing.",
      "en": "Manage collection in Hyatt Regency. Create 'HotelReservationManager' with 'public double calculateTotalSum(HotelReservation[] list)' to sum up 'nightlyRate'."
    },
    "requirements": {
      "classes": [
        "HotelReservation",
        "HotelReservationManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class HotelReservation {\n    double nightlyRate;\n    public HotelReservation(double nightlyRate) {\n        this.nightlyRate = nightlyRate;\n    }\n}\n\nclass HotelReservationManager {\n    public double calculateTotalSum(HotelReservation[] list) {\n        double sum = 0;\n        for (HotelReservation item : list) {\n            if (item != null) sum += item.nightlyRate;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation[] array = new HotelReservation[] { new HotelReservation(50.0), new HotelReservation(120.0) };\n        HotelReservationManager mgr = new HotelReservationManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class HotelReservation {\n    double nightlyRate;\n    public HotelReservation(double nightlyRate) {\n        this.nightlyRate = nightlyRate;\n    }\n}\n\nclass HotelReservationManager {\n    public double calculateTotalSum(HotelReservation[] list) {\n        double sum = 0;\n        for (HotelReservation item : list) {\n            if (item != null) sum += item.nightlyRate;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation[] array = new HotelReservation[] { new HotelReservation(50.0), new HotelReservation(120.0) };\n        HotelReservationManager mgr = new HotelReservationManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(HotelReservation[] list) {\n    double sum = 0;\n    for (HotelReservation item : list) {\n        if (item != null) sum += item.nightlyRate;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>HotelReservation[] array = new HotelReservation[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.nightlyRate' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "145. Premier Cinema — 'CinemaTicketManager' va Massivlar Bilan Ishlash",
      "en": "145. Premier Cinema — 'CinemaTicketManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Premier Cinema ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'CinemaTicketManager' klassini yarating va unga 'CinemaTicket[] items' massivi hamda barcha elementlarning 'hallSeatNo' summasini hisoblovchi 'public double calculateTotalSum(CinemaTicket[] list)' metodini qo'shing.",
      "en": "Manage collection in Premier Cinema. Create 'CinemaTicketManager' with 'public double calculateTotalSum(CinemaTicket[] list)' to sum up 'hallSeatNo'."
    },
    "requirements": {
      "classes": [
        "CinemaTicket",
        "CinemaTicketManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class CinemaTicket {\n    double hallSeatNo;\n    public CinemaTicket(double hallSeatNo) {\n        this.hallSeatNo = hallSeatNo;\n    }\n}\n\nclass CinemaTicketManager {\n    public double calculateTotalSum(CinemaTicket[] list) {\n        double sum = 0;\n        for (CinemaTicket item : list) {\n            if (item != null) sum += item.hallSeatNo;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket[] array = new CinemaTicket[] { new CinemaTicket(50.0), new CinemaTicket(120.0) };\n        CinemaTicketManager mgr = new CinemaTicketManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class CinemaTicket {\n    double hallSeatNo;\n    public CinemaTicket(double hallSeatNo) {\n        this.hallSeatNo = hallSeatNo;\n    }\n}\n\nclass CinemaTicketManager {\n    public double calculateTotalSum(CinemaTicket[] list) {\n        double sum = 0;\n        for (CinemaTicket item : list) {\n            if (item != null) sum += item.hallSeatNo;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket[] array = new CinemaTicket[] { new CinemaTicket(50.0), new CinemaTicket(120.0) };\n        CinemaTicketManager mgr = new CinemaTicketManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(CinemaTicket[] list) {\n    double sum = 0;\n    for (CinemaTicket item : list) {\n        if (item != null) sum += item.hallSeatNo;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>CinemaTicket[] array = new CinemaTicket[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.hallSeatNo' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "146. Yandex Scooter — 'ElectricScooterManager' va Massivlar Bilan Ishlash",
      "en": "146. Yandex Scooter — 'ElectricScooterManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Yandex Scooter ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'ElectricScooterManager' klassini yarating va unga 'ElectricScooter[] items' massivi hamda barcha elementlarning 'maxSpeedKmh' summasini hisoblovchi 'public double calculateTotalSum(ElectricScooter[] list)' metodini qo'shing.",
      "en": "Manage collection in Yandex Scooter. Create 'ElectricScooterManager' with 'public double calculateTotalSum(ElectricScooter[] list)' to sum up 'maxSpeedKmh'."
    },
    "requirements": {
      "classes": [
        "ElectricScooter",
        "ElectricScooterManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class ElectricScooter {\n    double maxSpeedKmh;\n    public ElectricScooter(double maxSpeedKmh) {\n        this.maxSpeedKmh = maxSpeedKmh;\n    }\n}\n\nclass ElectricScooterManager {\n    public double calculateTotalSum(ElectricScooter[] list) {\n        double sum = 0;\n        for (ElectricScooter item : list) {\n            if (item != null) sum += item.maxSpeedKmh;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter[] array = new ElectricScooter[] { new ElectricScooter(50.0), new ElectricScooter(120.0) };\n        ElectricScooterManager mgr = new ElectricScooterManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class ElectricScooter {\n    double maxSpeedKmh;\n    public ElectricScooter(double maxSpeedKmh) {\n        this.maxSpeedKmh = maxSpeedKmh;\n    }\n}\n\nclass ElectricScooterManager {\n    public double calculateTotalSum(ElectricScooter[] list) {\n        double sum = 0;\n        for (ElectricScooter item : list) {\n            if (item != null) sum += item.maxSpeedKmh;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter[] array = new ElectricScooter[] { new ElectricScooter(50.0), new ElectricScooter(120.0) };\n        ElectricScooterManager mgr = new ElectricScooterManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(ElectricScooter[] list) {\n    double sum = 0;\n    for (ElectricScooter item : list) {\n        if (item != null) sum += item.maxSpeedKmh;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>ElectricScooter[] array = new ElectricScooter[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.maxSpeedKmh' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "147. Weather Network — 'MeteoStationManager' va Massivlar Bilan Ishlash",
      "en": "147. Weather Network — 'MeteoStationManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Weather Network ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'MeteoStationManager' klassini yarating va unga 'MeteoStation[] items' massivi hamda barcha elementlarning 'humidityPct' summasini hisoblovchi 'public double calculateTotalSum(MeteoStation[] list)' metodini qo'shing.",
      "en": "Manage collection in Weather Network. Create 'MeteoStationManager' with 'public double calculateTotalSum(MeteoStation[] list)' to sum up 'humidityPct'."
    },
    "requirements": {
      "classes": [
        "MeteoStation",
        "MeteoStationManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class MeteoStation {\n    double humidityPct;\n    public MeteoStation(double humidityPct) {\n        this.humidityPct = humidityPct;\n    }\n}\n\nclass MeteoStationManager {\n    public double calculateTotalSum(MeteoStation[] list) {\n        double sum = 0;\n        for (MeteoStation item : list) {\n            if (item != null) sum += item.humidityPct;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation[] array = new MeteoStation[] { new MeteoStation(50.0), new MeteoStation(120.0) };\n        MeteoStationManager mgr = new MeteoStationManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class MeteoStation {\n    double humidityPct;\n    public MeteoStation(double humidityPct) {\n        this.humidityPct = humidityPct;\n    }\n}\n\nclass MeteoStationManager {\n    public double calculateTotalSum(MeteoStation[] list) {\n        double sum = 0;\n        for (MeteoStation item : list) {\n            if (item != null) sum += item.humidityPct;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation[] array = new MeteoStation[] { new MeteoStation(50.0), new MeteoStation(120.0) };\n        MeteoStationManager mgr = new MeteoStationManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(MeteoStation[] list) {\n    double sum = 0;\n    for (MeteoStation item : list) {\n        if (item != null) sum += item.humidityPct;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>MeteoStation[] array = new MeteoStation[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.humidityPct' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "148. OpenMarket Auction — 'AuctionLotManager' va Massivlar Bilan Ishlash",
      "en": "148. OpenMarket Auction — 'AuctionLotManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "OpenMarket Auction ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'AuctionLotManager' klassini yarating va unga 'AuctionLot[] items' massivi hamda barcha elementlarning 'reservePrice' summasini hisoblovchi 'public double calculateTotalSum(AuctionLot[] list)' metodini qo'shing.",
      "en": "Manage collection in OpenMarket Auction. Create 'AuctionLotManager' with 'public double calculateTotalSum(AuctionLot[] list)' to sum up 'reservePrice'."
    },
    "requirements": {
      "classes": [
        "AuctionLot",
        "AuctionLotManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class AuctionLot {\n    double reservePrice;\n    public AuctionLot(double reservePrice) {\n        this.reservePrice = reservePrice;\n    }\n}\n\nclass AuctionLotManager {\n    public double calculateTotalSum(AuctionLot[] list) {\n        double sum = 0;\n        for (AuctionLot item : list) {\n            if (item != null) sum += item.reservePrice;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot[] array = new AuctionLot[] { new AuctionLot(50.0), new AuctionLot(120.0) };\n        AuctionLotManager mgr = new AuctionLotManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class AuctionLot {\n    double reservePrice;\n    public AuctionLot(double reservePrice) {\n        this.reservePrice = reservePrice;\n    }\n}\n\nclass AuctionLotManager {\n    public double calculateTotalSum(AuctionLot[] list) {\n        double sum = 0;\n        for (AuctionLot item : list) {\n            if (item != null) sum += item.reservePrice;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot[] array = new AuctionLot[] { new AuctionLot(50.0), new AuctionLot(120.0) };\n        AuctionLotManager mgr = new AuctionLotManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(AuctionLot[] list) {\n    double sum = 0;\n    for (AuctionLot item : list) {\n        if (item != null) sum += item.reservePrice;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>AuctionLot[] array = new AuctionLot[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.reservePrice' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "149. Solar Energy Grid — 'SolarInverterManager' va Massivlar Bilan Ishlash",
      "en": "149. Solar Energy Grid — 'SolarInverterManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "Solar Energy Grid ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'SolarInverterManager' klassini yarating va unga 'SolarInverter[] items' massivi hamda barcha elementlarning 'powerKw' summasini hisoblovchi 'public double calculateTotalSum(SolarInverter[] list)' metodini qo'shing.",
      "en": "Manage collection in Solar Energy Grid. Create 'SolarInverterManager' with 'public double calculateTotalSum(SolarInverter[] list)' to sum up 'powerKw'."
    },
    "requirements": {
      "classes": [
        "SolarInverter",
        "SolarInverterManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class SolarInverter {\n    double powerKw;\n    public SolarInverter(double powerKw) {\n        this.powerKw = powerKw;\n    }\n}\n\nclass SolarInverterManager {\n    public double calculateTotalSum(SolarInverter[] list) {\n        double sum = 0;\n        for (SolarInverter item : list) {\n            if (item != null) sum += item.powerKw;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter[] array = new SolarInverter[] { new SolarInverter(50.0), new SolarInverter(120.0) };\n        SolarInverterManager mgr = new SolarInverterManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class SolarInverter {\n    double powerKw;\n    public SolarInverter(double powerKw) {\n        this.powerKw = powerKw;\n    }\n}\n\nclass SolarInverterManager {\n    public double calculateTotalSum(SolarInverter[] list) {\n        double sum = 0;\n        for (SolarInverter item : list) {\n            if (item != null) sum += item.powerKw;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter[] array = new SolarInverter[] { new SolarInverter(50.0), new SolarInverter(120.0) };\n        SolarInverterManager mgr = new SolarInverterManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(SolarInverter[] list) {\n    double sum = 0;\n    for (SolarInverter item : list) {\n        if (item != null) sum += item.powerKw;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>SolarInverter[] array = new SolarInverter[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.powerKw' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: Ob'yektlar Massivi va Agregator Tizim",
    "sector": "Master • CW2",
    "title": {
      "uz": "150. O'zbekiston Temir Yo'llari — 'TrainRouteManager' va Massivlar Bilan Ishlash",
      "en": "150. O'zbekiston Temir Yo'llari — 'TrainRouteManager' Object Array Aggregation"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari ko'p sonli ob'yektlarni bitta massivda boshqarishni talab qiladi. 'TrainRouteManager' klassini yarating va unga 'TrainRoute[] items' massivi hamda barcha elementlarning 'travelDurationHours' summasini hisoblovchi 'public double calculateTotalSum(TrainRoute[] list)' metodini qo'shing.",
      "en": "Manage collection in O'zbekiston Temir Yo'llari. Create 'TrainRouteManager' with 'public double calculateTotalSum(TrainRoute[] list)' to sum up 'travelDurationHours'."
    },
    "requirements": {
      "classes": [
        "TrainRoute",
        "TrainRouteManager"
      ],
      "methods": [
        "calculateTotalSum"
      ]
    },
    "starterCode": "class TrainRoute {\n    double travelDurationHours;\n    public TrainRoute(double travelDurationHours) {\n        this.travelDurationHours = travelDurationHours;\n    }\n}\n\nclass TrainRouteManager {\n    public double calculateTotalSum(TrainRoute[] list) {\n        double sum = 0;\n        for (TrainRoute item : list) {\n            if (item != null) sum += item.travelDurationHours;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute[] array = new TrainRoute[] { new TrainRoute(50.0), new TrainRoute(120.0) };\n        TrainRouteManager mgr = new TrainRouteManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "solution": "class TrainRoute {\n    double travelDurationHours;\n    public TrainRoute(double travelDurationHours) {\n        this.travelDurationHours = travelDurationHours;\n    }\n}\n\nclass TrainRouteManager {\n    public double calculateTotalSum(TrainRoute[] list) {\n        double sum = 0;\n        for (TrainRoute item : list) {\n            if (item != null) sum += item.travelDurationHours;\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute[] array = new TrainRoute[] { new TrainRoute(50.0), new TrainRoute(120.0) };\n        TrainRouteManager mgr = new TrainRouteManager();\n        System.out.println(\"Jami summa: \" + mgr.calculateTotalSum(array));\n    }\n}",
    "detailedSolution": {
      "theory": "Ob'yektlar massivi Heap xotirada ob'yektlarning o'zini emas, balki ularning xotira manzillarini (reference array) saqlaydi. Massiv elementlarini tekshirishda 'null' xavfsizligiga e'tibor berish lozim.",
      "theoryEn": "Object arrays hold heap references to instances rather than embedded values. Traversing arrays requires null-checks to prevent NullPointerExceptions.",
      "cleanCode": "public double calculateTotalSum(TrainRoute[] list) {\n    double sum = 0;\n    for (TrainRoute item : list) {\n        if (item != null) sum += item.travelDurationHours;\n    }\n    return sum;\n}",
      "breakdown": [
        "<code>TrainRoute[] array = new TrainRoute[size];</code>: Heap xotirada ko'rsatkichlar ro'yxatini shakllantirish."
      ],
      "pitfalls": "Massiv bo'sh bo'lganda 'item.travelDurationHours' deb to'g'ridan-to'g'ri murojaat qilish 'NullPointerException' xatoligiga sabab bo'ladi.",
      "cw2Tip": "CW2 da savatchadagi buyurtma elementlarini (Cart items) saqlash va umumiy narxni hisoblashda aynan shu algoritm qo'llaniladi."
    }
  }
];
