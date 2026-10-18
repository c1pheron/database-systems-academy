// WIUT OOP (5COSC018C) — WEEK 2 DATASET (150 PROGRESSIVE CHALLENGES)
window.OOP_CHALLENGES_W2 = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "1. Uzum Market — 'Product' Maydonini Inkapsulyatsiya Qilish",
      "en": "1. Uzum Market — Encapsulating 'Product' State"
    },
    "scenario": {
      "uz": "Uzum Market tizimida 'price' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getPrice()' hamda 'setPrice(double val)' metodlarini yarating.",
      "en": "Encapsulate 'Product' in Uzum Market. Declare 'price' as private with public getPrice() and setPrice(double val)."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "privateFields": [
        "price"
      ],
      "methods": [
        "getPrice",
        "setPrice"
      ]
    },
    "starterCode": "",
    "solution": "class Product {\n    private double price;\n\n    public double getPrice() {\n        return this.price;\n    }\n\n    public void setPrice(double price) {\n        this.price = price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product item = new Product();\n        item.setPrice(100);\n        System.out.println(\"Qiymat: \" + item.getPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double price;\npublic double getPrice() { return this.price; }\npublic void setPrice(double price) { this.price = price; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "2. Payme Wallet — 'WalletUser' Maydonini Inkapsulyatsiya Qilish",
      "en": "2. Payme Wallet — Encapsulating 'WalletUser' State"
    },
    "scenario": {
      "uz": "Payme Wallet tizimida 'balance' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getBalance()' hamda 'setBalance(double val)' metodlarini yarating.",
      "en": "Encapsulate 'WalletUser' in Payme Wallet. Declare 'balance' as private with public getBalance() and setBalance(double val)."
    },
    "requirements": {
      "classes": [
        "WalletUser"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "getBalance",
        "setBalance"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUser {\n    private double balance;\n\n    public double getBalance() {\n        return this.balance;\n    }\n\n    public void setBalance(double balance) {\n        this.balance = balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser item = new WalletUser();\n        item.setBalance(100);\n        System.out.println(\"Qiymat: \" + item.getBalance());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double balance;\npublic double getBalance() { return this.balance; }\npublic void setBalance(double balance) { this.balance = balance; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "3. Yandex Go — 'TaxiRide' Maydonini Inkapsulyatsiya Qilish",
      "en": "3. Yandex Go — Encapsulating 'TaxiRide' State"
    },
    "scenario": {
      "uz": "Yandex Go tizimida 'distanceKm' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getDistanceKm()' hamda 'setDistanceKm(double val)' metodlarini yarating.",
      "en": "Encapsulate 'TaxiRide' in Yandex Go. Declare 'distanceKm' as private with public getDistanceKm() and setDistanceKm(double val)."
    },
    "requirements": {
      "classes": [
        "TaxiRide"
      ],
      "privateFields": [
        "distanceKm"
      ],
      "methods": [
        "getDistanceKm",
        "setDistanceKm"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRide {\n    private double distanceKm;\n\n    public double getDistanceKm() {\n        return this.distanceKm;\n    }\n\n    public void setDistanceKm(double distanceKm) {\n        this.distanceKm = distanceKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide item = new TaxiRide();\n        item.setDistanceKm(100);\n        System.out.println(\"Qiymat: \" + item.getDistanceKm());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double distanceKm;\npublic double getDistanceKm() { return this.distanceKm; }\npublic void setDistanceKm(double distanceKm) { this.distanceKm = distanceKm; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "4. Korzinka Go — 'LoyaltyCard' Maydonini Inkapsulyatsiya Qilish",
      "en": "4. Korzinka Go — Encapsulating 'LoyaltyCard' State"
    },
    "scenario": {
      "uz": "Korzinka Go tizimida 'bonusPoints' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getBonusPoints()' hamda 'setBonusPoints(int val)' metodlarini yarating.",
      "en": "Encapsulate 'LoyaltyCard' in Korzinka Go. Declare 'bonusPoints' as private with public getBonusPoints() and setBonusPoints(int val)."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard"
      ],
      "privateFields": [
        "bonusPoints"
      ],
      "methods": [
        "getBonusPoints",
        "setBonusPoints"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCard {\n    private int bonusPoints;\n\n    public int getBonusPoints() {\n        return this.bonusPoints;\n    }\n\n    public void setBonusPoints(int bonusPoints) {\n        this.bonusPoints = bonusPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard item = new LoyaltyCard();\n        item.setBonusPoints(100);\n        System.out.println(\"Qiymat: \" + item.getBonusPoints());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int bonusPoints;\npublic int getBonusPoints() { return this.bonusPoints; }\npublic void setBonusPoints(int bonusPoints) { this.bonusPoints = bonusPoints; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "5. WIUT Portal — 'Student' Maydonini Inkapsulyatsiya Qilish",
      "en": "5. WIUT Portal — Encapsulating 'Student' State"
    },
    "scenario": {
      "uz": "WIUT Portal tizimida 'gpa' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getGpa()' hamda 'setGpa(double val)' metodlarini yarating.",
      "en": "Encapsulate 'Student' in WIUT Portal. Declare 'gpa' as private with public getGpa() and setGpa(double val)."
    },
    "requirements": {
      "classes": [
        "Student"
      ],
      "privateFields": [
        "gpa"
      ],
      "methods": [
        "getGpa",
        "setGpa"
      ]
    },
    "starterCode": "",
    "solution": "class Student {\n    private double gpa;\n\n    public double getGpa() {\n        return this.gpa;\n    }\n\n    public void setGpa(double gpa) {\n        this.gpa = gpa;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student item = new Student();\n        item.setGpa(100);\n        System.out.println(\"Qiymat: \" + item.getGpa());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double gpa;\npublic double getGpa() { return this.gpa; }\npublic void setGpa(double gpa) { this.gpa = gpa; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "6. Click Pay — 'PaymentTxn' Maydonini Inkapsulyatsiya Qilish",
      "en": "6. Click Pay — Encapsulating 'PaymentTxn' State"
    },
    "scenario": {
      "uz": "Click Pay tizimida 'amount' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getAmount()' hamda 'setAmount(double val)' metodlarini yarating.",
      "en": "Encapsulate 'PaymentTxn' in Click Pay. Declare 'amount' as private with public getAmount() and setAmount(double val)."
    },
    "requirements": {
      "classes": [
        "PaymentTxn"
      ],
      "privateFields": [
        "amount"
      ],
      "methods": [
        "getAmount",
        "setAmount"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxn {\n    private double amount;\n\n    public double getAmount() {\n        return this.amount;\n    }\n\n    public void setAmount(double amount) {\n        this.amount = amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn item = new PaymentTxn();\n        item.setAmount(100);\n        System.out.println(\"Qiymat: \" + item.getAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double amount;\npublic double getAmount() { return this.amount; }\npublic void setAmount(double amount) { this.amount = amount; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "7. Telegram Bot — 'BotMessage' Maydonini Inkapsulyatsiya Qilish",
      "en": "7. Telegram Bot — Encapsulating 'BotMessage' State"
    },
    "scenario": {
      "uz": "Telegram Bot tizimida 'chatId' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getChatId()' hamda 'setChatId(long val)' metodlarini yarating.",
      "en": "Encapsulate 'BotMessage' in Telegram Bot. Declare 'chatId' as private with public getChatId() and setChatId(long val)."
    },
    "requirements": {
      "classes": [
        "BotMessage"
      ],
      "privateFields": [
        "chatId"
      ],
      "methods": [
        "getChatId",
        "setChatId"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessage {\n    private long chatId;\n\n    public long getChatId() {\n        return this.chatId;\n    }\n\n    public void setChatId(long chatId) {\n        this.chatId = chatId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage item = new BotMessage();\n        item.setChatId(100);\n        System.out.println(\"Qiymat: \" + item.getChatId());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private long chatId;\npublic long getChatId() { return this.chatId; }\npublic void setChatId(long chatId) { this.chatId = chatId; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "8. UzAirways — 'FlightTicket' Maydonini Inkapsulyatsiya Qilish",
      "en": "8. UzAirways — Encapsulating 'FlightTicket' State"
    },
    "scenario": {
      "uz": "UzAirways tizimida 'farePrice' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getFarePrice()' hamda 'setFarePrice(double val)' metodlarini yarating.",
      "en": "Encapsulate 'FlightTicket' in UzAirways. Declare 'farePrice' as private with public getFarePrice() and setFarePrice(double val)."
    },
    "requirements": {
      "classes": [
        "FlightTicket"
      ],
      "privateFields": [
        "farePrice"
      ],
      "methods": [
        "getFarePrice",
        "setFarePrice"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicket {\n    private double farePrice;\n\n    public double getFarePrice() {\n        return this.farePrice;\n    }\n\n    public void setFarePrice(double farePrice) {\n        this.farePrice = farePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket item = new FlightTicket();\n        item.setFarePrice(100);\n        System.out.println(\"Qiymat: \" + item.getFarePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double farePrice;\npublic double getFarePrice() { return this.farePrice; }\npublic void setFarePrice(double farePrice) { this.farePrice = farePrice; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "9. IT Park Academy — 'BootcampCourse' Maydonini Inkapsulyatsiya Qilish",
      "en": "9. IT Park Academy — Encapsulating 'BootcampCourse' State"
    },
    "scenario": {
      "uz": "IT Park Academy tizimida 'durationWeeks' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getDurationWeeks()' hamda 'setDurationWeeks(int val)' metodlarini yarating.",
      "en": "Encapsulate 'BootcampCourse' in IT Park Academy. Declare 'durationWeeks' as private with public getDurationWeeks() and setDurationWeeks(int val)."
    },
    "requirements": {
      "classes": [
        "BootcampCourse"
      ],
      "privateFields": [
        "durationWeeks"
      ],
      "methods": [
        "getDurationWeeks",
        "setDurationWeeks"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourse {\n    private int durationWeeks;\n\n    public int getDurationWeeks() {\n        return this.durationWeeks;\n    }\n\n    public void setDurationWeeks(int durationWeeks) {\n        this.durationWeeks = durationWeeks;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse item = new BootcampCourse();\n        item.setDurationWeeks(100);\n        System.out.println(\"Qiymat: \" + item.getDurationWeeks());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int durationWeeks;\npublic int getDurationWeeks() { return this.durationWeeks; }\npublic void setDurationWeeks(int durationWeeks) { this.durationWeeks = durationWeeks; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "10. Anorbank — 'DebitCard' Maydonini Inkapsulyatsiya Qilish",
      "en": "10. Anorbank — Encapsulating 'DebitCard' State"
    },
    "scenario": {
      "uz": "Anorbank tizimida 'creditLimit' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getCreditLimit()' hamda 'setCreditLimit(double val)' metodlarini yarating.",
      "en": "Encapsulate 'DebitCard' in Anorbank. Declare 'creditLimit' as private with public getCreditLimit() and setCreditLimit(double val)."
    },
    "requirements": {
      "classes": [
        "DebitCard"
      ],
      "privateFields": [
        "creditLimit"
      ],
      "methods": [
        "getCreditLimit",
        "setCreditLimit"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCard {\n    private double creditLimit;\n\n    public double getCreditLimit() {\n        return this.creditLimit;\n    }\n\n    public void setCreditLimit(double creditLimit) {\n        this.creditLimit = creditLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard item = new DebitCard();\n        item.setCreditLimit(100);\n        System.out.println(\"Qiymat: \" + item.getCreditLimit());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double creditLimit;\npublic double getCreditLimit() { return this.creditLimit; }\npublic void setCreditLimit(double creditLimit) { this.creditLimit = creditLimit; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 11,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "11. Oson Apteka — 'Medicine' Maydonini Inkapsulyatsiya Qilish",
      "en": "11. Oson Apteka — Encapsulating 'Medicine' State"
    },
    "scenario": {
      "uz": "Oson Apteka tizimida 'stockCount' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getStockCount()' hamda 'setStockCount(int val)' metodlarini yarating.",
      "en": "Encapsulate 'Medicine' in Oson Apteka. Declare 'stockCount' as private with public getStockCount() and setStockCount(int val)."
    },
    "requirements": {
      "classes": [
        "Medicine"
      ],
      "privateFields": [
        "stockCount"
      ],
      "methods": [
        "getStockCount",
        "setStockCount"
      ]
    },
    "starterCode": "",
    "solution": "class Medicine {\n    private int stockCount;\n\n    public int getStockCount() {\n        return this.stockCount;\n    }\n\n    public void setStockCount(int stockCount) {\n        this.stockCount = stockCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine item = new Medicine();\n        item.setStockCount(100);\n        System.out.println(\"Qiymat: \" + item.getStockCount());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int stockCount;\npublic int getStockCount() { return this.stockCount; }\npublic void setStockCount(int stockCount) { this.stockCount = stockCount; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 12,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "12. Evos FastFood — 'FoodOrder' Maydonini Inkapsulyatsiya Qilish",
      "en": "12. Evos FastFood — Encapsulating 'FoodOrder' State"
    },
    "scenario": {
      "uz": "Evos FastFood tizimida 'totalSum' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getTotalSum()' hamda 'setTotalSum(double val)' metodlarini yarating.",
      "en": "Encapsulate 'FoodOrder' in Evos FastFood. Declare 'totalSum' as private with public getTotalSum() and setTotalSum(double val)."
    },
    "requirements": {
      "classes": [
        "FoodOrder"
      ],
      "privateFields": [
        "totalSum"
      ],
      "methods": [
        "getTotalSum",
        "setTotalSum"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrder {\n    private double totalSum;\n\n    public double getTotalSum() {\n        return this.totalSum;\n    }\n\n    public void setTotalSum(double totalSum) {\n        this.totalSum = totalSum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder item = new FoodOrder();\n        item.setTotalSum(100);\n        System.out.println(\"Qiymat: \" + item.getTotalSum());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double totalSum;\npublic double getTotalSum() { return this.totalSum; }\npublic void setTotalSum(double totalSum) { this.totalSum = totalSum; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 13,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "13. Bellissimo Pizza — 'PizzaOrder' Maydonini Inkapsulyatsiya Qilish",
      "en": "13. Bellissimo Pizza — Encapsulating 'PizzaOrder' State"
    },
    "scenario": {
      "uz": "Bellissimo Pizza tizimida 'prepTimeMinutes' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getPrepTimeMinutes()' hamda 'setPrepTimeMinutes(int val)' metodlarini yarating.",
      "en": "Encapsulate 'PizzaOrder' in Bellissimo Pizza. Declare 'prepTimeMinutes' as private with public getPrepTimeMinutes() and setPrepTimeMinutes(int val)."
    },
    "requirements": {
      "classes": [
        "PizzaOrder"
      ],
      "privateFields": [
        "prepTimeMinutes"
      ],
      "methods": [
        "getPrepTimeMinutes",
        "setPrepTimeMinutes"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrder {\n    private int prepTimeMinutes;\n\n    public int getPrepTimeMinutes() {\n        return this.prepTimeMinutes;\n    }\n\n    public void setPrepTimeMinutes(int prepTimeMinutes) {\n        this.prepTimeMinutes = prepTimeMinutes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder item = new PizzaOrder();\n        item.setPrepTimeMinutes(100);\n        System.out.println(\"Qiymat: \" + item.getPrepTimeMinutes());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int prepTimeMinutes;\npublic int getPrepTimeMinutes() { return this.prepTimeMinutes; }\npublic void setPrepTimeMinutes(int prepTimeMinutes) { this.prepTimeMinutes = prepTimeMinutes; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 14,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "14. Milliy TV — 'BroadcastShow' Maydonini Inkapsulyatsiya Qilish",
      "en": "14. Milliy TV — Encapsulating 'BroadcastShow' State"
    },
    "scenario": {
      "uz": "Milliy TV tizimida 'viewersRating' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getViewersRating()' hamda 'setViewersRating(double val)' metodlarini yarating.",
      "en": "Encapsulate 'BroadcastShow' in Milliy TV. Declare 'viewersRating' as private with public getViewersRating() and setViewersRating(double val)."
    },
    "requirements": {
      "classes": [
        "BroadcastShow"
      ],
      "privateFields": [
        "viewersRating"
      ],
      "methods": [
        "getViewersRating",
        "setViewersRating"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShow {\n    private double viewersRating;\n\n    public double getViewersRating() {\n        return this.viewersRating;\n    }\n\n    public void setViewersRating(double viewersRating) {\n        this.viewersRating = viewersRating;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow item = new BroadcastShow();\n        item.setViewersRating(100);\n        System.out.println(\"Qiymat: \" + item.getViewersRating());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double viewersRating;\npublic double getViewersRating() { return this.viewersRating; }\npublic void setViewersRating(double viewersRating) { this.viewersRating = viewersRating; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 15,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "15. Spotify Sound — 'AudioTrack' Maydonini Inkapsulyatsiya Qilish",
      "en": "15. Spotify Sound — Encapsulating 'AudioTrack' State"
    },
    "scenario": {
      "uz": "Spotify Sound tizimida 'durationSec' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getDurationSec()' hamda 'setDurationSec(int val)' metodlarini yarating.",
      "en": "Encapsulate 'AudioTrack' in Spotify Sound. Declare 'durationSec' as private with public getDurationSec() and setDurationSec(int val)."
    },
    "requirements": {
      "classes": [
        "AudioTrack"
      ],
      "privateFields": [
        "durationSec"
      ],
      "methods": [
        "getDurationSec",
        "setDurationSec"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrack {\n    private int durationSec;\n\n    public int getDurationSec() {\n        return this.durationSec;\n    }\n\n    public void setDurationSec(int durationSec) {\n        this.durationSec = durationSec;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack item = new AudioTrack();\n        item.setDurationSec(100);\n        System.out.println(\"Qiymat: \" + item.getDurationSec());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int durationSec;\npublic int getDurationSec() { return this.durationSec; }\npublic void setDurationSec(int durationSec) { this.durationSec = durationSec; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 16,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "16. Smart Thermostat — 'Thermostat' Maydonini Inkapsulyatsiya Qilish",
      "en": "16. Smart Thermostat — Encapsulating 'Thermostat' State"
    },
    "scenario": {
      "uz": "Smart Thermostat tizimida 'targetTemp' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getTargetTemp()' hamda 'setTargetTemp(double val)' metodlarini yarating.",
      "en": "Encapsulate 'Thermostat' in Smart Thermostat. Declare 'targetTemp' as private with public getTargetTemp() and setTargetTemp(double val)."
    },
    "requirements": {
      "classes": [
        "Thermostat"
      ],
      "privateFields": [
        "targetTemp"
      ],
      "methods": [
        "getTargetTemp",
        "setTargetTemp"
      ]
    },
    "starterCode": "",
    "solution": "class Thermostat {\n    private double targetTemp;\n\n    public double getTargetTemp() {\n        return this.targetTemp;\n    }\n\n    public void setTargetTemp(double targetTemp) {\n        this.targetTemp = targetTemp;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat item = new Thermostat();\n        item.setTargetTemp(100);\n        System.out.println(\"Qiymat: \" + item.getTargetTemp());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double targetTemp;\npublic double getTargetTemp() { return this.targetTemp; }\npublic void setTargetTemp(double targetTemp) { this.targetTemp = targetTemp; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 17,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "17. Drone Delivery — 'DeliveryDrone' Maydonini Inkapsulyatsiya Qilish",
      "en": "17. Drone Delivery — Encapsulating 'DeliveryDrone' State"
    },
    "scenario": {
      "uz": "Drone Delivery tizimida 'batteryPct' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getBatteryPct()' hamda 'setBatteryPct(int val)' metodlarini yarating.",
      "en": "Encapsulate 'DeliveryDrone' in Drone Delivery. Declare 'batteryPct' as private with public getBatteryPct() and setBatteryPct(int val)."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone"
      ],
      "privateFields": [
        "batteryPct"
      ],
      "methods": [
        "getBatteryPct",
        "setBatteryPct"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDrone {\n    private int batteryPct;\n\n    public int getBatteryPct() {\n        return this.batteryPct;\n    }\n\n    public void setBatteryPct(int batteryPct) {\n        this.batteryPct = batteryPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone item = new DeliveryDrone();\n        item.setBatteryPct(100);\n        System.out.println(\"Qiymat: \" + item.getBatteryPct());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int batteryPct;\npublic int getBatteryPct() { return this.batteryPct; }\npublic void setBatteryPct(int batteryPct) { this.batteryPct = batteryPct; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 18,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "18. Smart Warehouse — 'StorageBay' Maydonini Inkapsulyatsiya Qilish",
      "en": "18. Smart Warehouse — Encapsulating 'StorageBay' State"
    },
    "scenario": {
      "uz": "Smart Warehouse tizimida 'weightLimitKg' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getWeightLimitKg()' hamda 'setWeightLimitKg(double val)' metodlarini yarating.",
      "en": "Encapsulate 'StorageBay' in Smart Warehouse. Declare 'weightLimitKg' as private with public getWeightLimitKg() and setWeightLimitKg(double val)."
    },
    "requirements": {
      "classes": [
        "StorageBay"
      ],
      "privateFields": [
        "weightLimitKg"
      ],
      "methods": [
        "getWeightLimitKg",
        "setWeightLimitKg"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBay {\n    private double weightLimitKg;\n\n    public double getWeightLimitKg() {\n        return this.weightLimitKg;\n    }\n\n    public void setWeightLimitKg(double weightLimitKg) {\n        this.weightLimitKg = weightLimitKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay item = new StorageBay();\n        item.setWeightLimitKg(100);\n        System.out.println(\"Qiymat: \" + item.getWeightLimitKg());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double weightLimitKg;\npublic double getWeightLimitKg() { return this.weightLimitKg; }\npublic void setWeightLimitKg(double weightLimitKg) { this.weightLimitKg = weightLimitKg; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 19,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "19. Crypto Wallet — 'CryptoAsset' Maydonini Inkapsulyatsiya Qilish",
      "en": "19. Crypto Wallet — Encapsulating 'CryptoAsset' State"
    },
    "scenario": {
      "uz": "Crypto Wallet tizimida 'coinUnits' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getCoinUnits()' hamda 'setCoinUnits(double val)' metodlarini yarating.",
      "en": "Encapsulate 'CryptoAsset' in Crypto Wallet. Declare 'coinUnits' as private with public getCoinUnits() and setCoinUnits(double val)."
    },
    "requirements": {
      "classes": [
        "CryptoAsset"
      ],
      "privateFields": [
        "coinUnits"
      ],
      "methods": [
        "getCoinUnits",
        "setCoinUnits"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAsset {\n    private double coinUnits;\n\n    public double getCoinUnits() {\n        return this.coinUnits;\n    }\n\n    public void setCoinUnits(double coinUnits) {\n        this.coinUnits = coinUnits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset item = new CryptoAsset();\n        item.setCoinUnits(100);\n        System.out.println(\"Qiymat: \" + item.getCoinUnits());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double coinUnits;\npublic double getCoinUnits() { return this.coinUnits; }\npublic void setCoinUnits(double coinUnits) { this.coinUnits = coinUnits; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 20,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "20. National Library — 'CatalogBook' Maydonini Inkapsulyatsiya Qilish",
      "en": "20. National Library — Encapsulating 'CatalogBook' State"
    },
    "scenario": {
      "uz": "National Library tizimida 'pageCount' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getPageCount()' hamda 'setPageCount(int val)' metodlarini yarating.",
      "en": "Encapsulate 'CatalogBook' in National Library. Declare 'pageCount' as private with public getPageCount() and setPageCount(int val)."
    },
    "requirements": {
      "classes": [
        "CatalogBook"
      ],
      "privateFields": [
        "pageCount"
      ],
      "methods": [
        "getPageCount",
        "setPageCount"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBook {\n    private int pageCount;\n\n    public int getPageCount() {\n        return this.pageCount;\n    }\n\n    public void setPageCount(int pageCount) {\n        this.pageCount = pageCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook item = new CatalogBook();\n        item.setPageCount(100);\n        System.out.println(\"Qiymat: \" + item.getPageCount());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int pageCount;\npublic int getPageCount() { return this.pageCount; }\npublic void setPageCount(int pageCount) { this.pageCount = pageCount; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 21,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "21. BeFit Club — 'GymMember' Maydonini Inkapsulyatsiya Qilish",
      "en": "21. BeFit Club — Encapsulating 'GymMember' State"
    },
    "scenario": {
      "uz": "BeFit Club tizimida 'activeMonths' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getActiveMonths()' hamda 'setActiveMonths(int val)' metodlarini yarating.",
      "en": "Encapsulate 'GymMember' in BeFit Club. Declare 'activeMonths' as private with public getActiveMonths() and setActiveMonths(int val)."
    },
    "requirements": {
      "classes": [
        "GymMember"
      ],
      "privateFields": [
        "activeMonths"
      ],
      "methods": [
        "getActiveMonths",
        "setActiveMonths"
      ]
    },
    "starterCode": "",
    "solution": "class GymMember {\n    private int activeMonths;\n\n    public int getActiveMonths() {\n        return this.activeMonths;\n    }\n\n    public void setActiveMonths(int activeMonths) {\n        this.activeMonths = activeMonths;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember item = new GymMember();\n        item.setActiveMonths(100);\n        System.out.println(\"Qiymat: \" + item.getActiveMonths());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int activeMonths;\npublic int getActiveMonths() { return this.activeMonths; }\npublic void setActiveMonths(int activeMonths) { this.activeMonths = activeMonths; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 22,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "22. Tashkent Parking — 'ParkingBay' Maydonini Inkapsulyatsiya Qilish",
      "en": "22. Tashkent Parking — Encapsulating 'ParkingBay' State"
    },
    "scenario": {
      "uz": "Tashkent Parking tizimida 'hourlyTariff' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getHourlyTariff()' hamda 'setHourlyTariff(double val)' metodlarini yarating.",
      "en": "Encapsulate 'ParkingBay' in Tashkent Parking. Declare 'hourlyTariff' as private with public getHourlyTariff() and setHourlyTariff(double val)."
    },
    "requirements": {
      "classes": [
        "ParkingBay"
      ],
      "privateFields": [
        "hourlyTariff"
      ],
      "methods": [
        "getHourlyTariff",
        "setHourlyTariff"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBay {\n    private double hourlyTariff;\n\n    public double getHourlyTariff() {\n        return this.hourlyTariff;\n    }\n\n    public void setHourlyTariff(double hourlyTariff) {\n        this.hourlyTariff = hourlyTariff;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay item = new ParkingBay();\n        item.setHourlyTariff(100);\n        System.out.println(\"Qiymat: \" + item.getHourlyTariff());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double hourlyTariff;\npublic double getHourlyTariff() { return this.hourlyTariff; }\npublic void setHourlyTariff(double hourlyTariff) { this.hourlyTariff = hourlyTariff; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 23,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "23. Medion Clinic — 'PatientRecord' Maydonini Inkapsulyatsiya Qilish",
      "en": "23. Medion Clinic — Encapsulating 'PatientRecord' State"
    },
    "scenario": {
      "uz": "Medion Clinic tizimida 'pulseRate' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getPulseRate()' hamda 'setPulseRate(int val)' metodlarini yarating.",
      "en": "Encapsulate 'PatientRecord' in Medion Clinic. Declare 'pulseRate' as private with public getPulseRate() and setPulseRate(int val)."
    },
    "requirements": {
      "classes": [
        "PatientRecord"
      ],
      "privateFields": [
        "pulseRate"
      ],
      "methods": [
        "getPulseRate",
        "setPulseRate"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecord {\n    private int pulseRate;\n\n    public int getPulseRate() {\n        return this.pulseRate;\n    }\n\n    public void setPulseRate(int pulseRate) {\n        this.pulseRate = pulseRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord item = new PatientRecord();\n        item.setPulseRate(100);\n        System.out.println(\"Qiymat: \" + item.getPulseRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int pulseRate;\npublic int getPulseRate() { return this.pulseRate; }\npublic void setPulseRate(int pulseRate) { this.pulseRate = pulseRate; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 24,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "24. Hyatt Regency — 'HotelReservation' Maydonini Inkapsulyatsiya Qilish",
      "en": "24. Hyatt Regency — Encapsulating 'HotelReservation' State"
    },
    "scenario": {
      "uz": "Hyatt Regency tizimida 'nightlyRate' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getNightlyRate()' hamda 'setNightlyRate(double val)' metodlarini yarating.",
      "en": "Encapsulate 'HotelReservation' in Hyatt Regency. Declare 'nightlyRate' as private with public getNightlyRate() and setNightlyRate(double val)."
    },
    "requirements": {
      "classes": [
        "HotelReservation"
      ],
      "privateFields": [
        "nightlyRate"
      ],
      "methods": [
        "getNightlyRate",
        "setNightlyRate"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservation {\n    private double nightlyRate;\n\n    public double getNightlyRate() {\n        return this.nightlyRate;\n    }\n\n    public void setNightlyRate(double nightlyRate) {\n        this.nightlyRate = nightlyRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation item = new HotelReservation();\n        item.setNightlyRate(100);\n        System.out.println(\"Qiymat: \" + item.getNightlyRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double nightlyRate;\npublic double getNightlyRate() { return this.nightlyRate; }\npublic void setNightlyRate(double nightlyRate) { this.nightlyRate = nightlyRate; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 25,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "25. Premier Cinema — 'CinemaTicket' Maydonini Inkapsulyatsiya Qilish",
      "en": "25. Premier Cinema — Encapsulating 'CinemaTicket' State"
    },
    "scenario": {
      "uz": "Premier Cinema tizimida 'hallSeatNo' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getHallSeatNo()' hamda 'setHallSeatNo(int val)' metodlarini yarating.",
      "en": "Encapsulate 'CinemaTicket' in Premier Cinema. Declare 'hallSeatNo' as private with public getHallSeatNo() and setHallSeatNo(int val)."
    },
    "requirements": {
      "classes": [
        "CinemaTicket"
      ],
      "privateFields": [
        "hallSeatNo"
      ],
      "methods": [
        "getHallSeatNo",
        "setHallSeatNo"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicket {\n    private int hallSeatNo;\n\n    public int getHallSeatNo() {\n        return this.hallSeatNo;\n    }\n\n    public void setHallSeatNo(int hallSeatNo) {\n        this.hallSeatNo = hallSeatNo;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket item = new CinemaTicket();\n        item.setHallSeatNo(100);\n        System.out.println(\"Qiymat: \" + item.getHallSeatNo());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int hallSeatNo;\npublic int getHallSeatNo() { return this.hallSeatNo; }\npublic void setHallSeatNo(int hallSeatNo) { this.hallSeatNo = hallSeatNo; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 26,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "26. Yandex Scooter — 'ElectricScooter' Maydonini Inkapsulyatsiya Qilish",
      "en": "26. Yandex Scooter — Encapsulating 'ElectricScooter' State"
    },
    "scenario": {
      "uz": "Yandex Scooter tizimida 'maxSpeedKmh' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getMaxSpeedKmh()' hamda 'setMaxSpeedKmh(double val)' metodlarini yarating.",
      "en": "Encapsulate 'ElectricScooter' in Yandex Scooter. Declare 'maxSpeedKmh' as private with public getMaxSpeedKmh() and setMaxSpeedKmh(double val)."
    },
    "requirements": {
      "classes": [
        "ElectricScooter"
      ],
      "privateFields": [
        "maxSpeedKmh"
      ],
      "methods": [
        "getMaxSpeedKmh",
        "setMaxSpeedKmh"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooter {\n    private double maxSpeedKmh;\n\n    public double getMaxSpeedKmh() {\n        return this.maxSpeedKmh;\n    }\n\n    public void setMaxSpeedKmh(double maxSpeedKmh) {\n        this.maxSpeedKmh = maxSpeedKmh;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter item = new ElectricScooter();\n        item.setMaxSpeedKmh(100);\n        System.out.println(\"Qiymat: \" + item.getMaxSpeedKmh());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double maxSpeedKmh;\npublic double getMaxSpeedKmh() { return this.maxSpeedKmh; }\npublic void setMaxSpeedKmh(double maxSpeedKmh) { this.maxSpeedKmh = maxSpeedKmh; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 27,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "27. Weather Network — 'MeteoStation' Maydonini Inkapsulyatsiya Qilish",
      "en": "27. Weather Network — Encapsulating 'MeteoStation' State"
    },
    "scenario": {
      "uz": "Weather Network tizimida 'humidityPct' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getHumidityPct()' hamda 'setHumidityPct(int val)' metodlarini yarating.",
      "en": "Encapsulate 'MeteoStation' in Weather Network. Declare 'humidityPct' as private with public getHumidityPct() and setHumidityPct(int val)."
    },
    "requirements": {
      "classes": [
        "MeteoStation"
      ],
      "privateFields": [
        "humidityPct"
      ],
      "methods": [
        "getHumidityPct",
        "setHumidityPct"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStation {\n    private int humidityPct;\n\n    public int getHumidityPct() {\n        return this.humidityPct;\n    }\n\n    public void setHumidityPct(int humidityPct) {\n        this.humidityPct = humidityPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation item = new MeteoStation();\n        item.setHumidityPct(100);\n        System.out.println(\"Qiymat: \" + item.getHumidityPct());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private int humidityPct;\npublic int getHumidityPct() { return this.humidityPct; }\npublic void setHumidityPct(int humidityPct) { this.humidityPct = humidityPct; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 28,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "28. OpenMarket Auction — 'AuctionLot' Maydonini Inkapsulyatsiya Qilish",
      "en": "28. OpenMarket Auction — Encapsulating 'AuctionLot' State"
    },
    "scenario": {
      "uz": "OpenMarket Auction tizimida 'reservePrice' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getReservePrice()' hamda 'setReservePrice(double val)' metodlarini yarating.",
      "en": "Encapsulate 'AuctionLot' in OpenMarket Auction. Declare 'reservePrice' as private with public getReservePrice() and setReservePrice(double val)."
    },
    "requirements": {
      "classes": [
        "AuctionLot"
      ],
      "privateFields": [
        "reservePrice"
      ],
      "methods": [
        "getReservePrice",
        "setReservePrice"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLot {\n    private double reservePrice;\n\n    public double getReservePrice() {\n        return this.reservePrice;\n    }\n\n    public void setReservePrice(double reservePrice) {\n        this.reservePrice = reservePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot item = new AuctionLot();\n        item.setReservePrice(100);\n        System.out.println(\"Qiymat: \" + item.getReservePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double reservePrice;\npublic double getReservePrice() { return this.reservePrice; }\npublic void setReservePrice(double reservePrice) { this.reservePrice = reservePrice; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 29,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "29. Solar Energy Grid — 'SolarInverter' Maydonini Inkapsulyatsiya Qilish",
      "en": "29. Solar Energy Grid — Encapsulating 'SolarInverter' State"
    },
    "scenario": {
      "uz": "Solar Energy Grid tizimida 'powerKw' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getPowerKw()' hamda 'setPowerKw(double val)' metodlarini yarating.",
      "en": "Encapsulate 'SolarInverter' in Solar Energy Grid. Declare 'powerKw' as private with public getPowerKw() and setPowerKw(double val)."
    },
    "requirements": {
      "classes": [
        "SolarInverter"
      ],
      "privateFields": [
        "powerKw"
      ],
      "methods": [
        "getPowerKw",
        "setPowerKw"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverter {\n    private double powerKw;\n\n    public double getPowerKw() {\n        return this.powerKw;\n    }\n\n    public void setPowerKw(double powerKw) {\n        this.powerKw = powerKw;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter item = new SolarInverter();\n        item.setPowerKw(100);\n        System.out.println(\"Qiymat: \" + item.getPowerKw());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double powerKw;\npublic double getPowerKw() { return this.powerKw; }\npublic void setPowerKw(double powerKw) { this.powerKw = powerKw; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 30,
    "tier": 1,
    "tierName": "1-Bosqich: 'private' va Getter/Setter",
    "sector": "Boshlang'ich",
    "title": {
      "uz": "30. O'zbekiston Temir Yo'llari — 'TrainRoute' Maydonini Inkapsulyatsiya Qilish",
      "en": "30. O'zbekiston Temir Yo'llari — Encapsulating 'TrainRoute' State"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari tizimida 'travelDurationHours' maydoniga to'g'ridan-to'g'ri kirishni taqiqlang. Uni 'private' qiling va 'getTravelDurationHours()' hamda 'setTravelDurationHours(double val)' metodlarini yarating.",
      "en": "Encapsulate 'TrainRoute' in O'zbekiston Temir Yo'llari. Declare 'travelDurationHours' as private with public getTravelDurationHours() and setTravelDurationHours(double val)."
    },
    "requirements": {
      "classes": [
        "TrainRoute"
      ],
      "privateFields": [
        "travelDurationHours"
      ],
      "methods": [
        "getTravelDurationHours",
        "setTravelDurationHours"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRoute {\n    private double travelDurationHours;\n\n    public double getTravelDurationHours() {\n        return this.travelDurationHours;\n    }\n\n    public void setTravelDurationHours(double travelDurationHours) {\n        this.travelDurationHours = travelDurationHours;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute item = new TrainRoute();\n        item.setTravelDurationHours(100);\n        System.out.println(\"Qiymat: \" + item.getTravelDurationHours());\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya — ma'lumotlarni ruxsatsiz o'zgartirishdan himoyalash va ularga faqat ruxsat berilgan maxsus usullar orqali kirish imkonini beruvchi asosiy OOP tamoyili.",
      "theoryEn": "Encapsulation protects internal object state by hiding mutable variables behind controlled public accessors and mutators.",
      "cleanCode": "private double travelDurationHours;\npublic double getTravelDurationHours() { return this.travelDurationHours; }\npublic void setTravelDurationHours(double travelDurationHours) { this.travelDurationHours = travelDurationHours; }",
      "breakdown": [
        "<code>private</code>: Maydonni sinf tashqarisidan to'g'ridan-to'g'ri ko'rinmaydigan qiladi."
      ],
      "pitfalls": "Maydonni 'public' qoldirish ma'lumotlarning butunligini (data integrity) buzadi.",
      "cw2Tip": "CW2 baholash mezonida barcha model klasslarida 100% inkapsulyatsiya talab qilinadi."
    }
  },
  {
    "id": 31,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "31. Uzum Market — Noto'g'ri Qiymatlarni Bloklash",
      "en": "31. Uzum Market — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Uzum Market da 'price' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setPrice' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Uzum Market setter for 'price'."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "methods": [
        "setPrice",
        "getPrice"
      ],
      "privateFields": [
        "price"
      ]
    },
    "starterCode": "",
    "solution": "class Product {\n    private double price;\n\n    public void setPrice(double val) {\n        if (val >= 0) {\n            this.price = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product item = new Product();\n        item.setPrice(50);\n        item.setPrice(-10);\n        System.out.println(\"Qolgan holat: \" + item.getPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.price = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 32,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "32. Payme Wallet — Noto'g'ri Qiymatlarni Bloklash",
      "en": "32. Payme Wallet — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Payme Wallet da 'balance' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setBalance' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Payme Wallet setter for 'balance'."
    },
    "requirements": {
      "classes": [
        "WalletUser"
      ],
      "methods": [
        "setBalance",
        "getBalance"
      ],
      "privateFields": [
        "balance"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUser {\n    private double balance;\n\n    public void setBalance(double val) {\n        if (val >= 0) {\n            this.balance = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser item = new WalletUser();\n        item.setBalance(50);\n        item.setBalance(-10);\n        System.out.println(\"Qolgan holat: \" + item.getBalance());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.balance = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 33,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "33. Yandex Go — Noto'g'ri Qiymatlarni Bloklash",
      "en": "33. Yandex Go — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Yandex Go da 'distanceKm' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setDistanceKm' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Yandex Go setter for 'distanceKm'."
    },
    "requirements": {
      "classes": [
        "TaxiRide"
      ],
      "methods": [
        "setDistanceKm",
        "getDistanceKm"
      ],
      "privateFields": [
        "distanceKm"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRide {\n    private double distanceKm;\n\n    public void setDistanceKm(double val) {\n        if (val >= 0) {\n            this.distanceKm = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getDistanceKm() {\n        return this.distanceKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide item = new TaxiRide();\n        item.setDistanceKm(50);\n        item.setDistanceKm(-10);\n        System.out.println(\"Qolgan holat: \" + item.getDistanceKm());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.distanceKm = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 34,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "34. Korzinka Go — Noto'g'ri Qiymatlarni Bloklash",
      "en": "34. Korzinka Go — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Korzinka Go da 'bonusPoints' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setBonusPoints' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Korzinka Go setter for 'bonusPoints'."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard"
      ],
      "methods": [
        "setBonusPoints",
        "getBonusPoints"
      ],
      "privateFields": [
        "bonusPoints"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCard {\n    private int bonusPoints;\n\n    public void setBonusPoints(int val) {\n        if (val >= 0) {\n            this.bonusPoints = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getBonusPoints() {\n        return this.bonusPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard item = new LoyaltyCard();\n        item.setBonusPoints(50);\n        item.setBonusPoints(-10);\n        System.out.println(\"Qolgan holat: \" + item.getBonusPoints());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.bonusPoints = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 35,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "35. WIUT Portal — Noto'g'ri Qiymatlarni Bloklash",
      "en": "35. WIUT Portal — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "WIUT Portal da 'gpa' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setGpa' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in WIUT Portal setter for 'gpa'."
    },
    "requirements": {
      "classes": [
        "Student"
      ],
      "methods": [
        "setGpa",
        "getGpa"
      ],
      "privateFields": [
        "gpa"
      ]
    },
    "starterCode": "",
    "solution": "class Student {\n    private double gpa;\n\n    public void setGpa(double val) {\n        if (val >= 0) {\n            this.gpa = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getGpa() {\n        return this.gpa;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student item = new Student();\n        item.setGpa(50);\n        item.setGpa(-10);\n        System.out.println(\"Qolgan holat: \" + item.getGpa());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.gpa = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 36,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "36. Click Pay — Noto'g'ri Qiymatlarni Bloklash",
      "en": "36. Click Pay — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Click Pay da 'amount' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setAmount' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Click Pay setter for 'amount'."
    },
    "requirements": {
      "classes": [
        "PaymentTxn"
      ],
      "methods": [
        "setAmount",
        "getAmount"
      ],
      "privateFields": [
        "amount"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxn {\n    private double amount;\n\n    public void setAmount(double val) {\n        if (val >= 0) {\n            this.amount = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn item = new PaymentTxn();\n        item.setAmount(50);\n        item.setAmount(-10);\n        System.out.println(\"Qolgan holat: \" + item.getAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.amount = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 37,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "37. Telegram Bot — Noto'g'ri Qiymatlarni Bloklash",
      "en": "37. Telegram Bot — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Telegram Bot da 'chatId' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setChatId' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Telegram Bot setter for 'chatId'."
    },
    "requirements": {
      "classes": [
        "BotMessage"
      ],
      "methods": [
        "setChatId",
        "getChatId"
      ],
      "privateFields": [
        "chatId"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessage {\n    private long chatId;\n\n    public void setChatId(long val) {\n        if (val >= 0) {\n            this.chatId = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public long getChatId() {\n        return this.chatId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage item = new BotMessage();\n        item.setChatId(50);\n        item.setChatId(-10);\n        System.out.println(\"Qolgan holat: \" + item.getChatId());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.chatId = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 38,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "38. UzAirways — Noto'g'ri Qiymatlarni Bloklash",
      "en": "38. UzAirways — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "UzAirways da 'farePrice' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setFarePrice' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in UzAirways setter for 'farePrice'."
    },
    "requirements": {
      "classes": [
        "FlightTicket"
      ],
      "methods": [
        "setFarePrice",
        "getFarePrice"
      ],
      "privateFields": [
        "farePrice"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicket {\n    private double farePrice;\n\n    public void setFarePrice(double val) {\n        if (val >= 0) {\n            this.farePrice = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getFarePrice() {\n        return this.farePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket item = new FlightTicket();\n        item.setFarePrice(50);\n        item.setFarePrice(-10);\n        System.out.println(\"Qolgan holat: \" + item.getFarePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.farePrice = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 39,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "39. IT Park Academy — Noto'g'ri Qiymatlarni Bloklash",
      "en": "39. IT Park Academy — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "IT Park Academy da 'durationWeeks' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setDurationWeeks' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in IT Park Academy setter for 'durationWeeks'."
    },
    "requirements": {
      "classes": [
        "BootcampCourse"
      ],
      "methods": [
        "setDurationWeeks",
        "getDurationWeeks"
      ],
      "privateFields": [
        "durationWeeks"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourse {\n    private int durationWeeks;\n\n    public void setDurationWeeks(int val) {\n        if (val >= 0) {\n            this.durationWeeks = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getDurationWeeks() {\n        return this.durationWeeks;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse item = new BootcampCourse();\n        item.setDurationWeeks(50);\n        item.setDurationWeeks(-10);\n        System.out.println(\"Qolgan holat: \" + item.getDurationWeeks());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.durationWeeks = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 40,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "40. Anorbank — Noto'g'ri Qiymatlarni Bloklash",
      "en": "40. Anorbank — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Anorbank da 'creditLimit' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setCreditLimit' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Anorbank setter for 'creditLimit'."
    },
    "requirements": {
      "classes": [
        "DebitCard"
      ],
      "methods": [
        "setCreditLimit",
        "getCreditLimit"
      ],
      "privateFields": [
        "creditLimit"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCard {\n    private double creditLimit;\n\n    public void setCreditLimit(double val) {\n        if (val >= 0) {\n            this.creditLimit = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getCreditLimit() {\n        return this.creditLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard item = new DebitCard();\n        item.setCreditLimit(50);\n        item.setCreditLimit(-10);\n        System.out.println(\"Qolgan holat: \" + item.getCreditLimit());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.creditLimit = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 41,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "41. Oson Apteka — Noto'g'ri Qiymatlarni Bloklash",
      "en": "41. Oson Apteka — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Oson Apteka da 'stockCount' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setStockCount' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Oson Apteka setter for 'stockCount'."
    },
    "requirements": {
      "classes": [
        "Medicine"
      ],
      "methods": [
        "setStockCount",
        "getStockCount"
      ],
      "privateFields": [
        "stockCount"
      ]
    },
    "starterCode": "",
    "solution": "class Medicine {\n    private int stockCount;\n\n    public void setStockCount(int val) {\n        if (val >= 0) {\n            this.stockCount = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getStockCount() {\n        return this.stockCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine item = new Medicine();\n        item.setStockCount(50);\n        item.setStockCount(-10);\n        System.out.println(\"Qolgan holat: \" + item.getStockCount());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.stockCount = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 42,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "42. Evos FastFood — Noto'g'ri Qiymatlarni Bloklash",
      "en": "42. Evos FastFood — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Evos FastFood da 'totalSum' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setTotalSum' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Evos FastFood setter for 'totalSum'."
    },
    "requirements": {
      "classes": [
        "FoodOrder"
      ],
      "methods": [
        "setTotalSum",
        "getTotalSum"
      ],
      "privateFields": [
        "totalSum"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrder {\n    private double totalSum;\n\n    public void setTotalSum(double val) {\n        if (val >= 0) {\n            this.totalSum = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getTotalSum() {\n        return this.totalSum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder item = new FoodOrder();\n        item.setTotalSum(50);\n        item.setTotalSum(-10);\n        System.out.println(\"Qolgan holat: \" + item.getTotalSum());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.totalSum = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 43,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "43. Bellissimo Pizza — Noto'g'ri Qiymatlarni Bloklash",
      "en": "43. Bellissimo Pizza — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da 'prepTimeMinutes' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setPrepTimeMinutes' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Bellissimo Pizza setter for 'prepTimeMinutes'."
    },
    "requirements": {
      "classes": [
        "PizzaOrder"
      ],
      "methods": [
        "setPrepTimeMinutes",
        "getPrepTimeMinutes"
      ],
      "privateFields": [
        "prepTimeMinutes"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrder {\n    private int prepTimeMinutes;\n\n    public void setPrepTimeMinutes(int val) {\n        if (val >= 0) {\n            this.prepTimeMinutes = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getPrepTimeMinutes() {\n        return this.prepTimeMinutes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder item = new PizzaOrder();\n        item.setPrepTimeMinutes(50);\n        item.setPrepTimeMinutes(-10);\n        System.out.println(\"Qolgan holat: \" + item.getPrepTimeMinutes());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.prepTimeMinutes = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 44,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "44. Milliy TV — Noto'g'ri Qiymatlarni Bloklash",
      "en": "44. Milliy TV — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Milliy TV da 'viewersRating' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setViewersRating' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Milliy TV setter for 'viewersRating'."
    },
    "requirements": {
      "classes": [
        "BroadcastShow"
      ],
      "methods": [
        "setViewersRating",
        "getViewersRating"
      ],
      "privateFields": [
        "viewersRating"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShow {\n    private double viewersRating;\n\n    public void setViewersRating(double val) {\n        if (val >= 0) {\n            this.viewersRating = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getViewersRating() {\n        return this.viewersRating;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow item = new BroadcastShow();\n        item.setViewersRating(50);\n        item.setViewersRating(-10);\n        System.out.println(\"Qolgan holat: \" + item.getViewersRating());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.viewersRating = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 45,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "45. Spotify Sound — Noto'g'ri Qiymatlarni Bloklash",
      "en": "45. Spotify Sound — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Spotify Sound da 'durationSec' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setDurationSec' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Spotify Sound setter for 'durationSec'."
    },
    "requirements": {
      "classes": [
        "AudioTrack"
      ],
      "methods": [
        "setDurationSec",
        "getDurationSec"
      ],
      "privateFields": [
        "durationSec"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrack {\n    private int durationSec;\n\n    public void setDurationSec(int val) {\n        if (val >= 0) {\n            this.durationSec = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getDurationSec() {\n        return this.durationSec;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack item = new AudioTrack();\n        item.setDurationSec(50);\n        item.setDurationSec(-10);\n        System.out.println(\"Qolgan holat: \" + item.getDurationSec());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.durationSec = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 46,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "46. Smart Thermostat — Noto'g'ri Qiymatlarni Bloklash",
      "en": "46. Smart Thermostat — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Smart Thermostat da 'targetTemp' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setTargetTemp' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Smart Thermostat setter for 'targetTemp'."
    },
    "requirements": {
      "classes": [
        "Thermostat"
      ],
      "methods": [
        "setTargetTemp",
        "getTargetTemp"
      ],
      "privateFields": [
        "targetTemp"
      ]
    },
    "starterCode": "",
    "solution": "class Thermostat {\n    private double targetTemp;\n\n    public void setTargetTemp(double val) {\n        if (val >= 0) {\n            this.targetTemp = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getTargetTemp() {\n        return this.targetTemp;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat item = new Thermostat();\n        item.setTargetTemp(50);\n        item.setTargetTemp(-10);\n        System.out.println(\"Qolgan holat: \" + item.getTargetTemp());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.targetTemp = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 47,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "47. Drone Delivery — Noto'g'ri Qiymatlarni Bloklash",
      "en": "47. Drone Delivery — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Drone Delivery da 'batteryPct' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setBatteryPct' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Drone Delivery setter for 'batteryPct'."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone"
      ],
      "methods": [
        "setBatteryPct",
        "getBatteryPct"
      ],
      "privateFields": [
        "batteryPct"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDrone {\n    private int batteryPct;\n\n    public void setBatteryPct(int val) {\n        if (val >= 0) {\n            this.batteryPct = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getBatteryPct() {\n        return this.batteryPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone item = new DeliveryDrone();\n        item.setBatteryPct(50);\n        item.setBatteryPct(-10);\n        System.out.println(\"Qolgan holat: \" + item.getBatteryPct());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.batteryPct = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 48,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "48. Smart Warehouse — Noto'g'ri Qiymatlarni Bloklash",
      "en": "48. Smart Warehouse — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Smart Warehouse da 'weightLimitKg' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setWeightLimitKg' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Smart Warehouse setter for 'weightLimitKg'."
    },
    "requirements": {
      "classes": [
        "StorageBay"
      ],
      "methods": [
        "setWeightLimitKg",
        "getWeightLimitKg"
      ],
      "privateFields": [
        "weightLimitKg"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBay {\n    private double weightLimitKg;\n\n    public void setWeightLimitKg(double val) {\n        if (val >= 0) {\n            this.weightLimitKg = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getWeightLimitKg() {\n        return this.weightLimitKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay item = new StorageBay();\n        item.setWeightLimitKg(50);\n        item.setWeightLimitKg(-10);\n        System.out.println(\"Qolgan holat: \" + item.getWeightLimitKg());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.weightLimitKg = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 49,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "49. Crypto Wallet — Noto'g'ri Qiymatlarni Bloklash",
      "en": "49. Crypto Wallet — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Crypto Wallet da 'coinUnits' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setCoinUnits' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Crypto Wallet setter for 'coinUnits'."
    },
    "requirements": {
      "classes": [
        "CryptoAsset"
      ],
      "methods": [
        "setCoinUnits",
        "getCoinUnits"
      ],
      "privateFields": [
        "coinUnits"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAsset {\n    private double coinUnits;\n\n    public void setCoinUnits(double val) {\n        if (val >= 0) {\n            this.coinUnits = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getCoinUnits() {\n        return this.coinUnits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset item = new CryptoAsset();\n        item.setCoinUnits(50);\n        item.setCoinUnits(-10);\n        System.out.println(\"Qolgan holat: \" + item.getCoinUnits());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.coinUnits = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 50,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "50. National Library — Noto'g'ri Qiymatlarni Bloklash",
      "en": "50. National Library — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "National Library da 'pageCount' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setPageCount' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in National Library setter for 'pageCount'."
    },
    "requirements": {
      "classes": [
        "CatalogBook"
      ],
      "methods": [
        "setPageCount",
        "getPageCount"
      ],
      "privateFields": [
        "pageCount"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBook {\n    private int pageCount;\n\n    public void setPageCount(int val) {\n        if (val >= 0) {\n            this.pageCount = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getPageCount() {\n        return this.pageCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook item = new CatalogBook();\n        item.setPageCount(50);\n        item.setPageCount(-10);\n        System.out.println(\"Qolgan holat: \" + item.getPageCount());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.pageCount = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 51,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "51. BeFit Club — Noto'g'ri Qiymatlarni Bloklash",
      "en": "51. BeFit Club — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "BeFit Club da 'activeMonths' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setActiveMonths' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in BeFit Club setter for 'activeMonths'."
    },
    "requirements": {
      "classes": [
        "GymMember"
      ],
      "methods": [
        "setActiveMonths",
        "getActiveMonths"
      ],
      "privateFields": [
        "activeMonths"
      ]
    },
    "starterCode": "",
    "solution": "class GymMember {\n    private int activeMonths;\n\n    public void setActiveMonths(int val) {\n        if (val >= 0) {\n            this.activeMonths = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getActiveMonths() {\n        return this.activeMonths;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember item = new GymMember();\n        item.setActiveMonths(50);\n        item.setActiveMonths(-10);\n        System.out.println(\"Qolgan holat: \" + item.getActiveMonths());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.activeMonths = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 52,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "52. Tashkent Parking — Noto'g'ri Qiymatlarni Bloklash",
      "en": "52. Tashkent Parking — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Tashkent Parking da 'hourlyTariff' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setHourlyTariff' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Tashkent Parking setter for 'hourlyTariff'."
    },
    "requirements": {
      "classes": [
        "ParkingBay"
      ],
      "methods": [
        "setHourlyTariff",
        "getHourlyTariff"
      ],
      "privateFields": [
        "hourlyTariff"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBay {\n    private double hourlyTariff;\n\n    public void setHourlyTariff(double val) {\n        if (val >= 0) {\n            this.hourlyTariff = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getHourlyTariff() {\n        return this.hourlyTariff;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay item = new ParkingBay();\n        item.setHourlyTariff(50);\n        item.setHourlyTariff(-10);\n        System.out.println(\"Qolgan holat: \" + item.getHourlyTariff());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.hourlyTariff = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 53,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "53. Medion Clinic — Noto'g'ri Qiymatlarni Bloklash",
      "en": "53. Medion Clinic — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Medion Clinic da 'pulseRate' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setPulseRate' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Medion Clinic setter for 'pulseRate'."
    },
    "requirements": {
      "classes": [
        "PatientRecord"
      ],
      "methods": [
        "setPulseRate",
        "getPulseRate"
      ],
      "privateFields": [
        "pulseRate"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecord {\n    private int pulseRate;\n\n    public void setPulseRate(int val) {\n        if (val >= 0) {\n            this.pulseRate = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getPulseRate() {\n        return this.pulseRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord item = new PatientRecord();\n        item.setPulseRate(50);\n        item.setPulseRate(-10);\n        System.out.println(\"Qolgan holat: \" + item.getPulseRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.pulseRate = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 54,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "54. Hyatt Regency — Noto'g'ri Qiymatlarni Bloklash",
      "en": "54. Hyatt Regency — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Hyatt Regency da 'nightlyRate' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setNightlyRate' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Hyatt Regency setter for 'nightlyRate'."
    },
    "requirements": {
      "classes": [
        "HotelReservation"
      ],
      "methods": [
        "setNightlyRate",
        "getNightlyRate"
      ],
      "privateFields": [
        "nightlyRate"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservation {\n    private double nightlyRate;\n\n    public void setNightlyRate(double val) {\n        if (val >= 0) {\n            this.nightlyRate = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getNightlyRate() {\n        return this.nightlyRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation item = new HotelReservation();\n        item.setNightlyRate(50);\n        item.setNightlyRate(-10);\n        System.out.println(\"Qolgan holat: \" + item.getNightlyRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.nightlyRate = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 55,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "55. Premier Cinema — Noto'g'ri Qiymatlarni Bloklash",
      "en": "55. Premier Cinema — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Premier Cinema da 'hallSeatNo' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setHallSeatNo' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Premier Cinema setter for 'hallSeatNo'."
    },
    "requirements": {
      "classes": [
        "CinemaTicket"
      ],
      "methods": [
        "setHallSeatNo",
        "getHallSeatNo"
      ],
      "privateFields": [
        "hallSeatNo"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicket {\n    private int hallSeatNo;\n\n    public void setHallSeatNo(int val) {\n        if (val >= 0) {\n            this.hallSeatNo = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getHallSeatNo() {\n        return this.hallSeatNo;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket item = new CinemaTicket();\n        item.setHallSeatNo(50);\n        item.setHallSeatNo(-10);\n        System.out.println(\"Qolgan holat: \" + item.getHallSeatNo());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.hallSeatNo = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 56,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "56. Yandex Scooter — Noto'g'ri Qiymatlarni Bloklash",
      "en": "56. Yandex Scooter — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Yandex Scooter da 'maxSpeedKmh' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setMaxSpeedKmh' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Yandex Scooter setter for 'maxSpeedKmh'."
    },
    "requirements": {
      "classes": [
        "ElectricScooter"
      ],
      "methods": [
        "setMaxSpeedKmh",
        "getMaxSpeedKmh"
      ],
      "privateFields": [
        "maxSpeedKmh"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooter {\n    private double maxSpeedKmh;\n\n    public void setMaxSpeedKmh(double val) {\n        if (val >= 0) {\n            this.maxSpeedKmh = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getMaxSpeedKmh() {\n        return this.maxSpeedKmh;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter item = new ElectricScooter();\n        item.setMaxSpeedKmh(50);\n        item.setMaxSpeedKmh(-10);\n        System.out.println(\"Qolgan holat: \" + item.getMaxSpeedKmh());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.maxSpeedKmh = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 57,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "57. Weather Network — Noto'g'ri Qiymatlarni Bloklash",
      "en": "57. Weather Network — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Weather Network da 'humidityPct' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setHumidityPct' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Weather Network setter for 'humidityPct'."
    },
    "requirements": {
      "classes": [
        "MeteoStation"
      ],
      "methods": [
        "setHumidityPct",
        "getHumidityPct"
      ],
      "privateFields": [
        "humidityPct"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStation {\n    private int humidityPct;\n\n    public void setHumidityPct(int val) {\n        if (val >= 0) {\n            this.humidityPct = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public int getHumidityPct() {\n        return this.humidityPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation item = new MeteoStation();\n        item.setHumidityPct(50);\n        item.setHumidityPct(-10);\n        System.out.println(\"Qolgan holat: \" + item.getHumidityPct());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.humidityPct = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 58,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "58. OpenMarket Auction — Noto'g'ri Qiymatlarni Bloklash",
      "en": "58. OpenMarket Auction — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "OpenMarket Auction da 'reservePrice' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setReservePrice' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in OpenMarket Auction setter for 'reservePrice'."
    },
    "requirements": {
      "classes": [
        "AuctionLot"
      ],
      "methods": [
        "setReservePrice",
        "getReservePrice"
      ],
      "privateFields": [
        "reservePrice"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLot {\n    private double reservePrice;\n\n    public void setReservePrice(double val) {\n        if (val >= 0) {\n            this.reservePrice = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getReservePrice() {\n        return this.reservePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot item = new AuctionLot();\n        item.setReservePrice(50);\n        item.setReservePrice(-10);\n        System.out.println(\"Qolgan holat: \" + item.getReservePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.reservePrice = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 59,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "59. Solar Energy Grid — Noto'g'ri Qiymatlarni Bloklash",
      "en": "59. Solar Energy Grid — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "Solar Energy Grid da 'powerKw' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setPowerKw' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in Solar Energy Grid setter for 'powerKw'."
    },
    "requirements": {
      "classes": [
        "SolarInverter"
      ],
      "methods": [
        "setPowerKw",
        "getPowerKw"
      ],
      "privateFields": [
        "powerKw"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverter {\n    private double powerKw;\n\n    public void setPowerKw(double val) {\n        if (val >= 0) {\n            this.powerKw = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getPowerKw() {\n        return this.powerKw;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter item = new SolarInverter();\n        item.setPowerKw(50);\n        item.setPowerKw(-10);\n        System.out.println(\"Qolgan holat: \" + item.getPowerKw());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.powerKw = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 60,
    "tier": 2,
    "tierName": "2-Bosqich: Setter Ichida Himoyaviy Validatsiya",
    "sector": "Amaliyot",
    "title": {
      "uz": "60. O'zbekiston Temir Yo'llari — Noto'g'ri Qiymatlarni Bloklash",
      "en": "60. O'zbekiston Temir Yo'llari — Defensive Validation Guard"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da 'travelDurationHours' hech qachon manfiy (0 dan kichik) bo'lishi mumkin emas. 'setTravelDurationHours' metodida validatsiya qo'shing: agar val >= 0 bo'lsa o'rnating, aks holda ogohlantirish bering.",
      "en": "Enforce non-negative validation in O'zbekiston Temir Yo'llari setter for 'travelDurationHours'."
    },
    "requirements": {
      "classes": [
        "TrainRoute"
      ],
      "methods": [
        "setTravelDurationHours",
        "getTravelDurationHours"
      ],
      "privateFields": [
        "travelDurationHours"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRoute {\n    private double travelDurationHours;\n\n    public void setTravelDurationHours(double val) {\n        if (val >= 0) {\n            this.travelDurationHours = val;\n        } else {\n            System.out.println(\"Xato: Qiymat manfiy bo'lishi mumkin emas!\");\n        }\n    }\n\n    public double getTravelDurationHours() {\n        return this.travelDurationHours;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute item = new TrainRoute();\n        item.setTravelDurationHours(50);\n        item.setTravelDurationHours(-10);\n        System.out.println(\"Qolgan holat: \" + item.getTravelDurationHours());\n    }\n}",
    "detailedSolution": {
      "theory": "Setter metodlarining eng muhim vazifasi — qorovul (guard clause) sifatida noto'g'ri biznes ma'lumotlarini Heap xotiradagi ob'yektga kirishiga yo'l qo'ymaslikdir.",
      "theoryEn": "Mutators serve as defensive guard barriers preventing corrupt or negative state values from entering persistent memory.",
      "cleanCode": "if (val >= 0) { this.travelDurationHours = val; }",
      "breakdown": [
        "<code>if (val >= 0)</code>: Noto'g'ri manfiy qiymatlardan himoyalovchi mantiqiy to'siq."
      ],
      "pitfalls": "Validatsiyani faqat konsol kiritish joyida emas, aynan model sinfi ichida tekshirish shart.",
      "cw2Tip": "Viva imtihonida: 'Nega public maydon qilib qo'yib tekshiruvni tashqarida qilmadik?' javob: Yagona mas'uliyat va ob'yekt yaxlitligi uchun!"
    }
  },
  {
    "id": 61,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "61. Uzum Market — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "61. Uzum Market — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Uzum Market tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Uzum Market using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "Product"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "price"
      ]
    },
    "starterCode": "",
    "solution": "class Product {\n    private double price;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.price += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.price >= amount) {\n            this.price -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getPrice() {\n        return this.price;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product acc = new Product();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getPrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 62,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "62. Payme Wallet — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "62. Payme Wallet — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Payme Wallet tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Payme Wallet using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "WalletUser"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "balance"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUser {\n    private double balance;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.balance >= amount) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUser acc = new WalletUser();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getBalance());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 63,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "63. Yandex Go — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "63. Yandex Go — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Yandex Go tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Yandex Go using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "TaxiRide"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "distanceKm"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRide {\n    private double distanceKm;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.distanceKm += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.distanceKm >= amount) {\n            this.distanceKm -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getDistanceKm() {\n        return this.distanceKm;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRide acc = new TaxiRide();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getDistanceKm());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 64,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "64. Korzinka Go — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "64. Korzinka Go — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Korzinka Go tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Korzinka Go using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "LoyaltyCard"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "bonusPoints"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCard {\n    private double bonusPoints;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.bonusPoints += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.bonusPoints >= amount) {\n            this.bonusPoints -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBonusPoints() {\n        return this.bonusPoints;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCard acc = new LoyaltyCard();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getBonusPoints());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 65,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "65. WIUT Portal — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "65. WIUT Portal — Atomic State Mutation"
    },
    "scenario": {
      "uz": "WIUT Portal tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in WIUT Portal using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "Student"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "gpa"
      ]
    },
    "starterCode": "",
    "solution": "class Student {\n    private double gpa;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.gpa += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.gpa >= amount) {\n            this.gpa -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getGpa() {\n        return this.gpa;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Student acc = new Student();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getGpa());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 66,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "66. Click Pay — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "66. Click Pay — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Click Pay tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Click Pay using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "PaymentTxn"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "amount"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxn {\n    private double amount;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.amount += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.amount >= amount) {\n            this.amount -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getAmount() {\n        return this.amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxn acc = new PaymentTxn();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 67,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "67. Telegram Bot — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "67. Telegram Bot — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Telegram Bot tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Telegram Bot using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "BotMessage"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "chatId"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessage {\n    private double chatId;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.chatId += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.chatId >= amount) {\n            this.chatId -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getChatId() {\n        return this.chatId;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessage acc = new BotMessage();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getChatId());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 68,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "68. UzAirways — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "68. UzAirways — Atomic State Mutation"
    },
    "scenario": {
      "uz": "UzAirways tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in UzAirways using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "FlightTicket"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "farePrice"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicket {\n    private double farePrice;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.farePrice += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.farePrice >= amount) {\n            this.farePrice -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getFarePrice() {\n        return this.farePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicket acc = new FlightTicket();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getFarePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 69,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "69. IT Park Academy — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "69. IT Park Academy — Atomic State Mutation"
    },
    "scenario": {
      "uz": "IT Park Academy tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in IT Park Academy using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "BootcampCourse"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "durationWeeks"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourse {\n    private double durationWeeks;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.durationWeeks += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.durationWeeks >= amount) {\n            this.durationWeeks -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getDurationWeeks() {\n        return this.durationWeeks;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourse acc = new BootcampCourse();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getDurationWeeks());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 70,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "70. Anorbank — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "70. Anorbank — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Anorbank tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Anorbank using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "DebitCard"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "creditLimit"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCard {\n    private double creditLimit;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.creditLimit += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.creditLimit >= amount) {\n            this.creditLimit -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getCreditLimit() {\n        return this.creditLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCard acc = new DebitCard();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getCreditLimit());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 71,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "71. Oson Apteka — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "71. Oson Apteka — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Oson Apteka tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Oson Apteka using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "Medicine"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "stockCount"
      ]
    },
    "starterCode": "",
    "solution": "class Medicine {\n    private double stockCount;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.stockCount += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.stockCount >= amount) {\n            this.stockCount -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getStockCount() {\n        return this.stockCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Medicine acc = new Medicine();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getStockCount());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 72,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "72. Evos FastFood — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "72. Evos FastFood — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Evos FastFood tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Evos FastFood using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "FoodOrder"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "totalSum"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrder {\n    private double totalSum;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.totalSum += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.totalSum >= amount) {\n            this.totalSum -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getTotalSum() {\n        return this.totalSum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrder acc = new FoodOrder();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getTotalSum());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 73,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "73. Bellissimo Pizza — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "73. Bellissimo Pizza — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Bellissimo Pizza tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Bellissimo Pizza using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "PizzaOrder"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "prepTimeMinutes"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrder {\n    private double prepTimeMinutes;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.prepTimeMinutes += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.prepTimeMinutes >= amount) {\n            this.prepTimeMinutes -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getPrepTimeMinutes() {\n        return this.prepTimeMinutes;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrder acc = new PizzaOrder();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getPrepTimeMinutes());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 74,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "74. Milliy TV — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "74. Milliy TV — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Milliy TV tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Milliy TV using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "BroadcastShow"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "viewersRating"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShow {\n    private double viewersRating;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.viewersRating += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.viewersRating >= amount) {\n            this.viewersRating -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getViewersRating() {\n        return this.viewersRating;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShow acc = new BroadcastShow();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getViewersRating());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 75,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "75. Spotify Sound — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "75. Spotify Sound — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Spotify Sound tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Spotify Sound using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "AudioTrack"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "durationSec"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrack {\n    private double durationSec;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.durationSec += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.durationSec >= amount) {\n            this.durationSec -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getDurationSec() {\n        return this.durationSec;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrack acc = new AudioTrack();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getDurationSec());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 76,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "76. Smart Thermostat — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "76. Smart Thermostat — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Smart Thermostat tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Smart Thermostat using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "Thermostat"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "targetTemp"
      ]
    },
    "starterCode": "",
    "solution": "class Thermostat {\n    private double targetTemp;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.targetTemp += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.targetTemp >= amount) {\n            this.targetTemp -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getTargetTemp() {\n        return this.targetTemp;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat acc = new Thermostat();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getTargetTemp());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 77,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "77. Drone Delivery — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "77. Drone Delivery — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Drone Delivery tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Drone Delivery using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "DeliveryDrone"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "batteryPct"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDrone {\n    private double batteryPct;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.batteryPct += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.batteryPct >= amount) {\n            this.batteryPct -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBatteryPct() {\n        return this.batteryPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDrone acc = new DeliveryDrone();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getBatteryPct());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 78,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "78. Smart Warehouse — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "78. Smart Warehouse — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Smart Warehouse tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Smart Warehouse using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "StorageBay"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "weightLimitKg"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBay {\n    private double weightLimitKg;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.weightLimitKg += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.weightLimitKg >= amount) {\n            this.weightLimitKg -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getWeightLimitKg() {\n        return this.weightLimitKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBay acc = new StorageBay();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getWeightLimitKg());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 79,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "79. Crypto Wallet — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "79. Crypto Wallet — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Crypto Wallet tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Crypto Wallet using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "CryptoAsset"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "coinUnits"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAsset {\n    private double coinUnits;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.coinUnits += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.coinUnits >= amount) {\n            this.coinUnits -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getCoinUnits() {\n        return this.coinUnits;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAsset acc = new CryptoAsset();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getCoinUnits());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 80,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "80. National Library — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "80. National Library — Atomic State Mutation"
    },
    "scenario": {
      "uz": "National Library tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in National Library using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "CatalogBook"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "pageCount"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBook {\n    private double pageCount;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.pageCount += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.pageCount >= amount) {\n            this.pageCount -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getPageCount() {\n        return this.pageCount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBook acc = new CatalogBook();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getPageCount());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 81,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "81. BeFit Club — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "81. BeFit Club — Atomic State Mutation"
    },
    "scenario": {
      "uz": "BeFit Club tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in BeFit Club using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "GymMember"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "activeMonths"
      ]
    },
    "starterCode": "",
    "solution": "class GymMember {\n    private double activeMonths;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.activeMonths += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.activeMonths >= amount) {\n            this.activeMonths -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getActiveMonths() {\n        return this.activeMonths;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMember acc = new GymMember();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getActiveMonths());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 82,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "82. Tashkent Parking — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "82. Tashkent Parking — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Tashkent Parking tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Tashkent Parking using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "ParkingBay"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "hourlyTariff"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBay {\n    private double hourlyTariff;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.hourlyTariff += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.hourlyTariff >= amount) {\n            this.hourlyTariff -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getHourlyTariff() {\n        return this.hourlyTariff;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBay acc = new ParkingBay();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getHourlyTariff());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 83,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "83. Medion Clinic — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "83. Medion Clinic — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Medion Clinic tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Medion Clinic using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "PatientRecord"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "pulseRate"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecord {\n    private double pulseRate;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.pulseRate += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.pulseRate >= amount) {\n            this.pulseRate -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getPulseRate() {\n        return this.pulseRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecord acc = new PatientRecord();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getPulseRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 84,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "84. Hyatt Regency — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "84. Hyatt Regency — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Hyatt Regency tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Hyatt Regency using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "HotelReservation"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "nightlyRate"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservation {\n    private double nightlyRate;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.nightlyRate += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.nightlyRate >= amount) {\n            this.nightlyRate -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getNightlyRate() {\n        return this.nightlyRate;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservation acc = new HotelReservation();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getNightlyRate());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 85,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "85. Premier Cinema — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "85. Premier Cinema — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Premier Cinema tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Premier Cinema using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "CinemaTicket"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "hallSeatNo"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicket {\n    private double hallSeatNo;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.hallSeatNo += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.hallSeatNo >= amount) {\n            this.hallSeatNo -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getHallSeatNo() {\n        return this.hallSeatNo;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicket acc = new CinemaTicket();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getHallSeatNo());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 86,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "86. Yandex Scooter — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "86. Yandex Scooter — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Yandex Scooter tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Yandex Scooter using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "ElectricScooter"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "maxSpeedKmh"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooter {\n    private double maxSpeedKmh;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.maxSpeedKmh += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.maxSpeedKmh >= amount) {\n            this.maxSpeedKmh -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getMaxSpeedKmh() {\n        return this.maxSpeedKmh;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooter acc = new ElectricScooter();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getMaxSpeedKmh());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 87,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "87. Weather Network — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "87. Weather Network — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Weather Network tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Weather Network using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "MeteoStation"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "humidityPct"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStation {\n    private double humidityPct;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.humidityPct += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.humidityPct >= amount) {\n            this.humidityPct -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getHumidityPct() {\n        return this.humidityPct;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStation acc = new MeteoStation();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getHumidityPct());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 88,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "88. OpenMarket Auction — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "88. OpenMarket Auction — Atomic State Mutation"
    },
    "scenario": {
      "uz": "OpenMarket Auction tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in OpenMarket Auction using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "AuctionLot"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "reservePrice"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLot {\n    private double reservePrice;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.reservePrice += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.reservePrice >= amount) {\n            this.reservePrice -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getReservePrice() {\n        return this.reservePrice;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLot acc = new AuctionLot();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getReservePrice());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 89,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "89. Solar Energy Grid — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "89. Solar Energy Grid — Atomic State Mutation"
    },
    "scenario": {
      "uz": "Solar Energy Grid tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in Solar Energy Grid using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "SolarInverter"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "powerKw"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverter {\n    private double powerKw;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.powerKw += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.powerKw >= amount) {\n            this.powerKw -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getPowerKw() {\n        return this.powerKw;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverter acc = new SolarInverter();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getPowerKw());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 90,
    "tier": 3,
    "tierName": "3-Bosqich: Atomik Amallar va Tranzaksiyalar",
    "sector": "Biznes Mantiq",
    "title": {
      "uz": "90. O'zbekiston Temir Yo'llari — Xavfsiz Balans / Limit Operatsiyalari",
      "en": "90. O'zbekiston Temir Yo'llari — Atomic State Mutation"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari tizimida bevosita setter o'rniga operatsion metodlar yarating: 'public void deposit(double amt)' va yetarli mablag' bo'lsagina yechuvchi 'public boolean withdraw(double amt)'.",
      "en": "Encapsulate operations in O'zbekiston Temir Yo'llari using deposit(double amt) and safe withdraw(double amt)."
    },
    "requirements": {
      "classes": [
        "TrainRoute"
      ],
      "methods": [
        "deposit",
        "withdraw"
      ],
      "privateFields": [
        "travelDurationHours"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRoute {\n    private double travelDurationHours;\n\n    public void deposit(double amount) {\n        if (amount > 0) this.travelDurationHours += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && this.travelDurationHours >= amount) {\n            this.travelDurationHours -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getTravelDurationHours() {\n        return this.travelDurationHours;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRoute acc = new TrainRoute();\n        acc.deposit(300);\n        boolean ok = acc.withdraw(100);\n        System.out.println(\"Yechildi: \" + ok + \", Qoldiq: \" + acc.getTravelDurationHours());\n    }\n}",
    "detailedSolution": {
      "theory": "Haqiqiy korporativ tizimlarda 'setBalance' degan ochiq metod bo'lmasligi kerak! Uning o'rniga faqat atomik biznes metodlar (deposit, withdraw) qoldiriladi.",
      "theoryEn": "Exposing naked setters on financial balances creates massive security flaws. Instead, only atomic operational methods must be provided.",
      "cleanCode": "public boolean withdraw(double amount) {\n    if (amount > 0 && this.balance >= amount) {\n        this.balance -= amount;\n        return true;\n    }\n    return false;\n}",
      "breakdown": [
        "<code>this.balance >= amount</code>: Yetarli qoldiq mavjudligini kafolatlaydi."
      ],
      "pitfalls": "Balansdan ko'p pul yechilishiga yo'l qo'ymaslik manfiy qoldiq xavfini bartaraf etadi.",
      "cw2Tip": "CW2 da to'lov qilish (Payment processing) vaqtida xaridor balansi yoki karta limitini tekshirishda aynan shu shablon qo'llaniladi."
    }
  },
  {
    "id": 91,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "91. Uzum Market — O'zgarmas 'ProductReceipt' Cheki",
      "en": "91. Uzum Market — Immutable 'ProductReceipt' Record"
    },
    "scenario": {
      "uz": "Uzum Market da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class ProductReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'ProductReceipt' in Uzum Market. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "ProductReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class ProductReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public ProductReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductReceipt r = new ProductReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class ProductReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 92,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "92. Payme Wallet — O'zgarmas 'WalletUserReceipt' Cheki",
      "en": "92. Payme Wallet — Immutable 'WalletUserReceipt' Record"
    },
    "scenario": {
      "uz": "Payme Wallet da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class WalletUserReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'WalletUserReceipt' in Payme Wallet. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "WalletUserReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class WalletUserReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public WalletUserReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserReceipt r = new WalletUserReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class WalletUserReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 93,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "93. Yandex Go — O'zgarmas 'TaxiRideReceipt' Cheki",
      "en": "93. Yandex Go — Immutable 'TaxiRideReceipt' Record"
    },
    "scenario": {
      "uz": "Yandex Go da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class TaxiRideReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'TaxiRideReceipt' in Yandex Go. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "TaxiRideReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class TaxiRideReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public TaxiRideReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideReceipt r = new TaxiRideReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class TaxiRideReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 94,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "94. Korzinka Go — O'zgarmas 'LoyaltyCardReceipt' Cheki",
      "en": "94. Korzinka Go — Immutable 'LoyaltyCardReceipt' Record"
    },
    "scenario": {
      "uz": "Korzinka Go da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class LoyaltyCardReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'LoyaltyCardReceipt' in Korzinka Go. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class LoyaltyCardReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public LoyaltyCardReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardReceipt r = new LoyaltyCardReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class LoyaltyCardReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 95,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "95. WIUT Portal — O'zgarmas 'StudentReceipt' Cheki",
      "en": "95. WIUT Portal — Immutable 'StudentReceipt' Record"
    },
    "scenario": {
      "uz": "WIUT Portal da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class StudentReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'StudentReceipt' in WIUT Portal. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "StudentReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class StudentReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public StudentReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentReceipt r = new StudentReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class StudentReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 96,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "96. Click Pay — O'zgarmas 'PaymentTxnReceipt' Cheki",
      "en": "96. Click Pay — Immutable 'PaymentTxnReceipt' Record"
    },
    "scenario": {
      "uz": "Click Pay da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class PaymentTxnReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'PaymentTxnReceipt' in Click Pay. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "PaymentTxnReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class PaymentTxnReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public PaymentTxnReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnReceipt r = new PaymentTxnReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class PaymentTxnReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 97,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "97. Telegram Bot — O'zgarmas 'BotMessageReceipt' Cheki",
      "en": "97. Telegram Bot — Immutable 'BotMessageReceipt' Record"
    },
    "scenario": {
      "uz": "Telegram Bot da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class BotMessageReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'BotMessageReceipt' in Telegram Bot. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "BotMessageReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class BotMessageReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public BotMessageReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageReceipt r = new BotMessageReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class BotMessageReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 98,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "98. UzAirways — O'zgarmas 'FlightTicketReceipt' Cheki",
      "en": "98. UzAirways — Immutable 'FlightTicketReceipt' Record"
    },
    "scenario": {
      "uz": "UzAirways da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class FlightTicketReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'FlightTicketReceipt' in UzAirways. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "FlightTicketReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class FlightTicketReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public FlightTicketReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketReceipt r = new FlightTicketReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class FlightTicketReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 99,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "99. IT Park Academy — O'zgarmas 'BootcampCourseReceipt' Cheki",
      "en": "99. IT Park Academy — Immutable 'BootcampCourseReceipt' Record"
    },
    "scenario": {
      "uz": "IT Park Academy da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class BootcampCourseReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'BootcampCourseReceipt' in IT Park Academy. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "BootcampCourseReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class BootcampCourseReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public BootcampCourseReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseReceipt r = new BootcampCourseReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class BootcampCourseReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 100,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "100. Anorbank — O'zgarmas 'DebitCardReceipt' Cheki",
      "en": "100. Anorbank — Immutable 'DebitCardReceipt' Record"
    },
    "scenario": {
      "uz": "Anorbank da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class DebitCardReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'DebitCardReceipt' in Anorbank. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "DebitCardReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class DebitCardReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public DebitCardReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardReceipt r = new DebitCardReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class DebitCardReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 101,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "101. Oson Apteka — O'zgarmas 'MedicineReceipt' Cheki",
      "en": "101. Oson Apteka — Immutable 'MedicineReceipt' Record"
    },
    "scenario": {
      "uz": "Oson Apteka da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class MedicineReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'MedicineReceipt' in Oson Apteka. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "MedicineReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class MedicineReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public MedicineReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineReceipt r = new MedicineReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class MedicineReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 102,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "102. Evos FastFood — O'zgarmas 'FoodOrderReceipt' Cheki",
      "en": "102. Evos FastFood — Immutable 'FoodOrderReceipt' Record"
    },
    "scenario": {
      "uz": "Evos FastFood da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class FoodOrderReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'FoodOrderReceipt' in Evos FastFood. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "FoodOrderReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class FoodOrderReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public FoodOrderReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderReceipt r = new FoodOrderReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class FoodOrderReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 103,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "103. Bellissimo Pizza — O'zgarmas 'PizzaOrderReceipt' Cheki",
      "en": "103. Bellissimo Pizza — Immutable 'PizzaOrderReceipt' Record"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class PizzaOrderReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'PizzaOrderReceipt' in Bellissimo Pizza. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "PizzaOrderReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class PizzaOrderReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public PizzaOrderReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderReceipt r = new PizzaOrderReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class PizzaOrderReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 104,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "104. Milliy TV — O'zgarmas 'BroadcastShowReceipt' Cheki",
      "en": "104. Milliy TV — Immutable 'BroadcastShowReceipt' Record"
    },
    "scenario": {
      "uz": "Milliy TV da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class BroadcastShowReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'BroadcastShowReceipt' in Milliy TV. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "BroadcastShowReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class BroadcastShowReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public BroadcastShowReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowReceipt r = new BroadcastShowReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class BroadcastShowReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 105,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "105. Spotify Sound — O'zgarmas 'AudioTrackReceipt' Cheki",
      "en": "105. Spotify Sound — Immutable 'AudioTrackReceipt' Record"
    },
    "scenario": {
      "uz": "Spotify Sound da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class AudioTrackReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'AudioTrackReceipt' in Spotify Sound. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "AudioTrackReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class AudioTrackReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public AudioTrackReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackReceipt r = new AudioTrackReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class AudioTrackReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 106,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "106. Smart Thermostat — O'zgarmas 'ThermostatReceipt' Cheki",
      "en": "106. Smart Thermostat — Immutable 'ThermostatReceipt' Record"
    },
    "scenario": {
      "uz": "Smart Thermostat da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class ThermostatReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'ThermostatReceipt' in Smart Thermostat. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "ThermostatReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class ThermostatReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public ThermostatReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatReceipt r = new ThermostatReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class ThermostatReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 107,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "107. Drone Delivery — O'zgarmas 'DeliveryDroneReceipt' Cheki",
      "en": "107. Drone Delivery — Immutable 'DeliveryDroneReceipt' Record"
    },
    "scenario": {
      "uz": "Drone Delivery da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class DeliveryDroneReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'DeliveryDroneReceipt' in Drone Delivery. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class DeliveryDroneReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public DeliveryDroneReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneReceipt r = new DeliveryDroneReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class DeliveryDroneReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 108,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "108. Smart Warehouse — O'zgarmas 'StorageBayReceipt' Cheki",
      "en": "108. Smart Warehouse — Immutable 'StorageBayReceipt' Record"
    },
    "scenario": {
      "uz": "Smart Warehouse da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class StorageBayReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'StorageBayReceipt' in Smart Warehouse. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "StorageBayReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class StorageBayReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public StorageBayReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBayReceipt r = new StorageBayReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class StorageBayReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 109,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "109. Crypto Wallet — O'zgarmas 'CryptoAssetReceipt' Cheki",
      "en": "109. Crypto Wallet — Immutable 'CryptoAssetReceipt' Record"
    },
    "scenario": {
      "uz": "Crypto Wallet da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class CryptoAssetReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'CryptoAssetReceipt' in Crypto Wallet. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "CryptoAssetReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class CryptoAssetReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public CryptoAssetReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetReceipt r = new CryptoAssetReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class CryptoAssetReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 110,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "110. National Library — O'zgarmas 'CatalogBookReceipt' Cheki",
      "en": "110. National Library — Immutable 'CatalogBookReceipt' Record"
    },
    "scenario": {
      "uz": "National Library da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class CatalogBookReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'CatalogBookReceipt' in National Library. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "CatalogBookReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class CatalogBookReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public CatalogBookReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookReceipt r = new CatalogBookReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class CatalogBookReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 111,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "111. BeFit Club — O'zgarmas 'GymMemberReceipt' Cheki",
      "en": "111. BeFit Club — Immutable 'GymMemberReceipt' Record"
    },
    "scenario": {
      "uz": "BeFit Club da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class GymMemberReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'GymMemberReceipt' in BeFit Club. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "GymMemberReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class GymMemberReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public GymMemberReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberReceipt r = new GymMemberReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class GymMemberReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 112,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "112. Tashkent Parking — O'zgarmas 'ParkingBayReceipt' Cheki",
      "en": "112. Tashkent Parking — Immutable 'ParkingBayReceipt' Record"
    },
    "scenario": {
      "uz": "Tashkent Parking da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class ParkingBayReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'ParkingBayReceipt' in Tashkent Parking. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "ParkingBayReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class ParkingBayReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public ParkingBayReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBayReceipt r = new ParkingBayReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class ParkingBayReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 113,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "113. Medion Clinic — O'zgarmas 'PatientRecordReceipt' Cheki",
      "en": "113. Medion Clinic — Immutable 'PatientRecordReceipt' Record"
    },
    "scenario": {
      "uz": "Medion Clinic da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class PatientRecordReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'PatientRecordReceipt' in Medion Clinic. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "PatientRecordReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class PatientRecordReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public PatientRecordReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordReceipt r = new PatientRecordReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class PatientRecordReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 114,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "114. Hyatt Regency — O'zgarmas 'HotelReservationReceipt' Cheki",
      "en": "114. Hyatt Regency — Immutable 'HotelReservationReceipt' Record"
    },
    "scenario": {
      "uz": "Hyatt Regency da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class HotelReservationReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'HotelReservationReceipt' in Hyatt Regency. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "HotelReservationReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class HotelReservationReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public HotelReservationReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationReceipt r = new HotelReservationReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class HotelReservationReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 115,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "115. Premier Cinema — O'zgarmas 'CinemaTicketReceipt' Cheki",
      "en": "115. Premier Cinema — Immutable 'CinemaTicketReceipt' Record"
    },
    "scenario": {
      "uz": "Premier Cinema da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class CinemaTicketReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'CinemaTicketReceipt' in Premier Cinema. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "CinemaTicketReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class CinemaTicketReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public CinemaTicketReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketReceipt r = new CinemaTicketReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class CinemaTicketReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 116,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "116. Yandex Scooter — O'zgarmas 'ElectricScooterReceipt' Cheki",
      "en": "116. Yandex Scooter — Immutable 'ElectricScooterReceipt' Record"
    },
    "scenario": {
      "uz": "Yandex Scooter da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class ElectricScooterReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'ElectricScooterReceipt' in Yandex Scooter. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "ElectricScooterReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class ElectricScooterReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public ElectricScooterReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterReceipt r = new ElectricScooterReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class ElectricScooterReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 117,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "117. Weather Network — O'zgarmas 'MeteoStationReceipt' Cheki",
      "en": "117. Weather Network — Immutable 'MeteoStationReceipt' Record"
    },
    "scenario": {
      "uz": "Weather Network da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class MeteoStationReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'MeteoStationReceipt' in Weather Network. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "MeteoStationReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class MeteoStationReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public MeteoStationReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationReceipt r = new MeteoStationReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class MeteoStationReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 118,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "118. OpenMarket Auction — O'zgarmas 'AuctionLotReceipt' Cheki",
      "en": "118. OpenMarket Auction — Immutable 'AuctionLotReceipt' Record"
    },
    "scenario": {
      "uz": "OpenMarket Auction da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class AuctionLotReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'AuctionLotReceipt' in OpenMarket Auction. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "AuctionLotReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class AuctionLotReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public AuctionLotReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotReceipt r = new AuctionLotReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class AuctionLotReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 119,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "119. Solar Energy Grid — O'zgarmas 'SolarInverterReceipt' Cheki",
      "en": "119. Solar Energy Grid — Immutable 'SolarInverterReceipt' Record"
    },
    "scenario": {
      "uz": "Solar Energy Grid da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class SolarInverterReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'SolarInverterReceipt' in Solar Energy Grid. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "SolarInverterReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class SolarInverterReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public SolarInverterReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterReceipt r = new SolarInverterReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class SolarInverterReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 120,
    "tier": 4,
    "tierName": "4-Bosqich: O'zgarmas Klasslar (Immutability)",
    "sector": "Arxitektura",
    "title": {
      "uz": "120. O'zbekiston Temir Yo'llari — O'zgarmas 'TrainRouteReceipt' Cheki",
      "en": "120. O'zbekiston Temir Yo'llari — Immutable 'TrainRouteReceipt' Record"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da generatsiya qilingan chek ma'lumotlari yaratilgandan so'ng umuman o'zgarmasligi shart. 'final class TrainRouteReceipt' yarating, maydonlarini 'private final' qiling va hech qanday setter qo'shmang.",
      "en": "Design immutable 'TrainRouteReceipt' in O'zbekiston Temir Yo'llari. Use 'final class', 'private final' fields, and zero setters."
    },
    "requirements": {
      "classes": [
        "TrainRouteReceipt"
      ],
      "keywords": [
        "final"
      ]
    },
    "starterCode": "",
    "solution": "final class TrainRouteReceipt {\n    private final String txnCode;\n    private final double finalAmount;\n\n    public TrainRouteReceipt(String txnCode, double finalAmount) {\n        this.txnCode = txnCode;\n        this.finalAmount = finalAmount;\n    }\n\n    public String getTxnCode() { return txnCode; }\n    public double getFinalAmount() { return finalAmount; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteReceipt r = new TrainRouteReceipt(\"TXN-101\", 85.5);\n        System.out.println(\"Chek: \" + r.getTxnCode() + \" -> $\" + r.getFinalAmount());\n    }\n}",
    "detailedSolution": {
      "theory": "O'zgarmas (immutable) ob'yektlar yaratilgandan keyin holati o'zgarmasligi sababli, ko'p oqimli (multi-threaded) tizimlarda 100% thread-safe hisoblanadi.",
      "theoryEn": "Immutable objects cannot be modified after instantiation, offering inherent thread-safety and audit trail guarantees.",
      "cleanCode": "final class TrainRouteReceipt {\n    private final String txnCode;\n    public String getTxnCode() { return txnCode; }\n}",
      "breakdown": [
        "<code>final class</code>: Boshqa sinflar meros olib uning o'zgarmasligini buzishining oldini oladi."
      ],
      "pitfalls": "Setter metodi qo'shilsa yoki maydon 'final' qilinmasa, immutability buziladi.",
      "cw2Tip": "CW2 da chop etilgan kvitansiya (Receipt) va buyurtma hujjati aynan immutable arxitekturada quriladi."
    }
  },
  {
    "id": 121,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "121. Uzum Market — PIN-kod va Ruxsat Nazorati",
      "en": "121. Uzum Market — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Uzum Market da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Uzum Market. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "ProductSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class ProductSecurityContext {\n    private String pinCode;\n\n    public ProductSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ProductSecurityContext sec = new ProductSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 122,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "122. Payme Wallet — PIN-kod va Ruxsat Nazorati",
      "en": "122. Payme Wallet — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Payme Wallet da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Payme Wallet. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "WalletUserSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class WalletUserSecurityContext {\n    private String pinCode;\n\n    public WalletUserSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        WalletUserSecurityContext sec = new WalletUserSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 123,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "123. Yandex Go — PIN-kod va Ruxsat Nazorati",
      "en": "123. Yandex Go — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Yandex Go da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Yandex Go. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "TaxiRideSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class TaxiRideSecurityContext {\n    private String pinCode;\n\n    public TaxiRideSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TaxiRideSecurityContext sec = new TaxiRideSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 124,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "124. Korzinka Go — PIN-kod va Ruxsat Nazorati",
      "en": "124. Korzinka Go — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Korzinka Go da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Korzinka Go. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "LoyaltyCardSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class LoyaltyCardSecurityContext {\n    private String pinCode;\n\n    public LoyaltyCardSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LoyaltyCardSecurityContext sec = new LoyaltyCardSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 125,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "125. WIUT Portal — PIN-kod va Ruxsat Nazorati",
      "en": "125. WIUT Portal — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "WIUT Portal da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in WIUT Portal. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "StudentSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class StudentSecurityContext {\n    private String pinCode;\n\n    public StudentSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StudentSecurityContext sec = new StudentSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 126,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "126. Click Pay — PIN-kod va Ruxsat Nazorati",
      "en": "126. Click Pay — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Click Pay da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Click Pay. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "PaymentTxnSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class PaymentTxnSecurityContext {\n    private String pinCode;\n\n    public PaymentTxnSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentTxnSecurityContext sec = new PaymentTxnSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 127,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "127. Telegram Bot — PIN-kod va Ruxsat Nazorati",
      "en": "127. Telegram Bot — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Telegram Bot da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Telegram Bot. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "BotMessageSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class BotMessageSecurityContext {\n    private String pinCode;\n\n    public BotMessageSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BotMessageSecurityContext sec = new BotMessageSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 128,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "128. UzAirways — PIN-kod va Ruxsat Nazorati",
      "en": "128. UzAirways — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "UzAirways da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in UzAirways. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "FlightTicketSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class FlightTicketSecurityContext {\n    private String pinCode;\n\n    public FlightTicketSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FlightTicketSecurityContext sec = new FlightTicketSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 129,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "129. IT Park Academy — PIN-kod va Ruxsat Nazorati",
      "en": "129. IT Park Academy — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "IT Park Academy da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in IT Park Academy. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "BootcampCourseSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class BootcampCourseSecurityContext {\n    private String pinCode;\n\n    public BootcampCourseSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BootcampCourseSecurityContext sec = new BootcampCourseSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 130,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "130. Anorbank — PIN-kod va Ruxsat Nazorati",
      "en": "130. Anorbank — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Anorbank da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Anorbank. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "DebitCardSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class DebitCardSecurityContext {\n    private String pinCode;\n\n    public DebitCardSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DebitCardSecurityContext sec = new DebitCardSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 131,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "131. Oson Apteka — PIN-kod va Ruxsat Nazorati",
      "en": "131. Oson Apteka — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Oson Apteka da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Oson Apteka. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "MedicineSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class MedicineSecurityContext {\n    private String pinCode;\n\n    public MedicineSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MedicineSecurityContext sec = new MedicineSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 132,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "132. Evos FastFood — PIN-kod va Ruxsat Nazorati",
      "en": "132. Evos FastFood — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Evos FastFood da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Evos FastFood. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "FoodOrderSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class FoodOrderSecurityContext {\n    private String pinCode;\n\n    public FoodOrderSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FoodOrderSecurityContext sec = new FoodOrderSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 133,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "133. Bellissimo Pizza — PIN-kod va Ruxsat Nazorati",
      "en": "133. Bellissimo Pizza — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Bellissimo Pizza da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Bellissimo Pizza. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "PizzaOrderSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class PizzaOrderSecurityContext {\n    private String pinCode;\n\n    public PizzaOrderSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PizzaOrderSecurityContext sec = new PizzaOrderSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 134,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "134. Milliy TV — PIN-kod va Ruxsat Nazorati",
      "en": "134. Milliy TV — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Milliy TV da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Milliy TV. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "BroadcastShowSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class BroadcastShowSecurityContext {\n    private String pinCode;\n\n    public BroadcastShowSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BroadcastShowSecurityContext sec = new BroadcastShowSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 135,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "135. Spotify Sound — PIN-kod va Ruxsat Nazorati",
      "en": "135. Spotify Sound — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Spotify Sound da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Spotify Sound. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "AudioTrackSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class AudioTrackSecurityContext {\n    private String pinCode;\n\n    public AudioTrackSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AudioTrackSecurityContext sec = new AudioTrackSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 136,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "136. Smart Thermostat — PIN-kod va Ruxsat Nazorati",
      "en": "136. Smart Thermostat — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Smart Thermostat da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Smart Thermostat. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "ThermostatSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class ThermostatSecurityContext {\n    private String pinCode;\n\n    public ThermostatSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ThermostatSecurityContext sec = new ThermostatSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 137,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "137. Drone Delivery — PIN-kod va Ruxsat Nazorati",
      "en": "137. Drone Delivery — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Drone Delivery da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Drone Delivery. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "DeliveryDroneSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class DeliveryDroneSecurityContext {\n    private String pinCode;\n\n    public DeliveryDroneSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryDroneSecurityContext sec = new DeliveryDroneSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 138,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "138. Smart Warehouse — PIN-kod va Ruxsat Nazorati",
      "en": "138. Smart Warehouse — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Smart Warehouse da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Smart Warehouse. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "StorageBaySecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class StorageBaySecurityContext {\n    private String pinCode;\n\n    public StorageBaySecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        StorageBaySecurityContext sec = new StorageBaySecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 139,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "139. Crypto Wallet — PIN-kod va Ruxsat Nazorati",
      "en": "139. Crypto Wallet — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Crypto Wallet da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Crypto Wallet. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "CryptoAssetSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class CryptoAssetSecurityContext {\n    private String pinCode;\n\n    public CryptoAssetSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CryptoAssetSecurityContext sec = new CryptoAssetSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 140,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "140. National Library — PIN-kod va Ruxsat Nazorati",
      "en": "140. National Library — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "National Library da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in National Library. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "CatalogBookSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class CatalogBookSecurityContext {\n    private String pinCode;\n\n    public CatalogBookSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CatalogBookSecurityContext sec = new CatalogBookSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 141,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "141. BeFit Club — PIN-kod va Ruxsat Nazorati",
      "en": "141. BeFit Club — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "BeFit Club da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in BeFit Club. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "GymMemberSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class GymMemberSecurityContext {\n    private String pinCode;\n\n    public GymMemberSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GymMemberSecurityContext sec = new GymMemberSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 142,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "142. Tashkent Parking — PIN-kod va Ruxsat Nazorati",
      "en": "142. Tashkent Parking — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Tashkent Parking da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Tashkent Parking. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "ParkingBaySecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class ParkingBaySecurityContext {\n    private String pinCode;\n\n    public ParkingBaySecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ParkingBaySecurityContext sec = new ParkingBaySecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 143,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "143. Medion Clinic — PIN-kod va Ruxsat Nazorati",
      "en": "143. Medion Clinic — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Medion Clinic da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Medion Clinic. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "PatientRecordSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class PatientRecordSecurityContext {\n    private String pinCode;\n\n    public PatientRecordSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PatientRecordSecurityContext sec = new PatientRecordSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 144,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "144. Hyatt Regency — PIN-kod va Ruxsat Nazorati",
      "en": "144. Hyatt Regency — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Hyatt Regency da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Hyatt Regency. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "HotelReservationSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class HotelReservationSecurityContext {\n    private String pinCode;\n\n    public HotelReservationSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        HotelReservationSecurityContext sec = new HotelReservationSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 145,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "145. Premier Cinema — PIN-kod va Ruxsat Nazorati",
      "en": "145. Premier Cinema — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Premier Cinema da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Premier Cinema. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "CinemaTicketSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class CinemaTicketSecurityContext {\n    private String pinCode;\n\n    public CinemaTicketSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CinemaTicketSecurityContext sec = new CinemaTicketSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 146,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "146. Yandex Scooter — PIN-kod va Ruxsat Nazorati",
      "en": "146. Yandex Scooter — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Yandex Scooter da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Yandex Scooter. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "ElectricScooterSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class ElectricScooterSecurityContext {\n    private String pinCode;\n\n    public ElectricScooterSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ElectricScooterSecurityContext sec = new ElectricScooterSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 147,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "147. Weather Network — PIN-kod va Ruxsat Nazorati",
      "en": "147. Weather Network — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Weather Network da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Weather Network. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "MeteoStationSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class MeteoStationSecurityContext {\n    private String pinCode;\n\n    public MeteoStationSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MeteoStationSecurityContext sec = new MeteoStationSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 148,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "148. OpenMarket Auction — PIN-kod va Ruxsat Nazorati",
      "en": "148. OpenMarket Auction — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "OpenMarket Auction da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in OpenMarket Auction. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "AuctionLotSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class AuctionLotSecurityContext {\n    private String pinCode;\n\n    public AuctionLotSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuctionLotSecurityContext sec = new AuctionLotSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 149,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "149. Solar Energy Grid — PIN-kod va Ruxsat Nazorati",
      "en": "149. Solar Energy Grid — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "Solar Energy Grid da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in Solar Energy Grid. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "SolarInverterSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class SolarInverterSecurityContext {\n    private String pinCode;\n\n    public SolarInverterSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SolarInverterSecurityContext sec = new SolarInverterSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  },
  {
    "id": 150,
    "tier": 5,
    "tierName": "5-Bosqich: Korporativ Xavfsizlik va CW2 Modeli",
    "sector": "Master • CW2",
    "title": {
      "uz": "150. O'zbekiston Temir Yo'llari — PIN-kod va Ruxsat Nazorati",
      "en": "150. O'zbekiston Temir Yo'llari — Encapsulated Security Context"
    },
    "scenario": {
      "uz": "O'zbekiston Temir Yo'llari da foydalanuvchi PIN kodini yashiring. 'private String pinCode' maydoni bo'lsin. 'public boolean verifyPin(String attempt)' metodi orqali tekshirilsin, lekin PIN kodi hech qachon to'g'ridan-to'g'ri o'qib bo'lmasin (no getter!).",
      "en": "Enforce secure credentials in O'zbekiston Temir Yo'llari. Add 'verifyPin(String attempt)' without exposing any getPinCode() method."
    },
    "requirements": {
      "classes": [
        "TrainRouteSecurityContext"
      ],
      "methods": [
        "verifyPin"
      ],
      "privateFields": [
        "pinCode"
      ]
    },
    "starterCode": "",
    "solution": "class TrainRouteSecurityContext {\n    private String pinCode;\n\n    public TrainRouteSecurityContext(String pinCode) {\n        this.pinCode = pinCode;\n    }\n\n    public boolean verifyPin(String attempt) {\n        return this.pinCode != null && this.pinCode.equals(attempt);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        TrainRouteSecurityContext sec = new TrainRouteSecurityContext(\"7788\");\n        System.out.println(\"PIN to'g'rimi: \" + sec.verifyPin(\"7788\"));\n        System.out.println(\"Noto'g'ri PIN: \" + sec.verifyPin(\"0000\"));\n    }\n}",
    "detailedSolution": {
      "theory": "Inkapsulyatsiyaning oliy darajasi — ma'lumotni tashqariga beruvchi getter ham yaratmaslikdir. Parol va PIN kodlar faqat tasdiqlovchi metodlar orqali tekshiriladi.",
      "theoryEn": "Peak encapsulation avoids even getter accessors for sensitive secrets, providing verification methods exclusively.",
      "cleanCode": "public boolean verifyPin(String attempt) {\n    return this.pinCode != null && this.pinCode.equals(attempt);\n}",
      "breakdown": [
        "<code>verifyPin</code>: PIN kodni tashqariga oshkor qilmasdan kiritilgan qiymatni tasdiqlaydi."
      ],
      "pitfalls": "Parol va PIN kodlar uchun 'getPin()' yozish xavfsizlik qoidalariga mutlaqo ziddir.",
      "cw2Tip": "CW2 da admin menyusiga kirish uchun PIN kod so'ralganda aynan mana shu xavfsizlik inkapsulyatsiyasi qo'llaniladi."
    }
  }
];
