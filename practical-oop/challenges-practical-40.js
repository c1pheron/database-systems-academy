// WIUT OOP (5COSC018C) — PRACTICAL OOP: 4 MASTER PILLARS (40 CHALLENGES)
// Ecosystem: Uzum & Payme FinTech & E-Commerce Architecture
// 1: Encapsulation (1-10) | 2: Inheritance (11-20) | 3: Polymorphism (21-30) | 4: Abstraction (31-40)
// Author: Professor Ada • Senior Java Architect & Examiner

(typeof window !== 'undefined' ? window : global).OOP_PRACTICAL_CHALLENGES = [
  {
    "id": 1,
    "title": {
      "uz": "1. 💳 Baza Bank Kartasi — Balansni Himoyalash",
      "en": "1. Base Card",
      "ru": "1. Базовая карта"
    },
    "scenario": "📖 Hayotiy Kontekst (Payme)\nBank kartasining balansi 'private double balance;' bo'lishi shart. Uni faqat musbat summa bilan to'ldirish mumkin.\n\n📋 Qadamlar:\n1. 'BankCard' klassida 'private double balance;' maydoni.\n2. Konstruktor 'public BankCard(double initialBalance)'.\n3. 'public void deposit(double amount)' (amount > 0 bo'lsa qo'shadi).\n4. 'public double getBalance()' getteri.\n5. 'Main'da 50,000 so'mlik karta ochib, 25,000 depozit qiling va konsolga: \"Balans: \" + card.getBalance() deb chiqaring.",
    "classes": [
      "BankCard",
      "Main"
    ],
    "methods": [
      "deposit",
      "getBalance"
    ],
    "constructors": [
      "BankCard"
    ],
    "privateFields": [
      "balance"
    ],
    "starterCode": "class BankCard {\n    private double balance;\n\n    public BankCard(double initialBalance) {\n        \n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    private double balance;\n\n    public BankCard(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n        }\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0);\n        card.deposit(25000.0);\n        System.out.println(\"Balans: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Balans: 75000.0",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 2,
    "title": {
      "uz": "2. 🏧 Xavfsiz Pul Yechish — Overdraft Himoyasi",
      "en": "2. Safe Withdraw",
      "ru": "2. Безопасное снятие"
    },
    "scenario": "📖 Hayotiy Kontekst (ATM)\n'withdraw(double amount)' balandlikdan ortiqcha pul yechishga yo'l qo'ymasligi kerak.\n\n📋 Qadamlar:\n1. 'SecureCard' klassida 'private double balance;'.\n2. 'public boolean withdraw(double amount)' (amount > 0 && amount <= balance bo'lsa ayiradi va true qaytaradi).\n3. 'public double getBalance()'.\n4. 'Main'da 80,000 dan 30,000 yeching va konsolga: \"Qoldiq: \" + card.getBalance() deb chiqaring.",
    "classes": [
      "SecureCard",
      "Main"
    ],
    "methods": [
      "withdraw",
      "getBalance"
    ],
    "constructors": [
      "SecureCard"
    ],
    "privateFields": [
      "balance"
    ],
    "starterCode": "class SecureCard {\n    private double balance;\n\n    public SecureCard(double balance) {\n        this.balance = balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SecureCard {\n    private double balance;\n\n    public SecureCard(double balance) {\n        this.balance = balance;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureCard card = new SecureCard(80000.0);\n        card.withdraw(30000.0);\n        System.out.println(\"Qoldiq: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Qoldiq: 50000.0",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 3,
    "title": {
      "uz": "3. 🔒 4-Xonali PIN Kod Xavfsizligi",
      "en": "3. PIN Security",
      "ru": "3. PIN безопасность"
    },
    "scenario": "📖 Hayotiy Kontekst (Xavfsizlik)\nKarta PIN kodi faqat 'verifyPin' va 'changePin' orqali tekshirilishi va o'zgartirilishi mumkin.\n\n📋 Qadamlar:\n1. 'CardPin' klassida 'private int pin;'.\n2. 'public boolean verifyPin(int inputPin)'.\n3. 'public boolean changePin(int oldPin, int newPin)'.\n4. 'Main'da 1234 kodli karta ochib, tekshiring va konsolga: \"PIN to'g'ri: \" + cp.verifyPin(1234) deb chiqaring.",
    "classes": [
      "CardPin",
      "Main"
    ],
    "methods": [
      "verifyPin",
      "changePin"
    ],
    "constructors": [
      "CardPin"
    ],
    "privateFields": [
      "pin"
    ],
    "starterCode": "class CardPin {\n    private int pin;\n\n    public CardPin(int pin) {\n        this.pin = pin;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CardPin {\n    private int pin;\n\n    public CardPin(int pin) {\n        this.pin = pin;\n    }\n\n    public boolean verifyPin(int inputPin) {\n        return this.pin == inputPin;\n    }\n\n    public boolean changePin(int oldPin, int newPin) {\n        if (this.pin == oldPin) {\n            this.pin = newPin;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardPin cp = new CardPin(1234);\n        System.out.println(\"PIN to'g'ri: \" + cp.verifyPin(1234));\n    }\n}",
    "expectedOutput": "PIN to'g'ri: true",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 4,
    "title": {
      "uz": "4. 🛡️ Kunlik Xarid Limiti (Daily Limit)",
      "en": "4. Daily Limit",
      "ru": "4. Дневной лимит"
    },
    "scenario": "📖 Hayotiy Kontekst (Limit Nazorati)\nFiribgarlikdan saqlash uchun karta kunlik xarid limitiga ('dailyLimit') ega bo'ladi.\n\n📋 Qadamlar:\n1. 'LimitedCard' klassida 'private double balance;', 'private double dailyLimit;'.\n2. Konstruktor 'public LimitedCard(double balance, double dailyLimit)'.\n3. 'public boolean spend(double amount)'.\n4. 'public double getBalance()'.\n5. 'Main'da 200,000 balans va 50,000 limitli karta ochib, 30,000 sarflang va qoldiq balansni chiqaring.",
    "classes": [
      "LimitedCard",
      "Main"
    ],
    "methods": [
      "spend",
      "getBalance"
    ],
    "constructors": [
      "LimitedCard"
    ],
    "privateFields": [
      "balance",
      "dailyLimit"
    ],
    "starterCode": "class LimitedCard {\n    private double balance;\n    private double dailyLimit;\n\n    public LimitedCard(double balance, double dailyLimit) {\n        this.balance = balance;\n        this.dailyLimit = dailyLimit;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class LimitedCard {\n    private double balance;\n    private double dailyLimit;\n\n    public LimitedCard(double balance, double dailyLimit) {\n        this.balance = balance;\n        this.dailyLimit = dailyLimit;\n    }\n\n    public boolean spend(double amount) {\n        if (amount > 0 && amount <= this.dailyLimit && amount <= this.balance) {\n            this.balance -= amount;\n            this.dailyLimit -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LimitedCard lc = new LimitedCard(200000.0, 50000.0);\n        lc.spend(30000.0);\n        System.out.println(\"Qoldiq balans: \" + lc.getBalance());\n    }\n}",
    "expectedOutput": "Qoldiq balans: 170000.0",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 5,
    "title": {
      "uz": "5. 👤 Foydalanuvchi Shaxsi va KYC (16+)",
      "en": "5. User KYC",
      "ru": "5. Профиль KYC"
    },
    "scenario": "📖 Hayotiy Kontekst (Shaxsni Tasdiqlash)\nFoydalanuvchi yoshi 'age' faqat 16 dan yuqori bo'lganda qabul qilinadi.\n\n📋 Qadamlar:\n1. 'UserProfile'da 'private String name;', 'private int age;'.\n2. 'public boolean setAge(int age)'.\n3. 'public int getAge()', 'public String getName()'.\n4. 'Main'da 20 yoshli Anvarni e'lon qilib chiqaring: \"Mijoz: Anvar | Yoshi: 20\".",
    "classes": [
      "UserProfile",
      "Main"
    ],
    "methods": [
      "setAge",
      "getAge",
      "getName"
    ],
    "constructors": [
      "UserProfile"
    ],
    "privateFields": [
      "age"
    ],
    "starterCode": "class UserProfile {\n    private String name;\n    private int age;\n\n    public UserProfile(String name, int age) {\n        this.name = name;\n        this.age = age >= 16 ? age : 16;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UserProfile {\n    private String name;\n    private int age;\n\n    public UserProfile(String name, int age) {\n        this.name = name;\n        this.age = age >= 16 ? age : 16;\n    }\n\n    public boolean setAge(int age) {\n        if (age >= 16) {\n            this.age = age;\n            return true;\n        }\n        return false;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile up = new UserProfile(\"Anvar\", 20);\n        System.out.println(\"Mijoz: \" + up.getName() + \" | Yoshi: \" + up.getAge());\n    }\n}",
    "expectedOutput": "Mijoz: Anvar | Yoshi: 20",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 6,
    "title": {
      "uz": "6. 💱 Valyuta Hamyoni — So'm va Dollar",
      "en": "6. Multi-Currency Wallet",
      "ru": "6. Мультивалютный кошелек"
    },
    "scenario": "📖 Hayotiy Kontekst (Hamyon)\n'Wallet' klassi UZS va USD hisoblarini alohida saqlaydi va kurs (12,800) bo'yicha ayirboshlaydi.\n\n📋 Qadamlar:\n1. 'Wallet'da 'private double uzs;', 'private double usd;'.\n2. 'public void convertUsdToUzs(double amountUsd, double rate)'.\n3. 'public double getUzs()', 'public double getUsd()'.\n4. 'Main'da 100 USD ni 12800 kursda konvertatsiya qiling va konsolga: \"So'm balansi: \" + w.getUzs() deb chiqaring.",
    "classes": [
      "Wallet",
      "Main"
    ],
    "methods": [
      "convertUsdToUzs",
      "getUzs"
    ],
    "constructors": [
      "Wallet"
    ],
    "privateFields": [
      "uzs",
      "usd"
    ],
    "starterCode": "class Wallet {\n    private double uzs;\n    private double usd;\n\n    public Wallet(double uzs, double usd) {\n        this.uzs = uzs;\n        this.usd = usd;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Wallet {\n    private double uzs;\n    private double usd;\n\n    public Wallet(double uzs, double usd) {\n        this.uzs = uzs;\n        this.usd = usd;\n    }\n\n    public void convertUsdToUzs(double amountUsd, double rate) {\n        if (amountUsd > 0 && amountUsd <= this.usd) {\n            this.usd -= amountUsd;\n            this.uzs += amountUsd * rate;\n        }\n    }\n\n    public double getUzs() {\n        return this.uzs;\n    }\n\n    public double getUsd() {\n        return this.usd;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Wallet w = new Wallet(0.0, 100.0);\n        w.convertUsdToUzs(100.0, 12800.0);\n        System.out.println(\"So'm balansi: \" + w.getUzs());\n    }\n}",
    "expectedOutput": "So'm balansi: 1280000.0",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 7,
    "title": {
      "uz": "7. 🎁 Avtomatik Keshbek Hamyoni",
      "en": "7. Cashback Wallet",
      "ru": "7. Кэшбэк кошелек"
    },
    "scenario": "📖 Hayotiy Kontekst (Keshbek)\nHar bir xariddan 2% keshbek 'private double cashback;' hamyoniga avtomatik yig'iladi.\n\n📋 Qadamlar:\n1. 'CashbackWallet'da 'private double cashback = 0.0;'.\n2. 'public void earnCashback(double spendAmount)'.\n3. 'public double getCashback()'.\n4. 'Main'da 100,000 so'm xariddan keshbek hisoblang: \"Keshbek: 2000.0 so'm\".",
    "classes": [
      "CashbackWallet",
      "Main"
    ],
    "methods": [
      "earnCashback",
      "getCashback"
    ],
    "constructors": [],
    "privateFields": [
      "cashback"
    ],
    "starterCode": "class CashbackWallet {\n    private double cashback = 0.0;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CashbackWallet {\n    private double cashback = 0.0;\n\n    public void earnCashback(double spendAmount) {\n        if (spendAmount > 0) {\n            this.cashback += spendAmount * 0.02;\n        }\n    }\n\n    public double getCashback() {\n        return this.cashback;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashbackWallet cw = new CashbackWallet();\n        cw.earnCashback(100000.0);\n        System.out.println(\"Keshbek: \" + cw.getCashback() + \" so'm\");\n    }\n}",
    "expectedOutput": "Keshbek: 2000.0 so'm",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 8,
    "title": {
      "uz": "8. 🚫 Kartani Muzlatish va Qulflash",
      "en": "8. Card Lock",
      "ru": "8. Блокировка карты"
    },
    "scenario": "📖 Hayotiy Kontekst (Kartani Bloklash)\nAgar karta yo'qolsa, 'isBlocked' true qilinadi va hech qanday to'lov o'tmaydi.\n\n📋 Qadamlar:\n1. 'LockableCard'da 'private boolean isBlocked = false;'.\n2. 'public void lockCard()', 'public void unlockCard()'.\n3. 'public boolean isLocked()'.\n4. 'Main'da kartani qulflang va holatini chiqaring: \"Karta bloklangan: true\".",
    "classes": [
      "LockableCard",
      "Main"
    ],
    "methods": [
      "lockCard",
      "unlockCard",
      "isLocked"
    ],
    "constructors": [],
    "privateFields": [
      "isBlocked"
    ],
    "starterCode": "class LockableCard {\n    private boolean isBlocked = false;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class LockableCard {\n    private boolean isBlocked = false;\n\n    public void lockCard() {\n        this.isBlocked = true;\n    }\n\n    public void unlockCard() {\n        this.isBlocked = false;\n    }\n\n    public boolean isLocked() {\n        return this.isBlocked;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LockableCard card = new LockableCard();\n        card.lockCard();\n        System.out.println(\"Karta bloklangan: \" + card.isLocked());\n    }\n}",
    "expectedOutput": "Karta bloklangan: true",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 9,
    "title": {
      "uz": "9. 📱 Telefon Raqami Validatsiyasi",
      "en": "9. Phone Validation",
      "ru": "9. Валидация телефона"
    },
    "scenario": "📖 Hayotiy Kontekst (SMS Xabarnoma)\nTelefon raqami faqat '+998' bilan boshlanganda qabul qilinadi.\n\n📋 Qadamlar:\n1. 'SmsProfile'da 'private String phoneNumber;'.\n2. 'public boolean setPhoneNumber(String phone)'.\n3. 'public String getPhoneNumber()'.\n4. 'Main'da \"+998901234567\" o'rnating va konsolga: \"SMS raqami: \" + p.getPhoneNumber() deb chiqaring.",
    "classes": [
      "SmsProfile",
      "Main"
    ],
    "methods": [
      "setPhoneNumber",
      "getPhoneNumber"
    ],
    "constructors": [],
    "privateFields": [
      "phoneNumber"
    ],
    "starterCode": "class SmsProfile {\n    private String phoneNumber;\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SmsProfile {\n    private String phoneNumber;\n\n    public boolean setPhoneNumber(String phone) {\n        if (phone != null && phone.startsWith(\"+998\")) {\n            this.phoneNumber = phone;\n            return true;\n        }\n        return false;\n    }\n\n    public String getPhoneNumber() {\n        return this.phoneNumber;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmsProfile p = new SmsProfile();\n        p.setPhoneNumber(\"+998901234567\");\n        System.out.println(\"SMS raqami: \" + p.getPhoneNumber());\n    }\n}",
    "expectedOutput": "SMS raqami: +998901234567",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 10,
    "title": {
      "uz": "10. 🏦 To'liq Xavfsiz Bank Hisobi (Master)",
      "en": "10. Master Secure Account",
      "ru": "10. Мастер безопасный счет"
    },
    "scenario": "📖 Hayotiy Kontekst (1-Ustun Yakuni)\nBalans, egasi va PIN kod birlashgan mukammal himoyalangan hisob.\n\n📋 Qadamlar:\n1. 'MasterAccount'da 'private String owner;', 'private double balance;', 'private int pin;'.\n2. Konstruktor 'public MasterAccount(String owner, double balance, int pin)'.\n3. 'public boolean pay(double amount, int enteredPin)'.\n4. 'public double getBalance()'.\n5. 'Main'da 100,000 balansli hisobdan 40,000 to'lang va konsolga: \"Muvaffaqiyatli: true | Qoldiq: \" + acc.getBalance() deb chiqaring.",
    "classes": [
      "MasterAccount",
      "Main"
    ],
    "methods": [
      "pay",
      "getBalance"
    ],
    "constructors": [
      "MasterAccount"
    ],
    "privateFields": [
      "balance",
      "pin"
    ],
    "starterCode": "class MasterAccount {\n    private String owner;\n    private double balance;\n    private int pin;\n\n    public MasterAccount(String owner, double balance, int pin) {\n        this.owner = owner;\n        this.balance = balance;\n        this.pin = pin;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class MasterAccount {\n    private String owner;\n    private double balance;\n    private int pin;\n\n    public MasterAccount(String owner, double balance, int pin) {\n        this.owner = owner;\n        this.balance = balance;\n        this.pin = pin;\n    }\n\n    public boolean pay(double amount, int enteredPin) {\n        if (this.pin == enteredPin && amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MasterAccount acc = new MasterAccount(\"Sardor\", 100000.0, 7777);\n        boolean ok = acc.pay(40000.0, 7777);\n        System.out.println(\"Muvaffaqiyatli: \" + ok + \" | Qoldiq: \" + acc.getBalance());\n    }\n}",
    "expectedOutput": "Muvaffaqiyatli: true | Qoldiq: 60000.0",
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 11,
    "title": {
      "uz": "11. 🥇 GoldCard — Baza Kartasidan Keshbekli Kartaga",
      "en": "11. GoldCard Inheritance",
      "ru": "11. Наследование GoldCard"
    },
    "scenario": "📖 Hayotiy Kontekst\n'GoldCard' baza 'BankCard' klassidan meros oladi va o'ziga 'cashbackRate' (3%) qo'shadi.\n\n📋 Qadamlar:\n1. 'BankCard'da 'protected double balance;'.\n2. 'GoldCard extends BankCard' qilib 'public double getCashback(double spend)' metodida 'spend * 0.03' qaytaring.\n3. 'Main'da 100,000 so'mlik GoldCard ochib, keshbekni chiqaring: \"Gold Keshbek: 3000.0 so'm\".",
    "classes": [
      "BankCard",
      "GoldCard",
      "Main"
    ],
    "methods": [
      "getCashback"
    ],
    "constructors": [
      "BankCard",
      "GoldCard"
    ],
    "keywords": [
      "extends"
    ],
    "starterCode": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass GoldCard extends BankCard {\n    public GoldCard(double balance) { super(balance); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass GoldCard extends BankCard {\n    public GoldCard(double balance) { super(balance); }\n    public double getCashback(double spend) {\n        return spend * 0.03;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GoldCard gc = new GoldCard(100000.0);\n        System.out.println(\"Gold Keshbek: \" + gc.getCashback(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Gold Keshbek: 3000.0 so'm",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 12,
    "title": {
      "uz": "12. 💎 PlatinumCard — VIP Imtiyozlar Qo'shish",
      "en": "12. PlatinumCard",
      "ru": "12. Platinum карта"
    },
    "scenario": "📖 Hayotiy Kontekst\n'PlatinumCard' 'BankCard'dan meros olib, bepul aeroport Lounge xizmati imtiyozini qo'shadi.\n\n📋 Qadamlar:\n1. 'PlatinumCard extends BankCard'.\n2. 'public boolean hasLoungeAccess()' har doim true qaytarsin.\n3. 'Main'da tekshiring: \"Lounge imtiyozi: true\".",
    "classes": [
      "BankCard",
      "PlatinumCard",
      "Main"
    ],
    "methods": [
      "hasLoungeAccess"
    ],
    "constructors": [
      "BankCard",
      "PlatinumCard"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass PlatinumCard extends BankCard {\n    public PlatinumCard(double balance) { super(balance); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass PlatinumCard extends BankCard {\n    public PlatinumCard(double balance) { super(balance); }\n    public boolean hasLoungeAccess() {\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PlatinumCard pc = new PlatinumCard(500000.0);\n        System.out.println(\"Lounge imtiyozi: \" + pc.hasLoungeAccess());\n    }\n}",
    "expectedOutput": "Lounge imtiyozi: true",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 13,
    "title": {
      "uz": "13. 🌐 VirtualCard — 1 Oylik Onlayn Karta",
      "en": "13. VirtualCard",
      "ru": "13. Виртуальная карта"
    },
    "scenario": "📖 Hayotiy Kontekst\nInternet xaridlari uchun 'VirtualCard' muddati 'validMonths' maydoni bilan 'BankCard'dan voris bo'ladi.\n\n📋 Qadamlar:\n1. 'VirtualCard'da 'private int validMonths = 1;'.\n2. 'public int getValidMonths()'.\n3. 'Main'da chop eting: \"Amal qilish muddati: 1 oy\".",
    "classes": [
      "BankCard",
      "VirtualCard",
      "Main"
    ],
    "methods": [
      "getValidMonths"
    ],
    "constructors": [
      "BankCard",
      "VirtualCard"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass VirtualCard extends BankCard {\n    public VirtualCard(double balance) { super(balance); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass VirtualCard extends BankCard {\n    private int validMonths = 1;\n    public VirtualCard(double balance) { super(balance); }\n    public int getValidMonths() { return this.validMonths; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VirtualCard vc = new VirtualCard(50000.0);\n        System.out.println(\"Amal qilish muddati: \" + vc.getValidMonths() + \" oy\");\n    }\n}",
    "expectedOutput": "Amal qilish muddati: 1 oy",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 14,
    "title": {
      "uz": "14. 🛵 Yetkazib Beruvchi (Courier) Iyerarxiyasi",
      "en": "14. Courier Hierarchy",
      "ru": "14. Иерархия курьеров"
    },
    "scenario": "📖 Hayotiy Kontekst (Uzum Tezkor)\n'Courier' ota klassi 'name'ga ega, 'MotoCourier' voris klassi esa 'motoNumber' maydonini qo'shadi.\n\n📋 Qadamlar:\n1. 'Courier'da 'protected String name;'.\n2. 'MotoCourier extends Courier'da 'private String motoNumber;'.\n3. 'public String getMotoNumber()'.\n4. 'Main'da \"01 M777AA\" raqamli motokuryerni chiqaring.",
    "classes": [
      "Courier",
      "MotoCourier",
      "Main"
    ],
    "methods": [
      "getMotoNumber"
    ],
    "constructors": [
      "Courier",
      "MotoCourier"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class Courier {\n    protected String name;\n    public Courier(String name) { this.name = name; }\n}\n\nclass MotoCourier extends Courier {\n    private String motoNumber;\n    public MotoCourier(String name, String motoNumber) {\n        super(name);\n        this.motoNumber = motoNumber;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Courier {\n    protected String name;\n    public Courier(String name) { this.name = name; }\n}\n\nclass MotoCourier extends Courier {\n    private String motoNumber;\n    public MotoCourier(String name, String motoNumber) {\n        super(name);\n        this.motoNumber = motoNumber;\n    }\n    public String getMotoNumber() { return this.motoNumber; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MotoCourier mc = new MotoCourier(\"Jasur\", \"01 M777AA\");\n        System.out.println(\"Motokuryer raqami: \" + mc.getMotoNumber());\n    }\n}",
    "expectedOutput": "Motokuryer raqami: 01 M777AA",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 15,
    "title": {
      "uz": "15. 👑 VIP Mijoz Imtiyozlari",
      "en": "15. VIP Customer",
      "ru": "15. VIP Клиент"
    },
    "scenario": "📖 Hayotiy Kontekst\n'Customer' oddiy mijoz, 'VIPCustomer' esa 10% chegirmaga ega bo'ladi.\n\n📋 Qadamlar:\n1. 'Customer'da 'name'.\n2. 'VIPCustomer extends Customer'da 'public double applyDiscount(double total)' (total * 0.90 qaytaradi).\n3. 'Main'da 200,000 so'mga chegirma hisoblang: \"Chegirmali to'lov: 180000.0 so'm\".",
    "classes": [
      "Customer",
      "VIPCustomer",
      "Main"
    ],
    "methods": [
      "applyDiscount"
    ],
    "constructors": [
      "Customer",
      "VIPCustomer"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class Customer {\n    protected String name;\n    public Customer(String name) { this.name = name; }\n}\n\nclass VIPCustomer extends Customer {\n    public VIPCustomer(String name) { super(name); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    protected String name;\n    public Customer(String name) { this.name = name; }\n}\n\nclass VIPCustomer extends Customer {\n    public VIPCustomer(String name) { super(name); }\n    public double applyDiscount(double total) {\n        return total * 0.90;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VIPCustomer vc = new VIPCustomer(\"Madina\");\n        System.out.println(\"Chegirmali to'lov: \" + vc.applyDiscount(200000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Chegirmali to'lov: 180000.0 so'm",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 16,
    "title": {
      "uz": "16. 🏷️ Chegirilmali Tovar (DiscountedItem)",
      "en": "16. Discounted Item",
      "ru": "16. Товар со скидкой"
    },
    "scenario": "📖 Hayotiy Kontekst\n'OrderItem' oddiy narxni hisoblaydi, voris 'DiscountedItem' esa 'discountPercent' bo'yicha oraliq summani kamaytiradi.\n\n📋 Qadamlar:\n1. 'OrderItem'da 'price', 'quantity', 'public double getSubtotal()' (price * quantity).\n2. 'DiscountedItem extends OrderItem'da 'private double discountPercent;'.\n3. 'DiscountedItem'da 'getSubtotal()'ni qayta yozing (Override): 'super.getSubtotal() * (1 - discountPercent / 100.0)'.\n4. 'Main'da 50,000 so'mlik tovarga 10% chegirma hisoblang: \"Oraliq summa: 45000.0 so'm\".",
    "classes": [
      "OrderItem",
      "DiscountedItem",
      "Main"
    ],
    "methods": [
      "getSubtotal"
    ],
    "constructors": [
      "OrderItem",
      "DiscountedItem"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class OrderItem {\n    protected double price;\n    protected int quantity;\n    public OrderItem(double price, int quantity) { this.price = price; this.quantity = quantity; }\n    public double getSubtotal() { return price * quantity; }\n}\n\nclass DiscountedItem extends OrderItem {\n    private double discountPercent;\n    public DiscountedItem(double price, int quantity, double discountPercent) {\n        super(price, quantity);\n        this.discountPercent = discountPercent;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class OrderItem {\n    protected double price;\n    protected int quantity;\n    public OrderItem(double price, int quantity) { this.price = price; this.quantity = quantity; }\n    public double getSubtotal() { return price * quantity; }\n}\n\nclass DiscountedItem extends OrderItem {\n    private double discountPercent;\n    public DiscountedItem(double price, int quantity, double discountPercent) {\n        super(price, quantity);\n        this.discountPercent = discountPercent;\n    }\n    @Override\n    public double getSubtotal() {\n        return super.getSubtotal() * (1 - this.discountPercent / 100.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountedItem di = new DiscountedItem(50000.0, 1, 10.0);\n        System.out.println(\"Oraliq summa: \" + di.getSubtotal() + \" so'm\");\n    }\n}",
    "expectedOutput": "Oraliq summa: 45000.0 so'm",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 17,
    "title": {
      "uz": "17. ⛓️ Ota Konstruktorini Chaqirish (super chaining)",
      "en": "17. Constructor Chaining",
      "ru": "17. Вызов super конструктора"
    },
    "scenario": "📖 Hayotiy Kontekst\nBola sinf ota konstruktoriga 'super(args)' orqali qiymat uzatishi shart.\n\n📋 Qadamlar:\n1. 'Vehicle'da 'brand'.\n2. 'DeliveryCar extends Vehicle'da 'capacityKg' qo'shib, 'super(brand)' chaqiring.\n3. 'Main'da \"Labo\" (1000 kg) e'lon qiling va konsolga: \"Model: Labo | Yuk hajmi: 1000 kg\" deb chiqaring.",
    "classes": [
      "Vehicle",
      "DeliveryCar",
      "Main"
    ],
    "methods": [],
    "constructors": [
      "Vehicle",
      "DeliveryCar"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class Vehicle {\n    protected String brand;\n    public Vehicle(String brand) { this.brand = brand; }\n}\n\nclass DeliveryCar extends Vehicle {\n    private int capacityKg;\n    public DeliveryCar(String brand, int capacityKg) {\n        super(brand);\n        this.capacityKg = capacityKg;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Vehicle {\n    protected String brand;\n    public Vehicle(String brand) { this.brand = brand; }\n    public String getBrand() { return brand; }\n}\n\nclass DeliveryCar extends Vehicle {\n    private int capacityKg;\n    public DeliveryCar(String brand, int capacityKg) {\n        super(brand);\n        this.capacityKg = capacityKg;\n    }\n    public int getCapacityKg() { return capacityKg; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryCar dc = new DeliveryCar(\"Labo\", 1000);\n        System.out.println(\"Model: \" + dc.getBrand() + \" | Yuk hajmi: \" + dc.getCapacityKg() + \" kg\");\n    }\n}",
    "expectedOutput": "Model: Labo | Yuk hajmi: 1000 kg",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 18,
    "title": {
      "uz": "18. 🎯 Ota Metodini Bonus Bilan Boyitish",
      "en": "18. Method Augmentation",
      "ru": "18. Дополнение метода super"
    },
    "scenario": "📖 Hayotiy Kontekst\n'BonusCard'da 'deposit' chaqirilganda, ota 'deposit'iga qo'shimcha 5,000 so'm xush kelibsiz bonusi qo'shiladi.\n\n📋 Qadamlar:\n1. 'BaseCard'da 'deposit(amount)' (balance += amount).\n2. 'BonusCard extends BaseCard'da 'deposit(amount)'ni qayta yozing: 'super.deposit(amount + 5000.0);'.\n3. 'Main'da 20,000 depozit qiling va balans 25,000 ekanini chiqaring: \"Yangi balans: 25000.0 so'm\".",
    "classes": [
      "BaseCard",
      "BonusCard",
      "Main"
    ],
    "methods": [
      "deposit",
      "getBalance"
    ],
    "constructors": [
      "BaseCard",
      "BonusCard"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class BaseCard {\n    protected double balance = 0.0;\n    public void deposit(double amount) { this.balance += amount; }\n    public double getBalance() { return balance; }\n}\n\nclass BonusCard extends BaseCard {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BaseCard {\n    protected double balance = 0.0;\n    public void deposit(double amount) { this.balance += amount; }\n    public double getBalance() { return balance; }\n}\n\nclass BonusCard extends BaseCard {\n    @Override\n    public void deposit(double amount) {\n        super.deposit(amount + 5000.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BonusCard bc = new BonusCard();\n        bc.deposit(20000.0);\n        System.out.println(\"Yangi balans: \" + bc.getBalance() + \" so'm\");\n    }\n}",
    "expectedOutput": "Yangi balans: 25000.0 so'm",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 19,
    "title": {
      "uz": "19. 👔 Bank Xodimlari Iyerarxiyasi",
      "en": "19. Bank Employee Hierarchy",
      "ru": "19. Иерархия сотрудников банка"
    },
    "scenario": "📖 Hayotiy Kontekst\n'BankEmployee' maosh oladi, 'BranchManager' esa maoshga qo'shimcha bonus oladi.\n\n📋 Qadamlar:\n1. 'BankEmployee'da 'protected double baseSalary;'.\n2. 'BranchManager extends BankEmployee'da 'public double getTotalSalary(double bonus)' (baseSalary + bonus).\n3. 'Main'da 5,000,000 maosh va 2,000,000 bonusli menejerni chiqaring: \"Jami maosh: 7000000.0 so'm\".",
    "classes": [
      "BankEmployee",
      "BranchManager",
      "Main"
    ],
    "methods": [
      "getTotalSalary"
    ],
    "constructors": [
      "BankEmployee",
      "BranchManager"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class BankEmployee {\n    protected double baseSalary;\n    public BankEmployee(double baseSalary) { this.baseSalary = baseSalary; }\n}\n\nclass BranchManager extends BankEmployee {\n    public BranchManager(double baseSalary) { super(baseSalary); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankEmployee {\n    protected double baseSalary;\n    public BankEmployee(double baseSalary) { this.baseSalary = baseSalary; }\n}\n\nclass BranchManager extends BankEmployee {\n    public BranchManager(double baseSalary) { super(baseSalary); }\n    public double getTotalSalary(double bonus) {\n        return this.baseSalary + bonus;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BranchManager bm = new BranchManager(5000000.0);\n        System.out.println(\"Jami maosh: \" + bm.getTotalSalary(2000000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Jami maosh: 7000000.0 so'm",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 20,
    "title": {
      "uz": "20. 🏛️ Ko'p Bosqichli Vorislik (Multilevel Inheritance)",
      "en": "20. Multilevel Inheritance",
      "ru": "20. Многоуровневое наследование"
    },
    "scenario": "📖 Hayotiy Kontekst (2-Ustun Yakuni)\n'Account' -> 'CardAccount' -> 'VIPCardAccount' ko'p bosqichli vorislik zanjiri.\n\n📋 Qadamlar:\n1. 'Account' (id) -> 'CardAccount' (pan) -> 'VIPCardAccount' (status).\n2. 'VIPCardAccount'da 'public String getSummary()' ma'lumotlarni jamlasin.\n3. 'Main'da e'lon qilib chiqaring: \"Karta turi: VIP Platinum\".",
    "classes": [
      "Account",
      "CardAccount",
      "VIPCardAccount",
      "Main"
    ],
    "methods": [
      "getSummary"
    ],
    "constructors": [
      "Account",
      "CardAccount",
      "VIPCardAccount"
    ],
    "keywords": [
      "extends",
      "super"
    ],
    "starterCode": "class Account {\n    protected int id;\n    public Account(int id) { this.id = id; }\n}\n\nclass CardAccount extends Account {\n    protected String pan;\n    public CardAccount(int id, String pan) { super(id); this.pan = pan; }\n}\n\nclass VIPCardAccount extends CardAccount {\n    private String status;\n    public VIPCardAccount(int id, String pan, String status) {\n        super(id, pan);\n        this.status = status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Account {\n    protected int id;\n    public Account(int id) { this.id = id; }\n}\n\nclass CardAccount extends Account {\n    protected String pan;\n    public CardAccount(int id, String pan) { super(id); this.pan = pan; }\n}\n\nclass VIPCardAccount extends CardAccount {\n    private String status;\n    public VIPCardAccount(int id, String pan, String status) {\n        super(id, pan);\n        this.status = status;\n    }\n    public String getSummary() {\n        return \"Karta turi: \" + this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VIPCardAccount vca = new VIPCardAccount(101, \"9860\", \"VIP Platinum\");\n        System.out.println(vca.getSummary());\n    }\n}",
    "expectedOutput": "Karta turi: VIP Platinum",
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card"
  },
  {
    "id": 21,
    "title": {
      "uz": "21. 💳 Universal To'lov — Humo va Uzcard Polimorfizmi",
      "en": "21. Payment Polymorphism",
      "ru": "21. Полиморфизм оплаты"
    },
    "scenario": "📖 Hayotiy Kontekst\n'PaymentMethod' ota klassi 'pay(amount)' metodiga ega. Voris 'Humo' va 'Uzcard' uni o'ziga mos ravishda to'laydi.\n\n📋 Qadamlar:\n1. 'PaymentMethod'da 'public String pay(double amount)' (\"To'lov: \" + amount).\n2. 'HumoPayment extends PaymentMethod'da 'pay'ni qayta yozing: \"Humo orqali: \" + amount.\n3. 'Main'da polimorfik havola oching: 'PaymentMethod pm = new HumoPayment();' va 'pm.pay(45000.0)'ni chiqaring.",
    "classes": [
      "PaymentMethod",
      "HumoPayment",
      "Main"
    ],
    "methods": [
      "pay"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class PaymentMethod {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentMethod {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    @Override\n    public String pay(double amount) {\n        return \"Humo orqali: \" + amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new HumoPayment();\n        System.out.println(pm.pay(45000.0));\n    }\n}",
    "expectedOutput": "Humo orqali: 45000.0",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 22,
    "title": {
      "uz": "22. 📅 Uzum Nasiya — Muddatli To'lov Taqsimoti",
      "en": "22. Nasiya Installment",
      "ru": "22. Рассрочка Насия"
    },
    "scenario": "📖 Hayotiy Kontekst\n'UzumNasiya' to'lovni 3 oyga teng taqsimlab to'laydi.\n\n📋 Qadamlar:\n1. 'Payment' ota klassi 'pay(double amount)' (\"Oddiy: \" + amount).\n2. 'NasiyaPayment extends Payment'da 'pay'ni qayta yozing: \"Nasiya oylik: \" + (amount / 3.0).\n3. 'Main'da 300,000 so'm uchun Nasiya to'lovini chiqaring: \"Nasiya oylik: 100000.0\".",
    "classes": [
      "Payment",
      "NasiyaPayment",
      "Main"
    ],
    "methods": [
      "pay"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class Payment {\n    public String pay(double amount) { return \"Oddiy: \" + amount; }\n}\n\nclass NasiyaPayment extends Payment {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Payment {\n    public String pay(double amount) { return \"Oddiy: \" + amount; }\n}\n\nclass NasiyaPayment extends Payment {\n    @Override\n    public String pay(double amount) {\n        return \"Nasiya oylik: \" + (amount / 3.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payment p = new NasiyaPayment();\n        System.out.println(p.pay(300000.0));\n    }\n}",
    "expectedOutput": "Nasiya oylik: 100000.0",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 23,
    "title": {
      "uz": "23. 📲 Click QR To'lov Polimorfizmi",
      "en": "23. Click QR Payment",
      "ru": "23. Оплата Click QR"
    },
    "scenario": "📖 Hayotiy Kontekst\n'ClickPayment' QR kod formati bilan to'laydi: \"Click QR to'landi: \" + amount.\n\n📋 Qadamlar:\n1. 'PaymentOption' ota klassi.\n2. 'ClickPayment extends PaymentOption'.\n3. 'Main'da polimorfik chaqiruv: \"Click QR to'landi: 25000.0\".",
    "classes": [
      "PaymentOption",
      "ClickPayment",
      "Main"
    ],
    "methods": [
      "pay"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class PaymentOption {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass ClickPayment extends PaymentOption {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentOption {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass ClickPayment extends PaymentOption {\n    @Override\n    public String pay(double amount) {\n        return \"Click QR to'landi: \" + amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentOption opt = new ClickPayment();\n        System.out.println(opt.pay(25000.0));\n    }\n}",
    "expectedOutput": "Click QR to'landi: 25000.0",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 24,
    "title": {
      "uz": "24. ⚡ Dinamik Dispatch — Ota Ko'rsatkichi Bilan Boshqarish",
      "en": "24. Dynamic Dispatch",
      "ru": "24. Динамическая диспетчеризация"
    },
    "scenario": "📖 Hayotiy Kontekst\nKassa apparati qaysi karta kelishini bilmaydi, faqat 'PaymentMethod' ota turini qabul qiladi.\n\n📋 Qadamlar:\n1. 'Cashier' sinfida 'public void process(PaymentMethod pm, double sum)' metodini yozing, u konsolga 'pm.pay(sum)' natijasini chiqarsin.\n2. 'Main'da kassirga 'HumoPayment' uzating va to'lovni tasdiqlang.",
    "classes": [
      "PaymentMethod",
      "HumoPayment",
      "Cashier",
      "Main"
    ],
    "methods": [
      "pay",
      "process"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class PaymentMethod {\n    public String pay(double amount) { return \"To'landi: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    public String pay(double amount) { return \"Humo tasdiqlandi: \" + amount; }\n}\n\nclass Cashier {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentMethod {\n    public String pay(double amount) { return \"To'landi: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    @Override\n    public String pay(double amount) {\n        return \"Humo tasdiqlandi: \" + amount;\n    }\n}\n\nclass Cashier {\n    public void process(PaymentMethod pm, double sum) {\n        System.out.println(pm.pay(sum));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cashier c = new Cashier();\n        c.process(new HumoPayment(), 50000.0);\n    }\n}",
    "expectedOutput": "Humo tasdiqlandi: 50000.0",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 25,
    "title": {
      "uz": "25. 🧺 Turli To'lovlar Ro'yxati (Heterogeneous List)",
      "en": "25. Payment List",
      "ru": "25. Список разных оплат"
    },
    "scenario": "📖 Hayotiy Kontekst\n'List<PaymentMethod>' ro'yxatida bir vaqtning o'zida Humo, Uzcard va Click obyektlari turadi. Bitta for siklida barchasi ishga tushadi!\n\n📋 Qadamlar:\n1. 'PaymentMethod' (pay).\n2. 'CardPay' (\"Karta: \" + a) va 'CashPay' (\"Naqd: \" + a).\n3. 'Main'da 'PaymentMethod[] list = { new CardPay(), new CashPay() };' ochib, for siklida 10000 to'lang.",
    "classes": [
      "PaymentMethod",
      "CardPay",
      "CashPay",
      "Main"
    ],
    "methods": [
      "pay"
    ],
    "constructors": [],
    "keywords": [
      "extends",
      "for"
    ],
    "starterCode": "class PaymentMethod {\n    public String pay(double a) { return \"\" + a; }\n}\n\nclass CardPay extends PaymentMethod {\n    public String pay(double a) { return \"Karta: \" + a; }\n}\n\nclass CashPay extends PaymentMethod {\n    public String pay(double a) { return \"Naqd: \" + a; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class PaymentMethod {\n    public String pay(double a) { return \"\" + a; }\n}\n\nclass CardPay extends PaymentMethod {\n    @Override\n    public String pay(double a) { return \"Karta: \" + a; }\n}\n\nclass CashPay extends PaymentMethod {\n    @Override\n    public String pay(double a) { return \"Naqd: \" + a; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod[] list = { new CardPay(), new CashPay() };\n        for (PaymentMethod pm : list) {\n            System.out.println(pm.pay(10000.0));\n        }\n    }\n}",
    "expectedOutput": "Karta: 10000.0\nNaqd: 10000.0",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 26,
    "title": {
      "uz": "26. 🧾 Kassa Cheki Chop Etish Polimorfizmi",
      "en": "26. Receipt Polymorphism",
      "ru": "26. Полиморфизм чеков"
    },
    "scenario": "📖 Hayotiy Kontekst\n'Receipt' ota sinf. 'PaperReceipt' (\"Qog'oz Chek: \" + id).\n\n📋 Qadamlar:\n1. 'Receipt' ota sinfi.\n2. 'PaperReceipt' chop etishni qayta yozsin: \"Qog'oz Chek: 999\".",
    "classes": [
      "Receipt",
      "PaperReceipt",
      "Main"
    ],
    "methods": [
      "print"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class Receipt {\n    public String print(int id) { return \"Chek: \" + id; }\n}\n\nclass PaperReceipt extends Receipt {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Receipt {\n    public String print(int id) { return \"Chek: \" + id; }\n}\n\nclass PaperReceipt extends Receipt {\n    @Override\n    public String print(int id) {\n        return \"Qog'oz Chek: \" + id;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new PaperReceipt();\n        System.out.println(r.print(999));\n    }\n}",
    "expectedOutput": "Qog'oz Chek: 999",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 27,
    "title": {
      "uz": "27. 💸 Bank Komissiyasini Hisoblash",
      "en": "27. Transaction Fee",
      "ru": "27. Банковская комиссия"
    },
    "scenario": "📖 Hayotiy Kontekst\nOddiy o'tkazma 1% komissiya ('amount * 0.01'), xalqaro o'tkazma esa 3% komissiya oladi.\n\n📋 Qadamlar:\n1. 'Transfer'da 'calculateFee(amount)' (amount * 0.01).\n2. 'InternationalTransfer extends Transfer'da (amount * 0.03).\n3. 'Main'da 100,000 so'm uchun xalqaro komissiyani chiqaring: \"Komissiya: 3000.0 so'm\".",
    "classes": [
      "Transfer",
      "InternationalTransfer",
      "Main"
    ],
    "methods": [
      "calculateFee"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class Transfer {\n    public double calculateFee(double amount) { return amount * 0.01; }\n}\n\nclass InternationalTransfer extends Transfer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Transfer {\n    public double calculateFee(double amount) { return amount * 0.01; }\n}\n\nclass InternationalTransfer extends Transfer {\n    @Override\n    public double calculateFee(double amount) {\n        return amount * 0.03;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Transfer t = new InternationalTransfer();\n        System.out.println(\"Komissiya: \" + t.calculateFee(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Komissiya: 3000.0 so'm",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 28,
    "title": {
      "uz": "28. 🚚 Yetkazib Berish Narxi Polimorfizmi",
      "en": "28. Delivery Cost",
      "ru": "28. Стоимость доставки"
    },
    "scenario": "📖 Hayotiy Kontekst\n'Delivery' 10,000 so'm baza narxiga ega, 'ExpressDelivery' esa 25,000 so'm narx chiqaradi.\n\n📋 Qadamlar:\n1. 'Delivery' (getCost -> 10000.0).\n2. 'ExpressDelivery' (getCost -> 25000.0).\n3. 'Main'da chiqaring: \"Yetkazish narxi: 25000.0 so'm\".",
    "classes": [
      "Delivery",
      "ExpressDelivery",
      "Main"
    ],
    "methods": [
      "getCost"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class Delivery {\n    public double getCost() { return 10000.0; }\n}\n\nclass ExpressDelivery extends Delivery {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Delivery {\n    public double getCost() { return 10000.0; }\n}\n\nclass ExpressDelivery extends Delivery {\n    @Override\n    public double getCost() {\n        return 25000.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Delivery d = new ExpressDelivery();\n        System.out.println(\"Yetkazish narxi: \" + d.getCost() + \" so'm\");\n    }\n}",
    "expectedOutput": "Yetkazish narxi: 25000.0 so'm",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 29,
    "title": {
      "uz": "29. 🎟️ Chegirma Qoidalari Polimorfizmi",
      "en": "29. Discount Strategy",
      "ru": "29. Стратегия скидок"
    },
    "scenario": "📖 Hayotiy Kontekst\n'DiscountRule' ota sinf. 'HolidayDiscount' xariddan 15% chegirma beradi.\n\n📋 Qadamlar:\n1. 'DiscountRule'da 'apply(total)' (total).\n2. 'HolidayDiscount extends DiscountRule'da (total * 0.85).\n3. 'Main'da 100,000 uchun chiqaring: \"Bayramona narx: 85000.0 so'm\".",
    "classes": [
      "DiscountRule",
      "HolidayDiscount",
      "Main"
    ],
    "methods": [
      "apply"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class DiscountRule {\n    public double apply(double total) { return total; }\n}\n\nclass HolidayDiscount extends DiscountRule {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DiscountRule {\n    public double apply(double total) { return total; }\n}\n\nclass HolidayDiscount extends DiscountRule {\n    @Override\n    public double apply(double total) {\n        return total * 0.85;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountRule dr = new HolidayDiscount();\n        System.out.println(\"Bayramona narx: \" + dr.apply(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Bayramona narx: 85000.0 so'm",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 30,
    "title": {
      "uz": "30. 📊 Tranzaksiyalar Auditi (Master Polimorfizm)",
      "en": "30. Master Audit Logger",
      "ru": "30. Мастер аудита"
    },
    "scenario": "📖 Hayotiy Kontekst (3-Ustun Yakuni)\nAudit tizimi har qanday 'Transaction' turini bir xil qabul qilib, uning 'logDetails()'ini yozib boradi.\n\n📋 Qadamlar:\n1. 'Transaction' (logDetails -> \"[TX]\").\n2. 'CardTransaction' (\"[KARTA TO'LOVI]\").\n3. 'AuditLogger.audit(Transaction t)' chaqirib chiqaring: \"Auditor tekshiruvi: [KARTA TO'LOVI]\".",
    "classes": [
      "Transaction",
      "CardTransaction",
      "AuditLogger",
      "Main"
    ],
    "methods": [
      "logDetails",
      "audit"
    ],
    "constructors": [],
    "keywords": [
      "extends"
    ],
    "starterCode": "class Transaction {\n    public String logDetails() { return \"[TX]\"; }\n}\n\nclass CardTransaction extends Transaction {\n    public String logDetails() { return \"[KARTA TO'LOVI]\"; }\n}\n\nclass AuditLogger {\n    public void audit(Transaction t) {\n        System.out.println(\"Auditor tekshiruvi: \" + t.logDetails());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Transaction {\n    public String logDetails() { return \"[TX]\"; }\n}\n\nclass CardTransaction extends Transaction {\n    @Override\n    public String logDetails() {\n        return \"[KARTA TO'LOVI]\";\n    }\n}\n\nclass AuditLogger {\n    public void audit(Transaction t) {\n        System.out.println(\"Auditor tekshiruvi: \" + t.logDetails());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuditLogger logger = new AuditLogger();\n        logger.audit(new CardTransaction());\n    }\n}",
    "expectedOutput": "Auditor tekshiruvi: [KARTA TO'LOVI]",
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total"
  },
  {
    "id": 31,
    "title": {
      "uz": "31. 🏛️ Abstrakt Klass — abstract class Account",
      "en": "31. Abstract Account",
      "ru": "31. Абстрактный счет"
    },
    "scenario": "📖 Hayotiy Kontekst\n'abstract class Account' obyekt ochishga ruxsat bermaydi, faqat 'abstract double getInterestRate()' qoidasini belgilaydi.\n\n📋 Qadamlar:\n1. 'abstract class Account'da 'abstract double getInterestRate();'.\n2. 'SavingsAccount extends Account'da foiz stavkasini 18.0 deb qaytaring.\n3. 'Main'da chiqaring: \"Omonat foizi: 18.0%\".",
    "classes": [
      "Account",
      "SavingsAccount",
      "Main"
    ],
    "methods": [
      "getInterestRate"
    ],
    "constructors": [],
    "keywords": [
      "abstract",
      "extends"
    ],
    "starterCode": "abstract class Account {\n    public abstract double getInterestRate();\n}\n\nclass SavingsAccount extends Account {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "abstract class Account {\n    public abstract double getInterestRate();\n}\n\nclass SavingsAccount extends Account {\n    @Override\n    public double getInterestRate() {\n        return 18.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Account acc = new SavingsAccount();\n        System.out.println(\"Omonat foizi: \" + acc.getInterestRate() + \"%\");\n    }\n}",
    "expectedOutput": "Omonat foizi: 18.0%",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 32,
    "title": {
      "uz": "32. 📜 interface Payable — To'lov Shartnomasi",
      "en": "32. Interface Payable",
      "ru": "32. Интерфейс Payable"
    },
    "scenario": "📖 Hayotiy Kontekst\n'interface Payable' har qanday to'lov vositasi bajarishi shart bo'lgan 'void pay(double amount)' metodini talab qiladi.\n\n📋 Qadamlar:\n1. 'interface Payable'da 'void pay(double amount);'.\n2. 'CardPayment implements Payable'.\n3. 'Main'da 50,000 to'lang: \"Payable orqali to'landi: 50000.0\".",
    "classes": [
      "Payable",
      "CardPayment",
      "Main"
    ],
    "methods": [
      "pay"
    ],
    "constructors": [],
    "keywords": [
      "interface",
      "implements"
    ],
    "starterCode": "interface Payable {\n    void pay(double amount);\n}\n\nclass CardPayment implements Payable {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface Payable {\n    void pay(double amount);\n}\n\nclass CardPayment implements Payable {\n    @Override\n    public void pay(double amount) {\n        System.out.println(\"Payable orqali to'landi: \" + amount);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable p = new CardPayment();\n        p.pay(50000.0);\n    }\n}",
    "expectedOutput": "Payable orqali to'landi: 50000.0",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 33,
    "title": {
      "uz": "33. 🔄 interface Refundable — Pulni Qaytarish (Refund)",
      "en": "33. Interface Refundable",
      "ru": "33. Интерфейс Refundable"
    },
    "scenario": "📖 Hayotiy Kontekst\n'interface Refundable' 'void refund(double amount);' shartnomasini taqdim etadi.\n\n📋 Qadamlar:\n1. 'interface Refundable'.\n2. 'OnlineStore implements Refundable'.\n3. 'Main'da 20,000 qaytaring: \"Mablag' qaytarildi: 20000.0 so'm\".",
    "classes": [
      "Refundable",
      "OnlineStore",
      "Main"
    ],
    "methods": [
      "refund"
    ],
    "constructors": [],
    "keywords": [
      "interface",
      "implements"
    ],
    "starterCode": "interface Refundable {\n    void refund(double amount);\n}\n\nclass OnlineStore implements Refundable {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface Refundable {\n    void refund(double amount);\n}\n\nclass OnlineStore implements Refundable {\n    @Override\n    public void refund(double amount) {\n        System.out.println(\"Mablag' qaytarildi: \" + amount + \" so'm\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Refundable ref = new OnlineStore();\n        ref.refund(20000.0);\n    }\n}",
    "expectedOutput": "Mablag' qaytarildi: 20000.0 so'm",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 34,
    "title": {
      "uz": "34. 🔀 Ko'p Interfeyslarni Qo'llash (Multiple Interfaces)",
      "en": "34. Multiple Interfaces",
      "ru": "34. Множественные интерфейсы"
    },
    "scenario": "📖 Hayotiy Kontekst\nJava'da bitta klass bir vaqtning o'zida 'Payable' va 'Refundable' interfeyslarini qo'llashi mumkin!\n\n📋 Qadamlar:\n1. 'class ModernTerminal implements Payable, Refundable'.\n2. Ikkala metodni yozing.\n3. 'Main'da ikkalasini chaqirib chiqaring.",
    "classes": [
      "Payable",
      "Refundable",
      "ModernTerminal",
      "Main"
    ],
    "methods": [
      "pay",
      "refund"
    ],
    "constructors": [],
    "keywords": [
      "implements",
      "interface"
    ],
    "starterCode": "interface Payable { void pay(double a); }\ninterface Refundable { void refund(double a); }\n\nclass ModernTerminal implements Payable, Refundable {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface Payable { void pay(double a); }\ninterface Refundable { void refund(double a); }\n\nclass ModernTerminal implements Payable, Refundable {\n    @Override\n    public void pay(double a) { System.out.println(\"To'landi: \" + a); }\n    @Override\n    public void refund(double a) { System.out.println(\"Qaytarildi: \" + a); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModernTerminal mt = new ModernTerminal();\n        mt.pay(30000.0);\n        mt.refund(10000.0);\n    }\n}",
    "expectedOutput": "To'landi: 30000.0\nQaytarildi: 10000.0",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 35,
    "title": {
      "uz": "35. 🔔 interface Notifiable — Xabarnoma Standarti",
      "en": "35. Interface Notifiable",
      "ru": "35. Интерфейс Notifiable"
    },
    "scenario": "📖 Hayotiy Kontekst\n'interface Notifiable' har qanday xabarnoma tizimi uchun yagona shartnoma: 'void sendAlert(String msg);'.\n\n📋 Qadamlar:\n1. 'interface Notifiable'.\n2. 'PushService implements Notifiable'.\n3. 'Main'da chiqaring: \"ALERT: Parol o'zgartirildi\".",
    "classes": [
      "Notifiable",
      "PushService",
      "Main"
    ],
    "methods": [
      "sendAlert"
    ],
    "constructors": [],
    "keywords": [
      "interface",
      "implements"
    ],
    "starterCode": "interface Notifiable {\n    void sendAlert(String msg);\n}\n\nclass PushService implements Notifiable {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface Notifiable {\n    void sendAlert(String msg);\n}\n\nclass PushService implements Notifiable {\n    @Override\n    public void sendAlert(String msg) {\n        System.out.println(\"ALERT: \" + msg);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notifiable n = new PushService();\n        n.sendAlert(\"Parol o'zgartirildi\");\n    }\n}",
    "expectedOutput": "ALERT: Parol o'zgartirildi",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 36,
    "title": {
      "uz": "36. 🏷️ interface Discountable — Chegirma Modullari",
      "en": "36. Interface Discountable",
      "ru": "36. Интерфейс Discountable"
    },
    "scenario": "📖 Hayotiy Kontekst\n'interface Discountable' xaridlarga chegirma berish qoidasini e'lon qiladi: 'double calculateDiscount(double amount);'.\n\n📋 Qadamlar:\n1. 'interface Discountable'.\n2. 'StudentDiscount implements Discountable' (amount * 0.20 qaytarsin).\n3. 'Main'da 100,000 dan 20,000 chegirma oling.",
    "classes": [
      "Discountable",
      "StudentDiscount",
      "Main"
    ],
    "methods": [
      "calculateDiscount"
    ],
    "constructors": [],
    "keywords": [
      "interface",
      "implements"
    ],
    "starterCode": "interface Discountable {\n    double calculateDiscount(double amount);\n}\n\nclass StudentDiscount implements Discountable {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface Discountable {\n    double calculateDiscount(double amount);\n}\n\nclass StudentDiscount implements Discountable {\n    @Override\n    public double calculateDiscount(double amount) {\n        return amount * 0.20;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Discountable d = new StudentDiscount();\n        System.out.println(\"Chegirma summasi: \" + d.calculateDiscount(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Chegirma summasi: 20000.0 so'm",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 37,
    "title": {
      "uz": "37. 🔌 Loose Coupling — Bo'sh Bog'lanish Arxitekturasi",
      "en": "37. Loose Coupling",
      "ru": "37. Слабая связанность"
    },
    "scenario": "📖 Hayotiy Kontekst (Clean Code)\n'CheckoutService' aniq kartaga emas, faqat 'Payable' interfeysiga bog'lanadi. Bu — arxitekturaning eng yuqori darajasi!\n\n📋 Qadamlar:\n1. 'CheckoutService' ichida 'public void checkout(Payable p, double sum) { p.pay(sum); }'.\n2. 'Main'da 'checkout' chaqiring: \"To'landi: 75000.0\".",
    "classes": [
      "Payable",
      "CardPay",
      "CheckoutService",
      "Main"
    ],
    "methods": [
      "pay",
      "checkout"
    ],
    "constructors": [],
    "keywords": [
      "interface",
      "implements"
    ],
    "starterCode": "interface Payable { void pay(double sum); }\n\nclass CardPay implements Payable {\n    public void pay(double sum) { System.out.println(\"To'landi: \" + sum); }\n}\n\nclass CheckoutService {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface Payable { void pay(double sum); }\n\nclass CardPay implements Payable {\n    @Override\n    public void pay(double sum) { System.out.println(\"To'landi: \" + sum); }\n}\n\nclass CheckoutService {\n    public void checkout(Payable p, double sum) {\n        p.pay(sum);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckoutService cs = new CheckoutService();\n        cs.checkout(new CardPay(), 75000.0);\n    }\n}",
    "expectedOutput": "To'landi: 75000.0",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 38,
    "title": {
      "uz": "38. 📋 Template Method — abstract class BaseOrder",
      "en": "38. Template Method Order",
      "ru": "38. Шаблонный метод"
    },
    "scenario": "📖 Hayotiy Kontekst (Dizayn Pattern)\n'abstract class BaseOrder' buyurtma berish algoritmining qadamlarini belgilaydi: 'validate()', keyin 'abstract void deliver()'.\n\n📋 Qadamlar:\n1. 'abstract class BaseOrder'da 'public void process() { validate(); deliver(); }', 'abstract void deliver();'.\n2. 'FastOrder extends BaseOrder'da 'deliver'ni \"Tezkor yetkazildi\" qilib yozing.\n3. 'Main'da 'process()' chaqiring.",
    "classes": [
      "BaseOrder",
      "FastOrder",
      "Main"
    ],
    "methods": [
      "deliver",
      "process"
    ],
    "constructors": [],
    "keywords": [
      "abstract",
      "extends"
    ],
    "starterCode": "abstract class BaseOrder {\n    public void validate() { System.out.println(\"Tekshirildi\"); }\n    public abstract void deliver();\n    public void process() { validate(); deliver(); }\n}\n\nclass FastOrder extends BaseOrder {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "abstract class BaseOrder {\n    public void validate() { System.out.println(\"Tekshirildi\"); }\n    public abstract void deliver();\n    public void process() { validate(); deliver(); }\n}\n\nclass FastOrder extends BaseOrder {\n    @Override\n    public void deliver() {\n        System.out.println(\"Tezkor yetkazildi\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FastOrder fo = new FastOrder();\n        fo.process();\n    }\n}",
    "expectedOutput": "Tekshirildi\nTezkor yetkazildi",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 39,
    "title": {
      "uz": "39. 👁️ interface BiometricVerifiable — FaceID Shartnomasi",
      "en": "39. Biometric Interface",
      "ru": "39. Биометрический интерфейс"
    },
    "scenario": "📖 Hayotiy Kontekst\nFaceID orqali shaxsni tasdiqlash uchun interfeys: 'boolean verifyFace(String faceData);'.\n\n📋 Qadamlar:\n1. 'interface BiometricVerifiable'.\n2. 'PhoneBiometrics implements BiometricVerifiable' (true qaytarsin).\n3. 'Main'da chiqaring: \"FaceID tasdiqlandi: true\".",
    "classes": [
      "BiometricVerifiable",
      "PhoneBiometrics",
      "Main"
    ],
    "methods": [
      "verifyFace"
    ],
    "constructors": [],
    "keywords": [
      "interface",
      "implements"
    ],
    "starterCode": "interface BiometricVerifiable {\n    boolean verifyFace(String faceData);\n}\n\nclass PhoneBiometrics implements BiometricVerifiable {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface BiometricVerifiable {\n    boolean verifyFace(String faceData);\n}\n\nclass PhoneBiometrics implements BiometricVerifiable {\n    @Override\n    public boolean verifyFace(String faceData) {\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BiometricVerifiable bv = new PhoneBiometrics();\n        System.out.println(\"FaceID tasdiqlandi: \" + bv.verifyFace(\"user_face_hash\"));\n    }\n}",
    "expectedOutput": "FaceID tasdiqlandi: true",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  },
  {
    "id": 40,
    "title": {
      "uz": "40. 🌟 Birlashgan Grand FinTech Arxitekturasi (Master)",
      "en": "40. Grand Architecture",
      "ru": "40. Гранд Архитектура"
    },
    "scenario": "📖 Hayotiy Kontekst (4 Ta Ustun Birlashuvi!)\nTabriklaymiz! Siz Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraksiyani to'liq egalladingiz! Bu masalada 'interface Payable', 'Customer' va 'Order' bitta mukammal tizimga birlashadi.\n\n📋 Qadamlar:\n1. 'interface Payable' (void pay(double s);).\n2. 'Card implements Payable'.\n3. 'Customer' (name).\n4. 'Order'da 'public void checkout(Customer c, Payable p, double total)' metodida:\n\"Mijoz: \" + c.getName() + \" | Jami: \" + total\nva 'p.pay(total)' chaqirilsin.\n5. 'Main'da to'liq arxitekturani ishga tushiring!",
    "classes": [
      "Payable",
      "Card",
      "Customer",
      "Order",
      "Main"
    ],
    "methods": [
      "pay",
      "checkout",
      "getName"
    ],
    "constructors": [
      "Customer"
    ],
    "keywords": [
      "interface",
      "implements"
    ],
    "starterCode": "interface Payable {\n    void pay(double s);\n}\n\nclass Card implements Payable {\n    public void pay(double s) { System.out.println(\"Karta orqali to'landi: \" + s); }\n}\n\nclass Customer {\n    private String name;\n    public Customer(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\nclass Order {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "interface Payable {\n    void pay(double s);\n}\n\nclass Card implements Payable {\n    @Override\n    public void pay(double s) {\n        System.out.println(\"Karta orqali to'landi: \" + s);\n    }\n}\n\nclass Customer {\n    private String name;\n    public Customer(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\nclass Order {\n    public void checkout(Customer c, Payable p, double total) {\n        System.out.println(\"Mijoz: \" + c.getName() + \" | Jami: \" + total);\n        p.pay(total);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Sardor\");\n        Card card = new Card();\n        Order order = new Order();\n        order.checkout(c, card, 120000.0);\n    }\n}",
    "expectedOutput": "Mijoz: Sardor | Jami: 120000.0\nKarta orqali to'landi: 120000.0",
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder"
  }
];
