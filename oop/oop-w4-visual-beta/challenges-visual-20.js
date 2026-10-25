// WIUT OOP (5COSC018C) — LIVE VISUAL SIMULATOR (20 MASTER PROGRESSIVE CHALLENGES)
// Real-world Applications: Payme / Humo Cards, Uzum Market, Korzinka Cart & Yandex Go
// Author: Professor Ada • Senior Java Architect & Examiner

(typeof window !== 'undefined' ? window : global).OOP_VISUAL_CHALLENGES = [
  {
    "id": 1,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar, Obyektlar va Holat (SmartHome)",
    "appType": "smarthome",
    "simKind": "bulb",
    "title": {
      "uz": "1. 💡 Aqlli Chiroq — Holatni Saqlash va O'zgartirish",
      "en": "1. 💡 Smart Light — Storing and Toggling Device State",
      "ru": "1. 💡 Умная лампа — Сохранение и переключение состояния"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (SmartHome)\nAqlli uy tizimida xona chirog'i 'SmartBulb' klassi orqali boshqariladi. Chiroqning yonib turgani yoki o'chganligi mantiqiy 'isOn' (boolean) o'zgaruvchisida saqlanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'SmartBulb' klassini e'lon qiling: ichida 'boolean isOn = false;' maydoni bo'lsin.\n2. 'public void turnOn()' metodi yozing, u 'isOn = true;' qilsin.\n3. 'public void turnOff()' metodi yozing, u 'isOn = false;' qilsin.\n4. 'public boolean getStatus()' metodi 'isOn' qiymatini qaytarsin.\n5. 'Main' metodida 'SmartBulb bulb = new SmartBulb();' ochib, uni yoqing ('bulb.turnOn();') va konsolga: \"Chiroq holati: \" + bulb.getStatus() deb chiqaring.",
      "en": "📖 Real-World Scenario (SmartHome)\nA smart lamp is modeled by a SmartBulb class. Its on/off state is tracked by a boolean 'isOn'.\n\n📋 Steps:\n1. Create SmartBulb with boolean isOn = false.\n2. Add turnOn() setting isOn to true.\n3. Add turnOff() setting isOn to false.\n4. Add getStatus() returning isOn.\n5. In Main, instantiate SmartBulb, call turnOn(), and print: \"Chiroq holati: true\".",
      "ru": "📖 Контекст (SmartHome)\nУмная лампа управляется классом SmartBulb с булевым полем isOn.\n\n📋 Шаги:\n1. Создайте класс SmartBulb с полем boolean isOn = false.\n2. Напишите методы turnOn(), turnOff(), getStatus().\n3. В Main включите лампу и выведите: \"Chiroq holati: true\"."
    },
    "requirements": {
      "classes": [
        "SmartBulb",
        "Main"
      ],
      "methods": [
        "turnOn",
        "turnOff",
        "getStatus"
      ],
      "constructors": []
    },
    "starterCode": "class SmartBulb {\n    boolean isOn = false;\n\n    // turnOn, turnOff va getStatus metodlarini yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartBulb bulb = new SmartBulb();\n        // Chiroqni yoqing va holatini chiqaring\n    }\n}",
    "solution": "class SmartBulb {\n    boolean isOn = false;\n\n    public void turnOn() {\n        this.isOn = true;\n    }\n\n    public void turnOff() {\n        this.isOn = false;\n    }\n\n    public boolean getStatus() {\n        return this.isOn;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SmartBulb bulb = new SmartBulb();\n        bulb.turnOn();\n        System.out.println(\"Chiroq holati: \" + bulb.getStatus());\n    }\n}",
    "expectedOutput": "Chiroq holati: true",
    "detailedSolution": {
      "uz": "Obyektning holati (state) uning maydonlarida saqlanadi. 'turnOn()' metodi bu holatni o'zgartiradi va simulyatorda chiroq neon sariq nur bilan yonadi!",
      "en": "Object state is stored in fields. Invoking turnOn() alters internal state, lighting up the neon bulb in the simulator.",
      "ru": "Состояние объекта хранится в его полях. Метод turnOn() изменяет состояние, зажигая лампу в симуляторе."
    }
  },
  {
    "id": 2,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar, Obyektlar va Holat (SmartHome)",
    "appType": "ecommerce",
    "simKind": "product",
    "title": {
      "uz": "2. 📱 Uzum Mahsulot Kartochkasi — Xarid va Qoldiq",
      "en": "2. 📱 Uzum Product Card — Purchase and Inventory Stock",
      "ru": "2. 📱 Карточка товара Uzum — Покупка и остаток на складе"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Uzum Market)\nUzum Market ilovasida har bir mahsulot 'Product' klassi orqali modellashtiriladi. Mahsulot nomi, narxi va ombordagi qoldig'i (stock) bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Product' klassida 'String name', 'double price', 'int stock' maydonlarini e'lon qiling.\n2. 'public Product(String name, double price, int stock)' konstruktorini yozing.\n3. 'public boolean buy(int quantity)' metodini yozing: agar 'stock >= quantity' bo'lsa, 'stock -= quantity' qilib 'true' qaytarsin, aks holda 'false'.\n4. 'public int getStock()' metodi qoldiqni qaytarsin.\n5. 'Main' metodida 'Product p = new Product(\"Redmi Note 13\", 2400000, 10);' oching, 3 ta xarid qiling ('p.buy(3);') va konsolga: \"Qolgan tovar: \" + p.getStock() deb chiqaring.",
      "en": "📖 Real-World Scenario (Uzum Market)\nEvery marketplace item is represented as a Product with name, price, and stock.\n\n📋 Steps:\n1. Product class with name, price, stock.\n2. Constructor Product(name, price, stock).\n3. buy(quantity) subtracting quantity if available and returning boolean.\n4. getStock() returning stock.\n5. In Main, buy 3 items from stock of 10 and print: \"Qolgan tovar: 7\".",
      "ru": "📖 Контекст (Uzum Market)\nТовар маркетплейса с полями name, price, stock и методом покупки buy(quantity).\n\n📋 Шаги:\n1. Создайте Product(name, price, stock).\n2. Реализуйте buy(quantity) и getStock().\n3. В Main купите 3 шт из 10 и выведите: \"Qolgan tovar: 7\"."
    },
    "requirements": {
      "classes": [
        "Product",
        "Main"
      ],
      "methods": [
        "buy",
        "getStock"
      ],
      "constructors": [
        "Product"
      ]
    },
    "starterCode": "class Product {\n    String name;\n    double price;\n    int stock;\n\n    public Product(String name, double price, int stock) {\n        \n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Product {\n    String name;\n    double price;\n    int stock;\n\n    public Product(String name, double price, int stock) {\n        this.name = name;\n        this.price = price;\n        this.stock = stock;\n    }\n\n    public boolean buy(int quantity) {\n        if (this.stock >= quantity) {\n            this.stock -= quantity;\n            return true;\n        }\n        return false;\n    }\n\n    public int getStock() {\n        return this.stock;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Product p = new Product(\"Redmi Note 13\", 2400000, 10);\n        p.buy(3);\n        System.out.println(\"Qolgan tovar: \" + p.getStock());\n    }\n}",
    "expectedOutput": "Qolgan tovar: 7",
    "detailedSolution": {
      "uz": "Obyektning o'zgaruvchisi 'stock' xariddan keyin 10 dan 7 ga kamayadi. Simulyatorda Uzum kartochkasi qoldig'i 7 ga yangilanadi!",
      "en": "The stock field decrements from 10 to 7 after purchase. The visual Uzum card animates the stock badge.",
      "ru": "Поле stock уменьшается с 10 до 7 после покупки. В симуляторе плашка остатка обновляется."
    }
  },
  {
    "id": 3,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar, Obyektlar va Holat (SmartHome)",
    "appType": "smarthome",
    "simKind": "battery",
    "title": {
      "uz": "3. 🔋 Smartfon Batareyasi — Quvvatlash Animatsiyasi",
      "en": "3. 🔋 Smartphone Battery — Charging Level Animation",
      "ru": "3. 🔋 Батарея смартфона — Анимация зарядки аккумулятора"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Smartfon)\nSmartfon batareyasi 'Battery' klassi orqali ifodalanadi. Quvvat darajasi 'level' 0 dan 100 gacha bo'lishi mumkin. Zaryadlanganda quvvat 100 dan oshib ketmasligi kerak.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Battery' klassini yarating: 'int level = 20;' maydoni bo'lsin.\n2. 'public void charge(int amount)' metodida 'level += amount' qiling, lekin agar 'level > 100' bo'lib ketsa, uni '100' ga tenglashtiring.\n3. 'public int getLevel()' metodi quvvat foizini qaytarsin.\n4. 'Main' metodida 'Battery b = new Battery();' ochib, 'b.charge(50);' qiling va konsolga: \"Batareya: \" + b.getLevel() + \"%\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Smartphone)\nBattery class manages charge level between 0 and 100. Charging must cap at 100%.\n\n📋 Steps:\n1. Battery class with int level = 20.\n2. charge(amount) increasing level and capping at 100.\n3. getLevel() returning current level.\n4. In Main, charge by 50 and print: \"Batareya: 70%\".",
      "ru": "📖 Контекст (Смартфон)\nКласс Battery с уровнем заряда 0-100%. Метод charge(amount) не должен превышать 100%.\n\n📋 Шаги:\n1. Создайте Battery с level = 20.\n2. Реализуйте charge(amount) и getLevel().\n3. В Main зарядите на 50 и выведите: \"Batareya: 70%\"."
    },
    "requirements": {
      "classes": [
        "Battery",
        "Main"
      ],
      "methods": [
        "charge",
        "getLevel"
      ],
      "constructors": []
    },
    "starterCode": "class Battery {\n    int level = 20;\n\n    // charge va getLevel metodlarini yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Battery {\n    int level = 20;\n\n    public void charge(int amount) {\n        this.level += amount;\n        if (this.level > 100) {\n            this.level = 100;\n        }\n    }\n\n    public int getLevel() {\n        return this.level;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Battery b = new Battery();\n        b.charge(50);\n        System.out.println(\"Batareya: \" + b.getLevel() + \"%\");\n    }\n}",
    "expectedOutput": "Batareya: 70%",
    "detailedSolution": {
      "uz": "Batareya boshida 20% edi, 50% quvvatlangach 70% ga yetdi. Simulyatorda batareya indikatori yashil rang bilan to'ladi!",
      "en": "Battery rises from 20% to 70%. The phone simulator fills the battery icon smoothly.",
      "ru": "Заряд вырос с 20% до 70%. Индикатор батареи в симуляторе плавно наполняется зеленым цветом."
    }
  },
  {
    "id": 4,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar, Obyektlar va Holat (SmartHome)",
    "appType": "smarthome",
    "simKind": "counter",
    "title": {
      "uz": "4. ⏱ Tashrifchilar Hisoblagichi — Clicker Displeyi",
      "en": "4. ⏱ Visitor Clicker — Digital Display Tally Counter",
      "ru": "4. ⏱ Счетчик посетителей — Цифровое табло кликера"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Do'kon)\nSavdo markaziga kirayotgan odamlarni sanash uchun mexanik/raqamli 'ClickCounter' hisoblagichi ishlatiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'ClickCounter' klassida 'int count = 0;' maydonini oching.\n2. 'public void click()' metodi 'count'ni 1 taga oshirsin.\n3. 'public void reset()' metodi 'count'ni 0 qilsin.\n4. 'public int getCount()' joriy sonni qaytarsin.\n5. 'Main' metodida hisoblagichni ochib, 3 marta 'click()' qiling va konsolga: \"Jami tashrifchilar: \" + counter.getCount() deb chiqaring.",
      "en": "📖 Real-World Scenario (Retail Entrance)\nA digital tally counter counts visitors entering a venue.\n\n📋 Steps:\n1. ClickCounter with int count = 0.\n2. click() increments count.\n3. reset() resets to 0.\n4. getCount() returns current value.\n5. In Main, click 3 times and print: \"Jami tashrifchilar: 3\".",
      "ru": "📖 Контекст (Вход в ТЦ)\nСчетчик кликов ClickCounter для подсчета посетителей.\n\n📋 Шаги:\n1. Создайте ClickCounter с полем count = 0.\n2. Методы click(), reset(), getCount().\n3. В Main кликните 3 раза и выведите: \"Jami tashrifchilar: 3\"."
    },
    "requirements": {
      "classes": [
        "ClickCounter",
        "Main"
      ],
      "methods": [
        "click",
        "reset",
        "getCount"
      ],
      "constructors": []
    },
    "starterCode": "class ClickCounter {\n    int count = 0;\n\n    // click, reset, getCount metodlari\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class ClickCounter {\n    int count = 0;\n\n    public void click() {\n        this.count++;\n    }\n\n    public void reset() {\n        this.count = 0;\n    }\n\n    public int getCount() {\n        return this.count;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ClickCounter counter = new ClickCounter();\n        counter.click();\n        counter.click();\n        counter.click();\n        System.out.println(\"Jami tashrifchilar: \" + counter.getCount());\n    }\n}",
    "expectedOutput": "Jami tashrifchilar: 3",
    "detailedSolution": {
      "uz": "Har safar 'click()' chaqirilganda ichki xotiradagi son oshadi va simulyatordagi mexanik displey 3 ta tashrifchini ko'rsatadi.",
      "en": "Each click() call mutates state, flipping the digital tally counter on the simulated hardware.",
      "ru": "Каждый вызов click() увеличивает счетчик, отображая 3 на цифровом дисплее."
    }
  },
  {
    "id": 5,
    "tier": 1,
    "tierName": "1-Bosqich: Klasslar, Obyektlar va Holat (SmartHome)",
    "appType": "smarthome",
    "simKind": "coffee",
    "title": {
      "uz": "5. ☕ Qahva Mashinasi — Resurslar Sarfi va Finjon",
      "en": "5. ☕ Espresso Machine — Resource Consumption & Cup",
      "ru": "5. ☕ Кофемашина — Расход ресурсов и готовая чашка"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Ofis)\nOfisdagi 'CoffeeMachine' klassi suv miqdori ('waterMl') va qahva donalari ('beansGrams')ni saqlaydi. Bitta espresso tayyorlash uchun 50 ml suv va 15 gr don kerak bo'ladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'CoffeeMachine' klassini e'lon qiling: 'int waterMl = 200;', 'int beansGrams = 50;'.\n2. 'public boolean brewEspresso()' metodini yozing: agar suv >= 50 va don >= 15 bo'lsa, ularni ayirib 'true' qaytarsin, aks holda 'false'.\n3. 'public int getWater()' suv qoldig'ini qaytarsin.\n4. 'Main' metodida bitta espresso tayyorlang va konsolga: \"Espresso tayyor: true | Suv qoldig'i: \" + machine.getWater() + \" ml\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Office Breakroom)\nCoffeeMachine tracks waterMl and beansGrams, deducting 50ml and 15g per espresso brewed.\n\n📋 Steps:\n1. CoffeeMachine with waterMl = 200, beansGrams = 50.\n2. brewEspresso() deducts resources if sufficient.\n3. getWater() returns remaining water.\n4. In Main, brew once and print: \"Espresso tayyor: true | Suv qoldig'i: 150 ml\".",
      "ru": "📖 Контекст (Кофемашина)\nКласс CoffeeMachine списывает 50мл воды и 15г зерен при варке эспрессо.\n\n📋 Шаги:\n1. Создайте CoffeeMachine с waterMl = 200, beansGrams = 50.\n2. Реализуйте brewEspresso() и getWater().\n3. В Main сварите кофе и выведите: \"Espresso tayyor: true | Suv qoldig'i: 150 ml\"."
    },
    "requirements": {
      "classes": [
        "CoffeeMachine",
        "Main"
      ],
      "methods": [
        "brewEspresso",
        "getWater"
      ],
      "constructors": []
    },
    "starterCode": "class CoffeeMachine {\n    int waterMl = 200;\n    int beansGrams = 50;\n\n    // brewEspresso va getWater metodlari\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CoffeeMachine {\n    int waterMl = 200;\n    int beansGrams = 50;\n\n    public boolean brewEspresso() {\n        if (this.waterMl >= 50 && this.beansGrams >= 15) {\n            this.waterMl -= 50;\n            this.beansGrams -= 15;\n            return true;\n        }\n        return false;\n    }\n\n    public int getWater() {\n        return this.waterMl;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CoffeeMachine machine = new CoffeeMachine();\n        boolean success = machine.brewEspresso();\n        System.out.println(\"Espresso tayyor: \" + success + \" | Suv qoldig'i: \" + machine.getWater() + \" ml\");\n    }\n}",
    "expectedOutput": "Espresso tayyor: true | Suv qoldig'i: 150 ml",
    "detailedSolution": {
      "uz": "Resurslar muvaffaqiyatli sarflanib, suv 150 ml ga tushadi. Simulyatorda finjonga issiq bug' bilan qahva quyiladi!",
      "en": "Resources decrement safely; remaining water drops to 150ml. Simulator animates steaming coffee poured into a mug.",
      "ru": "Ресурсы списаны, остаток воды 150мл. В симуляторе анимируется горячая чашка кофе с паром."
    }
  },
  {
    "id": 6,
    "tier": 2,
    "tierName": "2-Bosqich: Inkapsulyatsiya va Bank Tizimi (Payme / Humo)",
    "appType": "bank",
    "simKind": "card",
    "title": {
      "uz": "6. 💳 Payme Plastik Karta — Depozit va Balans Himoyasi",
      "en": "6. 💳 Payme Bank Card — Encapsulated Deposit & Balance",
      "ru": "6. 💳 Банковская карта Payme — Защита баланса и депозит"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Payme / Humo)\nBank kartasining balansi 'private double balance;' bo'lishi shart, aks holda buzg'unchilar balansi to'g'ridan-to'g'ri o'zgartirishi mumkin! Balans faqat 'deposit' orqali va faqat musbat summaga to'ldiriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'BankCard' klassini oching: 'private String holder;' va 'private double balance;' maydonlarini yozing.\n2. 'public BankCard(String holder, double initialBalance)' konstruktorida maydonlarni to'ldiring.\n3. 'public void deposit(double amount)' metodida 'amount > 0' bo'lsa 'balance += amount' qiling.\n4. 'public double getBalance()' getteri balansni qaytarsin.\n5. 'Main' metodida 'BankCard card = new BankCard(\"Jasur Aliyev\", 50000.0);' oching, 30000.0 depozit qiling va konsolga: \"Yangi balans: \" + card.getBalance() + \" so'm\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Payme / Humo)\nBank card balances must be private to enforce integrity. Deposits must be positive.\n\n📋 Steps:\n1. BankCard with private holder, private balance.\n2. Constructor BankCard(holder, initialBalance).\n3. deposit(amount) validating amount > 0.\n4. getBalance() accessor.\n5. In Main, deposit 30,000 into 50,000 card and print: \"Yangi balans: 80000.0 so'm\".",
      "ru": "📖 Контекст (Payme / Humo)\nБаланс карты должен быть private. Метод deposit(amount) принимает только положительные суммы.\n\n📋 Шаги:\n1. Создайте BankCard с private полями holder, balance.\n2. Конструктор BankCard(holder, initialBalance).\n3. Метод deposit(amount) и getBalance().\n4. В Main пополните на 30000 и выведите: \"Yangi balans: 80000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "BankCard",
        "Main"
      ],
      "fields": [
        {
          "name": "holder",
          "type": "String"
        },
        {
          "name": "balance",
          "type": "double"
        }
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "deposit",
        "getBalance"
      ],
      "constructors": [
        "BankCard"
      ]
    },
    "starterCode": "class BankCard {\n    private String holder;\n    private double balance;\n\n    public BankCard(String holder, double initialBalance) {\n        \n    }\n\n    // deposit va getBalance\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class BankCard {\n    private String holder;\n    private double balance;\n\n    public BankCard(String holder, double initialBalance) {\n        this.holder = holder;\n        this.balance = initialBalance;\n    }\n\n    public void deposit(double amount) {\n        if (amount > 0) {\n            this.balance += amount;\n        }\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        BankCard card = new BankCard(\"Jasur Aliyev\", 50000.0);\n        card.deposit(30000.0);\n        System.out.println(\"Yangi balans: \" + card.getBalance() + \" so'm\");\n    }\n}",
    "expectedOutput": "Yangi balans: 80000.0 so'm",
    "detailedSolution": {
      "uz": "Inkapsulyatsiya tufayli balans 50,000 dan 80,000 so'mga ko'paydi. Simulyatordagi Humo kartochkasida summa yashil animatsiya bilan hisoblanadi!",
      "en": "Encapsulation protects the balance field. The phone simulator shows the stylish Humo card updating to 80,000 UZS.",
      "ru": "Инкапсуляция защищает баланс. На виртуальной карте Humo баланс увеличивается до 80,000 сум."
    }
  },
  {
    "id": 7,
    "tier": 2,
    "tierName": "2-Bosqich: Inkapsulyatsiya va Bank Tizimi (Payme / Humo)",
    "appType": "bank",
    "simKind": "atm",
    "title": {
      "uz": "7. 🏧 Bankomat — Naqd Pul Yechish va Xavfsizlik",
      "en": "7. 🏧 ATM Withdrawal — Boundary Checks & Cash Dispense",
      "ru": "7. 🏧 Банкомат — Снятие наличных и проверка остатка"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Kapitalbank Bankomati)\nBankomatdan pul yechishda 'withdraw(double amount)' kartadagi balansdan ko'p pul yechishga ruxsat bermasligi shart! Agar balans yetarli bo'lsa 'true', yetarli bo'lmasa 'false' qaytaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'SecureAccount' klassida 'private double balance;' maydoni bo'lsin.\n2. Konstruktor: 'public SecureAccount(double balance)'.\n3. 'public boolean withdraw(double amount)' metodida 'amount > 0 && amount <= balance' bo'lsa, 'balance -= amount' qilib 'true' qaytarsin, aks holda 'false'.\n4. 'public double getBalance()' getteri.\n5. 'Main' metodida 100000.0 balansi bilan hisob oching, 40000.0 yeching va konsolga: \"Pul yechildi: true | Qolgan balans: \" + acc.getBalance() deb chiqaring.",
      "en": "📖 Real-World Scenario (ATM Cash Machine)\nWithdrawals must guard against overdrawing the balance.\n\n📋 Steps:\n1. SecureAccount with private balance.\n2. Constructor SecureAccount(balance).\n3. withdraw(amount) checking amount > 0 and amount <= balance.\n4. getBalance() getter.\n5. In Main, withdraw 40,000 from 100,000 and print: \"Pul yechildi: true | Qolgan balans: 60000.0\".",
      "ru": "📖 Контекст (Банкомат)\nМетод withdraw(amount) списывает средства только при достаточном балансе.\n\n📋 Шаги:\n1. SecureAccount с private balance.\n2. Конструктор SecureAccount(balance).\n3. withdraw(amount) и getBalance().\n4. В Main снимите 40000 из 100000 и выведите: \"Pul yechildi: true | Qolgan balans: 60000.0\"."
    },
    "requirements": {
      "classes": [
        "SecureAccount",
        "Main"
      ],
      "privateFields": [
        "balance"
      ],
      "methods": [
        "withdraw",
        "getBalance"
      ],
      "constructors": [
        "SecureAccount"
      ]
    },
    "starterCode": "class SecureAccount {\n    private double balance;\n\n    public SecureAccount(double balance) {\n        \n    }\n\n    // withdraw va getBalance\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class SecureAccount {\n    private double balance;\n\n    public SecureAccount(double balance) {\n        this.balance = balance;\n    }\n\n    public boolean withdraw(double amount) {\n        if (amount > 0 && amount <= this.balance) {\n            this.balance -= amount;\n            return true;\n        }\n        return false;\n    }\n\n    public double getBalance() {\n        return this.balance;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        SecureAccount acc = new SecureAccount(100000.0);\n        boolean success = acc.withdraw(40000.0);\n        System.out.println(\"Pul yechildi: \" + success + \" | Qolgan balans: \" + acc.getBalance());\n    }\n}",
    "expectedOutput": "Pul yechildi: true | Qolgan balans: 60000.0",
    "detailedSolution": {
      "uz": "100,000 so'mdan 40,000 yechilgach, hisobda 60,000 qoladi. Bankomat oynasida naqd pullar chiqib, kassa cheki paydo bo'ladi!",
      "en": "40,000 UZS is safely deducted, leaving 60,000. ATM simulator dispenses cash notes and renders a mini receipt.",
      "ru": "Списано 40,000 сум, остаток 60,000. В симуляторе банкомата выдаются купюры."
    }
  },
  {
    "id": 8,
    "tier": 2,
    "tierName": "2-Bosqich: Inkapsulyatsiya va Bank Tizimi (Payme / Humo)",
    "appType": "bank",
    "simKind": "pin",
    "title": {
      "uz": "8. 🔒 Karta Xavfsizligi — 4 Xonali PIN Kod Tekshiruvi",
      "en": "8. 🔒 Card Security — 4-Digit PIN Code Authentication",
      "ru": "8. 🔒 Безопасность карты — Аутентификация 4-значным PIN-кодом"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (PIN Kod)\nPlastik karta PIN kodi 'private int pin;' orqali saqlanadi. Foydalanuvchi to'g'ri PIN kiritgandagina operatsiyaga ruxsat beriladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'CardSecurity' klassida 'private int pin;' maydoni bo'lsin.\n2. Konstruktor: 'public CardSecurity(int initialPin)' (masalan, 1234).\n3. 'public boolean verifyPin(int inputPin)' metodi kiritilgan son 'this.pin' bilan teng bo'lsa 'true', aks holda 'false' qaytarsin.\n4. 'public boolean changePin(int oldPin, int newPin)' metodida eski pin to'g'ri kelsa yangi pinga almashtirib 'true', aks holda 'false' qaytarsin.\n5. 'Main' metodida 'CardSecurity sec = new CardSecurity(7777);' oching, 'sec.verifyPin(7777)' natijasini konsolga: \"PIN to'g'ri: true\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Card PIN Protection)\nCardSecurity shields the 4-digit PIN, allowing verification and authenticated updates.\n\n📋 Steps:\n1. CardSecurity with private int pin.\n2. Constructor CardSecurity(initialPin).\n3. verifyPin(inputPin) returning boolean.\n4. changePin(oldPin, newPin) updating if old matches.\n5. In Main, verify 7777 and print: \"PIN to'g'ri: true\".",
      "ru": "📖 Контекст (PIN-код карты)\nКласс CardSecurity хранит private pin и проверяет его валидность.\n\n📋 Шаги:\n1. CardSecurity с private int pin.\n2. verifyPin(inputPin) и changePin(oldPin, newPin).\n3. В Main проверьте 7777 и выведите: \"PIN to'g'ri: true\"."
    },
    "requirements": {
      "classes": [
        "CardSecurity",
        "Main"
      ],
      "privateFields": [
        "pin"
      ],
      "methods": [
        "verifyPin",
        "changePin"
      ],
      "constructors": [
        "CardSecurity"
      ]
    },
    "starterCode": "class CardSecurity {\n    private int pin;\n\n    public CardSecurity(int initialPin) {\n        \n    }\n\n    // verifyPin va changePin\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class CardSecurity {\n    private int pin;\n\n    public CardSecurity(int initialPin) {\n        this.pin = initialPin;\n    }\n\n    public boolean verifyPin(int inputPin) {\n        return this.pin == inputPin;\n    }\n\n    public boolean changePin(int oldPin, int newPin) {\n        if (this.pin == oldPin) {\n            this.pin = newPin;\n            return true;\n        }\n        return false;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        CardSecurity sec = new CardSecurity(7777);\n        boolean ok = sec.verifyPin(7777);\n        System.out.println(\"PIN to'g'ri: \" + ok);\n    }\n}",
    "expectedOutput": "PIN to'g'ri: true",
    "detailedSolution": {
      "uz": "To'g'ri PIN kiritilganda simulyatordagi qulf belgisi yashil rangda ochiladi va foydalanuvchiga to'liq kirish huquqi beriladi.",
      "en": "Authenticating with 7777 unlocks the simulated phone's security shield with a green pulse.",
      "ru": "Ввод верного PIN разблокирует виртуальный экран телефона зеленым цветом."
    }
  },
  {
    "id": 9,
    "tier": 2,
    "tierName": "2-Bosqich: Inkapsulyatsiya va Bank Tizimi (Payme / Humo)",
    "appType": "smarthome",
    "simKind": "thermostat",
    "title": {
      "uz": "9. 🌡 Aqlli Termostat — Harorat Chegaralari",
      "en": "9. 🌡 Smart Thermostat — Regulated Safe Temperature Bounds",
      "ru": "9. 🌡 Умный термостат — Контроль безопасных границ температуры"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Aqlli Uy Termostati)\nXona harorati xavfsiz oraliqda (16.0 C dan 30.0 C gacha) saqlanishi kerak. Agar foydalanuvchi bu oraliqdan tashqaridagi qiymat kiritsa, inkapsulyatsiya qilingan setter uni rad etishi shart.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Thermostat' klassida 'private double temperature = 22.0;' maydonini oching.\n2. 'public boolean setTemperature(double temp)' metodida: agar 'temp >= 16.0 && temp <= 30.0' bo'lsa 'this.temperature = temp;' qilib 'true' qaytarsin, aks holda 'false'.\n3. 'public double getTemperature()' joriy haroratni qaytarsin.\n4. 'Main' metodida 'Thermostat t = new Thermostat();' oching, 't.setTemperature(26.5);' qiling va konsolga: \"Xona harorati: \" + t.getTemperature() + \" C\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Smart Thermostat)\nThermostats clamp temperatures between 16.0°C and 30.0°C.\n\n📋 Steps:\n1. Thermostat with private double temperature = 22.0.\n2. setTemperature(temp) guarding 16.0 <= temp <= 30.0.\n3. getTemperature() getter.\n4. In Main, set to 26.5 and print: \"Xona harorati: 26.5 C\".",
      "ru": "📖 Контекст (Термостат)\nСеттер setTemperature(temp) разрешает значения только в диапазоне 16.0–30.0°C.\n\n📋 Шаги:\n1. Thermostat с private temperature = 22.0.\n2. setTemperature(temp) с валидацией.\n3. В Main установите 26.5 и выведите: \"Xona harorati: 26.5 C\"."
    },
    "requirements": {
      "classes": [
        "Thermostat",
        "Main"
      ],
      "privateFields": [
        "temperature"
      ],
      "methods": [
        "setTemperature",
        "getTemperature"
      ],
      "constructors": []
    },
    "starterCode": "class Thermostat {\n    private double temperature = 22.0;\n\n    // setTemperature va getTemperature metodlari\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Thermostat {\n    private double temperature = 22.0;\n\n    public boolean setTemperature(double temp) {\n        if (temp >= 16.0 && temp <= 30.0) {\n            this.temperature = temp;\n            return true;\n        }\n        return false;\n    }\n\n    public double getTemperature() {\n        return this.temperature;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Thermostat t = new Thermostat();\n        t.setTemperature(26.5);\n        System.out.println(\"Xona harorati: \" + t.getTemperature() + \" C\");\n    }\n}",
    "expectedOutput": "Xona harorati: 26.5 C",
    "detailedSolution": {
      "uz": "26.5 C qabul qilinib, termostat shkalasi yorqin to'q sariq (iliq) rangga kiradi va xona harorati ko'z o'ngingizda o'zgaradi.",
      "en": "Setting 26.5°C shifts the circular thermostat dial into warm orange hues on the simulated screen.",
      "ru": "26.5°C успешно принято, круговой индикатор термостата окрашивается в теплый оранжевый цвет."
    }
  },
  {
    "id": 10,
    "tier": 2,
    "tierName": "2-Bosqich: Inkapsulyatsiya va Bank Tizimi (Payme / Humo)",
    "appType": "bank",
    "simKind": "user",
    "title": {
      "uz": "10. 👤 Foydalanuvchi Profili — Pasport va Yosh Cheklovi (16+)",
      "en": "10. 👤 User Profile — Age Verification Validation (16+)",
      "ru": "10. 👤 Профиль пользователя — Верификация возраста (16+)"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Ilova Ro'yxatidan O'tish)\nBank ilovalarida faqat 16 yoshga to'lgan fuqarolar hisob ochishi mumkin. 'UserProfile' klassi 'age' maydonini 'setAge' getteri orqali qat'iy nazorat qiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'UserProfile' klassida 'private String name;' va 'private int age;' maydonlarini e'lon qiling.\n2. Konstruktor: 'public UserProfile(String name, int age)' (agar 'age >= 16' bo'lsa 'this.age = age;', aks holda 'this.age = 16;').\n3. 'public boolean setAge(int age)' metodida 'age >= 16' bo'lsa qabul qilib 'true', aks holda 'false' qaytarsin.\n4. 'public int getAge()' va 'public String getName()' getterlarini yozing.\n5. 'Main' metodida 'UserProfile user = new UserProfile(\"Malika\", 19);' oching va konsolga: \"Foydalanuvchi: \" + user.getName() + \" | Yoshi: \" + user.getAge() deb chiqaring.",
      "en": "📖 Real-World Scenario (Identity Verification)\nBank compliance requires customers to be at least 16 years old.\n\n📋 Steps:\n1. UserProfile with private name, private age.\n2. Constructor enforcing minimum age 16.\n3. setAge(age) validating age >= 16.\n4. Getters for name and age.\n5. In Main, instantiate user aged 19 and print: \"Foydalanuvchi: Malika | Yoshi: 19\".",
      "ru": "📖 Контекст (Верификация пользователя)\nВозраст пользователя должен быть не менее 16 лет.\n\n📋 Шаги:\n1. UserProfile с private полями name, age.\n2. Конструктор и сеттер setAge с валидацией age >= 16.\n3. В Main создайте профиль 19 лет и выведите: \"Foydalanuvchi: Malika | Yoshi: 19\"."
    },
    "requirements": {
      "classes": [
        "UserProfile",
        "Main"
      ],
      "privateFields": [
        "age"
      ],
      "methods": [
        "setAge",
        "getAge",
        "getName"
      ],
      "constructors": [
        "UserProfile"
      ]
    },
    "starterCode": "class UserProfile {\n    private String name;\n    private int age;\n\n    public UserProfile(String name, int age) {\n        \n    }\n\n    // setAge, getAge, getName\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class UserProfile {\n    private String name;\n    private int age;\n\n    public UserProfile(String name, int age) {\n        this.name = name;\n        if (age >= 16) {\n            this.age = age;\n        } else {\n            this.age = 16;\n        }\n    }\n\n    public boolean setAge(int age) {\n        if (age >= 16) {\n            this.age = age;\n            return true;\n        }\n        return false;\n    }\n\n    public int getAge() {\n        return this.age;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        UserProfile user = new UserProfile(\"Malika\", 19);\n        System.out.println(\"Foydalanuvchi: \" + user.getName() + \" | Yoshi: \" + user.getAge());\n    }\n}",
    "expectedOutput": "Foydalanuvchi: Malika | Yoshi: 19",
    "detailedSolution": {
      "uz": "Foydalanuvchi yoshi 19 bo'lgani sababli, ilovada Yashil 'Tasdiqlangan KYC Fuqaro' nishoni (badge) paydo bo'ladi.",
      "en": "Because age 19 satisfies the compliance rule, the phone screen renders a verified KYC badge.",
      "ru": "Возраст 19 лет подтвержден, в симуляторе появляется зеленый бейдж верификации."
    }
  },
  {
    "id": 11,
    "tier": 3,
    "tierName": "3-Bosqich: Vorislik va Polimorfizm (Yandex Go & Transport)",
    "appType": "transport",
    "simKind": "taxi",
    "title": {
      "uz": "11. 🚗 Yandex Go — Standart va Comfort Taksi Tariflari",
      "en": "11. 🚗 Yandex Go — Base Fare and Comfort Tier Multiplier",
      "ru": "11. 🚗 Yandex Go — Тарифы Стандарт и Комфорт с коэффициентом"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Yandex Go)\nBaza sinfi 'Taxi' safar narxini oddiy tarifda hisoblaydi ('km * 3000'). Uning vorisi 'ComfortTaxi' esa qulay avtomobil bo'lgani sababli 1.5 barobar ko'p ('super.calculateFare(km) * 1.5') narx chiqaradi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Taxi' ota klassini yarating: 'public double calculateFare(double km)' metodida 'km * 3000.0' qaytarsin.\n2. 'ComfortTaxi' klassini 'Taxi'dan voris ('extends Taxi') qilib e'lon qiling.\n3. 'ComfortTaxi' ichida 'calculateFare' metodini qayta yozing (Override): 'super.calculateFare(km) * 1.5' qaytarsin.\n4. 'Main' metodida 'ComfortTaxi comfort = new ComfortTaxi();' ochib, 10 km uchun narxni hisoblang.\n5. Konsolga: \"Comfort narxi: \" + comfort.calculateFare(10.0) + \" so'm\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Yandex Go Ride)\nTaxi computes base fare at 3000/km. ComfortTaxi extends Taxi and multiplies super.calculateFare(km) by 1.5.\n\n📋 Steps:\n1. Taxi superclass with calculateFare(km) returning km * 3000.0.\n2. ComfortTaxi extends Taxi, overriding calculateFare(km) returning super.calculateFare(km) * 1.5.\n3. In Main, test 10km on ComfortTaxi and print: \"Comfort narxi: 45000.0 so'm\".",
      "ru": "📖 Контекст (Yandex Go)\nКласс Taxi рассчитывает цену (км * 3000). ComfortTaxi наследует Taxi и умножает super.calculateFare(km) на 1.5.\n\n📋 Шаги:\n1. Taxi с методом calculateFare(km).\n2. ComfortTaxi extends Taxi с переопределением через super.\n3. В Main рассчитайте 10 км и выведите: \"Comfort narxi: 45000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Taxi",
        "ComfortTaxi",
        "Main"
      ],
      "methods": [
        "calculateFare"
      ],
      "constructors": [],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Taxi {\n    public double calculateFare(double km) {\n        return km * 3000.0;\n    }\n}\n\nclass ComfortTaxi extends Taxi {\n    // calculateFare metodini super orqali qayta yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Taxi {\n    public double calculateFare(double km) {\n        return km * 3000.0;\n    }\n}\n\nclass ComfortTaxi extends Taxi {\n    @Override\n    public double calculateFare(double km) {\n        return super.calculateFare(km) * 1.5;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ComfortTaxi comfort = new ComfortTaxi();\n        double fare = comfort.calculateFare(10.0);\n        System.out.println(\"Comfort narxi: \" + fare + \" so'm\");\n    }\n}",
    "expectedOutput": "Comfort narxi: 45000.0 so'm",
    "detailedSolution": {
      "uz": "10 km yo'l oddiy taksida 30,000 so'm bo'lardi, Comfort taksida esa 1.5x koeffitsiyent bilan 45,000 so'm bo'ldi. Simulyatorda Yandex Go xaritasida qulay avtomobil belgisi tanlanadi!",
      "en": "Comfort applies the 1.5x multiplier yielding 45,000 UZS. The simulator displays the updated Yandex car model on the mini route map.",
      "ru": "10 км по тарифу Комфорт с коэффициентом 1.5 стоят 45,000 сум. В симуляторе на карте отображается авто повышенного комфорта."
    }
  },
  {
    "id": 12,
    "tier": 3,
    "tierName": "3-Bosqich: Vorislik va Polimorfizm (Yandex Go & Transport)",
    "appType": "transport",
    "simKind": "drone",
    "title": {
      "uz": "12. 📦 Yetkazib Berish — Kuryer va Dron Parvozi",
      "en": "12. 📦 Delivery Fleet — Courier vs Aerial Drone Flight",
      "ru": "12. 📦 Служба доставки — Курьер против автономного дрона"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Express Delivery)\nOta klass 'Courier' buyurtmani yerda ('Yer usti kuryeri: ... manzilga yetkazdi') yetkazadi. Voris 'DroneDelivery' klassi esa havo orqali ('Dron 50 metr balandlikda ... manzilga yetkazdi') yetkazadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Courier' klassida 'public String deliver(String address)' metodi \"Yer usti kuryeri: \" + address deb qaytarsin.\n2. 'DroneDelivery' klassini 'Courier'dan voris qiling.\n3. 'DroneDelivery'da 'deliver' metodini qayta yozing (Override): \"Dron havoda: \" + address deb qaytarsin.\n4. 'Main' metodida 'Courier d = new DroneDelivery();' (Polimorfizm!) e'lon qiling va 'd.deliver(\"Tashkent City\")' natijasini konsolga chiqaring.",
      "en": "📖 Real-World Scenario (Autonomous Fleet)\nCourier delivers by ground. DroneDelivery overrides deliver(address) by air.\n\n📋 Steps:\n1. Courier with deliver(address) returning \"Yer usti kuryeri: \" + address.\n2. DroneDelivery extends Courier overriding deliver(address) returning \"Dron havoda: \" + address.\n3. In Main, instantiate Courier d = new DroneDelivery() and print result for \"Tashkent City\".",
      "ru": "📖 Контекст (Автономная доставка)\nКласс Courier доставляет по земле, а DroneDelivery — по воздуху через полиморфизм.\n\n📋 Шаги:\n1. Courier с методом deliver(address).\n2. DroneDelivery extends Courier с переопределением.\n3. В Main вызовите через полиморфизм и выведите: \"Dron havoda: Tashkent City\"."
    },
    "requirements": {
      "classes": [
        "Courier",
        "DroneDelivery",
        "Main"
      ],
      "methods": [
        "deliver"
      ],
      "constructors": [],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Courier {\n    public String deliver(String address) {\n        return \"Yer usti kuryeri: \" + address;\n    }\n}\n\nclass DroneDelivery extends Courier {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Courier {\n    public String deliver(String address) {\n        return \"Yer usti kuryeri: \" + address;\n    }\n}\n\nclass DroneDelivery extends Courier {\n    @Override\n    public String deliver(String address) {\n        return \"Dron havoda: \" + address;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Courier d = new DroneDelivery();\n        System.out.println(d.deliver(\"Tashkent City\"));\n    }\n}",
    "expectedOutput": "Dron havoda: Tashkent City",
    "detailedSolution": {
      "uz": "Polimorfizm sababli ota ko'rsatkichi 'Courier d' bola sinfining 'DroneDelivery' metodini chaqiradi va simulyatorda uchuvchi dron animatsiyasi uchadi!",
      "en": "Dynamic method dispatch executes the drone implementation, launching an animated aerial drone in the preview.",
      "ru": "Благодаря полиморфизму вызывается метод дрона, запуская анимацию полета в симуляторе."
    }
  },
  {
    "id": 13,
    "tier": 3,
    "tierName": "3-Bosqich: Vorislik va Polimorfizm (Yandex Go & Transport)",
    "appType": "ecommerce",
    "simKind": "vip",
    "title": {
      "uz": "13. 👑 Sodiqlik Dasturi — Standart va VIP Mijoz Keshbeki",
      "en": "13. 👑 Loyalty Program — Standard vs VIP Customer Cashback",
      "ru": "13. 👑 Программа лояльности — Кэшбэк обычного и VIP клиента"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Uzum / Korzinka Keshbek)\nOddiy mijoz 'Customer' har bir xarididan 1% keshbek oladi ('total * 0.01'). VIP mijoz 'VIPCustomer' esa 5% keshbek ('total * 0.05') oladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Customer' sinfida 'public double calculateCashback(double total)' metodini yozing: 'total * 0.01' qaytarsin.\n2. 'VIPCustomer' klassini 'Customer'dan voris qilib oling.\n3. 'VIPCustomer' ichida 'calculateCashback' metodini qayta yozing (Override): 'total * 0.05' qaytarsin.\n4. 'Main' metodida 'VIPCustomer vip = new VIPCustomer();' oching, 100000.0 so'mlik xarid uchun keshbekni hisoblang.\n5. Konsolga: \"VIP keshbek: \" + vip.calculateCashback(100000.0) + \" so'm\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Market Loyalty)\nCustomer gets 1% cashback; VIPCustomer extends and overrides to 5%.\n\n📋 Steps:\n1. Customer with calculateCashback(total) returning total * 0.01.\n2. VIPCustomer extends Customer returning total * 0.05.\n3. In Main, test 100,000 UZS total and print: \"VIP keshbek: 5000.0 so'm\".",
      "ru": "📖 Контекст (Программа лояльности)\nCustomer получает 1% кэшбэка, а VIPCustomer — 5%.\n\n📋 Шаги:\n1. Customer с методом calculateCashback(total).\n2. VIPCustomer extends Customer с 5% кэшбэка.\n3. В Main выведите: \"VIP keshbek: 5000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "Customer",
        "VIPCustomer",
        "Main"
      ],
      "methods": [
        "calculateCashback"
      ],
      "constructors": [],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Customer {\n    public double calculateCashback(double total) {\n        return total * 0.01;\n    }\n}\n\nclass VIPCustomer extends Customer {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    public double calculateCashback(double total) {\n        return total * 0.01;\n    }\n}\n\nclass VIPCustomer extends Customer {\n    @Override\n    public double calculateCashback(double total) {\n        return total * 0.05;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        VIPCustomer vip = new VIPCustomer();\n        double cb = vip.calculateCashback(100000.0);\n        System.out.println(\"VIP keshbek: \" + cb + \" so'm\");\n    }\n}",
    "expectedOutput": "VIP keshbek: 5000.0 so'm",
    "detailedSolution": {
      "uz": "100,000 so'mga 5% keshbek — bu 5,000 so'm sof tejash demakdir. Simulyatorda foydalanuvchi ustida oltin VIP toj va yaltiragan keshbek tangasi paydo bo'ladi!",
      "en": "5% yields 5,000 UZS. The simulator renders a golden VIP crown badge with glowing gold cashback coins.",
      "ru": "5% от 100,000 сум составляет 5,000 сум. В симуляторе появляется золотая корона VIP."
    }
  },
  {
    "id": 14,
    "tier": 3,
    "tierName": "3-Bosqich: Vorislik va Polimorfizm (Yandex Go & Transport)",
    "appType": "smarthome",
    "simKind": "hero",
    "title": {
      "uz": "14. 🎮 O'yin Qahramonlari — Jangchi va Sehrli Qalqon",
      "en": "14. 🎮 Game Heroes — Warrior Health and Magic Shield",
      "ru": "14. 🎮 Игровые персонажи — Воин и магический щит"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (RPG O'yin)\nBaza qahramoni 'Hero' 'health' maydoniga ega bo'lib, 'takeDamage(damage)' metodida jonidan to'liq zararni ayiradi ('health -= damage'). Uning vorisi 'Mage' esa sehrli qalqonga ega bo'lib, kelgan zararni teng yarmiga kamaytirib qabul qiladi ('super.takeDamage(damage / 2)').\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Hero' klassida 'protected int health;' va konstruktor 'public Hero(int health)' bo'lsin.\n2. 'public void takeDamage(int damage)' metodida 'this.health -= damage;' qiling.\n3. 'public int getHealth()' metodi jonni qaytarsin.\n4. 'Mage' klassini 'Hero'dan voris qiling, konstruktorida 'super(health);' chaqiring.\n5. 'Mage'da 'takeDamage(damage)' metodini qayta yozib, 'super.takeDamage(damage / 2);' chaqiring.\n6. 'Main' metodida 100 jonli 'Mage' ochib, 40 zarar bering va konsolga: \"Sehrgar joni: \" + mage.getHealth() deb chiqaring.",
      "en": "📖 Real-World Scenario (RPG Game Engine)\nHero loses full damage. Mage overrides takeDamage reducing incoming damage by half using super.takeDamage(damage / 2).\n\n📋 Steps:\n1. Hero with protected health, constructor Hero(health), takeDamage(damage), getHealth().\n2. Mage extends Hero, super(health) in constructor, overrides takeDamage to call super.takeDamage(damage / 2).\n3. In Main, test 40 damage on Mage(100) and print: \"Sehrgar joni: 80\".",
      "ru": "📖 Контекст (RPG Игра)\nКласс Mage наследует Hero и снижает получаемый урон вдвое через super.takeDamage(damage / 2).\n\n📋 Шаги:\n1. Hero с protected health и методами takeDamage, getHealth.\n2. Mage extends Hero с уполовиниванием урона.\n3. В Main нанесите 40 урона магу со 100 HP и выведите: \"Sehrgar joni: 80\"."
    },
    "requirements": {
      "classes": [
        "Hero",
        "Mage",
        "Main"
      ],
      "methods": [
        "takeDamage",
        "getHealth"
      ],
      "constructors": [
        "Hero",
        "Mage"
      ],
      "keywords": [
        "extends",
        "super"
      ]
    },
    "starterCode": "class Hero {\n    protected int health;\n\n    public Hero(int health) {\n        this.health = health;\n    }\n\n    public void takeDamage(int damage) {\n        this.health -= damage;\n    }\n\n    public int getHealth() {\n        return this.health;\n    }\n}\n\nclass Mage extends Hero {\n    // Konstruktor va takeDamage\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Hero {\n    protected int health;\n\n    public Hero(int health) {\n        this.health = health;\n    }\n\n    public void takeDamage(int damage) {\n        this.health -= damage;\n    }\n\n    public int getHealth() {\n        return this.health;\n    }\n}\n\nclass Mage extends Hero {\n    public Mage(int health) {\n        super(health);\n    }\n\n    @Override\n    public void takeDamage(int damage) {\n        super.takeDamage(damage / 2);\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Mage mage = new Mage(100);\n        mage.takeDamage(40);\n        System.out.println(\"Sehrgar joni: \" + mage.getHealth());\n    }\n}",
    "expectedOutput": "Sehrgar joni: 80",
    "detailedSolution": {
      "uz": "40 zararning faqat 20 tasi qabul qilinib, sehrgar joni 100 dan 80 ga tushdi. Simulyatorda yaltiroq ko'k sehrli qalqon zarbani qaytaradi!",
      "en": "Magic barrier absorbs 20 points, leaving 80 HP. The simulator renders a glowing blue magic shield deflecting damage.",
      "ru": "Магический барьер поглотил 20 урона, оставив 80 HP. В симуляторе сияет защитный щит."
    }
  },
  {
    "id": 15,
    "tier": 3,
    "tierName": "3-Bosqich: Vorislik va Polimorfizm (Yandex Go & Transport)",
    "appType": "bank",
    "simKind": "push",
    "title": {
      "uz": "15. 🔔 Xabarnomalar — SMS va Dynamic Island Push Bildirishnoma",
      "en": "15. 🔔 Notification Service — SMS vs Dynamic Island Push",
      "ru": "15. 🔔 Сервис уведомлений — SMS против Push в Dynamic Island"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Bank Xabarnomalari)\n'Notification' ota sinfida xabar jo'natish formati '[Xabar]: ' bo'lsa, 'PushNotification' voris sinfida iOS/Android 'Dynamic Island' uslubida '🔔 PUSH: ' prefiksi bilan chiqadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Notification' klassida 'public String formatMessage(String text)' metodida \"[Oddiy]: \" + text qaytarsin.\n2. 'PushNotification' klassini 'Notification'dan voris qiling.\n3. 'PushNotification'da 'formatMessage' metodini qayta yozing (Override): \"🔔 PUSH: \" + text deb qaytarsin.\n4. 'Main' metodida 'Notification n = new PushNotification();' oching va konsolga: n.formatMessage(\"Kartangizga 50,000 so'm tushdi!\") deb chiqaring.",
      "en": "📖 Real-World Scenario (Bank Alerts)\nPushNotification extends Notification and formats text with a modern push badge.\n\n📋 Steps:\n1. Notification with formatMessage(text).\n2. PushNotification extends Notification overriding formatMessage with \"🔔 PUSH: \" + text.\n3. In Main, invoke via polymorphic reference Notification n = new PushNotification().",
      "ru": "📖 Контекст (Уведомления)\nPushNotification переопределяет formatMessage с префиксом 🔔 PUSH:.\n\n📋 Шаги:\n1. Notification с методом formatMessage(text).\n2. PushNotification extends Notification.\n3. В Main протестируйте полиморфный вызов."
    },
    "requirements": {
      "classes": [
        "Notification",
        "PushNotification",
        "Main"
      ],
      "methods": [
        "formatMessage"
      ],
      "constructors": [],
      "keywords": [
        "extends"
      ]
    },
    "starterCode": "class Notification {\n    public String formatMessage(String text) {\n        return \"[Oddiy]: \" + text;\n    }\n}\n\nclass PushNotification extends Notification {\n    \n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Notification {\n    public String formatMessage(String text) {\n        return \"[Oddiy]: \" + text;\n    }\n}\n\nclass PushNotification extends Notification {\n    @Override\n    public String formatMessage(String text) {\n        return \"🔔 PUSH: \" + text;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Notification n = new PushNotification();\n        System.out.println(n.formatMessage(\"Kartangizga 50,000 so'm tushdi!\"));\n    }\n}",
    "expectedOutput": "🔔 PUSH: Kartangizga 50,000 so'm tushdi!",
    "detailedSolution": {
      "uz": "Simulyatordagi smartfonning yuqori Dynamic Island qismidan chiroyli pop-up bildirishnoma pastga qarab tushadi va foydalanuvchiga ovoz bilan ko'rinadi!",
      "en": "A sleek iOS Dynamic Island notification pill drops down from the phone bezel in the live simulator.",
      "ru": "Из динамического островка симулятора смартфона плавно выпадает красивое пуш-уведомление."
    }
  },
  {
    "id": 16,
    "tier": 4,
    "tierName": "4-Bosqich: To'plamlar va Savat Arxitekturasi (Korzinka / Uzum)",
    "appType": "ecommerce",
    "simKind": "orderitem",
    "title": {
      "uz": "16. 🍕 Bitta Xarid Tovari — OrderItem va Oraliq Summa (Subtotal)",
      "en": "16. 🍕 Single Line Item — OrderItem and Subtotal Calculation",
      "ru": "16. 🍕 Позиция заказа — OrderItem и промежуточная сумма"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Korzinka Go)\nSavatdagi har bir mahsulot bitta 'OrderItem' hisoblanadi: mahsulot nomi ('name'), donasi narxi ('price') va xarid qilinayotgan soni ('quantity'). Oraliq summa (subtotal) = narx * soni.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'OrderItem' klassida 'private String name;', 'private double price;', 'private int quantity;' maydonlarini oching.\n2. Konstruktor: 'public OrderItem(String name, double price, int quantity)'.\n3. 'public double getSubtotal()' metodida 'price * quantity' qiymatini qaytaring.\n4. 'public String getName()' getteri.\n5. 'Main' metodida 'OrderItem item = new OrderItem(\"Mol go'shti lavash\", 32000.0, 2);' oching va konsolga: item.getName() + \" | Jami: \" + item.getSubtotal() + \" so'm\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Korzinka Cart)\nOrderItem holds name, unit price, quantity, and computes subtotal (price * quantity).\n\n📋 Steps:\n1. OrderItem with private name, price, quantity.\n2. Constructor OrderItem(name, price, quantity).\n3. getSubtotal() returning price * quantity.\n4. getName() getter.\n5. In Main, instantiate 2 units of Lavash at 32,000 and print: \"Mol go'shti lavash | Jami: 64000.0 so'm\".",
      "ru": "📖 Контекст (Корзина Корзинки)\nOrderItem хранит товар, цену, количество и вычисляет subtotal.\n\n📋 Шаги:\n1. OrderItem с private полями name, price, quantity.\n2. Конструктор OrderItem(name, price, quantity).\n3. getSubtotal() и getName().\n4. В Main создайте 2 лаваша по 32000 и выведите: \"Mol go'shti lavash | Jami: 64000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "OrderItem",
        "Main"
      ],
      "privateFields": [
        "name",
        "price",
        "quantity"
      ],
      "methods": [
        "getSubtotal",
        "getName"
      ],
      "constructors": [
        "OrderItem"
      ]
    },
    "starterCode": "class OrderItem {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public OrderItem(String name, double price, int quantity) {\n        \n    }\n\n    // getSubtotal va getName\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class OrderItem {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public OrderItem(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public double getSubtotal() {\n        return this.price * this.quantity;\n    }\n\n    public String getName() {\n        return this.name;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        OrderItem item = new OrderItem(\"Mol go'shti lavash\", 32000.0, 2);\n        System.out.println(item.getName() + \" | Jami: \" + item.getSubtotal() + \" so'm\");\n    }\n}",
    "expectedOutput": "Mol go'shti lavash | Jami: 64000.0 so'm",
    "detailedSolution": {
      "uz": "32,000 × 2 = 64,000 so'm hisoblanadi. Simulyatorda Korzinka aravachasiga mazali lavash rasmi tushadi va yonida 'x2' nishoni yonadi!",
      "en": "32,000 * 2 = 64,000 UZS. The simulator renders a food card sliding into the Korzinka shopping cart with an 'x2' quantity badge.",
      "ru": "32,000 * 2 = 64,000 сум. В симуляторе карточка лаваша плавно падает в корзинку с бейджем 'х2'."
    }
  },
  {
    "id": 17,
    "tier": 4,
    "tierName": "4-Bosqich: To'plamlar va Savat Arxitekturasi (Korzinka / Uzum)",
    "appType": "ecommerce",
    "simKind": "cart",
    "title": {
      "uz": "17. 🛒 Korzinka Savati — ArrayList to'plamiga tovarlar qo'shish",
      "en": "17. 🛒 Shopping Cart — Managing Items inside ArrayList<OrderItem>",
      "ru": "17. 🛒 Корзина покупок — Добавление товаров в список ArrayList"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Ko'p Tovarlar Savati)\nBitta savatda cheklanmagan sondagi tovarlar bo'lishi mumkin. Buning uchun 'java.util.ArrayList<OrderItem>' to'plami ishlatiladi. 'addItem' metodi orqali tovarlar ro'yxatga qo'shiladi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'ShoppingCart' klassini yarating: 'private ArrayList<OrderItem> items = new ArrayList<>();' maydoni bo'lsin.\n2. 'public void addItem(OrderItem item)' metodida tovar 'items' ro'yxatiga qo'shilsin.\n3. 'public int getItemCount()' metodi tovarlar sonini ('items.size()') qaytarsin.\n4. 'Main' metodida savat ochib, 2 ta tovar qo'shing va konsolga: \"Savatdagi pozitsiyalar: \" + cart.getItemCount() deb chiqaring.",
      "en": "📖 Real-World Scenario (Cart Aggregation)\nShoppingCart holds a dynamic ArrayList of OrderItems.\n\n📋 Steps:\n1. ShoppingCart with private ArrayList<OrderItem> items.\n2. addItem(item) appending to list.\n3. getItemCount() returning items.size().\n4. In Main, add 2 items and print: \"Savatdagi pozitsiyalar: 2\".",
      "ru": "📖 Контекст (Агрегация корзины)\nКласс ShoppingCart содержит динамический список ArrayList<OrderItem>.\n\n📋 Шаги:\n1. ShoppingCart с полем ArrayList<OrderItem> items.\n2. Методы addItem(item) и getItemCount().\n3. В Main добавьте 2 позиции и выведите: \"Savatdagi pozitsiyalar: 2\"."
    },
    "requirements": {
      "classes": [
        "OrderItem",
        "ShoppingCart",
        "Main"
      ],
      "methods": [
        "addItem",
        "getItemCount"
      ],
      "constructors": [
        "OrderItem"
      ],
      "keywords": [
        "ArrayList",
        "add"
      ]
    },
    "starterCode": "import java.util.ArrayList;\n\nclass OrderItem {\n    private String name;\n    private double price;\n\n    public OrderItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass ShoppingCart {\n    private ArrayList<OrderItem> items = new ArrayList<>();\n\n    // addItem va getItemCount\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass OrderItem {\n    private String name;\n    private double price;\n\n    public OrderItem(String name, double price) {\n        this.name = name;\n        this.price = price;\n    }\n}\n\nclass ShoppingCart {\n    private ArrayList<OrderItem> items = new ArrayList<>();\n\n    public void addItem(OrderItem item) {\n        this.items.add(item);\n    }\n\n    public int getItemCount() {\n        return this.items.size();\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        ShoppingCart cart = new ShoppingCart();\n        cart.addItem(new OrderItem(\"Coca-Cola 1.5L\", 14000.0));\n        cart.addItem(new OrderItem(\"Choco-Pie\", 22000.0));\n        System.out.println(\"Savatdagi pozitsiyalar: \" + cart.getItemCount());\n    }\n}",
    "expectedOutput": "Savatdagi pozitsiyalar: 2",
    "detailedSolution": {
      "uz": "ArrayList dinamik ravishda o'sadi. Simulyatorda Korzinka aravachasi tepasida qizil dumaloq son '2' paydo bo'ladi va savat ichida 2 ta tovar saf tortadi!",
      "en": "ArrayList expands dynamically. The virtual shopping cart badge lights up with count '2' as cards cascade inside.",
      "ru": "ArrayList динамически растет. На иконке корзинки появляется красный бейдж с цифрой '2'."
    }
  },
  {
    "id": 18,
    "tier": 4,
    "tierName": "4-Bosqich: To'plamlar va Savat Arxitekturasi (Korzinka / Uzum)",
    "appType": "ecommerce",
    "simKind": "total",
    "title": {
      "uz": "18. 💰 Kassa Cheki — To'plam Bo'yicha Jami Narxni Hisoblash",
      "en": "18. 💰 Register Checkout — Summing Totals Across Collections",
      "ru": "18. 💰 Кассовый расчет — Подсчет общей суммы по списку товаров"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Kassa Hisob-Kitobi)\nKassir savatdagi barcha tovarlarni skanerdan o'tkazganda, for-each siklida har bir tovarning 'getSubtotal()' qiymati yig'ilib jami summa ('calculateTotal()') hisoblanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'OrderItem' klassida 'name', 'price', 'quantity' va 'getSubtotal()' bo'lsin.\n2. 'Order' klassida 'private ArrayList<OrderItem> items = new ArrayList<>();' maydoni bo'lsin.\n3. 'public void addItem(OrderItem item)' metodi tovar qo'shsin.\n4. 'public double calculateTotal()' metodida for-each siklida barcha 'item.getSubtotal()' yig'indisini hisoblab qaytaring.\n5. 'Main' metodida 2 ta tovar (masalan, 2 ta 15,000 so'mlik pizza bo'lagi va 1 ta 10,000 so'mlik sharbat) qo'shing va konsolga: \"Jami to'lov: \" + order.calculateTotal() + \" so'm\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Checkout Register)\nOrder traverses all OrderItems using an enhanced for-loop, accumulating calculateTotal().\n\n📋 Steps:\n1. OrderItem with getSubtotal().\n2. Order with ArrayList<OrderItem> items and addItem(item).\n3. calculateTotal() summing each item.getSubtotal().\n4. In Main, test 2 items and print: \"Jami to'lov: 40000.0 so'm\".",
      "ru": "📖 Контекст (Кассовый чек)\nКласс Order суммирует subtotal всех элементов через цикл for-each.\n\n📋 Шаги:\n1. OrderItem с getSubtotal().\n2. Order с методом calculateTotal().\n3. В Main добавьте 2 позиции (общая сумма 40000) и выведите: \"Jami to'lov: 40000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "OrderItem",
        "Order",
        "Main"
      ],
      "methods": [
        "addItem",
        "calculateTotal",
        "getSubtotal"
      ],
      "constructors": [
        "OrderItem"
      ],
      "keywords": [
        "ArrayList",
        "for"
      ]
    },
    "starterCode": "import java.util.ArrayList;\n\nclass OrderItem {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public OrderItem(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public double getSubtotal() {\n        return price * quantity;\n    }\n}\n\nclass Order {\n    private ArrayList<OrderItem> items = new ArrayList<>();\n\n    public void addItem(OrderItem item) {\n        items.add(item);\n    }\n\n    // calculateTotal metodini for-each siklida yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "import java.util.ArrayList;\n\nclass OrderItem {\n    private String name;\n    private double price;\n    private int quantity;\n\n    public OrderItem(String name, double price, int quantity) {\n        this.name = name;\n        this.price = price;\n        this.quantity = quantity;\n    }\n\n    public double getSubtotal() {\n        return this.price * this.quantity;\n    }\n}\n\nclass Order {\n    private ArrayList<OrderItem> items = new ArrayList<>();\n\n    public void addItem(OrderItem item) {\n        this.items.add(item);\n    }\n\n    public double calculateTotal() {\n        double sum = 0.0;\n        for (OrderItem item : this.items) {\n            sum += item.getSubtotal();\n        }\n        return sum;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Order order = new Order();\n        order.addItem(new OrderItem(\"Pizza bo'lagi\", 15000.0, 2));\n        order.addItem(new OrderItem(\"Olma sharbati\", 10000.0, 1));\n        System.out.println(\"Jami to'lov: \" + order.calculateTotal() + \" so'm\");\n    }\n}",
    "expectedOutput": "Jami to'lov: 40000.0 so'm",
    "detailedSolution": {
      "uz": "(15000 × 2) + (10000 × 1) = 40,000 so'm. Simulyator ekranida kassa lentalari yurib, jami summa ko'rkam elektron kvitansiyada aks etadi!",
      "en": "Items sum to 40,000 UZS. The simulator renders a neat paper receipt printout with subtotal line items.",
      "ru": "Сумма 40,000 сум. В симуляторе генерируется аккуратный кассовый чек с построчной детализацией."
    }
  },
  {
    "id": 19,
    "tier": 4,
    "tierName": "4-Bosqich: To'plamlar va Savat Arxitekturasi (Korzinka / Uzum)",
    "appType": "ecommerce",
    "simKind": "promo",
    "title": {
      "uz": "19. 🎟 Promo-kod — WIUT2026 Chegirmasini Qo'llash",
      "en": "19. 🎟 Promo Code — Applying WIUT2026 Promotional Discount",
      "ru": "19. 🎟 Промокод — Применение скидки по коду WIUT2026"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (Marketing Promokodi)\nKorzinka ilovasida talabalar uchun maxsus 'WIUT2026' promokodi bor. Agar kiritilgan promokod 'WIUT2026' bo'lsa, xarid summasidan 10% chegirma ('total * 0.90') beriladi, aks holda to'liq narx to'lanadi.\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'DiscountManager' klassini e'lon qiling.\n2. 'public double applyPromo(double total, String code)' metodini yozing: agar 'code.equals(\"WIUT2026\")' bo'lsa 'total * 0.90', aks holda 'total' qaytarsin.\n3. 'Main' metodida 'DiscountManager dm = new DiscountManager();' oching.\n4. 200000.0 so'mlik xaridga \"WIUT2026\" kodini qo'llang.\n5. Konsolga: \"Chegirmali to'lov: \" + dm.applyPromo(200000.0, \"WIUT2026\") + \" so'm\" deb chiqaring.",
      "en": "📖 Real-World Scenario (Promo Engine)\nValidating promo code WIUT2026 grants a 10% discount.\n\n📋 Steps:\n1. DiscountManager class.\n2. applyPromo(total, code) checking code.equals(\"WIUT2026\") returning total * 0.90.\n3. In Main, apply WIUT2026 to 200,000 and print: \"Chegirmali to'lov: 180000.0 so'm\".",
      "ru": "📖 Контекст (Система промокодов)\nПромокод WIUT2026 дает 10% скидки на сумму покупки.\n\n📋 Шаги:\n1. Создайте класс DiscountManager.\n2. Метод applyPromo(total, code) с проверкой .equals(\"WIUT2026\").\n3. В Main примените к 200,000 сум и выведите: \"Chegirmali to'lov: 180000.0 so'm\"."
    },
    "requirements": {
      "classes": [
        "DiscountManager",
        "Main"
      ],
      "methods": [
        "applyPromo"
      ],
      "constructors": [],
      "keywords": [
        "equals"
      ]
    },
    "starterCode": "class DiscountManager {\n    // applyPromo metodini yozing\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class DiscountManager {\n    public double applyPromo(double total, String code) {\n        if (code != null && code.equals(\"WIUT2026\")) {\n            return total * 0.90;\n        }\n        return total;\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        DiscountManager dm = new DiscountManager();\n        double discounted = dm.applyPromo(200000.0, \"WIUT2026\");\n        System.out.println(\"Chegirmali to'lov: \" + discounted + \" so'm\");\n    }\n}",
    "expectedOutput": "Chegirmali to'lov: 180000.0 so'm",
    "detailedSolution": {
      "uz": "200,000 so'mdan 10% chegirma ayirilib, to'lov 180,000 so'm bo'ldi. Simulyatorda ekranga rang-barang konfetti sochiladi va yashil '-10%' kuponi yonadi!",
      "en": "200,000 becomes 180,000 UZS. The simulator bursts with celebratory confetti and applies a glowing -10% discount badge.",
      "ru": "Сумма снизилась до 180,000 сум. В симуляторе взрываются конфетти и загорается зеленый промо-купон."
    }
  },
  {
    "id": 20,
    "tier": 4,
    "tierName": "4-Bosqich: To'plamlar va Savat Arxitekturasi (Korzinka / Uzum)",
    "appType": "ecommerce",
    "simKind": "fullorder",
    "title": {
      "uz": "20. 🧾 To'liq Savdo Tizimi — Mijoz, Manzil va Buyurtma Arxitekturasi",
      "en": "20. 🧾 Full Order Architecture — Customer, Address & Order Aggregate",
      "ru": "20. 🧾 Полная архитектура заказа — Клиент, адрес и составной заказ"
    },
    "scenario": {
      "uz": "📖 Hayotiy Voqealik (WIUT Kurs Ishi Arxitekturasi)\nHaqiqiy dasturlarda buyurtma yakunlanishi uchun mijoz ('Customer'), yetkazish manzili ('Address') va buyurtma tovarlari ('Order') bir-biriga bog'lanadi. Bu — OOP dagi Aggregatsiya va Kompozitsiyaning cho'qqisidir!\n\n📋 Bajarilishi Kerak Bo'lgan Qadamlar:\n1. 'Customer' sinfida 'private String name;' va 'private String phone;' bo'lsin.\n2. 'Address' sinfida 'private String city;', 'private String street;' bo'lsin.\n3. 'OrderReceipt' klassida 'Customer customer;' va 'Address address;' maydonlari hamda 'double totalAmount;' bo'lsin.\n4. 'OrderReceipt' konstruktorida ushbu 3 ta parametrni qabul qiling.\n5. 'public void printReceipt()' metodida konsolga quyidagicha chop eting:\n\"=== KORZINKA CHECK ===\\nMijoz: [name]\\nManzil: [city], [street]\\nJami: [totalAmount] so'm\"\n6. 'Main' metodida 'Customer c = new Customer(\"Sardor\", \"+998901234567\");', 'Address a = new Address(\"Toshkent\", \"Amir Temur shoh ko'chasi\");', 'OrderReceipt r = new OrderReceipt(c, a, 145000.0);' oching va 'r.printReceipt();' chaqiring.",
      "en": "📖 Real-World Scenario (Full Domain Aggregate)\nReal-world enterprise systems link Customer, Address, and Order entities together in clean domain architecture.\n\n📋 Steps:\n1. Customer(name, phone) with getters.\n2. Address(city, street) with getters.\n3. OrderReceipt(customer, address, totalAmount) with printReceipt().\n4. In Main, instantiate all three and invoke printReceipt().",
      "ru": "📖 Контекст (Курсовая архитектура)\nСвязывание Customer, Address и Order в единую доменную модель.\n\n📋 Шаги:\n1. Customer(name, phone).\n2. Address(city, street).\n3. OrderReceipt(customer, address, totalAmount) с методом printReceipt().\n4. В Main свяжите объекты и вызовите printReceipt()."
    },
    "requirements": {
      "classes": [
        "Customer",
        "Address",
        "OrderReceipt",
        "Main"
      ],
      "methods": [
        "printReceipt"
      ],
      "constructors": [
        "Customer",
        "Address",
        "OrderReceipt"
      ]
    },
    "starterCode": "class Customer {\n    private String name;\n    private String phone;\n\n    public Customer(String name, String phone) {\n        this.name = name;\n        this.phone = phone;\n    }\n\n    public String getName() { return name; }\n    public String getPhone() { return phone; }\n}\n\nclass Address {\n    private String city;\n    private String street;\n\n    public Address(String city, String street) {\n        this.city = city;\n        this.street = street;\n    }\n\n    public String getCity() { return city; }\n    public String getStreet() { return street; }\n}\n\nclass OrderReceipt {\n    private Customer customer;\n    private Address address;\n    private double totalAmount;\n\n    public OrderReceipt(Customer customer, Address address, double totalAmount) {\n        this.customer = customer;\n        this.address = address;\n        this.totalAmount = totalAmount;\n    }\n\n    public void printReceipt() {\n        // Konsolga kassa chekini chiqaring\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        \n    }\n}",
    "solution": "class Customer {\n    private String name;\n    private String phone;\n\n    public Customer(String name, String phone) {\n        this.name = name;\n        this.phone = phone;\n    }\n\n    public String getName() { return name; }\n    public String getPhone() { return phone; }\n}\n\nclass Address {\n    private String city;\n    private String street;\n\n    public Address(String city, String street) {\n        this.city = city;\n        this.street = street;\n    }\n\n    public String getCity() { return city; }\n    public String getStreet() { return street; }\n}\n\nclass OrderReceipt {\n    private Customer customer;\n    private Address address;\n    private double totalAmount;\n\n    public OrderReceipt(Customer customer, Address address, double totalAmount) {\n        this.customer = customer;\n        this.address = address;\n        this.totalAmount = totalAmount;\n    }\n\n    public void printReceipt() {\n        System.out.println(\"=== KORZINKA CHECK ===\");\n        System.out.println(\"Mijoz: \" + this.customer.getName());\n        System.out.println(\"Manzil: \" + this.address.getCity() + \", \" + this.address.getStreet());\n        System.out.println(\"Jami: \" + this.totalAmount + \" so'm\");\n    }\n}\n\nclass Main {\n    public static void main(String[] args) {\n        Customer c = new Customer(\"Sardor\", \"+998901234567\");\n        Address a = new Address(\"Toshkent\", \"Amir Temur shoh ko'chasi\");\n        OrderReceipt r = new OrderReceipt(c, a, 145000.0);\n        r.printReceipt();\n    }\n}",
    "expectedOutput": "=== KORZINKA CHECK ===\\nMijoz: Sardor\\nManzil: Toshkent, Amir Temur shoh ko'chasi\\nJami: 145000.0 so'm",
    "detailedSolution": {
      "uz": "Tabriklaymiz! Siz 1-haftadan 4-haftagacha bo'lgan barcha OOP tamoyillarini (Klass, Inkapsulyatsiya, Vorislik va Obyektlararo Bog'lanish) to'liq zabt etdingiz! Simulyatorda to'liq elektron chek va yashil 'MUVAFFAQIYATLI TO'LANDI' muhri bosiladi!",
      "en": "Congratulations! You have mastered OOP from Classes to Encapsulation, Inheritance and Associations. The virtual phone displays the complete verified invoice with a green PAID stamp.",
      "ru": "Поздравляем! Вы полностью освоили ООП от классов до ассоциаций. В симуляторе выводится финальный электронный чек со штампом ОПЛАЧЕНО."
    }
  }
];
