// WIUT OOP (5COSC018C) — PRACTICAL OOP: 4 MASTER PILLARS (40 CHALLENGES)
// Ecosystem: Uzum & Payme FinTech & E-Commerce Architecture
// 1: Encapsulation (1-10) | 2: Inheritance (11-20) | 3: Polymorphism (21-30) | 4: Abstraction (31-40)
// Author: Professor Ada • Senior Java Architect & Examiner
// Full Trilingual Support (UZ / RU / EN) & Pedagogical Breakdown

(typeof window !== 'undefined' ? window : global).OOP_PRACTICAL_CHALLENGES = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "1. 💳 Baza Bank Kartasi — Balansni Himoyalash",
      "en": "1. Base Card",
      "ru": "1. Базовая карта"
    },
    "story": {
      "uz": "FinTech Uzum/Payme ekotizimida mijoz Ali Valiyev yangi bank kartasi ochmoqda. Balans 'private double balance;' bo'lib, uni faqat musbat summa bilan to'ldirish (deposit) mumkin.",
      "en": "In Uzum & Payme FinTech ecosystem: Bank kartasining balansi 'private double balance;' bo'lishi shart. Uni faqat musbat summa bilan to'ldirish mumkin.",
      "ru": "В экосистеме Uzum & Payme FinTech: Bank kartasining balansi 'private double balance;' bo'lishi shart. Uni faqat musbat summa bilan to'ldirish mumkin."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code> klassida <code>private double balance;</code> maydoni.",
        "Konstruktor: <code>public BankCard(double initialBalance)</code>.",
        "<code>public void deposit(double amount)</code> (amount > 0 bo'lsa balansga qo'shadi).",
        "<code>public double getBalance()</code> getteri.",
        "<code>Main</code>da 50,000 so'mlik karta ochib, 25,000 depozit qiling va: \"Balans: \" + card.getBalance() deb chiqaring."
      ],
      "en": [
        "<code>BankCard</code> in class <code>private double balance;</code> maydoni.",
        "Konstruktor <code>public BankCard(double initialBalance)</code>.",
        "<code>public void deposit(double amount)</code> (amount > 0 bo<code>lsa qo</code>shadi).",
        "<code>public double getBalance()</code> getteri.",
        "<code>Main</code>da 50,000 so'mlik karta ochib, 25,000 depozit qiling va konsolga: \"Balans: \" + card.getBalance() deb print to console."
      ],
      "ru": [
        "<code>BankCard</code> в классе <code>private double balance;</code> maydoni.",
        "Konstruktor <code>public BankCard(double initialBalance)</code>.",
        "<code>public void deposit(double amount)</code> (amount > 0 bo<code>lsa qo</code>shadi).",
        "<code>public double getBalance()</code> getteri.",
        "<code>Main</code>da 50,000 so'mlik karta ochib, 25,000 depozit qiling va konsolga: \"Balans: \" + card.getBalance() deb выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nFinTech Uzum/Payme ekotizimida mijoz Ali Valiyev yangi bank kartasi ochmoqda. Balans 'private double balance;' bo'lib, uni faqat musbat summa bilan to'ldirish (deposit) mumkin.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. BankCard klassida private double balance; maydoni.\n2. Konstruktor: public BankCard(double initialBalance).\n3. public void deposit(double amount) metodi: agar amount > 0 bo'lsa, balansga qo'shadi.\n4. public double getBalance() getteri.\n5. Mainda 50,000 so'mlik karta ochib, 25,000 depozit qiling va konsolga: \"Balans: \" + card.getBalance() deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Bank kartasining balansi 'private double balance;' bo'lishi shart. Uni faqat musbat summa bilan to'ldirish mumkin.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. BankCard in class private double balance; maydoni.\n2. Konstruktor public BankCard(double initialBalance).\n3. public void deposit(double amount) (amount > 0 bolsa qoshadi).\n4. public double getBalance() getteri.\n5. Mainda 50,000 so'mlik karta ochib, 25,000 depozit qiling va konsolga: \"Balans: \" + card.getBalance() deb print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Bank kartasining balansi 'private double balance;' bo'lishi shart. Uni faqat musbat summa bilan to'ldirish mumkin.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. BankCard в классе private double balance; maydoni.\n2. Konstruktor public BankCard(double initialBalance).\n3. public void deposit(double amount) (amount > 0 bolsa qoshadi).\n4. public double getBalance() getteri.\n5. Mainda 50,000 so'mlik karta ochib, 25,000 depozit qiling va konsolga: \"Balans: \" + card.getBalance() deb выведите в консоль."
    },
    "requirements": {
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
      "fields": [
        "balance"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 1. 💳 Baza Bank Kartasi — Balansni Himoyalash",
      "Kutilayotgan natija: Balans: 75000.0"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private double balance;\n\n    public BankCard(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n        }\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0);\n        card.deposit(25000.0);\n        System.out.println(\"Balans: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Balans: 75000.0",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class BankCard {\n    private double balance;\n\n    public BankCard(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n        }\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0);\n        card.deposit(25000.0);\n        System.out.println(\"Balans: \" + card.getBalance());\n    }\n}",
      "breakdown": [
        "<code>BankCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>deposit, getBalance</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Balans: 75000.0"
      ],
      "breakdownRu": [
        "<code>BankCard, Main</code>: Классы архитектуры задачи.",
        "<code>deposit, getBalance</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Balans: 75000.0"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "2. 🏧 Xavfsiz Pul Yechish — Overdraft Himoyasi",
      "en": "2. Safe Withdraw",
      "ru": "2. Безопасное снятие"
    },
    "story": {
      "uz": "Oldingi 1-bosqichda ochilgan kartamizda 75,000 so'm bor. Endi yangi karta ochmasdan, aynan o'sha kartamizdan pul yechish (withdraw) funksiyasini qo'shamiz!",
      "en": "In Uzum & Payme FinTech ecosystem: 'withdraw' balandlikdan ortiqcha pul yechishga yo'l qo'ymasligi kerak.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'withdraw' balandlikdan ortiqcha pul yechishga yo'l qo'ymasligi kerak."
    },
    "steps": {
      "uz": [
        "1-bosqichdagi <code>BankCard</code> kodingizga <code>public boolean withdraw(double amount)</code> metodini qo'shing.",
        "Agar <code>amount > 0 && amount <= this.balance</code> bo'lsa, balandlikdan ayirib <code>true</code> qaytarsin.",
        "Mablag' yetarli bo'lmasa, balansni o'zgartirmasdan <code>false</code> qaytarsin.",
        "<code>Main</code>da 1-bosqichdagi kartani ochib (50,000), 25,000 to'ldiring va 25,000 yechib: \"Qoldiq: \" + card.getBalance() deb chiqaring."
      ],
      "en": [
        "<code>SecureCard</code> in class <code>private double balance;</code>.",
        "<code>public boolean withdraw(double amount)</code> (amount > 0 && amount <= balance bo'lsa ayiradi va true qaytaradi).",
        "<code>public double getBalance()</code>.",
        "<code>Main</code>da 80,000 dan 30,000 yeching va konsolga: \"Qoldiq: \" + card.getBalance() deb print to console."
      ],
      "ru": [
        "<code>SecureCard</code> в классе <code>private double balance;</code>.",
        "<code>public boolean withdraw(double amount)</code> (amount > 0 && amount <= balance bo'lsa ayiradi va true qaytaradi).",
        "<code>public double getBalance()</code>.",
        "<code>Main</code>da 80,000 dan 30,000 yeching va konsolga: \"Qoldiq: \" + card.getBalance() deb выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nOldingi 1-bosqichda ochilgan kartamizda 75,000 so'm bor. Endi yangi karta ochmasdan, aynan o'sha kartamizdan pul yechish (withdraw) funksiyasini qo'shamiz! Bu metod hisobda yetarli mablag' borligini tekshirishi va overdraftdan (ortiqcha yechishdan) himoyalashi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 1-bosqichdagi 'BankCard' kodingizga 'public boolean withdraw(double amount)' metodini qo'shing.\n2. Agar 'amount > 0' va 'amount <= this.balance' bo'lsa, balandlikdan ayirib 'true' qaytarsin.\n3. Mablag' yetarli bo'lmasa, balansni o'zgartirmasdan 'false' qaytarsin.\n4. 'Main'da o'sha kartamizdan (50,000 ochib, 25,000 depozit qilingan) 25,000 yeching ('card.withdraw(25000.0);') va: \"Qoldiq: \" + card.getBalance() deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'withdraw' balandlikdan ortiqcha pul yechishga yo'l qo'ymasligi kerak.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. SecureCard in class private double balance;.\n2. public boolean withdraw(double amount) (amount > 0 && amount <= balance bo'lsa ayiradi va true qaytaradi).\n3. public double getBalance().\n4. Mainda 80,000 dan 30,000 yeching va konsolga: \"Qoldiq: \" + card.getBalance() deb print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'withdraw' balandlikdan ortiqcha pul yechishga yo'l qo'ymasligi kerak.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. SecureCard в классе private double balance;.\n2. public boolean withdraw(double amount) (amount > 0 && amount <= balance bo'lsa ayiradi va true qaytaradi).\n3. public double getBalance().\n4. Mainda 80,000 dan 30,000 yeching va konsolga: \"Qoldiq: \" + card.getBalance() deb выведите в консоль."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "deposit",
        "withdraw",
        "getBalance"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "balance"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 2. 🏧 Xavfsiz Pul Yechish — Overdraft Himoyasi",
      "Kutilayotgan natija: Qoldiq: 50000.0"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private double balance;\n\n    public BankCard(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n        }\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0);\n        card.deposit(25000.0);\n        card.withdraw(25000.0);\n        System.out.println(\"Qoldiq: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Qoldiq: 50000.0",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class SecureCard {\n    private double balance;\n\n    public SecureCard(double balance) {\n        this.balance = balance;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureCard card = new SecureCard(80000.0);\n        card.withdraw(30000.0);\n        System.out.println(\"Qoldiq: \" + card.getBalance());\n    }\n}",
      "breakdown": [
        "<code>SecureCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>withdraw, getBalance</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Qoldiq: 50000.0"
      ],
      "breakdownRu": [
        "<code>SecureCard, Main</code>: Классы архитектуры задачи.",
        "<code>withdraw, getBalance</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Qoldiq: 50000.0"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "3. 🔒 4-Xonali PIN Kod Xavfsizligi",
      "en": "3. PIN Security",
      "ru": "3. PIN безопасность"
    },
    "story": {
      "uz": "Kartamizdan begona odamlar pul yecholmasligi uchun 'BankCard'ga 4 xonali PIN kod himoyasi qo'shiladi. Boshlang'ich PIN 1234 qilib o'rnatiladi.",
      "en": "In Uzum & Payme FinTech ecosystem: Karta PIN kodi faqat 'verifyPin' va 'changePin' orqali tekshirilishi va o'zgartirilishi mumkin.",
      "ru": "В экосистеме Uzum & Payme FinTech: Karta PIN kodi faqat 'verifyPin' va 'changePin' orqali tekshirilishi va o'zgartirilishi mumkin."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code> klassida <code>private int pin = 1234;</code> maydonini e'lon qiling.",
        "<code>public boolean verifyPin(int inputPin)</code>: agar kiritilgan PIN to'g'ri bo'lsa <code>true</code>, aks holda <code>false</code> qaytarsin.",
        "<code>public boolean changePin(int oldPin, int newPin)</code>: eski PIN to'g'ri bo'lsagina yangisiga o'zgartirsin va <code>true</code> qaytarsin.",
        "<code>Main</code>da o'sha kartamiz PIN kodini 1234 bilan tekshiring va: \"PIN to'g'ri: \" + card.verifyPin(1234) deb chiqaring."
      ],
      "en": [
        "<code>CardPin</code> in class <code>private int pin;</code>.",
        "<code>public boolean verifyPin(int inputPin)</code>.",
        "<code>public boolean changePin(int oldPin, int newPin)</code>.",
        "<code>Main</code>da 1234 kodli karta ochib, tekshiring va konsolga: \"PIN to<code>g</code>ri: \" + cp.verifyPin(1234) deb print to console."
      ],
      "ru": [
        "<code>CardPin</code> в классе <code>private int pin;</code>.",
        "<code>public boolean verifyPin(int inputPin)</code>.",
        "<code>public boolean changePin(int oldPin, int newPin)</code>.",
        "<code>Main</code>da 1234 kodli karta ochib, tekshiring va konsolga: \"PIN to<code>g</code>ri: \" + cp.verifyPin(1234) deb выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nKartamizdan begona odamlar pul yecholmasligi uchun 'BankCard'ga 4 xonali PIN kod himoyasi qo'shiladi. Boshlang'ich PIN 1234 qilib o'rnatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard' klassida 'private int pin = 1234;' maydonini e'lon qiling.\n2. 'public boolean verifyPin(int inputPin)': agar kiritilgan PIN to'g'ri bo'lsa 'true', aks holda 'false' qaytarsin.\n3. 'public boolean changePin(int oldPin, int newPin)': eski PIN to'g'ri bo'lsagina yangisiga o'zgartirsin va 'true' qaytarsin.\n4. 'Main'da o'sha kartamiz PIN kodini 1234 bilan tekshiring va konsolga: \"PIN to'g'ri: \" + card.verifyPin(1234) deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Karta PIN kodi faqat 'verifyPin' va 'changePin' orqali tekshirilishi va o'zgartirilishi mumkin.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. CardPin in class private int pin;.\n2. public boolean verifyPin(int inputPin).\n3. public boolean changePin(int oldPin, int newPin).\n4. Mainda 1234 kodli karta ochib, tekshiring va konsolga: \"PIN togri: \" + cp.verifyPin(1234) deb print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Karta PIN kodi faqat 'verifyPin' va 'changePin' orqali tekshirilishi va o'zgartirilishi mumkin.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. CardPin в классе private int pin;.\n2. public boolean verifyPin(int inputPin).\n3. public boolean changePin(int oldPin, int newPin).\n4. Mainda 1234 kodli karta ochib, tekshiring va konsolga: \"PIN togri: \" + cp.verifyPin(1234) deb выведите в консоль."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "verifyPin",
        "changePin",
        "getBalance"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "balance",
        "pin"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 3. 🔒 4-Xonali PIN Kod Xavfsizligi",
      "Kutilayotgan natija: PIN to'g'ri: true"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private double balance;\n    private int pin = 1234;\n\n    public BankCard(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean verifyPin(int inputPin) {\n        return this.pin == inputPin;\n    }\n\n    public boolean changePin(int oldPin, int newPin) {\n        if (this.pin == oldPin) {\n            this.pin = newPin;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0);\n        card.deposit(25000.0);\n        card.withdraw(25000.0);\n        System.out.println(\"PIN to'g'ri: \" + card.verifyPin(1234));\n    }\n}",
    "expectedOutput": "PIN to'g'ri: true",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class CardPin {\n    private int pin;\n\n    public CardPin(int pin) {\n        this.pin = pin;\n    }\n\n    public boolean verifyPin(int inputPin) {\n        return this.pin == inputPin;\n    }\n\n    public boolean changePin(int oldPin, int newPin) {\n        if (this.pin == oldPin) {\n            this.pin = newPin;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardPin cp = new CardPin(1234);\n        System.out.println(\"PIN to'g'ri: \" + cp.verifyPin(1234));\n    }\n}",
      "breakdown": [
        "<code>CardPin, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>verifyPin, changePin</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: PIN to'g'ri: true"
      ],
      "breakdownRu": [
        "<code>CardPin, Main</code>: Классы архитектуры задачи.",
        "<code>verifyPin, changePin</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: PIN to'g'ri: true"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "4. 🛡️ Kunlik Xarid Limiti (Daily Limit)",
      "en": "4. Daily Limit",
      "ru": "4. Дневной лимит"
    },
    "story": {
      "uz": "Katta summadagi firibgarliklardan saqlash uchun 'BankCard'ga kunlik limit 'private double dailyLimit = 100000.0;' belgilanadi.",
      "en": "In Uzum & Payme FinTech ecosystem: Firibgarlikdan saqlash uchun karta kunlik xarid limitiga  ega bo'ladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Firibgarlikdan saqlash uchun karta kunlik xarid limitiga  ega bo'ladi."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>private double dailyLimit = 100000.0;</code> maydoni va <code>public BankCard(double initialBalance, double dailyLimit)</code> konstruktorini qo'shing.",
        "<code>public boolean spend(double amount)</code>: agar summa > 0 va dailyLimit hamda balance dan oshmasa, balandlikdan va limitdan ayirsin va true qaytarsin.",
        "<code>Main</code>da 50,000 balansli kartaga 25,000 depozit qilib, 30,000 sarflang (spend) va qoldiq balansni chiqaring."
      ],
      "en": [
        "<code>LimitedCard</code> in class <code>private double balance;</code>, <code>private double dailyLimit;</code>.",
        "Konstruktor <code>public LimitedCard(double balance, double dailyLimit)</code>.",
        "<code>public boolean spend(double amount)</code>.",
        "<code>public double getBalance()</code>.",
        "<code>Main</code>da 200,000 balans va 50,000 limitli karta ochib, 30,000 sarflang va qoldiq balansni print to console."
      ],
      "ru": [
        "<code>LimitedCard</code> в классе <code>private double balance;</code>, <code>private double dailyLimit;</code>.",
        "Konstruktor <code>public LimitedCard(double balance, double dailyLimit)</code>.",
        "<code>public boolean spend(double amount)</code>.",
        "<code>public double getBalance()</code>.",
        "<code>Main</code>da 200,000 balans va 50,000 limitli karta ochib, 30,000 sarflang va qoldiq balansni выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nKatta summadagi firibgarliklardan saqlash uchun 'BankCard'ga kunlik limit 'private double dailyLimit = 100000.0;' belgilanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard'da 'private double dailyLimit = 100000.0;' maydoni va 'public BankCard(double initialBalance, double dailyLimit)' konstruktorini qo'shing.\n2. 'public boolean spend(double amount)': agar summa > 0 va dailyLimit hamda balance dan oshmasa, balandlikdan va limitdan ayirsin va true qaytarsin.\n3. 'Main'da 50,000 balansli kartaga 25,000 depozit qilib, 30,000 sarflang (spend) va qoldiq balansni chiqaring: \"Qoldiq balans: \" + card.getBalance().",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Firibgarlikdan saqlash uchun karta kunlik xarid limitiga  ega bo'ladi.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. LimitedCard in class private double balance;, private double dailyLimit;.\n2. Konstruktor public LimitedCard(double balance, double dailyLimit).\n3. public boolean spend(double amount).\n4. public double getBalance().\n5. Mainda 200,000 balans va 50,000 limitli karta ochib, 30,000 sarflang va qoldiq balansni print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Firibgarlikdan saqlash uchun karta kunlik xarid limitiga  ega bo'ladi.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. LimitedCard в классе private double balance;, private double dailyLimit;.\n2. Konstruktor public LimitedCard(double balance, double dailyLimit).\n3. public boolean spend(double amount).\n4. public double getBalance().\n5. Mainda 200,000 balans va 50,000 limitli karta ochib, 30,000 sarflang va qoldiq balansni выведите в консоль."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "spend",
        "getBalance"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "balance",
        "dailyLimit"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 4. 🛡️ Kunlik Xarid Limiti (Daily Limit)",
      "Kutilayotgan natija: Qoldiq balans: 170000.0"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private double balance;\n    private int pin = 1234;\n    private double dailyLimit = 100000.0;\n\n    public BankCard(double initialBalance) {\n        this.balance = initialBalance;\n    }\n\n    public BankCard(double initialBalance, double dailyLimit) {\n        this.balance = initialBalance;\n        this.dailyLimit = dailyLimit;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public boolean spend(double amount) {\n        if (amount > 0 && amount <= this.dailyLimit && amount <= this.balance) {\n            this.balance -= amount;\n            this.dailyLimit -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(50000.0, 100000.0);\n        card.deposit(25000.0);\n        card.spend(30000.0);\n        System.out.println(\"Qoldiq balans: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Qoldiq balans: 45000.0",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class LimitedCard {\n    private double balance;\n    private double dailyLimit;\n\n    public LimitedCard(double balance, double dailyLimit) {\n        this.balance = balance;\n        this.dailyLimit = dailyLimit;\n    }\n\n    public boolean spend(double amount) {\n        if (amount > 0 && amount <= this.dailyLimit && amount <= this.balance) {\n            this.balance -= amount;\n            this.dailyLimit -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LimitedCard lc = new LimitedCard(200000.0, 50000.0);\n        lc.spend(30000.0);\n        System.out.println(\"Qoldiq balans: \" + lc.getBalance());\n    }\n}",
      "breakdown": [
        "<code>LimitedCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>spend, getBalance</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Qoldiq balans: 170000.0"
      ],
      "breakdownRu": [
        "<code>LimitedCard, Main</code>: Классы архитектуры задачи.",
        "<code>spend, getBalance</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Qoldiq balans: 170000.0"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "5. 👤 Karta Egasi Shaxsi (Cardholder KYC)",
      "en": "5. User KYC",
      "ru": "5. Профиль KYC"
    },
    "story": {
      "uz": "Bank tizimida karta anonim bo'la olmaydi. Karta shaxsi tasdiqlangan mijoz 'Ali Valiyev' nomiga rasmiylashtiriladi.",
      "en": "In Uzum & Payme FinTech ecosystem: Foydalanuvchi yoshi 'age' faqat 16 dan yuqori bo'lganda qabul qilinadi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Foydalanuvchi yoshi 'age' faqat 16 dan yuqori bo'lganda qabul qilinadi."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>private String cardHolder;</code> maydonini qo'shing.",
        "Konstruktor: <code>public BankCard(String cardHolder, double initialBalance)</code> orqali mijoz nomini biriktiring.",
        "<code>public String getCardHolder()</code> getteri.",
        "<code>Main</code>da 'Ali Valiyev' nomiga karta ochib (50,000), 25,000 to'ldirib, 25,000 yeching va: \"Mijoz: \" + card.getCardHolder() + \" | Qoldiq: \" + card.getBalance() deb chiqaring."
      ],
      "en": [
        "<code>UserProfile</code>da <code>private String name;</code>, <code>private int age;</code>.",
        "<code>public boolean setAge(int age)</code>.",
        "<code>public int getAge()</code>, <code>public String getName()</code>.",
        "<code>Main</code>da 20 yoshli Anvarni e'lon qilib print to console: \"Mijoz: Anvar | Yoshi: 20\"."
      ],
      "ru": [
        "<code>UserProfile</code>da <code>private String name;</code>, <code>private int age;</code>.",
        "<code>public boolean setAge(int age)</code>.",
        "<code>public int getAge()</code>, <code>public String getName()</code>.",
        "<code>Main</code>da 20 yoshli Anvarni e'lon qilib выведите в консоль: \"Mijoz: Anvar | Yoshi: 20\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nBank tizimida karta anonim bo'la olmaydi. Karta shaxsi tasdiqlangan mijoz 'Ali Valiyev' nomiga rasmiylashtiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard'da 'private String cardHolder;' maydonini qo'shing.\n2. Konstruktor: 'public BankCard(String cardHolder, double initialBalance)' orqali mijoz nomini biriktiring.\n3. 'public String getCardHolder()' getteri.\n4. 'Main'da 'Ali Valiyev' nomiga karta ochib, 25,000 to'ldirib, 25,000 yeching va konsolga: \"Mijoz: \" + card.getCardHolder() + \" | Qoldiq: \" + card.getBalance() deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Foydalanuvchi yoshi 'age' faqat 16 dan yuqori bo'lganda qabul qilinadi.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. UserProfileda private String name;, private int age;.\n2. public boolean setAge(int age).\n3. public int getAge(), public String getName().\n4. Mainda 20 yoshli Anvarni e'lon qilib print to console: \"Mijoz: Anvar | Yoshi: 20\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Foydalanuvchi yoshi 'age' faqat 16 dan yuqori bo'lganda qabul qilinadi.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. UserProfileda private String name;, private int age;.\n2. public boolean setAge(int age).\n3. public int getAge(), public String getName().\n4. Mainda 20 yoshli Anvarni e'lon qilib выведите в консоль: \"Mijoz: Anvar | Yoshi: 20\"."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "getCardHolder",
        "getBalance"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "cardHolder",
        "balance"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 5. 👤 Foydalanuvchi Shaxsi va KYC (16+)",
      "Kutilayotgan natija: Mijoz: Anvar | Yoshi: 20"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private String cardHolder;\n    private double balance;\n    private int pin = 1234;\n\n    public BankCard(String cardHolder, double initialBalance) {\n        this.cardHolder = cardHolder;\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public String getCardHolder() {\n        return this.cardHolder;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"Ali Valiyev\", 50000.0);\n        card.deposit(25000.0);\n        card.withdraw(25000.0);\n        System.out.println(\"Mijoz: \" + card.getCardHolder() + \" | Qoldiq: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Mijoz: Ali Valiyev | Qoldiq: 50000.0",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class UserProfile {\n    private String name;\n    private int age;\n\n    public UserProfile(String name, int age) {\n        this.name = name;\n        this.age = age >= 16 ? age : 16;\n    }\n\n    public boolean setAge(int age) {\n        if (age >= 16) {\n            this.age = age;\n            return true;\n        }\n        return false;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile up = new UserProfile(\"Anvar\", 20);\n        System.out.println(\"Mijoz: \" + up.getName() + \" | Yoshi: \" + up.getAge());\n    }\n}",
      "breakdown": [
        "<code>UserProfile, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>setAge, getAge, getName</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Mijoz: Anvar | Yoshi: 20"
      ],
      "breakdownRu": [
        "<code>UserProfile, Main</code>: Классы архитектуры задачи.",
        "<code>setAge, getAge, getName</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Mijoz: Anvar | Yoshi: 20"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 6,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "6. 🚫 Kartani Muzlatish va Xavfsiz Qulflash",
      "en": "6. Multi-Currency Wallet",
      "ru": "6. Мультивалютный кошелек"
    },
    "story": {
      "uz": "Agar Ali Valiyev kartasini yo'qotib qo'ysa, tizimda darhol muzlatib qo'yish kerak ('isBlocked'). Karta bloklanganida hech qanday pul yechilmaydi!",
      "en": "In Uzum & Payme FinTech ecosystem: 'Wallet' klassi UZS va USD hisoblarini alohida saqlaydi va kurs  bo'yicha ayirboshlaydi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'Wallet' klassi UZS va USD hisoblarini alohida saqlaydi va kurs  bo'yicha ayirboshlaydi."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>private boolean isBlocked = false;</code> maydonini qo'shing.",
        "<code>public void lockCard()</code>, <code>public void unlockCard()</code>, <code>public boolean isLocked()</code> metodlari.",
        "<code>withdraw</code> metodida karta bloklangan bo'lsa <code>false</code> qaytarsin (<code>if (this.isBlocked) return false;</code>).",
        "<code>Main</code>da kartani bloklab, 10,000 yechishga urinib ko'ring va natijani chiqaring."
      ],
      "en": [
        "<code>Wallet</code>da <code>private double uzs;</code>, <code>private double usd;</code>.",
        "<code>public void convertUsdToUzs(double amountUsd, double rate)</code>.",
        "<code>public double getUzs()</code>, <code>public double getUsd()</code>.",
        "<code>Main</code>da 100 USD ni 12800 kursda konvertatsiya qiling va konsolga: \"So'm balansi: \" + w.getUzs() deb print to console."
      ],
      "ru": [
        "<code>Wallet</code>da <code>private double uzs;</code>, <code>private double usd;</code>.",
        "<code>public void convertUsdToUzs(double amountUsd, double rate)</code>.",
        "<code>public double getUzs()</code>, <code>public double getUsd()</code>.",
        "<code>Main</code>da 100 USD ni 12800 kursda konvertatsiya qiling va konsolga: \"So'm balansi: \" + w.getUzs() deb выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nAgar Ali Valiyev kartasini yo'qotib qo'ysa, tizimda darhol muzlatib qo'yish kerak ('isBlocked'). Karta bloklanganida hech qanday pul yechilmaydi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard'da 'private boolean isBlocked = false;' maydonini qo'shing.\n2. 'public void lockCard()', 'public void unlockCard()', 'public boolean isLocked()' metodlari.\n3. 'withdraw' metodida karta bloklangan bo'lsa 'false' qaytarsin ('if (this.isBlocked) return false;').\n4. 'Main'da kartani bloklab, 10,000 yechishga urinib ko'ring va: \"Karta bloklangan: \" + card.isLocked() + \" | Yechish: \" + ok deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'Wallet' klassi UZS va USD hisoblarini alohida saqlaydi va kurs  bo'yicha ayirboshlaydi.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. Walletda private double uzs;, private double usd;.\n2. public void convertUsdToUzs(double amountUsd, double rate).\n3. public double getUzs(), public double getUsd().\n4. Mainda 100 USD ni 12800 kursda konvertatsiya qiling va konsolga: \"So'm balansi: \" + w.getUzs() deb print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'Wallet' klassi UZS va USD hisoblarini alohida saqlaydi va kurs  bo'yicha ayirboshlaydi.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. Walletda private double uzs;, private double usd;.\n2. public void convertUsdToUzs(double amountUsd, double rate).\n3. public double getUzs(), public double getUsd().\n4. Mainda 100 USD ni 12800 kursda konvertatsiya qiling va konsolga: \"So'm balansi: \" + w.getUzs() deb выведите в консоль."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "lockCard",
        "unlockCard",
        "isLocked",
        "withdraw"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "isBlocked",
        "balance"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 6. 💱 Valyuta Hamyoni — So'm va Dollar",
      "Kutilayotgan natija: So'm balansi: 1280000.0"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private String cardHolder;\n    private double balance;\n    private boolean isBlocked = false;\n\n    public BankCard(String cardHolder, double initialBalance) {\n        this.cardHolder = cardHolder;\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (!this.isBlocked && amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public void lockCard() {\n        this.isBlocked = true;\n    }\n\n    public void unlockCard() {\n        this.isBlocked = false;\n    }\n\n    public boolean isLocked() {\n        return this.isBlocked;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"Ali Valiyev\", 50000.0);\n        card.deposit(25000.0);\n        card.lockCard();\n        boolean ok = card.withdraw(10000.0);\n        System.out.println(\"Karta bloklangan: \" + card.isLocked() + \" | Yechish: \" + ok);\n    }\n}",
    "expectedOutput": "Karta bloklangan: true | Yechish: false",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class Wallet {\n    private double uzs;\n    private double usd;\n\n    public Wallet(double uzs, double usd) {\n        this.uzs = uzs;\n        this.usd = usd;\n    }\n\n    public void convertUsdToUzs(double amountUsd, double rate) {\n        if (amountUsd > 0 && amountUsd <= this.usd) {\n            this.usd -= amountUsd;\n            this.uzs += amountUsd * rate;\n        }\n    }\n\n    public double getUzs() {\n        return this.uzs;\n    }\n\n    public double getUsd() {\n        return this.usd;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Wallet w = new Wallet(0.0, 100.0);\n        w.convertUsdToUzs(100.0, 12800.0);\n        System.out.println(\"So'm balansi: \" + w.getUzs());\n    }\n}",
      "breakdown": [
        "<code>Wallet, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>convertUsdToUzs, getUzs</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: So'm balansi: 1280000.0"
      ],
      "breakdownRu": [
        "<code>Wallet, Main</code>: Классы архитектуры задачи.",
        "<code>convertUsdToUzs, getUzs</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: So'm balansi: 1280000.0"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 7,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "7. 🎁 Avtomatik Keshbek Tizimi (Cashback)",
      "en": "7. Cashback Wallet",
      "ru": "7. Кэшбэк кошелек"
    },
    "story": {
      "uz": "Mijoz Ali Valiyev har safar to'lov qilganda kartasiga 2% keshbek avtomatik yig'ilib boradi ('private double cashback = 0.0;').",
      "en": "In Uzum & Payme FinTech ecosystem: Har bir xariddan 2% keshbek 'private double cashback;' hamyoniga avtomatik yig'iladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Har bir xariddan 2% keshbek 'private double cashback;' hamyoniga avtomatik yig'iladi."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>private double cashback = 0.0;</code> maydoni.",
        "<code>public void earnCashback(double spendAmount)</code>: agar spendAmount > 0 bo'lsa, 2% keshbek qo'shadi.",
        "<code>public double getCashback()</code>: yig'ilgan keshbekni qaytaradi.",
        "<code>withdraw</code> metodida pul muvaffaqiyatli yechilsa, avtomatik <code>earnCashback(amount)</code> chaqirilsin.",
        "<code>Main</code>da 25,000 yechilgandan keyin qoldiq balans va keshbekni chiqaring."
      ],
      "en": [
        "<code>CashbackWallet</code>da <code>private double cashback = 0.0;</code>.",
        "<code>public void earnCashback(double spendAmount)</code>.",
        "<code>public double getCashback()</code>.",
        "<code>Main</code>da 100,000 so<code>m xariddan keshbek hisoblang: \"Keshbek: 2000.0 so</code>m\"."
      ],
      "ru": [
        "<code>CashbackWallet</code>da <code>private double cashback = 0.0;</code>.",
        "<code>public void earnCashback(double spendAmount)</code>.",
        "<code>public double getCashback()</code>.",
        "<code>Main</code>da 100,000 so<code>m xariddan keshbek hisoblang: \"Keshbek: 2000.0 so</code>m\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nMijoz Ali Valiyev har safar to'lov qilganda kartasiga 2% keshbek avtomatik yig'ilib boradi ('private double cashback = 0.0;').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard'da 'private double cashback = 0.0;' maydoni.\n2. 'public void earnCashback(double spendAmount)': agar spendAmount > 0 bo'lsa, 2% keshbek qo'shadi.\n3. 'public double getCashback()': yig'ilgan keshbekni qaytaradi.\n4. 'withdraw' metodida pul muvaffaqiyatli yechilsa, avtomatik 'earnCashback(amount)' chaqirilsin.\n5. 'Main'da 25,000 yechilgandan keyin qoldiq balans va keshbekni chiqaring: \"Qoldiq: \" + card.getBalance() + \" | Keshbek: \" + card.getCashback().",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Har bir xariddan 2% keshbek 'private double cashback;' hamyoniga avtomatik yig'iladi.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. CashbackWalletda private double cashback = 0.0;.\n2. public void earnCashback(double spendAmount).\n3. public double getCashback().\n4. Mainda 100,000 som xariddan keshbek hisoblang: \"Keshbek: 2000.0 som\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Har bir xariddan 2% keshbek 'private double cashback;' hamyoniga avtomatik yig'iladi.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. CashbackWalletda private double cashback = 0.0;.\n2. public void earnCashback(double spendAmount).\n3. public double getCashback().\n4. Mainda 100,000 som xariddan keshbek hisoblang: \"Keshbek: 2000.0 som\"."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "earnCashback",
        "getCashback",
        "getBalance"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "cashback",
        "balance"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 7. 🎁 Avtomatik Keshbek Hamyoni",
      "Kutilayotgan natija: Keshbek: 2000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private String cardHolder;\n    private double balance;\n    private double cashback = 0.0;\n\n    public BankCard(String cardHolder, double initialBalance) {\n        this.cardHolder = cardHolder;\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) this.balance += amount;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            earnCashback(amount);\n            return true;\n        }\n        return false;\n    }\n\n    public void earnCashback(double spendAmount) {\n        if (spendAmount > 0) {\n            this.cashback += spendAmount * 0.02;\n        }\n    }\n\n    public double getCashback() {\n        return this.cashback;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"Ali Valiyev\", 50000.0);\n        card.deposit(25000.0);\n        card.withdraw(25000.0);\n        System.out.println(\"Qoldiq: \" + card.getBalance() + \" | Keshbek: \" + card.getCashback());\n    }\n}",
    "expectedOutput": "Qoldiq: 50000.0 | Keshbek: 500.0",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class CashbackWallet {\n    private double cashback = 0.0;\n\n    public void earnCashback(double spendAmount) {\n        if (spendAmount > 0) {\n            this.cashback += spendAmount * 0.02;\n        }\n    }\n\n    public double getCashback() {\n        return this.cashback;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CashbackWallet cw = new CashbackWallet();\n        cw.earnCashback(100000.0);\n        System.out.println(\"Keshbek: \" + cw.getCashback() + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>CashbackWallet, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>earnCashback, getCashback</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Keshbek: 2000.0 so'm"
      ],
      "breakdownRu": [
        "<code>CashbackWallet, Main</code>: Классы архитектуры задачи.",
        "<code>earnCashback, getCashback</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Keshbek: 2000.0 so'm"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 8,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "8. 📱 SMS Xabarnoma Telefon Raqami (+998)",
      "en": "8. Card Lock",
      "ru": "8. Блокировка карты"
    },
    "story": {
      "uz": "To'lovlar haqida SMS xabar borishi uchun kartaga telefon raqami 'private String phoneNumber;' biriktiriladi. Raqam faqat '+998' bilan boshlanishi va 13 ta belgidan iborat bo'lishi shart.",
      "en": "In Uzum & Payme FinTech ecosystem: Agar karta yo'qolsa, 'isBlocked' true qilinadi va hech qanday to'lov o'tmaydi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Agar karta yo'qolsa, 'isBlocked' true qilinadi va hech qanday to'lov o'tmaydi."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>private String phoneNumber;</code> maydoni.",
        "<code>public boolean setPhoneNumber(String phone)</code>: faqat '+998' bilan boshlansa va uzunligi 13 bo'lsa qabul qilib true qaytarsin.",
        "<code>public String getPhoneNumber()</code>: telefon raqamini qaytarsin.",
        "<code>Main</code>da Ali Valiyevning kartasiga '+998901234567' raqamini biriktiring va chiqaring."
      ],
      "en": [
        "<code>LockableCard</code>da <code>private boolean isBlocked = false;</code>.",
        "<code>public void lockCard()</code>, <code>public void unlockCard()</code>.",
        "<code>public boolean isLocked()</code>.",
        "<code>Main</code>da kartani qulflang va holatini print to console: \"Karta bloklangan: true\"."
      ],
      "ru": [
        "<code>LockableCard</code>da <code>private boolean isBlocked = false;</code>.",
        "<code>public void lockCard()</code>, <code>public void unlockCard()</code>.",
        "<code>public boolean isLocked()</code>.",
        "<code>Main</code>da kartani qulflang va holatini выведите в консоль: \"Karta bloklangan: true\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nTo'lovlar haqida SMS xabar borishi uchun kartaga telefon raqami 'private String phoneNumber;' biriktiriladi. Raqam faqat '+998' bilan boshlanishi va 13 ta belgidan iborat bo'lishi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard'da 'private String phoneNumber;' maydoni.\n2. 'public boolean setPhoneNumber(String phone)': faqat '+998' bilan boshlansa va uzunligi 13 bo'lsa qabul qilib true qaytarsin.\n3. 'public String getPhoneNumber()': telefon raqamini qaytarsin.\n4. 'Main'da Ali Valiyevning kartasiga '+998901234567' raqamini biriktiring va konsolga: \"Mijoz: \" + card.getCardHolder() + \" | SMS: \" + card.getPhoneNumber() deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Agar karta yo'qolsa, 'isBlocked' true qilinadi va hech qanday to'lov o'tmaydi.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. LockableCardda private boolean isBlocked = false;.\n2. public void lockCard(), public void unlockCard().\n3. public boolean isLocked().\n4. Mainda kartani qulflang va holatini print to console: \"Karta bloklangan: true\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Agar karta yo'qolsa, 'isBlocked' true qilinadi va hech qanday to'lov o'tmaydi.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. LockableCardda private boolean isBlocked = false;.\n2. public void lockCard(), public void unlockCard().\n3. public boolean isLocked().\n4. Mainda kartani qulflang va holatini выведите в консоль: \"Karta bloklangan: true\"."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "setPhoneNumber",
        "getPhoneNumber",
        "getCardHolder"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "phoneNumber",
        "cardHolder"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 8. 🚫 Kartani Muzlatish va Qulflash",
      "Kutilayotgan natija: Karta bloklangan: true"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private String cardHolder;\n    private double balance;\n    private String phoneNumber;\n\n    public BankCard(String cardHolder, double initialBalance) {\n        this.cardHolder = cardHolder;\n        this.balance = initialBalance;\n    }\n\n    public boolean setPhoneNumber(String phone) {\n        if (phone != null && phone.startsWith(\"+998\") && phone.length() == 13) {\n            this.phoneNumber = phone;\n            return true;\n        }\n        return false;\n    }\n\n    public String getPhoneNumber() {\n        return this.phoneNumber;\n    }\n\n    public String getCardHolder() {\n        return this.cardHolder;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"Ali Valiyev\", 50000.0);\n        card.setPhoneNumber(\"+998901234567\");\n        System.out.println(\"Mijoz: \" + card.getCardHolder() + \" | SMS: \" + card.getPhoneNumber());\n    }\n}",
    "expectedOutput": "Mijoz: Ali Valiyev | SMS: +998901234567",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class LockableCard {\n    private boolean isBlocked = false;\n\n    public void lockCard() {\n        this.isBlocked = true;\n    }\n\n    public void unlockCard() {\n        this.isBlocked = false;\n    }\n\n    public boolean isLocked() {\n        return this.isBlocked;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        LockableCard card = new LockableCard();\n        card.lockCard();\n        System.out.println(\"Karta bloklangan: \" + card.isLocked());\n    }\n}",
      "breakdown": [
        "<code>LockableCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>lockCard, unlockCard, isLocked</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Karta bloklangan: true"
      ],
      "breakdownRu": [
        "<code>LockableCard, Main</code>: Классы архитектуры задачи.",
        "<code>lockCard, unlockCard, isLocked</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Karta bloklangan: true"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 9,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "9. 📊 Tranzaksiyalar Soni va Audit Jurnali",
      "en": "9. Phone Validation",
      "ru": "9. Валидация телефона"
    },
    "story": {
      "uz": "Bank audit xavfsizligi talabi: kartadagi har bir amaliyot hisoblab borilishi shart ('private int transactionCount = 0;').",
      "en": "In Uzum & Payme FinTech ecosystem: Telefon raqami faqat '+998' bilan boshlanganda qabul qilinadi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Telefon raqami faqat '+998' bilan boshlanganda qabul qilinadi."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>private int transactionCount = 0;</code> maydoni.",
        "Har bir muvaffaqiyatli <code>deposit</code> yoki <code>withdraw</code> da <code>this.transactionCount++</code> qilinsin.",
        "<code>public int getTransactionCount()</code>: amallar sonini qaytarsin.",
        "<code>Main</code>da 1 ta deposit va 1 ta withdraw amali bajarilgandan keyin jami amallar soni va qoldiqni chiqaring."
      ],
      "en": [
        "<code>SmsProfile</code>da <code>private String phoneNumber;</code>.",
        "<code>public boolean setPhoneNumber(String phone)</code>.",
        "<code>public String getPhoneNumber()</code>.",
        "<code>Main</code>da \"+998901234567\" o'rnating va konsolga: \"SMS raqami: \" + p.getPhoneNumber() deb print to console."
      ],
      "ru": [
        "<code>SmsProfile</code>da <code>private String phoneNumber;</code>.",
        "<code>public boolean setPhoneNumber(String phone)</code>.",
        "<code>public String getPhoneNumber()</code>.",
        "<code>Main</code>da \"+998901234567\" o'rnating va konsolga: \"SMS raqami: \" + p.getPhoneNumber() deb выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nBank audit xavfsizligi talabi: kartadagi har bir amaliyot hisoblab borilishi shart ('private int transactionCount = 0;').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard'da 'private int transactionCount = 0;' maydoni.\n2. Har bir muvaffaqiyatli 'deposit' yoki 'withdraw' da 'this.transactionCount++' qilinsin.\n3. 'public int getTransactionCount()': amallar sonini qaytarsin.\n4. 'Main'da 1 ta deposit va 1 ta withdraw amali bajarilgandan keyin jami amallar soni va qoldiqni chiqaring: \"Amallar: \" + card.getTransactionCount() + \" | Qoldiq: \" + card.getBalance().",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Telefon raqami faqat '+998' bilan boshlanganda qabul qilinadi.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. SmsProfileda private String phoneNumber;.\n2. public boolean setPhoneNumber(String phone).\n3. public String getPhoneNumber().\n4. Mainda \"+998901234567\" o'rnating va konsolga: \"SMS raqami: \" + p.getPhoneNumber() deb print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Telefon raqami faqat '+998' bilan boshlanganda qabul qilinadi.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. SmsProfileda private String phoneNumber;.\n2. public boolean setPhoneNumber(String phone).\n3. public String getPhoneNumber().\n4. Mainda \"+998901234567\" o'rnating va konsolga: \"SMS raqami: \" + p.getPhoneNumber() deb выведите в консоль."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "deposit",
        "withdraw",
        "getTransactionCount",
        "getBalance"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "transactionCount",
        "balance"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 9. 📱 Telefon Raqami Validatsiyasi",
      "Kutilayotgan natija: SMS raqami: +998901234567"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private String cardHolder;\n    private double balance;\n    private int transactionCount = 0;\n\n    public BankCard(String cardHolder, double initialBalance) {\n        this.cardHolder = cardHolder;\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n            this.transactionCount++;\n        }\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            this.transactionCount++;\n            return true;\n        }\n        return false;\n    }\n\n    public int getTransactionCount() {\n        return this.transactionCount;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"Ali Valiyev\", 50000.0);\n        card.deposit(25000.0);\n        card.withdraw(25000.0);\n        System.out.println(\"Amallar: \" + card.getTransactionCount() + \" | Qoldiq: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Amallar: 2 | Qoldiq: 50000.0",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class SmsProfile {\n    private String phoneNumber;\n\n    public boolean setPhoneNumber(String phone) {\n        if (phone != null && phone.startsWith(\"+998\")) {\n            this.phoneNumber = phone;\n            return true;\n        }\n        return false;\n    }\n\n    public String getPhoneNumber() {\n        return this.phoneNumber;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmsProfile p = new SmsProfile();\n        p.setPhoneNumber(\"+998901234567\");\n        System.out.println(\"SMS raqami: \" + p.getPhoneNumber());\n    }\n}",
      "breakdown": [
        "<code>SmsProfile, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>setPhoneNumber, getPhoneNumber</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: SMS raqami: +998901234567"
      ],
      "breakdownRu": [
        "<code>SmsProfile, Main</code>: Классы архитектуры задачи.",
        "<code>setPhoneNumber, getPhoneNumber</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: SMS raqami: +998901234567"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 10,
    "tier": 1,
    "tierName": "1-Ustun: INKAPSULYATSIYA (Xavfsizlik)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "10. 🏦 To'liq Xavfsiz Bank Hisobi (Master Pay with PIN)",
      "en": "10. Master Secure Account",
      "ru": "10. Мастер безопасный счет"
    },
    "story": {
      "uz": "1-Ustun (Inkapsulyatsiya) ning barcha talablari birlashadi: PIN tekshiruvi, balans, keshbek va tranzaksiya hisoboti bitta to'lov metodida jamlanadi!",
      "en": "In Uzum & Payme FinTech ecosystem: Balans, egasi va PIN kod birlashgan mukammal himoyalangan hisob.",
      "ru": "В экосистеме Uzum & Payme FinTech: Balans, egasi va PIN kod birlashgan mukammal himoyalangan hisob."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>public BankCard(String cardHolder, double balance, int pin)</code> konstruktori.",
        "<code>public boolean pay(double amount, int enteredPin)</code>: agar enteredPin to'g'ri va balance yetarli bo'lsa, balansdan ayirsin, 2% keshbek qo'shsin, transactionCount ni oshirsin va true qaytarsin.",
        "<code>Main</code>da Ali Valiyevning 75,000 lik kartasidan 1234 PIN orqali 25,000 to'lov qiling va natijani chiqaring."
      ],
      "en": [
        "<code>MasterAccount</code>da <code>private String owner;</code>, <code>private double balance;</code>, <code>private int pin;</code>.",
        "Konstruktor <code>public MasterAccount(String owner, double balance, int pin)</code>.",
        "<code>public boolean pay(double amount, int enteredPin)</code>.",
        "<code>public double getBalance()</code>.",
        "<code>Main</code>da 100,000 balansli hisobdan 40,000 to'lang va konsolga: \"Muvaffaqiyatli: true | Qoldiq: \" + acc.getBalance() deb print to console."
      ],
      "ru": [
        "<code>MasterAccount</code>da <code>private String owner;</code>, <code>private double balance;</code>, <code>private int pin;</code>.",
        "Konstruktor <code>public MasterAccount(String owner, double balance, int pin)</code>.",
        "<code>public boolean pay(double amount, int enteredPin)</code>.",
        "<code>public double getBalance()</code>.",
        "<code>Main</code>da 100,000 balansli hisobdan 40,000 to'lang va konsolga: \"Muvaffaqiyatli: true | Qoldiq: \" + acc.getBalance() deb выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n1-Ustun (Inkapsulyatsiya) ning barcha talablari birlashadi: PIN tekshiruvi, balans, keshbek va tranzaksiya hisoboti bitta to'lov metodida jamlanadi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard'da 'public BankCard(String cardHolder, double balance, int pin)' konstruktori.\n2. 'public boolean pay(double amount, int enteredPin)': agar enteredPin to'g'ri va balance yetarli bo'lsa, balansdan ayirsin, 2% keshbek qo'shsin, transactionCount ni oshirsin va true qaytarsin.\n3. 'Main'da Ali Valiyevning 75,000 lik kartasidan 1234 PIN orqali 25,000 to'lov qiling va konsolga: \"Muvaffaqiyatli: \" + ok + \" | Qoldiq: \" + card.getBalance() deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Balans, egasi va PIN kod birlashgan mukammal himoyalangan hisob.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. MasterAccountda private String owner;, private double balance;, private int pin;.\n2. Konstruktor public MasterAccount(String owner, double balance, int pin).\n3. public boolean pay(double amount, int enteredPin).\n4. public double getBalance().\n5. Mainda 100,000 balansli hisobdan 40,000 to'lang va konsolga: \"Muvaffaqiyatli: true | Qoldiq: \" + acc.getBalance() deb print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Balans, egasi va PIN kod birlashgan mukammal himoyalangan hisob.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. MasterAccountda private String owner;, private double balance;, private int pin;.\n2. Konstruktor public MasterAccount(String owner, double balance, int pin).\n3. public boolean pay(double amount, int enteredPin).\n4. public double getBalance().\n5. Mainda 100,000 balansli hisobdan 40,000 to'lang va konsolga: \"Muvaffaqiyatli: true | Qoldiq: \" + acc.getBalance() deb выведите в консоль."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "methods": [
        "pay",
        "getBalance",
        "getCardHolder"
      ],
      "constructors": [
        "BankCard"
      ],
      "fields": [
        "cardHolder",
        "balance",
        "pin"
      ],
      "keywords": []
    },
    "sampleData": [
      "Amal: 10. 🏦 To'liq Xavfsiz Bank Hisobi (Master)",
      "Kutilayotgan natija: Muvaffaqiyatli: true | Qoldiq: 60000.0"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    private String cardHolder;\n    private double balance;\n    private int pin;\n    private double cashback = 0.0;\n    private int transactionCount = 0;\n\n    public BankCard(String cardHolder, double balance, int pin) {\n        this.cardHolder = cardHolder;\n        this.balance = balance;\n        this.pin = pin;\n    }\n\n    public boolean pay(double amount, int enteredPin) {\n        if (this.pin == enteredPin && amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            this.cashback += amount * 0.02;\n            this.transactionCount++;\n            return true;\n        }\n        return false;\n    }\n\n    public String getCardHolder() {\n        return this.cardHolder;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"Ali Valiyev\", 75000.0, 1234);\n        boolean ok = card.pay(25000.0, 1234);\n        System.out.println(\"Muvaffaqiyatli: \" + ok + \" | Qoldiq: \" + card.getBalance());\n    }\n}",
    "expectedOutput": "Muvaffaqiyatli: true | Qoldiq: 50000.0",
    "detailedSolution": {
      "theory": "Inkapsulyatsiya (Encapsulation) — obyektning ichki maydonlarini (masalan, balans, PIN kod, limitlar) to'g'ridan-to'g'ri tashqi aralashuvdan private modifikatori orqali himoyalash va ularga faqat xavfsiz metodlar (getters/setters/operations) orqali boshqariladigan kirishni ta'minlash tamoyili.",
      "theoryEn": "Encapsulation protects internal object state (balance, PIN, limits) using private access modifiers, exposing controlled operations via public methods with data validation.",
      "theoryRu": "Инкапсуляция защищает внутренние поля объекта от прямого доступа с помощью модификатора private и обеспечивает контролируемый доступ через методы с валидацией.",
      "cleanCode": "class MasterAccount {\n    private String owner;\n    private double balance;\n    private int pin;\n\n    public MasterAccount(String owner, double balance, int pin) {\n        this.owner = owner;\n        this.balance = balance;\n        this.pin = pin;\n    }\n\n    public boolean pay(double amount, int enteredPin) {\n        if (this.pin == enteredPin && amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MasterAccount acc = new MasterAccount(\"Sardor\", 100000.0, 7777);\n        boolean ok = acc.pay(40000.0, 7777);\n        System.out.println(\"Muvaffaqiyatli: \" + ok + \" | Qoldiq: \" + acc.getBalance());\n    }\n}",
      "breakdown": [
        "<code>MasterAccount, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay, getBalance</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Muvaffaqiyatli: true | Qoldiq: 60000.0"
      ],
      "breakdownRu": [
        "<code>MasterAccount, Main</code>: Классы архитектуры задачи.",
        "<code>pay, getBalance</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Muvaffaqiyatli: true | Qoldiq: 60000.0"
      ],
      "pitfalls": "Maydonlarni public qoldirish yoki manfiy qiymatlarni tekshirmasdan setter yozish xavfsizlik qoidalarini buzadi.",
      "cw2Tip": "Westminster CW2 (50%) Console Order tizimida har bir tovar, hisob va xarid maydoni qat'iy inkapsulyatsiya qilingan bo'lishi shart."
    }
  },
  {
    "id": 11,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "11. 🥇 GoldCard — Baza Kartasidan Keshbekli Kartaga",
      "en": "11. GoldCard Inheritance",
      "ru": "11. Наследование GoldCard"
    },
    "story": {
      "uz": "'GoldCard' baza 'BankCard' klassidan meros oladi va o'ziga 'cashbackRate'  qo'shadi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'GoldCard' baza 'BankCard' klassidan meros oladi va o'ziga 'cashbackRate'  qo'shadi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'GoldCard' baza 'BankCard' klassidan meros oladi va o'ziga 'cashbackRate'  qo'shadi."
    },
    "steps": {
      "uz": [
        "<code>BankCard</code>da <code>protected double balance;</code>.",
        "<code>GoldCard extends BankCard</code> qilib <code>public double getCashback(double spend)</code> metodida <code>spend * 0.03</code> qaytaring.",
        "<code>Main</code>da 100,000 so<code>mlik GoldCard ochib, keshbekni chiqaring: \"Gold Keshbek: 3000.0 so</code>m\"."
      ],
      "en": [
        "<code>BankCard</code>da <code>protected double balance;</code>.",
        "<code>GoldCard extends BankCard</code> qilib <code>public double getCashback(double spend)</code> metodida <code>spend * 0.03</code> qaytaring.",
        "<code>Main</code>da 100,000 so<code>mlik GoldCard ochib, keshbekni print to console: \"Gold Keshbek: 3000.0 so</code>m\"."
      ],
      "ru": [
        "<code>BankCard</code>da <code>protected double balance;</code>.",
        "<code>GoldCard extends BankCard</code> qilib <code>public double getCashback(double spend)</code> metodida <code>spend * 0.03</code> qaytaring.",
        "<code>Main</code>da 100,000 so<code>mlik GoldCard ochib, keshbekni выведите в консоль: \"Gold Keshbek: 3000.0 so</code>m\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'GoldCard' baza 'BankCard' klassidan meros oladi va o'ziga 'cashbackRate'  qo'shadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. BankCardda protected double balance;.\n2. GoldCard extends BankCard qilib public double getCashback(double spend) metodida spend * 0.03 qaytaring.\n3. Mainda 100,000 somlik GoldCard ochib, keshbekni chiqaring: \"Gold Keshbek: 3000.0 som\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'GoldCard' baza 'BankCard' klassidan meros oladi va o'ziga 'cashbackRate'  qo'shadi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. BankCardda protected double balance;.\n2. GoldCard extends BankCard qilib public double getCashback(double spend) metodida spend * 0.03 qaytaring.\n3. Mainda 100,000 somlik GoldCard ochib, keshbekni print to console: \"Gold Keshbek: 3000.0 som\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'GoldCard' baza 'BankCard' klassidan meros oladi va o'ziga 'cashbackRate'  qo'shadi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. BankCardda protected double balance;.\n2. GoldCard extends BankCard qilib public double getCashback(double spend) metodida spend * 0.03 qaytaring.\n3. Mainda 100,000 somlik GoldCard ochib, keshbekni выведите в консоль: \"Gold Keshbek: 3000.0 som\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 11. 🥇 GoldCard — Baza Kartasidan Keshbekli Kartaga",
      "Kutilayotgan natija: Gold Keshbek: 3000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass GoldCard extends BankCard {\n    public GoldCard(double balance) { super(balance); }\n    public double getCashback(double spend) {\n        return spend * 0.03;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GoldCard gc = new GoldCard(100000.0);\n        System.out.println(\"Gold Keshbek: \" + gc.getCashback(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Gold Keshbek: 3000.0 so'm",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass GoldCard extends BankCard {\n    public GoldCard(double balance) { super(balance); }\n    public double getCashback(double spend) {\n        return spend * 0.03;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        GoldCard gc = new GoldCard(100000.0);\n        System.out.println(\"Gold Keshbek: \" + gc.getCashback(100000.0) + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>BankCard, GoldCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getCashback</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Gold Keshbek: 3000.0 so'm"
      ],
      "breakdownRu": [
        "<code>BankCard, GoldCard, Main</code>: Классы архитектуры задачи.",
        "<code>getCashback</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Gold Keshbek: 3000.0 so'm"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 12,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "12. 💎 PlatinumCard — VIP Imtiyozlar Qo'shish",
      "en": "12. PlatinumCard",
      "ru": "12. Platinum карта"
    },
    "story": {
      "uz": "'PlatinumCard' 'BankCard'dan meros olib, bepul aeroport Lounge xizmati imtiyozini qo'shadi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'PlatinumCard' 'BankCard'dan meros olib, bepul aeroport Lounge xizmati imtiyozini qo'shadi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'PlatinumCard' 'BankCard'dan meros olib, bepul aeroport Lounge xizmati imtiyozini qo'shadi."
    },
    "steps": {
      "uz": [
        "<code>PlatinumCard extends BankCard</code>.",
        "<code>public boolean hasLoungeAccess()</code> har doim true qaytarsin.",
        "<code>Main</code>da tekshiring: \"Lounge imtiyozi: true\"."
      ],
      "en": [
        "<code>PlatinumCard extends BankCard</code>.",
        "<code>public boolean hasLoungeAccess()</code> har doim true qaytarsin.",
        "<code>Main</code>da tekshiring: \"Lounge imtiyozi: true\"."
      ],
      "ru": [
        "<code>PlatinumCard extends BankCard</code>.",
        "<code>public boolean hasLoungeAccess()</code> har doim true qaytarsin.",
        "<code>Main</code>da tekshiring: \"Lounge imtiyozi: true\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'PlatinumCard' 'BankCard'dan meros olib, bepul aeroport Lounge xizmati imtiyozini qo'shadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. PlatinumCard extends BankCard.\n2. public boolean hasLoungeAccess() har doim true qaytarsin.\n3. Mainda tekshiring: \"Lounge imtiyozi: true\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'PlatinumCard' 'BankCard'dan meros olib, bepul aeroport Lounge xizmati imtiyozini qo'shadi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. PlatinumCard extends BankCard.\n2. public boolean hasLoungeAccess() har doim true qaytarsin.\n3. Mainda tekshiring: \"Lounge imtiyozi: true\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'PlatinumCard' 'BankCard'dan meros olib, bepul aeroport Lounge xizmati imtiyozini qo'shadi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. PlatinumCard extends BankCard.\n2. public boolean hasLoungeAccess() har doim true qaytarsin.\n3. Mainda tekshiring: \"Lounge imtiyozi: true\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 12. 💎 PlatinumCard — VIP Imtiyozlar Qo'shish",
      "Kutilayotgan natija: Lounge imtiyozi: true"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass PlatinumCard extends BankCard {\n    public PlatinumCard(double balance) { super(balance); }\n    public boolean hasLoungeAccess() {\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PlatinumCard pc = new PlatinumCard(500000.0);\n        System.out.println(\"Lounge imtiyozi: \" + pc.hasLoungeAccess());\n    }\n}",
    "expectedOutput": "Lounge imtiyozi: true",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass PlatinumCard extends BankCard {\n    public PlatinumCard(double balance) { super(balance); }\n    public boolean hasLoungeAccess() {\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PlatinumCard pc = new PlatinumCard(500000.0);\n        System.out.println(\"Lounge imtiyozi: \" + pc.hasLoungeAccess());\n    }\n}",
      "breakdown": [
        "<code>BankCard, PlatinumCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>hasLoungeAccess</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Lounge imtiyozi: true"
      ],
      "breakdownRu": [
        "<code>BankCard, PlatinumCard, Main</code>: Классы архитектуры задачи.",
        "<code>hasLoungeAccess</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Lounge imtiyozi: true"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 13,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "13. 🌐 VirtualCard — 1 Oylik Onlayn Karta",
      "en": "13. VirtualCard",
      "ru": "13. Виртуальная карта"
    },
    "story": {
      "uz": "Internet xaridlari uchun 'VirtualCard' muddati 'validMonths' maydoni bilan 'BankCard'dan voris bo'ladi.",
      "en": "In Uzum & Payme FinTech ecosystem: Internet xaridlari uchun 'VirtualCard' muddati 'validMonths' maydoni bilan 'BankCard'dan voris bo'ladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Internet xaridlari uchun 'VirtualCard' muddati 'validMonths' maydoni bilan 'BankCard'dan voris bo'ladi."
    },
    "steps": {
      "uz": [
        "<code>VirtualCard</code>da <code>private int validMonths = 1;</code>.",
        "<code>public int getValidMonths()</code>.",
        "<code>Main</code>da chop eting: \"Amal qilish muddati: 1 oy\"."
      ],
      "en": [
        "<code>VirtualCard</code>da <code>private int validMonths = 1;</code>.",
        "<code>public int getValidMonths()</code>.",
        "<code>Main</code>da chop eting: \"Amal qilish muddati: 1 oy\"."
      ],
      "ru": [
        "<code>VirtualCard</code>da <code>private int validMonths = 1;</code>.",
        "<code>public int getValidMonths()</code>.",
        "<code>Main</code>da chop eting: \"Amal qilish muddati: 1 oy\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nInternet xaridlari uchun 'VirtualCard' muddati 'validMonths' maydoni bilan 'BankCard'dan voris bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. VirtualCardda private int validMonths = 1;.\n2. public int getValidMonths().\n3. Mainda chop eting: \"Amal qilish muddati: 1 oy\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Internet xaridlari uchun 'VirtualCard' muddati 'validMonths' maydoni bilan 'BankCard'dan voris bo'ladi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. VirtualCardda private int validMonths = 1;.\n2. public int getValidMonths().\n3. Mainda chop eting: \"Amal qilish muddati: 1 oy\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Internet xaridlari uchun 'VirtualCard' muddati 'validMonths' maydoni bilan 'BankCard'dan voris bo'ladi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. VirtualCardda private int validMonths = 1;.\n2. public int getValidMonths().\n3. Mainda chop eting: \"Amal qilish muddati: 1 oy\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 13. 🌐 VirtualCard — 1 Oylik Onlayn Karta",
      "Kutilayotgan natija: Amal qilish muddati: 1 oy"
    ],
    "starterCode": "",
    "solution": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass VirtualCard extends BankCard {\n    private int validMonths = 1;\n    public VirtualCard(double balance) { super(balance); }\n    public int getValidMonths() { return this.validMonths; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VirtualCard vc = new VirtualCard(50000.0);\n        System.out.println(\"Amal qilish muddati: \" + vc.getValidMonths() + \" oy\");\n    }\n}",
    "expectedOutput": "Amal qilish muddati: 1 oy",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class BankCard {\n    protected double balance;\n    public BankCard(double balance) { this.balance = balance; }\n}\n\nclass VirtualCard extends BankCard {\n    private int validMonths = 1;\n    public VirtualCard(double balance) { super(balance); }\n    public int getValidMonths() { return this.validMonths; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VirtualCard vc = new VirtualCard(50000.0);\n        System.out.println(\"Amal qilish muddati: \" + vc.getValidMonths() + \" oy\");\n    }\n}",
      "breakdown": [
        "<code>BankCard, VirtualCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getValidMonths</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Amal qilish muddati: 1 oy"
      ],
      "breakdownRu": [
        "<code>BankCard, VirtualCard, Main</code>: Классы архитектуры задачи.",
        "<code>getValidMonths</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Amal qilish muddati: 1 oy"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 14,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "14. 🛵 Yetkazib Beruvchi (Courier) Iyerarxiyasi",
      "en": "14. Courier Hierarchy",
      "ru": "14. Иерархия курьеров"
    },
    "story": {
      "uz": "'Courier' ota klassi 'name'ga ega, 'MotoCourier' voris klassi esa 'motoNumber' maydonini qo'shadi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'Courier' ota klassi 'name'ga ega, 'MotoCourier' voris klassi esa 'motoNumber' maydonini qo'shadi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'Courier' ota klassi 'name'ga ega, 'MotoCourier' voris klassi esa 'motoNumber' maydonini qo'shadi."
    },
    "steps": {
      "uz": [
        "<code>Courier</code>da <code>protected String name;</code>.",
        "<code>MotoCourier extends Courier</code>da <code>private String motoNumber;</code>.",
        "<code>public String getMotoNumber()</code>.",
        "<code>Main</code>da \"01 M777AA\" raqamli motokuryerni chiqaring."
      ],
      "en": [
        "<code>Courier</code>da <code>protected String name;</code>.",
        "<code>MotoCourier extends Courier</code>da <code>private String motoNumber;</code>.",
        "<code>public String getMotoNumber()</code>.",
        "<code>Main</code>da \"01 M777AA\" raqamli motokuryerni print to console."
      ],
      "ru": [
        "<code>Courier</code>da <code>protected String name;</code>.",
        "<code>MotoCourier extends Courier</code>da <code>private String motoNumber;</code>.",
        "<code>public String getMotoNumber()</code>.",
        "<code>Main</code>da \"01 M777AA\" raqamli motokuryerni выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'Courier' ota klassi 'name'ga ega, 'MotoCourier' voris klassi esa 'motoNumber' maydonini qo'shadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Courierda protected String name;.\n2. MotoCourier extends Courierda private String motoNumber;.\n3. public String getMotoNumber().\n4. Mainda \"01 M777AA\" raqamli motokuryerni chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'Courier' ota klassi 'name'ga ega, 'MotoCourier' voris klassi esa 'motoNumber' maydonini qo'shadi.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. Courierda protected String name;.\n2. MotoCourier extends Courierda private String motoNumber;.\n3. public String getMotoNumber().\n4. Mainda \"01 M777AA\" raqamli motokuryerni print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'Courier' ota klassi 'name'ga ega, 'MotoCourier' voris klassi esa 'motoNumber' maydonini qo'shadi.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. Courierda protected String name;.\n2. MotoCourier extends Courierda private String motoNumber;.\n3. public String getMotoNumber().\n4. Mainda \"01 M777AA\" raqamli motokuryerni выведите в консоль."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 14. 🛵 Yetkazib Beruvchi (Courier) Iyerarxiyasi",
      "Kutilayotgan natija: Motokuryer raqami: 01 M777AA"
    ],
    "starterCode": "",
    "solution": "class Courier {\n    protected String name;\n    public Courier(String name) { this.name = name; }\n}\n\nclass MotoCourier extends Courier {\n    private String motoNumber;\n    public MotoCourier(String name, String motoNumber) {\n        super(name);\n        this.motoNumber = motoNumber;\n    }\n    public String getMotoNumber() { return this.motoNumber; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MotoCourier mc = new MotoCourier(\"Jasur\", \"01 M777AA\");\n        System.out.println(\"Motokuryer raqami: \" + mc.getMotoNumber());\n    }\n}",
    "expectedOutput": "Motokuryer raqami: 01 M777AA",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class Courier {\n    protected String name;\n    public Courier(String name) { this.name = name; }\n}\n\nclass MotoCourier extends Courier {\n    private String motoNumber;\n    public MotoCourier(String name, String motoNumber) {\n        super(name);\n        this.motoNumber = motoNumber;\n    }\n    public String getMotoNumber() { return this.motoNumber; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        MotoCourier mc = new MotoCourier(\"Jasur\", \"01 M777AA\");\n        System.out.println(\"Motokuryer raqami: \" + mc.getMotoNumber());\n    }\n}",
      "breakdown": [
        "<code>Courier, MotoCourier, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getMotoNumber</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Motokuryer raqami: 01 M777AA"
      ],
      "breakdownRu": [
        "<code>Courier, MotoCourier, Main</code>: Классы архитектуры задачи.",
        "<code>getMotoNumber</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Motokuryer raqami: 01 M777AA"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 15,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "15. 👑 VIP Mijoz Imtiyozlari",
      "en": "15. VIP Customer",
      "ru": "15. VIP Клиент"
    },
    "story": {
      "uz": "'Customer' oddiy mijoz, 'VIPCustomer' esa 10% chegirmaga ega bo'ladi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'Customer' oddiy mijoz, 'VIPCustomer' esa 10% chegirmaga ega bo'ladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'Customer' oddiy mijoz, 'VIPCustomer' esa 10% chegirmaga ega bo'ladi."
    },
    "steps": {
      "uz": [
        "<code>Customer</code>da <code>name</code>.",
        "<code>VIPCustomer extends Customer</code>da <code>public double applyDiscount(double total)</code> (total * 0.90 qaytaradi).",
        "<code>Main</code>da 200,000 so<code>mga chegirma hisoblang: \"Chegirmali to</code>lov: 180000.0 so'm\"."
      ],
      "en": [
        "<code>Customer</code>da <code>name</code>.",
        "<code>VIPCustomer extends Customer</code>da <code>public double applyDiscount(double total)</code> (total * 0.90 qaytaradi).",
        "<code>Main</code>da 200,000 so<code>mga chegirma hisoblang: \"Chegirmali to</code>lov: 180000.0 so'm\"."
      ],
      "ru": [
        "<code>Customer</code>da <code>name</code>.",
        "<code>VIPCustomer extends Customer</code>da <code>public double applyDiscount(double total)</code> (total * 0.90 qaytaradi).",
        "<code>Main</code>da 200,000 so<code>mga chegirma hisoblang: \"Chegirmali to</code>lov: 180000.0 so'm\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'Customer' oddiy mijoz, 'VIPCustomer' esa 10% chegirmaga ega bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Customerda name.\n2. VIPCustomer extends Customerda public double applyDiscount(double total) (total * 0.90 qaytaradi).\n3. Mainda 200,000 somga chegirma hisoblang: \"Chegirmali tolov: 180000.0 so'm\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'Customer' oddiy mijoz, 'VIPCustomer' esa 10% chegirmaga ega bo'ladi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. Customerda name.\n2. VIPCustomer extends Customerda public double applyDiscount(double total) (total * 0.90 qaytaradi).\n3. Mainda 200,000 somga chegirma hisoblang: \"Chegirmali tolov: 180000.0 so'm\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'Customer' oddiy mijoz, 'VIPCustomer' esa 10% chegirmaga ega bo'ladi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. Customerda name.\n2. VIPCustomer extends Customerda public double applyDiscount(double total) (total * 0.90 qaytaradi).\n3. Mainda 200,000 somga chegirma hisoblang: \"Chegirmali tolov: 180000.0 so'm\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 15. 👑 VIP Mijoz Imtiyozlari",
      "Kutilayotgan natija: Chegirmali to'lov: 180000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class Customer {\n    protected String name;\n    public Customer(String name) { this.name = name; }\n}\n\nclass VIPCustomer extends Customer {\n    public VIPCustomer(String name) { super(name); }\n    public double applyDiscount(double total) {\n        return total * 0.90;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VIPCustomer vc = new VIPCustomer(\"Madina\");\n        System.out.println(\"Chegirmali to'lov: \" + vc.applyDiscount(200000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Chegirmali to'lov: 180000.0 so'm",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class Customer {\n    protected String name;\n    public Customer(String name) { this.name = name; }\n}\n\nclass VIPCustomer extends Customer {\n    public VIPCustomer(String name) { super(name); }\n    public double applyDiscount(double total) {\n        return total * 0.90;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VIPCustomer vc = new VIPCustomer(\"Madina\");\n        System.out.println(\"Chegirmali to'lov: \" + vc.applyDiscount(200000.0) + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>Customer, VIPCustomer, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>applyDiscount</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Chegirmali to'lov: 180000.0 so'm"
      ],
      "breakdownRu": [
        "<code>Customer, VIPCustomer, Main</code>: Классы архитектуры задачи.",
        "<code>applyDiscount</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Chegirmali to'lov: 180000.0 so'm"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 16,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "16. 🏷️ Chegirilmali Tovar (DiscountedItem)",
      "en": "16. Discounted Item",
      "ru": "16. Товар со скидкой"
    },
    "story": {
      "uz": "'OrderItem' oddiy narxni hisoblaydi, voris 'DiscountedItem' esa 'discountPercent' bo'yicha oraliq summani kamaytiradi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'OrderItem' oddiy narxni hisoblaydi, voris 'DiscountedItem' esa 'discountPercent' bo'yicha oraliq summani kamaytiradi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'OrderItem' oddiy narxni hisoblaydi, voris 'DiscountedItem' esa 'discountPercent' bo'yicha oraliq summani kamaytiradi."
    },
    "steps": {
      "uz": [
        "<code>OrderItem</code>da <code>price</code>, <code>quantity</code>, <code>public double getSubtotal()</code> (price * quantity).",
        "<code>DiscountedItem extends OrderItem</code>da <code>private double discountPercent;</code>.",
        "<code>DiscountedItem</code>da <code>getSubtotal()</code>ni qayta yozing (Override): <code>super.getSubtotal() * (1 - discountPercent / 100.0)</code>.",
        "<code>Main</code>da 50,000 so<code>mlik tovarga 10% chegirma hisoblang: \"Oraliq summa: 45000.0 so</code>m\"."
      ],
      "en": [
        "<code>OrderItem</code>da <code>price</code>, <code>quantity</code>, <code>public double getSubtotal()</code> (price * quantity).",
        "<code>DiscountedItem extends OrderItem</code>da <code>private double discountPercent;</code>.",
        "<code>DiscountedItem</code>da <code>getSubtotal()</code>ni qayta yozing (Override): <code>super.getSubtotal() * (1 - discountPercent / 100.0)</code>.",
        "<code>Main</code>da 50,000 so<code>mlik tovarga 10% chegirma hisoblang: \"Oraliq summa: 45000.0 so</code>m\"."
      ],
      "ru": [
        "<code>OrderItem</code>da <code>price</code>, <code>quantity</code>, <code>public double getSubtotal()</code> (price * quantity).",
        "<code>DiscountedItem extends OrderItem</code>da <code>private double discountPercent;</code>.",
        "<code>DiscountedItem</code>da <code>getSubtotal()</code>ni qayta yozing (Override): <code>super.getSubtotal() * (1 - discountPercent / 100.0)</code>.",
        "<code>Main</code>da 50,000 so<code>mlik tovarga 10% chegirma hisoblang: \"Oraliq summa: 45000.0 so</code>m\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'OrderItem' oddiy narxni hisoblaydi, voris 'DiscountedItem' esa 'discountPercent' bo'yicha oraliq summani kamaytiradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. OrderItemda price, quantity, public double getSubtotal() (price * quantity).\n2. DiscountedItem extends OrderItemda private double discountPercent;.\n3. DiscountedItemda getSubtotal()ni qayta yozing (Override): super.getSubtotal() * (1 - discountPercent / 100.0).\n4. Mainda 50,000 somlik tovarga 10% chegirma hisoblang: \"Oraliq summa: 45000.0 som\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'OrderItem' oddiy narxni hisoblaydi, voris 'DiscountedItem' esa 'discountPercent' bo'yicha oraliq summani kamaytiradi.\n\n[Step-by-Step Implementation Tasks (1 to 4)]\n1. OrderItemda price, quantity, public double getSubtotal() (price * quantity).\n2. DiscountedItem extends OrderItemda private double discountPercent;.\n3. DiscountedItemda getSubtotal()ni qayta yozing (Override): super.getSubtotal() * (1 - discountPercent / 100.0).\n4. Mainda 50,000 somlik tovarga 10% chegirma hisoblang: \"Oraliq summa: 45000.0 som\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'OrderItem' oddiy narxni hisoblaydi, voris 'DiscountedItem' esa 'discountPercent' bo'yicha oraliq summani kamaytiradi.\n\n📋 Пошаговые задачи (от 1 до 4)\n1. OrderItemda price, quantity, public double getSubtotal() (price * quantity).\n2. DiscountedItem extends OrderItemda private double discountPercent;.\n3. DiscountedItemda getSubtotal()ni qayta yozing (Override): super.getSubtotal() * (1 - discountPercent / 100.0).\n4. Mainda 50,000 somlik tovarga 10% chegirma hisoblang: \"Oraliq summa: 45000.0 som\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 16. 🏷️ Chegirilmali Tovar (DiscountedItem)",
      "Kutilayotgan natija: Oraliq summa: 45000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class OrderItem {\n    protected double price;\n    protected int quantity;\n    public OrderItem(double price, int quantity) { this.price = price; this.quantity = quantity; }\n    public double getSubtotal() { return price * quantity; }\n}\n\nclass DiscountedItem extends OrderItem {\n    private double discountPercent;\n    public DiscountedItem(double price, int quantity, double discountPercent) {\n        super(price, quantity);\n        this.discountPercent = discountPercent;\n    }\n    @Override\n    public double getSubtotal() {\n        return super.getSubtotal() * (1 - this.discountPercent / 100.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountedItem di = new DiscountedItem(50000.0, 1, 10.0);\n        System.out.println(\"Oraliq summa: \" + di.getSubtotal() + \" so'm\");\n    }\n}",
    "expectedOutput": "Oraliq summa: 45000.0 so'm",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class OrderItem {\n    protected double price;\n    protected int quantity;\n    public OrderItem(double price, int quantity) { this.price = price; this.quantity = quantity; }\n    public double getSubtotal() { return price * quantity; }\n}\n\nclass DiscountedItem extends OrderItem {\n    private double discountPercent;\n    public DiscountedItem(double price, int quantity, double discountPercent) {\n        super(price, quantity);\n        this.discountPercent = discountPercent;\n    }\n    @Override\n    public double getSubtotal() {\n        return super.getSubtotal() * (1 - this.discountPercent / 100.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountedItem di = new DiscountedItem(50000.0, 1, 10.0);\n        System.out.println(\"Oraliq summa: \" + di.getSubtotal() + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>OrderItem, DiscountedItem, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getSubtotal</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Oraliq summa: 45000.0 so'm"
      ],
      "breakdownRu": [
        "<code>OrderItem, DiscountedItem, Main</code>: Классы архитектуры задачи.",
        "<code>getSubtotal</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Oraliq summa: 45000.0 so'm"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 17,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "17. ⛓️ Ota Konstruktorini Chaqirish (super chaining)",
      "en": "17. Constructor Chaining",
      "ru": "17. Вызов super конструктора"
    },
    "story": {
      "uz": "Bola sinf ota konstruktoriga 'super' orqali qiymat uzatishi shart.",
      "en": "In Uzum & Payme FinTech ecosystem: Bola sinf ota konstruktoriga 'super' orqali qiymat uzatishi shart.",
      "ru": "В экосистеме Uzum & Payme FinTech: Bola sinf ota konstruktoriga 'super' orqali qiymat uzatishi shart."
    },
    "steps": {
      "uz": [
        "<code>Vehicle</code>da <code>brand</code>.",
        "<code>DeliveryCar extends Vehicle</code>da <code>capacityKg</code> qo<code>shib, </code>super(brand)' chaqiring.",
        "<code>Main</code>da \"Labo\" (1000 kg) e'lon qiling va konsolga: \"Model: Labo | Yuk hajmi: 1000 kg\" deb chiqaring."
      ],
      "en": [
        "<code>Vehicle</code>da <code>brand</code>.",
        "<code>DeliveryCar extends Vehicle</code>da <code>capacityKg</code> qo<code>shib, </code>super(brand)' chaqiring.",
        "<code>Main</code>da \"Labo\" (1000 kg) e'lon qiling va konsolga: \"Model: Labo | Yuk hajmi: 1000 kg\" deb print to console."
      ],
      "ru": [
        "<code>Vehicle</code>da <code>brand</code>.",
        "<code>DeliveryCar extends Vehicle</code>da <code>capacityKg</code> qo<code>shib, </code>super(brand)' chaqiring.",
        "<code>Main</code>da \"Labo\" (1000 kg) e'lon qiling va konsolga: \"Model: Labo | Yuk hajmi: 1000 kg\" deb выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nBola sinf ota konstruktoriga 'super' orqali qiymat uzatishi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Vehicleda brand.\n2. DeliveryCar extends Vehicleda capacityKg qoshib, super(brand)' chaqiring.\n3. Mainda \"Labo\" (1000 kg) e'lon qiling va konsolga: \"Model: Labo | Yuk hajmi: 1000 kg\" deb chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Bola sinf ota konstruktoriga 'super' orqali qiymat uzatishi shart.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. Vehicleda brand.\n2. DeliveryCar extends Vehicleda capacityKg qoshib, super(brand)' chaqiring.\n3. Mainda \"Labo\" (1000 kg) e'lon qiling va konsolga: \"Model: Labo | Yuk hajmi: 1000 kg\" deb print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Bola sinf ota konstruktoriga 'super' orqali qiymat uzatishi shart.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. Vehicleda brand.\n2. DeliveryCar extends Vehicleda capacityKg qoshib, super(brand)' chaqiring.\n3. Mainda \"Labo\" (1000 kg) e'lon qiling va konsolga: \"Model: Labo | Yuk hajmi: 1000 kg\" deb выведите в консоль."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 17. ⛓️ Ota Konstruktorini Chaqirish (super chaining)",
      "Kutilayotgan natija: Model: Labo | Yuk hajmi: 1000 kg"
    ],
    "starterCode": "",
    "solution": "class Vehicle {\n    protected String brand;\n    public Vehicle(String brand) { this.brand = brand; }\n    public String getBrand() { return brand; }\n}\n\nclass DeliveryCar extends Vehicle {\n    private int capacityKg;\n    public DeliveryCar(String brand, int capacityKg) {\n        super(brand);\n        this.capacityKg = capacityKg;\n    }\n    public int getCapacityKg() { return capacityKg; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryCar dc = new DeliveryCar(\"Labo\", 1000);\n        System.out.println(\"Model: \" + dc.getBrand() + \" | Yuk hajmi: \" + dc.getCapacityKg() + \" kg\");\n    }\n}",
    "expectedOutput": "Model: Labo | Yuk hajmi: 1000 kg",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class Vehicle {\n    protected String brand;\n    public Vehicle(String brand) { this.brand = brand; }\n    public String getBrand() { return brand; }\n}\n\nclass DeliveryCar extends Vehicle {\n    private int capacityKg;\n    public DeliveryCar(String brand, int capacityKg) {\n        super(brand);\n        this.capacityKg = capacityKg;\n    }\n    public int getCapacityKg() { return capacityKg; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DeliveryCar dc = new DeliveryCar(\"Labo\", 1000);\n        System.out.println(\"Model: \" + dc.getBrand() + \" | Yuk hajmi: \" + dc.getCapacityKg() + \" kg\");\n    }\n}",
      "breakdown": [
        "<code>Vehicle, DeliveryCar, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>Metodlar</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Model: Labo | Yuk hajmi: 1000 kg"
      ],
      "breakdownRu": [
        "<code>Vehicle, DeliveryCar, Main</code>: Классы архитектуры задачи.",
        "<code>Методы</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Model: Labo | Yuk hajmi: 1000 kg"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 18,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "18. 🎯 Ota Metodini Bonus Bilan Boyitish",
      "en": "18. Method Augmentation",
      "ru": "18. Дополнение метода super"
    },
    "story": {
      "uz": "'BonusCard'da 'deposit' chaqirilganda, ota 'deposit'iga qo'shimcha 5,000 so'm xush kelibsiz bonusi qo'shiladi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'BonusCard'da 'deposit' chaqirilganda, ota 'deposit'iga qo'shimcha 5,000 so'm xush kelibsiz bonusi qo'shiladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'BonusCard'da 'deposit' chaqirilganda, ota 'deposit'iga qo'shimcha 5,000 so'm xush kelibsiz bonusi qo'shiladi."
    },
    "steps": {
      "uz": [
        "<code>BaseCard</code>da <code>deposit(amount)</code> (balance += amount).",
        "<code>BonusCard extends BaseCard</code>da <code>deposit(amount)</code>ni qayta yozing: <code>super.deposit(amount + 5000.0);</code>.",
        "<code>Main</code>da 20,000 depozit qiling va balans 25,000 ekanini chiqaring: \"Yangi balans: 25000.0 so'm\"."
      ],
      "en": [
        "<code>BaseCard</code>da <code>deposit(amount)</code> (balance += amount).",
        "<code>BonusCard extends BaseCard</code>da <code>deposit(amount)</code>ni qayta yozing: <code>super.deposit(amount + 5000.0);</code>.",
        "<code>Main</code>da 20,000 depozit qiling va balans 25,000 ekanini print to console: \"Yangi balans: 25000.0 so'm\"."
      ],
      "ru": [
        "<code>BaseCard</code>da <code>deposit(amount)</code> (balance += amount).",
        "<code>BonusCard extends BaseCard</code>da <code>deposit(amount)</code>ni qayta yozing: <code>super.deposit(amount + 5000.0);</code>.",
        "<code>Main</code>da 20,000 depozit qiling va balans 25,000 ekanini выведите в консоль: \"Yangi balans: 25000.0 so'm\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'BonusCard'da 'deposit' chaqirilganda, ota 'deposit'iga qo'shimcha 5,000 so'm xush kelibsiz bonusi qo'shiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. BaseCardda deposit(amount) (balance += amount).\n2. BonusCard extends BaseCardda deposit(amount)ni qayta yozing: super.deposit(amount + 5000.0);.\n3. Mainda 20,000 depozit qiling va balans 25,000 ekanini chiqaring: \"Yangi balans: 25000.0 so'm\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'BonusCard'da 'deposit' chaqirilganda, ota 'deposit'iga qo'shimcha 5,000 so'm xush kelibsiz bonusi qo'shiladi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. BaseCardda deposit(amount) (balance += amount).\n2. BonusCard extends BaseCardda deposit(amount)ni qayta yozing: super.deposit(amount + 5000.0);.\n3. Mainda 20,000 depozit qiling va balans 25,000 ekanini print to console: \"Yangi balans: 25000.0 so'm\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'BonusCard'da 'deposit' chaqirilganda, ota 'deposit'iga qo'shimcha 5,000 so'm xush kelibsiz bonusi qo'shiladi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. BaseCardda deposit(amount) (balance += amount).\n2. BonusCard extends BaseCardda deposit(amount)ni qayta yozing: super.deposit(amount + 5000.0);.\n3. Mainda 20,000 depozit qiling va balans 25,000 ekanini выведите в консоль: \"Yangi balans: 25000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "BaseCard",
        "BonusCard",
        "Main"
      ],
      "methods": [
        "deposit",
        "getBalance"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 18. 🎯 Ota Metodini Bonus Bilan Boyitish",
      "Kutilayotgan natija: Yangi balans: 25000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class BaseCard {\n    protected double balance = 0.0;\n    public void deposit(double amount) { this.balance += amount; }\n    public double getBalance() { return balance; }\n}\n\nclass BonusCard extends BaseCard {\n    @Override\n    public void deposit(double amount) {\n        super.deposit(amount + 5000.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BonusCard bc = new BonusCard();\n        bc.deposit(20000.0);\n        System.out.println(\"Yangi balans: \" + bc.getBalance() + \" so'm\");\n    }\n}",
    "expectedOutput": "Yangi balans: 25000.0 so'm",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class BaseCard {\n    protected double balance = 0.0;\n    public void deposit(double amount) { this.balance += amount; }\n    public double getBalance() { return balance; }\n}\n\nclass BonusCard extends BaseCard {\n    @Override\n    public void deposit(double amount) {\n        super.deposit(amount + 5000.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BonusCard bc = new BonusCard();\n        bc.deposit(20000.0);\n        System.out.println(\"Yangi balans: \" + bc.getBalance() + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>BaseCard, BonusCard, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>deposit, getBalance</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Yangi balans: 25000.0 so'm"
      ],
      "breakdownRu": [
        "<code>BaseCard, BonusCard, Main</code>: Классы архитектуры задачи.",
        "<code>deposit, getBalance</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Yangi balans: 25000.0 so'm"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 19,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "19. 👔 Bank Xodimlari Iyerarxiyasi",
      "en": "19. Bank Employee Hierarchy",
      "ru": "19. Иерархия сотрудников банка"
    },
    "story": {
      "uz": "'BankEmployee' maosh oladi, 'BranchManager' esa maoshga qo'shimcha bonus oladi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'BankEmployee' maosh oladi, 'BranchManager' esa maoshga qo'shimcha bonus oladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'BankEmployee' maosh oladi, 'BranchManager' esa maoshga qo'shimcha bonus oladi."
    },
    "steps": {
      "uz": [
        "<code>BankEmployee</code>da <code>protected double baseSalary;</code>.",
        "<code>BranchManager extends BankEmployee</code>da <code>public double getTotalSalary(double bonus)</code> (baseSalary + bonus).",
        "<code>Main</code>da 5,000,000 maosh va 2,000,000 bonusli menejerni chiqaring: \"Jami maosh: 7000000.0 so'm\"."
      ],
      "en": [
        "<code>BankEmployee</code>da <code>protected double baseSalary;</code>.",
        "<code>BranchManager extends BankEmployee</code>da <code>public double getTotalSalary(double bonus)</code> (baseSalary + bonus).",
        "<code>Main</code>da 5,000,000 maosh va 2,000,000 bonusli menejerni print to console: \"Jami maosh: 7000000.0 so'm\"."
      ],
      "ru": [
        "<code>BankEmployee</code>da <code>protected double baseSalary;</code>.",
        "<code>BranchManager extends BankEmployee</code>da <code>public double getTotalSalary(double bonus)</code> (baseSalary + bonus).",
        "<code>Main</code>da 5,000,000 maosh va 2,000,000 bonusli menejerni выведите в консоль: \"Jami maosh: 7000000.0 so'm\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'BankEmployee' maosh oladi, 'BranchManager' esa maoshga qo'shimcha bonus oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. BankEmployeeda protected double baseSalary;.\n2. BranchManager extends BankEmployeeda public double getTotalSalary(double bonus) (baseSalary + bonus).\n3. Mainda 5,000,000 maosh va 2,000,000 bonusli menejerni chiqaring: \"Jami maosh: 7000000.0 so'm\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'BankEmployee' maosh oladi, 'BranchManager' esa maoshga qo'shimcha bonus oladi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. BankEmployeeda protected double baseSalary;.\n2. BranchManager extends BankEmployeeda public double getTotalSalary(double bonus) (baseSalary + bonus).\n3. Mainda 5,000,000 maosh va 2,000,000 bonusli menejerni print to console: \"Jami maosh: 7000000.0 so'm\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'BankEmployee' maosh oladi, 'BranchManager' esa maoshga qo'shimcha bonus oladi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. BankEmployeeda protected double baseSalary;.\n2. BranchManager extends BankEmployeeda public double getTotalSalary(double bonus) (baseSalary + bonus).\n3. Mainda 5,000,000 maosh va 2,000,000 bonusli menejerni выведите в консоль: \"Jami maosh: 7000000.0 so'm\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 19. 👔 Bank Xodimlari Iyerarxiyasi",
      "Kutilayotgan natija: Jami maosh: 7000000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class BankEmployee {\n    protected double baseSalary;\n    public BankEmployee(double baseSalary) { this.baseSalary = baseSalary; }\n}\n\nclass BranchManager extends BankEmployee {\n    public BranchManager(double baseSalary) { super(baseSalary); }\n    public double getTotalSalary(double bonus) {\n        return this.baseSalary + bonus;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BranchManager bm = new BranchManager(5000000.0);\n        System.out.println(\"Jami maosh: \" + bm.getTotalSalary(2000000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Jami maosh: 7000000.0 so'm",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class BankEmployee {\n    protected double baseSalary;\n    public BankEmployee(double baseSalary) { this.baseSalary = baseSalary; }\n}\n\nclass BranchManager extends BankEmployee {\n    public BranchManager(double baseSalary) { super(baseSalary); }\n    public double getTotalSalary(double bonus) {\n        return this.baseSalary + bonus;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BranchManager bm = new BranchManager(5000000.0);\n        System.out.println(\"Jami maosh: \" + bm.getTotalSalary(2000000.0) + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>BankEmployee, BranchManager, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getTotalSalary</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Jami maosh: 7000000.0 so'm"
      ],
      "breakdownRu": [
        "<code>BankEmployee, BranchManager, Main</code>: Классы архитектуры задачи.",
        "<code>getTotalSalary</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Jami maosh: 7000000.0 so'm"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 20,
    "tier": 2,
    "tierName": "2-Ustun: VORISLIK (Kodni Qayta Ishlatish)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "20. 🏛️ Ko'p Bosqichli Vorislik (Multilevel Inheritance)",
      "en": "20. Multilevel Inheritance",
      "ru": "20. Многоуровневое наследование"
    },
    "story": {
      "uz": "'Account' -> 'CardAccount' -> 'VIPCardAccount' ko'p bosqichli vorislik zanjiri.",
      "en": "In Uzum & Payme FinTech ecosystem: 'Account' -> 'CardAccount' -> 'VIPCardAccount' ko'p bosqichli vorislik zanjiri.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'Account' -> 'CardAccount' -> 'VIPCardAccount' ko'p bosqichli vorislik zanjiri."
    },
    "steps": {
      "uz": [
        "<code>Account</code> (id) -> <code>CardAccount</code> (pan) -> <code>VIPCardAccount</code> (status).",
        "<code>VIPCardAccount</code>da <code>public String getSummary()</code> ma'lumotlarni jamlasin.",
        "<code>Main</code>da e'lon qilib chiqaring: \"Karta turi: VIP Platinum\"."
      ],
      "en": [
        "<code>Account</code> (id) -> <code>CardAccount</code> (pan) -> <code>VIPCardAccount</code> (status).",
        "<code>VIPCardAccount</code>da <code>public String getSummary()</code> ma'lumotlarni jamlasin.",
        "<code>Main</code>da e'lon qilib print to console: \"Karta turi: VIP Platinum\"."
      ],
      "ru": [
        "<code>Account</code> (id) -> <code>CardAccount</code> (pan) -> <code>VIPCardAccount</code> (status).",
        "<code>VIPCardAccount</code>da <code>public String getSummary()</code> ma'lumotlarni jamlasin.",
        "<code>Main</code>da e'lon qilib выведите в консоль: \"Karta turi: VIP Platinum\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'Account' -> 'CardAccount' -> 'VIPCardAccount' ko'p bosqichli vorislik zanjiri.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Account (id) -> CardAccount (pan) -> VIPCardAccount (status).\n2. VIPCardAccountda public String getSummary() ma'lumotlarni jamlasin.\n3. Mainda e'lon qilib chiqaring: \"Karta turi: VIP Platinum\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'Account' -> 'CardAccount' -> 'VIPCardAccount' ko'p bosqichli vorislik zanjiri.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. Account (id) -> CardAccount (pan) -> VIPCardAccount (status).\n2. VIPCardAccountda public String getSummary() ma'lumotlarni jamlasin.\n3. Mainda e'lon qilib print to console: \"Karta turi: VIP Platinum\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'Account' -> 'CardAccount' -> 'VIPCardAccount' ko'p bosqichli vorislik zanjiri.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. Account (id) -> CardAccount (pan) -> VIPCardAccount (status).\n2. VIPCardAccountda public String getSummary() ma'lumotlarni jamlasin.\n3. Mainda e'lon qilib выведите в консоль: \"Karta turi: VIP Platinum\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "sampleData": [
      "Amal: 20. 🏛️ Ko'p Bosqichli Vorislik (Multilevel Inheritance)",
      "Kutilayotgan natija: Karta turi: VIP Platinum"
    ],
    "starterCode": "",
    "solution": "class Account {\n    protected int id;\n    public Account(int id) { this.id = id; }\n}\n\nclass CardAccount extends Account {\n    protected String pan;\n    public CardAccount(int id, String pan) { super(id); this.pan = pan; }\n}\n\nclass VIPCardAccount extends CardAccount {\n    private String status;\n    public VIPCardAccount(int id, String pan, String status) {\n        super(id, pan);\n        this.status = status;\n    }\n    public String getSummary() {\n        return \"Karta turi: \" + this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VIPCardAccount vca = new VIPCardAccount(101, \"9860\", \"VIP Platinum\");\n        System.out.println(vca.getSummary());\n    }\n}",
    "expectedOutput": "Karta turi: VIP Platinum",
    "detailedSolution": {
      "theory": "Vorislik (Inheritance) — mavjud klassning (ota klass / superclass) xususiyat va metodlarini yangi klassga (bola klass / subclass) o'tkazish orqali kodni qayta ishlatish ('Is-A' munosabati) va super kalit so'zi orqali ota konstruktor hamda metodlarini boyitish imkoniyatidir.",
      "theoryEn": "Inheritance allows a subclass to acquire properties and behaviors from a superclass ('Is-A' relationship), promoting code reuse and method specialization via 'super'.",
      "theoryRu": "Наследование позволяет дочернему классу перенимать поля и методы родительского класса, исключая дублирование кода и расширяя функционал через super.",
      "cleanCode": "class Account {\n    protected int id;\n    public Account(int id) { this.id = id; }\n}\n\nclass CardAccount extends Account {\n    protected String pan;\n    public CardAccount(int id, String pan) { super(id); this.pan = pan; }\n}\n\nclass VIPCardAccount extends CardAccount {\n    private String status;\n    public VIPCardAccount(int id, String pan, String status) {\n        super(id, pan);\n        this.status = status;\n    }\n    public String getSummary() {\n        return \"Karta turi: \" + this.status;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VIPCardAccount vca = new VIPCardAccount(101, \"9860\", \"VIP Platinum\");\n        System.out.println(vca.getSummary());\n    }\n}",
      "breakdown": [
        "<code>Account, CardAccount, VIPCardAccount, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getSummary</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Karta turi: VIP Platinum"
      ],
      "breakdownRu": [
        "<code>Account, CardAccount, VIPCardAccount, Main</code>: Классы архитектуры задачи.",
        "<code>getSummary</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Karta turi: VIP Platinum"
      ],
      "pitfalls": "Bola klass konstruktorida 'super()' chaqiruvini eng birinchi qatorda yozish shart, aks holda kompilyatsiya xatosi yuzaga keladi.",
      "cw2Tip": "CW2 loyihasida BaseOrder, DiscountedOrder va ExpressOrder iyerarxiyasi aynan shu mexanizm ustiga quriladi."
    }
  },
  {
    "id": 21,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "21. 💳 Universal To'lov — Humo va Uzcard Polimorfizmi",
      "en": "21. Payment Polymorphism",
      "ru": "21. Полиморфизм оплаты"
    },
    "story": {
      "uz": "'PaymentMethod' ota klassi 'pay' metodiga ega. Voris 'Humo' va 'Uzcard' uni o'ziga mos ravishda to'laydi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'PaymentMethod' ota klassi 'pay' metodiga ega. Voris 'Humo' va 'Uzcard' uni o'ziga mos ravishda to'laydi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'PaymentMethod' ota klassi 'pay' metodiga ega. Voris 'Humo' va 'Uzcard' uni o'ziga mos ravishda to'laydi."
    },
    "steps": {
      "uz": [
        "<code>PaymentMethod</code>da <code>public String pay(double amount)</code> (\"To'lov: \" + amount).",
        "<code>HumoPayment extends PaymentMethod</code>da <code>pay</code>ni qayta yozing: \"Humo orqali: \" + amount.",
        "<code>Main</code>da polimorfik havola oching: <code>PaymentMethod pm = new HumoPayment();</code> va <code>pm.pay(45000.0)</code>ni chiqaring."
      ],
      "en": [
        "<code>PaymentMethod</code>da <code>public String pay(double amount)</code> (\"To'lov: \" + amount).",
        "<code>HumoPayment extends PaymentMethod</code>da <code>pay</code>ni qayta yozing: \"Humo orqali: \" + amount.",
        "<code>Main</code>da polimorfik havola oching: <code>PaymentMethod pm = new HumoPayment();</code> va <code>pm.pay(45000.0)</code>ni print to console."
      ],
      "ru": [
        "<code>PaymentMethod</code>da <code>public String pay(double amount)</code> (\"To'lov: \" + amount).",
        "<code>HumoPayment extends PaymentMethod</code>da <code>pay</code>ni qayta yozing: \"Humo orqali: \" + amount.",
        "<code>Main</code>da polimorfik havola oching: <code>PaymentMethod pm = new HumoPayment();</code> va <code>pm.pay(45000.0)</code>ni выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'PaymentMethod' ota klassi 'pay' metodiga ega. Voris 'Humo' va 'Uzcard' uni o'ziga mos ravishda to'laydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. PaymentMethodda public String pay(double amount) (\"To'lov: \" + amount).\n2. HumoPayment extends PaymentMethodda payni qayta yozing: \"Humo orqali: \" + amount.\n3. Mainda polimorfik havola oching: PaymentMethod pm = new HumoPayment(); va pm.pay(45000.0)ni chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'PaymentMethod' ota klassi 'pay' metodiga ega. Voris 'Humo' va 'Uzcard' uni o'ziga mos ravishda to'laydi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. PaymentMethodda public String pay(double amount) (\"To'lov: \" + amount).\n2. HumoPayment extends PaymentMethodda payni qayta yozing: \"Humo orqali: \" + amount.\n3. Mainda polimorfik havola oching: PaymentMethod pm = new HumoPayment(); va pm.pay(45000.0)ni print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'PaymentMethod' ota klassi 'pay' metodiga ega. Voris 'Humo' va 'Uzcard' uni o'ziga mos ravishda to'laydi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. PaymentMethodda public String pay(double amount) (\"To'lov: \" + amount).\n2. HumoPayment extends PaymentMethodda payni qayta yozing: \"Humo orqali: \" + amount.\n3. Mainda polimorfik havola oching: PaymentMethod pm = new HumoPayment(); va pm.pay(45000.0)ni выведите в консоль."
    },
    "requirements": {
      "classes": [
        "PaymentMethod",
        "HumoPayment",
        "Main"
      ],
      "methods": [
        "pay"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 21. 💳 Universal To'lov — Humo va Uzcard Polimorfizmi",
      "Kutilayotgan natija: Humo orqali: 45000.0"
    ],
    "starterCode": "",
    "solution": "class PaymentMethod {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    @Override\n    public String pay(double amount) {\n        return \"Humo orqali: \" + amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new HumoPayment();\n        System.out.println(pm.pay(45000.0));\n    }\n}",
    "expectedOutput": "Humo orqali: 45000.0",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class PaymentMethod {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    @Override\n    public String pay(double amount) {\n        return \"Humo orqali: \" + amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod pm = new HumoPayment();\n        System.out.println(pm.pay(45000.0));\n    }\n}",
      "breakdown": [
        "<code>PaymentMethod, HumoPayment, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Humo orqali: 45000.0"
      ],
      "breakdownRu": [
        "<code>PaymentMethod, HumoPayment, Main</code>: Классы архитектуры задачи.",
        "<code>pay</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Humo orqali: 45000.0"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 22,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "22. 📅 Uzum Nasiya — Muddatli To'lov Taqsimoti",
      "en": "22. Nasiya Installment",
      "ru": "22. Рассрочка Насия"
    },
    "story": {
      "uz": "'UzumNasiya' to'lovni 3 oyga teng taqsimlab to'laydi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'UzumNasiya' to'lovni 3 oyga teng taqsimlab to'laydi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'UzumNasiya' to'lovni 3 oyga teng taqsimlab to'laydi."
    },
    "steps": {
      "uz": [
        "<code>Payment</code> ota klassi <code>pay(double amount)</code> (\"Oddiy: \" + amount).",
        "<code>NasiyaPayment extends Payment</code>da <code>pay</code>ni qayta yozing: \"Nasiya oylik: \" + (amount / 3.0).",
        "<code>Main</code>da 300,000 so<code>m uchun Nasiya to</code>lovini chiqaring: \"Nasiya oylik: 100000.0\"."
      ],
      "en": [
        "<code>Payment</code> ota klassi <code>pay(double amount)</code> (\"Oddiy: \" + amount).",
        "<code>NasiyaPayment extends Payment</code>da <code>pay</code>ni qayta yozing: \"Nasiya oylik: \" + (amount / 3.0).",
        "<code>Main</code>da 300,000 so<code>m uchun Nasiya to</code>lovini print to console: \"Nasiya oylik: 100000.0\"."
      ],
      "ru": [
        "<code>Payment</code> ota klassi <code>pay(double amount)</code> (\"Oddiy: \" + amount).",
        "<code>NasiyaPayment extends Payment</code>da <code>pay</code>ni qayta yozing: \"Nasiya oylik: \" + (amount / 3.0).",
        "<code>Main</code>da 300,000 so<code>m uchun Nasiya to</code>lovini выведите в консоль: \"Nasiya oylik: 100000.0\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'UzumNasiya' to'lovni 3 oyga teng taqsimlab to'laydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Payment ota klassi pay(double amount) (\"Oddiy: \" + amount).\n2. NasiyaPayment extends Paymentda payni qayta yozing: \"Nasiya oylik: \" + (amount / 3.0).\n3. Mainda 300,000 som uchun Nasiya tolovini chiqaring: \"Nasiya oylik: 100000.0\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'UzumNasiya' to'lovni 3 oyga teng taqsimlab to'laydi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. Payment ota klassi pay(double amount) (\"Oddiy: \" + amount).\n2. NasiyaPayment extends Paymentda payni qayta yozing: \"Nasiya oylik: \" + (amount / 3.0).\n3. Mainda 300,000 som uchun Nasiya tolovini print to console: \"Nasiya oylik: 100000.0\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'UzumNasiya' to'lovni 3 oyga teng taqsimlab to'laydi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. Payment ota klassi pay(double amount) (\"Oddiy: \" + amount).\n2. NasiyaPayment extends Paymentda payni qayta yozing: \"Nasiya oylik: \" + (amount / 3.0).\n3. Mainda 300,000 som uchun Nasiya tolovini выведите в консоль: \"Nasiya oylik: 100000.0\"."
    },
    "requirements": {
      "classes": [
        "Payment",
        "NasiyaPayment",
        "Main"
      ],
      "methods": [
        "pay"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 22. 📅 Uzum Nasiya — Muddatli To'lov Taqsimoti",
      "Kutilayotgan natija: Nasiya oylik: 100000.0"
    ],
    "starterCode": "",
    "solution": "class Payment {\n    public String pay(double amount) { return \"Oddiy: \" + amount; }\n}\n\nclass NasiyaPayment extends Payment {\n    @Override\n    public String pay(double amount) {\n        return \"Nasiya oylik: \" + (amount / 3.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payment p = new NasiyaPayment();\n        System.out.println(p.pay(300000.0));\n    }\n}",
    "expectedOutput": "Nasiya oylik: 100000.0",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class Payment {\n    public String pay(double amount) { return \"Oddiy: \" + amount; }\n}\n\nclass NasiyaPayment extends Payment {\n    @Override\n    public String pay(double amount) {\n        return \"Nasiya oylik: \" + (amount / 3.0);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payment p = new NasiyaPayment();\n        System.out.println(p.pay(300000.0));\n    }\n}",
      "breakdown": [
        "<code>Payment, NasiyaPayment, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Nasiya oylik: 100000.0"
      ],
      "breakdownRu": [
        "<code>Payment, NasiyaPayment, Main</code>: Классы архитектуры задачи.",
        "<code>pay</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Nasiya oylik: 100000.0"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 23,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "23. 📲 Click QR To'lov Polimorfizmi",
      "en": "23. Click QR Payment",
      "ru": "23. Оплата Click QR"
    },
    "story": {
      "uz": "'ClickPayment' QR kod formati bilan to'laydi: \"Click QR to'landi: \" + amount.",
      "en": "In Uzum & Payme FinTech ecosystem: 'ClickPayment' QR kod formati bilan to'laydi: \"Click QR to'landi: \" + amount.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'ClickPayment' QR kod formati bilan to'laydi: \"Click QR to'landi: \" + amount."
    },
    "steps": {
      "uz": [
        "<code>PaymentOption</code> ota klassi.",
        "<code>ClickPayment extends PaymentOption</code>.",
        "<code>Main</code>da polimorfik chaqiruv: \"Click QR to'landi: 25000.0\"."
      ],
      "en": [
        "<code>PaymentOption</code> ota klassi.",
        "<code>ClickPayment extends PaymentOption</code>.",
        "<code>Main</code>da polimorfik chaqiruv: \"Click QR to'landi: 25000.0\"."
      ],
      "ru": [
        "<code>PaymentOption</code> ota klassi.",
        "<code>ClickPayment extends PaymentOption</code>.",
        "<code>Main</code>da polimorfik chaqiruv: \"Click QR to'landi: 25000.0\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'ClickPayment' QR kod formati bilan to'laydi: \"Click QR to'landi: \" + amount.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. PaymentOption ota klassi.\n2. ClickPayment extends PaymentOption.\n3. Mainda polimorfik chaqiruv: \"Click QR to'landi: 25000.0\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'ClickPayment' QR kod formati bilan to'laydi: \"Click QR to'landi: \" + amount.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. PaymentOption ota klassi.\n2. ClickPayment extends PaymentOption.\n3. Mainda polimorfik chaqiruv: \"Click QR to'landi: 25000.0\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'ClickPayment' QR kod formati bilan to'laydi: \"Click QR to'landi: \" + amount.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. PaymentOption ota klassi.\n2. ClickPayment extends PaymentOption.\n3. Mainda polimorfik chaqiruv: \"Click QR to'landi: 25000.0\"."
    },
    "requirements": {
      "classes": [
        "PaymentOption",
        "ClickPayment",
        "Main"
      ],
      "methods": [
        "pay"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 23. 📲 Click QR To'lov Polimorfizmi",
      "Kutilayotgan natija: Click QR to'landi: 25000.0"
    ],
    "starterCode": "",
    "solution": "class PaymentOption {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass ClickPayment extends PaymentOption {\n    @Override\n    public String pay(double amount) {\n        return \"Click QR to'landi: \" + amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentOption opt = new ClickPayment();\n        System.out.println(opt.pay(25000.0));\n    }\n}",
    "expectedOutput": "Click QR to'landi: 25000.0",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class PaymentOption {\n    public String pay(double amount) { return \"To'lov: \" + amount; }\n}\n\nclass ClickPayment extends PaymentOption {\n    @Override\n    public String pay(double amount) {\n        return \"Click QR to'landi: \" + amount;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentOption opt = new ClickPayment();\n        System.out.println(opt.pay(25000.0));\n    }\n}",
      "breakdown": [
        "<code>PaymentOption, ClickPayment, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Click QR to'landi: 25000.0"
      ],
      "breakdownRu": [
        "<code>PaymentOption, ClickPayment, Main</code>: Классы архитектуры задачи.",
        "<code>pay</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Click QR to'landi: 25000.0"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 24,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "24. ⚡ Dinamik Dispatch — Ota Ko'rsatkichi Bilan Boshqarish",
      "en": "24. Dynamic Dispatch",
      "ru": "24. Динамическая диспетчеризация"
    },
    "story": {
      "uz": "Kassa apparati qaysi karta kelishini bilmaydi, faqat 'PaymentMethod' ota turini qabul qiladi.",
      "en": "In Uzum & Payme FinTech ecosystem: Kassa apparati qaysi karta kelishini bilmaydi, faqat 'PaymentMethod' ota turini qabul qiladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Kassa apparati qaysi karta kelishini bilmaydi, faqat 'PaymentMethod' ota turini qabul qiladi."
    },
    "steps": {
      "uz": [
        "<code>Cashier</code> sinfida <code>public void process(PaymentMethod pm, double sum)</code> metodini yozing, u konsolga <code>pm.pay(sum)</code> natijasini chiqarsin.",
        "<code>Main</code>da kassirga <code>HumoPayment</code> uzating va to'lovni tasdiqlang."
      ],
      "en": [
        "<code>Cashier</code> sinfida <code>public void process(PaymentMethod pm, double sum)</code> method yozing, u konsolga <code>pm.pay(sum)</code> natijasini chiqarsin.",
        "<code>Main</code>da kassirga <code>HumoPayment</code> uzating va to'lovni tasdiqlang."
      ],
      "ru": [
        "<code>Cashier</code> sinfida <code>public void process(PaymentMethod pm, double sum)</code> метод yozing, u konsolga <code>pm.pay(sum)</code> natijasini chiqarsin.",
        "<code>Main</code>da kassirga <code>HumoPayment</code> uzating va to'lovni tasdiqlang."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nKassa apparati qaysi karta kelishini bilmaydi, faqat 'PaymentMethod' ota turini qabul qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Cashier sinfida public void process(PaymentMethod pm, double sum) metodini yozing, u konsolga pm.pay(sum) natijasini chiqarsin.\n2. Mainda kassirga HumoPayment uzating va to'lovni tasdiqlang.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Kassa apparati qaysi karta kelishini bilmaydi, faqat 'PaymentMethod' ota turini qabul qiladi.\n\n[Step-by-Step Implementation Tasks (1 to 2)]\n1. Cashier sinfida public void process(PaymentMethod pm, double sum) method yozing, u konsolga pm.pay(sum) natijasini chiqarsin.\n2. Mainda kassirga HumoPayment uzating va to'lovni tasdiqlang.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Kassa apparati qaysi karta kelishini bilmaydi, faqat 'PaymentMethod' ota turini qabul qiladi.\n\n📋 Пошаговые задачи (от 1 до 2)\n1. Cashier sinfida public void process(PaymentMethod pm, double sum) метод yozing, u konsolga pm.pay(sum) natijasini chiqarsin.\n2. Mainda kassirga HumoPayment uzating va to'lovni tasdiqlang."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 24. ⚡ Dinamik Dispatch — Ota Ko'rsatkichi Bilan Boshqarish",
      "Kutilayotgan natija: Humo tasdiqlandi: 50000.0"
    ],
    "starterCode": "",
    "solution": "class PaymentMethod {\n    public String pay(double amount) { return \"To'landi: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    @Override\n    public String pay(double amount) {\n        return \"Humo tasdiqlandi: \" + amount;\n    }\n}\n\nclass Cashier {\n    public void process(PaymentMethod pm, double sum) {\n        System.out.println(pm.pay(sum));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cashier c = new Cashier();\n        c.process(new HumoPayment(), 50000.0);\n    }\n}",
    "expectedOutput": "Humo tasdiqlandi: 50000.0",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class PaymentMethod {\n    public String pay(double amount) { return \"To'landi: \" + amount; }\n}\n\nclass HumoPayment extends PaymentMethod {\n    @Override\n    public String pay(double amount) {\n        return \"Humo tasdiqlandi: \" + amount;\n    }\n}\n\nclass Cashier {\n    public void process(PaymentMethod pm, double sum) {\n        System.out.println(pm.pay(sum));\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Cashier c = new Cashier();\n        c.process(new HumoPayment(), 50000.0);\n    }\n}",
      "breakdown": [
        "<code>PaymentMethod, HumoPayment, Cashier, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay, process</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Humo tasdiqlandi: 50000.0"
      ],
      "breakdownRu": [
        "<code>PaymentMethod, HumoPayment, Cashier, Main</code>: Классы архитектуры задачи.",
        "<code>pay, process</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Humo tasdiqlandi: 50000.0"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 25,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "25. 🧺 Turli To'lovlar Ro'yxati (Heterogeneous List)",
      "en": "25. Payment List",
      "ru": "25. Список разных оплат"
    },
    "story": {
      "uz": "'List<PaymentMethod>' ro'yxatida bir vaqtning o'zida Humo, Uzcard va Click obyektlari turadi. Bitta for siklida barchasi ishga tushadi!",
      "en": "In Uzum & Payme FinTech ecosystem: 'List<PaymentMethod>' ro'yxatida bir vaqtning o'zida Humo, Uzcard va Click obyektlari turadi. Bitta for siklida barchasi ishga tushadi!",
      "ru": "В экосистеме Uzum & Payme FinTech: 'List<PaymentMethod>' ro'yxatida bir vaqtning o'zida Humo, Uzcard va Click obyektlari turadi. Bitta for siklida barchasi ishga tushadi!"
    },
    "steps": {
      "uz": [
        "<code>PaymentMethod</code> (pay).",
        "<code>CardPay</code> (\"Karta: \" + a) va <code>CashPay</code> (\"Naqd: \" + a).",
        "<code>Main</code>da <code>PaymentMethod[] list = { new CardPay(), new CashPay() };</code> ochib, for siklida 10000 to'lang."
      ],
      "en": [
        "<code>PaymentMethod</code> (pay).",
        "<code>CardPay</code> (\"Karta: \" + a) va <code>CashPay</code> (\"Naqd: \" + a).",
        "<code>Main</code>da <code>PaymentMethod[] list = { new CardPay(), new CashPay() };</code> ochib, for siklida 10000 to'lang."
      ],
      "ru": [
        "<code>PaymentMethod</code> (pay).",
        "<code>CardPay</code> (\"Karta: \" + a) va <code>CashPay</code> (\"Naqd: \" + a).",
        "<code>Main</code>da <code>PaymentMethod[] list = { new CardPay(), new CashPay() };</code> ochib, for siklida 10000 to'lang."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'List<PaymentMethod>' ro'yxatida bir vaqtning o'zida Humo, Uzcard va Click obyektlari turadi. Bitta for siklida barchasi ishga tushadi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. PaymentMethod (pay).\n2. CardPay (\"Karta: \" + a) va CashPay (\"Naqd: \" + a).\n3. Mainda PaymentMethod[] list = { new CardPay(), new CashPay() }; ochib, for siklida 10000 to'lang.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'List<PaymentMethod>' ro'yxatida bir vaqtning o'zida Humo, Uzcard va Click obyektlari turadi. Bitta for siklida barchasi ishga tushadi!\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. PaymentMethod (pay).\n2. CardPay (\"Karta: \" + a) va CashPay (\"Naqd: \" + a).\n3. Mainda PaymentMethod[] list = { new CardPay(), new CashPay() }; ochib, for siklida 10000 to'lang.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'List<PaymentMethod>' ro'yxatida bir vaqtning o'zida Humo, Uzcard va Click obyektlari turadi. Bitta for siklida barchasi ishga tushadi!\n\n📋 Пошаговые задачи (от 1 до 3)\n1. PaymentMethod (pay).\n2. CardPay (\"Karta: \" + a) va CashPay (\"Naqd: \" + a).\n3. Mainda PaymentMethod[] list = { new CardPay(), new CashPay() }; ochib, for siklida 10000 to'lang."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends",
        "for"
      ]
    },
    "sampleData": [
      "Amal: 25. 🧺 Turli To'lovlar Ro'yxati (Heterogeneous List)",
      "Kutilayotgan natija: Karta: 10000.0 Naqd: 10000.0"
    ],
    "starterCode": "",
    "solution": "class PaymentMethod {\n    public String pay(double a) { return \"\" + a; }\n}\n\nclass CardPay extends PaymentMethod {\n    @Override\n    public String pay(double a) { return \"Karta: \" + a; }\n}\n\nclass CashPay extends PaymentMethod {\n    @Override\n    public String pay(double a) { return \"Naqd: \" + a; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod[] list = { new CardPay(), new CashPay() };\n        for (PaymentMethod pm : list) {\n            System.out.println(pm.pay(10000.0));\n        }\n    }\n}",
    "expectedOutput": "Karta: 10000.0\nNaqd: 10000.0",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class PaymentMethod {\n    public String pay(double a) { return \"\" + a; }\n}\n\nclass CardPay extends PaymentMethod {\n    @Override\n    public String pay(double a) { return \"Karta: \" + a; }\n}\n\nclass CashPay extends PaymentMethod {\n    @Override\n    public String pay(double a) { return \"Naqd: \" + a; }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        PaymentMethod[] list = { new CardPay(), new CashPay() };\n        for (PaymentMethod pm : list) {\n            System.out.println(pm.pay(10000.0));\n        }\n    }\n}",
      "breakdown": [
        "<code>PaymentMethod, CardPay, CashPay, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Karta: 10000.0\nNaqd: 10000.0"
      ],
      "breakdownRu": [
        "<code>PaymentMethod, CardPay, CashPay, Main</code>: Классы архитектуры задачи.",
        "<code>pay</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Karta: 10000.0\nNaqd: 10000.0"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 26,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "26. 🧾 Kassa Cheki Chop Etish Polimorfizmi",
      "en": "26. Receipt Polymorphism",
      "ru": "26. Полиморфизм чеков"
    },
    "story": {
      "uz": "'Receipt' ota sinf. 'PaperReceipt' .",
      "en": "In Uzum & Payme FinTech ecosystem: 'Receipt' ota sinf. 'PaperReceipt' .",
      "ru": "В экосистеме Uzum & Payme FinTech: 'Receipt' ota sinf. 'PaperReceipt' ."
    },
    "steps": {
      "uz": [
        "<code>Receipt</code> ota sinfi.",
        "<code>PaperReceipt</code> chop etishni qayta yozsin: \"Qog'oz Chek: 999\"."
      ],
      "en": [
        "<code>Receipt</code> ota sinfi.",
        "<code>PaperReceipt</code> chop etishni qayta yozsin: \"Qog'oz Chek: 999\"."
      ],
      "ru": [
        "<code>Receipt</code> ota sinfi.",
        "<code>PaperReceipt</code> chop etishni qayta yozsin: \"Qog'oz Chek: 999\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'Receipt' ota sinf. 'PaperReceipt' .\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Receipt ota sinfi.\n2. PaperReceipt chop etishni qayta yozsin: \"Qog'oz Chek: 999\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'Receipt' ota sinf. 'PaperReceipt' .\n\n[Step-by-Step Implementation Tasks (1 to 2)]\n1. Receipt ota sinfi.\n2. PaperReceipt chop etishni qayta yozsin: \"Qog'oz Chek: 999\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'Receipt' ota sinf. 'PaperReceipt' .\n\n📋 Пошаговые задачи (от 1 до 2)\n1. Receipt ota sinfi.\n2. PaperReceipt chop etishni qayta yozsin: \"Qog'oz Chek: 999\"."
    },
    "requirements": {
      "classes": [
        "Receipt",
        "PaperReceipt",
        "Main"
      ],
      "methods": [
        "print"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 26. 🧾 Kassa Cheki Chop Etish Polimorfizmi",
      "Kutilayotgan natija: Qog'oz Chek: 999"
    ],
    "starterCode": "",
    "solution": "class Receipt {\n    public String print(int id) { return \"Chek: \" + id; }\n}\n\nclass PaperReceipt extends Receipt {\n    @Override\n    public String print(int id) {\n        return \"Qog'oz Chek: \" + id;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new PaperReceipt();\n        System.out.println(r.print(999));\n    }\n}",
    "expectedOutput": "Qog'oz Chek: 999",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class Receipt {\n    public String print(int id) { return \"Chek: \" + id; }\n}\n\nclass PaperReceipt extends Receipt {\n    @Override\n    public String print(int id) {\n        return \"Qog'oz Chek: \" + id;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Receipt r = new PaperReceipt();\n        System.out.println(r.print(999));\n    }\n}",
      "breakdown": [
        "<code>Receipt, PaperReceipt, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>print</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Qog'oz Chek: 999"
      ],
      "breakdownRu": [
        "<code>Receipt, PaperReceipt, Main</code>: Классы архитектуры задачи.",
        "<code>print</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Qog'oz Chek: 999"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 27,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "27. 💸 Bank Komissiyasini Hisoblash",
      "en": "27. Transaction Fee",
      "ru": "27. Банковская комиссия"
    },
    "story": {
      "uz": "Oddiy o'tkazma 1% komissiya , xalqaro o'tkazma esa 3% komissiya oladi.",
      "en": "In Uzum & Payme FinTech ecosystem: Oddiy o'tkazma 1% komissiya , xalqaro o'tkazma esa 3% komissiya oladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Oddiy o'tkazma 1% komissiya , xalqaro o'tkazma esa 3% komissiya oladi."
    },
    "steps": {
      "uz": [
        "<code>Transfer</code>da <code>calculateFee(amount)</code> (amount * 0.01).",
        "<code>InternationalTransfer extends Transfer</code>da (amount * 0.03).",
        "<code>Main</code>da 100,000 so<code>m uchun xalqaro komissiyani chiqaring: \"Komissiya: 3000.0 so</code>m\"."
      ],
      "en": [
        "<code>Transfer</code>da <code>calculateFee(amount)</code> (amount * 0.01).",
        "<code>InternationalTransfer extends Transfer</code>da (amount * 0.03).",
        "<code>Main</code>da 100,000 so<code>m uchun xalqaro komissiyani print to console: \"Komissiya: 3000.0 so</code>m\"."
      ],
      "ru": [
        "<code>Transfer</code>da <code>calculateFee(amount)</code> (amount * 0.01).",
        "<code>InternationalTransfer extends Transfer</code>da (amount * 0.03).",
        "<code>Main</code>da 100,000 so<code>m uchun xalqaro komissiyani выведите в консоль: \"Komissiya: 3000.0 so</code>m\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nOddiy o'tkazma 1% komissiya , xalqaro o'tkazma esa 3% komissiya oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Transferda calculateFee(amount) (amount * 0.01).\n2. InternationalTransfer extends Transferda (amount * 0.03).\n3. Mainda 100,000 som uchun xalqaro komissiyani chiqaring: \"Komissiya: 3000.0 som\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Oddiy o'tkazma 1% komissiya , xalqaro o'tkazma esa 3% komissiya oladi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. Transferda calculateFee(amount) (amount * 0.01).\n2. InternationalTransfer extends Transferda (amount * 0.03).\n3. Mainda 100,000 som uchun xalqaro komissiyani print to console: \"Komissiya: 3000.0 som\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Oddiy o'tkazma 1% komissiya , xalqaro o'tkazma esa 3% komissiya oladi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. Transferda calculateFee(amount) (amount * 0.01).\n2. InternationalTransfer extends Transferda (amount * 0.03).\n3. Mainda 100,000 som uchun xalqaro komissiyani выведите в консоль: \"Komissiya: 3000.0 som\"."
    },
    "requirements": {
      "classes": [
        "Transfer",
        "InternationalTransfer",
        "Main"
      ],
      "methods": [
        "calculateFee"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 27. 💸 Bank Komissiyasini Hisoblash",
      "Kutilayotgan natija: Komissiya: 3000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class Transfer {\n    public double calculateFee(double amount) { return amount * 0.01; }\n}\n\nclass InternationalTransfer extends Transfer {\n    @Override\n    public double calculateFee(double amount) {\n        return amount * 0.03;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Transfer t = new InternationalTransfer();\n        System.out.println(\"Komissiya: \" + t.calculateFee(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Komissiya: 3000.0 so'm",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class Transfer {\n    public double calculateFee(double amount) { return amount * 0.01; }\n}\n\nclass InternationalTransfer extends Transfer {\n    @Override\n    public double calculateFee(double amount) {\n        return amount * 0.03;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Transfer t = new InternationalTransfer();\n        System.out.println(\"Komissiya: \" + t.calculateFee(100000.0) + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>Transfer, InternationalTransfer, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>calculateFee</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Komissiya: 3000.0 so'm"
      ],
      "breakdownRu": [
        "<code>Transfer, InternationalTransfer, Main</code>: Классы архитектуры задачи.",
        "<code>calculateFee</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Komissiya: 3000.0 so'm"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 28,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "28. 🚚 Yetkazib Berish Narxi Polimorfizmi",
      "en": "28. Delivery Cost",
      "ru": "28. Стоимость доставки"
    },
    "story": {
      "uz": "'Delivery' 10,000 so'm baza narxiga ega, 'ExpressDelivery' esa 25,000 so'm narx chiqaradi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'Delivery' 10,000 so'm baza narxiga ega, 'ExpressDelivery' esa 25,000 so'm narx chiqaradi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'Delivery' 10,000 so'm baza narxiga ega, 'ExpressDelivery' esa 25,000 so'm narx chiqaradi."
    },
    "steps": {
      "uz": [
        "<code>Delivery</code> (getCost -> 10000.0).",
        "<code>ExpressDelivery</code> (getCost -> 25000.0).",
        "<code>Main</code>da chiqaring: \"Yetkazish narxi: 25000.0 so'm\"."
      ],
      "en": [
        "<code>Delivery</code> (getCost -> 10000.0).",
        "<code>ExpressDelivery</code> (getCost -> 25000.0).",
        "<code>Main</code>da print to console: \"Yetkazish narxi: 25000.0 so'm\"."
      ],
      "ru": [
        "<code>Delivery</code> (getCost -> 10000.0).",
        "<code>ExpressDelivery</code> (getCost -> 25000.0).",
        "<code>Main</code>da выведите в консоль: \"Yetkazish narxi: 25000.0 so'm\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'Delivery' 10,000 so'm baza narxiga ega, 'ExpressDelivery' esa 25,000 so'm narx chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Delivery (getCost -> 10000.0).\n2. ExpressDelivery (getCost -> 25000.0).\n3. Mainda chiqaring: \"Yetkazish narxi: 25000.0 so'm\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'Delivery' 10,000 so'm baza narxiga ega, 'ExpressDelivery' esa 25,000 so'm narx chiqaradi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. Delivery (getCost -> 10000.0).\n2. ExpressDelivery (getCost -> 25000.0).\n3. Mainda print to console: \"Yetkazish narxi: 25000.0 so'm\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'Delivery' 10,000 so'm baza narxiga ega, 'ExpressDelivery' esa 25,000 so'm narx chiqaradi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. Delivery (getCost -> 10000.0).\n2. ExpressDelivery (getCost -> 25000.0).\n3. Mainda выведите в консоль: \"Yetkazish narxi: 25000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Delivery",
        "ExpressDelivery",
        "Main"
      ],
      "methods": [
        "getCost"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 28. 🚚 Yetkazib Berish Narxi Polimorfizmi",
      "Kutilayotgan natija: Yetkazish narxi: 25000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class Delivery {\n    public double getCost() { return 10000.0; }\n}\n\nclass ExpressDelivery extends Delivery {\n    @Override\n    public double getCost() {\n        return 25000.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Delivery d = new ExpressDelivery();\n        System.out.println(\"Yetkazish narxi: \" + d.getCost() + \" so'm\");\n    }\n}",
    "expectedOutput": "Yetkazish narxi: 25000.0 so'm",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class Delivery {\n    public double getCost() { return 10000.0; }\n}\n\nclass ExpressDelivery extends Delivery {\n    @Override\n    public double getCost() {\n        return 25000.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Delivery d = new ExpressDelivery();\n        System.out.println(\"Yetkazish narxi: \" + d.getCost() + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>Delivery, ExpressDelivery, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getCost</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Yetkazish narxi: 25000.0 so'm"
      ],
      "breakdownRu": [
        "<code>Delivery, ExpressDelivery, Main</code>: Классы архитектуры задачи.",
        "<code>getCost</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Yetkazish narxi: 25000.0 so'm"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 29,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "29. 🎟️ Chegirma Qoidalari Polimorfizmi",
      "en": "29. Discount Strategy",
      "ru": "29. Стратегия скидок"
    },
    "story": {
      "uz": "'DiscountRule' ota sinf. 'HolidayDiscount' xariddan 15% chegirma beradi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'DiscountRule' ota sinf. 'HolidayDiscount' xariddan 15% chegirma beradi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'DiscountRule' ota sinf. 'HolidayDiscount' xariddan 15% chegirma beradi."
    },
    "steps": {
      "uz": [
        "<code>DiscountRule</code>da <code>apply(total)</code> (total).",
        "<code>HolidayDiscount extends DiscountRule</code>da (total * 0.85).",
        "<code>Main</code>da 100,000 uchun chiqaring: \"Bayramona narx: 85000.0 so'm\"."
      ],
      "en": [
        "<code>DiscountRule</code>da <code>apply(total)</code> (total).",
        "<code>HolidayDiscount extends DiscountRule</code>da (total * 0.85).",
        "<code>Main</code>da 100,000 uchun print to console: \"Bayramona narx: 85000.0 so'm\"."
      ],
      "ru": [
        "<code>DiscountRule</code>da <code>apply(total)</code> (total).",
        "<code>HolidayDiscount extends DiscountRule</code>da (total * 0.85).",
        "<code>Main</code>da 100,000 uchun выведите в консоль: \"Bayramona narx: 85000.0 so'm\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'DiscountRule' ota sinf. 'HolidayDiscount' xariddan 15% chegirma beradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. DiscountRuleda apply(total) (total).\n2. HolidayDiscount extends DiscountRuleda (total * 0.85).\n3. Mainda 100,000 uchun chiqaring: \"Bayramona narx: 85000.0 so'm\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'DiscountRule' ota sinf. 'HolidayDiscount' xariddan 15% chegirma beradi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. DiscountRuleda apply(total) (total).\n2. HolidayDiscount extends DiscountRuleda (total * 0.85).\n3. Mainda 100,000 uchun print to console: \"Bayramona narx: 85000.0 so'm\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'DiscountRule' ota sinf. 'HolidayDiscount' xariddan 15% chegirma beradi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. DiscountRuleda apply(total) (total).\n2. HolidayDiscount extends DiscountRuleda (total * 0.85).\n3. Mainda 100,000 uchun выведите в консоль: \"Bayramona narx: 85000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "DiscountRule",
        "HolidayDiscount",
        "Main"
      ],
      "methods": [
        "apply"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 29. 🎟️ Chegirma Qoidalari Polimorfizmi",
      "Kutilayotgan natija: Bayramona narx: 85000.0 so'm"
    ],
    "starterCode": "",
    "solution": "class DiscountRule {\n    public double apply(double total) { return total; }\n}\n\nclass HolidayDiscount extends DiscountRule {\n    @Override\n    public double apply(double total) {\n        return total * 0.85;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountRule dr = new HolidayDiscount();\n        System.out.println(\"Bayramona narx: \" + dr.apply(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Bayramona narx: 85000.0 so'm",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class DiscountRule {\n    public double apply(double total) { return total; }\n}\n\nclass HolidayDiscount extends DiscountRule {\n    @Override\n    public double apply(double total) {\n        return total * 0.85;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountRule dr = new HolidayDiscount();\n        System.out.println(\"Bayramona narx: \" + dr.apply(100000.0) + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>DiscountRule, HolidayDiscount, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>apply</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Bayramona narx: 85000.0 so'm"
      ],
      "breakdownRu": [
        "<code>DiscountRule, HolidayDiscount, Main</code>: Классы архитектуры задачи.",
        "<code>apply</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Bayramona narx: 85000.0 so'm"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 30,
    "tier": 3,
    "tierName": "3-Ustun: POLIMORFIZM (Moslashuvchanlik)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "30. 📊 Tranzaksiyalar Auditi (Master Polimorfizm)",
      "en": "30. Master Audit Logger",
      "ru": "30. Мастер аудита"
    },
    "story": {
      "uz": "Audit tizimi har qanday 'Transaction' turini bir xil qabul qilib, uning 'logDetails()'ini yozib boradi.",
      "en": "In Uzum & Payme FinTech ecosystem: Audit tizimi har qanday 'Transaction' turini bir xil qabul qilib, uning 'logDetails()'ini yozib boradi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Audit tizimi har qanday 'Transaction' turini bir xil qabul qilib, uning 'logDetails()'ini yozib boradi."
    },
    "steps": {
      "uz": [
        "<code>Transaction</code> (logDetails -> \"[TX]\").",
        "<code>CardTransaction</code> (\"[KARTA TO'LOVI]\").",
        "<code>AuditLogger.audit(Transaction t)</code> chaqirib chiqaring: \"Auditor tekshiruvi: [KARTA TO'LOVI]\"."
      ],
      "en": [
        "<code>Transaction</code> (logDetails -> \"[TX]\").",
        "<code>CardTransaction</code> (\"[KARTA TO'LOVI]\").",
        "<code>AuditLogger.audit(Transaction t)</code> chaqirib print to console: \"Auditor tekshiruvi: [KARTA TO'LOVI]\"."
      ],
      "ru": [
        "<code>Transaction</code> (logDetails -> \"[TX]\").",
        "<code>CardTransaction</code> (\"[KARTA TO'LOVI]\").",
        "<code>AuditLogger.audit(Transaction t)</code> chaqirib выведите в консоль: \"Auditor tekshiruvi: [KARTA TO'LOVI]\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nAudit tizimi har qanday 'Transaction' turini bir xil qabul qilib, uning 'logDetails()'ini yozib boradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. Transaction (logDetails -> \"[TX]\").\n2. CardTransaction (\"[KARTA TO'LOVI]\").\n3. AuditLogger.audit(Transaction t) chaqirib chiqaring: \"Auditor tekshiruvi: [KARTA TO'LOVI]\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Audit tizimi har qanday 'Transaction' turini bir xil qabul qilib, uning 'logDetails()'ini yozib boradi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. Transaction (logDetails -> \"[TX]\").\n2. CardTransaction (\"[KARTA TO'LOVI]\").\n3. AuditLogger.audit(Transaction t) chaqirib print to console: \"Auditor tekshiruvi: [KARTA TO'LOVI]\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Audit tizimi har qanday 'Transaction' turini bir xil qabul qilib, uning 'logDetails()'ini yozib boradi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. Transaction (logDetails -> \"[TX]\").\n2. CardTransaction (\"[KARTA TO'LOVI]\").\n3. AuditLogger.audit(Transaction t) chaqirib выведите в консоль: \"Auditor tekshiruvi: [KARTA TO'LOVI]\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 30. 📊 Tranzaksiyalar Auditi (Master Polimorfizm)",
      "Kutilayotgan natija: Auditor tekshiruvi: [KARTA TO'LOVI]"
    ],
    "starterCode": "",
    "solution": "class Transaction {\n    public String logDetails() { return \"[TX]\"; }\n}\n\nclass CardTransaction extends Transaction {\n    @Override\n    public String logDetails() {\n        return \"[KARTA TO'LOVI]\";\n    }\n}\n\nclass AuditLogger {\n    public void audit(Transaction t) {\n        System.out.println(\"Auditor tekshiruvi: \" + t.logDetails());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuditLogger logger = new AuditLogger();\n        logger.audit(new CardTransaction());\n    }\n}",
    "expectedOutput": "Auditor tekshiruvi: [KARTA TO'LOVI]",
    "detailedSolution": {
      "theory": "Polimorfizm (Polymorphism) — bitta umumiy ota interfeys yoki ko'rsatkich (masalan, PaymentMethod) orqali turli xil obyektlarning (Humo, Uzcard, Nasiya, Click) xos metodlarini dinamik tarzda (Runtime Dynamic Dispatch) chaqira olish qobiliyatidir.",
      "theoryEn": "Polymorphism enables a single reference type (such as PaymentMethod) to invoke overridden behaviors across diverse derived instances at runtime.",
      "theoryRu": "Полиморфизм позволяет единому интерфейсу или ссылочному типу работать с различными конкретными реализациями во время выполнения программы.",
      "cleanCode": "class Transaction {\n    public String logDetails() { return \"[TX]\"; }\n}\n\nclass CardTransaction extends Transaction {\n    @Override\n    public String logDetails() {\n        return \"[KARTA TO'LOVI]\";\n    }\n}\n\nclass AuditLogger {\n    public void audit(Transaction t) {\n        System.out.println(\"Auditor tekshiruvi: \" + t.logDetails());\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        AuditLogger logger = new AuditLogger();\n        logger.audit(new CardTransaction());\n    }\n}",
      "breakdown": [
        "<code>Transaction, CardTransaction, AuditLogger, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>logDetails, audit</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Auditor tekshiruvi: [KARTA TO'LOVI]"
      ],
      "breakdownRu": [
        "<code>Transaction, CardTransaction, AuditLogger, Main</code>: Классы архитектуры задачи.",
        "<code>logDetails, audit</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Auditor tekshiruvi: [KARTA TO'LOVI]"
      ],
      "pitfalls": "@Override annotatsiyasini yozishda metod imzosi (nomi va parametrlari) ota metod bilan 100% bir xil bo'lishi shart.",
      "cw2Tip": "Assessment 2 da xarid to'lovlarini (PaymentStrategy / Strategy Pattern) polimorfik boshqarish eng yuqori ball beradi."
    }
  },
  {
    "id": 31,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "31. 🏛️ Abstrakt Klass — abstract class Account",
      "en": "31. Abstract Account",
      "ru": "31. Абстрактный счет"
    },
    "story": {
      "uz": "'abstract class Account' obyekt ochishga ruxsat bermaydi, faqat 'abstract double getInterestRate()' qoidasini belgilaydi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'abstract class Account' obyekt ochishga ruxsat bermaydi, faqat 'abstract double getInterestRate()' qoidasini belgilaydi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'abstract class Account' obyekt ochishga ruxsat bermaydi, faqat 'abstract double getInterestRate()' qoidasini belgilaydi."
    },
    "steps": {
      "uz": [
        "<code>abstract class Account</code>da <code>abstract double getInterestRate();</code>.",
        "<code>SavingsAccount extends Account</code>da foiz stavkasini 18.0 deb qaytaring.",
        "<code>Main</code>da chiqaring: \"Omonat foizi: 18.0%\"."
      ],
      "en": [
        "<code>abstract class Account</code>da <code>abstract double getInterestRate();</code>.",
        "<code>SavingsAccount extends Account</code>da foiz stavkasini 18.0 deb qaytaring.",
        "<code>Main</code>da print to console: \"Omonat foizi: 18.0%\"."
      ],
      "ru": [
        "<code>abstract class Account</code>da <code>abstract double getInterestRate();</code>.",
        "<code>SavingsAccount extends Account</code>da foiz stavkasini 18.0 deb qaytaring.",
        "<code>Main</code>da выведите в консоль: \"Omonat foizi: 18.0%\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'abstract class Account' obyekt ochishga ruxsat bermaydi, faqat 'abstract double getInterestRate()' qoidasini belgilaydi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. abstract class Accountda abstract double getInterestRate();.\n2. SavingsAccount extends Accountda foiz stavkasini 18.0 deb qaytaring.\n3. Mainda chiqaring: \"Omonat foizi: 18.0%\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'abstract class Account' obyekt ochishga ruxsat bermaydi, faqat 'abstract double getInterestRate()' qoidasini belgilaydi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. abstract class Accountda abstract double getInterestRate();.\n2. SavingsAccount extends Accountda foiz stavkasini 18.0 deb qaytaring.\n3. Mainda print to console: \"Omonat foizi: 18.0%\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'abstract class Account' obyekt ochishga ruxsat bermaydi, faqat 'abstract double getInterestRate()' qoidasini belgilaydi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. abstract class Accountda abstract double getInterestRate();.\n2. SavingsAccount extends Accountda foiz stavkasini 18.0 deb qaytaring.\n3. Mainda выведите в консоль: \"Omonat foizi: 18.0%\"."
    },
    "requirements": {
      "classes": [
        "Account",
        "SavingsAccount",
        "Main"
      ],
      "methods": [
        "getInterestRate"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 31. 🏛️ Abstrakt Klass — abstract class Account",
      "Kutilayotgan natija: Omonat foizi: 18.0%"
    ],
    "starterCode": "",
    "solution": "abstract class Account {\n    public abstract double getInterestRate();\n}\n\nclass SavingsAccount extends Account {\n    @Override\n    public double getInterestRate() {\n        return 18.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Account acc = new SavingsAccount();\n        System.out.println(\"Omonat foizi: \" + acc.getInterestRate() + \"%\");\n    }\n}",
    "expectedOutput": "Omonat foizi: 18.0%",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "abstract class Account {\n    public abstract double getInterestRate();\n}\n\nclass SavingsAccount extends Account {\n    @Override\n    public double getInterestRate() {\n        return 18.0;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Account acc = new SavingsAccount();\n        System.out.println(\"Omonat foizi: \" + acc.getInterestRate() + \"%\");\n    }\n}",
      "breakdown": [
        "<code>Account, SavingsAccount, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>getInterestRate</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Omonat foizi: 18.0%"
      ],
      "breakdownRu": [
        "<code>Account, SavingsAccount, Main</code>: Классы архитектуры задачи.",
        "<code>getInterestRate</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Omonat foizi: 18.0%"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 32,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "32. 📜 interface Payable — To'lov Shartnomasi",
      "en": "32. Interface Payable",
      "ru": "32. Интерфейс Payable"
    },
    "story": {
      "uz": "'interface Payable' har qanday to'lov vositasi bajarishi shart bo'lgan 'void pay' metodini talab qiladi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'interface Payable' har qanday to'lov vositasi bajarishi shart bo'lgan 'void pay' metodini talab qiladi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'interface Payable' har qanday to'lov vositasi bajarishi shart bo'lgan 'void pay' metodini talab qiladi."
    },
    "steps": {
      "uz": [
        "<code>interface Payable</code>da <code>void pay(double amount);</code>.",
        "<code>CardPayment implements Payable</code>.",
        "<code>Main</code>da 50,000 to<code>lang: \"Payable orqali to</code>landi: 50000.0\"."
      ],
      "en": [
        "<code>interface Payable</code>da <code>void pay(double amount);</code>.",
        "<code>CardPayment implements Payable</code>.",
        "<code>Main</code>da 50,000 to<code>lang: \"Payable orqali to</code>landi: 50000.0\"."
      ],
      "ru": [
        "<code>interface Payable</code>da <code>void pay(double amount);</code>.",
        "<code>CardPayment implements Payable</code>.",
        "<code>Main</code>da 50,000 to<code>lang: \"Payable orqali to</code>landi: 50000.0\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'interface Payable' har qanday to'lov vositasi bajarishi shart bo'lgan 'void pay' metodini talab qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. interface Payableda void pay(double amount);.\n2. CardPayment implements Payable.\n3. Mainda 50,000 tolang: \"Payable orqali tolandi: 50000.0\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'interface Payable' har qanday to'lov vositasi bajarishi shart bo'lgan 'void pay' metodini talab qiladi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. interface Payableda void pay(double amount);.\n2. CardPayment implements Payable.\n3. Mainda 50,000 tolang: \"Payable orqali tolandi: 50000.0\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'interface Payable' har qanday to'lov vositasi bajarishi shart bo'lgan 'void pay' metodini talab qiladi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. interface Payableda void pay(double amount);.\n2. CardPayment implements Payable.\n3. Mainda 50,000 tolang: \"Payable orqali tolandi: 50000.0\"."
    },
    "requirements": {
      "classes": [
        "Payable",
        "CardPayment",
        "Main"
      ],
      "methods": [
        "pay"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "sampleData": [
      "Amal: 32. 📜 interface Payable — To'lov Shartnomasi",
      "Kutilayotgan natija: Payable orqali to'landi: 50000.0"
    ],
    "starterCode": "",
    "solution": "interface Payable {\n    void pay(double amount);\n}\n\nclass CardPayment implements Payable {\n    @Override\n    public void pay(double amount) {\n        System.out.println(\"Payable orqali to'landi: \" + amount);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable p = new CardPayment();\n        p.pay(50000.0);\n    }\n}",
    "expectedOutput": "Payable orqali to'landi: 50000.0",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface Payable {\n    void pay(double amount);\n}\n\nclass CardPayment implements Payable {\n    @Override\n    public void pay(double amount) {\n        System.out.println(\"Payable orqali to'landi: \" + amount);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Payable p = new CardPayment();\n        p.pay(50000.0);\n    }\n}",
      "breakdown": [
        "<code>Payable, CardPayment, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Payable orqali to'landi: 50000.0"
      ],
      "breakdownRu": [
        "<code>Payable, CardPayment, Main</code>: Классы архитектуры задачи.",
        "<code>pay</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Payable orqali to'landi: 50000.0"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 33,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "33. 🔄 interface Refundable — Pulni Qaytarish (Refund)",
      "en": "33. Interface Refundable",
      "ru": "33. Интерфейс Refundable"
    },
    "story": {
      "uz": "'interface Refundable' 'void refund;' shartnomasini taqdim etadi.",
      "en": "In Uzum & Payme FinTech ecosystem: 'interface Refundable' 'void refund;' shartnomasini taqdim etadi.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'interface Refundable' 'void refund;' shartnomasini taqdim etadi."
    },
    "steps": {
      "uz": [
        "<code>interface Refundable</code>.",
        "<code>OnlineStore implements Refundable</code>.",
        "<code>Main</code>da 20,000 qaytaring: \"Mablag<code> qaytarildi: 20000.0 so</code>m\"."
      ],
      "en": [
        "<code>interface Refundable</code>.",
        "<code>OnlineStore implements Refundable</code>.",
        "<code>Main</code>da 20,000 qaytaring: \"Mablag<code> qaytarildi: 20000.0 so</code>m\"."
      ],
      "ru": [
        "<code>interface Refundable</code>.",
        "<code>OnlineStore implements Refundable</code>.",
        "<code>Main</code>da 20,000 qaytaring: \"Mablag<code> qaytarildi: 20000.0 so</code>m\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'interface Refundable' 'void refund;' shartnomasini taqdim etadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. interface Refundable.\n2. OnlineStore implements Refundable.\n3. Mainda 20,000 qaytaring: \"Mablag qaytarildi: 20000.0 som\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'interface Refundable' 'void refund;' shartnomasini taqdim etadi.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. interface Refundable.\n2. OnlineStore implements Refundable.\n3. Mainda 20,000 qaytaring: \"Mablag qaytarildi: 20000.0 som\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'interface Refundable' 'void refund;' shartnomasini taqdim etadi.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. interface Refundable.\n2. OnlineStore implements Refundable.\n3. Mainda 20,000 qaytaring: \"Mablag qaytarildi: 20000.0 som\"."
    },
    "requirements": {
      "classes": [
        "Refundable",
        "OnlineStore",
        "Main"
      ],
      "methods": [
        "refund"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "sampleData": [
      "Amal: 33. 🔄 interface Refundable — Pulni Qaytarish (Refund)",
      "Kutilayotgan natija: Mablag' qaytarildi: 20000.0 so'm"
    ],
    "starterCode": "",
    "solution": "interface Refundable {\n    void refund(double amount);\n}\n\nclass OnlineStore implements Refundable {\n    @Override\n    public void refund(double amount) {\n        System.out.println(\"Mablag' qaytarildi: \" + amount + \" so'm\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Refundable ref = new OnlineStore();\n        ref.refund(20000.0);\n    }\n}",
    "expectedOutput": "Mablag' qaytarildi: 20000.0 so'm",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface Refundable {\n    void refund(double amount);\n}\n\nclass OnlineStore implements Refundable {\n    @Override\n    public void refund(double amount) {\n        System.out.println(\"Mablag' qaytarildi: \" + amount + \" so'm\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Refundable ref = new OnlineStore();\n        ref.refund(20000.0);\n    }\n}",
      "breakdown": [
        "<code>Refundable, OnlineStore, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>refund</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Mablag' qaytarildi: 20000.0 so'm"
      ],
      "breakdownRu": [
        "<code>Refundable, OnlineStore, Main</code>: Классы архитектуры задачи.",
        "<code>refund</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Mablag' qaytarildi: 20000.0 so'm"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 34,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "34. 🔀 Ko'p Interfeyslarni Qo'llash (Multiple Interfaces)",
      "en": "34. Multiple Interfaces",
      "ru": "34. Множественные интерфейсы"
    },
    "story": {
      "uz": "Java'da bitta klass bir vaqtning o'zida 'Payable' va 'Refundable' interfeyslarini qo'llashi mumkin!",
      "en": "In Uzum & Payme FinTech ecosystem: Java'da bitta klass bir vaqtning o'zida 'Payable' va 'Refundable' interfeyslarini qo'llashi mumkin!",
      "ru": "В экосистеме Uzum & Payme FinTech: Java'da bitta klass bir vaqtning o'zida 'Payable' va 'Refundable' interfeyslarini qo'llashi mumkin!"
    },
    "steps": {
      "uz": [
        "<code>class ModernTerminal implements Payable, Refundable</code>.",
        "Ikkala metodni yozing.",
        "<code>Main</code>da ikkalasini chaqirib chiqaring."
      ],
      "en": [
        "<code>class ModernTerminal implements Payable, Refundable</code>.",
        "Ikkala metodni yozing.",
        "<code>Main</code>da ikkalasini chaqirib print to console."
      ],
      "ru": [
        "<code>class ModernTerminal implements Payable, Refundable</code>.",
        "Ikkala metodni yozing.",
        "<code>Main</code>da ikkalasini chaqirib выведите в консоль."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nJava'da bitta klass bir vaqtning o'zida 'Payable' va 'Refundable' interfeyslarini qo'llashi mumkin!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. class ModernTerminal implements Payable, Refundable.\n2. Ikkala metodni yozing.\n3. Mainda ikkalasini chaqirib chiqaring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Java'da bitta klass bir vaqtning o'zida 'Payable' va 'Refundable' interfeyslarini qo'llashi mumkin!\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. class ModernTerminal implements Payable, Refundable.\n2. Ikkala metodni yozing.\n3. Mainda ikkalasini chaqirib print to console.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Java'da bitta klass bir vaqtning o'zida 'Payable' va 'Refundable' interfeyslarini qo'llashi mumkin!\n\n📋 Пошаговые задачи (от 1 до 3)\n1. class ModernTerminal implements Payable, Refundable.\n2. Ikkala metodni yozing.\n3. Mainda ikkalasini chaqirib выведите в консоль."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "implements",
        "interface"
      ]
    },
    "sampleData": [
      "Amal: 34. 🔀 Ko'p Interfeyslarni Qo'llash (Multiple Interfaces)",
      "Kutilayotgan natija: To'landi: 30000.0 Qaytarildi: 10000.0"
    ],
    "starterCode": "",
    "solution": "interface Payable { void pay(double a); }\ninterface Refundable { void refund(double a); }\n\nclass ModernTerminal implements Payable, Refundable {\n    @Override\n    public void pay(double a) { System.out.println(\"To'landi: \" + a); }\n    @Override\n    public void refund(double a) { System.out.println(\"Qaytarildi: \" + a); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModernTerminal mt = new ModernTerminal();\n        mt.pay(30000.0);\n        mt.refund(10000.0);\n    }\n}",
    "expectedOutput": "To'landi: 30000.0\nQaytarildi: 10000.0",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface Payable { void pay(double a); }\ninterface Refundable { void refund(double a); }\n\nclass ModernTerminal implements Payable, Refundable {\n    @Override\n    public void pay(double a) { System.out.println(\"To'landi: \" + a); }\n    @Override\n    public void refund(double a) { System.out.println(\"Qaytarildi: \" + a); }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ModernTerminal mt = new ModernTerminal();\n        mt.pay(30000.0);\n        mt.refund(10000.0);\n    }\n}",
      "breakdown": [
        "<code>Payable, Refundable, ModernTerminal, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay, refund</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: To'landi: 30000.0\nQaytarildi: 10000.0"
      ],
      "breakdownRu": [
        "<code>Payable, Refundable, ModernTerminal, Main</code>: Классы архитектуры задачи.",
        "<code>pay, refund</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: To'landi: 30000.0\nQaytarildi: 10000.0"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 35,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "35. 🔔 interface Notifiable — Xabarnoma Standarti",
      "en": "35. Interface Notifiable",
      "ru": "35. Интерфейс Notifiable"
    },
    "story": {
      "uz": "'interface Notifiable' har qanday xabarnoma tizimi uchun yagona shartnoma: 'void sendAlert;'.",
      "en": "In Uzum & Payme FinTech ecosystem: 'interface Notifiable' har qanday xabarnoma tizimi uchun yagona shartnoma: 'void sendAlert;'.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'interface Notifiable' har qanday xabarnoma tizimi uchun yagona shartnoma: 'void sendAlert;'."
    },
    "steps": {
      "uz": [
        "<code>interface Notifiable</code>.",
        "<code>PushService implements Notifiable</code>.",
        "<code>Main</code>da chiqaring: \"ALERT: Parol o'zgartirildi\"."
      ],
      "en": [
        "<code>interface Notifiable</code>.",
        "<code>PushService implements Notifiable</code>.",
        "<code>Main</code>da print to console: \"ALERT: Parol o'zgartirildi\"."
      ],
      "ru": [
        "<code>interface Notifiable</code>.",
        "<code>PushService implements Notifiable</code>.",
        "<code>Main</code>da выведите в консоль: \"ALERT: Parol o'zgartirildi\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'interface Notifiable' har qanday xabarnoma tizimi uchun yagona shartnoma: 'void sendAlert;'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. interface Notifiable.\n2. PushService implements Notifiable.\n3. Mainda chiqaring: \"ALERT: Parol o'zgartirildi\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'interface Notifiable' har qanday xabarnoma tizimi uchun yagona shartnoma: 'void sendAlert;'.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. interface Notifiable.\n2. PushService implements Notifiable.\n3. Mainda print to console: \"ALERT: Parol o'zgartirildi\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'interface Notifiable' har qanday xabarnoma tizimi uchun yagona shartnoma: 'void sendAlert;'.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. interface Notifiable.\n2. PushService implements Notifiable.\n3. Mainda выведите в консоль: \"ALERT: Parol o'zgartirildi\"."
    },
    "requirements": {
      "classes": [
        "Notifiable",
        "PushService",
        "Main"
      ],
      "methods": [
        "sendAlert"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "sampleData": [
      "Amal: 35. 🔔 interface Notifiable — Xabarnoma Standarti",
      "Kutilayotgan natija: ALERT: Parol o'zgartirildi"
    ],
    "starterCode": "",
    "solution": "interface Notifiable {\n    void sendAlert(String msg);\n}\n\nclass PushService implements Notifiable {\n    @Override\n    public void sendAlert(String msg) {\n        System.out.println(\"ALERT: \" + msg);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notifiable n = new PushService();\n        n.sendAlert(\"Parol o'zgartirildi\");\n    }\n}",
    "expectedOutput": "ALERT: Parol o'zgartirildi",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface Notifiable {\n    void sendAlert(String msg);\n}\n\nclass PushService implements Notifiable {\n    @Override\n    public void sendAlert(String msg) {\n        System.out.println(\"ALERT: \" + msg);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notifiable n = new PushService();\n        n.sendAlert(\"Parol o'zgartirildi\");\n    }\n}",
      "breakdown": [
        "<code>Notifiable, PushService, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>sendAlert</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: ALERT: Parol o'zgartirildi"
      ],
      "breakdownRu": [
        "<code>Notifiable, PushService, Main</code>: Классы архитектуры задачи.",
        "<code>sendAlert</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: ALERT: Parol o'zgartirildi"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 36,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "36. 🏷️ interface Discountable — Chegirma Modullari",
      "en": "36. Interface Discountable",
      "ru": "36. Интерфейс Discountable"
    },
    "story": {
      "uz": "'interface Discountable' xaridlarga chegirma berish qoidasini e'lon qiladi: 'double calculateDiscount;'.",
      "en": "In Uzum & Payme FinTech ecosystem: 'interface Discountable' xaridlarga chegirma berish qoidasini e'lon qiladi: 'double calculateDiscount;'.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'interface Discountable' xaridlarga chegirma berish qoidasini e'lon qiladi: 'double calculateDiscount;'."
    },
    "steps": {
      "uz": [
        "<code>interface Discountable</code>.",
        "<code>StudentDiscount implements Discountable</code> (amount * 0.20 qaytarsin).",
        "<code>Main</code>da 100,000 dan 20,000 chegirma oling."
      ],
      "en": [
        "<code>interface Discountable</code>.",
        "<code>StudentDiscount implements Discountable</code> (amount * 0.20 qaytarsin).",
        "<code>Main</code>da 100,000 dan 20,000 chegirma oling."
      ],
      "ru": [
        "<code>interface Discountable</code>.",
        "<code>StudentDiscount implements Discountable</code> (amount * 0.20 qaytarsin).",
        "<code>Main</code>da 100,000 dan 20,000 chegirma oling."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'interface Discountable' xaridlarga chegirma berish qoidasini e'lon qiladi: 'double calculateDiscount;'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. interface Discountable.\n2. StudentDiscount implements Discountable (amount * 0.20 qaytarsin).\n3. Mainda 100,000 dan 20,000 chegirma oling.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'interface Discountable' xaridlarga chegirma berish qoidasini e'lon qiladi: 'double calculateDiscount;'.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. interface Discountable.\n2. StudentDiscount implements Discountable (amount * 0.20 qaytarsin).\n3. Mainda 100,000 dan 20,000 chegirma oling.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'interface Discountable' xaridlarga chegirma berish qoidasini e'lon qiladi: 'double calculateDiscount;'.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. interface Discountable.\n2. StudentDiscount implements Discountable (amount * 0.20 qaytarsin).\n3. Mainda 100,000 dan 20,000 chegirma oling."
    },
    "requirements": {
      "classes": [
        "Discountable",
        "StudentDiscount",
        "Main"
      ],
      "methods": [
        "calculateDiscount"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "sampleData": [
      "Amal: 36. 🏷️ interface Discountable — Chegirma Modullari",
      "Kutilayotgan natija: Chegirma summasi: 20000.0 so'm"
    ],
    "starterCode": "",
    "solution": "interface Discountable {\n    double calculateDiscount(double amount);\n}\n\nclass StudentDiscount implements Discountable {\n    @Override\n    public double calculateDiscount(double amount) {\n        return amount * 0.20;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Discountable d = new StudentDiscount();\n        System.out.println(\"Chegirma summasi: \" + d.calculateDiscount(100000.0) + \" so'm\");\n    }\n}",
    "expectedOutput": "Chegirma summasi: 20000.0 so'm",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface Discountable {\n    double calculateDiscount(double amount);\n}\n\nclass StudentDiscount implements Discountable {\n    @Override\n    public double calculateDiscount(double amount) {\n        return amount * 0.20;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Discountable d = new StudentDiscount();\n        System.out.println(\"Chegirma summasi: \" + d.calculateDiscount(100000.0) + \" so'm\");\n    }\n}",
      "breakdown": [
        "<code>Discountable, StudentDiscount, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>calculateDiscount</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Chegirma summasi: 20000.0 so'm"
      ],
      "breakdownRu": [
        "<code>Discountable, StudentDiscount, Main</code>: Классы архитектуры задачи.",
        "<code>calculateDiscount</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Chegirma summasi: 20000.0 so'm"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 37,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "37. 🔌 Loose Coupling — Bo'sh Bog'lanish Arxitekturasi",
      "en": "37. Loose Coupling",
      "ru": "37. Слабая связанность"
    },
    "story": {
      "uz": "'CheckoutService' aniq kartaga emas, faqat 'Payable' interfeysiga bog'lanadi. Bu — arxitekturaning eng yuqori darajasi!",
      "en": "In Uzum & Payme FinTech ecosystem: 'CheckoutService' aniq kartaga emas, faqat 'Payable' interfeysiga bog'lanadi. Bu — arxitekturaning eng yuqori darajasi!",
      "ru": "В экосистеме Uzum & Payme FinTech: 'CheckoutService' aniq kartaga emas, faqat 'Payable' interfeysiga bog'lanadi. Bu — arxitekturaning eng yuqori darajasi!"
    },
    "steps": {
      "uz": [
        "<code>CheckoutService</code> ichida <code>public void checkout(Payable p, double sum) { p.pay(sum); }</code>.",
        "<code>Main</code>da <code>checkout</code> chaqiring: \"To'landi: 75000.0\"."
      ],
      "en": [
        "<code>CheckoutService</code> ichida <code>public void checkout(Payable p, double sum) { p.pay(sum); }</code>.",
        "<code>Main</code>da <code>checkout</code> chaqiring: \"To'landi: 75000.0\"."
      ],
      "ru": [
        "<code>CheckoutService</code> ichida <code>public void checkout(Payable p, double sum) { p.pay(sum); }</code>.",
        "<code>Main</code>da <code>checkout</code> chaqiring: \"To'landi: 75000.0\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'CheckoutService' aniq kartaga emas, faqat 'Payable' interfeysiga bog'lanadi. Bu — arxitekturaning eng yuqori darajasi!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. CheckoutService ichida public void checkout(Payable p, double sum) { p.pay(sum); }.\n2. Mainda checkout chaqiring: \"To'landi: 75000.0\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'CheckoutService' aniq kartaga emas, faqat 'Payable' interfeysiga bog'lanadi. Bu — arxitekturaning eng yuqori darajasi!\n\n[Step-by-Step Implementation Tasks (1 to 2)]\n1. CheckoutService ichida public void checkout(Payable p, double sum) { p.pay(sum); }.\n2. Mainda checkout chaqiring: \"To'landi: 75000.0\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'CheckoutService' aniq kartaga emas, faqat 'Payable' interfeysiga bog'lanadi. Bu — arxitekturaning eng yuqori darajasi!\n\n📋 Пошаговые задачи (от 1 до 2)\n1. CheckoutService ichida public void checkout(Payable p, double sum) { p.pay(sum); }.\n2. Mainda checkout chaqiring: \"To'landi: 75000.0\"."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "sampleData": [
      "Amal: 37. 🔌 Loose Coupling — Bo'sh Bog'lanish Arxitekturasi",
      "Kutilayotgan natija: To'landi: 75000.0"
    ],
    "starterCode": "",
    "solution": "interface Payable { void pay(double sum); }\n\nclass CardPay implements Payable {\n    @Override\n    public void pay(double sum) { System.out.println(\"To'landi: \" + sum); }\n}\n\nclass CheckoutService {\n    public void checkout(Payable p, double sum) {\n        p.pay(sum);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckoutService cs = new CheckoutService();\n        cs.checkout(new CardPay(), 75000.0);\n    }\n}",
    "expectedOutput": "To'landi: 75000.0",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface Payable { void pay(double sum); }\n\nclass CardPay implements Payable {\n    @Override\n    public void pay(double sum) { System.out.println(\"To'landi: \" + sum); }\n}\n\nclass CheckoutService {\n    public void checkout(Payable p, double sum) {\n        p.pay(sum);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CheckoutService cs = new CheckoutService();\n        cs.checkout(new CardPay(), 75000.0);\n    }\n}",
      "breakdown": [
        "<code>Payable, CardPay, CheckoutService, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay, checkout</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: To'landi: 75000.0"
      ],
      "breakdownRu": [
        "<code>Payable, CardPay, CheckoutService, Main</code>: Классы архитектуры задачи.",
        "<code>pay, checkout</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: To'landi: 75000.0"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 38,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "38. 📋 Template Method — abstract class BaseOrder",
      "en": "38. Template Method Order",
      "ru": "38. Шаблонный метод"
    },
    "story": {
      "uz": "'abstract class BaseOrder' buyurtma berish algoritmining qadamlarini belgilaydi: 'validate()', keyin 'abstract void deliver()'.",
      "en": "In Uzum & Payme FinTech ecosystem: 'abstract class BaseOrder' buyurtma berish algoritmining qadamlarini belgilaydi: 'validate()', keyin 'abstract void deliver()'.",
      "ru": "В экосистеме Uzum & Payme FinTech: 'abstract class BaseOrder' buyurtma berish algoritmining qadamlarini belgilaydi: 'validate()', keyin 'abstract void deliver()'."
    },
    "steps": {
      "uz": [
        "<code>abstract class BaseOrder</code>da <code>public void process() { validate(); deliver(); }</code>, <code>abstract void deliver();</code>.",
        "<code>FastOrder extends BaseOrder</code>da <code>deliver</code>ni \"Tezkor yetkazildi\" qilib yozing.",
        "<code>Main</code>da <code>process()</code> chaqiring."
      ],
      "en": [
        "<code>abstract class BaseOrder</code>da <code>public void process() { validate(); deliver(); }</code>, <code>abstract void deliver();</code>.",
        "<code>FastOrder extends BaseOrder</code>da <code>deliver</code>ni \"Tezkor yetkazildi\" qilib yozing.",
        "<code>Main</code>da <code>process()</code> chaqiring."
      ],
      "ru": [
        "<code>abstract class BaseOrder</code>da <code>public void process() { validate(); deliver(); }</code>, <code>abstract void deliver();</code>.",
        "<code>FastOrder extends BaseOrder</code>da <code>deliver</code>ni \"Tezkor yetkazildi\" qilib yozing.",
        "<code>Main</code>da <code>process()</code> chaqiring."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\n'abstract class BaseOrder' buyurtma berish algoritmining qadamlarini belgilaydi: 'validate()', keyin 'abstract void deliver()'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. abstract class BaseOrderda public void process() { validate(); deliver(); }, abstract void deliver();.\n2. FastOrder extends BaseOrderda deliverni \"Tezkor yetkazildi\" qilib yozing.\n3. Mainda process() chaqiring.",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: 'abstract class BaseOrder' buyurtma berish algoritmining qadamlarini belgilaydi: 'validate()', keyin 'abstract void deliver()'.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. abstract class BaseOrderda public void process() { validate(); deliver(); }, abstract void deliver();.\n2. FastOrder extends BaseOrderda deliverni \"Tezkor yetkazildi\" qilib yozing.\n3. Mainda process() chaqiring.",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: 'abstract class BaseOrder' buyurtma berish algoritmining qadamlarini belgilaydi: 'validate()', keyin 'abstract void deliver()'.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. abstract class BaseOrderda public void process() { validate(); deliver(); }, abstract void deliver();.\n2. FastOrder extends BaseOrderda deliverni \"Tezkor yetkazildi\" qilib yozing.\n3. Mainda process() chaqiring."
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "abstract",
        "extends"
      ]
    },
    "sampleData": [
      "Amal: 38. 📋 Template Method — abstract class BaseOrder",
      "Kutilayotgan natija: Tekshirildi Tezkor yetkazildi"
    ],
    "starterCode": "",
    "solution": "abstract class BaseOrder {\n    public void validate() { System.out.println(\"Tekshirildi\"); }\n    public abstract void deliver();\n    public void process() { validate(); deliver(); }\n}\n\nclass FastOrder extends BaseOrder {\n    @Override\n    public void deliver() {\n        System.out.println(\"Tezkor yetkazildi\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FastOrder fo = new FastOrder();\n        fo.process();\n    }\n}",
    "expectedOutput": "Tekshirildi\nTezkor yetkazildi",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "abstract class BaseOrder {\n    public void validate() { System.out.println(\"Tekshirildi\"); }\n    public abstract void deliver();\n    public void process() { validate(); deliver(); }\n}\n\nclass FastOrder extends BaseOrder {\n    @Override\n    public void deliver() {\n        System.out.println(\"Tezkor yetkazildi\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        FastOrder fo = new FastOrder();\n        fo.process();\n    }\n}",
      "breakdown": [
        "<code>BaseOrder, FastOrder, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>deliver, process</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Tekshirildi\nTezkor yetkazildi"
      ],
      "breakdownRu": [
        "<code>BaseOrder, FastOrder, Main</code>: Классы архитектуры задачи.",
        "<code>deliver, process</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Tekshirildi\nTezkor yetkazildi"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 39,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "39. 👁️ interface BiometricVerifiable — FaceID Shartnomasi",
      "en": "39. Biometric Interface",
      "ru": "39. Биометрический интерфейс"
    },
    "story": {
      "uz": "FaceID orqali shaxsni tasdiqlash uchun interfeys: 'boolean verifyFace;'.",
      "en": "In Uzum & Payme FinTech ecosystem: FaceID orqali shaxsni tasdiqlash uchun interfeys: 'boolean verifyFace;'.",
      "ru": "В экосистеме Uzum & Payme FinTech: FaceID orqali shaxsni tasdiqlash uchun interfeys: 'boolean verifyFace;'."
    },
    "steps": {
      "uz": [
        "<code>interface BiometricVerifiable</code>.",
        "<code>PhoneBiometrics implements BiometricVerifiable</code> (true qaytarsin).",
        "<code>Main</code>da chiqaring: \"FaceID tasdiqlandi: true\"."
      ],
      "en": [
        "<code>interface BiometricVerifiable</code>.",
        "<code>PhoneBiometrics implements BiometricVerifiable</code> (true qaytarsin).",
        "<code>Main</code>da print to console: \"FaceID tasdiqlandi: true\"."
      ],
      "ru": [
        "<code>interface BiometricVerifiable</code>.",
        "<code>PhoneBiometrics implements BiometricVerifiable</code> (true qaytarsin).",
        "<code>Main</code>da выведите в консоль: \"FaceID tasdiqlandi: true\"."
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nFaceID orqali shaxsni tasdiqlash uchun interfeys: 'boolean verifyFace;'.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. interface BiometricVerifiable.\n2. PhoneBiometrics implements BiometricVerifiable (true qaytarsin).\n3. Mainda chiqaring: \"FaceID tasdiqlandi: true\".",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: FaceID orqali shaxsni tasdiqlash uchun interfeys: 'boolean verifyFace;'.\n\n[Step-by-Step Implementation Tasks (1 to 3)]\n1. interface BiometricVerifiable.\n2. PhoneBiometrics implements BiometricVerifiable (true qaytarsin).\n3. Mainda print to console: \"FaceID tasdiqlandi: true\".",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: FaceID orqali shaxsni tasdiqlash uchun interfeys: 'boolean verifyFace;'.\n\n📋 Пошаговые задачи (от 1 до 3)\n1. interface BiometricVerifiable.\n2. PhoneBiometrics implements BiometricVerifiable (true qaytarsin).\n3. Mainda выведите в консоль: \"FaceID tasdiqlandi: true\"."
    },
    "requirements": {
      "classes": [
        "BiometricVerifiable",
        "PhoneBiometrics",
        "Main"
      ],
      "methods": [
        "verifyFace"
      ],
      "constructors": [],
      "fields": [],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "sampleData": [
      "Amal: 39. 👁️ interface BiometricVerifiable — FaceID Shartnomasi",
      "Kutilayotgan natija: FaceID tasdiqlandi: true"
    ],
    "starterCode": "",
    "solution": "interface BiometricVerifiable {\n    boolean verifyFace(String faceData);\n}\n\nclass PhoneBiometrics implements BiometricVerifiable {\n    @Override\n    public boolean verifyFace(String faceData) {\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BiometricVerifiable bv = new PhoneBiometrics();\n        System.out.println(\"FaceID tasdiqlandi: \" + bv.verifyFace(\"user_face_hash\"));\n    }\n}",
    "expectedOutput": "FaceID tasdiqlandi: true",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface BiometricVerifiable {\n    boolean verifyFace(String faceData);\n}\n\nclass PhoneBiometrics implements BiometricVerifiable {\n    @Override\n    public boolean verifyFace(String faceData) {\n        return true;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BiometricVerifiable bv = new PhoneBiometrics();\n        System.out.println(\"FaceID tasdiqlandi: \" + bv.verifyFace(\"user_face_hash\"));\n    }\n}",
      "breakdown": [
        "<code>BiometricVerifiable, PhoneBiometrics, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>verifyFace</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: FaceID tasdiqlandi: true"
      ],
      "breakdownRu": [
        "<code>BiometricVerifiable, PhoneBiometrics, Main</code>: Классы архитектуры задачи.",
        "<code>verifyFace</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: FaceID tasdiqlandi: true"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  },
  {
    "id": 40,
    "tier": 4,
    "tierName": "4-Ustun: ABSTRAKSIYA (Tizim Me'morchiligi)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "40. 🌟 Birlashgan Grand FinTech Arxitekturasi (Master)",
      "en": "40. Grand Architecture",
      "ru": "40. Гранд Архитектура"
    },
    "story": {
      "uz": "Tabriklaymiz! Siz Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraksiyani to'liq egalladingiz! Bu masalada 'interface Payable', 'Customer' va 'Order' bitta mukammal tizimga birlashadi.",
      "en": "In Uzum & Payme FinTech ecosystem: Tabriklaymiz! Siz Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraksiyani to'liq egalladingiz! Bu masalada 'interface Payable', 'Customer' va 'Order' bitta mukammal tizimga birlashadi.",
      "ru": "В экосистеме Uzum & Payme FinTech: Tabriklaymiz! Siz Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraksiyani to'liq egalladingiz! Bu masalada 'interface Payable', 'Customer' va 'Order' bitta mukammal tizimga birlashadi."
    },
    "steps": {
      "uz": [
        "<code>interface Payable</code> (void pay(double s);).",
        "<code>Card implements Payable</code>.",
        "<code>Customer</code> (name).",
        "<code>Order</code>da <code>public void checkout(Customer c, Payable p, double total)</code> metodida:\n\"Mijoz: \" + c.getName() + \" | Jami: \" + total\nva <code>p.pay(total)</code> chaqirilsin.",
        "<code>Main</code>da to'liq arxitekturani ishga tushiring!"
      ],
      "en": [
        "<code>interface Payable</code> (void pay(double s);).",
        "<code>Card implements Payable</code>.",
        "<code>Customer</code> (name).",
        "<code>Order</code>da <code>public void checkout(Customer c, Payable p, double total)</code> metodida:\n\"Mijoz: \" + c.getName() + \" | Jami: \" + total\nva <code>p.pay(total)</code> chaqirilsin.",
        "<code>Main</code>da to'liq arxitekturani ishga tushiring!"
      ],
      "ru": [
        "<code>interface Payable</code> (void pay(double s);).",
        "<code>Card implements Payable</code>.",
        "<code>Customer</code> (name).",
        "<code>Order</code>da <code>public void checkout(Customer c, Payable p, double total)</code> metodida:\n\"Mijoz: \" + c.getName() + \" | Jami: \" + total\nva <code>p.pay(total)</code> chaqirilsin.",
        "<code>Main</code>da to'liq arxitekturani ishga tushiring!"
      ]
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nTabriklaymiz! Siz Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraksiyani to'liq egalladingiz! Bu masalada 'interface Payable', 'Customer' va 'Order' bitta mukammal tizimga birlashadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. interface Payable (void pay(double s);).\n2. Card implements Payable.\n3. Customer (name).\n4. Orderda public void checkout(Customer c, Payable p, double total) metodida:\n\"Mijoz: \" + c.getName() + \" | Jami: \" + total\nva p.pay(total) chaqirilsin.\n5. Mainda to'liq arxitekturani ishga tushiring!",
      "en": "[Real-World Story & Context]\nIn Uzum & Payme FinTech ecosystem: Tabriklaymiz! Siz Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraksiyani to'liq egalladingiz! Bu masalada 'interface Payable', 'Customer' va 'Order' bitta mukammal tizimga birlashadi.\n\n[Step-by-Step Implementation Tasks (1 to 5)]\n1. interface Payable (void pay(double s);).\n2. Card implements Payable.\n3. Customer (name).\n4. Orderda public void checkout(Customer c, Payable p, double total) metodida:\n\"Mijoz: \" + c.getName() + \" | Jami: \" + total\nva p.pay(total) chaqirilsin.\n5. Mainda to'liq arxitekturani ishga tushiring!",
      "ru": "📖 Контекст и описание задачи\nВ экосистеме Uzum & Payme FinTech: Tabriklaymiz! Siz Inkapsulyatsiya, Vorislik, Polimorfizm va Abstraksiyani to'liq egalladingiz! Bu masalada 'interface Payable', 'Customer' va 'Order' bitta mukammal tizimga birlashadi.\n\n📋 Пошаговые задачи (от 1 до 5)\n1. interface Payable (void pay(double s);).\n2. Card implements Payable.\n3. Customer (name).\n4. Orderda public void checkout(Customer c, Payable p, double total) metodida:\n\"Mijoz: \" + c.getName() + \" | Jami: \" + total\nva p.pay(total) chaqirilsin.\n5. Mainda to'liq arxitekturani ishga tushiring!"
    },
    "requirements": {
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
      "fields": [],
      "keywords": [
        "interface",
        "implements"
      ]
    },
    "sampleData": [
      "Amal: 40. 🌟 Birlashgan Grand FinTech Arxitekturasi (Master)",
      "Kutilayotgan natija: Mijoz: Sardor | Jami: 120000.0 Karta orqali to'landi: 120000.0"
    ],
    "starterCode": "",
    "solution": "interface Payable {\n    void pay(double s);\n}\n\nclass Card implements Payable {\n    @Override\n    public void pay(double s) {\n        System.out.println(\"Karta orqali to'landi: \" + s);\n    }\n}\n\nclass Customer {\n    private String name;\n    public Customer(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\nclass Order {\n    public void checkout(Customer c, Payable p, double total) {\n        System.out.println(\"Mijoz: \" + c.getName() + \" | Jami: \" + total);\n        p.pay(total);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Sardor\");\n        Card card = new Card();\n        Order order = new Order();\n        order.checkout(c, card, 120000.0);\n    }\n}",
    "expectedOutput": "Mijoz: Sardor | Jami: 120000.0\nKarta orqali to'landi: 120000.0",
    "detailedSolution": {
      "theory": "Abstraksiya (Abstraction) — tizimning muhim shartnomalari (interface, abstract class) va biznes logikasini aniq amalga oshirish detallaridan ajratish (Loose Coupling), dasturni modulli va kengaytiriladigan qilish tamoyilidir.",
      "theoryEn": "Abstraction separates system contracts (interfaces, abstract classes) from implementation details, enforcing loose coupling and high architectural cohesion.",
      "theoryRu": "Абстракция отделяет концептуальные контракты (интерфейсы, абстрактные классы) от деталей реализации, обеспечивая слабую связанность компонентов.",
      "cleanCode": "interface Payable {\n    void pay(double s);\n}\n\nclass Card implements Payable {\n    @Override\n    public void pay(double s) {\n        System.out.println(\"Karta orqali to'landi: \" + s);\n    }\n}\n\nclass Customer {\n    private String name;\n    public Customer(String name) { this.name = name; }\n    public String getName() { return name; }\n}\n\nclass Order {\n    public void checkout(Customer c, Payable p, double total) {\n        System.out.println(\"Mijoz: \" + c.getName() + \" | Jami: \" + total);\n        p.pay(total);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Sardor\");\n        Card card = new Card();\n        Order order = new Order();\n        order.checkout(c, card, 120000.0);\n    }\n}",
      "breakdown": [
        "<code>Payable, Card, Customer, Order, Main</code>: Tizim arxitekturasi uchun zarur klasslar.",
        "<code>pay, checkout, getName</code>: Berilgan biznes talablari va operatsiyalar.",
        "<code>expectedOutput</code>: Mijoz: Sardor | Jami: 120000.0\nKarta orqali to'landi: 120000.0"
      ],
      "breakdownRu": [
        "<code>Payable, Card, Customer, Order, Main</code>: Классы архитектуры задачи.",
        "<code>pay, checkout, getName</code>: Бизнес-операции и методы.",
        "<code>Результат</code>: Mijoz: Sardor | Jami: 120000.0\nKarta orqali to'landi: 120000.0"
      ],
      "pitfalls": "Abstrakt klasslardan new operatori bilan to'g'ridan-to'g'ri obyekt olib bo'lmaydi; interfeys metodlari odatda 'public abstract' bo'ladi.",
      "cw2Tip": "CW2 loyihasida Service qatlami to'g'ridan-to'g'ri klasslarga emas, faqat interfeyslarga (masalan, Payable, Notifiable) bog'lanishi shart."
    }
  }
];
